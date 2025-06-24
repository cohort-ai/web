import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="contact-info">
          <h4>Contact Us</h4>
          <p>Email: <a href="mailto:info+website@cohort.hk">info@cohort.hk</a></p>
        </div>
        <div className="social-links">
          <h4>Follow Us</h4>
          <a href="https://www.linkedin.com/company/107527298">LinkedIn</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Cohort AI. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer; 