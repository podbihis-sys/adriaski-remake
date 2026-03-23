export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function hotelJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Hotel",
    name: "Hotel Adria Ski",
    description: "Premium ski & wellness resort u Kupresu, Bosna i Hercegovina.",
    url: "https://adriaski.net",
    telephone: "+38734275100",
    email: "recepcija@adriaski.net",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Čajuša bb",
      addressLocality: "Kupres",
      postalCode: "80320",
      addressCountry: "BA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 43.9614,
      longitude: 17.2847,
    },
    image: "https://adriaski.net/images/headerAdriaSki.jpg",
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "Ski Resort", value: true },
      { "@type": "LocationFeatureSpecification", name: "Indoor Pool", value: true },
      { "@type": "LocationFeatureSpecification", name: "Restaurant", value: true },
      { "@type": "LocationFeatureSpecification", name: "Fitness Center", value: true },
      { "@type": "LocationFeatureSpecification", name: "Wedding Hall", value: true },
      { "@type": "LocationFeatureSpecification", name: "Conference Room", value: true },
    ],
    checkinTime: "14:00",
    checkoutTime: "10:00",
    numberOfRooms: 128,
  };
}

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Hotel Adria Ski",
    url: "https://adriaski.net",
    telephone: "+38734275100",
    email: "recepcija@adriaski.net",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Čajuša bb",
      addressLocality: "Kupres",
      postalCode: "80320",
      addressCountry: "BA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 43.9614,
      longitude: 17.2847,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "00:00",
      closes: "23:59",
    },
    image: "https://adriaski.net/images/headerAdriaSki.jpg",
    priceRange: "$$",
  };
}

export function eventJsonLd(event: { title: string; date: string; image: string; summary: string; slug: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Event",
    name: event.title,
    description: event.summary,
    image: `https://adriaski.net${event.image}`,
    url: `https://adriaski.net/hr/dogadanja/${event.slug}`,
    location: {
      "@type": "Place",
      name: "Hotel Adria Ski",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Čajuša bb",
        addressLocality: "Kupres",
        postalCode: "80320",
        addressCountry: "BA",
      },
    },
    organizer: {
      "@type": "Organization",
      name: "Hotel Adria Ski",
      url: "https://adriaski.net",
    },
  };
}

export function breadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
