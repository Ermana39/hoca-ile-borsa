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
  fark: -0.33,
  son: 13741.89,
  pivot: 13787.98,
  destek1: 13653.02,
  destek2: 13445.46,
  destek3: 13310.5,
  direnc1: 13995.54,
  direnc2: 14130.5,
  direnc3: 14338.06,
  yorum: "Pivot değerinin altında seyrediyor.",
};

const pivotVerileri: PivotRow[] = [
  {
    sembol: "AEFES",
    fark: 0.54,
    son: 20.3,
    pivot: 20.19,
    destek1: 19.84,
    destek2: 19.38,
    destek3: 19.03,
    direnc1: 20.65,
    direnc2: 21,
    direnc3: 21.46,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "AKBNK",
    fark: 1.87,
    son: 67.15,
    pivot: 65.917,
    destek1: 64.433,
    destek2: 61.967,
    destek3: 60.483,
    direnc1: 68.383,
    direnc2: 69.867,
    direnc3: 72.333,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "ASELS",
    fark: -2.99,
    son: 357.25,
    pivot: 368.25,
    destek1: 359.25,
    destek2: 350.5,
    destek3: 341.5,
    direnc1: 377,
    direnc2: 386,
    direnc3: 394.75,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "ASTOR",
    fark: -3.83,
    son: 299,
    pivot: 310.917,
    destek1: 301.833,
    destek2: 295.667,
    destek3: 286.583,
    direnc1: 317.083,
    direnc2: 326.167,
    direnc3: 332.333,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "BIMAS",
    fark: 2.06,
    son: 383.75,
    pivot: 376,
    destek1: 371.5,
    destek2: 365.75,
    destek3: 361.25,
    direnc1: 381.75,
    direnc2: 386.25,
    direnc3: 392,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "DSTKF",
    fark: 5.58,
    son: 2550,
    pivot: 2415.333,
    destek1: 2355.667,
    destek2: 2241.333,
    destek3: 2181.667,
    direnc1: 2529.667,
    direnc2: 2589.333,
    direnc3: 2703.667,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "EKGYO",
    fark: -0.38,
    son: 19.2,
    pivot: 19.273,
    destek1: 18.977,
    destek2: 18.523,
    destek3: 18.227,
    direnc1: 19.727,
    direnc2: 20.023,
    direnc3: 20.477,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "ENKAI",
    fark: 2.27,
    son: 96.15,
    pivot: 94.017,
    destek1: 92.483,
    destek2: 90.017,
    destek3: 88.483,
    direnc1: 96.483,
    direnc2: 98.017,
    direnc3: 100.483,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "EREGL",
    fark: -1.06,
    son: 38.64,
    pivot: 39.053,
    destek1: 38.707,
    destek2: 38.393,
    destek3: 38.047,
    direnc1: 39.367,
    direnc2: 39.713,
    direnc3: 40.027,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "FROTO",
    fark: 0.08,
    son: 86.3,
    pivot: 86.233,
    destek1: 85.267,
    destek2: 83.433,
    destek3: 82.467,
    direnc1: 88.067,
    direnc2: 89.033,
    direnc3: 90.867,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "GARAN",
    fark: 2.3,
    son: 130.4,
    pivot: 127.467,
    destek1: 125.033,
    destek2: 120.767,
    destek3: 118.333,
    direnc1: 131.733,
    direnc2: 134.167,
    direnc3: 138.433,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "GUBRF",
    fark: -3.15,
    son: 479.25,
    pivot: 494.833,
    destek1: 486.667,
    destek2: 472.833,
    destek3: 464.667,
    direnc1: 508.667,
    direnc2: 516.833,
    direnc3: 530.667,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "ISCTR",
    fark: 1.82,
    son: 13.83,
    pivot: 13.583,
    destek1: 13.277,
    destek2: 12.723,
    destek3: 12.417,
    direnc1: 14.137,
    direnc2: 14.443,
    direnc3: 14.997,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "KCHOL",
    fark: -1.36,
    son: 186.7,
    pivot: 189.267,
    destek1: 186.833,
    destek2: 182.767,
    destek3: 180.333,
    direnc1: 193.333,
    direnc2: 195.767,
    direnc3: 199.833,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "KRDMD",
    fark: 0.62,
    son: 39.08,
    pivot: 38.84,
    destek1: 38.42,
    destek2: 37.84,
    destek3: 37.42,
    direnc1: 39.42,
    direnc2: 39.84,
    direnc3: 40.42,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "MGROS",
    fark: 1.28,
    son: 674,
    pivot: 665.5,
    destek1: 654.5,
    destek2: 643.5,
    destek3: 632.5,
    direnc1: 676.5,
    direnc2: 687.5,
    direnc3: 698.5,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "PETKM",
    fark: -4.5,
    son: 20.22,
    pivot: 21.173,
    destek1: 20.667,
    destek2: 20.353,
    destek3: 19.847,
    direnc1: 21.487,
    direnc2: 21.993,
    direnc3: 22.307,
    yorum: "İkinci destek seviyesinin altına indi.",
  },
  {
    sembol: "PGSUS",
    fark: 0.08,
    son: 168.9,
    pivot: 168.767,
    destek1: 166.933,
    destek2: 163.867,
    destek3: 162.033,
    direnc1: 171.833,
    direnc2: 173.667,
    direnc3: 176.733,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "SAHOL",
    fark: 0.5,
    son: 91.2,
    pivot: 90.75,
    destek1: 89.55,
    destek2: 87.6,
    destek3: 86.4,
    direnc1: 92.7,
    direnc2: 93.9,
    direnc3: 95.85,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "SASA",
    fark: -2.72,
    son: 2.5,
    pivot: 2.57,
    destek1: 2.52,
    destek2: 2.45,
    destek3: 2.4,
    direnc1: 2.64,
    direnc2: 2.69,
    direnc3: 2.76,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "SISE",
    fark: -0.89,
    son: 44.34,
    pivot: 44.74,
    destek1: 44.22,
    destek2: 43.42,
    destek3: 42.9,
    direnc1: 45.54,
    direnc2: 46.06,
    direnc3: 46.86,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "TAVHL",
    fark: 1.65,
    son: 257,
    pivot: 252.817,
    destek1: 249.883,
    destek2: 245.767,
    destek3: 242.833,
    direnc1: 256.933,
    direnc2: 259.867,
    direnc3: 263.983,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "TCELL",
    fark: -0.75,
    son: 105.5,
    pivot: 106.3,
    destek1: 105.1,
    destek2: 102.8,
    destek3: 101.6,
    direnc1: 108.6,
    direnc2: 109.8,
    direnc3: 112.1,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "THYAO",
    fark: 0.11,
    son: 296.75,
    pivot: 296.4166,
    destek1: 293.3333,
    destek2: 289.4166,
    destek3: 286.3333,
    direnc1: 300.3333,
    direnc2: 303.4166,
    direnc3: 307.3333,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "TOASO",
    fark: 1.67,
    son: 295,
    pivot: 290.167,
    destek1: 285.083,
    destek2: 279.167,
    destek3: 274.083,
    direnc1: 296.083,
    direnc2: 301.167,
    direnc3: 307.083,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "TRALT",
    fark: -3.76,
    son: 43.82,
    pivot: 45.533,
    destek1: 44.587,
    destek2: 43.133,
    destek3: 42.187,
    direnc1: 46.987,
    direnc2: 47.933,
    direnc3: 49.387,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "TTKOM",
    fark: -0.87,
    son: 62.9,
    pivot: 63.45,
    destek1: 62.55,
    destek2: 60.8,
    destek3: 59.9,
    direnc1: 65.2,
    direnc2: 66.1,
    direnc3: 67.85,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "TUPRS",
    fark: -4.6,
    son: 229.5,
    pivot: 240.567,
    destek1: 235.133,
    destek2: 231.467,
    destek3: 226.033,
    direnc1: 244.233,
    direnc2: 249.667,
    direnc3: 253.333,
    yorum: "İkinci destek seviyesinin altına indi.",
  },
  {
    sembol: "VAKBN",
    fark: 1.81,
    son: 32.58,
    pivot: 32,
    destek1: 31.42,
    destek2: 30.54,
    destek3: 29.96,
    direnc1: 32.88,
    direnc2: 33.46,
    direnc3: 34.34,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "YKBNK",
    fark: 3.4,
    son: 35.54,
    pivot: 34.373,
    destek1: 33.527,
    destek2: 32.113,
    destek3: 31.267,
    direnc1: 35.787,
    direnc2: 36.633,
    direnc3: 38.047,
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