import React from 'react';
import './Hero.css';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Empowering SMEs Across Asia with AI-Driven Growth</h1>
        <p>We democratize AI to help SMEs unlock growth.</p>
        <div className="cta-buttons">
          <Link className="primary-cta" to="/contact">Get Started with AI</Link>
          <Link className="secondary-cta" to="/solutions">Explore Our Solutions</Link>
        </div>
      </div>
    </section>
  );
};

export default Hero; 