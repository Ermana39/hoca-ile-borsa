import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ContinueReading from "@/components/ContinueReading";
import HalkaArzKarnesi from "@/components/HalkaArzKarnesi";
import HalkaArzSSS from "@/components/HalkaArzSSS";
import {
  bekleyenDeger,
  halkaArzGetir,
  tahsisatMetni,
  type BilgiKarti,
  type HalkaArzVideo,
  type HalkaArzVeri,
} from "@/lib/halka-arz";
import { riskMaddeleri } from "@/lib/halka-arz-risk";
import { halkaArzSeoMetinleri } from "@/lib/halka-arz-seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const veri = halkaArzGetir(slug);
  if (!veri || veri.seo?.contentStatus !== "onayli") return {};
  const canonical = `https://www.hocaileborsa.com/halka-arz/onayli-izahnameler/${slug}`;
  const seoMetinleri = halkaArzSeoMetinleri(veri, "onayli");

  return {
    title: { absolute: seoMetinleri.title },
    description: seoMetinleri.description,
    alternates: {
      canonical,
    },
    robots: veri.seo?.robots,
    openGraph: {
      title: veri.baslikMeta.title,
      description: veri.baslikMeta.description,
      url: canonical,
      siteName: "Hoca İle Borsa",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: veri.baslikMeta.title,
      description: veri.baslikMeta.description,
    },
  };
}

function gorunur(item: BilgiKarti) {
  return !bekleyenDeger(item.value);
}

function InfoCard({ label, value }: BilgiKarti) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 transition hover:border-blue-300 hover:bg-white">
      <div className="text-sm font-medium text-slate-500">{label}</div>
      <div className="mt-2 whitespace-pre-line text-base font-bold text-slate-900">
        {value}
      </div>
    </div>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="mb-5 text-xl font-bold text-slate-900">{title}</h2>
      {children}
    </section>
  );
}

