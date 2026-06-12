import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import HaberIlgiliBolumler from "@/components/HaberIlgiliBolumler";

export const metadata: Metadata = {
  title: "Beta Enerji Halka Arzında Talep Toplama Tarihleri Açıklandı",
  description:
    "Beta Enerji halka arzında talep toplama 17-18-19 Haziran 2026 tarihlerinde yapılacak. Pay başına fiyat 40 TL olarak belirlenirken halka arz büyüklüğünün yaklaşık 2,4 milyar TL olması hedefleniyor.",
  alternates: {
    canonical:
      "https://www.hocaileborsa.com/haber/beta-enerji-halka-arz-talep-toplama-tarihleri-aciklandi",
  },
};

const betaEnerjiBasliklari = [
  {
    baslik: "Talep Toplama 17-18-19 Haziran 2026’da Yapılacak",
    metin:
      "Beta Enerji halka arzı için talep toplama süreci 17 Haziran 2026 Çarşamba günü başlayacak ve 19 Haziran 2026 Cuma günü sona erecek. Halka arzda pay başına fiyat 40,00 TL olarak belirlendi.",
  },
  {
    baslik: "Halka Arz Büyüklüğü Yaklaşık 2,4 Milyar TL",
    metin:
      "Halka arz kapsamında 55 milyon adedi sermaye artırımı, 5 milyon 750 bin adedi ortak satışı olmak üzere toplam 60 milyon 750 bin adet payın satışa sunulması planlanıyor. Bu yapıyla halka arz büyüklüğünün yaklaşık 2,4 milyar TL seviyesinde gerçekleşmesi bekleniyor.",
  },
  {
    baslik: "Halka Açıklık Oranı %15 Olacak",
    metin:
      "Halka arz sonrası Beta Enerji’nin halka açıklık oranının yaklaşık yüzde 15 seviyesinde olması öngörülüyor. Şirket paylarının Borsa İstanbul Yıldız Pazar’da işlem görmesi planlanıyor.",
  },
  {
    baslik: "Katılım Endeksi Kriterlerine Uygun",
    metin:
      "Beta Enerji paylarının Katılım Endeksi kriterlerine uygun olduğu açıklandı. Bu durum, katılım hassasiyeti bulunan yatırımcılar açısından halka arzın öne çıkan başlıklarından biri olarak değerlendiriliyor.",
  },
  {
    baslik: "%30 Nakit Temettü Taahhüdü",
    metin:
      "Şirket, kâr dağıtım politikası kapsamında dağıtılabilir net dönem kârının asgari yüzde 30’unu nakit olarak dağıtmayı taahhüt ediyor. Bu taahhüt, halka arz sonrası yatırımcıların takip edeceği önemli unsurlar arasında yer alıyor.",
  },
  {
    baslik: "1 Yıl Pay Satışı Yapılmayacak",
    metin:
      "Hâkim ortaklar, şirket paylarının Borsa İstanbul’da işlem görmeye başladığı tarihten itibaren 1 yıl boyunca halka arz fiyatından bağımsız olarak pay satışı yapmayacaklarını taahhüt etti. Şirket de aynı süre boyunca bedelli veya bedelsiz sermaye artırımı yoluyla dolaşımdaki pay miktarını artırmayacağını duyurdu.",
  },
  {
    baslik: "Halka Arz Geliri Büyüme İçin Kullanılacak",
    metin:
      "Beta Enerji yönetimi, halka arzdan elde edilecek gelirin büyüme yatırımlarının finansmanında ve işletme sermayesinin güçlendirilmesinde kullanılacağını açıkladı. Şirket, halka açık bir yapıya kavuşmanın kurumsallaşma ve sürdürülebilir büyüme açısından önemli bir adım olduğunu vurguluyor.",
  },
  {
    baslik: "80’den Fazla Ülkeye İhracat",
    metin:
      "Beta Enerji, Adana Hacı Sabancı Organize Sanayi Bölgesi’nde farklı tipte güç ve gerilim seviyelerine yönelik transformatör üretimi gerçekleştiriyor. Şirket, kurulduğu günden bu yana 80’den fazla ülkeye ihracat yaptığını belirtiyor.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "Beta Enerji Halka Arzında Talep Toplama Tarihleri Açıklandı",
  description:
    "Beta Enerji halka arzında talep toplama 17-18-19 Haziran 2026 tarihlerinde yapılacak. Pay başına fiyat 40 TL olarak belirlenirken halka arz büyüklüğünün yaklaşık 2,4 milyar TL olması hedefleniyor.",
  datePublished: "2026-06-12T10:00:00+03:00",
  dateModified: "2026-06-12T10:00:00+03:00",
  url: "https://www.hocaileborsa.com/haber/beta-enerji-halka-arz-talep-toplama-tarihleri-aciklandi",
  author: {
    "@type": "Organization",
    name: "Hoca İle Borsa",
    url: "https://www.hocaileborsa.com",
  },
  publisher: {
    "@type": "Organization",
    name: "Hoca İle Borsa",
    url: "https://www.hocaileborsa.com",
    logo: {
      "@type": "ImageObject",
      url: "https://www.hocaileborsa.com/icon-512.png",
    },
  },
  image: "https://www.hocaileborsa.com/beta-enerji-halka-arz.webp",
  inLanguage: "tr",
};

export default function HaberBetaEnerjiHalkaArzPage() {
  return (
    <main className="min-h-screen bg-[#f8fafc] px-4 py-6 md:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="mx-auto max-w-4xl">
        <nav
          className="mb-5 flex items-center gap-2 text-sm text-slate-500"
          aria-label="Breadcrumb"
        >
          <Link href="/" className="transition hover:text-blue-600">
            Ana Sayfa
          </Link>
          <span className="text-slate-300">/</span>
          <span className="font-medium text-slate-700">Haberler</span>
        </nav>

        <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_2px_16px_rgba(15,23,42,0.07)]">
          <div className="w-full overflow-hidden bg-white">
            <Image
              src="/beta-enerji-halka-arz.webp"
              alt="Beta Enerji halka arz talep toplama tarihleri açıklandı"
              width={1200}
              height={900}
              unoptimized
              priority
              className="h-auto w-full object-contain"
            />
          </div>

          <div className="p-6 md:p-10">
            <h1 className="text-2xl font-bold leading-tight tracking-tight text-slate-900 md:text-3xl lg:text-4xl">
              Beta Enerji Halka Arzında Talep Toplama Tarihleri Açıklandı
            </h1>

            <div className="mb-4 mt-3 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center rounded-md bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700 ring-1 ring-inset ring-blue-600/20">
                Halka Arz
              </span>
              <time dateTime="2026-06-12" className="text-sm text-slate-500">
                12 Haziran 2026
              </time>
              <span className="text-slate-300">·</span>
              <span className="text-sm text-slate-500">Hoca İle Borsa</span>
            </div>

            <div className="mt-6 space-y-6 text-base leading-8 text-slate-700 md:text-lg">
              <p>
                Türkiye’nin önde gelen transformatör üreticilerinden Beta Enerji,
                halka arz sürecinde yatırımcılarla buluşmaya hazırlanıyor. Şirket
                payları için talep toplama işlemleri 17-18-19 Haziran 2026
                tarihlerinde yapılacak.
              </p>

              <p>
                Halka arzda pay başına fiyat 40,00 TL olarak belirlenirken,
                toplam 60 milyon 750 bin adet payın satışa sunulması planlanıyor.
                Bu yapıyla halka arz büyüklüğünün yaklaşık 2,4 milyar TL
                seviyesinde gerçekleşmesi hedefleniyor.
              </p>

              <div className="space-y-5">
                {betaEnerjiBasliklari.map((haber) => (
                  <section
                    key={haber.baslik}
                    className="rounded-xl border border-slate-200 bg-slate-50 p-4"
                  >
                    <h2 className="text-base font-semibold text-slate-800">
                      {haber.baslik}
                    </h2>
                    <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
                      {haber.metin}
                    </p>
                  </section>
                ))}
              </div>

              <h2 className="text-xl font-bold text-slate-900">
                Beta Enerji Ne İş Yapıyor?
              </h2>

              <p>
                Beta Enerji, elektrik enerjisinin dönüştürülmesi ve iletilmesi
                alanında kullanılan transformatörlerin üretimine odaklanıyor.
                Şirket; güç transformatörleri, dağıtım trafoları, beton köşk ve
                yüksek gerilim anahtarlama sistemleri gibi ürün gruplarında
                faaliyet gösteriyor.
              </p>

              <p>
                Transformatör sektörü; elektrik altyapısı yatırımları,
                yenilenebilir enerji projeleri, elektrikli araç dönüşümü,
                sanayileşme ve şehirleşme gibi uzun vadeli trendlerden beslenen
                stratejik alanlardan biri olarak öne çıkıyor.
              </p>

              <h2 className="text-xl font-bold text-slate-900">
                2027 Sonu İçin 400 Milyon Dolar Ciro Hedefi
              </h2>

              <p>
                Beta Enerji, 2025 yılında bir önceki yıla göre yüzde 9 artışla
                4,7 milyar TL ciro elde ettiğini açıkladı. Aynı dönemde şirketin
                brüt kârı 1,5 milyar TL olurken, brüt kâr marjı yaklaşık yüzde
                32 seviyesinde gerçekleşti.
              </p>

              <p>
                Şirket yönetimi, yeni fabrikanın tam kapasiteye ulaşmasıyla
                birlikte 2027 yılı sonunda cironun 400 milyon dolar seviyesinin
                üzerine çıkmasını hedefliyor. 2026 yılının ilk çeyreğinde ise
                cironun 704 milyon TL olarak gerçekleştiği açıklandı.
              </p>

              <h2 className="text-xl font-bold text-slate-900">
                130 Milyon Dolarlık Yeni Kampüs Yatırımı
              </h2>

              <p>
                Beta Enerji, Adana’da yaklaşık 130 milyon dolar yatırım değerine
                ve 115 bin 155 metrekare büyüklüğe sahip Beta Enerji ve Teknoloji
                Kampüsü’nü hayata geçiriyor. Kampüsün ilk fazı Mart 2025
                itibarıyla üretime başladı.
              </p>

              <p>
                Yeni kampüste güç transformatörleri, beton köşk ve yüksek gerilim
                anahtarlama sistemlerinin üretimi devreye alındı. Şirket, 2026
                yılı sonunda transformatör üretimini tamamen bu kampüse taşımayı
                hedefliyor.
              </p>

              <p>
                Yeni kampüsün tam kapasiteye ulaşmasıyla birlikte yıllık üretim
                kapasitesinin yaklaşık 34 bin adet seviyesine çıkması planlanıyor.
                Şirket ayrıca ihracat yaptığı ülke sayısını kısa vadede 100’e,
                5 yıl içinde ise 130 ülkeye çıkarmayı amaçlıyor.
              </p>

              <h2 className="text-xl font-bold text-slate-900">
                Dijitalleşme ve Sürdürülebilir Üretim Hedefi
              </h2>

              <p>
                Beta Enerji, yeni kampüs yatırımını yalnızca kapasite artışı
                olarak değil, aynı zamanda teknolojik dönüşüm adımı olarak da
                konumlandırıyor. Şirket; otomasyon sistemleri, IoT entegrasyonu,
                yapay zekâ destekli kamera ve sensör sistemleri ile üretim
                süreçlerinde verimliliği artırmayı hedefliyor.
              </p>

              <p>
                Sürdürülebilirlik tarafında ise 2030 yılına kadar karbon
                emisyonunu yüzde 30 azaltma, su tüketimini yüzde 20 düşürme ve
                ambalaj atıklarını tamamen geri dönüştürülebilir hale getirme
                hedefleri öne çıkıyor. Yeni kampüsteki güneş paneli gücünün
                8 MW’a çıkarılması da şirketin enerji ihtiyacını yenilenebilir
                kaynaklardan karşılama planları arasında yer alıyor.
              </p>

              <h2 className="text-xl font-bold text-slate-900">
                Ar-Ge Odaklı Büyüme Stratejisi
              </h2>

              <p>
                Beta Enerji, küresel rekabet gücünü artırmak için Ar-Ge ve
                dijitalleşmeyi öncelikli alanlar arasında görüyor. Şirketin
                Ar-Ge merkezinde 95 mühendis, 7 teknisyen ve destek personeliyle
                birlikte yaklaşık 103 kişilik bir ekip görev yapıyor.
              </p>

              <p>
                Bugüne kadar 60 Ar-Ge projesini tamamlayan şirket, 52 projenin
                ise devam ettiğini açıkladı. Beta Enerji; daha az enerji kaybı
                sağlayan, uzun ömürlü, akıllı şebekelerle uyumlu ürünler
                geliştirmeye odaklanıyor.
              </p>

              <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm font-medium leading-7 text-emerald-900 md:text-base">
                Beta Enerji halka arzında öne çıkan ana başlıklar; 40 TL sabit
                fiyat, yaklaşık 2,4 milyar TL halka arz büyüklüğü, yüzde 15 halka
                açıklık oranı, Katılım Endeksi uygunluğu, yüzde 30 temettü
                taahhüdü ve yeni kampüs yatırımı olarak sıralanıyor.
              </div>

              <div className="rounded-xl border border-blue-200 bg-blue-50 p-4 text-sm font-medium leading-7 text-blue-900 md:text-base">
                Şirketin büyüme hikâyesinde transformatör talebindeki artış,
                enerji altyapısı yatırımları, ihracat potansiyeli, yeni üretim
                kampüsü ve Ar-Ge odaklı ürün geliştirme stratejisi yakından
                takip edilecek.
              </div>

              <HaberIlgiliBolumler
                slug="beta-enerji-halka-arz-talep-toplama-tarihleri-aciklandi"
                baslik="Beta Enerji Halka Arzında Talep Toplama Tarihleri Açıklandı"
              />

              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm font-medium leading-7 text-amber-900 md:text-base">
                ⚠️ Bu haber bilgilendirme amaçlıdır, yatırım tavsiyesi değildir.
              </div>
            </div>
          </div>
        </article>
      </div>
    </main>
  );
}