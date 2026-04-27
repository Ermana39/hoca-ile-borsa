"use client";

import { useEffect, useMemo, useRef, useState } from "react";

export type FonRow = {
  kod: string;
  ad: string;
  kategori: string;
  riskDegeri: number | null;
  birAy: number | null;
  ucAy: number | null;
  altiAy: number | null;
  yilbasi: number | null;
  birYil: number | null;
  ucYil: number | null;
  besYil: number | null;
};

type SortKey = keyof FonRow;
type SortDir = "asc" | "desc";

const columns: {
  key: SortKey;
  label: string;
  align: "left" | "right";
  type: "text" | "number" | "percent" | "risk";
}[] = [
  { key: "kod", label: "Fon Kodu", align: "left", type: "text" },
  { key: "ad", label: "Fon Adı", align: "left", type: "text" },
  { key: "kategori", label: "Şemsiye Fon Türü", align: "left", type: "text" },
  { key: "riskDegeri", label: "Risk Değeri", align: "left", type: "risk" },
  { key: "birAy", label: "1 Ay %", align: "left", type: "percent" },
  { key: "ucAy", label: "3 Ay %", align: "left", type: "percent" },
  { key: "altiAy", label: "6 Ay %", align: "left", type: "percent" },
  { key: "yilbasi", label: "Yılbaşı %", align: "left", type: "percent" },
  { key: "birYil", label: "1 Yıl %", align: "left", type: "percent" },
  { key: "ucYil", label: "3 Yıl %", align: "left", type: "percent" },
  { key: "besYil", label: "5 Yıl %", align: "left", type: "percent" },
];

function formatPercent(value: number | null) {
  if (value === null) return "-";

  return new Intl.NumberFormat("tr-TR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
}

function formatRisk(value: number | null) {
  if (value === null) return "-";

  return new Intl.NumberFormat("tr-TR", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(value);
}

function toSortableNumber(value: unknown) {
  if (typeof value === "number") {
    return Number.isFinite(value) ? value : -999999999;
  }

  if (value === null || value === undefined || value === "") {
    return -999999999;
  }

  const normalized = Number(
    String(value).trim().replace(/\./g, "").replace(",", ".")
  );

  return Number.isFinite(normalized) ? normalized : -999999999;
}

function sortArrow(active: boolean, direction: SortDir) {
  if (!active) return "↕";
  return direction === "asc" ? "↑" : "↓";
}

function getPercentClass(value: number | null) {
  return (value ?? 0) >= 0 ? "text-green-600" : "text-red-600";
}

export default function FonGetiriTableClient({ rows }: { rows: FonRow[] }) {
  const [sort, setSort] = useState<SortKey>("birAy");
  const [dir, setDir] = useState<SortDir>("desc");

  const tableScrollRef = useRef<HTMLDivElement | null>(null);
  const fixedScrollRef = useRef<HTMLDivElement | null>(null);
  const fixedInnerRef = useRef<HTMLDivElement | null>(null);
  const tableRef = useRef<HTMLTableElement | null>(null);

  const sortedRows = useMemo(() => {
    return [...rows].sort((a, b) => {
      const aValue = a[sort];
      const bValue = b[sort];

      if (typeof aValue === "string" && typeof bValue === "string") {
        return dir === "asc"
          ? aValue.localeCompare(bValue, "tr")
          : bValue.localeCompare(aValue, "tr");
      }

      const aNum = toSortableNumber(aValue);
      const bNum = toSortableNumber(bValue);

      return dir === "asc" ? aNum - bNum : bNum - aNum;
    });
  }, [rows, sort, dir]);

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
  }, [rows]);

  const handleSort = (column: SortKey) => {
    if (sort === column) {
      setDir((prev) => (prev === "asc" ? "desc" : "asc"));
      return;
    }

    setSort(column);
    setDir(
      column === "kod" || column === "ad" || column === "kategori"
        ? "asc"
        : "desc"
    );
  };

  return (
    <>
      <section className="overflow-hidden rounded-2xl border border-zinc-200 bg-white">
        <div
          ref={tableScrollRef}
          className="overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          <table
            ref={tableRef}
            className="w-full min-w-[1460px] border-collapse text-sm"
          >
            <thead className="bg-zinc-100 text-zinc-800">
              <tr>
                {columns.map((column) => (
                  <th
                    key={column.key}
                    className={`px-4 py-4 font-semibold ${
                      column.align === "right" ? "text-right" : "text-left"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => handleSort(column.key)}
                      className={column.align === "right" ? "text-right" : "text-left"}
                    >
                      {column.label} {sortArrow(sort === column.key, dir)}
                    </button>
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {sortedRows.map((item, index) => (
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
                  <td className="border-t border-zinc-100 px-4 py-4 font-semibold text-zinc-800">
                    {formatRisk(item.riskDegeri)}
                  </td>
                  <td
                    className={`border-t border-zinc-100 px-4 py-4 font-semibold ${getPercentClass(
                      item.birAy
                    )}`}
                  >
                    {item.birAy === null ? "-" : `%${formatPercent(item.birAy)}`}
                  </td>
                  <td
                    className={`border-t border-zinc-100 px-4 py-4 font-semibold ${getPercentClass(
                      item.ucAy
                    )}`}
                  >
                    {item.ucAy === null ? "-" : `%${formatPercent(item.ucAy)}`}
                  </td>
                  <td
                    className={`border-t border-zinc-100 px-4 py-4 font-semibold ${getPercentClass(
                      item.altiAy
                    )}`}
                  >
                    {item.altiAy === null ? "-" : `%${formatPercent(item.altiAy)}`}
                  </td>
                  <td
                    className={`border-t border-zinc-100 px-4 py-4 font-semibold ${getPercentClass(
                      item.yilbasi
                    )}`}
                  >
                    {item.yilbasi === null ? "-" : `%${formatPercent(item.yilbasi)}`}
                  </td>
                  <td
                    className={`border-t border-zinc-100 px-4 py-4 font-semibold ${getPercentClass(
                      item.birYil
                    )}`}
                  >
                    {item.birYil === null ? "-" : `%${formatPercent(item.birYil)}`}
                  </td>
                  <td
                    className={`border-t border-zinc-100 px-4 py-4 font-semibold ${getPercentClass(
                      item.ucYil
                    )}`}
                  >
                    {item.ucYil === null ? "-" : `%${formatPercent(item.ucYil)}`}
                  </td>
                  <td
                    className={`border-t border-zinc-100 px-4 py-4 font-semibold ${getPercentClass(
                      item.besYil
                    )}`}
                  >
                    {item.besYil === null ? "-" : `%${formatPercent(item.besYil)}`}
                  </td>
                </tr>
              ))}

              {sortedRows.length === 0 && (
                <tr>
                  <td
                    colSpan={11}
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
            <div ref={fixedInnerRef} className="h-4 min-w-[1460px]" />
          </div>
        </div>
      </div>
    </>
  );
}