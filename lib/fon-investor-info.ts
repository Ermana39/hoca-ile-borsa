import kontrolluVeri from "@/data/fonlar/fund-investor-info-overrides.json";
import type { Fund } from "@/lib/fon-platform";

export type KatilimUygunlugu =
  | "uygun"
  | "uygun-degil"
  | "uygulanamaz"
  | "bilinmiyor";

export type BilgiKaynagi = {
  etiket: string;
  url: string;
};

export type VergilendirmeBilgisi = {
  durum: "net" | "kosullu" | "bilinmiyor";
  stopajOrani: string | null;
  aciklama: string;
  kaynak: BilgiKaynagi;
  guncellemeTarihi: string;
};

export type FundInvestorInfo = {
  nitelikliYatirimci: true | false | null;
  satisKisitlamasi: "nitelikli-yatirimci" | "ozel-fon" | "yok" | "bilinmiyor";
  nitelikliYatirimciAciklamasi: string;
  katilimUygunlugu: KatilimUygunlugu;
  katilimAciklamasi: string;
  vergilendirme: VergilendirmeBilgisi;
  siniflandirmaKaynagi: BilgiKaynagi;
};

type KontrolluFonBilgisi = {
  semsiyeTuru: string;
  nitelikliYatirimci: boolean;
  katilimUygunlugu: Exclude<KatilimUygunlugu, "uygulanamaz" | "bilinmiyor">;
  kaynak: BilgiKaynagi;
};

type KontrolluVeri = {
  guncellemeTarihi: string;
  fonlar: Record<string, KontrolluFonBilgisi>;
};

const veri = kontrolluVeri as KontrolluVeri;

export const fonBilgiKaynaklari = {
  spk: {
    etiket: "SPK Yatırım Fonları Tanıtım Rehberi",
    url: "https://spk.gov.tr/kurumlar/fonlar/yatirim-fonlari/menkul-kiymet-yatirim-fonlari/tanitim-rehberi",
  },
  tefas: {
    etiket: "TEFAS Fon Verileri",
    url: "https://www.tefas.gov.tr/tr/fon-verileri",
  },
  gib: {
    etiket: "GİB Geçici 67 Kesinti Oranları",
    url: "https://cdn.gib.gov.tr/api/gibportal-file/file/getFileResources?objectKey=arsiv%2Fyardim-kaynaklar%2Fyararli-bilgiler%2FGVK_Gecici_67_Madde_Kapsaminda_Kesinti_Oranlari.pdf",
  },
} satisfies Record<string, BilgiKaynagi>;

export const etkiAnaliziFonKodlari = new Set([
  "TLY",
  "PHE",
  "DFI",
  "KHA",
  "THF",
  "TMV",
]);

function aramaMetni(value: string) {
  return value
    .toLocaleLowerCase("tr-TR")
    .replace(/ı/g, "i")
    .replace(/ğ/g, "g")
    .replace(/ü/g, "u")
    .replace(/ş/g, "s")
    .replace(/ö/g, "o")
    .replace(/ç/g, "c");
}

function bilinmeyenKategori(value: string) {
  const normalized = aramaMetni(value);
  return !normalized || normalized === "bilinmiyor";
}

function kategoriMi(value: string, aranan: string) {
  return aramaMetni(value).includes(aramaMetni(aranan));
}

function hisseSenediYogunFonMu(fund: Fund, semsiyeTuru: string) {
  if (bilinmeyenKategori(semsiyeTuru)) return false;
  return aramaMetni(fund.ad).includes("hisse senedi yogun");
}

function ozelFonMu(fund: Fund) {
  return aramaMetni(fund.ad).includes("ozel fon");
}

