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
  fark: -1.37,
  son: 13687.86,
  pivot: 13878.05,
  destek1: 13670.7,
  destek2: 13566.64,
  destek3: 13359.29,
  direnc1: 13982.11,
  direnc2: 14189.46,
  direnc3: 14293.52,
  yorum: "Pivot değerinin altında seyrediyor.",
};

const pivotVerileri: PivotRow[] = [
  {
    sembol: "AEFES",
    fark: 3.68,
    son: 21.8,
    pivot: 21.027,
    destek1: 20.673,
    destek2: 20.427,
    destek3: 20.073,
    direnc1: 21.273,
    direnc2: 21.627,
    direnc3: 21.873,
    yorum: "İkinci direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "AKBNK",
    fark: -2.45,
    son: 65.8,
    pivot: 67.45,
    destek1: 65.25,
    destek2: 64.05,
    destek3: 61.85,
    direnc1: 68.65,
    direnc2: 70.85,
    direnc3: 72.05,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "ASELS",
    fark: -2.67,
    son: 358,
    pivot: 367.8333,
    destek1: 353.1666,
    destek2: 345.8333,
    destek3: 331.1666,
    direnc1: 375.1666,
    direnc2: 389.8333,
    direnc3: 397.1666,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "ASTOR",
    fark: -5.69,
    son: 277.5,
    pivot: 294.25,
    destek1: 284.5,
    destek2: 279,
    destek3: 269.25,
    direnc1: 299.75,
    direnc2: 309.5,
    direnc3: 315,
    yorum: "İkinci destek seviyesinin altına indi.",
  },
  {
    sembol: "BIMAS",
    fark: 1.65,
    son: 389.5,
    pivot: 383.167,
    destek1: 379.083,
    destek2: 374.917,
    destek3: 370.833,
    direnc1: 387.333,
    direnc2: 391.417,
    direnc3: 395.583,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "DSTKF",
    fark: -10.83,
    son: 1793,
    pivot: 2010.6666,
    destek1: 1931.3333,
    destek2: 1870.6666,
    destek3: 1791.3333,
    direnc1: 2071.3333,
    direnc2: 2150.6666,
    direnc3: 2211.3333,
    yorum: "İkinci destek seviyesinin altına indi.",
  },
  {
    sembol: "EKGYO",
    fark: -4.43,
    son: 18.2,
    pivot: 19.043,
    destek1: 18.707,
    destek2: 18.503,
    destek3: 18.167,
    direnc1: 19.247,
    direnc2: 19.583,
    direnc3: 19.787,
    yorum: "İkinci destek seviyesinin altına indi.",
  },
  {
    sembol: "ENKAI",
    fark: -0.39,
    son: 88.75,
    pivot: 89.1,
    destek1: 87.65,
    destek2: 86.65,
    destek3: 85.2,
    direnc1: 90.1,
    direnc2: 91.55,
    direnc3: 92.55,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "EREGL",
    fark: 0.75,
    son: 43.86,
    pivot: 43.5333,
    destek1: 42.807,
    destek2: 42.3533,
    destek3: 41.627,
    direnc1: 43.987,
    direnc2: 44.713,
    direnc3: 45.167,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "FROTO",
    fark: -1.5,
    son: 77.55,
    pivot: 78.7333,
    destek1: 77.2666,
    destek2: 76.2833,
    destek3: 74.8166,
    direnc1: 79.7166,
    direnc2: 81.1833,
    direnc3: 82.1666,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "GARAN",
    fark: -0.08,
    son: 127.4,
    pivot: 127.5,
    destek1: 125.6,
    destek2: 124.1,
    destek3: 122.2,
    direnc1: 129,
    direnc2: 130.9,
    direnc3: 132.4,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "GUBRF",
    fark: -2.6,
    son: 415,
    pivot: 426.083,
    destek1: 418.417,
    destek2: 412.833,
    destek3: 405.167,
    direnc1: 431.667,
    direnc2: 439.333,
    direnc3: 444.917,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "ISCTR",
    fark: -1.21,
    son: 12.82,
    pivot: 12.977,
    destek1: 12.763,
    destek2: 12.637,
    destek3: 12.423,
    direnc1: 13.103,
    direnc2: 13.317,
    direnc3: 13.443,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "KCHOL",
    fark: -1.65,
    son: 195,
    pivot: 198.267,
    destek1: 194.033,
    destek2: 191.367,
    destek3: 187.133,
    direnc1: 200.933,
    direnc2: 205.167,
    direnc3: 207.833,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "KRDMD",
    fark: -0.36,
    son: 42.4,
    pivot: 42.553,
    destek1: 41.927,
    destek2: 41.513,
    destek3: 40.887,
    direnc1: 42.967,
    direnc2: 43.593,
    direnc3: 44.007,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "MGROS",
    fark: 1.39,
    son: 634,
    pivot: 625.333,
    destek1: 617.167,
    destek2: 609.333,
    destek3: 601.167,
    direnc1: 633.167,
    direnc2: 641.333,
    direnc3: 649.167,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "PETKM",
    fark: -1.62,
    son: 20.26,
    pivot: 20.593,
    destek1: 19.727,
    destek2: 19.293,
    destek3: 18.427,
    direnc1: 21.027,
    direnc2: 21.893,
    direnc3: 22.327,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "PGSUS",
    fark: -0.7,
    son: 159.7,
    pivot: 160.833,
    destek1: 157.567,
    destek2: 155.433,
    destek3: 152.167,
    direnc1: 162.967,
    direnc2: 166.233,
    direnc3: 168.367,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "SAHOL",
    fark: -0.42,
    son: 87.35,
    pivot: 87.717,
    destek1: 86.183,
    destek2: 85.267,
    destek3: 83.733,
    direnc1: 88.633,
    direnc2: 90.167,
    direnc3: 91.083,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "SASA",
    fark: -2.55,
    son: 2.55,
    pivot: 2.6166,
    destek1: 2.4833,
    destek2: 2.3966,
    destek3: 2.2633,
    direnc1: 2.7033,
    direnc2: 2.8366,
    direnc3: 2.9233,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "SISE",
    fark: -1.86,
    son: 42.52,
    pivot: 43.327,
    destek1: 42.413,
    destek2: 41.867,
    destek3: 40.953,
    direnc1: 43.873,
    direnc2: 44.787,
    direnc3: 45.333,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "TAVHL",
    fark: 1.26,
    son: 268,
    pivot: 264.667,
    destek1: 259.083,
    destek2: 255.917,
    destek3: 250.333,
    direnc1: 267.833,
    direnc2: 273.417,
    direnc3: 276.583,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "TCELL",
    fark: -1.36,
    son: 101.7,
    pivot: 103.1,
    destek1: 101,
    destek2: 99.7,
    destek3: 97.6,
    direnc1: 104.4,
    direnc2: 106.5,
    direnc3: 107.8,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "THYAO",
    fark: -0.78,
    son: 319,
    pivot: 321.5,
    destek1: 314.25,
    destek2: 310.5,
    destek3: 303.25,
    direnc1: 325.25,
    direnc2: 332.5,
    direnc3: 336.25,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "TOASO",
    fark: -4.23,
    son: 264.25,
    pivot: 275.917,
    destek1: 265.833,
    destek2: 259.167,
    destek3: 249.083,
    direnc1: 282.583,
    direnc2: 292.667,
    direnc3: 299.333,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "TRALT",
    fark: -4.85,
    son: 46.46,
    pivot: 48.83,
    destek1: 47.41,
    destek2: 46.56,
    destek3: 45.14,
    direnc1: 49.68,
    direnc2: 51.1,
    direnc3: 51.95,
    yorum: "İkinci destek seviyesinin altına indi.",
  },
  {
    sembol: "TTKOM",
    fark: -2.5,
    son: 52.05,
    pivot: 53.383,
    destek1: 51.867,
    destek2: 50.983,
    destek3: 49.467,
    direnc1: 54.267,
    direnc2: 55.783,
    direnc3: 56.667,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "TUPRS",
    fark: -0.45,
    son: 293.5,
    pivot: 294.8333,
    destek1: 288.6666,
    destek2: 285.08333,
    destek3: 278.9166,
    direnc1: 298.4166,
    direnc2: 304.5833,
    direnc3: 308.1666,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "VAKBN",
    fark: -0.35,
    son: 30.08,
    pivot: 30.187,
    destek1: 29.533,
    destek2: 29.207,
    destek3: 28.553,
    direnc1: 30.513,
    direnc2: 31.167,
    direnc3: 31.493,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "YKBNK",
    fark: -2.09,
    son: 32.74,
    pivot: 33.44,
    destek1: 32.32,
    destek2: 31.74,
    destek3: 30.62,
    direnc1: 34.02,
    direnc2: 35.14,
    direnc3: 35.72,
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