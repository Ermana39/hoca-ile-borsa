import Link from "next/link";
import RehberAltBolumler from "@/components/RehberAltBolumler";
import type { Metadata } from "next";
import type { ReactNode } from "react";

const siteUrl = "https://www.hocaileborsa.com";
const title =
  "Rüçhan Hakkı Nedir? Bedelli Sermaye Artırımında Nasıl Kullanılır?";
const description =
  "Rüçhan hakkı nedir, bedelli sermaye artırımında nasıl kullanılır, rüçhan kuponu nasıl satılır, kullanılmazsa ne olur ve yatırımcı açısından ne anlama gelir?";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: `${siteUrl}/rehberler/ruchan-hakki-nedir`,
  },
  openGraph: {
    title,
    description,
    url: `${siteUrl}/rehberler/ruchan-hakki-nedir`,
    type: "article",
  },
};

const temelKavramlar = [
  {
    title: "Rüçhan Hakkı",
    text: "Mevcut pay sahiplerinin bedelli sermaye artırımında yeni çıkarılacak payları öncelikli alma hakkıdır. Bu hak, yatırımcının şirketteki ortaklık oranını koruması için önemlidir.",
  },
  {
    title: "Rüçhan Kuponu",
    text: "Bedelli sermaye artırımı sürecinde yatırımcının hesabında görünen yeni pay alma hakkını temsil eder. Bu kupon belirlenen süre içinde kullanılabilir veya borsada işlem görüyorsa satılabilir.",
  },
  {
    title: "Rüçhan Kullanım Fiyatı",
    text: "Yatırımcının yeni pay almak için ödeyeceği fiyattır. Bedelli sermaye artırımı duyurusunda 1 TL nominal değerli pay için kullanım fiyatı ayrıca açıklanır.",
  },
  {
    title: "Bedelli Sermaye Artırımı",
    text: "Şirketin yeni pay ihraç ederek ortaklarından veya yatırımcılardan nakit kaynak topladığı sermaye artırımı türüdür. Rüçhan hakkı bu sürecin en kritik parçalarından biridir.",
  },
  {
    title: "Sulanma Etkisi",
    text: "Şirketin toplam pay sayısı artarken yatırımcının pay sayısı aynı kalırsa, yatırımcının şirketteki ortaklık oranının azalmasıdır. Rüçhan hakkını kullanmamak bu etkiye yol açabilir.",
  },
  {
    title: "Teorik Fiyat",
    text: "Bedelli sermaye artırımı sonrası pay sayısı ve kullanım fiyatı dikkate alınarak hesaplanan düzeltilmiş fiyattır. Gerçek piyasa fiyatı ise arz-talep dengesine göre oluşur.",
  },
];

const yatirimciSecenekleri = [
  {
    title: "Rüçhan Hakkını Kullanmak",
    text: "Yatırımcı belirlenen kullanım fiyatını ödeyerek yeni pay alır. Böylece sermaye artırımına katılır ve ortaklık oranını korumaya çalışır.",
  },
  {
    title: "Rüçhan Hakkını Satmak",
    text: "Yatırımcı bedelliye katılmak istemiyorsa, işlem gören rüçhan kuponunu piyasada satabilir. Böylece hakkını kullanmadan nakde çevirmiş olur.",
  },
  {
    title: "Hiçbir İşlem Yapmamak",
    text: "En riskli seçenektir. Kullanım süresi içinde hak kullanılmaz veya satılmazsa hak sona erebilir. Bu durumda yatırımcı hem yeni pay alma fırsatını hem de kupon değerini kaybedebilir.",
  },
];

