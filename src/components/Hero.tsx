import React from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Empowering SMEs Across Asia with AI-Driven Growth</h1>
        <p>We democratize AI to help SMEs unlock growth.</p>
        <div className="cta-buttons">
          <button className="primary-cta" onClick={() => window.location.href = '/contact'}>Get Started with AI</button>
          <button className="secondary-cta" onClick={() => window.location.href = '/solutions'}>Explore Our Solutions</button>
        </div>
      </div>
    </section>
  );
};

export default Hero; 