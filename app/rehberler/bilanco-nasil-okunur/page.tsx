import Link from "next/link";
import RehberAltBolumler from "@/components/RehberAltBolumler";
import type { Metadata } from "next";
import type { ReactNode } from "react";

const siteUrl = "https://www.hocaileborsa.com";
const title =
  "Bilanço Nasıl Okunur? Şirket Finansal Tabloları Nasıl Analiz Edilir?";
const description =
  "Bilanço nasıl okunur, gelir tablosu ve nakit akışı nasıl yorumlanır? Borçluluk, karlılık, özkaynak, FAVÖK, net borç ve finansal oranlar hakkında kapsamlı rehber.";

export const metadata: Metadata = {
  title: `${title} | Hoca İle Borsa`,
  description,
  alternates: {
    canonical: `${siteUrl}/rehberler/bilanco-nasil-okunur`,
  },
  openGraph: {
    title,
    description,
    url: `${siteUrl}/rehberler/bilanco-nasil-okunur`,
    type: "article",
  },
};

const temelTablolar = [
  {
    title: "Bilanço",
    text: "Şirketin belirli bir tarihte sahip olduğu varlıkları, borçları ve özkaynaklarını gösterir. Bilanço, şirketin finansal gücünü ve sermaye yapısını anlamak için ilk bakılması gereken tablodur.",
  },
  {
    title: "Gelir Tablosu",
    text: "Şirketin belirli bir dönemde ne kadar satış yaptığını, bu satışlardan ne kadar kar elde ettiğini ve net dönem sonucunun nasıl oluştuğunu gösterir.",
  },
  {
    title: "Nakit Akış Tablosu",
    text: "Şirketin kasasına gerçek anlamda para girip girmediğini gösterir. Net kar ile nakit üretimi arasındaki farkı anlamak için kritik öneme sahiptir.",
  },
  {
    title: "Özkaynak Değişim Tablosu",
    text: "Şirketin özkaynak kalemlerinde dönem içinde meydana gelen değişimleri gösterir. Sermaye artırımı, temettü, geçmiş yıl karları ve yeniden değerleme etkileri bu tabloda izlenebilir.",
  },
];

const bilancoKalemleri = [
  {
    title: "Dönen Varlıklar",
    text: "Nakit, ticari alacaklar, stoklar ve kısa vadede paraya dönüşmesi beklenen varlıklardan oluşur. Şirketin kısa vadeli faaliyet döngüsünü ve likidite yapısını anlamaya yardımcı olur.",
  },
  {
    title: "Duran Varlıklar",
    text: "Maddi duran varlıklar, yatırımlar, kullanım hakkı varlıkları ve uzun vadeli finansal kalemleri içerir. Sanayi, enerji ve gayrimenkul gibi varlık yoğun sektörlerde özellikle önemlidir.",
  },
  {
    title: "Kısa Vadeli Yükümlülükler",
    text: "Bir yıl içinde ödenmesi beklenen borçları gösterir. Kısa vadeli finansal borçlar, ticari borçlar ve ertelenmiş gelirler bu başlık altında takip edilir.",
  },
  {
    title: "Uzun Vadeli Yükümlülükler",
    text: "Bir yıldan uzun vadeye yayılan borçları gösterir. Uzun vadeli krediler, borçlanma araçları ve kiralama yükümlülükleri şirketin finansman yapısına dair fikir verir.",
  },
  {
    title: "Özkaynaklar",
    text: "Şirketin ortaklara ait net varlık değerini temsil eder. Ödenmiş sermaye, geçmiş yıl karları, dönem karı, yedekler ve diğer özkaynak kalemleri burada yer alır.",
  },
];

