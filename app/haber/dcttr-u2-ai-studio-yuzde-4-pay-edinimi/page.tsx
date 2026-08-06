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

const slug = "dcttr-u2-ai-studio-yuzde-4-pay-edinimi";
const haberUrl = `https://www.hocaileborsa.com/haber/${slug}`;
const haberGorsel =
  "https://www.hocaileborsa.com/dcttr-u2-ai-studio-yuzde-4-pay-edinimi.webp";

export const metadata: Metadata = {
  title: "DCTTR, U2 AI Studio’da %4 Pay Edinme Kararı Aldı",
  description:
    "DCTTR, TRK Teknoloji’de sahip olduğu %4 payı takas yöntemiyle U2 AI Studio’ya devrederek U2 AI Studio sermayesinin %4’ünü temsil eden pay edinme kararı aldı.",
  alternates: {
    canonical: haberUrl,
  },
  openGraph: {
    type: "article",
    title: "DCTTR, U2 AI Studio’da %4 Pay Edinme Kararı Aldı",
    description:
      "DCTTR, TRK Teknoloji paylarını takas yöntemiyle U2 AI Studio’ya devrederek yapay zekâ ve ileri teknoloji alanındaki yatırım stratejisini genişletiyor.",
    url: haberUrl,
    images: [
      {
        url: haberGorsel,
        width: 1200,
        height: 675,
        alt: "DCTTR U2 AI Studio yüzde 4 pay edinimi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DCTTR, U2 AI Studio’da %4 Pay Edinme Kararı Aldı",
    description:
      "DCTTR, TRK Teknoloji’deki %4 payını U2 AI Studio paylarıyla takas etme kararı aldı.",
    images: [haberGorsel],
  },
};

const ozetKartlari = [
  {
    baslik: "Edinilecek Pay",
    deger: "%4",
    aciklama: "U2 AI Studio sermayesini temsil eden oran",
  },
  {
    baslik: "Devredilecek Pay",
    deger: "%4",
    aciklama: "TRK Teknoloji’de sahip olunan pay",
  },
  {
    baslik: "Yöntem",
    deger: "Takas",
    aciklama: "Pay değişimi yöntemiyle işlem yapılacak",
  },
  {
    baslik: "Alan",
    deger: "Yapay Zekâ",
    aciklama: "Fintek, savunma, İK, uyum ve tarım teknolojileri",
  },
];

const islemDetaylari = [
  {
    etiket: "Şirket",
    deger: "DCT Trading Dış Ticaret A.Ş.",
  },
  {
    etiket: "Hisse Kodu",
    deger: "DCTTR",
  },
  {
    etiket: "Yönetim Kurulu Karar Tarihi",
    deger: "09.07.2026",
  },
  {
    etiket: "Devredilecek Finansal Duran Varlık",
    deger: "TRK Teknoloji Yazılım Arge A.Ş.",
  },
  {
    etiket: "TRK Teknoloji Faaliyet Alanı",
    deger: "Yapay zekâ teknolojisi geliştirmek",
  },
  {
    etiket: "Devredilecek Pay Oranı",
    deger: "%4",
  },
  {
    etiket: "Edinilecek Finansal Duran Varlık",
    deger: "U2 AI Studio Teknoloji A.Ş.",
  },
  {
    etiket: "U2 AI Studio Sermayesi",
    deger: "50.000.000 TL",
  },
  {
    etiket: "Edinilecek Nominal Pay",
    deger: "2.000.000 TL",
  },
  {
    etiket: "Edinilecek Pay Oranı",
    deger: "%4",
  },
  {
    etiket: "İşlem Yöntemi",
    deger: "Karşılıklı müzakere yöntemiyle pay takası",
  },
  {
    etiket: "Değerleme Raporu",
    deger: "Düzenlenmedi",
  },
];

const u2Alanlari = [
  "Finansal teknolojiler",
  "Savunma sanayii",
  "İnsan kaynakları",
  "Denetim ve uyum",
  "Sürdürülebilirlik",
  "Tarım teknolojileri",
];

const u2Cozumleri = [
  {
    baslik: "Kurumsal Dönüşüm Modeli",
    metin: "Yönetim, eğitim, sınav ve ölçme-değerlendirme süreçlerini dijitalleştiren yapay zekâ destekli insan kaynakları platformu.",
  },
  {
    baslik: "U2 Carbon",
    metin: "Avrupa Birliği Sınırda Karbon Düzenleme Mekanizması kapsamındaki emisyon hesaplama ve raporlama süreçlerine yönelik SaaS platformu.",
  },
  {
    baslik: "Adaletopia",
    metin: "Mevzuat ve içtihat araması yapan, hukuk profesyonellerinin araştırma ve analiz süreçlerini hızlandıran yapay zekâ destekli hukuk asistanı.",
  },
  {
    baslik: "AI Finance IQ",
    metin: "Halka açık şirketler ve sermaye piyasası kurumlarına yönelik izahname, halka arz başvuru ve mevzuat uyum kontrollerini otomatikleştiren platform.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "DCTTR, U2 AI Studio’da %4 Pay Edinme Kararı Aldı",
  description:
    "DCTTR, TRK Teknoloji’de sahip olduğu %4 payı takas yöntemiyle U2 AI Studio’ya devrederek U2 AI Studio sermayesinin %4’ünü temsil eden pay edinme kararı aldı.",
  image: haberGorsel,
  datePublished: "2026-07-09T15:30:24+03:00",
  dateModified: "2026-07-09T15:30:24+03:00",
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

export default function DcttrU2AiStudioPayEdinimiPage() {
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
              src="/dcttr-u2-ai-studio-yuzde-4-pay-edinimi.webp"
              alt="DCTTR U2 AI Studio yüzde 4 pay edinimi"
              fill

              sizes="(min-width: 1024px) 896px, 100vw"
className="object-cover"
              priority
            />
          </div>

          <div className="p-6 md:p-10">
            <h1 className="text-2xl font-bold leading-tight tracking-tight text-slate-900 md:text-3xl lg:text-4xl">
              DCTTR, U2 AI Studio’da %4 Pay Edinme Kararı Aldı
            </h1>

            <div className="mb-5 mt-3 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center rounded-md bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700 ring-1 ring-inset ring-blue-600/20">
                Şirket Haberi
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
                DCT Trading Dış Ticaret A.Ş. (<strong>DCTTR</strong>), yapay
                zekâ ve ileri teknoloji alanındaki yatırım stratejisi kapsamında
                yeni pay takası kararı aldığını açıkladı. Şirket, TRK Teknoloji
                Yazılım Arge A.Ş. sermayesinde sahip olduğu{" "}
                <strong>%4 oranındaki payı</strong> U2 AI Studio Teknoloji A.Ş.’ye
                devredecek.
              </p>

              <p>
                Karşılığında DCTTR, U2 AI Studio sermayesini temsil eden{" "}
                <strong>%4 oranında pay</strong> edinecek. İşlem, nakit satıştan
                ziyade <strong>pay değişimi/takas yöntemi</strong> ile
                gerçekleştirilecek.
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
                  DCTTR yönetim kurulu, 9 Temmuz 2026 tarihli kararıyla TRK
                  Teknoloji’deki %4 payın U2 AI Studio’ya devredilmesine ve
                  bunun karşılığında U2 AI Studio’da %4 pay edinilmesine karar
                  verdi. İşlem tamamlandığında TRK Teknoloji paylarının maliki
                  U2 AI Studio olacak, DCTTR ise U2 AI Studio sermayesinde %4
                  pay sahibi konumuna gelecek.
                </p>
              </Section>

              <Section title="İşlemin ana detayları">
                <div className="overflow-x-auto">
                  <table className="min-w-full overflow-hidden rounded-xl border border-slate-200 text-sm">
                    <tbody>
                      {islemDetaylari.map((item, index) => (
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

              <Section title="U2 AI Studio hangi alanlarda faaliyet gösteriyor?">
                <p className="text-sm leading-7 text-slate-600 md:text-base">
                  U2 AI Studio; kamu kurumları ve özel sektör kuruluşları için
                  yapay zekâ tabanlı kurumsal teknolojiler geliştiren bir şirket
                  topluluğunun çatı şirketi olarak açıklandı.
                </p>

                <div className="mt-4 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
                  {u2Alanlari.map((item) => (
                    <div
                      key={item}
                      className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm font-bold text-emerald-900"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </Section>

              <Section title="Öne çıkan çözümler">
                <div className="grid gap-3">
                  {u2Cozumleri.map((item) => (
                    <div
                      key={item.baslik}
                      className="rounded-xl border border-slate-200 bg-slate-50 p-4"
                    >
                      <div className="font-bold text-slate-900">
                        {item.baslik}
                      </div>
                      <p className="mt-1 text-sm leading-7 text-slate-600">
                        {item.metin}
                      </p>
                    </div>
                  ))}
                </div>
              </Section>

              <Section title="Hisse açısından nasıl okunmalı?">
                <p className="text-sm leading-7 text-slate-600 md:text-base">
                  DCTTR’nin açıklaması, şirketin yapay zekâ ve ileri teknoloji
                  alanında yatırım tarafını genişletme isteğini gösteriyor.
                  İşlemde nakit bir satış bedeli öne çıkmıyor; yapı pay takası
                  üzerine kurulu.
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">
                  Edinilecek pay oranı %4 seviyesinde olduğu için finansal etki
                  sınırlı kalabilir. Buna karşılık U2 AI Studio’nun fintek,
                  savunma sanayii, sürdürülebilirlik, tarım teknolojileri ve
                  kurumsal yapay zekâ çözümleri gibi alanlarda konumlanması,
                  DCTTR’nin teknoloji temalı yatırım hikâyesi açısından dikkat
                  çeken taraf.
                </p>
              </Section>

              <Section title="Sırada ne var?">
                <p className="text-sm leading-7 text-slate-600 md:text-base">
                  İşlemin tamamlanmasına ilişkin gelişmeler ayrıca kamuoyu ile
                  paylaşılacak. Bundan sonraki süreçte pay takasının fiilen
                  tamamlanması, U2 AI Studio ile olası iş birlikleri ve yatırımın
                  şirket faaliyetlerine etkisi takip edilecek.
                </p>
              </Section>

              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm leading-7 text-slate-600">
                <div className="font-semibold text-slate-800">Kaynaklar</div>
                <div className="mt-2 flex flex-col gap-2">
                  <a
                    href="https://www.kap.org.tr/Bildirim/1630764"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="font-medium text-slate-700 underline underline-offset-2"
                  >
                    DCTTR — Takas yoluyla yeni ortaklık edinilmesi Orjinal Kap içeriği
                  </a>
                  <a
                    href="https://www.kap.org.tr/Bildirim/1630763"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="font-medium text-slate-700 underline underline-offset-2"
                  >
                    DCTTR — U2 AI Studio pay edinimi Orjinal Kap içeriği
                  </a>
                  <a
                    href="https://www.kap.org.tr/Bildirim/1630762"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="font-medium text-slate-700 underline underline-offset-2"
                  >
                    DCTTR — TRK Teknoloji pay devri Orjinal Kap içeriği
                  </a>
                </div>
              </div>

              <HaberIlgiliBolumler
                slug={slug}
                baslik="DCTTR, U2 AI Studio’da %4 Pay Edinme Kararı Aldı"
              />

              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm font-medium leading-7 text-amber-900 md:text-base">
                ⚠️ Bu haber bilgilendirme amacıyla hazırlanmıştır, yatırım
                tavsiyesi değildir. Pay takası süreci ve işlemin tamamlanmasına
                ilişkin gelişmeler şirketin sonraki açıklamalarıyla birlikte
                takip edilmelidir.
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
