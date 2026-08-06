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

const slug = "kocmt-mus-ges-finansal-kiralama-sozlesmesi";
const haberUrl = `https://www.hocaileborsa.com/haber/${slug}`;
const haberGorsel =
  "https://www.hocaileborsa.com/kocmt-mus-ges-finansal-kiralama-sozlesmesi.webp";

export const metadata: Metadata = {
  title: "KOCMT Muş GES İçin 14,28 Milyon Dolarlık Finansman Sağladı",
  description:
    "Koç Metalurji, Muş'ta planlanan 22,5 MWe GES projesi için QNB Finansal Kiralama ile 14,28 milyon dolar tutarında finansal kiralama sözleşmesi imzaladı.",
  alternates: {
    canonical: haberUrl,
  },
  openGraph: {
    type: "article",
    title: "KOCMT Muş GES İçin 14,28 Milyon Dolarlık Finansman Sağladı",
    description:
      "Koç Metalurji, 22,5 MWe gücündeki Muş GES projesi için 18 ay ana para geri ödemesiz, toplam 72 ay vadeli finansal kiralama sözleşmesi imzaladı.",
    url: haberUrl,
    images: [
      {
        url: haberGorsel,
        width: 1200,
        height: 675,
        alt: "KOCMT Muş GES finansal kiralama sözleşmesi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "KOCMT Muş GES İçin 14,28 Milyon Dolarlık Finansman Sağladı",
    description:
      "KOCMT, Muş'taki 22,5 MWe GES yatırımı için QNB Finansal Kiralama ile 14,28 milyon dolarlık sözleşme imzaladı.",
    images: [haberGorsel],
  },
};

const ozetKartlari = [
  {
    baslik: "Proje Gücü",
    deger: "22,5 MWe",
    aciklama: "GES kurulu gücü",
  },
  {
    baslik: "Finansman Tutarı",
    deger: "14,28 Mn USD",
    aciklama: "KDV dahil finansal kiralama",
  },
  {
    baslik: "Vade",
    deger: "72 Ay",
    aciklama: "Toplam sözleşme süresi",
  },
  {
    baslik: "Geri Ödeme",
    deger: "18 Ay",
    aciklama: "Ana para geri ödemesiz dönem",
  },
];

const genelDetaylar = [
  { etiket: "Şirket", deger: "Koç Metalurji A.Ş." },
  { etiket: "Hisse Kodu", deger: "KOCMT" },
  { etiket: "Bildirim Tarihi", deger: "14.07.2026" },
  { etiket: "Bildirim Saati", deger: "18:44:31" },
  { etiket: "Açıklama Türü", deger: "Özel Durum Açıklaması (Genel)" },
  { etiket: "Özet Bilgi", deger: "Güneş Enerjisi Santrali (GES) Yatırımı" },
  { etiket: "Önceki Açıklamalar", deger: "09.09.2025, 26.09.2025, 06.02.2026" },
  { etiket: "Proje Lokasyonu", deger: "Muş / Merkez / Aşağısızma Mahallesi" },
  { etiket: "Ada / Parsel", deger: "104 Ada 1 Parsel" },
  { etiket: "Kurulu Güç", deger: "22.500 kWe / 22,5 MWe" },
  { etiket: "Finansman Sağlayan Kurum", deger: "QNB Finansal Kiralama A.Ş." },
  { etiket: "Sözleşme Tutarı", deger: "14.279.492,50 USD" },
  { etiket: "Tutar Notu", deger: "KDV dahil" },
  { etiket: "Toplam Vade", deger: "72 ay" },
  { etiket: "Ana Para Geri Ödemesiz Dönem", deger: "18 ay" },
  { etiket: "Açıklama Güncelleme mi?", deger: "Evet" },
];

const finansmanDetaylari = [
  {
    baslik: "Finansal kiralama modeli seçildi",
    aciklama:
      "KOCMT, Muş'ta planlanan GES yatırımı için doğrudan öz kaynak kullanımı yerine finansal kiralama sözleşmesiyle yatırım finansmanı sağladı. Bu yapı, proje yatırımının nakit çıkışını daha uzun vadeye yayma imkânı verir.",
  },
  {
    baslik: "18 ay ana para geri ödemesiz dönem var",
    aciklama:
      "Sözleşmede ilk 18 ay ana para geri ödemesiz dönem bulunuyor. Bu detay, tesisin yatırım ve kurulum süreciyle nakit ödeme takvimi arasında daha kontrollü bir geçiş alanı oluşturabilir.",
  },
  {
    baslik: "Tutar dolar bazında açıklandı",
    aciklama:
      "Finansman tutarının 14,28 milyon dolar olarak açıklanması, yatırımın döviz bazlı yükümlülük tarafını öne çıkarıyor. Bu nedenle ilerleyen dönemlerde kur hareketleri ve ödeme planı finansal tablolar açısından izlenecek başlıklar arasında yer alacak.",
  },
];

const nedenOnemli = [
  {
    baslik: "Enerji maliyeti demir-çelik üretiminde kritik kalem",
    aciklama:
      "Koç Metalurji'nin ana faaliyeti ham çelik ve sıcak haddelenmiş demir-çelik ürünleri üretimi. Bu iş kolunda elektrik maliyeti, üretim kârlılığı ve maliyet yönetimi üzerinde doğrudan etkili olabilen önemli başlıklardan biri.",
  },
  {
    baslik: "GES yatırımı operasyonel maliyet okuması sağlar",
    aciklama:
      "22,5 MWe kurulu güce sahip GES projesi devreye alındığında şirketin elektrik tüketimi tarafında daha dengeli bir maliyet yapısı oluşturması beklenebilir. Etkinin büyüklüğü, tesisin üretim performansı ve şirketin toplam enerji tüketimiyle birlikte netleşir.",
  },
  {
    baslik: "Finansman yapısı bilanço açısından izlenecek",
    aciklama:
      "GES yatırımı olumlu bir operasyonel adım olarak okunurken, finansal kiralama sözleşmesi aynı zamanda uzun vadeli ödeme yükümlülüğü yaratır. Bu nedenle yatırımın bilanço etkisi sadece kurulu güç üzerinden değil, borçlanma ve nakit akışı üzerinden de değerlendirilmeli.",
  },
];

const sirketHakkinda = [
  "Koç Metalurji, demir-çelik sektöründe faaliyet gösteren ve ana faaliyet alanı ham çelik, sıcak haddelenmiş demir-çelik ürünleri, nervürlü betonarme demiri ve inşaat demiri üretimi olan bir sanayi şirketidir.",
  "Şirketin faaliyet modeli enerji yoğun üretim yapısı nedeniyle elektrik maliyetlerine duyarlı bir çerçeveye sahiptir. Bu nedenle yenilenebilir enerji yatırımları, yalnızca çevresel başlıklar açısından değil, üretim maliyeti ve sürdürülebilirlik tarafında da anlam taşır.",
  "Muş GES projesi, KOCMT'nin enerji tarafında daha bağımsız ve öngörülebilir bir yapı kurma hedefiyle okunabilecek bir yatırım başlığı olarak öne çıkıyor.",
];

const degerlendirmeMaddeleri = [
  "KAP açıklaması yeni bir satış ya da sipariş haberi değil; şirketin enerji yatırımına yönelik finansman adımı niteliğinde.",
  "22,5 MWe büyüklüğündeki GES projesi, üretim maliyetleri açısından orta-uzun vadeli bir etki alanı oluşturabilir.",
  "14,28 milyon dolarlık finansal kiralama tutarı, yatırımın finansman boyutunu ve döviz bazlı yükümlülük tarafını öne çıkarıyor.",
  "18 ay ana para geri ödemesiz dönem, yatırımın ilk aşamasında nakit akışını rahatlatabilecek bir ödeme yapısı sunuyor.",
  "Hisse açısından asıl etki, projenin devreye alma takvimi, üretim katkısı ve finansal tablolara yansımasıyla daha net okunacaktır.",
];

const takipBasliklari = [
  "GES projesinin inşaat ve devreye alma takvimi",
  "Yatırımın toplam maliyetinin nihai seviyeye nasıl oturacağı",
  "Finansal kiralama yükümlülüğünün bilanço ve nakit akışına etkisi",
  "Döviz bazlı borçlanmanın kur farkı etkisi",
  "Tesis devreye girdikten sonra elektrik maliyetlerinde oluşabilecek tasarruf",
  "Şirketin sonraki KAP açıklamalarında paylaşacağı proje gelişmeleri",
];

const seoSorular = [
  {
    soru: "KOCMT ne açıkladı?",
    cevap:
      "KOCMT, Muş ili Merkez ilçesi Aşağısızma Mahallesi'nde planlanan 22,5 MWe gücündeki GES projesi için finansal kiralama sözleşmesi imzaladığını açıkladı.",
  },
  {
    soru: "KOCMT finansal kiralama sözleşmesi kaç dolar?",
    cevap:
      "Şirketin QNB Finansal Kiralama A.Ş. ile imzaladığı sözleşme KDV dahil 14.279.492,50 dolar tutarında açıklandı.",
  },
  {
    soru: "KOCMT GES projesinin gücü ne kadar?",
    cevap:
      "KAP açıklamasına göre proje 22.500 kWe, diğer ifadeyle 22,5 MWe kurulu güce sahip olacak şekilde planlanıyor.",
  },
  {
    soru: "KOCMT finansman vadesi kaç ay?",
    cevap:
      "Finansal kiralama sözleşmesi 18 ay ana para geri ödemesiz dönemle birlikte toplam 72 ay vadeli olarak imzalandı.",
  },
  {
    soru: "KOCMT GES yatırımı hisse için neden önemli?",
    cevap:
      "GES yatırımı, enerji yoğun üretim yapan şirketin elektrik maliyetleri, sürdürülebilirlik yapısı, finansman yükümlülüğü ve uzun vadeli nakit akışı açısından önemli bir gelişme olarak değerlendirilebilir.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "KOCMT Muş GES İçin 14,28 Milyon Dolarlık Finansman Sağladı",
  description:
    "Koç Metalurji, Muş'ta planlanan 22,5 MWe GES projesi için QNB Finansal Kiralama ile 14,28 milyon dolar tutarında finansal kiralama sözleşmesi imzaladı.",
  image: haberGorsel,
  datePublished: "2026-07-14T18:44:31+03:00",
  dateModified: "2026-07-14T18:44:31+03:00",
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

export default function KocmtMusGesFinansalKiralamaHaberiPage() {
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
              src="/kocmt-mus-ges-finansal-kiralama-sozlesmesi.webp"
              alt="KOCMT Muş GES finansal kiralama sözleşmesi"
              fill
              sizes="(min-width: 1024px) 896px, 100vw"
              className="object-cover"
              priority
            />
          </div>

          <div className="p-6 md:p-10">
            <h1 className="text-2xl font-bold leading-tight tracking-tight text-slate-900 md:text-3xl lg:text-4xl">
              KOCMT Muş GES İçin 14,28 Milyon Dolarlık Finansman Sağladı
            </h1>

            <div className="mb-5 mt-3 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center rounded-md bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700 ring-1 ring-inset ring-blue-600/20">
                Enerji Yatırımı
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
                Koç Metalurji A.Ş. (<strong>KOCMT</strong>), Muş'ta
                gerçekleştirilmesi planlanan güneş enerjisi santrali yatırımı
                için finansal kiralama sözleşmesi imzaladığını açıkladı.
              </p>

              <p>
                KAP açıklamasına göre proje, Muş ili Merkez ilçesi Aşağısızma
                Mahallesi'nde <strong>22.500 kWe / 22,5 MWe</strong> kurulu güce
                sahip GES olarak planlanıyor. Şirket, söz konusu yatırım için
                QNB Finansal Kiralama A.Ş. ile <strong>KDV dahil 14.279.492,50
                dolar</strong> tutarında sözleşme imzaladı. Sözleşme,
                <strong> 18 ay ana para geri ödemesiz</strong> olmak üzere toplam
                <strong> 72 ay</strong> vadeli yapılandırıldı.
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
                  KOCMT, daha önce duyurduğu GES yatırımına ilişkin yeni bir
                  finansman adımı attı. Şirketin açıklamasına göre Muş'ta
                  planlanan 22,5 MWe gücündeki güneş enerjisi santrali projesi
                  için QNB Finansal Kiralama A.Ş. ile finansal kiralama
                  sözleşmesi imzalandı.
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">
                  Açıklama güncelleme niteliğinde yapıldı. Şirket bu projeye
                  ilişkin önceki bilgilendirmelerin 09.09.2025, 26.09.2025 ve
                  06.02.2026 tarihlerinde yapıldığını belirtti.
                </p>
              </Section>

              <Section title="GES yatırımının detayları">
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

              <Section title="Finansman yapısı nasıl?">
                <div className="grid gap-4">
                  {finansmanDetaylari.map((item) => (
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

              <Section title="Şirket hakkında">
                <div className="space-y-3 text-sm leading-7 text-slate-600 md:text-base">
                  {sirketHakkinda.map((item) => (
                    <p key={item}>{item}</p>
                  ))}
                </div>
              </Section>

              <Section title="Hisse açısından okuma">
                <p className="text-sm leading-7 text-slate-600 md:text-base">
                  KOCMT açısından bu haber, doğrudan yeni gelir yaratan bir
                  sözleşmeden çok üretim maliyetlerini ve enerji tedarik yapısını
                  orta-uzun vadede etkileyebilecek bir yatırım finansmanı olarak
                  okunmalı. Demir-çelik üretiminde elektrik tüketimi önemli bir
                  maliyet başlığı olduğu için GES projesinin devreye alınması,
                  şirketin maliyet görünümüne katkı sağlayabilecek bir alan
                  oluşturabilir.
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

              <Section title="KOCMT GES yatırımı hakkında kısa soru-cevap">
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
                  href="https://www.kap.org.tr/Bildirim/1633775"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="mt-2 inline-block font-medium text-slate-700 underline underline-offset-2"
                >
                  KOCMT — Orjinal Kap içeriği
                </a>
              </div>

              <HaberIlgiliBolumler
                slug={slug}
                baslik="KOCMT Muş GES İçin 14,28 Milyon Dolarlık Finansman Sağladı"
              />

              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm font-medium leading-7 text-amber-900 md:text-base">
                ⚠️ Bu haber bilgilendirme amacıyla hazırlanmıştır, yatırım
                tavsiyesi değildir. Enerji yatırımları, finansman yapısı ve
                proje gelişmeleri şirketin maliyet görünümü açısından önem
                taşısa da yatırım kararları tek bir haber akışına göre
                verilmemelidir.
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