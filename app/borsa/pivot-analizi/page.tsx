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
  fark: -1.49,
  son: 14330.06,
  pivot: 14546.62,
  destek1: 14471.27,
  destek2: 14348.53,
  destek3: 14273.18,
  direnc1: 14669.36,
  direnc2: 14744.71,
  direnc3: 14867.45,
  yorum: "İkinci destek seviyesinin altına indi.",
};

const pivotVerileri: PivotRow[] = [
  {
    sembol: "AEFES",
    fark: -2.08,
    son: 18.85,
    pivot: 19.25,
    destek1: 19.02,
    destek2: 18.8,
    destek3: 18.57,
    direnc1: 19.47,
    direnc2: 19.7,
    direnc3: 19.92,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "AKBNK",
    fark: -2.73,
    son: 75.95,
    pivot: 78.083,
    destek1: 76.817,
    destek2: 75.933,
    destek3: 74.667,
    direnc1: 78.967,
    direnc2: 80.233,
    direnc3: 81.117,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "ASELS",
    fark: 1.74,
    son: 414.5,
    pivot: 407.417,
    destek1: 398.583,
    destek2: 382.167,
    destek3: 373.333,
    direnc1: 423.833,
    direnc2: 432.667,
    direnc3: 449.083,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "ASTOR",
    fark: 7.49,
    son: 254.75,
    pivot: 237,
    destek1: 230.4,
    destek2: 217.2,
    destek3: 210.6,
    direnc1: 250.2,
    direnc2: 256.8,
    direnc3: 270,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "BIMAS",
    fark: -3.44,
    son: 730,
    pivot: 756,
    destek1: 748,
    destek2: 743.5,
    destek3: 735.5,
    direnc1: 760.5,
    direnc2: 768.5,
    direnc3: 773,
    yorum: "Üçüncü destek seviyesinin altına indi.",
  },
  {
    sembol: "DSTKF",
    fark: -2.53,
    son: 2670,
    pivot: 2739.167,
    destek1: 2583.333,
    destek2: 2356.667,
    destek3: 2200.833,
    direnc1: 2965.833,
    direnc2: 3121.667,
    direnc3: 3348.333,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "EKGYO",
    fark: -2.14,
    son: 20.7,
    pivot: 21.153,
    destek1: 20.787,
    destek2: 20.573,
    destek3: 20.207,
    direnc1: 21.367,
    direnc2: 21.733,
    direnc3: 21.947,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "ENKAI",
    fark: -2.96,
    son: 103.7,
    pivot: 106.867,
    destek1: 105.533,
    destek2: 104.767,
    destek3: 103.433,
    direnc1: 107.633,
    direnc2: 108.967,
    direnc3: 109.733,
    yorum: "İkinci destek seviyesinin altına indi.",
  },
  {
    sembol: "EREGL",
    fark: -1.9,
    son: 32.98,
    pivot: 33.62,
    destek1: 33.1,
    destek2: 32.6,
    destek3: 32.08,
    direnc1: 34.12,
    direnc2: 34.64,
    direnc3: 35.14,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "FROTO",
    fark: -4.08,
    son: 99.15,
    pivot: 103.367,
    destek1: 101.433,
    destek2: 100.267,
    destek3: 98.333,
    direnc1: 104.533,
    direnc2: 106.467,
    direnc3: 107.633,
    yorum: "İkinci destek seviyesinin altına indi.",
  },
  {
    sembol: "GARAN",
    fark: -2.06,
    son: 134.6,
    pivot: 137.433,
    destek1: 135.467,
    destek2: 134.233,
    destek3: 132.267,
    direnc1: 138.667,
    direnc2: 140.633,
    direnc3: 141.867,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "GUBRF",
    fark: -2.42,
    son: 531,
    pivot: 544.167,
    destek1: 534.833,
    destek2: 525.167,
    destek3: 515.833,
    direnc1: 553.833,
    direnc2: 563.167,
    direnc3: 572.833,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "ISCTR",
    fark: -2.92,
    son: 13.98,
    pivot: 14.4,
    destek1: 14.18,
    destek2: 14.05,
    destek3: 13.83,
    direnc1: 14.53,
    direnc2: 14.75,
    direnc3: 14.88,
    yorum: "İkinci destek seviyesinin altına indi.",
  },
  {
    sembol: "KCHOL",
    fark: -1.76,
    son: 202.4,
    pivot: 206.033,
    destek1: 202.867,
    destek2: 200.733,
    destek3: 197.567,
    direnc1: 208.167,
    direnc2: 211.333,
    direnc3: 213.467,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "KRDMD",
    fark: -0.72,
    son: 36.84,
    pivot: 37.107,
    destek1: 36.413,
    destek2: 35.927,
    destek3: 35.233,
    direnc1: 37.593,
    direnc2: 38.287,
    direnc3: 38.773,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "MGROS",
    fark: -2.75,
    son: 618,
    pivot: 635.5,
    destek1: 630,
    destek2: 626,
    destek3: 620.5,
    direnc1: 639.5,
    direnc2: 645,
    direnc3: 649,
    yorum: "Üçüncü destek seviyesinin altına indi.",
  },
  {
    sembol: "PETKM",
    fark: 2.92,
    son: 24.24,
    pivot: 23.553,
    destek1: 23.267,
    destek2: 22.793,
    destek3: 22.507,
    direnc1: 24.027,
    direnc2: 24.313,
    direnc3: 24.787,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "PGSUS",
    fark: -3.54,
    son: 180.5,
    pivot: 187.133,
    destek1: 184.467,
    destek2: 182.933,
    destek3: 180.267,
    direnc1: 188.667,
    direnc2: 191.333,
    direnc3: 192.867,
    yorum: "İkinci destek seviyesinin altına indi.",
  },
  {
    sembol: "SAHOL",
    fark: -2.31,
    son: 96.4,
    pivot: 98.683,
    destek1: 97.167,
    destek2: 96.183,
    destek3: 94.667,
    direnc1: 99.667,
    direnc2: 101.183,
    direnc3: 102.167,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "SASA",
    fark: -4.45,
    son: 3.16,
    pivot: 3.307,
    destek1: 3.203,
    destek2: 3.077,
    destek3: 2.973,
    direnc1: 3.433,
    direnc2: 3.537,
    direnc3: 3.663,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "SISE",
    fark: -2.71,
    son: 46.44,
    pivot: 47.733,
    destek1: 46.647,
    destek2: 46.093,
    destek3: 45.007,
    direnc1: 48.287,
    direnc2: 49.373,
    direnc3: 49.927,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "TAVHL",
    fark: -6.1,
    son: 284.75,
    pivot: 303.25,
    destek1: 296.75,
    destek2: 291.5,
    destek3: 285,
    direnc1: 308.5,
    direnc2: 315,
    direnc3: 320.25,
    yorum: "Üçüncü destek seviyesinin altına indi.",
  },
  {
    sembol: "TCELL",
    fark: -1.84,
    son: 113.8,
    pivot: 115.933,
    destek1: 114.667,
    destek2: 112.733,
    destek3: 111.467,
    direnc1: 117.867,
    direnc2: 119.133,
    direnc3: 121.067,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "THYAO",
    fark: -2.09,
    son: 315.75,
    pivot: 322.5,
    destek1: 318.25,
    destek2: 316,
    destek3: 311.75,
    direnc1: 324.75,
    direnc2: 329,
    direnc3: 331.25,
    yorum: "İkinci destek seviyesinin altına indi.",
  },
  {
    sembol: "TOASO",
    fark: -0.84,
    son: 294.5,
    pivot: 297,
    destek1: 293.5,
    destek2: 290,
    destek3: 286.5,
    direnc1: 300.5,
    direnc2: 304,
    direnc3: 307.5,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "TRALT",
    fark: -5.96,
    son: 43.4,
    pivot: 46.153,
    destek1: 45.247,
    destek2: 44.793,
    destek3: 43.887,
    direnc1: 46.607,
    direnc2: 47.513,
    direnc3: 47.967,
    yorum: "Üçüncü destek seviyesinin altına indi.",
  },
  {
    sembol: "TTKOM",
    fark: -3.25,
    son: 62.45,
    pivot: 64.55,
    destek1: 63.65,
    destek2: 63,
    destek3: 62.1,
    direnc1: 65.2,
    direnc2: 66.1,
    direnc3: 66.75,
    yorum: "İkinci destek seviyesinin altına indi.",
  },
  {
    sembol: "TUPRS",
    fark: -1.37,
    son: 269.5,
    pivot: 273.25,
    destek1: 271,
    destek2: 268,
    destek3: 265.75,
    direnc1: 276.25,
    direnc2: 278.5,
    direnc3: 281.5,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "VAKBN",
    fark: -2.85,
    son: 32.24,
    pivot: 33.187,
    destek1: 32.433,
    destek2: 31.947,
    destek3: 31.193,
    direnc1: 33.673,
    direnc2: 34.427,
    direnc3: 34.913,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "YKBNK",
    fark: -1.73,
    son: 37.06,
    pivot: 37.713,
    destek1: 37.287,
    destek2: 36.973,
    destek3: 36.547,
    direnc1: 38.027,
    direnc2: 38.453,
    direnc3: 38.767,
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