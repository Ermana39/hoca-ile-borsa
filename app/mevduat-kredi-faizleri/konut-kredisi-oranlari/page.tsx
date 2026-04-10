import fs from "fs";
import path from "path";
import Link from "next/link";
import type { Metadata } from "next";
import { addView } from "@/lib/page-stats";
import { KrediHesaplayici } from "@/components/faiz-hesaplayicilar";

export const metadata: Metadata = {
  title: "Konut Kredisi Oranları | Hoca İle Borsa",
  description:
    "Bankalara göre güncel konut kredisi oranları listesi. Banka adı ve minimum faiz oranı bilgileri.",
  alternates: {
    canonical: "/mevduat-kredi-faizleri/konut-kredisi-oranlari",
  },
};

export const dynamic = "force-dynamic";
export const revalidate = 0;

type BankaFaiz = {
  banka: string;
  minFaiz: string;
};

type GunlukFaizKaydi = {
  date: string;
  ortalamaFaiz: number;
};

const bankaFaizListesi: BankaFaiz[] = [
  { banka: "Akbank", minFaiz: "%2,89" },
  { banka: "Albaraka", minFaiz: "%2,85" },
  { banka: "Alternatif Bank", minFaiz: "%3,10" },
  { banka: "Anadolubank", minFaiz: "%3,05" },
  { banka: "DenizBank", minFaiz: "%3,19" },
  { banka: "Garanti BBVA", minFaiz: "%2,99" },
  { banka: "Halkbank", minFaiz: "%2,79" },
  { banka: "ING", minFaiz: "%3,14" },
  { banka: "İş Bankası", minFaiz: "%3,09" },
  { banka: "Kuveyt Türk", minFaiz: "%2,95" },
  { banka: "QNB", minFaiz: "%3,12" },
  { banka: "TEB", minFaiz: "%3,08" },
  { banka: "VakıfBank", minFaiz: "%2,74" },
  { banka: "Vakıf Katılım", minFaiz: "%2,88" },
  { banka: "Yapı Kredi", minFaiz: "%3,15" },
  { banka: "Ziraat Bankası", minFaiz: "%2,69" },
  { banka: "Ziraat Katılım", minFaiz: "%2,83" },
];

function ReklamAlani({ variant = "yatay" }: { variant?: "yatay" | "icerik" }) {
  const alanClass =
    variant === "icerik"
      ? "min-h-[220px] sm:min-h-[250px] lg:min-h-[280px]"
      : "min-h-[100px] sm:min-h-[110px] lg:min-h-[120px]";

  return (
    <section
      aria-label="Reklam alanı"
      className={`w-full overflow-hidden rounded-2xl border border-dashed border-zinc-300 bg-zinc-50 ${alanClass}`}
    >
      <div className={`w-full ${alanClass}`} />
    </section>
  );
}

function faizMetniniSayiyaCevir(faiz: string) {
  return Number(faiz.replace("%", "").replace(",", ".").trim()) || 0;
}

function grafikDosyaYolu() {
  return path.join(process.cwd(), "data", "konut-kredisi-gunluk.json");
}

function grafikVerisiniOku(): GunlukFaizKaydi[] {
  const filePath = grafikDosyaYolu();

  try {
    if (!fs.existsSync(path.dirname(filePath))) {
      fs.mkdirSync(path.dirname(filePath), { recursive: true });
    }

    if (!fs.existsSync(filePath)) {
      fs.writeFileSync(filePath, "[]", "utf8");
      return [];
    }

    const raw = fs.readFileSync(filePath, "utf8");
    const parsed = JSON.parse(raw) as GunlukFaizKaydi[];

    if (!Array.isArray(parsed)) return [];

    return parsed.filter(
      (item) =>
        item &&
        typeof item.date === "string" &&
        typeof item.ortalamaFaiz === "number"
    );
  } catch {
    return [];
  }
}

function grafikVerisiniYaz(veri: GunlukFaizKaydi[]) {
  const filePath = grafikDosyaYolu();

  if (!fs.existsSync(path.dirname(filePath))) {
    fs.mkdirSync(path.dirname(filePath), { recursive: true });
  }

  fs.writeFileSync(filePath, JSON.stringify(veri, null, 2), "utf8");
}

function bugununKaydiniEkle() {
  const bugun = new Date().toISOString().slice(0, 10);

  const faizler = bankaFaizListesi.map((item) => faizMetniniSayiyaCevir(item.minFaiz));
  const toplamFaiz = faizler.reduce((toplam, item) => toplam + item, 0);
  const ortalamaFaiz = faizler.length > 0 ? Number((toplamFaiz / faizler.length).toFixed(2)) : 0;

  const mevcut = grafikVerisiniOku();
  const bugunVar = mevcut.some((item) => item.date === bugun);

  if (!bugunVar) {
    mevcut.push({
      date: bugun,
      ortalamaFaiz,
    });

    const sirali = mevcut.sort((a, b) => a.date.localeCompare(b.date)).slice(-90);
    grafikVerisiniYaz(sirali);
    return sirali;
  }

  return mevcut.sort((a, b) => a.date.localeCompare(b.date)).slice(-90);
}

