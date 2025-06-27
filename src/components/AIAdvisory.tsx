import React from "react";
import "./AIAdvisory.css";

const AIAdvisory: React.FC = () => {
  return (
    <div className="ai-advisory">
      <div className="ai-advisory-container">
        <section className="hero-section">
          <div className="hero-content">
            <h1>AI Advisory Services</h1>
            <p className="hero-subtitle">
              Strategic guidance to help your organization navigate the AI
              landscape
            </p>
            <p className="hero-description">
              Our expert consultants provide comprehensive AI strategy,
              implementation guidance, and ongoing support to ensure your AI
              initiatives drive real business value.
            </p>
          </div>
        </section>

        <section className="services-section">
          <div className="container">
            <h2>Our Advisory Services</h2>
            <div className="services-grid">
              <div className="service-card">
                <h3>AI Strategy Development</h3>
                <p>
                  Comprehensive assessment and roadmap creation for your AI
                  transformation journey.
                </p>
              </div>
              <div className="service-card">
                <h3>Technology Assessment</h3>
                <p>
                  Evaluation of current systems and recommendations for AI
                  integration.
                </p>
              </div>
              <div className="service-card">
                <h3>Implementation Guidance</h3>
                <p>Expert support throughout the AI implementation process.</p>
              </div>
              <div className="service-card">
                <h3>Change Management</h3>
                <p>
                  Support for organizational change and AI adoption strategies.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="container">
            <h2>Ready to Transform Your Business with AI?</h2>
            <p>
              Let's discuss how our advisory services can help you achieve your
              AI goals.
            </p>
            <button className="cta-button">Get Started</button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AIAdvisory;
