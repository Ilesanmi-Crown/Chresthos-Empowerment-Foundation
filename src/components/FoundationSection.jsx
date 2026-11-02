import React from 'react';
import { OUTREACHES } from '../data/homeData';
import './FoundationSection.css';

export default function FoundationSection() {
  return (
    <section className="foundation-section" id="foundation" aria-label="The Foundation and Outreaches">
      {/* What Do We Do */}
      <div className="foundation-overview-block">
        <div className="foundation-block-content">
          <span className="section-eyebrow">THE FOUNDATION</span>
          <h2 className="section-title">What do we do</h2>
          <p className="foundation-mission-text">
            CHRESTHOS Empowerment Foundation is a dedicated nonprofit organization committed to transforming lives and communities through targeted, compassionate interventions. We focus on unlocking the potential of vulnerable populations, particularly children and young individuals, by providing comprehensive support, educational resources, and sustainable community development solutions.
          </p>
        </div>
      </div>

     

      {/* Outreaches */}
      <div className="foundation-outreaches-block" id="outreaches">
        <div className="foundation-block-content">
          <h2 className="section-title outreaches-title">Outreaches</h2>
          
          <p className="foundation-mission-text outreaches-mission-text">
            CHRESTHOS Empowerment Foundation is a dedicated nonprofit organization committed to transforming lives and communities through targeted, compassionate interventions. We focus on unlocking the potential of vulnerable populations, particularly children and young individuals, by providing comprehensive support, educational resources, and sustainable community development solutions.
          </p>

          <p className="outreaches-highlight-statement">
            We are a dedicated nonprofit organization committed to breaking cycles of disadvantage by empowering children, young individuals, and communities.
          </p>

          <div className="outreaches-media-grid">
            {OUTREACHES.map((item) => (
              <div key={item.id} className="outreach-card">
                <div className="outreach-image-container">
                  <iframe
                    src={item.video}
                    title={item.title}
                    className="outreach-video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    loading="lazy"
                  />
                  <div className="outreach-overlay">
                    <h3 className="outreach-card-title">{item.title}</h3>
                    <p className="outreach-card-desc">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
