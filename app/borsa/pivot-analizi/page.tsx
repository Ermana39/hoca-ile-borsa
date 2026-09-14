
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
  fark: -1.51,
  son: 14235.83,
  pivot: 14453.790,
  destek1: 14367.580,
  destek2: 14267.900,
  destek3: 14181.690,
  direnc1: 14553.470,
  direnc2: 14639.680,
  direnc3: 14739.360,
  yorum: "İkinci destek seviyesinin altına indi.",
};

const pivotVerileri: PivotRow[] = [
  { sembol: "AEFES", fark: -0.20, son: 19.70, pivot: 19.740, destek1: 19.52, destek2: 19.3, destek3: 19.08, direnc1: 19.960, direnc2: 20.180, direnc3: 20.400, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "AKBNK", fark: -0.25, son: 72.55, pivot: 72.733, destek1: 71.867, destek2: 71.033, destek3: 70.167, direnc1: 73.567, direnc2: 74.433, direnc3: 75.267, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "ASELS", fark: -5.78, son: 372.50, pivot: 395.333, destek1: 389.917, destek2: 386.083, destek3: 380.667, direnc1: 399.167, direnc2: 404.583, direnc3: 408.417, yorum: "Üçüncü destek seviyesinin altına indi." },
  { sembol: "ASTOR", fark: -3.06, son: 282.50, pivot: 291.417, destek1: 285.083, destek2: 276.167, destek3: 269.833, direnc1: 300.333, direnc2: 306.667, direnc3: 315.583, yorum: "İlk destek seviyesinin altına indi." },
  { sembol: "BIMAS", fark: -0.87, son: 429.75, pivot: 433.5, destek1: 429.5, destek2: 424.25, destek3: 420.25, direnc1: 438.75, direnc2: 442.75, direnc3: 448, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "DSTKF", fark: 5.40, son: 2605.00, pivot: 2471.5, destek1: 2415.5, destek2: 2306, destek3: 2250, direnc1: 2581, direnc2: 2637, direnc3: 2746.5, yorum: "İlk direnç seviyesinin üstüne çıktı." },
  { sembol: "EKGYO", fark: -1.91, son: 20.58, pivot: 20.9799, destek1: 20.6599, destek2: 20.3999, destek3: 20.07999, direnc1: 21.2399, direnc2: 21.5599, direnc3: 21.8199, yorum: "İlk destek seviyesinin altına indi." },
  { sembol: "ENKAI", fark: -1.58, son: 89.30, pivot: 90.733, destek1: 89.817, destek2: 88.383, destek3: 87.467, direnc1: 92.167, direnc2: 93.083, direnc3: 94.517, yorum: "İlk destek seviyesinin altına indi." },
  { sembol: "EREGL", fark: -1.42, son: 38.86, pivot: 39.42, destek1: 38.84, destek2: 38.28, destek3: 37.7, direnc1: 39.98, direnc2: 40.56, direnc3: 41.12, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "FROTO", fark: -1.01, son: 81.75, pivot: 82.583, destek1: 81.667, destek2: 80.483, destek3: 79.567, direnc1: 83.767, direnc2: 84.683, direnc3: 85.867, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "GARAN", fark: -0.37, son: 133.90, pivot: 134.400, destek1: 133.000, destek2: 131.800, destek3: 130.400, direnc1: 135.6, direnc2: 137.000, direnc3: 138.2, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "GUBRF", fark: -4.84, son: 478.75, pivot: 503.083, destek1: 497.667, destek2: 492.833, destek3: 487.417, direnc1: 507.917, direnc2: 513.333, direnc3: 518.167, yorum: "Üçüncü destek seviyesinin altına indi." },
  { sembol: "ISCTR", fark: -0.14, son: 13.84, pivot: 13.86, destek1: 13.75, destek2: 13.57, destek3: 13.46, direnc1: 14.04, direnc2: 14.15, direnc3: 14.33, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "KCHOL", fark: 0.22, son: 225.50, pivot: 225, destek1: 223.6, destek2: 221.7, destek3: 220.3, direnc1: 226.900, direnc2: 228.300, direnc3: 230.200, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "KRDMD", fark: -0.84, son: 45.50, pivot: 45.887, destek1: 45.213, destek2: 44.427, destek3: 43.753, direnc1: 46.673, direnc2: 47.347, direnc3: 48.133, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "MGROS", fark: -1.25, son: 538.50, pivot: 545.333, destek1: 539.167, destek2: 530.833, destek3: 524.667, direnc1: 553.667, direnc2: 559.833, direnc3: 568.167, yorum: "İlk destek seviyesinin altına indi." },
  { sembol: "PETKM", fark: -5.33, son: 23.66, pivot: 24.993, destek1: 24.147, destek2: 23.613, destek3: 22.767, direnc1: 25.527, direnc2: 26.373, direnc3: 26.907, yorum: "İlk destek seviyesinin altına indi." },
  { sembol: "PGSUS", fark: 1.60, son: 156.60, pivot: 154.133, destek1: 152.267, destek2: 150.333, destek3: 148.467, direnc1: 156.067, direnc2: 157.933, direnc3: 159.867, yorum: "İlk direnç seviyesinin üstüne çıktı." },
  { sembol: "SAHOL", fark: -0.21, son: 94.95, pivot: 95.15, destek1: 94.15, destek2: 93, destek3: 92, direnc1: 96.3, direnc2: 97.3, direnc3: 98.45, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "SASA", fark: 5.00, son: 2.94, pivot: 2.8, destek1: 2.700, destek2: 2.58, destek3: 2.480, direnc1: 2.920, direnc2: 3.02, direnc3: 3.14, yorum: "İlk direnç seviyesinin üstüne çıktı." },
  { sembol: "SISE", fark: -2.81, son: 43.52, pivot: 44.780, destek1: 43.560, destek2: 42.140, destek3: 40.920, direnc1: 46.1999, direnc2: 47.4199, direnc3: 48.8399, yorum: "İlk destek seviyesinin altına indi." },
  { sembol: "TAVHL", fark: -1.89, son: 268.50, pivot: 273.667, destek1: 272.083, destek2: 269.667, destek3: 268.083, direnc1: 276.083, direnc2: 277.667, direnc3: 280.083, yorum: "İkinci destek seviyesinin altına indi." },
  { sembol: "TCELL", fark: -1.00, son: 102.40, pivot: 103.433, destek1: 101.467, destek2: 99.233, destek3: 97.267, direnc1: 105.667, direnc2: 107.633, direnc3: 109.867, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "THYAO", fark: -1.64, son: 295.50, pivot: 300.417, destek1: 298.083, destek2: 295.917, destek3: 293.583, direnc1: 302.583, direnc2: 304.917, direnc3: 307.083, yorum: "İkinci destek seviyesinin altına indi." },
  { sembol: "TOASO", fark: -3.70, son: 284.25, pivot: 295.167, destek1: 290.583, destek2: 281.417, destek3: 276.833, direnc1: 304.333, direnc2: 308.917, direnc3: 318.083, yorum: "İlk destek seviyesinin altına indi." },
  { sembol: "TRALT", fark: -2.73, son: 52.25, pivot: 53.717, destek1: 52.533, destek2: 51.417, destek3: 50.233, direnc1: 54.833, direnc2: 56.017, direnc3: 57.133, yorum: "İlk destek seviyesinin altına indi." },
  { sembol: "TTKOM", fark: -2.57, son: 57.40, pivot: 58.9166, destek1: 56.9833, destek2: 53.1166, destek3: 51.1833, direnc1: 62.7833, direnc2: 64.7166, direnc3: 68.5833, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "TUPRS", fark: 0.18, son: 415.75, pivot: 415, destek1: 409, destek2: 404.5, destek3: 398.5, direnc1: 419.5, direnc2: 425.5, direnc3: 430, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "VAKBN", fark: -3.04, son: 35.74, pivot: 36.86, destek1: 35.640, destek2: 33.200, destek3: 31.980, direnc1: 39.3, direnc2: 40.52, direnc3: 42.96, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "YKBNK", fark: 0.20, son: 36.64, pivot: 36.567, destek1: 36.213, destek2: 35.727, destek3: 35.373, direnc1: 37.053, direnc2: 37.407, direnc3: 37.893, yorum: "Pivot değerinin üstünde seyrediyor." },
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