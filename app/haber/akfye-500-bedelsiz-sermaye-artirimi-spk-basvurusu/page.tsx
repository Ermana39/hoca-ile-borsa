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

const slug = "akfye-500-bedelsiz-sermaye-artirimi-spk-basvurusu";
const haberUrl = `https://www.hocaileborsa.com/haber/${slug}`;
const haberGorsel =
  "https://www.hocaileborsa.com/akfye-500-bedelsiz-sermaye-artirimi-spk-basvurusu.webp";

export const metadata: Metadata = {
  title: "AKFYE %500 Bedelsiz Sermaye Artırımı İçin SPK’ya Başvurdu",
  description:
    seoAciklamasi("Akfen Yenilenebilir Enerji, 1,197 milyar TL olan sermayesini %500 bedelsiz artırarak 7,182 milyar TL’ye çıkarmak için SPK’ya başvurdu.", "Haberde gelişmenin ayrıntıları, açıklanan veriler ve yatırımcıların izleyebileceği temel noktalar yer alıyor."),
  alternates: {
    canonical: haberUrl,
  },
  openGraph: {
    type: "article",
    title: "AKFYE %500 Bedelsiz Sermaye Artırımı İçin SPK’ya Başvurdu",
    description:
      "AKFYE, 5,985 milyar TL tutarındaki bedelsiz sermaye artırımı için SPK başvurusunu 20 Temmuz 2026’da yaptı.",
    url: haberUrl,
    images: [
      {
        url: haberGorsel,
        width: 1200,
        height: 675,
        alt: "AKFYE yüzde 500 bedelsiz sermaye artırımı SPK başvurusu",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AKFYE %500 Bedelsiz Sermaye Artırımı İçin SPK’ya Başvurdu",
    description:
      "Sermaye 1,197 milyar TL’den 7,182 milyar TL’ye çıkarılacak.",
    images: [haberGorsel],
  },
};

const ozetKartlari = [
  {
    baslik: "Bedelsiz Oranı",
    deger: "%500",
    aciklama: "İç kaynaklardan",
  },
  {
    baslik: "Mevcut Sermaye",
    deger: "1,197 Mr TL",
    aciklama: "1.196.962.446 TL",
  },
  {
    baslik: "Yeni Sermaye",
    deger: "7,182 Mr TL",
    aciklama: "7.181.774.676 TL",
  },
  {
    baslik: "Başvuru Tarihi",
    deger: "20.07.2026",
    aciklama: "SPK başvurusu",
  },
];

const anaDetaylar = [
  ["Şirket", "Akfen Yenilenebilir Enerji A.Ş."],
  ["Hisse Kodu", "AKFYE"],
  ["Yönetim Kurulu Kararı", "13.07.2026"],
  ["SPK Başvuru Tarihi", "20.07.2026"],
  ["Kayıtlı Sermaye Tavanı", "20.000.000.000 TL"],
  ["Mevcut Sermaye", "1.196.962.446 TL"],
  ["Artırılacak Sermaye", "5.984.812.230 TL"],
  ["Ulaşılacak Sermaye", "7.181.774.676 TL"],
  ["Bedelsiz Oranı", "%500"],
  ["Kaynak", "Hisse senedi ihraç primleri"],
  ["A Grubu Yeni Pay", "1.016.031.950 TL"],
  ["B Grubu Yeni Pay", "4.968.780.280 TL"],
  ["Değiştirilecek Esas Sözleşme Maddesi", "6. madde"],
  ["Artırılan Payların Niteliği", "Kaydi pay"],
];

const surec = [
  {
    baslik: "Karar 13 Temmuz’da alındı",
    aciklama:
      "AKFYE yönetim kurulu, çıkarılmış sermayenin %500 oranında bedelsiz artırılmasına 13 Temmuz 2026 tarihinde karar verdi.",
  },
  {
    baslik: "Başvuru 20 Temmuz’da yapıldı",
    aciklama:
      "Şirket, ihraç belgesinin onaylanması ve esas sözleşmenin 6. maddesinin değiştirilmesi için SPK’ya başvurdu.",
  },
  {
    baslik: "Sermaye 7,182 milyar TL’ye çıkacak",
    aciklama:
      "Başvurunun onaylanması halinde mevcut 1,197 milyar TL sermaye, 5,985 milyar TL artırılarak 7,182 milyar TL’ye ulaşacak.",
  },
  {
    baslik: "Kaynak hisse senedi ihraç primleri",
    aciklama:
      "Bedelsiz artırıma konu tutarın tamamı hisse senedi ihraç primlerinden karşılanacak.",
  },
];

const nedenOnemli = [
  {
    baslik: "Yüksek bedelsiz oranı",
    aciklama:
      "%500 oranındaki artırım, yatırımcıların sahip olduğu her 1 pay için 5 yeni bedelsiz pay alma hakkı doğuracak.",
  },
  {
    baslik: "Özkaynak kalemi sermayeye aktarılacak",
    aciklama:
      "İşlem şirkete nakit girişi sağlamayacak; ihraç primleri sermaye hesabına aktarılacak.",
  },
  {
    baslik: "Sermaye yapısı büyüyecek",
    aciklama:
      "Çıkarılmış sermaye yaklaşık altı katına çıkarak 7,182 milyar TL seviyesine ulaşacak.",
  },
  {
    baslik: "Süreç henüz tamamlanmadı",
    aciklama:
      "Bedelsiz payların dağıtılabilmesi için SPK onayı ve ardından hak kullanım tarihinin ilan edilmesi gerekiyor.",
  },
];

const finansalOkuma = [
  "Bedelsiz sermaye artırımı şirkete yeni nakit sağlamaz.",
  "İşlem, özkaynak içindeki ihraç primlerinin sermayeye aktarılmasıdır.",
  "Şirketin toplam piyasa değeri yalnızca bedelsiz işlem nedeniyle değişmez.",
  "Pay adedi artarken teorik fiyat aynı oranda düzeltilir.",
  "Asıl finansal görünüm faaliyet kârlılığı, borçluluk ve nakit akışıyla belirlenir.",
];

const hisseOkumasi = [
  {
    baslik: "Kısa vadede ilgi artırabilir",
    aciklama:
      "Yüksek bedelsiz oranı, başvuru ve onay sürecinde hissedeki işlem hacmini ve yatırımcı ilgisini artırabilir.",
  },
  {
    baslik: "Değer yaratımı sağlamaz",
    aciklama:
      "Pay sayısının artması tek başına şirket değerini veya yatırımcının toplam portföy değerini artırmaz.",
  },
  {
    baslik: "SPK onayı takip edilecek",
    aciklama:
      "Haber akışındaki bir sonraki önemli aşama SPK onayı ve bedelsiz pay alma hakkı kullanım tarihidir.",
  },
];

const riskler = [
  "SPK onay süresi kesin değil.",
  "Başvuru koşulları Kurul değerlendirmesi sırasında değişebilir.",
  "Bedelsiz işlemi tek başına operasyonel performansı iyileştirmez.",
  "Teorik fiyat düzeltmesi nedeniyle nominal fiyat düşecek.",
  "Kısa vadeli yüksek oynaklık oluşabilir.",
];

const takipBasliklari = [
  "SPK başvuru sonucu",
  "İhraç belgesinin onay tarihi",
  "Bedelsiz pay alma hakkı kullanım tarihi",
  "Kayıt ve ödeme tarihleri",
  "2026 yılı finansal sonuçları",
  "Yenilenebilir enerji üretim ve satış verileri",
];

const seoSorular = [
  {
    soru: "AKFYE bedelsiz sermaye artırımı oranı kaç?",
    cevap:
      "AKFYE, mevcut sermayesini %500 oranında bedelsiz artırmak için SPK’ya başvurdu.",
  },
  {
    soru: "AKFYE sermayesi kaç TL’ye çıkacak?",
    cevap:
      "SPK onayı sonrası sermayenin 1.196.962.446 TL’den 7.181.774.676 TL’ye çıkması planlanıyor.",
  },
  {
    soru: "Bedelsiz artırım hangi kaynaktan karşılanacak?",
    cevap:
      "5.984.812.230 TL tutarındaki artırımın tamamı hisse senedi ihraç primlerinden karşılanacak.",
  },
  {
    soru: "AKFYE SPK’ya ne zaman başvurdu?",
    cevap:
      "Şirket bedelsiz sermaye artırımı için 20 Temmuz 2026 tarihinde SPK’ya başvurdu.",
  },
  {
    soru: "AKFYE bedelsiz payları ne zaman dağıtılacak?",
    cevap:
      "Hak kullanım tarihi henüz açıklanmadı. Öncelikle SPK başvurusunun onaylanması gerekiyor.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "AKFYE %500 Bedelsiz Sermaye Artırımı İçin SPK’ya Başvurdu",
  description:
    "Akfen Yenilenebilir Enerji, 1,197 milyar TL olan sermayesini %500 bedelsiz artırarak 7,182 milyar TL’ye çıkarmak için SPK’ya başvurdu.",
  image: haberGorsel,
  datePublished: "2026-07-20T16:52:35+03:00",
  dateModified: "2026-07-20T16:52:35+03:00",
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

export default function AkfyeBedelsizSpkBasvurusuPage() {
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
              src="/akfye-500-bedelsiz-sermaye-artirimi-spk-basvurusu.webp"
              alt="AKFYE yüzde 500 bedelsiz sermaye artırımı SPK başvurusu"
              fill
              unoptimized
              className="object-cover"
              priority
            />
          </div>

          <div className="p-6 md:p-10">
            <h1 className="text-2xl font-bold leading-tight tracking-tight text-slate-900 md:text-3xl lg:text-4xl">
              AKFYE %500 Bedelsiz Sermaye Artırımı İçin SPK’ya Başvurdu
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
                Akfen Yenilenebilir Enerji A.Ş. (<strong>AKFYE</strong>),
                çıkarılmış sermayesini <strong>%500 oranında bedelsiz</strong>
                artırmak için Sermaye Piyasası Kurulu’na başvurdu.
              </p>

              <p>
                Başvurunun onaylanması halinde şirketin sermayesi
                <strong> 1.196.962.446 TL’den 7.181.774.676 TL’ye</strong>
                çıkacak. Artırılacak 5.984.812.230 TL’nin tamamı hisse senedi
                ihraç primlerinden karşılanacak.
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
                  AKFYE, 13 Temmuz 2026 tarihli yönetim kurulu kararı kapsamında
                  %500 bedelsiz sermaye artırımı için 20 Temmuz 2026 tarihinde
                  SPK’ya başvurdu. Başvuru; ihraç belgesinin onaylanmasını ve
                  esas sözleşmenin sermayeye ilişkin 6. maddesinin
                  değiştirilmesini kapsıyor.
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

              <Section title="Süreç nasıl ilerledi?">
                <div className="grid gap-4">
                  {surec.map((item) => (
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

              <Section title="AKFYE bedelsiz sermaye artırımı hakkında soru-cevap">
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
                  href="https://www.kap.org.tr/Bildirim/1634985"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="mt-2 inline-block font-medium text-slate-700 underline underline-offset-2"
                >
                  AKFYE — Orjinal Kap içeriği
                </a>
              </div>

              <HaberIlgiliBolumler
                slug={slug}
                baslik="AKFYE %500 Bedelsiz Sermaye Artırımı İçin SPK’ya Başvurdu"
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