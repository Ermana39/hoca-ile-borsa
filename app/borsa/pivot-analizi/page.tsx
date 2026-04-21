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

const guncellemeTarihi = "21.04.2026";

const xu100Pivot: PivotRow = {
  sembol: "XU100",
  fark: -0.56,
  son: 14374.698,
  pivot: 14455.65,
  destek1: 14295.15,
  destek2: 14214.91,
  destek3: 14054.41,
  direnc1: 14535.89,
  direnc2: 14696.39,
  direnc3: 14776.63,
  yorum: "Pivot değerinin altında seyrediyor.",
};

const pivotVerileri: PivotRow[] = [
  {
    sembol: "AEFES",
    fark: 0.17,
    son: 19.4,
    pivot: 19.367,
    destek1: 19.193,
    destek2: 18.987,
    destek3: 18.813,
    direnc1: 19.573,
    direnc2: 19.747,
    direnc3: 19.953,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "AKBNK",
    fark: -0.78,
    son: 80.75,
    pivot: 81.383,
    destek1: 80.117,
    destek2: 79.483,
    destek3: 78.217,
    direnc1: 82.017,
    direnc2: 83.283,
    direnc3: 83.917,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "ASELS",
    fark: -1.31,
    son: 396.5,
    pivot: 401.75,
    destek1: 391.25,
    destek2: 386.0,
    destek3: 375.5,
    direnc1: 407.0,
    direnc2: 417.5,
    direnc3: 422.75,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "ASTOR",
    fark: 0.48,
    son: 214.5,
    pivot: 213.467,
    destek1: 207.633,
    destek2: 200.767,
    destek3: 194.933,
    direnc1: 220.333,
    direnc2: 226.167,
    direnc3: 233.033,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "BIMAS",
    fark: -0.55,
    son: 752.5,
    pivot: 756.667,
    destek1: 748.333,
    destek2: 744.167,
    destek3: 735.833,
    direnc1: 760.833,
    direnc2: 769.167,
    direnc3: 773.333,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "DSTKF",
    fark: 1.72,
    son: 2423.0,
    pivot: 2382.0,
    destek1: 2341.0,
    destek2: 2259.0,
    destek3: 2218.0,
    direnc1: 2464.0,
    direnc2: 2505.0,
    direnc3: 2587.0,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "EKGYO",
    fark: -0.99,
    son: 21.32,
    pivot: 21.533,
    destek1: 21.047,
    destek2: 20.773,
    destek3: 20.287,
    direnc1: 21.807,
    direnc2: 22.293,
    direnc3: 22.567,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "ENKAI",
    fark: -0.53,
    son: 105.5,
    pivot: 106.067,
    destek1: 104.033,
    destek2: 102.567,
    destek3: 100.533,
    direnc1: 107.533,
    direnc2: 109.567,
    direnc3: 111.033,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "EREGL",
    fark: -0.51,
    son: 33.72,
    pivot: 33.893,
    destek1: 33.307,
    destek2: 32.893,
    destek3: 32.307,
    direnc1: 34.307,
    direnc2: 34.893,
    direnc3: 35.307,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "FROTO",
    fark: -1.49,
    son: 103.5,
    pivot: 105.067,
    destek1: 101.833,
    destek2: 100.167,
    destek3: 96.933,
    direnc1: 106.733,
    direnc2: 109.967,
    direnc3: 111.633,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "GARAN",
    fark: -0.93,
    son: 141.8,
    pivot: 143.133,
    destek1: 140.467,
    destek2: 139.133,
    destek3: 136.467,
    direnc1: 144.467,
    direnc2: 147.133,
    direnc3: 148.467,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "GUBRF",
    fark: -1.03,
    son: 512.0,
    pivot: 517.333,
    destek1: 503.667,
    destek2: 495.333,
    destek3: 481.667,
    direnc1: 525.667,
    direnc2: 539.333,
    direnc3: 547.667,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "ISCTR",
    fark: -0.76,
    son: 14.8,
    pivot: 14.913,
    destek1: 14.687,
    destek2: 14.573,
    destek3: 14.347,
    direnc1: 15.027,
    direnc2: 15.253,
    direnc3: 15.367,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "KCHOL",
    fark: -0.53,
    son: 206.0,
    pivot: 207.1,
    destek1: 204.4,
    destek2: 202.8,
    destek3: 200.1,
    direnc1: 208.7,
    direnc2: 211.4,
    direnc3: 213.0,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "KRDMD",
    fark: -1.24,
    son: 36.1,
    pivot: 36.553,
    destek1: 35.587,
    destek2: 35.073,
    destek3: 34.107,
    direnc1: 37.067,
    direnc2: 38.033,
    direnc3: 38.547,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "MGROS",
    fark: -0.15,
    son: 663.0,
    pivot: 664.0,
    destek1: 658.5,
    destek2: 654.0,
    destek3: 648.5,
    direnc1: 668.5,
    direnc2: 674.0,
    direnc3: 678.5,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "PETKM",
    fark: -0.35,
    son: 22.92,
    pivot: 23.0,
    destek1: 22.4,
    destek2: 21.88,
    destek3: 21.28,
    direnc1: 23.52,
    direnc2: 24.12,
    direnc3: 24.64,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "PGSUS",
    fark: -0.83,
    son: 190.2,
    pivot: 191.8,
    destek1: 188.5,
    destek2: 186.8,
    destek3: 183.5,
    direnc1: 193.5,
    direnc2: 196.8,
    direnc3: 198.5,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "SAHOL",
    fark: -0.75,
    son: 101.0,
    pivot: 101.767,
    destek1: 99.733,
    destek2: 98.467,
    destek3: 96.433,
    direnc1: 103.033,
    direnc2: 105.067,
    direnc3: 106.333,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "SASA",
    fark: 0.0,
    son: 3.03,
    pivot: 3.03,
    destek1: 2.94,
    destek2: 2.85,
    destek3: 2.76,
    direnc1: 3.12,
    direnc2: 3.21,
    direnc3: 3.3,
    yorum: "Pivot değerine eşit.",
  },
  {
    sembol: "SISE",
    fark: -0.74,
    son: 47.22,
    pivot: 47.573,
    destek1: 46.807,
    destek2: 46.393,
    destek3: 45.627,
    direnc1: 47.987,
    direnc2: 48.753,
    direnc3: 49.167,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "TAVHL",
    fark: 0.03,
    son: 313.0,
    pivot: 312.917,
    destek1: 309.833,
    destek2: 306.667,
    destek3: 303.583,
    direnc1: 316.083,
    direnc2: 319.167,
    direnc3: 322.333,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "TCELL",
    fark: -0.95,
    son: 115.3,
    pivot: 116.4,
    destek1: 113.9,
    destek2: 112.5,
    destek3: 110.0,
    direnc1: 117.8,
    direnc2: 120.3,
    direnc3: 121.7,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "THYAO",
    fark: -0.76,
    son: 327.0,
    pivot: 329.5,
    destek1: 324.5,
    destek2: 322.0,
    destek3: 317.0,
    direnc1: 332.0,
    direnc2: 337.0,
    direnc3: 339.5,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "TOASO",
    fark: -0.32,
    son: 289.0,
    pivot: 289.917,
    destek1: 284.833,
    destek2: 280.667,
    destek3: 275.583,
    direnc1: 294.083,
    direnc2: 299.167,
    direnc3: 303.333,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "TRALT",
    fark: -0.62,
    son: 48.24,
    pivot: 48.54,
    destek1: 47.18,
    destek2: 46.12,
    destek3: 44.76,
    direnc1: 49.6,
    direnc2: 50.96,
    direnc3: 52.02,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "TTKOM",
    fark: -0.61,
    son: 65.1,
    pivot: 65.5,
    destek1: 64.2,
    destek2: 63.3,
    destek3: 62.0,
    direnc1: 66.4,
    direnc2: 67.7,
    direnc3: 68.6,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "TUPRS",
    fark: -0.65,
    son: 253.5,
    pivot: 255.167,
    destek1: 251.583,
    destek2: 249.667,
    destek3: 246.083,
    direnc1: 257.083,
    direnc2: 260.667,
    direnc3: 262.583,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "VAKBN",
    fark: -1.25,
    son: 33.72,
    pivot: 34.147,
    destek1: 33.273,
    destek2: 32.827,
    destek3: 31.953,
    direnc1: 34.593,
    direnc2: 35.467,
    direnc3: 35.913,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "YKBNK",
    fark: -0.4,
    son: 38.54,
    pivot: 38.693,
    destek1: 38.167,
    destek2: 37.793,
    destek3: 37.267,
    direnc1: 39.067,
    direnc2: 39.593,
    direnc3: 39.967,
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