import { FaShieldAlt, FaUserCheck, FaClock, FaAward } from "react-icons/fa";
import "./WhyChooseUs.css";

const reasons = [
  {
    icon: <FaShieldAlt />,
    title: "Quality & Safety",
    description: "We focus on safe working practices and quality results.",
  },
  {
    icon: <FaUserCheck />,
    title: "Experienced Team",
    description: "Skilled professionals for different types of service work.",
  },
  {
    icon: <FaClock />,
    title: "Reliable Service",
    description: "We value your time and complete work responsibly.",
  },
  {
    icon: <FaAward />,
    title: "Professional Work",
    description: "Clean, precise and professional service for every project.",
  },
];

function WhyChooseUs() {
  return (
    <section className="why-choose-us">
      <div className="why-container">
        <div className="why-heading">
          <p>WHY CHOOSE US</p>
          <h2>Service You Can Depend On</h2>
          <span>
            We aim to deliver reliable and professional solutions for every
            project.
          </span>
        </div>

        <div className="why-grid">
          {reasons.map((reason) => (
            <div className="why-card" key={reason.title}>
              <div className="why-icon">{reason.icon}</div>
              <h3>{reason.title}</h3>
              <p>{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;