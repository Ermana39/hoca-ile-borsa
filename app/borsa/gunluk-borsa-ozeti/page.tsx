import Link from "next/link";

const bistVeri = {
  tarih: "08.04.2026",
  kapanis: "10.245,18",
  degisimYuzde: -1.24,
  pivot: "29.293",
  pivotFark: "-1,55",
  destek1: "28.387",
  destek2: "27.933",
  destek3: "27.027",
  direnc1: "29.747",
  direnc2: "30.653",
  direnc3: "31.107",
};

const enCokYukselenler = [
  { kod: "ASELS", fark: "+9,98%" },
  { kod: "ALARK", fark: "+8,45%" },
  { kod: "KONTR", fark: "+7,92%" },
  { kod: "CWENE", fark: "+6,88%" },
  { kod: "ODAS", fark: "+5,64%" },
];

const enCokDusenler = [
  { kod: "HEKTS", fark: "-9,91%" },
  { kod: "SASA", fark: "-8,73%" },
  { kod: "SMRTG", fark: "-7,42%" },
  { kod: "MIATK", fark: "-6,95%" },
  { kod: "IZENR", fark: "-5,88%" },
];

const enHacimliler = [
  { kod: "THYAO", hacim: "8,42 Mr TL" },
  { kod: "EREGL", hacim: "7,15 Mr TL" },
  { kod: "ISCTR", hacim: "6,84 Mr TL" },
  { kod: "YKBNK", hacim: "6,12 Mr TL" },
  { kod: "AKBNK", hacim: "5,96 Mr TL" },
];

const paraGirisi = [
  { kod: "THYAO", tutar: "+425 Mn TL" },
  { kod: "ASELS", tutar: "+318 Mn TL" },
  { kod: "EREGL", tutar: "+276 Mn TL" },
  { kod: "TUPRS", tutar: "+241 Mn TL" },
  { kod: "BIMAS", tutar: "+198 Mn TL" },
];

const paraCikisi = [
  { kod: "SASA", tutar: "-352 Mn TL" },
  { kod: "HEKTS", tutar: "-301 Mn TL" },
  { kod: "KONTR", tutar: "-244 Mn TL" },
  { kod: "MIATK", tutar: "-219 Mn TL" },
  { kod: "SMRTG", tutar: "-184 Mn TL" },
];

const enCokAlisYapanKurumlar = [
  { kurum: "İş Yatırım", hacim: "1,24 Mr TL", oran: "%12,8" },
  { kurum: "Bank of America", hacim: "1,10 Mr TL", oran: "%11,4" },
  { kurum: "Yapı Kredi", hacim: "986 Mn TL", oran: "%10,2" },
  { kurum: "Garanti BBVA", hacim: "842 Mn TL", oran: "%8,7" },
  { kurum: "Ak Yatırım", hacim: "765 Mn TL", oran: "%7,9" },
];

const enCokSatisYapanKurumlar = [
  { kurum: "Ziraat Yatırım", hacim: "1,18 Mr TL", oran: "%12,1" },
  { kurum: "QNB Invest", hacim: "1,03 Mr TL", oran: "%10,6" },
  { kurum: "A1 Capital", hacim: "912 Mn TL", oran: "%9,4" },
  { kurum: "Oyak Yatırım", hacim: "854 Mn TL", oran: "%8,8" },
  { kurum: "Gedik Yatırım", hacim: "798 Mn TL", oran: "%8,2" },
];

const enCokHacimYapanKurumlar = [
  { kurum: "İş Yatırım", hacim: "2,31 Mr TL", oran: "%11,9" },
  { kurum: "Bank of America", hacim: "2,08 Mr TL", oran: "%10,7" },
  { kurum: "Yapı Kredi", hacim: "1,94 Mr TL", oran: "%10,0" },
  { kurum: "Garanti BBVA", hacim: "1,76 Mr TL", oran: "%9,1" },
  { kurum: "Ak Yatırım", hacim: "1,54 Mr TL", oran: "%8,0" },
];

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
          <div className="text-right">Hacim</div>
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

export default function GunlukBorsaOzetiPage() {
  const pozitif = bistVeri.degisimYuzde >= 0;
  const pivotPozitif = !String(bistVeri.pivotFark).includes("-");

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

        <div className="mb-6 rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
          <div className="mb-4 text-xl font-bold text-zinc-900">Grafik Alanı</div>
          <div className="flex min-h-[320px] items-center justify-center rounded-2xl border border-dashed border-zinc-300 bg-white text-lg font-semibold text-zinc-500">
            Buraya grafik görseli eklenecek
          </div>
        </div>

        <div className="mb-6 grid gap-4 xl:grid-cols-[1fr_1fr_2fr]">
          <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
            <div className="flex min-h-[180px] flex-col justify-between">
              <div className="text-center">
                <div className="mb-3 text-sm font-semibold text-zinc-600">BIST100 Kapanış</div>
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
            <div className="mb-3 text-center text-sm font-semibold text-zinc-600">
              Pivot / Destek / Direnç Alanı
            </div>

            <div className="overflow-hidden rounded-xl border border-zinc-200 bg-white">
              <div className="grid grid-cols-4 border-b border-zinc-200 bg-zinc-100 px-3 py-3 text-center text-xs font-bold text-zinc-700">
                <div>Pivot</div>
                <div>Destek 1</div>
                <div>Destek 2</div>
                <div>Destek 3</div>
              </div>

              <div className="grid grid-cols-4 border-b border-zinc-100 px-3 py-3 text-center text-base">
                <div className="font-semibold text-zinc-900">{bistVeri.pivot}</div>
                <div className="font-semibold text-zinc-900">{bistVeri.destek1}</div>
                <div className="font-semibold text-zinc-900">{bistVeri.destek2}</div>
                <div className="font-semibold text-zinc-900">{bistVeri.destek3}</div>
              </div>

              <div className="grid grid-cols-4 border-b border-zinc-200 bg-zinc-100 px-3 py-3 text-center text-xs font-bold text-zinc-700">
                <div>Pivot Fark %</div>
                <div>Direnç 1</div>
                <div>Direnç 2</div>
                <div>Direnç 3</div>
              </div>

              <div className="grid grid-cols-4 px-3 py-3 text-center text-base">
                <div
                  className={`font-semibold ${
                    pivotPozitif ? "text-green-700" : "text-red-700"
                  }`}
                >
                  {bistVeri.pivotFark}
                </div>
                <div className="font-semibold text-zinc-900">{bistVeri.direnc1}</div>
                <div className="font-semibold text-zinc-900">{bistVeri.direnc2}</div>
                <div className="font-semibold text-zinc-900">{bistVeri.direnc3}</div>
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
      </div>
    </main>
  );
}