import { seoAciklamasi } from "@/lib/seo-metadata";
import Image from "next/image";
import Link from "@/components/NoPrefetchLink";
import type { Metadata } from "next";
import HaberIlgiliBolumler from "@/components/HaberIlgiliBolumler";
import AuthorBox from "@/components/AuthorBox";
import HaberAltKisim from "@/components/HaberAltKisim";

export const metadata: Metadata = {
  title: "Turcas'a Shell & Turcas'tan 8 Milyon Dolar İmtiyazlı Temettü",
  description:
    seoAciklamasi("Turcas Holding, %30 oranındaki iştiraki Shell & Turcas Petrol A.Ş.'de sahip olduğu imtiyazlı paylar kapsamında 8 milyon ABD doları tutarında imtiyazlı temettü ödemesi alacağını açıkladı.", "Haberde gelişmenin ayrıntıları, açıklanan veriler ve yatırımcıların izleyebileceği temel noktalar yer alıyor."),
  alternates: {
    canonical:
      "https://www.hocaileborsa.com/haber/trcas-shell-turcas-8-milyon-dolar-imtiyazli-temettu",
  },
  openGraph: {
    type: "article",
    images: [
      {
        url: "https://www.hocaileborsa.com/trcas-shell-turcas-8-milyon-dolar-imtiyazli-temettu.webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [
      "https://www.hocaileborsa.com/trcas-shell-turcas-8-milyon-dolar-imtiyazli-temettu.webp",
    ],
  },
};

const kapHaberleri = [
  {
    baslik: "Turcas Holding (TRCAS)",
    kapLink: "https://www.kap.org.tr/tr/Bildirim/1620030",
    metin:
      "Turcas Holding, %30 oranındaki iştiraki Shell & Turcas Petrol A.Ş.'nin 23 Haziran 2026 tarihinde yapılan Olağanüstü Genel Kurul Toplantısı'nda imtiyazlı temettü ödemesine karar verildiğini açıkladı. Açıklamaya göre Turcas Holding'in Shell & Turcas Petrol A.Ş.'de sahip olduğu imtiyazlı paylar kapsamında şirkete 8 milyon ABD doları tutarında imtiyazlı temettü ödemesi yapılacak.",
  },
  {
    baslik: "Ödeme Tarihi ve Tutar",
    kapLink: "https://www.kap.org.tr/tr/Bildirim/1620030",
    metin:
      "KAP açıklamasında imtiyazlı temettü ödemesinin 29 Haziran 2026 tarihinde yapılmasına karar verildiği belirtildi. 8 milyon ABD doları tutarındaki ödeme, şirket açısından döviz bazlı nakit girişi anlamına geldiği için finansal görünüm ve nakit pozisyonu açısından olumlu okunabilecek bir gelişme olarak öne çıkıyor.",
  },
  {
    baslik: "Yatırımcı Açısından Önemi",
    kapLink: "https://www.kap.org.tr/tr/Bildirim/1620030",
    metin:
      "Bu bildirim doğrudan yeni bir yatırım veya satış sözleşmesi olmasa da Turcas Holding'in iştirakinden döviz bazlı temettü geliri elde edecek olması nedeniyle önem taşıyor. İştiraklerden gelen temettü ödemeleri holding şirketlerinde nakit akışını destekleyebilir ve finansal esneklik sağlayabilir. Bu nedenle TRCAS bildirimi günün ayrı haber yapılabilecek önemli KAP başlıkları arasında değerlendirilebilir.",
  },
  {
    baslik: "Olası Etki",
    kapLink: "https://www.kap.org.tr/tr/Bildirim/1620030",
    metin:
      "Olası Etki: Pozitif. Shell & Turcas Petrol A.Ş.'den alınacak 8 milyon ABD doları tutarındaki imtiyazlı temettü, Turcas Holding'in nakit pozisyonunu destekleyebilecek nitelikte. Etkinin kalıcı olup olmayacağı, şirketin bu nakdi nasıl kullanacağı ve sonraki finansal tablolara yansımasıyla daha net görülecek.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "Turcas'a Shell & Turcas'tan 8 Milyon Dolar İmtiyazlı Temettü",
  description:
    "Turcas Holding, %30 oranındaki iştiraki Shell & Turcas Petrol A.Ş.'de sahip olduğu imtiyazlı paylar kapsamında 8 milyon ABD doları tutarında imtiyazlı temettü ödemesi alacağını açıkladı.",
  datePublished: "2026-06-24T09:24:00+03:00",
  dateModified: "2026-06-24T09:24:00+03:00",
  url: "https://www.hocaileborsa.com/haber/trcas-shell-turcas-8-milyon-dolar-imtiyazli-temettu",
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
  image:
    "https://www.hocaileborsa.com/trcas-shell-turcas-8-milyon-dolar-imtiyazli-temettu.webp",
  inLanguage: "tr",
};

export default function HaberKapOzetiPage() {
  return (
    <main className="min-h-screen bg-[#f8fafc] px-4 py-6 md:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="mx-auto max-w-4xl">
        <nav
          className="mb-5 flex items-center gap-2 text-sm text-slate-500"
          aria-label="Breadcrumb"
        >
          <Link href="/" className="hover:text-blue-600 transition">
            Ana Sayfa
          </Link>
          <span className="text-slate-300">/</span>
          <span className="text-slate-700 font-medium">Haberler</span>
        </nav>

        <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_2px_16px_rgba(15,23,42,0.07)]">
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-zinc-100">
            <Image
              src="/trcas-shell-turcas-8-milyon-dolar-imtiyazli-temettu.webp"
              alt="Turcas'a Shell & Turcas'tan 8 Milyon Dolar İmtiyazlı Temettü"
              fill

              sizes="(min-width: 1024px) 896px, 100vw"
className="object-cover"
            />
          </div>

          <div className="p-6 md:p-10">
            <h1 className="text-2xl font-bold leading-tight tracking-tight text-slate-900 md:text-3xl lg:text-4xl">
              Turcas&apos;a Shell & Turcas&apos;tan 8 Milyon Dolar İmtiyazlı Temettü
            </h1>

            <div className="mb-4 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center rounded-md bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700 ring-1 ring-inset ring-blue-600/20">
                Şirket Haberleri
              </span>
              <time dateTime="2026-06-24" className="text-sm text-slate-500">
                24 Haziran 2026
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
                Turcas Holding, %30 oranındaki iştiraki Shell & Turcas Petrol
                A.Ş. üzerinden 8 milyon ABD doları tutarında imtiyazlı temettü
                ödemesi alacağını KAP&apos;a bildirdi. Şirket açıklamasında ödemenin
                29 Haziran 2026 tarihinde yapılmasına karar verildiği belirtildi.
              </p>

              <div className="space-y-5">
                {kapHaberleri.map((haber) => (
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
                Turcas Holding&apos;in Shell & Turcas Petrol A.Ş.&apos;den alacağı 8
                milyon ABD doları tutarındaki imtiyazlı temettü, döviz bazlı
                nakit girişi sağlaması nedeniyle şirket açısından pozitif
                okunabilecek bir gelişme olarak öne çıkıyor.
              </div>
              <HaberIlgiliBolumler
                slug="trcas-shell-turcas-8-milyon-dolar-imtiyazli-temettu"
                baslik="Turcas'a Shell & Turcas'tan 8 Milyon Dolar İmtiyazlı Temettü"
              />

              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm font-medium leading-7 text-amber-900 md:text-base">
                ⚠️ Bu haber bilgilendirme amaçlıdır, yatırım tavsiyesi değildir.
              </div>
            </div>
          </div>
          <HaberAltKisim href="/haber/trcas-shell-turcas-8-milyon-dolar-imtiyazli-temettu" />

          <AuthorBox />
        </article>
      </div>
    </main>
  );
}
