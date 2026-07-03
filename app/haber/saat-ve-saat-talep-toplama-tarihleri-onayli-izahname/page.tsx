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
  title: "Saat ve Saat Halka Arzında Talep Toplama Tarihleri Açıklandı",
  description:
    "Saat ve Saat halka arzında talep toplama tarihleri 6-7-8 Temmuz 2026 olarak açıklandı. Halka arzda bireysele eşit dağıtım ve katılım endeksine uygunluk bilgisi yer aldı.",
  alternates: {
    canonical:
      "https://www.hocaileborsa.com/haber/saat-ve-saat-talep-toplama-tarihleri-onayli-izahname",
  },
  openGraph: {
    type: "article",
    images: [
      {
        url: "https://www.hocaileborsa.com/saat-ve-saat-talep-toplama-tarihleri-onayli-izahname.webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [
      "https://www.hocaileborsa.com/saat-ve-saat-talep-toplama-tarihleri-onayli-izahname.webp",
    ],
  },
};

export default function SaatVeSaatTalepToplamaPage() {
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
              src="/saat-ve-saat-talep-toplama-tarihleri-onayli-izahname.webp"
              alt="Saat ve Saat halka arz talep toplama tarihleri"
              fill
              unoptimized
              className="object-cover"
            />
          </div>

          <div className="p-5 md:p-8">
            <header>
              <h1 className="text-2xl font-bold leading-tight text-zinc-900 md:text-4xl">
                Saat ve Saat Halka Arzında Talep Toplama Tarihleri Açıklandı
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
                Saat ve Saat San. Tic. A.Ş. halka arzında talep toplama tarihleri
                ve onaylı izahname detayları açıklandı. Şirket payları için talep
                toplama süreci 6-7-8 Temmuz 2026 tarihlerinde, Pazartesi, Salı ve
                Çarşamba günleri gerçekleştirilecek.
              </p>

              <p>
                Halka arzda dağıtım yöntemi bireysele eşit dağıtım olarak
                duyuruldu. Açıklanan bilgilere göre halka arz katılım endeksine
                uygun olacak.
              </p>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
                  Ne oldu?
                </h2>
                <p>
                  Saat ve Saat halka arzında talep toplama takvimi netleşti. Buna
                  göre yatırımcılar 6, 7 ve 8 Temmuz 2026 tarihlerinde halka arza
                  talepte bulunabilecek.
                </p>
                <p>
                  Halka arz fiyatı daha önce 56,00 TL olarak açıklanmıştı. Halka
                  arzın ana satış miktarı 66.944.955 lot olarak yer alırken,
                  planlanan ek satış miktarı 13.388.991 lot olarak açıklandı.
                  Ek satışın gerçekleşmesi halinde toplam satış miktarı 80.333.946
                  lota ulaşabilecek.
                </p>
                <p>
                  Şirket paylarının Borsa İstanbul’da SAAT koduyla işlem görmesi
                  bekleniyor. Halka arzda bireysel yatırımcılar için eşit dağıtım
                  yöntemi uygulanacak.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
                  Tahsisat detayları
                </h2>
                <p>
                  Açıklanan tahsisat planına göre halka arz paylarının %60’ı yurt
                  içi bireysel yatırımcılara ayrıldı. Bu gruba ayrılan pay miktarı
                  40.166.973 lot olarak duyuruldu.
                </p>
                <p>
                  Yurt içi kurumsal yatırımcılara ayrılan tahsisat oranı ise %40
                  oldu. Kurumsal yatırımcı grubu için ayrılan pay miktarı
                  26.777.982 lot olarak açıklandı.
                </p>
                <p>
                  Halka arzda ayrıca 13.388.991 lot planlanan ek satış bulunuyor.
                  Ek satış, halka arza gelen talep ve satış sürecindeki koşullara
                  göre devreye alınabilecek ek pay satışı anlamına gelir.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
                  Bu ne anlama geliyor?
                </h2>
                <p>
                  Bireysele eşit dağıtım yöntemi, bireysel yatırımcılar arasında
                  payların başvuru büyüklüğünden bağımsız olarak daha dengeli
                  dağıtılması anlamına gelir. Bu yöntemde nihai lot miktarı,
                  halka arza katılan yatırımcı sayısına ve toplam ayrılan lota göre
                  şekillenir.
                </p>
                <p>
                  Saat ve Saat halka arzında yurt içi bireysel yatırımcılara
                  40.166.973 lot ayrılması, olası kişi başı dağıtım hesabında ana
                  referans kalemlerden biri olacak. Yatırımcı sayısı arttıkça kişi
                  başına düşebilecek lot miktarı azalır; yatırımcı sayısı düşük
                  kaldıkça kişi başı olası dağıtım artabilir.
                </p>
                <p>
                  Katılım endeksine uygunluk bilgisi, faiz hassasiyeti bulunan ve
                  katılım kriterlerine göre yatırım yapan yatırımcılar açısından
                  ayrıca takip edilen başlıklardan biridir. Ancak yatırımcıların son
                  karar öncesinde güncel onaylı izahname ve satış duyurusunu ayrıca
                  kontrol etmesi gerekir.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
                  Şirket hakkında
                </h2>
                <p>
                  Saat ve Saat San. ve Tic. A.Ş., saat ve aksesuar perakendeciliği,
                  distribütörlük, toptan satış ve e-ticaret kanallarında faaliyet
                  gösteren bir şirkettir. Şirket; mağaza ağı, bayi kanalı, çevrim içi
                  satış platformları ve marka portföyüyle saat ve aksesuar pazarında
                  konumlanıyor.
                </p>
                <p>
                  Şirketin performansında mağaza verimliliği, stok yönetimi, marka
                  karması, döviz kuru, ithalat maliyetleri, tüketici talebi ve
                  e-ticaret kanallarındaki büyüme önemli rol oynar.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
                  Değerlendirme
                </h2>
                <p>
                  Saat ve Saat halka arzında talep toplama tarihinin açıklanması,
                  sürecin yatırımcı takvimi açısından netleştiğini gösteriyor.
                  6-7-8 Temmuz tarihlerinde yapılacak talep toplama, bireysel
                  yatırımcı ilgisinin ölçüleceği ana dönem olacak.
                </p>
                <p>
                  Halka arzda bireysel yatırımcıya %60 tahsisat ayrılması, dağıtım
                  tarafında bireysel katılımın önemini artırıyor. Bireysele eşit
                  dağıtım uygulanacağı için halka arza katılan toplam bireysel
                  yatırımcı sayısı, olası kişi başı lot miktarı üzerinde belirleyici
                  olacak.
                </p>
                <p>
                  Ek satış dahil edilmeden halka arz büyüklüğü 66.944.955 lot
                  üzerinden hesaplanırken, planlanan 13.388.991 lot ek satışın da
                  devreye girmesi halinde toplam arz miktarı artabilecek. Bu nedenle
                  nihai dağıtım sonuçlarında ek satışın kullanılıp kullanılmadığı
                  ayrıca takip edilmeli.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
                  Sırada ne var?
                </h2>
                <p>
                  Bundan sonraki süreçte talep toplama sonuçları, toplam yatırımcı
                  sayısı, kişi başı düşen lot miktarı, ek satışın kullanılıp
                  kullanılmadığı ve Borsa İstanbul’da ilk işlem tarihi takip
                  edilecek.
                </p>
                <p>
                  Talep sonuçları açıklandığında bireysel yatırımcılara düşen
                  maksimum lot miktarı ve halka arzın toplam talep büyüklüğü daha net
                  görülecek.
                </p>
              </section>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-blue-200 bg-blue-50 p-5">
                <p className="text-sm font-bold text-blue-900 md:text-base">
                  Talep toplama tarihleri:
                </p>
                <p className="mt-2 text-sm leading-7 text-blue-800 md:text-base">
                  6-7-8 Temmuz 2026 · Pazartesi-Salı-Çarşamba
                </p>
              </div>

              <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
                <p className="text-sm font-bold text-emerald-900 md:text-base">
                  Katılım endeksi:
                </p>
                <p className="mt-2 text-sm leading-7 text-emerald-800 md:text-base">
                  Uygun
                </p>
              </div>

              <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
                <p className="text-sm font-bold text-amber-900 md:text-base">
                  Yurt içi bireysel:
                </p>
                <p className="mt-2 text-sm leading-7 text-amber-800 md:text-base">
                  %60 tahsisat · 40.166.973 lot
                </p>
              </div>

              <div className="rounded-2xl border border-purple-200 bg-purple-50 p-5">
                <p className="text-sm font-bold text-purple-900 md:text-base">
                  Yurt içi kurumsal:
                </p>
                <p className="mt-2 text-sm leading-7 text-purple-800 md:text-base">
                  %40 tahsisat · 26.777.982 lot
                </p>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-blue-200 bg-blue-50 p-5">
              <p className="text-sm font-bold text-blue-900 md:text-base">
                Haber özeti:
              </p>
              <p className="mt-2 text-sm leading-7 text-blue-800 md:text-base">
                Saat ve Saat halka arzında talep toplama tarihleri 6-7-8 Temmuz
                2026 olarak açıklandı. Halka arzda bireysele eşit dağıtım yöntemi
                uygulanacak, yurt içi bireysel yatırımcılara %60 oranında
                40.166.973 lot ayrılacak.
              </p>
            </div>

            <div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
              <p className="text-sm font-bold text-emerald-900 md:text-base">
                Olası Etki:
              </p>
              <p className="mt-2 text-sm leading-7 text-emerald-800 md:text-base">
                Takip — Talep toplama tarihinin ve tahsisat oranlarının açıklanması,
                halka arz sürecinin takvim açısından netleştiğini gösteriyor. Nihai
                etki, talep sonuçları ve kişi başı dağıtım açıklandığında daha net
                görülecek.
              </p>
            </div>

            <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-5">
              <p className="text-sm font-bold text-amber-900 md:text-base">
                Dikkat edilmesi gereken nokta:
              </p>
              <p className="mt-2 text-sm leading-7 text-amber-800 md:text-base">
                Halka arzlarda kişi başı lot miktarı önceden kesin bilinmez.
                Dağıtım sonucu; toplam başvuru sayısı, geçerli talep miktarı ve ek
                satışın kullanılıp kullanılmadığına göre belirlenir.
              </p>
            </div>

            <div className="mt-6 rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
              <p className="text-sm font-bold text-zinc-900 md:text-base">
                Kaynak:
              </p>
              <Link
                href="/halka-arz/onayli-izahnameler/saat-ve-saat-san-ve-tic"
                className="mt-2 inline-block text-sm font-medium underline underline-offset-2 md:text-base"
              >
                Saat ve Saat onaylı izahname detayları
              </Link>
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
            slug="saat-ve-saat-talep-toplama-tarihleri-onayli-izahname"
            baslik="Saat ve Saat halka arz talep toplama tarihleri"
          />
        </div>

        <HaberNavigasyon
          href="/haber/saat-ve-saat-talep-toplama-tarihleri-onayli-izahname"
          className="mt-8"
        />
      </div>
    </main>
  );
}
