import fs from "node:fs";
import path from "node:path";
import {
  bekleyenDeger,
  tahsisatMetni,
  type HalkaArzVeri,
} from "@/lib/halka-arz";

const TASLAK_ARSIV_DIZINI = path.join(
  process.cwd(),
  "data",
  "halka-arz-taslak-arsivi"
);

export type KarsilastirmaDurumu =
  | "degisti"
  | "kesinlesti"
  | "kaldirildi"
  | "ayni";

export type KarsilastirmaSatiri = {
  id: string;
  etiket: string;
  taslak: string[];
  onayli: string[];
  durum: KarsilastirmaDurumu;
};

export type KarsilastirmaBolumu = {
  id: string;
  baslik: string;
  aciklama: string;
  satirlar: KarsilastirmaSatiri[];
};

export type TaslakOnayKarsilastirmasi = {
  slug: string;
  sirketAdi: string;
  taslakSurumTarihi?: string;
  bolumler: KarsilastirmaBolumu[];
  ozet: Record<KarsilastirmaDurumu, number>;
};

type TaslakArsivKaydi = {
  version: number;
  slug: string;
  archivedAt: string;
  source?: {
    type?: string;
    date?: string;
    commit?: string;
  };
  data: HalkaArzVeri;
};

function taslakArsivGetir(slug: string): TaslakArsivKaydi | null {
  if (!/^[a-z0-9-]+$/.test(slug)) return null;

  try {
    const filePath = path.join(TASLAK_ARSIV_DIZINI, `${slug}.json`);
    const archive = JSON.parse(
      fs.readFileSync(filePath, "utf8")
    ) as TaslakArsivKaydi;

    if (!archive?.data?.ozet || archive.slug !== slug) return null;
    return archive;
  } catch {
    return null;
  }
}

