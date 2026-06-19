import Link from "next/link";
import RehberAltBolumler from "@/components/RehberAltBolumler";
import type { Metadata } from "next";

const siteUrl = "https://www.hocaileborsa.com";
const title = "Pay Geri Alım Programı Nedir? Şirketler Neden Kendi Hissesini Alır?";
const description =
  "Pay geri alım programı nedir, şirketler neden kendi paylarını geri alır, yatırımcı açısından ne anlama gelir? KAP bildirimi, geri alım fiyatı, azami fon ve riskler.";

export const metadata: Metadata = {
  title: `${title} | Hoca İle Borsa`,
  description,
  alternates: {
    canonical: `${siteUrl}/rehberler/pay-geri-alim-programi-nedir`,
  },
  openGraph: {
    title,
    description,
    url: `${siteUrl}/rehberler/pay-geri-alim-programi-nedir`,
    type: "article",
  },
};

const nedenler = [
  {
    title: "Hisse fiyatını destekleme amacı",
    text: "Şirket yönetimi, pay fiyatının şirketin temel değerini yansıtmadığını düşünebilir. Bu durumda geri alım programı, piyasaya şirketin kendi paylarına güvendiği mesajını verebilir.",
  },
  {
    title: "Piyasa güvenini artırma isteği",
    text: "Sert düşüş dönemlerinde geri alım kararı, yatırımcı güvenini desteklemek için kullanılabilir. Ancak tek başına kalıcı yükseliş garantisi vermez.",
  },
  {
    title: "Fazla nakdin değerlendirilmesi",
    text: "Nakit üretimi güçlü olan şirketler, yatırım, temettü veya borç azaltma yerine kendi paylarını geri almayı tercih edebilir. Burada nakdin en verimli şekilde kullanılıp kullanılmadığı önemlidir.",
  },
  {
    title: "Pay başına göstergeleri iyileştirme etkisi",
    text: "Geri alınan paylar dolaşımdaki pay miktarını azaltabileceği için bazı hisse başına göstergelerde teorik iyileşme yaratabilir. Bu etkinin kalıcı olup olmadığı şirketin faaliyet performansına bağlıdır.",
  },
  {
    title: "Çalışan pay programları veya stratejik amaçlar",
    text: "Bazı şirketler geri alınan payları çalışan pay planlarında kullanabilir, ileride yeniden satabilir veya sermaye azaltımı yoluyla itfa edebilir.",
  },
];

const yatirimciAcisindan = [
  {
    title: "Olumlu sinyal olabilir",
    text: "Şirketin kendi payını alması, yönetimin hisse fiyatını cazip gördüğü şeklinde yorumlanabilir. Özellikle güçlü nakit akışı ve düşük borçlulukla destekleniyorsa olumlu algı yaratabilir.",
  },
  {
    title: "Tek başına alım nedeni değildir",
    text: "Geri alım haberi, şirketin mutlaka yükseleceği anlamına gelmez. Geri alımın büyüklüğü, finansman kaynağı, şirketin bilançosu ve piyasa koşulları birlikte incelenmelidir.",
  },
  {
    title: "Likidite ve fiyatlama etkisi olabilir",
    text: "Geri alımlar piyasada ek talep oluşturabilir. Ancak program açıklanması, şirketin her gün ve her fiyattan alım yapacağı anlamına gelmez.",
  },
  {
    title: "Nakit kullanım tercihi sorgulanmalıdır",
    text: "Şirket geri alıma ayırdığı kaynağı yatırım, borç azaltma veya temettü için de kullanabilirdi. Yatırımcı, bu tercihin şirket açısından gerçekten değer yaratıp yaratmadığını değerlendirmelidir.",
  },
];

