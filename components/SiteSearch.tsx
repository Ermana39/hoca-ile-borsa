"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import type {
  SiteSearchItem,
  SiteSearchItemType,
  SiteSearchPayload,
} from "@/lib/site-search-types";

const MIN_QUERY_LENGTH = 2;
const MAX_RESULTS_PER_TYPE = 4;
const TYPE_ORDER: SiteSearchItemType[] = [
  "sirket",
  "haber",
  "halka-arz",
  "rehber",
];

const TYPE_LABELS: Record<SiteSearchItemType, string> = {
  sirket: "Şirketler",
  haber: "Haberler",
  "halka-arz": "Halka Arzlar",
  rehber: "Rehberler",
};

const TYPE_STYLES: Record<SiteSearchItemType, string> = {
  sirket: "bg-blue-50 text-blue-700 ring-blue-200",
  haber: "bg-amber-50 text-amber-700 ring-amber-200",
  "halka-arz": "bg-violet-50 text-violet-700 ring-violet-200",
  rehber: "bg-emerald-50 text-emerald-700 ring-emerald-200",
};

const QUICK_LINKS = [
  { label: "Şirketler", href: "/hisseler", type: "sirket" as const },
  { label: "Haberler", href: "/haberler", type: "haber" as const },
  { label: "Halka Arz", href: "/halka-arz", type: "halka-arz" as const },
  { label: "Rehberler", href: "/rehberler", type: "rehber" as const },
];

const DATE_FORMATTER = new Intl.DateTimeFormat("tr-TR", {
  day: "numeric",
  month: "short",
  year: "numeric",
});

type IndexedItem = SiteSearchItem & {
  normalizedTitle: string;
  normalizedCode: string;
  normalizedText: string;
  sourceOrder: number;
};

type SearchMatch = {
  item: IndexedItem;
  score: number;
};

type SearchGroup = {
  type: SiteSearchItemType;
  items: SearchMatch[];
};

function normalizeSearchText(value: string): string {
  return value
    .toLocaleLowerCase("tr-TR")
    .replaceAll("ı", "i")
    .replaceAll("ğ", "g")
    .replaceAll("ü", "u")
    .replaceAll("ş", "s")
    .replaceAll("ö", "o")
    .replaceAll("ç", "c")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

function indexItem(item: SiteSearchItem, sourceOrder: number): IndexedItem {
  const normalizedTitle = normalizeSearchText(item.title);
  const normalizedCode = normalizeSearchText(item.code || "");
  const normalizedText = normalizeSearchText(
    [
      item.title,
      item.code,
      item.eyebrow,
      item.description,
      ...(item.keywords ?? []),
    ]
      .filter(Boolean)
      .join(" ")
  );

  return {
    ...item,
    normalizedTitle,
    normalizedCode,
    normalizedText,
    sourceOrder,
  };
}

function matchScore(item: IndexedItem, query: string): number | null {
  const tokens = query.split(" ").filter(Boolean);
  if (tokens.length === 0) return null;
  if (!tokens.every((token) => item.normalizedText.includes(token))) return null;

  let score = 0;

  if (item.normalizedCode === query) score += 1_000;
  else if (item.normalizedCode.startsWith(query)) score += 500;

  if (item.normalizedTitle === query) score += 800;
  else if (item.normalizedTitle.startsWith(query)) score += 360;
  else if (item.normalizedTitle.includes(query)) score += 240;

  if (item.normalizedText.includes(query)) score += 120;

  const titleWords = item.normalizedTitle.split(" ");
  for (const token of tokens) {
    if (titleWords.some((word) => word === token)) score += 80;
    else if (titleWords.some((word) => word.startsWith(token))) score += 45;
    else score += 15;
  }

  return score;
}

function publishedTimestamp(value?: string): number {
  if (!value) return 0;
  const timestamp = new Date(value).getTime();
  return Number.isNaN(timestamp) ? 0 : timestamp;
}

function formatPublishedAt(value?: string): string | null {
  const timestamp = publishedTimestamp(value);
  return timestamp ? DATE_FORMATTER.format(timestamp) : null;
}

function SearchTypeIcon({ type }: { type: SiteSearchItemType }) {
  const className = "h-5 w-5";

  if (type === "sirket") {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path d="M4 21h16M6 21V7l6-4 6 4v14M9 10h1m4 0h1m-6 4h1m4 0h1m-6 4h6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (type === "haber") {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path d="M5 4h11a2 2 0 0 1 2 2v14H7a2 2 0 0 1-2-2V4Z" strokeLinejoin="round" />
        <path d="M18 8h2v10a2 2 0 0 1-2 2M8 8h7M8 12h7M8 16h4" strokeLinecap="round" />
      </svg>
    );
  }

  if (type === "halka-arz") {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path d="M4 20h16M6 17l4-4 3 3 5-7" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14 9h4v4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H11v17H6.5A2.5 2.5 0 0 0 4 22V5.5Zm16 0A2.5 2.5 0 0 0 17.5 3H13v17h4.5A2.5 2.5 0 0 1 20 22V5.5Z" strokeLinejoin="round" />
    </svg>
  );
}

