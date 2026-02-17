import React from 'react';
import { PROFILE, SOCIAL_LINKS } from '../constants';
import { MapPin, FileText, Building2, Moon, Sun } from 'lucide-react';

interface SidebarProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ isDarkMode, toggleTheme }) => {
  return (
    // Layout: 
    // Mobile: w-full, h-auto, row layout, p-4, border-b
    // Desktop: w-80, h-full, col layout, p-12, border-r
    <aside className="w-full lg:w-80 h-auto lg:h-full bg-white dark:bg-slate-900 border-b lg:border-b-0 lg:border-r border-slate-100 dark:border-slate-800 flex flex-row lg:flex-col items-center lg:items-start justify-between lg:justify-start p-4 lg:p-12 shrink-0 z-20 transition-colors duration-300 relative">
      
      {/* Identity Group */}
      <div className="flex flex-row lg:flex-col items-center lg:items-start gap-4 lg:gap-0 lg:mb-12 animate-slide-in">
        {/* Avatar */}
        <div className="relative overflow-hidden w-12 h-12 lg:w-40 lg:h-40 bg-slate-100 dark:bg-slate-800 rounded-full lg:rounded-sm shrink-0 lg:mb-8 border lg:border-0 border-slate-100 dark:border-slate-800">
           <img 
            src={PROFILE.avatar} 
            alt={PROFILE.name} 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Name Info */}
        <div className="flex flex-col">
            <h1 className="text-xl lg:text-4xl font-serif font-medium text-slate-900 dark:text-slate-100 tracking-tight leading-none lg:mb-2">
            {/* Mobile: Single Line Name, Desktop: Split Line */}
            <span className="lg:hidden">{PROFILE.name}</span>
            <span className="hidden lg:block">
                {PROFILE.name.split(' ')[0]}<br/>
                {PROFILE.name.split(' ')[1]}
            </span>
            </h1>
            <h2 className="hidden lg:block text-xl font-serif text-slate-600 dark:text-slate-400 mb-4">{PROFILE.chineseName}</h2>
            
            <p className="hidden lg:block text-xs font-mono text-violet-600 dark:text-violet-400 mt-2 tracking-widest uppercase border-t border-slate-200 dark:border-slate-800 pt-4 w-full">
            {PROFILE.title}
            </p>
        </div>
      </div>

      {/* Desktop Only: Details Section */}
      <div className="hidden lg:block space-y-4 text-base text-slate-900 dark:text-slate-300 mb-16 font-light tracking-wide w-full">
        <div className="flex items-start gap-3">
          <div className="w-6 h-6 flex items-center justify-center shrink-0 text-slate-700 dark:text-slate-400">
            <Building2 size={18} />
          </div>
          <span className="leading-6">{PROFILE.affiliation}</span>
        </div>
        
        <div className="flex items-start gap-3">
          <div className="w-6 h-6 flex items-center justify-center shrink-0 text-slate-700 dark:text-slate-400">
            <MapPin size={18} />
          </div>
          <span className="leading-6">{PROFILE.location}</span>
        </div>
        
        <a 
          href={PROFILE.cvLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-start gap-3 hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-300 w-fit group"
        >
          <div className="w-6 h-6 flex items-center justify-center shrink-0 text-slate-700 dark:text-slate-400 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
            <FileText size={18} />
          </div>
          <span className="leading-6 group-hover:underline decoration-1 underline-offset-4">Curriculum Vitae</span>
        </a>
      </div>

      {/* Theme Toggle (Mobile Position: Right side of header) */}
      <div className="lg:hidden">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full text-slate-400 hover:text-violet-600 dark:hover:text-violet-400 bg-slate-50 dark:bg-slate-800/50 transition-all duration-300"
            aria-label="Toggle Dark Mode"
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
      </div>

      {/* Desktop Only: Footer Area (Socials + Toggle) */}
      <div className="hidden lg:flex mt-auto flex-col gap-8 w-full">
        <div className="flex gap-6 items-center">
          {SOCIAL_LINKS.map((link) => (
            <a 
              key={link.platform}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-700 dark:text-slate-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-300 shrink-0"
              title={link.platform}
            >
              {link.icon}
            </a>
          ))}
        </div>
        
        <div className="flex items-center justify-between border-t border-slate-100 dark:border-slate-800 pt-8">
           <button
            onClick={toggleTheme}
            className="p-2 -ml-2 rounded-full text-slate-400 hover:text-violet-600 dark:hover:text-violet-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all duration-300"
            aria-label="Toggle Dark Mode"
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <div className="text-[10px] text-slate-400 dark:text-slate-500 font-sans tracking-widest uppercase">
            © 2026 Mukj1.
          </div>
        </div>
      </div>
    </aside>
  );
};