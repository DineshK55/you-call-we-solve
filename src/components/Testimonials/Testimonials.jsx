import { FaQuoteLeft, FaStar } from "react-icons/fa";
import "./Testimonials.css";

const testimonials = [
  {
    name: "Ramesh",
    location: "Anthiyur",
    service: "Electrical Work",
    review:
      "Electrical work-ku call pannom. Requirement-a correct-ah understand pannitu neat-ah work pannanga. Work mudinja apram place-um clean-ah irundhuchu. Good service.",
  },
  {
    name: "Suresh",
    location: "Anthiyur",
    service: "Plumbing Work",
    review:
      "Veetla plumbing problem irundhuchu. Contact pannadhum requirement ketu vandhu proper-ah check pannanga. Work satisfactory-ah mudichu kuduthanga.",
  },
  {
    name: "Arun",
    location: "Nearby Area",
    service: "Breaker Machine Work",
    review:
      "Construction work-ku breaker machine thevai pattuchu. Required work-ku machine work proper-ah pannanga. Overall service nalla irundhuchu.",
  },
  {
    name: "Kumar",
    location: "Nearby Area",
    service: "Core Cutting Work",
    review:
      "Core cutting work thevai irundhuchu. Work area-a check pannitu proper-ah cutting pannanga. Work neat-ah vandhuchu. Service-ku thanks.",
  },
];

function Testimonials() {
  return (
    <section className="testimonials-section">
      <div className="testimonials-container">

        {/* =========================
            SECTION HEADER
        ========================= */}

        <div className="testimonials-header">
          <span className="section-label">CUSTOMER FEEDBACK</span>

          <h2>What Our Customers Say</h2>

          <p>
            Engaloda service pathi customers share panra feedback
            and experience.
          </p>
        </div>

        {/* =========================
            TESTIMONIALS
        ========================= */}

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div className="testimonial-card" key={index}>

              {/* TOP ROW */}

              <div className="testimonial-top">
                <div className="quote-icon">
                  <FaQuoteLeft />
                </div>

                <div
                  className="testimonial-stars"
                  aria-label="5 star rating"
                >
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
              </div>

              {/* REVIEW */}

              <p className="testimonial-review">
                "{testimonial.review}"
              </p>

              {/* CUSTOMER */}

              <div className="testimonial-author">
                <div className="testimonial-avatar">
                  {testimonial.name.charAt(0)}
                </div>

                <div className="testimonial-author-info">
                  <h3>{testimonial.name}</h3>

                  <span>
                    {testimonial.service} · {testimonial.location}
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Testimonials;