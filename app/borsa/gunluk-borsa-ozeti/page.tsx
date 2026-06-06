import Image from "next/image";
import Link from "next/link";

const bistVeri = {
  tarih: "05.06.2026",
  kapanis: "13694.19",
  degisimYuzde: -1.28,
  toplamHacim: "261.009.038.863",
};

const tumYukselenler = [
  { kod: "QPERPF1", fark: "+10,00%" },
  { kod: "HATSN", fark: "+9,98%" },
  { kod: "AYCES", fark: "+9,98%" },
  { kod: "EMPAE", fark: "+9,97%" },
  { kod: "ENSRI", fark: "+9,96%" },
  { kod: "AKFYE", fark: "+9,96%" },
  { kod: "ZERGY", fark: "+9,95%" },
  { kod: "MARKA", fark: "+9,94%" },
  { kod: "BIGEN", fark: "+9,94%" },
  { kod: "CGCAM", fark: "+9,94%" },
];

const tumDusenler = [
  { kod: "IZENR", fark: "-9,96%" },
  { kod: "ONRYT", fark: "-9,96%" },
  { kod: "BLCYT", fark: "-9,95%" },
  { kod: "ISKPL", fark: "-9,95%" },
  { kod: "ARDYZ", fark: "-9,94%" },
  { kod: "MAGEN", fark: "-9,92%" },
  { kod: "TKFEN", fark: "-9,76%" },
  { kod: "EMKEL", fark: "-9,20%" },
  { kod: "FTPGSF2", fark: "-8,39%" },
  { kod: "PRZMA", fark: "-8,31%" },
];

const tumHacimliler = [
  { kod: "ASTOR", hacim: "17.420.192.914" },
  { kod: "AKBNK", hacim: "9.952.386.157" },
  { kod: "ASELS", hacim: "8.749.750.850" },
  { kod: "TRALT", hacim: "8.202.660.010" },
  { kod: "THYAO", hacim: "7.540.816.820" },
  { kod: "ISCTR", hacim: "6.922.889.087" },
  { kod: "EREGL", hacim: "6.322.276.930" },
  { kod: "SASA", hacim: "5.984.112.038" },
  { kod: "YKBNK", hacim: "5.585.983.894" },
  { kod: "TUPRS", hacim: "4.793.811.308" },
];

const tumParaGirisi = [
  { kod: "TUPRS", tutar: "+227.531.641" },
  { kod: "TERA", tutar: "+150.819.935" },
  { kod: "BIMAS", tutar: "+92.862.119" },
  { kod: "THYAO", tutar: "+91.709.513" },
  { kod: "EMPAE", tutar: "+69.485.364" },
  { kod: "BRSAN", tutar: "+51.314.088" },
  { kod: "SISE", tutar: "+47.919.908" },
  { kod: "TEHOL", tutar: "+42.160.348" },
];

const tumParaCikisi = [
  { kod: "AKBNK", tutar: "-349.421.853" },
  { kod: "ISCTR", tutar: "-181.643.876" },
  { kod: "ASTOR", tutar: "-180.631.875" },
  { kod: "EKGYO", tutar: "-173.562.516" },
  { kod: "TRALT", tutar: "-115.600.280" },
  { kod: "SASA", tutar: "-78.048.328" },
  { kod: "YKBNK", tutar: "-69.543.288" },
];

const enCokAlisYapanKurumlar = [
  { kurum: "TERA", hacim: "1.230.167.089", oran: "%10,41" },
  { kurum: "GARANTI BBVA", hacim: "1.135.106.089", oran: "%9,61" },
  { kurum: "VAKIF", hacim: "1.041.179.921", oran: "%8,81" },
  { kurum: "IS", hacim: "1.031.732.151", oran: "%8,73" },
  { kurum: "YATIRIM FINANSMAN", hacim: "1.030.461.046", oran: "%8,72" },
];

const enCokSatisYapanKurumlar = [
  { kurum: "BANK OF AMERICA", hacim: "-5.461.771.338", oran: "%46,23" },
  { kurum: "A1 CAPITAL", hacim: "-1.948.316.369", oran: "%16,49" },
  { kurum: "INFO", hacim: "-1.003.628.199", oran: "%8,50" },
  { kurum: "TACIRLER", hacim: "-887.710.300", oran: "%7,51" },
  { kurum: "AK", hacim: "-774.890.571", oran: "%6,56" },
];

const enCokHacimYapanKurumlar = [
  { kurum: "YAPI KREDI", hacim: "74.370.299.382", oran: "%14,25" },
  { kurum: "BANK OF AMERICA", hacim: "73.963.138.028", oran: "%14,17" },
  { kurum: "IS", hacim: "51.530.318.313", oran: "%9,87" },
  { kurum: "AK", hacim: "43.831.337.404", oran: "%8,40" },
  { kurum: "MIDAS", hacim: "21.412.241.557", oran: "%4,10" },
];

