export const metadata = {
  title: "Pivot Analizi | Hoca İle Borsa",
  description:
    "Pivot, destek ve direnç seviyelerine göre hisselerin teknik görünümünü tablo halinde inceleyin.",
  alternates: {
    canonical: "https://www.hocaileborsa.com/borsa/pivot-analizi",
  },
};

import Link from "@/components/NoPrefetchLink";

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
  fark: 0.85,
  son: 13798.82,
  pivot: 13682.53,
  destek1: 13585.37,
  destek2: 13467.62,
  destek3: 13370.46,
  direnc1: 13800.28,
  direnc2: 13897.44,
  direnc3: 14015.19,
  yorum: "Pivot değerinin üstünde seyrediyor.",
};

const pivotVerileri: PivotRow[] = [
  {
    sembol: "AEFES",
    fark: 0.53,
    son: 21.46,
    pivot: 21.347,
    destek1: 21.073,
    destek2: 20.827,
    destek3: 20.553,
    direnc1: 21.593,
    direnc2: 21.867,
    direnc3: 22.113,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "AKBNK",
    fark: -0.4,
    son: 67.1,
    pivot: 67.367,
    destek1: 66.683,
    destek2: 65.817,
    destek3: 65.133,
    direnc1: 68.233,
    direnc2: 68.917,
    direnc3: 69.783,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "ASELS",
    fark: 3.74,
    son: 363,
    pivot: 349.917,
    destek1: 338.333,
    destek2: 329.917,
    destek3: 318.333,
    direnc1: 358.333,
    direnc2: 369.917,
    direnc3: 378.333,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "ASTOR",
    fark: 0.84,
    son: 319.25,
    pivot: 316.583,
    destek1: 312.417,
    destek2: 305.583,
    destek3: 301.417,
    direnc1: 323.417,
    direnc2: 327.583,
    direnc3: 334.417,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "BIMAS",
    fark: -0.2,
    son: 382.25,
    pivot: 383,
    destek1: 379.25,
    destek2: 376.25,
    destek3: 372.5,
    direnc1: 386,
    direnc2: 389.75,
    direnc3: 392.75,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "DSTKF",
    fark: 5.57,
    son: 1700,
    pivot: 1610.333,
    destek1: 1585.667,
    destek2: 1543.333,
    destek3: 1518.667,
    direnc1: 1652.667,
    direnc2: 1677.333,
    direnc3: 1719.667,
    yorum: "İkinci direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "EKGYO",
    fark: -0.58,
    son: 18.19,
    pivot: 18.297,
    destek1: 18.083,
    destek2: 17.887,
    destek3: 17.673,
    direnc1: 18.493,
    direnc2: 18.707,
    direnc3: 18.903,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "ENKAI",
    fark: -0.83,
    son: 85.85,
    pivot: 86.567,
    destek1: 85.683,
    destek2: 84.267,
    destek3: 83.383,
    direnc1: 87.983,
    direnc2: 88.867,
    direnc3: 90.283,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "EREGL",
    fark: -0.76,
    son: 41.56,
    pivot: 41.88,
    destek1: 41.68,
    destek2: 41.38,
    destek3: 41.18,
    direnc1: 42.18,
    direnc2: 42.38,
    direnc3: 42.68,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "FROTO",
    fark: -1.95,
    son: 78.6,
    pivot: 80.167,
    destek1: 78.933,
    destek2: 77.417,
    destek3: 76.183,
    direnc1: 81.683,
    direnc2: 82.917,
    direnc3: 84.433,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "GARAN",
    fark: -1.54,
    son: 127.8,
    pivot: 129.8,
    destek1: 127.9,
    destek2: 126.1,
    destek3: 124.2,
    direnc1: 131.6,
    direnc2: 133.5,
    direnc3: 135.3,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "GUBRF",
    fark: 2.2,
    son: 432.75,
    pivot: 423.417,
    destek1: 415.583,
    destek2: 400.167,
    destek3: 392.333,
    direnc1: 438.833,
    direnc2: 446.667,
    direnc3: 462.083,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "ISCTR",
    fark: -0.43,
    son: 12.33,
    pivot: 12.383,
    destek1: 12.197,
    destek2: 12.053,
    destek3: 11.867,
    direnc1: 12.527,
    direnc2: 12.713,
    direnc3: 12.857,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "KCHOL",
    fark: -4.27,
    son: 195.9,
    pivot: 204.633,
    destek1: 202.467,
    destek2: 198.933,
    destek3: 196.767,
    direnc1: 208.167,
    direnc2: 210.333,
    direnc3: 213.867,
    yorum: "Üçüncü destek seviyesinin altına indi.",
  },
  {
    sembol: "KRDMD",
    fark: -2.75,
    son: 41.2,
    pivot: 42.367,
    destek1: 42.073,
    destek2: 41.547,
    destek3: 41.253,
    direnc1: 42.893,
    direnc2: 43.187,
    direnc3: 43.713,
    yorum: "Üçüncü destek seviyesinin altına indi.",
  },
  {
    sembol: "MGROS",
    fark: -0.19,
    son: 626,
    pivot: 627.167,
    destek1: 621.833,
    destek2: 612.667,
    destek3: 607.333,
    direnc1: 636.333,
    direnc2: 641.667,
    direnc3: 650.833,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "PETKM",
    fark: -5.02,
    son: 19.06,
    pivot: 20.067,
    destek1: 19.833,
    destek2: 19.427,
    destek3: 19.193,
    direnc1: 20.473,
    direnc2: 20.707,
    direnc3: 21.113,
    yorum: "Üçüncü destek seviyesinin altına indi.",
  },
  {
    sembol: "PGSUS",
    fark: -1,
    son: 154.7,
    pivot: 156.267,
    destek1: 154.333,
    destek2: 152.167,
    destek3: 150.233,
    direnc1: 158.433,
    direnc2: 160.367,
    direnc3: 162.533,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "SAHOL",
    fark: -0.55,
    son: 88.1,
    pivot: 88.583,
    destek1: 87.367,
    destek2: 85.633,
    destek3: 84.417,
    direnc1: 90.317,
    direnc2: 91.533,
    direnc3: 93.267,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "SASA",
    fark: 1.06,
    son: 2.58,
    pivot: 2.553,
    destek1: 2.517,
    destek2: 2.473,
    destek3: 2.437,
    direnc1: 2.597,
    direnc2: 2.633,
    direnc3: 2.677,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "SISE",
    fark: -1.24,
    son: 41.88,
    pivot: 42.407,
    destek1: 42.013,
    destek2: 41.587,
    destek3: 41.193,
    direnc1: 42.833,
    direnc2: 43.227,
    direnc3: 43.653,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "TAVHL",
    fark: -3.36,
    son: 273.5,
    pivot: 283,
    destek1: 280.75,
    destek2: 277.5,
    destek3: 275.25,
    direnc1: 286.25,
    direnc2: 288.5,
    direnc3: 291.75,
    yorum: "Üçüncü destek seviyesinin altına indi.",
  },
  {
    sembol: "TCELL",
    fark: -0.5,
    son: 105.3,
    pivot: 105.833,
    destek1: 104.167,
    destek2: 103.233,
    destek3: 101.567,
    direnc1: 106.767,
    direnc2: 108.433,
    direnc3: 109.367,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "THYAO",
    fark: -1.09,
    son: 311.25,
    pivot: 314.667,
    destek1: 310.833,
    destek2: 307.667,
    destek3: 303.833,
    direnc1: 317.833,
    direnc2: 321.667,
    direnc3: 324.833,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "TOASO",
    fark: -2.96,
    son: 257,
    pivot: 264.833,
    destek1: 258.417,
    destek2: 254.083,
    destek3: 247.667,
    direnc1: 269.167,
    direnc2: 275.583,
    direnc3: 279.917,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "TRALT",
    fark: 2.72,
    son: 49.44,
    pivot: 48.133,
    destek1: 47.367,
    destek2: 45.893,
    destek3: 45.127,
    direnc1: 49.607,
    direnc2: 50.373,
    direnc3: 51.847,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "TTKOM",
    fark: 0.88,
    son: 53.5,
    pivot: 53.033,
    destek1: 52.217,
    destek2: 51.083,
    destek3: 50.267,
    direnc1: 54.167,
    direnc2: 54.983,
    direnc3: 56.117,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "TUPRS",
    fark: 6.02,
    son: 321.5,
    pivot: 303.25,
    destek1: 296,
    destek2: 288.25,
    destek3: 281,
    direnc1: 311,
    direnc2: 318.25,
    direnc3: 326,
    yorum: "İkinci direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "VAKBN",
    fark: -1.09,
    son: 30.96,
    pivot: 31.3,
    destek1: 30.98,
    destek2: 30.54,
    destek3: 30.22,
    direnc1: 31.74,
    direnc2: 32.06,
    direnc3: 32.5,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "YKBNK",
    fark: -0.84,
    son: 34.04,
    pivot: 34.327,
    destek1: 33.813,
    destek2: 33.347,
    destek3: 32.833,
    direnc1: 34.793,
    direnc2: 35.307,
    direnc3: 35.773,
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