import Link from "next/link";
import { getIlgiliHaberler, getHaberKategorisi } from "@/lib/haberler";
import { getKategori } from "@/lib/haber-kategorileri";

// Aynı kategoriden en güncel ilgili haberler (mevcut haber hariç).
export default function HaberIlgiliHaberler({
  href,
  limit = 4,
}: {
  href: string;
  limit?: number;
}) {
  const ilgili = getIlgiliHaberler(href, limit);
  if (ilgili.length === 0) return null;

  const slug = getHaberKategorisi(href);
  const bilgi = slug ? getKategori(slug) : undefined;

  return (
    <section className="rounded-xl border border-slate-200 bg-slate-50 p-4 md:p-5">
      <div className="mb-3 flex items-center justify-between gap-2">
        <h2 className="text-sm font-semibold text-slate-700">İlgili Haberler</h2>
        {bilgi && (
          <Link
            href={`/haberler/kategori/${bilgi.slug}`}
            prefetch={false}
            className="text-xs font-semibold text-blue-600 transition hover:text-blue-800"
          >
            {bilgi.kisaBaslik} →
          </Link>
        )}
      </div>

      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
        {ilgili.map((item) => (
          <Link
            key={item.id || item.href}
            href={item.href}
            prefetch={false}
            className="group flex flex-col rounded-lg border border-slate-200 bg-white px-3 py-2.5 transition hover:border-blue-200 hover:bg-blue-50"
          >
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
            <span className="mt-0.5 line-clamp-2 text-sm font-semibold text-slate-800 group-hover:text-blue-700">
              {item.title}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
