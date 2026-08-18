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
  fark: -0.09,
  son: 14127.98,
  pivot: 14140.760,
  destek1: 14044.630,
  destek2: 13957.200,
  destek3: 13861.070,
  direnc1: 14228.190,
  direnc2: 14324.320,
  direnc3: 14411.750,
  yorum: "Pivot değerinin altında seyrediyor.",
};

const pivotVerileri: PivotRow[] = [
  { sembol: "AEFES", fark: 0.16, son: 19.13, pivot: 19.1, destek1: 18.79, destek2: 18.63, destek3: 18.32, direnc1: 19.26, direnc2: 19.570, direnc3: 19.730, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "AKBNK", fark: -1.10, son: 67.65, pivot: 68.400, destek1: 67.6, destek2: 67.2, destek3: 66.4, direnc1: 68.800, direnc2: 69.600, direnc3: 70.000, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "ASELS", fark: -1.70, son: 381.25, pivot: 387.833, destek1: 381.667, destek2: 374.333, destek3: 368.167, direnc1: 395.167, direnc2: 401.333, direnc3: 408.667, yorum: "İlk destek seviyesinin altına indi." },
  { sembol: "ASTOR", fark: -5.97, son: 320.50, pivot: 340.8333, destek1: 330.9166, destek2: 322.3333, destek3: 312.4166, direnc1: 349.4166, direnc2: 359.3333, direnc3: 367.9166, yorum: "İkinci destek seviyesinin altına indi." },
  { sembol: "BIMAS", fark: 6.72, son: 405.00, pivot: 379.500, destek1: 375.750, destek2: 369.500, destek3: 365.750, direnc1: 385.750, direnc2: 389.500, direnc3: 395.750, yorum: "Üçüncü direnç seviyesinin üstüne çıktı." },
  { sembol: "DSTKF", fark: 3.54, son: 2035.00, pivot: 1965.333, destek1: 1929.667, destek2: 1858.333, destek3: 1822.667, direnc1: 2036.667, direnc2: 2072.333, direnc3: 2143.667, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "EKGYO", fark: 1.14, son: 18.70, pivot: 18.490, destek1: 18.120, destek2: 17.6299, destek3: 17.2599, direnc1: 18.980, direnc2: 19.350, direnc3: 19.840, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "ENKAI", fark: -1.62, son: 81.00, pivot: 82.3333, destek1: 77.6666, destek2: 75.1833, destek3: 70.5166, direnc1: 84.8166, direnc2: 89.4833, direnc3: 91.9666, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "EREGL", fark: -0.34, son: 37.70, pivot: 37.827, destek1: 37.513, destek2: 37.087, destek3: 36.773, direnc1: 38.253, direnc2: 38.567, direnc3: 38.993, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "FROTO", fark: -0.34, son: 78.90, pivot: 79.1666, destek1: 78.3833, destek2: 77.7666, destek3: 76.9833, direnc1: 79.7833, direnc2: 80.5666, direnc3: 81.1833, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "GARAN", fark: -0.49, son: 129.30, pivot: 129.933, destek1: 128.067, destek2: 127.133, destek3: 125.267, direnc1: 130.867, direnc2: 132.733, direnc3: 133.667, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "GUBRF", fark: -1.96, son: 429.00, pivot: 437.5833, destek1: 427.4166, destek2: 409.5833, destek3: 399.4166, direnc1: 455.4166, direnc2: 465.5833, direnc3: 483.4166, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "ISCTR", fark: -0.61, son: 12.38, pivot: 12.4566, destek1: 12.3433, destek2: 12.2866, destek3: 12.1733, direnc1: 12.5133, direnc2: 12.6266, direnc3: 12.6833, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "KCHOL", fark: 1.17, son: 207.90, pivot: 205.500, destek1: 202.900, destek2: 200.200, destek3: 197.600, direnc1: 208.200, direnc2: 210.800, direnc3: 213.500, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "KRDMD", fark: -0.83, son: 44.00, pivot: 44.3666, destek1: 43.1133, destek2: 40.6066, destek3: 39.3533, direnc1: 46.8733, direnc2: 48.1266, direnc3: 50.6333, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "MGROS", fark: 1.37, son: 568.00, pivot: 560.3333, destek1: 555.6666, destek2: 549.3333, destek3: 544.6666, direnc1: 566.6666, direnc2: 571.3333, direnc3: 577.6666, yorum: "İlk direnç seviyesinin üstüne çıktı." },
  { sembol: "PETKM", fark: 3.39, son: 19.82, pivot: 19.170, destek1: 18.950, destek2: 18.750, destek3: 18.530, direnc1: 19.370, direnc2: 19.590, direnc3: 19.790, yorum: "Üçüncü direnç seviyesinin üstüne çıktı." },
  { sembol: "PGSUS", fark: -1.54, son: 149.30, pivot: 151.633, destek1: 149.667, destek2: 148.133, destek3: 146.167, direnc1: 153.167, direnc2: 155.133, direnc3: 156.667, yorum: "İlk destek seviyesinin altına indi." },
  { sembol: "SAHOL", fark: -0.13, son: 88.95, pivot: 89.0666, destek1: 88.1833, destek2: 87.4666, destek3: 86.5833, direnc1: 89.7833, direnc2: 90.6666, direnc3: 91.3833, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "SASA", fark: -4.79, son: 2.25, pivot: 2.3633, destek1: 2.3066, destek2: 2.2733, destek3: 2.2166, direnc1: 2.3966, direnc2: 2.4533, direnc3: 2.4866, yorum: "İkinci destek seviyesinin altına indi." },
  { sembol: "SISE", fark: -2.54, son: 38.12, pivot: 39.1133, destek1: 38.1066, destek2: 37.5733, destek3: 36.5666, direnc1: 39.6466, direnc2: 40.6533, direnc3: 41.1866, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "TAVHL", fark: -1.49, son: 276.25, pivot: 280.417, destek1: 277.833, destek2: 276.167, destek3: 273.583, direnc1: 282.083, direnc2: 284.667, direnc3: 286.333, yorum: "İlk destek seviyesinin altına indi." },
  { sembol: "TCELL", fark: 0.36, son: 103.50, pivot: 103.133, destek1: 101.467, destek2: 100.033, destek3: 98.367, direnc1: 104.567, direnc2: 106.233, direnc3: 107.667, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "THYAO", fark: -0.83, son: 300.50, pivot: 303.000, destek1: 298.750, destek2: 296.500, destek3: 292.250, direnc1: 305.250, direnc2: 309.500, direnc3: 311.750, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "TOASO", fark: -0.53, son: 265.50, pivot: 266.917, destek1: 264.833, destek2: 262.917, destek3: 260.833, direnc1: 268.833, direnc2: 270.917, direnc3: 272.833, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "TRALT", fark: -2.23, son: 47.58, pivot: 48.6666, destek1: 47.8933, destek2: 46.6866, destek3: 45.9133, direnc1: 49.8733, direnc2: 50.6466, direnc3: 51.8533, yorum: "İlk destek seviyesinin altına indi." },
  { sembol: "TTKOM", fark: 0.25, son: 53.70, pivot: 53.567, destek1: 52.233, destek2: 51.517, destek3: 50.183, direnc1: 54.283, direnc2: 55.617, direnc3: 56.333, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "TUPRS", fark: 1.70, son: 374.00, pivot: 367.750, destek1: 362.000, destek2: 355.250, destek3: 349.500, direnc1: 374.500, direnc2: 380.250, direnc3: 387.000, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "VAKBN", fark: -1.15, son: 30.46, pivot: 30.813, destek1: 30.587, destek2: 30.373, destek3: 30.147, direnc1: 31.027, direnc2: 31.253, direnc3: 31.467, yorum: "İlk destek seviyesinin altına indi." },
  { sembol: "YKBNK", fark: -0.82, son: 34.86, pivot: 35.147, destek1: 34.673, destek2: 34.427, destek3: 33.953, direnc1: 35.393, direnc2: 35.867, direnc3: 36.113, yorum: "Pivot değerinin altında seyrediyor." },
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