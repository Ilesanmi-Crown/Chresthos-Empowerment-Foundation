import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useViewport } from '../hooks/useViewport';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import FunFactsSection from '../components/FunFactsSection';
import FoundationSection from '../components/FoundationSection';
import TeamSection from '../components/TeamSection';
import TestimonialsSection from '../components/TestimonialsSection';
import Footer from '../components/Footer';
import ProfileModal from '../components/ProfileModal';
import GetInvolvedModal from '../components/GetInvolvedModal';
import './HomePage.css';

export default function HomePage() {
  const navigate = useNavigate();
  const viewport = useViewport();
  const [selectedMember, setSelectedMember] = useState(null);
  const [showGetInvolvedModal, setShowGetInvolvedModal] = useState(false);

  const handleSelectMember = (member) => {
    if (member && (member.id === 'partner-4' || member.name?.toLowerCase().includes('grace evaly'))) {
      navigate('/mrs-grace-evaly');
      return;
    }
    setSelectedMember(member);
  };

  const handleDonate = () => {
    navigate('/donate');
  };

  const handleGetInvolved = () => {
    setShowGetInvolvedModal(true);
  };

  return (
    <div className={`page-wrapper ${viewport.isMobile ? 'is-mobile' : 'is-desktop'}`}>
      {/* Navbar with announcement bar and responsive mobile drawer */}
      <Navbar onDonateClick={handleDonate} onGetInvolvedClick={handleGetInvolved} />

      <main id="main-content">
        {/* Hero Section with dot matrix map & floating child cards */}
        <HeroSection 
          onGetInvolvedClick={handleGetInvolved} 
          onDonateClick={handleDonate} 
        />

        {/* Fun Facts / Quick Impact Highlights */}
        <FunFactsSection />

        {/* The Foundation & Outreaches */}
        <FoundationSection />

        {/* Everyone Behind the Scenes (Partners & Team) */}
        <TeamSection onSelectMember={handleSelectMember} />

        {/* Testimonials */}
        <TestimonialsSection />
      </main>

      {/* Footer with giant watermark, contacts, and copyright */}
      <Footer />

      {/* Team / Partner Profile Detail Modal */}
      <ProfileModal 
        member={selectedMember} 
        onClose={() => setSelectedMember(null)} 
      />

      {/* Get Involved Impact Action Modal */}
      <GetInvolvedModal 
        isOpen={showGetInvolvedModal}
        onClose={() => setShowGetInvolvedModal(false)}
        onDonateClick={handleDonate}
      />
    </div>
  );
}
