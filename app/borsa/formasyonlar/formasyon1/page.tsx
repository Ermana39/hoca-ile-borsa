import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "KRVGD Düşen Genişleyen Takoz Formasyonu | Hoca İle Borsa",
  description:
    "KRVGD günlük grafik teknik değerlendirmesi, destek ve direnç seviyeleri.",
  alternates: {
    canonical: "/borsa/formasyonlar/formasyon1",
  },
};

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

export default function Formasyon1Page() {
  return (
    <main className="min-h-screen bg-white">
      <div className="mx-auto max-w-4xl px-4 py-6 md:px-6">
        <section className="mb-6 flex flex-wrap gap-3">
          <Link
            href="/"
            className="rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100"
          >
            Ana Sayfa
          </Link>

          <Link
            href="/borsa/formasyonlar"
            className="rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100"
          >
            Geri
          </Link>
        </section>

        <article className="rounded-2xl border border-zinc-200 bg-white p-4 md:p-6">
          <header>
            <h1 className="text-2xl font-bold leading-tight text-zinc-900 md:text-4xl">
              KRVGD Düşen Genişleyen Takoz Formasyonu
            </h1>

            <p className="mt-3 text-sm leading-7 text-zinc-600 md:text-base">
              KRVGD teknik görünümüne dair kısa değerlendirme.
            </p>
          </header>

          <section className="pt-6">
            <ReklamAlani variant="yatay" />
          </section>

          <section className="pt-6">
            <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50">
              <div className="relative aspect-[16/10] w-full">
                <Image
                  src="/formasyon-1.png"
                  alt="KRVGD düşen genişleyen takoz formasyonu görseli"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </section>

          <section className="pt-6">
            <div className="rounded-2xl bg-zinc-50 p-4 md:p-6">
              <p className="whitespace-pre-line text-base leading-8 text-zinc-700 md:text-lg">
{`#KRVGD
Günlük grafikte daralan baskı sonrası tepki arayışı izleniyor.
Kısa vadede 3,07 bölgesi ilk önemli direnç,
üzerinde 3,21 bölgesi gündeme gelebilir.
Aşağıda 2,87 seviyesi görünüm açısından kritik eşik olarak takip edilebilir.
Genel teknik değerlendirmedir.`}
              </p>
            </div>
          </section>

          <section className="pt-8">
            <ReklamAlani variant="icerik" />
          </section>
        </article>
      </div>
    </main>
  );
}