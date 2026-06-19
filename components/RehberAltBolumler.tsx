import Link from "next/link";
import AuthorBox from "@/components/AuthorBox";
import { rehberler } from "@/lib/rehberler";

export default function RehberAltBolumler({
  currentHref,
}: {
  currentHref: string;
}) {
  const ilgiliRehberler = rehberler
    .filter((rehber) => rehber.href !== currentHref);

  return (
    <section className="space-y-6 border-t border-slate-200 pt-8">
      <div>
        <h2 className="text-xl font-bold text-slate-900">İlgili Rehberler</h2>
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          {ilgiliRehberler.map((rehber) => (
            <Link
              key={rehber.href}
              href={rehber.href}
              prefetch={false}
              className="group rounded-xl border border-slate-200 bg-slate-50 p-4 transition hover:border-blue-200 hover:bg-blue-50"
            >
              <h3 className="text-sm font-bold leading-6 text-slate-900 group-hover:text-blue-700">
                {rehber.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {rehber.description}
              </p>
              <div className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-blue-600 transition group-hover:gap-2">
                <span>Oku</span>
                <span aria-hidden>→</span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <AuthorBox slug="erman-hoca" />
    </section>
  );
}
