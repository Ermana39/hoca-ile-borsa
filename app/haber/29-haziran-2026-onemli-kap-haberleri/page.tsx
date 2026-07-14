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
  title: "29 Haziran KAP: YEOTK GES, GOODY Bedelsiz, GRTHO Başvuru",
  description:
    "YEOTK GES ön anlaşması, GOODY bedelsiz hak kullanımı, GRTHO sermaye artırımı başvurusu ve günün KAP özetleri.",
  alternates: {
    canonical:
      "https://www.hocaileborsa.com/haber/29-haziran-2026-onemli-kap-haberleri",
  },
  openGraph: {
    type: "article",
    title: "29 Haziran KAP: YEOTK GES, GOODY Bedelsiz, GRTHO Başvuru",
    description:
      "YEOTK GES ön anlaşması, GOODY bedelsiz hak kullanımı, GRTHO sermaye artırımı başvurusu ve günün KAP özetleri.",
    images: [
      {
        url: "https://www.hocaileborsa.com/kap-ozeti-discover.webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "29 Haziran KAP: YEOTK GES, GOODY Bedelsiz, GRTHO Başvuru",
    description:
      "YEOTK GES ön anlaşması, GOODY bedelsiz hak kullanımı, GRTHO sermaye artırımı başvurusu ve günün KAP özetleri.",
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
    "baslik": "Kervan Gıda (KRVGD)",
    "etki": "Pozitif",
    "kapLink": "https://www.kap.org.tr/Bildirim/1621283",
    "metin": "KRVGD, %100 bağlı ortaklığı Kervan USA LLC'nin ABD ithalatları kapsamında ödediği gümrük vergilerinin iadesi sürecinde 27.06.2026 itibarıyla 3,4 milyon ABD Doları daha tahsilat yaptığını ve vergi iade sürecinin tamamlandığını açıkladı. Böylece tahsil edilen toplam tutar 3,7 milyon ABD Doları seviyesinde gerçekleşti.",
    "etkiYorumu": "Nakit tahsilatın tamamlanması şirket açısından pozitif. Etki, tutarın finansal tablolara katkısı ve dönemsel kârlılık üzerindeki yansımasıyla izlenecek."
  },
  {
    "baslik": "YEO Teknoloji (YEOTK)",
    "etki": "Pozitif",
    "kapLink": "https://www.kap.org.tr/Bildirim/1621285",
    "metin": "YEOTK bağlı ortaklığı CALL Energy, Zambiya'da 60 MWdc kapasiteli ikinci faz güneş enerjisi yatırımı için bağlayıcı ön anlaşmalar imzaladı. Şirket, yatırım tamamlandığında CALL Energy'nin Zambiya'daki güneş enerjisi portföyünün 120 MWdc seviyesine ulaşacağını duyurdu.",
    "etkiYorumu": "Uluslararası yenilenebilir enerji portföyünün büyümesi ve 20 yıl vadeli PPA hedefi nedeniyle pozitif. Finansal etki, finansman süreci ve devreye alma takvimiyle netleşecek."
  },
  {
    "baslik": "İhlas GYO (IHLGM)",
    "etki": "Sınırlı Pozitif",
    "kapLink": "https://www.kap.org.tr/Bildirim/1621306",
    "metin": "IHLGM, Balıkesir Kepsut ve Burdur Yeşilova'da bulunan IV. Grup maden ruhsatlarının devrine ilişkin sözleşme imzaladı. Devir bedelleri sırasıyla 1,5 milyon ABD Doları ve 500 bin ABD Doları olarak açıklandı. Şirket ayrıca sahalardaki üretimden NSR geliri elde edeceğini belirtti.",
    "etkiYorumu": "Ruhsat devir bedeli ve ileride oluşabilecek NSR geliri nedeniyle sınırlı pozitif. Tamamlanma kamu kurumlarının onay ve tescil süreçlerine bağlı."
  },
  {
    "baslik": "Oyak Yatırım Ortaklığı (OYAYO)",
    "etki": "Nötr / Takip Edilmeli",
    "kapLink": "https://www.kap.org.tr/Bildirim/1621310",
    "metin": "OYAYO, ortaklık paylarının Borsa İstanbul'da oluşan ağırlıklı ortalama fiyatının pay başına net aktif değerinin 2 katını aşması nedeniyle KAP açıklaması yaptı.",
    "etkiYorumu": "Yatırım ortaklıklarında net aktif değer primi açısından dikkat gerektiren teknik bir uyarı niteliğinde."
  },
  {
    "baslik": "Garanti Yatırım Ortaklığı (GRNYO)",
    "etki": "Nötr / Takip Edilmeli",
    "kapLink": "https://www.kap.org.tr/Bildirim/1621359",
    "metin": "GRNYO, paylarının BİAŞ'ta oluşan ağırlıklı ortalama fiyatının pay başına net aktif değerinin 2 katını aşması nedeniyle KAP açıklaması yayımladı.",
    "etkiYorumu": "Net aktif değer primi yüksek seyrettiği için yatırımcıların fiyat / portföy değeri ilişkisini dikkatle izlemesi gerekir."
  },
  {
    "baslik": "Dofer Yapı (DOFER)",
    "etki": "Sınırlı Pozitif",
    "kapLink": "https://www.kap.org.tr/Bildirim/1621412",
    "metin": "DOFER, Karabük fabrikasında yatırımı tamamlanan ve aktif kullanılan ilave kapalı binanın çatısı için başvurulan 400 kWe gücündeki lisanssız GES kapasite tahsis talebinin olumlu karşılandığını açıkladı.",
    "etkiYorumu": "GES kapasite tahsisi enerji maliyetleri ve sürdürülebilirlik açısından destekleyici. Etki, kurulum ve üretim süreciyle birlikte netleşir."
  },
  {
    "baslik": "Goodyear Lastikleri (GOODY)",
    "etki": "Sınırlı Pozitif",
    "kapLink": "https://www.kap.org.tr/Bildirim/1621416",
    "metin": "GOODY, bedelsiz pay alma hakkı kullanım başlangıç tarihini 2 Temmuz 2026 olarak açıkladı. Şirket sermayesi 270 milyon TL'den 1,52 milyar TL'ye çıkarılacak; toplam bedelsiz oranı %462,96296 olarak duyuruldu.",
    "etkiYorumu": "Yüksek oranlı bedelsiz yatırımcı ilgisini artırabilir. Ancak işlem şirket kasasına yeni nakit girişi sağlamaz."
  },
  {
    "baslik": "Graınturk Holding (GRTHO)",
    "etki": "Pozitif",
    "kapLink": "https://www.kap.org.tr/Bildirim/1621422",
    "metin": "GRTHO, %950 oranındaki bedelsiz sermaye artırımı için SPK başvurusu yaptığını açıkladı. Mevcut sermayenin 125 milyon TL'den 1,3125 milyar TL'ye çıkarılması planlanıyor.",
    "etkiYorumu": "Yüksek oranlı bedelsiz başvurusu kısa vadeli yatırımcı ilgisini artırabilir. Süreç SPK onayına bağlı olduğu için takip edilmeli."
  },
  {
    "baslik": "Ofis Yem (OFSYM)",
    "etki": "Sınırlı Pozitif",
    "kapLink": "https://www.kap.org.tr/Bildirim/1621514",
    "metin": "OFSYM, 2027 yılının ilk çeyreğinde faaliyete geçmesi planlanan Samsun Üretim Tesisi'nde hammadde depolama altyapısını güçlendirmek ve operasyonel verimliliği artırmak amacıyla kurulacak silo yatırımı için inşaat ruhsatı alındığını açıkladı.",
    "etkiYorumu": "Yeni tesis ve depolama altyapısı tarafında sürecin ilerlemesi operasyonel verimlilik açısından sınırlı pozitif."
  },
  {
    "baslik": "Tarfin Tarım (TARFN)",
    "etki": "Sınırlı Pozitif",
    "kapLink": "https://www.kap.org.tr/Bildirim/1621606",
    "metin": "TARFN, sermayesinin 300 milyon TL'den 500 milyon TL'ye artırılmasına ilişkin işlemlerin tescil edildiğini açıkladı. Artırılan 200 milyon TL sermayenin 100 milyon TL'si nakden, 100 milyon TL'si sermaye düzeltmesi olumlu farklarından karşılandı.",
    "etkiYorumu": "Sermaye artışının tescil edilmesi bilanço ve sermaye yapısı açısından takip edilecek bir gelişme."
  },
  {
    "baslik": "Park Elektrik (PRKME)",
    "etki": "Nötr / Takip Edilmeli",
    "kapLink": "https://www.kap.org.tr/Bildirim/1621622",
    "metin": "PRKME, daha önce uygulanan geri alım programının süresinin sona ermesi nedeniyle, yeni pay geri alım programının 2025 hesap dönemine ait olağan genel kurul toplantısında genel kurul onayına sunulmasına karar verdi.",
    "etkiYorumu": "Pay geri alım yetkisinin yeniden gündeme alınması takip edilmeli. Uygulama için genel kurul onayı ve sonrasında alınacak aksiyonlar belirleyici olacak."
  },
  {
    "baslik": "Türk Altın İşletmeleri / TRMET",
    "etki": "Sınırlı Pozitif",
    "kapLink": "https://www.kap.org.tr/Bildirim/1621628",
    "metin": "TRALT, dolaylı iştiraki olduğu TR Anadolu Metal Madencilik İşletmeleri A.Ş. paylarında ilave alım yapılmasına karar verdi. Daha önceki alımlara ek olarak azami 700 milyon TL tutarında ilave pay alım işlemi gerçekleştirilebileceği açıklandı.",
    "etkiYorumu": "Madencilik iştiraklerinde pay artırımı stratejik pozisyon güçlendirme açısından takip edilmeli."
  },
  {
    "baslik": "Türk Altın İşletmeleri / TRENJ",
    "etki": "Sınırlı Pozitif",
    "kapLink": "https://www.kap.org.tr/Bildirim/1621629",
    "metin": "TRALT, dolaylı iştiraki olduğu TR Doğal Enerji Kaynakları Araştırma ve Üretim A.Ş. paylarında ilave alım yapılmasına karar verdi. Daha önceki alımlara ek olarak azami 300 milyon TL tutarında ilave pay alım işlemi gerçekleştirilebileceği açıklandı.",
    "etkiYorumu": "Enerji ve madencilik bağlantılı iştiraklerde pay artırımı, grup stratejisi açısından izlenmesi gereken bir başlık."
  },
  {
    "baslik": "Özerden Ambalaj (OZRDN)",
    "etki": "Nötr / Takip Edilmeli",
    "kapLink": "https://www.kap.org.tr/Bildirim/1621630",
    "metin": "OZRDN, üretime ilişkin faaliyetlerin %100 bağlı ortaklığı Bizofol Yalıtım Ürünleri Sanayi A.Ş. bünyesinde sürdürülmesi için iç organizasyon yapılanması sürecinin başlatılmasına karar verdi. Bu kapsamda personel geçişi, alt kira ilişkisi ve Bizofol GmbH hisselerinin devri gibi adımlar planlanıyor.",
    "etkiYorumu": "Operasyonel yapılanma doğrudan finansal etki yaratmaktan çok organizasyonel verimlilik açısından takip edilmeli."
  },
  {
    "baslik": "Birko (BRKO)",
    "etki": "Nötr / Takip Edilmeli",
    "kapLink": "https://www.kap.org.tr/Bildirim/1621634",
    "metin": "BRKO, uzun vadeli büyüme stratejileri ve faaliyet alanlarının çeşitlendirilmesi hedefleri doğrultusunda Neva Prestij Yapı İnşaat Taahhüt Otomotiv Sanayi Ticaret Ltd. Şti.'nin %51 hissesinin alımına yönelik görüşmelere başlanmasına karar verdi.",
    "etkiYorumu": "Görüşme aşamasında olduğu için kesinleşmiş satın alma değildir. Stratejik çeşitlendirme açısından takip edilmeli."
  },
  {
    "baslik": "Trabzonspor Sportif (TSPOR)",
    "etki": "Sınırlı Pozitif",
    "kapLink": "https://www.kap.org.tr/Bildirim/1621642",
    "metin": "TSPOR, Yıldız Holding A.Ş. ile 2026/2027, 2027/2028 ve 2028/2029 futbol sezonlarını kapsayan reklam anlaşması imzaladı. Anlaşma kapsamında üç sezon için toplam 80 milyon TL + KDV ödeme yapılacak.",
    "etkiYorumu": "Çok yıllı reklam anlaşması gelir görünürlüğü açısından sınırlı pozitif."
  },
  {
    "baslik": "Emlak Konut GYO (EKGYO)",
    "etki": "Pozitif",
    "kapLink": "https://www.kap.org.tr/Bildirim/1621643",
    "metin": "EKGYO, İstanbul Küçükçekmece Halkalı Batı 1. Etap ihalesinin 2. oturum sonucunu açıkladı. En yüksek teklif 7,789 milyar TL arsa satışı karşılığı satış toplam geliri, %35 şirket payı gelir oranı ve 2,726 milyar TL şirket payı toplam geliri üzerinden oluştu.",
    "etkiYorumu": "İhale büyüklüğü ve şirket payı toplam geliri nedeniyle pozitif. Teklif değerlendirme süreci devam ettiği için nihai ihale sonucu beklenmeli."
  },
  {
    "baslik": "Alcatel Lucent Teletaş (ALCTL)",
    "etki": "Nötr / Takip Edilmeli",
    "kapLink": "https://www.kap.org.tr/Bildirim/1621656",
    "metin": "ALCTL, Nokia Participations'ın şirket sermayesinin %65'ini temsil eden paylarını 43 milyon Avro bedelle Nokia Solutions and Networks Oy'ye devretmesinin planlandığını açıkladı. Her iki şirketin de Nokia Corporation'ın %100 bağlı ortaklığı olduğu ve nihai pay sahipliğinde / yönetim kontrolünde değişiklik olmayacağı belirtildi.",
    "etkiYorumu": "Pay sahipliği yapısında grup içi devir niteliğinde. Yönetim kontrolünde değişiklik olmayacağı için etki sınırlı ve takip odaklı."
  }
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "29 Haziran KAP: YEOTK GES, GOODY Bedelsiz, GRTHO Başvuru",
  description:
    "YEOTK GES ön anlaşması, GOODY bedelsiz hak kullanımı, GRTHO sermaye artırımı başvurusu ve günün KAP özetleri.",
  datePublished: "2026-06-29T09:00:00+03:00",
  dateModified: "2026-06-29T23:30:00+03:00",
  url: "https://www.hocaileborsa.com/haber/29-haziran-2026-onemli-kap-haberleri",
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

export default function YirmiDokuzHaziranKapHaberleriPage() {
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
              alt="29 Haziran KAP: YEOTK GES, GOODY Bedelsiz, GRTHO Başvuru"
              fill

              sizes="(min-width: 1024px) 896px, 100vw"
className="object-cover"
            />
          </div>

          <div className="p-6 md:p-10">
            <h1 className="text-2xl font-bold leading-tight tracking-tight text-slate-900 md:text-3xl lg:text-4xl">
              29 Haziran KAP: YEOTK GES, GOODY Bedelsiz, GRTHO Başvuru
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
                Borsa İstanbul’da 29 Haziran 2026 Pazartesi günü KAP’a düşen
                önemli bildirimlerde bedelsiz sermaye artırımı başvuruları,
                yenilenebilir enerji yatırımları, sermaye artışı tescilleri,
                pay alım kararları, ihale sonuçları, reklam anlaşmaları ve
                grup içi pay devirleri öne çıktı.
              </p>

              <div className="rounded-xl border border-blue-200 bg-blue-50 p-4 text-sm font-medium leading-7 text-blue-900 md:text-base">
                Günün ayrı haber değeri taşıyan başlıkları YEOTK, GOODY, GRTHO
                ve EKGYO tarafında oluştu. Gün sonu özetinde ise KRVGD, IHLGM,
                DOFER, OFSYM, TARFN, PRKME, TRALT, TSPOR ve ALCTL gibi takip
                edilmesi gereken bildirimler de yer aldı.
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
                Günün pozitif algılanabilecek haberleri arasında KRVGD’nin ABD
                gümrük vergisi iade tahsilatını tamamlaması, YEOTK’nin Zambiya
                yatırımı, GOODY ve GRTHO’nun bedelsiz sermaye süreçleri, OFSYM’nin
                Samsun tesisi silo ruhsatı ve EKGYO’nun Halkalı ihale sonucu öne
                çıktı.
              </div>

              <HaberIlgiliBolumler
                slug="29-haziran-2026-onemli-kap-haberleri"
                baslik="29 Haziran KAP: YEOTK GES, GOODY Bedelsiz, GRTHO Başvuru"
              />

              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm font-medium leading-7 text-amber-900 md:text-base">
                ⚠️ Bu özet bilgilendirme amaçlıdır, yatırım tavsiyesi değildir.
                KAP bildirimlerinde yer alan süreçlerin bir kısmı başvuru, görüşme,
                değerlendirme veya onay aşamasındadır.
              </div>
            </div>
          </div>

          <HaberAltKisim href="/haber/29-haziran-2026-onemli-kap-haberleri" />

          <AuthorBox />
        </article>
      </div>
    </main>
  );
}
