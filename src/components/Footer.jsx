import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            You Call We Solve
          </Link>

          <p>
            Professional electrical, plumbing, breaker machine and core
            cutting services.
          </p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>

          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/works">Our Works</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="footer-contact">
          <h3>Contact</h3>

          <p>Phone: +91 XXXXX XXXXX</p>
          <p>Email: example@email.com</p>
          <p>Gobichettipalayam, Tamil Nadu</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 You Call We Solve. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;