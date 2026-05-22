import Image from "next/image";
import Link from "next/link";

const bistVeri = {
  tarih: "22.05.2026",
  kapanis: "13808.20",
  degisimYuzde: 4.89,
  toplamHacim: "351.316.661.806",
};

const tumYukselenler = [
  { kod: "EKDMR", fark: "+10,00%" },
  { kod: "HPSOL2", fark: "+10,00%" },
  { kod: "DGATE", fark: "+10,00%" },
  { kod: "BAYRK", fark: "+10,00%" },
  { kod: "KAREL", fark: "+10,00%" },
  { kod: "MAALT", fark: "+10,00%" },
  { kod: "UCAYM", fark: "+10,00%" },
  { kod: "APYMTF2", fark: "+10,00%" },
  { kod: "KCAER", fark: "+9,99%" },
  { kod: "TEKTU", fark: "+9,99%" },
];

const tumDusenler = [
  { kod: "QPERPF1", fark: "-9,99%" },
  { kod: "ISKPL", fark: "-9,97%" },
  { kod: "DUNYH", fark: "-9,96%" },
  { kod: "NIBAS", fark: "-9,95%" },
  { kod: "RPSTPF2", fark: "-9,92%" },
  { kod: "DCTTR", fark: "-9,48%" },
  { kod: "HTPSBF2", fark: "-9,38%" },
  { kod: "LIDER", fark: "-8,51%" },
  { kod: "ALVES", fark: "-4,95%" },
  { kod: "OTTO", fark: "-3,38%" },
];

const tumHacimliler = [
  { kod: "AKBNK", hacim: "25.590.719.103" },
  { kod: "THYAO", hacim: "17.739.665.908" },
  { kod: "YKBNK", hacim: "14.697.159.165" },
  { kod: "SASA", hacim: "11.401.091.616" },
  { kod: "ASELS", hacim: "11.191.330.763" },
  { kod: "ASTOR", hacim: "10.536.132.911" },
  { kod: "ISCTR", hacim: "10.387.123.889" },
  { kod: "EREGL", hacim: "7.930.713.733" },
  { kod: "TUPRS", hacim: "7.474.495.945" },
  { kod: "GARAN", hacim: "7.284.057.401" },
];

const tumParaGirisi = [
  { kod: "ASTOR", tutar: "+198.519.416" },
  { kod: "TRALT", tutar: "+109.000.099" },
  { kod: "ISCTR", tutar: "+99.881.529" },
  { kod: "TERA", tutar: "+93.075.040" },
  { kod: "ASELS", tutar: "+83.119.637" },
  { kod: "CVKMD", tutar: "+64.617.299" },
  { kod: "KCHOL", tutar: "+62.467.531" },
  { kod: "DOFRB", tutar: "+49.463.896" },
];

const tumParaCikisi = [
  { kod: "AKBNK", tutar: "-302.964.584" },
  { kod: "GARAN", tutar: "-235.200.610" },
  { kod: "YKBNK", tutar: "-134.601.417" },
  { kod: "TUPRS", tutar: "-119.237.866" },
  { kod: "PEKGY", tutar: "-96.226.411" },
  { kod: "TCELL", tutar: "-83.237.997" },
  { kod: "KONTR", tutar: "-66.713.367" },
  { kod: "IZENR", tutar: "-50.931.501" },
  { kod: "VAKBN", tutar: "-49.001.925" },
];

const enCokAlisYapanKurumlar = [
  { kurum: "BANK OF AMERICA", hacim: "6.363.339.742", oran: "%52,68" },
  { kurum: "TERA", hacim: "1.100.873.395", oran: "%9,11" },
  { kurum: "DESTEK", hacim: "792.517.623", oran: "%6,56" },
  { kurum: "VAKIF", hacim: "615.310.993", oran: "%5,09" },
  { kurum: "YAPI KREDI", hacim: "569.402.161", oran: "%4,71" },
];

const enCokSatisYapanKurumlar = [
  { kurum: "AK", hacim: "-2.011.612.239", oran: "%16,65" },
  { kurum: "DENIZ", hacim: "-1.994.067.118", oran: "%16,51" },
  { kurum: "INFO", hacim: "-1.351.982.383", oran: "%11,19" },
  { kurum: "QNB YATIRIM", hacim: "-960.593.952", oran: "%7,95" },
  { kurum: "TEB", hacim: "-787.670.280", oran: "%6,52" },
];

const enCokHacimYapanKurumlar = [
  { kurum: "BANK OF AMERICA", hacim: "109.059.177.917", oran: "%15,52" },
  { kurum: "YAPI KREDI", hacim: "102.006.352.982", oran: "%14,52" },
  { kurum: "IS", hacim: "77.598.063.924", oran: "%11,04" },
  { kurum: "AK", hacim: "61.595.860.144", oran: "%8,77" },
  { kurum: "MIDAS", hacim: "27.739.718.917", oran: "%3,95" },
];

function ilkBesKisaKodlu<T extends { kod: string }>(liste: T[]) {
  return liste.filter((item) => item.kod.length <= 5).slice(0, 5);
}

const enCokYukselenler = ilkBesKisaKodlu(tumYukselenler);
const enCokDusenler = ilkBesKisaKodlu(tumDusenler);
const enHacimliler = ilkBesKisaKodlu(tumHacimliler);
const paraGirisi = ilkBesKisaKodlu(tumParaGirisi);
const paraCikisi = ilkBesKisaKodlu(tumParaCikisi);

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
      <h2 className="mb-4 text-center text-xl font-bold text-zinc-900">
        {baslik}
      </h2>

      <div className="overflow-hidden rounded-xl border border-zinc-200 bg-white">
        <div className="grid grid-cols-3 border-b border-zinc-200 bg-zinc-100 px-4 py-3 text-sm font-bold text-zinc-700">
          <div>Kurum</div>
          <div className="text-right">
            {baslik === "En Çok Hacim Yapanlar"
              ? "Toplam Hacim"
              : "Net Hacim"}
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
            <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white">
              <div className="relative aspect-[16/9] w-full">
                <Image
                  src="/ekonomik-takvim.jpg"
                  alt="Ekonomik takvim"
                  fill
                  className="object-contain"
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
      </div>
    </main>
  );
}