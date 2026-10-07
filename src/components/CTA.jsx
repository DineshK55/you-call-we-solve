import { Link } from "react-router-dom";
import { FaArrowRight, FaWhatsapp } from "react-icons/fa";
import "./CTA.css";

function CTA() {
  return (
    <section className="cta">
      <div className="cta-container">
        <div className="cta-content">
          <p>NEED SERVICE?</p>
          <h2>Work Thevaiya? Engala Call Pannunga.</h2>
          <span>
  Electrical, plumbing, breaker machine & core cutting work thevaiya?
  Ungaloda requirement-a share pannunga. Naanga service provide panna
  ready-ah irukom.
</span>
        </div>

        <div className="cta-actions">
  <Link to="/contact" className="cta-primary-btn">
  Get in Touch
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