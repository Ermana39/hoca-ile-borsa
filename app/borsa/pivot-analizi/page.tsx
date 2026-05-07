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
  fark: 1.2,
  son: 15040.58,
  pivot: 14862.23,
  destek1: 14680.89,
  destek2: 14444.35,
  destek3: 14263.01,
  direnc1: 15098.77,
  direnc2: 15280.11,
  direnc3: 15516.65,
  yorum: "Pivot değerinin üstünde seyrediyor.",
};

const pivotVerileri: PivotRow[] = [
  {
    sembol: "AEFES",
    fark: 3.72,
    son: 20.54,
    pivot: 19.803,
    destek1: 19.387,
    destek2: 18.753,
    destek3: 18.337,
    direnc1: 20.437,
    direnc2: 20.853,
    direnc3: 21.487,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "AKBNK",
    fark: 1.64,
    son: 75.2,
    pivot: 73.983,
    destek1: 72.517,
    destek2: 70.683,
    destek3: 69.217,
    direnc1: 75.817,
    direnc2: 77.283,
    direnc3: 79.117,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "ASELS",
    fark: -2.25,
    son: 428,
    pivot: 437.833,
    destek1: 425.667,
    destek2: 417.333,
    destek3: 405.167,
    direnc1: 446.167,
    direnc2: 458.333,
    direnc3: 466.667,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "ASTOR",
    fark: 3,
    son: 320.75,
    pivot: 311.417,
    destek1: 303.333,
    destek2: 288.917,
    destek3: 280.833,
    direnc1: 325.833,
    direnc2: 333.917,
    direnc3: 348.333,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "BIMAS",
    fark: 1.34,
    son: 784,
    pivot: 773.667,
    destek1: 762.333,
    destek2: 743.667,
    destek3: 732.333,
    direnc1: 792.333,
    direnc2: 803.667,
    direnc3: 822.333,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "DSTKF",
    fark: -0.27,
    son: 2775,
    pivot: 2782.5,
    destek1: 2722.5,
    destek2: 2690,
    destek3: 2630,
    direnc1: 2815,
    direnc2: 2875,
    direnc3: 2907.5,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "EKGYO",
    fark: 2.88,
    son: 21.7,
    pivot: 21.093,
    destek1: 20.707,
    destek2: 20.193,
    destek3: 19.807,
    direnc1: 21.607,
    direnc2: 21.993,
    direnc3: 22.507,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "ENKAI",
    fark: 1.92,
    son: 111.4,
    pivot: 109.3,
    destek1: 107.8,
    destek2: 105.1,
    destek3: 103.6,
    direnc1: 112,
    direnc2: 113.5,
    direnc3: 116.2,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "EREGL",
    fark: 1.93,
    son: 38.48,
    pivot: 37.753,
    destek1: 36.867,
    destek2: 36.053,
    destek3: 35.167,
    direnc1: 38.567,
    direnc2: 39.453,
    direnc3: 40.267,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "FROTO",
    fark: 0.15,
    son: 98.9,
    pivot: 98.75,
    destek1: 97.7,
    destek2: 96.4,
    destek3: 95.35,
    direnc1: 100.05,
    direnc2: 101.1,
    direnc3: 102.4,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "GARAN",
    fark: 1.93,
    son: 137.6,
    pivot: 135,
    destek1: 132.5,
    destek2: 128.399,
    destek3: 125.899,
    direnc1: 139.1,
    direnc2: 141.6,
    direnc3: 145.7,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "GUBRF",
    fark: 3.49,
    son: 597.5,
    pivot: 577.333,
    destek1: 561.667,
    destek2: 540.333,
    destek3: 524.667,
    direnc1: 598.667,
    direnc2: 614.333,
    direnc3: 635.667,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "ISCTR",
    fark: 0.85,
    son: 14.59,
    pivot: 14.467,
    destek1: 14.163,
    destek2: 13.837,
    destek3: 13.533,
    direnc1: 14.793,
    direnc2: 15.097,
    direnc3: 15.423,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "KCHOL",
    fark: 1.02,
    son: 211.5,
    pivot: 209.367,
    destek1: 204.833,
    destek2: 199.167,
    destek3: 194.633,
    direnc1: 215.033,
    direnc2: 219.567,
    direnc3: 225.233,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "KRDMD",
    fark: -0.65,
    son: 39.8,
    pivot: 40.06,
    destek1: 39.22,
    destek2: 38.54,
    destek3: 37.7,
    direnc1: 40.74,
    direnc2: 41.58,
    direnc3: 42.26,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "MGROS",
    fark: 2.51,
    son: 694,
    pivot: 677,
    destek1: 666.5,
    destek2: 649.5,
    destek3: 639,
    direnc1: 694,
    direnc2: 704.5,
    direnc3: 721.5,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "PETKM",
    fark: -1.63,
    son: 23.76,
    pivot: 24.153,
    destek1: 23.367,
    destek2: 22.613,
    destek3: 21.827,
    direnc1: 24.907,
    direnc2: 25.693,
    direnc3: 26.447,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "PGSUS",
    fark: 1.85,
    son: 187.5,
    pivot: 184.1,
    destek1: 180.6,
    destek2: 176.9,
    destek3: 173.4,
    direnc1: 187.8,
    direnc2: 191.3,
    direnc3: 195,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "SAHOL",
    fark: 0.02,
    son: 100,
    pivot: 99.983,
    destek1: 97.567,
    destek2: 94.433,
    destek3: 92.017,
    direnc1: 103.117,
    direnc2: 105.533,
    direnc3: 108.667,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "SASA",
    fark: 8.59,
    son: 3.33,
    pivot: 3.06666,
    destek1: 2.9733,
    destek2: 2.8666,
    destek3: 2.7733,
    direnc1: 3.1733,
    direnc2: 3.2666,
    direnc3: 3.3733,
    yorum: "İkinci direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "SISE",
    fark: -1.97,
    son: 49.12,
    pivot: 50.107,
    destek1: 47.613,
    destek2: 45.607,
    destek3: 43.113,
    direnc1: 52.113,
    direnc2: 54.607,
    direnc3: 56.613,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "TAVHL",
    fark: 1.16,
    son: 290,
    pivot: 286.667,
    destek1: 281.583,
    destek2: 273.417,
    destek3: 268.333,
    direnc1: 294.833,
    direnc2: 299.917,
    direnc3: 308.083,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "TCELL",
    fark: 1.02,
    son: 118.6,
    pivot: 117.4,
    destek1: 115.5,
    destek2: 113.3,
    destek3: 111.4,
    direnc1: 119.6,
    direnc2: 121.5,
    direnc3: 123.7,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "THYAO",
    fark: 0.73,
    son: 312.5,
    pivot: 310.25,
    destek1: 304.25,
    destek2: 298.75,
    destek3: 292.75,
    direnc1: 315.75,
    direnc2: 321.75,
    direnc3: 327.25,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "TOASO",
    fark: 4.14,
    son: 320.75,
    pivot: 308,
    destek1: 303,
    destek2: 293.5,
    destek3: 288.5,
    direnc1: 317.5,
    direnc2: 322.5,
    direnc3: 332,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "TRALT",
    fark: 2.47,
    son: 43.36,
    pivot: 42.313,
    destek1: 41.187,
    destek2: 40.313,
    destek3: 39.187,
    direnc1: 43.187,
    direnc2: 44.313,
    direnc3: 45.187,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "TTKOM",
    fark: 2.05,
    son: 66.2,
    pivot: 64.867,
    destek1: 63.833,
    destek2: 62.017,
    destek3: 60.983,
    direnc1: 66.683,
    direnc2: 67.717,
    direnc3: 69.533,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "TUPRS",
    fark: -3.36,
    son: 259.25,
    pivot: 268.25,
    destek1: 262.5,
    destek2: 254,
    destek3: 248.25,
    direnc1: 276.75,
    direnc2: 282.5,
    direnc3: 291,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "VAKBN",
    fark: 1.61,
    son: 32.06,
    pivot: 31.553,
    destek1: 31.087,
    destek2: 30.713,
    destek3: 30.247,
    direnc1: 31.927,
    direnc2: 32.393,
    direnc3: 32.767,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "YKBNK",
    fark: 2.73,
    son: 38.66,
    pivot: 37.633,
    destek1: 36.447,
    destek2: 35.133,
    destek3: 33.947,
    direnc1: 38.947,
    direnc2: 40.133,
    direnc3: 41.447,
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