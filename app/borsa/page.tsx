import Image from "next/image";
import Link from "next/link";

const analizKutulari = [
  {
    title: "Günlük Borsa Özeti",
    href: "/borsa/gunluk-borsa-ozeti",
    image: "/gunluk-borsa-ozeti-kategori.png",
    alt: "Günlük borsa özeti görseli",
    description:
      "BIST 100 kapanışı, para girişi, para çıkışı, yükselenler, düşenler ve günün öne çıkan verileri tek sayfada.",
  },
  {
    title: "Dikkat Çekenler",
    href: "/borsa/dikkat-cekenler",
    image: "/dikkat-cekenler-kategori.png",
    alt: "Dikkat çekenler görseli",
    description:
      "Gün içinde öne çıkan hisseler, güçlü fiyat hareketleri ve yatırımcı ilgisinin arttığı alanlar.",
  },
  {
    title: "Dip Zirve Analizi",
    href: "/borsa/dip-zirve-analizi",
    image: "/dip-zirve-analizi-kategori.png",
    alt: "Dip zirve analizi görseli",
    description:
      "Hisselerin dip ve zirve bölgelerine uzaklığını takip ederek potansiyel konumlarını hızlıca görmenizi sağlar.",
  },
  {
    title: "Eğitim Videoları",
    href: "/borsa/egitim-videolari",
    image: "/egitim-videolari-kategori.png",
    alt: "Eğitim videoları görseli",
    description:
      "Borsa, halka arz, teknik analiz ve finans başlıklarında hazırlanan eğitim içeriklerine buradan ulaşabilirsiniz.",
  },
  {
    title: "Formasyonlar",
    href: "/borsa/formasyonlar",
    image: "/formasyonlar-kategori.png",
    alt: "Formasyonlar görseli",
    description:
      "Grafik formasyonlarını takip ederek teknik görünümde dikkat çeken hisseleri liste halinde inceleyebilirsiniz.",
  },
  {
    title: "Geri Alım Programları",
    href: "/borsa/geri-alim-programlari",
    image: "/geri-alim-programlari-kategori.png",
    alt: "Geri alım programları görseli",
    description:
      "Şirketlerin pay geri alım süreçlerini ve piyasaya etkisini düzenli şekilde takip edebileceğiniz bölüm.",
  },
  {
    title: "Gösterge Taramaları",
    href: "/borsa/gosterge-taramalari",
    image: "/gosterge-taramalari-kategori.png",
    alt: "Gösterge taramaları görseli",
    description:
      "RSI, trend ve teknik filtrelere göre hazırlanmış hisse taramaları ile belirli kriterleri karşılayan hisseleri görün.",
  },
  {
    title: "Grafik Analiz",
    href: "/borsa/grafik-analiz",
    image: "/grafik-analiz-kategori.png",
    alt: "Grafik analiz görseli",
    description:
      "Hisselere ait güncel grafik yorumları, destek-direnç bölgeleri ve teknik görünüm değerlendirmeleri.",
  },
  {
    title: "Hacim Artışı Analizi",
    href: "/borsa/hacim-artisi-analizi",
    image: "/hacim-artisi-analizi-kategori.png",
    alt: "Hacim artışı analizi görseli",
    description:
      "İşlem hacmindeki belirgin artışı takip ederek piyasada ilginin yoğunlaştığı hisseleri öne çıkarır.",
  },
  {
    title: "Yeni İş Anlaşmaları",
    href: "/borsa/yeni-is-anlasmalari",
    image: "/yeni-is-anlasmalari-kategori.png",
    alt: "Yeni iş anlaşmaları görseli",
    description:
      "Şirketlerin açıkladığı yeni iş ilişkileri ve sözleşmelerin hisseler üzerindeki etkisini takip etmeye yardımcı olur.",
  },
  {
    title: "Pivot Analizi",
    href: "/borsa/pivot-analizi",
    image: "/pivot-analizi-kategori.png",
    alt: "Pivot analizi görseli",
    description:
      "Pivot, destek ve direnç seviyelerine göre hisselerin teknik görünümünü tablo halinde sunar.",
  },
  {
    title: "Tedbirli Hisseler",
    href: "/borsa/tedbirli-hisseler",
    image: "/tedbirli-hisseler-kategori.png",
    alt: "Tedbirli hisseler görseli",
    description:
      "Volatilite Bazlı Tedbir Sistemi kapsamındaki hisseleri takip ederek işlem öncesi daha dikkatli karar almanıza yardımcı olur.",
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

function AnalizKutusu({
  title,
  href,
  image,
  alt,
}: {
  title: string;
  href: string;
  image: string;
  alt: string;
}) {
  return (
    <Link
      href={href}
      className="group flex min-h-[220px] flex-col rounded-2xl border border-zinc-200 bg-white p-3 transition hover:bg-zinc-50"
    >
      <div className="relative mb-4 overflow-hidden rounded-2xl bg-zinc-50">
        <div className="relative aspect-[16/10] w-full">
          <Image
            src={image}
            alt={alt}
            fill
            unoptimized
            className="object-cover transition duration-300 group-hover:scale-[1.03]"
          />
        </div>
      </div>

      <div className="flex flex-1 items-center justify-center px-2 text-center">
        <h2 className="text-xl font-semibold leading-tight text-zinc-900 md:text-2xl">
          {title}
        </h2>
      </div>
    </Link>
  );
}

export default function BorsaPage() {
  return (
    <main className="min-h-screen bg-white px-4 py-6 md:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 flex flex-wrap gap-3">
          <Link
            href="/"
            className="rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100"
          >
            Ana Sayfa
          </Link>
        </div>

        <header className="mb-8">
          <h1 className="mb-2 text-3xl font-bold text-zinc-900 md:text-4xl">
            Borsa Analiz
          </h1>
          <p className="max-w-3xl text-base leading-7 text-zinc-600 md:text-lg">
            Borsa analiz içeriklerine aşağıdaki kutucuklardan ulaşabilirsiniz.
            Günlük borsa özeti, gösterge taramaları, grafik analiz, pivot analizi,
            dip zirve analizi, hacim artışı analizi ve daha birçok başlık bu
            sayfada bir araya getirilmiştir.
          </p>
        </header>

        <section className="mb-8">
          <ReklamAlani variant="yatay" />
        </section>

        <section className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
          {analizKutulari.map((item) => (
            <AnalizKutusu key={item.href} {...item} />
          ))}
        </section>

        <section className="mt-10 rounded-2xl border border-zinc-200 bg-white p-5 md:p-7">
          <h2 className="mb-4 text-2xl font-bold text-zinc-900">
            Borsa analiz sayfasında neler var?
          </h2>

          <div className="space-y-4 text-sm leading-7 text-zinc-700 md:text-base">
            <p>
              Bu sayfa, Borsa İstanbul ile ilgili farklı analiz başlıklarını tek
              yerde toplamak amacıyla hazırlanmıştır. Kullanıcılar günlük borsa
              özeti, teknik görünüm, trend filtreleri, pivot seviyeleri, işlem
              hacmi değişimleri, geri alım programları ve yeni iş anlaşmaları gibi
              farklı veri başlıklarına tek ekrandan ulaşabilir.
            </p>

            <p>
              Özellikle borsa analiz, hisse analizi, teknik analiz, gösterge
              taramaları, BIST hisse filtreleri ve güncel borsa verileri arayan
              kullanıcılar için daha düzenli ve erişilebilir bir yapı sunulması
              hedeflenmiştir. Böylece farklı analiz bölümleri arasında geçiş yapmak
              daha kolay hale gelir.
            </p>

            <p>
              Sayfada yer alan kutular, hem kısa vadeli piyasa takibi yapan
              kullanıcılar hem de belirli filtrelere göre hisse arayan yatırımcılar
              için pratik bir giriş alanı oluşturur. Günlük özet sayfaları,
              gösterge bazlı taramalar ve teknik görünüm bölümleri birlikte
              kullanıldığında daha bütüncül bir izleme deneyimi sağlar.
            </p>
          </div>
        </section>

        <section className="mt-8 rounded-2xl border border-zinc-200 bg-white p-5 md:p-7">
          <h2 className="mb-5 text-2xl font-bold text-zinc-900">
            Bölüm açıklamaları
          </h2>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {analizKutulari.map((item) => (
              <div
                key={item.href}
                className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4"
              >
                <h3 className="mb-2 text-lg font-semibold text-zinc-900">
                  {item.title}
                </h3>
                <p className="text-sm leading-7 text-zinc-700 md:text-base">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-8 rounded-2xl border border-zinc-200 bg-white p-5 md:p-7">
          <h2 className="mb-4 text-2xl font-bold text-zinc-900">
            Bu sayfa kimler için faydalı?
          </h2>

          <div className="space-y-4 text-sm leading-7 text-zinc-700 md:text-base">
            <p>
              Borsa İstanbul hisselerini takip eden, teknik analiz odaklı bakan,
              belirli göstergelere göre hisse filtrelemek isteyen ve günlük piyasa
              özetini hızlı görmek isteyen kullanıcılar için bu sayfa pratik bir
              merkez görevi görür.
            </p>

            <p>
              Aynı zamanda tek tek farklı alt sayfaları aramak yerine tüm analiz
              kutularını tek başlık altında görmek, kullanıcı deneyimini güçlendirir
              ve site içi geçişleri artırır. Bu yapı hem ziyaretçi açısından daha
              kaliteli bir algı oluşturur hem de SEO tarafında sayfanın daha güçlü
              bir konu merkezi olmasını destekler.
            </p>

            <p className="text-zinc-500">
              Bu sayfada yer alan içerikler genel bilgilendirme amacı taşır ve
              yatırım danışmanlığı kapsamında değildir.
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