const gelirTablosuKalemleri = [
  {
    title: "Hasılat",
    text: "Şirketin ana faaliyetlerinden elde ettiği satış geliridir. Büyüyen hasılat olumlu olabilir; ancak bu büyümenin kar marjı ve nakit akışıyla desteklenmesi gerekir.",
  },
  {
    title: "Brüt Kar",
    text: "Satışlardan satışların maliyeti çıkarıldıktan sonra kalan tutardır. Üretim, ticaret ve perakende şirketlerinde fiyatlama gücünü ve maliyet yönetimini anlamak için önemlidir.",
  },
  {
    title: "Faaliyet Karı",
    text: "Şirketin ana faaliyetlerinden elde ettiği karı gösterir. Net kar tek seferlik gelirlerden etkilenebilir; bu nedenle faaliyet karı şirketin gerçek operasyonel performansını okumada önemlidir.",
  },
  {
    title: "FAVÖK",
    text: "Faiz, amortisman ve vergi öncesi kar yaklaşımıyla operasyonel performansı izlemek için kullanılır. Ancak her sektörde aynı anlamı taşımaz ve tek başına yeterli değildir.",
  },
  {
    title: "Net Kar",
    text: "Dönem sonunda ortaklara kalan karı gösterir. Net karın nasıl oluştuğu mutlaka incelenmelidir; kur farkı, ertelenmiş vergi, yatırım geliri veya tek seferlik kalemler sonucu değiştirebilir.",
  },
];

const nakitAkisiKalemleri = [
  {
    title: "Esas Faaliyetlerden Nakit Akışı",
    text: "Şirketin ana işinden nakit üretip üretmediğini gösterir. Sağlıklı bir şirkette net karın zaman içinde faaliyet nakit akışıyla desteklenmesi beklenir.",
  },
  {
    title: "Yatırım Faaliyetlerinden Nakit Akışı",
    text: "Makine, tesis, arsa, iştirak veya finansal yatırım gibi kalemlere yapılan harcamaları ve satışlardan gelen nakdi gösterir. Büyüme dönemindeki şirketlerde negatif olabilir.",
  },
  {
    title: "Finansman Faaliyetlerinden Nakit Akışı",
    text: "Kredi kullanımı, borç ödemesi, sermaye artırımı, temettü ödemesi ve benzeri finansman hareketlerini gösterir. Şirketin büyümeyi nasıl finanse ettiğini anlamaya yardımcı olur.",
  },
];

const analizAdimlari = [
  "Şirketin hangi sektörde faaliyet gösterdiğini ve iş modelinin nasıl para kazandığını anlayın.",
  "Son çeyrek verisini tek başına değil, geçmiş dönemler ve geçen yılın aynı dönemiyle karşılaştırın.",
  "Hasılat artarken brüt kar, faaliyet karı ve net karın aynı yönde ilerleyip ilerlemediğini kontrol edin.",
  "Net karın nakit akışıyla desteklenip desteklenmediğine bakın.",
  "Kısa vadeli borçların, nakit ve dönen varlıklarla karşılanabilir olup olmadığını inceleyin.",
  "Finansal borçların artış hızını, özkaynak ve karlılık ile birlikte değerlendirin.",
  "Şirketin stok ve alacak yönetiminde bozulma olup olmadığını kontrol edin.",
  "Tek seferlik gelir veya giderlerin karı ne kadar etkilediğini ayırmaya çalışın.",
  "Sektör ortalamalarıyla kıyaslama yapmadan tek başına ucuz veya pahalı yorumuna gitmeyin.",
];

