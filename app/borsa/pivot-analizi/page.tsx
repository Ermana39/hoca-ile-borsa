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
  fark: -1.20,
  son: 14105.44,
  pivot: 14276.840,
  destek1: 14092.130,
  destek2: 13994.290,
  destek3: 13809.580,
  direnc1: 14374.680,
  direnc2: 14559.390,
  direnc3: 14657.230,
  yorum: "Pivot değerinin altında seyrediyor.",
};

const pivotVerileri: PivotRow[] = [
  {
    sembol: "AEFES",
    fark: -2.83,
    son: 19.71,
    pivot: 20.283,
    destek1: 19.847,
    destek2: 19.553,
    destek3: 19.117,
    direnc1: 20.577,
    direnc2: 21.013,
    direnc3: 21.307,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "AKBNK",
    fark: -1.98,
    son: 70.2,
    pivot: 71.617,
    destek1: 69.633,
    destek2: 68.717,
    destek3: 66.783,
    direnc1: 72.583,
    direnc2: 74.517,
    direnc3: 75.483,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "ASELS",
    fark: -5.7,
    son: 358.75,
    pivot: 380.417,
    destek1: 371.833,
    destek2: 366.667,
    destek3: 358.083,
    direnc1: 385.583,
    direnc2: 394.167,
    direnc3: 399.333,
    yorum: "İkinci destek seviyesinin altına indi.",
  },
  {
    sembol: "ASTOR",
    fark: -4.04,
    son: 304.75,
    pivot: 317.583,
    destek1: 310.417,
    destek2: 303.333,
    destek3: 296.167,
    direnc1: 324.667,
    direnc2: 331.833,
    direnc3: 338.917,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "BIMAS",
    fark: -2.04,
    son: 365.0,
    pivot: 372.583,
    destek1: 368.167,
    destek2: 360.583,
    destek3: 356.167,
    direnc1: 380.167,
    direnc2: 384.583,
    direnc3: 392.167,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "DSTKF",
    fark: -0.58,
    son: 3835.0,
    pivot: 3857.5,
    destek1: 3755.0,
    destek2: 3690.0,
    destek3: 3587.5,
    direnc1: 3922.5,
    direnc2: 4025.0,
    direnc3: 4090.0,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "EKGYO",
    fark: -0.75,
    son: 20.36,
    pivot: 20.513,
    destek1: 20.187,
    destek2: 19.973,
    destek3: 19.647,
    direnc1: 20.727,
    direnc2: 21.053,
    direnc3: 21.267,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "ENKAI",
    fark: -1.43,
    son: 88.5,
    pivot: 89.783,
    destek1: 88.567,
    destek2: 87.533,
    destek3: 86.317,
    direnc1: 90.817,
    direnc2: 92.033,
    direnc3: 93.067,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "EREGL",
    fark: -0.28,
    son: 40.06,
    pivot: 40.173,
    destek1: 39.207,
    destek2: 38.473,
    destek3: 37.507,
    direnc1: 40.907,
    direnc2: 41.873,
    direnc3: 42.607,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "FROTO",
    fark: -0.61,
    son: 80.85,
    pivot: 81.35,
    destek1: 80.15,
    destek2: 79.5,
    destek3: 78.3,
    direnc1: 82.0,
    direnc2: 83.2,
    direnc3: 83.85,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "GARAN",
    fark: -0.99,
    son: 130.1,
    pivot: 131.4,
    destek1: 128.4,
    destek2: 126.4,
    destek3: 123.4,
    direnc1: 133.4,
    direnc2: 136.4,
    direnc3: 138.4,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "GUBRF",
    fark: -1.02,
    son: 437.0,
    pivot: 441.5,
    destek1: 424.75,
    destek2: 415.75,
    destek3: 399.0,
    direnc1: 450.5,
    direnc2: 467.25,
    direnc3: 476.25,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "ISCTR",
    fark: -1.7,
    son: 13.9,
    pivot: 14.14,
    destek1: 13.8,
    destek2: 13.52,
    destek3: 13.18,
    direnc1: 14.42,
    direnc2: 14.76,
    direnc3: 15.04,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "KCHOL",
    fark: -0.25,
    son: 185.1,
    pivot: 185.567,
    destek1: 182.333,
    destek2: 180.667,
    destek3: 177.433,
    direnc1: 187.233,
    direnc2: 190.467,
    direnc3: 192.133,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "KRDMD",
    fark: 0.07,
    son: 36.52,
    pivot: 36.493,
    destek1: 35.547,
    destek2: 34.793,
    destek3: 33.847,
    direnc1: 37.247,
    direnc2: 38.193,
    direnc3: 38.947,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "MGROS",
    fark: -2.47,
    son: 626.0,
    pivot: 641.833,
    destek1: 633.167,
    destek2: 626.833,
    destek3: 618.167,
    direnc1: 648.167,
    direnc2: 656.833,
    direnc3: 663.167,
    yorum: "İkinci destek seviyesinin altına indi.",
  },
  {
    sembol: "PETKM",
    fark: -1.23,
    son: 19.02,
    pivot: 19.257,
    destek1: 18.923,
    destek2: 18.627,
    destek3: 18.293,
    direnc1: 19.553,
    direnc2: 19.887,
    direnc3: 20.183,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "PGSUS",
    fark: -0.5,
    son: 167.3,
    pivot: 168.133,
    destek1: 163.767,
    destek2: 161.533,
    destek3: 157.167,
    direnc1: 170.367,
    direnc2: 174.733,
    direnc3: 176.967,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "SAHOL",
    fark: -1.65,
    son: 89.15,
    pivot: 90.65,
    destek1: 88.85,
    destek2: 87.7,
    destek3: 85.9,
    direnc1: 91.8,
    direnc2: 93.6,
    direnc3: 94.75,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "SASA",
    fark: 0.88,
    son: 2.28,
    pivot: 2.26,
    destek1: 2.2,
    destek2: 2.17,
    destek3: 2.11,
    direnc1: 2.29,
    direnc2: 2.35,
    direnc3: 2.38,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "SISE",
    fark: 0.36,
    son: 42.22,
    pivot: 42.067,
    destek1: 41.133,
    destek2: 40.647,
    destek3: 39.713,
    direnc1: 42.553,
    direnc2: 43.487,
    direnc3: 43.973,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "TAVHL",
    fark: -0.32,
    son: 263.25,
    pivot: 264.083,
    destek1: 257.167,
    destek2: 250.583,
    destek3: 243.667,
    direnc1: 270.667,
    direnc2: 277.583,
    direnc3: 284.167,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "TCELL",
    fark: -0.54,
    son: 104.9,
    pivot: 105.467,
    destek1: 103.833,
    destek2: 102.267,
    destek3: 100.633,
    direnc1: 107.033,
    direnc2: 108.667,
    direnc3: 110.233,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "THYAO",
    fark: 0.47,
    son: 338.25,
    pivot: 336.667,
    destek1: 325.583,
    destek2: 319.167,
    destek3: 308.083,
    direnc1: 343.083,
    direnc2: 354.167,
    direnc3: 360.583,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "TOASO",
    fark: -0.62,
    son: 295.0,
    pivot: 296.833,
    destek1: 292.167,
    destek2: 286.583,
    destek3: 281.917,
    direnc1: 302.417,
    direnc2: 307.083,
    direnc3: 312.667,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "TRALT",
    fark: 4.28,
    son: 53.55,
    pivot: 51.35,
    destek1: 50.4,
    destek2: 49.55,
    destek3: 48.6,
    direnc1: 52.2,
    direnc2: 53.15,
    direnc3: 54.0,
    yorum: "İkinci direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "TTKOM",
    fark: -2.02,
    son: 56.7,
    pivot: 57.867,
    destek1: 56.533,
    destek2: 55.767,
    destek3: 54.433,
    direnc1: 58.633,
    direnc2: 59.967,
    direnc3: 60.733,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "TUPRS",
    fark: 1.96,
    son: 264.25,
    pivot: 259.167,
    destek1: 252.583,
    destek2: 248.667,
    destek3: 242.083,
    direnc1: 263.083,
    direnc2: 269.667,
    direnc3: 273.583,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "VAKBN",
    fark: -1.7,
    son: 30.82,
    pivot: 31.353,
    destek1: 30.427,
    destek2: 29.933,
    destek3: 29.007,
    direnc1: 31.847,
    direnc2: 32.773,
    direnc3: 33.267,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "YKBNK",
    fark: -2.27,
    son: 35.86,
    pivot: 36.693,
    destek1: 35.727,
    destek2: 35.233,
    destek3: 34.267,
    direnc1: 37.187,
    direnc2: 38.153,
    direnc3: 38.647,
    yorum: "Pivot değerinin altında seyrediyor.",
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
