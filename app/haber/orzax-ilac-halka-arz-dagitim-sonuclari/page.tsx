import { serializeJsonLd } from "@/lib/json-ld";
import { seoAciklamasi } from "@/lib/seo-metadata";
import Image from "next/image";
import Link from "@/components/NoPrefetchLink";
import type { Metadata } from "next";
import HaberIlgiliBolumler from "@/components/HaberIlgiliBolumler";
import AuthorBox from "@/components/AuthorBox";
import HaberAltKisim from "@/components/HaberAltKisim";

const slug = "orzax-ilac-halka-arz-dagitim-sonuclari";
const title = "ORZAX İlaç Halka Arzında Dağıtımlar Sonuçlandı";
const description =
  "ORZAX İlaç halka arzında dağıtım süreci tamamlandı. Orzaks İlaç halka arzı sonrası yatırımcıların izleyeceği başlıklar ve süreç özeti.";
const url = `https://www.hocaileborsa.com/haber/${slug}`;
const imageUrl = `https://www.hocaileborsa.com/${slug}.webp`;

export const metadata: Metadata = {
  title,
  description: seoAciklamasi(description, "Haberde gelişmenin ayrıntıları, açıklanan veriler ve yatırımcıların izleyebileceği temel noktalar yer alıyor."),
  alternates: {
    canonical: url,
  },
  openGraph: {
    type: "article",
    images: [{ url: imageUrl }],
  },
  twitter: {
    card: "summary_large_image",
    images: [imageUrl],
  },
};

const ozetBilgiler = [
  { etiket: "Şirket", deger: "Orzaks İlaç ve Kimya A.Ş." },
  { etiket: "BIST Kodu", deger: "ORZAX" },
  { etiket: "Halka Arz Fiyatı", deger: "69,00 TL" },
  { etiket: "Talep Tarihi", deger: "29-30 Haziran / 1 Temmuz 2026" },
  { etiket: "Toplam Pay", deger: "52.500.000 lot" },
  { etiket: "Dağıtım", deger: "Bireysele eşit dağıtım" },
  { etiket: "Aracı Kurum", deger: "İnfo Yatırım" },
  { etiket: "Pazar", deger: "Yıldız Pazar" },
];

const haberDetaylari = [
  {
    baslik: "Ne oldu?",
    metin:
      "Orzaks İlaç ve Kimya Sanayi Ticaret A.Ş. halka arzında talep toplama süreci tamamlandı ve dağıtım aşamasına geçildi. Şirketin ORZAX koduyla Borsa İstanbul Yıldız Pazar’da işlem görmesi planlanıyor.",
  },
  {
    baslik: "Halka arz yapısı nasıldı?",
    metin:
      "Halka arzda toplam 52.500.000 lot pay satışa konu edildi. Pay başına halka arz fiyatı 69,00 TL olarak uygulanırken halka arz büyüklüğü yaklaşık 3,62 milyar TL seviyesinde hesaplandı.",
  },
  {
    baslik: "Bireysel yatırımcı tarafında ne izlenecek?",
    metin:
      "ORZAX halka arzında yurt içi bireysel yatırımcı grubuna %57 oranında tahsisat ayrılmıştı. Bu grupta eşit dağıtım yöntemi uygulandığı için yatırımcı başına düşen kesin lot sayısı, dağıtım sonuçlarının aracı kurum ekranlarına yansımasıyla takip edilecek.",
  },
  {
    baslik: "Dağıtım sonrası hangi tarihler önemli?",
    metin:
      "Dağıtım sürecinin ardından yatırımcıların takip edeceği başlıklar iade işlemleri, takas süreci ve ORZAX paylarının Borsa İstanbul’da işlem görmeye başlayacağı tarih olacak. İşlem tarihi açıklandığında ilk gün fiyat hareketleri ve emir dengesi ayrıca izlenecek.",
  },
  {
    baslik: "Değerlendirme",
    metin:
      "ORZAX halka arzı, takviye edici gıda ve sağlık destek ürünleri alanında faaliyet gösteren bir şirketin halka arzı olması nedeniyle yatırımcıların radarında kaldı. Dağıtım sonrası süreçte nihai lot bilgisi, işlem başlangıcı ve ilk gün likiditesi yatırımcı açısından belirleyici olacak.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: title,
  description,
  datePublished: "2026-07-01T10:30:00+03:00",
  dateModified: "2026-07-01T10:30:00+03:00",
  url,
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
  image: imageUrl,
  inLanguage: "tr",
};

export default function OrzaxIlacHalkaArzDagitimSonuclariPage() {
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
              src="/orzax-ilac-halka-arz-dagitim-sonuclari.webp"
              alt="ORZAX İlaç halka arzında dağıtımlar sonuçlandı"
              fill

              sizes="(min-width: 1024px) 896px, 100vw"
className="object-cover"
            />
          </div>

          <div className="p-6 md:p-10">
            <h1 className="text-2xl font-bold leading-tight tracking-tight text-slate-900 md:text-3xl lg:text-4xl">
              {title}
            </h1>

            <div className="mb-4 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center rounded-md bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700 ring-1 ring-inset ring-blue-600/20">
                Halka Arz
              </span>
              <time dateTime="2026-07-01" className="text-sm text-slate-500">
                1 Temmuz 2026
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
                ORZAX İlaç halka arzında talep toplama süreci tamamlandı ve
                yatırımcıların takip ettiği dağıtım süreci sonuçlandı. Halka arz
                fiyatı 69,00 TL olan Orzaks İlaç’ta dağıtım sonrası odak noktası
                iade süreci, takas işlemleri ve Borsa İstanbul’da işlem başlangıç
                tarihi olacak.
              </p>

              <div className="grid gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm leading-7 text-slate-700 md:grid-cols-2 md:text-base">
                {ozetBilgiler.map((item) => (
                  <div key={item.etiket}>
                    <span className="font-semibold text-slate-900">
                      {item.etiket}:
                    </span>{" "}
                    {item.deger}
                  </div>
                ))}
              </div>

              <div className="space-y-5">
                {haberDetaylari.map((haber) => (
                  <section key={haber.baslik}>
                    <h2 className="text-lg font-bold text-slate-900">
                      {haber.baslik}
                    </h2>
                    <p className="mt-2 text-base leading-8 text-slate-700">
                      {haber.metin}
                    </p>
                  </section>
                ))}
              </div>

              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm font-medium leading-7 text-slate-700 md:text-base">
                Kaynak: Orzaks İlaç halka arzına ilişkin izahname, halka arz
                dokümanları ve dağıtım süreci bilgilendirmeleri.
                <br />
                Not: Bu içerik bilgilendirme amacıyla hazırlanmıştır; yatırım
                tavsiyesi değildir.
              </div>

              <HaberIlgiliBolumler slug={slug} baslik={title} />
            </div>
          </div>

          <HaberAltKisim href={`/haber/${slug}`} />
          <AuthorBox />
        </article>
      </div>
    </main>
  );
}
