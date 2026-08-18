"use client";

import { useSearchParams } from "next/navigation";
import FonGetiriTableClient, { type FonRow } from "./FonGetiriTableClient";

export default function FonGetiriSearchClient({ rows }: { rows: FonRow[] }) {
  const searchParams = useSearchParams();
  const query = (searchParams.get("q") ?? "").toLocaleLowerCase("tr-TR").trim();
  const filtered = query
    ? rows.filter((row) =>
        `${row.kod} ${row.ad} ${row.kategori}`
          .toLocaleLowerCase("tr-TR")
          .includes(query)
      )
    : rows;

  return (
    <>
      <section className="mb-6 rounded-2xl border border-zinc-200 bg-white p-4">
        <form action="/fonlar/getiri" method="get">
          <input
            type="text"
            name="q"
            defaultValue={searchParams.get("q") ?? ""}
            placeholder="Fon kodu, fon adı veya kategori ara"
            className="w-full rounded-xl border border-zinc-300 px-4 py-3 text-sm text-zinc-900 outline-none placeholder:text-zinc-400 focus:border-zinc-500"
          />
        </form>
      </section>
      <FonGetiriTableClient rows={filtered} />
    </>
  );
}
