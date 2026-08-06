import Link from "@/components/NoPrefetchLink";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getHisse,
  getTumHisseler,
  getTumHisseSembolleri,
  hisseKunyeIndexlenebilirMi,
  hisseVarMi,
  type Hisse,
} from "@/lib/hisseler";
import { getTemelOranlar } from "@/lib/temel-oranlar";
import HisseAvatar from "@/components/HisseAvatar";
import { getTemettulerBySembol } from "@/lib/temettuler";
import { getKapBySembol } from "@/lib/kap";
import {
  getHisseHakKullanimlari,
  hakKullanimlariGuncellemeTarihi,
  hakKullanimlariKaynakAdi,
  type GecmisTemettuKaydi,
} from "@/lib/hisse-hak-kullanimlari";
import {
  oranYorumlariUret,
  ceyrekEtiketi,
  guncellemeTarihiEtiketi,
  type TemelOranlar,
  type OranYorumSatiri,
} from "@/lib/oranYorumla";
import {
  sermayeGecmisiNormalize,
  temettuMu,
  type HamSermayeKaydi,
} from "@/lib/hisse-temettu";
import { hisseKunyeSeoMetinleri } from "@/lib/hisse-kunye-seo";
import {
  getHisseProfilMetadata,
  getHisseResmiKaynaklari,
} from "@/lib/hisse-kunye-kaynaklari";

const siteUrl = "https://www.hocaileborsa.com";

export const dynamicParams = false;

type OzgunAnaliz = {
  isModeli?: string;
  gelirKaynaklari?: string[];
  gucluYanlar?: string[];
  riskler?: string[];
  sektorelKonum?: string;
  ortaklikYorumu?: string;
  temettuYorumu?: string;
  yatirimciNotu?: string;
};

type SeoSoru = {
  soru?: string;
  cevap?: string;
};

type BenzerSirket = {
  kod?: string;
  ad?: string;
  aciklama?: string;
};

type IlgiliHisse = {
  kod: string;
  sirketAdi: string;
  neden: string;
};

type KarsilastirmaHissesi = {
  kod?: string;
  sirketAdi: string;
  neden?: string;
  tiklanabilir: boolean;
};

type EkHisseAlanlari = {
  ozgunAnaliz?: OzgunAnaliz;
  seoSorular?: SeoSoru[];
  benzerSirketler?: BenzerSirket[];
  seo?: {
    title?: string;
    description?: string;
  };
};

export function generateStaticParams() {
  return getTumHisseSembolleri().map((sembol) => ({ sembol }));
}

function doluMetin(value?: string | null): value is string {
  return (
    typeof value === "string" &&
    value.trim().length > 0 &&
    !/^\$[0-9a-z]+$/i.test(value.trim())
  );
}

function doluListe<T>(value?: T[] | null): value is T[] {
  return Array.isArray(value) && value.length > 0;
}

function tarihEtiketi(value?: string): string {
  if (!value) return "Tarih belirtilmedi";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;

  return date.toLocaleDateString("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Europe/Istanbul",
  });
}

function enYeniTarih(...values: Array<string | undefined>): string | undefined {
  let enYeni: string | undefined;
  let enYeniZaman = Number.NEGATIVE_INFINITY;

  for (const value of values) {
    if (!value) continue;
    const zaman = Date.parse(value);
    if (!Number.isNaN(zaman) && zaman > enYeniZaman) {
      enYeni = value;
      enYeniZaman = zaman;
    }
  }

  return enYeni ?? values.find(Boolean);
}

function temettuTutarEtiketi(kayit: GecmisTemettuKaydi): string {
  const tutar = new Intl.NumberFormat("tr-TR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 6,
  }).format(kayit.brut);
  return kayit.paraBirimi === "TRY" ? `₺${tutar}` : `${tutar} ${kayit.paraBirimi}`;
}

function hisseninTemettuVerisiVar(
  hisse: Hisse,
  temettuYorumu?: string
): boolean {
  const takvimKayitlari = getTemettulerBySembol(hisse.kod);
  const hakKullanimlari = getHisseHakKullanimlari(hisse.kod);
  const profilKayitlari = sermayeGecmisiNormalize(
    hisse.temettuSermayeGecmisi as HamSermayeKaydi[] | undefined
  );

  return (
    takvimKayitlari.length > 0 ||
    hakKullanimlari.temettuler.length > 0 ||
    profilKayitlari.some(temettuMu) ||
    doluMetin(temettuYorumu)
  );
}

// temettuSermayeGecmisi normalize yardımcıları lib/hisse-temettu'da tutulur.

function enBuyukOrtakAdi(hisse: Hisse): string {
  const ortaklar = hisse.ortaklikYapisi?.ortaklar ?? [];
  const adlandirilmisOrtaklar = ortaklar.filter(
    (ortak) => !/halka|diğer|diger/i.test(ortak.ad)
  );
  const sirali = [...adlandirilmisOrtaklar].sort((a, b) => b.oran - a.oran);
  return sirali[0]?.ad || "Açıklanan ortaklık yapısı";
}

function sektorEtiketi(hisse: Hisse): string {
  const sektorler = hisse.kurumsalBilgiler?.sektorler ?? [];
  if (sektorler.length > 0) return sektorler.slice(0, 2).join(" / ");
  return hisse.kurumsalBilgiler?.faaliyetAlani || "Borsa İstanbul şirketi";
}

function pazarEtiketi(hisse: Hisse): string {
  const pazarlar = hisse.kurumsalBilgiler?.islemGorduguPazar ?? [];
  return pazarlar[0] || "Borsa İstanbul";
}

function oneCikanEndeksler(hisse: Hisse): string[] {
  const endeksler = hisse.borsaBilgileri.endeksler ?? [];
  const oncelik = ["BIST 30", "BIST 50", "BIST 100", "BIST 500", "BIST TEMETTÜ", "BIST KATILIM"];
  const secilenler = oncelik.filter((endeks) =>
    endeksler.some((item) => item.toLocaleUpperCase("tr-TR").includes(endeks))
  );
  return secilenler.length > 0 ? secilenler.slice(0, 4) : endeksler.slice(0, 4);
}

function benzersizSorular(sorular: SeoSoru[]): SeoSoru[] {
  const gorulen = new Set<string>();
  return sorular.filter((item) => {
    if (!doluMetin(item.soru) || !doluMetin(item.cevap)) return false;
    const anahtar = item.soru.toLocaleLowerCase("tr-TR").trim();
    if (gorulen.has(anahtar)) return false;
    gorulen.add(anahtar);
    return true;
  });
}

function metinAnahtari(value: string): string {
  return value
    .toLocaleLowerCase("tr-TR")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/ı/g, "i")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

function sayfadaYanitiBulunanSoru(item: SeoSoru): boolean {
  if (!doluMetin(item.soru)) return true;
  const soru = metinAnahtari(item.soru);
  const tekrarEdenBasliklar = [
    "ne is yapar",
    "faaliyet alani",
    "hangi alanda faaliyet",
    "hangi sektorde",
    "sektorde yer",
    "sektordeki yeri",
    "is modeli",
    "gelir kaynak",
    "guclu yan",
    "riskler",
    "ortaklik yapisi",
    "ortaklari kim",
    "halka aciklik",
    "hangi pazarda",
    "hangi endeks",
    "katilim endeks",
    "bagli ortaklik",
    "istirak",
    "temettu gecmisi",
    "sermaye gecmisi",
    "bist kodu",
    "yatirimci iliskileri",
    "hangi sirketlerle karsilastirilabilir",
    "yatirimcisi hangi basliklari takip etmeli",
  ];

  return tekrarEdenBasliklar.some((baslik) => soru.includes(baslik));
}

function ozgunProfilParagrafi(value: string): boolean {
  if (!doluMetin(value)) return false;
  return !(
    /Borsa İstanbul'da\s+\S+\s+koduyla işlem gören ve KAP sektör sınıflamasında/i.test(
      value
    ) ||
    /payları .+ kapsamında işlem görür\..+KAP profili üzerinden doğrulanmıştır/i.test(
      value
    )
  );
}

