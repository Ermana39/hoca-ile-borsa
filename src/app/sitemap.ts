import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.hocaileborsa.com/test-sitemap-kontrol",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
  ];
}