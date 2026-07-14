import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import AuthorBox from "@/components/AuthorBox";
import { formatHaberTarihi, getHaberDosyaTarihi } from "@/lib/haber-tarih";
import HaberAltKisim from "@/components/HaberAltKisim";

const haberSaati = getHaberDosyaTarihi(import.meta.url);
const haberTarihi = formatHaberTarihi(haberSaati);

export const metadata: Metadata = {
  title: "Haziran 2026 Enflasyonu Açıklandı: Maaş, Kira ve Bedelli Askerlik Etkisi",
  description:
    "Haziran 2026 enflasyonu aylık %0,99, yıllık %32,11 oldu. 6 aylık TÜFE %17,76’ya çıktı. Kira artış oranı, emekli ve memur maaşı zammı ile bedelli askerlik hesabı haberimizde.",
  alternates: {
    canonical:
      "https://www.hocaileborsa.com/haber/haziran-2026-enflasyon-rakamlari-maas-kira-bedelli-askerlik",
  },
  openGraph: {
    type: "article",
    images: [
      {
        url: "https://www.hocaileborsa.com/haziran-2026-enflasyon-maas-kira-bedelli-askerlik.webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [
      "https://www.hocaileborsa.com/haziran-2026-enflasyon-maas-kira-bedelli-askerlik.webp",
    ],
  },
};

const ozetKartlari = [
  { baslik: "Haziran TÜFE", deger: "%0,99", aciklama: "Aylık tüketici enflasyonu" },
  { baslik: "Yıllık TÜFE", deger: "%32,11", aciklama: "Haziran 2026 yıllık artış" },
  { baslik: "6 Aylık TÜFE", deger: "%17,76", aciklama: "Ocak-Haziran toplam artış" },
  { baslik: "Kira Tavanı", deger: "%32,03", aciklama: "12 aylık TÜFE ortalaması" },
];

const etkiTablosu = [
  {
    baslik: "SSK ve Bağ-Kur emeklileri",
    oran: "%17,76",
    aciklama:
      "Ocak-haziran dönemindeki 6 aylık TÜFE artışı doğrudan emekli aylığı artış hesabında referans alınır.",
  },
  {
    baslik: "Memur ve memur emeklileri",
    oran: "%13,52",
    aciklama:
      "2026’nın ilk yarısı için %11 toplu sözleşme zammı aşılırken, ikinci yarıdaki %7 toplu sözleşme zammı ve enflasyon farkı birlikte hesaplanır.",
  },
  {
    baslik: "Kira artış tavanı",
    oran: "%32,03",
    aciklama:
      "Temmuz ayında yenilenecek kira sözleşmelerinde TÜFE’nin 12 aylık ortalaması dikkate alınır.",
  },
  {
    baslik: "Bedelli askerlik hesabı",
    oran: "Yaklaşık 472.650 TL",
    aciklama:
      "Nihai tutar Hazine ve Maliye Bakanlığı’nın yeni memur aylık katsayısını yayımlaması ve MSB duyurusuyla netleşir.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "Haziran 2026 Enflasyonu Açıklandı: Maaş, Kira ve Bedelli Askerlik Etkisi",
  description:
    "Haziran 2026 enflasyonu, kira artış oranı, emekli ve memur maaşı zammı ile bedelli askerlik hesabı.",
  datePublished: "2026-07-03T10:30:00+03:00",
  dateModified: "2026-07-03T10:30:00+03:00",
  url: "https://www.hocaileborsa.com/haber/haziran-2026-enflasyon-rakamlari-maas-kira-bedelli-askerlik",
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
  image: "https://www.hocaileborsa.com/haziran-2026-enflasyon-maas-kira-bedelli-askerlik.webp",
  inLanguage: "tr",
};

export default function HaziranEnflasyonMaasKiraBedelliPage() {
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
              src="/haziran-2026-enflasyon-maas-kira-bedelli-askerlik.webp"
              alt="Haziran 2026 enflasyon rakamları maaş kira ve bedelli askerlik etkisi"
              fill

              sizes="(min-width: 1024px) 896px, 100vw"
className="object-cover"
            />
          </div>

          <div className="p-5 md:p-8">
            <header>
              <h1 className="text-2xl font-bold leading-tight text-zinc-900 md:text-4xl">
                Haziran 2026 Enflasyonu Açıklandı: Maaş, Kira ve Bedelli Askerlik Etkisi
              </h1>
              <p className="mt-2 text-sm text-zinc-500">
                <time dateTime={haberSaati}>{haberTarihi}</time> ·{" "}
                <Link
                  href="/yazar/erman-hoca"
                  className="font-semibold text-slate-600 hover:text-blue-600"
                >
                  Erman Hoca
                </Link>
              </p>
            </header>

            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {ozetKartlari.map((kart) => (
                <div
                  key={kart.baslik}
                  className="rounded-2xl border border-blue-100 bg-blue-50 p-4"
                >
                  <p className="text-xs font-semibold uppercase tracking-wide text-blue-700">
                    {kart.baslik}
                  </p>
                  <p className="mt-2 text-2xl font-black text-blue-950">
                    {kart.deger}
                  </p>
                  <p className="mt-1 text-xs leading-5 text-blue-800">
                    {kart.aciklama}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 space-y-5 text-base leading-8 text-zinc-700 md:text-lg">
              <p>
                Türkiye İstatistik Kurumu’nun açıkladığı Haziran 2026 enflasyon
                verisiyle birlikte yılın ilk yarısına ait zam hesapları da netleşti.
                TÜFE haziranda aylık %0,99 artarken, yıllık enflasyon %32,11 oldu.
                Ocak-haziran dönemini gösteren 6 aylık toplam TÜFE artışı %17,76,
                kira artışlarında kullanılan 12 aylık ortalama ise %32,03 olarak
                gerçekleşti.
              </p>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
                  Ne oldu?
                </h2>
                <p>
                  Haziran ayı verisi, sadece aylık enflasyon göstergesi olarak değil;
                  emekli maaşı artışı, memur ve memur emeklisi zammı, kira artış
                  oranı ve bedelli askerlik hesabı açısından da belirleyici oldu.
                </p>
                <p>
                  TÜFE’de yılbaşından bu yana oluşan %17,76’lık artış SSK ve Bağ-Kur
                  emeklilerinin temmuz dönemi zam hesabının ana göstergesi oldu.
                  Memur ve memur emeklilerinde ise enflasyon farkı, 2026’nın ikinci
                  yarısı için belirlenen %7 toplu sözleşme zammıyla birlikte
                  hesaplandı.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
                  Haziran enflasyon rakamları
                </h2>
                <div className="overflow-hidden rounded-2xl border border-zinc-200">
                  <table className="w-full text-left text-sm md:text-base">
                    <tbody className="divide-y divide-zinc-200">
                      <tr className="bg-zinc-50">
                        <th className="px-4 py-3 font-semibold text-zinc-900">Aylık TÜFE</th>
                        <td className="px-4 py-3 font-bold text-blue-700">%0,99</td>
                      </tr>
                      <tr>
                        <th className="px-4 py-3 font-semibold text-zinc-900">Yıllık TÜFE</th>
                        <td className="px-4 py-3 font-bold text-blue-700">%32,11</td>
                      </tr>
                      <tr className="bg-zinc-50">
                        <th className="px-4 py-3 font-semibold text-zinc-900">Yılbaşından bu yana TÜFE</th>
                        <td className="px-4 py-3 font-bold text-blue-700">%17,76</td>
                      </tr>
                      <tr>
                        <th className="px-4 py-3 font-semibold text-zinc-900">12 aylık TÜFE ortalaması</th>
                        <td className="px-4 py-3 font-bold text-blue-700">%32,03</td>
                      </tr>
                      <tr className="bg-zinc-50">
                        <th className="px-4 py-3 font-semibold text-zinc-900">Yİ-ÜFE aylık / yıllık</th>
                        <td className="px-4 py-3 font-bold text-blue-700">%1,80 / %28,09</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
                  Maaş, kira ve bedelli askerlik etkisi
                </h2>
                <div className="grid gap-4 md:grid-cols-2">
                  {etkiTablosu.map((item) => (
                    <div
                      key={item.baslik}
                      className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4"
                    >
                      <p className="text-sm font-bold text-zinc-900 md:text-base">
                        {item.baslik}
                      </p>
                      <p className="mt-2 text-2xl font-black text-blue-700">
                        {item.oran}
                      </p>
                      <p className="mt-2 text-sm leading-7 text-zinc-600">
                        {item.aciklama}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
                  Kira artış oranı ne oldu?
                </h2>
                <p>
                  Temmuz ayında yenilenecek kira sözleşmelerinde uygulanabilecek
                  artış oranı, TÜFE’nin 12 aylık ortalamasına göre %32,03 oldu. Bu
                  oran özellikle konut ve iş yeri kira sözleşmelerinde üst sınır
                  hesabı açısından takip edilecek.
                </p>
                <p>
                  Kira artışında sözleşme tarihi önemlidir. Bu nedenle her kiracı ve
                  ev sahibi için uygulanacak ay, kira yenileme dönemine göre değişir.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
                  Emekli ve çalışan maaşlarına etkisi
                </h2>
                <p>
                  SSK ve Bağ-Kur emeklileri için yılın ilk 6 ayında oluşan TÜFE
                  artışı %17,76 olarak hesaplandı. Memur ve memur emeklilerinde ise
                  2026’nın ilk yarısındaki %11 toplu sözleşme zammı üzerine oluşan
                  enflasyon farkı, ikinci yarıdaki %7 toplu sözleşme zammı ile
                  birlikte yaklaşık %13,52’lik artışa işaret ediyor.
                </p>
                <p>
                  Özel sektör çalışanları açısından enflasyon verisi doğrudan ve
                  otomatik bir zam anlamına gelmez. Ancak ücret pazarlıkları, ara zam
                  beklentileri, toplu iş sözleşmeleri ve şirketlerin maaş politikaları
                  açısından enflasyon verisi güçlü bir referans niteliği taşır.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
                  Bedelli askerlik ücreti ne kadar olabilir?
                </h2>
                <p>
                  MSB’nin önceki duyurusunda 17 Nisan-30 Haziran 2026 dönemi için
                  bedelli askerlik bedeli 416.361,30 TL olarak açıklanmıştı. Bedelli
                  askerlik tutarı memur aylık katsayısına bağlı olduğu için temmuz
                  döneminde yeni katsayıyla birlikte yeniden güncellenecek.
                </p>
                <p>
                  Memur zammı hesabındaki yaklaşık %13,52’lik artış baz alındığında,
                  bedelli askerlik ücretinin yaklaşık 472.650 TL seviyesine çıkması
                  beklenebilir. Ancak nihai resmi tutar, Hazine ve Maliye Bakanlığı
                  genelgesi ve MSB’nin yeni dönem duyurusuyla kesinleşir.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
                  Değerlendirme
                </h2>
                <p>
                  Haziran enflasyonunun aylık bazda %1’in altında kalması, kısa
                  vadede enflasyon hızında yavaşlama sinyali olarak okunabilir.
                  Ancak yıllık TÜFE’nin %32,11 seviyesinde kalması ve konut
                  grubundaki yıllık artışın yüksek seyretmesi, hane halkı bütçeleri
                  üzerindeki baskının devam ettiğini gösteriyor.
                </p>
                <p>
                  Piyasalar açısından veri; ücret artışları, iç talep, şirket
                  maliyetleri, kira giderleri ve para politikası beklentileri
                  üzerinden izlenecek. Özellikle hizmet, konut ve ücret kaynaklı
                  enflasyon eğilimi önümüzdeki aylarda önemini koruyacak.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
                  Sırada ne var?
                </h2>
                <p>
                  Bundan sonraki süreçte Hazine ve Maliye Bakanlığı’nın yeni memur
                  maaş katsayısı genelgesi, MSB’nin yeni bedelli askerlik duyurusu,
                  maaş ödeme takvimleri ve temmuz ayı fiyatlama davranışları takip
                  edilecek.
                </p>
              </section>
            </div>

            <div className="mt-6 rounded-2xl border border-blue-200 bg-blue-50 p-5">
              <p className="text-sm font-bold text-blue-900 md:text-base">
                Haber özeti:
              </p>
              <p className="mt-2 text-sm leading-7 text-blue-800 md:text-base">
                Haziran 2026 TÜFE aylık %0,99, yıllık %32,11 açıklandı. 6 aylık
                toplam TÜFE %17,76 olurken, kira artışlarında kullanılan 12 aylık
                ortalama %32,03’e geriledi. SSK ve Bağ-Kur emeklileri için %17,76,
                memur ve memur emeklileri için yaklaşık %13,52 zam hesabı öne çıktı.
              </p>
            </div>

            <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-5">
              <p className="text-sm font-bold text-amber-900 md:text-base">
                Dikkat edilmesi gereken nokta:
              </p>
              <p className="mt-2 text-sm leading-7 text-amber-800 md:text-base">
                Bedelli askerlik için verilen yaklaşık tutar hesaplamadır. Resmi tutar
                yeni memur aylık katsayısı ve MSB duyurusu yayımlandığında kesinleşir.
              </p>
            </div>

            <div className="mt-6 rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
              <p className="text-sm font-bold text-zinc-900 md:text-base">
                Kaynaklar:
              </p>
              <div className="mt-2 flex flex-col gap-2 text-sm md:text-base">
                <a
                  href="https://www.tuik.gov.tr/"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="font-medium underline underline-offset-2"
                >
                  TÜİK Haziran 2026 enflasyon verileri
                </a>
                <a
                  href="https://www.msb.gov.tr/Askeralma/Duyuru/1dd86da52ab340cf86af3f978d664573"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="font-medium underline underline-offset-2"
                >
                  MSB bedelli askerlik müracaat duyurusu
                </a>
                <a
                  href="https://www.csgb.gov.tr/cgm/haberler/27082025/"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="font-medium underline underline-offset-2"
                >
                  Çalışma ve Sosyal Güvenlik Bakanlığı toplu sözleşme oranları
                </a>
              </div>
            </div>

            <p className="mt-6 text-sm text-zinc-400">
              03.07.2026 – Bu içerik bilgilendirme amaçlıdır, yatırım tavsiyesi
              değildir.
            </p>

            <div className="mt-6">
              <AuthorBox />
            </div>
          </div>
                  <HaberAltKisim href="/haber/haziran-2026-enflasyon-rakamlari-maas-kira-bedelli-askerlik" />
</article>
</div>
    </main>
  );
}
