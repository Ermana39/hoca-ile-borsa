import { seoAciklamasi } from "@/lib/seo-metadata";
export const metadata = {
  title: "Yeni İş Anlaşması Açıklayan BIST Şirketleri",
  description: seoAciklamasi("Şirketlerin açıkladığı yeni iş ilişkileri ve sözleşmelerin hisseler üzerindeki etkisini takip edin.", "Güncel tablolar, karşılaştırmalar ve yatırımcıların takip edebileceği temel göstergeler birlikte sunulur."),
  alternates: { canonical: "https://www.hocaileborsa.com/borsa/yeni-is-anlasmalari" },
};

import Link from "@/components/NoPrefetchLink";
import yeniIsData from "./data/yeni-is-anlasmalari.json";
import YeniIsAnlasmalariTablosu from "@/components/YeniIsAnlasmalariTablosu";

export const revalidate = false;

type YeniIsSatiri = {
  sembol: string;
  tarih: string;
  tutar: number | null;
  paraBirimi: string;
  bilanco: string;
  yillikSatislar: number | null;
  oran: number | null;
};

type JsonRow = Record<string, string | number | null>;

function normalizeText(metin: string) {
  return metin
    .toLocaleLowerCase("tr-TR")
    .replace(/ı/g, "i")
    .replace(/ğ/g, "g")
    .replace(/ü/g, "u")
    .replace(/ş/g, "s")
    .replace(/ö/g, "o")
    .replace(/ç/g, "c")
    .trim();
}

function sayiCevir(deger: unknown): number | null {
  if (deger === null || deger === undefined || deger === "") return null;
  if (typeof deger === "number") return Number.isNaN(deger) ? null : deger;

  const metin = String(deger).trim();
  if (!metin) return null;

  const temiz = metin.replace(/\s/g, "").replace(/\./g, "").replace(",", ".");
  const sayi = Number(temiz);

  return Number.isNaN(sayi) ? null : sayi;
}

function metinCevir(deger: unknown): string {
  if (deger === null || deger === undefined) return "";
  return String(deger).trim();
}

function formatNumber(deger: number | null, fractionDigits = 2) {
  if (deger === null || Number.isNaN(deger)) return "-";

  return new Intl.NumberFormat("tr-TR", {
    minimumFractionDigits: 0,
    maximumFractionDigits: fractionDigits,
  }).format(deger);
}

function formatOran(deger: number | null) {
  if (deger === null || Number.isNaN(deger)) return "-";

  return new Intl.NumberFormat("tr-TR", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 4,
  }).format(deger);
}

function kolonBul(headers: string[], adaylar: string[]) {
  return (
    headers.find((header) => {
      const h = normalizeText(header);
      return adaylar.some((aday) => h.includes(normalizeText(aday)));
    }) || ""
  );
}

function verileriOku(): YeniIsSatiri[] {
  const rows = (yeniIsData.rows || []) as JsonRow[];

  if (!rows.length) return [];

  const headers =
    Array.isArray(yeniIsData.columns) && yeniIsData.columns.length > 0
      ? yeniIsData.columns
      : Object.keys(rows[0] || {});

  const sembolKolonu =
    kolonBul(headers, ["sembol", "kod", "hisse", "ticker", "symbol"]) ||
    headers[0];

  const tarihKolonu =
    kolonBul(headers, ["tarih", "is iliskisi tarihi", "iş ilişkisi tarihi"]) ||
    headers[1] ||
    "";

  const tutarKolonu =
    kolonBul(headers, [
      "yeni is iliskisi tutari",
      "yeni iş ilişkisi tutarı",
      "tutar",
      "is iliskisi tutari",
    ]) ||
    headers[2] ||
    "";

  const paraBirimiKolonu =
    kolonBul(headers, ["para birimi", "doviz", "döviz", "pb"]) ||
    headers[3] ||
    "";

  const bilancoKolonu =
    kolonBul(headers, [
      "bilanco donemi",
      "bilanço dönemi",
      "bilanco",
      "bilanço",
    ]) ||
    headers[4] ||
    "";

  const yillikSatislarKolonu =
    kolonBul(headers, [
      "yillik satislar",
      "yıllık satışlar",
      "satislar",
      "satışlar",
    ]) ||
    headers[5] ||
    "";

  const oranKolonu =
    kolonBul(headers, [
      "yeni is iliskisi / yillik satislar",
      "yeni iş ilişkisi / yıllık satışlar",
      "oran",
    ]) ||
    headers[6] ||
    "";

  return rows
    .map((row) => ({
      sembol: metinCevir(row[sembolKolonu]),
      tarih: metinCevir(row[tarihKolonu]),
      tutar: sayiCevir(row[tutarKolonu]),
      paraBirimi: metinCevir(row[paraBirimiKolonu]),
      bilanco: metinCevir(row[bilancoKolonu]),
      yillikSatislar: sayiCevir(row[yillikSatislarKolonu]),
      oran: sayiCevir(row[oranKolonu]),
    }))
    .filter((item) => item.sembol);
}

