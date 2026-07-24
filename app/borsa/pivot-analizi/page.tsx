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
  fark: -1.20,
  son: 13943.87,
  pivot: 14112.530,
  destek1: 13997.030,
  destek2: 13916.400,
  destek3: 13800.900,
  direnc1: 14193.160,
  direnc2: 14308.660,
  direnc3: 14389.290,
  yorum: "İlk destek seviyesinin altına indi.",
};

const pivotVerileri: PivotRow[] = [
  {
    sembol: "AEFES",
    fark: -3.32,
    son: 20.96,
    pivot: 21.68,
    destek1: 21.24,
    destek2: 20.94,
    destek3: 20.5,
    direnc1: 21.98,
    direnc2: 22.42,
    direnc3: 22.72,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "AKBNK",
    fark: 1.22,
    son: 67.6,
    pivot: 66.783,
    destek1: 66.417,
    destek2: 65.783,
    destek3: 65.417,
    direnc1: 67.417,
    direnc2: 67.783,
    direnc3: 68.417,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "ASELS",
    fark: 1.2,
    son: 380.25,
    pivot: 375.75,
    destek1: 370.5,
    destek2: 364.75,
    destek3: 359.5,
    direnc1: 381.5,
    direnc2: 386.75,
    direnc3: 392.5,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "ASTOR",
    fark: -2.62,
    son: 297.0,
    pivot: 305.0,
    destek1: 300.5,
    destek2: 294.0,
    destek3: 289.5,
    direnc1: 311.5,
    direnc2: 316.0,
    direnc3: 322.5,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "BIMAS",
    fark: -3.41,
    son: 380.25,
    pivot: 393.667,
    destek1: 385.583,
    destek2: 380.667,
    destek3: 372.583,
    direnc1: 398.583,
    direnc2: 406.667,
    direnc3: 411.583,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "DSTKF",
    fark: 0.08,
    son: 2048.0,
    pivot: 2046.333,
    destek1: 1984.667,
    destek2: 1869.333,
    destek3: 1807.667,
    direnc1: 2161.667,
    direnc2: 2223.333,
    direnc3: 2338.667,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "EKGYO",
    fark: -3.66,
    son: 18.62,
    pivot: 19.327,
    destek1: 18.933,
    destek2: 18.697,
    destek3: 18.303,
    direnc1: 19.563,
    direnc2: 19.957,
    direnc3: 20.193,
    yorum: "İkinci destek seviyesinin altına indi.",
  },
  {
    sembol: "ENKAI",
    fark: -1.57,
    son: 88.8,
    pivot: 90.217,
    destek1: 88.983,
    destek2: 88.017,
    destek3: 86.783,
    direnc1: 91.183,
    direnc2: 92.417,
    direnc3: 93.383,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "EREGL",
    fark: -1.2,
    son: 43.28,
    pivot: 43.807,
    destek1: 42.513,
    destek2: 40.827,
    destek3: 39.533,
    direnc1: 45.493,
    direnc2: 46.787,
    direnc3: 48.473,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "FROTO",
    fark: -1.46,
    son: 79.0,
    pivot: 80.167,
    destek1: 78.483,
    destek2: 77.567,
    destek3: 75.883,
    direnc1: 81.083,
    direnc2: 82.767,
    direnc3: 83.683,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "GARAN",
    fark: 0.5,
    son: 126.0,
    pivot: 125.367,
    destek1: 123.933,
    destek2: 122.867,
    destek3: 121.433,
    direnc1: 126.433,
    direnc2: 127.867,
    direnc3: 128.933,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "GUBRF",
    fark: -1.3,
    son: 422.75,
    pivot: 428.333,
    destek1: 420.167,
    destek2: 415.333,
    destek3: 407.167,
    direnc1: 433.167,
    direnc2: 441.333,
    direnc3: 446.167,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "ISCTR",
    fark: -0.67,
    son: 12.92,
    pivot: 13.007,
    destek1: 12.893,
    destek2: 12.787,
    destek3: 12.673,
    direnc1: 13.113,
    direnc2: 13.227,
    direnc3: 13.333,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "KCHOL",
    fark: -1.46,
    son: 197.6,
    pivot: 200.533,
    destek1: 195.467,
    destek2: 192.733,
    destek3: 187.667,
    direnc1: 203.267,
    direnc2: 208.333,
    direnc3: 211.067,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "KRDMD",
    fark: -0.89,
    son: 42.2,
    pivot: 42.58,
    destek1: 41.28,
    destek2: 40.4,
    destek3: 39.1,
    direnc1: 43.46,
    direnc2: 44.76,
    direnc3: 45.64,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "MGROS",
    fark: -1.79,
    son: 623.0,
    pivot: 634.333,
    destek1: 626.167,
    destek2: 621.833,
    destek3: 613.667,
    direnc1: 638.667,
    direnc2: 646.833,
    direnc3: 651.167,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "PETKM",
    fark: -3.05,
    son: 22.02,
    pivot: 22.713,
    destek1: 22.227,
    destek2: 21.893,
    destek3: 21.407,
    direnc1: 23.047,
    direnc2: 23.533,
    direnc3: 23.867,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "PGSUS",
    fark: 0.21,
    son: 161.6,
    pivot: 161.267,
    destek1: 159.233,
    destek2: 158.067,
    destek3: 156.033,
    direnc1: 162.433,
    direnc2: 164.467,
    direnc3: 165.633,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "SAHOL",
    fark: -1.25,
    son: 87.1,
    pivot: 88.2,
    destek1: 87.3,
    destek2: 86.65,
    destek3: 85.75,
    direnc1: 88.85,
    direnc2: 89.75,
    direnc3: 90.4,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "SASA",
    fark: 0.86,
    son: 2.69,
    pivot: 2.667,
    destek1: 2.613,
    destek2: 2.577,
    destek3: 2.523,
    direnc1: 2.703,
    direnc2: 2.757,
    direnc3: 2.793,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "SISE",
    fark: -0.91,
    son: 43.42,
    pivot: 43.82,
    destek1: 43.24,
    destek2: 42.8,
    destek3: 42.22,
    direnc1: 44.26,
    direnc2: 44.84,
    direnc3: 45.28,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "TAVHL",
    fark: -1.86,
    son: 259.5,
    pivot: 264.417,
    destek1: 254.083,
    destek2: 248.917,
    destek3: 238.583,
    direnc1: 269.583,
    direnc2: 279.917,
    direnc3: 285.083,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "TCELL",
    fark: -2.6,
    son: 103.7,
    pivot: 106.467,
    destek1: 102.333,
    destek2: 99.667,
    destek3: 95.533,
    direnc1: 109.133,
    direnc2: 113.267,
    direnc3: 115.933,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "THYAO",
    fark: -0.69,
    son: 312.0,
    pivot: 314.167,
    destek1: 308.833,
    destek2: 304.917,
    destek3: 299.583,
    direnc1: 318.083,
    direnc2: 323.417,
    direnc3: 327.333,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "TOASO",
    fark: -3.19,
    son: 281.0,
    pivot: 290.25,
    destek1: 281.25,
    destek2: 276.25,
    destek3: 267.25,
    direnc1: 295.25,
    direnc2: 304.25,
    direnc3: 309.25,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "TRALT",
    fark: -5.02,
    son: 49.12,
    pivot: 51.717,
    destek1: 48.883,
    destek2: 47.217,
    destek3: 44.383,
    direnc1: 53.383,
    direnc2: 56.217,
    direnc3: 57.883,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "TTKOM",
    fark: -4.48,
    son: 54.0,
    pivot: 56.533,
    destek1: 54.267,
    destek2: 52.883,
    destek3: 50.617,
    direnc1: 57.917,
    direnc2: 60.183,
    direnc3: 61.567,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "TUPRS",
    fark: -3.36,
    son: 304.25,
    pivot: 314.833,
    destek1: 309.417,
    destek2: 304.333,
    destek3: 298.917,
    direnc1: 319.917,
    direnc2: 325.333,
    direnc3: 330.417,
    yorum: "İkinci destek seviyesinin altına indi.",
  },
  {
    sembol: "VAKBN",
    fark: -0.83,
    son: 30.24,
    pivot: 30.493,
    destek1: 30.187,
    destek2: 29.933,
    destek3: 29.627,
    direnc1: 30.747,
    direnc2: 31.053,
    direnc3: 31.307,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "YKBNK",
    fark: 0.5,
    son: 33.36,
    pivot: 33.193,
    destek1: 32.927,
    destek2: 32.593,
    destek3: 32.327,
    direnc1: 33.527,
    direnc2: 33.793,
    direnc3: 34.127,
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