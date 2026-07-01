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
  title: "EKGYO Eyüpsultan Kemerburgaz 3. Etap İhalesinde En Yüksek Teklif Açıklandı",
  description:
    "Emlak Konut GYO, İstanbul Eyüpsultan Kemerburgaz 3. Etap arsa satışı karşılığı gelir paylaşımı işi ihalesinin 2. oturumunda en yüksek teklifin 36,66 milyar TL satış toplam geliri ve 15,40 milyar TL şirket payı toplam geliri olduğunu açıkladı.",
  alternates: {
    canonical:
      "https://www.hocaileborsa.com/haber/ekgyo-eyupsultan-kemerburgaz-3-etap-ihale-sonucu",
  },
  openGraph: {
    type: "article",
    images: [
      {
        url: "https://www.hocaileborsa.com/ekgyo-eyupsultan-kemerburgaz-3-etap-ihale-sonucu.webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [
      "https://www.hocaileborsa.com/ekgyo-eyupsultan-kemerburgaz-3-etap-ihale-sonucu.webp",
    ],
  },
};

export default function EkgyoEyupsultanKemerburgazUcEtapIhaleSonucuPage() {
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
              src="/ekgyo-eyupsultan-kemerburgaz-3-etap-ihale-sonucu.webp"
              alt="EKGYO Eyüpsultan Kemerburgaz 3. Etap ihale sonucu"
              fill
              unoptimized
              className="object-cover"
            />
          </div>

          <div className="p-5 md:p-8">
            <header>
              <h1 className="text-2xl font-bold leading-tight text-zinc-900 md:text-4xl">
                EKGYO Eyüpsultan Kemerburgaz 3. Etap İhalesinde En Yüksek Teklif Açıklandı
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
                Emlak Konut Gayrimenkul Yatırım Ortaklığı A.Ş. (EKGYO), İstanbul
                Eyüpsultan Kemerburgaz 3. Etap Arsa Satışı Karşılığı Gelir
                Paylaşımı İşi ihalesinin 2. oturum sonucuna ilişkin KAP açıklaması
                yayımladı. Açıklamada en yüksek teklifin 36.661.000.000 TL satış
                toplam geliri ve 15.397.620.000 TL şirket payı toplam geliri
                seviyesinde oluştuğu bildirildi.
              </p>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
                  Ne oldu?
                </h2>
                <p>
                  EKGYO ile İstanbul Valiliği Sosyal Yardımlaşma ve Dayanışma
                  Vakfı arasında imzalanan işbirliği protokolü kapsamında,
                  İstanbul Eyüpsultan Kemerburgaz’da bulunan taşınmaz üzerinde
                  geliştirilecek projenin ihale sürecinde 2. oturum 1 Temmuz 2026
                  tarihinde saat 14:30’da gerçekleştirildi.
                </p>
                <p>
                  İhale komisyonu huzurunda yapılan oturumda istekliler tarafından
                  verilen teklifler değerlendirildi. KAP açıklamasında gelen en
                  yüksek teklif kamuoyuyla paylaşıldı.
                </p>
                <p>
                  Şirket, tekliflerin değerlendirme sürecinin devam ettiğini ve
                  ihalenin sonuçlanmasının ardından kamuoyunun ayrıca
                  bilgilendirileceğini belirtti.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
                  En yüksek teklif ne kadar?
                </h2>
                <p>
                  KAP açıklamasına göre arsa satışı karşılığı satış toplam geliri
                  36.661.000.000 TL olarak açıklandı. Arsa satışı karşılığı şirket
                  payı gelir oranı %42 olurken, şirket payı toplam geliri
                  15.397.620.000 TL seviyesinde oluştu.
                </p>
                <p>
                  Bu büyüklük, EKGYO açısından ayrı haber değeri taşıyan önemli
                  bir ihale sonucu olarak öne çıkıyor. Ancak açıklamada sürecin
                  henüz değerlendirme aşamasında olduğu belirtildiği için haber
                  kesinleşmiş ihale sonucu olarak değil, en yüksek teklifin
                  açıklanması olarak okunmalıdır.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
                  EKGYO yatırımcıları için neden önemli?
                </h2>
                <p>
                  EKGYO’nun gelir paylaşımı modeliyle yürüttüğü büyük ölçekli
                  projeler, şirketin portföy büyüklüğü, gelir potansiyeli ve
                  gelecek dönem nakit akışı beklentileri açısından yakından takip
                  edilir. Kemerburgaz 3. Etap ihalesinde açıklanan 15,4 milyar TL
                  seviyesindeki şirket payı toplam geliri bu nedenle dikkat çekici
                  bir büyüklüğe işaret ediyor.
                </p>
                <p>
                  Projenin İstanbul’da konumlanması ve gelir paylaşımı modeliyle
                  yürütülmesi, yatırımcıların hem ihale sonucunu hem de projenin
                  ilerleyen satış ve geliştirme sürecini izlemesini gerektiriyor.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
                  Süreç kesinleşti mi?
                </h2>
                <p>
                  Hayır. KAP açıklamasında tekliflerin değerlendirme sürecinin
                  devam ettiği açık şekilde belirtildi. Bu nedenle açıklanan tutar
                  şu aşamada en yüksek teklif niteliğinde bulunuyor.
                </p>
                <p>
                  İhalenin nihai sonucu açıklandığında EKGYO’nun ayrıca KAP
                  bildirimi yapması beklenir. Bu nedenle yatırımcıların sonraki
                  bildirimleri takip etmesi gerekir.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
                  Şirket hakkında
                </h2>
                <p>
                  Emlak Konut GYO, Türkiye’de gayrimenkul geliştirme ve konut
                  projeleri alanında faaliyet gösteren büyük ölçekli bir gayrimenkul
                  yatırım ortaklığıdır. Şirket, arsa satışı karşılığı gelir paylaşımı,
                  anahtar teslim projeler ve farklı gayrimenkul geliştirme modelleriyle
                  portföyünü büyütmektedir.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
                  Değerlendirme
                </h2>
                <p>
                  EKGYO’nun Eyüpsultan Kemerburgaz 3. Etap ihalesinde açıklanan
                  en yüksek teklif, büyüklüğü nedeniyle şirket için pozitif
                  algılanabilecek bir gelişme. Özellikle 36,66 milyar TL satış
                  toplam geliri ve 15,40 milyar TL şirket payı toplam geliri, projenin
                  finansal ölçeğini net şekilde ortaya koyuyor.
                </p>
                <p>
                  Buna karşılık süreç henüz kesinleşmiş ihale sonucu aşamasında
                  değil. Değerlendirme sürecinin devam ediyor olması nedeniyle
                  nihai karar açıklanmadan bu tutarların kesin gelir gibi
                  yorumlanması doğru olmaz.
                </p>
                <p>
                  Haber kısa vadede EKGYO hissesi üzerinde yatırımcı ilgisini
                  artırabilecek nitelikte olsa da kalıcı etki, ihalenin kesinleşmesi,
                  sözleşme süreci ve projenin satış performansıyla birlikte daha
                  sağlıklı değerlendirilecektir.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
                  Sırada ne var?
                </h2>
                <p>
                  Bundan sonraki aşamada ihale değerlendirme sürecinin tamamlanması
                  ve nihai sonucun KAP üzerinden açıklanması takip edilecek. EKGYO’nun
                  proje özelindeki yeni bildirimleri, sürecin finansal etkisini daha
                  net ortaya koyacaktır.
                </p>
              </section>
            </div>

            <div className="mt-6 rounded-2xl border border-blue-200 bg-blue-50 p-5">
              <p className="text-sm font-bold text-blue-900 md:text-base">
                Haber özeti:
              </p>
              <p className="mt-2 text-sm leading-7 text-blue-800 md:text-base">
                EKGYO, İstanbul Eyüpsultan Kemerburgaz 3. Etap ihalesinin 2.
                oturumunda en yüksek teklifin 36.661.000.000 TL satış toplam
                geliri ve 15.397.620.000 TL şirket payı toplam geliri olarak
                oluştuğunu açıkladı.
              </p>
            </div>

            <div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
              <p className="text-sm font-bold text-emerald-900 md:text-base">
                Olası Etki:
              </p>
              <p className="mt-2 text-sm leading-7 text-emerald-800 md:text-base">
                Pozitif / Takip Edilmeli — İhale büyüklüğü ve şirket payı toplam
                geliri dikkat çekici. Ancak değerlendirme süreci devam ettiği için
                nihai sonuç ayrıca takip edilmeli.
              </p>
            </div>

            <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-5">
              <p className="text-sm font-bold text-amber-900 md:text-base">
                Dikkat edilmesi gereken nokta:
              </p>
              <p className="mt-2 text-sm leading-7 text-amber-800 md:text-base">
                Açıklanan rakamlar en yüksek teklife aittir. KAP açıklamasında
                tekliflerin değerlendirme sürecinin devam ettiği belirtilmiştir.
                Nihai ihale sonucu ayrıca açıklanacaktır.
              </p>
            </div>

            <div className="mt-6 rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
              <p className="text-sm font-bold text-zinc-900 md:text-base">
                Kaynak:
              </p>
              <a
                href="https://www.kap.org.tr/Bildirim/1622639"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block text-sm font-medium underline underline-offset-2 md:text-base"
              >
                Orjinal Kap içeriği
              </a>
            </div>

            <p className="mt-6 text-sm text-zinc-400">
              01.07.2026 – Bu içerik bilgilendirme amaçlıdır, yatırım tavsiyesi
              değildir.
            </p>

            <div className="mt-6">
              <AuthorBox />
            </div>
          </div>
        </article>

        <div className="mt-8">
          <HaberIlgiliBolumler
            slug="ekgyo-eyupsultan-kemerburgaz-3-etap-ihale-sonucu"
            baslik="EKGYO Eyüpsultan Kemerburgaz 3. Etap ihale sonucu"
          />
        </div>

        <HaberNavigasyon
          href="/haber/ekgyo-eyupsultan-kemerburgaz-3-etap-ihale-sonucu"
          className="mt-8"
        />
      </div>
    </main>
  );
}
