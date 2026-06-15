// ============================================================================
//  EXCEL -> hisse JSON "temelOranlar" İÇE AKTARMA
// ----------------------------------------------------------------------------
//  Günlük güncellenen oran-analizi.xlsx dosyasını okur ve her şirketin temel
//  oranlarını ilgili data/hisseler/<kod>.json dosyasına `temelOranlar` olarak
//  yazar. Excel her güncellendiğinde tekrar çalıştır:
//
//      node scripts/import-oranlar.mjs            (tüm hisseler)
//      node scripts/import-oranlar.mjs astor      (sadece ASTOR — deneme için)
//      node scripts/import-oranlar.mjs astor thyao
//
//  NOT: Sektör ortalaması verisi uç değerlerle şiştiği için GÜVENİLİR DEĞİL;
//  bu yüzden artık YALNIZCA şirket satırı işlenir, "Sektör" toplam satırı
//  atlanır. Yorumlar her oranı kendi başına değerlendirir (bkz. lib/oranYorumla).
//
//  KOLON EŞLEMESİ değiştiyse aşağıdaki KOLON sabitini güncellemen yeterli.
//  Excel başlık metinleri (boşluklar dahil) birebir eşleşmeli.
// ============================================================================

import fs from "node:fs";
import path from "node:path";
import * as XLSX from "xlsx";

const EXCEL_YOLU = path.join(
  process.cwd(),
  "app",
  "borsa",
  "oran-analizi",
  "data",
  "oran-analizi.xlsx"
);
const HISSELER_DIZINI = path.join(process.cwd(), "data", "hisseler");

// --- KOLON EŞLEMESİ (Excel başlık metni -> alan) ----------------------------
// Soldaki anahtar JSON alanı, sağdaki Excel başlığının BİREBİR metni.
const KOLON = {
  donem: "Dönem",
  fk: "F/K",
  pddd: "PD/DD",
  peg: "PEG Oranı",
  roe: "NetKar/ Özsermaye", // ROE
  netMarj: "NetKar/ NetSatış", // net marj
  pdNetSatis: "PD/ NetSatış",
  cariOran: "Cari Oran",
  netKarDegisim: "Net Kar Değ%",
  netSatisDegisim: "Net Satış Değ%",
};

// Şirket objesine giren alanlar (donem hariç hepsi).
const SIRKET_ALANLARI = [
  "fk",
  "pddd",
  "peg",
  "roe",
  "netMarj",
  "pdNetSatis",
  "cariOran",
  "netKarDegisim",
  "netSatisDegisim",
];

const SEKTOR_ETIKETI = "Sektör"; // her grubun sonundaki toplam satırı (atlanır)

// --- Yardımcılar ------------------------------------------------------------

function sayiyaCevir(v) {
  if (v === null || v === undefined || v === "") return null;
  const n = typeof v === "number" ? v : Number(String(v).replace(",", "."));
  return Number.isFinite(n) ? n : null;
}

// Bugünün tarihi (yerel) ISO "YYYY-MM-DD" — guncellemeTarihi için. Oranlar her
// gün kapanış fiyatıyla güncellendiğinden import her çalıştığında bu yenilenir.
function bugunISO() {
  const d = new Date();
  const ay = String(d.getMonth() + 1).padStart(2, "0");
  const gun = String(d.getDate()).padStart(2, "0");
  return `${d.getFullYear()}-${ay}-${gun}`;
}

// "26-03" -> "2026-03", "25-12" -> "2025-12"
function donemNormalle(v) {
  if (!v) return null;
  const m = /^(\d{2})-(\d{2})$/.exec(String(v).trim());
  if (!m) return String(v).trim();
  return `20${m[1]}-${m[2]}`;
}

// 0 / null / boş alanları AT (yarım veri göstermemek için). 0 anlamlı veri
// kabul edilmez (Excel'de "veri yok" 0 olarak geliyor).
function alanlariTopla(row, idx, alanlar) {
  const obj = {};
  for (const alan of alanlar) {
    const sutun = KOLON[alan];
    const i = idx[sutun];
    if (i === undefined) continue;
    const n = sayiyaCevir(row[i]);
    if (n === null || n === 0) continue;
    obj[alan] = n;
  }
  return obj;
}

function hisseDosyaYolu(kod) {
  return path.join(HISSELER_DIZINI, `${kod.toLowerCase()}.json`);
}

