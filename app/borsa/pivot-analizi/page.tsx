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
  fark: 0.12,
  son: 13743.5,
  pivot: 13726.82,
  destek1: 13618.13,
  destek2: 13491.63,
  destek3: 13382.94,
  direnc1: 13853.32,
  direnc2: 13962.01,
  direnc3: 14088.51,
  yorum: "Pivot değerinin üstünde seyrediyor.",
};

const pivotVerileri: PivotRow[] = [
  {
    sembol: "AEFES",
    fark: 0.8,
    son: 20.22,
    pivot: 20.06,
    destek1: 19.78,
    destek2: 19.6,
    destek3: 19.32,
    direnc1: 20.24,
    direnc2: 20.52,
    direnc3: 20.7,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "AKBNK",
    fark: 0.63,
    son: 66.8,
    pivot: 66.383,
    destek1: 65.317,
    destek2: 64.533,
    destek3: 63.467,
    direnc1: 67.167,
    direnc2: 68.233,
    direnc3: 69.017,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "ASELS",
    fark: 1.59,
    son: 377.75,
    pivot: 371.8333,
    destek1: 360.9166,
    destek2: 345.08333,
    destek3: 334.1666,
    direnc1: 387.6666,
    direnc2: 398.5833,
    direnc3: 414.4166,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "ASTOR",
    fark: 3.24,
    son: 295,
    pivot: 285.75,
    destek1: 271.75,
    destek2: 258.5,
    destek3: 244.5,
    direnc1: 299,
    direnc2: 313,
    direnc3: 326.25,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "BIMAS",
    fark: -0.54,
    son: 380.5,
    pivot: 382.5833,
    destek1: 377.6666,
    destek2: 374.8333,
    destek3: 369.9166,
    direnc1: 385.4166,
    direnc2: 390.3333,
    direnc3: 393.1666,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "DSTKF",
    fark: -0.06,
    son: 2600,
    pivot: 2601.667,
    destek1: 2520.833,
    destek2: 2441.667,
    destek3: 2360.833,
    direnc1: 2680.833,
    direnc2: 2761.667,
    direnc3: 2840.833,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "EKGYO",
    fark: -0.31,
    son: 19.16,
    pivot: 19.22,
    destek1: 18.96,
    destek2: 18.83,
    destek3: 18.57,
    direnc1: 19.35,
    direnc2: 19.61,
    direnc3: 19.74,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "ENKAI",
    fark: -1.56,
    son: 92.8,
    pivot: 94.267,
    destek1: 92.333,
    destek2: 90.867,
    destek3: 88.933,
    direnc1: 95.733,
    direnc2: 97.667,
    direnc3: 99.133,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "EREGL",
    fark: -0.29,
    son: 38.4,
    pivot: 38.513,
    destek1: 37.987,
    destek2: 37.333,
    destek3: 36.807,
    direnc1: 39.167,
    direnc2: 39.693,
    direnc3: 40.347,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "FROTO",
    fark: -0.59,
    son: 86.55,
    pivot: 87.067,
    destek1: 86.183,
    destek2: 84.917,
    destek3: 84.033,
    direnc1: 88.333,
    direnc2: 89.217,
    direnc3: 90.483,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "GARAN",
    fark: 0.47,
    son: 129,
    pivot: 128.4,
    destek1: 126.1,
    destek2: 124,
    destek3: 121.7,
    direnc1: 130.5,
    direnc2: 132.8,
    direnc3: 134.9,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "GUBRF",
    fark: -0.55,
    son: 468.75,
    pivot: 471.333,
    destek1: 463.667,
    destek2: 457.083,
    destek3: 449.417,
    direnc1: 477.917,
    direnc2: 485.583,
    direnc3: 492.167,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "ISCTR",
    fark: 0.17,
    son: 13.74,
    pivot: 13.7166,
    destek1: 13.5033,
    destek2: 13.2766,
    destek3: 13.06333,
    direnc1: 13.9433,
    direnc2: 14.1566,
    direnc3: 14.3833,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "KCHOL",
    fark: -0.59,
    son: 184.2,
    pivot: 185.3,
    destek1: 183.1,
    destek2: 181.2,
    destek3: 179,
    direnc1: 187.2,
    direnc2: 189.4,
    direnc3: 191.3,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "KRDMD",
    fark: 0.05,
    son: 38.56,
    pivot: 38.54,
    destek1: 37.58,
    destek2: 37.08,
    destek3: 36.12,
    direnc1: 39.04,
    direnc2: 40,
    direnc3: 40.5,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "MGROS",
    fark: -0.2,
    son: 666.5,
    pivot: 667.833,
    destek1: 660.667,
    destek2: 653.333,
    destek3: 646.167,
    direnc1: 675.167,
    direnc2: 682.333,
    direnc3: 689.667,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "PETKM",
    fark: -2.12,
    son: 19.71,
    pivot: 20.137,
    destek1: 19.753,
    destek2: 19.557,
    destek3: 19.173,
    direnc1: 20.333,
    direnc2: 20.717,
    direnc3: 20.913,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "PGSUS",
    fark: -1.12,
    son: 165.5,
    pivot: 167.367,
    destek1: 165.333,
    destek2: 163.867,
    destek3: 161.833,
    direnc1: 168.833,
    direnc2: 170.867,
    direnc3: 172.333,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "SAHOL",
    fark: 0.57,
    son: 91.6,
    pivot: 91.083,
    destek1: 90.217,
    destek2: 89.283,
    destek3: 88.417,
    direnc1: 92.017,
    direnc2: 92.883,
    direnc3: 93.817,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "SASA",
    fark: 4.92,
    son: 2.63,
    pivot: 2.5066,
    destek1: 2.4633,
    destek2: 2.4266,
    destek3: 2.3833,
    direnc1: 2.5433,
    direnc2: 2.5866,
    direnc3: 2.6233,
    yorum: "Üçüncü direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "SISE",
    fark: -1.31,
    son: 43.66,
    pivot: 44.24,
    destek1: 43.8,
    destek2: 43.4,
    destek3: 42.96,
    direnc1: 44.64,
    direnc2: 45.08,
    direnc3: 45.48,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "TAVHL",
    fark: -0.38,
    son: 259,
    pivot: 260,
    destek1: 256.5,
    destek2: 252.5,
    destek3: 249,
    direnc1: 264,
    direnc2: 267.5,
    direnc3: 271.5,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "TCELL",
    fark: 2.74,
    son: 107.5,
    pivot: 104.633,
    destek1: 103.467,
    destek2: 102.333,
    destek3: 101.167,
    direnc1: 105.767,
    direnc2: 106.933,
    direnc3: 108.067,
    yorum: "İkinci direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "THYAO",
    fark: -0.82,
    son: 293.25,
    pivot: 295.6666,
    destek1: 293.08333,
    destek2: 290.6666,
    destek3: 288.08333,
    direnc1: 298.08333,
    direnc2: 300.6666,
    direnc3: 303.08333,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "TOASO",
    fark: -2.64,
    son: 283,
    pivot: 290.667,
    destek1: 285.583,
    destek2: 281.167,
    destek3: 276.083,
    direnc1: 295.083,
    direnc2: 300.167,
    direnc3: 304.583,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "TRALT",
    fark: -1.43,
    son: 42.58,
    pivot: 43.1999,
    destek1: 42.2199,
    destek2: 41.4399,
    destek3: 40.4599,
    direnc1: 43.98,
    direnc2: 44.96,
    direnc3: 45.74,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "TTKOM",
    fark: -0.24,
    son: 61.7,
    pivot: 61.85,
    destek1: 60.45,
    destek2: 59.65,
    destek3: 58.25,
    direnc1: 62.65,
    direnc2: 64.05,
    direnc3: 64.85,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "TUPRS",
    fark: 0.83,
    son: 236,
    pivot: 234.067,
    destek1: 230.733,
    destek2: 226.667,
    destek3: 223.333,
    direnc1: 238.133,
    direnc2: 241.467,
    direnc3: 245.533,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "VAKBN",
    fark: -0.25,
    son: 31.82,
    pivot: 31.9,
    destek1: 31.08,
    destek2: 30.58,
    destek3: 29.76,
    direnc1: 32.4,
    direnc2: 33.22,
    direnc3: 33.72,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "YKBNK",
    fark: -0.02,
    son: 35.02,
    pivot: 35.027,
    destek1: 34.353,
    destek2: 33.907,
    destek3: 33.233,
    direnc1: 35.473,
    direnc2: 36.147,
    direnc3: 36.593,
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