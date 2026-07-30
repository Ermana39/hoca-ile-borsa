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
  fark: -1.95,
  son: 13286.64,
  pivot: 13557.49,
  destek1: 13393.08,
  destek2: 13284.61,
  destek3: 13120.2,
  direnc1: 13665.96,
  direnc2: 13830.37,
  direnc3: 13938.84,
  yorum: "İlk destek seviyesinin altına indi.",
};

const pivotVerileri: PivotRow[] = [
  {
    sembol: "AEFES",
    fark: 1.97,
    son: 22.08,
    pivot: 21.6533,
    destek1: 21.2266,
    destek2: 20.9733,
    destek3: 20.5466,
    direnc1: 21.9066,
    direnc2: 22.3333,
    direnc3: 22.5866,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "AKBNK",
    fark: -4.02,
    son: 61.6,
    pivot: 64.1833,
    destek1: 62.01666,
    destek2: 60.7333,
    destek3: 58.5666,
    direnc1: 65.4666,
    direnc2: 67.6333,
    direnc3: 68.9166,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "ASELS",
    fark: -5.31,
    son: 337.5,
    pivot: 356.4166,
    destek1: 350.08333,
    destek2: 345.6666,
    destek3: 339.3333,
    direnc1: 360.8333,
    direnc2: 367.1666,
    direnc3: 371.5833,
    yorum: "Üçüncü destek seviyesinin altına indi.",
  },
  {
    sembol: "ASTOR",
    fark: 2.99,
    son: 287.5,
    pivot: 279.1666,
    destek1: 272.8333,
    destek2: 267.6666,
    destek3: 261.3333,
    direnc1: 284.3333,
    direnc2: 290.6666,
    direnc3: 295.8333,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "BIMAS",
    fark: -1.2,
    son: 383,
    pivot: 387.6666,
    destek1: 382.3333,
    destek2: 378.1666,
    destek3: 372.8333,
    direnc1: 391.8333,
    direnc2: 397.1666,
    direnc3: 401.3333,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "DSTKF",
    fark: -0.64,
    son: 1798,
    pivot: 1809.6666,
    destek1: 1685.3333,
    destek2: 1555.6666,
    destek3: 1431.3333,
    direnc1: 1939.3333,
    direnc2: 2063.6666,
    direnc3: 2193.3333,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "EKGYO",
    fark: -1.86,
    son: 17.73,
    pivot: 18.06666,
    destek1: 17.8433,
    destek2: 17.6966,
    destek3: 17.4733,
    direnc1: 18.2133,
    direnc2: 18.4366,
    direnc3: 18.5833,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "ENKAI",
    fark: -3.34,
    son: 85.25,
    pivot: 88.1999,
    destek1: 86.45,
    destek2: 85.35,
    destek3: 83.6,
    direnc1: 89.3,
    direnc2: 91.04999,
    direnc3: 92.1499,
    yorum: "İkinci destek seviyesinin altına indi.",
  },
  {
    sembol: "EREGL",
    fark: -2.44,
    son: 42.4,
    pivot: 43.46,
    destek1: 42.6,
    destek2: 42.04,
    destek3: 41.18,
    direnc1: 44.01999,
    direnc2: 44.8799,
    direnc3: 45.4399,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "FROTO",
    fark: 0.04,
    son: 76.7,
    pivot: 76.6666,
    destek1: 75.2833,
    destek2: 74.4666,
    destek3: 73.08332,
    direnc1: 77.4833,
    direnc2: 78.8666,
    direnc3: 79.6833,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "GARAN",
    fark: -2.76,
    son: 123.1,
    pivot: 126.5999,
    destek1: 124.3,
    destek2: 122.3,
    destek3: 120.000007629,
    direnc1: 128.5999,
    direnc2: 130.8999,
    direnc3: 132.8999,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "GUBRF",
    fark: -1.11,
    son: 401,
    pivot: 405.5,
    destek1: 391.5,
    destek2: 384,
    destek3: 370,
    direnc1: 413,
    direnc2: 427,
    direnc3: 434.5,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "ISCTR",
    fark: -3.66,
    son: 12.03,
    pivot: 12.4866,
    destek1: 12.06333,
    destek2: 11.8266,
    destek3: 11.4033,
    direnc1: 12.7233,
    direnc2: 13.1466,
    direnc3: 13.3833,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "KCHOL",
    fark: -2.01,
    son: 191.5,
    pivot: 195.4333,
    destek1: 190.7666,
    destek2: 187.9333,
    destek3: 183.2666,
    direnc1: 198.2666,
    direnc2: 202.9333,
    direnc3: 205.7666,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "KRDMD",
    fark: -2.85,
    son: 40.88,
    pivot: 42.07999,
    destek1: 41.2199,
    destek2: 40.5999,
    destek3: 39.74,
    direnc1: 42.6999,
    direnc2: 43.5599,
    direnc3: 44.1799,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "MGROS",
    fark: -0.82,
    son: 623,
    pivot: 628.1666,
    destek1: 617.3333,
    destek2: 606.1666,
    destek3: 595.3333,
    direnc1: 639.3333,
    direnc2: 650.1666,
    direnc3: 661.3333,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "PETKM",
    fark: -5.56,
    son: 19.01,
    pivot: 20.13,
    destek1: 19.66,
    destek2: 19.37,
    destek3: 18.9,
    direnc1: 20.42,
    direnc2: 20.89,
    direnc3: 21.18,
    yorum: "İkinci destek seviyesinin altına indi.",
  },
  {
    sembol: "PGSUS",
    fark: -4.52,
    son: 148.7,
    pivot: 155.7333,
    destek1: 151.4666,
    destek2: 149.3333,
    destek3: 145.06668,
    direnc1: 157.8666,
    direnc2: 162.1333,
    direnc3: 164.2666,
    yorum: "İkinci destek seviyesinin altına indi.",
  },
  {
    sembol: "SAHOL",
    fark: -4.06,
    son: 82.3,
    pivot: 85.7833,
    destek1: 83.3166,
    destek2: 81.8333,
    destek3: 79.3666,
    direnc1: 87.2666,
    direnc2: 89.7333,
    direnc3: 91.2166,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "SASA",
    fark: -0.4,
    son: 2.48,
    pivot: 2.49,
    destek1: 2.41,
    destek2: 2.37,
    destek3: 2.29,
    direnc1: 2.5299,
    direnc2: 2.6099,
    direnc3: 2.6499,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "SISE",
    fark: -1.9,
    son: 41.34,
    pivot: 42.1399,
    destek1: 41.34,
    destek2: 40.84,
    destek3: 40.04,
    direnc1: 42.6399,
    direnc2: 43.4399,
    direnc3: 43.9399,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "TAVHL",
    fark: -1.47,
    son: 267.75,
    pivot: 271.75,
    destek1: 267.25,
    destek2: 262.75,
    destek3: 258.25,
    direnc1: 276.25,
    direnc2: 280.75,
    direnc3: 285.25,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "TCELL",
    fark: 0,
    son: 101.5,
    pivot: 101.5,
    destek1: 100.5999,
    destek2: 99.7999,
    destek3: 98.8999,
    direnc1: 102.3,
    direnc2: 103.2,
    direnc3: 104.000007629,
    yorum: "Pivot değerine eşit.",
  },
  {
    sembol: "THYAO",
    fark: -1.83,
    son: 308.25,
    pivot: 314,
    destek1: 309.75,
    destek2: 306.25,
    destek3: 302,
    direnc1: 317.5,
    direnc2: 321.75,
    direnc3: 325.25,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "TOASO",
    fark: -2.8,
    son: 260.5,
    pivot: 268,
    destek1: 264.25,
    destek2: 256.75,
    destek3: 253,
    direnc1: 275.5,
    direnc2: 279.25,
    direnc3: 286.75,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "TRALT",
    fark: 2.73,
    son: 46.18,
    pivot: 44.9533,
    destek1: 43.1666,
    destek2: 42.1533,
    destek3: 40.3666,
    direnc1: 45.9666,
    direnc2: 47.7533,
    direnc3: 48.7666,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "TTKOM",
    fark: -1.78,
    son: 50.7,
    pivot: 51.6166,
    destek1: 50.4833,
    destek2: 49.7166,
    destek3: 48.5833,
    direnc1: 52.3833,
    direnc2: 53.5166,
    direnc3: 54.2833,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "TUPRS",
    fark: -2.84,
    son: 288,
    pivot: 296.4166,
    destek1: 291.3333,
    destek2: 284.9166,
    destek3: 279.8333,
    direnc1: 302.8333,
    direnc2: 307.9166,
    direnc3: 314.3333,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "VAKBN",
    fark: -2.1,
    son: 28.88,
    pivot: 29.5,
    destek1: 28.5799,
    destek2: 28.05999,
    destek3: 27.1399,
    direnc1: 30.02,
    direnc2: 30.94,
    direnc3: 31.46,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "YKBNK",
    fark: -4.02,
    son: 31,
    pivot: 32.3,
    destek1: 31.24,
    destek2: 30.64,
    destek3: 29.58,
    direnc1: 32.9,
    direnc2: 33.96,
    direnc3: 34.56,
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