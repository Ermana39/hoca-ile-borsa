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
  fark: -0.8,
  son: 14779.729,
  pivot: 14898.92,
  destek1: 14656.46,
  destek2: 14532.99,
  destek3: 14290.53,
  direnc1: 15022.39,
  direnc2: 15264.85,
  direnc3: 15388.32,
  yorum: "Pivot değerinin altında seyrediyor.",
};

const pivotVerileri: PivotRow[] = [
  {
    sembol: "AEFES",
    fark: -1.22,
    son: 20.52,
    pivot: 20.773,
    destek1: 20.167,
    destek2: 19.813,
    destek3: 19.207,
    direnc1: 21.127,
    direnc2: 21.733,
    direnc3: 22.087,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "AKBNK",
    fark: -1.56,
    son: 72.75,
    pivot: 73.9,
    destek1: 71.6,
    destek2: 70.45,
    destek3: 68.15,
    direnc1: 75.05,
    direnc2: 77.35,
    direnc3: 78.5,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "ASELS",
    fark: -1.1,
    son: 419.25,
    pivot: 423.917,
    destek1: 414.583,
    destek2: 409.917,
    destek3: 400.583,
    direnc1: 428.583,
    direnc2: 437.917,
    direnc3: 442.583,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "ASTOR",
    fark: 0.45,
    son: 333.25,
    pivot: 331.75,
    destek1: 323.5,
    destek2: 313.75,
    destek3: 305.5,
    direnc1: 341.5,
    direnc2: 349.75,
    direnc3: 359.5,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "BIMAS",
    fark: -1.06,
    son: 781,
    pivot: 789.333,
    destek1: 767.167,
    destek2: 753.333,
    destek3: 731.167,
    direnc1: 803.167,
    direnc2: 825.333,
    direnc3: 839.167,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "DSTKF",
    fark: -0.8,
    son: 2423,
    pivot: 2442.5,
    destek1: 2377.5,
    destek2: 2332,
    destek3: 2267,
    direnc1: 2488,
    direnc2: 2553,
    direnc3: 2598.5,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "EKGYO",
    fark: -1.71,
    son: 20.64,
    pivot: 21,
    destek1: 20.28,
    destek2: 19.92,
    destek3: 19.2,
    direnc1: 21.36,
    direnc2: 22.08,
    direnc3: 22.44,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "ENKAI",
    fark: -0.98,
    son: 101.1,
    pivot: 102.1,
    destek1: 99.7,
    destek2: 98.3,
    destek3: 95.9,
    direnc1: 103.5,
    direnc2: 105.9,
    direnc3: 107.3,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "EREGL",
    fark: -1.02,
    son: 40.08,
    pivot: 40.493,
    destek1: 39.587,
    destek2: 39.093,
    destek3: 38.187,
    direnc1: 40.987,
    direnc2: 41.893,
    direnc3: 42.387,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "FROTO",
    fark: -1.09,
    son: 94.1,
    pivot: 95.133,
    destek1: 92.967,
    destek2: 91.833,
    destek3: 89.667,
    direnc1: 96.267,
    direnc2: 98.433,
    direnc3: 99.567,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "GARAN",
    fark: -1.19,
    son: 133.4,
    pivot: 135,
    destek1: 131.7,
    destek2: 130,
    destek3: 126.7,
    direnc1: 136.7,
    direnc2: 140,
    direnc3: 141.7,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "GUBRF",
    fark: -0.88,
    son: 599,
    pivot: 604.333,
    destek1: 593.667,
    destek2: 583.333,
    destek3: 577.667,
    direnc1: 609.667,
    direnc2: 620.333,
    direnc3: 625.667,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "ISCTR",
    fark: -1.04,
    son: 14.27,
    pivot: 14.42,
    destek1: 14.11,
    destek2: 13.95,
    destek3: 13.64,
    direnc1: 14.58,
    direnc2: 14.89,
    direnc3: 15.05,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "KCHOL",
    fark: -1.21,
    son: 203.6,
    pivot: 206.1,
    destek1: 200.7,
    destek2: 197.8,
    destek3: 192.4,
    direnc1: 209,
    direnc2: 214.4,
    direnc3: 217.3,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "KRDMD",
    fark: -0.21,
    son: 44.92,
    pivot: 45.013,
    destek1: 43.027,
    destek2: 41.313,
    destek3: 39.147,
    direnc1: 46.907,
    direnc2: 48.893,
    direnc3: 50.787,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "MGROS",
    fark: -1.31,
    son: 678.5,
    pivot: 687.5,
    destek1: 669.5,
    destek2: 660.5,
    destek3: 642.5,
    direnc1: 696.5,
    direnc2: 714.5,
    direnc3: 723.5,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "PETKM",
    fark: 0.03,
    son: 27.14,
    pivot: 27.133,
    destek1: 26.207,
    destek2: 25.273,
    destek3: 24.347,
    direnc1: 28.067,
    direnc2: 28.993,
    direnc3: 29.927,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "PGSUS",
    fark: -0.88,
    son: 179.9,
    pivot: 181.5,
    destek1: 178.3,
    destek2: 176.7,
    destek3: 173.5,
    direnc1: 183.1,
    direnc2: 186.3,
    direnc3: 187.9,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "SAHOL",
    fark: -1.36,
    son: 95.2,
    pivot: 96.517,
    destek1: 93.883,
    destek2: 92.567,
    destek3: 89.933,
    direnc1: 97.833,
    direnc2: 100.467,
    direnc3: 101.783,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "SASA",
    fark: -4.07,
    son: 3.23,
    pivot: 3.367,
    destek1: 3.093,
    destek2: 2.957,
    destek3: 2.683,
    direnc1: 3.503,
    direnc2: 3.777,
    direnc3: 3.913,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "SISE",
    fark: -1.45,
    son: 51.15,
    pivot: 51.9,
    destek1: 50.3,
    destek2: 49.45,
    destek3: 47.85,
    direnc1: 52.75,
    direnc2: 54.35,
    direnc3: 55.2,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "TAVHL",
    fark: -1.16,
    son: 269.25,
    pivot: 272.417,
    destek1: 266.083,
    destek2: 262.917,
    destek3: 256.583,
    direnc1: 275.583,
    direnc2: 281.917,
    direnc3: 285.083,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "TCELL",
    fark: -1.71,
    son: 115,
    pivot: 117,
    destek1: 113,
    destek2: 111,
    destek3: 107,
    direnc1: 119,
    direnc2: 123,
    direnc3: 125,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "THYAO",
    fark: -0.41,
    son: 305.75,
    pivot: 307,
    destek1: 304,
    destek2: 302.25,
    destek3: 299.25,
    direnc1: 308.75,
    direnc2: 311.75,
    direnc3: 313.5,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "TOASO",
    fark: -0.8,
    son: 310.75,
    pivot: 313.25,
    destek1: 307.5,
    destek2: 304.25,
    destek3: 298.5,
    direnc1: 316.5,
    direnc2: 322.25,
    direnc3: 325.5,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "TRALT",
    fark: -0.57,
    son: 46.32,
    pivot: 46.587,
    destek1: 45.813,
    destek2: 45.307,
    destek3: 44.533,
    direnc1: 47.093,
    direnc2: 47.867,
    direnc3: 48.373,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "TTKOM",
    fark: -1.12,
    son: 64.55,
    pivot: 65.283,
    destek1: 63.817,
    destek2: 63.083,
    destek3: 61.617,
    direnc1: 66.017,
    direnc2: 67.483,
    direnc3: 68.217,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "TUPRS",
    fark: -0.91,
    son: 255,
    pivot: 257.333,
    destek1: 252.167,
    destek2: 249.333,
    destek3: 244.167,
    direnc1: 260.167,
    direnc2: 265.333,
    direnc3: 268.167,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "VAKBN",
    fark: -0.17,
    son: 32,
    pivot: 32.053,
    destek1: 31.647,
    destek2: 31.293,
    destek3: 30.887,
    direnc1: 32.407,
    direnc2: 32.813,
    direnc3: 33.167,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "YKBNK",
    fark: -1.76,
    son: 37.88,
    pivot: 38.56,
    destek1: 37.2,
    destek2: 36.52,
    destek3: 35.16,
    direnc1: 39.24,
    direnc2: 40.6,
    direnc3: 41.28,
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
        <div className="mb-8 text-sm font-semibold text-zinc-700">
          Güncelleme Tarihi: {guncellemeTarihi}
        </div>

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