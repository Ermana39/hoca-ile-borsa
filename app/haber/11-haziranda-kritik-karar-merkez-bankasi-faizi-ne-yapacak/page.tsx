import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "11 Haziran’da Kritik Karar: Merkez Bankası Faizi Ne Yapacak?",
  description:
    "TCMB, 11 Haziran Perşembe günü PPK toplantısında faiz kararını açıklayacak. Piyasalar faizin yüzde 37’de sabit kalmasını beklerken, bazı ekonomistler artış öngörüyor.",
  alternates: {
    canonical: "https://www.hocaileborsa.com/haber/11-haziranda-kritik-karar-merkez-bankasi-faizi-ne-yapacak",
  },
};

const haberDetaylari = [
  {
    baslik: "Ağırlıklı Beklenti: Faiz Değişmez",
    metin:
      "34 yerli ve yabancı aracı kurum ile bankanın katıldığı ankete göre ekonomistlerin 33’ü politika faizinde değişiklik beklemiyor ve mevcut yüzde 37 seviyesinin korunacağını öngörüyor. 6 ekonomist ise faizin 300 baz puan artırılarak yüzde 40’a çekilebileceğini düşünüyor.",
  },
  {
    baslik: "Enflasyon Tablosu Belirleyici Olacak",
    metin:
      "Hazine ve Maliye Bakanı Mehmet Şimşek’in açıkladığı verilere göre Mayıs ayında yıllık enflasyon yüzde 32,6, aylık enflasyon ise yüzde 1,7 olarak gerçekleşti. Bu tablonun Merkez Bankası’nın faizi sabit tutması için zemin oluşturduğu değerlendiriliyor.",
  },
  {
    baslik: "GCM Yatırım’dan Sıkı Duruş Beklentisi",
    metin:
      "GCM Yatırım Araştırma Departmanı, enerji ve gıda fiyatlarındaki oynaklık ile küresel jeopolitik risklerin bir arada değerlendirildiği ortamda Merkez Bankası’nın sıkı para politikası duruşunu sürdürmesini bekliyor.",
  },
  {
    baslik: "İlk Faiz İndirimi Ne Zaman Gelir?",
    metin:
      "Ankete katılan ekonomistlerin önemli bir bölümü indirim döngüsünün Eylül ayında başlayabileceğini öngörüyor. En iyimser senaryo Temmuz’u işaret ederken, en temkinli kesim ilk indirimin Ocak 2027’ye kalabileceğini düşünüyor.",
  },
  {
    baslik: "Yatırımcıya Not",
    metin:
      "11 Haziran kararı yalnızca faiz oranını değil, TCMB’nin yıl sonuna kadar izleyeceği yol haritasına dair sinyalleri de barındıracak. Faizin sabit kalması durumunda borsanın kısa vadede olumlu tepki verebileceği, artırım halinde ise satış baskısının gündeme gelebileceği değerlendiriliyor.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "11 Haziran'da Kritik Karar: Merkez Bankası Faizi Ne Yapacak?",
  description:
    "TCMB, 11 Haziran Perşembe günü PPK toplantısında faiz kararını açıklayacak. Piyasalar faizin yüzde 37'de sabit kalmasını bekliyor.",
  datePublished: "2026-06-07T09:00:00+03:00",
  dateModified: "2026-06-07T09:00:00+03:00",
  url: "https://www.hocaileborsa.com/haber/11-haziranda-kritik-karar-merkez-bankasi-faizi-ne-yapacak",
  author: { "@type": "Organization", name: "Hoca İle Borsa", url: "https://www.hocaileborsa.com" },
  publisher: {
    "@type": "Organization",
    name: "Hoca İle Borsa",
    url: "https://www.hocaileborsa.com",
    logo: { "@type": "ImageObject", url: "https://www.hocaileborsa.com/icon-512.png" },
  },
  image: "https://www.hocaileborsa.com/11-haziranda-kritik-karar-merkez-bankasi-faizi-ne-yapacak.webp",
  inLanguage: "tr",
};

export default function Haber980Page() {
  return (
    <main className="min-h-screen bg-[#f8fafc] px-4 py-6 md:px-6">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mx-auto max-w-4xl">
        <nav className="mb-5 flex items-center gap-2 text-sm text-slate-500" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-blue-600 transition">Ana Sayfa</Link>
          <span className="text-slate-300">/</span>
          <span className="text-slate-700 font-medium">Haberler</span>
        </nav>

        <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100">
            <Image
              src="/11-haziranda-kritik-karar-merkez-bankasi-faizi-ne-yapacak.webp"
              alt="11 Haziran'da Kritik Karar: Merkez Bankası Faizi Ne Yapacak?"
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
              <time dateTime="2026-06-07" className="text-sm text-slate-500">
                7 Haziran 2026
              </time>
              <span className="text-slate-300">·</span>
              <span className="text-sm text-slate-500">Hoca İle Borsa</span>
            </div>

            <h1 className="text-2xl font-bold leading-tight tracking-tight text-slate-900 md:text-3xl lg:text-4xl">
              11 Haziran’da Kritik Karar: Merkez Bankası Faizi Ne Yapacak?
            </h1>

            <div className="mt-6 space-y-6 text-base leading-8 text-slate-700 md:text-lg">
              <p>
                Tüm piyasa katılımcılarının gözü bu haftaki tek bir tarihe
                kilitlendi: 11 Haziran Perşembe. Türkiye Cumhuriyet Merkez
                Bankası (TCMB), Para Politikası Kurulu (PPK) toplantısını bu
                tarihte gerçekleştirecek ve saat 14.00’da açıklayacağı kararla
                yatırımcıların beklentilerini ya karşılayacak ya da piyasaları
                sarsacak.
              </p>

              <p>
                Piyasa analistleri ve ekonomistler büyük çoğunlukla faizin bu ay
                değişmeyeceğini öngörüyor. Hazine ve Maliye Bakanı Mehmet
                Şimşek’in geçen hafta açıkladığı Mayıs ayı enflasyon verisine
                göre yıllık enflasyon yüzde 32,6 düzeyinde gerçekleşti; aylık
                bazda ise yüzde 1,7 ile görece ılımlı bir seyir izlendi. Bu
                tablonun Merkez Bankası’nın elini güçlendirdiği ve faizi sabit
                tutmak için zemin oluşturduğu değerlendiriliyor.
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
                11 Haziran kararı, TCMB’nin yıl sonuna kadar izleyeceği yol
                haritasına dair sinyalleri de barındıracağından, hisse senedi
                yatırımcılarının özellikle bankacılık sektörü hisselerindeki
                tepkiyi yakından takip etmesi bekleniyor.
              </div>

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
