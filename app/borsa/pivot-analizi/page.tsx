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
  fark: -0.12,
  son: 14370.12,
  pivot: 14387.38,
  destek1: 14305.44,
  destek2: 14168.33,
  destek3: 14086.39,
  direnc1: 14524.49,
  direnc2: 14606.43,
  direnc3: 14743.54,
  yorum: "Pivot değerinin altında seyrediyor.",
};

const pivotVerileri: PivotRow[] = [
  {
    sembol: "AEFES",
    fark: 1.24,
    son: 19.04,
    pivot: 18.807,
    destek1: 18.533,
    destek2: 18.087,
    destek3: 17.813,
    direnc1: 19.253,
    direnc2: 19.527,
    direnc3: 19.973,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "AKBNK",
    fark: -3.7,
    son: 70.65,
    pivot: 73.367,
    destek1: 72.683,
    destek2: 72.167,
    destek3: 71.483,
    direnc1: 73.883,
    direnc2: 74.567,
    direnc3: 75.083,
    yorum: "Üçüncü destek seviyesinin altına indi.",
  },
  {
    sembol: "ASELS",
    fark: 2.03,
    son: 431.75,
    pivot: 423.167,
    destek1: 415.333,
    destek2: 410.417,
    destek3: 402.583,
    direnc1: 428.083,
    direnc2: 435.917,
    direnc3: 440.833,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "ASTOR",
    fark: 5.16,
    son: 290.25,
    pivot: 276,
    destek1: 268,
    destek2: 252,
    destek3: 244,
    direnc1: 292,
    direnc2: 300,
    direnc3: 316,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "BIMAS",
    fark: -0.7,
    son: 730,
    pivot: 735.167,
    destek1: 726.833,
    destek2: 712.167,
    destek3: 703.833,
    direnc1: 749.833,
    direnc2: 758.167,
    direnc3: 772.833,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "DSTKF",
    fark: 2.39,
    son: 2745,
    pivot: 2680.833,
    destek1: 2574.167,
    destek2: 2418.333,
    destek3: 2311.667,
    direnc1: 2836.667,
    direnc2: 2943.333,
    direnc3: 3099.167,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "EKGYO",
    fark: -2.66,
    son: 19.77,
    pivot: 20.31,
    destek1: 20.04,
    destek2: 19.5,
    destek3: 19.23,
    direnc1: 20.85,
    direnc2: 21.12,
    direnc3: 21.66,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "ENKAI",
    fark: -1.02,
    son: 103.4,
    pivot: 104.467,
    destek1: 103.633,
    destek2: 102.667,
    destek3: 101.833,
    direnc1: 105.433,
    direnc2: 106.267,
    direnc3: 107.233,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "EREGL",
    fark: 2.64,
    son: 35.82,
    pivot: 34.9,
    destek1: 33.859,
    destek2: 32.599,
    destek3: 31.56,
    direnc1: 36.159,
    direnc2: 37.199,
    direnc3: 38.459,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "FROTO",
    fark: -2.29,
    son: 96,
    pivot: 98.25,
    destek1: 97.25,
    destek2: 96.5,
    destek3: 95.5,
    direnc1: 99,
    direnc2: 100,
    direnc3: 100.75,
    yorum: "İkinci destek seviyesinin altına indi.",
  },
  {
    sembol: "GARAN",
    fark: -2.7,
    son: 129.6,
    pivot: 133.2,
    destek1: 131.6,
    destek2: 129.4,
    destek3: 127.8,
    direnc1: 135.4,
    direnc2: 137,
    direnc3: 139.2,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "GUBRF",
    fark: 1.41,
    son: 538.5,
    pivot: 531,
    destek1: 523.5,
    destek2: 516.5,
    destek3: 509,
    direnc1: 538,
    direnc2: 545.5,
    direnc3: 552.5,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "ISCTR",
    fark: -0.89,
    son: 14.08,
    pivot: 14.207,
    destek1: 14.033,
    destek2: 13.727,
    destek3: 13.553,
    direnc1: 14.513,
    direnc2: 14.687,
    direnc3: 14.993,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "KCHOL",
    fark: -1.89,
    son: 197.4,
    pivot: 201.2,
    destek1: 200.1,
    destek2: 198,
    destek3: 196.9,
    direnc1: 203.3,
    direnc2: 204.4,
    direnc3: 206.5,
    yorum: "İkinci destek seviyesinin altına indi.",
  },
  {
    sembol: "KRDMD",
    fark: 1.79,
    son: 39.08,
    pivot: 38.393,
    destek1: 37.527,
    destek2: 36.533,
    destek3: 35.667,
    direnc1: 39.387,
    direnc2: 40.253,
    direnc3: 41.247,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "MGROS",
    fark: 1,
    son: 640.5,
    pivot: 634.167,
    destek1: 626.833,
    destek2: 612.167,
    destek3: 604.833,
    direnc1: 648.833,
    direnc2: 656.167,
    direnc3: 670.833,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "PETKM",
    fark: -0.8,
    son: 24.06,
    pivot: 24.253,
    destek1: 23.147,
    destek2: 22.393,
    destek3: 21.287,
    direnc1: 25.007,
    direnc2: 26.113,
    direnc3: 26.867,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "PGSUS",
    fark: -0.59,
    son: 178.9,
    pivot: 179.967,
    destek1: 178.533,
    destek2: 176.467,
    destek3: 175.033,
    direnc1: 182.033,
    direnc2: 183.467,
    direnc3: 185.533,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "SAHOL",
    fark: -1.47,
    son: 93.7,
    pivot: 95.1,
    destek1: 94.3,
    destek2: 92.95,
    destek3: 92.15,
    direnc1: 96.45,
    direnc2: 97.25,
    direnc3: 98.6,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "SASA",
    fark: -0.86,
    son: 3.12,
    pivot: 3.147,
    destek1: 3.073,
    destek2: 3.007,
    destek3: 2.933,
    direnc1: 3.213,
    direnc2: 3.287,
    direnc3: 3.353,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "SISE",
    fark: -2.52,
    son: 46,
    pivot: 47.187,
    destek1: 46.293,
    destek2: 44.727,
    destek3: 43.833,
    direnc1: 48.753,
    direnc2: 49.647,
    direnc3: 51.213,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "TAVHL",
    fark: -2.13,
    son: 271.5,
    pivot: 277.417,
    destek1: 275.083,
    destek2: 271.667,
    destek3: 269.333,
    direnc1: 280.833,
    direnc2: 283.167,
    direnc3: 286.583,
    yorum: "İkinci destek seviyesinin altına indi.",
  },
  {
    sembol: "TCELL",
    fark: -0.24,
    son: 111,
    pivot: 111.267,
    destek1: 110.233,
    destek2: 108.367,
    destek3: 107.333,
    direnc1: 113.133,
    direnc2: 114.167,
    direnc3: 116.033,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "THYAO",
    fark: -2.46,
    son: 300.75,
    pivot: 308.333,
    destek1: 305.167,
    destek2: 302.083,
    destek3: 298.917,
    direnc1: 311.417,
    direnc2: 314.583,
    direnc3: 317.667,
    yorum: "İkinci destek seviyesinin altına indi.",
  },
  {
    sembol: "TOASO",
    fark: -2.14,
    son: 286,
    pivot: 292.25,
    destek1: 289.5,
    destek2: 284.5,
    destek3: 281.75,
    direnc1: 297.25,
    direnc2: 300,
    direnc3: 305,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "TRALT",
    fark: -5.56,
    son: 39.54,
    pivot: 41.867,
    destek1: 40.713,
    destek2: 40.047,
    destek3: 38.893,
    direnc1: 42.533,
    direnc2: 43.687,
    direnc3: 44.353,
    yorum: "İkinci destek seviyesinin altına indi.",
  },
  {
    sembol: "TTKOM",
    fark: -2.84,
    son: 60.4,
    pivot: 62.167,
    destek1: 61.683,
    destek2: 61.217,
    destek3: 60.733,
    direnc1: 62.633,
    direnc2: 63.117,
    direnc3: 63.583,
    yorum: "Üçüncü destek seviyesinin altına indi.",
  },
  {
    sembol: "TUPRS",
    fark: -0.58,
    son: 271,
    pivot: 272.583,
    destek1: 265.667,
    destek2: 260.333,
    destek3: 253.417,
    direnc1: 277.917,
    direnc2: 284.833,
    direnc3: 290.167,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "VAKBN",
    fark: -2.7,
    son: 30.54,
    pivot: 31.387,
    destek1: 31.053,
    destek2: 30.447,
    destek3: 30.113,
    direnc1: 31.993,
    direnc2: 32.327,
    direnc3: 32.933,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "YKBNK",
    fark: -2.43,
    son: 35.84,
    pivot: 36.733,
    destek1: 36.387,
    destek2: 35.733,
    destek3: 35.387,
    direnc1: 37.387,
    direnc2: 37.733,
    direnc3: 38.387,
    yorum: "İlk destek seviyesinin altına indi.",
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