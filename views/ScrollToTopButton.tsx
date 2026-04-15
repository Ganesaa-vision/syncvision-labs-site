import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { m, AnimatePresence, useScroll } from 'framer-motion';

const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    // Efficiently track scroll position off the main thread
    return scrollY.on("change", (latest) => {
      setIsVisible(latest > 300);
    });
  }, [scrollY]);

  // Scroll to top on click
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Smooth scroll for a premium feel
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <m.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToTop}
          className="fixed bottom-24 right-6 md:bottom-28 md:right-8 z-[101] flex items-center justify-center group focus:outline-none"
          aria-label="Scroll to top"
        >
          {/* Outer Glow on Hover */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-600 via-cyan-500 to-teal-400 blur-md opacity-0 group-hover:opacity-60 transition-opacity duration-500"></div>

          {/* Inner Interactive Button */}
          <div className="w-[44px] h-[44px] bg-white dark:bg-[#0a0a0a] border border-slate-200 dark:border-white/10 rounded-full flex items-center justify-center shadow-2xl z-10 text-slate-600 dark:text-slate-400 group-hover:text-white dark:group-hover:text-white group-hover:border-transparent group-hover:bg-gradient-to-tr group-hover:from-blue-600 group-hover:via-cyan-500 group-hover:to-teal-400 transition-all duration-500">
            <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform duration-300" />
          </div>
        </m.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTopButton;