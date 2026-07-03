import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import HaberIlgiliBolumler from "@/components/HaberIlgiliBolumler";
import AuthorBox from "@/components/AuthorBox";
import HaberAltKisim from "@/components/HaberAltKisim";
import { formatHaberTarihi, getHaberDosyaTarihi } from "@/lib/haber-tarih";

const haberSaati = getHaberDosyaTarihi(import.meta.url);
const haberTarihi = formatHaberTarihi(haberSaati);

const slug = "3-temmuz-2026-onemli-kap-haberleri";
const haberUrl = `https://www.hocaileborsa.com/haber/${slug}`;
const haberGorsel = "https://www.hocaileborsa.com/kap-ozeti-discover.webp";

export const metadata: Metadata = {
  title: "3 Temmuz 2026 Cuma Önemli KAP Haberleri | INFO, ASTOR, HEKTS, SASA",
  description:
    "3 Temmuz 2026 Cuma günü Borsa İstanbul’da öne çıkan KAP haberleri: INFO bedelsiz başvurusu, ASTOR TEİAŞ sözleşmesi, HEKTS tahsisli sermaye artırımı, SASA ihraç belgesi ve diğer önemli bildirimler.",
  alternates: {
    canonical: haberUrl,
  },
  openGraph: {
    type: "article",
    title: "3 Temmuz 2026 Cuma Önemli KAP Haberleri",
    description:
      "INFO, ASTOR, HEKTS, SASA, MERKO, AKCNS, AKSEN, SAYAS, PNLSN, EBEBK, ALKLC ve MEYSU için günün öne çıkan KAP gelişmeleri.",
    url: haberUrl,
    images: [
      {
        url: haberGorsel,
        width: 1200,
        height: 675,
        alt: "3 Temmuz 2026 Cuma önemli KAP haberleri",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "3 Temmuz 2026 Cuma Önemli KAP Haberleri",
    description:
      "Borsa İstanbul’da günün öne çıkan KAP bildirimleri ve olası etkileri.",
    images: [haberGorsel],
  },
};

const kapHaberleri = [
  {
    kod: "INFO",
    baslik: "%100 bedelsiz sermaye artırımı için SPK başvurusu",
    etki: "Pozitif-Takip",
    kategori: "Sermaye Artırımı",
    link: "https://www.kap.org.tr/Bildirim/1623493",
    ozet:
      "İnfo Yatırım, mevcut 960.336.000 TL sermayesini iç kaynaklardan karşılanmak üzere 1.920.672.000 TL’ye çıkarmak için SPK’ya başvurdu. Süreç henüz onay değil, başvuru aşamasında.",
    yorum:
      "Bedelsiz sermaye artırımı haberleri kısa vadede yatırımcı ilgisini artırabilir. Ancak nihai takvim ve hak kullanım süreci SPK onayı sonrası netleşeceği için süreç tamamlanmış gibi değerlendirilmemelidir.",
  },
  {
    kod: "ASTOR",
    baslik: "TEİAŞ ile 816,2 milyon TL’lik sözleşme imzalandı",
    etki: "Pozitif",
    kategori: "İhale / Sözleşme",
    link: "https://www.kap.org.tr/Bildirim/1623500",
    ozet:
      "ASTOR, TEİAŞ ihalesi kapsamında 4 adet Mobil Trafo Merkezi, 4 adet OG Ünitesi ve yedek malzeme temini için sözleşme imzalandığını açıkladı. İhale bedeli 816.200.000 TL olarak duyuruldu.",
    yorum:
      "Sözleşme şirketin sipariş portföyü ve gelir görünümü açısından destekleyici. KAP’ta ihale bedelinin son açıklanan brüt satış hasılatına oranı %2,31 olarak yer aldı.",
  },
  {
    kod: "HEKTS",
    baslik: "2,38 milyar TL tahsisli sermaye artırımı için SPK başvurusu",
    etki: "Nötr-Takip",
    kategori: "Sermaye Artırımı",
    link: "https://www.kap.org.tr/Bildirim/1624193",
    ozet:
      "HEKTS, OYAK Genel Müdürlüğü’ne tahsisli sermaye artırımı için SPK’ya başvurdu. Planlanan toplam satış hasılatı 2.380.000.000 TL olarak açıklandı.",
    yorum:
      "Tahsisli artırım şirket finansmanı açısından önemli olabilir. Buna karşın işlem rüçhan hakkı kullandırılmadan yapılacağı için nihai satış fiyatı, pay adedi ve olası sulanma etkisi yakından izlenmeli.",
  },
  {
    kod: "MERKO",
    baslik: "%100 bedelli sermaye artırımı başvuru süreci",
    etki: "Nötr-Takip",
    kategori: "Sermaye Artırımı",
    link: "https://www.kap.org.tr/Bildirim/1623470",
    ozet:
      "MERKO, 850.000.000 TL olan çıkarılmış sermayesinin 1.700.000.000 TL’ye yükseltilmesine yönelik bedelli sermaye artırımı sürecine ilişkin başvuru bilgisini paylaştı.",
    yorum:
      "Bedelli sermaye artırımı şirket kasasına kaynak sağlayabilir; ancak mevcut yatırımcı açısından sermaye artışı, rüçhan kullanımı ve olası pay sulanması yönüyle dikkatli takip edilmelidir.",
  },
  {
    kod: "AKCNS",
    baslik: "Heidelberg Materials pay devri ve pay alım teklifi süreci",
    etki: "Nötr-Takip",
    kategori: "Pay Devri / Pay Alım Teklifi",
    link: "https://www.kap.org.tr/Bildirim/1623497",
    ozet:
      "AKCNS’te Sabancı Holding’in %39,72 oranındaki paylarının Heidelberg Materials AG’ye devri sonrası zorunlu pay alım teklifi sürecine ilişkin SPK görüş başvurusu sonuçlandı. Zorunlu pay alım teklifi başvuru süreci ise devam ediyor.",
    yorum:
      "Bu bildirimde pay alım teklifi fiyatı ve takvim henüz açıklanmadı. Bu nedenle haber, nihai fiyat ve uygulama takvimi gelene kadar takip başlığı olarak değerlendirilmeli.",
  },
  {
    kod: "AKSEN",
    baslik: "Kurumsal yönetim derecelendirme notu yükseldi",
    etki: "Sınırlı Pozitif",
    kategori: "Kurumsal Yönetim",
    link: "https://www.kap.org.tr/Bildirim/1623506",
    ozet:
      "AKSEN’in kurumsal yönetim uyum derecelendirme notu 10 üzerinden 9,43’ten 9,54’e yükseldi. Pay sahipleri, kamuyu aydınlatma, menfaat sahipleri ve yönetim kurulu başlıkları ayrıca açıklandı.",
    yorum:
      "Not artışı doğrudan finansal sonuç yaratmasa da kurumsal yönetim algısı ve şeffaflık açısından destekleyici bir gelişme olarak öne çıkıyor.",
  },
  {
    kod: "SAYAS",
    baslik: "Ateş Wind Power’dan 3,1 milyon euro hasılat beklentisi",
    etki: "Sınırlı Pozitif",
    kategori: "Hasılat Beklentisi",
    link: "https://www.kap.org.tr/Bildirim/1623522",
    ozet:
      "SAYAS, 2026 üçüncü çeyrekte ilişkili tarafı Ateş Wind Power’a rüzgar türbini ve türbin kulesi aksamları ile ticari mal satışlarından yaklaşık 3.100.000 euro hasılat beklediğini açıkladı.",
    yorum:
      "Düzenli çeyreklik hasılat beklentisi şirketin sipariş ve üretim görünümü açısından izlenebilir. Açıklama beklenti niteliğinde olduğu için gerçekleşme finansal tablolarla teyit edilecek.",
  },
  {
    kod: "SASA",
    baslik: "Şarta bağlı sermaye artırımı için onaylı ihraç belgesi",
    etki: "Pozitif-Takip",
    kategori: "Sermaye Artırımı",
    link: "https://www.kap.org.tr/Bildirim/1623633",
    ozet:
      "SASA, çıkarılmış sermayesinin şarta bağlı sermaye artırımı yoluyla 47.040.878.514,69 TL’den 52.501.931.146,27 TL’ye yükseltilmesi kapsamında ihraç edilecek 5.461.052.631,58 TL nominal değerli paylara ilişkin SPK onaylı ihraç belgesini paylaştı.",
    yorum:
      "Süreç daha önce ayrı haber yapılan sermaye artırımı başlığının devamı niteliğinde. Yatırımcıların ihraç kapsamı, pay adedi ve sonraki adımları takip etmesi önemli.",
  },
  {
    kod: "PNLSN",
    baslik: "Elazığ GES yatırımı için bağlantı hat kabul başvurusu",
    etki: "Sınırlı Pozitif",
    kategori: "Yatırım",
    link: "https://www.kap.org.tr/Bildirim/1623894",
    ozet:
      "PNLSN, Elazığ Merkez Zerteriç Köyü’nde planlanan toplam 2.015 kW lisanssız elektrik üretimi amaçlı GES yatırımı kapsamında bağlantı hat kabulü için ilgili dağıtım şirketine başvuru yapıldığını açıkladı.",
    yorum:
      "GES yatırımı enerji maliyetleri ve sürdürülebilirlik açısından destekleyici olabilir. Ancak açıklama başvuru aşamasında olduğu için kabul sonucu ve devreye alma süreci ayrıca takip edilmeli.",
  },
  {
    kod: "EBEBK",
    baslik: "Haziran ziyaretçi sayısı ve 6 aylık trafik verileri açıklandı",
    etki: "Sınırlı Pozitif",
    kategori: "Operasyonel Veri",
    link: "https://www.kap.org.tr/Bildirim/1624227",
    ozet:
      "EBEBK, Haziran 2026’da Türkiye mağazalarında 4.762.968 ziyaretçi, yılın ilk 6 ayında 29.169.781 ziyaretçi açıkladı. ebebek.com ziyaret sayısı Haziran’da 10.633.631, 6 aylık dönemde 74.133.825 oldu.",
    yorum:
      "Hem mağaza hem online kanal ziyaretçi sayısındaki artış operasyonel talep açısından olumlu sinyal veriyor. Bunun finansal sonuçlara etkisi satış, sepet büyüklüğü ve marjlarla birlikte değerlendirilmeli.",
  },
  {
    kod: "ALKLC",
    baslik: "Burhaniye’de üretim ve lojistik amaçlı taşınmaz alım kararı",
    etki: "Sınırlı Pozitif",
    kategori: "Yatırım / Taşınmaz",
    link: "https://www.kap.org.tr/Bildirim/1624262",
    ozet:
      "ALKLC, Balıkesir Burhaniye’de fabrika sahasına yakın konumda bulunan 3.540 m² yüzölçümüne sahip tarla vasfındaki taşınmazın satın alınmasına karar verdi.",
    yorum:
      "Karar, üretim faaliyetlerinin geliştirilmesi ve lojistik-operasyonel süreçlerin desteklenmesi amacı taşıyor. Bedel ve ödeme koşulları ayrıca netleşeceği için finansal etki şimdilik sınırlı okunmalı.",
  },
  {
    kod: "MEYSU",
    baslik: "SPK’ya başvuru yapıldı",
    etki: "Nötr-Takip",
    kategori: "Hukuki / İdari Başvuru",
    link: "https://www.kap.org.tr/Bildirim/1624265",
    ozet:
      "MEYSU, daha önce kamuya açıklanan ihtarnameye ilişkin olarak yatırımcı haklarının korunması, sermaye piyasasının güven ve istikrar içinde işlemesi gerekçesiyle SPK’ya başvuruda bulunduğunu açıkladı.",
    yorum:
      "Başvuru hukuki ve idari süreç niteliğinde. Şirket, önemli gelişme olması halinde kamuoyunu ayrıca bilgilendireceğini belirttiği için sonuç alınmadan kesin etki yorumu yapılmamalı.",
  },
];

const oneCikanlar = [
  { baslik: "Ayrı haber yapılanlar", deger: "INFO, ASTOR, HEKTS" },
  { baslik: "Sermaye artırımı", deger: "INFO, HEKTS, MERKO, SASA" },
  { baslik: "Sözleşme / yatırım", deger: "ASTOR, PNLSN, ALKLC" },
  { baslik: "Operasyonel veri", deger: "EBEBK, SAYAS" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "3 Temmuz 2026 Cuma Önemli KAP Haberleri",
  description:
    "3 Temmuz 2026 Cuma günü Borsa İstanbul şirketlerinden gelen önemli KAP bildirimleri ve olası etkileri.",
  image: haberGorsel,
  datePublished: "2026-07-03T23:30:00+03:00",
  dateModified: "2026-07-03T23:30:00+03:00",
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

function etkiRengi(etki: string) {
  if (etki.includes("Pozitif")) return "border-emerald-200 bg-emerald-50 text-emerald-800";
  if (etki.includes("Negatif")) return "border-rose-200 bg-rose-50 text-rose-800";
  return "border-slate-200 bg-slate-50 text-slate-700";
}

export default function UcTemmuzKapHaberleriPage() {
  return (
    <main className="min-h-screen bg-[#f8fafc] px-4 py-6 md:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="mx-auto max-w-5xl">
        <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_2px_16px_rgba(15,23,42,0.07)]">
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100">
            <Image
              src="/kap-ozeti-discover.webp"
              alt="3 Temmuz 2026 Cuma önemli KAP haberleri"
              fill
              unoptimized
              className="object-cover"
              priority
            />
          </div>

          <div className="p-6 md:p-10">
            <h1 className="text-2xl font-bold leading-tight tracking-tight text-slate-900 md:text-3xl lg:text-4xl">
              3 Temmuz 2026 Cuma Önemli KAP Haberleri
            </h1>

            <div className="mb-5 mt-3 flex flex-wrap items-center gap-3">
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

            <div className="space-y-6 text-base leading-8 text-slate-700 md:text-lg">
              <p>
                3 Temmuz 2026 Cuma günü Kamuyu Aydınlatma Platformu’nda öne çıkan
                bildirimlerde sermaye artırımı başvuruları, ihale ve sözleşme
                gelişmeleri, operasyonel veriler ve yatırım süreçleri dikkat çekti.
                Günün ayrı haber yapılan başlıkları olan <strong>INFO</strong>,
                <strong> ASTOR</strong> ve <strong>HEKTS</strong> gelişmeleri de bu
                gün sonu KAP özetine dahil edildi.
              </p>

              <p>
                Günün genelinde sermaye artırımı tarafında INFO, HEKTS, MERKO ve
                SASA öne çıkarken; ASTOR’un TEİAŞ sözleşmesi, EBEBK’nin ziyaretçi
                verileri, SAYAS’ın hasılat beklentisi ve PNLSN’nin GES yatırımı
                takip edilen diğer başlıklar oldu.
              </p>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {oneCikanlar.map((item) => (
                  <div
                    key={item.baslik}
                    className="rounded-2xl border border-blue-200 bg-blue-50 p-4"
                  >
                    <div className="text-sm font-semibold text-blue-800">
                      {item.baslik}
                    </div>
                    <div className="mt-1 text-base font-bold text-blue-950">
                      {item.deger}
                    </div>
                  </div>
                ))}
              </div>

              <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:p-6">
                <h2 className="mb-4 text-xl font-bold tracking-tight text-slate-900">
                  Günün öne çıkan KAP bildirimleri
                </h2>

                <div className="space-y-4">
                  {kapHaberleri.map((haber) => (
                    <div
                      key={haber.kod}
                      className="rounded-2xl border border-slate-200 bg-slate-50 p-4 md:p-5"
                    >
                      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                        <div>
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="rounded-lg bg-slate-900 px-2.5 py-1 text-sm font-bold text-white">
                              {haber.kod}
                            </span>
                            <span className={`rounded-lg border px-2.5 py-1 text-xs font-semibold ${etkiRengi(haber.etki)}`}>
                              {haber.etki}
                            </span>
                            <span className="rounded-lg border border-slate-200 bg-white px-2.5 py-1 text-xs font-semibold text-slate-600">
                              {haber.kategori}
                            </span>
                          </div>

                          <h3 className="mt-3 text-lg font-bold text-slate-900">
                            {haber.baslik}
                          </h3>
                        </div>

                        <a
                          href={haber.link}
                          target="_blank"
                          rel="noopener noreferrer nofollow"
                          className="shrink-0 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-700 hover:border-blue-300 hover:text-blue-700"
                        >
                          Orjinal Kap içeriği
                        </a>
                      </div>

                      <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
                        {haber.ozet}
                      </p>

                      <div className="mt-4 rounded-xl border border-white bg-white p-4 text-sm leading-7 text-slate-600">
                        <span className="font-semibold text-slate-900">
                          Değerlendirme:{" "}
                        </span>
                        {haber.yorum}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:p-6">
                <h2 className="mb-4 text-xl font-bold tracking-tight text-slate-900">
                  Genel değerlendirme
                </h2>

                <p className="text-sm leading-7 text-slate-600 md:text-base">
                  Günün KAP akışında sermaye artırımı başlıkları ağırlıklıydı.
                  INFO tarafında %100 bedelsiz sermaye artırımı başvurusu yatırımcı
                  ilgisi açısından öne çıkarken, HEKTS’te tahsisli artırımın OYAK’a
                  yapılacak olması finansman ve ortaklık yapısı açısından takip
                  edilmesi gereken bir başlık oluşturdu. MERKO ve SASA bildirimleri
                  de sermaye tarafındaki yoğun gündemi destekledi.
                </p>

                <p className="mt-4 text-sm leading-7 text-slate-600 md:text-base">
                  Şirket operasyonları tarafında ASTOR’un TEİAŞ sözleşmesi somut
                  gelir etkisi bakımından günün en dikkat çekici gelişmelerinden
                  biri olurken, EBEBK ve SAYAS tarafında açıklanan operasyonel
                  veriler şirketlerin faaliyet performansı açısından izlenebilir
                  sinyaller verdi. PNLSN ve ALKLC bildirimleri ise yatırım ve
                  kapasite/operasyon destekleyici adımlar olarak not edildi.
                </p>
              </section>

              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm leading-7 text-slate-600">
                <div className="font-semibold text-slate-800">Kaynaklar</div>
                <div className="mt-2 grid gap-2 sm:grid-cols-2">
                  {kapHaberleri.map((haber) => (
                    <a
                      key={haber.link}
                      href={haber.link}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="font-medium text-slate-700 underline underline-offset-2"
                    >
                      {haber.kod} — Orjinal Kap içeriği
                    </a>
                  ))}
                </div>
              </div>

              <HaberIlgiliBolumler
                slug={slug}
                baslik="3 Temmuz 2026 Cuma Önemli KAP Haberleri"
              />

              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm font-medium leading-7 text-amber-900 md:text-base">
                ⚠️ Bu haber bilgilendirme amacıyla hazırlanmıştır, yatırım tavsiyesi
                değildir. KAP bildirimlerindeki süreçler; SPK onayı, ihale sonucu,
                başvuru sonucu veya hak kullanım takvimi gibi ek açıklamalarla
                değişebilir. Kesin işlem kararları için şirketlerin sonraki KAP
                duyuruları takip edilmelidir.
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
