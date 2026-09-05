import { serializeJsonLd } from "@/lib/json-ld";
import { seoAciklamasi } from "@/lib/seo-metadata";
import Image from "next/image";
import Link from "@/components/NoPrefetchLink";
import type { Metadata } from "next";
import HaberIlgiliBolumler from "@/components/HaberIlgiliBolumler";
import AuthorBox from "@/components/AuthorBox";
import HaberAltKisim from "@/components/HaberAltKisim";

export const metadata: Metadata = {
  title: "ISGSY Enlila Üzerinden ABD’li Crescenta’ya Yatırım Yaptı",
  description:
    seoAciklamasi("ISGSY, %70 pay sahibi olduğu Enlila Sağlık’ın ABD merkezli Crescenta Biosciences’a 24 milyon dolar karşılığında %50,1 ortak olacağını açıkladı.", "Haberde gelişmenin ayrıntıları, açıklanan veriler ve yatırımcıların izleyebileceği temel noktalar yer alıyor."),
  alternates: {
    canonical:
      "https://www.hocaileborsa.com/haber/isgsy-enlila-crescenta-biosciences-yatirimi",
  },
  openGraph: {
    type: "article",
    images: [{ url: "https://www.hocaileborsa.com/isgsy-enlila-crescenta-biosciences-yatirimi.webp" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.hocaileborsa.com/isgsy-enlila-crescenta-biosciences-yatirimi.webp"],
  },
};

const haberDetaylari = [
  {
    baslik: "Ne oldu?",
    metin:
      "İş Girişim Sermayesi Yatırım Ortaklığı A.Ş. (ISGSY), %70 oranında pay sahibi olduğu portföy şirketi Enlila Sağlık İlaç Arge Üretim ve Laboratuvar A.Ş. üzerinden yeni bir yatırım açıklaması yaptı. KAP bildirimine göre Enlila Sağlık, ABD merkezli biyoteknoloji şirketi Crescenta Biosciences, Inc.’te 24 milyon ABD doları karşılığında sermaye artırımı yoluyla %50,1 oranında pay sahibi olacak. Sözleşme ve ilgili dokümanlar 24 Haziran 2026 tarihinde imzalandı.",
  },
  {
    baslik: "Bu ne anlama geliyor?",
    metin:
      "Bu işlem, Enlila Sağlık’ın Crescenta Biosciences’a doğrudan ortak olması anlamına geliyor. Sermaye artırımı yoluyla ortaklık, mevcut payların başka bir ortaktan alınmasından farklıdır; şirkete yeni sermaye konulur ve bu sermaye karşılığında pay edinilir. ISGSY açısından haberin önemi, yatırımın doğrudan ISGSY tarafından değil, %70 pay sahibi olduğu portföy şirketi Enlila Sağlık üzerinden yapılmasıdır.",
  },
  {
    baslik: "Şirket hakkında",
    metin:
      "İş Girişim Sermayesi Yatırım Ortaklığı, büyüme potansiyeli taşıyan şirketlere yatırım yapan bir girişim sermayesi yatırım ortaklığıdır. Bu yapıdaki şirketlerde ana faaliyet, üretim veya satıştan çok portföy şirketlerinin değerlenmesi, büyümesi ve yatırım süreçlerinden doğan potansiyel kazançtır.",
  },
  {
    baslik: "Değerlendirme",
    metin:
      "Girişim sermayesi şirketlerinde bu tür haberler, klasik sanayi şirketlerindeki sipariş veya satış haberi gibi doğrudan kısa vadeli ciro etkisi yaratmaz. Buradaki mekanizma, portföy şirketinin başka bir şirkete yatırım yaparak büyüme alanını genişletmesidir. Yatırım başarılı olursa portföy şirketinin değeri artabilir; ancak biyoteknoloji gibi alanlarda yatırımın geri dönüşü zaman, klinik/teknolojik başarı ve finansman ihtiyacı gibi unsurlara bağlıdır. Bu nedenle haber, doğrudan fiyat tahminiyle değil, ISGSY’nin portföy değerleme potansiyeli açısından okunmalıdır.",
  },
  {
    baslik: "Sırada ne var?",
    metin:
      "KAP açıklamasında sermaye artırım işlemleri ve kapanışın gerçekleştirilmesi sonrasında kamuoyunun ayrıca bilgilendirileceği belirtildi. Bu nedenle yatırımın tamamen kapanmış kabul edilmesi için sonraki KAP açıklaması beklenmelidir. Kapanışın ne zaman tamamlanacağına ilişkin bildirimde net bir tarih yer almıyor.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "ISGSY Enlila Üzerinden ABD’li Crescenta’ya Yatırım Yaptı",
  description:
    "ISGSY, %70 pay sahibi olduğu Enlila Sağlık’ın ABD merkezli Crescenta Biosciences’a 24 milyon dolar karşılığında %50,1 ortak olacağını açıkladı.",
  datePublished: "2026-06-25T09:42:59+03:00",
  dateModified: "2026-06-25T10:10:00+03:00",
  url: "https://www.hocaileborsa.com/haber/isgsy-enlila-crescenta-biosciences-yatirimi",
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
  image: "https://www.hocaileborsa.com/isgsy-enlila-crescenta-biosciences-yatirimi.webp",
  inLanguage: "tr",
};

export default function HaberPage() {
  return (
    <main className="min-h-screen bg-[#f8fafc] px-4 py-6 md:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }}
      />
      <div className="mx-auto max-w-4xl">
        <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_2px_16px_rgba(15,23,42,0.07)]">
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-zinc-100">
            <Image
              src="/isgsy-enlila-crescenta-biosciences-yatirimi.webp"
              alt="ISGSY Enlila üzerinden ABD merkezli Crescenta Biosciences yatırımı"
              fill

              sizes="(min-width: 1024px) 896px, 100vw"
className="object-cover"
            />
          </div>

          <div className="p-6 md:p-10">
            <h1 className="text-2xl font-bold leading-tight tracking-tight text-slate-900 md:text-3xl lg:text-4xl">
              ISGSY Enlila Üzerinden ABD’li Crescenta’ya Yatırım Yaptı
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
                İş Girişim Sermayesi Yatırım Ortaklığı A.Ş. (ISGSY), portföy
                şirketi Enlila Sağlık üzerinden ABD merkezli Crescenta
                Biosciences, Inc. yatırımına ilişkin KAP açıklaması yayımladı.
                Açıklamada yatırımın 24 milyon ABD doları karşılığında sermaye
                artırımı yoluyla yapılacağı belirtildi.
              </p>

              <div className="grid gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm leading-7 text-slate-700 md:grid-cols-2 md:text-base">
                <div>
                  <span className="font-semibold text-slate-900">
                    Şirket:
                  </span>{" "}
                  ISGSY
                </div>
                <div>
                  <span className="font-semibold text-slate-900">
                    Portföy Şirketi:
                  </span>{" "}
                  Enlila Sağlık
                </div>
                <div>
                  <span className="font-semibold text-slate-900">
                    Yatırım Tutarı:
                  </span>{" "}
                  24 milyon ABD doları
                </div>
                <div>
                  <span className="font-semibold text-slate-900">
                    Hedef Ortaklık Oranı:
                  </span>{" "}
                  %50,1
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
                Kaynak: ISGSY tarafından 25 Haziran 2026 tarihinde KAP&apos;a yapılan
                özel durum açıklaması.
                <br />
                <a
                  href="https://www.kap.org.tr/tr/Bildirim/1620485"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold"
                >
                  Orjinal Kap içeriği
                </a>
              </div>

              <HaberIlgiliBolumler
                slug="isgsy-enlila-crescenta-biosciences-yatirimi"
                baslik="ISGSY Enlila Üzerinden ABD’li Crescenta’ya Yatırım Yaptı"
              />

              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm font-medium leading-7 text-amber-900 md:text-base">
                ⚠️ Bu içerik bilgilendirme amaçlıdır, yatırım tavsiyesi değildir.
              </div>
            </div>
          </div>
          <HaberAltKisim href="/haber/isgsy-enlila-crescenta-biosciences-yatirimi" />

          <AuthorBox />
        </article>
      </div>
    </main>
  );
}
