import Image from "next/image";
import Link from "next/link";
import TrackedLink from "@/components/tracked-link";

const temettuKutulari = [
  { title: "Temettü Eğitimi", href: "/temettu/temettu-egitimi", image: "/temettu-egitimi-yatay.png", alt: "Temettü Eğitimi görseli" },
  { title: "Nisan Ayı Temettü Verenler", href: "/temettu/nisan-ayi-temettu-takvimi", image: "/nisan-ayi-temettu-verenler-yatay.png", alt: "Nisan Ayı Temettü Verenler görseli" },
  { title: "Mayıs Ayı Temettü Verenler", href: "/temettu/mayis-ayi-temettu-takvimi", image: "/mayis-ayi-temettu-verenler-yatay.png", alt: "Mayıs Ayı Temettü Verenler görseli" },
  { title: "Haziran Ayı Temettü Verenler", href: "/temettu/haziran-ayi-temettu-takvimi", image: "/haziran-ayi-temettu-verenler-yatay.png", alt: "Haziran Ayı Temettü Verenler görseli" },
  { title: "Temmuz Ayı Temettü Verenler", href: "/temettu/temmuz-ayi-temettu-takvimi", image: "/temmuz-ayi-temettu-verenler-yatay.png", alt: "Temmuz Ayı Temettü Verenler görseli" },
  { title: "Ağustos Ayı Temettü Verenler", href: "/temettu/agustos-ayi-temettu-takvimi", image: "/agustos-ayi-temettu-verenler-yatay.png", alt: "Ağustos Ayı Temettü Verenler görseli" },
];

function ReklamAlani({ variant = "yatay" }: { variant?: "yatay" | "icerik" }) {
  const alanClass =
    variant === "icerik"
      ? "min-h-[220px] sm:min-h-[250px] lg:min-h-[280px]"
      : "min-h-[100px] sm:min-h-[110px] lg:min-h-[120px]";

  return (
    <section aria-label="Reklam alanı" className={`w-full overflow-hidden rounded-2xl ${alanClass}`}>
      <div className={`w-full ${alanClass}`} />
    </section>
  );
}

export default function TemettuPage() {
  return (
    <main className="min-h-screen bg-white px-4 py-6 md:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 flex flex-wrap gap-3">
          <Link href="/" className="inline-block rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100">Ana Sayfa</Link>
        </div>

        <h1 className="mb-6 text-3xl font-bold text-zinc-900">Temettü</h1>

        <div className="mb-8 grid grid-cols-1 gap-3 md:grid-cols-2">
          <TrackedLink
            href="/temettu/temettu-hesaplama-araci"
            label="Temettü Hesaplama Aracı"
            className="rounded-xl border border-blue-200 bg-blue-100 px-4 py-4 text-center text-base font-semibold text-zinc-900 transition hover:bg-blue-200"
          >
            Temettü Hesaplama Aracı
          </TrackedLink>

          <TrackedLink
            href="/temettu/temettu-verimi-hesaplama"
            label="Temettü Verimi Hesaplama"
            className="rounded-xl border border-purple-200 bg-purple-100 px-4 py-4 text-center text-base font-semibold text-zinc-900 transition hover:bg-purple-200"
          >
            Temettü Verimi Hesaplama
          </TrackedLink>
        </div>

        <section className="mb-8">
          <ReklamAlani variant="yatay" />
        </section>

        <section className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {temettuKutulari.map((item) => (
            <TrackedLink
              key={item.href}
              href={item.href}
              label={item.title}
              className="group flex min-h-[240px] flex-col rounded-2xl border border-zinc-200 bg-zinc-50 p-3 transition hover:bg-zinc-100"
              ariaLabel={item.title}
            >
              <div className="relative mb-4 overflow-hidden rounded-2xl bg-white">
                <div className="relative aspect-[16/10] w-full">
                  <Image src={item.image} alt={item.alt} fill className="object-cover transition duration-300 group-hover:scale-[1.03]" />
                </div>
              </div>

              <div className="flex flex-1 items-center justify-center px-2 pb-2 text-center">
                <h2 className="text-xl font-semibold leading-tight text-zinc-900 md:text-2xl">{item.title}</h2>
              </div>
            </TrackedLink>
          ))}
        </section>

        <section className="mt-8">
          <ReklamAlani variant="icerik" />
        </section>
      </div>
    </main>
  );
}