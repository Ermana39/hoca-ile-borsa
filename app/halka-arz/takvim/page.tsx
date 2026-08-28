import type { Metadata } from "next";
import Link from "@/components/NoPrefetchLink";
import { halkaArzSonuclari } from "@/data/halka-arz-sonuclari";
import { getHisseIcerikHedefi } from "@/lib/hisse-icerik-hedefi";
import { bekleyenDeger, halkaArzGetir } from "@/lib/halka-arz";
import { seoAciklamasi } from "@/lib/seo-metadata";

const canonical = "https://www.hocaileborsa.com/halka-arz/takvim";
const title =
  "Halka Arz Takvimi 2026: İNTET 1 Eylül, BKRGY 2 Eylül'de İşleme Başlıyor";
const description =
  "2026 halka arz takviminde İNTET için 1 Eylül, BKRGY için 2 Eylül işlem başlangıcı ile işlemdeki halka arzları takip edin.";
const sonGuncellemeIso = "2026-08-28";
const sonGuncellemeMetni = "28 Ağustos 2026";

export const metadata: Metadata = {
  title: { absolute: title },
  description: seoAciklamasi(description),
  alternates: { canonical },
  robots: { index: true, follow: true },
  keywords: [
    "halka arz takvimi",
    "halka arz takvimi 2026",
    "bu hafta halka arz",
    "bu haftaki halka arzlar",
    "yeni halka arzlar",
    "halka arz talep toplama tarihleri",
    "halka arz işlem tarihleri",
    "BKRGY halka arz",
    "BKRGY talep toplama",
    "İNTET halka arz",
    "İNTET talep toplama",
    "İNTET işlem tarihi",
    "BKRGY işlem tarihi",
    "1 Eylül 2026 halka arz",
    "2 Eylül 2026 halka arz",
    "24 Ağustos 2026 halka arz",
    "26 Ağustos 2026 halka arz",
    "CITAS halka arz",
    "VEYAS halka arz",
    "KPEKS halka arz",
    "TKNKA halka arz",
    "20 Ağustos 2026 halka arz",
    "21 Ağustos 2026 halka arz",
    "işlemdeki halka arzlar",
  ],
  openGraph: {
    title,
    description,
    url: canonical,
    type: "website",
    siteName: "Hoca İle Borsa",
  },
  twitter: {
    card: "summary",
    title,
    description,
  },
};

type TakvimSirketi = {
  slug: string;
  tarih: string;
  durum: string;
};

type TakvimSatiri = {
  slug: string;
  izahnameHref: string;
  sirketAdi: string;
  bistKodu: string;
  tarih: string;
  fiyat: string;
  dagitim: string;
  pazar: string;
  durum: string;
};

type IzahnameBekleyenSirket = {
  sirketAdi: string;
  durum: string;
};

const dagitimSonucuBeklenenTakvimi: TakvimSirketi[] = [];

const talepToplamaTakvimi: TakvimSirketi[] = [];

const islemeBaslayacakTakvimi: TakvimSirketi[] = [
  {
    slug: "intetra-teknoloji-ve-bilisim-hizmetleri",
    tarih: "1 Eylül 2026 Salı",
    durum: "İşleme başlayacak",
  },
  {
    slug: "bakirci-gayrimenkul-yatirim-ortakligi",
    tarih: "2 Eylül 2026 Çarşamba",
    durum: "İşleme başlayacak",
  },
];

const islemdekiHalkaArzTakvimi: TakvimSirketi[] = [
  {
    slug: "citlekci-magazacilik",
    tarih: "18 Ağustos 2026 Salı",
    durum: "İşlemde",
  },
  {
    slug: "turker-vangolu-enerji-yatirim",
    tarih: "20 Ağustos 2026 Perşembe",
    durum: "İşlemde",
  },
  {
    slug: "kapeks-kimya",
    tarih: "21 Ağustos 2026 Cuma",
    durum: "İşlemde",
  },
  {
    slug: "teknika-plast-teknik-kalip-plastik-san-ve-tic",
    tarih: "20 Ağustos 2026 Perşembe",
    durum: "İşlemde",
  },
];

const izahnameYayiniBeklenenler: IzahnameBekleyenSirket[] = [];

