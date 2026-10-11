import { Link } from "react-router-dom";
import { FaArrowRight, FaWhatsapp } from "react-icons/fa";
import "./CTA.css";
import ScrollReveal from "./ScrollReveal/ScrollReveal";

function CTA() {
  return (
    <section className="cta">
      <div className="cta-container">

        {/* CTA CONTENT */}
        <ScrollReveal>
          <div className="cta-content">
            <p>NEED SERVICE?</p>

            <h2>Need Service? Contact Us Today.</h2>

            <span>
              Need electrical, plumbing, breaker machine and core cutting
              services? Share your requirements with us. We are ready to
              provide reliable and professional service.
            </span>
          </div>
        </ScrollReveal>


        {/* CTA ACTIONS */}
        <div className="cta-actions">

          <ScrollReveal delay={150}>
            <Link
              to="/contact"
              className="cta-primary-btn"
            >
              Get in Touch
              <FaArrowRight />
            </Link>
          </ScrollReveal>


          <ScrollReveal delay={300}>
            
<a
  href="https://wa.me/917904180076?text=Hello%2C%20I%20need%20your%20service."
  className="cta-whatsapp-btn"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Contact You Call We Solve on WhatsApp"
>
  <FaWhatsapp aria-hidden="true" />
  WhatsApp Us
</a>

          </ScrollReveal>

        </div>

      </div>
    </section>
  );
}

export default CTA;