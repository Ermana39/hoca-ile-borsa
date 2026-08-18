"use client";

import { useSearchParams } from "next/navigation";
import Link from "@/components/NoPrefetchLink";
import { ManagerTable, type ManagerTableItem } from "../_components/FonUi";

function normalizeSearch(value: string) {
  return value
    .toLocaleLowerCase("tr-TR")
    .replace(/ı/g, "i")
    .replace(/ğ/g, "g")
    .replace(/ü/g, "u")
    .replace(/ş/g, "s")
    .replace(/ö/g, "o")
    .replace(/ç/g, "c")
    .trim();
}

export default function ManagerSearchClient({ managers }: { managers: ManagerTableItem[] }) {
  const searchParams = useSearchParams();
  const query = normalizeSearch(searchParams.get("q") ?? "");
  const filtered = query
    ? managers.filter((manager) => normalizeSearch(manager.yonetici).includes(query))
    : managers;

  return (
    <>
      <form action="/fonlar/yoneticiler" className="mb-5 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
        <div className="flex flex-col gap-2 md:flex-row">
          <input
            name="q"
            defaultValue={searchParams.get("q") ?? ""}
            placeholder="Yönetici / kurucu ara"
            className="w-full rounded-xl border border-slate-200 bg-white px-3 py-3 text-sm text-slate-900 outline-none focus:border-blue-400"
          />
          <button type="submit" className="rounded-xl bg-blue-700 px-5 py-2 text-sm font-bold text-white hover:bg-blue-800">Ara</button>
          <Link href="/fonlar/yoneticiler" className="rounded-xl border border-slate-200 bg-white px-5 py-2 text-center text-sm font-bold text-slate-700 hover:bg-slate-50">Temizle</Link>
        </div>
      </form>
      <ManagerTable managers={filtered} />
    </>
  );
}
