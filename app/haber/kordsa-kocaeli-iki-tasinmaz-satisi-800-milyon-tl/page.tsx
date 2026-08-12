import { seoAciklamasi } from "@/lib/seo-metadata";
import Image from "next/image";
import Link from "@/components/NoPrefetchLink";
import type { Metadata } from "next";
import HaberIlgiliBolumler from "@/components/HaberIlgiliBolumler";
import AuthorBox from "@/components/AuthorBox";
import HaberAltKisim from "@/components/HaberAltKisim";

export const metadata: Metadata = {
  title: "Kordsa Kocaeli’deki İki Taşınmazını 800 Milyon TL’ye Sattı",
  description:
    seoAciklamasi("Kordsa, Kocaeli İzmit’te bulunan ve operasyonlarda kullanılmayan iki taşınmazın toplam 800 milyon TL bedelle satışını tamamladığını açıkladı.", "Haberde gelişmenin ayrıntıları, açıklanan veriler ve yatırımcıların izleyebileceği temel noktalar yer alıyor."),
  alternates: {
    canonical:
      "https://www.hocaileborsa.com/haber/kordsa-kocaeli-iki-tasinmaz-satisi-800-milyon-tl",
  },
  openGraph: {
    type: "article",
    images: [
      {
        url: "https://www.hocaileborsa.com/kordsa-tasinmaz-satisi-800-milyon-tl.webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [
      "https://www.hocaileborsa.com/kordsa-tasinmaz-satisi-800-milyon-tl.webp",
    ],
  },
};


const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "Kordsa Kocaeli’deki İki Taşınmazını 800 Milyon TL’ye Sattı",
  description:
    "Kordsa, Kocaeli İzmit’te bulunan ve operasyonlarda kullanılmayan iki taşınmazın toplam 800 milyon TL bedelle satışını tamamladığını açıkladı.",
  datePublished: "2026-06-19T09:00:00+03:00",
  dateModified: "2026-06-19T09:00:00+03:00",
  url: "https://www.hocaileborsa.com/haber/kordsa-kocaeli-iki-tasinmaz-satisi-800-milyon-tl",
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
  image: "https://www.hocaileborsa.com/kordsa-tasinmaz-satisi-800-milyon-tl.webp",
};

