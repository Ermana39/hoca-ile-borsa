import Link from "next/link";

const formasyonlar = [
  { kod: "THYAO", tur: "Flama", href: "/borsa/formasyonlar/thyao-flama" },
  { kod: "ASELS", tur: "Yükselen Üçgen", href: "/borsa/formasyonlar/asels-yukselen-ucgen" },
  { kod: "EREGL", tur: "Çanak", href: "/borsa/formasyonlar/eregl-canak" },
  { kod: "TUPRS", tur: "Kanal", href: "/borsa/formasyonlar/tuprs-kanal" },
  { kod: "BIMAS", tur: "Sıkışma", href: "/borsa/formasyonlar/bimas-sikisma" },
];

export default function FormasyonlarPage() {
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

        <h1 className="mb-6 text-3xl font-bold text-zinc-900">Formasyonlar</h1>

        <div className="space-y-3">
          {formasyonlar.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="grid grid-cols-2 rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-4 text-base font-medium text-zinc-900 transition hover:bg-zinc-100"
            >
              <div>{item.kod}</div>
              <div className="text-right">{item.tur}</div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}