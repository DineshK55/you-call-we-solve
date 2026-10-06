import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import "./Contact.css";

function Contact() {
  return (
    <section className="contact-page">
      <div className="contact-page-container">

        <div className="contact-page-heading">
          <p>GET IN TOUCH</p>

          <h1>Let's Talk About Your Project</h1>

          <span>
            Have a service requirement? Contact us and let's discuss how
            we can help.
          </span>
        </div>

        <div className="contact-page-content">

          <div className="contact-info">

            <div className="contact-info-item">
              <div className="contact-info-icon">
                <FaPhone />
              </div>

              <div>
                <h3>Phone</h3>
                <p>+91 XXXXX XXXXX</p>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-info-icon">
                <FaEnvelope />
              </div>

              <div>
                <h3>Email</h3>
                <p>example@email.com</p>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-info-icon">
                <FaMapMarkerAlt />
              </div>

              <div>
                <h3>Location</h3>
                <p>Gobichettipalayam, Tamil Nadu</p>
              </div>
            </div>

          </div>

          <form className="contact-form">

            <div className="contact-form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                placeholder="Your name"
              />
            </div>

            <div className="contact-form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                placeholder="Your phone number"
              />
            </div>

            <div className="contact-form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                rows="5"
                placeholder="Tell us about your work requirement"
              ></textarea>
            </div>

            <button type="submit" className="contact-form-btn">
              Send Message
            </button>

          </form>

        </div>
      </div>
    </section>
  );
}

export default Contact;