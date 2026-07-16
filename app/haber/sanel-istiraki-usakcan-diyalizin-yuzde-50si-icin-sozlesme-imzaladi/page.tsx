import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import HaberIlgiliBolumler from "@/components/HaberIlgiliBolumler";
import AuthorBox from "@/components/AuthorBox";
import HaberAltKisim from "@/components/HaberAltKisim";
import { formatHaberTarihi, getHaberDosyaTarihi } from "@/lib/haber-tarih";

const haberSaati = getHaberDosyaTarihi(import.meta.url);
const haberTarihi = formatHaberTarihi(haberSaati);

const slug = "sanel-istiraki-usakcan-diyalizin-yuzde-50si-icin-sozlesme-imzaladi";
const haberUrl = `https://www.hocaileborsa.com/haber/${slug}`;
const haberGorsel =
  "https://www.hocaileborsa.com/sanel-istiraki-usakcan-diyalizin-yuzde-50si-icin-sozlesme-imzaladi.webp";

export const metadata: Metadata = {
  title:
    "SANEL İştiraki Uşakcan Diyaliz’in %50’si İçin Sözleşme İmzaladı",
  description:
    "SANEL’in %48,90 iştiraki Salacak Sağlık, Uşakcan Diyaliz’in %50’sini temsil eden 300 bin payı 74 milyon TL bedelle almak için sözleşme imzaladı.",
  alternates: {
    canonical: haberUrl,
  },
  openGraph: {
    type: "article",
    title:
      "SANEL İştiraki Uşakcan Diyaliz’in %50’si İçin Sözleşme İmzaladı",
    description:
      "Toplam devir bedeli 74 milyon TL olarak belirlendi. İşlemin tamamlanması SGK başvurusu ve tescil süreçlerine bağlı.",
    url: haberUrl,
    images: [
      {
        url: haberGorsel,
        width: 1200,
        height: 675,
        alt: "SANEL iştiraki Uşakcan Diyaliz yüzde 50 pay alımı",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "SANEL İştiraki Uşakcan Diyaliz’in %50’si İçin Sözleşme İmzaladı",
    description:
      "Salacak Sağlık, Uşakcan Diyaliz’in %50 payı için 74 milyon TL’lik hisse devir sözleşmesi imzaladı.",
    images: [haberGorsel],
  },
};

const ozetKartlari = [
  {
    baslik: "Devir Bedeli",
    deger: "74 Mn TL",
    aciklama: "Bir kısmı peşin, kalanı vadeli",
  },
  {
    baslik: "Satın Alınacak Pay",
    deger: "%50",
    aciklama: "Uşakcan Diyaliz sermayesi",
  },
  {
    baslik: "Pay Adedi",
    deger: "300.000",
    aciklama: "Devir sözleşmesine konu pay",
  },
  {
    baslik: "SANEL İştirak Oranı",
    deger: "%48,90",
    aciklama: "Salacak Sağlık’taki payı",
  },
];

const genelDetaylar = [
  {
    etiket: "Şirket",
    deger: "San-El Mühendislik Elektrik Taahhüt Sanayi ve Ticaret A.Ş.",
  },
  {
    etiket: "Hisse Kodu",
    deger: "SANEL",
  },
  {
    etiket: "Bildirim Tarihi",
    deger: "16.07.2026",
  },
  {
    etiket: "Bildirim Saati",
    deger: "19:41:34",
  },
  {
    etiket: "Önceki Açıklama Tarihi",
    deger: "14.07.2026",
  },
  {
    etiket: "İşlemi Yapan İştirak",
    deger: "Salacak Sağlık Yatırımları A.Ş.",
  },
  {
    etiket: "SANEL’in Salacak Sağlık’taki Payı",
    deger: "%48,90",
  },
  {
    etiket: "Hedef Şirket",
    deger: "Uşakcan Diyaliz Hizmetleri A.Ş.",
  },
  {
    etiket: "Faaliyet Alanı",
    deger: "Diyaliz merkezi işletmeciliği",
  },
  {
    etiket: "Satın Alınacak Sermaye Payı",
    deger: "%50",
  },
  {
    etiket: "Devralınacak Pay Adedi",
    deger: "300.000 adet",
  },
  {
    etiket: "Toplam Devir Bedeli",
    deger: "74.000.000 TL",
  },
  {
    etiket: "Ödeme Şekli",
    deger: "Bir kısmı peşin, kalan kısmı vadeli",
  },
  {
    etiket: "Sözleşme Tarihi",
    deger: "16.07.2026",
  },
];

const surecAdimlari = [
  {
    baslik: "Görüşmeler başlatıldı",
    aciklama:
      "SANEL, 14 Temmuz 2026 tarihli önceki açıklamasında iştiraki Salacak Sağlık’ın diyaliz merkezi yatırımı için görüşmelere başladığını duyurmuştu.",
  },
  {
    baslik: "Hisse devir sözleşmesi imzalandı",
    aciklama:
      "Salacak Sağlık, Uşakcan Diyaliz’in sermayesinin %50’sini temsil eden 300.000 payın satın alınması için ilgili pay sahipleriyle sözleşme imzaladı.",
  },
  {
    baslik: "SGK başvurusu yapılacak",
    aciklama:
      "Pay devrinin tamamlanabilmesi için Sosyal Güvenlik Kurumu’na gerekli başvurunun yapılması ve sürecin olumlu sonuçlanması gerekiyor.",
  },
  {
    baslik: "Pay defteri ve ticaret sicili işlemleri tamamlanacak",
    aciklama:
      "Devrin Uşakcan Diyaliz’in pay defterine işlenmesi, Uşak Ticaret Sicili Müdürlüğü nezdinde tescil ve ilan edilmesiyle işlem kapanacak.",
  },
];

const nedenOnemli = [
  {
    baslik: "Sağlık yatırımlarında yeni büyüme adımı",
    aciklama:
      "İşlem, SANEL’in iştiraki üzerinden diyaliz merkezi işletmeciliğine yönelik yeni bir yatırım gerçekleştirmesi anlamına geliyor.",
  },
  {
    baslik: "Hedef şirkette ortak kontrol oluşabilir",
    aciklama:
      "Salacak Sağlık’ın Uşakcan Diyaliz’in %50 payını devralması, hedef şirkette önemli bir yönetim ve ekonomik hak elde edilmesini sağlayabilir. Yönetim düzeni sözleşme ayrıntılarıyla netleşecek.",
  },
  {
    baslik: "Devir bedeli somut olarak açıklandı",
    aciklama:
      "İşlemin toplam bedeli 74 milyon TL. Ancak ödemenin peşin ve vadeli bölümlerinin tutarları ile vade koşulları açıklanmadı.",
  },
  {
    baslik: "İşlem henüz tamamlanmadı",
    aciklama:
      "Sözleşme imzalanmış olsa da pay devrinin kapanması SGK onayı, pay defteri kaydı ve ticaret sicili işlemlerine bağlı.",
  },
];

const finansalOkuma = [
  "74 milyon TL’lik satın alma bedeli Salacak Sağlık tarafından ödenecek.",
  "SANEL’in Salacak Sağlık’taki payı %48,90 olduğu için işlem SANEL’in doğrudan %50 Uşakcan ortağı olması anlamına gelmiyor.",
  "Basit ekonomik oranla SANEL’in dolaylı maruziyeti yaklaşık %24,45 seviyesine karşılık geliyor.",
  "Uşakcan Diyaliz’in ciro, kârlılık, borç ve nakit akışı verileri açıklanmadı.",
  "İşlemin SANEL finansallarına etkisi iştirak muhasebesi, finansman yöntemi ve hedef şirketin performansıyla netleşecek.",
  "Vadeli ödeme koşulları açıklanmadığı için finansman yükü henüz hesaplanamıyor.",
];

const hisseOkumasi = [
  {
    baslik: "Stratejik açıdan pozitif",
    aciklama:
      "Sağlık alanındaki iştirakin yeni bir diyaliz merkezi yatırımına yönelmesi, faaliyet çeşitlendirmesi ve büyüme açısından olumlu okunabilir.",
  },
  {
    baslik: "Finansal katkı henüz belirsiz",
    aciklama:
      "Hedef şirketin finansal verileri ve satın alma çarpanları açıklanmadığı için 74 milyon TL’lik bedelin uygunluğu şu aşamada ölçülemiyor.",
  },
  {
    baslik: "Kapanış koşulları takip edilmeli",
    aciklama:
      "İşlemin tamamlanması için SGK ve tescil süreçlerinin olumlu sonuçlanması gerekiyor. Bu nedenle haber sözleşme aşamasında, kesin devir henüz gerçekleşmedi.",
  },
];

const riskler = [
  "SGK başvurusunun olumlu sonuçlanması gerekiyor.",
  "Devir ve tescil işlemleri tamamlanmadan satın alma kesinleşmiş sayılmaz.",
  "Uşakcan Diyaliz’in finansal sonuçları kamuya açıklanmadı.",
  "Peşin ve vadeli ödeme dağılımı ile vade koşulları bilinmiyor.",
  "Satın alma sonrası entegrasyon ve işletme performansı beklenen seviyeye ulaşmayabilir.",
  "SANEL’in etkisi doğrudan değil, %48,90 oranındaki iştiraki üzerinden oluşacak.",
];

const takipBasliklari = [
  "Sosyal Güvenlik Kurumu başvurusunun sonucu",
  "Pay devrinin tamamlandığına ilişkin KAP açıklaması",
  "Uşak Ticaret Sicili tescil ve ilan süreci",
  "Peşin ve vadeli ödeme koşulları",
  "Uşakcan Diyaliz’in finansal verileri",
  "Salacak Sağlık’ın satın alma sonrası ortaklık ve yönetim yapısı",
  "Yatırımın SANEL finansallarına katkısı",
];

const seoSorular = [
  {
    soru: "SANEL ne açıkladı?",
    cevap:
      "SANEL, %48,90 oranındaki iştiraki Salacak Sağlık’ın Uşakcan Diyaliz’in %50 payını satın almak için hisse devir sözleşmesi imzaladığını açıkladı.",
  },
  {
    soru: "Uşakcan Diyaliz paylarının satış bedeli kaç TL?",
    cevap:
      "Uşakcan Diyaliz’in %50 payı için toplam devir bedeli 74.000.000 TL olarak belirlendi.",
  },
  {
    soru: "Kaç adet Uşakcan Diyaliz payı satın alınacak?",
    cevap:
      "Sözleşme, Uşakcan Diyaliz’in sermayesinin %50’sini temsil eden 300.000 adet payı kapsıyor.",
  },
  {
    soru: "Pay devri tamamlandı mı?",
    cevap:
      "Henüz tamamlanmadı. SGK başvurusunun olumlu sonuçlanması, pay defteri kaydı ve ticaret sicili tescil işlemlerinin tamamlanması gerekiyor.",
  },
  {
    soru: "SANEL doğrudan Uşakcan Diyaliz’in %50 ortağı mı olacak?",
    cevap:
      "Hayır. %50 payı satın alacak şirket, SANEL’in %48,90 iştiraki Salacak Sağlık’tır. SANEL’in etkisi iştiraki üzerinden dolaylı oluşacak.",
  },
  {
    soru: "SANEL haberi hisse için nasıl okunmalı?",
    cevap:
      "Sağlık yatırımlarında büyüme açısından stratejik olarak olumlu okunabilir. Ancak hedef şirketin finansalları, satın alma koşulları ve kapanış süreci açıklanmadan net finansal etki belirlenemez.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline:
    "SANEL İştiraki Uşakcan Diyaliz’in %50’si İçin Sözleşme İmzaladı",
  description:
    "SANEL’in %48,90 iştiraki Salacak Sağlık, Uşakcan Diyaliz’in %50’sini temsil eden 300 bin payı 74 milyon TL bedelle almak için sözleşme imzaladı.",
  image: haberGorsel,
  datePublished: "2026-07-16T19:41:34+03:00",
  dateModified: "2026-07-16T19:41:34+03:00",
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

export default function SanelUsakcanDiyalizPayAlimiPage() {
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
              src="/sanel-istiraki-usakcan-diyalizin-yuzde-50si-icin-sozlesme-imzaladi.webp"
              alt="SANEL iştiraki Uşakcan Diyaliz yüzde 50 pay alımı"
              fill
              unoptimized
              className="object-cover"
              priority
            />
          </div>

          <div className="p-6 md:p-10">
            <h1 className="text-2xl font-bold leading-tight tracking-tight text-slate-900 md:text-3xl lg:text-4xl">
              SANEL İştiraki Uşakcan Diyaliz’in %50’si İçin Sözleşme İmzaladı
            </h1>

            <div className="mb-5 mt-3 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center rounded-md bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700 ring-1 ring-inset ring-blue-600/20">
                Satın Alma
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
                San-El Mühendislik Elektrik Taahhüt Sanayi ve Ticaret A.Ş. (
                <strong>SANEL</strong>), %48,90 oranında iştiraki olan Salacak
                Sağlık Yatırımları A.Ş.’nin Uşakcan Diyaliz Hizmetleri A.Ş.’nin
                %50 payını satın almak için hisse devir sözleşmesi imzaladığını
                açıkladı.
              </p>

              <p>
                Satın alma işlemi Uşakcan Diyaliz’in sermayesinin %50’sini temsil
                eden <strong>300.000 adet payı</strong> kapsıyor. Toplam devir
                bedeli <strong>74.000.000 TL</strong> olarak belirlenirken,
                bedelin bir kısmı peşin, kalan kısmı vadeli ödenecek.
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
                  SANEL’in sağlık yatırımları alanındaki iştiraki Salacak Sağlık,
                  diyaliz merkezi işletmeciliği yapan Uşakcan Diyaliz’in yarısını
                  satın almak için ilgili pay sahipleriyle sözleşme imzaladı.
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">
                  Görüşme aşamasından sözleşme aşamasına geçilmiş olsa da işlem
                  henüz kapanmadı. SGK başvurusu ile tescil ve ilan süreçlerinin
                  tamamlanması gerekiyor.
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

              <Section title="Satın alma süreci nasıl ilerleyecek?">
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
                  Bu işlem SANEL tarafından doğrudan değil, %48,90 oranındaki
                  iştiraki Salacak Sağlık üzerinden gerçekleştiriliyor. Bu nedenle
                  satın alma bedeli ile SANEL’in ekonomik etkisi aynı büyüklükte
                  değerlendirilmemeli.
                </p>

                <div className="mt-4 grid gap-3">
                  {finansalOkuma.map((item) => (
                    <div
                      key={item}
                      className="rounded-xl border border-blue-200 bg-blue-50 p-4 text-sm font-bold leading-6 text-blue-950"
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

              <Section title="SANEL satın alma haberi hakkında kısa soru-cevap">
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
                  href="https://www.kap.org.tr/Bildirim/1634279"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="mt-2 inline-block font-medium text-slate-700 underline underline-offset-2"
                >
                  SANEL — Orjinal Kap içeriği
                </a>
              </div>

              <HaberIlgiliBolumler
                slug={slug}
                baslik="SANEL İştiraki Uşakcan Diyaliz’in %50’si İçin Sözleşme İmzaladı"
              />

              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm font-medium leading-7 text-amber-900 md:text-base">
                ⚠️ Bu haber bilgilendirme amacıyla hazırlanmıştır, yatırım
                tavsiyesi değildir. Satın alma işleminin etkisi; resmi onaylar,
                finansman koşulları, hedef şirketin finansal performansı ve
                iştirak muhasebesiyle birlikte değerlendirilmelidir.
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