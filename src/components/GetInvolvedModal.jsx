import React, { useEffect, useState } from 'react';
import ContactModal from './ContactModal';
import './GetInvolvedModal.css';

export default function GetInvolvedModal({ isOpen, onClose, onDonateClick }) {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  // Close modal on Escape key press
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    // Prevent body scrolling while modal is open
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  if (contactModalOpen) {
    return (
      <ContactModal
        isOpen
        onClose={() => {
          setContactModalOpen(false);
          onClose();
        }}
      />
    );
  }

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleCardDonateClick = () => {
    onClose();
    if (onDonateClick) onDonateClick();
  };

  return (
    <div 
      className="get-involved-backdrop" 
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="get-involved-modal-title"
    >
      <div className="get-involved-modal-card">
        {/* Purple Dot-Matrix World Map background inside the modal container */}
        <div className="get-involved-bg-map-layer" aria-hidden="true">
          <img 
            src="/assets/world-map-dots.png" 
            alt="" 
            className="get-involved-bg-map" 
          />
        </div>

        {/* Close Button 'X' (top right) */}
        <button 
          type="button" 
          className="get-involved-close-btn" 
          onClick={onClose}
          aria-label="Close modal"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#111111" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        {/* Modal Title */}
        <h2 id="get-involved-modal-title" className="get-involved-title">
          Join in making impact!
        </h2>

        {/* Cards Row (Desktop) / Vertical Stack (Mobile) */}
        <div className="get-involved-cards-grid">
          {/* Card 1: Volunteer */}
          <div className="impact-action-card card-volunteer">
            {/* Exact Faceted Polygons from Figma */}
            <svg className="impact-card-facets" viewBox="0 0 360 410" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <defs>
                <linearGradient id="cardGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#8A38F5" />
                  <stop offset="100%" stopColor="#7827E3" />
                </linearGradient>
              </defs>
              <rect width="360" height="410" fill="url(#cardGrad1)" />
              <polygon points="0,0 150,0 0,155" fill="#4C1D95" fillOpacity="0.45" />
              <polygon points="235,0 360,0 360,170" fill="#4C1D95" fillOpacity="0.45" />
              <polygon points="360,150 230,240 360,330" fill="#4C1D95" fillOpacity="0.45" />
              <polygon points="0,290 130,410 0,410" fill="#4C1D95" fillOpacity="0.45" />
              <polygon points="275,410 360,345 360,410" fill="#4C1D95" fillOpacity="0.45" />
            </svg>
            
            <div className="impact-card-content">
              {/* White Circle Icon Badge 1: Black Volunteer Icon */}
              <div className="impact-card-icon-badge" aria-hidden="true">
                <img 
                  src="/assets/heart-icon.png" 
                  alt="" 
                  className="impact-badge-icon" 
                />
              </div>

              {/* Body Text */}
              <p className="impact-card-description">
                Give your time and skills to empower young people and strengthen communities. Be part of the change.
              </p>

              {/* Sub-label */}
              <span className="impact-card-sublabel">
                Volunteer with us.
              </span>

              {/* Action Button: Flat rectangular button with NO border radius */}
              <button 
                type="button" 
                className="impact-card-btn"
                onClick={() => setContactModalOpen(true)}
              >
                Volunteer
              </button>
            </div>
          </div>

          {/* Card 2: Partner */}
          <div className="impact-action-card card-partner">
            {/* Exact Faceted Polygons from Figma */}
            <svg className="impact-card-facets" viewBox="0 0 360 410" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <defs>
                <linearGradient id="cardGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#8A38F5" />
                  <stop offset="100%" stopColor="#7827E3" />
                </linearGradient>
              </defs>
              <rect width="360" height="410" fill="url(#cardGrad2)" />
              <polygon points="0,0 150,0 0,155" fill="#4C1D95" fillOpacity="0.45" />
              <polygon points="235,0 360,0 360,170" fill="#4C1D95" fillOpacity="0.45" />
              <polygon points="360,150 230,240 360,330" fill="#4C1D95" fillOpacity="0.45" />
              <polygon points="0,290 130,410 0,410" fill="#4C1D95" fillOpacity="0.45" />
              <polygon points="275,410 360,345 360,410" fill="#4C1D95" fillOpacity="0.45" />
            </svg>
            
            <div className="impact-card-content">
              {/* White Circle Icon Badge 2: Black Handshake / Partnership Icon */}
              <div className="impact-card-icon-badge" aria-hidden="true">
                <img 
                  src="/assets/claping-icon.png" 
                  alt="" 
                  className="impact-badge-icon" 
                />
              </div>

              {/* Body Text */}
              <p className="impact-card-description">
                Partner with us to expand community initiatives, support youth development, and create more opportunities.
              </p>

              {/* Sub-label */}
              <span className="impact-card-sublabel">
                Together, we can do more.
              </span>

              {/* Action Button: Flat rectangular button with NO border radius */}
              <button 
                type="button" 
                className="impact-card-btn"
                onClick={() => setContactModalOpen(true)}
              >
                Be a partner
              </button>
            </div>
          </div>

          {/* Card 3: Donate */}
          <div className="impact-action-card card-donate">
            {/* Exact Faceted Polygons from Figma */}
            <svg className="impact-card-facets" viewBox="0 0 360 410" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <defs>
                <linearGradient id="cardGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#8A38F5" />
                  <stop offset="100%" stopColor="#7827E3" />
                </linearGradient>
              </defs>
              <rect width="360" height="410" fill="url(#cardGrad3)" />
              <polygon points="0,0 150,0 0,155" fill="#4C1D95" fillOpacity="0.45" />
              <polygon points="235,0 360,0 360,170" fill="#4C1D95" fillOpacity="0.45" />
              <polygon points="360,150 230,240 360,330" fill="#4C1D95" fillOpacity="0.45" />
              <polygon points="0,290 130,410 0,410" fill="#4C1D95" fillOpacity="0.45" />
              <polygon points="275,410 360,345 360,410" fill="#4C1D95" fillOpacity="0.45" />
            </svg>
            
            <div className="impact-card-content">
              {/* White Circle Icon Badge 3: Black Donation / Hand with Coin Icon */}
              <div className="impact-card-icon-badge" aria-hidden="true">
                <img 
                  src="/assets/donate-icon.png" 
                  alt="" 
                  className="impact-badge-icon" 
                />
              </div>

              {/* Body Text */}
              <p className="impact-card-description">
                Your donation can help more children access education and support individuals facing hardship. Every contribution counts.
              </p>

              {/* Sub-label */}
              <span className="impact-card-sublabel">
                Start with a one-time donation.
              </span>

              {/* Action Button: Flat rectangular button with NO border radius */}
              <button 
                type="button" 
                className="impact-card-btn"
                onClick={handleCardDonateClick}
              >
                Donate
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
