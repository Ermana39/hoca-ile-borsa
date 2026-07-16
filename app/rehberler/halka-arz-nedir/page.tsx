import Link from "next/link";
import RehberAltBolumler from "@/components/RehberAltBolumler";
import type { Metadata } from "next";
import type { ReactNode } from "react";

const siteUrl = "https://www.hocaileborsa.com";
const title = "Halka Arz Nedir? Halka Arza Katılırken Nelere Dikkat Edilmeli?";
const description =
  "Halka arz nedir, halka arz süreci nasıl işler, izahname, fiyat tespit raporu, fon kullanımı, eşit dağıtım ve oransal dağıtım yatırımcı için ne anlama gelir?";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: `${siteUrl}/rehberler/halka-arz-nedir`,
  },
  openGraph: {
    title,
    description,
    url: `${siteUrl}/rehberler/halka-arz-nedir`,
    type: "article",
  },
};

const halkaArzSekilleri = [
  {
    title: "Sermaye Artırımı Yoluyla Halka Arz",
    text: "Şirket yeni pay ihraç eder ve bu payların satışından elde edilen kaynak şirketin kasasına girer. Bu yöntem yatırımcı açısından önemlidir çünkü halka arzdan gelen fon yeni yatırım, borç azaltma, işletme sermayesi veya büyüme planları için kullanılabilir.",
  },
  {
    title: "Ortak Satışı Yoluyla Halka Arz",
    text: "Mevcut ortaklar ellerindeki payların bir bölümünü halka arz eder. Bu durumda satıştan gelen nakit doğrudan şirkete değil, payını satan ortağa gider. Bu nedenle yatırımcı, halka arz gelirinin şirkete katkı sağlayıp sağlamadığını ayrıca kontrol etmelidir.",
  },
  {
    title: "Karma Halka Arz",
    text: "Halka arzın bir bölümü sermaye artırımı, bir bölümü ortak satışı şeklinde yapılır. Bu modelde hem şirkete kaynak girişi olur hem de mevcut ortaklar pay satışı gerçekleştirebilir. Fon kullanım raporu ve ortak satışı oranı birlikte incelenmelidir.",
  },
];

const surecAdimlari = [
  {
    title: "Şirketin Halka Arz Kararı Alması",
    text: "Şirket, halka arz için yönetim kurulu ve genel kurul süreçlerini tamamlar. Halka arz yöntemi, satılacak pay miktarı, halka açıklık oranı ve izlenecek yol bu aşamada belirginleşir.",
  },
  {
    title: "Aracı Kurum ve Danışmanların Belirlenmesi",
    text: "Halka arz sürecinde yetkili aracı kurum, hukuk danışmanları, bağımsız denetim kuruluşu ve diğer profesyonel taraflar görev alabilir. Fiyat tespit raporu ve satış süreci bu tarafların çalışmalarıyla şekillenir.",
  },
  {
    title: "İzahname ve Fiyat Tespit Raporunun Hazırlanması",
    text: "İzahname, yatırımcıya şirketin faaliyetlerini, finansal durumunu, risklerini, halka arz yapısını ve fon kullanım planını anlatan ana belgedir. Fiyat tespit raporu ise halka arz fiyatının hangi varsayımlar ve karşılaştırmalarla belirlendiğini açıklar.",
  },
  {
    title: "SPK Başvurusu ve İnceleme Süreci",
    text: "Sermaye piyasası araçlarının halka arz edilebilmesi için izahname hazırlanması ve Sermaye Piyasası Kurulu tarafından onaylanması gerekir. Kurul incelemesi, izahnamedeki bilgilerin tutarlı, anlaşılır ve ilgili standartlara uygun olup olmadığına odaklanır.",
  },
  {
    title: "SPK Onayı ve KAP Açıklamaları",
    text: "SPK onayı sonrasında izahname, tasarruf sahiplerine satış duyurusu ve halka arzla ilgili diğer belgeler KAP üzerinden yayımlanır. Yatırımcı bu aşamada talep toplama tarihlerini, dağıtım yöntemini, fiyatı ve tahsisat oranlarını takip eder.",
  },
  {
    title: "Talep Toplama Dönemi",
    text: "Yatırımcılar belirlenen tarihlerde aracı kurumları veya bankaları üzerinden halka arz talebi girer. Talep toplama süresi, satış yöntemi ve yatırımcı grupları izahnamede ve satış duyurusunda açıklanır.",
  },
  {
    title: "Dağıtım ve Sonuçların Açıklanması",
    text: "Talep toplama tamamlandıktan sonra yatırımcılara kaç lot dağıtıldığı belirlenir. Fazla talep olması halinde yatırımcıların tüm talebi karşılanmayabilir. Dağıtım sonuçları halka arz sonrası KAP duyuruları ve aracı kurum ekranları üzerinden izlenebilir.",
  },
  {
    title: "Borsada İşlem Görmeye Başlama",
    text: "Halka arz süreci tamamlandıktan sonra şirket payları Borsa İstanbul'da işlem görmeye başlar. İlk işlem gününden itibaren fiyat arz-talep dengesine göre oluşur ve halka arz fiyatı artık tek referans olmaktan çıkar.",
  },
];

