import Image from "next/image";
import Link from "next/link";

const bistVeri = {
  tarih: "13.05.2026",
  kapanis: "14779.93",
  degisimYuzde: -2.34,
};

const tumYukselenler = [
  { kod: "ZERGY", fark: "+10,00%" },
  { kod: "ATATP", fark: "+10,00%" },
  { kod: "ACSEL", fark: "+10,00%" },
  { kod: "PEKGY", fark: "+9,99%" },
  { kod: "OZATD", fark: "+9,99%" },
  { kod: "AKENR", fark: "+9,99%" },
  { kod: "HURGZ", fark: "+9,99%" },
  { kod: "DUNYH", fark: "+9,98%" },
  { kod: "BAKAB", fark: "+9,97%" },
];

const tumDusenler = [
  { kod: "KRONT", fark: "-10,00%" },
  { kod: "HTPSBF2", fark: "-10,00%" },
  { kod: "EDATA", fark: "-10,00%" },
  { kod: "EGGUB", fark: "-9,99%" },
  { kod: "APYMDF2", fark: "-9,98%" },
  { kod: "ADEL", fark: "-9,98%" },
  { kod: "DOFRB", fark: "-9,97%" },
  { kod: "HPARTF2", fark: "-9,95%" },
  { kod: "HDFGS", fark: "-9,91%" },
];

const tumHacimliler = [
  { kod: "SASA", hacim: "37.035.879.926" },
  { kod: "ASTOR", hacim: "10.366.898.127" },
  { kod: "EREGL", hacim: "9.372.581.518" },
  { kod: "AKBNK", hacim: "9.142.561.344" },
  { kod: "PEKGY", hacim: "8.826.378.886" },
  { kod: "THYAO", hacim: "7.953.757.510" },
  { kod: "TUPRS", hacim: "6.828.846.448" },
  { kod: "KRDMD", hacim: "6.640.659.647" },
  { kod: "HEKTS", hacim: "5.956.502.424" },
];

const tumParaGirisi = [
  { kod: "PEKGY", tutar: "+733.729.043" },
  { kod: "YEOTK", tutar: "+168.632.602" },
  { kod: "PASEU", tutar: "+131.356.161" },
  { kod: "EREGL", tutar: "+83.307.766" },
  { kod: "TRALT", tutar: "+83.069.876" },
  { kod: "THYAO", tutar: "+76.468.024" },
  { kod: "KTLEV", tutar: "+73.979.278" },
  { kod: "HEKTS", tutar: "+68.445.728" },
  { kod: "GLRMK", tutar: "+40.405.830" },
];

const tumParaCikisi = [
  { kod: "BRSAN", tutar: "-281.650.124" },
  { kod: "AKBNK", tutar: "-242.079.374" },
  { kod: "ASELS", tutar: "-238.268.777" },
  { kod: "YKBNK", tutar: "-208.673.112" },
  { kod: "SASA", tutar: "-154.463.171" },
  { kod: "TUPRS", tutar: "-154.012.267" },
  { kod: "TCELL", tutar: "-146.484.096" },
  { kod: "ISCTR", tutar: "-146.106.278" },
];

const enCokAlisYapanKurumlar = [
  { kurum: "TERA", hacim: "4.612.280.405", oran: "%37,28" },
  { kurum: "DENIZ", hacim: "1.851.174.587", oran: "%14,96" },
  { kurum: "MIDAS", hacim: "670.341.223", oran: "%5,42" },
  { kurum: "GARANTI BBV.", hacim: "663.757.588", oran: "%5,36" },
  { kurum: "OYAK", hacim: "594.611.529", oran: "%4,81" },
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
    tarih: "12.05.2026",
    kayitlar: [
      {
        saat: "10:00",
        ulke: "TR",
        gosterge: "İnşaat Maliyet Endeksi (Yıllık)",
        onem: "sari-tek" as const,
        aciklanan: "27.24%",
        beklenti: "-",
        onceki: "25.72%",
      },
    ],
  },
  {
    tarih: "13.05.2026",
    kayitlar: [
      {
        saat: "10:00",
        ulke: "TR",
        gosterge: "İhracat Birim Değer Endeksi (yıllık %)",
        onem: "turuncu-gri" as const,
        aciklanan: "-",
        beklenti: "-",
        onceki: "12.7%",
      },
      {
        saat: "10:00",
        ulke: "TR",
        gosterge: "İthalat Birim Değer Endeksi (yıllık %)",
        onem: "turuncu-gri" as const,
        aciklanan: "-",
        beklenti: "-",
        onceki: "5.0%",
      },
      {
        saat: "10:00",
        ulke: "TR",
        gosterge: "İhracat Miktar Endeksi (yıllık %)",
        onem: "turuncu-gri" as const,
        aciklanan: "-",
        beklenti: "-",
        onceki: "-10.1%",
      },
      {
        saat: "10:00",
        ulke: "TR",
        gosterge: "İthalat Miktar Endeksi (yıllık %)",
        onem: "turuncu-gri" as const,
        aciklanan: "-",
        beklenti: "-",
        onceki: "-1.3%",
      },
      {
        saat: "10:00",
        ulke: "TR",
        gosterge: "Cari İşlemler Dengesi (Milyon USD)",
        onem: "kirmizi" as const,
        aciklanan: "-",
        beklenti: "-9.715",
        onceki: "-7.501",
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