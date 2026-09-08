export const metadata = {
  title: "Hoca İle Borsa | Borsa, Halka Arz ve Finans İçerikleri",
  description: "Borsa analiz, halka arz, temettü takvimi, yatırım fonları ve finans içeriklerini tek yerde takip edin.",
  alternates: { canonical: "https://www.hocaileborsa.com" },
};
import Image from "next/image";
import Link from "@/components/NoPrefetchLink";
import pageUpdates from "@/lib/page-updates.generated.json";
import { IconTile } from "@/components/icons/IconTile";
import type { CategoryIconName } from "@/components/icons/CategoryIcon";
import HaberKart from "@/components/HaberKart";
import PopulerAramalar from "@/components/PopulerAramalar";
import { FundLogo } from "@/components/MarketLogo";
import fonAcilisData from "@/app/fonlar/etki-analizi/_data/fon-acilis-tahminleri.json";
import tlyFundData from "@/data/fonlar/fund-details/tly.json";
import thfFundData from "@/data/fonlar/fund-details/thf.json";
import tmvFundData from "@/data/fonlar/fund-details/tmv.json";
import dohFundData from "@/data/fonlar/fund-details/doh.json";
import khaFundData from "@/data/fonlar/fund-details/kha.json";
import dfiFundData from "@/data/fonlar/fund-details/dfi.json";
import {
  getAllNews,
  ANA_SAYFA_HABER_LIMIT,
} from "@/lib/haberler";

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://www.hocaileborsa.com/#website",
  url: "https://www.hocaileborsa.com/",
  name: "Hoca İle Borsa",
  alternateName: "hocaileborsa",
  publisher: {
    "@id": "https://www.hocaileborsa.com/#organization",
  },
  inLanguage: "tr-TR",
};

export const revalidate = false;

type GuncellemeItem = {
  title: string;
  href: string;
  time: string;
};

type PageUpdateItem = {
  route: string;
  updatedAt: string;
  file?: string;
  trackedFiles?: string[];
};

type PageUpdatesData = {
  generatedAt?: string;
  pages?: PageUpdateItem[];
};

const SON_GUNCELLEME_LIMIT = 12;
const SON_GUNCELLEME_HARIC_ROUTES = new Set(["/viop-egitim"]);

const kategoriKutulari = [
  {
    title: "Borsa Analiz",
    href: "/borsa",
    icon: "borsa-analiz" as CategoryIconName,
  },
  {
    title: "Hisseler",
    href: "/hisseler",
    icon: "hisseler" as CategoryIconName,
  },
  {
    title: "Halka Arz",
    href: "/halka-arz",
    icon: "halka-arz" as CategoryIconName,
  },
  {
    title: "Fonlar",
    href: "/fonlar",
    icon: "fonlar" as CategoryIconName,
  },
  {
    title: "Temettü",
    href: "/temettu",
    icon: "temettu" as CategoryIconName,
  },
  {
    title: "Faiz Oranları",
    href: "/mevduat-kredi-faizleri",
    icon: "faiz-oranlari" as CategoryIconName,
  },
];