export default function KordsaTasinmazSatisiPage() {
  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="mx-auto max-w-4xl px-4 py-6 md:px-6">
        <section className="mb-6 flex flex-wrap gap-3">
          <Link
            href="/"
            className="rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100"
          >
            Ana Sayfa
          </Link>
          <Link
            href="/haberler"
            className="rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100"
          >
            Tüm Haberler
          </Link>
        </section>

        <article className="overflow-hidden rounded-2xl border border-zinc-200 bg-white">
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-zinc-100">
            <Image
              src="/kordsa-tasinmaz-satisi-800-milyon-tl.webp"
              alt="Kordsa Kocaeli’deki iki taşınmazını 800 milyon TL’ye sattı"
              fill

              sizes="(min-width: 1024px) 896px, 100vw"
className="object-cover"
            />
          </div>

          <div className="p-5 md:p-8">
            <header>
              <h1 className="text-2xl font-bold leading-tight text-zinc-900 md:text-4xl">
                Kordsa Kocaeli’deki İki Taşınmazını 800 Milyon TL’ye Sattı
              </h1>
              <p className="mt-2 text-sm text-zinc-500">
                19.06.2026 ·{" "}
                <Link
                  href="/yazar/erman-hoca"
                  className="font-semibold text-slate-600 hover:text-blue-600"
                >
                  Erman Hoca
                </Link>
              </p>
            </header>

            <div className="mt-5 space-y-4 text-base leading-8 text-zinc-700 md:text-lg">
              <p>
                Kordsa Teknik Tekstil A.Ş. (KORDS), Kocaeli ili İzmit ilçesinde
                bulunan ve şirket operasyonlarında kullanılmayan iki adet
                taşınmazın satışının tamamlandığını KAP’a bildirdi. Şirketin
                açıklamasına göre satış işlemi toplam 800 milyon TL bedelle
                gerçekleştirildi.
              </p>

              <p>
                Satışa konu taşınmazlardan ilki Kocaeli ili İzmit ilçesi 765 ada
                205 parselde yer alan 65.151 metrekare büyüklüğündeki taşınmaz,
                ikincisi ise aynı bölgede 765 ada 211 parselde yer alan 57.249
                metrekare büyüklüğündeki taşınmaz olarak açıklandı. Her iki
                taşınmazın da üretim sahalarının dışında kaldığı ve
                operasyonlarda kullanılmadığı belirtildi.
              </p>

              <p>
                Şirket, taşınmaz satışının 19 Haziran 2026 tarihinde
                tamamlandığını ve satış koşulunun peşin olduğunu duyurdu.
                Kordsa tarafından yapılan açıklamada, söz konusu duran
                varlıkların nakde çevrilerek daha etkin kullanılmasının şirketin
                finansal sonuçlarını ve nakit akışını olumlu etkilemesinin
                beklendiği ifade edildi.
              </p>

              <p>
                KAP bildiriminde satış kararının 4 Haziran 2026 tarihli yönetim
                kurulu toplantısında alındığı, ancak satış sürecinin içerdiği
                belirsizlik nedeniyle bilginin kamuya açıklanmasının ertelendiği
                belirtildi. Satıştan doğacak kâr veya zararın ise 30 Haziran
                2026 finansal tablolarında raporlanacağı açıklandı.
              </p>

              <p>
                Bildirimde ayrıca karşı tarafın ilişkili taraf olmadığı, alıcı
                bilgisinin ticari sır ve alıcının talebi kapsamında
                açıklanmadığı belirtildi. Şirket, işlemin mevzuatta tanımlanan
                önemli nitelikte işlem kapsamına girmediğini ve değerleme raporu
                hazırlanmasının zorunlu olmadığını da duyurdu.
              </p>
            </div>

            <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-5">
              <p className="text-sm font-bold text-amber-900 md:text-base">
                Hoca İle Borsa yorumu:
              </p>
              <p className="mt-2 text-sm leading-7 text-amber-800 md:text-base">
                Kordsa haberinde öne çıkan başlık, operasyonlarda kullanılmayan
                iki taşınmazın yüksek tutarlı bir satışla nakde çevrilmesidir.
                800 milyon TL’lik peşin satış, şirketin nakit pozisyonuna katkı
                sağlayabilecek bir gelişme olarak izlenebilir. Ancak yatırımcılar
                açısından asıl etki, satıştan doğacak kâr veya zararın 30
                Haziran 2026 finansal tablolarına nasıl yansıyacağı görüldükten
                sonra daha net değerlendirilebilir.
              </p>
            </div>

            <div className="mt-6 rounded-2xl border border-blue-200 bg-blue-50 p-5">
              <p className="text-sm font-bold text-blue-900 md:text-base">
                Haber özeti:
              </p>
              <p className="mt-2 text-sm leading-7 text-blue-800 md:text-base">
                Kordsa, Kocaeli İzmit’te bulunan iki taşınmazını toplam 800
                milyon TL bedelle sattı. Satış peşin olarak tamamlandı. Şirket,
                bu işlemin bilanço yapısını güçlendirme ve nakit akışını olumlu
                etkileme amacı taşıdığını açıkladı.
              </p>
            </div>

            <div className="mt-6 rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
              <p className="text-sm font-bold text-zinc-900 md:text-base">
                Kaynak:
              </p>
              <a
                href="https://www.kap.org.tr/Bildirim/1619071"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block text-sm font-semibold text-blue-700 hover:text-blue-800 md:text-base"
              >
                KAP Bildirimi - 1619071
              </a>
            </div>

            <p className="mt-6 text-sm text-zinc-400">
              19.06.2026 – Bu paylaşım yatırım tavsiyesi değildir.
            </p>

            <div className="mt-6">
              <AuthorBox />
            </div>
          </div>
        </article>

        <div className="mt-8">
          <HaberIlgiliBolumler
            slug="kordsa-kocaeli-iki-tasinmaz-satisi-800-milyon-tl"
            baslik="Kordsa Kocaeli Taşınmaz Satışı KORDS"
          />
        </div>
        <HaberAltKisim href="/haber/kordsa-kocaeli-iki-tasinmaz-satisi-800-milyon-tl" />
      </div>
    </main>
  );
}
