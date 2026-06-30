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
  fark: -0.70,
  son: 14121.83,
  pivot: 14221.020,
  destek1: 14076.080,
  destek2: 13968.950,
  destek3: 13824.010,
  direnc1: 14328.150,
  direnc2: 14473.090,
  direnc3: 14580.220,
  yorum: "Pivot değerinin altında seyrediyor.",
};

const pivotVerileri: PivotRow[] = [
  {
    sembol: "AEFES",
    fark: -1.5,
    son: 21.04,
    pivot: 21.36,
    destek1: 21.14,
    destek2: 20.94,
    destek3: 20.72,
    direnc1: 21.56,
    direnc2: 21.78,
    direnc3: 21.98,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "AKBNK",
    fark: -0.49,
    son: 77.0,
    pivot: 77.383,
    destek1: 76.117,
    destek2: 75.033,
    destek3: 73.767,
    direnc1: 78.467,
    direnc2: 79.733,
    direnc3: 80.817,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "ASELS",
    fark: -4.1,
    son: 345.0,
    pivot: 359.75,
    destek1: 351.75,
    destek2: 346.0,
    destek3: 338.0,
    direnc1: 365.5,
    direnc2: 373.5,
    direnc3: 379.25,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "ASTOR",
    fark: -1.89,
    son: 276.5,
    pivot: 281.833,
    destek1: 273.1666,
    destek2: 268.3333,
    destek3: 259.666,
    direnc1: 286.666,
    direnc2: 295.3333,
    direnc3: 300.1666,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "BIMAS",
    fark: -1.81,
    son: 365.25,
    pivot: 372.0,
    destek1: 367.0,
    destek2: 363.0,
    destek3: 358.0,
    direnc1: 376.0,
    direnc2: 381.0,
    direnc3: 385.0,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "DSTKF",
    fark: 3.25,
    son: 3622.5,
    pivot: 3508.333,
    destek1: 3444.167,
    destek2: 3338.333,
    destek3: 3274.167,
    direnc1: 3614.167,
    direnc2: 3678.333,
    direnc3: 3784.167,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "EKGYO",
    fark: -0.39,
    son: 20.68,
    pivot: 20.76,
    destek1: 20.48,
    destek2: 20.28,
    destek3: 20.0,
    direnc1: 20.96,
    direnc2: 21.24,
    direnc3: 21.44,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "ENKAI",
    fark: -0.31,
    son: 90.5,
    pivot: 90.7833,
    destek1: 90.1666,
    destek2: 88.9333,
    destek3: 88.3166,
    direnc1: 92.01666,
    direnc2: 92.6333,
    direnc3: 93.8666,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "EREGL",
    fark: -2.6,
    son: 40.48,
    pivot: 41.56,
    destek1: 40.44,
    destek2: 39.68,
    destek3: 38.56,
    direnc1: 42.32,
    direnc2: 43.44,
    direnc3: 44.2,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "FROTO",
    fark: -1.4,
    son: 84.55,
    pivot: 85.7499,
    destek1: 84.8999,
    destek2: 84.3499,
    destek3: 83.4999,
    direnc1: 86.2999,
    direnc2: 87.1499,
    direnc3: 87.6999,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "GARAN",
    fark: 0.46,
    son: 138.0,
    pivot: 137.367,
    destek1: 136.133,
    destek2: 134.967,
    destek3: 133.733,
    direnc1: 138.533,
    direnc2: 139.767,
    direnc3: 140.933,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "GUBRF",
    fark: -4.22,
    son: 442.75,
    pivot: 462.25,
    destek1: 437.75,
    destek2: 424.5,
    destek3: 400.0,
    direnc1: 475.5,
    direnc2: 500.0,
    direnc3: 513.25,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "ISCTR",
    fark: 0.61,
    son: 14.81,
    pivot: 14.72,
    destek1: 14.54,
    destek2: 14.39,
    destek3: 14.21,
    direnc1: 14.87,
    direnc2: 15.05,
    direnc3: 15.2,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "KCHOL",
    fark: -1.48,
    son: 193.5,
    pivot: 196.4,
    destek1: 194.1,
    destek2: 192.5,
    destek3: 190.2,
    direnc1: 198.0,
    direnc2: 200.3,
    direnc3: 201.9,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "KRDMD",
    fark: -1.89,
    son: 39.8,
    pivot: 40.567,
    destek1: 39.633,
    destek2: 39.147,
    destek3: 38.213,
    direnc1: 41.053,
    direnc2: 41.987,
    direnc3: 42.473,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "MGROS",
    fark: -1.18,
    son: 669.5,
    pivot: 677.5,
    destek1: 664.5,
    destek2: 657.0,
    destek3: 644.0,
    direnc1: 685.0,
    direnc2: 698.0,
    direnc3: 705.5,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "PETKM",
    fark: -1.32,
    son: 19.11,
    pivot: 19.3666,
    destek1: 18.9833,
    destek2: 18.7666,
    destek3: 18.3833,
    direnc1: 19.5833,
    direnc2: 19.9666,
    direnc3: 20.1833,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "PGSUS",
    fark: -1.65,
    son: 175.1,
    pivot: 178.033,
    destek1: 175.867,
    destek2: 174.633,
    destek3: 172.467,
    direnc1: 179.267,
    direnc2: 181.433,
    direnc3: 182.667,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "SAHOL",
    fark: -0.31,
    son: 97.5,
    pivot: 97.8,
    destek1: 96.65,
    destek2: 95.8,
    destek3: 94.65,
    direnc1: 98.65,
    direnc2: 99.8,
    direnc3: 100.65,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "SASA",
    fark: -1.21,
    son: 2.45,
    pivot: 2.48,
    destek1: 2.42,
    destek2: 2.39,
    destek3: 2.33,
    direnc1: 2.51,
    direnc2: 2.57,
    direnc3: 2.6,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "SISE",
    fark: -1.95,
    son: 44.3,
    pivot: 45.18,
    destek1: 44.7,
    destek2: 44.46,
    destek3: 43.98,
    direnc1: 45.42,
    direnc2: 45.9,
    direnc3: 46.14,
    yorum: "İkinci destek seviyesinin altına indi.",
  },
  {
    sembol: "TAVHL",
    fark: -0.09,
    son: 282.25,
    pivot: 282.5,
    destek1: 279.25,
    destek2: 276.25,
    destek3: 273.0,
    direnc1: 285.5,
    direnc2: 288.75,
    direnc3: 291.75,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "TCELL",
    fark: -2.42,
    son: 107.4,
    pivot: 110.067,
    destek1: 108.133,
    destek2: 106.667,
    destek3: 104.733,
    direnc1: 111.533,
    direnc2: 113.467,
    direnc3: 114.933,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "THYAO",
    fark: -0.74,
    son: 326.0,
    pivot: 328.417,
    destek1: 325.833,
    destek2: 322.667,
    destek3: 320.083,
    direnc1: 331.583,
    direnc2: 334.167,
    direnc3: 337.333,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "TOASO",
    fark: -2.74,
    son: 308.0,
    pivot: 316.667,
    destek1: 308.083,
    destek2: 302.667,
    destek3: 294.083,
    direnc1: 322.083,
    direnc2: 330.667,
    direnc3: 336.083,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "TRALT",
    fark: 0.3,
    son: 46.62,
    pivot: 46.48,
    destek1: 46.04,
    destek2: 45.46,
    destek3: 45.02,
    direnc1: 47.06,
    direnc2: 47.5,
    direnc3: 48.08,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "TTKOM",
    fark: -0.41,
    son: 61.4,
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
    fark: 3.52,
    son: 227.5,
    pivot: 219.7666,
    destek1: 216.8333,
    destek2: 214.3666,
    destek3: 211.4333,
    direnc1: 222.2333,
    direnc2: 225.1666,
    direnc3: 227.6333,
    yorum: "İkinci direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "VAKBN",
    fark: 0.08,
    son: 32.72,
    pivot: 32.693,
    destek1: 32.327,
    destek2: 32.013,
    destek3: 31.647,
    direnc1: 33.007,
    direnc2: 33.373,
    direnc3: 33.687,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "YKBNK",
    fark: -0.4,
    son: 40.14,
    pivot: 40.3,
    destek1: 39.66,
    destek2: 39.24,
    destek3: 38.6,
    direnc1: 40.72,
    direnc2: 41.36,
    direnc3: 41.78,
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
