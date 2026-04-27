import Link from "next/link";
import fonTercihData from "./data/tercih-edilen-hisseler.json";
import FonTercihTableClient, {
  type FonSatiri,
} from "./_components/FonTercihTableClient";

export const metadata = {
  title:
    "Haftalık Yatırım Fonlarının En Çok Tercih Ettiği Hisseler | Hoca İle Borsa",
  description:
    "Yatırım fonlarının haftalık olarak en çok tercih ettiği Borsa İstanbul hisselerini inceleyin.",
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

function temizMetin(deger: unknown) {
  if (deger === null || deger === undefined) return "";
  return String(deger).trim();
}

function fonVerileriniOku(): FonSatiri[] {
  const rows = (fonTercihData.rows || []) as JsonRow[];

  if (!rows.length) return [];

  const headers =
    Array.isArray(fonTercihData.columns) && fonTercihData.columns.length > 0
      ? fonTercihData.columns
      : Object.keys(rows[0] || {});

  return rows
    .map((row) => ({
      sembol: temizMetin(row[headers[0]]) || null,
      degisim: row[headers[1]] ?? null,
      sonToplamYuzde: row[headers[2]] ?? null,
      ilkToplamYuzde: row[headers[3]] ?? null,
      sonToplamTakasTl: row[headers[4]] ?? null,
      ilkToplamTakasTl: row[headers[5]] ?? null,
      takasTlSonEmeklilikFon: row[headers[6]] ?? null,
      yuzdeSonEmeklilikFon: row[headers[7]] ?? null,
      takasTlIlkEmeklilikFon: row[headers[8]] ?? null,
      yuzdeIlkEmeklilikFon: row[headers[9]] ?? null,
      takasTlSonYatirimFon: row[headers[10]] ?? null,
      yuzdeSonYatirimFon: row[headers[11]] ?? null,
      takasTlIlkYatirimFon: row[headers[12]] ?? null,
      yuzdeIlkYatirimFon: row[headers[13]] ?? null,
    }))
    .filter((item) => item.sembol);
}

export default function HaftalikYatirimFonlarininEnCokTercihEttigiHisselerPage() {
  const fonVerileri = fonVerileriniOku();
  const guncellemeTarihi = fonTercihData.guncellemeTarihi || "-";

  return (
    <main className="min-h-screen bg-white px-4 py-6 pb-24 md:px-6">
      <div className="mx-auto max-w-[1600px]">
        <div className="mb-6 flex gap-3">
          <Link
            href="/"
            prefetch={false}
            className="inline-block rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100"
          >
            Ana Sayfa
          </Link>

          <Link
            href="/fonlar"
            prefetch={false}
            className="inline-block rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100"
          >
            Geri
          </Link>
        </div>

        <section className="mb-6">
          <ReklamAlani variant="yatay" />
        </section>

        <h1 className="mb-2 text-3xl font-bold text-zinc-900">
          Haftalık Yatırım Fonlarının En Çok Tercih Ettiği Hisseler
        </h1>

        <p className="mb-6 text-sm text-zinc-600">
          Veriler düzenli olarak güncellenen fon hareketleri tablosundan alınır.
        </p>

        <div className="mb-8 text-sm font-semibold text-zinc-700">
          Güncelleme Tarihi: {guncellemeTarihi}
        </div>

        <FonTercihTableClient rows={fonVerileri} />

        <section className="mt-12 rounded-2xl border border-zinc-200 bg-white p-6">
          <h2 className="mb-4 text-2xl font-bold text-zinc-900">
            Haftalık Yatırım Fonlarının En Çok Tercih Ettiği Hisseler Hakkında
          </h2>

          <p className="mb-4 leading-7 text-zinc-700">
            Haftalık yatırım fonlarının en çok tercih ettiği hisseler tablosu,
            yatırım fonlarının son haftada yoğun şekilde yöneldiği hisse
            senetlerini gösterir. Bu veriler, profesyonel fon yöneticilerinin
            hangi şirket hisselerine ilgi gösterdiğini takip etmek isteyen
            yatırımcılar için önemli bir referans niteliğindedir.
          </p>

          <p className="mb-4 leading-7 text-zinc-700">
            Yatırım fonlarının en çok aldığı hisseler, piyasadaki kurumsal para
            akışını analiz etmek açısından büyük önem taşır. Fonların tercih ettiği
            hisseler genellikle güçlü bilanço beklentisi, sektör potansiyeli veya
            büyüme fırsatları nedeniyle öne çıkabilir. Bu nedenle haftalık fon
            hareketleri yatırım stratejileri oluştururken yakından takip edilir.
          </p>

          <p className="mb-4 leading-7 text-zinc-700">
            Sayfada yer alan değişim oranları, toplam takas tutarları ve emeklilik
            fonu ile yatırım fonu dağılımları sayesinde detaylı analiz yapabilir,
            hangi hisselerde kurumsal talebin arttığını görebilirsiniz. Bu veriler,
            hisse karşılaştırması ve piyasa eğilimi takibi için faydalıdır.
          </p>

          <p className="leading-7 text-zinc-700">
            Güncel fon hareketleri, yatırım fonlarının tercih ettiği hisseler,
            haftalık kurumsal para girişleri ve hisse bazlı detaylı analizler için
            bu sayfayı düzenli olarak takip edebilirsiniz.
          </p>
        </section>
      </div>
    </main>
  );
}