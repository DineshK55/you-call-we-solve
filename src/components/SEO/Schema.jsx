function Schema() {
  const schemas = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://www.youcallwesolve.com/#website",
        url: "https://www.youcallwesolve.com/",
        name: "You Call We Solve",
alternateName: "YouCallWeSolve",
image: "https://www.youcallwesolve.com/logo.png",
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://www.youcallwesolve.com/#business",
        name: "You Call We Solve",
        url: "https://www.youcallwesolve.com/",
        description:
          "Electrical, plumbing, breaker machine and core cutting works in Anthiyur and surrounding areas.",
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
      },
    ],
  };

  return (
    <script type="application/ld+json">
      {JSON.stringify(schemas)}
    </script>
  );
}

export default Schema;