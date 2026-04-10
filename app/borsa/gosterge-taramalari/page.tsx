import Image from "next/image";
import Link from "next/link";

const taramalar = [
  {
    title: "Yükseliş trendinde olan hisseler",
    description: "13, 21, 55 hareketli ortalama üzerinde olanlar",
    href: "/borsa/gosterge-taramalari/yukselis-trendinde-olanlar",
    image: "/yukselis-trendinde-olanlar-yatay.png",
    alt: "Yükseliş trendinde olan hisseler görseli",
  },
  {
    title: "Düşüş trendinde olan hisseler",
    description: "13, 21, 55 hareketli ortalama altında olanlar",
    href: "/borsa/gosterge-taramalari/dusus-trendinde-olanlar",
    image: "/dusus-trendinde-olanlar-yatay.png",
    alt: "Düşüş trendinde olan hisseler görseli",
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
      className={`w-full overflow-hidden rounded-2xl border border-dashed border-zinc-300 bg-zinc-50 ${alanClass}`}
    >
      <div className={`w-full ${alanClass}`} />
    </section>
  );
}

export default function GostergeTaramalariPage() {
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

        <h1 className="mb-2 text-3xl font-bold text-zinc-900">Gösterge Taramaları</h1>
        <p className="mb-8 max-w-3xl text-base text-zinc-600">
          Gösterge taramalarını aşağıdaki kutulardan inceleyebilirsiniz.
        </p>

        <section className="mb-8">
          <ReklamAlani variant="yatay" />
        </section>

        <section className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
          {taramalar.map((item) => (
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

              <div className="flex flex-1 flex-col items-center justify-center px-2 pb-2 text-center">
                <h2 className="text-xl font-semibold leading-tight text-zinc-900 md:text-2xl">
                  {item.title}
                </h2>
                <p className="mt-3 text-sm leading-6 text-zinc-600 md:text-base">
                  {item.description}
                </p>
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