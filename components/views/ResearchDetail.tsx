import React, { useState, useEffect } from 'react';
import { ResearchPaper } from '../../types';
import { ArrowLeft, FileText, Quote, ExternalLink, Loader2 } from 'lucide-react';

interface ResearchDetailProps {
  paper: ResearchPaper;
  onBack: () => void;
}

const renderSimpleMarkdown = (text: string) => {
  const renderInlineLinks = (input: string, keyPrefix: string) => {
    const parts = input.split(/(\[[^\]]+\]\([^)]+\))/g).filter(Boolean);
    return parts.map((part, i) => {
      const match = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
      if (match) {
        return (
          <a
            key={`${keyPrefix}-${i}`}
            href={match[2]}
            target="_blank"
            rel="noopener noreferrer"
            className="text-violet-600 dark:text-violet-400 underline underline-offset-2 hover:opacity-80"
          >
            {match[1]}
          </a>
        );
      }
      return <React.Fragment key={`${keyPrefix}-${i}`}>{part}</React.Fragment>;
    });
  };

  const normalized = text.replace(/\r\n/g, '\n');
  const blocks = normalized.split(/\n{2,}/).map((b) => b.trim()).filter(Boolean);
  return blocks.map((block, idx) => {
    if (block.startsWith('### ')) {
      return <h4 key={idx} className="text-lg font-serif font-medium text-slate-800 dark:text-slate-200 mt-8 mb-3">{renderInlineLinks(block.replace(/^###\s+/, ''), `h4-${idx}`)}</h4>;
    }
    if (block.startsWith('## ')) {
      return <h3 key={idx} className="text-xl font-serif text-slate-900 dark:text-slate-100 mt-10 mb-4">{renderInlineLinks(block.replace(/^##\s+/, ''), `h3-${idx}`)}</h3>;
    }
    if (block.startsWith('# ')) {
      return <h2 key={idx} className="text-2xl lg:text-3xl font-serif text-slate-900 dark:text-slate-100 mt-12 mb-6 first:mt-0">{renderInlineLinks(block.replace(/^#\s+/, ''), `h2-${idx}`)}</h2>;
    }
    if (block.startsWith('> ')) {
      return <blockquote key={idx} className="border-l-2 border-violet-500 pl-6 italic text-slate-700 dark:text-slate-400 my-8 text-xl font-serif bg-slate-50 dark:bg-slate-900/50 py-4 pr-4 rounded-r-sm">{renderInlineLinks(block.replace(/^>\s+/, ''), `quote-${idx}`)}</blockquote>;
    }
    if (block === '---') {
      return <hr key={idx} className="border-slate-200 dark:border-slate-800 my-12" />;
    }
    if (block.startsWith('```') && block.endsWith('```')) {
      const code = block.replace(/^```[\w-]*\n?/, '').replace(/\n?```$/, '');
      return (
        <div key={idx} className="bg-slate-900 rounded-sm p-4 overflow-x-auto mb-6 shadow-sm">
          <code className="text-sm font-mono text-slate-300 block whitespace-pre-wrap">{code}</code>
        </div>
      );
    }

    const lines = block.split('\n');
    const isBulletList = lines.every((line) => /^[-*]\s+/.test(line));
    if (isBulletList) {
      return (
        <ul key={idx} className="list-disc list-outside ml-4 space-y-2 mb-6 text-slate-600 dark:text-slate-300 font-light text-lg">
          {lines.map((line, liIdx) => (
            <li key={liIdx} className="pl-1">{renderInlineLinks(line.replace(/^[-*]\s+/, ''), `ul-${idx}-${liIdx}`)}</li>
          ))}
        </ul>
      );
    }

    const isOrderedList = lines.every((line) => /^\d+\.\s+/.test(line));
    if (isOrderedList) {
      return (
        <ol key={idx} className="list-decimal list-outside ml-5 space-y-2 mb-6 text-slate-600 dark:text-slate-300 font-light text-lg">
          {lines.map((line, liIdx) => (
            <li key={liIdx} className="pl-1">{renderInlineLinks(line.replace(/^\d+\.\s+/, ''), `ol-${idx}-${liIdx}`)}</li>
          ))}
        </ol>
      );
    }

    return <p key={idx} className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-light mb-6 whitespace-pre-wrap">{renderInlineLinks(block, `p-${idx}`)}</p>;
  });
};

export const ResearchDetail: React.FC<ResearchDetailProps> = ({ paper, onBack }) => {
  const [content, setContent] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const highlightYang = (text: string) => {
    return text.split(/(Yang,\s*R\.)/g).map((part, idx) =>
      /^Yang,\s*R\.$/.test(part) ? (
        <span key={idx} className="font-semibold text-violet-700 dark:text-violet-400">{part}</span>
      ) : (
        <React.Fragment key={idx}>{part}</React.Fragment>
      )
    );
  };
  const isConference = paper.id.startsWith('c');
  const venueLabel = isConference ? 'Presented At' : 'Published In';
  const publisherUrl = paper.publisherUrl || paper.codeUrl;
  const isCanvaPdf = !!paper.pdfUrl && /(^https?:\/\/)?(www\.)?canva\.com/i.test(paper.pdfUrl);
  const canvaEmbedUrl = isCanvaPdf && paper.pdfUrl
    ? paper.pdfUrl.replace('/view?', '/view?embed&')
    : '';

  useEffect(() => {
    if (paper.fileUrl) {
      setIsLoading(true);
      setError(false);
      fetch(paper.fileUrl)
        .then(res => {
          if (!res.ok) throw new Error("Failed to load content");
          return res.text();
        })
        .then(text => setContent(text))
        .catch(err => {
          console.error(err);
          setError(true);
        })
        .finally(() => setIsLoading(false));
    } else {
      setContent('');
    }
  }, [paper.fileUrl]);

  return (
    <div className="animate-slide-in pb-20">
      {/* Back Navigation */}
      <button 
        onClick={onBack}
        className="group flex items-center gap-2 text-sm font-mono text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 transition-colors mb-12"
      >
        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
        BACK TO LIST
      </button>

      {/* Header Section */}
      <header className="mb-12">
        <div className="flex flex-wrap gap-3 mb-6">
           {paper.tags.map((tag, idx) => (
             <span key={idx} className="px-3 py-1 bg-violet-50 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 text-xs font-mono uppercase tracking-wider rounded-sm">
               {tag}
             </span>
           ))}
        </div>
        
        <h1 className="text-4xl lg:text-5xl font-serif font-medium text-slate-900 dark:text-slate-100 leading-[1.15] mb-6">
          {paper.title}
        </h1>

        <div className="flex flex-col md:flex-row md:items-center gap-4 text-slate-500 dark:text-slate-400 font-light">
           <span className="italic font-serif text-lg">
             {highlightYang(paper.authors.join(", "))}
           </span>
           <span className="hidden md:block text-slate-300 dark:text-slate-600">•</span>
           <span className="font-sans text-sm">
             {paper.conference}
           </span>
           <span className="hidden md:block text-slate-300 dark:text-slate-600">•</span>
           <span className="font-mono text-sm">
             {paper.year}
           </span>
        </div>
      </header>

      {/* Action Bar */}
      <div className="flex flex-wrap gap-4 mb-12 border-b border-slate-100 dark:border-slate-800 pb-12">
        {paper.pdfUrl && paper.pdfUrl !== '#' && (
          <a 
            href={paper.pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 text-sm font-medium hover:bg-violet-700 dark:hover:bg-violet-300 transition-colors shadow-lg shadow-slate-200 dark:shadow-none"
          >
            <FileText size={16} />
            <span>{isCanvaPdf ? 'View Slides' : 'Read Paper'}</span>
          </a>
        )}
        {publisherUrl && (
           <a 
           href={publisherUrl}
           target="_blank"
           rel="noopener noreferrer"
           className="flex items-center gap-2 px-6 py-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-sm font-medium hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
         >
           <ExternalLink size={16} />
           <span>View Publisher Version</span>
         </a>
        )}
      </div>

      {/* Content Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_240px] gap-16">
        
        {/* Main Text Column */}
        <div className="space-y-12">
           {/* Abstract */}
           <section>
             <h3 className="text-xl font-serif text-slate-900 dark:text-slate-100 mb-4">Abstract</h3>
             <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-light">
               {paper.abstract}
             </p>
           </section>

           {canvaEmbedUrl && (
             <section>
               <div className="w-full max-w-4xl aspect-[16/10] bg-slate-100 dark:bg-slate-800 rounded-sm overflow-hidden border border-slate-200 dark:border-slate-700">
                 <iframe
                   src={canvaEmbedUrl}
                   title={`${paper.title} slides`}
                   className="w-full h-full"
                   loading="lazy"
                   allowFullScreen
                 />
               </div>
             </section>
           )}

           {/* MARKDOWN CONTENT */}
           <div className="min-h-[200px]">
             {isLoading ? (
               <div className="flex items-center gap-2 text-slate-400 py-12">
                 <Loader2 className="animate-spin" size={20} /> Loading content...
               </div>
             ) : error ? (
               <div className="p-6 border border-red-100 bg-red-50 text-red-600 text-sm rounded-sm">
                 Unable to load document content. Please check the file connection. ({paper.fileUrl})
               </div>
             ) : paper.fileUrl && content ? (
               <div>
                 {renderSimpleMarkdown(content)}
               </div>
             ) : (
                <div className="p-8 bg-slate-50 dark:bg-slate-900/50 border border-dashed border-slate-200 dark:border-slate-800 text-center text-slate-400 italic">
                  Detailed description pending.
                </div>
             )}
           </div>
           
           {/* Citation Block */}
           <section className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 mt-8 rounded-sm">
             <div className="flex items-center gap-2 text-violet-600 dark:text-violet-400 mb-4">
               <Quote size={20} />
               <span className="font-mono text-xs uppercase tracking-widest">BibTeX Citation</span>
             </div>
             <pre className="font-mono text-xs text-slate-600 dark:text-slate-400 overflow-x-auto whitespace-pre-wrap leading-loose">
{paper.bibtex || 'No BibTeX provided for this entry yet.'}
             </pre>
           </section>
        </div>

        {/* Sidebar Column (Metadata) */}
        <div className="space-y-8">
            <div>
              <h4 className="font-mono text-xs text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-3">{venueLabel}</h4>
              <p className="text-slate-800 dark:text-slate-200 font-serif italic">{paper.conference}</p>
            </div>
            
            {paper.doi && (
              <div>
                <h4 className="font-mono text-xs text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-3">DOI</h4>
                <p className="text-slate-600 dark:text-slate-400 font-mono text-sm break-all">{paper.doi}</p>
              </div>
            )}

            <div>
              <h4 className="font-mono text-xs text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-3">Keywords</h4>
              <div className="flex flex-wrap gap-2">
                {paper.tags.map(t => (
                  <span key={t} className="text-slate-600 dark:text-slate-400 text-sm border-b border-slate-200 dark:border-slate-700 pb-1">
                    {t}
                  </span>
                ))}
              </div>
            </div>
        </div>

      </div>
    </div>
  );
};
