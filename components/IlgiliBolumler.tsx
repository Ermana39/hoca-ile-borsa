import Link from "next/link";

export type IlgiliLink = {
  label: string;
  href: string;
  description?: string;
};

export function IlgiliBolumler({
  baslik = "İlgili Bölümler",
  girisMetni,
  linkler,
  variant = "card",
  className = "",
}: {
  baslik?: string;
  girisMetni?: string;
  linkler: IlgiliLink[];
  variant?: "card" | "chip";
  className?: string;
}) {
  if (variant === "chip") {
    return (
      <section className={`rounded-2xl border border-zinc-200 bg-zinc-50 p-4 md:p-5 ${className}`}>
        <div className="mb-3 text-sm font-semibold text-zinc-700">{baslik}</div>
        {girisMetni && <p className="mb-3 text-sm text-zinc-600">{girisMetni}</p>}
        <div className="flex flex-wrap gap-2">
          {linkler.map((l) => (
            <Link
              key={l.href + l.label}
              href={l.href}
              prefetch={false}
              className="inline-flex items-center gap-1 rounded-full border border-blue-200 bg-white px-3 py-1.5 text-xs font-semibold text-blue-700 transition hover:bg-blue-50 md:text-sm"
            >
              {l.label}
              <span aria-hidden>→</span>
            </Link>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className={`rounded-2xl border border-slate-200 bg-white p-5 md:p-6 ${className}`}>
      <h2 className="mb-3 text-lg font-bold text-slate-900 md:text-xl">{baslik}</h2>
      {girisMetni && <p className="mb-4 text-sm text-slate-600 md:text-base">{girisMetni}</p>}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {linkler.map((l) => (
          <Link
            key={l.href + l.label}
            href={l.href}
            prefetch={false}
            className="group flex flex-col rounded-xl border border-slate-200 bg-slate-50 p-4 transition hover:-translate-y-0.5 hover:border-blue-200 hover:bg-white hover:shadow-sm"
          >
            <div className="text-sm font-bold text-slate-900 md:text-base">{l.label}</div>
            {l.description && (
              <div className="mt-1 text-xs leading-5 text-slate-500 md:text-sm">{l.description}</div>
            )}
            <div className="mt-3 flex items-center gap-1 text-xs font-semibold text-blue-600 transition group-hover:gap-2">
              <span>Aç</span>
              <span aria-hidden>→</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export function HesaplaCTA({
  href = "#hesaplayici",
  label = "Bu oranlarla hesaplama yap",
  ikinciLabel,
  ikinciHref,
  className = "",
}: {
  href?: string;
  label?: string;
  ikinciLabel?: string;
  ikinciHref?: string;
  className?: string;
}) {
  return (
    <div className={`mt-6 flex flex-wrap items-center gap-3 ${className}`}>
      <Link
        href={href}
        prefetch={false}
        className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 md:text-base"
      >
        {label}
        <span aria-hidden>→</span>
      </Link>
      {ikinciLabel && ikinciHref && (
        <Link
          href={ikinciHref}
          prefetch={false}
          className="inline-flex items-center gap-2 rounded-xl border border-zinc-300 bg-white px-5 py-3 text-sm font-semibold text-zinc-700 transition hover:bg-zinc-100 md:text-base"
        >
          {ikinciLabel}
          <span aria-hidden>→</span>
        </Link>
      )}
    </div>
  );
}

export function TabloUstBilgi({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`mb-4 rounded-xl border border-blue-200 bg-blue-50 px-4 py-3 text-sm text-blue-900 md:text-base ${className}`}>
      {children}
    </div>
  );
}
