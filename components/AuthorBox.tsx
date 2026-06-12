import Link from "next/link";
import { getYazar, varsayilanYazar } from "@/app/data/yazarlar";

export default function AuthorBox({
  slug = varsayilanYazar,
}: {
  slug?: string;
}) {
  const yazar = getYazar(slug);
  if (!yazar) return null;

  return (
    <section className="flex flex-col gap-4 rounded-xl border border-slate-200 bg-slate-50 p-4 sm:flex-row sm:items-center md:p-5">
      <Link
        href={`/yazar/${yazar.slug}`}
        prefetch={false}
        className="shrink-0"
        aria-label={yazar.isim}
      >
        <img
          src={yazar.avatar}
          alt={yazar.isim}
          width={56}
          height={56}
          className="h-14 w-14 rounded-full border border-slate-200 bg-white object-cover"
        />
      </Link>

      <div className="min-w-0 flex-1">
        <div className="text-sm text-slate-500">Yazar</div>
        <Link
          href={`/yazar/${yazar.slug}`}
          prefetch={false}
          className="text-base font-semibold text-slate-900 hover:text-blue-700"
        >
          {yazar.isim}
        </Link>
        <p className="mt-1 text-sm leading-6 text-slate-600">{yazar.bioKisa}</p>
        <Link
          href={`/yazar/${yazar.slug}`}
          prefetch={false}
          className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-blue-600 hover:text-blue-800"
        >
          Tüm yazıları
          <span aria-hidden>→</span>
        </Link>
      </div>
    </section>
  );
}