const oranlar = [
  {
    title: "Cari Oran",
    text: "Dönen varlıkların kısa vadeli yükümlülüklere bölünmesiyle hesaplanır. Şirketin kısa vadeli borçlarını çevirme gücünü anlamaya yardımcı olur.",
  },
  {
    title: "Likidite Oranı",
    text: "Stoklar hariç dönen varlıkların kısa vadeli borçlara oranıdır. Özellikle stokların hızlı nakde dönmediği sektörlerde cari orana göre daha temkinli bir ölçüdür.",
  },
  {
    title: "Net Borç",
    text: "Finansal borçlardan nakit ve benzeri varlıkların çıkarılmasıyla takip edilir. Şirketin borç yükünü anlamada brüt borçtan daha faydalı olabilir.",
  },
  {
    title: "Net Borç / FAVÖK",
    text: "Şirketin operasyonel kar üretimiyle borcunu kaç yılda karşılayabileceğine dair fikir verir. Sermaye yoğun sektörlerde dikkatle yorumlanmalıdır.",
  },
  {
    title: "Brüt Kar Marjı",
    text: "Brüt karın hasılata oranıdır. Şirketin maliyetlerini ne kadar iyi yönettiğini ve ürün fiyatlama gücünü gösterir.",
  },
  {
    title: "Faaliyet Kar Marjı",
    text: "Faaliyet karının hasılata oranıdır. Ana iş kolundaki operasyonel verimliliği ölçmek için kullanılır.",
  },
  {
    title: "Net Kar Marjı",
    text: "Net karın hasılata oranıdır. Vergi, finansman giderleri, kur farkları ve diğer gelir-giderlerin nihai etkisini içerir.",
  },
  {
    title: "Özkaynak Karlılığı",
    text: "Net karın özkaynaklara oranıdır. Şirketin ortakların sermayesini ne kadar verimli kullandığını gösterir; ancak yüksek borçluluk bu oranı yapay olarak yükseltebilir.",
  },
  {
    title: "Aktif Karlılığı",
    text: "Net karın toplam varlıklara oranıdır. Şirketin sahip olduğu varlıkları kara dönüştürme başarısını anlamaya yardımcı olur.",
  },
];

const sektorFarklari = [
  {
    title: "Bankalar",
    text: "Bankalarda klasik sanayi bilançosundaki stok, ticari alacak ve net borç yorumları aynı şekilde kullanılmaz. Net faiz geliri, komisyon gelirleri, takipteki krediler, sermaye yeterliliği ve aktif kalitesi öne çıkar.",
  },
  {
    title: "Sigorta Şirketleri",
    text: "Prim üretimi, teknik kar, yatırım gelirleri, hasar/prim dengesi ve özsermaye yapısı önemlidir. Sigorta şirketleri sanayi şirketleriyle aynı oranlarla değerlendirilmemelidir.",
  },
  {
    title: "Gayrimenkul Yatırım Ortaklıkları",
    text: "Portföy değeri, kira gelirleri, ekspertiz değerleri, net aktif değer ve proje geliştirme süreci öne çıkar. Dönemsel karlar değerleme etkilerinden güçlü biçimde etkilenebilir.",
  },
  {
    title: "Sanayi Şirketleri",
    text: "Satış hacmi, brüt kar marjı, kapasite kullanımı, stok yönetimi, ihracat oranı, enerji maliyeti ve finansman giderleri birlikte analiz edilmelidir.",
  },
  {
    title: "Perakende Şirketleri",
    text: "Ciro büyümesi, mağaza sayısı, sepet büyüklüğü, stok devir hızı, kira giderleri ve operasyonel nakit akışı önemli göstergelerdir.",
  },
];

const sikYapilanHatalar = [
  "Sadece net kara bakarak şirketin iyi veya kötü olduğuna karar vermek.",
  "Tek çeyreklik sonuçla uzun vadeli eğilim varmış gibi yorum yapmak.",
  "Şirketin sektörünü dikkate almadan oran karşılaştırması yapmak.",
  "Net kar artarken nakit akışının bozulmasını görmezden gelmek.",
  "Yüksek ciro artışını kar marjı ve borçlulukla birlikte değerlendirmemek.",
  "Tek seferlik gelirleri kalıcı karlılık gibi görmek.",
  "Finansman giderlerinin net kar üzerindeki etkisini atlamak.",
  "Stok ve alacaklardaki hızlı artışları olumlu büyüme gibi yorumlamak.",
  "Bilanço açıklandıktan sonra yalnızca fiyat hareketine bakıp finansal tabloyu okumamak.",
];

