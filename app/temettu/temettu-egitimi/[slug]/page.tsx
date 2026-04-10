import Link from "next/link";

const icerikler: Record<string, { title: string; text: string }> = {
  "temettu-nedir": {
    title: "Temettü nedir",
    text: "Temettü, şirketin elde ettiği kârın belirli kısmını ortaklarına nakit veya bedelsiz pay şeklinde dağıtmasıdır.",
  },
  "brut-net-temettu-farki": {
    title: "Brüt / net temettü farkı",
    text: "Brüt temettü şirketin açıkladığı kesinti öncesi tutardır. Net temettü ise stopaj sonrası yatırımcının hesabına geçen gerçek tutardır.",
  },
  "hak-kullanim-tarihi-ne-demek": {
    title: "Hak kullanım tarihi ne demek",
    text: "Hak kullanım tarihi, temettü hakkının başladığı tarihtir. Hisse fiyatı bu tarihte dağıtılan temettü tutarı kadar teorik olarak düzelir.",
  },
  "odeme-tarihi-ne-demek": {
    title: "Ödeme tarihi ne demek",
    text: "Ödeme tarihi, yatırımcının hak kazandığı temettünün fiilen hesabına geçtiği tarihtir.",
  },
  "temettu-verimi-nasil-hesaplanir": {
    title: "Temettü verimi nasıl hesaplanır",
    text: "Temettü verimi, hisse başına temettü tutarının hisse fiyatına bölünmesiyle hesaplanır. Sonuç yüzde olarak ifade edilir.",
  },
  "temettuden-sonra-fiyat-neden-duser": {
    title: "Temettüden sonra fiyat neden düşer",
    text: "Şirket kasasından yatırımcıya nakit çıktığı için hisse fiyatı temettü tutarı kadar teorik olarak aşağıdan başlar. Bu teknik bir fiyat düzeltmesidir.",
  },
};

export default async function TemettuEgitimDetayPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const icerik = icerikler[slug];

  if (!icerik) {
    return (
      <main className="min-h-screen bg-white px-4 py-6 md:px-6">
        <div className="mx-auto max-w-4xl">
          <div className="mb-6 flex gap-3">
            <Link
              href="/"
              className="inline-block rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100"
            >
              Ana Sayfa
            </Link>

            <Link
              href="/temettu/temettu-egitimi"
              className="inline-block rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100"
            >
              Geri
            </Link>
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
      <div className="mx-auto max-w-4xl">
        <div className="mb-6 flex gap-3">
          <Link
            href="/"
            className="inline-block rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100"
          >
            Ana Sayfa
          </Link>

          <Link
            href="/temettu/temettu-egitimi"
            className="inline-block rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100"
          >
            Geri
          </Link>
        </div>

        <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6">
          <h1 className="mb-4 text-3xl font-bold text-zinc-900">{icerik.title}</h1>
          <p className="text-base leading-7 text-zinc-700">{icerik.text}</p>
        </div>
      </div>
    </main>
  );
}