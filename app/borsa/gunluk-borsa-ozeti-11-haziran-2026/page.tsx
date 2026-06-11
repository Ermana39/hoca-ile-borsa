import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";


export const metadata: Metadata = {
  title: "11 Haziran 2026 Günlük Borsa Özeti | Hoca ile Borsa",
  description:
    "11 Haziran 2026 BIST 100 kapanışı, en çok yükselen ve düşen hisseler, para girişi-çıkışı, en hacimli hisseler, ekonomik takvim ve kurum dağılımı.",
  alternates: {
    canonical:
      "https://www.hocaileborsa.com/borsa/gunluk-borsa-ozeti/11-haziran-2026",
  },
  openGraph: {
    title: "11 Haziran 2026 Günlük Borsa Özeti",
    description:
      "BIST 100 kapanışı, günlük piyasa özeti, en çok yükselenler, düşenler, para girişi-çıkışı ve kurum dağılımı.",
    url: "https://www.hocaileborsa.com/borsa/gunluk-borsa-ozeti/11-haziran-2026",
    siteName: "Hoca ile Borsa",
    type: "article",
    images: [
      {
        url: "https://www.hocaileborsa.com/gunluk-ozet.webp",
        width: 1200,
        height: 675,
        alt: "11 Haziran 2026 Günlük Borsa Özeti",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "11 Haziran 2026 Günlük Borsa Özeti",
    description:
      "BIST 100 kapanışı, en çok yükselen ve düşen hisseler, para girişi-çıkışı ve kurum dağılımı.",
    images: ["https://www.hocaileborsa.com/gunluk-ozet.webp"],
  },
};

const bistVeri = {
  tarih: "11.06.2026",
  kapanis: "13743.50",
  degisimYuzde: -0.01,
  toplamHacim: "275.670.513.721",
};

const tumYukselenler = [
  { kod: "INFO", fark: "+10,00%" },
  { kod: "FZLGY", fark: "+10,00%" },
  { kod: "GSDHO", fark: "+10,00%" },
  { kod: "ESCOM", fark: "+10,00%" },
  { kod: "TERA", fark: "+10,00%" },
  { kod: "BESTE", fark: "+9,99%" },
  { kod: "HPSOLF2", fark: "+9,97%" },
  { kod: "EDATA", fark: "+9,97%" },
  { kod: "GENKM", fark: "+9,94%" },
];

const tumDusenler = [
  { kod: "IHLASR", fark: "-15,38%" },
  { kod: "ISKPL", fark: "-10,00%" },
  { kod: "RALYH", fark: "-10,00%" },
  { kod: "RUBNS", fark: "-10,00%" },
  { kod: "NETCD", fark: "-10,00%" },
  { kod: "HTPSBF2", fark: "-10,00%" },
  { kod: "MAGEN", fark: "-9,97%" },
  { kod: "EMPAE", fark: "-9,97%" },
  { kod: "ALGYO", fark: "-9,91%" },
];

const tumHacimliler = [
  { kod: "SASA", hacim: "17.240.437.673" },
  { kod: "ASTOR", hacim: "14.963.284.306" },
  { kod: "THYAO", hacim: "10.029.234.245" },
  { kod: "ASELS", hacim: "9.483.810.925" },
  { kod: "AKBNK", hacim: "9.093.307.140" },
  { kod: "ISCTR", hacim: "6.875.152.694" },
  { kod: "YKBNK", hacim: "6.004.122.242" },
  { kod: "EUPWR", hacim: "5.751.814.545" },
  { kod: "HEKTS", hacim: "4.630.275.993" },
];

const tumParaGirisi = [
  { kod: "SASA", tutar: "+278.576.331" },
  { kod: "TERA", tutar: "+153.928.575" },
  { kod: "TCELL", tutar: "+121.604.673" },
  { kod: "GARAN", tutar: "+73.428.218" },
  { kod: "ASTOR", tutar: "+67.057.295" },
  { kod: "EREGL", tutar: "+63.148.067" },
  { kod: "TEHOL", tutar: "+53.128.066" },
  { kod: "KRDMD", tutar: "+46.688.819" },
];

const tumParaCikisi = [
  { kod: "BIMAS", tutar: "-103.195.774" },
  { kod: "NETCD", tutar: "-84.337.147" },
  { kod: "THYAO", tutar: "-79.655.663" },
  { kod: "RALYH", tutar: "-52.334.398" },
  { kod: "DAPGM", tutar: "-51.347.985" },
  { kod: "ULKER", tutar: "-48.478.859" },
  { kod: "ISCTR", tutar: "-36.159.730" },
  { kod: "HALKB", tutar: "-33.633.776" },
];

const enCokAlisYapanKurumlar = [
  { kurum: "TERA", hacim: "2.561.701.205", oran: "%43,32" },
  { kurum: "A1 CAPITAL", hacim: "594.134.473", oran: "%10,05" },
  { kurum: "PUSULA YAT.", hacim: "583.089.609", oran: "%9,86" },
  { kurum: "OYAK", hacim: "294.181.274", oran: "%4,98" },
  { kurum: "NEO MENKUL", hacim: "283.505.524", oran: "%4,83" },
];

const enCokSatisYapanKurumlar = [
  { kurum: "INFO", hacim: "-1.006.575.135", oran: "%17,02" },
  { kurum: "QNB YATIRIM", hacim: "-517.373.437", oran: "%8,75" },
  { kurum: "YATIRIM FINANSMAN", hacim: "-449.499.861", oran: "%7,60" },
  { kurum: "IS", hacim: "-435.657.023", oran: "%7,37" },
  { kurum: "TACIRLER", hacim: "-398.579.601", oran: "%6,74" },
];

const enCokHacimYapanKurumlar = [
  { kurum: "YAPI KREDI", hacim: "77.466.018.095", oran: "%14,05" },
  { kurum: "BANK OF AMERICA", hacim: "66.830.420.031", oran: "%12,12" },
  { kurum: "IS", hacim: "55.678.319.260", oran: "%10,10" },
  { kurum: "AK", hacim: "47.415.597.415", oran: "%8,60" },
  { kurum: "DENIZ", hacim: "24.707.367.185", oran: "%4,48" },
];

const ekonomikTakvimVerileri = [
  {
    tarih: "11.06.2026",
    kayitlar: [
      {
        saat: "14:00",
        ulke: "TR",
        gosterge: "TCMB Faiz Kararı",
        onem: "kirmizi" as const,
        aciklanan: "37.00%",
        beklenti: "37,00%",
        onceki: "37,00%",
      },
    ],
  },
  {
    tarih: "12.06.2026",
    kayitlar: [
      {
        saat: "10:00",
        ulke: "TR",
        gosterge: "İhracat Birim Değer Endeksi (yıllık %)",
        onem: "turuncu-gri" as const,
        aciklanan: "-",
        beklenti: "-",
        onceki: "12.3%",
      },
      {
        saat: "10:00",
        ulke: "TR",
        gosterge: "İthalat Birim Değer Endeksi (yıllık %)",
        onem: "turuncu-gri" as const,
        aciklanan: "-",
        beklenti: "-",
        onceki: "6.3%",
      },
      {
        saat: "10:00",
        ulke: "TR",
        gosterge: "İhracat Miktar Endeksi (yıllık %)",
        onem: "turuncu-gri" as const,
        aciklanan: "-",
        beklenti: "-",
        onceki: "-16.7%",
      },
      {
        saat: "10:00",
        ulke: "TR",
        gosterge: "İthalat Miktar Endeksi (yıllık %)",
        onem: "turuncu-gri" as const,
        aciklanan: "-",
        beklenti: "-",
        onceki: "1.8%",
      },
      {
        saat: "10:00",
        ulke: "TR",
        gosterge: "Cari İşlemler Dengesi (Milyon USD)",
        onem: "kirmizi" as const,
        aciklanan: "-",
        beklenti: "-5.630",
        onceki: "-9.672",
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
          11 Haziran 2026 Günlük Borsa Özeti
        </h1>

        <div className="mb-6 rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
          <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white">
            <div className="relative aspect-[16/9] w-full">
              <Image
                src="/gunluk-ozet.webp"
                alt="11 Haziran 2026 günlük borsa özeti görseli"
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
            11 Haziran 2026 Günlük Borsa Özeti Hakkında
          </h2>

          <p className="mb-4 leading-7 text-zinc-700">
            11 Haziran 2026 günlük borsa özeti sayfası, Borsa İstanbul
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