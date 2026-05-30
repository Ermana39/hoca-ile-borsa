export const metadata = {
  title: "Günlük Borsa Özeti | Hoca İle Borsa",
  description: "BIST 100 kapanışı, en çok yükselen ve düşen hisseler, para girişi çıkışı ve kurum bazlı günlük borsa verileri.",
  alternates: {
    canonical: "https://www.hocaileborsa.com/borsa/gunluk-borsa-ozeti",
  },
};
import Image from "next/image";
import Link from "next/link";

const bistVeri = {
  tarih: "26.05.2026",
  kapanis: "13622.75",
  degisimYuzde: -1.64,
  toplamHacim: "140.862.232.809",
};

const tumYukselenler = [
  { kod: "BIGEN", fark: "+10,00%" },
  { kod: "IPINVF2", fark: "+10,00%" },
  { kod: "PATEK", fark: "+9,99%" },
  { kod: "HRKET", fark: "+9,96%" },
  { kod: "ERCB", fark: "+9,96%" },
  { kod: "HATSN", fark: "+9,94%" },
  { kod: "LINK", fark: "+9,94%" },
  { kod: "EKDMR", fark: "+9,92%" },
];

const tumDusenler = [
  { kod: "EUPWR", fark: "-9,99%" },
  { kod: "ISKPL", fark: "-9,99%" },
  { kod: "HAPTF2", fark: "-9,95%" },
  { kod: "APYMDF2", fark: "-9,92%" },
  { kod: "KLRHO", fark: "-9,85%" },
  { kod: "EMPAE", fark: "-8,86%" },
  { kod: "ASTOR", fark: "-8,49%" },
  { kod: "YEOTK", fark: "-6,52%" },
];

const tumHacimliler = [
  { kod: "ASELS", hacim: "9.058.282.693" },
  { kod: "ASTOR", hacim: "7.577.431.979" },
  { kod: "EUPWR", hacim: "5.294.735.723" },
  { kod: "FROTO", hacim: "5.078.789.555" },
  { kod: "AKBNK", hacim: "4.684.577.059" },
  { kod: "THYAO", hacim: "3.484.485.135" },
  { kod: "GESAN", hacim: "3.092.940.551" },
  { kod: "KTLEV", hacim: "2.837.146.551" },
];

const tumParaGirisi = [
  { kod: "THHOL", tutar: "+85.330.749" },
  { kod: "KTLEV", tutar: "+81.486.809" },
  { kod: "CVKMD", tutar: "+42.105.326" },
  { kod: "YEOTK", tutar: "+28.962.273" },
  { kod: "TUPRS", tutar: "+25.445.827" },
  { kod: "SAHOL", tutar: "+25.229.119" },
  { kod: "IZENR", tutar: "+25.057.464" },
  { kod: "TTKOM", tutar: "+23.254.839" },
  { kod: "THYAO", tutar: "+23.240.894" },
  { kod: "EKDMR", tutar: "+22.557.943" },
];

const tumParaCikisi = [
  { kod: "ASTOR", tutar: "-301.787.538" },
  { kod: "AKBNK", tutar: "-249.235.585" },
  { kod: "FROTO", tutar: "-154.624.448" },
  { kod: "ASELS", tutar: "-129.833.415" },
  { kod: "TRALT", tutar: "-80.527.356" },
  { kod: "EUPWR", tutar: "-72.939.997" },
  { kod: "GARAN", tutar: "-71.208.650" },
  { kod: "BIMAS", tutar: "-67.039.244" },
  { kod: "TCELL", tutar: "-60.241.553" },
];

const enCokAlisYapanKurumlar = [
  { kurum: "TERA", hacim: "933.203.176", oran: "%12,97" },
  { kurum: "GARANTI BBVA", hacim: "670.160.291", oran: "%9,32" },
  { kurum: "DESTEK", hacim: "578.555.997", oran: "%8,04" },
  { kurum: "VAKIF", hacim: "543.264.671", oran: "%7,55" },
  { kurum: "DENIZ", hacim: "472.140.383", oran: "%6,57" },
];

const enCokSatisYapanKurumlar = [
  { kurum: "BANK OF AMERICA", hacim: "-2.789.484.753", oran: "%38,78" },
  { kurum: "INFO", hacim: "-863.467.270", oran: "%12,00" },
  { kurum: "AK", hacim: "-680.839.202", oran: "%9,47" },
  { kurum: "MEKSA", hacim: "-517.676.617", oran: "%7,20" },
  { kurum: "ALNUS", hacim: "-417.320.656", oran: "%5,80" },
];

const enCokHacimYapanKurumlar = [
  { kurum: "BANK OF AMERICA", hacim: "62.187.687.729", oran: "%22,07" },
  { kurum: "AK", hacim: "36.516.672.881", oran: "%12,96" },
  { kurum: "YAPI KREDI", hacim: "28.988.775.020", oran: "%10,29" },
  { kurum: "IS", hacim: "26.987.113.089", oran: "%9,58" },
  { kurum: "INFO", hacim: "10.323.233.794", oran: "%3,66" },
];

const ekonomikTakvimVerileri = [
  {
    tarih: "01.06.2026",
    kayitlar: [
      {
        saat: "10:00",
        ulke: "TR",
        gosterge: "GSYH Yıllık Değişim",
        onem: "kirmizi" as const,
        aciklanan: "-",
        beklenti: "2.7%",
        onceki: "3.4%",
      },
      {
        saat: "11:00",
        ulke: "TR",
        gosterge: "İbrazında Karşılıksız Kalan Çek (adet)",
        onem: "sari-tek" as const,
        aciklanan: "-",
        beklenti: "-",
        onceki: "18.131",
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
