import "server-only";

import {
  halkaArzSonuclari,
  type HalkaArzSonucu,
} from "@/data/halka-arz-sonuclari";
import {
  getOnayliIzahnameListesi,
  halkaArzGetir,
  tahsisatMetni,
  type HalkaArzVeri,
} from "@/lib/halka-arz";
import {
  metindenAdet,
  metindenOndalik,
  metindenYuzde,
  type HalkaArzDagitimTuru,
  type HalkaArzKatilimGecmisi,
  type HalkaArzLotGerceklesen,
  type HalkaArzLotSecenegi,
} from "@/lib/halka-arz-lot-modeli";

function normalizeMetin(value: string) {
  return value
    .toLocaleLowerCase("tr-TR")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/ı/g, "i");
}

function dagitimTuruBul(
  dagitimYontemi?: string,
  sonuc?: HalkaArzSonucu
): HalkaArzDagitimTuru {
  const metin = normalizeMetin(
    `${dagitimYontemi || ""} ${sonuc?.dagitimSekli || ""}`
  );

  return metin.includes("tamamen esit") || metin.includes("tamami esit")
    ? "tamamen-esit"
    : "bireysel-esit";
}

function yapisalBireyselLot(veri?: HalkaArzVeri | null) {
  if (!veri) return undefined;

  const lotlar = veri.tahsisat.flatMap((item) => {
    if (typeof item === "string") return [];
    const grup = normalizeMetin(item.grup);
    const bireysel = grup.includes("bireysel");
    const farkliGrup = grup.includes("yuksek") || grup.includes("kurumsal");
    const lot = metindenAdet(item.lot);
    return bireysel && !farkliGrup && lot ? [lot] : [];
  });

  return lotlar.length > 0
    ? lotlar.reduce((toplam, value) => toplam + value, 0)
    : undefined;
}

function tahsisattanBireyselOran(veri?: HalkaArzVeri | null) {
  if (!veri) return undefined;

  for (const item of veri.tahsisat) {
    const metin = tahsisatMetni(item);
    const normalize = normalizeMetin(metin);
    if (
      normalize.includes("bireysel") &&
      !normalize.includes("yuksek") &&
      !normalize.includes("kurumsal")
    ) {
      const oran = metindenYuzde(metin);
      if (oran !== undefined) return oran;
    }
  }

  return undefined;
}

function sonucBireyselOrani(sonuc?: HalkaArzSonucu) {
  if (!sonuc) return undefined;
  return metindenYuzde(sonuc.dagitimSekli);
}

function gerceklesenVerisi({
  sonuc,
  dagitimTuru,
  toplamLot,
  halkaArzFiyati,
}: {
  sonuc?: HalkaArzSonucu;
  dagitimTuru: HalkaArzDagitimTuru;
  toplamLot: number;
  halkaArzFiyati: number;
}): HalkaArzLotGerceklesen | undefined {
  if (!sonuc) return undefined;

  const bireyselYatirimci = metindenAdet(
    sonuc.dagitimSonucu?.bireyselYatirimciSayisi
  );
  const katilimci =
    bireyselYatirimci || metindenAdet(sonuc.katilimciSayisi);
  if (!katilimci) return undefined;

  const resmiLot = metindenAdet(sonuc.dagitimSonucu?.kisiBasiLot);
  const resmiTutar = metindenOndalik(
    sonuc.dagitimSonucu?.kisiBasiTutar
  );
  if (resmiLot !== undefined) {
    return {
      katilimci,
      kisiBasiLot: resmiLot,
      kisiBasiLotMetni: sonuc.dagitimSonucu?.kisiBasiLot,
      kisiBasiTutar: resmiTutar ?? resmiLot * halkaArzFiyati,
      lotVeriTuru: "resmi-azami",
      kaynakHref: sonuc.dagitimSonucu?.kaynakHref,
    };
  }

  const dagitilanBireyselLot = metindenAdet(
    sonuc.dagitimSonucu?.bireyselDagitilanLot
  );
  const ortalamaHavuz =
    dagitilanBireyselLot ||
    (dagitimTuru === "tamamen-esit" ? toplamLot : undefined);

  if (!ortalamaHavuz) {
    return {
      katilimci,
      kaynakHref: sonuc.dagitimSonucu?.kaynakHref,
    };
  }

  const ortalamaLot = ortalamaHavuz / katilimci;
  return {
    katilimci,
    kisiBasiLot: ortalamaLot,
    kisiBasiLotMetni: `Yaklaşık ${ortalamaLot.toLocaleString("tr-TR", {
      minimumFractionDigits: 1,
      maximumFractionDigits: 1,
    })} Lot ortalama`,
    kisiBasiTutar: ortalamaLot * halkaArzFiyati,
    lotVeriTuru: "hesaplanan-ortalama",
    kaynakHref: sonuc.dagitimSonucu?.kaynakHref,
  };
}

