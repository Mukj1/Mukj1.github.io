import React, { useState } from 'react';
import { RESEARCH_DATA, CONFERENCE_DATA } from '../../constants';
import { ArrowUpRight } from 'lucide-react';
import { ResearchDetail } from './ResearchDetail';
import { ResearchPaper } from '../../types';

export const Research: React.FC = () => {
  const [selectedPaper, setSelectedPaper] = useState<ResearchPaper | null>(null);

  if (selectedPaper) {
    return <ResearchDetail paper={selectedPaper} onBack={() => setSelectedPaper(null)} />;
  }

  // Helper component to render a list of research items (papers or conferences)
  const ResearchList = ({ items }: { items: ResearchPaper[] }) => (
    <div className="flex flex-col gap-10 lg:gap-12">
      {items.map((item) => (
        <div 
          key={item.id} 
          onClick={() => setSelectedPaper(item)}
          className="group block cursor-pointer"
        >
          {/* Flat Cover Image Container */}
          <div className="w-full aspect-[2.2/1] bg-slate-100 dark:bg-slate-800 overflow-hidden mb-5 relative rounded-sm">
            {item.image ? (
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-slate-300 dark:text-slate-600">No Image</div>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-baseline">
              {/* Left: Keywords (Tags) */}
              <span className="font-mono text-xs text-violet-600 dark:text-violet-400 uppercase tracking-widest truncate max-w-[80%]">
                {item.tags.join(" • ")}
              </span>
              {/* Right: Year */}
              <span className="font-mono text-xs text-slate-400 dark:text-slate-500 shrink-0">{item.year}</span>
            </div>

            <h3 className="text-xl lg:text-2xl font-serif font-medium text-slate-800 dark:text-slate-200 leading-tight group-hover:text-violet-700 dark:group-hover:text-violet-400 transition-colors mt-1">
              {item.title}
            </h3>
            
            <p className="text-base lg:text-lg text-slate-500 dark:text-slate-400 font-light leading-relaxed line-clamp-3 mt-1">
              {item.abstract}
            </p>
            
            <div className="flex items-center gap-2 mt-2">
               <span className="text-sm text-slate-400 dark:text-slate-500 italic font-serif">
                {item.authors.join(", ")}
                <span className="opacity-60 ml-2 font-normal not-italic font-sans text-xs">
                   | {item.conference}
                </span>
              </span>
              <ArrowUpRight size={14} className="text-slate-300 dark:text-slate-600 group-hover:text-violet-500 dark:group-hover:text-violet-400 opacity-0 group-hover:opacity-100 transition-all ml-auto" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="animate-slide-in">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
        
        {/* Left Column: Publications */}
        <section>
          <header className="mb-10 border-b border-slate-100 dark:border-slate-800 pb-4">
            <h2 className="text-3xl font-serif font-light text-slate-900 dark:text-slate-100">Selected Publications</h2>
          </header>
          <ResearchList items={RESEARCH_DATA} />
        </section>

        {/* Right Column: Conferences */}
        <section>
          <header className="mb-10 border-b border-slate-100 dark:border-slate-800 pb-4">
            <h2 className="text-3xl font-serif font-light text-slate-900 dark:text-slate-100">Conferences</h2>
          </header>
          <ResearchList items={CONFERENCE_DATA} />
        </section>

      </div>
    </div>
  );
};