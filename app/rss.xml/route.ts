import { getAllNews } from "@/lib/haberler";
import { HABER_KATEGORILERI } from "@/lib/haber-kategorileri";

const siteUrl = "https://www.hocaileborsa.com";
const feedTitle = "Hoca İle Borsa";
const feedDescription =
  "Borsa İstanbul haberleri, halka arz gelişmeleri, KAP bildirimleri, temettü ve sermaye artırımı haberleri.";
const maxItems = 50;

// Haber akışı newsItems'a bağlı; yeni haber deploy ile gelir. Yine de
// günlük özetler tarihe göre akışa katıldığından saatlik yenileme yeterli.
export const revalidate = 3600;

function escapeXml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function kategoriBaslik(slug?: string) {
  if (!slug) return "";
  const k = HABER_KATEGORILERI.find((k) => k.slug === slug);
  return k ? k.kisaBaslik : slug;
}

// publishedAt saat içeriyorsa orijinal yayın saatini korur. Eski tarih-only
// kayıtlar için İstanbul 09:00 güvenli varsayılan olarak kullanılır.
function toPubDate(publishedAt: string) {
  const iso = /^\d{4}-\d{2}-\d{2}$/.test(publishedAt)
    ? `${publishedAt}T09:00:00+03:00`
    : publishedAt;

  return new Date(iso).toUTCString();
}

export async function GET() {
  const items = getAllNews()
    .filter((item) => item.publishedAt && item.href.startsWith("/"))
    .slice(0, maxItems);

  const lastBuildDate = items.length
    ? toPubDate(items[0].publishedAt)
    : new Date().toUTCString();

  const itemXml = items
    .map((item) => {
      const url = `${siteUrl}${item.href}`;
      const kategori = kategoriBaslik(item.category);
      const enclosure = item.image
        ? `\n      <enclosure url="${escapeXml(`${siteUrl}${item.image}`)}" type="image/webp" length="0" />`
        : "";
      return `    <item>
      <title>${escapeXml(item.title)}</title>
      <link>${escapeXml(url)}</link>
      <guid isPermaLink="true">${escapeXml(url)}</guid>
      <pubDate>${toPubDate(item.publishedAt)}</pubDate>${
        kategori ? `\n      <category>${escapeXml(kategori)}</category>` : ""
      }${enclosure}
    </item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(feedTitle)}</title>
    <link>${siteUrl}</link>
    <description>${escapeXml(feedDescription)}</description>
    <language>tr</language>
    <lastBuildDate>${lastBuildDate}</lastBuildDate>
    <atom:link href="${siteUrl}/rss.xml" rel="self" type="application/rss+xml" />
${itemXml}
  </channel>
</rss>
`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control":
        "public, max-age=0, s-maxage=3600, stale-while-revalidate=300",
    },
  });
}
