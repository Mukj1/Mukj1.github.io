import React, { useState } from 'react';
import { LOG_DATA, GALLERY_IMAGES } from '../../constants';
import { ArrowUpRight } from 'lucide-react';
import { LogEntry } from '../../types';
import { LogDetail } from './LogDetail';
import { Lightbox } from '../Lightbox';

export const Log: React.FC = () => {
  const [selectedLog, setSelectedLog] = useState<LogEntry | null>(null);
  const [viewImage, setViewImage] = useState<string | null>(null);

  if (selectedLog) {
    return <LogDetail entry={selectedLog} onBack={() => setSelectedLog(null)} />;
  }

  return (
    <>
      <div className="animate-slide-in flex flex-col lg:flex-row gap-16 lg:gap-24">
        
        {/* Main Column: Log Entries */}
        <div className="flex-1 min-w-0">
          <header className="mb-16">
            <h2 className="text-4xl font-serif font-light text-slate-900 dark:text-slate-100">Mukj1's Log</h2>
          </header>

          <div className="grid gap-16">
            {LOG_DATA.map((log) => (
              <article 
                key={log.id} 
                className="group cursor-pointer"
                onClick={() => setSelectedLog(log)}
              >
                {/* Flat Cover Image Container - Removed Category Overlay */}
                <div className="w-full aspect-[2.2/1] bg-slate-100 dark:bg-slate-800 overflow-hidden mb-6 relative rounded-sm">
                  {log.image ? (
                    <img 
                      src={log.image} 
                      alt={log.title} 
                      className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-slate-300 dark:text-slate-600">No Image</div>
                  )}
                </div>

                <div className="flex flex-col gap-3">
                  <span className="font-mono text-xs text-slate-400 dark:text-slate-500 block">
                    {log.date.replace(/-/g, '.')}
                  </span>

                  <h3 className="text-2xl font-serif font-medium text-slate-800 dark:text-slate-200 leading-tight group-hover:text-violet-700 dark:group-hover:text-violet-400 transition-colors">
                    {log.title}
                  </h3>
                  
                  <p className="text-lg text-slate-500 dark:text-slate-400 font-light leading-relaxed line-clamp-3">
                    {log.summary}
                  </p>

                  <div className="flex justify-end mt-2">
                    <ArrowUpRight size={16} className="text-slate-300 dark:text-slate-600 group-hover:text-violet-500 dark:group-hover:text-violet-400 opacity-0 group-hover:opacity-100 transition-all" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Sidebar: Photo Wall / Moments */}
        <aside className="w-full lg:w-[480px] shrink-0">
          <header className="mb-8 lg:mb-12 pt-3">
             <h3 className="text-sm font-mono text-violet-600 dark:text-violet-400 uppercase tracking-widest">Moments</h3>
          </header>
          
          {/* Masonry Layout: columns-2 creates the layout, gap-4 creates horizontal space */}
          <div className="columns-2 gap-4">
            {GALLERY_IMAGES.map((img, idx) => (
              <div 
                key={idx} 
                className="break-inside-avoid relative group mb-4 cursor-zoom-in"
                onClick={() => setViewImage(img.src)}
              >
                 {/* w-full h-auto ensures the image respects its natural aspect ratio (21:9, 1:1, etc) */}
                 <img 
                   src={img.src} 
                   alt={img.alt} 
                   className="w-full h-auto block bg-slate-100 dark:bg-slate-800 grayscale-[0.2] hover:grayscale-0 transition-all duration-500 rounded-sm"
                 />
                 {/* Hover Overlay */}
                 <div className="absolute inset-0 bg-violet-900/0 group-hover:bg-violet-900/10 transition-colors duration-300 pointer-events-none rounded-sm" />
              </div>
            ))}
          </div>
          
          <div className="mt-6 text-center border-t border-slate-100 dark:border-slate-800 pt-6">
            <span className="text-xs text-slate-400 dark:text-slate-500 italic font-serif">
              Captured by mukj1
            </span>
          </div>
        </aside>

      </div>

      {/* Lightbox Overlay */}
      {viewImage && (
        <Lightbox src={viewImage} onClose={() => setViewImage(null)} />
      )}
    </>
  );
};