const surecAdimlari = [
  {
    title: "Yönetim kurulu kararı veya genel kurul yetkisi",
    text: "Şirket geri alım programı için yetkili organ kararını açıklar. Programın amacı, süresi, azami pay adedi ve ayrılacak azami fon gibi bilgiler yatırımcı açısından ilk incelenecek başlıklardır.",
  },
  {
    title: "Geri alım programının KAP'ta duyurulması",
    text: "Payların geri alınmasına ilişkin bildirim KAP üzerinden yayımlanır. Bu duyuruda programın kapsamı ve uygulanma esasları yer alır.",
  },
  {
    title: "Piyasadan alımların yapılması",
    text: "Şirket program kapsamında borsadan kendi paylarını alabilir. Alımların miktarı, fiyat aralığı ve toplam maliyeti sonraki bildirimlerde kamuya açıklanır.",
  },
  {
    title: "Günlük veya dönemsel bildirimler",
    text: "Geri alım işlemleri yapıldıkça şirket, alınan pay miktarını, işlem fiyatlarını, toplam tutarı ve geri alınan payların sermayeye oranını duyurur.",
  },
  {
    title: "Programın tamamlanması veya sonlandırılması",
    text: "Program hedeflenen limite ulaşınca, süresi dolunca veya yönetim kurulu kararıyla sonlandırılınca KAP açıklaması yapılır. Programın fiili olarak ne kadar kullanıldığı bu aşamada netleşir.",
  },
];

const kaptaBakilacaklar = [
  "Geri alım programının amacı net açıklanmış mı?",
  "Geri alıma ayrılacak azami fon tutarı ne kadar?",
  "Geri alınabilecek azami pay adedi veya nominal tutar ne?",
  "Programın uygulanacağı süre belirtilmiş mi?",
  "Geri alımlar şirketin iç kaynaklarıyla mı finanse ediliyor?",
  "Alımlar hangi fiyat aralığından yapılmış?",
  "Geri alınan payların sermayeye oranı kaç seviyeye ulaşmış?",
  "Program gerçekten aktif kullanılıyor mu, yoksa sadece karar düzeyinde mi kalmış?",
  "Geri alınan paylar ileride satılacak mı, elde mi tutulacak, yoksa itfa mı edilecek?",
];

const yanlisBilinenler = [
  "Pay geri alım kararı hisse fiyatının kesin yükseleceği anlamına gelmez.",
  "Program açıklanması, şirketin tüm limiti mutlaka kullanacağı anlamına gelmez.",
  "Geri alım olumlu algı yaratabilir; ancak kötü bilanço veya zayıf nakit akışını tek başına düzeltmez.",
  "Şirketin kendi payını alması her zaman ucuzluk göstergesi değildir.",
  "Geri alım için kullanılan nakit, şirketin başka yatırım fırsatlarından vazgeçtiği anlamına da gelebilir.",
  "Her geri alım aynı öneme sahip değildir; küçük tutarlı programların fiyat etkisi sınırlı kalabilir.",
];

const faq = [
  {
    question: "Pay geri alım programı nedir?",
    answer:
      "Pay geri alım programı, halka açık bir şirketin kendi paylarını borsadan veya mevzuatta izin verilen yöntemlerle geri almasına yönelik programdır. Programın amacı, süresi, azami pay miktarı ve ayrılacak fon KAP açıklamalarında duyurulur.",
  },
  {
    question: "Şirketler neden kendi hissesini geri alır?",
    answer:
      "Şirketler hisse fiyatını desteklemek, piyasa güvenini artırmak, fazla nakdi değerlendirmek, hisse başına göstergeleri iyileştirmek veya stratejik amaçlarla kendi paylarını geri alabilir.",
  },
  {
    question: "Pay geri alımı hisseyi yükseltir mi?",
    answer:
      "Pay geri alımı piyasada olumlu algı yaratabilir ve ek talep oluşturabilir. Ancak hissenin yükseleceğini garanti etmez. Şirketin bilançosu, karlılığı, borçluluğu, piyasa koşulları ve geri alımın büyüklüğü birlikte değerlendirilmelidir.",
  },
  {
    question: "Geri alınan paylar ne olur?",
    answer:
      "Geri alınan paylar şirketin elinde tutulabilir, mevzuat ve şirket kararları çerçevesinde ileride satılabilir veya sermaye azaltımı yoluyla itfa edilebilir. Bu konudaki kararlar KAP açıklamalarıyla takip edilmelidir.",
  },
  {
    question: "Pay geri alım programı temettü yerine geçer mi?",
    answer:
      "Hayır. Temettü doğrudan pay sahibine nakit veya pay olarak dağıtılan kar payıdır. Geri alım ise şirketin piyasadan kendi paylarını almasıdır. İki uygulamanın yatırımcıya etkisi farklıdır.",
  },
  {
    question: "Geri alım programı yatırım tavsiyesi midir?",
    answer:
      "Hayır. Geri alım programı bir şirket aksiyonudur. Yatırım kararı verilmeden önce şirketin finansalları, değerlemesi, sektör koşulları ve programın detayları ayrıca incelenmelidir.",
  },
];

