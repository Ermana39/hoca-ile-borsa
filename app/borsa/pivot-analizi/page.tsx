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
  fark: -1.21,
  son: 14092.02,
  pivot: 14264.560,
  destek1: 14149.400,
  destek2: 13977.600,
  destek3: 13862.440,
  direnc1: 14436.360,
  direnc2: 14551.520,
  direnc3: 14723.320,
  yorum: "İlk destek seviyesinin altına indi.",
};

const pivotVerileri: PivotRow[] = [
  {
    sembol: "AEFES",
    fark: -0.63,
    son: 20.08,
    pivot: 20.207,
    destek1: 19.913,
    destek2: 19.367,
    destek3: 19.073,
    direnc1: 20.753,
    direnc2: 21.047,
    direnc3: 21.593,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "AKBNK",
    fark: -2.64,
    son: 67.65,
    pivot: 69.4833,
    destek1: 67.8666,
    destek2: 66.9833,
    destek3: 65.3666,
    direnc1: 70.3666,
    direnc2: 71.9833,
    direnc3: 72.8666,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "ASELS",
    fark: -3.89,
    son: 352.5,
    pivot: 366.75,
    destek1: 358.25,
    destek2: 346.5,
    destek3: 338.0,
    direnc1: 378.5,
    direnc2: 387.0,
    direnc3: 398.75,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "ASTOR",
    fark: -0.34,
    son: 318.0,
    pivot: 319.083,
    destek1: 309.417,
    destek2: 293.083,
    destek3: 283.417,
    direnc1: 335.417,
    direnc2: 345.083,
    direnc3: 361.417,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "BIMAS",
    fark: 0.9,
    son: 374.25,
    pivot: 370.917,
    destek1: 366.833,
    destek2: 361.167,
    destek3: 357.083,
    direnc1: 376.583,
    direnc2: 380.667,
    direnc3: 386.333,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "DSTKF",
    fark: -9.94,
    son: 3457.5,
    pivot: 3839.167,
    destek1: 3765.833,
    destek2: 3691.667,
    destek3: 3618.333,
    direnc1: 3913.333,
    direnc2: 3986.667,
    direnc3: 4060.833,
    yorum: "Üçüncü destek seviyesinin altına indi.",
  },
  {
    sembol: "EKGYO",
    fark: 1.2,
    son: 20.84,
    pivot: 20.593,
    destek1: 20.307,
    destek2: 19.773,
    destek3: 19.487,
    direnc1: 21.127,
    direnc2: 21.413,
    direnc3: 21.947,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "ENKAI",
    fark: 0.07,
    son: 89.8,
    pivot: 89.733,
    destek1: 88.817,
    destek2: 87.333,
    destek3: 86.417,
    direnc1: 91.217,
    direnc2: 92.133,
    direnc3: 93.617,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "EREGL",
    fark: 1.07,
    son: 40.86,
    pivot: 40.427,
    destek1: 39.873,
    destek2: 39.347,
    destek3: 38.793,
    direnc1: 40.953,
    direnc2: 41.507,
    direnc3: 42.033,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "FROTO",
    fark: 0.02,
    son: 81.55,
    pivot: 81.533,
    destek1: 80.9666,
    destek2: 80.1333,
    destek3: 79.5666,
    direnc1: 82.3666,
    direnc2: 82.9333,
    direnc3: 83.7666,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "GARAN",
    fark: -2.19,
    son: 126.7,
    pivot: 129.533,
    destek1: 126.867,
    destek2: 124.733,
    destek3: 122.067,
    direnc1: 131.667,
    direnc2: 134.333,
    direnc3: 136.467,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "GUBRF",
    fark: -6.92,
    son: 411.5,
    pivot: 442.083,
    destek1: 430.917,
    destek2: 424.333,
    destek3: 413.167,
    direnc1: 448.667,
    direnc2: 459.833,
    direnc3: 466.417,
    yorum: "Üçüncü destek seviyesinin altına indi.",
  },
  {
    sembol: "ISCTR",
    fark: -1.18,
    son: 13.7,
    pivot: 13.863,
    destek1: 13.617,
    destek2: 13.453,
    destek3: 13.207,
    direnc1: 14.027,
    direnc2: 14.273,
    direnc3: 14.437,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "KCHOL",
    fark: 0.58,
    son: 191.5,
    pivot: 190.4,
    destek1: 187.1,
    destek2: 181.4,
    destek3: 178.1,
    direnc1: 196.1,
    direnc2: 199.4,
    direnc3: 205.1,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "KRDMD",
    fark: 2.47,
    son: 38.24,
    pivot: 37.32,
    destek1: 36.82,
    destek2: 35.86,
    destek3: 35.36,
    direnc1: 38.28,
    direnc2: 38.78,
    direnc3: 39.74,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "MGROS",
    fark: 0.67,
    son: 626.0,
    pivot: 621.833,
    destek1: 616.667,
    destek2: 607.833,
    destek3: 602.667,
    direnc1: 630.667,
    direnc2: 635.833,
    direnc3: 644.667,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "PETKM",
    fark: 2.5,
    son: 19.8,
    pivot: 19.316,
    destek1: 19.0433,
    destek2: 18.7466,
    destek3: 18.4733,
    direnc1: 19.6133,
    direnc2: 19.8866,
    direnc3: 20.1833,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "PGSUS",
    fark: -2.25,
    son: 165.4,
    pivot: 169.2,
    destek1: 167.9,
    destek2: 165.6,
    destek3: 164.3,
    direnc1: 171.5,
    direnc2: 172.8,
    direnc3: 175.1,
    yorum: "İkinci destek seviyesinin altına indi.",
  },
  {
    sembol: "SAHOL",
    fark: -1.35,
    son: 89.2,
    pivot: 90.417,
    destek1: 89.233,
    destek2: 87.967,
    destek3: 86.783,
    direnc1: 91.683,
    direnc2: 92.867,
    direnc3: 94.133,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "SASA",
    fark: 7.3,
    son: 2.55,
    pivot: 2.3766,
    destek1: 2.3033,
    destek2: 2.1866,
    destek3: 2.1133,
    direnc1: 2.4933,
    direnc2: 2.5666,
    direnc3: 2.6833,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "SISE",
    fark: 0.08,
    son: 43.14,
    pivot: 43.1066,
    destek1: 42.4333,
    destek2: 41.4266,
    destek3: 40.7533,
    direnc1: 44.1133,
    direnc2: 44.7866,
    direnc3: 45.7933,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "TAVHL",
    fark: -2.72,
    son: 259.75,
    pivot: 267.0,
    destek1: 264.75,
    destek2: 260.25,
    destek3: 258.0,
    direnc1: 271.5,
    direnc2: 273.75,
    direnc3: 278.25,
    yorum: "İkinci destek seviyesinin altına indi.",
  },
  {
    sembol: "TCELL",
    fark: 2.41,
    son: 109.0,
    pivot: 106.433,
    destek1: 105.167,
    destek2: 103.333,
    destek3: 102.067,
    direnc1: 108.267,
    direnc2: 109.533,
    direnc3: 111.367,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "THYAO",
    fark: -2.58,
    son: 333.5,
    pivot: 342.3333,
    destek1: 339.1666,
    destek2: 333.8333,
    destek3: 330.6666,
    direnc1: 347.6666,
    direnc2: 350.8333,
    direnc3: 356.1666,
    yorum: "İkinci destek seviyesinin altına indi.",
  },
  {
    sembol: "TOASO",
    fark: 0.44,
    son: 301.5,
    pivot: 300.167,
    destek1: 296.583,
    destek2: 290.417,
    destek3: 286.833,
    direnc1: 306.333,
    direnc2: 309.917,
    direnc3: 316.083,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "TRALT",
    fark: -0.48,
    son: 51.75,
    pivot: 52.0,
    destek1: 50.35,
    destek2: 48.95,
    destek3: 47.3,
    direnc1: 53.4,
    direnc2: 55.05,
    direnc3: 56.45,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "TTKOM",
    fark: 0.26,
    son: 57.75,
    pivot: 57.6,
    destek1: 56.95,
    destek2: 55.9,
    destek3: 55.25,
    direnc1: 58.65,
    direnc2: 59.3,
    direnc3: 60.35,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "TUPRS",
    fark: 0.69,
    son: 268.25,
    pivot: 266.4166,
    destek1: 262.8333,
    destek2: 258.6666,
    destek3: 255.08333,
    direnc1: 270.5833,
    direnc2: 274.1666,
    direnc3: 278.3333,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "VAKBN",
    fark: -0.21,
    son: 31.1,
    pivot: 31.167,
    destek1: 30.833,
    destek2: 30.487,
    destek3: 30.153,
    direnc1: 31.513,
    direnc2: 31.847,
    direnc3: 32.193,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "YKBNK",
    fark: -3.93,
    son: 34.1,
    pivot: 35.4933,
    destek1: 34.5866,
    destek2: 34.03333,
    destek3: 33.1266,
    direnc1: 36.0466,
    direnc2: 36.9533,
    direnc3: 37.5066,
    yorum: "İlk destek seviyesinin altına indi.",
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