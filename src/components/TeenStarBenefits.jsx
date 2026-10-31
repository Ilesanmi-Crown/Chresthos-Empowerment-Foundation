import React from 'react';
import { AudioLines, Sprout, UsersRound } from 'lucide-react';
import './TeenStarBenefits.css';

const benefits = [
  {
    title: 'Find Your Voice',
    description: 'Express your thoughts, emotions, and creativity through music.',
    Icon: AudioLines,
  },
  {
    title: 'Grow in Confidence',
    description: 'Develop self-esteem, discipline, and a willingness to learn.',
    Icon: Sprout,
  },
  {
    title: 'Grow Together',
    description: 'Build friendships, teamwork, empathy, and healthy competition.',
    Icon: UsersRound,
  },
];

export default function TeenStarBenefits() {
  return (
    <section className="teen-star-benefits" aria-labelledby="teen-star-benefits-title">
      <div className="teen-star-benefits-map" aria-hidden="true">
        <img src="/assets/world-map-dots.png" alt="" />
      </div>

      <div className="teen-star-benefits-content">
        <header className="teen-star-benefits-header">
          <h2 id="teen-star-benefits-title">Why Teen Voices Matters</h2>
          <p>
            Experience smoother operations, quicker workflows, and tools that save you
            valuable time every day
          </p>
        </header>

        <div className="teen-star-benefits-grid">
          <img
            className="teen-star-benefits-photo"
            src="/assets/teen-star-singer.png"
            alt="A teen singer performing with confidence"
          />

          <div className="teen-star-benefits-list">
            {benefits.map(({ title, description, Icon }) => (
              <article className="teen-star-benefit" key={title}>
                <span className="teen-star-benefit-icon" aria-hidden="true">
                  <Icon size={20} strokeWidth={2} />
                </span>
                <div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}