const sayfaBasliklari: Record<string, string> = {
  "/": "Ana Sayfa",
  "/borsa": "Borsa Analiz",
  "/fonlar": "Fonlar",
  "/halka-arz": "Halka Arz",
  "/temettu": "Temettü",
  "/mevduat-kredi-faizleri": "Mevduat ve Kredi Faizleri",
  "/faiz-oranlari": "Faiz Oranları",

  "/borsa/dip-zirve-analizi": "Dip Zirve Analizi",
  "/borsa/egitim-videolari": "Eğitim Videoları",
  "/borsa/formasyonlar": "Formasyonlar",
  "/borsa/formasyonlar/quagr-ikili-dip-formasyonu": "QUAGR İkili Dip Formasyonu",
  "/borsa/formasyonlar/huner-dusen-genisleyen-takoz-formasyonu":
    "HUNER Düşen Genişleyen Takoz Formasyonu",
  "/borsa/geri-alim-programlari": "Geri Alım Programları",
  "/borsa/gosterge-taramalari": "Gösterge Taramaları",
  "/borsa/gosterge-taramalari/dusus-trendinde-olanlar":
    "Düşüş Trendinde Olan Hisseler",
  "/borsa/gosterge-taramalari/guclu-trend-momentum":
    "Güçlü Trend ve Momentum Taraması",
  "/borsa/gosterge-taramalari/macd-al": "MACD Al Veren Hisseler",
  "/borsa/gosterge-taramalari/macd-sat": "MACD Sat Veren Hisseler",
  "/borsa/gosterge-taramalari/rsi30-alti": "RSI 30 Altı Hisseler",
  "/borsa/gosterge-taramalari/rsi70-ustu": "RSI 70 Üstü Hisseler",
  "/borsa/gosterge-taramalari/yukselis-trendinde-olanlar":
    "Yükseliş Trendinde Olan Hisseler",
  "/borsa/gunluk-borsa-ozeti": "Günlük Borsa Özeti",
  "/borsa/hacim-artisi-analizi": "Hacim Artışı Analizi",
  "/borsa/hacim-artisi-analizi/aylik-hacim-artisi-olanlar":
    "Aylık Hacim Artışı Olan Hisseler",
  "/borsa/hacim-artisi-analizi/haftalik-hacim-artisi-olanlar":
    "Haftalık Hacim Artışı Olan Hisseler",
  "/borsa/hacim-artisi-analizi/yillik-hacim-artisi-olanlar":
    "Yıllık Hacim Artışı Olan Hisseler",
  "/borsa/oran-analizi": "Oran Analizi",
  "/borsa/pivot-analizi": "Pivot Analizi",
  "/borsa/tedbirli-hisseler": "Tedbirli Hisseler",
  "/borsa/yeni-is-anlasmalari": "Yeni İş Anlaşmaları",

  "/fonlar/getiri": "Fon Getiri Analizi",
  "/fonlar/haftalik-yatirim-fonlarinin-en-cok-tercih-ettigi-hisseler":
    "Fonların En Çok Tercih Ettiği Hisseler",
  "/fonlar/tarihsel-veriler": "Fon Tarihsel Veriler",

  "/halka-arz/kazanc-hesapla": "Halka Arz Kazanç Hesaplama",
  "/halka-arz/takvim": "Güncel Halka Arz Takvimi",
  "/halka-arz/onayli-izahnameler": "Onaylı İzahnameler",
  "/halka-arz/onayli-izahnameler/onayli-1": "Onaylı İzahname Detayı",
  "/halka-arz/talep-hesapla": "Halka Arz Talep Hesaplama",
  "/halka-arz/taslak-izahnameler": "Taslak İzahnameler",

  "/temettu/temettu-egitimi": "Temettü Eğitimi",
  "/temettu/mayis-ayi-temettu-verenler": "Mayıs Ayı Temettü Verenler",
  "/temettu/haziran-ayi-temettu-verenler": "Haziran Ayı Temettü Verenler",
  "/temettu/eylul-ayi-temettu-verenler": "Eylül Ayı Temettü Verenler",

  "/mevduat-kredi-faizleri/mevduat-faizi-oranlari":
    "Mevduat Faizi Oranları",
  "/mevduat-kredi-faizleri/tuketici-faizi-oranlari":
    "Tüketici Faizi Oranları",
  "/mevduat-kredi-faizleri/konut-kredisi-oranlari":
    "Konut Kredisi Oranları",
  "/mevduat-kredi-faizleri/tasit-kredisi-oranlari":
    "Taşıt Kredisi Oranları",

  "/hakkimizda": "Hakkımızda",
  "/gizlilik-politikasi": "Gizlilik Politikası",
  "/cerez-politikasi": "Çerez Politikası",
  "/kullanim-sartlari": "Kullanım Şartları",
  "/yasal-uyari": "Yasal Uyarı",
  "/iletisim": "İletişim",
  "/reklam": "Reklam",
};

