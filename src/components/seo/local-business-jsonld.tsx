import { siteConfig } from "@/lib/site-config";

export function LocalBusinessJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.phoneIntl,
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
    makesOffer: siteConfig.services.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service,
      },
    })),
    sameAs: [siteConfig.facebookUrl, siteConfig.instagramUrl],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
