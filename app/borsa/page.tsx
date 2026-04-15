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
      "Gün içinde öne çıkan hisseler, dikkat çeken fiyat hareketleri ve yatırımcı ilgisinin arttığı alanlar.",
  },
  {
    title: "Dip Zirve Analizi",
    href: "/borsa/dip-zirve-analizi",
    image: "/dip-zirve-analizi-yatay.png",
    alt: "Dip Zirve Analizi görseli",
    description:
      "Hisselerin dip ve zirve bölgelerine uzaklığını takip ederek teknik görünümü yorumlamanıza yardımcı olur.",
  },
  {
    title: "Eğitim Videoları",
    href: "/borsa/egitim-videolari",
    image: "/egitim-videolari-yatay.png",
    alt: "Eğitim Videoları görseli",
    description:
      "Borsa ve teknik analiz eğitim içeriklerine ulaşabilirsiniz.",
  },
  {
    title: "Formasyonlar",
    href: "/borsa/formasyonlar",
    image: "/formasyonlar-yatay.png",
    alt: "Formasyonlar görseli",
    description:
      "Grafik formasyonlarına göre öne çıkan hisseleri inceleyin.",
  },
  {
    title: "Geri Alım Programları",
    href: "/borsa/geri-alim-programlari",
    image: "/geri-alim-programlari-yatay.png",
    alt: "Geri Alım Programları görseli",
    description:
      "Şirketlerin pay geri alım programlarını takip edin.",
  },
  {
    title: "Gösterge Taramaları",
    href: "/borsa/gosterge-taramalari",
    image: "/gosterge-taramalari-yatay.png",
    alt: "Gösterge Taramaları görseli",
    description:
      "RSI ve teknik göstergelere göre hisse taramaları.",
  },
  {
    title: "Grafik Analiz",
    href: "/borsa/grafik-analiz",
    image: "/grafik-analiz-yatay.png",
    alt: "Grafik Analiz görseli",
    description:
      "Destek-direnç ve teknik yorumları takip edin.",
  },
  {
    title: "Hacim Artışı Analizi",
    href: "/borsa/hacim-artisi-analizi",
    image: "/hacim-artisi-analizi-yatay.png",
    alt: "Hacim Artışı Analizi görseli",
    description:
      "Hacim artışı olan hisseleri tespit edin.",
  },
  {
    title: "Yeni İş Anlaşmaları",
    href: "/borsa/yeni-is-anlasmalari",
    image: "/yeni-is-anlasmalari-yatay.png",
    alt: "Yeni İş Anlaşmaları görseli",
    description:
      "Şirketlerin yeni iş anlaşmalarını inceleyin.",
  },
  {
    title: "Pivot Analizi",
    href: "/borsa/pivot-analizi",
    image: "/pivot-analizi-yatay.png",
    alt: "Pivot Analizi görseli",
    description:
      "Pivot, destek ve direnç seviyelerini inceleyin.",
  },
  {
    title: "Tedbirli Hisseler",
    href: "/borsa/tedbirli-hisseler",
    image: "/tedbirli-hisseler-yatay.png",
    alt: "Tedbirli Hisseler görseli",
    description:
      "Tedbir kapsamındaki hisseleri takip edin.",
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

        <div className="mb-6 flex flex-wrap gap-3">
          <Link href="/" className="rounded-xl border border-zinc-300 px-4 py-2 text-sm font-semibold">
            Ana Sayfa
          </Link>
        </div>

        <header className="mb-8">
          <h1 className="mb-3 text-3xl font-bold text-zinc-900">
            Borsa Analiz
          </h1>
          <p className="text-zinc-600">
            Tüm analiz içerikleri tek sayfada.
          </p>
        </header>

        <section className="mb-8">
          <ReklamAlani />
        </section>

        <section className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
          {analizKutulari.map((item) => (
            <TrackedLink
              key={item.href}
              href={item.href}
              label={item.title}
              className="group flex min-h-[320px] flex-col rounded-2xl bg-zinc-50 p-3 transition hover:bg-zinc-100"
            >
              <div className="mb-4 overflow-hidden rounded-2xl">
                <div className="relative aspect-[16/10] w-full">
                  <Image src={item.image} alt={item.alt} fill className="object-cover" />
                </div>
              </div>

              <div className="text-center">
                <h2 className="text-xl font-semibold">{item.title}</h2>
                <p className="mt-3 text-sm text-zinc-600">{item.description}</p>
              </div>
            </TrackedLink>
          ))}
        </section>

        <section className="mt-10 rounded-2xl bg-white p-5">
          <h2 className="text-2xl font-bold text-zinc-900">
            Borsa analiz sayfası
          </h2>
        </section>

        <section className="mt-8">
          <ReklamAlani variant="icerik" />
        </section>

      </div>
    </main>
  );
}