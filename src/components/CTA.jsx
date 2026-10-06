import { Link } from "react-router-dom";
import { FaArrowRight, FaWhatsapp } from "react-icons/fa";
import "./CTA.css";

function CTA() {
  return (
    <section className="cta">
      <div className="cta-container">
        <div className="cta-content">
          <p>READY TO GET STARTED?</p>
          <h2>Need Professional Service?</h2>
          <span>
            Contact us today and let's discuss your work requirements.
          </span>
        </div>

        <div className="cta-actions">
  <Link to="/contact" className="cta-primary-btn">
    Contact Us
    <FaArrowRight />
  </Link>

  <a
    href="https://wa.me/919999999999"
    className="cta-whatsapp-btn"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaWhatsapp />
    WhatsApp Us
  </a>
</div>
      </div>
    </section>
  );
}

export default CTA;