const olumluSinyaller = [
  "Hasılat artışının brüt kar ve faaliyet karıyla desteklenmesi.",
  "Net karın esas faaliyetlerden nakit akışıyla uyumlu ilerlemesi.",
  "Borçluluk artarken özkaynak ve operasyonel karlılığın da güçlenmesi.",
  "Stok ve alacakların satış büyümesiyle uyumlu hareket etmesi.",
  "Finansman giderlerinin şirketin faaliyet karını baskılamaması.",
  "Kar marjlarında dönemsel değil, sürdürülebilir iyileşme görülmesi.",
  "Şirketin yatırımlarının gelecekte kapasite, verimlilik veya satış büyümesi yaratabilecek nitelikte olması.",
];

const riskSinyalleri = [
  "Satışlar artarken brüt kar veya faaliyet karının zayıflaması.",
  "Net kar var gibi görünürken faaliyet nakit akışının negatif olması.",
  "Kısa vadeli finansal borçların hızlı yükselmesi.",
  "Stokların satışlardan çok daha hızlı artması.",
  "Ticari alacakların tahsilat kalitesine dair soru işareti oluşturması.",
  "Finansman giderlerinin faaliyet karını aşındırması.",
  "Karın büyük ölçüde tek seferlik gelirlerden veya kur farkından oluşması.",
  "Özkaynakların zayıflaması veya geçmiş yıl zararlarının büyümesi.",
];

const ornekSenaryolar = [
  {
    title: "Satışlar Artıyor Ama Nakit Akışı Bozuluyor",
    text: "Bu durumda şirket kağıt üzerinde büyüyor gibi görünür; fakat satışların tahsilata dönüp dönmediği sorgulanmalıdır. Ticari alacaklar satışlardan daha hızlı artıyorsa şirket müşterilerine uzun vade tanıyor, tahsilat riski alıyor veya büyümeyi işletme sermayesiyle finanse ediyor olabilir.",
  },
  {
    title: "Net Kar Güçlü Ama Faaliyet Karı Zayıf",
    text: "Net karın yatırım geliri, kur farkı, ertelenmiş vergi veya tek seferlik varlık satışından gelmesi mümkündür. Bu senaryoda yatırımcı, şirketin ana işinden düzenli kar üretip üretmediğini anlamak için brüt kar, esas faaliyet karı ve nakit akışına dönmelidir.",
  },
  {
    title: "Borç Artıyor Ama Kapasite de Artıyor",
    text: "Borç artışı her zaman olumsuz değildir. Şirket yeni tesis, makine veya kapasite yatırımı için borçlanıyorsa bu borç gelecekte satış ve karlılık yaratabilir. Fakat yatırımın ne zaman devreye gireceği ve finansman giderinin karı ne kadar baskılayacağı izlenmelidir.",
  },
  {
    title: "Stoklar Hızlı Artıyor",
    text: "Stok artışı büyüme hazırlığı, hammadde güvenliği veya sezon etkisi nedeniyle oluşabilir. Ancak satışlar aynı hızda artmıyorsa talep zayıflığı, stok değer düşüklüğü veya nakde dönüşemeyen işletme sermayesi riski ortaya çıkabilir.",
  },
];

