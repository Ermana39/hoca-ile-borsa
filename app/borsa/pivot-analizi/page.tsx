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
  fark: -0.18,
  son: 14729.65,
  pivot: 14756.11,
  destek1: 14636.16,
  destek2: 14537.81,
  destek3: 14417.86,
  direnc1: 14854.46,
  direnc2: 14974.41,
  direnc3: 15072.76,
  yorum: "Pivot değerinin altında seyrediyor.",
};

const pivotVerileri: PivotRow[] = [
  {
    sembol: "AEFES",
    fark: -0.44,
    son: 21.06,
    pivot: 21.153,
    destek1: 20.827,
    destek2: 20.633,
    destek3: 20.307,
    direnc1: 21.347,
    direnc2: 21.673,
    direnc3: 21.867,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "AKBNK",
    fark: 0.55,
    son: 82.0,
    pivot: 81.55,
    destek1: 80.1,
    destek2: 78.35,
    destek3: 76.9,
    direnc1: 83.3,
    direnc2: 84.75,
    direnc3: 86.5,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "ASELS",
    fark: -2.59,
    son: 394.75,
    pivot: 405.25,
    destek1: 397.75,
    destek2: 393.0,
    destek3: 385.5,
    direnc1: 410.0,
    direnc2: 417.5,
    direnc3: 422.25,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "ASTOR",
    fark: 5.06,
    son: 311.5,
    pivot: 296.5,
    destek1: 289.5,
    destek2: 284.25,
    destek3: 277.25,
    direnc1: 301.75,
    direnc2: 308.75,
    direnc3: 314.0,
    yorum: "İkinci direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "BIMAS",
    fark: -1.54,
    son: 379.0,
    pivot: 384.917,
    destek1: 380.583,
    destek2: 377.917,
    destek3: 373.583,
    direnc1: 387.583,
    direnc2: 391.917,
    direnc3: 394.583,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "DSTKF",
    fark: 4.73,
    son: 3300.0,
    pivot: 3150.833,
    destek1: 3051.667,
    destek2: 2903.333,
    destek3: 2804.167,
    direnc1: 3299.167,
    direnc2: 3398.333,
    direnc3: 3546.667,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "EKGYO",
    fark: 0.18,
    son: 22.0,
    pivot: 21.96,
    destek1: 21.66,
    destek2: 21.38,
    destek3: 21.08,
    direnc1: 22.24,
    direnc2: 22.54,
    direnc3: 22.82,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "ENKAI",
    fark: -1.38,
    son: 92.7,
    pivot: 94.0,
    destek1: 93.3,
    destek2: 92.2,
    destek3: 91.5,
    direnc1: 95.1,
    direnc2: 95.8,
    direnc3: 96.9,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "EREGL",
    fark: 0.92,
    son: 40.34,
    pivot: 39.973,
    destek1: 39.667,
    destek2: 39.313,
    destek3: 39.007,
    direnc1: 40.327,
    direnc2: 40.633,
    direnc3: 40.987,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "FROTO",
    fark: -1.16,
    son: 89.85,
    pivot: 90.9,
    destek1: 90.2,
    destek2: 89.3,
    destek3: 88.6,
    direnc1: 91.8,
    direnc2: 92.5,
    direnc3: 93.4,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "GARAN",
    fark: 0.35,
    son: 143.7,
    pivot: 143.2,
    destek1: 141.9,
    destek2: 140.1,
    destek3: 138.8,
    direnc1: 145.0,
    direnc2: 146.3,
    direnc3: 148.1,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "GUBRF",
    fark: 2.36,
    son: 509.0,
    pivot: 497.25,
    destek1: 481.5,
    destek2: 473.0,
    destek3: 457.25,
    direnc1: 505.75,
    direnc2: 521.5,
    direnc3: 530.0,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "ISCTR",
    fark: 0.48,
    son: 15.42,
    pivot: 15.347,
    destek1: 15.193,
    destek2: 15.027,
    destek3: 14.873,
    direnc1: 15.513,
    direnc2: 15.667,
    direnc3: 15.833,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "KCHOL",
    fark: 0.51,
    son: 197.2,
    pivot: 196.2,
    destek1: 193.8,
    destek2: 192.3,
    destek3: 189.9,
    direnc1: 197.7,
    direnc2: 200.1,
    direnc3: 201.6,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "KRDMD",
    fark: 1.46,
    son: 41.32,
    pivot: 40.727,
    destek1: 40.013,
    destek2: 39.247,
    destek3: 38.533,
    direnc1: 41.493,
    direnc2: 42.207,
    direnc3: 42.973,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "MGROS",
    fark: -0.46,
    son: 684.5,
    pivot: 687.667,
    destek1: 680.333,
    destek2: 673.667,
    destek3: 666.333,
    direnc1: 694.333,
    direnc2: 701.667,
    direnc3: 708.333,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "PETKM",
    fark: -0.16,
    son: 20.26,
    pivot: 20.293,
    destek1: 19.747,
    destek2: 19.373,
    destek3: 18.827,
    direnc1: 20.667,
    direnc2: 21.213,
    direnc3: 21.587,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "PGSUS",
    fark: -0.42,
    son: 182.5,
    pivot: 183.267,
    destek1: 181.533,
    destek2: 180.567,
    destek3: 178.833,
    direnc1: 184.233,
    direnc2: 185.967,
    direnc3: 186.933,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "SAHOL",
    fark: 0.33,
    son: 101.5,
    pivot: 101.167,
    destek1: 99.833,
    destek2: 98.867,
    destek3: 97.533,
    direnc1: 102.133,
    direnc2: 103.467,
    direnc3: 104.433,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "SASA",
    fark: 0.11,
    son: 2.74,
    pivot: 2.737,
    destek1: 2.703,
    destek2: 2.677,
    destek3: 2.643,
    direnc1: 2.763,
    direnc2: 2.797,
    direnc3: 2.823,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "SISE",
    fark: -0.91,
    son: 46.32,
    pivot: 46.747,
    destek1: 45.353,
    destek2: 44.427,
    destek3: 43.033,
    direnc1: 47.673,
    direnc2: 49.067,
    direnc3: 49.993,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "TAVHL",
    fark: -3.36,
    son: 288.0,
    pivot: 298.0,
    destek1: 292.0,
    destek2: 287.0,
    destek3: 281.0,
    direnc1: 303.0,
    direnc2: 309.0,
    direnc3: 314.0,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "TCELL",
    fark: -0.9,
    son: 113.2,
    pivot: 114.233,
    destek1: 112.567,
    destek2: 111.733,
    destek3: 110.067,
    direnc1: 115.067,
    direnc2: 116.733,
    direnc3: 117.567,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "THYAO",
    fark: -0.97,
    son: 324.75,
    pivot: 327.917,
    destek1: 322.583,
    destek2: 318.417,
    destek3: 313.083,
    direnc1: 332.083,
    direnc2: 337.417,
    direnc3: 341.583,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "TOASO",
    fark: 0.84,
    son: 331.75,
    pivot: 329.0,
    destek1: 324.25,
    destek2: 320.75,
    destek3: 316.0,
    direnc1: 332.5,
    direnc2: 337.25,
    direnc3: 340.75,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "TRALT",
    fark: 0.88,
    son: 51.4,
    pivot: 50.95,
    destek1: 50.35,
    destek2: 49.45,
    destek3: 48.85,
    direnc1: 51.85,
    direnc2: 52.45,
    direnc3: 53.35,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "TTKOM",
    fark: 1.0,
    son: 63.85,
    pivot: 63.217,
    destek1: 62.633,
    destek2: 62.167,
    destek3: 61.583,
    direnc1: 63.683,
    direnc2: 64.267,
    direnc3: 64.733,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "TUPRS",
    fark: -2.45,
    son: 220.7,
    pivot: 226.233,
    destek1: 224.867,
    destek2: 222.833,
    destek3: 221.467,
    direnc1: 228.267,
    direnc2: 229.633,
    direnc3: 231.667,
    yorum: "Üçüncü destek seviyesinin altına indi.",
  },
  {
    sembol: "VAKBN",
    fark: -0.31,
    son: 34.82,
    pivot: 34.927,
    destek1: 34.593,
    destek2: 34.187,
    destek3: 33.853,
    direnc1: 35.333,
    direnc2: 35.667,
    direnc3: 36.073,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "YKBNK",
    fark: 1.72,
    son: 43.84,
    pivot: 43.1,
    destek1: 42.44,
    destek2: 41.5,
    destek3: 40.84,
    direnc1: 44.04,
    direnc2: 44.7,
    direnc3: 45.64,
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
