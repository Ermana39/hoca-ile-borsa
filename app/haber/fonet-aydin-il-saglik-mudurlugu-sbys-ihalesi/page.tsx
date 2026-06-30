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
  title: "FONET Aydın İl Sağlık Müdürlüğü SBYS İhalesinde En Uygun Teklifi Verdi",
  description:
    "Fonet Bilgi Teknolojileri, Aydın İl Sağlık Müdürlüğü tarafından yapılan 36 aylık Sağlık Bilgi Yönetim Sistemi hizmet alımı ihalesinde 198,5 milyon TL ile en uygun teklifin şirket tarafından verildiğini açıkladı.",
  alternates: {
    canonical:
      "https://www.hocaileborsa.com/haber/fonet-aydin-il-saglik-mudurlugu-sbys-ihalesi",
  },
  openGraph: {
    type: "article",
    images: [
      {
        url: "https://www.hocaileborsa.com/fonet-aydin-il-saglik-mudurlugu-sbys-ihalesi.webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [
      "https://www.hocaileborsa.com/fonet-aydin-il-saglik-mudurlugu-sbys-ihalesi.webp",
    ],
  },
};

export default function FonetAydinIlSaglikMudurluguSbysIhalesiPage() {
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
              src="/fonet-aydin-il-saglik-mudurlugu-sbys-ihalesi.webp"
              alt="FONET Aydın İl Sağlık Müdürlüğü SBYS ihalesinde en uygun teklif"
              fill
              unoptimized
              className="object-cover"
            />
          </div>

          <div className="p-5 md:p-8">
            <header>
              <h1 className="text-2xl font-bold leading-tight text-zinc-900 md:text-4xl">
                FONET Aydın İl Sağlık Müdürlüğü SBYS İhalesinde En Uygun Teklifi Verdi
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
                Fonet Bilgi Teknolojileri A.Ş. (FONET), Aydın İl Sağlık Müdürlüğü
                tarafından yapılan 36 ay süreli Sağlık Bilgi Yönetim Sistemi
                (SBYS) hizmet alımı ihalesine ilişkin KAP açıklaması yayımladı.
                Şirket, ihaleye 3 şirketin katıldığını ve 198.476.457 TL ile en
                uygun teklifin FONET tarafından verildiğini duyurdu.
              </p>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
                  Ne oldu?
                </h2>
                <p>
                  FONET, 30 Haziran 2026 tarihinde Aydın İl Sağlık Müdürlüğü
                  tarafından yapılan 36 aylık SBYS hizmet alımı ihalesine katıldı.
                  KAP açıklamasına göre ihaleye toplam 3 şirket iştirak etti.
                </p>
                <p>
                  Şirket, 198.476.457 TL tutarındaki teklifiyle ihalede en uygun
                  teklifin kendisi tarafından verildiğini bildirdi. İhale sonucu
                  ise açıklamada “devam ediyor” olarak belirtildi.
                </p>
                <p>
                  Bu nedenle haber, nihai sözleşme imzalandı şeklinde değil;
                  FONET’in ihalede en uygun teklifi verdiği ve sürecin devam ettiği
                  bir aşama olarak değerlendirilmelidir.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
                  İhale konusu ne?
                </h2>
                <p>
                  İhalenin konusu, 36 ay süreli Sağlık Bilgi Yönetim Sistemi
                  hizmet alımıdır. Sağlık Bilgi Yönetim Sistemi, hastaneler ve
                  sağlık kurumlarında hasta kayıtları, randevu, tedavi süreçleri,
                  faturalama, raporlama ve kurumsal sağlık verilerinin yönetimi
                  gibi kritik dijital süreçleri kapsar.
                </p>
                <p>
                  FONET’in faaliyet alanı sağlık bilişimi olduğu için bu ihale,
                  şirketin ana iş koluyla doğrudan bağlantılıdır. Kamu sağlık
                  kurumlarına yönelik SBYS projeleri, şirketin gelir sürekliliği
                  ve referans gücü açısından yakından takip edilen iş kalemleri
                  arasında yer alır.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
                  Rakam neden önemli?
                </h2>
                <p>
                  198,5 milyon TL seviyesindeki ihale bedeli, FONET açısından
                  ayrı haber değeri taşıyan bir büyüklüğe işaret ediyor. İhalenin
                  36 aylık süreyi kapsaması, olası iş ilişkisinin tek seferlik bir
                  teslimattan ziyade dönemlere yayılan hizmet geliri yaratabileceğini
                  gösteriyor.
                </p>
                <p>
                  Bu tür hizmet alımı ihalelerinde finansal katkı, nihai ihale
                  kararının kesinleşmesi, sözleşme imzalanması ve hizmet dönemine
                  göre kademeli şekilde oluşur. Bu yüzden yatırımcıların sonraki
                  KAP bildirimlerinde ihale sonucunun kesinleşip kesinleşmediğini
                  takip etmesi gerekir.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
                  FONET yatırımcıları için ne ifade ediyor?
                </h2>
                <p>
                  Haber FONET açısından pozitif algılanabilecek bir gelişmedir.
                  Şirketin ana faaliyet alanı olan sağlık bilişimi tarafında kamu
                  ihalesinde en uygun teklifi vermesi, yeni iş potansiyeli açısından
                  destekleyicidir.
                </p>
                <p>
                  Ancak açıklamada ihale sonucu “devam ediyor” olarak yer aldığı
                  için kesinleşmiş gelir kabul edilmemelidir. Nihai karar, sözleşme
                  süreci, hizmet başlangıcı ve gelirlerin finansal tablolara
                  yansıma takvimi ayrıca izlenmelidir.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
                  Şirket hakkında
                </h2>
                <p>
                  Fonet Bilgi Teknolojileri, sağlık bilişimi alanında yazılım,
                  sistem entegrasyonu ve dijital sağlık çözümleri sunan bir
                  teknoloji şirketidir. Şirketin ana faaliyet alanı, kamu ve özel
                  sağlık kurumlarının bilgi yönetimi süreçlerine yönelik yazılım
                  ve hizmet çözümleridir.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
                  Değerlendirme
                </h2>
                <p>
                  FONET’in Aydın İl Sağlık Müdürlüğü SBYS ihalesinde en uygun
                  teklifi vermesi, şirketin faaliyet alanıyla uyumlu ve ciro
                  potansiyeli taşıyan önemli bir gelişme olarak öne çıkıyor.
                  198,5 milyon TL seviyesindeki ihale büyüklüğü, sağlık bilişimi
                  ölçeğinde yatırımcı ilgisini artırabilecek bir tutar.
                </p>
                <p>
                  Haberin en kritik noktası, sürecin henüz kesinleşmiş sözleşme
                  aşamasında olmamasıdır. Bu nedenle pozitif beklenti yaratabilecek
                  bir gelişme olsa da nihai sonuç açıklanmadan tam finansal etki
                  üzerinden değerlendirme yapmak doğru olmaz.
                </p>
                <p>
                  Eğer ihale FONET lehine kesinleşir ve sözleşme süreci tamamlanırsa,
                  hizmet süresinin 36 ay olması nedeniyle şirket gelirlerine
                  dönemsel katkı sağlama potansiyeli oluşabilir.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
                  Sırada ne var?
                </h2>
                <p>
                  Bundan sonraki süreçte ihalenin kesin sonucu, olası sözleşme
                  imzası ve hizmet başlangıç tarihi takip edilecek. FONET’in yeni
                  KAP açıklamaları, ihale sürecinin şirket finansallarına olası
                  etkisini daha net gösterecektir.
                </p>
              </section>
            </div>

            <div className="mt-6 rounded-2xl border border-blue-200 bg-blue-50 p-5">
              <p className="text-sm font-bold text-blue-900 md:text-base">
                Haber özeti:
              </p>
              <p className="mt-2 text-sm leading-7 text-blue-800 md:text-base">
                FONET, Aydın İl Sağlık Müdürlüğü tarafından yapılan 36 aylık SBYS
                hizmet alımı ihalesinde 198.476.457 TL ile en uygun teklifin şirket
                tarafından verildiğini açıkladı.
              </p>
            </div>

            <div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
              <p className="text-sm font-bold text-emerald-900 md:text-base">
                Olası Etki:
              </p>
              <p className="mt-2 text-sm leading-7 text-emerald-800 md:text-base">
                Pozitif — Şirketin ana faaliyet alanıyla uyumlu, 36 aylık ve
                198,5 milyon TL büyüklüğünde bir kamu ihalesinde en uygun teklifi
                vermesi yeni iş potansiyeli açısından destekleyici.
              </p>
            </div>

            <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-5">
              <p className="text-sm font-bold text-amber-900 md:text-base">
                Dikkat edilmesi gereken nokta:
              </p>
              <p className="mt-2 text-sm leading-7 text-amber-800 md:text-base">
                KAP açıklamasında ihale sonucu “devam ediyor” olarak yer alıyor.
                Bu nedenle nihai sözleşme ve finansal etki için sonraki açıklamalar
                takip edilmeli.
              </p>
            </div>

            <div className="mt-6 rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
              <p className="text-sm font-bold text-zinc-900 md:text-base">
                Kaynak:
              </p>
              <a
                href="https://www.kap.org.tr/Bildirim/1621865"
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
            slug="fonet-aydin-il-saglik-mudurlugu-sbys-ihalesi"
            baslik="FONET Aydın İl Sağlık Müdürlüğü SBYS ihalesi"
          />
        </div>

        <HaberNavigasyon
          href="/haber/fonet-aydin-il-saglik-mudurlugu-sbys-ihalesi"
          className="mt-8"
        />
      </div>
    </main>
  );
}
