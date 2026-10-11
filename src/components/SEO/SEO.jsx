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
    "Electrical, Plumbing & Machine Work | You Call We Solve";
};
  }, [title, description]);

  return null;
}

export default SEO;