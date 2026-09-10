import { seoAciklamasi } from "@/lib/seo-metadata";
export const metadata = {
  title: "BIST Pivot Analizi ve Destek Direnç Seviyeleri",
  description:
    seoAciklamasi("Pivot, destek ve direnç seviyelerine göre hisselerin teknik görünümünü tablo halinde inceleyin.", "Güncel tablolar, karşılaştırmalar ve yatırımcıların takip edebileceği temel göstergeler birlikte sunulur."),
  alternates: {
    canonical: "https://www.hocaileborsa.com/borsa/pivot-analizi",
  },
};

import Link from "@/components/NoPrefetchLink";

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

const xu100Pivot: PivotRow = {
  sembol: "XU100",
  fark: 1.47,
  son: 14505.48,
  pivot: 14295.470,
  destek1: 14185.690,
  destek2: 13966.130,
  destek3: 13856.350,
  direnc1: 14515.030,
  direnc2: 14624.810,
  direnc3: 14844.370,
  yorum: "Pivot değerinin üstünde seyrediyor.",
};

const pivotVerileri: PivotRow[] = [
  { sembol: "AEFES", fark: 0.39, son: 19.58, pivot: 19.503, destek1: 19.207, destek2: 18.953, destek3: 18.657, direnc1: 19.757, direnc2: 20.053, direnc3: 20.307, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "AKBNK", fark: -2.52, son: 72.10, pivot: 73.967, destek1: 71.633, destek2: 70.317, destek3: 67.983, direnc1: 75.283, direnc2: 77.617, direnc3: 78.933, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "ASELS", fark: -0.33, son: 398.50, pivot: 399.833, destek1: 393.417, destek2: 384.583, destek3: 378.167, direnc1: 408.667, direnc2: 415.083, direnc3: 423.917, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "ASTOR", fark: -5.44, son: 285.25, pivot: 301.667, destek1: 296.583, destek2: 293.417, destek3: 288.333, direnc1: 304.833, direnc2: 309.917, direnc3: 313.083, yorum: "Üçüncü destek seviyesinin altına indi." },
  { sembol: "BIMAS", fark: 1.34, son: 430.00, pivot: 424.333, destek1: 420.167, destek2: 412.833, destek3: 408.667, direnc1: 431.667, direnc2: 435.833, direnc3: 443.167, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "DSTKF", fark: -3.28, son: 2410.00, pivot: 2491.833, destek1: 2431.167, destek2: 2392.333, destek3: 2331.667, direnc1: 2530.667, direnc2: 2591.333, direnc3: 2630.167, yorum: "İlk destek seviyesinin altına indi." },
  { sembol: "EKGYO", fark: -4.47, son: 20.80, pivot: 21.7733, destek1: 21.0666, destek2: 19.6533, destek3: 18.9466, direnc1: 23.1866, direnc2: 23.8933, direnc3: 25.3066, yorum: "İlk destek seviyesinin altına indi." },
  { sembol: "ENKAI", fark: -0.50, son: 89.75, pivot: 90.200, destek1: 89.050, destek2: 87.750, destek3: 86.600, direnc1: 91.500, direnc2: 92.650, direnc3: 93.950, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "EREGL", fark: -1.12, son: 38.98, pivot: 39.420, destek1: 38.560, destek2: 38.040, destek3: 37.180, direnc1: 39.940, direnc2: 40.800, direnc3: 41.320, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "FROTO", fark: -1.94, son: 81.90, pivot: 83.517, destek1: 82.183, destek2: 80.417, destek3: 79.083, direnc1: 85.283, direnc2: 86.617, direnc3: 88.383, yorum: "İlk destek seviyesinin altına indi." },
  { sembol: "GARAN", fark: -1.40, son: 133.40, pivot: 135.300, destek1: 132.800, destek2: 131.300, destek3: 128.800, direnc1: 136.800, direnc2: 139.300, direnc3: 140.800, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "GUBRF", fark: -1.30, son: 504.50, pivot: 511.167, destek1: 502.833, destek2: 493.667, destek3: 485.333, direnc1: 520.333, direnc2: 528.667, direnc3: 537.833, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "ISCTR", fark: -3.08, son: 13.74, pivot: 14.177, destek1: 13.603, destek2: 13.287, destek3: 12.713, direnc1: 14.493, direnc2: 15.067, direnc3: 15.383, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "KCHOL", fark: -0.75, son: 224.30, pivot: 226.000, destek1: 219.500, destek2: 215.300, destek3: 208.800, direnc1: 230.200, direnc2: 236.700, direnc3: 240.900, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "KRDMD", fark: -1.37, son: 46.50, pivot: 47.147, destek1: 45.853, destek2: 44.227, destek3: 42.933, direnc1: 48.773, direnc2: 50.067, direnc3: 51.693, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "MGROS", fark: 1.15, son: 542.00, pivot: 535.833, destek1: 528.167, destek2: 523.333, destek3: 515.667, direnc1: 540.667, direnc2: 548.333, direnc3: 553.167, yorum: "İlk direnç seviyesinin üstüne çıktı." },
  { sembol: "PETKM", fark: -1.99, son: 24.98, pivot: 25.487, destek1: 24.293, destek2: 22.687, destek3: 21.493, direnc1: 27.093, direnc2: 28.287, direnc3: 29.893, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "PGSUS", fark: -0.88, son: 153.30, pivot: 154.667, destek1: 152.333, destek2: 150.367, destek3: 148.233, direnc1: 156.833, direnc2: 158.967, direnc3: 161.133, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "SAHOL", fark: -1.98, son: 94.80, pivot: 96.717, destek1: 95.033, destek2: 94.017, destek3: 92.333, direnc1: 97.733, direnc2: 99.417, direnc3: 100.433, yorum: "İlk destek seviyesinin altına indi." },
  { sembol: "SASA", fark: -0.72, son: 2.77, pivot: 2.790, destek1: 2.650, destek2: 2.570, destek3: 2.430, direnc1: 2.870, direnc2: 3.010, direnc3: 3.090, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "SISE", fark: -3.86, son: 44.06, pivot: 45.827, destek1: 43.373, destek2: 41.887, destek3: 39.433, direnc1: 47.313, direnc2: 49.767, direnc3: 51.253, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "TAVHL", fark: -0.45, son: 275.25, pivot: 276.500, destek1: 272.000, destek2: 268.000, destek3: 263.500, direnc1: 280.500, direnc2: 285.000, direnc3: 289.000, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "TCELL", fark: -0.55, son: 101.60, pivot: 102.167, destek1: 100.633, destek2: 99.467, destek3: 97.933, direnc1: 103.333, direnc2: 104.867, direnc3: 106.033, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "THYAO", fark: -1.18, son: 299.25, pivot: 302.833, destek1: 298.917, destek2: 296.833, destek3: 292.917, direnc1: 304.917, direnc2: 308.833, direnc3: 310.917, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "TOASO", fark: -0.20, son: 290.75, pivot: 291.333, destek1: 287.417, destek2: 282.083, destek3: 278.167, direnc1: 296.667, direnc2: 300.583, direnc3: 305.917, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "TRALT", fark: -2.84, son: 52.45, pivot: 53.983, destek1: 53.117, destek2: 52.333, destek3: 51.467, direnc1: 54.767, direnc2: 55.633, direnc3: 56.417, yorum: "İlk destek seviyesinin altına indi." },
  { sembol: "TTKOM", fark: 0.18, son: 55.35, pivot: 55.250, destek1: 54.200, destek2: 53.000, destek3: 51.950, direnc1: 56.450, direnc2: 57.500, direnc3: 58.700, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "TUPRS", fark: 1.63, son: 416.75, pivot: 410.083, destek1: 402.167, destek2: 390.083, destek3: 382.167, direnc1: 422.167, direnc2: 430.083, direnc3: 442.167, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "VAKBN", fark: -4.19, son: 34.62, pivot: 36.133, destek1: 34.847, destek2: 34.173, destek3: 32.887, direnc1: 36.807, direnc2: 38.093, direnc3: 38.767, yorum: "İlk destek seviyesinin altına indi." },
  { sembol: "YKBNK", fark: -2.13, son: 36.20, pivot: 36.987, destek1: 36.093, destek2: 35.587, destek3: 34.693, direnc1: 37.493, direnc2: 38.387, direnc3: 38.893, yorum: "Pivot değerinin altında seyrediyor." },
];

