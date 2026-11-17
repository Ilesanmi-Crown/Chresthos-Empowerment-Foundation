import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './CookieNotice.css';

const COOKIE_STORAGE_KEY = 'cookie_consent_choice';

/**
 * One-time cookie and privacy notice popup banner.
 * Shows only on first visit; remembers choice (accepted or declined) in localStorage.
 * No close (X) button; dismissed solely via Accept or Decline buttons.
 */
export default function CookieNotice() {
  // Prevent flash on load: read localStorage synchronously in lazy state initializer
  const [choice, setChoice] = useState(() => {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        return window.localStorage.getItem(COOKIE_STORAGE_KEY);
      }
    } catch {
      // Storage access blocked or restricted by browser settings
    }
    return null;
  });

  // If a choice has already been made, do not render
  if (choice !== null) {
    return null;
  }

  const handleDecision = (decision) => {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        window.localStorage.setItem(COOKIE_STORAGE_KEY, decision);
      }
    } catch {
      // Silently catch write errors so site never crashes
    }
    setChoice(decision);
  };

  return (
    <aside
      className="cookie-notice-banner"
      role="region"
      aria-label="Cookie and privacy notice"
    >
      <div className="cookie-notice-inner">
        <p className="cookie-notice-message">
          We do not use tracking or advertising cookies. Your choice is remembered on this device only. Embedded YouTube videos may set their own cookies when played. Read our{' '}
          <Link to="/privacy-policy" className="cookie-notice-policy-link">
            Privacy Policy
          </Link>.
        </p>

        <div className="cookie-notice-buttons">
          <button
            type="button"
            className="cookie-notice-btn cookie-notice-btn-decline"
            onClick={() => handleDecision('declined')}
          >
            Decline
          </button>
          <button
            type="button"
            className="cookie-notice-btn cookie-notice-btn-accept"
            onClick={() => handleDecision('accepted')}
          >
            Accept
          </button>
        </div>
      </div>
    </aside>
  );
}
