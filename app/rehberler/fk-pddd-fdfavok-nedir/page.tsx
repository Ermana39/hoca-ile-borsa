import Link from "next/link";
import RehberAltBolumler from "@/components/RehberAltBolumler";
import type { Metadata } from "next";
import type { ReactNode } from "react";

const siteUrl = "https://www.hocaileborsa.com";
const title = "F/K, PD/DD ve FD/FAVÖK Nedir? Hisse Değerleme Oranları Nasıl Okunur?";
const description =
  "F/K, PD/DD ve FD/FAVÖK oranı nedir, nasıl hesaplanır ve yatırımcı açısından ne anlama gelir? Hisse değerleme oranlarını doğru yorumlama rehberi.";

export const metadata: Metadata = {
  title: `${title} | Hoca İle Borsa`,
  description,
  alternates: {
    canonical: `${siteUrl}/rehberler/fk-pddd-fdfavok-nedir`,
  },
  openGraph: {
    title,
    description,
    url: `${siteUrl}/rehberler/fk-pddd-fdfavok-nedir`,
    type: "article",
  },
};

const oranKartlari = [
  {
    title: "F/K Oranı",
    subtitle: "Fiyat / Kazanç",
    text: "Şirketin piyasa değerinin net karına göre kaç kat seviyesinde fiyatlandığını gösterir. Karlı şirketlerde anlamlıdır; zarar eden şirketlerde yanıltıcı veya anlamsız hale gelebilir.",
  },
  {
    title: "PD/DD Oranı",
    subtitle: "Piyasa Değeri / Defter Değeri",
    text: "Şirketin piyasa değerinin özkaynaklarına göre kaç kat seviyesinde fiyatlandığını gösterir. Bankalar, holdingler ve varlık ağırlıklı şirketlerde daha sık kullanılır.",
  },
  {
    title: "FD/FAVÖK Oranı",
    subtitle: "Firma Değeri / Faiz, Amortisman ve Vergi Öncesi Kar",
    text: "Şirketin operasyonel karlılığına göre toplam firma değerini ölçer. Borçluluk etkisini de dikkate aldığı için özellikle sanayi, perakende ve hizmet şirketlerinde takip edilir.",
  },
];

const temelKavramlar = [
  {
    title: "Piyasa Değeri",
    text: "Şirketin borsadaki toplam değeridir. Hisse fiyatı ile toplam pay sayısının çarpılmasıyla bulunur. Yatırımcıların şirkete piyasada biçtiği değeri gösterir.",
  },
  {
    title: "Net Kar",
    text: "Şirketin gelirlerinden giderleri, finansman maliyetleri, vergileri ve diğer kalemleri çıktıktan sonra kalan dönem karıdır. F/K oranında kullanılan ana kalemdir.",
  },
  {
    title: "Özkaynak",
    text: "Şirketin varlıklarından borçları çıkarıldığında kalan muhasebe değeridir. PD/DD oranında defter değeri olarak dikkate alınır.",
  },
  {
    title: "Firma Değeri",
    text: "Piyasa değerine net borcun eklenmesiyle hesaplanır. Sadece özsermaye değerini değil, şirketin borç dahil toplam ekonomik değerini göstermeye çalışır.",
  },
  {
    title: "FAVÖK",
    text: "Faiz, amortisman ve vergi öncesi kar anlamına gelir. Şirketin ana faaliyetlerinden yarattığı operasyonel karlılığı daha net görmek için kullanılır.",
  },
];

const fkDikkat = [
  "Zarar eden şirketlerde F/K oranı anlamlı değildir.",
  "Tek seferlik yüksek karlar F/K oranını olduğundan ucuz gösterebilir.",
  "Döngüsel sektörlerde karlar dönemsel olarak sert değişebilir.",
  "F/K oranı mutlaka şirketin büyüme hızı ve sektör ortalamasıyla birlikte yorumlanmalıdır.",
  "Düşük F/K her zaman ucuzluk, yüksek F/K her zaman pahalılık anlamına gelmez.",
];

