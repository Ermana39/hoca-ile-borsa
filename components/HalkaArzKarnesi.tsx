import Link from "next/link";
import {
  getHalkaArzSonucu,
  halkaArzKapanisTarihi,
} from "@/data/halka-arz-sonuclari";
import {
  getHalkaArzBistKarsilastirmasi,
  getHalkaArzGetirisi,
  puanMetni,
  yuzdeMetni,
} from "@/lib/halka-arz-performans";
import { getAllNews } from "@/lib/haberler";

type HalkaArzKarnesiProps = {
  sirketAdi: string;
  kod: string;
  talepTarihi?: string;
  halkaArzFiyati?: string;
  dagitimYontemi?: string;
  toplamPay?: string;
  className?: string;
};

type SurecDurumu = "tamamlandi" | "guncel" | "bekleniyor";

type SurecAdimi = {
  baslik: string;
  durum: SurecDurumu;
  deger: string;
  aciklama: string;
};

const durumStilleri: Record<
  SurecDurumu,
  { kart: string; rozet: string; nokta: string; etiket: string }
> = {
  tamamlandi: {
    kart: "border-emerald-200 bg-emerald-50/70",
    rozet: "bg-emerald-100 text-emerald-800",
    nokta: "bg-emerald-500",
    etiket: "Tamamlandı",
  },
  guncel: {
    kart: "border-blue-200 bg-blue-50/70",
    rozet: "bg-blue-100 text-blue-800",
    nokta: "bg-blue-500",
    etiket: "Güncel aşama",
  },
  bekleniyor: {
    kart: "border-slate-200 bg-slate-50",
    rozet: "bg-slate-200 text-slate-700",
    nokta: "bg-slate-300",
    etiket: "Bekleniyor",
  },
};

function fiyatMetni(value?: string) {
  if (!value) return "Açıklanmadı";
  if (/TL/i.test(value)) return value;

  const temiz = value.trim();
  const sayi = Number(
    temiz.includes(",")
      ? temiz.replace(/\./g, "").replace(",", ".")
      : temiz
  );
  if (!Number.isFinite(sayi)) return value;

  return `${sayi.toLocaleString("tr-TR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })} TL`;
}

