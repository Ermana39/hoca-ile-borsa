import Link from "next/link";
import {
  getHalkaArzSonucu,
  halkaArzKapanisTarihi,
  halkaArzSonuclari,
  type HalkaArzSonucu,
} from "@/data/halka-arz-sonuclari";
import { getHalkaArzKarneEkBilgisi } from "@/data/halka-arz-karne-ek-bilgileri";
import {
  getHalkaArzBistKarsilastirmasi,
  getHalkaArzGetirisi,
  puanMetni,
  yuzdeMetni,
} from "@/lib/halka-arz-performans";
import {
  getOnayliHalkaArzKaydiByKod,
  tahsisatMetni,
  type TahsisatGirdi,
} from "@/lib/halka-arz";
import { getAllNews, type NewsItem } from "@/lib/haberler";
import TaslakOnayKarsilastirmasi from "@/components/TaslakOnayKarsilastirmasi";

type HalkaArzKarnesiProps = {
  sirketAdi: string;
  kod: string;
  talepTarihi?: string;
  halkaArzFiyati?: string;
  dagitimYontemi?: string;
  toplamPay?: string;
  araciKurum?: string;
  tahsisat?: TahsisatGirdi[];
  katilimKurumlari?: string[];
  katilimNotu?: string;
  katilimKaynakHref?: string;
  bireyselTahsisatLotu?: number;
  taslakBasvuruTarihi?: string;
  taslakKaynakHref?: string;
  className?: string;
};

type SurecDurumu = "tamamlandi" | "guncel" | "bekleniyor";

type SurecAdimi = {
  baslik: string;
  durum: SurecDurumu;
  deger: string;
  aciklama: string;
  href?: string;
  linkEtiketi?: string;
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

function normalizeMetin(value: string) {
  return value
    .toLocaleLowerCase("tr-TR")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/ı/g, "i");
}

