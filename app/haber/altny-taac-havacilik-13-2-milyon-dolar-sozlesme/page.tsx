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
  title: "ALTNY Bağlı Ortaklığı TAAC Havacılık’tan 13,2 Milyon Dolarlık Sözleşme",
  description:
    "Altınay Savunma bağlı ortaklığı TAAC Havacılık, yurt dışında yerleşik bir müşteriyle kritik havacılık ekipmanlarının geliştirilmesi ve tedarikine yönelik 13,2 milyon dolar tutarında sözleşme imzaladı.",
  alternates: {
    canonical:
      "https://www.hocaileborsa.com/haber/altny-taac-havacilik-13-2-milyon-dolar-sozlesme",
  },
  openGraph: {
    type: "article",
    images: [
      {
        url: "https://www.hocaileborsa.com/altny-taac-havacilik-13-2-milyon-dolar-sozlesme.webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [
      "https://www.hocaileborsa.com/altny-taac-havacilik-13-2-milyon-dolar-sozlesme.webp",
    ],
  },
};

export default function AltnyTaacHavacilikSozlesmePage() {
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
              src="/altny-taac-havacilik-13-2-milyon-dolar-sozlesme.webp"
              alt="ALTNY bağlı ortaklığı TAAC Havacılık 13,2 milyon dolarlık sözleşme"
              fill
              unoptimized
              className="object-cover"
            />
          </div>

          <div className="p-5 md:p-8">
            <header>
              <h1 className="text-2xl font-bold leading-tight text-zinc-900 md:text-4xl">
                ALTNY Bağlı Ortaklığı TAAC Havacılık’tan 13,2 Milyon Dolarlık Sözleşme
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
                Altınay Savunma Teknolojileri A.Ş. (ALTNY), bağlı ortaklığı
                TAAC Havacılık Teknolojileri üzerinden yurt dışı kaynaklı yeni
                bir iş ilişkisi duyurdu. Açıklamaya göre TAAC Havacılık, yurt
                dışında yerleşik bir müşteriyle kritik havacılık ekipmanlarının
                geliştirilmesi ve tedarikine yönelik 13,2 milyon ABD Doları
                tutarında sözleşme imzaladı.
              </p>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
                  Ne oldu?
                </h2>
                <p>
                  Şirketin KAP açıklamasında, bağlı ortaklık TAAC Havacılık
                  Teknolojileri’nin yurt dışında yerleşik bir müşteriyle yeni
                  sözleşme imzaladığı belirtildi. Sözleşme, kritik havacılık
                  ekipmanlarının geliştirilmesi ve tedarikini kapsıyor.
                </p>
                <p>
                  Sözleşme bedeli 13,2 milyon ABD Doları olarak açıklandı. Şirket,
                  söz konusu iş ilişkisinin faaliyetlerine ve cirosuna olumlu katkı
                  sağlamasının beklendiğini duyurdu.
                </p>
                <p>
                  Aynı gün Altınay Savunma tarafından ayrıca kara araçlarına
                  yönelik kritik bileşen üretim sistemleri kapsamında 1,54 milyon
                  ABD Doları tutarında bir sözleşme daha açıklandı. Bu nedenle
                  ALTNY tarafında günün toplam yeni iş ilişkisi büyüklüğü savunma
                  ve havacılık odağında dikkat çekti.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
                  Sözleşme neden önemli?
                </h2>
                <p>
                  Haberin ayrı haber değeri taşımasının temel nedeni, sözleşmenin
                  hem tutar hem de sektör niteliği açısından güçlü olmasıdır.
                  Havacılık ekipmanları tarafında geliştirme ve tedarik süreçleri,
                  yüksek mühendislik kabiliyeti, kalite standardı ve uzun vadeli
                  müşteri ilişkisi gerektirir.
                </p>
                <p>
                  Bu tür sözleşmeler yalnızca kısa vadeli ciro katkısı açısından
                  değil, şirketin uluslararası savunma ve havacılık tedarik
                  zincirindeki görünürlüğünü artırması açısından da önem taşır.
                  Yurt dışı müşteriyle yapılan iş ilişkisi, ihracat ve döviz bazlı
                  gelir yapısı bakımından da yatırımcıların takip ettiği bir
                  başlıktır.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
                  TAAC Havacılık açısından anlamı
                </h2>
                <p>
                  TAAC Havacılık Teknolojileri, Altınay Savunma’nın havacılık
                  teknolojileri alanındaki bağlı ortaklığıdır. Şirket; havacılık
                  sistemleri, hareket kontrol çözümleri, kritik ekipmanlar ve
                  platform ihtiyaçlarına yönelik mühendislik kabiliyetleriyle öne
                  çıkmaktadır.
                </p>
                <p>
                  Yurt dışı müşteriyle imzalanan bu yeni sözleşme, TAAC’ın
                  uluslararası pazardaki iş geliştirme kapasitesini destekleyen bir
                  adım olarak değerlendirilebilir. Özellikle kritik havacılık
                  ekipmanları gibi yüksek katma değerli alanlarda alınan işler,
                  şirketin teknik referans gücünü artırabilir.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
                  ALTNY yatırımcıları için ne ifade ediyor?
                </h2>
                <p>
                  ALTNY açısından bu haber pozitif tarafta değerlendirilebilir.
                  Çünkü açıklanan sözleşme doğrudan ciroya katkı sağlayabilecek
                  yeni bir iş ilişkisine işaret ediyor. Ayrıca sözleşmenin ABD
                  Doları bazlı olması, döviz gelirleri açısından da takip edilecek
                  bir detaydır.
                </p>
                <p>
                  Buna karşın sözleşmenin finansal etkisi, teslimat takvimi,
                  proje kapsamı, maliyet yapısı ve kâr marjı gibi unsurlara bağlı
                  olarak dönemler içinde netleşecektir. Bu nedenle yatırımcıların
                  sadece sözleşme tutarına değil, ilerleyen finansal raporlarda
                  ciro ve kârlılık üzerindeki yansımaya da bakması gerekir.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
                  Şirket hakkında
                </h2>
                <p>
                  Altınay Savunma Teknolojileri, savunma sanayii, havacılık
                  teknolojileri, hareket kontrol sistemleri, insansız sistemler,
                  deniz sistemleri ve kritik üretim sistemleri alanlarında faaliyet
                  gösteren bir teknoloji şirketidir. Şirketin büyüme hikâyesinde
                  bağlı ortaklıklar üzerinden alınan yeni sözleşmeler ve yüksek
                  katma değerli mühendislik projeleri önemli yer tutmaktadır.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
                  Değerlendirme
                </h2>
                <p>
                  ALTNY için açıklanan 13,2 milyon ABD Doları tutarındaki TAAC
                  Havacılık sözleşmesi, hem büyüklüğü hem de ihracat niteliğiyle
                  güçlü bir gelişme olarak öne çıkıyor. Şirketin savunma ve
                  havacılık alanındaki iş hacmini artırması, orta vadede gelir
                  görünürlüğünü destekleyebilir.
                </p>
                <p>
                  Aynı gün açıklanan 1,54 milyon ABD Doları tutarındaki kara
                  araçlarına yönelik sözleşme de eklendiğinde, Altınay Savunma
                  tarafında yeni iş ilişkileri bakımından hareketli bir gün
                  yaşandığı görülüyor. Bu tablo şirketin farklı savunma segmentleri
                  üzerinden iş portföyünü büyütmeye devam ettiğini gösteriyor.
                </p>
                <p>
                  Yine de bu haber doğrudan yatırım kararı anlamına gelmez.
                  Şirketin önümüzdeki dönem finansallarında sözleşmelerin teslimat
                  planı, tahsilat süreci ve kârlılığa katkısı yakından izlenmelidir.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
                  Sırada ne var?
                </h2>
                <p>
                  Bundan sonraki süreçte yatırımcıların takip edeceği ana başlık,
                  sözleşmenin teslimat takvimi ve finansal tablolara yansıması
                  olacak. Yeni savunma ve havacılık sözleşmeleri, ALTNY’nin sipariş
                  portföyü ve ciro büyümesi açısından ayrıca önem taşıyacak.
                </p>
              </section>
            </div>

            <div className="mt-6 rounded-2xl border border-blue-200 bg-blue-50 p-5">
              <p className="text-sm font-bold text-blue-900 md:text-base">
                Haber özeti:
              </p>
              <p className="mt-2 text-sm leading-7 text-blue-800 md:text-base">
                ALTNY bağlı ortaklığı TAAC Havacılık, yurt dışı bir müşteriyle
                kritik havacılık ekipmanlarının geliştirilmesi ve tedarikine
                yönelik 13,2 milyon ABD Doları tutarında sözleşme imzaladı.
              </p>
            </div>

            <div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
              <p className="text-sm font-bold text-emerald-900 md:text-base">
                Olası Etki:
              </p>
              <p className="mt-2 text-sm leading-7 text-emerald-800 md:text-base">
                Pozitif — Döviz bazlı ve savunma-havacılık odaklı yeni sözleşme,
                şirketin iş hacmi ve ciro görünümü açısından destekleyici bir
                gelişme olarak izlenebilir.
              </p>
            </div>

            <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-5">
              <p className="text-sm font-bold text-amber-900 md:text-base">
                Dikkat edilmesi gereken nokta:
              </p>
              <p className="mt-2 text-sm leading-7 text-amber-800 md:text-base">
                Sözleşme tutarı açıklanmış olsa da finansal etki; teslimat takvimi,
                maliyet yapısı, tahsilat süreci ve kâr marjıyla birlikte netleşir.
              </p>
            </div>

            <div className="mt-6 rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
              <p className="text-sm font-bold text-zinc-900 md:text-base">
                Kaynak:
              </p>
              <a
                href="https://www.kap.org.tr/Bildirim/1621734"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block text-sm font-medium underline underline-offset-2 md:text-base"
              >
                Orjinal Kap içeriği
              </a>
            </div>

            <p className="mt-6 text-sm text-zinc-400">
              30.06.2026 – Bu içerik bilgilendirme amaçlıdır, yatırım tavsiyesi
              değildir.
            </p>

            <div className="mt-6">
              <AuthorBox />
            </div>
          </div>
        </article>

        <div className="mt-8">
          <HaberIlgiliBolumler
            slug="altny-taac-havacilik-13-2-milyon-dolar-sozlesme"
            baslik="ALTNY TAAC Havacılık 13,2 milyon dolarlık sözleşme"
          />
        </div>

        <HaberNavigasyon
          href="/haber/altny-taac-havacilik-13-2-milyon-dolar-sozlesme"
          className="mt-8"
        />
      </div>
    </main>
  );
}
