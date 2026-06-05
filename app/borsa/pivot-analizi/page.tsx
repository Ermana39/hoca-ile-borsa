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
  fark: -1.58,
  son: 13694.19,
  pivot: 13913.83,
  destek1: 13638.68,
  destek2: 13405.1,
  destek3: 13129.95,
  direnc1: 14147.41,
  direnc2: 14422.56,
  direnc3: 14656.14,
  yorum: "Pivot değerinin altında seyrediyor.",
};

const pivotVerileri: PivotRow[] = [
  {
    sembol: "AEFES",
    fark: 0.58,
    son: 20.36,
    pivot: 20.243,
    destek1: 19.827,
    destek2: 18.993,
    destek3: 18.577,
    direnc1: 21.077,
    direnc2: 21.493,
    direnc3: 22.327,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "AKBNK",
    fark: -2.79,
    son: 64.5,
    pivot: 66.35,
    destek1: 65.45,
    destek2: 63.75,
    destek3: 62.85,
    direnc1: 68.05,
    direnc2: 68.95,
    direnc3: 70.65,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "ASELS",
    fark: -2.11,
    son: 363,
    pivot: 370.833,
    destek1: 348.167,
    destek2: 334.083,
    destek3: 311.417,
    direnc1: 384.917,
    direnc2: 407.583,
    direnc3: 421.667,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "ASTOR",
    fark: -6.14,
    son: 317,
    pivot: 337.75,
    destek1: 307.75,
    destek2: 292.75,
    destek3: 262.75,
    direnc1: 352.75,
    direnc2: 382.75,
    direnc3: 397.75,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "BIMAS",
    fark: 0.29,
    son: 377.25,
    pivot: 376.167,
    destek1: 366.833,
    destek2: 360.667,
    destek3: 351.333,
    direnc1: 382.333,
    direnc2: 391.667,
    direnc3: 397.833,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "DSTKF",
    fark: 2.83,
    son: 2325,
    pivot: 2261,
    destek1: 2196,
    destek2: 2133,
    destek3: 2070,
    direnc1: 2322,
    direnc2: 2387,
    direnc3: 2448,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "EKGYO",
    fark: -4.34,
    son: 19.23,
    pivot: 20.103,
    destek1: 19.887,
    destek2: 19.453,
    destek3: 19.237,
    direnc1: 20.537,
    direnc2: 20.753,
    direnc3: 21.187,
    yorum: "Üçüncü destek seviyesinin altına indi.",
  },
  {
    sembol: "ENKAI",
    fark: -2.06,
    son: 93.35,
    pivot: 95.3166,
    destek1: 93.3833,
    destek2: 91.8166,
    destek3: 89.8833,
    direnc1: 96.8833,
    direnc2: 98.8166,
    direnc3: 100.3833,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "EREGL",
    fark: -2.18,
    son: 39.16,
    pivot: 40.033,
    destek1: 38.847,
    destek2: 37.593,
    destek3: 36.407,
    direnc1: 41.287,
    direnc2: 42.473,
    direnc3: 43.727,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "FROTO",
    fark: -2.96,
    son: 86.2,
    pivot: 88.833,
    destek1: 87.017,
    destek2: 85.433,
    destek3: 83.617,
    direnc1: 90.417,
    direnc2: 92.233,
    direnc3: 93.817,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "GARAN",
    fark: -2.45,
    son: 125,
    pivot: 128.133,
    destek1: 126.467,
    destek2: 123.433,
    destek3: 121.767,
    direnc1: 131.167,
    direnc2: 132.833,
    direnc3: 135.867,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "GUBRF",
    fark: -6.89,
    son: 493,
    pivot: 529.5,
    destek1: 511,
    destek2: 499.5,
    destek3: 481,
    direnc1: 541,
    direnc2: 559.5,
    direnc3: 571,
    yorum: "İkinci destek seviyesinin altına indi.",
  },
  {
    sembol: "ISCTR",
    fark: -3.04,
    son: 13.19,
    pivot: 13.603,
    destek1: 13.487,
    destek2: 13.253,
    destek3: 13.137,
    direnc1: 13.837,
    direnc2: 13.953,
    direnc3: 14.187,
    yorum: "İkinci destek seviyesinin altına indi.",
  },
  {
    sembol: "KCHOL",
    fark: -1,
    son: 189,
    pivot: 190.9,
    destek1: 188.9,
    destek2: 186.6,
    destek3: 184.6,
    direnc1: 193.2,
    direnc2: 195.2,
    direnc3: 197.5,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "KRDMD",
    fark: -2.39,
    son: 39,
    pivot: 39.953,
    destek1: 38.447,
    destek2: 37.293,
    destek3: 35.787,
    direnc1: 41.107,
    direnc2: 42.613,
    direnc3: 43.767,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "MGROS",
    fark: -0.15,
    son: 662,
    pivot: 663,
    destek1: 652.5,
    destek2: 642.5,
    destek3: 632,
    direnc1: 673,
    direnc2: 683.5,
    direnc3: 693.5,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "PETKM",
    fark: -3.28,
    son: 20.84,
    pivot: 21.547,
    destek1: 20.393,
    destek2: 19.767,
    destek3: 18.613,
    direnc1: 22.173,
    direnc2: 23.327,
    direnc3: 23.953,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "PGSUS",
    fark: -1.42,
    son: 168.6,
    pivot: 171.0333,
    destek1: 169.6666,
    destek2: 168.1333,
    destek3: 166.7666,
    direnc1: 172.5666,
    direnc2: 173.9333,
    direnc3: 175.4666,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "SAHOL",
    fark: -1.51,
    son: 90,
    pivot: 91.383,
    destek1: 90.517,
    destek2: 89.033,
    destek3: 88.167,
    direnc1: 92.867,
    direnc2: 93.733,
    direnc3: 95.217,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "SASA",
    fark: -4.47,
    son: 2.49,
    pivot: 2.6066,
    destek1: 2.5433,
    destek2: 2.4966,
    destek3: 2.4333,
    direnc1: 2.6533,
    direnc2: 2.7166,
    direnc3: 2.7633,
    yorum: "İkinci destek seviyesinin altına indi.",
  },
  {
    sembol: "SISE",
    fark: -2.1,
    son: 44.8,
    pivot: 45.76,
    destek1: 44.8,
    destek2: 44.12,
    destek3: 43.16,
    direnc1: 46.44,
    direnc2: 47.4,
    direnc3: 48.08,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "TAVHL",
    fark: -2.52,
    son: 257.5,
    pivot: 264.167,
    destek1: 260.333,
    destek2: 256.667,
    destek3: 252.833,
    direnc1: 267.833,
    direnc2: 271.667,
    direnc3: 275.333,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "TCELL",
    fark: -1.65,
    son: 105.1,
    pivot: 106.867,
    destek1: 105.533,
    destek2: 103.167,
    destek3: 101.833,
    direnc1: 109.233,
    direnc2: 110.567,
    direnc3: 112.933,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "THYAO",
    fark: -0.75,
    son: 297,
    pivot: 299.25,
    destek1: 297,
    destek2: 294.25,
    destek3: 292,
    direnc1: 302,
    direnc2: 304.25,
    direnc3: 307,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "TOASO",
    fark: -1.56,
    son: 294,
    pivot: 298.667,
    destek1: 292.333,
    destek2: 287.167,
    destek3: 280.833,
    direnc1: 303.833,
    direnc2: 310.167,
    direnc3: 315.333,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "TRALT",
    fark: -6.4,
    son: 45.14,
    pivot: 48.227,
    destek1: 47.493,
    destek2: 46.687,
    destek3: 45.953,
    direnc1: 49.033,
    direnc2: 49.767,
    direnc3: 50.573,
    yorum: "Üçüncü destek seviyesinin altına indi.",
  },
  {
    sembol: "TTKOM",
    fark: -2.09,
    son: 62.3,
    pivot: 63.633,
    destek1: 62.567,
    destek2: 61.483,
    destek3: 60.417,
    direnc1: 64.717,
    direnc2: 65.783,
    direnc3: 66.867,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "TUPRS",
    fark: 3.29,
    son: 240.8,
    pivot: 233.1333,
    destek1: 226.4666,
    destek2: 220.7333,
    destek3: 214.06665,
    direnc1: 238.8666,
    direnc2: 245.5333,
    direnc3: 251.2666,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "VAKBN",
    fark: -2.85,
    son: 31.76,
    pivot: 32.693,
    destek1: 32.007,
    destek2: 31.313,
    destek3: 30.627,
    direnc1: 33.387,
    direnc2: 34.073,
    direnc3: 34.767,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "YKBNK",
    fark: -3.82,
    son: 33.6,
    pivot: 34.933,
    destek1: 34.547,
    destek2: 33.893,
    destek3: 33.507,
    direnc1: 35.587,
    direnc2: 35.973,
    direnc3: 36.627,
    yorum: "İkinci destek seviyesinin altına indi.",
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