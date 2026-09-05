import { serializeJsonLd } from "@/lib/json-ld";
import Link from "@/components/NoPrefetchLink";
import RehberAltBolumler from "@/components/RehberAltBolumler";
import type { Metadata } from "next";
import type { ReactNode } from "react";

const siteUrl = "https://www.hocaileborsa.com";
const title = "KAP Açıklamaları Nasıl Okunur?";
const description =
  "KAP açıklaması nedir, özel durum açıklaması, finansal rapor, sermaye artırımı, sözleşme haberi ve yatırımcı açısından önemli KAP bildirimleri nasıl yorumlanır?";
const canonical = `${siteUrl}/rehberler/kap-aciklamalari-nasil-okunur`;

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical,
  },
  openGraph: {
    title,
    description,
    url: canonical,
    type: "article",
  },
};

const bildirimTurleri = [
  {
    title: "Özel Durum Açıklamaları",
    text: "Şirketin faaliyetlerini, finansal durumunu, ortaklık yapısını veya hisse fiyatını etkileyebilecek önemli gelişmeler bu başlık altında duyurulur. Yeni sözleşme, yatırım kararı, dava, borçlanma, ortaklık değişimi veya yönetim kurulu kararı gibi haberler bu gruba girebilir.",
  },
  {
    title: "Finansal Raporlar",
    text: "Şirketlerin bilanço, gelir tablosu, nakit akış tablosu, özkaynak değişim tablosu ve dipnotlarını içerir. Yatırımcı açısından şirketin satış, karlılık, borçluluk ve nakit üretme gücünü görmek için en önemli bildirim türlerinden biridir.",
  },
  {
    title: "Sermaye Artırımı Bildirimleri",
    text: "Bedelli, bedelsiz, tahsisli veya iç kaynaklardan sermaye artırımı gibi işlemler bu bildirimlerle duyurulur. Artırım oranı, rüçhan hakkı, kullanım fiyatı, SPK başvurusu, onay ve hak kullanım tarihleri özellikle takip edilmelidir.",
  },
  {
    title: "Kar Payı ve Temettü Bildirimleri",
    text: "Şirketin kar dağıtım politikası, temettü kararı, ödeme tarihi, brüt ve net temettü tutarı gibi bilgiler bu açıklamalarda yer alır. Temettü yatırımcıları için en yakından izlenen KAP başlıklarından biridir.",
  },
  {
    title: "Pay Geri Alım Bildirimleri",
    text: "Şirketin kendi paylarını geri alması veya geri alım programı açıklaması yatırımcı güveni, sermaye yapısı ve piyasa fiyatı açısından takip edilir. Ancak geri alım haberi tek başına fiyatın yükseleceği anlamına gelmez.",
  },
  {
    title: "VBTS ve Tedbir Bildirimleri",
    text: "Volatilite Bazlı Tedbir Sistemi kapsamında açığa satış yasağı, kredili işlem yasağı, brüt takas, emir paketi veya tek fiyat gibi tedbirler açıklanabilir. Bu bildirimler hissenin işlem koşullarını doğrudan etkileyebilir.",
  },
  {
    title: "Genel Kurul ve Yönetim Kurulu Kararları",
    text: "Genel kurul tarihi, gündem maddeleri, kar dağıtımı, yönetim kurulu seçimi, esas sözleşme değişikliği ve önemli şirket kararları bu başlıkta izlenebilir.",
  },
  {
    title: "Halka Arz ve İzahname Bildirimleri",
    text: "Halka arz edilen veya sermaye piyasası aracı ihraç eden şirketlerde izahname, fiyat tespit raporu, tahsisat, fon kullanım raporu ve satış sonuçları yatırımcı açısından önemlidir.",
  },
];

