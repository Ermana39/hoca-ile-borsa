import fs from "node:fs/promises";
import path from "node:path";
import XLSX from "./lib/xlsx.mjs";

const KAYNAK_DOSYA = path.join(
  process.cwd(),
  "app",
  "fonlar",
  "etki-analizi",
  "_data",
  "fon-etki-verileri.xlsx"
);
const CIKTI_DOSYA = KAYNAK_DOSYA.replace(/\.xlsx$/i, ".json");
const GENEL_FON_GECMIS_DIZINI = path.join(
  process.cwd(),
  "public",
  "data",
  "fonlar",
  "history"
);
const BEKLENEN_FONLAR = ["TLY", "PHE", "DFI", "KHA", "THF", "TMV", "DOH"];
const NORMAL_TOPLAM_TOLERANSI = 0.02;
const ETKI_TOLERANSI = 0.0002;

function metin(value) {
  return String(value ?? "").trim();
}

function anahtar(value) {
  return metin(value)
    .toLocaleLowerCase("tr-TR")
    .replace(/ı/g, "i")
    .replace(/ğ/g, "g")
    .replace(/ü/g, "u")
    .replace(/ş/g, "s")
    .replace(/ö/g, "o")
    .replace(/ç/g, "c");
}

function sayi(value, alan, konum) {
  if (typeof value === "number" && Number.isFinite(value)) return value;

  throw new Error(
    `${konum}: "${alan}" alanı sayısal olmalı. Gelen değer: ${metin(value) || "boş"}`
  );
}

function excelTarihiniIsoYap(value, konum) {
  if (value instanceof Date && !Number.isNaN(value.getTime())) {
    return value.toISOString().slice(0, 10);
  }

  if (typeof value === "number" && Number.isFinite(value)) {
    const excelEpoch = Date.UTC(1899, 11, 30);
    const date = new Date(excelEpoch + Math.floor(value) * 86400000);
    if (!Number.isNaN(date.getTime())) return date.toISOString().slice(0, 10);
  }

  const normalized = metin(value);
  const iso = normalized.match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (iso) return normalized;

  const tr = normalized.match(/^(\d{1,2})[./](\d{1,2})[./](\d{4})$/);
  if (tr) {
    return `${tr[3]}-${tr[2].padStart(2, "0")}-${tr[1].padStart(2, "0")}`;
  }

  throw new Error(`${konum}: geçerli bir tarih bulunamadı (${normalized}).`);
}

function yuvarla(value, digits = 10) {
  return Number(value.toFixed(digits));
}

