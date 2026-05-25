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
  fark: 2.54,
  son: 13890.91,
  pivot: 13546.5,
  destek1: 13227.96,
  destek2: 12647.72,
  destek3: 12329.18,
  direnc1: 14126.74,
  direnc2: 14445.28,
  direnc3: 15025.52,
  yorum: "Pivot değerinin üstünde seyrediyor.",
};

const pivotVerileri: PivotRow[] = [
  {
    sembol: "AEFES",
    fark: 3.22,
    son: 19.54,
    pivot: 18.93,
    destek1: 18.33,
    destek2: 17.38,
    destek3: 16.78,
    direnc1: 19.88,
    direnc2: 20.48,
    direnc3: 21.43,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "AKBNK",
    fark: 3.97,
    son: 65.4,
    pivot: 62.9,
    destek1: 61.35,
    destek2: 59.1,
    destek3: 57.55,
    direnc1: 65.15,
    direnc2: 66.7,
    direnc3: 68.95,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "ASELS",
    fark: 1.07,
    son: 401.75,
    pivot: 397.5,
    destek1: 383,
    destek2: 356,
    destek3: 341.5,
    direnc1: 424.5,
    direnc2: 439,
    direnc3: 466,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "ASTOR",
    fark: 2.19,
    son: 341.75,
    pivot: 334.4166,
    destek1: 323.8333,
    destek2: 302.6666,
    destek3: 292.08333,
    direnc1: 355.5833,
    direnc2: 366.1666,
    direnc3: 387.3333,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "BIMAS",
    fark: -2.07,
    son: 378.75,
    pivot: 386.75,
    destek1: 378,
    destek2: 363.25,
    destek3: 354.5,
    direnc1: 401.5,
    direnc2: 410.25,
    direnc3: 425,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "DSTKF",
    fark: 9.5,
    son: 2075,
    pivot: 1895,
    destek1: 1796,
    destek2: 1605,
    destek3: 1506,
    direnc1: 2086,
    direnc2: 2185,
    direnc3: 2376,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "EKGYO",
    fark: 3.31,
    son: 19.58,
    pivot: 18.953,
    destek1: 18.367,
    destek2: 17.443,
    destek3: 16.857,
    direnc1: 19.877,
    direnc2: 20.463,
    direnc3: 21.387,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "ENKAI",
    fark: 2.15,
    son: 99,
    pivot: 96.917,
    destek1: 94.533,
    destek2: 90.117,
    destek3: 87.733,
    direnc1: 101.333,
    direnc2: 103.717,
    direnc3: 108.133,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "EREGL",
    fark: 4.96,
    son: 39.48,
    pivot: 37.613,
    destek1: 36.547,
    destek2: 34.413,
    destek3: 33.347,
    direnc1: 39.747,
    direnc2: 40.813,
    direnc3: 42.947,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "FROTO",
    fark: 2.6,
    son: 87.6,
    pivot: 85.383,
    destek1: 83.1166,
    destek2: 79.3833,
    destek3: 77.1166,
    direnc1: 89.1166,
    direnc2: 91.3833,
    direnc3: 95.1166,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "GARAN",
    fark: 3.56,
    son: 125.2,
    pivot: 120.9,
    destek1: 118.3,
    destek2: 114.3,
    destek3: 111.7,
    direnc1: 124.9,
    direnc2: 127.5,
    direnc3: 131.5,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "GUBRF",
    fark: 6.62,
    son: 571.5,
    pivot: 536,
    destek1: 521,
    destek2: 497.5,
    destek3: 482.5,
    direnc1: 559.5,
    direnc2: 574.5,
    direnc3: 598,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "ISCTR",
    fark: 2.55,
    son: 13.27,
    pivot: 12.94,
    destek1: 12.51,
    destek2: 11.82,
    destek3: 11.39,
    direnc1: 13.63,
    direnc2: 14.06,
    direnc3: 14.75,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "KCHOL",
    fark: 2.03,
    son: 190.9,
    pivot: 187.1,
    destek1: 182.1,
    destek2: 174,
    destek3: 169,
    direnc1: 195.2,
    direnc2: 200.2,
    direnc3: 208.3,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "KRDMD",
    fark: 1.33,
    son: 40.02,
    pivot: 39.493,
    destek1: 37.887,
    destek2: 34.893,
    destek3: 33.287,
    direnc1: 42.487,
    direnc2: 44.093,
    direnc3: 47.087,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "MGROS",
    fark: 0.49,
    son: 679.5,
    pivot: 676.167,
    destek1: 657.833,
    destek2: 629.167,
    destek3: 610.833,
    direnc1: 704.833,
    direnc2: 723.167,
    direnc3: 751.833,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "PETKM",
    fark: -1.84,
    son: 22.38,
    pivot: 22.8,
    destek1: 22.2,
    destek2: 21.18,
    destek3: 20.58,
    direnc1: 23.82,
    direnc2: 24.42,
    direnc3: 25.44,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "PGSUS",
    fark: 3.83,
    son: 172.7,
    pivot: 166.3333,
    destek1: 163.2666,
    destek2: 158.4333,
    destek3: 155.3666,
    direnc1: 171.1666,
    direnc2: 174.2333,
    direnc3: 179.06666,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "SAHOL",
    fark: 2.38,
    son: 90.3,
    pivot: 88.2,
    destek1: 86.05,
    destek2: 82.95,
    destek3: 80.8,
    direnc1: 91.3,
    direnc2: 93.45,
    direnc3: 96.55,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "SASA",
    fark: 4.37,
    son: 2.7,
    pivot: 2.587,
    destek1: 2.503,
    destek2: 2.357,
    destek3: 2.273,
    direnc1: 2.733,
    direnc2: 2.817,
    direnc3: 2.963,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "SISE",
    fark: 5.46,
    son: 46.72,
    pivot: 44.3,
    destek1: 43.08,
    destek2: 40.92,
    destek3: 39.7,
    direnc1: 46.46,
    direnc2: 47.68,
    direnc3: 49.84,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "TAVHL",
    fark: 3.54,
    son: 259,
    pivot: 250.15,
    destek1: 242.05,
    destek2: 232.1,
    destek3: 224,
    direnc1: 260.1,
    direnc2: 268.2,
    direnc3: 278.15,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "TCELL",
    fark: 1.02,
    son: 106.1,
    pivot: 105.033,
    destek1: 102.267,
    destek2: 98.033,
    destek3: 95.267,
    direnc1: 109.267,
    direnc2: 112.033,
    direnc3: 116.267,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "THYAO",
    fark: 5.03,
    son: 297.5,
    pivot: 283.25,
    destek1: 276.25,
    destek2: 264.5,
    destek3: 257.5,
    direnc1: 295,
    direnc2: 302,
    direnc3: 313.75,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "TOASO",
    fark: 2.88,
    son: 303.25,
    pivot: 294.75,
    destek1: 284.25,
    destek2: 264.5,
    destek3: 254,
    direnc1: 314.5,
    direnc2: 325,
    direnc3: 344.75,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "TRALT",
    fark: 6.64,
    son: 45.58,
    pivot: 42.74,
    destek1: 41.07999,
    destek2: 38.5999,
    destek3: 36.9399,
    direnc1: 45.22,
    direnc2: 46.88,
    direnc3: 49.36,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "TTKOM",
    fark: 3.1,
    son: 60.4,
    pivot: 58.583,
    destek1: 57.117,
    destek2: 54.783,
    destek3: 53.317,
    direnc1: 60.917,
    direnc2: 62.383,
    direnc3: 64.717,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "TUPRS",
    fark: -3.54,
    son: 234.1,
    pivot: 242.7,
    destek1: 239.4,
    destek2: 235.7,
    destek3: 232.4,
    direnc1: 246.4,
    direnc2: 249.7,
    direnc3: 253.4,
    yorum: "İkinci destek seviyesinin altına indi.",
  },
  {
    sembol: "VAKBN",
    fark: 5.97,
    son: 31.48,
    pivot: 29.707,
    destek1: 28.973,
    destek2: 27.947,
    destek3: 27.213,
    direnc1: 30.733,
    direnc2: 31.467,
    direnc3: 32.493,
    yorum: "İkinci direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "YKBNK",
    fark: 3.52,
    son: 33.34,
    pivot: 32.207,
    destek1: 31.073,
    destek2: 29.287,
    destek3: 28.153,
    direnc1: 33.993,
    direnc2: 35.127,
    direnc3: 36.913,
    yorum: "Pivot değerinin üstünde seyrediyor.",
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