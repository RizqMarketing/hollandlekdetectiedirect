import type { ServiceData } from "@/data/services";

export function generateServiceSchema(service: ServiceData) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.metaDescription,
    url: `https://hollandlekdetectiedirect.nl${service.path}`,
    provider: {
      "@type": "LocalBusiness",
      name: "Holland Lekdetectie Direct",
      telephone: "0800-1234567",
      email: "info@hollandlekdetectie.nl",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Molenstraat 25",
        addressLocality: "Herpen",
        addressCountry: "NL",
      },
      areaServed: {
        "@type": "Country",
        name: "Nederland",
      },
      priceRange: "$$",
    },
    serviceType: service.title,
  };
}

export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function generateBreadcrumbSchema(service: ServiceData) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://hollandlekdetectiedirect.nl/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Diensten",
        item: "https://hollandlekdetectiedirect.nl/#diensten",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: service.title,
        item: `https://hollandlekdetectiedirect.nl${service.path}`,
      },
    ],
  };
}
