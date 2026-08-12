import { seoAciklamasi } from "@/lib/seo-metadata";
import Image from "next/image";
import Link from "@/components/NoPrefetchLink";
import type { Metadata } from "next";
import AuthorBox from "@/components/AuthorBox";
import { formatHaberTarihi, getHaberDosyaTarihi } from "@/lib/haber-tarih";
import HaberAltKisim from "@/components/HaberAltKisim";

const haberSaati = getHaberDosyaTarihi(import.meta.url);
const haberTarihi = formatHaberTarihi(haberSaati);
const pageTitle = "SPK 1 Temmuz Bülteni: 2 Şirkete Halka Arz Onayı";
const pageDescription =
  "SPK'nın 1 Temmuz 2026 tarihli bülteninde Şa-Ra Enerji ile Saat ve Saat için halka arz onayı verildi.";

export const metadata: Metadata = {
  title: pageTitle,
  description: seoAciklamasi(pageDescription, "Haberde gelişmenin ayrıntıları, açıklanan veriler ve yatırımcıların izleyebileceği temel noktalar yer alıyor."),
  alternates: {
    canonical:
      "https://www.hocaileborsa.com/haber/spk-2-yeni-halka-arz-onayi",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://www.hocaileborsa.com/haber/spk-2-yeni-halka-arz-onayi",
    siteName: "Hoca İle Borsa",
    type: "article",
    images: [
      {
        url: "https://www.hocaileborsa.com/spk-2-yeni-halka-arz-onayi.webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["https://www.hocaileborsa.com/spk-2-yeni-halka-arz-onayi.webp"],
  },
};


const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: pageTitle,
  description: pageDescription,
  datePublished: haberSaati,
  dateModified: haberSaati,
  url: "https://www.hocaileborsa.com/haber/spk-2-yeni-halka-arz-onayi",
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
  image: "https://www.hocaileborsa.com/spk-2-yeni-halka-arz-onayi.webp",
};

export default function SpkIkiYeniHalkaArzOnayiPage() {
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
              src="/spk-2-yeni-halka-arz-onayi.webp"
              alt="SPK iki yeni halka arz onayı"
              fill

              sizes="(min-width: 1024px) 896px, 100vw"
className="object-cover"
            />
          </div>

          <div className="p-5 md:p-8">
            <header>
              <h1 className="text-2xl font-bold leading-tight text-zinc-900 md:text-4xl">
                {pageTitle}
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

            <div className="mt-5 space-y-5 text-base leading-8 text-zinc-700 md:text-lg">
              <p>
                Sermaye Piyasası Kurulu, yayımladığı son bültende iki yeni halka arz
                başvurusuna onay verdi. Buna göre Şa-Ra Enerji İnşaat Ticaret ve
                Sanayi AŞ ile Saat ve Saat Sanayi ve Ticaret AŞ payları halka arz
                sürecine geçecek.
              </p>
              <p>
                İki halka arzda da hem sermaye artırımı hem de mevcut ortak pay satışı
                bulunuyor. Saat ve Saat halka arzında ayrıca fazla talep gelmesi
                halinde ek pay satışı yapılabilecek.
              </p>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
                  Ne oldu?
                </h2>
                <p>
                  SPK bülteninde yer alan tabloya göre Şa-Ra Enerji payları 70,00 TL
                  sabit fiyatla, Saat ve Saat payları ise 56,00 TL sabit fiyatla
                  halka arz edilecek.
                </p>
                <p>
                  Şa-Ra Enerji’de mevcut 400.000.000 TL olan sermayenin 444.500.000
                  TL’ye çıkarılması planlanıyor. Halka arz kapsamında 44.500.000 TL
                  nominal değerli sermaye artırımı ve 44.500.000 TL nominal değerli
                  mevcut ortak pay satışı yapılacak.
                </p>
                <p>
                  Saat ve Saat’te mevcut 620.222.018 TL olan sermaye 660.388.991
                  TL’ye yükseltilecek. Bu halka arzda 40.166.973 TL nominal değerli
                  sermaye artırımı, 26.777.982 TL nominal değerli mevcut ortak pay
                  satışı ve talebe bağlı olarak 13.388.991 TL nominal değerli ek pay
                  satışı yer alıyor.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
                  Şa-Ra Enerji halka arz detayları
                </h2>
                <p>
                  Şa-Ra Enerji halka arzında 1 TL nominal değerli paylar 70,00 TL
                  sabit fiyat üzerinden satışa sunulacak. Şirketin halka arzında yeni
                  pay ihracı ile birlikte ortak satışı da bulunuyor.
                </p>
                <p>
                  Mevcut ortak pay satışı tarafında Şadi Türk’e ait 35.600.000 TL
                  nominal değerli ve Hikmat Mor’a ait 8.900.000 TL nominal değerli C
                  grubu paylar halka arza konu edilecek.
                </p>
                <p>
                  Sermaye artırımı ile şirket kasasına halka arzdan kaynaklı kaynak
                  girişi sağlanması beklenirken, ortak satışı kısmında elde edilecek
                  gelir ilgili pay sahibi ortaklara ait olacak. Bu ayrım yatırımcılar
                  açısından önem taşıyor.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
                  Saat ve Saat halka arz detayları
                </h2>
                <p>
                  Saat ve Saat halka arzında 1 TL nominal değerli paylar 56,00 TL
                  sabit fiyat üzerinden satışa sunulacak. Halka arz yapısında sermaye
                  artırımı, ortak satışı ve ek pay satışı seçeneği birlikte yer alıyor.
                </p>
                <p>
                  Mevcut ortak satışı kapsamında Ramazan Kaya’ya ait 11.506.638 TL,
                  Hamza Kaya’ya ait 11.506.638 TL ve Nurullah Dönmez’e ait 3.764.706
                  TL nominal değerli paylar halka arza konu edilecek.
                </p>
                <p>
                  Fazla talep gelmesi halinde Ramazan Kaya’ya ait 4.016.697 TL, Hamza
                  Kaya’ya ait 4.016.697 TL ve Nurullah Dönmez’e ait 5.355.597 TL
                  nominal değerli paylar için ek satış gerçekleştirilebilecek.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
                  Bu ne anlama geliyor?
                </h2>
                <p>
                  Halka arz onayı, şirketlerin pay satış sürecinin SPK tarafından
                  uygun bulunduğu anlamına gelir. Ancak yatırımcı açısından asıl
                  takip edilmesi gereken başlıklar talep toplama tarihleri, dağıtım
                  yöntemi, katılım endeksine uygunluk durumu, aracı kurum ve izahname
                  detayları olacaktır.
                </p>
                <p>
                  Sermaye artırımı içeren halka arzlarda şirkete yeni kaynak girişi
                  olur. Bu kaynak; yatırım, kapasite artışı, borç azaltımı, işletme
                  sermayesi veya büyüme planlarında kullanılabilir. Mevcut ortak pay
                  satışında ise satıştan elde edilen gelir şirket kasasına değil,
                  payını satan ortağa gider.
                </p>
                <p>
                  Bu nedenle iki halka arzda da sadece satış fiyatına değil, halka arz
                  büyüklüğünün ne kadarının sermaye artırımı, ne kadarının ortak satışı
                  olduğuna bakmak gerekir.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
                  Şirketler hakkında
                </h2>
                <p>
                  Şa-Ra Enerji, enerji ve altyapı sektörüne yönelik üretim ve proje
                  faaliyetleriyle bilinen bir şirket olarak halka arz sürecine
                  giriyor. Enerji iletim hatları, direk imalatı ve altyapı projeleri
                  gibi alanlar şirketin yatırımcılar tarafından izlenecek ana faaliyet
                  başlıkları arasında yer alacak.
                </p>
                <p>
                  Saat ve Saat ise perakende tarafında bilinirliği yüksek bir marka.
                  Saat, aksesuar ve ilgili ürün gruplarında faaliyet gösteren şirketin
                  mağaza ağı, marka portföyü, e-ticaret kanalları ve tüketici talebine
                  duyarlılığı halka arz sonrası yakından takip edilecek.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
                  Değerlendirme
                </h2>
                <p>
                  SPK’nın aynı bültende iki halka arza onay vermesi, Borsa İstanbul’da
                  yeni halka arz gündeminin yeniden hareketlendiğini gösteriyor.
                  Özellikle Şa-Ra Enerji’nin enerji ve altyapı teması, Saat ve Saat’in
                  ise güçlü perakende marka algısı nedeniyle yatırımcı ilgisi yüksek
                  olabilir.
                </p>
                <p>
                  Buna karşılık halka arzlarda kısa vadeli talep kadar şirketlerin
                  finansal görünümü, halka arz gelirinin kullanım planı, borçluluk
                  yapısı, kârlılık trendi ve halka açıklık oranı da dikkate alınmalı.
                  Sadece popüler sektör ya da marka bilinirliği üzerinden karar vermek
                  sağlıklı olmayabilir.
                </p>
                <p>
                  Şa-Ra Enerji tarafında sermaye artırımı ve ortak satışı tutarlarının
                  eşit büyüklükte olması dikkat çekiyor. Saat ve Saat tarafında ise ek
                  pay satış ihtimali, talebin güçlü gelmesi halinde halka arz edilen
                  pay miktarının artabileceği anlamına geliyor.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
                  Sırada ne var?
                </h2>
                <p>
                  Bundan sonraki aşamada onaylı izahname, talep toplama tarihleri,
                  dağıtım yöntemi, işlem göreceği pazar, katılım endeksi uygunluk
                  bilgisi ve aracı kurum açıklamaları takip edilecek.
                </p>
                <p>
                  Halka arzlara ilişkin kesin takvim açıklandığında yatırımcıların
                  başvuru süresi, emir iletim kanalları ve dağıtım sonuçlarını ayrıca
                  kontrol etmesi gerekecek.
                </p>
              </section>
            </div>

            <div className="mt-6 rounded-2xl border border-blue-200 bg-blue-50 p-5">
              <p className="text-sm font-bold text-blue-900 md:text-base">
                Haber özeti:
              </p>
              <p className="mt-2 text-sm leading-7 text-blue-800 md:text-base">
                SPK, Şa-Ra Enerji ve Saat ve Saat halka arzlarına onay verdi. Şa-Ra
                Enerji 70,00 TL, Saat ve Saat ise 56,00 TL sabit fiyatla halka arz
                edilecek.
              </p>
            </div>

            <div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
              <p className="text-sm font-bold text-emerald-900 md:text-base">
                Olası Etki:
              </p>
              <p className="mt-2 text-sm leading-7 text-emerald-800 md:text-base">
                Pozitif / Takip Edilmeli — İki yeni halka arz onayı piyasa ilgisini
                artırabilir. Ancak nihai değerlendirme için izahname, talep toplama
                tarihleri, dağıtım yöntemi ve finansal veriler birlikte incelenmeli.
              </p>
            </div>

            <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-5">
              <p className="text-sm font-bold text-amber-900 md:text-base">
                Dikkat edilmesi gereken nokta:
              </p>
              <p className="mt-2 text-sm leading-7 text-amber-800 md:text-base">
                Halka arzlarda sermaye artırımı şirkete kaynak sağlar; mevcut ortak
                pay satışı ise şirket kasasına doğrudan nakit girişi yaratmaz. Bu
                nedenle halka arz yapısı ayrı ayrı değerlendirilmelidir.
              </p>
            </div>

            <div className="mt-6 rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
              <p className="text-sm font-bold text-zinc-900 md:text-base">
                Kaynak:
              </p>
              <a
                href="https://www.spk.gov.tr/Bulten"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block text-sm font-medium underline underline-offset-2 md:text-base"
              >
                SPK Bülteni
              </a>
            </div>

            <p className="mt-6 text-sm text-zinc-400">
              Bu içerik bilgilendirme amaçlıdır, yatırım tavsiyesi değildir.
            </p>

            <div className="mt-6">
              <AuthorBox />
            </div>
          </div>
                  <HaberAltKisim href="/haber/spk-2-yeni-halka-arz-onayi" />
</article>
</div>
    </main>
  );
}
