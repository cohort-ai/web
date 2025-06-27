import React from "react";
import "./AIRecruitment.css";

const AIRecruitment: React.FC = () => {
  return (
    <section className="ai-recruitment">
      <div className="container">
        <div className="hero-section">
          <h1>AI Recruitment Platform</h1>
          <p>
            Streamline your hiring process with intelligent candidate screening
            and matching
          </p>
          <div className="hero-features">
            <div className="feature">
              <span className="feature-icon">🎯</span>
              <span>Smart Candidate Matching</span>
            </div>
            <div className="feature">
              <span className="feature-icon">⚡</span>
              <span>80% Faster Hiring</span>
            </div>
            <div className="feature">
              <span className="feature-icon">📊</span>
              <span>Data-Driven Insights</span>
            </div>
          </div>
        </div>

        <div className="coming-soon">
          <h2>Coming Soon</h2>
          <p>
            Our AI Recruitment platform is currently in development. We're
            working hard to bring you the most intelligent hiring solution for
            SMEs.
          </p>
          <div className="cta-section">
            <button className="primary-button">Join Waitlist</button>
            <button className="secondary-button">Schedule Demo</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIRecruitment;
