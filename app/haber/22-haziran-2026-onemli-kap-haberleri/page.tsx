import Image from "next/image";
import Link from "@/components/NoPrefetchLink";
import type { Metadata } from "next";
import HaberIlgiliBolumler from "@/components/HaberIlgiliBolumler";
import AuthorBox from "@/components/AuthorBox";
import HaberAltKisim from "@/components/HaberAltKisim";
import KapCardLinks from "@/components/KapCardLinks";

export const metadata: Metadata = {
  title: "22 Haziran KAP: TCELL Finansman, ORGE Bedelsiz, HLGYO Artırım",
  description:
    "TCELL finansman gelişmesi, ORGE bedelsiz başvurusu, HLGYO sermaye artırımı kararı ve 22 Haziran KAP etkileri.",
  alternates: {
    canonical:
      "https://www.hocaileborsa.com/haber/22-haziran-2026-onemli-kap-haberleri",
  },
  openGraph: {
    type: "article",
    title: "22 Haziran KAP: TCELL Finansman, ORGE Bedelsiz, HLGYO Artırım",
    description:
      "TCELL finansman gelişmesi, ORGE bedelsiz başvurusu, HLGYO sermaye artırımı kararı ve 22 Haziran KAP etkileri.",
    images: [{ url: "https://www.hocaileborsa.com/kap-ozeti-discover.webp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "22 Haziran KAP: TCELL Finansman, ORGE Bedelsiz, HLGYO Artırım",
    description:
      "TCELL finansman gelişmesi, ORGE bedelsiz başvurusu, HLGYO sermaye artırımı kararı ve 22 Haziran KAP etkileri.",
    images: ["https://www.hocaileborsa.com/kap-ozeti-discover.webp"],
  },
};

const kapHaberleri = [
  {
    baslik: "Turkcell (TCELL)",
    kapLink: "https://www.kap.org.tr/tr/Bildirim/1619301",
    metin:
      "Turkcell, China Development Bank ile imzalanan uzun vadeli kredi paketinde ikinci dilimin 1,23 milyar RMB'den 700 milyon RMB'ye revize edildiğini açıkladı. Aynı bildirimde bu dilime ait masraflar dahil toplam yıllık sabit faiz oranının yüzde 4,98 seviyesinden yüzde 4,30 seviyesine güncellendiği, vade ve geri ödeme planında ise değişiklik olmadığı belirtildi. Tutarın aşağı çekilmesi borçlanma büyüklüğünü azaltırken faiz oranındaki düşüş finansman maliyeti açısından olumlu okunabilecek bir gelişme olarak öne çıktı.",
  },
  {
    baslik: "Turkcell (TCELL)",
    kapLink: "https://www.kap.org.tr/tr/Bildirim/1619362",
    metin:
      "Turkcell, yurt içinde 15 milyar TL'ye kadar borçlanma aracı ihracı için SPK onayı aldığını duyurdu. İhraç tavanının tahsisli veya nitelikli yatırımcıya satış yöntemiyle yurt içinde kullanılabileceği açıklandı. Bu bildirim, şirketin TL bazlı finansman kaynaklarını çeşitlendirmesi ve borçlanma araçları piyasasını aktif kullanması açısından takip edilmeli. Kredi paketindeki faiz revizyonu ile birlikte değerlendirildiğinde TCELL tarafında günün ana başlığı finansman maliyetleri ve borçlanma yönetimi oldu.",
  },
  {
    baslik: "ORGE Enerji (ORGE)",
    kapLink: "https://www.kap.org.tr/tr/Bildirim/1619472",
    metin:
      "ORGE Enerji, çıkarılmış sermayesinin 80 milyon TL'den 400 milyon TL'ye artırılması amacıyla yüzde 400 oranında bedelsiz sermaye artırımı için SPK'ya başvurduğunu açıkladı. Artırımın özsermaye enflasyon düzeltme farklarından karşılanacağı belirtildi. Bedelsiz sermaye artırımları şirketin piyasa fiyatlamasında yatırımcı ilgisini artırabilen başlıklardan biri olduğu için ORGE bildirimi günün öne çıkan sermaye işlemleri arasında yer aldı.",
  },
  {
    baslik: "Halk GYO (HLGYO)",
    kapLink: "https://www.kap.org.tr/tr/Bildirim/1619501",
    metin:
      "Halk GYO, 2025 yılı dönem kârından yapılacak bedelsiz sermaye artırımı kararını duyurdu. Şirket sermayesinin 3,84 milyar TL'den 6 milyar TL'ye çıkarılması ve toplam bedelsiz pay alma oranının yüzde 56,25 olması planlanıyor. Bedelsiz payların mevcut pay sahiplerine sermayeye iştirakleri oranında kayden dağıtılacağı belirtildi. Bu karar, hem kâr dağıtım politikası hem de sermaye yapısındaki değişim nedeniyle yatırımcılar tarafından yakından izlenecek başlıklardan biri oldu.",
  },
  {
    baslik: "BMS Birleşik Metal (BMSTL)",
    kapLink: "https://www.kap.org.tr/tr/Bildirim/1619331",
    metin:
      "BMSTL, bedelsiz sermaye artırımı başvuru sonucunu açıkladı. Şirketin mevcut 150 milyon TL olan sermayesinin yüzde 100 oranında artırılarak 300 milyon TL'ye çıkarılmasına ilişkin süreçte SPK onayı alındığı bildirildi. İç kaynaklardan karşılanacak bu artırım, şirketin sermaye yapısında doğrudan değişim yaratacağı için günün önemli sermaye artırımı haberleri arasında değerlendirilebilir.",
  },
  {
    baslik: "Zorlu Enerji (ZOREN)",
    kapLink: "https://www.kap.org.tr/tr/Bildirim/1619164",
    metin:
      "Zorlu Enerji, bağlı ortaklığı Zorlu Doğal Elektrik Üretimi A.Ş.'nin Kızıldere 2 Jeotermal Enerji Santrali'ne entegre olarak kurduğu 8,51136 MWm güneş enerjisi santralinde Bakanlık resmi kabulünün tamamlandığını ve ticari elektrik satışının başladığını açıkladı. Jeotermal santrale entegre yardımcı kaynak GES yatırımı, yenilenebilir üretim portföyünün verimliliği ve çeşitlenmesi açısından pozitif bir operasyonel gelişme olarak öne çıktı.",
  },
  {
    baslik: "CW Enerji (CWENE)",
    kapLink: "https://www.kap.org.tr/tr/Bildirim/1619423",
    metin:
      "CW Enerji, yüzde 100 bağlı ortaklığı CW Solar Cell Enerji A.Ş. bünyesindeki fotovoltaik güneş hücresi üretim yatırımına ilişkin güncelleme yaptı. HIT-30 Yüksek Teknoloji Yatırım Programı kapsamında yıllık 5 GW kapasiteye sahip güneş hücresi üretim yatırımına yönelik çalışmaların sürdüğü, Antalya OSB'deki tesiste 1. fazın tamamlanarak üretime başladığı ve kalan fazlara yönelik faaliyetlerin devam ettiği belirtildi. Bu bildirim, şirketin dikey entegrasyon ve yüksek teknoloji üretim kapasitesi açısından stratejik önem taşıyor.",
  },
  {
    baslik: "Kıraç Galvaniz (TCKRC)",
    kapLink: "https://www.kap.org.tr/tr/Bildirim/1619484",
    metin:
      "Kıraç Galvaniz, Karayolları 14. Bölge Müdürlüğü tarafından açılan çelik otokorkuluk yapım işi ihalesine ilişkin sözleşmenin imzalandığını açıkladı. İhale bedeli 197,3 milyon TL olarak duyurulurken, şirket payının yüzde 100 olduğu ve tutarın son gelir tablosundaki brüt satış hasılatına oranının yüzde 14,7 seviyesinde bulunduğu belirtildi. Bu nedenle bildirim, ciroya katkı potansiyeli taşıyan önemli bir ihale haberi olarak sayfaya alınmaya değer.",
  },
  {
    baslik: "SDT Uzay ve Savunma (SDTTR)",
    kapLink: "https://www.kap.org.tr/tr/Bildirim/1619339",
    metin:
      "SDT Uzay ve Savunma, yurt içi bir müşterisinden savunma sistemleri alanında toplam 1.065.866 ABD doları tutarında sipariş aldığını açıkladı. Teslimatların 2026-2029 yılları arasında yapılması planlanıyor. Tutar şirket ölçeğine göre çok büyük olmasa da savunma sanayi tarafında uzun vadeye yayılan yeni sipariş alınması, iş portföyü ve ciro görünürlüğü açısından olumlu değerlendirilebilir.",
  },
  {
    baslik: "Körfez GYO (KRGYO)",
    kapLink: "https://www.kap.org.tr/tr/Bildirim/1619302",
    metin:
      "Körfez GYO, İstanbul Tuzla Aydınlı Mahallesi'nde bulunan 1.159,92 metrekare büyüklüğündeki arsayı 59 milyon TL + KDV bedelle satın aldığını açıkladı. KDV dahil toplam bedel 64,9 milyon TL olarak duyuruldu. Gayrimenkul yatırım ortaklıkları açısından arsa alımları, yeni proje geliştirme potansiyeli ve portföy büyüklüğü bakımından önem taşır. Bu nedenle KRGYO bildirimi orta-uzun vadeli proje potansiyeli açısından takip edilebilir.",
  },
  {
    baslik: "Hidropar Hareket Kontrol (HKTM)",
    kapLink: "https://www.kap.org.tr/tr/Bildirim/1619492",
    metin:
      "HKTM, Makers Makine Ekipmanları Robotik Sistemler Sanayi ve Ticaret A.Ş.'deki yüzde 67 oranındaki payının tamamını 26 milyon TL bedelle sattığını açıkladı. Satış sonrası şirketin söz konusu finansal duran varlıktaki payı sıfıra indi. Bu tür işlemler, iştirak portföyünün sadeleşmesi, nakit yaratımı ve stratejik odaklanma açısından önem taşır. Tutar sınırlı olsa da iştirak çıkışı olması nedeniyle haber değeri bulunuyor.",
  },
  {
    baslik: "Eczacıbaşı İlaç (ECILC)",
    kapLink: "https://www.kap.org.tr/tr/Bildirim/1619607",
    metin:
      "Eczacıbaşı İlaç, yüzde 25 pay sahibi olduğu Vitra Karo Sanayi ve Ticaret A.Ş.'nin sermaye artırım kararının tescil edildiğini duyurdu. Vitra Karo'nun sermayesi 3,65 milyar TL'den 4,75 milyar TL'ye çıkarılırken, ECILC'nin payına düşen kısımdan 68,75 milyon TL'nin ödendiği, kalan 206,25 milyon TL'nin ise en geç 24 ay içinde ödeneceği belirtildi. Bu gelişme, iştirak yatırımı ve nakit çıkışı etkisi nedeniyle yatırımcı açısından izlenmeli.",
  },
  {
    baslik: "Koleksiyon Mobilya (KLSYN)",
    kapLink: "https://www.kap.org.tr/tr/Bildirim/1619630",
    metin:
      "Koleksiyon Mobilya, ICC tahkim sürecine ilişkin son durumu açıkladı. Şirketin taraf olduğu yargısal süreçte her iki tarafın temyiz başvurularının Yargıtay 11. Hukuk Dairesi tarafından reddedildiği, kesinleşen karar kapsamında gerekli ödemelerin yapıldığı, teminat mektubunun iade alındığı ve dosyanın kapatıldığı bildirildi. Açıklama, hukuki belirsizliğin kapanması açısından önemli ancak yeni operasyonel gelir yaratmadığı için risk azaltıcı haber olarak değerlendirilmelidir.",
  },
  {
    baslik: "Sekuro Plastik Ambalaj (SEKUR)",
    kapLink: "https://www.kap.org.tr/tr/Bildirim/1619548",
    metin:
      "Sekuro Plastik Ambalaj, şirket ortaklarından Murat Hakan Çil'in 22 Haziran 2026 tarihinde 5.549.514 lot payın tamamını 9,20 TL fiyatla sattığını açıkladı. Büyük ortak işlemleri, ortaklık yapısı ve piyasadaki arz algısı açısından yatırımcılar tarafından izlenir. Bildirim doğrudan şirket operasyonlarına ilişkin olmasa da pay sahipliği tarafındaki değişim nedeniyle haber sayfasında kısa not olarak yer alabilir.",
  },
  {
    baslik: "Menderes Tekstil (MNDRS)",
    kapLink: "https://www.kap.org.tr/tr/Bildirim/1619486",
    metin:
      "Menderes Tekstil, Tosunlar Jeotermal Enerji Santrali'nde yıllık planlı bakım nedeniyle 23-27 Haziran 2026 tarihleri arasında üretime geçici süreyle ara verileceğini açıkladı. Bu süreçte yaklaşık 113 MWh üretim azalması beklenirken, ticari faaliyetlerin elektrik enerjisi tedariki yoluyla sürdürüleceği belirtildi. Etki sınırlı görünse de üretim faaliyetlerine geçici ara verilmesi nedeniyle haber değeri taşıyor.",
  },
  {
    baslik: "QNB Finansal Kiralama (QNBFK)",
    kapLink: "https://www.kap.org.tr/tr/Bildirim/1619312",
    metin:
      "QNB Finansal Kiralama, sermayesinin 2 milyar TL'den 2,5 milyar TL'ye çıkarılmasına ilişkin bedelli sermaye artırımı sürecinde esas sözleşme tadiline SPK onayı alındığını açıkladı. Artırım oranı yüzde 25 olurken, kullanılmayan payların QNB Bank A.Ş. tarafından satın alınacağı belirtildi. Finansal kurumlarda sermaye artırımı, kaynak yapısı ve büyüme kapasitesi açısından izlenmesi gereken bir başlıktır.",
  },
  {
    baslik: "Margün Enerji (MAGEN)",
    kapLink: "https://www.kap.org.tr/tr/Bildirim/1619521",
    metin:
      "Margün Enerji, 22 Haziran 2026 tarihli pay geri alım işlemlerine ilişkin bildirim yayımladı. Geri alım programı kapsamında azami 25 milyon TL nominal pay için 1 milyar TL fon ayrıldığı daha önce açıklanmıştı. Günlük geri alım bildirimleri tek başına büyük operasyonel haber olmasa da hisse fiyatını destekleyici politika ve şirket yönetiminin piyasa algısı açısından takip edilir.",
  },
  {
    baslik: "Bera Holding (BERA)",
    kapLink: "https://www.kap.org.tr/tr/Bildirim/1619526",
    metin:
      "Bera Holding, 2025 yılı kâr dağıtım teklifine ilişkin güncelleme yaptı. Genel kurulda kâr payı dağıtımı konusu görüşülürken nakit kâr payı ve pay biçiminde ödeme yapılmayacağı açıklandı. Kâr olmasına rağmen dağıtım yapılmaması, şirketin kaynaklarını bünyede tutma tercihini gösterir. Temettü beklentisi olan yatırımcılar açısından bu bildirim dikkatle izlenmeli.",
  },
  {
    baslik: "Günün Öne Çıkan Başlıkları",
    kapLink: "https://www.kap.org.tr/tr/Bildirim/1619301",
    metin:
      "22 Haziran 2026 KAP gündeminde TCELL'in kredi paketinde faiz oranını aşağı çeken revizyonu, ORGE ve HLGYO'nun bedelsiz sermaye artırımı süreçleri, BMSTL'nin yüzde 100 bedelsiz sermaye artırımı için SPK onayı, ZOREN'in Kızıldere 2 JES'e entegre GES'te ticari satışa başlaması ve CWENE'nin 5 GW kapasiteli güneş hücresi yatırımındaki ilerleme öne çıktı.",
  },
  {
    baslik: "Yakından Takip Edilecek Bildirimler",
    kapLink: "https://www.kap.org.tr/tr/Bildirim/1619472",
    metin:
      "Sermaye artırımı tarafında ORGE, HLGYO, BMSTL ve QNBFK; finansman tarafında TCELL; operasyonel tarafta ZOREN, CWENE, TCKRC ve SDTTR; hukuki süreç tarafında ise KLSYN yakından takip edilmesi gereken başlıklar oldu. SEKUR pay satışı, MAGEN geri alımı, BERA'nın temettü ödememe kararı ve MNDRS'in kısa süreli üretim duruşu ise sayfada kısa not olarak değerlendirilebilecek gelişmeler arasında yer aldı.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "22 Haziran KAP: TCELL Finansman, ORGE Bedelsiz, HLGYO Artırım",
  description:
    "TCELL finansman gelişmesi, ORGE bedelsiz başvurusu, HLGYO sermaye artırımı kararı ve 22 Haziran KAP etkileri.",
  datePublished: "2026-06-22T09:00:00+03:00",
  dateModified: "2026-06-22T22:00:00+03:00",
  url: "https://www.hocaileborsa.com/haber/22-haziran-2026-onemli-kap-haberleri",
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
              alt="22 Haziran KAP: TCELL Finansman, ORGE Bedelsiz, HLGYO Artırım"
              fill

              sizes="(min-width: 1024px) 896px, 100vw"
className="object-cover"
            />
          </div>

          <div className="p-6 md:p-10">
            <h1 className="text-2xl font-bold leading-tight tracking-tight text-slate-900 md:text-3xl lg:text-4xl">
              22 Haziran KAP: TCELL Finansman, ORGE Bedelsiz, HLGYO Artırım
            </h1>

            <div className="mb-4 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center rounded-md bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700 ring-1 ring-inset ring-blue-600/20">
                Finans
              </span>
              <time dateTime="2026-06-22" className="text-sm text-slate-500">
                22 Haziran 2026
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
                Borsa İstanbul’da 22 Haziran 2026 Pazartesi günü KAP’a düşen
                önemli bildirimlerde finansman maliyeti, borçlanma aracı
                ihraçları, bedelsiz ve bedelli sermaye artırımı süreçleri,
                yenilenebilir enerji yatırımları, ihale sözleşmeleri, savunma
                sanayi siparişleri, arsa alımı, iştirak satışı ve hukuki
                süreçlere ilişkin gelişmeler öne çıktı.
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
                Günün en güçlü başlıkları TCELL’in kredi faiz revizyonu, ORGE
                ve HLGYO’nun bedelsiz sermaye artırımı süreçleri, BMSTL’nin SPK
                onayı, ZOREN’in Kızıldere 2 JES’e entegre GES’te ticari satışa
                başlaması, CWENE’nin güneş hücresi yatırımı ve TCKRC’nin 197,3
                milyon TL tutarındaki ihale sözleşmesi oldu.
              </div>
              <HaberIlgiliBolumler
                slug="22-haziran-2026-onemli-kap-haberleri"
                baslik="22 Haziran KAP: TCELL Finansman, ORGE Bedelsiz, HLGYO Artırım"
              />

              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm font-medium leading-7 text-amber-900 md:text-base">
                ⚠️ Bu özet bilgilendirme amaçlıdır, yatırım tavsiyesi değildir.
              </div>
            </div>
          </div>
          <HaberAltKisim href="/haber/22-haziran-2026-onemli-kap-haberleri" />

          <AuthorBox />
        </article>
      </div>
    </main>
  );
}
