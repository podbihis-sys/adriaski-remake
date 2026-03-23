import { MetadataRoute } from "next";
import { events } from "@/lib/events";

const BASE_URL = "https://adriaski.net";
const locales = ["hr", "en", "de", "it"] as const;

const staticPages = [
  "",
  "hotel-adria-ski",
  "motel-tikvice",
  "skijalista",
  "skola-skijanja",
  "bazen",
  "fitness",
  "gastro-ponuda",
  "restoran-ognjista",
  "svadbeni-salon",
  "sportske-pripreme",
  "seminari",
  "brdski-biciklizam",
  "planinarenje",
  "ramsko-jezero",
  "jahanje",
  "enduro-turizam",
  "kamera-live",
  "cjenik",
  "kontakt",
  "dogadanja",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const page of staticPages) {
    const path = page ? `/${page}` : "";
    entries.push({
      url: `${BASE_URL}/hr${path}`,
      lastModified: new Date(),
      changeFrequency: page === "" ? "weekly" : "monthly",
      priority: page === "" ? 1.0 : 0.8,
      alternates: {
        languages: Object.fromEntries(
          locales.map((locale) => [locale, `${BASE_URL}/${locale}${path}`])
        ),
      },
    });
  }

  for (const event of events) {
    entries.push({
      url: `${BASE_URL}/hr/dogadanja/${event.slug}`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.6,
      alternates: {
        languages: Object.fromEntries(
          locales.map((locale) => [
            locale,
            `${BASE_URL}/${locale}/dogadanja/${event.slug}`,
          ])
        ),
      },
    });
  }

  return entries;
}
