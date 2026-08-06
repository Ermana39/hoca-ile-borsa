import Link from "@/components/NoPrefetchLink";

export type PopulerAramaItem = {
  label: string;
  href: string;
};

const defaultItems: PopulerAramaItem[] = [
  { label: "Halka arz takvimi", href: "/halka-arz" },
  { label: "Onaylı izahnameler", href: "/halka-arz/onayli-izahnameler" },
  { label: "Taslak izahnameler", href: "/halka-arz/taslak-izahnameler" },
  {
    label: "Beta Enerji halka arz",
    href: "/halka-arz/onayli-izahnameler/beta-enerji-teknoloji-betae",
  },
  { label: "Halka arz kaç lot verir?", href: "/rehberler/halka-arz-nedir" },
  { label: "Katılım endeksi", href: "/rehberler/katilim-endeksi" },
  { label: "Temettü takvimi", href: "/temettu" },
  { label: "Günlük borsa özeti", href: "/borsa/gunluk-borsa-ozeti" },
  { label: "Önemli KAP haberleri", href: "/haberler" },
];

export default function PopulerAramalar({
  title = "Popüler Aramalar",
  items = defaultItems,
  className = "",
}: {
  title?: string;
  items?: PopulerAramaItem[];
  className?: string;
}) {
  if (items.length === 0) return null;

  return (
    <section
      aria-label={title}
      className={`rounded-xl border border-slate-200 bg-slate-50 p-4 md:p-5 ${className}`}
    >
      <h2 className="text-sm font-semibold text-slate-700">{title}</h2>
      <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            prefetch={false}
            className="rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm font-medium text-slate-700 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </section>
  );
}
