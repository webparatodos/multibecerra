import { siteConfig } from "@/lib/site-config";

export function LocalBusinessJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.phoneIntl,
    priceRange: siteConfig.priceRange,
    slogan: siteConfig.claim,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Ronda",
      addressRegion: "Málaga",
      addressCountry: "ES",
    },
    areaServed: siteConfig.areasServed.map((area) => ({
      "@type": "City",
      name: area,
    })),
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "08:00",
      closes: "19:00",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Servicios Multi Becerra",
      itemListElement: siteConfig.services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service,
          areaServed: siteConfig.areasServed.map((area) => ({
            "@type": "City",
            name: area,
          })),
        },
      })),
    },
    sameAs: [siteConfig.instagramUrl],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
