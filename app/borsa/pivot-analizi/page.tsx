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
  fark: 3.09,
  son: 14110.14,
  pivot: 13687.180,
  destek1: 13579.790,
  destek2: 13455.070,
  destek3: 13347.680,
  direnc1: 13811.900,
  direnc2: 13919.290,
  direnc3: 14044.010,
  yorum: "Üçüncü direnç seviyesinin üstüne çıktı.",
};

const pivotVerileri: PivotRow[] = [
  { sembol: "AEFES", fark: -7.81, son: 19.52, pivot: 21.173, destek1: 20.607, destek2: 20.193, destek3: 19.627, direnc1: 21.587, direnc2: 22.153, direnc3: 22.567, yorum: "Üçüncü destek seviyesinin altına indi." },
  { sembol: "AKBNK", fark: 4.48, son: 68.80, pivot: 65.85, destek1: 64.7, destek2: 63.25, destek3: 62.1, direnc1: 67.3, direnc2: 68.450, direnc3: 69.900, yorum: "İlk direnç seviyesinin üstüne çıktı." },
  { sembol: "ASELS", fark: 7.75, son: 381.00, pivot: 353.583, destek1: 349.417, destek2: 342.583, destek3: 338.417, direnc1: 360.417, direnc2: 364.583, direnc3: 371.417, yorum: "Üçüncü direnç seviyesinin üstüne çıktı." },
  { sembol: "ASTOR", fark: 9.07, son: 331.75, pivot: 304.167, destek1: 297.333, destek2: 292.917, destek3: 286.083, direnc1: 308.583, direnc2: 315.417, direnc3: 319.833, yorum: "Üçüncü direnç seviyesinin üstüne çıktı." },
  { sembol: "BIMAS", fark: 1.45, son: 384.00, pivot: 378.500, destek1: 373.750, destek2: 370.250, destek3: 365.500, direnc1: 382.000, direnc2: 386.750, direnc3: 390.250, yorum: "İlk direnç seviyesinin üstüne çıktı." },
  { sembol: "DSTKF", fark: 6.08, son: 1873.00, pivot: 1765.667, destek1: 1738.333, destek2: 1708.667, destek3: 1681.333, direnc1: 1795.333, direnc2: 1822.667, direnc3: 1852.333, yorum: "Üçüncü direnç seviyesinin üstüne çıktı." },
  { sembol: "EKGYO", fark: 3.47, son: 18.51, pivot: 17.89, destek1: 17.53, destek2: 17.110, destek3: 16.750, direnc1: 18.31, direnc2: 18.67, direnc3: 19.09, yorum: "İlk direnç seviyesinin üstüne çıktı." },
  { sembol: "ENKAI", fark: 1.13, son: 86.65, pivot: 85.683, destek1: 84.817, destek2: 83.733, destek3: 82.867, direnc1: 86.767, direnc2: 87.633, direnc3: 88.717, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "EREGL", fark: 0.78, son: 37.18, pivot: 36.893, destek1: 36.467, destek2: 36.073, destek3: 35.647, direnc1: 37.287, direnc2: 37.713, direnc3: 38.107, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "FROTO", fark: 2.18, son: 79.75, pivot: 78.05, destek1: 76.550, destek2: 74.250, destek3: 72.750, direnc1: 80.35, direnc2: 81.85, direnc3: 84.15, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "GARAN", fark: 4.19, son: 131.00, pivot: 125.733, destek1: 124.267, destek2: 122.033, destek3: 120.567, direnc1: 127.967, direnc2: 129.433, direnc3: 131.667, yorum: "İkinci direnç seviyesinin üstüne çıktı." },
  { sembol: "GUBRF", fark: -0.31, son: 427.00, pivot: 428.333, destek1: 415.167, destek2: 407.583, destek3: 394.417, direnc1: 435.917, direnc2: 449.083, direnc3: 456.667, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "ISCTR", fark: 4.73, son: 12.56, pivot: 11.993, destek1: 11.887, destek2: 11.753, destek3: 11.647, direnc1: 12.127, direnc2: 12.233, direnc3: 12.367, yorum: "Üçüncü direnç seviyesinin üstüne çıktı." },
  { sembol: "KCHOL", fark: 2.58, son: 205.80, pivot: 200.633, destek1: 196.467, destek2: 193.033, destek3: 188.867, direnc1: 204.067, direnc2: 208.233, direnc3: 211.667, yorum: "İlk direnç seviyesinin üstüne çıktı." },
  { sembol: "KRDMD", fark: 1.47, son: 40.94, pivot: 40.347, destek1: 39.313, destek2: 38.167, destek3: 37.133, direnc1: 41.493, direnc2: 42.527, direnc3: 43.673, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "MGROS", fark: -10.53, son: 572.00, pivot: 639.3333, destek1: 619.1666, destek2: 608.3333, destek3: 588.1666, direnc1: 650.1666, direnc2: 670.3333, direnc3: 681.1666, yorum: "Üçüncü destek seviyesinin altına indi." },
  { sembol: "PETKM", fark: 0.16, son: 18.61, pivot: 18.58, destek1: 18.07, destek2: 17.69, destek3: 17.18, direnc1: 18.96, direnc2: 19.470, direnc3: 19.850, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "PGSUS", fark: 1.36, son: 151.90, pivot: 149.8666, destek1: 148.3333, destek2: 146.9666, destek3: 145.4333, direnc1: 151.2333, direnc2: 152.7666, direnc3: 154.1333, yorum: "İlk direnç seviyesinin üstüne çıktı." },
  { sembol: "SAHOL", fark: 0.91, son: 88.25, pivot: 87.450, destek1: 86.2, destek2: 84.8, destek3: 83.55, direnc1: 88.850, direnc2: 90.100, direnc3: 91.500, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "SASA", fark: 6.11, son: 2.49, pivot: 2.3466, destek1: 2.3033, destek2: 2.2466, destek3: 2.2033, direnc1: 2.4033, direnc2: 2.4466, direnc3: 2.5033, yorum: "İkinci direnç seviyesinin üstüne çıktı." },
  { sembol: "SISE", fark: 0.39, son: 40.96, pivot: 40.8, destek1: 40.26, destek2: 39.68, destek3: 39.14, direnc1: 41.380, direnc2: 41.920, direnc3: 42.500, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "TAVHL", fark: 2.29, son: 279.00, pivot: 272.75, destek1: 267.75, destek2: 261, destek3: 256, direnc1: 279.5, direnc2: 284.5, direnc3: 291.25, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "TCELL", fark: 0.71, son: 104.10, pivot: 103.367, destek1: 101.733, destek2: 100.367, destek3: 98.733, direnc1: 104.733, direnc2: 106.367, direnc3: 107.733, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "THYAO", fark: 2.95, son: 308.75, pivot: 299.9166, destek1: 296.3333, destek2: 291.6666, destek3: 288.08333, direnc1: 304.5833, direnc2: 308.1666, direnc3: 312.8333, yorum: "İkinci direnç seviyesinin üstüne çıktı." },
  { sembol: "TOASO", fark: 0.94, son: 268.25, pivot: 265.75, destek1: 258.75, destek2: 250.5, destek3: 243.5, direnc1: 274, direnc2: 281, direnc3: 289.25, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "TRALT", fark: -4.01, son: 47.70, pivot: 49.6933, destek1: 47.7866, destek2: 46.6933, destek3: 44.7866, direnc1: 50.7866, direnc2: 52.6933, direnc3: 53.7866, yorum: "İlk destek seviyesinin altına indi." },
  { sembol: "TTKOM", fark: 1.59, son: 56.35, pivot: 55.467, destek1: 54.483, destek2: 53.517, destek3: 52.533, direnc1: 56.433, direnc2: 57.417, direnc3: 58.383, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "TUPRS", fark: 4.23, son: 351.25, pivot: 337.000, destek1: 329.250, destek2: 322.000, destek3: 314.250, direnc1: 344.250, direnc2: 352.000, direnc3: 359.250, yorum: "İlk direnç seviyesinin üstüne çıktı." },
  { sembol: "VAKBN", fark: 6.47, son: 30.92, pivot: 29.040, destek1: 28.62, destek2: 28.16, destek3: 27.74, direnc1: 29.500, direnc2: 29.920, direnc3: 30.380, yorum: "Üçüncü direnç seviyesinin üstüne çıktı." },
  { sembol: "YKBNK", fark: 5.41, son: 35.70, pivot: 33.8666, destek1: 33.1933, destek2: 32.3266, destek3: 31.6533, direnc1: 34.7333, direnc2: 35.4066, direnc3: 36.2733, yorum: "İkinci direnç seviyesinin üstüne çıktı." },
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