function tarihMetni(value?: string) {
  if (!value || value === "auto") return "";
  const tarih = new Date(value);
  if (Number.isNaN(tarih.getTime())) return "";

  return tarih.toLocaleDateString("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function HalkaArzKarnesi({
  sirketAdi,
  kod,
  talepTarihi,
  halkaArzFiyati,
  dagitimYontemi,
  toplamPay,
  className = "",
}: HalkaArzKarnesiProps) {
  const sonuc = getHalkaArzSonucu(kod);
  const hisseGetirisi = sonuc ? getHalkaArzGetirisi(sonuc) : undefined;
  const marj =
    hisseGetirisi === undefined ? "" : yuzdeMetni(hisseGetirisi, 0);
  const bistKarsilastirmasi = sonuc
    ? getHalkaArzBistKarsilastirmasi(sonuc)
    : undefined;
  const ilgiliHaberler = getAllNews()
    .filter(
      (item) =>
        item.category === "halka-arz" &&
        item.ilgiliHisseler?.some(
          (hisse) => hisse.toLocaleUpperCase("tr-TR") === kod.toLocaleUpperCase("tr-TR")
        )
    )
    .slice(0, 4);

  const surecAdimlari: SurecAdimi[] = [
    {
      baslik: "SPK Onayı",
      durum: "tamamlandi",
      deger: "İzahname onaylandı",
      aciklama: "Şirket SPK onayı sonrasında onaylı izahnameler bölümüne alındı.",
    },
    {
      baslik: "Talep Toplama",
      durum: sonuc ? "tamamlandi" : talepTarihi ? "guncel" : "bekleniyor",
      deger: talepTarihi || (sonuc ? "Tamamlandı" : "Tarih bekleniyor"),
      aciklama: sonuc
        ? "Talep toplama süreci tamamlandı."
        : talepTarihi
          ? "Talep toplama takvimi açıklandı."
          : "Satış duyurusu ile kesin tarih açıklanacak.",
    },
    {
      baslik: "Dağıtım Sonucu",
      durum: sonuc ? "tamamlandi" : "bekleniyor",
      deger: sonuc ? `${sonuc.katilimciSayisi} yatırımcı` : "Sonuç bekleniyor",
      aciklama: sonuc
        ? sonuc.dagitimSekli
        : "Katılımcı sayısı ve gerçekleşen dağıtım bilgileri açıklandığında eklenecek.",
    },
    {
      baslik: "Borsada İlk İşlem",
      durum: sonuc ? "tamamlandi" : "bekleniyor",
      deger: sonuc?.islemTarihi || "Tarih bekleniyor",
      aciklama: sonuc
        ? `${kod} paylarının Borsa İstanbul'daki ilk işlem tarihi.`
        : "Dağıtım sonrasında Borsa İstanbul tarafından açıklanacak.",
    },
    {
      baslik: "Performans",
      durum: sonuc ? "guncel" : "bekleniyor",
      deger: sonuc ? `${marj || "Hesaplanamadı"} getiri` : "İşlem sonrası başlayacak",
      aciklama: sonuc
        ? `Son kayıtlı kapanış ${fiyatMetni(sonuc.guncelFiyat)}.`
        : "Arz fiyatına göre gün sonu performansı işlem başladıktan sonra izlenecek.",
    },
  ];

  const ozetKartlari = sonuc
    ? [
        { label: "Arz Fiyatı", value: fiyatMetni(sonuc.arzFiyati) },
        { label: "Son Kayıtlı Kapanış", value: fiyatMetni(sonuc.guncelFiyat) },
        { label: "Arzdan İtibaren", value: marj || "Hesaplanamadı" },
        { label: "Katılımcı", value: sonuc.katilimciSayisi },
      ]
    : [
        { label: "Arz Fiyatı", value: fiyatMetni(halkaArzFiyati) },
        { label: "Talep Toplama", value: talepTarihi || "Tarih bekleniyor" },
        { label: "Dağıtım", value: dagitimYontemi || "Açıklanmadı" },
        { label: "Toplam Pay", value: toplamPay || "Açıklanmadı" },
      ];

  const donemselPerformans = sonuc
    ? [
        { label: "30 Gün", value: sonuc.performans30Gun },
        { label: "90 Gün", value: sonuc.performans90Gun },
        { label: "180 Gün", value: sonuc.performans180Gun },
        {
          label: "Halka Arz Getirisi",
          value: bistKarsilastirmasi
            ? yuzdeMetni(bistKarsilastirmasi.hisseGetirisi)
            : undefined,
        },
        {
          label: "BIST 100 Getirisi",
          value: bistKarsilastirmasi
            ? yuzdeMetni(bistKarsilastirmasi.bist100Getirisi)
            : undefined,
        },
        {
          label: "BIST 100'e Göre Fark",
          value: bistKarsilastirmasi
            ? puanMetni(bistKarsilastirmasi.getiriFarkiPuan)
            : undefined,
        },
      ].filter((item): item is { label: string; value: string } => Boolean(item.value))
    : [];

  const marjPozitif = (hisseGetirisi ?? 0) >= 0;

  return (
    <section
      id="halka-arz-karnesi"
      className={`mb-8 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm ${className}`}
    >
      <div className="border-b border-slate-200 bg-slate-950 px-5 py-5 text-white sm:px-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-300">
              Yaşayan veri sayfası
            </p>
            <h2 className="mt-2 text-xl font-bold sm:text-2xl">
              {kod} Halka Arz Karnesi
            </h2>
            <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-300">
              {sirketAdi} halka arzının onaydan işlem sonrası performansa kadar
              ilerleyen süreci tek bölümde takip edilir.
            </p>
          </div>
          <span
            className={`w-fit rounded-full px-3 py-1.5 text-xs font-bold ${
              sonuc
                ? "bg-emerald-400/15 text-emerald-200"
                : "bg-blue-400/15 text-blue-200"
            }`}
          >
            {sonuc ? "Borsada işlem görüyor" : "Halka arz süreci devam ediyor"}
          </span>
        </div>
      </div>

      <div className="p-5 sm:p-6">
        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {ozetKartlari.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                {item.label}
              </p>
              <p
                className={`mt-2 text-base font-bold ${
                  item.label === "Arzdan İtibaren"
                    ? marjPozitif
                      ? "text-emerald-700"
                      : "text-rose-700"
                    : "text-slate-900"
                }`}
              >
                {item.value}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-6 grid gap-3 md:grid-cols-2 xl:grid-cols-5">
          {surecAdimlari.map((adim, index) => {
            const stil = durumStilleri[adim.durum];
            return (
              <div
                key={adim.baslik}
                className={`relative rounded-2xl border p-4 ${stil.kart}`}
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-bold text-slate-500">
                    {index + 1}. aşama
                  </span>
                  <span className={`rounded-full px-2 py-1 text-[10px] font-bold ${stil.rozet}`}>
                    {stil.etiket}
                  </span>
                </div>
                <div className="mt-3 flex items-center gap-2">
                  <span className={`h-2.5 w-2.5 shrink-0 rounded-full ${stil.nokta}`} />
                  <h3 className="text-sm font-bold text-slate-900">{adim.baslik}</h3>
                </div>
                <p className="mt-3 text-sm font-semibold leading-6 text-slate-800">
                  {adim.deger}
                </p>
                <p className="mt-1 text-xs leading-5 text-slate-600">{adim.aciklama}</p>
              </div>
            );
          })}
        </div>

        {donemselPerformans.length > 0 && (
          <div className="mt-6 rounded-2xl border border-blue-200 bg-blue-50 p-4">
            <h3 className="text-sm font-bold text-blue-950">
              Dönemsel Performans ve BIST 100 Karşılaştırması
            </h3>
            <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {donemselPerformans.map((item) => (
                <div key={item.label} className="rounded-xl bg-white p-3">
                  <p className="text-xs font-semibold text-slate-500">{item.label}</p>
                  <p className="mt-1 font-bold text-slate-900">{item.value}</p>
                </div>
              ))}
            </div>
            {bistKarsilastirmasi && (
              <p className="mt-4 text-xs leading-6 text-blue-900">
                Karşılaştırmada BIST 100 başlangıcı olarak ilk işlem gününden
                önceki son seansın kapanışı kullanıldı: {" "}
                {bistKarsilastirmasi.baslangicSlug ? (
                  <Link
                    href={`/borsa/gunluk-borsa-ozeti/${bistKarsilastirmasi.baslangicSlug}`}
                    prefetch={false}
                    className="font-semibold underline underline-offset-2"
                  >
                    {tarihMetni(bistKarsilastirmasi.baslangicTarihi)} · {" "}
                    {bistKarsilastirmasi.baslangicSeviyesi.toLocaleString("tr-TR")}
                  </Link>
                ) : (
                  <strong>
                    {tarihMetni(bistKarsilastirmasi.baslangicTarihi)} · {" "}
                    {bistKarsilastirmasi.baslangicSeviyesi.toLocaleString("tr-TR")}
                    {" "}(tarihsel kapanış kaydı)
                  </strong>
                )}
                . Bitiş değeri {" "}
                <Link
                  href={`/borsa/gunluk-borsa-ozeti/${bistKarsilastirmasi.bitisSlug}`}
                  prefetch={false}
                  className="font-semibold underline underline-offset-2"
                >
                  {tarihMetni(bistKarsilastirmasi.bitisTarihi)} · {" "}
                  {bistKarsilastirmasi.bitisSeviyesi.toLocaleString("tr-TR")}
                </Link>
                . Getiri farkı, halka arz getirisinden aynı dönemdeki BIST 100
                getirisinin çıkarılmasıyla hesaplandı.
              </p>
            )}
          </div>
        )}

        <div className="mt-6 grid gap-4 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <h3 className="text-base font-bold text-slate-900">Süreç Haberleri</h3>
            {ilgiliHaberler.length > 0 ? (
              <div className="mt-3 grid gap-2 sm:grid-cols-2">
                {ilgiliHaberler.map((haber) => (
                  <Link
                    key={haber.href}
                    href={haber.href}
                    prefetch={false}
                    className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 transition hover:border-blue-300 hover:bg-blue-50"
                  >
                    {tarihMetni(haber.publishedAt) && (
                      <time
                        dateTime={haber.publishedAt}
                        className="text-[11px] font-medium text-slate-500"
                      >
                        {tarihMetni(haber.publishedAt)}
                      </time>
                    )}
                    <p className="mt-1 line-clamp-2 text-sm font-semibold leading-5 text-slate-800">
                      {haber.title}
                    </p>
                  </Link>
                ))}
              </div>
            ) : (
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Yeni süreç haberleri yayımlandıkça bu alana otomatik eklenecek.
              </p>
            )}
          </div>

          <Link
            href="/halka-arz/tavan-serisi"
            prefetch={false}
            className="inline-flex items-center justify-center rounded-xl border border-blue-600 bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            Tüm halka arz performansları
          </Link>
        </div>

        <p className="mt-5 border-t border-slate-200 pt-4 text-xs leading-5 text-slate-500">
          Performans verileri anlık fiyat değildir; {tarihMetni(halkaArzKapanisTarihi)}
          {" "}gün sonu kapanışına göre hesaplanır. BIST 100 bitiş değeri günlük
          borsa özetinden, eski dönem başlangıçları gerektiğinde kayıtlı tarihsel
          kapanışlardan alınır. Sonuçlanmamış aşamalar resmî açıklamalar geldikçe
          güncellenir.
        </p>
      </div>
    </section>
  );
}
