import Link from "next/link";

type IlgiliLink = { label: string; href: string };

const ANAHTAR_MAP: { keywords: string[]; links: IlgiliLink[] }[] = [
  {
    keywords: ["temettu", "temettü", "kar payi", "kâr payı", "kar payı"],
    links: [
      { label: "Temettü Takvimi", href: "/temettu" },
      { label: "Temettü Hesaplama", href: "/temettu/temettu-hesaplama-araci" },
      { label: "Temettü Verimi Hesaplama", href: "/temettu/temettu-verimi-hesaplama" },
    ],
  },
  {
    keywords: ["halka arz", "halka-arz", "ihalka arz"],
    links: [
      { label: "Halka Arz Sayfası", href: "/halka-arz" },
      { label: "Tüm Hesaplayıcılar", href: "/hesaplayici" },
    ],
  },
  {
    keywords: ["faiz", "merkez bankasi", "merkez bankası", "tcmb", "mevduat"],
    links: [
      { label: "Mevduat Faizi Oranları", href: "/mevduat-kredi-faizleri/mevduat-faizi-oranlari" },
      { label: "Bileşik Faiz / Birikim", href: "/hesaplayici/bilesik-faiz" },
      { label: "Tüm Hesaplayıcılar", href: "/hesaplayici" },
    ],
  },
  {
    keywords: ["kredi", "konut kred", "tuketici kred", "tüketici kred", "tasit kred", "taşıt kred"],
    links: [
      { label: "Konut Kredisi Oranları", href: "/mevduat-kredi-faizleri/konut-kredisi-oranlari" },
      { label: "Tüketici Faizi Oranları", href: "/mevduat-kredi-faizleri/tuketici-faizi-oranlari" },
      { label: "Taşıt Kredisi Oranları", href: "/mevduat-kredi-faizleri/tasit-kredisi-oranlari" },
    ],
  },
  {
    keywords: ["fon", "tefas"],
    links: [
      { label: "Fonlar", href: "/fonlar" },
      { label: "Tüm Hesaplayıcılar", href: "/hesaplayici" },
    ],
  },
  {
    keywords: ["kira", "kiraci", "kiracı"],
    links: [
      { label: "Kira Artış Hesapla", href: "/hesaplayici/kira-artis" },
      { label: "Enflasyon / Satın Alma Gücü", href: "/hesaplayici/enflasyon" },
    ],
  },
  {
    keywords: ["emeklilik", "bes", "bireysel emeklilik"],
    links: [
      { label: "BES Birikim Hesapla", href: "/hesaplayici/bes" },
      { label: "Bileşik Faiz / Birikim", href: "/hesaplayici/bilesik-faiz" },
    ],
  },
  {
    keywords: ["altin", "altın", "gram altin", "gram altın"],
    links: [
      { label: "Altın Hesaplama Aracı", href: "/hesaplayici/altin" },
      { label: "Döviz Bazlı Getiri", href: "/hesaplayici/doviz-getiri" },
    ],
  },
  {
    keywords: ["dolar", "euro", "doviz", "döviz", "kur"],
    links: [
      { label: "Döviz Bazlı Getiri", href: "/hesaplayici/doviz-getiri" },
      { label: "Enflasyon / Satın Alma Gücü", href: "/hesaplayici/enflasyon" },
    ],
  },
  {
    keywords: ["eurobond", "tahvil", "bono", "ozel sektor tahvil"],
    links: [
      { label: "Eurobond Getiri Hesaplayıcı", href: "/hesaplayici/eurobond" },
      { label: "Tahvil Getiri Hesaplayıcı", href: "/hesaplayici/tahvil" },
    ],
  },
  {
    keywords: ["sermaye artir", "sermaye artırı", "bedelli", "bedelsiz"],
    links: [
      { label: "Sermaye Artırımı Hesapla", href: "/borsa/sermaye-artirimi" },
      { label: "Ortalama Maliyet Hesapla", href: "/borsa/ortalama-maliyet" },
    ],
  },
  {
    keywords: ["kidem", "kıdem", "tazminat", "maas", "maaş"],
    links: [
      { label: "Kıdem Tazminatı Hesapla", href: "/hesaplayici/kidem-tazminati" },
      { label: "Yatırım Geliri Vergi Hesapla", href: "/hesaplayici/gelir-vergisi" },
    ],
  },
  {
    keywords: ["sigorta", "prim", "hasar", "poliçe"],
    links: [
      { label: "Borsa Analiz", href: "/borsa" },
      { label: "Kâr/Zarar Hesaplama", href: "/borsa/kar-zarar-hesaplama" },
      { label: "Tüm Hesaplayıcılar", href: "/hesaplayici" },
    ],
  },
  {
    keywords: ["ihracat", "ithalat", "gana", "afrika"],
    links: [
      { label: "Döviz Bazlı Getiri", href: "/hesaplayici/doviz-getiri" },
      { label: "Kâr/Zarar Hesaplama", href: "/borsa/kar-zarar-hesaplama" },
    ],
  },
  {
    keywords: ["enerji", "güneş", "solar", "lisans", "rüzgar"],
    links: [
      { label: "Borsa Analiz", href: "/borsa" },
      { label: "Kâr/Zarar Hesaplama", href: "/borsa/kar-zarar-hesaplama" },
    ],
  },
  {
    keywords: ["perakende", "mağaza", "e-ticaret", "satış adedi"],
    links: [
      { label: "Kâr/Zarar Hesaplama", href: "/borsa/kar-zarar-hesaplama" },
      { label: "Tüm Hesaplayıcılar", href: "/hesaplayici" },
    ],
  },
  {
    keywords: ["geri alım", "geri alim", "pay geri"],
    links: [
      { label: "Geri Alım Programları", href: "/borsa/geri-alim-programlari" },
      { label: "Ortalama Maliyet Hesapla", href: "/borsa/ortalama-maliyet" },
    ],
  },
];

const VARSAYILAN: IlgiliLink[] = [
  { label: "Tüm Hesaplayıcılar", href: "/hesaplayici" },
  { label: "Borsa Analiz", href: "/borsa" },
  { label: "Faiz Oranları", href: "/mevduat-kredi-faizleri" },
];

function normalize(s: string) {
  return s.toLowerCase().replace(/\s+/g, " ").trim();
}

function eslestir(metin: string): IlgiliLink[] {
  const t = normalize(metin);
  const bulunan = new Map<string, IlgiliLink>();
  for (const grup of ANAHTAR_MAP) {
    if (grup.keywords.some((k) => t.includes(k))) {
      for (const link of grup.links) {
        if (!bulunan.has(link.href)) bulunan.set(link.href, link);
      }
    }
    if (bulunan.size >= 4) break;
  }
  if (bulunan.size === 0) return VARSAYILAN;
  return Array.from(bulunan.values()).slice(0, 4);
}

export default function HaberIlgiliBolumler({
  slug,
  baslik = "",
}: {
  slug: string;
  baslik?: string;
}) {
  const linkler = eslestir(`${slug} ${baslik}`);
  return (
    <section className="rounded-xl border border-slate-200 bg-slate-50 p-4 md:p-5">
      <div className="mb-3 text-sm font-semibold text-slate-700">İlgili Bölümler</div>
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
        {linkler.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            prefetch={false}
            className="inline-flex items-center justify-between gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-blue-700 transition hover:border-blue-200 hover:bg-blue-50"
          >
            <span>{l.label}</span>
            <span aria-hidden>→</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
