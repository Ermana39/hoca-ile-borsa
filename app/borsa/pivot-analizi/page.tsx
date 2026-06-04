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
  fark: -1.21,
  son: 13872.25,
  pivot: 14042.05,
  destek1: 13864.14,
  destek2: 13762.63,
  destek3: 13584.72,
  direnc1: 14143.56,
  direnc2: 14321.47,
  direnc3: 14422.98,
  yorum: "Pivot değerinin altında seyrediyor.",
};

const pivotVerileri: PivotRow[] = [
  {
    sembol: "AEFES",
    fark: 2.31,
    son: 20.66,
    pivot: 20.193,
    destek1: 19.887,
    destek2: 19.653,
    destek3: 19.347,
    direnc1: 20.427,
    direnc2: 20.733,
    direnc3: 20.967,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "AKBNK",
    fark: 2.68,
    son: 67.15,
    pivot: 65.4,
    destek1: 64.3,
    destek2: 63.75,
    destek3: 62.65,
    direnc1: 65.95,
    direnc2: 67.05,
    direnc3: 67.6,
    yorum: "İkinci direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "ASELS",
    fark: -7.45,
    son: 362.25,
    pivot: 391.4166,
    destek1: 373.3333,
    destek2: 363.1666,
    destek3: 345.08333,
    direnc1: 401.5833,
    direnc2: 419.6666,
    direnc3: 429.8333,
    yorum: "İkinci destek seviyesinin altına indi.",
  },
  {
    sembol: "ASTOR",
    fark: -11.92,
    son: 322.75,
    pivot: 366.4166,
    destek1: 347.08333,
    destek2: 335.6666,
    destek3: 316.3333,
    direnc1: 377.8333,
    direnc2: 397.1666,
    direnc3: 408.5833,
    yorum: "İkinci destek seviyesinin altına indi.",
  },
  {
    sembol: "BIMAS",
    fark: -1.89,
    son: 373,
    pivot: 380.1666,
    destek1: 375.08333,
    destek2: 369.1666,
    destek3: 364.08333,
    direnc1: 386.08333,
    direnc2: 391.1666,
    direnc3: 397.08333,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "DSTKF",
    fark: 5.75,
    son: 2257,
    pivot: 2134.333,
    destek1: 2068.667,
    destek2: 1937.333,
    destek3: 1871.667,
    direnc1: 2265.667,
    direnc2: 2331.333,
    direnc3: 2462.667,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "EKGYO",
    fark: 2.06,
    son: 20.32,
    pivot: 19.91,
    destek1: 19.58,
    destek2: 19.36,
    destek3: 19.03,
    direnc1: 20.13,
    direnc2: 20.46,
    direnc3: 20.68,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "ENKAI",
    fark: -1.98,
    son: 94.95,
    pivot: 96.867,
    destek1: 94.533,
    destek2: 93.167,
    destek3: 90.833,
    direnc1: 98.233,
    direnc2: 100.567,
    direnc3: 101.933,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "EREGL",
    fark: -0.86,
    son: 40.1,
    pivot: 40.447,
    destek1: 40.033,
    destek2: 39.767,
    destek3: 39.353,
    direnc1: 40.713,
    direnc2: 41.127,
    direnc3: 41.393,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "FROTO",
    fark: -0.43,
    son: 88.6,
    pivot: 88.983,
    destek1: 87.667,
    destek2: 86.383,
    destek3: 85.067,
    direnc1: 90.267,
    direnc2: 91.583,
    direnc3: 92.867,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "GARAN",
    fark: 1.94,
    son: 129.5,
    pivot: 127.03333,
    destek1: 124.6666,
    destek2: 123.4333,
    destek3: 121.06668,
    direnc1: 128.2666,
    direnc2: 130.6333,
    direnc3: 131.8666,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "GUBRF",
    fark: -4.1,
    son: 522.5,
    pivot: 544.833,
    destek1: 531.167,
    destek2: 522.333,
    destek3: 508.667,
    direnc1: 553.667,
    direnc2: 567.333,
    direnc3: 576.167,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "ISCTR",
    fark: 1.78,
    son: 13.72,
    pivot: 13.48,
    destek1: 13.29,
    destek2: 13.19,
    destek3: 13,
    direnc1: 13.58,
    direnc2: 13.77,
    direnc3: 13.87,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "KCHOL",
    fark: 0.49,
    son: 191.2,
    pivot: 190.2666,
    destek1: 186.8333,
    destek2: 185.06667,
    destek3: 181.6333,
    direnc1: 192.03333,
    direnc2: 195.4666,
    direnc3: 197.2333,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "KRDMD",
    fark: -3.45,
    son: 39.6,
    pivot: 41.013,
    destek1: 39.827,
    destek2: 39.173,
    destek3: 37.987,
    direnc1: 41.667,
    direnc2: 42.853,
    direnc3: 43.507,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "MGROS",
    fark: -1.22,
    son: 662.5,
    pivot: 670.6666,
    destek1: 662.3333,
    destek2: 657.6666,
    destek3: 649.3333,
    direnc1: 675.3333,
    direnc2: 683.6666,
    direnc3: 688.3333,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "PETKM",
    fark: -9.06,
    son: 21.02,
    pivot: 23.113,
    destek1: 21.807,
    destek2: 21.073,
    destek3: 19.767,
    direnc1: 23.847,
    direnc2: 25.153,
    direnc3: 25.887,
    yorum: "İkinci destek seviyesinin altına indi.",
  },
  {
    sembol: "PGSUS",
    fark: 0.12,
    son: 171.2,
    pivot: 171,
    destek1: 168.8,
    destek2: 167.6,
    destek3: 165.4,
    direnc1: 172.1999,
    direnc2: 174.3999,
    direnc3: 175.5999,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "SAHOL",
    fark: 0.66,
    son: 92,
    pivot: 91.4,
    destek1: 89.9,
    destek2: 89.1,
    destek3: 87.6,
    direnc1: 92.2,
    direnc2: 93.7,
    direnc3: 94.5,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "SASA",
    fark: -2.99,
    son: 2.59,
    pivot: 2.6699,
    destek1: 2.58,
    destek2: 2.5299,
    destek3: 2.4399,
    direnc1: 2.72,
    direnc2: 2.81,
    direnc3: 2.86,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "SISE",
    fark: -2.5,
    son: 45.48,
    pivot: 46.647,
    destek1: 45.773,
    destek2: 45.227,
    destek3: 44.353,
    direnc1: 47.193,
    direnc2: 48.067,
    direnc3: 48.613,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "TAVHL",
    fark: -0.09,
    son: 264,
    pivot: 264.25,
    destek1: 260,
    destek2: 257.25,
    destek3: 253,
    direnc1: 267,
    direnc2: 271.25,
    direnc3: 274,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "TCELL",
    fark: 1.28,
    son: 107.9,
    pivot: 106.533,
    destek1: 104.567,
    destek2: 103.333,
    destek3: 101.367,
    direnc1: 107.767,
    direnc2: 109.733,
    direnc3: 110.967,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "THYAO",
    fark: 0.45,
    son: 299.75,
    pivot: 298.4166,
    destek1: 295.08333,
    destek2: 293.1666,
    destek3: 289.8333,
    direnc1: 300.3333,
    direnc2: 303.6666,
    direnc3: 305.5833,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "TOASO",
    fark: -1.19,
    son: 297.5,
    pivot: 301.083,
    destek1: 295.167,
    destek2: 291.333,
    destek3: 285.417,
    direnc1: 304.917,
    direnc2: 310.833,
    direnc3: 314.667,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "TRALT",
    fark: 4.08,
    son: 48.3,
    pivot: 46.407,
    destek1: 45.193,
    destek2: 43.287,
    destek3: 42.073,
    direnc1: 48.313,
    direnc2: 49.527,
    direnc3: 51.433,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "TTKOM",
    fark: 0.53,
    son: 63.65,
    pivot: 63.317,
    destek1: 62.133,
    destek2: 61.367,
    destek3: 60.183,
    direnc1: 64.083,
    direnc2: 65.267,
    direnc3: 66.033,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "TUPRS",
    fark: -4.07,
    son: 232.2,
    pivot: 242.04999,
    destek1: 231.3499,
    destek2: 224.7999,
    destek3: 214.09999,
    direnc1: 248.5999,
    direnc2: 259.2999,
    direnc3: 265.8499,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "VAKBN",
    fark: -1.11,
    son: 32.7,
    pivot: 33.067,
    destek1: 31.833,
    destek2: 31.207,
    destek3: 29.973,
    direnc1: 33.693,
    direnc2: 34.927,
    direnc3: 35.553,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "YKBNK",
    fark: 1.3,
    son: 35.2,
    pivot: 34.747,
    destek1: 33.933,
    destek2: 33.487,
    destek3: 32.673,
    direnc1: 35.193,
    direnc2: 36.007,
    direnc3: 36.453,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
];

function ReklamAlani({ variant = "yatay" }: { variant?: "yatay" | "icerik" }) {
  const alanClass =
    variant === "icerik"
      ? "min-h-[220px] sm:min-h-[250px] lg:min-h-[280px]"
      : "min-h-[100px] sm:min-h-[110px] lg:min-h-[120px]";

  return (
    <section
      aria-label="Reklam alanı"
      className={`w-full overflow-hidden rounded-2xl ${alanClass}`}
    >
      <div className={`w-full ${alanClass}`} />
    </section>
  );
}

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

        <section className="mb-8">
          <ReklamAlani variant="yatay" />
        </section>

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

        <section className="mt-8">
          <ReklamAlani variant="icerik" />
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