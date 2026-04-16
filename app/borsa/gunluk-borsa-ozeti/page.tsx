import Image from "next/image";
import Link from "next/link";

const bistVeri = {
  tarih: "16.04.2026",
  kapanis: "14252.38",
  degisimYuzde: 0.35,
};

const tumYukselenler = [
  { kod: "ADESE", fark: "+10,00%" },
  { kod: "GZNMI", fark: "+10,00%" },
  { kod: "EGEEN", fark: "+10,00%" },
  { kod: "DYOBY", fark: "+10,00%" },
  { kod: "VSNMD", fark: "+9,99%" },
  { kod: "BORLS", fark: "+9,98%" },
  { kod: "GIPTA", fark: "+9,97%" },
  { kod: "SMRVA", fark: "+9,97%" },
  { kod: "HPARTF2", fark: "+9,97%" },
  { kod: "EFOR", fark: "+9,97%" },
];

const tumDusenler = [
  { kod: "NIBAS", fark: "-10,00%" },
  { kod: "RUBNS", fark: "-9,94%" },
  { kod: "SERNT", fark: "-9,91%" },
  { kod: "MEKAG", fark: "-9,88%" },
  { kod: "ECILC", fark: "-7,85%" },
  { kod: "ENSRI", fark: "-7,69%" },
  { kod: "EUPWR", fark: "-7,65%" },
  { kod: "ZERGY", fark: "-7,32%" },
  { kod: "ZGYO", fark: "-6,00%" },
  { kod: "KAPLM", fark: "-5,82%" },
];

const tumHacimliler = [
  { kod: "SASA", hacim: "17.871.371.996" },
  { kod: "THYAO", hacim: "16.417.747.703" },
  { kod: "ASELS", hacim: "8.811.297.344" },
  { kod: "ISCTR", hacim: "7.556.916.139" },
  { kod: "TRALT", hacim: "7.432.674.721" },
];

const tumParaGirisi = [
  { kod: "SASA", tutar: "+251.791.133" },
  { kod: "ISCTR", tutar: "+117.262.378" },
  { kod: "ASELS", tutar: "+115.836.942" },
  { kod: "TRALT", tutar: "+100.510.631" },
  { kod: "AKBNK", tutar: "+97.768.733" },
];

const tumParaCikisi = [
  { kod: "THYAO", tutar: "-484.103.465" },
  { kod: "ECILC", tutar: "-177.573.930" },
  { kod: "TUPRS", tutar: "-104.927.114" },
  { kod: "GARAN", tutar: "-60.050.929" },
  { kod: "CWENE", tutar: "-45.728.517" },
];

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

function ListeKutusu({
  baslik,
  veriler,
}: {
  baslik: string;
  veriler: { kod: string; fark?: string; hacim?: string; tutar?: string }[];
}) {
  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-4">
      <h2 className="mb-4 text-center text-xl font-bold text-zinc-900">
        {baslik}
      </h2>

      <div className="space-y-3">
        {veriler.map((item, index) => (
          <div
            key={item.kod}
            className="flex items-center justify-between rounded-xl border border-zinc-100 px-4 py-3"
          >
            <span className="font-semibold text-zinc-900">
              {index + 1}. {item.kod}
            </span>
            <span className="font-semibold text-zinc-700">
              {item.fark || item.hacim || item.tutar}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function GunlukBorsaOzetiPage() {
  const pozitif = bistVeri.degisimYuzde >= 0;

  return (
    <main className="min-h-screen bg-white px-4 py-6 md:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 flex gap-3">
          <Link
            href="/"
            className="inline-block rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100"
          >
            Ana Sayfa
          </Link>

          <Link
            href="/borsa"
            className="inline-block rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100"
          >
            Geri
          </Link>
        </div>

        <h1 className="mb-6 text-3xl font-bold text-zinc-900">
          Günlük Borsa Özeti
        </h1>

        <section className="mb-8">
          <ReklamAlani variant="yatay" />
        </section>

        <div className="mb-8 rounded-2xl border border-zinc-200 bg-white p-5">
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl">
            <Image
              src="/günlük-özet.png"
              alt="Günlük borsa özeti"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        <div className="mb-8 rounded-2xl border border-zinc-200 bg-white p-6 text-center">
          <div className="text-2xl font-semibold text-zinc-700">XU100</div>
          <div className="mt-3 text-5xl font-bold text-zinc-900">
            {bistVeri.kapanis}
          </div>
          <div
            className={`mt-3 text-3xl font-bold ${
              pozitif ? "text-green-700" : "text-red-700"
            }`}
          >
            %{bistVeri.degisimYuzde.toFixed(2)}
          </div>
          <div className="mt-3 text-lg text-zinc-600">{bistVeri.tarih}</div>
        </div>

        <div className="mb-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          <ListeKutusu baslik="En Çok Yükselen" veriler={tumYukselenler} />
          <ListeKutusu baslik="En Çok Düşen" veriler={tumDusenler} />
          <ListeKutusu baslik="En Hacimliler" veriler={tumHacimliler} />
        </div>

        <div className="mb-8 grid gap-4 md:grid-cols-2">
          <ListeKutusu baslik="İlk 5 Para Girişi" veriler={tumParaGirisi} />
          <ListeKutusu baslik="İlk 5 Para Çıkışı" veriler={tumParaCikisi} />
        </div>

        <section className="mt-8">
          <ReklamAlani variant="icerik" />
        </section>

        <section className="mt-12 rounded-2xl border border-zinc-200 bg-white p-6">
          <h2 className="mb-4 text-2xl font-bold text-zinc-900">
            Günlük Borsa Özeti Hakkında
          </h2>

          <p className="mb-4 leading-7 text-zinc-700">
            Günlük borsa özeti sayfası, Borsa İstanbul piyasalarında yaşanan güncel
            gelişmeleri tek ekranda takip etmek isteyen yatırımcılar için
            hazırlanmıştır. Bu sayfada BIST 100 endeksi kapanış verileri, günlük
            değişim oranları, en çok yükselen hisseler ve en çok düşen hisseler
            gibi önemli piyasa verilerine hızlı şekilde ulaşabilirsiniz.
          </p>

          <p className="mb-4 leading-7 text-zinc-700">
            Günlük borsa verileri, yatırımcıların piyasa yönünü anlaması ve kısa
            vadeli fiyat hareketlerini değerlendirmesi açısından büyük önem taşır.
            Özellikle işlem hacmi yüksek hisseler, para girişi yaşanan şirketler ve
            dikkat çeken sektör hareketleri yatırım kararlarında önemli sinyaller
            verebilir.
          </p>

          <p className="mb-4 leading-7 text-zinc-700">
            Borsa İstanbul günlük analiz ekranı sayesinde en çok hacim yapan
            hisseleri, para çıkışı görülen şirketleri ve günün öne çıkan piyasa
            hareketlerini kolayca inceleyebilirsiniz. Bu veriler hem kısa vadeli
            traderlar hem de uzun vadeli yatırımcılar için faydalı bir kaynak sunar.
          </p>

          <p className="leading-7 text-zinc-700">
            Güncel BIST 100 verileri, günlük hisse performansları, işlem hacmi
            sıralamaları, para giriş çıkış analizleri ve piyasa özeti için bu
            sayfayı düzenli olarak takip edebilirsiniz.
          </p>
        </section>
      </div>
    </main>
  );
}