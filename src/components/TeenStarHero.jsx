import React from 'react';
import { NEXT_TEEN_STAR } from '../data/homeData';
import './TeenStarHero.css';

export default function TeenStarHero() {
  const {
    name = '',
    title = '',
    role = '',
    image = '/assets/Subtract-teen-star.png',
    alt = 'The Next Teen Star'
  } = NEXT_TEEN_STAR || {};

  const displayTitle = title || role || '';

  return (
    <section className="teen-star-hero" aria-label="The Next Teen Star spotlight">
      <img className="teen-star-light teen-star-light-left" src="/assets/lights.png" alt="" />
      <img className="teen-star-light teen-star-light-right" src="/assets/lights.png" alt="" />

      <div className="teen-star-stage">
        <div className="teen-star-profile-card-outer teen-star-featured-profile">
          <article className="teen-star-profile-card-inner">
            {/* <div className="teen-star-profile-card-rings-bg" aria-hidden="true">
              <svg viewBox="0 0 400 520" fill="none" preserveAspectRatio="xMidYMid slice" className="concentric-rings-svg">
                <circle cx="200" cy="220" r="75" stroke="rgba(255, 255, 255, 0.16)" strokeWidth="1.5" />
                <circle cx="200" cy="220" r="130" stroke="rgba(255, 255, 255, 0.13)" strokeWidth="1.5" />
                <circle cx="200" cy="220" r="185" stroke="rgba(255, 255, 255, 0.10)" strokeWidth="1.5" />
                <circle cx="200" cy="220" r="240" stroke="rgba(255, 255, 255, 0.08)" strokeWidth="1.5" />
                <circle cx="200" cy="220" r="295" stroke="rgba(255, 255, 255, 0.06)" strokeWidth="1.5" />
              </svg>
            </div> */}
            <div className="profile-portrait-wrap">
              <img
                src={image || '/assets/Subtract-teen-star.png'}
                alt={name || alt || 'The Next Teen Star'}
                className="profile-portrait-img"
              />
            </div>
            <div className="grace-card-placard-underlay" aria-hidden="true" />
            <div className="profile-black-placard">
              <h2 className="placard-name">{name}</h2>
              <p className="placard-role">{displayTitle}</p>
            </div>
          </article>
          <div className="profile-stars-overlay" aria-hidden="true">
            <img src="/assets/stars.png" alt="" className="five-gold-stars-img" />
          </div>
        </div>
        <div className="teen-star-podium" aria-hidden="true">
          <img src="/assets/podium.png" alt="" />
        </div>
      </div>
      <div className="blend"></div>
    </section>
  );
}