const okumaAdimlari = [
  {
    title: "Başlığı tek başına yeterli görmeyin",
    text: "KAP bildirimlerinde başlık çoğu zaman genel bilgi verir. Asıl detay açıklama metninde, tablolarda, ek dosyalarda ve dipnotlarda yer alır. Bu yüzden sadece başlığa bakarak yatırım kararı vermek risklidir.",
  },
  {
    title: "Tarihi ve saati kontrol edin",
    text: "Açıklamanın seans içinde mi, seans kapanışından sonra mı geldiği fiyatlama açısından önemlidir. Bazı haberler aynı gün fiyatlanırken bazıları bir sonraki işlem gününde etkili olabilir.",
  },
  {
    title: "Açıklamanın şirket için büyüklüğünü ölçün",
    text: "Bir sözleşme haberi yüksek tutarlı görünebilir ancak şirketin yıllık hasılatına göre küçük kalabilir. Aynı şekilde küçük görünen bir gelişme şirketin geleceği açısından stratejik öneme sahip olabilir.",
  },
  {
    title: "Tek seferlik mi, sürekli etki mi yaratıyor bakın",
    text: "Bazı haberler tek seferlik gelir veya gider yaratır. Bazı gelişmeler ise şirketin üretim kapasitesini, satış hacmini, nakit akışını veya borçluluk yapısını uzun süre etkileyebilir.",
  },
  {
    title: "Ekleri ve tabloları mutlaka açın",
    text: "KAP açıklamalarının eklerinde fon kullanım raporu, izahname, bağımsız denetim raporu, finansal dipnotlar, değerleme raporu veya yatırımcı sunumu bulunabilir. Kritik bilgi çoğu zaman bu dosyalarda yer alır.",
  },
  {
    title: "Şirketin geçmiş açıklamalarıyla karşılaştırın",
    text: "Yeni açıklama, önceki yatırım planları, finansal hedefler, sözleşmeler veya sermaye artırımı kararlarıyla birlikte okunmalıdır. Devam niteliğindeki açıklamalarda eski bildirimler önemli ipucu verir.",
  },
  {
    title: "Haberin bilanço etkisini düşünün",
    text: "KAP açıklaması fiyatı kısa vadede hareket ettirebilir. Ancak yatırımcı açısından asıl konu bu gelişmenin satışlara, kara, nakit akışına, borçluluğa ve özkaynaklara nasıl yansıyacağıdır.",
  },
];

const yatirimciAcisindan = [
  "KAP açıklaması yatırım tavsiyesi değil, şirket tarafından yapılan resmi bilgilendirmedir.",
  "Olumlu görünen her açıklama kalıcı değer yaratmayabilir.",
  "Olumsuz görünen her açıklama şirketin uzun vadeli görünümünü tamamen bozmayabilir.",
  "Açıklama metni, şirketin büyüklüğü ve finansal tablolarıyla birlikte değerlendirilmelidir.",
  "Sözleşme haberlerinde tutar, süre, kar marjı ve tahsilat riski ayrıca incelenmelidir.",
  "Sermaye artırımı haberlerinde fon kullanım amacı, rüçhan hakkı ve ortaklık oranı etkisi takip edilmelidir.",
  "Finansal raporlarda sadece net kara değil, satış, faaliyet karı, nakit akışı ve borçluluğa da bakılmalıdır.",
];

const kritikKonuBasliklari = [
  {
    title: "Yeni iş ilişkisi ve sözleşme haberleri",
    text: "Sözleşmenin tutarı, süresi, para birimi, teslimat takvimi ve şirketin yıllık hasılatına oranı incelenmelidir. Sözleşme büyük görünse bile kar marjı düşükse etkisi sınırlı kalabilir.",
  },
  {
    title: "Yatırım ve kapasite artışı haberleri",
    text: "Yatırımın toplam büyüklüğü, finansman kaynağı, devreye alınma tarihi, beklenen kapasite artışı ve yatırımın şirketin borçluluğuna etkisi değerlendirilmelidir.",
  },
  {
    title: "Borçlanma ve finansman haberleri",
    text: "Kredi, tahvil ihracı veya finansman anlaşmalarında vade, faiz/kira oranı, para birimi ve geri ödeme yapısı önemlidir. Finansman şirketi büyütebilir ancak borç riskini de artırabilir.",
  },
  {
    title: "Dava ve ceza açıklamaları",
    text: "Davanın tutarı, şirketin özkaynaklarına oranı, karşılık ayrılıp ayrılmadığı ve sürecin hangi aşamada olduğu incelenmelidir. Her dava aynı düzeyde risk taşımaz.",
  },
  {
    title: "Ortak satışı ve pay alım satım bildirimleri",
    text: "Hakim ortakların satış veya alış işlemleri yatırımcı algısı açısından önemlidir. Ancak bu işlemler tek başına alım satım sinyali olarak görülmemelidir.",
  },
  {
    title: "Finansal sonuçlar ve denetim raporları",
    text: "Net kar kadar brüt kar, esas faaliyet karı, FAVÖK, finansman giderleri, nakit akışı ve borçluluk da analiz edilmelidir. Dipnotlar çoğu zaman tablolardan daha fazla bilgi verir.",
  },
];

