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
  fark: 1.71,
  son: 13687.93,
  pivot: 13458.36,
  destek1: 13328.19,
  destek2: 13245.85,
  destek3: 13115.68,
  direnc1: 13540.7,
  direnc2: 13670.87,
  direnc3: 13753.21,
  yorum: "İkinci direnç seviyesinin üstüne çıktı.",
};

const pivotVerileri: PivotRow[] = [
  {
    sembol: "AEFES",
    fark: -2.45,
    son: 21.54,
    pivot: 22.08,
    destek1: 21.64,
    destek2: 21.2,
    destek3: 20.76,
    direnc1: 22.52,
    direnc2: 22.96,
    direnc3: 23.4,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "AKBNK",
    fark: 3.97,
    son: 68.1,
    pivot: 65.5,
    destek1: 64.4,
    destek2: 62.8,
    destek3: 61.7,
    direnc1: 67.1,
    direnc2: 68.2,
    direnc3: 69.8,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "ASELS",
    fark: 3.48,
    son: 349.25,
    pivot: 337.5,
    destek1: 330.5,
    destek2: 324.75,
    destek3: 317.75,
    direnc1: 343.25,
    direnc2: 350.25,
    direnc3: 356.0,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "ASTOR",
    fark: 3.56,
    son: 302.75,
    pivot: 292.3333,
    destek1: 285.4166,
    destek2: 280.3333,
    destek3: 273.4166,
    direnc1: 297.4166,
    direnc2: 304.3333,
    direnc3: 309.4166,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "BIMAS",
    fark: 0.59,
    son: 385.75,
    pivot: 383.5,
    destek1: 372,
    destek2: 365,
    destek3: 353.5,
    direnc1: 390.5,
    direnc2: 402,
    direnc3: 409,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "DSTKF",
    fark: -2.29,
    son: 1619.0,
    pivot: 1657.0,
    destek1: 1569.0,
    destek2: 1525.0,
    destek3: 1437.0,
    direnc1: 1701.0,
    direnc2: 1789.0,
    direnc3: 1833.0,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "EKGYO",
    fark: 1.58,
    son: 18.5,
    pivot: 18.213,
    destek1: 17.907,
    destek2: 17.623,
    destek3: 17.317,
    direnc1: 18.497,
    direnc2: 18.803,
    direnc3: 19.087,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "ENKAI",
    fark: -1.77,
    son: 85.85,
    pivot: 87.4,
    destek1: 86.05,
    destek2: 85.05,
    destek3: 83.7,
    direnc1: 88.4,
    direnc2: 89.75,
    direnc3: 90.75,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "EREGL",
    fark: 0.68,
    son: 41.74,
    pivot: 41.46,
    destek1: 39.78,
    destek2: 38.86,
    destek3: 37.18,
    direnc1: 42.3799,
    direnc2: 44.05999,
    direnc3: 44.9799,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "FROTO",
    fark: 1.32,
    son: 80.55,
    pivot: 79.5,
    destek1: 78.15,
    destek2: 77.25,
    destek3: 75.9,
    direnc1: 80.4,
    direnc2: 81.75,
    direnc3: 82.65,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "GARAN",
    fark: 3.81,
    son: 131.8,
    pivot: 126.967,
    destek1: 125.533,
    destek2: 123.167,
    destek3: 121.733,
    direnc1: 129.333,
    direnc2: 130.767,
    direnc3: 133.133,
    yorum: "İkinci direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "GUBRF",
    fark: 2.82,
    son: 413.5,
    pivot: 402.167,
    destek1: 394.833,
    destek2: 385.167,
    destek3: 377.833,
    direnc1: 411.833,
    direnc2: 419.167,
    direnc3: 428.833,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "ISCTR",
    fark: -1.0,
    son: 12.59,
    pivot: 12.717,
    destek1: 12.563,
    destek2: 12.447,
    destek3: 12.293,
    direnc1: 12.833,
    direnc2: 12.987,
    direnc3: 13.103,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "KCHOL",
    fark: 1.31,
    son: 198.9,
    pivot: 196.333,
    destek1: 193.767,
    destek2: 190.833,
    destek3: 188.267,
    direnc1: 199.267,
    direnc2: 201.833,
    direnc3: 204.767,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "KRDMD",
    fark: 2.77,
    son: 41.78,
    pivot: 40.653,
    destek1: 39.527,
    destek2: 38.833,
    destek3: 37.707,
    direnc1: 41.347,
    direnc2: 42.473,
    direnc3: 43.167,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "MGROS",
    fark: 1.78,
    son: 629.0,
    pivot: 618,
    destek1: 600.5,
    destek2: 590.5,
    destek3: 573,
    direnc1: 628,
    direnc2: 645.5,
    direnc3: 655.5,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "PETKM",
    fark: 3.72,
    son: 19.6,
    pivot: 18.897,
    destek1: 18.713,
    destek2: 18.347,
    destek3: 18.163,
    direnc1: 19.263,
    direnc2: 19.447,
    direnc3: 19.813,
    yorum: "İkinci direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "PGSUS",
    fark: 1.45,
    son: 158.9,
    pivot: 156.6333,
    destek1: 154.8666,
    destek2: 153.1333,
    destek3: 151.3666,
    direnc1: 158.3666,
    direnc2: 160.1333,
    direnc3: 161.8666,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "SAHOL",
    fark: 3.01,
    son: 88.9,
    pivot: 86.3,
    destek1: 85.6,
    destek2: 84.6499,
    destek3: 83.9499,
    direnc1: 87.25,
    direnc2: 87.95,
    direnc3: 88.9,
    yorum: "İkinci direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "SASA",
    fark: 0.14,
    son: 2.52,
    pivot: 2.5166,
    destek1: 2.4733,
    destek2: 2.4266,
    destek3: 2.3833,
    direnc1: 2.5633,
    direnc2: 2.6066,
    direnc3: 2.6533,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "SISE",
    fark: 0.97,
    son: 42.44,
    pivot: 42.033,
    destek1: 41.667,
    destek2: 41.193,
    destek3: 40.827,
    direnc1: 42.507,
    direnc2: 42.873,
    direnc3: 43.347,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "TAVHL",
    fark: 2.6,
    son: 286.0,
    pivot: 278.75,
    destek1: 275.25,
    destek2: 272.5,
    destek3: 269,
    direnc1: 281.5,
    direnc2: 285,
    direnc3: 287.75,
    yorum: "İkinci direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "TCELL",
    fark: 4.23,
    son: 107.6,
    pivot: 103.233,
    destek1: 101.567,
    destek2: 98.633,
    destek3: 96.967,
    direnc1: 106.167,
    direnc2: 107.833,
    direnc3: 110.767,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "THYAO",
    fark: 1.62,
    son: 323.75,
    pivot: 318.5833,
    destek1: 314.9166,
    destek2: 312.8333,
    destek3: 309.1666,
    direnc1: 320.6666,
    direnc2: 324.3333,
    direnc3: 326.4166,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "TOASO",
    fark: 0.58,
    son: 272.5,
    pivot: 270.9166,
    destek1: 266.5833,
    destek2: 261.1666,
    destek3: 256.8333,
    direnc1: 276.3333,
    direnc2: 280.6666,
    direnc3: 286.08333,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "TRALT",
    fark: 3.72,
    son: 46.34,
    pivot: 44.68,
    destek1: 44.18,
    destek2: 43.3,
    destek3: 42.8,
    direnc1: 45.56,
    direnc2: 46.06,
    direnc3: 46.94,
    yorum: "İkinci direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "TTKOM",
    fark: 2.8,
    son: 53.9,
    pivot: 52.433,
    destek1: 51.817,
    destek2: 50.883,
    destek3: 50.267,
    direnc1: 53.367,
    direnc2: 53.983,
    direnc3: 54.917,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "TUPRS",
    fark: -0.23,
    son: 290.25,
    pivot: 290.917,
    destek1: 286.083,
    destek2: 281.667,
    destek3: 276.833,
    direnc1: 295.333,
    direnc2: 300.167,
    direnc3: 304.583,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "VAKBN",
    fark: 3.34,
    son: 31.16,
    pivot: 30.153,
    destek1: 29.787,
    destek2: 29.073,
    destek3: 28.707,
    direnc1: 30.867,
    direnc2: 31.233,
    direnc3: 31.947,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "YKBNK",
    fark: 3.18,
    son: 34.86,
    pivot: 33.787,
    destek1: 33.293,
    destek2: 32.587,
    destek3: 32.093,
    direnc1: 34.493,
    direnc2: 34.987,
    direnc3: 35.693,
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