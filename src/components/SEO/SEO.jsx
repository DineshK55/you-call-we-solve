import { useEffect } from "react";

function SEO({ title, description }) {
  useEffect(() => {
    document.title = title;

    let metaDescription = document.querySelector(
      'meta[name="description"]'
    );

    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      document.head.appendChild(metaDescription);
    }

    metaDescription.setAttribute("content", description);

    return () => {
      document.title =
        "You Call We Solve | Electrical, Plumbing & Machine Services";
    };
  }, [title, description]);

  return null;
}

export default SEO;