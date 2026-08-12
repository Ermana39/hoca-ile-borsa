import { seoAciklamasi } from "@/lib/seo-metadata";
import Image from "next/image";
import Link from "@/components/NoPrefetchLink";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import HaberIlgiliBolumler from "@/components/HaberIlgiliBolumler";
import AuthorBox from "@/components/AuthorBox";
import HaberAltKisim from "@/components/HaberAltKisim";
import { formatHaberTarihi, getHaberDosyaTarihi } from "@/lib/haber-tarih";

const haberSaati = getHaberDosyaTarihi(import.meta.url);
const haberTarihi = formatHaberTarihi(haberSaati);

const slug = "tralt-mollakara-altin-madeninde-ilk-altin-dokumu";
const haberUrl = `https://www.hocaileborsa.com/haber/${slug}`;
const haberGorsel =
  "https://www.hocaileborsa.com/tralt-mollakara-altin-madeninde-ilk-altin-dokumu.webp";

export const metadata: Metadata = {
  title: "TRALT Mollakara Altın Madeninde İlk Altın Dökümünü Gerçekleştirdi",
  description:
    seoAciklamasi("TRALT, Ağrı Diyadin’deki Mollakara Altın Madeni Projesi’nde ilk altın dökümünü gerçekleştirdi. İlk üretimde 7.474,2 gram altın elde edildi.", "Haberde gelişmenin ayrıntıları, açıklanan veriler ve yatırımcıların izleyebileceği temel noktalar yer alıyor."),
  alternates: {
    canonical: haberUrl,
  },
  openGraph: {
    type: "article",
    title: "TRALT Mollakara Altın Madeninde İlk Altın Dökümünü Gerçekleştirdi",
    description:
      "Mollakara Altın Madeni’nde ilk üretim tamamlandı. TRALT, 2026 sonuna kadar yaklaşık 32 bin ons altın üretimi hedefliyor.",
    url: haberUrl,
    images: [
      {
        url: haberGorsel,
        width: 1200,
        height: 675,
        alt: "TRALT Mollakara Altın Madeni ilk altın dökümü",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TRALT Mollakara Altın Madeninde İlk Altın Dökümünü Gerçekleştirdi",
    description:
      "İlk üretimde 7.474,2 gram altın elde edildi. 2026 sonu hedefi yaklaşık 32 bin ons.",
    images: [haberGorsel],
  },
};

const ozetKartlari = [
  {
    baslik: "İlk Üretim",
    deger: "7.474,2 Gram",
    aciklama: "İlk altın dökümünde elde edilen miktar",
  },
  {
    baslik: "2026 Hedefi",
    deger: "32.000 Ons",
    aciklama: "Yıl sonu üretim hedefi",
  },
  {
    baslik: "Rezerv",
    deger: "471.000 Ons",
    aciklama: "Görünür ve muhtemel altın rezervi",
  },
  {
    baslik: "Proje",
    deger: "Mollakara",
    aciklama: "Ağrı, Diyadin",
  },
];

const genelDetaylar = [
  {
    etiket: "Şirket",
    deger: "Türk Altın İşletmeleri A.Ş.",
  },
  {
    etiket: "Hisse Kodu",
    deger: "TRALT",
  },
  {
    etiket: "Bildirim Tarihi",
    deger: "16.07.2026",
  },
  {
    etiket: "Bildirim Saati",
    deger: "18:39:58",
  },
  {
    etiket: "Proje",
    deger: "Mollakara Altın Madeni Projesi",
  },
  {
    etiket: "Lokasyon",
    deger: "Ağrı İli, Diyadin İlçesi",
  },
  {
    etiket: "Gelişme",
    deger: "İlk altın dökümü gerçekleştirildi",
  },
  {
    etiket: "İlk Üretim Miktarı",
    deger: "7.474,2 gram altın",
  },
  {
    etiket: "2026 Sonu Üretim Hedefi",
    deger: "Yaklaşık 32.000 ons altın",
  },
  {
    etiket: "Görünür ve Muhtemel Rezerv",
    deger: "471.000 ons altın",
  },
  {
    etiket: "Şirketin Kullandığı Ons Fiyatı",
    deger: "4.000 ABD doları",
  },
  {
    etiket: "Şirketin Hesapladığı Brüt Hasılat Potansiyeli",
    deger: "Yaklaşık 1,884 milyar ABD doları",
  },
];

const surecAdimlari = [
  {
    baslik: "Tesis üretim aşamasına geçti",
    aciklama:
      "Mollakara Altın Madeni Projesi’nde ilk altın dökümünün yapılması, yatırım ve hazırlık döneminden fiili üretim dönemine geçildiğini gösteriyor.",
  },
  {
    baslik: "İlk üretim miktarı açıklandı",
    aciklama:
      "Şirketin düzeltme bildirimiyle ilk üretimde elde edilen miktar 7.474,2 gram altın olarak netleştirildi.",
  },
  {
    baslik: "Yıl sonu hedefi paylaşıldı",
    aciklama:
      "TRALT, 2026 yıl sonu itibarıyla projede yaklaşık 32.000 ons altın üretimi hedeflediğini açıkladı.",
  },
  {
    baslik: "Rezerv büyüklüğü öne çıktı",
    aciklama:
      "Mollakara Projesi’nin görünür ve muhtemel altın rezervi 471.000 ons seviyesinde açıklandı.",
  },
];

const nedenOnemli = [
  {
    baslik: "Proje artık üretim aşamasında",
    aciklama:
      "İlk altın dökümü, Mollakara yatırımının operasyonel faaliyete geçtiğini gösteren en kritik eşiklerden biri. Haber, planlanan bir yatırımın fiili üretime dönüşmesi açısından önemli.",
  },
  {
    baslik: "Üretim hedefi somutlaştı",
    aciklama:
      "2026 sonu için yaklaşık 32.000 ons üretim hedefi paylaşılması, yatırımcıların projenin kısa vadeli üretim ölçeğini daha net değerlendirmesini sağlıyor.",
  },
  {
    baslik: "Rezerv güçlü bir varlık tabanı sunuyor",
    aciklama:
      "471.000 ons görünür ve muhtemel rezerv, projenin yalnızca ilk üretimle sınırlı olmadığını ve daha uzun dönemli üretim potansiyeli taşıdığını gösteriyor.",
  },
  {
    baslik: "Brüt hasılat ile net kâr karıştırılmamalı",
    aciklama:
      "Şirketin 1,884 milyar dolarlık hesabı, 471.000 ons rezervin ons başına 4.000 dolar varsayımıyla çarpılması sonucu oluşan teorik brüt hasılat potansiyeli. Bu rakam üretim maliyeti, yatırım harcaması, vergi, ruhsat payı ve finansman giderleri düşülmüş net kazanç değildir.",
  },
];

const finansalOkuma = [
  "İlk altın dökümü, projeden gelir üretme sürecinin başladığını gösteriyor.",
  "Finansal katkının büyüklüğü üretim miktarı, satış fiyatı ve nakit maliyetlerle netleşecek.",
  "2026 sonu için açıklanan 32.000 ons hedef, kısa vadeli gelir potansiyelinin temel göstergesi olacak.",
  "471.000 ons rezerv, uzun dönemli üretim kapasitesi açısından olumlu bir varlık tabanı oluşturuyor.",
  "1,884 milyar dolarlık tutar şirketin varsayımsal brüt hasılat hesabı; net kâr veya bugünkü şirket değeri anlamına gelmiyor.",
  "Üretim rampasının hızı ve dönemsel üretim raporları, haberin finansallara etkisini belirleyecek.",
];

const hisseOkumasi = [
  {
    baslik: "Haberin ilk etkisi pozitif",
    aciklama:
      "Maden projesinde ilk üretimin başlaması, TRALT açısından operasyonel belirsizliğin azalması ve yatırımın gelir üreten aşamaya geçmesi nedeniyle pozitif okunabilir.",
  },
  {
    baslik: "Sürdürülebilir üretim önemli",
    aciklama:
      "İlk döküm tek başına yeterli değil. Hissenin orta vadeli görünümünde aylık üretim miktarı, kapasite artışı ve hedeflerin gerçekleşme oranı belirleyici olacak.",
  },
  {
    baslik: "Altın fiyatı etkisi yüksek",
    aciklama:
      "TRALT’ın gelir ve kârlılık görünümü, üretim performansının yanında ons altın fiyatına ve şirketin üretim maliyetine duyarlı olacak.",
  },
];

const duzeltmeNotlari = [
  {
    baslik: "İlk açıklamadaki ifade",
    aciklama:
      "Şirketin aynı gün yayımladığı ilk bildirimde ilk üretim miktarı 7.474 ons olarak yer aldı.",
  },
  {
    baslik: "Düzeltilen miktar",
    aciklama:
      "Daha sonra yayımlanan düzeltme bildiriminde doğru miktarın 7.474,2 gram altın olduğu açıklandı.",
  },
  {
    baslik: "Haberde kullanılan veri",
    aciklama:
      "Bu haber sayfasında şirketin son ve düzeltilmiş KAP bildirimi esas alınmıştır.",
  },
];

const takipBasliklari = [
  "2026 yılı sonu 32.000 ons üretim hedefinin gerçekleşme oranı",
  "Aylık ve çeyreklik altın üretim miktarları",
  "Tesisin tam kapasiteye ulaşma takvimi",
  "Ons başına üretim ve nakit maliyeti",
  "Altın satış fiyatı ve kur etkisi",
  "Projenin ciro, FAVÖK ve net kâra katkısı",
];

const seoSorular = [
  {
    soru: "TRALT ne açıkladı?",
    cevap:
      "TRALT, Ağrı’nın Diyadin ilçesinde bulunan Mollakara Altın Madeni Projesi’nde ilk altın dökümünün başarıyla gerçekleştirildiğini açıkladı.",
  },
  {
    soru: "Mollakara’da ilk üretimde ne kadar altın elde edildi?",
    cevap:
      "Şirketin düzeltme bildirimine göre ilk üretimde 7.474,2 gram altın elde edildi.",
  },
  {
    soru: "TRALT’ın 2026 yılı altın üretim hedefi kaç?",
    cevap:
      "TRALT, 2026 yıl sonu itibarıyla yaklaşık 32.000 ons altın üretimi hedefliyor.",
  },
  {
    soru: "Mollakara Altın Madeni’nin rezervi ne kadar?",
    cevap:
      "Projenin görünür ve muhtemel altın rezervi 471.000 ons seviyesinde açıklandı.",
  },
  {
    soru: "1,884 milyar dolarlık tutar neyi ifade ediyor?",
    cevap:
      "Bu tutar, 471.000 ons rezervin ons başına 4.000 dolar varsayımıyla hesaplanan teorik brüt hasılat potansiyelidir. Net kârı veya bugünkü nakit değeri göstermez.",
  },
  {
    soru: "TRALT haberi hisse için nasıl okunmalı?",
    cevap:
      "Projenin ilk üretime geçmesi operasyonel açıdan pozitif. Haber etkisinin kalıcılığı, üretim hedeflerinin gerçekleşmesi, altın fiyatı ve üretim maliyetleriyle birlikte şekillenecek.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "TRALT Mollakara Altın Madeninde İlk Altın Dökümünü Gerçekleştirdi",
  description:
    "TRALT, Ağrı Diyadin’deki Mollakara Altın Madeni Projesi’nde ilk altın dökümünü gerçekleştirdi. İlk üretimde 7.474,2 gram altın elde edildi.",
  image: haberGorsel,
  datePublished: "2026-07-16T18:39:58+03:00",
  dateModified: "2026-07-16T18:39:58+03:00",
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
  children: ReactNode;
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

export default function TraltMollakaraIlkAltinDokumuPage() {
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
              src="/tralt-mollakara-altin-madeninde-ilk-altin-dokumu.webp"
              alt="TRALT Mollakara Altın Madeni ilk altın dökümü"
              fill
              unoptimized
              className="object-cover"
              priority
            />
          </div>

          <div className="p-6 md:p-10">
            <h1 className="text-2xl font-bold leading-tight tracking-tight text-slate-900 md:text-3xl lg:text-4xl">
              TRALT Mollakara Altın Madeninde İlk Altın Dökümünü Gerçekleştirdi
            </h1>

            <div className="mb-5 mt-3 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center rounded-md bg-amber-50 px-2.5 py-1 text-xs font-semibold text-amber-800 ring-1 ring-inset ring-amber-600/20">
                Üretim Başlangıcı
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
                Türk Altın İşletmeleri A.Ş. (<strong>TRALT</strong>), Ağrı’nın
                Diyadin ilçesinde yer alan Mollakara Altın Madeni Projesi’nde ilk
                altın dökümünün başarıyla gerçekleştirildiğini açıkladı.
              </p>

              <p>
                Şirketin düzeltilmiş KAP bildirimine göre ilk üretimde{" "}
                <strong>7.474,2 gram altın</strong> elde edildi. TRALT, projede
                2026 yıl sonuna kadar yaklaşık <strong>32.000 ons</strong> altın
                üretimi hedefliyor.
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                {ozetKartlari.map((item) => (
                  <div
                    key={item.baslik}
                    className="rounded-2xl border border-amber-200 bg-amber-50 p-4"
                  >
                    <div className="text-sm font-semibold text-amber-800">
                      {item.baslik}
                    </div>
                    <div className="mt-1 text-2xl font-bold text-amber-950">
                      {item.deger}
                    </div>
                    <div className="mt-1 text-sm text-amber-800">
                      {item.aciklama}
                    </div>
                  </div>
                ))}
              </div>

              <Section title="Ne oldu?">
                <p className="text-sm leading-7 text-slate-600 md:text-base">
                  Mollakara Altın Madeni Projesi’nde ilk altın dökümünün
                  gerçekleştirilmesiyle proje fiili üretim aşamasına geçti. İlk
                  üretim sonucunda elde edilen altın miktarı 7.474,2 gram olarak
                  açıklandı.
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">
                  Şirket ayrıca 2026 yıl sonu üretim hedefini yaklaşık 32.000 ons,
                  projenin görünür ve muhtemel rezervini ise 471.000 ons olarak
                  bildirdi.
                </p>
              </Section>

              <Section title="KAP açıklamasındaki ana detaylar">
                <div className="overflow-x-auto">
                  <table className="min-w-full overflow-hidden rounded-xl border border-slate-200 text-sm">
                    <tbody>
                      {genelDetaylar.map((item, index) => (
                        <tr
                          key={item.etiket}
                          className={index % 2 === 0 ? "bg-white" : "bg-slate-50"}
                        >
                          <th className="px-4 py-3 text-left font-semibold text-slate-800">
                            {item.etiket}
                          </th>
                          <td className="px-4 py-3 font-bold text-slate-700">
                            {item.deger}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Section>

              <Section title="İlk üretimden yıl sonu hedefine">
                <div className="grid gap-4">
                  {surecAdimlari.map((item) => (
                    <div
                      key={item.baslik}
                      className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
                    >
                      <h3 className="text-base font-bold text-slate-900">
                        {item.baslik}
                      </h3>
                      <p className="mt-2 text-sm leading-7 text-slate-600 md:text-base">
                        {item.aciklama}
                      </p>
                    </div>
                  ))}
                </div>
              </Section>

              <Section title="Düzeltme bildirimi neyi değiştirdi?">
                <div className="grid gap-4">
                  {duzeltmeNotlari.map((item) => (
                    <div
                      key={item.baslik}
                      className="rounded-2xl border border-orange-200 bg-orange-50 p-4"
                    >
                      <h3 className="text-base font-bold text-orange-950">
                        {item.baslik}
                      </h3>
                      <p className="mt-2 text-sm leading-7 text-orange-900 md:text-base">
                        {item.aciklama}
                      </p>
                    </div>
                  ))}
                </div>
              </Section>

              <Section title="Bu haber neden önemli?">
                <div className="grid gap-4">
                  {nedenOnemli.map((item) => (
                    <div
                      key={item.baslik}
                      className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
                    >
                      <h3 className="text-base font-bold text-slate-900">
                        {item.baslik}
                      </h3>
                      <p className="mt-2 text-sm leading-7 text-slate-600 md:text-base">
                        {item.aciklama}
                      </p>
                    </div>
                  ))}
                </div>
              </Section>

              <Section title="Finansal etki nasıl okunmalı?">
                <p className="text-sm leading-7 text-slate-600 md:text-base">
                  İlk üretimin başlaması, projenin gelir yaratabilecek operasyonel
                  aşamaya geçtiğini gösteriyor. Ancak projenin net finansal katkısı;
                  üretim miktarı, satış fiyatı, cevher tenörü, geri kazanım oranı,
                  işletme maliyetleri ve yatırım harcamalarıyla birlikte netleşecek.
                </p>

                <div className="mt-4 grid gap-3">
                  {finansalOkuma.map((item) => (
                    <div
                      key={item}
                      className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm font-bold leading-6 text-amber-950"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </Section>

              <Section title="Hisse açısından nasıl okunmalı?">
                <div className="grid gap-4">
                  {hisseOkumasi.map((item) => (
                    <div
                      key={item.baslik}
                      className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
                    >
                      <h3 className="text-base font-bold text-slate-900">
                        {item.baslik}
                      </h3>
                      <p className="mt-2 text-sm leading-7 text-slate-600 md:text-base">
                        {item.aciklama}
                      </p>
                    </div>
                  ))}
                </div>
              </Section>

              <Section title="Takip edilecek başlıklar">
                <div className="grid gap-3">
                  {takipBasliklari.map((item) => (
                    <div
                      key={item}
                      className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm font-semibold leading-6 text-slate-700"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </Section>

              <Section title="TRALT Mollakara Projesi hakkında kısa soru-cevap">
                <div className="space-y-4">
                  {seoSorular.map((item) => (
                    <div
                      key={item.soru}
                      className="rounded-xl border border-slate-200 bg-slate-50 p-4"
                    >
                      <h3 className="text-base font-bold text-slate-900">
                        {item.soru}
                      </h3>
                      <p className="mt-2 text-sm leading-7 text-slate-600 md:text-base">
                        {item.cevap}
                      </p>
                    </div>
                  ))}
                </div>
              </Section>

              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm leading-7 text-slate-600">
                <div className="font-semibold text-slate-800">Kaynak</div>
                <a
                  href="https://www.kap.org.tr/Bildirim/1634256"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="mt-2 inline-block font-medium text-slate-700 underline underline-offset-2"
                >
                  TRALT — Orjinal Kap içeriği
                </a>
              </div>

              <HaberIlgiliBolumler
                slug={slug}
                baslik="TRALT Mollakara Altın Madeninde İlk Altın Dökümünü Gerçekleştirdi"
              />

              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm font-medium leading-7 text-amber-900 md:text-base">
                ⚠️ Bu haber bilgilendirme amacıyla hazırlanmıştır, yatırım
                tavsiyesi değildir. Maden projelerinde üretim miktarı, altın fiyatı,
                maliyetler, rezerv dönüşümü ve operasyonel riskler finansal sonuçları
                doğrudan etkileyebilir.
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