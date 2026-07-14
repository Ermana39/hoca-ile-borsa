import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import HaberIlgiliBolumler from "@/components/HaberIlgiliBolumler";
import AuthorBox from "@/components/AuthorBox";
import HaberAltKisim from "@/components/HaberAltKisim";
import { formatHaberTarihi, getHaberDosyaTarihi } from "@/lib/haber-tarih";

const slug = "golda-ekim-isvea-isleme-baslama-tarihleri";
const haberUrl = `https://www.hocaileborsa.com/haber/${slug}`;
const haberGorsel =
  "https://www.hocaileborsa.com/golda-ekim-isvea-isleme-baslama-tarihleri.webp";
const yerelGorsel = "/golda-ekim-isvea-isleme-baslama-tarihleri.webp";
const haberSaati = getHaberDosyaTarihi(import.meta.url);
const haberTarihi = formatHaberTarihi(haberSaati);

const title =
  "GOLDA, EKIM ve ISVEA İşleme Başlama Tarihleri Belli Oldu";
const description =
  "GOLDA 8 Temmuz, EKIM 9 Temmuz ve ISVEA 10 Temmuz 2026 tarihlerinde Borsa İstanbul'da işleme başlayacak. Halka arz fiyatı, pazar, kod ve ilk işlem günü detayları.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: haberUrl,
  },
  keywords: [
    "GOLDA ne zaman işlem görecek",
    "EKIM ne zaman işlem görecek",
    "ISVEA ne zaman işlem görecek",
    "GOLDA işlem tarihi",
    "EKIM işlem tarihi",
    "ISVEA işlem tarihi",
    "halka arz işlem başlama tarihleri",
  ],
  openGraph: {
    type: "article",
    title,
    description,
    url: haberUrl,
    images: [
      {
        url: haberGorsel,
        width: 1200,
        height: 675,
        alt: "GOLDA EKIM ISVEA işlem başlama tarihleri",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [haberGorsel],
  },
};

const islemeBaslayacaklar = [
  {
    kod: "GOLDA",
    sirket: "Golda Gıda San. ve Tic. A.Ş.",
    tarih: "08 Temmuz 2026 Çarşamba",
    kisaTarih: "8 Temmuz",
    fiyat: "9,20 TL",
    pazar: "Yıldız Pazar",
    dagitim: "Eşit Dağıtım",
    pay: "87.499.998 lot",
    halkaAciklik: "%35",
    katilim: "Katılım endeksine uygun",
    izahname: "/halka-arz/onayli-izahnameler/golda-gida-san-ve-tic",
    haber: "/haber/golda-gida-halka-arzina-spk-onayi-geldi",
    ozet:
      "Gıda üretimi tarafında faaliyet gösteren Golda Gıda, un, irmik, makarna ve bakliyat alanındaki üretim gücüyle izlenecek. İlk işlem gününde düşük nominal fiyat, arz büyüklüğü ve halka açıklık oranı birlikte takip edilecek.",
  },
  {
    kod: "EKIM",
    sirket: "Ekim Turizm Ticaret ve Sanayi A.Ş.",
    tarih: "09 Temmuz 2026 Perşembe",
    kisaTarih: "9 Temmuz",
    fiyat: "30,26 TL",
    pazar: "Yıldız Pazar",
    dagitim: "Eşit Dağıtım",
    pay: "162.000.000 lot",
    halkaAciklik: "%19,47",
    katilim: "Katılım endeksine uygun değil",
    izahname: "/halka-arz/onayli-izahnameler/ekim-turizm-tic-ve-san",
    haber: "/haber/ekim-turizm-halka-arzinda-dagitim-sonuclari-aciklandi",
    ozet:
      "Intercity markasıyla bilinen Ekim Turizm tarafında filo kiralama iş modeli, araç parkı, finansman maliyetleri ve dağıtım sonuçlarındaki talep yapısı ilk işlem günü öncesinde öne çıkıyor.",
  },
  {
    kod: "ISVEA",
    sirket: "İsvea Seramik ve Banyo Ürünleri Sanayi A.Ş.",
    tarih: "10 Temmuz 2026 Cuma",
    kisaTarih: "10 Temmuz",
    fiyat: "20,90 TL",
    pazar: "Yıldız Pazar",
    dagitim: "Bireysele Eşit Dağıtım",
    pay: "67.000.000 lot",
    halkaAciklik: "%23,93",
    katilim: "Katılım endeksine uygun değil",
    izahname: "/halka-arz/onayli-izahnameler/isvea-seramik-ve-banyo-urunleri-sanayi",
    haber: "/haber/isvea-halka-arzinda-dagitim-sonuclari-aciklandi",
    ozet:
      "Seramik ve banyo ürünleri alanında faaliyet gösteren İsvea tarafında üretim kapasitesi, enerji maliyetleri, ihracat yapısı ve bireysel yatırımcıya yapılan dağıtım ilk işlem günü öncesinde takip edilecek.",
  },
];

const gunlukAkis = [
  {
    tarih: "08 Temmuz 2026 Çarşamba",
    baslik: "GOLDA payları işleme başlayacak",
    aciklama:
      "GOLDA kodlu Golda Gıda paylarında halka arz sonrası ilk piyasa fiyatlaması oluşacak.",
  },
  {
    tarih: "09 Temmuz 2026 Perşembe",
    baslik: "EKIM payları işleme başlayacak",
    aciklama:
      "EKIM kodlu Ekim Turizm payları için ilk işlem günü takip edilecek.",
  },
  {
    tarih: "10 Temmuz 2026 Cuma",
    baslik: "ISVEA payları işleme başlayacak",
    aciklama:
      "ISVEA kodlu İsvea Seramik paylarında haftanın son işlem başlangıcı gerçekleşecek.",
  },
];

const izlemeBasliklari = [
  "İlk işlem gününde emir dengesi ve tavan bekleyen lot miktarı",
  "Halka arz fiyatına göre oluşacak ilk kapanış marjı",
  "Dağıtım sonrası yatırımcı tabanı ve kısa vadeli satış eğilimi",
  "Aynı hafta işlem gören diğer halka arzların fiyat davranışı",
  "BIST genel görünümü, halka arzlara yönelik risk iştahı ve likidite",
  "Şirketlerin fon kullanım planlarının orta vadeli büyüme hikayesine katkısı",
];

const sorular = [
  {
    soru: "GOLDA ne zaman işleme başlayacak?",
    cevap:
      "GOLDA payları 08 Temmuz 2026 Çarşamba günü Borsa İstanbul Yıldız Pazar'da işleme başlayacak.",
  },
  {
    soru: "EKIM ne zaman işleme başlayacak?",
    cevap:
      "EKIM payları 09 Temmuz 2026 Perşembe günü Borsa İstanbul Yıldız Pazar'da işlem görmeye başlayacak.",
  },
  {
    soru: "ISVEA ne zaman işleme başlayacak?",
    cevap:
      "ISVEA payları 10 Temmuz 2026 Cuma günü Borsa İstanbul Yıldız Pazar'da işlem görmeye başlayacak.",
  },
  {
    soru: "GOLDA, EKIM ve ISVEA halka arz fiyatları kaç TL?",
    cevap:
      "GOLDA halka arz fiyatı 9,20 TL, EKIM halka arz fiyatı 30,26 TL ve ISVEA halka arz fiyatı 20,90 TL olarak açıklandı.",
  },
  {
    soru: "İlk işlem gününde nelere bakılmalı?",
    cevap:
      "İlk işlem gününde halka arz fiyatına göre kapanış marjı, emir dengesi, işlem hacmi, tavan serisi beklentisi, yatırımcı ilgisi ve genel piyasa koşulları birlikte izlenmelidir.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "NewsArticle",
      headline: title,
      description,
      image: haberGorsel,
      datePublished: haberSaati,
      dateModified: haberSaati,
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
      mainEntityOfPage: haberUrl,
    },
    {
      "@type": "FAQPage",
      mainEntity: sorular.map((item) => ({
        "@type": "Question",
        name: item.soru,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.cevap,
        },
      })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Ana Sayfa",
          item: "https://www.hocaileborsa.com/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Haberler",
          item: "https://www.hocaileborsa.com/haberler",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: title,
          item: haberUrl,
        },
      ],
    },
  ],
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

