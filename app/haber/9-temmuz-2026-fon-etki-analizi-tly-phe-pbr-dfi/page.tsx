import Image from "next/image";
import Link from "@/components/NoPrefetchLink";
import type { Metadata } from "next";
import HaberIlgiliBolumler from "@/components/HaberIlgiliBolumler";
import AuthorBox from "@/components/AuthorBox";
import HaberAltKisim from "@/components/HaberAltKisim";
import { formatHaberTarihi, getHaberDosyaTarihi } from "@/lib/haber-tarih";

const siteUrl = "https://www.hocaileborsa.com";
const href = "/haber/9-temmuz-2026-fon-etki-analizi-tly-phe-pbr-dfi";
const canonical = `${siteUrl}${href}`;
const haberGorseli = "/2026-fon-etki-analizi-tly-phe-pbr-dfi.webp";
const haberSaati = getHaberDosyaTarihi(import.meta.url);
const haberTarihi = formatHaberTarihi(haberSaati);

const baslik =
  "TLY, PHE, PBR, DFI Fon Etki Analizi: Yarın Hangi Fon Öne Çıkıyor?";
const aciklama =
  "9 Temmuz fon etki analizinde TLY, PHE, PBR ve DFI için yarın açıklanacak fon fiyatı tahmini, para girişi çıkışı ve yatırımcı değişimi.";

