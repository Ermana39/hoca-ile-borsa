import fs from "node:fs";
import path from "node:path";

const slug = process.argv[2]?.trim();
const baslik = process.argv.slice(3).join(" ").trim();

if (!slug || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) {
  console.error(
    "Kullanım: npm run news:new -- haber-slug \"Haber başlığı\""
  );
  process.exit(1);
}

function istanbulIso() {
  const parcalar = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Europe/Istanbul",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  }).formatToParts(new Date());
  const degerler = Object.fromEntries(
    parcalar
      .filter((parca) => parca.type !== "literal")
      .map((parca) => [parca.type, parca.value])
  );
  return `${degerler.year}-${degerler.month}-${degerler.day}T${degerler.hour}:${degerler.minute}:${degerler.second}+03:00`;
}

const dizin = path.join(process.cwd(), "data", "haberler");
const dosya = path.join(dizin, `${slug}.json`);

if (fs.existsSync(dosya)) {
  console.error(`Haber kaydı zaten var: data/haberler/${slug}.json`);
  process.exit(1);
}

const simdi = istanbulIso();
const kayit = {
  surum: 1,
  durum: "taslak",
  slug,
  baslik,
  aciklama: "",
  kategori: "sirket-haberleri",
  etiket: "KAP Bildirimi",
  yayinTarihi: simdi,
  guncellemeTarihi: simdi,
  yazarSlug: "erman-hoca",
  gorsel: {
    src: `/${slug}.webp`,
    alt: "",
    genislik: 1200,
    yukseklik: 675,
  },
  ilgiliHisseler: [],
  kaynakOzeti: {
    giris: [],
    ozetKartlari: [],
    temelBilgiler: [],
    bolumler: [],
  },
  editorDegerlendirmesi: {
    giris:
      "Bu bölümde yalnızca resmî kaynağı tekrar etmeyin; gelişmenin olumlu tarafını, sınırlayıcı riskini, finansal/operasyonel etkisini ve izlenecek sonraki başlıkları özetleyin.",
    bolumler: [
      {
        baslik: "Haberin olumlu tarafı",
        maddeler: [],
        vurgu: "analiz",
      },
      {
        baslik: "Riskli veya sınırlayıcı taraf",
        maddeler: [],
        vurgu: "risk",
      },
      {
        baslik: "Nerelere etki edebilir?",
        paragraflar: [],
        vurgu: "analiz",
      },
      {
        baslik: "Takip edilecek başlıklar",
        maddeler: [],
        vurgu: "takip",
      },
    ],
  },
  kapEtkiAnalizi: {
    olayTuru: "diger",
    ozet: "",
    metrikler: [
      {
        tur: "hesaplanamadi",
        baslik: "Hesaplanacak etki metriği",
        neden: "",
        gerekliVeriler: [],
      },
    ],
    riskler: [],
    takipEdilecekler: [],
  },
  sorular: [],
  kaynaklar: [],
  yasalUyari:
    "Bu haber ve editoryal değerlendirme bilgilendirme amacıyla hazırlanmıştır; yatırım tavsiyesi değildir.",
};

fs.mkdirSync(dizin, { recursive: true });
fs.writeFileSync(dosya, `${JSON.stringify(kayit, null, 2)}\n`, "utf8");

console.log(`Taslak oluşturuldu: data/haberler/${slug}.json`);
console.log(`Eklenecek görsel: public/${slug}.webp`);
console.log(`Kontrol ederek yayınla: npm run news:publish -- --slug=${slug}`);
