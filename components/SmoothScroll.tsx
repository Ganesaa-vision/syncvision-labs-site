import React, { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import { frame, cancelFrame } from 'framer-motion';

const SmoothScroll = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Award-winning ease curve
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    // CRUCIAL: Tie Lenis directly into Framer Motion's internal update loop.
    // This guarantees both libraries calculate layouts in the exact same frame,
    // completely eliminating the "stuck scroll" and jitter.
    const update = (data: { timestamp: number }) => {
      lenis.raf(data.timestamp);
    };
    
    frame.update(update, true);

    return () => {
      cancelFrame(update);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
};

export default SmoothScroll;