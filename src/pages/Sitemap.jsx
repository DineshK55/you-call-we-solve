import { Link } from "react-router-dom";
import "./LegalPages.css";

function Sitemap() {
  return (
    <section className="legal-page">
      <div className="legal-container">

        <div className="legal-header">
          <span>YOU CALL WE SOLVE</span>
          <h1>Sitemap</h1>
          <p>Find your way around our website.</p>
        </div>

        <div className="sitemap-grid">

          <Link to="/">
            <strong>Home</strong>
            <span>Visit our home page</span>
          </Link>

          <Link to="/services">
            <strong>Services</strong>
            <span>Explore our services</span>
          </Link>

          <Link to="/works">
            <strong>Our Works</strong>
            <span>View our completed work</span>
          </Link>

          <Link to="/about">
            <strong>About</strong>
            <span>Learn more about us</span>
          </Link>

          <Link to="/contact">
            <strong>Contact</strong>
            <span>Get in touch with us</span>
          </Link>

          <Link to="/privacy-policy">
            <strong>Privacy Policy</strong>
            <span>Read our privacy policy</span>
          </Link>

          <Link to="/terms">
            <strong>Terms & Conditions</strong>
            <span>Read our terms</span>
          </Link>

        </div>

      </div>
    </section>
  );
}

export default Sitemap;