const surecAdimlari = [
  {
    title: "Yönetim Kurulu Kararı Alınır",
    text: "Şirket bedelli sermaye artırımı yapmak için karar alır. Artırım oranı, mevcut sermaye, artırılacak sermaye, rüçhan hakkı kullanım fiyatı ve fon kullanım amacı gibi bilgiler açıklanır.",
  },
  {
    title: "SPK Başvurusu Yapılır",
    text: "Halka açık şirketlerde bedelli sermaye artırımı süreci Sermaye Piyasası Kurulu düzenlemelerine tabidir. Şirket gerekli belgelerle başvuru yapar ve onay süreci başlar.",
  },
  {
    title: "İzahname veya İhraç Belgesi Onaylanır",
    text: "SPK onayı sonrasında süreç daha net hale gelir. Şirket onay tarihini, sermaye artırımı detaylarını ve sonraki aşamaları KAP üzerinden yatırımcılara duyurur.",
  },
  {
    title: "Rüçhan Kullanım Tarihleri Açıklanır",
    text: "Rüçhan hakkı kullanım başlangıç ve bitiş tarihleri KAP duyurusunda yer alır. Yatırımcılar bu tarihler arasında haklarını kullanabilir veya kupon piyasasında işlem yapabilir.",
  },
  {
    title: "Rüçhan Kupon Pazarı Açılır",
    text: "Borsa İstanbul'da işlem gören şirketlerde rüçhan haklarının alınıp satılabilmesi için ilgili işlem sırası açılabilir. Bu sırada yatırımcılar haklarını piyasada alıp satabilir.",
  },
  {
    title: "Kullanım Bedeli Ödenir",
    text: "Rüçhan hakkını kullanmak isteyen yatırımcı, aracı kurumu üzerinden gerekli tutarı öder. Kullanım talimatı iletildikten sonra yeni pay alma süreci tamamlanır.",
  },
  {
    title: "Kalan Paylar Satışa Sunulabilir",
    text: "Kullanılmayan rüçhan haklarından kaynaklanan paylar varsa, şirketin duyurduğu esaslara göre bu paylar birincil piyasada veya ilgili yöntemle satışa sunulabilir.",
  },
  {
    title: "Yeni Paylar Hesaplara Geçer",
    text: "Süreç tamamlandığında bedelliye katılan yatırımcıların yeni payları hesaplarına yansır. Artırım sonrası toplam pay sayısı ve teorik fiyat buna göre düzeltilir.",
  },
];

const dikkatEdilecekler = [
  "Rüçhan hakkı kullanım başlangıç ve bitiş tarihleri mutlaka takip edilmelidir.",
  "Rüçhan kullanım fiyatı ile hissenin piyasa fiyatı karşılaştırılmalıdır.",
  "Bedelli sermaye artırımının oranı ve şirkete sağlayacağı nakit kaynak incelenmelidir.",
  "Şirketin fon kullanım raporu okunmalıdır.",
  "Bedelli gelirinin borç kapama, yatırım, işletme sermayesi veya başka bir amaçla mı kullanılacağı anlaşılmalıdır.",
  "Hakim ortakların sermaye artırımına katılım niyeti değerlendirilmelidir.",
  "Rüçhan kuponu işlem görüyorsa fiyatı ayrıca takip edilmelidir.",
  "Hiçbir işlem yapılmadığında hak kaybı yaşanabileceği unutulmamalıdır.",
  "Teorik fiyat ile gerçek piyasa fiyatının aynı olmak zorunda olmadığı bilinmelidir.",
  "Bedelli sonrası ortaklık oranı, maliyet ve portföy değeri birlikte değerlendirilmelidir.",
];

const yanlisBilinenler = [
  "Rüçhan hakkı bedava para değildir; yeni pay alma hakkıdır.",
  "Rüçhan hakkını kullanmak her zaman kazanç garantisi vermez.",
  "Rüçhan hakkını satmak yatırımcının bedelliye katılmadığı anlamına gelir ama hakkını tamamen boşa bırakmamasını sağlar.",
  "Bedelli sermaye artırımı her zaman kötü değildir; şirketin fonu nasıl kullanacağı önemlidir.",
  "Rüçhan kuponunun fiyatı sabit değildir, piyasadaki arz-talebe göre değişebilir.",
  "Rüçhan hakkı kullanılmaz ve satılmazsa hak kaybı yaşanabilir.",
  "Teorik fiyat düşüşü tek başına zarar anlamına gelmez; toplam portföy değeri dikkate alınmalıdır.",
  "Sadece bedelli oranına bakarak karar vermek sağlıklı değildir.",
];

