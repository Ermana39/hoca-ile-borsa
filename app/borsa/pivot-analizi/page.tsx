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
  fark: 0.01,
  son: 14501.49,
  pivot: 14499.760,
  destek1: 14398.510,
  destek2: 14282.200,
  destek3: 14180.950,
  direnc1: 14616.070,
  direnc2: 14717.320,
  direnc3: 14833.630,
  yorum: "Pivot değerinin üstünde seyrediyor.",
};

const pivotVerileri: PivotRow[] = [
  { sembol: "AEFES", fark: -1.88, son: 18.94, pivot: 19.303, destek1: 19.067, destek2: 18.893, destek3: 18.657, direnc1: 19.477, direnc2: 19.713, direnc3: 19.887, yorum: "İlk destek seviyesinin altına indi." },
  { sembol: "AKBNK", fark: 2.75, son: 72.10, pivot: 70.167, destek1: 68.833, destek2: 67.967, destek3: 66.633, direnc1: 71.033, direnc2: 72.367, direnc3: 73.233, yorum: "İlk direnç seviyesinin üstüne çıktı." },
  { sembol: "ASELS", fark: -0.99, son: 399.75, pivot: 403.75, destek1: 399.5, destek2: 395.75, destek3: 391.5, direnc1: 407.5, direnc2: 411.75, direnc3: 415.5, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "ASTOR", fark: 1.79, son: 341.25, pivot: 335.25, destek1: 328.5, destek2: 321.25, destek3: 314.5, direnc1: 342.5, direnc2: 349.25, direnc3: 356.5, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "BIMAS", fark: 0.04, son: 412.25, pivot: 412.083, destek1: 406.667, destek2: 401.083, destek3: 395.667, direnc1: 417.667, direnc2: 423.083, direnc3: 428.667, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "DSTKF", fark: 3.24, son: 2200.00, pivot: 2131.000, destek1: 2103.000, destek2: 2056.000, destek3: 2028.000, direnc1: 2178.000, direnc2: 2206.000, direnc3: 2253.000, yorum: "İlk direnç seviyesinin üstüne çıktı." },
  { sembol: "EKGYO", fark: 0.81, son: 20.72, pivot: 20.553, destek1: 20.307, destek2: 19.893, destek3: 19.647, direnc1: 20.967, direnc2: 21.213, direnc3: 21.627, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "ENKAI", fark: -0.66, son: 82.95, pivot: 83.5, destek1: 82.8, destek2: 82.35, destek3: 81.65, direnc1: 83.950, direnc2: 84.650, direnc3: 85.100, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "EREGL", fark: -0.50, son: 38.18, pivot: 38.373, destek1: 37.727, destek2: 37.313, destek3: 36.667, direnc1: 38.787, direnc2: 39.433, direnc3: 39.847, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "FROTO", fark: -0.31, son: 80.10, pivot: 80.350, destek1: 79.5, destek2: 78.8, destek3: 77.95, direnc1: 81.050, direnc2: 81.900, direnc3: 82.600, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "GARAN", fark: 0.97, son: 131.60, pivot: 130.333, destek1: 128.767, destek2: 127.633, destek3: 126.067, direnc1: 131.467, direnc2: 133.033, direnc3: 134.167, yorum: "İlk direnç seviyesinin üstüne çıktı." },
  { sembol: "GUBRF", fark: 3.87, son: 492.25, pivot: 473.917, destek1: 465.583, destek2: 455.417, destek3: 447.083, direnc1: 484.083, direnc2: 492.417, direnc3: 502.583, yorum: "İlk direnç seviyesinin üstüne çıktı." },
  { sembol: "ISCTR", fark: 1.21, son: 12.59, pivot: 12.44, destek1: 12.3, destek2: 12.21, destek3: 12.07, direnc1: 12.53, direnc2: 12.670, direnc3: 12.760, yorum: "İlk direnç seviyesinin üstüne çıktı." },
  { sembol: "KCHOL", fark: -1.03, son: 218.80, pivot: 221.067, destek1: 218.333, destek2: 214.267, destek3: 211.533, direnc1: 225.133, direnc2: 227.867, direnc3: 231.933, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "KRDMD", fark: 0.43, son: 45.20, pivot: 45.007, destek1: 44.413, destek2: 43.847, destek3: 43.253, direnc1: 45.573, direnc2: 46.167, direnc3: 46.733, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "MGROS", fark: -0.96, son: 565.00, pivot: 570.5, destek1: 565.0, destek2: 557.0, destek3: 551.5, direnc1: 578.5, direnc2: 584.0, direnc3: 592.0, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "PETKM", fark: 0.84, son: 20.80, pivot: 20.627, destek1: 20.353, destek2: 20.127, destek3: 19.853, direnc1: 20.853, direnc2: 21.127, direnc3: 21.353, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "PGSUS", fark: -0.24, son: 149.60, pivot: 149.967, destek1: 148.733, destek2: 147.967, destek3: 146.733, direnc1: 150.733, direnc2: 151.967, direnc3: 152.733, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "SAHOL", fark: 2.61, son: 94.25, pivot: 91.85, destek1: 90.85, destek2: 89.3, destek3: 88.3, direnc1: 93.400, direnc2: 94.400, direnc3: 95.950, yorum: "İlk direnç seviyesinin üstüne çıktı." },
  { sembol: "SASA", fark: 0.56, son: 2.33, pivot: 2.317, destek1: 2.273, destek2: 2.227, destek3: 2.183, direnc1: 2.363, direnc2: 2.407, direnc3: 2.453, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "SISE", fark: -0.85, son: 39.74, pivot: 40.08, destek1: 39.600, destek2: 39.300, destek3: 38.820, direnc1: 40.38, direnc2: 40.86, direnc3: 41.16, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "TAVHL", fark: -0.93, son: 276.00, pivot: 278.583, destek1: 272.917, destek2: 269.833, destek3: 264.167, direnc1: 281.667, direnc2: 287.333, direnc3: 290.417, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "TCELL", fark: -0.99, son: 103.10, pivot: 104.133, destek1: 102.767, destek2: 101.233, destek3: 99.867, direnc1: 105.667, direnc2: 107.033, direnc3: 108.567, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "THYAO", fark: -0.50, son: 300.50, pivot: 302.000, destek1: 299.25, destek2: 297.5, destek3: 294.75, direnc1: 303.75, direnc2: 306.5, direnc3: 308.25, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "TOASO", fark: -0.72, son: 277.25, pivot: 279.25, destek1: 272.75, destek2: 264.25, destek3: 257.75, direnc1: 287.75, direnc2: 294.25, direnc3: 302.75, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "TRALT", fark: 0.62, son: 56.40, pivot: 56.050, destek1: 54.650, destek2: 52.900, destek3: 51.500, direnc1: 57.800, direnc2: 59.200, direnc3: 60.950, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "TTKOM", fark: -1.35, son: 53.40, pivot: 54.133, destek1: 52.617, destek2: 51.833, destek3: 50.317, direnc1: 54.917, direnc2: 56.433, direnc3: 57.217, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "TUPRS", fark: -0.25, son: 400.50, pivot: 401.5, destek1: 396.25, destek2: 385.75, destek3: 380.5, direnc1: 412.0, direnc2: 417.25, direnc3: 427.75, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "VAKBN", fark: -0.28, son: 31.38, pivot: 31.467, destek1: 31.133, destek2: 30.887, destek3: 30.553, direnc1: 31.713, direnc2: 32.047, direnc3: 32.293, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "YKBNK", fark: 3.83, son: 36.52, pivot: 35.173, destek1: 34.767, destek2: 34.433, destek3: 34.027, direnc1: 35.507, direnc2: 35.913, direnc3: 36.247, yorum: "Üçüncü direnç seviyesinin üstüne çıktı." },
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