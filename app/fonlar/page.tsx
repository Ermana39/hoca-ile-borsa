export const metadata = {
  title: "Yatırım Fonları | Hoca İle Borsa",
  description: "Yatırım fonları, fon türleri, risk seviyeleri, TEFAS verileri, getiri analizi, tarihsel veriler ve haftalık fon tercihlerini tek sayfada takip edin.",
  alternates: { canonical: "https://www.hocaileborsa.com/fonlar" },
};

import Link from "@/components/NoPrefetchLink";
import { IconTile } from "@/components/icons/IconTile";
import type { CategoryIconName } from "@/components/icons/CategoryIcon";

const fonKutulari = [
  {
    title: "Haftalık Yatırım Fonlarının En Çok Tercih Ettiği Hisseler",
    desc: "Yatırım fonlarının haftalık bazda en çok tercih ettiği hisseleri inceleyin.",
    href: "/fonlar/haftalik-yatirim-fonlarinin-en-cok-tercih-ettigi-hisseler",
    icon: "fon-haftalik-tercih" as CategoryIconName,
    titleClassName: "text-[19px] md:text-[21px]",
    seoDescription:
      "Yatırım fonlarının haftalık bazda en çok yöneldiği hisseleri tek ekranda görerek fon tercihlerini daha yakından takip etmenizi sağlar.",
  },
  {
    title: "Fon Getiri Analizi",
    desc: "Fon tiplerine göre ayrılmış getiri ekranlarına ulaşın.",
    href: "/fonlar/getiri",
    icon: "fon-getiri" as CategoryIconName,
    titleClassName: "text-[22px] md:text-[24px]",
    seoDescription:
      "Fon türlerine göre ayrılmış getiri ekranları sayesinde yatırım fonlarının performansını daha düzenli ve karşılaştırmalı şekilde inceleyebilirsiniz.",
  },
  {
    title: "Fon Tarihsel Veriler",
    desc: "Fon tiplerine göre ayrılmış tarihsel veri ekranlarına ulaşın.",
    href: "/fonlar/tarihsel-veriler",
    icon: "fon-tarihsel" as CategoryIconName,
    titleClassName: "text-[22px] md:text-[24px]",
    seoDescription:
      "Fonların geçmiş dönem verilerini inceleyerek tarihsel performans, fiyat hareketi ve dönemsel değişimleri daha detaylı takip edebilirsiniz.",
  },
  {
    title: "Fonların Günlük Portföy Etkisi",
    desc: "Takip edilen fonların portföy hisselerinin ertesi gün fiyatına tahmini etkisini karşılaştırın.",
    href: "/fonlar/etki-analizi",
    icon: "fon-etki-analizi" as CategoryIconName,
    titleClassName: "text-[19px] md:text-[21px]",
    seoDescription:
      "TLY, PHE, PBR, DFI ve KHA fonlarının günlük portföy etkisini karşılaştırın; ayrıntılı analiz sayfalarına ulaşın.",
  },
];

const videoKartlari = [
  {
    title: "TLY Tera Portföy Birinci Serbest Fonu: Dağılım ve Strateji",
    href: "https://youtu.be/S6xt7GxWWJ8",
    image: "https://img.youtube.com/vi/S6xt7GxWWJ8/hqdefault.jpg",
    alt: "TLY Tera Portföy Birinci Serbest Fonu video kapak görseli",
  },
  {
    title:
      "PHE Pusula Portföy Hisse Senedi Fonu Detaylı İnceleme | Strateji, Risk, Getiri",
    href: "https://youtu.be/MgVAiBFZvto",
    image: "https://img.youtube.com/vi/MgVAiBFZvto/hqdefault.jpg",
    alt: "PHE Pusula Portföy Hisse Senedi Fonu video kapak görseli",
  },
  {
    title: "DFI Atlas Portföy İkinci Serbest Fon",
    href: "https://youtu.be/flipVqvQMDA",
    image: "https://img.youtube.com/vi/flipVqvQMDA/hqdefault.jpg",
    alt: "DFI Atlas Portföy İkinci Serbest Fon video kapak görseli",
  },
  {
    title:
      "Yeni YouTube Videosu | Fonlar, Borsa ve Yatırım Üzerine Detaylı İnceleme",
    href: "https://youtu.be/chZfm2FpiHg",
    image: "https://img.youtube.com/vi/chZfm2FpiHg/hqdefault.jpg",
    alt: "Yeni YouTube video kapak görseli",
  },
];