export default function GoldaEkimIsveaIslemeBaslamaTarihleriPage() {
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
              src={yerelGorsel}
              alt="GOLDA EKIM ISVEA işlem başlama tarihleri"
              fill

              sizes="(min-width: 1024px) 896px, 100vw"
className="object-cover"
              priority
            />
          </div>

          <div className="p-6 md:p-10">
            <h1 className="text-2xl font-bold leading-tight tracking-tight text-slate-900 md:text-3xl lg:text-4xl">
              GOLDA, EKIM ve ISVEA İşleme Başlama Tarihleri Belli Oldu
            </h1>

            <div className="mb-5 mt-3 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center rounded-md bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700 ring-1 ring-inset ring-emerald-600/20">
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
                Halka arz sürecini tamamlayan üç şirket için Borsa İstanbul’da
                işlem başlangıç tarihleri netleşti. <strong>GOLDA</strong> 08
                Temmuz 2026 Çarşamba, <strong>EKIM</strong> 09 Temmuz 2026
                Perşembe ve <strong>ISVEA</strong> 10 Temmuz 2026 Cuma günü
                işleme başlayacak.
              </p>

              <p>
                Bu hafta halka arz yatırımcıları açısından arka arkaya üç yeni
                işlem başlangıcı izlenecek. İlk işlem günleri, halka arz
                fiyatına göre oluşacak piyasa fiyatlamasını, emir dengesini,
                tavan serisi beklentisini ve yatırımcıların kısa vadeli
                davranışını görmek açısından önem taşıyor.
              </p>

              <div className="grid gap-4 sm:grid-cols-3">
                {islemeBaslayacaklar.map((item) => (
                  <div
                    key={item.kod}
                    className="rounded-2xl border border-cyan-200 bg-cyan-50 p-4"
                  >
                    <div className="text-sm font-semibold text-cyan-800">
                      {item.kod}
                    </div>
                    <div className="mt-1 text-2xl font-bold text-cyan-950">
                      {item.kisaTarih}
                    </div>
                    <div className="mt-1 text-sm leading-6 text-cyan-800">
                      {item.sirket}
                    </div>
                  </div>
                ))}
              </div>

              <Section title="GOLDA, EKIM ve ISVEA işlem takvimi">
                <div className="overflow-x-auto">
                  <table className="min-w-[820px] w-full border-collapse text-sm">
                    <thead className="bg-slate-100 text-slate-800">
                      <tr>
                        <th className="border-b border-slate-200 px-4 py-3 text-left font-bold">
                          Hisse
                        </th>
                        <th className="border-b border-slate-200 px-4 py-3 text-left font-bold">
                          Şirket
                        </th>
                        <th className="border-b border-slate-200 px-4 py-3 text-left font-bold">
                          İşlem Tarihi
                        </th>
                        <th className="border-b border-slate-200 px-4 py-3 text-left font-bold">
                          Fiyat
                        </th>
                        <th className="border-b border-slate-200 px-4 py-3 text-left font-bold">
                          Pazar
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {islemeBaslayacaklar.map((item, index) => (
                        <tr
                          key={item.kod}
                          className={index % 2 === 0 ? "bg-white" : "bg-slate-50"}
                        >
                          <td className="border-b border-slate-100 px-4 py-3 font-bold text-slate-950">
                            {item.kod}
                          </td>
                          <td className="border-b border-slate-100 px-4 py-3 text-slate-700">
                            {item.sirket}
                          </td>
                          <td className="border-b border-slate-100 px-4 py-3 font-semibold text-cyan-800">
                            {item.tarih}
                          </td>
                          <td className="border-b border-slate-100 px-4 py-3 text-slate-700">
                            {item.fiyat}
                          </td>
                          <td className="border-b border-slate-100 px-4 py-3 text-slate-700">
                            {item.pazar}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <p className="mt-4 text-sm leading-7 text-slate-600 md:text-base">
                  Üç pay da Yıldız Pazar’da işlem görmeye başlayacak. Halka arz
                  fiyatları farklı seviyelerde olduğu için yatırımcıların ilk
                  gün performansını yalnızca fiyat seviyesiyle değil, arz
                  büyüklüğü, dağıtım yapısı, halka açıklık oranı ve piyasa
                  koşullarıyla birlikte okuması gerekir.
                </p>
              </Section>

              <Section title="Gün gün halka arz akışı">
                <div className="space-y-3">
                  {gunlukAkis.map((item) => (
                    <div
                      key={item.tarih}
                      className="rounded-xl border border-slate-200 bg-slate-50 p-4"
                    >
                      <div className="text-sm font-bold text-slate-900">
                        {item.tarih}
                      </div>
                      <div className="mt-1 text-base font-bold text-slate-900">
                        {item.baslik}
                      </div>
                      <p className="mt-1 text-sm leading-7 text-slate-600 md:text-base">
                        {item.aciklama}
                      </p>
                    </div>
                  ))}
                </div>
              </Section>

              <Section title="Şirket bazında öne çıkan bilgiler">
                <div className="space-y-4">
                  {islemeBaslayacaklar.map((item) => (
                    <div
                      key={item.kod}
                      className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
                    >
                      <div className="flex flex-wrap items-baseline gap-2">
                        <h3 className="text-xl font-bold text-slate-950">
                          {item.kod}
                        </h3>
                        <span className="text-sm font-semibold text-slate-500">
                          {item.sirket}
                        </span>
                      </div>
                      <div className="mt-3 grid gap-3 sm:grid-cols-2">
                        {[
                          ["İlk işlem tarihi", item.tarih],
                          ["Halka arz fiyatı", item.fiyat],
                          ["Toplam pay", item.pay],
                          ["Halka açıklık", item.halkaAciklik],
                          ["Dağıtım", item.dagitim],
                          ["Katılım endeksi", item.katilim],
                        ].map(([etiket, deger]) => (
                          <div
                            key={`${item.kod}-${etiket}`}
                            className="rounded-xl border border-slate-200 bg-white p-3"
                          >
                            <div className="text-xs font-semibold uppercase text-slate-500">
                              {etiket}
                            </div>
                            <div className="mt-1 text-sm font-bold text-slate-900">
                              {deger}
                            </div>
                          </div>
                        ))}
                      </div>
                      <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">
                        {item.ozet}
                      </p>
                      <div className="mt-3 flex flex-wrap gap-3 text-sm">
                        <Link
                          href={item.izahname}
                          className="font-semibold text-blue-700 underline underline-offset-4"
                        >
                          Onaylı izahname detayları
                        </Link>
                        <Link
                          href={item.haber}
                          className="font-semibold text-slate-700 underline underline-offset-4"
                        >
                          İlgili haber
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </Section>

              <Section title="İlk işlem gününde hangi veriler izlenmeli?">
                <p className="text-sm leading-7 text-slate-600 md:text-base">
                  Halka arzdan sonra ilk işlem günü, yatırımcıların en çok
                  baktığı başlıklardan biridir. Ancak ilk gün fiyat hareketi tek
                  başına şirketin orta ve uzun vadeli değerini göstermez. Bu
                  nedenle fiyat hareketini halka arzın büyüklüğü, dağıtılan lot
                  miktarı, yatırımcı sayısı, sektör görünümü ve genel piyasa
                  havasıyla birlikte değerlendirmek daha sağlıklı olur.
                </p>

                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {izlemeBasliklari.map((item) => (
                    <div
                      key={item}
                      className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm leading-7 text-slate-600"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </Section>

              <Section title="Tavan serisi beklentisi nasıl okunmalı?">
                <p className="text-sm leading-7 text-slate-600 md:text-base">
                  Yeni halka arzlarda ilk günlerde tavan serisi beklentisi
                  yatırımcıların gündemine hızlı girer. Buna rağmen her halka
                  arzın arz büyüklüğü, dağıtım yöntemi, halka açıklık oranı,
                  yatırımcı tabanı ve sektör algısı farklıdır. GOLDA, EKIM ve
                  ISVEA aynı hafta işleme başlasa da fiyat davranışlarının bire
                  bir aynı olması beklenmemelidir.
                </p>

                <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">
                  İlk kapanış fiyatı, halka arz fiyatına göre oluşan marjı
                  gösterecektir. Sonraki günlerde ise işlem hacmi, tavan fiyat
                  seviyesindeki bekleyen emirler ve piyasadaki genel risk iştahı
                  daha belirleyici hale gelebilir. Güncel performans takibi için
                  halka arz tavan serisi sayfası ayrıca izlenebilir.
                </p>
              </Section>

              <Section title="Genel değerlendirme">
                <p className="text-sm leading-7 text-slate-600 md:text-base">
                  GOLDA, EKIM ve ISVEA için işlem başlangıç tarihlerinin aynı
                  haftaya denk gelmesi halka arz gündemini canlı tutacak. 08
                  Temmuz Çarşamba GOLDA, 09 Temmuz Perşembe EKIM ve 10 Temmuz
                  Cuma ISVEA tarafında ilk piyasa fiyatlaması oluşacak.
                </p>

                <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">
                  Yatırımcılar açısından bu süreçte en kritik nokta, ilk işlem
                  günü heyecanını şirket gerçeklerinden koparmadan okumak.
                  Halka arz fiyatı, fon kullanım planı, sektör dinamikleri,
                  finansal görünüm, dağıtım sonuçları ve piyasa koşulları
                  birlikte değerlendirildiğinde daha sağlıklı bir çerçeve oluşur.
                </p>
              </Section>

              <Section title="Sık sorulan sorular">
                <div className="space-y-4">
                  {sorular.map((item) => (
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
                <div className="font-semibold text-slate-800">
                  İlgili sayfalar
                </div>
                <div className="mt-2 flex flex-wrap gap-3">
                  <Link
                    href="/halka-arz/takvim"
                    className="font-medium text-slate-700 underline underline-offset-2"
                  >
                    Güncel halka arz takvimi
                  </Link>
                  <Link
                    href="/halka-arz/tavan-serisi"
                    className="font-medium text-slate-700 underline underline-offset-2"
                  >
                    Halka arz tavan serisi takibi
                  </Link>
                  <Link
                    href="/halka-arz/onayli-izahnameler"
                    className="font-medium text-slate-700 underline underline-offset-2"
                  >
                    Onaylı izahnameler
                  </Link>
                </div>
              </div>

              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm font-medium leading-7 text-amber-900 md:text-base">
                Bu haber bilgilendirme amacıyla hazırlanmıştır, yatırım
                tavsiyesi değildir. İşlem başlangıç tarihleri ve pazar bilgileri
                resmi duyurulara göre takip edilmeli; yatırım kararları kişisel
                risk profili ve güncel piyasa koşulları dikkate alınarak
                verilmelidir.
              </div>

              <HaberIlgiliBolumler
                slug={slug}
                baslik="GOLDA, EKIM ve ISVEA işlem başlama tarihleri belli oldu"
              />
            </div>
          </div>

          <HaberAltKisim href={`/haber/${slug}`} />

          <AuthorBox />
        </article>
      </div>
    </main>
  );
}
