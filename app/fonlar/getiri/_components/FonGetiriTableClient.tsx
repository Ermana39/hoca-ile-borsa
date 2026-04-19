"use client";

import { useEffect, useRef } from "react";

type FonRow = {
  kod: string;
  ad: string;
  kategori: string;
  birAy: number | null;
  ucAy: number | null;
  altiAy: number | null;
  yilbasi: number | null;
  birYil: number | null;
  ucYil: number | null;
  besYil: number | null;
};

function formatPercent(value: number | null) {
  if (value === null) return "-";
  return new Intl.NumberFormat("tr-TR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
}

export default function FonGetiriTableClient({
  rows,
  headers,
}: {
  rows: FonRow[];
  headers: React.ReactNode;
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
      const width = Math.max(headerTable.scrollWidth, bodyTable.scrollWidth);
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
  }, [rows]);

  return (
    <>
      <section className="rounded-2xl border border-zinc-200 bg-white">
        <div className="sticky top-0 z-30 overflow-hidden rounded-t-2xl border-b border-zinc-200 bg-white">
          <div
            ref={headerScrollRef}
            className="overflow-x-auto [&::-webkit-scrollbar]:hidden"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            <table
              ref={headerTableRef}
              className="w-full min-w-[1320px] border-collapse text-sm"
            >
              <thead className="bg-zinc-100 text-zinc-800">{headers}</thead>
            </table>
          </div>
        </div>

        <div
          ref={bodyScrollRef}
          className="overflow-x-auto rounded-b-2xl [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          <table
            ref={bodyTableRef}
            className="w-full min-w-[1320px] border-collapse text-sm"
          >
            <tbody>
              {rows.map((item, index) => (
                <tr
                  key={`${item.kod}-${index}`}
                  className={index % 2 === 0 ? "bg-white" : "bg-sky-50"}
                >
                  <td className="border-t border-zinc-100 px-4 py-4 font-bold text-zinc-900">
                    {item.kod || "-"}
                  </td>
                  <td className="border-t border-zinc-100 px-4 py-4 text-zinc-800">
                    {item.ad || "-"}
                  </td>
                  <td className="border-t border-zinc-100 px-4 py-4 text-zinc-700">
                    {item.kategori || "-"}
                  </td>
                  <td
                    className={`border-t border-zinc-100 px-4 py-4 font-semibold ${
                      (item.birAy ?? 0) >= 0 ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {item.birAy === null ? "-" : `%${formatPercent(item.birAy)}`}
                  </td>
                  <td
                    className={`border-t border-zinc-100 px-4 py-4 font-semibold ${
                      (item.ucAy ?? 0) >= 0 ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {item.ucAy === null ? "-" : `%${formatPercent(item.ucAy)}`}
                  </td>
                  <td
                    className={`border-t border-zinc-100 px-4 py-4 font-semibold ${
                      (item.altiAy ?? 0) >= 0 ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {item.altiAy === null ? "-" : `%${formatPercent(item.altiAy)}`}
                  </td>
                  <td
                    className={`border-t border-zinc-100 px-4 py-4 font-semibold ${
                      (item.yilbasi ?? 0) >= 0 ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {item.yilbasi === null ? "-" : `%${formatPercent(item.yilbasi)}`}
                  </td>
                  <td
                    className={`border-t border-zinc-100 px-4 py-4 font-semibold ${
                      (item.birYil ?? 0) >= 0 ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {item.birYil === null ? "-" : `%${formatPercent(item.birYil)}`}
                  </td>
                  <td
                    className={`border-t border-zinc-100 px-4 py-4 font-semibold ${
                      (item.ucYil ?? 0) >= 0 ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {item.ucYil === null ? "-" : `%${formatPercent(item.ucYil)}`}
                  </td>
                  <td
                    className={`border-t border-zinc-100 px-4 py-4 font-semibold ${
                      (item.besYil ?? 0) >= 0 ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {item.besYil === null ? "-" : `%${formatPercent(item.besYil)}`}
                  </td>
                </tr>
              ))}

              {rows.length === 0 && (
                <tr>
                  <td
                    colSpan={10}
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