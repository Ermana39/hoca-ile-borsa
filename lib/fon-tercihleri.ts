import fonTercihData from "@/app/fonlar/haftalik-yatirim-fonlarinin-en-cok-tercih-ettigi-hisseler/data/tercih-edilen-hisseler.json";

type KaynakSatir = Record<string, string | number | null>;

type FonTercihKaynagi = {
  rows?: KaynakSatir[];
  guncellemeTarihi?: string;
  donemBaslangici?: string;
  donemBitisi?: string;
};

export type HaftalikFonHisseTercihi = {
  sembol: string;
  degisim: number;
  sonToplamYuzde: number;
  ilkToplamYuzde: number;
  sonToplamTakasTl: number;
  ilkToplamTakasTl: number;
  takasTlSonEmeklilikFon: number;
  yuzdeSonEmeklilikFon: number;
  takasTlIlkEmeklilikFon: number;
  yuzdeIlkEmeklilikFon: number;
  takasTlSonYatirimFon: number;
  yuzdeSonYatirimFon: number;
  takasTlIlkYatirimFon: number;
  yuzdeIlkYatirimFon: number;
};

function sayiyaCevir(deger: unknown): number | null {
  if (typeof deger === "number") return Number.isFinite(deger) ? deger : null;
  if (typeof deger !== "string") return null;

  let metin = deger.trim().replace(/%/g, "").replace(/\s+/g, "");
  if (!metin) return null;
  if (metin.includes(",")) metin = metin.replace(/\./g, "").replace(",", ".");

  const sayi = Number(metin.replace(/[^\d.-]/g, ""));
  return Number.isFinite(sayi) ? sayi : null;
}

function satiriOku(row: KaynakSatir): HaftalikFonHisseTercihi | null {
  const sembol = String(row.Sembol ?? "").trim().toUpperCase();
  const sayisalDegerler = [
    sayiyaCevir(row["Değişim"]),
    sayiyaCevir(row["Son Toplam %"]),
    sayiyaCevir(row["İlk Toplam %"]),
    sayiyaCevir(row["Son Toplam Takas TL"]),
    sayiyaCevir(row["İlk Toplam Takas TL"]),
    sayiyaCevir(row["Takas TL Son(Emeklilik Fon)"]),
    sayiyaCevir(row["% Son (Emeklilik Fon)"]),
    sayiyaCevir(row["Takas TL İlk(Emeklilik Fon)"]),
    sayiyaCevir(row["% İlk (Emeklilik Fon)"]),
    sayiyaCevir(row["Takas TL Son(Yatırım Fon)"]),
    sayiyaCevir(row["% Son (Yatırım Fon)"]),
    sayiyaCevir(row["Takas TL İlk(Yatırım Fon)"]),
    sayiyaCevir(row["% İlk (Yatırım Fon)"]),
  ];

  if (!sembol || sayisalDegerler.some((deger) => deger === null)) return null;

  const [
    degisim,
    sonToplamYuzde,
    ilkToplamYuzde,
    sonToplamTakasTl,
    ilkToplamTakasTl,
    takasTlSonEmeklilikFon,
    yuzdeSonEmeklilikFon,
    takasTlIlkEmeklilikFon,
    yuzdeIlkEmeklilikFon,
    takasTlSonYatirimFon,
    yuzdeSonYatirimFon,
    takasTlIlkYatirimFon,
    yuzdeIlkYatirimFon,
  ] = sayisalDegerler as number[];

  return {
    sembol,
    degisim,
    sonToplamYuzde,
    ilkToplamYuzde,
    sonToplamTakasTl,
    ilkToplamTakasTl,
    takasTlSonEmeklilikFon,
    yuzdeSonEmeklilikFon,
    takasTlIlkEmeklilikFon,
    yuzdeIlkEmeklilikFon,
    takasTlSonYatirimFon,
    yuzdeSonYatirimFon,
    takasTlIlkYatirimFon,
    yuzdeIlkYatirimFon,
  };
}

export function getHaftalikFonHisseTercihleri() {
  const kaynak = fonTercihData as unknown as FonTercihKaynagi;
  const gorulenSemboller = new Set<string>();
  const hisseler: HaftalikFonHisseTercihi[] = [];

  for (const kaynakSatir of kaynak.rows ?? []) {
    const hisse = satiriOku(kaynakSatir);
    if (!hisse || gorulenSemboller.has(hisse.sembol)) continue;
    gorulenSemboller.add(hisse.sembol);
    hisseler.push(hisse);
  }

  return {
    hisseler,
    guncellemeTarihi: kaynak.guncellemeTarihi,
    donemBaslangici: kaynak.donemBaslangici,
    donemBitisi: kaynak.donemBitisi,
  };
}
