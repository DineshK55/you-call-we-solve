import { FaQuoteLeft, FaStar } from "react-icons/fa";
import "./Testimonials.css";
import ScrollReveal from "../ScrollReveal/ScrollReveal";

const testimonials = [
  {
    name: "Ramesh",
    location: "Anthiyur",
    service: "Electrical Work",
    review:
      "We contacted them for electrical work. They understood our requirements clearly and completed the work neatly. The work area was also left clean after completion. Good service.",
  },
  {
    name: "Suresh",
    location: "Anthiyur",
    service: "Plumbing Work",
    review:
      "We had a plumbing issue at home. They understood the problem, visited the location, and inspected it properly. The work was completed satisfactorily.",
  },
  {
    name: "Arun",
    location: "Nearby Area",
    service: "Breaker Machine Work",
    review:
      "We needed breaker machine services for construction work. The required work was completed properly and efficiently. Overall, the service was very good.",
  },
  {
    name: "Kumar",
    location: "Nearby Area",
    service: "Core Cutting Work",
    review:
      "We needed core cutting work for our project. They inspected the work area and completed the cutting accurately. The work was neat and professionally done. Thank you for the service.",
  },
];

function Testimonials() {
  return (
    <section className="testimonials-section">
      <div className="testimonials-container">

        {/* =========================
            SECTION HEADER
        ========================= */}

        <ScrollReveal>
          <div className="testimonials-header">
            <span className="section-label">
              CUSTOMER FEEDBACK
            </span>

            <h2>What Our Customers Say</h2>

            <p>
              Feedback and experiences shared by our customers about our
              services.
            </p>
          </div>
        </ScrollReveal>


        {/* =========================
            TESTIMONIALS
        ========================= */}

        <div className="testimonials-grid">

          {testimonials.map((testimonial, index) => (
            <ScrollReveal
              key={index}
              delay={index * 120}
            >
              <div className="testimonial-card">

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
            </ScrollReveal>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Testimonials;