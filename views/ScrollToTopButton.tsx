import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set up event listener with passive option for performance
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  // Scroll to top on click
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'auto' // Ensures instant scroll, no lag
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-[101] p-3 rounded-full bg-indigo-600 text-white shadow-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all animate-fade-in-up"
          aria-label="Go to top"
        >
          <ArrowUp className="h-6 w-6" />
        </button>
      )}
    </>
  );
};

export default ScrollToTopButton;