const sikHatalar = [
  "Sadece KAP başlığına bakarak işlem yapmak.",
  "Sözleşme tutarını şirketin yıllık hasılatı ile karşılaştırmamak.",
  "Tek seferlik gelirleri sürdürülebilir kar sanmak.",
  "Bedelli sermaye artırımında rüçhan hakkı tarihlerini takip etmemek.",
  "Finansal raporda sadece net kara bakmak.",
  "Tedbir kararlarını şirketin temel performansıyla karıştırmak.",
  "KAP açıklamasını eski bildirimlerle karşılaştırmadan yorumlamak.",
  "Ek dosyaları ve dipnotları okumamak.",
];

const ornekKapSenaryolari = [
  {
    title: "Yeni Sözleşme Haberi",
    text: "Önce sözleşme tutarını şirketin son yıllık hasılatıyla karşılaştırın. Ardından teslim süresine, para birimine, kar marjına ve tahsilat riskine bakın. Büyük görünen bir sözleşme düşük marjlıysa hisse değerine etkisi sınırlı olabilir.",
  },
  {
    title: "Bedelli Sermaye Artırımı Kararı",
    text: "Sadece bedelli oranını değil, fon kullanım raporunu okuyun. Kaynak borç kapama için mi, büyüme yatırımı için mi, işletme sermayesi için mi kullanılacak? Hakim ortakların katılım niyeti de önemlidir.",
  },
  {
    title: "Yatırım Teşvik veya Kapasite Artışı",
    text: "Yatırım haberi hemen kar anlamına gelmez. Devreye alma tarihi, toplam yatırım tutarı, finansman kaynağı ve beklenen üretim kapasitesi birlikte incelenmelidir.",
  },
  {
    title: "Dava veya Ceza Açıklaması",
    text: "Tutarın şirket özkaynaklarına ve yıllık karına oranını kontrol edin. Karşılık ayrılıp ayrılmadığı ve sürecin hangi aşamada olduğu, haberin gerçek riskini anlamak için belirleyicidir.",
  },
];

const kapDegerlemeSorulari = [
  "Bu açıklama şirketin satışını, karını veya nakit akışını ölçülebilir şekilde etkiliyor mu?",
  "Etkisi tek seferlik mi, yoksa gelecek dönemlere yayılacak mı?",
  "Açıklamadaki tutar şirketin ölçeğine göre anlamlı mı?",
  "Haber daha önce duyurulmuş bir sürecin devamı mı, yoksa yeni bilgi mi?",
  "Ek dosyalarda başlıktan daha önemli bir detay var mı?",
  "Piyasa bu bilgiyi önceden bekliyor muydu, yoksa sürpriz mi?",
];

