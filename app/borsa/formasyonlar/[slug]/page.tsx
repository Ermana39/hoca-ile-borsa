import Link from "next/link";

const yorumlar: Record<string, { baslik: string; yorum: string }> = {
  "thyao-flama": {
    baslik: "THYAO - Flama",
    yorum: "Hissede kısa vadeli flama görünümü izleniyor. Yukarı yönlü kırılım gelirse hareketin devamı gündeme gelebilir.",
  },
  "asels-yukselen-ucgen": {
    baslik: "ASELS - Yükselen Üçgen",
    yorum: "Yükselen diplerle sıkışan yapı yukarı kırılırsa yeni ivme oluşturabilir. Direnç bölgesi kritik.",
  },
  "eregl-canak": {
    baslik: "EREGL - Çanak",
    yorum: "Orta vadeli çanak görünümünde boyun çizgisi takibi önemli. Üzerinde kalıcılık güçlenirse teknik görünüm iyileşebilir.",
  },
  "tuprs-kanal": {
    baslik: "TUPRS - Kanal",
    yorum: "Fiyat kanal içinde hareketini sürdürüyor. Kanal altı destek, kanal üstü ise direnç bölgesi olarak izlenebilir.",
  },
  "bimas-sikisma": {
    baslik: "BIMAS - Sıkışma",
    yorum: "Daralan hareket alanı sonrası yön tayini yaklaşmış olabilir. Hacimli kırılım yönü belirleyebilir.",
  },
};

export default async function FormasyonDetayPage({
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
            <Link href="/borsa/formasyonlar" className="inline-block rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100">Geri</Link>
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
          <Link href="/borsa/formasyonlar" className="inline-block rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100">Geri</Link>
        </div>

        <h1 className="mb-6 text-3xl font-bold text-zinc-900">{veri.baslik}</h1>

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