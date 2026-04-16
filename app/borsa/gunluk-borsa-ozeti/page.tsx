import Image from "next/image";
import Link from "next/link";

const bistVeri = {
  tarih: "17.04.2026",
  kapanis: "14201.05",
  degisimYuzde: -0.36,
};

const tumYukselenler = [
  { kod: "MERCN", fark: "+10,00%" },
  { kod: "GZNMI", fark: "+9,99%" },
  { kod: "SDTTR", fark: "+9,99%" },
  { kod: "CRFSA", fark: "+9,97%" },
  { kod: "SUNTK", fark: "+9,96%" },
  { kod: "EFOR", fark: "+9,95%" },
  { kod: "KONTR", fark: "+9,95%" },
  { kod: "PRZMA", fark: "+9,95%" },
  { kod: "IZFAS", fark: "+9,95%" },
  { kod: "GIPTA", fark: "+9,95%" },
];

const tumDusenler = [
  { kod: "ENSRI", fark: "-10,00%" },
  { kod: "DFGSF2", fark: "-10,00%" },
  { kod: "ARZUM", fark: "-9,80%" },
  { kod: "ATAPYF2", fark: "-9,66%" },
  { kod: "AGROT", fark: "-8,98%" },
  { kod: "DYOBY", fark: "-7,64%" },
  { kod: "HTPSBF2", fark: "-6,61%" },
  { kod: "SERNT", fark: "-6,03%" },
  { kod: "DAPGM", fark: "-4,89%" },
  { kod: "ARZSAF2", fark: "-4,58%" },
];

const tumHacimliler = [
  { kod: "ASTOR", hacim: "24.028.587.680" },
  { kod: "SASA", hacim: "20.724.706.253" },
  { kod: "THYAO", hacim: "13.587.321.550" },
  { kod: "TUPRS", hacim: "7.532.523.543" },
  { kod: "AKBNK", hacim: "6.650.656.283" },
  { kod: "ISCTR", hacim: "6.561.945.657" },
  { kod: "ASELS", hacim: "6.393.477.984" },
  { kod: "TEHOL", hacim: "4.891.196.612" },
  { kod: "YKBNK", hacim: "4.437.244.890" },
  { kod: "TRALT", hacim: "4.211.997.769" },
];

const tumParaGirisi = [
  { kod: "TUPRS", tutar: "+284.556.279" },
  { kod: "TEHOL", tutar: "+84.992.953" },
  { kod: "TERA", tutar: "+64.227.417" },
  { kod: "CWENE", tutar: "+63.703.502" },
  { kod: "KONTR", tutar: "+63.554.794" },
  { kod: "MGROS", tutar: "+34.342.665" },
];

const tumParaCikisi = [
  { kod: "ASTOR", tutar: "-501.112.699" },
  { kod: "ASELS", tutar: "-120.340.542" },
  { kod: "ISCTR", tutar: "-114.671.335" },
  { kod: "THYAO", tutar: "-106.778.778" },
  { kod: "GARAN", tutar: "-102.396.834" },
  { kod: "TRALT", tutar: "-86.078.887" },
  { kod: "AGROT", tutar: "-84.044.462" },
  { kod: "KCHOL", tutar: "-70.465.804" },
  { kod: "ECILC", tutar: "-57.190.431" },
];

const enCokAlisYapanKurumlar = [
  { kurum: "YAPI KREDI", hacim: "5.601.908.909", oran: "%39,63" },
  { kurum: "TEB", hacim: "1.029.149.204", oran: "%7,28" },
  { kurum: "DENIZ", hacim: "1.023.860.509", oran: "%7,24" },
  { kurum: "UNLU", hacim: "764.675.402", oran: "%5,41" },
  { kurum: "YATIRIM FINA", hacim: "721.930.219", oran: "%5,11" },
];

const enCokSatisYapanKurumlar = [
  { kurum: "HSBC", hacim: "-6.537.982.309", oran: "%46,26" },
  { kurum: "BANK OF AME", hacim: "-2.612.977.642", oran: "%18,49" },
  { kurum: "AK", hacim: "-994.056.715", oran: "%7,03" },
  { kurum: "IS", hacim: "-943.670.902", oran: "%6,68" },
  { kurum: "TACIRLER", hacim: "-635.481.688", oran: "%4,50" },
];

const enCokHacimYapanKurumlar = [
  { kurum: "YAPI KREDI", hacim: "80.004.546.158", oran: "%14,08" },
  { kurum: "BANK OF AME", hacim: "68.741.939.839", oran: "%12,10" },
  { kurum: "IS", hacim: "51.642.571.292", oran: "%9,09" },
  { kurum: "AK", hacim: "43.229.844.136", oran: "%7,61" },
  { kurum: "DENIZ", hacim: "23.946.329.111", oran: "%4,21" },
];

const ekonomikTakvimVerileri = [
  {
    tarih: "17.04.2026",
    kayitlar: [
      {
        saat: "10:00",
        ulke: "TR",
        gosterge: "Yeni Kurulan Şirket Sayısı (adet)",
        onem: "sari" as const,
        aciklanan: "-",
        beklenti: "-",
        onceki: "9.432",
      },
      {
        saat: "10:00",
        ulke: "TR",
        gosterge: "Kapanan Şirket Sayısı (adet)",
        onem: "sari" as const,
        aciklanan: "-",
        beklenti: "-",
        onceki: "1.621",
      },
      {
        saat: "10:00",
        ulke: "TR",
        gosterge: "Konut Satışları",
        onem: "turuncu" as const,
        aciklanan: "-",
        beklenti: "-",
        onceki: "124.549",
      },
      {
        saat: "23:00",
        ulke: "TR",
        gosterge: "Türkiye'nin Uzun Vadeli Döviz Cinsi Kredi Notu (Standard & Poor's)",
        onem: "kirmizi" as const,
        aciklanan: "-",
        beklenti: "-",
        onceki: "BB- durağan",
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

function OnemKutulari({ tip }: { tip: "sari" | "turuncu" | "kirmizi" }) {
  const renkler =
    tip === "sari"
      ? ["bg-yellow-400", "bg-yellow-400", "bg-zinc-300"]
      : tip === "turuncu"
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
  onem: "sari" | "turuncu" | "kirmizi";
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