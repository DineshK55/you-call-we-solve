import { useEffect, useState } from "react";
import "./PageTransition.css";

function PageTransition({ children }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(false);

    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 50);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className={`page-transition ${isVisible ? "page-transition-visible" : ""}`}>
      {children}
    </div>
  );
}

export default PageTransition;