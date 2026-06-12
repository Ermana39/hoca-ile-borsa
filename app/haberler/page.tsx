import Link from "next/link";
import type { Metadata } from "next";
import HaberKart from "@/components/HaberKart";
import { getAllNews } from "@/lib/haberler";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Tüm Haberler",
  description:
    "Borsa İstanbul, halka arz, temettü ve KAP bildirimleriyle ilgili tüm güncel haberlerin listesi.",
  alternates: {
    canonical: "https://www.hocaileborsa.com/haberler",
  },
};

export default function HaberlerPage() {
  const haberler = getAllNews();

  return (
    <main className="min-h-screen bg-[#f8fafc] px-4 py-6 md:px-6">
      <div className="mx-auto max-w-5xl">
        <nav
          className="mb-5 flex items-center gap-2 text-sm text-slate-500"
          aria-label="Breadcrumb"
        >
          <Link href="/" className="transition hover:text-blue-600">
            Ana Sayfa
          </Link>
          <span className="text-slate-300">/</span>
          <span className="font-medium text-slate-700">Haberler</span>
        </nav>

        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_2px_12px_rgba(15,23,42,0.06)]">
          <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4 md:px-6">
            <div className="flex items-center gap-3">
              <div className="h-5 w-1 rounded-full bg-blue-600" />
              <h1 className="text-base font-bold tracking-tight text-slate-900 md:text-lg">
                Tüm Haberler
              </h1>
            </div>
            <span className="rounded bg-slate-100 px-2 py-1 text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
              {haberler.length} haber
            </span>
          </div>

          {haberler.length > 0 ? (
            <div className="grid grid-cols-1 gap-3 p-4 lg:grid-cols-2 md:p-5">
              {haberler.map((item) => (
                <HaberKart key={item.id || item.href} item={item} />
              ))}
            </div>
          ) : (
            <div className="p-6 text-center text-sm text-slate-400">
              Haber bulunamadı.
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
