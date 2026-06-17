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
  fark: -0.51,
  son: 14421.15,
  pivot: 14495.43,
  destek1: 14415.56,
  destek2: 14338.02,
  destek3: 14258.15,
  direnc1: 14572.97,
  direnc2: 14652.84,
  direnc3: 14730.38,
  yorum: "Pivot değerinin altında seyrediyor.",
};

const pivotVerileri: PivotRow[] = [
  {
    sembol: "AEFES",
    fark: -1.22,
    son: 21.06,
    pivot: 21.32,
    destek1: 21.04,
    destek2: 20.82,
    destek3: 20.54,
    direnc1: 21.54,
    direnc2: 21.82,
    direnc3: 22.04,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "AKBNK",
    fark: 1.39,
    son: 78.0,
    pivot: 76.9333,
    destek1: 76.2166,
    destek2: 75.3333,
    destek3: 74.6166,
    direnc1: 77.8166,
    direnc2: 78.5333,
    direnc3: 79.4166,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "ASELS",
    fark: 1.33,
    son: 395.0,
    pivot: 389.8333,
    destek1: 382.6666,
    destek2: 371.3333,
    destek3: 364.1666,
    direnc1: 401.1666,
    direnc2: 408.3333,
    direnc3: 419.6666,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "ASTOR",
    fark: -4.22,
    son: 284.0,
    pivot: 296.5,
    destek1: 286.5,
    destek2: 277.0,
    destek3: 267.0,
    direnc1: 306.0,
    direnc2: 316.0,
    direnc3: 325.5,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "BIMAS",
    fark: -1.84,
    son: 382.5,
    pivot: 389.6666,
    destek1: 381.5833,
    destek2: 377.1666,
    destek3: 369.8333,
    direnc1: 394.08333,
    direnc2: 402.1666,
    direnc3: 406.5833,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "DSTKF",
    fark: 2.32,
    son: 2870.0,
    pivot: 2805.0,
    destek1: 2762.5,
    destek2: 2715.0,
    destek3: 2672.5,
    direnc1: 2852.5,
    direnc2: 2895.0,
    direnc3: 2942.5,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "EKGYO",
    fark: 1.19,
    son: 21.6,
    pivot: 21.347,
    destek1: 21.113,
    destek2: 20.767,
    destek3: 20.533,
    direnc1: 21.693,
    direnc2: 21.927,
    direnc3: 22.273,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "ENKAI",
    fark: -2.16,
    son: 92.65,
    pivot: 94.7,
    destek1: 92.9,
    destek2: 91.65,
    destek3: 89.85,
    direnc1: 95.95,
    direnc2: 97.75,
    direnc3: 99.0,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "EREGL",
    fark: -2.18,
    son: 39.4,
    pivot: 40.28,
    destek1: 39.8399,
    destek2: 39.3799,
    destek3: 38.9399,
    direnc1: 40.74,
    direnc2: 41.18,
    direnc3: 41.64,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "FROTO",
    fark: -1.72,
    son: 89.55,
    pivot: 91.1166,
    destek1: 89.9333,
    destek2: 88.5666,
    destek3: 87.3833,
    direnc1: 92.4833,
    direnc2: 93.6666,
    direnc3: 95.03334,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "GARAN",
    fark: 0.38,
    son: 141.0,
    pivot: 140.4666,
    destek1: 139.1333,
    destek2: 138.06665,
    destek3: 136.7333,
    direnc1: 141.5333,
    direnc2: 142.8666,
    direnc3: 143.9333,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "GUBRF",
    fark: -3.65,
    son: 506.0,
    pivot: 525.167,
    destek1: 516.833,
    destek2: 509.167,
    destek3: 500.833,
    direnc1: 532.833,
    direnc2: 541.167,
    direnc3: 548.833,
    yorum: "İkinci destek seviyesinin altına indi.",
  },
  {
    sembol: "ISCTR",
    fark: -0.07,
    son: 14.94,
    pivot: 14.95,
    destek1: 14.84,
    destek2: 14.67,
    destek3: 14.56,
    direnc1: 15.12,
    direnc2: 15.23,
    direnc3: 15.4,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "KCHOL",
    fark: -2.35,
    son: 195.7,
    pivot: 200.4,
    destek1: 198.5,
    destek2: 196.9,
    destek3: 195.0,
    direnc1: 202.0,
    direnc2: 203.9,
    direnc3: 205.5,
    yorum: "İkinci destek seviyesinin altına indi.",
  },
  {
    sembol: "KRDMD",
    fark: -4.15,
    son: 39.42,
    pivot: 41.127,
    destek1: 40.353,
    destek2: 39.867,
    destek3: 39.093,
    direnc1: 41.613,
    direnc2: 42.387,
    direnc3: 42.873,
    yorum: "İkinci destek seviyesinin altına indi.",
  },
  {
    sembol: "MGROS",
    fark: -2.34,
    son: 681.0,
    pivot: 697.3333,
    destek1: 690.6666,
    destek2: 682.8333,
    destek3: 676.1666,
    direnc1: 705.1666,
    direnc2: 711.8333,
    direnc3: 719.6666,
    yorum: "İkinci destek seviyesinin altına indi.",
  },
  {
    sembol: "PETKM",
    fark: 2.76,
    son: 20.08,
    pivot: 19.54,
    destek1: 19.32,
    destek2: 18.89,
    destek3: 18.67,
    direnc1: 19.9699,
    direnc2: 20.1899,
    direnc3: 20.6199,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "PGSUS",
    fark: -2.07,
    son: 180.0,
    pivot: 183.8,
    destek1: 180.4,
    destek2: 176.8,
    destek3: 173.4,
    direnc1: 187.4,
    direnc2: 190.8,
    direnc3: 194.4,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "SAHOL",
    fark: -1.12,
    son: 99.8,
    pivot: 100.933,
    destek1: 99.967,
    destek2: 99.133,
    destek3: 98.167,
    direnc1: 101.767,
    direnc2: 102.733,
    direnc3: 103.567,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "SASA",
    fark: 1.23,
    son: 2.74,
    pivot: 2.7066,
    destek1: 2.6733,
    destek2: 2.6366,
    destek3: 2.6033,
    direnc1: 2.7433,
    direnc2: 2.7766,
    direnc3: 2.8133,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "SISE",
    fark: -2.39,
    son: 44.9,
    pivot: 46.0,
    destek1: 45.5,
    destek2: 45.06,
    destek3: 44.56,
    direnc1: 46.4399,
    direnc2: 46.9399,
    direnc3: 47.3799,
    yorum: "İkinci destek seviyesinin altına indi.",
  },
  {
    sembol: "TAVHL",
    fark: -0.17,
    son: 300.25,
    pivot: 300.75,
    destek1: 291.25,
    destek2: 280.5,
    destek3: 271.0,
    direnc1: 311.5,
    direnc2: 321.0,
    direnc3: 331.75,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "TCELL",
    fark: -2.21,
    son: 112.1,
    pivot: 114.633,
    destek1: 113.867,
    destek2: 112.533,
    destek3: 111.767,
    direnc1: 115.967,
    direnc2: 116.733,
    direnc3: 118.067,
    yorum: "İkinci destek seviyesinin altına indi.",
  },
  {
    sembol: "THYAO",
    fark: -1.33,
    son: 321.75,
    pivot: 326.0833,
    destek1: 323.1666,
    destek2: 319.8333,
    destek3: 316.9166,
    direnc1: 329.4166,
    direnc2: 332.3333,
    direnc3: 335.6666,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "TOASO",
    fark: 2.44,
    son: 329.25,
    pivot: 321.417,
    destek1: 316.833,
    destek2: 309.667,
    destek3: 305.083,
    direnc1: 328.583,
    direnc2: 333.167,
    direnc3: 340.333,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "TRALT",
    fark: 0.36,
    son: 47.86,
    pivot: 47.687,
    destek1: 46.413,
    destek2: 44.727,
    destek3: 43.453,
    direnc1: 49.373,
    direnc2: 50.647,
    direnc3: 52.333,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "TTKOM",
    fark: -3.4,
    son: 62.45,
    pivot: 64.65,
    destek1: 64.05,
    destek2: 63.6,
    destek3: 63.0,
    direnc1: 65.1,
    direnc2: 65.7,
    direnc3: 66.15,
    yorum: "Üçüncü destek seviyesinin altına indi.",
  },
  {
    sembol: "TUPRS",
    fark: -0.53,
    son: 226.7,
    pivot: 227.8999,
    destek1: 222.6999,
    destek2: 219.9999,
    destek3: 214.7999,
    direnc1: 230.6,
    direnc2: 235.8,
    direnc3: 238.5,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "VAKBN",
    fark: -0.21,
    son: 34.12,
    pivot: 34.193,
    destek1: 33.767,
    destek2: 33.293,
    destek3: 32.867,
    direnc1: 34.667,
    direnc2: 35.093,
    direnc3: 35.567,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "YKBNK",
    fark: 1.27,
    son: 40.9,
    pivot: 40.387,
    destek1: 40.033,
    destek2: 39.567,
    destek3: 39.213,
    direnc1: 40.853,
    direnc2: 41.207,
    direnc3: 41.673,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  }
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