import Image from "next/image";
import Link from "@/components/NoPrefetchLink";
import type { Metadata } from "next";
import HaberIlgiliBolumler from "@/components/HaberIlgiliBolumler";
import AuthorBox from "@/components/AuthorBox";
import HaberAltKisim from "@/components/HaberAltKisim";
import { formatHaberTarihi, getHaberDosyaTarihi } from "@/lib/haber-tarih";

const haberSaati = getHaberDosyaTarihi(import.meta.url);
const haberTarihi = formatHaberTarihi(haberSaati);

const slug = "beta-soho-orzax-halka-arz-gun-sonu-kapanis-yorumlari";
const haberUrl = `https://www.hocaileborsa.com/haber/${slug}`;
const haberGorsel =
  "https://www.hocaileborsa.com/beta-soho-orzax-halka-arz-gun-sonu-kapanis-yorumlari.webp";

export const metadata: Metadata = {
  title: "BETA, SOHO ve ORZAX Gün Sonu: İki Tavan, Bir Taban Kapanış",
  description:
    "Beta Enerji, Soho Giyim ve Orzax İlaç halka arzlarında gün sonu kapanış verileri açıklandı. BETA ve ORZAX günü tavan fiyatla kapatırken SOHOE halka arz fiyatının altına indi.",
  alternates: {
    canonical: haberUrl,
  },
  openGraph: {
    type: "article",
    title: "BETA, SOHO ve ORZAX Gün Sonu: İki Tavan, Bir Taban Kapanış",
    description:
      "BETA ve ORZAX günü tavan fiyatla kapattı. SOHOE ise 2. işlem gününde halka arz fiyatının altında kaldı.",
    url: haberUrl,
    images: [
      {
        url: haberGorsel,
        width: 1200,
        height: 675,
        alt: "Beta Soho Orzax halka arz gün sonu kapanış yorumları",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BETA, SOHO ve ORZAX Gün Sonu: İki Tavan, Bir Taban Kapanış",
    description:
      "BETA ve ORZAX tavan kapanış yaparken SOHOE halka arz fiyatının altına indi.",
    images: [haberGorsel],
  },
};

const kapanisVerileri = [
  {
    hisse: "BETAE",
    sirket: "Beta Enerji",
    arzFiyati: "40,00 TL",
    guncelFiyat: "64,35 TL",
    kazancTl: "681,80 TL",
    kazancYuzde: "%60,88",
    gunIciLot: "4.025.141",
    elDegistirenOran: "%11,97",
    tavanTabanLot: "46.289.700",
    tavanTabanOran: "%76,20",
    piyasaDegeri: "3.909.262.500 TL",
    yorum:
      "Tavan serisini koruyan tarafta yer aldı. Gün içi el değiştiren lot oranı sınırlı kalırken tavandaki lot büyüklüğü güçlü görüntüyü destekledi.",
    renk: "emerald",
  },
  {
    hisse: "SOHOE",
    sirket: "Soho Giyim",
    arzFiyati: "15,00 TL",
    guncelFiyat: "14,85 TL",
    kazancTl: "-15,00 TL",
    kazancYuzde: "-%1,00",
    gunIciLot: "252.344.244",
    elDegistirenOran: "%448,71",
    tavanTabanLot: "0",
    tavanTabanOran: "%0,00",
    piyasaDegeri: "1.485.000.000 TL",
    yorum:
      "2. işlem gününde zayıf kalan halka arz oldu. Fiyat halka arz seviyesinin altına inerken gün içi el değiştiren lot oranının çok yüksek olması satış baskısının büyüklüğünü gösterdi.",
    renk: "red",
  },
  {
    hisse: "ORZAX",
    sirket: "Orzax İlaç",
    arzFiyati: "69,00 TL",
    guncelFiyat: "75,90 TL",
    kazancTl: "255,30 TL",
    kazancYuzde: "%10,00",
    gunIciLot: "27.879.957",
    elDegistirenOran: "%53,10",
    tavanTabanLot: "3.840.318",
    tavanTabanOran: "%7,31",
    piyasaDegeri: "3.984.750.000 TL",
    yorum:
      "İlk işlem gününü tavan fiyatla kapattı. Ancak gün içi el değiştiren lot oranı yüksek olduğu için tavan tarafındaki güç BETA kadar rahat görünmedi.",
    renk: "emerald",
  },
];

const ozetKutular = [
  {
    baslik: "Tavan Kapanış",
    deger: "BETAE ve ORZAX",
    aciklama: "İki halka arz günü tavan fiyatla tamamladı.",
  },
  {
    baslik: "Zayıf Kapanış",
    deger: "SOHOE",
    aciklama: "Halka arz fiyatının altında gün sonu kapanışı geldi.",
  },
  {
    baslik: "En Güçlü Tavan Lotu",
    deger: "BETAE",
    aciklama: "46,29 milyon lot ile tavan tarafı öne çıktı.",
  },
  {
    baslik: "En Yüksek El Değişimi",
    deger: "SOHOE",
    aciklama: "Toplam el değiştiren lot oranı %448,71 seviyesine çıktı.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "BETA, SOHO ve ORZAX Gün Sonu: İki Tavan, Bir Taban Kapanış",
  description:
    "Beta Enerji, Soho Giyim ve Orzax İlaç halka arzlarında gün sonu kapanış verileri açıklandı. BETA ve ORZAX günü tavan fiyatla kapatırken SOHOE halka arz fiyatının altına indi.",
  image: haberGorsel,
  datePublished: "2026-07-07T18:30:00+03:00",
  dateModified: "2026-07-07T18:30:00+03:00",
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

export default function HalkaArzGunSonuKapanisPage() {
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
              src="/beta-soho-orzax-halka-arz-gun-sonu-kapanis-yorumlari.webp"
              alt="Beta Soho Orzax halka arz gün sonu kapanış yorumları"
              fill

              sizes="(min-width: 1024px) 896px, 100vw"
className="object-cover"
              priority
            />
          </div>

          <div className="p-6 md:p-10">
            <h1 className="text-2xl font-bold leading-tight tracking-tight text-slate-900 md:text-3xl lg:text-4xl">
              BETA, SOHO ve ORZAX Gün Sonu: İki Tavan, Bir Taban Kapanış
            </h1>

            <div className="mb-5 mt-3 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center rounded-md bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700 ring-1 ring-inset ring-blue-600/20">
                Halka Arz Gün Sonu
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
                Son halka arzlarda gün sonu kapanışları ayrıştı.{" "}
                <strong>Beta Enerji</strong> ve <strong>Orzax İlaç</strong>{" "}
                günü tavan fiyatla tamamlarken, <strong>Soho Giyim</strong>{" "}
                tarafında zayıf kapanış geldi. SOHOE, ilk işlem gününde halka
                arz fiyatının altına indi.
              </p>

              <p>
                Tabloda en güçlü görüntü <strong>BETAE</strong> tarafında
                kalırken, <strong>ORZAX</strong> tavan kapanış yapmasına rağmen
                gün içi el değiştiren lot oranının yüksekliğiyle daha dikkatli
                takip edilmesi gereken tarafta yer aldı. <strong>SOHOE</strong>{" "}
                ise günün negatif ayrışan halka arzı oldu.
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                {ozetKutular.map((item) => (
                  <div
                    key={item.baslik}
                    className="rounded-2xl border border-blue-200 bg-blue-50 p-4"
                  >
                    <div className="text-sm font-semibold text-blue-800">
                      {item.baslik}
                    </div>
                    <div className="mt-1 text-2xl font-bold text-blue-950">
                      {item.deger}
                    </div>
                    <div className="mt-1 text-sm text-blue-800">
                      {item.aciklama}
                    </div>
                  </div>
                ))}
              </div>

              <Section title="Gün sonu kapanış tablosu">
                <div className="overflow-x-auto">
                  <table className="min-w-full overflow-hidden rounded-xl border border-slate-200 text-sm">
                    <thead>
                      <tr className="bg-slate-900 text-white">
                        <th className="px-4 py-3 text-left font-semibold">
                          Hisse
                        </th>
                        <th className="px-4 py-3 text-right font-semibold">
                          Arz Fiyatı
                        </th>
                        <th className="px-4 py-3 text-right font-semibold">
                          Güncel Fiyat
                        </th>
                        <th className="px-4 py-3 text-right font-semibold">
                          Kazanç %
                        </th>
                        <th className="px-4 py-3 text-right font-semibold">
                          El Değiştiren Lot Oranı
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {kapanisVerileri.map((item, index) => (
                        <tr
                          key={item.hisse}
                          className={index % 2 === 0 ? "bg-white" : "bg-slate-50"}
                        >
                          <td className="px-4 py-3 font-bold text-slate-900">
                            {item.hisse}
                            <div className="text-xs font-medium text-slate-500">
                              {item.sirket}
                            </div>
                          </td>
                          <td className="px-4 py-3 text-right font-semibold text-slate-700">
                            {item.arzFiyati}
                          </td>
                          <td className="px-4 py-3 text-right font-semibold text-slate-700">
                            {item.guncelFiyat}
                          </td>
                          <td
                            className={`px-4 py-3 text-right font-bold ${
                              item.kazancYuzde.startsWith("-")
                                ? "text-red-600"
                                : "text-emerald-600"
                            }`}
                          >
                            {item.kazancYuzde}
                          </td>
                          <td className="px-4 py-3 text-right font-semibold text-slate-700">
                            {item.elDegistirenOran}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Section>

              <Section title="BETAE kapanış yorumu">
                <p className="text-sm leading-7 text-slate-600 md:text-base">
                  BETAE, 40,00 TL halka arz fiyatından 64,35 TL seviyesine
                  çıkarak günü tavan fiyatla kapattı. Tablodaki veriye göre
                  yatırımcı tarafında kazanç oranı <strong>%60,88</strong>{" "}
                  seviyesine ulaştı.
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">
                  Gün içinde <strong>4.025.141 lot</strong> el değiştirirken
                  toplam el değiştiren lot oranı <strong>%11,97</strong>{" "}
                  seviyesinde kaldı. Buna karşılık tavanda bekleyen lot
                  <strong> 46.289.700</strong> oldu. Bu veri, BETA tarafında
                  tavan serisinin hâlâ güçlü bir zeminde devam ettiğini
                  gösteriyor.
                </p>
              </Section>

              <Section title="SOHOE kapanış yorumu">
                <p className="text-sm leading-7 text-slate-600 md:text-base">
                  SOHOE tarafında tablo net şekilde zayıf. Hisse 15,00 TL halka
                  arz fiyatına karşılık günü <strong>14,85 TL</strong>{" "}
                  seviyesinde kapattı ve 2. işlem gününde halka arz fiyatının
                  altına indi.
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">
                  Gün içi el değiştiren lot sayısı <strong>252.344.244</strong>{" "}
                  olurken toplam el değiştiren lot oranı <strong>%448,71</strong>{" "}
                  seviyesine çıktı. Bu kadar yüksek dönüş, 2. işlem gününde satış
                  baskısının belirgin olduğunu gösteriyor. Hisse taban fiyatla
                  kapanmasına rağmen satış kademesinde ekstra taban lotu
                  birikmemesi, gün sonu tarafında baskının emir defterinde
                  taşınmadığını gösteren önemli detaylardan biri.
                </p>
              </Section>

              <Section title="ORZAX kapanış yorumu">
                <p className="text-sm leading-7 text-slate-600 md:text-base">
                  ORZAX, 69,00 TL halka arz fiyatından 75,90 TL seviyesine
                  çıkarak ilk işlem gününü tavan fiyatla tamamladı. Gün sonu
                  kazanç oranı <strong>%10,00</strong> oldu.
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">
                  ORZAX tarafında gün içinde <strong>27.879.957 lot</strong> el
                  değiştirdi. Toplam el değiştiren lot oranı <strong>%53,10</strong>{" "}
                  seviyesinde gerçekleşti. Tavan lotu <strong>3.840.318</strong>{" "}
                  olurken bunun toplama oranı <strong>%7,31</strong> seviyesinde
                  kaldı. Yani kapanış tavan olsa da içerideki lot değişimi
                  yüksek olduğu için sonraki gün emir dengesi önemli hale geldi.
                </p>
              </Section>

              <Section title="Üç halka arzda ayrışan tablo">
                <div className="space-y-3 text-sm leading-7 text-slate-600 md:text-base">
                  <p>
                    <strong>En güçlü görünüm:</strong> BETAE tarafında. Hem kazanç
                    oranı yüksek hem de tavan lotu güçlü.
                  </p>
                  <p>
                    <strong>En zayıf görünüm:</strong> SOHOE tarafında. 2. işlem gününde
                    halka arz fiyatının altına inmesi negatif ayrışmayı netleştirdi.
                  </p>
                  <p>
                    <strong>Takip edilmesi gereken taraf:</strong> ORZAX. Tavan
                    kapanış pozitif ancak gün içi el değiştiren lot oranı yüksek
                    olduğu için ikinci gün görüntüsü daha belirleyici olacak.
                  </p>
                </div>
              </Section>

              <Section title="Gün sonu öne çıkan veriler">
                <div className="grid gap-3 md:grid-cols-3">
                  {kapanisVerileri.map((item) => (
                    <div
                      key={item.hisse}
                      className="rounded-xl border border-slate-200 bg-slate-50 p-4"
                    >
                      <div className="text-lg font-bold text-slate-900">
                        {item.hisse}
                      </div>
                      <div className="mt-3 space-y-2 text-sm text-slate-600">
                        <div className="flex justify-between gap-3">
                          <span>Kazanç TL</span>
                          <strong
                            className={
                              item.kazancTl.startsWith("-")
                                ? "text-red-600"
                                : "text-emerald-600"
                            }
                          >
                            {item.kazancTl}
                          </strong>
                        </div>
                        <div className="flex justify-between gap-3">
                          <span>Tavan/Taban Lot</span>
                          <strong>{item.tavanTabanLot}</strong>
                        </div>
                        <div className="flex justify-between gap-3">
                          <span>Tavan/Taban Oranı</span>
                          <strong>{item.tavanTabanOran}</strong>
                        </div>
                        <div className="flex justify-between gap-3">
                          <span>Halka Açık Değer</span>
                          <strong>{item.piyasaDegeri}</strong>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Section>

              <Section title="Genel değerlendirme">
                <p className="text-sm leading-7 text-slate-600 md:text-base">
                  Gün sonunda halka arzlar arasında net bir ayrışma oluştu.
                  BETAE tavan serisini güçlü verilerle sürdürürken ORZAX ilk
                  gününü tavanla tamamladı. SOHOE ise aynı tabloda en zayıf kalan
                  hisse oldu.
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">
                  Bundan sonraki seansta BETA için tavandaki lot büyüklüğü,
                  ORZAX için gün içi el değiştiren lotların ardından yeni emir
                  dengesi, SOHOE için ise halka arz fiyatının yeniden üzerine
                  çıkıp çıkamayacağı ana takip başlıkları olacak.
                </p>
              </Section>

              <HaberIlgiliBolumler
                slug={slug}
                baslik="BETA, SOHO ve ORZAX Gün Sonu: İki Tavan, Bir Taban Kapanış"
              />

              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm font-medium leading-7 text-amber-900 md:text-base">
                ⚠️ Bu haber bilgilendirme amacıyla hazırlanmıştır, yatırım
                tavsiyesi değildir. Halka arz sonrası ilk günlerde fiyat ve emir
                dengesi hızlı değişebilir.
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