function KategoriKutusu({
  title,
  href,
  icon,
}: {
  title: string;
  href: string;
  icon: CategoryIconName;
}) {
  return (
    <Link
      href={href}
      prefetch={false}
      className="group flex h-[180px] flex-col items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-white shadow-[0_4px_20px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_12px_40px_rgba(15,23,42,0.12)] xl:h-[200px]"
      aria-label={title}
    >
      <IconTile
        name={icon}
        className="h-16 w-16 transition duration-300 group-hover:bg-blue-100 md:h-20 md:w-20"
      />

      <div className="flex flex-col items-center">
        <h2 className="text-base font-bold leading-tight tracking-tight text-slate-900 md:text-lg">
          {title}
        </h2>
        <div className="mt-1 flex items-center gap-1.5 text-xs font-semibold text-blue-600 transition duration-300 group-hover:gap-2.5">
          <span>İncele</span>
          <span>→</span>
        </div>
      </div>
    </Link>
  );
}


function YoutubeTanitimBanner() {
  return (
    <section className="px-4 pb-6 md:px-6">
      <a
        href="https://www.youtube.com/@hocaileborsa"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Hoca İle Borsa YouTube kanalını aç"
        className="group block overflow-hidden rounded-2xl shadow-[0_10px_35px_rgba(15,23,42,0.12)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_45px_rgba(15,23,42,0.18)] focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
      >
        <Image
          src="/youtube-tanitim.webp"
          alt="Hoca İle Borsa YouTube kanalında borsa eğitimleri, halka arz analizleri ve fon değerlendirmeleri"
          width={2172}
          height={724}
          unoptimized
          className="block h-auto w-full rounded-2xl"
          priority={false}
        />
      </a>
    </section>
  );
}

function normalizePath(route: string) {
  if (!route || route === "/") return "/";
  return route.endsWith("/") ? route.slice(0, -1) : route;
}

function slugBaslikYap(slug: string) {
  return slug
    .replace(/-/g, " ")
    .replace(/\b\w/g, (harf) => harf.toLocaleUpperCase("tr-TR"));
}

function haberBasligiBul(route: string) {
  const haber = getAllNews().find(
    (item) => normalizePath(item.href) === route
  );

  return haber?.title || "";
}

function routeBasligiBul(route: string) {
  const temizRoute = normalizePath(route);

  if (sayfaBasliklari[temizRoute]) {
    return sayfaBasliklari[temizRoute];
  }

  const haberBasligi = haberBasligiBul(temizRoute);

  if (haberBasligi) {
    return haberBasligi;
  }

  if (temizRoute.startsWith("/halka-arz/taslak-izahnameler/")) {
    return "Taslak İzahnameler";
  }

  if (temizRoute.startsWith("/haber/")) {
    const slug = temizRoute.split("/").filter(Boolean).at(-1) || "";
    return slugBaslikYap(slug);
  }

  const sonParca = temizRoute.split("/").filter(Boolean).at(-1) || "Ana Sayfa";
  return slugBaslikYap(sonParca);
}

function getGuncellemeAnaRoute(route: string) {
  const temizRoute = normalizePath(route);

  const anaRouteEslesmeleri: { prefix: string; target: string }[] = [
    {
      prefix: "/borsa/formasyonlar/",
      target: "/borsa/formasyonlar",
    },
    {
      prefix: "/borsa/gosterge-taramalari/",
      target: "/borsa/gosterge-taramalari",
    },
    {
      prefix: "/borsa/hacim-artisi-analizi/",
      target: "/borsa/hacim-artisi-analizi",
    },
    {
      prefix: "/fonlar/getiri/",
      target: "/fonlar/getiri",
    },
    {
      prefix: "/fonlar/tarihsel-veriler/",
      target: "/fonlar/tarihsel-veriler",
    },
    {
      prefix: "/halka-arz/onayli-izahnameler/",
      target: "/halka-arz/onayli-izahnameler",
    },
    {
      prefix: "/halka-arz/taslak-izahnameler/",
      target: "/halka-arz/taslak-izahnameler",
    },
    {
      prefix: "/temettu/temettu-egitimi/",
      target: "/temettu/temettu-egitimi",
    },
  ];

  const eslesen = anaRouteEslesmeleri.find((item) =>
    temizRoute.startsWith(item.prefix)
  );

  return eslesen ? eslesen.target : temizRoute;
}

