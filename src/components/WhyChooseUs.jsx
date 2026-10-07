import { FaShieldAlt, FaUserCheck, FaClock, FaAward } from "react-icons/fa";
import "./WhyChooseUs.css";

const reasons = [
  {
    icon: <FaShieldAlt />,
    title: "Quality & Safety",
description:
  "We focus on safe working practices, proper attention and quality results.",
  },
  {
    icon: <FaUserCheck />,
    title: "Practical Experience",
description:
  "We handle different service requirements with practical experience and proper attention.",
  },
  {
    icon: <FaClock />,
    title: "Reliable Service",
description:
  "We understand your requirement and focus on completing the work responsibly.",
  },
  {
    icon: <FaAward />,
    title: "Professional Work",
description:
  "We focus on neat, precise and professional work according to your requirement.",
  },
];

function WhyChooseUs() {
  return (
    <section className="why-choose-us">
      <div className="why-container">
        <div className="why-heading">
         <p>WHY CHOOSE US</p>

<h2>Reliable Service. Quality Work.</h2>

<span>
  Ungaloda work requirement-ku reliable service, quality work and
  proper attention provide panna naanga focus panrom.
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