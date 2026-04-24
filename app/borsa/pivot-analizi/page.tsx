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

const guncellemeTarihi = "21.04.2026";

const xu100Pivot: PivotRow = {
  sembol: "XU100",
  fark: 0.35,
  son: 14409.44,
  pivot: 14359.18,
  destek1: 14219.88,
  destek2: 14104.28,
  destek3: 13964.98,
  direnc1: 14474.78,
  direnc2: 14614.08,
  direnc3: 14729.68,
  yorum: "Pivot değerinin üstünde seyrediyor.",
};

const pivotVerileri: PivotRow[] = [
  {
    sembol: "AEFES",
    fark: -1.41,
    son: 19.11,
    pivot: 19.383,
    destek1: 18.887,
    destek2: 18.573,
    destek3: 18.077,
    direnc1: 19.697,
    direnc2: 20.193,
    direnc3: 20.507,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "AKBNK",
    fark: -2.65,
    son: 79.9,
    pivot: 80.017,
    destek1: 77.933,
    destek2: 76.617,
    destek3: 74.533,
    direnc1: 81.333,
    direnc2: 83.417,
    direnc3: 84.733,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "ASELS",
    fark: -1.53,
    son: 392,
    pivot: 398.083,
    destek1: 389.417,
    destek2: 382.333,
    destek3: 373.667,
    direnc1: 405.167,
    direnc2: 413.833,
    direnc3: 420.917,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "ASTOR",
    fark: 5.46,
    son: 221.5,
    pivot: 210.033,
    destek1: 203.567,
    destek2: 199.233,
    destek3: 192.767,
    direnc1: 214.367,
    direnc2: 220.833,
    direnc3: 225.167,
    yorum: "İkinci direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "BIMAS",
    fark: -0.26,
    son: 760,
    pivot: 762,
    destek1: 753.5,
    destek2: 744,
    destek3: 735.5,
    direnc1: 771.5,
    direnc2: 780,
    direnc3: 789.5,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "DSTKF",
    fark: 4.93,
    son: 2632.5,
    pivot: 2508.833,
    destek1: 2430.167,
    destek2: 2335.333,
    destek3: 2256.667,
    direnc1: 2603.667,
    direnc2: 2682.333,
    direnc3: 2777.167,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "EKGYO",
    fark: -0.38,
    son: 21.18,
    pivot: 21.26,
    destek1: 20.9,
    destek2: 20.64,
    destek3: 20.28,
    direnc1: 21.52,
    direnc2: 21.88,
    direnc3: 22.14,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "ENKAI",
    fark: 0,
    son: 106.5,
    pivot: 106.5,
    destek1: 105.6,
    destek2: 104.4,
    destek3: 103.5,
    direnc1: 107.7,
    direnc2: 108.6,
    direnc3: 109.8,
    yorum: "Pivot değerine eşit.",
  },
  {
    sembol: "EREGL",
    fark: 0.33,
    son: 33,
    pivot: 32.893,
    destek1: 31.747,
    destek2: 30.893,
    destek3: 29.747,
    direnc1: 33.747,
    direnc2: 34.893,
    direnc3: 35.747,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "FROTO",
    fark: 1.95,
    son: 104.5,
    pivot: 102.5,
    destek1: 100.7,
    destek2: 99.1,
    destek3: 97.3,
    direnc1: 104.1,
    direnc2: 105.9,
    direnc3: 107.5,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "GARAN",
    fark: -2.06,
    son: 138,
    pivot: 140.9,
    destek1: 137.8,
    destek2: 136.2,
    destek3: 133.1,
    direnc1: 142.5,
    direnc2: 145.6,
    direnc3: 147.2,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "GUBRF",
    fark: 3.46,
    son: 533,
    pivot: 515.167,
    destek1: 508.833,
    destek2: 501.167,
    destek3: 494.833,
    direnc1: 522.833,
    direnc2: 529.167,
    direnc3: 536.833,
    yorum: "İkinci direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "ISCTR",
    fark: -2.56,
    son: 14.45,
    pivot: 14.83,
    destek1: 14.64,
    destek2: 14.49,
    destek3: 14.3,
    direnc1: 14.98,
    direnc2: 15.17,
    direnc3: 15.32,
    yorum: "İkinci destek seviyesinin altına indi.",
  },
  {
    sembol: "KCHOL",
    fark: 0.93,
    son: 207,
    pivot: 205.1,
    destek1: 202,
    destek2: 199.1,
    destek3: 196,
    direnc1: 208,
    direnc2: 211.1,
    direnc3: 214,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "KRDMD",
    fark: 2.13,
    son: 36.86,
    pivot: 36.093,
    destek1: 35.567,
    destek2: 34.973,
    destek3: 34.447,
    direnc1: 36.687,
    direnc2: 37.213,
    direnc3: 37.807,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "MGROS",
    fark: -2.72,
    son: 638.5,
    pivot: 656.333,
    destek1: 644.667,
    destek2: 631.833,
    destek3: 620.167,
    direnc1: 669.167,
    direnc2: 680.833,
    direnc3: 693.667,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "PETKM",
    fark: 0.73,
    son: 23.16,
    pivot: 22.993,
    destek1: 22.667,
    destek2: 22.333,
    destek3: 22.007,
    direnc1: 23.327,
    direnc2: 23.653,
    direnc3: 23.987,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "PGSUS",
    fark: -0.51,
    son: 189.1,
    pivot: 190.067,
    destek1: 187.633,
    destek2: 185.067,
    destek3: 182.633,
    direnc1: 192.633,
    direnc2: 195.067,
    direnc3: 197.633,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "SAHOL",
    fark: -1,
    son: 98.8,
    pivot: 99.8,
    destek1: 97.9,
    destek2: 96.9,
    destek3: 95,
    direnc1: 100.8,
    direnc2: 102.7,
    direnc3: 103.7,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "SASA",
    fark: 4.98,
    son: 3.16,
    pivot: 3.01,
    destek1: 2.92,
    destek2: 2.87,
    destek3: 2.78,
    direnc1: 3.06,
    direnc2: 3.15,
    direnc3: 3.2,
    yorum: "İkinci direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "SISE",
    fark: 1.3,
    son: 47.88,
    pivot: 47.267,
    destek1: 46.693,
    destek2: 45.987,
    destek3: 45.413,
    direnc1: 47.973,
    direnc2: 48.547,
    direnc3: 49.253,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "TAVHL",
    fark: -0.51,
    son: 308.25,
    pivot: 309.833,
    destek1: 304.167,
    destek2: 300.083,
    destek3: 294.417,
    direnc1: 313.917,
    direnc2: 319.583,
    direnc3: 323.667,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "TCELL",
    fark: -0.35,
    son: 114.3,
    pivot: 114.7,
    destek1: 113.1,
    destek2: 112.1,
    destek3: 110.5,
    direnc1: 115.7,
    direnc2: 117.3,
    direnc3: 118.3,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "THYAO",
    fark: 0.08,
    son: 325,
    pivot: 324.75,
    destek1: 318.25,
    destek2: 313,
    destek3: 306.5,
    direnc1: 330,
    direnc2: 336.5,
    direnc3: 341.75,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "TOASO",
    fark: 1.55,
    son: 295.5,
    pivot: 291,
    destek1: 287.5,
    destek2: 282,
    destek3: 278.5,
    direnc1: 296.5,
    direnc2: 300,
    direnc3: 305.5,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "TRALT",
    fark: -1.91,
    son: 46.64,
    pivot: 47.547,
    destek1: 45.773,
    destek2: 44.587,
    destek3: 42.813,
    direnc1: 48.733,
    direnc2: 50.507,
    direnc3: 51.693,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "TTKOM",
    fark: 0.57,
    son: 64.25,
    pivot: 63.883,
    destek1: 62.667,
    destek2: 61.683,
    destek3: 60.467,
    direnc1: 64.867,
    direnc2: 66.083,
    direnc3: 67.067,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "TUPRS",
    fark: 3.33,
    son: 269,
    pivot: 260.333,
    destek1: 256.417,
    destek2: 249.833,
    destek3: 245.917,
    direnc1: 266.917,
    direnc2: 270.833,
    direnc3: 277.417,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "VAKBN",
    fark: -0.2,
    son: 33.48,
    pivot: 33.547,
    destek1: 32.933,
    destek2: 32.527,
    destek3: 31.913,
    direnc1: 33.953,
    direnc2: 34.567,
    direnc3: 34.973,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "YKBNK",
    fark: -1.72,
    son: 37.64,
    pivot: 38.3,
    destek1: 37.46,
    destek2: 36.98,
    destek3: 36.14,
    direnc1: 38.78,
    direnc2: 39.62,
    direnc3: 40.1,
    yorum: "Pivot değerinin altında seyrediyor.",
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