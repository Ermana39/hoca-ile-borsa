import { seoAciklamasi } from "@/lib/seo-metadata";
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
  title: "2 Temmuz KAP: AKSEN Kredi, KAREL Sözleşme, ERCB Sipariş",
  description:
    seoAciklamasi("AKSEN 124 milyon dolar kredi, KAREL savunma sözleşmesi, ERCB 15 milyon dolar sipariş, SASA sermaye artırımı ve diğer KAP etkileri.", "Haberde gelişmenin ayrıntıları, açıklanan veriler ve yatırımcıların izleyebileceği temel noktalar yer alıyor."),
  alternates: {
    canonical:
      "https://www.hocaileborsa.com/haber/2-temmuz-2026-onemli-kap-haberleri",
  },
  openGraph: {
    type: "article",
    title: "2 Temmuz KAP: AKSEN Kredi, KAREL Sözleşme, ERCB Sipariş",
    description:
      "AKSEN 124 milyon dolar kredi, KAREL savunma sözleşmesi, ERCB 15 milyon dolar sipariş, SASA sermaye artırımı ve diğer KAP etkileri.",
    images: [
      {
        url: "https://www.hocaileborsa.com/kap-ozeti-discover.webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "2 Temmuz KAP: AKSEN Kredi, KAREL Sözleşme, ERCB Sipariş",
    description:
      "AKSEN 124 milyon dolar kredi, KAREL savunma sözleşmesi, ERCB 15 milyon dolar sipariş, SASA sermaye artırımı ve diğer KAP etkileri.",
    images: [
      "https://www.hocaileborsa.com/kap-ozeti-discover.webp",
    ],
  },
};

const etkiStilleri: Record<string, string> = {
  "Pozitif": "border-emerald-200 bg-emerald-50 text-emerald-800",
  "Pozitif / Takip Edilmeli": "border-emerald-200 bg-emerald-50 text-emerald-800",
  "Sınırlı Pozitif": "border-teal-200 bg-teal-50 text-teal-800",
  "Negatif": "border-red-200 bg-red-50 text-red-800",
  "Sınırlı Negatif": "border-orange-200 bg-orange-50 text-orange-800",
  "Nötr / Takip Edilmeli": "border-slate-200 bg-white text-slate-700",
};

const kapHaberleri = [
  {
    "baslik": "Aksa Enerji (AKSEN)",
    "etki": "Pozitif / Takip Edilmeli",
    "kapLink": "https://www.kap.org.tr/Bildirim/1622771",
    "metin": "AKSEN, Mersin’de yer alan 100,08 MW kurulu güce sahip depolamalı RES yatırımında kullanılmak üzere BBVA’nın Hong Kong şubesi ile 124 milyon ABD doları tutarında kredi sözleşmesi imzaladı. Kredi, Sinosure garantili ve ilk 2 yılı geri ödemesiz olmak üzere toplam 12 yıl vadeli olarak açıklandı.",
    "etkiYorumu": "Yenilenebilir enerji yatırımı için uzun vadeli dış finansman sağlanması pozitif. Etkinin proje takvimi, yatırımın devreye alınma süreci ve finansman maliyetleriyle birlikte izlenmesi gerekir."
  },
  {
    "baslik": "SASA Polyester (SASA)",
    "etki": "Pozitif / Takip Edilmeli",
    "kapLink": "https://www.kap.org.tr/Bildirim/1622784",
    "metin": "SASA’nın şarta bağlı sermaye artırımı başvurusu SPK tarafından onaylandı. Mevcut sermaye 47.040.878.514,69 TL’den 52.501.931.146,27 TL’ye çıkarılacak. Rüçhan hakkı kullandırılmadan tahsisli artırılacak sermaye tutarı 5.461.052.631,58 TL olarak bildirildi.",
    "etkiYorumu": "Şarta bağlı sermaye artırımı, paya dönüştürülebilir tahvil sahiplerinin dönüşüm süreciyle bağlantılı. Mevcut ortakların yeni pay alma hakları kısıtlanacağı için sermaye yapısına etkisi takip edilmeli."
  },
  {
    "baslik": "Erciyas Çelik Boru (ERCB)",
    "etki": "Pozitif",
    "kapLink": "https://www.kap.org.tr/Bildirim/1622776",
    "metin": "ERCB, DSİ Genel Müdürlüğü tarafından yürütülen Sakarya-Kocaeli İlleri İçme Suyu İsale Hattı 1. Kısım Yapım İşi kapsamında çelik boru tedarikine ilişkin iki fazda sipariş aldığını açıkladı. Yaklaşık 14.000 metre çelik boru üretim ve tedarikini kapsayan sipariş bedeli yaklaşık 15 milyon ABD doları olarak duyuruldu.",
    "etkiYorumu": "Altyapı projesi kapsamında alınan sipariş şirketin iş hacmini destekleyici nitelikte. Finansal katkı üretim ve teslimat takvimiyle birlikte dönemsel sonuçlara yansıyacaktır."
  },
  {
    "baslik": "Trabzon Liman (TLMAN)",
    "etki": "Sınırlı Pozitif",
    "kapLink": "https://www.kap.org.tr/Bildirim/1622825",
    "metin": "TLMAN, Sanayi ve Teknoloji Bakanlığı Teşvik Uygulama ve Yabancı Sermaye Genel Müdürlüğü’nden 605608 numaralı yatırım teşvik belgesi aldığını açıkladı. Belge kapsamında toplam yatırım tutarı yerli makine ve teçhizat için 249.750.000 TL olarak bildirildi.",
    "etkiYorumu": "Yatırım teşvik belgesi; KDV istisnası, gümrük vergisi muafiyeti, vergi indirimi ve 2 yıl SGK işveren hissesi desteği gibi unsurlar içeriyor. Etki, yatırımın uygulama süreciyle birlikte netleşir."
  },
  {
    "baslik": "Konya Kağıt (KONKA)",
    "etki": "Pozitif / Takip Edilmeli",
    "kapLink": "https://www.kap.org.tr/Bildirim/1622880",
    "metin": "KONKA, İzmir Torbalı’daki Konya Kağıt Sanayi ve Ticaret A.Ş. İzmir Özel Endüstri Bölgesi için ilk imar planının kesinleştiğini açıkladı. Bildirime göre ilan sürecinde gelen itirazlar değerlendirilerek reddedildi ve imar planı mevcut haliyle uygun bulundu.",
    "etkiYorumu": "Dekor Kâğıt Yatırımı, Enerji ve Buhar Üretim Tesisi Entegre Projesi için imar planı sürecinin tamamlanması yatırım süreci açısından önemli bir eşik. Ancak yatırımın finansal etkisi sonraki aşamalara bağlı."
  },
  {
    "baslik": "Bera Holding (BERA)",
    "etki": "Pozitif / Takip Edilmeli",
    "kapLink": "https://www.kap.org.tr/Bildirim/1622882",
    "metin": "BERA, bağlı ortaklığı Konya Kağıt’ın İzmir Özel Endüstri Bölgesi kapsamındaki ilk imar planının kesinleştiğini duyurdu. Açıklama, KONKA’nın aynı konuya ilişkin bildirimiyle bağlantılı olarak dekor kâğıt yatırımı ve entegre enerji-buhar üretim tesisi sürecini ilgilendiriyor.",
    "etkiYorumu": "BERA açısından gelişme bağlı ortaklık üzerinden dolaylı etki taşıyor. Yatırım sürecinin ilerlemesi pozitif izlenebilir; ancak finansal katkı için yatırımın fiili uygulama aşamaları takip edilmeli."
  },
  {
    "baslik": "Karel Elektronik (KAREL)",
    "etki": "Pozitif",
    "kapLink": "https://www.kap.org.tr/Bildirim/1622941",
    "metin": "KAREL, Türkiye’de faaliyet gösteren yerli bir müşteri ile savunma sanayinde kullanılmak üzere askeri elektronik teçhizat üretimi ve teslimatı için 5.862.100 ABD doları tutarında sözleşme imzaladı. Şirket, yeni iş ilişkisinin faaliyetlerine etkisini olumlu olarak açıkladı.",
    "etkiYorumu": "Savunma sanayii odaklı döviz bazlı sözleşme şirketin iş hacmi açısından pozitif. Müşteri adı ve teslimat takvimi açıklanmadığı için gelir etkisi dönemsel finansallarla birlikte izlenmeli."
  },
  {
    "baslik": "Soho Giyim ve Enerji (SOHOE)",
    "etki": "Nötr / Takip Edilmeli",
    "kapLink": "https://www.kap.org.tr/Bildirim/1622950",
    "metin": "SOHOE paylarının halka arzına ilişkin sonuçlar KAP’ta yayımlandı. Bildirim, halka arz sürecinin tamamlanan dağıtım ve sonuç aşamasına ilişkin ek doküman içeriyor.",
    "etkiYorumu": "Halka arz sonuçları yeni işlem görecek şirketler için yatırımcı tabanı, dağıtım yapısı ve ilk işlem günü ilgisi açısından takip edilir. Tek başına faaliyet performansı göstergesi değildir."
  },
  {
    "baslik": "Tarkim Bitki Koruma (TARKM)",
    "etki": "Sınırlı Pozitif",
    "kapLink": "https://www.kap.org.tr/Bildirim/1622951",
    "metin": "TARKM, %100 bağlı ortaklığı Cropsafe Bitki Koruma A.Ş.’nin Manisa Ticaret Sicil Müdürlüğü tarafından 01.07.2026 tarihinde tescil ve ilan edildiğini açıkladı. Yeni şirketin faaliyet konusu bitki koruma ürünleri üretim ve satışı olarak bildirildi.",
    "etkiYorumu": "Yeni bağlı ortaklık, şirketin yurt içi ve yurt dışı satış kanallarını geliştirme ve yeni pazarlara erişim stratejisi açısından takip edilmeli. Başlangıç aşamasında finansal etki sınırlı olabilir."
  },
  {
    "baslik": "Koton Mağazacılık (KOTON)",
    "etki": "Nötr / Takip Edilmeli",
    "kapLink": "https://www.kap.org.tr/Bildirim/1622997",
    "metin": "KOTON, Gebze/Kocaeli adresindeki E-Ticaret Depo Şubesi’nin kapatılmasına karar verdiğini açıkladı. Şirket, omnichannel odağı kapsamında mağaza stoklarının e-ticaret stoğuna entegrasyonunun tamamlandığını ve depo kapanışının stok verimliliğine katkı sağlamasının beklendiğini bildirdi.",
    "etkiYorumu": "Operasyonel verimlilik amacı taşıyan bu karar kısa vadede sınırlı etki yaratabilir. Stok devir hızı, lojistik giderler ve e-ticaret operasyonları üzerindeki katkı sonraki dönemlerde izlenmeli."
  },
  {
    "baslik": "Marka Yatırım Holding (MARKA)",
    "etki": "Nötr / Takip Edilmeli",
    "kapLink": "https://www.kap.org.tr/Bildirim/1623074",
    "metin": "MARKA, bağlı ortaklığı Momentum Girişim Holding A.Ş. ile US Girişim Danışmanlık A.Ş. arasında oluşturulan konsorsiyumun, yiyecek-içecek ve kafe-restoran işletmeciliği alanında faaliyet gösteren bir firma için yatırım görüşmelerine başladığını açıkladı. Süreç kapsamında iyi niyet ve gizlilik sözleşmesi imzalandı.",
    "etkiYorumu": "Bildirim henüz ön görüşme ve inceleme süreci aşamasında. Olası satın alma, birleşme veya iş birliği kesinleşmediği için haber takip edilmeli; kesin finansal etki için yeni açıklamalar beklenmeli."
  }
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "2 Temmuz KAP: AKSEN Kredi, KAREL Sözleşme, ERCB Sipariş",
  description:
    "AKSEN 124 milyon dolar kredi, KAREL savunma sözleşmesi, ERCB 15 milyon dolar sipariş, SASA sermaye artırımı ve diğer KAP etkileri.",
  datePublished: "2026-07-02T09:00:00+03:00",
  dateModified: "2026-07-02T23:30:00+03:00",
  url: "https://www.hocaileborsa.com/haber/2-temmuz-2026-onemli-kap-haberleri",
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

export default function IkiTemmuzKapHaberleriPage() {
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
              alt="2 Temmuz 2026 KAP: AKSEN kredi, KAREL sözleşme ve ERCB sipariş"
              fill

              sizes="(min-width: 1024px) 896px, 100vw"
className="object-cover"
            />
          </div>

          <div className="p-6 md:p-10">
            <h1 className="text-2xl font-bold leading-tight tracking-tight text-slate-900 md:text-3xl lg:text-4xl">
              2 Temmuz 2026 KAP: AKSEN Kredi, KAREL Sözleşme, ERCB Sipariş
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
                Borsa İstanbul’da 2 Temmuz 2026 Perşembe günü KAP’a düşen önemli
                bildirimlerde yenilenebilir enerji finansmanı, şarta bağlı sermaye
                artırımı onayı, altyapı siparişleri, savunma sanayii sözleşmesi,
                yatırım teşvik belgesi, özel endüstri bölgesi imar süreci, halka arz
                sonuçları ve şirket bazlı operasyonel kararlar öne çıktı.
              </p>

              <div className="rounded-xl border border-blue-200 bg-blue-50 p-4 text-sm font-medium leading-7 text-blue-900 md:text-base">
                Günün ayrı haber değeri taşıyan başlıkları AKSEN, SASA ve KAREL
                tarafında oluştu. ERCB, TLMAN, KONKA, BERA, SOHOE, TARKM, KOTON ve
                MARKA bildirimleri ise gün sonu önemli KAP haberleri içinde takip
                edilmesi gereken gelişmeler olarak öne çıktı.
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
                Günün pozitif algılanabilecek başlıklarında AKSEN’in 124 milyon
                dolarlık uzun vadeli kredi anlaşması, SASA’nın şarta bağlı sermaye
                artırımı onayı, ERCB’nin yaklaşık 15 milyon dolarlık çelik boru
                siparişi ve KAREL’in 5,86 milyon dolarlık savunma sanayii sözleşmesi
                öne çıktı.
              </div>

              <HaberIlgiliBolumler
                slug="2-temmuz-2026-onemli-kap-haberleri"
                baslik="2 Temmuz 2026 KAP: AKSEN Kredi, KAREL Sözleşme, ERCB Sipariş"
              />

              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm font-medium leading-7 text-amber-900 md:text-base">
                ⚠️ Bu özet bilgilendirme amaçlıdır, yatırım tavsiyesi değildir.
                KAP bildirimlerinde yer alan bazı süreçler kredi anlaşması, sermaye
                artırımı onayı, yeni iş ilişkisi, yatırım teşvik belgesi, halka arz
                sonucu, yatırım görüşmesi veya operasyonel karar niteliğindedir.
                Nihai finansal etki için şirketlerin sonraki açıklamaları ve finansal
                sonuçları takip edilmelidir.
              </div>
            </div>
          </div>

          <HaberAltKisim href="/haber/2-temmuz-2026-onemli-kap-haberleri" />

          <AuthorBox />
        </article>
      </div>
    </main>
  );
}
