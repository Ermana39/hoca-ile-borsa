"use client";

import Link from "@/components/NoPrefetchLink";
import { useEffect, useMemo, useRef, useState } from "react";

export type FonSatiri = {
  sembol: string | null;
  sayfasiVarMi?: boolean;
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

type CellValue = string | number | null;

export type FonTableRow = [
  string | null,
  boolean,
  CellValue,
  CellValue,
  CellValue,
  CellValue,
  CellValue,
  CellValue,
  CellValue,
  CellValue,
  CellValue,
  CellValue,
  CellValue,
  CellValue,
  CellValue,
];

type ColumnKey = keyof FonSatiri;
type SortDir = "asc" | "desc";
const PAGE_SIZE = 50;

const columns: {
  key: ColumnKey;
  dataIndex: number;
  label: string;
  align?: "left" | "right";
  width: string;
}[] = [
  { key: "sembol", dataIndex: 0, label: "Sembol", align: "left", width: "min-w-[120px]" },
  { key: "degisim", dataIndex: 2, label: "Değişim", align: "right", width: "min-w-[130px]" },
  { key: "sonToplamYuzde", dataIndex: 3, label: "Son Toplam %", align: "right", width: "min-w-[150px]" },
  { key: "ilkToplamYuzde", dataIndex: 4, label: "İlk Toplam %", align: "right", width: "min-w-[150px]" },
  { key: "sonToplamTakasTl", dataIndex: 5, label: "Son Toplam Takas TL", align: "right", width: "min-w-[190px]" },
  { key: "ilkToplamTakasTl", dataIndex: 6, label: "İlk Toplam Takas TL", align: "right", width: "min-w-[190px]" },
  { key: "takasTlSonEmeklilikFon", dataIndex: 7, label: "Son Emeklilik Fon Takas TL", align: "right", width: "min-w-[230px]" },
  { key: "yuzdeSonEmeklilikFon", dataIndex: 8, label: "Son Emeklilik Fon %", align: "right", width: "min-w-[190px]" },
  { key: "takasTlIlkEmeklilikFon", dataIndex: 9, label: "İlk Emeklilik Fon Takas TL", align: "right", width: "min-w-[230px]" },
  { key: "yuzdeIlkEmeklilikFon", dataIndex: 10, label: "İlk Emeklilik Fon %", align: "right", width: "min-w-[190px]" },
  { key: "takasTlSonYatirimFon", dataIndex: 11, label: "Son Yatırım Fon Takas TL", align: "right", width: "min-w-[220px]" },
  { key: "yuzdeSonYatirimFon", dataIndex: 12, label: "Son Yatırım Fon %", align: "right", width: "min-w-[180px]" },
  { key: "takasTlIlkYatirimFon", dataIndex: 13, label: "İlk Yatırım Fon Takas TL", align: "right", width: "min-w-[220px]" },
  { key: "yuzdeIlkYatirimFon", dataIndex: 14, label: "İlk Yatırım Fon %", align: "right", width: "min-w-[180px]" },
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

function hucreDegeri(row: FonTableRow, key: ColumnKey, dataIndex: number) {
  const value = row[dataIndex];

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

export default function FonTercihTableClient({ rows }: { rows: FonTableRow[] }) {
  const [sort, setSort] = useState<ColumnKey>("sembol");
  const [dir, setDir] = useState<SortDir>("asc");
  const [page, setPage] = useState(1);

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
    const sortColumn = columns.find((column) => column.key === sort);
    if (!sortColumn) return rows;

    return [...rows].sort((a, b) => {
      const aValue = a[sortColumn.dataIndex];
      const bValue = b[sortColumn.dataIndex];

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

  const totalPages = Math.max(1, Math.ceil(sortedRows.length / PAGE_SIZE));
  const activePage = Math.min(page, totalPages);
  const visibleRows = useMemo(() => {
    const start = (activePage - 1) * PAGE_SIZE;
    return sortedRows.slice(start, start + PAGE_SIZE);
  }, [activePage, sortedRows]);

  const handleSort = (column: ColumnKey) => {
    setPage(1);
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
              {visibleRows.length > 0 ? (
                visibleRows.map((row, index) => {
                  const absoluteIndex = (activePage - 1) * PAGE_SIZE + index;
                  const sembol = typeof row[0] === "string" ? row[0] : null;

                  return (
                  <tr
                    key={`${sembol}-${absoluteIndex}`}
                    className={absoluteIndex % 2 === 0 ? "bg-white" : "bg-sky-50/60"}
                  >
                    {columns.map((column) => (
                      <td
                        key={`${sembol}-${column.key}-${absoluteIndex}`}
                        className={`${column.width} border-b border-zinc-100 px-4 py-3 text-zinc-700 ${
                          column.align === "right" ? "text-right" : "text-left"
                        } ${
                          column.key === "sembol"
                            ? "font-semibold text-zinc-900"
                            : ""
                        }`}
                      >
                        {column.key === "sembol" && row[1] && sembol ? (
                          <Link
                            href={`/hisse/${sembol.toLowerCase()}`}
                            prefetch={false}
                            className="hover:text-blue-700 hover:underline"
                          >
                            {hucreDegeri(row, column.key, column.dataIndex)}
                          </Link>
                        ) : (
                          hucreDegeri(row, column.key, column.dataIndex)
                        )}
                      </td>
                    ))}
                  </tr>
                  );
                })
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

      {totalPages > 1 && (
        <div className="mt-4 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm">
          <span className="font-medium text-zinc-600">
            {Math.min((activePage - 1) * PAGE_SIZE + 1, sortedRows.length)}-
            {Math.min(activePage * PAGE_SIZE, sortedRows.length)} / {sortedRows.length} hisse
          </span>
          <div className="flex items-center gap-2">
            <button
              type="button"
              disabled={activePage === 1}
              onClick={() => setPage((current) => Math.max(1, current - 1))}
              className="rounded-lg border border-zinc-300 bg-white px-3 py-2 font-semibold text-zinc-700 disabled:cursor-not-allowed disabled:opacity-40"
            >
              Önceki
            </button>
            <span className="min-w-20 text-center font-semibold text-zinc-700">
              {activePage} / {totalPages}
            </span>
            <button
              type="button"
              disabled={activePage === totalPages}
              onClick={() =>
                setPage((current) => Math.min(totalPages, current + 1))
              }
              className="rounded-lg border border-zinc-300 bg-white px-3 py-2 font-semibold text-zinc-700 disabled:cursor-not-allowed disabled:opacity-40"
            >
              Sonraki
            </button>
          </div>
        </div>
      )}

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
