"use client";

type Stock = {
  symbol: string;
  last: number;
  pivot: number;
  s1: number;
  s2: number;
  r1: number;
  r2: number;
};

const stocks: Stock[] = [
  { symbol: "AEFES", last: 18.71, pivot: 18.8066, s1: 18.5633, s2: 18.3066, r1: 19.0633, r2: 19.3066 },
  { symbol: "AKBNK", last: 78.25, pivot: 78.75, s1: 78.25, s2: 77.5999, r1: 79.4, r2: 79.9 },
  { symbol: "ASELS", last: 411.5, pivot: 416.4166, s1: 411.5833, s2: 406.4166, r1: 421.5833, r2: 426.4166 },
  { symbol: "ASTOR", last: 192.1, pivot: 196.3666, s1: 192.9333, s2: 190.8666, r1: 198.4333, r2: 201.8666 },
  { symbol: "BIMAS", last: 749, pivot: 756.3333, s1: 746.6666, s2: 740.3333, r1: 762.6666, r2: 772.3333 },
  { symbol: "DSTKF", last: 2159, pivot: 2122.3333, s1: 2110.6666, s2: 2091.3333, r1: 2141.6666, r2: 2153.3333 },
  { symbol: "EKGYO", last: 21.24, pivot: 21.2733, s1: 21.1266, s2: 21.0533, r1: 21.3466, r2: 21.4933 },
  { symbol: "ENKAI", last: 103.9, pivot: 104.2333, s1: 102.9666, s2: 101.7333, r1: 105.4666, r2: 106.7333 },
  { symbol: "EREGL", last: 31.38, pivot: 31.5466, s1: 31.2933, s2: 30.9466, r1: 31.8933, r2: 32.1466 },
  { symbol: "FROTO", last: 107.1, pivot: 107.0666, s1: 106.0333, s2: 105.2666, r1: 107.8333, r2: 108.8666 },
  { symbol: "GARAN", last: 138, pivot: 139.3999, s1: 138.1, s2: 137.3999, r1: 140.1, r2: 141.3999 },
  { symbol: "GUBRF", last: 527, pivot: 522, s1: 502.5, s2: 475.5, r1: 549, r2: 568.5 },
  { symbol: "ISCTR", last: 14.43, pivot: 14.5833, s1: 14.4766, s2: 14.4033, r1: 14.6566, r2: 14.7633 },
  { symbol: "KCHOL", last: 204.4, pivot: 207.4666, s1: 206.0333, s2: 204.2666, r1: 209.2333, r2: 210.6666 },
  { symbol: "KRDMD", last: 36.16, pivot: 36.2199, s1: 35.5999, s2: 34.74, r1: 37.0799, r2: 37.6999 },
  { symbol: "MGROS", last: 656.5, pivot: 656.8333, s1: 650.1666, s2: 643.8333, r1: 663.1666, r2: 669.8333 },
  { symbol: "PETKM", last: 22.62, pivot: 22, s1: 21.6599, s2: 21.3199, r1: 22.34, r2: 22.68 },
  { symbol: "PGSUS", last: 187, pivot: 188.8999, s1: 187.2999, s2: 186.2999, r1: 189.9, r2: 191.5 },
  { symbol: "SAHOL", last: 99.55, pivot: 100.5666, s1: 99.6333, s2: 98.6666, r1: 101.5333, r2: 102.4666 },
  { symbol: "SASA", last: 3.08, pivot: 2.8933, s1: 2.7966, s2: 2.6033, r1: 3.0866, r2: 3.1833 },
  { symbol: "SISE", last: 47.28, pivot: 48.1533, s1: 47.8066, s2: 47.3933, r1: 48.5666, r2: 48.9133 },
  { symbol: "TAVHL", last: 317, pivot: 324.25, s1: 317.25, s2: 313, r1: 328.5, r2: 335.5 },
  { symbol: "TCELL", last: 117.4, pivot: 116.7666, s1: 115.9333, s2: 114.7666, r1: 117.9333, r2: 118.7666 },
  { symbol: "THYAO", last: 317.25, pivot: 321.5, s1: 316.25, s2: 313.25, r1: 324.5, r2: 329.75 },
  { symbol: "TOASO", last: 290, pivot: 297.9166, s1: 294.5833, s2: 290.1666, r1: 302.3333, r2: 305.6666 },
  { symbol: "TRAIL", last: 47, pivot: 47.12, s1: 46.0199, s2: 44.5599, r1: 48.58, r2: 49.68 },
  { symbol: "TTKOM", last: 63.35, pivot: 63.05, s1: 62.4, s2: 61.8499, r1: 63.6, r2: 64.25 },
  { symbol: "TUPRS", last: 266, pivot: 263.6666, s1: 258.8333, s2: 256.4166, r1: 266.0833, r2: 270.9166 },
  { symbol: "VAKBN", last: 33.9, pivot: 34.2066, s1: 33.9733, s2: 33.8266, r1: 34.3533, r2: 34.5866 },
  { symbol: "YKBNK", last: 37.4, pivot: 37.6266, s1: 37.2733, s2: 36.9666, r1: 37.9333, r2: 38.2866 },
];

function getRowColor(stock: Stock) {
  if (stock.last < stock.s2) return "bg-red-700 text-white";       // güçlü düşüş
  if (stock.last < stock.s1) return "bg-red-500 text-white";       // destek altı
  if (stock.last < stock.pivot) return "bg-red-300 text-black";    // pivot altı
  if (stock.last > stock.r2) return "bg-green-700 text-white";     // güçlü yükseliş
  if (stock.last > stock.r1) return "bg-green-500 text-white";     // direnç üstü
  if (stock.last > stock.pivot) return "bg-green-300 text-black";  // pivot üstü
  return "";
}

export default function Page() {
  return (
    <div className="p-4">
      <table className="w-full border text-sm">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2">Sembol</th>
            <th className="p-2">Son</th>
            <th className="p-2">Pivot</th>
            <th className="p-2">Destek 1</th>
            <th className="p-2">Destek 2</th>
            <th className="p-2">Direnç 1</th>
            <th className="p-2">Direnç 2</th>
          </tr>
        </thead>
        <tbody>
          {stocks.map((s) => (
            <tr key={s.symbol} className={getRowColor(s)}>
              <td className="p-2">{s.symbol}</td>
              <td className="p-2">{s.last}</td>
              <td className="p-2">{s.pivot}</td>
              <td className="p-2">{s.s1}</td>
              <td className="p-2">{s.s2}</td>
              <td className="p-2">{s.r1}</td>
              <td className="p-2">{s.r2}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}