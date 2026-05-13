import Image from "next/image";
import Link from "next/link";

const bistVeri = {
  tarih: "13.05.2026",
  kapanis: "14598.47",
  degisimYuzde: -1.23,
};

const tumYukselenler = [
  { kod: "KORDS", fark: "+10,00%" },
  { kod: "BRLSM", fark: "+10,00%" },
  { kod: "TPKGYF1", fark: "+10,00%" },
  { kod: "SMRTG", fark: "+9,99%" },
  { kod: "BIGEN", fark: "+9,98%" },
  { kod: "OZATD", fark: "+9,98%" },
  { kod: "PRKAB", fark: "+9,97%" },
  { kod: "EMPAE", fark: "+9,97%" },
  { kod: "SARKY", fark: "+9,96%" },
];

const tumDusenler = [
  { kod: "ZERGY", fark: "-10,00%" },
  { kod: "PASEU", fark: "-10,00%" },
  { kod: "SVGYO", fark: "-10,00%" },
  { kod: "RALYH", fark: "-10,00%" },
  { kod: "AHSGY", fark: "-10,00%" },
  { kod: "PEKGY", fark: "-9,99%" },
  { kod: "APYMDF2", fark: "-9,99%" },
  { kod: "DSTKF", fark: "-9,99%" },
  { kod: "ADEL", fark: "-9,97%" },
];

const tumHacimliler = [
  { kod: "SASA", hacim: "25.748.941.356" },
  { kod: "ASTOR", hacim: "16.239.393.437" },
  { kod: "RGYAS", hacim: "12.325.514.581" },
  { kod: "THYAO", hacim: "9.562.782.134" },
  { kod: "TEHOL", hacim: "8.490.566.376" },
  { kod: "AKBNK", hacim: "7.572.786.376" },
  { kod: "EREGL", hacim: "7.404.954.807" },
  { kod: "HEKTS", hacim: "6.739.418.996" },
  { kod: "BIMAS", hacim: "6.272.610.375" },
];

const tumParaGirisi = [
  { kod: "ASTOR", tutar: "+442.287.917" },
  { kod: "EREGL", tutar: "+283.017.452" },
  { kod: "TEHOL", tutar: "+256.738.504" },
  { kod: "BIMAS", tutar: "+221.380.803" },
  { kod: "TERA", tutar: "+135.784.350" },
  { kod: "OZATD", tutar: "+131.513.802" },
  { kod: "MGROS", tutar: "+118.564.881" },
  { kod: "TATEN", tutar: "+118.217.709" },
  { kod: "KTLEV", tutar: "+87.257.611" },
];

const tumParaCikisi = [
  { kod: "SASA", tutar: "-357.227.784" },
  { kod: "AKBNK", tutar: "-203.612.848" },
  { kod: "GENIL", tutar: "-118.075.110" },
  { kod: "KRDMD", tutar: "-114.076.109" },
  { kod: "RGYAS", tutar: "-88.846.273" },
  { kod: "HALKB", tutar: "-66.598.893" },
  { kod: "EKGYO", tutar: "-63.819.016" },
  { kod: "YKBNK", tutar: "-62.264.352" },
  { kod: "FROTO", tutar: "-59.782.915" },
];

const enCokAlisYapanKurumlar = [
  { kurum: "TERA", hacim: "2.487.742.046", oran: "%29,80" },
  { kurum: "GLOBAL", hacim: "959.401.016", oran: "%11,49" },
  { kurum: "PUSULA YAT.", hacim: "756.817.494", oran: "%9,07" },
  { kurum: "QNB YATIRIM", hacim: "687.130.252", oran: "%8,23" },
  { kurum: "GARANTI BBV", hacim: "609.673.251", oran: "%7,30" },
];

const enCokSatisYapanKurumlar = [
  { kurum: "BANK OF AME", hacim: "-5.326.042.088", oran: "%43,05" },
  { kurum: "AK", hacim: "-1.447.803.530", oran: "%11,70" },
  { kurum: "TACIRLER", hacim: "-1.399.424.120", oran: "%11,31" },
  { kurum: "ZIRAAT", hacim: "-1.178.947.222", oran: "%9,53" },
  { kurum: "HSBC", hacim: "-623.518.494", oran: "%5,04" },
];

