import React, { useEffect, useRef } from 'react';
import { HERO_CHILDREN } from '../data/homeData';
import './HeroSection.css';

export default function HeroSection({ onGetInvolvedClick, onDonateClick }) {
  const heroRef = useRef(null);

  // Ordered exactly as shown in Figma figma_hero_crop.png & figma_canvas_crop.png:
  // Left: child2 (B&W smiling boy, tilted left, in front)
  // Center: child3 (young man in green beanie, lower, behind)
  // Right: child1 (child with arms up, tilted right, in front)
  const leftChild = HERO_CHILDREN.find(c => c.role === 'left');
  const centerChild = HERO_CHILDREN.find(c => c.role === 'center');
  const rightChild = HERO_CHILDREN.find(c => c.role === 'right');

  // Hero scroll-driven animation tracking (drives outward parting of side cards & shrinking of center card)
  useEffect(() => {
    const heroEl = heroRef.current;
    if (!heroEl) return;

    let rafId = null;

    const handleScroll = () => {
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        const rect = heroEl.getBoundingClientRect();
        const scrollDistance = Math.max(300, rect.height * 0.75);
        const progress = Math.min(1, Math.max(0, -rect.top / scrollDistance));
        heroEl.style.setProperty('--hero-scroll', progress.toFixed(4));
        rafId = null;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section ref={heroRef} className="hero-section" id="home" aria-label="Hero Introduction">
      {/* Background Purple Dot-Matrix World Maps (exact Figma layers: Map 3, Map 2, Map 1) */}
      <div className="hero-bg-maps-wrapper" aria-hidden="true">
        {/* Map 3: Upper canvas background (Node 649:16 desktop, 649:943 mobile) */}
        <div className="hero-map-item map-item-3">
          <img 
            src="/assets/top-dotted-world-map.png" 
            alt="" 
            className="map-img" 
          />
        </div>

        {/* Map 2: Spans behind Headline & CTA buttons (Node 649:15 desktop, 649:942 mobile) */}
        <div className="hero-map-item map-item-2">
          <img 
            src="/assets/world-map-dots.png" 
            alt="" 
            className="map-img" 
          />
        </div>
      </div>

      <div className="hero-content-wrapper">
        {/* Main Headline matching Figma exactly */}
        <h1 className="hero-title">
          <span className="hero-title-line-1">Changing Lives,</span>
          <span className="hero-title-line-2">
            <span className="hero-purple-badge">One Child</span>
            <span className="hero-after-badge">at a Time.</span>
          </span>
        </h1>

        {/* CTA Buttons matching Figma Frame 98 & Frame 97 */}
        <div className="hero-cta-group">
          {/* Get Involved: Solid Black Pill with Heart Outline */}
          <button 
            type="button" 
            className="hero-btn-get-involved"
            onClick={onGetInvolvedClick}
          >
            <span>Get Involved</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </button>

          {/* Donate: Outline Pill with Target / Circle Arrow */}
          <button 
            type="button" 
            className="hero-btn-donate-outline"
            onClick={onDonateClick}
          >
            <span>Donate</span>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 16 16 12 12 8"></polyline>
              <line x1="8" y1="12" x2="16" y2="12"></line>
            </svg>
          </button>
        </div>

        {/* Floating Children Photo Cards Stage (Left and Right in front, Center behind) */}
        <div className="hero-cards-stage">
          <div className="hero-cards-cluster">
            {/* Center Background Card */}
            <div className="child-photo-card card-center-behind">
              <div className="card-inner">
                <img 
                  src={centerChild.image} 
                  alt={centerChild.alt}
                  className="child-image"
                />
              </div>
            </div>

            {/* Left Front Card (B&W Smiling Boy) */}
            <div className="child-photo-card card-left-front">
              <div className="card-inner">
                <img 
                  src={leftChild.image} 
                  alt={leftChild.alt}
                  className="child-image"
                />
              </div>
            </div>

            {/* Right Front Card (Child with arms raised) */}
            <div className="child-photo-card card-right-front">
              <div className="card-inner">
                <img 
                  src={rightChild.image} 
                  alt={rightChild.alt}
                  className="child-image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
