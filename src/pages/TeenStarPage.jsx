import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import TeenStarHero from '../components/TeenStarHero';
import TeenStarFindVoice from '../components/TeenStarFindVoice';
import TeenStarIntroduction from '../components/TeenStarIntroduction';
import TeenStarBenefits from '../components/TeenStarBenefits';
import TeenStarCompetitionSteps from '../components/TeenStarCompetitionSteps';
import './TeenStarPage.css';

export default function TeenStarPage() {
  const navigate = useNavigate();

  return (
    <div className="teen-star-page">
      <Navbar onDonateClick={() => navigate('/donate')} />
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