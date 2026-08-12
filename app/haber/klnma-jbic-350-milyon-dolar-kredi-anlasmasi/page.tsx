import { seoAciklamasi } from "@/lib/seo-metadata";
import Image from "next/image";
import Link from "@/components/NoPrefetchLink";
import type { Metadata } from "next";
import HaberIlgiliBolumler from "@/components/HaberIlgiliBolumler";
import AuthorBox from "@/components/AuthorBox";
import HaberAltKisim from "@/components/HaberAltKisim";

export const metadata: Metadata = {
  title: "KLNMA, JBIC ile 350 Milyon Dolarlık Kredi Anlaşması İmzaladı",
  description:
    seoAciklamasi("Türkiye Kalkınma ve Yatırım Bankası (KLNMA), Japon Uluslararası İşbirliği Bankası (JBIC) ile yenilenebilir enerji ve enerji verimliliği yatırımlarının finansmanında kullanılmak üzere 350 milyon ABD doları tutarında kredi anlaşması imzaladı.", "Haberde gelişmenin ayrıntıları, açıklanan veriler ve yatırımcıların izleyebileceği temel noktalar yer alıyor."),
  alternates: {
    canonical:
      "https://www.hocaileborsa.com/haber/klnma-jbic-350-milyon-dolar-kredi-anlasmasi",
  },
  openGraph: {
    type: "article",
    images: [{ url: "https://www.hocaileborsa.com/klnma-jbic-350-milyon-dolar-kredi-anlasmasi.webp" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.hocaileborsa.com/klnma-jbic-350-milyon-dolar-kredi-anlasmasi.webp"],
  },
};

const haberDetaylari = [
  {
    baslik: "KLNMA, JBIC ile kredi anlaşması imzaladı",
    metin:
      "Türkiye Kalkınma ve Yatırım Bankası A.Ş. (KLNMA), Japon Uluslararası İşbirliği Bankası (JBIC) ile 350 milyon ABD doları tutarında kredi anlaşması imzaladığını KAP üzerinden duyurdu. Açıklamada kredinin yenilenebilir enerji ve enerji verimliliği yatırımlarının finansmanında kullanılacağı belirtildi. Bu yönüyle haber, bankanın kalkınma finansmanı misyonu ve sürdürülebilir yatırım teması açısından öne çıkıyor.",
  },
  {
    baslik: "Kredi yenilenebilir enerji ve verimlilik yatırımlarında kullanılacak",
    metin:
      "KAP açıklamasına göre kredi, Türkiye'de yenilenebilir enerji ve enerji verimliliği alanındaki yatırımların finansmanına yönlendirilecek. Bu tür kaynaklar, doğrudan bankanın kredi kullandırma kapasitesini desteklerken, aynı zamanda enerji dönüşümü, karbon azaltımı ve sürdürülebilir finansman başlıklarında da stratejik önem taşır.",
  },
  {
    baslik: "Hazine geri ödeme garantisi bulunuyor",
    metin:
      "Açıklamada kredi anlaşmasının T.C. Hazine ve Maliye Bakanlığı'nın geri ödeme garantisi altında imzalandığı ifade edildi. Bu detay, finansman yapısının güvence tarafı açısından önemlidir. Kalkınma bankaları açısından uluslararası kuruluşlardan sağlanan uzun vadeli kaynaklar, proje finansmanı ve sürdürülebilir yatırımların desteklenmesi bakımından yakından izlenir.",
  },
  {
    baslik: "Yatırımcı açısından ne anlama geliyor?",
    metin:
      "KLNMA için bu haber, doğrudan yeni bir üretim veya satış geliri açıklaması değil; ancak bankanın fonlama kapasitesini ve sürdürülebilir finansman tarafındaki konumunu güçlendirebilecek önemli bir kaynak anlaşmasıdır. Kredi tutarının büyüklüğü ve kullanım amacının yenilenebilir enerji yatırımları olması nedeniyle bildirim, günün ayrı haber yapılabilecek güçlü KAP başlıklarından biri olarak değerlendirilebilir.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "KLNMA, JBIC ile 350 Milyon Dolarlık Kredi Anlaşması İmzaladı",
  description:
    "Türkiye Kalkınma ve Yatırım Bankası, JBIC ile yenilenebilir enerji ve enerji verimliliği yatırımlarının finansmanında kullanılmak üzere 350 milyon ABD doları tutarında kredi anlaşması imzaladı.",
  datePublished: "2026-06-24T13:57:00+03:00",
  dateModified: "2026-06-24T14:15:00+03:00",
  url: "https://www.hocaileborsa.com/haber/klnma-jbic-350-milyon-dolar-kredi-anlasmasi",
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
  image: "https://www.hocaileborsa.com/klnma-jbic-350-milyon-dolar-kredi-anlasmasi.webp",
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
              src="/klnma-jbic-350-milyon-dolar-kredi-anlasmasi.webp"
              alt="KLNMA, JBIC ile 350 milyon dolarlık kredi anlaşması imzaladı"
              fill

              sizes="(min-width: 1024px) 896px, 100vw"
className="object-cover"
            />
          </div>

          <div className="p-6 md:p-10">
            <h1 className="text-2xl font-bold leading-tight tracking-tight text-slate-900 md:text-3xl lg:text-4xl">
              KLNMA, JBIC ile 350 Milyon Dolarlık Kredi Anlaşması İmzaladı
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
                Türkiye Kalkınma ve Yatırım Bankası A.Ş. (KLNMA), Japon
                Uluslararası İşbirliği Bankası (JBIC) ile 350 milyon ABD doları
                tutarında kredi anlaşması imzaladığını açıkladı. Kredi,
                yenilenebilir enerji ve enerji verimliliği yatırımlarının
                finansmanında kullanılacak.
              </p>

              <div className="grid gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm leading-7 text-slate-700 md:grid-cols-2 md:text-base">
                <div>
                  <span className="font-semibold text-slate-900">
                    Kredi Tutarı:
                  </span> 
                  350 milyon ABD doları
                </div>
                <div>
                  <span className="font-semibold text-slate-900">
                    Karşı Taraf:
                  </span> 
                  JBIC
                </div>
                <div>
                  <span className="font-semibold text-slate-900">
                    Kullanım Alanı:
                  </span> 
                  Yenilenebilir enerji ve enerji verimliliği
                </div>
                <div>
                  <span className="font-semibold text-slate-900">
                    Garanti:
                  </span> 
                  Hazine geri ödeme garantisi
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

              <div className="rounded-xl border border-blue-200 bg-blue-50 p-4 text-sm font-medium leading-7 text-blue-900 md:text-base">
                Kaynak: KLNMA tarafından 24 Haziran 2026 tarihinde KAP’a yapılan
                özel durum açıklaması.
                <br />
                <a
                  href="https://www.kap.org.tr/tr/Bildirim/1620148"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-slate-500 underline underline-offset-2 transition hover:text-slate-700"
                >
                  Orijinal KAP bildirimi
                </a>
              </div>

              <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm font-medium leading-7 text-emerald-900 md:text-base">
                KLNMA haberinde ana başlık, bankanın yenilenebilir enerji ve
                enerji verimliliği yatırımlarının finansmanı için uluslararası
                kaynaktan 350 milyon ABD doları tutarında kredi sağlamış
                olmasıdır. Bu gelişme fonlama kapasitesi ve sürdürülebilir
                finansman teması açısından pozitif okunabilir.
              </div>

              <HaberIlgiliBolumler
                slug="klnma-jbic-350-milyon-dolar-kredi-anlasmasi"
                baslik="KLNMA, JBIC ile 350 Milyon Dolarlık Kredi Anlaşması İmzaladı"
              />

              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm font-medium leading-7 text-amber-900 md:text-base">
                ⚠️ Bu haber bilgilendirme amaçlıdır, yatırım tavsiyesi değildir.
              </div>
            </div>
          </div>
          <HaberAltKisim href="/haber/klnma-jbic-350-milyon-dolar-kredi-anlasmasi" />

          <AuthorBox />
        </article>
      </div>
    </main>
  );
}
