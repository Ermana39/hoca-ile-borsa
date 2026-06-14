import { getHisse } from "@/lib/hisseler";

const siteUrl = "https://www.hocaileborsa.com";

/**
 * Grafik analiz sayfaları için Article yapısal verisi (JSON-LD).
 * Sayfaya yazar, yayıncı, tarih, görsel ve "konu = şirket" bağlamı kazandırır
 * → Google Search'te zengin sonuç ve daha iyi indeksleme.
 *
 * Künye verisi (data/hisseler/<kod>.json) varsa şirket adı/about otomatik
 * eklenir; yoksa kod bazlı makul varsayılanlar kullanılır.
 */
export default function GrafikAnalizJsonLd({
  kod,
  tarih,
  baslik,
  aciklama,
}: {
  kod: string;
  /** ISO tarih (yyyy-mm-dd). Verilmezse datePublished/dateModified yazılmaz. */
  tarih?: string;
  baslik?: string;
  aciklama?: string;
}) {
  const KOD = kod.toUpperCase();
  const kodLower = kod.toLowerCase();
  const hisse = getHisse(kod);
  const sirket = hisse?.sirketAdi;
  const url = `${siteUrl}/borsa/grafik-analiz/${kodLower}`;

  const headline = baslik ?? `${KOD} Teknik Analiz${sirket ? ` — ${sirket}` : ""}`;
  const description =
    aciklama ??
    `${KOD}${sirket ? ` (${sirket})` : ""} hissesi günlük teknik analiz: Bollinger Bantları, MACD, RSI, Stochastic indikatörleri ve hareketli ortalamalar ile destek/direnç ve senaryo değerlendirmesi.`;

  const jsonLd: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${url}#article`,
    headline,
    description,
    image: [`${siteUrl}/${kodLower}-analiz.webp`],
    inLanguage: "tr",
    isAccessibleForFree: true,
    url,
    mainEntityOfPage: { "@type": "WebPage", "@id": `${url}#webpage` },
    author: {
      "@type": "Person",
      name: "Erman Hoca",
      url: `${siteUrl}/yazar/erman-hoca`,
    },
    publisher: {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "Hoca İle Borsa",
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/banner.png`,
      },
    },
  };

  if (tarih) {
    jsonLd.datePublished = `${tarih}T09:00:00+03:00`;
    jsonLd.dateModified = `${tarih}T09:00:00+03:00`;
  }

  // Künye verisi varsa analizin "konusu" olarak şirkete bağla.
  if (hisse) {
    jsonLd.about = {
      "@type": "Corporation",
      name: sirket,
      tickerSymbol: hisse.borsaBilgileri?.bistKodu ?? KOD,
      url: `${siteUrl}/hisse/${kodLower}`,
    };
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
