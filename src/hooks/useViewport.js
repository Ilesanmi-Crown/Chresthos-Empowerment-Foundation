import { useState, useEffect } from 'react';

/**
 * Custom hook for browser-side viewport measurement and adaptive scale calculations.
 * Reference Desktop: 1440px | Reference Mobile: 440px
 */
export function useViewport() {
  const isClient = typeof window !== 'undefined';

  const [viewport, setViewport] = useState({
    width: isClient ? window.innerWidth : 1440,
    height: isClient ? window.innerHeight : 900,
    clientWidth: isClient ? document.documentElement.clientWidth : 1440,
    clientHeight: isClient ? document.documentElement.clientHeight : 900,
    isMobile: isClient ? window.innerWidth <= 900 : false,
    isTablet: isClient ? window.innerWidth > 900 && window.innerWidth < 1024 : false,
    isDesktop: isClient ? window.innerWidth >= 1024 : true,
    // Reference-relative scaling metrics:
    desktopScale: isClient ? Math.min(1.2, Math.max(0.65, window.innerWidth / 1440)) : 1,
    mobileScale: isClient ? Math.min(1.3, Math.max(0.75, window.innerWidth / 440)) : 1
  });

  useEffect(() => {
    if (!isClient) return;

    let rafId = null;

    const handleResize = () => {
      if (rafId) cancelAnimationFrame(rafId);

      rafId = requestAnimationFrame(() => {
        const w = window.innerWidth;
        const h = window.innerHeight;
        const cw = document.documentElement.clientWidth;
        const ch = document.documentElement.clientHeight;

        setViewport(prev => {
          // Avoid unnecessary re-renders if dimensions haven't changed
          if (prev.width === w && prev.height === h && prev.clientWidth === cw) {
            return prev;
          }
          return {
            width: w,
            height: h,
            clientWidth: cw,
            clientHeight: ch,
            isMobile: w <= 900,
            isTablet: w > 900 && w < 1024,
            isDesktop: w >= 1024,
            desktopScale: Math.min(1.2, Math.max(0.65, w / 1440)),
            mobileScale: Math.min(1.3, Math.max(0.75, w / 440))
          };
        });
      });
    };

    window.addEventListener('resize', handleResize, { passive: true });
    // Initial sync
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [isClient]);

  return viewport;
}
