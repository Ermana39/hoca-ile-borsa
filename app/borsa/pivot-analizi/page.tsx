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
  fark: -0.54,
  son: 14183.21,
  pivot: 14259.88,
  destek1: 14161.19,
  destek2: 14048.35,
  destek3: 13949.66,
  direnc1: 14372.72,
  direnc2: 14471.41,
  direnc3: 14584.25,
  yorum: "Pivot değerinin altında seyrediyor.",
};

const pivotVerileri: PivotRow[] = [
  {
    sembol: "AEFES",
    fark: 1.17,
    son: 21.34,
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
    fark: 0.0,
    son: 77.2,
    pivot: 77.2,
    destek1: 76.5,
    destek2: 75.75,
    destek3: 75.05,
    direnc1: 77.95,
    direnc2: 78.65,
    direnc3: 79.4,
    yorum: "Pivot değere eşit.",
  },
  {
    sembol: "ASELS",
    fark: -2.03,
    son: 357.5,
    pivot: 364.9166,
    destek1: 350.8333,
    destek2: 340.1666,
    destek3: 326.08333,
    direnc1: 375.5833,
    direnc2: 389.6666,
    direnc3: 400.3333,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "ASTOR",
    fark: -5.15,
    son: 278.0,
    pivot: 293.083,
    destek1: 284.417,
    destek2: 279.083,
    destek3: 270.417,
    direnc1: 298.417,
    direnc2: 307.083,
    direnc3: 312.417,
    yorum: "İkinci destek seviyesinin altına indi.",
  },
  {
    sembol: "BIMAS",
    fark: -0.71,
    son: 371.0,
    pivot: 373.6666,
    destek1: 369.3333,
    destek2: 364.1666,
    destek3: 359.8333,
    direnc1: 378.8333,
    direnc2: 383.1666,
    direnc3: 388.3333,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "DSTKF",
    fark: 2.08,
    son: 3550.0,
    pivot: 3477.5,
    destek1: 3405.0,
    destek2: 3345.0,
    destek3: 3272.5,
    direnc1: 3537.5,
    direnc2: 3610.0,
    direnc3: 3670.0,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "EKGYO",
    fark: -0.29,
    son: 20.8,
    pivot: 20.86,
    destek1: 20.72,
    destek2: 20.48,
    destek3: 20.34,
    direnc1: 21.1,
    direnc2: 21.24,
    direnc3: 21.48,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "ENKAI",
    fark: 1.09,
    son: 91.4,
    pivot: 90.4166,
    destek1: 89.5833,
    destek2: 88.3166,
    destek3: 87.4833,
    direnc1: 91.6833,
    direnc2: 92.5166,
    direnc3: 93.7833,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "EREGL",
    fark: -0.82,
    son: 41.2,
    pivot: 41.5399,
    destek1: 40.8999,
    destek2: 39.6799,
    destek3: 39.03999,
    direnc1: 42.7599,
    direnc2: 43.4,
    direnc3: 44.62,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "FROTO",
    fark: -0.95,
    son: 85.45,
    pivot: 86.2666,
    destek1: 85.6833,
    destek2: 85.1166,
    destek3: 84.5333,
    direnc1: 86.8333,
    direnc2: 87.4166,
    direnc3: 87.9833,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "GARAN",
    fark: -0.63,
    son: 137.3,
    pivot: 138.167,
    destek1: 137.333,
    destek2: 136.267,
    destek3: 135.433,
    direnc1: 139.233,
    direnc2: 140.067,
    direnc3: 141.133,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "GUBRF",
    fark: -5.73,
    son: 451.0,
    pivot: 478.417,
    destek1: 472.333,
    destek2: 464.917,
    destek3: 458.833,
    direnc1: 485.833,
    direnc2: 491.917,
    direnc3: 499.333,
    yorum: "Üçüncü destek seviyesinin altına indi.",
  },
  {
    sembol: "ISCTR",
    fark: -0.02,
    son: 14.69,
    pivot: 14.6933,
    destek1: 14.6066,
    destek2: 14.4733,
    destek3: 14.3866,
    direnc1: 14.8266,
    direnc2: 14.9133,
    direnc3: 15.04666,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "KCHOL",
    fark: -0.66,
    son: 195.7,
    pivot: 197.0,
    destek1: 195.3,
    destek2: 192.4,
    destek3: 190.7,
    direnc1: 199.9,
    direnc2: 201.6,
    direnc3: 204.5,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "KRDMD",
    fark: 0.02,
    son: 40.12,
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
    fark: -2.63,
    son: 672.0,
    pivot: 690.167,
    destek1: 680.333,
    destek2: 672.167,
    destek3: 662.333,
    direnc1: 698.333,
    direnc2: 708.167,
    direnc3: 716.333,
    yorum: "İkinci destek seviyesinin altına indi.",
  },
  {
    sembol: "PETKM",
    fark: -1.03,
    son: 19.2,
    pivot: 19.4,
    destek1: 19.22,
    destek2: 18.86,
    destek3: 18.68,
    direnc1: 19.7599,
    direnc2: 19.9399,
    direnc3: 20.2999,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "PGSUS",
    fark: -1.37,
    son: 177.1,
    pivot: 179.567,
    destek1: 177.833,
    destek2: 175.567,
    destek3: 173.833,
    direnc1: 181.833,
    direnc2: 183.567,
    direnc3: 185.833,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "SAHOL",
    fark: 0.17,
    son: 97.5,
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
    fark: -2.26,
    son: 2.45,
    pivot: 2.5066,
    destek1: 2.4833,
    destek2: 2.4466,
    destek3: 2.4233,
    direnc1: 2.5433,
    direnc2: 2.5666,
    direnc3: 2.6033,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "SISE",
    fark: 0.04,
    son: 44.94,
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
    fark: -0.36,
    son: 280.0,
    pivot: 281.0,
    destek1: 277.75,
    destek2: 275.5,
    destek3: 272.25,
    direnc1: 283.25,
    direnc2: 286.5,
    direnc3: 288.75,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "TCELL",
    fark: -1.02,
    son: 109.6,
    pivot: 110.733,
    destek1: 109.867,
    destek2: 108.833,
    destek3: 107.967,
    direnc1: 111.767,
    direnc2: 112.633,
    direnc3: 113.667,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "THYAO",
    fark: -0.35,
    son: 329.0,
    pivot: 330.1666,
    destek1: 328.0833,
    destek2: 325.4166,
    destek3: 323.3333,
    direnc1: 332.8333,
    direnc2: 334.9166,
    direnc3: 337.5833,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "TOASO",
    fark: -4.49,
    son: 313.5,
    pivot: 328.25,
    destek1: 318.75,
    destek2: 312.5,
    destek3: 303.0,
    direnc1: 334.5,
    direnc2: 344.0,
    direnc3: 350.25,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "TRALT",
    fark: -3.22,
    son: 45.5,
    pivot: 47.0133,
    destek1: 46.2666,
    destek2: 45.5733,
    destek3: 44.8266,
    direnc1: 47.7066,
    direnc2: 48.4533,
    direnc3: 49.1466,
    yorum: "İkinci destek seviyesinin altına indi.",
  },
  {
    sembol: "TTKOM",
    fark: 1.08,
    son: 62.5,
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
    fark: 0.17,
    son: 219.3,
    pivot: 218.9333,
    destek1: 217.7666,
    destek2: 216.3333,
    destek3: 215.1666,
    direnc1: 220.3666,
    direnc2: 221.5333,
    direnc3: 222.9666,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "VAKBN",
    fark: -0.16,
    son: 32.64,
    pivot: 32.693,
    destek1: 32.427,
    destek2: 31.893,
    destek3: 31.627,
    direnc1: 33.227,
    direnc2: 33.493,
    direnc3: 34.027,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "YKBNK",
    fark: -1.49,
    son: 40.08,
    pivot: 40.6866,
    destek1: 40.2333,
    destek2: 39.8066,
    destek3: 39.3533,
    direnc1: 41.1133,
    direnc2: 41.5666,
    direnc3: 41.9933,
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
