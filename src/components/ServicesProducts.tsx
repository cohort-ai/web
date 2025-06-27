import React from "react";
import { Link } from "react-router-dom";
import "./ServicesProducts.css";

const ServicesProducts: React.FC = () => {
  return (
    <section className="services-products">
      <div className="container">
        <h2 className="section-title">Our Services & Products</h2>

        {/* AI Advisory & Custom Solutions */}
        <div className="service-item">
          <div className="service-content">
            <h3>AI Advisory & Custom Solutions</h3>
            <p>
              Ideation, evaluation, and safe implementation tailored to your
              business.
            </p>
            <ul className="service-features">
              <li>Strategic AI roadmap development</li>
              <li>Technology evaluation and selection</li>
              <li>Custom AI solution development</li>
              <li>Implementation support and training</li>
            </ul>
            <Link to="/ai-advisory" className="service-link">
              Learn More About AI Advisory →
            </Link>
          </div>
          <div className="service-image">
            <div className="placeholder-image">AI Advisory</div>
          </div>
        </div>

        {/* AI Recruitment */}
        <div className="service-item reverse">
          <div className="service-content">
            <h3>AI Recruitment</h3>
            <p>
              Streamline hiring with our intelligent recruitment platform
              designed for SMEs.
            </p>
            <ul className="service-features">
              <li>Automated candidate screening</li>
              <li>Intelligent job matching</li>
              <li>Streamlined interview process</li>
              <li>Analytics and insights</li>
            </ul>
            <Link to="/ai-recruitment" className="service-link">
              Learn More About AI Recruitment →
            </Link>
          </div>
          <div className="service-image">
            <div className="placeholder-image">AI Recruitment</div>
          </div>
        </div>

        {/* Future Products */}
        <div className="service-item">
          <div className="service-content">
            <h3>Future Products</h3>
            <p>More AI-powered tools coming soon to simplify your workflows.</p>
            <div className="coming-soon">
              <span className="badge">Coming Soon</span>
              <p>
                We're constantly developing new AI solutions to help SMEs grow
                and succeed.
              </p>
            </div>
          </div>
          <div className="service-image">
            <div className="placeholder-image">Future Tools</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesProducts;