const bakilacakBelgeler = [
  {
    title: "İzahname",
    text: "Şirketin faaliyet konusu, ortaklık yapısı, finansal tabloları, riskleri, halka arz şekli, fon kullanım planı ve önemli sözleşmeleri hakkında en kapsamlı belgedir.",
  },
  {
    title: "Fiyat Tespit Raporu",
    text: "Halka arz fiyatının nasıl belirlendiğini gösterir. Benzer şirket çarpanları, indirgenmiş nakit akımı, piyasa değeri varsayımları ve uygulanan iskonto bu raporda incelenir.",
  },
  {
    title: "Tasarruf Sahiplerine Satış Duyurusu",
    text: "Talep toplama tarihleri, satış yöntemi, yatırımcı grupları, tahsisat oranları, başvuru yerleri ve dağıtım esasları gibi pratik bilgileri içerir.",
  },
  {
    title: "Fon Kullanım Raporu",
    text: "Halka arzdan elde edilecek kaynağın nerede kullanılacağını açıklar. Yeni yatırım, borç ödeme, işletme sermayesi veya kapasite artışı gibi başlıklar bu raporda yer alabilir.",
  },
  {
    title: "Finansal Tablolar",
    text: "Şirketin satışları, karlılığı, borçluluğu, nakit akışı, özkaynak yapısı ve büyüme eğilimi yatırımcı tarafından mutlaka incelenmelidir.",
  },
];

const dagitimYontemleri = [
  {
    title: "Eşit Dağıtım",
    text: "Yatırımcı talebi yüksek olsa bile dağıtım daha geniş yatırımcı kitlesine yayılabilir. Küçük yatırımcı açısından daha anlaşılır görünse de lot sayısı talep yoğunluğuna göre düşük kalabilir.",
  },
  {
    title: "Oransal Dağıtım",
    text: "Dağıtım, yatırımcıların talep miktarına göre oransal yapılabilir. Bu yöntemde yüksek talep giren yatırımcı daha fazla lot alma ihtimali yakalayabilir ancak kesin lot sayısı talep büyüklüğüne bağlıdır.",
  },
  {
    title: "Yatırımcı Grubu Bazlı Tahsisat",
    text: "Yurt içi bireysel, yurt içi kurumsal, yurt dışı kurumsal veya çalışan grubu gibi farklı yatırımcı sınıflarına ayrı tahsisat yapılabilir. Tahsisat oranları satış duyurusunda belirtilir.",
  },
];

const yatirimciKontrolListesi = [
  "Halka arz sermaye artırımı mı, ortak satışı mı, yoksa karma yapı mı?",
  "Halka arzdan şirkete ne kadar kaynak girecek?",
  "Fon kullanım planı net ve şirketin büyümesine katkı sağlayacak nitelikte mi?",
  "Şirketin satışları, net karı, faaliyet karlılığı ve nakit akışı nasıl?",
  "Borçluluk seviyesi ve finansman giderleri yatırımcı açısından risk oluşturuyor mu?",
  "Halka arz fiyatı benzer şirketlere göre makul mü?",
  "Fiyat tespit raporunda kullanılan varsayımlar gerçekçi mi?",
  "Halka açıklık oranı ve fiili dolaşımdaki pay miktarı yeterli mi?",
  "Ortak satışı varsa, satış yapan ortakların payı halka arz sonrası ne kadar kalıyor?",
  "Şirketin faaliyet gösterdiği sektör büyüyor mu, daralıyor mu?",
  "Risk faktörleri bölümünde şirket özelinde hangi uyarılar yer alıyor?",
  "Halka arz sonrası kilitlenme, fiyat istikrarı veya geri alım taahhüdü var mı?",
];

