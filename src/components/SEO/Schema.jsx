
function Schema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "You Call We Solve",
    description:
      "Electrical, plumbing, breaker machine and core cutting services in Anthiyur and surrounding areas.",
    telephone: "+91 79041 80076",
    areaServed: {
      "@type": "Place",
      name: "Anthiyur, Erode, Tamil Nadu, India",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Our Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Electrical Work",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Plumbing Work",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Breaker Machine Work",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Core Cutting Work",
          },
        },
      ],
    },
  };

  return (
    <script type="application/ld+json">
      {JSON.stringify(schema)}
    </script>
  );
}

export default Schema;
