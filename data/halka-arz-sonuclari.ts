// 2026 halka arzlarının sonuç ve performans verileri.
// Kaynak: tavan-serisi sayfasından ortak veriye taşındı; /halka-arz/takvim ve
// /halka-arz/tavan-serisi bu tek kaynaktan beslenir.
// Yeni halka arz sonuçlandığında kaydı listenin BAŞINA ekleyin.

export type HalkaArzSonucu = {
  hisse: string;
  islemTarihi: string; // GG.AA.YYYY
  katilimciSayisi: string;
  dagitimSekli: string;
  arzFiyati: string;
  guncelFiyat: string;
  konsorsiyum: string;
  performans30Gun?: string;
  performans90Gun?: string;
  performans180Gun?: string;
};

// Tüm guncelFiyat değerlerinin ait olduğu ortak seans tarihi. Günlük kapanış
// fiyatları yenilenirken yalnızca bu tarih bir kez değiştirilir. BIST 100
// kapanışı aynı tarihli günlük özet JSON'undan otomatik okunur.
export const halkaArzKapanisTarihi = "2026-07-20";

export const halkaArzSonuclari: HalkaArzSonucu[] = [
  {
    hisse: "SARAE",
    islemTarihi: "17.07.2026",
    katilimciSayisi: "729.560",
    dagitimSekli: "BİREYSELE %38",
    arzFiyati: "70.00",
    guncelFiyat: "84.70",
    konsorsiyum: "TERA",
  },
  {
    hisse: "SSAAT",
    islemTarihi: "16.07.2026",
    katilimciSayisi: "693.138",
    dagitimSekli: "BİREYSELE %60",
    arzFiyati: "56.00",
    guncelFiyat: "44.00",
    konsorsiyum: "GARANTİ-HALK",
  },
  {
    hisse: "ISVEA",
    islemTarihi: "10.07.2026",
    katilimciSayisi: "901.609",
    dagitimSekli: "BİREYSELE %60",
    arzFiyati: "20.90",
    guncelFiyat: "30.26",
    konsorsiyum: "AHLATÇI-HALK",
  },
  {
    hisse: "EKIM",
    islemTarihi: "09.07.2026",
    katilimciSayisi: "707.851",
    dagitimSekli: "BİREYSELE %70",
    arzFiyati: "30.26",
    guncelFiyat: "22.70",
    konsorsiyum: "AK-VAKIF",
  },
  {
    hisse: "GOLDA",
    islemTarihi: "08.07.2026",
    katilimciSayisi: "749.674",
    dagitimSekli: "TAMAMEN EŞİT",
    arzFiyati: "9.20",
    guncelFiyat: "19.69",
    konsorsiyum: "GEDİK",
  },
  {
    hisse: "ORZAX",
    islemTarihi: "07.07.2026",
    katilimciSayisi: "974.597",
    dagitimSekli: "BİREYSELE %57",
    arzFiyati: "69.00",
    guncelFiyat: "101.00",
    konsorsiyum: "İNFO",
  },
  {
    hisse: "SOHOE",
    islemTarihi: "06.07.2026",
    katilimciSayisi: "660.121",
    dagitimSekli: "TAMAMEN EŞİT",
    arzFiyati: "15.00",
    guncelFiyat: "12.45",
    konsorsiyum: "İNTEGRAL",
  },
  {
    hisse: "BETAE",
    islemTarihi: "01.07.2026",
    katilimciSayisi: "1,124,953",
    dagitimSekli: "BİREYSELE %50",
    arzFiyati: "40.00",
    guncelFiyat: "89.00",
    konsorsiyum: "TSKB & ZİRAAT & YATIRIM FİNANSMAN",
  },
  {
    hisse: "EKDMR",
    islemTarihi: "22.05.2026",
    katilimciSayisi: "796,542",
    dagitimSekli: "BİREYSEL %40",
    arzFiyati: "45.00",
    guncelFiyat: "54.00",
    konsorsiyum: "A1 Capital",
  },
  {
    hisse: "AAGYO",
    islemTarihi: "09.04.2026",
    katilimciSayisi: "917,413",
    dagitimSekli: "BİREYSELE %63",
    arzFiyati: "21.10",
    guncelFiyat: "14.74",
    konsorsiyum: "VAKIF-INFO",
  },
  {
    hisse: "MCARD",
    islemTarihi: "11.03.2026",
    katilimciSayisi: "965,336",
    dagitimSekli: "BİREYSEL %48",
    arzFiyati: "80.00",
    guncelFiyat: "145.80",
    konsorsiyum: "TERA",
  },
  {
    hisse: "LXGYO",
    islemTarihi: "10.03.2026",
    katilimciSayisi: "890,173",
    dagitimSekli: "BİREYSELE %40",
    arzFiyati: "12.05",
    guncelFiyat: "12.80",
    konsorsiyum: "TERA",
  },
  {
    hisse: "GENKM",
    islemTarihi: "06.03.2026",
    katilimciSayisi: "805,312",
    dagitimSekli: "TAMAMEN EŞİT",
    arzFiyati: "11.00",
    guncelFiyat: "12.34",
    konsorsiyum: "DENİZ",
  },
  {
    hisse: "SVGYO",
    islemTarihi: "06.03.2026",
    katilimciSayisi: "701,429",
    dagitimSekli: "BİREYSEL %40",
    arzFiyati: "3.64",
    guncelFiyat: "12.70",
    konsorsiyum: "TERA",
  },
  {
    hisse: "EMPAE",
    islemTarihi: "26.02.2026",
    katilimciSayisi: "1,134,537",
    dagitimSekli: "BİREYSELE %60",
    arzFiyati: "22.00",
    guncelFiyat: "58.80",
    konsorsiyum: "HALK",
  },
  {
    hisse: "ATATR",
    islemTarihi: "19.02.2026",
    katilimciSayisi: "627,142",
    dagitimSekli: "BİREYSEL %40",
    arzFiyati: "11.20",
    guncelFiyat: "15.97",
    konsorsiyum: "TERA",
  },
  {
    hisse: "BESTE",
    islemTarihi: "11.02.2026",
    katilimciSayisi: "796,578",
    dagitimSekli: "TAMAMEN EŞİT",
    arzFiyati: "14.70",
    guncelFiyat: "34.60",
    konsorsiyum: "GLOBAL",
  },
  {
    hisse: "AKHAN",
    islemTarihi: "06.02.2026",
    katilimciSayisi: "959,375",
    dagitimSekli: "BİREYSELE %60",
    arzFiyati: "21.50",
    guncelFiyat: "41.30",
    konsorsiyum: "HALK",
  },
  {
    hisse: "NETCD",
    islemTarihi: "05.02.2026",
    katilimciSayisi: "994,998",
    dagitimSekli: "BİREYSEL %60",
    arzFiyati: "46.00",
    guncelFiyat: "144.80",
    konsorsiyum: "INFO",
  },
  {
    hisse: "UCAYM",
    islemTarihi: "22.01.2026",
    katilimciSayisi: "796,720",
    dagitimSekli: "BİREYSELE %70",
    arzFiyati: "18.00",
    guncelFiyat: "29.00",
    konsorsiyum: "KUVEYT TÜRK",
  },
  {
    hisse: "ZGYO",
    islemTarihi: "16.01.2026",
    katilimciSayisi: "431,380",
    dagitimSekli: "BİREYSEL %50",
    arzFiyati: "9.77",
    guncelFiyat: "38.72",
    konsorsiyum: "VAKIF",
  },
  {
    hisse: "FRMPL",
    islemTarihi: "15.01.2026",
    katilimciSayisi: "688,564",
    dagitimSekli: "BİREYSEL %65",
    arzFiyati: "30.24",
    guncelFiyat: "32.24",
    konsorsiyum: "İNTEGRAL-ZİRAAT",
  },
  {
    hisse: "MEYSU",
    islemTarihi: "13.01.2026",
    katilimciSayisi: "648,003",
    dagitimSekli: "BİREYSEL %45",
    arzFiyati: "7.50",
    guncelFiyat: "12.70",
    konsorsiyum: "ALNUS",
  },
  {
    hisse: "ARFYE",
    islemTarihi: "05.01.2026",
    katilimciSayisi: "508,401",
    dagitimSekli: "BİREYSEL %50",
    arzFiyati: "19.50",
    guncelFiyat: "31.30",
    konsorsiyum: "A1 CAPITAL-BULLS",
  },
];

export function getHalkaArzSonucu(hisse?: string | null) {
  if (!hisse) return undefined;
  const kod = hisse.trim().toLocaleUpperCase("tr-TR");
  return halkaArzSonuclari.find((item) => item.hisse === kod);
}
