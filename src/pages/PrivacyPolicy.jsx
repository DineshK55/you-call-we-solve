import SEO from "../components/SEO/SEO";
import "./LegalPages.css";

function PrivacyPolicy() {
  return (
    <>
      <SEO
        title="Privacy Policy | You Call We Solve"
        description="Read the Privacy Policy for You Call We Solve to understand how information shared through our website and service enquiries may be used."
      />

      <section className="legal-page">
        <div className="legal-container">
          <div className="legal-header">
            <span>YOU CALL WE SOLVE</span>
            <h1>Privacy Policy</h1>
            <p>Your privacy is important to us.</p>
          </div>

          <div className="legal-content">
            <h2>1. Information We Collect</h2>
            <p>
              When you contact You Call We Solve through our website, phone,
              WhatsApp, email, or other communication methods, we may receive
              information such as your name, phone number, email address,
              location, and service requirements.
            </p>

            <h2>2. How We Use Your Information</h2>
            <p>
              The information you provide may be used to respond to your
              enquiries, understand your service requirements, communicate
              with you, and provide electrical, plumbing, breaker machine,
              and core cutting works.
            </p>

            <h2>3. Information Protection</h2>
            <p>
              We take reasonable steps to protect the information shared with
              us and use it only for legitimate business and service-related
              purposes.
            </p>

            <h2>4. Third-Party Services</h2>
            <p>
              Our website may contain links to third-party platforms such as
              WhatsApp and Instagram. Their use is subject to the privacy
              policies and terms of those respective platforms.
            </p>

            <h2>5. Contact</h2>
            <p>
              If you have questions about this Privacy Policy, you can contact
              us through the contact details provided on our website.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default PrivacyPolicy;