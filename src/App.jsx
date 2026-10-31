import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PersonProfile from './pages/PersonalProfile';
import DonatePage from './pages/DonatePage';
import TeenStarPage from './pages/TeenStarPage';
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
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/donate" element={<DonatePage />} />
        <Route path="/the-next-teen-star" element={<TeenStarPage />} />
        <Route path="/:slug" element={<PersonProfile />} />
        <Route path="/team/:slug" element={<PersonProfile />} />
        {/* Fallback to Home for unknown paths */}
        <Route path="*" element={<HomePage />} />
      </Routes>
    </>
  );
}
