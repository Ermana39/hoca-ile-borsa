import Link from "next/link";

const taramaDetaylari: Record<
  string,
  { title: string; hisseler: string[]; renk: "yesil" | "kirmizi" }
> = {
  "yukselis-trendinde-olanlar": {
    title: "Yükseliş trendinde olan hisseler (13,21,55 Hareketli ortalama üzerinde olanlar)",
    hisseler: ["THYAO", "ASELS", "TUPRS", "BIMAS", "EREGL"],
    renk: "yesil",
  },
  "dusus-trendinde-olanlar": {
    title: "Düşüş trendinde olanlar (13,21,55 Hareketli ortalama altında olanlar)",
    hisseler: ["SASA", "HEKTS", "SMRTG", "MIATK", "IZENR"],
    renk: "kirmizi",
  },
};

export default async function GostergeTaramaDetayPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const veri = taramaDetaylari[slug];

  if (!veri) {
    return (
      <main className="min-h-screen bg-white px-4 py-6 md:px-6">
        <div className="mx-auto max-w-4xl">
          <div className="mb-6 flex gap-3">
            <Link
              href="/"
              className="inline-block rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100"
            >
              Ana Sayfa
            </Link>

            <Link
              href="/borsa/gosterge-taramalari"
              className="inline-block rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100"
            >
              Geri
            </Link>
          </div>

          <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-4 text-red-700">
            İçerik bulunamadı.
          </div>
        </div>
      </main>
    );
  }

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
            href="/borsa/gosterge-taramalari"
            className="inline-block rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100"
          >
            Geri
          </Link>
        </div>

        <h1 className="mb-6 text-3xl font-bold text-zinc-900">{veri.title}</h1>

        <div className="space-y-3">
          {veri.hisseler.map((hisse, index) => (
            <div
              key={hisse}
              className={`rounded-xl border px-4 py-4 text-base font-medium text-zinc-900 ${
                veri.renk === "yesil"
                  ? "border-green-200 bg-green-50"
                  : "border-red-200 bg-red-50"
              }`}
            >
              {index + 1}. {hisse}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}