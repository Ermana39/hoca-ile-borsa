export const metadata = {
  title: "Hoca İle Borsa | Borsa, Halka Arz ve Finans İçerikleri",
  description: "Borsa analiz, halka arz, temettü takvimi, yatırım fonları ve finans içeriklerini tek yerde takip edin.",
  alternates: { canonical: "https://www.hocaileborsa.com" },
};
import Image from "next/image";
import Link from "next/link";
import { newsItems as tumHaberler } from "@/app/data/news";
import pageUpdates from "@/lib/page-updates.generated.json";
import { IconTile } from "@/components/icons/IconTile";
import type { CategoryIconName } from "@/components/icons/CategoryIcon";
import HaberKart from "@/components/HaberKart";
import {
  normalizeNewsItems,
  getAllNews,
  ANA_SAYFA_HABER_LIMIT,
} from "@/lib/haberler";

export const revalidate = 86400;

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

export default function HomePage() {
  // Elle girilen haberler + günlük borsa özetleri (otomatik), tarihe göre sıralı.
  const newsItems = getAllNews();
  const gosterilenHaberler = newsItems.slice(0, ANA_SAYFA_HABER_LIMIT);
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
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-6">
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

            {gosterilenHaberler.length > 0 ? (
              <div className="grid grid-cols-1 gap-3 p-4 lg:grid-cols-2 md:p-5">
                {gosterilenHaberler.map((item) => (
                  <HaberKart key={item.id || item.href} item={item} />
                ))}
              </div>
            ) : (
              <div className="p-6 text-center text-sm text-slate-400">
                Haber bulunamadı.
              </div>
            )}

            <div className="flex flex-col items-center gap-2 border-t border-slate-100 px-5 py-4 text-center md:px-6">
              {newsItems.length > ANA_SAYFA_HABER_LIMIT && (
                <p className="text-sm text-slate-500">
                  Ana sayfada en güncel {ANA_SAYFA_HABER_LIMIT} haber gösterilmektedir.
                </p>
              )}
              <Link
                href="/haberler"
                prefetch={false}
                className="inline-flex items-center gap-1 rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700"
              >
                Tüm haberleri gör
                <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </section>

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
                { label: "Mevduat Faizi Hesapla", href: "/mevduat-kredi-faizleri/mevduat-faizi-oranlari" },
                { label: "Temettü Hesaplama", href: "/temettu/temettu-hesaplama-araci" },
                { label: "Hisse Kâr / Zarar", href: "/borsa/kar-zarar-hesaplama" },
                { label: "Kira Artış Hesapla", href: "/hesaplayici/kira-artis" },
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
      </div>

    </main>
  );
}
