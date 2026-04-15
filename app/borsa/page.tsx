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
      "Hisselerin dip ve zirve bölgelerine uzaklığını takip ederek teknik görünümü daha hızlı yorumlamanıza yardımcı olur.",
  },
  {
    title: "Eğitim Videoları",
    href: "/borsa/egitim-videolari",
    image: "/egitim-videolari-yatay.png",
    alt: "Eğitim Videoları görseli",
    description:
      "Borsa, halka arz, teknik analiz ve finans başlıklarında hazırlanan eğitim içeriklerine ulaşabilirsiniz.",
  },
  {
    title: "Formasyonlar",
    href: "/borsa/formasyonlar",
    image: "/formasyonlar-yatay.png",
    alt: "Formasyonlar görseli",
    description:
      "Grafik formasyonlarına göre öne çıkan hisseleri liste halinde inceleyerek teknik görünümü takip edebilirsiniz.",
  },
  {
    title: "Geri Alım Programları",
    href: "/borsa/geri-alim-programlari",
    image: "/geri-alim-programlari-yatay.png",
    alt: "Geri Alım Programları görseli",
    description:
      "Şirketlerin pay geri alım programlarını ve piyasaya olası etkilerini düzenli şekilde izleyebilirsiniz.",
  },
  {
    title: "Gösterge Taramaları",
    href: "/borsa/gosterge-taramalari",
    image: "/gosterge-taramalari-yatay.png",
    alt: "Gösterge Taramaları görseli",
    description:
      "RSI, trend ve teknik filtrelere göre hazırlanmış hisse taramaları ile belirli kriterleri karşılayan hisseleri görün.",
  },
  {
    title: "Grafik Analiz",
    href: "/borsa/grafik-analiz",
    image: "/grafik-analiz-yatay.png",
    alt: "Grafik Analiz görseli",
    description:
      "Hisselere ait güncel grafik yorumları, destek-direnç bölgeleri ve kısa teknik değerlendirmeleri takip edin.",
  },
  {
    title: "Hacim Artışı Analizi",
    href: "/borsa/hacim-artisi-analizi",
    image: "/hacim-artisi-analizi-yatay.png",
    alt: "Hacim Artışı Analizi görseli",
    description:
      "İşlem hacmindeki artışı izleyerek piyasada ilginin yoğunlaştığı hisseleri daha kolay fark edebilirsiniz.",
  },
  {
    title: "Yeni İş Anlaşmaları",
    href: "/borsa/yeni-is-anlasmalari",
    image: "/yeni-is-anlasmalari-yatay.png",
    alt: "Yeni İş Anlaşmaları görseli",
    description:
      "Şirketlerin açıkladığı yeni iş ilişkileri ve sözleşmelerin hisseler üzerindeki etkisini takip etmeye yardımcı olur.",
  },
  {
    title: "Pivot Analizi",
    href: "/borsa/pivot-analizi",
    image: "/pivot-analizi-yatay.png",
    alt: "Pivot Analizi görseli",
    description:
      "Pivot, destek ve direnç seviyelerine göre hisselerin teknik görünümünü tablo halinde inceleyebilirsiniz.",
  },
  {
    title: "Tedbirli Hisseler",
    href: "/borsa/tedbirli-hisseler",
    image: "/tedbirli-hisseler-yatay.png",
    alt: "Tedbirli Hisseler görseli",
    description:
      "Tedbir kapsamındaki hisseleri takip ederek işlem öncesi daha dikkatli ve kontrollü karar verebilirsiniz.",
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
          <Link
            href="/"
            className="inline-block rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100"
          >
            Ana Sayfa
          </Link>
        </div>

        <header className="mb-8">
          <h1 className="mb-3 text-3xl font-bold text-zinc-900 md:text-4xl">
            Borsa Analiz
          </h1>
          <p className="max-w-4xl text-base leading-7 text-zinc-600 md:text-lg">
            Borsa analiz içeriklerine bu sayfa üzerinden toplu şekilde
            ulaşabilirsiniz. Günlük borsa özeti, grafik analiz, gösterge
            taramaları, pivot analizi, dip zirve analizi, hacim artışı analizi,
            geri alım programları ve diğer teknik başlıklar burada bir araya
            getirilmiştir.
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
              <div className="relative mb-4 overflow-hidden rounded-2xl">
                <div className="relative aspect-[16/10] w-full">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    className="object-cover transition duration-300 group-hover:scale-[1.03]"
                  />
                </div>
              </div>

              <div className="flex flex-1 flex-col items-center text-center px-2 pb-2">
                <h2 className="text-xl font-semibold text-zinc-900 md:text-2xl">
                  {item.title}
                </h2>
                <p className="mt-3 text-sm text-zinc-600 md:text-base">
                  {item.description}
                </p>
              </div>
            </TrackedLink>
          ))}
        </section>

        <section className="mt-10 rounded-2xl bg-white p-5 md:p-7">
          <h2 className="mb-4 text-2xl font-bold text-zinc-900">
            Borsa analiz sayfasında neler bulunur?
          </h2>

          <div className="space-y-4 text-sm leading-7 text-zinc-700 md:text-base">
            <p>
              Bu sayfa, Borsa İstanbul ile ilgili farklı analiz başlıklarını tek
              yerde toplamak amacıyla hazırlanmıştır. Kullanıcılar günlük borsa
              özeti, teknik analiz, hisse taramaları, pivot seviyeleri, dip zirve
              görünümü, hacim artışı ve yeni iş anlaşmaları gibi farklı veri
              başlıklarına tek ekrandan ulaşabilir.
            </p>

            <p>
              Özellikle borsa analiz, hisse analizi, teknik analiz, BIST hisse
              filtreleri, gösterge taramaları ve güncel borsa verileri arayan
              kullanıcılar için daha düzenli ve erişilebilir bir yapı sunulması
              hedeflenmiştir.
            </p>

            <p className="text-zinc-500">
              Bu sayfada yer alan içerikler yatırım tavsiyesi değildir.
            </p>
          </div>
        </section>

        <section className="mt-8">
          <ReklamAlani variant="icerik" />
        </section>

      </div>
    </main>
  );
}