function ozgunSektorelKonum(value?: string): value is string {
  return (
    doluMetin(value) &&
    !(
      /KAP sınıflamasında.+kapsamında yer almaktadır/i.test(value) &&
      /aynı sektördeki şirketlerle karşılaştır/i.test(value)
    )
  );
}

function ozgunOrtaklikYorumu(value?: string): value is string {
  return (
    doluMetin(value) &&
    !/en büyük doğrudan ortak olarak görünmektedir|doğrudan ortaklık oranı tablosu yayımlanmadığından/i.test(
      value
    )
  );
}

function ozgunYatirimciNotu(value?: string): value is string {
  return (
    doluMetin(value) &&
    !/takip edilirken şirketin faaliyet alanındaki gelişmeler.+KAP bildirimleri.+koşulları birlikte izlenmelidir/i.test(
      value
    )
  );
}

function normalizeEslesme(value: string): string {
  return value.trim().toLocaleLowerCase("tr-TR");
}

function ortakDegerler(a: string[], b: string[]): string[] {
  const bSet = new Set(b.map(normalizeEslesme));
  return a.filter((item) => bSet.has(normalizeEslesme(item)));
}

function ilgiliHisselerUret(
  hisse: Hisse,
  benzerSirketler: BenzerSirket[]
): IlgiliHisse[] {
  const mevcutKodlar = new Set(
    benzerSirketler
      .map((item) => item.kod?.toLocaleUpperCase("tr-TR"))
      .filter((kod): kod is string => Boolean(kod))
  );
  const sektorler = hisse.kurumsalBilgiler?.sektorler ?? [];
  const pazarlar = hisse.kurumsalBilgiler?.islemGorduguPazar ?? [];
  const endeksler = oneCikanEndeksler(hisse);

  return getTumHisseler()
    .map((aday) => {
      if (
        aday.kod.toLocaleUpperCase("tr-TR") ===
        hisse.kod.toLocaleUpperCase("tr-TR")
      ) {
        return null;
      }
      if (mevcutKodlar.has(aday.kod.toLocaleUpperCase("tr-TR"))) return null;

      const adayHisse = getHisse(aday.kod);
      if (!adayHisse) return null;

      const sektorEslesmeleri = ortakDegerler(
        sektorler,
        adayHisse.kurumsalBilgiler?.sektorler ?? []
      );
      const pazarEslesmeleri = ortakDegerler(
        pazarlar,
        adayHisse.kurumsalBilgiler?.islemGorduguPazar ?? []
      );
      const endeksEslesmeleri = ortakDegerler(
        endeksler,
        oneCikanEndeksler(adayHisse)
      );
      const puan =
        sektorEslesmeleri.length * 4 +
        pazarEslesmeleri.length * 2 +
        endeksEslesmeleri.length;

      if (puan === 0) return null;

      const neden =
        sektorEslesmeleri[0]
          ? `${sektorEslesmeleri[0]} sektöründe takip edilebilecek bir başka BIST şirketi.`
          : pazarEslesmeleri[0]
            ? `${pazarEslesmeleri[0]} kapsamında karşılaştırmalı izlenebilir.`
            : `${endeksEslesmeleri[0]} içinde birlikte takip edilebilir.`;

      return {
        kod: aday.kod,
        sirketAdi: aday.sirketAdi,
        neden,
        puan,
      };
    })
    .filter(
      (item): item is IlgiliHisse & { puan: number } => item !== null
    )
    .sort((a, b) => b.puan - a.puan || a.kod.localeCompare(b.kod, "tr"))
    .slice(0, 6)
    .map(({ kod, sirketAdi, neden }) => ({ kod, sirketAdi, neden }));
}

function karsilastirmaHisseleriUret(
  benzerSirketler: BenzerSirket[],
  ilgiliHisseler: IlgiliHisse[]
): KarsilastirmaHissesi[] {
  const gorulen = new Set<string>();
  const sonuc: KarsilastirmaHissesi[] = [];

  const ekle = (item: KarsilastirmaHissesi) => {
    const anahtar = item.kod
      ? `kod:${item.kod.toLocaleUpperCase("tr-TR")}`
      : `ad:${normalizeEslesme(item.sirketAdi)}`;
    if (gorulen.has(anahtar)) return;
    gorulen.add(anahtar);
    sonuc.push(item);
  };

  benzerSirketler.forEach((item) => {
    const kod = doluMetin(item.kod)
      ? item.kod.toLocaleUpperCase("tr-TR")
      : undefined;
    const kayitliHisse = kod ? getHisse(kod) : undefined;
    const sirketAdi =
      (doluMetin(item.ad) ? item.ad : undefined) || kayitliHisse?.sirketAdi || kod;
    if (!sirketAdi) return;

    ekle({
      kod,
      sirketAdi,
      neden: doluMetin(item.aciklama) ? item.aciklama : undefined,
      tiklanabilir: Boolean(kod && hisseVarMi(kod)),
    });
  });

  ilgiliHisseler.forEach((item) => {
    ekle({
      kod: item.kod,
      sirketAdi: item.sirketAdi,
      tiklanabilir: true,
    });
  });

  return sonuc.slice(0, 6);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ sembol: string }>;
}): Promise<Metadata> {
  const { sembol } = await params;
  const hisse = getHisse(sembol);
  if (!hisse) return {};

  const detayliHisse = hisse as typeof hisse & EkHisseAlanlari;

  const temelOranlar = getTemelOranlar(hisse.kod);
  const temettuVarMi = hisseninTemettuVerisiVar(
    hisse,
    detayliHisse.ozgunAnaliz?.temettuYorumu
  );
  const { baslik, aciklama } = hisseKunyeSeoMetinleri({
    kod: hisse.kod,
    sirketAdi: hisse.sirketAdi,
    katilimEndeksiUygun: hisse.borsaBilgileri.katilimEndeksiUygun,
    temelOranlar,
    temettuVarMi,
  });

  const canonicalCode =
    hisse.borsaBilgileri.anaHisseKodu?.toLowerCase() ||
    hisse.kod.toLowerCase();
  const isSecondaryShareClass = canonicalCode !== hisse.kod.toLowerCase();
  const indexlenebilir =
    !isSecondaryShareClass && hisseKunyeIndexlenebilirMi(hisse);
  const url = `${siteUrl}/hisse/${canonicalCode}`;

  return {
    title: { absolute: baslik },
    description: aciklama,
    alternates: { canonical: url },
    robots: { index: indexlenebilir, follow: true },
    openGraph: {
      type: "website",
      url,
      title: baslik,
      description: aciklama,
      images: [{ url: `${siteUrl}/banner.webp` }],
    },
    twitter: {
      card: "summary_large_image",
      title: baslik,
      description: aciklama,
      images: [`${siteUrl}/banner.webp`],
    },
  };
}

function SectionBaslik({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-4 flex items-center gap-3">
      <div className="h-5 w-1 rounded-full bg-blue-600" />
      <h2 className="text-base font-bold tracking-tight text-slate-900 md:text-lg">
        {children}
      </h2>
    </div>
  );
}

function AltBaslik({ children }: { children: React.ReactNode }) {
  return <h3 className="mb-2 text-sm font-bold text-slate-800">{children}</h3>;
}

function MaddeListesi({
  baslik,
  maddeler,
  ton = "blue",
}: {
  baslik: string;
  maddeler?: string[];
  ton?: "blue" | "green" | "amber" | "red";
}) {
  if (!doluListe(maddeler)) return null;

  const renkler = {
    blue: "border-blue-100 bg-blue-50 text-blue-800",
    green: "border-emerald-100 bg-emerald-50 text-emerald-800",
    amber: "border-amber-100 bg-amber-50 text-amber-800",
    red: "border-rose-100 bg-rose-50 text-rose-800",
  };

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4">
      <AltBaslik>{baslik}</AltBaslik>
      <ul className="space-y-2">
        {maddeler.map((madde, i) => (
          <li
            key={`${baslik}-${i}`}
            className={`rounded-lg border px-3 py-2 text-sm font-medium leading-6 ${renkler[ton]}`}
          >
            {madde}
          </li>
        ))}
      </ul>
    </div>
  );
}

