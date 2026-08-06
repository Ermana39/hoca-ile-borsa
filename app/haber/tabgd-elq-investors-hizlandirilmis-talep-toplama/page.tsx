import Image from "next/image";
import Link from "@/components/NoPrefetchLink";
import type { Metadata } from "next";
import AuthorBox from "@/components/AuthorBox";
import { formatHaberTarihi, getHaberDosyaTarihi } from "@/lib/haber-tarih";
import HaberAltKisim from "@/components/HaberAltKisim";

const haberSaati = getHaberDosyaTarihi(import.meta.url);
const haberTarihi = formatHaberTarihi(haberSaati);

export const metadata: Metadata = {
  title: "TABGD’de ELQ Investors’tan Hızlandırılmış Talep Toplama Süreci",
  description:
    "TAB Gıda payları için ELQ Investors VIII Ltd tarafından nitelikli kurumsal alıcılara yönelik hızlandırılmış talep toplama süreci başlatıldı. Satışa konu payların azami oranı %5,63 olarak açıklandı.",
  alternates: {
    canonical:
      "https://www.hocaileborsa.com/haber/tabgd-elq-investors-hizlandirilmis-talep-toplama",
  },
  openGraph: {
    type: "article",
    images: [
      {
        url: "https://www.hocaileborsa.com/tabgd-elq-investors-hizlandirilmis-talep-toplama.webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [
      "https://www.hocaileborsa.com/tabgd-elq-investors-hizlandirilmis-talep-toplama.webp",
    ],
  },
};


const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "TABGD’de ELQ Investors’tan Hızlandırılmış Talep Toplama Süreci",
  description:
    "TAB Gıda payları için ELQ Investors VIII Ltd tarafından nitelikli kurumsal alıcılara yönelik hızlandırılmış talep toplama süreci başlatıldı. Satışa konu payların azami oranı %5,63 olarak açıklandı.",
  datePublished: haberSaati,
  dateModified: haberSaati,
  url: "https://www.hocaileborsa.com/haber/tabgd-elq-investors-hizlandirilmis-talep-toplama",
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
  image: "https://www.hocaileborsa.com/tabgd-elq-investors-hizlandirilmis-talep-toplama.webp",
};

