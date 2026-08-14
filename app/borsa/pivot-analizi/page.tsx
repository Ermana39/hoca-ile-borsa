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
  fark: 0.21,
  son: 14172.26,
  pivot: 14141.950,
  destek1: 14055.080,
  destek2: 13977.940,
  destek3: 13891.070,
  direnc1: 14219.090,
  direnc2: 14305.960,
  direnc3: 14383.100,
  yorum: "Pivot değerinin üstünde seyrediyor.",
};

const pivotVerileri: PivotRow[] = [
  { sembol: "AEFES", fark: 0.82, son: 19.33, pivot: 19.173, destek1: 18.817, destek2: 18.383, destek3: 18.027, direnc1: 19.607, direnc2: 19.963, direnc3: 20.397, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "AKBNK", fark: -0.43, son: 68.80, pivot: 69.100, destek1: 68.1499, destek2: 67.2499, destek3: 66.2999, direnc1: 70.0, direnc2: 70.950, direnc3: 71.850, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "ASELS", fark: -0.62, son: 387.50, pivot: 389.917, destek1: 384.083, destek2: 372.417, destek3: 366.583, direnc1: 401.583, direnc2: 407.417, direnc3: 419.083, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "ASTOR", fark: -0.96, son: 342.25, pivot: 345.5833, destek1: 338.1666, destek2: 330.8333, destek3: 323.4166, direnc1: 352.9166, direnc2: 360.3333, direnc3: 367.6666, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "BIMAS", fark: -0.64, son: 374.75, pivot: 377.1666, destek1: 372.3333, destek2: 368.1666, destek3: 363.3333, direnc1: 381.3333, direnc2: 386.1666, direnc3: 390.3333, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "DSTKF", fark: 0.67, son: 1910.00, pivot: 1897.333, destek1: 1861.667, destek2: 1833.333, destek3: 1797.667, direnc1: 1925.667, direnc2: 1961.333, direnc3: 1989.667, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "EKGYO", fark: -1.13, son: 18.30, pivot: 18.5099, destek1: 18.1999, destek2: 17.9999, destek3: 17.6899, direnc1: 18.7099, direnc2: 19.01999, direnc3: 19.2199, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "ENKAI", fark: 1.72, son: 87.65, pivot: 86.1666, destek1: 85.1833, destek2: 84.5166, destek3: 83.5333, direnc1: 86.8333, direnc2: 87.8166, direnc3: 88.4833, yorum: "İlk direnç seviyesinin üstüne çıktı." },
  { sembol: "EREGL", fark: -1.63, son: 37.38, pivot: 38.00001271, destek1: 37.440, destek2: 36.640, destek3: 36.080, direnc1: 38.800, direnc2: 39.360, direnc3: 40.160, yorum: "İlk destek seviyesinin altına indi." },
  { sembol: "FROTO", fark: -0.65, son: 79.10, pivot: 79.617, destek1: 79.133, destek2: 78.567, destek3: 78.083, direnc1: 80.183, direnc2: 80.667, direnc3: 81.233, yorum: "İlk destek seviyesinin altına indi." },
  { sembol: "GARAN", fark: 0.72, son: 131.00, pivot: 130.067, destek1: 128.13, destek2: 126.667, destek3: 124.733, direnc1: 131.533, direnc2: 133.467, direnc3: 134.933, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "GUBRF", fark: -0.40, son: 419.25, pivot: 420.9166, destek1: 413.3333, destek2: 408.1666, destek3: 400.5833, direnc1: 426.0833, direnc2: 433.6666, direnc3: 438.8333, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "ISCTR", fark: 0.16, son: 12.53, pivot: 12.510, destek1: 12.37, destek2: 12.23, destek3: 12.09, direnc1: 12.650, direnc2: 12.790, direnc3: 12.930, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "KCHOL", fark: 1.29, son: 207.20, pivot: 204.567, destek1: 199.633, destek2: 196.867, destek3: 191.933, direnc1: 207.333, direnc2: 212.267, direnc3: 215.033, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "KRDMD", fark: 0.18, son: 41.48, pivot: 41.407, destek1: 40.713, destek2: 39.667, destek3: 38.973, direnc1: 42.453, direnc2: 43.147, direnc3: 44.193, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "MGROS", fark: -0.69, son: 555.00, pivot: 558.833, destek1: 544.167, destek2: 536.333, destek3: 521.667, direnc1: 566.667, direnc2: 581.333, direnc3: 589.167, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "PETKM", fark: 2.42, son: 19.16, pivot: 18.707, destek1: 18.573, destek2: 18.337, destek3: 18.203, direnc1: 18.943, direnc2: 19.077, direnc3: 19.313, yorum: "İkinci direnç seviyesinin üstüne çıktı." },
  { sembol: "PGSUS", fark: 0.22, son: 151.70, pivot: 151.3666, destek1: 149.8333, destek2: 147.4666, destek3: 145.9333, direnc1: 153.7333, direnc2: 155.2666, direnc3: 157.6333, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "SAHOL", fark: -0.39, son: 89.40, pivot: 89.75, destek1: 87.8, destek2: 86.8, destek3: 84.85, direnc1: 90.75, direnc2: 92.700, direnc3: 93.700, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "SASA", fark: -3.24, son: 2.39, pivot: 2.470, destek1: 2.410, destek2: 2.370, destek3: 2.310, direnc1: 2.5099, direnc2: 2.5699, direnc3: 2.6099, yorum: "İlk destek seviyesinin altına indi." },
  { sembol: "SISE", fark: 0.08, son: 41.40, pivot: 41.367, destek1: 40.853, destek2: 40.067, destek3: 39.553, direnc1: 42.153, direnc2: 42.667, direnc3: 43.453, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "TAVHL", fark: -1.08, son: 276.00, pivot: 279.0, destek1: 275.75, destek2: 272.75, destek3: 269.5, direnc1: 282.0, direnc2: 285.25, direnc3: 288.25, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "TCELL", fark: 0.29, son: 104.10, pivot: 103.8, destek1: 102.300, destek2: 101.500, destek3: 100.000, direnc1: 104.6, direnc2: 106.1, direnc3: 106.9, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "THYAO", fark: -1.03, son: 305.25, pivot: 308.4166, destek1: 306.3333, destek2: 304.6666, destek3: 302.5833, direnc1: 310.0833, direnc2: 312.1666, direnc3: 313.8333, yorum: "İlk destek seviyesinin altına indi." },
  { sembol: "TOASO", fark: -0.77, son: 268.50, pivot: 270.583, destek1: 266.167, destek2: 262.583, destek3: 258.167, direnc1: 274.167, direnc2: 278.583, direnc3: 282.167, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "TRALT", fark: -1.36, son: 47.22, pivot: 47.873, destek1: 47.027, destek2: 45.953, destek3: 45.107, direnc1: 48.947, direnc2: 49.793, direnc3: 50.867, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "TTKOM", fark: -2.45, son: 54.50, pivot: 55.8666, destek1: 54.0333, destek2: 53.1166, destek3: 51.2833, direnc1: 56.7833, direnc2: 58.6166, direnc3: 59.5333, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "TUPRS", fark: 3.73, son: 361.75, pivot: 348.750, destek1: 340.500, destek2: 335.000, destek3: 326.750, direnc1: 354.250, direnc2: 362.500, direnc3: 368.000, yorum: "İlk direnç seviyesinin üstüne çıktı." },
  { sembol: "VAKBN", fark: -0.99, son: 30.76, pivot: 31.067, destek1: 30.653, destek2: 30.267, destek3: 29.853, direnc1: 31.453, direnc2: 31.867, direnc3: 32.253, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "YKBNK", fark: 0.08, son: 35.42, pivot: 35.393, destek1: 34.727, destek2: 33.913, destek3: 33.247, direnc1: 36.207, direnc2: 36.873, direnc3: 37.687, yorum: "Pivot değerinin üstünde seyrediyor." },
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