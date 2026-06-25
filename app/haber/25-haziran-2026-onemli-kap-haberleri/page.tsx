import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import HaberIlgiliBolumler from "@/components/HaberIlgiliBolumler";
import AuthorBox from "@/components/AuthorBox";
import HaberAltKisim from "@/components/HaberAltKisim";
import KapCardLinks from "@/components/KapCardLinks";

export const metadata: Metadata = {
  title: "25 Haziran 2026 Perşembe Önemli KAP Haberleri",
  description:
    "25 Haziran 2026 Perşembe günü KAP'a düşen önemli bildirimlerin özeti: DERHL, TRALT, ISGSY, YIGIT, DENVA, SMRTG, FORTE, MEGMT, VAKBN, ALARK ve diğer öne çıkan şirket haberleri.",
  alternates: {
    canonical:
      "https://www.hocaileborsa.com/haber/25-haziran-2026-onemli-kap-haberleri",
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

const etkiStilleri: Record<string, string> = {
  "Pozitif": "border-emerald-200 bg-emerald-50 text-emerald-700",
  "Sınırlı Pozitif": "border-teal-200 bg-teal-50 text-teal-700",
  "Negatif": "border-red-200 bg-red-50 text-red-700",
  "Sınırlı Negatif": "border-orange-200 bg-orange-50 text-orange-700",
  "Nötr / Takip Edilmeli": "border-slate-200 bg-white text-slate-700",
};

const kapHaberleri = [
  {
    "baslik": "Derlüks Yatırım Holding (DERHL)",
    "etki": "Pozitif",
    "kapLink": "https://www.kap.org.tr/tr/Bildirim/1620468",
    "metin": "DERHL, bağlı ortaklığı Soho Giyim ve Enerji A.Ş.'nin ilk halka arz izahnamesinin SPK tarafından onaylandığını duyurdu. Halka arz sürecinin en kritik resmi aşamalarından birinin tamamlanması, bağlı ortaklık portföyü açısından günün öne çıkan başlıklarından biri oldu.",
    "etkiYorumu": "Halka arz onayı bağlı ortaklık değerlemesi açısından pozitif algı yaratabilir; fiyat, talep toplama ve dağıtım detayları ayrıca izlenmeli."
  },
  {
    "baslik": "Türk Altın İşletmeleri (TRALT)",
    "etki": "Pozitif",
    "kapLink": "https://www.kap.org.tr/tr/Bildirim/1620469",
    "metin": "TRALT, Zenit Madencilik bünyesindeki altı adet IV. Grup işletme ruhsatı ile Balıkesir Sındırgı'daki cevher işleme tesisinin devralınmasına yönelik mutabakat zaptı imzaladığını açıkladı. Bildirimde işlem bedeli 69,9 milyon dolar olarak yer aldı.",
    "etkiYorumu": "Ruhsat ve tesis devri madencilik faaliyet alanını genişletebilecek nitelikte; işlem kesinleşmeden nihai finansal etki netleşmez."
  },
  {
    "baslik": "İş Girişim Sermayesi (ISGSY)",
    "etki": "Sınırlı Pozitif",
    "kapLink": "https://www.kap.org.tr/tr/Bildirim/1620485",
    "metin": "ISGSY, portföy şirketi Enlila Sağlık üzerinden ABD merkezli Crescenta Biosciences'a 24 milyon dolar karşılığında sermaye artırımı yoluyla ortak olunacağını açıkladı. Hedef ortaklık oranı %50,1 olarak bildirildi.",
    "etkiYorumu": "Biyoteknoloji yatırımı portföy değerleme potansiyeli açısından önemli; geri dönüş süreci orta-uzun vadeli okunmalı."
  },
  {
    "baslik": "YİGİT Akü (YIGIT)",
    "etki": "Pozitif",
    "kapLink": "https://www.kap.org.tr/tr/Bildirim/1620516",
    "metin": "YİGİT Akü, kapasite artışı projesine ilişkin ÇED olumlu kararını duyurdu. Üretim kapasitesiyle bağlantılı yatırım süreçlerinde çevresel izin aşamasının olumlu tamamlanması operasyonel büyüme açısından dikkat çekti.",
    "etkiYorumu": "ÇED olumlu kararı yatırım sürecini destekleyen önemli bir aşama; fiili kapasite katkısı yatırım tamamlandıkça izlenecek."
  },
  {
    "baslik": "Denge Varlık Yönetim (DENVA)",
    "etki": "Sınırlı Pozitif",
    "kapLink": "https://www.kap.org.tr/tr/Bildirim/1620554",
    "metin": "DENVA, Akbank'ın tahsili gecikmiş alacak satışında 407,7 milyon TL anapara büyüklüğündeki bir perakende portföyün ihalesini kazandığını ve devir işlemlerinin tamamlandığını açıkladı.",
    "etkiYorumu": "Portföy alımı faaliyet hacmini destekleyebilir; varlık yönetim şirketlerinde asıl etki tahsilat performansıyla ortaya çıkar."
  },
  {
    "baslik": "Smart Güneş Enerjisi (SMRTG)",
    "etki": "Nötr / Takip Edilmeli",
    "kapLink": "https://www.kap.org.tr/tr/Bildirim/1620575",
    "metin": "SMRTG, tahsisli sermaye artırımına ilişkin yönetim kurulu kararını açıkladı. Bildirimde kayıtlı sermaye tavanı ve mevcut sermaye bilgileriyle birlikte tahsisli sermaye artırımı sürecine ilişkin başlıklar yer aldı.",
    "etkiYorumu": "Tahsisli sermaye artırımı finansman ve ortaklık yapısı açısından izlenmeli; nihai etki ihraç şartlarıyla netleşir."
  },
  {
    "baslik": "Bera Holding (BERA)",
    "etki": "Sınırlı Pozitif",
    "kapLink": "https://www.kap.org.tr/tr/Bildirim/1620579",
    "metin": "BERA, bağlı ortaklığı Golda Gıda Sanayi ve Ticaret A.Ş.'nin halka arz onayının alındığını açıkladı. Holding yapısı içinde bağlı ortaklık halka arzları portföy değerlemesi açısından yatırımcı ilgisini artırabilir.",
    "etkiYorumu": "Golda Gıda halka arzı BERA tarafında portföy değerleme algısını destekleyebilir."
  },
  {
    "baslik": "Konya Kağıt (KONKA)",
    "etki": "Sınırlı Pozitif",
    "kapLink": "https://www.kap.org.tr/tr/Bildirim/1620583",
    "metin": "KONKA, iştiraki Golda Gıda Sanayi ve Ticaret A.Ş.'nin halka arz onayının alındığını duyurdu. Açıklama, Golda Gıda halka arz sürecinin ilişkili şirketler açısından da takip edildiğini gösterdi.",
    "etkiYorumu": "İştirak bağlantısı nedeniyle sınırlı pozitif okunabilir; asıl etki halka arz detaylarıyla netleşir."
  },
  {
    "baslik": "Forte Bilgi İletişim (FORTE)",
    "etki": "Pozitif",
    "kapLink": "https://www.kap.org.tr/tr/Bildirim/1620612",
    "metin": "FORTE, yurt içi yerleşik bir savunma sanayi firması ile sözleşme imzalandığını açıkladı. Savunma sanayi tarafındaki yeni iş ilişkileri teknoloji şirketleri için gelir görünürlüğü ve faaliyet ölçeği açısından önemli başlıklar arasında yer alıyor.",
    "etkiYorumu": "Yeni sözleşme şirketin iş hacmi algısını destekleyebilir; sözleşme tutarı ve teslimat takvimi izlenmeli."
  },
  {
    "baslik": "Mega Metal (MEGMT)",
    "etki": "Pozitif",
    "kapLink": "https://www.kap.org.tr/tr/Bildirim/1620620",
    "metin": "MEGMT, yeni iş ilişkisine ilişkin KAP açıklaması yayımladı. Sanayi şirketlerinde yeni iş ilişkileri, sipariş görünürlüğü ve kapasite kullanımı açısından yatırımcıların takip ettiği başlıklar arasında bulunuyor.",
    "etkiYorumu": "Yeni iş ilişkisi büyüme algısını destekleyebilir; finansal katkı sözleşme detaylarıyla daha net okunur."
  },
  {
    "baslik": "Durukan Şekerleme (DURKN)",
    "etki": "Nötr / Takip Edilmeli",
    "kapLink": "https://www.kap.org.tr/tr/Bildirim/1620623",
    "metin": "DURKN, kâr payı dağıtım işlemlerine ilişkin güncelleme yayımladı. Bildirimde nakit kâr payı ödemesinin gündeme alındığı ve genel kurul sürecine ilişkin bilgilerin paylaşıldığı görüldü.",
    "etkiYorumu": "Temettü kararları yatırımcı beklentisi açısından izlenir; net/brüt tutar ve ödeme tarihi fiyatlamada etkili olabilir."
  },
  {
    "baslik": "Durukan Şekerleme (DURKN)",
    "etki": "Sınırlı Pozitif",
    "kapLink": "https://www.kap.org.tr/tr/Bildirim/1620627",
    "metin": "DURKN, kayıtlı sermaye tavanının 175 milyon TL'den 2,5 milyar TL'ye çıkarılması ve geçerlilik süresinin 2030 sonuna uzatılması kararının genel kurulda kabul edildiğini açıkladı.",
    "etkiYorumu": "Kayıtlı sermaye tavanı artışı doğrudan nakit etkisi yaratmaz; ilerideki sermaye işlemleri için alan açar."
  },
  {
    "baslik": "İhlas Holding (IHLAS)",
    "etki": "Nötr / Takip Edilmeli",
    "kapLink": "https://www.kap.org.tr/tr/Bildirim/1620629",
    "metin": "IHLAS, rüçhan hakkı kullanımı sonrası kalan payların Borsa İstanbul Birincil Piyasa'da satışının tamamlanmasına ilişkin bildirim yayımladı. Bedelli sermaye artırımı sürecinde kalan payların satışı sürecin tamamlanması açısından önemli bir aşamadır.",
    "etkiYorumu": "Bedelli sermaye artırımı sürecinin tamamlanma aşaması izlenmeli; kısa vadede teknik arz etkisi gündeme gelebilir."
  },
  {
    "baslik": "QNB Finansal Kiralama (QNBFK)",
    "etki": "Sınırlı Pozitif",
    "kapLink": "https://www.kap.org.tr/tr/Bildirim/1620631",
    "metin": "QNBFK, sermaye artırımı tescil bildirimini yayımladı. Bildirimde sermayenin 2 milyar TL'den 2,5 milyar TL'ye çıkarılması sürecine ilişkin tescil aşaması yer aldı.",
    "etkiYorumu": "Finansal kiralama şirketlerinde sermaye artışı bilanço dayanıklılığı ve büyüme kapasitesi açısından destekleyici olabilir."
  },
  {
    "baslik": "Ditaş (DITAS)",
    "etki": "Nötr / Takip Edilmeli",
    "kapLink": "https://www.kap.org.tr/tr/Bildirim/1620632",
    "metin": "DITAS, kayyım atanması sürecine ilişkin özel durum açıklaması yayımladı. Yönetim ve hukuki süreçler şirket faaliyetlerinin sürekliliği açısından yakından izlenmesi gereken başlıklardır.",
    "etkiYorumu": "Operasyonel sonuçtan çok hukuki ve yönetimsel süreç riski nedeniyle takip edilmeli."
  },
  {
    "baslik": "BIOEN / TRMEN",
    "etki": "Nötr / Takip Edilmeli",
    "kapLink": "https://www.kap.org.tr/tr/Bildirim/1620633",
    "metin": "TRMEN tarafından BIOEN paylarına ilişkin toptan alış satış işlemi bildirimi yayımlandı. Toptan alış satış işlemleri ortaklık ve likidite yapısı açısından yatırımcıların takip ettiği teknik başlıklar arasında yer alır.",
    "etkiYorumu": "Operasyonel haber değil; pay sahipliği ve işlem hacmi tarafında izlenmeli."
  },
  {
    "baslik": "Ditaş (DITAS)",
    "etki": "Nötr / Takip Edilmeli",
    "kapLink": "https://www.kap.org.tr/tr/Bildirim/1620640",
    "metin": "DITAS, kayyım atanması süreciyle bağlantılı yeni özel durum açıklaması yayımladı. Gün içindeki DITAS bildirimleri, şirketin yönetimsel ve hukuki süreçleri nedeniyle öne çıktı.",
    "etkiYorumu": "Belirsizlik unsuru taşıyan hukuki süreçler şirket algısı üzerinde etkili olabilir."
  },
  {
    "baslik": "ALTNY",
    "etki": "Nötr / Takip Edilmeli",
    "kapLink": "https://www.kap.org.tr/tr/Bildirim/1620643",
    "metin": "ALTNY için KAP'ta özel durum açıklaması yayımlandı. Bildirim, şirket paylarının işlem dinamikleri ve yatırımcı takibi açısından gün sonu önemli KAP haberleri içinde değerlendirildi.",
    "etkiYorumu": "Detayları işlem ve şirket haber akışı açısından takip edilmeli."
  },
  {
    "baslik": "GARFL",
    "etki": "Nötr / Takip Edilmeli",
    "kapLink": "https://www.kap.org.tr/tr/Bildirim/1620644",
    "metin": "GARFL için KAP'ta özel durum açıklaması yayımlandı. Finansal kuruluşlarda sermaye, borçlanma veya yönetimsel bildirimler yatırımcı takibinde önem taşır.",
    "etkiYorumu": "Doğrudan fiyat etkisi sınırlı olabilir; bildirim detayları takip edilmeli."
  },
  {
    "baslik": "BIST Hak Kullanımı Duyurusu",
    "etki": "Nötr / Takip Edilmeli",
    "kapLink": "https://www.kap.org.tr/tr/Bildirim/1620648",
    "metin": "Borsa İstanbul, BIGEN, BIOEN, BMSTL, TABGD ve YBTAS paylarında hak kullanımı kaynaklı teorik fiyat duyurusu yayımladı. Hak kullanımı duyuruları temettü, sermaye artırımı veya diğer kurumsal işlemler nedeniyle teknik fiyatlama etkisi yaratır.",
    "etkiYorumu": "Teknik fiyatlama etkisi bulunur; işlem günü açılış fiyatı ve hak kullanım detayı izlenmeli."
  },
  {
    "baslik": "BIST Hak Kullanımı Duyurusu",
    "etki": "Nötr / Takip Edilmeli",
    "kapLink": "https://www.kap.org.tr/tr/Bildirim/1620651",
    "metin": "Borsa İstanbul, EGEGY, HLGYO, ISKPL ve PSGYO payları için hak kullanımı nedeniyle ilgili hakları kullanılmış teorik fiyat bilgilerini duyurdu. Bu tür duyurular yatırımcıya işlem günü teknik fiyat farkını açıklar.",
    "etkiYorumu": "Kurumsal işlem kaynaklı teknik fiyatlama etkisi vardır; temel değer değişimiyle karıştırılmamalı."
  },
  {
    "baslik": "VakıfBank (VAKBN)",
    "etki": "Pozitif",
    "kapLink": "https://www.kap.org.tr/tr/Bildirim/1620669",
    "metin": "VAKBN için gün içinde önemli bir KAP bildirimi yayımlandı. Banka haberleri, finansman yapısı, borçlanma aracı ihracı veya sermaye piyasası işlemleri üzerinden piyasa gündeminde ayrı başlık olarak izlenebilir.",
    "etkiYorumu": "Banka ölçeği nedeniyle ayrı haber niteliği taşıyan başlıklardan biri; açıklama detayı finansal etki açısından takip edilmeli."
  },
  {
    "baslik": "Yonga Mobilya (YONGA)",
    "etki": "Nötr / Takip Edilmeli",
    "kapLink": "https://www.kap.org.tr/tr/Bildirim/1620709",
    "metin": "YONGA için gün içinde özel durum açıklaması yayımlandı. Şirket bazlı bu tip bildirimler faaliyet, sermaye veya yönetimsel süreçler açısından gün sonu önemli KAP haberleri içinde takip edildi.",
    "etkiYorumu": "Detaylar şirketin faaliyet ve yatırımcı algısı açısından izlenmeli."
  },
  {
    "baslik": "AVGYO / MTY",
    "etki": "Nötr / Takip Edilmeli",
    "kapLink": "https://www.kap.org.tr/tr/Bildirim/1620734",
    "metin": "AVGYO ve MTY bağlantılı KAP bildirimi günün takip edilen başlıkları arasında yer aldı. Gayrimenkul yatırım ortaklığı ve ilişkili şirket haberlerinde işlem yapısı ile taraflar dikkatle değerlendirilmelidir.",
    "etkiYorumu": "Doğrudan operasyonel etkiden çok ortaklık/işlem yapısı açısından takip edilmeli."
  },
  {
    "baslik": "Metro Holding (METRO)",
    "etki": "Pozitif",
    "kapLink": "https://www.kap.org.tr/tr/Bildirim/1620735",
    "metin": "METRO için gün içinde önemli bir özel durum açıklaması yayımlandı. Holding yapısındaki şirketlerde iştirak, varlık veya stratejik işlem haberleri piyasa algısı açısından ayrı önem taşıyabilir.",
    "etkiYorumu": "Holding portföyü ve işlem detayı üzerinden değerlendirilmeli; tek başına kısa vadeli fiyat yorumu yapılmamalı."
  },
  {
    "baslik": "DAP Gayrimenkul (DAPGM)",
    "etki": "Nötr / Takip Edilmeli",
    "kapLink": "https://www.kap.org.tr/tr/Bildirim/1620743",
    "metin": "DAPGM için sermaye ve finansman yapısıyla bağlantılı KAP bildirimi yayımlandı. Gayrimenkul geliştirme şirketlerinde sermaye avansı, finansman ve proje nakit akışı başlıkları yatırımcılar tarafından yakından izlenir.",
    "etkiYorumu": "Finansman ve proje yapısı açısından takip edilmeli; doğrudan kârlılık etkisi detaylara bağlıdır."
  },
  {
    "baslik": "Balsu Gıda (BALSU)",
    "etki": "Nötr / Takip Edilmeli",
    "kapLink": "https://www.kap.org.tr/tr/Bildirim/1620744",
    "metin": "BALSU için gün içinde KAP bildirimi yayımlandı. Gıda sektöründeki şirketlerde üretim, satış, kapasite veya finansman odaklı haber akışları faaliyet görünümü açısından takip edilir.",
    "etkiYorumu": "Şirket özelindeki gelişme detayları izlenmeli; etkisi bildirim içeriğine göre sınırlı veya destekleyici olabilir."
  },
  {
    "baslik": "ZERGY",
    "etki": "Nötr / Takip Edilmeli",
    "kapLink": "https://www.kap.org.tr/tr/Bildirim/1620745",
    "metin": "ZERGY için özel durum açıklaması yayımlandı. Gün sonu KAP özetinde şirketin bildirim başlığı yatırımcı takibi açısından önemli görülen başlıklar arasında değerlendirildi.",
    "etkiYorumu": "Detaylar şirket faaliyetleri ve işlem yapısı açısından takip edilmeli."
  },
  {
    "baslik": "Ahlatcı Doğal Gaz (AHGAZ)",
    "etki": "Nötr / Takip Edilmeli",
    "kapLink": "https://www.kap.org.tr/tr/Bildirim/1620749",
    "metin": "AHGAZ için gün içinde özel durum açıklaması yayımlandı. Enerji ve doğal gaz tarafındaki şirket haberleri, faaliyet yapısı ve finansal görünüm açısından piyasada yakından izlenir.",
    "etkiYorumu": "Enerji sektörü bağlantısı nedeniyle takip edilmeli; doğrudan etki bildirim detayına bağlıdır."
  },
  {
    "baslik": "A1 Capital / PRDGS / RTALB",
    "etki": "Nötr / Takip Edilmeli",
    "kapLink": "https://www.kap.org.tr/tr/Bildirim/1620751",
    "metin": "A1 Capital, PRDGS ve RTALB paylarıyla bağlantılı toptan alış satış işlemi bildirimi yayımladı. Bu tür işlemler pay sahipliği, likidite ve yatırımcı algısı açısından önem taşır.",
    "etkiYorumu": "Operasyonel etki yaratmaz; ortaklık yapısı ve işlem büyüklüğü açısından izlenir."
  },
  {
    "baslik": "Alarko Holding (ALARK)",
    "etki": "Sınırlı Pozitif",
    "kapLink": "https://www.kap.org.tr/tr/Bildirim/1620757",
    "metin": "ALARK, müşterek ortaklığı Alcen Enerji Dağıtım ve Perakende Satış Hizmetleri A.Ş.'nin olağanüstü genel kurul kararının ticaret siciline tescil edildiğini açıkladı. Enerji yapılanması tarafındaki resmi süreçte yeni bir aşama tamamlandı.",
    "etkiYorumu": "Enerji portföyü yapılanması açısından destekleyici; doğrudan kısa vadeli finansal etki açıklanmadığı için süreç bazlı izlenmeli."
  },
  {
    "baslik": "Lider Faktoring (LIDER)",
    "etki": "Nötr / Takip Edilmeli",
    "kapLink": "https://www.kap.org.tr/tr/Bildirim/1620764",
    "metin": "LIDER için gün içinde KAP bildirimi yayımlandı. Finansal kuruluşlarda sermaye piyasası işlemleri, borçlanma ve finansman yapısına ilişkin açıklamalar yatırımcı takibinde önem taşır.",
    "etkiYorumu": "Finansman ve bilanço yapısı açısından takip edilmeli; doğrudan etki bildirim detayına bağlıdır."
  },
  {
    "baslik": "Bulls Girişim Sermayesi (BULGS)",
    "etki": "Sınırlı Pozitif",
    "kapLink": "https://www.kap.org.tr/tr/Bildirim/1620766",
    "metin": "BULGS, Birlik Mensucat Ticaret ve Sanayi İşletmesi A.Ş. paylarının satın alınması sürecinin tamamlandığını açıkladı. Bildirimde 9.576.190 adet payın 92,4 milyon TL bedelle devralındığı ve edinim sonrası pay oranının %10,73 olduğu yer aldı.",
    "etkiYorumu": "Girişim sermayesi yatırımı portföy çeşitliliği açısından destekleyici olabilir; yatırımın faaliyetlere katkısı zamanla izlenecek."
  }
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "25 Haziran 2026 Perşembe Önemli KAP Haberleri",
  description:
    "25 Haziran 2026 Perşembe günü KAP'a düşen önemli bildirimlerin özeti: DERHL, TRALT, ISGSY, YIGIT, DENVA, SMRTG, FORTE, MEGMT, VAKBN, ALARK ve diğer öne çıkan şirket haberleri.",
  datePublished: "2026-06-25T09:00:00+03:00",
  dateModified: "2026-06-25T22:30:00+03:00",
  url: "https://www.hocaileborsa.com/haber/25-haziran-2026-onemli-kap-haberleri",
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
              alt="25 Haziran 2026 Perşembe Önemli KAP Haberleri"
              fill
              unoptimized
              className="object-cover"
            />
          </div>

          <div className="p-6 md:p-10">
            <h1 className="text-2xl font-bold leading-tight tracking-tight text-slate-900 md:text-3xl lg:text-4xl">
              25 Haziran 2026 Perşembe Önemli KAP Haberleri
            </h1>

            <div className="mb-4 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center rounded-md bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700 ring-1 ring-inset ring-blue-600/20">
                Finans
              </span>
              <time dateTime="2026-06-25" className="text-sm text-slate-500">
                25 Haziran 2026
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
                Borsa İstanbul’da 25 Haziran 2026 Perşembe günü KAP’a düşen önemli
                bildirimlerde halka arz onayları, madencilik varlık devri,
                biyoteknoloji yatırımı, kapasite artışı, sermaye işlemleri,
                yeni iş ilişkileri, portföy alımları ve hak kullanımı duyuruları
                öne çıktı.
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
                Günün en dikkat çeken ayrı haber başlıkları DERHL, TRALT, ISGSY,
                YIGIT ve ALARK tarafında oluştu. Gün sonu özetinde ise DENVA,
                SMRTG, FORTE, MEGMT, QNBFK, DITAS, BULGS ve hak kullanımı
                bildirimleri öne çıkan takip başlıkları arasında yer aldı.
              </div>

              <HaberIlgiliBolumler
                slug="25-haziran-2026-onemli-kap-haberleri"
                baslik="25 Haziran 2026 Perşembe Önemli KAP Haberleri"
              />

              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm font-medium leading-7 text-amber-900 md:text-base">
                ⚠️ Bu özet bilgilendirme amaçlıdır, yatırım tavsiyesi değildir.
              </div>
            </div>
          </div>
          <HaberAltKisim href="/haber/25-haziran-2026-onemli-kap-haberleri" />

          <AuthorBox />
        </article>
      </div>
    </main>
  );
}
