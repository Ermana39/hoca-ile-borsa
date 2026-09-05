import { serializeJsonLd } from "@/lib/json-ld";
import { seoAciklamasi } from "@/lib/seo-metadata";
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

const slug = "tnztp-70-bedelsiz-sermaye-artirimi-spk-basvurusu";
const haberUrl = `https://www.hocaileborsa.com/haber/${slug}`;
const haberGorsel =
  "https://www.hocaileborsa.com/tnztp-70-bedelsiz-sermaye-artirimi-spk-basvurusu.webp";

export const metadata: Metadata = {
  title: "TNZTP %70 Bedelsiz Sermaye Artırımı İçin SPK’ya Başvurdu",
  description:
    seoAciklamasi("Tapdi Oksijen, 400 milyon TL olan çıkarılmış sermayesini 680 milyon TL’ye yükseltecek %70 bedelsiz sermaye artırımı için SPK’ya başvurdu.", "Haberde gelişmenin ayrıntıları, açıklanan veriler ve yatırımcıların izleyebileceği temel noktalar yer alıyor."),
  alternates: {
    canonical: haberUrl,
  },
  openGraph: {
    type: "article",
    title: "TNZTP %70 Bedelsiz Sermaye Artırımı İçin SPK’ya Başvurdu",
    description:
      "TNZTP, 280 milyon TL tutarındaki %70 bedelsiz sermaye artırımı için ihraç belgesi onayı ve esas sözleşme tadili amacıyla SPK başvurusu yaptı.",
    url: haberUrl,
    images: [
      {
        url: haberGorsel,
        width: 1200,
        height: 675,
        alt: "TNZTP yüzde 70 bedelsiz sermaye artırımı SPK başvurusu",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TNZTP %70 Bedelsiz Sermaye Artırımı İçin SPK’ya Başvurdu",
    description:
      "TNZTP, sermayesini 400 milyon TL’den 680 milyon TL’ye çıkaracak %70 bedelsiz için SPK’ya başvurdu.",
    images: [haberGorsel],
  },
};

const ozetKartlari = [
  {
    baslik: "Bedelsiz Oranı",
    deger: "%70",
    aciklama: "İç kaynaklardan karşılanacak",
  },
  {
    baslik: "Mevcut Sermaye",
    deger: "400 Mn TL",
    aciklama: "Çıkarılmış sermaye",
  },
  {
    baslik: "Yeni Sermaye",
    deger: "680 Mn TL",
    aciklama: "SPK onayı sonrası ulaşılacak tutar",
  },
  {
    baslik: "Artış Tutarı",
    deger: "280 Mn TL",
    aciklama: "2025 yılı dönem kârından",
  },
];

const genelDetaylar = [
  { etiket: "Şirket", deger: "Tapdi Oksijen Özel Sağlık ve Eğitim Hizmetleri Sanayi Ticaret A.Ş." },
  { etiket: "Hisse Kodu", deger: "TNZTP" },
  { etiket: "Bildirim Tarihi", deger: "14.07.2026" },
  { etiket: "Bildirim Saati", deger: "18:19:45" },
  { etiket: "Açıklama Türü", deger: "Sermaye Artırımı - Azaltımı İşlemlerine İlişkin Bildirim" },
  { etiket: "Özet Bilgi", deger: "Bedelsiz Sermaye Artırımına İlişkin Tadil Kararı ve SPK Başvurusu" },
  { etiket: "Yönetim Kurulu Karar Tarihi", deger: "30.06.2026" },
  { etiket: "SPK Başvuru Tarihi", deger: "14.07.2026" },
  { etiket: "Kayıtlı Sermaye Tavanı", deger: "2.000.000.000 TL" },
  { etiket: "Mevcut Sermaye", deger: "400.000.000 TL" },
  { etiket: "Ulaşılacak Sermaye", deger: "680.000.000 TL" },
  { etiket: "Toplam Bedelsiz Tutarı", deger: "280.000.000 TL" },
  { etiket: "Toplam Bedelsiz Oranı", deger: "%70" },
  { etiket: "Kaynak", deger: "2025 yılı dönem kârı" },
  { etiket: "Tadil Edilecek Madde", deger: "Esas sözleşme 6. madde" },
  { etiket: "Payların Niteliği", deger: "Kaydi pay" },
];

const payGrubuDetaylari = [
  {
    grup: "A Grubu",
    mevcut: "62.499.999,99 TL",
    bedelsiz: "43.749.999,993 TL",
    oran: "%70",
    nevi: "Nâma",
  },
  {
    grup: "B Grubu",
    mevcut: "337.500.000,01 TL",
    bedelsiz: "236.250.000,007 TL",
    oran: "%70",
    nevi: "Hamiline",
  },
  {
    grup: "Toplam",
    mevcut: "400.000.000 TL",
    bedelsiz: "280.000.000 TL",
    oran: "%70",
    nevi: "Kaydi pay",
  },
];

const nedenOnemli = [
  {
    baslik: "Sermaye yapısında %70 oranında artış planlanıyor",
    aciklama:
      "Bedelsiz sermaye artırımı tamamlanırsa TNZTP’nin çıkarılmış sermayesi 400 milyon TL’den 680 milyon TL’ye yükselecek. Artış nakit girişi yaratmıyor ancak şirket sermaye yapısında önemli bir nominal büyüme oluşturuyor.",
  },
  {
    baslik: "Kaynak 2025 yılı dönem kârı olarak açıklandı",
    aciklama:
      "Şirket, 280 milyon TL tutarındaki artışın 2025 yılı dönem kârından karşılanacağını bildirdi. Bu nedenle haber, geçmiş dönem kârının sermayeye eklenmesi üzerinden okunmalı.",
  },
  {
    baslik: "Süreç SPK onayına bağlı ilerleyecek",
    aciklama:
      "KAP açıklamasında hem ihraç belgesinin onaylanması hem de esas sözleşmenin 6. maddesi için SPK’ya başvuru yapıldığı belirtildi. Onay sonrası tescil, ilan ve MKK nezdindeki işlemler takip edilecek.",
  },
];

const sirketHakkinda = [
  "Tapdi Oksijen, sağlık ve eğitim hizmetleri alanında faaliyet gösteren bir şirket olarak Borsa İstanbul’da TNZTP koduyla işlem görüyor.",
  "Şirketin ana faaliyet alanı sağlık hizmetleri ekseninde şekilleniyor. Bu nedenle TNZTP haber akışında finansal sonuçlar, kapasite kullanımı, hizmet gelirleri, yatırım planları ve sermaye yapısına ilişkin kararlar öne çıkıyor.",
  "Bedelsiz sermaye artırımı kararı şirketin operasyonel gelir yaratma kapasitesinden ayrı değerlendirilmelidir. Bu haber doğrudan yeni yatırım, yeni hastane, yeni ciro veya nakit girişi anlamına gelmiyor; sermaye yapısına ilişkin kurumsal bir adım niteliği taşıyor.",
];

const degerlendirmeMaddeleri = [
  "TNZTP’nin %70 bedelsiz başvurusu, kısa vadede hisse özelinde haber akışını güçlendiren bir gelişme olarak izlenebilir.",
  "Bedelsiz sermaye artırımı şirket kasasına yeni nakit girişi sağlamaz; mevcut iç kaynakların sermayeye eklenmesi anlamına gelir.",
  "Pay sayısı artacağı için fiyat teorik olarak bölünme oranına göre düzeltilir; bu nedenle tek başına bedelsiz oranına bakarak değer artışı yorumu yapmak doğru olmaz.",
  "Sürecin ilerlemesi için SPK onayı, ihraç belgesi, esas sözleşme tadili, tescil ve hak kullanım tarihi adımları izlenecek.",
  "Şirketin temel görünümü açısından asıl belirleyici olan kalemler faaliyet kârlılığı, finansman giderleri, nakit akışı ve sağlık hizmetleri gelirlerindeki seyir olmaya devam eder.",
];

const takipBasliklari = [
  "SPK’nın ihraç belgesi başvurusuna vereceği karar",
  "Esas sözleşme 6. madde tadiline ilişkin uygun görüş süreci",
  "Bedelsiz hak kullanım tarihinin açıklanıp açıklanmayacağı",
  "Bölünme sonrası teorik fiyat ve piyasa tepkisi",
  "Sonraki finansal tablolarda kârlılık ve nakit akışı görünümü",
  "Sağlık hizmetleri gelirleri ve operasyonel performans tarafındaki gelişmeler",
];

const seoSorular = [
  {
    soru: "TNZTP ne açıkladı?",
    cevap:
      "TNZTP, 400 milyon TL olan çıkarılmış sermayesini 680 milyon TL’ye yükseltecek %70 bedelsiz sermaye artırımı için SPK’ya başvurduğunu açıkladı.",
  },
  {
    soru: "TNZTP bedelsiz sermaye artırımı oranı kaç?",
    cevap:
      "TNZTP bedelsiz sermaye artırımı oranı %70 olarak açıklandı. Toplam bedelsiz pay alma tutarı 280 milyon TL olacak.",
  },
  {
    soru: "TNZTP sermayesi kaç TL’ye çıkacak?",
    cevap:
      "SPK onayı ve gerekli işlemlerin tamamlanması halinde TNZTP’nin çıkarılmış sermayesi 400 milyon TL’den 680 milyon TL’ye çıkacak.",
  },
  {
    soru: "TNZTP bedelsiz sermaye artırımı hangi kaynaktan karşılanacak?",
    cevap:
      "Şirket, sermaye artışının 2025 yılı dönem kârından karşılanacağını bildirdi.",
  },
  {
    soru: "TNZTP bedelsiz sürecinde sırada ne var?",
    cevap:
      "Sıradaki başlıklar SPK onayı, ihraç belgesi, esas sözleşme tadili, tescil işlemleri ve bedelsiz hak kullanım tarihinin açıklanması olacak.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "TNZTP %70 Bedelsiz Sermaye Artırımı İçin SPK’ya Başvurdu",
  description:
    "Tapdi Oksijen, 400 milyon TL olan çıkarılmış sermayesini 680 milyon TL’ye yükseltecek %70 bedelsiz sermaye artırımı için SPK’ya başvurdu.",
  image: haberGorsel,
  datePublished: "2026-07-14T18:19:45+03:00",
  dateModified: "2026-07-14T18:19:45+03:00",
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

export default function TnztpBedelsizSermayeArtirimiPage() {
  return (
    <main className="min-h-screen bg-[#f8fafc] px-4 py-6 md:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }}
      />

      <div className="mx-auto max-w-4xl">
        <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_2px_16px_rgba(15,23,42,0.07)]">
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100">
            <Image
              src="/tnztp-70-bedelsiz-sermaye-artirimi-spk-basvurusu.webp"
              alt="TNZTP yüzde 70 bedelsiz sermaye artırımı SPK başvurusu"
              fill
              sizes="(min-width: 1024px) 896px, 100vw"
              className="object-cover"
              priority
            />
          </div>

          <div className="p-6 md:p-10">
            <h1 className="text-2xl font-bold leading-tight tracking-tight text-slate-900 md:text-3xl lg:text-4xl">
              TNZTP %70 Bedelsiz Sermaye Artırımı İçin SPK’ya Başvurdu
            </h1>

            <div className="mb-5 mt-3 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center rounded-md bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700 ring-1 ring-inset ring-blue-600/20">
                Sermaye Artırımı
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
                Tapdi Oksijen Özel Sağlık ve Eğitim Hizmetleri Sanayi Ticaret
                A.Ş. (<strong>TNZTP</strong>), %70 oranındaki bedelsiz sermaye
                artırımı için Sermaye Piyasası Kurulu’na başvuru yapıldığını
                açıkladı.
              </p>

              <p>
                KAP açıklamasına göre şirketin <strong>400 milyon TL</strong>
                olan çıkarılmış sermayesinin, <strong>280 milyon TL</strong>
                artırılarak <strong>680 milyon TL</strong>ye yükseltilmesi
                planlanıyor. Artışın tamamı <strong>2025 yılı dönem kârından</strong>
                karşılanacak.
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
                    <div className="mt-1 text-2xl font-bold text-blue-950">
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
                  TNZTP, bedelsiz sermaye artırımı kapsamında esas sözleşmenin
                  sermayeyi düzenleyen 6. maddesinin tadili ve ihraç belgesinin
                  onaylanması için SPK’ya başvuru yaptı.
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">
                  Şirket, daha önce 30 Haziran 2026 tarihli yönetim kurulu
                  kararıyla başlatılan sürece ilişkin açıklamanın 14 Temmuz
                  2026’da güncellendiğini belirtti. Güncellemenin nedeni,
                  yönetim kurulu karar tarihinin açık şekilde belirtilmesi ve
                  esas sözleşme tadil tasarısının açıklama ekine eklenmesi olarak
                  açıklandı.
                </p>
              </Section>

              <Section title="Sermaye artırımı detayları">
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

              <Section title="Pay gruplarında bedelsiz dağılımı">
                <div className="grid gap-4">
                  {payGrubuDetaylari.map((item) => (
                    <div
                      key={item.grup}
                      className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <h3 className="text-base font-bold text-slate-900">
                          {item.grup}
                        </h3>
                        <div className="text-sm font-bold text-blue-700">
                          {item.oran}
                        </div>
                      </div>
                      <div className="mt-3 grid gap-2 text-sm leading-6 text-slate-600 md:grid-cols-3">
                        <div>
                          <span className="font-semibold text-slate-800">
                            Mevcut sermaye:
                          </span>{" "}
                          {item.mevcut}
                        </div>
                        <div>
                          <span className="font-semibold text-slate-800">
                            Bedelsiz tutarı:
                          </span>{" "}
                          {item.bedelsiz}
                        </div>
                        <div>
                          <span className="font-semibold text-slate-800">
                            Nevi:
                          </span>{" "}
                          {item.nevi}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Section>

              <Section title="Neden önemli?">
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

              <Section title="Şirket hakkında">
                <div className="space-y-3 text-sm leading-7 text-slate-600 md:text-base">
                  {sirketHakkinda.map((item) => (
                    <p key={item}>{item}</p>
                  ))}
                </div>
              </Section>

              <Section title="Hisse açısından okuma">
                <p className="text-sm leading-7 text-slate-600 md:text-base">
                  Bu açıklama TNZTP için sermaye yapısına ilişkin pozitif haber
                  akışı niteliğinde değerlendirilebilir. Ancak bedelsiz sermaye
                  artırımı, şirketin faaliyetlerinden yeni bir nakit girişi
                  sağladığı anlamına gelmez; mevcut iç kaynakların sermayeye
                  eklenmesiyle pay adedi ve nominal sermaye değişir.
                </p>

                <div className="mt-4 grid gap-3">
                  {degerlendirmeMaddeleri.map((item) => (
                    <div
                      key={item}
                      className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm font-bold leading-6 text-emerald-900"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </Section>

              <Section title="Sırada ne var?">
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

              <Section title="TNZTP bedelsiz sermaye artırımı hakkında kısa soru-cevap">
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
                  href="https://www.kap.org.tr/Bildirim/1633753"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="mt-2 inline-block font-medium text-slate-700 underline underline-offset-2"
                >
                  TNZTP — Orjinal Kap içeriği
                </a>
              </div>

              <HaberIlgiliBolumler
                slug={slug}
                baslik="TNZTP %70 Bedelsiz Sermaye Artırımı İçin SPK’ya Başvurdu"
              />

              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm font-medium leading-7 text-amber-900 md:text-base">
                ⚠️ Bu haber bilgilendirme amacıyla hazırlanmıştır, yatırım
                tavsiyesi değildir. Bedelsiz sermaye artırımı haberleri tek
                başına alım-satım kararı için yeterli değildir; şirketin finansal
                durumu, faaliyet performansı ve piyasa koşulları birlikte
                değerlendirilmelidir.
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