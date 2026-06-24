import Link from "next/link";
import type { NewsItem } from "@/lib/haberler";

export default function HaberKart({ item }: { item: NewsItem }) {
  const haberGorseli =
    item.image && item.image.trim() !== ""
      ? item.image
      : item.id
        ? `/haber${item.id}.png`
        : "/placeholder.png";

  return (
    <Link
      href={item.href}
      prefetch={false}
      aria-label={item.title}
      className="group flex overflow-hidden rounded-xl border border-slate-200 bg-white shadow-[0_1px_6px_rgba(15,23,42,0.05)] transition duration-300 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-[0_6px_24px_rgba(15,23,42,0.10)] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
    >
      <div className="relative aspect-[16/9] w-32 shrink-0 self-start overflow-hidden bg-slate-100 sm:w-40">
        <img
          src={haberGorseli}
          alt={item.alt || item.title}
          loading="lazy"
          decoding="async"
          fetchPriority="low"
          width={160}
          height={90}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
        />
      </div>

      <div className="flex min-w-0 flex-1 flex-col justify-between p-4">
        <div>
          <div className="mb-2 flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center rounded bg-blue-600 px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-white">
              Haber
            </span>
            {item.publishedAt && (
              <time
                dateTime={item.publishedAt}
                className="text-[11px] font-medium text-slate-400"
              >
                {new Date(item.publishedAt).toLocaleDateString("tr-TR", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </time>
            )}
          </div>

          <h2 className="line-clamp-2 text-sm font-semibold leading-snug text-slate-900 transition duration-200 group-hover:text-blue-700 sm:text-base sm:leading-snug">
            {item.title}
          </h2>
        </div>

        <div className="mt-3 flex items-center gap-1 text-xs font-semibold text-blue-600 transition duration-300 group-hover:gap-2">
          <span>Devamını oku</span>
          <span>→</span>
        </div>
      </div>
    </Link>
  );
}
