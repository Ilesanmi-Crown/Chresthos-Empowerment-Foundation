import React from 'react';
import SkeletonHeading from './SkeletonHeading';
import SkeletonLine from './SkeletonLine';
import SkeletonCard from './SkeletonCard';
import '../../styles/skeleton.css';

export default function GallerySkeleton() {
  return (
    <div className="skeleton-page-shell" aria-busy="true" aria-label="Loading gallery page">
      {/* Navbar mock */}
      <div className="skeleton-navbar-mock skeleton" />

      <main className="gallery-skeleton-main">
        {/* Header Mock */}
        <section className="gallery-skeleton-header">
          <SkeletonHeading width="240px" height="48px" />
          <SkeletonLine width="100%" height="15px" />
          <SkeletonLine width="90%" height="15px" />
          <SkeletonLine width="75%" height="15px" />
        </section>

        {/* 2-Column Grid Mock */}
        <div className="gallery-skeleton-grid-2col">
          <SkeletonCard className="gallery-skeleton-item-2col" />
          <SkeletonCard className="gallery-skeleton-item-2col" />
          <SkeletonCard className="gallery-skeleton-item-2col" />
          <SkeletonCard className="gallery-skeleton-item-2col" />
        </div>

        {/* 4-Column Row Mock (2x2 on mobile) */}
        <div className="gallery-skeleton-grid-4col">
          <SkeletonCard className="gallery-skeleton-item-4col" />
          <SkeletonCard className="gallery-skeleton-item-4col" />
          <SkeletonCard className="gallery-skeleton-item-4col" />
          <SkeletonCard className="gallery-skeleton-item-4col" />
        </div>

        {/* 3-Item Row Mock */}
        <div className="gallery-skeleton-flex-3col">
          <SkeletonCard className="gallery-skeleton-item-3col-1" />
          <SkeletonCard className="gallery-skeleton-item-3col-2" />
          <SkeletonCard className="gallery-skeleton-item-3col-3" />
        </div>
      </main>
    </div>
  );
}
