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

const guncellemeTarihi = "27.04.2026";

const xu100Pivot: PivotRow = {
  sembol: "XU100",
  fark: 0.42,
  son: 15062.94,
  pivot: 15000.16,
  destek1: 14949.89,
  destek2: 14859.54,
  destek3: 14809.27,
  direnc1: 15090.51,
  direnc2: 15140.78,
  direnc3: 15231.13,
  yorum: "Pivot değerinin üstünde seyrediyor.",
};

const pivotVerileri: PivotRow[] = [
  {
    sembol: "AEFES",
    fark: 0.03,
    son: 20.46,
    pivot: 20.453,
    destek1: 20.207,
    destek2: 19.873,
    destek3: 19.627,
    direnc1: 20.787,
    direnc2: 21.033,
    direnc3: 21.367,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "AKBNK",
    fark: -0.18,
    son: 75.25,
    pivot: 75.383,
    destek1: 74.317,
    destek2: 73.433,
    destek3: 72.367,
    direnc1: 76.267,
    direnc2: 77.333,
    direnc3: 78.217,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "ASELS",
    fark: -0.19,
    son: 428.5,
    pivot: 429.333,
    destek1: 421.667,
    destek2: 415.333,
    destek3: 407.667,
    direnc1: 435.667,
    direnc2: 443.333,
    direnc3: 449.667,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "ASTOR",
    fark: 3.06,
    son: 326,
    pivot: 316.333,
    destek1: 309.666,
    destek2: 298.583,
    destek3: 291.916,
    direnc1: 327.416,
    direnc2: 334.083,
    direnc3: 345.166,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "BIMAS",
    fark: 0.74,
    son: 790,
    pivot: 784.167,
    destek1: 778.333,
    destek2: 772.667,
    destek3: 766.833,
    direnc1: 789.833,
    direnc2: 795.667,
    direnc3: 801.333,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "DSTKF",
    fark: -9.38,
    son: 2498,
    pivot: 2756.667,
    destek1: 2688.333,
    destek2: 2601.667,
    destek3: 2533.333,
    direnc1: 2843.333,
    direnc2: 2911.667,
    direnc3: 2998.333,
    yorum: "Üçüncü destek seviyesinin altına indi.",
  },
  {
    sembol: "EKGYO",
    fark: 1.7,
    son: 22,
    pivot: 21.633,
    destek1: 21.266,
    destek2: 20.833,
    destek3: 20.466,
    direnc1: 22.066,
    direnc2: 22.433,
    direnc3: 22.866,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "ENKAI",
    fark: -0.45,
    son: 111.3,
    pivot: 111.8,
    destek1: 110.1,
    destek2: 108.8,
    destek3: 107.1,
    direnc1: 113.1,
    direnc2: 114.8,
    direnc3: 116.1,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "EREGL",
    fark: 7.21,
    son: 41.26,
    pivot: 38.487,
    destek1: 37.953,
    destek2: 37.427,
    destek3: 36.893,
    direnc1: 39.013,
    direnc2: 39.547,
    direnc3: 40.073,
    yorum: "Üçüncü direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "FROTO",
    fark: -1.65,
    son: 97.5,
    pivot: 99.133,
    destek1: 98.367,
    destek2: 97.833,
    destek3: 97.067,
    direnc1: 99.667,
    direnc2: 100.433,
    direnc3: 100.967,
    yorum: "İkinci destek seviyesinin altına indi.",
  },
  {
    sembol: "GARAN",
    fark: -0.31,
    son: 137.3,
    pivot: 137.733,
    destek1: 136.467,
    destek2: 135.333,
    destek3: 134.067,
    direnc1: 138.867,
    direnc2: 140.133,
    direnc3: 141.267,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "GUBRF",
    fark: 1.39,
    son: 607,
    pivot: 598.667,
    destek1: 585.833,
    destek2: 574.167,
    destek3: 561.333,
    direnc1: 610.333,
    direnc2: 623.167,
    direnc3: 634.833,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "ISCTR",
    fark: -0.93,
    son: 14.55,
    pivot: 14.687,
    destek1: 14.453,
    destek2: 14.317,
    destek3: 14.083,
    direnc1: 14.823,
    direnc2: 15.057,
    direnc3: 15.193,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "KCHOL",
    fark: 0.98,
    son: 213,
    pivot: 210.933,
    destek1: 209.467,
    destek2: 207.433,
    destek3: 205.967,
    direnc1: 212.967,
    direnc2: 214.433,
    direnc3: 216.467,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "KRDMD",
    fark: 1.32,
    son: 40.52,
    pivot: 39.993,
    destek1: 39.367,
    destek2: 38.933,
    destek3: 38.307,
    direnc1: 40.427,
    direnc2: 41.053,
    direnc3: 41.487,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "MGROS",
    fark: -0.29,
    son: 688,
    pivot: 690,
    destek1: 685.5,
    destek2: 677,
    destek3: 672.5,
    direnc1: 698.5,
    direnc2: 703,
    direnc3: 711.5,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "PETKM",
    fark: 3.43,
    son: 24.72,
    pivot: 23.9,
    destek1: 23.32,
    destek2: 22.88,
    destek3: 22.3,
    direnc1: 24.34,
    direnc2: 24.92,
    direnc3: 25.36,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "PGSUS",
    fark: -0.18,
    son: 186.7,
    pivot: 187.033,
    destek1: 185.867,
    destek2: 184.233,
    destek3: 183.067,
    direnc1: 188.667,
    direnc2: 189.833,
    direnc3: 191.467,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "SAHOL",
    fark: -0.45,
    son: 100,
    pivot: 100.45,
    destek1: 99.1,
    destek2: 98.2,
    destek3: 96.85,
    direnc1: 101.35,
    direnc2: 102.7,
    direnc3: 103.6,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "SASA",
    fark: 7.65,
    son: 3.52,
    pivot: 3.2699,
    destek1: 3.1699,
    destek2: 3.0099,
    destek3: 2.9099,
    direnc1: 3.4299,
    direnc2: 3.5299,
    direnc3: 3.6899,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "SISE",
    fark: 4.5,
    son: 51.8,
    pivot: 49.57,
    destek1: 48.29,
    destek2: 47.46,
    destek3: 46.18,
    direnc1: 50.4,
    direnc2: 51.68,
    direnc3: 52.51,
    yorum: "İkinci direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "TAVHL",
    fark: -1.84,
    son: 284,
    pivot: 289.333,
    destek1: 285.667,
    destek2: 281.333,
    destek3: 277.667,
    direnc1: 293.667,
    direnc2: 297.333,
    direnc3: 301.667,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "TCELL",
    fark: 0.64,
    son: 120,
    pivot: 119.233,
    destek1: 117.567,
    destek2: 116.533,
    destek3: 114.867,
    direnc1: 120.267,
    direnc2: 121.933,
    direnc3: 122.967,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "THYAO",
    fark: -0.64,
    son: 311,
    pivot: 313,
    destek1: 310.75,
    destek2: 309,
    destek3: 306.75,
    direnc1: 314.75,
    direnc2: 317,
    direnc3: 318.75,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "TOASO",
    fark: 0.44,
    son: 320.25,
    pivot: 318.833,
    destek1: 313.917,
    destek2: 307.083,
    destek3: 302.167,
    direnc1: 325.667,
    direnc2: 330.583,
    direnc3: 337.417,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "TRALT",
    fark: 1.94,
    son: 43.9,
    pivot: 43.0666,
    destek1: 42.6733,
    destek2: 41.9866,
    destek3: 41.5933,
    direnc1: 43.7533,
    direnc2: 44.1466,
    direnc3: 44.8333,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "TTKOM",
    fark: -1.24,
    son: 66.1,
    pivot: 66.933,
    destek1: 64.967,
    destek2: 63.733,
    destek3: 61.767,
    direnc1: 68.167,
    direnc2: 70.133,
    direnc3: 71.367,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "TUPRS",
    fark: -1.43,
    son: 258.5,
    pivot: 262.25,
    destek1: 256.25,
    destek2: 253.25,
    destek3: 247.25,
    direnc1: 265.25,
    direnc2: 271.25,
    direnc3: 274.25,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "VAKBN",
    fark: 0.21,
    son: 32,
    pivot: 31.933,
    destek1: 31.347,
    destek2: 30.633,
    destek3: 30.047,
    direnc1: 32.647,
    direnc2: 33.233,
    direnc3: 33.947,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "YKBNK",
    fark: 2.2,
    son: 39.3,
    pivot: 38.453,
    destek1: 37.907,
    destek2: 37.153,
    destek3: 36.607,
    direnc1: 39.207,
    direnc2: 39.753,
    direnc3: 40.507,
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
        <div className="mb-8 text-sm font-semibold text-zinc-700"></div>

        <section className="mb-8">
          <ReklamAlani variant="yatay" />
        </section>

        <section className="mb-8 overflow-hidden rounded-2xl border border-sky-200 bg-sky-50 shadow-sm">
          <div className="overflow-x-auto">
            <table className="min-w-[1200px] w-full border-collapse text-sm text-zinc-900">
              <thead className="bg-sky-100 text-zinc-800">
                <tr>
                  <th className="border border-sky-200 px-3 py-2 text-left">Sembol</th>
                  <th className="border border-sky-200 px-3 py-2 text-left">Pivota Göre Fark %</th>
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
                  <th className="border border-sky-200 px-3 py-2 text-left">Pivota Göre Fark %</th>
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