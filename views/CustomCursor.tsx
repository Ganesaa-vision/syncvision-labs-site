import React, { useState, useEffect } from 'react';
import { m, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor: React.FC = () => {
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const cursorScale = useMotionValue(1);

  const springConfig = { damping: 25, stiffness: 700, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);
  const cursorScaleSpring = useSpring(cursorScale, { damping: 20, stiffness: 500, mass: 0.3 });

  useEffect(() => {
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    setIsTouchDevice(isTouch);
    if (isTouch) {
      return;
    }

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target &&
        (target.tagName === 'A' ||
          target.tagName === 'BUTTON' ||
          target.closest('a') ||
          target.closest('button'))
      ) {
        cursorScale.set(1.5);
      } else {
        cursorScale.set(1);
      }
    };

    window.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY, cursorScale]);

  if (isTouchDevice) return null;

  return (
    <m.div
      style={{
        translateX: cursorXSpring,
        translateY: cursorYSpring,
        scale: cursorScaleSpring,
      }}
      className="fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-indigo-500/50 pointer-events-none z-[9999] transform-gpu will-change-transform"
    />
  );
};

export default CustomCursor;