const ekonomikTakvimVerileri = [
  {
    tarih: "05.06.2026",
    kayitlar: [
      {
        saat: "10:00",
        ulke: "TR",
        gosterge: "Tüketici Fiyatları Endeksi (aylık %)",
        onem: "kirmizi" as const,
        aciklanan: "1.60%",
        beklenti: "1.60%",
        onceki: "4.18%",
      },
      {
        saat: "10:00",
        ulke: "TR",
        gosterge: "Tüketici Fiyatları Endeksi (yıllık %)",
        onem: "kirmizi" as const,
        aciklanan: "32.49%",
        beklenti: "32.49%",
        onceki: "32.37%",
      },
      {
        saat: "10:00",
        ulke: "TR",
        gosterge: "Yurt İçi Üretici Fiyat Endeksi (aylık)",
        onem: "turuncu-gri" as const,
        aciklanan: "2.75%",
        beklenti: "-",
        onceki: "3.17%",
      },
      {
        saat: "10:00",
        ulke: "TR",
        gosterge: "Yurt İçi Üretici Fiyatları Endeksi (Yıllık)",
        onem: "kirmizi" as const,
        aciklanan: "28.93%",
        beklenti: "-",
        onceki: "28.59%",
      },
      {
        saat: "17:30",
        ulke: "TR",
        gosterge: "Hazine Faiz Dışı Dengesi (milyon tl)",
        onem: "turuncu-gri" as const,
        aciklanan: "-",
        beklenti: "-",
        onceki: "-3.213",
      },
      {
        saat: "17:30",
        ulke: "TR",
        gosterge: "Hazine Nakit Dengesi (milyon tl)",
        onem: "turuncu-gri" as const,
        aciklanan: "-",
        beklenti: "-",
        onceki: "-215.242",
      },
    ],
  },
  {
    tarih: "08.06.2026",
    kayitlar: [
      {
        saat: "14:30",
        ulke: "TR",
        gosterge: "TÜFE Bazlı Reel Efektif Döviz Kuru",
        onem: "kirmizi" as const,
        aciklanan: "-",
        beklenti: "-",
        onceki: "106.30",
      },
      {
        saat: "14:30",
        ulke: "TR",
        gosterge: "ÜFE Bazlı Reel Efektif Döviz Kuru",
        onem: "kirmizi" as const,
        aciklanan: "-",
        beklenti: "-",
        onceki: "102.16",
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

        {veriler.length > 0 ? (
          veriler.map((item, index) => (
            <div
              key={`${item.kod}-${index}`}
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
      <h2 className="mb-4 text-center text-xl font-bold text-zinc-900">
        {baslik}
      </h2>

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
      <div className="text-center font-semibold text-zinc-700">
        {aciklanan}
      </div>
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

        <section className="rounded-2xl border border-zinc-200 bg-white p-6">
          <h2 className="mb-4 text-2xl font-bold text-zinc-900">
            Günlük Borsa Özeti Hakkında
          </h2>

          <p className="mb-4 leading-7 text-zinc-700">
            Günlük borsa özeti sayfası, Borsa İstanbul piyasalarında yaşanan
            güncel gelişmeleri tek ekranda takip etmek isteyen yatırımcılar için
            hazırlanmıştır. Bu sayfada BIST 100 endeksi kapanış verileri, günlük
            değişim oranları, en çok yükselen hisseler, en çok düşen hisseler,
            para girişi ve para çıkışı yaşanan hisseler gibi önemli piyasa
            verilerine hızlı şekilde ulaşabilirsiniz.
          </p>

          <p className="mb-4 leading-7 text-zinc-700">
            Günlük borsa verileri, yatırımcıların piyasa yönünü anlaması ve kısa
            vadeli fiyat hareketlerini değerlendirmesi açısından büyük önem
            taşır. Özellikle işlem hacmi yüksek hisseler, para girişi yaşanan
            şirketler, kurumsal işlemler ve dikkat çeken sektör hareketleri
            yatırım kararlarında önemli sinyaller verebilir.
          </p>

          <p className="mb-4 leading-7 text-zinc-700">
            Sayfada yer alan ekonomik takvim, en çok yükselen ve düşen hisseler,
            en hacimli hisseler ve kurum bazlı işlem dağılımları sayesinde
            piyasanın gün içindeki genel görünümünü daha detaylı
            inceleyebilirsiniz. Bu yapı, hem kısa vadeli traderlar hem de uzun
            vadeli yatırımcılar için pratik bir takip ekranı sunar.
          </p>

          <p className="leading-7 text-zinc-700">
            Güncel BIST 100 verileri, günlük hisse performansları, işlem hacmi
            sıralamaları, para giriş çıkış analizleri, ekonomik takvim ve kurum
            bazlı piyasa özeti için bu sayfayı düzenli olarak takip
            edebilirsiniz.
          </p>
        </section>
      </div>
    </main>
  );
}