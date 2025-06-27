import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../assets/logo_transparent.png";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [solutionsDropdownOpen, setSolutionsDropdownOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleMenuToggle = () => setMenuOpen((open) => !open);
  const handleLinkClick = () => setMenuOpen(false);

  const toggleSolutionsDropdown = () => {
    setSolutionsDropdownOpen(!solutionsDropdownOpen);
  };

  const closeSolutionsDropdown = () => {
    setSolutionsDropdownOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show header when scrolling up, hide when scrolling down
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down and past the top 100px
        setIsVisible(false);
      } else {
        // Scrolling up or at the top
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header className={`header ${isVisible ? "visible" : "hidden"}`}>
      <div className="logo">
        <Link to="/" onClick={handleLinkClick}>
          <img src={logo} alt="Cohort AI Logo" style={{ height: "44px" }} />
        </Link>
      </div>
      <nav
        className={`navigation${menuOpen ? " open" : ""}`}
        aria-label="Main navigation"
      >
        <button
          className="burger"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={handleMenuToggle}
        >
          {menuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
        </button>
        <div className="nav-links">
          <Link to="/" onClick={handleLinkClick}>
            Home
          </Link>
          <div className="dropdown-container">
            <button
              className="dropdown-toggle"
              onClick={toggleSolutionsDropdown}
              onMouseEnter={() => setSolutionsDropdownOpen(true)}
            >
              Solutions <FaChevronDown size={12} />
            </button>
            <div
              className={`dropdown-menu ${solutionsDropdownOpen ? "open" : ""}`}
              onMouseLeave={closeSolutionsDropdown}
            >
              <Link to="/ai-advisory" onClick={handleLinkClick}>
                AI Advisory
              </Link>
              <Link to="/ai-recruitment" onClick={handleLinkClick}>
                AI Recruitment
              </Link>
            </div>
          </div>
          <Link to="/education" onClick={handleLinkClick}>
            Education
          </Link>
          <Link to="/about" onClick={handleLinkClick}>
            About
          </Link>
          <Link to="/contact" onClick={handleLinkClick}>
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
