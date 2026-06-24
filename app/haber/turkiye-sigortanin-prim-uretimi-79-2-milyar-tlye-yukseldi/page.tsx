import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import HaberIlgiliBolumler from "@/components/HaberIlgiliBolumler";
import AuthorBox from "@/components/AuthorBox";
import HaberAltKisim from "@/components/HaberAltKisim";

export const metadata: Metadata = {
  title: "Türkiye Sigorta’nın Prim Üretimi 79,2 Milyar TL’ye Yükseldi",
  description:
    "Türkiye Sigorta’nın yılın ilk beş ayına ilişkin prim üretimi 79,2 milyar TL seviyesine yükseldi. Şirketin sigortacılık faaliyetlerinde güçlü üretim temposu devam ediyor.",
  alternates: {
    canonical: "https://www.hocaileborsa.com/haber/turkiye-sigortanin-prim-uretimi-79-2-milyar-tlye-yukseldi",
  },
  openGraph: {
    type: "article",
    images: [{ url: "https://www.hocaileborsa.com/haber975-discover.webp" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.hocaileborsa.com/haber975-discover.webp"],
  },
};

const haberDetaylari = [
  {
    baslik: "Prim Üretimi 79,2 Milyar TL Seviyesine Çıktı",
    metin:
      "Türkiye Sigorta’nın yılın ilk beş aylık dönemine ilişkin prim üretimi 79,2 milyar TL seviyesine yükseldi. Açıklanan veri, şirketin sigortacılık faaliyetlerinde güçlü üretim temposunu sürdürdüğünü gösterdi.",
  },
  {
    baslik: "Yıllık Bazda Büyüme Devam Etti",
    metin:
      "Şirketin prim üretimindeki artış, geçen yılın aynı dönemine kıyasla büyüme eğiliminin devam ettiğine işaret etti. Sigorta sektöründe üretim hacmi, şirketlerin operasyonel performansını takip etmek açısından önemli göstergeler arasında yer alıyor.",
  },
  {
    baslik: "Sigorta Sektöründe Güçlü Görünüm",
    metin:
      "Türkiye Sigorta’nın açıkladığı prim üretimi, sektör genelinde sigorta talebinin ve poliçe üretim hacminin güçlü seyrini koruduğunu gösteren başlıklardan biri oldu. Özellikle büyük ölçekli sigorta şirketlerinde prim üretimi verileri yatırımcılar tarafından yakından izleniyor.",
  },
  {
    baslik: "Operasyonel Performans Açısından Öne Çıktı",
    metin:
      "Prim üretimindeki artış, şirketin operasyonel büyüklüğünü ve faaliyet hacmini destekleyen önemli bir veri olarak değerlendirilebilir. Bu tür dönemsel veriler, şirketin yıl içindeki performans trendini görmek açısından önem taşıyor.",
  },
  {
    baslik: "Yatırımcıların Takip Ettiği Veri",
    metin:
      "Türkiye Sigorta paylarını takip eden yatırımcılar açısından prim üretimi rakamları, şirketin büyüme temposu ve sektör içindeki konumu hakkında fikir veren önemli göstergelerden biri olarak öne çıkıyor.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "Türkiye Sigorta'nın Prim Üretimi 79,2 Milyar TL'ye Yükseldi",
  description:
    "Türkiye Sigorta'nın yılın ilk beş ayına ilişkin prim üretimi 79,2 milyar TL seviyesine yükseldi.",
  datePublished: "2026-06-05T09:00:00+03:00",
  dateModified: "2026-06-05T09:00:00+03:00",
  url: "https://www.hocaileborsa.com/haber/turkiye-sigortanin-prim-uretimi-79-2-milyar-tlye-yukseldi",
  author: { "@type": "Person", "@id": "https://www.hocaileborsa.com/yazar/erman-hoca#person", name: "Erman Hoca", url: "https://www.hocaileborsa.com/yazar/erman-hoca" },
  publisher: {
    "@type": "Organization",
    "@id": "https://www.hocaileborsa.com/#organization",
    name: "Hoca İle Borsa",
    url: "https://www.hocaileborsa.com",
    logo: { "@type": "ImageObject", url: "https://www.hocaileborsa.com/icon-512.png" },
  },
  image: "https://www.hocaileborsa.com/haber975-discover.webp",
  inLanguage: "tr",
};

export default function Haber975Page() {
  return (
    <main className="min-h-screen bg-[#f8fafc] px-4 py-6 md:px-6">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mx-auto max-w-4xl">
        <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100">
            <Image
              src="/haber975-discover.webp"
              alt="Türkiye Sigorta’nın Prim Üretimi 79,2 Milyar TL’ye Yükseldi"
              fill
              unoptimized
              className="object-cover"
            />
          </div>

          <div className="p-6 md:p-10">
            <div className="mb-4 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center rounded-md bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700 ring-1 ring-inset ring-blue-600/20">
                Finans
              </span>
              <time dateTime="2026-06-05" className="text-sm text-slate-500">
                5 Haziran 2026
              </time>
              <span className="text-slate-300">·</span>
              <Link href="/yazar/erman-hoca" className="text-sm font-semibold text-slate-500 hover:text-blue-600">
                Erman Hoca
              </Link>
            </div>

            <h1 className="text-2xl font-bold leading-tight tracking-tight text-slate-900 md:text-3xl lg:text-4xl">
              Türkiye Sigorta’nın Prim Üretimi 79,2 Milyar TL’ye Yükseldi
            </h1>

            <div className="mt-6 space-y-6 text-base leading-8 text-slate-700 md:text-lg">
              <p>
                Türkiye Sigorta’nın yılın ilk beş aylık dönemine ilişkin prim
                üretimi 79,2 milyar TL seviyesine ulaştı. Açıklanan veri,
                şirketin sigortacılık faaliyetlerinde güçlü üretim temposunu
                sürdürdüğünü gösterdi.
              </p>

              <p>
                Prim üretimi verileri, sigorta şirketlerinin operasyonel
                büyüklüğünü ve faaliyet hacmini takip etmek açısından önemli
                göstergeler arasında yer alıyor. Türkiye Sigorta’nın açıkladığı
                rakam, sektör genelindeki büyüme görünümü açısından da dikkat
                çekti.
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
                    <p className="mt-1.5 text-sm text-slate-600 leading-relaxed">{haber.metin}</p>
                  </section>
                ))}
              </div>

              <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm font-medium leading-7 text-emerald-900 md:text-base">
                Türkiye Sigorta’nın prim üretiminin 79,2 milyar TL seviyesine
                yükselmesi, şirketin faaliyet hacmi ve operasyonel büyüme
                görünümü açısından öne çıkan önemli gelişmelerden biri oldu.
              </div>
              <HaberIlgiliBolumler slug="turkiye-sigortanin-prim-uretimi-79-2-milyar-tlye-yukseldi" baslik="Türkiye Sigorta’nın Prim Üretimi 79,2 Milyar TL’ye Yükseldi" />

              <div className="rounded-xl border border-blue-100 bg-blue-50 p-4">
                <p className="mb-2 text-sm font-semibold text-zinc-900">Sigorta sektöründe dikkat çeken diğer gelişmeler:</p>
                <Link href="/haber/sigorta-prim-uretimi-artisi-agesa-ansgr" prefetch={false} className="inline-flex items-center gap-1 text-sm font-semibold text-blue-700 hover:underline">
                  AGESA ve ANSGR Prim Üretimi Artışı <span aria-hidden>→</span>
                </Link>
              </div>

              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm font-medium leading-7 text-amber-900 md:text-base">
                ⚠️ Bu haber bilgilendirme amaçlıdır, yatırım tavsiyesi
                değildir.
              </div>
            </div>
          </div>
          <HaberAltKisim href="/haber/turkiye-sigortanin-prim-uretimi-79-2-milyar-tlye-yukseldi" />

          <AuthorBox />

        </article>
      </div>
    </main>
  );
}