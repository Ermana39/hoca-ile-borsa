export const metadata = {
  title: "Hoca İle Borsa | Borsa, Halka Arz ve Finans İçerikleri",
  description: "Borsa analiz, halka arz, temettü takvimi, yatırım fonları ve finans içeriklerini tek yerde takip edin.",
  alternates: { canonical: "https://www.hocaileborsa.com" },
};
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { newsItems as tumHaberler } from "@/app/data/news";
import pageUpdates from "@/lib/page-updates.generated.json";

export const revalidate = 3600;

type NewsItem = {
  id: number;
  title: string;
  href: string;
  image?: string;
  alt?: string;
  publishedAt?: string;
};

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
    alt: "Borsa analiz sayfası görseli",
    image: "/kategori-borsa-analiz.png",
  },
  {
    title: "Halka Arz",
    href: "/halka-arz",
    alt: "Halka arz sayfası görseli",
    image: "/kategori-halka-arz.png",
  },
  {
    title: "Fonlar",
    href: "/fonlar",
    alt: "Fonlar sayfası görseli",
    image: "/kategori-fonlar.png",
  },
  {
    title: "Temettü",
    href: "/temettu",
    alt: "Temettü sayfası görseli",
    image: "/kategori-temettu.png",
  },
  {
    title: "Faiz Oranları",
    href: "/mevduat-kredi-faizleri",
    alt: "Faiz oranları sayfası görseli",
    image: "/Mevduat-kredi-faiz.png?v=2",
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

  "/borsa/dikkat-cekenler": "Dikkat Çekenler",
  "/borsa/dikkat-cekenler/haber-1": "BIST100 Haftalık Sentiment Analizi",
  "/borsa/dikkat-cekenler/haber-2": "Banka Hisselerinde Önemli Direnç Noktası",
  "/borsa/dikkat-cekenler/haber-3": "BIST100 Negatif Uyumsuzluk",
  "/borsa/dikkat-cekenler/haber-4": "Stopaj Sonrası Gerçek Getiri Analizi",
  "/borsa/dip-zirve-analizi": "Dip Zirve Analizi",
  "/borsa/egitim-videolari": "Eğitim Videoları",
  "/borsa/formasyonlar": "Formasyonlar",
  "/borsa/formasyonlar/formasyon1": "Formasyon Analizi",
  "/borsa/formasyonlar/formasyon2": "Formasyon Analizi",
  "/borsa/formasyonlar/formasyon3": "Formasyon Analizi",
  "/borsa/formasyonlar/formasyon4": "Formasyon Analizi",
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
  "/borsa/grafik-analiz": "Grafik Analiz",
  "/borsa/grafik-analiz/aefes": "AEFES Grafik Analiz",
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
  "/fonlar/getiri/borsa-yatirim-fonlari-getiri":
    "Borsa Yatırım Fonları Getiri Analizi",
  "/fonlar/getiri/emeklilik-fonlari-getiri":
    "Emeklilik Fonları Getiri Analizi",
  "/fonlar/getiri/menkul-kiymet-yatirim-fonlari":
    "Menkul Kıymet Yatırım Fonları Getiri Analizi",
  "/fonlar/haftalik-yatirim-fonlarinin-en-cok-tercih-ettigi-hisseler":
    "Fonların En Çok Tercih Ettiği Hisseler",
  "/fonlar/tarihsel-veriler": "Fon Tarihsel Veriler",
  "/fonlar/tarihsel-veriler/borsa-yatirim-fonlari-tarihsel":
    "Borsa Yatırım Fonları Tarihsel Veriler",
  "/fonlar/tarihsel-veriler/emeklilik-fonlari-tarihsel":
    "Emeklilik Fonları Tarihsel Veriler",
  "/fonlar/tarihsel-veriler/menkul-kiymet-yatirim-fonlari":
    "Menkul Kıymet Yatırım Fonları Tarihsel Veriler",

  "/halka-arz/kazanc-hesapla": "Halka Arz Kazanç Hesaplama",
  "/halka-arz/onayli-izahnameler": "Onaylı İzahnameler",
  "/halka-arz/onayli-izahnameler/onayli-1": "Onaylı İzahname Detayı",
  "/halka-arz/talep-hesapla": "Halka Arz Talep Hesaplama",
  "/halka-arz/taslak-izahnameler": "Taslak İzahnameler",

  "/temettu/temettu-egitimi": "Temettü Eğitimi",
  "/temettu/mayis-ayi-temettu-verenler": "Mayıs Ayı Temettü Verenler",
  "/temettu/haziran-ayi-temettu-verenler": "Haziran Ayı Temettü Verenler",
  "/temettu/temmuz-ayi-temettu-verenler": "Temmuz Ayı Temettü Verenler",
  "/temettu/agustos-ayi-temettu-verenler": "Ağustos Ayı Temettü Verenler",
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
  alt,
  image,
}: {
  title: string;
  href: string;
  alt: string;
  image: string;
}) {
  return (
    <Link
      href={href}
      prefetch={false}
      className="group relative flex h-[180px] overflow-hidden rounded-2xl shadow-[0_4px_20px_rgba(15,23,42,0.15)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(15,23,42,0.25)] xl:h-[200px]"
      aria-label={title}
    >
      {/* Arka plan görseli */}
      <Image
        src={image}
        alt={alt}
        fill
        unoptimized
        className="object-cover transition duration-500 group-hover:scale-[1.06]"
      />

      {/* Gradient overlay — alta doğru koyulaşıyor */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/40 to-slate-800/10 transition duration-300 group-hover:from-slate-950/95" />

      {/* İçerik */}
      <div className="relative flex h-full w-full flex-col justify-end p-4">
        <h2 className="text-base font-bold leading-tight tracking-tight text-white drop-shadow-md md:text-lg">
          {title}
        </h2>
        <div className="mt-2 flex items-center gap-1.5 text-xs font-semibold text-blue-300 transition duration-300 group-hover:gap-2.5 group-hover:text-blue-200">
          <span>İncele</span>
          <span>→</span>
        </div>
      </div>
    </Link>
  );
}


function ViopEgitimBanner() {
  return (
    <section className="px-4 pb-6 md:px-6">
      <Link
        href="/viop-egitim"
        prefetch={false}
        aria-label="VİOP eğitim serisi detay sayfasına git"
        className="group block overflow-hidden rounded-2xl shadow-[0_10px_35px_rgba(15,23,42,0.12)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_45px_rgba(15,23,42,0.18)] focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
      >
        <Image
          src="/viop-egitim-banner.png"
          alt="Yaşayan VİOP eğitim seti lansman bannerı"
          width={2112}
          height={512}
          unoptimized
          className="block h-auto w-full rounded-2xl"
          priority={false}
        />
      </Link>
    </section>
  );
}

function getIdFromHref(href: string) {
  const match = href.match(/(\d+)(?!.*\d)/);
  return match ? Number(match[1]) : 0;
}

function normalizeNewsItems(data: unknown): NewsItem[] {
  if (!Array.isArray(data)) return [];

  return data
    .map((item: Partial<NewsItem>) => {
      const href = item.href || "/";
      const id =
        typeof item.id === "number" && item.id > 0
          ? item.id
          : getIdFromHref(href);

      return {
        id,
        title: item.title || "",
        href,
        image:
          item.image && item.image.trim() !== ""
            ? item.image
            : id
              ? `/haber${id}.png`
              : "/placeholder.png",
        alt: item.alt || item.title || "",
        publishedAt: item.publishedAt || "",
      };
    })
    .filter(
      (item: NewsItem) =>
        item.id > 0 && item.title.trim() !== "" && item.href.trim() !== ""
    )
    .sort((a: NewsItem, b: NewsItem) => b.id - a.id);
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
  const haber = normalizeNewsItems(tumHaberler).find(
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
      prefix: "/borsa/dikkat-cekenler/",
      target: "/borsa/dikkat-cekenler",
    },
    {
      prefix: "/borsa/formasyonlar/",
      target: "/borsa/formasyonlar",
    },
    {
      prefix: "/borsa/gosterge-taramalari/",
      target: "/borsa/gosterge-taramalari",
    },
    {
      prefix: "/borsa/grafik-analiz/",
      target: "/borsa/grafik-analiz",
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

function getGuncellemeRenkleri() {
  return {
    card: "border-emerald-100 bg-gradient-to-br from-emerald-50 via-white to-teal-50 hover:border-emerald-300 hover:bg-emerald-50",
    accent: "bg-emerald-600",
    date: "bg-emerald-100 text-emerald-700 ring-emerald-200",
    arrow: "bg-emerald-600 text-white",
  };
}

function HaberSatiri({ item }: { item: NewsItem }) {
  const haberGorseli =
    item.image && item.image.trim() !== ""
      ? item.image
      : item.id
        ? `/haber${item.id}.png`
        : "/placeholder.png";

  return (
    <Link
      href={item.href}
      prefetch={false}
      aria-label={item.title}
      className="group flex overflow-hidden rounded-xl border border-slate-200 bg-white shadow-[0_1px_6px_rgba(15,23,42,0.05)] transition duration-300 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-[0_6px_24px_rgba(15,23,42,0.10)] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
    >
      <div className="relative h-auto w-32 shrink-0 overflow-hidden bg-slate-100 sm:w-40">
        <img
          src={haberGorseli}
          alt={item.alt || item.title}
          loading="lazy"
          decoding="async"
          fetchPriority="low"
          width={160}
          height={120}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
        />
      </div>

      <div className="flex min-w-0 flex-1 flex-col justify-between p-4">
        <div>
          <div className="mb-2 flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center rounded bg-blue-600 px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-white">
              Haber
            </span>
            {item.publishedAt && (
              <time
                dateTime={item.publishedAt}
                className="text-[11px] font-medium text-slate-400"
              >
                {new Date(item.publishedAt).toLocaleDateString("tr-TR", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </time>
            )}
          </div>

          <h2 className="line-clamp-2 text-sm font-semibold leading-snug text-slate-900 transition duration-200 group-hover:text-blue-700 sm:text-base sm:leading-snug">
            {item.title}
          </h2>
        </div>

        <div className="mt-3 flex items-center gap-1 text-xs font-semibold text-blue-600 transition duration-300 group-hover:gap-2">
          <span>Devamını oku</span>
          <span>→</span>
        </div>
      </div>
    </Link>
  );
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

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
      <path d="M18.244 2H21l-6.46 7.383L22.136 22H16.19l-4.657-6.104L6.19 22H3.43l6.908-7.894L2 2h6.097l4.21 5.564L18.244 2Zm-1.043 18h1.527L7.268 3.895H5.63L17.2 20Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
      <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.75A4 4 0 0 0 3.75 7.75v8.5a4 4 0 0 0 4 4h8.5a4 4 0 0 0 4-4v-8.5a4 4 0 0 0-4-4h-8.5Zm8.875 1.5a1.125 1.125 0 1 1 0 2.25 1.125 1.125 0 0 1 0-2.25ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.75A3.25 3.25 0 1 0 12 15.25 3.25 3.25 0 0 0 12 8.75Z" />
    </svg>
  );
}

function TelegramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
      <path d="M21.944 4.507a1.5 1.5 0 0 0-1.746-.184L3.68 12.35a1.5 1.5 0 0 0 .176 2.764l3.63 1.34 1.34 3.63a1.5 1.5 0 0 0 2.764.176l8.026-16.52a1.5 1.5 0 0 0-.672-2.033ZM9.24 15.94l-.924 2.505-.924-2.505 7.622-6.28L9.24 15.94Z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4 stroke-current"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4 6h16v12H4z"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="m4 8 8 6 8-6"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4 stroke-current"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M12 21s6-4.35 6-10a6 6 0 1 0-12 0c0 5.65 6 10 6 10Z"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="11" r="2.5" strokeWidth="1.8" />
    </svg>
  );
}

function SosyalIkon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-700 bg-slate-800 text-slate-200 transition hover:bg-slate-700"
    >
      {children}
    </a>
  );
}

function FooterLinkColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="mb-4 text-base font-semibold text-white">{title}</h3>
      <ul className="space-y-3">
        {links.map((item) => (
          <li key={item.label}>
            <Link
              href={item.href}
              prefetch={false}
              className="text-sm text-slate-300 transition hover:text-white"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function HomePage() {
  const newsItems = normalizeNewsItems(tumHaberler);
  const guncellemeler = getSonGuncellemeler();

  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-7xl">
        <section className="px-4 pt-5 md:px-6 md:pt-6">
          <div className="overflow-hidden rounded-2xl">
            <img
              src="/banner.png"
              alt="Hoca İle Borsa banner görseli"
              className="block h-auto w-full rounded-2xl"
            />
          </div>
        </section>


        <section className="px-4 py-6 md:px-6">
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-5">
            {kategoriKutulari.map((item) => (
              <KategoriKutusu key={item.href} {...item} />
            ))}
          </div>
        </section>

        <ViopEgitimBanner />

        <section className="px-4 pb-6 md:px-6">
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_2px_12px_rgba(15,23,42,0.06)]">
            <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4 md:px-6">
              <div className="flex items-center gap-3">
                <div className="h-5 w-1 rounded-full bg-blue-600" />
                <h2 className="text-base font-bold tracking-tight text-slate-900 md:text-lg">
                  Güncel Haberler
                </h2>
              </div>
              <span className="rounded bg-slate-100 px-2 py-1 text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                Piyasa Gündemi
              </span>
            </div>

            {newsItems.length > 0 ? (
              <div className="grid grid-cols-1 gap-3 p-4 lg:grid-cols-2 md:p-5">
                {newsItems.map((item) => (
                  <HaberSatiri key={item.id || item.href} item={item} />
                ))}
              </div>
            ) : (
              <div className="p-6 text-center text-sm text-slate-400">
                Haber bulunamadı.
              </div>
            )}
          </div>
        </section>

        <SonGuncellemelerBar items={guncellemeler} />

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
      </div>

      <footer className="mt-8 bg-slate-950 text-slate-200">
        <div className="mx-auto max-w-7xl px-4 py-12 md:px-6">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-4">
            <div>
              <h3 className="mb-4 text-xl font-semibold leading-snug text-white">
                Hoca İle Borsa – Borsa, Halka Arz ve Finans İçerikleri
              </h3>
              <p className="mb-6 max-w-sm text-sm leading-7 text-slate-400">
                Borsa, halka arz, temettü, fonlar ve finans içeriklerini tek
                yerde takip edebileceğiniz güncel bilgi platformu.
              </p>

              <div className="flex gap-3">
                <SosyalIkon href="https://x.com/HocaileBorsa" label="X">
                  <XIcon />
                </SosyalIkon>
                <SosyalIkon
                  href="https://www.instagram.com/hocaileborsa/"
                  label="Instagram"
                >
                  <InstagramIcon />
                </SosyalIkon>
                <SosyalIkon
                  href="https://t.me/borsa_halkaarz_endeks"
                  label="Telegram"
                >
                  <TelegramIcon />
                </SosyalIkon>
              </div>
            </div>

            <FooterLinkColumn
              title="Kategoriler"
              links={[
                { label: "Ana Sayfa", href: "/" },
                { label: "Halka Arz", href: "/halka-arz" },
                { label: "Fonlar", href: "/fonlar" },
                { label: "Temettü", href: "/temettu" },
                { label: "Borsa Analiz", href: "/borsa" },
                { label: "Faiz Oranları", href: "/mevduat-kredi-faizleri" },
              ]}
            />

            <FooterLinkColumn
              title="Kurumsal"
              links={[
                { label: "Hakkımızda", href: "/hakkimizda" },
                { label: "Gizlilik Politikası", href: "/gizlilik-politikasi" },
                { label: "Çerez Politikası", href: "/cerez-politikasi" },
                { label: "Kullanım Şartları", href: "/kullanim-sartlari" },
                { label: "Yasal Uyarı", href: "/yasal-uyari" },
                { label: "İletişim", href: "/iletisim" },
                { label: "Reklam", href: "/reklam" },
              ]}
            />

            <div>
              <h3 className="mb-4 text-base font-semibold text-white">
                İletişim
              </h3>
              <div className="space-y-3 text-sm text-slate-300">
                <div className="flex items-center gap-2">
                  <MailIcon />
                  <span>destekhocaileborsa@gmail.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <LocationIcon />
                  <span>Kırklareli, Türkiye</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-3 border-t border-slate-800 pt-6 text-xs text-slate-400 md:flex-row md:items-center md:justify-between">
            <p>© 2026 Hoca İle Borsa. Tüm hakları saklıdır.</p>
            <p>Sitede yer alan içerikler izinsiz kullanılamaz.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
