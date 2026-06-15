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
  sembol: "F_XU0300626",
  fark: 4.13,
  son: 16733.69,
  pivot: 16070,
  destek1: 15803,
  destek2: 15516,
  destek3: 15249,
  direnc1: 16357,
  direnc2: 16624,
  direnc3: 16911,
  yorum: "İkinci direnç seviyesinin üstüne çıktı.",
};

const pivotVerileri: PivotRow[] = [
  {
    sembol: "AEFES",
    fark: 3.30,
    son: 21.30,
    pivot: 20.620,
    destek1: 20.080,
    destek2: 19.760,
    destek3: 19.220,
    direnc1: 20.940,
    direnc2: 21.48,
    direnc3: 21.8,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "AKBNK",
    fark: 7.79,
    son: 76.75,
    pivot: 71.200,
    destek1: 69.8,
    destek2: 67.00,
    destek3: 65.6,
    direnc1: 74.000,
    direnc2: 75.400,
    direnc3: 78.200,
    yorum: "İkinci direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "ASELS",
    fark: 0.71,
    son: 375.75,
    pivot: 373.08333,
    destek1: 363.4166,
    destek2: 355.5833,
    destek3: 345.9166,
    direnc1: 380.9166,
    direnc2: 390.5833,
    direnc3: 398.4166,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "ASTOR",
    fark: 3.52,
    son: 287.00,
    pivot: 277.250,
    destek1: 253.750,
    destek2: 242.000,
    destek3: 218.500,
    direnc1: 289.000,
    direnc2: 312.500,
    direnc3: 324.250,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "BIMAS",
    fark: 3.16,
    son: 394.00,
    pivot: 381.9166,
    destek1: 373.8333,
    destek2: 367.6666,
    destek3: 359.5833,
    direnc1: 388.08333,
    direnc2: 396.1666,
    direnc3: 402.3333,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "DSTKF",
    fark: 8.42,
    son: 2810.00,
    pivot: 2591.667,
    destek1: 2560.833,
    destek2: 2509.167,
    destek3: 2478.333,
    direnc1: 2643.333,
    direnc2: 2674.167,
    direnc3: 2725.833,
    yorum: "Üçüncü direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "EKGYO",
    fark: 5.07,
    son: 20.86,
    pivot: 19.8533,
    destek1: 19.4466,
    destek2: 18.9833,
    destek3: 18.5766,
    direnc1: 20.3166,
    direnc2: 20.7233,
    direnc3: 21.1866,
    yorum: "İkinci direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "ENKAI",
    fark: 2.58,
    son: 96.10,
    pivot: 93.6833,
    destek1: 92.0666,
    destek2: 91.1333,
    destek3: 89.5166,
    direnc1: 94.6166,
    direnc2: 96.2333,
    direnc3: 97.1666,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "EREGL",
    fark: 2.12,
    son: 40.20,
    pivot: 39.367,
    destek1: 38.633,
    destek2: 37.907,
    destek3: 37.173,
    direnc1: 40.093,
    direnc2: 40.827,
    direnc3: 41.553,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "FROTO",
    fark: 3.21,
    son: 90.10,
    pivot: 87.300,
    destek1: 85.2999,
    destek2: 83.8999,
    destek3: 81.8999,
    direnc1: 88.6999,
    direnc2: 90.700,
    direnc3: 92.100,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "GARAN",
    fark: 4.11,
    son: 141.00,
    pivot: 135.433,
    destek1: 132.367,
    destek2: 128.833,
    destek3: 125.767,
    direnc1: 138.967,
    direnc2: 142.033,
    direnc3: 145.567,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "GUBRF",
    fark: 8.58,
    son: 526.50,
    pivot: 484.9166,
    destek1: 464.8333,
    destek2: 450.9166,
    destek3: 430.8333,
    direnc1: 498.8333,
    direnc2: 518.9166,
    direnc3: 532.8333,
    yorum: "İkinci direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "ISCTR",
    fark: 4.03,
    son: 14.89,
    pivot: 14.313,
    destek1: 14.017,
    destek2: 13.723,
    destek3: 13.427,
    direnc1: 14.607,
    direnc2: 14.903,
    direnc3: 15.197,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "KCHOL",
    fark: 4.44,
    son: 196.80,
    pivot: 188.433,
    destek1: 184.767,
    destek2: 182.033,
    destek3: 178.367,
    direnc1: 191.167,
    direnc2: 194.833,
    direnc3: 197.567,
    yorum: "İkinci direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "KRDMD",
    fark: 3.50,
    son: 41.04,
    pivot: 39.653,
    destek1: 38.387,
    destek2: 37.433,
    destek3: 36.167,
    direnc1: 40.607,
    direnc2: 41.873,
    direnc3: 42.827,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "MGROS",
    fark: 3.99,
    son: 699.00,
    pivot: 672.167,
    destek1: 664.333,
    destek2: 656.167,
    destek3: 648.333,
    direnc1: 680.333,
    direnc2: 688.167,
    direnc3: 696.333,
    yorum: "Üçüncü direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "PETKM",
    fark: -0.10,
    son: 19.35,
    pivot: 19.370,
    destek1: 19.150,
    destek2: 18.910,
    destek3: 18.690,
    direnc1: 19.610,
    direnc2: 19.83,
    direnc3: 20.07,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "PGSUS",
    fark: 5.57,
    son: 181.20,
    pivot: 171.633,
    destek1: 168.867,
    destek2: 165.733,
    destek3: 162.967,
    direnc1: 174.767,
    direnc2: 177.533,
    direnc3: 180.667,
    yorum: "Üçüncü direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "SAHOL",
    fark: 6.38,
    son: 101.20,
    pivot: 95.133,
    destek1: 93.817,
    destek2: 91.683,
    destek3: 90.367,
    direnc1: 97.267,
    direnc2: 98.583,
    direnc3: 100.717,
    yorum: "Üçüncü direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "SASA",
    fark: 2.68,
    son: 2.69,
    pivot: 2.6199,
    destek1: 2.5599,
    destek2: 2.5199,
    destek3: 2.4599,
    direnc1: 2.660,
    direnc2: 2.720,
    direnc3: 2.760,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "SISE",
    fark: 3.46,
    son: 46.40,
    pivot: 44.847,
    destek1: 44.053,
    destek2: 43.347,
    destek3: 42.553,
    direnc1: 45.553,
    direnc2: 46.347,
    direnc3: 47.053,
    yorum: "İkinci direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "TAVHL",
    fark: 6.96,
    son: 292.00,
    pivot: 273,
    destek1: 267.25,
    destek2: 259.5,
    destek3: 253.75,
    direnc1: 280.75,
    direnc2: 286.5,
    direnc3: 294.25,
    yorum: "İkinci direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "TCELL",
    fark: 4.52,
    son: 114.90,
    pivot: 109.933,
    destek1: 108.467,
    destek2: 106.233,
    destek3: 104.767,
    direnc1: 112.167,
    direnc2: 113.633,
    direnc3: 115.867,
    yorum: "İkinci direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "THYAO",
    fark: 6.25,
    son: 325.75,
    pivot: 306.5833,
    destek1: 302.1666,
    destek2: 296.5833,
    destek3: 292.1666,
    direnc1: 312.1666,
    direnc2: 316.5833,
    direnc3: 322.1666,
    yorum: "Üçüncü direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "TOASO",
    fark: 7.41,
    son: 315.25,
    pivot: 293.5,
    destek1: 288.75,
    destek2: 282,
    destek3: 277.25,
    direnc1: 300.25,
    direnc2: 305,
    direnc3: 311.75,
    yorum: "Üçüncü direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "TRALT",
    fark: 6.97,
    son: 46.52,
    pivot: 43.487,
    destek1: 42.513,
    destek2: 41.687,
    destek3: 40.713,
    direnc1: 44.313,
    direnc2: 45.287,
    direnc3: 46.113,
    yorum: "Üçüncü direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "TTKOM",
    fark: 2.12,
    son: 65.05,
    pivot: 63.700,
    destek1: 62.950,
    destek2: 61.8,
    destek3: 61.05,
    direnc1: 64.850,
    direnc2: 65.600,
    direnc3: 66.750,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "TUPRS",
    fark: -0.59,
    son: 231.90,
    pivot: 233.2666,
    destek1: 230.8333,
    destek2: 227.8666,
    destek3: 225.4333,
    direnc1: 236.2333,
    direnc2: 238.6666,
    direnc3: 241.6333,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "VAKBN",
    fark: 3.79,
    son: 33.98,
    pivot: 32.740,
    destek1: 31.840,
    destek2: 31.060,
    destek3: 30.160,
    direnc1: 33.520,
    direnc2: 34.420,
    direnc3: 35.200,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "YKBNK",
    fark: 8.05,
    son: 40.46,
    pivot: 37.4466,
    destek1: 36.5933,
    destek2: 35.08666,
    destek3: 34.2333,
    direnc1: 38.9533,
    direnc2: 39.8066,
    direnc3: 41.3133,
    yorum: "İkinci direnç seviyesinin üstüne çıktı.",
  },
];

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