export const metadata: Metadata = {
  title: baslik,
  description: aciklama,
  alternates: {
    canonical,
  },
  openGraph: {
    type: "article",
    title: baslik,
    description: aciklama,
    url: canonical,
    images: [
      {
        url: `${siteUrl}${haberGorseli}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: baslik,
    description: aciklama,
    images: [`${siteUrl}${haberGorseli}`],
  },
};

const fonlar = [
  {
    kod: "PHE",
    ad: "Pusula Portföy Hisse Senedi Fonu",
    href: "/fonlar/etki-analizi/phe",
    tahminiEtki: "+%0,96",
    yatirimci: "+976",
    fonDeger: "-748,38 milyon TL",
    paraAkisi: "-926,91 milyon TL",
    paraYonu: "Çıkış",
    pozitif: "GUNDG ve PCS",
    negatif: "PASEU",
    yorum:
      "Portföy etkisi dört fon içinde en yüksek tarafta. Buna karşın net para çıkışı ve fon toplam değerindeki düşüş, fiyat beklentisi pozitif olsa bile yatırımcı davranışında temkinli okunması gereken bir ayrışma yaratıyor.",
  },
  {
    kod: "PBR",
    ad: "Pusula Portföy Birinci Değişken Fon",
    href: "/fonlar/etki-analizi/pbr",
    tahminiEtki: "+%0,86",
    yatirimci: "+876",
    fonDeger: "-309,23 milyon TL",
    paraAkisi: "+435,83 milyon TL",
    paraYonu: "Giriş",
    pozitif: "HEDEF ve KTLEV",
    negatif: "PASEU",
    yorum:
      "PBR tarafında para girişi pozitif olmasına rağmen fon toplam değeri geriliyor. Bu tablo, fon fiyatı beklentisi ile fon büyüklüğü değişiminin aynı yönde olmak zorunda olmadığını gösteriyor.",
  },
  {
    kod: "DFI",
    ad: "Atlas Portföy Serbest Fon",
    href: "/fonlar/etki-analizi/dfi",
    tahminiEtki: "+%0,64",
    yatirimci: "+531",
    fonDeger: "+479,48 milyon TL",
    paraAkisi: "+356,04 milyon TL",
    paraYonu: "Giriş",
    pozitif: "IEYHO",
    negatif: "ISKPL",
    yorum:
      "DFI fonunda tahmini fiyat etkisi, yatırımcı sayısı artışı, fon toplam değer yükselişi ve net para girişi aynı yönde ilerliyor. Bu nedenle güncel tablo dört fon içinde daha dengeli pozitif görünüm veriyor.",
  },
  {
    kod: "TLY",
    ad: "Tera Portföy Birinci Serbest Fonu",
    href: "/fonlar/etki-analizi/tly",
    tahminiEtki: "+%0,32",
    yatirimci: "+479",
    fonDeger: "+730,86 milyon TL",
    paraAkisi: "+20,96 milyon TL",
    paraYonu: "Giriş",
    pozitif: "OZATD ve TEHOL",
    negatif: "TERA",
    yorum:
      "TLY tarafında tahmini etki pozitif fakat diğer fonlara göre daha sınırlı. Fon toplam değer artışı güçlü görünürken net para girişi daha ölçülü kaldığı için büyümenin ana kısmı portföy ve değerleme etkisiyle birlikte okunmalı.",
  },
] as const;

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: baslik,
  description: aciklama,
  datePublished: "2026-07-09T20:45:00+03:00",
  dateModified: "2026-07-09T20:45:00+03:00",
  url: canonical,
  author: {
    "@type": "Person",
    "@id": `${siteUrl}/yazar/erman-hoca#person`,
    name: "Erman Hoca",
    url: `${siteUrl}/yazar/erman-hoca`,
  },
  publisher: {
    "@type": "Organization",
    "@id": `${siteUrl}/#organization`,
    name: "Hoca İle Borsa",
    url: siteUrl,
    logo: {
      "@type": "ImageObject",
      url: `${siteUrl}/icon-512.png`,
    },
  },
  image: `${siteUrl}${haberGorseli}`,
  inLanguage: "tr",
  mainEntityOfPage: canonical,
};

export default function FonEtkiHaberiPage() {
  return (
    <main className="min-h-screen bg-[#f8fafc] px-4 py-6 md:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="mx-auto max-w-4xl">
        <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_2px_16px_rgba(15,23,42,0.07)]">
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-zinc-100">
            <Image
              src={haberGorseli}
              alt="TLY PHE PBR DFI fon etki analizi ve yarınki fon fiyatı tahmini"
              fill

              sizes="(min-width: 1024px) 896px, 100vw"
className="object-cover"
            />
          </div>

          <div className="p-6 md:p-10">
            <h1 className="text-2xl font-bold leading-tight tracking-tight text-slate-900 md:text-3xl lg:text-4xl">
              {baslik}
            </h1>

            <div className="mb-4 mt-3 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center rounded-md bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700 ring-1 ring-inset ring-blue-600/20">
                Fon Analizi
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

            <div className="mt-6 space-y-6 text-base leading-8 text-slate-700 md:text-lg">
              <p>
                9 Temmuz 2026 gün sonu fon etki analizinde TLY, PHE, PBR ve
                DFI fonlarının portföylerindeki hisseler yarın açıklanacak fon
                fiyatı için pozitif ön sinyal verdi. Tahmini etki sıralamasında
                PHE +%0,96 ile ilk sırada yer alırken, PBR +%0,86, DFI +%0,64
                ve TLY +%0,32 seviyesinde hesaplandı.
              </p>

              <div className="rounded-xl border border-blue-200 bg-blue-50 p-4 text-sm font-medium leading-7 text-blue-900 md:text-base">
                Google&apos;da en çok aranan başlık olan “yarın hangi fon
                yükselir?” sorusunda bugünkü hesaplama PHE ve PBR&apos;yi
                portföy etkisi açısından öne çıkarıyor. Ancak para akışı
                tarafında PHE&apos;de çıkış, PBR&apos;de giriş görülmesi nedeniyle
                tablo sadece tahmini etkiyle okunmamalı.
              </div>

              <section>
                <h2 className="text-xl font-bold text-slate-900 md:text-2xl">
                  Yarınki Fon Fiyatı Tahmininde Hangi Fon Önde?
                </h2>
                <p className="mt-3">
                  Portföy etkisine göre yarın TEFAS&apos;ta açıklanacak fiyat
                  tarafında en güçlü beklenti PHE ve PBR tarafında oluşuyor.
                  DFI daha dengeli pozitif bir görünüm verirken, TLY tarafında
                  tahmini etki pozitif fakat daha sınırlı kalıyor. Bu hesaplama
                  kesin getiri değildir; fon giderleri, nakit pozisyon, türev
                  işlemler ve portföy değişimleri gerçek fon fiyatını farklı
                  noktaya taşıyabilir.
                </p>
              </section>

              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="min-w-[820px] w-full border-collapse text-left text-sm">
                  <thead className="bg-slate-50 text-xs uppercase text-slate-500">
                    <tr>
                      <th className="px-4 py-3 font-semibold">Fon</th>
                      <th className="px-4 py-3 font-semibold">Tahmini Etki</th>
                      <th className="px-4 py-3 font-semibold">Yatırımcı</th>
                      <th className="px-4 py-3 font-semibold">Fon Değeri</th>
                      <th className="px-4 py-3 font-semibold">Para Akışı</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-700">
                    {fonlar.map((fon) => (
                      <tr key={fon.kod}>
                        <th className="px-4 py-3 font-semibold text-slate-900">
                          <Link
                            href={fon.href}
                            prefetch={false}
                            className="text-blue-700 hover:underline"
                          >
                            {fon.kod}
                          </Link>
                        </th>
                        <td className="px-4 py-3 font-semibold text-emerald-700">
                          {fon.tahminiEtki}
                        </td>
                        <td className="px-4 py-3">{fon.yatirimci}</td>
                        <td className="px-4 py-3">{fon.fonDeger}</td>
                        <td
                          className={`px-4 py-3 font-semibold ${
                            fon.paraYonu === "Giriş"
                              ? "text-emerald-700"
                              : "text-red-700"
                          }`}
                        >
                          {fon.paraAkisi}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {fonlar.map((fon) => (
                  <section
                    key={fon.kod}
                    className="rounded-xl border border-slate-200 bg-slate-50 p-4"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <h2 className="text-lg font-bold text-slate-900">
                        {fon.kod} Fon Etki Yorumu
                      </h2>
                      <span className="rounded-md bg-white px-2.5 py-1 text-xs font-semibold text-emerald-700 ring-1 ring-slate-200">
                        {fon.tahminiEtki}
                      </span>
                    </div>
                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      {fon.yorum}
                    </p>
                    <p className="mt-3 rounded-lg bg-white px-3 py-2 text-xs font-medium leading-6 text-slate-600 ring-1 ring-slate-200">
                      Pozitif katkıda {fon.pozitif}, negatif tarafta {fon.negatif}{" "}
                      hisseleri izleniyor.
                    </p>
                    <Link
                      href={fon.href}
                      prefetch={false}
                      className="mt-3 inline-block text-sm font-semibold text-blue-700 hover:underline"
                    >
                      {fon.kod} fon etki analizi sayfası
                    </Link>
                  </section>
                ))}
              </div>

              <section>
                <h2 className="text-xl font-bold text-slate-900 md:text-2xl">
                  Para Girişi ve Fon Değeri Ne Anlatıyor?
                </h2>
                <p className="mt-3">
                  Günün para akışı tarafında DFI, PBR ve TLY fonlarında net para
                  girişi görülürken, PHE tarafında 926,91 milyon TL net para
                  çıkışı dikkat çekiyor. PBR&apos;de para girişi pozitif olmasına
                  rağmen fon toplam değerinin düşmesi, portföy etkisi ve fon
                  büyüklüğü değişiminin ayrı ayrı değerlendirilmesi gerektiğini
                  gösteriyor. PHE&apos;de yatırımcı sayısı artarken para çıkışı
                  olması ise küçük tutarlı katılım ile yüksek tutarlı çıkışın
                  aynı gün görülebileceğini düşündürüyor.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-slate-900 md:text-2xl">
                  Yarınki Açılış İçin Öne Çıkan Hisseler
                </h2>
                <p className="mt-3">
                  Fonların portföy etkisinde PHE tarafında GUNDG, PCS ve PKZ;
                  PBR tarafında HEDEF, KTLEV ve ODINE; DFI tarafında IEYHO;
                  TLY tarafında ise OZATD, TEHOL ve TRHOL pozitif katkıda öne
                  çıkıyor. Negatif tarafta PHE&apos;de PASEU, PBR&apos;de PASEU
                  ve AKBNK, DFI&apos;de ISKPL, TLY&apos;de TERA ve ANELE takip
                  ediliyor. Bu hisselerdeki kapanış hareketleri, fon fiyatı
                  beklentisinin ana kaynaklarını oluşturuyor.
                </p>
              </section>

              <HaberIlgiliBolumler slug={href} baslik={baslik} />

              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm font-medium leading-7 text-amber-900 md:text-base">
                Bu haber, aynı sitedeki TLY, PHE, PBR ve DFI fon etki analizi
                sayfalarındaki güncel portföy etkisi, yatırımcı sayısı, fon
                toplam değer ve para akışı verilerinden derlenmiştir. İçerik
                bilgilendirme amaçlıdır; yatırım tavsiyesi değildir.
              </div>
            </div>
          </div>

          <HaberAltKisim href={href} />

          <AuthorBox />
        </article>
      </div>
    </main>
  );
}
