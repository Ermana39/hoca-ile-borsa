import type { KapEtkiMetrigi } from "@/lib/haber-kayitlari";

const paraBirimiEtiketi: Record<string, string> = {
  TRY: "TL",
  USD: "USD",
  EUR: "EUR",
  GBP: "GBP",
};

const birimEtiketi: Record<string, string> = {
  YUZDE: "%",
  ADET: "adet",
  AY: "ay",
  YIL: "yıl",
  MW: "MW",
  MWH: "MWh",
  TON: "ton",
  HEKTAR: "hektar",
  KUTU: "kutu",
  DWT: "DWT",
  HISSE: "hisse",
};

const sayiBicimleyici = new Intl.NumberFormat("tr-TR", {
  minimumFractionDigits: 0,
  maximumFractionDigits: 3,
});

const yuzdeBicimleyici = new Intl.NumberFormat("tr-TR", {
  minimumFractionDigits: 0,
  maximumFractionDigits: 2,
});

type HamMetrik = Record<string, unknown>;

export type KapEtkiDetayi = {
  etiket: string;
  deger: string;
};

export type KapEtkiMetrigiGorunumu = {
  baslik: string;
  sonucEtiketi: string;
  sonuc: string;
  ikincilSonuc?: string;
  detaylar: KapEtkiDetayi[];
  formul?: string;
  aciklama?: string;
};

function sonluSayi(deger: unknown): deger is number {
  return typeof deger === "number" && Number.isFinite(deger);
}

function doluMetin(deger: unknown): deger is string {
  return typeof deger === "string" && deger.trim().length > 0;
}

function eksikBilgiMetni(deger: string): boolean {
  return /veri bekleniyor|bilgi yok|veri yok|henüz (?:açıklanmadı|paylaşılmadı)|açıklanmadı|paylaşılmadı|hesaplanamıyor|belirtilmedi/i.test(
    deger
  );
}

function yuzdeBicimle(deger: number): string {
  return `%${yuzdeBicimleyici.format(deger)}`;
}

function tutarBicimle(deger: number, paraBirimi: string): string | null {
  const etiket = paraBirimiEtiketi[paraBirimi];
  if (!etiket || !Number.isFinite(deger)) return null;

  const mutlakDeger = Math.abs(deger);
  if (mutlakDeger >= 1_000_000_000) {
    return `${sayiBicimleyici.format(deger / 1_000_000_000)} milyar ${etiket}`;
  }
  if (mutlakDeger >= 1_000_000) {
    return `${sayiBicimleyici.format(deger / 1_000_000)} milyon ${etiket}`;
  }

  return `${sayiBicimleyici.format(deger)} ${etiket}`;
}

function birimliSayiBicimle(deger: number, birim: unknown): string {
  const hamBirim = doluMetin(birim) ? birim.trim().toUpperCase() : "";
  const tutar = tutarBicimle(deger, hamBirim);
  if (tutar) return tutar;
  if (hamBirim === "YUZDE") return yuzdeBicimle(deger);

  const etiket = birimEtiketi[hamBirim] ?? (hamBirim || undefined);
  return etiket
    ? `${sayiBicimleyici.format(deger)} ${etiket}`
    : sayiBicimleyici.format(deger);
}

function tarihBicimle(tarih: string): string {
  const eslesme = tarih.match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (!eslesme) return tarih;
  return `${eslesme[3]}.${eslesme[2]}.${eslesme[1]}`;
}

