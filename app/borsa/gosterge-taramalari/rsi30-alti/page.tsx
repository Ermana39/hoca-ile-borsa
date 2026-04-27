import Link from "next/link";
import rsi30AltiData from "../data/rsi30-alti.json";

export const metadata = {
  title: "RSI 30 Altı Hisseler | Hoca İle Borsa",
  description:
    "RSI değeri 30 seviyesinin altında olan Borsa İstanbul hisselerini inceleyin.",
};

export const revalidate = 3600;

type JsonRow = Record<string, string | number | null>;

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
  const rows = (rsi30AltiData.rows || []) as JsonRow[];

  if (!rows.length) return [];

  const columns =
    Array.isArray(rsi30AltiData.columns) && rsi30AltiData.columns.length > 0
      ? rsi30AltiData.columns
      : Object.keys(rows[0] || {});

  const sembolKolonu =
    columns.find((column) => normalizeText(column).includes("sembol")) ||
    columns[0];

  return rows
    .map((row) => metinCevir(row[sembolKolonu]))
    .filter((item) => item && normalizeText(item) !== "sembol");
}

export default function Rsi30AltiPage() {
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
          RSI 30 Altı Hisseler
        </h1>

        <p className="mb-3 max-w-3xl text-base text-zinc-600">
          RSI değeri 30 seviyesinin altında olan hisseler
        </p>

        <div className="mb-8 text-sm font-semibold text-zinc-700 md:text-base">
          Toplam {hisseler.length} hisse
        </div>

        <section className="mb-8">
          <ReklamAlani variant="yatay" />
        </section>

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

        <section className="mt-8">
          <ReklamAlani variant="icerik" />
        </section>
      </div>
    </main>
  );
}