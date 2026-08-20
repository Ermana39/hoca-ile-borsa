export type HalkaArzBistBaslangici = {
  oncekiIslemGunu: string; // YYYY-MM-DD
  kapanis: number;
};

// Anahtar, hissenin Borsa İstanbul'daki ilk işlem tarihidir. Günlük özet
// arşivinde önceki seans bulunamadığında bu doğrulanmış tarihsel kapanışlar
// BIST 100 karşılaştırmasının başlangıç değeri olarak kullanılır.
export const halkaArzBistBaslangiclari: Record<
  string,
  HalkaArzBistBaslangici
> = {
  "2026-08-20": { oncekiIslemGunu: "2026-08-19", kapanis: 14458.98 },
  "2026-08-18": { oncekiIslemGunu: "2026-08-17", kapanis: 14132.06 },
  "2026-07-31": { oncekiIslemGunu: "2026-07-30", kapanis: 13286.64 },
  "2026-07-30": { oncekiIslemGunu: "2026-07-29", kapanis: 13501.55 },
  "2026-07-29": { oncekiIslemGunu: "2026-07-28", kapanis: 13687.86 },
  "2026-07-28": { oncekiIslemGunu: "2026-07-27", kapanis: 13774.77 },
  "2026-07-01": { oncekiIslemGunu: "2026-06-30", kapanis: 14121.83 },
  "2026-05-22": { oncekiIslemGunu: "2026-05-21", kapanis: 13163.88 },
  "2026-04-09": { oncekiIslemGunu: "2026-04-08", kapanis: 13536.8 },
  "2026-03-11": { oncekiIslemGunu: "2026-03-10", kapanis: 13175.7 },
  "2026-03-10": { oncekiIslemGunu: "2026-03-09", kapanis: 12702 },
  "2026-03-06": { oncekiIslemGunu: "2026-03-05", kapanis: 13078.9 },
  "2026-02-26": { oncekiIslemGunu: "2026-02-25", kapanis: 13809.9 },
  "2026-02-19": { oncekiIslemGunu: "2026-02-18", kapanis: 14259.9 },
  "2026-02-11": { oncekiIslemGunu: "2026-02-10", kapanis: 13797 },
  "2026-02-06": { oncekiIslemGunu: "2026-02-05", kapanis: 13589.1 },
  "2026-02-05": { oncekiIslemGunu: "2026-02-04", kapanis: 13891.2 },
  "2026-01-22": { oncekiIslemGunu: "2026-01-21", kapanis: 12728.2 },
  "2026-01-16": { oncekiIslemGunu: "2026-01-15", kapanis: 12456.7 },
  "2026-01-15": { oncekiIslemGunu: "2026-01-14", kapanis: 12369.9 },
  "2026-01-13": { oncekiIslemGunu: "2026-01-12", kapanis: 12254.8 },
  "2026-01-05": { oncekiIslemGunu: "2026-01-02", kapanis: 11498.4 },
};