const hesaplamaKartlari = [
  {
    title: "Teorik Fiyat Mantığı",
    text: "Bedelli sermaye artırımında teorik fiyat; eski fiyat, bedelli oranı ve rüçhan kullanım fiyatı dikkate alınarak hesaplanır. Genel mantık, eski payların piyasa değeri ile yeni paylar için ödenecek tutarın toplam pay sayısına bölünmesidir.",
  },
  {
    title: "Rüçhan Değeri Mantığı",
    text: "Rüçhan hakkının teorik değeri çoğu durumda eski fiyat ile bedelli sonrası teorik fiyat arasındaki fark üzerinden yorumlanır. Ancak piyasada işlem gören kupon fiyatı arz-talebe göre bu teorik değerden farklılaşabilir.",
  },
  {
    title: "Maliyet Etkisi",
    text: "Yatırımcı rüçhan hakkını kullanırsa yeni paylar için ek ödeme yapar. Bu nedenle toplam maliyet, eski payların maliyeti ile yeni paylar için ödenen tutarın birlikte hesaplanmasıyla yeniden oluşur.",
  },
];

const ornekSenaryolar = [
  {
    title: "Yatırımcı Rüçhan Hakkını Kullanırsa",
    text: "Yatırımcı ek ödeme yaparak yeni payları alır. Elindeki pay sayısı artar ve sermaye artırımına katıldığı için ortaklık oranını korumaya yaklaşır. Ancak yatırım kararı yine şirketin gelecekteki performansına bağlıdır.",
  },
  {
    title: "Yatırımcı Rüçhan Hakkını Satarsa",
    text: "Yatırımcı bedelliye para koymaz. Bunun yerine rüçhan kuponunu satarak hakkının piyasa değerini tahsil eder. Bu durumda yeni pay almadığı için ortaklık oranı azalabilir.",
  },
  {
    title: "Yatırımcı Hiçbir Şey Yapmazsa",
    text: "Kullanım süresi sonunda hak geçersiz hale gelebilir. Bu durumda yatırımcı kupon değerinden de yeni pay alma hakkından da yararlanamayabilir. Bu yüzden tarih takibi kritik önemdedir.",
  },
];

const kararAgaci = [
  {
    title: "Şirkete Uzun Vadeli Güveniyorsanız",
    text: "Rüçhan hakkını kullanmak ortaklık oranını korumaya yardımcı olabilir. Yine de şirketin fon kullanım planı, bedelli gerekçesi ve bilanço riski kontrol edilmelidir.",
  },
  {
    title: "Ek Nakit Ayırmak İstemiyorsanız",
    text: "Rüçhan kuponu işlem görüyorsa satmak değerlendirilebilir. Böylece bedelliye katılmadan hakkın piyasa değerinden yararlanılır; ancak yeni pay alınmadığı için ortaklık oranı azalabilir.",
  },
  {
    title: "Kararsızsanız",
    text: "Hiçbir işlem yapmadan beklemek en riskli seçenektir. Kullanım süresi bitmeden aracı kurum ekranındaki kupon miktarı, son işlem tarihi ve kullanım bedeli kontrol edilmelidir.",
  },
  {
    title: "Hisse Fiyatı Kullanım Fiyatına Yakınsa",
    text: "Rüçhan hakkının ekonomik değeri azalabilir. Bu durumda kupon fiyatı, teorik fiyat ve piyasa fiyatı birlikte değerlendirilmeden karar verilmemelidir.",
  },
];

const takipTakvimi = [
  "Yönetim kurulu karar tarihi ve açıklanan bedelli oranı",
  "SPK başvuru tarihi ve başvurunun kapsamı",
  "SPK onay tarihi ve izahname/ihraç belgesi",
  "Rüçhan hakkı kullanım başlangıç tarihi",
  "Rüçhan kupon pazarında son işlem tarihi",
  "Rüçhan hakkı kullanım bitiş tarihi",
  "Kullanılmayan payların satış tarihleri",
  "Yeni payların hesaba geçiş ve işlem görme bilgisi",
];

