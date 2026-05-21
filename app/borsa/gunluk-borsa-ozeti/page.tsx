import Image from "next/image";
import Link from "next/link";

const bistVeri = {
  tarih: "21.05.2026",
  kapanis: "13163.88",
  degisimYuzde: -6.05,
};

const tumYukselenler = [
  { kod: "HPSEL2", fark: "+10,00%" },
  { kod: "ICBCT", fark: "+9,94%" },
  { kod: "HPARTF2", fark: "+9,88%" },
  { kod: "IPINVF2", fark: "+9,65%" },
  { kod: "GUNDG", fark: "+8,02%" },
  { kod: "APYVCF2", fark: "+6,00%" },
  { kod: "AKCNS", fark: "+4,91%" },
  { kod: "RYSAS", fark: "+4,73%" },
  { kod: "MAALT", fark: "+3,97%" },
  { kod: "IEYHO", fark: "+3,19%" },
  { kod: "ULUSE", fark: "+3,01%" },
];

const tumDusenler = [
  { kod: "SKBNK", fark: "-10,00%" },
  { kod: "HEKTS", fark: "-10,00%" },
  { kod: "ANELE", fark: "-10,00%" },
  { kod: "DUNYH", fark: "-10,00%" },
  { kod: "RPTEKF2", fark: "-10,00%" },
  { kod: "QUAGR", fark: "-10,00%" },
  { kod: "REEDR", fark: "-10,00%" },
  { kod: "ONCSM", fark: "-10,00%" },
  { kod: "TEHOL", fark: "-10,00%" },
  { kod: "OTTO", fark: "-10,00%" },
  { kod: "ALGYO", fark: "-10,00%" },
];

const tumHacimliler = [
  { kod: "THYAO", hacim: "16.359.129.293" },
  { kod: "ASTOR", hacim: "14.392.133.204" },
  { kod: "SASA", hacim: "9.666.102.052" },
  { kod: "ASELS", hacim: "7.930.369.145" },
  { kod: "AKBNK", hacim: "6.604.915.619" },
  { kod: "ISCTR", hacim: "5.994.364.829" },
  { kod: "YKBNK", hacim: "5.172.320.804" },
  { kod: "PEKGY", hacim: "5.169.857.149" },
  { kod: "KCHOL", hacim: "5.002.826.773" },
  { kod: "EREGL", hacim: "4.657.626.258" },
  { kod: "TRALT", hacim: "3.919.577.457" },
];

const tumParaGirisi = [
  { kod: "PEKGY", tutar: "+137.241.434" },
  { kod: "BIMAS", tutar: "+103.051.641" },
  { kod: "TEHOL", tutar: "+103.007.191" },
  { kod: "YEOTK", tutar: "+87.061.829" },
  { kod: "GESAN", tutar: "+84.083.370" },
  { kod: "EUPWR", tutar: "+64.758.152" },
  { kod: "TERA", tutar: "+62.251.160" },
  { kod: "TUPRS", tutar: "+59.460.296" },
  { kod: "CVKMD", tutar: "+38.714.343" },
];

const tumParaCikisi = [
  { kod: "THYAO", tutar: "-598.182.748" },
  { kod: "AKBNK", tutar: "-307.229.911" },
  { kod: "ASTOR", tutar: "-227.749.847" },
  { kod: "KCHOL", tutar: "-169.878.677" },
  { kod: "ISCTR", tutar: "-102.663.638" },
  { kod: "EREGL", tutar: "-91.671.277" },
  { kod: "EKGYO", tutar: "-74.761.364" },
  { kod: "YKBNK", tutar: "-69.537.242" },
  { kod: "BRSAN", tutar: "-59.312.765" },
  { kod: "TRALT", tutar: "-56.916.712" },
  { kod: "ASELS", tutar: "-55.011.822" },
];

const enCokAlisYapanKurumlar = [
  { kurum: "AK", hacim: "2.219.418.376", oran: "%18,00" },
  { kurum: "TERA", hacim: "1.898.368.047", oran: "%15,40" },
  { kurum: "GARANTI BBVA", hacim: "1.529.379.393", oran: "%12,40" },
  { kurum: "YATIRIM FINANSMAN", hacim: "1.071.060.079", oran: "%8,69" },
  { kurum: "YAPI KREDI", hacim: "973.373.291", oran: "%7,89" },
];

