import Image from "next/image";
import Link from "@/components/NoPrefetchLink";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import HaberIlgiliBolumler from "@/components/HaberIlgiliBolumler";
import AuthorBox from "@/components/AuthorBox";
import HaberAltKisim from "@/components/HaberAltKisim";
import { formatHaberTarihi, getHaberDosyaTarihi } from "@/lib/haber-tarih";

const haberSaati = getHaberDosyaTarihi(import.meta.url);
const haberTarihi = formatHaberTarihi(haberSaati);

const slug =
  "16-temmuz-2026-onemli-kap-tralt-ttkom-entra-etkileri";
const haberUrl = `https://www.hocaileborsa.com/haber/${slug}`;
const haberGorsel =
  "https://www.hocaileborsa.com/kap-ozeti-discover.webp";

export const metadata: Metadata = {
  title: "16 Temmuz 2026 Önemli KAP: TRALT, TTKOM, ENTRA Etkileri",
  description:
    "16 Temmuz 2026 KAP özetinde TRALT ilk altın dökümü, TTKOM 1 milyar dolarlık sukuk kararı, ENTRA ÇED onayı ve günün diğer önemli şirket haberleri yer alıyor.",
  alternates: {
    canonical: haberUrl,
  },
  openGraph: {
    type: "article",
    title: "16 Temmuz 2026 Önemli KAP: TRALT, TTKOM, ENTRA Etkileri",
    description:
      "TRALT, TTKOM, ENTRA, ONCSM, FONET, PGSUS, SANEL, VAKBN ve günün diğer önemli KAP açıklamalarının özeti.",
    url: haberUrl,
    images: [
      {
        url: haberGorsel,
        width: 1200,
        height: 675,
        alt: "16 Temmuz 2026 önemli KAP haberleri TRALT TTKOM ENTRA etkileri",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "16 Temmuz 2026 Önemli KAP: TRALT, TTKOM, ENTRA Etkileri",
    description:
      "Günün ayrı haber yapılan açıklamaları ile diğer önemli KAP bildirimleri tek sayfada.",
    images: [haberGorsel],
  },
};

type Etki = "Pozitif" | "Dengeli" | "Negatif";

type KapHaberi = {
  kod: string;
  baslik: string;
  ozet: string;
  etki: Etki;
  etkiAciklama: string;
  kapId: string;
  haberHref?: string;
};

const oneCikanlar = [
  {
    kod: "TRALT",
    baslik: "Mollakara Altın Madeni’nde ilk üretim",
    deger: "7.474,2 gram",
    aciklama: "İlk altın dökümünde elde edilen miktar",
  },
  {
    kod: "TTKOM",
    baslik: "Yurt dışı sukuk kararı",
    deger: "1 milyar $",
    aciklama: "Azami ihraç büyüklüğü",
  },
  {
    kod: "ENTRA",
    baslik: "Depolamalı Güvenli RES",
    deger: "100 MWe",
    aciklama: "ÇED Olumlu Kararı alınan proje",
  },
  {
    kod: "ONCSM",
    baslik: "Bedelsiz sermaye artışı",
    deger: "%1.200",
    aciklama: "Yönetim kurulu tarafından kararlaştırıldı",
  },
];

const ayriHaberler: KapHaberi[] = [
  {
    kod: "TRALT",
    baslik: "Mollakara Altın Madeni’nde ilk altın dökümü yapıldı",
    ozet:
      "Ağrı Diyadin’deki Mollakara Altın Madeni’nde ilk üretim gerçekleştirildi ve 7.474,2 gram altın elde edildi. Şirket 2026 sonuna kadar yaklaşık 32 bin ons üretim hedefliyor. Görünür ve muhtemel rezerv 471 bin ons olarak açıklandı.",
    etki: "Pozitif",
    etkiAciklama:
      "Projenin inşaat aşamasından üretime geçmesi şirket açısından günün en güçlü operasyonel gelişmesi oldu. Üretim miktarı, maliyet ve satışların seyri bundan sonraki ana takip noktaları.",
    kapId: "1634256",
    haberHref: "/haber/tralt-mollakara-altin-madeninde-ilk-altin-dokumu",
  },
  {
    kod: "ENTRA",
    baslik: "Depolamalı Güvenli RES için ÇED Olumlu Kararı alındı",
    ozet:
      "Tokat’ta planlanan projede 16 türbin, 103,2 MWm mekanik güç, 100 MWe elektriksel güç ve 100 MWh depolama kapasitesi bulunuyor. ÇED sürecinin olumlu tamamlanmasıyla yatırım önemli bir izin aşamasını geçti.",
    etki: "Pozitif",
    etkiAciklama:
      "Çevresel izin riskinin azalması projenin ilerleme ihtimalini güçlendiriyor. Doğrudan gelir etkisi için yatırım kararı, finansman ve devreye alma takvimi beklenmeli.",
    kapId: "1634283",
    haberHref: "/haber/entra-depolamali-guvenli-res-ced-olumlu-karari",
  },
  {
    kod: "FONET",
    baslik: "198,5 milyon TL’lik SBYS ihalesi kazanıldı",
    ozet:
      "FONET, Aydın İl Sağlık Müdürlüğü tarafından düzenlenen 36 aylık Sağlık Bilgi Yönetim Sistemi hizmet alımı ihalesini 198.476.457 TL bedelle kazandı. Yasal itiraz süresinin ardından sözleşme aşamasına geçilecek.",
    etki: "Pozitif",
    etkiAciklama:
      "İhale tutarı ve 36 aylık hizmet süresi sipariş görünürlüğünü destekliyor. Kesin finansal katkı sözleşmenin imzalanması ve gelirlerin dönemlere dağılımıyla netleşecek.",
    kapId: "1633973",
    haberHref: "/haber/fonet-aydin-il-saglik-mudurlugu-198-milyon-tl-sbys-ihalesi",
  },
  {
    kod: "ARSAN",
    baslik: "Boya terbiye tesisinde üretim yeniden başladı",
    ozet:
      "6 Şubat 2023 depreminde hasar gören boya terbiye tesisinin bakım ve onarımı tamamlandı. Yapı Kullanma İzni alınmasının ardından 16 Temmuz itibarıyla üretime başlandı.",
    etki: "Pozitif",
    etkiAciklama:
      "Uzun süredir devre dışı kalan kapasitenin yeniden faaliyete geçmesi operasyonel toparlanma açısından olumlu. Ciro ve kapasite kullanımına etkisi sonraki finansal dönemlerde görülecek.",
    kapId: "1634170",
    haberHref: "/haber/arsan-boya-terbiye-tesisinde-uretime-yeniden-basladi",
  },
  {
    kod: "TTKOM",
    baslik: "1 milyar dolara kadar sukuk ihracı kararı alındı",
    ozet:
      "Şirket, yabancı para ve/veya TL cinsinden toplam 1 milyar dolar eşdeğerine kadar bir veya birden fazla yurt dışı kira sertifikası ihracı için yönetim kurulu kararı aldı. Satış halka arz edilmeksizin tahsisli veya nitelikli yatırımcılara yapılabilecek.",
    etki: "Dengeli",
    etkiAciklama:
      "Finansman kaynaklarının çeşitlendirilmesi olumlu; ancak ihraç miktarı, faiz/kâr payı maliyeti, vade ve kaynak kullanım alanı açıklanmadan net bilanço etkisi hesaplanamaz.",
    kapId: "1634175",
    haberHref: "/haber/ttkom-1-milyar-dolara-kadar-sukuk-ihraci-karari",
  },
  {
    kod: "PGSUS",
    baslik: "149,9 milyon dolarlık tahvil ihracı tamamlandı",
    ozet:
      "Uluslararası nitelikli yatırımcılara satılan 149,9 milyon dolar nominal değerli tahvillerin ihracı tamamlandı ve kaynak şirket hesaplarına aktarıldı. Tahviller Euronext Dublin’de işlem görecek.",
    etki: "Dengeli",
    etkiAciklama:
      "Likiditeyi destekleyen yeni kaynak olumlu olmakla birlikte borçluluk ve finansman gideri tarafındaki etki ihraç koşullarıyla birlikte değerlendirilmeli.",
    kapId: "1634276",
    haberHref: "/haber/pgsus-149-9-milyon-dolarlik-tahvil-ihracini-tamamladi",
  },
  {
    kod: "SANEL",
    baslik: "Uşakcan Diyaliz’in %50 payı için sözleşme imzalandı",
    ozet:
      "SANEL’in %48,90 iştiraki Salacak Sağlık, Uşakcan Diyaliz’in %50’sini temsil eden 300 bin payı 74 milyon TL bedelle almak için hisse devir sözleşmesi imzaladı. İşlem SGK ve tescil süreçlerinin tamamlanmasına bağlı.",
    etki: "Pozitif",
    etkiAciklama:
      "Sağlık yatırımlarında büyüme adımı olumlu. Hedef şirketin finansal verileri, ödeme vadeleri ve satın alma sonrası katkı açıklanmadığı için finansal etki henüz sınırlı ölçülebiliyor.",
    kapId: "1634279",
    haberHref: "/haber/sanel-istiraki-usakcan-diyalizin-yuzde-50si-icin-sozlesme-imzaladi",
  },
  {
    kod: "CWENE",
    baslik: "Güneş hücresinde %25,11 verimlilik doğrulandı",
    ozet:
      "Bağlı ortaklığın seri üretim hattından alınan G12R hücrelerde %25,11 verimlilik Fraunhofer ISE tarafından doğrulandı. Seri üretimdeki hücrelerin dağılımının %25,1 ve üzerinde olduğu teyit edildi.",
    etki: "Pozitif",
    etkiAciklama:
      "Teknoloji yeterliliği ve ürün rekabetçiliği açısından olumlu. Haberin satış fiyatı, sipariş veya kapasite kullanımına doğrudan etkisi açıklanmadı.",
    kapId: "1633954",
    haberHref: "/haber/cwene-gunes-hucresi-verimliligi-2511-dogrulandi",
  },
  {
    kod: "ONCSM",
    baslik: "%1.200 bedelsiz sermaye artışı kararı alındı",
    ozet:
      "23,85 milyon TL olan sermayenin iç kaynaklardan 286,2 milyon TL artırılarak 310,05 milyon TL’ye çıkarılması kararlaştırıldı. Artış diğer kâr yedekleri, özsermaye enflasyon farkları ve emisyon priminden karşılanacak.",
    etki: "Pozitif",
    etkiAciklama:
      "Yüksek bedelsiz oranı kısa vadede yatırımcı ilgisini artırabilir. İşlem şirket değerini veya özkaynağı artırmaz; pay sayısını ve fiyatın teorik düzeyini değiştirir.",
    kapId: "1633957",
    haberHref: "/haber/oncsm-1200-bedelsiz-sermaye-artirimi-karari",
  },
  {
    kod: "POLHO",
    baslik: "Zorunlu pay alım teklifi için SPK’ya başvuruldu",
    ozet:
      "Hakim ortak CoreX Ports and Terminals Dilovası Liman İşletmeleri, pay devrinin ardından doğan zorunlu pay alım teklifi yükümlülüğü kapsamında bilgi formu onayı için SPK’ya başvurdu.",
    etki: "Dengeli",
    etkiAciklama:
      "Hisse açısından belirleyici veri teklif fiyatı olacak. Fiyat ve takvim SPK onaylı bilgi formuyla netleşecek.",
    kapId: "1634258",
    haberHref: "/haber/polho-zorunlu-pay-alim-teklifi-icin-spk-basvurusu",
  },
  {
    kod: "BAYRK",
    baslik: "132 milyon TL tahsisli sermaye artışı için başvuru yapıldı",
    ozet:
      "Kurt Taban Ayakkabı’ya tahsis edilmek üzere planlanan sermaye artışı için SPK’ya başvuruldu. 132 milyon TL’lik şirket alacağı, pay satış bedeline mahsup edilecek; pay adedi ve yeni sermaye satış fiyatına göre belirlenecek.",
    etki: "Dengeli",
    etkiAciklama:
      "Borç/alacak ilişkisinin özkaynağa dönüşmesi bilanço yapısını destekleyebilir. Yeni nakit girişi olmaması ve mevcut ortaklardaki sulanma etkisi nedeniyle haber tek yönlü pozitif değil.",
    kapId: "1634275",
    haberHref: "/haber/bayrk-132-milyon-tl-tahsisli-sermaye-artirimi-spk-basvurusu",
  },
  {
    kod: "TURGG",
    baslik: "Kartal arazisinde kurşun ve ağır metal tespit edildi",
    ozet:
      "Kartal Çavuşoğlu Mahallesi’ndeki şirket arazisinde yapılan toprak analizinde yüksek oranda kurşun ve ağır metaller tespit edildi. Kirlilik sınırlarının belirlenmesi ve iyileştirme süreci boyunca kazı ve inşaat faaliyeti yapılamayacak.",
    etki: "Negatif",
    etkiAciklama:
      "Proje takviminde gecikme ve ek maliyet riski oluşturuyor. İyileştirme bedeli ile sürecin ne kadar süreceği açıklanmadı.",
    kapId: "1634159",
    haberHref: "/haber/turgg-kartal-arazisinde-agir-metal-tespiti-aciklandi",
  },
];

const digerOnemliHaberler: KapHaberi[] = [
  {
    kod: "VAKBN",
    baslik: "V Portföy’ün tamamı 307 milyon TL’ye satın alınacak",
    ozet:
      "VakıfBank, V Portföy Yönetimi’nin %55 payını Vakıfbank Personeli Özel Sosyal Güvenlik Hizmetleri Vakfı’ndan, %45 payını ise Vakıf Yatırım’dan satın alma kararı aldı. Toplam bedel 307 milyon TL ve ödeme peşin olacak.",
    etki: "Pozitif",
    etkiAciklama:
      "Portföy yönetimi faaliyetinin doğrudan banka bünyesinde kontrol edilmesi stratejik açıdan olumlu. İşlem tutarının bankanın aktif büyüklüğüne oranı oldukça düşük.",
    kapId: "1634285",
  },
  {
    kod: "ECOGR",
    baslik: "Üç enerji şirketi Ecofer bünyesinde birleşecek",
    ozet:
      "Denizli Biyogaz, Karacabey Biyogaz ve Denizli Biyokütle’nin tüm aktif ve pasifleriyle Ecofer Gübre ve Enerji tarafından devralınmasına karar verildi. Şirketlerin tamamı ECOGR’nin %100 bağlı ortaklığı.",
    etki: "Pozitif",
    etkiAciklama:
      "Santral yönetiminin tek yapıda toplanması maliyet, bakım ve idari verimlilik açısından olumlu olabilir. Birleşme grup dışına nakit çıkışı oluşturan bir satın alma değil.",
    kapId: "1634274",
  },
  {
    kod: "BARMA",
    baslik: "Üretim arası yalnızca Konya Ereğli kağıt fabrikasını kapsıyor",
    ozet:
      "Şirket, geçici üretim duruşunun yalnızca Konya Ereğli Kağıt Fabrikası için geçerli olduğunu açıkladı. İzmir/Tire, Karaman ve Gaziantep’teki ambalaj tesislerinin tam kapasiteyle çalışmaya devam ettiği belirtildi.",
    etki: "Dengeli",
    etkiAciklama:
      "Kağıt fabrikasındaki duruş olumsuz olsa da ana faaliyet olan ambalaj üretiminin kesintisiz sürmesi haberin şirket geneline yayılacak etkisini sınırlandırıyor.",
    kapId: "1634282",
  },
  {
    kod: "EKGYO",
    baslik: "Esenler Atışalanı ihalesinin ilk oturumu yapıldı",
    ozet:
      "İstanbul Esenler Atışalanı Kuzey 1. Etap Arsa Satışı Karşılığı Gelir Paylaşımı ihalesinin ilk oturumuna 8 istekli katıldı. Belgelerin değerlendirilmesinin ardından ikinci oturum tarihi açıklanacak.",
    etki: "Dengeli",
    etkiAciklama:
      "Katılımcı sayısı proje ilgisi açısından olumlu. Gelir paylaşımı ve teklif büyüklüğü ikinci oturum tamamlanmadan belli değil.",
    kapId: "1634284",
  },
  {
    kod: "DCTTR",
    baslik: "Yunanistan’daki bağlı ortaklık sezonluk biber alımına başladı",
    ozet:
      "YAKA IKE, 2026 sezonu için farklı çeşitlerde biber alımlarına başladı. Alınan ürünler mevcut satış anlaşmaları kapsamında Yunanistan’daki yerel fabrikalara satılıyor.",
    etki: "Pozitif",
    etkiAciklama:
      "Ticari faaliyetin başlaması olumlu; ancak alınacak ürün miktarı, satış hacmi ve beklenen kârlılık açıklanmadı.",
    kapId: "1634166",
  },
  {
    kod: "INVES",
    baslik: "REM GSYO’da 200 milyon TL nakit sermaye artışı planlandı",
    ozet:
      "INVES’in %100 bağlı ortaklığı REM GSYO’nun sermayesinin 200 milyon TL’den 400 milyon TL’ye çıkarılması ve kayıtlı sermaye tavanı süresinin uzatılması için SPK’ya başvuruldu.",
    etki: "Dengeli",
    etkiAciklama:
      "Bağlı ortaklığın yatırım kapasitesini artırabilir. Finansmanın tamamı ana ortak tarafından karşılanacağı için nakit kullanımının getirisi yapılacak yatırımlara bağlı olacak.",
    kapId: "1634195",
  },
  {
    kod: "CASA",
    baslik: "Farklı sektörlerde iştirak yatırımları için çalışma başlatıldı",
    ozet:
      "Şirket potansiyel yatırım fırsatları, mali-hukuki-teknik incelemeler ve bağımsız değerleme çalışmaları yürütmeye başladığını bildirdi. Gerektiğinde sermaye artışı alternatifleri de değerlendirilecek.",
    etki: "Dengeli",
    etkiAciklama:
      "Büyüme arayışı olumlu olmakla birlikte hedef şirket, sektör, yatırım tutarı ve finansman modeli henüz belli değil. Somut işlem açıklanana kadar etkisi sınırlı.",
    kapId: "1634265",
  },
];

const takipListesi = [
  "TRALT’ta aylık altın üretimi, tenör, nakit maliyet ve satış miktarları",
  "ENTRA Güvenli RES yatırım tutarı, finansman ve devreye alma takvimi",
  "TTKOM sukuk ihracının vadesi, maliyeti ve kullanım alanı",
  "ONCSM bedelsiz sermaye artışı için SPK süreci",
  "POLHO zorunlu pay alım teklif fiyatı ve başlama tarihi",
  "SANEL’in Uşakcan Diyaliz pay devrinde SGK ve tescil süreci",
  "BAYRK tahsisli satış fiyatı, çıkarılacak pay sayısı ve yeni sermaye",
  "TURGG Kartal arazisinde iyileştirme maliyeti ve proje takvimi",
  "VAKBN’nin V Portföy alımı için gerekli izinlerin tamamlanması",
];

const seoSorular = [
  {
    soru: "16 Temmuz 2026’nın en önemli KAP haberi hangisiydi?",
    cevap:
      "Operasyonel sonuç üretmesi nedeniyle TRALT’ın Mollakara Altın Madeni’nde ilk altın dökümünü gerçekleştirmesi günün en güçlü açıklamalarından biri oldu.",
  },
  {
    soru: "ENTRA ÇED Olumlu Kararı ne anlama geliyor?",
    cevap:
      "Karar, Depolamalı Güvenli RES projesinin çevresel izin sürecinde önemli bir aşamayı tamamladığını gösteriyor. Yatırımın başlaması için diğer izin, finansman ve inşaat süreçleri devam edecek.",
  },
  {
    soru: "TTKOM’un sukuk kararı şirkete hemen nakit sağlar mı?",
    cevap:
      "Hayır. Yönetim kurulu kararı ihraç için yetki ve hazırlık aşamasıdır. Nakit girişi, ihraç gerçekleştirilip yatırımcılara satış tamamlandığında oluşur.",
  },
  {
    soru: "ONCSM %1.200 bedelsiz kararı şirket değerini artırır mı?",
    cevap:
      "Bedelsiz sermaye artışı şirketin toplam piyasa değerini tek başına artırmaz. Sermaye ve pay adedi yükselirken teorik hisse fiyatı aynı oranda düzeltilir.",
  },
  {
    soru: "VAKBN hangi şirketi satın alacak?",
    cevap:
      "VakıfBank, yatırım fonlarının kurulması ve yönetimi alanında faaliyet gösteren V Portföy Yönetimi A.Ş.’nin %100 payını 307 milyon TL bedelle satın alma kararı aldı.",
  },
  {
    soru: "Gün sonu KAP özetinde ayrı haber yapılan açıklamalar da var mı?",
    cevap:
      "Evet. TRALT, ENTRA, FONET, ARSAN, TTKOM, PGSUS, SANEL, CWENE, ONCSM, POLHO, BAYRK ve TURGG için hazırlanan ayrı haberler de bu özete dahil edildi.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "16 Temmuz 2026 Önemli KAP: TRALT, TTKOM, ENTRA Etkileri",
  description:
    "16 Temmuz 2026 KAP özetinde TRALT ilk altın dökümü, TTKOM sukuk kararı, ENTRA ÇED onayı ve diğer önemli şirket açıklamaları yer alıyor.",
  image: haberGorsel,
  datePublished: "2026-07-16T22:40:00+03:00",
  dateModified: "2026-07-16T22:40:00+03:00",
  url: haberUrl,
  inLanguage: "tr",
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
};

function Section({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:p-6">
      <h2 className="mb-4 text-xl font-bold tracking-tight text-slate-900">
        {title}
      </h2>
      {children}
    </section>
  );
}

function EtkiRozeti({ etki }: { etki: Etki }) {
  const siniflar: Record<Etki, string> = {
    Pozitif:
      "border-emerald-200 bg-emerald-50 text-emerald-800",
    Dengeli:
      "border-amber-200 bg-amber-50 text-amber-800",
    Negatif:
      "border-rose-200 bg-rose-50 text-rose-800",
  };

  return (
    <span
      className={`inline-flex rounded-full border px-2.5 py-1 text-xs font-bold ${siniflar[etki]}`}
    >
      {etki}
    </span>
  );
}

function HaberKarti({
  haber,
  numara,
}: {
  haber: KapHaberi;
  numara: number;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 md:p-5">
      <div className="flex flex-wrap items-center gap-2">
        <span className="inline-flex h-7 min-w-7 items-center justify-center rounded-md bg-slate-900 px-2 text-xs font-bold text-white">
          {numara}
        </span>
        <span className="rounded-md bg-blue-100 px-2.5 py-1 text-sm font-black text-blue-900">
          {haber.kod}
        </span>
        <EtkiRozeti etki={haber.etki} />
      </div>

      <h3 className="mt-3 text-lg font-bold leading-7 text-slate-900">
        {haber.baslik}
      </h3>

      <p className="mt-2 text-sm leading-7 text-slate-600 md:text-base">
        {haber.ozet}
      </p>

      <div className="mt-3 rounded-xl border border-slate-200 bg-white p-3 text-sm leading-6 text-slate-700">
        <strong>Hisse etkisi:</strong> {haber.etkiAciklama}
      </div>

      <div className="mt-4 flex flex-wrap gap-3 text-sm font-semibold">
        {haber.haberHref ? (
          <Link
            href={haber.haberHref}
            className="text-blue-700 underline underline-offset-4 hover:text-blue-900"
          >
            Ayrıntılı haberi oku
          </Link>
        ) : null}

        <a
          href={`https://www.kap.org.tr/Bildirim/${haber.kapId}`}
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="text-slate-600 underline underline-offset-4 hover:text-slate-900"
        >
          {haber.kod} — Orjinal Kap içeriği
        </a>
      </div>
    </div>
  );
}

export default function OnemliKapHaberleri16Temmuz2026Page() {
  const toplamHaber = ayriHaberler.length + digerOnemliHaberler.length;

  return (
    <main className="min-h-screen bg-[#f8fafc] px-4 py-6 md:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="mx-auto max-w-5xl">
        <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_2px_16px_rgba(15,23,42,0.07)]">
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100">
            <Image
              src="/kap-ozeti-discover.webp"
              alt="16 Temmuz 2026 önemli KAP haberleri TRALT TTKOM ENTRA etkileri"
              fill
              unoptimized
              className="object-cover"
              priority
            />
          </div>

          <div className="p-6 md:p-10">
            <h1 className="text-2xl font-bold leading-tight tracking-tight text-slate-900 md:text-3xl lg:text-4xl">
              16 Temmuz 2026 Önemli KAP: TRALT, TTKOM, ENTRA Etkileri
            </h1>

            <div className="mb-5 mt-3 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center rounded-md bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700 ring-1 ring-inset ring-blue-600/20">
                KAP Bildirimleri
              </span>
              <time dateTime={haberSaati} className="text-sm text-slate-500">
                {haberTarihi}
              </time>
              <span className="text-slate-300">·</span>
              <Link
                href="/yazar/erman-hoca"
                className="text-sm font-semibold text-slate-500 hover:text-blue-600"
              >
                Erman Hoca
              </Link>
            </div>

            <div className="space-y-6 text-base leading-8 text-slate-700 md:text-lg">
              <p>
                16 Temmuz’da KAP’a yapılan açıklamalarda{" "}
                <strong>TRALT’ın Mollakara Altın Madeni’nde üretime geçmesi</strong>,{" "}
                <strong>ENTRA’nın 100 MWe gücündeki depolamalı RES projesi için ÇED onayı alması</strong>{" "}
                ve <strong>TTKOM’un 1 milyar dolara kadar sukuk ihracı kararı</strong>{" "}
                öne çıktı. ONCSM %1.200 bedelsiz sermaye artışı kararı alırken,
                FONET 198,5 milyon TL’lik sağlık bilişim ihalesini kazandı.
              </p>

              <p>
                Gün içerisinde ayrı haber olarak yayımlanan açıklamalar da dahil
                olmak üzere toplam <strong>{toplamHaber} önemli KAP bildirimi</strong>{" "}
                aşağıda şirket ve hisse etkileriyle birlikte değerlendirildi.
              </p>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {oneCikanlar.map((item) => (
                  <div
                    key={item.kod}
                    className="rounded-2xl border border-blue-200 bg-blue-50 p-4"
                  >
                    <div className="text-sm font-black text-blue-800">
                      {item.kod}
                    </div>
                    <div className="mt-2 text-sm font-semibold leading-6 text-blue-950">
                      {item.baslik}
                    </div>
                    <div className="mt-2 text-xl font-black text-blue-950">
                      {item.deger}
                    </div>
                    <div className="mt-1 text-xs leading-5 text-blue-800">
                      {item.aciklama}
                    </div>
                  </div>
                ))}
              </div>

              <Section title="Günün kısa özeti">
                <div className="grid gap-3 md:grid-cols-3">
                  <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4">
                    <div className="text-sm font-bold text-emerald-900">
                      Güçlü operasyonel haberler
                    </div>
                    <p className="mt-2 text-sm leading-6 text-emerald-800">
                      TRALT üretime geçti, ARSAN tesisini yeniden açtı ve FONET
                      önemli büyüklükte bir ihale kazandı.
                    </p>
                  </div>

                  <div className="rounded-xl border border-blue-200 bg-blue-50 p-4">
                    <div className="text-sm font-bold text-blue-900">
                      Yatırım ve büyüme adımları
                    </div>
                    <p className="mt-2 text-sm leading-6 text-blue-800">
                      ENTRA izin sürecinde ilerledi; SANEL, VAKBN ve ECOGR
                      iştirak yapılarında yeni kararlar açıkladı.
                    </p>
                  </div>

                  <div className="rounded-xl border border-rose-200 bg-rose-50 p-4">
                    <div className="text-sm font-bold text-rose-900">
                      Risk oluşturan gelişme
                    </div>
                    <p className="mt-2 text-sm leading-6 text-rose-800">
                      TURGG’nin Kartal arazisindeki ağır metal tespiti, proje
                      takvimi ve iyileştirme maliyeti açısından belirsizlik yarattı.
                    </p>
                  </div>
                </div>
              </Section>

              <Section title="Ayrı haber yapılan önemli KAP açıklamaları">
                <div className="grid gap-4">
                  {ayriHaberler.map((haber, index) => (
                    <HaberKarti
                      key={`${haber.kod}-${haber.kapId}`}
                      haber={haber}
                      numara={index + 1}
                    />
                  ))}
                </div>
              </Section>

              <Section title="Gün sonu özetine eklenen diğer önemli KAP haberleri">
                <div className="grid gap-4">
                  {digerOnemliHaberler.map((haber, index) => (
                    <HaberKarti
                      key={`${haber.kod}-${haber.kapId}`}
                      haber={haber}
                      numara={ayriHaberler.length + index + 1}
                    />
                  ))}
                </div>
              </Section>

              <Section title="Hangi açıklamalar daha güçlü?">
                <div className="overflow-x-auto">
                  <table className="min-w-full overflow-hidden rounded-xl border border-slate-200 text-sm">
                    <thead className="bg-slate-900 text-white">
                      <tr>
                        <th className="px-4 py-3 text-left">Hisse</th>
                        <th className="px-4 py-3 text-left">Ana gelişme</th>
                        <th className="px-4 py-3 text-left">Değerlendirme</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ["TRALT", "İlk altın üretimi", "Günün en güçlü operasyonel haberi"],
                        ["FONET", "198,5 milyon TL ihale", "Sipariş görünürlüğü açısından güçlü"],
                        ["ENTRA", "ÇED Olumlu Kararı", "Proje ilerlemesi açısından pozitif"],
                        ["ONCSM", "%1.200 bedelsiz", "Yatırımcı ilgisi açısından güçlü"],
                        ["ARSAN", "Üretimin yeniden başlaması", "Operasyonel toparlanma"],
                        ["TURGG", "Ağır metal tespiti", "Günün en belirgin negatif haberi"],
                      ].map((satir, index) => (
                        <tr
                          key={satir[0]}
                          className={index % 2 === 0 ? "bg-white" : "bg-slate-50"}
                        >
                          <td className="px-4 py-3 font-black text-slate-900">
                            {satir[0]}
                          </td>
                          <td className="px-4 py-3 text-slate-700">
                            {satir[1]}
                          </td>
                          <td className="px-4 py-3 font-semibold text-slate-700">
                            {satir[2]}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Section>

              <Section title="Bundan sonra takip edilecek başlıklar">
                <div className="grid gap-3">
                  {takipListesi.map((item) => (
                    <div
                      key={item}
                      className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm font-semibold leading-6 text-slate-700"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </Section>

              <Section title="16 Temmuz önemli KAP haberleri hakkında soru-cevap">
                <div className="space-y-4">
                  {seoSorular.map((item) => (
                    <div
                      key={item.soru}
                      className="rounded-xl border border-slate-200 bg-slate-50 p-4"
                    >
                      <h3 className="text-base font-bold text-slate-900">
                        {item.soru}
                      </h3>
                      <p className="mt-2 text-sm leading-7 text-slate-600 md:text-base">
                        {item.cevap}
                      </p>
                    </div>
                  ))}
                </div>
              </Section>

              <HaberIlgiliBolumler
                slug={slug}
                baslik="16 Temmuz 2026 Önemli KAP: TRALT, TTKOM, ENTRA Etkileri"
              />

              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm font-medium leading-7 text-amber-900 md:text-base">
                ⚠️ Bu içerik KAP açıklamalarının özeti ve haber etkisi
                değerlendirmesidir. Yatırım tavsiyesi değildir.
              </div>
            </div>
          </div>

          <HaberAltKisim href={`/haber/${slug}`} />

          <AuthorBox />
        </article>
      </div>
    </main>
  );
}