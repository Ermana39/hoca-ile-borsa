import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import HaberIlgiliBolumler from "@/components/HaberIlgiliBolumler";
import AuthorBox from "@/components/AuthorBox";
import HaberAltKisim from "@/components/HaberAltKisim";
import KapCardLinks from "@/components/KapCardLinks";

export const metadata: Metadata = {
  title: "16 Haziran 2026 Salı Önemli KAP Haberleri",
  description:
    "16 Haziran 2026 Salı günü KAP'a düşen önemli bildirimlerin özeti: ASELSAN 780 milyon Euro sözleşme, Kontrolmatik finansal durum açıklaması, Alarko enerji iştirak yapısı, İş Girişim bağlı ortaklık sermaye artırımı, Türk İlaç münhasırlık anlaşması ve MARBL yeni iş ilişkisi.",
  alternates: {
    canonical:
      "https://www.hocaileborsa.com/haber/16-haziran-2026-onemli-kap-haberleri",
  },
  openGraph: {
    type: "article",
    images: [{ url: "https://www.hocaileborsa.com/kap-ozeti-discover.webp" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.hocaileborsa.com/kap-ozeti-discover.webp"],
  },
};

const kapHaberleri = [
  {
    baslik: "ASELSAN (ASELS)",
    kapLink: "https://www.kap.org.tr/tr/Bildirim/1617528",
    metin:
      "ASELSAN, Türkiye Cumhuriyeti Cumhurbaşkanlığı Savunma Sanayii Başkanlığı ile hava savunma sistemlerinin tedarikine yönelik 780 milyon Euro tutarında yeni sözleşme imzaladığını açıkladı. Teslimatların 2028-2032 yılları arasında yapılması planlanıyor. Bu açıklama, hem sözleşme tutarının büyüklüğü hem de savunma sanayinde uzun vadeli sipariş görünürlüğünü artırması nedeniyle günün en güçlü KAP başlığı oldu. Şirketin iş portföyüne döviz bazlı ve yüksek hacimli yeni bir kalem eklenmesi, gelecek yıllardaki ciro görünümü açısından pozitif değerlendirilebilir.",
  },
  {
    baslik: "Kontrolmatik (KONTR)",
    kapLink: "https://www.kap.org.tr/tr/Bildirim/1617912",
    metin:
      "Kontrolmatik, şirketin mevcut operasyonel ve finansal durumu hakkında kapsamlı bir açıklama yaptı. Açıklamada devam eden projelerin sürdüğü, ancak nakit akışı, finansmana erişim ve likidite tarafında geçici sıkıntılar yaşandığı belirtildi. Şirketin bankalarla finansal yeniden yapılandırma görüşmelerini sürdürmesi, bedelli sermaye artırımı başvurusunun devam etmesi ve gerekirse bazı varlık satış seçeneklerinin değerlendirilebileceğinin belirtilmesi nedeniyle bu bildirim yüksek önem taşıyor. Açıklama, pozitif bir büyüme haberinden çok şirketin finansal risklerinin ve çözüm arayışlarının yatırımcıya açık şekilde duyurulması açısından kritik.",
  },
  {
    baslik: "Alarko Holding (ALARK)",
    kapLink: "https://www.kap.org.tr/tr/Bildirim/1617910",
    metin:
      "Alarko Holding, ortak girişimi Alcen Enerji Dağıtım ve Perakende Satış Hizmetleri A.Ş. ile ilgili olağanüstü genel kurul sürecine ilişkin açıklama yaptı. Daha önce açıklanan yapı kapsamında Cenal Karabiga Termik Santrali'nin Cengiz Enerji tarafında, elektrik dağıtım ve satış şirketlerinin ise Alarko Enerji tarafında toplanmasına yönelik sürecin uygulanması için karar alındığı belirtildi. Bu gelişme, Alarko'nun enerji portföyünün sadeleşmesi ve faaliyet alanlarının daha net ayrışması açısından önemli. İşlemin ticaret siciline tescili sonrası yürürlüğe girecek olması nedeniyle sonraki KAP açıklamaları da takip edilmeli.",
  },
  {
    baslik: "İş Girişim Sermayesi (ISGSY)",
    kapLink: "https://www.kap.org.tr/tr/Bildirim/1617868",
    metin:
      "İş Girişim Sermayesi, yüzde 70 oranında pay sahibi olduğu Enlila Sağlık İlaç Arge Üretim ve Laboratuvar A.Ş.'nin sermaye artırımına ilişkin açıklama yaptı. Şirket, kendisine tahsis edilen paylar için 453,9 milyon TL tutarında sermaye ve emisyon primi ödemesi gerçekleştirdiğini duyurdu. Harvard'ın da sermaye artırımına katılması, bağlı ortaklığın yatırımcı yapısı açısından dikkat çekiyor. Bu bildirim, İş Girişim'in portföy şirketine yüksek tutarlı kaynak aktarması ve sağlık/ilaç alanındaki büyüme planlarını desteklemesi nedeniyle haber değeri taşıyor.",
  },
  {
    baslik: "Türk İlaç ve Serum (TRILC)",
    kapLink: "https://www.kap.org.tr/tr/Bildirim/1617732",
    metin:
      "Türk İlaç ve Serum, tesislerinde üretilen tüm ilaçların eczane pazarındaki pazarlama ve dağıtımı için Pharexpo İlaç Ecza Deposu ile münhasırlık anlaşması imzaladığını açıkladı. Şirket, bu anlaşmanın eczane pazarından alınacak payı artırarak ciro ve FAVÖK'e katkı sağlamasını beklediğini belirtti. Bu açıklama, şirketin satış kanallarını genişletmesi ve eczane tarafındaki erişimini güçlendirmesi açısından önemli. Anlaşmanın finansallara gerçek etkisi, ilerleyen dönemlerde satış hacmi ve kârlılık tarafındaki gerçekleşmelerle daha net görülecek.",
  },
  {
    baslik: "Tureks Turunç Madencilik (MARBL)",
    kapLink: "https://www.kap.org.tr/tr/Bildirim/1617813",
    metin:
      "Tureks Turunç Madencilik, ABD'nin Virginia eyaletinde yapılacak lüks konut projesi için mermer tedarik anlaşması yaptığını açıkladı. Sipariş toplamı 259.377 ABD doları olarak duyuruldu. Tutar şirket ölçeğine göre sınırlı olsa da ABD pazarında proje bazlı yeni sipariş alınması ihracat ve müşteri çeşitliliği açısından takip edilebilir. Bu nedenle haber, günün en büyük KAP başlıkları arasında değil ancak yeni iş ilişkisi olması nedeniyle öne çıkarılabilecek nitelikte.",
  },
  {
    baslik: "Günün Öne Çıkan Pozitif Başlıkları",
    kapLink: "https://www.kap.org.tr/tr/Bildirim/1617528",
    metin:
      "16 Haziran 2026 KAP gündeminde en güçlü pozitif başlık ASELSAN'ın 780 milyon Euro tutarındaki savunma sanayi sözleşmesi oldu. TRILC'nin münhasırlık anlaşması satış kanalı genişlemesi açısından, MARBL'ın ABD siparişi ise ihracat bağlantısı açısından izlenebilir. ISGSY tarafında Enlila Sağlık'a yapılan yüksek tutarlı sermaye katkısı da portföy şirketine verilen finansal desteği göstermesi bakımından dikkat çekti.",
  },
  {
    baslik: "Yakından Takip Edilecek Bildirimler",
    kapLink: "https://www.kap.org.tr/tr/Bildirim/1617912",
    metin:
      "Kontrolmatik'in açıklaması günün en yakından takip edilmesi gereken risk başlığı oldu. Şirketin devam eden projeleri bulunsa da nakit akışı, finansmana erişim, banka yapılandırma görüşmeleri, bedelli sermaye artırımı süreci ve çalışan maaş ödemelerinde gecikme gibi konular yatırımcı açısından dikkatle izlenmeli. Alarko Holding tarafında ise enerji iştiraklerinin ayrıştırılması süreci tamamlanana kadar gelecek ek açıklamalar önem taşıyacak.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "16 Haziran 2026 Salı Önemli KAP Haberleri",
  description:
    "16 Haziran 2026 Salı günü KAP'a düşen önemli bildirimlerin özeti: ASELSAN 780 milyon Euro sözleşme, Kontrolmatik finansal durum açıklaması, Alarko enerji iştirak yapısı, İş Girişim bağlı ortaklık sermaye artırımı, Türk İlaç münhasırlık anlaşması ve MARBL yeni iş ilişkisi.",
  datePublished: "2026-06-16T09:00:00+03:00",
  dateModified: "2026-06-16T21:00:00+03:00",
  url: "https://www.hocaileborsa.com/haber/16-haziran-2026-onemli-kap-haberleri",
  author: {
    "@type": "Person",
    "@id": "https://www.hocaileborsa.com/yazar/erman-hoca#person",
    name: "Erman Hoca",
    url: "https://www.hocaileborsa.com/yazar/erman-hoca",
  },
  publisher: {
    "@type": "Organization",
    "@id": "https://www.hocaileborsa.com/#organization",
    name: "Hoca İle Borsa",
    url: "https://www.hocaileborsa.com",
    logo: {
      "@type": "ImageObject",
      url: "https://www.hocaileborsa.com/icon-512.png",
    },
  },
  image: "https://www.hocaileborsa.com/kap-ozeti-discover.webp",
  inLanguage: "tr",
};

export default function HaberKapOzetiPage() {
  return (
    <main className="min-h-screen bg-[#f8fafc] px-4 py-6 md:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="mx-auto max-w-4xl">
        <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_2px_16px_rgba(15,23,42,0.07)]">
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-zinc-100">
            <Image
              src="/kap-ozeti-discover.webp"
              alt="16 Haziran 2026 Salı Önemli KAP Haberleri"
              fill
              unoptimized
              className="object-cover"
            />
          </div>

          <div className="p-6 md:p-10">
            <h1 className="text-2xl font-bold leading-tight tracking-tight text-slate-900 md:text-3xl lg:text-4xl">
              16 Haziran 2026 Salı Önemli KAP Haberleri
            </h1>

            <div className="mb-4 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center rounded-md bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700 ring-1 ring-inset ring-blue-600/20">
                Finans
              </span>
              <time dateTime="2026-06-16" className="text-sm text-slate-500">
                16 Haziran 2026
              </time>
              <span className="text-slate-300">·</span>
              <Link
                href="/yazar/erman-hoca"
                className="text-sm font-semibold text-slate-500 hover:text-blue-600"
              >
                Erman Hoca
              </Link>
            </div>

            <div className="mt-6 space-y-6 text-base leading-8 text-slate-700 md:text-lg">
              <p>
                Borsa İstanbul’da 16 Haziran 2026 Salı günü KAP’a düşen önemli
                bildirimlerde ASELSAN’ın büyük ölçekli savunma sanayi
                sözleşmesi, Kontrolmatik’in finansal durum açıklaması, Alarko
                Holding’in enerji iştirak yapısına ilişkin kararı, İş Girişim’in
                bağlı ortaklık sermaye artırımı, Türk İlaç’ın münhasırlık
                anlaşması ve MARBL’ın yeni iş ilişkisi öne çıktı.
              </p>

              <div className="space-y-5">
                {kapHaberleri.map((haber) => (
                  <section
                    key={haber.baslik}
                    className="rounded-xl border border-slate-200 bg-slate-50 p-4"
                  >
                    <h2 className="text-base font-semibold text-slate-800">
                      {haber.baslik}
                    </h2>
                    <p className="mt-1.5 text-sm text-slate-600 leading-relaxed">
                      {haber.metin}
                    </p>
                    <a
                      href={haber.kapLink}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="mt-3 inline-flex text-sm font-medium text-slate-500 underline underline-offset-2 transition hover:text-slate-700"
                    >
                      Orijinal KAP bildirimi
                    </a>
                    <KapCardLinks baslik={haber.baslik} />
                  </section>
                ))}
              </div>

              <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm font-medium leading-7 text-emerald-900 md:text-base">
                Günün en önemli KAP bildirimi ASELSAN’ın 780 milyon Euro
                tutarındaki hava savunma sistemleri sözleşmesi oldu. KONTR’nin
                finansal yapı açıklaması, ALARK’ın enerji iştirak yapısındaki
                düzenleme süreci, ISGSY’nin Enlila Sağlık’a sermaye katkısı,
                TRILC’nin münhasırlık anlaşması ve MARBL’ın ABD kaynaklı yeni
                siparişi de günün öne çıkan başlıkları arasında yer aldı.
              </div>
              <HaberIlgiliBolumler
                slug="16-haziran-2026-onemli-kap-haberleri"
                baslik="16 Haziran 2026 Salı Önemli KAP Haberleri"
              />

              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm font-medium leading-7 text-amber-900 md:text-base">
                ⚠️ Bu özet bilgilendirme amaçlıdır, yatırım tavsiyesi değildir.
              </div>
            </div>
          </div>
          <HaberAltKisim href="/haber/16-haziran-2026-onemli-kap-haberleri" />

          <AuthorBox />
        </article>
      </div>
    </main>
  );
}
