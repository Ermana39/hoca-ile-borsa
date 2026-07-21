import type {
  KapEtkiMetrigi,
  KapParaBirimi,
} from "@/lib/haber-kayitlari";

const paraBirimiEtiketi: Record<KapParaBirimi, string> = {
  TRY: "TL",
  USD: "USD",
  EUR: "EUR",
  GBP: "GBP",
};

const sayiBicimleyici = new Intl.NumberFormat("tr-TR", {
  minimumFractionDigits: 0,
  maximumFractionDigits: 3,
});

const yuzdeBicimleyici = new Intl.NumberFormat("tr-TR", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

export type KapEtkiDetayi = {
  etiket: string;
  deger: string;
};

export type KapEtkiMetrigiGorunumu = {
  baslik: string;
  durum: "hesaplandi" | "hesaplanamadi";
  sonucEtiketi: string;
  sonuc: string;
  ikincilSonuc?: string;
  detaylar: KapEtkiDetayi[];
  formul?: string;
  aciklama: string;
};

function tutarBicimle(deger: number, paraBirimi: KapParaBirimi): string {
  const mutlakDeger = Math.abs(deger);
  const etiket = paraBirimiEtiketi[paraBirimi];

  if (mutlakDeger >= 1_000_000_000) {
    return `${sayiBicimleyici.format(deger / 1_000_000_000)} milyar ${etiket}`;
  }
  if (mutlakDeger >= 1_000_000) {
    return `${sayiBicimleyici.format(deger / 1_000_000)} milyon ${etiket}`;
  }

  return `${sayiBicimleyici.format(deger)} ${etiket}`;
}

function yuzdeBicimle(deger: number): string {
  return `%${yuzdeBicimleyici.format(deger)}`;
}

function tarihBicimle(tarih: string): string {
  const eslesme = tarih.match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (!eslesme) return tarih;
  return `${eslesme[3]}.${eslesme[2]}.${eslesme[1]}`;
}

export function kapEtkiMetrigiGorunumu(
  metrik: KapEtkiMetrigi
): KapEtkiMetrigiGorunumu {
  if (metrik.tur === "hesaplanamadi") {
    return {
      baslik: metrik.baslik,
      durum: "hesaplanamadi",
      sonucEtiketi: "Hesap durumu",
      sonuc: "Veri bekleniyor",
      detaylar: metrik.gerekliVeriler.map((deger, index) => ({
        etiket: `Gerekli veri ${index + 1}`,
        deger,
      })),
      aciklama: metrik.neden,
    };
  }

  if (metrik.tur === "kapasite-artisi") {
    const artisOrani = (metrik.ekKapasite / metrik.mevcutKapasite) * 100;
    const yeniToplam = metrik.mevcutKapasite + metrik.ekKapasite;

    return {
      baslik: metrik.baslik,
      durum: "hesaplandi",
      sonucEtiketi: "Kapasite artışı",
      sonuc: yuzdeBicimle(artisOrani),
      ikincilSonuc: `Yeni toplam: ${sayiBicimleyici.format(yeniToplam)} ${metrik.birim}`,
      detaylar: [
        {
          etiket: "Mevcut kapasite",
          deger: `${sayiBicimleyici.format(metrik.mevcutKapasite)} ${metrik.birim}`,
        },
        {
          etiket: "Eklenecek kapasite",
          deger: `${sayiBicimleyici.format(metrik.ekKapasite)} ${metrik.birim}`,
        },
      ],
      formul: "Eklenecek kapasite / mevcut kapasite × 100",
      aciklama: metrik.aciklama,
    };
  }

  if (metrik.tur === "bedelsiz") {
    const artisTutari = metrik.yeniSermaye - metrik.eskiSermaye;
    const bedelsizOrani = (artisTutari / metrik.eskiSermaye) * 100;
    const teorikFiyat = metrik.referansFiyat
      ? metrik.referansFiyat / (1 + bedelsizOrani / 100)
      : null;

    return {
      baslik: metrik.baslik,
      durum: "hesaplandi",
      sonucEtiketi: "Bedelsiz oranı",
      sonuc: yuzdeBicimle(bedelsizOrani),
      ikincilSonuc:
        teorikFiyat !== null
          ? `Teorik düzeltilmiş fiyat: ${sayiBicimleyici.format(teorikFiyat)} ${paraBirimiEtiketi[metrik.paraBirimi]}`
          : undefined,
      detaylar: [
        {
          etiket: "Eski sermaye",
          deger: tutarBicimle(metrik.eskiSermaye, metrik.paraBirimi),
        },
        {
          etiket: "Yeni sermaye",
          deger: tutarBicimle(metrik.yeniSermaye, metrik.paraBirimi),
        },
        ...(metrik.referansFiyat
          ? [
              {
                etiket: "Referans fiyat",
                deger: `${sayiBicimleyici.format(metrik.referansFiyat)} ${paraBirimiEtiketi[metrik.paraBirimi]}`,
              },
            ]
          : []),
      ],
      formul:
        "(Yeni sermaye - eski sermaye) / eski sermaye × 100; teorik fiyat = referans fiyat / (1 + oran)",
      aciklama: metrik.aciklama,
    };
  }

  const ayniParaBirimi =
    metrik.olayParaBirimi === metrik.referansParaBirimi;
  const donusturulmusTutar = ayniParaBirimi
    ? metrik.olayTutari
    : metrik.olayTutari * (metrik.kurDonusumu?.birimBasina ?? Number.NaN);
  const oran = (donusturulmusTutar / metrik.referansTutari) * 100;
  const detaylar: KapEtkiDetayi[] = [
    {
      etiket: metrik.olayEtiketi,
      deger: tutarBicimle(metrik.olayTutari, metrik.olayParaBirimi),
    },
  ];

  if (!ayniParaBirimi && metrik.kurDonusumu) {
    detaylar.push(
      {
        etiket: "Kur dönüşümlü tutar",
        deger: tutarBicimle(donusturulmusTutar, metrik.referansParaBirimi),
      },
      {
        etiket: "Kullanılan kur",
        deger: `1 ${paraBirimiEtiketi[metrik.olayParaBirimi]} = ${sayiBicimleyici.format(metrik.kurDonusumu.birimBasina)} ${paraBirimiEtiketi[metrik.referansParaBirimi]} (${metrik.kurDonusumu.tur}, ${tarihBicimle(metrik.kurDonusumu.tarih)})`,
      }
    );
  }

  detaylar.push(
    {
      etiket: metrik.referansEtiketi,
      deger: tutarBicimle(
        metrik.referansTutari,
        metrik.referansParaBirimi
      ),
    },
    { etiket: "Referans dönemi", deger: metrik.referansDonemi }
  );

  if (metrik.kaynakOran !== undefined) {
    detaylar.push({
      etiket: "KAP'ta açıklanan oran",
      deger: yuzdeBicimle(metrik.kaynakOran),
    });
  }

  return {
    baslik: metrik.baslik,
    durum: "hesaplandi",
    sonucEtiketi: "Büyüklük oranı",
    sonuc: yuzdeBicimle(oran),
    detaylar,
    formul: ayniParaBirimi
      ? "Olay tutarı / karşılaştırma tutarı × 100"
      : "Kur dönüşümlü olay tutarı / karşılaştırma tutarı × 100",
    aciklama: metrik.aciklama,
  };
}
