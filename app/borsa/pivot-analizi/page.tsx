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
  fark: 0.05,
  son: 14497.37,
  pivot: 14490.450,
  destek1: 14351.250,
  destek2: 14277.950,
  destek3: 14138.750,
  direnc1: 14563.750,
  direnc2: 14702.950,
  direnc3: 14776.250,
  yorum: "Pivot değerinin üstünde seyrediyor.",
};

const pivotVerileri: PivotRow[] = [
  {
    sembol: "AEFES",
    fark: 0.85,
    son: 20.52,
    pivot: 20.347,
    destek1: 19.933,
    destek2: 19.647,
    destek3: 19.233,
    direnc1: 20.633,
    direnc2: 21.047,
    direnc3: 21.333,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "AKBNK",
    fark: -0.23,
    son: 73.6,
    pivot: 73.767,
    destek1: 72.783,
    destek2: 72.067,
    destek3: 71.083,
    direnc1: 74.483,
    direnc2: 75.467,
    direnc3: 76.183,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "ASELS",
    fark: -5.0,
    son: 383.0,
    pivot: 403.167,
    destek1: 395.083,
    destek2: 388.417,
    destek3: 380.333,
    direnc1: 409.833,
    direnc2: 417.917,
    direnc3: 424.583,
    yorum: "İkinci destek seviyesinin altına indi.",
  },
  {
    sembol: "ASTOR",
    fark: 2.12,
    son: 325.25,
    pivot: 318.5,
    destek1: 313.0,
    destek2: 308.5,
    destek3: 303.0,
    direnc1: 323.0,
    direnc2: 328.5,
    direnc3: 333.0,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "BIMAS",
    fark: 1.68,
    son: 374.25,
    pivot: 368.083,
    destek1: 364.917,
    destek2: 358.833,
    destek3: 355.667,
    direnc1: 374.167,
    direnc2: 377.333,
    direnc3: 383.417,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "DSTKF",
    fark: 6.67,
    son: 3920.0,
    pivot: 3675.0,
    destek1: 3495.0,
    destek2: 3405.0,
    destek3: 3225.0,
    direnc1: 3765.0,
    direnc2: 3945.0,
    direnc3: 4035.0,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "EKGYO",
    fark: 1.32,
    son: 20.94,
    pivot: 20.667,
    destek1: 20.293,
    destek2: 20.087,
    destek3: 19.713,
    direnc1: 20.873,
    direnc2: 21.247,
    direnc3: 21.453,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "ENKAI",
    fark: -1.21,
    son: 91.05,
    pivot: 92.167,
    destek1: 89.883,
    destek2: 88.717,
    destek3: 86.433,
    direnc1: 93.333,
    direnc2: 95.617,
    direnc3: 96.783,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "EREGL",
    fark: 0.44,
    son: 41.26,
    pivot: 41.08,
    destek1: 40.64,
    destek2: 39.76,
    destek3: 39.32,
    direnc1: 41.96,
    direnc2: 42.4,
    direnc3: 43.28,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "FROTO",
    fark: 0.34,
    son: 83.0,
    pivot: 82.717,
    destek1: 81.033,
    destek2: 80.067,
    destek3: 78.383,
    direnc1: 83.683,
    direnc2: 85.367,
    direnc3: 86.333,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "GARAN",
    fark: 0.05,
    son: 134.4,
    pivot: 134.3333,
    destek1: 132.6666,
    destek2: 131.6333,
    destek3: 129.9666,
    direnc1: 135.3666,
    direnc2: 137.03333,
    direnc3: 138.0666,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "GUBRF",
    fark: -0.36,
    son: 457.75,
    pivot: 459.417,
    destek1: 452.333,
    destek2: 444.417,
    destek3: 437.333,
    direnc1: 467.333,
    direnc2: 474.417,
    direnc3: 482.333,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "ISCTR",
    fark: 1.0,
    son: 14.45,
    pivot: 14.307,
    destek1: 14.183,
    destek2: 14.027,
    destek3: 13.903,
    direnc1: 14.463,
    direnc2: 14.587,
    direnc3: 14.743,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "KCHOL",
    fark: -0.23,
    son: 189.2,
    pivot: 189.633,
    destek1: 185.567,
    destek2: 183.133,
    destek3: 179.067,
    direnc1: 192.067,
    direnc2: 196.133,
    direnc3: 198.567,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "KRDMD",
    fark: -4.12,
    son: 37.54,
    pivot: 39.153,
    destek1: 38.707,
    destek2: 38.273,
    destek3: 37.827,
    direnc1: 39.587,
    direnc2: 40.033,
    direnc3: 40.467,
    yorum: "Üçüncü destek seviyesinin altına indi.",
  },
  {
    sembol: "MGROS",
    fark: 1.3,
    son: 648.5,
    pivot: 640.167,
    destek1: 634.333,
    destek2: 629.667,
    destek3: 623.833,
    direnc1: 644.833,
    direnc2: 650.667,
    direnc3: 655.333,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "PETKM",
    fark: 1.32,
    son: 19.16,
    pivot: 18.91,
    destek1: 18.72,
    destek2: 18.6,
    destek3: 18.41,
    direnc1: 19.03,
    direnc2: 19.22,
    direnc3: 19.34,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "PGSUS",
    fark: -1.0,
    son: 174.1,
    pivot: 175.867,
    destek1: 173.333,
    destek2: 171.867,
    destek3: 169.333,
    direnc1: 177.333,
    direnc2: 179.867,
    direnc3: 181.333,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "SAHOL",
    fark: -1.92,
    son: 92.8,
    pivot: 94.617,
    destek1: 92.283,
    destek2: 90.967,
    destek3: 88.633,
    direnc1: 95.933,
    direnc2: 98.267,
    direnc3: 99.583,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "SASA",
    fark: -2.12,
    son: 2.31,
    pivot: 2.36,
    destek1: 2.3,
    destek2: 2.26,
    destek3: 2.2,
    direnc1: 2.4,
    direnc2: 2.46,
    direnc3: 2.5,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "SISE",
    fark: -1.49,
    son: 43.16,
    pivot: 43.813,
    destek1: 42.867,
    destek2: 42.253,
    destek3: 41.307,
    direnc1: 44.427,
    direnc2: 45.373,
    direnc3: 45.987,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "TAVHL",
    fark: -1.03,
    son: 272.25,
    pivot: 275.083,
    destek1: 269.167,
    destek2: 265.833,
    destek3: 259.917,
    direnc1: 278.417,
    direnc2: 284.333,
    direnc3: 287.667,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "TCELL",
    fark: 0.22,
    son: 108.2,
    pivot: 107.967,
    destek1: 106.933,
    destek2: 105.267,
    destek3: 104.233,
    direnc1: 109.633,
    direnc2: 110.667,
    direnc3: 112.333,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "THYAO",
    fark: 1.06,
    son: 348.25,
    pivot: 344.583,
    destek1: 337.667,
    destek2: 328.333,
    destek3: 321.417,
    direnc1: 353.917,
    direnc2: 360.833,
    direnc3: 370.167,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "TOASO",
    fark: -1.05,
    son: 299.0,
    pivot: 302.167,
    destek1: 298.083,
    destek2: 294.667,
    destek3: 290.583,
    direnc1: 305.583,
    direnc2: 309.667,
    direnc3: 313.083,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "TRALT",
    fark: 1.69,
    son: 52.2,
    pivot: 51.333,
    destek1: 50.367,
    destek2: 49.533,
    destek3: 48.567,
    direnc1: 52.167,
    direnc2: 53.133,
    direnc3: 53.967,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "TTKOM",
    fark: -2.71,
    son: 59.3,
    pivot: 60.95,
    destek1: 59.9,
    destek2: 59.35,
    destek3: 58.3,
    direnc1: 61.5,
    direnc2: 62.55,
    direnc3: 63.1,
    yorum: "İkinci destek seviyesinin altına indi.",
  },
  {
    sembol: "TUPRS",
    fark: 4.22,
    son: 258.0,
    pivot: 247.55,
    destek1: 242.85,
    destek2: 238.3,
    destek3: 233.6,
    direnc1: 252.1,
    direnc2: 256.8,
    direnc3: 261.35,
    yorum: "İkinci direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "VAKBN",
    fark: 1.44,
    son: 32.44,
    pivot: 31.98,
    destek1: 31.7,
    destek2: 31.46,
    destek3: 31.18,
    direnc1: 32.22,
    direnc2: 32.5,
    direnc3: 32.74,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "YKBNK",
    fark: -0.35,
    son: 37.6,
    pivot: 37.733,
    destek1: 37.067,
    destek2: 36.673,
    destek3: 36.007,
    direnc1: 38.127,
    direnc2: 38.793,
    direnc3: 39.187,
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
