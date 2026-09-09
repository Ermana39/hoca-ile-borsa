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
  { sembol: "AEFES", fark: 2.01, son: 19.46, pivot: 19.077, destek1: 18.863, destek2: 18.467, destek3: 18.253, direnc1: 19.473, direnc2: 19.687, direnc3: 20.083, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "AKBNK", fark: -1.46, son: 72.95, pivot: 74.033, destek1: 73.117, destek2: 71.283, destek3: 70.367, direnc1: 75.867, direnc2: 76.783, direnc3: 78.617, yorum: "İlk destek seviyesinin altına indi." },
  { sembol: "ASELS", fark: 3.49, son: 402.25, pivot: 388.667, destek1: 385.333, destek2: 380.667, destek3: 377.333, direnc1: 393.333, direnc2: 396.667, direnc3: 401.333, yorum: "Üçüncü direnç seviyesinin üstüne çıktı." },
  { sembol: "ASTOR", fark: -0.14, son: 299.75, pivot: 300.167, destek1: 296.583, destek2: 292.417, destek3: 288.833, direnc1: 304.333, direnc2: 307.917, direnc3: 312.083, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "BIMAS", fark: 2.37, son: 427.50, pivot: 417.583, destek1: 414.667, destek2: 408.833, destek3: 405.917, direnc1: 423.417, direnc2: 426.333, direnc3: 432.167, yorum: "İkinci direnç seviyesinin üstüne çıktı." },
  { sembol: "DSTKF", fark: 2.40, son: 2470.00, pivot: 2412.000, destek1: 2364.000, destek2: 2268.000, destek3: 2220.000, direnc1: 2508.000, direnc2: 2556.000, direnc3: 2652.000, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "EKGYO", fark: 11.08, son: 22.48, pivot: 20.237, destek1: 19.993, destek2: 19.547, destek3: 19.303, direnc1: 20.683, direnc2: 20.927, direnc3: 21.373, yorum: "Üçüncü direnç seviyesinin üstüne çıktı." },
  { sembol: "ENKAI", fark: 1.46, son: 90.35, pivot: 89.050, destek1: 88.450, destek2: 87.250, destek3: 86.650, direnc1: 90.250, direnc2: 90.850, direnc3: 92.050, yorum: "İlk direnç seviyesinin üstüne çıktı." },
  { sembol: "EREGL", fark: -0.90, son: 39.08, pivot: 39.433, destek1: 38.507, destek2: 37.093, destek3: 36.167, direnc1: 40.847, direnc2: 41.773, direnc3: 43.187, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "FROTO", fark: 2.75, son: 83.95, pivot: 81.700, destek1: 80.600, destek2: 78.400, destek3: 77.300, direnc1: 83.900, direnc2: 85.000, direnc3: 87.200, yorum: "İlk direnç seviyesinin üstüne çıktı." },
  { sembol: "GARAN", fark: -0.22, son: 134.30, pivot: 134.600, destek1: 133.200, destek2: 130.400, destek3: 129.000, direnc1: 137.400, direnc2: 138.800, direnc3: 141.600, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "GUBRF", fark: 2.30, son: 512.00, pivot: 500.500, destek1: 496.000, destek2: 488.000, destek3: 483.500, direnc1: 508.500, direnc2: 513.000, direnc3: 521.000, yorum: "İlk direnç seviyesinin üstüne çıktı." },
  { sembol: "ISCTR", fark: 0.12, son: 13.92, pivot: 13.9033, destek1: 13.4566, destek2: 12.5633, destek3: 12.1166, direnc1: 14.7966, direnc2: 15.2433, direnc3: 16.1366, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "KCHOL", fark: 0.58, son: 223.70, pivot: 222.400, destek1: 220.000, destek2: 215.200, destek3: 212.800, direnc1: 227.200, direnc2: 229.600, direnc3: 234.400, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "KRDMD", fark: 4.35, son: 47.48, pivot: 45.500, destek1: 45.020, destek2: 44.060, destek3: 43.580, direnc1: 46.460, direnc2: 46.940, direnc3: 47.900, yorum: "İkinci direnç seviyesinin üstüne çıktı." },
  { sembol: "MGROS", fark: -0.06, son: 533.00, pivot: 533.333, destek1: 527.667, destek2: 516.333, destek3: 510.667, direnc1: 544.667, direnc2: 550.333, direnc3: 561.667, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "PETKM", fark: 9.19, son: 25.90, pivot: 23.720, destek1: 23.180, destek2: 22.100, destek3: 21.560, direnc1: 24.800, direnc2: 25.340, direnc3: 26.420, yorum: "İkinci direnç seviyesinin üstüne çıktı." },
  { sembol: "PGSUS", fark: 0.91, son: 154.70, pivot: 153.300, destek1: 151.100, destek2: 146.700, destek3: 144.500, direnc1: 157.700, direnc2: 159.900, direnc3: 164.300, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "SAHOL", fark: 0.75, son: 96.05, pivot: 95.333, destek1: 94.167, destek2: 91.833, destek3: 90.667, direnc1: 97.667, direnc2: 98.833, direnc3: 101.167, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "SASA", fark: 1.11, son: 2.73, pivot: 2.700, destek1: 2.640, destek2: 2.520, destek3: 2.460, direnc1: 2.820, direnc2: 2.880, direnc3: 3.000, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "SISE", fark: 0.90, son: 44.86, pivot: 44.460, destek1: 43.100, destek2: 40.380, destek3: 39.020, direnc1: 47.180, direnc2: 48.540, direnc3: 51.260, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "TAVHL", fark: 1.10, son: 276.00, pivot: 273.000, destek1: 270.750, destek2: 266.250, destek3: 264.000, direnc1: 277.500, direnc2: 279.750, direnc3: 284.250, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "TCELL", fark: 1.44, son: 101.80, pivot: 100.350, destek1: 99.100, destek2: 96.600, destek3: 95.350, direnc1: 102.850, direnc2: 104.100, direnc3: 106.600, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "THYAO", fark: -0.36, son: 301.00, pivot: 302.083, destek1: 298.667, destek2: 292.333, destek3: 288.917, direnc1: 308.417, direnc2: 311.833, direnc3: 318.167, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "TOASO", fark: 1.33, son: 292.75, pivot: 288.917, destek1: 286.083, destek2: 280.417, destek3: 277.583, direnc1: 294.583, direnc2: 297.417, direnc3: 303.083, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "TRALT", fark: 3.06, son: 53.90, pivot: 52.300, destek1: 51.550, destek2: 50.100, destek3: 49.350, direnc1: 53.750, direnc2: 54.500, direnc3: 55.950, yorum: "İlk direnç seviyesinin üstüne çıktı." },
  { sembol: "TTKOM", fark: 3.01, son: 55.40, pivot: 53.783, destek1: 52.917, destek2: 51.333, destek3: 50.467, direnc1: 55.367, direnc2: 56.233, direnc3: 57.817, yorum: "İlk direnç seviyesinin üstüne çıktı." },
  { sembol: "TUPRS", fark: 4.83, son: 414.25, pivot: 395.167, destek1: 384.833, destek2: 375.167, destek3: 364.833, direnc1: 404.833, direnc2: 415.167, direnc3: 424.833, yorum: "İlk direnç seviyesinin üstüne çıktı." },
  { sembol: "VAKBN", fark: -0.09, son: 35.52, pivot: 35.553, destek1: 34.467, destek2: 32.293, destek3: 31.207, direnc1: 37.727, direnc2: 38.813, direnc3: 40.987, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "YKBNK", fark: -1.31, son: 36.60, pivot: 37.087, destek1: 36.553, destek2: 35.487, destek3: 34.953, direnc1: 38.153, direnc2: 38.687, direnc3: 39.753, yorum: "Pivot değerinin altında seyrediyor." },
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