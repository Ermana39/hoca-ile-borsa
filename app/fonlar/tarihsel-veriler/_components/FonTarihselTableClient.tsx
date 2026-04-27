"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type CellValue = string | number | null;
type SortDir = "asc" | "desc";

function normalizeText(value: unknown) {
  return String(value ?? "").replace(/\s+/g, " ").trim();
}

function parseDateForSort(value: CellValue) {
  const text = normalizeText(value);

  const trDate = text.match(/^(\d{1,2})[./-](\d{1,2})[./-](\d{4})$/);
  if (trDate) {
    const [, day, month, year] = trDate;
    return new Date(Number(year), Number(month) - 1, Number(day)).getTime();
  }

  const isoDate = text.match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (isoDate) {
    const [, year, month, day] = isoDate;
    return new Date(Number(year), Number(month) - 1, Number(day)).getTime();
  }

  return null;
}

function parseNumberForSort(value: CellValue) {
  if (typeof value === "number") return Number.isFinite(value) ? value : null;

  const text = normalizeText(value);
  if (!text) return null;

  const cleaned = text
    .replace(/%/g, "")
    .replace(/\s/g, "")
    .replace(/\./g, "")
    .replace(",", ".")
    .replace(/[^\d.-]/g, "");

  if (!cleaned) return null;

  const parsed = Number(cleaned);
  return Number.isFinite(parsed) ? parsed : null;
}

function compareCells(a: CellValue, b: CellValue, dir: SortDir) {
  const aDate = parseDateForSort(a);
  const bDate = parseDateForSort(b);

  if (aDate !== null && bDate !== null) {
    return dir === "asc" ? aDate - bDate : bDate - aDate;
  }

  const aNum = parseNumberForSort(a);
  const bNum = parseNumberForSort(b);

  if (aNum !== null && bNum !== null) {
    return dir === "asc" ? aNum - bNum : bNum - aNum;
  }

  const aText = normalizeText(a);
  const bText = normalizeText(b);

  return dir === "asc"
    ? aText.localeCompare(bText, "tr")
    : bText.localeCompare(aText, "tr");
}

function getDefaultDir(rows: CellValue[][], columnIndex: number) {
  const sample = rows.find((row) => {
    const value = row[columnIndex];
    return value !== null && value !== "";
  });

  if (!sample) return "asc";

  const value = sample[columnIndex];

  if (parseNumberForSort(value) !== null || parseDateForSort(value) !== null) {
    return "desc";
  }

  return "asc";
}

function sortArrow(active: boolean, direction: SortDir) {
  if (!active) return "↕";
  return direction === "asc" ? "↑" : "↓";
}

export default function FonTarihselTableClient({
  headers,
  rows,
}: {
  headers: string[];
  rows: CellValue[][];
}) {
  const [sortIndex, setSortIndex] = useState<number | null>(null);
  const [dir, setDir] = useState<SortDir>("asc");

  const tableScrollRef = useRef<HTMLDivElement | null>(null);
  const fixedScrollRef = useRef<HTMLDivElement | null>(null);
  const fixedInnerRef = useRef<HTMLDivElement | null>(null);
  const tableRef = useRef<HTMLTableElement | null>(null);

  const sortedRows = useMemo(() => {
    if (sortIndex === null) return rows;

    return [...rows].sort((a, b) =>
      compareCells(a[sortIndex] ?? null, b[sortIndex] ?? null, dir)
    );
  }, [rows, sortIndex, dir]);

  useEffect(() => {
    const tableScroll = tableScrollRef.current;
    const fixedScroll = fixedScrollRef.current;
    const fixedInner = fixedInnerRef.current;
    const table = tableRef.current;

    if (!tableScroll || !fixedScroll || !fixedInner || !table) return;

    let syncingTable = false;
    let syncingFixed = false;

    const syncWidths = () => {
      fixedInner.style.width = `${table.scrollWidth}px`;
      fixedScroll.scrollLeft = tableScroll.scrollLeft;
    };

    const onTableScroll = () => {
      if (syncingFixed) return;
      syncingTable = true;
      fixedScroll.scrollLeft = tableScroll.scrollLeft;
      syncingTable = false;
    };

    const onFixedScroll = () => {
      if (syncingTable) return;
      syncingFixed = true;
      tableScroll.scrollLeft = fixedScroll.scrollLeft;
      syncingFixed = false;
    };

    syncWidths();

    tableScroll.addEventListener("scroll", onTableScroll, { passive: true });
    fixedScroll.addEventListener("scroll", onFixedScroll, { passive: true });
    window.addEventListener("resize", syncWidths);

    let resizeObserver: ResizeObserver | null = null;
    if (typeof ResizeObserver !== "undefined") {
      resizeObserver = new ResizeObserver(syncWidths);
      resizeObserver.observe(table);
    }

    return () => {
      tableScroll.removeEventListener("scroll", onTableScroll);
      fixedScroll.removeEventListener("scroll", onFixedScroll);
      window.removeEventListener("resize", syncWidths);
      resizeObserver?.disconnect();
    };
  }, [headers, rows, sortedRows]);

  const tableMinWidth = Math.max(headers.length * 170, 1320);

  const handleSort = (index: number) => {
    if (sortIndex === index) {
      setDir((prev) => (prev === "asc" ? "desc" : "asc"));
      return;
    }

    setSortIndex(index);
    setDir(getDefaultDir(rows, index));
  };

  return (
    <>
      <section className="overflow-hidden rounded-2xl border border-zinc-200 bg-white">
        <div
          ref={tableScrollRef}
          className="overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          <table
            ref={tableRef}
            className="w-full border-collapse text-sm"
            style={{ minWidth: `${tableMinWidth}px` }}
          >
            <thead className="bg-zinc-100 text-zinc-800">
              <tr>
                {headers.map((header, index) => (
                  <th
                    key={`${header}-${index}`}
                    className="sticky top-0 z-20 border-b border-zinc-200 bg-zinc-100 px-4 py-4 text-left font-semibold whitespace-nowrap"
                  >
                    <button
                      type="button"
                      onClick={() => handleSort(index)}
                      className="text-left"
                    >
                      {header} {sortArrow(sortIndex === index, dir)}
                    </button>
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {sortedRows.map((row, rowIndex) => (
                <tr
                  key={`row-${rowIndex}`}
                  className={rowIndex % 2 === 0 ? "bg-white" : "bg-sky-50"}
                >
                  {headers.map((_, colIndex) => {
                    const cell = row[colIndex];

                    return (
                      <td
                        key={`cell-${rowIndex}-${colIndex}`}
                        className={`border-t border-zinc-100 px-4 py-4 whitespace-nowrap ${
                          colIndex === 0
                            ? "font-bold text-zinc-900"
                            : "text-zinc-700"
                        }`}
                      >
                        {cell === null || cell === "" ? "-" : String(cell)}
                      </td>
                    );
                  })}
                </tr>
              ))}

              {sortedRows.length === 0 && (
                <tr>
                  <td
                    colSpan={headers.length || 1}
                    className="border-t border-zinc-100 px-4 py-8 text-center text-zinc-500"
                  >
                    Sonuç bulunamadı.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>

      <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-zinc-200 bg-white/95 px-4 py-2 shadow-[0_-6px_20px_rgba(0,0,0,0.08)] backdrop-blur">
        <div className="mx-auto max-w-7xl">
          <div
            ref={fixedScrollRef}
            className="overflow-x-auto rounded-full border border-zinc-200 bg-zinc-100"
          >
            <div ref={fixedInnerRef} className="h-4" />
          </div>
        </div>
      </div>
    </>
  );
}