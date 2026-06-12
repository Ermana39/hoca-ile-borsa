import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] flex-col items-center justify-center px-4 py-16 text-center">
      <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
        404
      </p>
      <h1 className="mt-2 text-3xl font-bold text-slate-900 md:text-4xl">
        Sayfa bulunamadı
      </h1>
      <p className="mt-3 max-w-md text-base text-slate-600">
        Aradığınız sayfa kaldırılmış, taşınmış veya hiç var olmamış olabilir.
      </p>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <Link
          href="/"
          className="inline-block rounded-xl border border-blue-600 bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
        >
          Ana Sayfa
        </Link>
        <Link
          href="/haberler"
          className="inline-block rounded-xl border border-zinc-300 bg-white px-5 py-2.5 text-sm font-semibold text-zinc-700 transition hover:bg-zinc-100"
        >
          Haberler
        </Link>
        <Link
          href="/halka-arz"
          className="inline-block rounded-xl border border-zinc-300 bg-white px-5 py-2.5 text-sm font-semibold text-zinc-700 transition hover:bg-zinc-100"
        >
          Halka Arz Takvimi
        </Link>
      </div>
    </main>
  );
}
