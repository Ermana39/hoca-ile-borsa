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
  fark: 0.73,
  son: 14514.82,
  pivot: 14409.270,
  destek1: 14256.030,
  destek2: 14115.520,
  destek3: 13962.280,
  direnc1: 14549.780,
  direnc2: 14703.020,
  direnc3: 14843.530,
  yorum: "Pivot değerinin üstünde seyrediyor.",
};

const pivotVerileri: PivotRow[] = [
  { sembol: "AEFES", fark: 0.14, son: 19.24, pivot: 19.213, destek1: 18.937, destek2: 18.723, destek3: 18.447, direnc1: 19.427, direnc2: 19.703, direnc3: 19.917, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "AKBNK", fark: -0.33, son: 69.70, pivot: 69.933, destek1: 68.117, destek2: 67.033, destek3: 65.217, direnc1: 71.017, direnc2: 72.833, direnc3: 73.917, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "ASELS", fark: 0.37, son: 403.25, pivot: 401.75, destek1: 394.75, destek2: 387.25, destek3: 380.25, direnc1: 409.25, direnc2: 416.25, direnc3: 423.75, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "ASTOR", fark: 1.85, son: 335.75, pivot: 329.667, destek1: 321.833, destek2: 316.417, destek3: 308.583, direnc1: 335.083, direnc2: 342.917, direnc3: 348.333, yorum: "İlk direnç seviyesinin üstüne çıktı." },
  { sembol: "BIMAS", fark: 1.24, son: 416.50, pivot: 411.417, destek1: 403.083, destek2: 395.167, destek3: 386.833, direnc1: 419.333, direnc2: 427.667, direnc3: 435.583, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "DSTKF", fark: 2.61, son: 2150.00, pivot: 2095.333, destek1: 2073.667, destek2: 2047.333, destek3: 2025.667, direnc1: 2121.667, direnc2: 2143.333, direnc3: 2169.667, yorum: "İkinci direnç seviyesinin üstüne çıktı." },
  { sembol: "EKGYO", fark: 0.48, son: 19.45, pivot: 19.357, destek1: 19.093, destek2: 18.887, destek3: 18.623, direnc1: 19.563, direnc2: 19.827, direnc3: 20.033, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "ENKAI", fark: 0.24, son: 83.25, pivot: 83.05, destek1: 81.950, destek2: 81.05, destek3: 79.950, direnc1: 83.950, direnc2: 85.05, direnc3: 85.950, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "EREGL", fark: 0.56, son: 38.14, pivot: 37.927, destek1: 37.393, destek2: 36.887, destek3: 36.153, direnc1: 38.633, direnc2: 39.167, direnc3: 39.873, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "FROTO", fark: 0.82, son: 80.20, pivot: 79.55, destek1: 78.950, destek2: 78.3, destek3: 77.700, direnc1: 80.200, direnc2: 80.8, direnc3: 81.450, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "GARAN", fark: -0.46, son: 129.90, pivot: 130.5, destek1: 127.6, destek2: 125.9, destek3: 123.000, direnc1: 132.200, direnc2: 135.100, direnc3: 136.800, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "GUBRF", fark: 2.33, son: 475.75, pivot: 464.917, destek1: 447.833, destek2: 432.917, destek3: 415.833, direnc1: 479.833, direnc2: 496.917, direnc3: 511.833, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "ISCTR", fark: -0.64, son: 12.39, pivot: 12.470, destek1: 12.244, destek2: 12.1, destek3: 11.87, direnc1: 12.610, direnc2: 12.840, direnc3: 12.980, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "KCHOL", fark: 2.85, son: 222.40, pivot: 216.233, destek1: 213.367, destek2: 208.733, destek3: 205.867, direnc1: 220.867, direnc2: 223.733, direnc3: 228.367, yorum: "İlk direnç seviyesinin üstüne çıktı." },
  { sembol: "KRDMD", fark: -0.84, son: 44.98, pivot: 45.36, destek1: 43.84, destek2: 42.68, destek3: 41.160, direnc1: 46.52, direnc2: 48.04, direnc3: 49.2, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "MGROS", fark: 1.12, son: 573.00, pivot: 566.667, destek1: 555.333, destek2: 548.167, destek3: 536.833, direnc1: 578.333, direnc2: 585.167, direnc3: 592.333, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "PETKM", fark: 0.45, son: 20.58, pivot: 20.487, destek1: 20.253, destek2: 19.887, destek3: 19.653, direnc1: 20.853, direnc2: 21.087, direnc3: 21.453, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "PGSUS", fark: -0.42, son: 149.50, pivot: 150.133, destek1: 148.667, destek2: 147.733, destek3: 146.267, direnc1: 151.067, direnc2: 152.533, direnc3: 153.467, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "SAHOL", fark: 2.21, son: 92.40, pivot: 90.4, destek1: 89.5, destek2: 88.850, destek3: 87.950, direnc1: 91.05, direnc2: 91.95, direnc3: 92.6, yorum: "İkinci direnç seviyesinin üstüne çıktı." },
  { sembol: "SASA", fark: 2.34, son: 2.32, pivot: 2.267, destek1: 2.243, destek2: 2.217, destek3: 2.193, direnc1: 2.293, direnc2: 2.317, direnc3: 2.343, yorum: "İkinci direnç seviyesinin üstüne çıktı." },
  { sembol: "SISE", fark: 0.42, son: 39.90, pivot: 39.733, destek1: 39.147, destek2: 38.293, destek3: 37.707, direnc1: 40.587, direnc2: 41.173, direnc3: 42.027, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "TAVHL", fark: 0.36, son: 279.75, pivot: 278.75, destek1: 272.5, destek2: 268.25, destek3: 262.0, direnc1: 283.0, direnc2: 289.25, direnc3: 293.5, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "TCELL", fark: 0.90, son: 104.30, pivot: 103.367, destek1: 101.633, destek2: 100.467, destek3: 98.733, direnc1: 104.533, direnc2: 106.267, direnc3: 107.433, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "THYAO", fark: -0.39, son: 301.00, pivot: 302.167, destek1: 299.333, destek2: 297.417, destek3: 294.583, direnc1: 304.083, direnc2: 306.917, direnc3: 308.833, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "TOASO", fark: 3.24, son: 281.25, pivot: 272.417, destek1: 268.083, destek2: 265.167, destek3: 260.833, direnc1: 275.333, direnc2: 279.667, direnc3: 282.583, yorum: "İkinci direnç seviyesinin üstüne çıktı." },
  { sembol: "TRALT", fark: 7.03, son: 54.55, pivot: 50.967, destek1: 50.483, destek2: 49.517, destek3: 49.033, direnc1: 51.933, direnc2: 52.417, direnc3: 53.383, yorum: "Üçüncü direnç seviyesinin üstüne çıktı." },
  { sembol: "TTKOM", fark: 1.51, son: 54.85, pivot: 54.033, destek1: 53.317, destek2: 52.783, destek3: 52.067, direnc1: 54.567, direnc2: 55.283, direnc3: 55.817, yorum: "İlk direnç seviyesinin üstüne çıktı." },
  { sembol: "TUPRS", fark: 2.65, son: 406.75, pivot: 396.25, destek1: 389.75, destek2: 384.25, destek3: 377.75, direnc1: 401.75, direnc2: 408.25, direnc3: 413.75, yorum: "İlk direnç seviyesinin üstüne çıktı." },
  { sembol: "VAKBN", fark: 0.61, son: 30.60, pivot: 30.413, destek1: 29.587, destek2: 29.133, destek3: 28.307, direnc1: 30.867, direnc2: 31.693, direnc3: 32.147, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "YKBNK", fark: -0.09, son: 35.10, pivot: 35.133, destek1: 34.307, destek2: 33.813, destek3: 32.987, direnc1: 35.627, direnc2: 36.453, direnc3: 36.947, yorum: "Pivot değerinin altında seyrediyor." },
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