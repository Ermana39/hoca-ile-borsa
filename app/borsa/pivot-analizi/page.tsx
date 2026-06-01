export const metadata = {
  title: "Pivot Analizi | Hoca İle Borsa",
  description: "Pivot, destek ve direnç seviyelerine göre hisselerin teknik görünümünü tablo halinde inceleyin.",
  alternates: { canonical: "https://www.hocaileborsa.com/borsa/pivot-analizi" },
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
  fark: -0.33,
  son: 13703.96,
  pivot: 13748.78,
  destek1: 13576.72,
  destek2: 13490.68,
  destek3: 13318.62,
  direnc1: 13834.82,
  direnc2: 14006.88,
  direnc3: 14092.92,
  yorum: "Pivot değerinin altında seyrediyor.",
};

const pivotVerileri: PivotRow[] = [
  {
    sembol: "AEFES",
    fark: -0.02,
    son: 19.41,
    pivot: 19.413,
    destek1: 19.167,
    destek2: 19.033,
    destek3: 18.787,
    direnc1: 19.547,
    direnc2: 19.793,
    direnc3: 19.927,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "AKBNK",
    fark: -1.29,
    son: 63.7,
    pivot: 64.533,
    destek1: 63.467,
    destek2: 62.933,
    destek3: 61.867,
    direnc1: 65.067,
    direnc2: 66.133,
    direnc3: 66.667,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "ASELS",
    fark: -0.88,
    son: 384,
    pivot: 387.417,
    destek1: 373.083,
    destek2: 365.917,
    destek3: 351.583,
    direnc1: 394.583,
    direnc2: 408.917,
    direnc3: 416.083,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "ASTOR",
    fark: 2.32,
    son: 330.5,
    pivot: 323,
    destek1: 302.5,
    destek2: 292.5,
    destek3: 271.75,
    direnc1: 333.25,
    direnc2: 353.75,
    direnc3: 364,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "BIMAS",
    fark: -1.04,
    son: 371.25,
    pivot: 375.166,
    destek1: 369.583,
    destek2: 366.166,
    destek3: 360.583,
    direnc1: 378.583,
    direnc2: 384.166,
    direnc3: 387.583,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "DSTKF",
    fark: -7.33,
    son: 1950,
    pivot: 2104.333,
    destek1: 2038.667,
    destek2: 1972.333,
    destek3: 1906.667,
    direnc1: 2170.667,
    direnc2: 2236.333,
    direnc3: 2302.667,
    yorum: "İkinci destek seviyesinin altına indi.",
  },
  {
    sembol: "EKGYO",
    fark: -0.41,
    son: 19.21,
    pivot: 19.29,
    destek1: 18.91,
    destek2: 18.72,
    destek3: 18.34,
    direnc1: 19.48,
    direnc2: 19.86,
    direnc3: 20.05,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "ENKAI",
    fark: -0.94,
    son: 98.5,
    pivot: 99.433,
    destek1: 98.367,
    destek2: 96.23,
    destek3: 95.167,
    direnc1: 101.567,
    direnc2: 102.633,
    direnc3: 104.767,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "EREGL",
    fark: 1.49,
    son: 40,
    pivot: 39.413,
    destek1: 38.947,
    destek2: 38.713,
    destek3: 38.247,
    direnc1: 39.647,
    direnc2: 40.113,
    direnc3: 40.347,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "FROTO",
    fark: -0.16,
    son: 85.2,
    pivot: 85.333,
    destek1: 82.9666,
    destek2: 81.7833,
    destek3: 79.4166,
    direnc1: 86.5166,
    direnc2: 88.8833,
    direnc3: 90.06666,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "GARAN",
    fark: -0.65,
    son: 123.1,
    pivot: 123.9,
    destek1: 121.9,
    destek2: 120,
    destek3: 118.9,
    direnc1: 124.9,
    direnc2: 126.9,
    direnc3: 127.9,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "GUBRF",
    fark: -2.82,
    son: 539,
    pivot: 554.667,
    destek1: 537.333,
    destek2: 524.667,
    destek3: 507.333,
    direnc1: 567.333,
    direnc2: 584.667,
    direnc3: 597.333,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "ISCTR",
    fark: -1.03,
    son: 13.1,
    pivot: 13.237,
    destek1: 12.943,
    destek2: 12.787,
    destek3: 12.493,
    direnc1: 13.393,
    direnc2: 13.687,
    direnc3: 13.843,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "KCHOL",
    fark: -1.38,
    son: 186,
    pivot: 188.6,
    destek1: 183.4,
    destek2: 180.8,
    destek3: 175.6,
    direnc1: 191.2,
    direnc2: 196.4,
    direnc3: 199,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "KRDMD",
    fark: 0.02,
    son: 40.58,
    pivot: 40.573,
    destek1: 39.727,
    destek2: 38.873,
    destek3: 38.027,
    direnc1: 41.427,
    direnc2: 42.273,
    direnc3: 43.127,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "MGROS",
    fark: -0.33,
    son: 664,
    pivot: 666.167,
    destek1: 651.833,
    destek2: 644.667,
    destek3: 630.333,
    direnc1: 673.333,
    direnc2: 687.667,
    direnc3: 694.833,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "PETKM",
    fark: 3.5,
    son: 23.06,
    pivot: 22.28,
    destek1: 21.92,
    destek2: 21.74,
    destek3: 21.38,
    direnc1: 22.46,
    direnc2: 22.82,
    direnc3: 23,
    yorum: "Üçüncü direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "PGSUS",
    fark: -1.5,
    son: 168.4,
    pivot: 170.967,
    destek1: 169.333,
    destek2: 168.637,
    destek3: 166.633,
    direnc1: 171.833,
    direnc2: 173.567,
    direnc3: 174.433,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "SAHOL",
    fark: -2.32,
    son: 89,
    pivot: 91.117,
    destek1: 90.233,
    destek2: 88.467,
    destek3: 87.583,
    direnc1: 92.883,
    direnc2: 93.767,
    direnc3: 95.533,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "SASA",
    fark: 1.26,
    son: 2.69,
    pivot: 2.6566,
    destek1: 2.6033,
    destek2: 2.5666,
    destek3: 2.5133,
    direnc1: 2.6933,
    direnc2: 2.7466,
    direnc3: 2.7833,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "SISE",
    fark: -0.13,
    son: 45.5,
    pivot: 45.561,
    destek1: 44.864,
    destek2: 44.51,
    destek3: 43.817,
    direnc1: 45.91,
    direnc2: 46.608,
    direnc3: 46.956,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "TAVHL",
    fark: 1.11,
    son: 257,
    pivot: 254.167,
    destek1: 249.333,
    destek2: 246.917,
    destek3: 242.083,
    direnc1: 256.583,
    direnc2: 261.417,
    direnc3: 263.833,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "TCELL",
    fark: -0.36,
    son: 102.6,
    pivot: 102.9666,
    destek1: 99.0333,
    destek2: 97.0666,
    destek3: 93.1333,
    direnc1: 104.933,
    direnc2: 108.866,
    direnc3: 110.8333,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "THYAO",
    fark: -1.74,
    son: 291.5,
    pivot: 296.666,
    destek1: 295.333,
    destek2: 293.166,
    destek3: 292.583,
    direnc1: 298.0833,
    direnc2: 299.4166,
    direnc3: 300.8333,
    yorum: "Üçüncü destek seviyesinin altına indi.",
  },
  {
    sembol: "TOASO",
    fark: -0.81,
    son: 296,
    pivot: 298.417,
    destek1: 293.583,
    destek2: 291.167,
    destek3: 286.333,
    direnc1: 300.833,
    direnc2: 305.667,
    direnc3: 308.083,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "TRALT",
    fark: -2.01,
    son: 43.3,
    pivot: 44.187,
    destek1: 42.813,
    destek2: 42.087,
    destek3: 40.713,
    direnc1: 44.913,
    direnc2: 46.287,
    direnc3: 47.013,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "TTKOM",
    fark: -0.57,
    son: 61,
    pivot: 61.35,
    destek1: 60.3,
    destek2: 59.35,
    destek3: 58.3,
    direnc1: 62.3,
    direnc2: 63.35,
    direnc3: 64.3,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "TUPRS",
    fark: 4.24,
    son: 244.9,
    pivot: 234.933,
    destek1: 233.467,
    destek2: 230.733,
    destek3: 229.267,
    direnc1: 237.667,
    direnc2: 239.133,
    direnc3: 241.867,
    yorum: "Üçüncü direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "VAKBN",
    fark: -0.22,
    son: 31.08,
    pivot: 31.147,
    destek1: 30.513,
    destek2: 30.187,
    destek3: 29.553,
    direnc1: 31.473,
    direnc2: 32.107,
    direnc3: 32.433,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "YKBNK",
    fark: 0.54,
    son: 33.42,
    pivot: 33.24,
    destek1: 32.92,
    destek2: 32.68,
    destek3: 32.36,
    direnc1: 33.48,
    direnc2: 33.8,
    direnc3: 34.04,
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