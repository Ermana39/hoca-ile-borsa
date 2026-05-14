import Image from "next/image";
import Link from "next/link";

const bistVeri = {
  tarih: "15.05.2026",
  kapanis: "14644.70",
  degisimYuzde: 0.32,
  gunlukHacim: "281,752,987,279",
};

const tumYukselenler = [
  { kod: "ANELE", fark: "+10,00%" },
  { kod: "BRLSM", fark: "+10,00%" },
  { kod: "SMRVA", fark: "+10,00%" },
  { kod: "MIATK", fark: "+10,00%" },
  { kod: "BIGEN", fark: "+9,99%" },
  { kod: "UCAYM", fark: "+9,99%" },
  { kod: "HATSN", fark: "+9,99%" },
  { kod: "TPKGYF1", fark: "+9,98%" },
  { kod: "NETCD", fark: "+9,97%" },
  { kod: "SARKY", fark: "+9,96%" },
  { kod: "PRKAB", fark: "+9,96%" },
  { kod: "ATATR", fark: "+9,95%" },
  { kod: "CEOEM", fark: "+9,95%" },
  { kod: "MCARD", fark: "+9,95%" },
];

const tumDusenler = [
  { kod: "ZERGY", fark: "-10,00%" },
  { kod: "DSTKF", fark: "-10,00%" },
  { kod: "EDATA", fark: "-9,99%" },
  { kod: "PEKGY", fark: "-9,98%" },
  { kod: "TATEN", fark: "-9,96%" },
  { kod: "GSDDE", fark: "-9,95%" },
  { kod: "HTPSBF2", fark: "-9,89%" },
  { kod: "HPARTF2", fark: "-9,89%" },
  { kod: "RALYH", fark: "-9,72%" },
  { kod: "RPTEKF2", fark: "-9,57%" },
  { kod: "ATPAYF2", fark: "-7,56%" },
  { kod: "SVGYO", fark: "-6,57%" },
  { kod: "HURGZ", fark: "-6,07%" },
  { kod: "MRGYO", fark: "-4,89%" },
];

const tumHacimliler = [
  { kod: "SASA", hacim: "15.652.843.361" },
  { kod: "THYAO", hacim: "10.403.355.054" },
  { kod: "ASTOR", hacim: "10.193.463.555" },
  { kod: "OZATD", hacim: "10.174.425.000" },
  { kod: "AKBNK", hacim: "9.418.612.978" },
  { kod: "ISCTR", hacim: "6.184.770.200" },
  { kod: "YKBNK", hacim: "5.914.279.281" },
  { kod: "EREGL", hacim: "5.414.036.165" },
  { kod: "TEHOL", hacim: "5.315.090.085" },
  { kod: "ASELS", hacim: "4.332.495.823" },
  { kod: "SISE", hacim: "4.066.667.901" },
  { kod: "HEKTS", hacim: "3.932.335.317" },
  { kod: "BIMAS", hacim: "3.392.065.072" },
  { kod: "TRALT", hacim: "3.354.702.860" },
];

const tumParaGirisi = [
  { kod: "HALKB", tutar: "+70.840.474" },
  { kod: "KRDMD", tutar: "+70.339.399" },
  { kod: "TEHOL", tutar: "+56.872.537" },
  { kod: "AKBNK", tutar: "+48.419.391" },
  { kod: "TERA", tutar: "+46.828.135" },
  { kod: "SAHOL", tutar: "+44.044.108" },
  { kod: "EMPAE", tutar: "+39.698.674" },
  { kod: "MIATK", tutar: "+37.195.453" },
];

const tumParaCikisi = [
  { kod: "SISE", tutar: "-206.697.106" },
  { kod: "EREGL", tutar: "-93.336.240" },
  { kod: "ASTOR", tutar: "-70.599.991" },
  { kod: "BIMAS", tutar: "-63.291.738" },
  { kod: "THYAO", tutar: "-60.103.168" },
  { kod: "YKBNK", tutar: "-54.024.104" },
  { kod: "ASELS", tutar: "-48.097.777" },
  { kod: "TCELL", tutar: "-46.290.996" },
];

const enCokAlisYapanKurumlar = [
  { kurum: "TERA", hacim: "1.176.334.333", oran: "%17,81" },
  { kurum: "UNLU", hacim: "844.626.627", oran: "%12,79" },
  { kurum: "DENIZ", hacim: "668.666.460", oran: "%10,12" },
  { kurum: "YAPI KREDI", hacim: "573.100.748", oran: "%8,68" },
  { kurum: "A1 CAPITAL", hacim: "547.722.708", oran: "%8,29" },
];

const enCokSatisYapanKurumlar = [
  { kurum: "IS", hacim: "-1.312.545.044", oran: "%19,87" },
  { kurum: "INFO", hacim: "-1.170.508.881", oran: "%17,72" },
  { kurum: "TEB", hacim: "-1.145.764.406", oran: "%17,35" },
  { kurum: "GARANTI BBV.", hacim: "-679.772.938", oran: "%10,29" },
  { kurum: "INVEST AZ", hacim: "-478.054.205", oran: "%7,24" },
];

