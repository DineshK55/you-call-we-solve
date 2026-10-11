
import {
  FaBolt,
  FaFaucet,
  FaScrewdriverWrench,
  FaCircleDot,
} from "react-icons/fa6";

import "./Services.css";
import ScrollReveal from "./ScrollReveal/ScrollReveal";

const services = [
  {
    icon: <FaBolt />,
    image: "/images/electrical-work.png",
    title: "Electrical Work",
    description:
      "Electrical installation, wiring, repair and maintenance work for your home, shop and other requirements.",
  },
  {
    icon: <FaFaucet />,
    image: "/images/plumbing-work.png",
    title: "Plumbing Work",
    description:
      "Water pipe work, leakage repair, bathroom plumbing and other plumbing requirements.",
  },
  {
    icon: <FaScrewdriverWrench />,
    image: "/images/breaker-machine-work.png",
    title: "Breaker Machine Work",
    description:
      "Breaker machine work for concrete breaking, demolition and construction-related requirements.",
  },
  {
    icon: <FaCircleDot />,
    image: "/images/core-cutting-work.png",
    title: "Core Cutting Work",
    description:
      "Core cutting work for concrete walls, slabs and other construction requirements.",
  },
];

function Services() {
  return (
    <section className="services">
      <div className="services-container">
        <ScrollReveal>
          <div className="services-heading">
            <p>WHAT WE DO</p>
            <h2>Our Professional Services</h2>
            <span>
              Need electrical, plumbing, breaker machine and core cutting
              services? Contact us for reliable and professional service based
              on your requirements.
            </span>
          </div>
        </ScrollReveal>

        <div className="services-grid">
          {services.map((service, index) => (
            <ScrollReveal
              key={service.title}
              delay={index * 100}
            >
              <div className={`service-card service-${index}`}>
                <div className="service-image">
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                  />

                  <div className="service-icon">
                    {service.icon}
                  </div>
                </div>

                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
