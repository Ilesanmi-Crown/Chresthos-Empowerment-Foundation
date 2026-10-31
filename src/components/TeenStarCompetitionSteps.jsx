import React from 'react';
import { BadgeCheck, Mic, UsersRound, Video } from 'lucide-react';
import './TeenStarCompetitionSteps.css';

const steps = [
  {
    number: '01',
    title: 'Audition',
    description: 'Submit a 2–3 minute video of yourself singing.',
    Icon: Video,
  },
  {
    number: '02',
    title: 'Selection and Training',
    description:
      'Entries are reviewed by experienced music professionals, and selected contestants receive training.',
    Icon: Mic,
  },
  {
    number: '03',
    title: 'Studio Record',
    description:
      'Winners get the opportunity to record their songs in a studio sponsored by the organisers.',
    Icon: UsersRound,
  },
  {
    number: '04',
    title: 'Your time to shine',
    description:
      '“You miss 100% of the shots you don’t take” — Canadian ice hockey legend Wayne Gretzky.',
    Icon: BadgeCheck,
  },
];

export default function TeenStarCompetitionSteps() {
  return (
    <section className="teen-star-steps" aria-labelledby="teen-star-steps-title">
      <div className="teen-star-steps-map" aria-hidden="true">
        <img src="/assets/world-map-dots.png" alt="" />
      </div>

      <div className="teen-star-steps-content">
        <header className="teen-star-steps-header">
          <p>In just a few steps</p>
          <h2 id="teen-star-steps-title">Get into the competition</h2>
        </header>

        <div className="teen-star-steps-grid">
          {steps.map(({ number, title, description, Icon }) => (
            <article className="teen-star-step-card" key={number}>
              <span className="teen-star-step-icon" aria-hidden="true">
                <Icon size={19} strokeWidth={1.8} />
              </span>
              <div className="teen-star-step-copy">
                <h3>
                  <span>{number}</span> — {title}
                </h3>
                <p>{description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}