const columns = [
  {
    key: "sembol",
    label: "Sembol",
    align: "left" as const,
    width: "min-w-[140px]",
  },
  {
    key: "tarih",
    label: "Tarih",
    align: "left" as const,
    width: "min-w-[150px]",
  },
  {
    key: "tutar",
    label: "Yeni İş İlişkisi Tutarı",
    align: "right" as const,
    width: "min-w-[220px]",
  },
  {
    key: "paraBirimi",
    label: "Para Birimi",
    align: "left" as const,
    width: "min-w-[140px]",
  },
  {
    key: "bilanco",
    label: "Bilanço Dönemi",
    align: "left" as const,
    width: "min-w-[170px]",
  },
  {
    key: "yillikSatislar",
    label: "Yıllık Satışlar",
    align: "right" as const,
    width: "min-w-[170px]",
  },
  {
    key: "oran",
    label: "Yeni İş İlişkisi / Yıllık Satışlar",
    align: "right" as const,
    width: "min-w-[250px]",
  },
];

export default function YeniIsAnlasmalariPage() {
  const guncellemeTarihi = yeniIsData.guncellemeTarihi || "-";

  return (
    <main className="min-h-screen bg-white px-4 py-6 md:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 flex flex-wrap gap-3">
          <Link
            href="/"
            prefetch={false}
            className="inline-block rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100"
          >
            Ana Sayfa
          </Link>

          <Link
            href="/borsa"
            prefetch={false}
            className="inline-block rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100"
          >
            Geri
          </Link>
        </div>

        <h1 className="mb-2 text-3xl font-bold text-zinc-900">
          Yeni İş Anlaşmaları
        </h1>

        <p className="mb-8 max-w-3xl text-base text-zinc-600">
          Yeni İş Anlaşması Yapan Şirketler
        </p>

        <div className="mb-8 text-sm font-semibold text-zinc-700">
          Son güncelleme: {guncellemeTarihi}
        </div>

        <YeniIsAnlasmalariTablosu />

        <section className="mt-12 rounded-2xl border border-zinc-200 bg-white p-6">
          <h2 className="mb-4 text-2xl font-bold text-zinc-900">
            Yeni İş Anlaşmaları Hakkında
          </h2>

          <p className="mb-4 leading-7 text-zinc-700">
            Yeni iş anlaşmaları sayfası, Borsa İstanbul’da işlem gören şirketlerin
            duyurduğu yeni sözleşmeleri, iş ilişkilerini ve ticari anlaşmaları
            takip etmek isteyen yatırımcılar için hazırlanmıştır. Bu sayfada
            şirketlerin açıkladığı yeni iş tutarları, bilanço dönemleri, yıllık
            satışlara oranları ve anlaşma tarihleri detaylı şekilde incelenebilir.
          </p>

          <p className="mb-4 leading-7 text-zinc-700">
            Şirketlerin yaptığı yeni iş anlaşmaları, gelecekteki gelir beklentileri
            açısından yatırımcılar tarafından yakından takip edilir. Özellikle büyük
            tutarlı sözleşmeler, ihracat bağlantıları, kamu ihaleleri ve uzun vadeli
            projeler şirket değerlemeleri üzerinde etkili olabilir.
          </p>

          <p className="mb-4 leading-7 text-zinc-700">
            Bu sayfadaki veriler sayesinde hangi şirketlerin yeni iş anlaşması
            açıkladığını, anlaşma büyüklüğünü ve yıllık satışlara etkisini kolayca
            karşılaştırabilirsiniz. Böylece büyüme potansiyeli taşıyan şirketleri
            daha yakından izlemek mümkün hale gelir.
          </p>

          <p className="leading-7 text-zinc-700">
            Güncel yeni iş anlaşmaları, şirket KAP bildirimleri, sözleşme tutarları,
            gelir etkisi analizleri ve borsa şirket haberleri için bu sayfayı
            düzenli olarak takip edebilirsiniz.
          </p>
        </section>
      </div>

    </main>
  );
}
