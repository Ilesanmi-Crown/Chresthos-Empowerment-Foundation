import React from 'react';
import { PARTNERS, TEAM_MEMBERS } from '../data/homeData';
import './TeamSection.css';
import { Link } from 'react-router-dom';
import { slugify } from '../utils/slugify';

/**
 * Renders authentic Figma decorative background vector patterns
 * Variations matching Figma Frames:
 * - stripes: Group 109 diagonal vector lines
 * - circles: Group 107 concentric ellipses
 * - diamonds: Group 108 rotated 45° checkerboard diamonds
 * - prisms: Union faceted geometric origami shards
 */
function CardPattern({ pattern, id }) {
  if (pattern === 'circles') {
    return (
      <svg className="card-bg-pattern pattern-circles" viewBox="0 0 316 376" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <circle cx="158" cy="188" r="230" fill="none" stroke="rgba(0, 0, 0, 0.14)" strokeWidth="36" />
        <circle cx="158" cy="188" r="175" fill="none" stroke="rgba(0, 0, 0, 0.14)" strokeWidth="32" />
        <circle cx="158" cy="188" r="125" fill="none" stroke="rgba(0, 0, 0, 0.14)" strokeWidth="26" />
        <circle cx="158" cy="188" r="80" fill="none" stroke="rgba(0, 0, 0, 0.14)" strokeWidth="20" />
        <circle cx="158" cy="188" r="40" fill="none" stroke="rgba(0, 0, 0, 0.14)" strokeWidth="16" />
      </svg>
    );
  }

  if (pattern === 'diamonds') {
    const patternId = `diamonds-${id}`;
    return (
      <svg className="card-bg-pattern pattern-diamonds" viewBox="0 0 316 376" preserveAspectRatio="none" aria-hidden="true">
        <defs>
          <pattern id={patternId} width="64" height="64" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
            <rect x="0" y="0" width="32" height="32" fill="rgba(0, 0, 0, 0.18)" />
            <rect x="32" y="32" width="32" height="32" fill="rgba(0, 0, 0, 0.18)" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${patternId})`} />
      </svg>
    );
  }

  if (pattern === 'prisms') {
    return (
      <svg className="card-bg-pattern pattern-prisms" viewBox="0 0 316 376" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0,0 L190,0 L110,130 Z" fill="rgba(0, 0, 0, 0.12)" />
        <path d="M190,0 L316,0 L270,110 Z" fill="rgba(0, 0, 0, 0.18)" />
        <path d="M110,130 L316,80 L220,230 Z" fill="rgba(0, 0, 0, 0.10)" />
        <path d="M0,160 L150,250 L0,376 Z" fill="rgba(0, 0, 0, 0.16)" />
        <path d="M150,250 L316,210 L316,376 L190,376 Z" fill="rgba(0, 0, 0, 0.14)" />
      </svg>
    );
  }

  // Default: 'stripes' (Group 109)
  const patternId = `stripes-${id}`;
  return (
    <svg className="card-bg-pattern pattern-stripes" viewBox="0 0 316 376" preserveAspectRatio="none" aria-hidden="true">
      <defs>
        <pattern id={patternId} width="48" height="48" patternTransform="rotate(35 0 0)" patternUnits="userSpaceOnUse">
          <line x1="0" y1="0" x2="0" y2="48" stroke="rgba(0, 0, 0, 0.18)" strokeWidth="16" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${patternId})`} />
    </svg>
  );
}

export default function TeamSection({ onSelectMember }) {
  const renderCard = (person) => {
    return (
      <Link
        key={person.id} 
        to={`/team/${slugify(person.name)}`}
        className="figma-partner-card"
        data-id={person.id}
        
        role="button"
        tabIndex={0}
        aria-label={`${person.name}, ${person.role}`}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') onSelectMember && onSelectMember(person);
        }}
      >
        {/* Layer 1: Authentic Figma Geometric Vector Background */}
        <CardPattern pattern={person.pattern} id={person.id} />

        {/* Layer 2: Figma Ellipse 22 & Ellipse 23 Ambient Backlight Auras */}
        <div className="card-glow-outer" aria-hidden="true" />
        <div className="card-glow-inner" aria-hidden="true" />

        {/* Layer 3: Subject Media - Cutout Portrait (Figma 284x300), Logo Frame, or Monogram */}
        {person.image && person.isCutout ? (
          <img 
            src={person.image} 
            alt={person.name} 
            className="card-cutout-photo"
            loading="lazy"
            onError={(e) => {
              e.target.style.display = 'none';
              const fallback = e.target.parentElement.querySelector('.card-monogram-container');
              if (fallback) fallback.style.display = 'flex';
            }}
          />
        ) : person.image && person.isLogo ? (
          <div className="card-logo-container">
            <img 
              src={person.image} 
              alt={person.name} 
              className="card-logo-photo"
              loading="lazy"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
          </div>
        ) : person.image ? (
          <img 
            src={person.image} 
            alt={person.name} 
            className="card-cutout-photo"
            loading="lazy"
            onError={(e) => {
              e.target.style.display = 'none';
              const fallback = e.target.parentElement.querySelector('.card-monogram-container');
              if (fallback) fallback.style.display = 'flex';
            }}
          />
        ) : null}

        {/* Fallback Monogram Frame (when no photo or load error) */}
        {(!person.image || (!person.isCutout && !person.isLogo && !person.image)) && (
          <div className="card-monogram-container">
            <span className="card-monogram-text">
              {person.initials || person.name.slice(0, 2).toUpperCase()}
            </span>
          </div>
        )}

        {/* Layer 4: Signature Figma Placard (Rectangle 162 & Rectangle 163 with Sofia Sans & Poppins) */}
        <div className="card-placard-underlay" aria-hidden="true" />
        <div className="card-placard">
          <h4 className="card-placard-name" title={person.name}>{person.name}</h4>
          <p className="card-placard-role" title={person.role}>{person.role}</p>
        </div>
      </Link>
    );
  };

  return (
    <section className="team-section" id="team" aria-label="Everyone Behind The Scenes">
      {/* Meet Our Partners Group (Figma Group 114 / Node 649:105 / 617:1204) */}
      <div className="section-block partners-block">
        <div className="block-header">
          <span className="section-eyebrow">EVERYONE BEHIND THE SCENES</span>
          <h2 className="section-title">Meet Our Partners</h2>
        </div>

        {/* Partner cards matching Figma design */}
        <div className="cards-grid-4x2">
          {PARTNERS.map(renderCard)}
        </div>
      </div>

      {/* Meet Our Team Group (Figma Group 112 / Node 649:482 / 617:1561) */}
      <div className="section-block team-block">
        <div className="block-header">
          <h2 className="section-title">Meet Our Team</h2>
        </div>

        {/* Team cards matching Figma design */}
        <div className="cards-grid-4x2">
          {TEAM_MEMBERS.map(renderCard)}
        </div>
      </div>
    </section>
  );
}
