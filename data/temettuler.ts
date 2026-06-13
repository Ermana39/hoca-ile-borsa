// ============================================================================
//  TEMETTÜ TAKVİMİ — TEK MERKEZİ VERİ DOSYASI
// ----------------------------------------------------------------------------
//  Buraya bir kez girdiğin temettü kaydı İKİ yerde otomatik görünür:
//    1) İlgili ay sayfası (örn. /temettu/haziran-ayi-temettu-takvimi)
//    2) İlgili hissenin künye sayfası (örn. /hisse/ulker)
//  Yani veriyi sadece BURAYA girersin; iki kez girmene gerek yoktur.
//
//  YENİ TEMETTÜ EKLEMEK İÇİN (kopyala-doldur):
//    Aşağıdaki listeye, doğru "// --- AY ---" başlığının altına şu satırı ekle:
//
//    { sembol: "ULKER", tarih: "19 Haziran 2026", isoTarih: "2026-06-19", verim: "% 4,95", brut: "₺5,73", net: "₺4,8729", toplam: "₺2.116.999.983", oran: "%42" },
//
//  ALAN AÇIKLAMALARI:
//    sembol    → Hisse kodu, BÜYÜK harf, tırnak içinde. Örn: "ULKER"
//    tarih     → Sayfada görünecek tarih metni (Türkçe). Örn: "19 Haziran 2026"
//    isoTarih  → Aynı tarihin makine formatı: "YIL-AY-GUN". Örn: "2026-06-19"
//                (Ay ve gün hep 2 haneli: Ocak=01 ... Aralık=12)
//    verim     → Temettü verim yüzdesi metni. Örn: "% 4,95"
//    brut      → Hisse başı brüt tutar. Örn: "₺5,73"
//    net       → Hisse başı net tutar. Örn: "₺4,8729"
//    toplam    → Toplam dağıtılan tutar. Örn: "₺2.116.999.983"
//    oran      → Dağıtma oranı (yoksa boş bırak: ""). Örn: "%42"
//
//  ÖNEMLİ: Her satırın sonunda virgül (,) olmalı. Tırnakları silme.
//          Sadece tırnak içindeki değerleri değiştir.
//          Hangi ay sayfasına düşeceği "isoTarih" içindeki aydan otomatik bulunur.
// ============================================================================

export type TemettuKaydi = {
  sembol: string;
  tarih: string;
  isoTarih: string;
  verim: string;
  brut: string;
  net: string;
  toplam: string;
  oran: string;
};

