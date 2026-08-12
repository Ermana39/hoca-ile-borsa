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

const slug = "avod-bagli-ortakligi-hasatin-krom-madeni-ruhsati-iptal-edildi";
const haberUrl = `https://www.hocaileborsa.com/haber/${slug}`;
const haberGorsel =
  "https://www.hocaileborsa.com/avod-bagli-ortakligi-hasatin-krom-madeni-ruhsati-iptal-edildi.webp";

export const metadata: Metadata = {
  title: "AVOD Bağlı Ortaklığı HASAT’ın Krom Madeni Ruhsatı İptal Edildi",
  description:
    seoAciklamasi("AVOD, bağlı ortaklığı HASAT bünyesindeki Muğla Köyceğiz krom madeni işletme ruhsatının 2026 yılı ruhsat ve rehabilitasyon bedellerinin süresinde ödenmemesi nedeniyle iptal edildiğini açıkladı.", "Haberde gelişmenin ayrıntıları, açıklanan veriler ve yatırımcıların izleyebileceği temel noktalar yer alıyor."),
  alternates: {
    canonical: haberUrl,
  },
  openGraph: {
    type: "article",
    title: "AVOD Bağlı Ortaklığı HASAT’ın Krom Madeni Ruhsatı İptal Edildi",
    description:
      "Muğla Köyceğiz’deki krom madeni ruhsatı, yasal yükümlülüklerin süresinde yerine getirilmemesi nedeniyle 1 Temmuz 2026 itibarıyla iptal edildi.",
    url: haberUrl,
    images: [
      {
        url: haberGorsel,
        width: 1200,
        height: 675,
        alt: "AVOD bağlı ortaklığı HASAT krom madeni ruhsat iptali",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AVOD Bağlı Ortaklığı HASAT’ın Krom Madeni Ruhsatı İptal Edildi",
    description:
      "HASAT’a ait Muğla Köyceğiz krom madeni ruhsatı iptal edildi.",
    images: [haberGorsel],
  },
};

const ozetKartlari = [
  {
    baslik: "Bağlı Ortaklık",
    deger: "HASAT",
    aciklama: "Hasat BNO Grup",
  },
  {
    baslik: "Maden Türü",
    deger: "Krom",
    aciklama: "IV. Grup (c) bendi",
  },
  {
    baslik: "Konum",
    deger: "Köyceğiz",
    aciklama: "Muğla",
  },
  {
    baslik: "İptal Tarihi",
    deger: "01.07.2026",
    aciklama: "Ruhsat iptal başlangıcı",
  },
];

const anaDetaylar = [
  ["Şirket", "A.V.O.D. Kurutulmuş Gıda ve Tarım Ürünleri Sanayi Ticaret A.Ş."],
  ["Hisse Kodu", "AVOD"],
  ["Bildirim Tarihi", "20.07.2026"],
  ["Bildirim Saati", "12:14:48"],
  ["Bağlı Ortaklık", "Hasat BNO Grup Gıda Yemek Hayvancılık Tekstil İnşaat San. ve Tic. A.Ş."],
  ["Ruhsat Konumu", "Muğla ili, Köyceğiz ilçesi"],
  ["Ruhsat Sicil No", "200712070"],
  ["Ruhsat Grubu", "IV. Grup (c) bendi"],
  ["Maden Türü", "Krom"],
  ["İptal Gerekçesi", "2026 yılı işletme ruhsat bedeli ve rehabilitasyon bedelinin süresinde ödenmemesi"],
  ["İptal Tarihi", "01.07.2026"],
  ["Makam Oluru Tarihi", "14.07.2026"],
  ["Şirkete Bildirim Tarihi", "17.07.2026"],
];

const surec = [
  {
    baslik: "2026 yılı bedelleri süresinde ödenmedi",
    aciklama:
      "Bağlı ortaklık HASAT adına kayıtlı krom madeni ruhsatına ilişkin işletme ruhsat bedeli ile rehabilitasyon bedeli yasal süresi içinde ödenmedi.",
  },
  {
    baslik: "MAPEG ruhsatı iptal etti",
    aciklama:
      "Maden ve Petrol İşleri Genel Müdürlüğü, 14 Temmuz 2026 tarihli makam oluru doğrultusunda ruhsatı 1 Temmuz 2026 itibarıyla iptal etti.",
  },
  {
    baslik: "İptal kararı şirkete bildirildi",
    aciklama:
      "Ruhsatın iptal edildiğine ilişkin resmi yazı 17 Temmuz 2026 tarihinde şirkete ulaştı.",
  },
  {
    baslik: "HASAT yükümlülükler için çalışma başlattı",
    aciklama:
      "Bağlı ortaklık, ilgili mevzuat kapsamında gerekli yükümlülüklerin yerine getirilmesi için çalışmalara başladığını açıkladı.",
  },
];

const nedenOnemli = [
  {
    baslik: "Madencilik faaliyetinin hukuki zemini ortadan kalktı",
    aciklama:
      "Ruhsat iptali, ilgili sahada yürütülebilecek madencilik faaliyetleri açısından doğrudan bir operasyonel kayıp anlamına geliyor.",
  },
  {
    baslik: "İptal nedeni ödeme yükümlülüğünün yerine getirilmemesi",
    aciklama:
      "Kararın teknik ya da rezerv kaynaklı değil, yasal sürede ödeme yapılmamasından kaynaklanması yönetim ve süreç kontrolü açısından olumsuz okunabilir.",
  },
  {
    baslik: "Finansal etki henüz açıklanmadı",
    aciklama:
      "Şirket, ruhsat iptalinin bilanço, yatırım değeri, rezerv beklentisi veya gelir projeksiyonlarına etkisini açıklamadı.",
  },
  {
    baslik: "Sürecin geri çevrilip çevrilemeyeceği belirsiz",
    aciklama:
      "Şirket yükümlülüklerin yerine getirilmesine yönelik çalışma başlattığını duyursa da ruhsatın yeniden kazanılmasına ilişkin net bir sonuç bulunmuyor.",
  },
];

const finansalOkuma = [
  "Ruhsat iptali şirket açısından olumsuz bir gelişme.",
  "İlgili maden sahasının bilanço değeri ve beklenen ekonomik katkısı açıklanmadığı için etkinin büyüklüğü hesaplanamıyor.",
  "Ruhsatın yeniden aktif hale getirilememesi halinde sahaya ilişkin yatırım ve gelir beklentileri zayıflayabilir.",
  "Ek ödeme, ceza, rehabilitasyon veya hukuki gider riski doğabilir.",
  "Bağlı ortaklığın madencilik faaliyetleri içindeki bu sahanın payı açıklanmadı.",
];

const hisseOkumasi = [
  {
    baslik: "Haber negatif",
    aciklama:
      "Bir maden ruhsatının ödeme yükümlülüğünün yerine getirilmemesi nedeniyle iptal edilmesi operasyonel ve kurumsal açıdan negatif okunur.",
  },
  {
    baslik: "Etkinin büyüklüğü belirsiz",
    aciklama:
      "Sahanın AVOD’un toplam varlıkları ve gelir potansiyeli içindeki ağırlığı açıklanmadığı için fiyat etkisinin kalıcılığı net değil.",
  },
  {
    baslik: "Yeni açıklamalar belirleyici olacak",
    aciklama:
      "Şirketin ruhsatı geri alma ihtimali, hukuki süreç ve finansal etki açıklamaları takip edilecek.",
  },
];

const riskler = [
  "Ruhsatın yeniden alınamaması",
  "Madencilik faaliyetlerinin durması",
  "Sahaya ilişkin yatırımların değer kaybetmesi",
  "Ek ödeme, ceza veya rehabilitasyon maliyetleri",
  "Bağlı ortaklığın nakit akışında zayıflama",
  "Kurumsal yönetim ve yükümlülük takibi konusunda güven kaybı",
];

const takipBasliklari = [
  "Ruhsatın yeniden kazanılması için yapılacak başvurular",
  "MAPEG tarafından verilecek yeni kararlar",
  "Hukuki itiraz süreci",
  "Ruhsat iptalinin finansal tablolara etkisi",
  "Maden sahasının defter değeri",
  "Sahaya ilişkin yatırım ve rezerv bilgileri",
  "Bağlı ortaklık HASAT’ın diğer ruhsatları",
];

const seoSorular = [
  {
    soru: "AVOD ne açıkladı?",
    cevap:
      "AVOD, bağlı ortaklığı HASAT bünyesindeki Muğla Köyceğiz krom madeni işletme ruhsatının iptal edildiğini açıkladı.",
  },
  {
    soru: "AVOD’un maden ruhsatı neden iptal edildi?",
    cevap:
      "2026 yılı işletme ruhsat bedeli ve rehabilitasyon bedelinin yasal süresi içinde ödenmemesi nedeniyle ruhsat iptal edildi.",
  },
  {
    soru: "İptal edilen ruhsat hangi madene ait?",
    cevap:
      "İptal edilen ruhsat Muğla Köyceğiz’de bulunan IV. Grup (c) bendi krom madeni sahasına ait.",
  },
  {
    soru: "AVOD ruhsat iptaline karşı ne yapacak?",
    cevap:
      "Şirket, bağlı ortaklık HASAT tarafından ilgili mevzuat kapsamında gerekli yükümlülüklerin yerine getirilmesine yönelik çalışmalar başlatıldığını açıkladı.",
  },
  {
    soru: "AVOD haberi hisse için nasıl okunmalı?",
    cevap:
      "Ruhsat iptali operasyonel açıdan negatif. Ancak sahanın finansal büyüklüğü açıklanmadığı için etkinin ne kadar önemli olduğu henüz net değil.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "AVOD Bağlı Ortaklığı HASAT’ın Krom Madeni Ruhsatı İptal Edildi",
  description:
    "AVOD, bağlı ortaklığı HASAT bünyesindeki Muğla Köyceğiz krom madeni işletme ruhsatının iptal edildiğini açıkladı.",
  image: haberGorsel,
  datePublished: "2026-07-20T12:14:48+03:00",
  dateModified: "2026-07-20T12:14:48+03:00",
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

export default function AvodKromMadeniRuhsatIptaliPage() {
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
              src="/avod-bagli-ortakligi-hasatin-krom-madeni-ruhsati-iptal-edildi.webp"
              alt="AVOD bağlı ortaklığı HASAT krom madeni ruhsat iptali"
              fill
              unoptimized
              className="object-cover"
              priority
            />
          </div>

          <div className="p-6 md:p-10">
            <h1 className="text-2xl font-bold leading-tight tracking-tight text-slate-900 md:text-3xl lg:text-4xl">
              AVOD Bağlı Ortaklığı HASAT’ın Krom Madeni Ruhsatı İptal Edildi
            </h1>

            <div className="mb-5 mt-3 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center rounded-md bg-red-50 px-2.5 py-1 text-xs font-semibold text-red-700 ring-1 ring-inset ring-red-600/20">
                Ruhsat İptali
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
                A.V.O.D. Kurutulmuş Gıda ve Tarım Ürünleri Sanayi Ticaret A.Ş. (
                <strong>AVOD</strong>), bağlı ortaklığı HASAT bünyesinde bulunan
                Muğla Köyceğiz’deki krom madeni işletme ruhsatının iptal edildiğini
                açıkladı.
              </p>

              <p>
                Ruhsatın, 2026 yılı işletme ruhsat bedeli ile rehabilitasyon
                bedelinin yasal süresi içinde ödenmemesi nedeniyle 1 Temmuz 2026
                itibarıyla iptal edildiği bildirildi.
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                {ozetKartlari.map((item) => (
                  <div
                    key={item.baslik}
                    className="rounded-2xl border border-red-200 bg-red-50 p-4"
                  >
                    <div className="text-sm font-semibold text-red-800">
                      {item.baslik}
                    </div>
                    <div className="mt-1 text-xl font-bold text-red-950">
                      {item.deger}
                    </div>
                    <div className="mt-1 text-sm text-red-800">
                      {item.aciklama}
                    </div>
                  </div>
                ))}
              </div>

              <Section title="Ne oldu?">
                <p className="text-sm leading-7 text-slate-600 md:text-base">
                  Maden ve Petrol İşleri Genel Müdürlüğü, HASAT’a ait krom madeni
                  işletme ruhsatını, yıllık ruhsat ve rehabilitasyon bedellerinin
                  süresinde ödenmemesi nedeniyle iptal etti. Karar şirkete
                  17 Temmuz 2026 tarihinde bildirildi.
                </p>
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

              <Section title="Ruhsat iptal süreci nasıl ilerledi?">
                <div className="grid gap-4">
                  {surec.map((item) => (
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
                <div className="grid gap-3">
                  {finansalOkuma.map((item) => (
                    <div
                      key={item}
                      className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm font-bold leading-6 text-red-950"
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

              <Section title="AVOD krom madeni ruhsat iptali hakkında soru-cevap">
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
                  href="https://www.kap.org.tr/Bildirim/1634830"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="mt-2 inline-block font-medium text-slate-700 underline underline-offset-2"
                >
                  AVOD — Orjinal Kap içeriği
                </a>
              </div>

              <HaberIlgiliBolumler
                slug={slug}
                baslik="AVOD Bağlı Ortaklığı HASAT’ın Krom Madeni Ruhsatı İptal Edildi"
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