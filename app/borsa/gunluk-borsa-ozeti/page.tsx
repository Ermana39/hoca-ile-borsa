import Image from "next/image";
import Link from "next/link";

const bistVeri = {
  tarih: "04.05.2026",
  kapanis: "14442.56",
  degisimYuzde: 0.92,
};

const tumYukselenler = [
  { kod: "GIPTA", fark: "+10,00%" },
  { kod: "GSDDE", fark: "+10,00%" },
  { kod: "RPTEKF2", fark: "+10,00%" },
  { kod: "SMRVA", fark: "+9,99%" },
  { kod: "MANAS", fark: "+9,99%" },
  { kod: "DOFRB", fark: "+9,99%" },
  { kod: "SANKO", fark: "+9,99%" },
  { kod: "DURKN", fark: "+9,99%" },
];

const tumDusenler = [
  { kod: "AYCES", fark: "-10,00%" },
  { kod: "HPARTF2", fark: "-10,00%" },
  { kod: "ENSRI", fark: "-9,99%" },
  { kod: "HTPSBF2", fark: "-9,99%" },
  { kod: "CEMZY", fark: "-9,98%" },
  { kod: "A1CAP", fark: "-9,96%" },
  { kod: "YESIL", fark: "-9,79%" },
  { kod: "ARENA", fark: "-9,54%" },
];

const tumHacimliler = [
  { kod: "THYAO", hacim: "17.258.388.448" },
  { kod: "PASEU", hacim: "15.019.378.464" },
  { kod: "SASA", hacim: "12.956.317.961" },
  { kod: "ASTOR", hacim: "12.780.841.518" },
  { kod: "ASELS", hacim: "11.475.700.075" },
  { kod: "AKBNK", hacim: "8.750.619.757" },
  { kod: "EREGL", hacim: "7.788.213.099" },
  { kod: "TUPRS", hacim: "6.488.247.174" },
];

const tumParaGirisi = [
  { kod: "ASTOR", tutar: "+286.437.799" },
  { kod: "ISCTR", tutar: "+256.626.435" },
  { kod: "PEKGY", tutar: "+196.155.208" },
  { kod: "THYAO", tutar: "+179.258.518" },
  { kod: "EREGL", tutar: "+112.066.093" },
  { kod: "PASEU", tutar: "+103.204.723" },
  { kod: "TEHOL", tutar: "+94.337.432" },
  { kod: "SISE", tutar: "+71.351.046" },
];

const tumParaCikisi = [
  { kod: "AKBNK", tutar: "-127.036.212" },
  { kod: "PETKM", tutar: "-98.537.446" },
  { kod: "KONTR", tutar: "-65.529.968" },
  { kod: "TUPRS", tutar: "-61.004.368" },
  { kod: "ASELS", tutar: "-55.015.672" },
  { kod: "FROTO", tutar: "-41.647.086" },
  { kod: "GARAN", tutar: "-35.910.712" },
  { kod: "KTLEV", tutar: "-33.121.306" },
  { kod: "KUYAS", tutar: "-32.354.157" },
];

const enCokAlisYapanKurumlar = [
  { kurum: "TERA", hacim: "6.635.669.051", oran: "%47,39" },
  { kurum: "BANK OF AME", hacim: "3.837.914.339", oran: "%27,41" },
  { kurum: "QNB YATIRIM", hacim: "933.530.401", oran: "%6,67" },
  { kurum: "ATA", hacim: "758.377.610", oran: "%5,42" },
  { kurum: "HSBC", hacim: "320.227.008", oran: "%2,29" },
];

const enCokSatisYapanKurumlar = [
  { kurum: "BULLS YATIRIM", hacim: "-3.900.334.287", oran: "%27,85" },
  { kurum: "TEB", hacim: "-1.468.455.870", oran: "%10,49" },
  { kurum: "TACIRLER", hacim: "-1.138.443.077", oran: "%8,13" },
  { kurum: "GLOBAL", hacim: "-812.983.165", oran: "%5,81" },
  { kurum: "UNLU", hacim: "-736.503.496", oran: "%5,26" },
];

const enCokHacimYapanKurumlar = [
  { kurum: "YAPI KREDI", hacim: "84.921.453.119", oran: "%14,36" },
  { kurum: "BANK OF AME", hacim: "74.398.529.670", oran: "%12,58" },
  { kurum: "IS", hacim: "54.243.484.045", oran: "%9,17" },
  { kurum: "AK", hacim: "43.335.417.295", oran: "%7,33" },
  { kurum: "TERA", hacim: "28.171.836.572", oran: "%4,76" },
];

