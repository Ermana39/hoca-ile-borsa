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
};

const pivotVerileri: PivotRow[] = [
  { sembol: "AEFES", fark: 4.76, son: 17.66, pivot: 16.857, destek1: 16.313, destek2: 16.017, destek3: 15.473, direnc1: 17.153, direnc2: 17.697, direnc3: 17.993 },
  { sembol: "AKBNK", fark: 9.6, son: 76.15, pivot: 69.483, destek1: 68.267, destek2: 66.067, destek3: 64.85, direnc1: 70.467, direnc2: 71.683, direnc3: 72.667 },
  { sembol: "ASELS", fark: 7.03, son: 365.25, pivot: 341.25, destek1: 337.75, destek2: 333.5, destek3: 330, direnc1: 345.5, direnc2: 349, direnc3: 353.25 },
  { sembol: "ASTOR", fark: 1.66, son: 209.8, pivot: 206.367, destek1: 201.333, destek2: 197.967, destek3: 192.933, direnc1: 209.733, direnc2: 214.767, direnc3: 218.133 },
  { sembol: "BIMAS", fark: 7.07, son: 737.5, pivot: 688.833, destek1: 680.167, destek2: 674.833, destek3: 666.167, direnc1: 694.167, direnc2: 702.833, direnc3: 708.167 },
  { sembol: "DSTKF", fark: 1.61, son: 2000, pivot: 1968.333, destek1: 1949.667, destek2: 1938.333, destek3: 1919.667, direnc1: 1979.667, direnc2: 1998.333, direnc3: 2009.667 },
  { sembol: "EKGYO", fark: 7.15, son: 20.82, pivot: 19.43, destek1: 18.96, destek2: 18.65, destek3: 18.18, direnc1: 19.74, direnc2: 20.21, direnc3: 20.52 },
  { sembol: "ENKAI", fark: 4.52, son: 96, pivot: 91.849, destek1: 89.715, destek2: 88.33, destek3: 86.196, direnc1: 93.234, direnc2: 95.368, direnc3: 96.753 },
  { sembol: "EREGL", fark: 2.07, son: 29.9, pivot: 29.293, destek1: 28.387, destek2: 27.933, destek3: 27.027, direnc1: 29.747, direnc2: 30.653, direnc3: 31.107 },
  { sembol: "FROTO", fark: 4.88, son: 102.7, pivot: 97.917, destek1: 95.333, destek2: 93.967, destek3: 91.383, direnc1: 99.283, direnc2: 101.867, direnc3: 103.233 },
  { sembol: "GARAN", fark: 8.73, son: 139.5, pivot: 128.3, destek1: 125.6, destek2: 124.1, destek3: 121.4, direnc1: 129.8, direnc2: 132.5, direnc3: 134 },
  { sembol: "GUBRF", fark: 2.88, son: 491, pivot: 477.25, destek1: 468.75, destek2: 463.5, destek3: 455, direnc1: 482.5, direnc2: 491, direnc3: 496.25 },
  { sembol: "ISCTR", fark: 9, son: 14.37, pivot: 13.183, destek1: 12.957, destek2: 12.813, destek3: 12.587, direnc1: 13.327, direnc2: 13.553, direnc3: 13.697 },
  { sembol: "KCHOL", fark: 6.79, son: 204.9, pivot: 191.867, destek1: 187.733, destek2: 185.367, destek3: 181.233, direnc1: 194.233, direnc2: 198.367, direnc3: 200.733 },
  { sembol: "KRDMD", fark: 2.31, son: 34.54, pivot: 33.76, destek1: 33.06, destek2: 32.68, destek3: 31.98, direnc1: 34.14, direnc2: 34.84, direnc3: 35.22 },
  { sembol: "MGROS", fark: 6.22, son: 637.5, pivot: 600.167, destek1: 592.833, destek2: 585.667, destek3: 578.333, direnc1: 607.333, direnc2: 614.667, direnc3: 621.833 },
  { sembol: "PETKM", fark: -5.39, son: 20.58, pivot: 21.753, destek1: 21.387, destek2: 20.853, destek3: 20.487, direnc1: 22.287, direnc2: 22.653, direnc3: 23.187 },
  { sembol: "PGSUS", fark: 7.78, son: 189.8, pivot: 176.1, destek1: 173.1, destek2: 171.2, destek3: 168.2, direnc1: 178, direnc2: 181, direnc3: 182.9 },
  { sembol: "SAHOL", fark: 8.36, son: 97.9, pivot: 90.35, destek1: 87.75, destek2: 86.2, destek3: 83.6, direnc1: 91.9, direnc2: 94.5, direnc3: 96.05 },
  { sembol: "SASA", fark: 3.14, son: 2.53, pivot: 2.453, destek1: 2.387, destek2: 2.343, destek3: 2.277, direnc1: 2.497, direnc2: 2.563, direnc3: 2.607 },
  { sembol: "SISE", fark: 7.16, son: 47.46, pivot: 44.287, destek1: 43.033, destek2: 42.267, destek3: 41.013, direnc1: 45.053, direnc2: 46.307, direnc3: 47.073 },
  { sembol: "TAVHL", fark: 8.61, son: 343.75, pivot: 316.5, destek1: 308, destek2: 303.25, destek3: 294.75, direnc1: 321.25, direnc2: 329.75, direnc3: 334.5 },
  { sembol: "TCELL", fark: 6.38, son: 112.9, pivot: 106.133, destek1: 103.267, destek2: 101.633, destek3: 98.767, direnc1: 107.767, direnc2: 110.633, direnc3: 112.267 },
  { sembol: "THYAO", fark: 8.81, son: 320.25, pivot: 294.333, destek1: 289.417, destek2: 286.833, destek3: 281.917, direnc1: 296.917, direnc2: 301.833, direnc3: 304.417 },
  { sembol: "TOASO", fark: 6.78, son: 274.25, pivot: 256.833, destek1: 247.167, destek2: 242.333, destek3: 232.667, direnc1: 261.667, direnc2: 271.333, direnc3: 276.167 },
  { sembol: "TRALT", fark: 4.55, son: 44.62, pivot: 42.68, destek1: 40.72, destek2: 39.54, destek3: 37.58, direnc1: 43.86, direnc2: 45.82, direnc3: 47 },
  { sembol: "TTKOM", fark: 7, son: 61.9, pivot: 57.85, destek1: 56.55, destek2: 55.9, destek3: 54.6, direnc1: 58.5, direnc2: 59.8, direnc3: 60.45 },
  { sembol: "TUPRS", fark: -4.02, son: 249.8, pivot: 260.25, destek1: 256, destek2: 252, destek3: 247.75, direnc1: 264.25, direnc2: 268.5, direnc3: 272.5 },
  { sembol: "VAKBN", fark: 9.11, son: 34, pivot: 31.16, destek1: 30.56, destek2: 30.2, destek3: 29.6, direnc1: 31.52, direnc2: 32.12, direnc3: 32.48 },
  { sembol: "YKBNK", fark: 9.07, son: 37.76, pivot: 34.62, destek1: 33.9, destek2: 33.46, destek3: 32.74, direnc1: 35.06, direnc2: 35.78, direnc3: 36.22 },
];