function formatUpdateDate(value: string) {
  const date = new Date(value);

  if (Number.isNaN(date.getTime())) return "";

  return new Intl.DateTimeFormat("tr-TR", {
    timeZone: "Europe/Istanbul",
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);
}

function getSonGuncellemeler(): GuncellemeItem[] {
  const data = pageUpdates as PageUpdatesData;
  const pages = Array.isArray(data.pages) ? data.pages : [];
  const grouped = new Map<string, GuncellemeItem & { rawTime: number }>();

  pages.forEach((item) => {
    const route = normalizePath(item.route);

    if (!route || route.includes("[") || !item.updatedAt) {
      return;
    }

    if (route.startsWith("/haber/")) {
      return;
    }

    const anaRoute = getGuncellemeAnaRoute(route);

    if (SON_GUNCELLEME_HARIC_ROUTES.has(anaRoute)) {
      return;
    }

    const rawTime = new Date(item.updatedAt).getTime();

    if (Number.isNaN(rawTime)) {
      return;
    }

    const mevcut = grouped.get(anaRoute);

    if (!mevcut || rawTime > mevcut.rawTime) {
      grouped.set(anaRoute, {
        title: routeBasligiBul(anaRoute),
        href: anaRoute,
        time: formatUpdateDate(item.updatedAt),
        rawTime,
      });
    }
  });

  return Array.from(grouped.values())
    .sort((a, b) => b.rawTime - a.rawTime)
    .slice(0, SON_GUNCELLEME_LIMIT)
    .map(({ title, href, time }) => ({
      title,
      href,
      time,
    }));
}

function SonGuncellemelerBar({ items }: { items: GuncellemeItem[] }) {
  if (items.length === 0) {
    return (
      <section className="px-4 pb-5 md:px-6">
        <div className="rounded-2xl border border-zinc-200 bg-white p-3 text-center text-sm text-zinc-500 shadow-sm">
          Güncelleme verisi bulunamadı.
        </div>
      </section>
    );
  }

  return (
    <section className="px-4 pb-5 md:px-6">
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_2px_12px_rgba(15,23,42,0.06)]">
        <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4 md:px-6">
          <div className="flex items-center gap-3">
            <div className="h-5 w-1 rounded-full bg-emerald-500" />
            <h2 className="text-base font-bold tracking-tight text-slate-900 md:text-lg">
              Son Güncellemeler
            </h2>
          </div>
          <span className="rounded bg-slate-100 px-2 py-1 text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
            {items.length} sayfa
          </span>
        </div>

        <div className="grid grid-cols-1 gap-2 p-4 sm:grid-cols-2 lg:grid-cols-4 md:p-5">
          {items.map((item, index) => (
            <Link
              key={`${item.href}-${item.time}-${index}`}
              href={item.href}
              prefetch={false}
              className="group flex items-center justify-between gap-2 rounded-lg border border-slate-100 bg-slate-50 px-3 py-2.5 transition duration-200 hover:border-emerald-200 hover:bg-emerald-50 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
            >
              <div className="min-w-0">
                <h3 className="line-clamp-1 text-xs font-semibold text-slate-800 md:text-sm">
                  {item.title}
                </h3>
                <p className="mt-0.5 text-[10px] font-medium text-slate-400">
                  {item.time}
                </p>
              </div>
              <span className="shrink-0 text-slate-300 transition duration-200 group-hover:translate-x-0.5 group-hover:text-emerald-600">
                →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

type FonTahminItem = {
  tahmin: number | null;
  gerceklesen: number | null;
};

type FonTahminData = {
  tahminTarihi?: string;
  fonlar?: Record<string, FonTahminItem>;
};

const takipEdilenFonlar = [
  tlyFundData.fund,
  thfFundData.fund,
  tmvFundData.fund,
  dohFundData.fund,
  khaFundData.fund,
  dfiFundData.fund,
];

function formatYuzde(value: number | null | undefined) {
  if (typeof value !== "number" || Number.isNaN(value)) return "—";
  const sign = value > 0 ? "+" : "";
  return `${sign}%${value.toLocaleString("tr-TR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
}

function formatOndalikYuzde(value: number | null | undefined) {
  if (typeof value !== "number" || Number.isNaN(value)) return null;
  return formatYuzde(value * 100);
}

function formatFonFiyati(value: number | null | undefined) {
  if (typeof value !== "number" || Number.isNaN(value)) return null;
  return `${value.toLocaleString("tr-TR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 6,
  })} TL`;
}

function formatTahminTarihi(value: string | undefined) {
  if (!value) return "Güncel";
  const [year, month, day] = value.split("-").map(Number);
  if (!year || !month || !day) return "Güncel";

  return new Intl.DateTimeFormat("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(Date.UTC(year, month - 1, day)));
}

function yuzdeClass(value: number | null | undefined) {
  if (typeof value !== "number" || Number.isNaN(value)) return "text-slate-400";
  if (value > 0) return "text-emerald-600";
  if (value < 0) return "text-rose-600";
  return "text-slate-600";
}

function FonAcilisTahminleri() {
  const data = fonAcilisData as FonTahminData;
  const tahminTarihi = formatTahminTarihi(data.tahminTarihi);

  return (
    <div className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
      <div className="flex items-start justify-between gap-3 border-b border-slate-100 px-4 py-4 md:px-5">
        <div>
          <h2 className="text-base font-bold text-slate-900 md:text-lg">
            Popüler Fonların Açılış Tahminleri
          </h2>
          <p className="mt-1 text-[11px] text-slate-500 md:text-xs">
            Gün sonu hesaplamasına göre bir sonraki işlem günü tahmini.
          </p>
        </div>
        <Link
          href="/fonlar/etki-analizi"
          prefetch={false}
          className="shrink-0 text-xs font-semibold text-blue-600 hover:text-blue-800"
        >
          Tümünü Gör →
        </Link>
      </div>

      <div className="px-3 py-2 md:px-4">
        <table className="w-full table-fixed text-left text-sm">
          <thead>
            <tr className="border-b border-slate-200 text-[10px] font-semibold uppercase text-slate-500 md:text-[11px]">
              <th className="w-[32%] px-1 py-2 md:px-2">Fon</th>
              <th className="w-[36%] px-1 py-2 text-right md:px-2">
                <span className="block normal-case">{tahminTarihi}</span>
                Tahmin
              </th>
              <th className="w-[32%] px-1 py-2 text-right md:px-2">Gerçekleşen</th>
            </tr>
          </thead>
          <tbody>
            {takipEdilenFonlar.map((fund) => {
              const item = data.fonlar?.[fund.kod];

              return (
                <tr key={fund.kod} className="border-b border-slate-100 last:border-0">
                  <td className="px-1 py-2.5 md:px-2">
                    <Link
                      href={`/fonlar/${fund.slug}`}
                      prefetch={false}
                      className="inline-flex items-center gap-2 font-bold text-blue-600 hover:text-blue-800"
                    >
                      <FundLogo
                        fundCode={fund.kod}
                        managerSlug={fund.yoneticiSlug}
                        size="sm"
                      />
                      {fund.kod}
                    </Link>
                  </td>
                  <td className={`px-1 py-2.5 text-right font-bold md:px-2 ${yuzdeClass(item?.tahmin)}`}>
                    {formatYuzde(item?.tahmin)}
                  </td>
                  <td className={`px-1 py-2.5 text-right font-semibold md:px-2 ${yuzdeClass(item?.gerceklesen)}`}>
                    {formatYuzde(item?.gerceklesen)}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function FonlarKisaYollar() {
  return (
    <div className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
      <div className="flex items-start justify-between gap-3 border-b border-slate-100 px-4 py-4 md:px-5">
        <div>
          <h2 className="text-base font-bold text-slate-900 md:text-lg">Fonlar</h2>
          <p className="mt-1 text-[11px] text-slate-500 md:text-xs">
            Güncel fon fiyatları ve günlük değişimleri.
          </p>
        </div>
        <Link
          href="/fonlar"
          prefetch={false}
          className="shrink-0 text-xs font-semibold text-blue-600 hover:text-blue-800"
        >
          Tüm Fonlar →
        </Link>
      </div>

      <div className="divide-y divide-slate-100 px-3 py-2 md:px-4">
        {takipEdilenFonlar.map((fund) => {
          const fiyat = formatFonFiyati(fund.fiyat);
          const gunlukGetiri = formatOndalikYuzde(fund.gunlukGetiri);

          return (
            <Link
              key={fund.kod}
              href={`/fonlar/${fund.slug}`}
              prefetch={false}
              className="group flex min-h-14 items-center gap-3 px-1 py-2.5 transition hover:bg-slate-50 md:px-2"
            >
              <FundLogo
                fundCode={fund.kod}
                managerSlug={fund.yoneticiSlug}
                size="sm"
              />
              <div className="min-w-0 flex-1">
                <div className="font-bold text-slate-900 group-hover:text-blue-600">
                  {fund.kod}
                </div>
                <div className="truncate text-[11px] text-slate-500" title={fund.ad}>
                  {fund.ad}
                </div>
              </div>
              <div className="shrink-0 text-right">
                {fiyat ? <div className="text-xs font-semibold text-slate-800">{fiyat}</div> : null}
                {gunlukGetiri ? (
                  <div className={`mt-0.5 text-xs font-bold ${yuzdeClass(fund.gunlukGetiri)}`}>
                    {gunlukGetiri}
                  </div>
                ) : null}
              </div>
            </Link>
          );
        })}
      </div>
      <div className="border-t border-slate-100 px-4 py-2 text-right text-[10px] text-slate-400">
        Son fiyat tarihi: {formatTahminTarihi(takipEdilenFonlar[0]?.tarih)}
      </div>
    </div>
  );
}

export default function HomePage() {
  // Elle girilen haberler + günlük borsa özetleri (otomatik), tarihe göre sıralı.
  const newsItems = getAllNews();
  const gosterilenHaberler = newsItems.slice(0, ANA_SAYFA_HABER_LIMIT);
  const guncellemeler = getSonGuncellemeler();

  return (
    <main className="min-h-screen bg-[#f8fafc]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <h1 className="sr-only">
        Hoca İle Borsa - Borsa, Halka Arz, Fonlar ve Finans Analizleri
      </h1>

      <div className="mx-auto max-w-7xl">
        <section className="px-4 pt-5 pb-6 md:px-6 md:pt-6">
          <div className="overflow-hidden rounded-2xl">
            <Image
              src="/banner3.webp"
              alt="Hoca İle Borsa banner görseli"
              width={1228}
              height={414}
              priority
              unoptimized
              className="block h-auto w-full rounded-2xl"
            />
          </div>
        </section>

        <section className="px-4 pb-6 md:px-6">
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-6">
            {kategoriKutulari.map((item) => (
              <KategoriKutusu key={item.href} {...item} />
            ))}
          </div>
        </section>

        <section className="px-4 pb-6 md:px-6">
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_2px_12px_rgba(15,23,42,0.06)]">
            <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4 md:px-6">
              <div className="flex items-center gap-3">
                <div className="h-5 w-1 rounded-full bg-amber-500" />
                <h2 className="text-base font-bold text-slate-900 md:text-lg">
                  Son Haberler
                </h2>
              </div>
              <Link
                href="/haberler"
                prefetch={false}
                className="text-xs font-semibold text-blue-600 hover:text-blue-800 md:text-sm"
              >
                Tüm Haberler →
              </Link>
            </div>

            {gosterilenHaberler.length > 0 ? (
              <div className="grid grid-cols-1 gap-3 p-4 md:p-5 lg:grid-cols-2">
                {gosterilenHaberler.map((item, index) => (
                  <HaberKart
                    key={item.id || item.href}
                    item={item}
                    eager={index < 4}
                  />
                ))}
              </div>
            ) : (
              <div className="p-6 text-center text-sm text-slate-400">
                Haber bulunamadı.
              </div>
            )}
          </div>
        </section>

        <section className="grid grid-cols-1 gap-4 px-4 pb-6 md:px-6 lg:grid-cols-2">
          <FonAcilisTahminleri />
          <FonlarKisaYollar />
        </section>

        <YoutubeTanitimBanner />

        <SonGuncellemelerBar items={guncellemeler} />

        <section className="px-4 pb-6 md:px-6">
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_2px_12px_rgba(15,23,42,0.06)]">
            <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4 md:px-6">
              <div className="flex items-center gap-3">
                <div className="h-5 w-1 rounded-full bg-blue-600" />
                <h2 className="text-base font-bold tracking-tight text-slate-900 md:text-lg">
                  Sık Kullanılan Araçlar
                </h2>
              </div>
              <Link
                href="/hesaplayici"
                prefetch={false}
                className="text-xs font-semibold text-blue-600 hover:text-blue-800 md:text-sm"
              >
                Tüm Araçlar →
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-3 p-4 md:grid-cols-4 md:p-5">
              {[
                { label: "Halka Arz Takvimi", href: "/halka-arz/takvim" },
                { label: "Mevduat Faizi Hesapla", href: "/mevduat-kredi-faizleri/mevduat-faizi-oranlari" },
                { label: "Temettü Hesaplama", href: "/temettu/temettu-hesaplama-araci" },
                { label: "Hisse Kâr / Zarar", href: "/borsa/kar-zarar-hesaplama" },
              ].map((t) => (
                <Link
                  key={t.href}
                  href={t.href}
                  prefetch={false}
                  className="group flex flex-col rounded-xl border border-slate-200 bg-slate-50 p-3 transition hover:-translate-y-0.5 hover:border-blue-200 hover:bg-white hover:shadow-sm md:p-4"
                >
                  <div className="text-xs font-bold text-slate-900 md:text-sm">{t.label}</div>
                  <div className="mt-2 flex items-center gap-1 text-[11px] font-semibold text-blue-600 transition group-hover:gap-2 md:text-xs">
                    <span>Hesapla</span>
                    <span aria-hidden>→</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 pb-6 md:px-6">
          <div className="rounded-2xl border border-zinc-200 bg-white p-5 md:p-7">
            <h2 className="mb-4 text-xl font-bold text-zinc-900 md:text-2xl">
              Hoca İle Borsa Hakkında
            </h2>

            <div className="space-y-4 text-sm leading-7 text-zinc-700 md:text-base">
              <p>
                Hoca İle Borsa; borsa, halka arz, temettü, fonlar, faiz
                oranları ve finans içeriklerini daha düzenli ve anlaşılır
                şekilde sunmak amacıyla hazırlanmış bir finans içerik
                platformudur.
              </p>

              <p>
                Sitede yer alan içerikler; genel bilgilendirme, haber, eğitim,
                veri derleme, listeleme ve karşılaştırma amacı taşır.
                Yayınlanan içerikler yatırım danışmanlığı kapsamında değildir ve
                kişiye özel alım-satım önerisi niteliği taşımaz.
              </p>

              <p>
                Platform üzerinde yer alan tablo, oran, liste, takvim ve analiz
                içerikleri belirli kaynaklar ve düzenli veri güncellemeleri ile
                hazırlanır. Buna rağmen zaman zaman gecikme, eksiklik veya yazım
                hatası oluşabilir. Bu nedenle önemli kararlar öncesinde resmi
                kaynaklardan ayrıca kontrol yapılması önerilir.
              </p>

              <p>
                Hoca İle Borsa; finans içeriklerini sade, erişilebilir ve takip
                edilebilir bir yapıda sunmayı hedefler. Detaylı bilgi için{" "}
                <Link
                  href="/hakkimizda"
                  prefetch={false}
                  className="font-medium text-blue-600 underline underline-offset-4 hover:text-blue-700"
                >
                  Hakkımızda
                </Link>
                ,{" "}
                <Link
                  href="/yasal-uyari"
                  prefetch={false}
                  className="font-medium text-blue-600 underline underline-offset-4 hover:text-blue-700"
                >
                  Yasal Uyarı
                </Link>{" "}
                ve{" "}
                <Link
                  href="/iletisim"
                  prefetch={false}
                  className="font-medium text-blue-600 underline underline-offset-4 hover:text-blue-700"
                >
                  İletişim
                </Link>{" "}
                sayfaları incelenebilir.
              </p>
            </div>
          </div>
        </section>

        <section className="px-4 pb-6 md:px-6">
          <PopulerAramalar />
        </section>
      </div>

    </main>
  );
}