function FonKutusu({
  title,
  href,
  icon,
  desc,
  seoDescription,
  titleClassName,
}: {
  title: string;
  href: string;
  icon: CategoryIconName;
  desc: string;
  seoDescription: string;
  titleClassName: string;
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
          className="h-14 w-14 shrink-0 transition duration-300 group-hover:bg-blue-100"
        />
        <h2 className={`font-semibold text-zinc-900 ${titleClassName}`}>
          {title}
        </h2>
      </div>

      <p className="text-sm leading-6 text-slate-500 md:text-sm">
        {desc}
      </p>

      <p className="mt-3 text-sm leading-6 text-slate-500 md:text-sm">
        {seoDescription}
      </p>
    </Link>
  );
}

export default function FonlarPage() {
  return (
    <main className="min-h-screen bg-[#f8fafc]">
      <div className="mx-auto max-w-7xl px-4 py-6 md:px-6">
        <nav className="mb-5 flex items-center gap-2 text-sm text-slate-500" aria-label="Breadcrumb">
          <Link href="/" prefetch={false} className="hover:text-blue-600 transition">Ana Sayfa</Link>
          <span className="text-slate-300">/</span>
          <span className="text-slate-700 font-medium">Fonlar</span>
        </nav>

        <section className="mb-6">
          <h1 className="text-2xl font-bold text-slate-900 md:text-4xl">
            Fonlar
          </h1>

          <p className="mt-3 max-w-4xl text-sm leading-7 text-slate-500 md:text-sm">
            Yatırım fonları ile ilgili haftalık tercihler, fon getiri analizi,
            fon tarihsel verileri ve fonlara dair içeriklere bu sayfa üzerinden
            toplu şekilde ulaşabilirsiniz. Farklı fon başlıklarını tek sayfada
            görmek isteyen kullanıcılar için daha düzenli ve erişilebilir bir
            yapı sunulmuştur.
          </p>
        </section>

        <section className="py-6">
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3">
            {fonKutulari.map((item) => (
              <FonKutusu key={item.href} {...item} />
            ))}
          </div>
        </section>

        <section className="mt-10">
          <div className="mb-5">
            <h2 className="text-2xl font-bold text-zinc-900 md:text-3xl">
              YouTube Videoları
            </h2>

            <p className="mt-2 text-sm text-slate-500 md:text-sm">
              Fonlarla ilgili hazırladığım videolara buradan ulaşabilirsiniz.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {videoKartlari.map((video) => (
              <a
                key={video.href}
                href={video.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-[0_6px_24px_rgba(15,23,42,0.10)]"
                aria-label={video.title}
              >
                <div className="w-full">
                  <div className="overflow-hidden rounded-t-2xl bg-zinc-100">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={video.image}
                      alt={video.alt}
                      width={480}
                      height={360}
                      loading="lazy"
                      decoding="async"
                      className="block aspect-video w-full object-cover transition duration-300 group-hover:scale-[1.02]"
                    />
                  </div>

                  <div className="p-4">
                    <h3 className="line-clamp-2 min-h-[56px] text-lg font-semibold leading-7 text-zinc-900">
                      {video.title}
                    </h3>

                    <div className="mt-4 inline-flex rounded-xl border border-red-200 bg-red-50 px-4 py-2 text-sm font-semibold text-red-700 transition group-hover:bg-red-100">
                      Videoyu Aç
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section className="mt-12 rounded-2xl border border-slate-200 bg-white p-5 md:p-7">
          <h2 className="mb-4 text-2xl font-bold text-zinc-900">
            Fonlar Sayfasında Neler Bulunur?
          </h2>

          <div className="space-y-4 text-sm leading-7 text-slate-600 md:text-base">
            <p>
              Hoca İle Borsa Fonlar sayfası, yatırım fonlarını tek başlık altında
              takip etmek isteyen kullanıcılar için hazırlanmıştır. Bu bölümde
              fonların haftalık tercihleri, getiri analizleri, tarihsel verileri,
              kapanış etki hesaplamaları ve fonlara dair video içerikleri bir
              arada sunulur. Amaç yalnızca fon isimlerini listelemek değil,
              yatırımcının fon türlerini, risk seviyelerini ve fon seçiminde
              dikkat edilmesi gereken temel noktaları daha anlaşılır şekilde
              değerlendirmesine yardımcı olmaktır.
            </p>

            <p>
              Yatırım fonları; farklı yatırım araçlarını tek bir portföy içinde
              toplayan, profesyonel portföy yöneticileri tarafından yönetilen
              kolektif yatırım ürünleridir. Bir fonun içinde hisse senedi,
              devlet tahvili, özel sektör borçlanma aracı, ters repo, mevduat,
              kıymetli maden, yabancı varlık veya farklı finansal araçlar yer
              alabilir. Bu nedenle her fon aynı risk seviyesine sahip değildir.
              Fon seçerken sadece geçmiş getiriye bakmak yeterli olmaz; fonun
              türü, yatırım stratejisi, portföy dağılımı, yönetim ücreti,
              risk değeri ve yatırımcının vade beklentisi birlikte
              değerlendirilmelidir.
            </p>

            <h3 className="pt-3 text-xl font-bold text-zinc-900">
              Fon Türleri ve Risk Seviyeleri
            </h3>

            <p>
              Fon türleri, yatırımcının üstlendiği riskin ve beklediği getirinin
              anlaşılması açısından önemlidir. Para piyasası fonları genellikle
              kısa vadeli, düşük riskli ve likiditesi yüksek araçlara yatırım
              yapar. Bu fonlar, nakdini kısa süreli değerlendirmek isteyen
              yatırımcılar tarafından tercih edilebilir. Getiri potansiyeli
              hisse senedi fonlarına göre daha sınırlı olabilir; ancak fiyat
              dalgalanması da genellikle daha düşüktür.
            </p>

            <p>
              Hisse senedi fonları ise portföyünün önemli bir bölümünü Borsa
              İstanbul’da veya yurt dışı piyasalarda işlem gören paylara
              yönlendiren fonlardır. Bu fonlarda getiri potansiyeli daha yüksek
              olabilir; ancak piyasa hareketlerine bağlı olarak değer kaybı
              riski de artar. Hisse senedi fonu seçerken fonun hangi sektörlere,
              hangi şirketlere ve hangi yatırım temasına ağırlık verdiği
              incelenmelidir. Sadece kısa vadeli performans değil, fonun uzun
              vadeli stratejisi ve düşüş dönemlerindeki dayanıklılığı da
              önemlidir.
            </p>

            <p>
              Borçlanma araçları fonları; devlet tahvili, hazine bonosu ve özel
              sektör borçlanma araçları gibi sabit getirili enstrümanlara
              yatırım yapar. Bu fonlar faiz oranlarındaki değişimlerden
              etkilenebilir. Faizlerin yükseldiği dönemlerde tahvil fiyatları
              baskılanabilirken, faizlerin gerilediği dönemlerde bu fonlarda
              olumlu performans görülebilir. Bu nedenle borçlanma araçları
              fonlarında vade yapısı, portföy kalitesi ve faiz hassasiyeti
              dikkate alınmalıdır.
            </p>

            <p>
              Serbest fonlar, daha esnek yatırım stratejileri uygulayabilen ve
              genellikle nitelikli yatırımcılara sunulan fonlardır. Bu fonlar
              kaldıraç, türev ürünler, yoğunlaşmış portföy veya farklı piyasa
              stratejileri kullanabilir. Serbest fonlarda getiri potansiyeli
              yüksek olabilir; ancak risk yapısı standart fonlara göre daha
              karmaşık olabilir. Bu nedenle serbest fonlar incelenirken fonun
              izahnamesi, stratejisi, geçmiş dalgalanması ve yatırımcı profiline
              uygunluğu dikkatle değerlendirilmelidir.
            </p>

            <h3 className="pt-3 text-xl font-bold text-zinc-900">
              TEFAS Verileri Neden Önemlidir?
            </h3>

            <p>
              TEFAS, yatırım fonlarının karşılaştırılabilmesi açısından önemli
              bir veri kaynağıdır. Fon fiyatı, günlük getiri, dönemsel getiri,
              portföy dağılımı, fon büyüklüğü, yatırımcı sayısı ve risk değeri
              gibi bilgiler yatırımcıya fonu daha şeffaf şekilde inceleme imkânı
              verir. Bir fonun yalnızca son gün getirisine bakmak yanıltıcı
              olabilir. Haftalık, aylık, üç aylık, altı aylık ve yıllık
              performans birlikte değerlendirildiğinde fonun piyasa koşullarına
              nasıl tepki verdiği daha net görülebilir.
            </p>

            <p>
              Fon seçerken TEFAS verileri üzerinden benzer kategorideki fonları
              karşılaştırmak daha sağlıklı olur. Örneğin bir para piyasası fonu
              ile hisse senedi fonunu aynı getiri beklentisiyle değerlendirmek
              doğru değildir. Aynı şekilde serbest fonların risk ve strateji
              yapısı klasik fonlardan farklı olabilir. Bu nedenle karşılaştırma
              yapılırken fonların aynı kategori içinde incelenmesi gerekir.
              Fonun geçmiş performansı gelecek getirisini garanti etmez; ancak
              fon yönetiminin farklı piyasa koşullarında nasıl sonuç ürettiğini
              görmek açısından fikir verebilir.
            </p>

            <h3 className="pt-3 text-xl font-bold text-zinc-900">
              Fon Seçerken Dikkat Edilecek Noktalar
            </h3>

            <p>
              Fon seçiminde ilk adım yatırımcının kendi risk profilini
              belirlemesidir. Kısa vadede nakit ihtiyacı olan bir yatırımcı ile
              uzun vadeli büyüme hedefleyen bir yatırımcının aynı fonu tercih
              etmesi doğru olmayabilir. Risk seviyesi düşük ürünler daha sakin
              bir getiri yapısı sunarken, yüksek riskli fonlarda kısa vadeli
              dalgalanmalar daha belirgin olabilir. Bu nedenle yatırım süresi,
              beklenen getiri, risk toleransı ve portföy çeşitlendirmesi birlikte
              düşünülmelidir.
            </p>

            <p>
              Yönetim ücreti, fon büyüklüğü, yatırımcı sayısı, portföy
              yoğunlaşması, likidite durumu ve fonun yatırım stratejisi de
              önemli başlıklardır. Çok kısa sürede yüksek getiri sağlamış bir
              fon, her zaman en uygun fon anlamına gelmez. Bazen yüksek getiri
              yüksek risk alınarak elde edilmiş olabilir. Bu yüzden fonun sadece
              kazandırdığı döneme değil, dalgalı piyasalarda nasıl hareket
              ettiğine de bakılmalıdır.
            </p>

            <p>
              Bu sayfada yer alan fon içerikleri, yatırım fonlarını daha düzenli
              takip etmeye yardımcı olmak amacıyla hazırlanır. Fon getiri
              ekranları, tarihsel veriler, haftalık fon tercihleri ve kapanış
              etki analizleri yatırımcıya ek bakış açısı sunabilir. Ancak burada
              yer alan hiçbir içerik kişisel yatırım danışmanlığı kapsamında
              değildir. Yatırım kararı vermeden önce fon izahnamesi, TEFAS
              verileri, risk bildirimi ve kendi finansal durumunuz mutlaka
              dikkate alınmalıdır.
            </p>

            <p className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
              Bu sayfada yer alan bilgiler genel bilgilendirme amacı taşır.
              Fonların geçmiş getirileri gelecekte aynı performansın
              gerçekleşeceği anlamına gelmez. Yatırım kararları kişisel risk
              profiline, vade beklentisine ve finansal duruma göre verilmelidir.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
