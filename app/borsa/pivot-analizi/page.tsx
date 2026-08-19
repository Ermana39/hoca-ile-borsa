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
  fark: 2.35,
  son: 14458.98,
  pivot: 14127.000,
  destek1: 14044.760,
  destek2: 13961.540,
  destek3: 13879.300,
  direnc1: 14210.220,
  direnc2: 14292.460,
  direnc3: 14375.680,
  yorum: "Üçüncü direnç seviyesinin üstüne çıktı.",
};

const pivotVerileri: PivotRow[] = [
  { sembol: "AEFES", fark: 1.85, son: 19.41, pivot: 19.057, destek1: 18.8533, destek2: 18.577, destek3: 18.373, direnc1: 19.333, direnc2: 19.537, direnc3: 19.813, yorum: "İlk direnç seviyesinin üstüne çıktı." },
  { sembol: "AKBNK", fark: 3.56, son: 70.30, pivot: 67.883, destek1: 66.967, destek2: 66.283, destek3: 65.367, direnc1: 68.567, direnc2: 69.483, direnc3: 70.167, yorum: "Üçüncü direnç seviyesinin üstüne çıktı." },
  { sembol: "ASELS", fark: 5.13, son: 403.00, pivot: 383.333, destek1: 376.667, destek2: 372.083, destek3: 365.417, direnc1: 387.917, direnc2: 394.583, direnc3: 399.167, yorum: "Üçüncü direnç seviyesinin üstüne çıktı." },
  { sembol: "ASTOR", fark: 1.58, son: 331.50, pivot: 326.3333, destek1: 309.4166, destek2: 298.3333, destek3: 281.4166, direnc1: 337.4166, direnc2: 354.3333, direnc3: 365.4166, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "BIMAS", fark: 3.48, son: 416.50, pivot: 402.500, destek1: 395.500, destek2: 386.000, destek3: 379.000, direnc1: 412.000, direnc2: 419.000, direnc3: 428.500, yorum: "İlk direnç seviyesinin üstüne çıktı." },
  { sembol: "DSTKF", fark: 2.70, son: 2090.00, pivot: 2035.000, destek1: 2005.000, destek2: 1975.000, destek3: 1945.000, direnc1: 2065.000, direnc2: 2095.000, direnc3: 2125.000, yorum: "İlk direnç seviyesinin üstüne çıktı." },
  { sembol: "EKGYO", fark: 4.28, son: 19.41, pivot: 18.6133, destek1: 18.4466, destek2: 18.1933, destek3: 18.0266, direnc1: 18.8666, direnc2: 19.0333, direnc3: 19.2866, yorum: "İlk direnç seviyesinin üstüne çıktı." },
  { sembol: "ENKAI", fark: 3.34, son: 83.10, pivot: 80.4166, destek1: 79.08333, destek2: 77.1666, destek3: 75.8333, direnc1: 82.3333, direnc2: 83.6666, direnc3: 85.5833, yorum: "İlk direnç seviyesinin üstüne çıktı." },
  { sembol: "EREGL", fark: 0.02, son: 37.76, pivot: 37.753, destek1: 37.307, destek2: 36.913, destek3: 36.467, direnc1: 38.147, direnc2: 38.593, direnc3: 38.987, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "FROTO", fark: 0.49, son: 79.35, pivot: 78.967, destek1: 78.133, destek2: 77.367, destek3: 76.533, direnc1: 79.733, direnc2: 80.567, direnc3: 81.333, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "GARAN", fark: 2.27, son: 132.00, pivot: 129.067, destek1: 128.033, destek2: 126.767, destek3: 125.733, direnc1: 130.333, direnc2: 131.367, direnc3: 132.633, yorum: "İkinci direnç seviyesinin üstüne çıktı." },
  { sembol: "GUBRF", fark: 9.20, son: 471.75, pivot: 432.000, destek1: 418.500, destek2: 408.000, destek3: 394.500, direnc1: 442.500, direnc2: 456.000, direnc3: 466.500, yorum: "Üçüncü direnç seviyesinin üstüne çıktı." },
  { sembol: "ISCTR", fark: 1.02, son: 12.53, pivot: 12.403, destek1: 12.277, destek2: 12.173, destek3: 12.047, direnc1: 12.507, direnc2: 12.633, direnc3: 12.737, yorum: "İlk direnç seviyesinin üstüne çıktı." },
  { sembol: "KCHOL", fark: 3.71, son: 214.60, pivot: 206.933, destek1: 205.167, destek2: 202.433, destek3: 200.667, direnc1: 209.667, direnc2: 211.433, direnc3: 214.167, yorum: "Üçüncü direnç seviyesinin üstüne çıktı." },
  { sembol: "KRDMD", fark: 2.35, son: 45.78, pivot: 44.727, destek1: 42.733, destek2: 41.467, destek3: 39.473, direnc1: 45.993, direnc2: 47.987, direnc3: 49.253, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "MGROS", fark: 0.67, son: 573.00, pivot: 569.167, destek1: 561.833, destek2: 555.667, destek3: 548.333, direnc1: 575.333, direnc2: 582.667, direnc3: 588.833, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "PETKM", fark: 2.15, son: 20.12, pivot: 19.6966, destek1: 19.3533, destek2: 18.8866, destek3: 18.5433, direnc1: 20.1633, direnc2: 20.5066, direnc3: 20.9733, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "PGSUS", fark: 0.38, son: 150.10, pivot: 149.5333, destek1: 148.0667, destek2: 146.8333, destek3: 145.3666, direnc1: 150.7666, direnc2: 152.2333, direnc3: 153.4666, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "SAHOL", fark: 1.84, son: 90.35, pivot: 88.7166, destek1: 87.8833, destek2: 86.8166, destek3: 85.9833, direnc1: 89.7833, direnc2: 90.6166, direnc3: 91.6833, yorum: "İlk direnç seviyesinin üstüne çıktı." },
  { sembol: "SASA", fark: -0.15, son: 2.27, pivot: 2.2733, destek1: 2.1966, destek2: 2.1433, destek3: 2.0666, direnc1: 2.3266, direnc2: 2.4033, direnc3: 2.4566, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "SISE", fark: 1.52, son: 38.84, pivot: 38.2599, destek1: 37.8399, destek2: 37.5599, destek3: 37.1399, direnc1: 38.5399, direnc2: 38.960, direnc3: 39.240, yorum: "İlk direnç seviyesinin üstüne çıktı." },
  { sembol: "TAVHL", fark: 1.56, son: 281.25, pivot: 276.917, destek1: 273.333, destek2: 270.417, destek3: 266.833, direnc1: 279.833, direnc2: 283.417, direnc3: 286.333, yorum: "İlk direnç seviyesinin üstüne çıktı." },
  { sembol: "TCELL", fark: 0.58, son: 104.00, pivot: 103.400, destek1: 102.300, destek2: 101.100, destek3: 100.000, direnc1: 104.600, direnc2: 105.700, direnc3: 106.900, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "THYAO", fark: 0.33, son: 301.25, pivot: 300.250, destek1: 298.000, destek2: 295.500, destek3: 293.250, direnc1: 302.750, direnc2: 305.000, direnc3: 307.500, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "TOASO", fark: 1.28, son: 270.00, pivot: 266.583, destek1: 263.417, destek2: 261.333, destek3: 258.167, direnc1: 268.667, direnc2: 271.833, direnc3: 273.917, yorum: "İlk direnç seviyesinin üstüne çıktı." },
  { sembol: "TRALT", fark: 5.03, son: 50.50, pivot: 48.080, destek1: 47.040, destek2: 46.500, destek3: 45.460, direnc1: 48.620, direnc2: 49.660, direnc3: 50.200, yorum: "Üçüncü direnç seviyesinin üstüne çıktı." },
  { sembol: "TTKOM", fark: 1.25, son: 54.10, pivot: 53.4333, destek1: 52.9166, destek2: 52.1333, destek3: 51.6166, direnc1: 54.2166, direnc2: 54.7333, direnc3: 55.5166, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "TUPRS", fark: 6.63, son: 395.50, pivot: 370.917, destek1: 367.333, destek2: 360.667, destek3: 357.083, direnc1: 377.583, direnc2: 381.167, direnc3: 387.833, yorum: "Üçüncü direnç seviyesinin üstüne çıktı." },
  { sembol: "VAKBN", fark: 1.24, son: 31.00, pivot: 30.620, destek1: 30.260, destek2: 30.060, destek3: 29.700, direnc1: 30.820, direnc2: 31.180, direnc3: 31.380, yorum: "İlk direnç seviyesinin üstüne çıktı." },
  { sembol: "YKBNK", fark: 2.10, son: 35.62, pivot: 34.887, destek1: 34.373, destek2: 33.887, destek3: 33.373, direnc1: 35.373, direnc2: 35.887, direnc3: 36.373, yorum: "İlk direnç seviyesinin üstüne çıktı." },
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