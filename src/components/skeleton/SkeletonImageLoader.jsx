import React, { useState } from 'react';
import '../../styles/skeleton.css';

/**
 * Reusable image component that displays a skeleton shimmer placeholder
 * reserving exact layout dimensions until the image is loaded.
 * Ensures zero layout shift and smooth opacity fade-in.
 */
export default function SkeletonImageLoader({
  src,
  alt = '',
  className = '',
  wrapperClassName = '',
  aspectRatio,
  loading,
  style = {},
  ...rest
}) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      className={`skeleton-img-wrapper ${wrapperClassName}`}
      style={{
        ...(aspectRatio ? { aspectRatio } : {}),
        ...style
      }}
      aria-busy={!loaded}
    >
      {!loaded && (
        <div
          className="skeleton skeleton-img-placeholder"
          aria-hidden="true"
        />
      )}
      <img
        src={src}
        alt={alt}
        className={`${className} ${loaded ? 'img-loaded' : 'img-loading'}`}
        loading={loading}
        onLoad={() => setLoaded(true)}
        onError={() => setLoaded(true)}
        {...rest}
      />
    </div>
  );
}
