import Link from "next/link";
import RehberAltBolumler from "@/components/RehberAltBolumler";
import type { Metadata } from "next";

const siteUrl = "https://www.hocaileborsa.com";
const title = "Brüt Takas Nedir? Brüt Takas Hisseyi Nasıl Etkiler?";
const description =
  "Brüt takas nedir, normal takastan farkı nedir, brüt takas uygulamasında hisse alım satımı nasıl yapılır ve yatırımcı açısından ne anlama gelir?";

export const metadata: Metadata = {
  title: `${title} | Hoca İle Borsa`,
  description,
  alternates: {
    canonical: `${siteUrl}/rehberler/brut-takas-nedir`,
  },
  openGraph: {
    title,
    description,
    url: `${siteUrl}/rehberler/brut-takas-nedir`,
    type: "article",
  },
};

const temelBasliklar = [
  {
    title: "Netleştirme Kaldırılır",
    text: "Normal takas sisteminde gün içindeki alış ve satışlar netleştirilebilir. Brüt takasta ise ilgili payda işlemler netleştirilmeden, alım ve satım yükümlülükleri ayrı ayrı değerlendirilir.",
  },
  {
    title: "Alım İçin Nakit Gerekir",
    text: "Brüt takasa konu payı almak isteyen yatırımcının takas yükümlülüğünü karşılayacak nakdi hesabında bulundurması gerekir. Satıştan doğan para ile aynı gün aynı payda rahatça işlem yapmak mümkün olmayabilir.",
  },
  {
    title: "Satış İçin Pay Gerekir",
    text: "Brüt takas kapsamındaki payda satış yapacak yatırımcının hesabında satacağı miktarda menkul kıymet bulunmalıdır. Bu uygulama kredili veya karşılıksız işlem riskini azaltmayı amaçlar.",
  },
  {
    title: "Likidite Azalabilir",
    text: "Brüt takas uygulaması işlem kolaylığını sınırladığı için bazı hisselerde hacim ve likidite düşebilir. Bu durum alım satım makasının açılmasına ve fiyat hareketlerinin sertleşmesine neden olabilir.",
  },
];

const normalBrutFarklari = [
  {
    title: "Normal Takas",
    text: "Gün içinde aynı payda yapılan alış ve satışlar netleştirilir. Yatırımcı çoğu durumda net fark kadar teslim yükümlülüğüyle karşılaşır.",
  },
  {
    title: "Brüt Takas",
    text: "İşlemler netleştirilmeden ayrı ayrı izlenir. Alım için nakit, satış için pay bulundurma zorunluluğu daha belirgin hale gelir.",
  },
  {
    title: "Normal İşlem Psikolojisi",
    text: "Kısa vadeli al-sat işlemleri daha kolay yapılabilir. Aynı gün içinde daha fazla işlem çevrimi oluşabilir.",
  },
  {
    title: "Brüt Takas Psikolojisi",
    text: "Hızlı al-sat zorlaşır. Spekülatif işlem iştahı azalabilir, ancak düşük likidite nedeniyle fiyat oynaklığı tamamen ortadan kalkmaz.",
  },
];

const yatirimciEtkileri = [
  {
    title: "Alım Gücü Sınırlanabilir",
    text: "Brüt takasta yatırımcı, satıştan gelen tutarı hemen aynı rahatlıkla kullanamayabilir. Bu nedenle yeni alım yapmadan önce hesabındaki kullanılabilir nakit durumunu kontrol etmelidir.",
  },
  {
    title: "Gün İçi Al-Sat Zorlaşabilir",
    text: "Normal şartlarda aynı gün içinde sık işlem yapan yatırımcılar için brüt takas daha kısıtlayıcıdır. Çünkü alım ve satış yükümlülükleri netleştirme mantığıyla hafiflemez.",
  },
  {
    title: "Hacim Düşebilir",
    text: "Tedbir nedeniyle bazı yatırımcıların işlem yapma isteği azalabilir. Bu da tahtada derinliğin zayıflamasına, alış-satış farkının açılmasına ve emirlerin daha zor gerçekleşmesine yol açabilir.",
  },
  {
    title: "Fiyat Tek Başına Tahmin Edilemez",
    text: "Brüt takas kararı hisse fiyatının kesin düşeceği veya kesin yükseleceği anlamına gelmez. Piyasa algısı, haber akışı, bilanço, şirket beklentileri ve genel endeks koşulları birlikte etkili olur.",
  },
  {
    title: "Risk Yönetimi Öne Çıkar",
    text: "Brüt takas kapsamındaki hisselerde emir büyüklüğü, likidite, fiyat aralığı ve takas tarihi daha dikkatli izlenmelidir. Ani fiyat hareketlerinde pozisyondan çıkmak zorlaşabilir.",
  },
];

