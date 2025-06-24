import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../assets/logo_transparent.png';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => setMenuOpen((open) => !open);
  const handleLinkClick = () => setMenuOpen(false);

  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Cohort AI Logo" style={{ height: '44px' }} />
      </div>
      <nav className={`navigation${menuOpen ? ' open' : ''}`} aria-label="Main navigation">
        <button
          className="burger"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={handleMenuToggle}
        >
          {menuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
        </button>
        <div className="nav-links">
          <Link to="/" onClick={handleLinkClick}>Home</Link>
          <Link to="/solutions" onClick={handleLinkClick}>Solutions</Link>
          <Link to="/education" onClick={handleLinkClick}>Education</Link>
          <Link to="/about" onClick={handleLinkClick}>About</Link>
          <Link to="/contact" onClick={handleLinkClick}>Contact</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header; 