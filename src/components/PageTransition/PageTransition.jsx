import { useEffect, useState } from "react";
import "./PageTransition.css";

function PageTransition({ children }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(false);

    const frame = requestAnimationFrame(() => {
      setIsVisible(true);
    });

    return () => {
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      className={`page-transition ${
        isVisible ? "page-transition-visible" : ""
      }`}
    >
      {children}
    </div>
  );
}

export default PageTransition;