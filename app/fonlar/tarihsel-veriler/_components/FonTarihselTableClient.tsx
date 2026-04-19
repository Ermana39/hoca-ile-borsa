"use client";

import { useEffect, useRef } from "react";

type CellValue = string | number | null;

export default function FonTarihselTableClient({
  headers,
  rows,
}: {
  headers: string[];
  rows: CellValue[][];
}) {
  const headerScrollRef = useRef<HTMLDivElement | null>(null);
  const bodyScrollRef = useRef<HTMLDivElement | null>(null);
  const fixedScrollRef = useRef<HTMLDivElement | null>(null);
  const fixedInnerRef = useRef<HTMLDivElement | null>(null);
  const headerTableRef = useRef<HTMLTableElement | null>(null);
  const bodyTableRef = useRef<HTMLTableElement | null>(null);

  useEffect(() => {
    const headerScroll = headerScrollRef.current;
    const bodyScroll = bodyScrollRef.current;
    const fixedScroll = fixedScrollRef.current;
    const fixedInner = fixedInnerRef.current;
    const headerTable = headerTableRef.current;
    const bodyTable = bodyTableRef.current;

    if (
      !headerScroll ||
      !bodyScroll ||
      !fixedScroll ||
      !fixedInner ||
      !headerTable ||
      !bodyTable
    ) {
      return;
    }

    let source: "header" | "body" | "fixed" | "" = "";

    const syncWidths = () => {
      const width = Math.max(headerTable.scrollWidth, bodyTable.scrollWidth, 1320);
      fixedInner.style.width = `${width}px`;
      headerScroll.scrollLeft = bodyScroll.scrollLeft;
      fixedScroll.scrollLeft = bodyScroll.scrollLeft;
    };

    const onHeaderScroll = () => {
      if (source === "body" || source === "fixed") {
        source = "";
        return;
      }
      source = "header";
      bodyScroll.scrollLeft = headerScroll.scrollLeft;
      fixedScroll.scrollLeft = headerScroll.scrollLeft;
    };

    const onBodyScroll = () => {
      if (source === "header" || source === "fixed") {
        source = "";
        return;
      }
      source = "body";
      headerScroll.scrollLeft = bodyScroll.scrollLeft;
      fixedScroll.scrollLeft = bodyScroll.scrollLeft;
    };

    const onFixedScroll = () => {
      if (source === "header" || source === "body") {
        source = "";
        return;
      }
      source = "fixed";
      headerScroll.scrollLeft = fixedScroll.scrollLeft;
      bodyScroll.scrollLeft = fixedScroll.scrollLeft;
    };

    syncWidths();

    headerScroll.addEventListener("scroll", onHeaderScroll, { passive: true });
    bodyScroll.addEventListener("scroll", onBodyScroll, { passive: true });
    fixedScroll.addEventListener("scroll", onFixedScroll, { passive: true });
    window.addEventListener("resize", syncWidths);

    let resizeObserver: ResizeObserver | null = null;
    if (typeof ResizeObserver !== "undefined") {
      resizeObserver = new ResizeObserver(syncWidths);
      resizeObserver.observe(headerTable);
      resizeObserver.observe(bodyTable);
    }

    return () => {
      headerScroll.removeEventListener("scroll", onHeaderScroll);
      bodyScroll.removeEventListener("scroll", onBodyScroll);
      fixedScroll.removeEventListener("scroll", onFixedScroll);
      window.removeEventListener("resize", syncWidths);
      resizeObserver?.disconnect();
    };
  }, [headers, rows]);

  return (
    <>
      <section className="overflow-hidden rounded-2xl border border-zinc-200 bg-white">
        <div className="sticky top-0 z-30 overflow-hidden rounded-t-2xl border-b border-zinc-200 bg-white">
          <div
            ref={headerScrollRef}
            className="overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          >
            <table
              ref={headerTableRef}
              className="w-full min-w-[1320px] border-collapse text-sm"
            >
              <thead className="bg-zinc-100 text-zinc-800">
                <tr>
                  {headers.map((header, index) => (
                    <th
                      key={`${header}-${index}`}
                      className="px-4 py-4 text-left font-semibold whitespace-nowrap"
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
            </table>
          </div>
        </div>

        <div
          ref={bodyScrollRef}
          className="overflow-x-auto rounded-b-2xl [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          <table
            ref={bodyTableRef}
            className="w-full min-w-[1320px] border-collapse text-sm"
          >
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
                          colIndex === 0 ? "font-bold text-zinc-900" : "text-zinc-700"
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
            <div ref={fixedInnerRef} className="h-4 min-w-[1320px]" />
          </div>
        </div>
      </div>
    </>
  );
}