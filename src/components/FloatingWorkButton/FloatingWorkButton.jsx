import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import "./FloatingWorkButton.css";

function FloatingWorkButton() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 250) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return createPortal(
    <Link
      to="/works"
      className={`floating-work-button ${
        isScrolled ? "floating-work-button-visible" : ""
      }`}
      aria-label="View our work"
    >
      <span className="floating-work-label">
        OUR WORK
      </span>

      <span className="floating-work-text">
        View Our Work
      </span>

      <span className="floating-work-arrow">
        <FaArrowRight />
      </span>
    </Link>,
    document.body
  );
}

export default FloatingWorkButton;