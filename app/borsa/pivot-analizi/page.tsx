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
  fark: 0.00,
  son: 13811.60,
  pivot: 13811.460,
  destek1: 13666.740,
  destek2: 13554.090,
  destek3: 13409.370,
  direnc1: 13924.110,
  direnc2: 14068.880,
  direnc3: 14181.480,
  yorum: "Pivot değerinin üstünde seyrediyor.",
};

const pivotVerileri: PivotRow[] = [
  { sembol: "AEFES", fark: 0.43, son: 21.72, pivot: 21.627, destek1: 21.373, destek2: 21.167, destek3: 20.913, direnc1: 21.833, direnc2: 22.087, direnc3: 22.293, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "AKBNK", fark: -0.74, son: 66.80, pivot: 67.3, destek1: 66.65, destek2: 65.9, destek3: 65.25, direnc1: 68.050, direnc2: 68.700, direnc3: 69.450, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "ASELS", fark: -0.37, son: 356.25, pivot: 357.5833, destek1: 346.6666, destek2: 339.5833, destek3: 328.6666, direnc1: 364.6666, direnc2: 375.5833, direnc3: 382.6666, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "ASTOR", fark: -2.63, son: 305.75, pivot: 314.000, destek1: 302.500, destek2: 296.500, destek3: 285.000, direnc1: 320.000, direnc2: 331.500, direnc3: 337.500, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "BIMAS", fark: -0.52, son: 384.25, pivot: 386.25, destek1: 381.5, destek2: 377.25, destek3: 372.5, direnc1: 390.5, direnc2: 395.25, direnc3: 399.5, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "DSTKF", fark: -0.30, son: 1761, pivot: 1766.333, destek1: 1724.667, destek2: 1676.333, destek3: 1634.667, direnc1: 1814.667, direnc2: 1856.333, direnc3: 1904.667, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "EKGYO", fark: -0.82, son: 17.82, pivot: 17.9666, destek1: 17.6633, destek2: 17.3866, destek3: 17.08333, direnc1: 18.2433, direnc2: 18.5466, direnc3: 18.8233, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "ENKAI", fark: -0.56, son: 86.20, pivot: 86.6833, destek1: 85.6666, destek2: 84.9833, destek3: 83.9666, direnc1: 87.3666, direnc2: 88.3833, direnc3: 89.06666, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "EREGL", fark: -6.32, son: 36.88, pivot: 39.367, destek1: 37.633, destek2: 36.587, destek3: 34.853, direnc1: 40.413, direnc2: 42.147, direnc3: 43.193, yorum: "İlk destek seviyesinin altına indi." },
  { sembol: "FROTO", fark: -0.81, son: 77.40, pivot: 78.0333, destek1: 77.1166, destek2: 76.1333, destek3: 75.2166, direnc1: 79.01666, direnc2: 79.9333, direnc3: 80.9166, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "GARAN", fark: -0.68, son: 126.60, pivot: 127.467, destek1: 125.933, destek2: 124.867, destek3: 123.333, direnc1: 128.533, direnc2: 130.067, direnc3: 131.133, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "GUBRF", fark: -1.08, son: 441.75, pivot: 446.5833, destek1: 436.4166, destek2: 426.5833, destek3: 416.4166, direnc1: 456.4166, direnc2: 466.5833, direnc3: 476.4166, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "ISCTR", fark: -2.16, son: 12.11, pivot: 12.377, destek1: 12.243, destek2: 12.127, destek3: 11.993, direnc1: 12.493, direnc2: 12.627, direnc3: 12.743, yorum: "İkinci destek seviyesinin altına indi." },
  { sembol: "KCHOL", fark: 2.70, son: 203.90, pivot: 198.533, destek1: 196.167, destek2: 193.833, destek3: 191.467, direnc1: 200.867, direnc2: 203.233, direnc3: 205.567, yorum: "İkinci direnç seviyesinin üstüne çıktı." },
  { sembol: "KRDMD", fark: 0.91, son: 40.12, pivot: 39.76, destek1: 38.52, destek2: 37.46, destek3: 36.22, direnc1: 40.82, direnc2: 42.06, direnc3: 43.12, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "MGROS", fark: 2.02, son: 658.00, pivot: 645, destek1: 635.5, destek2: 616.5, destek3: 607, direnc1: 664, direnc2: 673.5, direnc3: 692.5, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "PETKM", fark: 0.61, son: 18.77, pivot: 18.6566, destek1: 18.1433, destek2: 17.7666, destek3: 17.2533, direnc1: 19.03333, direnc2: 19.5466, direnc3: 19.9233, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "PGSUS", fark: -1.45, son: 151.30, pivot: 153.533, destek1: 152.067, destek2: 150.633, destek3: 149.167, direnc1: 154.967, direnc2: 156.433, direnc3: 157.867, yorum: "İlk destek seviyesinin altına indi." },
  { sembol: "SAHOL", fark: 0.36, son: 88.50, pivot: 88.183, destek1: 87.417, destek2: 86.783, destek3: 86.017, direnc1: 88.817, direnc2: 89.583, direnc3: 90.217, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "SASA", fark: -9.81, son: 2.33, pivot: 2.5833, destek1: 2.5466, destek2: 2.5133, destek3: 2.4766, direnc1: 2.6166, direnc2: 2.6533, direnc3: 2.6866, yorum: "Üçüncü destek seviyesinin altına indi." },
  { sembol: "SISE", fark: -0.02, son: 41.48, pivot: 41.487, destek1: 40.993, destek2: 40.647, destek3: 40.153, direnc1: 41.833, direnc2: 42.327, direnc3: 42.673, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "TAVHL", fark: -0.58, son: 273.25, pivot: 274.833, destek1: 271.667, destek2: 267.833, destek3: 264.667, direnc1: 278.667, direnc2: 281.833, direnc3: 285.667, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "TCELL", fark: -0.03, son: 105.30, pivot: 105.333, destek1: 104.167, destek2: 103.233, destek3: 102.067, direnc1: 106.267, direnc2: 107.433, direnc3: 108.367, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "THYAO", fark: -1.38, son: 303.00, pivot: 307.250, destek1: 302.250, destek2: 298.250, destek3: 293.250, direnc1: 311.250, direnc2: 316.250, direnc3: 320.250, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "TOASO", fark: 1.05, son: 264.25, pivot: 261.5, destek1: 258.5, destek2: 254, destek3: 251, direnc1: 266, direnc2: 269, direnc3: 273.5, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "TRALT", fark: 4.35, son: 53.75, pivot: 51.507, destek1: 50.463, destek2: 48.777, destek3: 47.733, direnc1: 53.193, direnc2: 54.237, direnc3: 55.923, yorum: "İlk direnç seviyesinin üstüne çıktı." },
  { sembol: "TTKOM", fark: 3.54, son: 56.00, pivot: 54.083, destek1: 53.567, destek2: 52.633, destek3: 52.117, direnc1: 55.017, direnc2: 55.533, direnc3: 56.467, yorum: "İkinci direnç seviyesinin üstüne çıktı." },
  { sembol: "TUPRS", fark: 4.75, son: 340.00, pivot: 324.5833, destek1: 317.1666, destek2: 310.8333, destek3: 303.4166, direnc1: 330.9166, direnc2: 338.3333, direnc3: 344.6666, yorum: "İkinci direnç seviyesinin üstüne çıktı." },
  { sembol: "VAKBN", fark: -4.44, son: 29.44, pivot: 30.807, destek1: 30.473, destek2: 30.207, destek3: 29.873, direnc1: 31.073, direnc2: 31.407, direnc3: 31.673, yorum: "Üçüncü destek seviyesinin altına indi." },
  { sembol: "YKBNK", fark: -0.31, son: 34.00, pivot: 34.107, destek1: 33.713, destek2: 33.407, destek3: 33.013, direnc1: 34.413, direnc2: 34.807, direnc3: 35.113, yorum: "Pivot değerinin altında seyrediyor." },
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