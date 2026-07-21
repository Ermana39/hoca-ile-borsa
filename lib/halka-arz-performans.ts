import "server-only";

import {
  halkaArzKapanisTarihi,
  type HalkaArzSonucu,
} from "@/data/halka-arz-sonuclari";
import { halkaArzBistBaslangiclari } from "@/data/halka-arz-bist-baslangiclari";
import { getTumGunlukOzetler, type GunlukOzet } from "@/lib/gunluk-ozet";

export type HalkaArzBistKarsilastirmasi = {
  hisseGetirisi: number;
  bist100Getirisi: number;
  getiriFarkiPuan: number;
  baslangicTarihi: string;
  baslangicSeviyesi: number;
  baslangicSlug?: string;
  baslangicKaynagi: "gunluk-ozet" | "tarihsel-kayit";
  bitisTarihi: string;
  bitisSeviyesi: number;
  bitisSlug: string;
};

export function piyasaSayisinaCevir(value?: string | null): number | undefined {
  if (!value) return undefined;
  let temiz = value.trim().replace(/\s/g, "").replace(/%/g, "");
  if (!temiz) return undefined;

  const sonVirgul = temiz.lastIndexOf(",");
  const sonNokta = temiz.lastIndexOf(".");

  if (sonVirgul >= 0 && sonNokta >= 0) {
    if (sonVirgul > sonNokta) {
      temiz = temiz.replace(/\./g, "").replace(",", ".");
    } else {
      temiz = temiz.replace(/,/g, "");
    }
  } else if (sonVirgul >= 0) {
    temiz = temiz.replace(",", ".");
  }

  const sayi = Number(temiz);
  return Number.isFinite(sayi) ? sayi : undefined;
}

function islemTarihiniIsoYap(value: string): string | undefined {
  const eslesme = value.match(/^(\d{2})\.(\d{2})\.(\d{4})$/);
  if (!eslesme) return undefined;
  return `${eslesme[3]}-${eslesme[2]}-${eslesme[1]}`;
}

export function getHalkaArzGetirisi(
  sonuc: Pick<HalkaArzSonucu, "arzFiyati" | "guncelFiyat">
): number | undefined {
  const arzFiyati = piyasaSayisinaCevir(sonuc.arzFiyati);
  const guncelFiyat = piyasaSayisinaCevir(sonuc.guncelFiyat);
  if (!arzFiyati || guncelFiyat === undefined) return undefined;
  return ((guncelFiyat / arzFiyati) - 1) * 100;
}

export function yuzdeMetni(value: number, basamak = 2): string {
  const isaret = value > 0 ? "+" : "";
  return `${isaret}${value.toLocaleString("tr-TR", {
    minimumFractionDigits: basamak,
    maximumFractionDigits: basamak,
  })}%`;
}

export function puanMetni(value: number, basamak = 2): string {
  const isaret = value > 0 ? "+" : "";
  return `${isaret}${value.toLocaleString("tr-TR", {
    minimumFractionDigits: basamak,
    maximumFractionDigits: basamak,
  })} puan`;
}

function oncekiOzet(
  ozetler: GunlukOzet[],
  islemTarihi: string
): GunlukOzet | undefined {
  return ozetler.find((ozet) => ozet.isoTarih < islemTarihi);
}

export function getHalkaArzBistKarsilastirmasi(
  sonuc: HalkaArzSonucu
): HalkaArzBistKarsilastirmasi | undefined {
  const islemTarihi = islemTarihiniIsoYap(sonuc.islemTarihi);
  if (!islemTarihi || halkaArzKapanisTarihi < islemTarihi) return undefined;

  const ozetler = getTumGunlukOzetler();
  const gunlukOzetBaslangici = oncekiOzet(ozetler, islemTarihi);
  const tarihselBaslangic = halkaArzBistBaslangiclari[islemTarihi];
  const bitis = ozetler.find(
    (ozet) => ozet.isoTarih === halkaArzKapanisTarihi
  );
  if ((!gunlukOzetBaslangici && !tarihselBaslangic) || !bitis) {
    return undefined;
  }

  const baslangicSeviyesi = gunlukOzetBaslangici
    ? piyasaSayisinaCevir(gunlukOzetBaslangici.bist.kapanis)
    : tarihselBaslangic?.kapanis;
  const bitisSeviyesi = piyasaSayisinaCevir(bitis.bist.kapanis);
  const hisseGetirisi = getHalkaArzGetirisi(sonuc);
  if (!baslangicSeviyesi || !bitisSeviyesi || hisseGetirisi === undefined) {
    return undefined;
  }

  const bist100Getirisi = ((bitisSeviyesi / baslangicSeviyesi) - 1) * 100;
  const getiriFarkiPuan = hisseGetirisi - bist100Getirisi;

  return {
    hisseGetirisi,
    bist100Getirisi,
    getiriFarkiPuan,
    baslangicTarihi:
      gunlukOzetBaslangici?.isoTarih ?? tarihselBaslangic!.oncekiIslemGunu,
    baslangicSeviyesi,
    baslangicKaynagi: gunlukOzetBaslangici
      ? "gunluk-ozet"
      : "tarihsel-kayit",
    ...(gunlukOzetBaslangici
      ? { baslangicSlug: gunlukOzetBaslangici.slug }
      : {}),
    bitisTarihi: bitis.isoTarih,
    bitisSeviyesi,
    bitisSlug: bitis.slug,
  };
}
