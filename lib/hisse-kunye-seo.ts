import type { TemelOranlar } from "@/lib/oranYorumla";
import { seoAciklamasi } from "@/lib/seo-metadata";

type HisseKunyeSeoGirdisi = {
  kod: string;
  sirketAdi: string;
  katilimEndeksiUygun: boolean;
  sektor?: string;
  temelOranlar?: TemelOranlar;
  temettuVarMi: boolean;
  kapKaydiVarMi?: boolean;
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
  sektor,
  temelOranlar,
  temettuVarMi,
  kapKaydiVarMi = false,
}: HisseKunyeSeoGirdisi) {
  const temelVeriBasligi = temelOranlar ? "Temel Veriler" : "Şirket Profili";
  const baslik = `${kod} Hisse: Ne İş Yapar, Katılım Endeksi ve ${temelVeriBasligi}`;
  const katilimMetni = katilimEndeksiUygun
    ? "Katılım Endeksi durumu: uygun"
    : "Katılım Endeksi durumu: uygun değil";
  const sektorMetni = sektor?.trim()
    ? `${sirketAdi}, ${sektor.trim()} izlenir.`
    : `${sirketAdi} şirket profili ve faaliyet bilgileri.`;
  const ekBasliklar = [
    oranOzeti(temelOranlar),
    "ortaklık yapısı",
    ...(temettuVarMi ? ["temettü geçmişi"] : []),
    ...(kapKaydiVarMi ? ["son haber ve KAP gelişmeleri"] : []),
  ];

  return {
    baslik,
    aciklama: seoAciklamasi(
      `${kod} ne iş yapar? ${sektorMetni} ${katilimMetni}.`,
      `${konulariBirlestir(ekBasliklar)} birlikte sunulur.`
    ),
  };
}
