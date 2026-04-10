import Link from "next/link";

const hisseler = [
  { kod: "THYAO", href: "/borsa/grafik-analiz/thyao" },
  { kod: "ASELS", href: "/borsa/grafik-analiz/asels" },
  { kod: "EREGL", href: "/borsa/grafik-analiz/eregl" },
  { kod: "TUPRS", href: "/borsa/grafik-analiz/tuprs" },
  { kod: "BIMAS", href: "/borsa/grafik-analiz/bimas" },
];

export default function GrafikAnalizPage() {
  return (
    <main className="min-h-screen bg-white px-4 py-6 md:px-6">
      <div className="mx-auto max-w-5xl">
        <div className="mb-6 flex gap-3">
          <Link
            href="/"
            className="inline-block rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100"
          >
            Ana Sayfa
          </Link>
          <Link
            href="/borsa"
            className="inline-block rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100"
          >
            Geri
          </Link>
        </div>

        <h1 className="mb-6 text-3xl font-bold text-zinc-900">Grafik Analiz</h1>

        <div className="space-y-3">
          {hisseler.map((item) => (
            <Link
              key={item.kod}
              href={item.href}
              className="block rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-4 text-base font-medium text-zinc-900 transition hover:bg-zinc-100"
            >
              {item.kod}
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}