const faq = [
  {
    question: "Bilanço nedir?",
    answer:
      "Bilanço, şirketin belirli bir tarihte sahip olduğu varlıkları, borçları ve özkaynaklarını gösteren finansal tablodur. Şirketin mali gücünü anlamak için temel kaynaklardan biridir.",
  },
  {
    question: "Bilanço okumaya nereden başlanmalı?",
    answer:
      "Önce şirketin sektörünü ve iş modelini anlamak gerekir. Ardından varlıklar, borçlar, özkaynaklar, gelir tablosu ve nakit akışı birlikte incelenmelidir.",
  },
  {
    question: "Net kar tek başına yeterli midir?",
    answer:
      "Hayır. Net kar tek başına yeterli değildir. Net karın hangi kalemlerden oluştuğu, sürdürülebilir olup olmadığı ve nakit akışıyla desteklenip desteklenmediği mutlaka incelenmelidir.",
  },
  {
    question: "Nakit akışı neden önemlidir?",
    answer:
      "Çünkü şirket kar açıklasa bile kasasına yeterli nakit girmiyor olabilir. Esas faaliyetlerden nakit akışı, şirketin ana işinden gerçek para üretip üretmediğini gösterir.",
  },
  {
    question: "Borçlu şirket her zaman kötü müdür?",
    answer:
      "Hayır. Borç tek başına kötü değildir. Önemli olan borcun vadesi, maliyeti, hangi amaçla kullanıldığı ve şirketin bu borcu karşılayacak nakit üretip üretmediğidir.",
  },
  {
    question: "Bilanço açıklandığında hisse neden düşebilir?",
    answer:
      "Piyasa sadece açıklanan kar rakamına değil, beklentilere, marjlara, nakit akışına, borçluluğa ve gelecek dönem görünümüne de bakar. Beklentinin altında kalan sonuçlar fiyat üzerinde baskı oluşturabilir.",
  },
  {
    question: "Bilanço iyi mi kötü mü nasıl anlaşılır?",
    answer:
      "Şirketin satış büyümesi, kar marjları, borçluluk yapısı, nakit akışı, özkaynak gücü ve sektör koşulları birlikte değerlendirilmelidir. Tek bir kaleme bakarak kesin yorum yapmak doğru değildir.",
  },
  {
    question: "Bilanço analizi yatırım tavsiyesi midir?",
    answer:
      "Hayır. Bilanço analizi yatırım kararına yardımcı olan bir yöntemdir ancak tek başına yatırım tavsiyesi değildir. Teknik görünüm, değerleme, sektör riski ve kişisel risk tercihi ayrıca dikkate alınmalıdır.",
  },
];

