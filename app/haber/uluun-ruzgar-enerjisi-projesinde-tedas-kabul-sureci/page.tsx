import { serializeJsonLd } from "@/lib/json-ld";
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

const slug = "uluun-ruzgar-enerjisi-projesinde-tedas-kabul-sureci";
const haberUrl = `https://www.hocaileborsa.com/haber/${slug}`;
const haberGorsel =
  "https://www.hocaileborsa.com/uluun-ruzgar-enerjisi-projesinde-tedas-kabul-sureci.webp";

export const metadata: Metadata = {
  title: "ULUUN Rüzgar Enerjisi Projesinde TEDAŞ Kabul Süreci Başladı",
  description:
    seoAciklamasi("ULUUN, 13,96 MWm gücündeki lisanssız rüzgar enerjisi santrali projesinde iki türbinin mekanik montajının tamamlandığını ve TEDAŞ kabul süreçlerinin başlatıldığını açıkladı.", "Haberde gelişmenin ayrıntıları, açıklanan veriler ve yatırımcıların izleyebileceği temel noktalar yer alıyor."),
  alternates: {
    canonical: haberUrl,
  },
  openGraph: {
    type: "article",
    title: "ULUUN Rüzgar Enerjisi Projesinde TEDAŞ Kabul Süreci Başladı",
    description:
      "ULUUN, Manisa ve İzmir'deki rüzgar enerjisi santrali projesinde iki türbin için TEDAŞ kabul sürecini başlattı. Bergama türbini için ÇED olumlu kararı alındı.",
    url: haberUrl,
    images: [
      {
        url: haberGorsel,
        width: 1200,
        height: 675,
        alt: "ULUUN rüzgar enerjisi santrali TEDAŞ kabul süreci",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ULUUN Rüzgar Enerjisi Projesinde TEDAŞ Kabul Süreci Başladı",
    description:
      "ULUUN, 13,96 MWm gücündeki RES projesinde iki türbinin montajını tamamladı. Bergama türbini için ÇED olumlu kararı alındı.",
    images: [haberGorsel],
  },
};

const ozetKartlari = [
  {
    baslik: "Toplam Planlanan Güç",
    deger: "13,96 MWm",
    aciklama: "3 türbin için toplam kurulu güç",
  },
  {
    baslik: "TEDAŞ Kabul Süreci",
    deger: "2 Türbin",
    aciklama: "Manisa ve İzmir Kınık sahaları",
  },
  {
    baslik: "ÇED Kararı",
    deger: "Olumlu",
    aciklama: "İzmir Bergama Rahmanlar türbini",
  },
  {
    baslik: "Planlanan Devreye Alma",
    deger: "2027/4Ç",
    aciklama: "Bergama türbini için hedef takvim",
  },
];

const genelDetaylar = [
  { etiket: "Şirket", deger: "Ulusoy Un Sanayi ve Ticaret A.Ş." },
  { etiket: "Hisse Kodu", deger: "ULUUN" },
  { etiket: "Bildirim Tarihi", deger: "14.07.2026" },
  { etiket: "Bildirim Saati", deger: "13:45:10" },
  { etiket: "Açıklama Türü", deger: "Özel Durum Açıklaması (Genel)" },
  { etiket: "Özet Bilgi", deger: "Şirketin rüzgar enerji santrali projesi" },
  { etiket: "Güncelleme Bildirimi", deger: "Evet" },
  { etiket: "Düzeltme Bildirimi", deger: "Hayır" },
  { etiket: "Ertelenmiş Açıklama", deger: "Hayır" },
  {
    etiket: "Önceki Açıklama Tarihleri",
    deger:
      "31.01.2023, 19.07.2023, 31.10.2023, 20.08.2024, 17.09.2024, 04.11.2024, 01.01.2025",
  },
  { etiket: "Proje Amacı", deger: "Üretim tesislerinin elektrik tüketimini yenilenebilir kaynaklardan sağlamak" },
  { etiket: "Planlanan Türbinler", deger: "2 adet 4.200 kWm + 1 adet 5.560 kWm" },
  { etiket: "Toplam Güç", deger: "13.960 kWm / 13,96 MWm" },
];

const projeDetaylari = [
  {
    baslik: "Manisa Yunusemre / Recepli Köyü",
    guc: "4.200 kWm",
    durum: "Mekanik montaj tamamlandı",
    yorum:
      "Bu türbin için TEDAŞ kabul süreci başlatıldı. Kabul sürecinin tamamlanması, projenin fiili devreye alma aşamasına yaklaşması açısından önemli.",
  },
  {
    baslik: "İzmir Kınık / Örtülü Köyü",
    guc: "5.560 kWm",
    durum: "Mekanik montaj tamamlandı",
    yorum:
      "Projede en yüksek güce sahip türbin bu sahada yer alıyor. Mekanik montajın bitmesiyle birlikte bu türbin de TEDAŞ kabul aşamasına geçti.",
  },
  {
    baslik: "İzmir Bergama / Rahmanlar Köyü",
    guc: "4.200 kWm",
    durum: "ÇED olumlu kararı alındı",
    yorum:
      "Bakanlık tarafından 09.07.2026 tarihinde ÇED olumlu kararı verildi. Şirket, bu türbin için yasal süreçlerin devam ettiğini ve 2027 yılının 4. çeyreğinde devreye alma planlandığını açıkladı.",
  },
];

const nedenOnemli = [
  {
    baslik: "Proje kabul aşamasına yaklaştı",
    aciklama:
      "İki türbinde mekanik montajın tamamlanması ve TEDAŞ kabul süreçlerinin başlatılması, projenin kağıt üzerindeki yatırım planından uygulama aşamasına geçtiğini gösteriyor.",
  },
  {
    baslik: "Enerji maliyeti tarafında stratejik adım",
    aciklama:
      "ULUUN, bu yatırımı üretim tesislerinin elektrik tüketimini yenilenebilir kaynaklardan karşılamak amacıyla yürütüyor. Devreye alma sonrası ana beklenti, satış geliri yaratmaktan çok enerji giderleri üzerinde destekleyici etki oluşması.",
  },
  {
    baslik: "Üçüncü türbin için süreç devam ediyor",
    aciklama:
      "Bergama Rahmanlar sahasındaki 4.200 kWm türbin için ÇED olumlu kararı alınmış olsa da yasal süreçler henüz tamamlanmış değil. Şirket bu türbin için 2027 yılının son çeyreğini işaret etti.",
  },
];

const sirketHakkinda = [
  "Ulusoy Un, un ve gıda hammaddeleri tarafında faaliyet gösteren, üretim kapasitesi ve dış pazar bağlantılarıyla gıda sanayi içinde öne çıkan şirketlerden biri.",
  "Un üretimi gibi enerji tüketiminin önemli olduğu sanayi kollarında elektrik maliyeti, dönemsel kârlılık üzerinde doğrudan izlenmesi gereken kalemlerden biri olarak öne çıkıyor.",
  "Bu nedenle ULUUN'un rüzgar enerjisi santrali yatırımı, yalnızca yenilenebilir enerji başlığıyla değil; üretim maliyetleri, enerji arz güvenliği ve orta vadeli operasyonel verimlilik açısından da okunmalı.",
];

const finansalEtkiMaddeleri = [
  "KAP açıklamasında projenin yatırım tutarı veya beklenen yıllık tasarruf rakamı paylaşılmadı.",
  "Açıklanan somut veri, toplam 13,96 MWm planlanan güç ve iki türbinde TEDAŞ kabul sürecinin başlaması oldu.",
  "Bu yatırım doğrudan yeni satış sözleşmesi değil; şirketin üretim tarafındaki enerji ihtiyacını destekleyecek operasyonel verimlilik yatırımı niteliğinde.",
  "İki türbinin devreye alınma takvimi, enerji maliyetlerine olası katkının ne zaman görüleceği açısından önemli olacak.",
  "Bergama türbininin 2027 yılının 4. çeyreğinde devreye alınmasının planlanması, projenin katkısının kademeli oluşabileceğini gösteriyor.",
];

const hisseAcisindanOkuma = [
  {
    baslik: "Kısa vadede haber akışı pozitif okunabilir",
    aciklama:
      "Mekanik montajın tamamlanması ve kabul sürecinin başlaması, yatırımın ilerlediğini gösterdiği için haber akışı açısından destekleyici bir gelişme.",
  },
  {
    baslik: "Etki için devreye alma tarihi önemli",
    aciklama:
      "Hisse açısından asıl finansal okuma, türbinlerin ne zaman üretime başlayacağı ve elektrik giderleri üzerindeki katkının finansallara nasıl yansıyacağıyla netleşir.",
  },
  {
    baslik: "Rakam paylaşılmadığı için temkinli okunmalı",
    aciklama:
      "Şirket yatırım tutarı, yıllık üretim beklentisi veya tasarruf tahmini açıklamadı. Bu nedenle haberin finansal etkisini şimdiden net rakamlarla hesaplamak doğru olmaz.",
  },
];

const takipBasliklari = [
  "Manisa Yunusemre Recepli türbininde TEDAŞ kabul sürecinin tamamlanması",
  "İzmir Kınık Örtülü türbininde TEDAŞ kabul sürecinin tamamlanması",
  "İki türbinin fiili devreye alma tarihi",
  "Bergama Rahmanlar türbini için kalan yasal süreçlerin ilerleyişi",
  "2027 yılının 4. çeyreği için verilen devreye alma takvimi",
  "Enerji giderleri ve üretim maliyetleri üzerindeki olası etki",
  "Şirketin sonraki finansal raporlarında enerji yatırımıyla ilgili açıklamalar",
];

const seoSorular = [
  {
    soru: "ULUUN ne açıkladı?",
    cevap:
      "ULUUN, rüzgar enerjisi santrali projesinde iki türbinin mekanik montajının tamamlandığını ve TEDAŞ kabul süreçlerinin başlatıldığını açıkladı.",
  },
  {
    soru: "ULUUN rüzgar enerjisi projesinin toplam gücü ne kadar?",
    cevap:
      "Şirketin açıkladığı üç türbinin toplam planlanan gücü 13.960 kWm, yani 13,96 MWm seviyesinde bulunuyor.",
  },
  {
    soru: "ULUUN hangi türbinler için TEDAŞ kabul sürecini başlattı?",
    cevap:
      "Manisa Yunusemre Recepli Köyü'ndeki 4.200 kWm türbin ile İzmir Kınık Örtülü Köyü'ndeki 5.560 kWm türbin için TEDAŞ kabul süreçleri başlatıldı.",
  },
  {
    soru: "ULUUN Bergama türbininde son durum ne?",
    cevap:
      "İzmir Bergama Rahmanlar Köyü sınırlarındaki 4.200 kWm türbin için 09.07.2026 tarihinde ÇED olumlu kararı alındı. Şirket bu türbinin 2027 yılının 4. çeyreğinde devreye alınmasını planlıyor.",
  },
  {
    soru: "ULUUN rüzgar enerjisi projesi hisse için neden önemli?",
    cevap:
      "Proje, şirketin üretim tesislerinin elektrik ihtiyacını yenilenebilir kaynaklardan karşılamayı hedeflediği için enerji maliyetleri ve operasyonel verimlilik tarafında takip edilecek bir yatırım başlığıdır.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "ULUUN Rüzgar Enerjisi Projesinde TEDAŞ Kabul Süreci Başladı",
  description:
    "ULUUN, 13,96 MWm gücündeki lisanssız rüzgar enerjisi santrali projesinde iki türbinin mekanik montajının tamamlandığını ve TEDAŞ kabul süreçlerinin başlatıldığını açıkladı.",
  image: haberGorsel,
  datePublished: "2026-07-14T13:45:10+03:00",
  dateModified: "2026-07-14T13:45:10+03:00",
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

export default function UluunRuzgarEnerjisiHaberiPage() {
  return (
    <main className="min-h-screen bg-[#f8fafc] px-4 py-6 md:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }}
      />

      <div className="mx-auto max-w-4xl">
        <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_2px_16px_rgba(15,23,42,0.07)]">
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100">
            <Image
              src="/uluun-ruzgar-enerjisi-projesinde-tedas-kabul-sureci.webp"
              alt="ULUUN rüzgar enerjisi santrali TEDAŞ kabul süreci"
              fill
              sizes="(min-width: 1024px) 896px, 100vw"
              className="object-cover"
              preload
              unoptimized
            />
          </div>

          <div className="p-6 md:p-10">
            <h1 className="text-2xl font-bold leading-tight tracking-tight text-slate-900 md:text-3xl lg:text-4xl">
              ULUUN Rüzgar Enerjisi Projesinde TEDAŞ Kabul Süreci Başladı
            </h1>

            <div className="mb-5 mt-3 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center rounded-md bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700 ring-1 ring-inset ring-emerald-600/20">
                Yenilenebilir Enerji
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
                Ulusoy Un Sanayi ve Ticaret A.Ş. (<strong>ULUUN</strong>),
                rüzgar enerjisi santrali projesine ilişkin yeni KAP
                açıklamasında iki türbinde mekanik montajın tamamlandığını ve
                TEDAŞ kabul süreçlerinin başlatıldığını duyurdu.
              </p>

              <p>
                Şirketin açıklamasına göre proje, üretim tesislerinin elektrik
                tüketimini yenilenebilir enerji kaynaklarından karşılamak
                amacıyla yürütülüyor. Toplamda <strong>13,96 MWm</strong> güce
                ulaşması planlanan yatırımda, Manisa ve İzmir Kınık sahalarındaki
                türbinler kabul sürecine geçerken İzmir Bergama sahasındaki
                türbin için <strong>ÇED olumlu kararı</strong> alındı.
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

              <Section title="Ne oldu?">
                <p className="text-sm leading-7 text-slate-600 md:text-base">
                  ULUUN, daha önce duyurduğu rüzgar enerjisi santrali projesinde
                  yeni aşamaya geçildiğini açıkladı. Manisa Yunusemre Recepli
                  Köyü sınırlarında yer alan 4.200 kWm gücündeki türbin ile İzmir
                  Kınık Örtülü Köyü sınırlarında yer alan 5.560 kWm gücündeki
                  türbinin mekanik montajları tamamlandı.
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">
                  Bu iki türbin için TEDAŞ kabul süreçleri başlatıldı. İzmir
                  Bergama Rahmanlar Köyü sınırlarındaki 4.200 kWm gücündeki
                  türbin için ise Çevre, Şehircilik ve İklim Değişikliği Bakanlığı
                  tarafından 09.07.2026 tarihinde ÇED olumlu kararı verildi.
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

              <Section title="Projedeki türbinlerde son durum">
                <div className="grid gap-4">
                  {projeDetaylari.map((item) => (
                    <div
                      key={item.baslik}
                      className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <h3 className="text-base font-bold text-slate-900">
                          {item.baslik}
                        </h3>
                        <div className="text-sm font-bold text-slate-700">
                          {item.guc}
                        </div>
                      </div>
                      <div className="mt-2 inline-flex rounded-md bg-white px-2.5 py-1 text-xs font-bold text-emerald-700 ring-1 ring-inset ring-emerald-600/20">
                        {item.durum}
                      </div>
                      <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">
                        {item.yorum}
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

              <Section title="Şirket hakkında">
                <div className="space-y-3 text-sm leading-7 text-slate-600 md:text-base">
                  {sirketHakkinda.map((item) => (
                    <p key={item}>{item}</p>
                  ))}
                </div>
              </Section>

              <Section title="Finansal etki nasıl okunmalı?">
                <p className="text-sm leading-7 text-slate-600 md:text-base">
                  Bu açıklama yeni bir satış sözleşmesi veya doğrudan ciro
                  yaratan bir sipariş haberi değil. Haber, ULUUN&apos;un üretim
                  tesislerinde kullanılan elektriğin bir bölümünü yenilenebilir
                  enerji kaynaklarıyla karşılama hedefinde ilerleme sağlandığını
                  gösteriyor.
                </p>

                <div className="mt-4 grid gap-3">
                  {finansalEtkiMaddeleri.map((item) => (
                    <div
                      key={item}
                      className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm font-bold leading-6 text-emerald-900"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </Section>

              <Section title="Hisse açısından okuma">
                <div className="grid gap-4">
                  {hisseAcisindanOkuma.map((item) => (
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

              <Section title="ULUUN rüzgar enerjisi projesi hakkında kısa soru-cevap">
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
                  href="https://www.kap.org.tr/Bildirim/1633186"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="mt-2 inline-block font-medium text-slate-700 underline underline-offset-2"
                >
                  ULUUN — Orjinal Kap içeriği
                </a>
              </div>

              <HaberIlgiliBolumler
                slug={slug}
                baslik="ULUUN Rüzgar Enerjisi Projesinde TEDAŞ Kabul Süreci Başladı"
              />

              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm font-medium leading-7 text-amber-900 md:text-base">
                ⚠️ Bu haber bilgilendirme amacıyla hazırlanmıştır, yatırım
                tavsiyesi değildir. Rüzgar enerjisi yatırımları şirketin enerji
                maliyetleri ve operasyonel verimliliği açısından önemli olsa da
                tek başına yatırım kararı için yeterli değildir.
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
