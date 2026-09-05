import { serializeJsonLd } from "@/lib/json-ld";
import Link from "@/components/NoPrefetchLink";
import RehberAltBolumler from "@/components/RehberAltBolumler";
import type { Metadata } from "next";

const siteUrl = "https://www.hocaileborsa.com";
const title = "Devre Kesici Nedir? Borsada Devre Kesici Hisseyi Nasıl Etkiler?";
const description =
  "Devre kesici nedir, Borsa İstanbul'da pay bazında devre kesici nasıl çalışır, tek fiyat emir toplama süreci ne anlama gelir ve yatırımcı nelere dikkat etmelidir?";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: `${siteUrl}/rehberler/devre-kesici-nedir`,
  },
  openGraph: {
    title,
    description,
    url: `${siteUrl}/rehberler/devre-kesici-nedir`,
    type: "article",
  },
};

const temelKavramlar = [
  {
    title: "Geçici İşlem Arasıdır",
    text: "Devre kesici, ilgili payda veya piyasada işlemlerin tamamen iptal edilmesi değil, aşırı fiyat hareketi sırasında işlemlere kısa süreli ara verilmesi ve fiyat oluşumunun daha kontrollü hale getirilmesidir.",
  },
  {
    title: "Panik İşlemleri Azaltmayı Amaçlar",
    text: "Ani ve sert fiyat hareketlerinde yatırımcıların acele emirlerle işlem yapmasını engellemek, emir defterinin yeniden oluşmasına zaman tanımak ve daha sağlıklı fiyat oluşumunu desteklemek amacıyla uygulanır.",
  },
  {
    title: "Tek Fiyat Sürecine Geçilebilir",
    text: "Pay bazında devre kesici çalıştığında sürekli işlem geçici olarak durur ve ilgili payda tek fiyat emir toplama aşaması başlayabilir. Emir toplama bölümünden sonra eşleştirme yapılır ve işlemler yeniden devam eder.",
  },
  {
    title: "Ceza Değildir",
    text: "Devre kesici bir şirket cezası değildir. Aşırı oynaklık veya belirlenen eşiklerin aşılması nedeniyle çalışan otomatik bir piyasa güvenlik mekanizmasıdır.",
  },
];

const devreKesiciTurleri = [
  {
    title: "Pay Bazında Devre Kesici",
    text: "Tek bir hisse senedinde belirlenen referans değere göre fiyat değişimi eşik seviyeye ulaştığında veya bu seviyeyi aştığında çalışır. Sadece ilgili işlem sırasında geçici ara ve tek fiyat emir toplama süreci oluşabilir.",
  },
  {
    title: "Endekse Bağlı Devre Kesici",
    text: "Piyasa genelinde çok sert hareketler yaşandığında devreye giren daha geniş kapsamlı mekanizmadır. Bu durumda sadece tek bir hisse değil, piyasanın genel işlem akışı etkilenebilir.",
  },
  {
    title: "VBTS Tedbirlerinden Farkı",
    text: "Volatilite Bazlı Tedbir Sistemi kapsamında brüt takas, kredili işlem yasağı, açığa satış yasağı veya emir paketi gibi tedbirler uygulanabilir. Devre kesici ise işlem sırasında ani fiyat hareketine karşı çalışan geçici bir ara mekanizmasıdır.",
  },
  {
    title: "Tek Fiyat Yöntemi",
    text: "Devre kesici sonrası emirler belirli süre boyunca toplanır. Ardından tek fiyat belirlenerek eşleşme yapılır. Bu yöntem, ani fiyat boşlukları yerine daha dengeli fiyat oluşumuna yardımcı olmayı amaçlar.",
  },
];

