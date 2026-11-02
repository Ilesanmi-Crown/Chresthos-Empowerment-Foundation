import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { PARTNERS, TEAM_MEMBERS } from '../data/homeData';
import { slugify } from '../utils/slugify';
import { useViewport } from '../hooks/useViewport';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './PersonalProfile.css';

export default function PersonProfile() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const viewport = useViewport();

  const person = [...PARTNERS, ...TEAM_MEMBERS].find(
    (p) => slugify(p.name) === slug
  );

  useEffect(() => {
    if (person) document.title = person.name;
    window.scrollTo(0, 0);
  }, [slug, person]);

  if (!person) {
    return <h1>Person Not Found</h1>;
  }

  const handleDonate = () => {
    navigate('/donate');
  };

  return (
    // ...your JSX stays the same
    <div className={`person-page-wrapper ${viewport.isMobile ? 'is-mobile' : 'is-desktop'}`}>
      {/* Shared Navbar matching Home page */}
      <Navbar onDonateClick={handleDonate} />

      {/* Main Profile Canvas with Figma Replica Background Maps */}
      <main className="person-profile-main" id="main-content">
        {/* Background Dot-Matrix World Map 1 (Figma Node 617:1113 / 1550x620) */}
        <div className="profile-bg-map map-replica-1" aria-hidden="true">
          <img 
            src="/assets/top-dotted-world-map.png" 
            alt="" 
            className="map-image map-1-img" 
            loading="eager"
          />
        </div>

        {/* Background Dot-Matrix World Map 2 (Figma Node 617:1114 / 2989x1195) */}
        <div className="profile-bg-map map-replica-2" aria-hidden="true">
          <img 
            src="/assets/world-map-dots.png" 
            alt="" 
            className="map-image map-2-img" 
            loading="eager"
          />
        </div>

        <div className="person-profile-container">
          {/* Breadcrumb / Back Navigation */}
          <div className="profile-breadcrumbs">
            <Link to="/#team" className="breadcrumb-back-link">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
              </svg>
              <span>Back to Partners</span>
            </Link>
          </div>

          {/* Mobile-Only Header: Centered above card (Matches Figma iPhone 16 & 17 Pro Max Frame) */}
          <div className="profile-header-mobile">
            <h1 className="profile-name-heading">{person.name}</h1>
            <p className="profile-role-subheading">{person.role}</p>
          </div>

          <div className="person-profile-grid">
            {/* Left Column (Desktop) / Centered (Mobile): Profile Card */}
            <div className="profile-card-column">
              <div className="profile-card-outer">
                {/* Purple Rounded Card Frame */}
                <div className="profile-card-inner">
                  {/* Concentric Vector Rings (Figma Ellipse 20, 21, 22 Auras) */}
                  <div className="profile-card-rings-bg" aria-hidden="true">
                    <svg viewBox="0 0 400 520" fill="none" preserveAspectRatio="xMidYMid slice" className="concentric-rings-svg">
                      <circle cx="200" cy="220" r="75" stroke="rgba(255, 255, 255, 0.16)" strokeWidth="1.5" />
                      <circle cx="200" cy="220" r="130" stroke="rgba(255, 255, 255, 0.13)" strokeWidth="1.5" />
                      <circle cx="200" cy="220" r="185" stroke="rgba(255, 255, 255, 0.10)" strokeWidth="1.5" />
                      <circle cx="200" cy="220" r="240" stroke="rgba(255, 255, 255, 0.08)" strokeWidth="1.5" />
                      <circle cx="200" cy="220" r="295" stroke="rgba(255, 255, 255, 0.06)" strokeWidth="1.5" />
                    </svg>
                  </div>

                  {/* Cutout Portrait of team/partner */}
                  <div className="profile-portrait-wrap">
                    <img 
                      src={person.image}
                      alt={person.name}
                      className="profile-portrait-img"
                    />
                  </div>

                  {/* Black Overlay Placard with Name & Role */}
                  <div className="personal-card-placard-underlay" aria-hidden="true" />
                  <div className="profile-black-placard">
                    <h2 className="placard-name">{person.name}</h2>
                    <p className="placard-role">{person.role}</p>
                  </div>
                </div>

                {/* 5 Golden 3D Stars Overlapping Bottom Edge */}
                <div className="profile-stars-overlay" aria-hidden="true">
                  <img 
                    src="/assets/stars.png" 
                    alt="5 Golden Stars" 
                    className="five-gold-stars-img"
                  />
                </div>
              </div>
            </div>

            {/* Right Column (Desktop) / Below Card (Mobile): Biography & Details */}
            <div className="profile-info-column">
              {/* Desktop-Only Header (Matches Figma website design Frame) */}
              <div className="profile-header-desktop">
                <h1 className="profile-name-heading">{person.name}</h1>
                <p className="profile-role-subheading">{person.role}</p>
              </div>

              {/* ABOUT Section Label */}
              <div className="profile-about-label">ABOUT</div>

              {/* 3 Figma Bio Paragraphs */}
              <div className="profile-bio-paragraphs">
               {(Array.isArray(person.bio) ? person.bio : [person.bio]).map((para, i) =>(
                <p key={i} className="bio-paragraph">
                  {para}
                  </p>
               ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Shared Footer matching Home page */}
      <Footer />

    </div>
  );
}
