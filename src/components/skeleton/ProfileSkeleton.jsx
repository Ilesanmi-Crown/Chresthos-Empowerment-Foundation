import React from 'react';
import SkeletonHeading from './SkeletonHeading';
import SkeletonLine from './SkeletonLine';
import SkeletonCard from './SkeletonCard';
import '../../styles/skeleton.css';

export default function ProfileSkeleton() {
  return (
    <div className="skeleton-page-shell" aria-busy="true" aria-label="Loading profile page">
      {/* Navbar mock */}
      <div className="skeleton-navbar-mock skeleton" />

      <main className="profile-skeleton-main">
        {/* Back breadcrumb mock */}
        <div className="profile-skeleton-back skeleton" />

        <div className="profile-skeleton-grid">
          {/* Profile Card Mock */}
          <SkeletonCard className="profile-skeleton-card" />

          {/* Profile Details Mock */}
          <div className="profile-skeleton-bio">
            <SkeletonHeading width="65%" height="38px" />
            <SkeletonLine width="40%" height="18px" style={{ marginBottom: '24px' }} />

            <SkeletonLine width="80px" height="14px" style={{ marginBottom: '14px' }} />

            {/* Paragraph 1 */}
            <SkeletonLine width="100%" height="15px" />
            <SkeletonLine width="95%" height="15px" />
            <SkeletonLine width="90%" height="15px" style={{ marginBottom: '18px' }} />

            {/* Paragraph 2 */}
            <SkeletonLine width="100%" height="15px" />
            <SkeletonLine width="92%" height="15px" />
            <SkeletonLine width="88%" height="15px" style={{ marginBottom: '18px' }} />

            {/* Paragraph 3 */}
            <SkeletonLine width="100%" height="15px" />
            <SkeletonLine width="94%" height="15px" />
            <SkeletonLine width="70%" height="15px" />
          </div>
        </div>
      </main>
    </div>
  );
}
