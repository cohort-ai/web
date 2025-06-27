import React from "react";
import "./CaseStudies.css";

const CaseStudies: React.FC = () => {
  return (
    <section className="case-studies">
      <div className="container">
        <h2 className="section-title">Success Stories</h2>
        <p className="section-subtitle">
          See how we've helped SMEs transform their businesses with AI
        </p>

        <div className="case-studies-grid">
          {/* Case Study 1 */}
          <div className="case-study-card">
            <div className="case-study-content">
              <h3>Manufacturing Efficiency Boost</h3>
              <p className="company">Tech Manufacturing Co.</p>
              <p className="outcome">
                50% reduction in production time through AI-powered process
                optimization
              </p>
              <div className="case-study-details">
                <p>
                  We helped this manufacturing company implement AI-driven
                  quality control and predictive maintenance, resulting in
                  significant cost savings and improved product quality.
                </p>
                <ul>
                  <li>AI-powered quality control system</li>
                  <li>Predictive maintenance implementation</li>
                  <li>Staff training and change management</li>
                </ul>
              </div>
            </div>
            <div className="case-study-image">
              <div className="placeholder-image">Manufacturing AI</div>
            </div>
          </div>

          {/* Case Study 2 */}
          <div className="case-study-card reverse">
            <div className="case-study-content">
              <h3>Recruitment Revolution</h3>
              <p className="company">Digital Agency XYZ</p>
              <p className="outcome">
                80% faster hiring process with AI Recruitment platform
              </p>
              <div className="case-study-details">
                <p>
                  Our AI Recruitment tool transformed their hiring process,
                  reducing time-to-hire from 6 weeks to just 1 week while
                  improving candidate quality.
                </p>
                <ul>
                  <li>Automated candidate screening</li>
                  <li>Intelligent skill matching</li>
                  <li>Streamlined interview scheduling</li>
                </ul>
              </div>
            </div>
            <div className="case-study-image">
              <div className="placeholder-image">AI Recruitment</div>
            </div>
          </div>

          {/* Case Study 3 */}
          <div className="case-study-card">
            <div className="case-study-content">
              <h3>Customer Service Transformation</h3>
              <p className="company">E-commerce Startup</p>
              <p className="outcome">
                300% increase in customer satisfaction scores
              </p>
              <div className="case-study-details">
                <p>
                  Implemented AI-powered chatbots and customer analytics,
                  enabling 24/7 support and personalized customer experiences.
                </p>
                <ul>
                  <li>AI chatbot implementation</li>
                  <li>Customer behavior analytics</li>
                  <li>Personalized recommendations</li>
                </ul>
              </div>
            </div>
            <div className="case-study-image">
              <div className="placeholder-image">Customer AI</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
