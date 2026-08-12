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

const slug = "yeotk-turk-ytong-mardin-ges-sozlesmesi";
const haberUrl = `https://www.hocaileborsa.com/haber/${slug}`;
const haberGorsel =
  "https://www.hocaileborsa.com/yeotk-turk-ytong-mardin-ges-sozlesmesi.webp";

export const metadata: Metadata = {
  title: "YEOTK Türk Ytong ile 8,44 Milyon Dolarlık GES Sözleşmesi İmzaladı",
  description:
    seoAciklamasi("YEOTK, Türk Ytong Sanayi A.Ş. ile Mardin’de anahtar teslim kurulacak güneş santrali için 8,44 milyon dolar + KDV tutarında sözleşme imzaladı.", "Haberde gelişmenin ayrıntıları, açıklanan veriler ve yatırımcıların izleyebileceği temel noktalar yer alıyor."),
  alternates: {
    canonical: haberUrl,
  },
  openGraph: {
    type: "article",
    title: "YEOTK Türk Ytong ile 8,44 Milyon Dolarlık GES Sözleşmesi İmzaladı",
    description:
      "YEOTK, Türk Ytong’un enerji ihtiyacını karşılayacak Mardin GES projesinin mühendislik, ekipman tedariği, kurulum, test ve devreye alma süreçlerini yürütecek.",
    url: haberUrl,
    images: [
      {
        url: haberGorsel,
        width: 1200,
        height: 675,
        alt: "YEOTK Türk Ytong Mardin GES sözleşmesi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "YEOTK Türk Ytong ile 8,44 Milyon Dolarlık GES Sözleşmesi İmzaladı",
    description:
      "YEOTK, Mardin’de anahtar teslim GES kurulumu için Türk Ytong ile 8,44 milyon dolarlık sözleşme imzaladı.",
    images: [haberGorsel],
  },
};

const ozetKartlari = [
  {
    baslik: "Sözleşme Tutarı",
    deger: "8,44 Mn $",
    aciklama: "KDV hariç sözleşme büyüklüğü",
  },
  {
    baslik: "Müşteri",
    deger: "Türk Ytong",
    aciklama: "Türk Ytong Sanayi A.Ş.",
  },
  {
    baslik: "Proje",
    deger: "Mardin GES",
    aciklama: "Anahtar teslim güneş santrali kurulumu",
  },
  {
    baslik: "Planlanan Tamamlanma",
    deger: "2027",
    aciklama: "Geliştirme ve idari onay süreçleri dahil",
  },
];

const haberDetaylari = [
  { etiket: "Şirket", deger: "YEO Teknoloji Enerji ve Endüstri A.Ş." },
  { etiket: "Hisse Kodu", deger: "YEOTK" },
  { etiket: "Müşteri", deger: "Türk Ytong Sanayi A.Ş." },
  { etiket: "İş İlişkisi Başlangıç Tarihi", deger: "10.07.2026" },
  { etiket: "Proje Lokasyonu", deger: "Mardin" },
  { etiket: "Sözleşme Tutarı", deger: "8.444.688 ABD doları + KDV" },
  { etiket: "Proje Türü", deger: "Anahtar teslim güneş santrali kurulumu" },
  {
    etiket: "Kapsam",
    deger: "Mühendislik, ekipman tedariği, kurulum, test ve devreye alma",
  },
  { etiket: "Planlanan Tamamlanma", deger: "2027 yılı içerisinde" },
  { etiket: "Faaliyetlere Etki", deger: "Olumlu" },
];

const kapsamMaddeleri = [
  "Güneş santrali mühendislik çalışmaları",
  "Ekipman tedariği",
  "Kurulum süreçleri",
  "Test ve devreye alma işlemleri",
  "İdari onayları içeren geliştirme süreçleri",
];

const takipBasliklari = [
  "Projenin idari onay süreci",
  "Kurulum takvimi",
  "2027 tamamlanma hedefi",
  "Gelire yansıma dönemleri",
  "YEOTK’nin yeni GES sözleşme akışı",
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "YEOTK Türk Ytong ile 8,44 Milyon Dolarlık GES Sözleşmesi İmzaladı",
  description:
    "YEOTK, Türk Ytong Sanayi A.Ş. ile Mardin’de anahtar teslim kurulacak güneş santrali için 8,44 milyon dolar + KDV tutarında sözleşme imzaladı.",
  image: haberGorsel,
  datePublished: "2026-07-10T09:00:51+03:00",
  dateModified: "2026-07-10T09:00:51+03:00",
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

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:p-6">
      <h2 className="mb-4 text-xl font-bold tracking-tight text-slate-900">
        {title}
      </h2>
      {children}
    </section>
  );
}

export default function YeotkTurkYtongMardinGesPage() {
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
              src="/yeotk-turk-ytong-mardin-ges-sozlesmesi.webp"
              alt="YEOTK Türk Ytong Mardin GES sözleşmesi"
              fill

              sizes="(min-width: 1024px) 896px, 100vw"
className="object-cover"
              priority
            />
          </div>

          <div className="p-6 md:p-10">
            <h1 className="text-2xl font-bold leading-tight tracking-tight text-slate-900 md:text-3xl lg:text-4xl">
              YEOTK Türk Ytong ile 8,44 Milyon Dolarlık GES Sözleşmesi İmzaladı
            </h1>

            <div className="mb-5 mt-3 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center rounded-md bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700 ring-1 ring-inset ring-blue-600/20">
                Yeni İş İlişkisi
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
                YEO Teknoloji Enerji ve Endüstri A.Ş. (<strong>YEOTK</strong>),
                Türk Ytong Sanayi A.Ş. ile yeni güneş enerjisi santrali
                sözleşmesi imzaladığını açıkladı. Sözleşme, Mardin’de anahtar
                teslim kurulacak güneş santralinin inşaatına yönelik olarak
                imzalandı.
              </p>

              <p>
                KAP açıklamasına göre sözleşme tutarı <strong>8.444.688 ABD doları + KDV</strong> seviyesinde. Proje kapsamında YEOTK; mühendislik, ekipman tedariği, kurulum, test ve devreye alma süreçlerini yürütecek.
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                {ozetKartlari.map((item) => (
                  <div key={item.baslik} className="rounded-2xl border border-blue-200 bg-blue-50 p-4">
                    <div className="text-sm font-semibold text-blue-800">{item.baslik}</div>
                    <div className="mt-1 text-2xl font-bold text-blue-950">{item.deger}</div>
                    <div className="mt-1 text-sm text-blue-800">{item.aciklama}</div>
                  </div>
                ))}
              </div>

              <Section title="Ne oldu?">
                <p className="text-sm leading-7 text-slate-600 md:text-base">
                  YEOTK, Türk Ytong Sanayi A.Ş.’nin enerji ihtiyacını karşılamak üzere Mardin’de kurulacak güneş santrali için anahtar teslim sözleşme imzaladı. Projenin kurulumunun, idari onayları da içeren geliştirme süreçleriyle birlikte 2027 yılı içerisinde tamamlanması planlanıyor.
                </p>
              </Section>

              <Section title="Sözleşmenin ana detayları">
                <div className="overflow-x-auto">
                  <table className="min-w-full overflow-hidden rounded-xl border border-slate-200 text-sm">
                    <tbody>
                      {haberDetaylari.map((item, index) => (
                        <tr key={item.etiket} className={index % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                          <th className="px-4 py-3 text-left font-semibold text-slate-800">{item.etiket}</th>
                          <td className="px-4 py-3 font-bold text-slate-700">{item.deger}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Section>

              <Section title="YEOTK hangi işleri üstlenecek?">
                <p className="text-sm leading-7 text-slate-600 md:text-base">
                  Sözleşme anahtar teslim yapı üzerine kurulu. Bu nedenle sadece ekipman tedariki değil, santralin kuruluma hazır hale gelmesi, test edilmesi ve devreye alınması da YEOTK’nin sorumluluk alanında olacak.
                </p>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {kapsamMaddeleri.map((item) => (
                    <div key={item} className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm font-bold leading-6 text-emerald-900">
                      {item}
                    </div>
                  ))}
                </div>
              </Section>

              <Section title="Hisse açısından nasıl okunmalı?">
                <p className="text-sm leading-7 text-slate-600 md:text-base">
                  YEOTK için döviz bazlı yeni GES sözleşmesi, şirketin yenilenebilir enerji ve anahtar teslim proje tarafındaki iş akışını destekleyen pozitif bir gelişme. Sözleşme tutarı, yeni iş ilişkisi başlığı altında şirket faaliyetlerine olumlu etki beklentisiyle açıklandı.
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">
                  Projenin 2027 yılı içerisinde tamamlanmasının planlanması, gelir etkisinin teslimat ve ilerleme takvimine göre dönemsel olarak izlenmesi gerektiğini gösteriyor.
                </p>
              </Section>

              <Section title="Takip edilecek başlıklar">
                <div className="grid gap-3">
                  {takipBasliklari.map((item) => (
                    <div key={item} className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm font-semibold leading-6 text-slate-700">
                      {item}
                    </div>
                  ))}
                </div>
              </Section>

              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm leading-7 text-slate-600">
                <div className="font-semibold text-slate-800">Kaynak</div>
                <a href="https://www.kap.org.tr/Bildirim/1631374" target="_blank" rel="noopener noreferrer nofollow" className="mt-2 inline-block font-medium text-slate-700 underline underline-offset-2">
                  YEOTK — Orjinal Kap içeriği
                </a>
              </div>

              <HaberIlgiliBolumler slug={slug} baslik="YEOTK Türk Ytong ile 8,44 Milyon Dolarlık GES Sözleşmesi İmzaladı" />

              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm font-medium leading-7 text-amber-900 md:text-base">
                ⚠️ Bu haber bilgilendirme amacıyla hazırlanmıştır, yatırım tavsiyesi değildir. Sözleşmenin finansal etkisi, projenin ilerleme takvimi ve şirketin sonraki açıklamalarıyla birlikte takip edilmelidir.
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
