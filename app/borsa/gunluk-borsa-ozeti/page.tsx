import Image from "next/image";
import Link from "next/link";

const bistVeri = {
  tarih: "15.04.2026",
  kapanis: "14058.51",
  degisimYuzde: -0.11,
};

const enCokYukselenler = [
  { kod: "SMRVA", fark: "+10,00%" },
  { kod: "ANELE", fark: "+9,98%" },
  { kod: "KTSKR", fark: "+9,98%" },
  { kod: "SURGY", fark: "+9,98%" },
  { kod: "ULUSE", fark: "+9,96%" },
];

const enCokDusenler = [
  { kod: "HPARTF2", fark: "-9,99%" },
  { kod: "BLCYT", fark: "-9,98%" },
  { kod: "SVGYO", fark: "-9,97%" },
  { kod: "MEKAG", fark: "-9,85%" },
  { kod: "AAGYO", fark: "-8,93%" },
];

const enHacimliler = [
  { kod: "ASELS", hacim: "31.936.965.237" },
  { kod: "THYAO", hacim: "18.950.723.789" },
  { kod: "TUPRS", hacim: "15.121.480.781" },
  { kod: "AKBNK", hacim: "9.827.155.058" },
  { kod: "SASA", hacim: "9.392.377.926" },
];

const paraGirisi = [
  { kod: "TUPRS", tutar: "+251.894.747" },
  { kod: "EREGL", tutar: "+149.361.752" },
  { kod: "ISCTR", tutar: "+90.443.241" },
  { kod: "AKBNK", tutar: "+75.463.891" },
  { kod: "ASELS", tutar: "+73.391.524" },
];

const paraCikisi = [
  { kod: "THYAO", tutar: "-151.715.228" },
  { kod: "ASTOR", tutar: "-143.902.331" },
  { kod: "MIATK", tutar: "-103.463.148" },
  { kod: "AAGYO", tutar: "-85.368.898" },
  { kod: "SASA", tutar: "-67.367.882" },
];

const enCokAlisYapanKurumlar = [
  { kurum: "DENIZ", hacim: "1.863.995.767", oran: "%21,41" },
  { kurum: "TERA", hacim: "1.444.363.490", oran: "%16,59" },
  { kurum: "PUSULA YAT.", hacim: "1.179.609.932", oran: "%13,55" },
  { kurum: "IS", hacim: "617.424.686", oran: "%7,09" },
  { kurum: "MIDAS", hacim: "552.826.377", oran: "%6,35" },
];

const enCokSatisYapanKurumlar = [
  { kurum: "HALK", hacim: "-2.013.977.599", oran: "%23,13" },
  { kurum: "GEDIK", hacim: "-1.128.826.035", oran: "%12,97" },
  { kurum: "ZIRAAT", hacim: "-990.662.780", oran: "%11,38" },
  { kurum: "BANK OF AMERICA", hacim: "-885.614.988", oran: "%10,17" },
  { kurum: "A1 CAPITAL", hacim: "-814.825.195", oran: "%9,36" },
];

