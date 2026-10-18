import { Link } from "react-router-dom";
import { FaWhatsapp, FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import {
  FaBolt,
  FaDroplet,
  FaScrewdriverWrench,
  FaCircleDot,
} from "react-icons/fa6";
import logo from "../assets/Logo.png";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* =========================
            BRAND
        ========================= */}
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
  <img src={logo} alt="You Call We Solve" />
</Link>

          <p className="footer-description">
            Professional electrical, plumbing, breaker machine and core
            cutting services. Reliable service for your home and business.
          </p>

          {/* SOCIAL MEDIA */}
          <div className="footer-social">
            <a
  href="https://wa.me/917904180076"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="social-icon whatsapp"
            >
              <FaWhatsapp />
            </a>

            <a
              href="https://www.instagram.com/murugan_electrican/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="social-icon instagram"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* =========================
            QUICK LINKS
        ========================= */}
        <div className="footer-column">
          <h3>Quick Links</h3>

          <Link to="/">Home <span>›</span></Link>
          <Link to="/services">Services <span>›</span></Link>
          <Link to="/works">Our Works <span>›</span></Link>
          <Link to="/about">About <span>›</span></Link>
          <Link to="/contact">Contact <span>›</span></Link>
        </div>

        {/* =========================
            CONTACT
        ========================= */}
        <div className="footer-column footer-contact">
          <h3>Contact Us</h3>

          <div className="contact-item">
            <div className="contact-icon phone">
              <FaPhone />
            </div>

            <div>
  <span>Phone</span>
  <a href="tel:+917904180076">+91 79041 80076</a>
  <a href="tel:+916379923436">+91 63799 23436</a>
</div>
          </div>

          <div className="contact-item">
            <div className="contact-icon email">
              <FaEnvelope />
            </div>

            <div>
              <span>Email</span>
              <p>Youcallwesolve@gmail.com</p>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-icon location">
              <FaMapMarkerAlt />
            </div>

            <div>
              <span>Location</span>
              <p>Anthiyur, Tamil Nadu</p>
            </div>
          </div>
        </div>

        {/* =========================
            SERVICES
        ========================= */}
        <div className="footer-column footer-services">
          <h3>Our Services</h3>

          <div className="service-item">
            <FaBolt />
            <span>Electrical Work</span>
          </div>

          <div className="service-item">
            <FaDroplet />
            <span>Plumbing Work</span>
          </div>

          <div className="service-item">
            <FaScrewdriverWrench />
            <span>Breaker Machine Work</span>
          </div>

          <div className="service-item">
  <FaCircleDot />
  <span>Core Cutting Work</span>
</div>
        </div>

      </div>

      {/* =========================
          FOOTER BOTTOM
      ========================= */}
      <div className="footer-bottom">
        <div className="footer-bottom-container">

          <p>
            © 2026 You Call We Solve. All rights reserved.
          </p>

          <div className="footer-bottom-links">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <span>|</span>
            <Link to="/terms">Terms & Conditions</Link>
            <span>|</span>
            <Link to="/sitemap">Sitemap</Link>
          </div>

          <button
            className="back-to-top"
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
            aria-label="Back to top"
          >
            ↑
          </button>

        </div>
      </div>
    </footer>
  );
}

export default Footer;