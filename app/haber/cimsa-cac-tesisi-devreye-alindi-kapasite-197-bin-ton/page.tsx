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

const slug = "cimsa-cac-tesisi-devreye-alindi-kapasite-197-bin-ton";
const haberUrl = `https://www.hocaileborsa.com/haber/${slug}`;
const haberGorsel =
  "https://www.hocaileborsa.com/cimsa-cac-tesisi-devreye-alindi-kapasite-197-bin-ton.webp";

export const metadata: Metadata = {
  title: "CIMSA CAC Tesisi Devreye Alındı: Kapasite 197 Bin Tona Çıktı",
  description:
    seoAciklamasi("Çimsa, Mersin Fabrikası'ndaki CAC kapasite artırımı yatırımını devreye aldı. Yıllık CAC klinkeri üretim kapasitesi 131 bin tondan 197 bin tona yükseldi.", "Haberde gelişmenin ayrıntıları, açıklanan veriler ve yatırımcıların izleyebileceği temel noktalar yer alıyor."),
  alternates: {
    canonical: haberUrl,
  },
  openGraph: {
    type: "article",
    title: "CIMSA CAC Tesisi Devreye Alındı: Kapasite 197 Bin Tona Çıktı",
    description:
      "Çimsa, Mersin Fabrikası'ndaki yeni CAC üretim tesisinde deneme üretimi ve test süreçlerini tamamladı. Kapasite 197 bin tona yükseldi.",
    url: haberUrl,
    images: [
      {
        url: haberGorsel,
        width: 1200,
        height: 675,
        alt: "CIMSA CAC tesisi kapasite artırımı",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CIMSA CAC Tesisi Devreye Alındı",
    description:
      "Çimsa'nın yıllık CAC klinkeri üretim kapasitesi 131 bin tondan 197 bin tona çıktı.",
    images: [haberGorsel],
  },
};

const ozetKartlari = [
  {
    baslik: "Yeni Kapasite",
    deger: "197 Bin Ton",
    aciklama: "Yıllık CAC klinkeri üretim kapasitesi",
  },
  {
    baslik: "Önceki Kapasite",
    deger: "131 Bin Ton",
    aciklama: "Mevcut CAC klinkeri kapasitesi",
  },
  {
    baslik: "Kapasite Artışı",
    deger: "66 Bin Ton",
    aciklama: "Yeni tesisle eklenen kapasite",
  },
  {
    baslik: "Pazar Konumu",
    deger: "İlk 3",
    aciklama: "Global CAC pazarındaki üretici konumu",
  },
];

const genelDetaylar = [
  { etiket: "Şirket", deger: "Çimsa Çimento Sanayi ve Ticaret A.Ş." },
  { etiket: "Hisse Kodu", deger: "CIMSA" },
  { etiket: "Bildirim Tarihi", deger: "14.07.2026" },
  { etiket: "Bildirim Saati", deger: "18:37:03" },
  { etiket: "Açıklama Türü", deger: "Özel Durum Açıklaması (Genel)" },
  {
    etiket: "Özet Bilgi",
    deger:
      "Mersin Fabrikası'nda CAC tesisi kapasite artırımı yatırımının devreye alınması",
  },
  { etiket: "Önceki Açıklama Tarihleri", deger: "12.11.2024 - 28.04.2025" },
  { etiket: "Tesis", deger: "Mersin Fabrikası CAC Üretim Tesisi" },
  { etiket: "Ürün", deger: "CAC / Kalsiyum Alüminat Çimento" },
  { etiket: "Önceki Yıllık Kapasite", deger: "131 bin ton" },
  { etiket: "Yeni Yıllık Kapasite", deger: "197 bin ton" },
  { etiket: "Artış", deger: "66 bin ton" },
  { etiket: "Süreç", deger: "Deneme üretimi ve test süreçleri tamamlandı" },
  { etiket: "Durum", deger: "Yeni üretim tesisi devreye alındı" },
];

const kapasiteMaddeleri = [
  {
    baslik: "Kapasite 197 bin tona çıktı",
    aciklama:
      "Çimsa'nın yıllık CAC klinkeri üretim kapasitesi 131 bin tondan 197 bin tona yükseldi. Bu artış, şirketin katma değerli ürün kapasitesini büyütmesi açısından net bir operasyonel gelişme niteliği taşıyor.",
  },
  {
    baslik: "Deneme üretimi tamamlandı",
    aciklama:
      "KAP açıklamasında yatırımın yalnızca planlama aşamasında kalmadığı, deneme üretimi ve test süreçlerinin tamamlanarak tesisin devreye alındığı belirtildi.",
  },
  {
    baslik: "Global CAC pazarında konum güçlendi",
    aciklama:
      "Şirket, yeni kapasiteyle birlikte global CAC pazarındaki en büyük üçüncü üretici konumunun güçlendiğini açıkladı. Bu vurgu, yatırımın sadece iç pazar değil ihracat ve özel ürün stratejisi açısından da okunduğunu gösteriyor.",
  },
];

const nedenOnemli = [
  {
    baslik: "Katma değerli ürün tarafında büyüme",
    aciklama:
      "CAC, standart çimento ürünlerinden farklı olarak özel kullanım alanlarına sahip daha niş ve katma değerli bir ürün grubu. Bu nedenle kapasite artışı, sadece üretim hacmi değil ürün karması açısından da önemli.",
  },
  {
    baslik: "Yatırım artık devreye alma aşamasında",
    aciklama:
      "Kapasite artırım yatırımlarında piyasa açısından en kritik eşiklerden biri, projenin test ve deneme üretiminden çıkarak devreye alınmasıdır. Bu açıklama, yatırımın somut üretim kapasitesine dönüştüğünü gösteriyor.",
  },
  {
    baslik: "İhracat ve global pazar okuması güçleniyor",
    aciklama:
      "Çimsa'nın CAC tarafındaki global üretici konumuna yaptığı vurgu, bu yatırımın şirketin uluslararası pazarlardaki özel ürün stratejisiyle bağlantılı olduğunu gösteriyor.",
  },
];

const sirketHakkinda = [
  "Çimsa Çimento, gri çimento, beyaz çimento ve özel çimento ürünleri tarafında faaliyet gösteren Türkiye'nin önemli sanayi şirketlerinden biri.",
  "Şirketin Mersin Fabrikası, farklı ürün gruplarındaki üretim kabiliyetiyle Çimsa'nın hem iç pazar hem de ihracat tarafındaki stratejik üretim merkezlerinden biri olarak öne çıkıyor.",
  "Son açıklama, şirketin standart hacim büyümesinden çok katma değerli ürün kapasitesini artırma hedefiyle bağlantılı olduğu için CIMSA hissesi açısından operasyonel kalite ve marj kompozisyonu üzerinden izlenecek bir gelişme niteliği taşıyor.",
];

const degerlendirmeMaddeleri = [
  "Bu haber doğrudan yeni bir sözleşme açıklaması değil; tamamlanan kapasite artırım yatırımının devreye alınmasına ilişkin operasyonel bir gelişme.",
  "Kapasitenin 131 bin tondan 197 bin tona çıkması, CAC tarafında 66 bin tonluk ek üretim alanı yaratıyor.",
  "Kısa vadede hisse tepkisi, piyasanın bu kapasite artışını ne kadar fiyatladığına bağlı olacaktır.",
  "Orta vadede asıl etki, yeni kapasitenin satış hacmine, ihracat tarafına ve kârlılık kompozisyonuna nasıl yansıdığıyla görülecek.",
  "CIMSA için bu açıklama, şirketin katma değerli ürün stratejisini destekleyen pozitif bir operasyonel güncelleme olarak okunabilir.",
];

const takipBasliklari = [
  "Yeni CAC kapasitesinin satış hacmine ne hızla yansıyacağı",
  "İhracat gelirlerinde CAC ürün grubunun payı",
  "Kapasite artışının brüt kâr marjına etkisi",
  "Mersin Fabrikası'ndaki yeni tesisin tam kapasiteye geçiş süreci",
  "Katma değerli ürünlerin toplam ciro içindeki ağırlığı",
  "2026 ve 2027 finansallarında yeni kapasitenin katkısı",
  "Global CAC pazarındaki rekabet ve fiyatlama koşulları",
];

const seoSorular = [
  {
    soru: "CIMSA ne açıkladı?",
    cevap:
      "CIMSA, Mersin Fabrikası'ndaki CAC kapasite artırımı yatırımında deneme üretimi ve test süreçlerinin tamamlandığını, yeni üretim tesisinin devreye alındığını açıkladı.",
  },
  {
    soru: "CIMSA CAC kapasitesi kaç tona çıktı?",
    cevap:
      "Çimsa'nın yıllık CAC klinkeri üretim kapasitesi 131 bin tondan 197 bin tona yükseldi.",
  },
  {
    soru: "CIMSA kapasite artışı kaç ton oldu?",
    cevap:
      "Yeni tesisle birlikte yıllık CAC klinkeri üretim kapasitesinde 66 bin tonluk artış oluştu.",
  },
  {
    soru: "CAC ne demek?",
    cevap:
      "CAC, kalsiyum alüminat çimento anlamına gelir. Çimsa'nın açıklamasında bu ürün grubu, şirketin katma değerli ürün kapasitesini büyütme stratejisiyle birlikte öne çıkarıldı.",
  },
  {
    soru: "CIMSA haberi hisse için neden önemli?",
    cevap:
      "Haber, şirketin özel ürün kapasitesini büyütmesi ve global CAC pazarındaki konumunu güçlendirmesi açısından önemli. Finansal etki ise yeni kapasitenin satış ve kârlılık tarafına yansımasıyla daha net izlenecek.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "CIMSA CAC Tesisi Devreye Alındı: Kapasite 197 Bin Tona Çıktı",
  description:
    "Çimsa, Mersin Fabrikası'ndaki CAC kapasite artırımı yatırımını devreye aldı. Yıllık CAC klinkeri üretim kapasitesi 131 bin tondan 197 bin tona yükseldi.",
  image: haberGorsel,
  datePublished: "2026-07-14T18:37:03+03:00",
  dateModified: "2026-07-14T18:37:03+03:00",
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

export default function CimsaCacTesisiHaberiPage() {
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
              src="/cimsa-cac-tesisi-devreye-alindi-kapasite-197-bin-ton.webp"
              alt="CIMSA CAC tesisi kapasite artırımı"
              fill
              sizes="(min-width: 1024px) 896px, 100vw"
              className="object-cover"
              priority
            />
          </div>

          <div className="p-6 md:p-10">
            <h1 className="text-2xl font-bold leading-tight tracking-tight text-slate-900 md:text-3xl lg:text-4xl">
              CIMSA CAC Tesisi Devreye Alındı: Kapasite 197 Bin Tona Çıktı
            </h1>

            <div className="mb-5 mt-3 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center rounded-md bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700 ring-1 ring-inset ring-blue-600/20">
                Kapasite Artırımı
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
                Çimsa Çimento Sanayi ve Ticaret A.Ş. (<strong>CIMSA</strong>),
                Mersin Fabrikası'nda yürütülen <strong>CAC</strong> yani
                kalsiyum alüminat çimento tesisi kapasite artırımı yatırımının
                devreye alındığını açıkladı.
              </p>

              <p>
                KAP açıklamasına göre yeni üretim tesisinde deneme üretimi ve
                test süreçleri tamamlandı. Tesisin devreye alınmasıyla birlikte
                şirketin yıllık CAC klinkeri üretim kapasitesi <strong>131 bin
                tondan 197 bin tona</strong> yükseldi. Böylece CIMSA'nın global
                CAC pazarındaki en büyük üçüncü üretici konumu güçlendi.
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                {ozetKartlari.map((item) => (
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

              <Section title="Ne oldu?">
                <p className="text-sm leading-7 text-slate-600 md:text-base">
                  Çimsa, daha önce 12 Kasım 2024 ve 28 Nisan 2025 tarihlerinde
                  duyurduğu Mersin Fabrikası CAC kapasite artırımı yatırımında
                  yeni aşamaya geçti. Şirket, yeni üretim tesisinde deneme
                  üretimi ve test süreçlerinin tamamlandığını açıkladı.
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">
                  Açıklamanın ana noktası, yatırımın artık planlama ya da inşaat
                  aşamasında değil, devreye alınmış üretim tesisi aşamasında
                  olması. Bu nedenle haber, CIMSA açısından doğrudan operasyonel
                  kapasite güncellemesi olarak öne çıkıyor.
                </p>
              </Section>

              <Section title="KAP açıklamasının detayları">
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

              <Section title="Kapasite artışında öne çıkanlar">
                <div className="grid gap-4">
                  {kapasiteMaddeleri.map((item) => (
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

              <Section title="Şirket ve proje arka planı">
                <div className="space-y-3 text-sm leading-7 text-slate-600 md:text-base">
                  {sirketHakkinda.map((item) => (
                    <p key={item}>{item}</p>
                  ))}
                </div>
              </Section>

              <Section title="Finansal etki nasıl okunmalı?">
                <p className="text-sm leading-7 text-slate-600 md:text-base">
                  Bu açıklamada doğrudan bir satış tutarı, sözleşme bedeli veya
                  beklenen ciro katkısı paylaşılmadı. Bu nedenle finansal etkiyi
                  tek bir rakam üzerinden okumak doğru olmaz. Ancak 66 bin tonluk
                  ek CAC klinkeri kapasitesi, üretim hacmi ve ürün karması
                  açısından CIMSA'nın gelecek dönem finansallarında izlenecek
                  başlıklardan biri haline geldi.
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">
                  Özellikle CAC tarafında kapasitenin ne kadar hızlı dolacağı,
                  satışların hangi pazarlara yönleneceği ve katma değerli ürün
                  payının marjlara nasıl yansıyacağı hisse açısından belirleyici
                  olacaktır.
                </p>
              </Section>

              <Section title="Hisse açısından değerlendirme">
                <p className="text-sm leading-7 text-slate-600 md:text-base">
                  CIMSA tarafında bu KAP açıklaması, kısa vadeli haber akışından
                  çok şirketin üretim gücü ve özel ürün stratejisi açısından
                  pozitif bir operasyonel gelişme olarak okunabilir. Tesisin
                  devreye alınması, daha önce duyurulan yatırımın somut kapasiteye
                  dönüştüğünü gösteriyor.
                </p>

                <div className="mt-4 grid gap-3">
                  {degerlendirmeMaddeleri.map((item) => (
                    <div
                      key={item}
                      className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm font-bold leading-6 text-emerald-900"
                    >
                      {item}
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

              <Section title="CIMSA CAC kapasite artırımı hakkında kısa soru-cevap">
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
                  href="https://www.kap.org.tr/Bildirim/1633770"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="mt-2 inline-block font-medium text-slate-700 underline underline-offset-2"
                >
                  CIMSA — Orjinal Kap içeriği
                </a>
              </div>

              <HaberIlgiliBolumler
                slug={slug}
                baslik="CIMSA CAC Tesisi Devreye Alındı: Kapasite 197 Bin Tona Çıktı"
              />

              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm font-medium leading-7 text-amber-900 md:text-base">
                ⚠️ Bu haber bilgilendirme amacıyla hazırlanmıştır, yatırım
                tavsiyesi değildir. Kapasite artışı ve yatırım haberleri şirket
                görünümü açısından önemli olsa da tek başına yatırım kararı için
                yeterli değildir.
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