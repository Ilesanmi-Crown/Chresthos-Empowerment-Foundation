import React from 'react';
import SkeletonHeading from './SkeletonHeading';
import SkeletonLine from './SkeletonLine';
import SkeletonButton from './SkeletonButton';
import SkeletonCard from './SkeletonCard';
import '../../styles/skeleton.css';

export default function HomeSkeleton() {
  return (
    <div className="skeleton-page-shell" aria-busy="true" aria-label="Loading home page">
      {/* Navbar mock */}
      <div className="skeleton-navbar-mock skeleton" />

      <main className="home-skeleton-main">
        {/* Hero Section Mock */}
        <section className="home-skeleton-hero">
          <SkeletonHeading width="70%" height="48px" />
          <SkeletonLine width="55%" height="16px" />
          <SkeletonLine width="45%" height="16px" />
          <div style={{ display: 'flex', gap: '16px', marginTop: '16px' }}>
            <SkeletonButton width="150px" height="46px" />
            <SkeletonButton width="150px" height="46px" />
          </div>

          {/* 3 Child Cards Mock */}
          <div className="home-skeleton-cards-row">
            <SkeletonCard className="home-skeleton-child-card" />
            <SkeletonCard className="home-skeleton-child-card" />
            <SkeletonCard className="home-skeleton-child-card" />
          </div>
        </section>

        {/* Fun Facts Bar Mock */}
        <div className="home-skeleton-funfacts">
          <div className="home-skeleton-fact-item skeleton" />
          <div className="home-skeleton-fact-item skeleton" />
          <div className="home-skeleton-fact-item skeleton" />
        </div>

        {/* Team Grid Mock */}
        <div className="home-skeleton-team-grid">
          <SkeletonCard className="home-skeleton-member-card" />
          <SkeletonCard className="home-skeleton-member-card" />
          <SkeletonCard className="home-skeleton-member-card" />
          <SkeletonCard className="home-skeleton-member-card" />
        </div>
      </main>
    </div>
  );
}
