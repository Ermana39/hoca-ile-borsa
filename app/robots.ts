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
          "/giris",
          "/uye",
          "/profil",
          "/mesajlar",
          "/istatistik",
          "/guvenlik-kayitlari",
        ],
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}