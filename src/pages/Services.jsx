import { Link } from "react-router-dom";
import SEO from "../components/SEO/SEO";
import {
  FaBolt,
  FaWrench,
  FaTools,
  FaCircleNotch,
  FaArrowRight,
} from "react-icons/fa";
import "./Services.css";

const services = [
  {
    image: "/images/electrical-work.png",
    icon: <FaBolt />,
    title: "Electrical Work",
    description:
  "Electrical installation, wiring, repair and maintenance services for homes, shops and offices.",
  },
  {
    image: "/images/plumbing-work.png",
    icon: <FaWrench />,
    title: "Plumbing Work",
    description:
  "Water pipe installation, leakage repair, bathroom plumbing and other plumbing services.",
  },
  {
    image: "/images/breaker-machine-work.png",
    icon: <FaTools />,
    title: "Breaker Machine Work",
    description:
  "Breaker machine services for concrete breaking, wall breaking and demolition-related work.",
  },
  {
    image: "/images/core-cutting-work.png",
    icon: <FaCircleNotch />,
    title: "Core Cutting Work",
    description:
  "Accurate core cutting services for concrete walls, slabs and other construction requirements.",
  },
];

function Services() {
  return (
    <>
      <SEO
        title="Services | You Call We Solve"
        description="Explore electrical, plumbing, breaker machine and core cutting services provided by You Call We Solve in Anthiyur and surrounding areas."
      />

      <section className="services-page">
      <div className="services-page-container">
        

        

        {/* =========================
            PAGE HEADING
        ========================= */}

        <div className="services-page-heading">
          <p className="services-page-label">WHAT WE DO</p>

          <h1>Our Services</h1>

          <p className="services-page-description">
  Need electrical, plumbing, breaker machine, or core cutting services?
  Contact us to discuss your requirements.
</p>
        </div>

        {/* =========================
            SERVICES
        ========================= */}

        <div className="services-page-grid">
          {services.map((service, index) => (
            <article
              className="services-page-card"
              key={service.title}
              style={{ "--service-index": index }}
            >
              {/* IMAGE */}

              <div className="services-page-image">
                <img
                  src={service.image}
                  alt={service.title}
                />

                <div className="services-page-icon">
                  {service.icon}
                </div>
              </div>

              {/* CONTENT */}

              <div className="services-page-content">
                <h2>{service.title}</h2>

                <p>{service.description}</p>

                <Link
                  to="/contact"
                  className="services-page-card-link"
                >
                  Get in Touch
                  <FaArrowRight />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* =========================
            CTA
        ========================= */}

        <div className="services-page-cta">
          <div className="services-page-cta-content">
            <p>NEED SERVICE?</p>

            <h2>Need Service? Contact Us Today.</h2>

            <span>
  Share your requirements with us. We are ready to provide
  reliable and professional service.
</span>
          </div>

          <Link
            to="/contact"
            className="services-page-cta-btn"
          >
            Contact Us
            <FaArrowRight />
          </Link>
        </div>

      </div>
          </section>
    </>
  );
}

export default Services;