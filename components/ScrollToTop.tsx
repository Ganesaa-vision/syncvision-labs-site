import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Disable browser's default scroll restoration to prevent fighting
    if (window.history.scrollRestoration) {
      window.history.scrollRestoration = 'manual';
    }
    // Enforce instant scrolling to top to avoid lag
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname]);

  return null;
};

export default ScrollToTop;