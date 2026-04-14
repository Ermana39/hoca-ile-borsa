import Link from "next/link";

type PivotRow = {
  sembol: string;
  fark: number;
  son: number;
  pivot: number;
  destek1: number;
  destek2: number;
  destek3: number;
  direnc1: number;
  direnc2: number;
  direnc3: number;
};

const bist100Pivot = {
  sembol: "BIST100",
  fark: 1.44,
  son: 14202.24,
  pivot: 14000.16,
  destek1: 13901.12,
  destek2: 13743.73,
  destek3: 13644.69,
  direnc1: 14157.55,
  direnc2: 14256.59,
  direnc3: 14413.98,
};

const pivotVerileri: PivotRow[] = [
  { sembol: "AEFES", fark: 1.67, son: 18.9, pivot: 18.59, destek1: 18.09, destek2: 17.74, destek3: 17.24, direnc1: 18.94, direnc2: 19.44, direnc3: 19.79 },
  { sembol: "AKBNK", fark: 2.15, son: 78.45, pivot: 76.8, destek1: 75.9, destek2: 74.4, destek3: 73.5, direnc1: 78.3, direnc2: 79.2, direnc3: 80.7 },
  { sembol: "ASELS", fark: 0.2, son: 411.75, pivot: 410.917, destek1: 392.833, destek2: 370.417, destek3: 352.333, direnc1: 433.333, direnc2: 451.417, direnc3: 473.833 },
  { sembol: "ASTOR", fark: 0.99, son: 203.7, pivot: 201.7, destek1: 195.5, destek2: 191.8, destek3: 185.6, direnc1: 205.4, direnc2: 211.6, direnc3: 215.3 },
  { sembol: "BIMAS", fark: 1.71, son: 752.0, pivot: 739.333, destek1: 734.667, destek2: 725.333, destek3: 720.667, direnc1: 748.667, direnc2: 753.333, direnc3: 762.667 },
  { sembol: "DSTKF", fark: -0.14, son: 2115.0, pivot: 2118.0, destek1: 2036.0, destek2: 1995.0, destek3: 1913.0, direnc1: 2159.0, direnc2: 2241.0, direnc3: 2282.0 },
  { sembol: "EKGYO", fark: 0.86, son: 21.16, pivot: 20.98, destek1: 20.78, destek2: 20.56, destek3: 20.36, direnc1: 21.2, direnc2: 21.4, direnc3: 21.62 },
  { sembol: "ENKAI", fark: 4.34, son: 104.6, pivot: 100.25, destek1: 98.8, destek2: 97.3, destek3: 95.85, direnc1: 101.75, direnc2: 103.2, direnc3: 104.7 },
  { sembol: "EREGL", fark: -0.57, son: 31.46, pivot: 31.64, destek1: 31.06, destek2: 30.12, destek3: 29.54, direnc1: 32.58, direnc2: 33.16, direnc3: 34.1 },
  { sembol: "FROTO", fark: 0.92, son: 106.1, pivot: 105.133, destek1: 103.967, destek2: 103.033, destek3: 101.867, direnc1: 106.067, direnc2: 107.233, direnc3: 108.167 },
  { sembol: "GARAN", fark: 1.52, son: 140.0, pivot: 137.9, destek1: 136.7, destek2: 134.7, destek3: 133.5, direnc1: 139.9, direnc2: 141.1, direnc3: 143.1 },
  { sembol: "GUBRF", fark: 1.76, son: 492.5, pivot: 484.0, destek1: 477.25, destek2: 471.5, destek3: 464.75, direnc1: 489.75, direnc2: 496.5, direnc3: 502.25 },
  { sembol: "ISCTR", fark: 0.43, son: 14.55, pivot: 14.487, destek1: 14.363, destek2: 14.117, destek3: 13.993, direnc1: 14.733, direnc2: 14.857, direnc3: 15.103 },
  { sembol: "KCHOL", fark: 1.78, son: 206.3, pivot: 202.7, destek1: 200.4, destek2: 196.7, destek3: 194.4, direnc1: 206.4, direnc2: 208.7, direnc3: 212.4 },
  { sembol: "KRDMD", fark: -2.05, son: 35.4, pivot: 36.14, destek1: 35.64, destek2: 35.18, destek3: 34.68, direnc1: 36.6, direnc2: 37.1, direnc3: 37.56 },
  { sembol: "MGROS", fark: 1.2, son: 649.0, pivot: 641.333, destek1: 633.667, destek2: 626.333, destek3: 618.667, direnc1: 648.667, direnc2: 656.333, direnc3: 663.667 },
  { sembol: "PETKM", fark: -0.42, son: 22.06, pivot: 22.153, destek1: 21.827, destek2: 21.453, destek3: 21.127, direnc1: 22.527, direnc2: 22.853, direnc3: 23.227 },
  { sembol: "PGSUS", fark: 1.85, son: 187.1, pivot: 183.7, destek1: 182.6, destek2: 181.5, destek3: 180.4, direnc1: 184.8, direnc2: 185.9, direnc3: 187.0 },
  { sembol: "SAHOL", fark: 1.53, son: 100.5, pivot: 98.983, destek1: 97.967, destek2: 96.833, destek3: 95.817, direnc1: 100.117, direnc2: 101.133, direnc3: 102.267 },
  { sembol: "SASA", fark: 4.09, son: 2.72, pivot: 2.613, destek1: 2.557, destek2: 2.513, destek3: 2.457, direnc1: 2.657, direnc2: 2.713, direnc3: 2.757 },
  { sembol: "SISE", fark: 1.28, son: 48.08, pivot: 47.473, destek1: 46.827, destek2: 45.893, destek3: 45.247, direnc1: 48.407, direnc2: 49.053, direnc3: 49.987 },
  { sembol: "TAVHL", fark: -0.33, son: 330.25, pivot: 331.333, destek1: 323.417, destek2: 318.333, destek3: 310.417, direnc1: 336.417, direnc2: 344.333, direnc3: 349.417 },
  { sembol: "TCELL", fark: 1.39, son: 116.3, pivot: 114.7, destek1: 113.7, destek2: 111.7, destek3: 110.7, direnc1: 116.7, direnc2: 117.7, direnc3: 119.7 },
  { sembol: "THYAO", fark: 2.34, son: 324.0, pivot: 316.583, destek1: 314.417, destek2: 312.083, destek3: 309.917, direnc1: 318.917, direnc2: 321.083, direnc3: 323.417 },
  { sembol: "TOASO", fark: 5.74, son: 298.0, pivot: 281.833, destek1: 279.667, destek2: 275.583, destek3: 273.417, direnc1: 285.917, direnc2: 288.083, direnc3: 292.167 },
  { sembol: "TRALT", fark: 4.34, son: 45.7, pivot: 43.8, destek1: 43.3, destek2: 42.92, destek3: 42.42, direnc1: 44.18, direnc2: 44.68, direnc3: 45.06 },
  { sembol: "TTKOM", fark: 1.18, son: 62.7, pivot: 61.967, destek1: 61.433, destek2: 60.517, destek3: 59.983, direnc1: 62.883, direnc2: 63.417, direnc3: 64.333 },
  { sembol: "TUPRS", fark: 1.33, son: 267.5, pivot: 264.0, destek1: 259.5, destek2: 255.0, destek3: 250.5, direnc1: 268.5, direnc2: 273.0, direnc3: 277.5 },
  { sembol: "VAKBN", fark: 0.63, son: 34.26, pivot: 34.047, destek1: 33.793, destek2: 33.307, destek3: 33.053, direnc1: 34.533, direnc2: 34.787, direnc3: 35.273 },
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

function formatNumber(value: number) {
  const hasDecimal = !Number.isInteger(value);
  return new Intl.NumberFormat("tr-TR", {
    minimumFractionDigits: hasDecimal ? 2 : 0,
    maximumFractionDigits: 3,
  }).format(value);
}

function getSatirRenk(row: PivotRow) {
  if (row.son < row.destek3) return "bg-red-200";
  if (row.son === row.pivot) return "bg-zinc-200";
  return row.son >= row.pivot ? "bg-green-100" : "bg-red-100";
}

export default function PivotAnaliziPage() {
  const guncellemeTarihi = "15.04.2026";

  return (
    <main className="min-h-screen bg-white px-4 py-6 md:px-6">
      <div className="mx-auto max-w-[1500px]">
        <div className="mb-6 flex flex-wrap gap-3">
          <Link
            href="/"
            className="inline-block rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100"
          >
            Ana Sayfa
          </Link>

          <Link
            href="/borsa"
            className="inline-block rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100"
          >
            Geri
          </Link>
        </div>

        <h1 className="mb-2 text-3xl font-bold text-zinc-900">Pivot Analizi</h1>
        <p className="mb-2 max-w-3xl text-base text-zinc-600">
          Pivot, destek ve direnç seviyelerine göre hazırlanan görünüm tablosu.
        </p>
        <div className="mb-8 text-sm font-semibold text-zinc-700">
          Güncelleme Tarihi: {guncellemeTarihi}
        </div>

        <section className="mb-8">
          <ReklamAlani variant="yatay" />
        </section>

        <section className="mb-8 overflow-hidden rounded-2xl border border-sky-200 bg-sky-50 shadow-sm">
          <div className="overflow-x-auto">
            <table className="min-w-[1200px] w-full border-collapse text-sm text-zinc-900">
              <thead className="bg-sky-100 text-zinc-800">
                <tr>
                  <th className="border border-sky-200 px-3 py-2 text-left">Sembol</th>
                  <th className="border border-sky-200 px-3 py-2 text-left">Pivota Göre Fark %</th>
                  <th className="border border-sky-200 px-3 py-2 text-left">Son</th>
                  <th className="border border-sky-200 px-3 py-2 text-left">Pivot</th>
                  <th className="border border-sky-200 px-3 py-2 text-left">Destek 1</th>
                  <th className="border border-sky-200 px-3 py-2 text-left">Destek 2</th>
                  <th className="border border-sky-200 px-3 py-2 text-left">Destek 3</th>
                  <th className="border border-sky-200 px-3 py-2 text-left">Direnç 1</th>
                  <th className="border border-sky-200 px-3 py-2 text-left">Direnç 2</th>
                  <th className="border border-sky-200 px-3 py-2 text-left">Direnç 3</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="border border-sky-200 px-3 py-2 font-semibold">{bist100Pivot.sembol}</td>
                  <td className="border border-sky-200 px-3 py-2">{formatNumber(bist100Pivot.fark)}</td>
                  <td className="border border-sky-200 px-3 py-2">{formatNumber(bist100Pivot.son)}</td>
                  <td className="border border-sky-200 px-3 py-2">{formatNumber(bist100Pivot.pivot)}</td>
                  <td className="border border-sky-200 px-3 py-2">{formatNumber(bist100Pivot.destek1)}</td>
                  <td className="border border-sky-200 px-3 py-2">{formatNumber(bist100Pivot.destek2)}</td>
                  <td className="border border-sky-200 px-3 py-2">{formatNumber(bist100Pivot.destek3)}</td>
                  <td className="border border-sky-200 px-3 py-2">{formatNumber(bist100Pivot.direnc1)}</td>
                  <td className="border border-sky-200 px-3 py-2">{formatNumber(bist100Pivot.direnc2)}</td>
                  <td className="border border-sky-200 px-3 py-2">{formatNumber(bist100Pivot.direnc3)}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="overflow-hidden rounded-2xl border border-sky-200 bg-sky-50 shadow-sm">
          <div className="overflow-x-auto">
            <table className="min-w-[1400px] w-full border-collapse text-sm text-zinc-900">
              <thead className="bg-sky-100 text-zinc-800">
                <tr>
                  <th className="border border-sky-200 px-3 py-2 text-left">Sembol</th>
                  <th className="border border-sky-200 px-3 py-2 text-left">Pivota Göre Fark %</th>
                  <th className="border border-sky-200 px-3 py-2 text-left">Son</th>
                  <th className="border border-sky-200 px-3 py-2 text-left">Pivot</th>
                  <th className="border border-sky-200 px-3 py-2 text-left">Destek 1</th>
                  <th className="border border-sky-200 px-3 py-2 text-left">Destek 2</th>
                  <th className="border border-sky-200 px-3 py-2 text-left">Destek 3</th>
                  <th className="border border-sky-200 px-3 py-2 text-left">Direnç 1</th>
                  <th className="border border-sky-200 px-3 py-2 text-left">Direnç 2</th>
                  <th className="border border-sky-200 px-3 py-2 text-left">Direnç 3</th>
                </tr>
              </thead>

              <tbody>
                {pivotVerileri.map((row) => (
                  <tr key={row.sembol} className={getSatirRenk(row)}>
                    <td className="border border-sky-200 px-3 py-2 font-semibold">
                      {row.sembol}
                    </td>
                    <td className="border border-sky-200 px-3 py-2">
                      {formatNumber(row.fark)}
                    </td>
                    <td className="border border-sky-200 px-3 py-2">
                      {formatNumber(row.son)}
                    </td>
                    <td className="border border-sky-200 px-3 py-2">
                      {formatNumber(row.pivot)}
                    </td>
                    <td className="border border-sky-200 px-3 py-2">
                      {formatNumber(row.destek1)}
                    </td>
                    <td className="border border-sky-200 px-3 py-2">
                      {formatNumber(row.destek2)}
                    </td>
                    <td className="border border-sky-200 px-3 py-2">
                      {formatNumber(row.destek3)}
                    </td>
                    <td className="border border-sky-200 px-3 py-2">
                      {formatNumber(row.direnc1)}
                    </td>
                    <td className="border border-sky-200 px-3 py-2">
                      {formatNumber(row.direnc2)}
                    </td>
                    <td className="border border-sky-200 px-3 py-2">
                      {formatNumber(row.direnc3)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-8">
          <ReklamAlani variant="icerik" />
        </section>
      </div>
    </main>
  );
}