// --- Excel'i sektör gruplarına ayır -----------------------------------------

function excelOku() {
  const buffer = fs.readFileSync(EXCEL_YOLU);
  const wb = XLSX.read(buffer, { type: "buffer" });
  const sheet = wb.Sheets[wb.SheetNames[0]];
  const rows = XLSX.utils.sheet_to_json(sheet, {
    header: 1,
    defval: null,
    raw: true,
  });

  const basliklar = rows[0].map((h) => (h === null ? "" : String(h).trim()));
  const idx = {};
  basliklar.forEach((h, i) => {
    if (h) idx[h] = i;
  });

  // Eksik kolon uyarısı.
  for (const sutun of Object.values(KOLON)) {
    if (idx[sutun] === undefined) {
      console.warn(`UYARI: Excel'de "${sutun}" kolonu bulunamadı.`);
    }
  }

  const senetIdx = idx["Senet"] ?? 0;

  // { kod -> { donem, sirket } }. Sektör başlık ve "Sektör" toplam satırları
  // atlanır (sektör kıyası yapılmıyor).
  const sirketKayitlari = []; // { kod, donem, sirket }

  for (let r = 1; r < rows.length; r++) {
    const row = rows[r];
    const kodHam = row[senetIdx];
    if (kodHam === null || String(kodHam).trim() === "") continue;
    const etiket = String(kodHam).trim();

    // Grup sonu "Sektör" toplam satırı → atla (artık kullanılmıyor).
    if (etiket === SEKTOR_ETIKETI) continue;

    const veriDolu = row
      .slice(1)
      .some((c) => c !== null && c !== "" && c !== 0);

    // Sektör başlığı: kod dolu, diğer hücreler boş → atla.
    if (!veriDolu) continue;

    // Normal şirket satırı.
    const donem = donemNormalle(row[idx[KOLON.donem]]);
    const sirket = alanlariTopla(row, idx, SIRKET_ALANLARI);
    sirketKayitlari.push({ kod: etiket, donem, sirket });
  }

  return sirketKayitlari;
}

// --- JSON'a yaz -------------------------------------------------------------

function main() {
  const filtre = process.argv
    .slice(2)
    .map((s) => s.trim().toLowerCase())
    .filter(Boolean);
  const filtreSet = filtre.length > 0 ? new Set(filtre) : null;

  const kayitlar = excelOku();
  const bugun = bugunISO();

  let yazilan = 0;
  let atlanan = 0;
  let dosyaYok = 0;

  for (const kayit of kayitlar) {
    const kodKucuk = kayit.kod.toLowerCase();
    if (filtreSet && !filtreSet.has(kodKucuk)) continue;

    const dosya = hisseDosyaYolu(kodKucuk);
    if (!fs.existsSync(dosya)) {
      dosyaYok++;
      if (filtreSet) console.warn(`Künye JSON yok, atlandı: ${kodKucuk}.json`);
      continue;
    }

    // Şirketin tek bir geçerli oranı bile yoksa temelOranlar yazma.
    if (Object.keys(kayit.sirket).length === 0) {
      atlanan++;
      continue;
    }

    let json;
    try {
      json = JSON.parse(fs.readFileSync(dosya, "utf-8"));
    } catch {
      console.warn(`Bozuk JSON, atlandı: ${kodKucuk}.json`);
      atlanan++;
      continue;
    }

    // donem'e DOKUNMA: mevcut JSON'daki mali dönem korunur (çeyrek değişince elle
    // güncelleniyor); yalnızca künyede hiç donem yoksa Excel'deki değer kullanılır.
    const mevcutDonem = json.temelOranlar?.donem;
    json.temelOranlar = {
      donem: mevcutDonem ?? kayit.donem,
      guncellemeTarihi: bugun, // her çalıştırmada bugünün tarihiyle yenilenir
      sirket: kayit.sirket,
    };

    fs.writeFileSync(dosya, JSON.stringify(json, null, 2) + "\n", "utf-8");
    yazilan++;
    if (filtreSet) console.log(`Güncellendi: ${kodKucuk}.json (güncelleme: ${bugun})`);
  }

  console.log(
    `\nBitti. Yazılan: ${yazilan} | Oranı olmayan (atlanan): ${atlanan} | Künyesi olmayan: ${dosyaYok} | Excel'deki şirket: ${kayitlar.length}`
  );
}

main();
