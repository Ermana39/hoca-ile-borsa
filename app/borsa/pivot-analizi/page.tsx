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
  fark: 0.25,
  son: 14641.56,
  pivot: 14604.620,
  destek1: 14510.280,
  destek2: 14445.050,
  destek3: 14350.710,
  direnc1: 14669.850,
  direnc2: 14764.190,
  direnc3: 14829.420,
  yorum: "Pivot değerinin üstünde seyrediyor.",
};

const pivotVerileri: PivotRow[] = [
  { sembol: "AEFES", fark: -1.57, son: 18.41, pivot: 18.703, destek1: 18.297, destek2: 18.063, destek3: 17.657, direnc1: 18.937, direnc2: 19.343, direnc3: 19.577, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "AKBNK", fark: 0.00, son: 73.20, pivot: 73.200, destek1: 72.100, destek2: 71.350, destek3: 70.250, direnc1: 73.950, direnc2: 75.050, direnc3: 75.800, yorum: "Pivot değerine eşit." },
  { sembol: "ASELS", fark: 0.56, son: 404.00, pivot: 401.750, destek1: 395.500, destek2: 387.250, destek3: 381.000, direnc1: 410.000, direnc2: 416.250, direnc3: 424.500, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "ASTOR", fark: 0.26, son: 349.25, pivot: 348.333, destek1: 338.917, destek2: 328.833, destek3: 319.417, direnc1: 358.417, direnc2: 367.833, direnc3: 377.917, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "BIMAS", fark: -0.04, son: 415.50, pivot: 415.667, destek1: 410.833, destek2: 407.917, destek3: 403.083, direnc1: 418.583, direnc2: 423.417, direnc3: 426.333, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "DSTKF", fark: -13.49, son: 1965.00, pivot: 2271.333, destek1: 2094.667, destek2: 2060.333, destek3: 1829.667, direnc1: 2359.667, direnc2: 2536.333, direnc3: 2624.667, yorum: "İkinci destek seviyesinin altına indi." },
  { sembol: "EKGYO", fark: 0.26, son: 20.62, pivot: 20.567, destek1: 20.333, destek2: 20.147, destek3: 19.913, direnc1: 20.753, direnc2: 20.987, direnc3: 21.173, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "ENKAI", fark: 1.56, son: 89.00, pivot: 87.633, destek1: 86.817, destek2: 86.183, destek3: 85.367, direnc1: 88.267, direnc2: 89.083, direnc3: 89.717, yorum: "İlk direnç seviyesinin üstüne çıktı." },
  { sembol: "EREGL", fark: 1.14, son: 39.16, pivot: 38.720, destek1: 38.340, destek2: 38.080, destek3: 37.700, direnc1: 38.980, direnc2: 39.360, direnc3: 39.620, yorum: "İlk direnç seviyesinin üstüne çıktı." },
  { sembol: "FROTO", fark: -0.88, son: 78.40, pivot: 79.100, destek1: 77.700, destek2: 76.950, destek3: 75.550, direnc1: 79.850, direnc2: 81.250, direnc3: 82.000, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "GARAN", fark: 0.15, son: 133.80, pivot: 133.600, destek1: 131.600, destek2: 130.200, destek3: 128.200, direnc1: 135.000, direnc2: 137.000, direnc3: 138.400, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "GUBRF", fark: 1.77, son: 497.75, pivot: 489.083, destek1: 483.167, destek2: 478.333, destek3: 472.417, direnc1: 493.917, direnc2: 499.833, direnc3: 504.667, yorum: "İlk direnç seviyesinin üstüne çıktı." },
  { sembol: "ISCTR", fark: -0.31, son: 12.79, pivot: 12.830, destek1: 12.620, destek2: 12.490, destek3: 12.280, direnc1: 12.960, direnc2: 13.170, direnc3: 13.300, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "KCHOL", fark: -0.34, son: 214.00, pivot: 214.733, destek1: 212.867, destek2: 211.533, destek3: 209.667, direnc1: 216.067, direnc2: 217.933, direnc3: 219.267, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "KRDMD", fark: 0.14, son: 46.62, pivot: 46.553, destek1: 45.707, destek2: 44.853, destek3: 44.007, direnc1: 47.407, direnc2: 48.253, direnc3: 49.107, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "MGROS", fark: -0.80, son: 558.00, pivot: 562.500, destek1: 559.500, destek2: 556.000, destek3: 553.000, direnc1: 566.000, direnc2: 569.000, direnc3: 572.500, yorum: "İlk destek seviyesinin altına indi." },
  { sembol: "PETKM", fark: 0.27, son: 20.04, pivot: 19.987, destek1: 19.653, destek2: 19.427, destek3: 19.093, direnc1: 20.213, direnc2: 20.547, direnc3: 20.773, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "PGSUS", fark: -0.88, son: 150.80, pivot: 152.133, destek1: 149.867, destek2: 148.233, destek3: 145.967, direnc1: 153.767, direnc2: 156.033, direnc3: 157.667, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "SAHOL", fark: -0.34, son: 93.65, pivot: 93.967, destek1: 93.383, destek2: 93.017, destek3: 92.433, direnc1: 94.333, direnc2: 94.917, direnc3: 95.283, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "SASA", fark: 0.55, son: 2.39, pivot: 2.377, destek1: 2.333, destek2: 2.287, destek3: 2.243, direnc1: 2.423, direnc2: 2.467, direnc3: 2.513, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "SISE", fark: 0.02, son: 40.14, pivot: 40.133, destek1: 39.787, destek2: 39.533, destek3: 39.187, direnc1: 40.387, direnc2: 40.733, direnc3: 40.987, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "TAVHL", fark: 0.09, son: 283.00, pivot: 282.750, destek1: 280.000, destek2: 277.000, destek3: 274.250, direnc1: 285.750, direnc2: 288.500, direnc3: 291.500, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "TCELL", fark: 0.32, son: 103.50, pivot: 103.167, destek1: 101.533, destek2: 100.267, destek3: 98.633, direnc1: 104.433, direnc2: 106.067, direnc3: 107.333, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "THYAO", fark: 0.11, son: 307.50, pivot: 307.167, destek1: 303.333, destek2: 299.417, destek3: 295.583, direnc1: 311.083, direnc2: 314.917, direnc3: 318.833, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "TOASO", fark: -0.43, son: 272.00, pivot: 273.167, destek1: 270.083, destek2: 266.667, destek3: 263.583, direnc1: 276.583, direnc2: 279.667, direnc3: 283.083, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "TRALT", fark: -1.07, son: 53.95, pivot: 54.533, destek1: 53.417, destek2: 52.533, destek3: 51.417, direnc1: 55.417, direnc2: 56.533, direnc3: 57.417, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "TTKOM", fark: -0.15, son: 53.50, pivot: 53.583, destek1: 52.817, destek2: 52.183, destek3: 51.417, direnc1: 54.217, direnc2: 54.983, direnc3: 55.617, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "TUPRS", fark: 3.64, son: 396.00, pivot: 382.083, destek1: 377.417, destek2: 374.083, destek3: 369.417, direnc1: 385.417, direnc2: 390.083, direnc3: 393.417, yorum: "Üçüncü direnç seviyesinin üstüne çıktı." },
  { sembol: "VAKBN", fark: 3.83, son: 33.58, pivot: 32.340, destek1: 31.800, destek2: 31.400, destek3: 30.860, direnc1: 32.740, direnc2: 33.280, direnc3: 33.680, yorum: "İkinci direnç seviyesinin üstüne çıktı." },
  { sembol: "YKBNK", fark: 0.58, son: 37.22, pivot: 37.007, destek1: 36.513, destek2: 36.167, destek3: 35.673, direnc1: 37.353, direnc2: 37.847, direnc3: 38.193, yorum: "Pivot değerinin üstünde seyrediyor." },
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