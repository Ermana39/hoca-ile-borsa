
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

const guncellemeTarihi = "20.04.2026";

const xu100Pivot: PivotRow = {
  sembol: "XU100",
  fark: 2.35,
  son: 14587.93,
  pivot: 14252.55,
  destek1: 14073.29,
  destek2: 13945.53,
  destek3: 13766.27,
  direnc1: 14380.31,
  direnc2: 14559.57,
  direnc3: 14687.33,
  yorum: "İkinci direnç seviyesinin üstüne çıktı.",
};

const pivotVerileri: PivotRow[] = [
  {
    sembol: "AEFES",
    fark: 3.74,
    son: 19.42,
    pivot: 18.72,
    destek1: 18.35,
    destek2: 18.12,
    destek3: 17.75,
    direnc1: 18.95,
    direnc2: 19.32,
    direnc3: 19.55,
    yorum: "İkinci direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "AKBNK",
    fark: 6.16,
    son: 83.55,
    pivot: 78.7,
    destek1: 76.9,
    destek2: 75.7,
    destek3: 73.9,
    direnc1: 79.9,
    direnc2: 81.7,
    direnc3: 82.9,
    yorum: "Üçüncü direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "ASELS",
    fark: 0.2,
    son: 414.0,
    pivot: 413.167,
    destek1: 403.833,
    destek2: 396.667,
    destek3: 387.333,
    direnc1: 420.333,
    direnc2: 429.667,
    direnc3: 436.833,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "ASTOR",
    fark: 1.08,
    son: 196.7,
    pivot: 194.6,
    destek1: 187.4,
    destek2: 182.8,
    destek3: 175.6,
    direnc1: 199.2,
    direnc2: 206.4,
    direnc3: 211.0,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "BIMAS",
    fark: 1.77,
    son: 765.0,
    pivot: 751.667,
    destek1: 738.333,
    destek2: 730.667,
    destek3: 717.333,
    direnc1: 759.333,
    direnc2: 772.667,
    direnc3: 780.333,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "DSTKF",
    fark: 4.72,
    son: 2276.0,
    pivot: 2173.333,
    destek1: 2152.667,
    destek2: 2111.333,
    destek3: 2090.667,
    direnc1: 2214.667,
    direnc2: 2235.333,
    direnc3: 2276.667,
    yorum: "İkinci direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "EKGYO",
    fark: 5.21,
    son: 22.34,
    pivot: 21.233,
    destek1: 20.667,
    destek2: 20.373,
    destek3: 19.807,
    direnc1: 21.527,
    direnc2: 22.093,
    direnc3: 22.387,
    yorum: "İkinci direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "ENKAI",
    fark: 3.42,
    son: 108.0,
    pivot: 104.433,
    destek1: 101.967,
    destek2: 100.133,
    destek3: 97.667,
    direnc1: 106.267,
    direnc2: 108.733,
    direnc3: 110.567,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "EREGL",
    fark: 2.39,
    son: 32.04,
    pivot: 31.293,
    destek1: 30.447,
    destek2: 29.993,
    destek3: 29.147,
    direnc1: 31.747,
    direnc2: 32.593,
    direnc3: 33.047,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "FROTO",
    fark: 2.28,
    son: 109.3,
    pivot: 106.867,
    destek1: 104.533,
    destek2: 103.167,
    destek3: 100.833,
    direnc1: 108.233,
    direnc2: 110.567,
    direnc3: 111.933,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "GARAN",
    fark: 6.06,
    son: 146.4,
    pivot: 138.033,
    destek1: 135.567,
    destek2: 134.133,
    destek3: 131.667,
    direnc1: 139.467,
    direnc2: 141.933,
    direnc3: 143.367,
    yorum: "Üçüncü direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "GUBRF",
    fark: 2.15,
    son: 539.5,
    pivot: 528.167,
    destek1: 515.333,
    destek2: 507.167,
    destek3: 494.333,
    direnc1: 536.333,
    direnc2: 549.167,
    direnc3: 557.333,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "ISCTR",
    fark: 4.16,
    son: 15.11,
    pivot: 14.507,
    destek1: 14.253,
    destek2: 14.067,
    destek3: 13.813,
    direnc1: 14.693,
    direnc2: 14.947,
    direnc3: 15.133,
    yorum: "İkinci direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "KCHOL",
    fark: 2.93,
    son: 211.8,
    pivot: 205.767,
    destek1: 200.533,
    destek2: 196.567,
    destek3: 191.333,
    direnc1: 209.733,
    direnc2: 214.967,
    direnc3: 218.933,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "KRDMD",
    fark: 2.24,
    son: 36.9,
    pivot: 36.093,
    destek1: 35.167,
    destek2: 34.613,
    destek3: 33.687,
    direnc1: 36.647,
    direnc2: 37.573,
    direnc3: 38.127,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "MGROS",
    fark: 2.38,
    son: 673.0,
    pivot: 657.333,
    destek1: 651.667,
    destek2: 643.833,
    destek3: 638.167,
    direnc1: 665.167,
    direnc2: 670.833,
    direnc3: 678.667,
    yorum: "İkinci direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "PETKM",
    fark: -2.54,
    son: 21.98,
    pivot: 22.553,
    destek1: 22.147,
    destek2: 21.613,
    destek3: 21.207,
    direnc1: 23.087,
    direnc2: 23.493,
    direnc3: 24.027,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "PGSUS",
    fark: 5.05,
    son: 196.9,
    pivot: 187.433,
    destek1: 183.467,
    destek2: 180.933,
    destek3: 176.967,
    direnc1: 189.967,
    direnc2: 193.933,
    direnc3: 196.467,
    yorum: "Üçüncü direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "SAHOL",
    fark: 4.96,
    son: 105.1,
    pivot: 100.133,
    destek1: 98.067,
    destek2: 96.633,
    destek3: 94.567,
    direnc1: 101.567,
    direnc2: 103.633,
    direnc3: 105.067,
    yorum: "Üçüncü direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "SASA",
    fark: 1.85,
    son: 3.14,
    pivot: 3.083,
    destek1: 2.977,
    destek2: 2.893,
    destek3: 2.787,
    direnc1: 3.167,
    direnc2: 3.273,
    direnc3: 3.357,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "SISE",
    fark: 1.57,
    son: 48.34,
    pivot: 47.593,
    destek1: 46.047,
    destek2: 45.193,
    destek3: 43.647,
    direnc1: 48.447,
    direnc2: 49.993,
    direnc3: 50.847,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "TAVHL",
    fark: 0.76,
    son: 320.0,
    pivot: 317.583,
    destek1: 305.917,
    destek2: 300.083,
    destek3: 288.417,
    direnc1: 323.417,
    direnc2: 335.083,
    direnc3: 340.917,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "TCELL",
    fark: 2.55,
    son: 120.5,
    pivot: 117.5,
    destek1: 116.5,
    destek2: 115.7,
    destek3: 114.7,
    direnc1: 118.3,
    direnc2: 119.3,
    direnc3: 120.1,
    yorum: "Üçüncü direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "THYAO",
    fark: 3.11,
    son: 329.0,
    pivot: 319.083,
    destek1: 313.667,
    destek2: 310.083,
    destek3: 304.667,
    direnc1: 322.667,
    direnc2: 328.083,
    direnc3: 331.667,
    yorum: "İkinci direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "TOASO",
    fark: 0.71,
    son: 294.5,
    pivot: 292.417,
    destek1: 281.833,
    destek2: 275.417,
    destek3: 264.833,
    direnc1: 298.833,
    direnc2: 309.417,
    direnc3: 315.833,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "TRALT",
    fark: 5.78,
    son: 49.4,
    pivot: 46.7,
    destek1: 45.3,
    destek2: 44.6,
    destek3: 43.2,
    direnc1: 47.4,
    direnc2: 48.8,
    direnc3: 49.5,
    yorum: "İkinci direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "TTKOM",
    fark: 3.35,
    son: 65.4,
    pivot: 63.283,
    destek1: 62.067,
    destek2: 61.283,
    destek3: 60.067,
    direnc1: 64.067,
    direnc2: 65.283,
    direnc3: 66.067,
    yorum: "İkinci direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "TUPRS",
    fark: -4.83,
    son: 253.0,
    pivot: 265.833,
    destek1: 263.667,
    destek2: 259.333,
    destek3: 257.167,
    direnc1: 270.167,
    direnc2: 272.333,
    direnc3: 276.667,
    yorum: "Üçüncü destek seviyesinin altına indi.",
  },
  {
    sembol: "VAKBN",
    fark: 4.22,
    son: 35.4,
    pivot: 33.967,
    destek1: 33.433,
    destek2: 33.047,
    destek3: 32.513,
    direnc1: 34.353,
    direnc2: 34.887,
    direnc3: 35.273,
    yorum: "Üçüncü direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "YKBNK",
    fark: 4.5,
    son: 39.3,
    pivot: 37.607,
    destek1: 37.133,
    destek2: 36.787,
    destek3: 36.313,
    direnc1: 37.953,
    direnc2: 38.427,
    direnc3: 38.773,
    yorum: "Üçüncü direnç seviyesinin üstüne çıktı.",
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
        <div className="mb-8 text-sm font-semibold text-zinc-700">
          Güncelleme Tarihi: {guncellemeTarihi}
        </div>

        <section className="mb-8">
          <ReklamAlani variant="yatay" />
        </section>

        <section className="mb-8 overflow-hidden rounded-2xl border border-sky-200 bg-sky-50 shadow-sm">
          <div className="overflow-x-auto">
            <table className="min-w-[1200px] w-full border-collapse text-sm text-zinc-900">
              <thead className="bg-sky-100 text-zinc-800">
                <tr>
                  <th className="border border-sky-200 px-3 py-2 text-left">Sembol</th>
                  <th className="border border-sky-200 px-3 py-2 text-left">Pivota Göre Fark %</th>
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
                  <th className="border border-sky-200 px-3 py-2 text-left">Pivota Göre Fark %</th>
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