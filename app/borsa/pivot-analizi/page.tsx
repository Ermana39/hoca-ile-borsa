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
  fark: -5.88,
  son: 13163.88,
  pivot: 13985.96,
  destek1: 13882.17,
  destek2: 13752.32,
  destek3: 13648.53,
  direnc1: 14115.81,
  direnc2: 14219.6,
  direnc3: 14349.45,
  yorum: "Üçüncü destek seviyesinin altına indi.",
};

const pivotVerileri: PivotRow[] = [
  {
    sembol: "AEFES",
    fark: -4.82,
    son: 18.58,
    pivot: 19.52,
    destek1: 19.18,
    destek2: 18.61,
    destek3: 18.27,
    direnc1: 20.09,
    direnc2: 20.43,
    direnc3: 21,
    yorum: "İkinci destek seviyesinin altına indi.",
  },
  {
    sembol: "AKBNK",
    fark: -10.14,
    son: 62.2,
    pivot: 69.217,
    destek1: 68.633,
    destek2: 68.167,
    destek3: 67.583,
    direnc1: 69.683,
    direnc2: 70.267,
    direnc3: 70.733,
    yorum: "Üçüncü destek seviyesinin altına indi.",
  },
  {
    sembol: "ASELS",
    fark: -4.45,
    son: 377.75,
    pivot: 395.333,
    destek1: 387.417,
    destek2: 381.333,
    destek3: 373.417,
    direnc1: 401.417,
    direnc2: 409.333,
    direnc3: 415.417,
    yorum: "İkinci destek seviyesinin altına indi.",
  },
  {
    sembol: "ASTOR",
    fark: -6.04,
    son: 313.75,
    pivot: 333.917,
    destek1: 323.583,
    destek2: 302.917,
    destek3: 292.583,
    direnc1: 354.583,
    direnc2: 364.917,
    direnc3: 385.583,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "BIMAS",
    fark: -4.08,
    son: 376.5,
    pivot: 392.5,
    destek1: 385.75,
    destek2: 378.75,
    destek3: 372,
    direnc1: 399.5,
    direnc2: 406.25,
    direnc3: 413.25,
    yorum: "İkinci destek seviyesinin altına indi.",
  },
  {
    sembol: "DSTKF",
    fark: -2.89,
    son: 1860,
    pivot: 1915.333,
    destek1: 1874.667,
    destek2: 1849.333,
    destek3: 1808.667,
    direnc1: 1940.667,
    direnc2: 1981.333,
    direnc3: 2006.667,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "EKGYO",
    fark: -7.16,
    son: 18.41,
    pivot: 19.83,
    destek1: 19.62,
    destek2: 19.4,
    destek3: 19.19,
    direnc1: 20.05,
    direnc2: 20.26,
    direnc3: 20.48,
    yorum: "Üçüncü destek seviyesinin altına indi.",
  },
  {
    sembol: "ENKAI",
    fark: -3,
    son: 95.25,
    pivot: 98.2,
    destek1: 96.75,
    destek2: 94.7,
    destek3: 93.25,
    direnc1: 100.25,
    direnc2: 101.7,
    direnc3: 103.75,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "EREGL",
    fark: -8.84,
    son: 35.18,
    pivot: 38.593,
    destek1: 37.967,
    destek2: 37.333,
    destek3: 36.727,
    direnc1: 39.247,
    direnc2: 39.853,
    direnc3: 40.507,
    yorum: "Üçüncü destek seviyesinin altına indi.",
  },
  {
    sembol: "FROTO",
    fark: -4.78,
    son: 82.35,
    pivot: 86.4833,
    destek1: 85.6166,
    destek2: 84.5833,
    destek3: 83.7166,
    direnc1: 87.5166,
    direnc2: 88.3833,
    direnc3: 89.4166,
    yorum: "Üçüncü destek seviyesinin altına indi.",
  },
  {
    sembol: "GARAN",
    fark: -7.34,
    son: 120,
    pivot: 129.5,
    destek1: 127.9,
    destek2: 126,
    destek3: 124.4,
    direnc1: 131.4,
    direnc2: 133,
    direnc3: 134.9,
    yorum: "Üçüncü destek seviyesinin altına indi.",
  },
  {
    sembol: "GUBRF",
    fark: -6.25,
    son: 527.5,
    pivot: 562.667,
    destek1: 552.333,
    destek2: 544.667,
    destek3: 534.333,
    direnc1: 570.333,
    direnc2: 580.667,
    direnc3: 588.333,
    yorum: "Üçüncü destek seviyesinin altına indi.",
  },
  {
    sembol: "ISCTR",
    fark: -7.25,
    son: 12.7,
    pivot: 13.693,
    destek1: 13.567,
    destek2: 13.433,
    destek3: 13.307,
    direnc1: 13.827,
    direnc2: 13.953,
    direnc3: 14.087,
    yorum: "Üçüncü destek seviyesinin altına indi.",
  },
  {
    sembol: "KCHOL",
    fark: -6.38,
    son: 183.3,
    pivot: 195.8,
    destek1: 193.8,
    destek2: 191.6,
    destek3: 189.6,
    direnc1: 198,
    direnc2: 200,
    direnc3: 202.2,
    yorum: "Üçüncü destek seviyesinin altına indi.",
  },
  {
    sembol: "KRDMD",
    fark: -5.42,
    son: 37.48,
    pivot: 39.627,
    destek1: 38.733,
    destek2: 37.267,
    destek3: 36.373,
    direnc1: 41.093,
    direnc2: 41.987,
    direnc3: 43.453,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "MGROS",
    fark: -2.63,
    son: 659,
    pivot: 676.833,
    destek1: 668.167,
    destek2: 650.833,
    destek3: 642.167,
    direnc1: 694.167,
    direnc2: 702.833,
    direnc3: 720.167,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "PETKM",
    fark: -7.28,
    son: 22.76,
    pivot: 24.547,
    destek1: 23.913,
    destek2: 23.487,
    destek3: 22.853,
    direnc1: 24.973,
    direnc2: 25.607,
    direnc3: 26.033,
    yorum: "Üçüncü destek seviyesinin altına indi.",
  },
  {
    sembol: "PGSUS",
    fark: -5.4,
    son: 162.9,
    pivot: 172.2,
    destek1: 170.299,
    destek2: 167.2,
    destek3: 165.299,
    direnc1: 175.299,
    direnc2: 177.2,
    direnc3: 180.299,
    yorum: "Üçüncü destek seviyesinin altına indi.",
  },
  {
    sembol: "SAHOL",
    fark: -5.64,
    son: 87.25,
    pivot: 92.467,
    destek1: 91.383,
    destek2: 90.117,
    destek3: 89.033,
    direnc1: 93.733,
    direnc2: 94.817,
    direnc3: 96.083,
    yorum: "Üçüncü destek seviyesinin altına indi.",
  },
  {
    sembol: "SASA",
    fark: -9.75,
    son: 2.53,
    pivot: 2.8033,
    destek1: 2.7466,
    destek2: 2.6833,
    destek3: 2.6266,
    direnc1: 2.8666,
    direnc2: 2.9233,
    direnc3: 2.9866,
    yorum: "Üçüncü destek seviyesinin altına indi.",
  },
  {
    sembol: "SISE",
    fark: -6.54,
    son: 42.9,
    pivot: 45.9,
    destek1: 45.48,
    destek2: 44.78,
    destek3: 44.36,
    direnc1: 46.5999,
    direnc2: 47.0199,
    direnc3: 47.7199,
    yorum: "Üçüncü destek seviyesinin altına indi.",
  },
  {
    sembol: "TAVHL",
    fark: -4.64,
    son: 244.8,
    pivot: 256.7,
    destek1: 252.65,
    destek2: 244.55,
    destek3: 240.5,
    direnc1: 264.8,
    direnc2: 268.85,
    direnc3: 276.95,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "TCELL",
    fark: -1.46,
    son: 106,
    pivot: 107.567,
    destek1: 106.333,
    destek2: 104.067,
    destek3: 102.833,
    direnc1: 109.833,
    direnc2: 111.067,
    direnc3: 113.333,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "THYAO",
    fark: -7.12,
    son: 274,
    pivot: 295,
    destek1: 289.75,
    destek2: 284.5,
    destek3: 279.25,
    direnc1: 300.25,
    direnc2: 305.5,
    direnc3: 310.75,
    yorum: "Üçüncü destek seviyesinin altına indi.",
  },
  {
    sembol: "TOASO",
    fark: -3.22,
    son: 280.25,
    pivot: 289.583,
    destek1: 284.167,
    destek2: 278.833,
    destek3: 273.417,
    direnc1: 294.917,
    direnc2: 300.333,
    direnc3: 305.667,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "TRALT",
    fark: -9.72,
    son: 40.8,
    pivot: 45.1933,
    destek1: 43.9866,
    destek2: 43.0133,
    destek3: 41.8066,
    direnc1: 46.1666,
    direnc2: 47.3733,
    direnc3: 48.3466,
    yorum: "Üçüncü destek seviyesinin altına indi.",
  },
  {
    sembol: "TTKOM",
    fark: -7.34,
    son: 57.45,
    pivot: 62,
    destek1: 61.3,
    destek2: 60.45,
    destek3: 59.75,
    direnc1: 62.85,
    direnc2: 63.55,
    direnc3: 64.4,
    yorum: "Üçüncü destek seviyesinin altına indi.",
  },
  {
    sembol: "TUPRS",
    fark: -3.62,
    son: 241.7,
    pivot: 250.783,
    destek1: 247.817,
    destek2: 245.633,
    destek3: 242.667,
    direnc1: 252.967,
    direnc2: 255.933,
    direnc3: 258.117,
    yorum: "Üçüncü destek seviyesinin altına indi.",
  },
  {
    sembol: "VAKBN",
    fark: -2.94,
    son: 29.74,
    pivot: 30.64,
    destek1: 30.18,
    destek2: 29.94,
    destek3: 29.48,
    direnc1: 30.88,
    direnc2: 31.34,
    direnc3: 31.58,
    yorum: "İkinci destek seviyesinin altına indi.",
  },
  {
    sembol: "YKBNK",
    fark: -10.21,
    son: 32.12,
    pivot: 35.773,
    destek1: 35.187,
    destek2: 34.693,
    destek3: 34.107,
    direnc1: 36.267,
    direnc2: 36.853,
    direnc3: 37.347,
    yorum: "Üçüncü destek seviyesinin altına indi.",
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
                  <th className="border border-sky-200 px-3 py-2 text-left">Sembol</th>
                  <th className="border border-sky-200 px-3 py-2 text-left">
                    Pivota Göre Fark %
                  </th>
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
                  <th className="border border-sky-200 px-3 py-2 text-left">
                    Pivota Göre Fark %
                  </th>
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