export const temettuler: TemettuKaydi[] = [
  // --- HAZİRAN 2026 ---
  { sembol: "ZRGYO", tarih: "30 Haziran 2026", isoTarih: "2026-06-30", verim: "% 0,57", brut: "₺0,09", net: "₺0,0929", toplam: "₺436.271.510", oran: "%6" },
  { sembol: "KIMMR", tarih: "30 Haziran 2026", isoTarih: "2026-06-30", verim: "% 1,22", brut: "₺0,21", net: "₺0,1771", toplam: "₺49.999.992", oran: "%8" },
  { sembol: "ECGYH", tarih: "30 Haziran 2026", isoTarih: "2026-06-30", verim: "% 1,01", brut: "₺0,30", net: "₺0,3000", toplam: "₺60.000.000", oran: "%8" },
  { sembol: "LOGO", tarih: "30 Haziran 2026", isoTarih: "2026-06-30", verim: "% 3,33", brut: "₺5,26", net: "₺4,4737", toplam: "₺499.999.991", oran: "%33" },
  { sembol: "ISSEN", tarih: "30 Haziran 2026", isoTarih: "2026-06-30", verim: "% 0,46", brut: "₺0,04", net: "₺0,0340", toplam: "₺16.975.919", oran: "" },
  { sembol: "ISKPL", tarih: "26 Haziran 2026", isoTarih: "2026-06-26", verim: "% 0,00", brut: "₺0,00", net: "₺0,0004", toplam: "₺646.650", oran: "%1" },
  { sembol: "ILGYO", tarih: "26 Haziran 2026", isoTarih: "2026-06-26", verim: "% 9,47", brut: "₺0,58", net: "₺0,5755", toplam: "₺2.209.999.872", oran: "%17" },
  { sembol: "SVGY", tarih: "25 Haziran 2026", isoTarih: "2026-06-25", verim: "% 2,55", brut: "₺0,08", net: "₺0,0769", toplam: "₺249.999.750", oran: "%6" },
  { sembol: "AHSGY", tarih: "24 Haziran 2026", isoTarih: "2026-06-24", verim: "% 0,36", brut: "₺0,08", net: "₺0,0762", toplam: "₺54.999.945", oran: "%2" },
  { sembol: "OZKGY", tarih: "24 Haziran 2026", isoTarih: "2026-06-24", verim: "% 1,61", brut: "₺0,20", net: "₺0,1987", toplam: "₺289.307.200", oran: "" },
  { sembol: "VKGYO", tarih: "24 Haziran 2026", isoTarih: "2026-06-24", verim: "% 3,76", brut: "₺0,10", net: "₺0,1020", toplam: "₺351.999.705", oran: "%50" },
  { sembol: "CEMTS", tarih: "24 Haziran 2026", isoTarih: "2026-06-24", verim: "% 2,86", brut: "₺0,30", net: "₺0,2550", toplam: "₺150.000.000", oran: "" },
  { sembol: "EKGYO", tarih: "24 Haziran 2026", isoTarih: "2026-06-24", verim: "% 3,14", brut: "₺0,60", net: "₺0,6000", toplam: "₺2.280.000.000", oran: "%37" },
  { sembol: "SVGYO", tarih: "23 Haziran 2026", isoTarih: "2026-06-23", verim: "% 0,04", brut: "₺0,01", net: "₺0,0077", toplam: "₺8.339.100", oran: "" },
  { sembol: "KTLEV", tarih: "23 Haziran 2026", isoTarih: "2026-06-23", verim: "% 0,08", brut: "₺0,10", net: "₺0,0821", toplam: "₺199.999.881", oran: "%2" },
  { sembol: "MHRGY", tarih: "22 Haziran 2026", isoTarih: "2026-06-22", verim: "% 1,49", brut: "₺0,07", net: "₺0,0681", toplam: "₺84.472.964", oran: "%19" },
  { sembol: "ULKER", tarih: "19 Haziran 2026", isoTarih: "2026-06-19", verim: "% 4,95", brut: "₺5,73", net: "₺4,8729", toplam: "₺2.116.999.983", oran: "%42" },
  { sembol: "EMPAE", tarih: "18 Haziran 2026", isoTarih: "2026-06-18", verim: "% 0,14", brut: "₺0,10", net: "₺0,0850", toplam: "₺17.000.000", oran: "%20" },
  { sembol: "BIMAS", tarih: "17 Haziran 2026", isoTarih: "2026-06-17", verim: "% 0,54", brut: "₺2,00", net: "₺1,7000", toplam: "₺2.408.000.000", oran: "%13" },
  { sembol: "BULGS", tarih: "15 Haziran 2026", isoTarih: "2026-06-15", verim: "% 0,23", brut: "₺0,09", net: "₺0,0933", toplam: "₺24.999.978", oran: "%2" },
  { sembol: "INDES", tarih: "15 Haziran 2026", isoTarih: "2026-06-15", verim: "% 1,89", brut: "₺0,22", net: "₺0,1847", toplam: "₺163.000.875", oran: "%34" },
  { sembol: "ATATP", tarih: "10 Haziran 2026", isoTarih: "2026-06-10", verim: "% 0,45", brut: "₺1,00", net: "₺0,8500", toplam: "₺93.750.000", oran: "%5" },
  { sembol: "YAPRK", tarih: "10 Haziran 2026", isoTarih: "2026-06-10", verim: "% 0,19", brut: "₺0,03", net: "₺0,0213", toplam: "₺7.455.000", oran: "%38" },
  { sembol: "ADGYO", tarih: "8 Haziran 2026", isoTarih: "2026-06-08", verim: "% 0,11", brut: "₺0,06", net: "₺0,0544", toplam: "₺160.000.000", oran: "" },
  { sembol: "SMRVA", tarih: "8 Haziran 2026", isoTarih: "2026-06-08", verim: "% 1,15", brut: "₺0,19", net: "₺0,1600", toplam: "₺112.929.960", oran: "%17" },
  { sembol: "AVPGY", tarih: "5 Haziran 2026", isoTarih: "2026-06-05", verim: "% 3,99", brut: "₺2,50", net: "₺2,5000", toplam: "₺1.000.000.000", oran: "%62" },
  { sembol: "ATAKP", tarih: "4 Haziran 2026", isoTarih: "2026-06-04", verim: "% 1,29", brut: "₺0,70", net: "₺0,5950", toplam: "₺97.137.600", oran: "" },
  { sembol: "TABGD", tarih: "4 Haziran 2026", isoTarih: "2026-06-04", verim: "% 1,87", brut: "₺5,00", net: "₺4,2500", toplam: "₺1.306.460.000", oran: "%49" },
  { sembol: "EREGL", tarih: "3 Haziran 2026", isoTarih: "2026-06-03", verim: "% 1,40", brut: "₺0,55", net: "₺0,4675", toplam: "₺3.850.000.000", oran: "%665" },
  { sembol: "ISDMR", tarih: "3 Haziran 2026", isoTarih: "2026-06-03", verim: "% 7,80", brut: "₺4,50", net: "₺3,8250", toplam: "₺13.050.000.000", oran: "%213" },
  { sembol: "LMKDC", tarih: "2 Haziran 2026", isoTarih: "2026-06-02", verim: "% 5,45", brut: "₺2,00", net: "₺1,7000", toplam: "₺1.032.359.400", oran: "%52" },
  { sembol: "AKCNS", tarih: "1 Haziran 2026", isoTarih: "2026-06-01", verim: "% 0,83", brut: "₺1,88", net: "₺1,5984", toplam: "₺359.999.996", oran: "%46" },
  { sembol: "SISE", tarih: "1 Haziran 2026", isoTarih: "2026-06-01", verim: "% 1,28", brut: "₺0,59", net: "₺0,4995", toplam: "₺1.799.999.717", oran: "%19" },
  { sembol: "AYES", tarih: "1 Haziran 2026", isoTarih: "2026-06-01", verim: "% 1,04", brut: "₺0,35", net: "₺0,3000", toplam: "₺52.941.165", oran: "%52" },
  { sembol: "MACKO", tarih: "1 Haziran 2026", isoTarih: "2026-06-01", verim: "% 6,08", brut: "₺2,70", net: "₺2,2950", toplam: "₺270.000.000", oran: "%84" },

  // --- TEMMUZ 2026 ---
  { sembol: "MOPAS", tarih: "31 Temmuz 2026", isoTarih: "2026-07-31", verim: "% 0,69", brut: "₺0,27", net: "₺0,2335", toplam: "₺74.999.989", oran: "%40" },
  { sembol: "OSMEN", tarih: "29 Temmuz 2026", isoTarih: "2026-07-29", verim: "% 0,66", brut: "₺0,05", net: "₺0,0424", toplam: "₺19.999.992", oran: "%12" },
  { sembol: "MERCN", tarih: "28 Temmuz 2026", isoTarih: "2026-07-28", verim: "% 0,98", brut: "₺0,21", net: "₺0,1786", toplam: "₺39.999.981", oran: "%29" },
  { sembol: "GRTHO", tarih: "22 Temmuz 2026", isoTarih: "2026-07-22", verim: "% 0,22", brut: "₺0,45", net: "₺0,3817", toplam: "₺56.133.900", oran: "%4" },
  { sembol: "KTLEV", tarih: "21 Temmuz 2026", isoTarih: "2026-07-21", verim: "% 0,08", brut: "₺0,10", net: "₺0,0821", toplam: "₺199.999.881", oran: "%2" },
  { sembol: "TAVHL", tarih: "21 Temmuz 2026", isoTarih: "2026-07-21", verim: "% 0,72", brut: "₺1,80", net: "₺1,5342", toplam: "₺655.718.977", oran: "%23" },
  { sembol: "BASGZ", tarih: "20 Temmuz 2026", isoTarih: "2026-07-20", verim: "% 4,13", brut: "₺2,00", net: "₺1,7000", toplam: "₺1.400.000.000", oran: "%41" },
  { sembol: "GOLTS", tarih: "17 Temmuz 2026", isoTarih: "2026-07-17", verim: "% 1,21", brut: "₺4,17", net: "₺3,5417", toplam: "₺74.999.998", oran: "%20" },
  { sembol: "EGPRO", tarih: "16 Temmuz 2026", isoTarih: "2026-07-16", verim: "% 1,59", brut: "₺0,64", net: "₺0,5459", toplam: "₺349.999.981", oran: "%33" },
  { sembol: "GIPTA", tarih: "14 Temmuz 2026", isoTarih: "2026-07-14", verim: "% 0,01", brut: "₺0,01", net: "₺0,0066", toplam: "₺1.024.993", oran: "%0" },
  { sembol: "GENKM", tarih: "14 Temmuz 2026", isoTarih: "2026-07-14", verim: "% 1,47", brut: "₺0,21", net: "₺0,1745", toplam: "₺124.999.990", oran: "%50" },
  { sembol: "PNLSN", tarih: "8 Temmuz 2026", isoTarih: "2026-07-08", verim: "% 1,45", brut: "₺0,69", net: "₺0,5848", toplam: "₺51.596.257", oran: "%20" },
  { sembol: "LIDER", tarih: "8 Temmuz 2026", isoTarih: "2026-07-08", verim: "% 0,03", brut: "₺0,04", net: "₺0,0303", toplam: "₺29.411.745", oran: "%2" },
  { sembol: "MEYSU", tarih: "7 Temmuz 2026", isoTarih: "2026-07-07", verim: "% 0,28", brut: "₺0,05", net: "₺0,0425", toplam: "₺43.500.000", oran: "%9" },
  { sembol: "OZSUB", tarih: "6 Temmuz 2026", isoTarih: "2026-07-06", verim: "% 2,14", brut: "₺0,62", net: "₺0,5242", toplam: "₺73.999.992", oran: "%25" },
  { sembol: "LILAK", tarih: "6 Temmuz 2026", isoTarih: "2026-07-06", verim: "% 4,39", brut: "₺1,53", net: "₺1,2966", toplam: "₺900.025.000", oran: "%53" },
  { sembol: "DOFER", tarih: "2 Temmuz 2026", isoTarih: "2026-07-02", verim: "% 0,53", brut: "₺0,19", net: "₺0,0807", toplam: "₺10.588.235", oran: "%69" },
  { sembol: "KCAER", tarih: "1 Temmuz 2026", isoTarih: "2026-07-01", verim: "% 1,30", brut: "₺0,17", net: "₺0,1443", toplam: "₺324.999.821", oran: "%69" },

  // --- AĞUSTOS 2026 ---
  { sembol: "SUWEN", tarih: "31 Ağustos 2026", isoTarih: "2026-08-31", verim: "% 2,34", brut: "₺0,18", net: "₺0,1518", toplam: "₺99.999.984", oran: "%93" },
  { sembol: "TURSG", tarih: "27 Ağustos 2026", isoTarih: "2026-08-27", verim: "% 2,38", brut: "₺0,30", net: "₺0,2550", toplam: "₺3.000.000.000", oran: "%16" },
  { sembol: "ENERY", tarih: "25 Ağustos 2026", isoTarih: "2026-08-25", verim: "% 0,19", brut: "₺0,02", net: "₺0,0142", toplam: "₺149.999.400", oran: "%3" },
  { sembol: "AHGAZ", tarih: "24 Ağustos 2026", isoTarih: "2026-08-24", verim: "% 0,18", brut: "₺0,06", net: "₺0,0490", toplam: "₺149.999.980", oran: "%5" },
  { sembol: "DOAS", tarih: "13 Ağustos 2026", isoTarih: "2026-08-13", verim: "% 8,12", brut: "₺15,00", net: "₺12,7500", toplam: "₺3.300.000.000", oran: "%56" },
  { sembol: "BOBET", tarih: "5 Ağustos 2026", isoTarih: "2026-08-05", verim: "% 2,14", brut: "₺0,40", net: "₺0,3400", toplam: "₺152.000.000", oran: "" },

  // --- EYLÜL 2026 ---
  { sembol: "SUMAS", tarih: "30 Eylül 2026", isoTarih: "2026-09-30", verim: "% 0,59", brut: "₺2,17", net: "₺1,8436", toplam: "₺13.499.999", oran: "%90" },
  { sembol: "KIMMR", tarih: "30 Eylül 2026", isoTarih: "2026-09-30", verim: "% 1,22", brut: "₺0,21", net: "₺0,1771", toplam: "₺49.999.992", oran: "%8" },
  { sembol: "DESA", tarih: "30 Eylül 2026", isoTarih: "2026-09-30", verim: "% 0,67", brut: "₺0,08", net: "₺0,0714", toplam: "₺41.176.464", oran: "%7" },
  { sembol: "TUPRS", tarih: "30 Eylül 2026", isoTarih: "2026-09-30", verim: "% 2,86", brut: "₺6,75", net: "₺5,7349", toplam: "₺13.001.761.617", oran: "%42" },
  { sembol: "LKMNH", tarih: "28 Eylül 2026", isoTarih: "2026-09-28", verim: "% 1,39", brut: "₺0,23", net: "₺0,1968", toplam: "₺49.999.982", oran: "%34" },
  { sembol: "MOPAS", tarih: "25 Eylül 2026", isoTarih: "2026-09-25", verim: "% 0,69", brut: "₺0,27", net: "₺0,2335", toplam: "₺74.999.989", oran: "%40" },
  { sembol: "GIPTA", tarih: "22 Eylül 2026", isoTarih: "2026-09-22", verim: "% 0,01", brut: "₺0,01", net: "₺0,0066", toplam: "₺1.024.993", oran: "%0" },
  { sembol: "TAVHL", tarih: "22 Eylül 2026", isoTarih: "2026-09-22", verim: "% 0,72", brut: "₺1,80", net: "₺1,5342", toplam: "₺655.718.977", oran: "%23" },
  { sembol: "MACKO", tarih: "22 Eylül 2026", isoTarih: "2026-09-22", verim: "% 4,05", brut: "₺1,80", net: "₺1,5300", toplam: "₺180.000.000", oran: "%58" },
  { sembol: "PETUN", tarih: "21 Eylül 2026", isoTarih: "2026-09-21", verim: "% 1,85", brut: "₺0,25", net: "₺0,2083", toplam: "₺74.319.525", oran: "%43" },
  { sembol: "BIGCH", tarih: "18 Eylül 2026", isoTarih: "2026-09-18", verim: "% 1,57", brut: "₺0,10", net: "₺0,0850", toplam: "₺53.500.000", oran: "%2397" },
  { sembol: "BIMAS", tarih: "16 Eylül 2026", isoTarih: "2026-09-16", verim: "% 0,67", brut: "₺2,50", net: "₺2,1250", toplam: "₺3.000.000.000", oran: "%16" },
  { sembol: "BULGS", tarih: "15 Eylül 2026", isoTarih: "2026-09-15", verim: "% 0,23", brut: "₺0,09", net: "₺0,0933", toplam: "₺24.999.978", oran: "%2" },
  { sembol: "LIDER", tarih: "8 Eylül 2026", isoTarih: "2026-09-08", verim: "% 0,03", brut: "₺0,04", net: "₺0,0303", toplam: "₺29.411.745", oran: "%2" },

  // --- EKİM 2026 ---
  { sembol: "DESA", tarih: "30 Ekim 2026", isoTarih: "2026-10-30", verim: "% 0,77", brut: "₺0,10", net: "₺0,0816", toplam: "₺47.058.816", oran: "%8" },
  { sembol: "SRVGY", tarih: "26 Ekim 2026", isoTarih: "2026-10-26", verim: "% 2,55", brut: "₺0,08", net: "₺0,0769", toplam: "₺249.999.750", oran: "%6" },
  { sembol: "OSMEN", tarih: "26 Ekim 2026", isoTarih: "2026-10-26", verim: "% 0,66", brut: "₺0,05", net: "₺0,0424", toplam: "₺19.999.992", oran: "%12" },
  { sembol: "BASCM", tarih: "21 Ekim 2026", isoTarih: "2026-10-21", verim: "% 7,31", brut: "₺1,06", net: "₺0,9015", toplam: "₺699.999.960", oran: "%198" },
  { sembol: "EBEBK", tarih: "15 Ekim 2026", isoTarih: "2026-10-15", verim: "% 0,77", brut: "₺0,63", net: "₺0,5313", toplam: "₺100.000.000", oran: "%100" },
  { sembol: "AEFES", tarih: "5 Ekim 2026", isoTarih: "2026-10-05", verim: "% 0,88", brut: "₺0,17", net: "₺0,1443", toplam: "₺1.005.098.684", oran: "%6" },
];
