export const metadata = {
  title: "Pivot Analizi | Hoca İle Borsa",
  description:
    "Pivot, destek ve direnç seviyelerine göre hisselerin teknik görünümünü tablo halinde inceleyin.",
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
  fark: -0.93,
  son: 13704.52,
  pivot: 13833.960,
  destek1: 13756.820,
  destek2: 13702.030,
  destek3: 13624.990,
  direnc1: 13888.650,
  direnc2: 13965.690,
  direnc3: 14020.480,
  yorum: "İlk destek seviyesinin altına indi.",
};

const pivotVerileri: PivotRow[] = [
  { sembol: "AEFES", fark: -3.72, son: 21.02, pivot: 21.833, destek1: 21.367, destek2: 21.013, destek3: 20.547, direnc1: 22.187, direnc2: 22.653, direnc3: 23.007, yorum: "İlk destek seviyesinin altına indi." },
  { sembol: "AKBNK", fark: -1.34, son: 66.15, pivot: 67.05, destek1: 66.200, destek2: 65.600, destek3: 64.750, direnc1: 67.65, direnc2: 68.5, direnc3: 69.1, yorum: "İlk destek seviyesinin altına indi." },
  { sembol: "ASELS", fark: 0.05, son: 356.25, pivot: 356.083, destek1: 349.667, destek2: 343.083, destek3: 336.667, direnc1: 362.667, direnc2: 369.083, direnc3: 375.667, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "ASTOR", fark: -2.32, son: 301.75, pivot: 308.917, destek1: 301.333, destek2: 296.917, destek3: 289.333, direnc1: 313.333, direnc2: 320.917, direnc3: 325.333, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "BIMAS", fark: -2.33, son: 377.25, pivot: 386.25, destek1: 381.5, destek2: 378.75, destek3: 374, direnc1: 389, direnc2: 393.75, direnc3: 396.5, yorum: "İkinci destek seviyesinin altına indi." },
  { sembol: "DSTKF", fark: -1.16, son: 1768, pivot: 1788.667, destek1: 1724.333, destek2: 1687.667, destek3: 1623.333, direnc1: 1825.333, direnc2: 1889.667, direnc3: 1926.333, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "EKGYO", fark: 0.34, son: 17.95, pivot: 17.890, destek1: 17.530, destek2: 17.110, destek3: 16.750, direnc1: 18.310, direnc2: 18.670, direnc3: 19.090, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "ENKAI", fark: -0.58, son: 85.90, pivot: 86.400, destek1: 85.35, destek2: 84.5, destek3: 83.45, direnc1: 87.25, direnc2: 88.300, direnc3: 89.150, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "EREGL", fark: -1.60, son: 36.86, pivot: 37.46, destek1: 36.200, destek2: 35.520, destek3: 34.260, direnc1: 38.14, direnc2: 39.4, direnc3: 40.08, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "FROTO", fark: 1.37, son: 78.85, pivot: 77.7833, destek1: 76.7666, destek2: 76.1333, destek3: 75.1166, direnc1: 78.4166, direnc2: 79.4333, direnc3: 80.06667, yorum: "İlk direnç seviyesinin üstüne çıktı." },
  { sembol: "GARAN", fark: -0.42, son: 126.50, pivot: 127.033, destek1: 125.967, destek2: 125.333, destek3: 124.267, direnc1: 127.667, direnc2: 128.733, direnc3: 129.367, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "GUBRF", fark: -4.45, son: 422.75, pivot: 442.4166, destek1: 433.5833, destek2: 425.4166, destek3: 416.5833, direnc1: 450.5833, direnc2: 459.4166, direnc3: 467.5833, yorum: "İkinci destek seviyesinin altına indi." },
  { sembol: "ISCTR", fark: -1.48, son: 12.02, pivot: 12.200, destek1: 11.990, destek2: 11.870, destek3: 11.660, direnc1: 12.320, direnc2: 12.530, direnc3: 12.650, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "KCHOL", fark: -1.48, son: 199.90, pivot: 202.900, destek1: 200.200, destek2: 196.500, destek3: 193.800, direnc1: 206.6, direnc2: 209.3, direnc3: 213.000, yorum: "İlk destek seviyesinin altına indi." },
  { sembol: "KRDMD", fark: 1.10, son: 40.46, pivot: 40.020, destek1: 39.060, destek2: 38.000, destek3: 37.040, direnc1: 41.080, direnc2: 42.040, direnc3: 43.100, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "MGROS", fark: -4.33, son: 630.00, pivot: 658.5, destek1: 646, destek2: 634, destek3: 621.5, direnc1: 670.5, direnc2: 683, direnc3: 695, yorum: "İkinci destek seviyesinin altına indi." },
  { sembol: "PETKM", fark: -1.85, son: 18.45, pivot: 18.797, destek1: 18.453, destek2: 18.137, destek3: 17.793, direnc1: 19.113, direnc2: 19.457, direnc3: 19.773, yorum: "İlk destek seviyesinin altına indi." },
  { sembol: "PGSUS", fark: -1.53, son: 149.70, pivot: 152.0333, destek1: 150.1666, destek2: 149.0333, destek3: 147.1666, direnc1: 153.1666, direnc2: 155.03333, direnc3: 156.1666, yorum: "İlk destek seviyesinin altına indi." },
  { sembol: "SAHOL", fark: -1.26, son: 87.60, pivot: 88.717, destek1: 87.783, destek2: 87.067, destek3: 86.133, direnc1: 89.433, direnc2: 90.367, direnc3: 91.083, yorum: "İlk destek seviyesinin altına indi." },
  { sembol: "SASA", fark: -2.74, son: 2.36, pivot: 2.4266, destek1: 2.2333, destek2: 2.1366, destek3: 1.9433, direnc1: 2.5233, direnc2: 2.7166, direnc3: 2.8133, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "SISE", fark: -1.54, son: 40.84, pivot: 41.48, destek1: 41.08, destek2: 40.68, destek3: 40.28, direnc1: 41.880, direnc2: 42.28, direnc3: 42.680, yorum: "İlk destek seviyesinin altına indi." },
  { sembol: "TAVHL", fark: 0.64, son: 274.50, pivot: 272.750, destek1: 267.750, destek2: 261.000, destek3: 256.000, direnc1: 279.500, direnc2: 284.500, direnc3: 291.250, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "TCELL", fark: -2.37, son: 103.10, pivot: 105.6, destek1: 104.6, destek2: 103.9, destek3: 102.9, direnc1: 106.3, direnc2: 107.300, direnc3: 108.000, yorum: "İkinci destek seviyesinin altına indi." },
  { sembol: "THYAO", fark: -1.10, son: 301.00, pivot: 304.3333, destek1: 300.9166, destek2: 298.8333, destek3: 295.4166, direnc1: 306.4166, direnc2: 309.8333, direnc3: 311.9166, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "TOASO", fark: 0.95, son: 267.00, pivot: 264.5, destek1: 260.75, destek2: 257.25, destek3: 253.5, direnc1: 268, direnc2: 271.75, direnc3: 275.25, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "TRALT", fark: -1.64, son: 48.88, pivot: 49.693, destek1: 47.787, destek2: 46.693, destek3: 44.787, direnc1: 50.787, direnc2: 52.693, direnc3: 53.787, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "TTKOM", fark: -0.03, son: 55.45, pivot: 55.467, destek1: 54.483, destek2: 53.517, destek3: 52.533, direnc1: 56.433, direnc2: 57.417, direnc3: 58.383, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "TUPRS", fark: 0.32, son: 336.50, pivot: 335.4166, destek1: 328.3333, destek2: 316.6666, destek3: 309.5833, direnc1: 347.08333, direnc2: 354.1666, direnc3: 365.8333, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "VAKBN", fark: 0.14, son: 29.08, pivot: 29.040, destek1: 28.620, destek2: 28.160, destek3: 27.740, direnc1: 29.500, direnc2: 29.920, direnc3: 30.380, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "YKBNK", fark: 0.04, son: 34.06, pivot: 34.047, destek1: 33.673, destek2: 33.347, destek3: 32.973, direnc1: 34.373, direnc2: 34.747, direnc3: 35.073, yorum: "Pivot değerinin üstünde seyrediyor." },
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
                  <th className="border border-sky-200 px-3 py-2 text-left">
                    Sembol
                  </th>
                  <th className="border border-sky-200 px-3 py-2 text-left">
                    Pivota Göre Fark %
                  </th>
                  <th className="border border-sky-200 px-3 py-2 text-left">
                    Son
                  </th>
                  <th className="border border-sky-200 px-3 py-2 text-left">
                    Pivot
                  </th>
                  <th className="border border-sky-200 px-3 py-2 text-left">
                    Destek 1
                  </th>
                  <th className="border border-sky-200 px-3 py-2 text-left">
                    Destek 2
                  </th>
                  <th className="border border-sky-200 px-3 py-2 text-left">
                    Destek 3
                  </th>
                  <th className="border border-sky-200 px-3 py-2 text-left">
                    Direnç 1
                  </th>
                  <th className="border border-sky-200 px-3 py-2 text-left">
                    Direnç 2
                  </th>
                  <th className="border border-sky-200 px-3 py-2 text-left">
                    Direnç 3
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr className={getSatirRenk(xu100Pivot.son, xu100Pivot.pivot)}>
                  <td className="border border-sky-200 px-3 py-2 font-semibold">
                    {xu100Pivot.sembol}
                  </td>
                  <td className="border border-sky-200 px-3 py-2">
                    {formatNumber(xu100Pivot.fark)}
                  </td>
                  <td className="border border-sky-200 px-3 py-2">
                    {formatNumber(xu100Pivot.son)}
                  </td>
                  <td className="border border-sky-200 px-3 py-2">
                    {formatNumber(xu100Pivot.pivot)}
                  </td>
                  <td className="border border-sky-200 px-3 py-2">
                    {formatNumber(xu100Pivot.destek1)}
                  </td>
                  <td className="border border-sky-200 px-3 py-2">
                    {formatNumber(xu100Pivot.destek2)}
                  </td>
                  <td className="border border-sky-200 px-3 py-2">
                    {formatNumber(xu100Pivot.destek3)}
                  </td>
                  <td className="border border-sky-200 px-3 py-2">
                    {formatNumber(xu100Pivot.direnc1)}
                  </td>
                  <td className="border border-sky-200 px-3 py-2">
                    {formatNumber(xu100Pivot.direnc2)}
                  </td>
                  <td className="border border-sky-200 px-3 py-2">
                    {formatNumber(xu100Pivot.direnc3)}
                  </td>
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
                  <th className="border border-sky-200 px-3 py-2 text-left">
                    Sembol
                  </th>
                  <th className="border border-sky-200 px-3 py-2 text-left">
                    Pivota Göre Fark %
                  </th>
                  <th className="border border-sky-200 px-3 py-2 text-left">
                    Son
                  </th>
                  <th className="border border-sky-200 px-3 py-2 text-left">
                    Pivot
                  </th>
                  <th className="border border-sky-200 px-3 py-2 text-left">
                    Destek 1
                  </th>
                  <th className="border border-sky-200 px-3 py-2 text-left">
                    Destek 2
                  </th>
                  <th className="border border-sky-200 px-3 py-2 text-left">
                    Destek 3
                  </th>
                  <th className="border border-sky-200 px-3 py-2 text-left">
                    Direnç 1
                  </th>
                  <th className="border border-sky-200 px-3 py-2 text-left">
                    Direnç 2
                  </th>
                  <th className="border border-sky-200 px-3 py-2 text-left">
                    Direnç 3
                  </th>
                </tr>
              </thead>

              <tbody>
                {pivotVerileri.map((row) => (
                  <tr
                    key={row.sembol}
                    className={getSatirRenk(row.son, row.pivot)}
                  >
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

        <section className="mt-12 rounded-2xl border border-zinc-200 bg-white p-6">
          <h2 className="mb-4 text-2xl font-bold text-zinc-900">
            Pivot Analizi Hakkında
          </h2>

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