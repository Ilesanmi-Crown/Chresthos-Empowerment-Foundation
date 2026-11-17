import React from 'react';
import '../../styles/skeleton.css';

export default function SkeletonCard({ width, height, aspectRatio, className = '', style = {}, children }) {
  return (
    <div
      className={`skeleton skeleton-card ${className}`}
      style={{
        ...(width ? { width } : {}),
        ...(height ? { height } : {}),
        ...(aspectRatio ? { aspectRatio } : {}),
        ...style
      }}
      aria-hidden="true"
    >
      {children}
    </div>
  );
}
