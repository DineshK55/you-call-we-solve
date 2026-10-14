import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../assets/Logo.png";
import {
  FaWhatsapp,
  FaInstagram,
  FaMapMarkerAlt,
} from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  
return (
  <>
    <div className="topbar">
      <div className="topbar-container">
        <div className="topbar-social">
          <a
            href="https://wa.me/917904180076"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="topbar-whatsapp"
          >
            <FaWhatsapp />
          </a>

          <a
            href="https://www.instagram.com/murugan_electrican/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="topbar-instagram"
          >
            <FaInstagram />
          </a>
        </div>

        <p className="topbar-message">
          Electrical • Plumbing • Machine Works
        </p>

        <p className="topbar-location">
          <FaMapMarkerAlt />
          <span>Anthiyur, Tamil Nadu</span>
        </p>
      </div>
    </div>

    <header className="navbar">
      <div className="navbar-container">

        {/* LOGO */}
        <Link
  to="/"
  className="navbar-logo"
  onClick={closeMenu}
  aria-label="You Call We Solve - Home"
>
  <img
    src={logo}
    alt="You Call We Solve"
  />
</Link>


        {/* NAVIGATION */}
        <nav
          className={`navbar-links ${
            isMenuOpen ? "active" : ""
          }`}
        >
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? "active" : ""
            }
            onClick={closeMenu}
          >
            Home
          </NavLink>

          <NavLink
            to="/services"
            className={({ isActive }) =>
              isActive ? "active" : ""
            }
            onClick={closeMenu}
          >
            Services
          </NavLink>

          <NavLink
            to="/works"
            className={({ isActive }) =>
              isActive ? "active" : ""
            }
            onClick={closeMenu}
          >
            Our Works
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "active" : ""
            }
            onClick={closeMenu}
          >
            About
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "active" : ""
            }
            onClick={closeMenu}
          >
            Contact
          </NavLink>
        </nav>


        {/* NAVBAR ACTIONS */}
        <div className="navbar-actions">

          <a
            href="https://wa.me/917904180076"
            className="navbar-whatsapp"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contact us on WhatsApp"
          >
            <FaWhatsapp />
            <span>WhatsApp</span>
          </a>

          <Link
            to="/contact"
            className="navbar-button"
            onClick={closeMenu}
          >
            Contact Us
          </Link>

        </div>


        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          className={`navbar-menu-button ${
            isMenuOpen ? "active" : ""
          }`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={
            isMenuOpen
              ? "Close navigation menu"
              : "Open navigation menu"
          }
          aria-expanded={isMenuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

         </div>
  </header>
  </>
);
}

export default Navbar;