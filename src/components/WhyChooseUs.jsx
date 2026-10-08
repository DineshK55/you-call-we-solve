import { FaShieldAlt, FaUserCheck, FaClock, FaAward } from "react-icons/fa";
import "./WhyChooseUs.css";
import ScrollReveal from "./ScrollReveal/ScrollReveal";

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

        {/* SECTION HEADING */}
        <ScrollReveal>
          <div className="why-heading">
            <p>WHY CHOOSE US</p>

            <h2>Reliable Service. Quality Work.</h2>

            <span>
              We focus on providing reliable service, quality workmanship and
              proper attention to meet your requirements.
            </span>
          </div>
        </ScrollReveal>


        {/* REASONS */}
        <div className="why-grid">
          {reasons.map((reason, index) => (
            <ScrollReveal
              key={reason.title}
              delay={index * 100}
            >
              <div className="why-card">

                <div className="why-icon">
                  {reason.icon}
                </div>

                <h3>{reason.title}</h3>

                <p>{reason.description}</p>

              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}

export default WhyChooseUs;