const surecAdimlari = [
  {
    title: "Tedbir Kararı Açıklanır",
    text: "Brüt takas uygulaması genellikle Borsa İstanbul tarafından KAP üzerinden duyurulur. Duyuruda tedbire konu pay, başlangıç tarihi, bitiş tarihi ve uygulanacak işlem esasları belirtilir.",
  },
  {
    title: "Pay Tedbir Kapsamına Girer",
    text: "Belirlenen tarihten itibaren ilgili payda işlemler brüt takas esaslarına göre yürütülür. Tedbir süresi boyunca yatırımcıların alım ve satım yükümlülüklerini ayrıca takip etmesi gerekir.",
  },
  {
    title: "Netleştirme Yapılmaz",
    text: "Brüt takas kapsamındaki işlemler netleştirilmeden izlenir. Takas borç ve alacakları yatırımcı ve aracı kurum bazında ayrı ayrı takip edilir.",
  },
  {
    title: "Takas Sonrası Alacak Dağıtılır",
    text: "Brüt takas uygulamasında alacakların dağıtımı, takas sürecinin tamamlanması sonrasında yapılır. Bu yüzden satıştan gelen tutarın kullanım zamanı normal işlem algısından farklılaşabilir.",
  },
  {
    title: "Tedbir Süresi Biter veya Uzayabilir",
    text: "Tedbirin bitiş tarihi duyuruda yer alır. Ancak piyasa koşulları, yeni tedbir kararları veya farklı işlem esasları nedeniyle yatırımcının güncel KAP ve Borsa İstanbul duyurularını takip etmesi gerekir.",
  },
];

const dikkatEdilecekler = [
  "Brüt takas kararı tek başına alım veya satım sinyali değildir.",
  "Hissenin neden tedbir kapsamına alındığı ve son dönemdeki fiyat-hacim hareketi incelenmelidir.",
  "KAP duyurusundaki başlangıç ve bitiş tarihleri mutlaka kontrol edilmelidir.",
  "Alım yapmadan önce kullanılabilir nakit, satış yapmadan önce eldeki pay miktarı kontrol edilmelidir.",
  "Satıştan gelen tutarın ne zaman kullanılabileceği aracı kurum ekranından ayrıca takip edilmelidir.",
  "Likidite düşükse emirler kademeli ve kontrollü girilmelidir.",
  "Brüt takas kapsamındaki hisselerde ani fiyat hareketleri daha sert yaşanabilir.",
  "Sadece sosyal medya yorumlarına göre işlem yapılmamalı; şirketin temel verileri, haber akışı ve bilançosu birlikte değerlendirilmelidir.",
];

const yanilgilar = [
  "Brüt takas gelen hisse kesin düşer düşüncesi doğru değildir.",
  "Brüt takas gelen hisse kesin yükselir düşüncesi de doğru değildir.",
  "Tedbirin varlığı şirketin mutlaka kötü olduğu anlamına gelmez.",
  "Tedbirin bitmesi hissenin otomatik olarak yükseleceği anlamına gelmez.",
  "Brüt takas uygulaması fiyat oynaklığını tamamen ortadan kaldırmaz.",
  "Brüt takas, yatırımcıyı tüm risklerden koruyan bir güvence değildir.",
];

