import Link from "next/link";
import RehberAltBolumler from "@/components/RehberAltBolumler";
import type { Metadata } from "next";

const siteUrl = "https://www.hocaileborsa.com";
const title =
  "Katılım Endeksi Nedir? Katılım Endeksi Hisseleri Nasıl Belirlenir?";
const description =
  "Katılım Endeksi nedir, BIST Katılım 30, 50, 100 ve Katılım Tüm hisseleri hangi kriterlere göre belirlenir? KAFİF Formu, faizli borç ve faizli varlık oranları.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: `${siteUrl}/rehberler/katilim-endeksi`,
  },
  openGraph: {
    title,
    description,
    url: `${siteUrl}/rehberler/katilim-endeksi`,
    type: "article",
  },
};

const endeksler = [
  {
    title: "BIST Katılım Tüm Endeksi",
    text: "Katılım finans ilkelerine uygunluk kriterlerini sağlayan payların geniş kapsamlı listesidir. Katılım 30, Katılım 50 ve Katılım 100 gibi daha dar endeksler için ana havuz niteliği taşır.",
  },
  {
    title: "BIST Katılım 30 Endeksi",
    text: "BIST Katılım Tüm içindeki daha büyük ve daha likit şirketler arasından seçilen 30 paydan oluşur. Katılım finans uygunluğunun yanında likidite ve piyasa büyüklüğü de öne çıkar.",
  },
  {
    title: "BIST Katılım 50 Endeksi",
    text: "Katılım 30'a göre daha geniş kapsamlıdır. Katılım finans ilkelerine uygun şirketler arasından işlem hacmi ve fiili dolaşımdaki piyasa değeri yüksek olan 50 payı kapsar.",
  },
  {
    title: "BIST Katılım 100 Endeksi",
    text: "Katılım finans kriterlerini sağlayan daha geniş bir pay grubunu içerir. Şirket sayısı arttığı için sektörel çeşitlilik yükselebilir; buna rağmen her şirket ayrıca incelenmelidir.",
  },
  {
    title: "BIST Katılım Sürdürülebilirlik Endeksi",
    text: "Katılım finans uygunluğu ile sürdürülebilirlik kriterlerini birlikte sağlayan şirketleri kapsar. Faizsiz finans hassasiyeti ve ESG odaklı yaklaşımı birlikte izlemek isteyen yatırımcılar için takip edilebilir.",
  },
  {
    title: "BIST Katılım Temettü Endeksi",
    text: "Katılım finans ilkelerine uygunluk ile temettü temasını bir araya getirir. Bu endekste yer alan şirketlerin hem BIST Katılım Tüm hem de BIST Temettü kriterlerini sağlaması gerekir.",
  },
];

const belirlemeKriterleri = [
  {
    title: "Şirketin İşlem Gördüğü Pazar",
    text: "Katılım Endeksi kapsamına alınacak payların Borsa İstanbul'da belirli pazarlarda işlem görüyor olması gerekir. Yıldız Pazar, Ana Pazar veya Alt Pazar dışında kalan şirket payları kapsam dışında kalabilir.",
  },
  {
    title: "Faaliyet Konusu ve Esas Sözleşme",
    text: "Şirketin esas sözleşmesinde katılım finans ilkelerine aykırı faaliyetlerin bulunup bulunmadığı incelenir. Faizli finansman faaliyetleri, kumar, alkol, tütün ve bazı eğlence-yayıncılık faaliyetleri bu değerlendirmede önem kazanabilir.",
  },
  {
    title: "Pay ve İmtiyaz Yapısı",
    text: "Pay sahipleri aleyhine doğrudan ve maddi sonuç doğurabilecek kar payı veya tasfiye payı imtiyazları dikkate alınabilir. Bu nedenle endeks yalnızca finansal oranlara değil, ortaklık yapısına da bakar.",
  },
  {
    title: "Doğrudan Aykırı Faaliyet veya Gelir",
    text: "Şirketin doğrudan katılım finans ilkelerine aykırı kabul edilen faaliyetleri veya gelirleri varsa, bu durum endekse dahil edilmesini engelleyebilir. Yan gelirler ve bağlı faaliyetler de önem taşıyabilir.",
  },
  {
    title: "Uygun Olmayan Gelir Oranı",
    text: "Katılım finans ilkelerine uygun olmayan bazı gelirler için belirli bir eşik uygulanır. Bu gelirlerin toplam gelirlere oranı belirlenen sınırı aşarsa şirket endeks kapsamına alınmayabilir.",
  },
  {
    title: "Faizli Varlık Oranı",
    text: "Şirketin faizli varlıklarının toplam varlıklara oranı dikkate alınır. Nakit ve nakit benzerleri, finansal yatırımlar, türev araçlar ve benzeri kalemler bu incelemede önem kazanabilir.",
  },
  {
    title: "Faizli Borç Oranı",
    text: "Şirketin faizli borçlarının toplam varlıklara oranı kritik göstergelerden biridir. Kısa ve uzun vadeli borçlanmalar ile benzeri finansal yükümlülükler bu hesaplamada değerlendirilebilir.",
  },
];

