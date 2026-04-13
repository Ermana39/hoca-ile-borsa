import Image from "next/image";
import Link from "next/link";
const guncellemeTarihi = new Intl.DateTimeFormat("tr-TR", {
  timeZone: "Europe/Istanbul",
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
}).format(new Date());
const hacimKutulari = [
  {
    title: "Yıllık Hacim Artışı Olanlar",
    href: "/borsa/hacim-artisi-analizi/yillik-hacim-artisi-olanlar",
    image: "/yillik-hacim-artisi-olanlar-yatay.png",
    alt: "Yıllık Hacim Artışı Olanlar görseli",
  },
  {
    title: "Aylık Hacim Artışı Olanlar",
    href: "/borsa/hacim-artisi-analizi/aylik-hacim-artisi-olanlar",
    image: "/aylik-hacim-artisi-olanlar-yatay.png",
    alt: "Aylık Hacim Artışı Olanlar görseli",
  },
  {
    title: "Haftalık Hacim Artışı Olanlar",
    href: "/borsa/hacim-artisi-analizi/haftalik-hacim-artisi-olanlar",
    image: "/haftalik-hacim-artisi-olanlar-yatay.png",
    alt: "Haftalık Hacim Artışı Olanlar görseli",
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

export default function HacimArtisiAnaliziPage() {
  return (
    <main className="min-h-screen bg-white px-4 py-6 md:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 flex flex-wrap gap-3">
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

        <h1 className="mb-2 text-3xl font-bold text-zinc-900">
          Hacim Artışı Analizi
        </h1>
        <p className="mb-8 max-w-3xl text-base text-zinc-600">
          Hacim artışı analizlerini aşağıdaki kutulardan inceleyebilirsiniz.
        </p>
<div className="mb-8 text-sm font-semibold text-zinc-700">
  Güncelleme Tarihi: {guncellemeTarihi}
</div>
        <section className="mb-8">
          <ReklamAlani variant="yatay" />
        </section>

        <section className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {hacimKutulari.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group flex min-h-[240px] flex-col rounded-2xl border border-zinc-200 bg-zinc-50 p-3 transition hover:bg-zinc-100"
            >
              <div className="relative mb-4 overflow-hidden rounded-2xl bg-white">
                <div className="relative aspect-[16/10] w-full">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    className="object-cover transition duration-300 group-hover:scale-[1.03]"
                  />
                </div>
              </div>

              <div className="flex flex-1 items-center justify-center px-2 pb-2 text-center">
                <h2 className="text-xl font-semibold leading-tight text-zinc-900 md:text-2xl">
                  {item.title}
                </h2>
              </div>
            </Link>
          ))}
        </section>

        <section className="mt-8">
          <ReklamAlani variant="icerik" />
        </section>
      </div>
    </main>
  );
}