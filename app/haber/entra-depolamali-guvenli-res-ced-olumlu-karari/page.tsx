import Image from "next/image";
import Link from "@/components/NoPrefetchLink";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import HaberIlgiliBolumler from "@/components/HaberIlgiliBolumler";
import AuthorBox from "@/components/AuthorBox";
import HaberAltKisim from "@/components/HaberAltKisim";
import { formatHaberTarihi, getHaberDosyaTarihi } from "@/lib/haber-tarih";

const haberSaati = getHaberDosyaTarihi(import.meta.url);
const haberTarihi = formatHaberTarihi(haberSaati);

const slug = "entra-depolamali-guvenli-res-ced-olumlu-karari";
const haberUrl = `https://www.hocaileborsa.com/haber/${slug}`;
const haberGorsel =
  "https://www.hocaileborsa.com/entra-depolamali-guvenli-res-ced-olumlu-karari.webp";

export const metadata: Metadata = {
  title: "ENTRA Depolamalı Güvenli RES İçin ÇED Olumlu Kararı Aldı",
  description:
    "ENTRA, Tokat’ta planlanan 100 MWe kurulu güce ve 100 MWh depolama kapasitesine sahip Depolamalı Güvenli RES projesi için ÇED Olumlu Kararı aldı.",
  alternates: {
    canonical: haberUrl,
  },
  openGraph: {
    type: "article",
    title: "ENTRA Depolamalı Güvenli RES İçin ÇED Olumlu Kararı Aldı",
    description:
      "Tokat’ta kurulması planlanan projede 16 türbin, 100 MWe elektriksel güç ve 100 MWh enerji depolama kapasitesi bulunuyor.",
    url: haberUrl,
    images: [
      {
        url: haberGorsel,
        width: 1200,
        height: 675,
        alt: "ENTRA Depolamalı Güvenli RES ÇED Olumlu Kararı",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ENTRA Depolamalı Güvenli RES İçin ÇED Olumlu Kararı Aldı",
    description:
      "100 MWe güce ve 100 MWh depolama kapasitesine sahip proje çevresel izin sürecinde önemli bir aşamayı geçti.",
    images: [haberGorsel],
  },
};

const ozetKartlari = [
  {
    baslik: "Elektriksel Güç",
    deger: "100 MWe",
    aciklama: "Projenin planlanan gücü",
  },
  {
    baslik: "Mekanik Güç",
    deger: "103,2 MWm",
    aciklama: "16 rüzgar türbini",
  },
  {
    baslik: "Depolama",
    deger: "100 MWh",
    aciklama: "Batarya kapasitesi",
  },
  {
    baslik: "Proje Konumu",
    deger: "Tokat",
    aciklama: "Depolamalı Güvenli RES",
  },
];

const genelDetaylar = [
  {
    etiket: "Şirket",
    deger: "IC Enterra Yenilenebilir Enerji A.Ş.",
  },
  {
    etiket: "Hisse Kodu",
    deger: "ENTRA",
  },
  {
    etiket: "Bildirim Tarihi",
    deger: "16.07.2026",
  },
  {
    etiket: "Bildirim Saati",
    deger: "20:17:25",
  },
  {
    etiket: "Proje",
    deger: "Depolamalı Güvenli Rüzgar Enerji Santrali",
  },
  {
    etiket: "Lokasyon",
    deger: "Tokat ili",
  },
  {
    etiket: "Türbin Sayısı",
    deger: "16 adet",
  },
  {
    etiket: "Mekanik Kurulu Güç",
    deger: "103,2 MWm",
  },
  {
    etiket: "Elektriksel Kurulu Güç",
    deger: "100 MWe",
  },
  {
    etiket: "Depolama Gücü",
    deger: "100 MWe",
  },
  {
    etiket: "Depolama Kapasitesi",
    deger: "100 MWh",
  },
  {
    etiket: "Alınan Karar",
    deger: "ÇED Olumlu",
  },
];

const projePortfoyu = [
  {
    baslik: "Toplam depolamalı üretim portföyü",
    aciklama:
      "ENTRA, 430 MW rüzgar ve 55 MW güneş olmak üzere toplam 485 MW güce sahip depolamalı üretim tesisi projeleri için ön lisans süreçlerini tamamladığını daha önce açıklamıştı.",
  },
  {
    baslik: "Ömer RES",
    aciklama:
      "Depolamalı Ömer RES projesinin ÇED Olumlu Kararı 1 Eylül 2025 tarihinde açıklandı.",
  },
  {
    baslik: "Çelebi ve Kanara RES",
    aciklama:
      "Depolamalı Çelebi ve Depolamalı Kanara RES projelerinin ÇED Olumlu kararları 11 Aralık 2025 tarihinde duyuruldu.",
  },
  {
    baslik: "Yörgüç ve Akçahalil RES",
    aciklama:
      "Yörgüç RES için 12 Ocak 2026, Akçahalil RES için ise 29 Nisan 2026 tarihinde ÇED Olumlu kararları açıklandı.",
  },
  {
    baslik: "Güvenli RES",
    aciklama:
      "Son açıklamayla Tokat’ta planlanan Depolamalı Güvenli RES de ÇED sürecini olumlu tamamlayan projeler arasına katıldı.",
  },
];

const surecAdimlari = [
  {
    baslik: "Ön lisans süreci tamamlandı",
    aciklama:
      "Şirket, depolamalı üretim tesisi portföyüne ilişkin ön lisans alım süreçlerini daha önce tamamladı.",
  },
  {
    baslik: "Çevresel değerlendirme süreci yürütüldü",
    aciklama:
      "Güvenli RES projesi için çevresel etkiler, ilgili mevzuat kapsamında incelendi.",
  },
  {
    baslik: "ÇED Olumlu Kararı alındı",
    aciklama:
      "Projenin ÇED Olumlu yazısı onaylandı ve resmi çevresel değerlendirme süreci olumlu sonuçlandı.",
  },
  {
    baslik: "Diğer izinler devam edecek",
    aciklama:
      "ÇED kararı yatırımın önündeki önemli aşamalardan biri olsa da imar, bağlantı, arazi, ruhsat, finansman ve inşaat süreçlerinin ayrıca tamamlanması gerekiyor.",
  },
];

const nedenOnemli = [
  {
    baslik: "100 MWe ölçeğinde yeni proje",
    aciklama:
      "Güvenli RES, ENTRA’nın depolamalı enerji portföyünde 100 MWe güce sahip büyük ölçekli projelerden biri olarak öne çıkıyor.",
  },
  {
    baslik: "Enerji depolama kapasitesi bulunuyor",
    aciklama:
      "Projede rüzgar üretiminin yanında 100 MWh depolama kapasitesi planlanıyor. Depolama, üretimin şebekeye daha dengeli verilmesi ve elektrik fiyatlarındaki farklılıklardan yararlanılması açısından stratejik önem taşıyor.",
  },
  {
    baslik: "İzin risklerinden biri azaldı",
    aciklama:
      "ÇED Olumlu Kararı, projenin çevresel izin sürecindeki önemli belirsizliklerden birini ortadan kaldırdı.",
  },
  {
    baslik: "Yatırım henüz faaliyete geçmedi",
    aciklama:
      "ÇED kararının alınması üretimin başladığı anlamına gelmiyor. Projenin yatırım kararı, finansmanı, inşaatı ve devreye alma takvimi için sonraki aşamaların tamamlanması gerekiyor.",
  },
];

const finansalOkuma = [
  "Açıklama doğrudan ciro veya kâr yaratan bir üretim başlangıcı değil.",
  "ÇED Olumlu Kararı yatırımın gerçekleşme ihtimalini güçlendiren bir izin aşaması.",
  "Projenin yatırım tutarı ve finansman modeli henüz açıklanmadı.",
  "İnşaat ve devreye alma takvimi paylaşılmadığı için gelir katkısının başlayacağı dönem belli değil.",
  "100 MWe üretim ve 100 MWh depolama kapasitesi, proje tamamlandığında önemli bir varlık büyüklüğü oluşturabilir.",
  "Finansal etki; yatırım maliyeti, kapasite faktörü, elektrik satış fiyatı ve finansman giderleriyle netleşecek.",
];

const hisseOkumasi = [
  {
    baslik: "Haber pozitif",
    aciklama:
      "Büyük ölçekli depolamalı RES projesinin ÇED sürecini olumlu tamamlaması, projenin ilerlemesi ve izin riskinin azalması açısından hisse için pozitif okunabilir.",
  },
  {
    baslik: "Kısa vadede doğrudan gelir etkisi yok",
    aciklama:
      "Proje henüz yatırım ve üretim aşamasında olmadığı için açıklamanın mevcut dönem gelirlerine doğrudan katkısı bulunmuyor.",
  },
  {
    baslik: "Takvim ve yatırım tutarı belirleyici olacak",
    aciklama:
      "Haber etkisinin kalıcı hale gelmesi için yatırım başlangıcı, finansman, ekipman tedariki ve devreye alma takviminin açıklanması gerekecek.",
  },
];

const riskler = [
  "ÇED Olumlu Kararı tek başına yatırımın başlayacağı anlamına gelmez.",
  "Diğer izin ve bağlantı süreçlerinde gecikme yaşanabilir.",
  "Yüksek yatırım maliyeti finansman ihtiyacını artırabilir.",
  "Türbin ve batarya ekipmanı maliyetleri proje ekonomisini etkileyebilir.",
  "Elektrik fiyatları ve kapasite faktörü beklenen getiriyi değiştirebilir.",
  "Devreye alma takvimi henüz açıklanmadı.",
];

const takipBasliklari = [
  "Projenin yatırım başlangıç tarihi",
  "Toplam yatırım tutarı",
  "Finansman modeli ve kredi koşulları",
  "Türbin ve batarya tedarik sözleşmeleri",
  "Şebeke bağlantı ve imar izinleri",
  "İnşaat ve devreye alma takvimi",
  "ÇED süreci devam eden diğer iki proje",
];

const seoSorular = [
  {
    soru: "ENTRA ne açıkladı?",
    cevap:
      "ENTRA, Tokat’ta planlanan Depolamalı Güvenli RES projesi için ÇED Olumlu Kararı alındığını açıkladı.",
  },
  {
    soru: "Güvenli RES projesinin gücü kaç MW?",
    cevap:
      "Projede 103,2 MWm mekanik ve 100 MWe elektriksel kurulu güç planlanıyor.",
  },
  {
    soru: "Güvenli RES projesinin depolama kapasitesi ne kadar?",
    cevap:
      "Projede 100 MWe depolama gücü ve 100 MWh enerji depolama kapasitesi bulunuyor.",
  },
  {
    soru: "Güvenli RES kaç türbinden oluşacak?",
    cevap:
      "KAP açıklamasına göre proje 16 rüzgar türbininden oluşacak.",
  },
  {
    soru: "ÇED Olumlu Kararı üretimin başladığı anlamına gelir mi?",
    cevap:
      "Hayır. ÇED Olumlu Kararı çevresel izin sürecinin tamamlandığını gösterir. Yatırım, inşaat ve devreye alma aşamaları ayrıca tamamlanmalıdır.",
  },
  {
    soru: "ENTRA haberi hisse için nasıl okunmalı?",
    cevap:
      "Projenin çevresel izin sürecinde önemli bir aşamayı geçmesi ve yatırım riskinin azalması nedeniyle pozitif okunabilir. Ancak kısa vadede doğrudan ciro veya kâr etkisi bulunmuyor.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "ENTRA Depolamalı Güvenli RES İçin ÇED Olumlu Kararı Aldı",
  description:
    "ENTRA, Tokat’ta planlanan 100 MWe kurulu güce ve 100 MWh depolama kapasitesine sahip Depolamalı Güvenli RES projesi için ÇED Olumlu Kararı aldı.",
  image: haberGorsel,
  datePublished: "2026-07-16T20:17:25+03:00",
  dateModified: "2026-07-16T20:17:25+03:00",
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

export default function EntraGuvenliResCedOlumluPage() {
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
              src="/entra-depolamali-guvenli-res-ced-olumlu-karari.webp"
              alt="ENTRA Depolamalı Güvenli RES ÇED Olumlu Kararı"
              fill
              unoptimized
              className="object-cover"
              priority
            />
          </div>

          <div className="p-6 md:p-10">
            <h1 className="text-2xl font-bold leading-tight tracking-tight text-slate-900 md:text-3xl lg:text-4xl">
              ENTRA Depolamalı Güvenli RES İçin ÇED Olumlu Kararı Aldı
            </h1>

            <div className="mb-5 mt-3 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center rounded-md bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700 ring-1 ring-inset ring-emerald-600/20">
                Yenilenebilir Enerji
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
                IC Enterra Yenilenebilir Enerji A.Ş. (
                <strong>ENTRA</strong>), Tokat ili sınırlarında kurulması
                planlanan Depolamalı Güvenli Rüzgar Enerji Santrali projesi için{" "}
                <strong>ÇED Olumlu Kararı</strong> alındığını açıkladı.
              </p>

              <p>
                Projede 16 rüzgar türbini, <strong>103,2 MWm</strong> mekanik
                güç, <strong>100 MWe</strong> elektriksel güç ve{" "}
                <strong>100 MWh</strong> enerji depolama kapasitesi planlanıyor.
                Karar, projenin çevresel izin sürecinde önemli bir aşamanın
                tamamlandığını gösteriyor.
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                {ozetKartlari.map((item) => (
                  <div
                    key={item.baslik}
                    className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4"
                  >
                    <div className="text-sm font-semibold text-emerald-800">
                      {item.baslik}
                    </div>
                    <div className="mt-1 text-2xl font-bold text-emerald-950">
                      {item.deger}
                    </div>
                    <div className="mt-1 text-sm text-emerald-800">
                      {item.aciklama}
                    </div>
                  </div>
                ))}
              </div>

              <Section title="Ne oldu?">
                <p className="text-sm leading-7 text-slate-600 md:text-base">
                  ENTRA’nın depolamalı enerji yatırımları arasında yer alan
                  Güvenli RES projesi için çevresel etki değerlendirme süreci
                  olumlu tamamlandı. Projenin ÇED Olumlu yazısı onaylanarak resmi
                  karar alındı.
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">
                  Böylece proje, yatırım öncesindeki önemli izin aşamalarından
                  birini geçmiş oldu. Şirket, portföyündeki diğer iki depolamalı
                  proje için ÇED süreçlerinin devam ettiğini de bildirdi.
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

              <Section title="ENTRA’nın depolamalı proje portföyü">
                <div className="grid gap-4">
                  {projePortfoyu.map((item) => (
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

              <Section title="Proje süreci nasıl ilerleyecek?">
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
                  ÇED Olumlu Kararı, projeye ilişkin önemli bir izin riskini
                  azaltıyor ancak yatırımın tamamlandığı veya üretimin başladığı
                  anlamına gelmiyor. Bu nedenle mevcut dönemde doğrudan gelir ve
                  kâr etkisi beklenmemeli.
                </p>

                <div className="mt-4 grid gap-3">
                  {finansalOkuma.map((item) => (
                    <div
                      key={item}
                      className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm font-bold leading-6 text-emerald-950"
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

              <Section title="ENTRA Güvenli RES hakkında kısa soru-cevap">
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
                  href="https://www.kap.org.tr/Bildirim/1634283"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="mt-2 inline-block font-medium text-slate-700 underline underline-offset-2"
                >
                  ENTRA — Orjinal Kap içeriği
                </a>
              </div>

              <HaberIlgiliBolumler
                slug={slug}
                baslik="ENTRA Depolamalı Güvenli RES İçin ÇED Olumlu Kararı Aldı"
              />

              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm font-medium leading-7 text-amber-900 md:text-base">
                ⚠️ Bu haber bilgilendirme amacıyla hazırlanmıştır, yatırım
                tavsiyesi değildir. Projenin finansal etkisi; yatırım tutarı,
                finansman, izinler, inşaat süreci, elektrik fiyatları ve devreye
                alma takvimiyle birlikte değerlendirilmelidir.
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