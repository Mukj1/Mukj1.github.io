import React, { useState, useEffect } from 'react';
import { LogEntry } from '../../types';
import { ArrowLeft, Loader2 } from 'lucide-react';

interface LogDetailProps {
  entry: LogEntry;
  onBack: () => void;
}

const renderSimpleMarkdown = (text: string) => {
  const blocks = text.split(/\n{2,}/).map((b) => b.trim()).filter(Boolean);
  return blocks.map((block, idx) => {
    if (block.startsWith('### ')) {
      return <h4 key={idx} className="text-lg font-serif font-medium text-slate-800 dark:text-slate-200 mt-8 mb-3">{block.replace(/^###\s+/, '')}</h4>;
    }
    if (block.startsWith('## ')) {
      return <h3 key={idx} className="text-xl font-serif text-slate-900 dark:text-slate-100 mt-10 mb-4">{block.replace(/^##\s+/, '')}</h3>;
    }
    if (block.startsWith('# ')) {
      return <h2 key={idx} className="text-2xl lg:text-3xl font-serif text-slate-900 dark:text-slate-100 mt-12 mb-6">{block.replace(/^#\s+/, '')}</h2>;
    }
    if (block.startsWith('> ')) {
      return <blockquote key={idx} className="border-l-2 border-slate-300 dark:border-slate-700 pl-6 italic text-slate-600 dark:text-slate-400 my-8 text-xl font-serif">{block.replace(/^>\s+/, '')}</blockquote>;
    }
    if (block === '---') {
      return <hr key={idx} className="border-slate-200 dark:border-slate-800 my-10" />;
    }
    if (block.startsWith('```') && block.endsWith('```')) {
      const code = block.replace(/^```[\w-]*\n?/, '').replace(/\n?```$/, '');
      return (
        <div key={idx} className="bg-slate-50 dark:bg-slate-900 rounded-sm p-4 overflow-x-auto mb-6 border border-slate-100 dark:border-slate-800">
          <code className="text-sm font-mono text-slate-700 dark:text-slate-300 block whitespace-pre-wrap">{code}</code>
        </div>
      );
    }

    const lines = block.split('\n');
    const isBulletList = lines.every((line) => /^[-*]\s+/.test(line));
    if (isBulletList) {
      return (
        <ul key={idx} className="list-disc list-outside ml-4 space-y-2 mb-6 text-slate-600 dark:text-slate-300 font-light text-lg">
          {lines.map((line, liIdx) => (
            <li key={liIdx} className="pl-1">{line.replace(/^[-*]\s+/, '')}</li>
          ))}
        </ul>
      );
    }

    return <p key={idx} className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-light mb-6 whitespace-pre-wrap">{block}</p>;
  });
};

export const LogDetail: React.FC<LogDetailProps> = ({ entry, onBack }) => {
  const [content, setContent] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (entry.fileUrl) {
      setIsLoading(true);
      setError(false);
      fetch(entry.fileUrl)
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
      setContent(entry.summary); // Fallback to summary if no file
    }
  }, [entry.fileUrl, entry.summary]);

  return (
    <div className="animate-slide-in pb-20 max-w-3xl mx-auto">
      {/* Back Navigation */}
      <button 
        onClick={onBack}
        className="group flex items-center gap-2 text-sm font-mono text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 transition-colors mb-8"
      >
        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
        BACK TO LOGS
      </button>

      {/* Header Info */}
      <header className="mb-8">
        <div className="mb-4">
            <span className="font-mono text-xs text-slate-400 dark:text-slate-500">
                {entry.date.replace(/-/g, '.')}
            </span>
        </div>
        
        <h1 className="text-3xl md:text-4xl font-serif font-medium text-slate-900 dark:text-slate-100 leading-tight">
          {entry.title}
        </h1>
      </header>

      {/* Content Body */}
      <div className="min-h-[200px]">
        {isLoading ? (
            <div className="flex items-center gap-2 text-slate-400 py-12">
                <Loader2 className="animate-spin" size={20} /> Loading log entry...
            </div>
        ) : error ? (
            <div className="p-4 border border-red-100 bg-red-50 text-red-600 text-sm rounded-sm">
                Log content not found or could not be loaded. ({entry.fileUrl})
            </div>
        ) : (
            <div>
                {renderSimpleMarkdown(content)}
            </div>
        )}
      </div>

    </div>
  );
};
