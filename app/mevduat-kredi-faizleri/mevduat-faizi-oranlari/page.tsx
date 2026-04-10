import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mevduat Faizi Oranları | Hoca İle Borsa",
  description: "Mevduat faizi oranları sayfası.",
  alternates: {
    canonical: "/mevduat-kredi-faizleri/mevduat-faizi-oranlari",
  },
};

export default function MevduatFaiziOranlariPage() {
  return (
    <main className="min-h-screen bg-white px-4 py-6 md:px-6">
      <div className="mx-auto max-w-5xl">
        <div className="mb-6 flex flex-wrap gap-3">
          <Link
            href="/"
            className="inline-block rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100"
          >
            Ana Sayfa
          </Link>

          <Link
            href="/mevduat-kredi-faizleri"
            className="inline-block rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100"
          >
            Geri
          </Link>
        </div>

        <section className="rounded-2xl border border-zinc-200 bg-white p-6 md:p-8">
          <h1 className="text-3xl font-bold text-zinc-900">
            Mevduat Faizi Oranları
          </h1>

          <p className="mt-3 text-base leading-7 text-zinc-600">
            Test sayfası açıldı. Bu ekran görünüyorsa sorun route tarafında değil,
            eski sayfa kodunun içindedir.
          </p>
        </section>
      </div>
    </main>
  );
}