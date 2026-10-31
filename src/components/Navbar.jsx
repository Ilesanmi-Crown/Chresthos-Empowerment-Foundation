import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../data/homeData';
import './Navbar.css';

export default function Navbar({ onDonateClick, onGetInvolvedClick }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (!ticking) {
        window.requestAnimationFrame(() => {
          // If at the top of the page (within top 20px), always show navbar
          if (currentScrollY <= 20) {
            setVisible(true);
            setScrolled(false);
          } else {
            setScrolled(true);
            const scrollDiff = currentScrollY - lastScrollY;

            // If scrolling up towards the top, reveal navbar
            if (scrollDiff < -4) {
              setVisible(true);
            } 
            // If scrolling down, hide navbar past threshold
            else if (scrollDiff > 4 && currentScrollY > 55) {
              setVisible(false);
            }
          }

          lastScrollY = Math.max(0, currentScrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isNavbarVisible = visible || mobileMenuOpen;

  const toggleMenu = () => setMobileMenuOpen(prev => !prev);
  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className={`navbar-header ${scrolled ? 'scrolled' : ''} ${isNavbarVisible ? 'nav-visible' : 'nav-hidden'}`}>
      {/* Main Navbar Pill Container matching Figma Frame 92 */}
      <nav className="navbar-container" aria-label="Main Navigation">
        {/* Brand Logo with exact Figma vector logo mark */}
        <a href="." className="navbar-brand" onClick={closeMenu}>
          <div className="brand-logo-mark">
            <img 
              src="/assets/figma-logo-white.svg" 
              alt="Chresthos Logo" 
              className="brand-vector-img"
            />
          </div>
          <div className="brand-text-group">
            <span className="brand-title">Chresthos</span>
            <span className="brand-subtitle">FOUNDATION</span>
          </div>
        </a>

        {/* Desktop Navigation Links with dropdown chevrons */}
        <div className="navbar-desktop-links">
          {NAV_LINKS.map((link) => (
            <a 
              key={link.label} 
              href={link.href} 
              className="nav-link"
              onClick={(e) => {
                if (link.label.toLowerCase() === 'get involved' && onGetInvolvedClick) {
                  e.preventDefault();
                  onGetInvolvedClick();
                }
              }}
            >
              <span>{link.label}</span>
              {link.hasDropdown && (
                <svg className="nav-chevron" width="10" height="6" viewBox="0 0 10 6" fill="none">
                  <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
            </a>
          ))}
        </div>

        {/* Right Action Section: Star Badge + Outline Donate Button + Mobile Toggle */}
        <div className="navbar-right-group">
          {/* Glowing The Next Teen Stars Badge - Replicated exactly from Figma (Star 2, Beams 153-157, Frame 100) */}
          <a href="/the-next-teen-star" className="nav-star-badge" title="The Next Teen Stars" aria-label="The Next Teen Stars page">
            <svg 
              className="nav-star-svg" 
              viewBox="-38 -38 76 76" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <defs>
                {/* 1. Ray Beam Linear Gradient along width (Figma Rectangles 153-157) */}
                <linearGradient id="figmaRayGrad" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0" />
                  <stop offset="33.7%" stopColor="#FFFFFF" stopOpacity="1" />
                  <stop offset="68.4%" stopColor="#FFFFFF" stopOpacity="1" />
                  <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
                </linearGradient>

                {/* 2. Star 2 Gradient Stroke (Figma Star 2: handles at 32.5%, 16.5% to 78%, 92%) */}
                <linearGradient id="figmaStarStroke" x1="32.5%" y1="16.5%" x2="78%" y2="92%">
                  <stop offset="0%" stopColor="#8A38F5" stopOpacity="1" />
                  <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0" />
                  <stop offset="75%" stopColor="#FFFFFF" stopOpacity="0" />
                  <stop offset="100%" stopColor="#8A38F5" stopOpacity="1" />
                </linearGradient>

                {/* 3. View Capsule Border Gradient (Figma Frame 100: handles 13.3%, -20.4% to 90.4%, 117.3%) */}
                <linearGradient id="figmaViewStroke" x1="13.3%" y1="-20.4%" x2="90.4%" y2="117.3%">
                  <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.85" />
                  <stop offset="34.7%" stopColor="#FFFFFF" stopOpacity="0" />
                  <stop offset="75%" stopColor="#FFFFFF" stopOpacity="0" />
                  <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.85" />
                </linearGradient>
              </defs>

              {/* Star Shape and Radiant Beams scaled up by 20% (scale 1.2) without increasing content inside */}
              <g transform="scale(1.2)">
                {/* 3 Radiant Light Beams (Figma Rectangles 156, 153, 155) rotating infinitely around star center */}
                <g className="star-beams-group">
                  {/* Beam 1: Primary Vertical Beam (rot: -96.11°, opacity: 0.55) */}
                  <rect x="-35.8" y="-3.15" width="71.6" height="6.3" rx="3.15" transform="rotate(-96.11)" fill="url(#figmaRayGrad)" opacity="0.55" />

                  {/* Beam 2: Diagonal Beam (rot: -24.63°, opacity: 0.55) */}
                  <rect x="-35.6" y="-3.15" width="71.3" height="6.3" rx="3.15" transform="rotate(-24.63)" fill="url(#figmaRayGrad)" opacity="0.55" />

                  {/* Beam 3: Diagonal Beam (rot: +19.16°, opacity: 0.55) */}
                  <rect x="-35.6" y="-3.15" width="71.3" height="6.3" rx="3.15" transform="rotate(19.16)" fill="url(#figmaRayGrad)" opacity="0.55" />
                </g>

                {/* Star 2 Body: 5-pointed Star with exact 1.258px corner radius and gradient stroke */}
                <path 
                  className="star-body-path"
                  d="M -1.197 -17.286 A 1.258 1.258 0 0 1 1.197 -17.286 L 4.425 -7.349 A 1.258 1.258 0 0 0 5.622 -6.480 L 16.070 -6.480 A 1.258 1.258 0 0 1 16.810 -4.204 L 8.357 1.938 A 1.258 1.258 0 0 0 7.900 3.344 L 11.128 13.281 A 1.258 1.258 0 0 1 9.192 14.688 L 0.739 8.546 A 1.258 1.258 0 0 0 -0.739 8.546 L -9.192 14.688 A 1.258 1.258 0 0 1 -11.128 13.281 L -7.900 3.344 A 1.258 1.258 0 0 0 -8.357 1.938 L -16.810 -4.204 A 1.258 1.258 0 0 1 -16.070 -6.480 L -5.622 -6.480 A 1.258 1.258 0 0 0 -4.425 -7.349 Z"
                  fill="#FFFFFF"
                  stroke="url(#figmaStarStroke)"
                  strokeWidth="0.42"
                />
              </g>

              {/* Central Typography: "THE NEXT TEEN STARS" (Sofia Sans Condensed 800, #8A38F5, lineHeight: 3.35px) */}
              <g className="star-text-group" fill="#8A38F5" textAnchor="middle" style={{ fontFamily: "var(--font-condensed)", fontWeight: 800, fontSize: "4.19px", letterSpacing: "0.01em" }}>
                <text x="0" y="-2.4">THE</text>
                <text x="0" y="0.8">NEXT TEEN</text>
                <text x="0" y="4.0">STARS</text>
              </g>

              {/* "View" Button Capsule (Figma Frame 100: 11.4px x 4.6px, rx: 2.3px) */}
              <g className="star-view-group" transform="translate(0, 5.8)">
                <rect 
                  x="-5.7" 
                  y="0" 
                  width="11.4" 
                  height="4.6" 
                  rx="2.3" 
                  fill="#8A38F5" 
                  stroke="url(#figmaViewStroke)" 
                  strokeWidth="0.15" 
                />
                <text 
                  x="0" 
                  y="3.05" 
                  fill="#FFFFFF" 
                  textAnchor="middle" 
                  style={{ fontFamily: "var(--font-poppins)", fontWeight: 600, fontSize: "1.68px" }}
                >
                  View
                </text>
              </g>
            </svg>
          </a>

          {/* Outline Donate Button matching Figma */}
          <button 
            type="button" 
            className="navbar-donate-outline-btn"
            onClick={onDonateClick}
          >
            Donate
          </button>

          {/* Mobile Hamburger Button */}
          <button 
            type="button" 
            className="mobile-hamburger-btn" 
            onClick={toggleMenu}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round">
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      <div className={`mobile-nav-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-nav-backdrop" onClick={closeMenu} />
        <div className="mobile-nav-sheet">
          <div className="mobile-nav-links">
            {NAV_LINKS.map((link) => (
              <a 
                key={link.label} 
                href={link.href} 
                className="mobile-nav-link"
                onClick={(e) => {
                  closeMenu();
                  if (link.label.toLowerCase() === 'get involved' && onGetInvolvedClick) {
                    e.preventDefault();
                    onGetInvolvedClick();
                  }
                }}
              >
                {link.label}
              </a>
            ))}
            <button 
              type="button" 
              className="mobile-drawer-donate-btn"
              onClick={() => {
                closeMenu();
                if (onDonateClick) onDonateClick();
              }}
            >
              Donate
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
