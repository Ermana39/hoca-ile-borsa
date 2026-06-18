export const metadata = {
  title: "Pivot Analizi | Hoca İle Borsa",
  description:
    "Pivot, destek ve direnç seviyelerine göre hisselerin teknik görünümünü tablo halinde inceleyin.",
  alternates: {
    canonical: "https://www.hocaileborsa.com/borsa/pivot-analizi",
  },
};

import Link from "next/link";

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
  fark: 0.85,
  son: 14827.35,
  pivot: 14703.0,
  destek1: 14578.66,
  destek2: 14329.96,
  destek3: 14205.62,
  direnc1: 14951.7,
  direnc2: 15076.04,
  direnc3: 15324.74,
  yorum: "Pivot değerinin üstünde seyrediyor.",
};

const pivotVerileri: PivotRow[] = [
  {
    sembol: "AEFES",
    fark: 0.72,
    son: 21.52,
    pivot: 21.367,
    destek1: 21.073,
    destek2: 20.627,
    destek3: 20.333,
    direnc1: 21.813,
    direnc2: 22.107,
    direnc3: 22.553,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "AKBNK",
    fark: 1.08,
    son: 81.1,
    pivot: 80.233,
    destek1: 78.967,
    destek2: 76.833,
    destek3: 75.567,
    direnc1: 82.367,
    direnc2: 83.633,
    direnc3: 85.767,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "ASELS",
    fark: 1.57,
    son: 410.75,
    pivot: 404.417,
    destek1: 396.333,
    destek2: 381.917,
    destek3: 373.833,
    direnc1: 418.833,
    direnc2: 426.917,
    direnc3: 441.333,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "ASTOR",
    fark: 2.16,
    son: 300.0,
    pivot: 293.667,
    destek1: 287.333,
    destek2: 274.667,
    destek3: 268.333,
    direnc1: 306.333,
    direnc2: 312.667,
    direnc3: 325.333,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "BIMAS",
    fark: 1.14,
    son: 391.75,
    pivot: 387.333,
    destek1: 382.917,
    destek2: 374.083,
    destek3: 369.667,
    direnc1: 396.167,
    direnc2: 400.583,
    direnc3: 409.417,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "DSTKF",
    fark: 2.47,
    son: 3072.5,
    pivot: 2998.333,
    destek1: 2919.167,
    destek2: 2765.833,
    destek3: 2686.667,
    direnc1: 3151.667,
    direnc2: 3230.833,
    direnc3: 3384.167,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "EKGYO",
    fark: 0.81,
    son: 22.32,
    pivot: 22.14,
    destek1: 21.9,
    destek2: 21.48,
    destek3: 21.24,
    direnc1: 22.56,
    direnc2: 22.8,
    direnc3: 23.22,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "ENKAI",
    fark: 0.55,
    son: 94.3,
    pivot: 93.783,
    destek1: 92.917,
    destek2: 91.533,
    destek3: 90.667,
    direnc1: 95.167,
    direnc2: 96.033,
    direnc3: 97.417,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "EREGL",
    fark: 0.23,
    son: 40.0,
    pivot: 39.907,
    destek1: 39.493,
    destek2: 38.987,
    destek3: 38.573,
    direnc1: 40.413,
    direnc2: 40.827,
    direnc3: 41.333,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "FROTO",
    fark: 0.95,
    son: 91.85,
    pivot: 90.983,
    destek1: 90.067,
    destek2: 88.283,
    destek3: 87.367,
    direnc1: 92.767,
    direnc2: 93.683,
    direnc3: 95.467,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "GARAN",
    fark: 0.51,
    son: 144.0,
    pivot: 143.267,
    destek1: 141.733,
    destek2: 139.467,
    destek3: 137.933,
    direnc1: 145.533,
    direnc2: 147.067,
    direnc3: 149.333,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "GUBRF",
    fark: 0.32,
    son: 515.5,
    pivot: 513.833,
    destek1: 505.667,
    destek2: 495.833,
    destek3: 487.667,
    direnc1: 523.667,
    direnc2: 531.833,
    direnc3: 541.667,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "ISCTR",
    fark: 1.06,
    son: 15.47,
    pivot: 15.307,
    destek1: 15.133,
    destek2: 14.797,
    destek3: 14.623,
    direnc1: 15.643,
    direnc2: 15.817,
    direnc3: 16.153,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "KCHOL",
    fark: 0.67,
    son: 199.7,
    pivot: 198.367,
    destek1: 197.033,
    destek2: 194.367,
    destek3: 193.033,
    direnc1: 201.033,
    direnc2: 202.367,
    direnc3: 205.033,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "KRDMD",
    fark: 0.3,
    son: 40.42,
    pivot: 40.3,
    destek1: 39.8,
    destek2: 39.18,
    destek3: 38.68,
    direnc1: 40.92,
    direnc2: 41.42,
    direnc3: 42.04,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "MGROS",
    fark: 0.72,
    son: 698.0,
    pivot: 693.0,
    destek1: 687.5,
    destek2: 677.0,
    destek3: 671.5,
    direnc1: 703.5,
    direnc2: 709.0,
    direnc3: 719.5,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "PETKM",
    fark: 0.99,
    son: 20.42,
    pivot: 20.22,
    destek1: 19.88,
    destek2: 19.34,
    destek3: 19.0,
    direnc1: 20.76,
    direnc2: 21.1,
    direnc3: 21.64,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "PGSUS",
    fark: 0.45,
    son: 184.7,
    pivot: 183.867,
    destek1: 182.833,
    destek2: 180.967,
    destek3: 179.933,
    direnc1: 185.733,
    direnc2: 186.767,
    direnc3: 188.633,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "SAHOL",
    fark: 0.49,
    son: 102.5,
    pivot: 102.0,
    destek1: 100.7,
    destek2: 98.9,
    destek3: 97.6,
    direnc1: 103.8,
    direnc2: 105.1,
    direnc3: 106.9,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "SASA",
    fark: 0.11,
    son: 2.78,
    pivot: 2.777,
    destek1: 2.743,
    destek2: 2.707,
    destek3: 2.673,
    direnc1: 2.813,
    direnc2: 2.847,
    direnc3: 2.883,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "SISE",
    fark: 1.6,
    son: 47.4,
    pivot: 46.653,
    destek1: 45.907,
    destek2: 44.413,
    destek3: 43.667,
    direnc1: 48.147,
    direnc2: 48.893,
    direnc3: 50.387,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "TAVHL",
    fark: 0.08,
    son: 304.5,
    pivot: 304.25,
    destek1: 300.5,
    destek2: 296.5,
    destek3: 292.75,
    direnc1: 308.25,
    direnc2: 312.0,
    direnc3: 316.0,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "TCELL",
    fark: 1.02,
    son: 116.0,
    pivot: 114.833,
    destek1: 113.567,
    destek2: 111.133,
    destek3: 109.867,
    direnc1: 117.267,
    direnc2: 118.533,
    direnc3: 120.967,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "THYAO",
    fark: 0.33,
    son: 328.5,
    pivot: 327.417,
    destek1: 324.833,
    destek2: 321.167,
    destek3: 318.583,
    direnc1: 331.083,
    direnc2: 333.667,
    direnc3: 337.333,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "TOASO",
    fark: 0.73,
    son: 332.0,
    pivot: 329.583,
    destek1: 326.417,
    destek2: 320.833,
    destek3: 317.667,
    direnc1: 335.167,
    direnc2: 338.333,
    direnc3: 343.917,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "TRALT",
    fark: 2.56,
    son: 51.8,
    pivot: 50.507,
    destek1: 48.513,
    destek2: 45.227,
    destek3: 43.233,
    direnc1: 53.793,
    direnc2: 55.787,
    direnc3: 59.073,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "TTKOM",
    fark: 0.63,
    son: 64.0,
    pivot: 63.6,
    destek1: 63.1,
    destek2: 62.2,
    destek3: 61.7,
    direnc1: 64.5,
    direnc2: 65.0,
    direnc3: 65.9,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "TUPRS",
    fark: -0.28,
    son: 224.1,
    pivot: 224.733,
    destek1: 221.867,
    destek2: 219.633,
    destek3: 216.767,
    direnc1: 226.967,
    direnc2: 229.833,
    direnc3: 232.067,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "VAKBN",
    fark: 0.59,
    son: 35.16,
    pivot: 34.953,
    destek1: 34.467,
    destek2: 33.773,
    destek3: 33.287,
    direnc1: 35.647,
    direnc2: 36.133,
    direnc3: 36.827,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "YKBNK",
    fark: 1.31,
    son: 42.7,
    pivot: 42.147,
    destek1: 41.473,
    destek2: 40.247,
    destek3: 39.573,
    direnc1: 43.373,
    direnc2: 44.047,
    direnc3: 45.273,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  }
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
