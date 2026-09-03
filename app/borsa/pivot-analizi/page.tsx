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
  fark: -0.65,
  son: 13932.46,
  pivot: 14023.350,
  destek1: 13903.870,
  destek2: 13757.190,
  destek3: 13637.710,
  direnc1: 14170.030,
  direnc2: 14289.510,
  direnc3: 14436.190,
  yorum: "Pivot değerinin altında seyrediyor.",
};

const pivotVerileri: PivotRow[] = [
  { sembol: "AEFES", fark: 1.52, son: 18.21, pivot: 17.937, destek1: 17.793, destek2: 17.597, destek3: 17.453, direnc1: 18.133, direnc2: 18.277, direnc3: 18.473, yorum: "İlk direnç seviyesinin üstüne çıktı." },
  { sembol: "AKBNK", fark: 1.37, son: 71.55, pivot: 70.583, destek1: 69.467, destek2: 67.433, destek3: 66.317, direnc1: 72.617, direnc2: 73.733, direnc3: 75.767, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "ASELS", fark: -1.08, son: 380.25, pivot: 384.417, destek1: 377.083, destek2: 373.417, destek3: 366.083, direnc1: 388.083, direnc2: 395.417, direnc3: 399.083, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "ASTOR", fark: -6.55, son: 293.50, pivot: 314.083, destek1: 308.167, destek2: 300.333, destek3: 294.417, direnc1: 321.917, direnc2: 327.833, direnc3: 335.667, yorum: "Üçüncü destek seviyesinin altına indi." },
  { sembol: "BIMAS", fark: 1.75, son: 412.75, pivot: 405.667, destek1: 400.833, destek2: 395.417, destek3: 390.583, direnc1: 411.083, direnc2: 415.917, direnc3: 421.333, yorum: "İlk direnç seviyesinin üstüne çıktı." },
  { sembol: "DSTKF", fark: 3.48, son: 2250.00, pivot: 2174.333, destek1: 2116.667, destek2: 2017.333, destek3: 1959.667, direnc1: 2273.667, direnc2: 2331.333, direnc3: 2430.667, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "EKGYO", fark: -1.61, son: 19.51, pivot: 19.830, destek1: 19.560, destek2: 19.060, destek3: 18.790, direnc1: 20.330, direnc2: 20.600, direnc3: 21.100, yorum: "İlk destek seviyesinin altına indi." },
  { sembol: "ENKAI", fark: -0.15, son: 86.90, pivot: 87.033, destek1: 85.067, destek2: 83.333, destek3: 81.367, direnc1: 88.767, direnc2: 90.733, direnc3: 92.467, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "EREGL", fark: -2.73, son: 36.58, pivot: 37.607, destek1: 37.153, destek2: 36.707, destek3: 36.253, direnc1: 38.053, direnc2: 38.507, direnc3: 38.953, yorum: "İkinci destek seviyesinin altına indi." },
  { sembol: "FROTO", fark: -0.70, son: 75.65, pivot: 76.183, destek1: 75.467, destek2: 74.683, destek3: 73.967, direnc1: 76.967, direnc2: 77.683, direnc3: 78.467, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "GARAN", fark: 0.38, son: 131.40, pivot: 130.900, destek1: 129.100, destek2: 126.200, destek3: 124.400, direnc1: 133.800, direnc2: 135.600, direnc3: 138.500, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "GUBRF", fark: 2.21, son: 482.25, pivot: 471.833, destek1: 464.667, destek2: 453.583, destek3: 446.417, direnc1: 482.917, direnc2: 490.083, direnc3: 501.167, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "ISCTR", fark: 2.15, son: 12.95, pivot: 12.677, destek1: 12.503, destek2: 12.227, destek3: 12.053, direnc1: 12.953, direnc2: 13.127, direnc3: 13.403, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "KCHOL", fark: 2.11, son: 216.40, pivot: 211.933, destek1: 209.267, destek2: 205.533, destek3: 202.867, direnc1: 215.667, direnc2: 218.333, direnc3: 222.067, yorum: "İlk direnç seviyesinin üstüne çıktı." },
  { sembol: "KRDMD", fark: -2.51, son: 42.98, pivot: 44.087, destek1: 43.473, destek2: 42.347, destek3: 41.733, direnc1: 45.213, direnc2: 45.827, direnc3: 46.953, yorum: "İlk destek seviyesinin altına indi." },
  { sembol: "MGROS", fark: -1.46, son: 516.00, pivot: 523.667, destek1: 516.333, destek2: 507.667, destek3: 500.333, direnc1: 532.333, direnc2: 539.667, direnc3: 548.333, yorum: "İlk destek seviyesinin altına indi." },
  { sembol: "PETKM", fark: 0.53, son: 20.22, pivot: 20.113, destek1: 19.427, destek2: 18.903, destek3: 18.217, direnc1: 20.637, direnc2: 21.323, direnc3: 21.847, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "PGSUS", fark: -1.77, son: 148.20, pivot: 150.867, destek1: 147.033, destek2: 145.067, destek3: 141.233, direnc1: 152.833, direnc2: 156.667, direnc3: 158.633, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "SAHOL", fark: 1.47, son: 93.00, pivot: 91.650, destek1: 90.250, destek2: 88.000, destek3: 86.600, direnc1: 93.900, direnc2: 95.300, direnc3: 97.550, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "SASA", fark: -2.92, son: 2.23, pivot: 2.297, destek1: 2.243, destek2: 2.217, destek3: 2.163, direnc1: 2.323, direnc2: 2.377, direnc3: 2.403, yorum: "İlk destek seviyesinin altına indi." },
  { sembol: "SISE", fark: -0.72, son: 38.68, pivot: 38.960, destek1: 38.520, destek2: 37.940, destek3: 37.500, direnc1: 39.540, direnc2: 39.980, direnc3: 40.560, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "TAVHL", fark: 2.47, son: 266.25, pivot: 259.833, destek1: 256.667, destek2: 252.333, destek3: 249.167, direnc1: 264.167, direnc2: 267.333, direnc3: 271.667, yorum: "İlk direnç seviyesinin üstüne çıktı." },
  { sembol: "TCELL", fark: 0.07, son: 96.60, pivot: 96.533, destek1: 95.067, destek2: 92.933, destek3: 91.467, direnc1: 98.667, direnc2: 100.133, direnc3: 102.267, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "THYAO", fark: -1.05, son: 291.50, pivot: 294.583, destek1: 288.167, destek2: 284.833, destek3: 278.417, direnc1: 297.917, direnc2: 304.333, direnc3: 307.667, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "TOASO", fark: -0.51, son: 260.50, pivot: 261.833, destek1: 255.667, destek2: 250.833, destek3: 244.667, direnc1: 266.667, direnc2: 272.833, direnc3: 277.667, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "TRALT", fark: 3.88, son: 51.70, pivot: 49.767, destek1: 48.333, destek2: 46.767, destek3: 45.333, direnc1: 51.333, direnc2: 52.767, direnc3: 54.333, yorum: "İlk direnç seviyesinin üstüne çıktı." },
  { sembol: "TTKOM", fark: 0.38, son: 50.80, pivot: 50.607, destek1: 49.913, destek2: 49.027, destek3: 48.333, direnc1: 51.493, direnc2: 52.187, direnc3: 53.073, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "TUPRS", fark: -1.08, son: 391.00, pivot: 395.250, destek1: 387.500, destek2: 382.750, destek3: 375.000, direnc1: 400.000, direnc2: 407.750, direnc3: 412.500, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "VAKBN", fark: 1.34, son: 33.74, pivot: 33.293, destek1: 32.507, destek2: 30.933, destek3: 30.147, direnc1: 34.867, direnc2: 35.653, direnc3: 37.227, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "YKBNK", fark: 0.19, son: 35.90, pivot: 35.833, destek1: 35.087, destek2: 34.093, destek3: 33.347, direnc1: 36.827, direnc2: 37.573, direnc3: 38.567, yorum: "Pivot değerinin üstünde seyrediyor." },
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