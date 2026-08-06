import Link from "@/components/NoPrefetchLink";
import { getAllNews } from "@/lib/haberler";

export default function HaberNavigasyon({
  href,
  className = "",
}: {
  href: string;
  className?: string;
}) {
  const haberler = getAllNews();
  const index = haberler.findIndex((item) => item.href === href);
  if (index === -1) return null;

  // Liste en yeniden en eskiye sıralı: önceki (listede bir önceki) = daha yeni haber,
  // sonraki (listede bir sonraki) = daha eski haber.
  const onceki = haberler[index - 1];
  const sonraki = haberler[index + 1];

  // İki taraf da yoksa hiç gösterme (boş alan bırakma).
  if (!onceki && !sonraki) return null;

  const tekTaraf = !onceki || !sonraki;

  return (
    <nav
      className={`grid grid-cols-1 gap-3 ${tekTaraf ? "" : "sm:grid-cols-2"} ${className}`}
      aria-label="Haberler arası gezinme"
    >
      {onceki && (
        <Link
          href={onceki.href}
          prefetch={false}
          title={`Önceki haber: ${onceki.title}`}
          className="group flex flex-col rounded-xl border border-slate-200 bg-slate-50 p-4 transition hover:border-blue-200 hover:bg-blue-50"
        >
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
            ← Önceki Haber
          </span>
          <span className="mt-1 line-clamp-2 text-sm font-semibold text-slate-800 group-hover:text-blue-700">
            {onceki.title}
          </span>
        </Link>
      )}

      {sonraki && (
        <Link
          href={sonraki.href}
          prefetch={false}
          title={`Sonraki haber: ${sonraki.title}`}
          className="group flex flex-col rounded-xl border border-slate-200 bg-slate-50 p-4 transition hover:border-blue-200 hover:bg-blue-50 sm:items-end sm:text-right"
        >
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
            Sonraki Haber →
          </span>
          <span className="mt-1 line-clamp-2 text-sm font-semibold text-slate-800 group-hover:text-blue-700">
            {sonraki.title}
          </span>
        </Link>
      )}
    </nav>
  );
}
