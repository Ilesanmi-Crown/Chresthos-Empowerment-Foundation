import React from 'react';
import '../../styles/skeleton.css';

export default function SkeletonImage({ width, height, className = '', style = {} }) {
  return (
    <div
      className={`skeleton skeleton-image ${className}`}
      style={{
        ...(width ? { width } : {}),
        ...(height ? { height } : {}),
        ...style
      }}
      aria-hidden="true"
    />
  );
}