export default function SiteSearch({ onOpen }: { onOpen?: () => void }) {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const requestRef = useRef<Promise<SiteSearchPayload> | null>(null);
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [items, setItems] = useState<SiteSearchItem[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const loadIndex = useCallback(async () => {
    if (items || requestRef.current) return;

    setLoading(true);
    setError(false);

    const request = fetch("/api/arama", { cache: "force-cache" }).then(
      async (response) => {
        if (!response.ok) throw new Error("Arama verisi yüklenemedi.");
        const payload = (await response.json()) as SiteSearchPayload;
        if (payload.version !== 1 || !Array.isArray(payload.items)) {
          throw new Error("Arama verisi geçersiz.");
        }
        return payload;
      }
    );

    requestRef.current = request;

    try {
      const payload = await request;
      setItems(payload.items);
    } catch {
      setError(true);
    } finally {
      requestRef.current = null;
      setLoading(false);
    }
  }, [items]);

  const closeSearch = useCallback(() => {
    setOpen(false);
    setQuery("");
    setActiveIndex(0);
  }, []);

  const openSearch = useCallback(() => {
    onOpen?.();
    setOpen(true);
    void loadIndex();
  }, [loadIndex, onOpen]);

  useEffect(() => {
    function handleGlobalKeyDown(event: KeyboardEvent) {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        openSearch();
        return;
      }

      if (event.key === "Escape" && open) closeSearch();
    }

    document.addEventListener("keydown", handleGlobalKeyDown);
    return () => document.removeEventListener("keydown", handleGlobalKeyDown);
  }, [closeSearch, open, openSearch]);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const frame = requestAnimationFrame(() => inputRef.current?.focus());

    return () => {
      cancelAnimationFrame(frame);
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  const indexedItems = useMemo(
    () => (items ?? []).map((item, index) => indexItem(item, index)),
    [items]
  );
  const normalizedQuery = useMemo(() => normalizeSearchText(query), [query]);

  const groups = useMemo<SearchGroup[]>(() => {
    if (normalizedQuery.length < MIN_QUERY_LENGTH) return [];

    const matches = indexedItems
      .map((item) => {
        const score = matchScore(item, normalizedQuery);
        return score === null ? null : { item, score };
      })
      .filter((match): match is SearchMatch => match !== null)
      .sort(
        (a, b) =>
          b.score - a.score ||
          publishedTimestamp(b.item.publishedAt) -
            publishedTimestamp(a.item.publishedAt) ||
          a.item.sourceOrder - b.item.sourceOrder
      );

    return TYPE_ORDER.map((type) => ({
      type,
      items: matches
        .filter((match) => match.item.type === type)
        .slice(0, MAX_RESULTS_PER_TYPE),
    })).filter((group) => group.items.length > 0);
  }, [indexedItems, normalizedQuery]);

  const flatResults = useMemo(
    () => groups.flatMap((group) => group.items),
    [groups]
  );
  const resultIndex = useMemo(
    () => new Map(flatResults.map((result, index) => [result.item.id, index])),
    [flatResults]
  );
  const selectedIndex = Math.min(
    activeIndex,
    Math.max(0, flatResults.length - 1)
  );

  function handleInputKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (flatResults.length === 0) return;

    if (event.key === "ArrowDown") {
      event.preventDefault();
      setActiveIndex((current) => (current + 1) % flatResults.length);
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setActiveIndex(
        (current) => (current - 1 + flatResults.length) % flatResults.length
      );
    } else if (event.key === "Enter") {
      event.preventDefault();
      const selected = flatResults[selectedIndex];
      if (!selected) return;
      closeSearch();
      router.push(selected.item.href);
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={openSearch}
        className="flex h-9 shrink-0 items-center justify-center gap-2 rounded-lg border border-slate-600/70 bg-slate-800 px-2.5 text-sm font-semibold text-slate-100 shadow-sm transition hover:border-blue-500/70 hover:bg-blue-600 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
        aria-label="Site genelinde ara"
        aria-keyshortcuts="Control+K Meta+K"
      >
        <svg className="h-4.5 w-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <circle cx="11" cy="11" r="7" />
          <path d="m20 20-3.5-3.5" strokeLinecap="round" />
        </svg>
        <span>Ara</span>
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[70] bg-slate-950/75 p-2 backdrop-blur-sm sm:p-6"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) closeSearch();
          }}
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="site-search-title"
            className="mx-auto flex max-h-[calc(100dvh-1rem)] w-full max-w-3xl flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl sm:mt-8 sm:max-h-[calc(100dvh-5rem)]"
          >
            <div className="border-b border-slate-200 bg-gradient-to-r from-slate-50 to-blue-50/60 p-3 sm:p-4">
              <div className="mb-3 flex items-center justify-between gap-3 px-1">
                <div>
                  <h2 id="site-search-title" className="text-sm font-bold text-slate-900 sm:text-base">
                    Site Genelinde Ara
                  </h2>
                  <p className="mt-0.5 text-xs text-slate-500">
                    Şirket, haber, halka arz ve rehberleri birlikte arayın.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={closeSearch}
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-500 transition hover:border-slate-300 hover:bg-slate-100 hover:text-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
                  aria-label="Aramayı kapat"
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M18 6 6 18M6 6l12 12" strokeLinecap="round" />
                  </svg>
                </button>
              </div>

              <div className="relative">
                <svg className="pointer-events-none absolute left-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <circle cx="11" cy="11" r="7" />
                  <path d="m20 20-3.5-3.5" strokeLinecap="round" />
                </svg>
                <input
                  ref={inputRef}
                  type="search"
                  value={query}
                  onChange={(event) => {
                    setQuery(event.target.value);
                    setActiveIndex(0);
                  }}
                  onKeyDown={handleInputKeyDown}
                  placeholder="Örn. ASTOR, bedelsiz, halka arz kaç lot"
                  className="h-12 w-full rounded-xl border border-slate-300 bg-white pl-11 pr-10 text-sm font-medium text-slate-900 outline-none transition placeholder:font-normal placeholder:text-slate-400 focus:border-blue-400 focus:ring-4 focus:ring-blue-100 sm:text-base"
                  role="combobox"
                  aria-expanded={flatResults.length > 0}
                  aria-controls="site-search-results"
                  aria-activedescendant={
                    flatResults[selectedIndex]
                      ? `site-search-result-${flatResults[selectedIndex].item.id.replace(/[^a-z0-9-]/gi, "-")}`
                      : undefined
                  }
                  autoComplete="off"
                />
                {query && (
                  <button
                    type="button"
                    onClick={() => {
                      setQuery("");
                      setActiveIndex(0);
                      inputRef.current?.focus();
                    }}
                    className="absolute right-3 top-1/2 -translate-y-1/2 rounded p-1 text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
                    aria-label="Arama metnini temizle"
                  >
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <path d="M18 6 6 18M6 6l12 12" strokeLinecap="round" />
                    </svg>
                  </button>
                )}
              </div>
            </div>

            <div id="site-search-results" className="min-h-0 flex-1 overflow-y-auto p-3 sm:p-4" aria-live="polite">
              {normalizedQuery.length < MIN_QUERY_LENGTH ? (
                <div className="py-2 sm:py-4">
                  <p className="px-1 text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Hızlı Bağlantılar
                  </p>
                  <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
                    {QUICK_LINKS.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        prefetch={false}
                        onClick={closeSearch}
                        className="group flex flex-col items-center justify-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-4 text-center transition hover:border-blue-200 hover:bg-blue-50/70"
                      >
                        <span className={`flex h-9 w-9 items-center justify-center rounded-lg ring-1 ${TYPE_STYLES[link.type]}`}>
                          <SearchTypeIcon type={link.type} />
                        </span>
                        <span className="text-xs font-bold text-slate-700 group-hover:text-blue-700">
                          {link.label}
                        </span>
                      </Link>
                    ))}
                  </div>
                  <p className="mt-5 text-center text-xs leading-5 text-slate-500">
                    En az iki karakter yazın. Hisse kodları ve tam başlık eşleşmeleri önce gösterilir.
                  </p>
                </div>
              ) : loading ? (
                <div className="flex min-h-52 flex-col items-center justify-center text-center">
                  <span className="h-8 w-8 animate-spin rounded-full border-2 border-slate-200 border-t-blue-600" aria-hidden="true" />
                  <p className="mt-3 text-sm font-medium text-slate-600">Arama hazırlanıyor...</p>
                </div>
              ) : error ? (
                <div className="flex min-h-52 flex-col items-center justify-center text-center">
                  <p className="text-sm font-semibold text-slate-800">Arama verisi yüklenemedi.</p>
                  <button
                    type="button"
                    onClick={() => void loadIndex()}
                    className="mt-3 rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700"
                  >
                    Yeniden Dene
                  </button>
                </div>
              ) : groups.length === 0 ? (
                <div className="flex min-h-52 flex-col items-center justify-center px-5 text-center">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-100 text-slate-400">
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <circle cx="11" cy="11" r="7" />
                      <path d="m20 20-3.5-3.5" strokeLinecap="round" />
                    </svg>
                  </span>
                  <p className="mt-3 text-sm font-semibold text-slate-800">“{query.trim()}” için sonuç bulunamadı.</p>
                  <p className="mt-1 text-xs leading-5 text-slate-500">Hisse kodunu veya daha kısa bir konu ifadesini deneyin.</p>
                </div>
              ) : (
                <div className="space-y-5" role="listbox" aria-label="Arama sonuçları">
                  {groups.map((group) => (
                    <section key={group.type} aria-labelledby={`site-search-group-${group.type}`}>
                      <div className="mb-2 flex items-center gap-2 px-1">
                        <h3 id={`site-search-group-${group.type}`} className="text-xs font-bold uppercase tracking-wider text-slate-500">
                          {TYPE_LABELS[group.type]}
                        </h3>
                        <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-bold text-slate-500">
                          {group.items.length}
                        </span>
                      </div>
                      <div className="space-y-1.5">
                        {group.items.map((match) => {
                          const index = resultIndex.get(match.item.id) ?? 0;
                          const selected = index === selectedIndex;
                          const date = formatPublishedAt(match.item.publishedAt);
                          const resultId = `site-search-result-${match.item.id.replace(/[^a-z0-9-]/gi, "-")}`;

                          return (
                            <Link
                              id={resultId}
                              key={match.item.id}
                              href={match.item.href}
                              prefetch={false}
                              role="option"
                              aria-selected={selected}
                              onMouseEnter={() => setActiveIndex(index)}
                              onClick={closeSearch}
                              className={`group flex items-start gap-3 rounded-xl border px-3 py-3 outline-none transition sm:px-4 ${
                                selected
                                  ? "border-blue-200 bg-blue-50 shadow-sm"
                                  : "border-transparent hover:border-slate-200 hover:bg-slate-50"
                              }`}
                            >
                              <span className={`mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ring-1 ${TYPE_STYLES[match.item.type]}`}>
                                <SearchTypeIcon type={match.item.type} />
                              </span>
                              <span className="min-w-0 flex-1">
                                <span className="flex flex-wrap items-center gap-x-2 gap-y-1">
                                  <span className="text-[11px] font-bold uppercase tracking-wide text-blue-700">
                                    {match.item.code || match.item.eyebrow}
                                  </span>
                                  {match.item.code && match.item.eyebrow !== match.item.code && (
                                    <span className="text-[11px] font-medium text-slate-400">{match.item.eyebrow}</span>
                                  )}
                                  {date && <span className="text-[11px] text-slate-400">{date}</span>}
                                </span>
                                <span className="mt-0.5 line-clamp-2 block text-sm font-bold leading-5 text-slate-900 group-hover:text-blue-700">
                                  {match.item.title}
                                </span>
                                {match.item.description && (
                                  <span className="mt-1 line-clamp-1 block text-xs leading-5 text-slate-500">
                                    {match.item.description}
                                  </span>
                                )}
                              </span>
                              <svg className="mt-2 h-4 w-4 shrink-0 text-slate-300 transition group-hover:translate-x-0.5 group-hover:text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                                <path d="m9 18 6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            </Link>
                          );
                        })}
                      </div>
                    </section>
                  ))}
                </div>
              )}
            </div>

            <div className="hidden items-center justify-between border-t border-slate-200 bg-slate-50 px-4 py-2.5 text-[11px] text-slate-500 sm:flex">
              <span>Sonuçlar yeni sekme açmadan ilgili sayfaya götürür.</span>
              <span className="flex items-center gap-3">
                <span><kbd className="rounded border border-slate-300 bg-white px-1.5 py-0.5">↑↓</kbd> gezin</span>
                <span><kbd className="rounded border border-slate-300 bg-white px-1.5 py-0.5">Enter</kbd> aç</span>
                <span><kbd className="rounded border border-slate-300 bg-white px-1.5 py-0.5">Esc</kbd> kapat</span>
              </span>
            </div>
          </section>
        </div>
      )}
    </>
  );
}