const pdddDikkat = [
  "Özkaynak kalitesi düşükse PD/DD oranı yanıltıcı olabilir.",
  "Zarar eden şirketlerde özkaynaklar zamanla eriyebilir.",
  "Varlıkların bilançodaki değeri piyasa değerini tam yansıtmayabilir.",
  "Teknoloji ve marka değeri yüksek şirketlerde PD/DD doğal olarak yüksek olabilir.",
  "Bankalar ve varlık ağırlıklı şirketlerde daha anlamlı kullanılabilir.",
];

const fdfavokDikkat = [
  "Yüksek borçlu şirketlerde firma değeri arttığı için oran yüksek çıkabilir.",
  "FAVÖK güçlü görünse bile şirketin net karı zayıf olabilir.",
  "Amortisman, yatırım harcaması ve finansman giderleri ayrıca incelenmelidir.",
  "Aynı sektördeki şirketlerle karşılaştırıldığında daha anlamlıdır.",
  "Negatif FAVÖK üreten şirketlerde FD/FAVÖK oranı sağlıklı yorumlanamaz.",
];

const yanlislar = [
  "Sadece düşük F/K oranına bakarak hisse ucuz demek.",
  "PD/DD oranını her sektörde aynı şekilde yorumlamak.",
  "FD/FAVÖK oranını borçluluk ve nakit pozisyonunu incelemeden değerlendirmek.",
  "Tek dönemlik finansal sonuçlarla kalıcı değerleme kararı vermek.",
  "Şirketin büyüme potansiyelini, sektör riskini ve nakit akışını yok saymak.",
  "Oranları geçmiş yıllar ve sektör ortalamalarıyla karşılaştırmadan yorumlamak.",
];

const kullanimAdimlari = [
  "Önce şirketin hangi sektörde faaliyet gösterdiğini belirleyin.",
  "Son finansal tablolardaki net kar, özkaynak, net borç ve FAVÖK kalemlerini inceleyin.",
  "F/K, PD/DD ve FD/FAVÖK oranlarını tek başına değil, birlikte değerlendirin.",
  "Aynı sektördeki benzer şirketlerle karşılaştırma yapın.",
  "Şirketin geçmiş dönem çarpanlarıyla bugünkü çarpanlarını karşılaştırın.",
  "Büyüme, karlılık, borçluluk, nakit akışı ve temettü politikasını ayrıca analiz edin.",
  "Tek seferlik gelir veya giderlerin oranları bozup bozmadığını kontrol edin.",
];

const sektorOranHaritasi = [
  {
    title: "Bankalar",
    text: "Bankalarda PD/DD ve özkaynak karlılığı daha sık birlikte okunur. F/K kullanılabilir; ancak net faiz marjı, takipteki krediler, sermaye yeterliliği ve aktif kalitesi dikkate alınmadan yorum eksik kalır.",
  },
  {
    title: "Sanayi Şirketleri",
    text: "F/K ve FD/FAVÖK birlikte daha anlamlıdır. Net borç, kapasite kullanımı, ihracat oranı, enerji maliyeti ve FAVÖK marjı değerleme çarpanının neden düşük veya yüksek olduğunu açıklayabilir.",
  },
  {
    title: "Perakende Şirketleri",
    text: "FD/FAVÖK, mağaza büyümesi, stok devir hızı ve operasyonel nakit akışıyla birlikte okunmalıdır. Yüksek ciro büyümesi, düşük marj veya yüksek kira gideri nedeniyle değer yaratmayabilir.",
  },
  {
    title: "GYO ve Holdingler",
    text: "PD/DD ve net aktif değer yaklaşımı öne çıkar. Portföy değerleri, iştirak iskontosu, kira gelirleri, değerleme kazançları ve borç yapısı ayrıca incelenmelidir.",
  },
];

