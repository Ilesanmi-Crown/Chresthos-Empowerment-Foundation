import React, { useState, useEffect, useRef } from 'react';
import { FUN_FACTS } from '../data/homeData';
import './FunFactsSection.css';

/**
 * Parses numeric value and suffix (e.g., '200+' -> { target: 200, suffix: '+' })
 */
function parseStat(statStr) {
  const match = String(statStr).match(/^(\d+)(.*)$/);
  if (!match) return { target: 0, suffix: statStr };
  return {
    target: parseInt(match[1], 10),
    suffix: match[2] || ''
  };
}

/**
 * Animated counter running on requestAnimationFrame with smooth ease-out curve
 */
function StatCounter({ target, suffix, startAnimation, duration = 2500 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startAnimation) {
      setCount(0);
      return;
    }

    // Instant display if user prefers reduced motion
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setCount(target);
      return;
    }

    let startTime = null;
    let animationFrameId;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Ease-out cubic: fast responsive start, smooth gradual deceleration to the target
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentVal = Math.floor(easeOut * target);

      setCount(currentVal);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [startAnimation, target, duration]);

  return (
    <>
      {count}
      <span className="card-stat-suffix">{suffix}</span>
    </>
  );
}

export default function FunFactsSection() {
  const sectionRef = useRef(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    // Trigger only when user scrolls to 30% of the quick impact highlight section
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setHasStarted(true);
            observer.disconnect(); // Animate once
          }
        });
      },
      { threshold: window.matchMedia("(max-width:767px)").matches ? 0.3 : 0.5 }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="fun-facts-section" 
      id="impact" 
      aria-label="Quick Impact Highlights"
    >
      <div className="fun-facts-header">
        <span className="section-eyebrow">FUN FACT</span>
        <h2 className="section-title">Quick impact highlight</h2>
      </div>

      <div className="fun-facts-grid">
        {FUN_FACTS.map((item, index) => {
          const { target, suffix } = parseStat(item.stat);
          
          // Specific durations requested: 200+ -> 2.0s, 80% -> 1.2s, 100+ -> 1.5s
          const durationMap = {
            200: 2000,
            80: 1200,
            100: 1500
          };
          const duration = durationMap[target] ?? [2000, 1200, 1500][index] ?? 2000;

          return (
            <div key={index} className="fun-fact-card">
              {/* Center luminous purple glow matching Figma Ellipse 22 */}
              <div className="card-center-glow" aria-hidden="true"></div>

              {/* 5 faceted decorative geometric shapes matching Figma */}
              <div className="card-geom-shape shape-top-right" aria-hidden="true"></div>
              <div className="card-geom-shape shape-mid-right" aria-hidden="true"></div>
              <div className="card-geom-shape shape-bottom-right" aria-hidden="true"></div>
              <div className="card-geom-shape shape-top-left" aria-hidden="true"></div>
              <div className="card-geom-shape shape-bottom-left" aria-hidden="true"></div>

              <div className="card-content">
                {item.prefix && (
                  <div className="card-prefix-badge">
                    <span>{item.prefix}</span>
                  </div>
                )}
                <div className="card-stat-number">
                  <StatCounter 
                    target={target} 
                    suffix={suffix} 
                    startAnimation={hasStarted} 
                    duration={duration} 
                  />
                </div>
                <p className="card-label-text" style={{ maxWidth: item.maxW ? `${item.maxW}px` : undefined }}>
                  {item.label}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
