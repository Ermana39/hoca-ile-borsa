import Link from "next/link";

const analizler = [
  {
    baslik: "AEFES Grafik Analiz",
    href: "/borsa/grafik-analiz/aefes",
  },

];

export default function GrafikAnalizPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <div className="mx-auto w-full max-w-6xl px-4 py-6 md:px-6 md:py-10">
        <div className="mb-8 flex flex-wrap gap-3">
          <Link
            href="/"
            className="rounded-xl border border-gray-300 bg-white px-5 py-3 text-sm font-semibold transition hover:bg-gray-50"
          >
            Ana Sayfa
          </Link>

          <Link
            href="/borsa"
            className="rounded-xl border border-gray-300 bg-white px-5 py-3 text-sm font-semibold transition hover:bg-gray-50"
          >
            Geri
          </Link>
        </div>

        <section className="pt-8 md:pt-16">
          <h1 className="mb-8 text-3xl font-bold md:text-4xl">Grafik Analiz</h1>

          <div className="space-y-4">
            {analizler.map((analiz) => (
              <Link
                key={analiz.href}
                href={analiz.href}
                className="block rounded-2xl border border-sky-200 bg-sky-50 px-4 py-5 text-xl font-semibold text-black transition hover:bg-sky-100"
              >
                {analiz.baslik}
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}