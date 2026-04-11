import Link from "next/link";

const haberler = [
  {
    title: "Kazancı ile dikkat çeken Fonlar",
    href: "/borsa/dikkat-cekenler/haber-1",
  },
  ];

export default function DikkatCekenlerPage() {
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

        <h1 className="mb-6 text-3xl font-bold text-zinc-900">Dikkat Çekenler</h1>

        <div className="space-y-3">
          {haberler.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="block rounded-xl border border-blue-200 bg-blue-50 px-4 py-4 text-base font-bold text-zinc-900 transition hover:bg-blue-100 md:text-lg"
            >
              {item.title}
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}