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
const href = "/haber/14-temmuz-2026-fonlar-gunluk-kapanis-degerlendirmesi";
const canonical = `${siteUrl}${href}`;
const haberGorseli = "/2026-fon-etki-analizi-tly-phe-pbr-dfi.webp";
const haberSaati = getHaberDosyaTarihi(import.meta.url);
const haberTarihi = formatHaberTarihi(haberSaati);

const baslik =
  "14.07.2026 Fonların Günlük Kapanış Değerlendirmesi: TLY, PHE, PBR, DFI";
const seoBaslik = "14 Temmuz Fon Kapanışı: TLY, PHE, PBR ve DFI";
const aciklama =
  "14 Temmuz fon kapanış değerlendirmesinde TLY, PHE, PBR ve DFI için yarınki fon fiyatı tahmini, portföy etkisi, para akışı ve yatırımcı değişimi.";

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
    kod: "PBR",
    ad: "Pusula Portföy Birinci Değişken Fon",
    href: "/fonlar/etki-analizi/pbr",
    tahminiEtki: "+%1,07",
    yatirimci: "+136",
    fonDeger: "+622,37 milyon TL",
    paraAkisi: "+237,12 milyon TL",
    paraYonu: "Giriş",
    pozitif: "BALSU, GUNDG, PKZ, PCS ve ANELE",
    negatif: "PASEU, DSTKF, TRALT, THYAO ve HEDEF",
    yorum:
      "PBR, 14 Temmuz kapanışında portföy etkisi sıralamasının ilk sırasında yer aldı. BALSU, GUNDG, PKZ ve PCS tarafındaki pozitif katkı, PASEU ve DSTKF kaynaklı baskıyı aşmaya yetti. Fon sayfasındaki son para akışı verisi de pozitif tarafta kaldığı için PBR'de hem portföy etkisi hem fon büyüklüğü aynı yönde okunuyor.",
  },
  {
    kod: "DFI",
    ad: "Atlas Portföy Serbest Fon",
    href: "/fonlar/etki-analizi/dfi",
    tahminiEtki: "+%0,73",
    yatirimci: "+493",
    fonDeger: "+702,51 milyon TL",
    paraAkisi: "+504,32 milyon TL",
    paraYonu: "Giriş",
    pozitif: "ISKPL, ABG ve LIDER",
    negatif: "IEYHO yatay kaldı",
    yorum:
      "DFI tarafında günün ana belirleyicisi ISKPL oldu. IEYHO'nun kapanış marjı sıfır kalmasına rağmen ISKPL, ABG ve LIDER pozitif katkı verince fonun tahmini etkisi +%0,73 seviyesine çıktı. DFI için portföy etkisi sade ama güçlü; az sayıda hisseyle gelen katkı kapanış tablosunu yukarı taşıdı.",
  },
  {
    kod: "PHE",
    ad: "Pusula Portföy Hisse Senedi Fonu",
    href: "/fonlar/etki-analizi/phe",
    tahminiEtki: "+%0,64",
    yatirimci: "+569",
    fonDeger: "+1,10 milyar TL",
    paraAkisi: "+335,20 milyon TL",
    paraYonu: "Giriş",
    pozitif: "PKZ, BALSU, GUNDG, PCS ve ANELE",
    negatif: "DSTKF, PASEU, THYAO, TRALT ve HEDEF",
    yorum:
      "PHE pozitif bölgede kalmasına rağmen gün içinde daha karışık bir tablo verdi. PKZ, BALSU ve GUNDG fonu yukarı çekerken DSTKF, PASEU ve THYAO tarafındaki negatif etki toplam getiriyi sınırladı. Buna rağmen +%0,64 tahmini etki, PHE'nin yarın açıklanacak fon fiyatı için pozitif beklentisini koruduğunu gösteriyor.",
  },
  {
    kod: "TLY",
    ad: "Tera Portföy Birinci Serbest Fonu",
    href: "/fonlar/etki-analizi/tly",
    tahminiEtki: "-%0,84",
    yatirimci: "+198",
    fonDeger: "+4,11 milyar TL",
    paraAkisi: "+1,60 milyar TL",
    paraYonu: "Giriş",
    pozitif: "OZATD, ANELE, SELEC, TEHOL ve SVGYO",
    negatif: "DSTKF, HMV, TRHOL ve TPKGY",
    yorum:
      "TLY, dört fon içinde portföy etkisi negatif kalan tek fon oldu. OZATD'nin güçlü pozitif katkısı tabloyu dengelemeye çalışsa da DSTKF'deki sert düşüş ve HMV tarafındaki negatif kapanış toplam etkiyi -%0,84 seviyesine taşıdı. TLY'de fon büyüklüğü ve para akışı son veri setinde güçlü görünse de 14 Temmuz portföy etkisi fiyat tarafında baskılı bir kapanışa işaret ediyor.",
  },
] as const;

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: baslik,
  description: aciklama,
  datePublished: "2026-07-14T22:05:00+03:00",
  dateModified: "2026-07-14T22:05:00+03:00",
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
              alt="14 Temmuz 2026 TLY PHE PBR DFI fon kapanış değerlendirmesi"
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
                14 Temmuz 2026 günlük kapanış değerlendirmesinde PBR, DFI ve
                PHE fonları yarın açıklanacak TEFAS fiyatı için pozitif portföy
                etkisi üretirken TLY tarafında negatif etki öne çıktı. Günün en
                yüksek tahmini etkisi PBR tarafında +%1,07 olurken DFI +%0,73,
                PHE +%0,64 ve TLY -%0,84 seviyesinde hesaplandı.
              </p>

              <section>
                <h2 className="text-xl font-bold text-slate-900 md:text-2xl">
                  14 Temmuz Fon Kapanışında Sıralama Nasıl Oluştu?
                </h2>
                <p className="mt-3">
                  PBR, BALSU ve GUNDG desteğiyle günün en güçlü fonu olurken DFI
                  az sayıda hisseyle pozitif tablo oluşturdu. PHE tarafında PKZ
                  ve BALSU katkısı öne çıksa da DSTKF ve PASEU baskısı getiriyi
                  sınırladı. TLY&apos;de ise OZATD pozitif tarafta güçlü kalmasına
                  rağmen DSTKF kaynaklı negatif etki kapanışın yönünü aşağı
                  çevirdi.
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
                  Para Girişi ve Yatırımcı Verisi Nasıl Okunmalı?
                </h2>
                <p className="mt-3">
                  Fon etki sayfalarında yer alan son yatırımcı ve para akışı
                  verilerinde dört fonda da net giriş görünümü korunuyor. TLY
                  1,60 milyar TL para girişi ve 4,11 milyar TL fon toplam değer
                  artışıyla tutar bazında öne çıkarken, 14 Temmuz portföy etkisi
                  tarafında negatif ayrıştı. Bu ayrışma TLY için fiyat etkisi
                  ile fon büyüklüğü hareketinin aynı şeyi söylemediği bir
                  kapanışa işaret ediyor.
                </p>
                <p className="mt-3">
                  PBR ve DFI tarafında pozitif portföy etkisi, para girişi
                  verisiyle daha uyumlu bir görüntü veriyor. PHE ise yatırımcı
                  artışı güçlü olan fonlardan biri olmasına rağmen portföy
                  tarafında pozitif katkıyı sınırlayan negatif hisseler
                  nedeniyle PBR ve DFI&apos;nin gerisinde kaldı.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-slate-900 md:text-2xl">
                  Yarın Açılışta Hangi Portföy Hisseleri İzlenmeli?
                </h2>
                <p className="mt-3">
                  PBR için BALSU, GUNDG, PKZ ve PCS; DFI için ISKPL, ABG ve
                  LIDER; PHE için PKZ, BALSU ve GUNDG pozitif tarafta öne
                  çıkıyor. TLY tarafında OZATD güçlü kalmasına rağmen DSTKF ve
                  HMV kaynaklı baskı yarınki fon fiyatı beklentisinde takip
                  edilmesi gereken ana başlık oldu. Negatif tarafta PASEU, DSTKF,
                  TRALT ve THYAO hareketleri de fonların açılış etkisi açısından
                  yakından izlenecek.
                </p>
              </section>

              <HaberIlgiliBolumler slug={href} baslik={baslik} />

              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm font-medium leading-7 text-amber-900 md:text-base">
                Bu haber, TLY, PHE, PBR ve DFI fon etki analizi sayfalarındaki
                14 Temmuz 2026 kapanış verilerinden derlenmiştir. Hesaplama
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
