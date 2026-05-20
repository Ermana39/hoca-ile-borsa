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
  yorum: string;
};

const guncellemeTarihi = "18.05.2026";

const xu100Pivot: PivotRow = {
  sembol: "XU100",
  fark: -2.51,
  son: 14029.54,
  pivot: 14390.57,
  destek1: 14242.7,
  destek2: 14117.81,
  destek3: 13969.94,
  direnc1: 14515.46,
  direnc2: 14663.33,
  direnc3: 14788.22,
  yorum: "İkinci destek seviyesinin altına indi.",
};

const pivotVerileri: PivotRow[] = [
  { sembol: "AEFES", fark: -1.78, son: 19.48, pivot: 19.833, destek1: 19.227, destek2: 18.883, destek3: 18.277, direnc1: 20.177, direnc2: 20.783, direnc3: 21.127, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "AKBNK", fark: -0.54, son: 70.1, pivot: 70.483, destek1: 69.517, destek2: 68.783, destek3: 67.817, direnc1: 71.217, direnc2: 72.183, direnc3: 72.917, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "ASELS", fark: -3.09, son: 402, pivot: 414.833, destek1: 410.667, destek2: 406.333, destek3: 402.167, direnc1: 419.167, direnc2: 423.333, direnc3: 427.667, yorum: "Üçüncü destek seviyesinin altına indi." },
  { sembol: "ASTOR", fark: -4.28, son: 313, pivot: 327, destek1: 317, destek2: 312, destek3: 302, direnc1: 332, direnc2: 342, direnc3: 347, yorum: "İlk destek seviyesinin altına indi." },
  { sembol: "BIMAS", fark: -3.19, son: 392.5, pivot: 405.417, destek1: 397.833, destek2: 390.417, destek3: 382.833, direnc1: 412.833, direnc2: 420.417, direnc3: 427.833, yorum: "İlk destek seviyesinin altına indi." },
  { sembol: "DSTKF", fark: 1.44, son: 1950, pivot: 1922.333, destek1: 1814.667, destek2: 1659.333, destek3: 1551.667, direnc1: 2077.667, direnc2: 2185.333, direnc3: 2340.667, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "EKGYO", fark: -1.88, son: 19.86, pivot: 20.24, destek1: 20.04, destek2: 19.76, destek3: 19.56, direnc1: 20.52, direnc2: 20.72, direnc3: 21, yorum: "İlk destek seviyesinin altına indi." },
  { sembol: "ENKAI", fark: -3.32, son: 98.2, pivot: 101.567, destek1: 99.133, destek2: 96.567, destek3: 94.133, direnc1: 104.133, direnc2: 106.567, direnc3: 109.133, yorum: "İlk destek seviyesinin altına indi." },
  { sembol: "EREGL", fark: -2.45, son: 38.54, pivot: 39.5066, destek1: 39.1533, destek2: 38.6866, destek3: 38.3333, direnc1: 39.9733, direnc2: 40.3266, direnc3: 40.7933, yorum: "İkinci destek seviyesinin altına indi." },
  { sembol: "FROTO", fark: -4.73, son: 87.35, pivot: 91.6833, destek1: 90.5166, destek2: 89.5833, destek3: 88.4166, direnc1: 92.6166, direnc2: 93.7833, direnc3: 94.7166, yorum: "Üçüncü destek seviyesinin altına indi." },
  { sembol: "GARAN", fark: -0.67, son: 129.3, pivot: 130.167, destek1: 128.633, destek2: 127.467, destek3: 125.933, direnc1: 131.333, direnc2: 132.867, direnc3: 134.033, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "GUBRF", fark: -4.78, son: 571, pivot: 599.667, destek1: 585.833, destek2: 577.167, destek3: 563.333, direnc1: 608.333, direnc2: 622.167, direnc3: 630.833, yorum: "İkinci destek seviyesinin altına indi." },
  { sembol: "ISCTR", fark: -1.06, son: 13.72, pivot: 13.867, destek1: 13.673, destek2: 13.477, destek3: 13.283, direnc1: 14.063, direnc2: 14.257, direnc3: 14.453, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "KCHOL", fark: -2.39, son: 195, pivot: 199.7666, destek1: 196.6333, destek2: 194.2666, destek3: 191.1333, direnc1: 202.1333, direnc2: 205.2666, direnc3: 207.6333, yorum: "İlk destek seviyesinin altına indi." },
  { sembol: "KRDMD", fark: -7.17, son: 39.2, pivot: 42.227, destek1: 41.233, destek2: 40.487, destek3: 39.493, direnc1: 42.973, direnc2: 43.967, direnc3: 44.713, yorum: "Üçüncü destek seviyesinin altına indi." },
  { sembol: "MGROS", fark: -4.27, son: 664.5, pivot: 694.1666, destek1: 668.3333, destek2: 654.1666, destek3: 628.3333, direnc1: 708.3333, direnc2: 734.1666, direnc3: 748.3333, yorum: "İlk destek seviyesinin altına indi." },
  { sembol: "PETKM", fark: -3.32, son: 25.4, pivot: 26.2733, destek1: 25.3266, destek2: 24.6533, destek3: 23.7066, direnc1: 26.9466, direnc2: 27.8933, direnc3: 28.5666, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "PGSUS", fark: -2.92, son: 171.6, pivot: 176.7666, destek1: 175.4333, destek2: 174.2666, destek3: 172.9333, direnc1: 177.9333, direnc2: 179.2666, direnc3: 180.4333, yorum: "Üçüncü destek seviyesinin altına indi." },
  { sembol: "SAHOL", fark: -1.12, son: 92.3, pivot: 93.35, destek1: 91.9, destek2: 90.75, destek3: 89.3, direnc1: 94.5, direnc2: 95.95, direnc3: 97.1, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "SASA", fark: -6.34, son: 2.71, pivot: 2.8933, destek1: 2.7666, destek2: 2.7033, destek3: 2.5766, direnc1: 2.9566, direnc2: 3.0833, direnc3: 3.1466, yorum: "İlk destek seviyesinin altına indi." },
  { sembol: "SISE", fark: -5.15, son: 45.9, pivot: 48.3933, destek1: 47.6866, destek2: 47.1733, destek3: 46.4666, direnc1: 48.9066, direnc2: 49.6133, direnc3: 50.1266, yorum: "Üçüncü destek seviyesinin altına indi." },
  { sembol: "TAVHL", fark: -2.91, son: 252.75, pivot: 260.333, destek1: 254.917, destek2: 251.583, destek3: 246.167, direnc1: 263.667, direnc2: 269.083, direnc3: 272.417, yorum: "İlk destek seviyesinin altına indi." },
  { sembol: "TCELL", fark: -3.49, son: 106.8, pivot: 110.667, destek1: 108.333, destek2: 107.167, destek3: 104.833, direnc1: 111.833, direnc2: 114.167, direnc3: 115.333, yorum: "İkinci destek seviyesinin altına indi." },
  { sembol: "THYAO", fark: -2.13, son: 294.5, pivot: 300.9166, destek1: 297.5833, destek2: 295.1666, destek3: 291.8333, direnc1: 303.3333, direnc2: 306.6666, direnc3: 309.0833, yorum: "İkinci destek seviyesinin altına indi." },
  { sembol: "TOASO", fark: -3.59, son: 293.25, pivot: 304.167, destek1: 295.333, destek2: 288.667, destek3: 279.833, direnc1: 310.833, direnc2: 319.667, direnc3: 326.333, yorum: "İlk destek seviyesinin altına indi." },
  { sembol: "TRALT", fark: -1.3, son: 46.6, pivot: 47.2133, destek1: 46.1866, destek2: 44.9733, destek3: 43.9466, direnc1: 48.4266, direnc2: 49.4533, direnc3: 50.6666, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "TTKOM", fark: -0.83, son: 61.55, pivot: 62.067, destek1: 60.833, destek2: 59.967, destek3: 58.733, direnc1: 62.933, direnc2: 64.167, direnc3: 65.033, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "TUPRS", fark: -1.01, son: 254, pivot: 256.583, destek1: 254.667, destek2: 250.833, destek3: 248.917, direnc1: 260.417, direnc2: 262.333, direnc3: 266.167, yorum: "İlk destek seviyesinin altına indi." },
  { sembol: "VAKBN", fark: -0.36, son: 30.94, pivot: 31.053, destek1: 30.247, destek2: 29.693, destek3: 28.887, direnc1: 31.607, direnc2: 32.413, direnc3: 32.967, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "YKBNK", fark: -1.46, son: 36.34, pivot: 36.88, destek1: 36.4, destek2: 35.98, destek3: 35.5, direnc1: 37.3, direnc2: 37.78, direnc3: 38.2, yorum: "İlk destek seviyesinin altına indi." },
];

