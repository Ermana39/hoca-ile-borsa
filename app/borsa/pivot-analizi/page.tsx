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
  sembol: "A1CAP",
  fark: 3.95,
  son: 10.97,
  pivot: 10.553,
  destek1: 10.257,
  destek2: 9.943,
  destek3: 9.647,
  direnc1: 10.867,
  direnc2: 11.163,
  direnc3: 11.477,
  yorum: "İlk direnç seviyesinin üstüne çıktı.",
};

const pivotVerileri: PivotRow[] = [
  {
    sembol: "AEFES",
    fark: -2.28,
    son: 20.54,
    pivot: 21.02,
    destek1: 20.86,
    destek2: 20.66,
    destek3: 20.5,
    direnc1: 21.22,
    direnc2: 21.38,
    direnc3: 21.58,
    yorum: "İkinci destek seviyesinin altına indi.",
  },
  {
    sembol: "AKBNK",
    fark: -2.01,
    son: 80.5,
    pivot: 82.15,
    destek1: 81.4,
    destek2: 80.8,
    destek3: 80.05,
    direnc1: 82.75,
    direnc2: 83.5,
    direnc3: 84.1,
    yorum: "İkinci destek seviyesinin altına indi.",
  },
  {
    sembol: "ASELS",
    fark: -1.65,
    son: 392.0,
    pivot: 398.583,
    destek1: 389.917,
    destek2: 385.083,
    destek3: 376.417,
    direnc1: 403.417,
    direnc2: 412.083,
    direnc3: 416.917,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "ASTOR",
    fark: -3.77,
    son: 296.0,
    pivot: 307.583,
    destek1: 300.917,
    destek2: 290.333,
    destek3: 283.667,
    direnc1: 318.167,
    direnc2: 324.833,
    direnc3: 335.417,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "BIMAS",
    fark: 0.39,
    son: 382.75,
    pivot: 381.25,
    destek1: 375.5,
    destek2: 372.0,
    destek3: 366.25,
    direnc1: 384.75,
    direnc2: 390.5,
    direnc3: 394.0,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "DSTKF",
    fark: 1.76,
    son: 3325.0,
    pivot: 3267.5,
    destek1: 3232.5,
    destek2: 3165.0,
    destek3: 3130.0,
    direnc1: 3335.0,
    direnc2: 3370.0,
    direnc3: 3437.5,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "EKGYO",
    fark: -2.09,
    son: 21.54,
    pivot: 22.0,
    destek1: 21.84,
    destek2: 21.68,
    destek3: 21.52,
    direnc1: 22.16,
    direnc2: 22.32,
    direnc3: 22.48,
    yorum: "İkinci destek seviyesinin altına indi.",
  },
  {
    sembol: "ENKAI",
    fark: -3.17,
    son: 90.15,
    pivot: 93.1,
    destek1: 91.5,
    destek2: 90.3,
    destek3: 88.7,
    direnc1: 94.3,
    direnc2: 95.9,
    direnc3: 97.1,
    yorum: "İkinci destek seviyesinin altına indi.",
  },
  {
    sembol: "EREGL",
    fark: -1.44,
    son: 39.82,
    pivot: 40.4,
    destek1: 40.06,
    destek2: 39.78,
    destek3: 39.44,
    direnc1: 40.68,
    direnc2: 41.02,
    direnc3: 41.3,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "FROTO",
    fark: -2.69,
    son: 87.95,
    pivot: 90.383,
    destek1: 89.267,
    destek2: 88.683,
    destek3: 87.567,
    direnc1: 90.967,
    direnc2: 92.083,
    direnc3: 92.667,
    yorum: "İkinci destek seviyesinin altına indi.",
  },
  {
    sembol: "GARAN",
    fark: -2.16,
    son: 140.7,
    pivot: 143.8,
    destek1: 142.5,
    destek2: 141.3,
    destek3: 140.0,
    direnc1: 145.0,
    direnc2: 146.3,
    direnc3: 147.5,
    yorum: "İkinci destek seviyesinin altına indi.",
  },
  {
    sembol: "GUBRF",
    fark: -5.12,
    son: 478.25,
    pivot: 504.083,
    destek1: 494.167,
    destek2: 479.333,
    destek3: 469.417,
    direnc1: 518.917,
    direnc2: 528.833,
    direnc3: 543.667,
    yorum: "İkinci destek seviyesinin altına indi.",
  },
  {
    sembol: "ISCTR",
    fark: -1.6,
    son: 15.18,
    pivot: 15.427,
    destek1: 15.313,
    destek2: 15.207,
    destek3: 15.093,
    direnc1: 15.533,
    direnc2: 15.647,
    direnc3: 15.753,
    yorum: "İkinci destek seviyesinin altına indi.",
  },
  {
    sembol: "KCHOL",
    fark: -2.94,
    son: 191.6,
    pivot: 197.4,
    destek1: 195.6,
    destek2: 194.0,
    destek3: 192.2,
    direnc1: 199.0,
    direnc2: 200.8,
    direnc3: 202.4,
    yorum: "Üçüncü destek seviyesinin altına indi.",
  },
  {
    sembol: "KRDMD",
    fark: -2.99,
    son: 40.0,
    pivot: 41.233,
    destek1: 40.727,
    destek2: 40.133,
    destek3: 39.627,
    direnc1: 41.827,
    direnc2: 42.333,
    direnc3: 42.927,
    yorum: "İkinci destek seviyesinin altına indi.",
  },
  {
    sembol: "MGROS",
    fark: 1.75,
    son: 696.5,
    pivot: 684.5,
    destek1: 679.5,
    destek2: 674.5,
    destek3: 669.5,
    direnc1: 689.5,
    direnc2: 694.5,
    direnc3: 699.5,
    yorum: "İkinci direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "PETKM",
    fark: -0.63,
    son: 20.12,
    pivot: 20.247,
    destek1: 20.033,
    destek2: 19.807,
    destek3: 19.593,
    direnc1: 20.473,
    direnc2: 20.687,
    direnc3: 20.913,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "PGSUS",
    fark: -2.82,
    son: 178.1,
    pivot: 183.267,
    destek1: 181.533,
    destek2: 180.567,
    destek3: 178.833,
    direnc1: 184.233,
    direnc2: 185.967,
    direnc3: 186.933,
    yorum: "Üçüncü destek seviyesinin altına indi.",
  },
  {
    sembol: "SAHOL",
    fark: -1.18,
    son: 100.8,
    pivot: 102.0,
    destek1: 100.8,
    destek2: 100.1,
    destek3: 99.3,
    direnc1: 102.3,
    direnc2: 103.1,
    direnc3: 103.8,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "SASA",
    fark: -3.65,
    son: 2.64,
    pivot: 2.74,
    destek1: 2.68,
    destek2: 2.65,
    destek3: 2.65,
    direnc1: 2.77,
    direnc2: 2.8,
    direnc3: 2.83,
    yorum: "Üçüncü destek seviyesinin altına indi.",
  },
  {
    sembol: "SISE",
    fark: -2.97,
    son: 45.14,
    pivot: 46.52,
    destek1: 45.86,
    destek2: 45.46,
    destek3: 44.74,
    direnc1: 46.98,
    direnc2: 47.64,
    direnc3: 48.1,
    yorum: "İkinci destek seviyesinin altına indi.",
  },
  {
    sembol: "TAVHL",
    fark: -2.12,
    son: 285.0,
    pivot: 291.167,
    destek1: 284.333,
    destek2: 280.667,
    destek3: 273.833,
    direnc1: 294.833,
    direnc2: 301.667,
    direnc3: 305.333,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "TCELL",
    fark: -2.23,
    son: 111.0,
    pivot: 113.533,
    destek1: 112.367,
    destek2: 111.533,
    destek3: 110.367,
    direnc1: 114.367,
    direnc2: 115.533,
    direnc3: 116.367,
    yorum: "İkinci destek seviyesinin altına indi.",
  },
  {
    sembol: "THYAO",
    fark: -0.31,
    son: 325.0,
    pivot: 326.0,
    destek1: 323.0,
    destek2: 321.25,
    destek3: 318.25,
    direnc1: 327.75,
    direnc2: 330.75,
    direnc3: 332.5,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "TOASO",
    fark: 2.76,
    son: 345.0,
    pivot: 335.75,
    destek1: 324.75,
    destek2: 317.75,
    destek3: 306.75,
    direnc1: 342.75,
    direnc2: 353.75,
    direnc3: 360.75,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "TRALT",
    fark: -3.21,
    son: 49.8,
    pivot: 51.45,
    destek1: 50.7,
    destek2: 50.0,
    destek3: 49.25,
    direnc1: 52.15,
    direnc2: 52.9,
    direnc3: 53.6,
    yorum: "İkinci destek seviyesinin altına indi.",
  },
  {
    sembol: "TTKOM",
    fark: -3.72,
    son: 61.3,
    pivot: 63.667,
    destek1: 63.183,
    destek2: 62.517,
    destek3: 62.033,
    direnc1: 64.333,
    direnc2: 64.817,
    direnc3: 65.483,
    yorum: "Üçüncü destek seviyesinin altına indi.",
  },
  {
    sembol: "TUPRS",
    fark: -0.94,
    son: 220.4,
    pivot: 222.5,
    destek1: 218.9,
    destek2: 217.1,
    destek3: 213.5,
    direnc1: 224.3,
    direnc2: 227.9,
    direnc3: 229.7,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "VAKBN",
    fark: -3.45,
    son: 33.74,
    pivot: 34.947,
    destek1: 34.533,
    destek2: 34.247,
    destek3: 33.833,
    direnc1: 35.233,
    direnc2: 35.647,
    direnc3: 35.933,
    yorum: "Üçüncü destek seviyesinin altına indi.",
  },
  {
    sembol: "YKBNK",
    fark: -2.19,
    son: 42.88,
    pivot: 43.84,
    destek1: 43.48,
    destek2: 43.12,
    destek3: 42.76,
    direnc1: 44.2,
    direnc2: 44.56,
    direnc3: 44.92,
    yorum: "İkinci destek seviyesinin altına indi.",
  }
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
