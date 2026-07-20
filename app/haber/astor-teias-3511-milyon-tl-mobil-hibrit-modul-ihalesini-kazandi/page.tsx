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

const slug = "astor-teias-3511-milyon-tl-mobil-hibrit-modul-ihalesini-kazandi";
const haberUrl = `https://www.hocaileborsa.com/haber/${slug}`;
const haberGorsel =
  "https://www.hocaileborsa.com/astor-teias-3511-milyon-tl-mobil-hibrit-modul-ihalesini-kazandi.webp";

export const metadata: Metadata = {
  title: "ASTOR TEİAŞ’ın 351,1 Milyon TL’lik İhalesini Kazandı",
  description:
    "ASTOR, TEİAŞ’ın 11 adet Mobil Hibrit Modül ve yedek malzeme ihalesinin 351,1 milyon TL bedelle şirket uhdesinde kaldığını açıkladı.",
  alternates: { canonical: haberUrl },
  openGraph: {
    type: "article",
    title: "ASTOR TEİAŞ’ın 351,1 Milyon TL’lik İhalesini Kazandı",
    description:
      "İhalenin son gelir tablosundaki brüt satışlara oranı %3,78 olarak açıklandı.",
    url: haberUrl,
    images: [
      {
        url: haberGorsel,
        width: 1200,
        height: 675,
        alt: "ASTOR TEİAŞ 351,1 milyon TL Mobil Hibrit Modül ihalesi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ASTOR TEİAŞ’ın 351,1 Milyon TL’lik İhalesini Kazandı",
    description:
      "11 adet Mobil Hibrit Modül ve yedek malzeme ihalesi ASTOR’un oldu.",
    images: [haberGorsel],
  },
};

const ozetKartlari = [
  { baslik: "İhale Bedeli", deger: "351,1 Mn TL", aciklama: "TEİAŞ ihalesi" },
  { baslik: "Modül Sayısı", deger: "11 Adet", aciklama: "Mobil Hibrit Modül" },
  { baslik: "Ciroya Oranı", deger: "%3,78", aciklama: "Son brüt satışlara göre" },
  { baslik: "Sonuç Tarihi", deger: "17.07.2026", aciklama: "İhale sonucu" },
];

const anaDetaylar = [
  ["Şirket", "Astor Enerji A.Ş."],
  ["Hisse Kodu", "ASTOR"],
  ["Bildirim Tarihi", "20.07.2026"],
  ["Bildirim Saati", "18:15:13"],
  ["İhaleyi Açan", "Türkiye Elektrik İletim A.Ş. Genel Müdürlüğü"],
  ["İhale Konusu", "Mobil Hibrit Modül ve yedek malzemeleri"],
  ["Modül Sayısı", "11 adet"],
  ["Teklif Tarihi", "15.05.2026"],
  ["İhale Sonuç Tarihi", "17.07.2026"],
  ["İhale Bedeli", "351.100.000 TL"],
  ["Son Brüt Satışlara Oranı", "%3,78"],
  ["Önceki Açıklama", "18.05.2026"],
  ["Sonuç", "İhale ASTOR uhdesinde kaldı"],
];

const surec = [
  {
    baslik: "Teklif 15 Mayıs’ta verildi",
    aciklama:
      "ASTOR, TEİAŞ tarafından düzenlenen 11 adet Mobil Hibrit Modül temini ihalesine 351,1 milyon TL teklif verdi.",
  },
  {
    baslik: "En avantajlı teklif açıklandı",
    aciklama:
      "Şirket, 18 Mayıs 2026 tarihli KAP açıklamasında ihalede en avantajlı teklifi verdiğini duyurdu.",
  },
  {
    baslik: "İhale ASTOR’un oldu",
    aciklama:
      "İhalenin şirket uhdesinde kaldığı 20 Temmuz 2026 tarihinde TEİAŞ tarafından ASTOR’a bildirildi.",
  },
  {
    baslik: "Sözleşme süreci bekleniyor",
    aciklama:
      "Şirket, sözleşme sürecine ilişkin gelişmelerin ayrıca kamuoyuyla paylaşılacağını belirtti.",
  },
];

const nedenOnemli = [
  {
    baslik: "351,1 milyon TL’lik yeni iş",
    aciklama:
      "İhale büyüklüğü, şirketin kamu tarafındaki sipariş portföyünü ve iş hacmini destekliyor.",
  },
  {
    baslik: "Ciroya anlamlı katkı",
    aciklama:
      "İhale bedelinin son açıklanan brüt satışlara oranı %3,78 seviyesinde.",
  },
  {
    baslik: "TEİAŞ referansı",
    aciklama:
      "Kamu enerji altyapısına yönelik yeni iş, ASTOR’un güç sistemleri tarafındaki konumunu güçlendirebilir.",
  },
  {
    baslik: "Sözleşme henüz imzalanmadı",
    aciklama:
      "Finansal etkinin kesinleşmesi için sözleşme imzası, teslimat takvimi ve ödeme koşullarının açıklanması gerekiyor.",
  },
];

const finansalOkuma = [
  "351,1 milyon TL’lik ihale bedeli şirketin sipariş görünümünü destekliyor.",
  "İhale büyüklüğü son açıklanan brüt satışların %3,78’ine karşılık geliyor.",
  "Gelirin hangi dönemlerde kaydedileceği teslimat programına bağlı olacak.",
  "Kârlılık etkisi üretim maliyetleri ve sözleşme koşullarıyla belirlenecek.",
  "Sözleşme henüz imzalanmadığı için tahsilat ve teslimat ayrıntıları açıklanmadı.",
];

const hisseOkumasi = [
  {
    baslik: "Haber pozitif",
    aciklama:
      "İhalenin en avantajlı teklif aşamasından kesin kazanım aşamasına geçmesi belirsizliği azalttı.",
  },
  {
    baslik: "Sipariş portföyünü destekler",
    aciklama:
      "Yeni iş, şirketin önümüzdeki dönem üretim ve gelir görünümüne katkı sağlayabilir.",
  },
  {
    baslik: "Sözleşme detayları izlenecek",
    aciklama:
      "Teslimat süresi, ödeme planı ve kâr marjı açıklanmadan net finansal etki hesaplanamaz.",
  },
];

const riskler = [
  "Sözleşme süreci henüz tamamlanmadı.",
  "Teslimat takvimi açıklanmadı.",
  "İhalenin kâr marjı bilinmiyor.",
  "Hammadde ve üretim maliyetleri kârlılığı etkileyebilir.",
  "Tahsilat koşulları henüz paylaşılmadı.",
];

const takipBasliklari = [
  "Sözleşme imza tarihi",
  "Teslimat süresi",
  "Ödeme ve tahsilat koşulları",
  "İhalenin sipariş bakiyesine etkisi",
  "Brüt ve net kâr marjı",
  "ASTOR’un yeni TEİAŞ ihaleleri",
];

const seoSorular = [
  {
    soru: "ASTOR hangi ihaleyi kazandı?",
    cevap:
      "ASTOR, TEİAŞ’ın 11 adet Mobil Hibrit Modül ve yedek malzeme temini ihalesini kazandı.",
  },
  {
    soru: "ASTOR ihale bedeli ne kadar?",
    cevap:
      "İhale bedeli 351.100.000 TL olarak açıklandı.",
  },
  {
    soru: "İhalenin ASTOR cirosuna oranı kaç?",
    cevap:
      "İhale bedelinin şirketin son açıklanan brüt satış hasılatına oranı %3,78.",
  },
  {
    soru: "İhale sonucu ne zaman açıklandı?",
    cevap:
      "İhale 17 Temmuz 2026 tarihinde sonuçlandı ve şirket uhdesinde kaldığı 20 Temmuz 2026’da bildirildi.",
  },
  {
    soru: "ASTOR haberi hisse için nasıl okunmalı?",
    cevap:
      "İhalenin kesinleşmesi nedeniyle pozitif. Ancak teslimat takvimi ve kârlılık bilgileri henüz açıklanmadı.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "ASTOR TEİAŞ’ın 351,1 Milyon TL’lik İhalesini Kazandı",
  description:
    "ASTOR, TEİAŞ’ın 11 adet Mobil Hibrit Modül ve yedek malzeme ihalesinin 351,1 milyon TL bedelle şirket uhdesinde kaldığını açıkladı.",
  image: haberGorsel,
  datePublished: "2026-07-20T18:15:13+03:00",
  dateModified: "2026-07-20T18:15:13+03:00",
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

export default function AstorTeiasIhalePage() {
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
              src="/astor-teias-3511-milyon-tl-mobil-hibrit-modul-ihalesini-kazandi.webp"
              alt="ASTOR TEİAŞ 351,1 milyon TL Mobil Hibrit Modül ihalesi"
              fill
              unoptimized
              className="object-cover"
              priority
            />
          </div>

          <div className="p-6 md:p-10">
            <h1 className="text-2xl font-bold leading-tight tracking-tight text-slate-900 md:text-3xl lg:text-4xl">
              ASTOR TEİAŞ’ın 351,1 Milyon TL’lik İhalesini Kazandı
            </h1>

            <div className="mb-5 mt-3 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center rounded-md bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700 ring-1 ring-inset ring-emerald-600/20">
                İhale Sonucu
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
                Astor Enerji A.Ş. (<strong>ASTOR</strong>), Türkiye Elektrik
                İletim A.Ş. Genel Müdürlüğü tarafından gerçekleştirilen
                <strong> 11 adet Mobil Hibrit Modül ve yedek malzeme</strong>
                ihalesinin şirket uhdesinde kaldığını açıkladı.
              </p>

              <p>
                İhale bedeli <strong>351.100.000 TL</strong> olarak açıklandı.
                Bu tutarın şirketin son açıklanan brüt satış hasılatına oranı
                <strong> %3,78</strong>.
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
                  ASTOR, 18 Mayıs 2026 tarihinde en avantajlı teklifi verdiğini
                  açıkladığı TEİAŞ ihalesinin kesin olarak şirket uhdesinde
                  kaldığını duyurdu. Sözleşme sürecine ilişkin gelişmeler daha
                  sonra paylaşılacak.
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

              <Section title="ASTOR TEİAŞ ihalesi hakkında soru-cevap">
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
                  href="https://www.kap.org.tr/Bildirim/1635127"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="mt-2 inline-block font-medium text-slate-700 underline underline-offset-2"
                >
                  ASTOR — Orjinal Kap içeriği
                </a>
              </div>

              <HaberIlgiliBolumler
                slug={slug}
                baslik="ASTOR TEİAŞ’ın 351,1 Milyon TL’lik İhalesini Kazandı"
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