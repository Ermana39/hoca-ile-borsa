"use client";

import { useEffect, useMemo, useRef, useState } from "react";

export type FonSatiri = {
  sembol: string | null;
  degisim: string | number | null;
  sonToplamYuzde: string | number | null;
  ilkToplamYuzde: string | number | null;
  sonToplamTakasTl: string | number | null;
  ilkToplamTakasTl: string | number | null;
  takasTlSonEmeklilikFon: string | number | null;
  yuzdeSonEmeklilikFon: string | number | null;
  takasTlIlkEmeklilikFon: string | number | null;
  yuzdeIlkEmeklilikFon: string | number | null;
  takasTlSonYatirimFon: string | number | null;
  yuzdeSonYatirimFon: string | number | null;
  takasTlIlkYatirimFon: string | number | null;
  yuzdeIlkYatirimFon: string | number | null;
};

type ColumnKey = keyof FonSatiri;
type SortDir = "asc" | "desc";

const columns: {
  key: ColumnKey;
  label: string;
  align?: "left" | "right";
  width: string;
}[] = [
  { key: "sembol", label: "Sembol", align: "left", width: "min-w-[120px]" },
  { key: "degisim", label: "Değişim", align: "right", width: "min-w-[130px]" },
  { key: "sonToplamYuzde", label: "Son Toplam %", align: "right", width: "min-w-[150px]" },
  { key: "ilkToplamYuzde", label: "İlk Toplam %", align: "right", width: "min-w-[150px]" },
  { key: "sonToplamTakasTl", label: "Son Toplam Takas TL", align: "right", width: "min-w-[190px]" },
  { key: "ilkToplamTakasTl", label: "İlk Toplam Takas TL", align: "right", width: "min-w-[190px]" },
  { key: "takasTlSonEmeklilikFon", label: "Son Emeklilik Fon Takas TL", align: "right", width: "min-w-[230px]" },
  { key: "yuzdeSonEmeklilikFon", label: "Son Emeklilik Fon %", align: "right", width: "min-w-[190px]" },
  { key: "takasTlIlkEmeklilikFon", label: "İlk Emeklilik Fon Takas TL", align: "right", width: "min-w-[230px]" },
  { key: "yuzdeIlkEmeklilikFon", label: "İlk Emeklilik Fon %", align: "right", width: "min-w-[190px]" },
  { key: "takasTlSonYatirimFon", label: "Son Yatırım Fon Takas TL", align: "right", width: "min-w-[220px]" },
  { key: "yuzdeSonYatirimFon", label: "Son Yatırım Fon %", align: "right", width: "min-w-[180px]" },
  { key: "takasTlIlkYatirimFon", label: "İlk Yatırım Fon Takas TL", align: "right", width: "min-w-[220px]" },
  { key: "yuzdeIlkYatirimFon", label: "İlk Yatırım Fon %", align: "right", width: "min-w-[180px]" },
];

function temizMetin(deger: unknown) {
  if (deger === null || deger === undefined) return "";
  return String(deger).trim();
}

function parseNumber(deger: unknown) {
  if (typeof deger === "number") return deger;

  const metin = temizMetin(deger);
  if (!metin) return 0;

  const normalize = metin
    .replace("%", "")
    .replace(/\s/g, "")
    .replace(/\./g, "")
    .replace(",", ".");

  const sayi = Number(normalize);
  return Number.isNaN(sayi) ? 0 : sayi;
}

function formatPercent(deger: unknown) {
  if (deger === null || deger === undefined || deger === "") return "-";

  if (typeof deger === "string" && deger.includes("%")) {
    return deger.trim();
  }

  const sayi = parseNumber(deger);

  return `${new Intl.NumberFormat("tr-TR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(sayi)} %`;
}

function formatTl(deger: unknown) {
  if (deger === null || deger === undefined || deger === "") return "-";

  const sayi = parseNumber(deger);

  return new Intl.NumberFormat("tr-TR", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(sayi);
}

function hucreDegeri(row: FonSatiri, key: ColumnKey) {
  const value = row[key];

  if (key === "sembol") return temizMetin(value) || "-";

  if (
    key === "degisim" ||
    key === "sonToplamYuzde" ||
    key === "ilkToplamYuzde" ||
    key === "yuzdeSonEmeklilikFon" ||
    key === "yuzdeIlkEmeklilikFon" ||
    key === "yuzdeSonYatirimFon" ||
    key === "yuzdeIlkYatirimFon"
  ) {
    return formatPercent(value);
  }

  return formatTl(value);
}

function sortArrow(active: boolean, direction: SortDir) {
  if (!active) return "↕";
  return direction === "asc" ? "↑" : "↓";
}

export default function FonTercihTableClient({ rows }: { rows: FonSatiri[] }) {
  const [sort, setSort] = useState<ColumnKey>("sembol");
  const [dir, setDir] = useState<SortDir>("asc");

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
  }, [rows]);

  const sortedRows = useMemo(() => {
    return [...rows].sort((a, b) => {
      const aValue = a[sort];
      const bValue = b[sort];

      if (sort === "sembol") {
        return dir === "asc"
          ? temizMetin(aValue).localeCompare(temizMetin(bValue), "tr")
          : temizMetin(bValue).localeCompare(temizMetin(aValue), "tr");
      }

      const aNum = parseNumber(aValue);
      const bNum = parseNumber(bValue);

      return dir === "asc" ? aNum - bNum : bNum - aNum;
    });
  }, [rows, sort, dir]);

  const handleSort = (column: ColumnKey) => {
    if (sort === column) {
      setDir((prev) => (prev === "asc" ? "desc" : "asc"));
      return;
    }

    setSort(column);
    setDir(column === "sembol" ? "asc" : "desc");
  };

  return (
    <>
      <div className="rounded-2xl border border-zinc-200 bg-white">
        <div
          ref={tableScrollRef}
          className="overflow-x-auto rounded-2xl [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          <table
            ref={tableRef}
            className="min-w-[2600px] border-collapse text-sm whitespace-nowrap"
          >
            <thead className="bg-zinc-100 text-zinc-800">
              <tr>
                {columns.map((column) => (
                  <th
                    key={column.key}
                    className={`${column.width} sticky top-0 z-30 border-b border-zinc-200 bg-zinc-100 px-4 py-3 font-semibold ${
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
              {sortedRows.length > 0 ? (
                sortedRows.map((row, index) => (
                  <tr
                    key={`${row.sembol}-${index}`}
                    className={index % 2 === 0 ? "bg-white" : "bg-sky-50/60"}
                  >
                    {columns.map((column) => (
                      <td
                        key={`${row.sembol}-${column.key}-${index}`}
                        className={`${column.width} border-b border-zinc-100 px-4 py-3 text-zinc-700 ${
                          column.align === "right" ? "text-right" : "text-left"
                        } ${
                          column.key === "sembol"
                            ? "font-semibold text-zinc-900"
                            : ""
                        }`}
                      >
                        {hucreDegeri(row, column.key)}
                      </td>
                    ))}
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={columns.length}
                    className="px-4 py-8 text-center text-sm text-zinc-500"
                  >
                    Gösterilecek veri bulunamadı.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-zinc-200 bg-white/95 px-4 py-2 backdrop-blur">
        <div className="mx-auto max-w-[1600px]">
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