const ornekSenaryolar = [
  {
    title: "Düşük F/K Ama Yüksek Borç",
    text: "Şirket net kara göre ucuz görünebilir; fakat net borcu çok yüksekse firma değeri artar ve FD/FAVÖK oranı aynı ucuzluğu göstermeyebilir. Bu senaryoda düşük F/K tek başına yeterli değildir.",
  },
  {
    title: "Yüksek PD/DD Ama Güçlü Özkaynak Karlılığı",
    text: "Bazı şirketler defter değerinin üzerinde fiyatlanır çünkü özkaynaklarını yüksek verimle kara dönüştürür. Bu durumda yüksek PD/DD, güçlü ve sürdürülebilir özkaynak karlılığıyla destekleniyorsa daha anlamlı hale gelir.",
  },
  {
    title: "Düşük FD/FAVÖK Ama Zayıf Nakit Akışı",
    text: "FAVÖK güçlü görünürken işletme sermayesi ihtiyacı yüksek olabilir. Alacaklar ve stoklar nakdi tüketiyorsa düşük FD/FAVÖK oranı tek başına ucuzluk sinyali vermeyebilir.",
  },
  {
    title: "Yüksek F/K Ama Hızlı Büyüme",
    text: "Hızlı büyüyen şirketler piyasada yüksek F/K ile fiyatlanabilir. Burada kritik konu, büyümenin kar marjı ve nakit akışıyla desteklenip desteklenmediğidir.",
  },
];

const faq = [
  {
    question: "F/K oranı nedir?",
    answer:
      "F/K oranı, şirketin piyasa değerinin net karına bölünmesiyle hesaplanan fiyat kazanç oranıdır. Şirketin elde ettiği kara göre kaç kat fiyatlandığını gösterir.",
  },
  {
    question: "Düşük F/K oranı her zaman ucuz hisse anlamına gelir mi?",
    answer:
      "Hayır. Düşük F/K oranı bazen ucuzluk göstergesi olabilir ancak şirketin karı geçici olarak yükselmiş, büyümesi yavaşlamış veya sektörel riski artmış olabilir. Bu nedenle tek başına yeterli değildir.",
  },
  {
    question: "PD/DD oranı nedir?",
    answer:
      "PD/DD oranı, şirketin piyasa değerinin özkaynaklarına bölünmesiyle hesaplanır. Şirketin defter değerine göre piyasada kaç kat fiyatlandığını gösterir.",
  },
  {
    question: "PD/DD oranı en çok hangi şirketlerde kullanılır?",
    answer:
      "PD/DD oranı bankalar, holdingler, gayrimenkul yatırım ortaklıkları ve varlık ağırlıklı şirketlerde daha sık kullanılır. Ancak özkaynak kalitesi ayrıca incelenmelidir.",
  },
  {
    question: "FD/FAVÖK oranı nedir?",
    answer:
      "FD/FAVÖK oranı, şirketin firma değerinin FAVÖK kalemine bölünmesiyle hesaplanır. Operasyonel karlılığa göre şirketin toplam değerini ölçmeye yardımcı olur.",
  },
  {
    question: "F/K mı FD/FAVÖK mü daha önemlidir?",
    answer:
      "Tek bir oran her durumda daha önemli değildir. F/K net kar odaklıdır, FD/FAVÖK ise operasyonel karlılık ve borçluluk etkisini birlikte değerlendirmeye yardımcı olur. Sektöre ve şirket yapısına göre birlikte kullanılmalıdır.",
  },
  {
    question: "Zarar eden şirkette F/K oranı kullanılır mı?",
    answer:
      "Zarar eden şirkette F/K oranı sağlıklı çalışmaz. Çünkü net kar negatif olduğu için oran anlamsız hale gelir. Bu durumda satış büyümesi, brüt kar marjı, faaliyet karı, nakit akışı ve borçluluk gibi kalemlere bakılmalıdır.",
  },
  {
    question: "Değerleme oranları yatırım tavsiyesi midir?",
    answer:
      "Hayır. Değerleme oranları analiz aracıdır, yatırım tavsiyesi değildir. Yatırım kararı verilmeden önce şirketin finansalları, sektörü, riskleri, büyüme potansiyeli ve piyasa koşulları birlikte değerlendirilmelidir.",
  },
];

