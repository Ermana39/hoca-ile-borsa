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

const slug = "vestl-eurobondlar-icin-finansal-danisman-atadi";
const haberUrl = `https://www.hocaileborsa.com/haber/${slug}`;
const haberGorsel =
  "https://www.hocaileborsa.com/vestl-eurobondlar-icin-finansal-danisman-atadi.webp";

export const metadata: Metadata = {
  title: "VESTL Eurobondlar İçin Finansal Danışman Atadı",
  description:
    "VESTL, XS2817919587 ve US92548MAA53 ISIN kodlu yurt dışı tahvillerine ilişkin stratejik alternatiflerin değerlendirilmesi için Houlihan Lokey’i finansal danışman olarak atadı.",
  alternates: {
    canonical: haberUrl,
  },
  openGraph: {
    type: "article",
    title: "VESTL Eurobondlar İçin Finansal Danışman Atadı",
    description:
      "Vestel Elektronik, yurt dışı tahvilleri için stratejik alternatifleri değerlendirmek ve sürdürülebilir bilanço yapısı oluşturmak amacıyla finansal danışman atadı.",
    url: haberUrl,
    images: [
      {
        url: haberGorsel,
        width: 1200,
        height: 675,
        alt: "VESTL Eurobondlar için finansal danışman atadı",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "VESTL Eurobondlar İçin Finansal Danışman Atadı",
    description:
      "VESTL, yurt dışı tahvilleri için Houlihan Lokey’i finansal danışman olarak görevlendirdi.",
    images: [haberGorsel],
  },
};

const ozetKartlari = [
  {
    baslik: "Şirket",
    deger: "VESTL",
    aciklama: "Vestel Elektronik Sanayi ve Ticaret A.Ş.",
  },
  {
    baslik: "Konu",
    deger: "Eurobond",
    aciklama: "Yurt dışı tahviller için stratejik alternatifler",
  },
  {
    baslik: "Danışman",
    deger: "Houlihan Lokey",
    aciklama: "Finansal danışman olarak atandı",
  },
  {
    baslik: "Amaç",
    deger: "Bilanço Yapısı",
    aciklama: "Sürdürülebilir sermaye yapısı hedefi",
  },
];

const haberDetaylari = [
  {
    etiket: "Şirket",
    deger: "Vestel Elektronik Sanayi ve Ticaret A.Ş.",
  },
  {
    etiket: "Hisse Kodu",
    deger: "VESTL",
  },
  {
    etiket: "Açıklama Tarihi",
    deger: "09.07.2026",
  },
  {
    etiket: "Bildirim Konusu",
    deger: "Finansal danışman atanması",
  },
  {
    etiket: "Danışman",
    deger: "Houlihan Lokey",
  },
  {
    etiket: "İlgili Borçlanma Araçları",
    deger: "XS2817919587 ve US92548MAA53 ISIN kodlu Eurobondlar",
  },
  {
    etiket: "Açıklama Yeri",
    deger: "Euronext Dublin açıklaması KAP üzerinden paylaşıldı",
  },
  {
    etiket: "Amaç",
    deger: "Stratejik alternatiflerin değerlendirilmesi ve sürdürülebilir bilanço yapısı",
  },
];

const izlenecekBasliklar = [
  "Eurobond yatırımcılarıyla yürütülecek görüşmeler",
  "Stratejik alternatiflere ilişkin olası açıklamalar",
  "Borçlanma araçlarının vade ve ödeme yapısına yönelik gelişmeler",
  "Sermaye yapısı ve bilanço üzerindeki olası etkiler",
  "Şirketin Euronext Dublin ve KAP üzerinden yapacağı yeni bildirimler",
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "VESTL Eurobondlar İçin Finansal Danışman Atadı",
  description:
    "VESTL, XS2817919587 ve US92548MAA53 ISIN kodlu yurt dışı tahvillerine ilişkin stratejik alternatiflerin değerlendirilmesi için Houlihan Lokey’i finansal danışman olarak atadı.",
  image: haberGorsel,
  datePublished: "2026-07-09T12:47:52+03:00",
  dateModified: "2026-07-09T12:47:52+03:00",
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

export default function VestlEurobondFinansalDanismanPage() {
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
              src="/vestl-eurobondlar-icin-finansal-danisman-atadi.webp"
              alt="VESTL Eurobondlar için finansal danışman atadı"
              fill

              sizes="(min-width: 1024px) 896px, 100vw"
className="object-cover"
              priority
            />
          </div>

          <div className="p-6 md:p-10">
            <h1 className="text-2xl font-bold leading-tight tracking-tight text-slate-900 md:text-3xl lg:text-4xl">
              VESTL Eurobondlar İçin Finansal Danışman Atadı
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
                Vestel Elektronik Sanayi ve Ticaret A.Ş. (<strong>VESTL</strong>),
                yurt dışı tahvilleri için finansal danışman atadığını açıkladı.
                Şirketin KAP bildirimine göre, <strong>XS2817919587</strong> ve{" "}
                <strong>US92548MAA53</strong> ISIN kodlu Eurobondlara ilişkin
                stratejik alternatiflerin değerlendirilmesi için{" "}
                <strong>Houlihan Lokey</strong> görevlendirildi.
              </p>

              <p>
                Açıklamada, finansal danışman atamasının sürdürülebilir bilanço
                yapısı oluşturulması amacıyla yapıldığı belirtildi. Şirket ve
                danışmanı, Eurobond yatırımcılarını önemli gelişmeler konusunda
                bilgilendirmeye devam edecek.
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
                  VESTL, Euronext Dublin’de yapılan açıklamayı KAP üzerinden
                  paylaştı. Açıklamada, şirketin yurt dışı tahvillerine ilişkin
                  stratejik alternatifleri değerlendirmek ve sürdürülebilir
                  sermaye yapısı oluşturmak amacıyla Houlihan Lokey’i finansal
                  danışman olarak atadığı ifade edildi.
                </p>
              </Section>

              <Section title="Açıklamanın ana detayları">
                <div className="overflow-x-auto">
                  <table className="min-w-full overflow-hidden rounded-xl border border-slate-200 text-sm">
                    <tbody>
                      {haberDetaylari.map((item, index) => (
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

              <Section title="Hisse açısından nasıl okunmalı?">
                <p className="text-sm leading-7 text-slate-600 md:text-base">
                  Bu açıklama doğrudan yeni bir finansman sağlandığı ya da borç
                  yapısında kesin bir değişiklik yapıldığı anlamına gelmiyor.
                  Ancak Eurobondlar için finansal danışman atanması, şirketin
                  borçlanma araçları tarafında seçenekleri masaya aldığını
                  gösteriyor.
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">
                  VESTL tarafında bundan sonraki süreçte Eurobond yatırımcıları
                  ile yapılacak görüşmeler, olası yeniden yapılandırma başlıkları
                  ve bilanço üzerindeki etkiler öne çıkacak.
                </p>
              </Section>

              <Section title="Takip edilecek başlıklar">
                <div className="grid gap-3">
                  {izlenecekBasliklar.map((item) => (
                    <div
                      key={item}
                      className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm font-semibold leading-6 text-slate-700"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </Section>

              <Section title="Neden önemli?">
                <p className="text-sm leading-7 text-slate-600 md:text-base">
                  Eurobondlar şirketlerin döviz cinsi borçlanma yapısında önemli
                  yer tutabilir. Bu nedenle finansal danışman atanması, özellikle
                  borç yönetimi, sermaye yapısı ve yatırımcı iletişimi açısından
                  dikkat çeken bir adım olarak öne çıkıyor.
                </p>
              </Section>

              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm leading-7 text-slate-600">
                <div className="font-semibold text-slate-800">Kaynak</div>
                <a
                  href="https://www.kap.org.tr/Bildirim/1630540"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="mt-2 inline-block font-medium text-slate-700 underline underline-offset-2"
                >
                  VESTL — Orjinal Kap içeriği
                </a>
              </div>

              <HaberIlgiliBolumler
                slug={slug}
                baslik="VESTL Eurobondlar İçin Finansal Danışman Atadı"
              />

              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm font-medium leading-7 text-amber-900 md:text-base">
                ⚠️ Bu haber bilgilendirme amacıyla hazırlanmıştır, yatırım
                tavsiyesi değildir. Eurobondlara ilişkin süreç, şirketin sonraki
                KAP açıklamalarıyla birlikte takip edilmelidir.
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
