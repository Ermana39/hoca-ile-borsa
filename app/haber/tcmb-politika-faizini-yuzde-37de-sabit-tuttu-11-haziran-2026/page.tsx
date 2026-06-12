import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import HaberIlgiliBolumler from "@/components/HaberIlgiliBolumler";
import AuthorBox from "@/components/AuthorBox";
import HaberNavigasyon from "@/components/HaberNavigasyon";

export const metadata: Metadata = {
  title: "TCMB Politika Faizini Yüzde 37’de Sabit Tuttu",
  description:
    "TCMB Para Politikası Kurulu, 11 Haziran 2026 tarihli toplantısında politika faizini yüzde 37’de sabit tuttu. Gecelik borç verme faizi yüzde 40, borçlanma faizi yüzde 35,5 seviyesinde korundu.",
  alternates: {
    canonical:
      "https://www.hocaileborsa.com/haber/tcmb-politika-faizini-yuzde-37de-sabit-tuttu-11-haziran-2026",
  },
};

const kararDetaylari = [
  {
    baslik: "Politika faizi değişmedi",
    metin:
      "Türkiye Cumhuriyet Merkez Bankası Para Politikası Kurulu, politika faizi olan bir hafta vadeli repo ihale faiz oranını yüzde 37 seviyesinde sabit bıraktı. Karar, yüzde 37 seviyesindeki piyasa beklentisiyle uyumlu gerçekleşti.",
  },
  {
    baslik: "Faiz koridoru da sabit kaldı",
    metin:
      "Kurul, gecelik vadede borç verme faiz oranını yüzde 40’ta, gecelik vadede borçlanma faiz oranını ise yüzde 35,5’te sabit tuttu. Böylece TCMB, ana faiz oranında olduğu gibi koridor faizlerinde de değişikliğe gitmedi.",
  },
  {
    baslik: "Enflasyonun ana eğilimi mesajı",
    metin:
      "Karar metninde, yılın ilk aylarındaki yükselişin ardından enerji fiyatlarının da etkisiyle nisan ayında artan enflasyonun ana eğiliminin mayıs ayında bir miktar gerilediği belirtildi. Bu ifade, TCMB’nin enflasyon görünümünü izlemeye devam ettiğini gösterdi.",
  },
  {
    baslik: "İç talepte zayıf seyir vurgusu",
    metin:
      "TCMB, ilk çeyreğe ait verilerin iktisadi faaliyette yavaşlamanın sürdüğüne işaret ettiğini, öncü verilerin ise iç talepteki zayıf seyrin devam ettiğini gösterdiğini açıkladı. Bu vurgu, sıkı para politikasının talep kanalı üzerinden etkilerinin izlendiğini ortaya koyuyor.",
  },
  {
    baslik: "Jeopolitik riskler yakından izleniyor",
    metin:
      "Karar metninde jeopolitik gelişmelerin enerji fiyatları, maliyet kanalı, iktisadi faaliyet ve beklentiler üzerinden enflasyon görünümüne etkilerinin yakından takip edildiği ifade edildi. Enerji fiyatlarındaki oynaklık ve yüksek seyrin sürdüğü de ayrıca vurgulandı.",
  },
  {
    baslik: "Sıkı para politikası duruşu korunacak",
    metin:
      "TCMB, fiyat istikrarı sağlanana kadar sıkı para politikası duruşunun sürdürüleceğini belirtti. Kurul, sonraki adımların enflasyon gerçekleşmeleri, enflasyonun ana eğilimi ve beklentiler dikkate alınarak dezenflasyonun gerektirdiği sıkılığı sağlayacak şekilde belirleneceğini açıkladı.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "TCMB Politika Faizini Yüzde 37’de Sabit Tuttu",
  description:
    "TCMB Para Politikası Kurulu, 11 Haziran 2026 tarihli toplantısında politika faizini yüzde 37’de sabit tuttu. Gecelik borç verme faizi yüzde 40, borçlanma faizi yüzde 35,5 seviyesinde korundu.",
  datePublished: "2026-06-11T14:05:00+03:00",
  dateModified: "2026-06-11T14:05:00+03:00",
  url: "https://www.hocaileborsa.com/haber/tcmb-politika-faizini-yuzde-37de-sabit-tuttu-11-haziran-2026",
  author: { "@type": "Organization", name: "Hoca İle Borsa", url: "https://www.hocaileborsa.com" },
  publisher: {
    "@type": "Organization",
    "@id": "https://www.hocaileborsa.com/#organization",
    name: "Hoca İle Borsa",
    url: "https://www.hocaileborsa.com",
    logo: { "@type": "ImageObject", url: "https://www.hocaileborsa.com/icon-512.png" },
  },
  image: "https://www.hocaileborsa.com/tcmb-faiz-karari.webp",
  inLanguage: "tr",
};

export default function TcmbFaizKarariPage() {
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
              src="/tcmb-faiz-karari.webp"
              alt="TCMB politika faizini yüzde 37’de sabit tuttu"
              fill
              unoptimized
              className="object-cover"
            />
          </div>

          <div className="p-6 md:p-10">
            <h1 className="text-2xl font-bold leading-tight tracking-tight text-slate-900 md:text-3xl lg:text-4xl">
              TCMB Politika Faizini Yüzde 37’de Sabit Tuttu
            </h1>

            <div className="mb-4 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center rounded-md bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700 ring-1 ring-inset ring-blue-600/20">
                Ekonomi
              </span>
              <time dateTime="2026-06-11" className="text-sm text-slate-500">11 Haziran 2026</time>
              <span className="text-slate-300">·</span>
              <Link href="/yazar/erman-hoca" className="text-sm font-semibold text-slate-500 hover:text-blue-600">
                Erman Hoca
              </Link>
            </div>

            <div className="mt-6 space-y-6 text-base leading-8 text-slate-700 md:text-lg">
              <p>
                Türkiye Cumhuriyet Merkez Bankası Para Politikası Kurulu, 11 Haziran 2026
                tarihli toplantısında politika faizi olan bir hafta vadeli repo ihale faiz
                oranını yüzde 37 seviyesinde sabit tuttu. Karar, yüzde 37 seviyesindeki
                piyasa beklentisiyle paralel gerçekleşti.
              </p>

              <p>
                Kurul ayrıca gecelik vadede borç verme faiz oranını yüzde 40’ta,
                gecelik vadede borçlanma faiz oranını ise yüzde 35,5’te sabit bıraktı.
                Karar metninde enflasyonun ana eğilimi, iç talepteki zayıf seyir,
                enerji fiyatlarındaki oynaklık ve jeopolitik gelişmeler öne çıkan başlıklar oldu.
              </p>

              <div className="grid gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm leading-7 text-slate-700 md:grid-cols-3 md:text-base">
                <div>
                  <div className="font-semibold text-slate-900">Politika Faizi</div>
                  <div className="text-2xl font-bold text-slate-900">%37,00</div>
                  <div className="text-xs text-slate-500">Sabit bırakıldı</div>
                </div>
                <div>
                  <div className="font-semibold text-slate-900">Borç Verme Faizi</div>
                  <div className="text-2xl font-bold text-slate-900">%40,00</div>
                  <div className="text-xs text-slate-500">Gecelik vade</div>
                </div>
                <div>
                  <div className="font-semibold text-slate-900">Borçlanma Faizi</div>
                  <div className="text-2xl font-bold text-slate-900">%35,50</div>
                  <div className="text-xs text-slate-500">Gecelik vade</div>
                </div>
              </div>

              <div className="space-y-5">
                {kararDetaylari.map((haber) => (
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
                Kararın piyasa açısından ana mesajı, TCMB’nin faiz indirimine başlamadan önce
                dezenflasyon sürecinde daha net ve kalıcı bir iyileşme görmek istediği yönünde
                okunabilir. İç talepteki zayıflama olumlu bir unsur olarak öne çıkarken,
                enerji fiyatları ve jeopolitik riskler enflasyon görünümü açısından takip edilecek
                başlıklar arasında kalmaya devam ediyor.
              </div>
              <HaberIlgiliBolumler slug="tcmb-politika-faizini-yuzde-37de-sabit-tuttu-11-haziran-2026" baslik="TCMB Politika Faizini Yüzde 37’de Sabit Tuttu" />

              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm font-medium leading-7 text-amber-900 md:text-base">
                ⚠️ Bu haber bilgilendirme amaçlıdır, yatırım tavsiyesi değildir.
              </div>
            </div>
          </div>
          <HaberNavigasyon href="/haber/tcmb-politika-faizini-yuzde-37de-sabit-tuttu-11-haziran-2026" />

          <AuthorBox />

        </article>
      </div>
    </main>
  );
}
