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

const xu100Pivot: PivotRow = {
  sembol: "XU100",
  fark: -1.46,
  son: 13662.75,
  pivot: 13864.78,
  destek1: 13792.61,
  destek2: 13694.32,
  destek3: 13622.15,
  direnc1: 13963.07,
  direnc2: 14035.24,
  direnc3: 14133.53,
  yorum: "İkinci destek seviyesinin altına indi.",
};

const pivotVerileri: PivotRow[] = [
  {
    sembol: "AEFES",
    fark: -0.67,
    son: 19.3,
    pivot: 19.43,
    destek1: 19.21,
    destek2: 18.88,
    destek3: 18.66,
    direnc1: 19.76,
    direnc2: 19.98,
    direnc3: 20.31,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "AKBNK",
    fark: -1.61,
    son: 64,
    pivot: 65.05,
    destek1: 64.05,
    destek2: 62.7,
    destek3: 61.7,
    direnc1: 66.4,
    direnc2: 67.4,
    direnc3: 68.75,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "ASELS",
    fark: -5.78,
    son: 380.25,
    pivot: 403.583,
    destek1: 394.167,
    destek2: 386.583,
    destek3: 377.167,
    direnc1: 411.167,
    direnc2: 420.583,
    direnc3: 428.167,
    yorum: "İkinci destek seviyesinin altına indi.",
  },
  {
    sembol: "ASTOR",
    fark: -9.52,
    son: 312.75,
    pivot: 345.667,
    destek1: 336.583,
    destek2: 331.417,
    destek3: 322.333,
    direnc1: 350.833,
    direnc2: 359.917,
    direnc3: 365.083,
    yorum: "Üçüncü destek seviyesinin altına indi.",
  },
  {
    sembol: "BIMAS",
    fark: -2.86,
    son: 373,
    pivot: 384,
    destek1: 370.5,
    destek2: 362.25,
    destek3: 348.75,
    direnc1: 392.25,
    direnc2: 405.75,
    direnc3: 414,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "DSTKF",
    fark: 3.3,
    son: 2105,
    pivot: 2037.667,
    destek1: 1969.333,
    destek2: 1863.667,
    destek3: 1795.333,
    direnc1: 2143.333,
    direnc2: 2211.667,
    direnc3: 2317.333,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "EKGYO",
    fark: -2.67,
    son: 19.1,
    pivot: 19.623,
    destek1: 19.277,
    destek2: 18.973,
    destek3: 18.627,
    direnc1: 19.927,
    direnc2: 20.273,
    direnc3: 20.577,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "ENKAI",
    fark: 1.41,
    son: 100.5,
    pivot: 99.1,
    destek1: 97.8,
    destek2: 96.6,
    destek3: 95.3,
    direnc1: 100.3,
    direnc2: 101.6,
    direnc3: 102.8,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "EREGL",
    fark: -1.29,
    son: 39.18,
    pivot: 39.693,
    destek1: 38.687,
    destek2: 37.893,
    destek3: 36.887,
    direnc1: 40.487,
    direnc2: 41.493,
    direnc3: 42.287,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "FROTO",
    fark: -3.53,
    son: 84.15,
    pivot: 87.2333,
    destek1: 86.666,
    destek2: 85.7333,
    destek3: 85.166,
    direnc1: 88.166,
    direnc2: 88.7333,
    direnc3: 89.6666,
    yorum: "Üçüncü destek seviyesinin altına indi.",
  },
  {
    sembol: "GARAN",
    fark: -1.02,
    son: 122.9,
    pivot: 124.167,
    destek1: 122.733,
    destek2: 120.267,
    destek3: 118.833,
    direnc1: 126.633,
    direnc2: 128.067,
    direnc3: 130.533,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "GUBRF",
    fark: -2.54,
    son: 550,
    pivot: 564.333,
    destek1: 556.167,
    destek2: 540.333,
    destek3: 532.667,
    direnc1: 579.667,
    direnc2: 587.833,
    direnc3: 603.167,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "ISCTR",
    fark: -0.58,
    son: 13.14,
    pivot: 13.217,
    destek1: 13.113,
    destek2: 12.957,
    destek3: 12.853,
    direnc1: 13.373,
    direnc2: 13.477,
    direnc3: 13.633,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "KCHOL",
    fark: -0.91,
    son: 189.1,
    pivot: 190.833,
    destek1: 189.467,
    destek2: 188.033,
    destek3: 186.667,
    direnc1: 192.267,
    direnc2: 193.633,
    direnc3: 195.067,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "KRDMD",
    fark: -2.77,
    son: 39.74,
    pivot: 40.873,
    destek1: 39.007,
    destek2: 37.993,
    destek3: 36.127,
    direnc1: 41.887,
    direnc2: 43.753,
    direnc3: 44.767,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "MGROS",
    fark: -3.49,
    son: 659,
    pivot: 682.833,
    destek1: 670.667,
    destek2: 661.333,
    destek3: 649.667,
    direnc1: 691.667,
    direnc2: 703.833,
    direnc3: 712.667,
    yorum: "İkinci destek seviyesinin altına indi.",
  },
  {
    sembol: "PETKM",
    fark: -1.92,
    son: 22.1,
    pivot: 22.533,
    destek1: 21.887,
    destek2: 21.393,
    destek3: 20.747,
    direnc1: 23.027,
    direnc2: 23.673,
    direnc3: 24.167,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "PGSUS",
    fark: -1.41,
    son: 170.1,
    pivot: 172.533,
    destek1: 171.266,
    destek2: 169.833,
    destek3: 168.566,
    direnc1: 173.966,
    direnc2: 175.233,
    direnc3: 176.666,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "SAHOL",
    fark: 2.49,
    son: 92,
    pivot: 89.767,
    destek1: 88.833,
    destek2: 87.367,
    destek3: 86.433,
    direnc1: 91.233,
    direnc2: 92.167,
    direnc3: 93.633,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "SASA",
    fark: -1.61,
    son: 2.64,
    pivot: 2.6833,
    destek1: 2.6366,
    destek2: 2.5733,
    destek3: 2.526,
    direnc1: 2.7466,
    direnc2: 2.7933,
    direnc3: 2.8566,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "SISE",
    fark: -1.35,
    son: 45.8,
    pivot: 46.427,
    destek1: 45.673,
    destek2: 44.627,
    destek3: 43.873,
    direnc1: 47.473,
    direnc2: 48.227,
    direnc3: 49.273,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "TAVHL",
    fark: -2.61,
    son: 251.75,
    pivot: 258.5,
    destek1: 254,
    destek2: 249,
    destek3: 244.5,
    direnc1: 263.5,
    direnc2: 268,
    direnc3: 273,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "TCELL",
    fark: -4.96,
    son: 101,
    pivot: 106.267,
    destek1: 105.033,
    destek2: 103.967,
    destek3: 102.733,
    direnc1: 107.333,
    direnc2: 108.567,
    direnc3: 109.633,
    yorum: "Üçüncü destek seviyesinin altına indi.",
  },
  {
    sembol: "THYAO",
    fark: -0.42,
    son: 296.75,
    pivot: 298,
    destek1: 295.5,
    destek2: 293.5,
    destek3: 291,
    direnc1: 300,
    direnc2: 302.5,
    direnc3: 304.5,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "TOASO",
    fark: -2.63,
    son: 296,
    pivot: 304,
    destek1: 298.75,
    destek2: 294.25,
    destek3: 289,
    direnc1: 308.5,
    direnc2: 313.75,
    direnc3: 318.25,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "TRALT",
    fark: -3.57,
    son: 43.54,
    pivot: 45.153,
    destek1: 44.447,
    destek2: 43.313,
    destek3: 42.607,
    direnc1: 46.287,
    direnc2: 46.993,
    direnc3: 48.127,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "TTKOM",
    fark: 2.28,
    son: 61.25,
    pivot: 59.883,
    destek1: 59.367,
    destek2: 58.333,
    destek3: 57.817,
    direnc1: 60.917,
    direnc2: 61.433,
    direnc3: 62.467,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "TUPRS",
    fark: 0.45,
    son: 236.2,
    pivot: 235.133,
    destek1: 231.267,
    destek2: 228.433,
    destek3: 224.567,
    direnc1: 237.967,
    direnc2: 241.833,
    direnc3: 244.667,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "VAKBN",
    fark: -0.47,
    son: 30.84,
    pivot: 30.987,
    destek1: 30.373,
    destek2: 29.267,
    destek3: 28.653,
    direnc1: 32.093,
    direnc2: 32.707,
    direnc3: 33.813,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "YKBNK",
    fark: -0.08,
    son: 33.16,
    pivot: 33.187,
    destek1: 32.73,
    destek2: 32.247,
    destek3: 31.853,
    direnc1: 33.733,
    direnc2: 34.127,
    direnc3: 34.673,
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

        <section className="mb-8">
          <ReklamAlani variant="yatay" />
        </section>

        <section className="mb-8 overflow-hidden rounded-2xl border border-sky-200 bg-sky-50 shadow-sm">
          <div className="overflow-x-auto">
            <table className="min-w-[1200px] w-full border-collapse text-sm text-zinc-900">
              <thead className="bg-sky-100 text-zinc-800">
                <tr>
                  <th className="border border-sky-200 px-3 py-2 text-left">
                    Sembol
                  </th>
                  <th className="border border-sky-200 px-3 py-2 text-left">
                    Pivota Göre Fark %
                  </th>
                  <th className="border border-sky-200 px-3 py-2 text-left">
                    Son
                  </th>
                  <th className="border border-sky-200 px-3 py-2 text-left">
                    Pivot
                  </th>
                  <th className="border border-sky-200 px-3 py-2 text-left">
                    Destek 1
                  </th>
                  <th className="border border-sky-200 px-3 py-2 text-left">
                    Destek 2
                  </th>
                  <th className="border border-sky-200 px-3 py-2 text-left">
                    Destek 3
                  </th>
                  <th className="border border-sky-200 px-3 py-2 text-left">
                    Direnç 1
                  </th>
                  <th className="border border-sky-200 px-3 py-2 text-left">
                    Direnç 2
                  </th>
                  <th className="border border-sky-200 px-3 py-2 text-left">
                    Direnç 3
                  </th>
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
                  <th className="border border-sky-200 px-3 py-2 text-left">
                    Sembol
                  </th>
                  <th className="border border-sky-200 px-3 py-2 text-left">
                    Pivota Göre Fark %
                  </th>
                  <th className="border border-sky-200 px-3 py-2 text-left">
                    Son
                  </th>
                  <th className="border border-sky-200 px-3 py-2 text-left">
                    Pivot
                  </th>
                  <th className="border border-sky-200 px-3 py-2 text-left">
                    Destek 1
                  </th>
                  <th className="border border-sky-200 px-3 py-2 text-left">
                    Destek 2
                  </th>
                  <th className="border border-sky-200 px-3 py-2 text-left">
                    Destek 3
                  </th>
                  <th className="border border-sky-200 px-3 py-2 text-left">
                    Direnç 1
                  </th>
                  <th className="border border-sky-200 px-3 py-2 text-left">
                    Direnç 2
                  </th>
                  <th className="border border-sky-200 px-3 py-2 text-left">
                    Direnç 3
                  </th>
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