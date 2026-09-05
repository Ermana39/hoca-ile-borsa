import { serializeJsonLd } from "@/lib/json-ld";
import Link from "@/components/NoPrefetchLink";
import RehberAltBolumler from "@/components/RehberAltBolumler";
import type { Metadata } from "next";

const siteUrl = "https://www.hocaileborsa.com";
const title =
  "Sermaye Artırımı Nedir? Bedelli ve Bedelsiz Sermaye Artırımı Rehberi";
const description =
  "Sermaye artırımı nedir, bedelli ve bedelsiz sermaye artırımı yatırımcı için ne anlama gelir? Rüçhan hakkı, tahsisli sermaye artırımı, teorik fiyat ve süreçler.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: `${siteUrl}/rehberler/sermaye-artirimlari`,
  },
  openGraph: {
    title,
    description,
    url: `${siteUrl}/rehberler/sermaye-artirimlari`,
    type: "article",
  },
};

const sermayeTurleri = [
  {
    title: "Bedelli Sermaye Artırımı",
    text: "Şirketin mevcut ortaklarından veya yeni yatırımcılardan nakit karşılığı yeni pay ihracı yaparak sermayesini artırmasıdır. Şirkete nakit girişi olur, yatırımcı rüçhan hakkını kullanmak isterse ödeme yapar.",
  },
  {
    title: "Bedelsiz Sermaye Artırımı",
    text: "Şirketin iç kaynaklarını sermayeye ekleyerek yatırımcıdan para almadan yeni pay vermesidir. Hisse adedi artar, fiyat teorik olarak aynı oranda düzeltilir.",
  },
  {
    title: "Bedelli ve Bedelsiz Birlikte Artırım",
    text: "Şirket sermayesinin bir kısmını nakit karşılığı, bir kısmını ise iç kaynaklardan artırabilir. Bu durumda yatırımcı hem rüçhan hakkı sürecini hem de bedelsiz pay alma sürecini birlikte takip eder.",
  },
  {
    title: "Tahsisli Sermaye Artırımı",
    text: "Yeni çıkarılan payların tüm ortaklara değil, belirli kişi veya kurumlara satılmasıdır. Bu işlemde mevcut ortakların rüçhan hakkı kısıtlanabilir ve ortaklık oranlarında sulanma etkisi oluşabilir.",
  },
  {
    title: "İç Kaynaklardan Sermaye Artırımı",
    text: "Emisyon primi, geçmiş yıl karları, yeniden değerleme artışları, yedek akçeler veya sermaye düzeltmesi olumlu farkları gibi kaynakların sermayeye eklenmesiyle yapılır.",
  },
  {
    title: "Kar Payından Bedelsiz Sermaye Artırımı",
    text: "Şirketin dağıtılabilir karını nakit temettü olarak ödemek yerine sermayeye ekleyerek ortaklara bedelsiz pay vermesidir. Yatırımcı para almaz, pay adedi artar.",
  },
];

const bedelliBedelsizFarklari = [
  {
    title: "Şirkete Nakit Girişi",
    bedelli: "Şirkete yeni nakit girişi sağlar.",
    bedelsiz: "Şirkete dışarıdan yeni nakit girişi sağlamaz.",
  },
  {
    title: "Yatırımcıdan Para Çıkışı",
    bedelli: "Yatırımcı rüçhan hakkını kullanırsa ödeme yapar.",
    bedelsiz: "Yatırımcıdan herhangi bir ödeme alınmaz.",
  },
  {
    title: "Ortaklık Oranı",
    bedelli: "Rüçhan hakkı kullanılmazsa ortaklık oranı azalabilir.",
    bedelsiz: "Tüm ortaklara oranlı pay verildiği için ortaklık oranı teorik olarak değişmez.",
  },
  {
    title: "Şirket Açısından Anlamı",
    bedelli: "Finansman, borç azaltma, yatırım veya işletme sermayesi için kaynak yaratabilir.",
    bedelsiz: "Özkaynak kalemleri arasında aktarım yaparak sermaye yapısını düzenler.",
  },
  {
    title: "Fiyat Etkisi",
    bedelli: "Kullanım fiyatı ve artırım oranına göre teorik fiyat hesaplanır.",
    bedelsiz: "Pay sayısı artar, fiyat bedelsiz oranına göre teorik olarak bölünür.",
  },
];