function bekle(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function dosyaYazTekrarli(dosya, icerik) {
  const denemeSayisi = 5;
  let sonHata = null;

  for (let deneme = 1; deneme <= denemeSayisi; deneme += 1) {
    try {
      await fs.writeFile(dosya, icerik, "utf8");
      return;
    } catch (error) {
      sonHata = error;
      if (deneme === denemeSayisi) break;
      await bekle(deneme * 250);
    }
  }

  throw sonHata;
}

async function genelFonGecmisiniOku(kod) {
  const dosya = path.join(
    GENEL_FON_GECMIS_DIZINI,
    `${kod.toLocaleLowerCase("tr-TR")}.json`
  );

  try {
    const payload = JSON.parse(await fs.readFile(dosya, "utf8"));
    const rows = Array.isArray(payload.rows) ? payload.rows : [];
    const tarihsel = rows
      .map((row) => {
        if (!Array.isArray(row)) return null;

        const tarih = metin(row[0]);
        const yatirimciSayisi = row[3];
        const fonToplamDeger = row[4];
        const paraGirisiCikisi = Number.isFinite(row[6]) ? row[6] : 0;
        const marj = Number.isFinite(row[5]) ? yuvarla(row[5] * 100, 4) : null;

        if (
          !/^\d{4}-\d{2}-\d{2}$/.test(tarih) ||
          !Number.isInteger(yatirimciSayisi) ||
          yatirimciSayisi < 0 ||
          !Number.isFinite(fonToplamDeger) ||
          fonToplamDeger <= 0
        ) {
          return null;
        }

        return {
          tarih,
          yatirimciSayisi,
          fonToplamDeger: yuvarla(fonToplamDeger, 2),
          paraGirisiCikisi: yuvarla(paraGirisiCikisi, 2),
          marj,
        };
      })
      .filter(Boolean)
      .sort((a, b) => a.tarih.localeCompare(b.tarih));

    if (tarihsel.length < 2) return null;

    return {
      tarihsel,
      tarihselKaynak: "ana-fon-arsivi",
    };
  } catch {
    return null;
  }
}

function fonSayfasiniDonustur(sheet, kod, oncekiFon) {
  const rows = XLSX.utils.sheet_to_json(sheet, {
    header: 1,
    defval: null,
    raw: true,
  });

  if (anahtar(rows[0]?.[0]) !== "sembol") {
    throw new Error(`${kod}: A1 hücresinde "SEMBOL" başlığı bulunamadı.`);
  }

  const toplamSatiri = rows.findIndex(
    (row, index) => index > 0 && anahtar(row[0]) === "toplam"
  );
  if (toplamSatiri < 2) {
    throw new Error(`${kod}: portföy toplam satırı bulunamadı.`);
  }

  const portfoySatirlari = rows
    .slice(1, toplamSatiri)
    .map((row, index) => ({ row, satirNo: index + 2 }))
    .filter(({ row }) => anahtar(row[0]) !== "sembol");

  const hamPortfoy = portfoySatirlari.map(({ row, satirNo }) => {
    const sembol = metin(row[0]).toLocaleUpperCase("tr-TR");
    if (!sembol) {
      throw new Error(`${kod}!A${satirNo}: sembol boş bırakılamaz.`);
    }

    const fonOrani = sayi(row[1], "Fon oranı", `${kod}!B${satirNo}`);
    const kapanisMarji = sayi(
      row[2],
      "Kapanış marjı",
      `${kod}!C${satirNo}`
    );
    const hesaplananEtki = yuvarla((fonOrani * kapanisMarji) / 100);

    if (row[3] !== null && row[3] !== "") {
      const excelEtki = sayi(row[3], "Etki", `${kod}!D${satirNo}`);
      if (Math.abs(excelEtki - hesaplananEtki) > ETKI_TOLERANSI) {
        throw new Error(
          `${kod}!D${satirNo}: etki değeri hesapla uyuşmuyor. Excel=${excelEtki}, hesap=${hesaplananEtki}`
        );
      }
    }

    return {
      sembol,
      fonOrani: yuvarla(fonOrani),
      kapanisMarji: yuvarla(kapanisMarji),
      etki: hesaplananEtki,
    };
  });

  const excelToplamOran = sayi(
    rows[toplamSatiri][1],
    "Toplam fon oranı",
    `${kod}!B${toplamSatiri + 1}`
  );

  let portfoy = hamPortfoy;
  let toplamFonOrani = yuvarla(
    portfoy.reduce((sum, row) => sum + row.fonOrani, 0)
  );

  if (Math.abs(excelToplamOran - toplamFonOrani) > NORMAL_TOPLAM_TOLERANSI) {
    let araToplam = 0;
    const kapsamSonu = hamPortfoy.findIndex((row) => {
      araToplam = yuvarla(araToplam + row.fonOrani);
      return Math.abs(excelToplamOran - araToplam) <= NORMAL_TOPLAM_TOLERANSI;
    });

    if (kapsamSonu >= 0 && kapsamSonu < hamPortfoy.length - 1) {
      const disaridaKalanlar = hamPortfoy
        .slice(kapsamSonu + 1)
        .map((row) => row.sembol)
        .join(", ");
      console.warn(
        `${kod}: Excel toplamı ilk ${kapsamSonu + 1} satırla uyuşuyor; hesap kapsamı dışında bırakılan satırlar: ${disaridaKalanlar}`
      );
      portfoy = hamPortfoy.slice(0, kapsamSonu + 1);
      toplamFonOrani = yuvarla(
        portfoy.reduce((sum, row) => sum + row.fonOrani, 0)
      );
    }
  }

  const toplamEtki = yuvarla(portfoy.reduce((sum, row) => sum + row.etki, 0));

  if (Math.abs(excelToplamOran - toplamFonOrani) > NORMAL_TOPLAM_TOLERANSI) {
    throw new Error(
      `${kod}: toplam fon oranı uyuşmuyor. Excel=${excelToplamOran}, hesap=${toplamFonOrani}`
    );
  }

  const semboller = new Set();
  for (const row of portfoy) {
    if (semboller.has(row.sembol)) {
      throw new Error(`${kod}: ${row.sembol} sembolü birden fazla kez girilmiş.`);
    }
    semboller.add(row.sembol);
  }

  const tarihBasligi = rows.findIndex((row) => {
    const cells = row.map(anahtar);
    return (
      cells.includes("tarih") &&
      cells.includes("yatirimci sayisi") &&
      cells.includes("fon toplam deger") &&
      cells.includes("para girisi/cikisi")
    );
  });

  let tarihsel;
  let tarihselKaynak = "excel";

  if (tarihBasligi < 0) {
    if (!Array.isArray(oncekiFon?.tarihsel) || oncekiFon.tarihsel.length < 2) {
      throw new Error(
        `${kod}: tarihsel veri başlıkları bulunamadı ve korunabilecek önceki veri yok.`
      );
    }
    tarihsel = oncekiFon.tarihsel;
    tarihselKaynak = oncekiFon.tarihselKaynak ?? "onceki-json";
  } else {
    const basliklar = rows[tarihBasligi].map(anahtar);
    const tarihKolonu = basliklar.indexOf("tarih");
    const yatirimciKolonu = basliklar.indexOf("yatirimci sayisi");
    const fonDegerKolonu = basliklar.indexOf("fon toplam deger");
    const paraAkisiKolonu = basliklar.indexOf("para girisi/cikisi");
    const marjKolonu = basliklar.indexOf("marj");

    tarihsel = rows
      .slice(tarihBasligi + 1)
      .filter((row) => row.some((cell) => cell !== null && cell !== ""))
      .map((row, index) => {
        const satirNo = tarihBasligi + index + 2;
        const tarih = excelTarihiniIsoYap(
          row[tarihKolonu],
          `${kod}!${XLSX.utils.encode_col(tarihKolonu)}${satirNo}`
        );
        const yatirimciSayisi = sayi(
          row[yatirimciKolonu],
          "Yatırımcı sayısı",
          `${kod}!${XLSX.utils.encode_col(yatirimciKolonu)}${satirNo}`
        );
        const fonToplamDeger = sayi(
          row[fonDegerKolonu],
          "Fon toplam değer",
          `${kod}!${XLSX.utils.encode_col(fonDegerKolonu)}${satirNo}`
        );
        const paraGirisiCikisi = sayi(
          row[paraAkisiKolonu],
          "Para girişi/çıkışı",
          `${kod}!${XLSX.utils.encode_col(paraAkisiKolonu)}${satirNo}`
        );
        const marj =
          marjKolonu >= 0 && row[marjKolonu] !== null && row[marjKolonu] !== ""
            ? sayi(
                row[marjKolonu],
                "Marj",
                `${kod}!${XLSX.utils.encode_col(marjKolonu)}${satirNo}`
              )
            : null;

        if (!Number.isInteger(yatirimciSayisi) || yatirimciSayisi < 0) {
          throw new Error(
            `${kod}!${XLSX.utils.encode_col(
              yatirimciKolonu
            )}${satirNo}: yatırımcı sayısı pozitif tam sayı olmalı.`
          );
        }
        if (fonToplamDeger <= 0) {
          throw new Error(
            `${kod}!${XLSX.utils.encode_col(
              fonDegerKolonu
            )}${satirNo}: fon toplam değeri sıfırdan büyük olmalı.`
          );
        }
        if (marj !== null && Math.abs(marj) > 1) {
          throw new Error(
            `${kod}!${XLSX.utils.encode_col(
              marjKolonu
            )}${satirNo}: marj Excel yüzde biçiminde ondalık değer olmalı (örnek: %2,11 için 0,0211).`
          );
        }

        return {
          tarih,
          yatirimciSayisi,
          fonToplamDeger: yuvarla(fonToplamDeger, 2),
          paraGirisiCikisi: yuvarla(paraGirisiCikisi, 2),
          marj: marj === null ? null : yuvarla(marj * 100, 4),
        };
      })
      .sort((a, b) => a.tarih.localeCompare(b.tarih));
  }

  if (tarihsel.length < 2) {
    throw new Error(`${kod}: grafikler için en az iki tarihsel kayıt gerekli.`);
  }

  const tarihler = new Set();
  for (const row of tarihsel) {
    if (tarihler.has(row.tarih)) {
      throw new Error(`${kod}: ${row.tarih} tarihi birden fazla kez girilmiş.`);
    }
    tarihler.add(row.tarih);
  }

  const excelToplamEtki = rows[toplamSatiri][3];
  if (excelToplamEtki !== null && excelToplamEtki !== "") {
    sayi(excelToplamEtki, "Toplam etki", `${kod}!D${toplamSatiri + 1}`);
  }

  return {
    kod,
    toplamFonOrani,
    toplamEtki,
    kaldiracli: toplamFonOrani > 100,
    portfoy,
    tarihsel,
    tarihselKaynak,
  };
}

async function main() {
  let oncekiCikti = null;
  try {
    oncekiCikti = JSON.parse(await fs.readFile(CIKTI_DOSYA, "utf8"));
  } catch {
    oncekiCikti = null;
  }

  const buffer = await fs.readFile(KAYNAK_DOSYA);
  const workbook = XLSX.read(buffer, {
    type: "buffer",
    cellDates: false,
    cellFormula: true,
  });

  const eksikFonlar = BEKLENEN_FONLAR.filter(
    (kod) => !workbook.SheetNames.includes(kod)
  );
  if (eksikFonlar.length) {
    throw new Error(`Eksik fon sekmeleri: ${eksikFonlar.join(", ")}`);
  }

  const fonlar = {};
  for (const kod of BEKLENEN_FONLAR) {
    const oncekiFon = oncekiCikti?.fonlar?.[kod] ?? null;
    const yedekFon =
      Array.isArray(oncekiFon?.tarihsel) && oncekiFon.tarihsel.length >= 2
        ? oncekiFon
        : await genelFonGecmisiniOku(kod);

    fonlar[kod] = fonSayfasiniDonustur(workbook.Sheets[kod], kod, yedekFon);
  }

  const sonTarihler = Object.values(fonlar).map(
    (fon) => fon.tarihsel.at(-1).tarih
  );
  const sonGuncelleme = [...sonTarihler].sort().at(-1);

  const cikti = {
    kaynakDosya: path.basename(KAYNAK_DOSYA),
    sonGuncelleme,
    fonlar,
  };

  await dosyaYazTekrarli(CIKTI_DOSYA, `${JSON.stringify(cikti, null, 2)}\n`);
  console.log(
    `Fon etki verileri hazırlandı: ${path.relative(process.cwd(), CIKTI_DOSYA)}`
  );
}

main().catch((error) => {
  console.error(`Fon etki verisi içe aktarılamadı:\n${error.message}`);
  process.exit(1);
});
