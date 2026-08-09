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
      // Yapay zeka eğitim/tarama botları ile agresif scraper'lar siteyi tümüyle
      // tarayıp ciddi istek + ISR okuma maliyeti üretiyor; ziyaretçi veya reklam
      // getirisi yok. Tamamen engelleniyorlar. DİKKAT: Googlebot, Bingbot,
      // Applebot (arama), AdsBot-Google ve Mediapartners-Google (AdSense)
      // burada YOK — yani arama sıralaması ve reklamlar etkilenmez.
      {
        userAgent: [
          "GPTBot",
          "ChatGPT-User",
          "OAI-SearchBot",
          "CCBot",
          "ClaudeBot",
          "Claude-Web",
          "Claude-SearchBot",
          "anthropic-ai",
          "PerplexityBot",
          "Google-Extended",
          "Applebot-Extended",
          "Bytespider",
          "Amazonbot",
          "Amzn-SearchBot",
          "meta-externalagent",
          "FacebookBot",
          "cohere-ai",
          "Diffbot",
          "ImagesiftBot",
          "Omgilibot",
          "YouBot",
          "DataForSeoBot",
          "AhrefsBot",
          "SemrushBot",
          "MJ12bot",
          "DotBot",
          "SerpstatBot",
          "SERankingBacklinksBot",
          "Barkrowler",
          "SeekportBot",
          "MegaIndex",
          "ZoomInfoBot",
          "TurnitinBot",
        ],
        disallow: "/",
      },
    ],
    sitemap: [
      `${siteUrl}/sitemap.xml`,
      `${siteUrl}/news-sitemap.xml`,
    ],
    host: siteUrl,
  };
}
