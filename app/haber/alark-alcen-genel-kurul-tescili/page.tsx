import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import HaberIlgiliBolumler from "@/components/HaberIlgiliBolumler";
import AuthorBox from "@/components/AuthorBox";
import HaberAltKisim from "@/components/HaberAltKisim";

export const metadata: Metadata = {
  title: "ALARK Alcen Genel Kurul Tesciliyle Enerji Yapısını Güncelledi",
  description:
    "ALARK, Alcen Enerji’de alınan olağanüstü genel kurul kararının ticaret siciline tescil edildiğini ve işlemin geçerlilik kazandığını açıkladı.",
  alternates: {
    canonical:
      "https://www.hocaileborsa.com/haber/alark-alcen-genel-kurul-tescili",
  },
  openGraph: {
    type: "article",
    images: [{ url: "https://www.hocaileborsa.com/alark-alcen-genel-kurul-tescili.webp" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.hocaileborsa.com/alark-alcen-genel-kurul-tescili.webp"],
  },
};

const haberDetaylari = [
  {
    baslik: "Ne oldu?",
    metin:
      "Alarko Holding A.Ş. (ALARK), müşterek ortaklığı Alcen Enerji Dağıtım ve Perakende Satış Hizmetleri A.Ş.’nin olağanüstü genel kurul kararının ticaret siciline tescil edildiğini açıkladı. Bildirimde, daha önce duyurulan enerji yapılanması kapsamında alınan genel kurul kararının tescil ile geçerlilik kazandığı belirtildi.",
  },
  {
    baslik: "Bu ne anlama geliyor?",
    metin:
      "Ticaret sicili tescili, genel kurulda alınan kararın resmi olarak geçerlilik kazanması anlamına gelir. Bu açıklamada öne çıkan konu, Alarko Enerji ile Cengiz Enerji arasında planlanan yapının ilerlemesidir. Yapıya göre Cenal Karabiga Termik Santrali’nin Cengiz Enerji tarafında; elektrik dağıtım, elektrik satış ve ilgili alanlarda faaliyet gösteren şirketlerin ise Alarko Enerji tarafında bulunması hedefleniyor.",
  },
  {
    baslik: "Şirket hakkında",
    metin:
      "Alarko Holding; enerji, taahhüt, sanayi, turizm ve gayrimenkul gibi farklı alanlarda faaliyet gösteren köklü bir holding şirketidir. Şirketin enerji tarafındaki faaliyetleri, bağlı ortaklıkları ve müşterek yönetime tabi ortaklıkları üzerinden yürütülmektedir.",
  },
  {
    baslik: "Değerlendirme",
    metin:
      "Holding şirketlerinde bu tür yapılanmalar doğrudan yeni bir satış ya da tek kalem ciro haberi gibi okunmamalıdır. Buradaki mekanizma, iştirak ve bağlı ortaklık yapısının yeniden düzenlenmesidir. Enerji varlıklarının hangi şirket bünyesinde toplanacağı, ilerleyen dönemde konsolidasyon, operasyonel yönetim ve finansal raporlama açısından önem taşır. Bu nedenle haberin değeri, kısa vadeli fiyat beklentisinden çok Alarko’nun enerji portföyünün nasıl konumlanacağı üzerinden okunmalıdır.",
  },
  {
    baslik: "Sırada ne var?",
    metin:
      "Genel kurul kararının tescil edilmesiyle bu aşama tamamlandı. Bundan sonraki süreçte, yeni kurulacak şirketler ve pay devirleriyle ilgili tamamlayıcı adımların nasıl ilerleyeceği takip edilecek. KAP açıklamasında bu işlemlerin nihai finansal etkisine ilişkin ayrı bir tutar paylaşılmadığı için bu konuda kesin yorum yapmak doğru olmaz.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "ALARK Alcen Genel Kurul Tesciliyle Enerji Yapısını Güncelledi",
  description:
    "ALARK, Alcen Enerji’de alınan olağanüstü genel kurul kararının ticaret siciline tescil edildiğini ve işlemin geçerlilik kazandığını açıkladı.",
  datePublished: "2026-06-25T18:53:37+03:00",
  dateModified: "2026-06-25T19:20:00+03:00",
  url: "https://www.hocaileborsa.com/haber/alark-alcen-genel-kurul-tescili",
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
  image: "https://www.hocaileborsa.com/alark-alcen-genel-kurul-tescili.webp",
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
              src="/alark-alcen-genel-kurul-tescili.webp"
              alt="ALARK Alcen Genel Kurul Tesciliyle Enerji Yapısını Güncelledi"
              fill

              sizes="(min-width: 1024px) 896px, 100vw"
className="object-cover"
            />
          </div>

          <div className="p-6 md:p-10">
            <h1 className="text-2xl font-bold leading-tight tracking-tight text-slate-900 md:text-3xl lg:text-4xl">
              ALARK Alcen Genel Kurul Tesciliyle Enerji Yapısını Güncelledi
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
                Alarko Holding A.Ş. (ALARK), müşterek ortaklığı Alcen Enerji
                Dağıtım ve Perakende Satış Hizmetleri A.Ş.’nin olağanüstü genel
                kurul kararının ticaret siciline tescil edildiğini açıkladı.
                Bildirim, şirketin enerji tarafındaki yapılanma süreci açısından
                önemli bir adım olarak öne çıktı.
              </p>

              <div className="grid gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm leading-7 text-slate-700 md:grid-cols-2 md:text-base">
                <div>
                  <span className="font-semibold text-slate-900">
                    Şirket:
                  </span> 
                  ALARK
                </div>
                <div>
                  <span className="font-semibold text-slate-900">
                    İlgili Ortaklık:
                  </span> 
                  Alcen Enerji
                </div>
                <div>
                  <span className="font-semibold text-slate-900">
                    İşlem Türü:
                  </span> 
                  Genel kurul tescili
                </div>
                <div>
                  <span className="font-semibold text-slate-900">
                    Bildirim Tarihi:
                  </span> 
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
                Kaynak: ALARK tarafından 25 Haziran 2026 tarihinde KAP&apos;a yapılan
                özel durum açıklaması.
                <br />
                <a
                  href="https://www.kap.org.tr/tr/Bildirim/1620757"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Orjinal Kap içeriği
                </a>
              </div>

              <HaberIlgiliBolumler
                slug="alark-alcen-genel-kurul-tescili"
                baslik="ALARK Alcen Genel Kurul Tesciliyle Enerji Yapısını Güncelledi"
              />

              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm font-medium leading-7 text-amber-900 md:text-base">
                ⚠️ Bu içerik bilgilendirme amaçlıdır, yatırım tavsiyesi değildir.
              </div>
            </div>
          </div>
          <HaberAltKisim href="/haber/alark-alcen-genel-kurul-tescili" />

          <AuthorBox />
        </article>
      </div>
    </main>
  );
}
