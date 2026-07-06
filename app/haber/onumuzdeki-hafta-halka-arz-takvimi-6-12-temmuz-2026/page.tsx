import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import HaberIlgiliBolumler from "@/components/HaberIlgiliBolumler";
import AuthorBox from "@/components/AuthorBox";
import HaberAltKisim from "@/components/HaberAltKisim";
import { formatHaberTarihi, getHaberDosyaTarihi } from "@/lib/haber-tarih";

const haberSaati = getHaberDosyaTarihi(import.meta.url);
const haberTarihi = formatHaberTarihi(haberSaati);

const slug = "onumuzdeki-hafta-halka-arz-takvimi-6-12-temmuz-2026";
const haberUrl = `https://www.hocaileborsa.com/haber/${slug}`;
const haberGorsel =
  "https://www.hocaileborsa.com/onumuzdeki-hafta-halka-arz-takvimi-6-12-temmuz-2026.webp";

export const metadata: Metadata = {
  title: "Önümüzdeki Haftanın Halka Arz Takvimi: 6-12 Temmuz 2026",
  description:
    "6-12 Temmuz 2026 haftasında halka arz gündemi yoğun geçecek. SOHOE, ORZAX, GOLDA, EKIM ve ISVEA işlem görmeye başlayacak; SSAAT ve SARAE talep toplayacak.",
  alternates: {
    canonical: haberUrl,
  },
  openGraph: {
    type: "article",
    title: "Önümüzdeki Haftanın Halka Arz Takvimi: 6-12 Temmuz 2026",
    description:
      "Bu hafta halka arz takviminde yeni işlem başlangıçları, talep toplama süreçleri ve işlem başlama tarihi beklenen şirketler öne çıkıyor.",
    url: haberUrl,
    images: [
      {
        url: haberGorsel,
        width: 1200,
        height: 675,
        alt: "6-12 Temmuz 2026 haftası halka arz takvimi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Önümüzdeki Haftanın Halka Arz Takvimi: 6-12 Temmuz 2026",
    description:
      "SOHOE, ORZAX, SSAAT, SARAE, EKIM, GOLDA ve ISVEA başlıklarıyla 6-12 Temmuz haftasının halka arz gündemi.",
    images: [haberGorsel],
  },
};

const ozetKartlari = [
  {
    baslik: "İşleme Başlayacak",
    deger: "5 Halka Arz",
    aciklama: "SOHOE, ORZAX, GOLDA, EKIM ve ISVEA için ilk işlem tarihleri belli oldu",
  },
  {
    baslik: "Talep Toplayacak",
    deger: "2 Halka Arz",
    aciklama: "SSAAT ve SARAE bu hafta talep toplama sürecinde olacak",
  },
  {
    baslik: "Yeni İşlem Tarihleri",
    deger: "3 Şirket",
    aciklama: "GOLDA 8 Temmuz, EKIM 9 Temmuz, ISVEA 10 Temmuz günü işleme başlayacak",
  },
  {
    baslik: "Gündemdeki Seri",
    deger: "Beta Enerji",
    aciklama: "Halka arz sonrası tavan serisi devam ediyor",
  },
];

const islemeBaslayacaklar = [
  {
    kod: "SOHOE",
    tarih: "6 Temmuz Pazartesi",
    durum: "Borsada işlem görmeye başlayacak",
  },
  {
    kod: "ORZAX",
    tarih: "7 Temmuz Salı",
    durum: "Borsada işlem görmeye başlayacak",
  },
  {
    kod: "GOLDA",
    tarih: "8 Temmuz Çarşamba",
    durum: "Borsada işlem görmeye başlayacak",
  },
  {
    kod: "EKIM",
    tarih: "9 Temmuz Perşembe",
    durum: "Borsada işlem görmeye başlayacak",
  },
  {
    kod: "ISVEA",
    tarih: "10 Temmuz Cuma",
    durum: "Borsada işlem görmeye başlayacak",
  },
];

const talepToplayacaklar = [
  {
    kod: "SSAAT",
    tarih: "6-7-8 Temmuz",
    durum: "Talep toplama süreci başlayacak",
  },
  {
    kod: "SARAE",
    tarih: "8-9-10 Temmuz",
    durum: "Talep toplama süreci başlayacak",
  },
];

const haftaAkisi = [
  {
    gun: "6 Temmuz Pazartesi",
    baslik: "SOHOE işlem görmeye başlayacak, SSAAT talep toplamaya başlayacak",
  },
  {
    gun: "7 Temmuz Salı",
    baslik: "ORZAX işlem görmeye başlayacak, SSAAT talep toplamaya devam edecek",
  },
  {
    gun: "8 Temmuz Çarşamba",
    baslik: "GOLDA işlem görmeye başlayacak; SSAAT talep toplamayı tamamlayacak, SARAE talep toplamaya başlayacak",
  },
  {
    gun: "9 Temmuz Perşembe",
    baslik: "EKIM işlem görmeye başlayacak, SARAE talep toplama süreci devam edecek",
  },
  {
    gun: "10 Temmuz Cuma",
    baslik: "ISVEA işlem görmeye başlayacak, SARAE talep toplama sürecini tamamlayacak",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "Önümüzdeki Haftanın Halka Arz Takvimi: 6-12 Temmuz 2026",
  description:
    "6-12 Temmuz 2026 haftasında SOHOE, ORZAX, GOLDA, EKIM ve ISVEA işlem görmeye başlayacak; SSAAT ve SARAE talep toplayacak.",
  image: haberGorsel,
  datePublished: "2026-07-05T11:00:00+03:00",
  dateModified: "2026-07-06T12:00:00+03:00",
  url: haberUrl,
  inLanguage: "tr",
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
};

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:p-6">
      <h2 className="mb-4 text-xl font-bold tracking-tight text-slate-900">
        {title}
      </h2>
      {children}
    </section>
  );
}

export default function HalkaArzTakvimiHaberPage() {
  return (
    <main className="min-h-screen bg-[#f8fafc] px-4 py-6 md:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="mx-auto max-w-4xl">
        <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_2px_16px_rgba(15,23,42,0.07)]">
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100">
            <Image
              src="/onumuzdeki-hafta-halka-arz-takvimi-6-12-temmuz-2026.webp"
              alt="6-12 Temmuz 2026 haftası halka arz takvimi"
              fill
              unoptimized
              className="object-cover"
              priority
            />
          </div>

          <div className="p-6 md:p-10">
            <h1 className="text-2xl font-bold leading-tight tracking-tight text-slate-900 md:text-3xl lg:text-4xl">
              Önümüzdeki Haftanın Halka Arz Takvimi: 6-12 Temmuz 2026
            </h1>

            <div className="mb-5 mt-3 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center rounded-md bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700 ring-1 ring-inset ring-emerald-600/20">
                Halka Arz Takvimi
              </span>
              <time dateTime={haberSaati} className="text-sm text-slate-500">
                {haberTarihi}
              </time>
              <span className="text-slate-300">·</span>
              <Link
                href="/yazar/erman-hoca"
                className="text-sm font-semibold text-slate-500 hover:text-blue-600"
              >
                Erman Hoca
              </Link>
            </div>

            <div className="space-y-6 text-base leading-8 text-slate-700 md:text-lg">
              <p>
                6-12 Temmuz 2026 haftasında halka arz gündemi oldukça yoğun
                olacak. Haftanın takviminde hem borsada işlem görmeye başlayacak
                şirketler hem de talep toplama sürecine girecek yeni halka arzlar
                öne çıkıyor.
              </p>

              <p>
                Haftanın ilk işlem gününden itibaren <strong>SOHOE</strong>,{" "}
                <strong>ORZAX</strong>, <strong>GOLDA</strong>,{" "}
                <strong>EKIM</strong> ve <strong>ISVEA</strong> tarafında borsada
                işlem başlangıcı takip edilecek. Aynı hafta içinde{" "}
                <strong>SSAAT</strong> ve <strong>SARAE</strong> için talep
                toplama süreçleri yatırımcıların gündeminde olacak.
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                {ozetKartlari.map((item) => (
                  <div
                    key={item.baslik}
                    className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4"
                  >
                    <div className="text-sm font-semibold text-emerald-800">
                      {item.baslik}
                    </div>
                    <div className="mt-1 text-2xl font-bold text-emerald-950">
                      {item.deger}
                    </div>
                    <div className="mt-1 text-sm text-emerald-800">
                      {item.aciklama}
                    </div>
                  </div>
                ))}
              </div>

              <Section title="Bu hafta halka arz takviminde neler var?">
                <p className="text-sm leading-7 text-slate-600 md:text-base">
                  Önümüzdeki hafta halka arz piyasasında üç ana başlık öne
                  çıkıyor. İlk olarak daha önce talep toplama sürecini tamamlayan
                  bazı şirketlerin Borsa İstanbul’da işlem görmeye başlaması
                  bekleniyor. İkinci olarak yeni halka arzlarda talep toplama
                  süreçleri başlayacak. Üçüncü başlıkta ise hafta içine yayılan
                  yeni işlem başlangıç tarihleri takip edilecek.
                </p>

                <div className="mt-4 rounded-xl border border-blue-200 bg-blue-50 p-4 text-sm leading-7 text-blue-900 md:text-base">
                  Güncel halka arz takvimine ve tarih değişikliklerine{" "}
                  <Link
                    href="/halka-arz/takvim"
                    className="font-bold underline underline-offset-4"
                  >
                    Halka Arz Takvimi
                  </Link>{" "}
                  sayfasından ulaşabilirsiniz.
                </div>
              </Section>

              <Section title="İşleme başlayacak halka arzlar">
                <div className="overflow-x-auto">
                  <table className="min-w-full overflow-hidden rounded-xl border border-slate-200 text-sm">
                    <thead className="bg-slate-100">
                      <tr>
                        <th className="px-4 py-3 text-left font-semibold text-slate-800">
                          Hisse
                        </th>
                        <th className="px-4 py-3 text-left font-semibold text-slate-800">
                          Tarih
                        </th>
                        <th className="px-4 py-3 text-left font-semibold text-slate-800">
                          Durum
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {islemeBaslayacaklar.map((item, index) => (
                        <tr
                          key={item.kod}
                          className={index % 2 === 0 ? "bg-white" : "bg-slate-50"}
                        >
                          <td className="px-4 py-3 font-bold text-slate-900">
                            {item.kod}
                          </td>
                          <td className="px-4 py-3 font-semibold text-emerald-700">
                            {item.tarih}
                          </td>
                          <td className="px-4 py-3 text-slate-700">
                            {item.durum}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <p className="mt-4 text-sm leading-7 text-slate-600 md:text-base">
                  SOHOE 6 Temmuz Pazartesi, ORZAX 7 Temmuz Salı, GOLDA 8 Temmuz
                  Çarşamba, EKIM 9 Temmuz Perşembe ve ISVEA 10 Temmuz Cuma günü
                  işlem görmeye başlayacak. Yeni işlem başlangıçları, halka arz
                  sonrası ilk fiyatlamaların oluşması açısından yatırımcıların
                  yakından izlediği başlıklar arasında yer alıyor.
                </p>
              </Section>

              <Section title="Yeni açıklanan işlem başlangıçları">
                <div className="grid gap-3 sm:grid-cols-3">
                  {islemeBaslayacaklar.slice(2).map((item) => (
                    <div
                      key={item.kod}
                      className="rounded-xl border border-slate-200 bg-slate-50 p-4"
                    >
                      <div className="text-2xl font-bold text-slate-900">
                        {item.kod}
                      </div>
                      <div className="mt-2 text-sm font-semibold text-cyan-700">
                        {item.tarih}
                      </div>
                      <div className="mt-2 text-sm leading-6 text-slate-600">
                        {item.durum}
                      </div>
                    </div>
                  ))}
                </div>

                <p className="mt-4 text-sm leading-7 text-slate-600 md:text-base">
                  GOLDA, EKIM ve ISVEA tarafında işlem başlangıç tarihleri
                  netleşti. Bu şirketlerde borsada ilk fiyatlamaların hafta
                  içinde sırasıyla 8, 9 ve 10 Temmuz 2026 tarihlerinde oluşması
                  bekleniyor.
                </p>
              </Section>

              <Section title="Talep toplayacak halka arzlar">
                <div className="overflow-x-auto">
                  <table className="min-w-full overflow-hidden rounded-xl border border-slate-200 text-sm">
                    <thead className="bg-slate-100">
                      <tr>
                        <th className="px-4 py-3 text-left font-semibold text-slate-800">
                          Hisse
                        </th>
                        <th className="px-4 py-3 text-left font-semibold text-slate-800">
                          Talep Toplama Tarihi
                        </th>
                        <th className="px-4 py-3 text-left font-semibold text-slate-800">
                          Durum
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {talepToplayacaklar.map((item, index) => (
                        <tr
                          key={item.kod}
                          className={index % 2 === 0 ? "bg-white" : "bg-slate-50"}
                        >
                          <td className="px-4 py-3 font-bold text-slate-900">
                            {item.kod}
                          </td>
                          <td className="px-4 py-3 font-semibold text-blue-700">
                            {item.tarih}
                          </td>
                          <td className="px-4 py-3 text-slate-700">
                            {item.durum}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <p className="mt-4 text-sm leading-7 text-slate-600 md:text-base">
                  SSAAT halka arzında talep toplama süreci 6-7-8 Temmuz
                  tarihlerinde gerçekleşecek. SARAE halka arzında ise talep
                  toplama süreci 8-9-10 Temmuz tarihlerinde yapılacak. Böylece
                  haftanın ortasında iki ayrı halka arz süreci aynı anda
                  yatırımcı gündeminde yer alacak.
                </p>
              </Section>

              <Section title="Haftalık halka arz akışı">
                <div className="space-y-3">
                  {haftaAkisi.map((item) => (
                    <div
                      key={item.gun}
                      className="rounded-xl border border-slate-200 bg-slate-50 p-4"
                    >
                      <div className="text-sm font-bold text-slate-900">
                        {item.gun}
                      </div>
                      <div className="mt-1 text-sm leading-7 text-slate-600 md:text-base">
                        {item.baslik}
                      </div>
                    </div>
                  ))}
                </div>
              </Section>

              <Section title="Beta Enerji halka arzında tavan serisi sürüyor">
                <p className="text-sm leading-7 text-slate-600 md:text-base">
                  Haftanın dikkat çeken diğer başlıklarından biri de Beta Enerji
                  halka arzı olacak. Halka arz sonrası tavan serisi devam eden
                  şirket, yeni halka arzlara yönelik yatırımcı ilgisinin de takip
                  edilmesine neden oluyor.
                </p>

                <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">
                  Tavan serilerinin devam edip etmemesi; piyasa koşulları,
                  halka arz büyüklüğü, dağıtım sonrası dolaşımdaki pay miktarı,
                  yatırımcı ilgisi ve genel BIST görünümüyle birlikte
                  değerlendirilmelidir. Bu nedenle sadece tavan serisine bakarak
                  karar vermek yerine şirketin temel verileri ve halka arz
                  detayları da incelenmelidir.
                </p>
              </Section>

              <Section title="Yatırımcılar bu hafta neyi takip etmeli?">
                <p className="text-sm leading-7 text-slate-600 md:text-base">
                  Halka arz takviminin yoğun olduğu haftalarda yatırımcıların
                  özellikle tarih değişikliklerini, işlem başlangıcı duyurularını,
                  dağıtım sonuçlarını ve ilk işlem günlerindeki fiyat hareketlerini
                  yakından takip etmesi gerekir. Aynı hafta içinde birden fazla
                  talep toplama süreci olduğunda nakit planlaması da daha önemli
                  hale gelir.
                </p>

                <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">
                  SOHOE, ORZAX, GOLDA, EKIM ve ISVEA için ilk işlem günleri;
                  SSAAT ve SARAE için ise talep toplama takvimi haftanın öne
                  çıkan başlıkları olacak.
                </p>
              </Section>

              <Section title="Genel değerlendirme">
                <p className="text-sm leading-7 text-slate-600 md:text-base">
                  6-12 Temmuz haftası, halka arz piyasası açısından son dönemin
                  en hareketli haftalarından biri olabilir. Bir tarafta yeni
                  işlem başlangıçları ve diğer tarafta yeni talep toplama
                  süreçleri nedeniyle piyasanın odağı halka arz takviminde
                  kalacak.
                </p>

                <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">
                  Özellikle aynı hafta içinde hem yeni işlem başlangıçlarının hem
                  de yeni talep toplama süreçlerinin bulunması, yatırımcı ilgisini
                  canlı tutabilir. Buna karşılık, halka arzlara katılım kararı
                  verilirken sadece kısa vadeli tavan beklentisiyle değil; şirket
                  finansalları, halka arz fiyatı, dağıtım yöntemi, fon kullanım
                  alanları ve piyasa koşulları birlikte değerlendirilmelidir.
                </p>
              </Section>

              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm leading-7 text-slate-600">
                <div className="font-semibold text-slate-800">
                  İlgili Sayfa
                </div>
                <Link
                  href="/halka-arz/takvim"
                  className="mt-2 inline-block font-medium text-slate-700 underline underline-offset-2"
                >
                  Güncel Halka Arz Takvimi
                </Link>
              </div>

              <HaberIlgiliBolumler
                slug={slug}
                baslik="Önümüzdeki Haftanın Halka Arz Takvimi: 6-12 Temmuz 2026"
              />

              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm font-medium leading-7 text-amber-900 md:text-base">
                ⚠️ Bu haber bilgilendirme amacıyla hazırlanmıştır, yatırım
                tavsiyesi değildir. Halka arz tarihleri, işlem başlama günleri ve
                talep toplama süreçleri şirket, Borsa İstanbul, SPK veya KAP
                açıklamalarına göre değişebilir. Güncel takvim için resmi
                açıklamalar ve halka arz takvimi takip edilmelidir.
              </div>
            </div>
          </div>

          <HaberAltKisim href={`/haber/${slug}`} />

          <AuthorBox />
        </article>
      </div>
    </main>
  );
}
