import SEO from "../components/SEO/SEO";
import "./About.css";
function About() {
  return (
    <>
      <SEO
        title="About Us | You Call We Solve"
        description="Learn about You Call We Solve, providing reliable electrical, plumbing, breaker machine and core cutting services in Anthiyur and surrounding areas."
      />

      <section className="about-page">
      <div className="about-page-container">

        {/* =========================
            PAGE HEADING
        ========================= */}

        <div className="about-page-heading">
          <p>ABOUT MURUGAN ELECTRICALS</p>

          <h1>
            Reliable Service.
            <br />
            Professional Work.
          </h1>

          <span>
            Murugan Electricals provides electrical, plumbing, breaker machine
            and core cutting services for residential, commercial and
            construction-related requirements.
          </span>
        </div>

        {/* =========================
            INTRODUCTION
        ========================= */}

        <div className="about-intro">

          <div className="about-intro-content">
            <span className="about-small-label">WHO WE ARE</span>

            <h2>Experience You Can Rely On</h2>

            <p>
              Murugan Electricals provides dependable electrical, plumbing,
              breaker machine and core cutting services with a focus on
              quality workmanship and proper attention to every requirement.
            </p>

            <p>
              With over 5 years of practical experience, we understand
              different types of service and construction-related work.
              Our approach is focused on completing each job responsibly,
              neatly and according to the requirements.
            </p>
          </div>

          <div className="about-intro-highlight">
            <strong>5+</strong>

            <span>Years of Practical Experience</span>

            <p>
              Experience across electrical, plumbing, breaker machine and
              core cutting services.
            </p>
          </div>

        </div>

        {/* =========================
            OUR SERVICES
        ========================= */}

        <div className="about-services">

          <div className="about-section-heading">
            <span>WHAT WE DO</span>

            <h2>Our Areas of Service</h2>

            <p>
              We provide practical service solutions for a range of
              residential, commercial and construction-related requirements.
            </p>
          </div>

          <div className="about-services-grid">

            <div className="about-service-item">
              <strong>01</strong>

              <h3>Electrical Work</h3>

              <p>
                Electrical installation, wiring, repair and maintenance
                services for homes, shops and offices.
              </p>
            </div>

            <div className="about-service-item">
              <strong>02</strong>

              <h3>Plumbing Work</h3>

              <p>
                Water pipe installation, leakage repair, bathroom plumbing
                and other plumbing services.
              </p>
            </div>

            <div className="about-service-item">
              <strong>03</strong>

              <h3>Breaker Machine Work</h3>

              <p>
                Breaker machine services for concrete breaking, wall breaking
                and demolition-related work.
              </p>
            </div>

            <div className="about-service-item">
              <strong>04</strong>

              <h3>Core Cutting Work</h3>

              <p>
                Accurate core cutting services for concrete walls, slabs and
                other construction requirements.
              </p>
            </div>

          </div>
        </div>

        {/* =========================
            OUR APPROACH
        ========================= */}

        <div className="about-approach">

          <div className="about-approach-heading">
            <span>OUR APPROACH</span>

            <h2>Quality, Reliability &amp; Proper Attention</h2>
          </div>

          <div className="about-approach-content">

            <div className="about-approach-item">
              <h3>Reliable Service</h3>

              <p>
                We understand the work requirement clearly and focus on
                providing dependable service.
              </p>
            </div>

            <div className="about-approach-item">
              <h3>Quality Workmanship</h3>

              <p>
                We focus on neat, precise and responsible execution of
                every service requirement.
              </p>
            </div>

            <div className="about-approach-item">
              <h3>Practical Experience</h3>

              <p>
                Our practical experience helps us handle different types
                of service and construction-related requirements.
              </p>
            </div>

          </div>
        </div>

        {/* =========================
            SERVICE AREA
        ========================= */}

        <div className="about-location">

          <div>
            <span>SERVICE AREA</span>

            <h2>Serving Anthiyur &amp; Surrounding Areas</h2>

            <p>
              Murugan Electricals provides electrical, plumbing, breaker
              machine and core cutting services in Anthiyur and surrounding
              areas.
            </p>
          </div>

        </div>

      </div>
         </section>
    </>
  );
}

export default About;