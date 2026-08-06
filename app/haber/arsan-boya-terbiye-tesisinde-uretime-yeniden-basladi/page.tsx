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

const slug = "arsan-boya-terbiye-tesisinde-uretime-yeniden-basladi";
const haberUrl = `https://www.hocaileborsa.com/haber/${slug}`;
const haberGorsel =
  "https://www.hocaileborsa.com/arsan-boya-terbiye-tesisinde-uretime-yeniden-basladi.webp";

export const metadata: Metadata = {
  title: "ARSAN Boya Terbiye Tesisinde Üretime Yeniden Başladı",
  description:
    "ARSAN, 6 Şubat 2023 depreminde hasar gören boya terbiye tesislerinde onarımın tamamlandığını, yapı kullanma izninin alındığını ve üretime yeniden başlandığını açıkladı.",
  alternates: {
    canonical: haberUrl,
  },
  openGraph: {
    type: "article",
    title: "ARSAN Boya Terbiye Tesisinde Üretime Yeniden Başladı",
    description:
      "Depremde hasar gören tesislerin bakım ve onarımı tamamlandı. Üretim ilk aşamada tek vardiya başlayacak, kısa sürede üç vardiyaya çıkarılması hedefleniyor.",
    url: haberUrl,
    images: [
      {
        url: haberGorsel,
        width: 1200,
        height: 675,
        alt: "ARSAN boya terbiye tesisinde üretime yeniden başladı",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ARSAN Boya Terbiye Tesisinde Üretime Yeniden Başladı",
    description:
      "ARSAN, depremde hasar gören boya terbiye tesislerinde üretime yeniden başladı.",
    images: [haberGorsel],
  },
};

const ozetKartlari = [
  {
    baslik: "Faaliyet",
    deger: "Üretim Başladı",
    aciklama: "Boya terbiye faaliyeti yeniden devrede",
  },
  {
    baslik: "İzin",
    deger: "Alındı",
    aciklama: "Yapı kullanma izni tamamlandı",
  },
  {
    baslik: "İlk Aşama",
    deger: "1 Vardiya",
    aciklama: "Başlangıç üretim düzeni",
  },
  {
    baslik: "Hedef",
    deger: "3 Vardiya",
    aciklama: "Kısa sürede artırılması planlanıyor",
  },
];

const genelDetaylar = [
  {
    etiket: "Şirket",
    deger: "Arsan Holding A.Ş.",
  },
  {
    etiket: "Hisse Kodu",
    deger: "ARSAN",
  },
  {
    etiket: "Bildirim Tarihi",
    deger: "16.07.2026",
  },
  {
    etiket: "Bildirim Saati",
    deger: "18:03:09",
  },
  {
    etiket: "Bildirim Özeti",
    deger: "Boya terbiye üretim faaliyetine başlanması",
  },
  {
    etiket: "Hasarın Nedeni",
    deger: "6 Şubat 2023 depremi",
  },
  {
    etiket: "Tesis Sahibi",
    deger: "Arsan Dokuma Boya Sanayi ve Ticaret A.Ş.",
  },
  {
    etiket: "Faaliyeti Yürütecek Şirket",
    deger: "Arsan İnşaat Tekstil Turizm Sanayi ve Ticaret A.Ş.",
  },
  {
    etiket: "İştirak İlişkisi",
    deger: "Arsan Dokuma Boya’nın %100 bağlı ortaklığı",
  },
  {
    etiket: "Tamamlanan İşlemler",
    deger: "Onarım, bakım ve yapı kullanma izni",
  },
  {
    etiket: "Başlangıç Vardiyası",
    deger: "1 vardiya",
  },
  {
    etiket: "Hedeflenen Vardiya",
    deger: "3 vardiya",
  },
];

const surecAdimlari = [
  {
    baslik: "Tesis depremde hasar aldı",
    aciklama:
      "Bağlı ortaklığa ait boya terbiye tesisleri, 6 Şubat 2023 tarihinde meydana gelen depremde hasar gördü.",
  },
  {
    baslik: "Bakım ve onarım tamamlandı",
    aciklama:
      "Şirket açıklamasına göre tesiste yürütülen bakım ve onarım işlemleri tamamen bitirildi.",
  },
  {
    baslik: "Yapı kullanma izni alındı",
    aciklama:
      "16 Temmuz 2026 tarihi itibarıyla tesis için yapı kullanma izni alındı.",
  },
  {
    baslik: "Üretim yeniden başladı",
    aciklama:
      "İzin sürecinin tamamlanmasıyla birlikte boya terbiye üretim faaliyeti yeniden devreye alındı.",
  },
  {
    baslik: "Üç vardiya hedefleniyor",
    aciklama:
      "Üretim ilk etapta bir vardiya olarak başlayacak. Şirket, faaliyetlerin en kısa sürede üç vardiyaya çıkarılmasını hedefliyor.",
  },
];

const nedenOnemli = [
  {
    baslik: "Kapanan operasyon yeniden devrede",
    aciklama:
      "Deprem nedeniyle hasar gören bir üretim biriminin yeniden faaliyete alınması, ARSAN’ın operasyonel kapasitesinin toparlanması açısından önemli.",
  },
  {
    baslik: "İzin süreci tamamlandı",
    aciklama:
      "Yapı kullanma izninin alınması, tesisin yeniden faaliyete geçebilmesi için gerekli önemli idari aşamalardan birinin tamamlandığını gösteriyor.",
  },
  {
    baslik: "Üretim kademeli artırılacak",
    aciklama:
      "Faaliyetin bir vardiyayla başlayıp üç vardiyaya çıkarılmasının hedeflenmesi, üretim hacminin kademeli şekilde yükseltilmesinin planlandığına işaret ediyor.",
  },
  {
    baslik: "Parasal etki açıklanmadı",
    aciklama:
      "KAP açıklamasında kapasite, üretim miktarı, ciro veya kârlılık etkisine ilişkin sayısal bilgi verilmedi. Bu nedenle finansal katkı sonraki dönem sonuçlarıyla izlenecek.",
  },
];

const finansalOkuma = [
  "Boya terbiye faaliyetinin yeniden başlaması operasyonel açıdan olumlu.",
  "İlk aşamada tek vardiya üretim yapılacak.",
  "Üç vardiyaya geçiş, üretim hacmini artırabilecek temel unsur olacak.",
  "Açıklamada tesis kapasitesi veya beklenen üretim miktarı paylaşılmadı.",
  "Ciro ve kârlılık etkisine ilişkin parasal tahmin verilmedi.",
  "Finansal katkı, üretim seviyesinin yükselmesi ve sipariş akışıyla birlikte netleşecek.",
];

const hisseOkumasi = [
  {
    baslik: "İlk okuma pozitif",
    aciklama:
      "Deprem nedeniyle devre dışı kalan üretim tesisinin yeniden çalışmaya başlaması, hisse açısından operasyonel toparlanma haberi olarak pozitif okunabilir.",
  },
  {
    baslik: "Etkinin gücü henüz belli değil",
    aciklama:
      "Faaliyetin ilk etapta tek vardiya başlayacak olması ve kapasite bilgisi verilmemesi, haberin finansal büyüklüğünü şimdilik sınırlı ölçüde değerlendirmeye izin veriyor.",
  },
  {
    baslik: "Üç vardiya geçişi önemli",
    aciklama:
      "Üretimin üç vardiyaya çıkarılması halinde tesisin gelir katkısı daha belirgin hale gelebilir. Bu geçişe ilişkin yeni açıklamalar takip edilmeli.",
  },
];

const takipBasliklari = [
  "Üretimin üç vardiyaya çıkarılacağı tarih",
  "Tesisin güncel üretim kapasitesi",
  "Boya terbiye faaliyetinin ciroya katkısı",
  "Sipariş ve müşteri tarafındaki gelişmeler",
  "Bağlı ortaklıkların finansal sonuçlara etkisi",
  "ARSAN’ın sonraki dönem faaliyet raporları",
];

const seoSorular = [
  {
    soru: "ARSAN ne açıkladı?",
    cevap:
      "ARSAN, 6 Şubat 2023 depreminde hasar gören boya terbiye tesislerinde bakım ve onarımın tamamlandığını, yapı kullanma izninin alındığını ve üretime yeniden başlandığını açıkladı.",
  },
  {
    soru: "ARSAN boya terbiye tesisi ne zaman faaliyete başladı?",
    cevap:
      "Şirket açıklamasına göre boya terbiye faaliyeti 16 Temmuz 2026 tarihi itibarıyla yeniden başladı.",
  },
  {
    soru: "ARSAN tesisinde kaç vardiya üretim yapılacak?",
    cevap:
      "Üretim başlangıçta bir vardiya olarak yürütülecek. Şirket, çalışma düzenini en kısa sürede üç vardiyaya çıkarmayı hedefliyor.",
  },
  {
    soru: "Faaliyeti hangi şirket yürütecek?",
    cevap:
      "Boya terbiye faaliyeti, Arsan Dokuma Boya Sanayi ve Ticaret A.Ş.’nin %100 bağlı ortaklığı olan Arsan İnşaat Tekstil Turizm Sanayi ve Ticaret A.Ş. tarafından yürütülecek.",
  },
  {
    soru: "ARSAN haberi hisse için nasıl okunmalı?",
    cevap:
      "Deprem nedeniyle devre dışı kalan üretim tesisinin yeniden çalışmaya başlaması operasyonel açıdan olumlu. Ancak kapasite, ciro ve kârlılık etkisi açıklanmadığı için haberin finansal büyüklüğü sonraki dönemlerde netleşecek.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "ARSAN Boya Terbiye Tesisinde Üretime Yeniden Başladı",
  description:
    "ARSAN, 6 Şubat 2023 depreminde hasar gören boya terbiye tesislerinde onarımın tamamlandığını, yapı kullanma izninin alındığını ve üretime yeniden başlandığını açıkladı.",
  image: haberGorsel,
  datePublished: "2026-07-16T18:03:09+03:00",
  dateModified: "2026-07-16T18:03:09+03:00",
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

export default function ArsanBoyaTerbiyeTesisiPage() {
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
              src="/arsan-boya-terbiye-tesisinde-uretime-yeniden-basladi.webp"
              alt="ARSAN boya terbiye tesisinde üretime yeniden başladı"
              fill
              unoptimized
              className="object-cover"
              priority
            />
          </div>

          <div className="p-6 md:p-10">
            <h1 className="text-2xl font-bold leading-tight tracking-tight text-slate-900 md:text-3xl lg:text-4xl">
              ARSAN Boya Terbiye Tesisinde Üretime Yeniden Başladı
            </h1>

            <div className="mb-5 mt-3 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center rounded-md bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700 ring-1 ring-inset ring-emerald-600/20">
                Üretim Faaliyeti
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
                Arsan Holding A.Ş. (<strong>ARSAN</strong>), 6 Şubat 2023
                depreminde hasar gören boya terbiye tesislerinde bakım ve onarım
                çalışmalarının tamamen bitirildiğini açıkladı.
              </p>

              <p>
                Şirket, 16 Temmuz 2026 tarihi itibarıyla yapı kullanma izninin
                alındığını ve boya terbiye üretim faaliyetine yeniden başlandığını
                bildirdi. Üretim başlangıçta bir vardiya yürütülecek, en kısa
                sürede üç vardiyaya çıkarılması hedeflenecek.
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
                  Bağlı ortaklık Arsan Dokuma Boya Sanayi ve Ticaret A.Ş.’ye ait
                  boya terbiye tesisleri, 6 Şubat 2023 depreminde hasar görmüştü.
                  Tesiste yürütülen onarım ve bakım işlemleri tamamlandı.
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">
                  Yapı kullanma izninin alınmasının ardından üretim yeniden
                  başlatıldı. Faaliyet, Arsan Dokuma Boya’nın %100 bağlı ortaklığı
                  olan Arsan İnşaat Tekstil Turizm Sanayi ve Ticaret A.Ş.
                  tarafından yürütülecek.
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

              <Section title="Tesisin yeniden faaliyete geçiş süreci">
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
                  Üretim faaliyetinin yeniden başlaması, deprem nedeniyle kaybedilen
                  operasyonel kapasitenin yeniden devreye alınması anlamına geliyor.
                  Ancak açıklamada kapasite, üretim hacmi veya beklenen gelir katkısı
                  paylaşılmadığı için finansal etkinin büyüklüğü henüz net değil.
                </p>

                <div className="mt-4 grid gap-3">
                  {finansalOkuma.map((item) => (
                    <div
                      key={item}
                      className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm font-bold leading-6 text-emerald-900"
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

              <Section title="ARSAN üretim faaliyeti hakkında kısa soru-cevap">
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
                  href="https://www.kap.org.tr/Bildirim/1634170"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="mt-2 inline-block font-medium text-slate-700 underline underline-offset-2"
                >
                  ARSAN — Orjinal Kap içeriği
                </a>
              </div>

              <HaberIlgiliBolumler
                slug={slug}
                baslik="ARSAN Boya Terbiye Tesisinde Üretime Yeniden Başladı"
              />

              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm font-medium leading-7 text-amber-900 md:text-base">
                ⚠️ Bu haber bilgilendirme amacıyla hazırlanmıştır, yatırım
                tavsiyesi değildir. Üretim faaliyetinin finansal etkisi; kapasite,
                vardiya düzeni, sipariş akışı ve sonraki dönem finansal sonuçlarıyla
                birlikte değerlendirilmelidir.
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