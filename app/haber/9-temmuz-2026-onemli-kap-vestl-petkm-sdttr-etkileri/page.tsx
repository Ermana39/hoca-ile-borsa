import { seoAciklamasi } from "@/lib/seo-metadata";
import Image from "next/image";
import Link from "@/components/NoPrefetchLink";
import type { Metadata } from "next";
import HaberIlgiliBolumler from "@/components/HaberIlgiliBolumler";
import AuthorBox from "@/components/AuthorBox";
import HaberAltKisim from "@/components/HaberAltKisim";
import { formatHaberTarihi, getHaberDosyaTarihi } from "@/lib/haber-tarih";

const haberSaati = getHaberDosyaTarihi(import.meta.url);
const haberTarihi = formatHaberTarihi(haberSaati);

const slug = "9-temmuz-2026-onemli-kap-vestl-petkm-sdttr-etkileri";
const haberUrl = `https://www.hocaileborsa.com/haber/${slug}`;
const haberGorsel = "https://www.hocaileborsa.com/kap-ozeti-discover.webp";

export const metadata: Metadata = {
  title: "9 Temmuz 2026 Önemli KAP: VESTL, PETKM, SDTTR Etkileri",
  description:
    seoAciklamasi("9 Temmuz 2026 KAP haberlerinde VESTL eurobond süreci, PETKM Master Plan, SDTTR siparişi, DCTTR pay takası, PRZMA varlık satışı ve BORLS ödeme açıklaması öne çıktı.", "Haberde gelişmenin ayrıntıları, açıklanan veriler ve yatırımcıların izleyebileceği temel noktalar yer alıyor."),
  alternates: { canonical: haberUrl },
  openGraph: {
    type: "article",
    title: "9 Temmuz 2026 Önemli KAP: VESTL, PETKM, SDTTR Etkileri",
    description:
      "VESTL, PETKM, SDTTR, DCTTR, PRZMA, BORLS, TRILC, KLKIM ve diğer önemli KAP açıklamaları.",
    url: haberUrl,
    images: [
      {
        url: haberGorsel,
        width: 1200,
        height: 675,
        alt: "9 Temmuz 2026 önemli KAP haberleri VESTL PETKM SDTTR etkileri",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "9 Temmuz 2026 Önemli KAP: VESTL, PETKM, SDTTR Etkileri",
    description: "9 Temmuz 2026 günü öne çıkan KAP açıklamaları ve hisse bazlı etkileri.",
    images: [haberGorsel],
  },
};

const oneCikanlar = [
  { kod: "VESTL", baslik: "Eurobondlar için finansal danışman atandı", etki: "Takip" },
  { kod: "PETKM", baslik: "Master Plan’da FEED aşamasına geçiş hazırlıkları başladı", etki: "Pozitif" },
  { kod: "SDTTR", baslik: "Bağlı ortaklık 1,27 milyon dolarlık sipariş aldı", etki: "Pozitif" },
  { kod: "DCTTR", baslik: "U2 AI Studio’da %4 pay edinimi için pay takası kararı", etki: "Pozitif" },
];

const kapKartlari = [
  {
    kod: "VESTL",
    baslik: "Eurobondlar İçin Houlihan Lokey Atandı",
    etki: "Takip",
    ozet:
      "Vestel Elektronik, XS2817919587 ve US92548MAA53 ISIN kodlu yurt dışı tahvillerine ilişkin stratejik alternatiflerin değerlendirilmesi için Houlihan Lokey’i finansal danışman olarak atadı.",
    yorum:
      "Açıklama yeni bir finansman anlaşması değil; ancak eurobond yatırımcıları, borç yönetimi ve bilanço yapısı tarafında izlenecek bir sürecin başladığını gösteriyor.",
    kaynak: "https://www.kap.org.tr/Bildirim/1630540",
    haberLink: "/haber/vestl-eurobondlar-icin-finansal-danisman-atadi",
  },
  {
    kod: "PETKM",
    baslik: "Master Plan’da FEED Aşamasına Geçiş Hazırlıkları",
    etki: "Pozitif",
    ozet:
      "PETKM, Master Plan kapsamında Pre-FEED sürecinin tamamlandığını ve FEED aşamasına geçiş için hazırlıklara başlandığını açıkladı. FEED anlaşmaları için 2026 yılının üçüncü çeyreği hedefleniyor.",
    yorum:
      "Nihai yatırım kararı öncesinde teknik mühendislik aşamasına geçiş hazırlığı, orta ve uzun vadeli yatırım hikâyesi açısından önemli bir başlık olarak okunabilir.",
    kaynak: "https://www.kap.org.tr/Bildirim/1630457",
    haberLink: "/haber/petkm-master-plan-feed-asamasina-gecis-hazirliklari",
  },
  {
    kod: "SDTTR",
    baslik: "BKM Bursa Kalıp 1,27 Milyon Dolarlık Sipariş Aldı",
    etki: "Pozitif",
    ozet:
      "SDTTR’nin %95 pay sahibi olduğu bağlı ortaklığı BKM Bursa Kalıp, yurt içi bir müşteriden üretim alanında 1.271.060 ABD doları tutarında sipariş aldı. Teslimatların 2026 ve 2027 yıllarında yapılması planlanıyor.",
    yorum:
      "Sipariş büyüklüğü bağlı ortaklık üzerinden geldiği için grup faaliyetleri ve üretim tarafındaki iş akışı açısından pozitif okunabilir.",
    kaynak: "https://www.kap.org.tr/Bildirim/1630870",
    haberLink: "/haber/sdttr-bkm-bursa-kalip-1-27-milyon-dolar-siparis-aldi",
  },
  {
    kod: "DCTTR",
    baslik: "U2 AI Studio’da %4 Pay Edinimi",
    etki: "Pozitif",
    ozet:
      "DCTTR, TRK Teknoloji’deki %4 payını U2 AI Studio paylarıyla takas etme kararı aldı. İşlem tamamlanırsa şirket U2 AI Studio sermayesinin %4’ünü temsil eden paya sahip olacak.",
    yorum:
      "Nakit satış yerine pay takası yapılması, DCTTR’nin yapay zekâ ve ileri teknoloji tarafındaki yatırım hikâyesini genişleten bir adım olarak öne çıkıyor.",
    kaynak: "https://www.kap.org.tr/Bildirim/1630764",
    haberLink: "/haber/dcttr-u2-ai-studio-yuzde-4-pay-edinimi",
  },
  {
    kod: "PRZMA",
    baslik: "Silivri’deki Tesis 370 Milyon TL Bedelle Satılıyor",
    etki: "Pozitif",
    ozet:
      "PRZMA, İstanbul Silivri’de otel, restoran/düğün salonu, apart otel, depo, dükkân ve fabrika/depo alanlarından oluşan tesisin satışı için karar aldı. Toplam satış bedeli 370 milyon TL olarak açıklandı.",
    yorum:
      "Satış bedelinin aktif toplamına ve ödenmiş sermayeye oranı yüksek olduğu için bilanço etkisi ve kaynak yaratma tarafı öne çıkıyor.",
    kaynak: "https://www.kap.org.tr/Bildirim/1631156",
  },
  {
    kod: "BORLS",
    baslik: "Finansman Bonosu Kupon ve Anapara Ödemesi Açıklaması",
    etki: "Negatif",
    ozet:
      "BORLS, TRFBORL72617 ISIN kodlu finansman bonosunun bazı kupon ödemeleri ve anapara ödemesinin mevcut finansal koşullar nedeniyle vadelerinde gerçekleştirilemeyeceğini açıkladı.",
    yorum:
      "Ödeme ertelemesi ve finansal yeniden yapılandırma süreci, borç servis kabiliyeti açısından negatif ve yakından takip edilmesi gereken bir gelişme.",
    kaynak: "https://www.kap.org.tr/Bildirim/1631206",
  },
  {
    kod: "KLKIM",
    baslik: "Kalekim Lyksor Trabzon Şubesi Üretime Başladı",
    etki: "Pozitif",
    ozet:
      "KLKIM, bağlı ortaklığı Kalekim Lyksor Kimya’nın Trabzon şubesinde deneme üretimlerinin ardından seri üretim ve ürün sevkiyatlarına başlanacağını açıkladı. Yeni tesisin yaklaşık 50.000 ton üretim kapasitesine sahip olması bekleniyor.",
    yorum:
      "Üretim kapasitesi, lojistik maliyetleri ve bölgesel pazar payı açısından pozitif bir operasyonel gelişme.",
    kaynak: "https://www.kap.org.tr/Bildirim/1630408",
  },
  {
    kod: "SASA",
    baslik: "Paya Dönüştürülebilir Tahvil Süreci Güncellendi",
    etki: "Nötr",
    ozet:
      "SASA, 415 milyon avro nominal tutarlı paya dönüştürülebilir tahviller kapsamında dönüşüm sürecine ilişkin yeni açıklama yaptı. 412,6 milyon avro anapara tutarına karşılık gelen tahviller için paya dönüşüm hakkı kullanıldı.",
    yorum:
      "Şirket, tahvil dönüşümü kapsamında ihraç edilen yeni payların pay ödünç mekanizması yerine geçtiğini ve piyasada ilave serbest dolaşıma konu olabilecek yeni pay arzı oluşturmadığını belirtti.",
    kaynak: "https://www.kap.org.tr/Bildirim/1630446",
  },
  {
    kod: "FORTE",
    baslik: "Sahil Güvenlik Komutanlığı İhalesinde Sözleşmeye Davet",
    etki: "Pozitif",
    ozet:
      "FORTE, Sahil Güvenlik Komutanlığı’nın Oracle Veri Tabanı Yönetim Sistemi lisans güncelleme, eğitim ve teknik destek alımı ihalesinde en iyi teklifi verdiğini ve sözleşmeye davet edildiğini açıkladı. Sözleşme bedeli 18.895.000 TL.",
    yorum:
      "Tutar sınırlı olsa da kamu tarafında yeni iş ilişkisi ve yazılım/destek hizmetleri açısından olumlu bir gelişme.",
    kaynak: "https://www.kap.org.tr/Bildirim/1630558",
  },
  {
    kod: "ONRYT",
    baslik: "661.200 Dolarlık İlave Sipariş",
    etki: "Pozitif",
    ozet:
      "ONRYT, yurt içi bir müşteriden askeri/sivil hava sahası kontrolü ve yönetiminde kullanılacak Görev Kritik Ses Haberleşme ve Kayıt Sistemi için 661.200 dolarlık ilave sipariş aldı.",
    yorum:
      "Şirket, 2026 yılında toplam sipariş hacminin 24 adet siparişle 8.658.137 dolara ulaştığını açıkladı.",
    kaynak: "https://www.kap.org.tr/Bildirim/1630756",
  },
  {
    kod: "ARZUM",
    baslik: "Tahsisli Sermaye Artırımı Başvurusunda Düzeltme",
    etki: "Nötr",
    ozet:
      "ARZUM, tahsisli sermaye artırımı ihraç belgesi onay başvurusuna ilişkin düzeltme bildirimi yayımladı. Bildirimde hatalı girilen bilgi nedeniyle düzeltme yapıldığı belirtildi.",
    yorum:
      "Ana haber 240 milyon TL tahsisli sermaye artırımı başvurusu tarafında kalırken, bu bildirim süreçsel düzeltme niteliği taşıyor.",
    kaynak: "https://www.kap.org.tr/Bildirim/1630760",
    haberLink: "/haber/arzum-240-milyon-tl-tahsisli-sermaye-artirimi-spk-basvurusu",
  },
  {
    kod: "GEDZA",
    baslik: "Yatırım Teşvik Belgesi Kapandı",
    etki: "Pozitif",
    ozet:
      "GEDZA bağlı ortaklığı Gediz Plastik’in yatırım teşvik belgesi kapsamındaki makine ve teçhizat alımları tamamlandı. Toplam harcama 44.758.163,93 TL olarak açıklandı.",
    yorum:
      "Yatırım tamamlama vizesinin yapılması, geçmiş yatırım sürecinin resmi kapanışı açısından olumlu ve operasyonel bir gelişme.",
    kaynak: "https://www.kap.org.tr/Bildirim/1630991",
  },
  {
    kod: "TRILC",
    baslik: "TURKFLEKS Ürünleri Azerbaycan’da Ruhsat Aldı",
    etki: "Pozitif",
    ozet:
      "TRILC, TURKFLEKS markalı ürünlerinin Azerbaycan Sağlık Bakanlığı nezdinde ruhsatlandırıldığını ve ülkede serbest satış hakkı kazandığını açıkladı.",
    yorum:
      "Ruhsat ve serbest satış hakkı, ihracat hacmi ve dış pazar büyümesi açısından pozitif okunabilir.",
    kaynak: "https://www.kap.org.tr/Bildirim/1631139",
  },
  {
    kod: "ATSYH",
    baslik: "Gönüllü Pay Alım Teklifi Süreci",
    etki: "Takip",
    ozet:
      "ATSYH, şirket ortağı Süleyman Yıldırım tarafından gönüllü pay alım teklifi bilgilendirme başvurusu ve sürecine ilişkin açıklama yaptı. Açıklamada kurumsal yönetim, pay sahipliği ve yönetim uyumu vurgulandı.",
    yorum:
      "Gönüllü pay alım teklifi süreci, ortaklık yapısı ve pay fiyatı üzerindeki olası etkiler nedeniyle izlenmeli.",
    kaynak: "https://www.kap.org.tr/Bildirim/1631146",
  },
  {
    kod: "VAKKO",
    baslik: "Uşak GES Projesinde İfraz Süreci",
    etki: "Pozitif",
    ozet:
      "VAKKO, Uşak ili Ulubey ilçesinde planlanan GES projesine ilişkin taşınmazın arsa olarak üçe ifrazının uygun bulunduğunu açıkladı.",
    yorum:
      "GES projesine yönelik idari sürecin ilerlemesi, yenilenebilir enerji yatırım başlığı açısından olumlu okunabilir.",
    kaynak: "https://www.kap.org.tr/Bildirim/1631225",
  },
  {
    kod: "IEYHO",
    baslik: "Bulgaristan’daki Kripto Varlık Faaliyetleri Sonlandırıldı",
    etki: "Nötr",
    ozet:
      "IEYHO, Bulgaristan merkezli bağlı ortaklığı Işıklar Software Technology EOOD tarafından yürütülen kripto varlık faaliyetlerinin düzenleyici gereklilikler doğrultusunda sonlandırıldığını açıkladı.",
    yorum:
      "Bağlı ortaklık yazılım ve teknoloji geliştirme alanında faaliyetini sürdürecek. Sermaye avanslarının faizli bakiyeleriyle tahsil edildiği belirtildi.",
    kaynak: "https://www.kap.org.tr/Bildirim/1631263",
  },
  {
    kod: "KONTR",
    baslik: "Grup Yatırımcı İlişkileri Direktörü Görevden Ayrıldı",
    etki: "Nötr",
    ozet:
      "KONTR, Grup Yatırımcı İlişkileri Direktörü Alican Sancak’ın görevlerinden ayrıldığını açıkladı. Boşalan pozisyona yapılacak atama ayrıca duyurulacak.",
    yorum:
      "Operasyonel finansal etkiden çok yatırımcı ilişkileri ve kurumsal iletişim tarafında takip edilecek bir yönetim gelişmesi.",
    kaynak: "https://www.kap.org.tr/Bildirim/1630830",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "9 Temmuz 2026 Önemli KAP: VESTL, PETKM, SDTTR Etkileri",
  description:
    "9 Temmuz 2026 KAP haberlerinde VESTL eurobond süreci, PETKM Master Plan, SDTTR siparişi, DCTTR pay takası, PRZMA varlık satışı ve BORLS ödeme açıklaması öne çıktı.",
  image: haberGorsel,
  datePublished: "2026-07-09T21:30:00+03:00",
  dateModified: "2026-07-09T21:30:00+03:00",
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

function etkiClass(etki: string) {
  if (etki === "Pozitif") return "bg-emerald-50 text-emerald-700 ring-emerald-600/20";
  if (etki === "Negatif") return "bg-red-50 text-red-700 ring-red-600/20";
  if (etki === "Takip") return "bg-amber-50 text-amber-700 ring-amber-600/20";
  return "bg-slate-50 text-slate-700 ring-slate-600/20";
}

export default function DokuzTemmuzKapPage() {
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
              alt="9 Temmuz 2026 önemli KAP haberleri VESTL PETKM SDTTR etkileri"
              fill

              sizes="(min-width: 1024px) 896px, 100vw"
className="object-cover"
              priority
            />
          </div>

          <div className="p-6 md:p-10">
            <h1 className="text-2xl font-bold leading-tight tracking-tight text-slate-900 md:text-3xl lg:text-4xl">
              9 Temmuz 2026 Önemli KAP: VESTL, PETKM, SDTTR Etkileri
            </h1>

            <div className="mb-5 mt-3 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center rounded-md bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700 ring-1 ring-inset ring-blue-600/20">
                Gün Sonu KAP Özeti
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
                9 Temmuz 2026 tarihli KAP akışında VESTL’nin eurobond süreci,
                PETKM’nin Master Plan güncellemesi, SDTTR’nin bağlı ortaklık
                üzerinden aldığı sipariş, DCTTR’nin yapay zekâ tarafındaki pay
                takası, PRZMA’nın varlık satışı ve BORLS’un borçlanma aracı
                ödeme açıklaması öne çıktı.
              </p>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {oneCikanlar.map((item) => (
                  <div
                    key={item.kod}
                    className="rounded-2xl border border-blue-200 bg-blue-50 p-4"
                  >
                    <div className="text-2xl font-black text-blue-950">
                      {item.kod}
                    </div>
                    <div className="mt-2 text-sm font-semibold leading-6 text-blue-900">
                      {item.baslik}
                    </div>
                    <span
                      className={`mt-3 inline-flex rounded-full px-2.5 py-1 text-xs font-bold ring-1 ring-inset ${etkiClass(
                        item.etki
                      )}`}
                    >
                      {item.etki}
                    </span>
                  </div>
                ))}
              </div>

              <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:p-6">
                <h2 className="mb-4 text-xl font-bold tracking-tight text-slate-900">
                  Günün öne çıkan KAP başlıkları
                </h2>
                <div className="grid gap-4">
                  {kapKartlari.map((item) => (
                    <div
                      key={`${item.kod}-${item.baslik}`}
                      className="rounded-2xl border border-slate-200 bg-slate-50 p-4 md:p-5"
                    >
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="rounded-lg bg-slate-900 px-3 py-1 text-sm font-black text-white">
                          {item.kod}
                        </span>
                        <span
                          className={`inline-flex rounded-full px-2.5 py-1 text-xs font-bold ring-1 ring-inset ${etkiClass(
                            item.etki
                          )}`}
                        >
                          {item.etki}
                        </span>
                      </div>

                      <h3 className="mt-3 text-lg font-bold leading-7 text-slate-900 md:text-xl">
                        {item.baslik}
                      </h3>

                      <p className="mt-2 text-sm leading-7 text-slate-700 md:text-base">
                        {item.ozet}
                      </p>

                      <p className="mt-2 text-sm leading-7 text-slate-600 md:text-base">
                        <strong>Etki yorumu:</strong> {item.yorum}
                      </p>

                      <div className="mt-4 flex flex-wrap gap-3 text-sm font-semibold">
                        {"haberLink" in item && item.haberLink ? (
                          <Link
                            href={item.haberLink}
                            className="rounded-lg bg-blue-600 px-3 py-2 text-white hover:bg-blue-700"
                          >
                            Detaylı haber
                          </Link>
                        ) : null}
                        <a
                          href={item.kaynak}
                          target="_blank"
                          rel="noopener noreferrer nofollow"
                          className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-700 hover:border-slate-400"
                        >
                          Orjinal Kap içeriği
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:p-6">
                <h2 className="mb-4 text-xl font-bold tracking-tight text-slate-900">
                  Genel görünüm
                </h2>
                <p className="text-sm leading-7 text-slate-600 md:text-base">
                  Günün KAP akışında sipariş, üretim başlangıcı, ruhsat, yatırım
                  süreci ve pay takası gibi pozitif başlıklar bulunurken; BORLS
                  tarafındaki kupon ve anapara ödeme açıklaması negatif tarafta
                  ayrıştı. VESTL’de eurobondlara ilişkin danışman atanması,
                  PRZMA’da varlık satışı ve PETKM’de Master Plan süreci ise
                  önümüzdeki dönemde takip edilecek başlıklar arasında yer aldı.
                </p>
              </section>

              <HaberIlgiliBolumler
                slug={slug}
                baslik="9 Temmuz 2026 Önemli KAP: VESTL, PETKM, SDTTR Etkileri"
              />

              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm font-medium leading-7 text-amber-900 md:text-base">
                ⚠️ Bu haber bilgilendirme amacıyla hazırlanmıştır, yatırım
                tavsiyesi değildir. KAP açıklamalarının finansal etkisi,
                şirketlerin sonraki bildirimleri ve finansal tablolarıyla
                birlikte değerlendirilmelidir.
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
