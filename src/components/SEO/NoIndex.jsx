import { useEffect } from "react";

function NoIndex() {
  useEffect(() => {
    let robots = document.querySelector('meta[name="robots"]');

    if (!robots) {
      robots = document.createElement("meta");
      robots.setAttribute("name", "robots");
      document.head.appendChild(robots);
    }

    robots.setAttribute("content", "noindex, nofollow");

    return () => {
      robots.setAttribute("content", "index, follow");
    };
  }, []);

  return null;
}

export default NoIndex;