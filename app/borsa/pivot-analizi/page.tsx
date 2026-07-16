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
  fark: 1.46,
  son: 14251.29,
  pivot: 14045.850,
  destek1: 13976.100,
  destek2: 13872.230,
  destek3: 13802.480,
  direnc1: 14149.720,
  direnc2: 14219.470,
  direnc3: 14323.340,
  yorum: "İkinci direnç seviyesinin üstüne çıktı.",
};

const pivotVerileri: PivotRow[] = [
  {
    sembol: "AEFES",
    fark: 3.58,
    son: 20.76,
    pivot: 20.043,
    destek1: 19.867,
    destek2: 19.713,
    destek3: 19.537,
    direnc1: 20.197,
    direnc2: 20.373,
    direnc3: 20.527,
    yorum: "Üçüncü direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "AKBNK",
    fark: -0.15,
    son: 68.6,
    pivot: 68.7,
    destek1: 67.85,
    destek2: 66.6,
    destek3: 65.75,
    direnc1: 69.95,
    direnc2: 70.8,
    direnc3: 72.05,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "ASELS",
    fark: 0.98,
    son: 352.5,
    pivot: 349.08333,
    destek1: 344.9166,
    destek2: 341.3333,
    destek3: 337.1666,
    direnc1: 352.6666,
    direnc2: 356.8333,
    direnc3: 360.4166,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "ASTOR",
    fark: -3.33,
    son: 312.5,
    pivot: 323.25,
    destek1: 315.75,
    destek2: 306.5,
    destek3: 299.0,
    direnc1: 332.5,
    direnc2: 340.0,
    direnc3: 349.25,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "BIMAS",
    fark: 4.05,
    son: 396.25,
    pivot: 380.833,
    destek1: 377.167,
    destek2: 369.833,
    destek3: 366.167,
    direnc1: 388.167,
    direnc2: 391.833,
    direnc3: 399.167,
    yorum: "İkinci direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "DSTKF",
    fark: -9.96,
    son: 2802.5,
    pivot: 3112.5,
    destek1: 3112.5,
    destek2: 3112.5,
    destek3: 3112.5,
    direnc1: 3112.5,
    direnc2: 3112.5,
    direnc3: 3112.5,
    yorum: "Üçüncü destek seviyesinin altına indi.",
  },
  {
    sembol: "EKGYO",
    fark: -1.08,
    son: 20.76,
    pivot: 20.987,
    destek1: 20.653,
    destek2: 20.287,
    destek3: 19.953,
    direnc1: 21.353,
    direnc2: 21.687,
    direnc3: 22.053,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "ENKAI",
    fark: 2.96,
    son: 92.15,
    pivot: 89.5,
    destek1: 88.65,
    destek2: 87.6,
    destek3: 86.75,
    direnc1: 90.55,
    direnc2: 91.4,
    direnc3: 92.45,
    yorum: "İkinci direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "EREGL",
    fark: 5.84,
    son: 44.06,
    pivot: 41.627,
    destek1: 40.973,
    destek2: 40.067,
    destek3: 39.413,
    direnc1: 42.533,
    direnc2: 43.187,
    direnc3: 44.093,
    yorum: "İkinci direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "FROTO",
    fark: 4.3,
    son: 84.4,
    pivot: 80.9166,
    destek1: 80.2333,
    destek2: 79.4166,
    destek3: 78.7333,
    direnc1: 81.7333,
    direnc2: 82.4166,
    direnc3: 83.2333,
    yorum: "Üçüncü direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "GARAN",
    fark: 0.6,
    son: 128.7,
    pivot: 127.933,
    destek1: 126.667,
    destek2: 124.433,
    destek3: 123.167,
    direnc1: 130.167,
    direnc2: 131.433,
    direnc3: 133.667,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "GUBRF",
    fark: 2.2,
    son: 422.25,
    pivot: 413.167,
    destek1: 408.333,
    destek2: 403.417,
    destek3: 398.583,
    direnc1: 418.083,
    direnc2: 422.917,
    direnc3: 427.833,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "ISCTR",
    fark: 1.16,
    son: 13.99,
    pivot: 13.83,
    destek1: 13.69,
    destek2: 13.49,
    destek3: 13.35,
    direnc1: 14.03,
    direnc2: 14.17,
    direnc3: 14.37,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "KCHOL",
    fark: 3.3,
    son: 197.0,
    pivot: 190.7,
    destek1: 189.5,
    destek2: 187.9,
    destek3: 186.3,
    direnc1: 192.3,
    direnc2: 193.5,
    direnc3: 195.1,
    yorum: "Üçüncü direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "KRDMD",
    fark: 6.32,
    son: 42.48,
    pivot: 39.953,
    destek1: 38.827,
    destek2: 36.813,
    destek3: 35.687,
    direnc1: 41.967,
    direnc2: 43.093,
    direnc3: 45.107,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "MGROS",
    fark: 1.81,
    son: 627.0,
    pivot: 615.833,
    destek1: 589.667,
    destek2: 571.333,
    destek3: 545.167,
    direnc1: 634.167,
    direnc2: 660.333,
    direnc3: 678.667,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "PETKM",
    fark: 4.33,
    son: 20.62,
    pivot: 19.763,
    destek1: 19.4266,
    destek2: 19.2533,
    destek3: 18.9166,
    direnc1: 19.9366,
    direnc2: 20.2733,
    direnc3: 20.4466,
    yorum: "Üçüncü direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "PGSUS",
    fark: 1.57,
    son: 167.7,
    pivot: 165.09999,
    destek1: 163.7999,
    destek2: 161.5999,
    destek3: 160.2999,
    direnc1: 167.2999,
    direnc2: 168.5999,
    direnc3: 170.7999,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "SAHOL",
    fark: 1.03,
    son: 90.3,
    pivot: 89.383,
    destek1: 88.717,
    destek2: 87.983,
    destek3: 87.317,
    direnc1: 90.117,
    direnc2: 90.783,
    direnc3: 91.517,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "SASA",
    fark: 0.0,
    son: 2.54,
    pivot: 2.5399,
    destek1: 2.48,
    destek2: 2.44,
    destek3: 2.38,
    direnc1: 2.5799,
    direnc2: 2.6399,
    direnc3: 2.6799,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "SISE",
    fark: 3.77,
    son: 45.0,
    pivot: 43.367,
    destek1: 42.893,
    destek2: 42.187,
    destek3: 41.713,
    direnc1: 44.073,
    direnc2: 44.547,
    direnc3: 45.253,
    yorum: "İkinci direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "TAVHL",
    fark: 3.92,
    son: 267.5,
    pivot: 257.417,
    destek1: 255.583,
    destek2: 252.667,
    destek3: 250.833,
    direnc1: 260.333,
    direnc2: 262.167,
    direnc3: 265.083,
    yorum: "Üçüncü direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "TCELL",
    fark: 2.22,
    son: 112.2,
    pivot: 109.767,
    destek1: 108.533,
    destek2: 106.867,
    destek3: 105.633,
    direnc1: 111.433,
    direnc2: 112.667,
    direnc3: 114.333,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "THYAO",
    fark: 1.23,
    son: 330.0,
    pivot: 326.0,
    destek1: 321.5,
    destek2: 317.0,
    destek3: 312.5,
    direnc1: 330.5,
    direnc2: 335.0,
    direnc3: 339.5,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "TOASO",
    fark: 2.84,
    son: 305.0,
    pivot: 296.583,
    destek1: 291.667,
    destek2: 288.333,
    destek3: 283.417,
    direnc1: 299.917,
    direnc2: 304.833,
    direnc3: 308.167,
    yorum: "İkinci direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "TRALT",
    fark: 0.52,
    son: 51.3,
    pivot: 51.033,
    destek1: 50.217,
    destek2: 49.633,
    destek3: 48.817,
    direnc1: 51.617,
    direnc2: 52.433,
    direnc3: 53.017,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "TTKOM",
    fark: 1.79,
    son: 58.65,
    pivot: 57.617,
    destek1: 56.983,
    destek2: 56.467,
    destek3: 55.833,
    direnc1: 58.133,
    direnc2: 58.767,
    direnc3: 59.283,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "TUPRS",
    fark: 5.76,
    son: 286.25,
    pivot: 270.666,
    destek1: 267.833,
    destek2: 264.9166,
    destek3: 262.08333,
    direnc1: 273.5833,
    direnc2: 276.4166,
    direnc3: 279.3333,
    yorum: "Üçüncü direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "VAKBN",
    fark: 1.7,
    son: 31.8,
    pivot: 31.267,
    destek1: 30.933,
    destek2: 30.267,
    destek3: 29.933,
    direnc1: 31.933,
    direnc2: 32.267,
    direnc3: 32.933,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "YKBNK",
    fark: -1.53,
    son: 33.52,
    pivot: 34.0399,
    destek1: 33.6999,
    destek2: 33.4399,
    destek3: 33.0999,
    direnc1: 34.3,
    direnc2: 34.64,
    direnc3: 34.9,
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