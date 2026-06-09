import Link from "next/link";
import yukselisHacimData from "../data/yukselis-hacim.json";

export const metadata = {
  title: "Yükseliş Trendi + Hacim Artışı | Hoca İle Borsa",
  description:
    "Yükseliş Trendi + Hacim Artışına göre al sinyali üreten Borsa İstanbul hisselerini inceleyin. Fiyat 233,144,89,55,21,13 ve 5 üstsel MOV hareketli ortalaması üzeri, hacim son 3 günlük ortalaması son 21 günlük ortalamasının üzerinde",
};

export const revalidate = 86400;

type JsonRow = Record<string, string | number | null>;

function metinCevir(deger: unknown) {
  if (deger === null || deger === undefined) return "";
  return String(deger).trim();
}

function normalizeText(metin: string) {
  return metin
    .toLocaleLowerCase("tr-TR")
    .replace(/ı/g, "i")
    .replace(/ğ/g, "g")
    .replace(/ü/g, "u")
    .replace(/ş/g, "s")
    .replace(/ö/g, "o")
    .replace(/ç/g, "c")
    .trim();
}

function hisseleriOku() {
  const rows = (yukselisHacimData.rows || []) as JsonRow[];

  if (!rows.length) return [];

  const columns =
    Array.isArray(yukselisHacimData.columns) && yukselisHacimData.columns.length > 0
      ? yukselisHacimData.columns
      : Object.keys(rows[0] || {});

  const sembolKolonu =
    columns.find((column) => normalizeText(column).includes("sembol")) ||
    columns[0];

  return rows
    .map((row) => metinCevir(row[sembolKolonu]))
    .filter((item) => item && normalizeText(item) !== "sembol");
}

export default function YukselisHacimPage() {
  const hisseler = hisseleriOku();

  return (
    <main className="min-h-screen bg-white px-4 py-6 md:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="mb-6 flex flex-wrap gap-3">
          <Link
            href="/"
            prefetch={false}
            className="inline-block rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100"
          >
            Ana Sayfa
          </Link>

          <Link
            href="/borsa/gosterge-taramalari"
            prefetch={false}
            className="inline-block rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100"
          >
            Geri
          </Link>
        </div>

        <h1 className="mb-2 text-3xl font-bold text-zinc-900">
          Yükseliş Trendi + Hacim Artışı
        </h1>

        <p className="mb-3 max-w-3xl text-base text-zinc-600">
          Hareketli ortalama dizilimi, son 3 günlük hacim ortalaması son 21 günlük hacim ortalamasının üzerinde olan hisseler
        </p>

        <div className="mb-8 text-sm font-semibold text-zinc-700 md:text-base">
          Toplam {hisseler.length} hisse
        </div>

        <section className="rounded-2xl border border-zinc-200 bg-white p-4 md:p-6">
          {hisseler.length > 0 ? (
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3">
              {hisseler.map((hisse, index) => (
                <div
                  key={`${hisse}-${index}`}
                  className="rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-4 text-base font-semibold text-zinc-900"
                >
                  {hisse}
                </div>
              ))}
            </div>
          ) : (
            <div className="rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-8 text-center text-sm text-zinc-500">
              Veri bulunamadı.
            </div>
          )}
        </section>

        <div className="mt-10 rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 to-indigo-50 p-6 md:p-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="mb-1 text-xl font-bold text-zinc-900">
                Grafik Analizlerine Göz At
              </h2>
              <p className="max-w-xl text-sm text-zinc-600">
                Hisselerin destek-direnç bölgelerini, trend yapısını ve teknik görünümünü grafik bazlı analizlerle inceleyin.
              </p>
            </div>
            <Link
              href="/borsa/grafik-analiz"
              prefetch={false}
              className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-blue-700 active:scale-95"
            >
              Grafik Analizleri İncele
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}