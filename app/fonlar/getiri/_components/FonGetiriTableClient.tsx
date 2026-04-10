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

    tableScroll.addEventListener("scroll", onTableScroll);
    fixedScroll.addEventListener("scroll", onFixedScroll);
    window.addEventListener("resize", syncWidths);

    return () => {
      tableScroll.removeEventListener("scroll", onTableScroll);
      fixedScroll.removeEventListener("scroll", onFixedScroll);
      window.removeEventListener("resize", syncWidths);
    };
  }, [rows]);

  return (
    <>
      <section className="overflow-hidden rounded-2xl border border-zinc-200 bg-white">
        <div
          ref={tableScrollRef}
          className="overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          <table
            ref={tableRef}
            className="w-full min-w-[1320px] border-collapse text-sm"
          >
            <thead className="bg-zinc-100 text-zinc-800">{headers}</thead>

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
                    {item.yilbasi === null
                      ? "-"
                      : `%${formatPercent(item.yilbasi)}`}
                  </td>
                  <td
                    className={`border-t border-zinc-100 px-4 py-4 font-semibold ${
                      (item.birYil ?? 0) >= 0 ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {item.birYil === null
                      ? "-"
                      : `%${formatPercent(item.birYil)}`}
                  </td>
                  <td
                    className={`border-t border-zinc-100 px-4 py-4 font-semibold ${
                      (item.ucYil ?? 0) >= 0 ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {item.ucYil === null
                      ? "-"
                      : `%${formatPercent(item.ucYil)}`}
                  </td>
                  <td
                    className={`border-t border-zinc-100 px-4 py-4 font-semibold ${
                      (item.besYil ?? 0) >= 0 ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {item.besYil === null
                      ? "-"
                      : `%${formatPercent(item.besYil)}`}
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