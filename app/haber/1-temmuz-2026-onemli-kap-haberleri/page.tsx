import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import HaberIlgiliBolumler from "@/components/HaberIlgiliBolumler";
import AuthorBox from "@/components/AuthorBox";
import HaberAltKisim from "@/components/HaberAltKisim";
import KapCardLinks from "@/components/KapCardLinks";
import { formatHaberTarihi, getHaberDosyaTarihi } from "@/lib/haber-tarih";

const haberSaati = getHaberDosyaTarihi(import.meta.url);
const haberTarihi = formatHaberTarihi(haberSaati);

export const metadata: Metadata = {
  title: "1 Temmuz 2026 Çarşamba Önemli KAP Haberleri",
  description:
    "1 Temmuz 2026 Çarşamba günü KAP'a düşen önemli şirket haberleri: TABGD, EKGYO, BYDNR, EKDMR, SASA, RYSAS, BALSU, ISGSY ve diğer önemli bildirimler.",
  alternates: {
    canonical:
      "https://www.hocaileborsa.com/haber/1-temmuz-2026-onemli-kap-haberleri",
  },
  openGraph: {
    type: "article",
    images: [
      {
        url: "https://www.hocaileborsa.com/kap-ozeti-discover.webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
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
    "baslik": "TAB Gıda (TABGD)",
    "etki": "Nötr / Takip Edilmeli",
    "kapLink": "https://www.kap.org.tr/Bildirim/1622180",
    "metin": "TABGD paylarında ELQ Investors VIII Ltd tarafından nitelikli kurumsal alıcılara yönelik hızlandırılmış talep toplama süreci başlatıldı. Satışa konu edilebilecek payların azami oranı şirket sermayesinin %5,63’üne kadar olan kısmı temsil ediyor.",
    "etkiYorumu": "Ortak pay satışı niteliğinde olduğu için şirket kasasına doğrudan nakit girişi sağlamaz. Nihai satış fiyatı, satılacak pay miktarı ve kurumsal talep gücü takip edilmeli."
  },
  {
    "baslik": "Arçelik (ARCLK)",
    "etki": "Nötr / Takip Edilmeli",
    "kapLink": "https://www.kap.org.tr/Bildirim/1622207",
    "metin": "ARCLK tarafından yapılan açıklama, şirketin operasyonel ve ortaklık yapısı açısından takip edilmesi gereken kurumsal bir gelişme olarak gün sonu önemli KAP başlıkları arasına alındı.",
    "etkiYorumu": "Tek başına güçlü fiyat etkisi yaratacak nitelikte görülmese de, büyük ölçekli sanayi şirketi olması nedeniyle yatırımcı takibine değer."
  },
  {
    "baslik": "Koç Holding (KCHOL)",
    "etki": "Nötr / Takip Edilmeli",
    "kapLink": "https://www.kap.org.tr/Bildirim/1622205",
    "metin": "KCHOL tarafındaki KAP bildirimi, holding iştirakleri ve grup yapısı açısından izlenmesi gereken başlıklardan biri olarak öne çıktı.",
    "etkiYorumu": "Holding yapısına ilişkin bildirimler doğrudan kısa vadeli finansal etki yaratmayabilir; ancak grup şirketleriyle bağlantılı gelişmeler yatırımcılar tarafından takip edilmeli."
  },
  {
    "baslik": "Ford Otosan (FROTO)",
    "etki": "Nötr / Takip Edilmeli",
    "kapLink": "https://www.kap.org.tr/Bildirim/1622206",
    "metin": "FROTO tarafından yapılan KAP açıklaması, otomotiv sektörü ve Koç Grubu şirketleri içinde izlenmesi gereken gün sonu bildirimleri arasında yer aldı.",
    "etkiYorumu": "Açıklama ayrı haber gerektirecek ölçekte değerlendirilmedi; ancak FROTO’nun sektör ağırlığı nedeniyle gün sonu özetinde takip edilmeli."
  },
  {
    "baslik": "Enerjisa Enerji (ENJSA)",
    "etki": "Nötr / Takip Edilmeli",
    "kapLink": "https://www.kap.org.tr/Bildirim/1622213",
    "metin": "ENJSA bildirimi enerji sektörü tarafında günün izlenmesi gereken KAP başlıkları arasında yer aldı.",
    "etkiYorumu": "Enerji şirketlerinde operasyonel, regülasyon ve ortaklık yapısına ilişkin açıklamalar sonraki dönem etkileri açısından takip edilmeli."
  },
  {
    "baslik": "Zer GYO (ZERGY)",
    "etki": "Nötr / Takip Edilmeli",
    "kapLink": "https://www.kap.org.tr/Bildirim/1622216",
    "metin": "ZERGY tarafından yapılan açıklama, gayrimenkul yatırım ortaklığı tarafında gün sonu önemli KAP haberleri içinde değerlendirildi.",
    "etkiYorumu": "Gayrimenkul şirketlerinde portföy, finansman ve kurumsal süreçlere ilişkin haberlerin etkisi detaylı içerik ve sonraki açıklamalarla netleşir."
  },
  {
    "baslik": "DCT Trading (DCTTR)",
    "etki": "Nötr / Takip Edilmeli",
    "kapLink": "https://www.kap.org.tr/Bildirim/1622224",
    "metin": "DCTTR bildirimi günün takip edilmesi gereken şirket açıklamaları arasında yer aldı.",
    "etkiYorumu": "Ayrı haber yapılacak ölçekte değerlendirilmedi; ancak şirket özelinde yatırımcıların izleyebileceği önemli başlıklardan biri."
  },
  {
    "baslik": "Emlak Konut GYO (EKGYO)",
    "etki": "Pozitif / Takip Edilmeli",
    "kapLink": "https://www.kap.org.tr/Bildirim/1622639",
    "metin": "EKGYO, İstanbul Eyüpsultan Kemerburgaz 3. Etap ihalesinin 2. oturumunda en yüksek teklifin 36.661.000.000 TL satış toplam geliri ve 15.397.620.000 TL şirket payı toplam geliri olarak oluştuğunu açıkladı.",
    "etkiYorumu": "İhale büyüklüğü ve şirket payı toplam geliri dikkat çekici. Ancak değerlendirme süreci devam ettiği için nihai sonuç ayrıca takip edilmeli."
  },
  {
    "baslik": "DAP Gayrimenkul (DAPGM)",
    "etki": "Nötr / Takip Edilmeli",
    "kapLink": "https://www.kap.org.tr/Bildirim/1622660",
    "metin": "DAPGM bildirimi gayrimenkul sektörü tarafında gün sonu önemli KAP haberleri içine alındı.",
    "etkiYorumu": "Gayrimenkul şirketlerinde proje, portföy ve finansman başlıkları bilanço etkisi açısından sonraki açıklamalarla birlikte izlenmeli."
  },
  {
    "baslik": "Tümosan Motor ve Traktör (TMSN)",
    "etki": "Nötr / Takip Edilmeli",
    "kapLink": "https://www.kap.org.tr/Bildirim/1622671",
    "metin": "TMSN tarafından yapılan KAP açıklaması, sanayi ve üretim tarafında takip edilmesi gereken gün sonu başlıkları arasında yer aldı.",
    "etkiYorumu": "Açıklamanın finansal etkisi detaylı gelişmeler ve sonraki dönem sonuçlarıyla daha net değerlendirilebilir."
  },
  {
    "baslik": "HUB Girişim Sermayesi (HUBVC)",
    "etki": "Nötr / Takip Edilmeli",
    "kapLink": "https://www.kap.org.tr/Bildirim/1622673",
    "metin": "HUBVC bildirimi girişim sermayesi tarafında günün izlenen KAP açıklamalarından biri oldu.",
    "etkiYorumu": "Girişim sermayesi şirketlerinde portföy değerlemeleri ve yatırım haberleri orta vadeli etki açısından takip edilmeli."
  },
  {
    "baslik": "Baydöner (BYDNR)",
    "etki": "Pozitif",
    "kapLink": "https://www.kap.org.tr/Bildirim/1622674",
    "metin": "BYDNR, çıkarılmış sermayesinin 84.000.000 TL’den 600.600.000 TL’ye yükseltilmesi için %615 oranında bedelsiz sermaye artırımı kararı aldı. Artırımın tamamı iç kaynaklardan karşılanacak.",
    "etkiYorumu": "Yüksek oranlı bedelsiz sermaye artırımı kararı yatırımcı ilgisini artırabilecek nitelikte. İşlem şirket kasasına yeni nakit girişi sağlamaz."
  },
  {
    "baslik": "Avrupa Konutları GYO (AVPGY)",
    "etki": "Nötr / Takip Edilmeli",
    "kapLink": "https://www.kap.org.tr/Bildirim/1622683",
    "metin": "AVPGY tarafından yapılan bildirim, GYO sektörü içinde gün sonu takip listesine giren açıklamalar arasında yer aldı.",
    "etkiYorumu": "GYO haberlerinde portföy ve proje etkisi sonraki bildirimlerle birlikte değerlendirilmelidir."
  },
  {
    "baslik": "Ebebek (EBEBK)",
    "etki": "Nötr / Takip Edilmeli",
    "kapLink": "https://www.kap.org.tr/Bildirim/1622694",
    "metin": "EBEBK bildirimi perakende sektörü tarafında günün önemli KAP açıklamaları içinde değerlendirildi.",
    "etkiYorumu": "Perakende şirketlerinde mağaza, satış ve operasyonel veriler dönemsel finansal beklentiler açısından önem taşır."
  },
  {
    "baslik": "Ekinciler Demir Çelik (EKDMR)",
    "etki": "Pozitif",
    "kapLink": "https://www.kap.org.tr/Bildirim/1622695",
    "metin": "EKDMR, Orta Amerika bölgesinden 4,97 milyon ABD doları tutarında yeni çelik siparişi aldığını açıkladı. Şirketin bölgede ulaştığı toplam sipariş hacmi 26 milyon ABD doları seviyesine çıktı.",
    "etkiYorumu": "İhracat pazarı ve yeni sipariş görünümü açısından pozitif. Finansal katkı teslimat takvimi, maliyetler ve marjlarla birlikte izlenmeli."
  },
  {
    "baslik": "SASA Polyester (SASA)",
    "etki": "Pozitif",
    "kapLink": "https://www.kap.org.tr/Bildirim/1622718",
    "metin": "SASA, Haziran 2026’da 148 kiloton satış miktarı ve 200 milyon ABD doları satış tutarı açıkladı. İhracat 82 milyon ABD doları olurken toplam ciro yıllık bazda %52, ihracat ise %58 arttı.",
    "etkiYorumu": "Satış ve ihracat performansındaki güçlü artış pozitif. Kârlılık etkisi için maliyetler, ürün marjları ve finansal sonuçlar takip edilmeli."
  },
  {
    "baslik": "Altınay Savunma (ALTNY)",
    "etki": "Nötr / Takip Edilmeli",
    "kapLink": "https://www.kap.org.tr/Bildirim/1622723",
    "metin": "ALTNY tarafından yapılan bildirim, savunma sanayii tarafında gün sonu önemli KAP başlıkları içinde değerlendirildi.",
    "etkiYorumu": "Savunma sanayii şirketlerinde sözleşme, proje ve kurumsal süreçlere ilişkin gelişmeler orta vadeli iş görünümü açısından izlenmeli."
  },
  {
    "baslik": "Merko Gıda (MERKO)",
    "etki": "Nötr / Takip Edilmeli",
    "kapLink": "https://www.kap.org.tr/Bildirim/1622535",
    "metin": "MERKO tarafında gün içinde gelen bildirimler gıda sektörü ve şirket özelinde takip edilmesi gereken gelişmeler arasında yer aldı.",
    "etkiYorumu": "Açıklamalar ayrı haber gerektirecek ölçekte değerlendirilmedi; ancak gün sonu KAP özetine eklenmesi uygun görüldü."
  },
  {
    "baslik": "Lüks Kadife (LUKSK)",
    "etki": "Nötr / Takip Edilmeli",
    "kapLink": "https://www.kap.org.tr/Bildirim/1622445",
    "metin": "LUKSK bildirimi gün sonu önemli KAP haberleri arasında takip edilecek başlıklardan biri oldu.",
    "etkiYorumu": "Şirket ölçeği ve bildirim içeriği nedeniyle ayrı haber yapılmadı; ancak yatırımcı takibi açısından özet içinde yer aldı."
  },
  {
    "baslik": "Tarkim Bitki Koruma (TARKM)",
    "etki": "Nötr / Takip Edilmeli",
    "kapLink": "https://www.kap.org.tr/Bildirim/1622521",
    "metin": "TARKM tarafından yapılan KAP açıklaması, tarım ve kimya sektörü tarafında izlenen gün sonu başlıklarından biri oldu.",
    "etkiYorumu": "Şirket özelindeki etkisi sonraki açıklamalar ve finansal sonuçlarla birlikte değerlendirilmelidir."
  },
  {
    "baslik": "Ege Gübre (EGGUB)",
    "etki": "Nötr / Takip Edilmeli",
    "kapLink": "https://www.kap.org.tr/Bildirim/1622529",
    "metin": "EGGUB bildirimi gün sonu önemli KAP haberleri içine alınan takip başlıklarından biri oldu.",
    "etkiYorumu": "Ayrı haber yapılacak ölçekte görülmedi; ancak sektör ve şirket özelinde yatırımcıların izlemesi gereken bir gelişme olarak not edildi."
  }
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "1 Temmuz 2026 Çarşamba Önemli KAP Haberleri",
  description:
    "1 Temmuz 2026 Çarşamba günü KAP'a düşen önemli şirket haberleri ve olası etkileri.",
  datePublished: "2026-07-01T09:00:00+03:00",
  dateModified: "2026-07-01T23:30:00+03:00",
  url: "https://www.hocaileborsa.com/haber/1-temmuz-2026-onemli-kap-haberleri",
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

export default function BirTemmuzKapHaberleriPage() {
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
              alt="1 Temmuz 2026 Çarşamba Önemli KAP Haberleri"
              fill
              unoptimized
              className="object-cover"
            />
          </div>

          <div className="p-6 md:p-10">
            <h1 className="text-2xl font-bold leading-tight tracking-tight text-slate-900 md:text-3xl lg:text-4xl">
              1 Temmuz 2026 Çarşamba Önemli KAP Haberleri
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
                Borsa İstanbul’da 1 Temmuz 2026 Çarşamba günü KAP’a düşen önemli
                bildirimlerde pay satış süreçleri, büyük ölçekli gayrimenkul
                ihaleleri, bedelsiz sermaye artırımı kararları, ihracat siparişleri,
                satış performansı verileri ve şirket bazlı kurumsal açıklamalar
                öne çıktı.
              </p>

              <div className="rounded-xl border border-blue-200 bg-blue-50 p-4 text-sm font-medium leading-7 text-blue-900 md:text-base">
                Günün ayrı haber değeri taşıyan başlıkları TABGD, EKGYO, RYSAS,
                BALSU, ISGSY, SASA, BYDNR ve EKDMR tarafında oluştu. Diğer
                bildirimler ise gün sonu önemli KAP haberleri içinde takip edilmesi
                gereken gelişmeler olarak öne çıktı.
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
                Günün pozitif algılanabilecek başlıklarında EKGYO’nun yüksek
                tutarlı ihale teklifi, SASA’nın güçlü Haziran satış performansı,
                BYDNR’nin yüksek oranlı bedelsiz sermaye artırımı kararı, EKDMR’nin
                Orta Amerika siparişi ve RYSAS’ın HES satın alımı öne çıktı.
              </div>

              <HaberIlgiliBolumler
                slug="1-temmuz-2026-onemli-kap-haberleri"
                baslik="1 Temmuz 2026 Çarşamba Önemli KAP Haberleri"
              />

              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm font-medium leading-7 text-amber-900 md:text-base">
                ⚠️ Bu özet bilgilendirme amaçlıdır, yatırım tavsiyesi değildir.
                KAP bildirimlerinde yer alan bazı süreçler ihale değerlendirmesi,
                SPK başvurusu, pay satış süreci, bedelsiz sermaye artırımı ya da
                operasyonel performans açıklaması niteliğindedir. Nihai finansal
                etki için şirketlerin sonraki açıklamaları ve finansal sonuçları
                takip edilmelidir.
              </div>
            </div>
          </div>

          <HaberAltKisim href="/haber/1-temmuz-2026-onemli-kap-haberleri" />

          <AuthorBox />
        </article>
      </div>
    </main>
  );
}
