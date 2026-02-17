import React from 'react';
import { View } from '../types';

interface NavigationProps {
  currentView: View;
  onChangeView: (view: View) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ currentView, onChangeView }) => {
  const tabs: { id: View; label: string }[] = [
    { id: 'about', label: 'Profile' },
    { id: 'research', label: 'Research' },
    { id: 'log', label: "Mukj1's Log" },
  ];

  return (
    // Changed: Added dark mode classes for background and border
    <nav className="sticky top-0 z-40 bg-slate-50/95 dark:bg-slate-950/95 backdrop-blur-sm px-8 py-8 lg:py-12 border-b border-transparent transition-colors duration-300">
      <ul className="flex space-x-12 justify-start items-center">
        {tabs.map((tab) => (
          <li key={tab.id}>
            <button
              onClick={() => onChangeView(tab.id)}
              className={`text-sm font-medium tracking-[0.15em] uppercase transition-all duration-500 ${
                currentView === tab.id
                  ? 'text-slate-900 dark:text-slate-100 border-b-2 border-violet-500 pb-1'
                  : 'text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300 hover:tracking-[0.2em]'
              }`}
            >
              {tab.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};