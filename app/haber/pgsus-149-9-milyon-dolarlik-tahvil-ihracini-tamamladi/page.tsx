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

const slug = "pgsus-149-9-milyon-dolarlik-tahvil-ihracini-tamamladi";
const haberUrl = `https://www.hocaileborsa.com/haber/${slug}`;
const haberGorsel =
  "https://www.hocaileborsa.com/pgsus-149-9-milyon-dolarlik-tahvil-ihracini-tamamladi.webp";

export const metadata: Metadata = {
  title: "PGSUS 149,9 Milyon Dolarlık Tahvil İhracını Tamamladı",
  description:
    seoAciklamasi("Pegasus, yurt dışındaki nitelikli yatırımcılara yönelik 149,9 milyon dolarlık tahvil ihracını tamamladı. Satış tutarı şirket hesaplarına aktarıldı.", "Haberde gelişmenin ayrıntıları, açıklanan veriler ve yatırımcıların izleyebileceği temel noktalar yer alıyor."),
  alternates: {
    canonical: haberUrl,
  },
  openGraph: {
    type: "article",
    title: "PGSUS 149,9 Milyon Dolarlık Tahvil İhracını Tamamladı",
    description:
      "Yeni tahviller Euronext Dublin’de işlem görecek ve 40 gün sonra mevcut 500 milyon dolarlık tahvillerle tek seri halinde birleştirilecek.",
    url: haberUrl,
    images: [
      {
        url: haberGorsel,
        width: 1200,
        height: 675,
        alt: "PGSUS 149,9 milyon dolarlık tahvil ihracı",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PGSUS 149,9 Milyon Dolarlık Tahvil İhracını Tamamladı",
    description:
      "Tahvil satışından sağlanan tutar Pegasus’un hesaplarına aktarıldı.",
    images: [haberGorsel],
  },
};

const ozetKartlari = [
  {
    baslik: "İhraç Tutarı",
    deger: "149,9 Mn Dolar",
    aciklama: "Tahvillerin nominal değeri",
  },
  {
    baslik: "Satış",
    deger: "Tamamlandı",
    aciklama: "Tutar şirket hesaplarına aktarıldı",
  },
  {
    baslik: "Borsa",
    deger: "Euronext Dublin",
    aciklama: "Tahviller burada işlem görecek",
  },
  {
    baslik: "Birleşme Süresi",
    deger: "40 Gün",
    aciklama: "Mevcut tahvillerle tek seri olacak",
  },
];

const genelDetaylar = [
  {
    etiket: "Şirket",
    deger: "Pegasus Hava Taşımacılığı A.Ş.",
  },
  {
    etiket: "Hisse Kodu",
    deger: "PGSUS",
  },
  {
    etiket: "Bildirim Tarihi",
    deger: "16.07.2026",
  },
  {
    etiket: "Bildirim Saati",
    deger: "19:28:40",
  },
  {
    etiket: "Önceki Açıklama",
    deger: "09.07.2026",
  },
  {
    etiket: "İhraç Tutarı",
    deger: "149.900.000 ABD doları",
  },
  {
    etiket: "İhraç Formatı",
    deger: "Regulation S",
  },
  {
    etiket: "Yatırımcı Grubu",
    deger: "Yurt dışındaki nitelikli yatırımcılar",
  },
  {
    etiket: "Satış Tarihi",
    deger: "16.07.2026",
  },
  {
    etiket: "Fonların Durumu",
    deger: "Şirket hesaplarına aktarıldı",
  },
  {
    etiket: "İşlem Göreceği Piyasa",
    deger: "İrlanda Borsası / Euronext Dublin",
  },
  {
    etiket: "Mevcut Tahvil Tutarı",
    deger: "500.000.000 ABD doları",
  },
  {
    etiket: "Konsolidasyon",
    deger: "İhraç tarihinden 40 gün sonra tek seri",
  },
  {
    etiket: "Ortak ISIN",
    deger: "XS2897383043",
  },
];

const surecAdimlari = [
  {
    baslik: "Yönetim kurulu kararı ve ihraç tavanı",
    aciklama:
      "Tahvil ihracı, Pegasus yönetim kurulunun 17 Mart 2026 tarihli kararı ve SPK tarafından onaylanan ihraç tavanı kapsamında gerçekleştirildi.",
  },
  {
    baslik: "Nitelikli yatırımcılara satış yapıldı",
    aciklama:
      "149,9 milyon dolar nominal değerli tahviller, Regulation S formatında yurt dışındaki nitelikli yatırımcılara satıldı.",
  },
  {
    baslik: "Satış bedeli hesaplara geçti",
    aciklama:
      "İhracın 16 Temmuz 2026 tarihinde tamamlanmasıyla tahvil satışından sağlanan tutarlar Pegasus’un hesaplarına aktarıldı.",
  },
  {
    baslik: "Tahviller Dublin’de işlem görecek",
    aciklama:
      "Yeni tahviller İrlanda Borsası’nda, Euronext Dublin çatısı altında işlem görecek.",
  },
  {
    baslik: "Mevcut tahvillerle birleşecek",
    aciklama:
      "Yeni tahviller, ihraç tarihinden 40 gün sonra 2024 yılında ihraç edilen 500 milyon dolarlık mevcut tahvillerle tek seri oluşturacak.",
  },
];

const nedenOnemli = [
  {
    baslik: "Finansman işlemi tamamlandı",
    aciklama:
      "Önceki açıklamada planlanan ihraç, bu bildirimle fiilen tamamlandı. Fonların şirket hesaplarına aktarılması, işlemden sağlanan likiditenin kullanılabilir hale geldiğini gösteriyor.",
  },
  {
    baslik: "Yurt dışı borçlanma kapasitesi korundu",
    aciklama:
      "Pegasus’un uluslararası borçlanma piyasasından 149,9 milyon dolar kaynak sağlaması, şirketin yabancı yatırımcılara erişiminin sürdüğünü gösteriyor.",
  },
  {
    baslik: "Mevcut tahvil serisi büyüyor",
    aciklama:
      "Yeni tahvillerin 500 milyon dolarlık mevcut tahvillerle birleşmesiyle aynı koşullara tabi daha büyük ve daha likit bir tahvil serisi oluşacak.",
  },
  {
    baslik: "Borçluluk etkisi ayrıca izlenmeli",
    aciklama:
      "İşlem şirkete nakit sağlarken toplam finansal borcu da artırabilir. Bu nedenle kaynağın kullanım alanı, faiz giderleri ve net borç görünümü sonraki finansal sonuçlarda takip edilmeli.",
  },
];

const finansalOkuma = [
  "149,9 milyon dolarlık tahvil satış bedeli şirket hesaplarına aktarıldı.",
  "İşlem Pegasus’un kısa ve orta vadeli likidite gücünü destekleyebilir.",
  "Borçlanmanın maliyeti mevcut 500 milyon dolarlık tahvillerle aynı koşullara tabi olacak.",
  "Kaynağın borç refinansmanında kullanılması vade yapısını rahatlatabilir.",
  "Yatırım veya filo finansmanında kullanılması büyüme kapasitesini destekleyebilir.",
  "Yabancı para borçlanması nedeniyle kur riski ve faiz gideri etkisi devam edecek.",
  "Net finansal etki, fon kullanım alanı ve sonraki bilanço verileriyle netleşecek.",
];

const hisseOkumasi = [
  {
    baslik: "Likidite açısından pozitif",
    aciklama:
      "Tahvil satışının tamamlanması ve fonların hesaplara geçmesi, Pegasus’un nakit ve finansman erişimi açısından olumlu okunabilir.",
  },
  {
    baslik: "Borç artışı nedeniyle dengeli okunmalı",
    aciklama:
      "İşlem şirketin finansman gücünü artırırken aynı zamanda borçlanma yükümlülüğü oluşturuyor. Bu nedenle haber tek yönlü pozitif değil, likidite ve borçluluk birlikte değerlendirilerek okunmalı.",
  },
  {
    baslik: "Kullanım amacı belirleyici olacak",
    aciklama:
      "Kaynağın filo yatırımı, refinansman veya işletme sermayesinde kullanılmasına göre finansal katkının niteliği değişecek.",
  },
];

const riskler = [
  "Döviz cinsinden borçlanma kur hareketlerine karşı hassasiyet yaratabilir.",
  "Tahvil faizleri finansman giderlerini artırabilir.",
  "Kaynağın düşük getirili alanlarda kullanılması borçlanmanın verimliliğini azaltabilir.",
  "Havacılık sektöründeki yakıt fiyatı ve talep oynaklığı borç ödeme kapasitesini etkileyebilir.",
  "Net borç/FAVÖK ve faiz karşılama oranları sonraki dönemlerde ayrıca izlenmeli.",
];

const takipBasliklari = [
  "149,9 milyon dolarlık kaynağın kullanım alanı",
  "Pegasus’un net borç ve likidite görünümü",
  "Finansman giderlerindeki değişim",
  "Mevcut ve yeni tahvillerin ortak vade koşulları",
  "Filo yatırım ve teslimat takvimi",
  "Kur hareketlerinin borçluluk üzerindeki etkisi",
  "Sonraki çeyrek nakit akış tablosu",
];

const seoSorular = [
  {
    soru: "PGSUS ne açıkladı?",
    cevap:
      "Pegasus, yurt dışındaki nitelikli yatırımcılara yönelik 149,9 milyon dolar nominal değerli tahvil ihracının tamamlandığını açıkladı.",
  },
  {
    soru: "PGSUS tahvil ihracı kaç dolar?",
    cevap:
      "Yeni tahvillerin toplam nominal değeri 149.900.000 ABD dolarıdır.",
  },
  {
    soru: "Tahvil satışından sağlanan para Pegasus’un hesabına geçti mi?",
    cevap:
      "Evet. Şirket, satışa ilişkin tutarların 16 Temmuz 2026 tarihinde hesaplarına aktarıldığını açıkladı.",
  },
  {
    soru: "PGSUS tahvilleri nerede işlem görecek?",
    cevap:
      "Yeni tahviller İrlanda Borsası’nda, Euronext Dublin’de işlem görecek.",
  },
  {
    soru: "Yeni tahviller mevcut tahvillerle birleşecek mi?",
    cevap:
      "Evet. Yeni tahviller ihraç tarihinden 40 gün sonra 2024 yılında ihraç edilen 500 milyon dolarlık mevcut tahvillerle tek seri halinde birleştirilecek.",
  },
  {
    soru: "PGSUS haberi hisse için nasıl okunmalı?",
    cevap:
      "Finansman erişimi ve likidite açısından olumlu; borç ve faiz yükü açısından ise dengeli okunmalı. Net etki kaynağın kullanım alanıyla belli olacak.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "PGSUS 149,9 Milyon Dolarlık Tahvil İhracını Tamamladı",
  description:
    "Pegasus, yurt dışındaki nitelikli yatırımcılara yönelik 149,9 milyon dolarlık tahvil ihracını tamamladı. Satış tutarı şirket hesaplarına aktarıldı.",
  image: haberGorsel,
  datePublished: "2026-07-16T19:28:40+03:00",
  dateModified: "2026-07-16T19:28:40+03:00",
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

export default function PgsusTahvilIhraciPage() {
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
              src="/pgsus-149-9-milyon-dolarlik-tahvil-ihracini-tamamladi.webp"
              alt="PGSUS 149,9 milyon dolarlık tahvil ihracı"
              fill
              unoptimized
              className="object-cover"
              priority
            />
          </div>

          <div className="p-6 md:p-10">
            <h1 className="text-2xl font-bold leading-tight tracking-tight text-slate-900 md:text-3xl lg:text-4xl">
              PGSUS 149,9 Milyon Dolarlık Tahvil İhracını Tamamladı
            </h1>

            <div className="mb-5 mt-3 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center rounded-md bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700 ring-1 ring-inset ring-blue-600/20">
                Borçlanma Aracı
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
                Pegasus Hava Taşımacılığı A.Ş. (<strong>PGSUS</strong>), yurt
                dışındaki nitelikli yatırımcılara yönelik{" "}
                <strong>149.900.000 ABD doları</strong> nominal değerli tahvil
                ihracının tamamlandığını açıkladı.
              </p>

              <p>
                Şirket, tahvil satışından sağlanan tutarların 16 Temmuz 2026
                tarihinde hesaplarına aktarıldığını bildirdi. Yeni tahviller
                Euronext Dublin’de işlem görecek ve ihraçtan 40 gün sonra mevcut
                500 milyon dolarlık tahvil serisiyle birleştirilecek.
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
                  Pegasus’un 9 Temmuz 2026 tarihinde duyurduğu yeni tahvil ihracı
                  tamamlandı. Regulation S formatındaki tahviller yurt dışında
                  nitelikli yatırımcılara satıldı.
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">
                  İhracın tamamlanmasıyla satış bedelleri şirket hesaplarına
                  aktarıldı. Böylece daha önce planlanan borçlanma işlemi fiilen
                  sonuçlanmış oldu.
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

              <Section title="Tahvil ihracı nasıl tamamlandı?">
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
                  İşlem, Pegasus’a 149,9 milyon dolarlık yeni finansman kaynağı
                  sağladı. Bununla birlikte tahvil ihracı bir borçlanma işlemi
                  olduğu için likidite ve borçluluk etkisi birlikte
                  değerlendirilmelidir.
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

              <Section title="PGSUS tahvil ihracı hakkında kısa soru-cevap">
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
                  href="https://www.kap.org.tr/Bildirim/1634276"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="mt-2 inline-block font-medium text-slate-700 underline underline-offset-2"
                >
                  PGSUS — Orjinal Kap içeriği
                </a>
              </div>

              <HaberIlgiliBolumler
                slug={slug}
                baslik="PGSUS 149,9 Milyon Dolarlık Tahvil İhracını Tamamladı"
              />

              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm font-medium leading-7 text-amber-900 md:text-base">
                ⚠️ Bu haber bilgilendirme amacıyla hazırlanmıştır, yatırım
                tavsiyesi değildir. Tahvil ihracının etkisi; finansman maliyeti,
                vade, kur riski, fon kullanım alanı ve şirketin toplam borçluluk
                görünümüyle birlikte değerlendirilmelidir.
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