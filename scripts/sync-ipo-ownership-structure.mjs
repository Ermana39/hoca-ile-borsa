import fs from "node:fs";
import path from "node:path";

const HALKA_ARZ_DIZINI = path.join(process.cwd(), "data", "halka-arz");
const yaz = process.argv.includes("--write");

const ILGILI_CUMLE_KALIPLARI = [
  /\bana orta/i,
  /\bnihai kontrol/i,
  /\bortaklık yapıs/i,
  /\bpay sahip/i,
  /\btek ortak\b/i,
  /\bpay oran/i,
  /\bsermayesinde\s*%/i,
  /\b%[\d,.]+\s+paya sahip/i,
  /sahibi ve yönetim kurulu/i,
  /kurucu(?:su|lar| ortak| ve)/i,
  /yönetim kurulu (?:başkanı|başkan vekili|başkan yardımcısı|üyesi)/i,
  /yönetim kurulu başkanlığ/i,
  /genel müdür(?:ü| ise| olarak)?/i,
  /çatısı altında/i,
  /bünyesinde faaliyet gösteren/i,
  /bünyesine katıl/i,
  /bağlı olduğu grup/i,
  /iştiraki olarak/i,
  /ortaklığıyla kurul/i,
  /iştirakleri (?:arasında|bulun)/i,
  /grup yapısı içinde/i,
  /bağlı ortaklıkları arasında/i,
  /yönetim hakimiyet/i,
  /%100 bağlı ortak/i,
  /kamu sermayeli/i,
];

const GENEL_DEGERLENDIRME_KALIPLARI = [
  /\bdeğerlendiril/i,
  /\bperformans\b/i,
  /\byatırımcıların\b/i,
  /\bbakması gerekir\b/i,
  /\byakından ilişkilidir\b/i,
];

function cumlelereAyir(metin) {
  return metin
    .split(/(?<=[.!?])\s+(?=[A-ZÇĞİÖŞÜ])/u)
    .map((cumle) => cumle.trim())
    .filter(Boolean);
}

function ortaklikCumleleri(metin) {
  if (!metin) return [];
  return cumlelereAyir(metin).filter(
    (cumle) =>
      ILGILI_CUMLE_KALIPLARI.some((kalip) => kalip.test(cumle)) &&
      !GENEL_DEGERLENDIRME_KALIPLARI.some((kalip) => kalip.test(cumle))
  );
}

function paySatanOrtaklar(halkaArzSekli) {
  return (halkaArzSekli ?? [])
    .filter((satir) => /(?:ek\s+)?ortak satışı/i.test(satir))
    .map((satir) => satir.trim())
    .filter((satir, index, liste) => liste.indexOf(satir) === index);
}

function ortaklikAlaniEkle(hamJson, ortaklikYapisi) {
  const kapanis = hamJson.lastIndexOf("}");
  if (kapanis < 0) throw new Error("JSON kapanış karakteri bulunamadı.");

  const govde = hamJson.slice(0, kapanis).trimEnd();
  const alan = JSON.stringify(ortaklikYapisi, null, 2).replace(/\n/g, "\n  ");
  return `${govde},\n  "ortaklikYapisi": ${alan}\n}\n`;
}

const dosyalar = fs
  .readdirSync(HALKA_ARZ_DIZINI)
  .filter((dosya) => dosya.endsWith(".json") && !dosya.startsWith("_"));

let taslakSayisi = 0;
let guncellenen = 0;
let atlananManuel = 0;
let verisiz = 0;

for (const dosya of dosyalar) {
  const dosyaYolu = path.join(HALKA_ARZ_DIZINI, dosya);
  const hamJson = fs.readFileSync(dosyaYolu, "utf8");
  const veri = JSON.parse(hamJson);

  if (veri.seo?.contentStatus === "onayli") continue;
  taslakSayisi += 1;

  if (veri.ortaklikYapisi) {
    atlananManuel += 1;
    continue;
  }

  const aciklamalar = ortaklikCumleleri(veri.sirketHakkinda);
  const halkaArzdaPaySatanOrtaklar = paySatanOrtaklar(veri.halkaArzSekli);

  if (aciklamalar.length === 0 && halkaArzdaPaySatanOrtaklar.length === 0) {
    verisiz += 1;
    continue;
  }

  const ortaklikYapisi = {
    ...(aciklamalar.length > 0 ? { aciklamalar } : {}),
    ...(halkaArzdaPaySatanOrtaklar.length > 0
      ? { halkaArzdaPaySatanOrtaklar }
      : {}),
    kaynakNotu:
      "Kaynak: Taslak izahname ile şirketin kamuya açık kurumsal bilgilerinden derlenmiştir.",
    otomatikDerlendi: true,
  };

  if (yaz) {
    fs.writeFileSync(dosyaYolu, ortaklikAlaniEkle(hamJson, ortaklikYapisi), "utf8");
  }
  guncellenen += 1;
}

console.log(
  [
    `Taslak kayıt: ${taslakSayisi}`,
    `${yaz ? "Güncellenen" : "Güncellenecek"}: ${guncellenen}`,
    `Korunan manuel kayıt: ${atlananManuel}`,
    `Açık ortaklık verisi bulunmayan: ${verisiz}`,
  ].join("\n")
);