function oranFormatla(oran: number): string {
  return oran.toLocaleString("tr-TR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

// Oran yorum satırı durumuna göre rozet metni + renk. Seviye rozetleri (düşük/
// orta/yüksek) nötr renktedir; "iyi/kötü" çağrışımı yapmaz, yalnızca oranın
// kendi seviyesini betimler.
const ORAN_ROZET: Record<
  OranYorumSatiri["durum"],
  { etiket: string; sinif: string }
> = {
  dusuk: {
    etiket: "Düşük seviye",
    sinif: "bg-slate-100 text-slate-600 ring-slate-400/20",
  },
  orta: {
    etiket: "Orta seviye",
    sinif: "bg-slate-100 text-slate-600 ring-slate-400/20",
  },
  yuksek: {
    etiket: "Yüksek seviye",
    sinif: "bg-slate-100 text-slate-600 ring-slate-400/20",
  },
  negatif: {
    etiket: "Negatif değer",
    sinif: "bg-amber-50 text-amber-700 ring-amber-600/20",
  },
  uc: {
    etiket: "Uç değer",
    sinif: "bg-amber-50 text-amber-700 ring-amber-600/20",
  },
  "buyume-pozitif": {
    etiket: "Dönemsel artış",
    sinif: "bg-emerald-50 text-emerald-700 ring-emerald-600/20",
  },
  "buyume-negatif": {
    etiket: "Dönemsel azalış",
    sinif: "bg-rose-50 text-rose-700 ring-rose-600/20",
  },
};

function TemelOranlarBolumu({
  kod,
  temelOranlar,
}: {
  kod: string;
  temelOranlar?: TemelOranlar;
}) {
  if (!temelOranlar) return null;

  const satirlar = oranYorumlariUret(kod, temelOranlar);
  if (satirlar.length === 0) return null;

  const ceyrekAd = ceyrekEtiketi(temelOranlar.donem);
  const guncellemeTarihi = guncellemeTarihiEtiketi(
    temelOranlar.guncellemeTarihi,
  );
  const hesaplamaMetni = `Oranlar ${ceyrekAd} finansal verilerine ve bir önceki gün kapanış fiyatlarına göre hesaplanmıştır.`;

  return (
    <section id="temel-oranlar" className="mt-8 scroll-mt-24">
      <SectionBaslik>
        {kod} Temel Oranlar: F/K, PD/DD ve Finansal Göstergeler
      </SectionBaslik>

      <div className="mb-3 flex flex-wrap items-center gap-2 text-xs font-semibold">
        <Link
          href="/borsa/oran-analizi"
          prefetch={false}
          className="rounded-md bg-blue-50 px-2 py-1 text-blue-700 ring-1 ring-inset ring-blue-200 transition hover:bg-blue-100"
        >
          Kaynak: Oran Analizi
        </Link>
        <span className="rounded-md bg-slate-100 px-2 py-1 text-slate-700 ring-1 ring-inset ring-slate-200">
          Finansal dönem: {ceyrekAd}
        </span>
        {guncellemeTarihi && temelOranlar.guncellemeTarihi ? (
          <time
            dateTime={temelOranlar.guncellemeTarihi}
            className="rounded-md bg-slate-100 px-2 py-1 text-slate-700 ring-1 ring-inset ring-slate-200"
          >
            Veri güncelleme: {guncellemeTarihi}
          </time>
        ) : null}
      </div>

      <p className="mb-4 text-xs font-medium leading-5 text-slate-500">
        {hesaplamaMetni} Aşağıdaki yorumlar aynı merkezi verilerden otomatik
        üretilir.
      </p>

      <div className="space-y-3">
        {satirlar.map((satir) => {
          const rozet = ORAN_ROZET[satir.durum];
          return (
            <div
              key={satir.key}
              className="rounded-xl border border-slate-200 bg-white p-4"
            >
              <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-sm font-bold text-slate-900">{satir.label}</h3>
                <span
                  className={`inline-flex items-center rounded-md px-2 py-0.5 text-xs font-semibold ring-1 ring-inset ${rozet.sinif}`}
                >
                  {rozet.etiket}
                </span>
              </div>

              <div className="mb-2 flex flex-wrap gap-2 text-xs">
                <span className="inline-flex items-center gap-1 rounded-md bg-slate-50 px-2 py-1 font-medium text-slate-700 ring-1 ring-inset ring-slate-200">
                  <span className="text-slate-500">Değer:</span>
                  <strong className="text-slate-900">{satir.sirketStr}</strong>
                </span>
              </div>

              <p className="text-sm leading-7 text-slate-700">{satir.yorum}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default async function HisseKunyePage({
  params,
}: {
  params: Promise<{ sembol: string }>;
}) {
  const { sembol } = await params;
  const hisse = getHisse(sembol);
  if (!hisse) notFound();

  const detayliHisse = hisse as typeof hisse & EkHisseAlanlari;
  const profilMetadata = getHisseProfilMetadata(hisse.kod);
  const resmiKaynaklar = getHisseResmiKaynaklari(hisse);

  const {
    ortaklikYapisi,
    istirakler = [],
    kurumsalBilgiler,
    borsaBilgileri,
    temettuSermayeGecmisi,
  } = hisse;

  const ozgunAnaliz = detayliHisse.ozgunAnaliz;
  // Excel'de bulunmayan kodlarda eski profil verisini göstermek yerine bölüm gizlenir.
  const temelOranlar = getTemelOranlar(hisse.kod);
  const sonDogrulamaTarihi = enYeniTarih(
    profilMetadata?.verifiedAt,
    temelOranlar?.guncellemeTarihi,
  );
  const degisiklikGecmisi = profilMetadata?.history ?? [];
  const veriSeoSorular = (detayliHisse.seoSorular || []).filter(
    (item) => doluMetin(item.soru) && doluMetin(item.cevap)
  );
  const benzerSirketler = (detayliHisse.benzerSirketler || []).filter(
    (item) => doluMetin(item.kod) || doluMetin(item.ad)
  );

  const canonicalCode =
    hisse.borsaBilgileri.anaHisseKodu?.toLowerCase() ||
    hisse.kod.toLowerCase();
  const url = `${siteUrl}/hisse/${canonicalCode}`;

  const temettuKayitlari = getTemettulerBySembol(hisse.kod);
  const hakKullanimlari = getHisseHakKullanimlari(hisse.kod);
  const kapKayitlari = getKapBySembol(hisse.kod);

  const mevcutSermayeGecmisi = sermayeGecmisiNormalize(
    temettuSermayeGecmisi as HamSermayeKaydi[] | undefined
  );
  const takvimTarihleri = new Set(
    temettuKayitlari.map((kayit) => kayit.isoTarih)
  );
  const gecmisTemettuler = hakKullanimlari.temettuler.filter(
    (kayit) => !takvimTarihleri.has(kayit.isoTarih)
  );
  const mevcutDigerSermayeKayitlari = mevcutSermayeGecmisi.filter(
    (kayit) =>
      hakKullanimlari.durum !== "ok" ||
      !/bölünme/i.test(`${kayit.tur} ${kayit.aciklama}`)
  );
  const temettuKayitSayisi = temettuKayitlari.length + gecmisTemettuler.length;
  const sermayeKayitSayisi =
    hakKullanimlari.bolunmeler.length + mevcutDigerSermayeKayitlari.length;
  const temettuYorumVar = doluMetin(ozgunAnaliz?.temettuYorumu);
  const temettuVarMi =
    temettuKayitSayisi > 0 ||
    mevcutSermayeGecmisi.some(temettuMu) ||
    temettuYorumVar;
  const temettuBolumuVar =
    hakKullanimlari.durum !== "missing" ||
    temettuKayitSayisi > 0 ||
    sermayeKayitSayisi > 0 ||
    temettuYorumVar;
  const ortaklikBolumuVar =
    ortaklikYapisi.ortaklar.length > 0 || Boolean(ortaklikYapisi.not);
  const kunyeSeo = hisseKunyeSeoMetinleri({
    kod: hisse.kod,
    sirketAdi: hisse.sirketAdi,
    katilimEndeksiUygun: borsaBilgileri.katilimEndeksiUygun,
    temelOranlar,
    temettuVarMi,
  });

  const istiraklerdeSermayeVar = (istirakler ?? []).some((i) => i.sermaye);
  const istiraklerdeDetayVar = (istirakler ?? []).some(
    (i) => i.faaliyetKonusu || i.iliski
  );
  const profilParagraflari = hisse.hakkinda.filter(ozgunProfilParagrafi);
  const isModeli =
    doluMetin(ozgunAnaliz?.isModeli) &&
    !profilParagraflari.some(
      (paragraf) => metinAnahtari(paragraf) === metinAnahtari(ozgunAnaliz.isModeli!)
    )
      ? ozgunAnaliz.isModeli
      : undefined;
  const sektorelKonum = ozgunSektorelKonum(ozgunAnaliz?.sektorelKonum)
    ? ozgunAnaliz.sektorelKonum
    : undefined;
  const ortaklikYorumu = ozgunOrtaklikYorumu(ozgunAnaliz?.ortaklikYorumu)
    ? ozgunAnaliz.ortaklikYorumu
    : undefined;
  const yatirimciNotu = ozgunYatirimciNotu(ozgunAnaliz?.yatirimciNotu)
    ? ozgunAnaliz.yatirimciNotu
    : undefined;
  const ilgiliHisseler = ilgiliHisselerUret(hisse, benzerSirketler);
  const karsilastirmaHisseleri = karsilastirmaHisseleriUret(
    benzerSirketler,
    ilgiliHisseler
  );
  const seoSorular = benzersizSorular(veriSeoSorular)
    .filter((item) => !sayfadaYanitiBulunanSoru(item))
    .slice(0, 4);

  const hizliBakisKartlari = [
    {
      etiket: "Sektör",
      deger: sektorEtiketi(hisse),
    },
    {
      etiket: "Öne Çıkan Ortak",
      deger: enBuyukOrtakAdi(hisse),
    },
    {
      etiket: "İşlem Gördüğü Pazar",
      deger: pazarEtiketi(hisse),
    },
    {
      etiket: "Katılım Endeksi",
      deger: borsaBilgileri.katilimEndeksiUygun ? "Uygun" : "Uygun Değil",
    },
  ];
  const kurumsalBilgiVar = Boolean(
    kurumsalBilgiler?.merkez ||
      kurumsalBilgiler?.eposta ||
      kurumsalBilgiler?.telefon ||
      kurumsalBilgiler?.fax ||
      kurumsalBilgiler?.sirketSuresi ||
      kurumsalBilgiler?.bagimsizDenetimKurulusu ||
      kurumsalBilgiler?.odenmisSermaye ||
      kurumsalBilgiler?.kayitliSermayeTavani ||
      kurumsalBilgiler?.ticaretSicilMemurlugu ||
      kurumsalBilgiler?.ticaretSicilNumarasi ||
      kurumsalBilgiler?.tescilTarihi ||
      kurumsalBilgiler?.vergiDairesi ||
      (kurumsalBilgiler?.sektorler?.length ?? 0) > 0 ||
      (kurumsalBilgiler?.uretimTesisleri?.length ?? 0) > 0 ||
      (kurumsalBilgiler?.yatirimciIliskileriYetkilileri?.length ?? 0) > 0 ||
      (kurumsalBilgiler?.yonetimKurulu?.length ?? 0) > 0 ||
      (kurumsalBilgiler?.veriNotlari?.length ?? 0) > 0
  );

  const corporation: Record<string, unknown> = {
    "@type": "Corporation",
    "@id": `${url}#corporation`,
    name: hisse.sirketAdi,
    tickerSymbol: hisse.borsaBilgileri.bistKodu,
    url,
  };

  const resmiBaglantilar = [
    resmiKaynaklar.resmiWeb,
    resmiKaynaklar.yatirimciIliskileri,
    resmiKaynaklar.kapSirketProfili,
  ].filter((item, index, items): item is string =>
    Boolean(item) && items.indexOf(item) === index
  );

  if (resmiBaglantilar.length > 0) corporation.sameAs = resmiBaglantilar;

  if (kurumsalBilgiler?.merkez) {
    corporation.address = {
      "@type": "PostalAddress",
      streetAddress: kurumsalBilgiler.merkez,
      addressCountry: "TR",
    };
  }

  if (istirakler.length > 0) {
    corporation.subOrganization = istirakler.map((i) => ({
      "@type": "Organization",
      name: i.ad,
    }));
  }

  const graphItems: Record<string, unknown>[] = [
    corporation,
    {
      "@type": "WebPage",
      "@id": `${url}#webpage`,
      url,
      name: kunyeSeo.baslik,
      description: kunyeSeo.aciklama,
      about: { "@id": `${url}#corporation` },
      isPartOf: { "@id": `${siteUrl}/#organization` },
      datePublished: profilMetadata?.publishedAt,
      dateModified: sonDogrulamaTarihi,
      inLanguage: "tr",
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${url}#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Ana Sayfa",
          item: `${siteUrl}/`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Hisseler",
          item: `${siteUrl}/hisseler`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: `${hisse.kod} Hisse Künyesi`,
          item: url,
        },
      ],
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": graphItems,
  };

  return (
    <main className="min-h-screen bg-[#f8fafc] px-4 py-6 md:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <div className="mx-auto max-w-4xl">
        <nav
          className="mb-5 flex flex-wrap items-center gap-2 text-sm text-slate-500"
          aria-label="Breadcrumb"
        >
          <Link href="/" prefetch={false} className="transition hover:text-blue-600">
            Ana Sayfa
          </Link>
          <span className="text-slate-300">/</span>
          <span className="font-medium text-slate-700">
            {hisse.kod} Hisse Künyesi
          </span>
        </nav>

        <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_2px_16px_rgba(15,23,42,0.07)]">
          <div className="p-6 md:p-10">
            <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <HisseAvatar kod={hisse.kod} boyut="lg" />
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h1 className="text-2xl font-bold leading-tight tracking-tight text-slate-900 md:text-3xl">
                    {kunyeSeo.baslik}
                  </h1>
                </div>
                <p className="mt-1 text-sm font-semibold text-slate-600 md:text-base">
                  {hisse.sirketAdi}
                </p>
                <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-500">
                  {kunyeSeo.aciklama}
                </p>
              </div>
            </div>

            <nav
              className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-4"
              aria-label={`${hisse.kod} künye bölümleri`}
            >
              <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Künye bölümleri
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {temelOranlar && (
                  <a
                    href="#temel-oranlar"
                    className="rounded-full bg-white px-3 py-1.5 text-sm font-semibold text-blue-700 ring-1 ring-inset ring-blue-200 transition hover:bg-blue-50"
                  >
                    Temel oranlar
                  </a>
                )}
                <a
                  href="#katilim-endeksi"
                  className="rounded-full bg-white px-3 py-1.5 text-sm font-semibold text-blue-700 ring-1 ring-inset ring-blue-200 transition hover:bg-blue-50"
                >
                  Katılım Endeksi
                </a>
                {temettuBolumuVar && (
                  <a
                    href="#temettu-gecmisi"
                    className="rounded-full bg-white px-3 py-1.5 text-sm font-semibold text-blue-700 ring-1 ring-inset ring-blue-200 transition hover:bg-blue-50"
                  >
                    Temettü geçmişi
                  </a>
                )}
                {ortaklikBolumuVar && (
                  <a
                    href="#ortaklik-yapisi"
                    className="rounded-full bg-white px-3 py-1.5 text-sm font-semibold text-blue-700 ring-1 ring-inset ring-blue-200 transition hover:bg-blue-50"
                  >
                    Ortaklık yapısı
                  </a>
                )}
              </div>
            </nav>

            {(resmiKaynaklar.yatirimciIliskileri ||
              resmiKaynaklar.kapSirketProfili ||
              resmiKaynaklar.resmiWeb) && (
              <div
                className="mt-6 flex flex-wrap gap-2"
                aria-label="Resmi şirket kaynakları"
              >
                  {resmiKaynaklar.yatirimciIliskileri && (
                    <a
                      href={resmiKaynaklar.yatirimciIliskileri}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center rounded-lg bg-blue-700 px-3 py-2 text-xs font-bold text-white transition hover:bg-blue-800"
                    >
                      Yatırımcı İlişkileri
                    </a>
                  )}
                  {resmiKaynaklar.kapSirketProfili && (
                    <a
                      href={resmiKaynaklar.kapSirketProfili}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center rounded-lg bg-white px-3 py-2 text-xs font-bold text-blue-800 ring-1 ring-inset ring-blue-200 transition hover:bg-blue-100"
                    >
                      KAP Şirket Profili
                    </a>
                  )}
                  {resmiKaynaklar.resmiWeb && (
                    <a
                      href={resmiKaynaklar.resmiWeb}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center rounded-lg bg-white px-3 py-2 text-xs font-bold text-slate-700 ring-1 ring-inset ring-slate-200 transition hover:bg-slate-100"
                    >
                      Resmi Şirket Sitesi
                    </a>
                  )}
              </div>
            )}

            <section className="mt-8">
              <SectionBaslik>{hisse.kod} Hisseye Hızlı Bakış</SectionBaslik>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {hizliBakisKartlari.map((kart) => (
                  <div
                    key={kart.etiket}
                    className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3"
                  >
                    <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                      {kart.etiket}
                    </div>
                    <div className="mt-1 text-sm font-bold text-slate-900">
                      {kart.deger}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {(profilParagraflari.length > 0 || isModeli || sektorelKonum) && (
              <section className="mt-8">
                <SectionBaslik>Şirket Profili ve İş Modeli</SectionBaslik>
                <div className="space-y-5 text-base leading-8 text-slate-700">
                  {profilParagraflari.map((paragraf, i) => (
                    <p key={`${hisse.kod}-profil-${i}`}>{paragraf}</p>
                  ))}
                  {isModeli && (
                    <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                      <AltBaslik>İş Modeli</AltBaslik>
                      <p>{isModeli}</p>
                    </div>
                  )}
                  {sektorelKonum && (
                    <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                      <AltBaslik>Sektörel Konum</AltBaslik>
                      <p>{sektorelKonum}</p>
                    </div>
                  )}
                </div>
              </section>
            )}

            {(doluListe(ozgunAnaliz?.gelirKaynaklari) ||
              doluListe(ozgunAnaliz?.gucluYanlar) ||
              doluListe(ozgunAnaliz?.riskler)) && (
              <section className="mt-8">
                <SectionBaslik>Şirketin Gelir Yapısı, Güçlü Yanları ve Riskleri</SectionBaslik>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                  <MaddeListesi
                    baslik="Gelir Kaynakları"
                    maddeler={ozgunAnaliz?.gelirKaynaklari}
                    ton="blue"
                  />
                  <MaddeListesi
                    baslik="Güçlü Yanlar"
                    maddeler={ozgunAnaliz?.gucluYanlar}
                    ton="green"
                  />
                  <MaddeListesi
                    baslik="Riskler"
                    maddeler={ozgunAnaliz?.riskler}
                    ton="red"
                  />
                </div>
              </section>
            )}

            {ortaklikBolumuVar && (
              <section id="ortaklik-yapisi" className="mt-8 scroll-mt-24">
                <SectionBaslik>
                  {hisse.kod} Ortaklık Yapısı ve Ortakları
                </SectionBaslik>
                {ortaklikYapisi.ortaklar.length > 0 ? (
                  <div className="space-y-4">
                    {ortaklikYapisi.ortaklar.map((ortak) => (
                      <div key={ortak.ad}>
                        <div className="mb-1.5 flex items-center justify-between gap-3">
                          <span className="text-sm font-medium text-slate-700">
                            {ortak.ad}
                          </span>
                          <span className="shrink-0 text-sm font-bold text-slate-900">
                            %{oranFormatla(ortak.oran)}
                          </span>
                        </div>
                        <div className="h-2.5 overflow-hidden rounded-full bg-slate-100 ring-1 ring-inset ring-slate-200">
                          <div
                            className="h-full rounded-full bg-gradient-to-r from-blue-500 to-blue-600"
                            style={{ width: `${Math.min(ortak.oran, 100)}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm leading-7 text-slate-700">
                    Resmi KAP profilinde oran tablosu yayımlanmadığı için bu
                    bölümde tahmini ortaklık verisi gösterilmez.
                  </div>
                )}

                {ortaklikYapisi.not && (
                  <p className="mt-4 text-sm leading-7 text-slate-500">
                    {ortaklikYapisi.not}
                  </p>
                )}

                {ortaklikYorumu && (
                  <div className="mt-4 rounded-xl border border-blue-100 bg-blue-50 p-4 text-sm leading-7 text-blue-900 md:text-base md:leading-8">
                    <strong>Ortaklık yapısı yorumu: </strong>
                    {ortaklikYorumu}
                  </div>
                )}
              </section>
            )}

            {istirakler.length > 0 && (
              <section className="mt-8">
                <SectionBaslik>İştirakler ve Bağlı Ortaklıklar</SectionBaslik>
                <div className="overflow-x-auto rounded-xl border border-slate-200">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-slate-50 text-xs uppercase tracking-wider text-slate-500">
                      <tr>
                        <th className="px-4 py-3 font-semibold">
                          İştirak / Bağlı Ortaklık
                        </th>
                        {istiraklerdeSermayeVar && (
                          <th className="px-4 py-3 text-right font-semibold">
                            Sermaye
                          </th>
                        )}
                        <th className="px-4 py-3 text-right font-semibold">
                          İştirak Oranı
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {istirakler.map((istirak) => (
                        <tr key={istirak.ad} className="text-slate-700">
                          <td className="px-4 py-2.5 font-medium text-slate-800">
                            <span>{istirak.ad}</span>
                            {istiraklerdeDetayVar &&
                              (istirak.faaliyetKonusu || istirak.iliski) && (
                                <span className="mt-1 block text-xs font-normal leading-5 text-slate-500">
                                  {[istirak.faaliyetKonusu, istirak.iliski]
                                    .filter(Boolean)
                                    .join(" · ")}
                                </span>
                              )}
                          </td>
                          {istiraklerdeSermayeVar && (
                            <td className="px-4 py-2.5 text-right text-slate-700">
                              {istirak.sermaye
                                ? `${istirak.sermaye}${
                                    istirak.paraBirimi
                                      ? ` ${istirak.paraBirimi}`
                                      : ""
                                  }`
                                : "—"}
                            </td>
                          )}
                          <td className="px-4 py-2.5 text-right font-bold text-slate-900">
                            %{oranFormatla(istirak.oran)}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
            )}

            {kurumsalBilgiVar && (
                <section className="mt-8">
                  <SectionBaslik>Kurumsal Bilgiler</SectionBaslik>
                  <dl className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {kurumsalBilgiler?.merkez && (
                      <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 sm:col-span-2">
                        <dt className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                          Merkez
                        </dt>
                        <dd className="mt-1 text-sm font-medium text-slate-800">
                          {kurumsalBilgiler.merkez}
                        </dd>
                      </div>
                    )}

                    {(kurumsalBilgiler?.sektorler?.length ?? 0) > 0 && (
                      <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 sm:col-span-2">
                        <dt className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                          KAP Sektör Sınıflaması
                        </dt>
                        <dd className="mt-2 flex flex-wrap gap-2">
                          {kurumsalBilgiler?.sektorler?.map((sektor) => (
                            <span
                              key={sektor}
                              className="inline-flex items-center rounded-md bg-white px-2.5 py-1 text-xs font-semibold text-slate-700 ring-1 ring-inset ring-slate-200"
                            >
                              {sektor}
                            </span>
                          ))}
                        </dd>
                      </div>
                    )}

                    {(kurumsalBilgiler?.uretimTesisleri?.length ?? 0) > 0 && (
                      <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 sm:col-span-2">
                        <dt className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                          Üretim Tesisleri
                        </dt>
                        <dd className="mt-2 space-y-1 text-sm leading-6 text-slate-800">
                          {kurumsalBilgiler?.uretimTesisleri?.map((adres) => (
                            <p key={adres}>{adres}</p>
                          ))}
                        </dd>
                      </div>
                    )}

                    {kurumsalBilgiler?.eposta && (
                      <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
                        <dt className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                          E-posta
                        </dt>
                        <dd className="mt-1 break-words text-sm font-bold">
                          <a
                            href={`mailto:${kurumsalBilgiler.eposta}`}
                            className="text-blue-700 hover:underline"
                          >
                            {kurumsalBilgiler.eposta}
                          </a>
                        </dd>
                      </div>
                    )}

                    {(kurumsalBilgiler?.telefon || kurumsalBilgiler?.fax) && (
                      <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
                        <dt className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                          Telefon / Faks
                        </dt>
                        <dd className="mt-1 text-sm font-bold text-slate-900">
                          {[kurumsalBilgiler.telefon, kurumsalBilgiler.fax]
                            .filter(Boolean)
                            .join(" / ")}
                        </dd>
                      </div>
                    )}

                    {kurumsalBilgiler?.sirketSuresi && (
                      <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
                        <dt className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                          Şirketin Süresi
                        </dt>
                        <dd className="mt-1 text-sm font-bold text-slate-900">
                          {kurumsalBilgiler.sirketSuresi}
                        </dd>
                      </div>
                    )}

                    {kurumsalBilgiler?.bagimsizDenetimKurulusu && (
                      <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
                        <dt className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                          Bağımsız Denetim Kuruluşu
                        </dt>
                        <dd className="mt-1 text-sm font-bold text-slate-900">
                          {kurumsalBilgiler.bagimsizDenetimKurulusu}
                        </dd>
                      </div>
                    )}

                    {kurumsalBilgiler?.odenmisSermaye && (
                      <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
                        <dt className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                          Ödenmiş Sermaye
                        </dt>
                        <dd className="mt-1 text-sm font-bold text-slate-900">
                          {kurumsalBilgiler.odenmisSermaye}
                        </dd>
                      </div>
                    )}

                    {kurumsalBilgiler?.kayitliSermayeTavani && (
                      <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
                        <dt className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                          Kayıtlı Sermaye Tavanı
                        </dt>
                        <dd className="mt-1 text-sm font-bold text-slate-900">
                          {kurumsalBilgiler.kayitliSermayeTavani}
                        </dd>
                      </div>
                    )}

                    {(kurumsalBilgiler?.ticaretSicilMemurlugu ||
                      kurumsalBilgiler?.ticaretSicilNumarasi) && (
                      <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
                        <dt className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                          Ticaret Sicili
                        </dt>
                        <dd className="mt-1 text-sm font-bold text-slate-900">
                          {[
                            kurumsalBilgiler.ticaretSicilMemurlugu,
                            kurumsalBilgiler.ticaretSicilNumarasi,
                          ]
                            .filter(Boolean)
                            .join(" / ")}
                        </dd>
                      </div>
                    )}

                    {kurumsalBilgiler?.tescilTarihi && (
                      <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
                        <dt className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                          Tescil Tarihi
                        </dt>
                        <dd className="mt-1 text-sm font-bold text-slate-900">
                          {tarihEtiketi(kurumsalBilgiler.tescilTarihi)}
                        </dd>
                      </div>
                    )}

                    {kurumsalBilgiler?.vergiDairesi && (
                      <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
                        <dt className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                          Vergi Dairesi
                        </dt>
                        <dd className="mt-1 text-sm font-bold text-slate-900">
                          {kurumsalBilgiler.vergiDairesi}
                        </dd>
                      </div>
                    )}

                    {(kurumsalBilgiler?.yonetimKurulu?.length ?? 0) > 0 && (
                      <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 sm:col-span-2">
                        <dt className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                          Yönetim Kurulu
                        </dt>
                        <dd className="mt-2 flex flex-wrap gap-2">
                          {kurumsalBilgiler?.yonetimKurulu!.map((uye) => (
                            <span
                              key={uye}
                              className="inline-flex items-center rounded-md bg-white px-2.5 py-1 text-xs font-semibold text-slate-700 ring-1 ring-inset ring-slate-200"
                            >
                              {uye}
                            </span>
                          ))}
                        </dd>
                      </div>
                    )}

                    {(kurumsalBilgiler?.veriNotlari?.length ?? 0) > 0 && (
                      <div className="rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 sm:col-span-2">
                        <dt className="text-xs font-semibold uppercase tracking-wider text-amber-800">
                          Resmi Kaynak Notu
                        </dt>
                        <dd className="mt-2">
                          <ul className="space-y-1 text-sm leading-6 text-amber-950">
                            {kurumsalBilgiler?.veriNotlari?.map((not) => (
                              <li key={not}>{not}</li>
                            ))}
                          </ul>
                        </dd>
                      </div>
                    )}

                    {(kurumsalBilgiler?.yatirimciIliskileriYetkilileri?.length ??
                      0) > 0 && (
                      <div className="rounded-xl border border-blue-100 bg-blue-50 px-4 py-3 sm:col-span-2">
                        <dt className="text-xs font-semibold uppercase tracking-wider text-blue-700">
                          Yatırımcı İlişkileri Yetkilileri
                        </dt>
                        <dd className="mt-3 grid gap-2 sm:grid-cols-2">
                          {kurumsalBilgiler?.yatirimciIliskileriYetkilileri?.map(
                            (yetkili) => (
                              <div
                                key={`${yetkili.ad}-${yetkili.eposta}`}
                                className="rounded-lg bg-white p-3 ring-1 ring-inset ring-blue-100"
                              >
                                {yetkili.ad && (
                                  <p className="text-sm font-bold text-slate-900">
                                    {yetkili.ad}
                                  </p>
                                )}
                                {yetkili.gorev && (
                                  <p className="mt-1 text-xs leading-5 text-slate-600">
                                    {yetkili.gorev}
                                  </p>
                                )}
                                {yetkili.eposta && (
                                  <a
                                    href={`mailto:${yetkili.eposta}`}
                                    className="mt-1 block break-words text-xs font-semibold text-blue-700 hover:underline"
                                  >
                                    {yetkili.eposta}
                                  </a>
                                )}
                                {yetkili.telefon && (
                                  <p className="mt-1 text-xs text-slate-600">
                                    {yetkili.telefon}
                                  </p>
                                )}
                              </div>
                            )
                          )}
                        </dd>
                      </div>
                    )}
                  </dl>
                </section>
              )}

            <section id="katilim-endeksi" className="mt-8 scroll-mt-24">
              <SectionBaslik>
                {hisse.kod} Katılım Endeksi&apos;ne Uygun mu?
              </SectionBaslik>
              <p className="mb-4 rounded-xl border border-blue-100 bg-blue-50 px-4 py-3 text-sm leading-6 text-blue-950">
                Mevcut künye verisine göre <strong>{hisse.kod}</strong>, Katılım
                Endeksi&apos;ne <strong>
                  {borsaBilgileri.katilimEndeksiUygun
                    ? "uygundur"
                    : "uygun değildir"}
                </strong>
                .
              </p>
              <dl className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
                  <dt className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                    BIST Kodu
                  </dt>
                  <dd className="mt-1 text-sm font-bold text-slate-900">
                    {borsaBilgileri.bistKodu}
                  </dd>
                </div>

                {(kurumsalBilgiler?.islemGorduguPazar?.length ?? 0) > 0 && (
                  <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
                    <dt className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                      İşlem Gördüğü Pazar
                    </dt>
                    <dd className="mt-1 text-sm font-bold text-slate-900">
                      {kurumsalBilgiler?.islemGorduguPazar?.join(", ")}
                    </dd>
                  </div>
                )}

                <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
                  <dt className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Katılım Endeksi Uygunluğu
                  </dt>
                  <dd className="mt-1">
                    <span
                      className={
                        borsaBilgileri.katilimEndeksiUygun
                          ? "inline-flex items-center rounded-md bg-emerald-50 px-2 py-0.5 text-sm font-bold text-emerald-700 ring-1 ring-inset ring-emerald-600/20"
                          : "inline-flex items-center rounded-md bg-slate-100 px-2 py-0.5 text-sm font-bold text-slate-600 ring-1 ring-inset ring-slate-400/20"
                      }
                    >
                      {borsaBilgileri.katilimEndeksiUygun
                        ? "Uygun"
                        : "Uygun Değil"}
                    </span>
                  </dd>
                </div>

                {borsaBilgileri.endeksler.length > 0 && (
                  <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 sm:col-span-2">
                    <dt className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                      Yer Aldığı Endeksler
                    </dt>
                    <dd className="mt-2 flex flex-wrap gap-2">
                      {borsaBilgileri.endeksler.map((endeks) => (
                        <span
                          key={endeks}
                          className="inline-flex items-center rounded-md bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700 ring-1 ring-inset ring-blue-600/20"
                        >
                          {endeks}
                        </span>
                      ))}
                    </dd>
                  </div>
                )}

                {borsaBilgileri.halkaArzTarihi ? (
                  <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
                    <dt className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                      Halka Arz Tarihi
                    </dt>
                    <dd className="mt-1 text-sm font-bold text-slate-900">
                      {tarihEtiketi(borsaBilgileri.halkaArzTarihi)}
                    </dd>
                  </div>
                ) : null}

                {borsaBilgileri.fiiliDolasimOrani !== undefined && (
                  <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
                    <dt className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                      Fiili Dolaşım Oranı
                    </dt>
                    <dd className="mt-1 text-sm font-bold text-slate-900">
                      %{oranFormatla(borsaBilgileri.fiiliDolasimOrani)}
                    </dd>
                  </div>
                )}

                {borsaBilgileri.anaHisseKodu && (
                  <div className="rounded-xl border border-blue-100 bg-blue-50 px-4 py-3 sm:col-span-2">
                    <dt className="text-xs font-semibold uppercase tracking-wider text-blue-700">
                      Ana Şirket Künyesi
                    </dt>
                    <dd className="mt-1 text-sm font-bold">
                      <Link
                        href={`/hisse/${borsaBilgileri.anaHisseKodu.toLowerCase()}`}
                        prefetch={false}
                        className="text-blue-700 hover:underline"
                      >
                        {borsaBilgileri.anaHisseKodu} künye sayfasını aç
                      </Link>
                    </dd>
                  </div>
                )}
              </dl>
            </section>

            {yatirimciNotu && (
              <section className="mt-8">
                <SectionBaslik>Yatırımcı Notu</SectionBaslik>
                <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm font-medium leading-7 text-amber-900 md:text-base md:leading-8">
                  {yatirimciNotu}
                </div>
              </section>
            )}

            <TemelOranlarBolumu kod={hisse.kod} temelOranlar={temelOranlar} />

            {temettuBolumuVar && (
            <section id="temettu-gecmisi" className="mt-8 scroll-mt-24">
              <SectionBaslik>
                {hisse.kod} Temettü Geçmişi ve Hisse Bölünmeleri
              </SectionBaslik>
              <p className="mb-5 text-sm leading-7 text-slate-600">
                {hisse.kod} için açıklanmış temettü takvimi ile geçmiş nakit
                temettü ve hisse bölünmesi kayıtları birlikte gösterilir. Geçmiş
                veri seti son olarak {tarihEtiketi(hakKullanimlariGuncellemeTarihi)}
                {" "}tarihinde güncellenmiştir.
              </p>

              {temettuKayitlari.length > 0 && (
                <div>
                  <h3 className="mb-2 text-sm font-bold text-slate-700">
                    Açıklanmış Temettü Takvimi
                  </h3>
                  <div className="overflow-x-auto rounded-xl border border-slate-200">
                  <table className="w-full min-w-[560px] text-left text-sm">
                    <thead className="bg-slate-50 text-xs uppercase tracking-wider text-slate-500">
                      <tr>
                        <th className="px-4 py-3 font-semibold">Tarih</th>
                        <th className="px-4 py-3 text-right font-semibold">
                          Hisse Başı Brüt
                        </th>
                        <th className="px-4 py-3 text-right font-semibold">
                          Hisse Başı Net
                        </th>
                        <th className="px-4 py-3 text-right font-semibold">
                          Verim
                        </th>
                        <th className="px-4 py-3 text-right font-semibold">
                          Dağıtma Oranı
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {temettuKayitlari.map((kayit, i) => (
                        <tr
                          key={`${kayit.isoTarih}-${i}`}
                          className="text-slate-700"
                        >
                          <td className="px-4 py-3 font-semibold text-slate-900">
                            {kayit.tarih}
                          </td>
                          <td className="px-4 py-3 text-right font-semibold text-slate-900">
                            {kayit.brut}
                          </td>
                          <td className="px-4 py-3 text-right font-semibold text-slate-900">
                            {kayit.net}
                          </td>
                          <td className="px-4 py-3 text-right">
                            {kayit.verim}
                          </td>
                          <td className="px-4 py-3 text-right">
                            {kayit.oran || "—"}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  </div>
                </div>
              )}

              <div className="mt-5">
                <h3 className="mb-2 text-sm font-bold text-slate-700">
                  Geçmiş Nakit Temettüler
                </h3>
                {gecmisTemettuler.length > 0 ? (
                  <div className="overflow-hidden rounded-xl border border-slate-200">
                    <table className="w-full table-fixed text-left text-sm sm:table-auto">
                      <thead className="bg-slate-50 text-xs uppercase tracking-wider text-slate-500">
                        <tr>
                          <th className="px-3 py-3 font-semibold sm:px-4">Tarih</th>
                          <th className="px-3 py-3 text-right font-semibold sm:px-4">
                            Hisse Başı Brüt
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {gecmisTemettuler.map((kayit) => (
                          <tr
                            key={`${kayit.isoTarih}-${kayit.brut}`}
                            className="text-slate-700"
                          >
                            <td className="px-3 py-3 font-semibold text-slate-900 sm:px-4">
                              <time dateTime={kayit.isoTarih}>
                                {tarihEtiketi(kayit.isoTarih)}
                              </time>
                            </td>
                            <td className="px-3 py-3 text-right font-semibold text-slate-900 sm:px-4">
                              {temettuTutarEtiketi(kayit)}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : hakKullanimlari.durum === "ok" ? (
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm leading-7 text-slate-600">
                    Veri kaynağında {hisse.kod} için geçmiş nakit temettü kaydı
                    bulunmuyor.
                  </div>
                ) : (
                  <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm leading-7 text-amber-900">
                    {hisse.kod} geçmiş temettü verisi piyasa veri sağlayıcısında
                    doğrulanamadı. Kesin bilgi için şirketin KAP bildirimleri
                    kontrol edilmelidir.
                  </div>
                )}
              </div>

              <div className="mt-5">
                <h3 className="mb-2 text-sm font-bold text-slate-700">
                  Geçmiş Hisse Bölünmeleri
                </h3>
                {hakKullanimlari.bolunmeler.length > 0 ? (
                  <div className="overflow-hidden rounded-xl border border-slate-200">
                    <table className="w-full table-fixed text-left text-sm sm:table-auto">
                      <thead className="bg-slate-50 text-xs uppercase tracking-wider text-slate-500">
                        <tr>
                          <th className="px-3 py-3 font-semibold sm:px-4">Tarih</th>
                          <th className="px-3 py-3 text-right font-semibold sm:px-4">
                            Bölünme Oranı
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {hakKullanimlari.bolunmeler.map((kayit) => (
                          <tr
                            key={`${kayit.isoTarih}-${kayit.oran}`}
                            className="text-slate-700"
                          >
                            <td className="px-3 py-3 font-semibold text-slate-900 sm:px-4">
                              <time dateTime={kayit.isoTarih}>
                                {tarihEtiketi(kayit.isoTarih)}
                              </time>
                            </td>
                            <td className="px-3 py-3 text-right font-semibold text-slate-900 sm:px-4">
                              {kayit.oran}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : hakKullanimlari.durum === "ok" ? (
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm leading-7 text-slate-600">
                    Veri kaynağında {hisse.kod} için geçmiş hisse bölünmesi kaydı
                    bulunmuyor.
                  </div>
                ) : null}
              </div>

              {mevcutDigerSermayeKayitlari.length > 0 && (
                <div className="mt-5">
                  <h3 className="mb-2 text-sm font-bold text-slate-700">
                    {hakKullanimlari.durum === "ok"
                      ? "Diğer Sermaye Hareketleri"
                      : "Künye Arşivindeki Sermaye Hareketleri"}
                  </h3>
                  <div className="overflow-x-auto rounded-xl border border-slate-200">
                    <table className="w-full min-w-[480px] text-left text-sm">
                      <thead className="bg-slate-50 text-xs uppercase tracking-wider text-slate-500">
                        <tr>
                          <th className="px-4 py-3 font-semibold">Yıl</th>
                          <th className="px-4 py-3 font-semibold">Tür</th>
                          <th className="px-4 py-3 font-semibold">
                            Tutar / Oran
                          </th>
                          <th className="px-4 py-3 font-semibold">Açıklama</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {mevcutDigerSermayeKayitlari.map((kayit, i) => (
                          <tr key={i} className="text-slate-700">
                            <td className="px-4 py-3 font-semibold text-slate-900">
                              {kayit.yil || "—"}
                            </td>
                            <td className="px-4 py-3">{kayit.tur || "—"}</td>
                            <td className="px-4 py-3">{kayit.tutarOran || "—"}</td>
                            <td className="px-4 py-3 text-slate-500">
                              {kayit.aciklama || "—"}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {doluMetin(ozgunAnaliz?.temettuYorumu) && (
                <div className="mt-4 rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm leading-7 text-slate-700 md:text-base md:leading-8">
                  <strong>Temettü / sermaye geçmişi yorumu: </strong>
                  {ozgunAnaliz.temettuYorumu}
                </div>
              )}

              <div className="mt-4 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-xs leading-6 text-slate-500">
                <strong className="text-slate-700">Veri kaynakları:</strong>{" "}
                {hakKullanimlariKaynakAdi}, şirketlerin KAP bildirimleri ve Hoca
                İle Borsa künye arşivi. Veriler bilgilendirme amacıyla derlenir;
                kesin bilgiler için resmi şirket bildirimleri esas alınmalıdır.
              </div>

            </section>
            )}

            {kapKayitlari.length > 0 && (
            <section className="mt-8">
              <SectionBaslik>Şirket Haberleri ve KAP Gelişmeleri</SectionBaslik>
              <p className="mb-4 text-sm leading-6 text-slate-600">
                {hisse.kod} ile ilişkilendirilen şirket haberleri ve seçili KAP
                gelişmeleri en yeniden eskiye sıralanır.
              </p>
              <ul className="space-y-3">
                  {kapKayitlari.map((kayit, i) => (
                    <li
                      key={`${kayit.isoTarih}-${i}`}
                      className="rounded-xl border border-slate-200 bg-white p-4 transition hover:border-blue-200 hover:shadow-sm"
                    >
                      <div className="mb-1.5 flex flex-wrap items-center gap-2">
                        <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-0.5 text-xs font-semibold text-blue-700 ring-1 ring-inset ring-blue-600/20">
                          {kayit.tur}
                        </span>
                        <time
                          dateTime={kayit.isoTarih}
                          className="text-xs font-medium text-slate-400"
                        >
                          {kayit.tarih}
                        </time>
                      </div>
                      <h3 className="text-sm font-bold text-slate-900">
                        {kayit.link ? (
                          <a
                            href={kayit.link}
                            {...(kayit.link.startsWith("http")
                              ? { target: "_blank", rel: "noopener noreferrer" }
                              : {})}
                            className="transition hover:text-blue-700"
                          >
                            {kayit.baslik}
                          </a>
                        ) : (
                          kayit.baslik
                        )}
                      </h3>
                      {kayit.aciklama && (
                        <p className="mt-1 text-sm leading-6 text-slate-600">
                          {kayit.aciklama}
                        </p>
                      )}
                      {kayit.link && (
                        <a
                          href={kayit.link}
                          {...(kayit.link.startsWith("http")
                            ? { target: "_blank", rel: "noopener noreferrer" }
                            : {})}
                          className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-blue-700 transition hover:gap-2 hover:text-blue-800"
                        >
                          {kayit.kaynakTuru === "haber"
                            ? "Haberi oku"
                            : "Kaynağı incele"}
                          <span aria-hidden="true">→</span>
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
            </section>
            )}

            {seoSorular.length > 0 && (
              <section className="mt-8">
                <SectionBaslik>Sık Sorulan Sorular</SectionBaslik>
                <div className="space-y-3">
                  {seoSorular.map((item, i) => (
                    <div
                      key={`${item.soru}-${i}`}
                      className="rounded-xl border border-slate-200 bg-slate-50 p-4"
                    >
                      <h3 className="text-sm font-bold text-slate-900 md:text-base">
                        {item.soru}
                      </h3>
                      <p className="mt-2 text-sm leading-7 text-slate-700">
                        {item.cevap}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {karsilastirmaHisseleri.length > 0 && (
              <section className="mt-8">
                <SectionBaslik>Benzer ve Karşılaştırılabilir Hisseler</SectionBaslik>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {karsilastirmaHisseleri.map((item, i) => {
                    const icerik = (
                      <>
                      <div className="flex items-center gap-2">
                        {item.kod && (
                          <span className="rounded-md bg-blue-50 px-2 py-1 text-xs font-bold text-blue-700 ring-1 ring-inset ring-blue-600/20">
                            {item.kod}
                          </span>
                        )}
                        <h3 className="text-sm font-bold text-slate-900 group-hover:text-blue-700">
                          {item.sirketAdi}
                        </h3>
                      </div>
                      {item.neden && (
                        <p className="mt-2 text-sm leading-6 text-slate-600">
                          {item.neden}
                        </p>
                      )}
                      </>
                    );

                    return item.tiklanabilir && item.kod ? (
                      <Link
                        key={`${item.kod}-${i}`}
                        href={`/hisse/${item.kod.toLowerCase()}`}
                        prefetch={false}
                        className="group rounded-xl border border-slate-200 bg-white p-4 transition hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-sm"
                      >
                        {icerik}
                      </Link>
                    ) : (
                      <div
                        key={`${item.kod || item.sirketAdi}-${i}`}
                        className="rounded-xl border border-slate-200 bg-white p-4"
                      >
                        {icerik}
                      </div>
                    );
                  })}
                </div>
              </section>
            )}

            {degisiklikGecmisi.length > 0 && (
              <section className="mt-8">
                <SectionBaslik>{hisse.kod} Değişiklik Geçmişi</SectionBaslik>
                <ol className="space-y-3">
                  {degisiklikGecmisi.map((kayit, index) => (
                    <li
                      key={`${kayit.date}-${kayit.title}-${index}`}
                      className="grid grid-cols-1 gap-2 rounded-xl border border-slate-200 bg-white p-4 sm:grid-cols-[145px_1fr]"
                    >
                      <time
                        dateTime={kayit.date}
                        className="text-xs font-bold uppercase tracking-wide text-blue-700"
                      >
                        {tarihEtiketi(kayit.date)}
                      </time>
                      <div>
                        <h3 className="text-sm font-bold text-slate-900">
                          {kayit.title}
                        </h3>
                        <p className="mt-1 text-sm leading-6 text-slate-600">
                          {kayit.description}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
                <p className="mt-3 text-xs leading-5 text-slate-500">
                  Bu liste künye sayfasının içerik sürümlerini gösterir; şirketin tüm
                  KAP açıklamalarının geçmişi değildir.
                </p>
              </section>
            )}

            {hisse.yasalUyari && (
              <div className="mt-8 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm font-medium leading-7 text-amber-900 md:text-base">
                ⚠️ {temelOranlar
                  ? hisse.yasalUyari.replace(
                      /Fiyat\/işlem verisi içermez\.?/i,
                      "Anlık fiyat/işlem verisi sunmaz; sayfadaki oranlar dönemsel finansal tablolara dayanır."
                    )
                  : hisse.yasalUyari}{" "}
                Bilgilerin doğruluğu taahhüt edilmez; bu bilgilerden doğabilecek
                sonuçlardan sorumluluk kabul edilmez.
              </div>
            )}
          </div>
        </article>
      </div>
    </main>
  );
}
