export type HalkaArzDagitimTuru = "bireysel-esit" | "tamamen-esit";

export type HalkaArzLotGerceklesen = {
  katilimci: number;
  kisiBasiLot?: number;
  kisiBasiLotMetni?: string;
  kisiBasiTutar?: number;
  lotVeriTuru?: "resmi-azami" | "hesaplanan-ortalama";
  kaynakHref?: string;
};

export type HalkaArzLotSecenegi = {
  kod: string;
  sirketAdi: string;
  slug: string;
  halkaArzFiyati: number;
  toplamLot: number;
  bireyselTahsisatOrani: number;
  bireyselTahsisatLotu: number;
  dagitimTuru: HalkaArzDagitimTuru;
  dagitimYontemi: string;
  gerceklesen?: HalkaArzLotGerceklesen;
};

export type HalkaArzKatilimGecmisi = {
  kod: string;
  katilimci: number;
  dagitimTuru: HalkaArzDagitimTuru;
};

export type KatilimIstatistikleri = {
  kayitSayisi: number;
  ortalama: number;
  altCeyrek: number;
  medyan: number;
  ustCeyrek: number;
};

export type LotSenaryoSonucu = {
  id: "dusuk" | "normal" | "yuksek";
  katilimci: number;
  tahminiLot: number;
  gerekliTutar: number;
};

function ilkSayi(value?: string | null) {
  if (!value) return undefined;
  return value.match(/-?\d[\d.,\s]*/)?.[0].trim();
}

export function metindenAdet(value?: string | number | null) {
  if (typeof value === "number") {
    return Number.isFinite(value) ? value : undefined;
  }

  const eslesme = ilkSayi(value);
  if (!eslesme) return undefined;

  const sayi = Number(eslesme.replace(/[^\d-]/g, ""));
  return Number.isFinite(sayi) ? sayi : undefined;
}

export function metindenOndalik(value?: string | number | null) {
  if (typeof value === "number") {
    return Number.isFinite(value) ? value : undefined;
  }

  const eslesme = ilkSayi(value)?.replace(/\s/g, "");
  if (!eslesme) return undefined;

  const virgulSayisi = (eslesme.match(/,/g) || []).length;
  const noktaSayisi = (eslesme.match(/\./g) || []).length;
  const sonVirgul = eslesme.lastIndexOf(",");
  const sonNokta = eslesme.lastIndexOf(".");
  const sonAyirac = Math.max(sonVirgul, sonNokta);
  const ondalikBasamak = sonAyirac >= 0 ? eslesme.length - sonAyirac - 1 : 0;

  let normalize = eslesme;
  if (virgulSayisi > 0 && noktaSayisi > 0) {
    const ondalikAyirac = sonVirgul > sonNokta ? "," : ".";
    const binlikAyirac = ondalikAyirac === "," ? "." : ",";
    normalize = normalize.replaceAll(binlikAyirac, "");
    normalize = normalize.replace(ondalikAyirac, ".");
  } else if (virgulSayisi + noktaSayisi > 1) {
    const ayirac = virgulSayisi > 0 ? "," : ".";
    if (ondalikBasamak === 2) {
      const parcalar = normalize.split(ayirac);
      const ondalik = parcalar.pop();
      normalize = `${parcalar.join("")}.${ondalik}`;
    } else {
      normalize = normalize.replaceAll(ayirac, "");
    }
  } else if (virgulSayisi + noktaSayisi === 1) {
    const ayirac = virgulSayisi === 1 ? "," : ".";
    normalize =
      ondalikBasamak === 3
        ? normalize.replace(ayirac, "")
        : normalize.replace(ayirac, ".");
  }

  const sayi = Number(normalize);
  return Number.isFinite(sayi) ? sayi : undefined;
}

export function metindenYuzde(value?: string | number | null) {
  if (typeof value === "number") return metindenOndalik(value);
  if (!value) return undefined;

  const yuzdeSonrasi = value.match(/%\s*(\d+(?:[.,]\d+)?)/)?.[1];
  return metindenOndalik(yuzdeSonrasi || value);
}

function ceyreklik(siraliDegerler: number[], oran: number) {
  if (siraliDegerler.length === 1) return siraliDegerler[0];

  const konum = (siraliDegerler.length - 1) * oran;
  const alt = Math.floor(konum);
  const ust = Math.ceil(konum);
  if (alt === ust) return siraliDegerler[alt];

  return Math.round(
    siraliDegerler[alt] +
      (siraliDegerler[ust] - siraliDegerler[alt]) * (konum - alt)
  );
}

export function katilimIstatistikleriniHesapla(
  gecmis: HalkaArzKatilimGecmisi[],
  dagitimTuru: HalkaArzDagitimTuru,
  haricKod?: string
): KatilimIstatistikleri | undefined {
  const kod = haricKod?.trim().toUpperCase();
  const sayilar = gecmis
    .filter(
      (item) =>
        item.dagitimTuru === dagitimTuru &&
        item.katilimci > 0 &&
        (!kod || item.kod !== kod)
    )
    .map((item) => item.katilimci)
    .sort((a, b) => a - b);

  if (sayilar.length === 0) return undefined;

  return {
    kayitSayisi: sayilar.length,
    ortalama: Math.round(
      sayilar.reduce((toplam, value) => toplam + value, 0) / sayilar.length
    ),
    altCeyrek: ceyreklik(sayilar, 0.25),
    medyan: ceyreklik(sayilar, 0.5),
    ustCeyrek: ceyreklik(sayilar, 0.75),
  };
}

export function lotSenaryolariniHesapla(
  bireyselTahsisatLotu: number,
  halkaArzFiyati: number,
  istatistikler?: KatilimIstatistikleri
): LotSenaryoSonucu[] {
  if (
    !istatistikler ||
    bireyselTahsisatLotu <= 0 ||
    halkaArzFiyati <= 0
  ) {
    return [];
  }

  const senaryolar = [
    { id: "dusuk" as const, katilimci: istatistikler.altCeyrek },
    { id: "normal" as const, katilimci: istatistikler.medyan },
    { id: "yuksek" as const, katilimci: istatistikler.ustCeyrek },
  ];

  return senaryolar.map((senaryo) => {
    const tahminiLot =
      senaryo.katilimci > 0
        ? Math.floor(bireyselTahsisatLotu / senaryo.katilimci)
        : 0;

    return {
      ...senaryo,
      tahminiLot,
      gerekliTutar: tahminiLot * halkaArzFiyati,
    };
  });
}