const surecAdimlari = [
  {
    title: "Yönetim Kurulu Kararı",
    text: "Şirket yönetim kurulu sermaye artırımı kararı alır. Artırımın türü, oranı, mevcut sermaye, artırılacak tutar, rüçhan hakkı durumu ve fon kullanım amacı KAP açıklamasında yer alır.",
  },
  {
    title: "Fon Kullanım Raporu",
    text: "Bedelli sermaye artırımlarında şirketin elde edeceği kaynağı nerede kullanacağı açıklanır. Borç kapama, yatırım harcaması, kapasite artışı veya işletme sermayesi gibi başlıklar bu raporda görülebilir.",
  },
  {
    title: "SPK Başvurusu",
    text: "Halka açık şirketlerde sermaye artırımı süreci Sermaye Piyasası Kurulu düzenlemelerine tabidir. Şirket gerekli belgelerle SPK'ya başvuru yapar.",
  },
  {
    title: "SPK Onayı",
    text: "SPK onayı sonrasında şirket yeni KAP açıklaması yapar. Yönetim kurulu kararı ile SPK onayı aynı aşama değildir; karar alınmış olsa bile süreç henüz kesinleşmemiş olabilir.",
  },
  {
    title: "Rüçhan Hakkı Kullanım Tarihleri",
    text: "Bedelli sermaye artırımlarında rüçhan hakkı kullanım başlangıç ve bitiş tarihleri ilan edilir. Bu tarihler yatırımcı için kritik öneme sahiptir.",
  },
  {
    title: "Rüçhan Kupon Pazarı",
    text: "Rüçhan hakları belirli süreyle Borsa İstanbul'da işlem görebilir. Yatırımcı hakkını kullanabilir, satabilir veya piyasadan rüçhan kuponu alabilir.",
  },
  {
    title: "Kullanılmayan Payların Satışı",
    text: "Rüçhan haklarının kullanılmasından sonra kalan paylar varsa, tasarruf sahiplerine satış duyurusunda belirtilen tarihlerde satılabilir.",
  },
  {
    title: "Yeni Payların Hesaplara Geçmesi",
    text: "Süreç tamamlandıktan sonra bedelliye katılan veya bedelsiz pay alma hakkı bulunan yatırımcıların yeni payları hesaplarına kaydi olarak yansır.",
  },
  {
    title: "Bölünme Sonrası Teorik Fiyat",
    text: "Sermaye artırımı sonrası hisse fiyatında teorik düzeltme yapılabilir. Ancak gerçek piyasa fiyatı arz-talep dengesine göre oluşur.",
  },
];

const yatirimciKontrolListesi = [
  "Sermaye artırımının bedelli mi, bedelsiz mi, tahsisli mi yoksa karma yapıda mı olduğu kontrol edilmelidir.",
  "Bedelli sermaye artırımında rüçhan hakkı kullanım fiyatı ve kullanım tarihleri takip edilmelidir.",
  "Şirketin fon kullanım raporu detaylı okunmalıdır.",
  "Bedelli sonrası şirkete ne kadar nakit gireceği ve bu nakdin nerede kullanılacağı incelenmelidir.",
  "Hakim ortakların sermaye artırımına katılım niyeti değerlendirilmelidir.",
  "Bedelsiz sermaye artırımında kaynağın hangi özkaynak kalemlerinden karşılandığına bakılmalıdır.",
  "Bölünme sonrası teorik fiyatın kesin piyasa fiyatı olmadığı unutulmamalıdır.",
  "Şirketin bilançosu, borçluluğu, karlılığı, nakit akışı ve sektör görünümü ayrıca analiz edilmelidir.",
];

const sikYapilanHatalar = [
  "Bedelsiz sermaye artırımını doğrudan bedava kazanç gibi görmek.",
  "Bedelli sermaye artırımında rüçhan hakkı kullanım süresini kaçırmak.",
  "Rüçhan hakkını kullanmayıp satmadan bekleyerek hak kaybı yaşamak.",
  "Sadece sermaye artırım oranına bakarak karar vermek.",
  "Teorik fiyatı kesin piyasa fiyatı gibi yorumlamak.",
  "Şirketin fon kullanım amacını ve bilanço durumunu incelemeden işlem yapmak.",
  "Tahsisli sermaye artırımında payların kime, hangi fiyatla ve hangi gerekçeyle verildiğine bakmamak.",
];

