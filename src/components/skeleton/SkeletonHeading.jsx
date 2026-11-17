import React from 'react';
import '../../styles/skeleton.css';

export default function SkeletonHeading({ width, height, className = '', style = {} }) {
  return (
    <div
      className={`skeleton skeleton-heading ${className}`}
      style={{
        ...(width ? { width } : {}),
        ...(height ? { height } : {}),
        ...style
      }}
      aria-hidden="true"
    />
  );
}
