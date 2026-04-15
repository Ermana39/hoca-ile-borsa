import Image from "next/image";
import Link from "next/link";
import TrackedLink from "@/components/tracked-link";

const analizKutulari = [
  {
    title: "Günlük Borsa Özeti",
    href: "/borsa/gunluk-borsa-ozeti",
    image: "/gunluk-borsa-ozeti-yatay.png",
    alt: "Günlük Borsa Özeti görseli",
    description:
      "BIST 100 kapanışı, para girişi, para çıkışı, yükselenler, düşenler ve günün öne çıkan verileri tek sayfada.",
  },
  {
    title: "Dikkat Çekenler",
    href: "/borsa/dikkat-cekenler",
    image: "/dikkat-cekenler-yatay.png",
    alt: "Dikkat Çekenler görseli",
    description:
      "Gün içinde öne çıkan hisseler ve fiyat hareketleri.",
  },
  {
    title: "Pivot Analizi",
    href: "/borsa/pivot-analizi",
    image: "/pivot-analizi-yatay.png",
    alt: "Pivot Analizi görseli",
    description:
      "Pivot, destek ve direnç seviyeleri ile teknik görünüm.",
  },
];

function ReklamAlani({ variant = "yatay" }: { variant?: "yatay" | "icerik" }) {
  const alanClass =
    variant === "icerik"
      ? "min-h-[220px] sm:min-h-[250px] lg:min-h-[280px]"
      : "min-h-[100px] sm:min-h-[110px] lg:min-h-[120px]";

  return (
    <section className={`w-full overflow-hidden rounded-2xl ${alanClass}`}>
      <div className={`w-full ${alanClass}`} />
    </section>
  );
}

export default function BorsaPage() {
  return (
    <main className="min-h-screen bg-white px-4 py-6 md:px-6">
      <div className="mx-auto max-w-7xl">

        <div className="mb-6 flex gap-3">
          <Link
            href="/"
            className="rounded-xl border border-zinc-300 px-4 py-2 text-sm font-semibold"
          >
            Ana Sayfa
          </Link>
        </div>

        <h1 className="mb-6 text-3xl font-bold">Borsa Analiz</h1>

        <section className="mb-8">
          <ReklamAlani />
        </section>

        {/* KARTLAR */}
        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {analizKutulari.map((item) => (
            <TrackedLink
              key={item.href}
              href={item.href}
              label={item.title}
              className="group flex min-h-[320px] flex-col rounded-2xl bg-zinc-50 p-3 hover:bg-zinc-100"
            >
              <div className="mb-4 overflow-hidden rounded-2xl">
                <div className="relative aspect-[16/10] w-full">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="text-center">
                <h2 className="text-xl font-semibold">{item.title}</h2>
                <p className="mt-2 text-sm text-zinc-600">
                  {item.description}
                </p>
              </div>
            </TrackedLink>
          ))}
        </section>

        {/* ALT KUTU */}
        <section className="mt-10 rounded-2xl bg-white p-5">
          <h2 className="mb-3 text-xl font-bold">
            Borsa analiz sayfası
          </h2>

          <p className="text-sm text-zinc-600">
            Tüm analiz içerikleri tek sayfada toplanmıştır.
          </p>
        </section>

        <section className="mt-8">
          <ReklamAlani variant="icerik" />
        </section>

      </div>
    </main>
  );
}