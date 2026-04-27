"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

type CellValue = string | number | null;

function sortArrow(active: boolean, direction: "asc" | "desc") {
  if (!active) return "↕";
  return direction === "asc" ? "↑" : "↓";
}

export default function FonTarihselTableClient({
  headers,
  rows,
  pageBasePath,
  q,
  sort,
  dir,
}: {
  headers: string[];
  rows: CellValue[][];
  pageBasePath: string;
  q: string;
  sort: string;
  dir: "asc" | "desc";
}) {
  const tableScrollRef = useRef<HTMLDivElement | null>(null);
  const fixedScrollRef = useRef<HTMLDivElement | null>(null);
  const fixedInnerRef = useRef<HTMLDivElement | null>(null);
  const tableRef = useRef<HTMLTableElement | null>(null);

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
  }, [headers, rows]);

  const tableMinWidth = Math.max(headers.length * 170, 1320);

  const sortLink = (index: number) => {
    const sp = new URLSearchParams();

    if (q) sp.set("q", q);

    sp.set("sort", String(index));
    sp.set("dir", sort === String(index) && dir === "asc" ? "desc" : "asc");

    return `${pageBasePath}?${sp.toString()}`;
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
                    <Link href={sortLink(index)} prefetch={false}>
                      {header} {sortArrow(sort === String(index), dir)}
                    </Link>
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {rows.map((row, rowIndex) => (
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

              {rows.length === 0 && (
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