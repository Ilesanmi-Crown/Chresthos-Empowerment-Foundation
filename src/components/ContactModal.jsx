import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Mail, MapPin, Phone, X } from 'lucide-react';
import { CONTACT_INFO } from '../data/homeData';
import './ContactModal.css';

export default function ContactModal({ isOpen, onClose }) {
  const firstFieldRef = useRef(null);
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  useEffect(() => {
    if (!isOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    firstFieldRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) onClose();
  };

  const handleSubmit = async (event) => {
  event.preventDefault();
  const form = event.currentTarget; // grab it before the await
  setStatus('sending');

  try {
    await fetch(import.meta.env.VITE_SHEET_URL, {
      method: 'POST',
      body: new URLSearchParams(new FormData(form)),
      mode: 'no-cors',
    });
    setStatus('success');
    form.reset();
  } catch {
    setStatus('error');
  }
};

  return (
    <div className="contact-modal-backdrop" onClick={handleBackdropClick}>
      <section
        className="contact-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-modal-title"
      >
        <button
          className="contact-modal-close"
          type="button"
          onClick={onClose}
          aria-label="Close contact form"
        >
          <X size={20} aria-hidden="true" />
        </button>

        <div className="contact-modal-layout">
          <div className="contact-modal-information">
            <h2 id="contact-modal-title">Get In Touch With Us.</h2>
            <p className="contact-modal-intro">
              Let us know how we can be of help. Either for questions, collaborations,
              partnerships and volunteering.
            </p>

            <address className="contact-modal-details">
              <div>
                <MapPin size={15} aria-hidden="true" />
                <span>{CONTACT_INFO.address}</span>
              </div>
              <div>
                <Mail size={15} aria-hidden="true" />
                <a href={`mailto:${CONTACT_INFO.email}`}>{CONTACT_INFO.email}</a>
              </div>
              <div>
                <Phone size={15} aria-hidden="true" />
                <span>{CONTACT_INFO.phones.join(', ')}</span>
              </div>
            </address>
          </div>

          <form className="contact-modal-form" onSubmit={handleSubmit}>
            <label>
              Full name
              <input
                ref={firstFieldRef}
                name="name"
                type="text"
                autoComplete="name"
                placeholder="Enter your full name"
                required
              />
            </label>
            <label>
              Email Address
              <input
                name="email"
                type="email"
                autoComplete="email"
                placeholder="Enter your email address"
                required
              />
            </label>
            <label>
              Phone number
              <input
                name="phone"
                type="tel"
                autoComplete="tel"
                placeholder="Enter your phone number"
              />
            </label>
            <label>
              Message
              <textarea
                name="message"
                placeholder="Write your message here"
                rows="4"
                required
              />
            </label>
                      <button
            type="submit"
            className="contact-modal-submit"
            disabled={status === 'sending'}
          >
            {status === 'sending' ? 'Sending...' : 'Send message'}{' '}
            <ArrowRight size={15} aria-hidden="true" />
          </button>
          {status === 'success' && (
            <p className="contact-modal-status" role="status">
              Thanks! Your message has been sent.
            </p>
          )}
          {status === 'error' && (
            <p className="contact-modal-status" role="alert">
              Something went wrong. Please try again.
            </p>
          )}
          </form>
        </div>
      </section>
    </div>
  );
}