function formatNumber(value: number) {
  const hasDecimal = !Number.isInteger(value);
  return new Intl.NumberFormat("tr-TR", {
    minimumFractionDigits: hasDecimal ? 2 : 0,
    maximumFractionDigits: 3,
  }).format(value);
}

function getDurum(row: PivotRow) {
  if (row.son > row.direnc3) {
    return {
      text: "Üçüncü direnç seviyesinin üstüne çıktı.",
      bg: "bg-green-900",
    };
  }

  if (row.son > row.direnc2) {
    return {
      text: "İkinci direnç seviyesinin üstüne çıktı.",
      bg: "bg-green-800",
    };
  }

  if (row.son > row.direnc1) {
    return {
      text: "İlk direnç seviyesinin üstüne çıktı.",
      bg: "bg-green-700",
    };
  }

  if (row.son < row.destek3) {
    return {
      text: "Üçüncü destek seviyesinin altına indi.",
      bg: "bg-red-900",
    };
  }

  if (row.son < row.destek2) {
    return {
      text: "İkinci destek seviyesinin altına indi.",
      bg: "bg-red-800",
    };
  }

  if (row.son < row.destek1) {
    return {
      text: "İlk destek seviyesinin altına indi.",
      bg: "bg-red-700",
    };
  }

  return {
    text: "Pivot seviyesine yakın fiyatlanıyor.",
    bg: "bg-zinc-700",
  };
}

