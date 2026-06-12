import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "12 Haziran 2026 Günlük Borsa Özeti | Hoca ile Borsa",
  description:
    "12 Haziran 2026 BIST 100 kapanışı, en çok yükselen ve düşen hisseler, para girişi-çıkışı, en hacimli hisseler, ekonomik takvim ve kurum dağılımı.",
  alternates: {
    canonical:
      "https://www.hocaileborsa.com/borsa/gunluk-borsa-ozeti/12-haziran-2026",
  },
  openGraph: {
    title: "12 Haziran 2026 Günlük Borsa Özeti",
    description:
      "BIST 100 kapanışı, günlük piyasa özeti, en çok yükselenler, düşenler, para girişi-çıkışı ve kurum dağılımı.",
    url: "https://www.hocaileborsa.com/borsa/gunluk-borsa-ozeti/12-haziran-2026",
    siteName: "Hoca ile Borsa",
    type: "article",
    images: [
      {
        url: "https://www.hocaileborsa.com/gunluk-ozet.webp",
        width: 1200,
        height: 675,
        alt: "12 Haziran 2026 Günlük Borsa Özeti",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "12 Haziran 2026 Günlük Borsa Özeti",
    description:
      "BIST 100 kapanışı, en çok yükselen ve düşen hisseler, para girişi-çıkışı ve kurum dağılımı.",
    images: ["https://www.hocaileborsa.com/gunluk-ozet.webp"],
  },
};

const bistVeri = {
  tarih: "12.06.2026",
  kapanis: "13938.48",
  degisimYuzde: 1.42,
  toplamHacim: "329.167.897.412",
};

const tumYukselenler = [
  { kod: "ARMGD", fark: "+10,00%" },
  { kod: "SANFM", fark: "+10,00%" },
  { kod: "ENERY", fark: "+10,00%" },
  { kod: "CEMAS", fark: "+10,00%" },
  { kod: "SMRVA", fark: "+9,99%" },
  { kod: "PKART", fark: "+9,99%" },
  { kod: "PRZMA", fark: "+9,99%" },
  { kod: "GZNMI", fark: "+9,98%" },
];

const tumDusenler = [
  { kod: "RUBNS", fark: "-10,00%" },
  { kod: "ASTOR", fark: "-10,00%" },
  { kod: "ENDAE", fark: "-9,98%" },
  { kod: "EMPAE", fark: "-9,95%" },
  { kod: "ISKPL", fark: "-9,91%" },
  { kod: "OSTIM", fark: "-8,94%" },
  { kod: "ALGYO", fark: "-8,29%" },
  { kod: "GSDDE", fark: "-8,26%" },
];

const tumHacimliler = [
  { kod: "THYAO", hacim: "26.865.029.766" },
  { kod: "AKBNK", hacim: "17.627.062.937" },
  { kod: "ASTOR", hacim: "11.513.621.972" },
  { kod: "ISCTR", hacim: "10.973.056.961" },
  { kod: "ASELS", hacim: "9.920.927.219" },
  { kod: "YKBNK", hacim: "9.795.601.090" },
  { kod: "GARAN", hacim: "8.384.800.328" },
  { kod: "TERA", hacim: "8.039.643.505" },
];

const tumParaGirisi = [
  { kod: "TERA", tutar: "+572.039.622" },
  { kod: "AKBNK", tutar: "+482.624.958" },
  { kod: "YKBNK", tutar: "+325.448.338" },
  { kod: "THYAO", tutar: "+316.713.195" },
  { kod: "TTKOM", tutar: "+164.782.855" },
  { kod: "GARAN", tutar: "+156.376.383" },
  { kod: "SAHOL", tutar: "+125.709.359" },
  { kod: "EREGL", tutar: "+109.113.900" },
  { kod: "ISCTR", tutar: "+104.607.969" },
  { kod: "TEHOL", tutar: "+91.793.706" },
  { kod: "KCHOL", tutar: "+72.006.867" },
  { kod: "SISE", tutar: "+58.403.654" },
  { kod: "KRDMD", tutar: "+55.875.902" },
  { kod: "TAVHL", tutar: "+55.132.041" },
  { kod: "EKGYO", tutar: "+54.674.771" },
  { kod: "TCELL", tutar: "+52.723.669" },
];

const tumParaCikisi = [
  { kod: "ASTOR", tutar: "-371.201.615" },
  { kod: "BIMAS", tutar: "-103.247.544" },
  { kod: "PETKM", tutar: "-72.472.087" },
  { kod: "DOFRB", tutar: "-40.210.903" },
  { kod: "ULKER", tutar: "-40.197.652" },
  { kod: "MAGEN", tutar: "-37.751.208" },
  { kod: "TUPRS", tutar: "-30.974.359" },
  { kod: "GUBRF", tutar: "-30.781.800" },
  { kod: "HALKB", tutar: "-28.224.969" },
  { kod: "KTLEV", tutar: "-28.176.055" },
  { kod: "NETCD", tutar: "-28.116.286" },
  { kod: "DAPGM", tutar: "-27.054.682" },
  { kod: "GLRMK", tutar: "-26.471.377" },
  { kod: "RALYH", tutar: "-26.124.194" },
  { kod: "FROTO", tutar: "-23.441.086" },
  { kod: "GENIL", tutar: "-23.245.493" },
];

const enCokAlisYapanKurumlar = [
  { kurum: "YAPI KREDI", hacim: "3.547.145.667", oran: "%23,05" },
  { kurum: "BANK OF AMERICA", hacim: "3.195.454.442", oran: "%20,77" },
  { kurum: "AK", hacim: "2.591.269.316", oran: "%16,84" },
  { kurum: "TERA", hacim: "2.488.472.289", oran: "%16,17" },
  { kurum: "PUSULA YAT.", hacim: "1.582.057.509", oran: "%10,28" },
];

const enCokSatisYapanKurumlar = [
  { kurum: "IS", hacim: "-1.693.880.209", oran: "%11,01" },
  { kurum: "INFO", hacim: "-1.529.846.499", oran: "%9,94" },
  { kurum: "DESTEK", hacim: "-1.344.794.268", oran: "%8,74" },
  { kurum: "HALK", hacim: "-1.159.070.959", oran: "%7,53" },
  { kurum: "TEB", hacim: "-1.158.065.996", oran: "%7,53" },
];

const enCokHacimYapanKurumlar = [
  { kurum: "YAPI KREDI", hacim: "94.400.779.568", oran: "%14,34" },
  { kurum: "BANK OF AMERICA", hacim: "83.797.699.045", oran: "%12,73" },
  { kurum: "IS", hacim: "67.548.511.585", oran: "%10,26" },
  { kurum: "AK", hacim: "54.591.799.545", oran: "%8,29" },
  { kurum: "TACIRLER", hacim: "26.963.721.815", oran: "%4,10" },
];

const ekonomikTakvimVerileri = [
  {
    tarih: "12.06.2026",
    kayitlar: [
      {
        saat: "10:00",
        ulke: "TR",
        gosterge: "İhracat Birim Değer Endeksi (yıllık %)",
        onem: "turuncu-gri" as const,
        aciklanan: "13.7%",
        beklenti: "-",
        onceki: "12.3%",
      },
      {
        saat: "10:00",
        ulke: "TR",
        gosterge: "İthalat Birim Değer Endeksi (yıllık %)",
        onem: "turuncu-gri" as const,
        aciklanan: "11.3%",
        beklenti: "-",
        onceki: "6.3%",
      },
      {
        saat: "10:00",
        ulke: "TR",
        gosterge: "İhracat Miktar Endeksi (yıllık %)",
        onem: "turuncu-gri" as const,
        aciklanan: "7.6%",
        beklenti: "-",
        onceki: "-16.7%",
      },
      {
        saat: "10:00",
        ulke: "TR",
        gosterge: "İthalat Miktar Endeksi (yıllık %)",
        onem: "turuncu-gri" as const,
        aciklanan: "-7.3%",
        beklenti: "-",
        onceki: "1.8%",
      },
      {
        saat: "10:00",
        ulke: "TR",
        gosterge: "Cari İşlemler Dengesi (Milyon USD)",
        onem: "kirmizi" as const,
        aciklanan: "-5.695",
        beklenti: "-5.630",
        onceki: "-9.672",
      },
    ],
  },
  {
    tarih: "15.06.2026",
    kayitlar: [
      {
        saat: "10:00",
        ulke: "TR",
        gosterge: "TE Arındırılmış Sanayi Üretimi (yıllık değişim)",
        onem: "kirmizi" as const,
        aciklanan: "-",
        beklenti: "-",
        onceki: "-1.1%",
      },
      {
        saat: "11:00",
        ulke: "TR",
        gosterge: "Merkezi Yönetim Bütçe Giderleri (aylık, mln tl)",
        onem: "kirmizi" as const,
        aciklanan: "-",
        beklenti: "-",
        onceki: "1.524.891",
      },
      {
        saat: "11:00",
        ulke: "TR",
        gosterge: "Merkezi Yönetim Bütçe Gelirleri (aylık, mln tl)",
        onem: "kirmizi" as const,
        aciklanan: "-",
        beklenti: "-",
        onceki: "1.186.164",
      },
      {
        saat: "11:00",
        ulke: "TR",
        gosterge: "Merkezi Yönetim Bütçe Dengesi (aylık, mln tl)",
        onem: "kirmizi" as const,
        aciklanan: "-",
        beklenti: "-",
        onceki: "-338.727",
      },
      {
        saat: "11:00",
        ulke: "TR",
        gosterge: "Merkezi Yönetim Bütçe Faiz Dışı Dengesi (aylık, milyon TL)",
        onem: "kirmizi" as const,
        aciklanan: "-",
        beklenti: "-",
        onceki: "-81.095",
      },
    ],
  },
];

function ilkBesKisaKodlu<T extends { kod: string }>(liste: T[]) {
  return liste.filter((item) => item.kod.length <= 5).slice(0, 5);
}

const enCokYukselenler = ilkBesKisaKodlu(tumYukselenler);
const enCokDusenler = ilkBesKisaKodlu(tumDusenler);
const enHacimliler = ilkBesKisaKodlu(tumHacimliler);
const paraGirisi = ilkBesKisaKodlu(tumParaGirisi);
const paraCikisi = ilkBesKisaKodlu(tumParaCikisi);

function ReklamAlani({
  variant = "yatay",
}: {
  variant?: "yatay" | "icerik" | "buyuk";
}) {
  const alanClass =
    variant === "icerik"
      ? "min-h-[220px] sm:min-h-[250px] lg:min-h-[280px]"
      : variant === "buyuk"
        ? "min-h-[260px] sm:min-h-[320px] lg:min-h-[420px]"
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
  renk,
  degerBaslik,
}: {
  baslik: string;
  veriler: { kod: string; fark?: string; hacim?: string; tutar?: string }[];
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
                {item.fark || item.hacim || item.tutar}
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
  veriler: { kurum: string; hacim: string; oran: string }[];
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

function OnemKutulari({
  tip,
}: {
  tip: "sari" | "sari-tek" | "turuncu" | "turuncu-gri" | "kirmizi";
}) {
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
  onem: "sari" | "sari-tek" | "turuncu" | "turuncu-gri" | "kirmizi";
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
      <div className="text-center font-semibold text-zinc-700">
        {aciklanan}
      </div>
      <div className="text-center font-semibold text-zinc-700">{beklenti}</div>
      <div className="text-center font-semibold text-zinc-700">{onceki}</div>
    </div>
  );
}

export default function GunlukBorsaOzetiPage() {
  const pozitif = bistVeri.degisimYuzde >= 0;

  return (
    <main className="min-h-screen bg-white px-4 pb-6 pt-0 md:px-6">
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
          12 Haziran 2026 Günlük Borsa Özeti
        </h1>

        <div className="mb-6 rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
          <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white">
            <div className="relative aspect-[16/9] w-full">
              <Image
                src="/gunluk-ozet.webp"
                alt="12 Haziran 2026 günlük borsa özeti görseli"
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
                    {bistVeri.kapanis}
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center border-b border-zinc-200">
                <div
                  className={`text-4xl font-semibold ${
                    pozitif ? "text-green-700" : "text-red-700"
                  }`}
                >
                  %{bistVeri.degisimYuzde.toFixed(2)}
                </div>
              </div>

              <div className="flex items-center justify-center border-b border-zinc-200">
                <div>
                  <div className="text-sm font-semibold text-zinc-500">
                    BIST Toplam Hacim
                  </div>
                  <div className="mt-2 text-2xl font-bold text-zinc-800">
                    {bistVeri.toplamHacim}
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center">
                <div className="text-2xl font-semibold text-zinc-700">
                  {bistVeri.tarih}
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

                {ekonomikTakvimVerileri.map((grup) => (
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
            veriler={enCokYukselenler}
            renk="yesil"
            degerBaslik="Fark %"
          />

          <ListeKutusu
            baslik="En Çok Düşen"
            veriler={enCokDusenler}
            renk="kirmizi"
            degerBaslik="Fark %"
          />

          <ListeKutusu
            baslik="En Hacimliler"
            veriler={enHacimliler}
            renk="gri"
            degerBaslik="Hacim"
          />
        </div>

        <div className="mb-6 grid gap-4 xl:grid-cols-2">
          <ListeKutusu
            baslik="İlk 5 Para Girişi"
            veriler={paraGirisi}
            renk="yesil"
            degerBaslik="Tutar"
          />

          <ListeKutusu
            baslik="İlk 5 Para Çıkışı"
            veriler={paraCikisi}
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
              veriler={enCokAlisYapanKurumlar}
              renk="yesil"
            />

            <KurumKutusu
              baslik="En Çok Satış Yapanlar"
              veriler={enCokSatisYapanKurumlar}
              renk="kirmizi"
            />

            <KurumKutusu
              baslik="En Çok Hacim Yapanlar"
              veriler={enCokHacimYapanKurumlar}
              renk="gri"
            />
          </div>
        </div>

        <section className="mt-6 rounded-2xl border border-zinc-200 bg-white p-6">
          <h2 className="mb-4 text-2xl font-bold text-zinc-900">
            12 Haziran 2026 Günlük Borsa Özeti Hakkında
          </h2>

          <p className="mb-4 leading-7 text-zinc-700">
            12 Haziran 2026 günlük borsa özeti sayfası, Borsa İstanbul
            piyasalarında yaşanan güncel gelişmeleri tek ekranda takip etmek
            isteyen yatırımcılar için hazırlanmıştır. Bu sayfada BIST 100
            endeksi kapanış verileri, günlük değişim oranları, en çok yükselen
            hisseler, en çok düşen hisseler, para girişi ve para çıkışı yaşanan
            hisseler gibi önemli piyasa verilerine hızlı şekilde ulaşabilirsiniz.
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
      </div>
    </main>
  );
}