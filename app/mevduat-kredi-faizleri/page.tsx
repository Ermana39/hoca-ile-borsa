import Link from "next/link";
import type { Metadata } from "next";
import TrackedLink from "@/components/tracked-link";

export const metadata: Metadata = {
  title: "Mevduat ve Kredi Faiz Oranları | Hoca İle Borsa",
  description:
    "Mevduat faizi oranları, tüketici faizi oranları, konut kredisi oranları ve taşıt kredisi oranları sayfası.",
  alternates: {
    canonical: "/mevduat-kredi-faizleri",
  },
};

const faizKutulari = [
  {
    title: "Mevduat Faizi Oranları",
    href: "/mevduat-kredi-faizleri/mevduat-faizi-oranlari",
    image: "/mevduat-faizi-oranlari.png",
    alt: "Mevduat faizi oranları görseli",
    description:
      "Bankaların güncel mevduat faizi oranlarını karşılaştırarak vadeli mevduat tarafında öne çıkan seçenekleri inceleyebilirsiniz.",
  },
  {
    title: "Tüketici Faizi Oranları",
    href: "/mevduat-kredi-faizleri/tuketici-faizi-oranlari",
    image: "/tuketici-faizi-oranlari.png",
    alt: "Tüketici faizi oranları görseli",
    description:
      "Tüketici kredisi faiz oranlarını karşılaştırarak ihtiyaç kredisi tarafındaki güncel maliyetleri daha kolay takip edebilirsiniz.",
  },
  {
    title: "Konut Kredisi Oranları",
    href: "/mevduat-kredi-faizleri/konut-kredisi-oranlari",
    image: "/konut-kredisi-oranlari.png",
    alt: "Konut kredisi oranları görseli",
    description:
      "Konut kredisi faiz oranlarını inceleyerek bankalar arasındaki farkları ve güncel konut finansmanı maliyetlerini görebilirsiniz.",
  },
  {
    title: "Taşıt Kredisi Oranları",
    href: "/mevduat-kredi-faizleri/tasit-kredisi-oranlari",
    image: "/tasit-kredisi-oranlari.png",
    alt: "Taşıt kredisi oranları görseli",
    description:
      "Taşıt kredisi oranlarını takip ederek araç finansmanı için sunulan güncel kredi maliyetlerini karşılaştırabilirsiniz.",
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

function FaizKutusu({
  title,
  href,
  image,
  alt,
  description,
}: {
  title: string;
  href: string;
  image: string;
  alt: string;
  description: string;
}) {
  return (
    <TrackedLink
      href={href}
      label={title}
      className="group flex min-h-[320px] flex-col rounded-2xl bg-white transition hover:bg-zinc-50"
      ariaLabel={title}
    >
      <div className="p-2 pb-1 md:p-3 md:pb-1">
        <div className="relative overflow-hidden rounded-2xl bg-zinc-50">
          <div className="relative aspect-[16/10] w-full">
            <img
              src={image}
              alt={alt}
              className="block h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-1 flex-col items-center justify-start px-3 pb-3 pt-0 text-center md:px-4 md:pb-3">
        <h2 className="text-xl font-semibold text-zinc-900 md:text-2xl">
          {title}
        </h2>
        <p className="mt-3 text-sm leading-6 text-zinc-600 md:text-base">
          {description}
        </p>
      </div>
    </TrackedLink>
  );
}

export default function MevduatKrediFaizleriPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="mx-auto max-w-7xl px-4 py-6 md:px-6">

        <section className="mb-6 flex flex-wrap gap-3">
          <Link
            href="/"
            className="rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100"
          >
            Ana Sayfa
          </Link>
        </section>

        {/* ÜST AÇIKLAMA - BORDER KALDIRILDI */}
        <section className="rounded-2xl bg-white p-5 md:p-8">
          <h1 className="text-2xl font-bold text-zinc-900 md:text-4xl">
            Mevduat ve Kredi Faiz Oranları
          </h1>

          <p className="mt-3 max-w-4xl text-sm leading-7 text-zinc-600 md:text-base">
            Mevduat faizi oranları, tüketici kredisi faiz oranları, konut kredisi
            oranları ve taşıt kredisi oranları gibi güncel finansman başlıklarına
            bu sayfa üzerinden toplu şekilde ulaşabilirsiniz.
          </p>
        </section>

        <section className="pt-6">
          <ReklamAlani variant="yatay" />
        </section>

        <section className="py-6">
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-4">
            {faizKutulari.map((item) => (
              <FaizKutusu key={item.href} {...item} />
            ))}
          </div>
        </section>

        {/* ALT AÇIKLAMA - BORDER KALDIRILDI */}
        <section className="rounded-2xl bg-white p-5 md:p-7">
          <h2 className="mb-4 text-2xl font-bold text-zinc-900">
            Faiz oranları sayfasında neler bulunur?
          </h2>

          <div className="space-y-4 text-sm leading-7 text-zinc-700 md:text-base">
            <p>Bu sayfa faiz verilerini toplar.</p>
            <p>Karşılaştırma yapmanı sağlar.</p>
            <p>SEO katkısı sağlar.</p>
            <p className="text-zinc-500">
              Yatırım tavsiyesi değildir.
            </p>
          </div>
        </section>

        <section className="pt-6">
          <ReklamAlani variant="icerik" />
        </section>

      </div>
    </main>
  );
}