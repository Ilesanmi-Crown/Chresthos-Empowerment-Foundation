import React from 'react';
import './TeenStarIntroduction.css';

export default function TeenStarIntroduction() {
  return (
    <section className="teen-star-introduction" aria-labelledby="teen-star-introduction-title">
      <div className="teen-star-about">
        <div className="teen-star-about-copy">
          <p className="teen-star-eyebrow">Introduction</p>
          <p>
            Adolescence is a crucial period for self-discovery and talent development.
            By helping young people identify their natural talents and find opportunities
            to nurture them, they can reach their full potential. This vision inspired
            the creation of The Next Teen Star, a teen singing competition designed to
            discover, develop, and showcase young musical talents.
          </p>
        </div>
        <img
          className="teen-star-about-image"
          src="/assets/teen-star-singer.png"
          alt="A young singer performing on stage"
        />
      </div>

      <div className="teen-star-mission">
        <div className="teen-star-mission-copy">
          <p className="teen-star-eyebrow">Mission &amp; Vision</p>
          <p>
            To inspire a love and appreciation for singing and nurture a healthy
            competitive spirit among present and future generations, while promoting
            and developing music at local, national, and international levels. We
            strive to foster excellence, community and audience engagement, and
            personal fulfillment among teenagers through singing.
          </p>
        </div>
        <div className="teen-star-mission-collage" aria-label="Teen Star singers performing together">
          <img
            className="teen-star-mission-group"
            src="/assets/three-teen-star-singers.jpg"
            alt="Three young singers sharing a performance"
          />
          <img
            className="teen-star-mission-performers"
            src="/assets/teen-star-performers.jpg"
            alt="Teen Star performers singing on stage"
          />
        </div>
      </div>
    </section>
  );
}