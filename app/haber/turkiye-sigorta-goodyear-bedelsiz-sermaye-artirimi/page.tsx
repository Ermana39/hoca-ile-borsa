import Image from "next/image";
import Link from "@/components/NoPrefetchLink";
import type { Metadata } from "next";
import HaberIlgiliBolumler from "@/components/HaberIlgiliBolumler";
import AuthorBox from "@/components/AuthorBox";
import HaberAltKisim from "@/components/HaberAltKisim";

export const metadata: Metadata = {
  title:
    "SPK’dan Türkiye Sigorta ve Goodyear İçin Bedelsiz Sermaye Artırımı Onayı",
  description:
    "SPK, Türkiye Sigorta ve Goodyear Lastikleri Türk AŞ’nin bedelsiz sermaye artırımı kapsamındaki pay ihraçlarını onayladı. TURSG ve GOODY sermaye artırımı detayları.",
  alternates: {
    canonical:
      "https://www.hocaileborsa.com/haber/turkiye-sigorta-goodyear-bedelsiz-sermaye-artirimi",
  },
  openGraph: {
    type: "article",
    images: [{ url: "https://www.hocaileborsa.com/turkiye-sigorta-goodyear-bedelsiz-sermaye-artirimi-discover.webp" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.hocaileborsa.com/turkiye-sigorta-goodyear-bedelsiz-sermaye-artirimi-discover.webp"],
  },
};

const sermayeArtirimlari = [
  {
    baslik: "Türkiye Sigorta’nın Sermayesi 20 Milyar TL’ye Çıkacak",
    metin:
      "SPK bülteninde yer alan bilgilere göre Türkiye Sigorta AŞ’nin mevcut 10 milyar TL olan sermayesinin 20 milyar TL’ye çıkarılması onaylandı. Şirketin 10 milyar TL tutarındaki bedelsiz sermaye artırımı kâr payından karşılanacak.",
  },
  {
    baslik: "Goodyear’da Sermaye 1,52 Milyar TL’ye Yükseltilecek",
    metin:
      "Goodyear Lastikleri Türk AŞ tarafında ise mevcut 270 milyon TL sermayenin 1 milyar 520 milyon TL’ye çıkarılması planlanıyor. Şirketin 1 milyar 250 milyon TL tutarındaki bedelsiz sermaye artırımı iç kaynaklardan karşılanacak.",
  },
  {
    baslik: "Bedelsiz Sermaye Artırımı Ne Anlama Geliyor?",
    metin:
      "Bedelsiz sermaye artırımı, şirketin iç kaynaklarını ya da kâr payını sermayeye eklemesiyle gerçekleşir. Bu işlem sonucunda yatırımcının lot sayısı artar ancak hisse fiyatı teorik olarak bölünme oranına göre düzeltilir.",
  },
  {
    baslik: "TURSG ve GOODY Hisselerinde Haber Akışı Takip Edilecek",
    metin:
      "SPK onayının ardından yatırımcıların odağında hak kullanım tarihleri, düzeltilmiş fiyatlar ve şirketlerden gelecek ek açıklamalar olacak. Bu süreçte kısa vadeli fiyatlamalarda haber etkisi görülebilir.",
  },
  {
    baslik: "Yatırımcılar Nelere Dikkat Etmeli?",
    metin:
      "Bedelsiz sermaye artırımı tek başına şirket değerinin arttığı anlamına gelmez. Bu nedenle yatırımcıların şirketlerin bilanço yapısını, kârlılığını, büyüme performansını ve genel piyasa koşullarını birlikte değerlendirmesi önemlidir.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline:
    "SPK’dan Türkiye Sigorta ve Goodyear İçin Bedelsiz Sermaye Artırımı Onayı",
  description:
    "SPK, Türkiye Sigorta AŞ ve Goodyear Lastikleri Türk AŞ’nin bedelsiz sermaye artırımı kapsamındaki pay ihraçlarını onayladı.",
  datePublished: "2026-06-12T09:00:00+03:00",
  dateModified: "2026-06-12T09:00:00+03:00",
  url: "https://www.hocaileborsa.com/haber/turkiye-sigorta-goodyear-bedelsiz-sermaye-artirimi",
  author: { "@type": "Person", "@id": "https://www.hocaileborsa.com/yazar/erman-hoca#person", name: "Erman Hoca", url: "https://www.hocaileborsa.com/yazar/erman-hoca" },
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
    "https://www.hocaileborsa.com/turkiye-sigorta-goodyear-bedelsiz-sermaye-artirimi-discover.webp",
  inLanguage: "tr",
};

export default function TurkiyeSigortaGoodyearBedelsizPage() {
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
              src="/turkiye-sigorta-goodyear-bedelsiz-sermaye-artirimi-discover.webp"
              alt="Türkiye Sigorta ve Goodyear bedelsiz sermaye artırımı onayı"
              fill

              sizes="(min-width: 1024px) 896px, 100vw"
className="object-cover"
            />
          </div>

          <div className="p-6 md:p-10">
            <h1 className="text-2xl font-bold leading-tight tracking-tight text-slate-900 md:text-3xl lg:text-4xl">
              SPK’dan Türkiye Sigorta ve Goodyear İçin Bedelsiz Sermaye Artırımı
              Onayı
            </h1>

            <div className="mb-4 mt-4 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center rounded-md bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700 ring-1 ring-inset ring-blue-600/20">
                SPK Bülteni
              </span>
              <time dateTime="2026-06-12" className="text-sm text-slate-500">
                12 Haziran 2026
              </time>
              <span className="text-slate-300">·</span>
              <Link href="/yazar/erman-hoca" className="text-sm font-semibold text-slate-500 hover:text-blue-600">
                Erman Hoca
              </Link>
            </div>

            <div className="mt-6 space-y-6 text-base leading-8 text-slate-700 md:text-lg">
              <p>
                Sermaye Piyasası Kurulu’nun 2026/36 sayılı bülteninde, Türkiye
                Sigorta AŞ ve Goodyear Lastikleri Türk AŞ’nin bedelsiz sermaye
                artırımı kapsamındaki pay ihraçlarına onay verildi. Karar,
                özellikle TURSG ve GOODY hisselerini takip eden yatırımcıların
                gündeminde öne çıktı.
              </p>

              <p>
                SPK bültenine göre Türkiye Sigorta’nın sermayesi 10 milyar
                TL’den 20 milyar TL’ye çıkarılacak. Goodyear Lastikleri Türk
                AŞ’nin sermayesi ise 270 milyon TL’den 1 milyar 520 milyon TL’ye
                yükseltilecek.
              </p>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-xl border border-blue-200 bg-blue-50 p-4">
                  <h2 className="text-base font-semibold text-blue-900">
                    Türkiye Sigorta AŞ
                  </h2>
                  <div className="mt-3 space-y-2 text-sm leading-6 text-blue-900">
                    <p>
                      <strong>Mevcut sermaye:</strong> 10.000.000.000 TL
                    </p>
                    <p>
                      <strong>Yeni sermaye:</strong> 20.000.000.000 TL
                    </p>
                    <p>
                      <strong>Artırım tutarı:</strong> 10.000.000.000 TL
                    </p>
                    <p>
                      <strong>Kaynak:</strong> Kâr payından
                    </p>
                  </div>
                </div>

                <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4">
                  <h2 className="text-base font-semibold text-emerald-900">
                    Goodyear Lastikleri Türk AŞ
                  </h2>
                  <div className="mt-3 space-y-2 text-sm leading-6 text-emerald-900">
                    <p>
                      <strong>Mevcut sermaye:</strong> 270.000.000 TL
                    </p>
                    <p>
                      <strong>Yeni sermaye:</strong> 1.520.000.000 TL
                    </p>
                    <p>
                      <strong>Artırım tutarı:</strong> 1.250.000.000 TL
                    </p>
                    <p>
                      <strong>Kaynak:</strong> İç kaynaklar
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-5">
                {sermayeArtirimlari.map((haber) => (
                  <section
                    key={haber.baslik}
                    className="rounded-xl border border-slate-200 bg-slate-50 p-4"
                  >
                    <h2 className="text-base font-semibold text-slate-800">
                      {haber.baslik}
                    </h2>
                    <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
                      {haber.metin}
                    </p>
                  </section>
                ))}
              </div>

              <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm font-medium leading-7 text-emerald-900 md:text-base">
                Kısa vadede TURSG ve GOODY hisselerinde bedelsiz sermaye
                artırımı haberinin fiyatlamaya etkisi takip edilecek. Ancak
                yatırımcılar için asıl önemli nokta, şirketlerin temel finansal
                görünümü ve genel piyasa koşulları olacak.
              </div>

              <div className="rounded-xl border border-blue-200 bg-blue-50 p-4 text-sm font-medium leading-7 text-blue-900 md:text-base">
                Bedelsiz sermaye artırımı sonrasında yatırımcıların lot sayısı
                artarken, hisse fiyatı teorik olarak bölünme oranına göre
                düzeltilir. Bu nedenle toplam yatırım değeri işlem anında tek
                başına artmış sayılmaz.
              </div>

              <HaberIlgiliBolumler
                slug="turkiye-sigorta-goodyear-bedelsiz-sermaye-artirimi"
                baslik="Türkiye Sigorta ve Goodyear Bedelsiz Sermaye Artırımı"
              />

              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm font-medium leading-7 text-amber-900 md:text-base">
                ⚠️ Bu haber bilgilendirme amaçlıdır, yatırım tavsiyesi değildir.
              </div>
            </div>
          </div>
          <HaberAltKisim href="/haber/turkiye-sigorta-goodyear-bedelsiz-sermaye-artirimi" />

          <AuthorBox />

        </article>
      </div>
    </main>
  );
}