import type { MetadataRoute } from "next";

const siteUrl = "https://www.hocaileborsa.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/kontrol-paneli-4827",
          "/kontrol-paneli-4827/",
          "/yonetim/",
          "/giris",
          "/uye",
          "/profil",
          "/mesajlar",
          "/istatistik",
          "/guvenlik-kayitlari",
          // Fon tablolarındaki sıralama parametreleri sayfa içeriğini
          // değiştirmez (sadece sıra), canonical zaten param'sız sürüme
          // işaret eder. Google'ın faceted-navigation önerisi gereği bu
          // yinelenen sıralama URL'lerinin taranması engelleniyor.
          "/*sort=",
          "/*dir=",
        ],
      },
    ],
    sitemap: [
      `${siteUrl}/sitemap.xml`,
      `${siteUrl}/news-sitemap.xml`,
    ],
    host: siteUrl,
  };
}
