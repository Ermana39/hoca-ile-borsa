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
  sembol: "F_XU0300626",
  fark: 1.44,
  son: 15848.24,
  pivot: 15623.33,
  destek1: 15300.67,
  destek2: 15107.33,
  destek3: 14784.67,
  direnc1: 15816.67,
  direnc2: 16139.33,
  direnc3: 16332.67,
  yorum: "İlk direnç seviyesinin üstüne çıktı.",
};

const pivotVerileri: PivotRow[] = [
  {
    sembol: "AEFES",
    fark: 0.2,
    son: 20.3,
    pivot: 20.26,
    destek1: 19.92,
    destek2: 19.48,
    destek3: 19.14,
    direnc1: 20.7,
    direnc2: 21.04,
    direnc3: 21.48,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "AKBNK",
    fark: 2.16,
    son: 66.9,
    pivot: 65.483,
    destek1: 63.417,
    destek2: 62.333,
    destek3: 60.267,
    direnc1: 66.567,
    direnc2: 68.633,
    direnc3: 69.717,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "ASELS",
    fark: 1.68,
    son: 368,
    pivot: 361.9166,
    destek1: 356.08333,
    destek2: 349.1666,
    destek3: 343.3333,
    direnc1: 368.8333,
    direnc2: 374.6666,
    direnc3: 381.5833,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "ASTOR",
    fark: -2.69,
    son: 308,
    pivot: 316.5,
    destek1: 304.5,
    destek2: 292,
    destek3: 280,
    direnc1: 329,
    direnc2: 341,
    direnc3: 353.5,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "BIMAS",
    fark: 0.33,
    son: 377.25,
    pivot: 376,
    destek1: 372.25,
    destek2: 367.25,
    destek3: 363.5,
    direnc1: 381,
    direnc2: 384.75,
    direnc3: 389.75,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "DSTKF",
    fark: 7.72,
    son: 2470,
    pivot: 2293,
    destek1: 2261,
    destek2: 2197,
    destek3: 2165,
    direnc1: 2357,
    direnc2: 2389,
    direnc3: 2453,
    yorum: "Üçüncü direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "EKGYO",
    fark: -0.97,
    son: 19.43,
    pivot: 19.62,
    destek1: 18.84,
    destek2: 18.45,
    destek3: 17.67,
    direnc1: 20.01,
    direnc2: 20.79,
    direnc3: 21.18,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "ENKAI",
    fark: 1.37,
    son: 94.95,
    pivot: 93.6666,
    destek1: 92.1833,
    destek2: 91.0166,
    destek3: 89.5333,
    direnc1: 94.8333,
    direnc2: 96.3166,
    direnc3: 97.4833,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "EREGL",
    fark: -1.28,
    son: 39.02,
    pivot: 39.527,
    destek1: 38.513,
    destek2: 37.867,
    destek3: 36.853,
    direnc1: 40.173,
    direnc2: 41.187,
    direnc3: 41.833,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "FROTO",
    fark: 0.02,
    son: 87.1,
    pivot: 87.08333,
    destek1: 84.9666,
    destek2: 83.7333,
    destek3: 81.6166,
    direnc1: 88.3166,
    direnc2: 90.4333,
    direnc3: 91.6666,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "GARAN",
    fark: 2.03,
    son: 129.3,
    pivot: 126.7333,
    destek1: 123.1666,
    destek2: 121.3333,
    destek3: 117.7666,
    direnc1: 128.5666,
    direnc2: 132.1333,
    direnc3: 133.9666,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "GUBRF",
    fark: -0.66,
    son: 500.5,
    pivot: 503.833,
    destek1: 482.167,
    destek2: 471.333,
    destek3: 449.667,
    direnc1: 514.667,
    direnc2: 536.333,
    direnc3: 547.167,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "ISCTR",
    fark: 3.26,
    son: 13.83,
    pivot: 13.393,
    destek1: 12.967,
    destek2: 12.743,
    destek3: 12.317,
    direnc1: 13.617,
    direnc2: 14.043,
    direnc3: 14.267,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "KCHOL",
    fark: 0.49,
    son: 190.9,
    pivot: 189.967,
    destek1: 187.633,
    destek2: 186.267,
    destek3: 183.933,
    direnc1: 191.333,
    direnc2: 193.667,
    direnc3: 195.033,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "KRDMD",
    fark: -0.41,
    son: 39,
    pivot: 39.16,
    destek1: 38.56,
    destek2: 38.12,
    destek3: 37.52,
    direnc1: 39.6,
    direnc2: 40.2,
    direnc3: 40.64,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "MGROS",
    fark: 0.28,
    son: 665.5,
    pivot: 663.667,
    destek1: 654.333,
    destek2: 646.667,
    destek3: 637.333,
    direnc1: 671.333,
    direnc2: 680.667,
    direnc3: 688.333,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "PETKM",
    fark: 1.03,
    son: 20.98,
    pivot: 20.767,
    destek1: 20.313,
    destek2: 19.787,
    destek3: 19.333,
    direnc1: 21.293,
    direnc2: 21.747,
    direnc3: 22.273,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "PGSUS",
    fark: 0.37,
    son: 170,
    pivot: 169.3666,
    destek1: 166.9333,
    destek2: 165.2666,
    destek3: 162.8333,
    direnc1: 171.03334,
    direnc2: 173.4666,
    direnc3: 175.1333,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "SAHOL",
    fark: 0.85,
    son: 91.5,
    pivot: 90.733,
    destek1: 89.217,
    destek2: 88.433,
    destek3: 86.917,
    direnc1: 91.517,
    direnc2: 93.033,
    direnc3: 93.817,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "SASA",
    fark: 2.24,
    son: 2.59,
    pivot: 2.5333,
    destek1: 2.4466,
    destek2: 2.4033,
    destek3: 2.3166,
    direnc1: 2.5766,
    direnc2: 2.6633,
    direnc3: 2.7066,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "SISE",
    fark: -0.13,
    son: 45.02,
    pivot: 45.08,
    destek1: 44.38,
    destek2: 43.96,
    destek3: 43.26,
    direnc1: 45.5,
    direnc2: 46.2,
    direnc3: 46.62,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "TAVHL",
    fark: -2.34,
    son: 254,
    pivot: 260.083,
    destek1: 254.917,
    destek2: 252.333,
    destek3: 247.167,
    direnc1: 262.667,
    direnc2: 267.833,
    direnc3: 270.417,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "TCELL",
    fark: 1.38,
    son: 107.4,
    pivot: 105.933,
    destek1: 103.767,
    destek2: 102.433,
    destek3: 100.267,
    direnc1: 107.267,
    direnc2: 109.433,
    direnc3: 110.767,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "THYAO",
    fark: -0.08,
    son: 297.25,
    pivot: 297.5,
    destek1: 294.75,
    destek2: 292.5,
    destek3: 289.75,
    direnc1: 299.75,
    direnc2: 302.5,
    direnc3: 304.75,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "TOASO",
    fark: -1.33,
    son: 291,
    pivot: 294.917,
    destek1: 290.333,
    destek2: 286.667,
    destek3: 282.083,
    direnc1: 298.583,
    direnc2: 303.167,
    direnc3: 306.833,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "TRALT",
    fark: -0.59,
    son: 46.04,
    pivot: 46.313,
    destek1: 43.627,
    destek2: 42.113,
    destek3: 39.427,
    direnc1: 47.827,
    direnc2: 50.513,
    direnc3: 52.027,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "TTKOM",
    fark: 2.25,
    son: 64.3,
    pivot: 62.883,
    destek1: 61.317,
    destek2: 60.333,
    destek3: 58.767,
    direnc1: 63.867,
    direnc2: 65.433,
    direnc3: 66.417,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "TUPRS",
    fark: 0.11,
    son: 238.8,
    pivot: 238.5333,
    destek1: 235.2666,
    destek2: 229.7333,
    destek3: 226.4666,
    direnc1: 244.06667,
    direnc2: 247.3333,
    direnc3: 252.8666,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "VAKBN",
    fark: 0.31,
    son: 32.3,
    pivot: 32.2,
    destek1: 31.16,
    destek2: 30.56,
    destek3: 29.52,
    direnc1: 32.8,
    direnc2: 33.84,
    direnc3: 34.44,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "YKBNK",
    fark: 2.06,
    son: 34.94,
    pivot: 34.2333,
    destek1: 32.9666,
    destek2: 32.3333,
    destek3: 31.0666,
    direnc1: 34.8666,
    direnc2: 36.1333,
    direnc3: 36.7666,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
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