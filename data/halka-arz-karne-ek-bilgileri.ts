export type HalkaArzKarneEkBilgisi = {
  talepTarihi?: string;
  katilimOzeti?: string;
  katilimKaynakHref?: string;
  taslakBasvuruTarihi?: string;
  taslakKaynakHref?: string;
};

// İzahname JSON'unda bulunmayan, süreç haberlerinde doğrulanmış karne bilgileri.
// Yeni bilgi geldikçe yalnızca ilgili hisse kaydı güncellenir.
export const halkaArzKarneEkBilgileri: Record<
  string,
  HalkaArzKarneEkBilgisi
> = {
  ALBTN: {
    katilimOzeti:
      "Tacirler Yatırım aracılığıyla Borsa İstanbul Birincil Piyasa",
    katilimKaynakHref:
      "/haber/albayrak-hazir-beton-halka-arz-izahnamesi-yayinlandi",
  },
  BETAE: {
    katilimOzeti:
      "TSKB, Ziraat Yatırım ve Yatırım Finansman liderliğinde konsorsiyum",
    katilimKaynakHref:
      "/haber/beta-enerji-halka-arzi-basladi-talep-toplama-ve-lot-dagilimi",
  },
  EKDMR: {
    katilimOzeti: "A1 Capital liderliğinde konsorsiyum",
    katilimKaynakHref:
      "/halka-arz/onayli-izahnameler/ekinciler-demir-celik-ekdmr",
  },
  EKIM: {
    talepTarihi: "1-2-3 Temmuz 2026",
    katilimOzeti:
      "Ak Yatırım ve Vakıf Yatırım liderliğinde konsorsiyum",
    katilimKaynakHref:
      "/haber/5-halka-arz-talep-bilgileri-t1-t2-saat-araci-kurum",
  },
  GOLDA: {
    talepTarihi: "1-2 Temmuz 2026",
    katilimOzeti: "Tüm banka ve aracı kurumlar",
    katilimKaynakHref:
      "/haber/5-halka-arz-talep-bilgileri-t1-t2-saat-araci-kurum",
  },
  ISVEA: {
    katilimOzeti:
      "Halk Yatırım ve Ahlatcı Yatırım liderliğinde konsorsiyum",
    katilimKaynakHref:
      "/haber/5-halka-arz-talep-bilgileri-t1-t2-saat-araci-kurum",
  },
  KARCL: {
    katilimOzeti:
      "A1 Capital, Vakıf Yatırım ve Ziraat Yatırım liderliğinde konsorsiyum",
    katilimKaynakHref:
      "/haber/kardemir-celik-sanayi-halka-arz-izahnamesi-yayinlandi",
  },
  MASFEN: {
    katilimOzeti: "Deniz Yatırım liderliğinde konsorsiyum",
    katilimKaynakHref:
      "/haber/masfen-enerji-halka-arz-izahnamesi-yayinlandi",
  },
  METEN: {
    katilimOzeti: "İnfo Yatırım liderliğinde konsorsiyum",
    katilimKaynakHref:
      "/haber/metgun-enerji-yatirimlari-halka-arz-izahnamesi-yayinlandi",
  },
  ORZAX: {
    katilimOzeti: "İnfo Yatırım liderliğinde konsorsiyum",
    katilimKaynakHref:
      "/haber/5-halka-arz-talep-bilgileri-t1-t2-saat-araci-kurum",
  },
  SARAE: {
    talepTarihi: "8-9-10 Temmuz 2026",
    katilimOzeti: "Tera Yatırım liderliğinde konsorsiyum",
    katilimKaynakHref:
      "/haber/sa-ra-enerji-halka-arz-izahnamesi-yayinlandi",
  },
  SSAAT: {
    talepTarihi: "6-7-8 Temmuz 2026",
    katilimOzeti:
      "Garanti Yatırım ve Halk Yatırım liderliğinde konsorsiyum",
    katilimKaynakHref:
      "/haber/saat-ve-saat-halka-arz-izahnamesi-yayinlandi",
  },
  SOHOE: {
    katilimOzeti: "Tüm banka ve aracı kurumlar",
    katilimKaynakHref:
      "/haber/5-halka-arz-talep-bilgileri-t1-t2-saat-araci-kurum",
  },
};

export function getHalkaArzKarneEkBilgisi(kod?: string | null) {
  if (!kod) return undefined;
  return halkaArzKarneEkBilgileri[kod.trim().toLocaleUpperCase("tr-TR")];
}
