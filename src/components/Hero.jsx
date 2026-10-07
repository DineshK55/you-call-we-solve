import { Link } from "react-router-dom";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-lightning" aria-hidden="true">
  <svg viewBox="0 0 1600 500" preserveAspectRatio="none">

    {/* Main natural current */}
    <path
      className="bolt bolt-1"
      d="M-80 125
         C80 110 120 170 220 135
         C300 105 350 55 430 100
         C500 140 545 180 620 135
         C700 85 760 90 825 125
         C900 165 950 155 1020 110
         C1100 60 1160 85 1230 120
         C1320 165 1390 100 1680 125"
    />

    {/* Natural secondary branches */}
    <path
      className="bolt bolt-2"
      d="M220 135 L190 185 L205 225 L170 270"
    />

    <path
      className="bolt bolt-2"
      d="M430 100 L455 55 L440 20"
    />

    <path
      className="bolt bolt-2"
      d="M620 135 L590 185 L615 225 L580 260"
    />

    <path
      className="bolt bolt-2"
      d="M825 125 L855 80 L840 35"
    />

    <path
      className="bolt bolt-2"
      d="M1020 110 L990 165 L1015 205 L980 245"
    />

    <path
      className="bolt bolt-2"
      d="M1230 120 L1260 75 L1245 30"
    />

    {/* Fine natural cracks */}
    <path
      className="bolt-fine"
      d="M120 150 L95 120 L105 90"
    />

    <path
      className="bolt-fine"
      d="M350 115 L325 75 L340 45"
    />

    <path
      className="bolt-fine"
      d="M735 105 L710 65 L725 35"
    />

    <path
      className="bolt-fine"
      d="M1140 95 L1115 55 L1130 25"
    />

    <path
      className="bolt-fine"
      d="M1400 115 L1375 75 L1390 40"
    />

  </svg>
</div>
      <div className="hero-container">
        <div className="hero-content">
          <p className="hero-label">RELIABLE LOCAL SERVICE</p>

<h1>
  Electrical, Plumbing
  <br />
  & Machine Services
</h1>

<p className="hero-description">
  Electrical, plumbing, breaker machine & core cutting work thevaiya?
  Engala contact pannunga. Anthiyur suthiyulla areas-la reliable service
  provide pannitu varom.
</p>

<div className="hero-actions">
  <Link to="/contact" className="hero-primary-btn">
    Call / Contact Us
  </Link>

  <Link to="/works" className="hero-secondary-btn">
    View Our Work
  </Link>
</div>
        </div>
        <div className="hero-image">
  <img
    src="/images/hero-service.png"
    alt="Professional electrical and plumbing service"
  />
</div>
      </div>
    </section>
  );
}

export default Hero;