import Link from "next/link";
import HaberKart from "@/components/HaberKart";
import HaberSayfalama from "@/components/HaberSayfalama";
import {
  getSayfaHaberleri,
  getToplamSayfa,
  type NewsItem,
} from "@/lib/haberler";
import {
  HABER_KATEGORILERI,
  type HaberKategori,
} from "@/lib/haber-kategorileri";

export default function HaberArsiv({
  haberler,
  aktifSayfa,
  basePath,
  baslik,
  aciklama,
  aktifKategori = null,
}: {
  haberler: NewsItem[];
  aktifSayfa: number;
  basePath: string;
  baslik: string;
  aciklama: string;
  aktifKategori?: HaberKategori | null;
}) {
  const toplamSayfa = getToplamSayfa(haberler.length);
  const sayfaHaberleri = getSayfaHaberleri(haberler, aktifSayfa);

  return (
    <main className="min-h-screen bg-[#f8fafc] px-4 py-6 md:px-6">
      <div className="mx-auto max-w-5xl">
        <nav
          className="mb-5 flex flex-wrap items-center gap-2 text-sm text-slate-500"
          aria-label="Breadcrumb"
        >
          <Link href="/" className="transition hover:text-blue-600">
            Ana Sayfa
          </Link>
          <span className="text-slate-300">/</span>
          {aktifKategori ? (
            <>
              <Link href="/haberler" className="transition hover:text-blue-600">
                Haberler
              </Link>
              <span className="text-slate-300">/</span>
              <span className="font-medium text-slate-700">{baslik}</span>
            </>
          ) : (
            <span className="font-medium text-slate-700">Haberler</span>
          )}
        </nav>

        <header className="mb-6">
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
            {baslik}
            {aktifSayfa > 1 ? ` – Sayfa ${aktifSayfa}` : ""}
          </h1>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600 md:text-base">
            {aciklama}
          </p>
        </header>

        <nav
          className="mb-6 flex flex-wrap gap-2"
          aria-label="Haber kategorileri"
        >
          <Link
            href="/haberler"
            prefetch={false}
            aria-current={aktifKategori ? undefined : "page"}
            className={
              aktifKategori
                ? "rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-sm font-semibold text-slate-600 transition hover:border-blue-200 hover:bg-blue-50"
                : "rounded-full border border-blue-600 bg-blue-600 px-3.5 py-1.5 text-sm font-semibold text-white"
            }
          >
            Tümü
          </Link>
          {HABER_KATEGORILERI.map((kategori) => {
            const aktif = kategori.slug === aktifKategori;
            return (
              <Link
                key={kategori.slug}
                href={`/haberler/kategori/${kategori.slug}`}
                prefetch={false}
                aria-current={aktif ? "page" : undefined}
                className={
                  aktif
                    ? "rounded-full border border-blue-600 bg-blue-600 px-3.5 py-1.5 text-sm font-semibold text-white"
                    : "rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-sm font-semibold text-slate-600 transition hover:border-blue-200 hover:bg-blue-50"
                }
              >
                {kategori.kisaBaslik}
              </Link>
            );
          })}
        </nav>

        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_2px_12px_rgba(15,23,42,0.06)]">
          <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4 md:px-6">
            <div className="flex items-center gap-3">
              <div className="h-5 w-1 rounded-full bg-blue-600" />
              <h2 className="text-base font-bold tracking-tight text-slate-900 md:text-lg">
                {aktifKategori ? baslik : "Tüm Haberler"}
              </h2>
            </div>
            <span className="rounded bg-slate-100 px-2 py-1 text-[11px] font-semibold uppercase tracking-wider text-slate-500">
              {haberler.length} haber
            </span>
          </div>

          {sayfaHaberleri.length > 0 ? (
            <div className="grid grid-cols-1 gap-3 p-4 md:p-5 lg:grid-cols-2">
              {sayfaHaberleri.map((item) => (
                <HaberKart key={item.id || item.href} item={item} />
              ))}
            </div>
          ) : (
            <div className="p-6 text-center text-sm text-slate-400">
              Bu kategoride henüz haber bulunmuyor.
            </div>
          )}
        </div>

        <HaberSayfalama
          basePath={basePath}
          aktifSayfa={aktifSayfa}
          toplamSayfa={toplamSayfa}
        />
      </div>
    </main>
  );
}
