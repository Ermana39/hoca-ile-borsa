import Image from "next/image";
import Link from "next/link";
import TrackedLink from "@/components/tracked-link";

const analizKutulari = [
  { title: "Dikkat Çekenler", href: "/borsa/dikkat-cekenler", image: "/dikkat-cekenler-yatay.png", alt: "Dikkat Çekenler görseli" },
  { title: "Dip Zirve Analizi", href: "/borsa/dip-zirve-analizi", image: "/dip-zirve-analizi-yatay.png", alt: "Dip Zirve Analizi görseli" },
  { title: "Eğitim Videoları", href: "/borsa/egitim-videolari", image: "/egitim-videolari-yatay.png", alt: "Eğitim Videoları görseli" },
  { title: "Formasyonlar", href: "/borsa/formasyonlar", image: "/formasyonlar-yatay.png", alt: "Formasyonlar görseli" },
  { title: "Geri Alım Programları", href: "/borsa/geri-alim-programlari", image: "/geri-alim-programlari-yatay.png", alt: "Geri Alım Programları görseli" },
  { title: "Gösterge Taramaları", href: "/borsa/gosterge-taramalari", image: "/gosterge-taramalari-yatay.png", alt: "Gösterge Taramaları görseli" },
  { title: "Grafik Analiz", href: "/borsa/grafik-analiz", image: "/grafik-analiz-yatay.png", alt: "Grafik Analiz görseli" },
  { title: "Günlük Borsa Özeti", href: "/borsa/gunluk-borsa-ozeti", image: "/gunluk-borsa-ozeti-yatay.png", alt: "Günlük Borsa Özeti görseli" },
  { title: "Hacim Artışı Analizi", href: "/borsa/hacim-artisi-analizi", image: "/hacim-artisi-analizi-yatay.png", alt: "Hacim Artışı Analizi görseli" },
  { title: "Yeni İş Anlaşmaları", href: "/borsa/yeni-is-anlasmalari", image: "/yeni-is-anlasmalari-yatay.png", alt: "Yeni İş Anlaşmaları görseli" },
  { title: "Pivot Analizi", href: "/borsa/pivot-analizi", image: "/pivot-analizi-yatay.png", alt: "Pivot Analizi görseli" },
  { title: "Tedbirli Hisseler", href: "/borsa/tedbirli-hisseler", image: "/tedbirli-hisseler-yatay.png", alt: "Tedbirli Hisseler görseli" },
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

export default function BorsaPage() {
  return (
    <main className="min-h-screen bg-white px-4 py-6 md:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 flex flex-wrap gap-3">
          <Link href="/" className="inline-block rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100">Ana Sayfa</Link>
        </div>

        <h1 className="mb-2 text-3xl font-bold text-zinc-900">Borsa Analiz</h1>
        <p className="mb-8 text-base text-zinc-600">Analiz içeriklerine aşağıdaki kutucuklardan ulaşabilirsiniz.</p>

        <section className="mb-8">
          <ReklamAlani variant="yatay" />
        </section>

        <section className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
          {analizKutulari.map((item) => (
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