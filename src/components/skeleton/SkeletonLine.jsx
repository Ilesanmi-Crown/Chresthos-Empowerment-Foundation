import React from 'react';
import '../../styles/skeleton.css';

export default function SkeletonLine({ width, height, className = '', style = {} }) {
  return (
    <span
      className={`skeleton skeleton-line ${className}`}
      style={{
        ...(width ? { width } : {}),
        ...(height ? { height } : {}),
        ...style
      }}
      aria-hidden="true"
    />
  );
}
