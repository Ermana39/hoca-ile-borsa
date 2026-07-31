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
  fark: 0.92,
  son: 13458.1,
  pivot: 13335.25,
  destek1: 13181.37,
  destek2: 13069.81,
  destek3: 12915.93,
  direnc1: 13446.81,
  direnc2: 13600.69,
  direnc3: 13712.25,
  yorum: "İlk direnç seviyesinin üstüne çıktı.",
};

const pivotVerileri: PivotRow[] = [
  {
    sembol: "AEFES",
    fark: 0.24,
    son: 21.88,
    pivot: 21.827,
    destek1: 21.573,
    destek2: 21.067,
    destek3: 20.813,
    direnc1: 22.333,
    direnc2: 22.587,
    direnc3: 23.093,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "AKBNK",
    fark: 2.01,
    son: 63.4,
    pivot: 62.15,
    destek1: 60.75,
    destek2: 59.9,
    destek3: 58.5,
    direnc1: 63,
    direnc2: 64.4,
    direnc3: 65.25,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "ASELS",
    fark: -0.22,
    son: 342.25,
    pivot: 343,
    destek1: 330,
    destek2: 322.5,
    destek3: 309.5,
    direnc1: 350.5,
    direnc2: 363.5,
    direnc3: 371,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "ASTOR",
    fark: 4.45,
    son: 295.5,
    pivot: 282.917,
    destek1: 277.833,
    destek2: 268.167,
    destek3: 263.083,
    direnc1: 292.583,
    direnc2: 297.667,
    direnc3: 307.333,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "BIMAS",
    fark: 1.19,
    son: 390.25,
    pivot: 385.667,
    destek1: 378.083,
    destek2: 373.167,
    destek3: 365.583,
    direnc1: 390.583,
    direnc2: 398.167,
    direnc3: 403.083,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "DSTKF",
    fark: -4.54,
    son: 1703,
    pivot: 1784,
    destek1: 1751,
    destek2: 1704,
    destek3: 1671,
    direnc1: 1831,
    direnc2: 1864,
    direnc3: 1911,
    yorum: "İkinci destek seviyesinin altına indi.",
  },
  {
    sembol: "EKGYO",
    fark: 0.39,
    son: 17.91,
    pivot: 17.84,
    destek1: 17.54,
    destek2: 17.35,
    destek3: 17.05,
    direnc1: 18.03,
    direnc2: 18.33,
    direnc3: 18.52,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "ENKAI",
    fark: 1.59,
    son: 87.6,
    pivot: 86.233,
    destek1: 84.267,
    destek2: 83.283,
    destek3: 81.317,
    direnc1: 87.217,
    direnc2: 89.183,
    direnc3: 90.167,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "EREGL",
    fark: -0.16,
    son: 42.54,
    pivot: 42.607,
    destek1: 41.913,
    destek2: 41.427,
    destek3: 40.733,
    direnc1: 43.093,
    direnc2: 43.787,
    direnc3: 44.273,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "FROTO",
    fark: 4.57,
    son: 80.1,
    pivot: 76.6,
    destek1: 75.15,
    destek2: 73.6,
    destek3: 72.15,
    direnc1: 78.15,
    direnc2: 79.6,
    direnc3: 81.15,
    yorum: "İkinci direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "GARAN",
    fark: -0.72,
    son: 123.4,
    pivot: 124.3,
    destek1: 121.8,
    destek2: 120.5,
    destek3: 118,
    direnc1: 125.6,
    direnc2: 128.1,
    direnc3: 129.4,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "GUBRF",
    fark: -0.42,
    son: 398.5,
    pivot: 400.167,
    destek1: 394.833,
    destek2: 388.667,
    destek3: 383.333,
    direnc1: 406.333,
    direnc2: 411.667,
    direnc3: 417.833,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "ISCTR",
    fark: 2.63,
    son: 12.47,
    pivot: 12.15,
    destek1: 11.85,
    destek2: 11.67,
    destek3: 11.37,
    direnc1: 12.33,
    direnc2: 12.63,
    direnc3: 12.81,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "KCHOL",
    fark: 2.18,
    son: 196.9,
    pivot: 192.7,
    destek1: 189.3,
    destek2: 187.1,
    destek3: 183.7,
    direnc1: 194.9,
    direnc2: 198.3,
    direnc3: 200.5,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "KRDMD",
    fark: 0.23,
    son: 41.2,
    pivot: 41.107,
    destek1: 40.273,
    destek2: 39.667,
    destek3: 38.833,
    direnc1: 41.713,
    direnc2: 42.547,
    direnc3: 43.153,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "MGROS",
    fark: 0.45,
    son: 625.5,
    pivot: 622.667,
    destek1: 611.833,
    destek2: 600.667,
    destek3: 589.833,
    direnc1: 633.833,
    direnc2: 644.667,
    direnc3: 655.833,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "PETKM",
    fark: -1.39,
    son: 19.12,
    pivot: 19.39,
    destek1: 18.58,
    destek2: 18.15,
    destek3: 17.34,
    direnc1: 19.82,
    direnc2: 20.63,
    direnc3: 21.06,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "PGSUS",
    fark: 1.75,
    son: 153,
    pivot: 150.367,
    destek1: 146.733,
    destek2: 144.767,
    destek3: 141.133,
    direnc1: 152.333,
    direnc2: 155.967,
    direnc3: 157.933,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "SAHOL",
    fark: 1.58,
    son: 84.5,
    pivot: 83.183,
    destek1: 81.217,
    destek2: 80.133,
    destek3: 78.167,
    direnc1: 84.267,
    direnc2: 86.233,
    direnc3: 87.317,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "SASA",
    fark: 0.41,
    son: 2.47,
    pivot: 2.46,
    destek1: 2.42,
    destek2: 2.36,
    destek3: 2.32,
    direnc1: 2.52,
    direnc2: 2.56,
    direnc3: 2.62,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "SISE",
    fark: 0.63,
    son: 41.74,
    pivot: 41.48,
    destek1: 41,
    destek2: 40.66,
    destek3: 40.18,
    direnc1: 41.82,
    direnc2: 42.3,
    direnc3: 42.64,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "TAVHL",
    fark: 2,
    son: 271.75,
    pivot: 266.417,
    destek1: 261.333,
    destek2: 254.917,
    destek3: 249.833,
    direnc1: 272.833,
    direnc2: 277.917,
    direnc3: 284.333,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "TCELL",
    fark: -0.92,
    son: 99.95,
    pivot: 100.883,
    destek1: 99.567,
    destek2: 97.633,
    destek3: 96.317,
    direnc1: 102.817,
    direnc2: 104.133,
    direnc3: 106.067,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "THYAO",
    fark: 1.4,
    son: 314,
    pivot: 309.667,
    destek1: 303.833,
    destek2: 299.417,
    destek3: 293.583,
    direnc1: 314.083,
    direnc2: 319.917,
    direnc3: 324.333,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "TOASO",
    fark: 3.88,
    son: 272.5,
    pivot: 262.333,
    destek1: 255.667,
    destek2: 250.833,
    destek3: 244.167,
    direnc1: 267.167,
    direnc2: 273.833,
    direnc3: 278.667,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "TRALT",
    fark: -3.66,
    son: 44.16,
    pivot: 45.84,
    destek1: 43.78,
    destek2: 41.38,
    destek3: 39.32,
    direnc1: 48.24,
    direnc2: 50.3,
    direnc3: 52.7,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "TTKOM",
    fark: 0.23,
    son: 51,
    pivot: 50.883,
    destek1: 50.017,
    destek2: 49.333,
    destek3: 48.467,
    direnc1: 51.567,
    direnc2: 52.433,
    direnc3: 53.117,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "TUPRS",
    fark: 1.11,
    son: 295.25,
    pivot: 292,
    destek1: 281,
    destek2: 274,
    destek3: 263,
    direnc1: 299,
    direnc2: 310,
    direnc3: 317,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "VAKBN",
    fark: 0.71,
    son: 29.22,
    pivot: 29.013,
    destek1: 28.587,
    destek2: 28.293,
    destek3: 27.867,
    direnc1: 29.307,
    direnc2: 29.733,
    direnc3: 30.027,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "YKBNK",
    fark: 4.71,
    son: 32.76,
    pivot: 31.287,
    destek1: 30.513,
    destek2: 30.027,
    destek3: 29.253,
    direnc1: 31.773,
    direnc2: 32.547,
    direnc3: 33.033,
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