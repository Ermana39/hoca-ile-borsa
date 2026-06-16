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
  sembol: "A1CAP",
  fark: -0.72,
  son: 10.08,
  pivot: 10.153,
  destek1: 9.997,
  destek2: 9.843,
  destek3: 9.687,
  direnc1: 10.307,
  direnc2: 10.463,
  direnc3: 10.617,
  yorum: "Pivot değerinin altında seyrediyor.",
};

const pivotVerileri: PivotRow[] = [
  {
    sembol: "AEFES",
    fark: 0.51,
    son: 21.26,
    pivot: 21.153,
    destek1: 21.007,
    destek2: 20.713,
    destek3: 20.567,
    direnc1: 21.447,
    direnc2: 21.593,
    direnc3: 21.887,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "AKBNK",
    fark: 0.39,
    son: 77.1,
    pivot: 76.8,
    destek1: 75.45,
    destek2: 74.15,
    destek3: 72.8,
    direnc1: 78.1,
    direnc2: 79.45,
    direnc3: 80.75,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "ASELS",
    fark: 4.51,
    son: 394.0,
    pivot: 377.0,
    destek1: 368.5,
    destek2: 361.25,
    destek3: 352.75,
    direnc1: 384.25,
    direnc2: 392.75,
    direnc3: 400.0,
    yorum: "İkinci direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "ASTOR",
    fark: 5.53,
    son: 296.0,
    pivot: 280.5,
    destek1: 269.0,
    destek2: 251.0,
    destek3: 239.5,
    direnc1: 298.5,
    direnc2: 310.0,
    direnc3: 328.0,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "BIMAS",
    fark: -1.7,
    son: 386.0,
    pivot: 392.667,
    destek1: 386.333,
    destek2: 378.667,
    destek3: 372.333,
    direnc1: 400.333,
    direnc2: 406.667,
    direnc3: 414.333,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "DSTKF",
    fark: 2.68,
    son: 2810.0,
    pivot: 2736.667,
    destek1: 2663.333,
    destek2: 2516.667,
    destek3: 2443.333,
    direnc1: 2883.333,
    direnc2: 2956.667,
    direnc3: 3103.333,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "EKGYO",
    fark: 3.07,
    son: 21.46,
    pivot: 20.82,
    destek1: 20.6,
    destek2: 20.34,
    destek3: 20.12,
    direnc1: 21.08,
    direnc2: 21.3,
    direnc3: 21.56,
    yorum: "İkinci direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "ENKAI",
    fark: -1.62,
    son: 94.15,
    pivot: 95.7,
    destek1: 94.7,
    destek2: 93.3,
    destek3: 92.3,
    direnc1: 97.1,
    direnc2: 98.1,
    direnc3: 99.5,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "EREGL",
    fark: 0.17,
    son: 40.3,
    pivot: 40.233,
    destek1: 39.627,
    destek2: 39.053,
    destek3: 38.447,
    direnc1: 40.807,
    direnc2: 41.413,
    direnc3: 41.987,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "FROTO",
    fark: 1.78,
    son: 91.3,
    pivot: 89.7,
    destek1: 88.85,
    destek2: 87.6,
    destek3: 86.75,
    direnc1: 90.95,
    direnc2: 91.8,
    direnc3: 93.05,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "GARAN",
    fark: -1.22,
    son: 140.2,
    pivot: 141.933,
    destek1: 139.467,
    destek2: 137.933,
    destek3: 135.467,
    direnc1: 143.467,
    direnc2: 145.933,
    direnc3: 147.467,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "GUBRF",
    fark: 1.91,
    son: 524.5,
    pivot: 514.667,
    destek1: 502.833,
    destek2: 479.167,
    destek3: 467.333,
    direnc1: 538.333,
    direnc2: 550.167,
    direnc3: 573.833,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "ISCTR",
    fark: 0.2,
    son: 15.01,
    pivot: 14.98,
    destek1: 14.72,
    destek2: 14.55,
    destek3: 14.29,
    direnc1: 15.15,
    direnc2: 15.41,
    direnc3: 15.58,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "KCHOL",
    fark: 1.9,
    son: 200.1,
    pivot: 196.367,
    destek1: 194.233,
    destek2: 191.667,
    destek3: 189.533,
    direnc1: 198.933,
    direnc2: 201.067,
    direnc3: 203.633,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "KRDMD",
    fark: 0.03,
    son: 40.84,
    pivot: 40.827,
    destek1: 40.153,
    destek2: 39.267,
    destek3: 38.593,
    direnc1: 41.713,
    direnc2: 42.387,
    direnc3: 43.273,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "MGROS",
    fark: 0.58,
    son: 698.5,
    pivot: 694.5,
    destek1: 684.5,
    destek2: 670,
    destek3: 660,
    direnc1: 709,
    direnc2: 719,
    direnc3: 733.5,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "PETKM",
    fark: 1.47,
    son: 19.75,
    pivot: 19.463,
    destek1: 19.087,
    destek2: 18.823,
    destek3: 18.447,
    direnc1: 19.727,
    direnc2: 20.103,
    direnc3: 20.367,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "PGSUS",
    fark: 1.4,
    son: 184.0,
    pivot: 181.467,
    destek1: 179.633,
    destek2: 178.067,
    destek3: 176.233,
    direnc1: 183.033,
    direnc2: 184.867,
    direnc3: 186.433,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "SAHOL",
    fark: 0.0,
    son: 100.8,
    pivot: 100.8,
    destek1: 99.5,
    destek2: 97.8,
    destek3: 96.5,
    direnc1: 102.5,
    direnc2: 103.8,
    direnc3: 105.5,
    yorum: "Pivot değerine eşit.",
  },
  {
    sembol: "SASA",
    fark: 1.01,
    son: 2.71,
    pivot: 2.683,
    destek1: 2.657,
    destek2: 2.623,
    destek3: 2.597,
    direnc1: 2.717,
    direnc2: 2.743,
    direnc3: 2.777,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "SISE",
    fark: -0.88,
    son: 45.94,
    pivot: 46.347,
    destek1: 45.953,
    destek2: 45.507,
    destek3: 45.113,
    direnc1: 46.793,
    direnc2: 47.187,
    direnc3: 47.633,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "TAVHL",
    fark: 3.96,
    son: 302.0,
    pivot: 290.5,
    destek1: 285.5,
    destek2: 279,
    destek3: 274,
    direnc1: 297,
    direnc2: 302,
    direnc3: 308.5,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "TCELL",
    fark: 0.58,
    son: 115.2,
    pivot: 114.533,
    destek1: 112.767,
    destek2: 110.633,
    destek3: 108.867,
    direnc1: 116.667,
    direnc2: 118.433,
    direnc3: 120.567,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "THYAO",
    fark: 0.1,
    son: 326.5,
    pivot: 326.167,
    destek1: 322.833,
    destek2: 319.917,
    destek3: 316.583,
    direnc1: 329.083,
    direnc2: 332.417,
    direnc3: 335.333,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "TOASO",
    fark: 4.01,
    son: 324.0,
    pivot: 311.5,
    destek1: 306.5,
    destek2: 297.75,
    destek3: 292.75,
    direnc1: 320.25,
    direnc2: 325.25,
    direnc3: 334,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "TRALT",
    fark: 4.22,
    son: 48.1,
    pivot: 46.153,
    destek1: 45.567,
    destek2: 44.613,
    destek3: 44.027,
    direnc1: 47.107,
    direnc2: 47.693,
    direnc3: 48.647,
    yorum: "İkinci direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "TTKOM",
    fark: -1.25,
    son: 64.5,
    pivot: 65.317,
    destek1: 64.433,
    destek2: 63.817,
    destek3: 62.933,
    direnc1: 65.933,
    direnc2: 66.817,
    direnc3: 67.433,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "TUPRS",
    fark: -3.07,
    son: 225.4,
    pivot: 232.533,
    destek1: 228.367,
    destek2: 224.833,
    destek3: 220.667,
    direnc1: 236.067,
    direnc2: 240.233,
    direnc3: 243.767,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "VAKBN",
    fark: 0.85,
    son: 34.24,
    pivot: 33.953,
    destek1: 33.407,
    destek2: 32.833,
    destek3: 32.287,
    direnc1: 34.527,
    direnc2: 35.073,
    direnc3: 35.647,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "YKBNK",
    fark: 0.25,
    son: 40.5,
    pivot: 40.4,
    destek1: 39.88,
    destek2: 39.3,
    destek3: 38.78,
    direnc1: 40.98,
    direnc2: 41.5,
    direnc3: 42.08,
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