const ornekHesaplamalar = [
  {
    title: "%100 Bedelsiz Örneği",
    text: "Yatırımcının 100 lot hissesi varsa %100 bedelsiz sonrası lot sayısı 200'e çıkar. Hisse fiyatı teorik olarak yarıya düşer. Toplam portföy değeri işlem anında teorik olarak değişmez; piyasa fiyatı sonrasında arz-talebe göre oluşur.",
  },
  {
    title: "%100 Bedelli ve 1 TL Kullanım Fiyatı",
    text: "Hisse fiyatı 20 TL iken %100 bedelli ve 1 TL kullanım fiyatı varsa teorik fiyat yaklaşık 10,50 TL olur. Yatırımcı yeni pay almak için ödeme yapar; toplam maliyet eski paylar ve yeni yatırılan tutarla birlikte hesaplanır.",
  },
  {
    title: "Bedelliye Katılmama Durumu",
    text: "Yatırımcı rüçhan hakkını kullanmaz ve satmazsa ortaklık oranı azalabilir. Rüçhan kuponu işlem görüyorsa satmak, hakkın tamamen boşa gitmesini önleyebilir.",
  },
  {
    title: "Tahsisli Artırım Senaryosu",
    text: "Yeni paylar belirli yatırımcıya satılıyorsa satış fiyatı, alıcının kim olduğu ve rüçhan hakkının neden kısıtlandığı incelenmelidir. Mevcut ortakların pay oranı bu işlemden etkilenebilir.",
  },
];

const kararMatrisi = [
  {
    title: "Bedelli Daha Olumlu Okunabilir",
    text: "Fon yeni yatırım, kapasite artışı, verimli büyüme veya yüksek maliyetli borçların azaltılması için kullanılacaksa ve hakim ortaklar artırıma katılıyorsa daha destekleyici yorumlanabilir.",
  },
  {
    title: "Bedelli Daha Riskli Okunabilir",
    text: "Şirket sürekli zarar ediyor, faaliyet nakit akışı zayıf, borç baskısı yüksek ve kaynak sadece günü kurtarmak için isteniyorsa yatırımcı daha temkinli olmalıdır.",
  },
  {
    title: "Bedelsiz Daha Anlamlı Okunabilir",
    text: "Şirket güçlü özkaynak, düzenli karlılık ve büyüme hikayesiyle bedelsiz yapıyorsa piyasa ilgisi artabilir. Yine de bedelsiz tek başına şirket değerini artırmaz.",
  },
  {
    title: "Bedelsiz Yanlış Yorumlanabilir",
    text: "Yatırımcı yalnızca lot sayısı artıyor diye kazanç oluştuğunu sanmamalıdır. Fiyat teorik olarak düzeltilir ve toplam değer piyasa koşullarına bağlıdır.",
  },
];

const faq = [
  {
    question: "Sermaye artırımı nedir?",
    answer:
      "Sermaye artırımı, şirketin mevcut sermayesini yükseltmesidir. Bu işlem nakit karşılığı yapılırsa bedelli, iç kaynaklardan yapılırsa bedelsiz sermaye artırımı olarak adlandırılır.",
  },
  {
    question: "Bedelli sermaye artırımı nedir?",
    answer:
      "Bedelli sermaye artırımı, şirketin yeni pay ihraç ederek yatırımcılardan nakit kaynak toplaması ve sermayesini artırmasıdır. Mevcut ortaklar genellikle rüçhan hakkı ile bu artırıma katılabilir.",
  },
  {
    question: "Bedelsiz sermaye artırımı nedir?",
    answer:
      "Bedelsiz sermaye artırımı, şirketin iç kaynaklarını sermayeye ekleyerek yatırımcıdan para almadan yeni pay vermesidir. Hisse adedi artar ancak fiyat teorik olarak aynı oranda düşer.",
  },
  {
    question: "Rüçhan hakkı nedir?",
    answer:
      "Rüçhan hakkı, mevcut ortakların bedelli sermaye artırımında yeni çıkarılacak payları öncelikli alma hakkıdır. Yatırımcı bu hakkı kullanabilir, satabilir veya işlem yapmazsa hak kaybı yaşayabilir.",
  },
  {
    question: "Bedelli sermaye artırımına katılmazsam ne olur?",
    answer:
      "Rüçhan hakkınızı kullanmaz ve satmazsanız yeni pay alma hakkınız sona erebilir. Bu durumda şirketin toplam pay sayısı artarken sizin pay sayınız değişmez ve ortaklık oranınız azalabilir.",
  },
  {
    question: "Bedelsiz sermaye artırımı yatırımcıya para kazandırır mı?",
    answer:
      "Bedelsiz sermaye artırımı doğrudan para kazandırmaz. Yatırımcının pay adedi artar, ancak hisse fiyatı teorik olarak düşer. Toplam portföy değeri teorik olarak değişmez.",
  },
  {
    question: "Sermaye artırımı sonrası maliyet düşer mi?",
    answer:
      "Bedelsiz sermaye artırımında lot sayısı arttığı için ortalama maliyet teorik olarak düşer. Bedelli sermaye artırımında ise yeni para yatırıldığı için maliyet yeni alınan paylar ve kullanım fiyatına göre yeniden hesaplanır.",
  },
  {
    question: "Tahsisli sermaye artırımı ne demektir?",
    answer:
      "Tahsisli sermaye artırımı, yeni payların tüm ortaklara değil belirli kişi veya kurumlara satılmasıdır. Bu işlemde rüçhan hakkı kısıtlanabilir ve mevcut ortakların ortaklık oranı azalabilir.",
  },
  {
    question: "Sermaye artırımı yatırım tavsiyesi midir?",
    answer:
      "Hayır. Sermaye artırımı tek başına yatırım tavsiyesi değildir. Şirketin bilançosu, fon kullanım planı, karlılığı, borçluluğu ve piyasa koşulları birlikte değerlendirilmelidir.",
  },
];

