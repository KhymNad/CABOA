import { useLocation } from 'react-router-dom';
import { useLayoutEffect, useRef } from 'react';

const scrollPositions = {};

export default function useScrollRestoration() {
  const location = useLocation();
  const pathname = location.pathname;
  const prevPathRef = useRef(pathname);

  // Save scroll position *before* unmount
  useLayoutEffect(() => {
    return () => {
      scrollPositions[prevPathRef.current] = window.scrollY;
    };
  }, []);

  // Restore scroll position *after render*
  useLayoutEffect(() => {
    const y = scrollPositions[pathname] || 0;
    window.scrollTo(0, y);
    prevPathRef.current = pathname;
  }, [pathname]);
}

export { useScrollRestoration };