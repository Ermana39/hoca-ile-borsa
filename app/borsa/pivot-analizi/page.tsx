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
  fark: -0.77,
  son: 14311.26,
  pivot: 14422.4,
  destek1: 14236.28,
  destek2: 14143.22,
  destek3: 13957.1,
  direnc1: 14515.46,
  direnc2: 14701.58,
  direnc3: 14794.64,
  yorum: "Pivot değerinin altında seyrediyor.",
};

const pivotVerileri: PivotRow[] = [
  {
    sembol: "AEFES",
    fark: -1.67,
    son: 18.61,
    pivot: 18.927,
    destek1: 18.683,
    destek2: 18.517,
    destek3: 18.273,
    direnc1: 19.093,
    direnc2: 19.337,
    direnc3: 19.503,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "AKBNK",
    fark: -4.02,
    son: 73.7,
    pivot: 76.783,
    destek1: 75.117,
    destek2: 74.283,
    destek3: 72.617,
    direnc1: 77.617,
    direnc2: 79.283,
    direnc3: 80.117,
    yorum: "İkinci destek seviyesinin altına indi.",
  },
  {
    sembol: "ASELS",
    fark: 1.83,
    son: 425.5,
    pivot: 417.833,
    destek1: 410.9166,
    destek2: 407.3333,
    destek3: 400.4166,
    direnc1: 421.4166,
    direnc2: 428.3333,
    direnc3: 431.9166,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "ASTOR",
    fark: 4.65,
    son: 264,
    pivot: 252.2666,
    destek1: 244.2833,
    destek2: 233.8166,
    destek3: 225.8333,
    direnc1: 262.7333,
    direnc2: 270.7166,
    direnc3: 281.1833,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "BIMAS",
    fark: -1.38,
    son: 727,
    pivot: 737.167,
    destek1: 721.833,
    destek2: 713.667,
    destek3: 698.333,
    direnc1: 745.333,
    direnc2: 760.667,
    direnc3: 768.833,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "DSTKF",
    fark: -5.02,
    son: 2572.5,
    pivot: 2708.333,
    destek1: 2631.667,
    destek2: 2593.333,
    destek3: 2516.667,
    direnc1: 2746.667,
    direnc2: 2823.333,
    direnc3: 2861.667,
    yorum: "İkinci destek seviyesinin altına indi.",
  },
  {
    sembol: "EKGYO",
    fark: -2.83,
    son: 20.18,
    pivot: 20.767,
    destek1: 20.533,
    destek2: 20.367,
    destek3: 20.133,
    direnc1: 20.933,
    direnc2: 21.167,
    direnc3: 21.333,
    yorum: "İkinci destek seviyesinin altına indi.",
  },
  {
    sembol: "ENKAI",
    fark: 0.64,
    son: 104.9,
    pivot: 104.233,
    destek1: 102.067,
    destek2: 100.433,
    destek3: 98.267,
    direnc1: 105.867,
    direnc2: 108.033,
    direnc3: 109.667,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "EREGL",
    fark: 1.59,
    son: 33.72,
    pivot: 33.193,
    destek1: 32.547,
    destek2: 32.113,
    destek3: 31.467,
    direnc1: 33.627,
    direnc2: 34.273,
    direnc3: 34.707,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "FROTO",
    fark: -2.23,
    son: 98.05,
    pivot: 100.283,
    destek1: 97.867,
    destek2: 96.583,
    destek3: 94.167,
    direnc1: 101.567,
    direnc2: 103.983,
    direnc3: 105.267,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "GARAN",
    fark: -1.95,
    son: 132.7,
    pivot: 135.333,
    destek1: 133.567,
    destek2: 132.533,
    destek3: 130.767,
    direnc1: 136.367,
    direnc2: 138.133,
    direnc3: 139.167,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "GUBRF",
    fark: -1.28,
    son: 528,
    pivot: 534.833,
    destek1: 520.167,
    destek2: 509.333,
    destek3: 494.667,
    direnc1: 545.667,
    direnc2: 560.333,
    direnc3: 571.167,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "ISCTR",
    fark: -0.62,
    son: 14.02,
    pivot: 14.107,
    destek1: 13.843,
    destek2: 13.707,
    destek3: 13.443,
    direnc1: 14.243,
    direnc2: 14.507,
    direnc3: 14.643,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "KCHOL",
    fark: -0.62,
    son: 202.3,
    pivot: 203.567,
    destek1: 201.233,
    destek2: 200.067,
    destek3: 197.733,
    direnc1: 204.733,
    direnc2: 207.067,
    direnc3: 208.233,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "KRDMD",
    fark: 2.15,
    son: 37.7,
    pivot: 36.907,
    destek1: 36.453,
    destek2: 36.067,
    destek3: 35.613,
    direnc1: 37.293,
    direnc2: 37.747,
    direnc3: 38.133,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "MGROS",
    fark: 0.48,
    son: 626,
    pivot: 623,
    destek1: 612,
    destek2: 606,
    destek3: 595,
    direnc1: 629,
    direnc2: 640,
    direnc3: 646,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "PETKM",
    fark: 2.56,
    son: 24.82,
    pivot: 24.2,
    destek1: 23.9,
    destek2: 23.56,
    destek3: 23.26,
    direnc1: 24.54,
    direnc2: 24.84,
    direnc3: 25.18,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "PGSUS",
    fark: 1.76,
    son: 179.1,
    pivot: 182.3,
    destek1: 178.7,
    destek2: 176.9,
    destek3: 173.3,
    direnc1: 184.1,
    direnc2: 187.7,
    direnc3: 189.5,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "SAHOL",
    fark: -0.79,
    son: 96.15,
    pivot: 96.917,
    destek1: 95.833,
    destek2: 95.267,
    destek3: 94.183,
    direnc1: 97.483,
    direnc2: 98.567,
    direnc3: 99.133,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "SASA",
    fark: -1.94,
    son: 3.2,
    pivot: 3.2633,
    destek1: 3.05666,
    destek2: 2.9533,
    destek3: 2.7466,
    direnc1: 3.3666,
    direnc2: 3.5733,
    direnc3: 3.6766,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "SISE",
    fark: -1.76,
    son: 45.88,
    pivot: 46.7,
    destek1: 46.04,
    destek2: 45.64,
    destek3: 44.98,
    direnc1: 47.1,
    direnc2: 47.76,
    direnc3: 48.16,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "TAVHL",
    fark: -3.57,
    son: 278.75,
    pivot: 289.083,
    destek1: 279.167,
    destek2: 273.583,
    destek3: 263.667,
    direnc1: 294.667,
    direnc2: 304.583,
    direnc3: 310.167,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "TCELL",
    fark: -2.15,
    son: 112.1,
    pivot: 114.567,
    destek1: 112.733,
    destek2: 111.667,
    destek3: 109.833,
    direnc1: 115.633,
    direnc2: 117.467,
    direnc3: 118.533,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "THYAO",
    fark: -0.81,
    son: 314.5,
    pivot: 317.0833,
    destek1: 313.9166,
    destek2: 312.0833,
    destek3: 308.9166,
    direnc1: 318.9166,
    direnc2: 322.0833,
    direnc3: 323.9166,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "TOASO",
    fark: 0.96,
    son: 296.75,
    pivot: 293.917,
    destek1: 290.333,
    destek2: 286.167,
    destek3: 282.583,
    direnc1: 298.083,
    direnc2: 301.667,
    direnc3: 305.833,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "TRALT",
    fark: -6.18,
    son: 41.4,
    pivot: 44.127,
    destek1: 42.593,
    destek2: 41.787,
    destek3: 40.253,
    direnc1: 44.933,
    direnc2: 46.467,
    direnc3: 47.273,
    yorum: "İkinci destek seviyesinin altına indi.",
  },
  {
    sembol: "TTKOM",
    fark: -0.48,
    son: 62.75,
    pivot: 63.05,
    destek1: 61.85,
    destek2: 61.25,
    destek3: 60.05,
    direnc1: 63.65,
    direnc2: 64.85,
    direnc3: 65.45,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "TUPRS",
    fark: 1.01,
    son: 275.5,
    pivot: 272.75,
    destek1: 266,
    destek2: 262.5,
    destek3: 255.75,
    direnc1: 276.25,
    direnc2: 283,
    direnc3: 286.5,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "VAKBN",
    fark: -3.27,
    son: 31.34,
    pivot: 32.4,
    destek1: 31.84,
    destek2: 31.44,
    destek3: 30.88,
    direnc1: 32.8,
    direnc2: 33.36,
    direnc3: 33.76,
    yorum: "İkinci destek seviyesinin altına indi.",
  },
  {
    sembol: "YKBNK",
    fark: -1.75,
    son: 36.56,
    pivot: 37.213,
    destek1: 36.727,
    destek2: 36.393,
    destek3: 35.907,
    direnc1: 37.547,
    direnc2: 38.033,
    direnc3: 38.367,
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