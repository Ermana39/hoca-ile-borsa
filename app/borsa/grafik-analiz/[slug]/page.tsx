import Link from "next/link";

const yorumlar: Record<string, { kod: string; yorum: string }> = {
  thyao: {
    kod: "THYAO",
    yorum: "Grafikte kısa vadede destek üzerinde tutunma çabası görülüyor. Hacim desteklerse yukarı yönlü tepki güç kazanabilir.",
  },
  asels: {
    kod: "ASELS",
    yorum: "Fiyatlama güçlü görünümünü koruyor. Kısa vadede direnç bölgesinin aşılması halinde hareket ivme kazanabilir.",
  },
  eregl: {
    kod: "EREGL",
    yorum: "Destek bölgesine yakın fiyatlamada tepki ihtimali izleniyor. Zayıf görünüm sürerse alt destekler gündeme gelebilir.",
  },
  tuprs: {
    kod: "TUPRS",
    yorum: "Trend yapısı pozitif kalmaya devam ediyor. Kâr satışları gelse de ana görünüm bozulmadıkça güçlü seyir korunabilir.",
  },
  bimas: {
    kod: "BIMAS",
    yorum: "Hissede dengeli görünüm sürüyor. Yeni yön için dar bant kırılımı takip edilmeli.",
  },
};

export default async function GrafikAnalizDetayPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const veri = yorumlar[slug];

  if (!veri) {
    return (
      <main className="min-h-screen bg-white px-4 py-6 md:px-6">
        <div className="mx-auto max-w-4xl">
          <div className="mb-6 flex gap-3">
            <Link href="/" className="inline-block rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100">Ana Sayfa</Link>
            <Link href="/borsa/grafik-analiz" className="inline-block rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100">Geri</Link>
          </div>
          <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-4 text-red-700">
            İçerik bulunamadı.
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white px-4 py-6 md:px-6">
      <div className="mx-auto max-w-5xl">
        <div className="mb-6 flex gap-3">
          <Link href="/" className="inline-block rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100">Ana Sayfa</Link>
          <Link href="/borsa/grafik-analiz" className="inline-block rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100">Geri</Link>
        </div>

        <h1 className="mb-6 text-3xl font-bold text-zinc-900">{veri.kod} Grafik Analiz</h1>

        <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
          <div className="mb-4 flex min-h-[320px] items-center justify-center rounded-2xl border border-dashed border-zinc-300 bg-white text-lg font-semibold text-zinc-500">
            Buraya grafik görseli eklenecek
          </div>

          <div className="rounded-xl border border-zinc-200 bg-white p-4 text-base leading-7 text-zinc-700">
            {veri.yorum}
          </div>
        </div>
      </div>
    </main>
  );
}