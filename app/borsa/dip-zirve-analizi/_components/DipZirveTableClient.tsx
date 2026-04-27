"use client";

import { useMemo, useState } from "react";

export type DipZirveSatiri = {
  sembol: string;
  yuzdeDibeUzaklik: number | null;
  gunDibeUzaklik: number | null;
  yuzdeZirveyeUzaklik: number | null;
  gunZirveyeUzaklik: number | null;
  zirveDip: number | null;
};

type SortKey = keyof DipZirveSatiri;
type SortDir = "asc" | "desc";

function sayiFormatla(deger: number | null, yuzde = false) {
  if (deger === null || Number.isNaN(deger)) return "-";

  const formatted = new Intl.NumberFormat("tr-TR", {
    minimumFractionDigits: Number.isInteger(deger) ? 0 : 2,
    maximumFractionDigits: 2,
  }).format(deger);

  return yuzde ? `%${formatted}` : formatted;
}

function toSortableNumber(value: number | null) {
  if (value === null || Number.isNaN(value)) return -999999999;
  return value;
}

function sortArrow(active: boolean, direction: SortDir) {
  if (!active) return "↕";
  return direction === "asc" ? "↑" : "↓";
}

export default function DipZirveTableClient({
  rows,
}: {
  rows: DipZirveSatiri[];
}) {
  const [sort, setSort] = useState<SortKey>("sembol");
  const [dir, setDir] = useState<SortDir>("asc");

  const sortedRows = useMemo(() => {
    return [...rows].sort((a, b) => {
      const aValue = a[sort];
      const bValue = b[sort];

      if (sort === "sembol") {
        return dir === "asc"
          ? String(aValue).localeCompare(String(bValue), "tr")
          : String(bValue).localeCompare(String(aValue), "tr");
      }

      const aNum = toSortableNumber(aValue as number | null);
      const bNum = toSortableNumber(bValue as number | null);

      return dir === "asc" ? aNum - bNum : bNum - aNum;
    });
  }, [rows, sort, dir]);

  const handleSort = (column: SortKey) => {
    if (sort === column) {
      setDir((prev) => (prev === "asc" ? "desc" : "asc"));
      return;
    }

    setSort(column);
    setDir(column === "sembol" ? "asc" : "desc");
  };

  return (
    <section className="overflow-hidden rounded-2xl border border-zinc-200 bg-white">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[980px] border-collapse text-sm">
          <thead className="bg-zinc-100 text-zinc-800">
            <tr>
              <th className="px-4 py-4 text-left font-semibold">
                <button type="button" onClick={() => handleSort("sembol")}>
                  Sembol {sortArrow(sort === "sembol", dir)}
                </button>
              </th>

              <th className="px-4 py-4 text-right font-semibold">
                <button
                  type="button"
                  onClick={() => handleSort("yuzdeDibeUzaklik")}
                >
                  % Dibe Uzaklık{" "}
                  {sortArrow(sort === "yuzdeDibeUzaklik", dir)}
                </button>
              </th>

              <th className="px-4 py-4 text-right font-semibold">
                <button
                  type="button"
                  onClick={() => handleSort("gunDibeUzaklik")}
                >
                  Gün Dibe Uzaklık{" "}
                  {sortArrow(sort === "gunDibeUzaklik", dir)}
                </button>
              </th>

              <th className="px-4 py-4 text-right font-semibold">
                <button
                  type="button"
                  onClick={() => handleSort("yuzdeZirveyeUzaklik")}
                >
                  % Zirveye Uzaklık{" "}
                  {sortArrow(sort === "yuzdeZirveyeUzaklik", dir)}
                </button>
              </th>

              <th className="px-4 py-4 text-right font-semibold">
                <button
                  type="button"
                  onClick={() => handleSort("gunZirveyeUzaklik")}
                >
                  Gün Zirveye Uzaklık{" "}
                  {sortArrow(sort === "gunZirveyeUzaklik", dir)}
                </button>
              </th>

              <th className="px-4 py-4 text-right font-semibold">
                <button type="button" onClick={() => handleSort("zirveDip")}>
                  Zirve / Dip {sortArrow(sort === "zirveDip", dir)}
                </button>
              </th>
            </tr>
          </thead>

          <tbody>
            {sortedRows.map((item, index) => (
              <tr
                key={`${item.sembol}-${index}`}
                className={index % 2 === 0 ? "bg-white" : "bg-sky-50/60"}
              >
                <td className="px-4 py-3 font-semibold text-zinc-900">
                  {item.sembol}
                </td>

                <td className="px-4 py-3 text-right text-zinc-700">
                  {sayiFormatla(item.yuzdeDibeUzaklik, true)}
                </td>

                <td className="px-4 py-3 text-right text-zinc-700">
                  {sayiFormatla(item.gunDibeUzaklik)}
                </td>

                <td className="px-4 py-3 text-right text-zinc-700">
                  {sayiFormatla(item.yuzdeZirveyeUzaklik, true)}
                </td>

                <td className="px-4 py-3 text-right text-zinc-700">
                  {sayiFormatla(item.gunZirveyeUzaklik)}
                </td>

                <td className="px-4 py-3 text-right text-zinc-700">
                  {sayiFormatla(item.zirveDip)}
                </td>
              </tr>
            ))}

            {sortedRows.length === 0 && (
              <tr>
                <td
                  colSpan={6}
                  className="px-4 py-8 text-center text-sm text-zinc-500"
                >
                  Gösterilecek veri bulunamadı.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}