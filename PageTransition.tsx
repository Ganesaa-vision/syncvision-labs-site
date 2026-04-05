import React from 'react';
import { m } from 'framer-motion';

const pageVariants = {
  initial: {
    opacity: 0,
    y: 10,
  },
  in: {
    opacity: 1,
    y: 0,
  },
  out: {
    opacity: 0,
    y: -10,
  },
};

// Optimized transition: Faster, smoother, less motion
export const PageTransition: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <m.div 
    initial="initial" 
    animate="in" 
    exit="out" 
    variants={pageVariants} 
    transition={{ 
      duration: 0.3, 
      ease: [0.4, 0, 0.2, 1],
      opacity: { duration: 0.2 }
    }}
  >
    {children}
  </m.div>
);