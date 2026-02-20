import React, { RefObject, useEffect, useState } from 'react';
import { ChevronUp } from 'lucide-react';

interface BackToTopButtonProps {
  scrollContainerRef: RefObject<HTMLElement | null>;
}

export const BackToTopButton: React.FC<BackToTopButtonProps> = ({ scrollContainerRef }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const threshold = 120;

    const updateVisibility = () => {
      const containerScrollTop = scrollContainerRef.current?.scrollTop ?? 0;
      const pageScrollTop = window.scrollY || document.documentElement.scrollTop || 0;
      setIsVisible(containerScrollTop > threshold || pageScrollTop > threshold);
    };

    updateVisibility();

    const container = scrollContainerRef.current;
    container?.addEventListener('scroll', updateVisibility, { passive: true });
    window.addEventListener('scroll', updateVisibility, { passive: true });
    window.addEventListener('resize', updateVisibility);

    return () => {
      container?.removeEventListener('scroll', updateVisibility);
      window.removeEventListener('scroll', updateVisibility);
      window.removeEventListener('resize', updateVisibility);
    };
  }, [scrollContainerRef]);

  const scrollToTop = () => {
    scrollContainerRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-50 rounded-full p-3 shadow-sm transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-300 ${
        isVisible
          ? 'pointer-events-auto translate-y-0 opacity-100 bg-violet-100 text-violet-500 hover:bg-violet-200'
          : 'pointer-events-none translate-y-2 opacity-0 bg-violet-100 text-violet-500'
      }`}
    >
      <ChevronUp size={20} />
    </button>
  );
};
