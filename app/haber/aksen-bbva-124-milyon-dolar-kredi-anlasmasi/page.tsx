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
  title: "AKSEN BBVA ile 124 Milyon Dolarlık Kredi İmzaladı",
  description:
    "Aksa Enerji, Mersin depolamalı RES yatırımı için BBVA ile 124 milyon dolarlık, 12 yıl vadeli kredi anlaşması imzaladı.",
  alternates: {
    canonical:
      "https://www.hocaileborsa.com/haber/aksen-bbva-124-milyon-dolar-kredi-anlasmasi",
  },
  openGraph: {
    type: "article",
    images: [
      {
        url: "https://www.hocaileborsa.com/aksen-bbva-124-milyon-dolar-kredi-anlasmasi.webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [
      "https://www.hocaileborsa.com/aksen-bbva-124-milyon-dolar-kredi-anlasmasi.webp",
    ],
  },
};

export default function AksenBbvaKrediAnlasmasiPage() {
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
              src="/aksen-bbva-124-milyon-dolar-kredi-anlasmasi.webp"
              alt="AKSEN BBVA 124 milyon dolar kredi anlaşması"
              fill
              unoptimized
              className="object-cover"
            />
          </div>

          <div className="p-5 md:p-8">
            <header>
              <h1 className="text-2xl font-bold leading-tight text-zinc-900 md:text-4xl">
                AKSEN BBVA ile 124 Milyon Dolarlık Kredi Anlaşması İmzaladı
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
                Aksa Enerji Üretim A.Ş. (AKSEN), Mersin’de yer alan depolamalı
                rüzgar enerjisi santrali yatırımı için BBVA’nın Hong Kong şubesiyle
                124 milyon ABD doları tutarında kredi sözleşmesi imzaladığını KAP
                üzerinden duyurdu.
              </p>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
                  Ne oldu?
                </h2>
                <p>
                  AKSEN’in açıklamasına göre kredi, Mersin ilinde yer alan 100,08 MW
                  kurulu güce sahip depolamalı RES yatırımında kullanılacak.
                  Finansman, BBVA’nın Hong Kong şubesi ile imzalanan kredi sözleşmesi
                  kapsamında sağlanacak.
                </p>
                <p>
                  Kredi tutarı 124 milyon ABD doları olarak açıklandı. Sözleşme,
                  Çin İhracat ve Kredi Sigortası Kurumu Sinosure garantisi altında
                  yapılandırıldı.
                </p>
                <p>
                  Açıklamada kredinin toplam 12 yıl vadeli olduğu ve ilk 2 yılının
                  geri ödemesiz dönem olarak belirlendiği ifade edildi.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
                  Neden önemli?
                </h2>
                <p>
                  Enerji yatırımlarında uzun vadeli finansman bulmak, projenin
                  nakit akışı ve yatırım takvimi açısından kritik öneme sahiptir.
                  12 yıl vadeli ve ilk 2 yılı geri ödemesiz kredi yapısı, yatırımın
                  ilk dönemlerinde şirketin ödeme yükünü zamana yayması açısından
                  destekleyici bir unsur olarak değerlendirilebilir.
                </p>
                <p>
                  KAP açıklamasında bu sözleşmenin, şirketin finansman kaynaklarını
                  coğrafi anlamda çeşitlendirmesi bakımından stratejik öneme sahip
                  olduğu belirtildi. Bu ifade, AKSEN’in yalnızca yurt içi kaynaklara
                  değil, uluslararası finansman kanallarına da erişim sağladığını
                  göstermesi bakımından dikkat çekiyor.
                </p>
                <p>
                  Depolamalı RES yatırımı ise şirketin üretim portföyünde kaynak
                  çeşitliliğini artırma hedefiyle bağlantılı. Yenilenebilir enerji
                  tarafındaki kapasite artışları, orta ve uzun vadede şirketin
                  üretim kompozisyonu ve sürdürülebilir büyüme stratejisi açısından
                  izlenecek başlıklar arasında yer alıyor.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
                  Şirket hakkında
                </h2>
                <p>
                  Aksa Enerji, elektrik üretimi alanında faaliyet gösteren ve farklı
                  kaynaklara dayalı üretim portföyüyle öne çıkan enerji şirketlerinden
                  biridir. Şirketin faaliyetlerinde üretim kapasitesi, santral
                  portföyü, yakıt maliyetleri, elektrik fiyatları, yurt içi ve yurt
                  dışı projelerin katkısı belirleyici unsurlar arasında yer alır.
                </p>
                <p>
                  AKSEN, KAP açıklamasında “Sürdürülebilir Yüksek Büyüme” stratejisi
                  doğrultusunda üretim portföyünde kaynak çeşitliliğine önem verdiğini
                  ve 2030 hedefleri kapsamında yenilenebilir enerji teknolojilerine
                  yatırımlarını sürdürdüğünü belirtti.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
                  Değerlendirme
                </h2>
                <p>
                  AKSEN’in 124 milyon dolarlık kredi anlaşması, şirketin Mersin’deki
                  depolamalı RES yatırımının finansmanı açısından pozitif bir gelişme
                  olarak öne çıkıyor. Özellikle uzun vade ve geri ödemesiz dönem,
                  yatırım dönemindeki finansal esnekliği artırabilecek nitelikte.
                </p>
                <p>
                  Bununla birlikte haber doğrudan tamamlanmış üretim artışı anlamına
                  gelmez. Kredi sözleşmesi yatırım finansmanına yönelik bir adımdır;
                  santralin devreye alınması, üretim katkısı, gelir etkisi ve nihai
                  kârlılık üzerindeki sonuçlar ilerleyen süreçte yatırımın gerçekleşme
                  takvimiyle birlikte izlenmelidir.
                </p>
                <p>
                  Sinosure garantili uluslararası kredi yapısı, finansman erişimi ve
                  kaynak çeşitliliği açısından olumlu okunabilir. Ancak döviz bazlı
                  finansmanlarda kur hareketleri, faiz koşulları, proje ilerleme
                  takvimi ve yatırım maliyetleri şirketin bilanço etkisi açısından
                  yakından takip edilmelidir.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
                  Sırada ne var?
                </h2>
                <p>
                  Bundan sonraki süreçte Mersin depolamalı RES yatırımının ilerleme
                  takvimi, projenin devreye alınma süreci ve yatırımın finansal
                  sonuçlara ne zaman yansıyacağı takip edilecek.
                </p>
                <p>
                  Ayrıca AKSEN’in yenilenebilir enerji yatırımları, 2030 hedefleri
                  ve finansman kaynaklarındaki çeşitlenme yatırımcıların izlemeye
                  devam edeceği ana başlıklar arasında yer alacak.
                </p>
              </section>
            </div>

            <div className="mt-6 rounded-2xl border border-blue-200 bg-blue-50 p-5">
              <p className="text-sm font-bold text-blue-900 md:text-base">
                Haber özeti:
              </p>
              <p className="mt-2 text-sm leading-7 text-blue-800 md:text-base">
                AKSEN, Mersin’deki 100,08 MW kurulu güce sahip depolamalı RES
                yatırımı için BBVA’nın Hong Kong şubesiyle 124 milyon ABD doları
                tutarında kredi sözleşmesi imzaladı. Kredi 12 yıl vadeli olacak ve
                ilk 2 yıl geri ödemesiz dönem içerecek.
              </p>
            </div>

            <div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
              <p className="text-sm font-bold text-emerald-900 md:text-base">
                Olası Etki:
              </p>
              <p className="mt-2 text-sm leading-7 text-emerald-800 md:text-base">
                Pozitif — Uzun vadeli uluslararası kredi anlaşması, depolamalı RES
                yatırımının finansmanı ve şirketin kaynak çeşitliliği açısından
                destekleyici bir gelişme olarak değerlendirilebilir.
              </p>
            </div>

            <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-5">
              <p className="text-sm font-bold text-amber-900 md:text-base">
                Dikkat edilmesi gereken nokta:
              </p>
              <p className="mt-2 text-sm leading-7 text-amber-800 md:text-base">
                Kredi anlaşması yatırımın finansmanı açısından önemli olsa da,
                projenin üretim ve kârlılık etkisi yatırımın tamamlanma takvimi,
                kur hareketleri, finansman maliyeti ve operasyonel performansla
                birlikte değerlendirilmeli.
              </p>
            </div>

            <div className="mt-6 rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
              <p className="text-sm font-bold text-zinc-900 md:text-base">
                Kaynak:
              </p>
              <a
                href="https://www.kap.org.tr/Bildirim/1622771"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block text-sm font-medium underline underline-offset-2 md:text-base"
              >
                Orjinal Kap içeriği
              </a>
            </div>

            <p className="mt-6 text-sm text-zinc-400">
              02.07.2026 – Bu içerik bilgilendirme amaçlıdır, yatırım tavsiyesi
              değildir.
            </p>

            <div className="mt-6">
              <AuthorBox />
            </div>
          </div>
        </article>

        <div className="mt-8">
          <HaberIlgiliBolumler
            slug="aksen-bbva-124-milyon-dolar-kredi-anlasmasi"
            baslik="AKSEN BBVA 124 milyon dolar kredi anlaşması"
          />
        </div>

        <HaberNavigasyon
          href="/haber/aksen-bbva-124-milyon-dolar-kredi-anlasmasi"
          className="mt-8"
        />
      </div>
    </main>
  );
}
