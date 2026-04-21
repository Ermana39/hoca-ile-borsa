import Image from "next/image";
import Link from "next/link";

const bistVeri = {
  tarih: "22.04.2026",
  kapanis: "14375.40",
  degisimYuzde: -0.76,
};

const tumYukselenler = [
  { kod: "BIGEN", fark: "+10,00%" },
  { kod: "TPKGYF1", fark: "+10,00%" },
  { kod: "PKART", fark: "+9,98%" },
  { kod: "PRZMA", fark: "+9,98%" },
  { kod: "ANELE", fark: "+9,98%" },
  { kod: "ESEN", fark: "+9,98%" },
  { kod: "GMTAS", fark: "+9,98%" },
  { kod: "BINBN", fark: "+9,97%" },
  { kod: "BORLS", fark: "+9,97%" },
  { kod: "HATSN", fark: "+9,97%" },
  { kod: "PENGD", fark: "+9,97%" },
  { kod: "ETILR", fark: "+9,84%" },
  { kod: "ARENA", fark: "+9,29%" },
  { kod: "EGPRO", fark: "+9,07%" },
  { kod: "EFOR", fark: "+8,72%" },
  { kod: "HOROZ", fark: "+8,57%" },
  { kod: "APYVCF2", fark: "+8,19%" },
  { kod: "ISKPL", fark: "+8,15%" },
  { kod: "GEREL", fark: "+8,05%" },
];

const tumDusenler = [
  { kod: "FTPGSF2", fark: "-10,00%" },
  { kod: "UCAYM", fark: "-9,99%" },
  { kod: "GLRMK", fark: "-9,98%" },
  { kod: "ENSRI", fark: "-9,98%" },
  { kod: "EDATA", fark: "-9,98%" },
  { kod: "KONTR", fark: "-9,98%" },
  { kod: "SMRVA", fark: "-9,97%" },
  { kod: "TERA", fark: "-9,96%" },
  { kod: "SVGYO", fark: "-9,96%" },
  { kod: "CRFSA", fark: "-9,95%" },
  { kod: "NATEN", fark: "-9,90%" },
  { kod: "EMKEL", fark: "-9,37%" },
  { kod: "ZGYO", fark: "-6,62%" },
  { kod: "HEKTS", fark: "-6,61%" },
  { kod: "HPARTF2", fark: "-6,55%" },
  { kod: "KAPLM", fark: "-6,42%" },
  { kod: "MSGYO", fark: "-6,04%" },
  { kod: "SUNTK", fark: "-5,86%" },
  { kod: "IZFAS", fark: "-5,66%" },
];

const tumHacimliler = [
  { kod: "SASA", hacim: "15.449.636.526" },
  { kod: "THYAO", hacim: "13.554.273.760" },
  { kod: "ASTOR", hacim: "11.085.840.592" },
  { kod: "TRALT", hacim: "9.188.705.542" },
  { kod: "ISCTR", hacim: "8.542.913.274" },
  { kod: "TUPRS", hacim: "7.364.458.053" },
  { kod: "GLRMK", hacim: "7.066.757.513" },
  { kod: "KONTR", hacim: "6.951.153.371" },
  { kod: "EREGL", hacim: "5.904.450.753" },
  { kod: "ASELS", hacim: "5.355.610.291" },
  { kod: "YKBNK", hacim: "5.354.468.635" },
  { kod: "AKBNK", hacim: "5.294.613.532" },
  { kod: "EFOR", hacim: "5.234.770.901" },
  { kod: "TEHOL", hacim: "4.750.026.265" },
  { kod: "KTLEV", hacim: "4.479.562.577" },
  { kod: "PEKGY", hacim: "3.451.584.102" },
  { kod: "PETKM", hacim: "3.396.568.280" },
  { kod: "PGSUS", hacim: "3.258.740.318" },
  { kod: "DOFRB", hacim: "3.170.300.478" },
];

const tumParaGirisi = [
  { kod: "ASTOR", tutar: "+445.202.178" },
  { kod: "THYAO", tutar: "+134.096.175" },
  { kod: "YKBNK", tutar: "+110.182.195" },
  { kod: "PEKGY", tutar: "+84.198.375" },
  { kod: "EREGL", tutar: "+80.095.243" },
];

const tumParaCikisi = [
  { kod: "KONTR", tutar: "-218.324.358" },
  { kod: "GLRMK", tutar: "-201.020.644" },
  { kod: "ASELS", tutar: "-157.265.588" },
  { kod: "NATEN", tutar: "-89.215.970" },
  { kod: "SAHOL", tutar: "-83.439.150" },
];

const enCokAlisYapanKurumlar = [
  { kurum: "TERA", hacim: "1.175.471.472", oran: "%16,58" },
  { kurum: "IS", hacim: "1.045.570.074", oran: "%14,75" },
  { kurum: "OYAK", hacim: "679.692.072", oran: "%9,59" },
  { kurum: "GARANTI BBV.", hacim: "667.105.711", oran: "%9,41" },
  { kurum: "QNB YATIRIM", hacim: "551.278.222", oran: "%7,78" },
];

const enCokSatisYapanKurumlar = [
  { kurum: "BANK OF AME", hacim: "-1.685.981.855", oran: "%23,79" },
  { kurum: "INFO", hacim: "-1.083.065.615", oran: "%15,28" },
  { kurum: "A1 CAPITAL", hacim: "-901.926.431", oran: "%12,73" },
  { kurum: "YAPI KREDI", hacim: "-671.845.417", oran: "%9,48" },
  { kurum: "YATIRIM FINAI", hacim: "-456.686.397", oran: "%6,44" },
];

const enCokHacimYapanKurumlar = [
  { kurum: "YAPI KREDI", hacim: "84.104.285.434", oran: "%14,62" },
  { kurum: "BANK OF AME", hacim: "60.358.556.744", oran: "%10,49" },
  { kurum: "IS", hacim: "57.607.582.668", oran: "%10,01" },
  { kurum: "AK", hacim: "45.329.979.221", oran: "%7,88" },
  { kurum: "DENIZ", hacim: "25.338.795.620", oran: "%4,40" },
];

const ekonomikTakvimVerileri = [
  {
    tarih: "22.04.2026",
    kayitlar: [
      {
        saat: "10:00",
        ulke: "TR",
        gosterge: "TÜİK-TCMB Tüketici Güven Endeksi",
        onem: "kirmizi" as const,
        aciklanan: "-",
        beklenti: "-",
        onceki: "85.0",
      },
      {
        saat: "14:00",
        ulke: "TR",
        gosterge: "TCMB Faiz Kararı",
        onem: "kirmizi" as const,
        aciklanan: "-",
        beklenti: "37,00%",
        onceki: "37,00%",
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

function OnemKutulari({ tip }: { tip: "sari" | "turuncu" | "kirmizi" }) {
  const renkler =
    tip === "sari"
      ? ["bg-yellow-400", "bg-yellow-400", "bg-zinc-300"]
      : tip === "turuncu"
        ? ["bg-orange-500", "bg-orange-500", "bg-orange-500"]
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