import Image from "next/image";
import Link from "@/components/NoPrefetchLink";
import type { Metadata } from "next";
import HaberIlgiliBolumler from "@/components/HaberIlgiliBolumler";
import AuthorBox from "@/components/AuthorBox";
import HaberAltKisim from "@/components/HaberAltKisim";
import KapCardLinks from "@/components/KapCardLinks";
import { formatHaberTarihi, getHaberDosyaTarihi } from "@/lib/haber-tarih";

const haberSaati = getHaberDosyaTarihi(import.meta.url);
const haberTarihi = formatHaberTarihi(haberSaati);

export const metadata: Metadata = {
  title: "30 Haziran KAP: KAREL Proje, ALTNY Sözleşme, ASELS Tesis",
  description:
    "KAREL 100 milyon dolarlık proje nominasyonu, ALTNY sözleşmeleri, ASELS yeni tesisleri ve 30 Haziran KAP etkileri.",
  alternates: {
    canonical:
      "https://www.hocaileborsa.com/haber/30-haziran-2026-onemli-kap-haberleri",
  },
  openGraph: {
    type: "article",
    title: "30 Haziran KAP: KAREL Proje, ALTNY Sözleşme, ASELS Tesis",
    description:
      "KAREL 100 milyon dolarlık proje nominasyonu, ALTNY sözleşmeleri, ASELS yeni tesisleri ve 30 Haziran KAP etkileri.",
    images: [
      {
        url: "https://www.hocaileborsa.com/kap-ozeti-discover.webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "30 Haziran KAP: KAREL Proje, ALTNY Sözleşme, ASELS Tesis",
    description:
      "KAREL 100 milyon dolarlık proje nominasyonu, ALTNY sözleşmeleri, ASELS yeni tesisleri ve 30 Haziran KAP etkileri.",
    images: [
      "https://www.hocaileborsa.com/kap-ozeti-discover.webp",
    ],
  },
};

const etkiStilleri: Record<string, string> = {
  "Pozitif": "border-emerald-200 bg-emerald-50 text-emerald-800",
  "Sınırlı Pozitif": "border-teal-200 bg-teal-50 text-teal-800",
  "Negatif": "border-red-200 bg-red-50 text-red-800",
  "Sınırlı Negatif": "border-orange-200 bg-orange-50 text-orange-800",
  "Nötr / Takip Edilmeli": "border-slate-200 bg-white text-slate-700",
};

const kapHaberleri = [
  {
    "baslik": "Karel Elektronik (KAREL)",
    "etki": "Pozitif",
    "kapLink": "https://www.kap.org.tr/Bildirim/1621707",
    "metin": "KAREL, %54 oranında pay sahibi olduğu bağlı ortaklığı Daiichi Elektronik'in lider bir OEM otomotiv şirketiyle araç bileşenlerinin geliştirilmesi, validasyonu ve seri üretimi konusunda proje nominasyonu aldığını açıkladı. Yeni iş ilişkisinin toplam bedeli yaklaşık 5 yıl için 100 milyon ABD Doları seviyesinde duyuruldu.",
    "etkiYorumu": "Uzun vadeli ve döviz bazlı iş hacmi nedeniyle pozitif. Etki, projenin üretim takvimi ve Daiichi'nin konsolide finansallara katkısıyla izlenecek."
  },
  {
    "baslik": "Kimteks Poliüretan (KMPUR)",
    "etki": "Sınırlı Pozitif",
    "kapLink": "https://www.kap.org.tr/Bildirim/1621708",
    "metin": "KMPUR, Milli Savunma Bakanlığı Askeri Fabrikalar Genel Müdürlüğü tarafından yürütülen teknik ve idari değerlendirme süreçlerini tamamlayarak Onaylı Tedarikçi Belgesi almaya hak kazandığını duyurdu. Belgenin 5 Haziran 2031 tarihine kadar geçerli olduğu açıklandı.",
    "etkiYorumu": "Savunma sanayii tedarik süreçlerine katılım yeterliliği sağlaması nedeniyle sınırlı pozitif. Somut finansal etki, ileride alınabilecek siparişlerle netleşir."
  },
  {
    "baslik": "Altınay Savunma (ALTNY)",
    "etki": "Pozitif",
    "kapLink": "https://www.kap.org.tr/Bildirim/1621734",
    "metin": "ALTNY bağlı ortaklığı TAAC Havacılık, yurt dışında yerleşik bir müşteriyle kritik havacılık ekipmanlarının geliştirilmesi ve tedarikine yönelik 13,2 milyon ABD Doları tutarında sözleşme imzaladı.",
    "etkiYorumu": "Savunma ve havacılık tarafında döviz bazlı yeni iş ilişkisi olduğu için pozitif. Katkı, teslimat ve proje takvimine göre finansallara yansıyacak."
  },
  {
    "baslik": "Altınay Savunma (ALTNY)",
    "etki": "Sınırlı Pozitif",
    "kapLink": "https://www.kap.org.tr/Bildirim/1621735",
    "metin": "ALTNY, yurt dışında yerleşik bir müşteriyle kara araçlarına yönelik kritik bileşen üretimi kapsamında 1,54 milyon ABD Doları tutarında sözleşme imzaladı.",
    "etkiYorumu": "Aynı gün açıklanan diğer savunma-havacılık sözleşmesini destekleyen ek iş ilişkisi niteliğinde. Tutar daha sınırlı olsa da şirketin sipariş görünümü açısından olumlu."
  },
  {
    "baslik": "ASELSAN (ASELS)",
    "etki": "Pozitif",
    "kapLink": "https://www.kap.org.tr/Bildirim/1621738",
    "metin": "ASELSAN, artan sipariş hacmini karşılamak ve üretim altyapısını güçlendirmek amacıyla 40 milyon ABD Doları yatırımla tamamlanan 17.360 metrekare kapalı alana sahip Akıllı Mühimmat ve Sualtı Sistemleri İlave Üretim ve Test Merkezlerini devreye aldığını açıkladı.",
    "etkiYorumu": "Üretim kapasitesi, teslimat hızı ve kalite kabiliyetini desteklediği için pozitif. Finansal etki zaman içinde üretim ve teslimat performansıyla görülecek."
  },
  {
    "baslik": "Fonet Bilgi Teknolojileri (FONET)",
    "etki": "Pozitif",
    "kapLink": "https://www.kap.org.tr/Bildirim/1621865",
    "metin": "FONET, Aydın İl Sağlık Müdürlüğü tarafından yapılan 36 aylık Sağlık Bilgi Yönetim Sistemi hizmet alımı ihalesinde 198.476.457 TL ile en uygun teklifin şirket tarafından verildiğini açıkladı. İhale sonucu KAP açıklamasında devam ediyor olarak belirtildi.",
    "etkiYorumu": "Ana faaliyet alanıyla uyumlu ve 36 aylık hizmet geliri potansiyeli taşıdığı için pozitif. Ancak kesin sözleşme aşaması için sonraki bildirimler takip edilmeli."
  },
  {
    "baslik": "Özyaşar Tel ve Galvanizleme (OZYSR)",
    "etki": "Sınırlı Pozitif",
    "kapLink": "https://www.kap.org.tr/Bildirim/1621884",
    "metin": "OZYSR, Türkiye İhracatçılar Meclisi tarafından açıklanan 2025 yılı İlk 1000 İhracatçı Firma Listesi'nde 616. sırada yer aldığını duyurdu. Şirket ayrıca 2026 yılının ilk çeyreğinde toplam hasılat içinde ihracat payının %78,7 olduğunu açıkladı.",
    "etkiYorumu": "İhracat görünürlüğü ve döviz bazlı satış yapısı açısından sınırlı pozitif. Haber daha çok prestij ve faaliyet kompozisyonu açısından izlenmeli."
  },
  {
    "baslik": "Alcatel Lucent Teletaş (ALCTL)",
    "etki": "Nötr / Takip Edilmeli",
    "kapLink": "https://www.kap.org.tr/Bildirim/1621904",
    "metin": "ALCTL, Nokia Participations'ın şirket sermayesinin %65'ini temsil eden paylarının 43 milyon Avro bedelle Nokia Solutions and Networks Oy'ye devredilmesi işleminin tamamlandığını açıkladı. İşlem sonrasında nihai pay sahipliği oranının aynı kaldığı ve yönetim kontrolünde değişiklik olmadığı belirtildi.",
    "etkiYorumu": "Grup içi pay devri olduğu ve yönetim kontrolünde değişiklik olmadığı için nötr. Pay alım teklifi yükümlülüğü doğmadığı bilgisi yatırımcı açısından takip başlığı."
  },
  {
    "baslik": "BMS Birleşik Metal (BMSTL)",
    "etki": "Sınırlı Pozitif",
    "kapLink": "https://www.kap.org.tr/Bildirim/1621936",
    "metin": "BMSTL, %100 bedelsiz sermaye artırımı kapsamında sermayesinin 150 milyon TL'den 300 milyon TL'ye çıkarılmasına ilişkin payların 1 Temmuz 2026'dan itibaren pay sahiplerine bedelsiz olarak dağıtılmaya başlanacağını açıkladı. Kayıt tarihi 2 Temmuz, ödeme tarihi 3 Temmuz olarak duyuruldu.",
    "etkiYorumu": "Bedelsiz pay dağıtım takviminin netleşmesi yatırımcı ilgisi açısından sınırlı pozitif. İşlem şirket kasasına yeni nakit girişi sağlamaz."
  }
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "30 Haziran KAP: KAREL Proje, ALTNY Sözleşme, ASELS Tesis",
  description:
    "KAREL 100 milyon dolarlık proje nominasyonu, ALTNY sözleşmeleri, ASELS yeni tesisleri ve 30 Haziran KAP etkileri.",
  datePublished: "2026-06-30T09:00:00+03:00",
  dateModified: "2026-06-30T23:30:00+03:00",
  url: "https://www.hocaileborsa.com/haber/30-haziran-2026-onemli-kap-haberleri",
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

export default function OtuzHaziranKapHaberleriPage() {
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
              alt="30 Haziran KAP: KAREL Proje, ALTNY Sözleşme, ASELS Tesis"
              fill

              sizes="(min-width: 1024px) 896px, 100vw"
className="object-cover"
            />
          </div>

          <div className="p-6 md:p-10">
            <h1 className="text-2xl font-bold leading-tight tracking-tight text-slate-900 md:text-3xl lg:text-4xl">
              30 Haziran KAP: KAREL Proje, ALTNY Sözleşme, ASELS Tesis
            </h1>

            <div className="mb-4 mt-3 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center rounded-md bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700 ring-1 ring-inset ring-blue-600/20">
                KAP Bildirimleri
              </span>
              <time dateTime={haberSaati} className="text-sm text-slate-500">
                {haberTarihi}
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
                Borsa İstanbul’da 30 Haziran 2026 Salı günü KAP’a düşen önemli
                bildirimlerde savunma ve teknoloji odaklı sözleşmeler, üretim
                yatırımları, kamu ihaleleri, ihracat başarıları, grup içi pay devri
                ve bedelsiz sermaye artırımı takvimi öne çıktı.
              </p>

              <div className="rounded-xl border border-blue-200 bg-blue-50 p-4 text-sm font-medium leading-7 text-blue-900 md:text-base">
                Günün ayrı haber değeri taşıyan başlıkları KAREL, ALTNY, ASELS
                ve FONET tarafında oluştu. KMPUR, OZYSR, ALCTL ve BMSTL
                bildirimleri ise gün sonu önemli KAP haberleri içinde takip
                edilmesi gereken gelişmeler arasında yer aldı.
              </div>

              <div className="space-y-5">
                {kapHaberleri.map((haber) => (
                  <section
                    key={haber.baslik + haber.kapLink}
                    className="rounded-xl border border-slate-200 bg-slate-50 p-4"
                  >
                    <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                      <h2 className="text-base font-semibold text-slate-800">
                        {haber.baslik}
                      </h2>
                      <span
                        className={`inline-flex w-fit rounded-md border px-2.5 py-1 text-xs font-semibold ${
                          etkiStilleri[haber.etki] ??
                          etkiStilleri["Nötr / Takip Edilmeli"]
                        }`}
                      >
                        Olası Etki: {haber.etki}
                      </span>
                    </div>

                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      {haber.metin}
                    </p>

                    <p className="mt-2 rounded-lg bg-white px-3 py-2 text-xs font-medium leading-6 text-slate-600 ring-1 ring-slate-200">
                      {haber.etkiYorumu}
                    </p>

                    <a
                      href={haber.kapLink}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="mt-3 inline-block text-sm font-medium text-slate-700 underline underline-offset-2"
                    >
                      Orjinal Kap içeriği
                    </a>

                    <KapCardLinks baslik={haber.baslik} />
                  </section>
                ))}
              </div>

              <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm font-medium leading-7 text-emerald-900 md:text-base">
                Günün pozitif algılanabilecek haberleri arasında KAREL’in
                100 milyon dolarlık OEM proje nominasyonu, ALTNY’nin savunma ve
                havacılık sözleşmeleri, ASELSAN’ın yeni üretim ve test merkezleri
                ile FONET’in Aydın İl Sağlık Müdürlüğü ihalesinde en uygun teklifi
                vermesi öne çıktı.
              </div>

              <HaberIlgiliBolumler
                slug="30-haziran-2026-onemli-kap-haberleri"
                baslik="30 Haziran KAP: KAREL Proje, ALTNY Sözleşme, ASELS Tesis"
              />

              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm font-medium leading-7 text-amber-900 md:text-base">
                ⚠️ Bu özet bilgilendirme amaçlıdır, yatırım tavsiyesi değildir.
                KAP bildirimlerinde yer alan bazı süreçler ihale, proje, pay devri
                veya bedelsiz pay dağıtım takvimi aşamasındadır. Nihai finansal
                etki için şirketlerin sonraki açıklamaları ve finansal sonuçları
                takip edilmelidir.
              </div>
            </div>
          </div>

          <HaberAltKisim href="/haber/30-haziran-2026-onemli-kap-haberleri" />

          <AuthorBox />
        </article>
      </div>
    </main>
  );
}
