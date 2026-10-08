import { FaBolt, FaWrench, FaTools, FaCircleNotch } from "react-icons/fa";
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
    icon: <FaWrench />,
    image: "/images/plumbing-work.png",
    title: "Plumbing Work",
    description:
      "Water pipe work, leakage repair, bathroom plumbing and other plumbing requirements.",
  },
  {
    icon: <FaTools />,
    image: "/images/breaker-machine-work.png",
    title: "Breaker Machine Work",
    description:
      "Breaker machine work for concrete breaking, demolition and construction-related requirements.",
  },
  {
    icon: <FaCircleNotch />,
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

        {/* SECTION HEADING */}
        <ScrollReveal>
          <div className="services-heading">
            <p>WHAT WE DO</p>

            <h2>Our Professional Services</h2>

            <span>
              Need electrical, plumbing, breaker machine, or core cutting
              services? Contact us for reliable and professional service based
              on your requirements.
            </span>
          </div>
        </ScrollReveal>


        {/* SERVICE CARDS */}
        <div className="services-grid">

          {services.map((service, index) => (
            <ScrollReveal
              key={service.title}
              delay={index * 100}
            >
              <div className="service-card">

                <div className="service-image">
                  <img
                    src={service.image}
                    alt={service.title}
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