const enCokHacimYapanKurumlar = [
  { kurum: "YAPI KREDI", hacim: "85.095.285.154", oran: "%13,96" },
  { kurum: "BANK OF AMERICA", hacim: "80.082.098.354", oran: "%13,14" },
  { kurum: "IS", hacim: "60.547.631.879", oran: "%9,93" },
  { kurum: "AK", hacim: "51.410.116.995", oran: "%8,43" },
  { kurum: "DENIZ", hacim: "23.253.756.368", oran: "%3,81" },
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
          <div className="text-right">Net Hacim</div>
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

function OnemKutulari({ tip }: { tip: "sari" | "kirmizi" | "turuncu" }) {
  const renkler =
    tip === "kirmizi"
      ? ["bg-red-500", "bg-red-500", "bg-red-500"]
      : tip === "turuncu"
        ? ["bg-orange-500", "bg-orange-500", "bg-zinc-300"]
        : ["bg-yellow-400", "bg-yellow-400", "bg-zinc-300"];

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
  onem: "sari" | "kirmizi" | "turuncu";
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
                src="/günlük-özet.png"
                alt="Günlük özet görseli"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>

        <div className="mb-6 grid gap-4 xl:grid-cols-[1fr_1fr_1.5fr]">
          <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
            <div className="flex min-h-[180px] flex-col justify-between">
              <div className="text-center">
                <div className="mb-3 text-sm font-semibold text-zinc-600">XU100</div>
                <div className="text-4xl font-bold text-zinc-900">{bistVeri.kapanis}</div>
              </div>

              <div className="border-t border-zinc-200 pt-4 text-center">
                <div className="mb-3 text-sm font-semibold text-zinc-600">Günlük Değişim</div>
                <div
                  className={`text-3xl font-bold ${
                    pozitif ? "text-green-700" : "text-red-700"
                  }`}
                >
                  %{bistVeri.degisimYuzde.toFixed(2)}
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
            <div className="flex min-h-[180px] flex-col items-center justify-center text-center">
              <div className="mb-4 text-sm font-semibold text-zinc-600">Tarih</div>
              <div className="text-4xl font-bold text-zinc-900">{bistVeri.tarih}</div>
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
                  onem="kirmizi"
                  aciklanan="-"
                  beklenti="-"
                  onceki="1.329.226"
                />
                <TakvimSatiri
                  saat="11:00"
                  ulke="TR"
                  gosterge="Merkezi Yönetim Gelirleri (aylık, mln tl)"
                  onem="kirmizi"
                  aciklanan="-"
                  beklenti="-"
                  onceki="1.353.593"
                />
                <TakvimSatiri
                  saat="11:00"
                  ulke="TR"
                  gosterge="Merkezi Yönetim Bütçe Dengesi (aylık, mln tl)"
                  onem="kirmizi"
                  aciklanan="-"
                  beklenti="-"
                  onceki="24.366"
                />
                <TakvimSatiri
                  saat="11:00"
                  ulke="TR"
                  gosterge="Merkezi Yönetim Bütçe Faiz Dışı Dengesi (aylık, milyon TL)"
                  onem="kirmizi"
                  aciklanan="-"
                  beklenti="-"
                  onceki="208.062"
                />

                <TakvimTarihSatiri tarih="16.04.2026" />
                <TakvimSatiri
                  saat="10:00"
                  ulke="TR"
                  gosterge="Trafiğe Kaydedilen Motorlu Taşıtlar (adet)"
                  onem="sari"
                  aciklanan="-"
                  beklenti="-"
                  onceki="121.791"
                />
                <TakvimSatiri
                  saat="10:00"
                  ulke="TR"
                  gosterge="Türkiye Konut Fiyat Endeksi (%) yıllık"
                  onem="turuncu"
                  aciklanan="-"
                  beklenti="-"
                  onceki="26.35%"
                />

                <TakvimTarihSatiri tarih="17.04.2026" />
                <TakvimSatiri
                  saat="10:00"
                  ulke="TR"
                  gosterge="Yeni Kurulan Şirket Sayısı (adet)"
                  onem="sari"
                  aciklanan="-"
                  beklenti="-"
                  onceki="9.432"
                />
                <TakvimSatiri
                  saat="10:00"
                  ulke="TR"
                  gosterge="Kapanan Şirket Sayısı (adet)"
                  onem="sari"
                  aciklanan="-"
                  beklenti="-"
                  onceki="1.621"
                />
                <TakvimSatiri
                  saat="10:00"
                  ulke="TR"
                  gosterge="Konut Satışları"
                  onem="turuncu"
                  aciklanan="-"
                  beklenti="-"
                  onceki="124.549"
                />
                <TakvimSatiri
                  saat="23:00"
                  ulke="TR"
                  gosterge="Türkiye'nin Uzun Vadeli Döviz Cinsi Kredi Notu (Standard & Poor's)"
                  onem="kirmizi"
                  aciklanan="-"
                  beklenti="-"
                  onceki="BB- durağan"
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