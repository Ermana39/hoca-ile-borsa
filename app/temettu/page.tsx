import Image from "next/image";
import Link from "next/link";
import TrackedLink from "@/components/tracked-link";

const temettuKutulari = [
  {
    title: "Temettü Eğitimi",
    href: "/temettu/temettu-egitimi",
    image: "/temettu-egitimi-yatay.png",
    alt: "Temettü Eğitimi görseli",
    description:
      "Temettü nedir, nasıl işler, hak kullanım tarihi ve ödeme tarihi gibi temel konuları daha anlaşılır şekilde öğrenebilirsiniz.",
  },
  {
    title: "Nisan Ayı Temettü Verenler",
    href: "/temettu/nisan-ayi-temettu-takvimi",
    image: "/nisan-ayi-temettu-verenler-yatay.png",
    alt: "Nisan Ayı Temettü Verenler görseli",
    description:
      "Nisan ayında temettü veren şirketleri toplu şekilde inceleyerek temettü takvimini daha kolay takip edebilirsiniz.",
  },
  {
    title: "Mayıs Ayı Temettü Verenler",
    href: "/temettu/mayis-ayi-temettu-takvimi",
    image: "/mayis-ayi-temettu-verenler-yatay.png",
    alt: "Mayıs Ayı Temettü Verenler görseli",
    description:
      "Mayıs ayında temettü ödemesi yapan şirketleri liste halinde görerek dönemsel temettü planlamasını takip edebilirsiniz.",
  },
  {
    title: "Haziran Ayı Temettü Verenler",
    href: "/temettu/haziran-ayi-temettu-takvimi",
    image: "/haziran-ayi-temettu-verenler-yatay.png",
    alt: "Haziran Ayı Temettü Verenler görseli",
    description:
      "Haziran ayı temettü takviminde yer alan şirketleri inceleyerek hangi hisselerin ödeme yapacağını görebilirsiniz.",
  },
  {
    title: "Temmuz Ayı Temettü Verenler",
    href: "/temettu/temmuz-ayi-temettu-takvimi",
    image: "/temettu-temmuz-ayi-temettu-verenler-yatay.png",
    alt: "Temmuz Ayı Temettü Verenler görseli",
    description:
      "Temmuz ayında temettü veren şirketleri görüntüleyerek yaz dönemindeki temettü fırsatlarını takip edebilirsiniz.",
  },
  {
    title: "Ağustos Ayı Temettü Verenler",
    href: "/temettu/agustos-ayi-temettu-takvimi",
    image: "/agustos-ayi-temettu-verenler-yatay.png",
    alt: "Ağustos Ayı Temettü Verenler görseli",
    description:
      "Ağustos ayında temettü ödemesi açıklayan şirketleri tek sayfada görerek temettü takibini kolaylaştırabilirsiniz.",
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

export default function TemettuPage() {
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
        </div>

        <header className="mb-8">
          <h1 className="mb-3 text-3xl font-bold text-zinc-900 md:text-4xl">
            Temettü
          </h1>
        </header>

        {/* ÜST KUTULAR */}
        <div className="mb-8 grid grid-cols-1 gap-3 md:grid-cols-2">
          <TrackedLink
            href="/temettu/temettu-hesaplama-araci"
            className="rounded-xl bg-blue-100 px-4 py-4 text-center font-semibold hover:bg-blue-200"
          >
            Temettü Hesaplama Aracı
          </TrackedLink>

          <TrackedLink
            href="/temettu/temettu-verimi-hesaplama"
            className="rounded-xl bg-purple-100 px-4 py-4 text-center font-semibold hover:bg-purple-200"
          >
            Temettü Verimi Hesaplama
          </TrackedLink>
        </div>

        <section className="mb-8">
          <ReklamAlani />
        </section>

        {/* ANA KARTLAR */}
        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {temettuKutulari.map((item) => (
            <TrackedLink
              key={item.href}
              href={item.href}
              className="group flex min-h-[320px] flex-col rounded-2xl bg-zinc-50 p-3 hover:bg-zinc-100"
            >
              <div className="mb-4 overflow-hidden rounded-2xl">
                <div className="relative aspect-[16/10] w-full">
                  <Image src={item.image} alt={item.alt} fill className="object-cover" />
                </div>
              </div>

              <div className="text-center">
                <h2 className="text-xl font-semibold">{item.title}</h2>
                <p className="mt-3 text-sm text-zinc-600">
                  {item.description}
                </p>
              </div>
            </TrackedLink>
          ))}
        </section>

        {/* ALT KUTU */}
        <section className="mt-10 rounded-2xl bg-white p-5">
          <h2 className="text-2xl font-bold">Temettü sayfası</h2>
        </section>

        <section className="mt-8">
          <ReklamAlani variant="icerik" />
        </section>
      </div>
    </main>
  );
}