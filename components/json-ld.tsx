import { business, hours } from "@/lib/content";

const dayMap: Record<string, string> = {
  Montag: "Monday",
  Dienstag: "Tuesday",
  Mittwoch: "Wednesday",
  Donnerstag: "Thursday",
  Freitag: "Friday",
  Samstag: "Saturday",
  Sonntag: "Sunday",
};

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "CafeOrCoffeeShop",
    name: business.name,
    description:
      "Französisches Café am Friedrichsplatz Mannheim, vis-à-vis vom Wasserturm. Quiche, Croissants, Kaffee am Tag, Crémant und Wein am Abend.",
    url: "https://cafe-flo.pages.dev",
    image: ["https://cafe-flo.pages.dev/og.jpg"],
    address: {
      "@type": "PostalAddress",
      streetAddress: business.address.street,
      postalCode: business.address.postal,
      addressLocality: business.address.city,
      addressCountry: business.address.country,
    },
    telephone: business.phone.tel,
    priceRange: business.priceRange,
    servesCuisine: ["French", "Café"],
    geo: {
      "@type": "GeoCoordinates",
      latitude: business.geo.lat,
      longitude: business.geo.lng,
    },
    openingHoursSpecification: hours.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: dayMap[h.day],
      opens: h.open,
      closes: h.close === "00:00" ? "23:59" : h.close,
    })),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: business.rating.score,
      reviewCount: business.rating.count,
      bestRating: 5,
      worstRating: 1,
    },
    sameAs: [business.instagram.url],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
