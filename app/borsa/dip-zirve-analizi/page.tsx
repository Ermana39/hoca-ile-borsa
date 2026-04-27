import Link from "next/link";
import dipZirveData from "./data/dip-zirve.json";
import DipZirveTableClient, {
  type DipZirveSatiri,
} from "./_components/DipZirveTableClient";

export const metadata = {
  title: "Dip Zirve Analizi | Hoca İle Borsa",
  description:
    "Borsa İstanbul hisselerinin dip ve zirve seviyelerine uzaklıklarını karşılaştırın.",
};

export const revalidate = 3600;

type JsonRow = Record<string, string | number | null>;

function ReklamAlani({ variant = "yatay" }: { variant?: "yatay" | "icerik" }) {
  const alanClass =
    variant === "icerik"
      ? "min-h-[220px] sm:min-h-[250px] lg:min-h-[280px]"
      : "min-h-[100px] sm:min-h-[110px] lg:min-h-[120px]";

  return (
    <section
      aria-label="Reklam alanı"
      className={`w-full overflow-hidden rounded-2xl ${alanClass}`}
    >
      <div className={`w-full ${alanClass}`} />
    </section>
  );
}

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

function kolonBul(headers: string[], adaylar: string[]) {
  return (
    headers.find((header) => {
      const h = normalizeText(header);
      return adaylar.some((aday) => h.includes(normalizeText(aday)));
    }) || ""
  );
}

function verileriOku(): DipZirveSatiri[] {
  const rows = (dipZirveData.rows || []) as JsonRow[];

  if (!rows.length) return [];

  const headers =
    Array.isArray(dipZirveData.columns) && dipZirveData.columns.length > 0
      ? dipZirveData.columns
      : Object.keys(rows[0] || {});

  const sembolKolonu =
    kolonBul(headers, ["sembol", "kod", "hisse"]) || headers[0];

  const yuzdeDibeUzaklikKolonu =
    kolonBul(headers, ["% dibe uzaklik", "yuzde dibe uzaklik"]) || headers[1];

  const gunDibeUzaklikKolonu =
    kolonBul(headers, ["gun dibe uzaklik"]) || headers[2];

  const yuzdeZirveyeUzaklikKolonu =
    kolonBul(headers, ["% zirveye uzaklik", "yuzde zirveye uzaklik"]) ||
    headers[3];

  const gunZirveyeUzaklikKolonu =
    kolonBul(headers, ["gun zirveye uzaklik"]) || headers[4];

  const zirveDipKolonu =
    kolonBul(headers, ["zirve / dip", "zirve/dip"]) || headers[5];

  return rows
    .map((row) => ({
      sembol: String(row[sembolKolonu] ?? "").trim(),
      yuzdeDibeUzaklik: sayiCevir(row[yuzdeDibeUzaklikKolonu]),
      gunDibeUzaklik: sayiCevir(row[gunDibeUzaklikKolonu]),
      yuzdeZirveyeUzaklik: sayiCevir(row[yuzdeZirveyeUzaklikKolonu]),
      gunZirveyeUzaklik: sayiCevir(row[gunZirveyeUzaklikKolonu]),
      zirveDip: sayiCevir(row[zirveDipKolonu]),
    }))
    .filter((item) => item.sembol);
}

export default function DipZirveAnaliziPage() {
  const dipZirveVerileri = verileriOku();
  const guncellemeTarihi = dipZirveData.guncellemeTarihi || "-";

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
          Dip Zirve Analizi
        </h1>

        <p className="mb-8 max-w-3xl text-base text-zinc-600">
          Dip ve zirve uzaklık verileri
        </p>

        <div className="mb-8 text-sm font-semibold text-zinc-700">
          Güncelleme Tarihi: {guncellemeTarihi}
        </div>

        <section className="mb-8">
          <ReklamAlani variant="yatay" />
        </section>

        <DipZirveTableClient rows={dipZirveVerileri} />

        <section className="mt-8">
          <ReklamAlani variant="icerik" />
        </section>

        <section className="mt-12 rounded-2xl border border-zinc-200 bg-white p-6">
          <h2 className="mb-4 text-2xl font-bold text-zinc-900">
            Dip Zirve Analizi Hakkında
          </h2>

          <p className="mb-4 leading-7 text-zinc-700">
            Dip zirve analizi sayfası, Borsa İstanbul hisselerinin geçmiş dip ve
            zirve seviyelerine olan uzaklığını incelemek isteyen yatırımcılar için
            hazırlanmıştır. Bu sayfada hisselerin dip noktalarına ne kadar yakın
            olduğu, zirve seviyelerinden ne kadar uzaklaştığı ve fiyat hareketleri
            detaylı şekilde görüntülenebilir.
          </p>

          <p className="mb-4 leading-7 text-zinc-700">
            Hisse senedi dip zirve verileri, teknik analiz yapan yatırımcılar için
            önemli göstergeler arasında yer alır. Dip seviyelerine yakın hisseler
            potansiyel fırsat olarak değerlendirilebilirken, zirve seviyelerine
            yakın hisseler momentum açısından dikkat çekebilir.
          </p>

          <p className="mb-4 leading-7 text-zinc-700">
            Gün bazlı dip ve zirve uzaklık analizleri sayesinde hisselerin son
            dönemdeki performansını karşılaştırabilir, farklı sektörlerde öne çıkan
            fırsatları daha kolay belirleyebilirsiniz. Bu veriler kısa vadeli ve
            uzun vadeli yatırım stratejileri oluştururken faydalı olabilir.
          </p>

          <p className="leading-7 text-zinc-700">
            Güncel dip zirve analizi, BIST hisse karşılaştırmaları, teknik görünüm
            verileri ve detaylı piyasa incelemeleri için bu sayfayı düzenli olarak
            takip edebilirsiniz.
          </p>
        </section>
      </div>
    </main>
  );
}