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
  fark: 2.56,
  son: 13808.2,
  pivot: 13463.8,
  destek1: 12863.96,
  destek2: 12564.05,
  destek3: 11964.21,
  direnc1: 13763.71,
  direnc2: 14363.55,
  direnc3: 14663.46,
  yorum: "İlk direnç seviyesinin üstüne çıktı.",
};

const pivotVerileri: PivotRow[] = [
  {
    sembol: "AEFES",
    fark: 1.56,
    son: 19.28,
    pivot: 18.983,
    destek1: 18.177,
    destek2: 17.773,
    destek3: 16.967,
    direnc1: 19.387,
    direnc2: 20.193,
    direnc3: 20.597,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "AKBNK",
    fark: -1.6,
    son: 63.6,
    pivot: 64.633,
    destek1: 59.767,
    destek2: 57.333,
    destek3: 52.467,
    direnc1: 67.067,
    direnc2: 71.933,
    direnc3: 74.367,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "ASELS",
    fark: 5.6,
    son: 410,
    pivot: 388.25,
    destek1: 367.25,
    destek2: 356.75,
    destek3: 335.75,
    direnc1: 398.75,
    direnc2: 419.75,
    direnc3: 430.25,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "ASTOR",
    fark: 4.7,
    son: 345,
    pivot: 329.5,
    destek1: 298,
    destek2: 282.25,
    destek3: 250.75,
    direnc1: 345.25,
    direnc2: 376.75,
    direnc3: 392.5,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "BIMAS",
    fark: 2.35,
    son: 392.75,
    pivot: 383.75,
    destek1: 367.75,
    destek2: 359,
    destek3: 343,
    direnc1: 392.5,
    direnc2: 408.5,
    direnc3: 417.25,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "DSTKF",
    fark: 7.12,
    son: 1987,
    pivot: 1855,
    destek1: 1810,
    destek2: 1760,
    destek3: 1715,
    direnc1: 1905,
    direnc2: 1950,
    direnc3: 2000,
    yorum: "İkinci direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "EKGYO",
    fark: 1.86,
    son: 19.29,
    pivot: 18.937,
    destek1: 17.883,
    destek2: 17.357,
    destek3: 16.303,
    direnc1: 19.463,
    direnc2: 20.517,
    direnc3: 21.043,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "ENKAI",
    fark: 3.56,
    son: 98.95,
    pivot: 95.55,
    destek1: 92.2,
    destek2: 89.15,
    destek3: 85.8,
    direnc1: 98.6,
    direnc2: 101.95,
    direnc3: 105,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "EREGL",
    fark: 6.54,
    son: 38.68,
    pivot: 36.307,
    destek1: 33.893,
    destek2: 32.607,
    destek3: 30.193,
    direnc1: 37.593,
    direnc2: 40.007,
    direnc3: 41.293,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "FROTO",
    fark: 3.5,
    son: 86.85,
    pivot: 83.917,
    destek1: 80.783,
    destek2: 79.217,
    destek3: 76.083,
    direnc1: 85.483,
    direnc2: 88.617,
    direnc3: 90.183,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "GARAN",
    fark: -0.92,
    son: 122.3,
    pivot: 123.433,
    destek1: 116.567,
    destek2: 113.133,
    destek3: 106.267,
    direnc1: 126.867,
    direnc2: 133.733,
    direnc3: 137.167,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "GUBRF",
    fark: 0.46,
    son: 544.5,
    pivot: 542,
    destek1: 513,
    destek2: 498.5,
    destek3: 469.5,
    direnc1: 556.5,
    direnc2: 585.5,
    direnc3: 600,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "ISCTR",
    fark: 1.23,
    son: 13.2,
    pivot: 13.04,
    destek1: 12.36,
    destek2: 12.02,
    destek3: 11.34,
    direnc1: 13.38,
    direnc2: 14.06,
    direnc3: 14.4,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "KCHOL",
    fark: 2.35,
    son: 190.2,
    pivot: 185.833,
    destek1: 175.467,
    destek2: 167.633,
    destek3: 157.267,
    direnc1: 193.667,
    direnc2: 204.033,
    direnc3: 211.867,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "KRDMD",
    fark: 6.37,
    son: 40.88,
    pivot: 38.433,
    destek1: 36.527,
    destek2: 35.573,
    destek3: 33.667,
    direnc1: 39.387,
    direnc2: 41.293,
    direnc3: 42.247,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "MGROS",
    fark: 2.85,
    son: 686.5,
    pivot: 667.5,
    destek1: 645.5,
    destek2: 632,
    destek3: 610,
    direnc1: 681,
    direnc2: 703,
    direnc3: 716.5,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "PETKM",
    fark: -0.46,
    son: 23.22,
    pivot: 23.327,
    destek1: 22.193,
    destek2: 21.627,
    destek3: 20.493,
    direnc1: 23.893,
    direnc2: 25.027,
    direnc3: 25.593,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "PGSUS",
    fark: 0.98,
    son: 168.1,
    pivot: 166.467,
    destek1: 159.333,
    destek2: 155.767,
    destek3: 148.633,
    direnc1: 170.033,
    direnc2: 177.167,
    direnc3: 180.733,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "SAHOL",
    fark: 0.06,
    son: 89.15,
    pivot: 89.1,
    destek1: 85.15,
    destek2: 83.05,
    destek3: 79.1,
    direnc1: 91.2,
    direnc2: 95.15,
    direnc3: 97.25,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "SASA",
    fark: 0.49,
    son: 2.65,
    pivot: 2.637,
    destek1: 2.423,
    destek2: 2.317,
    destek3: 2.103,
    direnc1: 2.743,
    direnc2: 2.957,
    direnc3: 3.063,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "SISE",
    fark: 3.26,
    son: 45.24,
    pivot: 43.813,
    destek1: 41.287,
    destek2: 39.673,
    destek3: 37.147,
    direnc1: 45.427,
    direnc2: 47.953,
    direnc3: 49.567,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "TAVHL",
    fark: 0.85,
    son: 252,
    pivot: 249.867,
    destek1: 239.733,
    destek2: 234.667,
    destek3: 224.533,
    direnc1: 254.933,
    direnc2: 265.067,
    direnc3: 270.133,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "TCELL",
    fark: 0.85,
    son: 106.5,
    pivot: 105.6,
    destek1: 103.1,
    destek2: 100.2,
    destek3: 97.7,
    direnc1: 108.5,
    direnc2: 111,
    direnc3: 113.9,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "THYAO",
    fark: 2.49,
    son: 288,
    pivot: 281,
    destek1: 266.25,
    destek2: 258.5,
    destek3: 243.75,
    direnc1: 288.75,
    direnc2: 303.5,
    direnc3: 311.25,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "TOASO",
    fark: 6.89,
    son: 304,
    pivot: 284.417,
    destek1: 273.833,
    destek2: 267.417,
    destek3: 256.833,
    direnc1: 290.833,
    direnc2: 301.417,
    direnc3: 307.833,
    yorum: "İkinci direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "TRALT",
    fark: 3.25,
    son: 43.56,
    pivot: 42.187,
    destek1: 39.413,
    destek2: 38.027,
    destek3: 35.253,
    direnc1: 43.573,
    direnc2: 46.347,
    direnc3: 47.733,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "TTKOM",
    fark: 0.56,
    son: 59.45,
    pivot: 59.117,
    destek1: 55.783,
    destek2: 54.117,
    destek3: 50.783,
    direnc1: 60.783,
    direnc2: 64.117,
    direnc3: 65.783,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "TUPRS",
    fark: -0.8,
    son: 243.1,
    pivot: 245.067,
    destek1: 236.633,
    destek2: 231.567,
    destek3: 223.133,
    direnc1: 250.133,
    direnc2: 258.567,
    direnc3: 263.633,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "VAKBN",
    fark: 0.74,
    son: 30,
    pivot: 29.78,
    destek1: 28.84,
    destek2: 27.94,
    destek3: 27,
    direnc1: 30.68,
    direnc2: 31.62,
    direnc3: 32.52,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "YKBNK",
    fark: -1.44,
    son: 32.86,
    pivot: 33.34,
    destek1: 30.9,
    destek2: 29.68,
    destek3: 27.24,
    direnc1: 34.56,
    direnc2: 37,
    direnc3: 38.22,
    yorum: "Pivot değerinin altında seyrediyor.",
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
                  <th className="border border-sky-200 px-3 py-2 text-left">Sembol</th>
                  <th className="border border-sky-200 px-3 py-2 text-left">
                    Pivota Göre Fark %
                  </th>
                  <th className="border border-sky-200 px-3 py-2 text-left">Son</th>
                  <th className="border border-sky-200 px-3 py-2 text-left">Pivot</th>
                  <th className="border border-sky-200 px-3 py-2 text-left">Destek 1</th>
                  <th className="border border-sky-200 px-3 py-2 text-left">Destek 2</th>
                  <th className="border border-sky-200 px-3 py-2 text-left">Destek 3</th>
                  <th className="border border-sky-200 px-3 py-2 text-left">Direnç 1</th>
                  <th className="border border-sky-200 px-3 py-2 text-left">Direnç 2</th>
                  <th className="border border-sky-200 px-3 py-2 text-left">Direnç 3</th>
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
                  <th className="border border-sky-200 px-3 py-2 text-left">Sembol</th>
                  <th className="border border-sky-200 px-3 py-2 text-left">
                    Pivota Göre Fark %
                  </th>
                  <th className="border border-sky-200 px-3 py-2 text-left">Son</th>
                  <th className="border border-sky-200 px-3 py-2 text-left">Pivot</th>
                  <th className="border border-sky-200 px-3 py-2 text-left">Destek 1</th>
                  <th className="border border-sky-200 px-3 py-2 text-left">Destek 2</th>
                  <th className="border border-sky-200 px-3 py-2 text-left">Destek 3</th>
                  <th className="border border-sky-200 px-3 py-2 text-left">Direnç 1</th>
                  <th className="border border-sky-200 px-3 py-2 text-left">Direnç 2</th>
                  <th className="border border-sky-200 px-3 py-2 text-left">Direnç 3</th>
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