import React from 'react';
import SkeletonHeading from './SkeletonHeading';
import SkeletonLine from './SkeletonLine';
import SkeletonCard from './SkeletonCard';
import '../../styles/skeleton.css';

export default function TeenStarSkeleton() {
  return (
    <div className="skeleton-page-shell" aria-busy="true" aria-label="Loading The Next Teen Star page">
      {/* Navbar mock */}
      <div className="skeleton-navbar-mock skeleton" />

      <main className="teenstar-skeleton-main">
        {/* Spotlight Hero Mock */}
        <div className="teenstar-skeleton-hero skeleton" />

        {/* Introduction text lines */}
        <div style={{ maxWidth: '800px', margin: '0 auto', width: '100%', textAlign: 'center' }}>
          <SkeletonHeading width="320px" height="40px" style={{ margin: '0 auto 16px' }} />
          <SkeletonLine width="100%" height="15px" />
          <SkeletonLine width="90%" height="15px" />
          <SkeletonLine width="80%" height="15px" />
        </div>

        {/* Benefits Grid Mock (3 cards) */}
        <div className="teenstar-skeleton-benefits-grid">
          <SkeletonCard className="teenstar-skeleton-benefit-card" />
          <SkeletonCard className="teenstar-skeleton-benefit-card" />
          <SkeletonCard className="teenstar-skeleton-benefit-card" />
        </div>
      </main>
    </div>
  );
}
