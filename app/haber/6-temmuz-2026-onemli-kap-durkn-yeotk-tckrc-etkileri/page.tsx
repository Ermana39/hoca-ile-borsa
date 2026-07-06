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

const slug = "6-temmuz-2026-onemli-kap-durkn-yeotk-tckrc-etkileri";
const haberUrl = `https://www.hocaileborsa.com/haber/${slug}`;
const haberGorsel = "https://www.hocaileborsa.com/kap-ozeti-discover.webp";

export const metadata: Metadata = {
  title: "6 Temmuz 2026 Önemli KAP: DURKN, YEOTK, TCKRC Etkileri",
  description:
    "DURKN %666 bedelsiz başvurusu, YEOTK 130 MWp Kosova GES sözleşmesi, TCKRC 10 milyon EUR iş birliği ve 6 Temmuz KAP haberlerinde olası etkiler.",
  alternates: {
    canonical: haberUrl,
  },
  openGraph: {
    type: "article",
    title: "6 Temmuz 2026 Önemli KAP: DURKN, YEOTK, TCKRC Etkileri",
    description:
      "DURKN %666 bedelsiz başvurusu, YEOTK 130 MWp Kosova GES sözleşmesi, TCKRC 10 milyon EUR iş birliği ve 6 Temmuz KAP haberlerinde olası etkiler.",
    url: haberUrl,
    images: [
      {
        url: haberGorsel,
        width: 1200,
        height: 675,
        alt: "6 Temmuz 2026 Önemli KAP: DURKN, YEOTK, TCKRC Etkileri",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "6 Temmuz 2026 Önemli KAP: DURKN, YEOTK, TCKRC Etkileri",
    description:
      "DURKN %666 bedelsiz başvurusu, YEOTK 130 MWp Kosova GES sözleşmesi, TCKRC 10 milyon EUR iş birliği ve 6 Temmuz KAP haberlerinde olası etkiler.",
    images: [haberGorsel],
  },
};

const etkiStilleri: Record<string, string> = {
  "Pozitif": "border-emerald-200 bg-emerald-50 text-emerald-800",
  "Pozitif / Takip Edilmeli": "border-emerald-200 bg-emerald-50 text-emerald-800",
  "Sınırlı Pozitif": "border-teal-200 bg-teal-50 text-teal-800",
  "Negatif": "border-red-200 bg-red-50 text-red-800",
  "Negatif / Takip Edilmeli": "border-red-200 bg-red-50 text-red-800",
  "Sınırlı Negatif": "border-orange-200 bg-orange-50 text-orange-800",
  "Nötr / Takip Edilmeli": "border-slate-200 bg-white text-slate-700",
};

const kapHaberleri = [
  {
    "baslik": "Durukan Şekerleme (DURKN)",
    "etki": "Pozitif / Takip Edilmeli",
    "kapLink": "https://www.kap.org.tr/Bildirim/1625328",
    "neOldu": "DURKN, 132,5 milyon TL olan çıkarılmış sermayesini %666,03773 oranında bedelsiz artırarak 1,015 milyar TL’ye yükseltmek için SPK’ya başvurdu. Artırım tutarı 882,5 milyon TL olarak açıklandı.",
    "olasiEtki": "Yüksek oranlı bedelsiz sermaye artırımı başvurusu yatırımcı ilgisini artırabilir. Süreç henüz SPK başvurusu aşamasında olduğu için hak kullanım tarihi ve kesin takvim onay sonrası netleşecektir."
  },
  {
    "baslik": "YEO Teknoloji (YEOTK)",
    "etki": "Pozitif",
    "kapLink": "https://www.kap.org.tr/Bildirim/1624339",
    "neOldu": "YEOTK, Lindja Solar LLC ile Kosova’da yüksek gerilim trafo merkezi, iletim hatları ve şebeke bağlantı altyapısı dahil 130 MWp kapasiteli GES için tam anahtar teslim EPC sözleşmesi imzaladı.",
    "olasiEtki": "Uluslararası EPC sözleşmesi şirketin yurt dışı proje portföyünü destekliyor. KAP’ta sözleşme tutarı açıklanmadığı için finansal etki proje ilerleme takvimi ve sonraki finansal sonuçlarla izlenmeli."
  },
  {
    "baslik": "Kıraç Galvaniz (TCKRC)",
    "etki": "Pozitif",
    "kapLink": "https://www.kap.org.tr/Bildirim/1624320",
    "neOldu": "TCKRC, Bulgaristan’da hasarlı otokorkulukların bakım, onarım ve acil müdahale çalışmaları için iş birliği sözleşmesi imzaladı. Toplam iş hacminin yaklaşık 10 milyon EUR seviyesine ulaşması bekleniyor.",
    "olasiEtki": "Döviz bazlı iş hacmi ve Bulgaristan pazarındaki faaliyetlerin devamı şirket açısından pozitif. Gelir katkısı işin gerçekleşme takvimi ve yeni ihale süreciyle birlikte takip edilmeli."
  },
  {
    "baslik": "ARD Grup Bilişim (ARDYZ)",
    "etki": "Sınırlı Pozitif",
    "kapLink": "https://www.kap.org.tr/Bildirim/1624337",
    "neOldu": "ARDYZ, Şili Deniz Kuvvetleri bünyesinde kullanılmak üzere NVIDIA grafik çözümleri temelli yapay zeka destekli bilişim ürünleri tedarikine yönelik KDV dahil 554.400 USD tutarında sipariş aldığını açıkladı.",
    "olasiEtki": "Savunma sanayii bağlantılı yapay zeka ürün tedariki ciro ve kârlılığa olumlu katkı sağlayabilir. Tutar şirket ölçeğinde sınırlı kaldığı için etki finansal tablolarda izlenmeli."
  },
  {
    "baslik": "Ahlatcı Doğal Gaz (AHGAZ)",
    "etki": "Nötr / Takip Edilmeli",
    "kapLink": "https://www.kap.org.tr/Bildirim/1625024",
    "neOldu": "AHGAZ, %70 bağlı ortaklığı AHL Ahlatcı Finansal Yönetim’in %99,94 pay sahibi olduğu Dünya Katılım Bankası’nda halka arz çalışmalarının başlatılması için SPK’ya başvuru kararı alındığını duyurdu.",
    "olasiEtki": "Dünya Katılım Bankası halka arz süreci dolaylı değerleme etkisi nedeniyle takip edilecek. Henüz halka arz onayı değil, esas sözleşme uyumu ve kayıtlı sermaye sistemi için başvuru aşamasıdır."
  },
  {
    "baslik": "Enerya Enerji (ENERY)",
    "etki": "Nötr / Takip Edilmeli",
    "kapLink": "https://www.kap.org.tr/Bildirim/1625026",
    "neOldu": "ENERY, %29 iştiraki AHL Ahlatcı Finansal Yönetim’in %99,94 pay sahibi olduğu Dünya Katılım Bankası’nda halka arz çalışmalarının başlatılması için SPK’ya başvuru kararı alındığını açıkladı.",
    "olasiEtki": "Haber ENERY açısından dolaylı iştirak etkisi taşıyor. Dünya Katılım Bankası halka arz sürecine ilişkin sonraki SPK ve Borsa İstanbul adımları izlenmeli."
  },
  {
    "baslik": "Çimsa (CIMSA)",
    "etki": "Sınırlı Pozitif",
    "kapLink": "https://www.kap.org.tr/Bildirim/1625384",
    "neOldu": "CIMSA, Eskişehir fabrikasında 5.500 kWp DC kurulu güce sahip Atık Isıdan Elektrik Üretimi tesisinin tamamlanarak devreye alındığını açıkladı.",
    "olasiEtki": "WHR tesisinin fabrikanın yıllık elektrik tüketiminin yaklaşık %25’ini karşılaması, GES yatırımıyla birlikte öz üretim oranının yaklaşık %40’a ulaşması bekleniyor. Enerji maliyetleri açısından pozitif takip edilebilir."
  },
  {
    "baslik": "AGESA Hayat ve Emeklilik (AGESA)",
    "etki": "Pozitif",
    "kapLink": "https://www.kap.org.tr/Bildirim/1625478",
    "neOldu": "AGESA, 01.01.2026-30.06.2026 döneminde toplam prim üretiminin 15,7 milyar TL olduğunu ve geçen yılın aynı dönemine göre %48 artış gösterdiğini açıkladı.",
    "olasiEtki": "Prim üretimindeki güçlü artış operasyonel büyüme açısından pozitif. Etkinin kârlılığa yansıması teknik kâr, yatırım gelirleri ve hasar/komisyon yapısıyla birlikte izlenmeli."
  },
  {
    "baslik": "İhlas Holding (IHLAS)",
    "etki": "Nötr / Takip Edilmeli",
    "kapLink": "https://www.kap.org.tr/Bildirim/1625220",
    "neOldu": "IHLAS, %100 bedelli sermaye artırımı sürecinin tamamlandığını, 1,5 milyar TL olan sermayenin 3 milyar TL’ye çıkarıldığını ve esas sözleşme değişikliği için SPK’ya başvurulduğunu açıkladı.",
    "olasiEtki": "Bedelli sürecin tamamlanması ve 1,5 milyar TL sermaye artırımı sonrası şirketin sermaye yapısı güçlendi. Piyasa etkisi nakit girişinin kullanım alanları ve sonraki finansallarla takip edilmeli."
  },
  {
    "baslik": "DCT Trading (DCTTR)",
    "etki": "Sınırlı Pozitif",
    "kapLink": "https://www.kap.org.tr/Bildirim/1624411",
    "neOldu": "DCTTR, Yunanistan’daki bağlı ortaklığı YAKA’nın ticari faaliyet alanını genişleterek ilk kez buğday ticareti yaptığını ve ilk işlemin 1.000 ton yeni sezon buğday satışıyla başladığını açıkladı.",
    "olasiEtki": "Bağlı ortaklığın hasat sezonları dışında yeni ticaret alanına girmesi ciro ve kârlılığa katkı sağlayabilir. Tonaj büyümesi ve satış sürekliliği takip edilmeli."
  },
  {
    "baslik": "Frigo-Pak Gıda (FRIGO)",
    "etki": "Sınırlı Pozitif",
    "kapLink": "https://www.kap.org.tr/Bildirim/1625121",
    "neOldu": "FRIGO, 28-30 Haziran 2026 tarihlerinde New York’ta düzenlenen Summer Fancy Food Show fuarına katıldığını, uluslararası alıcılar ve perakende zincirleriyle görüşmeler yaptığını açıkladı.",
    "olasiEtki": "Fuar katılımı ihracat hacmi ve marka bilinirliği açısından destekleyici olabilir. Somut sipariş veya sözleşme açıklanmadığı için finansal etki sonraki gelişmelerle izlenmeli."
  },
  {
    "baslik": "Korteks Mensucat (KORTS)",
    "etki": "Negatif / Takip Edilmeli",
    "kapLink": "https://www.kap.org.tr/Bildirim/1625092",
    "neOldu": "KORTS, TEKSİF ile yürütülen toplu iş sözleşmesi müzakere sürecinde 6 Temmuz 2026 itibarıyla grev uygulamasının başladığını açıkladı.",
    "olasiEtki": "Grev süreci üretim ve operasyonel akış açısından negatif risk oluşturabilir. Toplu iş sözleşmesi görüşmelerinin sonucu ve grevin süresi belirleyici olacak."
  },
  {
    "baslik": "Gündoğdu Gıda (GUNDG)",
    "etki": "Nötr / Takip Edilmeli",
    "kapLink": "https://www.kap.org.tr/Bildirim/1625322",
    "neOldu": "GUNDG, esas sözleşme değişikliklerinin önemli nitelikte işlem olarak değerlendirilmesi nedeniyle ayrılma hakkı sürecini belirledi. Ayrılma hakkı kullanım fiyatı 308,1230 TL olarak hesaplandı.",
    "olasiEtki": "Ayrılma hakkı fiyatı ve genel kurul süreci pay fiyatı açısından takip edilecek. Kullanım tarihleri yapılacak ilk genel kurul toplantısı sonrasında belirlenecek."
  },
  {
    "baslik": "Ünlü Menkul Değerler (UNLUS)",
    "etki": "Nötr / Takip Edilmeli",
    "kapLink": "https://www.kap.org.tr/Bildirim/1625324",
    "neOldu": "UNLUS, 100 milyon TL olan ödenmiş sermayesinin tek pay sahibi Ünlü Yatırım Holding tarafından nakden karşılanmak üzere 200 milyon TL’ye çıkarılması için esas sözleşme tadili kapsamında SPK’ya başvurdu.",
    "olasiEtki": "Sermaye artışı şirketin özkaynak yapısını destekleyebilir. Halka açık paylara doğrudan hak kullanım süreci yaratmadığı için etki sınırlı ve takip niteliğinde."
  },
  {
    "baslik": "Vakıf Finansal Kiralama (VAKFN)",
    "etki": "Nötr / Takip Edilmeli",
    "kapLink": "https://www.kap.org.tr/Bildirim/1625357",
    "neOldu": "VAKFN, Yönetim Kurulu Üyesi ve Genel Müdür Metin Özetci’nin 06.07.2026 itibarıyla istifaen ayrıldığını, yerine Genel Müdür Yardımcısı Ali Koç’un vekaleten atandığını açıkladı.",
    "olasiEtki": "Üst yönetim değişikliği kurumsal takip başlığıdır. Operasyonel etki için yeni genel müdür ataması ve yönetim geçiş süreci izlenmeli."
  },
  {
    "baslik": "TR Anadolu Metal (TRMET)",
    "etki": "Nötr / Takip Edilmeli",
    "kapLink": "https://www.kap.org.tr/Bildirim/1625421",
    "neOldu": "TRMET’in %99,04 bağlı ortaklığı TR Anadolu İnşaat; İpek Online, Rek-Tur ve Koza Prodüksiyon paylarını her bir şirket için 1 TL bedelle devraldı ve ilgili şirketlerde %100 pay sahibi oldu.",
    "olasiEtki": "Pay devirleri bağlı ortaklık yapısı açısından takip edilecek. İşlemin finansal büyüklüğü sınırlı göründüğü için doğrudan finansal etki yerine stratejik yapı izlenmeli."
  }
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "6 Temmuz 2026 Önemli KAP: DURKN, YEOTK, TCKRC Etkileri",
  description:
    "DURKN %666 bedelsiz başvurusu, YEOTK 130 MWp Kosova GES sözleşmesi, TCKRC 10 milyon EUR iş birliği ve 6 Temmuz KAP haberlerinde olası etkiler.",
  image: haberGorsel,
  datePublished: "2026-07-06T21:05:00+03:00",
  dateModified: "2026-07-06T21:26:00+03:00",
  url: haberUrl,
  inLanguage: "tr",
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
};

export default function AltiTemmuzKapHaberleriPage() {
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
              alt="6 Temmuz 2026 Önemli KAP: DURKN, YEOTK, TCKRC Etkileri"
              fill
              unoptimized
              className="object-cover"
            />
          </div>

          <div className="p-6 md:p-10">
            <h1 className="text-2xl font-bold leading-tight tracking-tight text-slate-900 md:text-3xl lg:text-4xl">
              6 Temmuz 2026 Önemli KAP: DURKN, YEOTK, TCKRC Etkileri
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
                6 Temmuz 2026 gün sonu KAP özetinde DURKN’nin %666,03773
                bedelsiz sermaye artırımı başvurusu, YEOTK’nin Kosova’da 130 MWp
                GES için EPC sözleşmesi ve TCKRC’nin Bulgaristan’da yaklaşık 10
                milyon EUR iş hacmi beklenen iş birliği öne çıktı.
              </p>

              <div className="rounded-xl border border-blue-200 bg-blue-50 p-4 text-sm font-medium leading-7 text-blue-900 md:text-base">
                Günün takip edilen diğer başlıklarında ARDYZ’nin 554.400 USD
                yapay zeka destekli bilişim ürünleri siparişi, CIMSA’nın 5.500
                kWp WHR tesisini devreye alması, AGESA’nın 15,7 milyar TL prim
                üretimi ve IHLAS’ın 1,5 milyar TL bedelli sermaye artırımı
                sürecini tamamlaması yer aldı.
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

                    <div className="mt-3 rounded-lg bg-white px-3 py-2 text-sm leading-7 text-slate-600 ring-1 ring-slate-200">
                      <span className="font-semibold text-slate-900">
                        Ne oldu? 
                      </span>
                      {haber.neOldu}
                    </div>

                    <div className="mt-2 rounded-lg bg-white px-3 py-2 text-sm leading-7 text-slate-600 ring-1 ring-slate-200">
                      <span className="font-semibold text-slate-900">
                        Olası Etki: 
                      </span>
                      {haber.olasiEtki}
                    </div>

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
                Günün pozitif algılanabilecek başlıklarında DURKN’nin yüksek
                oranlı bedelsiz sermaye artırımı başvurusu, YEOTK’nin Kosova GES
                sözleşmesi, TCKRC’nin Bulgaristan iş birliği, CIMSA’nın enerji
                maliyetlerini azaltacak WHR tesisi ve AGESA’nın %48 prim üretimi
                artışı öne çıktı.
              </div>

              <HaberIlgiliBolumler
                slug={slug}
                baslik="6 Temmuz 2026 Önemli KAP: DURKN, YEOTK, TCKRC Etkileri"
              />

              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm font-medium leading-7 text-amber-900 md:text-base">
                ⚠️ Bu özet bilgilendirme amaçlıdır, yatırım tavsiyesi değildir.
                KAP bildirimlerinde yer alan bazı süreçler başvuru, sözleşme,
                operasyonel veri, yönetim değişikliği veya yatırımın devreye
                alınması niteliğindedir. Nihai finansal etki için şirketlerin
                sonraki açıklamaları ve finansal sonuçları takip edilmelidir.
              </div>
            </div>
          </div>

          <HaberAltKisim href={`/haber/${slug}`} />

          <AuthorBox />
        </article>
      </div>
    </main>
  );
}
