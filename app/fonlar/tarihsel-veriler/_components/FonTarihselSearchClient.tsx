"use client";

import { useSearchParams } from "next/navigation";
import FonTarihselTableClient from "./FonTarihselTableClient";

type CellValue = string | number | null;

export default function FonTarihselSearchClient({
  headers,
  rows,
}: {
  headers: string[];
  rows: CellValue[][];
}) {
  const searchParams = useSearchParams();
  const query = (searchParams.get("q") ?? "").toLocaleLowerCase("tr-TR").trim();
  const filtered = query
    ? rows.filter((row) =>
        row
          .map((cell) => String(cell ?? ""))
          .join(" ")
          .toLocaleLowerCase("tr-TR")
          .includes(query)
      )
    : rows;

  return (
    <>
      <section className="mb-6 rounded-2xl border border-zinc-200 bg-white p-4">
        <form action="/fonlar/tarihsel-veriler" method="get">
          <input
            type="text"
            name="q"
            defaultValue={searchParams.get("q") ?? ""}
            placeholder="Tabloda ara"
            className="w-full rounded-xl border border-zinc-300 px-4 py-3 text-sm text-zinc-900 outline-none placeholder:text-zinc-400 focus:border-zinc-500"
          />
        </form>
      </section>
      <FonTarihselTableClient headers={headers} rows={filtered} />
    </>
  );
}
