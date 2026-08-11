"use client";

import { ArrowRight, Search, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import Link from "@/components/NoPrefetchLink";

export type FundSearchItem = {
  kod: string;
  ad: string;
  slug: string;
  yonetici: string;
};

function normalizeSearch(value: string) {
  return value
    .toLocaleLowerCase("tr-TR")
    .replace(/ı/g, "i")
    .replace(/ğ/g, "g")
    .replace(/ü/g, "u")
    .replace(/ş/g, "s")
    .replace(/ö/g, "o")
    .replace(/ç/g, "c")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

function matchScore(item: FundSearchItem, query: string) {
  const code = normalizeSearch(item.kod).replace(/\s/g, "");
  const compactQuery = query.replace(/\s/g, "");
  const name = normalizeSearch(item.ad);
  const manager = normalizeSearch(item.yonetici);

  if (code === compactQuery) return 0;
  if (code.startsWith(compactQuery)) return 1;
  if (code.includes(compactQuery)) return 2;
  if (name.startsWith(query)) return 3;
  if (name.split(" ").some((word) => word.startsWith(query))) return 4;
  if (name.includes(query)) return 5;
  if (manager.includes(query)) return 6;
  return null;
}

export default function FundQuickSearch({ funds }: { funds: FundSearchItem[] }) {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const normalizedQuery = normalizeSearch(query);

  const results = useMemo(() => {
    if (!normalizedQuery) return [];

    return funds
      .map((fund) => ({ fund, score: matchScore(fund, normalizedQuery) }))
      .filter(
        (result): result is { fund: FundSearchItem; score: number } =>
          result.score !== null
      )
      .sort(
        (a, b) =>
          a.score - b.score ||
          a.fund.kod.localeCompare(b.fund.kod, "tr-TR")
      )
      .slice(0, 8);
  }, [funds, normalizedQuery]);

  const selectedIndex = Math.min(activeIndex, Math.max(0, results.length - 1));

  function goToFund(index = selectedIndex) {
    const selected = results[index];
    if (!selected) return;
    setOpen(false);
    router.push(`/fonlar/${selected.fund.slug}`);
  }

  return (
    <section className="relative z-20 mb-7 max-w-3xl" aria-labelledby="fund-search-title">
      <h2 id="fund-search-title" className="mb-2 text-sm font-bold text-slate-800">
        Fon Ara
      </h2>
      <form
        className="relative"
        onSubmit={(event) => {
          event.preventDefault();
          goToFund();
        }}
        onFocus={() => setOpen(true)}
        onBlur={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false);
        }}
      >
        <Search
          className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400"
          aria-hidden="true"
        />
        <input
          type="text"
          inputMode="search"
          enterKeyHint="search"
          value={query}
          onChange={(event) => {
            setQuery(event.target.value);
            setActiveIndex(0);
            setOpen(true);
          }}
          onKeyDown={(event) => {
            if (event.key === "ArrowDown" && results.length > 0) {
              event.preventDefault();
              setOpen(true);
              setActiveIndex((current) => (current + 1) % results.length);
            } else if (event.key === "ArrowUp" && results.length > 0) {
              event.preventDefault();
              setOpen(true);
              setActiveIndex(
                (current) => (current - 1 + results.length) % results.length
              );
            } else if (event.key === "Enter" && results.length > 0) {
              event.preventDefault();
              goToFund();
            } else if (event.key === "Escape") {
              setOpen(false);
            }
          }}
          placeholder="Fon kodu veya fon adı ara"
          aria-label="Fon kodu veya fon adı ara"
          role="combobox"
          aria-autocomplete="list"
          aria-expanded={open && Boolean(normalizedQuery)}
          aria-controls="fund-search-results"
          aria-activedescendant={
            open && results[selectedIndex]
              ? `fund-search-result-${results[selectedIndex].fund.slug}`
              : undefined
          }
          autoComplete="off"
          className="h-13 w-full rounded-lg border border-slate-300 bg-white pl-12 pr-12 text-sm font-medium text-slate-900 shadow-sm outline-none transition placeholder:font-normal placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 md:text-base"
        />
        {query ? (
          <button
            type="button"
            onClick={() => {
              setQuery("");
              setActiveIndex(0);
            }}
            className="absolute right-3 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-md text-slate-400 transition hover:bg-slate-100 hover:text-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            aria-label="Fon aramasını temizle"
            title="Aramayı temizle"
          >
            <X className="h-4 w-4" aria-hidden="true" />
          </button>
        ) : null}

        {open && normalizedQuery ? (
          <div
            id="fund-search-results"
            role="listbox"
            aria-label="Fon arama sonuçları"
            className="absolute left-0 right-0 top-[calc(100%+0.5rem)] max-h-[26rem] overflow-y-auto rounded-lg border border-slate-200 bg-white p-1.5 shadow-xl"
          >
            {results.length > 0 ? (
              results.map(({ fund }, index) => {
                const selected = index === selectedIndex;

                return (
                  <Link
                    id={`fund-search-result-${fund.slug}`}
                    key={fund.slug}
                    href={`/fonlar/${fund.slug}`}
                    prefetch={false}
                    role="option"
                    aria-selected={selected}
                    onMouseEnter={() => setActiveIndex(index)}
                    onClick={() => setOpen(false)}
                    className={`grid grid-cols-[3.75rem_minmax(0,1fr)_1.5rem] items-center gap-3 rounded-md px-3 py-2.5 outline-none transition ${
                      selected
                        ? "bg-blue-50 text-blue-950"
                        : "text-slate-800 hover:bg-slate-50"
                    }`}
                  >
                    <span className="rounded-md bg-slate-100 px-2 py-1 text-center text-xs font-bold text-slate-800">
                      {fund.kod}
                    </span>
                    <span className="min-w-0">
                      <span className="block truncate text-sm font-semibold">
                        {fund.ad}
                      </span>
                      <span className="block truncate text-xs text-slate-500">
                        {fund.yonetici}
                      </span>
                    </span>
                    <ArrowRight
                      className={`h-4 w-4 transition ${
                        selected ? "translate-x-0.5 text-blue-600" : "text-slate-300"
                      }`}
                      aria-hidden="true"
                    />
                  </Link>
                );
              })
            ) : (
              <p className="px-4 py-6 text-center text-sm text-slate-500">
                Aramanıza uygun fon bulunamadı.
              </p>
            )}
          </div>
        ) : null}
      </form>
    </section>
  );
}
