import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface LightboxProps {
  src: string;
  alt?: string;
  onClose: () => void;
}

export const Lightbox: React.FC<LightboxProps> = ({ src, alt, onClose }) => {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center bg-white/95 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <button 
        onClick={onClose}
        className="absolute top-6 right-6 p-2 text-slate-800 hover:text-violet-600 transition-colors bg-white/50 rounded-full"
      >
        <X size={32} />
      </button>
      <img 
        src={src} 
        alt={alt} 
        className="max-w-[90vw] max-h-[90vh] object-contain shadow-2xl rounded-sm"
        onClick={(e) => e.stopPropagation()} 
      />
    </div>
  );
};