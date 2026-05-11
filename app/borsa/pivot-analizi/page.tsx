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
  fark: 0.53,
  son: 15133.59,
  pivot: 15054.41,
  destek1: 14941.71,
  destek2: 14820.78,
  destek3: 14708.08,
  direnc1: 15175.34,
  direnc2: 15288.04,
  direnc3: 15408.97,
  yorum: "Pivot değerinin üstünde seyrediyor.",
};

const pivotVerileri: PivotRow[] = [
  {
    sembol: "AEFES",
    fark: 3.68,
    son: 21.2,
    pivot: 20.447,
    destek1: 20.173,
    destek2: 19.887,
    destek3: 19.613,
    direnc1: 20.733,
    direnc2: 21.007,
    direnc3: 21.293,
    yorum: "İkinci direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "AKBNK",
    fark: 1.0,
    son: 75.85,
    pivot: 75.1,
    destek1: 74.05,
    destek2: 72.85,
    destek3: 71.8,
    direnc1: 76.3,
    direnc2: 77.35,
    direnc3: 78.55,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "ASELS",
    fark: 0.47,
    son: 431.75,
    pivot: 429.75,
    destek1: 425,
    destek2: 421.5,
    destek3: 416.75,
    direnc1: 433.25,
    direnc2: 438,
    direnc3: 441.5,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "ASTOR",
    fark: 4.46,
    son: 339.5,
    pivot: 325,
    destek1: 316,
    destek2: 306,
    destek3: 297,
    direnc1: 335,
    direnc2: 344,
    direnc3: 354,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "BIMAS",
    fark: -1.94,
    son: 774.5,
    pivot: 789.833,
    destek1: 777.167,
    destek2: 764.333,
    destek3: 751.667,
    direnc1: 802.667,
    direnc2: 815.333,
    direnc3: 828.167,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "DSTKF",
    fark: -2.68,
    son: 2522.5,
    pivot: 2592,
    destek1: 2404,
    destek2: 2310,
    destek3: 2122,
    direnc1: 2686,
    direnc2: 2874,
    direnc3: 2968,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "EKGYO",
    fark: 1.86,
    son: 22.24,
    pivot: 21.833,
    destek1: 21.507,
    destek2: 21.013,
    destek3: 20.687,
    direnc1: 22.327,
    direnc2: 22.653,
    direnc3: 23.147,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "ENKAI",
    fark: -6.18,
    son: 105.2,
    pivot: 112.133,
    destek1: 109.967,
    destek2: 108.633,
    destek3: 106.467,
    direnc1: 113.467,
    direnc2: 115.633,
    direnc3: 116.967,
    yorum: "Üçüncü destek seviyesinin altına indi.",
  },
  {
    sembol: "EREGL",
    fark: 1.42,
    son: 40.86,
    pivot: 40.2866,
    destek1: 39.2733,
    destek2: 37.2866,
    destek3: 36.2733,
    direnc1: 42.2733,
    direnc2: 43.2866,
    direnc3: 45.2733,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "FROTO",
    fark: -0.87,
    son: 97,
    pivot: 97.85,
    destek1: 96.75,
    destek2: 96,
    destek3: 94.9,
    direnc1: 98.6,
    direnc2: 99.7,
    direnc3: 100.45,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "GARAN",
    fark: 1.05,
    son: 138.2,
    pivot: 136.767,
    destek1: 135.333,
    destek2: 133.367,
    destek3: 131.933,
    direnc1: 138.733,
    direnc2: 140.167,
    direnc3: 142.133,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "GUBRF",
    fark: 2.57,
    son: 617.5,
    pivot: 602,
    destek1: 595.5,
    destek2: 584,
    destek3: 577.5,
    direnc1: 613.5,
    direnc2: 620,
    direnc3: 631.5,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "ISCTR",
    fark: 1.44,
    son: 14.75,
    pivot: 14.54,
    destek1: 14.38,
    destek2: 14.21,
    destek3: 14.05,
    direnc1: 14.71,
    direnc2: 14.87,
    direnc3: 15.04,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "KCHOL",
    fark: 0.05,
    son: 212.3,
    pivot: 212.2,
    destek1: 209.3,
    destek2: 205.6,
    destek3: 202.7,
    direnc1: 215.9,
    direnc2: 218.8,
    direnc3: 222.5,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "KRDMD",
    fark: 9.65,
    son: 44.16,
    pivot: 40.273,
    destek1: 39.807,
    destek2: 39.093,
    destek3: 38.627,
    direnc1: 40.987,
    direnc2: 41.453,
    direnc3: 42.167,
    yorum: "Üçüncü direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "MGROS",
    fark: -1.31,
    son: 680.5,
    pivot: 689.5,
    destek1: 682.5,
    destek2: 677,
    destek3: 670,
    direnc1: 695,
    direnc2: 702,
    direnc3: 707.5,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "PETKM",
    fark: 6.84,
    son: 26.14,
    pivot: 24.467,
    destek1: 24.113,
    destek2: 23.507,
    destek3: 23.153,
    direnc1: 25.073,
    direnc2: 25.427,
    direnc3: 26.033,
    yorum: "Üçüncü direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "PGSUS",
    fark: -0.72,
    son: 185,
    pivot: 186.333,
    destek1: 184.567,
    destek2: 182.433,
    destek3: 180.667,
    direnc1: 188.467,
    direnc2: 190.233,
    direnc3: 192.367,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "SAHOL",
    fark: -0.53,
    son: 99.35,
    pivot: 99.883,
    destek1: 98.167,
    destek2: 96.333,
    destek3: 94.617,
    direnc1: 101.717,
    direnc2: 103.433,
    direnc3: 105.267,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "SASA",
    fark: 1.73,
    son: 3.54,
    pivot: 3.4799,
    destek1: 3.3799,
    destek2: 3.2399,
    destek3: 3.1399,
    direnc1: 3.6199,
    direnc2: 3.7199,
    direnc3: 3.8599,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "SISE",
    fark: 2.37,
    son: 52.35,
    pivot: 51.137,
    destek1: 49.723,
    destek2: 47.647,
    destek3: 46.233,
    direnc1: 52.313,
    direnc2: 54.627,
    direnc3: 56.703,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "TAVHL",
    fark: -2.02,
    son: 279,
    pivot: 284.75,
    destek1: 279.5,
    destek2: 275,
    destek3: 269.75,
    direnc1: 289.25,
    direnc2: 294.5,
    direnc3: 299,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "TCELL",
    fark: 2.29,
    son: 121.9,
    pivot: 119.167,
    destek1: 117.433,
    destek2: 114.867,
    destek3: 113.133,
    direnc1: 121.733,
    direnc2: 123.467,
    direnc3: 126.033,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "THYAO",
    fark: -0.75,
    son: 308.5,
    pivot: 310.833,
    destek1: 306.9166,
    destek2: 302.8333,
    destek3: 298.9166,
    direnc1: 314.9166,
    direnc2: 318.8333,
    direnc3: 322.9166,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "TOASO",
    fark: -0.5,
    son: 317,
    pivot: 318.583,
    destek1: 314.167,
    destek2: 308.083,
    destek3: 303.667,
    direnc1: 324.667,
    direnc2: 329.083,
    direnc3: 335.167,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "TRALT",
    fark: 5.59,
    son: 46.22,
    pivot: 43.7733,
    destek1: 43.0266,
    destek2: 42.1533,
    destek3: 41.4066,
    direnc1: 44.6466,
    direnc2: 45.3933,
    direnc3: 46.2666,
    yorum: "İkinci direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "TTKOM",
    fark: 1.31,
    son: 66.85,
    pivot: 65.983,
    destek1: 65.217,
    destek2: 64.333,
    destek3: 63.567,
    direnc1: 66.867,
    direnc2: 67.633,
    direnc3: 68.517,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "TUPRS",
    fark: -0.16,
    son: 259.5,
    pivot: 259.9166,
    destek1: 257.0833,
    destek2: 255.6666,
    destek3: 252.8333,
    direnc1: 261.3333,
    direnc2: 264.1666,
    direnc3: 265.5833,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "VAKBN",
    fark: 1.72,
    son: 32.42,
    pivot: 31.873,
    destek1: 31.567,
    destek2: 31.133,
    destek3: 30.827,
    direnc1: 32.307,
    direnc2: 32.613,
    direnc3: 33.047,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "YKBNK",
    fark: 1.79,
    son: 39.72,
    pivot: 39.02,
    destek1: 38.4,
    destek2: 37.5,
    destek3: 36.88,
    direnc1: 39.92,
    direnc2: 40.54,
    direnc3: 41.44,
    yorum: "Pivot değerinin üstünde seyrediyor.",
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