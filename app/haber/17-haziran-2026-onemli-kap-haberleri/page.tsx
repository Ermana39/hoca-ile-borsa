import Image from "next/image";
import Link from "@/components/NoPrefetchLink";
import type { Metadata } from "next";
import HaberIlgiliBolumler from "@/components/HaberIlgiliBolumler";
import AuthorBox from "@/components/AuthorBox";
import HaberAltKisim from "@/components/HaberAltKisim";
import KapCardLinks from "@/components/KapCardLinks";

export const metadata: Metadata = {
  title: "17 Haziran KAP: MIATK, DCTTR, BIMAS ve GRNYO Öne Çıktı",
  description:
    "MIATK, DCTTR, BIMAS, GRNYO ve diğer şirketlerin 17 Haziran KAP bildirimlerinde öne çıkan gelişmeler ve olası etkiler.",
  alternates: {
    canonical:
      "https://www.hocaileborsa.com/haber/17-haziran-2026-onemli-kap-haberleri",
  },
  openGraph: {
    type: "article",
    title: "17 Haziran KAP: MIATK, DCTTR, BIMAS ve GRNYO Öne Çıktı",
    description:
      "MIATK, DCTTR, BIMAS, GRNYO ve diğer şirketlerin 17 Haziran KAP bildirimlerinde öne çıkan gelişmeler ve olası etkiler.",
    images: [{ url: "https://www.hocaileborsa.com/kap-ozeti-discover.webp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "17 Haziran KAP: MIATK, DCTTR, BIMAS ve GRNYO Öne Çıktı",
    description:
      "MIATK, DCTTR, BIMAS, GRNYO ve diğer şirketlerin 17 Haziran KAP bildirimlerinde öne çıkan gelişmeler ve olası etkiler.",
    images: ["https://www.hocaileborsa.com/kap-ozeti-discover.webp"],
  },
};

const kapHaberleri = [
  {
    baslik: "Mia Teknoloji (MIATK)",
    kapLink: "https://www.kap.org.tr/tr/Bildirim/1617961",
    metin:
      "Mia Teknoloji, küçük modüler nükleer reaktörler olarak bilinen SMR teknolojileri alanında yabancı bir şirketle stratejik iş birliği anlaşması imzaladığını açıkladı. Açıklamada 100 MW kapasiteli SMR'lerin geliştirilmesi, yerli teknoloji ve üretim kabiliyetlerinin yüzde 50'nin üzerine çıkarılması ve teknoloji olgunluk seviyesinin ilk dört yılda TRL 7 seviyesine taşınmasının hedeflendiği belirtildi. Bu haber doğrudan kısa vadeli ciro etkisi açıklamasa da şirketin yüksek teknoloji ve enerji altyapısı alanında uzun vadeli konumlanması açısından dikkat çekiyor.",
  },
  {
    baslik: "DCT Trading (DCTTR)",
    kapLink: "https://www.kap.org.tr/tr/Bildirim/1617977",
    metin:
      "DCT Trading, Endonezya ve Güney Kore'de yerleşik iki farklı alıcıya toplam 1,37 milyon ABD doları tutarında Türk pamuğu ihracatı için satış sözleşmesi imzaladığını duyurdu. Güney Kore'ye yapılan satışın şirketin bu ülkeye ilk satışı olması ayrıca dikkat çekiyor. Tutar çok büyük olmasa da yeni pazar açılımı ve ihracat bağlantısı açısından takip edilebilir bir KAP bildirimi olarak öne çıkıyor.",
  },
  {
    baslik: "BİM Mağazalar (BIMAS)",
    kapLink: "https://www.kap.org.tr/tr/Bildirim/1618009",
    metin:
      "BİM, çoğunluk payına sahip olacak şekilde bağlı ortaklıklarıyla kurulması planlanan Dost Katılım Bankası A.Ş. için BDDK tarafından kuruluş izni verildiğini açıkladı. Bankanın 10 milyar TL kuruluş sermayesiyle kurulmasına izin verilmesi, BİM'in perakende dışı finansal hizmetler tarafında önemli bir yeni alana adım attığını gösteriyor. Bu gelişme, şirketin ekosistemini genişletme potansiyeli nedeniyle klasik operasyonel haberlerden daha stratejik bir başlık olarak değerlendirilebilir.",
  },
  {
    baslik: "Garanti Yatırım Ortaklığı (GRNYO)",
    kapLink: "https://www.kap.org.tr/tr/Bildirim/1618014",
    metin:
      "Garanti Yatırım Ortaklığı, paylarının Borsa İstanbul'da oluşan ağırlıklı ortalama fiyatının pay başına net aktif değerinin iki katını aşmasına ilişkin açıklama yaptı. Bu tür bildirimler doğrudan yeni iş ya da yatırım haberi değildir; ancak yatırım ortaklıklarında fiyat ile net aktif değer arasındaki makasın yatırımcılar tarafından dikkatle izlenmesi gerekir. Bu nedenle haber sayfasında kısa uyarı niteliğinde yer verilmesi uygun olabilir.",
  },
  {
    baslik: "Tureks Turunç Madencilik (MARBL)",
    kapLink: "https://www.kap.org.tr/tr/Bildirim/1618034",
    metin:
      "Tureks Turunç Madencilik, Kuveyt'te yerleşik bir firma ile AVM ve otel projesi kapsamında mermer tedarik anlaşması yaptığını açıkladı. Sipariş tutarı 310.797 ABD doları olarak duyuruldu. Tutar şirket ölçeğine göre sınırlı olsa da ihracat bağlantısı, proje bazlı satış ve Orta Doğu pazarındaki müşteri ilişkileri açısından izlenebilir. Bu haber büyük ölçekli bir ciro etkisi yaratmasa da yeni iş ilişkisi olması nedeniyle günlük KAP özetine alınabilir.",
  },
  {
    baslik: "Netaş Telekomünikasyon (NETAS)",
    kapLink: "https://www.kap.org.tr/tr/Bildirim/1618038",
    metin:
      "Netaş, Türkiye'nin önde gelen telekom operatörlerinden birinden toplam 8.979.959 ABD doları tutarında set üstü kutusu siparişi aldığını açıkladı. Teslimatların 2026 yılında yapılacağı ve satış sonrası destek hizmetlerinin de Netaş tarafından sağlanacağı belirtildi. Döviz bazlı sipariş büyüklüğü ve teslimat takviminin net olması nedeniyle bu açıklama şirketin 2026 gelirlerine katkı sağlayabilecek önemli KAP haberleri arasında yer alıyor.",
  },
  {
    baslik: "Marka Yatırım Holding (MARKA)",
    kapLink: "https://www.kap.org.tr/tr/Bildirim/1618058",
    metin:
      "Marka Yatırım Holding, yüzde 100 bağlı ortaklığı Momentum Girişim Holding'in endüstriyel kimyasallar alanında faaliyet gösteren bir girişim şirketi ile iyi niyet ve gizlilik sözleşmesi imzaladığını açıkladı. Görüşmeler erken aşama yatırım, doğrudan ortaklık veya stratejik iş birliği ihtimallerini kapsıyor. Henüz kesinleşmiş bir yatırım kararı olmadığı için haberin etkisi sınırlı değerlendirilmeli; ancak olası yeni faaliyet alanı ve girişim yatırımı ihtimali nedeniyle takip listesine alınabilir.",
  },
  {
    baslik: "IC Enterra Yenilenebilir Enerji (ENTRA)",
    kapLink: "https://www.kap.org.tr/tr/Bildirim/1618075",
    metin:
      "IC Enterra, sermaye artırımı sürecinde rüçhan haklarının kullanılmasının ardından kalan payların borsada satışının tamamlandığını açıkladı. Şirket sermayesinin 1,845 milyar TL'den 4,040 milyar TL'ye ulaşması hedeflenen süreçte bu bildirim teknik olarak sermaye artırımı takviminin ilerlediğini gösteriyor. Yeni bir yatırım haberi olmasa da sermaye yapısını ilgilendirdiği için yatırımcı açısından izlenmesi gereken başlıklardan biri.",
  },
  {
    baslik: "Smart Güneş Enerjisi (SMRTG)",
    kapLink: "https://www.kap.org.tr/tr/Bildirim/1618237",
    metin:
      "Smart Güneş Enerjisi'nin bağlı ortaklığı, yurt içinde yerleşik bir firma ile depolamalı güneş enerjisi santrali projesi kapsamında anahtar teslim mühendislik, tedarik ve kurulum sözleşmesi imzaladı. Sözleşme tutarı vergiler hariç 13.358.250 ABD doları olarak açıklandı. Depolamalı GES tarafındaki bu büyüklükteki iş ilişkisi, şirketin yenilenebilir enerji ve depolama alanındaki faaliyetlerine ciro ve kârlılık katkısı sağlayabilecek önemli bir gelişme olarak değerlendirilebilir.",
  },
  {
    baslik: "Gersan Elektrik (GEREL)",
    kapLink: "https://www.kap.org.tr/tr/Bildirim/1618285",
    metin:
      "Gersan Elektrik, Dubai'de yerleşik China State Construction Engineering Corporation Middle East ile Dubai Island - Blue Water Dubai projesi için busbar ve ilişkili ekipman tedarik sözleşmesi imzaladı. Sipariş tutarı yaklaşık 10,66 milyon AED olarak açıklandı. Yurt dışı proje bağlantısı ve üretim sürecinin başlamış olması nedeniyle bu haber şirketin ihracat ve proje bazlı gelirleri açısından pozitif izlenebilir.",
  },
  {
    baslik: "Şişecam (SISE)",
    kapLink: "https://www.kap.org.tr/tr/Bildirim/1618334",
    metin:
      "Şişecam, Mersin Tarsus'taki 7 milyon metrekare/yıl brüt üretim kapasiteli kaplamalı cam hattı yatırımının tamamlanarak devreye alındığını açıkladı. Bu yatırım ile Şişecam'ın Türkiye'deki kaplamalı cam hattı sayısı üçe, yerleşik kaplamalı cam üretim kapasitesi ise 21 milyon metrekare/yıla çıktı. Kaplamalı cam talebinin karşılanması, ürün çeşitliliğinin artırılması ve operasyonel verimliliğin güçlenmesi açısından bu bildirim günün önemli sanayi yatırımı haberlerinden biri oldu.",
  },
  {
    baslik: "Girişim Elektrik (GESAN)",
    kapLink: "https://www.kap.org.tr/tr/Bildirim/1618338",
    metin:
      "Girişim Elektrik'te bazı ortakların, şirket sermayesinin yaklaşık yüzde 6'sını temsil eden paylar için kurumsal yatırımcılara yönelik hızlandırılmış talep toplama sürecini başlattığı açıklandı. İşlem başarıyla tamamlanırsa ilgili ortakların Girişim Elektrik'teki doğrudan pay sahipliği oranının yaklaşık yüzde 57,81 seviyesine gerilemesi bekleniyor. Şirketin doğrudan satış geliri elde etmeyecek olması önemli bir not; ancak halka açıklık, ortak satışları ve kurumsal yatırımcı ilgisi açısından bu bildirim yatırımcılar tarafından yakından izlenmeli.",
  },
  {
    baslik: "Europower Enerji (EUPWR)",
    kapLink: "https://www.kap.org.tr/tr/Bildirim/1618339",
    metin:
      "Europower Enerji tarafında da kurumsal yatırımcılara yönelik hızlandırılmış talep toplama süreci açıklandı. Açıklamada satıştan elde edilecek gelirlerden 1,25 milyar TL tutarında, etkin yüzde 0 faiz oranlı ve enflasyona endeksli ortak borcunun Europower'a sağlanmasının planlandığı belirtildi. Şirket bu kaynağı güç transformatörü segmentinde işletme sermayesini güçlendirmek ve transformatör fabrikasının kapasite artışını hızlandırmak için kullanmayı hedefliyor. Bu nedenle bildirim sadece ortak satışı değil, aynı zamanda şirket finansmanı ve kapasite artışı açısından da önem taşıyor.",
  },
  {
    baslik: "Mistral GYO (MRGYO)",
    kapLink: "https://www.kap.org.tr/tr/Bildirim/1618344",
    metin:
      "Mistral GYO, bedelli sermaye artırımı ve esas sözleşme değişikliğinin tescil edildiğini açıkladı. Şirket sermayesinin 1.090.980.000 TL'den 2.400.156.000 TL'ye çıkarılması sürecinde tescil aşamasına gelinmesi, sermaye artırımı sürecinin tamamlanması açısından önemli. Bu haber doğrudan operasyonel büyüme anlamına gelmese de şirketin sermaye yapısındaki değişim nedeniyle yatırımcı tarafından takip edilmeli.",
  },
  {
    baslik: "Banvit (BANVT)",
    kapLink: "https://www.kap.org.tr/tr/Bildirim/1618352",
    metin:
      "Banvit, İstanbul Cumhuriyet Başsavcılığı tarafından başlatılan soruşturma kapsamında şirket hakkında uygulanan denetim kayyımlığı tedbirine yapılan itirazın kabul edildiğini ve tedbir kararının kaldırıldığını açıkladı. Bu gelişme, şirket üzerindeki hukuki ve yönetsel belirsizliğin azalması açısından önemli. Haber veya söylentilere ilişkin açıklama formatında gelmiş olsa da içeriği nedeniyle günün dikkat çeken KAP bildirimleri arasında yer alıyor.",
  },
  {
    baslik: "Türkiye İş Bankası (ISCTR)",
    kapLink: "https://www.kap.org.tr/tr/Bildirim/1618359",
    metin:
      "İş Bankası, kredi riskine esas tutarın Temmuz 2026 raporlama döneminden itibaren İçsel Derecelendirmeye Dayalı Yaklaşım ile belirlenmesinin BDDK tarafından uygun bulunduğunu açıkladı. Banka, Mart 2026 verileri üzerinden bu yaklaşım kullanılsaydı solo çekirdek sermaye yeterliliği oranında 190 baz puan, konsolide çekirdek sermaye yeterliliği oranında 130 baz puan olumlu etki oluşacağını belirtti. Sermaye yeterliliği üzerinde olumlu etki yaratması nedeniyle bu bildirim bankacılık sektörü açısından günün önemli başlıklarından biri.",
  },
  {
    baslik: "Pegasus (PGSUS)",
    kapLink: "https://www.kap.org.tr/tr/Bildirim/1618360",
    metin:
      "Pegasus, S&P Global Ratings'in şirketin uzun vadeli kredi derecelendirme notunu B+ olarak teyit ettiğini, kredi görünümünü ise durağandan negatife çevirdiğini açıkladı. Yurt dışında ihraç edilen tahvillere ilişkin uzun vadeli kredi notu da B+ seviyesinde teyit edildi. Notun korunması olumlu görünse de görünümün negatife çevrilmesi finansman koşulları ve risk algısı açısından yakından takip edilmesi gereken bir unsur olarak öne çıkıyor.",
  },
  {
    baslik: "Duran Doğan Basım ve Ambalaj (DURDO)",
    kapLink: "https://www.kap.org.tr/tr/Bildirim/1618371",
    metin:
      "Duran Doğan, ofset baskı kapasitesini artırmak amacıyla Almanya menşeli yüksek kapasiteli tabaka ofset baskı makinesi alımı kararı aldığını açıkladı. Toplam alım bedeli 4,1 milyon Euro olarak duyuruldu. İşlem bedelinin şirketin son yıllık hasılatına oranı yüzde 8,60, ödenmiş sermayeye oranı ise yüzde 44,06 seviyesinde. Şirket, yatırımın üretim hızını artırmasını, teslim sürelerini kısaltmasını, birim maliyetleri optimize etmesini ve ürün kalitesinde sürdürülebilir iyileşme sağlamasını hedefliyor. Bu nedenle günün en net kapasite artırımı ve yatırım haberlerinden biri olarak öne çıkıyor.",
  },
  {
    baslik: "Günün Öne Çıkan Pozitif Başlıkları",
    kapLink: "https://www.kap.org.tr/tr/Bildirim/1618371",
    metin:
      "17 Haziran 2026 KAP gündeminde yatırım ve yeni iş ilişkisi tarafında DURDO'nun 4,1 milyon Euro'luk ofset baskı makinesi yatırımı, SMRTG'nin 13,36 milyon dolarlık depolamalı GES sözleşmesi, NETAS'ın 8,98 milyon dolarlık siparişi, GEREL'in Dubai projesi için aldığı sipariş ve SISE'nin Tarsus kaplamalı cam hattını devreye alması öne çıktı. BIMAS tarafındaki Dost Katılım Bankası kuruluş izni ise stratejik dönüşüm başlığı olarak ayrıca dikkat çekti.",
  },
  {
    baslik: "Yakından Takip Edilecek Bildirimler",
    kapLink: "https://www.kap.org.tr/tr/Bildirim/1618338",
    metin:
      "GESAN ve EUPWR tarafındaki hızlandırılmış talep toplama süreçleri, ortak satışları ve şirketlere sağlanacak olası kaynak kullanımı nedeniyle yakından izlenmeli. PGSUS'ta S&P'nin görünümü negatife çevirmesi, ISCTR'de sermaye yeterliliği oranlarına olumlu etki yaratacak yeni yaklaşım ve BANVT'te denetim kayyımlığı tedbirinin kaldırılması da piyasa algısı açısından takip edilmesi gereken başlıklar arasında yer aldı.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "17 Haziran KAP: MIATK, DCTTR, BIMAS ve GRNYO Öne Çıktı",
  description:
    "MIATK, DCTTR, BIMAS, GRNYO ve diğer şirketlerin 17 Haziran KAP bildirimlerinde öne çıkan gelişmeler ve olası etkiler.",
  datePublished: "2026-06-17T09:00:00+03:00",
  dateModified: "2026-06-17T21:00:00+03:00",
  url: "https://www.hocaileborsa.com/haber/17-haziran-2026-onemli-kap-haberleri",
  author: {
    "@type": "Person",
    "@id": "https://www.hocaileborsa.com/yazar/erman-hoca#person",
    name: "Erman Hoca",
    url: "https://www.hocaileborsa.com/yazar/erman-hoca",
  },
  publisher: {
    "@type": "Organization",
    "@id": "https://www.hocaileborsa.com/#organization",
    name: "Hoca İle Borsa",
    url: "https://www.hocaileborsa.com",
    logo: {
      "@type": "ImageObject",
      url: "https://www.hocaileborsa.com/icon-512.png",
    },
  },
  image: "https://www.hocaileborsa.com/kap-ozeti-discover.webp",
  inLanguage: "tr",
};

export default function HaberKapOzetiPage() {
  return (
    <main className="min-h-screen bg-[#f8fafc] px-4 py-6 md:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="mx-auto max-w-4xl">
        <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_2px_16px_rgba(15,23,42,0.07)]">
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-zinc-100">
            <Image
              src="/kap-ozeti-discover.webp"
              alt="17 Haziran KAP: MIATK, DCTTR, BIMAS ve GRNYO Öne Çıktı"
              fill

              sizes="(min-width: 1024px) 896px, 100vw"
className="object-cover"
            />
          </div>

          <div className="p-6 md:p-10">
            <h1 className="text-2xl font-bold leading-tight tracking-tight text-slate-900 md:text-3xl lg:text-4xl">
              17 Haziran KAP: MIATK, DCTTR, BIMAS ve GRNYO Öne Çıktı
            </h1>

            <div className="mb-4 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center rounded-md bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700 ring-1 ring-inset ring-blue-600/20">
                Finans
              </span>
              <time dateTime="2026-06-17" className="text-sm text-slate-500">
                17 Haziran 2026
              </time>
              <span className="text-slate-300">·</span>
              <Link
                href="/yazar/erman-hoca"
                className="text-sm font-semibold text-slate-500 hover:text-blue-600"
              >
                Erman Hoca
              </Link>
            </div>

            <div className="mt-6 space-y-6 text-base leading-8 text-slate-700 md:text-lg">
              <p>
                Borsa İstanbul’da 17 Haziran 2026 Çarşamba günü KAP’a düşen
                önemli bildirimlerde yeni iş ilişkileri, kapasite artırımı
                yatırımları, bankacılık ve kredi derecelendirme gelişmeleri,
                sermaye artırımı süreçleri, ortak pay satışları ve stratejik iş
                birlikleri öne çıktı. Günün en dikkat çeken başlıkları arasında
                DURDO’nun yatırım kararı, SMRTG’nin depolamalı GES sözleşmesi,
                SISE’nin kaplamalı cam hattı yatırımı, BIMAS’ın katılım bankası
                kuruluş izni ve GESAN-EUPWR tarafındaki hızlandırılmış talep
                toplama süreci yer aldı.
              </p>

              <div className="space-y-5">
                {kapHaberleri.map((haber) => (
                  <section
                    key={haber.baslik}
                    className="rounded-xl border border-slate-200 bg-slate-50 p-4"
                  >
                    <h2 className="text-base font-semibold text-slate-800">
                      {haber.baslik}
                    </h2>
                    <p className="mt-1.5 text-sm text-slate-600 leading-relaxed">
                      {haber.metin}
                    </p>
                    <a
                      href={haber.kapLink}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="mt-3 inline-flex text-sm font-medium text-slate-500 underline underline-offset-2 transition hover:text-slate-700"
                    >
                      Orijinal KAP bildirimi
                    </a>
                    <KapCardLinks baslik={haber.baslik} />
                  </section>
                ))}
              </div>

              <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm font-medium leading-7 text-emerald-900 md:text-base">
                Günün en güçlü operasyonel başlıkları DURDO, SMRTG, NETAS,
                GEREL ve SISE tarafında geldi. BIMAS’ın Dost Katılım Bankası
                kuruluş izni stratejik bir gelişme olurken, ISCTR’nin sermaye
                yeterliliğine olumlu etki yaratacak yeni yaklaşımı ve BANVT’te
                denetim kayyımlığı tedbirinin kaldırılması finansal ve hukuki
                tarafta öne çıktı.
              </div>
              <HaberIlgiliBolumler
                slug="17-haziran-2026-onemli-kap-haberleri"
                baslik="17 Haziran KAP: MIATK, DCTTR, BIMAS ve GRNYO Öne Çıktı"
              />

              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm font-medium leading-7 text-amber-900 md:text-base">
                ⚠️ Bu özet bilgilendirme amaçlıdır, yatırım tavsiyesi değildir.
              </div>
            </div>
          </div>
          <HaberAltKisim href="/haber/17-haziran-2026-onemli-kap-haberleri" />

          <AuthorBox />
        </article>
      </div>
    </main>
  );
}
