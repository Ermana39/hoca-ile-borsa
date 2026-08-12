import type { HalkaArzVeri } from "@/lib/halka-arz";
import {
  seoAciklamasi,
  seoBasliginiSinirla,
  seoMetniniTemizle,
} from "@/lib/seo-metadata";

type HalkaArzAsamasi = "taslak" | "onayli";

function kesinDeger(value?: string): value is string {
  if (!value?.trim()) return false;
  if (value.trim() === "-") return false;
  return !/hazırlanıyor|açıklanmadı|belirlenmedi|henüz/i.test(value);
}

function sirketKokAdi(value: string): string {
  return seoMetniniTemizle(value)
    .replace(/^\([^)]+\)\s*/, "")
    .replace(
      /\s+(?:(?:Sanayi|Sanayii|San\.)\s*(?:ve\s*)?)?(?:(?:Ticaret|Tic\.)\s*)?A\.?Ş\.?$/iu,
      ""
    )
    .replace(/\s+A\.?Ş\.?$/iu, "")
    .trim();
}

function kelimelerleKisalt(value: string, maxLength: number): string {
  if (value.length <= maxLength) return value;
  const kelimeler = value.split(" ");
  let sonuc = "";

  for (const kelime of kelimeler) {
    const aday = sonuc ? `${sonuc} ${kelime}` : kelime;
    if (aday.length > maxLength) break;
    sonuc = aday;
  }

  return sonuc || value.slice(0, maxLength).trim();
}

function halkaArzKimligi(veri: HalkaArzVeri, asama: HalkaArzAsamasi): string {
  const kodAdayi = veri.bistKodu || veri.ozet.bistKodu;
  const kod = kesinDeger(kodAdayi) ? kodAdayi : undefined;
  const kokAd = veri.markaAdi || sirketKokAdi(veri.sirketAdi);
  const kisaAd = kelimelerleKisalt(kokAd, kod ? 24 : asama === "taslak" ? 32 : 34);

  return kod ? `${kod} ${kisaAd}` : kisaAd;
}

function titleNiyeti(veri: HalkaArzVeri, asama: HalkaArzAsamasi): string {
  if (asama === "taslak") return "Halka Arz Taslak İzahnamesi";
  if (veri.dagitimSonuclari) return "Halka Arz Sonuçları ve Lot Dağılımı";
  if (kesinDeger(veri.ozet.islemBaslangicTarihi)) {
    return "Halka Arz ve İşlem Tarihi";
  }
  if (
    kesinDeger(veri.ozet.halkaArzTarihi) &&
    kesinDeger(veri.ozet.fiyatAralik)
  ) {
    return "Halka Arz Tarihi ve Fiyatı";
  }
  return "Halka Arz Bilgileri";
}

function bilgileriBirlestir(bilgiler: string[]): string {
  if (bilgiler.length <= 1) return bilgiler[0] || "izahname bilgileri";
  return `${bilgiler.slice(0, -1).join(", ")} ve ${bilgiler.at(-1)}`;
}

export function halkaArzSeoMetinleri(
  veri: HalkaArzVeri,
  asama: HalkaArzAsamasi
) {
  const kimlik = halkaArzKimligi(veri, asama);
  const title = seoBasliginiSinirla(`${kimlik}: ${titleNiyeti(veri, asama)}`);
  const bilgiler: string[] = [];

  if (kesinDeger(veri.ozet.fiyatAralik)) {
    bilgiler.push(`halka arz fiyatı ${veri.ozet.fiyatAralik}`);
  }
  if (kesinDeger(veri.ozet.halkaArzTarihi)) {
    bilgiler.push(`talep tarihleri ${veri.ozet.halkaArzTarihi}`);
  }
  if (kesinDeger(veri.ozet.islemBaslangicTarihi)) {
    bilgiler.push(`işlem tarihi ${veri.ozet.islemBaslangicTarihi}`);
  }
  if (kesinDeger(veri.ozet.pay || veri.toplamPay)) {
    bilgiler.push(`toplam pay ${veri.ozet.pay || veri.toplamPay}`);
  }
  if (veri.dagitimSonuclari) bilgiler.push("dağıtım sonuçları");

  const durumMetni =
    asama === "taslak"
      ? "Taslak izahnamede açıklanan lot, dağıtım, fon kullanımı ve finansal bilgiler birlikte sunulur."
      : "Onaylı izahname, dağıtım ve fon kullanım bilgileri birlikte sunulur.";
  const description = seoAciklamasi(
    `${veri.sirketAdi} halka arzında ${bilgileriBirlestir(bilgiler)}.`,
    durumMetni
  );

  return { title, description };
}
