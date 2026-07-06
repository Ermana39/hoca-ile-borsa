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
  fark: -0.07,
  son: 14424.54,
  pivot: 14433.930,
  destek1: 14356.120,
  destek2: 14294.340,
  destek3: 14216.530,
  direnc1: 14495.710,
  direnc2: 14573.520,
  direnc3: 14635.300,
  yorum: "Pivot değerinin altında seyrediyor.",
};

const pivotVerileri: PivotRow[] = [
  {
    sembol: "AEFES",
    fark: -2.26,
    son: 20.22,
    pivot: 20.687,
    destek1: 20.273,
    destek2: 20.047,
    destek3: 19.633,
    direnc1: 20.913,
    direnc2: 21.327,
    direnc3: 21.553,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "AKBNK",
    fark: -2.39,
    son: 73.5,
    pivot: 75.3,
    destek1: 71.9,
    destek2: 70.05,
    destek3: 66.65,
    direnc1: 77.15,
    direnc2: 80.55,
    direnc3: 82.4,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "ASELS",
    fark: 2.01,
    son: 401.75,
    pivot: 393.8333,
    destek1: 387.9166,
    destek2: 376.3333,
    destek3: 370.4166,
    direnc1: 405.4166,
    direnc2: 411.3333,
    direnc3: 422.9166,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "ASTOR",
    fark: 0.47,
    son: 317.5,
    pivot: 316.0,
    destek1: 305.25,
    destek2: 291.5,
    destek3: 280.75,
    direnc1: 329.75,
    direnc2: 340.5,
    direnc3: 354.25,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "BIMAS",
    fark: 3.49,
    son: 371.0,
    pivot: 358.5,
    destek1: 353.0,
    destek2: 349.0,
    destek3: 343.5,
    direnc1: 362.5,
    direnc2: 368.0,
    direnc3: 372.0,
    yorum: "İkinci direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "DSTKF",
    fark: -5.16,
    son: 3585.0,
    pivot: 3780.0,
    destek1: 3705.0,
    destek2: 3660.0,
    destek3: 3585.0,
    direnc1: 3825.0,
    direnc2: 3900.0,
    direnc3: 3945.0,
    yorum: "İkinci destek seviyesinin altına indi.",
  },
  {
    sembol: "EKGYO",
    fark: -3.21,
    son: 20.5,
    pivot: 21.18,
    destek1: 20.32,
    destek2: 19.84,
    destek3: 18.98,
    direnc1: 21.66,
    direnc2: 22.52,
    direnc3: 23.0,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "ENKAI",
    fark: -2.71,
    son: 91.05,
    pivot: 93.583,
    destek1: 91.817,
    destek2: 89.933,
    destek3: 88.167,
    direnc1: 95.467,
    direnc2: 97.233,
    direnc3: 99.117,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "EREGL",
    fark: 2.47,
    son: 41.52,
    pivot: 40.52,
    destek1: 39.68,
    destek2: 39.26,
    destek3: 38.42,
    direnc1: 40.94,
    direnc2: 41.78,
    direnc3: 42.2,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "FROTO",
    fark: -2.21,
    son: 82.0,
    pivot: 83.85,
    destek1: 83.3,
    destek2: 82.85,
    destek3: 82.3,
    direnc1: 84.3,
    direnc2: 84.85,
    direnc3: 85.3,
    yorum: "Üçüncü destek seviyesinin altına indi.",
  },
  {
    sembol: "GARAN",
    fark: -1.43,
    son: 133.7,
    pivot: 135.6333,
    destek1: 131.3666,
    destek2: 129.2333,
    destek3: 124.9666,
    direnc1: 137.7666,
    direnc2: 142.03332,
    direnc3: 144.1666,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "GUBRF",
    fark: 0.16,
    son: 460.25,
    pivot: 459.5,
    destek1: 450.75,
    destek2: 445.5,
    destek3: 436.75,
    direnc1: 464.75,
    direnc2: 473.5,
    direnc3: 478.75,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "ISCTR",
    fark: -0.76,
    son: 14.34,
    pivot: 14.45,
    destek1: 13.97,
    destek2: 13.73,
    destek3: 13.25,
    direnc1: 14.69,
    direnc2: 15.17,
    direnc3: 15.41,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "KCHOL",
    fark: -1.74,
    son: 188.0,
    pivot: 191.333,
    destek1: 187.867,
    destek2: 186.133,
    destek3: 182.667,
    direnc1: 193.067,
    direnc2: 196.533,
    direnc3: 198.267,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "KRDMD",
    fark: 0.58,
    son: 39.14,
    pivot: 38.913,
    destek1: 38.107,
    destek2: 37.473,
    destek3: 36.667,
    direnc1: 39.547,
    direnc2: 40.353,
    direnc3: 40.987,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "MGROS",
    fark: 0.68,
    son: 639.0,
    pivot: 634.667,
    destek1: 626.333,
    destek2: 620.167,
    destek3: 611.833,
    direnc1: 640.833,
    direnc2: 649.167,
    direnc3: 655.333,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "PETKM",
    fark: -0.11,
    son: 18.84,
    pivot: 18.8599,
    destek1: 18.7099,
    destek2: 18.4899,
    destek3: 18.3399,
    direnc1: 19.08,
    direnc2: 19.23,
    direnc3: 19.45,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "PGSUS",
    fark: -0.25,
    son: 174.8,
    pivot: 175.2333,
    destek1: 172.7666,
    destek2: 171.4333,
    destek3: 168.9666,
    direnc1: 176.5666,
    direnc2: 179.03333,
    direnc3: 180.3666,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "SAHOL",
    fark: -2.23,
    son: 93.6,
    pivot: 95.733,
    destek1: 93.267,
    destek2: 92.033,
    destek3: 89.567,
    direnc1: 96.967,
    direnc2: 99.433,
    direnc3: 100.667,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "SASA",
    fark: -2.5,
    son: 2.34,
    pivot: 2.4,
    destek1: 2.3699,
    destek2: 2.3399,
    destek3: 2.3099,
    direnc1: 2.43,
    direnc2: 2.46,
    direnc3: 2.49,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "SISE",
    fark: -2.06,
    son: 43.48,
    pivot: 44.393,
    destek1: 43.967,
    destek2: 43.593,
    destek3: 43.167,
    direnc1: 44.767,
    direnc2: 45.193,
    direnc3: 45.567,
    yorum: "İkinci destek seviyesinin altına indi.",
  },
  {
    sembol: "TAVHL",
    fark: -2.3,
    son: 272.5,
    pivot: 278.917,
    destek1: 274.083,
    destek2: 271.667,
    destek3: 266.833,
    direnc1: 281.333,
    direnc2: 286.167,
    direnc3: 288.583,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "TCELL",
    fark: 0.84,
    son: 108.6,
    pivot: 107.7,
    destek1: 106.4,
    destek2: 105.6,
    destek3: 104.3,
    direnc1: 108.5,
    direnc2: 109.8,
    direnc3: 110.6,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "THYAO",
    fark: 4.05,
    son: 347.0,
    pivot: 333.5,
    destek1: 331.25,
    destek2: 328.5,
    destek3: 326.25,
    direnc1: 336.25,
    direnc2: 338.5,
    direnc3: 341.25,
    yorum: "Üçüncü direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "TOASO",
    fark: -0.88,
    son: 301.5,
    pivot: 304.167,
    destek1: 298.833,
    destek2: 295.667,
    destek3: 290.333,
    direnc1: 307.333,
    direnc2: 312.667,
    direnc3: 315.833,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "TRALT",
    fark: 2.89,
    son: 51.2,
    pivot: 49.763,
    destek1: 48.777,
    destek2: 46.953,
    destek3: 45.967,
    direnc1: 51.587,
    direnc2: 52.573,
    direnc3: 54.397,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "TTKOM",
    fark: -0.36,
    son: 60.45,
    pivot: 60.667,
    destek1: 60.033,
    destek2: 58.867,
    destek3: 58.233,
    direnc1: 61.833,
    direnc2: 62.467,
    direnc3: 63.633,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "TUPRS",
    fark: 0.71,
    son: 247.4,
    pivot: 245.6666,
    destek1: 241.7333,
    destek2: 235.2666,
    destek3: 231.3333,
    direnc1: 252.1333,
    direnc2: 256.06667,
    direnc3: 262.5333,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "VAKBN",
    fark: -1.62,
    son: 31.94,
    pivot: 32.467,
    destek1: 31.133,
    destek2: 30.387,
    destek3: 29.053,
    direnc1: 33.213,
    direnc2: 34.547,
    direnc3: 35.293,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "YKBNK",
    fark: -3.95,
    son: 37.46,
    pivot: 39.0,
    destek1: 37.02,
    destek2: 36.02,
    destek3: 34.04,
    direnc1: 40.0,
    direnc2: 41.98,
    direnc3: 42.98,
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
