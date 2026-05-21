import Link from "next/link";

type PivotData = {
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

const xu100 = {
  pivot: 13985.96,
  destek1: 13882.17,
  destek2: 13752.32,
  destek3: 13648.53,
  direnc1: 14115.81,
  direnc2: 14219.6,
  direnc3: 14349.45,
  fark: -5.88,
  yorum: "Üçüncü destek seviyesinin altına indi.",
};

const hisseler: PivotData[] = [
  {
    sembol: "AEFES",
    fark: -4.82,
    son: 18.58,
    pivot: 19.52,
    destek1: 19.18,
    destek2: 18.61,
    destek3: 18.27,
    direnc1: 20.09,
    direnc2: 20.43,
    direnc3: 21,
    yorum: "İkinci destek seviyesinin altına indi.",
  },
  {
    sembol: "AKBNK",
    fark: -10.14,
    son: 62.2,
    pivot: 69.217,
    destek1: 68.633,
    destek2: 68.167,
    destek3: 67.583,
    direnc1: 69.683,
    direnc2: 70.267,
    direnc3: 70.733,
    yorum: "Üçüncü destek seviyesinin altına indi.",
  },
  {
    sembol: "ASELS",
    fark: -4.45,
    son: 377.75,
    pivot: 395.333,
    destek1: 387.417,
    destek2: 381.333,
    destek3: 373.417,
    direnc1: 401.417,
    direnc2: 409.333,
    direnc3: 415.417,
    yorum: "İkinci destek seviyesinin altına indi.",
  },
  {
    sembol: "ASTOR",
    fark: -6.04,
    son: 313.75,
    pivot: 333.917,
    destek1: 323.583,
    destek2: 302.917,
    destek3: 292.583,
    direnc1: 354.583,
    direnc2: 364.917,
    direnc3: 385.583,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "BIMAS",
    fark: -4.08,
    son: 376.5,
    pivot: 392.5,
    destek1: 385.75,
    destek2: 378.75,
    destek3: 372,
    direnc1: 399.5,
    direnc2: 406.25,
    direnc3: 413.25,
    yorum: "İkinci destek seviyesinin altına indi.",
  },
  {
    sembol: "DSTKF",
    fark: -2.89,
    son: 1860,
    pivot: 1915.333,
    destek1: 1874.667,
    destek2: 1849.333,
    destek3: 1808.667,
    direnc1: 1940.667,
    direnc2: 1981.333,
    direnc3: 2006.667,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "EKGYO",
    fark: -7.16,
    son: 18.41,
    pivot: 19.83,
    destek1: 19.62,
    destek2: 19.4,
    destek3: 19.19,
    direnc1: 20.05,
    direnc2: 20.26,
    direnc3: 20.48,
    yorum: "Üçüncü destek seviyesinin altına indi.",
  },
  {
    sembol: "ENKAI",
    fark: -3,
    son: 95.25,
    pivot: 98.2,
    destek1: 96.75,
    destek2: 94.7,
    destek3: 93.25,
    direnc1: 100.25,
    direnc2: 101.7,
    direnc3: 103.75,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "EREGL",
    fark: -8.84,
    son: 35.18,
    pivot: 38.593,
    destek1: 37.967,
    destek2: 37.333,
    destek3: 36.727,
    direnc1: 39.247,
    direnc2: 39.853,
    direnc3: 40.507,
    yorum: "Üçüncü destek seviyesinin altına indi.",
  },
  {
    sembol: "FROTO",
    fark: -4.78,
    son: 82.35,
    pivot: 86.4833,
    destek1: 85.6166,
    destek2: 84.5833,
    destek3: 83.7166,
    direnc1: 87.5166,
    direnc2: 88.3833,
    direnc3: 89.4166,
    yorum: "Üçüncü destek seviyesinin altına indi.",
  },
];

function yorumRenk(yorum: string) {
  if (yorum.includes("Üçüncü")) return "bg-red-900";
  if (yorum.includes("İkinci")) return "bg-red-700";
  if (yorum.includes("İlk")) return "bg-red-500";
  if (yorum.includes("üstünde")) return "bg-green-700";
  return "bg-orange-500";
}

function format(value: number) {
  return value.toLocaleString("tr-TR", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 4,
  });
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#1a1a1a] text-white p-2 md:p-4">
      <div className="mx-auto max-w-[1700px]">
        <div className="mb-4 flex gap-2">
          <Link
            href="/"
            className="bg-zinc-800 hover:bg-zinc-700 px-4 py-2 rounded text-sm"
          >
            Ana Sayfa
          </Link>

          <Link
            href="/borsa"
            className="bg-zinc-800 hover:bg-zinc-700 px-4 py-2 rounded text-sm"
          >
            Geri
          </Link>
        </div>

        <div className="overflow-x-auto border border-zinc-700">
          <div className={`${yorumRenk(xu100.yorum)} text-center py-2 font-bold`}>
            {xu100.yorum}
          </div>

          <table className="w-full border-collapse text-xs md:text-sm">
            <thead className="bg-[#2a2a2a]">
              <tr>
                <th className="border border-zinc-700 px-2 py-2">PIVOT</th>
                <th className="border border-zinc-700 px-2 py-2">
                  {format(xu100.pivot)}
                </th>

                <th className="border border-zinc-700 px-2 py-2">Destek 1</th>
                <th className="border border-zinc-700 px-2 py-2">
                  {format(xu100.destek1)}
                </th>

                <th className="border border-zinc-700 px-2 py-2">Destek 2</th>
                <th className="border border-zinc-700 px-2 py-2">
                  {format(xu100.destek2)}
                </th>

                <th className="border border-zinc-700 px-2 py-2">Destek 3</th>
                <th className="border border-zinc-700 px-2 py-2">
                  {format(xu100.destek3)}
                </th>
              </tr>

              <tr>
                <th className="border border-zinc-700 px-2 py-2">
                  PIVOTA GÖRE FARK %
                </th>

                <th className="border border-zinc-700 px-2 py-2 text-red-400">
                  {format(xu100.fark)}
                </th>

                <th className="border border-zinc-700 px-2 py-2">Direnç 1</th>
                <th className="border border-zinc-700 px-2 py-2">
                  {format(xu100.direnc1)}
                </th>

                <th className="border border-zinc-700 px-2 py-2">Direnç 2</th>
                <th className="border border-zinc-700 px-2 py-2">
                  {format(xu100.direnc2)}
                </th>

                <th className="border border-zinc-700 px-2 py-2">Direnç 3</th>
                <th className="border border-zinc-700 px-2 py-2">
                  {format(xu100.direnc3)}
                </th>
              </tr>
            </thead>
          </table>

          <table className="w-full border-collapse text-xs md:text-sm">
            <thead className="bg-[#222222]">
              <tr>
                <th className="border border-zinc-700 px-2 py-2">Sembol</th>
                <th className="border border-zinc-700 px-2 py-2">
                  Pivota Göre Fark %
                </th>
                <th className="border border-zinc-700 px-2 py-2">Son</th>
                <th className="border border-zinc-700 px-2 py-2">Pivot</th>
                <th className="border border-zinc-700 px-2 py-2">Destek 1</th>
                <th className="border border-zinc-700 px-2 py-2">Destek 2</th>
                <th className="border border-zinc-700 px-2 py-2">Destek 3</th>
                <th className="border border-zinc-700 px-2 py-2">Direnç 1</th>
                <th className="border border-zinc-700 px-2 py-2">Direnç 2</th>
                <th className="border border-zinc-700 px-2 py-2">Direnç 3</th>
              </tr>
            </thead>

            <tbody>
              {hisseler.map((item) => (
                <tbody key={item.sembol}>
                  <tr className="bg-[#1f1f1f]">
                    <td className="border border-zinc-700 px-2 py-2 font-semibold">
                      {item.sembol}
                    </td>

                    <td className="border border-zinc-700 px-2 py-2">
                      {format(item.fark)}
                    </td>

                    <td className="border border-zinc-700 px-2 py-2">
                      {format(item.son)}
                    </td>

                    <td className="border border-zinc-700 px-2 py-2">
                      {format(item.pivot)}
                    </td>

                    <td className="border border-zinc-700 px-2 py-2">
                      {format(item.destek1)}
                    </td>

                    <td className="border border-zinc-700 px-2 py-2">
                      {format(item.destek2)}
                    </td>

                    <td className="border border-zinc-700 px-2 py-2">
                      {format(item.destek3)}
                    </td>

                    <td className="border border-zinc-700 px-2 py-2">
                      {format(item.direnc1)}
                    </td>

                    <td className="border border-zinc-700 px-2 py-2">
                      {format(item.direnc2)}
                    </td>

                    <td className="border border-zinc-700 px-2 py-2">
                      {format(item.direnc3)}
                    </td>
                  </tr>

                  <tr>
                    <td
                      colSpan={10}
                      className={`${yorumRenk(
                        item.yorum
                      )} border border-zinc-700 px-2 py-2 text-center font-semibold`}
                    >
                      {item.yorum}
                    </td>
                  </tr>
                </tbody>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}