const aktifIzahnameSluglari = [
  ...talepToplamaTakvimi.map((item) => item.slug),
  ...dagitimSonucuBeklenenTakvimi.map((item) => item.slug),
  ...islemeBaslayacakTakvimi.map((item) => item.slug),
  ...islemdekiHalkaArzTakvimi.map((item) => item.slug),
];

function takvimSatiri(item: TakvimSirketi): TakvimSatiri | null {
  const veri = halkaArzGetir(item.slug);
  if (!veri) return null;

  return {
    slug: item.slug,
    izahnameHref: `/halka-arz/onayli-izahnameler/${item.slug}`,
    sirketAdi: veri.sirketAdi,
    bistKodu: veri.bistKodu || veri.ozet.bistKodu || "—",
    tarih: item.tarih,
    fiyat: bekleyenDeger(veri.ozet.fiyatAralik)
      ? "—"
      : veri.ozet.fiyatAralik ?? "—",
    dagitim: bekleyenDeger(veri.ozet.dagitimYontemi)
      ? "—"
      : veri.ozet.dagitimYontemi ?? "—",
    pazar: bekleyenDeger(veri.ozet.pazar) ? "—" : veri.ozet.pazar ?? "—",
    durum: item.durum,
  };
}

function dagitimSonucuBeklenenArzlar(): TakvimSatiri[] {
  return dagitimSonucuBeklenenTakvimi
    .map(takvimSatiri)
    .filter((x): x is TakvimSatiri => x !== null);
}

function talepToplayacakArzlar(): TakvimSatiri[] {
  return talepToplamaTakvimi
    .map(takvimSatiri)
    .filter((x): x is TakvimSatiri => x !== null);
}

function islemeBaslayacakArzlar(): TakvimSatiri[] {
  return islemeBaslayacakTakvimi
    .map(takvimSatiri)
    .filter((x): x is TakvimSatiri => x !== null);
}

function islemdekiHalkaArzlar(): TakvimSatiri[] {
  return islemdekiHalkaArzTakvimi
    .map(takvimSatiri)
    .filter((x): x is TakvimSatiri => x !== null);
}

function aktifOnayliIzahnameler(): TakvimSatiri[] {
  return aktifIzahnameSluglari
    .map((slug) => takvimSatiri({ slug, tarih: "", durum: "" }))
    .filter((x): x is TakvimSatiri => x !== null);
}

