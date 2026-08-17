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
  fark: -0.28,
  son: 14132.06,
  pivot: 14171.700,
  destek1: 14093.400,
  destek2: 14014.550,
  destek3: 13936.250,
  direnc1: 14250.550,
  direnc2: 14328.850,
  direnc3: 14407.700,
  yorum: "Pivot değerinin altında seyrediyor.",
};

const pivotVerileri: PivotRow[] = [
  { sembol: "AEFES", fark: -1.76, son: 18.95, pivot: 19.29, destek1: 19.14, destek2: 18.95, destek3: 18.800, direnc1: 19.48, direnc2: 19.63, direnc3: 19.82, yorum: "İlk destek seviyesinin altına indi." },
  { sembol: "AKBNK", fark: -1.45, son: 68.00, pivot: 69.000, destek1: 68.35, destek2: 67.9, destek3: 67.25, direnc1: 69.45, direnc2: 70.1, direnc3: 70.55, yorum: "İlk destek seviyesinin altına indi." },
  { sembol: "ASELS", fark: -1.31, son: 389.00, pivot: 394.167, destek1: 380.833, destek2: 374.167, destek3: 360.833, direnc1: 400.833, direnc2: 414.167, direnc3: 420.833, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "ASTOR", fark: -0.85, son: 339.50, pivot: 342.417, destek1: 336.083, destek2: 329.917, destek3: 323.583, direnc1: 348.583, direnc2: 354.917, direnc3: 361.083, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "BIMAS", fark: 1.64, son: 382.00, pivot: 375.833, destek1: 373.167, destek2: 371.583, destek3: 368.917, direnc1: 377.417, direnc2: 380.083, direnc3: 381.667, yorum: "Üçüncü direnç seviyesinin üstüne çıktı." },
  { sembol: "DSTKF", fark: 4.95, son: 2001.00, pivot: 1906.667, destek1: 1893.333, destek2: 1876.667, destek3: 1863.333, direnc1: 1923.333, direnc2: 1936.667, direnc3: 1953.333, yorum: "Üçüncü direnç seviyesinin üstüne çıktı." },
  { sembol: "EKGYO", fark: 1.35, son: 18.61, pivot: 18.363, destek1: 18.157, destek2: 18.013, destek3: 17.807, direnc1: 18.507, direnc2: 18.713, direnc3: 18.857, yorum: "İlk direnç seviyesinin üstüne çıktı." },
  { sembol: "ENKAI", fark: -7.94, son: 80.15, pivot: 87.067, destek1: 86.433, destek2: 85.217, destek3: 84.583, direnc1: 88.283, direnc2: 88.917, direnc3: 90.133, yorum: "Üçüncü destek seviyesinin altına indi." },
  { sembol: "EREGL", fark: 0.21, son: 37.94, pivot: 37.86, destek1: 36.7, destek2: 36.02, destek3: 34.86, direnc1: 38.54, direnc2: 39.7, direnc3: 40.38, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "FROTO", fark: -0.67, son: 79.00, pivot: 79.533, destek1: 78.367, destek2: 77.633, destek3: 76.467, direnc1: 80.267, direnc2: 81.433, direnc3: 82.167, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "GARAN", fark: -1.15, son: 129.00, pivot: 130.5, destek1: 129.700, destek2: 128.400, destek3: 127.600, direnc1: 131.8, direnc2: 132.6, direnc3: 133.9, yorum: "İlk destek seviyesinin altına indi." },
  { sembol: "GUBRF", fark: 6.80, son: 445.25, pivot: 416.917, destek1: 411.583, destek2: 403.917, destek3: 398.583, direnc1: 424.583, direnc2: 429.917, direnc3: 437.583, yorum: "Üçüncü direnç seviyesinin üstüne çıktı." },
  { sembol: "ISCTR", fark: -1.12, son: 12.40, pivot: 12.540, destek1: 12.470, destek2: 12.410, destek3: 12.340, direnc1: 12.600, direnc2: 12.670, direnc3: 12.730, yorum: "İkinci destek seviyesinin altına indi." },
  { sembol: "KCHOL", fark: 0.05, son: 205.60, pivot: 205.5, destek1: 203.8, destek2: 200.4, destek3: 198.7, direnc1: 208.900, direnc2: 210.600, direnc3: 214.000, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "KRDMD", fark: 9.58, son: 45.62, pivot: 41.633, destek1: 40.787, destek2: 40.093, destek3: 39.247, direnc1: 42.327, direnc2: 43.173, direnc3: 43.867, yorum: "Üçüncü direnç seviyesinin üstüne çıktı." },
  { sembol: "MGROS", fark: 1.08, son: 562.00, pivot: 556, destek1: 549, destek2: 543, destek3: 536, direnc1: 562, direnc2: 569, direnc3: 575, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "PETKM", fark: 0.10, son: 19.15, pivot: 19.130, destek1: 18.860, destek2: 18.56, destek3: 18.29, direnc1: 19.430, direnc2: 19.700, direnc3: 20.000, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "PGSUS", fark: -0.44, son: 151.20, pivot: 151.867, destek1: 150.433, destek2: 149.167, destek3: 147.733, direnc1: 153.133, direnc2: 154.567, direnc3: 155.833, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "SAHOL", fark: -0.67, son: 88.90, pivot: 89.5, destek1: 88.5, destek2: 87.600, destek3: 86.600, direnc1: 90.4, direnc2: 91.4, direnc3: 92.3, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "SASA", fark: -3.31, son: 2.34, pivot: 2.42, destek1: 2.36, destek2: 2.33, destek3: 2.27, direnc1: 2.45, direnc2: 2.510, direnc3: 2.540, yorum: "İlk destek seviyesinin altına indi." },
  { sembol: "SISE", fark: -7.49, son: 38.64, pivot: 41.767, destek1: 40.953, destek2: 40.507, destek3: 39.693, direnc1: 42.213, direnc2: 43.027, direnc3: 43.473, yorum: "Üçüncü destek seviyesinin altına indi." },
  { sembol: "TAVHL", fark: 0.51, son: 279.50, pivot: 278.083, destek1: 273.917, destek2: 271.833, destek3: 267.667, direnc1: 280.167, direnc2: 284.333, direnc3: 286.417, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "TCELL", fark: -1.28, son: 102.90, pivot: 104.233, destek1: 103.067, destek2: 102.033, destek3: 100.867, direnc1: 105.267, direnc2: 106.433, direnc3: 107.467, yorum: "İlk destek seviyesinin altına indi." },
  { sembol: "THYAO", fark: -1.85, son: 301.00, pivot: 306.667, destek1: 303.833, destek2: 302.417, destek3: 299.583, direnc1: 308.083, direnc2: 310.917, direnc3: 312.333, yorum: "İkinci destek seviyesinin altına indi." },
  { sembol: "TOASO", fark: -1.02, son: 266.75, pivot: 269.5, destek1: 264, destek2: 259.5, destek3: 255, direnc1: 274, direnc2: 279.5, direnc3: 284, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "TRALT", fark: 3.44, son: 49.10, pivot: 47.467, destek1: 46.553, destek2: 45.887, destek3: 44.973, direnc1: 48.133, direnc2: 49.047, direnc3: 49.713, yorum: "İkinci direnç seviyesinin üstüne çıktı." },
  { sembol: "TTKOM", fark: -3.32, son: 52.95, pivot: 54.767, destek1: 54.033, destek2: 53.567, destek3: 52.833, direnc1: 55.233, direnc2: 55.967, direnc3: 56.433, yorum: "İkinci destek seviyesinin altına indi." },
  { sembol: "TUPRS", fark: 3.20, son: 368.75, pivot: 357.333, destek1: 350.167, destek2: 338.583, destek3: 331.417, direnc1: 368.917, direnc2: 376.083, direnc3: 387.667, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "VAKBN", fark: -0.37, son: 30.80, pivot: 30.913, destek1: 30.467, destek2: 30.173, destek3: 29.727, direnc1: 31.207, direnc2: 31.653, direnc3: 31.947, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "YKBNK", fark: -1.50, son: 34.92, pivot: 35.453, destek1: 35.087, destek2: 34.753, destek3: 34.387, direnc1: 35.787, direnc2: 36.153, direnc3: 36.487, yorum: "İlk destek seviyesinin altına indi." },
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