const ornekSenaryolar = [
  {
    title: "Hisse Sattım, Aynı Gün Brüt Takastaki Hisseyi Alabilir miyim?",
    text: "Normal takasta satıştan gelen alacak bazı işlemlerde kullanılabilir görünebilir. Brüt takasta ise alım için nakit yükümlülüğü daha sıkı takip edilir. Bu yüzden toplam bakiye yerine aracı kurum ekranındaki gerçek kullanılabilir nakit kontrol edilmelidir.",
  },
  {
    title: "Brüt Takastaki Hissede Gün İçi Al-Sat Yapılır mı?",
    text: "Teorik olarak emir girilebilir; ancak netleştirme kaldırıldığı için aynı gün işlem çevirmek normal takasa göre zordur. Yatırımcı alım için nakdi, satış için payı ayrı ayrı karşılayabilmelidir.",
  },
  {
    title: "Tedbir Bitince Hisse Otomatik Yükselir mi?",
    text: "Hayır. Tedbirin bitmesi sadece işlem koşullarının normalleşmesi anlamına gelebilir. Fiyatı şirket haberleri, bilanço, likidite, piyasa algısı ve arz-talep dengesi belirlemeye devam eder.",
  },
  {
    title: "Likidite Azalırsa Ne Olur?",
    text: "Alış ve satış kademeleri arasındaki fark açılabilir. Bu durumda yatırımcı istediği fiyattan işlem yapmakta zorlanabilir ve büyük emirler fiyatı daha sert hareket ettirebilir.",
  },
];

const kaynaklar = [
  {
    title: "Borsa İstanbul Pay Piyasası İşleyişi",
    href: "https://www.borsaistanbul.com/piyasalar/pay-piyasasi/piyasa-isleyisi",
    text: "Brüt takas, netleştirme, VBTS tedbirleri ve pay piyasası işlem esasları hakkında resmi açıklamalar.",
  },
  {
    title: "MKK Brüt Takas Uygulama Esasları",
    href: "https://www.mkk.com.tr/tr-tr/Genel-Mektuplar/Sayfalar/Brut-Takas-Uygulama-Esaslari.aspx",
    text: "Brüt takas işlemlerinde alım satım bilgilerinin netleştirilmeden bildirilmesi ve alacak dağıtımı süreçlerine ilişkin uygulama esasları.",
  },
];

const faq = [
  {
    question: "Brüt takas nedir?",
    answer:
      "Brüt takas, belirli paylarda netleştirme uygulamasının kaldırılması ve alım-satım yükümlülüklerinin ayrı ayrı takip edilmesidir. Bu uygulamada yatırımcının alım için nakit, satış için pay bulundurması gerekir.",
  },
  {
    question: "Brüt takas hisseyi nasıl etkiler?",
    answer:
      "Brüt takas genellikle işlem kolaylığını azaltır ve likiditeyi düşürebilir. Ancak hisse fiyatının kesin düşeceği veya kesin yükseleceği anlamına gelmez. Fiyatı şirket haberleri, bilanço, piyasa algısı ve arz-talep dengesi belirler.",
  },
  {
    question: "Brüt takasta aynı gün al-sat yapılır mı?",
    answer:
      "Brüt takas kapsamındaki paylarda aynı gün işlem yapmak normal takasa göre daha kısıtlayıcıdır. Netleştirme kaldırıldığı için yatırımcının nakit ve pay yükümlülüklerini ayrı ayrı karşılaması gerekir.",
  },
  {
    question: "Brüt takas tedbiri ne kadar sürer?",
    answer:
      "VBTS kapsamında uygulanan brüt takas tedbirleri genellikle duyuruda belirtilen başlangıç ve bitiş tarihleri arasında geçerlidir. Yatırımcı sürenin kesin bilgisini KAP ve Borsa İstanbul duyurularından takip etmelidir.",
  },
  {
    question: "Brüt takas kötü bir şey mi?",
    answer:
      "Brüt takas tek başına iyi veya kötü olarak yorumlanmamalıdır. Amaç aşırı oynaklık ve sağlıksız işlem koşullarına karşı işlem esaslarını sıkılaştırmaktır. Yatırımcı açısından ise likidite ve işlem esnekliği azalabileceği için dikkat gerektirir.",
  },
  {
    question: "Brüt takasta satıştan gelen para ne zaman kullanılır?",
    answer:
      "Brüt takas uygulamasında satıştan doğan alacakların kullanımı normal işlem algısından farklılaşabilir. Takas süreci ve aracı kurum uygulaması dikkate alınmalı, kesin kullanılabilir bakiye aracı kurum ekranından kontrol edilmelidir.",
  },
  {
    question: "Brüt takas kararı nereden takip edilir?",
    answer:
      "Brüt takas kararları KAP duyuruları, Borsa İstanbul tedbir listeleri ve aracı kurum bilgilendirmeleri üzerinden takip edilebilir. Duyurularda tedbirin kapsamı, başlangıç ve bitiş tarihi yer alır.",
  },
];

