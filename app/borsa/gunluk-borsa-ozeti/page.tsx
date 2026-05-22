import Image from "next/image";
import Link from "next/link";

const bistVeri = {
  tarih: "22.05.2026",
  kapanis: "13808.20",
  degisimYuzde: 4.89,
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

const ekonomikTakvimVerileri = [
  {
    tarih: "22.05.2026",
    kayitlar: [
      {
        saat: "10:00",
        ulke: "TR",
        gosterge: "İmalat Sanayi Kapasite Kullanım Oranı (MEA)",
        onem: "kirmizi" as const,
        aciklanan: "74.2%",
        beklenti: "-",
        onceki: "74.0%",
      },
      {
        saat: "10:00",
        ulke: "TR",
        gosterge: "Saatlik İşgücü Maliyet Endeksi (Yıllık)",
        onem: "sari-tek" as const,
        aciklanan: "41.4%",
        beklenti: "-",
        onceki: "34.2%",
      },
      {
        saat: "10:00",
        ulke: "TR",
        gosterge: "Saatlik Kazanç Endeksi (Yıllık, %)",
        onem: "sari-tek" as const,
        aciklanan: "39.4%",
        beklenti: "-",
        onceki: "35.0%",
      },
      {
        saat: "10:00",
        ulke: "TR",
        gosterge: "Toplam İhracat (milyon usd/aylık)",
        onem: "kirmizi" as const,
        aciklanan: "25.408",
        beklenti: "25.403",
        onceki: "21.899",
      },
      {
        saat: "10:00",
        ulke: "TR",
        gosterge: "Toplam İthalat (milyon usd /aylık)",
        onem: "kirmizi" as const,
        aciklanan: "33.900",
        beklenti: "33.909",
        onceki: "33.120",
      },
      {
        saat: "10:00",
        ulke: "TR",
        gosterge: "Dış Ticaret Dengesi (milyon $/aylık)",
        onem: "kirmizi" as const,
        aciklanan: "-8.500",
        beklenti: "-8.506",
        onceki: "-11.221",
      },
      {
        saat: "10:00",
        ulke: "TR",
        gosterge: "İhracatın İthalatı Karşılama Oranı % (aylık)",
        onem: "kirmizi" as const,
        aciklanan: "74.9%",
        beklenti: "74.4%",
        onceki: "66.1%",
      },
      {
        saat: "10:00",
        ulke: "TR",
        gosterge: "Uluslararası Yatırım Pozisyonu (milyar usd)",
        onem: "turuncu-gri" as const,
        aciklanan: "360.8",
        beklenti: "-",
        onceki: "347.6",
      },
      {
        saat: "10:00",
        ulke: "TR",
        gosterge: "Türkiye'nin Uluslararası Yükümlülükleri (milyar usd)",
        onem: "turuncu-gri" as const,
        aciklanan: "755.8",
        beklenti: "-",
        onceki: "786.8",
      },
      {
        saat: "10:00",
        ulke: "TR",
        gosterge: "TCMB Reel Kesim Güven Endeksi",
        onem: "turuncu-gri" as const,
        aciklanan: "101.1",
        beklenti: "-",
        onceki: "98.6",
      },
      {
        saat: "10:00",
        ulke: "TR",
        gosterge: "Yeni Kurulan Şirket Sayısı (adet)",
        onem: "sari" as const,
        aciklanan: "10.853",
        beklenti: "-",
        onceki: "8.379",
      },
      {
        saat: "10:00",
        ulke: "TR",
        gosterge: "Kapanan Şirket Sayısı (adet)",
        onem: "sari" as const,
        aciklanan: "3.085",
        beklenti: "-",
        onceki: "1.809",
      },
      {
        saat: "10:00",
        ulke: "TR",
        gosterge: "Yapı Ruhsatı Verilen Bina Sayısı (yıllık)",
        onem: "turuncu-gri" as const,
        aciklanan: "34.579",
        beklenti: "-",
        onceki: "50.998",
      },
      {
        saat: "10:00",
        ulke: "TR",
        gosterge: "Toplam İstihdam Endeksi (Yıllık)",
        onem: "sari" as const,
        aciklanan: "1.2%",
        beklenti: "-",
        onceki: "1.1%",
      },
      {
        saat: "10:00",
        ulke: "TR",
        gosterge: "Kapasite Kullanım Oranı",
        onem: "sari-tek" as const,
        aciklanan: "74.2%",
        beklenti: "-",
        onceki: "73.8%",
      },
      {
        saat: "11:00",
        ulke: "TR",
        gosterge: "Yabancı Ziyaretçiler (bin kişi)",
        onem: "turuncu-gri" as const,
        aciklanan: "3.533",
        beklenti: "-",
        onceki: "2.464",
      },
    ],
  },
  {
    tarih: "25.05.2026",
    kayitlar: [
      {
        saat: "10:00",
        ulke: "TR",
        gosterge: "TÜİK Ekonomik Güven Endeksi",
        onem: "turuncu-gri" as const,
        aciklanan: "-",
        beklenti: "-",
        onceki: "96.4",
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