function fiyatMetni(value?: string) {
  if (!value) return "Açıklanmadı";
  if (/TL/i.test(value)) return value;

  const sayi = piyasaSayisi(value);
  if (sayi === undefined) return value;

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

function lotSayisi(value?: string | number | null) {
  if (typeof value === "number") {
    return Number.isFinite(value) ? value : undefined;
  }
  if (!value) return undefined;

  const eslesme = value.match(/\d[\d.,\s]*/);
  if (!eslesme) return undefined;
  const sayi = Number(eslesme[0].replace(/[.,\s]/g, ""));
  return Number.isFinite(sayi) ? sayi : undefined;
}

function piyasaSayisi(value?: string | null) {
  if (!value) return undefined;
  const eslesme = value.match(/\d[\d.,]*/);
  if (!eslesme) return undefined;

  let temiz = eslesme[0];
  const sonVirgul = temiz.lastIndexOf(",");
  const sonNokta = temiz.lastIndexOf(".");

  if (sonVirgul >= 0 && sonNokta >= 0) {
    temiz =
      sonVirgul > sonNokta
        ? temiz.replace(/\./g, "").replace(",", ".")
        : temiz.replace(/,/g, "");
  } else if (sonVirgul >= 0) {
    temiz = temiz.replace(",", ".");
  } else if ((temiz.match(/\./g) || []).length > 1) {
    temiz = temiz.replace(/\./g, "");
  }

  const sayi = Number(temiz);
  return Number.isFinite(sayi) ? sayi : undefined;
}

function lotMetni(value?: number, basamak = 0) {
  if (value === undefined || !Number.isFinite(value)) return "Hesaplanamadı";
  return `${value.toLocaleString("tr-TR", {
    minimumFractionDigits: basamak,
    maximumFractionDigits: basamak,
  })} Lot`;
}

function tutarMetni(value?: number) {
  if (value === undefined || !Number.isFinite(value)) return "";
  return `${value.toLocaleString("tr-TR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })} TL`;
}

function katilimciDegeri(value: string) {
  return lotSayisi(value) ?? 0;
}

function medyanKatilimciSayisi() {
  const sayilar = halkaArzSonuclari
    .map((item) => katilimciDegeri(item.katilimciSayisi))
    .filter((value) => value > 0)
    .sort((a, b) => a - b);
  if (sayilar.length === 0) return 0;

  const orta = Math.floor(sayilar.length / 2);
  return sayilar.length % 2 === 0
    ? Math.round((sayilar[orta - 1] + sayilar[orta]) / 2)
    : sayilar[orta];
}

const MEDYAN_KATILIMCI = medyanKatilimciSayisi();

function bireyselTahsisatOrani(sonuc?: HalkaArzSonucu) {
  if (!sonuc) return undefined;
  const eslesme = sonuc.dagitimSekli.match(/%\s*(\d+(?:[.,]\d+)?)/);
  if (!eslesme) return undefined;
  return piyasaSayisi(eslesme[1]);
}

function bireyselTahsisatHavuzu({
  tahsisat,
  toplamPay,
  dagitimYontemi,
  sonuc,
  elleGirilenLot,
}: {
  tahsisat: TahsisatGirdi[];
  toplamPay?: string;
  dagitimYontemi?: string;
  sonuc?: HalkaArzSonucu;
  elleGirilenLot?: number;
}) {
  if (elleGirilenLot && elleGirilenLot > 0) return elleGirilenLot;

  const yapisalLotlar = tahsisat.flatMap((item) => {
    if (typeof item === "string") return [];
    const grup = normalizeMetin(item.grup);
    const bireysel = grup.includes("bireysel");
    const farkliGrup = grup.includes("yuksek") || grup.includes("kurumsal");
    const lot = lotSayisi(item.lot);
    return bireysel && !farkliGrup && lot ? [lot] : [];
  });
  if (yapisalLotlar.length > 0) {
    return yapisalLotlar.reduce((toplam, value) => toplam + value, 0);
  }

  const toplamLot = lotSayisi(toplamPay);
  if (!toplamLot) return undefined;

  const dagitimMetni = normalizeMetin(
    `${dagitimYontemi || ""} ${sonuc?.dagitimSekli || ""}`
  );
  if (dagitimMetni.includes("tamamen esit") || dagitimMetni.includes("tamami esit")) {
    return toplamLot;
  }

  const oran = bireyselTahsisatOrani(sonuc);
  return oran === undefined ? undefined : toplamLot * (oran / 100);
}

function haberBul(
  haberler: NewsItem[],
  kontrol: (metin: string, haber: NewsItem) => boolean
) {
  return haberler.find((haber) =>
    kontrol(normalizeMetin(`${haber.title} ${haber.href}`), haber)
  );
}

function hrefIleHaber(haberler: NewsItem[], href?: string) {
  if (!href) return undefined;
  return haberler.find((haber) => haber.href === href);
}

function haberTarihliDeger(haber: NewsItem | undefined, varsayilan: string) {
  const tarih = tarihMetni(haber?.publishedAt);
  return tarih || varsayilan;
}

function tavanSerisiMetni(sonuc: HalkaArzSonucu) {
  const seri = sonuc.tavanSerisi;
  if (!seri) return "Tavan serisi kaydı bekleniyor";
  if (seri.durum === "olusmadi") return "İlk tavan serisi oluşmadı";
  return `${seri.gunSayisi} işlem günü${
    seri.durum === "devam-ediyor" ? " · devam ediyor" : ""
  }`;
}

export default function HalkaArzKarnesi({
  sirketAdi,
  kod,
  talepTarihi,
  halkaArzFiyati,
  dagitimYontemi,
  toplamPay,
  araciKurum,
  tahsisat,
  katilimKurumlari = [],
  katilimNotu,
  katilimKaynakHref,
  bireyselTahsisatLotu,
  taslakBasvuruTarihi,
  taslakKaynakHref,
  className = "",
}: HalkaArzKarnesiProps) {
  const hisseKodu = kod.trim().toUpperCase();
  const onayliKayit = getOnayliHalkaArzKaydiByKod(hisseKodu);
  const veri = onayliKayit?.veri;
  const ekBilgi = getHalkaArzKarneEkBilgisi(hisseKodu);
  const sonuc = getHalkaArzSonucu(hisseKodu);

  const talepTarihiMetni =
    talepTarihi || veri?.ozet.halkaArzTarihi || ekBilgi?.talepTarihi;
  const halkaArzFiyatiMetni =
    halkaArzFiyati || veri?.ozet.fiyatAralik || sonuc?.arzFiyati;
  const dagitimYontemiMetni =
    dagitimYontemi || veri?.ozet.dagitimYontemi || sonuc?.dagitimSekli;
  const toplamPayMetni = toplamPay || veri?.ozet.pay || veri?.toplamPay;
  const araciKurumMetni = araciKurum || veri?.ozet.araciKurum || sonuc?.konsorsiyum;
  const tahsisatKayitlari = tahsisat || veri?.tahsisat || [];
  const tahsisatMetinleri = tahsisatKayitlari
    .map(tahsisatMetni)
    .filter((item) => item.trim() !== "");
  const katilimOzeti =
    katilimNotu || ekBilgi?.katilimOzeti || araciKurumMetni || "Duyuru bekleniyor";
  const katilimHref = katilimKaynakHref || ekBilgi?.katilimKaynakHref;

  const ilgiliHaberler = getAllNews().filter(
    (item) =>
      item.category === "halka-arz" &&
      item.ilgiliHisseler?.some(
        (hisse) => hisse.toUpperCase() === hisseKodu
      )
  );
  const taslakHaberi = haberBul(ilgiliHaberler, (metin) =>
    metin.includes("taslak izahname")
  );
  const spkHaberi = haberBul(
    ilgiliHaberler,
    (metin) => metin.includes("spk") && metin.includes("onay")
  );
  const talepHaberi = haberBul(
    ilgiliHaberler,
    (metin) =>
      metin.includes("talep toplama") || metin.includes("izahnamesi yayinlandi")
  );
  const dagitimHaberi =
    hrefIleHaber(ilgiliHaberler, sonuc?.dagitimSonucu?.kaynakHref) ||
    haberBul(
      ilgiliHaberler,
      (metin) => metin.includes("dagitim") && metin.includes("sonuc")
    );
  const ilkIslemHaberi = haberBul(
    ilgiliHaberler,
    (metin) =>
      metin.includes("isleme basliyor") || metin.includes("ilk islem gun")
  );
  const dagitimOzetDegeri = (anahtarlar: string[]) =>
    veri?.dagitimSonuclari?.ozetKartlari?.find((item) => {
      const label = normalizeMetin(item.label);
      return anahtarlar.some((anahtar) => label.includes(anahtar));
    })?.value;
  const veriDagitimYatirimci = dagitimOzetDegeri([
    "dagitim yapilan yatirimci",
    "yatirimci",
  ]);
  const veriKisiBasiLot = dagitimOzetDegeri(["bireysel en fazla", "kisi basi"]);
  const veriToplamDagitim = dagitimOzetDegeri([
    "toplam dagitim",
    "dagitilan pay",
  ]);
  const dagitimSonucuTamamlandi = Boolean(sonuc || veri?.dagitimSonuclari);

  const hisseGetirisi = sonuc ? getHalkaArzGetirisi(sonuc) : undefined;
  const marj =
    hisseGetirisi === undefined ? "" : yuzdeMetni(hisseGetirisi, 0);
  const bistKarsilastirmasi = sonuc
    ? getHalkaArzBistKarsilastirmasi(sonuc)
    : undefined;

  const bireyselHavuz = bireyselTahsisatHavuzu({
    tahsisat: tahsisatKayitlari,
    toplamPay: toplamPayMetni,
    dagitimYontemi: dagitimYontemiMetni,
    sonuc,
    elleGirilenLot: bireyselTahsisatLotu,
  });
  const arzFiyatiSayisi = piyasaSayisi(halkaArzFiyatiMetni);
  const tahminiLot =
    bireyselHavuz && MEDYAN_KATILIMCI > 0
      ? Math.max(1, Math.floor(bireyselHavuz / MEDYAN_KATILIMCI))
      : undefined;
  const tahminiTutar =
    tahminiLot !== undefined && arzFiyatiSayisi !== undefined
      ? tahminiLot * arzFiyatiSayisi
      : undefined;

  const gerceklesenBireyselHavuz =
    lotSayisi(sonuc?.dagitimSonucu?.bireyselDagitilanLot) || bireyselHavuz;
  const gerceklesenBireyselYatirimci =
    lotSayisi(sonuc?.dagitimSonucu?.bireyselYatirimciSayisi) ||
    (sonuc ? katilimciDegeri(sonuc.katilimciSayisi) : undefined);
  const gerceklesenOrtalama =
    gerceklesenBireyselHavuz && gerceklesenBireyselYatirimci
      ? gerceklesenBireyselHavuz / gerceklesenBireyselYatirimci
      : undefined;
  const gerceklesenLotMetni = sonuc?.dagitimSonucu?.kisiBasiLot
    ? sonuc.dagitimSonucu.kisiBasiLot
    : veriKisiBasiLot
      ? veriKisiBasiLot
    : gerceklesenOrtalama !== undefined
      ? `Yaklaşık ${lotMetni(gerceklesenOrtalama, 1)} ortalama`
      : sonuc
        ? "Kesin kişi başı kayıt bulunmuyor"
        : "Dağıtım sonucu bekleniyor";
  const gerceklesenTutarMetni = sonuc?.dagitimSonucu?.kisiBasiTutar
    ? sonuc.dagitimSonucu.kisiBasiTutar
    : gerceklesenOrtalama !== undefined && arzFiyatiSayisi !== undefined
      ? `${tutarMetni(gerceklesenOrtalama * arzFiyatiSayisi)} ortalama`
      : "";

  const surecAdimlari: SurecAdimi[] = [
    {
      baslik: "Taslak Başvurusu",
      durum: "tamamlandi",
      deger:
        taslakBasvuruTarihi ||
        ekBilgi?.taslakBasvuruTarihi ||
        haberTarihliDeger(taslakHaberi, "Taslak süreç tamamlandı"),
      aciklama:
        "Onay öncesi taslak aşaması tamamlandı; yaşayan kayıt onaylı izahname sayfasında devam ediyor.",
      href: taslakKaynakHref || ekBilgi?.taslakKaynakHref || taslakHaberi?.href,
      linkEtiketi: "Taslak kaynağı",
    },
    {
      baslik: "SPK Onayı",
      durum: "tamamlandi",
      deger: haberTarihliDeger(spkHaberi, "İzahname onaylandı"),
      aciklama: "SPK onayı sonrasında şirket onaylı izahnameler bölümüne alındı.",
      href: spkHaberi?.href,
      linkEtiketi: "Onay haberini oku",
    },
    {
      baslik: "Talep Toplama",
      durum: sonuc ? "tamamlandi" : talepTarihiMetni ? "guncel" : "bekleniyor",
      deger: talepTarihiMetni || (sonuc ? "Tamamlandı" : "Tarih bekleniyor"),
      aciklama: sonuc
        ? "Talep toplama süreci tamamlandı."
        : talepTarihiMetni
          ? "Talep takvimi ve başvuru kanalları açıklandı."
          : "Satış duyurusu ile kesin tarih açıklanacak.",
      href: talepHaberi?.href || katilimHref,
      linkEtiketi: "Talep ayrıntıları",
    },
    {
      baslik: "Dağıtım Sonucu",
      durum: dagitimSonucuTamamlandi ? "tamamlandi" : "bekleniyor",
      deger: sonuc
        ? `${sonuc.katilimciSayisi} yatırımcı`
        : veriDagitimYatirimci
          ? `${veriDagitimYatirimci} yatırımcı`
          : "Sonuç bekleniyor",
      aciklama: sonuc
        ? sonuc.dagitimSonucu?.aciklama || sonuc.dagitimSekli
        : veri?.dagitimSonuclari?.aciklama || veri?.ozet.dagitimYontemi ||
          "Dağıtım sonucu açıklandığında otomatik tamamlanacak.",
      href:
        sonuc?.dagitimSonucu?.kaynakHref ||
        dagitimHaberi?.href ||
        veri?.dagitimSonuclari?.kaynakHref,
      linkEtiketi: "Dağıtım kaynağı",
    },
    {
      baslik: "Borsada İlk İşlem",
      durum: sonuc ? "tamamlandi" : "bekleniyor",
      deger: sonuc?.islemTarihi || "Tarih bekleniyor",
      aciklama: sonuc
        ? `${hisseKodu} paylarının Borsa İstanbul'daki ilk işlem tarihi.`
        : "Dağıtım sonrasında Borsa İstanbul tarafından açıklanacak.",
      href: ilkIslemHaberi?.href,
      linkEtiketi: "İlk işlem haberi",
    },
    {
      baslik: "Tavan ve Performans",
      durum: sonuc ? "guncel" : "bekleniyor",
      deger: sonuc
        ? `${tavanSerisiMetni(sonuc)} · Halka arz getirisi ${marj || "hesaplanamadı"}`
        : "İşlem sonrası başlayacak",
      aciklama: sonuc
        ? `Halka arz fiyatı ${fiyatMetni(sonuc.arzFiyati)}, son kayıtlı kapanış ${fiyatMetni(
            sonuc.guncelFiyat
          )}. Tavan serisi ve marj verisi performans tablosundan izlenir.`
        : "İlk tavan serisi ve halka arz fiyatına göre getiri işlem başladıktan sonra izlenecek.",
      href: "/halka-arz/tavan-serisi",
      linkEtiketi: "Tavan serisi tablosunu aç",
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
        { label: "Arz Fiyatı", value: fiyatMetni(halkaArzFiyatiMetni) },
        { label: "Talep Toplama", value: talepTarihiMetni || "Tarih bekleniyor" },
        { label: "Dağıtım", value: dagitimYontemiMetni || "Açıklanmadı" },
        { label: "Toplam Pay", value: toplamPayMetni || "Açıklanmadı" },
      ];

  const performansKartlari = sonuc
    ? [
        {
          label: "İlk Tavan Serisi",
          value: tavanSerisiMetni(sonuc),
        },
        {
          label: "Halka Arz Getirisi",
          value: bistKarsilastirmasi
            ? yuzdeMetni(bistKarsilastirmasi.hisseGetirisi)
            : marj || undefined,
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
              {hisseKodu} Halka Arz Karnesi
            </h2>
            <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-300">
              {sirketAdi} halka arzının taslak aşamasından dağıtım sonucuna ve
              işlem sonrası performansa uzanan süreci tek bölümde izlenir.
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

        <div className="mt-6 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
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
                {adim.href && (
                  <Link
                    href={adim.href}
                    prefetch={false}
                    className="mt-3 inline-flex text-xs font-bold text-blue-700 underline decoration-blue-300 underline-offset-4 hover:text-blue-900"
                  >
                    {adim.linkEtiketi || "Kaynağı aç"}
                  </Link>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-2">
          <section className="rounded-2xl border border-indigo-200 bg-indigo-50/60 p-4">
            <h3 className="text-sm font-bold text-indigo-950">
              Talep Kanalları ve Aracı Kurumlar
            </h3>
            <p className="mt-2 text-sm font-semibold leading-6 text-slate-800">
              {katilimOzeti}
            </p>
            {araciKurumMetni && araciKurumMetni !== katilimOzeti && (
              <p className="mt-2 text-xs leading-5 text-slate-600">
                İzahnamede yer alan aracı kurum: {araciKurumMetni}
              </p>
            )}
            {katilimKurumlari.length > 0 && (
              <details className="mt-3 rounded-xl border border-indigo-200 bg-white p-3">
                <summary className="cursor-pointer text-xs font-bold text-indigo-800">
                  Tüm konsorsiyum üyelerini göster ({katilimKurumlari.length})
                </summary>
                <div className="mt-3 flex flex-wrap gap-2">
                  {katilimKurumlari.map((kurum) => (
                    <span
                      key={kurum}
                      className="rounded-full bg-indigo-50 px-2.5 py-1 text-[11px] font-semibold text-indigo-900 ring-1 ring-inset ring-indigo-200"
                    >
                      {kurum}
                    </span>
                  ))}
                </div>
              </details>
            )}
            {katilimHref && (
              <Link
                href={katilimHref}
                prefetch={false}
                className="mt-3 inline-flex text-xs font-bold text-indigo-700 underline decoration-indigo-300 underline-offset-4 hover:text-indigo-900"
              >
                Katılım kanallarının kaynağını incele
              </Link>
            )}
          </section>

          <section className="rounded-2xl border border-amber-200 bg-amber-50/60 p-4">
            <h3 className="text-sm font-bold text-amber-950">
              Tahsisat ve Dağıtım Yapısı
            </h3>
            {tahsisatMetinleri.length > 0 ? (
              <div className="mt-3 space-y-2">
                {tahsisatMetinleri.slice(0, 5).map((item) => (
                  <p
                    key={item}
                    className="rounded-xl border border-amber-100 bg-white px-3 py-2 text-xs font-medium leading-5 text-slate-700"
                  >
                    {item}
                  </p>
                ))}
              </div>
            ) : (
              <p className="mt-2 text-sm leading-6 text-slate-700">
                {dagitimYontemiMetni || "Tahsisat kırılımı henüz açıklanmadı."}
              </p>
            )}
          </section>
        </div>

        <section className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50/60 p-4">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h3 className="text-sm font-bold text-emerald-950">
                Tahmini ve Gerçekleşen Lot Karşılaştırması
              </h3>
              <p className="mt-1 text-xs leading-5 text-slate-600">
                Tahmin, bireysel tahsisat havuzunun 2026 halka arzlarındaki medyan
                katılımcı sayısına bölünmesiyle hesaplanır.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="w-fit rounded-full bg-white px-3 py-1 text-[11px] font-bold text-emerald-800 ring-1 ring-inset ring-emerald-200">
                Medyan katılım: {MEDYAN_KATILIMCI.toLocaleString("tr-TR")}
              </span>
              <Link
                href={`/halka-arz/talep-hesapla#halka-arz=${hisseKodu}`}
                prefetch={false}
                className="w-fit rounded-full bg-emerald-700 px-3 py-1 text-[11px] font-bold text-white transition hover:bg-emerald-800"
              >
                3 lot senaryosunu hesapla
              </Link>
            </div>
          </div>

          <div className="mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            <div className="rounded-xl bg-white p-3">
              <p className="text-xs font-semibold text-slate-500">Bireysel Havuz</p>
              <p className="mt-1 font-bold text-slate-900">{lotMetni(bireyselHavuz)}</p>
              <p className="mt-1 text-[11px] leading-4 text-slate-500">
                Planlanan bireysel tahsisat
              </p>
            </div>
            <div className="rounded-xl bg-white p-3">
              <p className="text-xs font-semibold text-slate-500">Tahmini Lot</p>
              <p className="mt-1 font-bold text-slate-900">{lotMetni(tahminiLot)}</p>
              {tahminiTutar !== undefined && (
                <p className="mt-1 text-[11px] font-medium text-slate-500">
                  Yaklaşık {tutarMetni(tahminiTutar)}
                </p>
              )}
            </div>
            <div className="rounded-xl bg-white p-3">
              <p className="text-xs font-semibold text-slate-500">Gerçekleşen Lot</p>
              <p className="mt-1 font-bold text-slate-900">{gerceklesenLotMetni}</p>
              {gerceklesenTutarMetni && (
                <p className="mt-1 text-[11px] font-medium text-slate-500">
                  {gerceklesenTutarMetni}
                </p>
              )}
            </div>
            <div className="rounded-xl bg-white p-3">
              <p className="text-xs font-semibold text-slate-500">
                Dağıtılan Toplam Pay
              </p>
              <p className="mt-1 font-bold text-slate-900">
                {sonuc?.dagitimSonucu?.toplamDagitilanLot ||
                  veriToplamDagitim ||
                  (sonuc ? toplamPayMetni || "Kayıt bekleniyor" : "Sonuç bekleniyor")}
              </p>
              {(sonuc || veriDagitimYatirimci) && (
                <p className="mt-1 text-[11px] font-medium text-slate-500">
                  {sonuc?.katilimciSayisi || veriDagitimYatirimci} yatırımcı
                </p>
              )}
            </div>
          </div>

          {sonuc && !sonuc.dagitimSonucu?.kisiBasiLot && gerceklesenOrtalama !== undefined && (
            <p className="mt-3 text-[11px] leading-5 text-slate-600">
              Gerçekleşen lot alanındaki yaklaşık değer, kayıtlı bireysel havuzun
              yatırımcı sayısına bölünmesiyle bulunan matematiksel ortalamadır;
              resmî azami kişi başı lot olarak yorumlanmamalıdır.
            </p>
          )}
        </section>

        {performansKartlari.length > 0 && (
          <div className="mt-6 rounded-2xl border border-blue-200 bg-blue-50 p-4">
            <h3 className="text-sm font-bold text-blue-950">
              Güncel Performans ve BIST 100 Karşılaştırması
            </h3>
            <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {performansKartlari.map((item) => (
                <div key={item.label} className="rounded-xl bg-white p-3">
                  <p className="text-xs font-semibold text-slate-500">{item.label}</p>
                  <p className="mt-1 font-bold text-slate-900">{item.value}</p>
                </div>
              ))}
            </div>
            {sonuc?.tavanSerisi?.aciklama && (
              <p className="mt-3 text-xs leading-5 text-blue-900">
                {sonuc.tavanSerisi.aciklama} Tavan serisi verisi {" "}
                {tarihMetni(sonuc.tavanSerisi.veriTarihi)} kapanışı itibarıyladır.
              </p>
            )}
            {bistKarsilastirmasi && (
              <p className="mt-4 text-xs leading-6 text-blue-900">
                BIST 100 başlangıcı, ilk işlem gününden önceki son seans kapanışıdır: {" "}
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

        {onayliKayit && (
          <TaslakOnayKarsilastirmasi
            slug={onayliKayit.slug}
            onayliVeri={onayliKayit.veri}
          />
        )}

        <div className="mt-6 grid gap-4 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <h3 className="text-base font-bold text-slate-900">Süreç Haberleri</h3>
            {ilgiliHaberler.length > 0 ? (
              <div className="mt-3 grid gap-2 sm:grid-cols-2">
                {ilgiliHaberler.slice(0, 6).map((haber) => (
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
          Lot tahmini kesin dağıtım sonucu değildir. Performans verileri anlık
          fiyat değildir; {tarihMetni(halkaArzKapanisTarihi)} gün sonu kapanışına
          göre hesaplanır. BIST 100 bitiş değeri günlük borsa özetinden, eski dönem
          başlangıçları gerektiğinde kayıtlı tarihsel kapanışlardan alınır.
        </p>
      </div>
    </section>
  );
}
