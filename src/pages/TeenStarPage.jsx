import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import TeenStarHero from '../components/TeenStarHero';
import TeenStarFindVoice from '../components/TeenStarFindVoice';
import TeenStarIntroduction from '../components/TeenStarIntroduction';
import TeenStarBenefits from '../components/TeenStarBenefits';
import TeenStarCompetitionSteps from '../components/TeenStarCompetitionSteps';
import './TeenStarPage.css';

export default function TeenStarPage() {
  return (
    <div className="teen-star-page">
      <Navbar />
      <main id="main-content">
        <TeenStarHero />
        <TeenStarFindVoice />
        <TeenStarIntroduction />
        <TeenStarBenefits />
        <TeenStarCompetitionSteps />
      </main>
      <Footer />
    </div>
  );
}