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
  sembol: "XU030",
  fark: 0.17,
  son: 15205.67,
  pivot: 15179.86,
  destek1: 15086.41,
  destek2: 14924.4,
  destek3: 14830.95,
  direnc1: 15341.87,
  direnc2: 15435.32,
  direnc3: 15597.33,
  yorum: "Pivot değerinin üstünde seyrediyor.",
};

const pivotVerileri: PivotRow[] = [
  {
    sembol: "AEFES",
    fark: 1.6,
    son: 22.08,
    pivot: 21.733,
    destek1: 21.487,
    destek2: 21.093,
    destek3: 20.847,
    direnc1: 22.127,
    direnc2: 22.373,
    direnc3: 22.767,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "AKBNK",
    fark: 4.98,
    son: 66,
    pivot: 62.867,
    destek1: 61.883,
    destek2: 60.367,
    destek3: 59.383,
    direnc1: 64.383,
    direnc2: 65.367,
    direnc3: 66.883,
    yorum: "İkinci direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "ASELS",
    fark: -2.13,
    son: 336.25,
    pivot: 343.583,
    destek1: 338.417,
    destek2: 334.583,
    destek3: 329.417,
    direnc1: 347.417,
    direnc2: 352.583,
    direnc3: 356.417,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "ASTOR",
    fark: -0.94,
    son: 290.5,
    pivot: 293.25,
    destek1: 289.5,
    destek2: 283.5,
    destek3: 279.75,
    direnc1: 299.25,
    direnc2: 303,
    direnc3: 309,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "BIMAS",
    fark: -1.96,
    son: 379,
    pivot: 386.583,
    destek1: 382.917,
    destek2: 375.583,
    destek3: 371.917,
    direnc1: 393.917,
    direnc2: 397.583,
    direnc3: 404.917,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "DSTKF",
    fark: -7.55,
    son: 1613,
    pivot: 1744.667,
    destek1: 1661.333,
    destek2: 1619.667,
    destek3: 1536.333,
    direnc1: 1786.333,
    direnc2: 1869.667,
    direnc3: 1911.333,
    yorum: "İkinci destek seviyesinin altına indi.",
  },
  {
    sembol: "EKGYO",
    fark: 2.09,
    son: 18.19,
    pivot: 17.817,
    destek1: 17.653,
    destek2: 17.397,
    destek3: 17.233,
    direnc1: 18.073,
    direnc2: 18.237,
    direnc3: 18.493,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "ENKAI",
    fark: 0.42,
    son: 87.05,
    pivot: 86.683,
    destek1: 85.667,
    destek2: 83.733,
    destek3: 82.717,
    direnc1: 88.617,
    direnc2: 89.633,
    direnc3: 91.567,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "EREGL",
    fark: -4.03,
    son: 40.7,
    pivot: 42.407,
    destek1: 41.893,
    destek2: 41.247,
    destek3: 40.733,
    direnc1: 43.053,
    direnc2: 43.567,
    direnc3: 44.213,
    yorum: "Üçüncü destek seviyesinin altına indi.",
  },
  {
    sembol: "FROTO",
    fark: 0,
    son: 79.05,
    pivot: 79.05,
    destek1: 77.95,
    destek2: 75.8,
    destek3: 74.7,
    direnc1: 81.2,
    direnc2: 82.3,
    direnc3: 84.45,
    yorum: "Pivot değerine eşit.",
  },
  {
    sembol: "GARAN",
    fark: 4.35,
    son: 127.9,
    pivot: 122.567,
    destek1: 120.833,
    destek2: 118.267,
    destek3: 116.533,
    direnc1: 125.133,
    direnc2: 126.867,
    direnc3: 129.433,
    yorum: "İkinci direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "GUBRF",
    fark: 1.08,
    son: 404.5,
    pivot: 400.167,
    destek1: 393.333,
    destek2: 388.167,
    destek3: 381.333,
    direnc1: 405.333,
    direnc2: 412.167,
    direnc3: 417.333,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "ISCTR",
    fark: 2.86,
    son: 12.68,
    pivot: 12.327,
    destek1: 12.183,
    destek2: 11.897,
    destek3: 11.753,
    direnc1: 12.613,
    direnc2: 12.757,
    direnc3: 13.043,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "KCHOL",
    fark: 0.8,
    son: 196.7,
    pivot: 195.133,
    destek1: 193.367,
    destek2: 189.833,
    destek3: 188.067,
    direnc1: 198.667,
    direnc2: 200.433,
    direnc3: 203.967,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "KRDMD",
    fark: -1.61,
    son: 40.22,
    pivot: 40.88,
    destek1: 40.48,
    destek2: 39.76,
    destek3: 39.36,
    direnc1: 41.6,
    direnc2: 42,
    direnc3: 42.72,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "MGROS",
    fark: -1.77,
    son: 610.5,
    pivot: 621.5,
    destek1: 615,
    destek2: 604.5,
    destek3: 598,
    direnc1: 632,
    direnc2: 638.5,
    direnc3: 649,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "PETKM",
    fark: 0.47,
    son: 19.08,
    pivot: 18.99,
    destek1: 18.83,
    destek2: 18.54,
    destek3: 18.38,
    direnc1: 19.28,
    direnc2: 19.44,
    direnc3: 19.73,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "PGSUS",
    fark: 3.09,
    son: 156.6,
    pivot: 151.9,
    destek1: 150.4,
    destek2: 147.8,
    destek3: 146.3,
    direnc1: 154.5,
    direnc2: 156,
    direnc3: 158.6,
    yorum: "İkinci direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "SAHOL",
    fark: 3.24,
    son: 86.55,
    pivot: 83.833,
    destek1: 83.017,
    destek2: 81.533,
    destek3: 80.717,
    direnc1: 85.317,
    direnc2: 86.133,
    direnc3: 87.617,
    yorum: "İkinci direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "SASA",
    fark: 2.44,
    son: 2.52,
    pivot: 2.46,
    destek1: 2.42,
    destek2: 2.37,
    destek3: 2.33,
    direnc1: 2.51,
    direnc2: 2.55,
    direnc3: 2.6,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "SISE",
    fark: 1.48,
    son: 42.14,
    pivot: 41.527,
    destek1: 41.233,
    destek2: 40.727,
    destek3: 40.433,
    direnc1: 42.033,
    direnc2: 42.327,
    direnc3: 42.833,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "TAVHL",
    fark: 2.61,
    son: 278,
    pivot: 270.917,
    destek1: 267.583,
    destek2: 263.417,
    destek3: 260.083,
    direnc1: 275.083,
    direnc2: 278.417,
    direnc3: 282.583,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "TCELL",
    fark: 4.01,
    son: 104.5,
    pivot: 100.467,
    destek1: 98.733,
    destek2: 97.517,
    destek3: 95.783,
    direnc1: 101.683,
    direnc2: 103.417,
    direnc3: 104.633,
    yorum: "İkinci direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "THYAO",
    fark: 1.39,
    son: 317,
    pivot: 312.667,
    destek1: 310.083,
    destek2: 306.167,
    destek3: 303.583,
    direnc1: 316.583,
    direnc2: 319.167,
    direnc3: 323.083,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "TOASO",
    fark: 1.56,
    son: 272,
    pivot: 267.833,
    destek1: 262.667,
    destek2: 252.833,
    destek3: 247.667,
    direnc1: 277.667,
    direnc2: 282.833,
    direnc3: 292.667,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "TRALT",
    fark: 2.24,
    son: 45.06,
    pivot: 44.073,
    destek1: 42.487,
    destek2: 40.813,
    destek3: 39.227,
    direnc1: 45.747,
    direnc2: 47.333,
    direnc3: 49.007,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "TTKOM",
    fark: 3.98,
    son: 52.75,
    pivot: 50.733,
    destek1: 50.317,
    destek2: 49.633,
    destek3: 49.217,
    direnc1: 51.417,
    direnc2: 51.833,
    direnc3: 52.517,
    yorum: "Üçüncü direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "TUPRS",
    fark: -0.6,
    son: 290.5,
    pivot: 292.25,
    destek1: 288.75,
    destek2: 282.25,
    destek3: 278.75,
    direnc1: 298.75,
    direnc2: 302.25,
    direnc3: 308.75,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "VAKBN",
    fark: 5.05,
    son: 30.5,
    pivot: 29.033,
    destek1: 28.707,
    destek2: 28.193,
    destek3: 27.867,
    direnc1: 29.547,
    direnc2: 29.873,
    direnc3: 30.387,
    yorum: "Üçüncü direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "YKBNK",
    fark: 5.44,
    son: 34,
    pivot: 32.247,
    destek1: 31.693,
    destek2: 30.627,
    destek3: 30.073,
    direnc1: 33.313,
    direnc2: 33.867,
    direnc3: 34.933,
    yorum: "İkinci direnç seviyesinin üstüne çıktı.",
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
            hem XU030 endeksi hem de hisse bazlı teknik görünüm takibi yapmak
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