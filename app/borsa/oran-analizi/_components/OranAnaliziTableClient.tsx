"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type RowData = Record<string, string | number | null>;
type SortDir = "asc" | "desc";

function parseNumeric(value: string | number | null) {
  if (value === null) return null;
  if (typeof value === "number") return Number.isFinite(value) ? value : null;

  const temiz = value
    .replace(/\s/g, "")
    .replace(/₺|\$|€|£|%/g, "")
    .replace(/\.(?=\d{3}(\D|$))/g, "")
    .replace(",", ".");

  const sayi = Number(temiz);
  return Number.isFinite(sayi) ? sayi : null;
}

function formatValue(value: string | number | null) {
  if (value === null) return "-";

  if (typeof value === "number") {
    return new Intl.NumberFormat("tr-TR", {
      minimumFractionDigits: Number.isInteger(value) ? 0 : 2,
      maximumFractionDigits: 4,
    }).format(value);
  }

  return value;
}

function getRowType(row: RowData, columns: string[]) {
  const doluHucreler = columns
    .map((column) => row[column])
    .filter((value) => value !== null && value !== "");

  if (doluHucreler.length !== 1) return "normal";

  const ilkDeger = String(doluHucreler[0] ?? "").trim();
  if (!ilkDeger) return "normal";
  if (parseNumeric(ilkDeger) !== null) return "normal";

  const normalized = ilkDeger.toLocaleLowerCase("tr");
  if (normalized === "sektör" || normalized === "sektor") return "remove";

  return "sector_header";
}

function sortArrow(active: boolean, direction: SortDir) {
  if (!active) return "↕";
  return direction === "asc" ? "↑" : "↓";
}

function compareValues(
  a: string | number | null,
  b: string | number | null,
  dir: SortDir
) {
  const aNum = parseNumeric(a);
  const bNum = parseNumeric(b);

  if (aNum !== null && bNum !== null) {
    return dir === "asc" ? aNum - bNum : bNum - aNum;
  }

  const aText = String(a ?? "");
  const bText = String(b ?? "");

  return dir === "asc"
    ? aText.localeCompare(bText, "tr")
    : bText.localeCompare(aText, "tr");
}

function getDefaultDir(rows: RowData[], column: string, columns: string[]) {
  const sample = rows.find((row) => {
    if (getRowType(row, columns) !== "normal") return false;
    const value = row[column];
    return value !== null && value !== "";
  });

  if (!sample) return "asc";

  return parseNumeric(sample[column]) !== null ? "desc" : "asc";
}

function sortRowsWithSectors(
  rows: RowData[],
  columns: string[],
  sortColumn: string,
  dir: SortDir
) {
  const result: RowData[] = [];
  let group: RowData[] = [];

  const flushGroup = () => {
    if (!group.length) return;

    result.push(
      ...[...group].sort((a, b) =>
        compareValues(a[sortColumn] ?? null, b[sortColumn] ?? null, dir)
      )
    );

    group = [];
  };

  rows.forEach((row) => {
    const rowType = getRowType(row, columns);

    if (rowType === "sector_header") {
      flushGroup();
      result.push(row);
      return;
    }

    group.push(row);
  });

  flushGroup();

  return result;
}

export default function OranAnaliziTableClient({
  columns,
  rows,
}: {
  columns: string[];
  rows: RowData[];
}) {
  const [sortColumn, setSortColumn] = useState<string>("");
  const [dir, setDir] = useState<SortDir>("asc");

  const tableScrollRef = useRef<HTMLDivElement | null>(null);
  const fixedScrollRef = useRef<HTMLDivElement | null>(null);
  const fixedInnerRef = useRef<HTMLDivElement | null>(null);
  const tableRef = useRef<HTMLTableElement | null>(null);

  const sortedRows = useMemo(() => {
    if (!sortColumn) return rows;
    return sortRowsWithSectors(rows, columns, sortColumn, dir);
  }, [rows, columns, sortColumn, dir]);

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
  }, [columns, rows]);

  const handleSort = (column: string) => {
    if (sortColumn === column) {
      setDir((prev) => (prev === "asc" ? "desc" : "asc"));
      return;
    }

    setSortColumn(column);
    setDir(getDefaultDir(rows, column, columns));
  };

  const tableMinWidth = Math.max(columns.length * 145, 1200);

  return (
    <>
      <div className="rounded-2xl border border-zinc-200 bg-white">
        <div
          ref={tableScrollRef}
          className="overflow-x-auto rounded-2xl [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          <table
            ref={tableRef}
            className="w-full border-collapse text-sm"
            style={{ minWidth: `${tableMinWidth}px` }}
          >
            <thead className="text-zinc-700">
              <tr>
                {columns.map((column, columnIndex) => (
                  <th
                    key={column}
                    className={`sticky top-0 z-30 border-b border-zinc-200 bg-zinc-100 px-4 py-3 text-left font-bold whitespace-nowrap ${
                      columnIndex === 0
                        ? "left-0 z-40 shadow-[8px_0_12px_-12px_rgba(0,0,0,0.25)]"
                        : ""
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => handleSort(column)}
                      className="text-left"
                    >
                      {column} {sortArrow(sortColumn === column, dir)}
                    </button>
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {sortedRows.map((row, index) => {
                const rowType = getRowType(row, columns);

                if (rowType === "sector_header") {
                  const sektorAdi = String(
                    columns
                      .map((column) => row[column])
                      .find((value) => value !== null && value !== "") ?? ""
                  );

                  return (
                    <tr key={`row-${index}`} className="bg-red-50">
                      <td
                        colSpan={columns.length}
                        className="border-b border-red-100 px-4 py-3 font-semibold text-red-700 whitespace-nowrap"
                      >
                        {sektorAdi}
                      </td>
                    </tr>
                  );
                }

                const satirArkaPlan = index % 2 === 1 ? "bg-sky-50" : "bg-white";
                const stickyArkaPlan = index % 2 === 1 ? "bg-sky-50" : "bg-white";

                return (
                  <tr key={`row-${index}`} className={satirArkaPlan}>
                    {columns.map((column, columnIndex) => (
                      <td
                        key={`${index}-${column}`}
                        className={`border-b border-zinc-100 px-4 py-3 whitespace-nowrap text-zinc-700 ${
                          columnIndex === 0
                            ? `sticky left-0 z-10 ${stickyArkaPlan} font-semibold text-zinc-900 shadow-[8px_0_12px_-12px_rgba(0,0,0,0.25)]`
                            : ""
                        }`}
                      >
                        {formatValue(row[column] ?? null)}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-zinc-200 bg-white/95 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div
            ref={fixedScrollRef}
            className="overflow-x-auto rounded-full border border-zinc-200 bg-zinc-100"
          >
            <div ref={fixedInnerRef} className="h-5" />
          </div>
        </div>
      </div>
    </>
  );
}