function ReklamAlani({ variant = "yatay" }: { variant?: "yatay" | "icerik" }) {
  const alanClass =
    variant === "icerik"
      ? "min-h-[220px] sm:min-h-[250px] lg:min-h-[280px]"
      : "min-h-[100px] sm:min-h-[110px] lg:min-h-[120px]";

  return (
    <section aria-label="Reklam alanı" className={`w-full overflow-hidden rounded-2xl ${alanClass}`}>
      <div className={`w-full ${alanClass}`} />
    </section>
  );
}

function formatNumber(value: number) {
  return new Intl.NumberFormat("tr-TR", {
    minimumFractionDigits: Number.isInteger(value) ? 0 : 2,
    maximumFractionDigits: 5,
  }).format(value);
}

function getSatirRenk(son: number, pivot: number) {
  if (son > pivot) return "bg-green-100";
  if (son < pivot) return "bg-red-100";
  return "bg-white";
}

export default function PivotAnaliziPage() {
  return (
    <main className="min-h-screen bg-white px-4 py-6 md:px-6">
      <div className="mx-auto max-w-[1500px]">
        <div className="mb-6 flex flex-wrap gap-3">
          <Link href="/" className="inline-block rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100">
            Ana Sayfa
          </Link>

          <Link href="/borsa" className="inline-block rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100">
            Geri
          </Link>
        </div>

        <h1 className="mb-2 text-3xl font-bold text-zinc-900">Pivot Analizi</h1>

        <p className="mb-2 max-w-3xl text-base text-zinc-600">
          Pivot, destek ve direnç seviyelerine göre hazırlanan görünüm tablosu.
        </p>

        <div className="mb-8 text-sm font-semibold text-zinc-700">
          Güncelleme Tarihi: {new Date().toLocaleDateString("tr-TR")}
        </div>

        <section className="mb-8">
          <ReklamAlani variant="yatay" />
        </section>

        <section className="mb-8 overflow-hidden rounded-2xl border border-sky-200 bg-sky-50 shadow-sm">
          <div className="overflow-x-auto">
            <table className="min-w-[1200px] w-full border-collapse text-sm text-zinc-900">
              <thead className="bg-sky-100 text-zinc-800">
                <tr>
                  {["Sembol", "Pivota Göre Fark %", "Son", "Pivot", "Destek 1", "Destek 2", "Destek 3", "Direnç 1", "Direnç 2", "Direnç 3"].map((h) => (
                    <th key={h} className="border border-sky-200 px-3 py-2 text-left">{h}</th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {[xu100Pivot].map((row) => (
                  <tr key={row.sembol} className={getSatirRenk(row.son, row.pivot)}>
                    <td className="border border-sky-200 px-3 py-2 font-semibold">{row.sembol}</td>
                    <td className="border border-sky-200 px-3 py-2">{formatNumber(row.fark)}</td>
                    <td className="border border-sky-200 px-3 py-2">{formatNumber(row.son)}</td>
                    <td className="border border-sky-200 px-3 py-2">{formatNumber(row.pivot)}</td>
                    <td className="border border-sky-200 px-3 py-2">{formatNumber(row.destek1)}</td>
                    <td className="border border-sky-200 px-3 py-2">{formatNumber(row.destek2)}</td>
                    <td className="border border-sky-200 px-3 py-2">{formatNumber(row.destek3)}</td>
                    <td className="border border-sky-200 px-3 py-2">{formatNumber(row.direnc1)}</td>
                    <td className="border border-sky-200 px-3 py-2">{formatNumber(row.direnc2)}</td>
                    <td className="border border-sky-200 px-3 py-2">{formatNumber(row.direnc3)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="overflow-hidden rounded-2xl border border-sky-200 bg-sky-50 shadow-sm">
          <div className="overflow-x-auto">
            <table className="min-w-[1400px] w-full border-collapse text-sm text-zinc-900">
              <thead className="bg-sky-100 text-zinc-800">
                <tr>
                  {["Sembol", "Pivota Göre Fark %", "Son", "Pivot", "Destek 1", "Destek 2", "Destek 3", "Direnç 1", "Direnç 2", "Direnç 3"].map((h) => (
                    <th key={h} className="border border-sky-200 px-3 py-2 text-left">{h}</th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {pivotVerileri.map((row) => (
                  <tr key={row.sembol} className={getSatirRenk(row.son, row.pivot)}>
                    <td className="border border-sky-200 px-3 py-2 font-semibold">{row.sembol}</td>
                    <td className="border border-sky-200 px-3 py-2">{formatNumber(row.fark)}</td>
                    <td className="border border-sky-200 px-3 py-2">{formatNumber(row.son)}</td>
                    <td className="border border-sky-200 px-3 py-2">{formatNumber(row.pivot)}</td>
                    <td className="border border-sky-200 px-3 py-2">{formatNumber(row.destek1)}</td>
                    <td className="border border-sky-200 px-3 py-2">{formatNumber(row.destek2)}</td>
                    <td className="border border-sky-200 px-3 py-2">{formatNumber(row.destek3)}</td>
                    <td className="border border-sky-200 px-3 py-2">{formatNumber(row.direnc1)}</td>
                    <td className="border border-sky-200 px-3 py-2">{formatNumber(row.direnc2)}</td>
                    <td className="border border-sky-200 px-3 py-2">{formatNumber(row.direnc3)}</td>
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