const faq = [
  {
    question: "Rüçhan hakkı nedir?",
    answer:
      "Rüçhan hakkı, mevcut pay sahiplerinin bedelli sermaye artırımında yeni çıkarılacak payları öncelikli alma hakkıdır. Bu hak yatırımcının ortaklık oranını korumasına yardımcı olur.",
  },
  {
    question: "Rüçhan hakkı ne zaman doğar?",
    answer:
      "Rüçhan hakkı, şirketin bedelli sermaye artırımı sürecinde mevcut pay sahiplerine yeni pay alma hakkı tanımasıyla doğar. Kullanım tarihleri KAP açıklamalarında ilan edilir.",
  },
  {
    question: "Rüçhan hakkı kullanılmazsa ne olur?",
    answer:
      "Yatırımcı rüçhan hakkını kullanmaz ve satmazsa kullanım süresi sonunda hak kaybı yaşayabilir. Ayrıca sermaye artırımına katılmadığı için ortaklık oranı azalabilir.",
  },
  {
    question: "Rüçhan hakkı satılabilir mi?",
    answer:
      "Borsa İstanbul'da işlem gören şirketlerde rüçhan hakkı kuponları, ilgili pazar ve işlem sırası açıldığında alınıp satılabilir. Böylece yatırımcı bedelliye katılmadan hakkını nakde çevirebilir.",
  },
  {
    question: "Rüçhan hakkını kullanmak için ne yapılır?",
    answer:
      "Yatırımcı aracı kurumu üzerinden kullanım talimatı verir ve belirlenen kullanım fiyatı üzerinden gerekli tutarı öder. İşlem tamamlandığında yeni paylar yatırımcı hesabına yansır.",
  },
  {
    question: "Rüçhan kuponu fiyatı neden değişir?",
    answer:
      "Rüçhan kuponu fiyatı hissenin piyasa fiyatı, kullanım fiyatı, kalan süre, yatırımcı talebi ve piyasa beklentilerine göre değişebilir. Teorik değer ile piyasa fiyatı aynı olmak zorunda değildir.",
  },
  {
    question: "Rüçhan hakkı bedelli sermaye artırımıyla aynı şey midir?",
    answer:
      "Hayır. Bedelli sermaye artırımı şirketin nakit karşılığı yeni pay ihraç etmesidir. Rüçhan hakkı ise mevcut ortakların bu yeni payları öncelikli alma hakkıdır.",
  },
  {
    question: "Rüçhan hakkı yatırım tavsiyesi midir?",
    answer:
      "Hayır. Rüçhan hakkı bir pay sahipliği hakkıdır. Kullanmak, satmak veya işlem yapmamak yatırımcının risk profiline, şirkete bakışına ve nakit durumuna göre değerlendirilmelidir.",
  },
];

