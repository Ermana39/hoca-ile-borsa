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
  fark: 1.25,
  son: 14321.19,
  pivot: 14144.670,
  destek1: 14014.250,
  destek2: 13923.060,
  destek3: 13792.640,
  direnc1: 14235.860,
  direnc2: 14366.280,
  direnc3: 14457.470,
  yorum: "İlk direnç seviyesinin üstüne çıktı.",
};

const pivotVerileri: PivotRow[] = [
  {
    sembol: "AEFES",
    fark: 3.21,
    son: 20.46,
    pivot: 19.823,
    destek1: 19.307,
    destek2: 18.903,
    destek3: 18.387,
    direnc1: 20.227,
    direnc2: 20.743,
    direnc3: 21.147,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "AKBNK",
    fark: -2.6,
    son: 68.75,
    pivot: 70.583,
    destek1: 69.667,
    destek2: 69.133,
    destek3: 68.217,
    direnc1: 71.117,
    direnc2: 72.033,
    direnc3: 72.567,
    yorum: "İkinci destek seviyesinin altına indi.",
  },
  {
    sembol: "ASELS",
    fark: 1.0,
    son: 370.0,
    pivot: 366.333,
    destek1: 350.666,
    destek2: 342.5833,
    destek3: 326.9166,
    direnc1: 374.4166,
    direnc2: 390.08333,
    direnc3: 398.1666,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "ASTOR",
    fark: 5.14,
    son: 325.75,
    pivot: 309.833,
    destek1: 298.417,
    destek2: 292.083,
    destek3: 280.667,
    direnc1: 316.167,
    direnc2: 327.583,
    direnc3: 333.917,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "BIMAS",
    fark: 1.13,
    son: 372.5,
    pivot: 368.333,
    destek1: 359.417,
    destek2: 353.833,
    destek3: 344.917,
    direnc1: 373.917,
    direnc2: 382.833,
    direnc3: 388.417,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "DSTKF",
    fark: 0.5,
    son: 3840.0,
    pivot: 3820.833,
    destek1: 3756.667,
    destek2: 3678.333,
    destek3: 3614.167,
    direnc1: 3899.167,
    direnc2: 3963.333,
    direnc3: 4041.667,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "EKGYO",
    fark: 0.16,
    son: 20.48,
    pivot: 20.447,
    destek1: 20.053,
    destek2: 19.747,
    destek3: 19.353,
    direnc1: 20.753,
    direnc2: 21.147,
    direnc3: 21.453,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "ENKAI",
    fark: 1.48,
    son: 90.3,
    pivot: 88.983,
    destek1: 87.517,
    destek2: 86.533,
    destek3: 85.067,
    direnc1: 89.967,
    direnc2: 91.433,
    direnc3: 92.417,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "EREGL",
    fark: 1.3,
    son: 40.4,
    pivot: 39.88,
    destek1: 39.22,
    destek2: 38.38,
    destek3: 37.72,
    direnc1: 40.72,
    direnc2: 41.38,
    direnc3: 42.22,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "FROTO",
    fark: 1.09,
    son: 81.8,
    pivot: 80.917,
    destek1: 80.283,
    destek2: 79.717,
    destek3: 79.083,
    direnc1: 81.483,
    direnc2: 82.117,
    direnc3: 82.683,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "GARAN",
    fark: -0.97,
    son: 129.0,
    pivot: 130.267,
    destek1: 128.833,
    destek2: 127.567,
    destek3: 126.133,
    direnc1: 131.533,
    direnc2: 132.967,
    direnc3: 134.233,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "GUBRF",
    fark: -0.04,
    son: 437.5,
    pivot: 437.667,
    destek1: 430.333,
    destek2: 423.667,
    destek3: 416.333,
    direnc1: 444.333,
    direnc2: 451.667,
    direnc3: 458.333,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "ISCTR",
    fark: -1.64,
    son: 13.78,
    pivot: 14.01,
    destek1: 13.71,
    destek2: 13.52,
    destek3: 13.22,
    direnc1: 14.2,
    direnc2: 14.5,
    direnc3: 14.69,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "KCHOL",
    fark: 4.65,
    son: 192.8,
    pivot: 184.233,
    destek1: 182.967,
    destek2: 180.833,
    destek3: 179.567,
    direnc1: 186.367,
    direnc2: 187.633,
    direnc3: 189.767,
    yorum: "Üçüncü direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "KRDMD",
    fark: 3.26,
    son: 37.78,
    pivot: 36.587,
    destek1: 36.093,
    destek2: 35.667,
    destek3: 35.173,
    direnc1: 37.013,
    direnc2: 37.507,
    direnc3: 37.933,
    yorum: "İkinci direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "MGROS",
    fark: -0.64,
    son: 625.5,
    pivot: 629.5,
    destek1: 617.0,
    destek2: 608.0,
    destek3: 595.5,
    direnc1: 638.5,
    direnc2: 651.0,
    direnc3: 660.0,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "PETKM",
    fark: 0.5,
    son: 19.34,
    pivot: 19.243,
    destek1: 18.777,
    destek2: 18.533,
    destek3: 18.067,
    direnc1: 19.487,
    direnc2: 19.953,
    direnc3: 20.197,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "PGSUS",
    fark: 2.2,
    son: 170.2,
    pivot: 166.533,
    destek1: 165.767,
    destek2: 164.233,
    destek3: 163.467,
    direnc1: 168.067,
    direnc2: 168.833,
    direnc3: 170.367,
    yorum: "İkinci direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "SAHOL",
    fark: 1.06,
    son: 90.5,
    pivot: 89.55,
    destek1: 88.35,
    destek2: 87.55,
    destek3: 86.35,
    direnc1: 90.35,
    direnc2: 91.55,
    direnc3: 92.35,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "SASA",
    fark: 6.28,
    son: 2.42,
    pivot: 2.277,
    destek1: 2.213,
    destek2: 2.147,
    destek3: 2.083,
    direnc1: 2.343,
    direnc2: 2.407,
    direnc3: 2.473,
    yorum: "İkinci direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "SISE",
    fark: 2.18,
    son: 43.44,
    pivot: 42.513,
    destek1: 41.587,
    destek2: 40.953,
    destek3: 40.027,
    direnc1: 43.147,
    direnc2: 44.073,
    direnc3: 44.707,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "TAVHL",
    fark: 2.44,
    son: 269.25,
    pivot: 262.833,
    destek1: 260.667,
    destek2: 258.083,
    destek3: 255.917,
    direnc1: 265.417,
    direnc2: 267.583,
    direnc3: 270.167,
    yorum: "İkinci direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "TCELL",
    fark: 1.55,
    son: 107.0,
    pivot: 105.367,
    destek1: 103.833,
    destek2: 102.767,
    destek3: 101.233,
    direnc1: 106.433,
    direnc2: 107.967,
    direnc3: 109.033,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "THYAO",
    fark: 2.4,
    son: 344.5,
    pivot: 336.416,
    destek1: 332.833,
    destek2: 327.416,
    destek3: 323.833,
    direnc1: 341.8333,
    direnc2: 345.4166,
    direnc3: 350.8333,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "TOASO",
    fark: 2.31,
    son: 302.75,
    pivot: 295.917,
    destek1: 291.333,
    destek2: 287.667,
    destek3: 283.083,
    direnc1: 299.583,
    direnc2: 304.167,
    direnc3: 307.833,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "TRALT",
    fark: 1.81,
    son: 54.25,
    pivot: 53.283,
    destek1: 51.967,
    destek2: 50.383,
    destek3: 49.067,
    direnc1: 54.867,
    direnc2: 56.183,
    direnc3: 57.767,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "TTKOM",
    fark: 1.34,
    son: 58.0,
    pivot: 57.233,
    destek1: 56.067,
    destek2: 55.433,
    destek3: 54.267,
    direnc1: 57.867,
    direnc2: 59.033,
    direnc3: 59.667,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "TUPRS",
    fark: 1.91,
    son: 267.0,
    pivot: 262.0,
    destek1: 259.75,
    destek2: 255.25,
    destek3: 253.0,
    direnc1: 266.5,
    direnc2: 268.75,
    direnc3: 273.25,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "VAKBN",
    fark: 0.86,
    son: 31.18,
    pivot: 30.913,
    destek1: 30.507,
    destek2: 30.193,
    destek3: 29.787,
    direnc1: 31.227,
    direnc2: 31.633,
    direnc3: 31.947,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "YKBNK",
    fark: -2.48,
    son: 35.14,
    pivot: 36.033,
    destek1: 35.467,
    destek2: 35.073,
    destek3: 34.507,
    direnc1: 36.427,
    direnc2: 36.993,
    direnc3: 37.387,
    yorum: "İlk destek seviyesinin altına indi.",
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