const tableOfContents = [
  { href: "#sermaye-artirimi-nedir", label: "Sermaye Artırımı Nedir?" },
  { href: "#turleri", label: "Sermaye Artırımı Türleri" },
  { href: "#bedelli", label: "Bedelli Sermaye Artırımı" },
  { href: "#ruchan-hakki", label: "Rüçhan Hakkı" },
  { href: "#bedelsiz", label: "Bedelsiz Sermaye Artırımı" },
  { href: "#farklar", label: "Bedelli - Bedelsiz Farkı" },
  { href: "#tahsisli", label: "Tahsisli Sermaye Artırımı" },
  { href: "#surec", label: "Süreç Nasıl İlerler?" },
  { href: "#yatirimci", label: "Yatırımcı Açısından Anlamı" },
  { href: "#ornek-hesaplamalar", label: "Örnek Hesaplamalar" },
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

export default function SermayeArtirimlariPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: title,
        description,
        mainEntityOfPage: `${siteUrl}/rehberler/sermaye-artirimlari`,
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
            name: "Sermaye Artırımları",
            item: `${siteUrl}/rehberler/sermaye-artirimlari`,
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
          <span className="font-medium text-slate-700">Sermaye Artırımları</span>
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
                Sermaye artırımı, bir şirketin mevcut sermayesini yükseltmesi
                anlamına gelir. Borsa İstanbul&apos;da işlem gören şirketlerde bu
                süreç; pay sayısını, teorik fiyatı, yatırımcının ortaklık
                oranını ve bazı durumlarda şirketin nakit yapısını doğrudan
                etkileyebilir.
              </p>
            </header>

            <div className="mt-8 space-y-10">
              <Section id="sermaye-artirimi-nedir" title="Sermaye Artırımı Nedir?">
                <p>
                  Sermaye artırımı, şirketin esas sermayesini veya çıkarılmış
                  sermayesini yükseltmesidir. Şirketler sermaye artırımı yaparak
                  bilançolarında yer alan sermaye kalemini büyütür. Bu işlem
                  farklı yöntemlerle yapılabilir.
                </p>
                <p>
                  Bir şirket sermayesini artırırken ya ortaklarından yeni nakit
                  kaynak toplar ya da kendi iç kaynaklarını sermayeye ekler.
                  Bedelli sermaye artırımında şirkete nakit girişi olur.
                  Bedelsiz sermaye artırımında ise yatırımcıdan para alınmaz;
                  şirketin iç kaynakları sermayeye aktarılır.
                </p>
                <p>
                  Sermaye artırımı şirketin büyüme planları, borç azaltma
                  ihtiyacı, işletme sermayesi gereksinimi, yatırım finansmanı,
                  bilanço yapısını güçlendirme isteği veya özkaynak kalemlerini
                  düzenleme amacıyla yapılabilir.
                </p>
                <p>
                  Yatırımcı açısından önemli olan nokta şudur: Her sermaye
                  artırımı olumlu ya da olumsuz olarak tek başına yorumlanamaz.
                  Artırımın türü, oranı, kullanım amacı, şirketin finansal durumu
                  ve piyasa koşulları birlikte değerlendirilmelidir.
                </p>
              </Section>

              <Section id="turleri" title="Sermaye Artırımı Türleri Nelerdir?">
                <p>
                  Borsada yatırımcıların en sık karşılaştığı sermaye artırımı
                  türleri bedelli, bedelsiz, tahsisli ve karma sermaye
                  artırımlarıdır. Her türün yatırımcıya ve şirkete etkisi
                  farklıdır.
                </p>
                <div className="grid gap-3">
                  {sermayeTurleri.map((item) => (
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

              <Section id="bedelli" title="Bedelli Sermaye Artırımı Nedir?">
                <p>
                  Bedelli sermaye artırımı, şirketin mevcut ortaklarından veya
                  yeni yatırımcılardan nakit karşılığı yeni pay ihracı yaparak
                  sermayesini artırmasıdır. Bu işlemde şirket yeni hisse ihraç
                  eder ve çoğu durumda mevcut ortaklara sahip oldukları pay
                  oranında yeni pay alma hakkı tanınır.
                </p>
                <p>
                  Bedelli sermaye artırımı sonucunda şirkete nakit para girer.
                  Şirket bu nakdi borç kapatmak, yeni yatırım yapmak, işletme
                  sermayesini güçlendirmek, finansman giderlerini azaltmak veya
                  büyüme projelerini desteklemek için kullanabilir.
                </p>
                <p>
                  Yatırımcı açısından bedelli sermaye artırımı yeni para koyma
                  gerektirebilir. Yatırımcı rüçhan hakkını kullanırsa şirketteki
                  ortaklık oranını korur. Rüçhan hakkını kullanmaz ve satmazsa
                  ortaklık oranı azalabilir.
                </p>
                <p>
                  Bu nedenle bedelli sermaye artırımı açıklaması geldiğinde
                  yatırımcının sadece artırım oranına değil; şirketin neden
                  bedelli yaptığına, elde edilecek fonu nerede kullanacağına,
                  borçluluk yapısına ve hakim ortakların katılım niyetine de
                  bakması gerekir.
                </p>
              </Section>

              <Section id="ruchan-hakki" title="Rüçhan Hakkı Nedir?">
                <p>
                  Rüçhan hakkı, mevcut ortakların bedelli sermaye artırımında
                  yeni çıkarılacak payları öncelikli alma hakkıdır. Bu hak
                  sayesinde yatırımcı, şirketteki ortaklık oranını koruma imkanı
                  bulur.
                </p>
                <p>
                  Şirket bedelli sermaye artırımı yaptığında mevcut pay
                  sahiplerine genellikle sahip oldukları hisse oranında rüçhan
                  hakkı tanımlanır. Bu hak yatırımcının hesabında ayrı bir kupon
                  veya geçici işlem sırası olarak görünebilir.
                </p>
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <h3 className="font-bold text-slate-900">
                    Yatırımcının Rüçhan Hakkında 3 Seçeneği Vardır
                  </h3>
                  <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-600">
                    <li>
                      Rüçhan hakkını kullanarak belirlenen kullanım fiyatından
                      yeni pay alabilir.
                    </li>
                    <li>
                      Rüçhan hakkını piyasada satarak sermaye artırımına
                      katılmadan hakkının değerini nakde çevirebilir.
                    </li>
                    <li>
                      Hiçbir işlem yapmayabilir; ancak bu durumda kullanım süresi
                      sonunda hak kaybı yaşayabilir.
                    </li>
                  </ul>
                </div>
                <p>
                  Rüçhan hakkı kullanılmaz ve satılmazsa yeni pay alma hakkı sona
                  erebilir. Bu durumda şirketin toplam pay sayısı artarken
                  yatırımcının pay sayısı değişmez ve ortaklık oranı düşebilir.
                  Buna sulanma etkisi denir.
                </p>
              </Section>

              <Section
                id="bedelli-fiyat"
                title="Bedelli Sermaye Artırımı Hisse Fiyatını Nasıl Etkiler?"
              >
                <p>
                  Bedelli sermaye artırımı sonrasında hisse fiyatında teorik
                  düzeltme yapılır. Çünkü şirketin pay sayısı artar ve yeni
                  paylar belirli bir kullanım fiyatı üzerinden ihraç edilir.
                </p>
                <p>
                  Teorik fiyat, eski hisse fiyatı, bedelli oranı ve rüçhan hakkı
                  kullanım fiyatı dikkate alınarak hesaplanır. Ancak bu fiyat
                  yalnızca teknik bir düzeltmedir. Gerçek piyasa fiyatı arz-talep
                  dengesine göre farklılaşabilir.
                </p>
                <p>
                  Yatırımcıların en sık yaptığı hata, fiyatın bölünme sonrası
                  düşmesini doğrudan zarar olarak görmektir. Oysa fiyat teorik
                  olarak düşerken yatırımcının elindeki pay sayısı veya rüçhan
                  hakkı değeri değişir.
                </p>
              </Section>

              <Section id="bedelsiz" title="Bedelsiz Sermaye Artırımı Nedir?">
                <p>
                  Bedelsiz sermaye artırımı, şirketin yatırımcıdan herhangi bir
                  ödeme almadan sermayesini artırmasıdır. Bu işlemde şirketin iç
                  kaynakları sermayeye aktarılır ve mevcut ortaklara bedelsiz
                  yeni pay verilir.
                </p>
                <p>
                  Bedelsiz sermaye artırımı genellikle emisyon primi, geçmiş yıl
                  karları, yeniden değerleme artışları, sermaye düzeltmesi olumlu
                  farkları, yedek akçeler veya dağıtılmamış karlardan
                  karşılanabilir.
                </p>
                <p>
                  Bedelsiz sermaye artırımında şirkete dışarıdan nakit para
                  girmez. Şirket kendi özkaynak kalemleri arasında sınıflandırma
                  yapar. Yani özkaynak toplamı aynı kalabilir, fakat sermaye
                  kalemi büyür.
                </p>
                <p>
                  Yatırımcıdan para çıkışı olmaz. Yatırımcının elindeki hisse
                  sayısı artar; ancak hisse fiyatı bedelsiz oranına göre teorik
                  olarak düşer. Bu nedenle bedelsiz sermaye artırımı doğrudan
                  bedava kazanç anlamına gelmez.
                </p>
              </Section>

              <Section
                id="bedelsiz-fiyat"
                title="Bedelsiz Sermaye Artırımı Hisse Fiyatını Nasıl Etkiler?"
              >
                <p>
                  Bedelsiz sermaye artırımı sonrası pay sayısı artar, fiyat ise
                  teorik olarak aynı oranda düşer. Örneğin yüzde 100 bedelsiz
                  sermaye artırımında yatırımcının pay sayısı iki katına çıkar;
                  teorik fiyat ise yarıya düşer.
                </p>
                <p>
                  Bu işlem sonucunda yatırımcının toplam portföy değerinin teorik
                  olarak değişmemesi beklenir. Çünkü adet artarken fiyat aynı
                  oranda düzeltilir.
                </p>
                <p>
                  Piyasa fiyatı ise teorik fiyatla birebir aynı olmak zorunda
                  değildir. Beklentiler, şirket haberleri, endeks koşulları ve
                  yatırımcı ilgisi fiyatlamayı değiştirebilir.
                </p>
              </Section>

              <Section id="farklar" title="Bedelli ve Bedelsiz Sermaye Artırımı Arasındaki Farklar">
                <p>
                  Bedelli ve bedelsiz sermaye artırımı arasındaki temel fark,
                  şirkete nakit girişi olup olmamasıdır. Bedelli artırımda
                  yatırımcı ödeme yapabilir ve şirket kaynak sağlar. Bedelsiz
                  artırımda yatırımcı ödeme yapmaz; şirket iç kaynaklarını
                  sermayeye aktarır.
                </p>
                <div className="overflow-hidden rounded-xl border border-slate-200">
                  <div className="grid grid-cols-3 bg-slate-100 text-sm font-bold text-slate-800">
                    <div className="p-3">Konu</div>
                    <div className="p-3">Bedelli</div>
                    <div className="p-3">Bedelsiz</div>
                  </div>
                  {bedelliBedelsizFarklari.map((item) => (
                    <div
                      key={item.title}
                      className="grid grid-cols-3 border-t border-slate-200 text-sm leading-7 text-slate-600"
                    >
                      <div className="p-3 font-semibold text-slate-800">
                        {item.title}
                      </div>
                      <div className="p-3">{item.bedelli}</div>
                      <div className="p-3">{item.bedelsiz}</div>
                    </div>
                  ))}
                </div>
              </Section>

              <Section
                id="birlikte"
                title="Hem Bedelli Hem Bedelsiz Sermaye Artırımı Olabilir mi?"
              >
                <p>
                  Evet. Şirketler aynı anda hem bedelli hem bedelsiz sermaye
                  artırımı yapabilir. Bu durumda sermayenin bir kısmı nakit
                  karşılığı artırılır, bir kısmı ise iç kaynaklardan karşılanır.
                </p>
                <p>
                  Yatırımcı açısından hem rüçhan hakkı süreci hem de bedelsiz pay
                  alma süreci birlikte değerlendirilmelidir. Bedelli oranı,
                  bedelsiz oranı, rüçhan kullanım fiyatı, toplam sermaye artışı,
                  şirkete girecek nakit ve bölünme sonrası teorik fiyat birlikte
                  analiz edilmelidir.
                </p>
              </Section>

              <Section id="tahsisli" title="Tahsisli Sermaye Artırımı Nedir?">
                <p>
                  Tahsisli sermaye artırımı, yeni çıkarılacak payların mevcut
                  ortakların tamamına değil, belirli kişi veya kurumlara
                  satılmasıdır. Bu işlemde rüçhan hakkı kısıtlanabilir.
                </p>
                <p>
                  Tahsisli sermaye artırımı stratejik ortak alınması, belirli
                  yatırımcılardan kaynak sağlanması, borçların sermayeye
                  dönüştürülmesi veya şirketin finansal yapısının güçlendirilmesi
                  amacıyla yapılabilir.
                </p>
                <p>
                  Yatırımcı açısından tahsisli sermaye artırımı dikkatle
                  incelenmelidir. Payların kime tahsis edildiği, satış fiyatının
                  piyasa fiyatına göre nerede olduğu, rüçhan hakkının neden
                  kısıtlandığı ve ortaklık yapısının nasıl değişeceği önemlidir.
                </p>
              </Section>

              <Section id="surec" title="Sermaye Artırımı Süreci Nasıl İlerler?">
                <p>
                  Borsada işlem gören şirketlerde sermaye artırımı süreci KAP
                  açıklamalarıyla takip edilir. Yönetim kurulu kararı, SPK
                  başvurusu, onay, kullanım tarihleri ve yeni payların hesaplara
                  geçmesi ayrı aşamalardır.
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
                id="maliyet"
                title="Sermaye Artırımı Maliyeti Nasıl Etkiler?"
              >
                <p>
                  Bedelsiz sermaye artırımında hisse sayısı arttığı için
                  yatırımcının ortalama maliyeti teorik olarak düşer. Ancak
                  toplam yatırım değeri tek başına bedelsiz işlem nedeniyle
                  değişmez.
                </p>
                <p>
                  Bedelli sermaye artırımında yatırımcı yeni para koyduğu için
                  toplam maliyet değişir. Ortalama maliyet; eski hisse maliyeti,
                  rüçhan kullanım fiyatı ve alınan yeni pay sayısına göre yeniden
                  hesaplanır.
                </p>
                <p>
                  Bu nedenle bedelli sonrası maliyetin düştüğü veya yükseldiği
                  yorumu tek başına yeterli değildir. Yatırımcının toplam ödediği
                  para, sahip olduğu toplam pay sayısı ve piyasa fiyatı birlikte
                  değerlendirilmelidir.
                </p>
              </Section>

              <Section
                id="deger"
                title="Sermaye Artırımı Şirket Değerini Artırır mı?"
              >
                <p>
                  Sermaye artırımı şirket değerini otomatik olarak artırmaz.
                  Bedelli sermaye artırımı şirkete nakit girişi sağlar. Bu nakit
                  doğru kullanılırsa şirketin değeri zaman içinde artabilir.
                  Ancak kaynak verimsiz kullanılırsa yatırımcı açısından beklenen
                  fayda oluşmayabilir.
                </p>
                <p>
                  Bedelsiz sermaye artırımı ise şirketin toplam özkaynaklarını
                  doğrudan büyütmeyebilir. İç kaynaklar arasında aktarım yapılır.
                  Bu nedenle bedelsiz sermaye artırımı şirketin piyasa değerini
                  otomatik olarak artırmaz.
                </p>
              </Section>

              <Section
                id="yatirimci"
                title="Yatırımcı Sermaye Artırımında Nelere Dikkat Etmeli?"
              >
                <p>
                  Sermaye artırımı açıklayan bir şirkette yatırımcı acele karar
                  vermemelidir. Önce KAP açıklaması, sermaye artırımı oranı,
                  fon kullanım amacı, SPK süreci ve yatırımcıya düşen haklar
                  dikkatle incelenmelidir.
                </p>
                <ul className="list-disc space-y-2 pl-5">
                  {yatirimciKontrolListesi.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </Section>

              <Section
                id="bedelli-olumlu-olumsuz"
                title="Bedelli Sermaye Artırımı Olumlu mu Olumsuz mu?"
              >
                <p>
                  Bedelli sermaye artırımı her zaman kötü değildir. Şirket yeni
                  yatırım yapacaksa, kapasite artıracaksa, yüksek finansman
                  maliyetini azaltacaksa veya işletme sermayesini güçlendirecekse
                  uzun vadede olumlu sonuç verebilir.
                </p>
                <p>
                  Ancak şirket sürekli zarar ediyor, faaliyetlerinden nakit
                  yaratamıyor ve yatırımcıdan tekrar tekrar para talep ediyorsa
                  bu durum dikkatli incelenmelidir. Asıl soru, şirketin aldığı
                  kaynağı değer yaratmak için mi yoksa mevcut sorunları geçici
                  olarak kapatmak için mi kullanacağıdır.
                </p>
              </Section>

              <Section
                id="bedelsiz-olumlu-olumsuz"
                title="Bedelsiz Sermaye Artırımı Her Zaman İyi midir?"
              >
                <p>
                  Bedelsiz sermaye artırımı genellikle piyasada olumlu algılanır.
                  Çünkü yatırımcı ödeme yapmadan ilave pay alır. Ancak bu işlem
                  şirketin satışlarını, faaliyet karını veya nakit akışını
                  doğrudan artırmaz.
                </p>
                <p>
                  Bedelsiz sermaye artırımı güçlü özkaynak yapısına sahip, karlı
                  ve büyüyen şirketlerde daha anlamlı olabilir. Fakat finansal
                  performansı zayıf şirketlerde yalnızca bedelsiz beklentisiyle
                  hareket etmek riskli olabilir.
                </p>
              </Section>

              <Section id="ornek-hesaplamalar" title="Örnek Sermaye Artırımı Senaryoları">
                <p>
                  Sermaye artırımlarında en büyük kafa karışıklığı, lot sayısı
                  ve fiyat değişiminin toplam portföy değerine etkisidir.
                  Aşağıdaki örnekler, bedelli ve bedelsiz işlemlerin yatırımcı
                  hesabında nasıl okunabileceğini gösterir.
                </p>
                <div className="grid gap-3">
                  {ornekHesaplamalar.map((item) => (
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
                    Olumlu mu, Olumsuz mu? Karar Matrisi
                  </h3>
                  <div className="mt-3 grid gap-3 md:grid-cols-2">
                    {kararMatrisi.map((item) => (
                      <div
                        key={item.title}
                        className="rounded-lg border border-blue-100 bg-white/70 p-3"
                      >
                        <h4 className="font-bold text-blue-950">{item.title}</h4>
                        <p className="mt-2 text-sm leading-7 text-blue-900">
                          {item.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </Section>

              <Section id="hatalar" title="Sermaye Artırımında En Sık Yapılan Hatalar">
                <ul className="list-disc space-y-2 pl-5">
                  {sikYapilanHatalar.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </Section>

              <Section id="nereden-takip" title="Sermaye Artırımı Nereden Takip Edilir?">
                <p>
                  Sermaye artırımı süreçleri en sağlıklı şekilde Kamuyu
                  Aydınlatma Platformu üzerinden takip edilir. Şirketler yönetim
                  kurulu kararlarını, SPK başvurularını, onayları, rüçhan hakkı
                  kullanım tarihlerini, bedelsiz pay alma tarihlerini ve sürece
                  ilişkin diğer detayları KAP üzerinden açıklar.
                </p>
                <p>
                  Ayrıca SPK haftalık bültenleri, Borsa İstanbul duyuruları,
                  şirket yatırımcı ilişkileri sayfaları ve aracı kurum ekranları
                  da yatırımcıların takip edebileceği kaynaklardır.
                </p>
              </Section>

              <Section id="sonuc" title="Sonuç: Sermaye Artırımı Nasıl Okunmalı?">
                <p>
                  Sermaye artırımı, borsada yatırımcıların mutlaka anlaması
                  gereken temel konulardan biridir. Çünkü bu işlemler yatırımcının
                  pay sayısını, maliyetini, ortaklık oranını ve şirketin finansal
                  yapısını etkileyebilir.
                </p>
                <p>
                  Bedelli sermaye artırımı şirkete nakit girişi sağlar ancak
                  yatırımcıdan para çıkışı gerektirebilir. Rüçhan hakkı
                  kullanılmazsa ortaklık oranı azalabilir. Bedelsiz sermaye
                  artırımı ise yatırımcıdan para çıkışı gerektirmez; hisse sayısı
                  artar ancak fiyat teorik olarak düzelir.
                </p>
                <p>
                  Doğru yaklaşım, sermaye artırımını yalnızca oranına bakarak
                  değil; şirketin amacı, bilançosu, fon kullanım planı, ortaklık
                  yapısı ve piyasa koşullarıyla birlikte değerlendirmektir.
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
                Yatırım kararları, kişisel risk-getiri tercihleri, güncel
                veriler ve şirket özelindeki açıklamalar dikkate alınarak
                verilmelidir.
              </section>

              <RehberAltBolumler currentHref="/rehberler/sermaye-artirimlari" />
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