function normalize(value: string) {
  return value
    .trim()
    .replace(/\s+/g, " ")
    .toLocaleLowerCase("tr-TR")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function metinler(...values: Array<string | null | undefined>) {
  return values
    .filter((value): value is string => Boolean(value && !bekleyenDeger(value)))
    .map((value) => value.trim());
}

function ilkMetin(...values: Array<string | null | undefined>) {
  return metinler(...values).slice(0, 1);
}

function liste(values?: Array<string | null | undefined>) {
  return (values || [])
    .filter((value): value is string => Boolean(value && !bekleyenDeger(value)))
    .map((value) => value.trim());
}

function ayniDegerler(left: string[], right: string[]) {
  if (left.length !== right.length) return false;
  const normalizedLeft = left.map(normalize).sort((a, b) => a.localeCompare(b, "tr"));
  const normalizedRight = right
    .map(normalize)
    .sort((a, b) => a.localeCompare(b, "tr"));

  return normalizedLeft.every((value, index) => value === normalizedRight[index]);
}

function durum(taslak: string[], onayli: string[]): KarsilastirmaDurumu {
  if (taslak.length === 0 && onayli.length > 0) return "kesinlesti";
  if (taslak.length > 0 && onayli.length === 0) return "kaldirildi";
  return ayniDegerler(taslak, onayli) ? "ayni" : "degisti";
}

function satir(
  id: string,
  etiket: string,
  taslak: string[],
  onayli: string[]
): KarsilastirmaSatiri | null {
  if (taslak.length === 0 && onayli.length === 0) return null;
  return { id, etiket, taslak, onayli, durum: durum(taslak, onayli) };
}

function finansalSatirlar(veri: HalkaArzVeri) {
  return veri.finansalVeriler.map((row) => {
    const tanimliDonemler = veri.finansalDonemler?.filter(
      (donem) => row.donemler[donem] !== undefined
    );
    const donemler =
      tanimliDonemler && tanimliDonemler.length > 0
        ? tanimliDonemler
        : Object.keys(row.donemler);
    const degerler = donemler
      .map((donem) => `${donem}: ${row.donemler[donem]}`)
      .join(" · ");
    return degerler ? `${row.kalem} — ${degerler}` : row.kalem;
  });
}

function taahhutSatirlari(veri: HalkaArzVeri) {
  const taahhut = veri.taahhutOzeti;
  if (!taahhut) return [];

  return [
    taahhut.fiyatIstikrari
      ? `Fiyat istikrarı: ${taahhut.fiyatIstikrari}`
      : null,
    taahhut.satmamaTaahhudu
      ? `Satmama taahhüdü: ${taahhut.satmamaTaahhudu}`
      : null,
    taahhut.halkaAciklik
      ? `Halka açıklık: ${taahhut.halkaAciklik}`
      : null,
    taahhut.gunlukAlimEmri
      ? `Günlük alım emri: ${taahhut.gunlukAlimEmri}`
      : null,
  ].filter((value): value is string => Boolean(value));
}

function tahsisatSatirlari(veri: HalkaArzVeri) {
  return veri.tahsisat.map(tahsisatMetni);
}

function bolum(
  id: string,
  baslik: string,
  aciklama: string,
  satirlar: Array<KarsilastirmaSatiri | null>
): KarsilastirmaBolumu | null {
  const mevcutSatirlar = satirlar.filter(
    (item): item is KarsilastirmaSatiri => item !== null
  );
  if (mevcutSatirlar.length === 0) return null;
  return { id, baslik, aciklama, satirlar: mevcutSatirlar };
}

export function taslakOnayKarsilastirmasiOlustur(
  slug: string,
  onayli: HalkaArzVeri
): TaslakOnayKarsilastirmasi | null {
  const archive = taslakArsivGetir(slug);
  if (!archive) return null;

  const taslak = archive.data;
  const bolumler = [
    bolum(
      "temel-bilgiler",
      "Temel Halka Arz Bilgileri",
      "Onay sürecinde kesinleşen fiyat, tarih, pay miktarı ve temel işlem koşulları.",
      [
        satir(
          "halka-arz-fiyati",
          "Halka arz fiyatı",
          metinler(taslak.ozet.fiyatAralik),
          metinler(onayli.ozet.fiyatAralik)
        ),
        satir(
          "talep-tarihi",
          "Talep toplama tarihi",
          metinler(taslak.ozet.halkaArzTarihi),
          metinler(onayli.ozet.halkaArzTarihi)
        ),
        satir(
          "toplam-pay",
          "Toplam halka arz payı",
          ilkMetin(taslak.ozet.pay, taslak.toplamPay),
          ilkMetin(onayli.ozet.pay, onayli.toplamPay)
        ),
        satir(
          "dagitim-yontemi",
          "Dağıtım yöntemi",
          metinler(taslak.ozet.dagitimYontemi),
          metinler(onayli.ozet.dagitimYontemi)
        ),
        satir(
          "araci-kurum",
          "Aracı kurum",
          metinler(taslak.ozet.araciKurum),
          metinler(onayli.ozet.araciKurum)
        ),
        satir(
          "halka-aciklik",
          "Halka açıklık oranı",
          metinler(taslak.halkaAciklikOrani),
          metinler(onayli.halkaAciklikOrani)
        ),
        satir(
          "pazar",
          "İşlem pazarı",
          metinler(taslak.ozet.pazar),
          metinler(onayli.ozet.pazar)
        ),
        satir(
          "katilim-endeksi",
          "Katılım Endeksi",
          metinler(taslak.ozet.katilimEndeksi),
          metinler(onayli.ozet.katilimEndeksi)
        ),
      ]
    ),
    bolum(
      "arz-yapisi",
      "Arz Yapısı ve Yatırımcı Dağılımı",
      "Sermaye artırımı, ortak satışı, ek satış ve yatırımcı gruplarındaki değişiklikler.",
      [
        satir(
          "halka-arz-sekli",
          "Sermaye artırımı ve ortak satışı",
          liste(taslak.halkaArzSekli),
          liste(onayli.halkaArzSekli)
        ),
        satir(
          "tahsisat",
          "Tahsisat grupları",
          liste(tahsisatSatirlari(taslak)),
          liste(tahsisatSatirlari(onayli))
        ),
        satir(
          "satis-yontemi",
          "Satış yöntemi ve koşulları",
          liste(taslak.satisYontemi),
          liste(onayli.satisYontemi)
        ),
      ]
    ),
    bolum(
      "fon-taahhut",
      "Fon Kullanımı ve Taahhütler",
      "Halka arz gelirinin kullanım planı ile fiyat istikrarı ve satış kısıtlarındaki son durum.",
      [
        satir(
          "fon-kullanimi",
          "Fon kullanım planı",
          liste(taslak.fonKullanim),
          liste(onayli.fonKullanim)
        ),
        satir(
          "taahhutler",
          "Taahhütler",
          liste(taahhutSatirlari(taslak)),
          liste(taahhutSatirlari(onayli))
        ),
      ]
    ),
    bolum(
      "finansallar",
      "Finansal Görünüm",
      "Taslakta ve onaylı kayıtta özetlenen finansal dönemler ile temel göstergeler.",
      [
        satir(
          "finansal-veriler",
          "Finansal dönemler ve veriler",
          liste(finansalSatirlar(taslak)),
          liste(finansalSatirlar(onayli))
        ),
      ]
    ),
  ].filter((item): item is KarsilastirmaBolumu => item !== null);

  const ozet: Record<KarsilastirmaDurumu, number> = {
    degisti: 0,
    kesinlesti: 0,
    kaldirildi: 0,
    ayni: 0,
  };

  for (const item of bolumler.flatMap((item) => item.satirlar)) {
    ozet[item.durum] += 1;
  }

  return {
    slug,
    sirketAdi: onayli.sirketAdi,
    taslakSurumTarihi: archive.source?.date,
    bolumler,
    ozet,
  };
}
