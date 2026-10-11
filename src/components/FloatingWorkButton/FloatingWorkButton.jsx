import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import "./FloatingWorkButton.css";

function FloatingWorkButton() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 250);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

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
      aria-label="View our completed work"
      tabIndex={isScrolled ? 0 : -1}
      aria-hidden={!isScrolled}
    >
      <span className="floating-work-label">OUR WORK</span>

      <span className="floating-work-text">View Our Work</span>

      <span className="floating-work-arrow" aria-hidden="true">
        <FaArrowRight />
      </span>
    </Link>,
    document.body
  );
}

export default FloatingWorkButton;