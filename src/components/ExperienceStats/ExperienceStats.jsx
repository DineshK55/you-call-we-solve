import "./ExperienceStats.css";
import ScrollReveal from "../ScrollReveal/ScrollReveal";

function ExperienceStats() {
  return (
    <section className="experience-stats">
      <div className="experience-stats-container">

        {/* SECTION HEADING */}
        <ScrollReveal>
          <div className="experience-stats-heading">
            <p>OUR EXPERIENCE</p>

            <h2>Trusted Work. Proven Experience.</h2>

            <span>
              Quality work and reliable service for electrical, plumbing,
              breaker machine & core cutting requirements.
            </span>
          </div>
        </ScrollReveal>


        {/* EXPERIENCE STATS */}
        <div className="experience-stats-grid">

          <ScrollReveal delay={0}>
            <div className="experience-stat">
              <strong>5+</strong>
              <span>Years Experience</span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="experience-stat">
              <strong>300+</strong>
              <span>Works Completed</span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="experience-stat">
              <strong>95%+</strong>
              <span>Customer Satisfaction</span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <div className="experience-stat">
              <strong>4</strong>
              <span>Main Services</span>
            </div>
          </ScrollReveal>

        </div>

      </div>
    </section>
  );
}

export default ExperienceStats;