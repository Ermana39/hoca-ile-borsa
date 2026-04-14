import Image from "next/image";
import Link from "next/link";

const bistVeri = {
  tarih: "14.04.2026",
  kapanis: "14202.24",
  degisimYuzde: 1.02,
};

const tumYukselenler = [
  { kod: "VSNMD", fark: "+10,00%" },
  { kod: "MAKTK", fark: "+10,00%" },
  { kod: "ANELE", fark: "+10,00%" },
  { kod: "KARTN", fark: "+10,00%" },
  { kod: "SMRVA", fark: "+10,00%" },
  { kod: "TEKTU", fark: "+9,98%" },
  { kod: "CGCAM", fark: "+9,98%" },
  { kod: "ARENA", fark: "+9,98%" },
  { kod: "ULUSE", fark: "+9,97%" },
];

const tumDusenler = [
  { kod: "MEKAG", fark: "-10,00%" },
  { kod: "BLCYT", fark: "-9,97%" },
  { kod: "ENSRI", fark: "-9,95%" },
  { kod: "GENTS", fark: "-9,93%" },
  { kod: "BRSBF2", fark: "-9,89%" },
  { kod: "APYVCF2", fark: "-9,77%" },
  { kod: "ECILC", fark: "-8,47%" },
  { kod: "LIDER", fark: "-7,61%" },
  { kod: "ECZYT", fark: "-7,43%" },
];

const tumHacimliler = [
  { kod: "THYAO", hacim: "21.028.938.617" },
  { kod: "ASELS", hacim: "16.015.349.379" },
  { kod: "YKBNK", hacim: "14.122.796.322" },
  { kod: "ISCTR", hacim: "13.425.979.184" },
  { kod: "AKBNK", hacim: "12.941.139.525" },
  { kod: "TUPRS", hacim: "12.633.012.514" },
  { kod: "SASA", hacim: "12.503.320.494" },
  { kod: "TRALT", hacim: "10.937.376.117" },
  { kod: "KTLEV", hacim: "7.901.336.020" },
];

const tumParaGirisi = [
  { kod: "TUPRS", tutar: "+422.657.082" },
  { kod: "TRALT", tutar: "+183.477.576" },
  { kod: "ASTOR", tutar: "+138.616.082" },
  { kod: "KCHOL", tutar: "+134.027.837" },
  { kod: "TERA", tutar: "+119.178.880" },
  { kod: "AKBNK", tutar: "+113.328.004" },
  { kod: "BIMAS", tutar: "+75.471.645" },
  { kod: "KTLEV", tutar: "+66.188.947" },
];

const tumParaCikisi = [
  { kod: "YKBNK", tutar: "-504.781.476" },
  { kod: "ISCTR", tutar: "-171.545.987" },
  { kod: "ASELS", tutar: "-164.443.778" },
  { kod: "EREGL", tutar: "-123.757.836" },
  { kod: "EUREN", tutar: "-89.969.300" },
  { kod: "DAPGM", tutar: "-66.728.049" },
  { kod: "ECILC", tutar: "-62.304.311" },
  { kod: "GLRMK", tutar: "-60.805.610" },
];

const enCokAlisYapanKurumlar = [
  { kurum: "QNB YATIRIM", hacim: "2.096.643.186", oran: "%20,39" },
  { kurum: "AK", hacim: "1.323.765.303", oran: "%12,87" },
  { kurum: "TERA", hacim: "1.135.276.164", oran: "%11,04" },
  { kurum: "YAPI KREDI", hacim: "1.119.970.901", oran: "%10,89" },
  { kurum: "ALNUS", hacim: "738.154.076", oran: "%7,18" },
];

const enCokSatisYapanKurumlar = [
  { kurum: "YATIRIM FINANSMAN", hacim: "-2.894.267.163", oran: "%28,14" },
  { kurum: "BULLS YATIRIM", hacim: "-1.902.663.283", oran: "%18,50" },
  { kurum: "ZIRAAT", hacim: "-1.873.104.824", oran: "%18,21" },
  { kurum: "HALK", hacim: "-711.161.257", oran: "%6,92" },
  { kurum: "TEB", hacim: "-570.706.408", oran: "%5,55" },
];

const enCokHacimYapanKurumlar = [
  { kurum: "YAPI KREDI", hacim: "91.969.822.100", oran: "%13,98" },
  { kurum: "BANK OF AMERICA", hacim: "82.610.089.043", oran: "%12,56" },
  { kurum: "IS", hacim: "62.477.290.124", oran: "%9,50" },
  { kurum: "AK", hacim: "46.667.072.917", oran: "%7,09" },
  { kurum: "ZIRAAT", hacim: "27.097.470.883", oran: "%4,12" },
];

function ilkBesKisaKodlu<T extends { kod: string }>(liste: T[]) {
  return liste.filter((item) => item.kod.length <= 5).slice(0, 5);
}

const enCokYukselenler = ilkBesKisaKodlu(tumYukselenler);
const enCokDusenler = ilkBesKisaKodlu(tumDusenler);
const enHacimliler = ilkBesKisaKodlu(tumHacimliler);
const paraGirisi = ilkBesKisaKodlu(tumParaGirisi);
const paraCikisi = ilkBesKisaKodlu(tumParaCikisi);

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

        {veriler.map((item, index) => (
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
        ))}
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

function OnemKutulari({ tip }: { tip: "kirmizi" }) {
  const renkler = ["bg-red-500", "bg-red-500", "bg-red-500"];

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
  aciklanan,
  beklenti,
  onceki,
}: {
  saat: string;
  ulke: string;
  gosterge: string;
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
        <OnemKutulari tip="kirmizi" />
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
                src="/günlük-özet.png"
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

                <TakvimTarihSatiri tarih="15.04.2026" />
                <TakvimSatiri
                  saat="11:00"
                  ulke="TR"
                  gosterge="Merkezi Yönetim Bütçe Giderleri (aylık, mln tl)"
                  aciklanan="-"
                  beklenti="-"
                  onceki="1.329.226"
                />
                <TakvimSatiri
                  saat="11:00"
                  ulke="TR"
                  gosterge="Merkezi Yönetim Gelirleri (aylık, mln tl)"
                  aciklanan="-"
                  beklenti="-"
                  onceki="1.353.593"
                />
                <TakvimSatiri
                  saat="11:00"
                  ulke="TR"
                  gosterge="Merkezi Yönetim Bütçe Dengesi (aylık, mln tl)"
                  aciklanan="-"
                  beklenti="-"
                  onceki="24.366"
                />
                <TakvimSatiri
                  saat="11:00"
                  ulke="TR"
                  gosterge="Merkezi Yönetim Bütçe Faiz Dışı Dengesi (aylık, milyon TL)"
                  aciklanan="-"
                  beklenti="-"
                  onceki="208.062"
                />
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

        <section className="mt-8">
          <ReklamAlani variant="icerik" />
        </section>
      </div>
    </main>
  );
}