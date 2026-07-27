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
  fark: -0.74,
  son: 13774.77,
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
    fark: -0.51,
    son: 20.92,
    pivot: 21.027,
    destek1: 20.73,
    destek2: 20.427,
    destek3: 20.073,
    direnc1: 21.273,
    direnc2: 21.627,
    direnc3: 21.873,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "AKBNK",
    fark: -1.48,
    son: 66.45,
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
    fark: -5.38,
    son: 360.5,
    pivot: 381,
    destek1: 370.75,
    destek2: 361.25,
    destek3: 351,
    direnc1: 390.5,
    direnc2: 400.75,
    direnc3: 410.25,
    yorum: "İkinci destek seviyesinin altına indi.",
  },
  {
    sembol: "ASTOR",
    fark: -3.81,
    son: 290,
    pivot: 301.5,
    destek1: 291.25,
    destek2: 285.5,
    destek3: 275.25,
    direnc1: 307.25,
    direnc2: 317.5,
    direnc3: 323.25,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "BIMAS",
    fark: -0.35,
    son: 383.25,
    pivot: 384.5833,
    destek1: 375.9166,
    destek2: 371.5833,
    destek3: 362.9166,
    direnc1: 388.9166,
    direnc2: 397.5833,
    direnc3: 401.9166,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "DSTKF",
    fark: -0.93,
    son: 1992,
    pivot: 2010.667,
    destek1: 1931.333,
    destek2: 1870.667,
    destek3: 1791.333,
    direnc1: 2071.333,
    direnc2: 2150.667,
    direnc3: 2211.333,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "EKGYO",
    fark: 0.44,
    son: 18.91,
    pivot: 18.8266,
    destek1: 18.3133,
    destek2: 18.006667,
    destek3: 17.4933,
    direnc1: 19.1333,
    direnc2: 19.6466,
    direnc3: 19.9533,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "ENKAI",
    fark: -0.54,
    son: 88.65,
    pivot: 89.1333,
    destek1: 87.9166,
    destek2: 87.03333,
    destek3: 85.8166,
    direnc1: 90.01666,
    direnc2: 91.2333,
    direnc3: 92.1166,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "EREGL",
    fark: -0.63,
    son: 43.26,
    pivot: 43.533,
    destek1: 42.807,
    destek2: 42.3533,
    destek3: 41.627,
    direnc1: 43.987,
    direnc2: 44.713,
    direnc3: 45.167,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "FROTO",
    fark: -0.99,
    son: 78.25,
    pivot: 79.0333,
    destek1: 78.4166,
    destek2: 77.8333,
    destek3: 77.2166,
    direnc1: 79.6166,
    direnc2: 80.2333,
    direnc3: 80.8166,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "GARAN",
    fark: -0.31,
    son: 127.1,
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
    fark: 0.18,
    son: 424,
    pivot: 423.25,
    destek1: 415.25,
    destek2: 407.75,
    destek3: 399.75,
    direnc1: 430.75,
    direnc2: 438.75,
    direnc3: 446.25,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "ISCTR",
    fark: -0.67,
    son: 12.89,
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
    fark: -0.79,
    son: 196.7,
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
    fark: -0.5,
    son: 42.34,
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
    fark: -0.05,
    son: 625,
    pivot: 625.333,
    destek1: 617.167,
    destek2: 609.333,
    destek3: 601.167,
    direnc1: 633.167,
    direnc2: 641.333,
    direnc3: 649.167,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "PETKM",
    fark: -2.1,
    son: 20.16,
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
    fark: 0.06,
    son: 161.6,
    pivot: 161.5,
    destek1: 160,
    destek2: 158.3999,
    destek3: 156.8999,
    direnc1: 163.1,
    direnc2: 164.6,
    direnc3: 166.2,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "SAHOL",
    fark: -0.46,
    son: 87.1,
    pivot: 87.5,
    destek1: 86.1999,
    destek2: 85.2999,
    destek3: 83.9999,
    direnc1: 88.4,
    direnc2: 89.7,
    direnc3: 90.6,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "SASA",
    fark: -3.62,
    son: 2.57,
    pivot: 2.6666,
    destek1: 2.6133,
    destek2: 2.5366,
    destek3: 2.4833,
    direnc1: 2.7433,
    direnc2: 2.7966,
    direnc3: 2.8733,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "SISE",
    fark: -0.85,
    son: 42.96,
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
    fark: 1.16,
    son: 262.25,
    pivot: 259.25,
    destek1: 256.5,
    destek2: 253.5,
    destek3: 250.75,
    direnc1: 262.25,
    direnc2: 265,
    direnc3: 268,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "TCELL",
    fark: -1.38,
    son: 102.3,
    pivot: 103.7333,
    destek1: 102.06666,
    destek2: 100.4333,
    destek3: 98.7666,
    direnc1: 105.3666,
    direnc2: 107.0333,
    direnc3: 108.6666,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "THYAO",
    fark: 1.62,
    son: 318,
    pivot: 312.9166,
    destek1: 310.3333,
    destek2: 308.6666,
    destek3: 306.08333,
    direnc1: 314.5833,
    direnc2: 317.1666,
    direnc3: 318.8333,
    yorum: "İkinci direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "TOASO",
    fark: -1.24,
    son: 272.5,
    pivot: 275.917,
    destek1: 265.833,
    destek2: 259.167,
    destek3: 249.083,
    direnc1: 282.583,
    direnc2: 292.667,
    direnc3: 299.333,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "TRALT",
    fark: -2.86,
    son: 48.26,
    pivot: 49.68,
    destek1: 47.76,
    destek2: 46.4,
    destek3: 44.48,
    direnc1: 51.04,
    direnc2: 52.96,
    direnc3: 54.32,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "TTKOM",
    fark: -2.97,
    son: 52.75,
    pivot: 54.3666,
    destek1: 52.7833,
    destek2: 51.5666,
    destek3: 49.9833,
    direnc1: 55.5833,
    direnc2: 57.1666,
    direnc3: 58.3833,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "TUPRS",
    fark: -0.88,
    son: 292.25,
    pivot: 294.833,
    destek1: 288.667,
    destek2: 285.083,
    destek3: 278.917,
    direnc1: 298.417,
    direnc2: 304.583,
    direnc3: 308.167,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "VAKBN",
    fark: -1.56,
    son: 29.86,
    pivot: 30.333,
    destek1: 29.947,
    destek2: 29.633,
    destek3: 29.267,
    direnc1: 30.627,
    direnc2: 31.013,
    direnc3: 31.307,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "YKBNK",
    fark: -1.61,
    son: 32.9,
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