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
  fark: 0.83,
  son: 13703.13,
  pivot: 13590.6,
  destek1: 13493.27,
  destek2: 13298.61,
  destek3: 13201.28,
  direnc1: 13738.26,
  direnc2: 13882.59,
  direnc3: 14077.25,
  yorum: "Pivot değerinin üstünde seyrediyor.",
};

const pivotVerileri: PivotRow[] = [
  {
    sembol: "AEFES",
    fark: -0.13,
    son: 21.32,
    pivot: 21.347,
    destek1: 21.073,
    destek2: 20.827,
    destek3: 20.553,
    direnc1: 21.593,
    direnc2: 21.867,
    direnc3: 22.113,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "AKBNK",
    fark: 0.27,
    son: 67.55,
    pivot: 67.367,
    destek1: 66.683,
    destek2: 65.817,
    destek3: 65.133,
    direnc1: 68.233,
    direnc2: 68.917,
    direnc3: 69.783,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "ASELS",
    fark: 0.31,
    son: 346.75,
    pivot: 345.6666,
    destek1: 340.0833,
    destek2: 330.9166,
    destek3: 325.3333,
    direnc1: 354.8333,
    direnc2: 360.4166,
    direnc3: 369.5833,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "ASTOR",
    fark: 3.81,
    son: 311,
    pivot: 299.583,
    destek1: 295.917,
    destek2: 289.083,
    destek3: 285.417,
    direnc1: 306.417,
    direnc2: 310.083,
    direnc3: 316.917,
    yorum: "İkinci direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "BIMAS",
    fark: -0.2,
    son: 382.25,
    pivot: 383,
    destek1: 380.25,
    destek2: 374.75,
    destek3: 372,
    direnc1: 388.5,
    direnc2: 391.25,
    direnc3: 396.75,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "DSTKF",
    fark: -1.69,
    son: 1628,
    pivot: 1656,
    destek1: 1552,
    destek2: 1485,
    destek3: 1381,
    direnc1: 1723,
    direnc2: 1827,
    direnc3: 1894,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "EKGYO",
    fark: -0.18,
    son: 18.28,
    pivot: 18.313,
    destek1: 18.077,
    destek2: 17.653,
    destek3: 17.417,
    direnc1: 18.737,
    direnc2: 18.973,
    direnc3: 19.397,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "ENKAI",
    fark: 0.62,
    son: 87.1,
    pivot: 86.567,
    destek1: 85.683,
    destek2: 84.267,
    destek3: 83.383,
    direnc1: 87.983,
    direnc2: 88.867,
    direnc3: 90.283,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "EREGL",
    fark: 1.19,
    son: 41.98,
    pivot: 41.4866,
    destek1: 40.9533,
    destek2: 40.1666,
    destek3: 39.6333,
    direnc1: 42.2733,
    direnc2: 42.8066,
    direnc3: 43.5933,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "FROTO",
    fark: 0.35,
    son: 80.45,
    pivot: 80.167,
    destek1: 78.933,
    destek2: 77.417,
    destek3: 76.183,
    direnc1: 81.683,
    direnc2: 82.917,
    direnc3: 84.433,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "GARAN",
    fark: -0.08,
    son: 129.7,
    pivot: 129.8,
    destek1: 127.9,
    destek2: 126.1,
    destek3: 124.2,
    direnc1: 131.6,
    direnc2: 133.5,
    direnc3: 135.3,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "GUBRF",
    fark: 1.79,
    son: 431,
    pivot: 423.417,
    destek1: 415.583,
    destek2: 400.167,
    destek3: 392.333,
    direnc1: 438.833,
    direnc2: 446.667,
    direnc3: 462.083,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "ISCTR",
    fark: -0.35,
    son: 12.34,
    pivot: 12.383,
    destek1: 12.197,
    destek2: 12.053,
    destek3: 11.867,
    direnc1: 12.527,
    direnc2: 12.713,
    direnc3: 12.857,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "KCHOL",
    fark: 0.67,
    son: 206,
    pivot: 204.633,
    destek1: 202.467,
    destek2: 198.933,
    destek3: 196.767,
    direnc1: 208.167,
    direnc2: 210.333,
    direnc3: 213.867,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "KRDMD",
    fark: 0.55,
    son: 42.6,
    pivot: 42.367,
    destek1: 42.073,
    destek2: 41.547,
    destek3: 41.253,
    direnc1: 42.893,
    direnc2: 43.187,
    direnc3: 43.713,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "MGROS",
    fark: 0.61,
    son: 631,
    pivot: 627.167,
    destek1: 621.833,
    destek2: 612.667,
    destek3: 607.333,
    direnc1: 636.333,
    direnc2: 641.667,
    direnc3: 650.833,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "PETKM",
    fark: 0.86,
    son: 20.24,
    pivot: 20.067,
    destek1: 19.833,
    destek2: 19.427,
    destek3: 19.193,
    direnc1: 20.473,
    direnc2: 20.707,
    direnc3: 21.113,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "PGSUS",
    fark: -0.72,
    son: 156.5,
    pivot: 157.6333,
    destek1: 155.5666,
    destek2: 152.2333,
    destek3: 150.1666,
    direnc1: 160.9666,
    direnc2: 163.0333,
    direnc3: 166.3666,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "SAHOL",
    fark: 0.58,
    son: 89.1,
    pivot: 88.583,
    destek1: 87.367,
    destek2: 85.633,
    destek3: 84.417,
    direnc1: 90.317,
    direnc2: 91.533,
    direnc3: 93.267,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "SASA",
    fark: 0.27,
    son: 2.56,
    pivot: 2.553,
    destek1: 2.517,
    destek2: 2.473,
    destek3: 2.437,
    direnc1: 2.597,
    direnc2: 2.633,
    direnc3: 2.677,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "SISE",
    fark: 0.47,
    son: 42.44,
    pivot: 42.24,
    destek1: 41.86,
    destek2: 41.28,
    destek3: 40.9,
    direnc1: 42.82,
    direnc2: 43.2,
    direnc3: 43.78,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "TAVHL",
    fark: 0.56,
    son: 284,
    pivot: 282.417,
    destek1: 278.833,
    destek2: 271.667,
    destek3: 268.083,
    direnc1: 289.583,
    direnc2: 293.167,
    direnc3: 300.333,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "TCELL",
    fark: -1.47,
    son: 105.1,
    pivot: 106.667,
    destek1: 104.933,
    destek2: 102.267,
    destek3: 100.533,
    direnc1: 109.333,
    direnc2: 111.067,
    direnc3: 113.733,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "THYAO",
    fark: -2.26,
    son: 314,
    pivot: 321.25,
    destek1: 317,
    destek2: 310.25,
    destek3: 306,
    direnc1: 328,
    direnc2: 332.25,
    direnc3: 339,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "TOASO",
    fark: -3.1,
    son: 262.75,
    pivot: 271.167,
    destek1: 267.583,
    destek2: 262.667,
    destek3: 259.083,
    direnc1: 276.083,
    direnc2: 279.667,
    direnc3: 284.583,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "TRALT",
    fark: 5.99,
    son: 48.84,
    pivot: 46.08,
    destek1: 45.48,
    destek2: 44.62,
    destek3: 44.02,
    direnc1: 46.94,
    direnc2: 47.54,
    direnc3: 48.4,
    yorum: "Üçüncü direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "TTKOM",
    fark: 0.16,
    son: 53.35,
    pivot: 53.267,
    destek1: 52.633,
    destek2: 51.367,
    destek3: 50.733,
    direnc1: 54.533,
    direnc2: 55.167,
    direnc3: 56.433,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "TUPRS",
    fark: 4.89,
    son: 303.75,
    pivot: 289.583,
    destek1: 283.666,
    destek2: 277.0833,
    destek3: 271.1666,
    direnc1: 296.1666,
    direnc2: 302.0833,
    direnc3: 308.6666,
    yorum: "İkinci direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "VAKBN",
    fark: 2.15,
    son: 31.42,
    pivot: 30.76,
    destek1: 30.36,
    destek2: 29.56,
    destek3: 29.16,
    direnc1: 31.56,
    direnc2: 31.96,
    direnc3: 32.76,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "YKBNK",
    fark: -0.81,
    son: 34.28,
    pivot: 34.56,
    destek1: 33.8,
    destek2: 32.74,
    destek3: 31.98,
    direnc1: 35.62,
    direnc2: 36.38,
    direnc3: 37.44,
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