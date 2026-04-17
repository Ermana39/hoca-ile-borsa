import Image from "next/image";
import Link from "next/link";

const bistVeri = {
  tarih: "20.04.2026",
  kapanis: "14587.93",
  degisimYuzde: 2.72,
};

const tumYukselenler = [
  { kod: "HDFGS", fark: "+10,00%" },
  { kod: "BURCE", fark: "+10,00%" },
  { kod: "EFOR", fark: "+10,00%" },
  { kod: "KLRHO", fark: "+10,00%" },
  { kod: "CLEBI", fark: "+9,99%" },
  { kod: "PAPIL", fark: "+9,99%" },
  { kod: "ANELE", fark: "+9,99%" },
  { kod: "BORLS", fark: "+9,98%" },
  { kod: "KARTN", fark: "+9,98%" },
  { kod: "ARFYE", fark: "+9,98%" },
  { kod: "KONTR", fark: "+9,97%" },
  { kod: "KONYA", fark: "+9,95%" },
  { kod: "REEDR", fark: "+9,95%" },
  { kod: "ZGYO", fark: "+9,95%" },
  { kod: "EMKEL", fark: "+9,93%" },
  { kod: "KTSKR", fark: "+9,93%" },
  { kod: "DGNMO", fark: "+9,91%" },
];

const tumDusenler = [
  { kod: "TPKGYF1", fark: "-10,00%" },
  { kod: "FTPGSF2", fark: "-10,00%" },
  { kod: "ARZUM", fark: "-9,94%" },
  { kod: "MAALT", fark: "-9,68%" },
  { kod: "ENSRI", fark: "-7,74%" },
  { kod: "AGYAZ", fark: "-7,16%" },
  { kod: "NIBAS", fark: "-6,89%" },
  { kod: "APYMDF2", fark: "-6,09%" },
  { kod: "TUPRS", fark: "-5,60%" },
  { kod: "GIPTA", fark: "-5,27%" },
  { kod: "OZATD", fark: "-5,09%" },
  { kod: "GUNDG", fark: "-4,94%" },
  { kod: "KBORU", fark: "-3,90%" },
  { kod: "FZLGY", fark: "-3,76%" },
  { kod: "SMART", fark: "-3,71%" },
  { kod: "YAPRK", fark: "-3,66%" },
  { kod: "PETKM", fark: "-3,09%" },
];

const tumHacimliler = [
  { kod: "THYAO", hacim: "35.570.677.074" },
  { kod: "SASA", hacim: "34.031.655.624" },
  { kod: "YKBNK", hacim: "15.254.096.577" },
  { kod: "ISCTR", hacim: "14.631.400.961" },
  { kod: "AKBNK", hacim: "13.834.492.750" },
  { kod: "TUPRS", hacim: "11.087.905.604" },
  { kod: "ASTOR", hacim: "9.713.283.315" },
  { kod: "TRALT", hacim: "8.690.169.004" },
  { kod: "ASELS", hacim: "8.666.389.884" },
  { kod: "GARAN", hacim: "6.961.880.832" },
  { kod: "EREGL", hacim: "6.839.382.729" },
  { kod: "KCHOL", hacim: "6.733.839.969" },
  { kod: "PGSUS", hacim: "6.309.243.486" },
  { kod: "KONTR", hacim: "6.194.283.169" },
  { kod: "TEHOL", hacim: "5.594.979.074" },
  { kod: "SAHOL", hacim: "5.466.872.780" },
  { kod: "BIMAS", hacim: "4.533.040.324" },
];

const tumParaGirisi = [
  { kod: "AKBNK", tutar: "+353.324.474" },
  { kod: "GARAN", tutar: "+288.468.031" },
  { kod: "ISCTR", tutar: "+250.750.646" },
  { kod: "EREGL", tutar: "+244.191.767" },
  { kod: "TERA", tutar: "+189.832.507" },
  { kod: "SASA", tutar: "+134.716.411" },
  { kod: "TRALT", tutar: "+129.627.367" },
  { kod: "SAHOL", tutar: "+94.179.865" },
];

const tumParaCikisi = [
  { kod: "TUPRS", tutar: "-319.423.360" },
  { kod: "TAVHL", tutar: "-150.857.221" },
  { kod: "THYAO", tutar: "-79.857.345" },
  { kod: "OYAKC", tutar: "-33.687.349" },
  { kod: "ARZUM", tutar: "-32.260.954" },
  { kod: "MANAS", tutar: "-18.918.914" },
  { kod: "GIPTA", tutar: "-18.609.372" },
  { kod: "GWIND", tutar: "-16.544.475" },
  { kod: "VAKBN", tutar: "-16.497.203" },
];

const enCokAlisYapanKurumlar = [
  { kurum: "BANK OF AME", hacim: "13.566.519.622", oran: "%69,92" },
  { kurum: "TERA", hacim: "2.318.881.556", oran: "%11,95" },
  { kurum: "TACIRLER", hacim: "905.646.886", oran: "%4,67" },
  { kurum: "QNB YATIRIM", hacim: "778.593.128", oran: "%4,01" },
  { kurum: "UNLU", hacim: "492.188.897", oran: "%2,54" },
];

const enCokSatisYapanKurumlar = [
  { kurum: "GARANTI BBV.", hacim: "-2.968.726.394", oran: "%15,30" },
  { kurum: "BULLS YATIRIM", hacim: "-2.139.873.969", oran: "%11,03" },
  { kurum: "IS", hacim: "-1.868.978.007", oran: "%9,63" },
  { kurum: "DESTEK", hacim: "-1.282.338.495", oran: "%6,61" },
  { kurum: "TEB", hacim: "-1.121.467.437", oran: "%5,78" },
];

const enCokHacimYapanKurumlar = [
  { kurum: "YAPI KREDI", hacim: "118.148.862.294", oran: "%14,72" },
  { kurum: "BANK OF AME", hacim: "111.013.649.456", oran: "%13,83" },
  { kurum: "IS", hacim: "71.417.299.099", oran: "%8,90" },
  { kurum: "AK", hacim: "62.486.371.431", oran: "%7,78" },
  { kurum: "TACIRLER", hacim: "40.087.513.069", oran: "%4,99" },
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
        aciklanan: "8.379",
        beklenti: "-",
        onceki: "9.432",
      },
      {
        saat: "10:00",
        ulke: "TR",
        gosterge: "Kapanan Şirket Sayısı (adet)",
        onem: "sari" as const,
        aciklanan: "1.809",
        beklenti: "-",
        onceki: "1.621",
      },
      {
        saat: "10:00",
        ulke: "TR",
        gosterge: "Konut Satışları",
        onem: "turuncu" as const,
        aciklanan: "113.367",
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