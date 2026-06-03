export const metadata = {
  title: "Pivot Analizi | Hoca İle Borsa",
  description:
    "Pivot, destek ve direnç seviyelerine göre hisselerin teknik görünümünü tablo halinde inceleyin.",
  alternates: {
    canonical: "https://www.hocaileborsa.com/borsa/pivot-analizi",
  },
};

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
  fark: -0.72,
  son: 13965.65,
  pivot: 14066.31,
  destek1: 13932.42,
  destek2: 13664.64,
  destek3: 13530.75,
  direnc1: 14334.09,
  direnc2: 14467.98,
  direnc3: 14735.76,
  yorum: "Pivot değerinin altında seyrediyor.",
};

const pivotVerileri: PivotRow[] = [
  {
    sembol: "AEFES",
    fark: 0.82,
    son: 20.12,
    pivot: 19.957,
    destek1: 19.693,
    destek2: 19.207,
    destek3: 18.943,
    direnc1: 20.443,
    direnc2: 20.707,
    direnc3: 21.193,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "AKBNK",
    fark: -1.24,
    son: 64.85,
    pivot: 65.667,
    destek1: 64.783,
    destek2: 63.617,
    destek3: 62.733,
    direnc1: 66.833,
    direnc2: 67.717,
    direnc3: 68.883,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "ASELS",
    fark: -4.07,
    son: 383.5,
    pivot: 399.75,
    destek1: 391,
    destek2: 374.25,
    destek3: 365.5,
    direnc1: 416.5,
    direnc2: 425.25,
    direnc3: 442,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "ASTOR",
    fark: 1.58,
    son: 358.5,
    pivot: 352.9166,
    destek1: 342.3333,
    destek2: 321.1666,
    destek3: 310.5833,
    direnc1: 374.08333,
    direnc2: 384.6666,
    direnc3: 405.8333,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "BIMAS",
    fark: 0.88,
    son: 381,
    pivot: 377.6666,
    destek1: 373.3333,
    destek2: 365.9166,
    destek3: 361.5833,
    direnc1: 385.08333,
    direnc2: 389.4166,
    direnc3: 396.8333,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "DSTKF",
    fark: 10.52,
    son: 2200,
    pivot: 1990.667,
    destek1: 1955.333,
    destek2: 1887.667,
    destek3: 1852.333,
    direnc1: 2058.333,
    direnc2: 2093.667,
    direnc3: 2161.333,
    yorum: "Üçüncü direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "EKGYO",
    fark: -0.05,
    son: 19.8,
    pivot: 19.81,
    destek1: 19.56,
    destek2: 19.15,
    destek3: 18.9,
    direnc1: 20.22,
    direnc2: 20.47,
    direnc3: 20.88,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "ENKAI",
    fark: -3.28,
    son: 95.9,
    pivot: 99.15,
    destek1: 98.55,
    destek2: 97.9,
    destek3: 97.3,
    direnc1: 99.8,
    direnc2: 100.4,
    direnc3: 101.05,
    yorum: "Üçüncü destek seviyesinin altına indi.",
  },
  {
    sembol: "EREGL",
    fark: 0.08,
    son: 40.3,
    pivot: 40.266,
    destek1: 39.963,
    destek2: 39.477,
    destek3: 39.174,
    direnc1: 40.753,
    direnc2: 41.055,
    direnc3: 41.542,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "FROTO",
    fark: 0.85,
    son: 88.95,
    pivot: 88.2,
    destek1: 87.5,
    destek2: 86.1,
    destek3: 85.4,
    direnc1: 89.6,
    direnc2: 90.3,
    direnc3: 91.7,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "GARAN",
    fark: -1.38,
    son: 125.9,
    pivot: 127.667,
    destek1: 125.333,
    destek2: 121.867,
    destek3: 119.533,
    direnc1: 131.133,
    direnc2: 133.467,
    direnc3: 136.933,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "GUBRF",
    fark: -1.22,
    son: 540,
    pivot: 546.667,
    destek1: 537.333,
    destek2: 524.167,
    destek3: 514.833,
    direnc1: 559.833,
    direnc2: 569.167,
    direnc3: 582.333,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "ISCTR",
    fark: -0.84,
    son: 13.39,
    pivot: 13.503,
    destek1: 13.327,
    destek2: 13.023,
    destek3: 12.847,
    direnc1: 13.807,
    direnc2: 13.983,
    direnc3: 14.287,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "KCHOL",
    fark: -1.6,
    son: 188.6,
    pivot: 191.667,
    destek1: 189.333,
    destek2: 185.367,
    destek3: 183.033,
    direnc1: 195.633,
    direnc2: 197.967,
    direnc3: 201.933,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "KRDMD",
    fark: -1.27,
    son: 40.48,
    pivot: 41,
    destek1: 40.54,
    destek2: 40.06,
    destek3: 39.6,
    direnc1: 41.48,
    direnc2: 41.94,
    direnc3: 42.42,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "MGROS",
    fark: -0.62,
    son: 667,
    pivot: 671.167,
    destek1: 666.333,
    destek2: 656.667,
    destek3: 651.833,
    direnc1: 680.833,
    direnc2: 685.667,
    direnc3: 695.333,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "PETKM",
    fark: -3.23,
    son: 22.54,
    pivot: 23.293,
    destek1: 22.847,
    destek2: 21.993,
    destek3: 21.547,
    direnc1: 24.147,
    direnc2: 24.593,
    direnc3: 25.447,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "PGSUS",
    fark: -0.89,
    son: 170,
    pivot: 171.533,
    destek1: 170.06666,
    destek2: 167.9333,
    destek3: 166.4666,
    direnc1: 173.6666,
    direnc2: 175.1333,
    direnc3: 177.2666,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "SAHOL",
    fark: -2.14,
    son: 90.7,
    pivot: 92.683,
    destek1: 91.867,
    destek2: 90.433,
    destek3: 89.617,
    direnc1: 94.117,
    direnc2: 94.933,
    direnc3: 96.367,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "SASA",
    fark: -4.61,
    son: 2.63,
    pivot: 2.757,
    destek1: 2.723,
    destek2: 2.697,
    destek3: 2.663,
    direnc1: 2.783,
    direnc2: 2.817,
    direnc3: 2.843,
    yorum: "Üçüncü destek seviyesinin altına indi.",
  },
  {
    sembol: "SISE",
    fark: -1,
    son: 46.32,
    pivot: 46.787,
    destek1: 46.233,
    destek2: 45.367,
    destek3: 44.813,
    direnc1: 47.653,
    direnc2: 48.207,
    direnc3: 49.073,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "TAVHL",
    fark: -0.97,
    son: 262.75,
    pivot: 265.333,
    destek1: 261.917,
    destek2: 258.333,
    destek3: 254.917,
    direnc1: 268.917,
    direnc2: 272.333,
    direnc3: 275.917,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "TCELL",
    fark: -1.12,
    son: 105.8,
    pivot: 107,
    destek1: 105.1,
    destek2: 101.7,
    destek3: 99.8,
    direnc1: 110.4,
    direnc2: 112.3,
    direnc3: 115.7,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "THYAO",
    fark: -0.39,
    son: 297,
    pivot: 298.167,
    destek1: 296.083,
    destek2: 292.167,
    destek3: 290.083,
    direnc1: 302.083,
    direnc2: 304.167,
    direnc3: 308.083,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "TOASO",
    fark: -1.24,
    son: 299,
    pivot: 302.75,
    destek1: 298.25,
    destek2: 294,
    destek3: 289.5,
    direnc1: 307,
    direnc2: 311.5,
    direnc3: 315.75,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "TRALT",
    fark: 4.81,
    son: 47.1,
    pivot: 44.94,
    destek1: 44.48,
    destek2: 43.72,
    destek3: 43.26,
    direnc1: 45.7,
    direnc2: 46.16,
    direnc3: 46.92,
    yorum: "Üçüncü direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "TTKOM",
    fark: 0.4,
    son: 62.9,
    pivot: 62.65,
    destek1: 61.95,
    destek2: 60.75,
    destek3: 60.05,
    direnc1: 63.85,
    direnc2: 64.55,
    direnc3: 65.75,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "TUPRS",
    fark: -3.38,
    son: 237.9,
    pivot: 246.233,
    destek1: 242.2166,
    destek2: 234.1833,
    destek3: 230.1666,
    direnc1: 254.2666,
    direnc2: 258.2833,
    direnc3: 266.3166,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "VAKBN",
    fark: -2.13,
    son: 32.46,
    pivot: 33.167,
    destek1: 32.213,
    destek2: 30.547,
    destek3: 29.593,
    direnc1: 34.833,
    direnc2: 35.787,
    direnc3: 37.453,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "YKBNK",
    fark: -1.06,
    son: 34.38,
    pivot: 34.747,
    destek1: 34.113,
    destek2: 33.247,
    destek3: 32.613,
    direnc1: 35.613,
    direnc2: 36.247,
    direnc3: 37.113,
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