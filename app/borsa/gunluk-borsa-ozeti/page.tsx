import Image from "next/image";
import Link from "next/link";

const bistVeri = {
  tarih: "04.06.2026",
  kapanis: "13872.25",
  degisimYuzde: -0.67,
  toplamHacim: "301.733.573.400",
};

const tumYukselenler = [
  { kod: "AYCES", fark: "+10,00%" },
  { kod: "KTLEV", fark: "+10,00%" },
  { kod: "DITAS", fark: "+9,99%" },
  { kod: "CGCAM", fark: "+9,99%" },
  { kod: "HPSOLF2", fark: "+9,98%" },
  { kod: "AVHOL", fark: "+9,98%" },
  { kod: "ISKPL", fark: "+9,96%" },
  { kod: "GENKM", fark: "+9,96%" },
  { kod: "ENSRI", fark: "+9,96%" },
  { kod: "ARDYZ", fark: "+9,96%" },
  { kod: "AVGYO", fark: "+9,95%" },
];

const tumDusenler = [
  { kod: "ICBCT", fark: "-9,98%" },
  { kod: "ONRYT", fark: "-9,98%" },
  { kod: "PKART", fark: "-9,98%" },
  { kod: "ASTOR", fark: "-9,97%" },
  { kod: "HPARTF2", fark: "-9,97%" },
  { kod: "APYMDF2", fark: "-9,97%" },
  { kod: "MAGEN", fark: "-9,97%" },
  { kod: "BLCYT", fark: "-9,96%" },
  { kod: "EKOS", fark: "-9,91%" },
  { kod: "CELHA", fark: "-9,52%" },
  { kod: "BIENY", fark: "-8,74%" },
];

const tumHacimliler = [
  { kod: "ASTOR", hacim: "17.401.772.195" },
  { kod: "ASELS", hacim: "16.558.020.486" },
  { kod: "THYAO", hacim: "13.713.372.545" },
  { kod: "AKBNK", hacim: "11.734.343.516" },
  { kod: "SASA", hacim: "8.346.029.094" },
  { kod: "KTLEV", hacim: "8.323.939.813" },
  { kod: "TUPRS", hacim: "7.147.369.905" },
  { kod: "EREGL", hacim: "7.077.531.452" },
  { kod: "ISCTR", hacim: "6.970.131.377" },
  { kod: "YKBNK", hacim: "6.564.555.542" },
  { kod: "TRALT", hacim: "5.761.472.349" },
];

const tumParaGirisi = [
  { kod: "KTLEV", tutar: "+186.411.079" },
  { kod: "TERA", tutar: "+170.147.593" },
  { kod: "AKBNK", tutar: "+123.172.992" },
  { kod: "EREGL", tutar: "+97.598.883" },
  { kod: "EUPWR", tutar: "+91.441.250" },
  { kod: "YKBNK", tutar: "+82.998.632" },
  { kod: "THYAO", tutar: "+82.743.098" },
  { kod: "GARAN", tutar: "+65.861.629" },
  { kod: "TCELL", tutar: "+53.405.693" },
  { kod: "ISCTR", tutar: "+53.057.263" },
];

const tumParaCikisi = [
  { kod: "ASTOR", tutar: "-515.655.273" },
  { kod: "ASELS", tutar: "-458.041.508" },
  { kod: "TUPRS", tutar: "-263.815.678" },
  { kod: "BIMAS", tutar: "-104.342.079" },
  { kod: "HALKB", tutar: "-79.679.612" },
  { kod: "PETKM", tutar: "-72.460.137" },
  { kod: "TRALT", tutar: "-69.235.431" },
  { kod: "SISE", tutar: "-66.235.982" },
];

const enCokAlisYapanKurumlar = [
  { kurum: "HSBC", hacim: "2.388.743.270", oran: "%23,55" },
  { kurum: "TERA", hacim: "1.268.218.677", oran: "%12,50" },
  { kurum: "PUSULA YAT.", hacim: "1.143.244.431", oran: "%11,27" },
  { kurum: "YATIRIM FINANSMAN", hacim: "893.726.408", oran: "%8,81" },
  { kurum: "AK", hacim: "860.410.300", oran: "%8,48" },
];

const enCokSatisYapanKurumlar = [
  { kurum: "BANK OF AMERICA", hacim: "-3.735.417.461", oran: "%36,82" },
  { kurum: "IS", hacim: "-1.725.434.741", oran: "%17,01" },
  { kurum: "TEB", hacim: "-1.237.914.550", oran: "%12,20" },
  { kurum: "BULLS YATIRIM", hacim: "-799.940.791", oran: "%7,89" },
  { kurum: "UNLU", hacim: "-534.010.357", oran: "%5,26" },
];

const enCokHacimYapanKurumlar = [
  { kurum: "YAPI KREDI", hacim: "84.378.665.084", oran: "%13,98" },
  { kurum: "BANK OF AMERICA", hacim: "80.422.648.061", oran: "%13,33" },
  { kurum: "IS", hacim: "61.380.813.175", oran: "%10,17" },
  { kurum: "AK", hacim: "48.858.102.386", oran: "%8,10" },
  { kurum: "MIDAS", hacim: "23.290.594.736", oran: "%3,86" },
];

const ekonomikTakvimVerileri = [
  {
    tarih: "04.06.2026",
    kayitlar: [
      {
        saat: "10:00",
        ulke: "TR",
        gosterge: "İşsizlik Oranı",
        onem: "kirmizi" as const,
        aciklanan: "8.2%",
        beklenti: "-",
        onceki: "8.1%",
      },
      {
        saat: "10:30",
        ulke: "TR",
        gosterge: "TİM Verilerine göre İhracat (milyon $, aylık)",
        onem: "turuncu-gri" as const,
        aciklanan: "22.504",
        beklenti: "-",
        onceki: "25.403",
      },
    ],
  },
  {
    tarih: "05.06.2026",
    kayitlar: [
      {
        saat: "10:00",
        ulke: "TR",
        gosterge: "Tüketici Fiyatları Endeksi (aylık %)",
        onem: "kirmizi" as const,
        aciklanan: "-",
        beklenti: "1.60%",
        onceki: "4.18%",
      },
      {
        saat: "10:00",
        ulke: "TR",
        gosterge: "Tüketici Fiyatları Endeksi (yıllık %)",
        onem: "kirmizi" as const,
        aciklanan: "-",
        beklenti: "32.49%",
        onceki: "32.37%",
      },
      {
        saat: "10:00",
        ulke: "TR",
        gosterge: "Yurt İçi Üretici Fiyat Endeksi (aylık)",
        onem: "turuncu-gri" as const,
        aciklanan: "-",
        beklenti: "-",
        onceki: "3.17%",
      },
      {
        saat: "10:00",
        ulke: "TR",
        gosterge: "Yurt İçi Üretici Fiyatları Endeksi (Yıllık)",
        onem: "kirmizi" as const,
        aciklanan: "-",
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
        onceki: "-251.242",
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

function ReklamAlani({
  variant = "yatay",
}: {
  variant?: "yatay" | "icerik" | "buyuk";
}) {
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

        <section className="mt-12 mb-8">
          <ReklamAlani variant="buyuk" />
        </section>

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