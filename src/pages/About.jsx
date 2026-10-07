import "./About.css";

function About() {
  return (
    <section className="about-page">
      <div className="about-page-container">

        {/* =========================
            HEADING
        ========================= */}

        <div className="about-page-heading">
          <p>ABOUT US</p>

          <h1>
            Karthi — Reliable Service.
            <br />
            Professional Work.
          </h1>

          <span>
            5+ years of practical experience in electrical, plumbing,
            breaker machine and core cutting services.
          </span>
        </div>

        {/* =========================
            CONTENT
        ========================= */}

        <div className="about-page-content">

          {/* WHO WE ARE */}

          <div className="about-page-text">
            <span className="about-small-label">WHO WE ARE</span>

            <h2>Experience You Can Rely On</h2>

            <p>
              Karthi provides electrical, plumbing, breaker machine and
              core cutting services for residential, commercial and
              construction-related requirements.
            </p>

            <p>
              With 5+ years of practical experience, we understand
              different types of work requirements and focus on providing
              reliable service with proper attention and quality
              workmanship.
            </p>

            <p className="about-tanglish">
              Anthiyur suthiyulla areas-la 5+ years experience-oda
              electrical, plumbing, breaker machine & core cutting work
              pannitu varom.
            </p>
          </div>

          {/* EXPERIENCE */}

          <div className="about-page-values">

            <div className="about-value-card">
              <strong>5+</strong>

              <h3>Years Experience</h3>

              <p>
                Practical experience in different service requirements.
              </p>
            </div>

            <div className="about-value-card">
              <strong>4</strong>

              <h3>Main Services</h3>

              <p>
                Electrical, plumbing, breaker machine & core cutting.
              </p>
            </div>

            <div className="about-value-card">
              <strong>Local</strong>

              <h3>Anthiyur & Nearby</h3>

              <p>
                Anthiyur suthiyulla areas-la service provide pannitu varom.
              </p>
            </div>

            <div className="about-value-card">
              <strong>Quality</strong>

              <h3>Work Focus</h3>

              <p>
                Reliable, neat and responsible service for every requirement.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default About;