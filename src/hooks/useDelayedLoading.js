import { useState, useEffect } from 'react';

/**
 * Custom hook to delay showing a skeleton loader.
 * Prevents flickering on fast page transitions (<200ms).
 */
export function useDelayedLoading(isLoading = true, delay = 200) {
  const [showSkeleton, setShowSkeleton] = useState(false);

  useEffect(() => {
    if (!isLoading) {
      setShowSkeleton(false);
      return undefined;
    }

    const timer = window.setTimeout(() => {
      setShowSkeleton(true);
    }, delay);

    return () => {
      window.clearTimeout(timer);
    };
  }, [isLoading, delay]);

  return showSkeleton;
}

export default useDelayedLoading;
