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
  fark: 0.40,
  son: 14396.54,
  pivot: 14338.800,
  destek1: 14191.730,
  destek2: 13924.470,
  destek3: 13777.400,
  direnc1: 14606.060,
  direnc2: 14753.130,
  direnc3: 15020.390,
  yorum: "Pivot değerinin üstünde seyrediyor.",
};

const pivotVerileri: PivotRow[] = [
  { sembol: "AEFES", fark: -1.12, son: 19.15, pivot: 19.367, destek1: 19.123, destek2: 18.837, destek3: 18.593, direnc1: 19.653, direnc2: 19.897, direnc3: 20.183, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "AKBNK", fark: -0.22, son: 69.20, pivot: 69.350, destek1: 68.25, destek2: 66.2, destek3: 65.1, direnc1: 71.400, direnc2: 72.500, direnc3: 74.550, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "ASELS", fark: 1.66, son: 402.25, pivot: 395.667, destek1: 386.333, destek2: 369.667, destek3: 360.333, direnc1: 412.333, direnc2: 421.667, direnc3: 438.333, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "ASTOR", fark: 0.05, son: 327.25, pivot: 327.083, destek1: 319.167, destek2: 306.833, destek3: 298.917, direnc1: 339.417, direnc2: 347.333, direnc3: 359.667, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "BIMAS", fark: -0.24, son: 411.00, pivot: 412.000, destek1: 406.75, destek2: 397.00, destek3: 391.75, direnc1: 421.75, direnc2: 427.00, direnc3: 436.75, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "DSTKF", fark: 1.56, son: 2100.00, pivot: 2067.667, destek1: 2043.333, destek2: 1996.667, destek3: 1972.333, direnc1: 2114.333, direnc2: 2138.667, direnc3: 2185.333, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "EKGYO", fark: 0.68, son: 19.30, pivot: 19.170, destek1: 18.860, destek2: 18.310, destek3: 18.000, direnc1: 19.720, direnc2: 20.030, direnc3: 20.580, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "ENKAI", fark: 0.46, son: 82.85, pivot: 82.467, destek1: 81.333, destek2: 79.567, destek3: 78.433, direnc1: 84.233, direnc2: 85.367, direnc3: 87.133, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "EREGL", fark: 1.04, son: 38.10, pivot: 37.707, destek1: 37.373, destek2: 36.987, destek3: 36.653, direnc1: 38.093, direnc2: 38.427, direnc3: 38.813, yorum: "İlk direnç seviyesinin üstüne çıktı." },
  { sembol: "FROTO", fark: 0.40, son: 79.60, pivot: 79.283, destek1: 78.667, destek2: 77.983, destek3: 77.367, direnc1: 79.967, direnc2: 80.583, direnc3: 81.267, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "GARAN", fark: -1.50, son: 129.30, pivot: 131.267, destek1: 129.733, destek2: 127.467, destek3: 125.933, direnc1: 133.533, direnc2: 135.067, direnc3: 137.333, yorum: "İlk destek seviyesinin altına indi." },
  { sembol: "GUBRF", fark: 1.59, son: 462.75, pivot: 455.500, destek1: 439.25, destek2: 406.75, destek3: 390.5, direnc1: 488.000, direnc2: 504.25, direnc3: 536.75, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "ISCTR", fark: -1.02, son: 12.38, pivot: 12.507, destek1: 12.373, destek2: 12.217, destek3: 12.083, direnc1: 12.663, direnc2: 12.797, direnc3: 12.953, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "KCHOL", fark: 2.68, son: 218.00, pivot: 212.300, destek1: 209.7, destek2: 204.800, destek3: 202.2, direnc1: 217.2, direnc2: 219.800, direnc3: 224.7, yorum: "İlk direnç seviyesinin üstüne çıktı." },
  { sembol: "KRDMD", fark: -0.40, son: 45.00, pivot: 45.180, destek1: 44.34, destek2: 42.9, destek3: 42.06, direnc1: 46.620, direnc2: 47.460, direnc3: 48.900, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "MGROS", fark: -1.69, son: 562.50, pivot: 572.167, destek1: 568.833, destek2: 564.667, destek3: 561.333, direnc1: 576.333, direnc2: 579.667, direnc3: 583.833, yorum: "İkinci destek seviyesinin altına indi." },
  { sembol: "PETKM", fark: 3.12, son: 20.62, pivot: 19.997, destek1: 19.733, destek2: 19.347, destek3: 19.083, direnc1: 20.383, direnc2: 20.647, direnc3: 21.033, yorum: "İlk direnç seviyesinin üstüne çıktı." },
  { sembol: "PGSUS", fark: -0.18, son: 149.60, pivot: 149.867, destek1: 148.333, destek2: 146.567, destek3: 145.033, direnc1: 151.633, direnc2: 153.167, direnc3: 154.933, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "SAHOL", fark: 0.28, son: 90.15, pivot: 89.900, destek1: 89.1, destek2: 87.85, destek3: 87.05, direnc1: 91.150, direnc2: 91.950, direnc3: 93.200, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "SASA", fark: 0.00, son: 2.27, pivot: 2.270, destek1: 2.24, destek2: 2.21, destek3: 2.18, direnc1: 2.300, direnc2: 2.330, direnc3: 2.360, yorum: "Pivot değerine eşit." },
  { sembol: "SISE", fark: 3.45, son: 40.00, pivot: 38.667, destek1: 38.253, destek2: 37.667, destek3: 37.253, direnc1: 39.253, direnc2: 39.667, direnc3: 40.253, yorum: "İlk direnç seviyesinin üstüne çıktı." },
  { sembol: "TAVHL", fark: -0.75, son: 276.75, pivot: 278.833, destek1: 275.667, destek2: 270.083, destek3: 266.917, direnc1: 284.417, direnc2: 287.583, direnc3: 293.167, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "TCELL", fark: -1.19, son: 102.80, pivot: 104.033, destek1: 102.767, destek2: 101.533, destek3: 100.267, direnc1: 105.267, direnc2: 106.533, direnc3: 107.767, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "THYAO", fark: 0.11, son: 301.25, pivot: 300.917, destek1: 298.833, destek2: 296.417, destek3: 294.333, direnc1: 303.333, direnc2: 305.417, direnc3: 307.833, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "TOASO", fark: 0.84, son: 271.00, pivot: 268.750, destek1: 265.25, destek2: 260.5, destek3: 257.0, direnc1: 273.5, direnc2: 277.0, direnc3: 281.75, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "TRALT", fark: 3.97, son: 51.45, pivot: 49.487, destek1: 48.173, destek2: 45.847, destek3: 44.533, direnc1: 51.813, direnc2: 53.127, direnc3: 55.453, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "TTKOM", fark: -0.09, son: 53.85, pivot: 53.900, destek1: 53.300, destek2: 52.500, destek3: 51.900, direnc1: 54.700, direnc2: 55.3, direnc3: 56.1, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "TUPRS", fark: 1.63, son: 395.25, pivot: 388.917, destek1: 379.583, destek2: 363.667, destek3: 354.333, direnc1: 404.833, direnc2: 414.167, direnc3: 430.083, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "VAKBN", fark: -2.59, son: 30.04, pivot: 30.840, destek1: 30.560, destek2: 30.120, destek3: 29.840, direnc1: 31.280, direnc2: 31.560, direnc3: 32.000, yorum: "İlk destek seviyesinin altına indi." },
  { sembol: "YKBNK", fark: -1.55, son: 34.80, pivot: 35.347, destek1: 34.973, destek2: 34.327, destek3: 33.953, direnc1: 35.993, direnc2: 36.367, direnc3: 37.013, yorum: "İlk destek seviyesinin altına indi." },
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