import React from 'react';
import { CONTACT_INFO } from '../data/homeData';
import ContactModal from './ContactModal';
import './Footer.css';

export default function Footer() {
  const [contactModalOpen, setContactModalOpen] = React.useState(false);

  return (
    <footer className="figma-footer" id="contact" aria-label="Site Footer">
      {/* Outer Purple Canvas (Figma Rectangle 118: Node 617:1958, Radius: 70px) */}
      <div className="footer-canvas">
        {/* Background Dark Geometric Facet Shapes (Matching Figma subtract & rectangle layers) */}
      <div className="footer-accents" aria-hidden="true">
          {/* Top-Right Circle Accent (Figma Rectangle 140: 202px x 204px, Radius 1000px) */}
          <div className="accent-circle-top-right" />
          
          {/* Top Edge Subtraction Shapes (Figma Subtract 617:1962 & 617:1976) */}
          <div className="accent-subtract-top-left" />
          <div className="accent-subtract-top-center" />
          
          {/* Side Edge Subtraction Shapes (Figma Subtract 617:1965 & 617:1987) */}
          <div className="accent-subtract-left" />
          <div className="accent-subtract-right" />
          
          {/* Bottom Corner Shapes (Figma Rectangle 127 & Rectangle 132) */}
          <div className="accent-circle-bottom-left" />
          <div className="accent-shape-bottom-right" />
        </div>

        {/* The Next Teen Stars Badge - Exact Replica of Navbar Star scaled to Footer Size (158.2px) */}
        <div className="teen-stars-badge" aria-label="The Next Teen Stars Badge">
          <a 
            href="/the-next-teen-star" 
            className="footer-star-badge" 
            title="The Next Teen Stars" 
            aria-label="The Next Teen Stars page"
          >
            <svg 
              className="footer-star-svg" 
              viewBox="-19 -19 38 38" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <defs>
                {/* 1. Ray Beam Linear Gradient along width */}
                <linearGradient id="footerRayGrad" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0" />
                  <stop offset="33.7%" stopColor="#FFFFFF" stopOpacity="1" />
                  <stop offset="68.4%" stopColor="#FFFFFF" stopOpacity="1" />
                  <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
                </linearGradient>

                {/* 2. Star Gradient Stroke */}
                <linearGradient id="footerStarStroke" x1="32.5%" y1="16.5%" x2="78%" y2="92%">
                  <stop offset="0%" stopColor="#8A38F5" stopOpacity="1" />
                  <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0" />
                  <stop offset="75%" stopColor="#FFFFFF" stopOpacity="0" />
                  <stop offset="100%" stopColor="#8A38F5" stopOpacity="1" />
                </linearGradient>

                {/* 3. View Capsule Border Gradient */}
                <linearGradient id="footerViewStroke" x1="13.3%" y1="-20.4%" x2="90.4%" y2="117.3%">
                  <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.85" />
                  <stop offset="34.7%" stopColor="#FFFFFF" stopOpacity="0" />
                  <stop offset="75%" stopColor="#FFFFFF" stopOpacity="0" />
                  <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.85" />
                </linearGradient>
              </defs>

              {/* 3 Radiant Light Beams (Scaled to Footer Star) rotating infinitely around star center */}
              <g className="star-beams-group">
                {/* Beam 1: Primary Vertical Beam (rot: -96.11°, opacity: 0.55) */}
                <rect x="-35.8" y="-3.15" width="71.6" height="6.3" rx="3.15" transform="rotate(-96.11)" fill="url(#footerRayGrad)" opacity="0.55" />

                {/* Beam 2: Diagonal Beam (rot: -24.63°, opacity: 0.55) */}
                <rect x="-35.6" y="-3.15" width="71.3" height="6.3" rx="3.15" transform="rotate(-24.63)" fill="url(#footerRayGrad)" opacity="0.55" />

                {/* Beam 3: Diagonal Beam (rot: +19.16°, opacity: 0.55) */}
                <rect x="-35.6" y="-3.15" width="71.3" height="6.3" rx="3.15" transform="rotate(19.16)" fill="url(#footerRayGrad)" opacity="0.55" />
              </g>

              {/* Star Body: 5-pointed Star with exact corner radius and gradient stroke */}
              <path 
                className="star-body-path"
                d="M -1.197 -17.286 A 1.258 1.258 0 0 1 1.197 -17.286 L 4.425 -7.349 A 1.258 1.258 0 0 0 5.622 -6.480 L 16.070 -6.480 A 1.258 1.258 0 0 1 16.810 -4.204 L 8.357 1.938 A 1.258 1.258 0 0 0 7.900 3.344 L 11.128 13.281 A 1.258 1.258 0 0 1 9.192 14.688 L 0.739 8.546 A 1.258 1.258 0 0 0 -0.739 8.546 L -9.192 14.688 A 1.258 1.258 0 0 1 -11.128 13.281 L -7.900 3.344 A 1.258 1.258 0 0 0 -8.357 1.938 L -16.810 -4.204 A 1.258 1.258 0 0 1 -16.070 -6.480 L -5.622 -6.480 A 1.258 1.258 0 0 0 -4.425 -7.349 Z"
                fill="#FFFFFF"
                stroke="url(#footerStarStroke)"
                strokeWidth="0.42"
              />

              {/* Star Content Group (Typography + View Capsule) moved upward by 1px (-0.6 -> -1.6) */}
              <g className="star-content-group" transform="translate(0, -1.6) scale(0.78)">
                {/* Central Typography: "THE NEXT TEEN STARS" (Sofia Sans Condensed 800, #8A38F5) */}
                <g className="star-text-group" fill="#8A38F5" textAnchor="middle" style={{ fontFamily: "var(--font-condensed)", fontWeight: 800, fontSize: "4.2px", letterSpacing: "0.02em" }}>
                  <text x="0" y="-1.8">THE</text>
                  <text x="0" y="1.5">NEXT TEEN</text>
                  <text x="0" y="4.8">STARS</text>
                </g>

                {/* "View" Button Capsule */}
                <g className="star-view-group" transform="translate(0, 6.6)">
                  <rect 
                    x="-5.95" 
                    y="0" 
                    width="11.9" 
                    height="4.9" 
                    rx="2.45" 
                    fill="#8A38F5" 
                    stroke="url(#footerViewStroke)" 
                    strokeWidth="0.15" 
                  />
                  <text 
                    x="0" 
                    y="3.25" 
                    fill="#FFFFFF" 
                    textAnchor="middle" 
                    style={{ fontFamily: "var(--font-poppins)", fontWeight: 600, fontSize: "1.8px" }}
                  >
                    View
                  </text>
                </g>
              </g>
            </svg>
          </a>
        </div>

        {/* Inner Glassmorphic Card (Figma Rectangle 145: Node 617:1968, 1040px x 526.8px, Radius 30px) */}
        <div className="footer-glass-card">
          <div className="card-columns-grid">
            {/* Left Column: Brand, Mission Statement, Website URL */}
            <div className="card-brand-col">
              <div className="brand-logo-row">
                <img 
                  src="/assets/figma-logo-white.svg" 
                  alt="Chresthos Logo Mark" 
                  className="brand-logo-mark"
                />
                <div className="brand-titles">
                  <span className="brand-name">Chresthos</span>
                  <span className="brand-foundation">FOUNDATION</span>
                </div>
              </div>

              <p className="brand-mission-text">
                A dedicated nonprofit organization committed to breaking cycles of disadvantage by empowering children, young individuals, and communities through targeted, compassionate interventions.
              </p>

              <div className="brand-domain-row">
                <svg className="domain-icon" width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 2a8 8 0 100 16 8 8 0 000-16zM4.07 10c0-.68.08-1.34.23-1.97h2.82c-.08.64-.12 1.3-.12 1.97 0 .67.04 1.33.12 1.97H4.3A7.97 7.97 0 014.07 10zm1.02-3.97h2.38c.34-1.12.83-2.11 1.43-2.92A7.96 7.96 0 005.09 6.03zm3.8-3.66c-.63.84-1.15 1.91-1.5 3.16h5.22c-.35-1.25-.87-2.32-1.5-3.16a7.48 7.48 0 00-2.22 0zm3.83.74c.6.81 1.09 1.8 1.43 2.92h2.38a7.96 7.96 0 00-3.81-2.92zM8.03 10c0-.67.05-1.33.13-1.97h3.68c.08.64.13 1.3.13 1.97 0 .67-.05 1.33-.13 1.97H8.16A14.9 14.9 0 018.03 10zm.35 3.97c.35 1.25.87 2.32 1.5 3.16.74-.08 1.48-.08 2.22 0 .63-.84 1.15-1.91 1.5-3.16H8.38zm6.53 0h-2.38c-.34 1.12-.83 2.11-1.43 2.92a7.96 7.96 0 003.81-2.92zm1.02-1.97h-2.82c.08-.64.12-1.3.12-1.97 0-.67-.04-1.33-.12-1.97h2.82c.15.63.23 1.29.23 1.97 0 .68-.08 1.34-.23 1.97zm-1.02-5.97h2.38a7.96 7.96 0 00-3.81-2.92c.6.81 1.09 1.8 1.43 2.92zM5.09 13.97a7.96 7.96 0 003.81 2.92c-.6-.81-1.09-1.8-1.43-2.92H5.09z" clipRule="evenodd" />
                </svg>
                <a 
                  href="https://www.chresthosempowermentfoundation.com" 
                  className="brand-domain-link"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  {CONTACT_INFO.website}
                </a>
              </div>
            </div>

            {/* Right Column: GET IN TOUCH, Contact items, Contact pill */}
            <div className="card-contact-col">
              <h4 className="contact-heading">GET IN TOUCH</h4>

              <div className="contact-list">
                {/* Address (Figma carbon:location-filled + Text 617:1993) */}
                <div className="contact-row">
                  <div className="contact-icon-wrapper" aria-hidden="true">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                      <path d="M8 1a5 5 0 00-5 5c0 3.75 5 9 5 9s5-5.25 5-9a5 5 0 00-5-5zm0 7a2 2 0 110-4 2 2 0 010 4z"/>
                    </svg>
                  </div>
                  <p className="contact-text contact-address">{CONTACT_INFO.address}</p>
                </div>

                {/* Email (Figma famicons:mail-open + Text 617:1994) */}
                <div className="contact-row">
                  <div className="contact-icon-wrapper" aria-hidden="true">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                      <path d="M1.5 5.5l6.5 4.5 6.5-4.5V13a1 1 0 01-1 1h-11a1 1 0 01-1-1V5.5z"/>
                      <path d="M14.2 4.1L8 8.4 1.8 4.1A1 1 0 012.5 3h11a1 1 0 01.7 1.1z"/>
                    </svg>
                  </div>
                  <a href={`mailto:${CONTACT_INFO.email}`} className="contact-text contact-link">
                    {CONTACT_INFO.email},
                  </a>
                </div>

                {/* Phones (Figma f7:phone-down-fill + Text 617:1995) */}
                <div className="contact-row">
                  <div className="contact-icon-wrapper" aria-hidden="true">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                      <path d="M3.6 11.8c3.2 2.6 8 2.6 11.2 0l-1.6-2.2c-.4-.5-1.1-.6-1.6-.2l-1.3.9c-1.5-.7-2.6-1.8-3.3-3.3l.9-1.3c.4-.5.3-1.2-.2-1.6L5.5 2.5C5 2.1 4.3 2.2 3.9 2.7l-1.2 1.4c-.6.7-.7 1.8-.3 2.7.9 2 2.4 3.7 4.2 5z"/>
                    </svg>
                  </div>
                  <p className="contact-text contact-phones">
                    {CONTACT_INFO.phones.map((phone, i) => (
                      <React.Fragment key={i}>
                        <a href={`tel:${phone.replace(/\s+/g, '')}`} className="contact-link">{phone}</a>
                        {i < CONTACT_INFO.phones.length - 1 ? ', ' : ''}
                      </React.Fragment>
                    ))}
                  </p>
                </div>

                {/* Contact Pill Button (Figma Frame 99: 76px x 39px, Radius 20px) */}
                <div className="contact-btn-wrapper">
                  <button
                    type="button"
                    className="contact-pill-btn"
                    onClick={() => setContactModalOpen(true)}
                    aria-haspopup="dialog"
                  >
                    <span>Contact</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Divider Line (Figma Line 62: Node 617:1979, 950px, Linear Gradient) */}
          <div className="card-divider-line" aria-hidden="true" />

          {/* Copyright Row (Figma Frame 118 + Text 617:1982) */}
          <div className="card-copyright-row">
            <div className="copyright-icon-wrapper" aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <circle cx="10" cy="10" r="8.5" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M12.5 7.5a3.5 3.5 0 00-5 0 3.5 3.5 0 000 5 3.5 3.5 0 005 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>
            <span className="copyright-text">{CONTACT_INFO.copyright}</span>
          </div>
        </div>

        {/* Giant Background Watermark (Figma CHRESTHOS: Node 617:1970, Sofia Sans Extra Condensed 900) */}
        <div className="footer-watermark-wrapper" aria-hidden="true">
          <span className="footer-watermark">CHRESTHOS</span>
        </div>
      </div>

      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
      />
    </footer>
  );
}
