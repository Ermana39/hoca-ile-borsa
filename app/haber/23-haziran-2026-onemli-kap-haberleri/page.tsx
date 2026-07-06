import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import HaberIlgiliBolumler from "@/components/HaberIlgiliBolumler";
import AuthorBox from "@/components/AuthorBox";
import HaberAltKisim from "@/components/HaberAltKisim";
import KapCardLinks from "@/components/KapCardLinks";

export const metadata: Metadata = {
  title: "23 Haziran KAP: BRISA Duruş, TCELL Kredi, KTLEV Temettü",
  description:
    "BRISA üretim duruşu, TCELL kredi paketi, KTLEV ve SVGYO temettü gündemi ile 23 Haziran KAP bildirimleri.",
  alternates: {
    canonical:
      "https://www.hocaileborsa.com/haber/23-haziran-2026-onemli-kap-haberleri",
  },
  openGraph: {
    type: "article",
    title: "23 Haziran KAP: BRISA Duruş, TCELL Kredi, KTLEV Temettü",
    description:
      "BRISA üretim duruşu, TCELL kredi paketi, KTLEV ve SVGYO temettü gündemi ile 23 Haziran KAP bildirimleri.",
    images: [{ url: "https://www.hocaileborsa.com/kap-ozeti-discover.webp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "23 Haziran KAP: BRISA Duruş, TCELL Kredi, KTLEV Temettü",
    description:
      "BRISA üretim duruşu, TCELL kredi paketi, KTLEV ve SVGYO temettü gündemi ile 23 Haziran KAP bildirimleri.",
    images: ["https://www.hocaileborsa.com/kap-ozeti-discover.webp"],
  },
};

const etkiStilleri: Record<string, string> = {
  "Pozitif": "border-emerald-200 bg-emerald-50 text-emerald-700",
  "Sınırlı Pozitif": "border-teal-200 bg-teal-50 text-teal-700",
  "Negatif": "border-red-200 bg-red-50 text-red-700",
  "Sınırlı Negatif": "border-orange-200 bg-orange-50 text-orange-700",
  "Nötr / Takip Edilmeli": "border-slate-200 bg-white text-slate-700",
};

const kapHaberleri = [
  {
    "baslik": "SASA Polyester (SASA)",
    "etki": "Nötr / Takip Edilmeli",
    "kapLink": "https://www.kap.org.tr/tr/Bildirim/1619642",
    "metin": "SASA tarafında paya dönüştürülebilir tahvil sürecine ilişkin üç ayrı KAP bildirimi yayımlandı. 37,3 milyon Euro nominal tutarlı tahvilin paya dönüşüm yoluyla itfası tamamlanırken, bu dönüşüm sonrası şirket sermayesindeki artış ve esas sözleşme değişikliği tescil süreci duyuruldu. Gelişme şirketin sermaye yapısını ilgilendirdiği için gün sonu KAP özetinde tek başlık altında takip edilmeli.",
    "etkiYorumu": "Operasyonel gelir etkisi yaratmıyor; sermaye yapısı ve pay sayısı açısından izlenmeli."
  },
  {
    "baslik": "Sekuro Plastik Ambalaj (SEKUR)",
    "etki": "Nötr / Takip Edilmeli",
    "kapLink": "https://www.kap.org.tr/tr/Bildirim/1619645",
    "metin": "SEKUR için pay alım satım bildirimi yayımlandı. Ortak işlemleri doğrudan şirket faaliyetlerine ilişkin olmasa da ortaklık yapısı ve piyasadaki arz algısı açısından yatırımcıların takip ettiği başlıklar arasında yer alabilir.",
    "etkiYorumu": "Şirket operasyonuna doğrudan etki yok; ortak işlemi niteliğinde."
  },
  {
    "baslik": "Maçkolik (MACKO)",
    "etki": "Nötr / Takip Edilmeli",
    "kapLink": "https://www.kap.org.tr/tr/Bildirim/1619646",
    "metin": "MACKO için pay alım satım bildirimi KAP'a aktarıldı. Bildirim, şirketin ana faaliyetlerine yönelik yeni gelir veya yatırım açıklaması içermese de pay sahipliği hareketleri açısından kısa takip notu olarak değerlendirilebilir.",
    "etkiYorumu": "Pay alım satım bildirimi olduğu için etkisi sınırlı ve takip amaçlı."
  },
  {
    "baslik": "Ahlatcı Doğal Gaz (AHGAZ)",
    "etki": "Sınırlı Pozitif",
    "kapLink": "https://www.kap.org.tr/tr/Bildirim/1619647",
    "metin": "AHGAZ, dolaylı bağlı ortaklığı Dünya Katılım Bankası A.Ş. için Fitch Ratings kredi derecelendirme notlarını açıkladı. Pozitif görünüm içeren kredi notları, finansal güven algısı açısından destekleyici bir başlık olarak izlenebilir.",
    "etkiYorumu": "Dolaylı iştirak tarafındaki kredi notu olumlu algı yaratabilir; ana faaliyetlere doğrudan ciro etkisi yok."
  },
  {
    "baslik": "Enerya Enerji (ENERY)",
    "etki": "Sınırlı Pozitif",
    "kapLink": "https://www.kap.org.tr/tr/Bildirim/1619648",
    "metin": "ENERY, dolaylı iştiraki Dünya Katılım Bankası A.Ş. için Fitch Ratings kredi derecelendirme notlarını duyurdu. Notların pozitif görünümle açıklanması, finansal yapı ve iştirak algısı açısından takip edilebilir.",
    "etkiYorumu": "İştirak kaynaklı finansal güven algısı destekleyici olabilir; etki sınırlı."
  },
  {
    "baslik": "DAP Gayrimenkul (DAPGM)",
    "etki": "Nötr / Takip Edilmeli",
    "kapLink": "https://www.kap.org.tr/tr/Bildirim/1619649",
    "metin": "DAPGM için pay alım satım bildirimi yayımlandı. Bildirim, şirket faaliyetlerine ilişkin yeni proje veya satış açıklaması içermediği için gün sonu özetinde kısa not olarak yer alabilir.",
    "etkiYorumu": "Operasyonel etkisi yok; ortak işlemi niteliğinde."
  },
  {
    "baslik": "KTLEV / SVGYO",
    "etki": "Nötr / Takip Edilmeli",
    "kapLink": "https://www.kap.org.tr/tr/Bildirim/1619652",
    "metin": "KTLEV ve SVGYO için temettü sonrası teorik fiyat bilgilerini içeren BISTECH hak kullanımı duyurusu yayımlandı. Hak kullanım süreci ve teorik fiyatlamalar yatırımcı takibi açısından önem taşıyor.",
    "etkiYorumu": "Temettü/hak kullanımı kaynaklı teknik fiyatlama etkisi bulunuyor."
  },
  {
    "baslik": "Peker GYO (PEKGY)",
    "etki": "Nötr / Takip Edilmeli",
    "kapLink": "https://www.kap.org.tr/tr/Bildirim/1619669",
    "metin": "PEKGY bildirimi gün sonu KAP gündeminde izlenmesi gereken başlıklar arasında yer aldı. Bildirim, şirket tarafındaki süreç ve yatırımcı algısı açısından takip notu niteliği taşıyor.",
    "etkiYorumu": "Finansal etki netleşmediği için takip edilmesi gereken haber olarak değerlendirilmeli."
  },
  {
    "baslik": "Garanti Yatırım Ortaklığı (GRNYO)",
    "etki": "Nötr / Takip Edilmeli",
    "kapLink": "https://www.kap.org.tr/tr/Bildirim/1619697",
    "metin": "GRNYO, BİAŞ'ta oluşan ağırlıklı ortalama fiyatın pay başına net aktif değerinin 2 katını aşması nedeniyle açıklama yaptı. Yatırım ortaklıklarında net aktif değer ile piyasa fiyatı arasındaki fark yatırımcı açısından izlenmesi gereken bir göstergedir.",
    "etkiYorumu": "Net aktif değer/piyasa fiyatı farkı nedeniyle takip edilmeli; doğrudan operasyonel haber değil."
  },
  {
    "baslik": "Ostim Endüstriyel Yatırımlar (OSTIM)",
    "etki": "Sınırlı Pozitif",
    "kapLink": "https://www.kap.org.tr/tr/Bildirim/1619705",
    "metin": "OSTIM, %35 oranındaki bedelsiz sermaye artırımı için SPK onayı alındığını ve hak kullanım başlangıç tarihinin 24 Haziran 2026 olarak belirlendiğini açıkladı. Şirket sermayesinin 590 milyon TL'den 796,5 milyon TL'ye çıkarılması planlanıyor.",
    "etkiYorumu": "Bedelsiz sermaye artırımı yatırımcı ilgisini artırabilir; piyasa değeri üzerinde tek başına temel etki yaratmaz."
  },
  {
    "baslik": "Borsa İstanbul Fiili Dolaşım Oranı Değişiklikleri",
    "etki": "Nötr / Takip Edilmeli",
    "kapLink": "https://www.kap.org.tr/tr/Bildirim/1619719",
    "metin": "Borsa İstanbul, ENDAE, EUPWR, GESAN, IEYHO, INFO, IZMDC ve TEHOL için endekslerde kullanılan fiili dolaşımdaki pay oranı değişikliklerini açıkladı. Endeks hesaplamalarında kullanılan oranlar fon ve endeks takipli işlemler açısından önem taşıyabilir.",
    "etkiYorumu": "Endeks ağırlığı ve pasif fon akımları açısından izlenebilir; şirket operasyonlarına doğrudan etkisi yok."
  },
  {
    "baslik": "Vişne Madencilik (VSNMD)",
    "etki": "Pozitif",
    "kapLink": "https://www.kap.org.tr/tr/Bildirim/1619729",
    "metin": "VSNMD, işletme izni alınmasına ilişkin özel durum açıklaması yayımladı. Madencilik faaliyetlerinde izin süreçleri üretim ve faaliyet devamlılığı açısından kritik olduğu için bu bildirim günün önemli KAP haberleri arasında yer aldı.",
    "etkiYorumu": "İzin süreci faaliyetlerin ilerlemesi açısından destekleyici okunabilir."
  },
  {
    "baslik": "Büyük Şefler Gıda (BIGCH)",
    "etki": "Sınırlı Pozitif",
    "kapLink": "https://www.kap.org.tr/tr/Bildirim/1619736",
    "metin": "BIGCH, kayıtlı sermaye tavanının 175 milyon TL'den 1,75 milyar TL'ye çıkarılması için yönetim kurulu kararı aldığını açıkladı. Kayıtlı sermaye tavanının yükseltilmesi, ilerleyen dönemlerde sermaye işlemleri için alan açan bir adım olarak değerlendirilebilir.",
    "etkiYorumu": "Doğrudan nakit giriş/çıkış yaratmasa da sermaye işlemleri için esneklik sağlar."
  },
  {
    "baslik": "Turkcell (TCELL)",
    "etki": "Sınırlı Pozitif",
    "kapLink": "https://www.kap.org.tr/tr/Bildirim/1619746",
    "metin": "TCELL, yurt içinde borçlanma aracı ihracına ilişkin SPK onayı aldığını duyurdu. Şirketin daha önce yaptığı başvuruya istinaden ihraç sürecinin onaylanması, borçlanma araçları piyasası üzerinden finansman sağlama imkânı açısından takip edilmeli.",
    "etkiYorumu": "Finansman kaynaklarına erişim açısından destekleyici; borçlanma koşulları takip edilmeli."
  },
  {
    "baslik": "ICU Girişim Sermayesi (ICUGS)",
    "etki": "Sınırlı Pozitif",
    "kapLink": "https://www.kap.org.tr/tr/Bildirim/1619744",
    "metin": "ICUGS, kayıtlı sermaye tavanının 207,75 milyon TL'den 2 milyar TL'ye yükseltilmesine ilişkin SPK onayını açıkladı. Bu karar, şirketin ileride yapabileceği sermaye işlemleri için daha geniş bir tavan oluşturuyor.",
    "etkiYorumu": "Sermaye yapısı tarafında esneklik sağlar; doğrudan operasyonel gelir etkisi yok."
  },
  {
    "baslik": "Kervan Gıda (KRVGD)",
    "etki": "Sınırlı Negatif",
    "kapLink": "https://www.kap.org.tr/tr/Bildirim/1619772",
    "metin": "KRVGD, bağlı ortaklığı Uçantay Gıda'nın Manisa/Akhisar tesisinde meydana gelen yangına ilişkin güncelleme yayımladı. Üretim tesislerinde yaşanan yangın haberleri operasyonel risk taşıdığı için yatırımcılar tarafından yakından takip edilir.",
    "etkiYorumu": "Hasar ve üretim etkisi sınırlı kalırsa baskı azalabilir; ancak operasyonel risk başlığıdır."
  },
  {
    "baslik": "Türkiye Sigorta (TURSG)",
    "etki": "Pozitif",
    "kapLink": "https://www.kap.org.tr/tr/Bildirim/1619813",
    "metin": "TURSG tarafında gün içinde yatırımcıların takip ettiği önemli bildirimler arasında yer alan açıklama, şirketin finansal ve sektörel görünümü açısından gün sonu özetinde kısa not olarak değerlendirildi.",
    "etkiYorumu": "Sigorta sektörü görünümü açısından destekleyici başlık olarak izlenebilir."
  },
  {
    "baslik": "MKK Duyurusu",
    "etki": "Nötr / Takip Edilmeli",
    "kapLink": "https://www.kap.org.tr/tr/Bildirim/1619817",
    "metin": "MKK kaynaklı duyuru gün sonu KAP akışında takip edilen başlıklar arasında yer aldı. Bildirim şirket operasyonundan çok piyasa altyapısı ve teknik duyuru niteliği taşıyor.",
    "etkiYorumu": "Doğrudan hisse etkisi sınırlı; kapsamı nedeniyle takip edilmeli."
  },
  {
    "baslik": "Özyaşar Tel ve Galvanizleme (OZYSR)",
    "etki": "Sınırlı Pozitif",
    "kapLink": "https://www.kap.org.tr/tr/Bildirim/1619802",
    "metin": "OZYSR bildirimi gün içinde yatırımcıların takip ettiği önemli KAP başlıkları arasında yer aldı. Şirket tarafındaki gelişme, gün sonu KAP özetinde kısa değerlendirme yapılabilecek nitelikte görüldü.",
    "etkiYorumu": "Detayın etkisi sınırlı görünmekle birlikte şirket gündemi açısından takip edilmeli."
  },
  {
    "baslik": "Ülker Bisküvi (ULKER)",
    "etki": "Nötr / Takip Edilmeli",
    "kapLink": "https://www.kap.org.tr/tr/Bildirim/1619818",
    "metin": "ULKER tarafından yayımlanan KAP bildirimi gün sonu önemli haberler listesinde takip edilecek başlıklardan biri oldu. Büyük ölçekli sanayi şirketlerinde sermaye piyasası ve finansman tarafındaki açıklamalar yatırımcı ilgisi açısından önem taşır.",
    "etkiYorumu": "Detayın finansal yansıması izlenmeli; ilk aşamada takip başlığı olarak değerlendirilmeli."
  },
  {
    "baslik": "Emlak Konut GYO (EKGYO)",
    "etki": "Pozitif",
    "kapLink": "https://www.kap.org.tr/tr/Bildirim/1619850",
    "metin": "EKGYO tarafındaki bildirim, gayrimenkul sektöründe proje ve portföy yönetimi açısından günün öne çıkan başlıkları arasında değerlendirildi. Şirketin ölçeği nedeniyle KAP açıklamaları sektör görünümü açısından da takip ediliyor.",
    "etkiYorumu": "Proje/portföy tarafındaki gelişmeler gelir görünümünü destekleyebilir."
  },
  {
    "baslik": "Ditaş Doğan Yedek Parça (DITAS)",
    "etki": "Nötr / Takip Edilmeli",
    "kapLink": "https://www.kap.org.tr/tr/Bildirim/1619846",
    "metin": "DITAS bildirimi gün içinde önemli KAP başlıkları arasına alındı. Şirket tarafındaki açıklama doğrudan yatırımcı takibine konu olabilecek nitelikte değerlendirildi.",
    "etkiYorumu": "Detayın finansal etkisi izlenmeli; ilk aşamada takip notu olarak değerlendirilmeli."
  },
  {
    "baslik": "Akbank (AKBNK)",
    "etki": "Sınırlı Pozitif",
    "kapLink": "https://www.kap.org.tr/tr/Bildirim/1619854",
    "metin": "AKBNK tarafındaki sermaye piyasası aracı bildirimi gün sonu KAP özetinde izlenebilecek finansman başlıkları arasında yer aldı. Bankacılık sektöründe borçlanma ve finansman araçları, kaynak yapısı açısından önem taşır.",
    "etkiYorumu": "Finansman kaynaklarının çeşitlenmesi açısından takip edilebilir."
  },
  {
    "baslik": "CW Enerji (CWENE)",
    "etki": "Pozitif",
    "kapLink": "https://www.kap.org.tr/tr/Bildirim/1619860",
    "metin": "CWENE tarafında yayımlanan KAP bildirimi günün enerji sektörü başlıkları arasında öne çıktı. Şirketin üretim, yatırım veya iş ilişkisi tarafındaki açıklamaları, büyüme görünümü açısından yakından izleniyor.",
    "etkiYorumu": "Enerji ve üretim kapasitesi tarafındaki gelişmeler şirket algısını destekleyebilir."
  },
  {
    "baslik": "Dünya Varlık Yönetim (DNYVA)",
    "etki": "Nötr / Takip Edilmeli",
    "kapLink": "https://www.kap.org.tr/tr/Bildirim/1619882",
    "metin": "DNYVA bildirimi gün sonu önemli KAP haberleri arasında takip edilecek başlıklardan biri oldu. Şirketin varlık yönetimi alanındaki açıklamaları finansal yapı ve faaliyet portföyü açısından izlenebilir.",
    "etkiYorumu": "Finansal etkisi açıklama detayına bağlı; takip edilmeli."
  },
  {
    "baslik": "Kardemir (KRDMA / KRDMB / KRDMD)",
    "etki": "Nötr / Takip Edilmeli",
    "kapLink": "https://www.kap.org.tr/tr/Bildirim/1619893",
    "metin": "Kardemir pay gruplarına ilişkin bildirim gün içinde yatırımcıların takip ettiği başlıklar arasında yer aldı. KRDMA, KRDMB ve KRDMD paylarında şirket açıklamaları, likidite ve fiyatlama algısı nedeniyle önem taşıyabiliyor.",
    "etkiYorumu": "Pay grupları ve şirket gündemi açısından takip edilmeli."
  },
  {
    "baslik": "Blue Market (BLUME)",
    "etki": "Nötr / Takip Edilmeli",
    "kapLink": "https://www.kap.org.tr/tr/Bildirim/1619894",
    "metin": "BLUME bildirimi gün sonu önemli KAP haberleri listesine alınabilecek başlıklardan biri oldu. Açıklama, şirketin sermaye piyasası gündemi açısından takip notu niteliği taşıyor.",
    "etkiYorumu": "Detayların finansal etkisi izlenmeli."
  },
  {
    "baslik": "Girişim Elektrik (GESAN)",
    "etki": "Pozitif",
    "kapLink": "https://www.kap.org.tr/tr/Bildirim/1619902",
    "metin": "GESAN tarafında gün içinde yayımlanan bildirim, enerji ekipmanları ve proje tarafındaki gelişmeler nedeniyle önemli KAP başlıkları arasında değerlendirildi. Şirketin iş ilişkileri ve bağlı ortaklıklarıyla ilgili açıklamaları yatırımcılar tarafından yakından izleniyor.",
    "etkiYorumu": "Yeni iş veya proje bağlantılı gelişmeler gelir görünümünü destekleyebilir."
  },
  {
    "baslik": "Europower Enerji (EUPWR)",
    "etki": "Pozitif",
    "kapLink": "https://www.kap.org.tr/tr/Bildirim/1619903",
    "metin": "EUPWR bildirimi enerji ekipmanları tarafında günün takip edilen başlıklarından biri oldu. Şirketin aldığı siparişler, ihaleler veya sözleşme süreçleri döviz bazlı gelir ve büyüme görünümü açısından yatırımcı ilgisi çekebiliyor.",
    "etkiYorumu": "Sipariş ve sözleşme akışı şirket algısı açısından destekleyici olabilir."
  },
  {
    "baslik": "Arçelik (ARCLK)",
    "etki": "Nötr / Takip Edilmeli",
    "kapLink": "https://www.kap.org.tr/tr/Bildirim/1619918",
    "metin": "ARCLK tarafındaki bildirim, şirketin finansal yükümlülükleri ve satın alma süreci sonrası gelişmeler açısından takip edildi. Büyük ölçekli sanayi şirketlerinde bu tür açıklamalar bilanço ve nakit akışı açısından izlenmelidir.",
    "etkiYorumu": "Finansal yükümlülük ve nakit akışı etkisi takip edilmeli."
  },
  {
    "baslik": "Rubenis Tekstil (RUBNS)",
    "etki": "Pozitif",
    "kapLink": "https://www.kap.org.tr/tr/Bildirim/1619922",
    "metin": "RUBNS bildirimi günün önemli KAP başlıkları arasında yer aldı. Şirket tarafındaki açıklama faaliyet ve gelir görünümü açısından takip edilecek nitelikte değerlendirildi.",
    "etkiYorumu": "Operasyonel görünüm açısından destekleyici olabilir."
  },
  {
    "baslik": "Türk Metal Sendikası / TRMET",
    "etki": "Nötr / Takip Edilmeli",
    "kapLink": "https://www.kap.org.tr/tr/Bildirim/1619926",
    "metin": "TRMET bildirimi gün içindeki önemli KAP akışında takip edilen başlıklar arasında yer aldı. Açıklama, sermaye piyasası ve fon/kurumsal yapı tarafında izlenmesi gereken bir gelişme olarak değerlendirildi.",
    "etkiYorumu": "Doğrudan hisse etkisi sınırlı; kapsamı nedeniyle takip edilmeli."
  },
  {
    "baslik": "TRALT",
    "etki": "Nötr / Takip Edilmeli",
    "kapLink": "https://www.kap.org.tr/tr/Bildirim/1619924",
    "metin": "TRALT bildirimi gün sonu önemli KAP haberleri listesinde takip edilecek başlıklardan biri olarak değerlendirildi. Açıklama teknik veya kurumsal yapı tarafında yatırımcıların izlemesi gereken bir gelişme niteliği taşıyor.",
    "etkiYorumu": "Etki sınırlı; takip notu olarak alınabilir."
  },
  {
    "baslik": "Hektaş (HEKTS)",
    "etki": "Nötr / Takip Edilmeli",
    "kapLink": "https://www.kap.org.tr/tr/Bildirim/1619928",
    "metin": "HEKTS bildirimi günün yatırımcı takibine konu olabilecek önemli KAP haberleri arasında değerlendirildi. Şirketin faaliyet, finansman veya kurumsal süreçlerine ilişkin açıklamaları sektör ve hisse algısı açısından izleniyor.",
    "etkiYorumu": "Detayın finansal ve operasyonel yansıması takip edilmeli."
  },
  {
    "baslik": "Enerya Enerji (ENERY)",
    "etki": "Sınırlı Pozitif",
    "kapLink": "https://www.kap.org.tr/tr/Bildirim/1619929",
    "metin": "ENERY tarafındaki bildirim gün içinde enerji sektörü başlıkları arasında takip edildi. Şirketin finansman, iştirak veya faaliyet gündemine ilişkin açıklamaları yatırımcı algısı açısından önem taşıyabilir.",
    "etkiYorumu": "Enerji ve iştirak gündemi açısından destekleyici olabilir; detaylar izlenmeli."
  },
  {
    "baslik": "Tureks Turunç Madencilik (MARBL)",
    "etki": "Pozitif",
    "kapLink": "https://www.kap.org.tr/tr/Bildirim/1619930",
    "metin": "MARBL bildirimi günün önemli şirket haberleri arasında yer aldı. Şirketin yurt içi veya yurt dışı satış/sözleşme açıklamaları gelir görünürlüğü açısından yakından izleniyor.",
    "etkiYorumu": "Yeni iş veya satış bağlantılı gelişmeler ciro görünümünü destekleyebilir."
  },
  {
    "baslik": "Göknur Gıda (GOKNR)",
    "etki": "Pozitif",
    "kapLink": "https://www.kap.org.tr/tr/Bildirim/1619931",
    "metin": "GOKNR bildirimi gıda ve ihracat tarafındaki şirket gündemi açısından önemli KAP başlıkları arasında değerlendirildi. Şirketin yatırım ve dış pazar adımları orta vadeli büyüme görünümü açısından takip ediliyor.",
    "etkiYorumu": "Yatırım ve satış ağı açısından destekleyici olabilir."
  },
  {
    "baslik": "Hat-San Gemi (HATSN)",
    "etki": "Pozitif",
    "kapLink": "https://www.kap.org.tr/tr/Bildirim/1619935",
    "metin": "HATSN bildirimi gün içinde sanayi ve üretim tarafında dikkat çeken KAP haberlerinden biri oldu. Gemi inşa ve üretim sektöründe yeni iş ilişkileri veya proje gelişmeleri şirketin sipariş görünürlüğü açısından önem taşır.",
    "etkiYorumu": "Proje/sipariş görünürlüğü açısından destekleyici olabilir."
  },
  {
    "baslik": "Brisa (BRISA)",
    "etki": "Sınırlı Negatif",
    "kapLink": "https://www.kap.org.tr/tr/Bildirim/1619946",
    "metin": "BRISA, İzmit fabrikasında planlı bakım çalışmaları nedeniyle üretime geçici süreyle ara verileceğini açıkladı. Planlı bakım kaynaklı duruşlar üretim sürekliliği ve kısa vadeli kapasite kullanımı açısından takip edilir. Bu haber günün ayrı haber yapılabilecek en güçlü başlıklarından biri olarak öne çıktı.",
    "etkiYorumu": "Planlı bakım olduğu için kalıcı risk sınırlı olabilir; kısa vadeli üretim etkisi nedeniyle takip edilmeli."
  }
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "23 Haziran KAP: BRISA Duruş, TCELL Kredi, KTLEV Temettü",
  description:
    "BRISA üretim duruşu, TCELL kredi paketi, KTLEV ve SVGYO temettü gündemi ile 23 Haziran KAP bildirimleri.",
  datePublished: "2026-06-23T09:00:00+03:00",
  dateModified: "2026-06-23T22:30:00+03:00",
  url: "https://www.hocaileborsa.com/haber/23-haziran-2026-onemli-kap-haberleri",
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
              alt="23 Haziran KAP: BRISA Duruş, TCELL Kredi, KTLEV Temettü"
              fill
              unoptimized
              className="object-cover"
            />
          </div>

          <div className="p-6 md:p-10">
            <h1 className="text-2xl font-bold leading-tight tracking-tight text-slate-900 md:text-3xl lg:text-4xl">
              23 Haziran KAP: BRISA Duruş, TCELL Kredi, KTLEV Temettü
            </h1>

            <div className="mb-4 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center rounded-md bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700 ring-1 ring-inset ring-blue-600/20">
                Finans
              </span>
              <time dateTime="2026-06-23" className="text-sm text-slate-500">
                23 Haziran 2026
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
                Borsa İstanbul’da 23 Haziran 2026 Salı günü KAP’a düşen önemli
                bildirimlerde sermaye işlemleri, kayıtlı sermaye tavanı
                başvuruları, fiili dolaşım oranı değişiklikleri, kredi ve
                borçlanma aracı açıklamaları, üretim ve tesis süreçleri, yangın
                güncellemeleri, yeni iş ilişkileri ve sektör bazlı takip
                başlıkları öne çıktı.
              </p>

              <div className="space-y-5">
                {kapHaberleri.map((haber) => (
                  <section
                    key={haber.baslik + haber.kapLink}
                    className="rounded-xl border border-slate-200 bg-slate-50 p-4"
                  >
                    <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                      <h2 className="text-base font-semibold text-slate-800">
                        {haber.baslik}
                      </h2>
                      <span
                        className={`inline-flex w-fit rounded-md border px-2.5 py-1 text-xs font-semibold ${
                          etkiStilleri[haber.etki] ??
                          etkiStilleri["Nötr / Takip Edilmeli"]
                        }`}
                      >
                        Olası Etki: {haber.etki}
                      </span>
                    </div>
                    <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                      {haber.metin}
                    </p>
                    <p className="mt-2 rounded-lg bg-white px-3 py-2 text-xs font-medium leading-6 text-slate-600 ring-1 ring-slate-200">
                      {haber.etkiYorumu}
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
                Günün en dikkat çeken başlıkları BRISA’nın İzmit fabrikasında
                planlı bakım duruşu, OSTIM’in %35 bedelsiz sermaye artırımı
                süreci, BIGCH ve ICUGS tarafındaki kayıtlı sermaye tavanı
                artışları, TCELL’in borçlanma aracı onayı, KRVGD tesis yangını
                güncellemesi, enerji tarafında GESAN-EUPWR-CWENE başlıkları ve
                SASA’nın paya dönüştürülebilir tahvil kaynaklı sermaye süreci
                oldu.
              </div>

              <HaberIlgiliBolumler
                slug="23-haziran-2026-onemli-kap-haberleri"
                baslik="23 Haziran KAP: BRISA Duruş, TCELL Kredi, KTLEV Temettü"
              />

              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm font-medium leading-7 text-amber-900 md:text-base">
                ⚠️ Bu özet bilgilendirme amaçlıdır, yatırım tavsiyesi değildir.
              </div>
            </div>
          </div>
          <HaberAltKisim href="/haber/23-haziran-2026-onemli-kap-haberleri" />

          <AuthorBox />
        </article>
      </div>
    </main>
  );
}
