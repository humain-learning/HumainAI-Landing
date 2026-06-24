// hooks/useResponsivePx.js (create this file)
import { useState, useEffect, useCallback } from 'react';

export const usePxCalculator = (vw: number) => {
  // Initial calculation on the client side after hydration
  const calculatePx = useCallback(() => {
    // Check if window is defined (prevents SSR errors in Next.js)
    if (typeof window !== 'undefined') {
      // Formula: (vw * window.innerWidth) / 100
      return Math.ceil((vw * window.innerWidth) / 100);
    }
    return 0; // Default for server-side rendering (SSR)
  }, [vw]);

  const [pxValue, setPxValue] = useState(calculatePx());

  useEffect(() => {
    const handleResize = () => {
      setPxValue(calculatePx());
    };

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Initial check on mount
    handleResize();

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [calculatePx]);

  return pxValue;
};

