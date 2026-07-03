import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import HaberIlgiliBolumler from "@/components/HaberIlgiliBolumler";
import AuthorBox from "@/components/AuthorBox";
import HaberNavigasyon from "@/components/HaberNavigasyon";
import { formatHaberTarihi, getHaberDosyaTarihi } from "@/lib/haber-tarih";

const haberSaati = getHaberDosyaTarihi(import.meta.url);
const haberTarihi = formatHaberTarihi(haberSaati);

export const metadata: Metadata = {
  title: "ASTOR TEİAŞ ile 816 Milyon TL’lik Mobil Trafo Sözleşmesi İmzaladı",
  description:
    "Astor Enerji, TEİAŞ tarafından açılan mobil trafo merkezi ve OG ünitesi temini ihalesinde 816,2 milyon TL bedelli sözleşme imzaladığını açıkladı.",
  alternates: {
    canonical:
      "https://www.hocaileborsa.com/haber/astor-teias-816-milyon-tl-mobil-trafo-sozlesmesi",
  },
  openGraph: {
    type: "article",
    images: [
      {
        url: "https://www.hocaileborsa.com/astor-teias-816-milyon-tl-mobil-trafo-sozlesmesi.webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [
      "https://www.hocaileborsa.com/astor-teias-816-milyon-tl-mobil-trafo-sozlesmesi.webp",
    ],
  },
};

export default function AstorTeiasMobilTrafoSozlesmesiPage() {
  return (
    <main className="min-h-screen bg-white">
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
              src="/astor-teias-816-milyon-tl-mobil-trafo-sozlesmesi.webp"
              alt="ASTOR TEİAŞ 816 milyon TL mobil trafo sözleşmesi"
              fill
              unoptimized
              className="object-cover"
            />
          </div>

          <div className="p-5 md:p-8">
            <header>
              <h1 className="text-2xl font-bold leading-tight text-zinc-900 md:text-4xl">
                ASTOR TEİAŞ ile 816 Milyon TL’lik Mobil Trafo Sözleşmesi İmzaladı
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
                Astor Enerji A.Ş. (ASTOR), Türkiye Elektrik İletim A.Ş. Genel
                Müdürlüğü (TEİAŞ) tarafından açılan mobil trafo merkezi ve OG ünitesi
                temini ihalesine ilişkin yeni gelişmeyi KAP üzerinden duyurdu.
                Şirket, kesinleşen ihale kararı sonrasında 02.07.2026 tarihi
                itibarıyla sözleşme imzalandığını açıkladı.
              </p>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
                  Ne oldu?
                </h2>
                <p>
                  ASTOR’un açıklamasına göre TEİAŞ tarafından düzenlenen ihalede,
                  şirket 4 adet Mobil Trafo Merkezi, 4 adet OG Ünitesi ve yedek
                  malzemelerin temini kapsamında en avantajlı teklifi sunarak ilk
                  sırada yer aldı.
                </p>
                <p>
                  KAP bildiriminde ihale bedeli 816.200.000 TL olarak yer aldı.
                  Açıklamanın detay kısmında ise ASTOR’un 816.000.000 TL’lik kısımda
                  en avantajlı teklif sahibi olduğu ve kesinleşen ihale kararına
                  istinaden sözleşmenin imzalandığı belirtildi.
                </p>
                <p>
                  Bildirimde, ihale bedelinin şirketin son kamuya açıklanan gelir
                  tablosundaki brüt satış hasılatına oranı %2,31 olarak paylaşıldı.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
                  Neden önemli?
                </h2>
                <p>
                  TEİAŞ gibi kamu tarafındaki büyük ölçekli alıcılarla yapılan
                  sözleşmeler, enerji ekipmanları üreticileri için iş hacmi ve
                  referans niteliği açısından önem taşır. Mobil trafo merkezi ve OG
                  ünitesi gibi ürünler, elektrik iletim altyapısının sürekliliği ve
                  sahadaki esnek kapasite ihtiyacı açısından kritik ekipmanlar arasında
                  yer alır.
                </p>
                <p>
                  Sözleşme tutarının brüt satış hasılatına oranının %2,31 seviyesinde
                  açıklanması, büyüklüğün şirketin genel ölçeği içinde ölçülü fakat
                  takip edilmeye değer bir katkı sunduğunu gösteriyor.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
                  Şirket hakkında
                </h2>
                <p>
                  Astor Enerji; transformatör, anahtarlama ürünleri, güç elektroniği
                  ve enerji altyapısına yönelik ekipman üretimi alanlarında faaliyet
                  gösteren sanayi şirketleri arasında yer alıyor. Şirketin iş akışında
                  yurt içi kamu ihaleleri, özel sektör siparişleri ve ihracat
                  bağlantıları yakından izlenen başlıklar arasında bulunuyor.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
                  Değerlendirme
                </h2>
                <p>
                  ASTOR açısından bu açıklama, ihale sürecinin sözleşme aşamasına
                  geçtiğini göstermesi nedeniyle olumlu okunabilecek bir gelişme.
                  Önceki aşamada en avantajlı teklifin verilmesi önemliydi; son
                  bildirimle birlikte sözleşmenin imzalanmış olması sürecin daha somut
                  bir aşamaya taşındığını gösteriyor.
                </p>
                <p>
                  Buna karşılık haberin nihai finansal etkisi; üretim, teslimat
                  takvimi, maliyet yapısı, tahsilat koşulları ve sözleşmenin kârlılık
                  marjı gibi unsurlara bağlı olacak. Bu nedenle yalnızca sözleşme
                  tutarına bakarak net kâr etkisi konusunda kesin yorum yapmak doğru
                  olmaz.
                </p>
                <p>
                  Genel görünüm itibarıyla haber, ASTOR’un enerji altyapısı tarafındaki
                  iş hacmini destekleyen pozitif bir sözleşme gelişmesi olarak öne
                  çıkıyor.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
                  Sırada ne var?
                </h2>
                <p>
                  Bundan sonraki süreçte sözleşme kapsamındaki üretim ve teslimat
                  takvimi, projenin finansal tablolara yansıma zamanı ve yeni ihale
                  sonuçları takip edilecek. Özellikle kamu kaynaklı enerji altyapısı
                  projeleri, şirketin sipariş portföyü açısından yatırımcıların
                  izlediği ana başlıklardan biri olmaya devam edecek.
                </p>
              </section>
            </div>

            <div className="mt-6 rounded-2xl border border-blue-200 bg-blue-50 p-5">
              <p className="text-sm font-bold text-blue-900 md:text-base">
                Haber özeti:
              </p>
              <p className="mt-2 text-sm leading-7 text-blue-800 md:text-base">
                ASTOR, TEİAŞ’ın 4 adet Mobil Trafo Merkezi, 4 adet OG Ünitesi ve yedek
                malzemeleri kapsayan ihalesinde kesinleşen karar sonrası sözleşme
                imzaladı. KAP’ta ihale bedeli 816.200.000 TL olarak açıklandı.
              </p>
            </div>

            <div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
              <p className="text-sm font-bold text-emerald-900 md:text-base">
                Olası Etki:
              </p>
              <p className="mt-2 text-sm leading-7 text-emerald-800 md:text-base">
                Pozitif — TEİAŞ ile imzalanan sözleşme, şirketin enerji altyapısı
                ekipmanları tarafındaki iş hacmini destekleyen ve sipariş görünümünü
                güçlendiren bir gelişme niteliğinde.
              </p>
            </div>

            <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-5">
              <p className="text-sm font-bold text-amber-900 md:text-base">
                Dikkat edilmesi gereken nokta:
              </p>
              <p className="mt-2 text-sm leading-7 text-amber-800 md:text-base">
                Sözleşme tutarı ciro tarafında destekleyici olsa da kârlılık etkisi;
                üretim maliyetleri, teslimat takvimi ve sözleşme marjıyla birlikte
                değerlendirilmeli.
              </p>
            </div>

            <div className="mt-6 rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
              <p className="text-sm font-bold text-zinc-900 md:text-base">
                Kaynak:
              </p>
              <a
                href="https://www.kap.org.tr/Bildirim/1623500"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block text-sm font-medium underline underline-offset-2 md:text-base"
              >
                Orjinal Kap içeriği
              </a>
            </div>

            <p className="mt-6 text-sm text-zinc-400">
              03.07.2026 – Bu içerik bilgilendirme amaçlıdır, yatırım tavsiyesi
              değildir.
            </p>

            <div className="mt-6">
              <AuthorBox />
            </div>
          </div>
        </article>

        <div className="mt-8">
          <HaberIlgiliBolumler
            slug="astor-teias-816-milyon-tl-mobil-trafo-sozlesmesi"
            baslik="ASTOR TEİAŞ 816 milyon TL mobil trafo sözleşmesi"
          />
        </div>

        <HaberNavigasyon
          href="/haber/astor-teias-816-milyon-tl-mobil-trafo-sozlesmesi"
          className="mt-8"
        />
      </div>
    </main>
  );
}
