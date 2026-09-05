import { serializeJsonLd } from "@/lib/json-ld";
import { seoAciklamasi } from "@/lib/seo-metadata";
import Image from "next/image";
import Link from "@/components/NoPrefetchLink";
import type { Metadata } from "next";
import HaberIlgiliBolumler from "@/components/HaberIlgiliBolumler";
import AuthorBox from "@/components/AuthorBox";
import HaberAltKisim from "@/components/HaberAltKisim";
import { formatHaberTarihi, getHaberDosyaTarihi } from "@/lib/haber-tarih";

const siteUrl = "https://www.hocaileborsa.com";
const href = "/haber/16-temmuz-2026-fonlar-gunluk-kapanis-degerlendirmesi";
const canonical = `${siteUrl}${href}`;
const haberGorseli = "/2026-fon-etki-analizi-tly-phe-pbr-dfi.webp";
const haberSaati = getHaberDosyaTarihi(import.meta.url);
const haberTarihi = formatHaberTarihi(haberSaati);

const baslik =
  "16.07.2026 Fonların Günlük Kapanış Değerlendirmesi: TLY, PHE, PBR, DFI";
const seoBaslik = "16 Temmuz Fon Kapanışı: TLY, PHE, PBR ve DFI";
const aciklama =
  "16 Temmuz fon kapanış değerlendirmesinde TLY, PHE, PBR ve DFI için yarınki fon fiyatı tahmini, portföy etkisi, para girişi, yatırımcı sayısı ve fon toplam değer değişimi.";

export const metadata: Metadata = {
  title: { absolute: seoBaslik },
  description: seoAciklamasi(aciklama, "Haberde gelişmenin ayrıntıları, açıklanan veriler ve yatırımcıların izleyebileceği temel noktalar yer alıyor."),
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
    kod: "DFI",
    ad: "Atlas Portföy Serbest Fon",
    href: "/fonlar/etki-analizi/dfi",
    tahminiEtki: "+%1,32",
    yatirimci: "+926",
    fonDeger: "+1,21 milyar TL",
    paraAkisi: "+1,12 milyar TL",
    paraYonu: "Giriş",
    pozitif: "ISKPL, IEYHO, ABG ve LIDER",
    negatif: "Belirgin negatif katkı yok",
    yorum:
      "DFI, 16 Temmuz kapanışında dört fon arasında açık ara en güçlü portföy etkisini üretti. ISKPL hissesi tek başına +1,112 puanlık katkı verirken IEYHO, ABG ve LIDER de tabloyu destekledi. Fon toplam değerindeki 1,21 milyar TL artışa 1,12 milyar TL net para girişinin eşlik etmesi, DFI tarafında fiyat etkisi ile para akışının aynı yönde güçlü çalıştığını gösteriyor.",
  },
  {
    kod: "PBR",
    ad: "Pusula Portföy Birinci Değişken Fon",
    href: "/fonlar/etki-analizi/pbr",
    tahminiEtki: "+%0,41",
    yatirimci: "+1.530",
    fonDeger: "+1,02 milyar TL",
    paraAkisi: "+709,31 milyon TL",
    paraYonu: "Giriş",
    pozitif: "BALSU, ODINE, KTLEV, HEDEF ve GUNDG",
    negatif: "DSTKF, PCS, ANELE, YKBNK ve PASEU",
    yorum:
      "PBR tarafında ODINE, KTLEV, BALSU ve HEDEF pozitif katkı verdi; ancak DSTKF ve PCS tarafındaki negatif etki toplam getiriyi sınırladı. Buna rağmen fonun +%0,41 tahmini etki üretmesi, yarın açıklanacak fon fiyatı için pozitif ama ölçülü bir beklenti oluşturuyor. 1.530 kişilik yatırımcı artışı ve 709,31 milyon TL net para girişi, PBR tarafında talebin güçlü kaldığını gösteriyor.",
  },
  {
    kod: "PHE",
    ad: "Pusula Portföy Hisse Senedi Fonu",
    href: "/fonlar/etki-analizi/phe",
    tahminiEtki: "+%0,38",
    yatirimci: "+3.392",
    fonDeger: "+1,82 milyar TL",
    paraAkisi: "+1,38 milyar TL",
    paraYonu: "Giriş",
    pozitif: "ODINE, KTLEV, BALSU, HEDEF, THYAO ve MGROS",
    negatif: "DSTKF, PCS, YKBNK, ANELE ve AKBNK",
    yorum:
      "PHE günün en güçlü yatırımcı artışını aldı. Yatırımcı sayısının 3.392 kişi yükselmesi ve 1,38 milyar TL net para girişi, fon tarafında talebin belirginleştiğini gösteriyor. Portföy etkisi ise +%0,38 ile pozitif kalmasına rağmen DSTKF ve PCS baskısı nedeniyle para akışındaki güçlü görüntü kadar yüksek bir fiyat etkisine dönüşmedi.",
  },
  {
    kod: "TLY",
    ad: "Tera Portföy Birinci Serbest Fonu",
    href: "/fonlar/etki-analizi/tly",
    tahminiEtki: "-%0,39",
    yatirimci: "+654",
    fonDeger: "+2,32 milyar TL",
    paraAkisi: "+1,92 milyar TL",
    paraYonu: "Giriş",
    pozitif: "OZATD, TRHOL, TERA, TPKGY ve SELEC",
    negatif: "DSTKF, HMV, TEHOL, ANELE ve SVGYO",
    yorum:
      "TLY, güçlü para girişine rağmen portföy etkisinde negatif ayrıştı. OZATD, TRHOL ve TERA fonu yukarı çekse de DSTKF tarafındaki -2,2758 puanlık baskı toplam etkiyi -%0,39 seviyesine indirdi. 1,92 milyar TL net para girişi ve 2,32 milyar TL fon toplam değer artışı fon büyüklüğü açısından olumlu; fakat yarınki fiyat etkisinde ana başlık DSTKF kaynaklı baskı oldu.",
  },
] as const;

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: baslik,
  description: aciklama,
  datePublished: "2026-07-16T22:05:00+03:00",
  dateModified: "2026-07-16T22:05:00+03:00",
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