export default function HalkaArzTakvimPage() {
  const talepToplayacaklar = talepToplayacakArzlar();
  const dagitimSonucuBeklenenler = dagitimSonucuBeklenenArzlar();
  const islemeBaslayacaklar = islemeBaslayacakArzlar();
  const islemdekiOlanlar = islemdekiHalkaArzlar();
  const aktifIzahnameler = aktifOnayliIzahnameler();
  const sonuclananArzlar = halkaArzSonuclari
    .map((item) => ({
      ...item,
      hedef: getHisseIcerikHedefi(item.hisse),
    }))
    .filter((item) => item.hedef?.tur === "onayli-izahname");
  const aktifTakvimOlaylari = [
    ...talepToplayacaklar,
    ...dagitimSonucuBeklenenler,
    ...islemeBaslayacaklar,
    ...islemdekiOlanlar,
  ];

  const faqItems = [
    {
      soru: "Talep toplayacak halka arzlar hangileri?",
      cevap:
        "28 Ağustos 2026 itibarıyla aktif takvimde talep toplama aşamasında halka arz bulunmuyor. İntetra Teknoloji İNTET 1 Eylül 2026 Salı, Bakırcı GYO BKRGY ise 2 Eylül 2026 Çarşamba günü işlem görmeye başlayacak.",
    },
    {
      soru: "Dağıtım sonuçları açıklanacak halka arzlar hangileri?",
      cevap:
        "Aktif takvimde dağıtım sonucu beklenen halka arz bulunmuyor. Güncel akışta İNTET ve BKRGY için işlem başlangıç tarihleri öne çıkıyor.",
    },
    {
      soru: "Bu hafta hangi halka arzlar işlemde veya işleme başlayacak?",
      cevap:
        "İntetra Teknoloji İNTET 1 Eylül 2026 Salı, Bakırcı GYO BKRGY 2 Eylül 2026 Çarşamba günü işlem görmeye başlayacak. Çitlekçi Mağazacılık Gıda CITAS, Teknika Plast TKNKA, Türker Vangölü Enerji VEYAS ve Kapeks Kimya KPEKS işlemde olan halka arzlar arasında yer alıyor.",
    },
    {
      soru: "Onaylı izahnamesi beklenen halka arzlar hangileri?",
      cevap:
        "Aktif takvimde onaylı izahnamesinin yayımlanması beklenen şirket bulunmuyor. Yeni şirketler açıklandığında bu bölüm güncellenecek.",
    },
    {
      soru: "Eski halka arzlar nereden takip edilir?",
      cevap:
        "Onaylı izahname sayfası bulunan 2026 halka arzlarının işlem tarihi, arz fiyatı, dağıtım şekli ve katılımcı sayısı bu sayfada yer alır. Ayrıntılı performans ve kapanış bilgileri halka arz tavan serisi sayfasından takip edilebilir.",
    },
  ];

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: title,
      description,
      url: canonical,
      mainEntityOfPage: canonical,
      dateModified: sonGuncellemeIso,
      inLanguage: "tr-TR",
      isPartOf: {
        "@type": "WebSite",
        "@id": "https://www.hocaileborsa.com/#website",
        name: "Hoca İle Borsa",
        url: "https://www.hocaileborsa.com",
      },
      publisher: {
        "@type": "Organization",
        "@id": "https://www.hocaileborsa.com/#organization",
        name: "Hoca İle Borsa",
        url: "https://www.hocaileborsa.com",
        logo: {
          "@type": "ImageObject",
          url: "https://www.hocaileborsa.com/icon-512.png",
        },
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Ana Sayfa",
          item: "https://www.hocaileborsa.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Halka Arz",
          item: "https://www.hocaileborsa.com/halka-arz",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Halka Arz Takvimi",
          item: canonical,
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "Aktif halka arz takvimi",
      numberOfItems: aktifTakvimOlaylari.length,
      itemListElement: aktifTakvimOlaylari.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: `${item.sirketAdi}: ${item.durum}`,
        url: `${canonical.replace("/takvim", "")}/onayli-izahnameler/${item.slug}`,
        description: item.tarih || item.durum,
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqItems.map((item) => ({
        "@type": "Question",
        name: item.soru,
        acceptedAnswer: { "@type": "Answer", text: item.cevap },
      })),
    },
  ];

  return (
    <main className="min-h-screen bg-[#f8fafc] px-4 py-6 md:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="mx-auto max-w-6xl">
        <header className="mb-6">
          <div className="mb-3 flex flex-wrap items-center gap-2 text-xs font-semibold md:text-sm">
            <Link
              href="/halka-arz"
              prefetch={false}
              className="text-blue-700 hover:underline"
            >
              Halka Arz
            </Link>
            <span className="text-slate-300">/</span>
            <span className="text-slate-600">Takvim</span>
            <span className="ml-auto rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-emerald-800">
              Son güncelleme: {sonGuncellemeMetni}
            </span>
          </div>
          <h1 className="text-2xl font-bold leading-tight text-slate-900 md:text-4xl">
            {title}
          </h1>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600 md:text-base">
            28 Ağustos 2026 tarihli güncel halka arz takviminde İntetra
            Teknoloji İNTET 1 Eylül 2026 Salı, Bakırcı GYO BKRGY ise 2 Eylül
            2026 Çarşamba günü işlem görmeye başlayacak. Çitlekçi Mağazacılık
            Gıda CITAS, Teknika Plast TKNKA, Türker Vangölü Enerji VEYAS ve
            Kapeks Kimya KPEKS işlemdeki halka arzlar arasında yer alıyor.
          </p>

          <div className="mt-5 rounded-2xl border border-blue-200 bg-blue-50 p-4 md:p-5">
            <h2 className="text-base font-bold text-blue-950 md:text-lg">
              Takvimin kısa özeti
            </h2>
            <p className="mt-2 text-sm leading-7 text-blue-950/80 md:text-base">
              İNTET 1 Eylül 2026 Salı, BKRGY 2 Eylül 2026 Çarşamba günü
              işlem görmeye başlayacak. CITAS, TKNKA, VEYAS ve KPEKS işlemde;
              aktif talep toplama veya dağıtım sonucu bekleyen halka arz
              bulunmuyor.
            </p>
            <Link
              href="/halka-arz/onayli-izahnameler"
              prefetch={false}
              className="mt-3 inline-flex text-sm font-bold text-blue-800 underline decoration-blue-300 underline-offset-4 hover:decoration-blue-700"
            >
              Onaylı izahname sayfalarını incele →
            </Link>
            <nav
              aria-label="Halka arz takvimi bölüm bağlantıları"
              className="mt-4 flex flex-wrap gap-2"
            >
              {[
                ...(talepToplayacaklar.length > 0
                  ? [{ label: "Talep tarihleri", href: "#talep-toplama" }]
                  : []),
                ...(dagitimSonucuBeklenenler.length > 0
                  ? [
                      {
                        label: "Dağıtım sonuçları",
                        href: "#dagitim-sonuclari",
                      },
                    ]
                  : []),
                { label: "İşlem başlangıcı", href: "#islem-tarihleri" },
                { label: "İşlemde olanlar", href: "#islemde-olanlar" },
                {
                  label: "Sonuçlanan halka arzlar",
                  href: "#sonuclanan-halka-arzlar",
                },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-lg border border-blue-200 bg-white px-3 py-2 text-xs font-bold text-blue-800 transition hover:border-blue-400 hover:bg-blue-100 md:text-sm"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </header>

        <section className="mb-8 grid grid-cols-2 gap-3 md:grid-cols-4">
          {[
            {
              etiket: "Talep Toplama",
              deger: String(talepToplayacaklar.length),
            },
            {
              etiket: "Dağıtım Sonucu",
              deger: String(dagitimSonucuBeklenenler.length),
            },
            {
              etiket: "İşleme Başlayacak",
              deger: String(islemeBaslayacaklar.length),
            },
            {
              etiket: "İşlemde",
              deger: String(islemdekiOlanlar.length),
            },
          ].map((k) => (
            <div
              key={k.etiket}
              className="rounded-2xl border border-slate-200 bg-white p-4 text-center shadow-sm"
            >
              <p className="text-xl font-bold text-blue-700 md:text-2xl">
                {k.deger}
              </p>
              <p className="mt-1 text-xs font-semibold text-slate-500 md:text-sm">
                {k.etiket}
              </p>
            </div>
          ))}
        </section>

        {talepToplayacaklar.length > 0 && (
          <section
            id="talep-toplama"
            className="mb-8 scroll-mt-24 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
          >
          <div className="border-b border-slate-200 bg-emerald-50 px-5 py-4">
            <h2 className="text-lg font-bold text-emerald-900 md:text-xl">
              Talep Toplayacak Halka Arzlar
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-[900px] w-full border-collapse text-left text-xs md:text-sm">
              <thead>
                <tr className="bg-slate-100 text-slate-600">
                  <th className="px-4 py-3 font-semibold">Hisse</th>
                  <th className="px-4 py-3 font-semibold">Şirket</th>
                  <th className="px-4 py-3 font-semibold">Talep Tarihi</th>
                  <th className="px-4 py-3 font-semibold">Arz Fiyatı</th>
                  <th className="px-4 py-3 font-semibold">Dağıtım</th>
                  <th className="px-4 py-3 text-right font-semibold">
                    İzahname
                  </th>
                </tr>
              </thead>
              <tbody>
                {talepToplayacaklar.map((item, i) => (
                  <tr
                    key={item.slug}
                    className={i % 2 ? "bg-slate-50" : "bg-white"}
                  >
                    <td className="px-4 py-3">
                      <Link
                        href={item.izahnameHref}
                        prefetch={false}
                        aria-label={`${item.bistKodu} halka arz detayına git`}
                        className="inline-flex min-w-20 items-center justify-center gap-1 rounded-md border border-blue-200 bg-blue-50 px-3 py-2 font-bold text-blue-800 transition hover:border-blue-400 hover:bg-blue-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                      >
                        {item.bistKodu}
                        <span aria-hidden="true">→</span>
                      </Link>
                    </td>
                    <td className="px-4 py-3 font-semibold text-slate-900">
                      <Link
                        href={item.izahnameHref}
                        prefetch={false}
                        className="underline decoration-slate-300 underline-offset-4 transition hover:text-blue-700 hover:decoration-blue-500"
                      >
                        {item.sirketAdi}
                      </Link>
                    </td>
                    <td className="px-4 py-3 font-semibold text-emerald-800">
                      {item.tarih}
                    </td>
                    <td className="px-4 py-3 text-slate-700">{item.fiyat}</td>
                    <td className="px-4 py-3 text-slate-700">
                      {item.dagitim}
                    </td>
                    <td className="px-4 py-3 text-right">
                      <Link
                        href={item.izahnameHref}
                        prefetch={false}
                        className="inline-flex items-center gap-1 whitespace-nowrap rounded-md border border-slate-300 bg-white px-3 py-2 font-semibold text-slate-700 transition hover:border-blue-400 hover:text-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                      >
                        Onaylı izahname
                        <span aria-hidden="true">→</span>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          </section>
        )}

        {dagitimSonucuBeklenenler.length > 0 && (
          <section
            id="dagitim-sonuclari"
            className="mb-8 scroll-mt-24 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
          >
          <div className="border-b border-slate-200 bg-amber-50 px-5 py-4">
            <h2 className="text-lg font-bold text-amber-900 md:text-xl">
              Dağıtım Sonuçları Açıklanacak Halka Arzlar
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-[820px] w-full border-collapse text-left text-xs md:text-sm">
              <thead>
                <tr className="bg-slate-100 text-slate-600">
                  <th className="px-4 py-3 font-semibold">Hisse</th>
                  <th className="px-4 py-3 font-semibold">Şirket</th>
                  <th className="px-4 py-3 font-semibold">Arz Fiyatı</th>
                  <th className="px-4 py-3 font-semibold">Dağıtım</th>
                  <th className="px-4 py-3 font-semibold">Durum</th>
                  <th className="px-4 py-3 text-right font-semibold">
                    İzahname
                  </th>
                </tr>
              </thead>
              <tbody>
                {dagitimSonucuBeklenenler.map((item, i) => (
                  <tr
                    key={item.slug}
                    className={i % 2 ? "bg-slate-50" : "bg-white"}
                  >
                    <td className="px-4 py-3">
                      <Link
                        href={item.izahnameHref}
                        prefetch={false}
                        aria-label={`${item.bistKodu} halka arz detayına git`}
                        className="inline-flex min-w-20 items-center justify-center gap-1 rounded-md border border-blue-200 bg-blue-50 px-3 py-2 font-bold text-blue-800 transition hover:border-blue-400 hover:bg-blue-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                      >
                        {item.bistKodu}
                        <span aria-hidden="true">→</span>
                      </Link>
                    </td>
                    <td className="px-4 py-3 font-semibold text-slate-900">
                      <Link
                        href={item.izahnameHref}
                        prefetch={false}
                        className="underline decoration-slate-300 underline-offset-4 transition hover:text-blue-700 hover:decoration-blue-500"
                      >
                        {item.sirketAdi}
                      </Link>
                    </td>
                    <td className="px-4 py-3 text-slate-700">{item.fiyat}</td>
                    <td className="px-4 py-3 text-slate-700">
                      {item.dagitim}
                    </td>
                    <td className="px-4 py-3 font-semibold text-amber-800">
                      {item.durum}
                    </td>
                    <td className="px-4 py-3 text-right">
                      <Link
                        href={item.izahnameHref}
                        prefetch={false}
                        className="inline-flex items-center gap-1 whitespace-nowrap rounded-md border border-slate-300 bg-white px-3 py-2 font-semibold text-slate-700 transition hover:border-blue-400 hover:text-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                      >
                        Onaylı izahname
                        <span aria-hidden="true">→</span>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          </section>
        )}

        <section
          id="islem-tarihleri"
          className="mb-8 scroll-mt-24 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
        >
          <div className="border-b border-slate-200 bg-cyan-50 px-5 py-4">
            <h2 className="text-lg font-bold text-cyan-900 md:text-xl">
              İşleme Başlayacak Halka Arzlar
            </h2>
          </div>

          <div>
            <table className="w-full border-collapse text-left text-xs md:text-sm">
              <thead>
                <tr className="bg-slate-100 text-slate-600">
                  <th className="px-4 py-3 font-semibold">Hisse</th>
                  <th className="px-4 py-3 font-semibold">Şirket</th>
                  <th className="px-4 py-3 font-semibold">İlk İşlem Tarihi</th>
                </tr>
              </thead>
              <tbody>
                {islemeBaslayacaklar.map((item, i) => (
                  <tr
                    key={item.slug}
                    className={i % 2 ? "bg-slate-50" : "bg-white"}
                  >
                    <td className="px-4 py-3">
                      <Link
                        href={item.izahnameHref}
                        prefetch={false}
                        aria-label={`${item.bistKodu} halka arz detayına git`}
                        className="inline-flex min-w-20 items-center justify-center gap-1 rounded-md border border-blue-200 bg-blue-50 px-3 py-2 font-bold text-blue-800 transition hover:border-blue-400 hover:bg-blue-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                      >
                        {item.bistKodu}
                        <span aria-hidden="true">→</span>
                      </Link>
                    </td>
                    <td className="px-4 py-3 font-semibold text-slate-900">
                      <Link
                        href={item.izahnameHref}
                        prefetch={false}
                        className="underline decoration-slate-300 underline-offset-4 transition hover:text-blue-700 hover:decoration-blue-500"
                      >
                        {item.sirketAdi}
                      </Link>
                    </td>
                    <td className="px-4 py-3 font-semibold text-cyan-800">
                      {item.tarih}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {islemdekiOlanlar.length > 0 && (
          <section
            id="islemde-olanlar"
            className="mb-8 scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
          >
            <h2 className="text-lg font-bold text-slate-900 md:text-xl">
              İşlemde Olanlar
            </h2>
            <ul className="mt-4 divide-y divide-slate-200 text-sm">
              {islemdekiOlanlar.map((item) => (
                <li
                  key={item.slug}
                  className="grid gap-2 py-3 sm:grid-cols-[110px_1fr_auto] sm:items-center"
                >
                  <Link
                    href={item.izahnameHref}
                    prefetch={false}
                    className="font-bold text-blue-700 hover:underline"
                  >
                    {item.bistKodu}
                  </Link>
                  <span className="font-semibold text-slate-800">
                    {item.sirketAdi}
                  </span>
                  <span className="text-slate-500">{item.tarih}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {izahnameYayiniBeklenenler.length > 0 && (
          <section className="mb-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="border-b border-slate-200 bg-violet-50 px-5 py-4">
              <h2 className="text-lg font-bold text-violet-900 md:text-xl">
                Onaylı İzahnamesinin Yayımlanması Beklenen Halka Arzlar
              </h2>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-[620px] w-full border-collapse text-left text-xs md:text-sm">
                <thead>
                  <tr className="bg-slate-100 text-slate-600">
                    <th className="px-4 py-3 font-semibold">Şirket</th>
                    <th className="px-4 py-3 font-semibold">Durum</th>
                  </tr>
                </thead>
                <tbody>
                  {izahnameYayiniBeklenenler.map((item, i) => (
                    <tr
                      key={item.sirketAdi}
                      className={i % 2 ? "bg-slate-50" : "bg-white"}
                    >
                      <td className="px-4 py-3 font-semibold text-slate-900">
                        {item.sirketAdi}
                      </td>
                      <td className="px-4 py-3 font-semibold text-violet-800">
                        {item.durum}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

        <section
          id="sonuclanan-halka-arzlar"
          className="mb-8 scroll-mt-24 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
        >
          <div className="flex flex-wrap items-start justify-between gap-3 border-b border-slate-200 bg-slate-100 px-5 py-4">
            <div>
              <h2 className="text-lg font-bold text-slate-900 md:text-xl">
                2026&apos;da Sonuçlanan Halka Arzlar
              </h2>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                Onaylı izahname sayfası bulunan 2026 halka arzlarının temel
                sonuçları.
              </p>
            </div>
            <Link
              href="/halka-arz/tavan-serisi"
              prefetch={false}
              className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs font-bold text-blue-700 transition hover:border-blue-300 hover:bg-blue-50 md:text-sm"
            >
              Tüm performans tablosu →
            </Link>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-[820px] w-full border-collapse text-left text-xs md:text-sm">
              <thead>
                <tr className="bg-white text-slate-600">
                  <th className="px-4 py-3 font-semibold">Hisse</th>
                  <th className="px-4 py-3 font-semibold">İşlem Tarihi</th>
                  <th className="px-4 py-3 font-semibold">Arz Fiyatı</th>
                  <th className="px-4 py-3 font-semibold">Dağıtım</th>
                  <th className="px-4 py-3 font-semibold">Katılımcı</th>
                  <th className="px-4 py-3 text-right font-semibold">Detay</th>
                </tr>
              </thead>
              <tbody>
                {sonuclananArzlar.map((item, index) => (
                  <tr
                    key={item.hisse}
                    className={index % 2 ? "bg-slate-50" : "bg-white"}
                  >
                    <td className="px-4 py-3">
                      {item.hedef ? (
                        <Link
                          href={item.hedef.href}
                          prefetch={false}
                          aria-label={item.hedef.etiket}
                          className="inline-flex min-w-20 items-center justify-center rounded-md border border-blue-200 bg-blue-50 px-3 py-2 font-bold text-blue-800 transition hover:border-blue-400 hover:bg-blue-100"
                        >
                          {item.hisse}
                        </Link>
                      ) : (
                        <span className="font-bold text-slate-800">
                          {item.hisse}
                        </span>
                      )}
                    </td>
                    <td className="px-4 py-3 font-semibold text-slate-800">
                      {item.islemTarihi}
                    </td>
                    <td className="px-4 py-3 text-slate-700">
                      {item.arzFiyati.replace(".", ",")} TL
                    </td>
                    <td className="px-4 py-3 text-slate-700">
                      {item.dagitimSekli}
                    </td>
                    <td className="px-4 py-3 text-slate-700">
                      {item.katilimciSayisi}
                    </td>
                    <td className="px-4 py-3 text-right">
                      {item.hedef ? (
                        <Link
                          href={item.hedef.href}
                          prefetch={false}
                          className="font-bold text-blue-700 hover:underline"
                        >
                          {item.hedef.baslik} →
                        </Link>
                      ) : (
                        <span className="text-slate-400">—</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="flex flex-wrap items-start justify-between gap-2 border-b border-slate-200 bg-blue-50 px-5 py-4">
            <div>
              <h2 className="text-lg font-bold text-blue-900 md:text-xl">
                Aktif Takvimdeki SPK Onaylı İzahnameler
              </h2>
              <p className="mt-1 text-sm leading-6 text-blue-900/80">
                Bu bölüm işleme başlayacak veya işlemde olan halka arzların
                onaylı izahname sayfalarını gösterir.
              </p>
            </div>
            <Link
              href="/halka-arz/onayli-izahnameler"
              prefetch={false}
              className="text-xs font-semibold text-blue-700 hover:underline md:text-sm"
            >
              Tüm onaylı izahnameler →
            </Link>
          </div>

          <div className="grid gap-2 p-5 sm:grid-cols-2 lg:grid-cols-3">
            {aktifIzahnameler.map((item) => (
              <Link
                key={item.slug}
                href={item.izahnameHref}
                prefetch={false}
                className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-800 transition hover:border-blue-300 hover:text-blue-700"
              >
                <span className="block text-blue-700">{item.bistKodu}</span>
                <span className="mt-1 block">{item.sirketAdi}</span>
                <span className="mt-2 block text-xs text-slate-500">
                  Onaylı izahnameyi incele →
                </span>
              </Link>
            ))}
          </div>
        </section>

        <section className="mb-8 rounded-2xl border border-slate-200 bg-white p-5 md:p-7">
          <h2 className="mb-4 text-xl font-bold text-slate-900 md:text-2xl">
            Sık Sorulan Sorular
          </h2>

          <div className="space-y-5">
            {faqItems.map((item) => (
              <div key={item.soru}>
                <h3 className="text-base font-semibold text-slate-900 md:text-lg">
                  {item.soru}
                </h3>
                <p className="mt-1 text-sm leading-7 text-slate-600 md:text-base">
                  {item.cevap}
                </p>
              </div>
            ))}
          </div>
        </section>

        <p className="mb-6 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-xs leading-6 text-slate-500 md:text-sm">
          Bu sayfadaki bilgiler aktif halka arz takvimini pratik şekilde takip
          etmek için hazırlanmıştır; yatırım tavsiyesi değildir. Tarih, işlem
          başlangıcı ve halka arz koşulları şirketlerin KAP, Borsa İstanbul ve
          izahname duyurularıyla birlikte kontrol edilmelidir.
        </p>
      </div>
    </main>
  );
}
