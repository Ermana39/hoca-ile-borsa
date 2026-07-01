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
  fark: 1.35,
  son: 14350.60,
  pivot: 14159.370,
  destek1: 14021.610,
  destek2: 13921.400,
  destek3: 13783.640,
  direnc1: 14259.580,
  direnc2: 14397.340,
  direnc3: 14497.550,
  yorum: "İlk direnç seviyesinin üstüne çıktı.",
};

const pivotVerileri: PivotRow[] = [
  {
    sembol: "AEFES",
    fark: -1.73,
    son: 20.86,
    pivot: 21.227,
    destek1: 20.773,
    destek2: 20.507,
    destek3: 20.053,
    direnc1: 21.493,
    direnc2: 21.947,
    direnc3: 22.213,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "AKBNK",
    fark: 0.82,
    son: 77.85,
    pivot: 77.217,
    destek1: 76.383,
    destek2: 75.767,
    destek3: 74.933,
    direnc1: 77.833,
    direnc2: 78.667,
    direnc3: 79.283,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "ASELS",
    fark: 5.62,
    son: 371.25,
    pivot: 351.5,
    destek1: 336.0,
    destek2: 327.0,
    destek3: 311.5,
    direnc1: 360.5,
    direnc2: 376.0,
    direnc3: 385.0,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "ASTOR",
    fark: 0.18,
    son: 277.0,
    pivot: 276.5,
    destek1: 271.25,
    destek2: 266.0,
    destek3: 260.75,
    direnc1: 281.75,
    direnc2: 287.0,
    direnc3: 292.25,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "BIMAS",
    fark: -0.86,
    son: 364.5,
    pivot: 367.6666,
    destek1: 361.8333,
    destek2: 358.4166,
    destek3: 352.5833,
    direnc1: 371.08333,
    direnc2: 376.9166,
    direnc3: 380.3333,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "DSTKF",
    fark: 3.5,
    son: 3750.0,
    pivot: 3623.333,
    destek1: 3541.667,
    destek2: 3460.833,
    destek3: 3379.167,
    direnc1: 3704.167,
    direnc2: 3785.833,
    direnc3: 3866.667,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "EKGYO",
    fark: 2.7,
    son: 21.32,
    pivot: 20.76,
    destek1: 20.48,
    destek2: 20.28,
    destek3: 20.0,
    direnc1: 20.96,
    direnc2: 21.24,
    direnc3: 21.44,
    yorum: "İkinci direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "ENKAI",
    fark: 2.78,
    son: 93.55,
    pivot: 91.017,
    destek1: 89.483,
    destek2: 88.467,
    destek3: 86.933,
    direnc1: 92.033,
    direnc2: 93.567,
    direnc3: 94.583,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "EREGL",
    fark: -1.75,
    son: 40.44,
    pivot: 41.16,
    destek1: 39.72,
    destek2: 38.96,
    destek3: 37.52,
    direnc1: 41.92,
    direnc2: 43.36,
    direnc3: 44.12,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "FROTO",
    fark: 0.26,
    son: 85.2,
    pivot: 84.983,
    destek1: 83.817,
    destek2: 83.083,
    destek3: 81.917,
    direnc1: 85.717,
    direnc2: 86.883,
    direnc3: 87.617,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "GARAN",
    fark: 0.51,
    son: 138.5,
    pivot: 137.8,
    destek1: 136.8,
    destek2: 135.6,
    destek3: 134.6,
    direnc1: 139.0,
    direnc2: 140.0,
    direnc3: 141.1999,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "GUBRF",
    fark: 0.6,
    son: 446.75,
    pivot: 444.083,
    destek1: 434.417,
    destek2: 426.083,
    destek3: 416.417,
    direnc1: 452.417,
    direnc2: 462.083,
    direnc3: 470.417,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "ISCTR",
    fark: 1.04,
    son: 14.93,
    pivot: 14.777,
    destek1: 14.663,
    destek2: 14.517,
    destek3: 14.403,
    direnc1: 14.923,
    direnc2: 15.037,
    direnc3: 15.183,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "KCHOL",
    fark: 0.53,
    son: 195.0,
    pivot: 193.967,
    destek1: 191.233,
    destek2: 188.967,
    destek3: 186.233,
    direnc1: 196.233,
    direnc2: 198.967,
    direnc3: 201.233,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "KRDMD",
    fark: -1.43,
    son: 39.58,
    pivot: 40.153,
    destek1: 39.067,
    destek2: 38.333,
    destek3: 37.247,
    direnc1: 40.887,
    direnc2: 41.973,
    direnc3: 42.707,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "MGROS",
    fark: -1.35,
    son: 659.0,
    pivot: 668.0,
    destek1: 657.5,
    destek2: 645.5,
    destek3: 635.0,
    direnc1: 680.0,
    direnc2: 690.5,
    direnc3: 702.5,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "PETKM",
    fark: -0.38,
    son: 19.0,
    pivot: 19.07333,
    destek1: 18.8566,
    destek2: 18.6033,
    destek3: 18.3866,
    direnc1: 19.3266,
    direnc2: 19.5433,
    direnc3: 19.7966,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "PGSUS",
    fark: 0.42,
    son: 176.6,
    pivot: 175.867,
    destek1: 173.833,
    destek2: 172.567,
    destek3: 170.533,
    direnc1: 177.133,
    direnc2: 179.167,
    direnc3: 180.433,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "SAHOL",
    fark: 0.7,
    son: 98.1,
    pivot: 97.417,
    destek1: 96.683,
    destek2: 95.867,
    destek3: 95.133,
    direnc1: 98.233,
    direnc2: 98.967,
    direnc3: 99.783,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "SASA",
    fark: -0.68,
    son: 2.43,
    pivot: 2.4466,
    destek1: 2.4233,
    destek2: 2.3966,
    destek3: 2.3733,
    direnc1: 2.4733,
    direnc2: 2.4966,
    direnc3: 2.5233,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "SISE",
    fark: 0.45,
    son: 44.86,
    pivot: 44.66,
    destek1: 43.74,
    destek2: 43.18,
    destek3: 42.26,
    direnc1: 45.22,
    direnc2: 46.14,
    direnc3: 46.7,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "TAVHL",
    fark: 1.15,
    son: 285.75,
    pivot: 282.5,
    destek1: 279.25,
    destek2: 276.25,
    destek3: 273.0,
    direnc1: 285.5,
    direnc2: 288.75,
    direnc3: 291.75,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "TCELL",
    fark: 0.56,
    son: 108.7,
    pivot: 108.1,
    destek1: 105.9,
    destek2: 104.4,
    destek3: 102.2,
    direnc1: 109.6,
    direnc2: 111.8,
    direnc3: 113.3,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "THYAO",
    fark: 0.56,
    son: 328.5,
    pivot: 326.666,
    destek1: 323.333,
    destek2: 320.6666,
    destek3: 317.3333,
    direnc1: 329.3333,
    direnc2: 332.6666,
    direnc3: 335.3333,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "TOASO",
    fark: -1.51,
    son: 305.0,
    pivot: 309.6666,
    destek1: 303.5833,
    destek2: 299.1666,
    destek3: 293.08333,
    direnc1: 314.08333,
    direnc2: 320.1666,
    direnc3: 324.5833,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "TRALT",
    fark: 3.06,
    son: 47.9,
    pivot: 46.4799,
    destek1: 46.04,
    destek2: 45.46,
    destek3: 45.02,
    direnc1: 47.05999,
    direnc2: 47.4999,
    direnc3: 48.07999,
    yorum: "İkinci direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "TTKOM",
    fark: -1.62,
    son: 60.65,
    pivot: 61.65,
    destek1: 60.35,
    destek2: 59.3,
    destek3: 58.0,
    direnc1: 62.7,
    direnc2: 64.0,
    direnc3: 65.05,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "TUPRS",
    fark: 5.29,
    son: 236.3,
    pivot: 224.4333,
    destek1: 221.2666,
    destek2: 215.03332,
    destek3: 211.8666,
    direnc1: 230.6666,
    direnc2: 233.8333,
    direnc3: 240.06668,
    yorum: "İkinci direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "VAKBN",
    fark: 2.13,
    son: 33.28,
    pivot: 32.587,
    destek1: 32.393,
    destek2: 32.067,
    destek3: 31.873,
    direnc1: 32.913,
    direnc2: 33.107,
    direnc3: 33.433,
    yorum: "İkinci direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "YKBNK",
    fark: 1.11,
    son: 40.6,
    pivot: 40.153,
    destek1: 39.767,
    destek2: 39.393,
    destek3: 39.007,
    direnc1: 40.527,
    direnc2: 40.913,
    direnc3: 41.287,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
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
