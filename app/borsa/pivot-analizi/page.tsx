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
  fark: 0.27,
  son: 14070.98,
  pivot: 14032.480,
  destek1: 13911.210,
  destek2: 13841.380,
  destek3: 13720.110,
  direnc1: 14102.310,
  direnc2: 14223.580,
  direnc3: 14293.410,
  yorum: "Pivot değerinin üstünde seyrediyor.",
};

const pivotVerileri: PivotRow[] = [
  {
    sembol: "AEFES",
    fark: 1.77,
    son: 21.16,
    pivot: 20.793,
    destek1: 20.587,
    destek2: 20.373,
    destek3: 20.167,
    direnc1: 21.007,
    direnc2: 21.213,
    direnc3: 21.427,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "AKBNK",
    fark: -0.42,
    son: 66.85,
    pivot: 67.1333,
    destek1: 65.8666,
    destek2: 65.2333,
    destek3: 63.9666,
    direnc1: 67.7666,
    direnc2: 69.03333,
    direnc3: 69.6666,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "ASELS",
    fark: 1.36,
    son: 354.5,
    pivot: 349.75,
    destek1: 346.25,
    destek2: 341.0,
    destek3: 337.5,
    direnc1: 355.0,
    direnc2: 358.5,
    direnc3: 363.75,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "ASTOR",
    fark: 0.45,
    son: 296.25,
    pivot: 294.9166,
    destek1: 277.5833,
    destek2: 268.6666,
    destek3: 251.3333,
    direnc1: 303.8333,
    direnc2: 321.1666,
    direnc3: 330.08333,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "BIMAS",
    fark: 2.89,
    son: 400.0,
    pivot: 388.75,
    destek1: 381.0,
    destek2: 376.0,
    destek3: 368.25,
    direnc1: 393.75,
    direnc2: 401.5,
    direnc3: 406.5,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "DSTKF",
    fark: -9.97,
    son: 2271.0,
    pivot: 2522.5,
    destek1: 2522.5,
    destek2: 2522.5,
    destek3: 2522.5,
    direnc1: 2522.5,
    direnc2: 2522.5,
    direnc3: 2522.5,
    yorum: "Üçüncü destek seviyesinin altına indi.",
  },
  {
    sembol: "EKGYO",
    fark: -1.37,
    son: 20.2,
    pivot: 20.48,
    destek1: 20.18,
    destek2: 19.98,
    destek3: 19.68,
    direnc1: 20.68,
    direnc2: 20.98,
    direnc3: 21.18,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "ENKAI",
    fark: -1.41,
    son: 89.7,
    pivot: 90.983,
    destek1: 89.767,
    destek2: 88.833,
    destek3: 87.617,
    direnc1: 91.917,
    direnc2: 93.133,
    direnc3: 94.067,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "EREGL",
    fark: 1.8,
    son: 43.6,
    pivot: 42.827,
    destek1: 41.653,
    destek2: 40.967,
    destek3: 39.793,
    direnc1: 43.513,
    direnc2: 44.687,
    direnc3: 45.373,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "FROTO",
    fark: -1.49,
    son: 82.65,
    pivot: 83.9,
    destek1: 83.05,
    destek2: 82.5,
    destek3: 81.65,
    direnc1: 84.45,
    direnc2: 85.3,
    direnc3: 85.85,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "GARAN",
    fark: -1.84,
    son: 124.3,
    pivot: 126.633,
    destek1: 125.167,
    destek2: 123.533,
    destek3: 122.067,
    direnc1: 128.267,
    direnc2: 129.733,
    direnc3: 131.367,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "GUBRF",
    fark: -1.03,
    son: 410.25,
    pivot: 414.5,
    destek1: 406.25,
    destek2: 399.5,
    destek3: 391.25,
    direnc1: 421.25,
    direnc2: 429.5,
    direnc3: 436.25,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "ISCTR",
    fark: -3.75,
    son: 13.18,
    pivot: 13.693,
    destek1: 13.437,
    destek2: 13.193,
    destek3: 12.937,
    direnc1: 13.937,
    direnc2: 14.193,
    direnc3: 14.437,
    yorum: "İkinci destek seviyesinin altına indi.",
  },
  {
    sembol: "KCHOL",
    fark: 1.1,
    son: 199.8,
    pivot: 197.633,
    destek1: 195.667,
    destek2: 194.333,
    destek3: 192.367,
    direnc1: 198.967,
    direnc2: 200.933,
    direnc3: 202.267,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "KRDMD",
    fark: 5.96,
    son: 44.8,
    pivot: 42.28,
    destek1: 41.56,
    destek2: 40.36,
    destek3: 39.64,
    direnc1: 43.48,
    direnc2: 44.2,
    direnc3: 45.4,
    yorum: "İkinci direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "MGROS",
    fark: 2.31,
    son: 649.5,
    pivot: 634.833,
    destek1: 627.667,
    destek2: 619.833,
    destek3: 612.667,
    direnc1: 642.667,
    direnc2: 649.833,
    direnc3: 657.667,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "PETKM",
    fark: 8.51,
    son: 22.7,
    pivot: 20.92,
    destek1: 20.64,
    destek2: 20.34,
    destek3: 20.06,
    direnc1: 21.22,
    direnc2: 21.5,
    direnc3: 21.8,
    yorum: "Üçüncü direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "PGSUS",
    fark: -1.38,
    son: 164.7,
    pivot: 167.0,
    destek1: 165.3,
    destek2: 164.1,
    destek3: 162.4,
    direnc1: 168.2,
    direnc2: 169.9,
    direnc3: 171.1,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "SAHOL",
    fark: -0.11,
    son: 89.0,
    pivot: 89.1,
    destek1: 87.7,
    destek2: 87.0,
    destek3: 85.6,
    direnc1: 89.8,
    direnc2: 91.2,
    direnc3: 91.9,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "SASA",
    fark: 3.11,
    son: 2.54,
    pivot: 2.4633,
    destek1: 2.3766,
    destek2: 2.3233,
    destek3: 2.2366,
    direnc1: 2.5166,
    direnc2: 2.6033,
    direnc3: 2.6566,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "SISE",
    fark: 0.04,
    son: 44.5,
    pivot: 44.48,
    destek1: 43.8,
    destek2: 43.4,
    destek3: 42.72,
    direnc1: 44.88,
    direnc2: 45.56,
    direnc3: 45.96,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "TAVHL",
    fark: 2.32,
    son: 272.5,
    pivot: 266.333,
    destek1: 259.917,
    destek2: 254.333,
    destek3: 247.917,
    direnc1: 271.917,
    direnc2: 278.333,
    direnc3: 283.917,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "TCELL",
    fark: -0.09,
    son: 109.6,
    pivot: 109.7,
    destek1: 107.1,
    destek2: 105.7,
    destek3: 103.1,
    direnc1: 111.1,
    direnc2: 113.7,
    direnc3: 115.1,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "THYAO",
    fark: -0.48,
    son: 328.0,
    pivot: 329.5833,
    destek1: 326.9166,
    destek2: 324.3333,
    destek3: 321.6666,
    direnc1: 332.1666,
    direnc2: 334.8333,
    direnc3: 337.4166,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "TOASO",
    fark: -1.58,
    son: 301.75,
    pivot: 306.583,
    destek1: 303.417,
    destek2: 299.083,
    destek3: 295.917,
    direnc1: 310.917,
    direnc2: 314.083,
    direnc3: 318.417,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "TRALT",
    fark: -1.34,
    son: 49.96,
    pivot: 50.64,
    destek1: 48.73,
    destek2: 47.21,
    destek3: 45.3,
    direnc1: 52.16,
    direnc2: 54.07,
    direnc3: 55.59,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "TTKOM",
    fark: 1.37,
    son: 59.0,
    pivot: 58.2,
    destek1: 57.35,
    destek2: 56.55,
    destek3: 55.7,
    direnc1: 59.0,
    direnc2: 59.85,
    direnc3: 60.65,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "TUPRS",
    fark: 6.99,
    son: 307.5,
    pivot: 287.4166,
    destek1: 285.08333,
    destek2: 280.9166,
    destek3: 278.5833,
    direnc1: 291.5833,
    direnc2: 293.9166,
    direnc3: 298.08333,
    yorum: "Üçüncü direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "VAKBN",
    fark: -2.22,
    son: 30.48,
    pivot: 31.173,
    destek1: 30.587,
    destek2: 30.173,
    destek3: 29.587,
    direnc1: 31.587,
    direnc2: 32.173,
    direnc3: 32.587,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "YKBNK",
    fark: -0.76,
    son: 32.9,
    pivot: 33.153,
    destek1: 32.747,
    destek2: 32.273,
    destek3: 31.867,
    direnc1: 33.627,
    direnc2: 34.033,
    direnc3: 34.507,
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