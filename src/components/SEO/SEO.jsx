import { useEffect } from "react";

function SEO({ title, description }) {
  useEffect(() => {
    document.title = title;

    // Update meta description
    let metaDescription = document.querySelector(
      'meta[name="description"]'
    );

    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      document.head.appendChild(metaDescription);
    }

    metaDescription.setAttribute("content", description);

    // Update canonical URL
    let canonical = document.querySelector(
      'link[rel="canonical"]'
    );

    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }

    const pathname = window.location.pathname;

    canonical.setAttribute(
      "href",
      `https://www.youcallwesolve.com${pathname}`
    );
  }, [title, description]);

  return null;
}

export default SEO;