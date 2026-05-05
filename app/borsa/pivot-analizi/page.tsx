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
  fark: 0.58,
  son: 14411.74,
  pivot: 14344.55,
  destek1: 14278.9,
  destek2: 14188.2,
  destek3: 14055.36,
  direnc1: 14502.44,
  direnc2: 14635.28,
  direnc3: 14725.98,
  yorum: "Pivot değerinin üstünde seyrediyor.",
};

const pivotVerileri: PivotRow[] = [
  {
    sembol: "AEFES",
    fark: 2.15,
    son: 19.34,
    pivot: 18.933,
    destek1: 18.657,
    destek2: 18.273,
    destek3: 17.997,
    direnc1: 19.317,
    direnc2: 19.593,
    direnc3: 19.977,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "AKBNK",
    fark: -1.19,
    son: 70.7,
    pivot: 71.55,
    destek1: 69.5,
    destek2: 68.35,
    destek3: 66.3,
    direnc1: 72.7,
    direnc2: 74.75,
    direnc3: 75.9,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "ASELS",
    fark: -1.16,
    son: 427.25,
    pivot: 432.25,
    destek1: 421,
    destek2: 410.25,
    destek3: 399,
    direnc1: 443,
    direnc2: 454.25,
    direnc3: 465,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "ASTOR",
    fark: 1.4,
    son: 295.75,
    pivot: 291.667,
    destek1: 279.583,
    destek2: 268.917,
    destek3: 256.833,
    direnc1: 302.333,
    direnc2: 314.417,
    direnc3: 325.083,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "BIMAS",
    fark: 1.82,
    son: 747,
    pivot: 733.667,
    destek1: 721.833,
    destek2: 713.667,
    destek3: 701.833,
    direnc1: 741.833,
    direnc2: 753.667,
    direnc3: 761.833,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "DSTKF",
    fark: 0.76,
    son: 2760,
    pivot: 2739.167,
    destek1: 2705.833,
    destek2: 2666.667,
    destek3: 2633.333,
    direnc1: 2778.333,
    direnc2: 2811.667,
    direnc3: 2850.833,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "EKGYO",
    fark: 1.21,
    son: 20.26,
    pivot: 20.017,
    destek1: 19.293,
    destek2: 18.817,
    destek3: 18.093,
    direnc1: 20.493,
    direnc2: 21.217,
    direnc3: 21.693,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "ENKAI",
    fark: 2.28,
    son: 106.1,
    pivot: 103.733,
    destek1: 101.667,
    destek2: 99.933,
    destek3: 97.867,
    direnc1: 105.467,
    direnc2: 107.533,
    direnc3: 109.267,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "EREGL",
    fark: 5.04,
    son: 37.22,
    pivot: 35.433,
    destek1: 34.787,
    destek2: 33.753,
    destek3: 33.107,
    direnc1: 36.467,
    direnc2: 37.113,
    direnc3: 38.147,
    yorum: "İkinci direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "FROTO",
    fark: 1.15,
    son: 98.05,
    pivot: 96.933,
    destek1: 94.917,
    destek2: 93.833,
    destek3: 91.817,
    direnc1: 98.017,
    direnc2: 100.033,
    direnc3: 101.117,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "GARAN",
    fark: -1.32,
    son: 129.4,
    pivot: 131.133,
    destek1: 127.367,
    destek2: 125.133,
    destek3: 121.367,
    direnc1: 133.367,
    direnc2: 137.133,
    direnc3: 139.367,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "GUBRF",
    fark: 2.14,
    son: 549.5,
    pivot: 538,
    destek1: 528.5,
    destek2: 518.5,
    destek3: 509,
    direnc1: 548,
    direnc2: 557.5,
    direnc3: 567.5,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "ISCTR",
    fark: -0.85,
    son: 14.01,
    pivot: 14.13,
    destek1: 13.85,
    destek2: 13.62,
    destek3: 13.34,
    direnc1: 14.36,
    direnc2: 14.64,
    direnc3: 14.87,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "KCHOL",
    fark: 1.27,
    son: 201.9,
    pivot: 199.367,
    destek1: 194.833,
    destek2: 192.267,
    destek3: 187.733,
    direnc1: 201.933,
    direnc2: 206.467,
    direnc3: 209.033,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "KRDMD",
    fark: 4.73,
    son: 40.28,
    pivot: 38.46,
    destek1: 37.66,
    destek2: 36.24,
    destek3: 35.44,
    direnc1: 39.88,
    direnc2: 40.68,
    direnc3: 42.1,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "MGROS",
    fark: -0.1,
    son: 643.5,
    pivot: 644.167,
    destek1: 636.333,
    destek2: 632.167,
    destek3: 624.333,
    direnc1: 648.333,
    direnc2: 656.167,
    direnc3: 660.333,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "PETKM",
    fark: 0.03,
    son: 24.12,
    pivot: 24.113,
    destek1: 23.587,
    destek2: 23.113,
    destek3: 22.587,
    direnc1: 24.587,
    direnc2: 25.113,
    direnc3: 25.587,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "PGSUS",
    fark: -0.56,
    son: 178.7,
    pivot: 179.7,
    destek1: 177.4,
    destek2: 175.9,
    destek3: 173.6,
    direnc1: 181.2,
    direnc2: 183.5,
    direnc3: 185,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "SAHOL",
    fark: 0.79,
    son: 95.3,
    pivot: 94.55,
    destek1: 92.7,
    destek2: 91.7,
    destek3: 89.85,
    direnc1: 95.55,
    direnc2: 97.4,
    direnc3: 98.4,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "SASA",
    fark: -5.68,
    son: 2.99,
    pivot: 3.17,
    destek1: 3.07,
    destek2: 3.02,
    destek3: 2.92,
    direnc1: 3.22,
    direnc2: 3.32,
    direnc3: 3.37,
    yorum: "İkinci destek seviyesinin altına indi.",
  },
  {
    sembol: "SISE",
    fark: 2.48,
    son: 47.86,
    pivot: 46.7,
    destek1: 45.14,
    destek2: 44.28,
    destek3: 42.72,
    direnc1: 47.56,
    direnc2: 49.12,
    direnc3: 49.98,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "TAVHL",
    fark: 0.45,
    son: 276,
    pivot: 274.75,
    destek1: 267.5,
    destek2: 263.5,
    destek3: 256.25,
    direnc1: 278.75,
    direnc2: 286,
    direnc3: 290,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "TCELL",
    fark: 3.53,
    son: 115.2,
    pivot: 111.267,
    destek1: 109.333,
    destek2: 107.667,
    destek3: 105.733,
    direnc1: 112.933,
    direnc2: 114.867,
    direnc3: 116.533,
    yorum: "İkinci direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "THYAO",
    fark: -0.99,
    son: 301,
    pivot: 304,
    destek1: 297.25,
    destek2: 293.75,
    destek3: 287,
    direnc1: 307.5,
    direnc2: 314.25,
    direnc3: 317.75,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "TOASO",
    fark: 3.44,
    son: 298.25,
    pivot: 288.333,
    destek1: 281.417,
    destek2: 276.833,
    destek3: 269.917,
    direnc1: 292.917,
    direnc2: 299.833,
    direnc3: 304.417,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "TRALT",
    fark: 1.21,
    son: 40.66,
    pivot: 40.173,
    destek1: 38.767,
    destek2: 37.993,
    destek3: 36.587,
    direnc1: 40.947,
    direnc2: 42.353,
    direnc3: 43.127,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "TTKOM",
    fark: 2.34,
    son: 62.65,
    pivot: 61.217,
    destek1: 59.183,
    destek2: 57.967,
    destek3: 55.933,
    direnc1: 62.433,
    direnc2: 64.467,
    direnc3: 65.683,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "TUPRS",
    fark: 0.19,
    son: 270.75,
    pivot: 270.25,
    destek1: 265.75,
    destek2: 260.5,
    destek3: 256,
    direnc1: 275.5,
    direnc2: 280,
    direnc3: 285.25,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "VAKBN",
    fark: -0.24,
    son: 30.86,
    pivot: 30.933,
    destek1: 30.027,
    destek2: 29.513,
    destek3: 28.607,
    direnc1: 31.447,
    direnc2: 32.353,
    direnc3: 32.867,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "YKBNK",
    fark: -0.64,
    son: 36.08,
    pivot: 36.313,
    destek1: 35.327,
    destek2: 34.813,
    destek3: 33.827,
    direnc1: 36.827,
    direnc2: 37.813,
    direnc3: 38.327,
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