function secenekOlustur({
  slug,
  sirketAdi,
  kod,
}: {
  slug: string;
  sirketAdi: string;
  kod?: string;
}): HalkaArzLotSecenegi | null {
  const veri = halkaArzGetir(slug);
  const hisseKodu = (kod || veri?.bistKodu || veri?.ozet.bistKodu || "")
    .trim()
    .toUpperCase();
  if (!hisseKodu) return null;

  const sonuc = halkaArzSonuclari.find((item) => item.hisse === hisseKodu);
  const toplamLot = metindenAdet(
    veri?.ozet.pay ||
      veri?.toplamPay ||
      sonuc?.dagitimSonucu?.toplamDagitilanLot
  );
  const halkaArzFiyati = metindenOndalik(
    veri?.ozet.fiyatAralik || sonuc?.arzFiyati
  );
  if (!toplamLot || !halkaArzFiyati) return null;

  const dagitimYontemi =
    veri?.ozet.dagitimYontemi || sonuc?.dagitimSekli || "Eşit dağıtım";
  const dagitimTuru = dagitimTuruBul(dagitimYontemi, sonuc);
  const yapisalLot = yapisalBireyselLot(veri);
  const bireyselOran =
    (yapisalLot ? (yapisalLot / toplamLot) * 100 : undefined) ??
    tahsisattanBireyselOran(veri) ??
    sonucBireyselOrani(sonuc) ??
    (dagitimTuru === "tamamen-esit" ? 100 : undefined);
  if (!bireyselOran || bireyselOran > 100) return null;

  const bireyselTahsisatLotu =
    yapisalLot || Math.round(toplamLot * (bireyselOran / 100));
  const gerceklesen = gerceklesenVerisi({
    sonuc,
    dagitimTuru,
    toplamLot,
    halkaArzFiyati,
  });

  return {
    kod: hisseKodu,
    sirketAdi: veri?.sirketAdi || sirketAdi,
    slug,
    halkaArzFiyati,
    toplamLot,
    bireyselTahsisatOrani: bireyselOran,
    bireyselTahsisatLotu,
    dagitimTuru,
    dagitimYontemi,
    gerceklesen,
  };
}

export function getHalkaArzLotAraciVerisi() {
  const secenekler = getOnayliIzahnameListesi()
    .map((item) =>
      secenekOlustur({
        slug: item.klasor,
        sirketAdi: item.label,
        kod: item.kod,
      })
    )
    .filter((item): item is HalkaArzLotSecenegi => item !== null)
    .sort((a, b) => {
      const sonucSirasi = Number(Boolean(a.gerceklesen)) - Number(Boolean(b.gerceklesen));
      return sonucSirasi || a.sirketAdi.localeCompare(b.sirketAdi, "tr");
    });

  const gecmis: HalkaArzKatilimGecmisi[] = halkaArzSonuclari.flatMap(
    (sonuc) => {
      const katilimci =
        metindenAdet(sonuc.dagitimSonucu?.bireyselYatirimciSayisi) ||
        metindenAdet(sonuc.katilimciSayisi);
      if (!katilimci) return [];

      return [
        {
          kod: sonuc.hisse,
          katilimci,
          dagitimTuru: dagitimTuruBul(undefined, sonuc),
        },
      ];
    }
  );

  return { secenekler, gecmis };
}
