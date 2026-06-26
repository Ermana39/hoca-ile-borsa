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
  fark: 0.10,
  son: 14274.02,
  pivot: 14259.88,
  destek1: 14161.19,
  destek2: 14048.35,
  destek3: 13949.66,
  direnc1: 14372.72,
  direnc2: 14471.41,
  direnc3: 14584.25,
  yorum: "Pivot değerinin üstünde seyrediyor.",
};

const pivotVerileri: PivotRow[] = [
  {
    sembol: "AEFES",
    fark: 0.79,
    son: 21.26,
    pivot: 21.093,
    destek1: 20.787,
    destek2: 20.313,
    destek3: 20.007,
    direnc1: 21.567,
    direnc2: 21.873,
    direnc3: 22.347,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "AKBNK",
    fark: 0.06,
    son: 77.25,
    pivot: 77.2,
    destek1: 76.5,
    destek2: 75.75,
    destek3: 75.05,
    direnc1: 77.95,
    direnc2: 78.65,
    direnc3: 79.4,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "ASELS",
    fark: -4.34,
    son: 361.5,
    pivot: 377.916,
    destek1: 366.8333,
    destek2: 360.1666,
    destek3: 349.08333,
    direnc1: 384.5833,
    direnc2: 395.6666,
    direnc3: 402.3333,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "ASTOR",
    fark: -3.82,
    son: 289.75,
    pivot: 301.25,
    destek1: 294.75,
    destek2: 290.75,
    destek3: 284.25,
    direnc1: 305.25,
    direnc2: 311.75,
    direnc3: 315.75,
    yorum: "İkinci destek seviyesinin altına indi.",
  },
  {
    sembol: "BIMAS",
    fark: -0.4,
    son: 374.5,
    pivot: 376,
    destek1: 369,
    destek2: 362.5,
    destek3: 355.5,
    direnc1: 382.5,
    direnc2: 389.5,
    direnc3: 396,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "DSTKF",
    fark: 1.19,
    son: 3465,
    pivot: 3424.167,
    destek1: 3298.333,
    destek2: 3176.667,
    destek3: 3050.833,
    direnc1: 3545.833,
    direnc2: 3671.667,
    direnc3: 3793.333,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "EKGYO",
    fark: 0.48,
    son: 20.96,
    pivot: 20.86,
    destek1: 20.72,
    destek2: 20.48,
    destek3: 20.34,
    direnc1: 21.1,
    direnc2: 21.24,
    direnc3: 21.48,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "ENKAI",
    fark: 0.48,
    son: 90.85,
    pivot: 90.417,
    destek1: 89.583,
    destek2: 88.317,
    destek3: 87.483,
    direnc1: 91.683,
    direnc2: 92.517,
    direnc3: 93.783,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "EREGL",
    fark: 1.4,
    son: 42.12,
    pivot: 41.54,
    destek1: 40.9,
    destek2: 39.68,
    destek3: 39.04,
    direnc1: 42.76,
    direnc2: 43.4,
    direnc3: 44.62,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "FROTO",
    fark: -0.02,
    son: 86.25,
    pivot: 86.267,
    destek1: 85.683,
    destek2: 85.117,
    destek3: 84.533,
    direnc1: 86.833,
    direnc2: 87.417,
    direnc3: 87.983,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "GARAN",
    fark: 0.17,
    son: 138.4,
    pivot: 138.167,
    destek1: 137.333,
    destek2: 136.267,
    destek3: 135.433,
    direnc1: 139.233,
    direnc2: 140.067,
    direnc3: 141.133,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "GUBRF",
    fark: 0.28,
    son: 479.75,
    pivot: 478.417,
    destek1: 472.333,
    destek2: 464.917,
    destek3: 458.833,
    direnc1: 485.833,
    direnc2: 491.917,
    direnc3: 499.333,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "ISCTR",
    fark: 0.32,
    son: 14.74,
    pivot: 14.693,
    destek1: 14.607,
    destek2: 14.473,
    destek3: 14.387,
    direnc1: 14.827,
    direnc2: 14.913,
    direnc3: 15.047,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "KCHOL",
    fark: 0.61,
    son: 198.2,
    pivot: 197,
    destek1: 195.3,
    destek2: 192.4,
    destek3: 190.7,
    direnc1: 199.9,
    direnc2: 201.6,
    direnc3: 204.5,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "KRDMD",
    fark: 1.11,
    son: 40.56,
    pivot: 40.113,
    destek1: 39.667,
    destek2: 38.773,
    destek3: 38.327,
    direnc1: 41.007,
    direnc2: 41.453,
    direnc3: 42.347,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "MGROS",
    fark: -0.24,
    son: 688.5,
    pivot: 690.167,
    destek1: 680.333,
    destek2: 672.167,
    destek3: 662.333,
    direnc1: 698.333,
    direnc2: 708.167,
    direnc3: 716.333,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "PETKM",
    fark: 0.91,
    son: 19.58,
    pivot: 19.4033,
    destek1: 19.09666,
    destek2: 18.8733,
    destek3: 18.5666,
    direnc1: 19.6266,
    direnc2: 19.9333,
    direnc3: 20.1566,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "PGSUS",
    fark: -0.41,
    son: 180.1,
    pivot: 180.833,
    destek1: 178.367,
    destek2: 176.033,
    destek3: 173.567,
    direnc1: 183.167,
    direnc2: 185.633,
    direnc3: 187.967,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "SAHOL",
    fark: 0.12,
    son: 97.45,
    pivot: 97.333,
    destek1: 96.717,
    destek2: 95.983,
    destek3: 95.367,
    direnc1: 98.067,
    direnc2: 98.683,
    direnc3: 99.417,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "SASA",
    fark: 0.52,
    son: 2.52,
    pivot: 2.507,
    destek1: 2.483,
    destek2: 2.447,
    destek3: 2.423,
    direnc1: 2.543,
    direnc2: 2.567,
    direnc3: 2.603,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "SISE",
    fark: 0.89,
    son: 45.32,
    pivot: 44.92,
    destek1: 44.52,
    destek2: 43.72,
    destek3: 43.32,
    direnc1: 45.72,
    direnc2: 46.12,
    direnc3: 46.92,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "TAVHL",
    fark: -0.29,
    son: 284.5,
    pivot: 285.333,
    destek1: 281.667,
    destek2: 278.833,
    destek3: 275.167,
    direnc1: 288.167,
    direnc2: 291.833,
    direnc3: 294.667,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "TCELL",
    fark: 0.15,
    son: 110.9,
    pivot: 110.733,
    destek1: 109.867,
    destek2: 108.833,
    destek3: 107.967,
    direnc1: 111.767,
    direnc2: 112.633,
    direnc3: 113.667,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "THYAO",
    fark: 0.18,
    son: 330.75,
    pivot: 330.167,
    destek1: 328.083,
    destek2: 325.417,
    destek3: 323.333,
    direnc1: 332.833,
    direnc2: 334.917,
    direnc3: 337.583,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "TOASO",
    fark: -0.99,
    son: 325,
    pivot: 328.25,
    destek1: 318.75,
    destek2: 312.5,
    destek3: 303,
    direnc1: 334.5,
    direnc2: 344,
    direnc3: 350.25,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "TRALT",
    fark: -1.72,
    son: 46.96,
    pivot: 47.78,
    destek1: 45.6599,
    destek2: 44.1399,
    destek3: 42.01999,
    direnc1: 49.3,
    direnc2: 51.42,
    direnc3: 52.94,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "TTKOM",
    fark: 0.67,
    son: 62.25,
    pivot: 61.833,
    destek1: 61.267,
    destek2: 60.283,
    destek3: 59.717,
    direnc1: 62.817,
    direnc2: 63.383,
    direnc3: 64.367,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "TUPRS",
    fark: 0.09,
    son: 219.2,
    pivot: 219,
    destek1: 215.3,
    destek2: 211.4,
    destek3: 207.7,
    direnc1: 222.8999,
    direnc2: 226.5999,
    direnc3: 230.4999,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "VAKBN",
    fark: 0.82,
    son: 32.96,
    pivot: 32.693,
    destek1: 32.427,
    destek2: 31.893,
    destek3: 31.627,
    direnc1: 33.227,
    direnc2: 33.493,
    direnc3: 34.027,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "YKBNK",
    fark: -0.07,
    son: 40.66,
    pivot: 40.687,
    destek1: 40.233,
    destek2: 39.807,
    destek3: 39.353,
    direnc1: 41.113,
    direnc2: 41.567,
    direnc3: 41.993,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
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
