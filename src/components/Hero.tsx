import React from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Empowering SMEs Across Asia with AI-Driven Growth</h1>
        <p>We democratize AI to help SMEs unlock growth.</p>
        <div className="cta-buttons">
          <a className="primary-cta" href="/contact">Get Started with AI</a>
          <a className="secondary-cta" href="/solutions">Explore Our Solutions</a>
        </div>
      </div>
    </section>
  );
};

export default Hero; 