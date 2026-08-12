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

const slug = "tursg-2026-6-bilanco-net-kar-1345-milyar-tl";
const haberUrl = `https://www.hocaileborsa.com/haber/${slug}`;
const haberGorsel =
  "https://www.hocaileborsa.com/tursg-2026-6-bilanco-net-kar-1345-milyar-tl.webp";

export const metadata: Metadata = {
  title: "TURSG 2026/6 Bilanço: Net Kâr %44 Artarak 13,5 Milyar TL",
  description:
    seoAciklamasi("Türkiye Sigorta'nın 2026 ilk yarı net kârı %44 artışla 13,45 milyar TL'ye, prim üretimi 94,21 milyar TL'ye çıktı. Bileşik rasyo %88'e geriledi.", "Haberde gelişmenin ayrıntıları, açıklanan veriler ve yatırımcıların izleyebileceği temel noktalar yer alıyor."),
  alternates: { canonical: haberUrl },
  openGraph: {
    type: "article",
    title: "TURSG 2026/6 Bilanço: Net Kâr %44 Artarak 13,5 Milyar TL",
    description:
      "TURSG'nin teknik dengesi %33 büyüdü, net kârı %44 arttı ve bileşik rasyosu %97'den %88'e geriledi.",
    url: haberUrl,
    images: [
      {
        url: haberGorsel,
        width: 1200,
        height: 675,
        alt: "TURSG Türkiye Sigorta 2026 ikinci çeyrek bilanço analizi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TURSG 2026/6 Bilanço: Net Kâr 13,5 Milyar TL",
    description:
      "Prim üretimi 94,2 milyar TL, teknik denge 16,5 milyar TL ve bileşik rasyo %88 oldu.",
    images: [haberGorsel],
  },
};

const ozetKartlari = [
  {
    baslik: "Net Kâr",
    deger: "13,45 Mr TL",
    aciklama: "Yıllık %44 artış",
  },
  {
    baslik: "Prim Üretimi",
    deger: "94,21 Mr TL",
    aciklama: "Yıllık %30 artış",
  },
  {
    baslik: "Teknik Denge",
    deger: "16,45 Mr TL",
    aciklama: "Yıllık %33 artış",
  },
  {
    baslik: "Bileşik Rasyo",
    deger: "%88",
    aciklama: "9 puan iyileşme",
  },
];

const anaDetaylar = [
  ["Şirket", "Türkiye Sigorta A.Ş."],
  ["Hisse Kodu", "TURSG"],
  ["Rapor Dönemi", "01.01.2026 - 30.06.2026"],
  ["Finansal Tablo", "2026 yılı 2. çeyrek / 6 aylık"],
  ["Rapor Türü", "Konsolide olmayan"],
  ["Sunum Para Birimi", "Türk lirası"],
  ["KAP Bildirim Tarihi", "20.07.2026"],
  ["Finansal Tablo Saati", "18:40:57"],
  ["Faaliyet Raporu Saati", "18:41:09"],
  ["Bağımsız Denetçi", "PwC"],
  ["Denetim Türü", "Sınırlı denetim"],
  ["KAP Bildirimleri", "1635159 ve 1635160"],
];

const gelirTablosu = [
  {
    kalem: "Prim üretimi",
    onceki: "72,68 Mr TL",
    cari: "94,21 Mr TL",
    degisim: "%29,6",
    yon: "pozitif",
  },
  {
    kalem: "Hayat dışı teknik gelir",
    onceki: "39,47 Mr TL",
    cari: "51,34 Mr TL",
    degisim: "%30,1",
    yon: "pozitif",
  },
  {
    kalem: "Hayat dışı teknik gider",
    onceki: "27,09 Mr TL",
    cari: "34,89 Mr TL",
    degisim: "%28,8",
    yon: "notr",
  },
  {
    kalem: "Teknik bölüm dengesi",
    onceki: "12,38 Mr TL",
    cari: "16,45 Mr TL",
    degisim: "%32,9",
    yon: "pozitif",
  },
  {
    kalem: "Brüt ödenen hasarlar",
    onceki: "20,86 Mr TL",
    cari: "28,45 Mr TL",
    degisim: "%36,4",
    yon: "negatif",
  },
  {
    kalem: "Faaliyet giderleri",
    onceki: "6,48 Mr TL",
    cari: "8,96 Mr TL",
    degisim: "%38,2",
    yon: "negatif",
  },
  {
    kalem: "Yatırım gelirleri",
    onceki: "16,03 Mr TL",
    cari: "19,10 Mr TL",
    degisim: "%19,2",
    yon: "pozitif",
  },
  {
    kalem: "Net yatırım geliri",
    onceki: "2,05 Mr TL",
    cari: "2,92 Mr TL",
    degisim: "%42,3",
    yon: "pozitif",
  },
  {
    kalem: "Net dönem kârı",
    onceki: "9,33 Mr TL",
    cari: "13,45 Mr TL",
    degisim: "%44,1",
    yon: "pozitif",
  },
];

const bilancoKalemleri = [
  {
    kalem: "Toplam varlıklar",
    onceki: "156,98 Mr TL",
    cari: "193,33 Mr TL",
    degisim: "%23,2",
  },
  {
    kalem: "Cari varlıklar",
    onceki: "141,82 Mr TL",
    cari: "178,17 Mr TL",
    degisim: "%25,6",
  },
  {
    kalem: "Nakit ve nakit benzerleri",
    onceki: "11,16 Mr TL",
    cari: "12,92 Mr TL",
    degisim: "%15,7",
  },
  {
    kalem: "Finansal varlıklar",
    onceki: "86,51 Mr TL",
    cari: "98,17 Mr TL",
    degisim: "%13,5",
  },
  {
    kalem: "Esas faaliyetlerden alacaklar",
    onceki: "31,48 Mr TL",
    cari: "51,94 Mr TL",
    degisim: "%65,0",
  },
  {
    kalem: "Toplam yükümlülükler",
    onceki: "105,37 Mr TL",
    cari: "132,27 Mr TL",
    degisim: "%25,5",
  },
  {
    kalem: "Sigortacılık teknik karşılıkları",
    onceki: "66,61 Mr TL",
    cari: "73,31 Mr TL",
    degisim: "%10,1",
  },
  {
    kalem: "Özkaynaklar",
    onceki: "51,60 Mr TL",
    cari: "61,06 Mr TL",
    degisim: "%18,3",
  },
  {
    kalem: "Ödenmiş sermaye",
    onceki: "10,00 Mr TL",
    cari: "20,00 Mr TL",
    degisim: "%100",
  },
];

const sigortacilikOranlari = [
  {
    oran: "Hasar / prim oranı",
    onceki: "%74",
    cari: "%66",
    degisim: "8 puan iyileşme",
  },
  {
    oran: "Komisyon oranı",
    onceki: "%12",
    cari: "%11",
    degisim: "1 puan iyileşme",
  },
  {
    oran: "Masraf oranı",
    onceki: "%12",
    cari: "%12",
    degisim: "Değişmedi",
  },
  {
    oran: "Bileşik rasyo",
    onceki: "%97",
    cari: "%88",
    degisim: "9 puan iyileşme",
  },
];

const bilancoOranlari = [
  {
    oran: "Nakit oranı",
    onceki: "%94",
    cari: "%86",
    yorum: "8 puan geriledi",
  },
  {
    oran: "Likidite oranı",
    onceki: "%126",
    cari: "%128",
    yorum: "2 puan yükseldi",
  },
  {
    oran: "Cari oran",
    onceki: "%137",
    cari: "%138",
    yorum: "1 puan yükseldi",
  },
  {
    oran: "Aktif kârlılığı",
    onceki: "%15",
    cari: "%15",
    yorum: "Korundu",
  },
  {
    oran: "Özkaynak kârlılığı",
    onceki: "%48",
    cari: "%48",
    yorum: "Korundu",
  },
];

const primBranslari = [
  {
    brans: "Genel zararlar",
    uretim: "32,63 Mr TL",
    pay: "%34,6",
    degisim: "%49",
  },
  {
    brans: "Yangın ve doğal afetler",
    uretim: "22,82 Mr TL",
    pay: "%24,2",
    degisim: "%25",
  },
  {
    brans: "Hastalık / sağlık",
    uretim: "10,65 Mr TL",
    pay: "%11,3",
    degisim: "%13",
  },
  {
    brans: "Kara araçları",
    uretim: "9,88 Mr TL",
    pay: "%10,5",
    degisim: "%30",
  },
  {
    brans: "Kara araçları sorumluluk",
    uretim: "8,28 Mr TL",
    pay: "%8,8",
    degisim: "%22",
  },
];

const teknikDengeBranslari = [
  {
    brans: "Yangın ve doğal afetler",
    onceki: "4,71 Mr TL",
    cari: "5,82 Mr TL",
    degisim: "%24",
    durum: "pozitif",
  },
  {
    brans: "Genel zararlar",
    onceki: "0,83 Mr TL",
    cari: "4,96 Mr TL",
    degisim: "%495",
    durum: "pozitif",
  },
  {
    brans: "Kara araçları",
    onceki: "3,73 Mr TL",
    cari: "3,91 Mr TL",
    degisim: "%5",
    durum: "pozitif",
  },
  {
    brans: "Kaza",
    onceki: "2,66 Mr TL",
    cari: "2,70 Mr TL",
    degisim: "%2",
    durum: "pozitif",
  },
  {
    brans: "Hastalık / sağlık",
    onceki: "2,09 Mr TL",
    cari: "-0,31 Mr TL",
    degisim: "Zarara döndü",
    durum: "negatif",
  },
  {
    brans: "Kara araçları sorumluluk",
    onceki: "-2,05 Mr TL",
    cari: "-1,06 Mr TL",
    degisim: "Zarar azaldı",
    durum: "pozitif",
  },
];

const bilancoOkumasi = [
  {
    baslik: "Kâr artışı prim büyümesinin üzerinde",
    aciklama:
      "Prim üretimi yaklaşık %30 artarken net kârın %44 yükselmesi, büyümenin yalnızca hacimden değil marj iyileşmesinden de destek aldığını gösteriyor.",
  },
  {
    baslik: "Ana kâr motoru teknik sonuçlar",
    aciklama:
      "16,45 milyar TL'lik teknik denge, 2,92 milyar TL'lik net yatırım gelirinin oldukça üzerinde. Bu görünüm, dönem kârının ağırlıklı olarak sigortacılık operasyonlarından geldiğine işaret ediyor.",
  },
  {
    baslik: "Bileşik rasyoda güçlü iyileşme",
    aciklama:
      "Bileşik rasyonun %97'den %88'e gerilemesi, şirketin primlerinin hasar, komisyon ve masrafları karşılama gücünün belirgin şekilde arttığını gösteriyor.",
  },
  {
    baslik: "Bilanço büyümeye devam ediyor",
    aciklama:
      "Aktif büyüklük altı ayda %23,2 artarak 193,33 milyar TL'ye, özkaynaklar ise %18,3 artarak 61,06 milyar TL'ye yükseldi.",
  },
];

const gucluNoktalar = [
  "Net kâr yıllık bazda %44,1 artarak 13,45 milyar TL'ye çıktı.",
  "Teknik bölüm dengesi %32,9 büyüyerek 16,45 milyar TL oldu.",
  "Hasar / prim oranı %74'ten %66'ya geriledi.",
  "Bileşik rasyo %97'den %88'e düşerek teknik kârlılık açısından güçlü bir seviyeye geldi.",
  "Net yatırım geliri %42,3 artarak 2,92 milyar TL'ye yükseldi.",
  "Şirket 94,2 milyar TL prim üretimi ve yaklaşık %15 pazar payıyla hayat dışı sigortada liderliğini sürdürdü.",
];

const riskler = [
  "Brüt ödenen hasarlar %36,4 ile prim üretiminden daha hızlı arttı.",
  "Faaliyet giderleri %38,2 yükselerek gider disiplini açısından izlenmesi gereken bir hızda büyüdü.",
  "Hastalık ve sağlık branşının teknik dengesi 2,09 milyar TL kârdan 309 milyon TL zarara döndü.",
  "Sağlık branşında brüt ödenen hasarlar yıllık %91 artarak 8,86 milyar TL'ye çıktı.",
  "Esas faaliyetlerden alacakların altı ayda %65 artması tahsilat kalitesi ve nakit dönüşümü açısından takip edilmeli.",
  "Nakit oranı %94'ten %86'ya gerilerken likidite ve cari oranlarda sınırlı iyileşme görüldü.",
];

const sermayeGelismeleri = [
  {
    baslik: "%100 bedelsiz sermaye artırımı",
    aciklama:
      "Şirketin çıkarılmış sermayesi, tamamı 2025 yılı net dönem kârından karşılanarak 10 milyar TL'den 20 milyar TL'ye yükseltildi. İşlem iç kaynak transferi niteliğinde olduğundan şirkete yeni nakit girişi sağlamadı.",
  },
  {
    baslik: "Halka açıklık oranı yükseldi",
    aciklama:
      "TVF Finansal Yatırımlar'ın sermayenin %5'ine karşılık gelen payları yabancı kurumsal yatırımcılara satmasıyla halka açıklık oranı %18,90'dan %23,90'a çıktı.",
  },
  {
    baslik: "3 milyar TL brüt temettü",
    aciklama:
      "Genel Kurulda 3 milyar TL brüt kâr payının 27 Ağustos 2026 tarihinden itibaren dağıtılması kararlaştırıldı.",
  },
  {
    baslik: "Sınırlı denetim sonucu",
    aciklama:
      "PwC, finansal tabloların mevzuata uygun ve gerçeğe uygun sunulmadığı kanaatine varılmasına neden olacak bir hususa rastlanmadığını açıkladı.",
  },
];

const hisseOkumasi = [
  {
    baslik: "Bilanço genel olarak güçlü",
    aciklama:
      "Net kâr, teknik denge ve prim üretimindeki çift haneli büyüme ile bileşik rasyodaki 9 puanlık iyileşme, sonuçların ana pozitif tarafını oluşturuyor.",
  },
  {
    baslik: "Kâr kalitesi olumlu",
    aciklama:
      "Kâr artışının ana kaynağının yatırım gelirinden çok teknik sigortacılık performansı olması, bilanço kalitesini destekliyor.",
  },
  {
    baslik: "Sağlık branşı önemli zayıf halka",
    aciklama:
      "Sağlık branşındaki yüksek hasar artışı ve teknik zarara dönüş, sonraki çeyreklerde fiyatlama ve hasar yönetiminin yakından izlenmesini gerektiriyor.",
  },
  {
    baslik: "Fiyatlama için beklenti karşılaştırması gerekli",
    aciklama:
      "Finansal sonuç güçlü olsa da hisse tepkisi, açıklanan kârın piyasa beklentisine göre konumu ve sonuç öncesinde fiyatlara ne ölçüde yansıdığıyla birlikte değerlendirilmelidir.",
  },
];

const takipBasliklari = [
  "Bileşik rasyonun yılın ikinci yarısında %90'ın altında korunup korunamayacağı",
  "Hastalık ve sağlık branşında fiyatlama ile hasar maliyetlerinin seyri",
  "Esas faaliyetlerden alacaklardaki hızlı büyümenin tahsilata dönüşümü",
  "Faaliyet giderlerindeki %38'lik artışın sonraki çeyreklerde yavaşlayıp yavaşlamayacağı",
  "Genel zararlar ve yangın branşlarının teknik kâra katkısının devamlılığı",
  "Net yatırım gelirinin faiz ve piyasa koşullarına bağlı seyri",
  "27 Ağustos 2026 tarihinden itibaren planlanan temettü ödemesi",
];

const seoSorular = [
  {
    soru: "TURSG 2026 ikinci çeyrek net kârı ne kadar?",
    cevap:
      "Türkiye Sigorta, 2026 yılının ilk altı ayında 13,45 milyar TL net kâr açıkladı. Net kâr geçen yılın aynı dönemine göre yaklaşık %44 arttı.",
  },
  {
    soru: "Türkiye Sigorta'nın 2026/6 prim üretimi ne kadar oldu?",
    cevap:
      "Şirketin brüt prim üretimi yıllık yaklaşık %30 artışla 94,21 milyar TL'ye yükseldi.",
  },
  {
    soru: "TURSG bileşik rasyosu kaç oldu?",
    cevap:
      "Bileşik rasyo 2025 yılının ilk yarısındaki %97 seviyesinden 2026 yılının ilk yarısında %88'e geriledi.",
  },
  {
    soru: "TURSG bilançosunda teknik kâr ne kadar?",
    cevap:
      "Hayat dışı teknik bölüm dengesi yıllık %33 artışla 16,45 milyar TL olarak gerçekleşti.",
  },
  {
    soru: "Türkiye Sigorta bilançosunun zayıf tarafı ne?",
    cevap:
      "Sağlık branşının teknik zarara dönmesi, brüt hasar ve faaliyet giderlerinin prim üretiminden hızlı artması ile esas faaliyet alacaklarındaki %65'lik yükseliş dikkat çeken risklerdir.",
  },
  {
    soru: "TURSG 2026 bilançosu hisse için nasıl yorumlanmalı?",
    cevap:
      "Teknik kârlılık, net kâr büyümesi ve bileşik rasyodaki iyileşme olumlu. Ancak hisse etkisi değerlendirilirken piyasa beklentisi, değerleme ve sağlık branşındaki hasar baskısı birlikte izlenmelidir.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "TURSG 2026/6 Bilanço: Net Kâr %44 Artarak 13,5 Milyar TL",
  description:
    "Türkiye Sigorta'nın 2026 ilk yarı net kârı %44 artışla 13,45 milyar TL'ye, prim üretimi 94,21 milyar TL'ye çıktı. Bileşik rasyo %88'e geriledi.",
  image: haberGorsel,
  datePublished: "2026-07-20T18:40:57+03:00",
  dateModified: "2026-07-20T18:41:09+03:00",
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

function degisimRengi(yon: string) {
  if (yon === "pozitif") return "text-emerald-700";
  if (yon === "negatif") return "text-rose-700";
  return "text-slate-700";
}

export default function Tursg2026BilancoPage() {
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
              src="/tursg-2026-6-bilanco-net-kar-1345-milyar-tl.webp"
              alt="TURSG Türkiye Sigorta 2026 ikinci çeyrek bilanço analizi"
              fill
              unoptimized
              className="object-cover"
              priority
            />
          </div>

          <div className="p-6 md:p-10">
            <h1 className="text-2xl font-bold leading-tight tracking-tight text-slate-900 md:text-3xl lg:text-4xl">
              TURSG 2026/6 Bilanço: Net Kâr %44 Artarak 13,5 Milyar TL
            </h1>

            <div className="mb-5 mt-3 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center rounded-md bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700 ring-1 ring-inset ring-blue-600/20">
                Bilanço
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
                Türkiye Sigorta A.Ş. (<strong>TURSG</strong>), 2026 yılının ilk
                altı ayında <strong>13,45 milyar TL net kâr</strong> açıkladı.
                Şirketin net kârı geçen yılın aynı dönemindeki 9,33 milyar
                TL'ye göre <strong>%44,1 arttı</strong>.
              </p>

              <p>
                Dönemin öne çıkan noktası yalnızca kâr artışı değil, teknik
                sigortacılık göstergelerindeki iyileşme oldu. Prim üretimi
                <strong> 94,21 milyar TL'ye</strong>, teknik bölüm dengesi
                <strong> 16,45 milyar TL'ye</strong> yükselirken bileşik rasyo
                <strong> %97'den %88'e</strong> geriledi.
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
                <div className="space-y-3 text-sm leading-7 text-slate-600 md:text-base">
                  <p>
                    TURSG, 30 Haziran 2026 tarihinde sona eren altı aylık döneme
                    ait konsolide olmayan finansal tablolarını ve faaliyet
                    raporunu KAP'ta yayımladı. Finansal tablolar sınırlı
                    denetimden geçti.
                  </p>
                  <p>
                    Şirket, prim üretimini yaklaşık %30 artırırken teknik
                    dengeyi %33, net kârı ise %44 büyüttü. Kâr büyümesinin prim
                    büyümesinin üzerinde kalması ve bileşik rasyodaki 9 puanlık
                    gerileme, dönemin en güçlü tarafını oluşturdu.
                  </p>
                </div>
              </Section>

              <Section title="KAP açıklamasındaki ana detaylar">
                <div className="overflow-x-auto">
                  <table className="min-w-full overflow-hidden rounded-xl border border-slate-200 text-sm">
                    <tbody>
                      {anaDetaylar.map(([etiket, deger], index) => (
                        <tr
                          key={etiket}
                          className={index % 2 === 0 ? "bg-white" : "bg-slate-50"}
                        >
                          <th className="px-4 py-3 text-left font-semibold text-slate-800">
                            {etiket}
                          </th>
                          <td className="px-4 py-3 font-bold text-slate-700">
                            {deger}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Section>

              <Section title="TURSG 2026 ilk yarı finansal sonuçları">
                <div className="overflow-x-auto">
                  <table className="min-w-full overflow-hidden rounded-xl border border-slate-200 text-sm">
                    <thead className="bg-slate-900 text-white">
                      <tr>
                        <th className="px-4 py-3 text-left">Kalem</th>
                        <th className="px-4 py-3 text-right">2025/6</th>
                        <th className="px-4 py-3 text-right">2026/6</th>
                        <th className="px-4 py-3 text-right">Değişim</th>
                      </tr>
                    </thead>
                    <tbody>
                      {gelirTablosu.map((item, index) => (
                        <tr
                          key={item.kalem}
                          className={index % 2 === 0 ? "bg-white" : "bg-slate-50"}
                        >
                          <th className="px-4 py-3 text-left font-semibold text-slate-800">
                            {item.kalem}
                          </th>
                          <td className="px-4 py-3 text-right text-slate-600">
                            {item.onceki}
                          </td>
                          <td className="px-4 py-3 text-right font-bold text-slate-900">
                            {item.cari}
                          </td>
                          <td
                            className={`px-4 py-3 text-right font-bold ${degisimRengi(
                              item.yon,
                            )}`}
                          >
                            {item.degisim}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Section>

              <Section title="Bilanço nasıl okunmalı?">
                <div className="grid gap-4">
                  {bilancoOkumasi.map((item) => (
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

              <Section title="Sigortacılık oranlarında belirgin iyileşme">
                <div className="overflow-x-auto">
                  <table className="min-w-full overflow-hidden rounded-xl border border-slate-200 text-sm">
                    <thead className="bg-slate-900 text-white">
                      <tr>
                        <th className="px-4 py-3 text-left">Oran</th>
                        <th className="px-4 py-3 text-right">2025/6</th>
                        <th className="px-4 py-3 text-right">2026/6</th>
                        <th className="px-4 py-3 text-right">Yorum</th>
                      </tr>
                    </thead>
                    <tbody>
                      {sigortacilikOranlari.map((item, index) => (
                        <tr
                          key={item.oran}
                          className={index % 2 === 0 ? "bg-white" : "bg-slate-50"}
                        >
                          <th className="px-4 py-3 text-left font-semibold text-slate-800">
                            {item.oran}
                          </th>
                          <td className="px-4 py-3 text-right text-slate-600">
                            {item.onceki}
                          </td>
                          <td className="px-4 py-3 text-right font-bold text-slate-900">
                            {item.cari}
                          </td>
                          <td className="px-4 py-3 text-right font-bold text-emerald-700">
                            {item.degisim}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-600 md:text-base">
                  Bileşik rasyonun %100'ün altında olması, şirketin yatırım
                  gelirleri dikkate alınmadan önce teknik sigortacılık
                  faaliyetlerinden kâr ürettiğini gösterir. TURSG'nin %88'lik
                  rasyosu, 2025 ilk yarısına göre belirgin bir marj iyileşmesine
                  işaret ediyor.
                </p>
              </Section>

              <Section title="Prim üretimini hangi branşlar taşıdı?">
                <div className="overflow-x-auto">
                  <table className="min-w-full overflow-hidden rounded-xl border border-slate-200 text-sm">
                    <thead className="bg-slate-900 text-white">
                      <tr>
                        <th className="px-4 py-3 text-left">Branş</th>
                        <th className="px-4 py-3 text-right">2026/6 üretim</th>
                        <th className="px-4 py-3 text-right">Toplam payı</th>
                        <th className="px-4 py-3 text-right">Yıllık değişim</th>
                      </tr>
                    </thead>
                    <tbody>
                      {primBranslari.map((item, index) => (
                        <tr
                          key={item.brans}
                          className={index % 2 === 0 ? "bg-white" : "bg-slate-50"}
                        >
                          <th className="px-4 py-3 text-left font-semibold text-slate-800">
                            {item.brans}
                          </th>
                          <td className="px-4 py-3 text-right font-bold text-slate-900">
                            {item.uretim}
                          </td>
                          <td className="px-4 py-3 text-right text-slate-600">
                            {item.pay}
                          </td>
                          <td className="px-4 py-3 text-right font-bold text-emerald-700">
                            {item.degisim}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-600 md:text-base">
                  Genel zararlar ile yangın ve doğal afetler branşları toplam
                  prim üretiminin yaklaşık %59'unu oluşturdu. Prim büyümesinde
                  en yüksek mutlak katkı genel zararlar branşından geldi.
                </p>
              </Section>

              <Section title="Teknik kârın branşlara göre dağılımı">
                <div className="overflow-x-auto">
                  <table className="min-w-full overflow-hidden rounded-xl border border-slate-200 text-sm">
                    <thead className="bg-slate-900 text-white">
                      <tr>
                        <th className="px-4 py-3 text-left">Branş</th>
                        <th className="px-4 py-3 text-right">2025/6</th>
                        <th className="px-4 py-3 text-right">2026/6</th>
                        <th className="px-4 py-3 text-right">Değişim</th>
                      </tr>
                    </thead>
                    <tbody>
                      {teknikDengeBranslari.map((item, index) => (
                        <tr
                          key={item.brans}
                          className={index % 2 === 0 ? "bg-white" : "bg-slate-50"}
                        >
                          <th className="px-4 py-3 text-left font-semibold text-slate-800">
                            {item.brans}
                          </th>
                          <td className="px-4 py-3 text-right text-slate-600">
                            {item.onceki}
                          </td>
                          <td className="px-4 py-3 text-right font-bold text-slate-900">
                            {item.cari}
                          </td>
                          <td
                            className={`px-4 py-3 text-right font-bold ${
                              item.durum === "negatif"
                                ? "text-rose-700"
                                : "text-emerald-700"
                            }`}
                          >
                            {item.degisim}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-600 md:text-base">
                  Teknik kârdaki yükselişi en güçlü şekilde genel zararlar ve
                  yangın branşları destekledi. Buna karşılık sağlık branşının
                  309 milyon TL teknik zarara dönmesi bilançonun en dikkat
                  çekici olumsuz gelişmesi oldu.
                </p>
              </Section>

              <Section title="TURSG bilanço kalemleri">
                <div className="overflow-x-auto">
                  <table className="min-w-full overflow-hidden rounded-xl border border-slate-200 text-sm">
                    <thead className="bg-slate-900 text-white">
                      <tr>
                        <th className="px-4 py-3 text-left">Kalem</th>
                        <th className="px-4 py-3 text-right">2025/12</th>
                        <th className="px-4 py-3 text-right">2026/6</th>
                        <th className="px-4 py-3 text-right">Değişim</th>
                      </tr>
                    </thead>
                    <tbody>
                      {bilancoKalemleri.map((item, index) => (
                        <tr
                          key={item.kalem}
                          className={index % 2 === 0 ? "bg-white" : "bg-slate-50"}
                        >
                          <th className="px-4 py-3 text-left font-semibold text-slate-800">
                            {item.kalem}
                          </th>
                          <td className="px-4 py-3 text-right text-slate-600">
                            {item.onceki}
                          </td>
                          <td className="px-4 py-3 text-right font-bold text-slate-900">
                            {item.cari}
                          </td>
                          <td className="px-4 py-3 text-right font-bold text-blue-700">
                            {item.degisim}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Section>

              <Section title="Likidite ve kârlılık oranları">
                <div className="overflow-x-auto">
                  <table className="min-w-full overflow-hidden rounded-xl border border-slate-200 text-sm">
                    <thead className="bg-slate-900 text-white">
                      <tr>
                        <th className="px-4 py-3 text-left">Oran</th>
                        <th className="px-4 py-3 text-right">2025/12</th>
                        <th className="px-4 py-3 text-right">2026/6</th>
                        <th className="px-4 py-3 text-right">Değerlendirme</th>
                      </tr>
                    </thead>
                    <tbody>
                      {bilancoOranlari.map((item, index) => (
                        <tr
                          key={item.oran}
                          className={index % 2 === 0 ? "bg-white" : "bg-slate-50"}
                        >
                          <th className="px-4 py-3 text-left font-semibold text-slate-800">
                            {item.oran}
                          </th>
                          <td className="px-4 py-3 text-right text-slate-600">
                            {item.onceki}
                          </td>
                          <td className="px-4 py-3 text-right font-bold text-slate-900">
                            {item.cari}
                          </td>
                          <td className="px-4 py-3 text-right font-semibold text-slate-700">
                            {item.yorum}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Section>

              <Section title="Sermaye, halka açıklık ve temettü gelişmeleri">
                <div className="grid gap-4">
                  {sermayeGelismeleri.map((item) => (
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

              <Section title="Bilançonun güçlü tarafları">
                <div className="grid gap-3">
                  {gucluNoktalar.map((item) => (
                    <div
                      key={item}
                      className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm font-bold leading-6 text-emerald-950"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </Section>

              <Section title="Dikkat edilmesi gereken riskler">
                <div className="grid gap-3">
                  {riskler.map((item) => (
                    <div
                      key={item}
                      className="rounded-xl border border-orange-200 bg-orange-50 p-4 text-sm font-semibold leading-6 text-orange-950"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </Section>

              <Section title="TURSG hissesi açısından nasıl okunmalı?">
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

              <Section title="TURSG 2026 bilançosu hakkında soru-cevap">
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
                <div className="font-semibold text-slate-800">Kaynaklar</div>
                <div className="mt-2 flex flex-col gap-2">
                  <a
                    href="https://www.kap.org.tr/Bildirim/1635159"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="font-medium text-slate-700 underline underline-offset-2"
                  >
                    TURSG finansal tabloları — Orjinal Kap içeriği
                  </a>
                  <a
                    href="https://www.kap.org.tr/Bildirim/1635160"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="font-medium text-slate-700 underline underline-offset-2"
                  >
                    TURSG faaliyet raporu — Orjinal Kap içeriği
                  </a>
                </div>
              </div>

              <HaberIlgiliBolumler
                slug={slug}
                baslik="TURSG 2026/6 Bilanço: Net Kâr %44 Artarak 13,5 Milyar TL"
              />

              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm font-medium leading-7 text-amber-900 md:text-base">
                ⚠️ Bu haber bilgilendirme amacıyla hazırlanmıştır, yatırım
                tavsiyesi değildir.
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