const surecAdimlari = [
  {
    title: "Fiyat Hareketi Eşik Seviyeye Ulaşır",
    text: "Sürekli işlem sırasında ilgili sermaye piyasası aracında belirlenen referans fiyat üzerinden hesaplanan fiyat değişimi Borsa tarafından belirlenen eşik değere ulaşır veya bu eşiği aşar.",
  },
  {
    title: "Sürekli İşlem Geçici Olarak Durur",
    text: "Devre kesici çalıştığında ilgili payda sürekli işlem aşamasına ara verilir. Bu sırada yatırımcılar ekranda devre kesici, tek fiyat emir toplama veya işlem sırasında ara verildiğine ilişkin uyarılar görebilir.",
  },
  {
    title: "Tek Fiyat Emir Toplama Başlar",
    text: "İlgili işlem sırasında emirler belirli süre boyunca toplanır. Bu aşamada yatırımcıların emir girişi, emir değiştirme veya iptal imkanları işlem kurallarına ve aracı kurum ekranına göre farklılık gösterebilir.",
  },
  {
    title: "Eşleştirme Yapılır",
    text: "Emir toplama süresi tamamlandıktan sonra tek fiyat yöntemiyle eşleştirme yapılır. Bu eşleştirme sonucunda mümkün olan alış ve satış emirleri belirlenen tek fiyat üzerinden karşılaşır.",
  },
  {
    title: "İşlemler Yeniden Başlar",
    text: "Eşleştirme aşamasından sonra ilgili payda işlemler normal akışına döner. Ancak fiyat hareketi devam ederse yeni fiyatlama, likidite ve haber akışı yatırımcılar tarafından ayrıca izlenmelidir.",
  },
  {
    title: "KAP Bildirimi Yayınlanabilir",
    text: "Pay bazında devre kesici uygulamaları KAP haber akışında görülebilir. Bildirimlerde ilgili pay, emir toplama süreci ve işlemlerin yeniden başlayacağı zaman bilgisi yer alabilir.",
  },
];

const yatirimciEtkileri = [
  {
    title: "Panik Emir Riski Azaltılmak İstenebilir",
    text: "Ani düşüş veya yükselişlerde yatırımcıların piyasa emriyle çok kötü fiyatlardan işlem yapma riski artabilir. Devre kesici, bu ortamda yatırımcıya düşünme ve emir defterini yeniden değerlendirme zamanı sağlar.",
  },
  {
    title: "Likidite Geçici Olarak Zayıflayabilir",
    text: "Devre kesici sırasında normal sürekli işlem akışı durduğu için yatırımcı istediği anda işlem gerçekleştiremeyebilir. Eşleştirme sonrası tahtadaki derinlik ve fiyat kademeleri dikkatle izlenmelidir.",
  },
  {
    title: "Fiyat Yönü Garanti Edilmez",
    text: "Devre kesici sonrası hissenin kesin düşeceği veya kesin yükseleceği söylenemez. Fiyatı şirket haberi, bilanço, endeks görünümü, emir dengesi ve yatırımcı psikolojisi birlikte belirler.",
  },
  {
    title: "Haber Akışı Daha Önemli Hale Gelir",
    text: "Devre kesici genellikle olağan dışı fiyat hareketi sırasında görüldüğü için yatırımcı aynı anda KAP açıklamalarını, şirket haberlerini, bilanço beklentilerini ve piyasa genelindeki gelişmeleri kontrol etmelidir.",
  },
  {
    title: "Kısa Vadeli İşlem Riski Artabilir",
    text: "Sert hareket eden hisselerde devre kesici sonrasında fiyat boşlukları, hızlı yön değişimleri ve alış-satış makasında açılma görülebilir. Bu nedenle kısa vadeli işlem yapan yatırımcıların risk yönetimi daha önemli hale gelir.",
  },
];

const dikkatEdilecekler = [
  "Devre kesici kararı tek başına alım veya satım sinyali değildir.",
  "Hissenin neden sert hareket ettiğini anlamak için KAP açıklamaları ve haber akışı kontrol edilmelidir.",
  "Tek fiyat emir toplama ve eşleştirme saatleri aracı kurum ekranından dikkatle takip edilmelidir.",
  "Piyasa emri veya yüksek hacimli acele emirler yerine limitli ve kontrollü emir mantığı değerlendirilmelidir.",
  "Devre kesici sonrası oluşan teorik fiyat veya gösterge fiyat kesin işlem fiyatı gibi yorumlanmamalıdır.",
  "Likiditesi düşük hisselerde fiyat hareketleri daha sert olabileceği için işlem büyüklüğü dikkatli belirlenmelidir.",
  "Sadece sosyal medya yorumlarına göre hareket edilmemeli; şirketin temel verileri, bilançosu ve güncel açıklamaları birlikte incelenmelidir.",
  "Devre kesici ile brüt takas, kredili işlem yasağı ve açığa satış yasağı gibi VBTS tedbirleri birbirine karıştırılmamalıdır.",
];

