import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-container">

        <Link to="/" className="navbar-logo">
          You Call We Solve
        </Link>

        <nav className={`navbar-links ${isMenuOpen ? "active" : ""}`}>
          <Link to="/" onClick={() => setIsMenuOpen(false)}>
            Home
          </Link>

          <Link to="/services" onClick={() => setIsMenuOpen(false)}>
            Services
          </Link>

          <Link to="/works" onClick={() => setIsMenuOpen(false)}>
            Our Works
          </Link>

          <Link to="/about" onClick={() => setIsMenuOpen(false)}>
            About
          </Link>

          <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
            Contact
          </Link>
        </nav>

<div className="navbar-actions">

  <a
    href="https://wa.me/91XXXXXXXXXX"
    className="navbar-whatsapp"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaWhatsapp />
    WhatsApp
  </a>

  <Link to="/contact" className="navbar-button">
    Contact Us
  </Link>

</div>

        <button
          className={`navbar-menu-button ${isMenuOpen ? "active" : ""}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

      </div>
    </header>
  );
}

export default Navbar;