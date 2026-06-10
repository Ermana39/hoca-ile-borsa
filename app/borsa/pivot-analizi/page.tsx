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
  fark: -0.38,
  son: 13744.64,
  pivot: 13797.05,
  destek1: 13653.02,
  destek2: 13576.11,
  destek3: 13438.06,
  direnc1: 13879.94,
  direnc2: 14017.99,
  direnc3: 14100.88,
  yorum: "Pivot değerinin altında seyrediyor.",
};

const pivotVerileri: PivotRow[] = [
  {
    sembol: "AEFES",
    fark: -2.38,
    son: 19.96,
    pivot: 20.447,
    destek1: 20.033,
    destek2: 19.767,
    destek3: 19.353,
    direnc1: 20.713,
    direnc2: 21.127,
    direnc3: 21.393,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "AKBNK",
    fark: -1.88,
    son: 66.1,
    pivot: 67.3666,
    destek1: 66.4833,
    destek2: 65.8166,
    destek3: 64.9333,
    direnc1: 68.0333,
    direnc2: 68.9166,
    direnc3: 69.5833,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "ASELS",
    fark: 4.34,
    son: 376.75,
    pivot: 361.083,
    destek1: 353.417,
    destek2: 349.583,
    destek3: 341.917,
    direnc1: 364.917,
    direnc2: 372.583,
    direnc3: 376.417,
    yorum: "Üçüncü direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "ASTOR",
    fark: -5.91,
    son: 285,
    pivot: 302.9166,
    destek1: 287.08333,
    destek2: 275.1666,
    destek3: 259.3333,
    direnc1: 314.8333,
    direnc2: 330.6666,
    direnc3: 342.5833,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "BIMAS",
    fark: -0.35,
    son: 380.5,
    pivot: 381.833,
    destek1: 375.9166,
    destek2: 368.08333,
    destek3: 362.1666,
    direnc1: 389.6666,
    direnc2: 395.5833,
    direnc3: 403.4166,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "DSTKF",
    fark: 3.17,
    son: 2600,
    pivot: 2520,
    destek1: 2480,
    destek2: 2410,
    destek3: 2370,
    direnc1: 2590,
    direnc2: 2630,
    direnc3: 2700,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "EKGYO",
    fark: -1.23,
    son: 19.09,
    pivot: 19.327,
    destek1: 19.073,
    destek2: 18.947,
    destek3: 18.693,
    direnc1: 19.453,
    direnc2: 19.707,
    direnc3: 19.833,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "ENKAI",
    fark: -2.65,
    son: 93.8,
    pivot: 96.35,
    destek1: 94.9,
    destek2: 93.65,
    destek3: 92.2,
    direnc1: 97.6,
    direnc2: 99.05,
    direnc3: 100.3,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "EREGL",
    fark: -0.43,
    son: 38.64,
    pivot: 38.807,
    destek1: 38.353,
    destek2: 38.067,
    destek3: 37.613,
    direnc1: 39.093,
    direnc2: 39.547,
    direnc3: 39.833,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "FROTO",
    fark: 0.69,
    son: 87.45,
    pivot: 86.85,
    destek1: 85.6499,
    destek2: 84.9999,
    destek3: 83.7999,
    direnc1: 87.5,
    direnc2: 88.7,
    direnc3: 89.35,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "GARAN",
    fark: -1.69,
    son: 128.2,
    pivot: 130.3999,
    destek1: 129.1,
    destek2: 127.8,
    destek3: 126.5,
    direnc1: 131.6999,
    direnc2: 132.9999,
    direnc3: 134.2999,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "GUBRF",
    fark: -3.44,
    son: 470.25,
    pivot: 487,
    destek1: 470.5,
    destek2: 461.75,
    destek3: 445.25,
    direnc1: 495.75,
    direnc2: 512.25,
    direnc3: 521,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "ISCTR",
    fark: -1.13,
    son: 13.73,
    pivot: 13.887,
    destek1: 13.723,
    destek2: 13.617,
    destek3: 13.453,
    direnc1: 13.993,
    direnc2: 14.157,
    direnc3: 14.263,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "KCHOL",
    fark: -1.67,
    son: 185,
    pivot: 188.133,
    destek1: 184.967,
    destek2: 183.233,
    destek3: 180.067,
    direnc1: 189.867,
    direnc2: 193.033,
    direnc3: 194.767,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "KRDMD",
    fark: -3.38,
    son: 38.08,
    pivot: 39.413,
    destek1: 38.127,
    destek2: 37.173,
    destek3: 35.887,
    direnc1: 40.367,
    direnc2: 41.653,
    direnc3: 42.607,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "MGROS",
    fark: -0.6,
    son: 668,
    pivot: 672,
    destek1: 663,
    destek2: 652,
    destek3: 643,
    direnc1: 683,
    direnc2: 692,
    direnc3: 703,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "PETKM",
    fark: -2.36,
    son: 19.95,
    pivot: 20.433,
    destek1: 19.927,
    destek2: 19.633,
    destek3: 19.127,
    direnc1: 20.727,
    direnc2: 21.233,
    direnc3: 21.527,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "PGSUS",
    fark: -1.44,
    son: 166.8,
    pivot: 169.2333,
    destek1: 167.6666,
    destek2: 166.4333,
    destek3: 164.8666,
    direnc1: 170.4666,
    direnc2: 172.03333,
    direnc3: 173.2666,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "SAHOL",
    fark: -0.78,
    son: 91.15,
    pivot: 91.867,
    destek1: 90.283,
    destek2: 89.367,
    destek3: 87.783,
    direnc1: 92.783,
    direnc2: 94.367,
    direnc3: 95.283,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "SASA",
    fark: -1.05,
    son: 2.5,
    pivot: 2.5266,
    destek1: 2.4533,
    destek2: 2.4066,
    destek3: 2.3333,
    direnc1: 2.5733,
    direnc2: 2.6466,
    direnc3: 2.6933,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "SISE",
    fark: -1.15,
    son: 44.2,
    pivot: 44.713,
    destek1: 43.947,
    destek2: 43.553,
    destek3: 42.787,
    direnc1: 45.107,
    direnc2: 45.873,
    direnc3: 46.267,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "TAVHL",
    fark: 1.63,
    son: 260.5,
    pivot: 256.333,
    destek1: 252.9166,
    destek2: 248.8333,
    destek3: 245.4166,
    direnc1: 260.4166,
    direnc2: 263.8333,
    direnc3: 267.9166,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "TCELL",
    fark: -2.24,
    son: 104.6,
    pivot: 107,
    destek1: 104,
    destek2: 102.5,
    destek3: 99.5,
    direnc1: 108.5,
    direnc2: 111.5,
    direnc3: 113,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "THYAO",
    fark: -0.64,
    son: 295.5,
    pivot: 297.4166,
    destek1: 294.8333,
    destek2: 292.9166,
    destek3: 290.3333,
    direnc1: 299.3333,
    direnc2: 301.9166,
    direnc3: 303.8333,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "TOASO",
    fark: -1.42,
    son: 290,
    pivot: 294.167,
    destek1: 290.583,
    destek2: 286.167,
    destek3: 282.583,
    direnc1: 298.583,
    direnc2: 302.167,
    direnc3: 306.583,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "TRALT",
    fark: -3.85,
    son: 43,
    pivot: 44.72,
    destek1: 42.9,
    destek2: 41.98,
    destek3: 40.16,
    direnc1: 45.64,
    direnc2: 47.46,
    direnc3: 48.38,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "TTKOM",
    fark: -3.92,
    son: 61.25,
    pivot: 63.75,
    destek1: 62.05,
    destek2: 61.2,
    destek3: 59.5,
    direnc1: 64.6,
    direnc2: 66.3,
    direnc3: 67.15,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "TUPRS",
    fark: 1.19,
    son: 234.8,
    pivot: 232.03333,
    destek1: 226.2666,
    destek2: 223.03333,
    destek3: 217.2666,
    direnc1: 235.2666,
    direnc2: 241.03333,
    direnc3: 244.2666,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "VAKBN",
    fark: -3.6,
    son: 31.58,
    pivot: 32.76,
    destek1: 32.18,
    destek2: 31.78,
    destek3: 31.2,
    direnc1: 33.16,
    direnc2: 33.74,
    direnc3: 34.14,
    yorum: "İkinci destek seviyesinin altına indi.",
  },
  {
    sembol: "YKBNK",
    fark: -1.58,
    son: 34.8,
    pivot: 35.36,
    destek1: 35.06,
    destek2: 34.58,
    destek3: 34.28,
    direnc1: 35.84,
    direnc2: 36.14,
    direnc3: 36.62,
    yorum: "İlk destek seviyesinin altına indi.",
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