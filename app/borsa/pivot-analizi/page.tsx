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
  fark: -0.16,
  son: 14417.91,
  pivot: 14440.470,
  destek1: 14393.780,
  destek2: 14332.530,
  destek3: 14285.840,
  direnc1: 14501.720,
  direnc2: 14548.410,
  direnc3: 14609.660,
  yorum: "Pivot değerinin altında seyrediyor.",
};

const pivotVerileri: PivotRow[] = [
  {
    sembol: "AEFES",
    fark: -0.29,
    son: 20.5,
    pivot: 20.56,
    destek1: 20.1799,
    destek2: 19.8599,
    destek3: 19.4799,
    direnc1: 20.88,
    direnc2: 21.26,
    direnc3: 21.58,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "AKBNK",
    fark: -5.41,
    son: 73.75,
    pivot: 77.967,
    destek1: 77.083,
    destek2: 76.217,
    destek3: 75.333,
    direnc1: 78.833,
    direnc2: 79.717,
    direnc3: 80.583,
    yorum: "Üçüncü destek seviyesinin altına indi.",
  },
  {
    sembol: "ASELS",
    fark: 4.65,
    son: 399.5,
    pivot: 381.75,
    destek1: 374.75,
    destek2: 364.75,
    destek3: 357.75,
    direnc1: 391.75,
    direnc2: 398.75,
    direnc3: 408.75,
    yorum: "İkinci direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "ASTOR",
    fark: 8.63,
    son: 319.0,
    pivot: 293.6666,
    destek1: 284.8333,
    destek2: 267.9166,
    destek3: 259.08333,
    direnc1: 310.5833,
    direnc2: 319.4166,
    direnc3: 336.3333,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "BIMAS",
    fark: -0.49,
    son: 357.0,
    pivot: 358.75,
    destek1: 352.0,
    destek2: 346.5,
    destek3: 339.75,
    direnc1: 364.25,
    direnc2: 371.0,
    direnc3: 376.5,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "DSTKF",
    fark: -1.47,
    son: 3750.0,
    pivot: 3805.833,
    destek1: 3751.667,
    destek2: 3693.333,
    destek3: 3639.167,
    direnc1: 3864.167,
    direnc2: 3918.333,
    direnc3: 3976.667,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "EKGYO",
    fark: -4.64,
    son: 20.8,
    pivot: 21.813,
    destek1: 21.627,
    destek2: 21.253,
    destek3: 21.067,
    direnc1: 22.187,
    direnc2: 22.373,
    direnc3: 22.747,
    yorum: "Üçüncü destek seviyesinin altına indi.",
  },
  {
    sembol: "ENKAI",
    fark: 1.21,
    son: 93.7,
    pivot: 92.583,
    destek1: 91.37,
    destek2: 90.583,
    destek3: 89.317,
    direnc1: 93.317,
    direnc2: 94.583,
    direnc3: 95.317,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "EREGL",
    fark: -1.18,
    son: 40.1,
    pivot: 40.58,
    destek1: 40.1,
    destek2: 39.4,
    destek3: 38.92,
    direnc1: 41.28,
    direnc2: 41.76,
    direnc3: 42.46,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "FROTO",
    fark: -0.55,
    son: 83.75,
    pivot: 84.2166,
    destek1: 82.8833,
    destek2: 82.06666,
    destek3: 80.7333,
    direnc1: 85.03333,
    direnc2: 86.3666,
    direnc3: 87.1833,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "GARAN",
    fark: -3.93,
    son: 133.5,
    pivot: 138.9666,
    destek1: 137.3333,
    destek2: 136.06666,
    destek3: 134.4333,
    direnc1: 140.2333,
    direnc2: 141.8666,
    direnc3: 143.1333,
    yorum: "Üçüncü destek seviyesinin altına indi.",
  },
  {
    sembol: "GUBRF",
    fark: -0.24,
    son: 456.0,
    pivot: 457.083,
    destek1: 450.917,
    destek2: 440.083,
    destek3: 433.917,
    direnc1: 467.917,
    direnc2: 474.083,
    direnc3: 484.917,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "ISCTR",
    fark: -4.46,
    son: 14.21,
    pivot: 14.873,
    destek1: 14.637,
    destek2: 14.453,
    destek3: 14.217,
    direnc1: 15.057,
    direnc2: 15.293,
    direnc3: 15.477,
    yorum: "Üçüncü destek seviyesinin altına indi.",
  },
  {
    sembol: "KCHOL",
    fark: -2.5,
    son: 189.6,
    pivot: 194.467,
    destek1: 191.833,
    destek2: 189.967,
    destek3: 187.333,
    direnc1: 196.333,
    direnc2: 198.967,
    direnc3: 200.833,
    yorum: "İkinci destek seviyesinin altına indi.",
  },
  {
    sembol: "KRDMD",
    fark: -1.0,
    son: 38.74,
    pivot: 39.133,
    destek1: 38.527,
    destek2: 37.913,
    destek3: 37.307,
    direnc1: 39.747,
    direnc2: 40.353,
    direnc3: 40.967,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "MGROS",
    fark: -0.94,
    son: 632.5,
    pivot: 638.5,
    destek1: 615.5,
    destek2: 601.5,
    destek3: 578.5,
    direnc1: 652.5,
    direnc2: 675.5,
    direnc3: 689.5,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "PETKM",
    fark: -0.23,
    son: 18.93,
    pivot: 18.9733,
    destek1: 18.6766,
    destek2: 18.4933,
    destek3: 18.1966,
    direnc1: 19.1566,
    direnc2: 19.4533,
    direnc3: 19.6366,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "PGSUS",
    fark: -1.99,
    son: 174.1,
    pivot: 177.633,
    destek1: 176.167,
    destek2: 175.333,
    destek3: 173.867,
    direnc1: 178.467,
    direnc2: 179.933,
    direnc3: 180.767,
    yorum: "İkinci destek seviyesinin altına indi.",
  },
  {
    sembol: "SAHOL",
    fark: -3.36,
    son: 94.5,
    pivot: 97.783,
    destek1: 96.467,
    destek2: 95.383,
    destek3: 94.067,
    direnc1: 98.867,
    direnc2: 100.183,
    direnc3: 101.267,
    yorum: "İkinci destek seviyesinin altına indi.",
  },
  {
    sembol: "SASA",
    fark: -0.96,
    son: 2.4,
    pivot: 2.4233,
    destek1: 2.3666,
    destek2: 2.3333,
    destek3: 2.2766,
    direnc1: 2.4566,
    direnc2: 2.5133,
    direnc3: 2.5466,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "SISE",
    fark: -0.82,
    son: 44.34,
    pivot: 44.707,
    destek1: 44.093,
    destek2: 43.687,
    destek3: 43.073,
    direnc1: 45.113,
    direnc2: 45.727,
    direnc3: 46.133,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "TAVHL",
    fark: -2.47,
    son: 276.5,
    pivot: 283.5,
    destek1: 279.25,
    destek2: 276.75,
    destek3: 272.5,
    direnc1: 286.0,
    direnc2: 290.25,
    direnc3: 292.75,
    yorum: "İkinci destek seviyesinin altına indi.",
  },
  {
    sembol: "TCELL",
    fark: -1.62,
    son: 107.2,
    pivot: 108.967,
    destek1: 107.033,
    destek2: 105.667,
    destek3: 103.733,
    direnc1: 110.333,
    direnc2: 112.267,
    direnc3: 113.633,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "THYAO",
    fark: 0.15,
    son: 334.0,
    pivot: 333.5,
    destek1: 330.25,
    destek2: 327.25,
    destek3: 324.0,
    direnc1: 336.5,
    direnc2: 339.75,
    direnc3: 342.75,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "TOASO",
    fark: -1.15,
    son: 302.0,
    pivot: 305.5,
    destek1: 302.25,
    destek2: 298.25,
    destek3: 295.0,
    direnc1: 309.5,
    direnc2: 312.75,
    direnc3: 316.75,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "TRALT",
    fark: 5.43,
    son: 50.6,
    pivot: 47.993,
    destek1: 47.207,
    destek2: 46.473,
    destek3: 45.687,
    direnc1: 48.727,
    direnc2: 49.513,
    direnc3: 50.247,
    yorum: "Üçüncü direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "TTKOM",
    fark: 0.63,
    son: 61.2,
    pivot: 60.817,
    destek1: 59.833,
    destek2: 59.267,
    destek3: 58.283,
    direnc1: 61.383,
    direnc2: 62.367,
    direnc3: 62.933,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "TUPRS",
    fark: 3.95,
    son: 248.2,
    pivot: 238.767,
    destek1: 236.033,
    destek2: 232.267,
    destek3: 229.533,
    direnc1: 242.533,
    direnc2: 245.267,
    direnc3: 249.033,
    yorum: "İkinci direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "VAKBN",
    fark: -5.03,
    son: 31.88,
    pivot: 33.567,
    destek1: 33.173,
    destek2: 32.867,
    destek3: 32.473,
    direnc1: 33.873,
    direnc2: 34.267,
    direnc3: 34.573,
    yorum: "Üçüncü destek seviyesinin altına indi.",
  },
  {
    sembol: "YKBNK",
    fark: -6.28,
    son: 38.02,
    pivot: 40.567,
    destek1: 40.033,
    destek2: 39.567,
    destek3: 39.033,
    direnc1: 41.033,
    direnc2: 41.567,
    direnc3: 42.033,
    yorum: "Üçüncü destek seviyesinin altına indi.",
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
