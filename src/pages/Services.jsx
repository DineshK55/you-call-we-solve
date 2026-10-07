import { Link } from "react-router-dom";
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
      "Veedu, shop, office-ku electrical installation, wiring, repair & maintenance work.",
  },
  {
    image: "/images/plumbing-work.png",
    icon: <FaWrench />,
    title: "Plumbing Work",
    description:
      "Water pipe work, leakage repair, bathroom plumbing & other plumbing requirements.",
  },
  {
    image: "/images/breaker-machine-work.png",
    icon: <FaTools />,
    title: "Breaker Machine Work",
    description:
      "Construction work-ku concrete breaking, wall breaking & demolition-related machine work.",
  },
  {
    image: "/images/core-cutting-work.png",
    icon: <FaCircleNotch />,
    title: "Core Cutting Work",
    description:
      "Concrete wall, slab & other construction requirements-ku accurate core cutting work.",
  },
];

function Services() {
  return (
    <section className="services-page">
      <div className="services-page-container">

        {/* =========================
            PAGE HEADING
        ========================= */}

        <div className="services-page-heading">
          <p className="services-page-label">WHAT WE DO</p>

          <h1>Our Services</h1>

          <p className="services-page-description">
            Electrical, plumbing, breaker machine & core cutting work
            thevaiya? Ungaloda requirement-ku engala contact pannunga.
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

            <h2>Work Thevaiya? Engala Contact Pannunga.</h2>

            <span>
              Ungaloda requirement-a share pannunga. Thevaiyana
              service-ku naanga help panna ready-ah irukom.
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
  );
}

export default Services;