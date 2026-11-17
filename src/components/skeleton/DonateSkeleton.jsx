import React from 'react';
import SkeletonHeading from './SkeletonHeading';
import SkeletonLine from './SkeletonLine';
import SkeletonCard from './SkeletonCard';
import '../../styles/skeleton.css';

export default function DonateSkeleton() {
  return (
    <div className="skeleton-page-shell" aria-busy="true" aria-label="Loading donate page">
      {/* Navbar mock */}
      <div className="skeleton-navbar-mock skeleton" />

      <main className="donate-skeleton-main">
        <div className="donate-skeleton-layout">
          {/* Left Column: Child Image Placeholder */}
          <SkeletonCard className="donate-skeleton-child" />

          {/* Right Column: Copy & Bank Transfer Panel Mock */}
          <div className="donate-skeleton-form">
            <SkeletonHeading width="90%" height="42px" />
            <SkeletonLine width="100%" height="15px" />
            <SkeletonLine width="95%" height="15px" />
            <SkeletonLine width="80%" height="15px" />

            <div className="donate-skeleton-panel skeleton" style={{ marginTop: '20px' }} />
          </div>
        </div>
      </main>
    </div>
  );
}
