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

const slug = "armgd-1510-bedelsiz-sermaye-artirimi-karari";
const haberUrl = `https://www.hocaileborsa.com/haber/${slug}`;
const haberGorsel =
  "https://www.hocaileborsa.com/armgd-1510-bedelsiz-sermaye-artirimi-karari.webp";

export const metadata: Metadata = {
  title: "ARMGD %1.510 Bedelsiz Sermaye Artırımı Kararı Aldı",
  description:
    seoAciklamasi("ARMGD, 263,98 milyon TL olan sermayesini iç kaynaklardan %1.510,14935 oranında artırarak 4,25 milyar TL’ye çıkarma kararı aldı.", "Haberde gelişmenin ayrıntıları, açıklanan veriler ve yatırımcıların izleyebileceği temel noktalar yer alıyor."),
  alternates: {
    canonical: haberUrl,
  },
  openGraph: {
    type: "article",
    title: "ARMGD %1.510 Bedelsiz Sermaye Artırımı Kararı Aldı",
    description:
      "Armada Gıda, 3,99 milyar TL tutarındaki bedelsiz sermaye artırımını enflasyon düzeltme farkı, emisyon primi ve geçmiş yıl kârlarından karşılayacak.",
    url: haberUrl,
    images: [
      {
        url: haberGorsel,
        width: 1200,
        height: 675,
        alt: "ARMGD yüzde 1510 bedelsiz sermaye artırımı kararı",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ARMGD %1.510 Bedelsiz Sermaye Artırımı Kararı Aldı",
    description:
      "ARMGD sermayesini 263,98 milyon TL’den 4,25 milyar TL’ye çıkarmayı planlıyor.",
    images: [haberGorsel],
  },
};

const ozetKartlari = [
  {
    baslik: "Bedelsiz Oranı",
    deger: "%1.510,14935",
    aciklama: "İç kaynaklardan",
  },
  {
    baslik: "Mevcut Sermaye",
    deger: "263,98 Mn TL",
    aciklama: "Çıkarılmış sermaye",
  },
  {
    baslik: "Artış Tutarı",
    deger: "3,99 Mr TL",
    aciklama: "Bedelsiz pay tutarı",
  },
  {
    baslik: "Yeni Sermaye",
    deger: "4,25 Mr TL",
    aciklama: "Artırım sonrası",
  },
];

const anaDetaylar = [
  ["Şirket", "Armada Gıda Ticaret Sanayi A.Ş."],
  ["Hisse Kodu", "ARMGD"],
  ["Bildirim Tarihi", "17.07.2026"],
  ["Bildirim Saati", "15:24:18"],
  ["Yönetim Kurulu Karar Tarihi", "17.07.2026"],
  ["Kayıtlı Sermaye Tavanı", "1.750.000.000 TL"],
  ["Mevcut Sermaye", "263.980.843 TL"],
  ["Bedelsiz Artış Tutarı", "3.986.505.000 TL"],
  ["Bedelsiz Artış Oranı", "%1.510,14935"],
  ["Ulaşılacak Sermaye", "4.250.485.843 TL"],
  ["Artırım Kaynağı", "Tamamı iç kaynaklardan"],
  ["Payların Niteliği", "Kaydi pay"],
];

const kaynaklar = [
  {
    baslik: "Özsermaye enflasyon düzeltme farkları",
    tutar: "634.748.051 TL",
  },
  {
    baslik: "Emisyon primi",
    tutar: "1.553.890.607 TL",
  },
  {
    baslik: "Geçmiş yıl kârları",
    tutar: "1.555.226.652 TL",
  },
  {
    baslik: "Geçmiş yıllar net kâr enflasyon farkları",
    tutar: "242.639.690 TL",
  },
];

const payGruplari = [
  {
    grup: "A Grubu",
    mevcut: "48.396.480 TL",
    artirim: "730.859.131 TL",
    oran: "%1.510,14935",
    nitelik: "Nama yazılı, işlem görmüyor",
  },
  {
    grup: "B Grubu",
    mevcut: "215.584.363 TL",
    artirim: "3.255.645.869 TL",
    oran: "%1.510,14935",
    nitelik: "Hamiline, Borsa İstanbul’da işlem görüyor",
  },
];

const surecAdimlari = [
  {
    baslik: "Yönetim kurulu kararı alındı",
    aciklama:
      "Armada Gıda yönetim kurulu, 17 Temmuz 2026 tarihinde %1.510,14935 oranında bedelsiz sermaye artırımına karar verdi.",
  },
  {
    baslik: "Kayıtlı sermaye tavanı bir defaya mahsus aşılacak",
    aciklama:
      "Yeni sermaye 4,25 milyar TL’ye ulaşacağı için 1,75 milyar TL’lik kayıtlı sermaye tavanı ilgili mevzuat kapsamında bir defaya mahsus aşılacak.",
  },
  {
    baslik: "SPK başvurusu yapılacak",
    aciklama:
      "İhraç belgesinin onaylanması ve esas sözleşmenin sermaye maddesinin değiştirilmesi için Sermaye Piyasası Kurulu’na başvuru yapılacak.",
  },
  {
    baslik: "Bedelsiz paylar hak sahiplerine dağıtılacak",
    aciklama:
      "Onay ve işlemlerin tamamlanmasının ardından yeni paylar mevcut ortaklara sermayedeki payları oranında bedelsiz dağıtılacak.",
  },
];

const nedenOnemli = [
  {
    baslik: "Yüksek oranlı bedelsiz kararı",
    aciklama:
      "Yaklaşık %1.510 oranındaki artış, mevcut her 1 lota karşılık yaklaşık 15,10 lot yeni pay verilmesi anlamına geliyor.",
  },
  {
    baslik: "Sermaye yapısı önemli ölçüde büyüyecek",
    aciklama:
      "Şirketin çıkarılmış sermayesi 263,98 milyon TL’den 4,25 milyar TL’ye yükselecek.",
  },
  {
    baslik: "Artış tamamen iç kaynaklardan karşılanacak",
    aciklama:
      "İşlem şirkete yeni nakit girişi sağlamayacak; özkaynak kalemleri sermayeye aktarılacak.",
  },
  {
    baslik: "Pay likiditesi artabilir",
    aciklama:
      "Pay adedinin yükselmesi teorik fiyatın düşmesini ve işlem hacminin daha geniş yatırımcı kitlesine yayılmasını destekleyebilir.",
  },
];

const finansalOkuma = [
  "Bedelsiz sermaye artırımı şirketin toplam özkaynak tutarını artırmaz.",
  "İşlem sonucunda pay sayısı artarken teorik hisse fiyatı aynı oranda düzeltilir.",
  "Şirkete yeni nakit girişi oluşmaz.",
  "Enflasyon düzeltme farkları, emisyon primi ve geçmiş yıl kârları sermayeye aktarılır.",
  "Mevcut ortakların şirketteki oransal payı değişmez.",
  "Piyasa değeri işlem nedeniyle tek başına yükselmez.",
];

const hisseOkumasi = [
  {
    baslik: "Kısa vadede yatırımcı ilgisi artabilir",
    aciklama:
      "Yüksek bedelsiz oranları genellikle hisseye yönelik kısa vadeli ilgiyi ve işlem hacmini artırabiliyor.",
  },
  {
    baslik: "Şirket değerinde otomatik artış yaratmaz",
    aciklama:
      "Bedelsiz sermaye artışı muhasebesel bir aktarım olduğu için şirketin ekonomik değerini tek başına değiştirmez.",
  },
  {
    baslik: "SPK süreci belirleyici",
    aciklama:
      "Kararın uygulanabilmesi için ihraç belgesinin SPK tarafından onaylanması ve diğer resmi işlemlerin tamamlanması gerekiyor.",
  },
];

const riskler = [
  "SPK onayı alınmadan bedelsiz pay dağıtımı başlayamaz.",
  "Yüksek bedelsiz oranı şirketin faaliyet kârlılığına doğrudan katkı sağlamaz.",
  "Teorik fiyat düzeltmesi nedeniyle yatırımcıların nominal fiyat algısı değişebilir.",
  "Kısa vadeli fiyat hareketleri şirketin temel performansından ayrışabilir.",
  "Kayıtlı sermaye tavanının bir defaya mahsus aşılması için mevzuat süreçleri tamamlanmalı.",
];

const takipBasliklari = [
  "SPK başvuru tarihi",
  "İhraç belgesinin onaylanması",
  "Bedelsiz pay alma hakkı kullanım tarihi",
  "Borsa İstanbul düzeltme fiyatı",
  "Yeni payların yatırımcı hesaplarına geçiş tarihi",
  "Esas sözleşme değişikliği ve tescil süreci",
];

const seoSorular = [
  {
    soru: "ARMGD bedelsiz sermaye artırımı oranı kaç?",
    cevap:
      "Armada Gıda yönetim kurulu %1.510,14935 oranında bedelsiz sermaye artırımı kararı aldı.",
  },
  {
    soru: "ARMGD sermayesi kaç TL’ye çıkacak?",
    cevap:
      "Şirketin 263.980.843 TL olan sermayesinin 4.250.485.843 TL’ye çıkarılması planlanıyor.",
  },
  {
    soru: "ARMGD bedelsiz artışı hangi kaynaklardan karşılanacak?",
    cevap:
      "Artış; özsermaye enflasyon düzeltme farkları, emisyon primi, geçmiş yıl kârları ve geçmiş yıllar net kâr enflasyon farklarından karşılanacak.",
  },
  {
    soru: "ARMGD bedelsiz pay dağıtımı ne zaman yapılacak?",
    cevap:
      "Dağıtım tarihi henüz açıklanmadı. Önce SPK onayı ve diğer resmi işlemlerin tamamlanması gerekiyor.",
  },
  {
    soru: "ARMGD bedelsiz artırımında şirkete nakit girer mi?",
    cevap:
      "Hayır. Bedelsiz sermaye artırımında mevcut özkaynak kalemleri sermayeye aktarılır ve şirkete yeni nakit girişi oluşmaz.",
  },
  {
    soru: "ARMGD haberi hisse için nasıl okunmalı?",
    cevap:
      "Yüksek bedelsiz oranı kısa vadede yatırımcı ilgisini artırabilir. Ancak işlem şirketin ekonomik değerini veya kârlılığını tek başına değiştirmez.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "ARMGD %1.510 Bedelsiz Sermaye Artırımı Kararı Aldı",
  description:
    "ARMGD, 263,98 milyon TL olan sermayesini iç kaynaklardan %1.510,14935 oranında artırarak 4,25 milyar TL’ye çıkarma kararı aldı.",
  image: haberGorsel,
  datePublished: "2026-07-17T15:24:18+03:00",
  dateModified: "2026-07-17T15:24:18+03:00",
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

export default function ArmgdBedelsizSermayeArtirimiPage() {
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
              src="/armgd-1510-bedelsiz-sermaye-artirimi-karari.webp"
              alt="ARMGD yüzde 1510 bedelsiz sermaye artırımı kararı"
              fill
              unoptimized
              className="object-cover"
              priority
            />
          </div>

          <div className="p-6 md:p-10">
            <h1 className="text-2xl font-bold leading-tight tracking-tight text-slate-900 md:text-3xl lg:text-4xl">
              ARMGD %1.510 Bedelsiz Sermaye Artırımı Kararı Aldı
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
                Armada Gıda Ticaret Sanayi A.Ş. (
                <strong>ARMGD</strong>), mevcut sermayesini tamamen iç
                kaynaklardan karşılanmak üzere{" "}
                <strong>%1.510,14935 oranında</strong> artırma kararı aldı.
              </p>

              <p>
                Şirketin 263.980.843 TL olan çıkarılmış sermayesi,
                3.986.505.000 TL artırılarak{" "}
                <strong>4.250.485.843 TL’ye</strong> çıkarılacak. Artırılan
                sermayeyi temsil eden paylar, mevcut ortaklara sermayedeki
                payları oranında bedelsiz dağıtılacak.
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
                  ARMGD yönetim kurulu, şirket sermayesinin %1.510,14935
                  oranında bedelsiz artırılmasına karar verdi. Artışın tamamı
                  şirketin özkaynaklarında bulunan iç kaynaklardan karşılanacak.
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">
                  Karar henüz uygulama aşamasına geçmedi. İhraç belgesinin
                  onaylanması ve gerekli resmi işlemlerin tamamlanması için SPK
                  ve ilgili kurumlara başvuru yapılacak.
                </p>
              </Section>

              <Section title="KAP açıklamasındaki ana detaylar">
                <div className="overflow-x-auto">
                  <table className="min-w-full overflow-hidden rounded-xl border border-slate-200 text-sm">
                    <tbody>
                      {anaDetaylar.map(([etiket, deger], index) => (
                        <tr
                          key={etiket}
                          className={index % 2 === 0 ? "bg-white" : "bg-slate-50"}
                        >
                          <th className="px-4 py-3 text-left font-semibold text-slate-800">
                            {etiket}
                          </th>
                          <td className="px-4 py-3 font-bold text-slate-700">
                            {deger}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Section>

              <Section title="Bedelsiz artırım hangi kaynaklardan karşılanacak?">
                <div className="grid gap-3">
                  {kaynaklar.map((item) => (
                    <div
                      key={item.baslik}
                      className="flex flex-col justify-between gap-2 rounded-xl border border-emerald-200 bg-emerald-50 p-4 sm:flex-row sm:items-center"
                    >
                      <span className="text-sm font-semibold text-emerald-900">
                        {item.baslik}
                      </span>
                      <span className="text-base font-black text-emerald-950">
                        {item.tutar}
                      </span>
                    </div>
                  ))}
                </div>
              </Section>

              <Section title="Pay gruplarına göre bedelsiz dağıtım">
                <div className="grid gap-4">
                  {payGruplari.map((item) => (
                    <div
                      key={item.grup}
                      className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
                    >
                      <h3 className="text-base font-bold text-slate-900">
                        {item.grup}
                      </h3>
                      <div className="mt-3 grid gap-2 text-sm text-slate-700 sm:grid-cols-2">
                        <div>
                          <strong>Mevcut sermaye:</strong> {item.mevcut}
                        </div>
                        <div>
                          <strong>Artış tutarı:</strong> {item.artirim}
                        </div>
                        <div>
                          <strong>Bedelsiz oranı:</strong> {item.oran}
                        </div>
                        <div>
                          <strong>Nitelik:</strong> {item.nitelik}
                        </div>
                      </div>
                    </div>
                  ))}
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
                <div className="grid gap-3">
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

              <Section title="ARMGD bedelsiz sermaye artırımı hakkında soru-cevap">
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
                  href="https://www.kap.org.tr/Bildirim/1634451"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="mt-2 inline-block font-medium text-slate-700 underline underline-offset-2"
                >
                  ARMGD — Orjinal Kap içeriği
                </a>
              </div>

              <HaberIlgiliBolumler
                slug={slug}
                baslik="ARMGD %1.510 Bedelsiz Sermaye Artırımı Kararı Aldı"
              />

              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm font-medium leading-7 text-amber-900 md:text-base">
                ⚠️ Bu haber bilgilendirme amacıyla hazırlanmıştır, yatırım
                tavsiyesi değildir.
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