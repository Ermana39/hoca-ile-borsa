import { seoAciklamasi } from "@/lib/seo-metadata";
import Image from "next/image";
import Link from "@/components/NoPrefetchLink";
import type { Metadata } from "next";
import HaberIlgiliBolumler from "@/components/HaberIlgiliBolumler";
import AuthorBox from "@/components/AuthorBox";
import HaberAltKisim from "@/components/HaberAltKisim";
import KapCardLinks from "@/components/KapCardLinks";

export const metadata: Metadata = {
  title: "19 Haziran KAP: BOBET, MANAS, TOASO ve ANELE Öne Çıktı",
  description:
    seoAciklamasi("BOBET, MANAS, TOASO, ANELE ve diğer şirketlerin 19 Haziran KAP bildirimlerinde öne çıkan gelişmeler ve olası etkiler.", "Haberde gelişmenin ayrıntıları, açıklanan veriler ve yatırımcıların izleyebileceği temel noktalar yer alıyor."),
  alternates: {
    canonical:
      "https://www.hocaileborsa.com/haber/19-haziran-2026-onemli-kap-haberleri",
  },
  openGraph: {
    type: "article",
    title: "19 Haziran KAP: BOBET, MANAS, TOASO ve ANELE Öne Çıktı",
    description:
      "BOBET, MANAS, TOASO, ANELE ve diğer şirketlerin 19 Haziran KAP bildirimlerinde öne çıkan gelişmeler ve olası etkiler.",
    images: [{ url: "https://www.hocaileborsa.com/kap-ozeti-discover.webp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "19 Haziran KAP: BOBET, MANAS, TOASO ve ANELE Öne Çıktı",
    description:
      "BOBET, MANAS, TOASO, ANELE ve diğer şirketlerin 19 Haziran KAP bildirimlerinde öne çıkan gelişmeler ve olası etkiler.",
    images: ["https://www.hocaileborsa.com/kap-ozeti-discover.webp"],
  },
};

const kapHaberleri = [
  {
    baslik: "Boğaziçi Beton (BOBET)",
    kapLink: "https://www.kap.org.tr/tr/Bildirim/1618902",
    metin:
      "Boğaziçi Beton, Mesa Yenikent projesi kapsamında hazır beton üretimi ve tedariğine yönelik yeni iş ilişkisi açıkladı. Yaklaşık 1,35 milyar TL büyüklüğündeki sözleşme, tutar ölçeği ve proje bazlı gelir katkısı nedeniyle günün en güçlü operasyonel KAP haberlerinden biri oldu. Hazır beton tarafında büyük ölçekli proje bağlantıları şirketin üretim hacmi ve satış görünürlüğü açısından önemli olduğu için bildirim haber sayfasına alınmaya değer.",
  },
  {
    baslik: "Manas Enerji Yönetimi (MANAS)",
    kapLink: "https://www.kap.org.tr/tr/Bildirim/1619051",
    metin:
      "Manas Enerji, ASKİ ihalesine ilişkin sonuç açıklaması yaptı. Şirket payına düşen tutarın 523,2 milyon TL + KDV seviyesinde olduğu bildirildi. İhale büyüklüğünün şirket ölçeği açısından dikkat çekici olması nedeniyle bu bildirim doğrudan ciro potansiyeli taşıyan önemli KAP haberleri arasında yer aldı. İhale sürecinin sözleşmeye dönüşmesi ve teslimat takvimi sonraki dönemlerde ayrıca izlenmeli.",
  },
  {
    baslik: "Tofaş (TOASO)",
    kapLink: "https://www.kap.org.tr/tr/Bildirim/1619123",
    metin:
      "Tofaş, Bursa fabrikasındaki yıllık araç üretim kapasitesinin artırıldığını açıkladı. Açıklamada üretim kapasitesinin 50 bin adet artışla 500 bin adet seviyesine yükseldiği belirtildi. Kapasite artışı, şirketin üretim esnekliği ve yeni dönem araç projelerine hazırlığı açısından önemli. Otomotiv sektöründe kapasite kararları doğrudan operasyonel görünümle ilişkili olduğu için TOASO bildirimi günün öne çıkan sanayi haberlerinden biri oldu.",
  },
  {
    baslik: "Anel Elektrik (ANELE)",
    kapLink: "https://www.kap.org.tr/tr/Bildirim/1619130",
    metin:
      "Anel Elektrik, Anel Yapı İş Merkezi'nin Akbank ve DenizBank'a satış işleminin tamamlandığını ve tapu devrinin gerçekleştiğini açıkladı. Toplam satış bedeli yaklaşık 2,55 milyar TL olarak duyuruldu. Şirketin bilanço ve borçluluk yapısı açısından yüksek tutarlı varlık satışları önem taşır. Bu nedenle açıklama, sadece gayrimenkul devri değil finansal yapı üzerindeki etkisi nedeniyle de yakından takip edilmesi gereken bir KAP bildirimi oldu.",
  },
  {
    baslik: "Kordsa (KORDS)",
    kapLink: "https://www.kap.org.tr/tr/Bildirim/1619071",
    metin:
      "Kordsa, Kocaeli İzmit'te şirket mülkiyetinde bulunan iki adet taşınmazın satışına ilişkin açıklama yaptı. Satış bedelinin 800 milyon TL seviyesinde olduğu bildirildi. Maddi duran varlık satışları, nakit yaratma ve portföy optimizasyonu açısından yatırımcıların takip ettiği başlıklardandır. Bu işlem şirketin ana operasyonlarından bağımsız olsa da tutar büyüklüğü nedeniyle günün önemli KAP haberleri arasında değerlendirilebilir.",
  },
  {
    baslik: "Arçelik (ARCLK)",
    kapLink: "https://www.kap.org.tr/tr/Bildirim/1618805",
    metin:
      "Arçelik, IHP Appliances satın alma sürecine ilişkin yükümlülükler hakkında açıklama yaptı. Açıklamada 40 milyon Euro tutarında nakit ödeme ile ilgili yükümlülüğün sonlandırılacağı belirtildi. Bu haber, satın alma sonrası finansal yükümlülüklerin netleşmesi ve nakit çıkışı yaratması nedeniyle önemli. Kısa vadede bilanço ve nakit akışı üzerindeki etkisi, şirketin sonraki finansal sonuçlarında takip edilmeli.",
  },
  {
    baslik: "Göknur Gıda (GOKNR)",
    kapLink: "https://www.kap.org.tr/tr/Bildirim/1619076",
    metin:
      "Göknur Gıda, Kazakistan'daki meyve konsantresi ve püre tesisi yatırımına ilişkin yeni iş ilişkisi / yatırım süreci açıklaması yaptı. Şirketin yurt dışı üretim ve satış ağına yönelik bu adımı, ihracat ve uluslararası operasyon kapasitesi açısından dikkat çekiyor. Açıklamada yatırımın şirket kârlılığına katkı sağlamasının beklendiği belirtilirken, katkının büyüklüğü ilerleyen dönemlerde faaliyet sonuçlarıyla daha net görülecek.",
  },
  {
    baslik: "Europower Enerji (EUPWR)",
    kapLink: "https://www.kap.org.tr/tr/Bildirim/1618962",
    metin:
      "Europower Enerji, Başkent EDAŞ ihalesi kapsamında yaklaşık 2,98 milyon ABD doları tutarında sözleşme daveti aldığını açıkladı. Enerji ekipmanları ve elektrik dağıtım altyapısı tarafındaki bu tür siparişler şirketin iş hacmi açısından önem taşıyor. Tutar, önceki büyük projelere kıyasla sınırlı olsa da döviz bazlı gelir niteliği ve kamu/dağıtım altyapısı bağlantısı nedeniyle haber değeri taşıyor.",
  },
  {
    baslik: "Tuğçelik Alüminyum (TUCLK)",
    kapLink: "https://www.kap.org.tr/tr/Bildirim/1619093",
    metin:
      "Tuğçelik Alüminyum, tahsisli satış yöntemiyle bedelli sermaye artırımı kararı hakkında açıklama yaptı. Hakim ortak Nersan Holding alacağına mahsup edilmek üzere yapılacak sermaye artırımı, şirketin finansal yapısını ve ortaklık ilişkilerini doğrudan ilgilendiriyor. Operasyonel büyüme haberi olmamakla birlikte, sermaye yapısında yaratacağı etki nedeniyle yatırımcı açısından takip edilmesi gereken bir bildirim.",
  },
  {
    baslik: "Borusan Birleşik Boru (BRSAN)",
    kapLink: "https://www.kap.org.tr/tr/Bildirim/1619133",
    metin:
      "Borusan Birleşik Boru, Gemlik büyük çaplı boru üretim tesisine ilişkin açıklama yaptı. Şirket, mevcut ekipmanların ihtiyaçlar doğrultusunda kullanılmaya devam edeceğini ve ABD Mobile tesisinde kullanım ihtimalinin değerlendirildiğini duyurdu. Bu açıklama doğrudan yeni bir sipariş veya satış geliri yaratmasa da üretim altyapısı, kapasite kullanımı ve yurt dışı tesis stratejisi açısından izlenmesi gereken bir başlık.",
  },
  {
    baslik: "Alarko Holding (ALARK)",
    kapLink: "https://www.kap.org.tr/tr/Bildirim/1619118",
    metin:
      "Alarko Holding, bağlı ortaklığı Alyat Teknoloji Yatırımları Holding A.Ş. tarafından kurulan yeni şirketin tesciline ilişkin açıklama yaptı. Yeni şirket yapılanması, grubun teknoloji ve yatırım tarafındaki organizasyonunu genişletmesi açısından takip edilebilir. Tutar veya doğrudan ciro etkisi açıklanmadığı için haberin etkisi sınırlı görülmeli; ancak Alarko'nun yeni faaliyet alanlarına yönelik stratejik yapılanması bakımından kısa not olarak sayfaya alınabilir.",
  },
  {
    baslik: "Kütahya Porselen (KUTPO)",
    kapLink: "https://www.kap.org.tr/tr/Bildirim/1619107",
    metin:
      "Kütahya Porselen, Kütahya ilinde yeni şirket kurulumu kapsamında finansal duran varlık edinimi bildirimi yaptı. Yeni şirket kurulumu tek başına büyük bir finansal etki anlamına gelmese de grup yapılanması ve gelecekteki yatırım planları açısından takip edilebilir. Bu nedenle haber, günün ana başlıkları kadar güçlü olmasa da kısa değerlendirme olarak önemli KAP özetinde yer alabilir.",
  },
  {
    baslik: "Günün Öne Çıkan Pozitif Başlıkları",
    kapLink: "https://www.kap.org.tr/tr/Bildirim/1618902",
    metin:
      "19 Haziran KAP gündeminde en güçlü operasyonel haberler BOBET'in 1,35 milyar TL büyüklüğündeki yeni iş ilişkisi, MANAS'ın 523,2 milyon TL + KDV tutarındaki ihale sonucu, TOASO'nun üretim kapasitesi artışı ve EUPWR'nin Başkent EDAŞ sözleşme daveti oldu. ANELE ve KORDS tarafındaki yüksek tutarlı varlık satışları ise şirketlerin finansal yapılarına etkisi nedeniyle öne çıktı.",
  },
  {
    baslik: "Yakından Takip Edilecek Bildirimler",
    kapLink: "https://www.kap.org.tr/tr/Bildirim/1619130",
    metin:
      "ANELE'de 2,55 milyar TL seviyesindeki varlık satışının borçluluk ve nakit akışı üzerindeki etkisi, KORDS'ta taşınmaz satışının bilanço katkısı, ARCLK'te 40 milyon Euro nakit ödeme ile sonuçlanacak yükümlülük ve TUCLK tarafındaki tahsisli sermaye artırımı süreci yakından izlenmeli. GOKNR ve ALARK açıklamaları ise orta vadeli stratejik konumlanma açısından takip edilecek başlıklar arasında yer aldı.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "19 Haziran KAP: BOBET, MANAS, TOASO ve ANELE Öne Çıktı",
  description:
    "BOBET, MANAS, TOASO, ANELE ve diğer şirketlerin 19 Haziran KAP bildirimlerinde öne çıkan gelişmeler ve olası etkiler.",
  datePublished: "2026-06-19T09:00:00+03:00",
  dateModified: "2026-06-19T22:30:00+03:00",
  url: "https://www.hocaileborsa.com/haber/19-haziran-2026-onemli-kap-haberleri",
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
              alt="19 Haziran KAP: BOBET, MANAS, TOASO ve ANELE Öne Çıktı"
              fill

              sizes="(min-width: 1024px) 896px, 100vw"
className="object-cover"
            />
          </div>

          <div className="p-6 md:p-10">
            <h1 className="text-2xl font-bold leading-tight tracking-tight text-slate-900 md:text-3xl lg:text-4xl">
              19 Haziran KAP: BOBET, MANAS, TOASO ve ANELE Öne Çıktı
            </h1>

            <div className="mb-4 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center rounded-md bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700 ring-1 ring-inset ring-blue-600/20">
                Finans
              </span>
              <time dateTime="2026-06-19" className="text-sm text-slate-500">
                19 Haziran 2026
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
                Borsa İstanbul’da 19 Haziran 2026 Cuma günü KAP’a düşen önemli
                bildirimlerde yeni iş ilişkileri, ihale sonuçları, kapasite
                artışı, yüksek tutarlı varlık satışları, sermaye artırımı
                süreçleri ve stratejik şirket yapılanmaları öne çıktı. Günün en
                dikkat çeken başlıkları arasında BOBET’in büyük ölçekli hazır
                beton sözleşmesi, MANAS’ın ASKİ ihale sonucu, TOASO’nun üretim
                kapasitesi artışı, ANELE ve KORDS tarafındaki varlık satışları
                ile EUPWR’nin sözleşme daveti yer aldı.
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
                Günün en güçlü başlıkları BOBET’in yeni iş ilişkisi, MANAS’ın
                yüksek tutarlı ihale sonucu, TOASO’nun kapasite artışı, ANELE ve
                KORDS tarafındaki varlık satışları ile EUPWR’nin sözleşme daveti
                oldu. ARCLK ve TUCLK açıklamaları ise finansal yükümlülük ve
                sermaye yapısı açısından takip edilmesi gereken başlıklar
                arasında yer aldı.
              </div>
              <HaberIlgiliBolumler
                slug="19-haziran-2026-onemli-kap-haberleri"
                baslik="19 Haziran KAP: BOBET, MANAS, TOASO ve ANELE Öne Çıktı"
              />

              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm font-medium leading-7 text-amber-900 md:text-base">
                ⚠️ Bu özet bilgilendirme amaçlıdır, yatırım tavsiyesi değildir.
              </div>
            </div>
          </div>
          <HaberAltKisim href="/haber/19-haziran-2026-onemli-kap-haberleri" />

          <AuthorBox />
        </article>
      </div>
    </main>
  );
}
