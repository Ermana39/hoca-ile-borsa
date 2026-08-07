export const metadata = {
  title: "Pivot Analizi | Hoca İle Borsa",
  description:
    "Pivot, destek ve direnç seviyelerine göre hisselerin teknik görünümünü tablo halinde inceleyin.",
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
  fark: 0.16,
  son: 13779.39,
  pivot: 13757.36,
  destek1: 13709.3,
  destek2: 13619.79,
  destek3: 13571.73,
  direnc1: 13846.87,
  direnc2: 13894.93,
  direnc3: 13984.44,
  yorum: "Pivot değerinin üstünde seyrediyor.",
};

const pivotVerileri: PivotRow[] = [
  { sembol: "AEFES", fark: 0.50, son: 21.58, pivot: 21.473, destek1: 21.187, destek2: 20.913, destek3: 20.627, direnc1: 21.747, direnc2: 22.033, direnc3: 22.307, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "AKBNK", fark: -0.20, son: 67.40, pivot: 67.533, destek1: 66.217, destek2: 65.333, destek3: 64.017, direnc1: 68.417, direnc2: 69.733, direnc3: 70.617, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "ASELS", fark: -1.03, son: 353.75, pivot: 357.4166, destek1: 350.3333, destek2: 337.6666, destek3: 330.5833, direnc1: 370.08333, direnc2: 377.1666, direnc3: 389.8333, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "ASTOR", fark: -2.55, son: 308.50, pivot: 316.5833, destek1: 312.4166, destek2: 305.5833, destek3: 301.4166, direnc1: 323.4166, direnc2: 327.5833, direnc3: 334.4166, yorum: "İlk destek seviyesinin altına indi." },
  { sembol: "BIMAS", fark: 1.03, son: 385.75, pivot: 381.833, destek1: 377.917, destek2: 373.583, destek3: 369.667, direnc1: 386.167, direnc2: 390.083, direnc3: 394.417, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "DSTKF", fark: 4.38, son: 1773, pivot: 1698.667, destek1: 1629.333, destek2: 1558.667, destek3: 1489.333, direnc1: 1769.333, direnc2: 1838.667, direnc3: 1909.333, yorum: "İlk direnç seviyesinin üstüne çıktı." },
  { sembol: "EKGYO", fark: -1.77, son: 17.94, pivot: 18.2633, destek1: 18.04666, destek2: 17.9033, destek3: 17.6866, direnc1: 18.4066, direnc2: 18.6233, direnc3: 18.7666, yorum: "İlk destek seviyesinin altına indi." },
  { sembol: "ENKAI", fark: -0.23, son: 86.35, pivot: 86.55, destek1: 85.04999, destek2: 84.2499, destek3: 82.7499, direnc1: 87.35, direnc2: 88.85, direnc3: 89.65, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "EREGL", fark: -7.26, son: 38.68, pivot: 41.7066, destek1: 41.1533, destek2: 40.7466, destek3: 40.1933, direnc1: 42.1133, direnc2: 42.6666, direnc3: 43.07333, yorum: "Üçüncü destek seviyesinin altına indi." },
  { sembol: "FROTO", fark: -1.47, son: 78.10, pivot: 79.267, destek1: 77.683, destek2: 76.767, destek3: 75.183, direnc1: 80.183, direnc2: 81.767, direnc3: 82.683, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "GARAN", fark: -1.42, son: 127.00, pivot: 128.833, destek1: 126.567, destek2: 125.333, destek3: 123.067, direnc1: 130.067, direnc2: 132.333, direnc3: 133.567, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "GUBRF", fark: 3.30, son: 446.25, pivot: 432, destek1: 425.75, destek2: 418.75, destek3: 412.5, direnc1: 439, direnc2: 445.25, direnc3: 452.25, yorum: "İkinci direnç seviyesinin üstüne çıktı." },
  { sembol: "ISCTR", fark: -0.48, son: 12.36, pivot: 12.42, destek1: 12.240, destek2: 12.150, destek3: 11.970, direnc1: 12.51, direnc2: 12.69, direnc3: 12.78, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "KCHOL", fark: -0.32, son: 198.50, pivot: 199.1333, destek1: 192.3666, destek2: 188.8333, destek3: 182.06668, direnc1: 202.6666, direnc2: 209.4333, direnc3: 212.9666, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "KRDMD", fark: -5.07, son: 39.58, pivot: 41.693, destek1: 40.567, destek2: 39.933, destek3: 38.807, direnc1: 42.327, direnc2: 43.453, direnc3: 44.087, yorum: "İkinci destek seviyesinin altına indi." },
  { sembol: "MGROS", fark: 4.39, son: 654.50, pivot: 627, destek1: 619.5, destek2: 613, destek3: 605.5, direnc1: 633.5, direnc2: 641, direnc3: 647.5, yorum: "Üçüncü direnç seviyesinin üstüne çıktı." },
  { sembol: "PETKM", fark: -4.90, son: 18.52, pivot: 19.4733, destek1: 18.5666, destek2: 18.07333, destek3: 17.1666, direnc1: 19.9666, direnc2: 20.8733, direnc3: 21.3666, yorum: "İlk destek seviyesinin altına indi." },
  { sembol: "PGSUS", fark: -1.24, son: 153.50, pivot: 155.433, destek1: 153.567, destek2: 152.433, destek3: 150.567, direnc1: 156.567, direnc2: 158.433, direnc3: 159.567, yorum: "İlk destek seviyesinin altına indi." },
  { sembol: "SAHOL", fark: -0.62, son: 88.05, pivot: 88.600, destek1: 87.600, destek2: 87.100, destek3: 86.100, direnc1: 89.100, direnc2: 90.100, direnc3: 90.600, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "SASA", fark: 0.13, son: 2.58, pivot: 2.5766, destek1: 2.5433, destek2: 2.5066, destek3: 2.4733, direnc1: 2.6133, direnc2: 2.6466, direnc3: 2.6833, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "SISE", fark: -1.93, son: 41.34, pivot: 42.153, destek1: 41.427, destek2: 40.973, destek3: 40.247, direnc1: 42.607, direnc2: 43.333, direnc3: 43.787, yorum: "İlk destek seviyesinin altına indi." },
  { sembol: "TAVHL", fark: -0.51, son: 275.50, pivot: 276.917, destek1: 269.833, destek2: 266.167, destek3: 259.083, direnc1: 280.583, direnc2: 287.667, direnc3: 291.333, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "TCELL", fark: 0.03, son: 105.10, pivot: 105.067, destek1: 103.833, destek2: 102.367, destek3: 101.133, direnc1: 106.533, direnc2: 107.767, direnc3: 109.233, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "THYAO", fark: -2.34, son: 306.25, pivot: 313.5833, destek1: 308.9166, destek2: 306.5833, destek3: 301.9166, direnc1: 315.9166, direnc2: 320.5833, direnc3: 322.9166, yorum: "İkinci destek seviyesinin altına indi." },
  { sembol: "TOASO", fark: 1.41, son: 263.00, pivot: 259.333, destek1: 254.667, destek2: 252.333, destek3: 247.667, direnc1: 261.667, direnc2: 266.333, direnc3: 268.667, yorum: "İlk direnç seviyesinin üstüne çıktı." },
  { sembol: "TRALT", fark: 5.71, son: 52.15, pivot: 49.333, destek1: 48.727, destek2: 48.013, destek3: 47.407, direnc1: 50.047, direnc2: 50.653, direnc3: 51.367, yorum: "Üçüncü direnç seviyesinin üstüne çıktı." },
  { sembol: "TTKOM", fark: 2.67, son: 54.50, pivot: 53.083, destek1: 52.067, destek2: 50.633, destek3: 49.617, direnc1: 54.517, direnc2: 55.533, direnc3: 56.967, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "TUPRS", fark: 2.32, son: 323.50, pivot: 316.167, destek1: 308.833, destek2: 296.167, destek3: 288.833, direnc1: 328.833, direnc2: 336.167, direnc3: 348.833, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "VAKBN", fark: -1.41, son: 30.74, pivot: 31.180, destek1: 30.620, destek2: 30.28, destek3: 29.720, direnc1: 31.520, direnc2: 32.080, direnc3: 32.420, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "YKBNK", fark: -0.70, son: 34.02, pivot: 34.260, destek1: 33.74, destek2: 33.440, destek3: 32.92, direnc1: 34.56, direnc2: 35.080, direnc3: 35.380, yorum: "Pivot değerinin altında seyrediyor." },
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