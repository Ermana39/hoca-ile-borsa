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
  fark: -0.18,
  son: 14644.113064,
  pivot: 14670.52,
  destek1: 14578.53,
  destek2: 14512.37,
  destek3: 14420.38,
  direnc1: 14736.68,
  direnc2: 14828.67,
  direnc3: 14894.83,
  yorum: "Pivot değerinin altında seyrediyor.",
};

const pivotVerileri: PivotRow[] = [
  {
    sembol: "AEFES",
    fark: -1.0,
    son: 20.42,
    pivot: 20.627,
    destek1: 20.213,
    destek2: 20.007,
    destek3: 19.593,
    direnc1: 20.833,
    direnc2: 21.247,
    direnc3: 21.453,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "AKBNK",
    fark: -0.02,
    son: 72.35,
    pivot: 72.367,
    destek1: 71.283,
    destek2: 70.217,
    destek3: 69.133,
    direnc1: 73.433,
    direnc2: 74.517,
    direnc3: 75.583,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "ASELS",
    fark: -0.3,
    son: 415.5,
    pivot: 416.75,
    destek1: 412.5,
    destek2: 409.5,
    destek3: 405.25,
    direnc1: 419.75,
    direnc2: 424.0,
    direnc3: 427.0,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "ASTOR",
    fark: -0.77,
    son: 335.0,
    pivot: 337.583,
    destek1: 327.667,
    destek2: 320.333,
    destek3: 310.417,
    direnc1: 344.917,
    direnc2: 354.833,
    direnc3: 362.167,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "BIMAS",
    fark: -0.5,
    son: 414.0,
    pivot: 416.083,
    destek1: 407.167,
    destek2: 400.333,
    destek3: 391.417,
    direnc1: 422.917,
    direnc2: 431.833,
    direnc3: 438.667,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "DSTKF",
    fark: 0.0,
    son: 1963.0,
    pivot: 1963.0,
    destek1: 1963.0,
    destek2: 1963.0,
    destek3: 1963.0,
    direnc1: 1963.0,
    direnc2: 1963.0,
    direnc3: 1963.0,
    yorum: "Pivot değerine eşit.",
  },
  {
    sembol: "EKGYO",
    fark: -0.13,
    son: 20.36,
    pivot: 20.387,
    destek1: 20.133,
    destek2: 19.907,
    destek3: 19.653,
    direnc1: 20.613,
    direnc2: 20.867,
    direnc3: 21.093,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "ENKAI",
    fark: 0.19,
    son: 103.7,
    pivot: 103.5,
    destek1: 102.3,
    destek2: 100.9,
    destek3: 99.7,
    direnc1: 104.9,
    direnc2: 106.1,
    direnc3: 107.5,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "EREGL",
    fark: -0.77,
    son: 39.74,
    pivot: 40.047,
    destek1: 38.993,
    destek2: 38.247,
    destek3: 37.193,
    direnc1: 40.793,
    direnc2: 41.847,
    direnc3: 42.593,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "FROTO",
    fark: -0.28,
    son: 93.45,
    pivot: 93.717,
    destek1: 92.533,
    destek2: 91.617,
    destek3: 90.433,
    direnc1: 94.633,
    direnc2: 95.817,
    direnc3: 96.733,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "GARAN",
    fark: 0.55,
    son: 133.7,
    pivot: 132.967,
    destek1: 131.733,
    destek2: 129.767,
    destek3: 128.533,
    direnc1: 134.933,
    direnc2: 136.167,
    direnc3: 138.133,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "GUBRF",
    fark: 0.22,
    son: 608.0,
    pivot: 606.667,
    destek1: 596.333,
    destek2: 584.667,
    destek3: 574.333,
    direnc1: 618.333,
    direnc2: 628.667,
    direnc3: 640.333,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "ISCTR",
    fark: 0.14,
    son: 14.22,
    pivot: 14.2,
    destek1: 14.1,
    destek2: 13.98,
    destek3: 13.88,
    direnc1: 14.32,
    direnc2: 14.42,
    direnc3: 14.54,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "KCHOL",
    fark: -0.39,
    son: 204.5,
    pivot: 205.3,
    destek1: 202.9,
    destek2: 201.3,
    destek3: 198.9,
    direnc1: 206.9,
    direnc2: 209.3,
    direnc3: 210.9,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "KRDMD",
    fark: -0.7,
    son: 42.8,
    pivot: 43.1,
    destek1: 41.98,
    destek2: 41.16,
    destek3: 40.04,
    direnc1: 43.92,
    direnc2: 45.04,
    direnc3: 45.86,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "MGROS",
    fark: 0.77,
    son: 724.0,
    pivot: 718.5,
    destek1: 710.0,
    destek2: 696.0,
    destek3: 687.5,
    direnc1: 732.5,
    direnc2: 741.0,
    direnc3: 755.0,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "PETKM",
    fark: -0.28,
    son: 26.2,
    pivot: 26.273,
    destek1: 25.747,
    destek2: 25.293,
    destek3: 24.767,
    direnc1: 26.727,
    direnc2: 27.253,
    direnc3: 27.707,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "PGSUS",
    fark: -0.26,
    son: 178.4,
    pivot: 178.867,
    destek1: 177.433,
    destek2: 176.467,
    destek3: 175.033,
    direnc1: 179.833,
    direnc2: 181.267,
    direnc3: 182.233,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "SAHOL",
    fark: -0.36,
    son: 95.85,
    pivot: 96.2,
    destek1: 94.95,
    destek2: 94.05,
    destek3: 92.8,
    direnc1: 97.1,
    direnc2: 98.35,
    direnc3: 99.25,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "SASA",
    fark: 1.45,
    son: 3.01,
    pivot: 2.967,
    destek1: 2.913,
    destek2: 2.817,
    destek3: 2.763,
    direnc1: 3.063,
    direnc2: 3.117,
    direnc3: 3.213,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "SISE",
    fark: -1.51,
    son: 49.02,
    pivot: 49.77,
    destek1: 48.19,
    destek2: 47.36,
    destek3: 45.78,
    direnc1: 50.6,
    direnc2: 52.18,
    direnc3: 53.01,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "TAVHL",
    fark: -0.06,
    son: 267.5,
    pivot: 267.667,
    destek1: 264.583,
    destek2: 261.667,
    destek3: 258.583,
    direnc1: 270.583,
    direnc2: 273.667,
    direnc3: 276.583,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "TCELL",
    fark: -0.12,
    son: 114.5,
    pivot: 114.633,
    destek1: 113.767,
    destek2: 113.033,
    destek3: 112.167,
    direnc1: 115.367,
    direnc2: 116.233,
    direnc3: 116.967,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "THYAO",
    fark: -0.24,
    son: 305.75,
    pivot: 306.5,
    destek1: 304.5,
    destek2: 303.25,
    destek3: 301.25,
    direnc1: 307.75,
    direnc2: 309.75,
    direnc3: 311.0,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "TOASO",
    fark: 0.51,
    son: 310.5,
    pivot: 308.917,
    destek1: 303.833,
    destek2: 297.167,
    destek3: 292.083,
    direnc1: 315.583,
    direnc2: 320.667,
    direnc3: 327.333,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "TRALT",
    fark: -0.47,
    son: 46.72,
    pivot: 46.94,
    destek1: 46.14,
    destek2: 45.56,
    destek3: 44.76,
    direnc1: 47.52,
    direnc2: 48.32,
    direnc3: 48.9,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "TTKOM",
    fark: -0.7,
    son: 63.65,
    pivot: 64.1,
    destek1: 62.95,
    destek2: 62.25,
    destek3: 61.1,
    direnc1: 64.8,
    direnc2: 65.95,
    direnc3: 66.65,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "TUPRS",
    fark: 0.1,
    son: 253.5,
    pivot: 253.25,
    destek1: 251.0,
    destek2: 248.5,
    destek3: 246.25,
    direnc1: 255.75,
    direnc2: 258.0,
    direnc3: 260.5,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "VAKBN",
    fark: -0.39,
    son: 32.06,
    pivot: 32.187,
    destek1: 31.733,
    destek2: 31.407,
    destek3: 30.953,
    direnc1: 32.513,
    direnc2: 32.967,
    direnc3: 33.293,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "YKBNK",
    fark: 0.09,
    son: 37.82,
    pivot: 37.787,
    destek1: 37.313,
    destek2: 36.807,
    destek3: 36.333,
    direnc1: 38.293,
    direnc2: 38.767,
    direnc3: 39.273,
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