function VeriTablosu({
  tablo,
}: {
  tablo: { basliklar: string[]; satirlar: string[][]; aciklama?: string };
}) {
  return (
    <>
      {tablo.aciklama && (
        <p className="mb-4 text-sm leading-7 text-slate-600">{tablo.aciklama}</p>
      )}
      <div className="overflow-x-auto rounded-2xl border border-slate-200">
        <table className="min-w-full text-sm">
          <thead className="bg-slate-100 text-slate-700">
            <tr>
              {tablo.basliklar.map((baslik, index) => (
                <th key={index} className="px-4 py-3 text-left font-bold">
                  {baslik}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tablo.satirlar.map((satir, satirIndex) => (
              <tr
                key={satirIndex}
                className={satirIndex % 2 === 0 ? "bg-white" : "bg-slate-50"}
              >
                {satir.map((hucre, hucreIndex) => (
                  <td
                    key={`${satirIndex}-${hucreIndex}`}
                    className={`border-t border-slate-100 px-4 py-3 text-slate-700 ${
                      hucreIndex === 0 ? "font-semibold text-slate-900" : ""
                    }`}
                  >
                    {hucre}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

function OzetKartlari({ items }: { items?: BilgiKarti[] }) {
  if (!items || items.length === 0) return null;

  return (
    <div className="mb-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {items.map((item) => (
        <InfoCard key={item.label} {...item} />
      ))}
    </div>
  );
}

function YouTubeVideoCards({ videolar }: { videolar?: HalkaArzVideo[] }) {
  if (!videolar || videolar.length === 0) return null;

  return (
    <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-xl font-bold text-slate-900">Video İçerikler</h2>
      <p className="mt-2 text-sm leading-7 text-slate-600">
        Halka arz detaylarını video anlatımıyla izlemek için ilgili içerikleri
        aşağıdan açabilirsiniz.
      </p>
      <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {videolar.map((video) => {
          const href = video.href || `https://youtu.be/${video.videoId}`;
          return (
            <a
              key={video.videoId}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:border-red-300 hover:shadow-md"
            >
              <div className="relative aspect-video overflow-hidden bg-slate-200">
                <img
                  src={`https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`}
                  alt={video.title}
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <span className="absolute inset-0 grid place-items-center bg-black/15">
                  <span className="rounded-full bg-red-600 px-4 py-3 text-sm font-bold text-white shadow-lg">
                    İzle
                  </span>
                </span>
              </div>
              <div className="p-4">
                <div className="text-sm font-bold leading-6 text-slate-900">
                  {video.title}
                </div>
                {video.description && (
                  <p className="mt-2 text-xs leading-5 text-slate-600">
                    {video.description}
                  </p>
                )}
                <div className="mt-3 text-xs font-bold text-red-600">
                  YouTube&apos;da aç →
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}


type TalepSonucuSatiri = {
  kategori: string;
  yatirimciSayisi: string;
  planlananTahsisat: string;
  talep: string;
  dagitim: string;
  dagitimOrani: string;
  talepKati: string;
};

function TalepSonuclariTablosu({
  baslik,
  aciklama,
  not,
  satirlar,
}: {
  baslik: string;
  aciklama: string;
  not?: string;
  satirlar: TalepSonucuSatiri[];
}) {
  return (
    <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-xl font-bold text-slate-900">{baslik}</h2>
      <p className="mt-2 text-sm leading-7 text-slate-600">{aciklama}</p>

      <div className="mt-5 overflow-x-auto rounded-2xl border border-slate-200 xl:overflow-x-visible">
        <table className="w-full min-w-[900px] table-fixed text-xs xl:min-w-0 xl:text-[12px] 2xl:text-sm">
          <thead className="bg-slate-900 text-white">
            <tr>
              <th className="w-[22%] px-2 py-3 text-left font-bold xl:px-2">
                Yatırımcı Grubu
              </th>
              <th className="px-2 py-3 text-right font-bold xl:px-2">
                Yatırımcı Sayısı
              </th>
              <th className="px-2 py-3 text-right font-bold xl:px-2">
                Planlanan Tahsisat
              </th>
              <th className="px-2 py-3 text-right font-bold xl:px-2">
                Gerçekleşen Talep
              </th>
              <th className="px-2 py-3 text-right font-bold xl:px-2">
                Dağıtılan Pay
              </th>
              <th className="px-2 py-3 text-right font-bold xl:px-2">
                Dağıtım Oranı
              </th>
              <th className="px-2 py-3 text-right font-bold xl:px-2">
                Talep Katı
              </th>
            </tr>
          </thead>

          <tbody>
            {satirlar.map((satir, index) => {
              const toplamSatiri = satir.kategori === "Toplam";

              return (
                <tr
                  key={`${satir.kategori}-${index}`}
                  className={
                    toplamSatiri
                      ? "bg-slate-100 font-bold"
                      : index % 2 === 0
                        ? "bg-white"
                        : "bg-slate-50"
                  }
                >
                  <td className="border-t border-slate-200 px-2 py-3 font-semibold leading-5 text-slate-900 xl:px-2">
                    {satir.kategori}
                  </td>
                  <td className="border-t border-slate-200 px-2 py-3 text-right leading-5 text-slate-700 xl:px-2">
                    {satir.yatirimciSayisi}
                  </td>
                  <td className="border-t border-slate-200 px-2 py-3 text-right leading-5 text-slate-700 xl:px-2">
                    {satir.planlananTahsisat}
                  </td>
                  <td className="border-t border-slate-200 px-2 py-3 text-right leading-5 text-slate-700 xl:px-2">
                    {satir.talep}
                  </td>
                  <td className="border-t border-slate-200 px-2 py-3 text-right leading-5 text-slate-700 xl:px-2">
                    {satir.dagitim}
                  </td>
                  <td className="border-t border-slate-200 px-2 py-3 text-right leading-5 text-slate-700 xl:px-2">
                    {satir.dagitimOrani}
                  </td>
                  <td
                    className={`border-t border-slate-200 px-2 py-3 text-right font-bold leading-5 xl:px-2 ${
                      satir.talepKati === "-"
                        ? "text-slate-500"
                        : "text-emerald-700"
                    }`}
                  >
                    {satir.talepKati}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {not && (
        <p className="mt-4 rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-xs font-medium leading-6 text-amber-900">
          {not}
        </p>
      )}
    </section>
  );
}

function HalkaArzTalepSonuclari({
  slug,
  veri,
}: {
  slug: string;
  veri: HalkaArzVeri;
}) {
  const kod = (
    veri.bistKodu ||
    veri.ozet.bistKodu ||
    ""
  ).toLocaleUpperCase("tr-TR");
  const sirketAdi = veri.sirketAdi.toLocaleLowerCase("tr-TR");

  const kardemirMi =
    slug === "kardemir-celik-sanayi" ||
    kod === "KARCL" ||
    sirketAdi.includes("kardemir çelik");

  if (kardemirMi) {
    const satirlar: TalepSonucuSatiri[] = [
      {
        kategori: "Yurt İçi Bireysel Yatırımcılar",
        yatirimciSayisi: "813.950",
        planlananTahsisat: "51.200.000 Lot",
        talep: "70.702.110 Lot",
        dagitim: "51.200.000 Lot",
        dagitimOrani: "%40,00",
        talepKati: "1,38 kat",
      },
      {
        kategori: "Yüksek Talepte Bulunan Yatırımcılar",
        yatirimciSayisi: "788",
        planlananTahsisat: "12.800.000 Lot",
        talep: "172.090.729 Lot",
        dagitim: "12.800.000 Lot",
        dagitimOrani: "%10,00",
        talepKati: "13,44 kat",
      },
      {
        kategori: "Yurt İçi Kurumsal Yatırımcılar",
        yatirimciSayisi: "104",
        planlananTahsisat: "38.400.000 Lot",
        talep: "242.608.772 Lot",
        dagitim: "38.400.000 Lot",
        dagitimOrani: "%30,00",
        talepKati: "6,32 kat",
      },
      {
        kategori: "Yurt Dışı Kurumsal Yatırımcılar",
        yatirimciSayisi: "11",
        planlananTahsisat: "25.600.000 Lot",
        talep: "62.235.000 Lot",
        dagitim: "25.600.000 Lot",
        dagitimOrani: "%20,00",
        talepKati: "2,43 kat",
      },
      {
        kategori: "Toplam",
        yatirimciSayisi: "814.853",
        planlananTahsisat: "128.000.000 Lot",
        talep: "547.636.611 Lot",
        dagitim: "128.000.000 Lot",
        dagitimOrani: "%100,00",
        talepKati: "4,28 kat",
      },
    ];

    return (
      <TalepSonuclariTablosu
        baslik="Halka Arz Talep ve Dağıtım Sonuçları"
        aciklama="Yatırımcı gruplarına göre planlanan tahsisat, gerçekleşen talep, dağıtılan pay ve oluşan talep katları."
        satirlar={satirlar}
      />
    );
  }

  const albtnMi =
    slug === "albayrak-hazir-beton" ||
    kod === "ALBTN" ||
    sirketAdi.includes("albayrak hazır beton");

  if (albtnMi) {
    const satirlar: TalepSonucuSatiri[] = [
      {
        kategori: "Yurt İçi Bireysel Yatırımcılar",
        yatirimciSayisi: "547.978",
        planlananTahsisat: "66.094.850 Lot",
        talep: "66.094.850 Lot",
        dagitim: "66.094.850 Lot",
        dagitimOrani: "%94,42",
        talepKati: "1,00 kat",
      },
      {
        kategori: "Yurt İçi Kurumsal Yatırımcılar",
        yatirimciSayisi: "36",
        planlananTahsisat: "3.790.486 Lot",
        talep: "3.790.486 Lot",
        dagitim: "3.790.486 Lot",
        dagitimOrani: "%5,41",
        talepKati: "1,00 kat",
      },
      {
        kategori: "Yurt Dışı Bireysel Yatırımcılar",
        yatirimciSayisi: "1.197",
        planlananTahsisat: "114.664 Lot",
        talep: "114.664 Lot",
        dagitim: "114.664 Lot",
        dagitimOrani: "%0,16",
        talepKati: "1,00 kat",
      },
      {
        kategori: "Yurt Dışı Kurumsal Yatırımcılar",
        yatirimciSayisi: "0",
        planlananTahsisat: "0 Lot",
        talep: "0 Lot",
        dagitim: "0 Lot",
        dagitimOrani: "%0,00",
        talepKati: "0,00 kat",
      },
      {
        kategori: "Toplam",
        yatirimciSayisi: "549.211",
        planlananTahsisat: "70.000.000 Lot",
        talep: "70.000.000 Lot",
        dagitim: "70.000.000 Lot",
        dagitimOrani: "%100,00",
        talepKati: "1,00 kat",
      },
    ];

    return (
      <TalepSonuclariTablosu
        baslik="Halka Arz Talep ve Dağıtım Sonuçları"
        aciklama="Yatırımcı gruplarına göre planlanan pay, gerçekleşen talep, dağıtılan pay ve talep katları."
        satirlar={satirlar}
      />
    );
  }


  const metenMi =
    slug === "metgun-enerji-yatirimlari" ||
    slug === "metgun-enerji" ||
    kod === "METEN" ||
    sirketAdi.includes("metgün enerji");

  if (metenMi) {
    const satirlar: TalepSonucuSatiri[] = [
      {
        kategori: "Yurt İçi Bireysel Yatırımcılar",
        yatirimciSayisi: "960.994",
        planlananTahsisat: "81.347.400 Lot",
        talep: "153.794.006 Lot",
        dagitim: "81.347.400 Lot",
        dagitimOrani: "%60,00",
        talepKati: "1,89 kat",
      },
      {
        kategori: "Grup Çalışanları",
        yatirimciSayisi: "277",
        planlananTahsisat: "4.067.370 Lot",
        talep: "4.943.899 Lot",
        dagitim: "4.067.370 Lot",
        dagitimOrani: "%3,00",
        talepKati: "1,22 kat",
      },
      {
        kategori: "Yurt İçi Kurumsal Yatırımcılar",
        yatirimciSayisi: "108",
        planlananTahsisat: "40.673.700 Lot",
        talep: "210.615.775 Lot",
        dagitim: "40.673.700 Lot",
        dagitimOrani: "%30,00",
        talepKati: "5,18 kat",
      },
      {
        kategori: "Yurt Dışı Kurumsal Yatırımcılar",
        yatirimciSayisi: "8",
        planlananTahsisat: "9.490.530 Lot",
        talep: "31.004.632 Lot",
        dagitim: "9.490.530 Lot",
        dagitimOrani: "%7,00",
        talepKati: "3,27 kat",
      },
      {
        kategori: "Toplam",
        yatirimciSayisi: "961.387",
        planlananTahsisat: "135.579.000 Lot",
        talep: "400.358.312 Lot",
        dagitim: "135.579.000 Lot",
        dagitimOrani: "%100,00",
        talepKati: "2,95 kat",
      },
    ];

    return (
      <TalepSonuclariTablosu
        baslik="Halka Arz Talep ve Dağıtım Sonuçları"
        aciklama="Yatırımcı gruplarına göre planlanan tahsisat, gerçekleşen talep, dağıtılan pay ve oluşan talep katları."
        satirlar={satirlar}
      />
    );
  }


  const normalizeHalkaArzMetni = (deger: string) =>
    deger
      .toLocaleLowerCase("tr-TR")
      .replace(/ş/g, "s")
      .replace(/ı/g, "i")
      .replace(/ğ/g, "g")
      .replace(/ü/g, "u")
      .replace(/ö/g, "o")
      .replace(/ç/g, "c")
      .replace(/[^a-z0-9]/g, "");

  const normalizeSlug = normalizeHalkaArzMetni(slug);
  const normalizeKod = normalizeHalkaArzMetni(kod);
  const normalizeSirketAdi = normalizeHalkaArzMetni(veri.sirketAdi);

  const saraeMi =
    normalizeKod === "sarae" ||
    normalizeSlug === "sarae" ||
    normalizeSlug.includes("saraenerji") ||
    normalizeSlug.includes("saraenerjiinsaat") ||
    normalizeSirketAdi.includes("saraenerji") ||
    normalizeSirketAdi.includes("saraenerjiinsaat");

  if (saraeMi) {
    const satirlar: TalepSonucuSatiri[] = [
      {
        kategori: "Yurt İçi Bireysel Yatırımcılar",
        yatirimciSayisi: "728.823",
        planlananTahsisat: "33.820.000 Lot",
        talep: "46.370.290 Lot",
        dagitim: "33.820.000 Lot",
        dagitimOrani: "%38,00",
        talepKati: "1,37 kat",
      },
      {
        kategori: "Yüksek Talepte Bulunacak Yatırımcı Grubu",
        yatirimciSayisi: "344",
        planlananTahsisat: "8.900.000 Lot",
        talep: "114.848.112 Lot",
        dagitim: "8.900.000 Lot",
        dagitimOrani: "%10,00",
        talepKati: "12,90 kat",
      },
      {
        kategori: "Grup Çalışanları",
        yatirimciSayisi: "263",
        planlananTahsisat: "1.780.000 Lot",
        talep: "1.809.670 Lot",
        dagitim: "1.780.000 Lot",
        dagitimOrani: "%2,00",
        talepKati: "1,02 kat",
      },
      {
        kategori: "Yurt İçi Kurumsal Yatırımcılar",
        yatirimciSayisi: "115",
        planlananTahsisat: "22.250.000 Lot",
        talep: "111.393.521 Lot",
        dagitim: "22.250.000 Lot",
        dagitimOrani: "%25,00",
        talepKati: "5,01 kat",
      },
      {
        kategori: "Yurt Dışı Kurumsal Yatırımcılar",
        yatirimciSayisi: "15",
        planlananTahsisat: "22.250.000 Lot",
        talep: "60.886.242 Lot",
        dagitim: "22.250.000 Lot",
        dagitimOrani: "%25,00",
        talepKati: "2,74 kat",
      },
      {
        kategori: "Toplam",
        yatirimciSayisi: "729.560",
        planlananTahsisat: "89.000.000 Lot",
        talep: "335.307.835 Lot",
        dagitim: "89.000.000 Lot",
        dagitimOrani: "%100,00",
        talepKati: "3,77 kat",
      },
    ];

    return (
      <TalepSonuclariTablosu
        baslik="Halka Arz Talep ve Dağıtım Sonuçları"
        aciklama="Yatırımcı gruplarına göre planlanan tahsisat, gerçekleşen talep, dağıtılan pay ve oluşan talep katları."
        satirlar={satirlar}
      />
    );
  }


  const ssaatMi =
    slug === "saat-ve-saat-san-ve-tic" ||
    slug === "saat-ve-saat" ||
    kod === "SSAAT" ||
    sirketAdi.includes("saat ve saat");

  if (ssaatMi) {
    const satirlar: TalepSonucuSatiri[] = [
      {
        kategori: "Yurt İçi Bireysel Yatırımcılar",
        yatirimciSayisi: "693.013",
        planlananTahsisat: "40.166.973 Lot",
        talep: "71.605.578 Lot",
        dagitim: "40.166.973 Lot",
        dagitimOrani: "%60,00",
        talepKati: "1,78 kat",
      },
      {
        kategori: "Yurt İçi Kurumsal Yatırımcılar",
        yatirimciSayisi: "125",
        planlananTahsisat: "26.777.982 Lot",
        talep: "32.726.990 Lot",
        dagitim: "26.777.982 Lot",
        dagitimOrani: "%40,00",
        talepKati: "1,22 kat",
      },
      {
        kategori: "Toplam",
        yatirimciSayisi: "693.138",
        planlananTahsisat: "66.944.955 Lot",
        talep: "104.332.568 Lot",
        dagitim: "66.944.955 Lot",
        dagitimOrani: "%100,00",
        talepKati: "1,56 kat",
      },
    ];

    return (
      <TalepSonuclariTablosu
        baslik="Halka Arz Talep ve Dağıtım Sonuçları"
        aciklama="Yatırımcı gruplarına göre planlanan tahsisat, gerçekleşen talep, dağıtılan pay ve oluşan talep katları."
        satirlar={satirlar}
      />
    );
  }

  return null;
}

function ozetSatirlari(veri: HalkaArzVeri): BilgiKarti[] {
  const o = veri.ozet;
  return [
    { label: "İşlem Kodu", value: veri.bistKodu || o.bistKodu || "" },
    { label: "Talep Toplama Tarihi", value: o.halkaArzTarihi || "" },
    { label: "İşlem Başlama Tarihi", value: o.islemBaslangicTarihi || "" },
    { label: "Dağıtım Yöntemi", value: o.dagitimYontemi || "" },
    { label: "Katılım Endeksi", value: o.katilimEndeksi || "" },
    { label: "Pazar", value: o.pazar || "" },
    { label: "Aracı Kurum", value: o.araciKurum || "" },
  ].filter(gorunur);
}

function tahsisatSatirlari(veri: HalkaArzVeri) {
  return veri.tahsisat.map(tahsisatMetni).filter((item) => !bekleyenDeger(item));
}

function sssSorulari(veri: HalkaArzVeri) {
  const kod = veri.bistKodu || veri.ozet.bistKodu || veri.sirketAdi;
  return [
    {
      soru: `${veri.sirketAdi} halka arz fiyatı kaç TL?`,
      cevap: `${veri.sirketAdi} halka arz fiyatı ${veri.ozet.fiyatAralik || "onaylı izahname/satış duyurusunda açıklanan fiyat"} olarak takip edilmektedir.`,
    },
    {
      soru: `${kod} halka arzında toplam kaç lot satışa sunulacak?`,
      cevap: `Toplam halka arz payı ${veri.ozet.pay || veri.toplamPay || "onaylı izahname verilerine göre güncellenecektir"}. Sermaye artırımı ve ortak satışı detayları sayfadaki sermaye ve satış bilgileri bölümünde yer almaktadır.`,
    },
    {
      soru: `${veri.sirketAdi} halka arzı hangi pazarda işlem görecek?`,
      cevap: `Payların ${veri.ozet.pazar || "Borsa İstanbul tarafından açıklanacak pazarda"} işlem görmesi beklenmektedir.`,
    },
    {
      soru: `${veri.sirketAdi} halka arz fonu nerede kullanılacak?`,
      cevap:
        veri.fonKullanim.length > 0
          ? `Fon kullanım başlıkları: ${veri.fonKullanim.join("; ")}.`
          : "Fon kullanım alanları onaylı izahname ve satış duyurusu üzerinden takip edilmelidir.",
    },
  ];
}

export default async function OnayliIzahnameDetayPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const veri = halkaArzGetir(slug);
  if (!veri || veri.seo?.contentStatus !== "onayli") notFound();

  const summaryItems = ozetSatirlari(veri);
  const sermayeBilgileri = (veri.sermayeBilgileri || []).filter(
    (item) =>
      !["Satış Fiyatı", "Talep Toplama Tarihi", "Katılım Endeksi"].includes(
        item.label
      )
  );
  const tahsisat = tahsisatSatirlari(veri);
  const canonical = `https://www.hocaileborsa.com/halka-arz/onayli-izahnameler/${slug}`;
  const seoMetinleri = halkaArzSeoMetinleri(veri, "onayli");
  const sorular = sssSorulari(veri);
  const donemler =
    veri.finansalDonemler && veri.finansalDonemler.length > 0
      ? veri.finansalDonemler
      : Array.from(
          new Set(veri.finansalVeriler.flatMap((r) => Object.keys(r.donemler)))
        );
  const kodAdayi = veri.bistKodu || veri.ozet.bistKodu;
  const kod = bekleyenDeger(kodAdayi) ? undefined : kodAdayi;
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${canonical}#webpage`,
      url: canonical,
      name: `${kod ? `${kod} ` : ""}${veri.sirketAdi} Halka Arzı`,
      description: seoMetinleri.description,
      inLanguage: "tr-TR",
      isPartOf: { "@id": "https://www.hocaileborsa.com/#website" },
      about: { "@type": "Organization", name: veri.sirketAdi },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: sorular.map((item) => ({
        "@type": "Question",
        name: item.soru,
        acceptedAnswer: { "@type": "Answer", text: item.cevap },
      })),
    },
  ];

  return (
    <main className="min-h-screen bg-[#f8fafc] text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <section className="mb-8 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-200 bg-gradient-to-r from-indigo-600 to-blue-600 px-6 py-7 text-white">
            <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="mb-2 inline-flex rounded-full bg-white/15 px-3 py-1 text-xs font-semibold tracking-wide">
                  Onaylı İzahname
                </p>
                <h1 className="text-2xl font-bold sm:text-3xl">
                  {kod ? `${kod} ` : ""}
                  {veri.sirketAdi} Halka Arzı
                </h1>
                <p className="mt-2 text-sm text-blue-100 sm:text-base">
                  Güncel halka arz fiyatı, talep tarihleri, toplam lot, dağıtım,
                  fon kullanımı ve finansal görünüm
                </p>
              </div>

              {(veri.ozet.fiyatAralik || veri.toplamPay || veri.halkaAciklikOrani) && (
                <div className="grid grid-cols-2 gap-3 md:min-w-[320px]">
                  {veri.ozet.fiyatAralik && (
                    <div className="rounded-2xl bg-white/10 p-4 backdrop-blur">
                      <div className="text-xs text-blue-100">Halka Arz Fiyatı</div>
                      <div className="mt-1 text-lg font-bold">{veri.ozet.fiyatAralik}</div>
                    </div>
                  )}
                  {veri.toplamPay && (
                    <div className="rounded-2xl bg-white/10 p-4 backdrop-blur">
                      <div className="text-xs text-blue-100">Toplam Pay</div>
                      <div className="mt-1 text-lg font-bold">{veri.toplamPay}</div>
                    </div>
                  )}
                  {veri.halkaAciklikOrani && (
                    <div className="rounded-2xl bg-white/10 p-4 backdrop-blur">
                      <div className="text-xs text-blue-100">Halka Açıklık</div>
                      <div className="mt-1 text-lg font-bold">{veri.halkaAciklikOrani}</div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          <div className="border-b border-blue-100 bg-blue-50 px-6 py-4">
            <p className="max-w-4xl text-sm leading-6 text-blue-950">
              Bu sayfa, {veri.sirketAdi} halka arzının onaylı izahname
              verilerinin güncel merkezidir. Süreç haberlerinden farklı olarak
              fiyat, tarih, lot, dağıtım ve satış bilgileri burada birlikte ve
              güncel biçimde tutulur.
            </p>
          </div>

          <div className="grid gap-4 p-6 sm:grid-cols-2 xl:grid-cols-4">
            {summaryItems.map((item) => (
              <InfoCard key={item.label} {...item} />
            ))}
          </div>
        </section>

        <HalkaArzKarnesi
          sirketAdi={veri.sirketAdi}
          kod={kod || veri.sirketAdi}
          talepTarihi={veri.ozet.halkaArzTarihi}
          halkaArzFiyati={veri.ozet.fiyatAralik}
          dagitimYontemi={veri.ozet.dagitimYontemi}
          toplamPay={veri.ozet.pay || veri.toplamPay}
          araciKurum={veri.ozet.araciKurum}
          tahsisat={veri.tahsisat}
        />

        <section className="grid gap-8 xl:grid-cols-3">
          <div className="space-y-8 xl:col-span-2">
            {veri.halkaArzSekli.length > 0 && (
              <Section title="Halka Arz Şekli">
                <div className="grid gap-3">
                  {veri.halkaArzSekli.map((item, index) => (
                    <div
                      key={index}
                      className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </Section>
            )}

            {sermayeBilgileri.length > 0 && (
              <Section title="Sermaye ve Satış Bilgileri">
                <div className="grid gap-4 sm:grid-cols-2">
                  {sermayeBilgileri.map((item) => (
                    <InfoCard key={item.label} {...item} />
                  ))}
                </div>
              </Section>
            )}

            {veri.satisYontemi && veri.satisYontemi.length > 0 && (
              <Section title="Satış Yöntemi">
                <div className="grid gap-3">
                  {veri.satisYontemi.map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-blue-200 bg-blue-50 px-4 py-3 text-sm font-medium text-blue-900"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </Section>
            )}

            {veri.dagitimSonuclari && (
              <Section title={veri.dagitimSonuclari.baslik || "Dağıtım Sonuçları"}>
                {veri.dagitimSonuclari.aciklama && (
                  <p className="mb-5 text-sm leading-7 text-slate-600">
                    {veri.dagitimSonuclari.aciklama}
                  </p>
                )}
                <OzetKartlari items={veri.dagitimSonuclari.ozetKartlari} />
                {veri.dagitimSonuclari.tablo && (
                  <VeriTablosu tablo={veri.dagitimSonuclari.tablo} />
                )}
                {veri.dagitimSonuclari.kaynakHref && (
                  <a
                    href={veri.dagitimSonuclari.kaynakHref}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="mt-4 inline-flex text-sm font-bold text-blue-700 underline decoration-blue-300 underline-offset-4 transition hover:text-blue-900"
                  >
                    KAP dağıtım sonuçları bildirimini aç
                  </a>
                )}
              </Section>
            )}

            {veri.muhtemelTavanSerisi && (
              <Section
                title={veri.muhtemelTavanSerisi.baslik || "Olası Tavan Serisi"}
              >
                {veri.muhtemelTavanSerisi.aciklama && (
                  <p className="mb-5 text-sm leading-7 text-slate-600">
                    {veri.muhtemelTavanSerisi.aciklama}
                  </p>
                )}
                <OzetKartlari items={veri.muhtemelTavanSerisi.ozetKartlari} />
                {veri.muhtemelTavanSerisi.tablo && (
                  <VeriTablosu tablo={veri.muhtemelTavanSerisi.tablo} />
                )}
                {veri.muhtemelTavanSerisi.not && (
                  <p className="mt-4 rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-xs font-medium leading-6 text-amber-900">
                    {veri.muhtemelTavanSerisi.not}
                  </p>
                )}
              </Section>
            )}

            {veri.fonKullanim.length > 0 && (
              <Section title="Fon Kullanım Yeri">
                <div className="grid gap-4 md:grid-cols-2">
                  {veri.fonKullanim.map((item, index) => (
                    <div
                      key={index}
                      className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-sm font-medium text-emerald-950"
                    >
                      {item}
                    </div>
                  ))}
                </div>
                {veri.fonKullanimYorumu && (
                  <p className="mt-5 text-sm leading-7 text-slate-600">
                    {veri.fonKullanimYorumu}
                  </p>
                )}
              </Section>
            )}

            {veri.finansalVeriler.length > 0 && (
              <Section title="Finansal Görünüm">
                <div className="overflow-x-auto">
                  <table className="min-w-full overflow-hidden rounded-2xl border border-slate-200">
                    <thead className="bg-slate-100">
                      <tr>
                        <th className="px-4 py-3 text-left text-sm font-bold text-slate-700">
                          Kalem
                        </th>
                        {donemler.map((d) => (
                          <th
                            key={d}
                            className="px-4 py-3 text-left text-sm font-bold text-slate-700"
                          >
                            {d}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {veri.finansalVeriler.map((row, index) => (
                        <tr
                          key={row.kalem}
                          className={index % 2 === 0 ? "bg-white" : "bg-slate-50"}
                        >
                          <td className="px-4 py-4 text-sm font-semibold text-slate-800">
                            {row.kalem}
                          </td>
                          {donemler.map((d) => (
                            <td key={d} className="px-4 py-4 text-sm text-slate-700">
                              {row.donemler[d] ?? "-"}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                {veri.finansalYorum && (
                  <p className="mt-5 text-sm leading-7 text-slate-600">
                    {veri.finansalYorum}
                  </p>
                )}
              </Section>
            )}

          </div>

          <aside className="space-y-8">
            <Section title="Tahsisat Grupları">
              <div className="space-y-3">
                {tahsisat.length > 0 ? (
                  tahsisat.map((item, index) => (
                    <div
                      key={index}
                      className="rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900"
                    >
                      {item}
                    </div>
                  ))
                ) : (
                  <div className="rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900">
                    Tahsisat oranları ve lot kırılımı kesinleştiğinde bu alan güncellenecektir.
                  </div>
                )}
                {veri.tahsisatNotlari?.map((item, index) => (
                  <div
                    key={`not-${index}`}
                    className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </Section>

            {veri.taahhutOzeti && (
              <Section title="Taahhüt Özeti">
                <div className="space-y-4">
                  {veri.taahhutOzeti.fiyatIstikrari && (
                    <div className="rounded-2xl border border-blue-200 bg-blue-50 p-4">
                      <div className="text-sm font-semibold text-blue-800">
                        Fiyat İstikrarı
                      </div>
                      <p className="mt-2 text-sm text-blue-900">
                        {veri.taahhutOzeti.fiyatIstikrari}
                      </p>
                    </div>
                  )}
                  {veri.taahhutOzeti.satmamaTaahhudu && (
                    <div className="rounded-2xl border border-indigo-200 bg-indigo-50 p-4">
                      <div className="text-sm font-semibold text-indigo-800">
                        Satmama Taahhüdü
                      </div>
                      <p className="mt-2 text-sm text-indigo-900">
                        {veri.taahhutOzeti.satmamaTaahhudu}
                      </p>
                    </div>
                  )}
                  {veri.taahhutOzeti.halkaAciklik && (
                    <div className="rounded-2xl border border-cyan-200 bg-cyan-50 p-4">
                      <div className="text-sm font-semibold text-cyan-800">
                        Halka Açıklık
                      </div>
                      <p className="mt-2 text-sm text-cyan-900">
                        {veri.taahhutOzeti.halkaAciklik}
                      </p>
                    </div>
                  )}
                  {veri.taahhutOzeti.gunlukAlimEmri && (
                    <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4">
                      <div className="text-sm font-semibold text-emerald-800">
                        Günlük Alım Emri
                      </div>
                      <p className="mt-2 text-sm text-emerald-900">
                        {veri.taahhutOzeti.gunlukAlimEmri}
                      </p>
                    </div>
                  )}
                </div>
              </Section>
            )}
          </aside>
        </section>

        {veri.sirketHakkinda && (
          <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="mb-3 text-xl font-bold text-slate-900">
              Şirket Hakkında
            </h2>
            <p className="text-sm leading-7 text-slate-600">{veri.sirketHakkinda}</p>
          </section>
        )}

        <HalkaArzTalepSonuclari slug={slug} veri={veri} />

        <YouTubeVideoCards videolar={veri.videolar} />

        {(() => {
          const riskler = riskMaddeleri(veri);
          return riskler.length > 0 ? (
            <section className="mt-8 rounded-3xl border border-amber-200 bg-amber-50/60 p-6 shadow-sm">
              <h2 className="text-xl font-bold text-slate-900">
                {veri.sirketAdi} Halka Arzında Değerlendirilmesi Gereken Riskler
              </h2>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                Aşağıdaki başlıklar, halka arzın kamuya açık yapısından (arz
                şekli, halka açıklık oranı, taahhütler, finansal görünüm ve
                faaliyet sektörü) türetilen genel risk değerlendirmeleridir.
                Bağlayıcı ve tam risk faktörleri şirketin resmî izahnamesinde
                yer alır.
              </p>
              <div className="mt-5 space-y-3">
                {riskler.map((risk, i) => (
                  <div
                    key={i}
                    className="rounded-2xl border border-amber-200 bg-white p-4"
                  >
                    <div className="text-sm font-bold text-amber-800">
                      {risk.baslik}
                    </div>
                    <p className="mt-1 text-sm leading-7 text-slate-700">
                      {risk.metin}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          ) : null;
        })()}

        <section className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-5">
          <p className="text-xs leading-6 text-slate-500">
            {veri.yasalUyari ||
              "Bu sayfadaki bilgiler onaylı izahname/halka arz sürecine dair genel bilgilendirme amaçlıdır, yatırım tavsiyesi değildir."}
          </p>
        </section>

        <HalkaArzSSS className="mt-8" items={sssSorulari(veri)} />

        <ContinueReading
          title="Halka arz gündeminde devam edin"
          className="mt-6"
          items={[
            {
              title: "Güncel halka arz takvimi",
              href: "/halka-arz",
              description: "Talep toplama tarihleri, halka arz araçları ve güncel gündem.",
              type: "Halka arz",
            },
            {
              title: "Onaylı izahnameler",
              href: "/halka-arz/onayli-izahnameler",
              description: "SPK onayından geçen halka arz şirketlerini inceleyin.",
              type: "İzahname",
            },
            {
              title: "Halka arz kaç lot verir?",
              href: "/halka-arz/talep-hesapla",
              description: "Dağıtım varsayımlarına göre olası lot hesabı yapın.",
              type: "Lot hesabı",
            },
          ]}
        />
      </div>
    </main>
  );
}
