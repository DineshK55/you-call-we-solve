import { Link } from "react-router-dom";
import {
  FaBolt,
  FaWrench,
  FaTools,
  FaCircle,
  FaArrowRight,
} from "react-icons/fa";
import "./Services.css";

const services = [
  {
    image: "/images/electrical-work.png",
    icon: <FaBolt />,
    title: "Electrical Work",
    description:
      "Professional electrical installation, repair and maintenance services for residential and commercial projects.",
  },
  {
    image: "/images/plumbing-work.png",
    icon: <FaWrench />,
    title: "Plumbing Work",
    description:
      "Reliable plumbing installation, repair and maintenance solutions for different types of projects.",
  },
  {
    image: "/images/breaker-machine-work.png",
    icon: <FaTools />,
    title: "Breaker Machine Work",
    description:
      "Powerful and precise breaker machine services for construction and demolition requirements.",
  },
  {
    image: "/images/core-cutting-work.png",
    icon: <FaCircle />,
    title: "Core Cutting Work",
    description:
      "Accurate concrete core cutting services for construction and structural requirements.",
  },
];

function Services() {
  return (
    <section className="services-page">
      <div className="services-page-container">

        <div className="services-page-heading">
          <p className="services-page-label">WHAT WE DO</p>

          <h1>Professional Services</h1>

          <p className="services-page-description">
            Reliable electrical, plumbing, breaker machine and core cutting
            services delivered with quality, safety and precision.
          </p>
        </div>

        <div className="services-page-grid">
          {services.map((service, index) => (
            <article
              className="services-page-card"
              key={service.title}
              style={{ "--service-index": index }}
            >
              <div className="services-page-image">
                <img src={service.image} alt={service.title} />

                <div className="services-page-icon">
                  {service.icon}
                </div>
              </div>

              <div className="services-page-content">
                <h2>{service.title}</h2>

                <p>{service.description}</p>

                <Link to="/contact" className="services-page-card-link">
                  Get in Touch
                  <FaArrowRight />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="services-page-cta">
          <div>
            <p>READY TO START?</p>

            <h2>Need Our Services?</h2>

            <span>
              Get in touch with us to discuss your project requirements.
            </span>
          </div>

          <Link to="/contact" className="services-page-cta-btn">
            Contact Us
            <FaArrowRight />
          </Link>
        </div>

      </div>
    </section>
  );
}

export default Services;