const tableOfContents = [
  { href: "#ruchan-hakki-nedir", label: "Rüçhan Hakkı Nedir?" },
  { href: "#neden-onemlidir", label: "Neden Önemlidir?" },
  { href: "#temel-kavramlar", label: "Temel Kavramlar" },
  { href: "#yatirimci-secenekleri", label: "Yatırımcı Ne Yapabilir?" },
  { href: "#surec", label: "Süreç Nasıl İşler?" },
  { href: "#hesaplama", label: "Hesaplama Mantığı" },
  { href: "#karar-agaci", label: "Karar Ağacı" },
  { href: "#dikkat", label: "Nelere Dikkat Edilmeli?" },
  { href: "#yanlislar", label: "Yanlış Bilinenler" },
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

export default function RuchanHakkiNedirPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: title,
        description,
        mainEntityOfPage: `${siteUrl}/rehberler/ruchan-hakki-nedir`,
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
            name: "Rüçhan Hakkı",
            item: `${siteUrl}/rehberler/ruchan-hakki-nedir`,
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
          <Link
            href="/"
            prefetch={false}
            className="transition hover:text-blue-600"
          >
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
          <span className="font-medium text-slate-700">Rüçhan Hakkı</span>
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
                Rüçhan hakkı, bedelli sermaye artırımlarında mevcut pay
                sahiplerine tanınan yeni pay alma hakkıdır. Bu hak yatırımcıya
                şirketteki ortaklık oranını koruma, bedelliye katılma veya
                hakkını piyasada satarak değerlendirme imkanı sunar.
              </p>
            </header>

            <div className="mt-8 space-y-10">
              <Section id="ruchan-hakki-nedir" title="Rüçhan Hakkı Nedir?">
                <p>
                  Rüçhan hakkı, bir şirket bedelli sermaye artırımı yaptığında
                  mevcut ortakların yeni çıkarılacak payları öncelikli alma
                  hakkıdır. Bu hak, yatırımcının şirketteki ortaklık oranının
                  sermaye artırımı sonrasında korunabilmesi için önemlidir.
                </p>
                <p>
                  Bir şirket bedelli sermaye artırımı yaptığında yeni pay ihraç
                  eder. Bu yeni paylar belirlenen kullanım fiyatı üzerinden
                  mevcut ortaklara sunulabilir. Yatırımcı bu hakkı kullanırsa ek
                  ödeme yaparak yeni pay alır. Kullanmazsa ve satmazsa hak kaybı
                  yaşayabilir.
                </p>
                <p>
                  Bu nedenle rüçhan hakkı yalnızca teknik bir borsa kavramı
                  değildir. Yatırımcının pay sayısını, ortaklık oranını, maliyet
                  yapısını ve portföy kararını doğrudan etkileyebilen önemli bir
                  pay sahipliği hakkıdır.
                </p>
              </Section>

              <Section
                id="neden-onemlidir"
                title="Rüçhan Hakkı Neden Önemlidir?"
              >
                <p>
                  Bedelli sermaye artırımlarında şirketin toplam pay sayısı
                  artar. Mevcut yatırımcı artırım sürecine katılmazsa, elindeki
                  pay sayısı aynı kalırken şirketin toplam pay sayısı büyür. Bu
                  durumda yatırımcının şirketteki ortaklık oranı azalabilir.
                </p>
                <p>
                  Rüçhan hakkı, yatırımcıya bu azalmayı önleme fırsatı verir.
                  Yatırımcı yeni pay alma hakkını kullanarak sermaye artırımına
                  katılabilir. Ek para koymak istemiyorsa, kuponu piyasada
                  satarak hakkını nakde çevirmeyi değerlendirebilir.
                </p>
                <p>
                  En önemli nokta, sürenin sınırlı olmasıdır. Kullanım dönemi
                  içinde karar verilmezse rüçhan hakkı sona erebilir. Bu yüzden
                  bedelli sermaye artırımı haberlerinde tarih takibi kritik
                  önemdedir.
                </p>
              </Section>

              <Section
                id="temel-kavramlar"
                title="Rüçhan Hakkında Temel Kavramlar"
              >
                <div className="grid gap-3 md:grid-cols-2">
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

              <Section
                id="yatirimci-secenekleri"
                title="Yatırımcı Rüçhan Hakkıyla Ne Yapabilir?"
              >
                <p>
                  Rüçhan hakkı tanımlanan bir yatırımcının genellikle üç temel
                  seçeneği vardır. Bu seçeneklerin her biri yatırımcının nakit
                  durumuna, şirkete bakışına ve risk tercihine göre farklı anlam
                  taşır.
                </p>
                <div className="grid gap-3">
                  {yatirimciSecenekleri.map((item, index) => (
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

              <Section id="surec" title="Rüçhan Hakkı Süreci Nasıl İşler?">
                <p>
                  Rüçhan hakkı süreci, bedelli sermaye artırımı kararının
                  alınmasıyla başlar ve yeni payların yatırımcı hesaplarına
                  geçmesiyle tamamlanır. Halka açık şirketlerde bu süreç KAP
                  açıklamaları üzerinden takip edilir.
                </p>
                <div className="grid gap-3">
                  {surecAdimlari.map((item, index) => (
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

              <Section
                id="kullanmazsa"
                title="Rüçhan Hakkı Kullanılmazsa Ne Olur?"
              >
                <p>
                  Yatırımcı rüçhan hakkını kullanmazsa, bedelli sermaye
                  artırımına katılmamış olur. Eğer kuponu da satmazsa kullanım
                  süresi sonunda hak değerini kaybedebilir. Bu durum yatırımcı
                  açısından iki farklı sonuç doğurabilir.
                </p>
                <p>
                  İlk sonuç, yeni pay alma hakkının kaybedilmesidir. İkinci
                  sonuç ise şirketin toplam pay sayısı artarken yatırımcının pay
                  sayısı aynı kaldığı için ortaklık oranının düşmesidir. Bu
                  duruma sulanma etkisi denir.
                </p>
                <p>
                  Bu nedenle bedelli sermaye artırımı duyurularında sadece oran
                  veya fiyat değil, rüçhan hakkı kullanım tarihleri de mutlaka
                  takip edilmelidir.
                </p>
              </Section>

              <Section id="satmak" title="Rüçhan Hakkı Satılır mı?">
                <p>
                  Borsa İstanbul&apos;da işlem gören şirketlerde rüçhan hakkı
                  kuponları, ilgili işlem sırası açıldığında piyasada alınıp
                  satılabilir. Bu sayede yatırımcı bedelliye katılmak için nakit
                  ayırmak istemiyorsa hakkını satarak değerlendirebilir.
                </p>
                <p>
                  Rüçhan kuponu satıldığında yatırımcı yeni pay alma hakkını
                  başka bir yatırımcıya devretmiş olur. Kuponu alan yatırımcı,
                  kullanım süresi içinde belirlenen kullanım fiyatını ödeyerek
                  yeni pay alma hakkını kullanabilir.
                </p>
                <p>
                  Kupon fiyatı sabit değildir. Hissenin piyasa fiyatı, kullanım
                  fiyatı, kalan süre, piyasa beklentisi ve arz-talep dengesi
                  kupon fiyatını etkileyebilir.
                </p>
              </Section>

              <Section id="hesaplama" title="Rüçhan Hakkı Hesaplama Mantığı">
                <p>
                  Rüçhan hakkı ve bedelli sonrası teorik fiyat hesaplamalarında
                  temel mantık, eski payların piyasa değeri ile yeni paylar için
                  ödenecek tutarın toplam pay sayısına dağıtılmasıdır.
                </p>
                <div className="grid gap-3">
                  {hesaplamaKartlari.map((item) => (
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
                <div className="rounded-xl border border-blue-200 bg-blue-50 p-4 text-sm leading-7 text-blue-900">
                  <strong>Basit örnek:</strong> Hisse fiyatı 20 TL, bedelli
                  oranı %100 ve rüçhan kullanım fiyatı 1 TL ise teorik fiyat
                  yaklaşık olarak 10,50 TL olur. Yatırımcının pay sayısı artar,
                  fakat yeni paylar için ödeme yaptığı için toplam değer
                  hesaplaması pay adedi ve ödenen tutarla birlikte yapılmalıdır.
                </div>
                <p>
                  Bu örnek yalnızca hesaplama mantığını göstermek içindir.
                  Gerçek piyasa fiyatı teorik fiyattan farklı olabilir. Piyasa,
                  şirketin finansal durumuna, bedelli gerekçesine ve yatırımcı
                  beklentisine göre farklı fiyatlama yapabilir.
                </p>
              </Section>

              <Section
                id="ornek-senaryolar"
                title="Yatırımcı Açısından Üç Örnek Senaryo"
              >
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

              <Section id="karar-agaci" title="Rüçhan Hakkı İçin Pratik Karar Ağacı">
                <p>
                  Rüçhan hakkında güçlü karar vermek için “kullanayım mı,
                  satayım mı, bekleyeyim mi?” sorusunu nakit durumu, şirket
                  beklentisi ve kullanım takvimiyle birlikte düşünmek gerekir.
                </p>
                <div className="grid gap-3">
                  {kararAgaci.map((item) => (
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
                    Kaçırılmaması Gereken Takvim
                  </h3>
                  <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-blue-900">
                    {takipTakvimi.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </Section>

              <Section
                id="dikkat"
                title="Rüçhan Hakkında Nelere Dikkat Edilmeli?"
              >
                <ul className="list-disc space-y-2 pl-5">
                  {dikkatEdilecekler.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </Section>

              <Section
                id="bedelli-olumlu-mu"
                title="Rüçhan Hakkı Olan Bedelli Sermaye Artırımı Olumlu mu?"
              >
                <p>
                  Rüçhan hakkı tanınan bir bedelli sermaye artırımı tek başına
                  olumlu veya olumsuz değildir. Önemli olan şirketin bu sermaye
                  artırımını neden yaptığı ve toplanacak fonu nasıl
                  kullanacağıdır.
                </p>
                <p>
                  Eğer şirket bedelli gelirini verimli yatırımlarda, kapasite
                  artışında, borç azaltmada veya işletme sermayesini
                  güçlendirmede kullanacaksa süreç uzun vadede destekleyici
                  olabilir. Ancak şirket sürekli zarar ediyor, faaliyetlerinden
                  nakit yaratamıyor ve sık sık yatırımcıdan para talep ediyorsa
                  bu durum daha dikkatli analiz edilmelidir.
                </p>
                <p>
                  Yatırımcı için ana soru şudur: Şirket bu sermaye artırımından
                  elde edeceği kaynağı kalıcı değer yaratmak için mi kullanacak,
                  yoksa mevcut finansal sorunları geçici olarak kapatmak için
                  mi?
                </p>
              </Section>

              <Section id="yanlislar" title="Rüçhan Hakkında Yanlış Bilinenler">
                <ul className="list-disc space-y-2 pl-5">
                  {yanlisBilinenler.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </Section>

              <Section
                id="kap-takibi"
                title="Rüçhan Hakkı KAP'ta Nasıl Takip Edilir?"
              >
                <p>
                  Rüçhan hakkı sürecinde en güvenilir kaynak şirketin KAP
                  açıklamalarıdır. Sermaye artırımı bildirimlerinde SPK başvuru
                  tarihi, SPK onay tarihi, artırılan sermaye tutarı, rüçhan
                  kullanım oranı, rüçhan hakkı kullanım başlangıç ve bitiş
                  tarihleri gibi bilgiler yer alır.
                </p>
                <p>
                  Yatırımcı özellikle “Sermaye Artırımı İşlemlerine İlişkin
                  Bildirim”, “İzahname Onayı”, “Rüçhan Hakkı Kullanım Başlangıç
                  ve Bitiş Tarihleri” ve “Tasarruf Sahiplerine Satış Duyurusu”
                  başlıklı açıklamaları takip etmelidir.
                </p>
              </Section>

              <Section id="sonuc" title="Sonuç: Rüçhan Hakkı Nasıl Okunmalı?">
                <p>
                  Rüçhan hakkı, bedelli sermaye artırımlarında yatırımcının en
                  önemli haklarından biridir. Bu hak yatırımcıya yeni pay alma,
                  hakkını satma veya süreci kendi stratejisine göre yönetme
                  imkanı verir.
                </p>
                <p>
                  Ancak rüçhan hakkı pasif şekilde beklenebilecek bir konu
                  değildir. Kullanım süresi sınırlıdır ve yatırımcı kararını bu
                  süre içinde vermelidir. Hiçbir işlem yapılmadığında hak kaybı
                  yaşanabilir.
                </p>
                <p>
                  Doğru yaklaşım; şirketin bedelli gerekçesini, fon kullanım
                  planını, kullanım fiyatını, teorik fiyatı, kupon fiyatını ve
                  yatırımcının kendi nakit durumunu birlikte değerlendirmektir.
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
                Rüçhan hakkını kullanma, satma veya bedelli sermaye artırımına
                katılma kararı kişisel risk-getiri tercihlerine, güncel verilere
                ve detaylı analize göre verilmelidir.
              </section>

              <RehberAltBolumler currentHref="/rehberler/ruchan-hakki-nedir" />
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
