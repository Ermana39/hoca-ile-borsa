import { seoAciklamasi } from "@/lib/seo-metadata";
import Image from "next/image";
import Link from "@/components/NoPrefetchLink";
import type { Metadata } from "next";
import HaberIlgiliBolumler from "@/components/HaberIlgiliBolumler";
import AuthorBox from "@/components/AuthorBox";
import HaberAltKisim from "@/components/HaberAltKisim";

export const metadata: Metadata = {
  title: "TRALT’ten 69,9 Milyon Dolarlık Maden Ruhsatı Hamlesi",
  description:
    seoAciklamasi("TRALT, Zenit Madencilik bünyesindeki altı işletme ruhsatı ve Sındırgı cevher işleme tesisinin alınması için mutabakat zaptı imzaladı.", "Haberde gelişmenin ayrıntıları, açıklanan veriler ve yatırımcıların izleyebileceği temel noktalar yer alıyor."),
  alternates: {
    canonical:
      "https://www.hocaileborsa.com/haber/tralt-zenit-madencilik-ruhsat-tesis-mutabakat-zapti",
  },
  openGraph: {
    type: "article",
    images: [{ url: "https://www.hocaileborsa.com/tralt-zenit-madencilik-ruhsat-tesis-mutabakat-zapti.webp" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.hocaileborsa.com/tralt-zenit-madencilik-ruhsat-tesis-mutabakat-zapti.webp"],
  },
};

const haberDetaylari = [
  {
    baslik: "Ne oldu?",
    metin:
      "Türk Altın İşletmeleri A.Ş. (TRALT), Zenit Madencilik Sanayi ve Ticaret A.Ş. ile Zenit Madencilik’in hakim hissedarı Özaltın İnşaat Ticaret ve Sanayi A.Ş. arasında mutabakat zaptı imzalandığını açıkladı. Mutabakat, Zenit Madencilik bünyesindeki Balıkesir ve Bilecik illerinde bulunan toplam altı adet IV. Grup işletme ruhsatı ile Balıkesir Sındırgı’daki cevher işleme tesisinin 69,9 milyon dolar bedelle satın alınmasına yönelik süreci kapsıyor.",
  },
  {
    baslik: "Bu ne anlama geliyor?",
    metin:
      "Mutabakat zaptı, tarafların belirli bir işlem için temel niyet ve çerçevede anlaştığını gösteren ön anlaşma niteliğindedir. Bu aşamada işlem tamamen bitmiş sayılmaz; çünkü satın alma süreci hukuki ve finansal inceleme, gerekli izin ve onaylar ile hisse devir sözleşmesinin imzalanması gibi şartlara bağlıdır. TRALT açısından haberin önemi, potansiyel maden ruhsatı, tesis, ekipman, laboratuvar ve personel devriyle şirketin operasyonel alanını genişletebilecek bir işlem olmasıdır.",
  },
  {
    baslik: "Şirket hakkında",
    metin:
      "Türk Altın İşletmeleri A.Ş. (TRALT), altın ve değerli madenler alanında faaliyet gösteren bir madencilik şirketidir. Şirketin KAP açıklamasında Balıkesir İvrindi Güneş Projesi ve Çanakkale Karapınar Projesi gibi mevcut madencilik faaliyetleriyle bağlantılı projelere atıf yapıldı.",
  },
  {
    baslik: "Değerlendirme",
    metin:
      "Madencilik şirketlerinde ruhsat ve cevher işleme tesisi alımları, yalnızca arazi ya da tesis satın alma anlamına gelmez; aynı zamanda rezerv, işleme kapasitesi, izinler, ekipman ve operasyonel süreklilik başlıklarını da içerir. Bu nedenle böyle işlemlerde yatırımcı açısından en kritik nokta, açıklanan rezerv miktarından çok devralınacak varlıkların üretime ne kadar hızlı ve hangi maliyetle katkı sağlayabileceğidir. Mutabakat zaptı olumlu bir niyet beyanı olsa da kesin satın alma tamamlanmadan finansal etki netleşmiş sayılmaz.",
  },
  {
    baslik: "Sırada ne var?",
    metin:
      "Sürecin tamamlanması için ticari, finansal, operasyonel ve idari risklere ilişkin incelemelerin olumlu sonuçlanması, gerekli izin ve onayların alınması ve hisse devir sözleşmesinin imzalanması gerekiyor. Bu şartlar tamamlanmadan işlem kesinleşmiş değildir. Şirket, süreçteki önemli gelişmeleri sermaye piyasası mevzuatı kapsamında kamuoyu ile paylaşacağını bildirdi.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "TRALT’ten 69,9 Milyon Dolarlık Maden Ruhsatı Hamlesi",
  description:
    "TRALT, Zenit Madencilik bünyesindeki altı işletme ruhsatı ve Sındırgı cevher işleme tesisinin alınması için mutabakat zaptı imzaladı.",
  datePublished: "2026-06-25T08:35:53+03:00",
  dateModified: "2026-06-25T09:10:00+03:00",
  url: "https://www.hocaileborsa.com/haber/tralt-zenit-madencilik-ruhsat-tesis-mutabakat-zapti",
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
  image: "https://www.hocaileborsa.com/tralt-zenit-madencilik-ruhsat-tesis-mutabakat-zapti.webp",
  inLanguage: "tr",
};

export default function HaberPage() {
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
              src="/tralt-zenit-madencilik-ruhsat-tesis-mutabakat-zapti.webp"
              alt="TRALT’ten 69,9 Milyon Dolarlık Maden Ruhsatı Hamlesi"
              fill

              sizes="(min-width: 1024px) 896px, 100vw"
className="object-cover"
            />
          </div>

          <div className="p-6 md:p-10">
            <h1 className="text-2xl font-bold leading-tight tracking-tight text-slate-900 md:text-3xl lg:text-4xl">
              TRALT’ten 69,9 Milyon Dolarlık Maden Ruhsatı Hamlesi
            </h1>

            <div className="mb-4 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center rounded-md bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700 ring-1 ring-inset ring-blue-600/20">
                Şirket Haberleri
              </span>
              <time dateTime="2026-06-25" className="text-sm text-slate-500">
                25 Haziran 2026
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
                Türk Altın İşletmeleri A.Ş. (TRALT), Zenit Madencilik
                bünyesindeki bazı ruhsat sahaları ve cevher işleme tesisinin
                devralınmasına yönelik önemli bir mutabakat zaptı imzaladığını
                duyurdu. Açıklamada işlem bedelinin 69,9 milyon dolar olduğu
                belirtildi.
              </p>

              <div className="grid gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm leading-7 text-slate-700 md:grid-cols-2 md:text-base">
                <div>
                  <span className="font-semibold text-slate-900">
                    Şirket:
                  </span>{" "}
                  TRALT
                </div>
                <div>
                  <span className="font-semibold text-slate-900">
                    İşlem Türü:
                  </span>{" "}
                  Mutabakat zaptı
                </div>
                <div>
                  <span className="font-semibold text-slate-900">
                    İşlem Bedeli:
                  </span>{" "}
                  69.900.000 USD
                </div>
                <div>
                  <span className="font-semibold text-slate-900">
                    Kapsam:
                  </span>{" "}
                  Ruhsat sahaları ve tesis
                </div>
              </div>

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
                  </section>
                ))}
              </div>

              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm font-medium leading-7 text-slate-700 md:text-base">
                Kaynak: TRALT tarafından 25 Haziran 2026 tarihinde KAP&apos;a yapılan
                özel durum açıklaması.
                <br />
                <a
                  href="https://www.kap.org.tr/tr/Bildirim/1620469"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold underline"
                >
                  Orjinal Kap içeriği
                </a>
              </div>

              <HaberIlgiliBolumler
                slug="tralt-zenit-madencilik-ruhsat-tesis-mutabakat-zapti"
                baslik="TRALT’ten 69,9 Milyon Dolarlık Maden Ruhsatı Hamlesi"
              />

              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm font-medium leading-7 text-amber-900 md:text-base">
                ⚠️ Bu içerik bilgilendirme amaçlıdır, yatırım tavsiyesi değildir.
              </div>
            </div>
          </div>
          <HaberAltKisim href="/haber/tralt-zenit-madencilik-ruhsat-tesis-mutabakat-zapti" />

          <AuthorBox />
        </article>
      </div>
    </main>
  );
}
