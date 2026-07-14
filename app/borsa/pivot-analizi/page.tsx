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
  fark: -0.36,
  son: 14079.97,
  pivot: 14130.210,
  destek1: 13994.920,
  destek2: 13897.810,
  destek3: 13762.520,
  direnc1: 14227.320,
  direnc2: 14362.610,
  direnc3: 14459.720,
  yorum: "Pivot değerinin altında seyrediyor.",
};

const pivotVerileri: PivotRow[] = [
  {
    sembol: "AEFES",
    fark: -0.33,
    son: 20.02,
    pivot: 20.087,
    destek1: 19.793,
    destek2: 19.507,
    destek3: 19.213,
    direnc1: 20.373,
    direnc2: 20.667,
    direnc3: 20.953,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "AKBNK",
    fark: 2.35,
    son: 69.1,
    pivot: 67.5166,
    destek1: 67.03333,
    destek2: 66.4166,
    destek3: 65.9333,
    direnc1: 68.1333,
    direnc2: 68.6166,
    direnc3: 69.2333,
    yorum: "İkinci direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "ASELS",
    fark: -2.79,
    son: 348.5,
    pivot: 358.5,
    destek1: 346.5,
    destek2: 340.5,
    destek3: 328.5,
    direnc1: 364.5,
    direnc2: 376.5,
    direnc3: 382.5,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "ASTOR",
    fark: 2.07,
    son: 325.0,
    pivot: 318.4166,
    destek1: 308.3333,
    destek2: 298.6666,
    destek3: 288.5833,
    direnc1: 328.08333,
    direnc2: 338.1666,
    direnc3: 347.8333,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "BIMAS",
    fark: 2.88,
    son: 384.5,
    pivot: 373.75,
    destek1: 370.0,
    destek2: 365.75,
    destek3: 362.0,
    direnc1: 378.0,
    direnc2: 381.75,
    direnc3: 386.0,
    yorum: "İkinci direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "DSTKF",
    fark: -13.16,
    son: 3112.5,
    pivot: 3584.1666,
    destek1: 3330.8333,
    destek2: 3204.1666,
    destek3: 2950.8333,
    direnc1: 3710.8333,
    direnc2: 3964.1666,
    direnc3: 4090.8333,
    yorum: "İkinci destek seviyesinin altına indi.",
  },
  {
    sembol: "EKGYO",
    fark: 2.07,
    son: 21.02,
    pivot: 20.593,
    destek1: 20.307,
    destek2: 19.773,
    destek3: 19.487,
    direnc1: 21.127,
    direnc2: 21.413,
    direnc3: 21.947,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "ENKAI",
    fark: -0.17,
    son: 89.7,
    pivot: 89.85,
    destek1: 88.95,
    destek2: 88.1,
    destek3: 87.2,
    direnc1: 90.7,
    direnc2: 91.6,
    direnc3: 92.45,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "EREGL",
    fark: 3.1,
    son: 41.88,
    pivot: 40.62,
    destek1: 39.96,
    destek2: 39.06,
    destek3: 38.4,
    direnc1: 41.52,
    direnc2: 42.18,
    direnc3: 43.08,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "FROTO",
    fark: -1.0,
    son: 81.05,
    pivot: 81.867,
    destek1: 80.983,
    destek2: 80.417,
    destek3: 79.533,
    direnc1: 82.433,
    direnc2: 83.317,
    direnc3: 83.883,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "GARAN",
    fark: 1.55,
    son: 128.9,
    pivot: 126.933,
    destek1: 125.367,
    destek2: 124.033,
    destek3: 122.467,
    direnc1: 128.267,
    direnc2: 129.833,
    direnc3: 131.167,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "GUBRF",
    fark: -1.27,
    son: 413.25,
    pivot: 418.583,
    destek1: 403.667,
    destek2: 395.833,
    destek3: 380.917,
    direnc1: 426.417,
    direnc2: 441.333,
    direnc3: 449.167,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "ISCTR",
    fark: 1.59,
    son: 13.89,
    pivot: 13.673,
    destek1: 13.527,
    destek2: 13.353,
    destek3: 13.207,
    direnc1: 13.847,
    direnc2: 13.993,
    direnc3: 14.167,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "KCHOL",
    fark: -0.1,
    son: 191.1,
    pivot: 191.3,
    destek1: 189.7,
    destek2: 187.9,
    destek3: 186.3,
    direnc1: 193.1,
    direnc2: 194.7,
    direnc3: 196.5,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "KRDMD",
    fark: 7.85,
    son: 40.84,
    pivot: 37.867,
    destek1: 37.473,
    destek2: 36.707,
    destek3: 36.313,
    direnc1: 38.633,
    direnc2: 39.027,
    direnc3: 39.793,
    yorum: "Üçüncü direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "MGROS",
    fark: -2.69,
    son: 608.0,
    pivot: 624.833,
    destek1: 618.667,
    destek2: 611.333,
    destek3: 605.167,
    direnc1: 632.167,
    direnc2: 638.333,
    direnc3: 645.667,
    yorum: "İkinci destek seviyesinin altına indi.",
  },
  {
    sembol: "PETKM",
    fark: -0.71,
    son: 19.6,
    pivot: 19.7399,
    destek1: 19.4899,
    destek2: 19.18,
    destek3: 18.93,
    direnc1: 20.04999,
    direnc2: 20.2999,
    direnc3: 20.6099,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "PGSUS",
    fark: -0.08,
    son: 166.0,
    pivot: 166.133,
    destek1: 163.567,
    destek2: 161.733,
    destek3: 159.167,
    direnc1: 167.967,
    direnc2: 170.533,
    direnc3: 172.367,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "SAHOL",
    fark: -0.13,
    son: 89.45,
    pivot: 89.567,
    destek1: 88.733,
    destek2: 88.267,
    destek3: 87.433,
    direnc1: 90.033,
    direnc2: 90.867,
    direnc3: 91.333,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "SASA",
    fark: -0.39,
    son: 2.52,
    pivot: 2.5299,
    destek1: 2.49,
    destek2: 2.43,
    destek3: 2.39,
    direnc1: 2.5899,
    direnc2: 2.6299,
    direnc3: 2.6899,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "SISE",
    fark: 1.07,
    son: 43.6,
    pivot: 43.14,
    destek1: 42.82,
    destek2: 42.5,
    destek3: 42.18,
    direnc1: 43.46,
    direnc2: 43.78,
    direnc3: 44.1,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "TAVHL",
    fark: -1.3,
    son: 258.5,
    pivot: 261.917,
    destek1: 256.833,
    destek2: 253.917,
    destek3: 248.833,
    direnc1: 264.833,
    direnc2: 269.917,
    direnc3: 272.833,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "TCELL",
    fark: 2.13,
    son: 110.2,
    pivot: 107.9,
    destek1: 106.4,
    destek2: 103.8,
    destek3: 102.3,
    direnc1: 110.5,
    direnc2: 112.0,
    direnc3: 114.6,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "THYAO",
    fark: -2.64,
    son: 326.0,
    pivot: 334.833,
    destek1: 329.667,
    destek2: 325.833,
    destek3: 320.667,
    direnc1: 338.667,
    direnc2: 343.833,
    direnc3: 347.667,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "TOASO",
    fark: -2.4,
    son: 295.0,
    pivot: 302.25,
    destek1: 298.75,
    destek2: 296.0,
    destek3: 292.5,
    direnc1: 305.0,
    direnc2: 308.5,
    direnc3: 311.25,
    yorum: "İkinci destek seviyesinin altına indi.",
  },
  {
    sembol: "TRALT",
    fark: -2.31,
    son: 50.8,
    pivot: 52.0,
    destek1: 50.35,
    destek2: 48.95,
    destek3: 47.3,
    direnc1: 53.4,
    direnc2: 55.05,
    direnc3: 56.45,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "TTKOM",
    fark: -0.4,
    son: 57.5,
    pivot: 57.733,
    destek1: 57.317,
    destek2: 56.883,
    destek3: 56.467,
    direnc1: 58.167,
    direnc2: 58.583,
    direnc3: 59.017,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "TUPRS",
    fark: 0.56,
    son: 270.75,
    pivot: 269.25,
    destek1: 265.5,
    destek2: 262.75,
    destek3: 259.0,
    direnc1: 272.0,
    direnc2: 275.75,
    direnc3: 278.5,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "VAKBN",
    fark: 1.76,
    son: 31.6,
    pivot: 31.053,
    destek1: 30.627,
    destek2: 30.153,
    destek3: 29.727,
    direnc1: 31.527,
    direnc2: 31.953,
    direnc3: 32.427,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "YKBNK",
    fark: -0.8,
    son: 33.96,
    pivot: 34.2333,
    destek1: 33.6866,
    destek2: 33.2733,
    destek3: 32.7266,
    direnc1: 34.6466,
    direnc2: 35.1933,
    direnc3: 35.6066,
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