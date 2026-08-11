import fs from "node:fs/promises";
import path from "node:path";
import * as XLSX from "xlsx";

const KAYNAK_DOSYA = path.join(
  process.cwd(),
  "app",
  "fonlar",
  "etki-analizi",
  "_data",
  "fon-etki-verileri.xlsx"
);
const CIKTI_DOSYA = KAYNAK_DOSYA.replace(/\.xlsx$/i, ".json");
const BEKLENEN_FONLAR = ["TLY", "PHE", "PBR", "DFI", "KHA", "THF"];
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

  const portfoy = rows.slice(1, toplamSatiri).map((row, index) => {
    const satirNo = index + 2;
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

  const semboller = new Set();
  for (const row of portfoy) {
    if (semboller.has(row.sembol)) {
      throw new Error(`${kod}: ${row.sembol} sembolü birden fazla kez girilmiş.`);
    }
    semboller.add(row.sembol);
  }

  const toplamFonOrani = yuvarla(
    portfoy.reduce((sum, row) => sum + row.fonOrani, 0)
  );
  const toplamEtki = yuvarla(
    portfoy.reduce((sum, row) => sum + row.etki, 0)
  );
  const excelToplamOran = sayi(
    rows[toplamSatiri][1],
    "Toplam fon oranı",
    `${kod}!B${toplamSatiri + 1}`
  );

  if (
    Math.abs(excelToplamOran - toplamFonOrani) > NORMAL_TOPLAM_TOLERANSI
  ) {
    throw new Error(
      `${kod}: toplam fon oranı uyuşmuyor. Excel=${excelToplamOran}, hesap=${toplamFonOrani}`
    );
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
    tarihselKaynak = "onceki-json";
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
    const toplam = sayi(
      excelToplamEtki,
      "Toplam etki",
      `${kod}!D${toplamSatiri + 1}`
    );
    if (Math.abs(toplam - toplamEtki) > ETKI_TOLERANSI) {
      throw new Error(
        `${kod}: toplam etki uyuşmuyor. Excel=${toplam}, hesap=${toplamEtki}`
      );
    }
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

  const fonlar = Object.fromEntries(
    BEKLENEN_FONLAR.map((kod) => [
      kod,
      fonSayfasiniDonustur(
        workbook.Sheets[kod],
        kod,
        oncekiCikti?.fonlar?.[kod] ?? null
      ),
    ])
  );

  const sonTarihler = Object.values(fonlar).map(
    (fon) => fon.tarihsel.at(-1).tarih
  );
  const sonGuncelleme = [...sonTarihler].sort().at(-1);

  const cikti = {
    kaynakDosya: path.basename(KAYNAK_DOSYA),
    sonGuncelleme,
    fonlar,
  };

  await fs.writeFile(CIKTI_DOSYA, `${JSON.stringify(cikti, null, 2)}\n`, "utf8");
  console.log(
    `Fon etki verileri hazırlandı: ${path.relative(process.cwd(), CIKTI_DOSYA)}`
  );
}

main().catch((error) => {
  console.error(`Fon etki verisi içe aktarılamadı:\n${error.message}`);
  process.exit(1);
});