export default function FonlarGunlukKapanisPage() {
  return (
    <main className="min-h-screen bg-[#f8fafc] px-4 py-6 md:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }}
      />

      <div className="mx-auto max-w-4xl">
        <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_2px_16px_rgba(15,23,42,0.07)]">
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-zinc-100">
            <Image
              src={haberGorseli}
              alt="16 Temmuz 2026 TLY PHE PBR DFI fon kapanış değerlendirmesi"
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
                Fon Kapanış Değerlendirmesi
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
                16 Temmuz 2026 gün sonu kapanışı itibarıyla DFI, PBR ve PHE
                fonları yarın açıklanacak TEFAS fiyatı için pozitif portföy
                etkisi üretirken TLY tarafında negatif ayrışma görüldü. Günün
                en yüksek tahmini etkisi DFI tarafında +%1,32 olurken PBR
                +%0,41, PHE +%0,38 ve TLY -%0,39 seviyesinde hesaplandı.
              </p>

              <section>
                <h2 className="text-xl font-bold text-slate-900 md:text-2xl">
                  16 Temmuz Fon Kapanışında Sıralama Nasıl Oluştu?
                </h2>
                <p className="mt-3">
                  Sıralamanın ilk basamağında DFI var. ISKPL hissesindeki güçlü
                  kapanış, DFI portföy etkisini tek başına yukarı taşıdı. PBR ve
                  PHE pozitif bölgede kalmasına rağmen DSTKF ve PCS baskısı bu
                  iki fonda toplam etkiyi sınırladı. TLY tarafında ise OZATD ve
                  TRHOL pozitif katkı verse de DSTKF kaynaklı sert negatif etki
                  fonun toplam görünümünü aşağı çevirdi.
                </p>
              </section>

              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="min-w-[820px] w-full border-collapse text-left text-sm">
                  <thead className="bg-slate-50 text-xs uppercase text-slate-500">
                    <tr>
                      <th className="px-4 py-3 font-semibold">Fon</th>
                      <th className="px-4 py-3 font-semibold">Yarınki Etki</th>
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
                        <td
                          className={`px-4 py-3 font-semibold ${
                            fon.tahminiEtki.startsWith("-")
                              ? "text-red-700"
                              : "text-emerald-700"
                          }`}
                        >
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
                        {fon.kod} Günlük Kapanış Yorumu
                      </h2>
                      <span
                        className={`rounded-md bg-white px-2.5 py-1 text-xs font-semibold ring-1 ring-slate-200 ${
                          fon.tahminiEtki.startsWith("-")
                            ? "text-red-700"
                            : "text-emerald-700"
                        }`}
                      >
                        {fon.tahminiEtki}
                      </span>
                    </div>
                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      {fon.yorum}
                    </p>
                    <p className="mt-3 rounded-lg bg-white px-3 py-2 text-xs font-medium leading-6 text-slate-600 ring-1 ring-slate-200">
                      Pozitif katkıda {fon.pozitif}; negatif tarafta {fon.negatif}{" "}
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
                  Para Girişi ve Yatırımcı Sayısı Ne Anlatıyor?
                </h2>
                <p className="mt-3">
                  Dört fonda da net para girişi görülmesi günün en önemli ortak
                  başlığı oldu. TLY 1,92 milyar TL ile para girişinde ilk sırada
                  yer alırken, PHE 1,38 milyar TL, DFI 1,12 milyar TL ve PBR
                  709,31 milyon TL net giriş kaydetti. Yatırımcı sayısında en
                  güçlü artış PHE tarafında 3.392 kişiyle geldi; PBR 1.530,
                  DFI 926 ve TLY 654 yatırımcı artışıyla günü tamamladı.
                </p>
                <p className="mt-3">
                  Fon toplam değerlerinde de dört fonun tamamı büyüdü. TLY
                  2,32 milyar TL artışla tutar bazında ilk sırada yer aldı;
                  PHE 1,82 milyar TL, DFI 1,21 milyar TL ve PBR 1,02 milyar TL
                  yükseldi. Ancak portföy etkisi tarafında aynı tablo yok:
                  DFI&apos;de para girişi ve fiyat etkisi aynı yönde güçlü
                  çalışırken, TLY&apos;de yüksek para girişine rağmen portföy
                  etkisi negatif kaldı.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-slate-900 md:text-2xl">
                  Yarın Açılışta Hangi Portföy Hisseleri İzlenmeli?
                </h2>
                <p className="mt-3">
                  DFI için ISKPL, yarınki fon fiyatı beklentisinin ana hissesi
                  konumunda. PBR tarafında BALSU, ODINE ve KTLEV; PHE tarafında
                  ODINE, KTLEV, BALSU ve HEDEF pozitif katkıda öne çıkıyor. TLY
                  için OZATD ve TRHOL destekleyici olsa da DSTKF hissesindeki
                  sert negatif etki fonun genel görünümünü baskıladı.
                </p>
                <p className="mt-3">
                  Negatif tarafta DSTKF hem TLY hem PHE hem de PBR üzerinde
                  baskı yarattı. PCS tarafındaki düşüş de PHE ve PBR için takip
                  edilmesi gereken ikinci önemli başlık oldu. Bu nedenle 16
                  Temmuz kapanışında yalnızca para girişine değil, portföy
                  içindeki yüksek ağırlıklı hisselerin günlük marjlarına da
                  bakmak gerekiyor.
                </p>
              </section>

              <HaberIlgiliBolumler slug={href} baslik={baslik} />

              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm font-medium leading-7 text-amber-900 md:text-base">
                Bu haber, TLY, PHE, PBR ve DFI fon etki analizi sayfalarındaki
                16 Temmuz 2026 kapanış verilerinden derlenmiştir. Hesaplama
                tahmini bir göstergedir; yatırım tavsiyesi değildir.
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
