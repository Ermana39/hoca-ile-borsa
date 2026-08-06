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

const slug = "16-temmuz-2026-son-halka-arzlar-gun-sonu-degerlendirmesi";
const haberUrl = `https://www.hocaileborsa.com/haber/${slug}`;
const haberGorsel =
  "https://www.hocaileborsa.com/16-temmuz-2026-son-halka-arzlar-gun-sonu-degerlendirmesi.webp";

export const metadata: Metadata = {
  title:
    "16 Temmuz Son Halka Arzlarda Gün Sonu: GOLDA Tavan, ISVEA ve BETAE Taban",
  description:
    "16 Temmuz gün sonu halka arz kapanışlarında GOLDA 6. tavanını yaptı, ISVEA ve BETAE taban kapattı, SSAAT ilk işlem gününde yüzde 10 geriledi.",
  alternates: {
    canonical: haberUrl,
  },
  openGraph: {
    type: "article",
    title:
      "16 Temmuz Son Halka Arzlarda Gün Sonu: GOLDA Tavan, ISVEA ve BETAE Taban",
    description:
      "GOLDA seriyi 6 tavana çıkarırken, ISVEA 3 günlük tavan serisi sonrası tabana döndü. BETAE de taban kapattı. ORZAX, SOHOE, EKIM ve SSAAT tarafındaki kapanışlar da dikkat çekti.",
    url: haberUrl,
    images: [
      {
        url: haberGorsel,
        width: 1200,
        height: 675,
        alt: "16 Temmuz 2026 son halka arzlar gün sonu kapanış değerlendirmesi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "16 Temmuz Son Halka Arzlarda Gün Sonu: GOLDA Tavan, ISVEA ve BETAE Taban",
    description:
      "Son halka arzlarda gün sonu görünümü: GOLDA tavan, ISVEA ve BETAE taban, SSAAT ilk gününde zayıf.",
    images: [haberGorsel],
  },
};

const ozetKartlari = [
  {
    baslik: "Tavan Serisi",
    deger: "GOLDA: 6 Gün",
    aciklama: "Tavan kapanış serisi devam etti",
  },
  {
    baslik: "Taban Kapanış",
    deger: "BETAE / ISVEA / SSAAT",
    aciklama: "Günün en zayıf kapanışları",
  },
  {
    baslik: "İlk Gün Baskısı",
    deger: "SSAAT -%10,00",
    aciklama: "İlk işlem gününde taban kapanış",
  },
  {
    baslik: "En Güçlü Prim",
    deger: "BETAE +%132,88",
    aciklama: "Arz fiyatına göre toplam getiri",
  },
];

const topluTablo = [
  {
    hisse: "BETAE",
    arzFiyati: "40,00 TL",
    guncelFiyat: "93,15 TL",
    toplamGetiri: "+%132,88",
    gunlukHareket: "Taban kapanış",
    yorum:
      "Uzun süren tavan serisi sona erdi. Günün taban fiyatta kapanması kısa vadede momentum kaybına işaret etti.",
  },
  {
    hisse: "SOHOE",
    arzFiyati: "15,00 TL",
    guncelFiyat: "13,24 TL",
    toplamGetiri: "-%11,73",
    gunlukHareket: "-%0,38",
    yorum:
      "Günlük düşüş sınırlı kaldı ancak hisse hâlâ halka arz fiyatının altında işlem görüyor.",
  },
  {
    hisse: "ORZAX",
    arzFiyati: "69,00 TL",
    guncelFiyat: "102,50 TL",
    toplamGetiri: "+%48,55",
    gunlukHareket: "-%4,92",
    yorum:
      "Bank of America alımlarına rağmen gün ekside tamamlandı. Buna karşın arz fiyatına göre güçlü prim korunuyor.",
  },
  {
    hisse: "EKIM",
    arzFiyati: "30,26 TL",
    guncelFiyat: "24,00 TL",
    toplamGetiri: "-%20,69",
    gunlukHareket: "+%5,26",
    yorum:
      "Günü artıda kapatmasına rağmen halka arz fiyatının belirgin şekilde altında kalmaya devam etti.",
  },
  {
    hisse: "GOLDA",
    arzFiyati: "9,20 TL",
    guncelFiyat: "16,28 TL",
    toplamGetiri: "+%76,96",
    gunlukHareket: "Tavan kapanış",
    yorum:
      "Seans başındaki sert satışlara rağmen tahta tavanda tutundu ve seri 6 güne çıktı.",
  },
  {
    hisse: "ISVEA",
    arzFiyati: "20,90 TL",
    guncelFiyat: "25,02 TL",
    toplamGetiri: "+%19,71",
    gunlukHareket: "Taban kapanış",
    yorum:
      "Üç günlük tavan serisinin ardından gelen satışlarla taban kapattı. Buna rağmen arz fiyatı üzerindeki seyir sürüyor.",
  },
  {
    hisse: "SSAAT",
    arzFiyati: "56,00 TL",
    guncelFiyat: "50,40 TL",
    toplamGetiri: "-%10,00",
    gunlukHareket: "İlk gün taban",
    yorum:
      "İlk işlem gününde taban kapanış yaparak yatırımcısına eksi yazdı.",
  },
];

const detayKartlari = [
  {
    hisse: "BETAE",
    baslik: "Tavan serisi sona erdi",
    aciklama:
      "Betae Enerji günü taban fiyattan kapattı ve uzun süredir devam eden tavan serisine ara verdi. Hisse arz fiyatına göre hâlâ %132,88 primli olsa da gün içindeki sert çözülme, kısa vadeli iştahın zayıfladığını gösterdi.",
    altDetay:
      "Toplam el değiştiren lot oranının %433,13 seviyesine çıkması da güçlü kâr realizasyonunu destekleyen bir veri oldu.",
  },
  {
    hisse: "ORZAX",
    baslik: "Bank of America alımlarına rağmen eksi kapanış",
    aciklama:
      "Orzax İlaç günü %4,92 düşüşle kapattı. Buna rağmen 69,00 TL’lik arz fiyatına göre 102,50 TL seviyesinde kalmaya devam ettiği için toplam prim %48,55 seviyesinde korunuyor.",
    altDetay:
      "Toplam el değiştiren lot oranının %669,10’a ulaşması, hissede yüksek devir ve kısa vadeli işlem yoğunluğunu işaret ediyor.",
  },
  {
    hisse: "SOHOE",
    baslik: "Zayıf görünüm sürüyor",
    aciklama:
      "Soho Giyim günü %0,38 düşüşle tamamladı. 15,00 TL’lik arz fiyatına karşılık 13,24 TL seviyesinde kalan hisse, hâlâ halka arz fiyatının altında.",
    altDetay:
      "Toplam el değiştiren lot oranının %1118,79 gibi çok yüksek bir seviyeye ulaşması, tahtada yoğun el değişiminin sürdüğünü gösteriyor.",
  },
  {
    hisse: "EKIM",
    baslik: "Tepki yükselişi var ama zarar kapanmadı",
    aciklama:
      "Ekim Turizm günü %5,26 yükselişle kapattı. Ancak hisse 24,00 TL seviyesinde kaldığı için halka arz fiyatına göre kayıp hâlâ %20,69 düzeyinde.",
    altDetay:
      "Bu görünüm, tepki alımlarının başladığını fakat arz fiyatı seviyesinin henüz geri alınamadığını ortaya koyuyor.",
  },
  {
    hisse: "GOLDA",
    baslik: "Seri 6 tavana çıktı",
    aciklama:
      "Golda Gıda bir işlem gününü daha tavan fiyatta kapatarak seriyi 6 güne çıkardı. Seans başındaki yoğun satışlara rağmen tahtanın yeniden tavanda tutunması dikkat çekti.",
    altDetay:
      "9,20 TL’lik arz fiyatına göre 16,28 TL kapanış, toplamda %76,96 prim anlamına geliyor.",
  },
  {
    hisse: "ISVEA",
    baslik: "3 günlük tavan serisi tabanla bozuldu",
    aciklama:
      "Seans başındaki satış baskısıyla İsvea Banyo günü taban fiyatta kapattı. Böylece üç gündür devam eden tavan serisi sona ermiş oldu.",
    altDetay:
      "Buna rağmen hisse 20,90 TL arz fiyatına göre 25,02 TL seviyesinde bulunuyor ve toplam prim %19,71 düzeyinde.",
  },
  {
    hisse: "SSAAT",
    baslik: "İlk işlem günü zayıf geçti",
    aciklama:
      "Saat ve Saat halka arzı ilk işlem gününde taban fiyatla kapanış aldı. 56,00 TL arz fiyatına karşılık 50,40 TL kapanış, yatırımcı tarafında ilk günden %10,00 kayba işaret etti.",
    altDetay:
      "İlk gün kapanışının tabanda gerçekleşmesi, kısa vadeli algı açısından zayıf bir başlangıç olarak öne çıktı.",
  },
];

const devirVerileri = [
  "SOHOE toplam el değiştiren lot oranında %1118,79 ile en yüksek devir oranına ulaştı.",
  "ORZAX tarafında %669,10’luk oran, yüksek işlem iştahının sürdüğünü gösterdi.",
  "BETAE’de %433,13’lük devir oranı, tavan serisi sonrası güçlü çözülmeyle birlikte okunmalı.",
  "EKIM’de %358,68’lik oran, tepki hareketine rağmen tahtada sert rotasyon olduğunu gösteriyor.",
  "GOLDA %64,56, ISVEA %19,05 ve SSAAT %107,02 seviyelerinde lot devriyle günü tamamladı.",
];

const nedenOnemli = [
  {
    baslik: "Halka arzlarda ayrışma belirginleşti",
    aciklama:
      "Aynı dönemde işleme başlayan hisseler arasında çok net bir ayrışma var. GOLDA tavan serisini sürdürürken, BETAE ve ISVEA tarafında taban kapanış görülmesi kısa vadeli algının tek yönlü olmadığını gösteriyor.",
  },
  {
    baslik: "İlk işlem günleri ve seri sonları dikkat çekiyor",
    aciklama:
      "SSAAT’in ilk günde taban kapatması, yeni halka arzlarda talebin her hissede aynı güçte oluşmadığını ortaya koydu. BETAE ve ISVEA’da tavan serilerinin bozulması da benzer şekilde dikkat çekici.",
  },
  {
    baslik: "Arz fiyatı üzeri ve altı görünüm birlikte izlenmeli",
    aciklama:
      "Bazı hisseler günlük bazda ekside kapatsa da hâlâ arz fiyatının oldukça üzerinde. ORZAX ve BETAE bunun örnekleri. Buna karşılık SOHOE, EKIM ve SSAAT tarafında yatırımcı hâlâ arz fiyatının altında.",
  },
];

const takipBasliklari = [
  "BETAE’de taban sonrası satış baskısının devam edip etmeyeceği",
  "GOLDA’nın tavan serisini sürdürüp sürdüremeyeceği",
  "ISVEA’da taban sonrası denge arayışı",
  "SSAAT’te ilk gün sonrası ek satış baskısı oluşup oluşmayacağı",
  "ORZAX ve SOHOE tarafında aracı kurum dağılımının yönü",
  "EKIM’in arz fiyatına yaklaşabilecek bir toparlanma üretip üretemeyeceği",
];

const seoSorular = [
  {
    soru: "16 Temmuz’da son halka arzlarda en güçlü kapanış hangisiydi?",
    cevap:
      "16 Temmuz kapanışında en güçlü görünüm GOLDA’da öne çıktı. Hisse günü bir kez daha tavan fiyatta kapatarak seriyi 6 güne çıkardı.",
  },
  {
    soru: "Hangi halka arzlar taban kapattı?",
    cevap:
      "BETAE ve ISVEA günü taban fiyatta kapatırken, SSAAT de ilk işlem gününde taban kapanış yaptı.",
  },
  {
    soru: "ORZAX günü nasıl kapattı?",
    cevap:
      "ORZAX günü %4,92 düşüşle kapattı. Buna rağmen hisse hâlâ halka arz fiyatına göre %48,55 primli durumda.",
  },
  {
    soru: "SOHOE ve EKIM tarafında görünüm nasıl?",
    cevap:
      "SOHOE günü hafif düşüşle kapattı ve hâlâ arz fiyatının altında kaldı. EKIM ise günü artıda kapatsa da halka arz fiyatının %20,69 altında işlem görmeye devam etti.",
  },
  {
    soru: "SSAAT ilk işlem gününde nasıl bir performans gösterdi?",
    cevap:
      "SSAAT ilk işlem gününü taban fiyatla tamamladı. 56,00 TL arz fiyatına karşılık 50,40 TL kapanış yaptığı için yatırımcı ilk günden %10 kayıp yaşadı.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline:
    "16 Temmuz Son Halka Arzlarda Gün Sonu: GOLDA Tavan, ISVEA ve BETAE Taban",
  description:
    "16 Temmuz gün sonu halka arz kapanışlarında GOLDA 6. tavanını yaptı, ISVEA ve BETAE taban kapattı, SSAAT ilk işlem gününde yüzde 10 geriledi.",
  image: haberGorsel,
  datePublished: "2026-07-16T18:45:00+03:00",
  dateModified: "2026-07-16T18:45:00+03:00",
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

export default function SonHalkaArzlarGunSonuDegerlendirmesiPage() {
  return (
    <main className="min-h-screen bg-[#f8fafc] px-4 py-6 md:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="mx-auto max-w-5xl">
        <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_2px_16px_rgba(15,23,42,0.07)]">
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100">
            <Image
              src="/16-temmuz-2026-son-halka-arzlar-gun-sonu-degerlendirmesi.webp"
              alt="16 Temmuz 2026 son halka arzlar gün sonu kapanış değerlendirmesi"
              fill
              unoptimized
              className="object-cover"
              priority
            />
          </div>

          <div className="p-6 md:p-10">
            <h1 className="text-2xl font-bold leading-tight tracking-tight text-slate-900 md:text-3xl lg:text-4xl">
              16 Temmuz Son Halka Arzlarda Gün Sonu: GOLDA Tavan, ISVEA ve BETAE Taban
            </h1>

            <div className="mb-5 mt-3 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center rounded-md bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700 ring-1 ring-inset ring-blue-600/20">
                Halka Arz
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
                16 Temmuz 2026 gün sonu halka arz kapanışlarında en dikkat çeken
                başlıklar, <strong>GOLDA’nın tavan serisini 6 güne çıkarması</strong>,{" "}
                <strong>ISVEA ve BETAE tarafında taban kapanışların görülmesi</strong> ve{" "}
                <strong>SSAAT’in ilk işlem gününde taban kapatması</strong> oldu.
              </p>

              <p>
                Günlük görünümde ORZAX ve SOHOE ekside kapanırken, EKIM günü artıda
                tamamladı ancak hâlâ halka arz fiyatının altında kaldı. Böylece son
                halka arzlarda aynı gün içinde hem tavan serisini koruyan hem de
                taban baskısına giren hisselerin birlikte izlendiği karışık bir tablo
                ortaya çıktı.
              </p>

              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {ozetKartlari.map((item) => (
                  <div
                    key={item.baslik}
                    className="rounded-2xl border border-blue-200 bg-blue-50 p-4"
                  >
                    <div className="text-sm font-semibold text-blue-800">
                      {item.baslik}
                    </div>
                    <div className="mt-1 text-xl font-bold text-blue-950">
                      {item.deger}
                    </div>
                    <div className="mt-1 text-sm text-blue-800">
                      {item.aciklama}
                    </div>
                  </div>
                ))}
              </div>

              <Section title="Ne oldu?">
                <p className="text-sm leading-7 text-slate-600 md:text-base">
                  Son halka arzlarda 16 Temmuz seansı oldukça hareketli geçti.
                  GOLDA bir kez daha tavan fiyatta kapanarak güçlü görüntüsünü
                  korudu. BETAE uzun süren tavan serisinin ardından taban
                  kapanış aldı. ISVEA ise üç günlük tavan serisini kaybedip
                  taban fiyata geriledi.
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">
                  Diğer tarafta ORZAX günü %4,92 düşüşle, SOHOE ise %0,38 düşüşle
                  kapattı. EKIM günü %5,26 yükselişle tamamlarken arz fiyatının
                  altında kalmaya devam etti. SSAAT ise ilk işlem gününü taban
                  fiyatta kapatarak yatırımcısına ilk günden eksi yazdı.
                </p>
              </Section>

              <Section title="Gün sonu kapanış tablosu">
                <div className="overflow-x-auto">
                  <table className="min-w-full overflow-hidden rounded-xl border border-slate-200 text-sm">
                    <thead className="bg-slate-100">
                      <tr>
                        <th className="px-4 py-3 text-left font-bold text-slate-800">
                          Hisse
                        </th>
                        <th className="px-4 py-3 text-left font-bold text-slate-800">
                          Arz Fiyatı
                        </th>
                        <th className="px-4 py-3 text-left font-bold text-slate-800">
                          Güncel Fiyat
                        </th>
                        <th className="px-4 py-3 text-left font-bold text-slate-800">
                          Arz Fiyatına Göre
                        </th>
                        <th className="px-4 py-3 text-left font-bold text-slate-800">
                          Günlük Görünüm
                        </th>
                        <th className="px-4 py-3 text-left font-bold text-slate-800">
                          Kısa Yorum
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {topluTablo.map((item, index) => (
                        <tr
                          key={item.hisse}
                          className={index % 2 === 0 ? "bg-white" : "bg-slate-50"}
                        >
                          <td className="px-4 py-3 font-bold text-slate-900">
                            {item.hisse}
                          </td>
                          <td className="px-4 py-3 text-slate-700">
                            {item.arzFiyati}
                          </td>
                          <td className="px-4 py-3 text-slate-700">
                            {item.guncelFiyat}
                          </td>
                          <td className="px-4 py-3 font-semibold text-slate-800">
                            {item.toplamGetiri}
                          </td>
                          <td className="px-4 py-3 font-semibold text-slate-800">
                            {item.gunlukHareket}
                          </td>
                          <td className="px-4 py-3 text-slate-700">
                            {item.yorum}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Section>

              <Section title="Hisse bazlı değerlendirme">
                <div className="grid gap-4">
                  {detayKartlari.map((item) => (
                    <div
                      key={item.hisse}
                      className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
                    >
                      <div className="text-sm font-bold text-blue-700">
                        {item.hisse}
                      </div>
                      <h3 className="mt-1 text-base font-bold text-slate-900">
                        {item.baslik}
                      </h3>
                      <p className="mt-2 text-sm leading-7 text-slate-600 md:text-base">
                        {item.aciklama}
                      </p>
                      <p className="mt-2 text-sm leading-7 text-slate-600 md:text-base">
                        {item.altDetay}
                      </p>
                    </div>
                  ))}
                </div>
              </Section>

              <Section title="Tablolar ne söylüyor?">
                <p className="text-sm leading-7 text-slate-600 md:text-base">
                  Gün içi el değiştiren lot oranları, son halka arzlarda kısa vadeli
                  işlem yoğunluğunun ne kadar yükseldiğini açık şekilde gösteriyor.
                  Özellikle SOHOE, ORZAX ve BETAE tarafındaki yüksek oranlar, tahtada
                  ciddi rotasyon yaşandığını ortaya koyuyor.
                </p>

                <div className="mt-4 grid gap-3">
                  {devirVerileri.map((item) => (
                    <div
                      key={item}
                      className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm font-semibold leading-6 text-slate-700"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </Section>

              <Section title="Neden önemli?">
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

              <Section title="Sırada ne var?">
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

              <Section title="Son halka arzlar hakkında kısa soru-cevap">
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
                <p className="mt-2">
                  16.07.2026 gün sonu halka arz kapanış tabloları ve fiyat/lot
                  verileri üzerinden hazırlanan değerlendirme.
                </p>
              </div>

              <HaberIlgiliBolumler
                slug={slug}
                baslik="16 Temmuz Son Halka Arzlarda Gün Sonu: GOLDA Tavan, ISVEA ve BETAE Taban"
              />

              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm font-medium leading-7 text-amber-900 md:text-base">
                ⚠️ Bu haber bilgilendirme amacıyla hazırlanmıştır, yatırım
                tavsiyesi değildir. Halka arz hisselerinde yüksek oynaklık
                görülebildiği için gün sonu verileri tek başına yatırım kararı
                için yeterli değildir.
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