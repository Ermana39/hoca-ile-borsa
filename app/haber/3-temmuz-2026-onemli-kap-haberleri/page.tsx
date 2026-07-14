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
  title: "3 Temmuz 2026 Önemli KAP: INFO, ASTOR, HEKTS Etkileri",
  description:
    "INFO %100 bedelsiz başvurusu, ASTOR 816 milyon TL TEİAŞ sözleşmesi, HEKTS tahsisli artırım ve 3 Temmuz KAP haberlerinde olası etkiler.",
  alternates: {
    canonical:
      "https://www.hocaileborsa.com/haber/3-temmuz-2026-onemli-kap-haberleri",
  },
  openGraph: {
    type: "article",
    title: "3 Temmuz 2026 Önemli KAP: INFO, ASTOR, HEKTS Etkileri",
    description:
      "INFO %100 bedelsiz başvurusu, ASTOR 816 milyon TL TEİAŞ sözleşmesi, HEKTS tahsisli artırım ve 3 Temmuz KAP haberlerinde olası etkiler.",
    images: [
      {
        url: "https://www.hocaileborsa.com/kap-ozeti-discover.webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "3 Temmuz 2026 Önemli KAP: INFO, ASTOR, HEKTS Etkileri",
    description:
      "INFO %100 bedelsiz başvurusu, ASTOR 816 milyon TL TEİAŞ sözleşmesi, HEKTS tahsisli artırım ve 3 Temmuz KAP haberlerinde olası etkiler.",
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
    "baslik": "İnfo Yatırım (INFO)",
    "etki": "Pozitif / Takip Edilmeli",
    "kapLink": "https://www.kap.org.tr/Bildirim/1623493",
    "metin": "INFO, mevcut 960.336.000 TL sermayesinin iç kaynaklardan karşılanmak üzere 1.920.672.000 TL’ye çıkarılması için SPK’ya başvurdu. Bedelsiz sermaye artırımı tutarı 960.336.000 TL, oranı ise %100 olarak açıklandı.",
    "etkiYorumu": "Bedelsiz sermaye artırımı başvurusu yatırımcı ilgisi açısından pozitif algılanabilir. Süreç henüz başvuru aşamasında olduğu için hak kullanım tarihi ve nihai takvim SPK onayı sonrası netleşecektir."
  },
  {
    "baslik": "Astor Enerji (ASTOR)",
    "etki": "Pozitif",
    "kapLink": "https://www.kap.org.tr/Bildirim/1623500",
    "metin": "ASTOR, TEİAŞ ihalesi kapsamında 4 adet Mobil Trafo Merkezi, 4 adet OG Ünitesi ve yedek malzeme temini için sözleşme imzalandığını açıkladı. İhale bedeli 816.200.000 TL olarak duyuruldu.",
    "etkiYorumu": "TEİAŞ ile imzalanan sözleşme, şirketin sipariş portföyünü destekleyici nitelikte. Açıklanan tutarın son açıklanan brüt satış hasılatına oranı %2,31 olarak bildirildi."
  },
  {
    "baslik": "Hektaş (HEKTS)",
    "etki": "Nötr / Takip Edilmeli",
    "kapLink": "https://www.kap.org.tr/Bildirim/1624193",
    "metin": "HEKTS, OYAK Genel Müdürlüğü’ne tahsisli sermaye artırımı için SPK’ya başvurdu. Planlanan toplam satış hasılatı 2.380.000.000 TL olarak açıklandı.",
    "etkiYorumu": "Tahsisli artırım şirketin finansman yapısı açısından önemli olabilir. Rüçhan hakkı kullandırılmayacağı için satış fiyatı, ihraç edilecek pay adedi ve olası sulanma etkisi takip edilmeli."
  },
  {
    "baslik": "Merko Gıda (MERKO)",
    "etki": "Nötr / Takip Edilmeli",
    "kapLink": "https://www.kap.org.tr/Bildirim/1623470",
    "metin": "MERKO, 850.000.000 TL olan çıkarılmış sermayesinin bedelli sermaye artırımı yoluyla 1.700.000.000 TL’ye yükseltilmesi sürecine ilişkin başvuru bilgisini paylaştı.",
    "etkiYorumu": "Bedelli sermaye artırımı şirket kasasına kaynak sağlayabilir. Ancak mevcut yatırımcı açısından rüçhan hakkı kullanımı, sermaye artışı ve olası pay sulanması dikkatle izlenmelidir."
  },
  {
    "baslik": "Akçansa (AKCNS)",
    "etki": "Nötr / Takip Edilmeli",
    "kapLink": "https://www.kap.org.tr/Bildirim/1623497",
    "metin": "AKCNS’te Sabancı Holding’in %39,72 oranındaki paylarının Heidelberg Materials AG’ye devri sonrası zorunlu pay alım teklifi sürecine ilişkin SPK görüş başvurusu sonuçlandı. Zorunlu pay alım teklifi başvuru süreci devam ediyor.",
    "etkiYorumu": "Pay alım teklifi fiyatı ve uygulama takvimi henüz netleşmediği için bildirim takip edilmesi gereken bir süreç niteliğinde."
  },
  {
    "baslik": "Aksa Enerji (AKSEN)",
    "etki": "Sınırlı Pozitif",
    "kapLink": "https://www.kap.org.tr/Bildirim/1623506",
    "metin": "AKSEN’in kurumsal yönetim uyum derecelendirme notu 10 üzerinden 9,43’ten 9,54’e yükseldi. Pay sahipleri, kamuyu aydınlatma, menfaat sahipleri ve yönetim kurulu başlıklarına ilişkin alt notlar da paylaşıldı.",
    "etkiYorumu": "Kurumsal yönetim notundaki artış doğrudan finansal sonuç yaratmasa da şeffaflık ve kurumsal yapı algısı açısından sınırlı pozitif değerlendirilebilir."
  },
  {
    "baslik": "Say Yenilenebilir Enerji (SAYAS)",
    "etki": "Sınırlı Pozitif",
    "kapLink": "https://www.kap.org.tr/Bildirim/1623522",
    "metin": "SAYAS, 2026 üçüncü çeyrekte ilişkili tarafı Ateş Wind Power’a rüzgar türbini ve türbin kulesi aksamları ile ticari mal satışlarından yaklaşık 3.100.000 euro hasılat beklediğini açıkladı.",
    "etkiYorumu": "Beklenen hasılat şirketin üretim ve satış görünümü açısından olumlu takip edilebilir. Açıklama beklenti niteliğinde olduğu için gerçekleşme finansal sonuçlarla teyit edilmelidir."
  },
  {
    "baslik": "SASA Polyester (SASA)",
    "etki": "Pozitif / Takip Edilmeli",
    "kapLink": "https://www.kap.org.tr/Bildirim/1623633",
    "metin": "SASA, şarta bağlı sermaye artırımı kapsamında ihraç edilecek 5.461.052.631,58 TL nominal değerli paylara ilişkin SPK onaylı ihraç belgesini paylaştı. Sermayenin 47.040.878.514,69 TL’den 52.501.931.146,27 TL’ye yükseltilmesi öngörülüyor.",
    "etkiYorumu": "Bildirim daha önce açıklanan şarta bağlı sermaye artırımı sürecinin devamı niteliğinde. Paya dönüştürülebilir tahvil sahipleri ve sermaye yapısına etkisi izlenmeli."
  },
  {
    "baslik": "Panelsan Çatı Cephe Sistemleri (PNLSN)",
    "etki": "Sınırlı Pozitif",
    "kapLink": "https://www.kap.org.tr/Bildirim/1623894",
    "metin": "PNLSN, Elazığ Merkez Zerteriç Köyü’nde planlanan toplam 2.015 kW lisanssız elektrik üretimi amaçlı GES yatırımı kapsamında bağlantı hat kabulü için ilgili dağıtım şirketine başvuru yaptığını açıkladı.",
    "etkiYorumu": "GES yatırımı enerji maliyetleri ve sürdürülebilirlik açısından destekleyici olabilir. Başvuru sonucunun ve devreye alma sürecinin takip edilmesi gerekir."
  },
  {
    "baslik": "Ebebek Mağazacılık (EBEBK)",
    "etki": "Sınırlı Pozitif",
    "kapLink": "https://www.kap.org.tr/Bildirim/1624227",
    "metin": "EBEBK, Haziran 2026’da Türkiye mağazalarında 4.762.968 ziyaretçi, yılın ilk 6 ayında 29.169.781 ziyaretçi açıkladı. ebebek.com ziyaret sayısı Haziran’da 10.633.631, 6 aylık dönemde 74.133.825 oldu.",
    "etkiYorumu": "Mağaza ve online ziyaretçi sayıları operasyonel talep açısından olumlu sinyal veriyor. Finansal etki için satış dönüşümü, sepet büyüklüğü ve marjlar takip edilmeli."
  },
  {
    "baslik": "Altınkılıç Gıda (ALKLC)",
    "etki": "Sınırlı Pozitif",
    "kapLink": "https://www.kap.org.tr/Bildirim/1624262",
    "metin": "ALKLC, Balıkesir Burhaniye’de fabrika sahasına yakın konumda bulunan 3.540 m² yüzölçümüne sahip tarla vasfındaki taşınmazın satın alınmasına karar verdiğini açıkladı.",
    "etkiYorumu": "Karar, üretim faaliyetlerinin geliştirilmesi ve lojistik süreçlerin desteklenmesi açısından takip edilebilir. Finansal etki, satın alma bedeli ve kullanım planı netleştikçe daha sağlıklı değerlendirilecektir."
  },
  {
    "baslik": "Meysu Gıda (MEYSU)",
    "etki": "Nötr / Takip Edilmeli",
    "kapLink": "https://www.kap.org.tr/Bildirim/1624265",
    "metin": "MEYSU, daha önce kamuya açıklanan ihtarnameye ilişkin olarak yatırımcı haklarının korunması, sermaye piyasasının güven ve istikrar içinde işlemesi gerekçesiyle SPK’ya başvuruda bulunduğunu açıkladı.",
    "etkiYorumu": "Başvuru hukuki ve idari süreç niteliğinde. Şirket, önemli gelişme olması halinde kamuoyunu ayrıca bilgilendireceğini belirttiği için sonuç alınmadan kesin etki yorumu yapılmamalıdır."
  }
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "3 Temmuz 2026 Önemli KAP: INFO, ASTOR, HEKTS Etkileri",
  description:
    "INFO %100 bedelsiz başvurusu, ASTOR 816 milyon TL TEİAŞ sözleşmesi, HEKTS tahsisli artırım ve 3 Temmuz KAP haberlerinde olası etkiler.",
  datePublished: "2026-07-03T09:00:00+03:00",
  dateModified: "2026-07-06T12:00:00+03:00",
  url: "https://www.hocaileborsa.com/haber/3-temmuz-2026-onemli-kap-haberleri",
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

export default function UcTemmuzKapHaberleriPage() {
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
              alt="3 Temmuz 2026 önemli KAP haberleri: INFO, ASTOR ve HEKTS etkileri"
              fill

              sizes="(min-width: 1024px) 896px, 100vw"
className="object-cover"
            />
          </div>

          <div className="p-6 md:p-10">
            <h1 className="text-2xl font-bold leading-tight tracking-tight text-slate-900 md:text-3xl lg:text-4xl">
              3 Temmuz 2026 Önemli KAP: INFO, ASTOR, HEKTS Etkileri
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
                3 Temmuz 2026 gün sonu KAP özetinde INFO’nun %100 bedelsiz
                sermaye artırımı başvurusu, ASTOR’un 816,2 milyon TL’lik TEİAŞ
                sözleşmesi ve HEKTS’in 2,38 milyar TL tahsisli sermaye artırımı
                başvurusu öne çıktı.
              </p>

              <div className="rounded-xl border border-blue-200 bg-blue-50 p-4 text-sm font-medium leading-7 text-blue-900 md:text-base">
                Günün dikkat çeken başlıklarında INFO’nun %100 bedelsiz sermaye
                artırımı başvurusu, ASTOR’un 816,2 milyon TL’lik TEİAŞ sözleşmesi,
                HEKTS’in 2,38 milyar TL tahsisli sermaye artırımı başvurusu,
                SASA’nın şarta bağlı sermaye artırımı süreci, EBEBK’nin ziyaretçi
                verileri ve SAYAS’ın 3,1 milyon euro hasılat beklentisi öne çıktı.
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
                Günün pozitif algılanabilecek başlıklarında INFO’nun %100 bedelsiz
                sermaye artırımı başvurusu, ASTOR’un 816,2 milyon TL’lik TEİAŞ
                sözleşmesi, SAYAS’ın 3,1 milyon euro hasılat beklentisi ve EBEBK’nin
                mağaza ile online ziyaretçi verileri öne çıktı.
              </div>

              <HaberIlgiliBolumler
                slug="3-temmuz-2026-onemli-kap-haberleri"
                baslik="3 Temmuz 2026 Önemli KAP: INFO, ASTOR, HEKTS Etkileri"
              />

              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm font-medium leading-7 text-amber-900 md:text-base">
                ⚠️ Bu özet bilgilendirme amaçlıdır, yatırım tavsiyesi değildir.
                KAP bildirimlerinde yer alan bazı süreçler sermaye artırımı
                başvurusu, ihale sözleşmesi, pay alım teklifi süreci, faaliyet
                verisi, yatırım başvurusu veya idari başvuru niteliğindedir. Nihai
                finansal etki için şirketlerin sonraki açıklamaları ve finansal
                sonuçları takip edilmelidir.
              </div>
            </div>
          </div>

          <HaberAltKisim href="/haber/3-temmuz-2026-onemli-kap-haberleri" />

          <AuthorBox />
        </article>
      </div>
    </main>
  );
}
