import type { FonEtkiSatiri } from "../_data/fonEtkiOzetleri";

function fmt(value: number, digits = 4) {
  return new Intl.NumberFormat("tr-TR", {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  }).format(value);
}

function signedPercent(value: number) {
  if (value > 0) return `+%${fmt(value)}`;
  if (value < 0) return `-%${fmt(Math.abs(value))}`;
  return `%${fmt(value)}`;
}

export default function FonEtkiKatkiGrafigi({
  kod,
  rows,
}: {
  kod: string;
  rows: FonEtkiSatiri[];
}) {
  const rowsToShow = [...rows]
    .sort((a, b) => Math.abs(b.etki) - Math.abs(a.etki))
    .slice(0, 8);
  const maxEtki = Math.max(...rowsToShow.map((row) => Math.abs(row.etki)), 0.0001);

  return (
    <section className="mb-6 border-y border-slate-200 bg-white px-4 py-6 md:px-6">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="text-sm font-semibold text-blue-700">Hisse bazlı katkı</p>
          <h2 className="mt-1 text-xl font-bold text-slate-950">
            {kod} fonunu en çok etkileyen hisseler
          </h2>
        </div>
        <div className="flex gap-4 text-xs font-semibold text-slate-600">
          <span className="flex items-center gap-2">
            <span className="size-3 bg-emerald-600" aria-hidden="true" />
            Pozitif
          </span>
          <span className="flex items-center gap-2">
            <span className="size-3 bg-red-600" aria-hidden="true" />
            Negatif
          </span>
        </div>
      </div>

      <div className="mt-5 space-y-3 rounded-md border border-slate-700 bg-slate-950 px-4 py-5">
        {rowsToShow.map((row) => (
          <div
            key={row.sembol}
            className="grid grid-cols-[64px_minmax(0,1fr)_92px] items-center gap-3"
          >
            <span className="text-sm font-bold text-slate-100">{row.sembol}</span>
            <div className="h-3 overflow-hidden bg-slate-800">
              <div
                className={`h-full ${
                  row.etki >= 0 ? "bg-emerald-600" : "bg-red-600"
                }`}
                style={{
                  width: `${Math.max((Math.abs(row.etki) / maxEtki) * 100, 1.5)}%`,
                }}
              />
            </div>
            <span
              className={`text-right text-sm font-bold ${
                row.etki >= 0 ? "text-emerald-400" : "text-red-400"
              }`}
            >
              {signedPercent(row.etki)}
            </span>
          </div>
        ))}
      </div>

      <p className="mt-5 text-xs leading-5 text-slate-500">
        Grafik, mutlak etki büyüklüğüne göre ilk sekiz pozisyonu gösterir. Çubuk
        uzunluğu katkının büyüklüğünü, renk ise yönünü ifade eder.
      </p>
    </section>
  );
}
