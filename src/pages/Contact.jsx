import {
  FaPhone,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaEnvelope,
  FaArrowRight,
} from "react-icons/fa";
import SEO from "../components/SEO/SEO";
import "./Contact.css";

const WHATSAPP_NUMBER = "916379923436";

const CLIENT_PHONE_1 = "917904180076";
const CLIENT_PHONE_2 = "916379923436";

const CLIENT_EMAIL = "youcallwesove@gmail.com";

function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    const name = formData.get("name");
    const phone = formData.get("phone");
    const service = formData.get("service");
    const message = formData.get("message");

    const whatsappMessage = `
Hello, You Call We Solve.

Name: ${name}
Phone: ${phone}
Service Required: ${service}
Work Details: ${message}

Please contact me regarding this work requirement.
    `.trim();

    const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappURL, "_blank");

    event.target.reset();
  };

  return (
    <>
      <SEO
        title="Contact Us | You Call We Solve"
        description="Contact You Call We Solve for electrical, plumbing, breaker machine and core cutting services in Anthiyur and surrounding areas. Share your requirements with us."
      />

      <section className="contact-page">
      <div className="contact-page-container">

        {/* =========================
            PAGE HEADING
        ========================= */}

        <div className="contact-page-heading">
          <p>GET IN TOUCH</p>

          <h1>
  Need a Service?
  <br />
  Contact Us Today.
</h1>

          <span>
  Need electrical, plumbing, breaker machine, or core cutting services?
  Share your requirements with us. We are ready to provide reliable
  and professional service.
</span>
        </div>


        {/* =========================
            CONTACT CONTENT
        ========================= */}

        <div className="contact-page-content">

          {/* =========================
              CONTACT INFORMATION
          ========================= */}

          <div className="contact-info">

            <div className="contact-info-title">
              <span>CONTACT DETAILS</span>

              <h2>
  We’re Ready to Discuss Your Requirements.
</h2>
            </div>


            {/* =========================
                PHONE
            ========================= */}

            <div className="contact-info-item">

              <div className="contact-info-icon">
                <FaPhone />
              </div>

              <div>
                <h3>Call Us</h3>

                <a
                  href={`tel:+${CLIENT_PHONE_1}`}
                  className="contact-phone-link"
                >
                  +91 79041 80076
                </a>

                <a
                  href={`tel:+${CLIENT_PHONE_2}`}
                  className="contact-phone-link"
                >
                  +91 63799 23436
                </a>
              </div>

            </div>


            {/* =========================
                WHATSAPP
            ========================= */}

            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-info-item"
            >

              <div className="contact-info-icon whatsapp-icon">
                <FaWhatsapp />
              </div>

              <div>
                <h3>WhatsApp</h3>

                <p>
  Share your work requirements with us on WhatsApp.
</p>
              </div>

            </a>


            {/* =========================
                LOCATION
            ========================= */}

            <div className="contact-info-item">

              <div className="contact-info-icon">
                <FaMapMarkerAlt />
              </div>

              <div>
                <h3>Service Location</h3>

                <p>
                  Anthiyur & nearby areas
                </p>
              </div>

            </div>


            {/* =========================
                EMAIL
            ========================= */}

            <a
              href={`mailto:${CLIENT_EMAIL}`}
              className="contact-info-item"
            >

              <div className="contact-info-icon">
                <FaEnvelope />
              </div>

              <div>
                <h3>Email</h3>

                <p>
                  {CLIENT_EMAIL}
                </p>
              </div>

            </a>

          </div>


          {/* =========================
              CONTACT FORM
          ========================= */}

          <div className="contact-form-wrapper">

            <div className="contact-form-heading">

              <span>
                SEND YOUR REQUIREMENT
              </span>

              <h2>
                Tell Us What Work You Need
              </h2>

              <p>
  Share a few details about your requirements so we can understand
  the work and discuss the next steps with you.
</p>

            </div>


            <form
              className="contact-form"
              onSubmit={handleSubmit}
            >

              {/* NAME + PHONE */}

              <div className="contact-form-row">

                <div className="contact-form-group">

                  <label htmlFor="name">
                    Your Name
                  </label>

                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    autoComplete="name"
                    required
                  />

                </div>


                <div className="contact-form-group">

                  <label htmlFor="phone">
                    Phone Number
                  </label>

                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Enter your phone number"
                    autoComplete="tel"
                    required
                  />

                </div>

              </div>


              {/* SERVICE */}

              <div className="contact-form-group">

                <label htmlFor="service">
                  Service Required
                </label>

                <select
                  id="service"
                  name="service"
                  defaultValue=""
                  required
                >

                  <option value="" disabled>
                    Select your service
                  </option>

                  <option value="Electrical Work">
                    Electrical Work
                  </option>

                  <option value="Plumbing Work">
                    Plumbing Work
                  </option>

                  <option value="Breaker Machine Work">
                    Breaker Machine Work
                  </option>

                  <option value="Core Cutting Work">
                    Core Cutting Work
                  </option>

                  <option value="Other Requirement">
                    Other Requirement
                  </option>

                </select>

              </div>


              {/* WORK DETAILS */}

              <div className="contact-form-group">

                <label htmlFor="message">
                  Work Details
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Describe your work requirements..."
                  required
                ></textarea>

              </div>


              {/* SUBMIT */}

              <button
                type="submit"
                className="contact-form-btn"
              >

                <FaWhatsapp />

                Send Requirement

                <FaArrowRight />

              </button>


              <p className="contact-form-note">
  Your requirement details will open in WhatsApp.
</p>

            </form>

          </div>

        </div>


        {/* =========================
            BOTTOM CTA
        ========================= */}

        <div className="contact-bottom">

          <div className="contact-bottom-content">

            <span>
              NEED SERVICE?
            </span>

            <h2>
  Need a Service? Contact Us Today.
</h2>

            <p>
  Share your requirements with us. We are ready to provide
  reliable and professional service.
</p>

          </div>


          <div className="contact-bottom-actions">

            <a
              href={`tel:+${CLIENT_PHONE_1}`}
              className="contact-bottom-call"
            >
              <FaPhone />
              Call Now
            </a>

            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-bottom-whatsapp"
            >
              <FaWhatsapp />
              WhatsApp Us
            </a>

          </div>

        </div>

      </div>
          </section>
    </>
  );
}

export default Contact;