const tableOfContents = [
  { href: "#brut-takas-nedir", label: "Brüt Takas Nedir?" },
  { href: "#normal-takastan-farki", label: "Normal Takastan Farkı" },
  { href: "#neden-uygulanir", label: "Neden Uygulanır?" },
  { href: "#yatirimciya-etkisi", label: "Yatırımcıya Etkisi" },
  { href: "#sistem-nasil-isler", label: "Sistem Nasıl İşler?" },
  { href: "#hisseyi-nasil-etkiler", label: "Hisseyi Nasıl Etkiler?" },
  { href: "#dikkat-edilecekler", label: "Dikkat Edilecekler" },
  { href: "#ornek-senaryolar", label: "Örnek Senaryolar" },
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

export default function BrutTakasNedirPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: title,
        description,
        mainEntityOfPage: `${siteUrl}/rehberler/brut-takas-nedir`,
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
            name: "Brüt Takas",
            item: `${siteUrl}/rehberler/brut-takas-nedir`,
          },
        ],
      },
    ],
  };

  return (
    <main className="min-h-screen bg-[#f8fafc]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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
          <span className="font-medium text-slate-700">Brüt Takas Nedir?</span>
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
                Brüt takas, Borsa İstanbul&apos;da bazı paylarda normal
                netleştirme sisteminin kaldırılması ve alım-satım
                yükümlülüklerinin ayrı ayrı takip edilmesi anlamına gelir.
                Yatırımcı açısından bu uygulama özellikle nakit yönetimi,
                satıştan gelen tutarın kullanımı, likidite ve işlem stratejisi
                bakımından önemlidir.
              </p>
            </header>

            <div className="mt-8 space-y-10">
              <Section id="brut-takas-nedir" title="Brüt Takas Nedir?">
                <p>
                  Brüt takas, belirli paylarda alış ve satış işlemlerinin
                  netleştirilmeden izlenmesidir. Normal işlem düzeninde aynı
                  payda gün içinde yapılan alış ve satışlar netleştirilerek
                  yatırımcının veya aracı kurumun takas yükümlülüğü net bakiye
                  üzerinden hesaplanabilir.
                </p>
                <p>
                  Brüt takas uygulamasında ise bu kolaylık sınırlandırılır.
                  Alım yapan yatırımcının alımı karşılayacak nakdi, satış yapan
                  yatırımcının ise satışı karşılayacak payı hesabında bulundurması
                  gerekir.
                </p>
                <p>
                  Bu nedenle brüt takas, özellikle kısa vadeli al-sat yapan
                  yatırımcılar için işlem esnekliğini azaltan bir uygulamadır.
                  Amaç, aşırı oynaklık oluşan veya sağlıklı işlem düzeni açısından
                  tedbir gerektiren paylarda işlem disiplinini artırmaktır.
                </p>
              </Section>

              <Section
                id="normal-takastan-farki"
                title="Brüt Takas ile Normal Takas Arasındaki Fark Nedir?"
              >
                <p>
                  Brüt takası anlamanın en kolay yolu normal takasla
                  karşılaştırmaktır. Normal takasta işlemler netleştirme
                  mantığıyla takip edilirken, brüt takasta her yükümlülük daha
                  ayrı ve sıkı şekilde değerlendirilir.
                </p>
                <div className="grid gap-3 md:grid-cols-2">
                  {normalBrutFarklari.map((item) => (
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
                <p>
                  Bu fark, yatırımcının aynı gün içinde yaptığı işlemlerde daha
                  dikkatli hareket etmesini gerektirir. Çünkü brüt takas
                  kapsamındaki bir payda satıştan doğan alacağın kullanımı,
                  normal işlem düzenindeki kadar esnek olmayabilir.
                </p>
              </Section>

              <Section id="neden-uygulanir" title="Brüt Takas Neden Uygulanır?">
                <p>
                  Brüt takas çoğunlukla aşırı fiyat hareketleri, yüksek oynaklık,
                  sağlıksız işlem koşulları veya yatırımcıyı korumaya yönelik
                  tedbir ihtiyacı nedeniyle uygulanır. Borsa İstanbul&apos;da
                  Volatilite Bazlı Tedbir Sistemi kapsamında farklı seviyelerde
                  tedbirler devreye alınabilir.
                </p>
                <p>
                  Bu tedbirler arasında açığa satış ve kredili işlem yasağı,
                  brüt takas, emir paketi tedbiri, tek fiyat yöntemi ve internet
                  emir yasağı gibi uygulamalar bulunabilir. Brüt takas, bu tedbir
                  yapısı içinde işlem disiplinini artıran önemli başlıklardan
                  biridir.
                </p>
                <div className="grid gap-3">
                  {temelBasliklar.map((item) => (
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
                id="yatirimciya-etkisi"
                title="Brüt Takas Yatırımcı Açısından Ne Anlama Gelir?"
              >
                <p>
                  Brüt takas yatırımcı için öncelikle işlem kolaylığının
                  azalması anlamına gelir. Normalde aynı gün içinde hisse satıp
                  başka bir işlem yapmak daha kolay algılanırken, brüt takas
                  kapsamındaki paylarda nakit ve pay yükümlülükleri daha dikkatli
                  takip edilmelidir.
                </p>
                <div className="grid gap-3">
                  {yatirimciEtkileri.map((item, index) => (
                    <div
                      key={item.title}
                      className="rounded-xl border border-slate-200 bg-slate-50 p-4"
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

              <Section id="sistem-nasil-isler" title="Brüt Takas Sistemi Nasıl İşler?">
                <p>
                  Brüt takas süreci genellikle KAP üzerinden yapılan tedbir
                  duyurusu ile başlar. Duyuruda ilgili payın hangi tarihler
                  arasında brüt takas kapsamında işlem göreceği belirtilir.
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
                id="hisseyi-nasil-etkiler"
                title="Brüt Takas Hisseyi Nasıl Etkiler?"
              >
                <p>
                  Brüt takas kararından sonra ilgili hissede işlem hacmi
                  azalabilir. Çünkü yatırımcıların aynı gün içinde daha rahat
                  işlem yapabilme imkanı sınırlanır. Hacmin azalması ise emir
                  defterinde derinliğin zayıflamasına neden olabilir.
                </p>
                <p>
                  Likidite zayıfladığında alış ve satış kademeleri arasındaki
                  fark açılabilir. Bu durum yatırımcının istediği fiyattan işlem
                  yapmasını zorlaştırabilir. Özellikle küçük ve sığ tahtalarda
                  fiyat hareketleri daha sert görülebilir.
                </p>
                <p>
                  Buna rağmen brüt takas uygulaması hisse fiyatının kesin olarak
                  düşeceği anlamına gelmez. Bazı hisselerde tedbir sonrası satış
                  baskısı artabilirken, bazı hisselerde sınırlı dolaşım ve haber
                  akışı nedeniyle fiyat hareketi farklı yönde gelişebilir.
                  Yatırımcı bu nedenle yalnızca tedbir kararına değil, şirketin
                  temel verilerine ve güncel gelişmelere de bakmalıdır.
                </p>
              </Section>

              <Section
                id="brut-takas-ve-vbts"
                title="Brüt Takas ve VBTS İlişkisi"
              >
                <p>
                  VBTS, yani Volatilite Bazlı Tedbir Sistemi, pay piyasasında
                  aşırı oynaklık ve sağlıksız işlem koşullarına karşı devreye
                  alınan tedbir mekanizmasıdır. Brüt takas bu sistem içinde
                  uygulanabilen tedbirlerden biridir.
                </p>
                <p>
                  Bir payda önce açığa satış ve kredili işlem yasağı gibi daha
                  düşük seviyeli tedbirler uygulanabilir. Koşullar devam ederse
                  brüt takas, emir paketi, tek fiyat veya internet emir yasağı
                  gibi daha sıkı tedbirler gündeme gelebilir.
                </p>
                <p>
                  Bu yüzden yatırımcı, brüt takas kararını sadece tek başına
                  değil, ilgili payda başka hangi tedbirlerin uygulandığıyla
                  birlikte okumalıdır.
                </p>
              </Section>

              <Section
                id="dikkat-edilecekler"
                title="Brüt Takas Olan Hissede Nelere Dikkat Edilmeli?"
              >
                <ul className="list-disc space-y-2 pl-5">
                  {dikkatEdilecekler.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </Section>

              <Section id="ornek-senaryolar" title="Brüt Takas İçin Örnek Yatırımcı Senaryoları">
                <p>
                  Brüt takasın yatırımcı açısından gerçek etkisi çoğu zaman
                  işlem ekranında ortaya çıkar. Aşağıdaki örnekler, nakit,
                  pay ve takas yükümlülüğünü daha somut okumaya yardımcı olur.
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

              <Section id="yanilgilar" title="Brüt Takas Hakkında Yanlış Bilinenler">
                <p>
                  Brüt takas hakkında yatırımcılar arasında bazı yanlış
                  yorumlar sık görülür. Bu yorumlar tek başına işlem kararına
                  dönüştüğünde risk artabilir.
                </p>
                <ul className="list-disc space-y-2 pl-5">
                  {yanilgilar.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </Section>

              <Section id="ornek" title="Basit Örnekle Brüt Takas">
                <p>
                  Normal takasta bir yatırımcı aynı gün içinde bir payda hem
                  alım hem satış yaptığında net bakiye üzerinden değerlendirme
                  yapılabilir. Örneğin gün içinde 1.000 lot alıp 700 lot satan
                  yatırımcının net yükümlülüğü farklı şekilde hesaplanabilir.
                </p>
                <p>
                  Brüt takasta ise aynı mantık geçerli değildir. Alış ve satış
                  işlemleri ayrı ayrı dikkate alınır. Bu nedenle yatırımcının
                  alış için gerekli nakdi, satış için gerekli payı ayrıca
                  karşılaması gerekir.
                </p>
                <p>
                  Bu örnek, brüt takasın neden özellikle günlük işlem yapan
                  yatırımcılar için önemli olduğunu gösterir. Sistem yatırımcıyı
                  işlem yapmaktan tamamen alıkoymaz; ancak işlem yaparken nakit,
                  pay ve takas yükümlülüğünü daha disiplinli takip etmeyi
                  zorunlu hale getirir.
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
                      className="rounded-xl border border-slate-200 bg-slate-50 p-4 transition hover:border-blue-200 hover:bg-blue-50"
                    >
                      <h3 className="font-bold text-slate-900">{item.title}</h3>
                      <p className="mt-2 text-sm leading-7 text-slate-600">
                        {item.text}
                      </p>
                    </a>
                  ))}
                </div>
              </Section>

              <Section id="sonuc" title="Sonuç: Brüt Takas Nasıl Okunmalı?">
                <p>
                  Brüt takas, yatırımcı açısından mutlaka dikkat edilmesi gereken
                  bir işlem tedbiridir. Ancak bu tedbir tek başına hissenin iyi
                  veya kötü olduğu anlamına gelmez.
                </p>
                <p>
                  Doğru yaklaşım; KAP duyurusunu okumak, tedbirin başlangıç ve
                  bitiş tarihlerini takip etmek, hissenin likiditesini
                  değerlendirmek, şirketin temel verilerini incelemek ve işlem
                  büyüklüğünü buna göre belirlemektir.
                </p>
                <p>
                  Brüt takas olan hisselerde yatırımcının en önemli önceliği,
                  hızlı karar vermek değil, nakit ve pay yükümlülüklerini doğru
                  yönetmektir.
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

              <RehberAltBolumler currentHref="/rehberler/brut-takas-nedir" />
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
