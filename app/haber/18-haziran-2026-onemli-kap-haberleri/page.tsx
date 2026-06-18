import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import HaberIlgiliBolumler from "@/components/HaberIlgiliBolumler";
import AuthorBox from "@/components/AuthorBox";
import HaberNavigasyon from "@/components/HaberNavigasyon";
import HaberAltBilgi from "@/components/HaberAltBilgi";

export const metadata: Metadata = {
  title: "18 Haziran 2026 Perşembe Önemli KAP Haberleri",
  description:
    "18 Haziran 2026 Perşembe günü KAP'a düşen önemli bildirimlerin özeti: GESAN ve EUPWR hızlandırılmış talep toplama fiyatlaması, SAHOL Akçansa pay satışı, GOODY üretim duruşu, HLGYO varlık satışı, KTLEV bedelsiz sermaye artırımı, ARZUM sermaye artırımı başvurusu, HALKB borçlanma aracı ihracı, MIATK dava süreci ve CCOLA kredi derecelendirmesi.",
  alternates: {
    canonical:
      "https://www.hocaileborsa.com/haber/18-haziran-2026-onemli-kap-haberleri",
  },
  openGraph: {
    type: "article",
    images: [{ url: "https://www.hocaileborsa.com/kap-ozeti-discover.webp" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.hocaileborsa.com/kap-ozeti-discover.webp"],
  },
};

const kapHaberleri = [
  {
    baslik: "Girişim Elektrik (GESAN)",
    kapLink: "https://www.kap.org.tr/tr/Bildirim/1618382",
    metin:
      "Girişim Elektrik'te kurumsal yatırımcılara yönelik hızlandırılmış talep toplama sürecinde fiyat belirlendi. Satan ortaklar tarafından şirket sermayesinin yaklaşık yüzde 7,5'ini temsil eden 34,5 milyon adet B grubu pay için pay başına fiyat 65,95 TL olarak açıklandı. İşlemde yaklaşık 2,27 milyar TL brüt gelir oluşması bekleniyor. Açıklamada fiyatın önceki kapanışa göre yaklaşık yüzde 15 iskonto içerdiği belirtildi. Bu bildirim, ortak satışı, halka açıklık oranı ve kurumsal yatırımcı talebi açısından günün en çok izlenmesi gereken başlıklarından biri oldu.",
  },
  {
    baslik: "Europower Enerji (EUPWR)",
    kapLink: "https://www.kap.org.tr/tr/Bildirim/1618383",
    metin:
      "Europower Enerji'de de hızlandırılmış talep toplama sürecinde fiyatlama tamamlandı. Şirket sermayesinin yaklaşık yüzde 8'ini temsil eden 52,8 milyon adet B grubu pay için pay başına fiyat 79,25 TL olarak belirlendi. İşlem kapsamında yaklaşık 4,18 milyar TL brüt gelir elde edilmesi bekleniyor. Bu açıklama, GESAN ile birlikte enerji ekipmanları tarafında ortak pay satışları ve halka açıklık oranındaki değişim nedeniyle yatırımcılar tarafından yakından takip edilmeli.",
  },
  {
    baslik: "Sabancı Holding / Akçansa (SAHOL / AKCNS)",
    kapLink: "https://www.kap.org.tr/tr/Bildirim/1618433",
    metin:
      "Sabancı Holding, Akçansa Çimento paylarının satış sürecinin tamamlandığını açıkladı. Satılan finansal duran varlık Akçansa Çimento Sanayi ve Ticaret A.Ş. payları olurken, satışın toplam tutarı 427,9 milyon ABD doları olarak duyuruldu. Satış sonrasında Sabancı Holding'in Akçansa'daki iştirak oranı sıfıra indi. Bu gelişme, Sabancı Holding'in portföy sadeleşmesi, nakit pozisyonu ve çimento sektöründeki ortaklık yapısı açısından önemli bir KAP bildirimi olarak öne çıktı.",
  },
  {
    baslik: "Link Bilgisayar (LINK)",
    kapLink: "https://www.kap.org.tr/tr/Bildirim/1618416",
    metin:
      "Link Bilgisayar ile ilgili olarak şirket ortağı İhsan Ünal tarafından gönderilen pay satış bilgi formu açıklaması KAP'ta yayımlandı. Açıklamaya göre, şirket sermayesinin yüzde 3'üne denk gelen 26.752.649 TL nominal değerli payın Borsa İstanbul'da satışı amacıyla hazırlanan pay satış bilgi formunun onaylanması talebi SPK tarafından olumsuz karşılandı. Bu haber doğrudan şirket operasyonlarına ilişkin olmasa da olası pay satışı beklentisinin gerçekleşmemesi nedeniyle hisse üzerindeki arz baskısı algısı açısından takip edilebilir.",
  },
  {
    baslik: "Goodyear Lastikleri (GOODY)",
    kapLink: "https://www.kap.org.tr/tr/Bildirim/1618571",
    metin:
      "Goodyear, İzmit fabrikasında lastik üretiminin 2 Temmuz 2026 ile 2 Ağustos 2026 tarihleri arasında geçici olarak durdurulacağını açıkladı. Duruşun nedeni envanter ayarlaması olarak belirtildi. Üretim faaliyetlerinin geçici olarak durdurulması, doğrudan operasyonel etki taşıdığı için günün önemli KAP haberleri arasında yer alıyor. Sürecin satışlara, stok yönetimine ve üretim planlamasına etkisi ilerleyen dönemde finansal sonuçlarda daha net görülecek.",
  },
  {
    baslik: "Halk GYO (HLGYO)",
    kapLink: "https://www.kap.org.tr/tr/Bildirim/1618769",
    metin:
      "Halk GYO, Kocaeli Dilovası'nda üzerinde proje geliştirilen arsanın C Blok satışına ilişkin açıklama yaptı. Satış bedeli 1,45 milyar TL + KDV olarak duyuruldu. Şirket, satış amacını borçlanma maliyetinin azaltılması ve yeni projelere kaynak sağlanması olarak açıkladı. Satış bedelinin büyüklüğü ve şirket finansmanına sağlayacağı katkı nedeniyle bu bildirim gayrimenkul yatırım ortaklıkları arasında günün öne çıkan haberlerinden biri oldu.",
  },
  {
    baslik: "Tuğçelik Alüminyum (TUCLK)",
    kapLink: "https://www.kap.org.tr/tr/Bildirim/1618739",
    metin:
      "Tuğçelik Alüminyum, bedelli sermaye artırımı sürecine ilişkin tescil ve ilan açıklaması yaptı. Şirket sermayesinin 180 milyon TL'den 360 milyon TL'ye çıkarılması sürecinde rüçhan hakkı kullanımı ve kalan paylara ilişkin bilgiler paylaşıldı. Sermaye artırımı şirketin kaynak yapısını ilgilendirdiği için yatırımcı açısından takip edilmesi gereken bir başlık. Haber operasyonel büyüme değil, sermaye yapısı ve finansman tarafındaki değişim açısından önem taşıyor.",
  },
  {
    baslik: "Katılımevim (KTLEV)",
    kapLink: "https://www.kap.org.tr/tr/Bildirim/1618718",
    metin:
      "Katılımevim, bedelsiz sermaye artırımı kararının revize edildiğini açıkladı. Şirketin mevcut 2,07 milyar TL olan sermayesinin 7 milyar TL'ye çıkarılması ve toplam bedelsiz pay alma oranının yüzde 238,16 olması planlanıyor. Yüksek oranlı bedelsiz sermaye artırımı piyasada yatırımcı ilgisini artırabilen başlıklardan biri olduğu için KTLEV bildirimi günün dikkat çeken KAP haberleri arasında yer aldı.",
  },
  {
    baslik: "Arzum Elektrikli Ev Aletleri (ARZUM)",
    kapLink: "https://www.kap.org.tr/tr/Bildirim/1618565",
    metin:
      "Arzum, sermaye artırımı başvurusuna ilişkin SPK sonucunu açıkladı. Şirketin 600 milyon TL olan çıkarılmış sermayesini, mevcut ortakların yeni pay alma hakları kısıtlanmadan ve nakden karşılanmak üzere 1,2 milyar TL'ye çıkarma başvurusunun SPK tarafından olumsuz karşılandığı belirtildi. Bu karar, beklenen sermaye artırımı sürecinin şu aşamada ilerlemeyeceğini göstermesi nedeniyle hisse açısından önemli bir gelişme olarak değerlendirilebilir.",
  },
  {
    baslik: "Coca-Cola İçecek (CCOLA)",
    kapLink: "https://www.kap.org.tr/tr/Bildirim/1618584",
    metin:
      "Coca-Cola İçecek, JCR Eurasia Rating tarafından kredi derecelendirme notlarının teyit edildiğini açıkladı. Şirketin uzun vadeli ulusal notu AAA (tr), kısa vadeli ulusal notu J1+ (tr) ve görünümü durağan olarak korundu. Ayrıca uluslararası yabancı ve yerel para cinsinden notlarının da Türkiye'nin ülke kredi notunun üzerinde olacak şekilde teyit edildiği bildirildi. Not teyidi, şirketin finansal gücü ve kredi profili açısından destekleyici bir başlık olarak izlenebilir.",
  },
  {
    baslik: "Türkiye Halk Bankası (HALKB)",
    kapLink: "https://www.kap.org.tr/tr/Bildirim/1618716",
    metin:
      "Halkbank, yurt dışında borçlanma araçları ihracına ilişkin SPK'ya başvuru yaptığını açıkladı. Banka, 5 milyar ABD dolarına kadar farklı tür ve vadelerde, bir veya birden fazla defada borçlanma aracı ihraç edebilmek için ihraç tavanı onayı başvurusunda bulundu. Bu bildirim, bankanın dış finansman kaynakları ve sermaye benzeri borçlanma imkanı açısından takip edilmesi gereken önemli finansman haberlerinden biri oldu.",
  },
  {
    baslik: "Mia Teknoloji (MIATK)",
    kapLink: "https://www.kap.org.tr/tr/Bildirim/1618724",
    metin:
      "Mia Teknoloji, kamu ihalelerine katılım yasağına ilişkin yargı sürecinde istinaf kararını açıkladı. Daha önce Ankara 13. İdare Mahkemesi tarafından verilen iptal kararına karşı İçişleri Bakanlığı'nın yaptığı istinaf başvurusu reddedildi. Şirket, kamu projeleri alanındaki faaliyetlerini sürdürmeye devam ettiğini belirtti. Bu gelişme, kamu ihalelerine erişim ve hukuki belirsizliklerin azalması açısından şirket lehine önemli bir haber olarak öne çıkıyor.",
  },
  {
    baslik: "Günün Öne Çıkan Başlıkları",
    kapLink: "https://www.kap.org.tr/tr/Bildirim/1618433",
    metin:
      "18 Haziran 2026 KAP gündeminde Sabancı Holding'in Akçansa pay satışını tamamlaması, GESAN ve EUPWR tarafında hızlandırılmış talep toplama fiyatlarının belirlenmesi, HLGYO'nun 1,45 milyar TL + KDV tutarındaki varlık satışı ve GOODY'nin İzmit fabrikasında geçici üretim duruşu en dikkat çeken başlıklar oldu. KTLEV'in yüksek oranlı bedelsiz sermaye artırımı revizesi ve ARZUM'un bedelli sermaye artırımı başvurusunun olumsuz sonuçlanması da sermaye işlemleri tarafında öne çıktı.",
  },
  {
    baslik: "Yakından Takip Edilecek Bildirimler",
    kapLink: "https://www.kap.org.tr/tr/Bildirim/1618382",
    metin:
      "GESAN ve EUPWR'de ortak pay satışları sonrası halka açıklık oranı ve fiyatlama etkisi, SAHOL'de Akçansa satışından gelecek nakdin portföy stratejisine etkisi, GOODY'de üretim duruşunun operasyonel sonuçlara yansıması ve MIATK'da kamu ihaleleriyle ilgili hukuki sürecin devamı yakından izlenmeli. HALKB'nin 5 milyar dolara kadar yurt dışı borçlanma aracı ihracı başvurusu da bankacılık sektörü açısından finansman tarafında takip edilecek gelişmeler arasında yer aldı.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "18 Haziran 2026 Perşembe Önemli KAP Haberleri",
  description:
    "18 Haziran 2026 Perşembe günü KAP'a düşen önemli bildirimlerin özeti: GESAN ve EUPWR hızlandırılmış talep toplama fiyatlaması, SAHOL Akçansa pay satışı, GOODY üretim duruşu, HLGYO varlık satışı, KTLEV bedelsiz sermaye artırımı, ARZUM sermaye artırımı başvurusu, HALKB borçlanma aracı ihracı, MIATK dava süreci ve CCOLA kredi derecelendirmesi.",
  datePublished: "2026-06-18T09:00:00+03:00",
  dateModified: "2026-06-18T21:00:00+03:00",
  url: "https://www.hocaileborsa.com/haber/18-haziran-2026-onemli-kap-haberleri",
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
        <nav
          className="mb-5 flex items-center gap-2 text-sm text-slate-500"
          aria-label="Breadcrumb"
        >
          <Link href="/" className="hover:text-blue-600 transition">
            Ana Sayfa
          </Link>
          <span className="text-slate-300">/</span>
          <span className="text-slate-700 font-medium">Haberler</span>
        </nav>

        <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_2px_16px_rgba(15,23,42,0.07)]">
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-zinc-100">
            <Image
              src="/kap-ozeti-discover.webp"
              alt="18 Haziran 2026 Perşembe Önemli KAP Haberleri"
              fill
              unoptimized
              className="object-cover"
            />
          </div>

          <div className="p-6 md:p-10">
            <h1 className="text-2xl font-bold leading-tight tracking-tight text-slate-900 md:text-3xl lg:text-4xl">
              18 Haziran 2026 Perşembe Önemli KAP Haberleri
            </h1>

            <div className="mb-4 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center rounded-md bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700 ring-1 ring-inset ring-blue-600/20">
                Finans
              </span>
              <time dateTime="2026-06-18" className="text-sm text-slate-500">
                18 Haziran 2026
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
                Borsa İstanbul’da 18 Haziran 2026 Perşembe günü KAP’a düşen
                önemli bildirimlerde ortak pay satışları, finansal duran varlık
                satışı, üretim duruşu, gayrimenkul varlık satışı, sermaye
                artırımı süreçleri, kredi derecelendirme açıklamaları,
                borçlanma aracı ihracı başvurusu ve hukuki süreçlere ilişkin
                gelişmeler öne çıktı. Günün en dikkat çeken başlıkları arasında
                GESAN ve EUPWR tarafındaki hızlandırılmış talep toplama
                fiyatlamaları, SAHOL’ün Akçansa satışını tamamlaması, GOODY’nin
                İzmit fabrikasında üretime geçici ara verecek olması ve
                HLGYO’nun yüksek tutarlı varlık satışı yer aldı.
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
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex text-sm font-semibold text-blue-600 hover:text-blue-700"
                    >
                      KAP bildirimini aç
                    </a>
                  </section>
                ))}
              </div>

              <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm font-medium leading-7 text-emerald-900 md:text-base">
                Günün en güçlü başlıkları SAHOL-AKCNS pay satışı, GESAN ve
                EUPWR’de kurumsal yatırımcılara yapılan pay satış fiyatlaması,
                GOODY’de geçici üretim duruşu, HLGYO’da yüksek tutarlı varlık
                satışı ve KTLEV’de yüksek oranlı bedelsiz sermaye artırımı
                revizesi oldu. ARZUM’un bedelli sermaye artırımı başvurusunun
                olumsuz sonuçlanması ise risk başlığı olarak izlenmeli.
              </div>
              <HaberIlgiliBolumler
                slug="18-haziran-2026-onemli-kap-haberleri"
                baslik="18 Haziran 2026 Perşembe Önemli KAP Haberleri"
              />

              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm font-medium leading-7 text-amber-900 md:text-base">
                ⚠️ Bu özet bilgilendirme amaçlıdır, yatırım tavsiyesi değildir.
              </div>
            </div>
          </div>
          <HaberAltBilgi href="/haber/18-haziran-2026-onemli-kap-haberleri" />

          <HaberNavigasyon href="/haber/18-haziran-2026-onemli-kap-haberleri" />

          <AuthorBox />
        </article>
      </div>
    </main>
  );
}