const neDegildir = [
  "Bir alım satım tavsiyesi değildir.",
  "Bir şirketin ucuz veya pahalı olduğunu göstermez.",
  "Bir hissenin yükseleceğini garanti etmez.",
  "Şirketin karlı, borçsuz veya risksiz olduğunu göstermez.",
  "Temettü ödeyeceğini garanti etmez.",
  "Hissenin teknik görünümünün olumlu olduğunu göstermez.",
  "Şirketin her dönem aynı endekste kalacağını garanti etmez.",
  "Yatırımcının ayrıca temel analiz yapma ihtiyacını ortadan kaldırmaz.",
];

const dikkatEdilecekler = [
  "Şirketin güncel olarak hangi Katılım Endeksi'nde yer aldığı kontrol edilmelidir.",
  "KAP sayfasındaki Katılım Finans sekmesi ve KAFİF Formu incelenmelidir.",
  "Uygun olmayan gelir oranı, faizli varlık oranı ve faizli borç oranı takip edilmelidir.",
  "Satış büyümesi, net kar, faaliyet karlılığı, özkaynak yapısı, borçluluk ve nakit akışı ayrıca analiz edilmelidir.",
  "Teknik analiz tarafında destek-direnç bölgeleri, trend yapısı, işlem hacmi ve ortalamalar izlenebilir.",
  "Endekste yer almanın tek başına yatırım gerekçesi olmadığı unutulmamalıdır.",
];

const faq = [
  {
    question: "Katılım Endeksi helal hisse listesi midir?",
    answer:
      "Katılım Endeksi, katılım finans ilkelerine uygunluk kriterlerini sağlayan şirketlerin yer aldığı bir endeks grubudur. Ancak yatırımcı açısından helal-haram değerlendirmesi kişisel hassasiyet, danışma kurulu görüşleri ve arındırma uygulamalarıyla birlikte ele alınmalıdır.",
  },
  {
    question: "Katılım Endeksi'nde olan hisse alınır mı?",
    answer:
      "Bir hissenin Katılım Endeksi'nde yer alması tek başına alım nedeni değildir. Şirketin bilançosu, karlılığı, borçluluğu, sektör görünümü, değerlemesi ve teknik görünümü ayrıca analiz edilmelidir.",
  },
  {
    question: "Katılım Endeksi'nden çıkan hisse kötü müdür?",
    answer:
      "Endeksten çıkan hisse, ilgili dönem itibarıyla katılım finans kriterlerini sağlayamamış olabilir. Bu durum şirketin mutlaka kötü olduğu anlamına gelmez; ancak katılım hassasiyeti olan yatırımcılar için dikkate alınması gereken önemli bir gelişmedir.",
  },
  {
    question: "Katılım Endeksi hisseleri nereden öğrenilir?",
    answer:
      "BIST Katılım Endeksleri kapsamındaki güncel pay listeleri Borsa İstanbul üzerinden takip edilebilir. Ayrıca şirketlerin KAP sayfalarında yer alan Katılım Finans sekmesinden KAFİF Formları incelenebilir.",
  },
  {
    question: "Katılım Endeksi her zaman aynı kalır mı?",
    answer:
      "Hayır. Katılım Endeksi listeleri dönemsel olarak güncellenir. Şirketlerin finansal oranları, faaliyet yapısı, KAFİF Formları, işlem hacmi ve fiili dolaşımdaki piyasa değeri değiştikçe endeks kapsamı da değişebilir.",
  },
  {
    question: "Katılım Endeksi temettü garantisi verir mi?",
    answer:
      "Hayır. Katılım Endeksi'nde yer almak temettü garantisi anlamına gelmez. Temettü için şirketin karlılığı, nakit akışı, genel kurul kararı ve dağıtım politikası ayrıca incelenmelidir.",
  },
  {
    question: "Katılım Endeksi yatırım tavsiyesi midir?",
    answer:
      "Hayır. Katılım Endeksi yatırım tavsiyesi değildir. Endeks, belirli kriterlere göre oluşturulmuş bir listedir. Yatırım kararı verilmeden önce şirket özelinde detaylı analiz yapılmalıdır.",
  },
];

