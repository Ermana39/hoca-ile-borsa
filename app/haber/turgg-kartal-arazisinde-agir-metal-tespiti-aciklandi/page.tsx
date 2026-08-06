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

const slug = "turgg-kartal-arazisinde-agir-metal-tespiti-aciklandi";
const haberUrl = `https://www.hocaileborsa.com/haber/${slug}`;
const haberGorsel =
  "https://www.hocaileborsa.com/turgg-kartal-arazisinde-agir-metal-tespiti-aciklandi.webp";

export const metadata: Metadata = {
  title: "TURGG Kartal Arazisinde Ağır Metal Tespiti Açıklandı",
  description:
    "TURGG, Kartal Çavuşoğlu Mahallesi’ndeki arazisine ilişkin yapılan analizde yüksek oranda kurşun ve ağır metaller tespit edildiğini açıkladı.",
  alternates: {
    canonical: haberUrl,
  },
  openGraph: {
    type: "article",
    title: "TURGG Kartal Arazisinde Ağır Metal Tespiti Açıklandı",
    description:
      "TURGG arazisine ilişkin İstanbul Valiliği Çevre, Şehircilik ve İklim Değişikliği İl Müdürlüğü tarafından yapılan bildirim KAP’a açıklandı.",
    url: haberUrl,
    images: [
      {
        url: haberGorsel,
        width: 1200,
        height: 675,
        alt: "TURGG Kartal arazisinde ağır metal tespiti KAP haberi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TURGG Kartal Arazisinde Ağır Metal Tespiti Açıkladı",
    description:
      "Kartal Çavuşoğlu Mahallesi’ndeki arazide yüksek oranda kurşun ve ağır metal tespit edildi.",
    images: [haberGorsel],
  },
};

const ozetKartlari = [
  {
    baslik: "Haber Başlığı",
    deger: "Arazi Bildirimi",
    aciklama: "Çevresel risk süreci",
  },
  {
    baslik: "Tespit",
    deger: "Kurşun / Ağır Metal",
    aciklama: "Yüksek oran bildirildi",
  },
  {
    baslik: "Lokasyon",
    deger: "Kartal",
    aciklama: "Çavuşoğlu Mahallesi",
  },
  {
    baslik: "Hisse Etkisi",
    deger: "Negatif",
    aciklama: "Proje takvimi riski",
  },
];

const genelDetaylar = [
  {
    etiket: "Şirket",
    deger: "Türker Proje Gayrimenkul ve Yatırım Geliştirme A.Ş.",
  },
  {
    etiket: "Hisse Kodu",
    deger: "TURGG",
  },
  {
    etiket: "Bildirim Tarihi",
    deger: "16.07.2026",
  },
  {
    etiket: "Bildirim Saati",
    deger: "17:39:17",
  },
  {
    etiket: "Bildirim Türü",
    deger: "Özel Durum Açıklaması",
  },
  {
    etiket: "Konu",
    deger: "Şirket arazisine ilişkin resmi yazılı bildirim",
  },
  {
    etiket: "Yazıyı Gönderen Kurum",
    deger: "İstanbul Valiliği Çevre, Şehircilik ve İklim Değişikliği İl Müdürlüğü",
  },
  {
    etiket: "Resmi Yazı Tarihi",
    deger: "02.07.2026",
  },
  {
    etiket: "Arazi Lokasyonu",
    deger: "Kartal İlçesi, Çavuşoğlu Mahallesi, S9 Alt Planlama Bölgesi",
  },
  {
    etiket: "Şirkete Ait Parsel",
    deger: "12780 Ada 1 Parsel",
  },
  {
    etiket: "Maliye Hazinesi Parseli",
    deger: "12781 Ada 1 Parsel",
  },
  {
    etiket: "Önceki KAP Açıklaması",
    deger: "15.04.2026 tarihli tapu teslim açıklaması",
  },
];

const tespitler = [
  {
    baslik: "Toprak analizi yapıldı",
    aciklama:
      "Kartal İlçe Kurban Komisyonu tarafından kurban organizasyonu yapılabilmesi için ilgili alanda toprak analizi talep edildi.",
  },
  {
    baslik: "Ağır metal tespiti bildirildi",
    aciklama:
      "Yapılan analiz sonucunda ilgili arazide yüksek oranda kurşun ve ağır metaller tespit edildiği şirkete bildirildi.",
  },
  {
    baslik: "Kirlilik sınırlarının belirlenmesi istendi",
    aciklama:
      "Söz konusu kirliliğin kesin sınırlarının haritalandırılması için Saha Örnekleme ve Analiz Planı hazırlanması talep edildi.",
  },
  {
    baslik: "Saha güvenliği isteniyor",
    aciklama:
      "Mülkiyeti şirkete ait taşınmazlara insan ve hayvan girişinin engellenmesi için fiziksel güvenlik tedbirlerinin alınması istendi.",
  },
  {
    baslik: "İnşaat faaliyetleri için kısıt uyarısı var",
    aciklama:
      "Süreç devam ederken hafriyat, zemin sıyırma, sondaj, temel kazısı, toprak taşıma veya inşaat faaliyetine başlanmaması gerektiği bildirildi.",
  },
];

const resmiTalepler = [
  "Saha Örnekleme ve Analiz Planı hazırlanması",
  "SÖAP raporunun İl Müdürlüğü’ne iletilmesi",
  "Kirliliğin kesin sınırlarının haritalandırılması",
  "Sahanın temizlenmesine yönelik sürecin başlatılması",
  "İnsan ve hayvan girişini engelleyecek fiziksel güvenlik önlemlerinin alınması",
  "Hafriyat, zemin sıyırma, sondaj, temel kazısı ve toprak taşıma işlemlerine başlanmaması",
  "Kiralama, tahsis veya mülkiyet devri öncesinde çevresel risk durumunun dikkate alınması",
];

const nedenOnemli = [
  {
    baslik: "Arazi doğrudan şirket varlığıyla ilgili",
    aciklama:
      "Haber, şirketin Kartal Çavuşoğlu Mahallesi’nde yer alan arazisine ilişkin. Gayrimenkul şirketlerinde araziye dair çevresel riskler, değerleme ve proje takvimi açısından doğrudan önem taşır.",
  },
  {
    baslik: "Süreç proje geliştirme takvimini etkileyebilir",
    aciklama:
      "Resmi yazıda hafriyat, temel kazısı, sondaj ve inşaat faaliyetine başlanmaması gerektiği belirtiliyor. Bu ifade, olası proje geliştirme adımlarında zamanlama riski yaratabilir.",
  },
  {
    baslik: "Temizlik ve analiz süreci oluşacak",
    aciklama:
      "Kirliliğin sınırlarının belirlenmesi, SÖAP raporu hazırlanması ve sahanın temizlenmesine yönelik süreç, hem zaman hem de maliyet tarafında takip edilecek başlıklar oluşturuyor.",
  },
  {
    baslik: "Kısa vadeli hisse algısı negatif",
    aciklama:
      "Açıklama yeni bir satış, ruhsat, değer artışı veya proje başlangıcı değil; mevcut araziye ilişkin çevresel risk bildirimi. Bu nedenle haberin ilk okuması hisse açısından negatif tarafta kalıyor.",
  },
];

const finansalOkuma = [
  "Açıklamada doğrudan bir parasal tutar yer almıyor.",
  "Kirlilik sınırlarının belirlenmesi ve saha temizliği sürecinin maliyeti henüz açıklanmadı.",
  "Arazi üzerinde işlem, kiralama, tahsis, devir veya geliştirme adımları çevresel risk değerlendirmesine bağlı hale gelebilir.",
  "Hafriyat ve inşaat faaliyetine başlanmaması uyarısı, olası proje takviminde gecikme riski oluşturur.",
  "Şirketin yapacağı teknik çalışmalar ve sonraki KAP açıklamaları finansal etkiyi netleştirecek.",
];

const hisseOkumasi = [
  {
    baslik: "Haberin ilk etkisi",
    aciklama:
      "Bu açıklama TURGG açısından olumlu bir iş gelişmesi değil. Araziye ilişkin çevresel risk ve kullanım kısıtı başlıkları öne çıktığı için kısa vadede baskılayıcı algı yaratabilir.",
  },
  {
    baslik: "Belirsizlik nerede?",
    aciklama:
      "Kirliliğin sınırları, temizlik maliyeti, sürecin süresi ve arazinin kullanımına etkisi henüz net değil. Hisse tarafında asıl belirsizlik bu başlıklarda toplanıyor.",
  },
  {
    baslik: "Ne pozitif dönebilir?",
    aciklama:
      "Şirketin gerekli çalışmaları hızlı tamamlaması, temizleme sürecinin maliyet ve zaman açısından sınırlı kalması ve alan kullanımında kalıcı engel oluşmaması haberin negatif etkisini azaltabilir.",
  },
];

const takipBasliklari = [
  "Saha Örnekleme ve Analiz Planı hazırlığı",
  "SÖAP raporunun İl Müdürlüğü’ne sunulması",
  "Kirlilik sınırlarının teknik olarak netleşmesi",
  "Saha temizliği için maliyet ve takvim açıklaması",
  "Arazi üzerinde proje, kiralama veya devir sürecine etkisi",
  "TURGG tarafından yapılacak yeni KAP açıklamaları",
];

const seoSorular = [
  {
    soru: "TURGG ne açıkladı?",
    cevap:
      "TURGG, Kartal Çavuşoğlu Mahallesi’nde yer alan arazisine ilişkin İstanbul Valiliği Çevre, Şehircilik ve İklim Değişikliği İl Müdürlüğü tarafından yapılan yazılı bildirimi açıkladı.",
  },
  {
    soru: "TURGG arazisinde ne tespit edildi?",
    cevap:
      "Açıklamaya göre yapılan toprak analizi sonucunda ilgili arazide yüksek oranda kurşun ve ağır metaller tespit edildiği şirkete bildirildi.",
  },
  {
    soru: "TURGG için hangi çalışmalar isteniyor?",
    cevap:
      "Kirlilik sınırlarının haritalandırılması, Saha Örnekleme ve Analiz Planı hazırlanması, SÖAP raporunun İl Müdürlüğü’ne iletilmesi ve sahanın temizlenmesine yönelik çalışmalar isteniyor.",
  },
  {
    soru: "TURGG arazisinde inşaat faaliyeti yapılabilecek mi?",
    cevap:
      "Resmi yazıda süreç devam ederken hafriyat, zemin sıyırma, sondaj, temel kazısı, toprak taşıma veya inşaat faaliyetine başlanmaması gerektiği belirtildi.",
  },
  {
    soru: "TURGG haberi hisse için nasıl okunmalı?",
    cevap:
      "Haber, araziye ilişkin çevresel risk ve olası kullanım kısıtları içerdiği için kısa vadede negatif okunabilir. Sonraki etki, teknik rapor, temizlik süreci, maliyet ve zamanlama açıklamalarıyla netleşir.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "TURGG Kartal Arazisinde Ağır Metal Tespiti Açıklandı",
  description:
    "TURGG, Kartal Çavuşoğlu Mahallesi’ndeki arazisine ilişkin yapılan analizde yüksek oranda kurşun ve ağır metaller tespit edildiğini açıkladı.",
  image: haberGorsel,
  datePublished: "2026-07-16T17:39:17+03:00",
  dateModified: "2026-07-16T17:39:17+03:00",
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

export default function TurggKartalArazisiAgirMetalTespitiPage() {
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
              src="/turgg-kartal-arazisinde-agir-metal-tespiti-aciklandi.webp"
              alt="TURGG Kartal arazisinde ağır metal tespiti KAP haberi"
              fill
              unoptimized
              className="object-cover"
              priority
            />
          </div>

          <div className="p-6 md:p-10">
            <h1 className="text-2xl font-bold leading-tight tracking-tight text-slate-900 md:text-3xl lg:text-4xl">
              TURGG Kartal Arazisinde Ağır Metal Tespiti Açıklandı
            </h1>

            <div className="mb-5 mt-3 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center rounded-md bg-red-50 px-2.5 py-1 text-xs font-semibold text-red-700 ring-1 ring-inset ring-red-600/20">
                Arazi Riski
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
                Türker Proje Gayrimenkul ve Yatırım Geliştirme A.Ş. (
                <strong>TURGG</strong>), Kartal Çavuşoğlu Mahallesi’nde yer alan
                arazisine ilişkin resmi yazılı bildirimi KAP üzerinden açıkladı.
              </p>

              <p>
                Açıklamaya göre ilgili arazide yapılan toprak analizi sonucunda{" "}
                <strong>yüksek oranda kurşun ve ağır metaller</strong> tespit
                edildiği şirkete bildirildi. Resmi yazıda; kirliliğin sınırlarının
                haritalandırılması, SÖAP raporu hazırlanması, saha temizliği ve
                fiziksel güvenlik önlemleri gibi başlıklar yer aldı.
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
                    <div className="mt-1 text-2xl font-bold text-red-950">
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
                  TURGG, şirketin Kartal İlçesi Çavuşoğlu Mahallesi S9 Alt
                  Planlama Bölgesi’nde kalan arazisine ilişkin İstanbul Valiliği
                  Çevre, Şehircilik ve İklim Değişikliği İl Müdürlüğü tarafından
                  yapılan yazılı bildirimi duyurdu.
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">
                  Bildirimde, 15 Nisan 2026 tarihli KAP açıklamasıyla tapularının
                  teslim alındığı açıklanan şirket arazisiyle bağlantılı olarak
                  yapılan analizlerde yüksek oranda kurşun ve ağır metal tespit
                  edildiği belirtildi.
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

              <Section title="Arazide hangi tespitler yapıldı?">
                <div className="grid gap-4">
                  {tespitler.map((item) => (
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

              <Section title="Resmi yazıda istenen başlıklar">
                <div className="grid gap-3">
                  {resmiTalepler.map((item) => (
                    <div
                      key={item}
                      className="rounded-xl border border-orange-200 bg-orange-50 p-4 text-sm font-bold leading-6 text-orange-900"
                    >
                      {item}
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
                  KAP açıklamasında parasal bir etki paylaşılmadı. Ancak araziye
                  ilişkin çevresel risk bildirimi, gayrimenkul geliştirme tarafında
                  değerleme, kullanım, devir, kiralama ve proje takvimi açısından
                  takip edilmesi gereken bir başlık oluşturuyor.
                </p>

                <div className="mt-4 grid gap-3">
                  {finansalOkuma.map((item) => (
                    <div
                      key={item}
                      className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm font-semibold leading-6 text-slate-700"
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

              <Section title="TURGG arazi bildirimi hakkında kısa soru-cevap">
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
                  href="https://www.kap.org.tr/Bildirim/1634159"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="mt-2 inline-block font-medium text-slate-700 underline underline-offset-2"
                >
                  TURGG — Orjinal Kap içeriği
                </a>
              </div>

              <HaberIlgiliBolumler
                slug={slug}
                baslik="TURGG Kartal Arazisinde Ağır Metal Tespiti Açıklandı"
              />

              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm font-medium leading-7 text-amber-900 md:text-base">
                ⚠️ Bu haber bilgilendirme amacıyla hazırlanmıştır, yatırım
                tavsiyesi değildir. Araziye ilişkin çevresel riskler; teknik rapor,
                saha temizliği, maliyet, süre ve resmi süreçlerin sonucuyla birlikte
                değerlendirilmelidir.
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