export default function TabgdElqInvestorsHizlandirilmisTalepToplamaPage() {
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
              src="/tabgd-elq-investors-hizlandirilmis-talep-toplama.webp"
              alt="TABGD ELQ Investors hızlandırılmış talep toplama süreci"
              fill

              sizes="(min-width: 1024px) 896px, 100vw"
className="object-cover"
            />
          </div>

          <div className="p-5 md:p-8">
            <header>
              <h1 className="text-2xl font-bold leading-tight text-zinc-900 md:text-4xl">
                TABGD’de ELQ Investors’tan Hızlandırılmış Talep Toplama Süreci
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
                TAB Gıda Sanayi ve Ticaret A.Ş. (TABGD) ile ilgili KAP açıklamasında,
                ELQ Investors VIII Ltd tarafından nitelikli kurumsal alıcılara
                yönelik hızlandırılmış talep toplama sürecinin başlatıldığı
                duyuruldu. Açıklamaya göre satışa konu edilebilecek paylar,
                TAB Gıda sermayesinin %5,63’üne kadar olan bölümü temsil ediyor.
              </p>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
                  Ne oldu?
                </h2>
                <p>
                  ELQ Investors VIII Ltd, TAB Gıda’daki pay sahipliğinin tamamını
                  temsil eden azami 14.721.793 adet pay için hızlandırılmış talep
                  toplama süreci başlattı. Satışın Türkiye’de yerleşik olmayan
                  kurumsal alıcılara yapılması planlanıyor.
                </p>
                <p>
                  Açıklamada, işlem kapsamında satılacak nihai pay adedi ve satış
                  fiyatının talep toplama süreci tamamlandıktan sonra belirleneceği
                  ve ayrıca kamuya duyurulacağı ifade edildi.
                </p>
                <p>
                  Takas işleminin borsa dışında 3 Temmuz 2026 tarihinde
                  gerçekleşmesinin beklendiği de KAP bildiriminde yer aldı.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
                  İşlemin kapsamı ne?
                </h2>
                <p>
                  Bildirime göre satış, TAB Gıda’nın ödenmiş sermayesinin %5,63’üne
                  kadar olan kısmını kapsıyor. Bu oran, halka açık piyasada takip
                  edilen pay arzı ve yabancı kurumsal yatırımcı ilgisi açısından
                  dikkat çeken bir büyüklük olarak öne çıkıyor.
                </p>
                <p>
                  İşlemde Goldman Sachs International’ın münhasır küresel koordinatör
                  ve münhasır talep toplayıcı olarak görev yaptığı açıklandı. Satıcı
                  konumundaki ELQ Investors’ın Goldman Sachs International iştiraki
                  olduğu da bildirimde belirtildi.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
                  TABGD yatırımcıları için neden önemli?
                </h2>
                <p>
                  Bu tür hızlandırılmış talep toplama işlemleri, şirketin doğrudan
                  operasyonel faaliyetinden ziyade ortaklık yapısı ve pay likiditesi
                  açısından önem taşır. Satışın büyüklüğü, piyasada kısa vadeli
                  arz baskısı algısı oluşturabilir.
                </p>
                <p>
                  Diğer taraftan satışın kurumsal yatırımcılara yönelik olması,
                  payların blok şekilde el değiştirmesi ve nihai fiyatın talep
                  toplama sonrasında açıklanacak olması nedeniyle sürecin sonucu
                  ayrıca takip edilmelidir.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
                  Şirket hakkında
                </h2>
                <p>
                  TAB Gıda, hızlı servis restoran işletmeciliği alanında faaliyet
                  gösteren ve Türkiye’de geniş restoran ağıyla bilinen bir şirkettir.
                  Şirket, farklı global ve yerel markalarla restoran işletmeciliği,
                  operasyon yönetimi ve gıda perakendesi alanlarında faaliyet
                  yürütmektedir.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
                  Değerlendirme
                </h2>
                <p>
                  TABGD için açıklanan süreç, klasik anlamda yeni yatırım, yeni
                  sözleşme veya şirket kasasına doğrudan nakit girişi yaratan bir
                  işlem değildir. Haber, daha çok mevcut bir ortağın pay satışı ve
                  bu satışın kurumsal yatırımcılara hangi fiyat ve miktarla
                  gerçekleşeceği üzerinden izlenmelidir.
                </p>
                <p>
                  Kısa vadede yatırımcıların odaklanacağı ana başlıklar; satış
                  fiyatı, satılacak nihai pay adedi, iskonto oranı ve işlem sonrası
                  yabancı kurumsal talebin gücü olacaktır. Satışın yüksek talep
                  görmesi pozitif algı yaratabilirken, belirgin iskonto kısa vadeli
                  fiyatlama üzerinde baskı oluşturabilir.
                </p>
                <p>
                  Bu nedenle haberin etkisi tek yönlü okunmamalı; talep toplama
                  sürecinin sonucu ve nihai fiyat açıklamasıyla birlikte
                  değerlendirilmelidir.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
                  Sırada ne var?
                </h2>
                <p>
                  Bundan sonraki aşamada hızlandırılmış talep toplama sürecinin
                  sonucu, satılan pay adedi ve satış fiyatı takip edilecek. KAP
                  açıklamasında bu bilgilerin süreç tamamlandıktan sonra ayrıca
                  duyurulacağı belirtildi.
                </p>
              </section>
            </div>

            <div className="mt-6 rounded-2xl border border-blue-200 bg-blue-50 p-5">
              <p className="text-sm font-bold text-blue-900 md:text-base">
                Haber özeti:
              </p>
              <p className="mt-2 text-sm leading-7 text-blue-800 md:text-base">
                ELQ Investors VIII Ltd, TAB Gıda sermayesinin %5,63’üne kadar olan
                kısmını temsil eden azami 14.721.793 adet pay için nitelikli
                kurumsal alıcılara yönelik hızlandırılmış talep toplama süreci
                başlattı.
              </p>
            </div>

            <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-5">
              <p className="text-sm font-bold text-amber-900 md:text-base">
                Olası Etki:
              </p>
              <p className="mt-2 text-sm leading-7 text-amber-800 md:text-base">
                Nötr / Takip Edilmeli — İşlem şirket operasyonlarından ziyade
                ortak pay satışı niteliğinde. Kısa vadeli etki, nihai satış fiyatı,
                satılacak pay adedi ve kurumsal talep gücüne göre şekillenecek.
              </p>
            </div>

            <div className="mt-6 rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
              <p className="text-sm font-bold text-zinc-900 md:text-base">
                Dikkat edilmesi gereken nokta:
              </p>
              <p className="mt-2 text-sm leading-7 text-zinc-700 md:text-base">
                İşlem şirket kasasına doğrudan nakit girişi sağlayan bir sermaye
                artırımı değildir. Mevcut ortağın pay satış süreci olduğu için
                nihai fiyat ve satış miktarı ayrıca takip edilmelidir.
              </p>
            </div>

            <div className="mt-6 rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
              <p className="text-sm font-bold text-zinc-900 md:text-base">
                Kaynak:
              </p>
              <a
                href="https://www.kap.org.tr/Bildirim/1622180"
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
                  <HaberAltKisim href="/haber/tabgd-elq-investors-hizlandirilmis-talep-toplama" />
</article>
</div>
    </main>
  );
}
