import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getHisse,
  getTumHisseler,
  getTumHisseSembolleri,
  hisseVarMi,
  type Hisse,
} from "@/lib/hisseler";
import { getTemelOranlar } from "@/lib/temel-oranlar";
import { getHisseLogo } from "@/lib/hisse-logolar";
import { getTemettulerBySembol } from "@/lib/temettuler";
import { getKapBySembol } from "@/lib/kap";
import {
  oranYorumlariUret,
  donemEtiketi,
  ceyrekEtiketi,
  type TemelOranlar,
  type OranYorumSatiri,
} from "@/lib/oranYorumla";
import {
  sermayeGecmisiNormalize,
  temettuIstatistikleri,
  varyantSec,
  type HamSermayeKaydi,
} from "@/lib/hisse-temettu";

const siteUrl = "https://www.hocaileborsa.com";

export const dynamicParams = true;

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

type EkHisseAlanlari = {
  ozgunAnaliz?: OzgunAnaliz;
  seoSorular?: SeoSoru[];
  benzerSirketler?: BenzerSirket[];
  temelOranlar?: TemelOranlar;
  seo?: {
    title?: string;
    description?: string;
  };
};

export function generateStaticParams() {
  return getTumHisseSembolleri().map((sembol) => ({ sembol }));
}

function doluMetin(value?: string | null): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

function doluListe<T>(value?: T[] | null): value is T[] {
  return Array.isArray(value) && value.length > 0;
}

// temettuSermayeGecmisi normalize yardımcıları lib/hisse-temettu'da;
// temettü alt sayfası (app/hisse/[sembol]/temettu) ile ortak kullanılır.

