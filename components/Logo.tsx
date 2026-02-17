import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`relative w-16 h-16 flex items-center justify-center ${className}`}>
      {/* Abstract Geometric Background */}
      <div className="absolute inset-0 bg-gradient-to-tr from-slate-900 to-slate-700 rounded-xl transform rotate-6 shadow-lg"></div>
      <div className="absolute inset-0 bg-white border-2 border-slate-900 rounded-xl transform -rotate-3 opacity-90"></div>
      
      {/* Monogram */}
      <div className="relative z-10 font-serif font-bold text-3xl text-slate-900 tracking-tighter">
        AC<span className="text-teal-600">.</span>
      </div>
    </div>
  );
};