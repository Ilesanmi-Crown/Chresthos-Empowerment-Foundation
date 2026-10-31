import React, { useState } from 'react';
import { TESTIMONIAL } from '../data/homeData';
import './TestimonialsSection.css';

export default function TestimonialsSection() {
  const [activeSlide, setActiveSlide] = useState(0);

  // Ready for multiple testimonials if added
  const testimonials = [TESTIMONIAL];
  const current = testimonials[activeSlide];

  const handlePrev = () => {
    setActiveSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="testimonials-section" id="testimonials" aria-label="Supporter Testimonials">
      {/* Background Purple Dot-Matrix World Map (Figma Purple Dot-Matrix World Map 2, 10% opacity) */}
      <div className="testimonials-bg-map-wrapper" aria-hidden="true">
        <img 
          src="/assets/world-map-dots.png" 
          alt="" 
          className="testimonials-bg-map" 
        />
      </div>

      <div className="testimonials-container">
        {/* Figma Heading: Testimonials (Poppins 800, 60px desktop / 24px mobile, #000000) */}
        <h2 className="testimonials-title">Testimonials</h2>

        {/* Content Layout (Figma Desktop 617:1931 / Mobile 617:2804) */}
        <div className="testimonials-content-wrapper">
          {/* Image Box: 476x670 desktop / 248.66x350 mobile, radius 15px / 7.84px */}
          <div className="testimonials-image-box">
            <img 
              src={current.image} 
              alt={current.author} 
              className="testimonials-doctor-image"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
          </div>

          {/* Right Content / Mobile Group 124 */}
          <div className="testimonials-details">
            {/* Stars: 5 stars, #FFAC4A */}
            <div className="testimonials-stars" aria-label="5 out of 5 stars">
              {[...Array(5)].map((_, i) => (
                <svg 
                  key={i} 
                  className="testimonials-star" 
                  viewBox="0 0 21 20" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    d="M10.26 0.5L13.35 6.76L20.26 7.77L15.26 12.64L16.44 19.5L10.26 16.25L4.08 19.5L5.26 12.64L0.26 7.77L7.17 6.76L10.26 0.5Z" 
                    fill="#FFAC4A" 
                  />
                </svg>
              ))}
            </div>

            {/* Paragraph / Quote: Inter 400 20px/36px desktop / Poppins 400 11.46px/20.62px mobile, #18214D */}
            <div className="testimonials-paragraph">
              {current.quote.split('\n\n').map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* Footer Row: Avatar on left, Arrows on right (No border line in Figma) */}
            <div className="testimonials-footer">
              <div className="testimonials-avatar-group">
                <div className="testimonials-avatar-icon">
                  <svg 
                    className="testimonials-user-svg" 
                    viewBox="0 0 20 20" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="10" cy="6" r="4" fill="white" />
                    <path d="M3.5 17C3.5 13.41 6.41 10.5 10 10.5C13.59 10.5 16.5 13.41 16.5 17" fill="white" />
                  </svg>
                </div>
                <div className="testimonials-avatar-text">
                  <h4 className="testimonials-author-name">{current.author}</h4>
                  <p className="testimonials-author-role">{current.role}</p>
                </div>
              </div>

              {/* Bare Vector Arrows (#377DFF) */}
              {/* <div className="testimonials-arrows">
                <button 
                  type="button" 
                  className="testimonials-arrow-btn" 
                  onClick={handlePrev}
                  aria-label="Previous testimonial"
                >
                  <svg 
                    className="testimonials-arrow-svg arrow-left" 
                    viewBox="0 0 21 14" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path 
                      d="M7 1L1 7M1 7L7 13M1 7H20" 
                      stroke="#377DFF" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <button 
                  type="button" 
                  className="testimonials-arrow-btn" 
                  onClick={handleNext}
                  aria-label="Next testimonial"
                >
                  <svg 
                    className="testimonials-arrow-svg arrow-right" 
                    viewBox="0 0 21 14" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path 
                      d="M14 1L20 7M20 7L14 13M20 7H1" 
                      stroke="#377DFF" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
