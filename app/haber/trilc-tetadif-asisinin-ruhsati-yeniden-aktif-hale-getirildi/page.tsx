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

const slug = "trilc-tetadif-asisinin-ruhsati-yeniden-aktif-hale-getirildi";
const haberUrl = `https://www.hocaileborsa.com/haber/${slug}`;
const haberGorsel =
  "https://www.hocaileborsa.com/trilc-tetadif-asisinin-ruhsati-yeniden-aktif-hale-getirildi.webp";

export const metadata: Metadata = {
  title: "TRILC Tetadif Aşısının Ruhsatı Yeniden Aktif Hale Getirildi",
  description:
    "TRILC, Tetadif 0.5 ml aşısının askıya alınan ruhsatına ilişkin işlemlerin iptal edildiğini ve ürün ruhsatının yeniden aktif statüye döndüğünü açıkladı.",
  alternates: {
    canonical: haberUrl,
  },
  openGraph: {
    type: "article",
    title: "TRILC Tetadif Aşısının Ruhsatı Yeniden Aktif Hale Getirildi",
    description:
      "Sağlık Bakanlığı Ulusal Aşılama Programı’nda yer alan Tetadif 0.5 ml ürününün ruhsat askısı kaldırıldı.",
    url: haberUrl,
    images: [
      {
        url: haberGorsel,
        width: 1200,
        height: 675,
        alt: "TRILC Tetadif aşısı ruhsatı yeniden aktif hale getirildi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TRILC Tetadif Aşısının Ruhsatı Yeniden Aktif Hale Getirildi",
    description:
      "Tetadif 0.5 ml ürününün ruhsat askı işlemi iptal edildi.",
    images: [haberGorsel],
  },
};

const ozetKartlari = [
  {
    baslik: "Ürün",
    deger: "Tetadif 0.5 ml",
    aciklama: "IM enjeksiyonluk süspansiyon",
  },
  {
    baslik: "Ruhsat Durumu",
    deger: "Aktif",
    aciklama: "Askı işlemi kaldırıldı",
  },
  {
    baslik: "İmal Ruhsatı",
    deger: "2020/145",
    aciklama: "04.07.2020 tarihli",
  },
  {
    baslik: "Program",
    deger: "Ulusal Aşılama",
    aciklama: "Aşı takviminde yer alıyor",
  },
];

const anaDetaylar = [
  ["Şirket", "Turk İlaç ve Serum Sanayi A.Ş."],
  ["Hisse Kodu", "TRILC"],
  ["Bildirim Tarihi", "20.07.2026"],
  ["Bildirim Saati", "09:52:22"],
  ["Ürün", "Tetadif 0.5 ml IM Enjeksiyonluk Süspansiyon"],
  ["İmal Ruhsatı", "04.07.2020 tarihli 2020/145"],
  ["Etkin Maddeler", "Pürüfiye tetanoz toksoidi ve pürüfiye difteri toksoidi"],
  ["Önceki Durum", "Madde 22 gerekçeli askıda"],
  ["Yeni Durum", "Ruhsatı askıda olmayan ürün"],
  ["Askı İşleminin İptal Tarihi", "09.07.2026"],
  ["TİTCK Liste Güncellemesi", "17.07.2026"],
];

const surec = [
  {
    baslik: "Ruhsat 2022’de askıya alındı",
    aciklama:
      "Tetadif 0.5 ml ürününün ruhsatı, Beşeri Tıbbi Ürün Klinik Değerlendirme Komisyonu’nun 20 Aralık 2022 tarihli kararı sonrasında askıya alınmıştı.",
  },
  {
    baslik: "Şirket hukuki süreç başlattı",
    aciklama:
      "Askı işleminin iptali amacıyla ilgili kurum aleyhine dava açıldı.",
  },
  {
    baslik: "Askı işlemi iptal edildi",
    aciklama:
      "Dava sonucunda iletilen karar doğrultusunda ruhsat askı işlemleri 9 Temmuz 2026 tarihli yazıyla iptal edildi.",
  },
  {
    baslik: "Ürün yeniden aktif listeye alındı",
    aciklama:
      "TİTCK’nin ruhsatlı ürünler listesinde ürünün durumu 17 Temmuz 2026 itibarıyla askıda olmayan ürün statüsüne çevrildi.",
  },
];

const nedenOnemli = [
  {
    baslik: "Ruhsat belirsizliği ortadan kalktı",
    aciklama:
      "Ürünün askı statüsünden çıkarılması, Tetadif için önemli bir düzenleyici belirsizliğin sona erdiğini gösteriyor.",
  },
  {
    baslik: "Ulusal aşılama programında yer alıyor",
    aciklama:
      "Ürünün Sağlık Bakanlığı Ulusal Aşılama Programı’nda bulunması, ticari ve stratejik önemini artırıyor.",
  },
  {
    baslik: "Üretim ve satışın önü yeniden açılabilir",
    aciklama:
      "Ruhsatın aktif hale gelmesi ürünün yeniden üretim ve satış süreçlerine dahil edilebilmesinin önünü açabilir.",
  },
  {
    baslik: "Finansal katkı henüz açıklanmadı",
    aciklama:
      "Şirket ürünün üretim takvimi, satış miktarı, olası ihale süreci veya beklenen ciro katkısına ilişkin rakam paylaşmadı.",
  },
];

const finansalOkuma = [
  "Ruhsatın yeniden aktif hale gelmesi operasyonel açıdan olumlu.",
  "Ürünün yeniden üretime ve satışa ne zaman geçeceği açıklanmadı.",
  "Kamu alımı, ihale veya sipariş bilgisi henüz paylaşılmadı.",
  "Ciro ve kâra katkı ürünün üretim hacmi, satış fiyatı ve ihale takvimiyle netleşecek.",
  "Haber, doğrudan finansal sonuçtan çok düzenleyici engelin kalkması anlamına geliyor.",
];

const hisseOkumasi = [
  {
    baslik: "Pozitif haber",
    aciklama:
      "Ruhsat askısının kaldırılması, ürünün tekrar ticari faaliyete konu olabilmesi açısından hisse için pozitif okunabilir.",
  },
  {
    baslik: "Etkinin büyüklüğü henüz belirsiz",
    aciklama:
      "Üretim ve satış takvimi açıklanmadığı için finansal etkinin büyüklüğü şu aşamada ölçülemiyor.",
  },
  {
    baslik: "Yeni açıklamalar belirleyici olacak",
    aciklama:
      "Üretim başlangıcı, ihale, sipariş ve satış açıklamaları haberin kalıcı etkisini belirleyecek.",
  },
];

const riskler = [
  "Üretim başlangıç tarihi açıklanmadı.",
  "Satış ve sipariş miktarı henüz belli değil.",
  "Kamu alım veya ihale takvimi paylaşılmadı.",
  "Ürünün ciro ve kâra katkısı hesaplanamıyor.",
  "Ruhsatın aktif olması tek başına satış garantisi oluşturmaz.",
];

const takipBasliklari = [
  "Tetadif üretiminin yeniden başlayacağı tarih",
  "Kamu ihalesi veya sipariş açıklamaları",
  "Üretim kapasitesi ve satış hacmi",
  "Ürünün TRILC cirosuna katkısı",
  "TİTCK ve Sağlık Bakanlığı tarafından yapılabilecek yeni açıklamalar",
];

const seoSorular = [
  {
    soru: "TRILC ne açıkladı?",
    cevap:
      "TRILC, Tetadif 0.5 ml aşısının askıya alınan ruhsatına ilişkin işlemlerin iptal edildiğini ve ruhsatın yeniden aktif hale getirildiğini açıkladı.",
  },
  {
    soru: "Tetadif nedir?",
    cevap:
      "Tetadif 0.5 ml, pürüfiye tetanoz ve difteri toksoidi antijenleri içeren ve Sağlık Bakanlığı Ulusal Aşılama Programı’nda yer alan bir aşıdır.",
  },
  {
    soru: "Tetadif ruhsatı neden askıya alınmıştı?",
    cevap:
      "Ruhsat, Beşeri Tıbbi Ürün Klinik Değerlendirme Komisyonu’nun 20 Aralık 2022 tarihli kararı sonrasında askıya alınmıştı.",
  },
  {
    soru: "Tetadif ruhsatı ne zaman aktif hale geldi?",
    cevap:
      "Ruhsat askı işlemi 9 Temmuz 2026 tarihli yazıyla iptal edildi; ürün 17 Temmuz 2026’da aktif ruhsatlı ürünler listesine alındı.",
  },
  {
    soru: "TRILC haberi hisse için nasıl okunmalı?",
    cevap:
      "Düzenleyici engelin kalkması açısından pozitif; ancak üretim, sipariş ve satış bilgileri açıklanmadığı için finansal etki henüz net değil.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "TRILC Tetadif Aşısının Ruhsatı Yeniden Aktif Hale Getirildi",
  description:
    "TRILC, Tetadif 0.5 ml aşısının askıya alınan ruhsatına ilişkin işlemlerin iptal edildiğini ve ürün ruhsatının yeniden aktif statüye döndüğünü açıkladı.",
  image: haberGorsel,
  datePublished: "2026-07-20T09:52:22+03:00",
  dateModified: "2026-07-20T09:52:22+03:00",
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

export default function TrilcTetadifRuhsatPage() {
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
              src="/trilc-tetadif-asisinin-ruhsati-yeniden-aktif-hale-getirildi.webp"
              alt="TRILC Tetadif aşısı ruhsatı yeniden aktif hale getirildi"
              fill
              unoptimized
              className="object-cover"
              priority
            />
          </div>

          <div className="p-6 md:p-10">
            <h1 className="text-2xl font-bold leading-tight tracking-tight text-slate-900 md:text-3xl lg:text-4xl">
              TRILC Tetadif Aşısının Ruhsatı Yeniden Aktif Hale Getirildi
            </h1>

            <div className="mb-5 mt-3 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center rounded-md bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700 ring-1 ring-inset ring-blue-600/20">
                Ruhsat Güncellemesi
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
                Turk İlaç ve Serum Sanayi A.Ş. (
                <strong>TRILC</strong>), Tetadif 0.5 ml IM Enjeksiyonluk
                Süspansiyon ürününe ait ruhsat askı işlemlerinin iptal
                edildiğini ve ürünün yeniden aktif ruhsat statüsüne geçtiğini
                açıkladı.
              </p>

              <p>
                Sağlık Bakanlığı Ulusal Aşılama Programı’nda yer alan ürün,
                pürüfiye tetanoz toksoidi ve pürüfiye difteri toksoidi
                antijenlerini içeriyor.
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
                  Tetadif 0.5 ml ürününün 2022 yılında askıya alınan ruhsatına
                  ilişkin işlem, açılan dava sonucunda iptal edildi. TİTCK’nin
                  ruhsatlı ürünler listesinde ürün yeniden askıda olmayan ürün
                  statüsüne geçirildi.
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

              <Section title="Ruhsat süreci nasıl ilerledi?">
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

              <Section title="TRILC Tetadif ruhsatı hakkında soru-cevap">
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
                  href="https://www.kap.org.tr/Bildirim/1634776"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="mt-2 inline-block font-medium text-slate-700 underline underline-offset-2"
                >
                  TRILC — Orjinal Kap içeriği
                </a>
              </div>

              <HaberIlgiliBolumler
                slug={slug}
                baslik="TRILC Tetadif Aşısının Ruhsatı Yeniden Aktif Hale Getirildi"
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