const enCokHacimYapanKurumlar = [
  { kurum: "YAPI KREDI", hacim: "101.548.881.822", oran: "%14,21" },
  { kurum: "BANK OF AME", hacim: "84.049.911.904", oran: "%11,76" },
  { kurum: "IS", hacim: "64.915.318.975", oran: "%9,08" },
  { kurum: "AK", hacim: "56.522.534.176", oran: "%7,91" },
  { kurum: "TACIRLER", hacim: "37.696.923.937", oran: "%5,27" },
];

const ekonomikTakvimVerileri = [
  {
    tarih: "13.05.2026",
    kayitlar: [
      {
        saat: "02:30",
        ulke: "JP",
        gosterge: "Banka Kredileri (Yıllık)",
        onem: "turuncu-gri" as const,
        aciklanan: "-",
        beklenti: "-",
        onceki: "4,80%",
      },
      {
        saat: "02:50",
        ulke: "JP",
        gosterge: "Dış Ticaret Dengesi",
        onem: "kirmizi" as const,
        aciklanan: "-",
        beklenti: "-",
        onceki: "-317.085,00M",
      },
      {
        saat: "02:50",
        ulke: "JP",
        gosterge: "Ödemeler Dengesi",
        onem: "kirmizi" as const,
        aciklanan: "-",
        beklenti: "3.879,4B",
        onceki: "3.932,7B",
      },
      {
        saat: "08:00",
        ulke: "JP",
        gosterge: "Ekonomik Gözlemciler Endeksi",
        onem: "sari-tek" as const,
        aciklanan: "-",
        beklenti: "-",
        onceki: "42,2",
      },
      {
        saat: "08:30",
        ulke: "FR",
        gosterge: "ILO İşsizlik Oranı",
        onem: "turuncu-gri" as const,
        aciklanan: "-",
        beklenti: "7,80%",
        onceki: "7,90%",
      },
      {
        saat: "09:45",
        ulke: "FR",
        gosterge: "TÜFE (AB Norm) (Nihai) (Yıllık)",
        onem: "turuncu-gri" as const,
        aciklanan: "-",
        beklenti: "1,20%",
        onceki: "1,20%",
      },
      {
        saat: "09:45",
        ulke: "FR",
        gosterge: "TÜFE (AB Norm) (Nihai) (Aylık)",
        onem: "turuncu-gri" as const,
        aciklanan: "-",
        beklenti: "2,50%",
        onceki: "2,50%",
      },
      {
        saat: "09:45",
        ulke: "FR",
        gosterge: "TÜFE (Nihai) (Yıllık)",
        onem: "turuncu-gri" as const,
        aciklanan: "-",
        beklenti: "2,20%",
        onceki: "2,20%",
      },
      {
        saat: "09:45",
        ulke: "FR",
        gosterge: "TÜFE (Nihai) (Aylık)",
        onem: "turuncu-gri" as const,
        aciklanan: "-",
        beklenti: "1,00%",
        onceki: "1,00%",
      },
      {
        saat: "10:00",
        ulke: "TR",
        gosterge: "İhracat Birim Değer Endeksi (yıllık %)",
        onem: "turuncu-gri" as const,
        aciklanan: "12.3%",
        beklenti: "-",
        onceki: "12.7%",
      },
      {
        saat: "10:00",
        ulke: "TR",
        gosterge: "İthalat Birim Değer Endeksi (yıllık %)",
        onem: "turuncu-gri" as const,
        aciklanan: "6.3%",
        beklenti: "-",
        onceki: "5.0%",
      },
      {
        saat: "10:00",
        ulke: "TR",
        gosterge: "İhracat Miktar Endeksi (yıllık %)",
        onem: "turuncu-gri" as const,
        aciklanan: "-16.7%",
        beklenti: "-",
        onceki: "-10.1%",
      },
      {
        saat: "10:00",
        ulke: "TR",
        gosterge: "İthalat Miktar Endeksi (yıllık %)",
        onem: "turuncu-gri" as const,
        aciklanan: "1.8%",
        beklenti: "-",
        onceki: "-1.3%",
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