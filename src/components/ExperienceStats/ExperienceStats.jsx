import "./ExperienceStats.css";

function ExperienceStats() {
  return (
    <section className="experience-stats">
      <div className="experience-stats-container">

        <div className="experience-stats-heading">
          <p>OUR EXPERIENCE</p>

          <h2>Trusted Work. Proven Experience.</h2>

          <span>
            Quality work and reliable service for electrical, plumbing,
            breaker machine & core cutting requirements.
          </span>
        </div>

        <div className="experience-stats-grid">

          <div className="experience-stat">
            <strong>5+</strong>
            <span>Years Experience</span>
          </div>

          <div className="experience-stat">
            <strong>300+</strong>
            <span>Works Completed</span>
          </div>

          <div className="experience-stat">
            <strong>95%+</strong>
            <span>Customer Satisfaction</span>
          </div>

          <div className="experience-stat">
            <strong>4</strong>
            <span>Main Services</span>
          </div>

        </div>

      </div>
    </section>
  );
}

export default ExperienceStats;