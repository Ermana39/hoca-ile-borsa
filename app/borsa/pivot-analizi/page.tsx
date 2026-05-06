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

const guncellemeTarihi = "27.04.2026";

const xu100Pivot: PivotRow = {
  sembol: "XU100",
  fark: 3.04,
  son: 14917.7,
  pivot: 14477.58,
  destek1: 14376.17,
  destek2: 14256.58,
  destek3: 14155.17,
  direnc1: 14597.17,
  direnc2: 14698.58,
  direnc3: 14818.17,
  yorum: "Üçüncü direnç seviyesinin üstüne çıktı.",
};

const pivotVerileri: PivotRow[] = [
  {
    sembol: "AEFES",
    fark: 3.59,
    son: 20.02,
    pivot: 19.327,
    destek1: 19.113,
    destek2: 18.887,
    destek3: 18.673,
    direnc1: 19.553,
    direnc2: 19.767,
    direnc3: 19.993,
    yorum: "Üçüncü direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "AKBNK",
    fark: 5.01,
    son: 74.35,
    pivot: 70.8,
    destek1: 70.1,
    destek2: 69.5,
    destek3: 68.8,
    direnc1: 71.4,
    direnc2: 72.1,
    direnc3: 72.7,
    yorum: "Üçüncü direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "ASELS",
    fark: 1.24,
    son: 434,
    pivot: 428.667,
    destek1: 422.833,
    destek2: 418.417,
    destek3: 412.583,
    direnc1: 433.083,
    direnc2: 438.917,
    direnc3: 443.333,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "ASTOR",
    fark: 7.77,
    son: 317.75,
    pivot: 294.833,
    destek1: 288.9166,
    destek2: 282.0833,
    destek3: 276.1666,
    direnc1: 301.6666,
    direnc2: 307.5833,
    direnc3: 314.4166,
    yorum: "Üçüncü direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "BIMAS",
    fark: 5.23,
    son: 781,
    pivot: 742.167,
    destek1: 733.333,
    destek2: 719.667,
    destek3: 710.833,
    direnc1: 755.833,
    direnc2: 764.667,
    direnc3: 778.333,
    yorum: "Üçüncü direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "DSTKF",
    fark: 0.12,
    son: 2755,
    pivot: 2751.667,
    destek1: 2668.333,
    destek2: 2576.667,
    destek3: 2493.333,
    direnc1: 2843.333,
    direnc2: 2926.667,
    direnc3: 3018.333,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "EKGYO",
    fark: 5.26,
    son: 21.22,
    pivot: 20.1599,
    destek1: 19.8999,
    destek2: 19.5399,
    destek3: 19.2799,
    direnc1: 20.52,
    direnc2: 20.78,
    direnc3: 21.14,
    yorum: "Üçüncü direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "ENKAI",
    fark: 5.07,
    son: 110.5,
    pivot: 105.167,
    destek1: 103.533,
    destek2: 100.967,
    destek3: 99.333,
    direnc1: 107.733,
    direnc2: 109.367,
    direnc3: 111.933,
    yorum: "İkinci direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "EREGL",
    fark: 1.76,
    son: 37.68,
    pivot: 37.027,
    destek1: 36.093,
    destek2: 34.967,
    destek3: 34.033,
    direnc1: 38.153,
    direnc2: 39.087,
    direnc3: 40.213,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "FROTO",
    fark: 1.62,
    son: 99,
    pivot: 97.417,
    destek1: 96.283,
    destek2: 94.517,
    destek3: 93.383,
    direnc1: 99.183,
    direnc2: 100.317,
    direnc3: 102.083,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "GARAN",
    fark: 5.48,
    son: 136.6,
    pivot: 129.5,
    destek1: 128.2,
    destek2: 127,
    destek3: 125.7,
    direnc1: 130.7,
    direnc2: 132,
    direnc3: 133.2,
    yorum: "Üçüncü direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "GUBRF",
    fark: 6.06,
    son: 583,
    pivot: 549.667,
    destek1: 539.333,
    destek2: 529.167,
    destek3: 518.833,
    direnc1: 559.833,
    direnc2: 570.167,
    direnc3: 580.333,
    yorum: "Üçüncü direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "ISCTR",
    fark: 3.28,
    son: 14.49,
    pivot: 14.03,
    destek1: 13.85,
    destek2: 13.69,
    destek3: 13.51,
    direnc1: 14.19,
    direnc2: 14.37,
    direnc3: 14.53,
    yorum: "İkinci direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "KCHOL",
    fark: 4.78,
    son: 210.5,
    pivot: 200.9,
    destek1: 197.7,
    destek2: 193.5,
    destek3: 190.3,
    direnc1: 205.1,
    direnc2: 208.3,
    direnc3: 212.5,
    yorum: "İkinci direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "KRDMD",
    fark: -0.18,
    son: 39.9,
    pivot: 39.973,
    destek1: 39.367,
    destek2: 38.453,
    destek3: 37.847,
    direnc1: 40.887,
    direnc2: 41.493,
    direnc3: 42.407,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "MGROS",
    fark: 6.55,
    son: 683.5,
    pivot: 641.5,
    destek1: 635.5,
    destek2: 627.5,
    destek3: 621.5,
    direnc1: 649.5,
    direnc2: 655.5,
    direnc3: 663.5,
    yorum: "Üçüncü direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "PETKM",
    fark: 0.47,
    son: 24.12,
    pivot: 24.007,
    destek1: 23.793,
    destek2: 23.467,
    destek3: 23.253,
    direnc1: 24.333,
    direnc2: 24.547,
    direnc3: 24.873,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "PGSUS",
    fark: 3.02,
    son: 184.3,
    pivot: 178.9,
    destek1: 177.5,
    destek2: 176.3,
    destek3: 174.9,
    direnc1: 180.1,
    direnc2: 181.5,
    direnc3: 182.7,
    yorum: "Üçüncü direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "SAHOL",
    fark: 5.91,
    son: 100.7,
    pivot: 95.083,
    destek1: 93.667,
    destek2: 92.033,
    destek3: 90.617,
    direnc1: 96.717,
    direnc2: 98.133,
    direnc3: 99.767,
    yorum: "Üçüncü direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "SASA",
    fark: 0.65,
    son: 3.08,
    pivot: 3.06,
    destek1: 2.9199,
    destek2: 2.8499,
    destek3: 2.7099,
    direnc1: 3.13,
    direnc2: 3.27,
    direnc3: 3.34,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "SISE",
    fark: 4.26,
    son: 49.62,
    pivot: 47.593,
    destek1: 46.467,
    destek2: 45.073,
    destek3: 43.947,
    direnc1: 48.987,
    direnc2: 50.113,
    direnc3: 51.507,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "TAVHL",
    fark: 5.46,
    son: 289.75,
    pivot: 274.75,
    destek1: 271.75,
    destek2: 267.5,
    destek3: 264.5,
    direnc1: 279,
    direnc2: 282,
    direnc3: 286.25,
    yorum: "Üçüncü direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "TCELL",
    fark: 3.13,
    son: 117.7,
    pivot: 114.133,
    destek1: 112.167,
    destek2: 109.133,
    destek3: 107.167,
    direnc1: 117.167,
    direnc2: 119.133,
    direnc3: 122.167,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "THYAO",
    fark: 2.85,
    son: 309.75,
    pivot: 301.1666,
    destek1: 298.0833,
    destek2: 295.1666,
    destek3: 292.0833,
    direnc1: 304.0833,
    direnc2: 307.1666,
    direnc3: 310.0833,
    yorum: "İkinci direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "TOASO",
    fark: 6.26,
    son: 312.5,
    pivot: 294.083,
    destek1: 289.917,
    destek2: 281.583,
    destek3: 277.417,
    direnc1: 302.417,
    direnc2: 306.583,
    direnc3: 314.917,
    yorum: "İkinci direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "TRALT",
    fark: 4.13,
    son: 42.06,
    pivot: 40.393,
    destek1: 39.887,
    destek2: 39.113,
    destek3: 38.607,
    direnc1: 41.167,
    direnc2: 41.673,
    direnc3: 42.447,
    yorum: "İkinci direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "TTKOM",
    fark: 5.97,
    son: 65.65,
    pivot: 61.95,
    destek1: 61,
    destek2: 59.35,
    destek3: 58.4,
    direnc1: 63.6,
    direnc2: 64.55,
    direnc3: 66.2,
    yorum: "İkinci direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "TUPRS",
    fark: 0.03,
    son: 271,
    pivot: 270.917,
    destek1: 267.583,
    destek2: 264.417,
    destek3: 261.083,
    direnc1: 274.083,
    direnc2: 277.417,
    direnc3: 280.583,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "VAKBN",
    fark: 2.21,
    son: 31.46,
    pivot: 30.78,
    destek1: 30.46,
    destek2: 30.06,
    destek3: 29.74,
    direnc1: 31.18,
    direnc2: 31.5,
    direnc3: 31.9,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "YKBNK",
    fark: 4.81,
    son: 37.76,
    pivot: 36.027,
    destek1: 35.773,
    destek2: 35.467,
    destek3: 35.213,
    direnc1: 36.333,
    direnc2: 36.587,
    direnc3: 36.893,
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
        <div className="mb-8 text-sm font-semibold text-zinc-700"></div>

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