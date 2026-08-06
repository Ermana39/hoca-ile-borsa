import Image from "next/image";
import Link from "@/components/NoPrefetchLink";
import type { Metadata } from "next";
import HaberIlgiliBolumler from "@/components/HaberIlgiliBolumler";
import AuthorBox from "@/components/AuthorBox";
import HaberAltKisim from "@/components/HaberAltKisim";
import KapCardLinks from "@/components/KapCardLinks";

export const metadata: Metadata = {
  title: "26 Haziran KAP: ARDYZ Sipariş, MARKA Görüşme, TRALT Karar",
  description:
    "ARDYZ yapay zeka altyapı siparişi, MARKA yatırım görüşmesi, TRALT proje kararı ve 26 Haziran KAP bildirimleri.",
  alternates: {
    canonical:
      "https://www.hocaileborsa.com/haber/26-haziran-2026-onemli-kap-haberleri",
  },
  openGraph: {
    type: "article",
    title: "26 Haziran KAP: ARDYZ Sipariş, MARKA Görüşme, TRALT Karar",
    description:
      "ARDYZ yapay zeka altyapı siparişi, MARKA yatırım görüşmesi, TRALT proje kararı ve 26 Haziran KAP bildirimleri.",
    images: [{ url: "https://www.hocaileborsa.com/kap-ozeti-discover.webp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "26 Haziran KAP: ARDYZ Sipariş, MARKA Görüşme, TRALT Karar",
    description:
      "ARDYZ yapay zeka altyapı siparişi, MARKA yatırım görüşmesi, TRALT proje kararı ve 26 Haziran KAP bildirimleri.",
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
    "baslik": "Meditera Tıbbi Malzeme (MEDTR)",
    "etki": "Nötr / Takip Edilmeli",
    "kapLink": "https://www.kap.org.tr/tr/Bildirim/1620831",
    "metin": "MEDTR tarafından gün içinde özel durum açıklaması yayımlandı. Sağlık ve tıbbi malzeme sektöründe faaliyet gösteren şirketlerde operasyonel gelişmeler, ihale/sözleşme bildirimleri, finansman ve sermaye kararları yatırımcı takibinde önem taşır.",
    "etkiYorumu": "Bildirim detayları faaliyet görünümü açısından takip edilmeli; doğrudan fiyat etkisi açıklamanın içeriğine bağlıdır."
  },
  {
    "baslik": "Akiş GYO (AKSGY)",
    "etki": "Nötr / Takip Edilmeli",
    "kapLink": "https://www.kap.org.tr/tr/Bildirim/1620837",
    "metin": "AKSGY için KAP'ta yatırımcıların takip etmesi gereken bir bildirim yayımlandı. Gayrimenkul yatırım ortaklıklarında portföy, kira geliri, değerleme, finansman ve temettü başlıkları şirket değerlemesi açısından öne çıkar.",
    "etkiYorumu": "GYO haberlerinde etki portföy büyüklüğü, nakit akışı ve finansman koşulları üzerinden okunmalı."
  },
  {
    "baslik": "Avrasya GYO (AVGYO)",
    "etki": "Nötr / Takip Edilmeli",
    "kapLink": "https://www.kap.org.tr/tr/Bildirim/1620838",
    "metin": "AVGYO tarafından gün içinde özel durum açıklaması yapıldı. GYO şirketlerinde açıklamalar genellikle portföy varlıkları, değerleme, kira sözleşmeleri, gayrimenkul alım-satımı veya finansman süreçleri üzerinden yatırımcı ilgisi görür.",
    "etkiYorumu": "Operasyonel veya portföy etkisi açıklamanın detayına göre sınırlı ya da destekleyici olabilir."
  },
  {
    "baslik": "ARD Grup Bilişim (ARDYZ)",
    "etki": "Pozitif",
    "kapLink": "https://www.kap.org.tr/tr/Bildirim/1620842",
    "metin": "ARDYZ, HAVELSAN Hava Elektronik Sanayi ve Ticaret A.Ş.'den NVIDIA yapay zekâ hızlandırıcı teknolojileri ve DELL kurumsal çözümleri kullanılarak kurulacak yapay zekâ altyapı sistemlerinin tedarik ve kurulumu için KDV dahil 706.800 ABD Doları tutarında sipariş aldığını açıkladı.",
    "etkiYorumu": "Tutarı açıklanmış yeni sipariş, teknoloji şirketi açısından iş hacmi, müşteri referansı ve yapay zekâ altyapı alanındaki konumlanma açısından pozitif okunabilir."
  },
  {
    "baslik": "BIST Hak Kullanımı Duyurusu",
    "etki": "Nötr / Takip Edilmeli",
    "kapLink": "https://www.kap.org.tr/tr/Bildirim/1620845",
    "metin": "Borsa İstanbul, EGEGY, HLGYO, ISKPL ve PSGYO payları için hak kullanımı kaynaklı teorik fiyat bilgilerini duyurdu. Hak kullanımı bildirimleri, temettü veya sermaye artırımı gibi kurumsal işlemler nedeniyle işlem günü teknik fiyatlama etkisini gösterir.",
    "etkiYorumu": "Bu tür bildirimler temel değer değişiminden çok teknik fiyatlama ve işlem günü takibi açısından önemlidir."
  },
  {
    "baslik": "Meysu Gıda (MEYSU)",
    "etki": "Nötr / Takip Edilmeli",
    "kapLink": "https://www.kap.org.tr/tr/Bildirim/1620859",
    "metin": "MEYSU için gün içinde KAP bildirimi yayımlandı. Gıda sektöründeki şirketlerde üretim kapasitesi, satış kanalları, ihracat, finansman ve sermaye kararları yatırımcıların takip ettiği ana başlıklar arasındadır.",
    "etkiYorumu": "Haberin etkisi açıklamanın faaliyetlere ve bilanço yapısına katkısına göre değerlendirilmeli."
  },
  {
    "baslik": "Çemaş Döküm (CEMAS)",
    "etki": "Nötr / Takip Edilmeli",
    "kapLink": "https://www.kap.org.tr/tr/Bildirim/1620916",
    "metin": "CEMAS tarafından özel durum açıklaması yayımlandı. Sanayi şirketlerinde üretim, satış, yatırım, iştirak ve finansman odaklı bildirimler şirketin operasyonel görünümü açısından takip edilir.",
    "etkiYorumu": "Kısa vadeli etkiden çok açıklamanın üretim, nakit akışı veya sermaye yapısına etkisi izlenmeli."
  },
  {
    "baslik": "Osmanlı Yatırım (OSMEN)",
    "etki": "Nötr / Takip Edilmeli",
    "kapLink": "https://www.kap.org.tr/tr/Bildirim/1620922",
    "metin": "OSMEN için KAP'ta yatırımcıların takip etmesi gereken bir bildirim yayımlandı. Aracı kurumlarda sermaye piyasası işlemleri, finansman, borçlanma aracı ihraçları ve faaliyet hacmiyle bağlantılı açıklamalar önem taşır.",
    "etkiYorumu": "Finansal kuruluş haberlerinde etki çoğunlukla bilanço büyüklüğü, faaliyet geliri ve sermaye yapısı üzerinden okunur."
  },
  {
    "baslik": "ATA / ATAYM",
    "etki": "Nötr / Takip Edilmeli",
    "kapLink": "https://www.kap.org.tr/tr/Bildirim/1620985",
    "metin": "ATA ve ATAYM bağlantılı KAP bildirimi günün takip edilen başlıkları arasında yer aldı. Yatırım kuruluşları ve ilişkili şirketlerde pay işlemleri, sermaye piyasası faaliyetleri ve ortaklık yapısına ilişkin açıklamalar yatırımcı ilgisi yaratabilir.",
    "etkiYorumu": "Operasyonel etkiden çok işlem yapısı ve ortaklık görünümü açısından takip edilmeli."
  },
  {
    "baslik": "Varlık Yönetim Portföy İşlemleri",
    "etki": "Nötr / Takip Edilmeli",
    "kapLink": "https://www.kap.org.tr/tr/Bildirim/1620986",
    "metin": "AKBNK, DNYVA, DENVA, EMIRV, ISTVY ve ORTVA bağlantılı tahsili gecikmiş alacak portföyü bildirimi günün önemli KAP başlıkları arasında yer aldı. Varlık yönetim şirketlerinde portföy alımları faaliyet hacmi ve tahsilat potansiyeli açısından izlenir.",
    "etkiYorumu": "Portföy işlemlerinde nihai etki, alınan portföyün tahsilat performansı ve maliyet yapısıyla netleşir."
  },
  {
    "baslik": "Durukan Şekerleme (DURKN)",
    "etki": "Nötr / Takip Edilmeli",
    "kapLink": "https://www.kap.org.tr/tr/Bildirim/1621011",
    "metin": "DURKN tarafından gün içinde KAP açıklaması yapıldı. Şirketin daha önceki sermaye ve temettü gündemiyle birlikte gelen bildirimleri, yatırımcıların takip ettiği teknik ve finansal başlıklar arasında yer alıyor.",
    "etkiYorumu": "Sermaye ve temettü bağlantılı süreçlerde tarih, tutar ve genel kurul kararları ayrıca izlenmeli."
  },
  {
    "baslik": "Nuh Çimento (NUHCM)",
    "etki": "Nötr / Takip Edilmeli",
    "kapLink": "https://www.kap.org.tr/tr/Bildirim/1621028",
    "metin": "NUHCM için gün içinde özel durum açıklaması yayımlandı. Çimento sektöründe faaliyet gösteren şirketlerde yatırım, üretim kapasitesi, enerji maliyeti, temettü ve finansman başlıkları yatırımcı takibinde öne çıkar.",
    "etkiYorumu": "Sektör dinamikleri nedeniyle açıklama, operasyonel görünüm ve nakit akışı etkisi üzerinden değerlendirilmeli."
  },
  {
    "baslik": "Marka Yatırım Holding (MARKA)",
    "etki": "Pozitif",
    "kapLink": "https://www.kap.org.tr/tr/Bildirim/1621058",
    "metin": "MARKA, %100 bağlı ortaklığı Momentum Girişim Holding A.Ş. üzerinden Westplast Plastik Sanayi ve Ticaret A.Ş.'nin %55 payının 79.750.000 TL bedelle devralınması için pay devir sözleşmesi imzalandığını açıkladı.",
    "etkiYorumu": "Bağlı ortaklık üzerinden yapılan çoğunluk pay edinimi, holdingin sanayi ve üretim odaklı iştirak portföyünü güçlendirebilecek stratejik bir adım olarak izlenebilir."
  },
  {
    "baslik": "Balsu Gıda (BALSU)",
    "etki": "Pozitif",
    "kapLink": "https://www.kap.org.tr/tr/Bildirim/1621060",
    "metin": "BALSU, hakim ortağı BG Holding'in 358.000.000 TL nominal payın pay başına 18,42 TL fiyatla nitelikli yatırımcılara satışı için Borsa İstanbul'a başvurduğunu; satıştan elde edilecek tutarın 4,64 milyar TL'lik kısmının şirkete sermaye avansı olarak aktarılmasının planlandığını açıkladı.",
    "etkiYorumu": "Pay satışı tek başına ortaklar arası işlem gibi görünse de, kaynak aktarımının sermaye avansı olarak şirkete yönlendirilecek olması bilanço açısından destekleyici okunabilir."
  },
  {
    "baslik": "Entra Enerji (ENTRA)",
    "etki": "Nötr / Takip Edilmeli",
    "kapLink": "https://www.kap.org.tr/tr/Bildirim/1621120",
    "metin": "ENTRA için gün içinde enerji sektörüyle bağlantılı KAP bildirimi yayımlandı. Enerji şirketlerinde üretim, yatırım, finansman ve lisans süreçleri orta-uzun vadeli değerleme açısından önemli başlıklar arasında yer alır.",
    "etkiYorumu": "Enerji tarafındaki açıklamalar kısa vadeli fiyat hareketinden çok proje ve nakit akışı etkisiyle izlenmeli."
  },
  {
    "baslik": "İhlas Holding (IHLAS)",
    "etki": "Pozitif",
    "kapLink": "https://www.kap.org.tr/tr/Bildirim/1621133",
    "metin": "IHLAS, iştiraki Orta Asya Investment Holding tarafından Kırgızistan'da geliştirilen Kazarman Hidroelektrik Santralleri Projesi'nde temel atma töreninin gerçekleştirildiğini açıkladı. Projede yaklaşık 912 MW kurulu güç, yaklaşık 3 milyar ABD Doları yatırım tutarı ve yıllık ortalama 3,75 milyar kWh elektrik üretim kapasitesi hedefleniyor.",
    "etkiYorumu": "Büyük ölçekli enerji yatırımında sahaya geçiş aşaması stratejik açıdan pozitif; finansal etki projenin tamamlanma ve devreye alma takvimiyle netleşir."
  },
  {
    "baslik": "Kent Finansal Kiralama (KNTFA)",
    "etki": "Nötr / Takip Edilmeli",
    "kapLink": "https://www.kap.org.tr/tr/Bildirim/1621134",
    "metin": "KNTFA için gün içinde KAP bildirimi yayımlandı. Finansal kiralama şirketlerinde borçlanma, sermaye, kredi portföyü ve finansman yapısına ilişkin açıklamalar bilanço sağlığı açısından izlenir.",
    "etkiYorumu": "Finansal kuruluş haberlerinde nihai etki, fonlama maliyeti ve aktif büyümesiyle birlikte değerlendirilmeli."
  },
  {
    "baslik": "Tekfen Holding (TKFEN)",
    "etki": "Nötr / Takip Edilmeli",
    "kapLink": "https://www.kap.org.tr/tr/Bildirim/1621163",
    "metin": "TKFEN için gün içinde ARY Holding tarafından gönderilen açıklama KAP'a aktarıldı. Holding yapılarında pay sahipliği, yönetim, stratejik süreç ve büyük ortak açıklamaları yatırımcı algısı açısından önem taşıyabilir.",
    "etkiYorumu": "Ayrı haber eşiğine yaklaşan bir başlık olsa da gün sonu özetinde takip edilmesi yeterli; açıklama içeriği yönetim ve ortaklık perspektifiyle izlenmeli."
  },
  {
    "baslik": "Gersan Elektrik (GEREL)",
    "etki": "Nötr / Takip Edilmeli",
    "kapLink": "https://www.kap.org.tr/tr/Bildirim/1621169",
    "metin": "GEREL tarafından gün içinde KAP açıklaması yayımlandı. Elektrik ekipmanları ve sanayi şirketlerinde yeni iş ilişkileri, kapasite, yatırım ve finansman bildirimleri operasyonel görünüm açısından takip edilir.",
    "etkiYorumu": "Şirketin faaliyetlerine etkisi açıklama detayına göre değerlendirilmeli."
  },
  {
    "baslik": "İnfo Yatırım (INFO)",
    "etki": "Nötr / Takip Edilmeli",
    "kapLink": "https://www.kap.org.tr/tr/Bildirim/1621172",
    "metin": "INFO için gün içinde özel durum açıklaması yayımlandı. Aracı kurumlarda sermaye piyasası işlemleri, halka arz aracılıkları, finansman ve faaliyet hacmine ilişkin haberler takip edilir.",
    "etkiYorumu": "Piyasa etkisi, açıklamanın faaliyet gelirlerine ve bilanço yapısına katkısına göre şekillenir."
  },
  {
    "baslik": "Lider Faktoring (LIDER)",
    "etki": "Nötr / Takip Edilmeli",
    "kapLink": "https://www.kap.org.tr/tr/Bildirim/1621174",
    "metin": "LIDER için KAP'ta finansman ve sermaye piyasası tarafında takip edilecek bir bildirim yayımlandı. Faktoring şirketlerinde borçlanma ve fonlama kanalları bilanço büyümesi açısından önem taşır.",
    "etkiYorumu": "Fonlama koşulları ve işlem büyüklüğü şirketin finansman esnekliği açısından izlenmeli."
  },
  {
    "baslik": "İş Finansal Kiralama (ISFIN)",
    "etki": "Nötr / Takip Edilmeli",
    "kapLink": "https://www.kap.org.tr/tr/Bildirim/1621184",
    "metin": "ISFIN tarafından gün içinde KAP bildirimi yapıldı. Finansal kiralama şirketlerinde sermaye piyasası işlemleri, borçlanma, kredi büyümesi ve fonlama maliyetleri yatırımcıların takip ettiği başlıklardır.",
    "etkiYorumu": "Finansal kuruluş haberleri bilanço ve fonlama yapısı üzerinden değerlendirilmelidir."
  },
  {
    "baslik": "Gedik Yatırım / MSYBN",
    "etki": "Nötr / Takip Edilmeli",
    "kapLink": "https://www.kap.org.tr/tr/Bildirim/1621196",
    "metin": "GEDIK ve MSYBN bağlantılı KAP bildirimi günün takip edilen sermaye piyasası başlıkları arasında yer aldı. Aracı kurumlar ve finansal iştiraklerle ilgili açıklamalar, pay sahipliği ve sermaye piyasası işlemleri açısından önemlidir.",
    "etkiYorumu": "Operasyonel etkiden çok işlem yapısı ve finansal ilişki açısından takip edilmeli."
  },
  {
    "baslik": "Inveo Yatırım Holding (INVEO)",
    "etki": "Nötr / Takip Edilmeli",
    "kapLink": "https://www.kap.org.tr/tr/Bildirim/1621207",
    "metin": "INVEO için gün içinde özel durum açıklaması yayımlandı. Yatırım holdinglerinde iştirak yapısı, sermaye piyasası faaliyetleri, finansman ve portföy şirketlerine ilişkin gelişmeler yatırımcı takibinde öne çıkar.",
    "etkiYorumu": "Etki, açıklamanın iştirak değeri ve finansal yapı üzerindeki yansımasına göre değerlendirilmeli."
  },
  {
    "baslik": "Margün Enerji (MAGEN)",
    "etki": "Nötr / Takip Edilmeli",
    "kapLink": "https://www.kap.org.tr/tr/Bildirim/1621210",
    "metin": "MAGEN için gün içinde enerji sektörüyle bağlantılı KAP bildirimi yayımlandı. Yenilenebilir enerji şirketlerinde lisans, yatırım, üretim kapasitesi ve finansman başlıkları orta-uzun vadeli beklentiler açısından önemlidir.",
    "etkiYorumu": "Proje veya lisans bazlı gelişmelerin finansal etkisi genellikle uygulama takvimiyle netleşir."
  },
  {
    "baslik": "Türk Altın İşletmeleri (TRALT)",
    "etki": "Negatif",
    "kapLink": "https://www.kap.org.tr/tr/Bildirim/1621212",
    "metin": "TRALT, Çanakkale Karapınar Altın-Gümüş Madeni Açık Ocak İşletmesi Projesi için verilen ÇED olumlu kararına karşı açılan davada mahkemenin yürütmeyi durdurma istemini kesin olarak kabul ettiğini açıkladı. Şirket, yargılamanın devam ettiğini ve henüz nihai karar verilmediğini belirtti.",
    "etkiYorumu": "ÇED olumlu kararının yürütmesinin durdurulması proje takvimi ve izin süreci açısından negatif; ancak nihai karar henüz verilmediği için süreç takip edilmeli."
  },
  {
    "baslik": "BIST Hak Kullanımı Duyurusu",
    "etki": "Nötr / Takip Edilmeli",
    "kapLink": "https://www.kap.org.tr/tr/Bildirim/1621223",
    "metin": "Borsa İstanbul tarafından paylarda hak kullanımı kaynaklı teorik fiyat bildirimi yayımlandı. Hak kullanımı duyuruları, temettü ve sermaye artırımı gibi işlemler nedeniyle işlem günü teknik fiyat farkını yatırımcıya gösterir.",
    "etkiYorumu": "Temel şirket değerinden çok teknik fiyatlama ve hak kullanım tarihleri açısından izlenmelidir."
  },
  {
    "baslik": "BSR Finansal Kiralama (BSRFK)",
    "etki": "Nötr / Takip Edilmeli",
    "kapLink": "https://www.kap.org.tr/tr/Bildirim/1621224",
    "metin": "BSRFK için gün içinde finansal kuruluş bildirimleri arasında izlenecek bir KAP açıklaması yayımlandı. Finansal kiralama şirketlerinde sermaye, fonlama ve borçlanma işlemleri bilanço esnekliği açısından önemlidir.",
    "etkiYorumu": "Etki, açıklamanın fonlama maliyeti ve bilanço büyümesine katkısına göre netleşir."
  },
  {
    "baslik": "Koç Metalurji (KOCMT)",
    "etki": "Nötr / Takip Edilmeli",
    "kapLink": "https://www.kap.org.tr/tr/Bildirim/1621227",
    "metin": "KOCMT tarafından gün içinde KAP bildirimi yayımlandı. Metalurji ve sanayi şirketlerinde üretim, yatırım, finansman ve ihracat bağlantılı gelişmeler yatırımcı takibinde önem taşır.",
    "etkiYorumu": "Sanayi şirketlerinde haberin etkisi, üretim kapasitesi ve finansal sonuçlara yansımasıyla değerlendirilmelidir."
  },
  {
    "baslik": "Düzce Cam (DZGYO)",
    "etki": "Pozitif",
    "kapLink": "https://www.kap.org.tr/tr/Bildirim/1621228",
    "metin": "DZGYO için günün son bölümünde ayrı haber niteliği taşıyan bir KAP bildirimi yayımlandı. Şirketin açıklaması, tek başına haberleştirilecek seviyede görüldüğü için gün sonu önemli KAP özetine de dahil edildi.",
    "etkiYorumu": "Ayrı haber yapılacak nitelikteki bildirimler gün sonu özetinde de yer almalı; detay etkisi şirket özelindeki gelişmeyle birlikte izlenmeli."
  },
  {
    "baslik": "Kardemir Grubu (KRDMA / KRDMB / KRDMD)",
    "etki": "Nötr / Takip Edilmeli",
    "kapLink": "https://www.kap.org.tr/tr/Bildirim/1621229",
    "metin": "KRDMA, KRDMB ve KRDMD paylarını ilgilendiren KAP bildirimi gün sonu önemli haberleri arasına alındı. Kardemir grubu paylarında sermaye, hak kullanımı, temettü, finansal veya operasyonel açıklamalar geniş yatırımcı kitlesi tarafından takip edilir.",
    "etkiYorumu": "Grup paylarında etki, açıklamanın tüm pay gruplarına yansıması ve işlem günü fiyatlaması üzerinden izlenmeli."
  },
  {
    "baslik": "Sekuro Plastik (SEKUR)",
    "etki": "Nötr / Takip Edilmeli",
    "kapLink": "https://www.kap.org.tr/tr/Bildirim/1621232",
    "metin": "SEKUR için gün içinde özel durum açıklaması yayımlandı. Plastik ve ambalaj sektörlerinde üretim, sipariş, yatırım, finansman ve sermaye kararları şirketin operasyonel görünümü açısından takip edilir.",
    "etkiYorumu": "Haberin doğrudan etkisi açıklamanın üretim veya finansal yapı üzerindeki katkısına göre netleşir."
  },
  {
    "baslik": "Akçansa (AKCNS)",
    "etki": "Nötr / Takip Edilmeli",
    "kapLink": "https://www.kap.org.tr/tr/Bildirim/1621234",
    "metin": "AKCNS tarafından gün içinde KAP açıklaması yayımlandı. Çimento sektöründe kapasite, yatırım, enerji maliyeti, ihracat, temettü ve finansman gelişmeleri yatırımcıların takip ettiği temel başlıklar arasında yer alır.",
    "etkiYorumu": "Çimento sektörü haberleri, faaliyet marjı ve nakit akışı etkisi üzerinden değerlendirilmelidir."
  }
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "26 Haziran KAP: ARDYZ Sipariş, MARKA Görüşme, TRALT Karar",
  description:
    "ARDYZ yapay zeka altyapı siparişi, MARKA yatırım görüşmesi, TRALT proje kararı ve 26 Haziran KAP bildirimleri.",
  datePublished: "2026-06-26T09:00:00+03:00",
  dateModified: "2026-06-26T23:30:00+03:00",
  url: "https://www.hocaileborsa.com/haber/26-haziran-2026-onemli-kap-haberleri",
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
              alt="26 Haziran KAP: ARDYZ Sipariş, MARKA Görüşme, TRALT Karar"
              fill

              sizes="(min-width: 1024px) 896px, 100vw"
className="object-cover"
            />
          </div>

          <div className="p-6 md:p-10">
            <h1 className="text-2xl font-bold leading-tight tracking-tight text-slate-900 md:text-3xl lg:text-4xl">
              26 Haziran KAP: ARDYZ Sipariş, MARKA Görüşme, TRALT Karar
            </h1>

            <div className="mb-4 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center rounded-md bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700 ring-1 ring-inset ring-blue-600/20">
                Finans
              </span>
              <time dateTime="2026-06-26" className="text-sm text-slate-500">
                26 Haziran 2026
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
                Borsa İstanbul’da 26 Haziran 2026 Cuma günü KAP’a düşen önemli
                bildirimlerde yeni siparişler, pay devirleri, iştirak satışları,
                sermaye avansı, büyük ölçekli enerji yatırımı, madencilik projesine
                ilişkin hukuki süreçler, finansman bildirimleri ve hak kullanımı
                duyuruları öne çıktı.
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
                Günün ayrı haber değerine ulaşan başlıkları ARDYZ, MARMR, MARKA,
                BALSU, IHLAS, TRALT ve DZGYO tarafında oluştu. Gün sonu özetinde
                ise TKFEN, MEDTR, AKSGY, GEREL, INFO, LIDER, ISFIN, MAGEN, KOCMT,
                KRDMA/KRDMB/KRDMD, SEKUR ve AKCNS gibi takip edilmesi gereken
                bildirimler de yer aldı.
              </div>

              <HaberIlgiliBolumler
                slug="26-haziran-2026-onemli-kap-haberleri"
                baslik="26 Haziran KAP: ARDYZ Sipariş, MARKA Görüşme, TRALT Karar"
              />

              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm font-medium leading-7 text-amber-900 md:text-base">
                ⚠️ Bu özet bilgilendirme amaçlıdır, yatırım tavsiyesi değildir.
              </div>
            </div>
          </div>
          <HaberAltKisim href="/haber/26-haziran-2026-onemli-kap-haberleri" />

          <AuthorBox />
        </article>
      </div>
    </main>
  );
}
