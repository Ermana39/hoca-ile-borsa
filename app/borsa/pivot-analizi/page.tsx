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
  fark: 0.95,
  son: 14138.85,
  pivot: 14006.010,
  destek1: 13884.210,
  destek2: 13794.290,
  destek3: 13672.490,
  direnc1: 14095.930,
  direnc2: 14217.730,
  direnc3: 14307.650,
  yorum: "İlk direnç seviyesinin üstüne çıktı.",
};

const pivotVerileri: PivotRow[] = [
  {
    sembol: "AEFES",
    fark: 1.16,
    son: 22.12,
    pivot: 21.867,
    destek1: 21.433,
    destek2: 20.627,
    destek3: 20.193,
    direnc1: 22.673,
    direnc2: 23.107,
    direnc3: 23.913,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "AKBNK",
    fark: -0.4,
    son: 66.55,
    pivot: 66.817,
    destek1: 66.133,
    destek2: 65.567,
    destek3: 64.883,
    direnc1: 67.383,
    direnc2: 68.067,
    direnc3: 68.633,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "ASELS",
    fark: 3.06,
    son: 370.0,
    pivot: 359.0,
    destek1: 354.5,
    destek2: 349.0,
    destek3: 344.5,
    direnc1: 364.5,
    direnc2: 369.0,
    direnc3: 374.5,
    yorum: "İkinci direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "ASTOR",
    fark: -0.52,
    son: 300.0,
    pivot: 301.583,
    destek1: 296.417,
    destek2: 292.833,
    destek3: 287.667,
    direnc1: 305.167,
    direnc2: 310.333,
    direnc3: 313.917,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "BIMAS",
    fark: 0.67,
    son: 399.75,
    pivot: 397.083,
    destek1: 385.917,
    destek2: 378.833,
    destek3: 367.667,
    direnc1: 404.167,
    direnc2: 415.333,
    direnc3: 422.417,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "DSTKF",
    fark: -1.59,
    son: 2100.0,
    pivot: 2134.0,
    destek1: 1954.0,
    destek2: 1864.0,
    destek3: 1684.0,
    direnc1: 2224.0,
    direnc2: 2404.0,
    direnc3: 2494.0,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "EKGYO",
    fark: -1.85,
    son: 19.63,
    pivot: 20.0,
    destek1: 19.52,
    destek2: 19.24,
    destek3: 18.76,
    direnc1: 20.28,
    direnc2: 20.76,
    direnc3: 21.04,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "ENKAI",
    fark: 0.04,
    son: 91.05,
    pivot: 91.017,
    destek1: 90.133,
    destek2: 89.067,
    destek3: 88.183,
    direnc1: 92.083,
    direnc2: 92.967,
    direnc3: 94.033,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "EREGL",
    fark: -1.6,
    son: 42.24,
    pivot: 42.927,
    destek1: 41.593,
    destek2: 40.887,
    destek3: 39.553,
    direnc1: 43.633,
    direnc2: 44.967,
    direnc3: 45.673,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "FROTO",
    fark: -0.22,
    son: 81.45,
    pivot: 81.633,
    destek1: 80.217,
    destek2: 79.333,
    destek3: 77.917,
    direnc1: 82.517,
    direnc2: 83.933,
    direnc3: 84.817,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "GARAN",
    fark: 0.96,
    son: 125.9,
    pivot: 124.7,
    destek1: 123.5,
    destek2: 122.8,
    destek3: 121.6,
    direnc1: 125.4,
    direnc2: 126.6,
    direnc3: 127.3,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "GUBRF",
    fark: 2.85,
    son: 430.25,
    pivot: 418.333,
    destek1: 410.667,
    destek2: 405.083,
    destek3: 397.417,
    direnc1: 423.917,
    direnc2: 431.583,
    direnc3: 437.167,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "ISCTR",
    fark: 0.21,
    son: 13.06,
    pivot: 13.033,
    destek1: 12.807,
    destek2: 12.683,
    destek3: 12.457,
    direnc1: 13.157,
    direnc2: 13.383,
    direnc3: 13.507,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "KCHOL",
    fark: 1.52,
    son: 204.3,
    pivot: 201.233,
    destek1: 199.667,
    destek2: 197.833,
    destek3: 196.267,
    direnc1: 203.067,
    direnc2: 204.633,
    direnc3: 206.467,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "KRDMD",
    fark: -4.85,
    son: 41.96,
    pivot: 44.1,
    destek1: 43.18,
    destek2: 42.62,
    destek3: 41.7,
    direnc1: 44.66,
    direnc2: 45.58,
    direnc3: 46.14,
    yorum: "İkinci destek seviyesinin altına indi.",
  },
  {
    sembol: "MGROS",
    fark: 0.05,
    son: 639.0,
    pivot: 638.667,
    destek1: 622.333,
    destek2: 608.667,
    destek3: 592.333,
    direnc1: 652.333,
    direnc2: 668.667,
    direnc3: 682.333,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "PETKM",
    fark: 2.05,
    son: 22.22,
    pivot: 21.773,
    destek1: 20.827,
    destek2: 20.333,
    destek3: 19.387,
    direnc1: 22.267,
    direnc2: 23.213,
    direnc3: 23.707,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "PGSUS",
    fark: -0.51,
    son: 163.0,
    pivot: 163.833,
    destek1: 161.667,
    destek2: 160.033,
    destek3: 157.867,
    direnc1: 165.467,
    direnc2: 167.633,
    direnc3: 169.267,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "SAHOL",
    fark: 0.3,
    son: 89.1,
    pivot: 88.833,
    destek1: 87.767,
    destek2: 87.133,
    destek3: 86.067,
    direnc1: 89.467,
    direnc2: 90.533,
    direnc3: 91.167,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "SASA",
    fark: 5.18,
    son: 2.64,
    pivot: 2.51,
    destek1: 2.45,
    destek2: 2.39,
    destek3: 2.33,
    direnc1: 2.57,
    direnc2: 2.63,
    direnc3: 2.69,
    yorum: "İkinci direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "SISE",
    fark: -0.27,
    son: 43.62,
    pivot: 43.74,
    destek1: 42.54,
    destek2: 41.9,
    destek3: 40.7,
    direnc1: 44.38,
    direnc2: 45.58,
    direnc3: 46.22,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "TAVHL",
    fark: 1.63,
    son: 275.25,
    pivot: 270.833,
    destek1: 265.917,
    destek2: 261.083,
    destek3: 256.167,
    direnc1: 275.667,
    direnc2: 280.583,
    direnc3: 285.417,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "TCELL",
    fark: 0.0,
    son: 111.0,
    pivot: 111.0,
    destek1: 110.1,
    destek2: 108.7,
    destek3: 107.8,
    direnc1: 112.4,
    direnc2: 113.3,
    direnc3: 114.7,
    yorum: "Pivot değerine eşit.",
  },
  {
    sembol: "THYAO",
    fark: -0.23,
    son: 321.0,
    pivot: 321.75,
    destek1: 313.25,
    destek2: 309.0,
    destek3: 300.5,
    direnc1: 326.0,
    direnc2: 334.5,
    direnc3: 338.75,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "TOASO",
    fark: -1.16,
    son: 297.5,
    pivot: 301.0,
    destek1: 296.5,
    destek2: 293.0,
    destek3: 288.5,
    direnc1: 304.5,
    direnc2: 309.0,
    direnc3: 312.5,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "TRALT",
    fark: -0.6,
    son: 49.84,
    pivot: 50.14,
    destek1: 48.88,
    destek2: 48.22,
    destek3: 46.96,
    direnc1: 50.8,
    direnc2: 52.06,
    direnc3: 52.72,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "TTKOM",
    fark: -0.68,
    son: 58.65,
    pivot: 59.05,
    destek1: 58.1,
    destek2: 57.6,
    destek3: 56.65,
    direnc1: 59.55,
    direnc2: 60.5,
    direnc3: 61.0,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "TUPRS",
    fark: 1.65,
    son: 313.75,
    pivot: 308.667,
    destek1: 305.333,
    destek2: 301.167,
    destek3: 297.833,
    direnc1: 312.833,
    direnc2: 316.167,
    direnc3: 320.333,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "VAKBN",
    fark: -0.3,
    son: 30.62,
    pivot: 30.713,
    destek1: 30.387,
    destek2: 30.173,
    destek3: 29.847,
    direnc1: 30.927,
    direnc2: 31.253,
    direnc3: 31.467,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "YKBNK",
    fark: 0.04,
    son: 33.14,
    pivot: 33.127,
    destek1: 32.533,
    destek2: 32.207,
    destek3: 31.613,
    direnc1: 33.453,
    direnc2: 34.047,
    direnc3: 34.373,
    yorum: "Pivot değerinin üstünde seyrediyor.",
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