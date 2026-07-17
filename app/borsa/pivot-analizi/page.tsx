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
  fark: -1.39,
  son: 13981.05,
  pivot: 14178.330,
  destek1: 14102.120,
  destek2: 13952.940,
  destek3: 13876.730,
  direnc1: 14327.510,
  direnc2: 14403.720,
  direnc3: 14552.900,
  yorum: "İlk destek seviyesinin altına indi.",
};

const pivotVerileri: PivotRow[] = [
  {
    sembol: "AEFES",
    fark: 1.43,
    son: 20.8,
    pivot: 20.507,
    destek1: 20.253,
    destek2: 19.747,
    destek3: 19.493,
    direnc1: 21.013,
    direnc2: 21.267,
    direnc3: 21.773,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "AKBNK",
    fark: -2.92,
    son: 66.5,
    pivot: 68.5,
    destek1: 67.25,
    destek2: 65.9,
    destek3: 64.65,
    direnc1: 69.8499,
    direnc2: 71.09999,
    direnc3: 72.4499,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "ASELS",
    fark: -0.94,
    son: 351.5,
    pivot: 354.8333,
    destek1: 346.6666,
    destek2: 340.8333,
    destek3: 332.6666,
    direnc1: 360.6666,
    direnc2: 368.8333,
    direnc3: 374.6666,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "ASTOR",
    fark: -9.79,
    son: 286.5,
    pivot: 317.5833,
    destek1: 306.1666,
    destek2: 299.8333,
    destek3: 288.4166,
    direnc1: 323.9166,
    direnc2: 335.3333,
    direnc3: 341.6666,
    yorum: "Üçüncü destek seviyesinin altına indi.",
  },
  {
    sembol: "BIMAS",
    fark: -1.89,
    son: 386.0,
    pivot: 393.417,
    destek1: 388.583,
    destek2: 380.917,
    destek3: 376.083,
    direnc1: 401.083,
    direnc2: 405.917,
    direnc3: 413.583,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "DSTKF",
    fark: -9.99,
    son: 2522.5,
    pivot: 2802.5,
    destek1: 2802.5,
    destek2: 2802.5,
    destek3: 2802.5,
    direnc1: 2802.5,
    direnc2: 2802.5,
    direnc3: 2802.5,
    yorum: "Üçüncü destek seviyesinin altına indi.",
  },
  {
    sembol: "EKGYO",
    fark: -2.67,
    son: 20.38,
    pivot: 20.94,
    destek1: 20.54,
    destek2: 20.32,
    destek3: 19.92,
    direnc1: 21.16,
    direnc2: 21.56,
    direnc3: 21.78,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "ENKAI",
    fark: -0.84,
    son: 90.7,
    pivot: 91.467,
    destek1: 90.783,
    destek2: 89.417,
    destek3: 88.733,
    direnc1: 92.833,
    direnc2: 93.517,
    direnc3: 94.883,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "EREGL",
    fark: -2.59,
    son: 42.34,
    pivot: 43.467,
    destek1: 42.713,
    destek2: 41.367,
    destek3: 40.613,
    direnc1: 44.813,
    direnc2: 45.567,
    direnc3: 46.913,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "FROTO",
    fark: 0.18,
    son: 83.6,
    pivot: 83.45,
    destek1: 82.05,
    destek2: 79.7,
    destek3: 78.3,
    direnc1: 85.8,
    direnc2: 87.2,
    direnc3: 89.55,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "GARAN",
    fark: -1.12,
    son: 126.8,
    pivot: 128.233,
    destek1: 127.067,
    destek2: 125.433,
    destek3: 124.267,
    direnc1: 129.867,
    direnc2: 131.033,
    direnc3: 132.667,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "GUBRF",
    fark: -2.04,
    son: 413.0,
    pivot: 421.583,
    destek1: 412.667,
    destek2: 403.083,
    destek3: 394.167,
    direnc1: 431.167,
    direnc2: 440.083,
    direnc3: 449.667,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "ISCTR",
    fark: -1.18,
    son: 13.68,
    pivot: 13.843,
    destek1: 13.697,
    destek2: 13.403,
    destek3: 13.257,
    direnc1: 14.137,
    direnc2: 14.283,
    direnc3: 14.577,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "KCHOL",
    fark: 1.01,
    son: 197.0,
    pivot: 195.033,
    destek1: 192.667,
    destek2: 188.333,
    destek3: 185.967,
    direnc1: 199.367,
    direnc2: 201.733,
    direnc3: 206.067,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "KRDMD",
    fark: 1.97,
    son: 42.76,
    pivot: 41.933,
    destek1: 41.327,
    destek2: 40.173,
    destek3: 39.567,
    direnc1: 43.087,
    direnc2: 43.693,
    direnc3: 44.847,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "MGROS",
    fark: 2.23,
    son: 635.5,
    pivot: 621.667,
    destek1: 614.333,
    destek2: 601.667,
    destek3: 594.333,
    direnc1: 634.333,
    direnc2: 641.667,
    direnc3: 654.333,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "PETKM",
    fark: 3.04,
    son: 20.94,
    pivot: 20.323,
    destek1: 19.907,
    destek2: 19.193,
    destek3: 18.777,
    direnc1: 21.037,
    direnc2: 21.453,
    direnc3: 22.167,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "PGSUS",
    fark: -0.64,
    son: 166.5,
    pivot: 167.567,
    destek1: 165.733,
    destek2: 163.767,
    destek3: 161.933,
    direnc1: 169.533,
    direnc2: 171.367,
    direnc3: 173.333,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "SAHOL",
    fark: -1.85,
    son: 88.4,
    pivot: 90.067,
    destek1: 89.533,
    destek2: 88.767,
    destek3: 88.233,
    direnc1: 90.833,
    direnc2: 91.367,
    direnc3: 92.133,
    yorum: "İkinci destek seviyesinin altına indi.",
  },
  {
    sembol: "SASA",
    fark: -5.07,
    son: 2.43,
    pivot: 2.5599,
    destek1: 2.5,
    destek2: 2.46,
    destek3: 2.4,
    direnc1: 2.5999,
    direnc2: 2.6599,
    direnc3: 2.6999,
    yorum: "İkinci destek seviyesinin altına indi.",
  },
  {
    sembol: "SISE",
    fark: -1.03,
    son: 44.2,
    pivot: 44.66,
    destek1: 43.94,
    destek2: 42.88,
    destek3: 42.16,
    direnc1: 45.72,
    direnc2: 46.44,
    direnc3: 47.5,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "TAVHL",
    fark: 0.38,
    son: 265.5,
    pivot: 264.5,
    destek1: 261.5,
    destek2: 255.5,
    destek3: 252.5,
    direnc1: 270.5,
    direnc2: 273.5,
    direnc3: 279.5,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "TCELL",
    fark: -2.63,
    son: 108.5,
    pivot: 111.433,
    destek1: 110.467,
    destek2: 108.733,
    destek3: 107.767,
    direnc1: 113.167,
    direnc2: 114.133,
    direnc3: 115.867,
    yorum: "İkinci destek seviyesinin altına indi.",
  },
  {
    sembol: "THYAO",
    fark: 0.13,
    son: 329.5,
    pivot: 329.083,
    destek1: 325.167,
    destek2: 320.333,
    destek3: 316.417,
    direnc1: 333.917,
    direnc2: 337.833,
    direnc3: 342.667,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "TOASO",
    fark: 2.5,
    son: 307.75,
    pivot: 300.25,
    destek1: 294.75,
    destek2: 284.5,
    destek3: 279,
    direnc1: 310.5,
    direnc2: 316,
    direnc3: 326.25,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "TRALT",
    fark: -2.01,
    son: 50.25,
    pivot: 51.283,
    destek1: 50.617,
    destek2: 49.933,
    destek3: 49.267,
    direnc1: 51.967,
    direnc2: 52.633,
    direnc3: 53.317,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "TTKOM",
    fark: -0.57,
    son: 58.15,
    pivot: 58.483,
    destek1: 57.817,
    destek2: 56.983,
    destek3: 56.317,
    direnc1: 59.317,
    direnc2: 59.983,
    direnc3: 60.817,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "TUPRS",
    fark: 2.78,
    son: 289.25,
    pivot: 281.4166,
    destek1: 276.08333,
    destek2: 265.9166,
    destek3: 260.5833,
    direnc1: 291.5833,
    direnc2: 296.9166,
    direnc3: 307.08333,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "VAKBN",
    fark: -1.48,
    son: 31.0,
    pivot: 31.467,
    destek1: 31.093,
    destek2: 30.387,
    destek3: 30.013,
    direnc1: 32.173,
    direnc2: 32.547,
    direnc3: 33.253,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "YKBNK",
    fark: -0.95,
    son: 33.22,
    pivot: 33.54,
    destek1: 32.94,
    destek2: 32.36,
    destek3: 31.76,
    direnc1: 34.12,
    direnc2: 34.72,
    direnc3: 35.3,
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