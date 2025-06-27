import React from "react";
import "./CallToAction.css";
import { Link } from "react-router-dom";

const CallToAction: React.FC = () => {
  return (
    <section className="call-to-action">
      <div className="container">
        <h2>Ready to Transform Your Business with AI?</h2>
        <p>Choose the path that's right for your business</p>

        <div className="cta-buttons">
          <Link to="/contact" className="cta-button primary">
            <span className="cta-icon">📋</span>
            <div className="cta-content">
              <h3>Book a Consultation</h3>
              <p>Discover How AI Can Work for You</p>
            </div>
          </Link>

          <Link to="/ai-recruitment" className="cta-button secondary">
            <span className="cta-icon">🤖</span>
            <div className="cta-content">
              <h3>Try Our AI Recruitment Tool</h3>
              <p>Streamline Your Hiring Process Today</p>
            </div>
          </Link>
        </div>

        <div className="cta-footer">
          <p>
            Not sure which option is right for you?{" "}
            <Link to="/contact">Let's talk</Link> about your specific needs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