const tableOfContents = [
  { href: "#bilanco-nedir", label: "Bilanço Nedir?" },
  { href: "#finansal-tablolar", label: "Temel Finansal Tablolar" },
  { href: "#bilanco-kalemleri", label: "Bilanço Kalemleri" },
  { href: "#gelir-tablosu", label: "Gelir Tablosu" },
  { href: "#nakit-akisi", label: "Nakit Akışı" },
  { href: "#analiz-adimlari", label: "Analiz Adımları" },
  { href: "#finansal-oranlar", label: "Finansal Oranlar" },
  { href: "#sektor-farklari", label: "Sektör Farkları" },
  { href: "#risk-sinyalleri", label: "Risk Sinyalleri" },
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

export default function BilancoNasilOkunurPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: title,
        description,
        mainEntityOfPage: `${siteUrl}/rehberler/bilanco-nasil-okunur`,
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
            name: "Bilanço Nasıl Okunur?",
            item: `${siteUrl}/rehberler/bilanco-nasil-okunur`,
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
          <span className="font-medium text-slate-700">Bilanço Nasıl Okunur?</span>
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
                Bilanço okumak, bir şirketin sadece kar açıklayıp açıklamadığını
                görmekten ibaret değildir. Sağlıklı bir analiz için bilanço,
                gelir tablosu, nakit akış tablosu, borçluluk, karlılık,
                özkaynak yapısı ve sektör dinamikleri birlikte değerlendirilmelidir.
              </p>
            </header>

            <div className="mt-8 space-y-10">
              <Section id="bilanco-nedir" title="Bilanço Nedir?">
                <p>
                  Bilanço, bir şirketin belirli bir tarihte sahip olduğu
                  varlıkları, borçları ve özkaynaklarını gösteren temel finansal
                  tablodur. En basit anlatımla bilanço, şirketin neye sahip
                  olduğunu, kime ne kadar borçlu olduğunu ve ortaklara kalan net
                  değerin ne seviyede bulunduğunu gösterir.
                </p>
                <p>
                  Bilanço yatırımcı açısından şirketin mali gücünü, borç ödeme
                  kapasitesini, büyüme yapısını ve risklerini anlamak için
                  kullanılır. Ancak tek başına bilanço yeterli değildir. Gelir
                  tablosu ve nakit akış tablosu ile birlikte okunmadığında yanlış
                  sonuçlara götürebilir.
                </p>
                <p>
                  Bu nedenle doğru soru sadece “şirket kar etti mi?” değildir.
                  Doğru soru; şirket bu karı ana faaliyetlerinden mi elde etti,
                  nakit üretebildi mi, borçlarını çevirebiliyor mu, özkaynakları
                  güçleniyor mu ve büyüme sürdürülebilir mi sorularıdır.
                </p>
              </Section>

              <Section
                id="finansal-tablolar"
                title="Finansal Tabloların Temel Parçaları"
              >
                <p>
                  Borsa İstanbul şirketlerinin finansal sonuçları genellikle
                  birkaç ana tablo üzerinden incelenir. Yatırımcı bu tabloları
                  birlikte okuduğunda şirketin gerçek durumunu daha sağlıklı
                  değerlendirebilir.
                </p>
                <div className="grid gap-3">
                  {temelTablolar.map((item) => (
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

              <Section id="bilanco-kalemleri" title="Bilançoda Hangi Kalemlere Bakılır?">
                <p>
                  Bilançoda varlıklar, yükümlülükler ve özkaynaklar temel üç
                  başlığı oluşturur. Bu başlıklar birlikte incelendiğinde
                  şirketin kaynaklarını nasıl kullandığı ve bu kaynakları nasıl
                  finanse ettiği anlaşılır.
                </p>
                <div className="grid gap-3">
                  {bilancoKalemleri.map((item) => (
                    <div key={item.title} className="rounded-xl border border-slate-200 p-4">
                      <h3 className="font-bold text-slate-900">{item.title}</h3>
                      <p className="mt-2 text-sm leading-7 text-slate-600">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </Section>

              <Section id="gelir-tablosu" title="Gelir Tablosu Nasıl Okunur?">
                <p>
                  Gelir tablosu, şirketin belirli bir dönemde ne kadar satış
                  yaptığını ve bu satışlardan hangi aşamalarda ne kadar kar elde
                  ettiğini gösterir. Yatırımcı için asıl önemli nokta, karın
                  hangi kalemlerden oluştuğunu anlamaktır.
                </p>
                <p>
                  Bir şirketin net karı artmış olabilir. Fakat bu artış ana
                  faaliyetlerden değil, kur farkı geliri, yatırım geliri veya tek
                  seferlik bir satıştan kaynaklanıyorsa sürdürülebilir olmayabilir.
                  Bu yüzden hasılat, brüt kar, faaliyet karı, finansman giderleri
                  ve net kar birlikte incelenmelidir.
                </p>
                <div className="grid gap-3">
                  {gelirTablosuKalemleri.map((item) => (
                    <div key={item.title} className="rounded-xl border border-slate-200 p-4">
                      <h3 className="font-bold text-slate-900">{item.title}</h3>
                      <p className="mt-2 text-sm leading-7 text-slate-600">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </Section>

              <Section id="nakit-akisi" title="Nakit Akış Tablosu Neden Önemlidir?">
                <p>
                  Nakit akış tablosu, şirketin dönem içinde gerçek anlamda para
                  üretip üretmediğini gösterir. Net kar muhasebe kurallarıyla
                  oluşur; ancak nakit akışı şirketin kasasına giren ve kasasından
                  çıkan parayı gösterir.
                </p>
                <p>
                  Bir şirket kar açıklasa bile faaliyetlerinden nakit üretemiyor
                  olabilir. Bu durum özellikle alacakların şiştiği, stokların hızla
                  arttığı veya satışların tahsilata dönüşmediği dönemlerde ortaya
                  çıkabilir. Bu nedenle nakit akışı, bilanço analizinde mutlaka
                  ayrı başlık olarak incelenmelidir.
                </p>
                <div className="grid gap-3">
                  {nakitAkisiKalemleri.map((item) => (
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

              <Section id="analiz-adimlari" title="Bilanço Analizi Nasıl Yapılır?">
                <p>
                  Bilanço analizi bir kontrol listesi gibi düşünülmelidir. Tek bir
                  oran veya tek bir kar rakamı şirket hakkında kesin karar vermek
                  için yeterli değildir. Şirketin geçmiş performansı, sektör
                  dinamikleri ve finansal tablo kalemleri birlikte okunmalıdır.
                </p>
                <ul className="list-disc space-y-2 pl-5">
                  {analizAdimlari.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </Section>

              <Section id="finansal-oranlar" title="Bilanço Okurken Kullanılan Temel Finansal Oranlar">
                <p>
                  Finansal oranlar, şirketleri karşılaştırmak ve dönemler
                  arasındaki değişimi izlemek için kullanılır. Ancak oranlar tek
                  başına yorumlanmamalıdır. Aynı oran, farklı sektörlerde farklı
                  anlamlara gelebilir.
                </p>
                <div className="grid gap-3">
                  {oranlar.map((item) => (
                    <div key={item.title} className="rounded-xl border border-slate-200 p-4">
                      <h3 className="font-bold text-slate-900">{item.title}</h3>
                      <p className="mt-2 text-sm leading-7 text-slate-600">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </Section>

              <Section id="karlilik" title="Karlılık Nasıl Yorumlanır?">
                <p>
                  Karlılık analizinde sadece net kar rakamına bakmak yeterli
                  değildir. Hasılat artarken brüt kar marjı düşüyorsa şirket
                  maliyet baskısı yaşıyor olabilir. Faaliyet karı zayıflıyorsa ana
                  iş kolunda verimlilik sorunu oluşabilir. Net kar güçlü görünse
                  bile bu kar tek seferlik gelirlerden kaynaklanıyorsa gelecek
                  dönemler için aynı performans beklenmeyebilir.
                </p>
                <p>
                  Sağlıklı bir bilanço yorumunda karın kalitesi incelenmelidir.
                  Karın ana faaliyetlerden gelmesi, nakit akışıyla desteklenmesi
                  ve borçluluk artışıyla birlikte bozulmaması yatırımcı açısından
                  daha güçlü bir işaret kabul edilir.
                </p>
              </Section>

              <Section id="borcluluk" title="Borçluluk Nasıl Analiz Edilir?">
                <p>
                  Borçlu şirket her zaman kötü şirket değildir. Önemli olan borcun
                  hangi amaçla kullanıldığı, vadesi, maliyeti ve şirketin bu borcu
                  ödeyebilecek nakit üretip üretmediğidir. Büyüme yatırımı için
                  kullanılan yönetilebilir borç ile faaliyet zararını çevirmek için
                  sürekli artan borç aynı şekilde yorumlanmamalıdır.
                </p>
                <p>
                  Yatırımcı kısa vadeli finansal borçların toplam borç içindeki
                  payına, nakit seviyesine, finansman giderlerinin faaliyet karını
                  ne kadar baskıladığına ve net borcun dönemler içinde nasıl
                  değiştiğine bakmalıdır.
                </p>
              </Section>

              <Section id="stok-alacak" title="Stoklar ve Ticari Alacaklar Neden Önemlidir?">
                <p>
                  Stok ve alacak kalemleri şirketin satış kalitesini anlamak için
                  önemlidir. Stoklar satışlardan çok daha hızlı artıyorsa talep
                  zayıflığı, üretim planlama sorunu veya fiyatlama riski oluşabilir.
                  Ticari alacaklar hızlı artıyorsa şirket satış yapıyor gibi
                  görünse de tahsilat tarafında zorluk yaşayabilir.
                </p>
                <p>
                  Bu nedenle hasılat artışı tek başına olumlu değildir. Satışların
                  tahsilata dönüşmesi, stokların yönetilebilir seviyede kalması ve
                  işletme sermayesi ihtiyacının şirketi aşırı borçlanmaya
                  zorlamaması gerekir.
                </p>
              </Section>

              <Section id="sektor-farklari" title="Sektöre Göre Bilanço Okuma Farkları">
                <p>
                  Her şirket aynı yöntemle analiz edilmez. Banka, sigorta,
                  gayrimenkul yatırım ortaklığı, sanayi ve perakende şirketlerinde
                  öne çıkan bilanço kalemleri farklıdır. Bu nedenle şirketi kendi
                  sektörüyle karşılaştırmak daha sağlıklı sonuç verir.
                </p>
                <div className="grid gap-3">
                  {sektorFarklari.map((item) => (
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

              <Section id="olumlu-sinyaller" title="Bilançoda Olumlu Sinyaller Nelerdir?">
                <p>
                  Güçlü bir bilançoda genellikle büyüme, karlılık ve nakit akışı
                  birbirini destekler. Şirket satışlarını artırırken marjlarını
                  koruyabiliyor, borçluluğunu yönetebiliyor ve ana faaliyetlerinden
                  nakit üretebiliyorsa bilanço kalitesi daha olumlu okunabilir.
                </p>
                <ul className="list-disc space-y-2 pl-5">
                  {olumluSinyaller.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </Section>

              <Section id="risk-sinyalleri" title="Bilançoda Risk Sinyalleri Nelerdir?">
                <p>
                  Bazı finansal tablo kalemleri şirketin gelecek dönem performansı
                  açısından uyarı işareti verebilir. Bu sinyaller tek başına kesin
                  olumsuzluk anlamına gelmez; fakat yatırımcının daha detaylı
                  inceleme yapmasını gerektirir.
                </p>
                <ul className="list-disc space-y-2 pl-5">
                  {riskSinyalleri.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </Section>

              <Section id="ornek-senaryolar" title="Örnek Bilanço Okuma Senaryoları">
                <p>
                  Bilanço analizi aynı rakamı her şirkette aynı şekilde yorumlamak
                  değildir. Aşağıdaki senaryolar, yatırımcının finansal tabloda
                  gördüğü veriyi şirketin iş modeliyle birlikte nasıl okuması
                  gerektiğini gösterir.
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
                <div className="rounded-xl border border-blue-100 bg-blue-50 p-4 text-sm leading-7 text-blue-900">
                  <strong>Pratik kontrol:</strong> Bir bilanço iyi göründüğünde
                  önce “Bu performans ana faaliyetten mi geliyor, nakde dönüyor
                  mu, borçla mı finanse ediliyor ve gelecek çeyrekte tekrar
                  edilebilir mi?” sorularını sorun.
                </div>
              </Section>

              <Section id="hatalar" title="Bilanço Okurken En Sık Yapılan Hatalar">
                <p>
                  Bilanço analizinde yapılan hatalar yatırımcıyı yanlış sonuca
                  götürebilir. Özellikle tek kaleme bakarak yorum yapmak, şirketin
                  sektörünü dikkate almamak ve nakit akışını göz ardı etmek en
                  yaygın sorunlardır.
                </p>
                <ul className="list-disc space-y-2 pl-5">
                  {sikYapilanHatalar.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </Section>

              <Section id="sonuc" title="Sonuç: Bilanço Nasıl Okunmalı?">
                <p>
                  Bilanço okumak, şirketin finansal fotoğrafını doğru
                  yorumlamaktır. Bu fotoğrafın netleşmesi için bilanço, gelir
                  tablosu ve nakit akış tablosu birlikte değerlendirilmelidir.
                  Sadece net kar rakamı veya sadece hasılat büyümesi şirketin
                  gerçek durumunu anlamak için yeterli değildir.
                </p>
                <p>
                  Doğru yaklaşım; şirketin iş modelini anlamak, finansal tablo
                  kalemlerini dönemsel olarak karşılaştırmak, nakit akışını kontrol
                  etmek, borçluluğu analiz etmek ve sektörel farkları dikkate
                  almaktır. Bilanço analizi yatırımcıya önemli bir bakış açısı
                  kazandırır ancak yatırım kararının tek dayanağı olmamalıdır.
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
                Yatırım kararları, kişisel risk-getiri tercihleri, güncel finansal
                veriler ve detaylı analiz dikkate alınarak verilmelidir.
              </section>

              <RehberAltBolumler currentHref="/rehberler/bilanco-nasil-okunur" />
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
