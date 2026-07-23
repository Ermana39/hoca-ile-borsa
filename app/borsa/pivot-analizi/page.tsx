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
  son: 14077.67,
  pivot: 14070.790,
  destek1: 13997.930,
  destek2: 13857.000,
  destek3: 13784.140,
  direnc1: 14211.720,
  direnc2: 14284.580,
  direnc3: 14425.510,
  yorum: "Pivot değerinin üstünde seyrediyor.",
};

const pivotVerileri: PivotRow[] = [
  {
    sembol: "AEFES",
    fark: -2.89,
    son: 21.54,
    pivot: 22.18,
    destek1: 21.88,
    destek2: 21.64,
    destek3: 21.34,
    direnc1: 22.42,
    direnc2: 22.72,
    direnc3: 22.96,
    yorum: "İkinci destek seviyesinin altına indi.",
  },
  {
    sembol: "AKBNK",
    fark: 0.75,
    son: 67.05,
    pivot: 66.55,
    destek1: 65.95,
    destek2: 65.35,
    destek3: 64.75,
    direnc1: 67.15,
    direnc2: 67.75,
    direnc3: 68.35,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "ASELS",
    fark: 2.06,
    son: 376.25,
    pivot: 368.667,
    destek1: 361.333,
    destek2: 352.667,
    destek3: 345.333,
    direnc1: 377.333,
    direnc2: 384.667,
    direnc3: 393.333,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "ASTOR",
    fark: 3.11,
    son: 307.0,
    pivot: 297.75,
    destek1: 292.75,
    destek2: 285.5,
    destek3: 280.5,
    direnc1: 305,
    direnc2: 310,
    direnc3: 317.25,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "BIMAS",
    fark: -1.68,
    son: 390.5,
    pivot: 397.167,
    destek1: 394.583,
    destek2: 389.417,
    destek3: 386.833,
    direnc1: 402.333,
    direnc2: 404.917,
    direnc3: 410.083,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "DSTKF",
    fark: 3.89,
    son: 2100.0,
    pivot: 2021.333,
    destek1: 1942.667,
    destek2: 1785.333,
    destek3: 1706.667,
    direnc1: 2178.667,
    direnc2: 2257.333,
    direnc3: 2414.667,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "EKGYO",
    fark: -2.87,
    son: 19.17,
    pivot: 19.737,
    destek1: 19.433,
    destek2: 19.237,
    destek3: 18.933,
    direnc1: 19.933,
    direnc2: 20.237,
    direnc3: 20.433,
    yorum: "İkinci destek seviyesinin altına indi.",
  },
  {
    sembol: "ENKAI",
    fark: -1.44,
    son: 89.95,
    pivot: 91.267,
    destek1: 90.383,
    destek2: 89.717,
    destek3: 88.833,
    direnc1: 91.933,
    direnc2: 92.817,
    direnc3: 93.483,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "EREGL",
    fark: 4.61,
    son: 44.2,
    pivot: 42.253,
    destek1: 41.507,
    destek2: 40.773,
    destek3: 40.027,
    direnc1: 42.987,
    direnc2: 43.733,
    direnc3: 44.467,
    yorum: "İkinci direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "FROTO",
    fark: -2.46,
    son: 79.4,
    pivot: 81.4,
    destek1: 80.75,
    destek2: 80.05,
    destek3: 79.4,
    direnc1: 82.1,
    direnc2: 82.75,
    direnc3: 83.45,
    yorum: "İkinci destek seviyesinin altına indi.",
  },
  {
    sembol: "GARAN",
    fark: -0.53,
    son: 125.0,
    pivot: 125.667,
    destek1: 124.233,
    destek2: 122.567,
    destek3: 121.133,
    direnc1: 127.333,
    direnc2: 128.767,
    direnc3: 130.433,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "GUBRF",
    fark: -0.41,
    son: 425.0,
    pivot: 426.75,
    destek1: 422.5,
    destek2: 414.75,
    destek3: 410.5,
    direnc1: 434.5,
    direnc2: 438.75,
    direnc3: 446.5,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "ISCTR",
    fark: -0.28,
    son: 13.0,
    pivot: 13.037,
    destek1: 12.933,
    destek2: 12.807,
    destek3: 12.703,
    direnc1: 13.163,
    direnc2: 13.267,
    direnc3: 13.393,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "KCHOL",
    fark: -2.75,
    son: 198.2,
    pivot: 203.8,
    destek1: 201.9,
    destek2: 199.5,
    destek3: 197.6,
    direnc1: 206.2,
    direnc2: 208.1,
    direnc3: 210.5,
    yorum: "İkinci destek seviyesinin altına indi.",
  },
  {
    sembol: "KRDMD",
    fark: -0.71,
    son: 42.16,
    pivot: 42.46,
    destek1: 40.9,
    destek2: 39.84,
    destek3: 38.28,
    direnc1: 43.52,
    direnc2: 45.08,
    direnc3: 46.14,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "MGROS",
    fark: -1.41,
    son: 630.5,
    pivot: 639.5,
    destek1: 634,
    destek2: 629,
    destek3: 623.5,
    direnc1: 644.5,
    direnc2: 650,
    direnc3: 655,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "PETKM",
    fark: 2.58,
    son: 22.56,
    pivot: 21.993,
    destek1: 21.667,
    destek2: 21.113,
    destek3: 20.787,
    direnc1: 22.547,
    direnc2: 22.873,
    direnc3: 23.427,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "PGSUS",
    fark: -1.64,
    son: 160.4,
    pivot: 163.067,
    destek1: 162.433,
    destek2: 161.867,
    destek3: 161.233,
    direnc1: 163.633,
    direnc2: 164.267,
    direnc3: 164.833,
    yorum: "Üçüncü destek seviyesinin altına indi.",
  },
  {
    sembol: "SAHOL",
    fark: -1.01,
    son: 87.95,
    pivot: 88.85,
    destek1: 88.3,
    destek2: 87.5,
    destek3: 86.95,
    direnc1: 89.65,
    direnc2: 90.2,
    direnc3: 91.0,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "SASA",
    fark: 1.81,
    son: 2.65,
    pivot: 2.603,
    destek1: 2.507,
    destek2: 2.373,
    destek3: 2.277,
    direnc1: 2.737,
    direnc2: 2.833,
    direnc3: 2.967,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "SISE",
    fark: 0.44,
    son: 43.68,
    pivot: 43.487,
    destek1: 43.233,
    destek2: 42.847,
    destek3: 42.593,
    direnc1: 43.873,
    direnc2: 44.127,
    direnc3: 44.513,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "TAVHL",
    fark: -5.5,
    son: 259.25,
    pivot: 274.333,
    destek1: 270.667,
    destek2: 266.083,
    destek3: 262.417,
    direnc1: 278.917,
    direnc2: 282.583,
    direnc3: 287.167,
    yorum: "Üçüncü destek seviyesinin altına indi.",
  },
  {
    sembol: "TCELL",
    fark: -5.49,
    son: 105.0,
    pivot: 111.1,
    destek1: 109.9,
    destek2: 108.8,
    destek3: 107.6,
    direnc1: 112.2,
    direnc2: 113.4,
    direnc3: 114.5,
    yorum: "Üçüncü destek seviyesinin altına indi.",
  },
  {
    sembol: "THYAO",
    fark: -1.91,
    son: 312.75,
    pivot: 318.833,
    destek1: 316.667,
    destek2: 312.333,
    destek3: 310.167,
    direnc1: 323.167,
    direnc2: 325.333,
    direnc3: 329.667,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "TOASO",
    fark: -3.94,
    son: 286.25,
    pivot: 298,
    destek1: 294.25,
    destek2: 291,
    destek3: 287.25,
    direnc1: 301.25,
    direnc2: 305,
    direnc3: 308.25,
    yorum: "Üçüncü destek seviyesinin altına indi.",
  },
  {
    sembol: "TRALT",
    fark: 1.21,
    son: 50.55,
    pivot: 49.947,
    destek1: 49.293,
    destek2: 48.747,
    destek3: 48.093,
    direnc1: 50.493,
    direnc2: 51.147,
    direnc3: 51.693,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "TTKOM",
    fark: -5.63,
    son: 55.65,
    pivot: 58.967,
    destek1: 58.133,
    destek2: 57.617,
    destek3: 56.783,
    direnc1: 59.483,
    direnc2: 60.317,
    direnc3: 60.833,
    yorum: "Üçüncü destek seviyesinin altına indi.",
  },
  {
    sembol: "TUPRS",
    fark: 0.53,
    son: 314.5,
    pivot: 312.833,
    destek1: 307.917,
    destek2: 302.083,
    destek3: 297.167,
    direnc1: 318.667,
    direnc2: 323.583,
    direnc3: 329.417,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "VAKBN",
    fark: -0.57,
    son: 30.44,
    pivot: 30.613,
    destek1: 30.307,
    destek2: 29.993,
    destek3: 29.687,
    direnc1: 30.927,
    direnc2: 31.233,
    direnc3: 31.547,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "YKBNK",
    fark: 0.64,
    son: 33.26,
    pivot: 33.047,
    destek1: 32.793,
    destek2: 32.447,
    destek3: 32.193,
    direnc1: 33.393,
    direnc2: 33.647,
    direnc3: 33.993,
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