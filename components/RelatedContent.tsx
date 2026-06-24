import Link from "next/link";

export type RelatedContentItem = {
  title: string;
  href: string;
  description?: string;
  type?: string;
};

export default function RelatedContent({
  title,
  items,
  className = "",
}: {
  title: string;
  items: RelatedContentItem[];
  className?: string;
}) {
  if (items.length === 0) return null;

  return (
    <section className={`rounded-xl border border-slate-200 bg-slate-50 p-4 md:p-5 ${className}`}>
      <h2 className="text-sm font-semibold text-slate-700">{title}</h2>
      <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <Link
            key={`${item.href}-${item.title}`}
            href={item.href}
            prefetch={false}
            className="group flex min-h-0 flex-col rounded-lg border border-slate-200 bg-white px-3 py-3 transition hover:border-blue-200 hover:bg-blue-50"
          >
            {item.type && (
              <span className="mb-1 text-[11px] font-semibold uppercase tracking-wide text-slate-400">
                {item.type}
              </span>
            )}
            <span className="line-clamp-2 text-sm font-semibold leading-5 text-slate-800 group-hover:text-blue-700">
              {item.title}
            </span>
            {item.description && (
              <span className="mt-1 line-clamp-2 text-xs leading-5 text-slate-500">
                {item.description}
              </span>
            )}
          </Link>
        ))}
      </div>
    </section>
  );
}
