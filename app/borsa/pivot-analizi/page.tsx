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
  fark: -2.15,
  son: 14189.96,
  pivot: 14502.060,
  destek1: 14392.750,
  destek2: 14288.140,
  destek3: 14178.830,
  direnc1: 14606.670,
  direnc2: 14715.980,
  direnc3: 14820.590,
  yorum: "İkinci destek seviyesinin altına indi.",
};

const pivotVerileri: PivotRow[] = [
  {
    sembol: "AEFES",
    fark: -1.31,
    son: 20.14,
    pivot: 20.407,
    destek1: 20.173,
    destek2: 19.827,
    destek3: 19.593,
    direnc1: 20.753,
    direnc2: 20.987,
    direnc3: 21.333,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "AKBNK",
    fark: -4.51,
    son: 70.65,
    pivot: 73.983,
    destek1: 72.817,
    destek2: 72.033,
    destek3: 70.867,
    direnc1: 74.767,
    direnc2: 75.933,
    direnc3: 76.717,
    yorum: "Üçüncü destek seviyesinin altına indi.",
  },
  {
    sembol: "ASELS",
    fark: -3.81,
    son: 377.0,
    pivot: 391.9166,
    destek1: 373.8333,
    destek2: 364.6666,
    destek3: 346.5833,
    direnc1: 401.08333,
    direnc2: 419.1666,
    direnc3: 428.3333,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "ASTOR",
    fark: -2.53,
    son: 317.5,
    pivot: 325.75,
    destek1: 315.0,
    destek2: 304.75,
    destek3: 294.0,
    direnc1: 336.0,
    direnc2: 346.75,
    direnc3: 357.0,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "BIMAS",
    fark: 0.8,
    son: 375.75,
    pivot: 372.75,
    destek1: 368.5,
    destek2: 362.75,
    destek3: 358.5,
    direnc1: 378.5,
    direnc2: 382.75,
    direnc3: 388.5,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "DSTKF",
    fark: 0.81,
    son: 3820.0,
    pivot: 3789.1666,
    destek1: 3648.3333,
    destek2: 3376.6666,
    destek3: 3235.8333,
    direnc1: 4060.8333,
    direnc2: 4201.6666,
    direnc3: 4473.3333,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "EKGYO",
    fark: -1.98,
    son: 20.4,
    pivot: 20.813,
    destek1: 20.467,
    destek2: 19.993,
    destek3: 19.647,
    direnc1: 21.287,
    direnc2: 21.633,
    direnc3: 22.107,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "ENKAI",
    fark: -1.66,
    son: 89.6,
    pivot: 91.117,
    destek1: 90.033,
    destek2: 89.017,
    destek3: 87.933,
    direnc1: 92.133,
    direnc2: 93.217,
    direnc3: 94.233,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "EREGL",
    fark: -2.87,
    son: 39.94,
    pivot: 41.12,
    destek1: 40.64,
    destek2: 40.02,
    destek3: 39.54,
    direnc1: 41.74,
    direnc2: 42.22,
    direnc3: 42.84,
    yorum: "İkinci destek seviyesinin altına indi.",
  },
  {
    sembol: "FROTO",
    fark: -2.53,
    son: 80.8,
    pivot: 82.8999,
    destek1: 81.85,
    destek2: 80.7,
    destek3: 79.65,
    direnc1: 84.04999,
    direnc2: 85.09999,
    direnc3: 86.2499,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "GARAN",
    fark: -3.19,
    son: 130.4,
    pivot: 134.7,
    destek1: 132.9,
    destek2: 131.4,
    destek3: 129.6,
    direnc1: 136.2,
    direnc2: 138.0,
    direnc3: 139.5,
    yorum: "İkinci destek seviyesinin altına indi.",
  },
  {
    sembol: "GUBRF",
    fark: -6.01,
    son: 433.75,
    pivot: 461.5,
    destek1: 450.75,
    destek2: 443.75,
    destek3: 433.0,
    direnc1: 468.5,
    direnc2: 479.25,
    direnc3: 486.25,
    yorum: "İkinci destek seviyesinin altına indi.",
  },
  {
    sembol: "ISCTR",
    fark: -2.81,
    son: 14.08,
    pivot: 14.487,
    destek1: 14.263,
    destek2: 14.077,
    destek3: 13.853,
    direnc1: 14.673,
    direnc2: 14.897,
    direnc3: 15.083,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "KCHOL",
    fark: -2.97,
    son: 184.0,
    pivot: 189.633,
    destek1: 186.867,
    destek2: 184.533,
    destek3: 181.767,
    direnc1: 191.967,
    direnc2: 194.733,
    direnc3: 197.067,
    yorum: "İkinci destek seviyesinin altına indi.",
  },
  {
    sembol: "KRDMD",
    fark: -4.81,
    son: 36.3,
    pivot: 38.133,
    destek1: 36.847,
    destek2: 36.153,
    destek3: 34.867,
    direnc1: 38.827,
    direnc2: 40.113,
    direnc3: 40.807,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "MGROS",
    fark: -0.96,
    son: 639.5,
    pivot: 645.667,
    destek1: 637.333,
    destek2: 626.167,
    destek3: 617.833,
    direnc1: 656.833,
    direnc2: 665.167,
    direnc3: 676.333,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "PETKM",
    fark: 0.61,
    son: 19.22,
    pivot: 19.1033,
    destek1: 18.8366,
    destek2: 18.5133,
    destek3: 18.2466,
    direnc1: 19.4266,
    direnc2: 19.6933,
    direnc3: 20.01666,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "PGSUS",
    fark: -5.18,
    son: 166.0,
    pivot: 175.067,
    destek1: 172.333,
    destek2: 170.567,
    destek3: 167.833,
    direnc1: 176.833,
    direnc2: 179.567,
    direnc3: 181.333,
    yorum: "Üçüncü destek seviyesinin altına indi.",
  },
  {
    sembol: "SAHOL",
    fark: -3.79,
    son: 90.0,
    pivot: 93.55,
    destek1: 92.05,
    destek2: 91.3,
    destek3: 89.8,
    direnc1: 94.3,
    direnc2: 95.8,
    direnc3: 96.55,
    yorum: "İkinci destek seviyesinin altına indi.",
  },
  {
    sembol: "SASA",
    fark: -3.74,
    son: 2.23,
    pivot: 2.3166,
    destek1: 2.2833,
    destek2: 2.2566,
    destek3: 2.2233,
    direnc1: 2.3433,
    direnc2: 2.3766,
    direnc3: 2.4033,
    yorum: "İkinci destek seviyesinin altına indi.",
  },
  {
    sembol: "SISE",
    fark: -3.85,
    son: 41.62,
    pivot: 43.287,
    destek1: 42.833,
    destek2: 42.507,
    destek3: 42.053,
    direnc1: 43.613,
    direnc2: 44.067,
    direnc3: 44.393,
    yorum: "Üçüncü destek seviyesinin altına indi.",
  },
  {
    sembol: "TAVHL",
    fark: -3.39,
    son: 263.75,
    pivot: 273.0,
    destek1: 268.5,
    destek2: 264.75,
    destek3: 260.25,
    direnc1: 276.75,
    direnc2: 281.25,
    direnc3: 285.0,
    yorum: "İkinci destek seviyesinin altına indi.",
  },
  {
    sembol: "TCELL",
    fark: -2.68,
    son: 105.4,
    pivot: 108.3,
    destek1: 107.2,
    destek2: 106.2,
    destek3: 105.1,
    direnc1: 109.3,
    direnc2: 110.4,
    direnc3: 111.4,
    yorum: "İkinci destek seviyesinin altına indi.",
  },
  {
    sembol: "THYAO",
    fark: -5.05,
    son: 332.0,
    pivot: 349.666,
    destek1: 343.8333,
    destek2: 339.4166,
    destek3: 333.5833,
    direnc1: 354.08333,
    direnc2: 359.9166,
    direnc3: 364.3333,
    yorum: "Üçüncü destek seviyesinin altına indi.",
  },
  {
    sembol: "TOASO",
    fark: -1.13,
    son: 297.75,
    pivot: 301.167,
    destek1: 295.833,
    destek2: 292.667,
    destek3: 287.333,
    direnc1: 304.333,
    direnc2: 309.667,
    direnc3: 312.833,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "TRALT",
    fark: -1.63,
    son: 51.25,
    pivot: 52.1,
    destek1: 50.75,
    destek2: 49.3,
    destek3: 47.95,
    direnc1: 53.55,
    direnc2: 54.9,
    direnc3: 56.35,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "TTKOM",
    fark: -4.18,
    son: 57.3,
    pivot: 59.8,
    destek1: 58.65,
    destek2: 58.000001271,
    destek3: 56.85,
    direnc1: 60.4499,
    direnc2: 61.5999,
    direnc3: 62.2499,
    yorum: "İkinci destek seviyesinin altına indi.",
  },
  {
    sembol: "TUPRS",
    fark: 0.58,
    son: 256.5,
    pivot: 255.01666,
    destek1: 250.7833,
    destek2: 243.5666,
    destek3: 239.3333,
    direnc1: 262.2333,
    direnc2: 266.4666,
    direnc3: 273.6833,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "VAKBN",
    fark: -4.12,
    son: 30.92,
    pivot: 32.247,
    destek1: 31.933,
    destek2: 31.427,
    destek3: 31.113,
    direnc1: 32.753,
    direnc2: 33.067,
    direnc3: 33.573,
    yorum: "Üçüncü destek seviyesinin altına indi.",
  },
  {
    sembol: "YKBNK",
    fark: -3.89,
    son: 36.22,
    pivot: 37.687,
    destek1: 37.193,
    destek2: 36.787,
    destek3: 36.293,
    direnc1: 38.093,
    direnc2: 38.587,
    direnc3: 38.993,
    yorum: "Üçüncü destek seviyesinin altına indi.",
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