const yanilgilar = [
  "Devre kesici gelen hisse kesin düşer düşüncesi doğru değildir.",
  "Devre kesici gelen hisse kesin yükselir düşüncesi de doğru değildir.",
  "Devre kesici şirketin cezalandırıldığı anlamına gelmez.",
  "Devre kesici, hissenin işlemden tamamen kaldırıldığı anlamına gelmez.",
  "Devre kesici fiyat oynaklığını tamamen ortadan kaldırmaz.",
  "Devre kesici sonrası oluşan tek fiyat, sonraki fiyat hareketini garanti etmez.",
  "Devre kesici her zaman kötü haber nedeniyle çalışmaz; çok sert yükselişlerde de devreye girebilir.",
];

const ornekSenaryolar = [
  {
    title: "Sert Düşüşte Devre Kesici",
    text: "Önce yeni bir KAP açıklaması, bilanço, dava, tedbir veya piyasa geneli satış olup olmadığı kontrol edilmelidir. Eğer haber şirket özelindeyse finansal etkisi; piyasa geneli ise endeks ve sektör davranışı birlikte izlenmelidir.",
  },
  {
    title: "Sert Yükselişte Devre Kesici",
    text: "Yükseliş devre kesicisi her zaman olumlu haber anlamına gelmez. Düşük likidite, spekülatif emir akışı veya söylenti fiyatı hızlı hareket ettirmiş olabilir. Hacim ve haber doğrulaması yapılmadan işlem kararı verilmemelidir.",
  },
  {
    title: "Tek Fiyat Sonrası Yeniden Tavan",
    text: "Tek fiyat sonrası hisse yeniden güçlü alıcı bulabilir. Buna rağmen yatırımcı, alış tarafındaki emirlerin kalıcı olup olmadığını, işlem hacmini ve haberin gerçek şirket değerine etkisini kontrol etmelidir.",
  },
  {
    title: "Tek Fiyat Sonrası Satış Baskısı",
    text: "Eşleştirme sonrası satış baskısı artarsa piyasa, haberi olumsuz fiyatlıyor olabilir. Bu durumda acele piyasa emri yerine likidite, fiyat kademeleri ve pozisyon büyüklüğü dikkatle yönetilmelidir.",
  },
];

const kaynaklar = [
  {
    title: "Borsa İstanbul Devre Kesici Açıklaması",
    href: "https://www.borsaistanbul.com/teknoloji/teknoloji-hizmetleri/risk-yonetimi/devre-kesici",
    text: "Devre kesici uygulamasının hangi durumda çalıştığı, tek fiyat yöntemi ve emir toplama sürecine ilişkin resmi açıklama.",
  },
  {
    title: "Borsa İstanbul Pay Piyasası İşleyişi",
    href: "https://www.borsaistanbul.com/piyasalar/pay-piyasasi/piyasa-isleyisi",
    text: "Pay piyasasında işlem esasları, devre kesici süreleri, endekse bağlı devre kesici ve piyasa işleyişine ilişkin bilgiler.",
  },
  {
    title: "Kamuyu Aydınlatma Platformu",
    href: "https://www.kap.org.tr/tr/",
    text: "Pay bazında devre kesici bildirimleri, şirket açıklamaları ve piyasa duyurularının takip edilebildiği resmi platform.",
  },
];

