import Link from "next/link";

const formasyonlar = [
  {
    kod: "KRVGD",
    tur: "Düşen Genişleyen Takoz Formasyonu",
    href: "/borsa/formasyonlar/formasyon1",
  },
];

function ReklamAlani({ variant = "yatay" }: { variant?: "yatay" | "icerik" }) {
  const alanClass =
    variant === "icerik"
      ? "min-h-[220px] sm:min-h-[250px] lg:min-h-[280px]"
      : "min-h-[100px] sm:min-h-[110px] lg:min-h-[120px]";

  return (
    <section
      aria-label="Reklam alanı"
      className={`w-full overflow-hidden rounded-2xl ${alanClass}`}
    >
      <div className={`w-full ${alanClass}`} />
    </section>
  );
}

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

        <section className="mb-6">
          <ReklamAlani variant="yatay" />
        </section>

        <h1 className="mb-6 text-3xl font-bold text-zinc-900">Formasyonlar</h1>

        <div className="space-y-3">
          {formasyonlar.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="grid grid-cols-2 rounded-xl border border-green-200 bg-green-50 px-4 py-4 text-base font-semibold text-zinc-900 transition hover:bg-green-100"
            >
              <div>{item.kod}</div>
              <div className="text-right">{item.tur}</div>
            </Link>
          ))}
        </div>

        <section className="mt-8">
          <ReklamAlani variant="icerik" />
        </section>
      </div>
    </main>
  );
}