import type { TemelOranlar } from "@/lib/oranYorumla";

type HisseKunyeSeoGirdisi = {
  kod: string;
  sirketAdi: string;
  katilimEndeksiUygun: boolean;
  temelOranlar?: TemelOranlar;
  temettuVarMi: boolean;
};

const oranFormatlayici = new Intl.NumberFormat("tr-TR", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

function gecerliOran(value?: number | null): value is number {
  return typeof value === "number" && Number.isFinite(value) && value !== 0;
}

function konulariBirlestir(konular: string[]): string {
  if (konular.length <= 1) return konular[0] || "Şirket Bilgileri";
  return `${konular.slice(0, -1).join(", ")} ve ${konular.at(-1)}`;
}

function oranOzeti(temelOranlar?: TemelOranlar): string {
  if (!temelOranlar) return "şirket bilgileri";

  const oranlar: string[] = [];
  const { fk, pddd } = temelOranlar.sirket;

  if (gecerliOran(fk)) oranlar.push(`F/K ${oranFormatlayici.format(fk)}`);
  if (gecerliOran(pddd)) {
    oranlar.push(`PD/DD ${oranFormatlayici.format(pddd)}`);
  }

  return oranlar.length > 0
    ? `temel oranları (${oranlar.join(", ")})`
    : "temel oranları ve finansal göstergeleri";
}

export function hisseKunyeSeoMetinleri({
  kod,
  sirketAdi,
  katilimEndeksiUygun,
  temelOranlar,
  temettuVarMi,
}: HisseKunyeSeoGirdisi) {
  const konular = [
    ...(temelOranlar ? ["Temel Oranlar"] : []),
    "Katılım",
    ...(temettuVarMi ? ["Temettü"] : []),
    "Ortaklık",
  ];
  const baslik = `${kod} Hisse: ${konulariBirlestir(konular)}`;
  const katilimMetni = katilimEndeksiUygun
    ? "Katılım Endeksi'ne uygundur"
    : "Katılım Endeksi'ne uygun değildir";
  const sonCumle = temettuVarMi
    ? `${sirketAdi} ortaklık yapısı ve temettü geçmişi.`
    : `${sirketAdi} ortaklık yapısı ve şirket bilgileri.`;

  return {
    baslik,
    aciklama: `${kod} ${oranOzeti(temelOranlar)}; ${katilimMetni}. ${sonCumle}`,
  };
}
