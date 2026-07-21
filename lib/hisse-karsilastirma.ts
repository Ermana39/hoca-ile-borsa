import "server-only";

import oranAnaliziJson from "@/app/borsa/oran-analizi/data/oran-analizi.json";
import { temettuler } from "@/data/temettuler";
import { getTumHisseler, hisseVarMi } from "@/lib/hisseler";

type OranSatiri = Record<string, string | number | null>;

type OranAnaliziVerisi = {
  columns: string[];
  rows: OranSatiri[];
  guncellemeTarihi: string;
};

export type HisseKarsilastirmaOranlari = {
  fk: number | null;
  pdDd: number | null;
  peg: number | null;
  aktifKarliligi: number | null;
  ozsermayeKarliligi: number | null;
  pdNetSatis: number | null;
  pdEsasFaaliyetKari: number | null;
  netKarMarji: number | null;
  esasFaaliyetKarMarji: number | null;
  cariOran: number | null;
  esasFaaliyetKariKisaVadeliBorc: number | null;
  kisaVadeliBorcToplamAktif: number | null;
  kisaVadeliBorcToplamBorc: number | null;
  ozsermayeDegisimi: number | null;
  netKarDegisimi: number | null;
  netSatisDegisimi: number | null;
  esasFaaliyetKariDegisimi: number | null;
  dovizPozisyonuOzsermaye: number | null;
};

export type HisseKarsilastirmaTemettuOzeti = {
  yil: number;
  brutToplam: number;
  odemeSayisi: number;
  sonKayitTarihi: string;
};

export type HisseKarsilastirmaKaydi = {
  kod: string;
  sirketAdi: string;
  sektor: string;
  donem: string;
  profilHref?: string;
  oranlar: HisseKarsilastirmaOranlari;
  temettu: HisseKarsilastirmaTemettuOzeti | null;
};

export type HisseKarsilastirmaVeriSeti = {
  guncellemeTarihi: string;
  temettuYili: number;
  hisseler: HisseKarsilastirmaKaydi[];
};

const TEMETTU_YILI = 2026;
const oranAnalizi = oranAnaliziJson as OranAnaliziVerisi;

function sayiyaCevir(value: string | number | null | undefined) {
  if (value === null || value === undefined || value === "") return null;
  if (typeof value === "number") return Number.isFinite(value) ? value : null;

  const temiz = value
    .trim()
    .replace(/\s/g, "")
    .replace(/[₺$€£%]/g, "")
    .replace(/\.(?=\d{3}(\D|$))/g, "")
    .replace(",", ".");

  const sayi = Number(temiz);
  return Number.isFinite(sayi) ? sayi : null;
}

function doluHucreSayisi(row: OranSatiri) {
  return oranAnalizi.columns.filter((column) => {
    const value = row[column];
    return value !== null && value !== undefined && value !== "";
  }).length;
}

function temettuOzetleriniOlustur() {
  const ozetler = new Map<
    string,
    { brutToplam: number; odemeSayisi: number; sonIsoTarih: string; sonKayitTarihi: string }
  >();

  for (const kayit of temettuler) {
    if (!kayit.isoTarih.startsWith(`${TEMETTU_YILI}-`)) continue;

    const kod = kayit.sembol.toUpperCase();
    const onceki = ozetler.get(kod) ?? {
      brutToplam: 0,
      odemeSayisi: 0,
      sonIsoTarih: "",
      sonKayitTarihi: "",
    };
    const brut = sayiyaCevir(kayit.brut);

    onceki.brutToplam += brut ?? 0;
    onceki.odemeSayisi += 1;
    if (kayit.isoTarih > onceki.sonIsoTarih) {
      onceki.sonIsoTarih = kayit.isoTarih;
      onceki.sonKayitTarihi = kayit.tarih;
    }

    ozetler.set(kod, onceki);
  }

  return ozetler;
}

export function getHisseKarsilastirmaVeriSeti(): HisseKarsilastirmaVeriSeti {
  const sirketAdlari = new Map(
    getTumHisseler().map((hisse) => [
      hisse.kod.toUpperCase(),
      hisse.sirketAdi,
    ])
  );
  const temettuOzetleri = temettuOzetleriniOlustur();
  const hisseler: HisseKarsilastirmaKaydi[] = [];
  let sektor = "Sektör bilgisi yok";

  for (const row of oranAnalizi.rows) {
    const kodDegeri = typeof row.Senet === "string" ? row.Senet.trim() : "";

    if (doluHucreSayisi(row) === 1 && kodDegeri) {
      const baslik = kodDegeri.toLocaleLowerCase("tr-TR");
      if (baslik !== "sektör" && baslik !== "sektor") sektor = kodDegeri;
      continue;
    }

    const kod = kodDegeri.toUpperCase();
    if (!/^[A-Z0-9]{2,6}$/.test(kod)) continue;

    const donem = row["Dönem"];
    if (donem === null || donem === undefined || donem === "") continue;

    const temettuOzeti = temettuOzetleri.get(kod);

    hisseler.push({
      kod,
      sirketAdi: sirketAdlari.get(kod) ?? kod,
      sektor,
      donem: String(donem),
      profilHref: hisseVarMi(kod) ? `/hisse/${kod.toLowerCase()}` : undefined,
      oranlar: {
        fk: sayiyaCevir(row["F/K"]),
        pdDd: sayiyaCevir(row["PD/DD"]),
        peg: sayiyaCevir(row["PEG Oranı"]),
        aktifKarliligi: sayiyaCevir(row["NetKar/ Top.Aktif"]),
        ozsermayeKarliligi: sayiyaCevir(row["NetKar/ Özsermaye"]),
        pdNetSatis: sayiyaCevir(row["PD/ NetSatış"]),
        pdEsasFaaliyetKari: sayiyaCevir(row["PD/ E.Faal.Kar"]),
        netKarMarji: sayiyaCevir(row["NetKar/ NetSatış"]),
        esasFaaliyetKarMarji: sayiyaCevir(row["E.Faal.Kar/ NetSatış"]),
        cariOran: sayiyaCevir(row["Cari Oran"]),
        esasFaaliyetKariKisaVadeliBorc: sayiyaCevir(row["E.Faal.Kar/ KV.Borç"]),
        kisaVadeliBorcToplamAktif: sayiyaCevir(row["KV.Borç/ Top.Aktif"]),
        kisaVadeliBorcToplamBorc: sayiyaCevir(row["KV.Bor./Top.Borç"]),
        ozsermayeDegisimi: sayiyaCevir(row["Özsermaye Değ%"]),
        netKarDegisimi: sayiyaCevir(row["Net Kar Değ%"]),
        netSatisDegisimi: sayiyaCevir(row["Net Satış Değ%"]),
        esasFaaliyetKariDegisimi: sayiyaCevir(row["Esas Faal Kar Değ%"]),
        dovizPozisyonuOzsermaye: sayiyaCevir(row["Döviz Poz./Özsermaye"]),
      },
      temettu: temettuOzeti
        ? {
            yil: TEMETTU_YILI,
            brutToplam: Number(temettuOzeti.brutToplam.toFixed(4)),
            odemeSayisi: temettuOzeti.odemeSayisi,
            sonKayitTarihi: temettuOzeti.sonKayitTarihi,
          }
        : null,
    });
  }

  return {
    guncellemeTarihi: oranAnalizi.guncellemeTarihi,
    temettuYili: TEMETTU_YILI,
    hisseler: hisseler.sort((a, b) => a.kod.localeCompare(b.kod, "tr")),
  };
}