const enCokSatisYapanKurumlar = [
  { kurum: "BANK OF AMERICA", hacim: "-4.567.975.756", oran: "%37,05" },
  { kurum: "DENIZ", hacim: "-2.861.649.314", oran: "%23,21" },
  { kurum: "DESTEK", hacim: "-1.659.309.886", oran: "%13,46" },
  { kurum: "GEDIK", hacim: "-558.442.499", oran: "%4,53" },
  { kurum: "HSBC", hacim: "-503.497.326", oran: "%4,08" },
];

const enCokHacimYapanKurumlar = [
  { kurum: "YAPI KREDI", hacim: "72.513.466.271", oran: "%14,19" },
  { kurum: "BANK OF AMERICA", hacim: "69.111.334.305", oran: "%13,53" },
  { kurum: "IS", hacim: "55.311.600.577", oran: "%10,83" },
  { kurum: "AK", hacim: "40.424.129.032", oran: "%7,91" },
  { kurum: "TACIRLER", hacim: "20.899.164.507", oran: "%4,09" },
];

const ekonomikTakvimVerileri = [
  {
    tarih: "21.05.2026",
    kayitlar: [
      {
        saat: "10:00",
        ulke: "TR",
        gosterge: "TÜİK Hizmet Sektörü Güven Endeksi",
        onem: "turuncu-gri" as const,
        aciklanan: "109.0",
        beklenti: "-",
        onceki: "109.7",
      },
      {
        saat: "10:00",
        ulke: "TR",
        gosterge: "TÜİK Perakende Sektörü Güven Endeksi",
        onem: "turuncu-gri" as const,
        aciklanan: "112.5",
        beklenti: "-",
        onceki: "111.6",
      },
      {
        saat: "10:00",
        ulke: "TR",
        gosterge: "TÜİK İnşaat Sektörü Güven Endeksi",
        onem: "turuncu-gri" as const,
        aciklanan: "82.1",
        beklenti: "-",
        onceki: "83.6",
      },
    ],
  },
  {
    tarih: "22.05.2026",
    kayitlar: [
      {
        saat: "10:00",
        ulke: "TR",
        gosterge: "İmalat Sanayi Kapasite Kullanım Oranı (MEA)",
        onem: "kirmizi" as const,
        aciklanan: "-",
        beklenti: "-",
        onceki: "74.0%",
      },
      {
        saat: "10:00",
        ulke: "TR",
        gosterge: "Saatlik İşgücü Maliyet Endeksi (Yıllık)",
        onem: "sari-tek" as const,
        aciklanan: "-",
        beklenti: "-",
        onceki: "34.2%",
      },
      {
        saat: "10:00",
        ulke: "TR",
        gosterge: "Saatlik Kazanç Endeksi (Yıllık %)",
        onem: "sari-tek" as const,
        aciklanan: "-",
        beklenti: "-",
        onceki: "35.0%",
      },
      {
        saat: "10:00",
        ulke: "TR",
        gosterge: "Toplam İhracat (milyon usd/aylık)",
        onem: "kirmizi" as const,
        aciklanan: "-",
        beklenti: "25.403",
        onceki: "21.899",
      },
      {
        saat: "10:00",
        ulke: "TR",
        gosterge: "Toplam İthalat (milyon usd /aylık)",
        onem: "kirmizi" as const,
        aciklanan: "-",
        beklenti: "33.909",
        onceki: "33.120",
      },
      {
        saat: "10:00",
        ulke: "TR",
        gosterge: "Dış Ticaret Dengesi (milyon $/aylık)",
        onem: "kirmizi" as const,
        aciklanan: "-",
        beklenti: "-8.506",
        onceki: "-11.221",
      },
      {
        saat: "10:00",
        ulke: "TR",
        gosterge: "İhracatın İthalatı Karşılama Oranı % (aylık)",
        onem: "kirmizi" as const,
        aciklanan: "-",
        beklenti: "74.4%",
        onceki: "66.1%",
      },
      {
        saat: "10:00",
        ulke: "TR",
        gosterge: "Uluslararası Yatırım Pozisyonu (milyar usd)",
        onem: "turuncu-gri" as const,
        aciklanan: "-",
        beklenti: "-",
        onceki: "347.6",
      },
      {
        saat: "10:00",
        ulke: "TR",
        gosterge: "Türkiye'nin Uluslararası Yükümlülükleri (milyar usd)",
        onem: "turuncu-gri" as const,
        aciklanan: "-",
        beklenti: "-",
        onceki: "786.8",
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