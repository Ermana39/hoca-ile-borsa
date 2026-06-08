import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import HaberIlgiliBolumler from "@/components/HaberIlgiliBolumler";

export const metadata: Metadata = {
  title: "DSTKF, EMPAE ve ZERGY Paylarına VBTS Tedbiri Geldi",
  description:
    "Borsa İstanbul, DSTKF, EMPAE ve ZERGY paylarına VBTS kapsamında açığa satış ve kredili işlem yasağı getirdi. Tedbir 14 Mayıs – 12 Haziran 2026 arası geçerli.",
  alternates: {
    canonical: "https://www.hocaileborsa.com/haber/dstkf-empae-zergy-vbts-tedbiri",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "DSTKF, EMPAE ve ZERGY Paylarına VBTS Tedbiri Geldi",
  description:
    "Borsa İstanbul, DSTKF, EMPAE ve ZERGY paylarına VBTS kapsamında açığa satış ve kredili işlem yasağı getirdi.",
  datePublished: "2026-06-08T09:00:00+03:00",
  dateModified: "2026-06-08T09:00:00+03:00",
  url: "https://www.hocaileborsa.com/haber/dstkf-empae-zergy-vbts-tedbiri",
  author: { "@type": "Organization", name: "Hoca İle Borsa", url: "https://www.hocaileborsa.com" },
  publisher: {
    "@type": "Organization",
    name: "Hoca İle Borsa",
    url: "https://www.hocaileborsa.com",
    logo: { "@type": "ImageObject", url: "https://www.hocaileborsa.com/icon-512.png" },
  },
  image: "https://www.hocaileborsa.com/tedbirli-hisseler-yatay.png",
  inLanguage: "tr",
};

export default function VbtsTedbiriHaberPage() {
  return (
    <main className="min-h-screen bg-[#f8fafc] px-4 py-6 md:px-6">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mx-auto max-w-4xl">
        <nav className="mb-5 flex items-center gap-2 text-sm text-slate-500" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-blue-600 transition">Ana Sayfa</Link>
          <span className="text-slate-300">/</span>
          <span className="text-slate-700 font-medium">Haberler</span>
        </nav>

        <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_2px_16px_rgba(15,23,42,0.07)]">
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-zinc-100">
            <Image
              src="/vbts-tedbiri.webp"
              alt="DSTKF, EMPAE ve ZERGY Paylarına VBTS Tedbiri Geldi"
              fill
              unoptimized
              className="object-cover"
            />
          </div>

          <div className="p-6 md:p-10">
            <h1 className="text-2xl font-bold leading-tight tracking-tight text-slate-900 md:text-3xl lg:text-4xl">
              DSTKF, EMPAE ve ZERGY Paylarına VBTS Tedbiri Geldi
            </h1>

            <div className="mb-4 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center rounded-md bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700 ring-1 ring-inset ring-blue-600/20">
                Finans
              </span>
              <time dateTime="2026-06-08" className="text-sm text-slate-500">8 Haziran 2026</time>
              <span className="text-slate-300">·</span>
              <span className="text-sm text-slate-500">Hoca İle Borsa</span>
            </div>

            <div className="mt-6 space-y-6 text-base leading-8 text-slate-700 md:text-lg">
              <p>
                Borsa İstanbul, Volatilite Bazlı Tedbir Sistemi kapsamında üç
                hisse için yeni işlem tedbiri uygulanacağını duyurdu. Kamuyu
                Aydınlatma Platformu'nda yayımlanan açıklamaya göre DSTKF.E,
                EMPAE.E ve ZERGY.E payları belirli bir süre boyunca açığa satışa
                ve kredili işlemlere konu edilemeyecek.
              </p>

              <p>
                Alınan karar doğrultusunda söz konusu tedbir, 14 Mayıs 2026 seans
                başından itibaren başlayacak ve 12 Haziran 2026 seans sonuna kadar
                geçerli olacak. Bu süre boyunca ilgili paylarda yatırımcılar
                kredili işlem yapamayacak ve açığa satış gerçekleştiremeyecek.
              </p>

              <p>
                VBTS kapsamında uygulanan bu tür tedbirler, pay piyasasında olağan
                dışı fiyat ve miktar hareketlerinin ardından devreye
                alınabiliyor. Amaç, işlem düzeninin korunması ve piyasada sağlıklı
                fiyat oluşumunun desteklenmesi olarak değerlendiriliyor.
              </p>

              <p>
                Borsa İstanbul açıklamasında ayrıca, VBTS tedbirlerinin payın
                işlem gördüğü pazar, platform ya da diğer işlem esaslarından
                bağımsız olarak uygulandığı belirtildi. Yani ilgili hisselerde
                başka nedenlerle farklı işlem kuralları geçerli olsa bile, VBTS
                kapsamında alınan bu karar tedbir süresinin sonuna kadar devam
                edecek.
              </p>

              <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm font-medium leading-7 text-emerald-900 md:text-base">
                Bu gelişme, özellikle DSTKF, EMPAE ve ZERGY hisselerinde işlem
                yapan yatırımcılar açısından yakından takip edilmesi gereken bir
                başlık olarak öne çıkıyor. Tedbir kararı hisse işlemlerini
                tamamen durdurmamakla birlikte, kredili işlem ve açığa satış
                imkanını geçici olarak sınırlandırıyor.
              </div>

              <HaberIlgiliBolumler slug="dstkf-empae-zergy-vbts-tedbiri" baslik="DSTKF, EMPAE ve ZERGY Paylarına VBTS Tedbiri Geldi" />

              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm font-medium leading-7 text-amber-900 md:text-base">
                ⚠️ Bu haber bilgilendirme amaçlıdır, yatırım tavsiyesi
                değildir.
              </div>
            </div>
          </div>
        </article>
      </div>
    </main>
  );
}