const faq = [
  {
    question: "Devre kesici nedir?",
    answer:
      "Devre kesici, Borsa İstanbul'da ani ve sert fiyat hareketleri sırasında ilgili payda veya piyasada işlemlere geçici ara verilmesini sağlayan güvenlik mekanizmasıdır. Amaç daha sağlıklı fiyat oluşumuna zaman tanımaktır.",
  },
  {
    question: "Devre kesici hisseyi nasıl etkiler?",
    answer:
      "Devre kesici sonrası fiyatın kesin yönü bilinemez. Bazı hisselerde panik azalabilir, bazı hisselerde oynaklık devam edebilir. Fiyatı haber akışı, emir dengesi, şirket verileri ve genel piyasa koşulları belirler.",
  },
  {
    question: "Devre kesici gelince hisse alınır mı?",
    answer:
      "Devre kesici tek başına alım gerekçesi değildir. Hissenin neden sert hareket ettiği, KAP açıklamaları, bilançosu, likiditesi ve piyasa koşulları incelenmeden karar verilmemelidir.",
  },
  {
    question: "Devre kesici gelince hisse satılır mı?",
    answer:
      "Devre kesici tek başına satış gerekçesi de değildir. Yatırımcı panik yerine pozisyon büyüklüğünü, riskini, haber akışını ve teknik görünümü birlikte değerlendirmelidir.",
  },
  {
    question: "Pay bazında devre kesici ne demek?",
    answer:
      "Pay bazında devre kesici, sadece ilgili hisse senedinde çalışan devre kesici uygulamasıdır. Sürekli işlem geçici olarak durur, tek fiyat emir toplama ve eşleştirme süreci sonrası işlemler yeniden başlar.",
  },
  {
    question: "Endekse bağlı devre kesici nedir?",
    answer:
      "Endekse bağlı devre kesici, piyasa genelinde çok sert hareketler olduğunda devreye girebilen daha geniş kapsamlı mekanizmadır. Bu durumda tek bir paydan ziyade piyasanın genel işlem akışı etkilenebilir.",
  },
  {
    question: "Devre kesici ile brüt takas aynı şey mi?",
    answer:
      "Hayır. Devre kesici işlem sırasında ani fiyat hareketine karşı geçici ara mekanizmasıdır. Brüt takas ise netleştirme uygulamasının kaldırıldığı farklı bir işlem tedbiridir.",
  },
  {
    question: "Devre kesici ceza mıdır?",
    answer:
      "Hayır. Devre kesici şirket cezası değildir. Piyasa işleyişinde aşırı oynaklığı sınırlamak ve emir defterinin daha sağlıklı oluşmasına zaman tanımak için kullanılan otomatik bir mekanizmadır.",
  },
];

const tableOfContents = [
  { href: "#devre-kesici-nedir", label: "Devre Kesici Nedir?" },
  { href: "#neden-uygulanir", label: "Neden Uygulanır?" },
  { href: "#turleri", label: "Devre Kesici Türleri" },
  { href: "#sistem-nasil-isler", label: "Sistem Nasıl İşler?" },
  { href: "#hisseyi-nasil-etkiler", label: "Hisseyi Nasıl Etkiler?" },
  { href: "#yatirimci-ne-yapmali", label: "Yatırımcı Ne Yapmalı?" },
  { href: "#ornek-senaryolar", label: "Örnek Senaryolar" },
  { href: "#yanilgilar", label: "Sık Yapılan Yanılgılar" },
  { href: "#sss", label: "Sık Sorulan Sorular" },
];

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
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

