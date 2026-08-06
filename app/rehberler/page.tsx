import Link from "@/components/NoPrefetchLink";
import { rehberler } from "@/lib/rehberler";

export const metadata = {
  title: "Rehberler",
  description:
    "Borsa, halka arz, katılım endeksi, sermaye artırımları, temettü ve finans kavramları hakkında kalıcı rehber içerikleri.",
  alternates: { canonical: "https://www.hocaileborsa.com/rehberler" },
};

export default function RehberlerPage() {
  return (
    <main className="min-h-screen bg-[#f8fafc]">
      <div className="mx-auto max-w-7xl px-4 py-6 md:px-6">
        <nav
          className="mb-5 flex items-center gap-2 text-sm text-slate-500"
          aria-label="Breadcrumb"
        >
          <Link href="/" prefetch={false} className="transition hover:text-blue-600">
            Ana Sayfa
          </Link>
          <span className="text-slate-300">/</span>
          <span className="font-medium text-slate-700">Rehberler</span>
        </nav>

        <section className="mb-6">
          <h1 className="text-2xl font-bold text-slate-900 md:text-4xl">
            Rehberler
          </h1>
        </section>

        <Link
          href="/sozluk"
          prefetch={false}
          className="mb-6 flex items-center justify-between gap-3 rounded-2xl border border-blue-200 bg-blue-50 p-5 transition hover:bg-blue-100"
        >
          <div>
            <p className="text-base font-bold text-blue-900 md:text-lg">
              Borsa Terimleri Sözlüğü
            </p>
            <p className="mt-1 text-sm leading-6 text-blue-800">
              VBTS, tavan serisi, lot, fiyat istikrarı ve daha fazlası — sık
              geçen terimlerin sade tanımları.
            </p>
          </div>
          <span aria-hidden className="text-xl text-blue-700">
            →
          </span>
        </Link>

        <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          {rehberler.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              prefetch={false}
              className="group block border-b border-slate-100 p-5 transition hover:bg-blue-50/60 last:border-b-0 md:p-6"
            >
              <h2 className="text-lg font-bold text-slate-900 transition group-hover:text-blue-700 md:text-xl">
                {item.title}
              </h2>
              <p className="mt-2 max-w-4xl text-sm leading-6 text-slate-500 md:text-base md:leading-7">
                {item.description}
              </p>
              <div
                className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-blue-600 transition group-hover:gap-2"
              >
                <span>Oku</span>
                <span>→</span>
              </div>
            </Link>
          ))}
        </section>
      </div>
    </main>
  );
}
