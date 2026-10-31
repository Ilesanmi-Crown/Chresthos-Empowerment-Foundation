import React from 'react';
import './TeenStarHero.css';

export default function TeenStarHero() {
  return (
    <section className="teen-star-hero" aria-label="The Next Teen Star spotlight">
      <img className="teen-star-light teen-star-light-left" src="/assets/lights.png" alt="" />
      <img className="teen-star-light teen-star-light-right" src="/assets/lights.png" alt="" />

      <div className="teen-star-stage">
        <div className="profile-card-outer teen-star-featured-profile">
          <article className="profile-card-inner">
            <div className="profile-card-rings-bg" aria-hidden="true">
              <svg viewBox="0 0 400 520" fill="none" preserveAspectRatio="xMidYMid slice" className="concentric-rings-svg">
                <circle cx="200" cy="220" r="75" stroke="rgba(255, 255, 255, 0.16)" strokeWidth="1.5" />
                <circle cx="200" cy="220" r="130" stroke="rgba(255, 255, 255, 0.13)" strokeWidth="1.5" />
                <circle cx="200" cy="220" r="185" stroke="rgba(255, 255, 255, 0.10)" strokeWidth="1.5" />
                <circle cx="200" cy="220" r="240" stroke="rgba(255, 255, 255, 0.08)" strokeWidth="1.5" />
                <circle cx="200" cy="220" r="295" stroke="rgba(255, 255, 255, 0.06)" strokeWidth="1.5" />
              </svg>
            </div>
            <div className="profile-portrait-wrap">
              <img
                src="/assets/partner-mrs-grace.png"
                alt="Mrs. Grace Evaly"
                className="profile-portrait-img"
              />
            </div>
            <div className="grace-card-placard-underlay" aria-hidden="true" />
            <div className="profile-black-placard">
              <h2 className="placard-name">Mrs. Grace Evaly</h2>
              <p className="placard-role">CEO and Founder</p>
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
    </section>
  );
}