function vergilendirmeBilgisiOlustur(
  fund: Fund,
  semsiyeTuru: string
): VergilendirmeBilgisi {
  const guncellemeTarihi = veri.guncellemeTarihi;
  const hisseSenediYogun = hisseSenediYogunFonMu(fund, semsiyeTuru);
  const serbestFon = kategoriMi(semsiyeTuru, "Serbest");

  if (hisseSenediYogun && !serbestFon) {
    return {
      durum: "net",
      stopajOrani: "%0",
      aciklama: `${fund.kod} hisse senedi yoğun fon olduğu için Türkiye'de yerleşik gerçek kişilerin fon kazançlarında stopaj oranı %0'dır. Yatırımcı statüsü ve mevzuat değişiklikleri sonucu etkileyebilir.`,
      kaynak: fonBilgiKaynaklari.gib,
      guncellemeTarihi,
    };
  }

  if (hisseSenediYogun && serbestFon) {
    return {
      durum: "kosullu",
      stopajOrani: "TEFAS durumuna göre %0 veya %17,5",
      aciklama: `${fund.kod} hisse senedi yoğun serbest fondur. 27 Mart 2026'dan itibaren alınan ve TEFAS'ta işlem görmeyen bu tür fonlarda %17,5; istisna kapsamındakilerde %0 oranı uygulanabilir. Kesin oran için alış tarihi ve işlem kanalı kontrol edilmelidir.`,
      kaynak: fonBilgiKaynaklari.gib,
      guncellemeTarihi,
    };
  }

  if (!bilinmeyenKategori(semsiyeTuru)) {
    return {
      durum: "kosullu",
      stopajOrani: "%17,5 (9 Temmuz 2025 ve sonrası alımlar)",
      aciklama: `${fund.kod} için Türkiye'de yerleşik gerçek kişilerin 9 Temmuz 2025 ve sonrasında aldığı paylardan doğan kazançlarda genel stopaj oranı %17,5'tir. Daha eski alımlar, yatırımcı türü ve mevzuattaki istisnalar farklı oran doğurabilir.`,
      kaynak: fonBilgiKaynaklari.gib,
      guncellemeTarihi,
    };
  }

  return {
    durum: "bilinmiyor",
    stopajOrani: null,
    aciklama: `${fund.kod} fonunun resmi sınıflandırması mevcut veri setinde doğrulanamadığı için fon bazında güvenli bir stopaj oranı gösterilemiyor. Alış tarihi ve yatırımcı statüsü de oranı değiştirebilir.`,
    kaynak: fonBilgiKaynaklari.gib,
    guncellemeTarihi,
  };
}

export function getFundInvestorInfo(fund: Fund): FundInvestorInfo {
  const kontrollu = veri.fonlar[fund.kod];
  const semsiyeTuru = kontrollu?.semsiyeTuru ?? fund.kategori;
  const siniflandirmaKaynagi = kontrollu?.kaynak ?? fonBilgiKaynaklari.tefas;
  const kategoriBiliniyor = !bilinmeyenKategori(semsiyeTuru);
  const nitelikliYatirimci = kontrollu
    ? kontrollu.nitelikliYatirimci
    : kategoriBiliniyor
      ? kategoriMi(semsiyeTuru, "Serbest")
      : null;
  const katilimUygunlugu: KatilimUygunlugu = kontrollu
    ? kontrollu.katilimUygunlugu
    : kategoriBiliniyor
      ? kategoriMi(semsiyeTuru, "Katılım")
        ? "uygun"
        : "uygun-degil"
      : "bilinmiyor";
  const satisKisitlamasi =
    nitelikliYatirimci === true
      ? "nitelikli-yatirimci"
      : nitelikliYatirimci === null
        ? "bilinmiyor"
        : ozelFonMu(fund)
          ? "ozel-fon"
          : "yok";

  const nitelikliYatirimciAciklamasi =
    nitelikliYatirimci === true
      ? `${fund.kod} fonunda nitelikli yatırımcı şartı vardır. Serbest şemsiye fonların katılma payları yalnızca nitelikli yatırımcılara satılabilir.`
      : nitelikliYatirimci === false
        ? satisKisitlamasi === "ozel-fon"
          ? `${fund.kod} fonunda nitelikli yatırımcı şartı bulunmuyor; ancak özel fon niteliği nedeniyle satış önceden belirlenmiş yatırımcılarla sınırlı olabilir.`
          : `${fund.kod} fonunun resmi şemsiye türünde nitelikli yatırımcı şartı bulunmuyor. Satın alma imkânı yine dağıtım kuruluşuna ve fonun alım satım esaslarına bağlıdır.`
        : `${fund.kod} fonunda nitelikli yatırımcı şartı olup olmadığı mevcut resmi sınıflandırma verisiyle doğrulanamadı.`;

  const katilimAciklamasi =
    katilimUygunlugu === "uygun"
      ? `${fund.kod}, Katılım Şemsiye Fonu altında sınıflandırıldığı için katılım finans esaslarına uygun varlık ve işlemlerle yönetilir.`
      : katilimUygunlugu === "uygun-degil"
        ? `${fund.kod}, Katılım Şemsiye Fonu altında sınıflandırılmıyor; bu nedenle katılım finans esaslarına uygun fon olarak değerlendirilmez.`
        : `${fund.kod} fonunun katılım finans esaslarına uygunluğu mevcut resmi sınıflandırma verisiyle doğrulanamadı.`;

  return {
    nitelikliYatirimci,
    satisKisitlamasi,
    nitelikliYatirimciAciklamasi,
    katilimUygunlugu,
    katilimAciklamasi,
    vergilendirme: vergilendirmeBilgisiOlustur(fund, semsiyeTuru),
    siniflandirmaKaynagi,
  };
}

export function nitelikliYatirimciEtiketi(value: true | false | null) {
  if (value === true) return "Var";
  if (value === false) return "Yok";
  return "Bilinmiyor";
}

export function katilimUygunluguEtiketi(value: KatilimUygunlugu) {
  if (value === "uygun") return "Uygun";
  if (value === "uygun-degil") return "Uygun değil";
  if (value === "uygulanamaz") return "Uygulanamaz";
  return "Veri bulunamadı";
}
