import { seoAciklamasi } from "@/lib/seo-metadata";
export const metadata = {
  title: "Borsa Analizleri ve Hisse Tarama Araçları",
  description: seoAciklamasi("BIST hisse analizleri, teknik analiz, gösterge taramaları, pivot analizi ve günlük borsa verileri.", "Güncel tablolar, karşılaştırmalar ve yatırımcıların takip edebileceği temel göstergeler birlikte sunulur."),
  alternates: { canonical: "https://www.hocaileborsa.com/borsa" },
};

import Link from "@/components/NoPrefetchLink";
import { IconTile } from "@/components/icons/IconTile";
import type { CategoryIconName } from "@/components/icons/CategoryIcon";

const analizKutulari = [
  {
    title: "Günlük Borsa Özeti",
    href: "/borsa/gunluk-borsa-ozeti",
    icon: "gunluk-borsa-ozeti" as CategoryIconName,
    description:
      "BIST 100 kapanışı, para girişi, para çıkışı, yükselenler, düşenler ve günün öne çıkan verileri tek sayfada.",
  },
  {
    title: "Dip Zirve Analizi",
    href: "/borsa/dip-zirve-analizi",
    icon: "dip-zirve-analizi" as CategoryIconName,
    description:
      "Hisselerin dip ve zirve bölgelerine uzaklığını takip ederek teknik görünümü daha hızlı yorumlamanıza yardımcı olur.",
  },
  {
    title: "Eğitim Videoları",
    href: "/borsa/egitim-videolari",
    icon: "egitim-videolari" as CategoryIconName,
    description:
      "Borsa, halka arz, teknik analiz ve finans başlıklarında hazırlanan eğitim içeriklerine ulaşabilirsiniz.",
  },
  {
    title: "Geri Alım Programları",
    href: "/borsa/geri-alim-programlari",
    icon: "geri-alim-programlari" as CategoryIconName,
    description:
      "Şirketlerin pay geri alım programlarını ve piyasaya olası etkilerini düzenli şekilde izleyebilirsiniz.",
  },
  {
    title: "Gösterge Taramaları",
    href: "/borsa/gosterge-taramalari",
    icon: "gosterge-taramalari" as CategoryIconName,
    description:
      "RSI, trend ve teknik filtrelere göre hazırlanmış hisse taramaları ile belirli kriterleri karşılayan hisseleri görün.",
  },
  {
    title: "Hacim Artışı Analizi",
    href: "/borsa/hacim-artisi-analizi",
    icon: "hacim-artisi-analizi" as CategoryIconName,
    description:
      "İşlem hacmindeki artışı izleyerek piyasada ilginin yoğunlaştığı hisseleri daha kolay fark edebilirsiniz.",
  },
  {
    title: "Yeni İş Anlaşmaları",
    href: "/borsa/yeni-is-anlasmalari",
    icon: "yeni-is-anlasmalari" as CategoryIconName,
    description:
      "Şirketlerin açıkladığı yeni iş ilişkileri ve sözleşmelerin hisseler üzerindeki etkisini takip etmeye yardımcı olur.",
  },
  {
    title: "Pivot Analizi",
    href: "/borsa/pivot-analizi",
    icon: "pivot-analizi" as CategoryIconName,
    description:
      "Pivot, destek ve direnç seviyelerine göre hisselerin teknik görünümünü tablo halinde inceleyebilirsiniz.",
  },
  {
    title: "Oran Analizi",
    href: "/borsa/oran-analizi",
    icon: "oran-analizi" as CategoryIconName,
    description:
      "Şirketlerin finansal oranlarını inceleyerek değerleme, kârlılık, borçluluk ve verimlilik açısından karşılaştırma yapabilirsiniz.",
  },
  {
    title: "Hisse Karşılaştırma",
    href: "/borsa/hisse-karsilastirma",
    icon: "oran-analizi" as CategoryIconName,
    description:
      "İki veya üç BIST şirketini değerleme, kârlılık, borçluluk, büyüme ve temettü verileriyle yan yana karşılaştırın.",
  },
  {
    title: "Tedbirli Hisseler",
    href: "/borsa/tedbirli-hisseler",
    icon: "tedbirli-hisseler" as CategoryIconName,
    description:
      "Tedbir kapsamındaki hisseleri takip ederek işlem öncesi daha dikkatli ve kontrollü karar verebilirsiniz.",
  },
];

const hesaplayiciKutulari = [
  {
    title: "Kâr / Zarar Hesaplama",
    href: "/borsa/kar-zarar-hesaplama",
    description:
      "Alış-satış fiyatı, lot adedi, komisyon ve stopaj oranlarına göre brüt/net kâr-zarar ve getiri oranınızı hesaplayın.",
  },
  {
    title: "Ortalama Maliyet Hesaplama",
    href: "/borsa/ortalama-maliyet",
    description:
      "Farklı fiyatlardan yaptığınız alımları ekleyerek toplam lot, toplam maliyet ve ağırlıklı ortalama maliyetinizi bulun.",
  },
  {
    title: "Sermaye Artırımı Hesaplama",
    href: "/borsa/sermaye-artirimi",
    description:
      "Bedelli ve bedelsiz sermaye artırımı sonrası kullanım hakkınızı, yeni lot adedinizi ve yeni ortalama maliyetinizi hesaplayın.",
  },
];

function AnalizKutusu({
  title,
  href,
  icon,
  description,
}: {
  title: string;
  href: string;
  icon: CategoryIconName;
  description: string;
}) {
  return (
    <Link
      href={href}
      prefetch={false}
      aria-label={title}
      className="group flex flex-1 flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_8px_30px_rgba(15,23,42,0.10)]"
    >
      <div className="mb-4 flex items-center gap-3">
        <IconTile
          name={icon}
          className="h-12 w-12 shrink-0 transition duration-300 group-hover:bg-blue-100"
        />
        <h2 className="text-base font-bold text-slate-900 md:text-lg">
          {title}
        </h2>
      </div>

      <p className="text-sm leading-6 text-slate-500">{description}</p>

      <div className="mt-auto flex items-center gap-1 pt-4 text-xs font-semibold text-blue-600 transition duration-300 group-hover:gap-2">
        <span>İncele</span>
        <span>→</span>
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
            ulaşabilirsiniz. Günlük borsa özeti, gösterge
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

        <section className="mb-10">
          <h2 className="mb-4 text-xl font-bold text-slate-900 md:text-2xl">
            Borsa Hesaplayıcıları
          </h2>
          <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
            {hesaplayiciKutulari.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                prefetch={false}
                aria-label={item.title}
                className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_8px_30px_rgba(15,23,42,0.10)] md:p-5"
              >
                <h3 className="text-base font-bold text-slate-900 md:text-lg">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {item.description}
                </p>
                <div className="mt-auto pt-3 flex items-center gap-1 text-xs font-semibold text-blue-600 transition duration-300 group-hover:gap-2">
                  <span>Hesapla</span>
                  <span>→</span>
                </div>
              </Link>
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
