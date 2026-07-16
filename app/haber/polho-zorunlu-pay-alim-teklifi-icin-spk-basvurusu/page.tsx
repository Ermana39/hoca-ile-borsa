import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import HaberIlgiliBolumler from "@/components/HaberIlgiliBolumler";
import AuthorBox from "@/components/AuthorBox";
import HaberAltKisim from "@/components/HaberAltKisim";
import { formatHaberTarihi, getHaberDosyaTarihi } from "@/lib/haber-tarih";

const haberSaati = getHaberDosyaTarihi(import.meta.url);
const haberTarihi = formatHaberTarihi(haberSaati);

const slug = "polho-zorunlu-pay-alim-teklifi-icin-spk-basvurusu";
const haberUrl = `https://www.hocaileborsa.com/haber/${slug}`;
const haberGorsel =
  "https://www.hocaileborsa.com/polho-zorunlu-pay-alim-teklifi-icin-spk-basvurusu.webp";

export const metadata: Metadata = {
  title: "POLHO Zorunlu Pay Alım Teklifi İçin SPK Başvurusu Yapıldı",
  description:
    "POLHO’nun hakim ortağı CoreX, 8 Temmuz 2026’da tamamlanan pay devri sonrası zorunlu pay alım teklifi bilgi formunun onayı için SPK’ya başvurdu.",
  alternates: {
    canonical: haberUrl,
  },
  openGraph: {
    type: "article",
    title: "POLHO Zorunlu Pay Alım Teklifi İçin SPK Başvurusu Yapıldı",
    description:
      "CoreX, Polisan Holding’in diğer pay sahiplerine yönelik zorunlu pay alım teklifi süreci için SPK başvurusunu tamamladı.",
    url: haberUrl,
    images: [
      {
        url: haberGorsel,
        width: 1200,
        height: 675,
        alt: "POLHO zorunlu pay alım teklifi SPK başvurusu",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "POLHO Zorunlu Pay Alım Teklifi İçin SPK Başvurusu Yapıldı",
    description:
      "CoreX’in SPK başvurusu tamamlandı. Teklif fiyatı ve takvim, onaylı bilgi formuyla netleşecek.",
    images: [haberGorsel],
  },
};

const ozetKartlari = [
  {
    baslik: "Başvuru",
    deger: "SPK’ya Yapıldı",
    aciklama: "Bilgi formu onayı bekleniyor",
  },
  {
    baslik: "Başvuruyu Yapan",
    deger: "CoreX",
    aciklama: "POLHO’nun hakim ortağı",
  },
  {
    baslik: "Sürecin Nedeni",
    deger: "Pay Devri",
    aciklama: "8 Temmuz 2026’da tamamlandı",
  },
  {
    baslik: "Sonraki Aşama",
    deger: "Onaylı Form",
    aciklama: "Fiyat ve takvim netleşecek",
  },
];

const genelDetaylar = [
  {
    etiket: "Şirket",
    deger: "Polisan Holding A.Ş.",
  },
  {
    etiket: "Hisse Kodu",
    deger: "POLHO",
  },
  {
    etiket: "Bildirim Tarihi",
    deger: "16.07.2026",
  },
  {
    etiket: "Bildirim Saati",
    deger: "18:45:55",
  },
  {
    etiket: "Bildirim Özeti",
    deger: "Zorunlu pay alım teklifi yükümlülüğüne ilişkin SPK başvurusu",
  },
  {
    etiket: "Başvuruyu Yapan Taraf",
    deger: "CoreX Ports and Terminals Dilovası Liman İşletmeleri A.Ş.",
  },
  {
    etiket: "CoreX’in Konumu",
    deger: "Polisan Holding’in hakim ortağı",
  },
  {
    etiket: "Pay Devir Tarihi",
    deger: "08.07.2026",
  },
  {
    etiket: "Başvuru Tarihi",
    deger: "16.07.2026",
  },
  {
    etiket: "Başvurunun Konusu",
    deger: "Zorunlu pay alım teklifi bilgi formunun onayı",
  },
  {
    etiket: "İlgili Düzenleme",
    deger: "SPK II-26.1 sayılı Pay Alım Teklifi Tebliği",
  },
  {
    etiket: "Teklif Fiyatı",
    deger: "Henüz açıklanmadı",
  },
];

const surecAdimlari = [
  {
    baslik: "Pay devri tamamlandı",
    aciklama:
      "CoreX’in hakim ortak konumuna gelmesine neden olan pay devir işlemi 8 Temmuz 2026 tarihinde tamamlandı.",
  },
  {
    baslik: "Zorunlu teklif yükümlülüğü doğdu",
    aciklama:
      "Pay devri sonrasında CoreX’in, Polisan Holding’in diğer pay sahiplerine yönelik zorunlu pay alım teklifinde bulunma yükümlülüğü oluştu.",
  },
  {
    baslik: "SPK başvurusu yapıldı",
    aciklama:
      "CoreX, pay alım teklifi bilgi formunun onaylanması için 16 Temmuz 2026 tarihinde Sermaye Piyasası Kurulu’na başvurdu.",
  },
  {
    baslik: "Onaylı bilgi formu açıklanacak",
    aciklama:
      "SPK incelemesinin ardından onaylanacak bilgi formu kamuya açıklanacak. Teklif fiyatı, başlangıç ve bitiş tarihleri gibi ayrıntılar bu aşamada netleşecek.",
  },
];

const nedenOnemli = [
  {
    baslik: "Azınlık pay sahipleri için çıkış imkânı doğabilir",
    aciklama:
      "Zorunlu pay alım teklifi, halka açık şirkette kalan diğer pay sahiplerine belirlenen koşullarla paylarını hakim ortağa satma imkânı sağlayan bir süreçtir.",
  },
  {
    baslik: "Teklif fiyatı hisse için temel referans olacak",
    aciklama:
      "Piyasa açısından en kritik veri, SPK onaylı bilgi formunda yer alacak teklif fiyatı olacak. Bu fiyat açıklanmadan sürecin hisse üzerindeki net etkisi hesaplanamaz.",
  },
  {
    baslik: "Pay devri sonrası ikinci aşamaya geçildi",
    aciklama:
      "Başvurunun yapılması, 8 Temmuz’da tamamlanan pay devrinin ardından zorunlu teklif sürecinin resmen ilerlediğini gösteriyor.",
  },
  {
    baslik: "Süreç henüz başlamadı",
    aciklama:
      "SPK başvurusunun yapılmış olması, yatırımcıların paylarını hemen satabileceği anlamına gelmiyor. Teklif dönemi, kurul onayı ve ilan edilecek takvim sonrasında başlayacak.",
  },
];

const finansalOkuma = [
  "Başvuru, Polisan Holding’e doğrudan yeni nakit girişi sağlayan bir işlem değildir.",
  "Pay alım teklifinin finansmanı hakim ortak CoreX tarafından yürütülecek.",
  "POLHO açısından temel etki, ortaklık yapısı ve halka açıklık oranı üzerinden oluşabilir.",
  "Teklife katılım oranı yükselirse CoreX’in şirketteki payı artabilir.",
  "Teklif fiyatı ile borsa fiyatı arasındaki fark kısa vadeli fiyatlamada belirleyici olabilir.",
  "Teklif sonrasında halka açıklık oranında oluşabilecek değişim ayrıca takip edilmeli.",
];

const hisseOkumasi = [
  {
    baslik: "İlk aşamada fiyat odaklı beklenti oluşur",
    aciklama:
      "Zorunlu pay alım teklifi haberlerinde piyasa genellikle teklif fiyatına odaklanır. Fiyat henüz açıklanmadığı için POLHO tarafında belirsizlik devam ediyor.",
  },
  {
    baslik: "Primli teklif pozitif algı yaratabilir",
    aciklama:
      "Onaylı teklif fiyatının borsa fiyatının üzerinde oluşması halinde kısa vadeli pozitif fiyatlama görülebilir. Bunun tersi durumda haberin etkisi daha sınırlı kalabilir.",
  },
  {
    baslik: "Ortaklık yapısı değişebilir",
    aciklama:
      "Teklife katılan yatırımcıların paylarının CoreX’e geçmesiyle hakim ortağın pay oranı artabilir. Bu durum şirketin halka açıklık ve likidite görünümünü etkileyebilir.",
  },
];

const riskler = [
  "Teklif fiyatı henüz belli olmadığı için hisse etkisi net hesaplanamıyor.",
  "SPK inceleme sürecinde ek bilgi veya belge talep edilebilir.",
  "Onay ve teklif takvimi beklenenden uzun sürebilir.",
  "Teklif fiyatının piyasa beklentisini karşılamaması satış baskısı yaratabilir.",
  "Teklife yüksek katılım olması halka açık pay miktarını ve işlem likiditesini azaltabilir.",
];

const takipBasliklari = [
  "SPK’nın bilgi formuna ilişkin kararı",
  "Zorunlu pay alım teklifi fiyatı",
  "Teklif başlangıç ve bitiş tarihleri",
  "Aracı kurum ve başvuru yöntemi",
  "Teklife konu pay miktarı",
  "Teklife katılım oranı",
  "CoreX’in teklif sonrası POLHO’daki pay oranı",
];

const seoSorular = [
  {
    soru: "POLHO ne açıkladı?",
    cevap:
      "Polisan Holding, hakim ortağı CoreX’in zorunlu pay alım teklifi bilgi formunun onaylanması için SPK’ya başvurduğunu açıkladı.",
  },
  {
    soru: "POLHO zorunlu pay alım teklifi neden yapılacak?",
    cevap:
      "8 Temmuz 2026 tarihinde tamamlanan pay devir işlemi sonrasında CoreX’in diğer POLHO pay sahiplerine yönelik zorunlu pay alım teklifinde bulunma yükümlülüğü oluştu.",
  },
  {
    soru: "POLHO pay alım teklifi fiyatı kaç TL?",
    cevap:
      "Teklif fiyatı henüz açıklanmadı. Fiyat ve diğer koşullar SPK tarafından onaylanacak bilgi formuyla duyurulacak.",
  },
  {
    soru: "POLHO yatırımcıları hemen paylarını satabilir mi?",
    cevap:
      "Hayır. Başvuru aşaması tamamlandı ancak teklif dönemi henüz başlamadı. SPK onayı ve resmi takvimin açıklanması gerekiyor.",
  },
  {
    soru: "POLHO haberi hisse için nasıl okunmalı?",
    cevap:
      "Haber, zorunlu pay alım teklifi sürecinin ilerlediğini gösteriyor. Hisse üzerindeki net etki, teklif fiyatı ile borsa fiyatı arasındaki farka göre şekillenecek.",
  },
  {
    soru: "Teklif sonrası CoreX’in payı artabilir mi?",
    cevap:
      "Evet. Diğer pay sahiplerinin teklife katılarak hisselerini CoreX’e satması halinde hakim ortağın Polisan Holding’deki pay oranı artabilir.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "POLHO Zorunlu Pay Alım Teklifi İçin SPK Başvurusu Yapıldı",
  description:
    "POLHO’nun hakim ortağı CoreX, 8 Temmuz 2026’da tamamlanan pay devri sonrası zorunlu pay alım teklifi bilgi formunun onayı için SPK’ya başvurdu.",
  image: haberGorsel,
  datePublished: "2026-07-16T18:45:55+03:00",
  dateModified: "2026-07-16T18:45:55+03:00",
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

function Section({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:p-6">
      <h2 className="mb-4 text-xl font-bold tracking-tight text-slate-900">
        {title}
      </h2>
      {children}
    </section>
  );
}

export default function PolhoZorunluPayAlimTeklifiPage() {
  return (
    <main className="min-h-screen bg-[#f8fafc] px-4 py-6 md:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="mx-auto max-w-4xl">
        <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_2px_16px_rgba(15,23,42,0.07)]">
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100">
            <Image
              src="/polho-zorunlu-pay-alim-teklifi-icin-spk-basvurusu.webp"
              alt="POLHO zorunlu pay alım teklifi SPK başvurusu"
              fill
              unoptimized
              className="object-cover"
              priority
            />
          </div>

          <div className="p-6 md:p-10">
            <h1 className="text-2xl font-bold leading-tight tracking-tight text-slate-900 md:text-3xl lg:text-4xl">
              POLHO Zorunlu Pay Alım Teklifi İçin SPK Başvurusu Yapıldı
            </h1>

            <div className="mb-5 mt-3 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center rounded-md bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700 ring-1 ring-inset ring-blue-600/20">
                Pay Alım Teklifi
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
                Polisan Holding A.Ş. (<strong>POLHO</strong>), hakim ortağı CoreX
                Ports and Terminals Dilovası Liman İşletmeleri A.Ş.’nin zorunlu
                pay alım teklifi süreci için Sermaye Piyasası Kurulu’na başvurduğunu
                açıkladı.
              </p>

              <p>
                Başvuru, 8 Temmuz 2026 tarihinde tamamlanan pay devir işlemi
                sonrasında CoreX’in diğer POLHO pay sahiplerine yönelik doğan
                zorunlu pay alım teklifi yükümlülüğü kapsamında yapıldı. Teklif
                fiyatı ve takvim, SPK onaylı bilgi formuyla netleşecek.
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                {ozetKartlari.map((item) => (
                  <div
                    key={item.baslik}
                    className="rounded-2xl border border-blue-200 bg-blue-50 p-4"
                  >
                    <div className="text-sm font-semibold text-blue-800">
                      {item.baslik}
                    </div>
                    <div className="mt-1 text-xl font-bold text-blue-950">
                      {item.deger}
                    </div>
                    <div className="mt-1 text-sm text-blue-800">
                      {item.aciklama}
                    </div>
                  </div>
                ))}
              </div>

              <Section title="Ne oldu?">
                <p className="text-sm leading-7 text-slate-600 md:text-base">
                  CoreX, Polisan Holding paylarının zorunlu pay alım teklifi
                  yoluyla devralınmasına ilişkin bilgi formunun onaylanması için
                  16 Temmuz 2026 tarihinde SPK’ya gerekli başvuruyu yaptı.
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">
                  Şirket, SPK tarafından onaylanacak bilgi formunun mevzuatta
                  öngörülen süre içerisinde kamuya tam ve zamanında açıklanacağını
                  bildirdi.
                </p>
              </Section>

              <Section title="KAP açıklamasındaki ana detaylar">
                <div className="overflow-x-auto">
                  <table className="min-w-full overflow-hidden rounded-xl border border-slate-200 text-sm">
                    <tbody>
                      {genelDetaylar.map((item, index) => (
                        <tr
                          key={item.etiket}
                          className={index % 2 === 0 ? "bg-white" : "bg-slate-50"}
                        >
                          <th className="px-4 py-3 text-left font-semibold text-slate-800">
                            {item.etiket}
                          </th>
                          <td className="px-4 py-3 font-bold text-slate-700">
                            {item.deger}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Section>

              <Section title="Süreç nasıl ilerleyecek?">
                <div className="grid gap-4">
                  {surecAdimlari.map((item) => (
                    <div
                      key={item.baslik}
                      className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
                    >
                      <h3 className="text-base font-bold text-slate-900">
                        {item.baslik}
                      </h3>
                      <p className="mt-2 text-sm leading-7 text-slate-600 md:text-base">
                        {item.aciklama}
                      </p>
                    </div>
                  ))}
                </div>
              </Section>

              <Section title="Bu haber neden önemli?">
                <div className="grid gap-4">
                  {nedenOnemli.map((item) => (
                    <div
                      key={item.baslik}
                      className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
                    >
                      <h3 className="text-base font-bold text-slate-900">
                        {item.baslik}
                      </h3>
                      <p className="mt-2 text-sm leading-7 text-slate-600 md:text-base">
                        {item.aciklama}
                      </p>
                    </div>
                  ))}
                </div>
              </Section>

              <Section title="Finansal etki nasıl okunmalı?">
                <p className="text-sm leading-7 text-slate-600 md:text-base">
                  Zorunlu pay alım teklifi şirketin operasyonlarına doğrudan gelir
                  veya gider yazan bir işlem değil. Sürecin temel etkisi ortaklık
                  yapısı, hakim ortağın pay oranı, halka açıklık ve hisse
                  likiditesi üzerinden oluşacak.
                </p>

                <div className="mt-4 grid gap-3">
                  {finansalOkuma.map((item) => (
                    <div
                      key={item}
                      className="rounded-xl border border-blue-200 bg-blue-50 p-4 text-sm font-bold leading-6 text-blue-950"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </Section>

              <Section title="Hisse açısından nasıl okunmalı?">
                <div className="grid gap-4">
                  {hisseOkumasi.map((item) => (
                    <div
                      key={item.baslik}
                      className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
                    >
                      <h3 className="text-base font-bold text-slate-900">
                        {item.baslik}
                      </h3>
                      <p className="mt-2 text-sm leading-7 text-slate-600 md:text-base">
                        {item.aciklama}
                      </p>
                    </div>
                  ))}
                </div>
              </Section>

              <Section title="Dikkat edilmesi gereken riskler">
                <div className="grid gap-3">
                  {riskler.map((item) => (
                    <div
                      key={item}
                      className="rounded-xl border border-orange-200 bg-orange-50 p-4 text-sm font-semibold leading-6 text-orange-950"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </Section>

              <Section title="Takip edilecek başlıklar">
                <div className="grid gap-3">
                  {takipBasliklari.map((item) => (
                    <div
                      key={item}
                      className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm font-semibold leading-6 text-slate-700"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </Section>

              <Section title="POLHO zorunlu pay alım teklifi hakkında kısa soru-cevap">
                <div className="space-y-4">
                  {seoSorular.map((item) => (
                    <div
                      key={item.soru}
                      className="rounded-xl border border-slate-200 bg-slate-50 p-4"
                    >
                      <h3 className="text-base font-bold text-slate-900">
                        {item.soru}
                      </h3>
                      <p className="mt-2 text-sm leading-7 text-slate-600 md:text-base">
                        {item.cevap}
                      </p>
                    </div>
                  ))}
                </div>
              </Section>

              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm leading-7 text-slate-600">
                <div className="font-semibold text-slate-800">Kaynak</div>
                <a
                  href="https://www.kap.org.tr/Bildirim/1634258"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="mt-2 inline-block font-medium text-slate-700 underline underline-offset-2"
                >
                  POLHO — Orjinal Kap içeriği
                </a>
              </div>

              <HaberIlgiliBolumler
                slug={slug}
                baslik="POLHO Zorunlu Pay Alım Teklifi İçin SPK Başvurusu Yapıldı"
              />

              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm font-medium leading-7 text-amber-900 md:text-base">
                ⚠️ Bu haber bilgilendirme amacıyla hazırlanmıştır, yatırım
                tavsiyesi değildir. Teklif fiyatı, süre, başvuru yöntemi ve diğer
                koşullar SPK onaylı bilgi formuyla kesinleşecektir.
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