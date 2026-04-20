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

const guncellemeTarihi = "20.04.2026";

const xu100Pivot: PivotRow = {
  sembol: "XU100",
  fark: 0.19,
  son: 14484.889,
  pivot: 14457.42,
  destek1: 14313.72,
  destek2: 14039.51,
  destek3: 13895.81,
  direnc1: 14731.63,
  direnc2: 14875.33,
  direnc3: 15149.54,
  yorum: "Pivot değerinin üstünde seyrediyor.",
};

const pivotVerileri: PivotRow[] = [
  {
    sembol: "AEFES",
    fark: 0.58,
    son: 19.15,
    pivot: 19.04,
    destek1: 18.66,
    destek2: 17.9,
    destek3: 17.52,
    direnc1: 19.8,
    direnc2: 20.18,
    direnc3: 20.94,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "AKBNK",
    fark: 0.31,
    son: 81.85,
    pivot: 81.6,
    destek1: 79.35,
    destek2: 75.15,
    destek3: 72.9,
    direnc1: 85.8,
    direnc2: 88.05,
    direnc3: 92.25,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "ASELS",
    fark: -1.17,
    son: 408.0,
    pivot: 412.833,
    destek1: 408.167,
    destek2: 402.333,
    destek3: 397.667,
    direnc1: 418.667,
    direnc2: 423.333,
    direnc3: 429.167,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "ASTOR",
    fark: 1.65,
    son: 205.7,
    pivot: 202.367,
    destek1: 197.933,
    destek2: 190.167,
    destek3: 185.733,
    direnc1: 210.133,
    direnc2: 214.567,
    direnc3: 222.333,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "BIMAS",
    fark: -0.44,
    son: 756.0,
    pivot: 759.333,
    destek1: 748.167,
    destek2: 731.333,
    destek3: 720.167,
    direnc1: 776.167,
    direnc2: 787.333,
    direnc3: 804.167,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "DSTKF",
    fark: 2.33,
    son: 2300.0,
    pivot: 2247.667,
    destek1: 2215.333,
    destek2: 2154.667,
    destek3: 2122.333,
    direnc1: 2308.333,
    direnc2: 2340.667,
    direnc3: 2401.333,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "EKGYO",
    fark: -0.06,
    son: 21.82,
    pivot: 21.833,
    destek1: 21.327,
    destek2: 20.313,
    destek3: 19.807,
    direnc1: 22.847,
    direnc2: 23.353,
    direnc3: 24.367,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "ENKAI",
    fark: 0.78,
    son: 107.5,
    pivot: 106.667,
    destek1: 104.733,
    destek2: 101.467,
    destek3: 99.533,
    direnc1: 109.933,
    direnc2: 111.867,
    direnc3: 115.133,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "EREGL",
    fark: 4.74,
    son: 33.3,
    pivot: 31.7933,
    destek1: 31.1666,
    destek2: 30.2933,
    destek3: 29.6666,
    direnc1: 32.6666,
    direnc2: 33.2933,
    direnc3: 34.1666,
    yorum: "İkinci direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "FROTO",
    fark: -0.12,
    son: 107.5,
    pivot: 107.633,
    destek1: 105.967,
    destek2: 102.633,
    destek3: 100.967,
    direnc1: 110.967,
    direnc2: 112.633,
    direnc3: 115.967,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "GARAN",
    fark: 0.49,
    son: 144.0,
    pivot: 143.3,
    destek1: 139.5,
    destek2: 132.6,
    destek3: 128.8,
    direnc1: 150.2,
    direnc2: 154.0,
    direnc3: 160.9,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "GUBRF",
    fark: -1.62,
    son: 526.0,
    pivot: 534.667,
    destek1: 526.333,
    destek2: 513.167,
    destek3: 504.833,
    direnc1: 547.833,
    direnc2: 556.167,
    direnc3: 569.333,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "ISCTR",
    fark: 0.81,
    son: 14.98,
    pivot: 14.86,
    destek1: 14.61,
    destek2: 14.11,
    destek3: 13.86,
    direnc1: 15.36,
    direnc2: 15.61,
    direnc3: 16.11,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "KCHOL",
    fark: -0.38,
    son: 208.0,
    pivot: 208.8,
    destek1: 205.6,
    destek2: 199.4,
    destek3: 196.2,
    direnc1: 215.0,
    direnc2: 218.2,
    direnc3: 224.4,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "KRDMD",
    fark: 0.24,
    son: 36.7,
    pivot: 36.613,
    destek1: 36.087,
    destek2: 35.273,
    destek3: 34.747,
    direnc1: 37.427,
    direnc2: 37.953,
    direnc3: 38.767,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "MGROS",
    fark: -0.95,
    son: 660.0,
    pivot: 666.333,
    destek1: 658.167,
    destek2: 643.333,
    destek3: 635.167,
    direnc1: 681.167,
    direnc2: 689.333,
    direnc3: 704.167,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "PETKM",
    fark: 1.57,
    son: 22.48,
    pivot: 22.133,
    destek1: 21.147,
    destek2: 20.313,
    destek3: 19.327,
    direnc1: 22.967,
    direnc2: 23.953,
    direnc3: 24.787,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "PGSUS",
    fark: 0.17,
    son: 193.5,
    pivot: 193.167,
    destek1: 191.033,
    destek2: 188.567,
    destek3: 186.433,
    direnc1: 195.633,
    direnc2: 197.767,
    direnc3: 200.233,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "SAHOL",
    fark: -0.42,
    son: 102.9,
    pivot: 103.333,
    destek1: 100.867,
    destek2: 96.633,
    destek3: 94.167,
    direnc1: 107.567,
    direnc2: 110.033,
    direnc3: 114.267,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "SASA",
    fark: -2.63,
    son: 3.08,
    pivot: 3.1633,
    destek1: 3.00666,
    destek2: 2.8733,
    destek3: 2.7166,
    direnc1: 3.2966,
    direnc2: 3.4533,
    direnc3: 3.5866,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "SISE",
    fark: 0.01,
    son: 47.88,
    pivot: 47.873,
    destek1: 47.267,
    destek2: 46.193,
    destek3: 45.587,
    direnc1: 48.947,
    direnc2: 49.553,
    direnc3: 50.627,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "TAVHL",
    fark: -1.99,
    son: 312.0,
    pivot: 318.333,
    destek1: 309.417,
    destek2: 298.833,
    destek3: 289.917,
    direnc1: 328.917,
    direnc2: 337.833,
    direnc3: 348.417,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "TCELL",
    fark: -1.31,
    son: 117.7,
    pivot: 119.267,
    destek1: 117.233,
    destek2: 113.967,
    destek3: 111.933,
    direnc1: 122.533,
    direnc2: 124.567,
    direnc3: 127.833,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "THYAO",
    fark: 0.31,
    son: 328.25,
    pivot: 327.25,
    destek1: 319.5,
    destek2: 310.0,
    destek3: 302.25,
    direnc1: 336.75,
    direnc2: 344.5,
    direnc3: 354.0,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "TOASO",
    fark: 0.86,
    son: 292.0,
    pivot: 289.5,
    destek1: 284.0,
    destek2: 273.5,
    destek3: 268.0,
    direnc1: 300.0,
    direnc2: 305.5,
    direnc3: 316.0,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "TRALT",
    fark: -0.21,
    son: 48.4,
    pivot: 48.503,
    destek1: 46.757,
    destek2: 44.113,
    destek3: 42.367,
    direnc1: 51.147,
    direnc2: 52.893,
    direnc3: 55.537,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "TTKOM",
    fark: 2.81,
    son: 66.4,
    pivot: 64.583,
    destek1: 63.567,
    destek2: 61.733,
    destek3: 60.717,
    direnc1: 66.417,
    direnc2: 67.433,
    direnc3: 69.267,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "TUPRS",
    fark: -1.07,
    son: 255.0,
    pivot: 257.75,
    destek1: 246.75,
    destek2: 240.5,
    destek3: 229.5,
    direnc1: 264.0,
    direnc2: 275.0,
    direnc3: 281.25,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "VAKBN",
    fark: 0.23,
    son: 34.66,
    pivot: 34.58,
    destek1: 33.72,
    destek2: 32.04,
    destek3: 31.18,
    direnc1: 36.26,
    direnc2: 37.12,
    direnc3: 38.8,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "YKBNK",
    fark: 0.31,
    son: 38.72,
    pivot: 38.6,
    destek1: 37.84,
    destek2: 36.38,
    destek3: 35.62,
    direnc1: 40.06,
    direnc2: 40.82,
    direnc3: 42.28,
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