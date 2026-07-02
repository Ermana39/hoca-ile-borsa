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
  fark: 1.37,
  son: 14455.03,
  pivot: 14259.110,
  destek1: 14123.210,
  destek2: 13895.810,
  destek3: 13759.910,
  direnc1: 14486.510,
  direnc2: 14622.410,
  direnc3: 14849.810,
  yorum: "Pivot değerinin üstünde seyrediyor.",
};

const pivotVerileri: PivotRow[] = [
  {
    sembol: "AEFES",
    fark: -2.04,
    son: 20.5,
    pivot: 20.927,
    destek1: 20.593,
    destek2: 20.327,
    destek3: 19.993,
    direnc1: 21.193,
    direnc2: 21.527,
    direnc3: 21.793,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "AKBNK",
    fark: 0.91,
    son: 77.95,
    pivot: 77.25,
    destek1: 76.25,
    destek2: 74.65,
    destek3: 73.65,
    direnc1: 78.85,
    direnc2: 79.85,
    direnc3: 81.45,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "ASELS",
    fark: 6.28,
    son: 384.75,
    pivot: 362.0,
    destek1: 351.75,
    destek2: 332.25,
    destek3: 322.0,
    direnc1: 381.5,
    direnc2: 391.75,
    direnc3: 411.25,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "ASTOR",
    fark: 8.84,
    son: 301.75,
    pivot: 277.25,
    destek1: 270.75,
    destek2: 264.5,
    destek3: 258.0,
    direnc1: 283.5,
    direnc2: 290.0,
    direnc3: 296.25,
    yorum: "Üçüncü direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "BIMAS",
    fark: -1.99,
    son: 357.5,
    pivot: 364.75,
    destek1: 360.75,
    destek2: 357.0,
    destek3: 353.0,
    direnc1: 368.5,
    direnc2: 372.5,
    direnc3: 376.25,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "DSTKF",
    fark: 2.81,
    son: 3810.0,
    pivot: 3705.833,
    destek1: 3636.667,
    destek2: 3523.333,
    destek3: 3454.167,
    direnc1: 3819.167,
    direnc2: 3888.333,
    direnc3: 4001.667,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "EKGYO",
    fark: 4.3,
    son: 22.0,
    pivot: 21.093,
    destek1: 20.707,
    destek2: 20.093,
    destek3: 19.707,
    direnc1: 21.707,
    direnc2: 22.093,
    direnc3: 22.707,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "ENKAI",
    fark: -0.54,
    son: 92.05,
    pivot: 92.55,
    destek1: 90.95,
    destek2: 88.35,
    destek3: 86.75,
    direnc1: 95.15,
    direnc2: 96.75,
    direnc3: 99.35,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "EREGL",
    fark: 1.04,
    son: 40.8,
    pivot: 40.38,
    destek1: 39.72,
    destek2: 39.0,
    destek3: 38.34,
    direnc1: 41.1,
    direnc2: 41.76,
    direnc3: 42.48,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "FROTO",
    fark: -1.45,
    son: 83.7,
    pivot: 84.933,
    destek1: 83.917,
    destek2: 82.633,
    destek3: 81.617,
    direnc1: 86.217,
    direnc2: 87.233,
    direnc3: 88.517,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "GARAN",
    fark: 0.31,
    son: 138.6,
    pivot: 138.1666,
    destek1: 136.6333,
    destek2: 134.7666,
    destek3: 133.2333,
    direnc1: 140.03333,
    direnc2: 141.5666,
    direnc3: 143.4333,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "GUBRF",
    fark: 4.25,
    son: 461.75,
    pivot: 442.917,
    destek1: 436.583,
    destek2: 426.417,
    destek3: 420.083,
    direnc1: 453.083,
    direnc2: 459.417,
    direnc3: 469.583,
    yorum: "İkinci direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "ISCTR",
    fark: -0.2,
    son: 14.82,
    pivot: 14.85,
    destek1: 14.72,
    destek2: 14.51,
    destek3: 14.38,
    direnc1: 15.06,
    direnc2: 15.19,
    direnc3: 15.4,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "KCHOL",
    fark: -0.31,
    son: 193.7,
    pivot: 194.3,
    destek1: 191.8,
    destek2: 188.6,
    destek3: 186.1,
    direnc1: 197.5,
    direnc2: 200.0,
    direnc3: 203.2,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "KRDMD",
    fark: -0.91,
    son: 39.14,
    pivot: 39.5,
    destek1: 38.8,
    destek2: 38.02,
    destek3: 37.32,
    direnc1: 40.28,
    direnc2: 40.98,
    direnc3: 41.76,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "MGROS",
    fark: -4.74,
    son: 629.5,
    pivot: 660.833,
    destek1: 650.167,
    destek2: 641.333,
    destek3: 630.667,
    direnc1: 669.667,
    direnc2: 680.333,
    direnc3: 689.167,
    yorum: "Üçüncü destek seviyesinin altına indi.",
  },
  {
    sembol: "PETKM",
    fark: -1.34,
    son: 18.86,
    pivot: 19.117,
    destek1: 18.833,
    destek2: 18.667,
    destek3: 18.383,
    direnc1: 19.283,
    direnc2: 19.567,
    direnc3: 19.733,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "PGSUS",
    fark: 0.51,
    son: 177.0,
    pivot: 176.1,
    destek1: 174.4,
    destek2: 172.2,
    destek3: 170.5,
    direnc1: 178.3,
    direnc2: 180.0,
    direnc3: 182.2,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "SAHOL",
    fark: -0.14,
    son: 97.55,
    pivot: 97.683,
    destek1: 96.767,
    destek2: 95.433,
    destek3: 94.517,
    direnc1: 99.017,
    direnc2: 99.933,
    direnc3: 101.267,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "SASA",
    fark: -1.36,
    son: 2.4,
    pivot: 2.433,
    destek1: 2.407,
    destek2: 2.383,
    destek3: 2.357,
    direnc1: 2.457,
    direnc2: 2.483,
    direnc3: 2.507,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "SISE",
    fark: -0.3,
    son: 44.5,
    pivot: 44.633,
    destek1: 44.087,
    destek2: 43.313,
    destek3: 42.767,
    direnc1: 45.407,
    direnc2: 45.953,
    direnc3: 46.727,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "TAVHL",
    fark: -0.53,
    son: 281.75,
    pivot: 283.25,
    destek1: 280.5,
    destek2: 275.25,
    destek3: 272.5,
    direnc1: 288.5,
    direnc2: 291.25,
    direnc3: 296.5,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "TCELL",
    fark: 0.4,
    son: 108.4,
    pivot: 107.967,
    destek1: 106.833,
    destek2: 104.967,
    destek3: 103.833,
    direnc1: 109.833,
    direnc2: 110.967,
    direnc3: 112.833,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "THYAO",
    fark: 1.7,
    son: 333.25,
    pivot: 327.667,
    destek1: 323.833,
    destek2: 319.167,
    destek3: 315.333,
    direnc1: 332.333,
    direnc2: 336.167,
    direnc3: 340.833,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "TOASO",
    fark: 0.16,
    son: 306.25,
    pivot: 305.75,
    destek1: 301.25,
    destek2: 297.5,
    destek3: 293.0,
    direnc1: 309.5,
    direnc2: 314.0,
    direnc3: 317.75,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "TRALT",
    fark: 1.21,
    son: 47.94,
    pivot: 47.367,
    destek1: 46.173,
    destek2: 44.447,
    destek3: 43.253,
    direnc1: 49.093,
    direnc2: 50.287,
    direnc3: 52.013,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "TTKOM",
    fark: -0.49,
    son: 60.4,
    pivot: 60.7,
    destek1: 60.1,
    destek2: 59.55,
    destek3: 58.95,
    direnc1: 61.25,
    direnc2: 61.85,
    direnc3: 62.4,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "TUPRS",
    fark: 2.62,
    son: 239.8,
    pivot: 233.667,
    destek1: 228.633,
    destek2: 220.967,
    destek3: 215.933,
    direnc1: 241.333,
    direnc2: 246.367,
    direnc3: 254.033,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "VAKBN",
    fark: 1.27,
    son: 33.48,
    pivot: 33.06,
    destek1: 32.6,
    destek2: 31.92,
    destek3: 31.46,
    direnc1: 33.74,
    direnc2: 34.2,
    direnc3: 34.88,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "YKBNK",
    fark: 0.48,
    son: 40.5,
    pivot: 40.307,
    destek1: 39.853,
    destek2: 39.107,
    destek3: 38.653,
    direnc1: 41.053,
    direnc2: 41.507,
    direnc3: 42.253,
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