const xu100Ozet = {
  pivot: 12992.6,
  destek1: 12805.27,
  destek2: 12688.99,
  destek3: 12501.66,
  direnc1: 13108.88,
  direnc2: 13296.21,
  direnc3: 13412.49,
  fark: 5.15,
};

export default function PivotAnaliziPage() {
  return (
    <main className="min-h-screen bg-[#1b1d21] px-3 py-4 text-white md:px-5">
      <div className="mx-auto max-w-[1500px]">
        <div className="mb-4 flex flex-wrap gap-3">
          <Link
            href="/"
            className="inline-block rounded-lg border border-zinc-600 bg-zinc-800 px-4 py-2 text-sm font-semibold text-white hover:bg-zinc-700"
          >
            Ana Sayfa
          </Link>

          <Link
            href="/borsa"
            className="inline-block rounded-lg border border-zinc-600 bg-zinc-800 px-4 py-2 text-sm font-semibold text-white hover:bg-zinc-700"
          >
            Geri
          </Link>
        </div>

        <div className="mb-3 overflow-x-auto rounded-t-xl border border-[#ff7a00] bg-[#202329]">
          <div className="min-w-[1200px]">
            <div className="grid grid-cols-[140px_repeat(7,minmax(120px,1fr))] border-b border-zinc-700 bg-[#101215] text-sm">
              <div className="border-r border-zinc-700 px-3 py-2 font-bold text-[#f59e0b]">
                XU100
              </div>
              <div className="border-r border-zinc-700 px-3 py-2">Pivot</div>
              <div className="border-r border-zinc-700 px-3 py-2 font-semibold">
                {formatNumber(xu100Ozet.pivot)}
              </div>
              <div className="border-r border-zinc-700 px-3 py-2">Destek 1</div>
              <div className="border-r border-zinc-700 px-3 py-2 font-semibold">
                {formatNumber(xu100Ozet.destek1)}
              </div>
              <div className="border-r border-zinc-700 px-3 py-2">Destek 2</div>
              <div className="border-r border-zinc-700 px-3 py-2 font-semibold">
                {formatNumber(xu100Ozet.destek2)}
              </div>
              <div className="px-3 py-2">Destek 3</div>
            </div>

            <div className="grid grid-cols-[140px_repeat(7,minmax(120px,1fr))] border-b border-zinc-700 bg-[#101215] text-sm">
              <div className="border-r border-zinc-700 px-3 py-2"></div>
              <div className="border-r border-zinc-700 px-3 py-2"></div>
              <div className="border-r border-zinc-700 px-3 py-2"></div>
              <div className="border-r border-zinc-700 px-3 py-2"></div>
              <div className="border-r border-zinc-700 px-3 py-2"></div>
              <div className="border-r border-zinc-700 px-3 py-2"></div>
              <div className="border-r border-zinc-700 px-3 py-2"></div>
              <div className="px-3 py-2 font-semibold">
                {formatNumber(xu100Ozet.destek3)}
              </div>
            </div>

            <div className="bg-green-800 px-3 py-2 text-center text-sm font-semibold text-white">
              Üçüncü direnç seviyesinin üstüne çıktı.
            </div>

            <div className="grid grid-cols-[140px_repeat(7,minmax(120px,1fr))] border-t border-zinc-700 bg-[#101215] text-sm">
              <div className="border-r border-zinc-700 px-3 py-2">Pivota Göre Fark %</div>
              <div className="border-r border-zinc-700 px-3 py-2 font-semibold">
                {formatNumber(xu100Ozet.fark)}
              </div>
              <div className="border-r border-zinc-700 px-3 py-2">Direnç 1</div>
              <div className="border-r border-zinc-700 px-3 py-2 font-semibold">
                {formatNumber(xu100Ozet.direnc1)}
              </div>
              <div className="border-r border-zinc-700 px-3 py-2">Direnç 2</div>
              <div className="border-r border-zinc-700 px-3 py-2 font-semibold">
                {formatNumber(xu100Ozet.direnc2)}
              </div>
              <div className="border-r border-zinc-700 px-3 py-2">Direnç 3</div>
              <div className="px-3 py-2 font-semibold">
                {formatNumber(xu100Ozet.direnc3)}
              </div>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto rounded-b-xl border border-zinc-700 bg-[#202329]">
          <table className="min-w-[1400px] w-full border-collapse text-sm">
            <thead className="bg-[#2a2d33] text-zinc-200">
              <tr>
                <th className="border border-zinc-700 px-3 py-2 text-left">Sembol</th>
                <th className="border border-zinc-700 px-3 py-2 text-left">Pivota Göre Fark %</th>
                <th className="border border-zinc-700 px-3 py-2 text-left">Son</th>
                <th className="border border-zinc-700 px-3 py-2 text-left">Pivot</th>
                <th className="border border-zinc-700 px-3 py-2 text-left">Destek 1</th>
                <th className="border border-zinc-700 px-3 py-2 text-left">Destek 2</th>
                <th className="border border-zinc-700 px-3 py-2 text-left">Destek 3</th>
                <th className="border border-zinc-700 px-3 py-2 text-left">Direnç 1</th>
                <th className="border border-zinc-700 px-3 py-2 text-left">Direnç 2</th>
                <th className="border border-zinc-700 px-3 py-2 text-left">Direnç 3</th>
              </tr>
            </thead>

            <tbody>
              {pivotVerileri.map((row, index) => {
                const durum = getDurum(row);

                return (
                  <>
                    <tr
                      key={`${row.sembol}-veri`}
                      className={index % 2 === 0 ? "bg-[#2f3338]" : "bg-[#24272c]"}
                    >
                      <td className="border border-zinc-700 px-3 py-2 font-semibold">
                        {row.sembol}
                      </td>
                      <td className="border border-zinc-700 px-3 py-2">
                        {formatNumber(row.fark)}
                      </td>
                      <td className="border border-zinc-700 px-3 py-2">
                        {formatNumber(row.son)}
                      </td>
                      <td className="border border-zinc-700 px-3 py-2">
                        {formatNumber(row.pivot)}
                      </td>
                      <td className="border border-zinc-700 px-3 py-2">
                        {formatNumber(row.destek1)}
                      </td>
                      <td className="border border-zinc-700 px-3 py-2">
                        {formatNumber(row.destek2)}
                      </td>
                      <td className="border border-zinc-700 px-3 py-2">
                        {formatNumber(row.destek3)}
                      </td>
                      <td className="border border-zinc-700 px-3 py-2">
                        {formatNumber(row.direnc1)}
                      </td>
                      <td className="border border-zinc-700 px-3 py-2">
                        {formatNumber(row.direnc2)}
                      </td>
                      <td className="border border-zinc-700 px-3 py-2">
                        {formatNumber(row.direnc3)}
                      </td>
                    </tr>
                    <tr key={`${row.sembol}-durum`}>
                      <td
                        colSpan={10}
                        className={`${durum.bg} border border-zinc-700 px-3 py-1.5 text-center text-sm font-semibold text-white`}
                      >
                        {durum.text}
                      </td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}