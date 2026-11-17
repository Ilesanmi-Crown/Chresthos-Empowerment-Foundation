import React from 'react';
import '../../styles/skeleton.css';

export default function SkeletonAvatar({ size, width, height, className = '', style = {} }) {
  const actualSize = size || width || height;
  return (
    <div
      className={`skeleton skeleton-avatar ${className}`}
      style={{
        ...(actualSize ? { width: actualSize, height: actualSize } : {}),
        ...style
      }}
      aria-hidden="true"
    />
  );
}
