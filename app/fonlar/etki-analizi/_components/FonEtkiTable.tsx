import Link from "next/link";
import { getHisseIcerikHedefi } from "@/lib/hisse-icerik-hedefi";

export type FonEtkiRow = {
  sembol: string;
  fonOrani: number;
  kapanisMarji: number;
  etki: number;
};

function fmt(value: number, digits = 2) {
  return new Intl.NumberFormat("tr-TR", {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  }).format(value);
}

function etkiClass(value: number) {
  if (value > 0) return "text-green-600";
  if (value < 0) return "text-red-600";
  return "text-zinc-700";
}

export default function FonEtkiTable({
  rows,
  toplamFonOrani,
  toplamEtki,
}: {
  rows: FonEtkiRow[];
  toplamFonOrani: number;
  toplamEtki: number;
}) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-zinc-200 bg-white">
      <table className="w-full min-w-[480px] border-collapse text-sm">
        <thead className="bg-zinc-100 text-zinc-800">
          <tr>
            <th className="px-4 py-3 text-left font-semibold">Sembol</th>
            <th className="px-4 py-3 text-right font-semibold">Fon Oranı (%)</th>
            <th className="px-4 py-3 text-right font-semibold">Kapanış Marjı (%)</th>
            <th className="px-4 py-3 text-right font-semibold">Etki</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => {
            const hedef = getHisseIcerikHedefi(row.sembol);
            return (
              <tr
                key={row.sembol}
                className={index % 2 === 0 ? "bg-white" : "bg-sky-50"}
              >
                <td className="border-t border-zinc-100 px-4 py-3 font-bold text-zinc-900">
                  {hedef ? (
                    <Link
                      href={hedef.href}
                      prefetch={false}
                      aria-label={hedef.etiket}
                      title={hedef.baslik}
                      className="transition hover:text-blue-700 hover:underline"
                    >
                      {row.sembol}
                    </Link>
                  ) : (
                    row.sembol
                  )}
                </td>
                <td className="border-t border-zinc-100 px-4 py-3 text-right text-zinc-700">
                  {fmt(row.fonOrani)}
                </td>
                <td
                  className={`border-t border-zinc-100 px-4 py-3 text-right font-semibold ${etkiClass(
                    row.kapanisMarji
                  )}`}
                >
                  {fmt(row.kapanisMarji)}
                </td>
                <td
                  className={`border-t border-zinc-100 px-4 py-3 text-right font-semibold ${etkiClass(
                    row.etki
                  )}`}
                >
                  {fmt(row.etki, 4)}
                </td>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr className="bg-zinc-100 font-bold text-zinc-900">
            <td className="border-t border-zinc-200 px-4 py-3">Toplam</td>
            <td className="border-t border-zinc-200 px-4 py-3 text-right">
              {fmt(toplamFonOrani)}
            </td>
            <td className="border-t border-zinc-200 px-4 py-3"></td>
            <td
              className={`border-t border-zinc-200 px-4 py-3 text-right ${etkiClass(
                toplamEtki
              )}`}
            >
              {fmt(toplamEtki, 2)}
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