const tableOfContents = [
  { href: "#pay-geri-alim-nedir", label: "Pay Geri Alım Nedir?" },
  { href: "#neden-yapilir", label: "Neden Yapılır?" },
  { href: "#yatirimci-acisindan", label: "Yatırımcı İçin Anlamı" },
  { href: "#surec", label: "Süreç Nasıl İlerler?" },
  { href: "#kapta-neye-bakilir", label: "KAP'ta Neye Bakılır?" },
  { href: "#olumlu-mu", label: "Olumlu mu Olumsuz mu?" },
  { href: "#yanlis-bilinenler", label: "Yanlış Bilinenler" },
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

export default function PayGeriAlimProgramiPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    mainEntityOfPage: `${siteUrl}/rehberler/pay-geri-alim-programi-nedir`,
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
          <span className="font-medium text-slate-700">Pay Geri Alım Programı</span>
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
                Pay geri alım programı, halka açık bir şirketin kendi paylarını
                belirli kurallar çerçevesinde geri satın almasıdır. Bu işlem
                yatırımcılar tarafından genellikle olumlu algılansa da tek
                başına alım nedeni değildir. Programın amacı, büyüklüğü,
                finansman kaynağı ve şirketin bilançosu birlikte okunmalıdır.
              </p>
            </header>

            <div className="mt-8 space-y-10">
              <Section id="pay-geri-alim-nedir" title="Pay Geri Alım Programı Nedir?">
                <p>
                  Pay geri alım programı, şirketin borsada işlem gören kendi
                  paylarını piyasadan geri satın almak için açıkladığı programdır.
                  Şirket, belirli bir süre içinde ve belirli bir azami fonla kendi
                  hisselerini alabileceğini kamuya duyurur.
                </p>
                <p>
                  Bu program şirketin piyasadaki paylarına doğrudan talep
                  oluşturabilir. Ancak geri alım kararı, şirketin her gün alım
                  yapacağı veya açıklanan azami tutarın tamamını kullanacağı
                  anlamına gelmez.
                </p>
                <p>
                  Halka açık şirketlerde geri alımlar Sermaye Piyasası Kurulu
                  düzenlemeleri ve KAP açıklamaları üzerinden takip edilir. Bu
                  nedenle yatırımcı için en güvenilir kaynak, şirketin yaptığı
                  resmi KAP bildirimleridir.
                </p>
              </Section>

              <Section id="neden-yapilir" title="Şirketler Neden Pay Geri Alımı Yapar?">
                <p>
                  Şirketlerin pay geri alım programı başlatmasının birden fazla
                  nedeni olabilir. Bu nedenler her şirket özelinde farklı
                  okunmalıdır.
                </p>
                <div className="grid gap-3">
                  {nedenler.map((item) => (
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
                id="yatirimci-acisindan"
                title="Pay Geri Alım Programı Yatırımcı İçin Ne Anlama Gelir?"
              >
                <p>
                  Pay geri alımı, yatırımcı açısından önemli bir şirket aksiyonudur.
                  Fakat her geri alım aynı etkiyi yaratmaz. Programın piyasadaki
                  algısı ile şirketin gerçek finansal durumu birlikte analiz
                  edilmelidir.
                </p>
                <div className="grid gap-3">
                  {yatirimciAcisindan.map((item) => (
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

              <Section id="surec" title="Pay Geri Alım Süreci Nasıl İlerler?">
                <p>
                  Geri alım programlarında süreç genellikle karar, kamuya
                  açıklama, piyasadan alım, işlem bildirimi ve programın
                  tamamlanması aşamalarından oluşur.
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
                id="kapta-neye-bakilir"
                title="Pay Geri Alım Bildirimlerinde KAP'ta Nelere Bakılmalı?"
              >
                <p>
                  Geri alım programı haberlerinde başlığa değil, KAP
                  açıklamasındaki detaylara bakılmalıdır. Çünkü programın gerçek
                  etkisi çoğu zaman bu ayrıntılarda saklıdır.
                </p>
                <ul className="list-disc space-y-2 pl-5">
                  {kaptaBakilacaklar.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </Section>

              <Section id="olumlu-mu" title="Pay Geri Alım Programı Olumlu mu Olumsuz mu?">
                <p>
                  Pay geri alım programı çoğu zaman piyasada olumlu karşılanır.
                  Çünkü şirketin kendi paylarını alması, yönetimin hisse fiyatını
                  düşük gördüğü veya şirkete güvendiği şeklinde yorumlanabilir.
                </p>
                <p>
                  Ancak bu yorum her zaman yeterli değildir. Şirketin kasasında
                  güçlü nakit varsa, borçluluğu makul seviyedeyse ve operasyonel
                  performansı iyiyse geri alım daha sağlıklı okunabilir. Buna
                  karşılık şirket yüksek borçluysa, nakit üretimi zayıfsa veya
                  geri alım yalnızca kısa vadeli fiyat desteği amacı taşıyorsa
                  yatırımcı daha dikkatli olmalıdır.
                </p>
                <p>
                  Bu nedenle geri alım programı, şirketin bilançosu, karlılığı,
                  nakit akışı, borç ödeme gücü ve değerlemesiyle birlikte
                  değerlendirilmelidir.
                </p>
              </Section>

              <Section id="geri-alinan-paylar" title="Geri Alınan Paylar Ne Olur?">
                <p>
                  Geri alınan paylar şirketin portföyünde tutulabilir. Şirket bu
                  payları ileride tekrar satabilir, çalışan pay programlarında
                  kullanabilir veya mevzuat ve şirket kararları çerçevesinde
                  sermaye azaltımı yoluyla itfa edebilir.
                </p>
                <p>
                  Yatırımcı açısından burada önemli olan, geri alınan payların
                  şirket stratejisinde nasıl kullanılacağıdır. Payların ileride
                  yüksek fiyattan satılması şirket için kaynak yaratabilir.
                  İtfa edilmesi ise dolaşımdaki pay sayısını azaltarak pay başına
                  göstergiler üzerinde farklı etkiler oluşturabilir.
                </p>
              </Section>

              <Section id="temettu-ile-farki" title="Pay Geri Alımı ile Temettü Arasındaki Fark Nedir?">
                <p>
                  Temettü, şirketin karını doğrudan pay sahiplerine dağıtmasıdır.
                  Pay geri alımı ise şirketin piyasadan kendi hissesini satın
                  almasıdır. İki yöntem de yatırımcıya değer aktarımı olarak
                  yorumlanabilir; ancak mekanizmaları farklıdır.
                </p>
                <p>
                  Temettüde yatırımcı doğrudan nakit alır. Geri alımda ise
                  şirket piyasadan pay alarak hisse fiyatını destekleyebilir veya
                  dolaşımdaki pay miktarını azaltabilir. Bu nedenle temettü daha
                  doğrudan, geri alım ise daha dolaylı bir etki yaratır.
                </p>
              </Section>

              <Section id="yanlis-bilinenler" title="Pay Geri Alımında Yanlış Bilinenler">
                <ul className="list-disc space-y-2 pl-5">
                  {yanlisBilinenler.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </Section>

              <Section id="yatirimci-ne-yapmali" title="Yatırımcı Pay Geri Alım Haberini Nasıl Okumalı?">
                <p>
                  Yatırımcı öncelikle şirketin KAP açıklamasını okumalıdır. Geri
                  alımın amacı, ayrılan azami fon, alınabilecek pay miktarı,
                  program süresi ve önceki geri alım işlemleri incelenmelidir.
                </p>
                <p>
                  Daha sonra şirketin finansal durumuna bakılmalıdır. Şirketin
                  borçluluğu yüksek mi, faaliyetlerinden nakit üretiyor mu, geri
                  alım için kullanılan para şirketin büyüme yatırımlarını
                  aksatabilir mi, hisse değerlemesi gerçekten cazip mi gibi
                  sorular sorulmalıdır.
                </p>
                <p>
                  Son aşamada piyasa koşulları ve teknik görünüm değerlendirilir.
                  Geri alım haberi kısa vadeli hareket yaratabilir; ancak kalıcı
                  değer oluşumu şirketin faaliyet performansına bağlıdır.
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
                Yatırım kararları kişisel risk-getiri tercihleri, güncel veriler
                ve detaylı analiz dikkate alınarak verilmelidir.
              </section>

              <RehberAltBolumler currentHref="/rehberler/pay-geri-alim-programi-nedir" />
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
