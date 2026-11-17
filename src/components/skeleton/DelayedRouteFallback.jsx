import React from 'react';
import { useDelayedLoading } from '../../hooks/useDelayedLoading';

/**
 * Wraps a page skeleton with a 200ms delay.
 * Prevents flashing a placeholder on instant or cached route transitions.
 */
export default function DelayedRouteFallback({ skeleton }) {
  const show = useDelayedLoading(true, 200);
  if (!show) return null;
  return skeleton;
}
