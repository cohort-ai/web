import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../assets/logo_transparent.png';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Cohort AI Logo" />
      </div>
      <nav className="navigation">
        <Link to="/">Home</Link>
        <Link to="/solutions">Solutions</Link>
        <Link to="/education">Education</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
};

export default Header; 