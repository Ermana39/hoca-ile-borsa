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

const slug = "cwene-gunes-hucresi-verimliligi-2511-dogrulandi";
const haberUrl = `https://www.hocaileborsa.com/haber/${slug}`;
const haberGorsel =
  "https://www.hocaileborsa.com/cwene-gunes-hucresi-verimliligi-2511-dogrulandi.webp";

export const metadata: Metadata = {
  title: "CWENE Güneş Hücresinde %25,11 Verimlilik Doğrulandı",
  description:
    seoAciklamasi("CW Enerji, bağlı ortaklığı CW Solar Cell’in seri üretim hattından alınan G12R güneş hücrelerinde %25,11 verimlilik değerinin Fraunhofer ISE tarafından doğrulandığını açıkladı.", "Haberde gelişmenin ayrıntıları, açıklanan veriler ve yatırımcıların izleyebileceği temel noktalar yer alıyor."),
  alternates: {
    canonical: haberUrl,
  },
  openGraph: {
    type: "article",
    title: "CWENE Güneş Hücresinde %25,11 Verimlilik Doğrulandı",
    description:
      "CWENE, yüksek verimli güneş hücresi Ar-Ge çalışmalarında %25,11 hücre verimliliğinin kalibrasyon sertifikasıyla doğrulandığını duyurdu.",
    url: haberUrl,
    images: [
      {
        url: haberGorsel,
        width: 1200,
        height: 675,
        alt: "CWENE güneş hücresi verimliliği yüzde 25,11 doğrulandı",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CWENE Güneş Hücresinde %25,11 Verimlilik Doğrulandı",
    description:
      "CW Solar Cell’in seri üretim hattından alınan G12R hücrelerde %25,11 verimlilik Fraunhofer ISE tarafından doğrulandı.",
    images: [haberGorsel],
  },
};

const ozetKartlari = [
  {
    baslik: "Doğrulanan Verimlilik",
    deger: "%25,11",
    aciklama: "Fraunhofer ISE kalibrasyon sertifikası",
  },
  {
    baslik: "Önceki Seviye",
    deger: "%25,03",
    aciklama: "04.11.2025 açıklamasında duyurulmuştu",
  },
  {
    baslik: "Hücre Boyutu",
    deger: "G12R",
    aciklama: "182,3 x 210 mm örnek hücreler",
  },
  {
    baslik: "Üretim Hattı",
    deger: "CW Solar Cell",
    aciklama: "Bağlı ortaklığın seri üretim hattı",
  },
];

const genelDetaylar = [
  {
    etiket: "Şirket",
    deger: "CW Enerji Mühendislik Ticaret ve Sanayi A.Ş.",
  },
  {
    etiket: "Hisse Kodu",
    deger: "CWENE",
  },
  {
    etiket: "Bildirim Tarihi",
    deger: "16.07.2026",
  },
  {
    etiket: "Bildirim Saati",
    deger: "09:21:18",
  },
  {
    etiket: "Açıklama Konusu",
    deger: "Güneş Hücresi Verimliliği Konulu Ar-Ge Faaliyetleri",
  },
  {
    etiket: "Açıklama Güncelleme mi?",
    deger: "Evet",
  },
  {
    etiket: "Önceki Açıklama Tarihi",
    deger: "04.11.2025",
  },
  {
    etiket: "Test Merkezi",
    deger: "Fraunhofer ISE",
  },
  {
    etiket: "Bağlı Ortaklık",
    deger: "CW Solar Cell Enerji A.Ş.",
  },
  {
    etiket: "Doğrulanan Yeni Verimlilik",
    deger: "%25,11",
  },
  {
    etiket: "Örnek Hücre Ölçüsü",
    deger: "182,3 x 210 mm",
  },
  {
    etiket: "Seri Üretim Verimlilik Seviyesi",
    deger: "%25,1 ve üzeri",
  },
];

const gelisimTablosu = [
  {
    tarih: "04.11.2025",
    gelisme:
      "Fraunhofer ISE tarafından seri üretim hattı hücrelerinde %25,03 hücre verimliliği doğrulanmıştı.",
  },
  {
    tarih: "16.07.2026",
    gelisme:
      "CW Solar Cell seri üretim hattından alınan G12R örnek hücrelerde %25,11 verimlilik kalibrasyon sertifikasıyla doğrulandı.",
  },
  {
    tarih: "Güncel Sonuç",
    gelisme:
      "Seri üretimde üretilen hücrelerin verimlilik değerlerinin ve dağılımının %25,1 ve üzeri seviyelerde olduğu teyit edildi.",
  },
];

const nedenOnemli = [
  {
    baslik: "Ar-Ge sonucunun üretim hattında doğrulanması önemli",
    aciklama:
      "Güneş hücresi verimliliğinde laboratuvar sonucu ile seri üretim hattı sonucu aynı anlama gelmez. CWENE açıklamasında doğrulanan veri seri üretim hattından alınan örnek hücreler üzerinden geldiği için haberin teknik ağırlığı artıyor.",
  },
  {
    baslik: "Verimlilik artışı ürün rekabetini destekler",
    aciklama:
      "Güneş paneli ve hücre üretiminde verimlilik seviyesi ürün performansı, satış kabiliyeti ve rekabet gücü açısından kritik bir gösterge. %25,11 seviyesinin bağımsız test merkezi tarafından doğrulanması teknoloji tarafındaki ilerlemeyi görünür hale getiriyor.",
  },
  {
    baslik: "Test cihazı kalibrasyonları güncellendi",
    aciklama:
      "Doğrulama sonrası seri üretim hattındaki test cihazlarının kalibrasyonları güncellendi. Bu adım, üretim hattındaki verimlilik ölçümlerinin yeni doğrulama seviyesine göre takip edilmesini sağlıyor.",
  },
  {
    baslik: "Doğrudan ciro değil, teknoloji ve kalite göstergesi",
    aciklama:
      "Bu açıklama yeni sözleşme veya satış geliri açıklaması değil. Etki daha çok üretim kalitesi, Ar-Ge başarısı ve ürün rekabetçiliği tarafında okunmalı.",
  },
];

const finansalOkuma = [
  "Bildirimde parasal sözleşme tutarı, sipariş büyüklüğü veya doğrudan ciro etkisi açıklanmadı.",
  "Gelişme, CWENE’nin güneş hücresi teknolojisi ve üretim kabiliyeti açısından pozitif okunabilecek bir Ar-Ge başlığı.",
  "Seri üretim hattında yüksek verimlilik seviyesinin teyit edilmesi, ürün gamının rekabetçiliğini destekleyebilir.",
  "Finansal etki kısa vadede tek başına rakamsal olarak ölçülemez; satış fiyatları, sipariş hacmi, üretim maliyeti ve kapasite kullanımıyla netleşir.",
  "Şirketin bu verimlilik seviyesini ticari siparişlere ve kârlılığa ne kadar yansıtabileceği sonraki dönemlerde takip edilecek.",
];

const hisseOkumasi = [
  {
    baslik: "Kısa vadeli haber etkisi",
    aciklama:
      "Haber teknik olarak olumlu bir Ar-Ge gelişmesi. Özellikle yenilenebilir enerji ve teknoloji üretimi temasında dikkat çekebilecek bir başlık.",
  },
  {
    baslik: "Orta vadeli etki",
    aciklama:
      "Asıl değer, bu verimlilik seviyesinin üretim kalitesi, satış performansı ve marjlara yansımasıyla oluşur. Tek başına verimlilik sertifikası bilanço etkisini göstermiyor.",
  },
  {
    baslik: "Riskli taraf",
    aciklama:
      "Açıklamada yeni sipariş, gelir tutarı veya kapasite artışı yer almıyor. Bu nedenle haber, doğrudan finansal büyüklük açıklaması gibi okunmamalı.",
  },
];

const takipBasliklari = [
  "Yüksek verimli hücrelerin ticari satışlara yansıması",
  "CW Solar Cell üretim hattında verimlilik dağılımının korunması",
  "Yeni verimlilik seviyesinin panel ürünlerine etkisi",
  "Sipariş, ihracat veya müşteri anlaşması açıklamaları",
  "Üretim maliyeti ve kârlılık tarafındaki yansımalar",
  "Ar-Ge çalışmalarında yeni verimlilik hedefleri",
];

const seoSorular = [
  {
    soru: "CWENE ne açıkladı?",
    cevap:
      "CWENE, bağlı ortaklığı CW Solar Cell’in seri üretim hattından alınan G12R güneş hücrelerinde %25,11 hücre verimliliğinin Fraunhofer ISE tarafından kalibrasyon sertifikasıyla doğrulandığını açıkladı.",
  },
  {
    soru: "CWENE güneş hücresi verimlilik oranı kaç oldu?",
    cevap:
      "Şirketin açıklamasına göre yeni doğrulanan hücre verimlilik değeri %25,11 oldu. Önceki açıklamada %25,03 verimlilik duyurulmuştu.",
  },
  {
    soru: "CWENE açıklamasında hangi kurum doğrulama yaptı?",
    cevap:
      "Doğrulama Fraunhofer ISE test merkezi tarafından yapıldı. Örnek hücreler CW Solar Cell’in seri üretim hattından alındı.",
  },
  {
    soru: "CWENE haberinin finansal etkisi var mı?",
    cevap:
      "Açıklamada doğrudan ciro, sipariş veya sözleşme tutarı yer almadı. Haber daha çok Ar-Ge başarısı, üretim kalitesi ve ürün rekabetçiliği açısından okunmalı.",
  },
  {
    soru: "CWENE hissesinde bu haber nasıl okunmalı?",
    cevap:
      "Teknoloji ve üretim kabiliyeti açısından pozitif bir gelişme. Ancak kalıcı finansal etki için yeni siparişler, satış hacmi, kapasite kullanımı ve kârlılık verileri izlenmeli.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "CWENE Güneş Hücresinde %25,11 Verimlilik Doğrulandı",
  description:
    "CW Enerji, bağlı ortaklığı CW Solar Cell’in seri üretim hattından alınan G12R güneş hücrelerinde %25,11 verimlilik değerinin Fraunhofer ISE tarafından doğrulandığını açıkladı.",
  image: haberGorsel,
  datePublished: "2026-07-16T09:21:18+03:00",
  dateModified: "2026-07-16T09:21:18+03:00",
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

export default function CweneGunesHucresiVerimliligiPage() {
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
              src="/cwene-gunes-hucresi-verimliligi-2511-dogrulandi.webp"
              alt="CWENE güneş hücresi verimliliği yüzde 25,11 doğrulandı"
              fill
              unoptimized
              className="object-cover"
              priority
            />
          </div>

          <div className="p-6 md:p-10">
            <h1 className="text-2xl font-bold leading-tight tracking-tight text-slate-900 md:text-3xl lg:text-4xl">
              CWENE Güneş Hücresinde %25,11 Verimlilik Doğrulandı
            </h1>

            <div className="mb-5 mt-3 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center rounded-md bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700 ring-1 ring-inset ring-blue-600/20">
                Ar-Ge
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
                CW Enerji Mühendislik Ticaret ve Sanayi A.Ş. (
                <strong>CWENE</strong>), güneş hücresi verimliliği konulu Ar-Ge
                faaliyetlerine ilişkin yeni bir KAP açıklaması yayımladı.
                Açıklamada, bağlı ortaklık <strong>CW Solar Cell Enerji A.Ş.</strong>
                seri üretim hattından alınan örnek hücrelerde{" "}
                <strong>%25,11 hücre verimliliği</strong> değerinin doğrulandığı
                bildirildi.
              </p>

              <p>
                Şirket, G12R boyutundaki <strong>182,3 x 210 mm</strong> örnek
                hücrelerin Fraunhofer ISE test merkezine gönderildiğini ve yapılan
                ölçümler sonucunda %25,11 verimlilik değerinin kalibrasyon
                sertifikasıyla teyit edildiğini açıkladı.
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
                  CWENE, 04.11.2025 tarihinde duyurduğu %25,03 hücre verimliliği
                  açıklamasının devamı niteliğinde yeni bir doğrulama paylaştı.
                  Yeni ölçümde, seri üretim hattından alınan hücrelerde verimlilik
                  seviyesi %25,11 olarak teyit edildi.
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">
                  Şirket ayrıca, doğrulama sonrasında seri üretim hattındaki test
                  cihazlarının kalibrasyonlarının güncellendiğini ve seri üretimde
                  üretilen hücrelerin verimlilik değerlerinin %25,1 ve üzeri
                  seviyelerde olduğunun teyit edildiğini bildirdi.
                </p>
              </Section>

              <Section title="Açıklamanın ana detayları">
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

              <Section title="Verimlilik gelişimi">
                <div className="grid gap-4">
                  {gelisimTablosu.map((item) => (
                    <div
                      key={item.tarih}
                      className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
                    >
                      <div className="text-sm font-bold text-blue-700">
                        {item.tarih}
                      </div>
                      <p className="mt-2 text-sm leading-7 text-slate-600 md:text-base">
                        {item.gelisme}
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
                  CWENE açıklaması, doğrudan parasal büyüklük içeren bir sözleşme
                  veya sipariş bildirimi değil. Buna rağmen güneş hücresi
                  verimliliğinin seri üretim hattında doğrulanması, şirketin ürün
                  kalitesi ve teknoloji kabiliyeti açısından önemli bir gösterge
                  niteliği taşıyor.
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

              <Section title="CWENE güneş hücresi verimliliği hakkında kısa soru-cevap">
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
                  href="https://www.kap.org.tr/Bildirim/1633954"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="mt-2 inline-block font-medium text-slate-700 underline underline-offset-2"
                >
                  CWENE — Orjinal Kap içeriği
                </a>
              </div>

              <HaberIlgiliBolumler
                slug={slug}
                baslik="CWENE Güneş Hücresinde %25,11 Verimlilik Doğrulandı"
              />

              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm font-medium leading-7 text-amber-900 md:text-base">
                ⚠️ Bu haber bilgilendirme amacıyla hazırlanmıştır, yatırım
                tavsiyesi değildir. Ar-Ge gelişmelerinin finansal etkisi; satış
                hacmi, üretim maliyeti, kapasite kullanımı ve sonraki şirket
                açıklamalarıyla birlikte değerlendirilmelidir.
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