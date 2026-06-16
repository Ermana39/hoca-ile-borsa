import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import AuthorBox from "@/components/AuthorBox";
import {
  getGunlukOzetBySlug,
  getTumGunlukOzetSluglari,
  type GunlukOzet,
  type KodDeger,
  type KurumDeger,
  type OnemTipi,
} from "@/lib/gunluk-ozet";

const SITE = "https://www.hocaileborsa.com";

// Sadece bilinen günler statik üretilir; başka slug 404 verir.
export const dynamicParams = false;

export function generateStaticParams() {
  return getTumGunlukOzetSluglari().map((slug) => ({ tarih: slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ tarih: string }>;
}): Promise<Metadata> {
  const { tarih } = await params;
  const ozet = getGunlukOzetBySlug(tarih);
  if (!ozet) return {};

  const url = `${SITE}/borsa/gunluk-borsa-ozeti/${ozet.slug}`;
  const baslik = ozet.seoBaslik || `${ozet.baslik} | Hoca ile Borsa`;
  const aciklama =
    ozet.seoAciklama ||
    `${ozet.baslik}: BIST 100 kapanışı, en çok yükselen ve düşen hisseler, para girişi-çıkışı, en hacimli hisseler, ekonomik takvim ve kurum dağılımı.`;
  const gorsel = `${SITE}${ozet.gorsel || "/gunluk-ozet-discover.webp"}`;

  return {
    title: baslik,
    description: aciklama,
    alternates: { canonical: url },
    openGraph: {
      title: ozet.baslik,
      description: aciklama,
      url,
      siteName: "Hoca ile Borsa",
      type: "article",
      publishedTime: ozet.isoTarih,
      images: [{ url: gorsel, width: 1200, height: 675, alt: ozet.baslik }],
    },
    twitter: {
      card: "summary_large_image",
      title: ozet.baslik,
      description: aciklama,
      images: [gorsel],
    },
  };
}

function ListeKutusu({
  baslik,
  veriler,
  renk,
  degerBaslik,
}: {
  baslik: string;
  veriler: KodDeger[];
  renk: "yesil" | "kirmizi" | "gri";
  degerBaslik: string;
}) {
  const renkSinifi =
    renk === "yesil"
      ? "border-green-200 bg-green-50"
      : renk === "kirmizi"
        ? "border-red-200 bg-red-50"
        : "border-zinc-200 bg-zinc-50";

  return (
    <div className={`rounded-2xl border p-4 ${renkSinifi}`}>
      <h2 className="mb-4 text-center text-xl font-bold text-zinc-900">
        {baslik}
      </h2>

      <div className="overflow-hidden rounded-xl border border-zinc-200 bg-white">
        <div className="grid grid-cols-2 border-b border-zinc-200 bg-zinc-100 px-4 py-3 text-sm font-bold text-zinc-700">
          <div>Hisse</div>
          <div className="text-right">{degerBaslik}</div>
        </div>

        {veriler.length > 0 ? (
          veriler.map((item, index) => (
            <div
              key={`${item.kod}-${index}`}
              className="grid grid-cols-2 border-b border-zinc-100 px-4 py-3 text-sm last:border-b-0"
            >
              <div className="font-semibold text-zinc-900">
                {index + 1}. {item.kod}
              </div>
              <div className="text-right font-semibold text-zinc-700">
                {item.deger}
              </div>
            </div>
          ))
        ) : (
          <div className="px-4 py-6 text-center text-sm font-semibold text-zinc-500">
            Veri bulunamadı
          </div>
        )}
      </div>
    </div>
  );
}

function KurumKutusu({
  baslik,
  veriler,
  renk,
}: {
  baslik: string;
  veriler: KurumDeger[];
  renk: "yesil" | "kirmizi" | "gri";
}) {
  const renkSinifi =
    renk === "yesil"
      ? "border-green-200 bg-green-50"
      : renk === "kirmizi"
        ? "border-red-200 bg-red-50"
        : "border-zinc-200 bg-zinc-50";

  return (
    <div className={`rounded-2xl border p-4 ${renkSinifi}`}>
      <h2 className="mb-4 text-center text-xl font-bold text-zinc-900">
        {baslik}
      </h2>

      <div className="overflow-hidden rounded-xl border border-zinc-200 bg-white">
        <div className="grid grid-cols-3 border-b border-zinc-200 bg-zinc-100 px-4 py-3 text-sm font-bold text-zinc-700">
          <div>Kurum</div>
          <div className="text-right">
            {baslik === "En Çok Hacim Yapanlar" ? "Toplam Hacim" : "Net Hacim"}
          </div>
          <div className="text-right">Yüzde</div>
        </div>

        {veriler.map((item, index) => (
          <div
            key={item.kurum}
            className="grid grid-cols-3 border-b border-zinc-100 px-4 py-3 text-sm last:border-b-0"
          >
            <div className="font-semibold text-zinc-900">
              {index + 1}. {item.kurum}
            </div>
            <div className="text-right font-semibold text-zinc-700">
              {item.hacim}
            </div>
            <div className="text-right font-semibold text-zinc-700">
              {item.oran}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function OnemKutulari({ tip }: { tip: OnemTipi }) {
  const renkler =
    tip === "sari"
      ? ["bg-yellow-400", "bg-yellow-400", "bg-zinc-300"]
      : tip === "sari-tek"
        ? ["bg-yellow-400", "bg-zinc-300", "bg-zinc-300"]
        : tip === "turuncu"
          ? ["bg-orange-500", "bg-orange-500", "bg-orange-500"]
          : tip === "turuncu-gri"
            ? ["bg-orange-500", "bg-orange-500", "bg-zinc-300"]
            : ["bg-red-500", "bg-red-500", "bg-red-500"];

  return (
    <div className="flex items-center gap-1">
      {renkler.map((renk, index) => (
        <span
          key={index}
          className={`h-3.5 w-3.5 rounded-sm border border-zinc-500 ${renk}`}
        />
      ))}
    </div>
  );
}

function TakvimTarihSatiri({ tarih }: { tarih: string }) {
  return (
    <div className="border-y border-zinc-200 bg-zinc-100 px-3 py-2 text-center text-sm font-bold text-zinc-800">
      {tarih}
    </div>
  );
}

function TakvimSatiri({
  saat,
  ulke,
  gosterge,
  onem,
  aciklanan,
  beklenti,
  onceki,
}: {
  saat: string;
  ulke: string;
  gosterge: string;
  onem: OnemTipi;
  aciklanan: string;
  beklenti: string;
  onceki: string;
}) {
  return (
    <div className="grid grid-cols-[70px_55px_minmax(220px,1fr)_70px_95px_95px_95px] items-center border-b border-zinc-100 px-3 py-3 text-sm last:border-b-0">
      <div className="font-semibold text-zinc-900">{saat}</div>
      <div className="font-semibold text-zinc-900">{ulke}</div>
      <div className="font-semibold text-zinc-900">{gosterge}</div>
      <div>
        <OnemKutulari tip={onem} />
      </div>
      <div className="text-center font-semibold text-zinc-700">{aciklanan}</div>
      <div className="text-center font-semibold text-zinc-700">{beklenti}</div>
      <div className="text-center font-semibold text-zinc-700">{onceki}</div>
    </div>
  );
}

// Editöryel piyasa değerlendirmesi (yalnızca yorum doluysa görünür).
function PiyasaDegerlendirmesi({ yorum }: { yorum?: string[] }) {
  const paragraflar = (yorum || []).filter((p) => p && p.trim() !== "");
  if (paragraflar.length === 0) return null;

  return (
    <section className="mt-6 rounded-2xl border border-zinc-200 bg-white p-6 md:p-8">
      <h2 className="mb-4 text-2xl font-bold text-zinc-900">
        Piyasa Değerlendirmesi
      </h2>
      <div className="space-y-4 text-base leading-8 text-zinc-700">
        {paragraflar.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </section>
  );
}

export default async function GunlukBorsaOzetiPage({
  params,
}: {
  params: Promise<{ tarih: string }>;
}) {
  const { tarih } = await params;
  const ozet = getGunlukOzetBySlug(tarih);
  if (!ozet) notFound();

  return <GunlukOzetIcerik ozet={ozet} />;
}

function GunlukOzetIcerik({ ozet }: { ozet: GunlukOzet }) {
  const pozitif = ozet.bist.degisimYuzde >= 0;
  const url = `${SITE}/borsa/gunluk-borsa-ozeti/${ozet.slug}`;
  const gorsel = `${SITE}${ozet.gorsel || "/gunluk-ozet-discover.webp"}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: ozet.baslik,
    description: ozet.seoAciklama || ozet.baslik,
    image: [gorsel],
    datePublished: ozet.isoTarih,
    dateModified: ozet.isoTarih,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    author: {
      "@type": "Person",
      "@id": `${SITE}/yazar/erman-hoca#person`,
      name: "Erman Hoca",
      url: `${SITE}/yazar/erman-hoca`,
    },
    publisher: {
      "@type": "Organization",
      name: "Hoca ile Borsa",
      logo: { "@type": "ImageObject", url: `${SITE}/banner.png` },
    },
  };

  return (
    <main className="min-h-screen bg-white px-4 pb-6 pt-0 md:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

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

        <h1 className="mb-6 text-3xl font-bold text-zinc-900">{ozet.baslik}</h1>

        <div className="mb-6 rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
          <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white">
            <div className="relative aspect-[16/9] w-full">
              <Image
                src={ozet.gorsel || "/gunluk-ozet-discover.webp"}
                alt={`${ozet.baslik} görseli`}
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>

        <div className="mb-6 grid gap-4 xl:grid-cols-[1fr_2.5fr]">
          <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
            <div className="grid min-h-[320px] grid-rows-4 text-center">
              <div className="flex items-center justify-center border-b border-zinc-200">
                <div>
                  <div className="text-2xl font-semibold text-zinc-700">
                    XU100
                  </div>
                  <div className="mt-3 text-4xl font-bold text-zinc-900">
                    {ozet.bist.kapanis}
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center border-b border-zinc-200">
                <div
                  className={`text-4xl font-semibold ${
                    pozitif ? "text-green-700" : "text-red-700"
                  }`}
                >
                  %{ozet.bist.degisimYuzde.toFixed(2)}
                </div>
              </div>

              <div className="flex items-center justify-center border-b border-zinc-200">
                <div>
                  <div className="text-sm font-semibold text-zinc-500">
                    BIST Toplam Hacim
                  </div>
                  <div className="mt-2 text-2xl font-bold text-zinc-800">
                    {ozet.bist.toplamHacim}
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center">
                <div className="text-2xl font-semibold text-zinc-700">
                  {ozet.tarihGosterim}
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
            <div className="mb-4 text-center text-sm font-semibold text-zinc-600">
              Ekonomik Takvim
            </div>

            <div className="overflow-x-auto rounded-xl border border-zinc-200 bg-white">
              <div className="min-w-[720px]">
                <div className="grid grid-cols-[70px_55px_minmax(220px,1fr)_70px_95px_95px_95px] border-b border-zinc-200 bg-zinc-100 px-3 py-3 text-xs font-bold text-zinc-700">
                  <div>Saat</div>
                  <div>Ülke</div>
                  <div>Ekonomik Gösterge</div>
                  <div>Önem</div>
                  <div className="text-center">Açıklanan</div>
                  <div className="text-center">Beklenti</div>
                  <div className="text-center">Önceki</div>
                </div>

                {ozet.ekonomikTakvim.map((grup) => (
                  <div key={grup.tarih}>
                    <TakvimTarihSatiri tarih={grup.tarih} />
                    {grup.kayitlar.map((kayit) => (
                      <TakvimSatiri
                        key={`${kayit.saat}-${kayit.gosterge}`}
                        saat={kayit.saat}
                        ulke={kayit.ulke}
                        gosterge={kayit.gosterge}
                        onem={kayit.onem}
                        aciklanan={kayit.aciklanan}
                        beklenti={kayit.beklenti}
                        onceki={kayit.onceki}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mb-6 grid gap-4 xl:grid-cols-3">
          <ListeKutusu
            baslik="En Çok Yükselen"
            veriler={ozet.yukselenler}
            renk="yesil"
            degerBaslik="Fark %"
          />

          <ListeKutusu
            baslik="En Çok Düşen"
            veriler={ozet.dusenler}
            renk="kirmizi"
            degerBaslik="Fark %"
          />

          <ListeKutusu
            baslik="En Hacimliler"
            veriler={ozet.hacimliler}
            renk="gri"
            degerBaslik="Hacim"
          />
        </div>

        <div className="mb-6 grid gap-4 xl:grid-cols-2">
          <ListeKutusu
            baslik="İlk 5 Para Girişi"
            veriler={ozet.paraGirisi}
            renk="yesil"
            degerBaslik="Tutar"
          />

          <ListeKutusu
            baslik="İlk 5 Para Çıkışı"
            veriler={ozet.paraCikisi}
            renk="kirmizi"
            degerBaslik="Tutar"
          />
        </div>

        <div className="rounded-2xl border border-zinc-200 bg-white p-1 md:p-2">
          <h2 className="px-3 py-4 text-center text-2xl font-bold text-zinc-900">
            En Çok İşlem Yapan Kurumlar
          </h2>

          <div className="grid gap-4 xl:grid-cols-3">
            <KurumKutusu
              baslik="En Çok Alış Yapanlar"
              veriler={ozet.kurumAlis}
              renk="yesil"
            />

            <KurumKutusu
              baslik="En Çok Satış Yapanlar"
              veriler={ozet.kurumSatis}
              renk="kirmizi"
            />

            <KurumKutusu
              baslik="En Çok Hacim Yapanlar"
              veriler={ozet.kurumHacim}
              renk="gri"
            />
          </div>
        </div>

        <PiyasaDegerlendirmesi yorum={ozet.yorum} />

        <section className="mt-6 rounded-2xl border border-zinc-200 bg-white p-6">
          <h2 className="mb-4 text-2xl font-bold text-zinc-900">
            {ozet.baslik} Hakkında
          </h2>

          <p className="mb-4 leading-7 text-zinc-700">
            {ozet.baslik} sayfası, Borsa İstanbul piyasalarında yaşanan güncel
            gelişmeleri tek ekranda takip etmek isteyen yatırımcılar için
            hazırlanmıştır. Bu sayfada BIST 100 endeksi kapanış verileri, günlük
            değişim oranları, en çok yükselen hisseler, en çok düşen hisseler,
            para girişi ve para çıkışı yaşanan hisseler gibi önemli piyasa
            verilerine hızlı şekilde ulaşabilirsiniz.
          </p>

          <p className="mb-4 leading-7 text-zinc-700">
            Günlük borsa verileri, yatırımcıların piyasa yönünü anlaması ve kısa
            vadeli fiyat hareketlerini değerlendirmesi açısından büyük önem
            taşır. Özellikle işlem hacmi yüksek hisseler, para girişi yaşanan
            şirketler, kurumsal işlemler ve dikkat çeken sektör hareketleri
            yatırım kararlarında önemli sinyaller verebilir.
          </p>

          <p className="mb-4 leading-7 text-zinc-700">
            Sayfada yer alan ekonomik takvim, en çok yükselen ve düşen hisseler,
            en hacimli hisseler ve kurum bazlı işlem dağılımları sayesinde
            piyasanın gün içindeki genel görünümünü daha detaylı
            inceleyebilirsiniz. Bu yapı, hem kısa vadeli traderlar hem de uzun
            vadeli yatırımcılar için pratik bir takip ekranı sunar.
          </p>

          <p className="leading-7 text-zinc-700">
            Güncel BIST 100 verileri, günlük hisse performansları, işlem hacmi
            sıralamaları, para giriş çıkış analizleri, ekonomik takvim ve kurum
            bazlı piyasa özeti için bu sayfayı düzenli olarak takip
            edebilirsiniz.
          </p>
        </section>

        <section className="mt-6 rounded-2xl border border-zinc-200 bg-zinc-50 p-6">
          <h2 className="text-2xl font-bold text-zinc-900">
            Diğer Borsa Analizleri
          </h2>
          <p className="mt-2 leading-7 text-zinc-600">
            Günlük piyasa görünümünü teknik analiz araçlarıyla birlikte
            değerlendirin.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <Link
              href="/borsa/gosterge-taramalari"
              className="group rounded-xl border border-zinc-200 bg-white p-5 transition hover:border-blue-300 hover:shadow-sm"
            >
              <h3 className="text-lg font-bold text-zinc-900 group-hover:text-blue-700">
                Gösterge Taramaları
              </h3>
              <p className="mt-2 text-sm leading-6 text-zinc-600">
                Teknik göstergelere göre öne çıkan BIST hisselerini inceleyin.
              </p>
              <span className="mt-4 inline-flex text-sm font-semibold text-blue-600">
                Taramalara git <span aria-hidden="true">→</span>
              </span>
            </Link>

            <Link
              href="/borsa/pivot-analizi"
              className="group rounded-xl border border-zinc-200 bg-white p-5 transition hover:border-blue-300 hover:shadow-sm"
            >
              <h3 className="text-lg font-bold text-zinc-900 group-hover:text-blue-700">
                Pivot Analizi
              </h3>
              <p className="mt-2 text-sm leading-6 text-zinc-600">
                Hisselerin pivot, destek ve direnç seviyelerini görüntüleyin.
              </p>
              <span className="mt-4 inline-flex text-sm font-semibold text-blue-600">
                Analize git <span aria-hidden="true">→</span>
              </span>
            </Link>
          </div>
        </section>

        <div className="mt-6">
          <AuthorBox />
        </div>
      </div>
    </main>
  );
}
