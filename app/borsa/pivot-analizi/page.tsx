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
  fark: 3.14,
  son: 14200.2,
  pivot: 13767.46,
  destek1: 13612.48,
  destek2: 13520.99,
  destek3: 13366.01,
  direnc1: 13858.95,
  direnc2: 14013.93,
  direnc3: 14105.42,
  yorum: "Üçüncü direnç seviyesinin üstüne çıktı.",
};

const pivotVerileri: PivotRow[] = [
  {
    sembol: "AEFES",
    fark: 3.68,
    son: 20.18,
    pivot: 19.463,
    destek1: 19.177,
    destek2: 18.943,
    destek3: 18.657,
    direnc1: 19.697,
    direnc2: 19.983,
    direnc3: 20.217,
    yorum: "İkinci direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "AKBNK",
    fark: 2.38,
    son: 65.95,
    pivot: 64.417,
    destek1: 62.683,
    destek2: 61.667,
    destek3: 59.933,
    direnc1: 65.433,
    direnc2: 67.167,
    direnc3: 68.183,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "ASELS",
    fark: 4.98,
    son: 407.75,
    pivot: 388.417,
    destek1: 378.583,
    destek2: 373.167,
    destek3: 363.333,
    direnc1: 393.833,
    direnc2: 403.667,
    direnc3: 409.083,
    yorum: "İkinci direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "ASTOR",
    fark: 11.53,
    son: 363.5,
    pivot: 325.917,
    destek1: 316.083,
    destek2: 301.667,
    destek3: 291.833,
    direnc1: 340.333,
    direnc2: 350.167,
    direnc3: 364.583,
    yorum: "İkinci direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "BIMAS",
    fark: 1.96,
    son: 380.75,
    pivot: 373.417,
    destek1: 367.583,
    destek2: 363.917,
    destek3: 358.083,
    direnc1: 377.083,
    direnc2: 382.917,
    direnc3: 386.583,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "DSTKF",
    fark: 1.47,
    son: 2023,
    pivot: 1993.667,
    destek1: 1887.333,
    destek2: 1824.667,
    destek3: 1718.333,
    direnc1: 2056.333,
    direnc2: 2162.667,
    direnc3: 2225.333,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "EKGYO",
    fark: 3.2,
    son: 19.97,
    pivot: 19.35,
    destek1: 18.97,
    destek2: 18.73,
    destek3: 18.35,
    direnc1: 19.59,
    direnc2: 19.97,
    direnc3: 20.21,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "ENKAI",
    fark: -0.12,
    son: 99.2,
    pivot: 99.317,
    destek1: 96.833,
    destek2: 95.167,
    destek3: 92.683,
    direnc1: 100.983,
    direnc2: 103.467,
    direnc3: 105.133,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "EREGL",
    fark: 3.05,
    son: 41,
    pivot: 39.787,
    destek1: 39.393,
    destek2: 38.787,
    destek3: 38.393,
    direnc1: 40.393,
    direnc2: 40.787,
    direnc3: 41.393,
    yorum: "İkinci direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "FROTO",
    fark: 4.81,
    son: 88.9,
    pivot: 84.8166,
    destek1: 82.7833,
    destek2: 80.3666,
    destek3: 78.3333,
    direnc1: 87.2333,
    direnc2: 89.2666,
    direnc3: 91.6833,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "GARAN",
    fark: 3.93,
    son: 128.8,
    pivot: 123.933,
    destek1: 121.267,
    destek2: 119.433,
    destek3: 116.767,
    direnc1: 125.767,
    direnc2: 128.433,
    direnc3: 130.267,
    yorum: "İkinci direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "GUBRF",
    fark: 0.73,
    son: 550.5,
    pivot: 546.5,
    destek1: 527.5,
    destek2: 516,
    destek3: 497,
    direnc1: 558,
    direnc2: 577,
    direnc3: 588.5,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "ISCTR",
    fark: 2.97,
    son: 13.63,
    pivot: 13.237,
    destek1: 12.943,
    destek2: 12.787,
    destek3: 12.493,
    direnc1: 13.393,
    direnc2: 13.687,
    direnc3: 13.843,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "KCHOL",
    fark: 2.49,
    son: 193.3,
    pivot: 188.6,
    destek1: 183.4,
    destek2: 180.8,
    destek3: 175.6,
    direnc1: 191.2,
    direnc2: 196.4,
    direnc3: 199,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "KRDMD",
    fark: 1.1,
    son: 41.02,
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
    fark: 1.71,
    son: 676,
    pivot: 664.667,
    destek1: 656.333,
    destek2: 648.667,
    destek3: 640.333,
    direnc1: 672.333,
    direnc2: 680.667,
    direnc3: 688.333,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "PETKM",
    fark: 4.01,
    son: 23.7,
    pivot: 22.787,
    destek1: 22.433,
    destek2: 21.807,
    destek3: 21.453,
    direnc1: 23.413,
    direnc2: 23.767,
    direnc3: 24.393,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "PGSUS",
    fark: 1.49,
    son: 172.2,
    pivot: 169.6666,
    destek1: 166.8333,
    destek2: 165.2666,
    destek3: 162.4333,
    direnc1: 171.2333,
    direnc2: 174.0666,
    direnc3: 175.6333,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "SAHOL",
    fark: 3.36,
    son: 93.3,
    pivot: 90.267,
    destek1: 87.533,
    destek2: 86.067,
    destek3: 83.333,
    direnc1: 91.733,
    direnc2: 94.467,
    direnc3: 95.933,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "SASA",
    fark: 1.85,
    son: 2.75,
    pivot: 2.7,
    destek1: 2.65,
    destek2: 2.61,
    destek3: 2.56,
    direnc1: 2.74,
    direnc2: 2.7899,
    direnc3: 2.8299,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "SISE",
    fark: 2.99,
    son: 47.1,
    pivot: 45.733,
    destek1: 44.887,
    destek2: 44.273,
    destek3: 43.427,
    direnc1: 46.347,
    direnc2: 47.193,
    direnc3: 47.807,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "TAVHL",
    fark: 2.87,
    son: 265.5,
    pivot: 258.083,
    destek1: 252.667,
    destek2: 248.333,
    destek3: 242.917,
    direnc1: 262.417,
    direnc2: 267.833,
    direnc3: 272.167,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "TCELL",
    fark: 5,
    son: 108.5,
    pivot: 103.333,
    destek1: 101.267,
    destek2: 99.933,
    destek3: 97.867,
    direnc1: 104.667,
    direnc2: 106.733,
    direnc3: 108.067,
    yorum: "Üçüncü direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "THYAO",
    fark: 1.93,
    son: 300,
    pivot: 294.3333,
    destek1: 288.1666,
    destek2: 284.8333,
    destek3: 278.6666,
    direnc1: 297.6666,
    direnc2: 303.8333,
    direnc3: 307.1666,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "TOASO",
    fark: 1.42,
    son: 302.5,
    pivot: 298.25,
    destek1: 290.25,
    destek2: 284.5,
    destek3: 276.5,
    direnc1: 304,
    direnc2: 312,
    direnc3: 317.75,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "TRALT",
    fark: 3.08,
    son: 45.24,
    pivot: 43.887,
    destek1: 42.333,
    destek2: 41.367,
    destek3: 39.813,
    direnc1: 44.853,
    direnc2: 46.407,
    direnc3: 47.373,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "TTKOM",
    fark: 2.93,
    son: 63.15,
    pivot: 61.35,
    destek1: 60.4,
    destek2: 59.8,
    destek3: 58.85,
    direnc1: 61.95,
    direnc2: 62.9,
    direnc3: 63.5,
    yorum: "İkinci direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "TUPRS",
    fark: 3.41,
    son: 250.25,
    pivot: 242,
    destek1: 238.7,
    destek2: 232.5,
    destek3: 229.2,
    direnc1: 248.2,
    direnc2: 251.5,
    direnc3: 257.7,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "VAKBN",
    fark: 8.24,
    son: 33.88,
    pivot: 31.3,
    destek1: 30.56,
    destek2: 30.04,
    destek3: 29.3,
    direnc1: 31.82,
    direnc2: 32.56,
    direnc3: 33.08,
    yorum: "Üçüncü direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "YKBNK",
    fark: 4.05,
    son: 34.98,
    pivot: 33.62,
    destek1: 33,
    destek2: 32.58,
    destek3: 31.96,
    direnc1: 34.04,
    direnc2: 34.66,
    direnc3: 35.08,
    yorum: "İkinci direnç seviyesinin üstüne çıktı.",
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