import { seoAciklamasi } from "@/lib/seo-metadata";
import Image from "next/image";
import Link from "@/components/NoPrefetchLink";
import type { Metadata } from "next";
import HaberIlgiliBolumler from "@/components/HaberIlgiliBolumler";
import AuthorBox from "@/components/AuthorBox";
import HaberAltKisim from "@/components/HaberAltKisim";

export const metadata: Metadata = {
  title: "YIGIT Akü İçin ÇED Olumlu Kararı Açıklandı",
  description:
    seoAciklamasi("YIGIT, akü, kurşun ergitme ve plastik parça üretiminde kapasite artışı için yapılan başvuruda ÇED Olumlu Kararı alındığını açıkladı.", "Haberde gelişmenin ayrıntıları, açıklanan veriler ve yatırımcıların izleyebileceği temel noktalar yer alıyor."),
  alternates: {
    canonical:
      "https://www.hocaileborsa.com/haber/yigit-aku-ced-olumlu-karari-kapasite-artisi",
  },
  openGraph: {
    type: "article",
    images: [{ url: "https://www.hocaileborsa.com/yigit-aku-ced-olumlu-karari-kapasite-artisi.webp" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.hocaileborsa.com/yigit-aku-ced-olumlu-karari-kapasite-artisi.webp"],
  },
};

const haberDetaylari = [
  {
    baslik: "Ne oldu?",
    metin:
      "Yiğit Akü Malzemeleri Nakliyat Turizm İnşaat Sanayi ve Ticaret A.Ş. (YIGIT), kapasite artışına ilişkin Çevre, Şehircilik ve İklim Değişikliği Bakanlığı'na yaptığı başvuru hakkında KAP açıklaması yayımladı. Şirket, VRLA-Deep Cycle akü, traksiyoner akü, kurşun ergitme ve plastik parça üretimi konularındaki kapasite artışı için Bakanlık tarafından ÇED Olumlu Kararı verildiğini duyurdu.",
  },
  {
    baslik: "Bu ne anlama geliyor?",
    metin:
      "ÇED, çevresel etki değerlendirmesi anlamına gelir ve yatırım veya kapasite artışı gibi projelerde çevresel etkilerin resmi olarak incelendiği süreci ifade eder. ÇED Olumlu Kararı, ilgili kapasite artışı için çevresel değerlendirme tarafında önemli bir izin aşamasının geçildiğini gösterir. Bu karar, tek başına üretimin hemen artacağı anlamına gelmez; ancak kapasite artışı planı açısından resmi süreçte önemli bir eşiktir.",
  },
  {
    baslik: "Şirket hakkında",
    metin:
      "YIGIT, akü ve akü malzemeleri alanında faaliyet gösteren bir sanayi şirketidir. KAP açıklamasında şirketin VRLA-Deep Cycle akü, traksiyoner akü, kurşun ergitme ve plastik parça üretimi başlıklarında kapasite artışı süreci yürüttüğü belirtildi.",
  },
  {
    baslik: "Değerlendirme",
    metin:
      "Kapasite artışı haberlerinde yatırımcı açısından asıl mekanizma, şirketin mevcut üretim ölçeğini büyütme imkânı elde etmesidir. ÇED Olumlu Kararı bu sürecin çevresel izin tarafındaki önemli adımıdır; fakat yatırımın tamamlanması, üretim kapasitesine fiilen yansıması ve finansallara katkı sağlaması ayrı aşamalardır. Bu nedenle bu tür haberlerde sadece izin kararına değil, sonraki yatırım takvimine, devreye alma sürecine ve kapasite kullanımına bakmak gerekir.",
  },
  {
    baslik: "Sırada ne var?",
    metin:
      "Şirketin kapasite artışı sürecinde bundan sonraki aşamalara ilişkin ek açıklamaları ayrıca izlenecek. Yatırımın ne zaman tamamlanacağı, kapasiteye ne ölçüde yansıyacağı ve finansal sonuçlara katkısının ne olacağı bu bildirimde yer almadığı için henüz kesin değildir.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "YIGIT Akü İçin ÇED Olumlu Kararı Açıklandı",
  description:
    "YIGIT, akü, kurşun ergitme ve plastik parça üretiminde kapasite artışı için yapılan başvuruda ÇED Olumlu Kararı alındığını açıkladı.",
  datePublished: "2026-06-25T10:22:19+03:00",
  dateModified: "2026-06-25T10:45:00+03:00",
  url: "https://www.hocaileborsa.com/haber/yigit-aku-ced-olumlu-karari-kapasite-artisi",
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
  image: "https://www.hocaileborsa.com/yigit-aku-ced-olumlu-karari-kapasite-artisi.webp",
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
              src="/yigit-aku-ced-olumlu-karari-kapasite-artisi.webp"
              alt="YIGIT Akü İçin ÇED Olumlu Kararı Açıklandı"
              fill

              sizes="(min-width: 1024px) 896px, 100vw"
className="object-cover"
            />
          </div>

          <div className="p-6 md:p-10">
            <h1 className="text-2xl font-bold leading-tight tracking-tight text-slate-900 md:text-3xl lg:text-4xl">
              YIGIT Akü İçin ÇED Olumlu Kararı Açıklandı
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
                Yiğit Akü Malzemeleri Nakliyat Turizm İnşaat Sanayi ve Ticaret
                A.Ş. (YIGIT), kapasite artışı sürecinde ÇED Olumlu Kararı
                alındığını açıkladı. Karar, şirketin akü, kurşun ergitme ve
                plastik parça üretimi alanındaki kapasite artışı başvurusuna
                ilişkin resmi süreç açısından önemli bir aşama olarak öne çıktı.
              </p>

              <div className="grid gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm leading-7 text-slate-700 md:grid-cols-2 md:text-base">
                <div>
                  <span className="font-semibold text-slate-900">
                    Şirket:
                  </span>{" "}
                  YIGIT
                </div>
                <div>
                  <span className="font-semibold text-slate-900">
                    Bildirim Konusu:
                  </span>{" "}
                  ÇED Olumlu Kararı
                </div>
                <div>
                  <span className="font-semibold text-slate-900">
                    Kapsam:
                  </span>{" "}
                  Kapasite artışı
                </div>
                <div>
                  <span className="font-semibold text-slate-900">
                    Bildirim Tarihi:
                  </span>{" "}
                  25 Haziran 2026
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
                Kaynak: YIGIT tarafından 25 Haziran 2026 tarihinde KAP&apos;a yapılan
                özel durum açıklaması.
                <br />
                <a
                  href="https://www.kap.org.tr/tr/Bildirim/1620516"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold"
                >
                  Orjinal Kap içeriği
                </a>
              </div>

              <HaberIlgiliBolumler
                slug="yigit-aku-ced-olumlu-karari-kapasite-artisi"
                baslik="YIGIT Akü İçin ÇED Olumlu Kararı Açıklandı"
              />

              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm font-medium leading-7 text-amber-900 md:text-base">
                ⚠️ Bu içerik bilgilendirme amaçlıdır, yatırım tavsiyesi değildir.
              </div>
            </div>
          </div>
          <HaberAltKisim href="/haber/yigit-aku-ced-olumlu-karari-kapasite-artisi" />

          <AuthorBox />
        </article>
      </div>
    </main>
  );
}