function oranMetrigiGorunumu(
  metrik: HamMetrik
): KapEtkiMetrigiGorunumu | null {
  if (
    !sonluSayi(metrik.olayTutari) ||
    !sonluSayi(metrik.referansTutari) ||
    metrik.referansTutari === 0 ||
    !doluMetin(metrik.olayParaBirimi) ||
    !doluMetin(metrik.referansParaBirimi) ||
    !paraBirimiEtiketi[metrik.olayParaBirimi] ||
    !paraBirimiEtiketi[metrik.referansParaBirimi]
  ) {
    return null;
  }

  const ayniParaBirimi = metrik.olayParaBirimi === metrik.referansParaBirimi;
  const kurDonusumu =
    metrik.kurDonusumu && typeof metrik.kurDonusumu === "object"
      ? (metrik.kurDonusumu as HamMetrik)
      : null;
  const kur = ayniParaBirimi
    ? 1
    : kurDonusumu && sonluSayi(kurDonusumu.birimBasina)
      ? kurDonusumu.birimBasina
      : null;

  if (kur === null) return null;

  const donusturulmusTutar = metrik.olayTutari * kur;
  const oran = (donusturulmusTutar / metrik.referansTutari) * 100;
  if (!Number.isFinite(oran)) return null;

  const olayTutari = tutarBicimle(
    metrik.olayTutari,
    metrik.olayParaBirimi
  );
  const referansTutari = tutarBicimle(
    metrik.referansTutari,
    metrik.referansParaBirimi
  );
  if (!olayTutari || !referansTutari) return null;

  const detaylar: KapEtkiDetayi[] = [
    {
      etiket: doluMetin(metrik.olayEtiketi)
        ? metrik.olayEtiketi
        : "Açıklanan tutar",
      deger: olayTutari,
    },
    {
      etiket: doluMetin(metrik.referansEtiketi)
        ? metrik.referansEtiketi
        : "Karşılaştırma tutarı",
      deger: referansTutari,
    },
  ];

  if (!ayniParaBirimi && kurDonusumu) {
    const kurTuru = doluMetin(kurDonusumu.tur) ? kurDonusumu.tur : "kur";
    const kurTarihi = doluMetin(kurDonusumu.tarih)
      ? `, ${tarihBicimle(kurDonusumu.tarih)}`
      : "";
    detaylar.push({
      etiket: "Kullanılan kur",
      deger: `1 ${paraBirimiEtiketi[metrik.olayParaBirimi]} = ${sayiBicimleyici.format(kur)} ${paraBirimiEtiketi[metrik.referansParaBirimi]} (${kurTuru}${kurTarihi})`,
    });
  }

  if (doluMetin(metrik.referansDonemi)) {
    detaylar.push({
      etiket: "Referans dönemi",
      deger: metrik.referansDonemi,
    });
  }

  return {
    baslik: doluMetin(metrik.baslik) ? metrik.baslik : "Sayısal etki",
    sonucEtiketi: "Büyüklük oranı",
    sonuc: yuzdeBicimle(oran),
    detaylar,
    formul: ayniParaBirimi
      ? "Açıklanan tutar / karşılaştırma tutarı × 100"
      : "Kur dönüşümlü tutar / karşılaştırma tutarı × 100",
    aciklama: doluMetin(metrik.aciklama) ? metrik.aciklama : undefined,
  };
}

function genelMetrikGorunumu(
  metrik: HamMetrik
): KapEtkiMetrigiGorunumu | null {
  const detaylar: KapEtkiDetayi[] = [];
  let sonuc: string | null = null;
  let sonucEtiketi = "Açıklanan değer";

  if (sonluSayi(metrik.oran)) {
    sonuc = yuzdeBicimle(metrik.oran);
    sonucEtiketi = "Açıklanan oran";
  } else if (doluMetin(metrik.deger) && !eksikBilgiMetni(metrik.deger)) {
    sonuc = metrik.deger;
  } else if (sonluSayi(metrik.deger)) {
    sonuc = sayiBicimleyici.format(metrik.deger);
  } else if (sonluSayi(metrik.olayTutari)) {
    sonuc = birimliSayiBicimle(metrik.olayTutari, metrik.olayParaBirimi);
    sonucEtiketi = doluMetin(metrik.olayEtiketi)
      ? metrik.olayEtiketi
      : "Açıklanan değer";
  }

  if (!sonuc || /(?:NaN|undefined|null)/i.test(sonuc)) return null;

  if (
    sonluSayi(metrik.referansTutari) &&
    doluMetin(metrik.referansEtiketi)
  ) {
    detaylar.push({
      etiket: metrik.referansEtiketi,
      deger: birimliSayiBicimle(
        metrik.referansTutari,
        metrik.referansParaBirimi
      ),
    });
  }
  if (doluMetin(metrik.referansDonemi)) {
    detaylar.push({
      etiket: "Referans dönemi",
      deger: metrik.referansDonemi,
    });
  }

  return {
    baslik: doluMetin(metrik.baslik) ? metrik.baslik : "Açıklanan veri",
    sonucEtiketi,
    sonuc,
    detaylar: detaylar.filter(
      (detay) => !/(?:NaN|undefined|null)/i.test(detay.deger)
    ),
    aciklama: doluMetin(metrik.aciklama) ? metrik.aciklama : undefined,
  };
}

