import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { newsItems as tumHaberler } from "@/app/data/news";
import { sonGuncellemeler } from "@/lib/son-guncellemeler";

export const revalidate = 3600;

type NewsItem = {
  id: number;
  title: string;
  href: string;
  image?: string;
  alt?: string;
};

type GuncellemeItem = {
  title: string;
  href: string;
  time: string;
};

const ANA_SAYFA_HABER_LIMIT = 6;
const SON_GUNCELLEME_LIMIT = 12;

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

function ReklamAlani({ variant = "yatay" }: { variant?: "yatay" | "icerik" }) {
  const alanClass =
    variant === "icerik"
      ? "min-h-[220px] sm:min-h-[250px] lg:min-h-[280px]"
      : "min-h-[100px] sm:min-h-[110px] lg:min-h-[120px]";

  return (
    <section
      aria-label="Reklam alanı"
      className={`w-full overflow-hidden rounded-2xl ${alanClass}`}
    >
      <div className={`w-full ${alanClass}`} />
    </section>
  );
}

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
      className="group flex min-h-[210px] flex-col rounded-2xl bg-white transition hover:bg-zinc-50 xl:min-h-[225px]"
      aria-label={title}
    >
      <div className="p-2 pb-1 md:p-3 md:pb-1">
        <div className="relative overflow-hidden rounded-2xl bg-zinc-50">
          <div className="relative aspect-[16/10] w-full">
            <Image
              src={image}
              alt={alt}
              fill
              unoptimized
              className="object-cover transition duration-300 group-hover:scale-[1.03]"
            />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center px-3 pb-3 pt-0 text-center md:px-4 md:pb-3">
        <h2 className="text-xl font-semibold text-zinc-900 md:text-2xl">
          {title}
        </h2>
      </div>
    </Link>
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
      };
    })
    .filter(
      (item: NewsItem) =>
        item.id > 0 && item.title.trim() !== "" && item.href.trim() !== ""
    )
    .sort((a: NewsItem, b: NewsItem) => a.id - b.id);
}

function parseUpdatedAt(value: string) {
  const match = value.match(
    /^(\d{2})\.(\d{2})\.(\d{4})(?:\s+(\d{2}):(\d{2}))?$/
  );

  if (!match) return 0;

  const [, day, month, year, hour = "0", minute = "0"] = match;

  return new Date(
    Number(year),
    Number(month) - 1,
    Number(day),
    Number(hour),
    Number(minute)
  ).getTime();
}

function getSonGuncellemeler(): GuncellemeItem[] {
  return [...sonGuncellemeler]
    .sort((a, b) => parseUpdatedAt(b.updatedAt) - parseUpdatedAt(a.updatedAt))
    .slice(0, SON_GUNCELLEME_LIMIT)
    .map((item) => ({
      title: item.title,
      href: item.href,
      time: item.updatedAt,
    }));
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
      className="flex items-center gap-4 rounded-xl border border-zinc-200 bg-white px-4 py-4 text-zinc-900 transition hover:bg-zinc-50 md:px-5 md:py-5"
    >
      <div className="relative h-14 w-20 shrink-0 overflow-hidden rounded-lg bg-zinc-100 sm:h-16 sm:w-24">
        <img
          src={haberGorseli}
          alt={item.alt || item.title}
          loading="lazy"
          decoding="async"
          fetchPriority="low"
          width={96}
          height={64}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="min-w-0 flex-1">
        <h2 className="text-base font-medium leading-7 text-zinc-900 md:text-lg">
          {item.title}
        </h2>
      </div>
    </Link>
  );
}

function SonGuncellemelerBar({ items }: { items: GuncellemeItem[] }) {
  if (items.length === 0) {
    return (
      <section className="px-4 pb-6 md:px-6">
        <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white">
          <div className="flex flex-col md:flex-row md:items-center">
            <div className="shrink-0 border-b border-zinc-200 bg-zinc-900 px-4 py-3 text-sm font-bold text-white md:border-b-0 md:border-r">
              Son Güncellemeler
            </div>
            <div className="px-4 py-3 text-sm text-zinc-500">
              Güncelleme verisi bulunamadı.
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="px-4 pb-6 md:px-6">
      <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white">
        <div className="flex flex-col md:flex-row md:items-center">
          <div className="shrink-0 border-b border-zinc-200 bg-zinc-900 px-4 py-3 text-sm font-bold text-white md:border-b-0 md:border-r">
            Son Güncellemeler
          </div>

          <div className="relative min-w-0 flex-1 overflow-x-auto">
            <div className="flex min-w-max items-center gap-6 px-4 py-3">
              {items.map((item, index) => (
                <Link
                  key={`${item.href}-${item.time}-${index}`}
                  href={item.href}
                  prefetch={false}
                  className="inline-flex shrink-0 items-center gap-2 text-sm text-zinc-700 hover:text-zinc-900"
                >
                  <span className="font-semibold">{item.title}</span>
                  <span className="rounded-md bg-zinc-100 px-2 py-0.5 text-xs font-semibold text-zinc-600">
                    {item.time}
                  </span>
                </Link>
              ))}
            </div>
          </div>
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
  const newsItems = normalizeNewsItems(tumHaberler).slice(
    0,
    ANA_SAYFA_HABER_LIMIT
  );
  const guncellemeler = getSonGuncellemeler();

  return (
    <main className="min-h-screen bg-white">
      <div className="mx-auto max-w-7xl">
        <section className="px-4 pt-4 md:px-6 md:pt-6">
          <div className="overflow-hidden rounded-2xl">
            <img
              src="/banner.png"
              alt="Hoca İle Borsa banner görseli"
              className="block h-auto w-full rounded-2xl"
            />
          </div>
        </section>

        <section className="px-4 pt-6 md:px-6">
          <ReklamAlani variant="yatay" />
        </section>

        <section className="px-4 py-6 md:px-6">
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-5">
            {kategoriKutulari.map((item) => (
              <KategoriKutusu key={item.href} {...item} />
            ))}
          </div>
        </section>

        <section className="px-4 pb-6 md:px-6">
          <ReklamAlani variant="yatay" />
        </section>

        <section className="px-4 pb-6 md:px-6">
          <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4 md:p-6">
            <div className="mb-4 flex items-center justify-between gap-3">
              <h1 className="text-lg font-semibold text-zinc-900 md:text-2xl">
                Güncel Borsa Haberleri
              </h1>
            </div>

            {newsItems.length > 0 ? (
              <div className="space-y-3">
                {newsItems.map((item) => (
                  <HaberSatiri key={item.id || item.href} item={item} />
                ))}
              </div>
            ) : (
              <div className="rounded-2xl border border-zinc-200 bg-white p-6 text-center text-zinc-500">
                Haber bulunamadı.
              </div>
            )}
          </div>
        </section>

        <SonGuncellemelerBar items={guncellemeler} />

        <section className="px-4 pb-6 md:px-6">
          <ReklamAlani variant="icerik" />
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