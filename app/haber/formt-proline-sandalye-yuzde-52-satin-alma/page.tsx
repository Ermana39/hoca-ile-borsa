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

const slug = "formt-proline-sandalye-yuzde-52-satin-alma";
const haberUrl = `https://www.hocaileborsa.com/haber/${slug}`;
const haberGorsel =
  "https://www.hocaileborsa.com/formt-proline-sandalye-yuzde-52-satin-alma.webp";

export const metadata: Metadata = {
  title: "FORMT, Proline Sandalye’nin %52’sini 330 Milyon TL’ye Alıyor",
  description:
    seoAciklamasi("FORMT, Proline Sandalye Metal Sanayi ve Ticaret A.Ş.’nin %52 payını 330 milyon TL devir bedeliyle satın almak için anlaşma sağladığını açıkladı.", "Haberde gelişmenin ayrıntıları, açıklanan veriler ve yatırımcıların izleyebileceği temel noktalar yer alıyor."),
  alternates: {
    canonical: haberUrl,
  },
  openGraph: {
    type: "article",
    title: "FORMT, Proline Sandalye’nin %52’sini 330 Milyon TL’ye Alıyor",
    description:
      "FORMT, Proline Sandalye’nin %52 payı için 330 milyon TL bedelle anlaşma sağladı. İşlem bedelinin 132 milyon TL’si peşin, 198 milyon TL’si 10 ay içinde ödenecek.",
    url: haberUrl,
    images: [
      {
        url: haberGorsel,
        width: 1200,
        height: 675,
        alt: "FORMT Proline Sandalye yüzde 52 satın alma haberi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FORMT, Proline Sandalye’nin %52’sini 330 Milyon TL’ye Alıyor",
    description:
      "FORMT, Proline Sandalye’nin %52 payı için 330 milyon TL devir bedeliyle anlaşma sağladı.",
    images: [haberGorsel],
  },
};

const ozetKartlari = [
  {
    baslik: "Satın Alınacak Pay",
    deger: "%52",
    aciklama: "Proline Sandalye sermayesindeki pay",
  },
  {
    baslik: "İşlem Bedeli",
    deger: "330 Mn TL",
    aciklama: "Toplam devir bedeli",
  },
  {
    baslik: "Ödeme Planı",
    deger: "132 + 198 Mn TL",
    aciklama: "Peşin ödeme ve 10 ay vadeli kısım",
  },
  {
    baslik: "Tamamlanma Tarihi",
    deger: "31.07.2026",
    aciklama: "KAP açıklamasında belirtilen tarih",
  },
];

const genelDetaylar = [
  { etiket: "Şirket", deger: "Formet Metal ve Cam Sanayi A.Ş." },
  { etiket: "Hisse Kodu", deger: "FORMT" },
  { etiket: "Bildirim Tarihi", deger: "14.07.2026" },
  { etiket: "Bildirim Saati", deger: "11:53:42" },
  { etiket: "Açıklama Türü", deger: "Finansal Duran Varlık Edinimi" },
  { etiket: "Yönetim Kurulu Karar Tarihi", deger: "13.07.2026" },
  { etiket: "Satın Alınacak Şirket", deger: "Proline Sandalye Metal Sanayi ve Ticaret A.Ş." },
  { etiket: "Proline Sermayesi", deger: "47.100.000 TL" },
  { etiket: "Edinilen Nominal Pay", deger: "47.100.000 TL" },
  { etiket: "Satın Alınacak Oran", deger: "%52" },
  { etiket: "Edinim Sonrası Oy Hakkı", deger: "%52" },
  { etiket: "Beher Pay Alış Fiyatı", deger: "13,4738 TL" },
  { etiket: "Toplam Satın Alma Tutarı", deger: "330.000.000 TL" },
  { etiket: "Ödeme Koşulu", deger: "132 milyon TL peşin, 198 milyon TL 10 ay içinde" },
  { etiket: "İşlemin Tamamlanacağı Tarih", deger: "31.07.2026" },
  { etiket: "Aktif Toplamına Oran", deger: "%11" },
  { etiket: "Son Yıllık Hasılata Oran", deger: "%35,73" },
  { etiket: "Satıcılar", deger: "Köksal Kale, Dursun Taştan" },
  { etiket: "İlişkili Taraf Durumu", deger: "Hayır" },
];

const islemDetaylari = [
  {
    baslik: "Pay oranı",
    deger: "%52",
    yorum:
      "FORMT, satın alma tamamlandığında Proline Sandalye sermayesinde çoğunluk paya sahip olacak.",
  },
  {
    baslik: "Toplam bedel",
    deger: "330 milyon TL",
    yorum:
      "KAP açıklamasında işlem bedeli 330 milyon TL olarak duyuruldu. Tutarın bir kısmı peşin, kalan kısmı vadeli ödenecek.",
  },
  {
    baslik: "Ödeme yapısı",
    deger: "132 milyon TL peşin",
    yorum:
      "Peşin ödeme dışında 198 milyon TL’lik bölümün 10 ay içinde ödeneceği açıklandı.",
  },
  {
    baslik: "Tamamlanma takvimi",
    deger: "31 Temmuz 2026",
    yorum:
      "Hisse devir işlemlerinin tamamlanması ve gerekli işlemler için yönetim kurulu başkanı yetkilendirildi.",
  },
];

const degerlemeBilgileri = [
  {
    etiket: "Değerleme Kuruluşları",
    deger: "Karar Bağımsız Denetim ve Danışmanlık A.Ş. / PKF Aday Bağımsız Denetim A.Ş.",
  },
  {
    etiket: "Rapor Tarihleri",
    deger: "14.05.2026 ve 20.05.2026",
  },
  {
    etiket: "Rapor Numaraları",
    deger: "2026.05.DS.01 ve 2026-016",
  },
  {
    etiket: "Değerleme Sonuçları",
    deger: "1.439.426.968 TL ve 1.517.128.180 TL",
  },
  {
    etiket: "Şirketin Açıklaması",
    deger: "İşlemin değerleme raporlarındaki sonuçlara uygun gerçekleştirildiği belirtildi.",
  },
];

const nedenOnemli = [
  {
    baslik: "FORMT için faaliyet alanını genişleten bir satın alma",
    aciklama:
      "Satın alınacak şirket masa, sandalye, dolap, kanepe, yatak odası, oturma grupları ve benzeri mobilya ürünlerinin üretimi, montajı, alım satımı, ithalatı ve ihracatı alanında faaliyet gösteriyor. Bu nedenle işlem yalnızca finansal yatırım değil, operasyonel tarafta yeni bir ürün ve pazar açılımı olarak okunabilir.",
  },
  {
    baslik: "Bedelli sermaye artırımı fonu satın almada kullanılıyor",
    aciklama:
      "FORMT, 27 Ocak 2026 tarihli yönetim kurulu kararında şirket sermayesinin toplam satış hasılatı 285 milyon TL olacak şekilde nakit artırılmasına karar verildiğini ve elde edilecek fonun şirket satın alınmasında kullanılacağını açıklamıştı. Bu haber, söz konusu stratejinin somut adıma dönüştüğünü gösteriyor.",
  },
  {
    baslik: "İşlem büyüklüğü bilanço ölçeğine göre dikkat çekici",
    aciklama:
      "KAP açıklamasına göre edinilen finansal duran varlığın son açıklanan finansal tablolardaki aktif toplamına oranı %11, işlem bedelinin son yıllık hasılata oranı ise %35,73. Bu oranlar, satın almanın FORMT ölçeği açısından izlenmesi gereken büyüklükte olduğunu gösteriyor.",
  },
  {
    baslik: "İhracat ve e-ticaret vurgusu öne çıkıyor",
    aciklama:
      "Şirket, satın alınan şirketin ürünlerinin tamamen yurtdışına satıldığını belirtti. Ayrıca ürünlerin e-ticaret satışına uygun olması nedeniyle yurtiçi e-ticaret pazar payına katkı beklendiği açıklandı.",
  },
];

const sirketHakkinda = [
  "Formet Metal ve Cam Sanayi A.Ş. Borsa İstanbul’da FORMT koduyla işlem görüyor. Şirketin yeni KAP açıklaması, mevcut faaliyetlerinin yanında mobilya ve ekipman tarafında çoğunluk paya dayalı bir büyüme adımı içeriyor.",
  "Satın alma konusu Proline Sandalye Metal Sanayi ve Ticaret A.Ş.; masa, sandalye, dolap, kanepe, yatak odası, oturma odası, yemek odası, genç odası, koltuk, oturma grupları ve benzeri ev, otel, mağaza ve ticarethane ekipmanlarının üretimi, montajı, alım satımı, ithalatı ve ihracatı alanında faaliyet gösteriyor.",
  "FORMT açısından haberin ana başlığı, sermaye artırımıyla planlanan şirket satın alma stratejisinin Proline Sandalye üzerinden somutlaşması. Bu nedenle sonraki süreçte işlemin tamamlanması, ödeme takvimi ve satın alınan şirketin finansallara katkısı öne çıkacak.",
];

const degerlendirmeMaddeleri = [
  "330 milyon TL’lik işlem bedeli, FORMT için bilanço ve hasılat ölçeğine göre takip edilecek büyüklükte.",
  "Satın alma tamamlandığında FORMT, Proline Sandalye’de %52 pay ve %52 oy hakkına sahip olacak.",
  "KAP açıklamasında ürünlerin tamamen yurtdışına satıldığı belirtilmesi, işlemi ihracat tarafı açısından önemli hale getiriyor.",
  "Vadeli ödeme yapısı nedeniyle 198 milyon TL’lik kalan tutarın 10 aylık ödeme süreci ayrıca izlenecek.",
  "Şirket, işlem için SPK lisanslı iki bağımsız değerleme kuruluşundan rapor hazırlandığını açıkladı.",
  "Haberin kalıcı etkisi, satın alınan şirketin FORMT finansallarına nasıl yansıyacağıyla daha net görülecek.",
];

const takipBasliklari = [
  "Hisse devir işlemlerinin 31 Temmuz 2026’ya kadar tamamlanıp tamamlanmayacağı",
  "132 milyon TL peşin ödemenin ve 198 milyon TL vadeli ödemenin nakit akışına etkisi",
  "Proline Sandalye’nin FORMT finansallarına ne zaman konsolide edileceği",
  "Satın alınan şirketin ihracat gelirlerinin toplam hasılata katkısı",
  "Yurtiçi e-ticaret pazar payı hedefinde somut satış verisi gelip gelmeyeceği",
  "Satın alma sonrası yeni yatırım, kapasite veya satış kanalı açıklamaları",
];

const seoSorular = [
  {
    soru: "FORMT ne açıkladı?",
    cevap:
      "FORMT, Proline Sandalye Metal Sanayi ve Ticaret A.Ş.’nin %52 payını 330 milyon TL devir bedeliyle satın almak için anlaşma sağlandığını açıkladı.",
  },
  {
    soru: "FORMT Proline Sandalye için ne kadar ödeme yapacak?",
    cevap:
      "KAP açıklamasına göre işlem bedeli 330 milyon TL. Bunun 132 milyon TL’si peşin, 198 milyon TL’si ise 10 ay içinde ödenecek.",
  },
  {
    soru: "FORMT satın alma sonrası Proline Sandalye’de kaç paya sahip olacak?",
    cevap:
      "Satın alma tamamlandığında FORMT, Proline Sandalye sermayesinde %52 paya ve %52 oy hakkına sahip olacak.",
  },
  {
    soru: "FORMT satın alma işlemi ne zaman tamamlanacak?",
    cevap:
      "KAP açıklamasında işlemin tamamlanacağı tarih 31 Temmuz 2026 olarak yer aldı.",
  },
  {
    soru: "FORMT için bu satın alma neden önemli?",
    cevap:
      "İşlem; ihracat, e-ticaret satış kanalı, faaliyet çeşitliliği ve bilanço ölçeğine göre işlem büyüklüğü nedeniyle FORMT açısından önemli bir gelişme olarak öne çıkıyor.",
  },
  {
    soru: "Proline Sandalye hangi alanda faaliyet gösteriyor?",
    cevap:
      "Proline Sandalye; masa, sandalye, dolap, kanepe, yatak odası, oturma grubu ve benzeri mobilya ile ekipmanların üretimi, montajı, alım satımı, ithalatı ve ihracatı alanında faaliyet gösteriyor.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "FORMT, Proline Sandalye’nin %52’sini 330 Milyon TL’ye Alıyor",
  description:
    "FORMT, Proline Sandalye Metal Sanayi ve Ticaret A.Ş.’nin %52 payını 330 milyon TL devir bedeliyle satın almak için anlaşma sağladığını açıkladı.",
  image: haberGorsel,
  datePublished: "2026-07-14T11:53:42+03:00",
  dateModified: "2026-07-14T11:53:42+03:00",
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

export default function FormtProlineSandalyeSatinalmaHaberiPage() {
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
              src="/formt-proline-sandalye-yuzde-52-satin-alma.webp"
              alt="FORMT Proline Sandalye yüzde 52 satın alma haberi"
              fill
              sizes="(min-width: 1024px) 896px, 100vw"
              className="object-cover"
              priority
            />
          </div>

          <div className="p-6 md:p-10">
            <h1 className="text-2xl font-bold leading-tight tracking-tight text-slate-900 md:text-3xl lg:text-4xl">
              FORMT, Proline Sandalye’nin %52’sini 330 Milyon TL’ye Alıyor
            </h1>

            <div className="mb-5 mt-3 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center rounded-md bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700 ring-1 ring-inset ring-blue-600/20">
                Şirket Satın Alma
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
                Formet Metal ve Cam Sanayi A.Ş. (<strong>FORMT</strong>),
                Proline Sandalye Metal Sanayi ve Ticaret A.Ş.’nin %52 payının
                satın alınması için anlaşma sağlandığını açıkladı.
              </p>

              <p>
                KAP bildirimine göre işlem bedeli <strong>330 milyon TL</strong>
                olarak belirlendi. Bu tutarın <strong>132 milyon TL’si peşin</strong>,
                kalan <strong>198 milyon TL’si ise 10 ay içinde</strong> ödenecek.
                Satın alma işleminin <strong>31 Temmuz 2026</strong> tarihinde
                tamamlanması planlanıyor.
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
                  FORMT, Proline Sandalye Metal Sanayi ve Ticaret A.Ş.’nin
                  hisselerinin %52’sini 330 milyon TL bedelle satın almak üzere
                  anlaşma sağladı. Satın alma yöntemi KAP açıklamasında vadeli
                  olarak belirtildi.
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">
                  Şirket, hisse devir sözleşmesinin imzalanması, devir
                  işlemlerinin gerçekleştirilmesi ve gerekli işlemlerin
                  yürütülmesi için yönetim kurulu başkanının yetkilendirildiğini
                  duyurdu.
                </p>
              </Section>

              <Section title="Satın alma işleminin detayları">
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

              <Section title="İşlem nasıl yapılandırıldı?">
                <div className="grid gap-4">
                  {islemDetaylari.map((item) => (
                    <div
                      key={item.baslik}
                      className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <h3 className="text-base font-bold text-slate-900">
                          {item.baslik}
                        </h3>
                        <div className="text-sm font-bold text-slate-700">
                          {item.deger}
                        </div>
                      </div>
                      <p className="mt-2 text-sm leading-7 text-slate-600 md:text-base">
                        {item.yorum}
                      </p>
                    </div>
                  ))}
                </div>
              </Section>

              <Section title="Değerleme raporlarında ne var?">
                <p className="text-sm leading-7 text-slate-600 md:text-base">
                  FORMT, satın alma sürecinde Sermaye Piyasası Kurulu nezdinde
                  yetkilendirilmiş iki ayrı kurumdan değerleme raporu
                  hazırlandığını açıkladı. KAP bildiriminde, yapılan görüşmeler
                  sonucunda değerleme raporlarında belirtilen rakamların altında
                  bir bedelle %52 pay için anlaşma sağlandığı belirtildi.
                </p>

                <div className="mt-4 overflow-x-auto">
                  <table className="min-w-full overflow-hidden rounded-xl border border-slate-200 text-sm">
                    <tbody>
                      {degerlemeBilgileri.map((item, index) => (
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

              <Section title="Şirket ve satın alınan varlık hakkında">
                <div className="space-y-3 text-sm leading-7 text-slate-600 md:text-base">
                  {sirketHakkinda.map((item) => (
                    <p key={item}>{item}</p>
                  ))}
                </div>
              </Section>

              <Section title="Hisse açısından okuma">
                <p className="text-sm leading-7 text-slate-600 md:text-base">
                  Bu haber FORMT tarafında doğrudan şirket satın alma ve büyüme
                  stratejisiyle bağlantılı. Özellikle işlem tutarının son yıllık
                  hasılata oranı, ödeme takvimi ve satın alınan şirketin ihracat
                  yapısı birlikte değerlendirilmeli.
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

              <Section title="FORMT Proline Sandalye satın alma haberi hakkında kısa soru-cevap">
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
                  href="https://www.kap.org.tr/Bildirim/1633122"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="mt-2 inline-block font-medium text-slate-700 underline underline-offset-2"
                >
                  FORMT — Orjinal Kap içeriği
                </a>
              </div>

              <HaberIlgiliBolumler
                slug={slug}
                baslik="FORMT, Proline Sandalye’nin %52’sini 330 Milyon TL’ye Alıyor"
              />

              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm font-medium leading-7 text-amber-900 md:text-base">
                ⚠️ Bu haber bilgilendirme amacıyla hazırlanmıştır, yatırım
                tavsiyesi değildir. Şirket satın alma haberleri fiyatlama,
                bilanço etkisi ve ödeme takvimiyle birlikte değerlendirilmelidir.
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