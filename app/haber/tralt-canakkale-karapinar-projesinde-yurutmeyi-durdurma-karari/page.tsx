import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import HaberIlgiliBolumler from "@/components/HaberIlgiliBolumler";
import AuthorBox from "@/components/AuthorBox";
import HaberAltKisim from "@/components/HaberAltKisim";
import { formatHaberTarihi, getHaberDosyaTarihi } from "@/lib/haber-tarih";

const haberSaati = getHaberDosyaTarihi(import.meta.url);
const haberTarihi = formatHaberTarihi(haberSaati);

const slug = "tralt-canakkale-karapinar-projesinde-yurutmeyi-durdurma-karari";
const haberUrl = `https://www.hocaileborsa.com/haber/${slug}`;
const haberGorsel =
  "https://www.hocaileborsa.com/tralt-canakkale-karapinar-projesinde-yurutmeyi-durdurma-karari.webp";

export const metadata: Metadata = {
  title: "TRALT Çanakkale Karapınar Projesinde Yürütmeyi Durdurma Kararı",
  description:
    "Türk Altın İşletmeleri, Çanakkale Karapınar Altın-Gümüş Madeni Açık Ocak İşletmesi Projesi için açılan davada yürütmenin durdurulması talebinin kabul edildiğini açıkladı.",
  alternates: {
    canonical: haberUrl,
  },
  openGraph: {
    type: "article",
    title: "TRALT Çanakkale Karapınar Projesinde Yürütmeyi Durdurma Kararı",
    description:
      "TRALT, Çanakkale Karapınar Projesi için yürütmenin durdurulması talebinin kabul edildiğini duyurdu. Yargılama devam ediyor.",
    url: haberUrl,
    images: [
      {
        url: haberGorsel,
        width: 1200,
        height: 675,
        alt: "TRALT Çanakkale Karapınar Projesi yürütmeyi durdurma kararı",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TRALT Çanakkale Karapınar Projesinde Yürütmeyi Durdurma Kararı",
    description:
      "TRALT, Çanakkale Karapınar Projesi için mahkemenin yürütmeyi durdurma talebini kabul ettiğini açıkladı.",
    images: [haberGorsel],
  },
};

const ozetKartlari = [
  {
    baslik: "Proje",
    deger: "Çanakkale Karapınar",
    aciklama: "Altın-Gümüş Madeni Açık Ocak İşletmesi Projesi",
  },
  {
    baslik: "Mahkeme Süreci",
    deger: "2025/1053 E.",
    aciklama: "Çanakkale 2. İdare Mahkemesi dosyası",
  },
  {
    baslik: "Son Karar",
    deger: "Yürütme Durduruldu",
    aciklama: "Talep kesin olarak kabul edildi",
  },
  {
    baslik: "Nihai Karar",
    deger: "Henüz Yok",
    aciklama: "Yargılama süreci devam ediyor",
  },
];

const davaTaraflari = [
  "Burhaniye Çevre Platformu Derneği",
  "Ayvalık Tabiat Derneği",
  "Ege Çevre ve Kültür Platformu Derneği",
  "Gülpınar Sürdürülebilir Yaşam Derneği",
  "Kazdağı Doğal ve Kültürel Varlıkları Koruma Derneği",
  "Gerçek kişi davacılar",
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "TRALT Çanakkale Karapınar Projesinde Yürütmeyi Durdurma Kararı",
  description:
    "Türk Altın İşletmeleri, Çanakkale Karapınar Altın-Gümüş Madeni Açık Ocak İşletmesi Projesi için açılan davada yürütmenin durdurulması talebinin kabul edildiğini açıkladı.",
  image: haberGorsel,
  datePublished: "2026-07-08T09:01:35+03:00",
  dateModified: "2026-07-08T09:01:35+03:00",
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

export default function TraltCanakkaleKarapinarPage() {
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
              src="/tralt-canakkale-karapinar-projesinde-yurutmeyi-durdurma-karari.webp"
              alt="TRALT Çanakkale Karapınar Projesi yürütmeyi durdurma kararı"
              fill
              unoptimized
              className="object-cover"
              priority
            />
          </div>

          <div className="p-6 md:p-10">
            <h1 className="text-2xl font-bold leading-tight tracking-tight text-slate-900 md:text-3xl lg:text-4xl">
              TRALT Çanakkale Karapınar Projesinde Yürütmeyi Durdurma Kararı
            </h1>

            <div className="mb-5 mt-3 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center rounded-md bg-red-50 px-2.5 py-1 text-xs font-semibold text-red-700 ring-1 ring-inset ring-red-600/20">
                Hukuki Süreç
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
                Türk Altın İşletmeleri A.Ş. (<strong>TRALT</strong>), Çanakkale
                Karapınar Projesi ile ilgili devam eden dava sürecinde ara karar
                açıklandığını duyurdu. Şirketin KAP açıklamasına göre mahkeme,
                yürütmenin durdurulması isteminin kesin olarak kabulüne karar
                verdi.
              </p>

              <p>
                Karar, Çanakkale ilinde yapılması planlanan{" "}
                <strong>
                  Altın-Gümüş Madeni Açık Ocak İşletmesi Projesi
                </strong>{" "}
                için verilen ÇED olumlu kararının iptali talebiyle açılan davada
                alındı. Şirket, yargılamanın devam ettiğini ve dosyada henüz nihai
                karar verilmediğini açıkladı.
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
                  11 Aralık 2025 tarihli KAP açıklamasında, Çanakkale Karapınar
                  Projesi için verilen ÇED olumlu kararının iptali talebiyle dava
                  açıldığı duyurulmuştu. 7 Temmuz 2026 tarihinde şirkete tebliğ
                  edilen ara karara göre mahkeme, yürütmenin durdurulması
                  istemini kesin olarak kabul etti.
                </p>
              </Section>

              <Section title="KAP açıklamasındaki ana detaylar">
                <div className="overflow-x-auto">
                  <table className="min-w-full overflow-hidden rounded-xl border border-slate-200 text-sm">
                    <tbody>
                      <tr className="bg-white">
                        <th className="px-4 py-3 text-left font-semibold text-slate-800">
                          Şirket
                        </th>
                        <td className="px-4 py-3 font-bold text-slate-700">
                          Türk Altın İşletmeleri A.Ş.
                        </td>
                      </tr>
                      <tr className="bg-slate-50">
                        <th className="px-4 py-3 text-left font-semibold text-slate-800">
                          Hisse Kodu
                        </th>
                        <td className="px-4 py-3 font-bold text-slate-700">
                          TRALT
                        </td>
                      </tr>
                      <tr className="bg-white">
                        <th className="px-4 py-3 text-left font-semibold text-slate-800">
                          Proje
                        </th>
                        <td className="px-4 py-3 font-bold text-slate-700">
                          Çanakkale Karapınar Altın-Gümüş Madeni Açık Ocak
                          İşletmesi Projesi
                        </td>
                      </tr>
                      <tr className="bg-slate-50">
                        <th className="px-4 py-3 text-left font-semibold text-slate-800">
                          Dava Konusu
                        </th>
                        <td className="px-4 py-3 font-bold text-slate-700">
                          ÇED olumlu kararının iptali talebi
                        </td>
                      </tr>
                      <tr className="bg-white">
                        <th className="px-4 py-3 text-left font-semibold text-slate-800">
                          Mahkeme
                        </th>
                        <td className="px-4 py-3 font-bold text-slate-700">
                          Çanakkale 2. İdare Mahkemesi
                        </td>
                      </tr>
                      <tr className="bg-slate-50">
                        <th className="px-4 py-3 text-left font-semibold text-slate-800">
                          Dosya
                        </th>
                        <td className="px-4 py-3 font-bold text-slate-700">
                          2025/1053 E.
                        </td>
                      </tr>
                      <tr className="bg-white">
                        <th className="px-4 py-3 text-left font-semibold text-slate-800">
                          Son Durum
                        </th>
                        <td className="px-4 py-3 font-bold text-red-700">
                          Yürütmenin durdurulması istemi kesin olarak kabul edildi
                        </td>
                      </tr>
                      <tr className="bg-slate-50">
                        <th className="px-4 py-3 text-left font-semibold text-slate-800">
                          Nihai Karar
                        </th>
                        <td className="px-4 py-3 font-bold text-slate-700">
                          Henüz verilmedi
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </Section>

              <Section title="Davayı kimler açtı?">
                <p className="text-sm leading-7 text-slate-600 md:text-base">
                  KAP açıklamasına göre dava, çevre platformları, dernekler ve
                  gerçek kişiler tarafından açıldı. Açıklamada yer alan taraflar
                  arasında şu isimler bulunuyor:
                </p>

                <div className="mt-4 grid gap-2 sm:grid-cols-2">
                  {davaTaraflari.map((item) => (
                    <div
                      key={item}
                      className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-medium text-slate-700"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </Section>

              <Section title="Hisse açısından nasıl okunmalı?">
                <p className="text-sm leading-7 text-slate-600 md:text-base">
                  Yürütmenin durdurulması kararı, proje takvimi açısından negatif
                  bir gelişme olarak değerlendirilebilir. Çünkü karar, davada
                  nihai hüküm verilene kadar ilgili idari işlemin uygulanmasını
                  durduran bir ara karar niteliği taşıyor.
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">
                  Buna karşılık KAP açıklamasında yargılamanın devam ettiği ve
                  dosyada henüz nihai karar verilmediği özellikle belirtildi. Bu
                  nedenle haber, tamamlanmış bir iptal kararından çok hukuki
                  sürecin şirket aleyhine ara karar aşamasına geçtiğini gösteriyor.
                </p>
              </Section>

              <Section title="Neden önemli?">
                <p className="text-sm leading-7 text-slate-600 md:text-base">
                  Madencilik projelerinde ÇED süreçleri, ruhsat ve izin takvimi
                  doğrudan proje ilerleyişini etkileyen başlıklar arasında yer
                  alıyor. Bu nedenle Çanakkale Karapınar Projesi hakkında verilen
                  yürütmeyi durdurma kararı, TRALT için operasyonel belirsizlik
                  yaratan bir gelişme olarak öne çıkıyor.
                </p>
              </Section>

              <Section title="Sırada ne var?">
                <p className="text-sm leading-7 text-slate-600 md:text-base">
                  Bundan sonraki süreçte davanın esası hakkında verilecek nihai
                  karar, şirketin yapacağı ek açıklamalar ve proje takviminde
                  oluşabilecek değişiklikler takip edilecek. Nihai karar
                  verilmeden projenin hukuki görünümü tamamen netleşmiş sayılmaz.
                </p>
              </Section>

              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm leading-7 text-slate-600">
                <div className="font-semibold text-slate-800">Kaynak</div>
                <a
                  href="https://www.kap.org.tr/Bildirim/1627648"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="mt-2 inline-block font-medium text-slate-700 underline underline-offset-2"
                >
                  TRALT — Orjinal Kap içeriği
                </a>
              </div>

              <HaberIlgiliBolumler
                slug={slug}
                baslik="TRALT Çanakkale Karapınar Projesinde Yürütmeyi Durdurma Kararı"
              />

              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm font-medium leading-7 text-amber-900 md:text-base">
                ⚠️ Bu haber bilgilendirme amacıyla hazırlanmıştır, yatırım
                tavsiyesi değildir. Hukuki süreçlere ilişkin nihai etki, mahkeme
                kararları ve şirketin sonraki KAP açıklamalarıyla birlikte
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