const tableOfContents = [
  { href: "#degerleme-oranlari-nedir", label: "Değerleme Oranları Nedir?" },
  { href: "#temel-kavramlar", label: "Temel Kavramlar" },
  { href: "#fk-orani", label: "F/K Oranı" },
  { href: "#pddd-orani", label: "PD/DD Oranı" },
  { href: "#fdfavok-orani", label: "FD/FAVÖK Oranı" },
  { href: "#karsilastirma", label: "Oranlar Nasıl Karşılaştırılır?" },
  { href: "#yatirimci-icin", label: "Yatırımcı İçin Anlamı" },
  { href: "#sektor-haritasi", label: "Sektörlere Göre Oranlar" },
  { href: "#ornek-senaryolar", label: "Örnek Senaryolar" },
  { href: "#sik-yapilan-hatalar", label: "Sık Yapılan Hatalar" },
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

export default function DegerlemeOranlariPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: title,
        description,
        mainEntityOfPage: `${siteUrl}/rehberler/fk-pddd-fdfavok-nedir`,
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
            name: "Değerleme Oranları",
            item: `${siteUrl}/rehberler/fk-pddd-fdfavok-nedir`,
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
          <span className="font-medium text-slate-700">Değerleme Oranları</span>
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
                F/K, PD/DD ve FD/FAVÖK; borsada şirket değerlemesi yapılırken
                en çok kullanılan oranlar arasında yer alır. Bu oranlar bir
                hissenin ucuz mu pahalı mı göründüğünü anlamaya yardımcı olur;
                ancak tek başına kesin alım veya satım kararı verdirmez.
              </p>
            </header>

            <div className="mt-8 space-y-10">
              <Section id="degerleme-oranlari-nedir" title="Değerleme Oranları Nedir?">
                <p>
                  Değerleme oranları, bir şirketin borsadaki fiyatının finansal
                  performansına, özkaynaklarına veya operasyonel karlılığına göre
                  hangi seviyede olduğunu gösteren göstergelerdir. Yatırımcılar
                  bu oranları kullanarak şirketleri kendi geçmişleriyle, sektör
                  ortalamalarıyla ve benzer şirketlerle karşılaştırabilir.
                </p>
                <p>
                  En sık kullanılan değerleme oranları arasında F/K, PD/DD ve
                  FD/FAVÖK öne çıkar. F/K net kara, PD/DD özkaynaklara, FD/FAVÖK
                  ise operasyonel karlılığa ve borçluluk etkisine odaklanır.
                </p>
                <p>
                  Bu oranların hiçbiri tek başına bir hissenin kesin ucuz veya
                  pahalı olduğunu göstermez. Şirketin büyüme potansiyeli, sektör
                  yapısı, borçluluk seviyesi, nakit akışı ve karlılık kalitesi
                  birlikte değerlendirilmelidir.
                </p>

                <div className="grid gap-3 md:grid-cols-3">
                  {oranKartlari.map((item) => (
                    <div
                      key={item.title}
                      className="rounded-xl border border-slate-200 bg-slate-50 p-4"
                    >
                      <h3 className="font-bold text-slate-900">{item.title}</h3>
                      <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-blue-700">
                        {item.subtitle}
                      </p>
                      <p className="mt-2 text-sm leading-7 text-slate-600">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </Section>

              <Section id="temel-kavramlar" title="Oranları Anlamak İçin Temel Kavramlar">
                <p>
                  F/K, PD/DD ve FD/FAVÖK oranlarını doğru okuyabilmek için önce
                  bazı temel finansal kavramları bilmek gerekir. Çünkü oranların
                  her biri farklı bilanço veya gelir tablosu kalemlerine dayanır.
                </p>
                <div className="grid gap-3">
                  {temelKavramlar.map((item) => (
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

              <Section id="fk-orani" title="F/K Oranı Nedir?">
                <p>
                  F/K oranı, fiyat kazanç oranı anlamına gelir. Şirketin piyasa
                  değerinin net karına bölünmesiyle hesaplanır. Bu oran,
                  yatırımcıların şirketin elde ettiği kara karşılık borsada kaç
                  kat değer biçtiğini gösterir.
                </p>
                <div className="rounded-xl border border-blue-100 bg-blue-50 p-4 text-blue-900">
                  <strong>Formül:</strong> F/K = Piyasa Değeri / Net Kar
                </div>
                <p>
                  Basit anlatımla F/K oranı, şirketin mevcut kar seviyesiyle
                  piyasa değerinin kaç yılda karşılanabileceğini göstermeye
                  çalışan bir çarpandır. Ancak bu yorum yalnızca karın sürdürülebilir
                  olduğu varsayımı altında anlamlıdır.
                </p>
                <p>
                  Düşük F/K oranı bazen şirketin ucuz fiyatlandığını gösterebilir.
                  Fakat her düşük F/K ucuzluk anlamına gelmez. Şirketin karı tek
                  seferlik bir gelirle yükselmiş olabilir, sektöründe daralma
                  başlayabilir veya piyasa şirketin gelecek dönem karlarında düşüş
                  bekliyor olabilir.
                </p>
                <p>
                  Yüksek F/K oranı da her zaman pahalılık anlamına gelmez. Hızlı
                  büyüyen, karını düzenli artıran ve güçlü beklentilere sahip
                  şirketler piyasada daha yüksek F/K ile işlem görebilir.
                </p>
                <h3 className="pt-2 text-lg font-bold text-slate-900">
                  F/K Oranında Dikkat Edilmesi Gerekenler
                </h3>
                <ul className="list-disc space-y-2 pl-5">
                  {fkDikkat.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </Section>

              <Section id="pddd-orani" title="PD/DD Oranı Nedir?">
                <p>
                  PD/DD oranı, piyasa değeri / defter değeri oranıdır. Şirketin
                  piyasa değerinin özkaynaklarına bölünmesiyle hesaplanır. Bu
                  oran, şirketin muhasebe değerine göre piyasada kaç kat
                  fiyatlandığını gösterir.
                </p>
                <div className="rounded-xl border border-blue-100 bg-blue-50 p-4 text-blue-900">
                  <strong>Formül:</strong> PD/DD = Piyasa Değeri / Özkaynak
                </div>
                <p>
                  PD/DD oranı özellikle bankalar, holdingler, gayrimenkul yatırım
                  ortaklıkları ve varlık ağırlıklı şirketlerde daha sık takip
                  edilir. Çünkü bu tür şirketlerde özkaynak büyüklüğü, şirketin
                  finansal yapısını anlamak için önemli bir göstergedir.
                </p>
                <p>
                  PD/DD oranının düşük olması, şirketin defter değerine yakın
                  veya defter değerinin altında fiyatlandığını gösterebilir. Ancak
                  bu durum her zaman fırsat anlamına gelmez. Şirket zarar ediyorsa,
                  özkaynakları zayıflıyorsa veya varlık kalitesi düşükse düşük
                  PD/DD oranı değer tuzağına dönüşebilir.
                </p>
                <p>
                  Yüksek PD/DD oranı ise piyasanın şirkete defter değerinin
                  üzerinde değer biçtiğini gösterir. Güçlü karlılık, yüksek özkaynak
                  verimliliği, marka gücü ve büyüme beklentisi bu durumu
                  destekleyebilir.
                </p>
                <h3 className="pt-2 text-lg font-bold text-slate-900">
                  PD/DD Oranında Dikkat Edilmesi Gerekenler
                </h3>
                <ul className="list-disc space-y-2 pl-5">
                  {pdddDikkat.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </Section>

              <Section id="fdfavok-orani" title="FD/FAVÖK Oranı Nedir?">
                <p>
                  FD/FAVÖK oranı, firma değerinin FAVÖK kalemine bölünmesiyle
                  hesaplanır. Firma değeri, piyasa değerine net borcun eklenmesiyle
                  bulunur. Bu nedenle FD/FAVÖK oranı sadece hisse fiyatını değil,
                  şirketin borçluluk yapısını da dikkate alır.
                </p>
                <div className="rounded-xl border border-blue-100 bg-blue-50 p-4 text-blue-900">
                  <strong>Formül:</strong> FD/FAVÖK = Firma Değeri / FAVÖK
                </div>
                <p>
                  FAVÖK, şirketin faiz, amortisman ve vergi öncesi karını ifade
                  eder. Bu kalem, şirketin ana faaliyetlerinden ne kadar operasyonel
                  kar üretebildiğini anlamaya yardımcı olur. Bu nedenle FD/FAVÖK
                  oranı özellikle sanayi, perakende, hizmet ve üretim şirketlerinde
                  sık kullanılır.
                </p>
                <p>
                  FD/FAVÖK oranı düşük olan bir şirket, operasyonel karlılığına
                  göre daha makul fiyatlanıyor olabilir. Ancak şirketin borçluluğu,
                  yatırım ihtiyacı, amortisman giderleri ve nakit akışı ayrıca
                  incelenmeden bu oran tek başına yeterli değildir.
                </p>
                <p>
                  FD/FAVÖK oranı, farklı borçluluk seviyelerine sahip şirketleri
                  karşılaştırırken F/K oranına göre daha dengeli bir bakış
                  sunabilir. Çünkü net borç firma değeri içinde dikkate alınır.
                </p>
                <h3 className="pt-2 text-lg font-bold text-slate-900">
                  FD/FAVÖK Oranında Dikkat Edilmesi Gerekenler
                </h3>
                <ul className="list-disc space-y-2 pl-5">
                  {fdfavokDikkat.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </Section>

              <Section id="karsilastirma" title="F/K, PD/DD ve FD/FAVÖK Birlikte Nasıl Karşılaştırılır?">
                <p>
                  Değerleme oranları tek başına değil, birlikte okunduğunda daha
                  anlamlı hale gelir. Bir şirketin F/K oranı düşük olabilir ama
                  borçluluğu çok yüksekse FD/FAVÖK oranı daha riskli bir tablo
                  gösterebilir. Benzer şekilde PD/DD oranı düşük olabilir ancak
                  özkaynak karlılığı zayıfsa bu durum yatırımcı açısından yeterli
                  olmayabilir.
                </p>
                <p>
                  Sağlıklı bir karşılaştırma için şirket önce kendi sektörüyle
                  kıyaslanmalıdır. Banka ile sanayi şirketinin, teknoloji şirketi
                  ile gayrimenkul yatırım ortaklığının aynı çarpanlarla
                  değerlendirilmesi doğru sonuç vermeyebilir.
                </p>
                <p>
                  Ayrıca şirketin geçmiş dönem çarpanları da incelenmelidir. Bir
                  şirket geçmişte sürekli belirli bir F/K aralığında işlem görürken
                  bugün çok farklı bir seviyedeyse bunun nedeni araştırılmalıdır.
                  Karlılık mı değişti, büyüme beklentisi mi bozuldu, borçluluk mu
                  arttı, yoksa piyasa genelinde değerlemeler mi değişti?
                </p>
              </Section>

              <Section id="yatirimci-icin" title="Yatırımcı Açısından Bu Oranlar Ne İfade Eder?">
                <p>
                  F/K oranı yatırımcıya şirketin net karına göre nasıl
                  fiyatlandığını gösterir. Karlılığı düzenli artan şirketlerde
                  F/K oranı, büyüme beklentisiyle birlikte yorumlanmalıdır.
                </p>
                <p>
                  PD/DD oranı şirketin özkaynaklarına göre piyasa değerini
                  gösterir. Bu oran, özellikle özkaynak yapısı güçlü veya varlık
                  tabanı önemli olan şirketlerde yatırımcıya fikir verebilir.
                </p>
                <p>
                  FD/FAVÖK oranı ise şirketin operasyonel karlılığına göre toplam
                  firma değerini ölçer. Borçluluğu yüksek olan şirketlerde bu oran
                  daha dikkatli incelenmelidir. Çünkü sadece hisse fiyatı değil,
                  şirketin net borcu da değerlemeye dahil edilir.
                </p>
                <p>
                  Yatırımcı için en doğru yaklaşım, bu oranları şirketin bilançosu,
                  gelir tablosu, nakit akışı, sektör görünümü ve büyüme hikayesiyle
                  birlikte değerlendirmektir.
                </p>

                <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <h3 className="font-bold text-slate-900">
                    Pratik Okuma Sırası
                  </h3>
                  <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-600">
                    {kullanimAdimlari.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </Section>

              <Section id="sektor-haritasi" title="Sektörlere Göre Hangi Oran Daha Anlamlıdır?">
                <p>
                  Aynı çarpan her sektörde aynı anlama gelmez. Bir banka için
                  düşük PD/DD önemli olabilirken, hızlı büyüyen bir teknoloji
                  şirketinde F/K veya FD/FAVÖK daha farklı yorumlanabilir.
                  Sağlıklı analiz için oran önce sektörün iş modeliyle eşleştirilmelidir.
                </p>
                <div className="grid gap-3">
                  {sektorOranHaritasi.map((item) => (
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

              <Section id="ornek-senaryolar" title="Örnek Değerleme Senaryoları">
                <p>
                  Değerleme oranlarının faydası, tek bir rakam vermekten çok
                  yatırımcıya doğru soruları sordurmasıdır. Aşağıdaki örnekler,
                  çarpanları mekanik değil analitik okumaya yardımcı olur.
                </p>
                <div className="grid gap-3">
                  {ornekSenaryolar.map((item) => (
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

              <Section id="sik-yapilan-hatalar" title="Değerleme Oranlarında Sık Yapılan Hatalar">
                <p>
                  Yeni yatırımcıların en sık yaptığı hata, bir oranı tek başına
                  yatırım gerekçesi haline getirmektir. Oysa değerleme oranları
                  sadece analiz aracıdır. Oranların arkasındaki finansal kalite
                  incelenmeden verilen kararlar yanıltıcı olabilir.
                </p>
                <ul className="list-disc space-y-2 pl-5">
                  {yanlislar.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </Section>

              <Section id="hangi-oran" title="Hangi Oran Hangi Şirkette Daha Anlamlıdır?">
                <p>
                  F/K oranı, düzenli kar üreten şirketlerde daha anlamlıdır. Net
                  karı dalgalı, zarar eden veya tek seferlik gelirlerle karını
                  artıran şirketlerde dikkatli kullanılmalıdır.
                </p>
                <p>
                  PD/DD oranı, bankalar, holdingler ve varlık ağırlıklı şirketlerde
                  daha sık kullanılır. Ancak özkaynakların kalitesi ve özkaynak
                  karlılığı mutlaka birlikte incelenmelidir.
                </p>
                <p>
                  FD/FAVÖK oranı, operasyonel karlılığı güçlü şirketleri
                  değerlendirmede faydalıdır. Özellikle borçluluğun değerleme
                  üzerindeki etkisini görmek isteyen yatırımcılar için önemli bir
                  göstergedir.
                </p>
              </Section>

              <Section id="sonuc" title="Sonuç: F/K, PD/DD ve FD/FAVÖK Nasıl Okunmalı?">
                <p>
                  F/K, PD/DD ve FD/FAVÖK oranları, yatırımcıya şirketin fiyatı ile
                  finansal performansı arasındaki ilişkiyi gösteren önemli analiz
                  araçlarıdır. Ancak bu oranlar yatırım kararının tamamı değildir.
                </p>
                <p>
                  F/K net karı, PD/DD özkaynakları, FD/FAVÖK ise operasyonel
                  karlılığı ve borçluluk etkisini merkeze alır. Bu nedenle üçü
                  birlikte değerlendirildiğinde şirket hakkında daha dengeli bir
                  bakış oluşur.
                </p>
                <p>
                  Doğru analiz için oranlar; şirketin sektörü, büyüme potansiyeli,
                  karlılık kalitesi, borçluluk seviyesi, nakit akışı ve geçmiş
                  performansıyla birlikte yorumlanmalıdır. Tek bir düşük oran,
                  tek başına ucuzluk veya fırsat anlamına gelmez.
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
                Değerleme oranları tek başına alım veya satım kararı için yeterli
                değildir. Yatırım kararları kişisel risk-getiri tercihlerine,
                güncel verilere ve detaylı analize göre verilmelidir.
              </section>

              <RehberAltBolumler currentHref="/rehberler/fk-pddd-fdfavok-nedir" />
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