const ekonomikTakvimVerileri = [
  {
    tarih: "30.04.2026",
    kayitlar: [
      {
        saat: "10:00",
        ulke: "TR",
        gosterge: "Toplam İhracat (milyon usd/aylık)",
        onem: "kirmizi" as const,
        aciklanan: "21.899",
        beklenti: "21.918",
        onceki: "21.049",
      },
      {
        saat: "10:00",
        ulke: "TR",
        gosterge: "Toplam İthalat (milyon usd /aylık)",
        onem: "kirmizi" as const,
        aciklanan: "33.120",
        beklenti: "33.181",
        onceki: "30.080",
      },
      {
        saat: "10:00",
        ulke: "TR",
        gosterge: "Dış Ticaret Dengesi (milyon $/aylık)",
        onem: "kirmizi" as const,
        aciklanan: "-11.221",
        beklenti: "-11.263",
        onceki: "-9.031",
      },
      {
        saat: "10:00",
        ulke: "TR",
        gosterge: "İhracatın İthalatı Karşılama Oranı % (aylık)",
        onem: "kirmizi" as const,
        aciklanan: "66.1%",
        beklenti: "66.1%",
        onceki: "70.0%",
      },
      {
        saat: "10:00",
        ulke: "TR",
        gosterge: "Turizm Geliri (milyon dolar,yıllık)",
        onem: "turuncu-gri" as const,
        aciklanan: "9.896",
        beklenti: "-",
        onceki: "15.152",
      },
      {
        saat: "11:00",
        ulke: "TR",
        gosterge: "Yabancı Ziyaretçiler (bin kişi)",
        onem: "turuncu-gri" as const,
        aciklanan: "2.464",
        beklenti: "-",
        onceki: "2.127",
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

function ReklamAlani({ variant = "yatay" }: { variant?: "yatay" | "icerik" | "buyuk" }) {
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
      <h2 className="mb-4 text-center text-xl font-bold text-zinc-900">{baslik}</h2>

      <div className="overflow-hidden rounded-xl border border-zinc-200 bg-white">
        <div className="grid grid-cols-2 border-b border-zinc-200 bg-zinc-100 px-4 py-3 text-sm font-bold text-zinc-700">
          <div>Hisse</div>
          <div className="text-right">{degerBaslik}</div>
        </div>

        {veriler.length > 0 ? (
          veriler.map((item, index) => (
            <div
              key={item.kod}
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
      <h2 className="mb-4 text-center text-xl font-bold text-zinc-900">{baslik}</h2>

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

function OnemKutulari({ tip }: { tip: "sari" | "turuncu" | "turuncu-gri" | "kirmizi" }) {
  const renkler =
    tip === "sari"
      ? ["bg-yellow-400", "bg-yellow-400", "bg-zinc-300"]
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
  onem: "sari" | "turuncu" | "turuncu-gri" | "kirmizi";
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

        <h1 className="mb-6 text-3xl font-bold text-zinc-900">Günlük Borsa Özeti</h1>

        <section className="mb-8">
          <ReklamAlani variant="yatay" />
        </section>

        <div className="mb-6 rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
          <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white">
            <div className="relative aspect-[16/9] w-full">
              <Image
                src="/günlük-özet.jpg"
                alt="Günlük özet görseli"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>

        <div className="mb-6 grid gap-4 xl:grid-cols-[1fr_2.5fr]">
          <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
            <div className="grid min-h-[320px] grid-rows-3 text-center">
              <div className="flex items-center justify-center border-b border-zinc-200">
                <div>
                  <div className="text-2xl font-semibold text-zinc-700">XU100</div>
                  <div className="mt-3 text-4xl font-bold text-zinc-900">{bistVeri.kapanis}</div>
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

              <div className="flex items-center justify-center">
                <div className="text-2xl font-semibold text-zinc-700">{bistVeri.tarih}</div>
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

        <section className="mt-12 mb-8">
          <ReklamAlani variant="buyuk" />
        </section>

        <section className="rounded-2xl border border-zinc-200 bg-white p-6">
          <h2 className="mb-4 text-2xl font-bold text-zinc-900">
            Günlük Borsa Özeti Hakkında
          </h2>

          <p className="mb-4 leading-7 text-zinc-700">
            Günlük borsa özeti sayfası, Borsa İstanbul piyasalarında yaşanan güncel
            gelişmeleri tek ekranda takip etmek isteyen yatırımcılar için
            hazırlanmıştır. Bu sayfada BIST 100 endeksi kapanış verileri, günlük
            değişim oranları, en çok yükselen hisseler, en çok düşen hisseler,
            para girişi ve para çıkışı yaşanan hisseler gibi önemli piyasa
            verilerine hızlı şekilde ulaşabilirsiniz.
          </p>

          <p className="mb-4 leading-7 text-zinc-700">
            Günlük borsa verileri, yatırımcıların piyasa yönünü anlaması ve kısa
            vadeli fiyat hareketlerini değerlendirmesi açısından büyük önem taşır.
            Özellikle işlem hacmi yüksek hisseler, para girişi yaşanan şirketler,
            kurumsal işlemler ve dikkat çeken sektör hareketleri yatırım
            kararlarında önemli sinyaller verebilir.
          </p>

          <p className="mb-4 leading-7 text-zinc-700">
            Sayfada yer alan ekonomik takvim, en çok yükselen ve düşen hisseler,
            en hacimli hisseler ve kurum bazlı işlem dağılımları sayesinde piyasanın
            gün içindeki genel görünümünü daha detaylı inceleyebilirsiniz. Bu yapı,
            hem kısa vadeli traderlar hem de uzun vadeli yatırımcılar için pratik
            bir takip ekranı sunar.
          </p>

          <p className="leading-7 text-zinc-700">
            Güncel BIST 100 verileri, günlük hisse performansları, işlem hacmi
            sıralamaları, para giriş çıkış analizleri, ekonomik takvim ve kurum
            bazlı piyasa özeti için bu sayfayı düzenli olarak takip edebilirsiniz.
          </p>
        </section>
      </div>
    </main>
  );
}