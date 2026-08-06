import Image from "next/image";
import Link from "@/components/NoPrefetchLink";
import type { Metadata } from "next";
import HaberIlgiliBolumler from "@/components/HaberIlgiliBolumler";
import AuthorBox from "@/components/AuthorBox";
import HaberAltKisim from "@/components/HaberAltKisim";

export const metadata: Metadata = {
  title: "Turkcell CDB Kredi Paketinde Faiz Oranını Revize Etti",
  description:
    "Turkcell, China Development Bank ile imzalanan kredi paketinin ikinci dilimini 1,23 milyar RMB'den 700 milyon RMB'ye revize etti. Faiz oranı masraflar dahil yüzde 4,98'den yüzde 4,30'a güncellendi.",
  alternates: {
    canonical:
      "https://www.hocaileborsa.com/haber/turkcell-cdb-kredi-paketi-faiz-orani-revize-edildi",
  },
  openGraph: {
    type: "article",
    images: [{ url: "https://www.hocaileborsa.com/turkcell-cdb-kredi-paketi-faiz-orani-revize-edildi.webp" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.hocaileborsa.com/turkcell-cdb-kredi-paketi-faiz-orani-revize-edildi.webp"],
  },
};

const haberDetaylari = [
  {
    baslik: "Kredi paketinin ikinci dilimi revize edildi",
    kapLink: "https://www.kap.org.tr/tr/Bildirim/1619301",
    metin:
      "Turkcell, China Development Bank ile imzalanan toplam 2,46 milyar RMB tutarındaki kredi paketinde ikinci dilimin yeniden düzenlendiğini açıkladı. Daha önce 1,23 milyar RMB olarak belirtilen ikinci dilim, 700 milyon RMB olarak revize edildi. Bu değişiklik, şirketin finansman kullanım miktarında güncellemeye gittiğini gösteriyor.",
  },
  {
    baslik: "Faiz oranı yüzde 4,30'a indirildi",
    kapLink: "https://www.kap.org.tr/tr/Bildirim/1619301",
    metin:
      "Açıklamada, ikinci dilime ait toplam yıllık sabit faiz oranının masraflar dahil yüzde 4,98 seviyesinden yüzde 4,30 seviyesine güncellendiği belirtildi. Faiz oranındaki düşüş, finansman maliyeti açısından olumlu okunabilecek bir gelişme. Ancak şirket, söz konusu oranın kullanım miktarı ve takvimine göre değişiklik gösterebileceğini de vurguladı.",
  },
  {
    baslik: "Vade ve geri ödeme planı değişmedi",
    kapLink: "https://www.kap.org.tr/tr/Bildirim/1619301",
    metin:
      "Turkcell, kredinin vadesi ve geri ödeme planında herhangi bir değişiklik olmadığını açıkladı. Bu nedenle haberin ana etkisi kredi vadesinden çok, kullanılan kredi diliminin tutarı ve faiz maliyetindeki güncelleme üzerinden değerlendirilmeli. Geri ödeme planının korunması, finansal takvim tarafında ek bir belirsizlik oluşmadığını gösteriyor.",
  },
  {
    baslik: "Yatırımcı açısından ne ifade ediyor?",
    kapLink: "https://www.kap.org.tr/tr/Bildirim/1619301",
    metin:
      "Bu KAP bildirimi, Turkcell'in finansman koşullarında maliyet tarafında iyileşmeye işaret ettiği için yatırımcılar açısından takip edilebilir. İkinci dilim tutarının düşürülmesi kredi kullanım hacmini azaltırken, faiz oranının aşağı çekilmesi borçlanma maliyetini destekleyici bir unsur olarak öne çıkıyor. Şirketin yüksek yatırım ve altyapı harcaması gerektiren faaliyet alanı dikkate alındığında, finansman maliyetindeki her güncelleme piyasa tarafından yakından izlenir.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "Turkcell CDB Kredi Paketinde Faiz Oranını Revize Etti",
  description:
    "Turkcell, China Development Bank ile imzalanan kredi paketinin ikinci dilimini 1,23 milyar RMB'den 700 milyon RMB'ye revize etti. Faiz oranı masraflar dahil yüzde 4,98'den yüzde 4,30'a güncellendi.",
  datePublished: "2026-06-22T13:00:00+03:00",
  dateModified: "2026-06-22T13:00:00+03:00",
  url: "https://www.hocaileborsa.com/haber/turkcell-cdb-kredi-paketi-faiz-orani-revize-edildi",
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
  image: "https://www.hocaileborsa.com/turkcell-cdb-kredi-paketi-faiz-orani-revize-edildi.webp",
  inLanguage: "tr",
};

export default function TurkcellKrediRevizyonuPage() {
  return (
    <main className="min-h-screen bg-[#f8fafc] px-4 py-6 md:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="mx-auto max-w-4xl">
        <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_2px_16px_rgba(15,23,42,0.07)]">
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-zinc-100">
            <Image
              src="/turkcell-cdb-kredi-paketi-faiz-orani-revize-edildi.webp"
              alt="Turkcell CDB kredi paketi faiz oranı revizyonu"
              fill

              sizes="(min-width: 1024px) 896px, 100vw"
className="object-cover"
            />
          </div>

          <div className="p-6 md:p-10">
            <h1 className="text-2xl font-bold leading-tight tracking-tight text-slate-900 md:text-3xl lg:text-4xl">
              Turkcell CDB Kredi Paketinde Faiz Oranını Revize Etti
            </h1>

            <div className="mb-4 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center rounded-md bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700 ring-1 ring-inset ring-blue-600/20">
                Şirket Haberleri
              </span>
              <time dateTime="2026-06-22" className="text-sm text-slate-500">
                22 Haziran 2026
              </time>
              <span className="text-slate-300">·</span>
              <Link
                href="/yazar/erman-hoca"
                className="text-sm font-semibold text-slate-500 hover:text-blue-600"
              >
                Erman Hoca
              </Link>
            </div>

            <div className="mt-6 space-y-6 text-base leading-8 text-slate-700 md:text-lg">
              <p>
                Turkcell, China Development Bank ile imzalanan kredi paketinin
                ikinci diliminde tutar ve faiz oranı revizyonuna gidildiğini
                duyurdu. Şirketin KAP açıklamasına göre, ikinci dilim 1,23
                milyar RMB&apos;den 700 milyon RMB&apos;ye düşürülürken, masraflar dahil
                yıllık sabit faiz oranı yüzde 4,98&apos;den yüzde 4,30&apos;a indirildi.
              </p>

              <div className="space-y-5">
                {haberDetaylari.map((haber) => (
                  <section
                    key={haber.baslik}
                    className="rounded-xl border border-slate-200 bg-slate-50 p-4"
                  >
                    <h2 className="text-base font-semibold text-slate-800">
                      {haber.baslik}
                    </h2>
                    <p className="mt-1.5 text-sm text-slate-600 leading-relaxed">
                      {haber.metin}
                    </p>
                    <a
                      href={haber.kapLink}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="mt-3 inline-flex text-sm font-medium text-slate-500 underline underline-offset-2 transition hover:text-slate-700"
                    >
                      Orijinal KAP bildirimi
                    </a>
                  </section>
                ))}
              </div>

              <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm font-medium leading-7 text-emerald-900 md:text-base">
                Finansman maliyetindeki düşüş Turkcell açısından olumlu
                okunabilir. Ancak kredi diliminin tutarının azaltılması ve faiz
                oranının kullanım miktarı ile takvime göre değişebileceği notu
                birlikte değerlendirilmelidir.
              </div>
              <HaberIlgiliBolumler
                slug="turkcell-cdb-kredi-paketi-faiz-orani-revize-edildi"
                baslik="Turkcell CDB Kredi Paketinde Faiz Oranını Revize Etti"
              />

              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm font-medium leading-7 text-amber-900 md:text-base">
                ⚠️ Bu haber bilgilendirme amaçlıdır, yatırım tavsiyesi değildir.
              </div>
            </div>
          </div>
          <HaberAltKisim href="/haber/turkcell-cdb-kredi-paketi-faiz-orani-revize-edildi" />

          <AuthorBox />
        </article>
      </div>
    </main>
  );
}
