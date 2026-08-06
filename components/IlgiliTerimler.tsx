import Link from "@/components/NoPrefetchLink";
import { metindekiTerimler, terimHref } from "@/data/sozluk";

/**
 * Verilen metinde (örn. haber başlığı) geçen borsa terimlerini bulup
 * sözlük/rehber sayfalarına giden çipler olarak gösterir. Eşleşme yoksa
 * hiçbir şey render etmez. Haber sayfalarına HaberAltKisim üzerinden
 * otomatik olarak eklenir; ayrıca tekil kullanım için de uygundur.
 */
export default function IlgiliTerimler({
  metin,
  className = "",
}: {
  metin: string;
  className?: string;
}) {
  const terimler = metindekiTerimler(metin);
  if (terimler.length === 0) return null;

  // Eşleşen terimlerin hesaplayıcıları (href bazında tekilleştirilmiş).
  const araclar = [
    ...new Map(
      terimler
        .filter((t) => t.arac)
        .map((t) => [t.arac!.href, t.arac!])
    ).values(),
  ];

  return (
    <section
      className={`rounded-2xl border border-slate-200 bg-slate-50 p-4 ${className}`}
    >
      <p className="mb-2 text-sm font-semibold text-slate-900">
        Bu haberdeki terimler:
      </p>
      <div className="flex flex-wrap gap-2">
        {terimler.map((t) => (
          <Link
            key={t.slug}
            href={terimHref(t)}
            prefetch={false}
            className="inline-flex rounded-full border border-slate-300 bg-white px-3 py-1 text-xs font-semibold text-slate-700 transition hover:border-blue-300 hover:text-blue-700 md:text-sm"
            title={t.kisaTanim}
          >
            {t.terim} nedir?
          </Link>
        ))}
        {araclar.map((a) => (
          <Link
            key={a.href}
            href={a.href}
            prefetch={false}
            className="inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 transition hover:bg-emerald-100 md:text-sm"
          >
            🧮 {a.title}
          </Link>
        ))}
        <Link
          href="/sozluk"
          prefetch={false}
          className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700 transition hover:bg-blue-100 md:text-sm"
        >
          Borsa Sözlüğü →
        </Link>
      </div>
    </section>
  );
}
