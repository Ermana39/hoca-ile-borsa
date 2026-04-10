import Link from "next/link";

const onayliIzahnameler = [
  { kod: "AAGYO", sirket: "AVRASYA GYO", href: "/halka-arz/onayli-1" },
];

export default function OnayliIzahnamelerPage() {
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
            href="/halka-arz"
            className="inline-block rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100"
          >
            Geri
          </Link>
        </div>

        <h1 className="mb-6 text-3xl font-bold text-zinc-900">
          Onaylı İzahnameler
        </h1>

        <div className="space-y-3">
          {onayliIzahnameler.map((item) => (
            <Link
              key={`${item.kod}-${item.sirket}`}
              href={item.href}
              className="flex items-center gap-4 rounded-xl border border-green-200 bg-green-50 px-4 py-4 transition hover:bg-green-100"
            >
              <div className="w-24 shrink-0 text-base font-bold text-zinc-900">
                {item.kod}
              </div>
              <div className="text-base font-medium text-zinc-900">
                {item.sirket}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}