const yanlisBilinenler = [
  "Her halka arz kesin kazandırır düşüncesi doğru değildir.",
  "Halka arz fiyatının ucuz olduğu yalnızca lot fiyatına bakılarak anlaşılamaz.",
  "Çok lot gelmesi her zaman avantaj anlamına gelmez.",
  "Az lot gelmesi şirketin kötü olduğu anlamına gelmez.",
  "Sermaye artırımı ve ortak satışı yatırımcı açısından aynı etkiye sahip değildir.",
  "Tavan serisi beklentisi tek başına yatırım gerekçesi olmamalıdır.",
  "Halka arz sonrası ilk günlerdeki fiyat hareketi şirketin uzun vadeli değerini tek başına göstermez.",
  "İzahname okunmadan halka arza katılmak ciddi bilgi eksikliği yaratabilir.",
];

const faq = [
  {
    question: "Halka arz nedir?",
    answer:
      "Halka arz, bir şirketin paylarını yatırımcılara satması ve paylarının borsada işlem görmeye başlaması sürecidir. Bu işlem sermaye artırımı, ortak satışı veya ikisinin birlikte kullanıldığı karma yöntemle yapılabilir.",
  },
  {
    question: "Halka arza katılmak mantıklı mı?",
    answer:
      "Her halka arz kendi koşulları içinde değerlendirilmelidir. Şirketin finansalları, halka arz fiyatı, fon kullanım planı, sektör görünümü ve risk faktörleri incelenmeden sadece halka arz olduğu için katılmak doğru değildir.",
  },
  {
    question: "Halka arzda eşit dağıtım ne demek?",
    answer:
      "Eşit dağıtımda yatırımcılar arasında daha dengeli lot dağıtımı hedeflenir. Talep çok yüksek olduğunda herkesin talebi tam karşılanmayabilir ve kişi başına düşen lot sayısı düşük kalabilir.",
  },
  {
    question: "Halka arzda oransal dağıtım ne demek?",
    answer:
      "Oransal dağıtımda yatırımcılara dağıtılacak lot miktarı, girilen talep miktarına göre belirlenebilir. Bu yöntemde yüksek talep giren yatırımcı daha fazla lot alabilir ancak sonuç toplam talep büyüklüğüne bağlıdır.",
  },
  {
    question: "Sermaye artırımı yoluyla halka arz neden önemlidir?",
    answer:
      "Bu yöntemde satıştan elde edilen kaynak şirketin kasasına girer. Şirket bu fonu yatırım, işletme sermayesi, borç azaltma veya büyüme planları için kullanabilir.",
  },
  {
    question: "Ortak satışı yoluyla halka arz kötü müdür?",
    answer:
      "Tek başına kötü değildir. Ancak satıştan gelen nakit şirkete değil payını satan ortağa gider. Bu nedenle yatırımcı, halka arzın şirkete doğrudan kaynak sağlayıp sağlamadığını ayrıca kontrol etmelidir.",
  },
  {
    question: "Halka arz fiyatı nasıl değerlendirilir?",
    answer:
      "Halka arz fiyatı fiyat tespit raporu üzerinden incelenmelidir. Benzer şirket çarpanları, şirketin büyümesi, karlılığı, borçluluğu ve uygulanan iskonto birlikte değerlendirilmelidir.",
  },
  {
    question: "Halka arz sonrası hisse hemen satılmalı mı?",
    answer:
      "Bu karar yatırımcının risk profiline, şirketin temel görünümüne ve piyasa koşullarına bağlıdır. Sadece ilk gün hareketine bakarak karar vermek sağlıklı olmayabilir.",
  },
  {
    question: "Halka arz yatırım tavsiyesi midir?",
    answer:
      "Hayır. Halka arz bilgileri yatırım tavsiyesi değildir. Yatırım kararı verilmeden önce izahname, fiyat tespit raporu, finansal tablolar ve risk faktörleri incelenmelidir.",
  },
];