function formatNumber(value: number) {
  const hasDecimal = !Number.isInteger(value);

  return new Intl.NumberFormat("tr-TR", {
    minimumFractionDigits: hasDecimal ? 2 : 0,
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
                <tr className={getSatirRenk(xu100Pivot.son, xu100Pivot.pivot)}>
                  <td className="border border-sky-200 px-3 py-2 font-semibold">{xu100Pivot.sembol}</td>
                  <td className="border border-sky-200 px-3 py-2">{formatNumber(xu100Pivot.fark)}</td>
                  <td className="border border-sky-200 px-3 py-2">{formatNumber(xu100Pivot.son)}</td>
                  <td className="border border-sky-200 px-3 py-2">{formatNumber(xu100Pivot.pivot)}</td>
                  <td className="border border-sky-200 px-3 py-2">{formatNumber(xu100Pivot.destek1)}</td>
                  <td className="border border-sky-200 px-3 py-2">{formatNumber(xu100Pivot.destek2)}</td>
                  <td className="border border-sky-200 px-3 py-2">{formatNumber(xu100Pivot.destek3)}</td>
                  <td className="border border-sky-200 px-3 py-2">{formatNumber(xu100Pivot.direnc1)}</td>
                  <td className="border border-sky-200 px-3 py-2">{formatNumber(xu100Pivot.direnc2)}</td>
                  <td className="border border-sky-200 px-3 py-2">{formatNumber(xu100Pivot.direnc3)}</td>
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

        <section className="mt-12 rounded-2xl border border-zinc-200 bg-white p-6">
          <h2 className="mb-4 text-2xl font-bold text-zinc-900">Pivot Analizi Hakkında</h2>

          <p className="mb-4 leading-7 text-zinc-700">
            Pivot analizi sayfası, Borsa İstanbul’da işlem gören hisselerin günlük
            pivot, destek ve direnç seviyelerini takip etmek isteyen yatırımcılar
            için hazırlanmıştır. Bu sayfada hisselerin pivot noktasına göre mevcut
            fiyat konumu, destek seviyeleri ve direnç seviyeleri detaylı şekilde
            incelenebilir.
          </p>

          <p className="mb-4 leading-7 text-zinc-700">
            Pivot noktaları, teknik analizde gün içi yön tayini ve önemli fiyat
            bölgelerini belirlemek için sık kullanılan göstergeler arasında yer alır.
            Hisselerin pivot seviyesinin üstünde veya altında işlem görmesi,
            yatırımcılar tarafından kısa vadeli trend hakkında önemli bir sinyal
            olarak değerlendirilir.
          </p>

          <p className="mb-4 leading-7 text-zinc-700">
            Destek ve direnç seviyeleri sayesinde fiyatın hangi bölgelerde tepki
            verebileceği daha net görülebilir. Bu sayfadaki pivot analiz tablosu,
            hem XU100 endeksi hem de hisse bazlı teknik görünüm takibi yapmak
            isteyen kullanıcılar için hızlı ve pratik bir referans sunar.
          </p>

          <p className="leading-7 text-zinc-700">
            Güncel pivot seviyeleri, destek direnç noktaları, hisse bazlı teknik
            görünüm analizleri ve Borsa İstanbul pivot tablosu için bu sayfayı
            düzenli olarak takip edebilirsiniz.
          </p>
        </section>
      </div>
    </main>
  );
}