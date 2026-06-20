import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import HaberIlgiliBolumler from "@/components/HaberIlgiliBolumler";
import AuthorBox from "@/components/AuthorBox";
import HaberNavigasyon from "@/components/HaberNavigasyon";
import HaberAltBilgi from "@/components/HaberAltBilgi";

export const metadata: Metadata = {
  title: "ABD Mahkemesi Halkbank Davasını Düşürdü: 9 Yıllık Süreç Sona Erdi",
  description:
    "ABD federal mahkemesi, Halkbank hakkında İran yaptırımları iddialarıyla açılan ceza davasının düşürülmesine karar verdi. Karar, HALKB hissesi ve bankacılık sektörü açısından önemli bir hukuki belirsizliği ortadan kaldırdı.",
  alternates: {
    canonical:
      "https://www.hocaileborsa.com/haber/abd-mahkemesi-halkbank-davasini-dusurdu",
  },
  openGraph: {
    type: "article",
    images: [
      {
        url: "https://www.hocaileborsa.com/halkbank-abd-davasi-dustu-discover.webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [
      "https://www.hocaileborsa.com/halkbank-abd-davasi-dustu-discover.webp",
    ],
  },
};

const piyasaBasliklari = [
  {
    baslik: "ABD Mahkemesinden Halkbank Kararı",
    metin:
      "ABD’de federal yargıç, Halkbank hakkında 2019 yılında açılan ceza iddianamesinin düşürülmesine karar verdi. Reuters’ın 17 Haziran 2026 tarihli haberine göre karar, banka ile ABD yönetimi arasında varılan uzlaşma sürecinin ardından geldi. Böylece uzun süredir hem banka hisseleri hem de Türkiye-ABD ilişkileri açısından izlenen dava başlığı resmi olarak kapanmış oldu.",
  },
  {
    baslik: "Dava Hangi İddialarla Açılmıştı?",
    metin:
      "Halkbank davası, bankanın İran’a yönelik ABD yaptırımlarının delinmesine yardım ettiği iddiaları üzerinden açılmıştı. ABD savcıları, İran petrol gelirlerinin altın ve nakit transferleri ile gıda sevkiyatı gibi gösterilen işlemler üzerinden aktarıldığını ileri sürüyordu. Halkbank ise süreç boyunca suçlamaları kabul etmediğini belirtmişti.",
  },
  {
    baslik: "Uzlaşma Süreci Mart Ayında Başlamıştı",
    metin:
      "Reuters’ın daha önce aktardığı bilgilere göre Halkbank ile ABD Adalet Bakanlığı arasında Mart 2026’da davanın çözümüne yönelik anlaşma sağlanmıştı. Bu süreçte banka için belirli uyum şartları tanımlanırken, mahkeme dosyasının kapatılması için 90 günlük uyum ve değerlendirme süreci takip edildi.",
  },
  {
    baslik: "KAP Açıklamasında Ortak Dilekçe Vurgusu Yapılmıştı",
    metin:
      "Halkbank’ın KAP açıklamasında, uyum raporunun ilgili ABD kurumlarına teslim edildiği ve ceza davasının düşürülmesine yönelik müşterek dilekçenin 10 Haziran 2026 tarihinde ABD Güney New York Bölge Mahkemesi’ne sunulduğu belirtilmişti. Mahkeme onayıyla birlikte 9 yıldır devam eden ceza davasının tamamen sona ereceği ifade edilmişti.",
  },
  {
    baslik: "Suç Kabulü ve Para Cezası Yok",
    metin:
      "Reuters’ın haberine göre anlaşma kapsamında Halkbank suç kabulünde bulunmadı ve para cezası ödemedi. Buna karşılık bankanın İran’a fayda sağlayabilecek işlemlerden kaçınması, yaptırımlar ve kara para aklamayla mücadele alanındaki uyum süreçlerini belirlenen çerçevede sürdürmesi gerekiyor.",
  },
  {
    baslik: "Uyum Süreci ve Denetim Başlığı İzlenecek",
    metin:
      "Davanın düşmesi hukuki belirsizliği azaltan önemli bir gelişme olsa da, bankanın önümüzdeki dönemde yaptırım uyumu ve kara para aklamayla mücadele süreçlerine ilişkin yükümlülükleri devam edecek. Bu nedenle karar sonrası ana takip başlıklarından biri, bankanın uluslararası uyum standartlarını nasıl sürdüreceği olacak.",
  },
  {
    baslik: "HALKB Hissesi İçin Belirsizlik Azaldı",
    metin:
      "Dava, yıllardır HALKB hissesi üzerinde önemli bir risk başlığı olarak izleniyordu. Ceza dosyasının düşürülmesi, hisse tarafında hukuki belirsizliğin azalması açısından olumlu okunabilir. Ancak fiyatlama açısından tek belirleyici bu karar olmayacak; bankanın kârlılığı, aktif kalitesi, sermaye yeterliliği ve genel bankacılık sektörü görünümü de takip edilmeye devam edecek.",
  },
  {
    baslik: "Bankacılık Sektörü Açısından Önemi",
    metin:
      "Halkbank davasının kapanması, yalnızca tek bir banka özelinde değil, kamu bankaları ve bankacılık sektörü algısı açısından da dikkat çekici bir gelişme olarak değerlendirilebilir. Uzun süredir devam eden bir dış hukuki riskin azalması, sektör üzerindeki algısal baskının hafiflemesine katkı sağlayabilir.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "ABD Mahkemesi Halkbank Davasını Düşürdü: 9 Yıllık Süreç Sona Erdi",
  description:
    "ABD federal mahkemesi, Halkbank hakkında İran yaptırımları iddialarıyla açılan ceza davasının düşürülmesine karar verdi. Karar, HALKB hissesi ve bankacılık sektörü açısından önemli bir hukuki belirsizliği ortadan kaldırdı.",
  datePublished: "2026-06-17T16:30:00+03:00",
  dateModified: "2026-06-17T16:30:00+03:00",
  url: "https://www.hocaileborsa.com/haber/abd-mahkemesi-halkbank-davasini-dusurdu",
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
  image: "https://www.hocaileborsa.com/halkbank-abd-davasi-dustu-discover.webp",
  inLanguage: "tr",
};

export default function HaberHalkbankAbdDavasiPage() {
  return (
    <main className="min-h-screen bg-[#f8fafc] px-4 py-6 md:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="mx-auto max-w-4xl">
        <nav
          className="mb-5 flex items-center gap-2 text-sm text-slate-500"
          aria-label="Breadcrumb"
        >
          <Link href="/" className="transition hover:text-blue-600">
            Ana Sayfa
          </Link>
          <span className="text-slate-300">/</span>
          <span className="font-medium text-slate-700">Haberler</span>
        </nav>

        <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_2px_16px_rgba(15,23,42,0.07)]">
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-zinc-100">
            <Image
              src="/halkbank-abd-davasi-dustu-discover.webp"
              alt="ABD mahkemesi Halkbank davasını düşürdü"
              fill
              unoptimized
              className="object-cover"
            />
          </div>

          <div className="p-6 md:p-10">
            <h1 className="text-2xl font-bold leading-tight tracking-tight text-slate-900 md:text-3xl lg:text-4xl">
              ABD Mahkemesi Halkbank Davasını Düşürdü: 9 Yıllık Süreç Sona Erdi
            </h1>

            <div className="mb-4 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center rounded-md bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700 ring-1 ring-inset ring-blue-600/20">
                Bankacılık
              </span>
              <time dateTime="2026-06-17" className="text-sm text-slate-500">
                17 Haziran 2026
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
                ABD’de Halkbank aleyhine uzun süredir devam eden ceza davasında
                kritik karar çıktı. 17 Haziran 2026 tarihli Reuters haberine
                göre ABD’li federal yargıç, Halkbank hakkındaki ceza
                iddianamesinin düşürülmesine karar verdi. Böylece bankanın
                ABD’de yaklaşık 9 yıldır devam eden dava süreci kapanmış oldu.
              </p>

              <p>
                Karar, Halkbank hissesi ve bankacılık sektörü açısından uzun
                süredir izlenen en önemli hukuki belirsizliklerden birinin
                ortadan kalkması anlamına geliyor. Dava başlığı tamamen
                kapanırken, bundan sonraki süreçte bankanın finansal
                performansı, bilanço kalitesi ve uyum yükümlülükleri
                yatırımcıların odağında kalmaya devam edecek.
              </p>

              <div className="space-y-5">
                {piyasaBasliklari.map((haber) => (
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
                Günün ana mesajı; Halkbank hakkında ABD’de devam eden ceza
                davasının mahkeme kararıyla düşürülmesi oldu. Bu karar, bankanın
                üzerinde yıllardır takip edilen dış hukuki risklerden birinin
                önemli ölçüde geride kalması açısından piyasa tarafından
                yakından izlenecek.
              </div>

              <div className="rounded-xl border border-blue-200 bg-blue-50 p-4 text-sm font-medium leading-7 text-blue-900 md:text-base">
                Kısa vadede HALKB tarafında haber etkisiyle oluşabilecek
                fiyatlama takip edilirken, orta vadede bankanın kârlılık
                görünümü, kredi büyümesi, aktif kalitesi, sermaye yeterliliği ve
                bankacılık sektörüne yönelik genel risk iştahı belirleyici
                olmaya devam edecek.
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-4 text-sm leading-7 text-slate-700 md:text-base">
                <p className="font-semibold text-slate-800">Kaynaklar</p>
                <ul className="mt-2 list-disc space-y-1 pl-5">
                  <li>
                    Reuters: 17 Haziran 2026 tarihli Halkbank davası haberi.
                  </li>
                  <li>
                    KAP: Halkbank’ın ABD’deki ceza davası ve OFAC süreçlerine
                    ilişkin özel durum açıklaması.
                  </li>
                </ul>
              </div>

              <HaberIlgiliBolumler
                slug="abd-mahkemesi-halkbank-davasini-dusurdu"
                baslik="ABD Mahkemesi Halkbank Davasını Düşürdü"
              />

              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm font-medium leading-7 text-amber-900 md:text-base">
                ⚠️ Bu haber bilgilendirme amaçlıdır, yatırım tavsiyesi değildir.
              </div>
            </div>
          </div>
          <HaberAltBilgi href="/haber/halkbank_abd_davasi" />

          <HaberNavigasyon href="/haber/halkbank_abd_davasi" />

          <AuthorBox />
        </article>
      </div>
    </main>
  );
}