const enCokHacimYapanKurumlar = [
  { kurum: "YAPI KREDI", hacim: "83.279.594.026", oran: "%14,78" },
  { kurum: "BANK OF AME", hacim: "64.875.358.756", oran: "%11,51" },
  { kurum: "IS", hacim: "54.917.722.602", oran: "%9,75" },
  { kurum: "AK", hacim: "44.312.117.850", oran: "%7,86" },
  { kurum: "MIDAS", hacim: "23.417.595.226", oran: "%4,16" },
];

const ekonomikTakvimVerileri = [
  {
    tarih: "14.05.2026",
    kayitlar: [
      {
        saat: "10:00",
        ulke: "TR",
        gosterge: "Konut Satışları",
        onem: "turuncu-gri" as const,
        aciklanan: "126.808",
        beklenti: "-",
        onceki: "113.367",
      },
    ],
  },
  {
    tarih: "15.05.2026",
    kayitlar: [
      {
        saat: "11:00",
        ulke: "TR",
        gosterge: "Merkezi Yönetim Bütçe Giderleri (aylık, mln tl)",
        onem: "kirmizi" as const,
        aciklanan: "-",
        beklenti: "-",
        onceki: "1.460.416",
      },
      {
        saat: "11:00",
        ulke: "TR",
        gosterge: "Merkezi Yönetim Bütçe Gelirleri (aylık, mln tl)",
        onem: "kirmizi" as const,
        aciklanan: "-",
        beklenti: "-",
        onceki: "1230.545",
      },
      {
        saat: "11:00",
        ulke: "TR",
        gosterge: "Merkezi Yönetim Bütçe Dengesi (aylık, mln tl)",
        onem: "kirmizi" as const,
        aciklanan: "-",
        beklenti: "-",
        onceki: "229.872",
      },
      {
        saat: "11:00",
        ulke: "TR",
        gosterge: "Merkezi Yönetim Bütçe Faiz Dışı Dengesi (aylık, milyon TL)",
        onem: "kirmizi" as const,
        aciklanan: "-",
        beklenti: "-",
        onceki: "6.087",
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

function TakvimMobilKart({
  tarih,
  kayitlar,
}: {
  tarih: string;
  kayitlar: {
    saat: string;
    ulke: string;
    gosterge: string;
    onem: "sari" | "sari-tek" | "turuncu" | "turuncu-gri" | "kirmizi";
    aciklanan: string;
    beklenti: string;
    onceki: string;
  }[];
}) {
  return (
    <div className="rounded-xl border border-zinc-200 bg-white overflow-hidden">
      <div className="border-b border-zinc-200 bg-zinc-100 px-4 py-3 text-center text-sm font-bold text-zinc-800">
        {tarih}
      </div>

      <div className="divide-y divide-zinc-100">
        {kayitlar.map((kayit) => (
          <div key={`${kayit.saat}-${kayit.gosterge}`} className="p-4">
            <div className="mb-3 flex items-center justify-between gap-3">
              <div className="text-sm font-bold text-zinc-900">{kayit.saat}</div>
              <div className="text-xs font-semibold text-zinc-600">{kayit.ulke}</div>
            </div>

            <div className="mb-3 text-sm font-semibold leading-6 text-zinc-900">
              {kayit.gosterge}
            </div>

            <div className="mb-3">
              <OnemKutulari tip={kayit.onem} />
            </div>

            <div className="grid grid-cols-3 gap-2 text-center">
              <div className="rounded-lg bg-zinc-50 p-2">
                <div className="text-[11px] font-semibold text-zinc-500">Açıklanan</div>
                <div className="mt-1 text-sm font-bold text-zinc-800">{kayit.aciklanan}</div>
              </div>
              <div className="rounded-lg bg-zinc-50 p-2">
                <div className="text-[11px] font-semibold text-zinc-500">Beklenti</div>
                <div className="mt-1 text-sm font-bold text-zinc-800">{kayit.beklenti}</div>
              </div>
              <div className="rounded-lg bg-zinc-50 p-2">
                <div className="text-[11px] font-semibold text-zinc-500">Önceki</div>
                <div className="mt-1 text-sm font-bold text-zinc-800">{kayit.onceki}</div>
              </div>
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

        <h1 className="mb-6 text-3xl font-bold text-zinc-900">Günlük Borsa Özeti</h1>

        <section className="mb-8">
          <ReklamAlani variant="yatay" />
        </section>

        <div className="mb-6 rounded-2xl border border-zinc-200 bg-zinc-50 p-4 sm:p-5">
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
            <div className="grid min-h-[420px] grid-rows-4 text-center">
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

              <div className="flex items-center justify-center border-b border-zinc-200 px-4">
                <div>
                  <div className="text-sm font-semibold text-zinc-500">Günlük Hacim</div>
                  <div className="mt-2 text-xl font-bold text-zinc-800 sm:text-2xl">
                    {bistVeri.gunlukHacim}
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center">
                <div className="text-2xl font-semibold text-zinc-700">{bistVeri.tarih}</div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4 sm:p-5">
            <div className="mb-4 text-center text-sm font-semibold text-zinc-600">
              Ekonomik Takvim
            </div>

            <div className="md:hidden space-y-4">
              {ekonomikTakvimVerileri.map((grup) => (
                <TakvimMobilKart key={grup.tarih} tarih={grup.tarih} kayitlar={grup.kayitlar} />
              ))}
            </div>

            <div className="hidden md:block overflow-x-auto rounded-xl border border-zinc-200 bg-white">
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