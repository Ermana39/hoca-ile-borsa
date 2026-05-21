const bistVeri = {
  tarih: "21.05.2026",
  kapanis: "13163.88",
  degisimYuzde: -6.05,
  gunlukHacim: "255,469,253,517",
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
  { kod: "THYAO", hacim: "16,359,129,293" },
  { kod: "ASTOR", hacim: "14,392,133,204" },
  { kod: "SASA", hacim: "9,666,102,052" },
  { kod: "ASELS", hacim: "7,930,369,145" },
  { kod: "AKBNK", hacim: "6,604,915,619" },
  { kod: "ISCTR", hacim: "5,994,364,829" },
  { kod: "YKBNK", hacim: "5,172,320,804" },
  { kod: "PEKGY", hacim: "5,169,857,149" },
  { kod: "KCHOL", hacim: "5,002,826,773" },
  { kod: "EREGL", hacim: "4,657,626,258" },
  { kod: "TRALT", hacim: "3,919,577,457" },
];

const tumParaGirisi = [
  { kod: "PEKGY", tutar: "+137,241,434" },
  { kod: "BIMAS", tutar: "+103,051,641" },
  { kod: "TEHOL", tutar: "+103,007,191" },
  { kod: "YEOTK", tutar: "+87,061,829" },
  { kod: "GESAN", tutar: "+84,083,370" },
  { kod: "EUPWR", tutar: "+64,758,152" },
  { kod: "TERA", tutar: "+62,251,160" },
  { kod: "TUPRS", tutar: "+59,460,296" },
  { kod: "CVKMD", tutar: "+38,714,343" },
];

const tumParaCikisi = [
  { kod: "THYAO", tutar: "-598,182,748" },
  { kod: "AKBNK", tutar: "-307,229,911" },
  { kod: "ASTOR", tutar: "-227,749,847" },
  { kod: "KCHOL", tutar: "-169,878,677" },
  { kod: "ISCTR", tutar: "-102,663,638" },
  { kod: "EREGL", tutar: "-91,671,277" },
  { kod: "EKGYO", tutar: "-74,761,364" },
  { kod: "YKBNK", tutar: "-69,537,242" },
  { kod: "BRSAN", tutar: "-59,312,765" },
  { kod: "TRALT", tutar: "-56,916,712" },
  { kod: "ASELS", tutar: "-55,011,822" },
];

const enCokAlisYapanKurumlar = [
  { kurum: "AK", hacim: "2,219,418,376", oran: "%18,00" },
  { kurum: "TERA", hacim: "1,898,368,047", oran: "%15,40" },
  { kurum: "GARANTI BBVA", hacim: "1,529,379,393", oran: "%12,40" },
  { kurum: "YATIRIM FINANSMAN", hacim: "1,071,060,079", oran: "%8,69" },
  { kurum: "YAPI KREDI", hacim: "973,373,291", oran: "%7,89" },
];

const enCokSatisYapanKurumlar = [
  { kurum: "BANK OF AMERICA", hacim: "-4,567,975,756", oran: "%37,05" },
  { kurum: "DENIZ", hacim: "-2,861,649,314", oran: "%23,21" },
  { kurum: "DESTEK", hacim: "-1,659,309,886", oran: "%13,46" },
  { kurum: "GEDIK", hacim: "-558,442,499", oran: "%4,53" },
  { kurum: "HSBC", hacim: "-503,497,326", oran: "%4,08" },
];

const enCokHacimYapanKurumlar = [
  { kurum: "YAPI KREDI", hacim: "72,513,466,271", oran: "%14,19" },
  { kurum: "BANK OF AMERICA", hacim: "69,111,334,305", oran: "%13,53" },
  { kurum: "IS", hacim: "55,311,600,577", oran: "%10,83" },
  { kurum: "AK", hacim: "40,424,129,032", oran: "%7,91" },
  { kurum: "TACIRLER", hacim: "20,899,164,507", oran: "%4,09" },
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