export default function DevreKesiciNedirPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: title,
        description,
        mainEntityOfPage: `${siteUrl}/rehberler/devre-kesici-nedir`,
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
            name: "Devre Kesici",
            item: `${siteUrl}/rehberler/devre-kesici-nedir`,
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
          <span className="font-medium text-slate-700">Devre Kesici</span>
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
                Devre kesici, Borsa İstanbul&apos;da ani ve sert fiyat hareketleri
                sırasında işlemlere geçici ara verilmesini sağlayan piyasa
                güvenlik mekanizmasıdır. Amaç, yatırımcıların panik emirlerle
                işlem yapmasını azaltmak ve fiyat oluşumunun daha kontrollü
                şekilde gerçekleşmesine zaman tanımaktır.
              </p>
            </header>

            <div className="mt-8 space-y-10">
              <Section id="devre-kesici-nedir" title="Devre Kesici Nedir?">
                <p>
                  Devre kesici, bir sermaye piyasası aracında işlemler sürekli
                  işlem bölümünde devam ederken fiyat değişiminin Borsa
                  tarafından belirlenen eşik seviyelere ulaşması veya bu
                  seviyeleri aşması halinde devreye giren geçici işlem arasıdır.
                </p>
                <p>
                  Bu mekanizma çalıştığında ilgili payda sürekli işlem akışı
                  geçici olarak durabilir ve tek fiyat emir toplama aşamasına
                  geçilebilir. Emir toplama süreci tamamlandıktan sonra
                  eşleştirme yapılır ve işlemler yeniden devam eder.
                </p>
                <p>
                  Devre kesici, hissenin borsadan çıkarılması, şirketin ceza
                  alması veya işlemlerin tamamen iptal edilmesi anlamına gelmez.
                  Sadece olağan dışı fiyat hareketlerinde piyasaya kısa süreli
                  sakinleşme alanı açan teknik bir uygulamadır.
                </p>
              </Section>

              <Section id="neden-uygulanir" title="Devre Kesici Neden Uygulanır?">
                <p>
                  Borsada fiyatlar normal şartlarda arz ve talebe göre oluşur.
                  Ancak bazı dönemlerde haber akışı, söylentiler, düşük
                  likidite, panik satışları veya ani alım iştahı nedeniyle fiyat
                  hareketleri çok kısa sürede sertleşebilir.
                </p>
                <p>
                  Devre kesici uygulaması bu tür anlarda yatırımcılara emirlerini
                  yeniden değerlendirme fırsatı verir. Emir defteri yeniden
                  şekillenir, alıcı ve satıcılar daha kontrollü şekilde pozisyon
                  alabilir ve fiyat oluşumu tek fiyat yöntemiyle daha düzenli
                  hale getirilmeye çalışılır.
                </p>
                <div className="grid gap-3">
                  {temelKavramlar.map((item) => (
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

              <Section id="turleri" title="Devre Kesici Türleri ve Benzer Uygulamalar">
                <p>
                  Yatırımcıların en çok karıştırdığı nokta, pay bazında devre
                  kesici ile piyasa genelini etkileyen endekse bağlı devre
                  kesici ve VBTS tedbirlerinin birbirinden farklı olmasıdır.
                </p>
                <div className="grid gap-3">
                  {devreKesiciTurleri.map((item) => (
                    <div
                      key={item.title}
                      className="rounded-xl border border-slate-200 p-4"
                    >
                      <h3 className="font-bold text-slate-900">{item.title}</h3>
                      <p className="mt-2 text-sm leading-7 text-slate-600">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </Section>

              <Section
                id="pay-bazinda-devre-kesici"
                title="Pay Bazında Devre Kesici Ne Demek?"
              >
                <p>
                  Pay bazında devre kesici, sadece ilgili hisse senedinde çalışan
                  devre kesici türüdür. Örneğin bir hissede fiyat hareketi
                  belirlenen eşik seviyeye ulaşırsa o hisse için sürekli işlem
                  durabilir; ancak piyasanın tamamında işlem durmak zorunda
                  değildir.
                </p>
                <p>
                  KAP haber akışında görülen “işlem sırasında sürekli işleme ara
                  verilmiş, tek fiyat emir toplama başlamıştır” şeklindeki
                  bildirimler genellikle pay bazında devre kesici uygulamasına
                  işaret eder. Bildirimde emir toplama ve işlemlerin devam edeceği
                  zaman bilgisi yer alabilir.
                </p>
              </Section>

              <Section
                id="endekse-bagli-devre-kesici"
                title="Endekse Bağlı Devre Kesici Nedir?"
              >
                <p>
                  Endekse bağlı devre kesici, piyasa genelinde sert hareketlerin
                  yaşandığı durumlarda devreye girebilen daha geniş kapsamlı bir
                  mekanizmadır. Bu durumda sadece tek bir hisse değil, pay
                  piyasasının genel işlem akışı etkilenebilir.
                </p>
                <p>
                  Bu tür uygulamalarda yatırımcıların Borsa İstanbul duyurularını,
                  aracı kurum bildirimlerini ve KAP haber akışını takip etmesi
                  gerekir. Çünkü işlem durdurma, yeniden başlatma ve seans akışı
                  pay bazındaki devre kesiciden farklılık gösterebilir.
                </p>
              </Section>

              <Section id="sistem-nasil-isler" title="Devre Kesici Sistemi Nasıl İşler?">
                <p>
                  Devre kesici süreci genel olarak fiyat hareketinin eşik seviyeye
                  ulaşmasıyla başlar. Ardından sürekli işlem akışı geçici olarak
                  durur ve ilgili payda tek fiyat sürecine geçilebilir.
                </p>
                <div className="grid gap-3">
                  {surecAdimlari.map((item, index) => (
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
                id="tek-fiyat-emir-toplama"
                title="Tek Fiyat Emir Toplama Ne Anlama Gelir?"
              >
                <p>
                  Tek fiyat emir toplama, alıcı ve satıcı emirlerinin belirli bir
                  süre boyunca toplandığı ve bu emirler üzerinden tek bir fiyat
                  belirlenerek eşleştirme yapıldığı işlem yöntemidir.
                </p>
                <p>
                  Sürekli işlemde emirler anlık olarak farklı fiyat kademelerinde
                  eşleşebilirken, tek fiyat yönteminde emirler önce birikir,
                  ardından belirli kurallar çerçevesinde tek fiyat üzerinden
                  karşılaştırılır. Bu durum ani fiyat hareketlerinde piyasanın
                  nefes almasına yardımcı olur.
                </p>
                <p>
                  Yatırımcı bu aşamada aracı kurum ekranındaki emir durumu,
                  gösterge fiyat, alış-satış dengesi ve işlem saatlerini dikkatle
                  kontrol etmelidir. Gösterge fiyat kesin gerçekleşme fiyatı gibi
                  görülmemelidir.
                </p>
              </Section>

              <Section
                id="hisseyi-nasil-etkiler"
                title="Devre Kesici Hisseyi Nasıl Etkiler?"
              >
                <p>
                  Devre kesicinin hisse fiyatına etkisi her zaman aynı değildir.
                  Bazı durumlarda panik azalır ve fiyat daha dengeli hale gelir.
                  Bazı durumlarda ise haber akışı veya güçlü emir dengesizliği
                  devam ettiği için oynaklık sürebilir.
                </p>
                <p>
                  Bu nedenle devre kesici sonrası hissenin mutlaka yükseleceği
                  veya mutlaka düşeceği söylenemez. Fiyat hareketini şirketin
                  haber akışı, bilançosu, işlem hacmi, genel endeks görünümü,
                  yatırımcı ilgisi ve emir defterindeki denge belirler.
                </p>
                <div className="grid gap-3">
                  {yatirimciEtkileri.map((item) => (
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

              <Section
                id="yatirimci-ne-yapmali"
                title="Devre Kesici Geldiğinde Yatırımcı Ne Yapmalı?"
              >
                <p>
                  Devre kesici geldiğinde yatırımcının ilk yapması gereken şey
                  paniklemek değil, hareketin nedenini anlamaya çalışmaktır.
                  Hissede yeni bir KAP açıklaması var mı, bilanço açıklandı mı,
                  şirketle ilgili önemli bir haber mi geldi, yoksa hareket sadece
                  işlem hacmi ve piyasa psikolojisinden mi kaynaklanıyor?
                </p>
                <ul className="list-disc space-y-2 pl-5">
                  {dikkatEdilecekler.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </Section>

              <Section id="ornek-senaryolar" title="Devre Kesici Sonrası Örnek Senaryolar">
                <p>
                  Devre kesici haberini değerli kılan şey, yalnızca “işlem
                  durdu” bilgisini görmek değil, hareketin arkasındaki nedeni
                  ayırabilmektir. Aşağıdaki senaryolar yatırımcının devre kesici
                  sonrası hangi sorulara bakması gerektiğini özetler.
                </p>
                <div className="grid gap-3">
                  {ornekSenaryolar.map((item) => (
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

              <Section id="yanilgilar" title="Devre Kesici Hakkında Sık Yapılan Yanılgılar">
                <p>
                  Devre kesici, borsada en çok yanlış yorumlanan kavramlardan
                  biridir. Özellikle sosyal medyada bu uygulama bazen ceza, bazen
                  de kesin yükseliş veya düşüş sinyali gibi anlatılabilir. Bu
                  yaklaşım doğru değildir.
                </p>
                <ul className="list-disc space-y-2 pl-5">
                  {yanilgilar.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </Section>

              <Section
                id="vbts-farki"
                title="Devre Kesici ile VBTS Tedbirleri Arasındaki Fark"
              >
                <p>
                  Devre kesici, işlem sırasında fiyat hareketinin belirli eşiği
                  aşmasıyla çalışan geçici bir mekanizmadır. VBTS tedbirleri ise
                  belirli paylarda oynaklık, işlem düzeni veya piyasa sağlığı
                  gerekçesiyle belirli tarihler arasında uygulanan işlem
                  esaslarıdır.
                </p>
                <p>
                  VBTS kapsamında brüt takas, kredili işlem yasağı, açığa satış
                  yasağı, emir paketi tedbiri veya tek fiyat işlem yöntemi gibi
                  farklı önlemler görülebilir. Bu nedenle yatırımcı KAP
                  duyurusunda hangi uygulamanın devrede olduğunu dikkatle
                  okumalıdır.
                </p>
              </Section>

              <Section id="nereden-takip-edilir" title="Devre Kesici Nereden Takip Edilir?">
                <p>
                  Pay bazında devre kesici bildirimleri KAP haber akışında
                  görülebilir. Ayrıca aracı kurum işlem ekranları, Borsa İstanbul
                  duyuruları ve piyasa veri ekranları da devre kesici bilgisini
                  gösterebilir.
                </p>
                <p>
                  Yatırımcı sadece “devre kesici geldi” bilgisini değil,
                  işlemlerin ne zaman yeniden başlayacağını, tek fiyat emir
                  toplama sürecinin ne kadar süreceğini ve eşleştirme sonrasında
                  fiyatın nasıl oluştuğunu da takip etmelidir.
                </p>
              </Section>

              <Section id="kaynaklar" title="Kaynaklar">
                <div className="grid gap-3">
                  {kaynaklar.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block rounded-xl border border-slate-200 bg-slate-50 p-4 transition hover:border-blue-200 hover:bg-blue-50/60"
                    >
                      <h3 className="font-bold text-slate-900">{item.title}</h3>
                      <p className="mt-2 text-sm leading-7 text-slate-600">
                        {item.text}
                      </p>
                    </a>
                  ))}
                </div>
              </Section>

              <Section id="sonuc" title="Sonuç: Devre Kesici Nasıl Okunmalı?">
                <p>
                  Devre kesici, yatırımcıyı tamamen koruyan veya hissenin yönünü
                  kesin olarak belirleyen bir uygulama değildir. Temel amacı,
                  ani ve sert fiyat hareketlerinde piyasaya kısa süreli denge
                  alanı açmaktır.
                </p>
                <p>
                  Yatırımcı açısından doğru yaklaşım, devre kesiciyi tek başına
                  alım veya satım sinyali olarak görmemektir. Hissenin neden
                  sert hareket ettiğini anlamak, KAP açıklamalarını incelemek,
                  likiditeyi kontrol etmek ve işlem büyüklüğünü risk yönetimine
                  göre belirlemek gerekir.
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
                Yatırım kararları, kişisel risk-getiri tercihleri ve güncel
                veriler dikkate alınarak verilmelidir.
              </section>

              <RehberAltBolumler currentHref="/rehberler/devre-kesici-nedir" />
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
