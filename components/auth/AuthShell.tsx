import type { ReactNode } from "react";
import Link from "@/components/NoPrefetchLink";

export default function AuthShell({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  description: string;
  children: ReactNode;
}) {
  return (
    <main className="min-h-[70vh] overflow-x-hidden bg-[#f8fafc] px-4 py-8 md:px-6 md:py-12">
      <div className="mx-auto w-full min-w-0 max-w-lg">
        <nav className="mb-5 flex min-w-0 items-center gap-2 text-sm text-slate-500" aria-label="İçerik yolu">
          <Link href="/" prefetch={false} className="transition hover:text-blue-700">
            Ana Sayfa
          </Link>
          <span className="text-slate-300">/</span>
          <span className="font-medium text-slate-700">{title}</span>
        </nav>

        <section className="w-full min-w-0 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
          <p className="text-sm font-bold uppercase tracking-wide text-blue-700">{eyebrow}</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">{title}</h1>
          <p className="mt-3 break-words text-sm leading-6 text-slate-600">{description}</p>
          <div className="mt-7 min-w-0">{children}</div>
        </section>
      </div>
    </main>
  );
}
