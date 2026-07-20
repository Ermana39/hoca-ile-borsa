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

const slug = "altny-taac-134-milyon-dolarlik-havacilik-ekipmani-sozlesmesi";
const haberUrl = `https://www.hocaileborsa.com/haber/${slug}`;
const haberGorsel =
  "https://www.hocaileborsa.com/altny-taac-134-milyon-dolarlik-havacilik-ekipmani-sozlesmesi.webp";

export const metadata: Metadata = {
  title: "ALTNY’den 134,1 Milyon Dolarlık Havacılık Ekipmanı Sözleşmesi",
  description:
    "ALTNY bağlı ortaklığı TAAC Havacılık, yurt içindeki bir müşteriyle kritik havacılık ekipmanı tedariki için KDV hariç 134,1 milyon dolarlık sözleşme imzaladı.",
  alternates: { canonical: haberUrl },
  openGraph: {
    type: "article",
    title: "ALTNY’den 134,1 Milyon Dolarlık Havacılık Ekipmanı Sözleşmesi",
    description:
      "Yeni sözleşmeyle Altınay Savunma Grubu’nun güncel iş birikimi 334 milyon dolara ulaştı.",
    url: haberUrl,
    images: [
      {
        url: haberGorsel,
        width: 1200,
        height: 675,
        alt: "ALTNY TAAC 134,1 milyon dolarlık havacılık ekipmanı sözleşmesi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ALTNY’den 134,1 Milyon Dolarlık Havacılık Ekipmanı Sözleşmesi",
    description:
      "TAAC Havacılık kritik havacılık ekipmanı tedariki için 134,1 milyon dolarlık sözleşme imzaladı.",
    images: [haberGorsel],
  },
};

const ozetKartlari = [
  { baslik: "Sözleşme Bedeli", deger: "134,1 Mn $", aciklama: "KDV hariç" },
  { baslik: "Güncel İş Birikimi", deger: "334 Mn $", aciklama: "Altınay Savunma Grubu" },
  { baslik: "Sözleşmeyi İmzalayan", deger: "TAAC", aciklama: "ALTNY bağlı ortaklığı" },
  { baslik: "Faaliyet Alanı", deger: "Havacılık", aciklama: "Kritik ekipman tedariki" },
];

const anaDetaylar = [
  ["Şirket", "Altınay Savunma Teknolojileri A.Ş."],
  ["Hisse Kodu", "ALTNY"],
  ["Bildirim Tarihi", "20.07.2026"],
  ["Bildirim Saati", "08:41:20"],
  ["Sözleşmeyi İmzalayan", "TAAC Havacılık Teknolojileri A.Ş."],
  ["Müşteri", "Yurt içinde yerleşik müşteri"],
  ["İşin Konusu", "Kritik havacılık ekipmanlarının tedariki"],
  ["Sözleşme Bedeli", "134.104.420 ABD doları"],
  ["Vergi Durumu", "KDV hariç"],
  ["İş İlişkisinin Başlangıcı", "20.07.2026"],
  ["Güncel Backlog", "334.000.000 ABD doları"],
  ["Faaliyetlere Etki", "Ciroya olumlu etki bekleniyor"],
];

const nedenOnemli = [
  {
    baslik: "Yüksek tutarlı yeni sipariş",
    aciklama:
      "134,1 milyon dolarlık sözleşme, Altınay Savunma Grubu’nun sipariş görünürlüğünü önemli ölçüde güçlendiren büyük ölçekli bir iş oldu.",
  },
  {
    baslik: "İş birikimi 334 milyon dolara ulaştı",
    aciklama:
      "Yeni sözleşmeyle grubun güncel backlog tutarı 334 milyon dolara çıktı. Bu rakam gelecek dönem gelirleri açısından önemli bir görünürlük sağlıyor.",
  },
  {
    baslik: "Kritik havacılık ekipmanları",
    aciklama:
      "Sözleşmenin yüksek katma değerli ve teknik yeterlilik gerektiren kritik havacılık ekipmanlarını kapsaması, grubun savunma ve havacılık alanındaki konumunu destekliyor.",
  },
  {
    baslik: "Yurt içi müşteriyle imzalandı",
    aciklama:
      "Müşterinin adı açıklanmadı ancak sözleşmenin yurt içinde yerleşik bir tarafla imzalandığı belirtildi.",
  },
];

const finansalOkuma = [
  "Sözleşme bedeli 134.104.420 ABD doları ve KDV hariç olarak açıklandı.",
  "Yeni iş, güncel 334 milyon dolarlık backlogun yaklaşık %40’ına karşılık geliyor.",
  "Gelir ve kâr katkısı teslimat takvimi ile hakediş dönemlerine göre finansallara yansıyacak.",
  "Şirket sözleşmenin ciroya olumlu etki yapmasını beklediğini açıkladı.",
  "Kâr marjı, teslim süresi, avans ve ödeme planı açıklanmadı.",
  "Döviz bazlı sözleşme, TL bazında gelir görünürlüğünü kur hareketlerine karşı destekleyebilir.",
];

const hisseOkumasi = [
  {
    baslik: "Güçlü pozitif haber",
    aciklama:
      "Sözleşme tutarının yüksekliği ve backlogu belirgin biçimde artırması nedeniyle haber hisse açısından güçlü pozitif okunabilir.",
  },
  {
    baslik: "Gelir görünürlüğü arttı",
    aciklama:
      "334 milyon dolarlık iş birikimi, gelecek dönemlerde tahakkuk edebilecek gelirler için daha net bir görünüm sağlıyor.",
  },
  {
    baslik: "Teslimat takvimi belirleyici",
    aciklama:
      "Sözleşmenin finansallara hangi hızla yansıyacağı; üretim, teslimat ve kabul takviminin açıklanmasıyla netleşecek.",
  },
];

const riskler = [
  "Sözleşmenin teslim ve tamamlanma takvimi açıklanmadı.",
  "Kâr marjı ve ödeme planı paylaşılmadı.",
  "Müşteri adı kamuya açıklanmadı.",
  "Yüksek tutarlı projelerde üretim ve tedarik takvimi riski bulunabilir.",
  "Gelirlerin finansallara yansıması teslimat ve kabul süreçlerine bağlı olacak.",
  "Sözleşme TAAC Havacılık tarafından imzalandığı için katkı bağlı ortaklık üzerinden oluşacak.",
];

const takipBasliklari = [
  "Sözleşmenin teslimat ve tamamlanma süresi",
  "Avans ve ödeme koşulları",
  "Yıllara göre ciro katkısı",
  "Beklenen brüt kâr ve FAVÖK marjı",
  "Yeni siparişlerle backlogun seyri",
  "TAAC Havacılık üretim kapasitesi",
  "Müşteri ve proje hakkında yapılabilecek yeni açıklamalar",
];

const seoSorular = [
  {
    soru: "ALTNY ne açıkladı?",
    cevap:
      "ALTNY, bağlı ortaklığı TAAC Havacılık’ın yurt içindeki bir müşteriyle kritik havacılık ekipmanı tedariki için 134,1 milyon dolarlık sözleşme imzaladığını açıkladı.",
  },
  {
    soru: "ALTNY sözleşme bedeli ne kadar?",
    cevap:
      "Sözleşme bedeli KDV hariç 134.104.420 ABD doları olarak açıklandı.",
  },
  {
    soru: "ALTNY backlog tutarı kaç dolar oldu?",
    cevap:
      "Yeni sözleşmenin ardından Altınay Savunma Grubu’nun güncel iş birikimi 334 milyon dolara ulaştı.",
  },
  {
    soru: "Sözleşmeyi ALTNY mi imzaladı?",
    cevap:
      "Sözleşme doğrudan ALTNY tarafından değil, şirketin bağlı ortaklığı TAAC Havacılık Teknolojileri A.Ş. tarafından imzalandı.",
  },
  {
    soru: "ALTNY sözleşmesinin müşterisi kim?",
    cevap:
      "Müşterinin adı açıklanmadı. KAP bildiriminde tarafın yurt içinde yerleşik bir müşteri olduğu belirtildi.",
  },
  {
    soru: "ALTNY haberi hisse için nasıl okunmalı?",
    cevap:
      "Yüksek sözleşme bedeli, döviz bazlı gelir potansiyeli ve backlogun 334 milyon dolara çıkması nedeniyle güçlü pozitif okunabilir.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "ALTNY’den 134,1 Milyon Dolarlık Havacılık Ekipmanı Sözleşmesi",
  description:
    "ALTNY bağlı ortaklığı TAAC Havacılık, yurt içindeki bir müşteriyle kritik havacılık ekipmanı tedariki için KDV hariç 134,1 milyon dolarlık sözleşme imzaladı.",
  image: haberGorsel,
  datePublished: "2026-07-20T08:41:20+03:00",
  dateModified: "2026-07-20T08:41:20+03:00",
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

export default function AltnyTaacHavacilikEkipmaniSozlesmesiPage() {
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
              src="/altny-taac-134-milyon-dolarlik-havacilik-ekipmani-sozlesmesi.webp"
              alt="ALTNY TAAC 134,1 milyon dolarlık havacılık ekipmanı sözleşmesi"
              fill
              unoptimized
              className="object-cover"
              priority
            />
          </div>

          <div className="p-6 md:p-10">
            <h1 className="text-2xl font-bold leading-tight tracking-tight text-slate-900 md:text-3xl lg:text-4xl">
              ALTNY’den 134,1 Milyon Dolarlık Havacılık Ekipmanı Sözleşmesi
            </h1>

            <div className="mb-5 mt-3 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center rounded-md bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700 ring-1 ring-inset ring-blue-600/20">
                Yeni İş İlişkisi
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
                Altınay Savunma Teknolojileri A.Ş. (
                <strong>ALTNY</strong>), bağlı ortaklığı TAAC Havacılık
                Teknolojileri A.Ş.’nin yurt içinde yerleşik bir müşteriyle
                kritik havacılık ekipmanlarının tedarikine yönelik yeni bir
                sözleşme imzaladığını açıkladı.
              </p>

              <p>
                Sözleşmenin toplam bedeli KDV hariç{" "}
                <strong>134.104.420 ABD doları</strong> olarak duyuruldu. Bu
                sözleşmeyle birlikte Altınay Savunma Grubu’nun güncel iş
                birikimi <strong>334 milyon dolara</strong> ulaştı.
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
                  ALTNY’nin bağlı ortaklığı TAAC Havacılık, kritik havacılık
                  ekipmanlarının tedarik edilmesi için yurt içindeki bir
                  müşteriyle 134,1 milyon dolarlık sözleşme imzaladı.
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">
                  Şirket, yeni iş ilişkisinin faaliyetlere ve ciroya olumlu etki
                  yapmasını beklediğini belirtti. Teslimat ve gelir kaydı
                  takvimi ise açıklamada paylaşılmadı.
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

              <Section title="ALTNY sözleşmesi hakkında kısa soru-cevap">
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
                  href="https://www.kap.org.tr/Bildirim/1634758"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="mt-2 inline-block font-medium text-slate-700 underline underline-offset-2"
                >
                  ALTNY — Orjinal Kap içeriği
                </a>
              </div>

              <HaberIlgiliBolumler
                slug={slug}
                baslik="ALTNY’den 134,1 Milyon Dolarlık Havacılık Ekipmanı Sözleşmesi"
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