import "./About.css";

function About() {
  return (
    <section className="about-page">
      <div className="about-page-container">
        <div className="about-page-heading">
          <p>ABOUT US</p>

          <h1>Reliable Service. Professional Work.</h1>

          <span>
            We provide dependable solutions for electrical, plumbing,
            breaker machine and core cutting requirements.
          </span>
        </div>

        <div className="about-page-content">
          <div className="about-page-text">
            <h2>Who We Are</h2>

            <p>
              You Call We Solve is a professional service provider focused on
              delivering reliable and quality solutions for residential,
              commercial and construction projects.
            </p>

            <p>
              Our team works with attention to safety, precision and
              responsible execution to make sure every project is completed
              professionally.
            </p>
          </div>

          <div className="about-page-values">
            <div className="about-value-card">
              <h3>Quality</h3>
              <p>We focus on delivering quality results on every project.</p>
            </div>

            <div className="about-value-card">
              <h3>Safety</h3>
              <p>We follow safe and responsible working practices.</p>
            </div>

            <div className="about-value-card">
              <h3>Reliability</h3>
              <p>We value our clients and complete work responsibly.</p>
            </div>

            <div className="about-value-card">
              <h3>Professionalism</h3>
              <p>We aim to provide clean and professional service.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;