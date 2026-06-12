import Link from "next/link";
import { getAllNews } from "@/lib/haberler";

export default function HaberNavigasyon({ href }: { href: string }) {
  const haberler = getAllNews();
  const index = haberler.findIndex((item) => item.href === href);
  if (index === -1) return null;

  // Liste en yeniden en eskiye sıralı: bir sonraki haber = listede bir sonraki (daha eski) öğe.
  const sonraki = haberler[index + 1];
  const onceki = haberler[index - 1];

  if (!sonraki && !onceki) return null;

  return (
    <nav
      className="grid grid-cols-1 gap-3 sm:grid-cols-2"
      aria-label="Haberler arası gezinme"
    >
      {onceki ? (
        <Link
          href={onceki.href}
          prefetch={false}
          className="group flex flex-col rounded-xl border border-slate-200 bg-slate-50 p-4 transition hover:border-blue-200 hover:bg-blue-50"
        >
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
            ← Yeni Haber
          </span>
          <span className="mt-1 line-clamp-2 text-sm font-semibold text-slate-800 group-hover:text-blue-700">
            {onceki.title}
          </span>
        </Link>
      ) : (
        <div />
      )}

      {sonraki ? (
        <Link
          href={sonraki.href}
          prefetch={false}
          className="group flex flex-col rounded-xl border border-slate-200 bg-slate-50 p-4 text-right transition hover:border-blue-200 hover:bg-blue-50 sm:items-end"
        >
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
            Sonraki Haber →
          </span>
          <span className="mt-1 line-clamp-2 text-sm font-semibold text-slate-800 group-hover:text-blue-700">
            {sonraki.title}
          </span>
        </Link>
      ) : (
        <div />
      )}
    </nav>
  );
}