const tableOfContents = [
  { href: "#halka-arz-nedir", label: "Halka Arz Nedir?" },
  { href: "#ne-ise-yarar", label: "Ne İşe Yarar?" },
  { href: "#halka-arz-sekilleri", label: "Halka Arz Şekilleri" },
  { href: "#surec", label: "Süreç Nasıl İşler?" },
  { href: "#belgeler", label: "Hangi Belgeler Okunmalı?" },
  { href: "#dagitim", label: "Dağıtım Yöntemleri" },
  { href: "#yatirimci", label: "Yatırımcı Nelere Bakmalı?" },
  { href: "#riskler", label: "Riskler ve Yanılgılar" },
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

export default function HalkaArzNedirPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    mainEntityOfPage: `${siteUrl}/rehberler/halka-arz-nedir`,
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
          <span className="font-medium text-slate-700">Halka Arz Nedir?</span>
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
                Halka arz, bir şirketin paylarını yatırımcılara sunarak borsada
                işlem görmeye başlamasıdır. Yatırımcı açısından halka arz
                yalnızca “kaç lot gelir?” sorusundan ibaret değildir. Şirketin
                halka arz şekli, fon kullanım planı, fiyat tespit raporu,
                finansal tabloları, tahsisat yapısı ve risk faktörleri birlikte
                incelenmelidir.
              </p>
            </header>

            <div className="mt-8 space-y-10">
              <Section id="halka-arz-nedir" title="Halka Arz Nedir?">
                <p>
                  Halka arz, bir şirketin paylarını geniş yatırımcı kitlesine
                  satması ve bu payların Borsa İstanbul&apos;da işlem görmeye
                  başlaması sürecidir. Halka arzdan sonra şirket payları borsada
                  alınıp satılabilir hale gelir ve şirket halka açık ortaklık
                  statüsüne geçer.
                </p>
                <p>
                  Bu süreçte yatırımcılar, belirlenen halka arz fiyatı üzerinden
                  talep girer. Talep toplama tamamlandıktan sonra dağıtım yapılır
                  ve şirket payları belirlenen tarihte borsada işlem görmeye
                  başlar.
                </p>
                <p>
                  Halka arz yatırımcıya yeni şirketlere erken aşamada ortak olma
                  imkanı sunabilir. Ancak bu durum her halka arzın kazandıracağı
                  veya risksiz olduğu anlamına gelmez.
                </p>
              </Section>

              <Section id="ne-ise-yarar" title="Halka Arz Ne İşe Yarar?">
                <p>
                  Halka arz şirketler için finansman, kurumsallaşma ve
                  bilinirlik açısından önemli bir adımdır. Yatırımcı açısından
                  ise daha önce borsada işlem görmeyen bir şirkete ortak olma
                  fırsatı sağlar.
                </p>
                <ul className="list-disc space-y-2 pl-5">
                  <li>Şirket yeni kaynak sağlayabilir.</li>
                  <li>Mevcut ortaklar paylarının bir kısmını nakde çevirebilir.</li>
                  <li>Şirketin bilinirliği ve şeffaflığı artabilir.</li>
                  <li>Paylar borsada işlem gördüğü için likidite oluşabilir.</li>
                  <li>Yatırımcılar yeni sektör ve şirketlere erişim sağlayabilir.</li>
                </ul>
                <p>
                  Ancak halka arzın şirkete ne kadar fayda sağlayacağı, halka arz
                  yapısına bağlıdır. Sermaye artırımı yoluyla yapılan halka arzda
                  şirkete nakit girişi olurken, yalnızca ortak satışı şeklinde
                  yapılan halka arzda satış geliri şirkete değil pay satan ortağa
                  gider.
                </p>
              </Section>

              <Section id="halka-arz-sekilleri" title="Halka Arz Şekilleri Nelerdir?">
                <p>
                  Halka arzın yatırımcı açısından en kritik noktalarından biri,
                  satışın hangi yöntemle yapıldığıdır. Çünkü halka arz gelirinin
                  şirkete mi yoksa mevcut ortaklara mı gideceği bu yapıya göre
                  değişir.
                </p>
                <div className="grid gap-3">
                  {halkaArzSekilleri.map((item) => (
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

              <Section id="surec" title="Halka Arz Süreci Nasıl İlerler?">
                <p>
                  Halka arz süreci bir günde tamamlanan basit bir işlem değildir.
                  Şirket, aracı kurum, bağımsız denetim, SPK, Borsa İstanbul ve
                  KAP açıklamalarını içeren çok aşamalı bir yapı vardır.
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

              <Section id="belgeler" title="Halka Arzda Hangi Belgeler Okunmalı?">
                <p>
                  Halka arza katılırken yalnızca sosyal medya yorumlarına veya
                  lot beklentilerine bakmak yeterli değildir. Asıl okunması
                  gereken belgeler KAP üzerinden yayımlanan resmi dokümanlardır.
                </p>
                <div className="grid gap-3">
                  {bakilacakBelgeler.map((item) => (
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

              <Section id="izahname" title="İzahname Neden Önemlidir?">
                <p>
                  İzahname, halka arzın en temel belgesidir. Şirketin faaliyet
                  konusu, ortaklık yapısı, finansal bilgileri, riskleri, halka
                  arz şekli, fon kullanım planı ve yatırımcı açısından önemli
                  bilgiler bu belgede yer alır.
                </p>
                <p>
                  Yatırımcıların en çok dikkat etmesi gereken bölümler risk
                  faktörleri, finansal tablolar, fon kullanım planı, halka arz
                  gelirinin kimlere gideceği, ilişkili taraf işlemleri,
                  taahhütler ve dava-risk açıklamalarıdır.
                </p>
                <p>
                  İzahname okunmadan halka arza katılmak, şirketin sadece
                  reklamını veya piyasa beklentisini görüp asıl riskleri
                  görmemek anlamına gelebilir.
                </p>
              </Section>

              <Section id="fiyat-tespit" title="Fiyat Tespit Raporu Nasıl Okunur?">
                <p>
                  Fiyat tespit raporu, halka arz fiyatının hangi yöntemlerle
                  belirlendiğini açıklar. Bu raporda benzer şirket çarpanları,
                  indirgenmiş nakit akımı, piyasa değeri hesaplamaları ve halka
                  arz iskontosu gibi başlıklar bulunabilir.
                </p>
                <p>
                  Yatırımcı burada sadece halka arz fiyatına değil, kullanılan
                  varsayımlara bakmalıdır. Şirketin büyüme beklentileri gerçekçi
                  mi? Benzer şirket seçimi doğru mu? Uygulanan iskonto yeterli
                  mi? Zarar eden veya hızlı büyüyen şirketlerde kullanılan
                  çarpanlar sağlıklı mı? Bu sorular fiyat değerlendirmesinde
                  önemlidir.
                </p>
              </Section>

              <Section id="fon-kullanimi" title="Fon Kullanım Planı Neden Kritik?">
                <p>
                  Sermaye artırımı yoluyla yapılan halka arzlarda şirkete nakit
                  girişi olur. Bu kaynağın nerede kullanılacağı yatırımcı için
                  çok önemlidir. Çünkü halka arz sonrası şirketin büyüme hikayesi
                  büyük ölçüde bu planın uygulanmasına bağlı olabilir.
                </p>
                <p>
                  Fon yeni yatırım, kapasite artışı, işletme sermayesi, borç
                  azaltma, finansman giderlerini düşürme veya şirket satın alımı
                  gibi alanlarda kullanılabilir. Yatırımcı, fon kullanım
                  planının şirketin ana faaliyetleriyle uyumlu olup olmadığını ve
                  gerçekten değer yaratıp yaratmayacağını sorgulamalıdır.
                </p>
              </Section>

              <Section id="dagitim" title="Halka Arzda Dağıtım Yöntemleri">
                <p>
                  Halka arzda yatırımcıya kaç lot geleceği, toplam talep
                  büyüklüğüne, tahsisat oranlarına ve dağıtım yöntemine bağlıdır.
                  Bu nedenle halka arzlarda “kesin şu kadar lot gelir” demek
                  çoğu zaman doğru değildir.
                </p>
                <div className="grid gap-3">
                  {dagitimYontemleri.map((item) => (
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

              <Section id="tahsisat" title="Tahsisat Oranları Ne Anlama Gelir?">
                <p>
                  Tahsisat oranları, halka arz edilecek payların hangi yatırımcı
                  grubuna ne kadar ayrıldığını gösterir. Yurt içi bireysel
                  yatırımcı, yurt içi kurumsal yatırımcı, yurt dışı kurumsal
                  yatırımcı veya şirket çalışanları gibi farklı gruplar için
                  ayrı oranlar belirlenebilir.
                </p>
                <p>
                  Bireysel yatırımcıya ayrılan pay oranı yüksekse, küçük
                  yatırımcıların lot alma ihtimali artabilir. Ancak nihai dağıtım
                  yine toplam talebe bağlıdır. Talep çok yüksek olduğunda kişi
                  başına düşen lot sayısı düşük kalabilir.
                </p>
              </Section>

              <Section id="yatirimci" title="Halka Arza Katılırken Nelere Dikkat Edilmeli?">
                <p>
                  Halka arz yatırımcısı sadece kısa vadeli tavan beklentisine
                  odaklanmamalıdır. Şirketin gerçek değeri, büyüme potansiyeli,
                  bilanço kalitesi ve halka arzın amacı birlikte analiz
                  edilmelidir.
                </p>
                <ul className="list-disc space-y-2 pl-5">
                  {yatirimciKontrolListesi.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </Section>

              <Section id="finansallar" title="Finansal Tablolarda Nelere Bakılmalı?">
                <p>
                  Halka arz edilen şirketin son dönem finansal tabloları mutlaka
                  incelenmelidir. Satış gelirleri büyüyor mu, net kar sürdürülebilir
                  mi, faaliyet karı güçlü mü, nakit akışı pozitif mi, borçluluk
                  makul seviyede mi gibi sorular yatırımcı için önemlidir.
                </p>
                <p>
                  Sadece net kara bakmak yeterli değildir. Bazı şirketler tek
                  seferlik gelirlerle yüksek kar açıklayabilir. Bazı şirketlerde
                  satışlar büyürken nakit akışı zayıf kalabilir. Bu nedenle gelir
                  tablosu, bilanço ve nakit akış tablosu birlikte okunmalıdır.
                </p>
              </Section>

              <Section id="riskler" title="Halka Arzlarda Riskler ve Yanlış Bilinenler">
                <p>
                  Halka arzlar yatırımcı ilgisinin yoğun olduğu dönemlerde çok
                  cazip görünebilir. Ancak her halka arz aynı kaliteye sahip
                  değildir ve halka arz sonrası fiyat hareketi garanti edilemez.
                </p>
                <ul className="list-disc space-y-2 pl-5">
                  {yanlisBilinenler.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </Section>

              <Section id="islem-gormeye-baslayinca" title="Halka Arz Sonrası Ne Olur?">
                <p>
                  Halka arz tamamlandıktan sonra şirket payları Borsa İstanbul&apos;da
                  işlem görmeye başlar. İlk günlerde fiyat hareketleri yatırımcı
                  ilgisi, arz miktarı, endeks koşulları, şirketin halka arz
                  büyüklüğü ve genel piyasa havasına göre şekillenebilir.
                </p>
                <p>
                  Halka arz fiyatı, işlem başladıktan sonra sadece başlangıç
                  referansı olarak kalır. Hisse fiyatı artık piyasadaki alıcı ve
                  satıcıların oluşturduğu arz-talep dengesiyle belirlenir.
                </p>
              </Section>

              <Section id="sonuc" title="Sonuç: Halka Arz Nasıl Okunmalı?">
                <p>
                  Halka arz, yatırımcı için yeni bir şirkete ortak olma fırsatı
                  sunar. Ancak doğru yaklaşım sadece lot hesabı yapmak veya kısa
                  vadeli fiyat beklentisine odaklanmak değildir.
                </p>
                <p>
                  Sağlıklı bir halka arz değerlendirmesi için halka arz şekli,
                  fon kullanım planı, fiyat tespit raporu, finansal tablolar,
                  sektör görünümü, tahsisat yapısı ve risk faktörleri birlikte
                  incelenmelidir.
                </p>
                <p>
                  En önemli soru şudur: Bu halka arz şirkete ve yatırımcıya
                  gerçekten değer yaratıyor mu? Bu soruya cevap vermeden sadece
                  piyasa beklentisiyle hareket etmek yatırımcı açısından riskli
                  olabilir.
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
                kapsamında değildir. Halka arzlara katılım ve pay piyasalarında
                işlem yapmak risk içerir. Yatırım kararları, kişisel
                risk-getiri tercihleri, güncel izahname bilgileri ve detaylı
                analiz dikkate alınarak verilmelidir.
              </section>

              <RehberAltBolumler currentHref="/rehberler/halka-arz-nedir" />
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
