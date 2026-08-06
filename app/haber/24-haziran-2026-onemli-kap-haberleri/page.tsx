import Image from "next/image";
import Link from "@/components/NoPrefetchLink";
import type { Metadata } from "next";
import HaberIlgiliBolumler from "@/components/HaberIlgiliBolumler";
import AuthorBox from "@/components/AuthorBox";
import HaberAltKisim from "@/components/HaberAltKisim";
import KapCardLinks from "@/components/KapCardLinks";

export const metadata: Metadata = {
  title: "24 Haziran KAP: HRKET Bedelsiz, KLNMA Kredi, ALVES Yatırım",
  description:
    "HRKET bedelsiz başvurusu, KLNMA 350 milyon dolar kredi anlaşması, ALVES yatırım süreci ve 24 Haziran KAP özetleri.",
  alternates: {
    canonical:
      "https://www.hocaileborsa.com/haber/24-haziran-2026-onemli-kap-haberleri",
  },
  openGraph: {
    type: "article",
    title: "24 Haziran KAP: HRKET Bedelsiz, KLNMA Kredi, ALVES Yatırım",
    description:
      "HRKET bedelsiz başvurusu, KLNMA 350 milyon dolar kredi anlaşması, ALVES yatırım süreci ve 24 Haziran KAP özetleri.",
    images: [{ url: "https://www.hocaileborsa.com/kap-ozeti-discover.webp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "24 Haziran KAP: HRKET Bedelsiz, KLNMA Kredi, ALVES Yatırım",
    description:
      "HRKET bedelsiz başvurusu, KLNMA 350 milyon dolar kredi anlaşması, ALVES yatırım süreci ve 24 Haziran KAP özetleri.",
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
    "baslik": "İhlas Holding (IHLAS)",
    "etki": "Nötr / Takip Edilmeli",
    "kapLink": "https://www.kap.org.tr/tr/Bildirim/1620103",
    "metin": "IHLAS, bedelli sermaye artırımı sürecinde kullanılmayan rüçhan hakkı tutarına ilişkin açıklama yayımladı. Şirketin çıkarılmış sermayesinin 1,5 milyar TL’den 3 milyar TL’ye yükseltilmesine yönelik süreçte yeni pay alma hakkı kullanım dönemi tamamlandı.",
    "etkiYorumu": "Bedelli sermaye artırımında kullanılmayan payların büyüklüğü ve satış süreci yatırımcı algısı açısından takip edilmeli."
  },
  {
    "baslik": "İhlas Holding (IHLAS)",
    "etki": "Nötr / Takip Edilmeli",
    "kapLink": "https://www.kap.org.tr/tr/Bildirim/1620105",
    "metin": "IHLAS tarafından tasarruf sahiplerine satış duyurusu yayımlandı. Bildirim, kullanılmayan yeni pay alma haklarına karşılık gelen payların borsa birincil piyasada satış sürecine ilişkin yatırımcı bilgilendirmesi niteliği taşıyor.",
    "etkiYorumu": "Sermaye artırımı sürecinin teknik aşaması olduğu için fiyatlama ve arz tarafı izlenmeli."
  },
  {
    "baslik": "İhlas Holding (IHLAS)",
    "etki": "Nötr / Takip Edilmeli",
    "kapLink": "https://www.kap.org.tr/tr/Bildirim/1620104",
    "metin": "IHLAS, bedelli sermaye artırımında kullanılmayan payların Borsa İstanbul Birincil Piyasa satış tarihlerini duyurdu. 09 Haziran’da başlayan yeni pay alma hakkı kullanım sürecinin 23 Haziran’da tamamlandığı açıklandı.",
    "etkiYorumu": "Kalan payların satış performansı sermaye artırımının tamamlanma süreci açısından önemli olacak."
  },
  {
    "baslik": "Garanti Yatırım Ortaklığı (GRNYO)",
    "etki": "Nötr / Takip Edilmeli",
    "kapLink": "https://www.kap.org.tr/tr/Bildirim/1620053",
    "metin": "GRNYO, paylarının Borsa İstanbul’da oluşan ağırlıklı ortalama fiyatının pay başına net aktif değerinin 2 katını aşması nedeniyle açıklama yaptı. Yatırım ortaklıklarında piyasa fiyatı ile net aktif değer arasındaki fark yatırımcı takibinde önemli bir göstergedir.",
    "etkiYorumu": "Operasyonel haber değil; fiyat/net aktif değer makası nedeniyle takip edilmeli."
  },
  {
    "baslik": "Kimteks Poliüretan (KMPUR)",
    "etki": "Sınırlı Pozitif",
    "kapLink": "https://www.kap.org.tr/tr/Bildirim/1620046",
    "metin": "KMPUR, raylı sistemler sektörüne yönelik yeni ürün geliştirilmesine ilişkin özel durum açıklaması yayımladı. Sanayi şirketlerinde yeni ürün geliştirme adımları, faaliyet alanı çeşitliliği ve orta vadeli büyüme potansiyeli açısından izlenir.",
    "etkiYorumu": "Yeni ürün geliştirme haberi faaliyet çeşitliliği açısından destekleyici; finansal katkı zamanla netleşir."
  },
  {
    "baslik": "Pardus Girişim Sermayesi (PRDGS)",
    "etki": "Sınırlı Pozitif",
    "kapLink": "https://www.kap.org.tr/tr/Bildirim/1620037",
    "metin": "PRDGS, kayıtlı sermaye tavanı artırımı ve süre uzatımına ilişkin açıklama yaptı. Bildirimde mevcut kayıtlı sermaye tavanının 600 milyon TL’den 5 milyar TL’ye çıkarılması ve yeni geçerlilik tarihinin 2030 sonu olarak belirlenmesi öne çıktı.",
    "etkiYorumu": "Sermaye işlemleri için alan açan bir karar; doğrudan nakit etkisi bulunmuyor."
  },
  {
    "baslik": "Turcas Holding (TRCAS)",
    "etki": "Pozitif",
    "kapLink": "https://www.kap.org.tr/tr/Bildirim/1620030",
    "metin": "TRCAS, %30 oranındaki iştiraki Shell & Turcas Petrol A.Ş.’deki imtiyazlı temettü ödemesine ilişkin açıklama yaptı. Şirketin iştiraki üzerinden elde edeceği temettü, nakit akışı açısından günün dikkat çeken başlıklarından biri oldu.",
    "etkiYorumu": "İştirak kaynaklı temettü nakit akışını destekleyebilir; tek seferlik gelir etkisi olarak izlenmeli."
  },
  {
    "baslik": "Shell & Turcas Petrol (SHTRP)",
    "etki": "Nötr / Takip Edilmeli",
    "kapLink": "https://www.kap.org.tr/tr/Bildirim/1620029",
    "metin": "Shell & Turcas Petrol, 23 Haziran 2026 tarihli olağanüstü genel kurul kararına ilişkin bildirim yayımladı. Açıklama, öncelikli temettü dağıtımı gündemi ve genel kurul süreci açısından TRCAS haber akışıyla birlikte takip edilebilir.",
    "etkiYorumu": "Doğrudan işlem gören ana hisse etkisi sınırlı; TRCAS bağlantısı nedeniyle izlenmeli."
  },
  {
    "baslik": "İndeks Bilgisayar (INDES)",
    "etki": "Sınırlı Pozitif",
    "kapLink": "https://www.kap.org.tr/tr/Bildirim/1620022",
    "metin": "INDES, Pelitli Lojistik Merkezi yatırımı kapsamında kiralama görüşmelerine ilişkin açıklama yaptı. Lojistik merkezi yatırımı, şirketin operasyonel altyapısı ve dağıtım kapasitesi açısından takip edilecek bir başlık olarak öne çıktı.",
    "etkiYorumu": "Operasyonel altyapı tarafında destekleyici; nihai finansal etki sözleşme detaylarıyla netleşir."
  },
  {
    "baslik": "ARD Grup Bilişim (ARDYZ)",
    "etki": "Pozitif",
    "kapLink": "https://www.kap.org.tr/tr/Bildirim/1620020",
    "metin": "ARDYZ, siber güvenlik ürünlerinin satışına ilişkin yeni iş ilişkisi açıklaması yayımladı. Siber güvenlik alanındaki satış haberleri, teknoloji şirketleri için ürün portföyü ve gelir görünürlüğü açısından önemli görülüyor.",
    "etkiYorumu": "Yeni iş ilişkisi şirket algısını destekleyebilir; tutar ve süre detayları takip edilmeli."
  },
  {
    "baslik": "Borsa İstanbul Hak Kullanımı Duyurusu",
    "etki": "Nötr / Takip Edilmeli",
    "kapLink": "https://www.kap.org.tr/tr/Bildirim/1620016",
    "metin": "Borsa İstanbul, AHSGY, ARASE, CEMTS, EKGYO, MHRGY, OSTIM, OZKGY ve VKGYO için hak kullanımı kaynaklı teorik fiyat duyurusu yayımladı. Duyuruda temettü ödemeleri ve OSTIM için %35 iç kaynaklardan bedelsiz sermaye artırımı sonrası teorik fiyat bilgileri yer aldı.",
    "etkiYorumu": "Teknik fiyatlama etkisi bulunuyor; temettü ve bedelsiz kaynaklı işlem günü takibi önemli."
  },
  {
    "baslik": "Odine Solutions (ODINE)",
    "etki": "Pozitif",
    "kapLink": "https://www.kap.org.tr/tr/Bildirim/1620006",
    "metin": "ODINE, Super Micro Computer Inc. ile Türkiye pazarına odaklanan iş ortaklığı anlaşması imzaladığını açıkladı. İş birliği; yapay zekâ, bulut, depolama ve 5G/Edge BT altyapıları alanlarında çözüm portföyünü güçlendirmeyi hedefliyor.",
    "etkiYorumu": "Stratejik iş ortaklığı büyüme algısını destekleyebilir; satışa dönüşüm süreci izlenmeli."
  },
  {
    "baslik": "Deniz Eko Enerji ve Geri Dönüşüm (DNZEN)",
    "etki": "Sınırlı Pozitif",
    "kapLink": "https://www.kap.org.tr/tr/Bildirim/1620119",
    "metin": "DNZEN, borçlanma aracı ihracına ilişkin SPK onayını duyurdu. Açıklamada ihraç tavanının 1 milyar TL olarak belirlendiği, satış türünün nitelikli yatırımcıya satış / tahsisli satış olarak planlandığı görüldü.",
    "etkiYorumu": "Finansman kaynaklarına erişim açısından olumlu; borçlanma koşulları takip edilmeli."
  },
  {
    "baslik": "Arsan Holding (ARSAN)",
    "etki": "Nötr / Takip Edilmeli",
    "kapLink": "https://www.kap.org.tr/tr/Bildirim/1620125",
    "metin": "ARSAN, genel kredi sözleşmesine ilişkin özel durum açıklaması yayımladı. Kredi sözleşmeleri şirketin finansman yapısı, likidite yönetimi ve borçluluk görünümü açısından yatırımcılar tarafından izlenir.",
    "etkiYorumu": "Finansman anlaşması niteliğinde; koşullar ve kullanım amacı belirleyici olacak."
  },
  {
    "baslik": "Alves Kablo (ALVES)",
    "etki": "Pozitif",
    "kapLink": "https://www.kap.org.tr/tr/Bildirim/1620130",
    "metin": "ALVES, Polatlı OSB’de planlanan yeni üretim tesisi yatırımına ilişkin açıklama yaptı. Şirket, yatırım kapsamında hafriyat çalışmalarının başladığını duyurarak kapasite artışı hedefi açısından önemli bir aşamaya geçildiğini bildirdi.",
    "etkiYorumu": "Yeni tesis yatırımı orta vadeli üretim kapasitesi açısından destekleyici okunabilir."
  },
  {
    "baslik": "BMS Birleşik Metal (BMSTL)",
    "etki": "Sınırlı Pozitif",
    "kapLink": "https://www.kap.org.tr/tr/Bildirim/1620146",
    "metin": "BMSTL, %100 bedelsiz sermaye artırımı sürecinde tescil ve ilan aşamasına ilişkin güncelleme yaptı. Şirket sermayesinin 150 milyon TL’den 300 milyon TL’ye çıkarılmasına yönelik süreçte resmi adımlar tamamlanıyor.",
    "etkiYorumu": "Bedelsiz sermaye artırımı teknik olarak piyasa değerini değiştirmez; süreç tamamlanma aşaması nedeniyle takip edilmeli."
  },
  {
    "baslik": "Türkiye Kalkınma ve Yatırım Bankası (KLNMA)",
    "etki": "Pozitif",
    "kapLink": "https://www.kap.org.tr/tr/Bildirim/1620148",
    "metin": "KLNMA, Japon Uluslararası İşbirliği Bankası (JBIC) ile kredi anlaşması imzalanmasına ilişkin açıklama yayımladı. Uluslararası finansman kaynağı, bankanın kalkınma ve yatırım kredileri tarafındaki kapasitesini destekleyebilecek nitelikte.",
    "etkiYorumu": "Dış kaynaklı kredi anlaşması finansman kapasitesi açısından pozitif okunabilir."
  },
  {
    "baslik": "A1 Capital / PRDGS / RTALB",
    "etki": "Nötr / Takip Edilmeli",
    "kapLink": "https://www.kap.org.tr/tr/Bildirim/1620159",
    "metin": "A1 Capital tarafından PRDGS ve RTALB paylarını ilgilendiren toptan alış satış işlemi bildirimi yayımlandı. Toptan alış satış işlemleri pay sahipliği ve likidite yapısı açısından yatırımcılar tarafından izlenir.",
    "etkiYorumu": "Operasyonel etki yok; ortaklık ve pay devri algısı açısından takip edilmeli."
  },
  {
    "baslik": "Denge Varlık Yönetim (DENVA)",
    "etki": "Sınırlı Pozitif",
    "kapLink": "https://www.kap.org.tr/tr/Bildirim/1620182",
    "metin": "DENVA, tahsili gecikmiş alacak portföyü alımına ilişkin açıklama yayımladı. Varlık yönetim şirketlerinde portföy alımları faaliyet hacmi ve tahsilat potansiyeli açısından önemli başlıklar arasında yer alıyor.",
    "etkiYorumu": "Portföy alımı faaliyet büyümesini destekleyebilir; tahsilat performansı belirleyici olur."
  },
  {
    "baslik": "İhlas Holding (IHLAS)",
    "etki": "Nötr / Takip Edilmeli",
    "kapLink": "https://www.kap.org.tr/tr/Bildirim/1620207",
    "metin": "IHLAS, bedelli sermaye artırımı sürecine ilişkin güncellenmiş bildirim yayımladı. Kalan payların Borsa İstanbul Birincil Piyasa’da satışa sunulacağı sürece ilişkin detaylar yatırımcıların takibinde kalacak.",
    "etkiYorumu": "Sermaye artırımının tamamlanma aşaması açısından izlenmeli; arz baskısı algısı oluşabilir."
  },
  {
    "baslik": "İhlas Holding (IHLAS)",
    "etki": "Nötr / Takip Edilmeli",
    "kapLink": "https://www.kap.org.tr/tr/Bildirim/1620209",
    "metin": "IHLAS, tasarruf sahiplerine satış duyurusunda revizyon yaparak bildirimi yeniden gönderdi. Kullanılmayan payların 25-26 Haziran tarihlerinde Borsa İstanbul Birincil Piyasa’da satışa sunulacağı açıklandı.",
    "etkiYorumu": "Revize satış duyurusu teknik süreç açısından önemli; yatırımcıların birincil piyasa satışını izlemesi gerekir."
  },
  {
    "baslik": "Politeknik Metal (POLTK)",
    "etki": "Nötr / Takip Edilmeli",
    "kapLink": "https://www.kap.org.tr/tr/Bildirim/1620281",
    "metin": "POLTK, 2026 faaliyet yılında gerçekleşmesi öngörülen yaygın ve süreklilik arz eden ilişkili taraf işlemlerine ilişkin raporun sonuç bölümünü yayımladı. İlişkili taraf işlemleri şirket yönetimi ve kurumsal yönetim açısından takip edilir.",
    "etkiYorumu": "Doğrudan operasyonel haber değil; ilişkili taraf işlem tutarları ve koşulları izlenmeli."
  },
  {
    "baslik": "CEO Event Medya (CEOEM)",
    "etki": "Nötr / Takip Edilmeli",
    "kapLink": "https://www.kap.org.tr/tr/Bildirim/1620272",
    "metin": "CEOEM, kar payı dağıtım işlemlerine ilişkin güncelleme yaptı. Açıklamada nakit temettü ve pay biçiminde temettü ödemesi yapılmayacağı bilgisi yer aldı.",
    "etkiYorumu": "Temettü beklentisi açısından nötr/sınırlı negatif algılanabilir; karar yatırımcı beklentileriyle karşılaştırılmalı."
  },
  {
    "baslik": "Hareket Proje Taşımacılığı (HRKET)",
    "etki": "Pozitif",
    "kapLink": "https://www.kap.org.tr/tr/Bildirim/1620241",
    "metin": "HRKET, bedelsiz sermaye artırımı için SPK başvurusu yaptığını açıkladı. Şirketin 115,2 milyon TL olan mevcut sermayesinin 1,6128 milyar TL’ye çıkarılması planlanıyor.",
    "etkiYorumu": "Yüksek oranlı bedelsiz başvurusu yatırımcı ilgisini artırabilir; onay süreci takip edilmeli."
  },
  {
    "baslik": "Vera Konsept GYO (VRGYO)",
    "etki": "Nötr / Takip Edilmeli",
    "kapLink": "https://www.kap.org.tr/tr/Bildirim/1620316",
    "metin": "VRGYO, bağımsız yönetim kurulu üyesi istifasına ilişkin açıklama yayımladı. Yönetim kurulu yapısındaki değişiklikler kurumsal yönetim ve komite işleyişi açısından takip edilmesi gereken başlıklardır.",
    "etkiYorumu": "Operasyonel etki sınırlı; kurumsal yönetim tarafında takip edilmeli."
  },
  {
    "baslik": "Arsan Holding (ARSAN)",
    "etki": "Nötr / Takip Edilmeli",
    "kapLink": "https://www.kap.org.tr/tr/Bildirim/1620294",
    "metin": "ARSAN, genel kredi sözleşmesine ilişkin yeni bir bildirim yayımladı. Gün içinde gelen finansman açıklamaları, şirketin likidite ve borç yönetimi açısından izlenmesi gereken başlıklar arasında yer aldı.",
    "etkiYorumu": "Kredi sözleşmesi finansman esnekliği sağlayabilir; koşullar ve kullanım alanı takip edilmeli."
  },
  {
    "baslik": "SRVGY / ZRGYO",
    "etki": "Nötr / Takip Edilmeli",
    "kapLink": "https://www.kap.org.tr/tr/Bildirim/1620287",
    "metin": "Borsa İstanbul, SRVGY ve ZRGYO paylarında 25 Haziran 2026 tarihinden itibaren hak kullanımı nedeniyle ilgili hakları kullanılmış olarak işlem görecek paylara ilişkin duyuru yayımladı. Duyuruda iki GYO için temettüye bağlı brüt ve net tutarlar yer aldı.",
    "etkiYorumu": "Temettü kaynaklı teknik fiyatlama etkisi bulunuyor; işlem günü fiyat davranışı izlenmeli."
  },
  {
    "baslik": "Deniz Finansal Kiralama (DNFIN)",
    "etki": "Sınırlı Pozitif",
    "kapLink": "https://www.kap.org.tr/tr/Bildirim/1620355",
    "metin": "DNFIN, sermaye artışına ilişkin bildirim yayımladı. Finansal kiralama şirketlerinde sermaye yapısını güçlendiren adımlar, büyüme kapasitesi ve bilanço dayanıklılığı açısından takip edilir.",
    "etkiYorumu": "Sermaye yapısına yönelik adım destekleyici olabilir; detaylar izlenmeli."
  },
  {
    "baslik": "DAP Gayrimenkul Geliştirme (DAPGM)",
    "etki": "Nötr / Takip Edilmeli",
    "kapLink": "https://www.kap.org.tr/tr/Bildirim/1620360",
    "metin": "DAPGM, sermaye avansına ilişkin güncelleme yaptı. Sermaye avansı açıklamaları, şirketin bağlı ortaklıkları veya yatırım süreçleriyle bağlantılı finansman akışını gösterdiği için takip edilir.",
    "etkiYorumu": "Finansman/sermaye yapısı açısından izlenmeli; doğrudan kârlılık etkisi açıklama detayına bağlı."
  },
  {
    "baslik": "Birikim Varlık Yönetim (BRKVY)",
    "etki": "Sınırlı Pozitif",
    "kapLink": "https://www.kap.org.tr/tr/Bildirim/1620363",
    "metin": "BRKVY, tahsili gecikmiş alacak portföyü alımı kapsamında ihaleye konu alacakların devrine yönelik sözleşme imza sürecinin tamamlandığını açıkladı. Varlık yönetim şirketleri için portföy alımları faaliyet hacmini artıran önemli gündemlerdendir.",
    "etkiYorumu": "Portföy büyümesi açısından destekleyici; tahsilat başarısı orta vadeli etkiyi belirler."
  }
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "24 Haziran KAP: HRKET Bedelsiz, KLNMA Kredi, ALVES Yatırım",
  description:
    "HRKET bedelsiz başvurusu, KLNMA 350 milyon dolar kredi anlaşması, ALVES yatırım süreci ve 24 Haziran KAP özetleri.",
  datePublished: "2026-06-24T09:00:00+03:00",
  dateModified: "2026-06-24T22:30:00+03:00",
  url: "https://www.hocaileborsa.com/haber/24-haziran-2026-onemli-kap-haberleri",
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
              alt="24 Haziran KAP: HRKET Bedelsiz, KLNMA Kredi, ALVES Yatırım"
              fill

              sizes="(min-width: 1024px) 896px, 100vw"
className="object-cover"
            />
          </div>

          <div className="p-6 md:p-10">
            <h1 className="text-2xl font-bold leading-tight tracking-tight text-slate-900 md:text-3xl lg:text-4xl">
              24 Haziran KAP: HRKET Bedelsiz, KLNMA Kredi, ALVES Yatırım
            </h1>

            <div className="mb-4 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center rounded-md bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700 ring-1 ring-inset ring-blue-600/20">
                Finans
              </span>
              <time dateTime="2026-06-24" className="text-sm text-slate-500">
                24 Haziran 2026
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
                Borsa İstanbul’da 24 Haziran 2026 Çarşamba günü KAP’a düşen önemli
                bildirimlerde sermaye artırımı süreçleri, bedelsiz sermaye
                başvuruları, kredi ve finansman anlaşmaları, yeni iş ilişkileri,
                tahsili gecikmiş alacak portföyü alımları, temettü ve hak
                kullanımı duyuruları öne çıktı.
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
                Günün en dikkat çeken başlıkları TRCAS’ın iştirak temettüsü,
                ODINE’in Super Micro Computer iş ortaklığı, ALVES’in yeni üretim
                tesisi yatırımı, KLNMA’nın JBIC kredi anlaşması, HRKET’in yüksek
                oranlı bedelsiz sermaye artırımı başvurusu ve IHLAS’ın bedelli
                sermaye artırımı sürecindeki satış duyuruları oldu.
              </div>

              <HaberIlgiliBolumler
                slug="24-haziran-2026-onemli-kap-haberleri"
                baslik="24 Haziran KAP: HRKET Bedelsiz, KLNMA Kredi, ALVES Yatırım"
              />

              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm font-medium leading-7 text-amber-900 md:text-base">
                ⚠️ Bu özet bilgilendirme amaçlıdır, yatırım tavsiyesi değildir.
              </div>
            </div>
          </div>
          <HaberAltKisim href="/haber/24-haziran-2026-onemli-kap-haberleri" />

          <AuthorBox />
        </article>
      </div>
    </main>
  );
}
