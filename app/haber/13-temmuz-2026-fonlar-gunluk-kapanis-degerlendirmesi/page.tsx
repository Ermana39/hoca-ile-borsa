import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import HaberIlgiliBolumler from "@/components/HaberIlgiliBolumler";
import AuthorBox from "@/components/AuthorBox";
import HaberAltKisim from "@/components/HaberAltKisim";
import { formatHaberTarihi, getHaberDosyaTarihi } from "@/lib/haber-tarih";

const siteUrl = "https://www.hocaileborsa.com";
const href = "/haber/13-temmuz-2026-fonlar-gunluk-kapanis-degerlendirmesi";
const canonical = `${siteUrl}${href}`;
const haberGorseli = "/2026-fon-etki-analizi-tly-phe-pbr-dfi.webp";
const haberSaati = getHaberDosyaTarihi(import.meta.url);
const haberTarihi = formatHaberTarihi(haberSaati);

const baslik =
  "13.07.2026 Fonların Günlük Kapanış Değerlendirmesi: TLY, PHE, PBR, DFI";
const aciklama =
  "13 Temmuz fon kapanış değerlendirmesinde TLY, PHE, PBR ve DFI için yarınki fon fiyatı tahmini, para akışı, yatırımcı değişimi ve fon toplam değerleri.";

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
    tahminiEtki: "+%1,16",
    yatirimci: "+569",
    fonDeger: "+1,10 milyar TL",
    paraAkisi: "+335,20 milyon TL",
    paraYonu: "Giriş",
    pozitif: "GUNDG, ODINE, HEDEF, DSTKF, PKZ ve PCS",
    negatif: "PASEU, KTLEV ve TATEN",
    yorum:
      "PHE, portföy etkisinde yine listenin ilk sırasında yer aldı. Önceki kapanışta para çıkışıyla dikkat çeken fonda bu kez 335,20 milyon TL net para girişi görülmesi, yatırımcı sayısındaki 569 kişilik artışla birleşince tabloyu belirgin biçimde toparlıyor. Fon toplam değerindeki 1,10 milyar TL yükseliş de PHE tarafında daha güçlü bir kapanış resmi oluşturuyor.",
  },
  {
    kod: "PBR",
    ad: "Pusula Portföy Birinci Değişken Fon",
    href: "/fonlar/etki-analizi/pbr",
    tahminiEtki: "+%0,94",
    yatirimci: "+136",
    fonDeger: "+622,37 milyon TL",
    paraAkisi: "+237,12 milyon TL",
    paraYonu: "Giriş",
    pozitif: "HEDEF, KTLEV, ODINE, PKZ ve PCS",
    negatif: "PASEU, AKBNK, THYAO ve YKBNK",
    yorum:
      "PBR tarafında yatırımcı artışı sınırlı kalsa da fon toplam değerindeki 622,37 milyon TL büyüme ve 237,12 milyon TL net para girişi kapanışı destekliyor. Önceki gün fon değerinde gerileme yaşayan PBR için bugünkü veri daha dengeli; portföy etkisi güçlü kalırken para akışı da aynı yöne dönmüş durumda.",
  },
  {
    kod: "TLY",
    ad: "Tera Portföy Birinci Serbest Fonu",
    href: "/fonlar/etki-analizi/tly",
    tahminiEtki: "+%0,93",
    yatirimci: "+198",
    fonDeger: "+4,11 milyar TL",
    paraAkisi: "+1,60 milyar TL",
    paraYonu: "Giriş",
    pozitif: "OZATD, TERA, TPKGY ve DSTKF",
    negatif: "TRHOL ve SVGYO",
    yorum:
      "TLY günün en dikkat çekici para girişini aldı. Yatırımcı sayısındaki 198 kişilik artış sınırlı görünse de 1,60 milyar TL net para girişi ve 4,11 milyar TL fon toplam değer artışı, tutar bazında güçlü bir talep olduğunu gösteriyor. TLY için kapanışın ana mesajı, yatırımcı adedinden çok fon büyüklüğündeki sıçrama oldu.",
  },
  {
    kod: "DFI",
    ad: "Atlas Portföy Serbest Fon",
    href: "/fonlar/etki-analizi/dfi",
    tahminiEtki: "+%0,65",
    yatirimci: "+493",
    fonDeger: "+702,51 milyon TL",
    paraAkisi: "+504,32 milyon TL",
    paraYonu: "Giriş",
    pozitif: "ABG ve IEYHO",
    negatif: "ISKPL",
    yorum:
      "DFI fonunda yatırımcı sayısı 493 kişi artarken 504,32 milyon TL net para girişi oluştu. Fon toplam değerinin 702,51 milyon TL yükselmesi, nakit akışı ve değerleme tarafının birlikte çalıştığını gösteriyor. Portföy etkisi sıralamada daha geride kalsa da DFI, para girişi ve yatırımcı ilgisi açısından günün güçlü fonlarından biri oldu.",
  },
] as const;

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: baslik,
  description: aciklama,
  datePublished: "2026-07-13T22:05:00+03:00",
  dateModified: "2026-07-13T22:05:00+03:00",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="mx-auto max-w-4xl">
        <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_2px_16px_rgba(15,23,42,0.07)]">
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-zinc-100">
            <Image
              src={haberGorseli}
              alt="13 Temmuz 2026 TLY PHE PBR DFI fon kapanış değerlendirmesi"
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
                13 Temmuz 2026 günlük kapanış değerlendirmesinde TLY, PHE, PBR
                ve DFI fonlarının tamamında yatırımcı sayısı, fon toplam değeri
                ve para akışı pozitif tarafta kaldı. Yarın açıklanacak TEFAS fon
                fiyatları için portföy etkisi tarafında PHE +%1,16 ile ilk
                sırada yer alırken PBR +%0,94, TLY +%0,93 ve DFI +%0,65
                seviyesinde hesaplandı.
              </p>

              <section>
                <h2 className="text-xl font-bold text-slate-900 md:text-2xl">
                  13 Temmuz Fon Kapanışında Sıralama Nasıl Oluştu?
                </h2>
                <p className="mt-3">
                  Portföy etkisi sıralamasında PHE ve PBR üst sırada kalmaya
                  devam etti. TLY, tahmini etki sıralamasında üçüncü görünse de
                  1,60 milyar TL net para girişi ve 4,11 milyar TL fon toplam
                  değer artışıyla günün en güçlü tutar bazlı hareketini yaptı.
                  DFI ise daha düşük fiyat etkisine rağmen yatırımcı sayısı ve
                  para akışında istikrarlı büyümesini sürdürdü.
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
                        {fon.kod} Günlük Kapanış Yorumu
                      </h2>
                      <span className="rounded-md bg-white px-2.5 py-1 text-xs font-semibold text-emerald-700 ring-1 ring-slate-200">
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
                  Para Girişi ve Yatırımcı Değişimi Ne Söylüyor?
                </h2>
                <p className="mt-3">
                  13 Temmuz kapanışında dört fonun tamamında net para girişi
                  oluştu. TLY 1,60 milyar TL ile para akışında açık ara öne
                  çıkarken DFI 504,32 milyon TL, PHE 335,20 milyon TL ve PBR
                  237,12 milyon TL net giriş kaydetti. Yatırımcı sayısında en
                  yüksek artış PHE tarafında 569 kişiyle geldi; DFI 493 kişi,
                  TLY 198 kişi ve PBR 136 kişi artışla günü tamamladı.
                </p>
                <p className="mt-3">
                  Bu kapanışın önceki güne göre en önemli farkı, para akışı ile
                  fon toplam değerlerinin aynı anda pozitife dönmesi oldu. TLY
                  tutar bazında, PHE ise hem portföy etkisi hem yatırımcı artışı
                  tarafında öne çıkıyor. DFI ve PBR daha ölçülü hareket etse de
                  iki fonda da para girişi ve fon büyüklüğü aynı yönde ilerledi.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-slate-900 md:text-2xl">
                  Yarın Açılışta Hangi Portföy Hisseleri İzlenmeli?
                </h2>
                <p className="mt-3">
                  TLY tarafında OZATD ve TERA, PHE tarafında GUNDG ve ODINE,
                  PBR tarafında HEDEF, KTLEV ve ODINE, DFI tarafında ise ABG ve
                  IEYHO pozitif katkı tarafında öne çıkıyor. Negatif tarafta PHE
                  ve PBR için PASEU, DFI için ISKPL, TLY için TRHOL ve SVGYO
                  başlıkları yakından izlenmeli.
                </p>
              </section>

              <HaberIlgiliBolumler slug={href} baslik={baslik} />

              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm font-medium leading-7 text-amber-900 md:text-base">
                Bu haber, TLY, PHE, PBR ve DFI fon etki analizi sayfalarındaki
                13 Temmuz 2026 kapanış verilerinden derlenmiştir. Hesaplama
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
