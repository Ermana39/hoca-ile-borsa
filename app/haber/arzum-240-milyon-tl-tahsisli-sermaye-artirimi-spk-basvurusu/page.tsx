import { seoAciklamasi } from "@/lib/seo-metadata";
import Image from "next/image";
import Link from "@/components/NoPrefetchLink";
import type { Metadata } from "next";
import HaberIlgiliBolumler from "@/components/HaberIlgiliBolumler";
import AuthorBox from "@/components/AuthorBox";
import HaberAltKisim from "@/components/HaberAltKisim";
import { formatHaberTarihi, getHaberDosyaTarihi } from "@/lib/haber-tarih";

const haberSaati = getHaberDosyaTarihi(import.meta.url);
const haberTarihi = formatHaberTarihi(haberSaati);

const slug = "arzum-240-milyon-tl-tahsisli-sermaye-artirimi-spk-basvurusu";
const haberUrl = `https://www.hocaileborsa.com/haber/${slug}`;
const haberGorsel =
  "https://www.hocaileborsa.com/arzum-240-milyon-tl-tahsisli-sermaye-artirimi-spk-basvurusu.webp";

export const metadata: Metadata = {
  title: { absolute: "ARZUM 240 Milyon TL Tahsisli Artırım SPK Başvurusu" },
  description:
    seoAciklamasi("ARZUM, mevcut ortakların rüçhan hakları tamamen kısıtlanarak 240 milyon TL satış hasılatı planlanan tahsisli sermaye artırımı için ihraç belgesi onayı başvurusu yapılmasına karar verdi.", "Haberde gelişmenin ayrıntıları, açıklanan veriler ve yatırımcıların izleyebileceği temel noktalar yer alıyor."),
  alternates: {
    canonical: haberUrl,
  },
  openGraph: {
    type: "article",
    title: "ARZUM 240 Milyon TL Tahsisli Sermaye Artırımı İçin SPK’ya Başvuruyor",
    description:
      "ARZUM’da çıkarılmış sermayenin 600 milyon TL’den 840 milyon TL’ye çıkarılması ve 240 milyon TL satış hasılatı planlanan tahsisli sermaye artırımı kararı açıklandı.",
    url: haberUrl,
    images: [
      {
        url: haberGorsel,
        width: 1200,
        height: 675,
        alt: "ARZUM 240 milyon TL tahsisli sermaye artırımı SPK başvurusu",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ARZUM 240 Milyon TL Tahsisli Sermaye Artırımı İçin SPK’ya Başvuruyor",
    description:
      "ARZUM, 240 milyon TL satış hasılatı planlanan tahsisli sermaye artırımı için ihraç belgesi onayı başvurusu kararı aldı.",
    images: [haberGorsel],
  },
};

const ozetKartlari = [
  {
    baslik: "Mevcut Sermaye",
    deger: "600 Mn TL",
    aciklama: "Şirketin çıkarılmış sermayesi",
  },
  {
    baslik: "Hedef Sermaye",
    deger: "840 Mn TL",
    aciklama: "Tahsisli artırım sonrası hedef sermaye",
  },
  {
    baslik: "Planlanan Hasılat",
    deger: "240 Mn TL",
    aciklama: "Tahsisli satıştan beklenen toplam tutar",
  },
  {
    baslik: "Artırım Oranı",
    deger: "%40",
    aciklama: "Toplam sermayeye göre tahsisli artırım oranı",
  },
];

const sermayeDetaylari = [
  {
    etiket: "Şirket",
    deger: "Arzum Elektrikli Ev Aletleri Sanayi ve Ticaret A.Ş.",
  },
  {
    etiket: "Hisse Kodu",
    deger: "ARZUM",
  },
  {
    etiket: "Kayıtlı Sermaye Tavanı",
    deger: "2.000.000.000 TL",
  },
  {
    etiket: "Mevcut Çıkarılmış Sermaye",
    deger: "600.000.000 TL",
  },
  {
    etiket: "Hedef Sermaye",
    deger: "840.000.000 TL",
  },
  {
    etiket: "Tahsisli Artırım Tutarı",
    deger: "240.000.000 TL",
  },
  {
    etiket: "Tahsisli Artırım Oranı",
    deger: "%40,00000",
  },
  {
    etiket: "Yeni Pay Grubu",
    deger: "B Grubu, borsada işlem görebilir nitelikte",
  },
  {
    etiket: "Satış Yöntemi",
    deger: "Halka arz edilmeksizin tahsisli satış",
  },
  {
    etiket: "Başvuru",
    deger: "SPK ihraç belgesi onayı ve sonrasında BIST başvurusu",
  },
];

const tahsisEdilecekKisiler = [
  {
    isim: "Talip Murat Kolbaşı",
    tutar: "61.290.109,16 TL",
  },
  {
    isim: "Ali Osman Kolbaşı",
    tutar: "51.842.540,52 TL",
  },
  {
    isim: "Aliye Kolbaşı",
    tutar: "24.849.487,26 TL",
  },
  {
    isim: "Yasemin Rezan Kolbaşı",
    tutar: "43.109.493,88 TL",
  },
  {
    isim: "Zeynep Figen Peker",
    tutar: "43.109.493,88 TL",
  },
  {
    isim: "Rengin Yağan",
    tutar: "15.798.875,29 TL",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "ARZUM 240 Milyon TL Tahsisli Sermaye Artırımı İçin SPK’ya Başvuruyor",
  description:
    "ARZUM, mevcut ortakların rüçhan hakları tamamen kısıtlanarak 240 milyon TL satış hasılatı planlanan tahsisli sermaye artırımı için ihraç belgesi onayı başvurusu yapılmasına karar verdi.",
  image: haberGorsel,
  datePublished: "2026-07-08T18:56:37+03:00",
  dateModified: "2026-07-08T18:56:37+03:00",
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

export default function ArzumTahsisliSermayeArtirimiPage() {
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
              src="/arzum-240-milyon-tl-tahsisli-sermaye-artirimi-spk-basvurusu.webp"
              alt="ARZUM 240 milyon TL tahsisli sermaye artırımı SPK başvurusu"
              fill

              sizes="(min-width: 1024px) 896px, 100vw"
className="object-cover"
              priority
            />
          </div>

          <div className="p-6 md:p-10">
            <h1 className="text-2xl font-bold leading-tight tracking-tight text-slate-900 md:text-3xl lg:text-4xl">
              ARZUM 240 Milyon TL Tahsisli Sermaye Artırımı İçin SPK’ya Başvuruyor
            </h1>

            <div className="mb-5 mt-3 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center rounded-md bg-purple-50 px-2.5 py-1 text-xs font-semibold text-purple-700 ring-1 ring-inset ring-purple-600/20">
                Sermaye Artırımı
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
                Arzum Elektrikli Ev Aletleri Sanayi ve Ticaret A.Ş. (
                <strong>ARZUM</strong>), tahsisli sermaye artırımı için ihraç
                belgesi onayı başvurusu yapılmasına karar verdi. Şirketin mevcut
                <strong> 600 milyon TL</strong> çıkarılmış sermayesinin{" "}
                <strong>840 milyon TL</strong> seviyesine yükseltilmesi
                planlanıyor.
              </p>

              <p>
                KAP açıklamasına göre mevcut ortakların rüçhan hakları tamamen
                kısıtlanacak ve toplam <strong>240 milyon TL</strong> satış
                hasılatı sağlayacak paylar, halka arz edilmeksizin belirlenen
                kişilere tahsisli olarak satılacak.
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                {ozetKartlari.map((item) => (
                  <div
                    key={item.baslik}
                    className="rounded-2xl border border-purple-200 bg-purple-50 p-4"
                  >
                    <div className="text-sm font-semibold text-purple-800">
                      {item.baslik}
                    </div>
                    <div className="mt-1 text-2xl font-bold text-purple-950">
                      {item.deger}
                    </div>
                    <div className="mt-1 text-sm text-purple-800">
                      {item.aciklama}
                    </div>
                  </div>
                ))}
              </div>

              <Section title="Ne oldu?">
                <p className="text-sm leading-7 text-slate-600 md:text-base">
                  ARZUM yönetim kurulu, 8 Temmuz 2026 tarihli toplantısında
                  şirket özkaynak yapısının güçlendirilmesi amacıyla tahsisli
                  sermaye artırımı yapılmasına karar verdi. Artırım kapsamında
                  240 milyon TL tutarında satış hasılatı planlanıyor.
                </p>
              </Section>

              <Section title="Sermaye artırımının ana detayları">
                <div className="overflow-x-auto">
                  <table className="min-w-full overflow-hidden rounded-xl border border-slate-200 text-sm">
                    <tbody>
                      {sermayeDetaylari.map((item, index) => (
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

              <Section title="Paylar kimlere tahsis edilecek?">
                <p className="text-sm leading-7 text-slate-600 md:text-base">
                  Sermaye artırımında ihraç edilecek payların, SPK onayının
                  ardından halka arz edilmeksizin aşağıdaki kişilere tahsisli
                  olarak satılması planlanıyor:
                </p>

                <div className="mt-4 overflow-x-auto">
                  <table className="min-w-full overflow-hidden rounded-xl border border-slate-200 text-sm">
                    <thead>
                      <tr className="bg-slate-900 text-white">
                        <th className="px-4 py-3 text-left font-semibold">
                          Kişi
                        </th>
                        <th className="px-4 py-3 text-right font-semibold">
                          Nakit Sermaye Avansı
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {tahsisEdilecekKisiler.map((item, index) => (
                        <tr
                          key={item.isim}
                          className={index % 2 === 0 ? "bg-white" : "bg-slate-50"}
                        >
                          <td className="px-4 py-3 font-bold text-slate-900">
                            {item.isim}
                          </td>
                          <td className="px-4 py-3 text-right font-semibold text-slate-700">
                            {item.tutar}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Section>

              <Section title="1 yıl satmama taahhüdü">
                <p className="text-sm leading-7 text-slate-600 md:text-base">
                  KAP açıklamasında, tahsisli sermaye artırımı kapsamında pay
                  alacak kişilerin bu payları Merkezi Kayıt Kuruluşu nezdindeki
                  hesaplarına geçtikleri tarihten itibaren <strong>1 yıl boyunca
                  borsada satmayacaklarına</strong> yönelik taahhüt verdikleri
                  belirtildi.
                </p>
              </Section>

              <Section title="Hisse açısından nasıl okunmalı?">
                <p className="text-sm leading-7 text-slate-600 md:text-base">
                  Tahsisli sermaye artırımı, ARZUM’un özkaynak yapısını
                  güçlendirmeye yönelik bir adım olarak açıklandı. Planlanan
                  işlem tamamlanırsa şirketin çıkarılmış sermayesi 600 milyon
                  TL’den 840 milyon TL’ye çıkacak.
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">
                  İşlemde mevcut ortakların rüçhan hakları tamamen kısıtlanıyor.
                  Bu nedenle yatırımcı tarafında hem sermaye yapısındaki değişim
                  hem de payların kimlere tahsis edildiği başlıkları öne çıkıyor.
                  1 yıllık satmama taahhüdü ise satış baskısı tarafında ayrıca
                  not edilmesi gereken bir detay.
                </p>
              </Section>

              <Section title="Sırada ne var?">
                <p className="text-sm leading-7 text-slate-600 md:text-base">
                  Bundan sonraki aşamada SPK’nın ihraç belgesine ilişkin onay
                  süreci takip edilecek. SPK onayının ardından payların tahsisli
                  satışı için Borsa İstanbul’a başvuru yapılacak.
                </p>
              </Section>

              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm leading-7 text-slate-600">
                <div className="font-semibold text-slate-800">Kaynak</div>
                <a
                  href="https://www.kap.org.tr/Bildirim/1629919"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="mt-2 inline-block font-medium text-slate-700 underline underline-offset-2"
                >
                  ARZUM — Orjinal Kap içeriği
                </a>
              </div>

              <HaberIlgiliBolumler
                slug={slug}
                baslik="ARZUM 240 Milyon TL Tahsisli Sermaye Artırımı İçin SPK’ya Başvuruyor"
              />

              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm font-medium leading-7 text-amber-900 md:text-base">
                ⚠️ Bu haber bilgilendirme amacıyla hazırlanmıştır, yatırım
                tavsiyesi değildir. Sermaye artırımı süreci SPK onayı ve sonraki
                şirket açıklamalarıyla birlikte takip edilmelidir.
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