const tableOfContents = [
  { href: "#katilim-endeksi-nedir", label: "Katılım Endeksi Nedir?" },
  { href: "#ne-ise-yarar", label: "Ne İşe Yarar?" },
  { href: "#bist-katilim-endeksleri", label: "BIST Katılım Endeksleri" },
  { href: "#hisseler-nasil-belirlenir", label: "Hisseler Nasıl Belirlenir?" },
  { href: "#temel-esikler", label: "Temel Eşikler" },
  { href: "#ne-degildir", label: "Ne Değildir?" },
  { href: "#kafif-formu", label: "KAFİF Formu" },
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

export default function KatilimEndeksiPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    mainEntityOfPage: `${siteUrl}/rehberler/katilim-endeksi`,
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
          <span className="font-medium text-slate-700">Katılım Endeksi</span>
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
                Katılım Endeksi, Borsa İstanbul&apos;da işlem gören şirketler
                arasından katılım finans ilkelerine uygunluk kriterlerini
                sağlayan payların yer aldığı özel bir endeks grubudur. Bu
                endeksler, faizsiz finans prensiplerine göre yatırım yapmak
                isteyen yatırımcılara yol göstermek amacıyla oluşturulmuştur.
              </p>
            </header>

            <div className="mt-8 space-y-10">
              <Section id="katilim-endeksi-nedir" title="Katılım Endeksi Nedir?">
                <p>
                  Katılım Endeksi yalnızca “şirket iyi midir, ucuz mudur,
                  yükselecek midir?” sorularına cevap veren bir liste değildir.
                  Temel amacı, şirketlerin faaliyet alanı, gelir yapısı, faizli
                  varlıkları, faizli borçları ve bazı kurumsal özellikleri
                  açısından katılım finans ilkelerine uygun olup olmadığını
                  değerlendirmektir.
                </p>
                <p>
                  Bu nedenle Katılım Endeksi, yatırımcı açısından bir uygunluk
                  filtresi olarak görülmelidir. Bir hissenin Katılım Endeksi&apos;nde
                  yer alması, o hissenin mutlaka kazandıracağı, risksiz olduğu
                  veya temel analiz açısından güçlü olduğu anlamına gelmez.
                </p>
              </Section>

              <Section id="ne-ise-yarar" title="Katılım Endeksi Ne İşe Yarar?">
                <p>
                  Katılım Endeksi, katılım finans hassasiyeti olan yatırımcıların
                  Borsa İstanbul&apos;da işlem gören hisseler arasından seçim yaparken
                  daha düzenli ve şeffaf bir kaynak kullanmasını sağlar.
                </p>
                <ul className="list-disc space-y-2 pl-5">
                  <li>Katılım finans ilkelerine uygunluk açısından taranmış şirketleri gösterir.</li>
                  <li>Faizli borç, faizli varlık ve uygun olmayan gelir oranları belli sınırlar içinde kalan şirketleri takip etmeyi kolaylaştırır.</li>
                  <li>Katılım esaslı yatırım fonlarının hangi hisseleri tercih edebileceğini anlamaya yardımcı olur.</li>
                  <li>BIST Katılım 30, 50, 100 ve Katılım Tüm gibi farklı kapsamlı endeksleri karşılaştırma imkanı verir.</li>
                  <li>Şirketlerin KAP üzerinden yayımladığı katılım finans formlarına bakma alışkanlığı kazandırır.</li>
                </ul>
                <p>
                  Burada önemli nokta şudur: Katılım Endeksi yatırımcının analiz
                  yükünü tamamen ortadan kaldırmaz. Sadece yatırım evrenini
                  katılım finans ilkelerine göre daraltır.
                </p>
              </Section>

              <Section
                id="bist-katilim-endeksleri"
                title="BIST Katılım Endeksleri Hangileridir?"
              >
                <p>
                  Borsa İstanbul&apos;da farklı amaçlara göre oluşturulmuş birden
                  fazla katılım endeksi vardır.
                </p>
                <div className="grid gap-3">
                  {endeksler.map((item) => (
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
                id="hisseler-nasil-belirlenir"
                title="Katılım Endeksi Hisseleri Nasıl Belirlenir?"
              >
                <p>
                  Katılım Endeksi&apos;ne girecek şirketler belirlenirken yalnızca
                  şirketin ismine, sektörüne veya yatırımcılar arasındaki
                  bilinirliğine bakılmaz. Borsa İstanbul, Türkiye Katılım
                  Bankaları Birliği Danışma Kurulu tarafından oluşturulan
                  standart ve rehberleri esas alır.
                </p>
                <p>
                  Şirketler, Katılım Finansı İlkeleri Bilgi Formu olarak bilinen
                  KAFİF Formu üzerinden değerlendirilir. Bu formda şirketin
                  faaliyet alanı, esas sözleşmesi, gelir yapısı, faizli
                  varlıkları, faizli borçları ve uygunluk açısından önemli
                  görülen diğer bilgiler yer alır.
                </p>
                <div className="grid gap-3">
                  {belirlemeKriterleri.map((item, index) => (
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
                id="temel-esikler"
                title="Katılım Endeksi İçin Kullanılan Temel Eşikler"
              >
                <p>
                  BIST Katılım Endeksi değerlendirmesinde üç ana oran öne çıkar:
                  katılım finans ilkelerine uygun olmayan gelirlerin toplam
                  gelirlere oranı, faizli varlıkların toplam varlıklara oranı ve
                  faizli borçların toplam varlıklara oranı.
                </p>
                <p>
                  Uygun olmayan gelirler için daha düşük bir eşik uygulanırken,
                  faizli varlıklar ve faizli borçlar için toplam varlıklara göre
                  daha geniş bir oran sınırı dikkate alınır. Şirket bu oranları
                  aştığında doğrudan veya dönemsel değerlendirme sonucunda
                  endeks kapsamından çıkarılabilir.
                </p>
                <p>
                  Bazı sınırlı aşım durumlarında şirketin bir sonraki dönemsel
                  değerlemeye kadar endekste kalmasına izin verilebilir. Üst üste
                  yapılan değerlemelerde kriterlerin sağlanmaması durumunda ise
                  şirket payları endeks kapsamından çıkarılır.
                </p>
              </Section>

              <Section id="ne-degildir" title="Katılım Endeksi Ne Değildir?">
                <p>
                  Katılım Endeksi hakkında en çok yapılan hata, bu endeksi
                  garantili yatırım listesi gibi görmektir. Oysa Katılım
                  Endeksi&apos;nin kapsamı daha farklıdır.
                </p>
                <ul className="list-disc space-y-2 pl-5">
                  {neDegildir.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <p>
                  Bir hisse Katılım Endeksi&apos;nde yer alsa bile şirket zarar
                  edebilir, fiyatı düşebilir, bilançosu bozulabilir, sektörel
                  risklerle karşılaşabilir veya piyasa koşullarından olumsuz
                  etkilenebilir.
                </p>
              </Section>

              <Section
                id="guvenli-mi"
                title={"Katılım Endeksi'ne Giren Hisse Güvenli midir?"}
              >
                <p>
                  Katılım Endeksi&apos;ne giren bir hissenin güvenli olduğunu
                  söylemek doğru değildir. Endekse giriş, şirketin belirli
                  katılım finans kriterlerini sağladığını gösterir. Ancak bu
                  durum fiyat riski, bilanço riski, sektör riski, likidite riski
                  veya piyasa riski olmadığı anlamına gelmez.
                </p>
                <p>
                  Bir şirket katılım finans kriterlerini karşılayabilir ancak
                  karlılığı zayıflayabilir, satışları düşebilir, döviz kuru
                  riskine açık olabilir, hisse fiyatı aşırı değerlenmiş olabilir
                  veya teknik görünümü zayıflayabilir. Bu nedenle Katılım
                  Endeksi, yatırım kararının yalnızca bir parçası olarak
                  kullanılmalıdır.
                </p>
              </Section>

              <Section
                id="endeksten-cikan-hisse"
                title={"Katılım Endeksi'nden Çıkan Hisse Ne Anlama Gelir?"}
              >
                <p>
                  Bir şirketin Katılım Endeksi&apos;nden çıkarılması, ilgili dönem
                  itibarıyla endeks kriterlerini sağlayamadığı anlamına gelir.
                  Faizli borç oranı yükselmiş, faizli varlıkları artmış, uygun
                  olmayan gelirlerin toplam gelirler içindeki payı yükselmiş veya
                  KAFİF Formu eksik kalmış olabilir.
                </p>
                <p>
                  Endeksten çıkış, şirketin mutlaka kötü yönetildiği veya yatırım
                  yapılamaz hale geldiği anlamına gelmez. Ancak katılım finans
                  hassasiyeti olan yatırımcılar için önemli bir uyarı kabul
                  edilmelidir.
                </p>
              </Section>

              <Section id="kafif-formu" title="KAFİF Formu Nedir?">
                <p>
                  KAFİF Formu, Katılım Finansı İlkeleri Bilgi Formu&apos;nun kısa
                  adıdır. Şirketlerin katılım finans ilkelerine uygunluk
                  açısından değerlendirilmesinde kullanılan temel belgelerden
                  biridir.
                </p>
                <p>
                  KAFİF Formu&apos;nda şirketin faaliyet konusu, esas sözleşmesi,
                  imtiyazlı pay yapısı, uygun olmayan faaliyet ve gelirleri,
                  faizli varlıkları, faizli borçları ve toplam varlıkları gibi
                  bilgiler yer alır. Yatırımcılar, şirketlerin KAP sayfalarında
                  yer alan Katılım Finans sekmesi üzerinden bu formlara
                  ulaşabilir.
                </p>
              </Section>

              <Section
                id="ne-zaman-guncellenir"
                title="Katılım Endeksi Listesi Ne Zaman Güncellenir?"
              >
                <p>
                  BIST Katılım 30, BIST Katılım 50, BIST Katılım 100 ve BIST
                  Katılım Tüm endeksleri dönemsel olarak gözden geçirilir. Bu
                  dönemlerde şirketlerin KAFİF Formları, finansal tabloları,
                  faaliyet yapıları, işlem hacimleri ve fiili dolaşımdaki piyasa
                  değerleri dikkate alınır.
                </p>
                <p>
                  Bir şirket bugün Katılım Endeksi&apos;nde yer alırken, bir sonraki
                  dönemsel değerlendirmede listeden çıkabilir. Aynı şekilde daha
                  önce listede olmayan bir şirket de kriterleri sağlaması halinde
                  endekse dahil edilebilir.
                </p>
              </Section>

              <Section
                id="avantajlar-sinirlamalar"
                title={"Katılım Endeksi'nin Avantajları ve Sınırlamaları"}
              >
                <p>
                  Katılım Endeksi yatırım evrenini daraltır, şirketlerin KAFİF
                  Formları üzerinden daha şeffaf takip edilmesini sağlar ve
                  yatırımcıyı sadece fiyat hareketine değil, faaliyet alanı,
                  borç yapısı ve gelir kalitesi gibi konulara da bakmaya
                  yönlendirir.
                </p>
                <p>
                  Buna rağmen endeks tek başına yeterli değildir. Bir şirketin
                  Katılım Endeksi&apos;nde yer alması, bilançosunun güçlü olduğu
                  anlamına gelmez. Karlılık, büyüme, nakit akışı, borç ödeme
                  gücü, değerleme ve teknik görünüm ayrıca incelenmelidir.
                </p>
              </Section>

              <Section
                id="hisse-alirken"
                title="Katılım Endeksi Hissesi Alırken Nelere Dikkat Edilmeli?"
              >
                <ul className="list-disc space-y-2 pl-5">
                  {dikkatEdilecekler.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </Section>

              <Section
                id="arindirma"
                title="Katılım Endeksi ve Arındırma Konusu"
              >
                <p>
                  Katılım finans hassasiyeti olan yatırımcılar için arındırma
                  konusu da önemlidir. Bazı şirketlerde sınırlı düzeyde katılım
                  finans ilkelerine uygun olmayan gelir bulunabilir. Bu tür
                  gelirler belirli sınırlar içinde kaldığında şirket endeks
                  kapsamında kalabilir.
                </p>
                <p>
                  Ancak yatırımcı açısından bu gelirlerin kendi payına düşen
                  kısmının nasıl değerlendirileceği ayrı bir konudur. Katılım
                  hassasiyeti yüksek yatırımcıların sadece endeks listesine
                  bakması değil, arındırma uygulamalarını da incelemesi gerekir.
                </p>
              </Section>

              <Section id="sonuc" title="Sonuç: Katılım Endeksi Nasıl Okunmalı?">
                <p>
                  Katılım Endeksi, faizsiz finans ilkelerine göre yatırım yapmak
                  isteyen yatırımcılar için önemli bir rehberdir. Ancak bu
                  rehber, yatırım kararının tamamı değil, yalnızca başlangıç
                  noktasıdır.
                </p>
                <p>
                  Doğru yaklaşım; önce şirketin Katılım Endeksi&apos;nde yer alıp
                  almadığını kontrol etmek, sonra KAFİF Formu ve KAP
                  açıklamalarını incelemek, ardından temel analiz, teknik analiz,
                  sektör görünümü ve güncel haber akışını birlikte
                  değerlendirmektir.
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

              <RehberAltBolumler currentHref="/rehberler/katilim-endeksi" />
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
