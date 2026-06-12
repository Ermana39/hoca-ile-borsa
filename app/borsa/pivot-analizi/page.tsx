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
  fark: 1.49,
  son: 13938.48,
  pivot: 13733.49,
  destek1: 13577.36,
  destek2: 13411.22,
  destek3: 13255.09,
  direnc1: 13899.63,
  direnc2: 14055.76,
  direnc3: 14221.9,
  yorum: "İlk direnç seviyesinin üstüne çıktı.",
};

const pivotVerileri: PivotRow[] = [
  {
    sembol: "AEFES",
    fark: 1.54,
    son: 20.4,
    pivot: 20.09,
    destek1: 19.84,
    destek2: 19.46,
    destek3: 19.21,
    direnc1: 20.47,
    direnc2: 20.72,
    direnc3: 21.1,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "AKBNK",
    fark: 9.37,
    son: 72.6,
    pivot: 66.383,
    destek1: 65.267,
    destek2: 63.733,
    destek3: 62.617,
    direnc1: 67.917,
    direnc2: 69.033,
    direnc3: 70.567,
    yorum: "Üçüncü direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "ASELS",
    fark: -2.37,
    son: 371.25,
    pivot: 380.25,
    destek1: 370.75,
    destek2: 363.75,
    destek3: 354.25,
    direnc1: 387.25,
    direnc2: 396.75,
    direnc3: 403.75,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "ASTOR",
    fark: -8.42,
    son: 265.5,
    pivot: 289.917,
    destek1: 283.083,
    destek2: 271.167,
    destek3: 264.333,
    direnc1: 301.833,
    direnc2: 308.667,
    direnc3: 320.583,
    yorum: "İkinci destek seviyesinin altına indi.",
  },
  {
    sembol: "BIMAS",
    fark: 0.04,
    son: 380,
    pivot: 379.833,
    destek1: 374.167,
    destek2: 367.833,
    destek3: 362.167,
    direnc1: 386.167,
    direnc2: 391.833,
    direnc3: 398.167,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "DSTKF",
    fark: 0.48,
    son: 2612.5,
    pivot: 2600,
    destek1: 2555,
    destek2: 2510,
    destek3: 2465,
    direnc1: 2645,
    direnc2: 2690,
    direnc3: 2735,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "EKGYO",
    fark: 4.31,
    son: 19.91,
    pivot: 19.087,
    destek1: 18.803,
    destek2: 18.447,
    destek3: 18.163,
    direnc1: 19.443,
    direnc2: 19.727,
    direnc3: 20.083,
    yorum: "İkinci direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "ENKAI",
    fark: 0.34,
    son: 93,
    pivot: 92.683,
    destek1: 91.067,
    destek2: 89.333,
    destek3: 87.717,
    direnc1: 94.417,
    direnc2: 96.033,
    direnc3: 97.767,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "EREGL",
    fark: 2.11,
    son: 39.36,
    pivot: 38.547,
    destek1: 37.853,
    destek2: 37.307,
    destek3: 36.613,
    direnc1: 39.093,
    direnc2: 39.787,
    direnc3: 40.333,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "FROTO",
    fark: 0.15,
    son: 86.7,
    pivot: 86.567,
    destek1: 85.233,
    destek2: 83.917,
    destek3: 82.583,
    direnc1: 87.883,
    direnc2: 89.217,
    direnc3: 90.533,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "GARAN",
    fark: 5.73,
    son: 135.9,
    pivot: 128.533,
    destek1: 126.467,
    destek2: 123.933,
    destek3: 121.867,
    direnc1: 131.067,
    direnc2: 133.133,
    direnc3: 135.667,
    yorum: "Üçüncü direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "GUBRF",
    fark: 1.43,
    son: 478.75,
    pivot: 472,
    destek1: 459,
    destek2: 449.25,
    destek3: 436.25,
    direnc1: 481.75,
    direnc2: 494.75,
    direnc3: 504.5,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "ISCTR",
    fark: 4.28,
    son: 14.31,
    pivot: 13.723,
    destek1: 13.507,
    destek2: 13.273,
    destek3: 13.057,
    direnc1: 13.957,
    direnc2: 14.173,
    direnc3: 14.407,
    yorum: "İkinci direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "KCHOL",
    fark: 1.99,
    son: 187.5,
    pivot: 183.833,
    destek1: 180.567,
    destek2: 176.933,
    destek3: 173.667,
    direnc1: 187.467,
    direnc2: 190.733,
    direnc3: 194.367,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "KRDMD",
    fark: 1.92,
    son: 39.34,
    pivot: 38.6,
    destek1: 37.86,
    destek2: 37.16,
    destek3: 36.42,
    direnc1: 39.3,
    direnc2: 40.04,
    direnc3: 40.74,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "MGROS",
    fark: 0.93,
    son: 672.5,
    pivot: 666.333,
    destek1: 659.667,
    destek2: 652.833,
    destek3: 646.167,
    direnc1: 673.167,
    direnc2: 679.833,
    direnc3: 686.667,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "PETKM",
    fark: -1.51,
    son: 19.39,
    pivot: 19.687,
    destek1: 19.193,
    destek2: 18.677,
    destek3: 18.183,
    direnc1: 20.203,
    direnc2: 20.697,
    direnc3: 21.213,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "PGSUS",
    fark: 3.84,
    son: 172,
    pivot: 165.633,
    destek1: 163.467,
    destek2: 161.433,
    destek3: 159.267,
    direnc1: 167.667,
    direnc2: 169.833,
    direnc3: 171.867,
    yorum: "Üçüncü direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "SAHOL",
    fark: 5.23,
    son: 95.95,
    pivot: 91.183,
    destek1: 90.217,
    destek2: 88.833,
    destek3: 87.867,
    direnc1: 92.567,
    direnc2: 93.533,
    direnc3: 94.917,
    yorum: "Üçüncü direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "SASA",
    fark: -0.27,
    son: 2.6,
    pivot: 2.607,
    destek1: 2.513,
    destek2: 2.397,
    destek3: 2.303,
    direnc1: 2.723,
    direnc2: 2.817,
    direnc3: 2.933,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "SISE",
    fark: 2.32,
    son: 44.76,
    pivot: 43.747,
    destek1: 42.853,
    destek2: 42.047,
    destek3: 41.153,
    direnc1: 44.553,
    direnc2: 45.447,
    direnc3: 46.253,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "TAVHL",
    fark: 5.87,
    son: 275,
    pivot: 259.75,
    destek1: 253.5,
    destek2: 248,
    destek3: 241.75,
    direnc1: 265.25,
    direnc2: 271.5,
    direnc3: 277,
    yorum: "İkinci direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "TCELL",
    fark: 3.85,
    son: 110.7,
    pivot: 106.6,
    destek1: 105.6,
    destek2: 103.7,
    destek3: 102.7,
    direnc1: 108.5,
    direnc2: 109.5,
    direnc3: 111.4,
    yorum: "İkinci direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "THYAO",
    fark: 4.65,
    son: 307.75,
    pivot: 294.083,
    destek1: 290.667,
    destek2: 288.083,
    destek3: 284.667,
    direnc1: 296.667,
    direnc2: 300.083,
    direnc3: 302.667,
    yorum: "Üçüncü direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "TOASO",
    fark: 3.78,
    son: 295.5,
    pivot: 284.75,
    destek1: 276.25,
    destek2: 269.5,
    destek3: 261,
    direnc1: 291.5,
    direnc2: 300,
    direnc3: 306.75,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "TRALT",
    fark: 1.36,
    son: 43.34,
    pivot: 42.76,
    destek1: 41.98,
    destek2: 41.38,
    destek3: 40.6,
    direnc1: 43.36,
    direnc2: 44.14,
    direnc3: 44.74,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "TTKOM",
    fark: 4.43,
    son: 64.1,
    pivot: 61.383,
    destek1: 60.767,
    destek2: 59.833,
    destek3: 59.217,
    direnc1: 62.317,
    direnc2: 62.933,
    direnc3: 63.867,
    yorum: "Üçüncü direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "TUPRS",
    fark: -0.54,
    son: 233.8,
    pivot: 235.067,
    destek1: 231.233,
    destek2: 226.467,
    destek3: 222.633,
    direnc1: 239.833,
    direnc2: 243.667,
    direnc3: 248.433,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "VAKBN",
    fark: 2.71,
    son: 32.62,
    pivot: 31.76,
    destek1: 31.12,
    destek2: 30.42,
    destek3: 29.78,
    direnc1: 32.46,
    direnc2: 33.1,
    direnc3: 33.8,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "YKBNK",
    fark: 8.79,
    son: 38.1,
    pivot: 35.02,
    destek1: 34.3,
    destek2: 33.58,
    destek3: 32.86,
    direnc1: 35.74,
    direnc2: 36.46,
    direnc3: 37.18,
    yorum: "Üçüncü direnç seviyesinin üstüne çıktı.",
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