export function kapEtkiMetrigiGorunumu(
  metrik: KapEtkiMetrigi
): KapEtkiMetrigiGorunumu | null {
  const hamMetrik = metrik as unknown as HamMetrik;
  if (hamMetrik.tur === "hesaplanamadi") return null;

  if (
    hamMetrik.tur === "kapasite-artisi" &&
    sonluSayi(hamMetrik.mevcutKapasite) &&
    hamMetrik.mevcutKapasite > 0 &&
    sonluSayi(hamMetrik.ekKapasite) &&
    doluMetin(hamMetrik.birim)
  ) {
    const artisOrani =
      (hamMetrik.ekKapasite / hamMetrik.mevcutKapasite) * 100;
    const yeniToplam = hamMetrik.mevcutKapasite + hamMetrik.ekKapasite;

    return {
      baslik: doluMetin(hamMetrik.baslik)
        ? hamMetrik.baslik
        : "Kapasite artışı",
      sonucEtiketi: "Kapasite artışı",
      sonuc: yuzdeBicimle(artisOrani),
      ikincilSonuc: `Yeni toplam: ${sayiBicimleyici.format(yeniToplam)} ${hamMetrik.birim}`,
      detaylar: [
        {
          etiket: "Mevcut kapasite",
          deger: `${sayiBicimleyici.format(hamMetrik.mevcutKapasite)} ${hamMetrik.birim}`,
        },
        {
          etiket: "Eklenecek kapasite",
          deger: `${sayiBicimleyici.format(hamMetrik.ekKapasite)} ${hamMetrik.birim}`,
        },
      ],
      formul: "Eklenecek kapasite / mevcut kapasite × 100",
      aciklama: doluMetin(hamMetrik.aciklama)
        ? hamMetrik.aciklama
        : undefined,
    };
  }

  if (
    hamMetrik.tur === "bedelsiz" &&
    sonluSayi(hamMetrik.eskiSermaye) &&
    hamMetrik.eskiSermaye > 0 &&
    sonluSayi(hamMetrik.yeniSermaye) &&
    hamMetrik.yeniSermaye > hamMetrik.eskiSermaye &&
    doluMetin(hamMetrik.paraBirimi)
  ) {
    const artisTutari = hamMetrik.yeniSermaye - hamMetrik.eskiSermaye;
    const bedelsizOrani = (artisTutari / hamMetrik.eskiSermaye) * 100;
    const eskiSermaye = tutarBicimle(
      hamMetrik.eskiSermaye,
      hamMetrik.paraBirimi
    );
    const yeniSermaye = tutarBicimle(
      hamMetrik.yeniSermaye,
      hamMetrik.paraBirimi
    );

    if (eskiSermaye && yeniSermaye) {
      return {
        baslik: doluMetin(hamMetrik.baslik)
          ? hamMetrik.baslik
          : "Bedelsiz sermaye artırımı",
        sonucEtiketi: "Bedelsiz oranı",
        sonuc: yuzdeBicimle(bedelsizOrani),
        detaylar: [
          { etiket: "Eski sermaye", deger: eskiSermaye },
          { etiket: "Yeni sermaye", deger: yeniSermaye },
        ],
        formul: "(Yeni sermaye - eski sermaye) / eski sermaye × 100",
        aciklama: doluMetin(hamMetrik.aciklama)
          ? hamMetrik.aciklama
          : undefined,
      };
    }
  }

  const oranMetrigi = oranMetrigiGorunumu(hamMetrik);
  return oranMetrigi ?? genelMetrikGorunumu(hamMetrik);
}
