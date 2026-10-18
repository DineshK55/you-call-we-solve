
import {
  FaShieldAlt,
  FaCheckCircle,
  FaUserCheck,
  FaHandshake,
  FaClock,
} from "react-icons/fa";

import "./ServiceWarranty.css";
import ScrollReveal from "./ScrollReveal/ScrollReveal";

const warrantyBenefits = [
  {
    icon: <FaShieldAlt />,
    title: "Reliable Service",
    description: "Dependable service with proper attention.",
  },
  {
    icon: <FaUserCheck />,
    title: "Skilled Professionals",
    description: "Practical experience and professional care.",
  },
  {
    icon: <FaHandshake />,
    title: "Quality Workmanship",
    description: "A focus on quality and neat finishing.",
  },
  {
    icon: <FaClock />,
    title: "On-Time Support",
    description: "Responsible support for your requirements.",
  },
];

function ServiceWarranty() {
  return (
    <section className="service-warranty">
      <div className="warranty-container">
        <ScrollReveal>
          <div className="warranty-content">
            <div className="warranty-icon">
              <FaShieldAlt />
            </div>

            <p className="warranty-label">
              OUR SERVICE PROMISE
            </p>

            <h2>3-Month Service Warranty</h2>

            <p className="warranty-description">
              We stand behind the quality of our work.
              Your trust means everything to us. Our three-month
              service warranty reflects our commitment to reliable
              service, professional workmanship and your satisfaction.
            </p>

            <div className="warranty-highlight">
              <FaCheckCircle />
              <span>Reliable Work. Trusted Service.</span>
            </div>

            
<div className="warranty-benefits">
  {warrantyBenefits.map((benefit, index) => (
    <ScrollReveal
      key={benefit.title}
      delay={index * 180}
      direction="up"
      className="warranty-benefit-reveal"
    >
      <div className="warranty-benefit">
        <div className="warranty-benefit-icon">
          {benefit.icon}
        </div>

        <h3>{benefit.title}</h3>

        <p>{benefit.description}</p>
      </div>
    </ScrollReveal>
  ))}
</div>

          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

export default ServiceWarranty;
