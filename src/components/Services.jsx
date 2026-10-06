import { FaBolt, FaWrench, FaTools, FaCircle } from "react-icons/fa";
import "./Services.css";

const services = [
  {
    icon: <FaBolt />,
    image: "/images/electrical-work.png",
    title: "Electrical Work",
    description:
      "Professional electrical installation, repair and maintenance services.",
  },
  {
    icon: <FaWrench />,
    image: "/images/plumbing-work.png",
    title: "Plumbing Work",
    description:
      "Reliable plumbing solutions for residential and commercial projects.",
  },
  {
    icon: <FaTools />,
    image: "/images/breaker-machine-work.png",
    title: "Breaker Machine Work",
    description:
      "Powerful and precise breaker machine services for construction work.",
  },
  {
    icon: <FaCircle />,
    image: "/images/core-cutting-work.png",
    title: "Core Cutting Work",
    description:
      "Accurate core cutting solutions for concrete and construction projects.",
  },
];

function Services() {
  return (
    <section className="services">
      <div className="services-container">
        <div className="services-heading">
          <p>WHAT WE DO</p>
          <h2>Our Professional Services</h2>
          <span>
            Reliable solutions delivered with quality, safety and precision.
          </span>
        </div>

<div className="services-grid">
  {services.map((service) => (
    <div className="service-card" key={service.title}>

      <div className="service-image">
        <img src={service.image} alt={service.title} />

        <div className="service-icon">
          {service.icon}
        </div>
      </div>

      <h3>{service.title}</h3>

      <p>{service.description}</p>

    </div>
  ))}
</div>
      </div>
    </section>
  );
}

export default Services;