const faq = [
  {
    question: "KAP nedir?",
    answer:
      "KAP, Kamuyu Aydınlatma Platformu'nun kısa adıdır. Sermaye piyasası mevzuatı kapsamında kamuya açıklanması gereken bildirimlerin elektronik ortamda duyurulduğu resmi platformdur.",
  },
  {
    question: "KAP açıklaması hisseyi yükseltir mi?",
    answer:
      "Her KAP açıklaması hissenin yükseleceği anlamına gelmez. Açıklamanın şirket finansallarına etkisi, piyasa beklentisi, haberin büyüklüğü ve genel piyasa koşulları birlikte değerlendirilmelidir.",
  },
  {
    question: "Özel durum açıklaması nedir?",
    answer:
      "Şirketin faaliyetlerini, finansal durumunu, ortaklık yapısını veya yatırımcı kararlarını etkileyebilecek önemli gelişmelerin kamuya duyurulduğu açıklamalardır.",
  },
  {
    question: "Finansal rapor KAP'ta nasıl okunur?",
    answer:
      "Finansal raporda bilanço, gelir tablosu, nakit akış tablosu ve dipnotlar birlikte incelenmelidir. Sadece net kara bakmak yeterli değildir; satış, faaliyet karı, finansman giderleri, nakit akışı ve borçluluk da değerlendirilmelidir.",
  },
  {
    question: "Sözleşme haberi her zaman olumlu mudur?",
    answer:
      "Hayır. Sözleşmenin tutarı, süresi, kar marjı, tahsilat riski ve şirketin toplam cirosuna oranı önemlidir. Büyük tutarlı bir sözleşme bile düşük marjlıysa sınırlı katkı sağlayabilir.",
  },
  {
    question: "KAP açıklamasında ek dosyalar önemli midir?",
    answer:
      "Evet. Fon kullanım raporu, izahname, finansal dipnotlar, bağımsız denetim raporu ve değerleme raporu gibi ekler çoğu zaman açıklamanın en kritik bölümüdür.",
  },
  {
    question: "KAP açıklaması yatırım tavsiyesi midir?",
    answer:
      "Hayır. KAP açıklaması şirketin resmi bilgilendirmesidir. Yatırım kararı verilmeden önce açıklamanın şirket finansalları, değerleme, teknik görünüm ve risklerle birlikte analiz edilmesi gerekir.",
  },
];

const tableOfContents = [
  { href: "#kap-nedir", label: "KAP Nedir?" },
  { href: "#neden-onemlidir", label: "Neden Önemlidir?" },
  { href: "#bildirim-turleri", label: "Bildirim Türleri" },
  { href: "#nasil-okunur", label: "Nasıl Okunur?" },
  { href: "#yatirimci-acisindan", label: "Yatırımcı Açısından" },
  { href: "#kritik-konular", label: "Kritik Konular" },
  { href: "#finansal-rapor", label: "Finansal Rapor" },
  { href: "#ornek-kap-okumalari", label: "Örnek KAP Okumaları" },
  { href: "#sik-hatalar", label: "Sık Hatalar" },
  { href: "#sss", label: "Sık Sorulan Sorular" },
];

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 border-t border-slate-200 pt-8">
      <h2 className="text-2xl font-bold tracking-tight text-slate-900">
        {title}
      </h2>
      <div className="mt-4 space-y-4 text-base leading-8 text-slate-700">
        {children}
      </div>
    </section>
  );
}

export default function KapAciklamalariNasilOkunurPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: title,
        description,
        mainEntityOfPage: canonical,
        author: {
          "@type": "Person",
          "@id": `${siteUrl}/yazar/erman-hoca#person`,
          name: "Erman Hoca",
          url: `${siteUrl}/yazar/erman-hoca`,
        },
        publisher: {
          "@type": "Organization",
          name: "Hoca İle Borsa",
          url: siteUrl,
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: faq.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Ana Sayfa",
            item: siteUrl,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Rehberler",
            item: `${siteUrl}/rehberler`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "KAP Açıklamaları",
            item: canonical,
          },
        ],
      },
    ],
  };

  return (
    <main className="min-h-screen bg-[#f8fafc]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }}
      />

      <div className="mx-auto max-w-7xl px-4 py-6 md:px-6">
        <nav
          className="mb-5 flex flex-wrap items-center gap-2 text-sm text-slate-500"
          aria-label="Breadcrumb"
        >
          <Link href="/" prefetch={false} className="transition hover:text-blue-600">
            Ana Sayfa
          </Link>
          <span className="text-slate-300">/</span>
          <Link
            href="/rehberler"
            prefetch={false}
            className="transition hover:text-blue-600"
          >
            Rehberler
          </Link>
          <span className="text-slate-300">/</span>
          <span className="font-medium text-slate-700">KAP Açıklamaları</span>
        </nav>

        <article className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_18rem]">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:p-8">
            <header>
              <div className="mb-4 inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                Rehber
              </div>
              <h1 className="text-3xl font-bold tracking-tight text-slate-950 md:text-5xl">
                {title}
              </h1>
              <p className="mt-5 max-w-4xl text-base leading-8 text-slate-600 md:text-lg">
                KAP açıklamaları, Borsa İstanbul&apos;da işlem gören şirketlerle
                ilgili yatırımcıların ulaşabileceği en önemli resmi bilgi
                kaynaklarından biridir. Ancak bir KAP bildirimi yalnızca başlığı
                okunarak yorumlanmamalıdır. Açıklamanın türü, içeriği, şirketin
                finansal büyüklüğü ve olası bilanço etkisi birlikte
                değerlendirilmelidir.
              </p>
            </header>

            <div className="mt-8 space-y-10">
              <Section id="kap-nedir" title="KAP Nedir?">
                <p>
                  KAP, Kamuyu Aydınlatma Platformu&apos;nun kısa adıdır. Sermaye
                  piyasasında kamuya açıklanması gereken bildirimler bu platform
                  üzerinden elektronik ortamda duyurulur. Şirketler, fonlar,
                  aracı kurumlar ve sermaye piyasası kurumları yatırımcıyı
                  ilgilendiren önemli gelişmeleri KAP üzerinden paylaşır.
                </p>
                <p>
                  KAP&apos;ın temel amacı yatırımcıların bilgiye eşit, zamanında ve
                  şeffaf biçimde ulaşmasını sağlamaktır. Bu nedenle yatırımcılar
                  için KAP açıklamalarını takip etmek, sadece haber okumaktan
                  daha güvenilir bir bilgi akışı sağlar.
                </p>
              </Section>

              <Section id="neden-onemlidir" title="KAP Açıklamaları Neden Önemlidir?">
                <p>
                  Borsada fiyatlar çoğu zaman beklentilerle hareket eder. KAP
                  açıklamaları ise şirketin resmi olarak duyurduğu bilgi akışını
                  gösterir. Yeni bir sözleşme, yatırım kararı, finansal sonuç,
                  sermaye artırımı, temettü kararı veya dava süreci yatırımcı
                  davranışını etkileyebilir.
                </p>
                <p>
                  Ancak her açıklamanın etkisi aynı değildir. Bazı bildirimler
                  şirketin uzun vadeli değerini etkileyebilirken bazıları yalnızca
                  idari veya rutin bilgi niteliği taşır. Bu yüzden yatırımcı için
                  önemli olan sadece KAP&apos;ı takip etmek değil, açıklamanın ne ifade
                  ettiğini doğru okumaktır.
                </p>
              </Section>

              <Section id="bildirim-turleri" title="KAP Bildirim Türleri Nelerdir?">
                <p>
                  KAP&apos;ta farklı nitelikte çok sayıda bildirim yayımlanır. Her
                  bildirim aynı öneme sahip değildir. Yatırımcı, açıklamanın
                  hangi başlık altında yayımlandığını görerek ilk değerlendirmeyi
                  yapabilir.
                </p>
                <div className="grid gap-3">
                  {bildirimTurleri.map((item) => (
                    <div
                      key={item.title}
                      className="rounded-xl border border-slate-200 bg-slate-50 p-4"
                    >
                      <h3 className="font-bold text-slate-900">{item.title}</h3>
                      <p className="mt-2 text-sm leading-7 text-slate-600">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </Section>

              <Section id="nasil-okunur" title="KAP Açıklaması Nasıl Okunur?">
                <p>
                  Bir KAP açıklamasını doğru okumak için yalnızca haberin olumlu
                  veya olumsuz görünmesine bakmak yeterli değildir. Açıklama,
                  şirketin mevcut finansalları ve geçmiş bildirimleriyle birlikte
                  değerlendirilmelidir.
                </p>
                <div className="grid gap-3">
                  {okumaAdimlari.map((item, index) => (
                    <div
                      key={item.title}
                      className="rounded-xl border border-slate-200 p-4"
                    >
                      <h3 className="font-bold text-slate-900">
                        {index + 1}. {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-7 text-slate-600">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </Section>

              <Section
                id="yatirimci-acisindan"
                title="KAP Açıklamaları Yatırımcı Açısından Ne İfade Eder?"
              >
                <p>
                  KAP açıklaması yatırımcıya resmi bilgi sağlar. Fakat açıklama
                  yatırım kararının tamamı değildir. Aynı haber, farklı finansal
                  yapıya sahip şirketlerde farklı sonuçlar doğurabilir.
                </p>
                <ul className="list-disc space-y-2 pl-5">
                  {yatirimciAcisindan.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </Section>

              <Section id="kritik-konular" title="KAP'ta En Çok Dikkat Edilmesi Gereken Konular">
                <p>
                  Bazı KAP başlıkları yatırımcılar tarafından daha yakından takip
                  edilir. Bu açıklamalarda haberin büyüklüğü, sürekliliği ve
                  finansal etkisi özellikle değerlendirilmelidir.
                </p>
                <div className="grid gap-3">
                  {kritikKonuBasliklari.map((item) => (
                    <div
                      key={item.title}
                      className="rounded-xl border border-slate-200 bg-slate-50 p-4"
                    >
                      <h3 className="font-bold text-slate-900">{item.title}</h3>
                      <p className="mt-2 text-sm leading-7 text-slate-600">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </Section>

              <Section id="finansal-rapor" title="Finansal Rapor KAP'ta Nasıl Okunur?">
                <p>
                  Finansal raporlar KAP&apos;ın en önemli bildirimleri arasındadır.
                  Bilanço, gelir tablosu, nakit akış tablosu, özkaynak değişim
                  tablosu ve dipnotlar birlikte incelenmelidir. Sadece net kara
                  bakmak sağlıklı yorum yapmak için yeterli değildir.
                </p>
                <p>
                  Gelir tablosunda satış gelirleri, brüt kar, esas faaliyet karı,
                  finansman giderleri ve net kar takip edilmelidir. Bilançoda
                  dönen varlıklar, duran varlıklar, kısa vadeli yükümlülükler,
                  uzun vadeli yükümlülükler ve özkaynak yapısı incelenmelidir.
                  Nakit akış tablosunda ise şirketin gerçekten nakit üretip
                  üretmediği görülür.
                </p>
                <p>
                  Dipnotlar özellikle önemlidir. Çünkü borçların vadesi, dava
                  riskleri, ilişkili taraf işlemleri, stoklar, alacaklar, döviz
                  pozisyonu ve finansal araçlara ilişkin detaylar çoğu zaman
                  dipnotlarda yer alır.
                </p>
              </Section>

              <Section id="sermaye-artirimi" title="Sermaye Artırımı KAP Açıklamaları Nasıl Okunur?">
                <p>
                  Sermaye artırımı bildirimlerinde ilk bakılması gereken konu
                  artırımın bedelli mi, bedelsiz mi, tahsisli mi olduğudur.
                  Bedelli sermaye artırımında şirkete nakit girişi olur ancak
                  yatırımcının rüçhan hakkını kullanması için para koyması
                  gerekebilir. Bedelsiz sermaye artırımında ise yatırımcıdan
                  ödeme alınmaz; şirket iç kaynaklarını sermayeye ekler.
                </p>
                <p>
                  Yatırımcı artırım oranını, rüçhan hakkı kullanım fiyatını,
                  kullanım tarihlerini, SPK başvuru ve onay durumunu, fon kullanım
                  raporunu ve kullanılmayan hakların nasıl satılacağını mutlaka
                  takip etmelidir.
                </p>
              </Section>

              <Section id="sozlesme-haberleri" title="Sözleşme ve İş İlişkisi Haberleri Nasıl Yorumlanır?">
                <p>
                  Şirketlerin yeni iş ilişkisi veya sözleşme haberleri kısa
                  vadede yatırımcı ilgisini artırabilir. Ancak doğru yorum için
                  sözleşme tutarı tek başına yeterli değildir. Sözleşmenin şirket
                  cirosuna oranı, kar marjı, teslimat süresi ve tahsilat riski
                  dikkate alınmalıdır.
                </p>
                <p>
                  Örneğin yıllık satışları çok yüksek olan bir şirket için büyük
                  görünen bir sözleşme sınırlı etki yaratabilir. Daha küçük ölçekli
                  bir şirket için ise aynı tutar önemli büyüklükte olabilir. Bu
                  nedenle açıklama şirket ölçeğiyle birlikte okunmalıdır.
                </p>
              </Section>

              <Section id="tedbirler" title="VBTS ve Tedbir KAP'ları Nasıl Okunur?">
                <p>
                  VBTS kapsamında açıklanan tedbirler şirketin temel faaliyetinin
                  bozulduğu anlamına gelmez. Bu tedbirler genellikle hisse
                  fiyatında veya işlem hacminde görülen olağandışı hareketlere
                  karşı piyasa düzenini korumak amacıyla uygulanır.
                </p>
                <p>
                  Brüt takas, açığa satış ve kredili işlem yasağı, emir paketi
                  veya tek fiyat gibi tedbirler hissenin işlem koşullarını
                  etkileyebilir. Yatırımcı bu tür açıklamalarda tedbirin başlangıç
                  ve bitiş tarihini, kapsamını ve hangi işlemleri sınırladığını
                  kontrol etmelidir.
                </p>
              </Section>

              <Section id="ornek-kap-okumalari" title="Örnek KAP Okuma Senaryoları">
                <p>
                  KAP açıklamalarını güçlü içerik haline getiren şey yalnızca
                  tanım bilmek değil, açıklamanın şirkete olası etkisini
                  ölçebilmektir. Aşağıdaki örnekler, yatırımcının farklı KAP
                  türlerini hangi sorularla okuması gerektiğini gösterir.
                </p>
                <div className="grid gap-3">
                  {ornekKapSenaryolari.map((item) => (
                    <div
                      key={item.title}
                      className="rounded-xl border border-slate-200 bg-slate-50 p-4"
                    >
                      <h3 className="font-bold text-slate-900">{item.title}</h3>
                      <p className="mt-2 text-sm leading-7 text-slate-600">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="rounded-xl border border-blue-100 bg-blue-50 p-4">
                  <h3 className="font-bold text-blue-950">
                    KAP Açıklamasını Değerlerken Sorulacak Sorular
                  </h3>
                  <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-blue-900">
                    {kapDegerlemeSorulari.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </Section>

              <Section id="sik-hatalar" title="KAP Açıklamalarında Sık Yapılan Hatalar">
                <ul className="list-disc space-y-2 pl-5">
                  {sikHatalar.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </Section>

              <Section id="sonuc" title="Sonuç: KAP Açıklaması Nasıl Okunmalı?">
                <p>
                  KAP açıklamaları yatırımcı için en önemli resmi bilgi
                  kaynaklarından biridir. Ancak her açıklama aynı derecede önemli
                  değildir. Başlık, tarih, açıklama metni, ekler, finansal etki ve
                  şirketin geçmiş bildirimleri birlikte incelenmelidir.
                </p>
                <p>
                  Doğru yaklaşım; KAP açıklamasını haber başlığı gibi değil,
                  şirketin finansal ve operasyonel görünümünü anlamaya yarayan
                  resmi bir veri noktası olarak okumaktır. Açıklama tek başına
                  karar sebebi yapılmamalı, bilanço, değerleme, teknik görünüm ve
                  risklerle birlikte değerlendirilmelidir.
                </p>
              </Section>

              <Section id="sss" title="Sık Sorulan Sorular">
                <div className="space-y-3">
                  {faq.map((item) => (
                    <details
                      key={item.question}
                      className="rounded-xl border border-slate-200 bg-slate-50 p-4"
                    >
                      <summary className="cursor-pointer font-bold text-slate-900">
                        {item.question}
                      </summary>
                      <p className="mt-3 text-sm leading-7 text-slate-600">
                        {item.answer}
                      </p>
                    </details>
                  ))}
                </div>
              </Section>

              <section className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm leading-7 text-amber-900">
                <strong>Yasal Uyarı:</strong> Bu yazı bilgilendirme amacıyla
                hazırlanmıştır. Burada yer alan bilgiler yatırım danışmanlığı
                kapsamında değildir. Pay piyasalarında işlem yapmak risk içerir.
                KAP açıklamaları resmi bilgi kaynağı olsa da yatırım kararları
                kişisel risk-getiri tercihleri, güncel veriler ve detaylı analiz
                dikkate alınarak verilmelidir.
              </section>

              <RehberAltBolumler currentHref="/rehberler/kap-aciklamalari-nasil-okunur" />
            </div>
          </div>

          <aside className="lg:sticky lg:top-24 lg:h-fit">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h2 className="text-sm font-bold uppercase tracking-wide text-slate-500">
                İçindekiler
              </h2>
              <div className="mt-4 space-y-2">
                {tableOfContents.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-blue-50 hover:text-blue-700"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </aside>
        </article>
      </div>
    </main>
  );
}
