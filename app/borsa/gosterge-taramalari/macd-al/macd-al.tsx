import fs from "fs";
import path from "path";
import Link from "next/link";
import * as XLSX from "xlsx";

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

type TaramaSatiri = {
  Sembol?: string;
  Periyod?: string;
  Birim?: string;
};

function getMacdAlData() {
  try {
    const filePath = path.join(
      process.cwd(),
      "app",
      "borsa",
      "gosterge-taramalari",
      "data",
      "macd-al.xlsx"
    );

    const fileBuffer = fs.readFileSync(filePath);
    const workbook = XLSX.read(fileBuffer, { type: "buffer" });

    const firstSheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[firstSheetName];

    const rows = XLSX.utils.sheet_to_json<TaramaSatiri>(worksheet, {
      defval: "",
    });

    return rows
      .map((row) => ({
        sembol: String(row.Sembol || "").trim(),
        periyod: String(row.Periyod || "").trim(),
        birim: String(row.Birim || "").trim(),
      }))
      .filter((row) => row.sembol);
  } catch {
    return [];
  }
}

export default function MacdAlPage() {
  const hisseler = getMacdAlData();

  const guncellemeTarihi = new Intl.DateTimeFormat("tr-TR", {
    timeZone: "Europe/Istanbul",
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(new Date());

  return (
    <main className="min-h-screen bg-white px-4 py-6 md:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="mb-6 flex flex-wrap gap-3">
          <Link
            href="/"
            className="inline-block rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100"
          >
            Ana Sayfa
          </Link>

          <Link
            href="/borsa/gosterge-taramalari"
            className="inline-block rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100"
          >
            Geri
          </Link>
        </div>

        <h1 className="mb-2 text-3xl font-bold text-zinc-900">
          MACD Al Verenler
        </h1>

        <p className="mb-3 max-w-3xl text-base text-zinc-600">
          MACD göstergesine göre al sinyali üreten hisseler
        </p>

        <div className="mb-8 text-sm font-semibold text-zinc-700 md:text-base">
          Toplam {hisseler.length} hisse
          <span className="mx-2">•</span>
          Güncelleme Tarihi: {guncellemeTarihi}
        </div>

        <section className="mb-8">
          <ReklamAlani variant="yatay" />
        </section>

        <section className="rounded-2xl border border-zinc-200 bg-white p-4 md:p-6">
          {hisseler.length > 0 ? (
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3">
              {hisseler.map((item, index) => (
                <div
                  key={`${item.sembol}-${item.periyod}-${item.birim}-${index}`}
                  className="rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-4"
                >
                  <div className="text-base font-semibold text-zinc-900">
                    {item.sembol}
                  </div>

                  {(item.periyod || item.birim) && (
                    <div className="mt-2 space-y-1 text-sm text-zinc-600">
                      {item.periyod ? <div>Periyod: {item.periyod}</div> : null}
                      {item.birim ? <div>Birim: {item.birim}</div> : null}
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-8 text-center text-sm text-zinc-500">
              Excel verisi okunamadı.
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