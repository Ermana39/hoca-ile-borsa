import Image from "next/image";
import Link from "next/link";

const bugunTarihi = new Intl.DateTimeFormat("tr-TR", {
  timeZone: "Europe/Istanbul",
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
}).format(new Date());

const bistVeri = {
  tarih: bugunTarihi,
  kapanis: "14073.79",
  degisimYuzde: 2.81,
};

const enCokYukselenler = [
  { kod: "KONTR", fark: "+10,00%" },
  { kod: "AAGYO", fark: "+10,00%" },
  { kod: "DMRGD", fark: "+10,00%" },
  { kod: "ATATR", fark: "+10,00%" },
  { kod: "ALKLC", fark: "+9,99%" },
];

const enCokDusenler = [
  { kod: "BLCYT", fark: "-9,97%" },
  { kod: "RUBNS", fark: "-9,96%" },
  { kod: "ZERGY", fark: "-9,95%" },
  { kod: "EFOR", fark: "-9,95%" },
  { kod: "MEKAG", fark: "-8,69%" },
];

const enHacimliler = [
  { kod: "ASELS", hacim: "13,318 Mr TL" },
  { kod: "THYAO", hacim: "12,800 Mr TL" },
  { kod: "SASA", hacim: "11,692 Mr TL" },
  { kod: "ISCTR", hacim: "9,910 Mr TL" },
  { kod: "AKBNK", hacim: "9,414 Mr TL" },
];

const paraGirisi = [
  { kod: "EREGL", tutar: "+345 Mn TL" },
  { kod: "ASELS", tutar: "+271 Mn TL" },
  { kod: "SASA", tutar: "+255 Mn TL" },
  { kod: "AKBNK", tutar: "+197 Mn TL" },
  { kod: "TERA", tutar: "+142 Mn TL" },
];

const paraCikisi = [
  { kod: "KRDMD", tutar: "-123 Mn TL" },
  { kod: "TEHOL", tutar: "-64 Mn TL" },
  { kod: "TKFEN", tutar: "-48 Mn TL" },
  { kod: "ASTOR", tutar: "-42 Mn TL" },
  { kod: "EFOR", tutar: "-42 Mn TL" },
];

const enCokAlisYapanKurumlar = [
  { kurum: "BANK OF AMERICA", hacim: "5,372,995,622", oran: "%44,41" },
  { kurum: "GLOBAL", hacim: "1,239,983,739", oran: "%10,25" },
  { kurum: "HSBC", hacim: "1,208,765,215", oran: "%9,99" },
  { kurum: "TERA", hacim: "1,193,255,235", oran: "%9,86" },
  { kurum: "AK", hacim: "917,291,190", oran: "%7,58" },
];

const enCokSatisYapanKurumlar = [
  { kurum: "GARANTI BBVA", hacim: "-1,731,110,388", oran: "%14,31" },
  { kurum: "IS", hacim: "-1,578,262,320", oran: "%13,05" },
  { kurum: "INFO", hacim: "-1,481,676,894", oran: "%12,25" },
  { kurum: "TEB", hacim: "-1,155,547,470", oran: "%9,55" },
  { kurum: "ZIRAAT", hacim: "-781,025,475", oran: "%6,46" },
];

const enCokHacimYapanKurumlar = [
  { kurum: "YAPI KREDI", hacim: "76,463,571,458", oran: "%13,60" },
  { kurum: "BANK OF AMERICA", hacim: "74,042,732,118", oran: "%13,17" },
  { kurum: "IS", hacim: "53,541,655,437", oran: "%9,52" },
  { kurum: "AK", hacim: "45,606,416,277", oran: "%8,11" },
  { kurum: "DENIZ", hacim: "23,327,070,339", oran: "%4,15" },
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

function OnemKutulari({ tip }: { tip: "sari" | "kirmizi" }) {
  const renkler =
    tip === "kirmizi"
      ? ["bg-red-500", "bg-red-500", "bg-red-500"]
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

                <div className="grid grid-cols-[70px_55px_minmax(220px,1fr)_70px_95px_95px_95px] items-center border-b border-zinc-100 px-3 py-3 text-sm">
                  <div className="font-semibold text-zinc-900">10:00</div>
                  <div className="font-semibold text-zinc-900">TR</div>
                  <div className="font-semibold text-zinc-900">Toplam Ciro Endeksi (Yıllık %)</div>
                  <div>
                    <OnemKutulari tip="sari" />
                  </div>
                  <div className="text-center font-semibold text-zinc-700">-</div>
                  <div className="text-center font-semibold text-zinc-700">-</div>
                  <div className="text-center font-semibold text-zinc-700">35,8%</div>
                </div>

                <div className="grid grid-cols-[70px_55px_minmax(220px,1fr)_70px_95px_95px_95px] items-center px-3 py-3 text-sm">
                  <div className="font-semibold text-zinc-900">10:00</div>
                  <div className="font-semibold text-zinc-900">TR</div>
                  <div className="font-semibold text-zinc-900">Cari İşlemler Dengesi (Milyon USD)</div>
                  <div>
                    <OnemKutulari tip="kirmizi" />
                  </div>
                  <div className="text-center font-semibold text-zinc-700">-</div>
                  <div className="text-center font-semibold text-zinc-700">-7.350</div>
                  <div className="text-center font-semibold text-zinc-700">-6.807</div>
                </div>
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