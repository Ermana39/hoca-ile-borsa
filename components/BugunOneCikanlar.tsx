import Link from "@/components/NoPrefetchLink";
import { getNewsByCategory } from "@/lib/haberler";
import { getEnGuncelGunlukOzet } from "@/lib/gunluk-ozet";
import type { HaberKategori } from "@/lib/haber-kategorileri";

type OneCikanKart = {
  etiket: string;
  baslik: string;
  href: string;
  tarih?: string;
  gorsel?: string;
  alt?: string;
};

function haberKategoriKarti(
  kategori: HaberKategori,
  etiket: string,
): OneCikanKart | null {
  const item = getNewsByCategory(kategori)[0];
  if (!item) return null;

  const gorsel =
    item.image && item.image.trim() !== ""
      ? item.image
      : item.id
        ? `/haber${item.id}.png`
        : undefined;

  return {
    etiket,
    baslik: item.title,
    href: item.href,
    tarih: item.publishedAt,
    gorsel,
    alt: item.alt || item.title,
  };
}

function formatTarih(iso?: string) {
  if (!iso) return null;
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return null;
  return d.toLocaleDateString("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function BugunOneCikanlar() {
  const kartlar: OneCikanKart[] = [];

  const ozet = getEnGuncelGunlukOzet();
  if (ozet) {
    kartlar.push({
      etiket: "Günlük Borsa Özeti",
      baslik: ozet.baslik,
      href: `/borsa/gunluk-borsa-ozeti/${ozet.slug}`,
      tarih: ozet.isoTarih,
      gorsel: ozet.gorsel,
      alt: ozet.baslik,
    });
  }

  const kategoriEtiketleri: [HaberKategori, string][] = [
    ["kap-bildirimleri", "Önemli KAP Haberleri"],
    ["halka-arz", "Güncel Halka Arz"],
    ["temettu", "Temettü Gündemi"],
    ["sermaye-artirimi", "Bedelsiz / Sermaye Artırımı"],
    ["sirket-haberleri", "Şirket Haberleri"],
  ];

  for (const [kategori, etiket] of kategoriEtiketleri) {
    const kart = haberKategoriKarti(kategori, etiket);
    if (kart) kartlar.push(kart);
  }

  // Hiç içerik yoksa bölümü hiç gösterme.
  if (kartlar.length === 0) return null;

  return (
    <section className="px-4 pb-6 md:px-6">
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_2px_12px_rgba(15,23,42,0.06)]">
        <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4 md:px-6">
          <div className="flex items-center gap-3">
            <div className="h-5 w-1 rounded-full bg-emerald-500" />
            <h2 className="text-base font-bold tracking-tight text-slate-900 md:text-lg">
              Bugün Öne Çıkanlar
            </h2>
          </div>
          <span className="rounded bg-slate-100 px-2 py-1 text-[11px] font-semibold uppercase tracking-wider text-slate-500">
            Güncel İçerikler
          </span>
        </div>

        <div className="grid grid-cols-1 gap-3 p-4 sm:grid-cols-2 lg:grid-cols-3 md:p-5">
          {kartlar.map((kart) => {
            const tarih = formatTarih(kart.tarih);
            return (
              <Link
                key={kart.href}
                href={kart.href}
                prefetch={false}
                aria-label={`${kart.etiket}: ${kart.baslik}`}
                className="group flex overflow-hidden rounded-xl border border-slate-200 bg-white shadow-[0_1px_6px_rgba(15,23,42,0.05)] transition duration-300 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-[0_6px_24px_rgba(15,23,42,0.10)] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                {kart.gorsel && (
                  <div className="relative aspect-[16/9] w-24 shrink-0 self-center overflow-hidden bg-slate-100 sm:w-28">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={kart.gorsel}
                      alt={kart.alt || kart.baslik}
                      loading="lazy"
                      decoding="async"
                      fetchPriority="low"
                      width={160}
                      height={90}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                    />
                  </div>
                )}

                <div className="flex min-w-0 flex-1 flex-col justify-between p-3 md:p-4">
                  <div>
                    <span className="inline-flex items-center rounded bg-emerald-50 px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-emerald-700">
                      {kart.etiket}
                    </span>
                    <h3 className="mt-2 line-clamp-2 text-sm font-semibold leading-snug text-slate-900 transition duration-200 group-hover:text-blue-700">
                      {kart.baslik}
                    </h3>
                  </div>

                  <div className="mt-3 flex items-center justify-between gap-2">
                    {tarih ? (
                      <time
                        dateTime={kart.tarih}
                        className="text-[11px] font-medium text-slate-400"
                      >
                        {tarih}
                      </time>
                    ) : (
                      <span />
                    )}
                    <span className="flex items-center gap-1 text-xs font-semibold text-blue-600 transition duration-300 group-hover:gap-2">
                      <span>Görüntüle</span>
                      <span aria-hidden>→</span>
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