function enBuyukOrtakAdi(hisse: Hisse): string {
  const ortaklar = hisse.ortaklikYapisi?.ortaklar ?? [];
  const sirali = [...ortaklar].sort((a, b) => b.oran - a.oran);
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

function genelSeoSorularUret({
  hisse,
  ozgunAnaliz,
  temelOranlar,
  temettuKayitSayisi,
  kapKayitSayisi,
}: {
  hisse: Hisse;
  ozgunAnaliz?: OzgunAnaliz;
  temelOranlar?: TemelOranlar;
  temettuKayitSayisi: number;
  kapKayitSayisi: number;
}): SeoSoru[] {
  const sirket = hisse.sirketAdi;
  const kod = hisse.kod;
  const sektor = sektorEtiketi(hisse);
  const endeksler = oneCikanEndeksler(hisse);

  return [
    {
      soru: `${kod} ne iş yapar?`,
      cevap:
        ozgunAnaliz?.isModeli ||
        `${sirket}, ${sektor} alanında faaliyet gösteren ve Borsa İstanbul'da ${kod} koduyla işlem gören bir şirkettir. Sayfada şirketin faaliyet alanı, ortaklık yapısı, iştirakleri, borsa bilgileri ve varsa temel oranları birlikte incelenebilir.`,
    },
    {
      soru: `${kod} hangi pazarda ve endekslerde işlem görüyor?`,
      cevap: `${kod}, ${pazarEtiketi(hisse)} kapsamında takip edilir. Sayfada yer alan endeks bilgileri ${
        endeksler.length > 0
          ? `${endeksler.join(", ")} gibi öne çıkan endeksleri`
          : "Borsa İstanbul endekslerini"
      } gösterir; endeks dahil edilme durumu zaman içinde değişebilir.`,
    },
    {
      soru: `${kod} ortaklık yapısında kim öne çıkıyor?`,
      cevap: `${kod} ortaklık yapısında ${enBuyukOrtakAdi(
        hisse
      )} öne çıkan pay sahibi olarak görünür. Ortaklık oranları, halka açıklık yapısı ve hakim ortak profili hisseyi değerlendirirken tek başına değil şirketin finansalları ve sektör koşullarıyla birlikte okunmalıdır.`,
    },
    {
      soru: `${kod} katılım endeksine uygun mu?`,
      cevap: `${kod} için katılım endeksi uygunluğu sayfadaki Borsa Bilgileri bölümünde ${
        hisse.borsaBilgileri.katilimEndeksiUygun ? "uygun" : "uygun değil"
      } olarak gösterilir. Katılım endeksi listeleri dönemsel olarak güncellenebildiği için güncel karar öncesinde son liste kontrol edilmelidir.`,
    },
    {
      soru: `${kod} temel oranları nasıl okunmalı?`,
      cevap: temelOranlar
        ? `${kod} temel oranları, ${donemEtiketi(
            temelOranlar.donem
          )} dönemine ait finansal veriler üzerinden yorumlanır. F/K, PD/DD, FD/FAVÖK ve büyüme oranları tek başına al-sat sinyali değildir; sektör ortalamaları, kârlılık kalitesi ve borçlulukla birlikte değerlendirilmelidir.`
        : `${kod} için temel oran bulunmuyorsa yatırımcı şirketin faaliyet raporları, KAP bildirimleri, bilanço verileri ve sektör karşılaştırmalarını ayrıca incelemelidir.`,
    },
    {
      soru: `${kod} temettü ve KAP gelişmeleri nereden izlenir?`,
      cevap: `${kod} için sayfada ${
        temettuKayitSayisi > 0 ? "temettü geçmişi" : "temettü/sermaye geçmişi alanı"
      } ve ${
        kapKayitSayisi > 0 ? "önemli KAP gelişmeleri" : "KAP gelişmeleri"
      } bölümleri yer alır. Bu bilgiler yatırım kararında yardımcı olabilir; ancak güncel ve resmi duyurular için KAP ve şirket yatırımcı ilişkileri kaynakları kontrol edilmelidir.`,
    },
  ];
}

function okumaRehberiUret({
  hisse,
  ozgunAnaliz,
  temelOranlar,
  temettuKayitSayisi,
  kapKayitSayisi,
}: {
  hisse: Hisse;
  ozgunAnaliz?: OzgunAnaliz;
  temelOranlar?: TemelOranlar;
  temettuKayitSayisi: number;
  kapKayitSayisi: number;
}): string[] {
  const maddeler = [
    `${hisse.kod} sayfasını okurken önce şirketin faaliyet alanını ve gelir modelini inceleyin; fiyat hareketinden önce şirketin ne iş yaptığını anlamak gerekir.`,
    `Ortaklık yapısında ${enBuyukOrtakAdi(
      hisse
    )} gibi öne çıkan pay sahipleri, yönetim etkisi ve halka açıklık açısından ayrıca değerlendirilmelidir.`,
    hisse.borsaBilgileri.katilimEndeksiUygun
      ? `${hisse.kod} katılım endeksi uygunluğu nedeniyle katılım hassasiyeti olan yatırımcıların takip listesine girebilir; yine de dönemsel liste değişimleri kontrol edilmelidir.`
      : `${hisse.kod} katılım endeksi uygunluğu bulunmadığı için katılım hassasiyeti olan yatırımcılar güncel endeks listelerini ve şirket faaliyetlerini ayrıca kontrol etmelidir.`,
    temelOranlar
      ? `${hisse.kod} temel oranları ${ceyrekEtiketi(
          temelOranlar.donem
        )} finansallarına göre yorumlanır; oranları aynı sektördeki şirketlerle karşılaştırmak daha sağlıklı sonuç verir.`
      : `${hisse.kod} için temel oran verisi yoksa bilanço, gelir tablosu, nakit akışı ve faaliyet raporu birlikte incelenmelidir.`,
    temettuKayitSayisi > 0
      ? `${hisse.kod} temettü geçmişi düzenli nakit dağıtımı açısından fikir verir; ancak geçmiş temettü gelecekte de aynı politikanın süreceğini garanti etmez.`
      : `${hisse.kod} için temettü verisi sınırlıysa sermaye artırımı geçmişi, kârlılık ve nakit akışı temettü potansiyeli açısından daha dikkatli okunmalıdır.`,
    kapKayitSayisi > 0
      ? `${hisse.kod} KAP gelişmeleri bölümündeki duyurular şirket haber akışını izlemek için kullanılabilir; önemli kararlar resmi bildirimlerle teyit edilmelidir.`
      : `${hisse.kod} için yeni KAP gelişmeleri geldiğinde şirketin yatırım, finansman, sermaye artırımı ve yönetim kararları ayrıca takip edilmelidir.`,
  ];

  if (doluListe(ozgunAnaliz?.gelirKaynaklari)) {
    maddeler.push(
      `${hisse.kod} gelir yapısında ${ozgunAnaliz.gelirKaynaklari
        .slice(0, 3)
        .join(", ")} başlıkları öne çıkar; bu kalemlerin dönemsel kârlılığa etkisi finansal tablolarla birlikte izlenmelidir.`
    );
  }

  if (doluListe(ozgunAnaliz?.gucluYanlar)) {
    maddeler.push(
      `${hisse.kod} için güçlü yanlar arasında ${ozgunAnaliz.gucluYanlar
        .slice(0, 2)
        .join(" ve ")} dikkat çeker; bu avantajların sürdürülebilir olup olmadığı şirket haberleriyle takip edilmelidir.`
    );
  }

  if (doluListe(ozgunAnaliz?.riskler)) {
    maddeler.push(
      `${hisse.kod} için öne çıkan risk başlıkları arasında ${ozgunAnaliz.riskler
        .slice(0, 2)
        .join(" ve ")} yer alır; bu başlıklar şirketin dönemsel performansıyla birlikte izlenmelidir.`
    );
  }

  return maddeler;
}

function veriKaynakNotlariUret({
  hisse,
  temelOranlar,
  temettuKayitSayisi,
  kapKayitSayisi,
  sermayeKayitSayisi,
}: {
  hisse: Hisse;
  temelOranlar?: TemelOranlar;
  temettuKayitSayisi: number;
  kapKayitSayisi: number;
  sermayeKayitSayisi: number;
}): string[] {
  const sirketWeb = hisse.kurumsalBilgiler?.web;
  const endeksler = oneCikanEndeksler(hisse);

  return [
    `${hisse.kod} hisse künyesi; ${sektorEtiketi(
      hisse
    )} faaliyet alanı, ${pazarEtiketi(
      hisse
    )} pazar bilgisi, ortaklık yapısı ve varsa iştirak verileri birlikte okunacak şekilde hazırlanmıştır.`,
    `${hisse.kod} için sayfada ${hisse.ortaklikYapisi.ortaklar.length} ortaklık kaydı, ${hisse.istirakler?.length ?? 0} iştirak/bağlı ortaklık kaydı, ${temettuKayitSayisi} temettü kaydı, ${sermayeKayitSayisi} sermaye geçmişi kaydı ve ${kapKayitSayisi} KAP gelişmesi görüntülenir.`,
    temelOranlar
      ? `${hisse.kod} temel oranları ${donemEtiketi(
          temelOranlar.donem
        )} dönemine göre yorumlanır; bu oranlar anlık fiyat ekranı değil dönemsel finansal analiz desteği sağlar.`
      : `${hisse.kod} için merkezi temel oran verisi bulunmadığında sayfa, şirket künyesi ve açıklanan kurumsal bilgiler üzerinden okunmalıdır.`,
    endeksler.length > 0
      ? `${hisse.kod} Borsa İstanbul tarafında ${endeksler.join(
          ", "
        )} gibi öne çıkan endekslerle takip edilir; endeks üyelikleri dönemsel olarak değişebilir.`
      : `${hisse.kod} için endeks bilgisi sınırlıysa Borsa İstanbul ve şirket duyurularındaki güncel sınıflamalar ayrıca kontrol edilmelidir.`,
    sirketWeb
      ? `${hisse.kod} için resmi şirket bilgileri ve yatırımcı ilişkileri duyuruları ayrıca ${sirketWeb.replace(
          /^https?:\/\//,
          ""
        )} adresinden kontrol edilmelidir.`
      : `${hisse.kod} için güncel yatırımcı ilişkileri bilgileri, KAP bildirimleri ve Borsa İstanbul duyuruları üzerinden ayrıca kontrol edilmelidir.`,
  ];
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

function temelOranKisaOzet(temelOranlar?: TemelOranlar): string | null {
  if (!temelOranlar) return null;

  const oranlar = [
    ["F/K", temelOranlar.sirket.fk],
    ["PD/DD", temelOranlar.sirket.pddd],
    ["PEG", temelOranlar.sirket.peg],
    ["ROE", temelOranlar.sirket.roe],
    ["Net marj", temelOranlar.sirket.netMarj],
  ]
    .filter(
      ([, deger]) =>
        typeof deger === "number" && Number.isFinite(deger) && deger !== 0
    )
    .slice(0, 4)
    .map(([etiket, deger]) => `${etiket}: ${oranFormatla(deger as number)}`);

  if (oranlar.length === 0) return null;

  return `${ceyrekEtiketi(
    temelOranlar.donem
  )} verilerinde öne çıkan oranlar ${oranlar.join(
    ", "
  )} şeklindedir. Bu değerler tek başına karar üretmez; aynı sektör şirketleri, kârlılık kalitesi ve borçlulukla birlikte okunmalıdır.`;
}

function halkaAciklikMetni(hisse: Hisse): string {
  const halkaAcik = hisse.ortaklikYapisi.ortaklar.find((ortak) =>
    /halka|diğer|diger/i.test(ortak.ad)
  );

  return halkaAcik
    ? `Halka açık/diğer ortak payı yaklaşık %${oranFormatla(
        halkaAcik.oran
      )} seviyesindedir.`
    : "Halka açıklık bilgisi ortaklık tablosundaki pay dağılımıyla birlikte okunmalıdır.";
}

function analizOzetiUret({
  hisse,
  ozgunAnaliz,
  temelOranlar,
  temettuKayitSayisi,
  sermayeKayitSayisi,
  kapKayitSayisi,
  ilgiliHisseler,
}: {
  hisse: Hisse;
  ozgunAnaliz?: OzgunAnaliz;
  temelOranlar?: TemelOranlar;
  temettuKayitSayisi: number;
  sermayeKayitSayisi: number;
  kapKayitSayisi: number;
  ilgiliHisseler: IlgiliHisse[];
}): string[] {
  const sektor = sektorEtiketi(hisse);
  const pazar = pazarEtiketi(hisse);
  const endeksler = oneCikanEndeksler(hisse);
  const faaliyet = hisse.kurumsalBilgiler?.faaliyetAlani;
  const anaOrtak = enBuyukOrtakAdi(hisse);
  const oranOzeti = temelOranKisaOzet(temelOranlar);
  const ilgiliKodlar = ilgiliHisseler.slice(0, 3).map((item) => item.kod);

  const giris = varyantSec(hisse.kod, "hisse-analiz-giris", [
    `${hisse.sirketAdi} (${hisse.kod}) için bu künye sayfası yalnızca şirket adını değil; faaliyet alanı, ortaklık yapısı, iştirakler, pazar bilgisi, endeksler, sermaye geçmişi ve varsa temel oran yorumlarını birlikte gösterir.`,
    `${hisse.kod} hissesini incelerken ilk bakılması gereken başlıklar şirketin ne iş yaptığı, hangi pazarda işlem gördüğü, ortaklık yapısında kimin öne çıktığı ve finansal oranların hangi döneme ait olduğudur. Bu sayfa bu başlıkları tek ekranda toplar.`,
    `${hisse.sirketAdi} hakkında arama yapan yatırımcılar için sayfa; şirket profili, BIST işlem bilgileri, ortaklık dağılımı, iştirakler, temettü/sermaye geçmişi ve KAP akışını aynı künye içinde okumaya yarar.`,
  ]);

  const faaliyetMetni = faaliyet
    ? `${hisse.kod} faaliyet tarafında ${faaliyet} alanında konumlanır. Şirket ${pazar} kapsamında işlem görür${
        endeksler.length > 0 ? ` ve ${endeksler.join(", ")} gibi endekslerde izlenir` : ""
      }.`
    : `${hisse.kod}, ${sektor} başlığı altında değerlendirilen bir Borsa İstanbul şirketidir. Faaliyet alanı, pazar bilgisi ve endeks üyelikleri aynı sektördeki hisselerle karşılaştırma yaparken başlangıç noktasıdır.`;

  const ortaklikMetni = `${hisse.kod} ortaklık yapısında ${anaOrtak} öne çıkar. ${halkaAciklikMetni(
    hisse
  )} Bu yapı; hakim ortak etkisi, halka açıklık ve kurumsal kararların okunması açısından fiyat verisinden bağımsız biçimde takip edilmelidir.`;

  const veriMetni = `Sayfada ${hisse.ortaklikYapisi.ortaklar.length} ortaklık kaydı, ${
    hisse.istirakler?.length ?? 0
  } iştirak/bağlı ortaklık kaydı, ${temettuKayitSayisi} temettü kaydı, ${sermayeKayitSayisi} sermaye geçmişi kaydı ve ${kapKayitSayisi} KAP gelişmesi birlikte sunulur. Bu sayısal kapsam, ${hisse.kod} sayfasını yalnızca kısa bir tanım değil, düzenli kontrol edilebilir bir şirket profili haline getirir.`;

  const karsilastirmaMetni =
    ilgiliKodlar.length > 0
      ? `${hisse.kod} değerlendirilirken ${ilgiliKodlar.join(
          ", "
        )} gibi aynı sektör, pazar veya endeks kesişimi bulunan hisselerle karşılaştırmalı okuma yapılabilir. Bu karşılaştırma özellikle oranların ve operasyonel risklerin tek başına yorumlanmasını önler.`
      : null;

  return [
    giris,
    ozgunAnaliz?.isModeli ? null : faaliyetMetni,
    ortaklikMetni,
    oranOzeti,
    veriMetni,
    karsilastirmaMetni,
  ].filter((item): item is string => doluMetin(item));
}

function kontrolListesiUret({
  hisse,
  temelOranlar,
  temettuKayitSayisi,
  sermayeKayitSayisi,
  kapKayitSayisi,
  ilgiliHisseler,
}: {
  hisse: Hisse;
  temelOranlar?: TemelOranlar;
  temettuKayitSayisi: number;
  sermayeKayitSayisi: number;
  kapKayitSayisi: number;
  ilgiliHisseler: IlgiliHisse[];
}) {
  return [
    {
      baslik: "Faaliyet ve sektör",
      aciklama: `${hisse.kod} için faaliyet alanı ${sektorEtiketi(
        hisse
      )} başlığıyla okunmalı; gelir modeli sektör döngüsüyle birlikte değerlendirilmelidir.`,
    },
    {
      baslik: "Ortaklık yapısı",
      aciklama: `${enBuyukOrtakAdi(
        hisse
      )} ve diğer pay sahipleri, yönetim etkisi ve halka açıklık açısından ayrıca izlenmelidir.`,
    },
    {
      baslik: "Finansal oranlar",
      aciklama: temelOranlar
        ? `${hisse.kod} oranları ${ceyrekEtiketi(
            temelOranlar.donem
          )} dönemine aittir; güncel fiyat yerine dönemsel finansal analiz desteği sağlar.`
        : `${hisse.kod} için temel oran verisi sınırlıysa finansal tablolar ve faaliyet raporu ayrıca kontrol edilmelidir.`,
    },
    {
      baslik: "Temettü ve sermaye hareketleri",
      aciklama:
        temettuKayitSayisi + sermayeKayitSayisi > 0
          ? `Sayfada ${temettuKayitSayisi} temettü ve ${sermayeKayitSayisi} sermaye geçmişi kaydı yer alır; geçmiş dağıtımlar gelecek dönem için garanti sayılmamalıdır.`
          : "Geçmiş temettü/sermaye hareketi sınırlıysa şirketin nakit akışı ve genel kurul kararları daha dikkatli takip edilmelidir.",
    },
    {
      baslik: "Haber akışı ve karşılaştırma",
      aciklama:
        kapKayitSayisi > 0
          ? `${kapKayitSayisi} KAP gelişmesi, şirket haber akışının son durumunu okumaya yardımcı olur. ${
              ilgiliHisseler.length > 0
                ? `Benzer hisselerle karşılaştırma için ${ilgiliHisseler
                    .slice(0, 3)
                    .map((item) => item.kod)
                    .join(", ")} de izlenebilir.`
                : "Aynı sektör şirketleriyle karşılaştırma ayrıca yapılmalıdır."
            }`
          : `${
              ilgiliHisseler.length > 0
                ? `${ilgiliHisseler
                    .slice(0, 3)
                    .map((item) => item.kod)
                    .join(", ")} gibi yakın hisselerle karşılaştırma yapılabilir.`
                : "KAP haber akışı ve aynı sektör karşılaştırmaları ayrıca kontrol edilmelidir."
            }`,
    },
  ];
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

  const baslik =
    detayliHisse.seo?.title ||
    `${hisse.kod} Hisse Bilgileri: ${hisse.sirketAdi} Ortaklık Yapısı, Faaliyet Alanı ve Şirket Profili`;

  const aciklama =
    detayliHisse.seo?.description ||
    `${hisse.kod} hisse koduyla işlem gören ${hisse.sirketAdi} hakkında ortaklık yapısı, faaliyet alanı, iştirakleri, endeks bilgileri, sermaye geçmişi ve şirket profili.`;

  const url = `${siteUrl}/hisse/${hisse.kod.toLowerCase()}`;

  return {
    title: baslik,
    description: aciklama,
    alternates: { canonical: url },
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

function MetinKarti({
  baslik,
  metin,
}: {
  baslik: string;
  metin?: string;
}) {
  if (!doluMetin(metin)) return null;

  return (
    <section className="mt-8">
      <SectionBaslik>{baslik}</SectionBaslik>
      <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm leading-7 text-slate-700 md:text-base md:leading-8">
        {metin}
      </div>
    </section>
  );
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

  const donemAd = donemEtiketi(temelOranlar.donem);
  const ceyrekAd = ceyrekEtiketi(temelOranlar.donem);
  const hesaplamaMetni = `Oranlar ${ceyrekAd} finansal verilerine ve bir önceki gün kapanış fiyatlarına göre hesaplanmıştır.`;

  return (
    <section className="mt-8">
      <SectionBaslik>Temel Oranlar ve Yorumları</SectionBaslik>

      <div className="mb-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs font-medium text-slate-500">
        <span>{hesaplamaMetni}</span>
      </div>

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

      <div className="mt-4 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm leading-7 text-amber-900">
        ⚠️ Buradaki oranlar <strong>{donemAd}</strong> dönemine ait
        geçmiş/dönemsel finansal verilere dayanır, anlık fiyatı yansıtmaz.
        Yorumlar genel bilgilendirme amaçlıdır, yatırım tavsiyesi değildir ve tek
        başına karar dayanağı olamaz.
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

  const {
    ortaklikYapisi,
    istirakler = [],
    kurumsalBilgiler,
    borsaBilgileri,
    temettuSermayeGecmisi,
  } = hisse;

  const ozgunAnaliz = detayliHisse.ozgunAnaliz;
  // Temel oranlar merkezi Excel kaynağından (oran-analizi.json) gelir; Excel'de
  // bulunmayan kod için hissenin kendi JSON'undaki değere geri düşülür.
  const temelOranlar = getTemelOranlar(hisse.kod) ?? detayliHisse.temelOranlar;
  const veriSeoSorular = (detayliHisse.seoSorular || []).filter(
    (item) => doluMetin(item.soru) && doluMetin(item.cevap)
  );
  const benzerSirketler = (detayliHisse.benzerSirketler || []).filter(
    (item) => doluMetin(item.kod) || doluMetin(item.ad)
  );

  const logo = getHisseLogo(hisse.kod);
  const sirketKisaAd = hisse.sirketAdi.split(" ").slice(0, 1).join(" ");
  const url = `${siteUrl}/hisse/${hisse.kod.toLowerCase()}`;

  const temettuKayitlari = getTemettulerBySembol(hisse.kod);
  const kapKayitlari = getKapBySembol(hisse.kod);

  // Boş hücreli satırlar elendikten sonra kalan gerçek sermaye/temettü geçmişi.
  const sermayeGecmisi = sermayeGecmisiNormalize(
    temettuSermayeGecmisi as HamSermayeKaydi[] | undefined
  );
  const sermayeIstatistikleri = temettuIstatistikleri(sermayeGecmisi);
  const temettuYorumVar = doluMetin(ozgunAnaliz?.temettuYorumu);
  // "Temettü Geçmişi" bölümü yalnızca gösterilecek gerçek içerik varsa render
  // edilir; veri yoksa başlık + "bulunmuyor" kutusu hiç çıkmaz.
  const temettuBolumuVar =
    temettuKayitlari.length > 0 ||
    sermayeGecmisi.length > 0 ||
    temettuYorumVar;

  const istiraklerdeSermayeVar = (istirakler ?? []).some((i) => i.sermaye);
  const ilgiliHisseler = ilgiliHisselerUret(hisse, benzerSirketler);
  const analizOzeti = analizOzetiUret({
    hisse,
    ozgunAnaliz,
    temelOranlar,
    temettuKayitSayisi: temettuKayitlari.length + sermayeIstatistikleri.temettuSayisi,
    sermayeKayitSayisi: sermayeIstatistikleri.sermayeIslemiSayisi,
    kapKayitSayisi: kapKayitlari.length,
    ilgiliHisseler,
  });
  const kontrolListesi = kontrolListesiUret({
    hisse,
    temelOranlar,
    temettuKayitSayisi: temettuKayitlari.length + sermayeIstatistikleri.temettuSayisi,
    sermayeKayitSayisi: sermayeIstatistikleri.sermayeIslemiSayisi,
    kapKayitSayisi: kapKayitlari.length,
    ilgiliHisseler,
  });
  const seoSorular = benzersizSorular([
    ...veriSeoSorular,
    ...genelSeoSorularUret({
      hisse,
      ozgunAnaliz,
      temelOranlar,
      temettuKayitSayisi: temettuKayitlari.length + sermayeGecmisi.length,
      kapKayitSayisi: kapKayitlari.length,
    }),
  ]).slice(0, 10);

  const okumaRehberi = okumaRehberiUret({
    hisse,
    ozgunAnaliz,
    temelOranlar,
    temettuKayitSayisi: temettuKayitlari.length + sermayeGecmisi.length,
    kapKayitSayisi: kapKayitlari.length,
  });
  const veriKaynakNotlari = veriKaynakNotlariUret({
    hisse,
    temelOranlar,
    temettuKayitSayisi: temettuKayitlari.length,
    sermayeKayitSayisi: sermayeGecmisi.length,
    kapKayitSayisi: kapKayitlari.length,
  });

  const hizliBakisKartlari = [
    {
      etiket: "BIST Kodu",
      deger: borsaBilgileri.bistKodu,
      aciklama: `${hisse.sirketAdi} Borsa İstanbul'da ${borsaBilgileri.bistKodu} koduyla takip edilir.`,
    },
    {
      etiket: "Sektör",
      deger: sektorEtiketi(hisse),
      aciklama: "Şirketin faaliyet alanı ve sektör sınıflaması finansal karşılaştırma için ilk referanstır.",
    },
    {
      etiket: "Öne Çıkan Ortak",
      deger: enBuyukOrtakAdi(hisse),
      aciklama: "Ortaklık yapısı, hakim ortak etkisi ve halka açıklık yorumunda dikkate alınır.",
    },
    {
      etiket: "İşlem Gördüğü Pazar",
      deger: pazarEtiketi(hisse),
      aciklama: "Pazar bilgisi likidite, kurumsallık ve yatırımcı ilgisi açısından izlenir.",
    },
    {
      etiket: "Katılım Endeksi",
      deger: borsaBilgileri.katilimEndeksiUygun ? "Uygun" : "Uygun Değil",
      aciklama: "Katılım uygunluğu dönemsel listelerle değişebileceği için güncel kontrol gerekir.",
    },
    {
      etiket: "Veri Kapsamı",
      deger: temelOranlar ? ceyrekEtiketi(temelOranlar.donem) : "Künye verisi",
      aciklama: temelOranlar
        ? "Temel oran yorumları dönemsel finansal verilere göre üretilir."
        : "Sayfa şirket künyesi, ortaklık, iştirak ve borsa bilgileriyle hazırlanır.",
    },
  ];

  const corporation: Record<string, unknown> = {
    "@type": "Corporation",
    "@id": `${url}#corporation`,
    name: hisse.sirketAdi,
    tickerSymbol: hisse.borsaBilgileri.bistKodu,
    url,
  };

  if (kurumsalBilgiler?.web) corporation.sameAs = [kurumsalBilgiler.web];

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
      name: `${hisse.kod} - ${sirketKisaAd} Hisse Künyesi`,
      description: `${hisse.kod} hisse koduyla işlem gören ${hisse.sirketAdi} için şirket profili, faaliyet alanı, ortaklık yapısı, borsa bilgileri, temel oranlar ve SSS.`,
      about: { "@id": `${url}#corporation` },
      isPartOf: { "@id": `${siteUrl}/#organization` },
      inLanguage: "tr",
    },
    {
      "@type": "Article",
      "@id": `${url}#article`,
      headline: `${hisse.kod} Hisse Bilgileri ve Şirket Profili`,
      description: `${hisse.sirketAdi} (${hisse.kod}) için faaliyet alanı, ortaklık yapısı, borsa bilgileri, temel oranlar, temettü geçmişi ve sık sorulan sorular.`,
      url,
      mainEntityOfPage: { "@id": `${url}#webpage` },
      author: {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: "Hoca İle Borsa",
      },
      publisher: {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: "Hoca İle Borsa",
        logo: {
          "@type": "ImageObject",
          url: `${siteUrl}/icon-512.png`,
        },
      },
      about: { "@id": `${url}#corporation` },
      articleSection: "Hisse Künyeleri",
      keywords: [
        hisse.kod,
        hisse.sirketAdi,
        `${hisse.kod} hisse`,
        `${hisse.kod} ortaklık yapısı`,
        `${hisse.kod} ne iş yapar`,
      ],
      mentions: ilgiliHisseler.slice(0, 5).map((item) => ({
        "@type": "Corporation",
        name: item.sirketAdi,
        tickerSymbol: item.kod,
        url: `${siteUrl}/hisse/${item.kod.toLowerCase()}`,
      })),
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

  if (seoSorular.length > 0) {
    graphItems.push({
      "@type": "FAQPage",
      "@id": `${url}#faq`,
      mainEntity: seoSorular.map((item) => ({
        "@type": "Question",
        name: item.soru,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.cevap,
        },
      })),
    });
  }

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
          <Link href="/" className="transition hover:text-blue-600">
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
              {logo && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={logo}
                  alt={`${hisse.kod} logo`}
                  width={56}
                  height={56}
                  className="h-14 w-14 shrink-0 rounded-xl bg-white object-contain p-2 ring-1 ring-inset ring-slate-200"
                />
              )}
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h1 className="text-2xl font-bold leading-tight tracking-tight text-slate-900 md:text-3xl">
                    {hisse.kod}
                  </h1>
                  <span className="rounded-md bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700 ring-1 ring-inset ring-blue-600/20">
                    Hisse Künyesi
                  </span>
                </div>
                <p className="mt-1 text-sm font-semibold text-slate-600 md:text-base">
                  {hisse.sirketAdi}
                </p>
              </div>
            </div>

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
                    <p className="mt-2 text-xs leading-5 text-slate-500">
                      {kart.aciklama}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {analizOzeti.length > 0 && (
              <section className="mt-8">
                <SectionBaslik>{hisse.kod} Hisse Analiz Özeti</SectionBaslik>
                <div className="space-y-4 rounded-xl border border-slate-200 bg-white p-4 text-sm leading-7 text-slate-700 md:text-base md:leading-8">
                  {analizOzeti.map((paragraf, i) => (
                    <p key={`${hisse.kod}-analiz-ozeti-${i}`}>{paragraf}</p>
                  ))}
                </div>
              </section>
            )}

            {hisse.hakkinda.length > 0 && (
              <section className="mt-8">
                <SectionBaslik>Şirket Hakkında</SectionBaslik>
                <div className="space-y-4 text-base leading-8 text-slate-700">
                  {hisse.hakkinda.map((paragraf, i) => (
                    <p key={i}>{paragraf}</p>
                  ))}
                </div>
              </section>
            )}

            <MetinKarti
              baslik="Şirket Ne İş Yapar?"
              metin={ozgunAnaliz?.isModeli}
            />

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

            <MetinKarti
              baslik="Sektördeki Yeri"
              metin={ozgunAnaliz?.sektorelKonum}
            />

            {ortaklikYapisi.ortaklar.length > 0 && (
              <section className="mt-8">
                <SectionBaslik>Ortaklık Yapısı</SectionBaslik>
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

                {ortaklikYapisi.not && (
                  <p className="mt-4 text-sm leading-7 text-slate-500">
                    {ortaklikYapisi.not}
                  </p>
                )}

                {doluMetin(ozgunAnaliz?.ortaklikYorumu) && (
                  <div className="mt-4 rounded-xl border border-blue-100 bg-blue-50 p-4 text-sm leading-7 text-blue-900 md:text-base md:leading-8">
                    <strong>Ortaklık yapısı yorumu: </strong>
                    {ozgunAnaliz.ortaklikYorumu}
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
                            Sermaye (TL)
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
                            {istirak.ad}
                          </td>
                          {istiraklerdeSermayeVar && (
                            <td className="px-4 py-2.5 text-right text-slate-700">
                              {istirak.sermaye || "—"}
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

            {kurumsalBilgiler &&
              (kurumsalBilgiler.merkez ||
                kurumsalBilgiler.web ||
                kurumsalBilgiler.odenmisSermaye ||
                (kurumsalBilgiler.yonetimKurulu?.length ?? 0) > 0) && (
                <section className="mt-8">
                  <SectionBaslik>Kurumsal Bilgiler</SectionBaslik>
                  <dl className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {kurumsalBilgiler.merkez && (
                      <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 sm:col-span-2">
                        <dt className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                          Merkez
                        </dt>
                        <dd className="mt-1 text-sm font-medium text-slate-800">
                          {kurumsalBilgiler.merkez}
                        </dd>
                      </div>
                    )}

                    {kurumsalBilgiler.web && (
                      <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
                        <dt className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                          Web Sitesi
                        </dt>
                        <dd className="mt-1 text-sm font-bold">
                          <a
                            href={kurumsalBilgiler.web}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-700 transition hover:text-blue-800 hover:underline"
                          >
                            {kurumsalBilgiler.web.replace(/^https?:\/\//, "")}
                          </a>
                        </dd>
                      </div>
                    )}

                    {kurumsalBilgiler.odenmisSermaye && (
                      <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
                        <dt className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                          Ödenmiş Sermaye
                        </dt>
                        <dd className="mt-1 text-sm font-bold text-slate-900">
                          {kurumsalBilgiler.odenmisSermaye}
                        </dd>
                      </div>
                    )}

                    {(kurumsalBilgiler.yonetimKurulu?.length ?? 0) > 0 && (
                      <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 sm:col-span-2">
                        <dt className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                          Yönetim Kurulu
                        </dt>
                        <dd className="mt-2 flex flex-wrap gap-2">
                          {kurumsalBilgiler.yonetimKurulu!.map((uye) => (
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
                  </dl>
                </section>
              )}

            <section className="mt-8">
              <SectionBaslik>Borsa Bilgileri</SectionBaslik>
              <dl className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
                  <dt className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                    BIST Kodu
                  </dt>
                  <dd className="mt-1 text-sm font-bold text-slate-900">
                    {borsaBilgileri.bistKodu}
                  </dd>
                </div>

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
                      {borsaBilgileri.halkaArzTarihi}
                    </dd>
                  </div>
                ) : null}
              </dl>
            </section>

            <section className="mt-8">
              <SectionBaslik>{hisse.kod} İçin Kontrol Listesi</SectionBaslik>
              <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                {kontrolListesi.map((item) => (
                  <div
                    key={item.baslik}
                    className="rounded-xl border border-slate-200 bg-white p-4"
                  >
                    <h3 className="text-sm font-bold text-slate-900">
                      {item.baslik}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      {item.aciklama}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section className="mt-8">
              <SectionBaslik>{hisse.kod} Hisse Sayfası Nasıl Okunmalı?</SectionBaslik>
              <div className="space-y-3">
                {okumaRehberi.map((madde, i) => (
                  <div
                    key={`${hisse.kod}-okuma-${i}`}
                    className="rounded-xl border border-slate-200 bg-white p-4 text-sm leading-7 text-slate-700"
                  >
                    {madde}
                  </div>
                ))}
              </div>
            </section>

            {doluMetin(ozgunAnaliz?.yatirimciNotu) && (
              <section className="mt-8">
                <SectionBaslik>Yatırımcı Notu</SectionBaslik>
                <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm font-medium leading-7 text-amber-900 md:text-base md:leading-8">
                  {ozgunAnaliz.yatirimciNotu}
                </div>
              </section>
            )}

            <TemelOranlarBolumu kod={hisse.kod} temelOranlar={temelOranlar} />

            {temettuBolumuVar && (
            <section className="mt-8">
              <SectionBaslik>Temettü Geçmişi</SectionBaslik>
              {temettuKayitlari.length > 0 && (
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
              )}

              {sermayeGecmisi.length > 0 && (
                <div className="mt-5">
                  <h3 className="mb-2 text-sm font-bold text-slate-700">
                    Sermaye Artırımı ve Diğer Geçmiş
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
                        {sermayeGecmisi.map((kayit, i) => (
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

              {sermayeGecmisi.length > 0 && (
                <div className="mt-4">
                  <Link
                    href={`/hisse/${hisse.kod.toLowerCase()}/temettu`}
                    prefetch={false}
                    className="inline-flex items-center gap-1 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700 transition hover:bg-blue-100"
                  >
                    {hisse.kod} temettü geçmişinin tamamı ve istatistikleri{" "}
                    <span aria-hidden>→</span>
                  </Link>
                </div>
              )}
            </section>
            )}

            {kapKayitlari.length > 0 && (
            <section className="mt-8">
              <SectionBaslik>Önemli KAP Gelişmeleri</SectionBaslik>
              <ul className="space-y-3">
                  {kapKayitlari.map((kayit, i) => (
                    <li
                      key={`${kayit.isoTarih}-${i}`}
                      className="rounded-xl border border-slate-200 bg-white p-4"
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

            {benzerSirketler.length > 0 && (
              <section className="mt-8">
                <SectionBaslik>Benzer Şirketler</SectionBaslik>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {benzerSirketler.map((item, i) => {
                    const tiklanabilir = doluMetin(item.kod) && hisseVarMi(item.kod);
                    const icerik = (
                      <>
                        <div className="flex items-center gap-2">
                          {item.kod && (
                            <span className="rounded-md bg-blue-50 px-2 py-1 text-xs font-bold text-blue-700 ring-1 ring-inset ring-blue-600/20">
                              {item.kod}
                            </span>
                          )}
                          {item.ad && (
                            <h3 className="text-sm font-bold text-slate-900">
                              {item.ad}
                            </h3>
                          )}
                        </div>
                        {item.aciklama && (
                          <p className="mt-2 text-sm leading-6 text-slate-600">
                            {item.aciklama}
                          </p>
                        )}
                      </>
                    );

                    return tiklanabilir ? (
                      <Link
                        key={`${item.kod || item.ad}-${i}`}
                        href={`/hisse/${item.kod!.toLowerCase()}`}
                        prefetch={false}
                        className="group rounded-xl border border-slate-200 bg-white p-4 transition hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-sm"
                      >
                        {icerik}
                      </Link>
                    ) : (
                      <div
                        key={`${item.kod || item.ad}-${i}`}
                        className="rounded-xl border border-slate-200 bg-white p-4"
                      >
                        {icerik}
                      </div>
                    );
                  })}
                </div>
              </section>
            )}

            {ilgiliHisseler.length > 0 && (
              <section className="mt-8">
                <SectionBaslik>
                  Aynı Sektör ve Pazarda İzlenebilecek Hisseler
                </SectionBaslik>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {ilgiliHisseler.map((item) => (
                    <Link
                      key={item.kod}
                      href={`/hisse/${item.kod.toLowerCase()}`}
                      prefetch={false}
                      className="group rounded-xl border border-slate-200 bg-white p-4 transition hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-sm"
                    >
                      <div className="flex items-center gap-2">
                        <span className="rounded-md bg-blue-50 px-2 py-1 text-xs font-bold text-blue-700 ring-1 ring-inset ring-blue-600/20">
                          {item.kod}
                        </span>
                        <h3 className="text-sm font-bold text-slate-900 group-hover:text-blue-700">
                          {item.sirketAdi}
                        </h3>
                      </div>
                      <p className="mt-2 text-sm leading-6 text-slate-600">
                        {item.neden}
                      </p>
                    </Link>
                  ))}
                </div>
              </section>
            )}

            <section className="mt-8">
              <SectionBaslik>{hisse.kod} Veri Kaynakları ve Güncelleme Notu</SectionBaslik>
              <div className="space-y-3 rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm leading-7 text-slate-700 md:text-base md:leading-8">
                {veriKaynakNotlari.map((not, i) => (
                  <p key={`${hisse.kod}-veri-kaynak-${i}`}>{not}</p>
                ))}
                <p>
                  Güncel yatırım kararı öncesinde KAP bildirimleri, şirket yatırımcı ilişkileri
                  sayfası, finansal tablolar, faaliyet raporları ve Borsa İstanbul duyuruları
                  ayrıca kontrol edilmelidir. Sayfadaki oranlar ve yorumlar bilgilendirme
                  amaçlıdır; anlık fiyat verisi veya kişiye özel yatırım tavsiyesi değildir.
                </p>
              </div>
            </section>

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
