const BIST_KAPALI_GUNLER_2026 = new Set([
  "2026-01-01",
  "2026-03-20",
  "2026-04-23",
  "2026-05-01",
  "2026-05-19",
  "2026-05-27",
  "2026-05-28",
  "2026-05-29",
  "2026-07-15",
  "2026-08-30",
  "2026-10-29",
]);

function isoTarihiniOku(isoTarih) {
  const eslesme = String(isoTarih ?? "").match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (!eslesme) throw new Error(`Geçersiz ISO tarih: ${isoTarih}`);

  const tarih = new Date(Date.UTC(
    Number(eslesme[1]),
    Number(eslesme[2]) - 1,
    Number(eslesme[3])
  ));
  if (Number.isNaN(tarih.getTime())) throw new Error(`Geçersiz tarih: ${isoTarih}`);
  return tarih;
}

function isoYap(tarih) {
  return tarih.toISOString().slice(0, 10);
}

export function bistIslemGunuMu(isoTarih) {
  const tarih = isoTarihiniOku(isoTarih);
  const gun = tarih.getUTCDay();
  return gun !== 0 && gun !== 6 && !BIST_KAPALI_GUNLER_2026.has(isoTarih);
}

export function sonrakiBistIslemGunu(isoTarih) {
  const tarih = isoTarihiniOku(isoTarih);

  do {
    tarih.setUTCDate(tarih.getUTCDate() + 1);
  } while (!bistIslemGunuMu(isoYap(tarih)));

  return isoYap(tarih);
}
