import React, { useEffect, Suspense, lazy } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';
import CookieNotice from './components/CookieNotice';
import DelayedRouteFallback from './components/skeleton/DelayedRouteFallback';
import HomeSkeleton from './components/skeleton/HomeSkeleton';
import DonateSkeleton from './components/skeleton/DonateSkeleton';
import TeenStarSkeleton from './components/skeleton/TeenStarSkeleton';
import GallerySkeleton from './components/skeleton/GallerySkeleton';
import ProfileSkeleton from './components/skeleton/ProfileSkeleton';

// Lazy-loaded route components for code-splitting
const HomePage = lazy(() => import('./pages/HomePage'));
const PersonProfile = lazy(() => import('./pages/PersonalProfile'));
const DonatePage = lazy(() => import('./pages/DonatePage'));
const TeenStarPage = lazy(() => import('./pages/TeenStarPage'));
const GalleryPage = lazy(() => import('./pages/GalleryPage'));
const PrivacyPolicyPage = lazy(() => import('./pages/PrivacyPolicyPage'));

/**
 * Ensures page scrolls to top when route changes
 */
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const target = document.getElementById(hash.slice(1));
      if (target) {
        target.scrollIntoView({ behavior: 'instant', block: 'start' });
        return;
      }
    }

    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}

export default function App() {
  return (
    <ErrorBoundary>
      <ScrollToTop />
      <CookieNotice />
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<DelayedRouteFallback skeleton={<HomeSkeleton />} />}>
              <HomePage />
            </Suspense>
          }
        />
        <Route
          path="/donate"
          element={
            <Suspense fallback={<DelayedRouteFallback skeleton={<DonateSkeleton />} />}>
              <DonatePage />
            </Suspense>
          }
        />
        <Route
          path="/the-next-teen-star"
          element={
            <Suspense fallback={<DelayedRouteFallback skeleton={<TeenStarSkeleton />} />}>
              <TeenStarPage />
            </Suspense>
          }
        />
        <Route
          path="/gallery"
          element={
            <Suspense fallback={<DelayedRouteFallback skeleton={<GallerySkeleton />} />}>
              <GalleryPage />
            </Suspense>
          }
        />
        <Route
          path="/privacy-policy"
          element={
            <Suspense fallback={<DelayedRouteFallback skeleton={null} />}>
              <PrivacyPolicyPage />
            </Suspense>
          }
        />
        <Route
          path="/:slug"
          element={
            <Suspense fallback={<DelayedRouteFallback skeleton={<ProfileSkeleton />} />}>
              <PersonProfile />
            </Suspense>
          }
        />
        <Route
          path="/team/:slug"
          element={
            <Suspense fallback={<DelayedRouteFallback skeleton={<ProfileSkeleton />} />}>
              <PersonProfile />
            </Suspense>
          }
        />
        {/* Fallback to Home for unknown paths */}
        <Route
          path="*"
          element={
            <Suspense fallback={<DelayedRouteFallback skeleton={<HomeSkeleton />} />}>
              <HomePage />
            </Suspense>
          }
        />
      </Routes>
    </ErrorBoundary>
  );
}
