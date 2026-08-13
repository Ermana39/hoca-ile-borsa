import { seoAciklamasi } from "@/lib/seo-metadata";
export const metadata = {
  title: "BIST Pivot Analizi ve Destek Direnç Seviyeleri",
  description:
    seoAciklamasi("Pivot, destek ve direnç seviyelerine göre hisselerin teknik görünümünü tablo halinde inceleyin.", "Güncel tablolar, karşılaştırmalar ve yatırımcıların takip edebileceği temel göstergeler birlikte sunulur."),
  alternates: {
    canonical: "https://www.hocaileborsa.com/borsa/pivot-analizi",
  },
};

import Link from "@/components/NoPrefetchLink";

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
  fark: 1.08,
  son: 14132.23,
  pivot: 13980.720,
  destek1: 13830.440,
  destek2: 13550.750,
  destek3: 13400.470,
  direnc1: 14260.410,
  direnc2: 14410.690,
  direnc3: 14690.380,
  yorum: "Pivot değerinin üstünde seyrediyor.",
};

const pivotVerileri: PivotRow[] = [
  { sembol: "AEFES", fark: -1.64, son: 19.25, pivot: 19.57, destek1: 18.98, destek2: 18.44, destek3: 17.85, direnc1: 20.1099, direnc2: 20.6999, direnc3: 21.2399, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "AKBNK", fark: 1.62, son: 69.05, pivot: 67.9499, destek1: 66.7, destek2: 64.6, destek3: 63.35, direnc1: 70.05, direnc2: 71.2999, direnc3: 73.3999, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "ASELS", fark: 5.65, son: 395.75, pivot: 374.583, destek1: 366.4166, destek2: 351.8333, destek3: 343.6666, direnc1: 389.1666, direnc2: 397.3333, direnc3: 411.9166, yorum: "İlk direnç seviyesinin üstüne çıktı." },
  { sembol: "ASTOR", fark: 7.38, son: 345.5, pivot: 321.75, destek1: 311.75, destek2: 291.75, destek3: 281.75, direnc1: 341.75, direnc2: 351.75, direnc3: 371.75, yorum: "İlk direnç seviyesinin üstüne çıktı." },
  { sembol: "BIMAS", fark: -0.96, son: 376.5, pivot: 380.166, destek1: 374.0833, destek2: 364.1666, destek3: 358.0833, direnc1: 390.0833, direnc2: 396.1666, direnc3: 406.0833, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "DSTKF", fark: 2.53, son: 1890.0, pivot: 1843.333, destek1: 1800.666, destek2: 1728.333, destek3: 1685.6666, direnc1: 1915.6666, direnc2: 1958.3333, direnc3: 2030.6666, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "EKGYO", fark: 0.44, son: 18.4, pivot: 18.32, destek1: 18.03, destek2: 17.5499, destek3: 17.2599, direnc1: 18.8, direnc2: 19.09, direnc3: 19.57, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "ENKAI", fark: -0.48, son: 85.85, pivot: 86.2666, destek1: 85.4833, destek2: 84.3166, destek3: 83.5333, direnc1: 87.4333, direnc2: 88.2166, direnc3: 89.3833, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "EREGL", fark: 3.58, son: 38.24, pivot: 36.92, destek1: 36.5, destek2: 35.82, destek3: 35.4, direnc1: 37.5999, direnc2: 38.0199, direnc3: 38.6999, yorum: "İkinci direnç seviyesinin üstüne çıktı." },
  { sembol: "FROTO", fark: 0.29, son: 79.7, pivot: 79.4666, destek1: 78.5333, destek2: 77.3166, destek3: 76.3833, direnc1: 80.6833, direnc2: 81.6166, direnc3: 82.8333, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "GARAN", fark: 0.15, son: 129.6, pivot: 129.4, destek1: 127.5, destek2: 124.0, destek3: 122.09999, direnc1: 132.9, direnc2: 134.8, direnc3: 138.3, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "GUBRF", fark: -1.95, son: 418.5, pivot: 426.8333, destek1: 418.1666, destek2: 409.3333, destek3: 400.6666, direnc1: 435.6666, direnc2: 444.3333, direnc3: 453.1666, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "ISCTR", fark: 0.94, son: 12.51, pivot: 12.3933, destek1: 12.1566, destek2: 11.7533, destek3: 11.5156, direnc1: 12.7966, direnc2: 13.0333, direnc3: 13.4366, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "KCHOL", fark: -0.54, son: 202.4, pivot: 203.5, destek1: 201.0, destek2: 196.1999, destek3: 193.6999, direnc1: 208.3, direnc2: 210.8, direnc3: 215.6, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "KRDMD", fark: 3.01, son: 41.76, pivot: 40.5399, destek1: 39.8399, destek2: 38.7399, destek3: 38.03999, direnc1: 41.64, direnc2: 42.34, direnc3: 43.44, yorum: "İlk direnç seviyesinin üstüne çıktı." },
  { sembol: "MGROS", fark: -5.21, son: 552.0, pivot: 582.3333, destek1: 561.6666, destek2: 551.3333, destek3: 530.6666, direnc1: 592.6666, direnc2: 613.3333, direnc3: 623.6666, yorum: "İlk destek seviyesinin altına indi." },
  { sembol: "PETKM", fark: 1.02, son: 18.81, pivot: 18.62, destek1: 18.3799, destek2: 18.1499, destek3: 17.9099, direnc1: 18.85, direnc2: 19.09, direnc3: 19.32, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "PGSUS", fark: 0.48, son: 152.2, pivot: 151.4666, destek1: 149.7333, destek2: 147.5666, destek3: 145.8333, direnc1: 153.6333, direnc2: 155.3666, direnc3: 157.5333, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "SAHOL", fark: 0.83, son: 88.8, pivot: 88.0666, destek1: 87.0833, destek2: 85.9166, destek3: 84.9333, direnc1: 89.2333, direnc2: 90.2166, direnc3: 91.3833, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "SASA", fark: 0.27, son: 2.45, pivot: 2.4433, destek1: 2.3666, destek2: 2.2433, destek3: 2.1666, direnc1: 2.5666, direnc2: 2.6433, direnc3: 2.7666, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "SISE", fark: 2.24, son: 41.64, pivot: 40.7266, destek1: 40.2133, destek2: 39.4666, destek3: 38.9533, direnc1: 41.4733, direnc2: 41.9866, direnc3: 42.7333, yorum: "İlk direnç seviyesinin üstüne çıktı." },
  { sembol: "TAVHL", fark: 0.24, son: 278.75, pivot: 278.0833, destek1: 273.9166, destek2: 268.8333, destek3: 264.6666, direnc1: 283.1666, direnc2: 287.3333, direnc3: 292.4166, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "TCELL", fark: -0.35, son: 103.1, pivot: 103.4666, destek1: 102.2333, destek2: 100.3666, destek3: 99.1333, direnc1: 105.3333, direnc2: 106.5666, direnc3: 108.4333, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "THYAO", fark: 0.46, son: 308.0, pivot: 306.5833, destek1: 302.6666, destek2: 296.5833, destek3: 292.6666, direnc1: 312.6666, direnc2: 316.5833, direnc3: 322.6666, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "TOASO", fark: 0.81, son: 269.75, pivot: 267.5833, destek1: 263.4166, destek2: 258.5833, destek3: 254.4166, direnc1: 272.4166, direnc2: 276.5833, direnc3: 281.4166, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "TRALT", fark: 0.64, son: 48.1, pivot: 47.7933, destek1: 46.7266, destek2: 45.7533, destek3: 44.6866, direnc1: 48.7666, direnc2: 49.8333, direnc3: 50.8066, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "TTKOM", fark: -1.93, son: 54.95, pivot: 56.0333, destek1: 55.4166, destek2: 54.4833, destek3: 53.8666, direnc1: 56.9666, direnc2: 57.5833, direnc3: 58.5166, yorum: "İlk destek seviyesinin altına indi." },
  { sembol: "TUPRS", fark: -0.41, son: 346.0, pivot: 347.4166, destek1: 341.3333, destek2: 331.4166, destek3: 325.3333, direnc1: 357.3333, direnc2: 363.4166, direnc3: 373.3333, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "VAKBN", fark: 2.26, son: 31.04, pivot: 30.3533, destek1: 29.5666, destek2: 28.1233, destek3: 27.4266, direnc1: 31.7066, direnc2: 32.4933, direnc3: 33.8466, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "YKBNK", fark: 1.08, son: 35.54, pivot: 35.1599, destek1: 34.54, destek2: 33.38, destek3: 32.76, direnc1: 36.3199, direnc2: 36.9399, direnc3: 38.0999, yorum: "Pivot değerinin üstünde seyrediyor." },
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