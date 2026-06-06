export const metadata = {
  title: "Borsa Analiz | Hoca İle Borsa",
  description: "BIST hisse analizleri, teknik analiz, gösterge taramaları, pivot analizi ve günlük borsa verileri.",
  alternates: { canonical: "https://www.hocaileborsa.com/borsa" },
};

import Image from "next/image";
import Link from "next/link";

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
    title: "Oran Analizi",
    href: "/borsa/oran-analizi",
    image: "/oran-analizi.png",
    alt: "Oran Analizi görseli",
    description:
      "Şirketlerin finansal oranlarını inceleyerek değerleme, kârlılık, borçluluk ve verimlilik açısından karşılaştırma yapabilirsiniz.",
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

function AnalizKutusu({
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
    <Link
      href={href}
      prefetch={false}
      aria-label={title}
      className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_8px_30px_rgba(15,23,42,0.10)]"
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
        <Image
          src={image}
          alt={alt}
          fill
          className="object-cover transition duration-500 group-hover:scale-[1.04]"
        />
      </div>

      <div className="flex flex-1 flex-col p-4 md:p-5">
        <h2 className="text-base font-bold text-slate-900 md:text-lg">
          {title}
        </h2>
        <p className="mt-2 text-sm leading-6 text-slate-500">
          {description}
        </p>
        <div className="mt-auto pt-3 flex items-center gap-1 text-xs font-semibold text-blue-600 transition duration-300 group-hover:gap-2">
          <span>İncele</span>
          <span>→</span>
        </div>
      </div>
    </Link>
  );
}

export default function BorsaPage() {
  return (
    <main className="min-h-screen bg-[#f8fafc]">
      <div className="mx-auto max-w-7xl px-4 py-6 md:px-6">
        <nav className="mb-5 flex items-center gap-2 text-sm text-slate-500" aria-label="Breadcrumb">
          <Link href="/" prefetch={false} className="hover:text-blue-600 transition">Ana Sayfa</Link>
          <span className="text-slate-300">/</span>
          <span className="text-slate-700 font-medium">Borsa Analiz</span>
        </nav>

        <section className="mb-6">
          <h1 className="text-2xl font-bold text-slate-900 md:text-4xl">
            Borsa Analiz
          </h1>

          <p className="mt-3 max-w-4xl text-sm leading-7 text-slate-500 md:text-base">
            Borsa analiz içeriklerine bu sayfa üzerinden toplu şekilde
            ulaşabilirsiniz. Günlük borsa özeti, grafik analiz, gösterge
            taramaları, pivot analizi, dip zirve analizi, hacim artışı analizi,
            geri alım programları ve diğer teknik başlıklar burada bir araya
            getirilmiştir.
          </p>
        </section>

        <section className="py-6">
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-4">
            {analizKutulari.map((item) => (
              <AnalizKutusu key={item.href} {...item} />
            ))}
          </div>
        </section>

        <section className="rounded-2xl bg-white p-5 md:p-7">
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
      </div>
    </main>
  );
}