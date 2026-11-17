import React from 'react';
import '../../styles/skeleton.css';

export default function SkeletonButton({ width, height, className = '', style = {} }) {
  return (
    <div
      className={`skeleton skeleton-button ${className}`}
      style={{
        ...(width ? { width } : {}),
        ...(height ? { height } : {}),
        ...style
      }}
      aria-hidden="true"
    />
  );
}
