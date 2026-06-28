import { getAllNews } from "@/lib/haberler";

const siteUrl = "https://www.hocaileborsa.com";
const publicationName = "Hoca İle Borsa";
const publicationLanguage = "tr";
const newsWindowDays = 2;

// Bu sitemap'in içeriği "son 2 günün haberleri" penceresine bağlı ve bu pencere
// bugünün tarihine göre hesaplanır. Bu yüzden -diğer sayfaların aksine- veri
// değişmese bile periyodik yenilenmesi gerekir; aksi halde pencere donar.
// 6 saatte bir yenileme, Google News tazeliği ile yazma maliyeti arasında denge.
export const revalidate = 21600;

function escapeXml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function getIstanbulDate() {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Europe/Istanbul",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(new Date());

  const values = Object.fromEntries(
    parts
      .filter((part) => part.type !== "literal")
      .map((part) => [part.type, part.value])
  );

  return `${values.year}-${values.month}-${values.day}`;
}

function getCutoffDate() {
  const today = new Date(`${getIstanbulDate()}T00:00:00Z`);
  today.setUTCDate(today.getUTCDate() - (newsWindowDays - 1));
  return today.toISOString().slice(0, 10);
}

export async function GET() {
  const cutoffDate = getCutoffDate();
  const recentNews = getAllNews()
    .filter(
      (item) =>
        item.publishedAt &&
        item.publishedAt >= cutoffDate &&
        item.href.startsWith("/")
    )
    .slice(0, 1000);

  const urls = recentNews
    .map(
      (item) => `  <url>
    <loc>${escapeXml(`${siteUrl}${item.href}`)}</loc>
    <news:news>
      <news:publication>
        <news:name>${escapeXml(publicationName)}</news:name>
        <news:language>${publicationLanguage}</news:language>
      </news:publication>
      <news:publication_date>${escapeXml(item.publishedAt ?? "")}</news:publication_date>
      <news:title>${escapeXml(item.title)}</news:title>
    </news:news>
  </url>`
    )
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">
${urls}
</urlset>
`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control":
        "public, max-age=0, s-maxage=3600, stale-while-revalidate=300",
    },
  });
}