function son30GunGrafikVerisi(veri: GunlukFaizKaydi[]) {
  return veri.slice(-30);
}

function tarihEtiketi(date: string) {
  const [, month, day] = date.split("-");
  return `${day}.${month}`;
}

function GrafikAlani({ veri }: { veri: GunlukFaizKaydi[] }) {
  if (veri.length === 0) {
    return (
      <div className="rounded-2xl border border-zinc-200 bg-white px-4 py-10 text-center text-zinc-500">
        Henüz grafik verisi yok.
      </div>
    );
  }

  const width = 900;
  const height = 280;
  const padding = 28;

  const minVal = Math.min(...veri.map((item) => item.ortalamaFaiz));
  const maxVal = Math.max(...veri.map((item) => item.ortalamaFaiz));
  const range = Math.max(maxVal - minVal, 1);

  const points = veri.map((item, index) => {
    const x =
      veri.length === 1
        ? width / 2
        : padding + (index * (width - padding * 2)) / (veri.length - 1);

    const y =
      height -
      padding -
      ((item.ortalamaFaiz - minVal) / range) * (height - padding * 2);

    return { x, y, value: item.ortalamaFaiz, label: tarihEtiketi(item.date) };
  });

  const polylinePoints = points.map((p) => `${p.x},${p.y}`).join(" ");

  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-4 md:p-6">
      <div className="mb-4">
        <h2 className="text-2xl font-bold text-zinc-900">
          Günlük Ortalama Konut Kredisi Grafiği
        </h2>
        <p className="mt-2 text-sm text-zinc-600">
          Günlük ortalama değerler ile grafik hazırlanmıştır.
        </p>
      </div>

      <div className="overflow-x-auto">
        <div className="min-w-[900px]">
          <svg viewBox={`0 0 ${width} ${height}`} className="h-[280px] w-full">
            <line x1={padding} y1={height - padding} x2={width - padding} y2={height - padding} stroke="#d4d4d8" strokeWidth="1" />
            <line x1={padding} y1={padding} x2={padding} y2={height - padding} stroke="#d4d4d8" strokeWidth="1" />

            <polyline fill="none" stroke="#18181b" strokeWidth="3" points={polylinePoints} />

            {points.map((point, index) => (
              <g key={`${point.label}-${index}`}>
                <circle cx={point.x} cy={point.y} r="4" fill="#18181b" />
                <text x={point.x} y={point.y - 12} textAnchor="middle" fontSize="12" fill="#52525b">
                  %{point.value}
                </text>
              </g>
            ))}
          </svg>

          <div className="mt-2 grid grid-cols-6 gap-2 text-xs text-zinc-500 md:grid-cols-10 xl:grid-cols-15">
            {veri.map((item) => (
              <div key={item.date} className="text-center">
                {tarihEtiketi(item.date)}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function KonutKredisiOranlariPage() {
  addView("/mevduat-kredi-faizleri/konut-kredisi-oranlari");

  const tumGrafikVerisi = bugununKaydiniEkle();
  const grafikVerisi = son30GunGrafikVerisi(tumGrafikVerisi);

  return (
    <main className="min-h-screen bg-white px-4 py-6 md:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 flex flex-wrap gap-3">
          <Link href="/" className="inline-block rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100">
            Ana Sayfa
          </Link>

          <Link href="/mevduat-kredi-faizleri" className="inline-block rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100">
            Geri
          </Link>
        </div>

        <h1 className="mb-2 text-3xl font-bold text-zinc-900">
          Konut Kredisi Oranları
        </h1>

        <p className="mb-8 text-base text-zinc-600">
          Banka adı ve minimum konut kredisi faizi listesi.
        </p>

        <section className="mb-8">
          <ReklamAlani variant="yatay" />
        </section>

        <section className="overflow-hidden rounded-2xl border border-zinc-200 bg-white">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[320px] text-sm md:text-base">
              <thead className="bg-zinc-100">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold text-zinc-900">
                    Banka
                  </th>
                  <th className="px-4 py-3 text-right font-semibold text-zinc-900">
                    Minimum Faiz
                  </th>
                </tr>
              </thead>

              <tbody>
                {bankaFaizListesi.map((item, index) => (
                  <tr key={item.banka} className={index % 2 === 0 ? "bg-white" : "bg-sky-50/60"}>
                    <td className="px-4 py-3 font-medium text-zinc-800">
                      {item.banka}
                    </td>
                    <td className="px-4 py-3 text-right font-semibold text-zinc-900">
                      {item.minFaiz}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-8">
          <ReklamAlani variant="icerik" />
        </section>

        <section className="mt-8">
          <GrafikAlani veri={grafikVerisi} />
        </section>

        <section className="mt-8">
          <KrediHesaplayici
            baslik="Konut Kredisi Hesaplayıcı"
            aciklama="Kredi tutarı, aylık faiz oranı ve vade bilgisine göre tahmini ödeme planı hesaplanır."
            varsayilanTutar={1000000}
            varsayilanOran={2.89}
            varsayilanVade={120}
          />
        </section>
      </div>
    </main>
  );
}