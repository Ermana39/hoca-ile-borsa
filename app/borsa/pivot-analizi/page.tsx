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
  fark: -1.68,
  son: 13501.55,
  pivot: 13732.06,
  destek1: 13591.19,
  destek2: 13494.53,
  destek3: 13353.66,
  direnc1: 13828.72,
  direnc2: 13969.59,
  direnc3: 14066.25,
  yorum: "İlk destek seviyesinin altına indi.",
};

const pivotVerileri: PivotRow[] = [
  {
    sembol: "AEFES",
    fark: 0,
    son: 21.48,
    pivot: 21.48,
    destek1: 21.14,
    destek2: 20.48,
    destek3: 20.14,
    direnc1: 22.14,
    direnc2: 22.48,
    direnc3: 23.14,
    yorum: "Pivot değerine eşit.",
  },
  {
    sembol: "AKBNK",
    fark: -4.52,
    son: 63.3,
    pivot: 66.3,
    destek1: 65.3,
    destek2: 64.8,
    destek3: 63.8,
    direnc1: 66.8,
    direnc2: 67.8,
    direnc3: 68.3,
    yorum: "Üçüncü destek seviyesinin altına indi.",
  },
  {
    sembol: "ASELS",
    fark: -1.51,
    son: 354.5,
    pivot: 359.917,
    destek1: 353.583,
    destek2: 349.167,
    destek3: 342.833,
    direnc1: 364.333,
    direnc2: 370.667,
    direnc3: 375.083,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "ASTOR",
    fark: -1.33,
    son: 278,
    pivot: 281.75,
    destek1: 267.75,
    destek2: 258,
    destek3: 244,
    direnc1: 291.5,
    direnc2: 305.5,
    direnc3: 315.25,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "BIMAS",
    fark: -0.47,
    son: 386.5,
    pivot: 388.3333,
    destek1: 384.4166,
    destek2: 379.3333,
    destek3: 375.4166,
    direnc1: 393.4166,
    direnc2: 397.3333,
    direnc3: 402.4166,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "DSTKF",
    fark: -2.65,
    son: 1815,
    pivot: 1864.333,
    destek1: 1721.667,
    destek2: 1650.333,
    destek3: 1507.667,
    direnc1: 1935.667,
    direnc2: 2078.333,
    direnc3: 2149.667,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "EKGYO",
    fark: -2.56,
    son: 17.99,
    pivot: 18.463,
    destek1: 17.887,
    destek2: 17.573,
    destek3: 16.997,
    direnc1: 18.777,
    direnc2: 19.353,
    direnc3: 19.667,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "ENKAI",
    fark: -1.48,
    son: 87.55,
    pivot: 88.867,
    destek1: 87.733,
    destek2: 86.717,
    destek3: 85.583,
    direnc1: 89.883,
    direnc2: 91.017,
    direnc3: 92.033,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "EREGL",
    fark: -1.08,
    son: 43.16,
    pivot: 43.633,
    destek1: 43.187,
    destek2: 42.513,
    destek3: 42.067,
    direnc1: 44.307,
    direnc2: 44.753,
    direnc3: 45.427,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "FROTO",
    fark: -2.12,
    son: 76.1,
    pivot: 77.75,
    destek1: 77,
    destek2: 76.4499,
    destek3: 75.6999,
    direnc1: 78.3,
    direnc2: 79.05,
    direnc3: 79.6,
    yorum: "İkinci destek seviyesinin altına indi.",
  },
  {
    sembol: "GARAN",
    fark: -1.15,
    son: 126.3,
    pivot: 127.767,
    destek1: 126.133,
    destek2: 124.867,
    destek3: 123.233,
    direnc1: 129.033,
    direnc2: 130.667,
    direnc3: 131.933,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "GUBRF",
    fark: -4.55,
    son: 399,
    pivot: 418,
    destek1: 410.25,
    destek2: 405.5,
    destek3: 397.75,
    direnc1: 422.75,
    direnc2: 430.5,
    direnc3: 435.25,
    yorum: "İkinci destek seviyesinin altına indi.",
  },
  {
    sembol: "ISCTR",
    fark: -4.21,
    son: 12.3,
    pivot: 12.84,
    destek1: 12.73,
    destek2: 12.64,
    destek3: 12.53,
    direnc1: 12.93,
    direnc2: 13.04,
    direnc3: 13.13,
    yorum: "Üçüncü destek seviyesinin altına indi.",
  },
  {
    sembol: "KCHOL",
    fark: -1.44,
    son: 193.6,
    pivot: 196.433,
    destek1: 193.167,
    destek2: 191.333,
    destek3: 188.067,
    direnc1: 198.267,
    direnc2: 201.533,
    direnc3: 203.367,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "KRDMD",
    fark: -1.51,
    son: 41.84,
    pivot: 42.48,
    destek1: 41.88,
    destek2: 41.36,
    destek3: 40.76,
    direnc1: 43,
    direnc2: 43.6,
    direnc3: 44.12,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "MGROS",
    fark: -0.37,
    son: 628.5,
    pivot: 630.8333,
    destek1: 624.667,
    destek2: 615.333,
    destek3: 609.167,
    direnc1: 640.167,
    direnc2: 646.333,
    direnc3: 655.667,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "PETKM",
    fark: -0.53,
    son: 19.95,
    pivot: 20.057,
    destek1: 19.833,
    destek2: 19.407,
    destek3: 19.183,
    direnc1: 20.483,
    direnc2: 20.707,
    direnc3: 21.133,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "PGSUS",
    fark: -4.5,
    son: 153.6,
    pivot: 160.8333,
    destek1: 157.5666,
    destek2: 155.4333,
    destek3: 152.1666,
    direnc1: 162.9666,
    direnc2: 166.2333,
    direnc3: 168.3666,
    yorum: "İkinci destek seviyesinin altına indi.",
  },
  {
    sembol: "SAHOL",
    fark: -2.85,
    son: 84.8,
    pivot: 87.2833,
    destek1: 86.6166,
    destek2: 85.8833,
    destek3: 85.2166,
    direnc1: 88.01666,
    direnc2: 88.6833,
    direnc3: 89.4166,
    yorum: "Üçüncü destek seviyesinin altına indi.",
  },
  {
    sembol: "SASA",
    fark: -3.81,
    son: 2.45,
    pivot: 2.547,
    destek1: 2.503,
    destek2: 2.457,
    destek3: 2.413,
    direnc1: 2.593,
    direnc2: 2.637,
    direnc3: 2.683,
    yorum: "İkinci destek seviyesinin altına indi.",
  },
  {
    sembol: "SISE",
    fark: -1.74,
    son: 41.84,
    pivot: 42.58,
    destek1: 42.08,
    destek2: 41.64,
    destek3: 41.14,
    direnc1: 43.02,
    direnc2: 43.52,
    direnc3: 43.96,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "TAVHL",
    fark: 2.39,
    son: 271.75,
    pivot: 265.417,
    destek1: 262.833,
    destek2: 257.667,
    destek3: 255.083,
    direnc1: 270.583,
    direnc2: 273.167,
    direnc3: 278.333,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "TCELL",
    fark: -0.69,
    son: 101.4,
    pivot: 102.09999,
    destek1: 101,
    destek2: 100.3,
    destek3: 99.2,
    direnc1: 102.7999,
    direnc2: 103.8999,
    direnc3: 104.5999,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "THYAO",
    fark: -2.16,
    son: 313.25,
    pivot: 320.167,
    destek1: 315.083,
    destek2: 311.167,
    destek3: 306.083,
    direnc1: 324.083,
    direnc2: 329.167,
    direnc3: 333.083,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "TOASO",
    fark: 1.15,
    son: 271.75,
    pivot: 268.6666,
    destek1: 257.3333,
    destek2: 250.4166,
    destek3: 239.08333,
    direnc1: 275.5833,
    direnc2: 286.9166,
    direnc3: 293.8333,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "TRALT",
    fark: -5.76,
    son: 44.18,
    pivot: 46.8799,
    destek1: 45.3399,
    destek2: 44.2199,
    destek3: 42.6799,
    direnc1: 47.9999,
    direnc2: 49.5399,
    direnc3: 50.6599,
    yorum: "İkinci destek seviyesinin altına indi.",
  },
  {
    sembol: "TTKOM",
    fark: -2.29,
    son: 51.25,
    pivot: 52.45,
    destek1: 51.6,
    destek2: 51.15,
    destek3: 50.3,
    direnc1: 52.9,
    direnc2: 53.75,
    direnc3: 54.2,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "TUPRS",
    fark: 1.33,
    son: 297.75,
    pivot: 293.8333,
    destek1: 288.6666,
    destek2: 283.8333,
    destek3: 278.6666,
    direnc1: 298.6666,
    direnc2: 303.8333,
    direnc3: 308.6666,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "VAKBN",
    fark: -3,
    son: 29.1,
    pivot: 30,
    destek1: 29.72,
    destek2: 29.36,
    destek3: 29.08,
    direnc1: 30.36,
    direnc2: 30.64,
    direnc3: 31,
    yorum: "İkinci destek seviyesinin altına indi.",
  },
  {
    sembol: "YKBNK",
    fark: -2.79,
    son: 31.84,
    pivot: 32.7533,
    destek1: 32.4266,
    destek2: 32.1133,
    destek3: 31.7866,
    direnc1: 33.06666,
    direnc2: 33.3933,
    direnc3: 33.7066,
    yorum: "İkinci destek seviyesinin altına indi.",
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