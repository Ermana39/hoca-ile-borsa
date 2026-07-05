// Taslak/onaylı izahname sayfaları için, sayfada ZATEN bulunan yapısal
// verilerden (arz yapısı, halka açıklık oranı, taahhüt özeti, finansal tablo,
// sektör) türetilen risk değerlendirmesi. Amaç: her şirket sayfasına, o
// şirkete özgü ve doğrulanabilir verilere dayalı özgün içerik katmak.
//
// ÖNEMLİ: Bu maddeler resmî izahnamenin "Risk Faktörleri" bölümünün kopyası
// DEĞİLDİR; arzın kamuya açık yapısından çıkarılan genel değerlendirmelerdir.
// İfade çeşitliliği, oranYorumla/sözlük ile aynı hash desenini kullanır
// (JS'te FNV çarpımı Math.imul ile yapılmalı; aksi halde dağılım bozulur).

import type { HalkaArzVeri } from "@/lib/halka-arz";
import { bekleyenDeger } from "@/lib/halka-arz";

function fnv1a(str: string): number {
  let h = 0x811c9dc5;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 0x01000193) >>> 0;
  }
  return h;
}

function sec<T>(slug: string, kalip: string, arr: T[]): T {
  return arr[fnv1a(`${slug}|${kalip}`) % arr.length];
}

// ---- Sektör tespiti (ad + hakkında metninden) ------------------------------

type SektorTanimi = {
  key: string;
  anahtarlar: string[];
  // Sektöre özgü risk cümlesi varyantları (hash ile biri seçilir).
  varyantlar: string[];
};

const SEKTORLER: SektorTanimi[] = [
  {
    key: "madencilik",
    anahtarlar: ["maden", "madencilik", "cevher", "altın", "bakır", "kömür", "metal"],
    varyantlar: [
      "Madencilik faaliyetleri; emtia (metal) fiyatları, cevher tenörü, üretim maliyetleri, ihracat pazarı ve kur hareketlerine yüksek duyarlılık taşır. Bu değişkenlerdeki olumsuz seyir gelir ve kârlılığı doğrudan etkileyebilir.",
      "Emtia fiyatlarındaki dalgalanma, rezerv/tenör belirsizliği, çevre ve ruhsat düzenlemeleri ile ihracat kaynaklı kur etkisi, madencilik şirketlerinin başlıca risk başlıklarıdır.",
      "Sektörün doğası gereği metal fiyatı döngüleri, saha verimliliği, lojistik maliyetleri ve regülasyon değişiklikleri, üretim ve kârlılık üzerinde belirgin risk oluşturur.",
    ],
  },
  {
    key: "gyo",
    anahtarlar: ["gayrimenkul yatırım ortaklığı", "gayrimenkul yatirim", "gyo"],
    varyantlar: [
      "Gayrimenkul yatırım ortaklıklarında faiz oranlarındaki yükseliş, gayrimenkul değerleme varsayımları, proje teslim takvimi ve satış hızı başlıca risk unsurlarıdır; portföy değeri piyasa koşullarına göre değişebilir.",
      "Faiz ve finansman maliyetlerindeki artış, proje geliştirme süreçlerindeki gecikmeler ve gayrimenkul talebindeki daralma, GYO gelirlerini ve net aktif değerini olumsuz etkileyebilir.",
      "Gayrimenkul piyasasının döngüsel yapısı, kira/satış gelirlerinin ekonomik koşullara bağlılığı ve yüksek finansman ihtiyacı, bu tür şirketlerde dikkatle izlenmesi gereken risklerdir.",
    ],
  },
  {
    key: "gsyo",
    anahtarlar: ["girişim sermayesi", "girisim sermayesi"],
    varyantlar: [
      "Girişim sermayesi yatırım ortaklıklarında portföydeki şirketlerin erken aşama doğası, değerleme belirsizliği ve çıkış (exit) zamanlaması yüksek risk taşır; yatırımların bir bölümü beklenen getiriyi sağlamayabilir.",
      "Portföy şirketlerinin başarısızlık olasılığı, değerlemelerin öznelliği ve nakde dönüş sürelerinin uzunluğu, girişim sermayesi ortaklıklarının temel risk başlıklarıdır.",
    ],
  },
  {
    key: "enerji",
    anahtarlar: ["enerji", "elektrik üretim", "elektrik dağıtım", "elektrik perakende", "elektrik enerjisi", "ges", "res", "hes", "yenilenebilir", "güneş enerji", "rüzgar enerji", "elektrik uretim", "elektrik dagitim"],
    varyantlar: [
      "Enerji sektöründe regülasyon (EPDK) değişiklikleri, elektrik fiyat mekanizmaları, üretim kapasitesinin hava/su koşullarına bağlılığı ve yatırım finansmanı maliyeti başlıca risklerdir.",
      "Düzenleyici çerçevedeki değişiklikler, enerji fiyatlarındaki dalgalanma, proje finansmanı yükü ve üretim sürekliliği, enerji şirketlerinde dikkatle izlenmesi gereken unsurlardır.",
      "Elektrik üretim ve dağıtımında tarife düzenlemeleri, kapasite kullanımı, tahsilat performansı ve altyapı yatırım gereksinimi, gelir ve kârlılık üzerinde risk oluşturur.",
    ],
  },
  {
    key: "banka-finans",
    anahtarlar: ["banka", "bankası", "katılım bankası", "faktoring", "yatırım menkul", "menkul değerler", "portföy yönetimi", "sigorta"],
    varyantlar: [
      "Finansal kuruluşlarda faiz oranı hareketleri, aktif kalitesi (tahsilat/temerrüt), sermaye yeterliliği ve düzenleyici sermaye gereklilikleri başlıca risk başlıklarıdır.",
      "Kredi/alacak riski, faiz marjındaki daralma, piyasa dalgalanmaları ve regülasyon değişiklikleri, finans sektörü şirketlerinin performansını doğrudan etkileyebilir.",
    ],
  },
  {
    key: "medya",
    anahtarlar: ["yayıncılık", "yayincilik", "medya", "televizyon", "yayın", "reklam", "içerik", "dijital platform"],
    varyantlar: [
      "Medya ve yayıncılık sektöründe reklam pazarındaki dalgalanma, reyting/izlenme performansı, içerik maliyetleri ve dijital rekabet başlıca risk unsurlarıdır.",
      "Reklam gelirlerinin ekonomik konjonktüre duyarlılığı, içerik üretim maliyetleri ve platform rekabeti, medya şirketlerinin performansını doğrudan etkileyebilir.",
    ],
  },
  {
    key: "gida-tarim",
    anahtarlar: ["gıda", "gida", "tarım", "tarim", "hayvancılık", "süt", "makarna", "yem", "içecek", "dondurulmuş", "konserve", "et ürün", "gıda san"],
    varyantlar: [
      "Gıda ve tarım faaliyetlerinde hammadde (emtia) fiyatları, hava/iklim koşulları, gıda güvenliği düzenlemeleri ve tedarik zinciri maliyetleri başlıca risk unsurlarıdır.",
      "Tarımsal emtia fiyat dalgalanmaları, mevsimsellik, lojistik ve enerji maliyetleri ile talep koşulları, gıda üreticilerinin marjlarını etkileyebilir.",
    ],
  },
  {
    key: "insaat",
    anahtarlar: ["inşaat", "insaat", "prefabrik", "beton", "yapı", "yapi", "müteahhit", "taahhüt"],
    varyantlar: [
      "İnşaat ve taahhüt işlerinde proje teslim takvimi, malzeme ve işçilik maliyetleri, kamu/özel yatırım talebi ve tahsilat süreçleri başlıca risk başlıklarıdır.",
      "Sözleşme bazlı iş modelinin proje gecikmelerine, maliyet artışlarına ve talep dalgalanmalarına duyarlılığı, inşaat şirketlerinde izlenmesi gereken risklerdir.",
    ],
  },
  {
    key: "tekstil",
    anahtarlar: ["tekstil", "çorap", "corap", "iplik", "kumaş", "konfeksiyon", "giyim"],
    varyantlar: [
      "Tekstil sektöründe ihracat pazarına bağımlılık, kur hareketleri, pamuk/iplik gibi hammadde fiyatları ve rekabet yoğunluğu başlıca risk unsurlarıdır.",
      "İhracat talebindeki değişim, kur etkisi, hammadde maliyetleri ve düşük marjlı rekabet, tekstil üreticilerinin kârlılığını etkileyebilir.",
    ],
  },
  {
    key: "otomotiv",
    anahtarlar: ["otomotiv", "motor", "jant", "yedek parça", "araç", "lastik"],
    varyantlar: [
      "Otomotiv ve yan sanayide talep döngüselliği, ana sanayi siparişlerine bağımlılık, hammadde (metal) maliyetleri ve kur etkisi başlıca risklerdir.",
      "Sektörün konjonktüre duyarlılığı, müşteri yoğunlaşması, hammadde fiyatları ve ihracat kaynaklı kur riski, otomotiv şirketlerinde dikkat gerektirir.",
    ],
  },
  {
    key: "kimya-plastik",
    anahtarlar: ["kimya", "plastik", "pvc", "boya", "gübre", "gubre", "petrokimya"],
    varyantlar: [
      "Kimya ve plastik üretiminde petrol türevi hammadde fiyatları, enerji maliyetleri, çevre düzenlemeleri ve kur hareketleri başlıca risk başlıklarıdır.",
      "Hammadde fiyat oynaklığı, yüksek enerji yoğunluğu ve regülasyon gereksinimleri, kimya/plastik şirketlerinin marjlarını etkileyebilir.",
    ],
  },
  {
    key: "metal-celik",
    anahtarlar: ["demir", "çelik", "celik", "metal", "alüminyum", "aluminyum", "döküm", "boru"],
    varyantlar: [
      "Demir-çelik ve metal sanayinde hurda/hammadde maliyetleri, enerji giderleri, küresel çelik fiyatları, ihracat talebi ve kur hareketleri başlıca risklerdir.",
      "Emtia fiyat döngüleri, yüksek enerji yoğunluğu, kapasite kullanımı ve dış talep koşulları, metal üreticilerinin performansını doğrudan etkileyebilir.",
    ],
  },
  {
    key: "teknoloji",
    anahtarlar: ["teknoloji", "bilişim", "bilisim", "yazılım", "yazilim", "elektronik", "savunma", "oyun"],
    varyantlar: [
      "Teknoloji ve bilişim alanında rekabet yoğunluğu, ürün/teknoloji değişim hızı, nitelikli personel bağımlılığı ve proje/ihale sürekliliği başlıca risk unsurlarıdır.",
      "Hızlı teknolojik değişim, müşteri/proje yoğunlaşması ve ölçeklenme belirsizliği, teknoloji şirketlerinde izlenmesi gereken risklerdir.",
    ],
  },
  {
    key: "turizm",
    anahtarlar: ["turizm", "otel", "otelcilik", "konaklama", "seyahat", "tatil"],
    varyantlar: [
      "Turizm ve konaklama faaliyetlerinde sezonsallık, doluluk oranları, jeopolitik/talep şokları ve döviz kuru hareketleri başlıca risk başlıklarıdır.",
      "Talebin ekonomik ve mevsimsel koşullara duyarlılığı, yüksek sabit maliyet yapısı ve dış talebe bağımlılık, turizm şirketlerinde dikkat gerektirir.",
    ],
  },
  {
    key: "saglik",
    anahtarlar: ["sağlık", "saglik", "ilaç", "ilac", "medikal", "biyomedikal", "hastane"],
    varyantlar: [
      "Sağlık ve ilaç alanında ruhsat/regülasyon süreçleri, geri ödeme politikaları, Ar-Ge yükü ve tedarik zinciri bağımlılığı başlıca risk unsurlarıdır.",
      "Düzenleyici onay süreçleri, fiyatlandırma politikaları ve tedarik bağımlılığı, sağlık sektörü şirketlerinin faaliyetlerini etkileyebilir.",
    ],
  },
  {
    key: "ambalaj-mobilya",
    anahtarlar: ["ambalaj", "mukavva", "karton", "mobilya", "kağıt", "kagit"],
    varyantlar: [
      "Ambalaj ve orman ürünleri sektöründe hammadde (kağıt/selüloz) fiyatları, enerji maliyetleri, ihracat talebi ve kur hareketleri başlıca risklerdir.",
      "Hammadde fiyat dalgalanmaları, enerji yoğunluğu ve talep koşulları, ambalaj/mobilya üreticilerinin marjlarını etkileyebilir.",
    ],
  },
];

// Türkçe küçük harf sözcük sınırı: anahtar kelime, harf olmayan bir karakterle
// (veya metin başı/sonu) çevrelenmeli. Böylece "res" -> "adresi" gibi yanlış
// substring eşleşmeleri engellenir.
const TR_HARF = "a-zçğıöşü0-9";

function kelimeGecerMi(metin: string, anahtar: string): boolean {
  const esc = anahtar.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const re = new RegExp(`(?<![${TR_HARF}])${esc}(?![${TR_HARF}])`);
  return re.test(metin);
}

// Açıklama metninde (şirket adı dışında) eşleşmesine izin VERİLMEYEN, yan
// anlamda sık geçen belirsiz anahtarlar. Bunlar yalnızca şirket ADINDA
// eşleşirse sektör sinyali sayılır (örn. "sigorta kutusu" ≠ sigorta şirketi).
const BELIRSIZ_ANAHTARLAR = new Set([
  "sigorta",
  "banka",
  "bankası",
  "res",
  "hes",
  "ges",
  "metal",
  "boya",
  "reklam",
  "içerik",
  "elektrik",
  "yatırım menkul",
  "menkul değerler",
  "portföy yönetimi",
]);

export function sektorRiskCumlesi(veri: HalkaArzVeri): string | null {
  const ad = veri.sirketAdi.toLocaleLowerCase("tr-TR");
  const tamMetin = `${veri.sirketAdi} ${veri.sirketHakkinda ?? ""}`.toLocaleLowerCase(
    "tr-TR"
  );
  // 1) En güvenilir sinyal: şirket adı. Tüm anahtarlar geçerli.
  for (const s of SEKTORLER) {
    if (s.anahtarlar.some((a) => kelimeGecerMi(ad, a))) {
      return sec(veri.slug + s.key, "sektor-risk", s.varyantlar);
    }
  }
  // 2) Ad sektör vermezse açıklama metnine bak; ama belirsiz anahtarlar hariç.
  for (const s of SEKTORLER) {
    const guvenli = s.anahtarlar.filter((a) => !BELIRSIZ_ANAHTARLAR.has(a));
    if (guvenli.some((a) => kelimeGecerMi(tamMetin, a))) {
      return sec(veri.slug + s.key, "sektor-risk", s.varyantlar);
    }
  }
  return null;
}

// ---- Yardımcı çözümleyiciler ----------------------------------------------

function oraniSayiyaCevir(oran?: string): number | null {
  if (!oran) return null;
  const m = oran.replace("%", "").replace(",", ".").trim();
  const n = Number(m);
  return Number.isFinite(n) ? n : null;
}

type ArzYapisi = {
  tip: "tam-ortak-satisi" | "karma" | "tam-sermaye" | "bilinmiyor";
  ortakSatisiOrani: number | null; // 0-100
};

function tutarCoz(satir: string): number {
  // "Ortak Satışı: 46.800.000 Lot (...)" -> 46800000
  const m = satir.match(/([\d.]+)\s*Lot/i);
  if (!m) return 0;
  const n = Number(m[1].replace(/\./g, ""));
  return Number.isFinite(n) ? n : 0;
}

function arzYapisiCoz(veri: HalkaArzVeri): ArzYapisi {
  const satirlar = veri.halkaArzSekli ?? [];
  if (satirlar.length === 0) return { tip: "bilinmiyor", ortakSatisiOrani: null };
  let sermaye = 0;
  let ortak = 0;
  for (const s of satirlar) {
    const kucuk = s.toLocaleLowerCase("tr-TR");
    const tutar = tutarCoz(s);
    if (kucuk.includes("sermaye artırımı") || kucuk.includes("sermaye artirimi")) {
      sermaye += tutar;
    } else if (kucuk.includes("ortak satışı") || kucuk.includes("ortak satisi")) {
      ortak += tutar;
    }
  }
  const toplam = sermaye + ortak;
  if (toplam === 0) {
    // Tutar okunamadı; en azından satır metninden tip çıkar.
    const hepsiOrtak = satirlar.every((s) =>
      s.toLocaleLowerCase("tr-TR").includes("ortak satışı")
    );
    const hepsiSermaye = satirlar.every((s) =>
      s.toLocaleLowerCase("tr-TR").includes("sermaye artırımı")
    );
    if (hepsiOrtak) return { tip: "tam-ortak-satisi", ortakSatisiOrani: 100 };
    if (hepsiSermaye) return { tip: "tam-sermaye", ortakSatisiOrani: 0 };
    return { tip: "bilinmiyor", ortakSatisiOrani: null };
  }
  const oran = Math.round((ortak / toplam) * 100);
  if (ortak > 0 && sermaye === 0) return { tip: "tam-ortak-satisi", ortakSatisiOrani: 100 };
  if (sermaye > 0 && ortak === 0) return { tip: "tam-sermaye", ortakSatisiOrani: 0 };
  return { tip: "karma", ortakSatisiOrani: oran };
}

const OLCEK: Record<string, number> = {
  milyar: 1e9,
  milyon: 1e6,
  bin: 1e3,
};

function finansalDegerCoz(s?: string): number | null {
  if (!s) return null;
  const kucuk = s.toLocaleLowerCase("tr-TR");
  const m = kucuk.match(/([\d.,]+)/);
  if (!m) return null;
  let n = Number(m[1].replace(/\./g, "").replace(",", "."));
  if (!Number.isFinite(n)) return null;
  for (const [k, v] of Object.entries(OLCEK)) {
    if (kucuk.includes(k)) {
      n *= v;
      break;
    }
  }
  return n;
}

// Son iki tam yıl (dönemi "/" içermeyen) hasılatına göre gerileme var mı?
function finansalGerilemeVarMi(veri: HalkaArzVeri): boolean {
  const hasilat = (veri.finansalVeriler ?? []).find((r) =>
    r.kalem?.toLocaleLowerCase("tr-TR").includes("hasılat")
  );
  if (!hasilat) return false;
  const tamYillar = (veri.finansalDonemler ?? []).filter((d) => !d.includes("/"));
  if (tamYillar.length < 2) return false;
  const yeni = finansalDegerCoz(hasilat.donemler[tamYillar[0]]);
  const eski = finansalDegerCoz(hasilat.donemler[tamYillar[1]]);
  if (yeni === null || eski === null || eski === 0) return false;
  return yeni < eski * 0.98; // %2'den fazla gerileme
}

// ---- Risk maddeleri üretimi -----------------------------------------------

export type RiskMaddesi = { baslik: string; metin: string };

export function riskMaddeleri(veri: HalkaArzVeri): RiskMaddesi[] {
  const slug = veri.slug;
  const maddeler: RiskMaddesi[] = [];

  // 1) Arz yapısı riski
  const arz = arzYapisiCoz(veri);
  if (arz.tip === "tam-ortak-satisi") {
    maddeler.push({
      baslik: "Arz yapısı riski",
      metin: sec(slug, "arz-tamortak", [
        "Halka arzın tamamı mevcut ortakların pay satışından oluştuğundan, satış geliri şirkete girmeyecek; bu işlem şirketin bilançosuna taze kaynak sağlamayacaktır. Yatırımcı, şirketin operasyonel gücü ile arzdan doğan nakit akışını ayrı değerlendirmelidir.",
        "Arz yalnızca ortak satışı yoluyla yapıldığından, elde edilecek tutar şirkete değil satan ortaklara gidecektir. Dolayısıyla arzın şirketin büyüme veya yatırım kapasitesine doğrudan katkısı beklenmemelidir.",
      ]),
    });
  } else if (arz.tip === "karma") {
    maddeler.push({
      baslik: "Arz yapısı riski",
      metin: sec(slug, "arz-karma", [
        `Arzın bir bölümü mevcut ortakların pay satışından oluşuyor${arz.ortakSatisiOrani !== null ? ` (arzın yaklaşık %${arz.ortakSatisiOrani}'i ortak satışı)` : ""}; bu kısımdan elde edilecek gelir şirkete değil satan ortaklara gider. Şirkete fiilen girecek kaynak, arz büyüklüğünün altındadır.`,
        `Halka arzda sermaye artırımının yanı sıra ortak satışı da bulunduğundan${arz.ortakSatisiOrani !== null ? ` (yaklaşık %${arz.ortakSatisiOrani} ortak satışı)` : ""}, şirket kasasına girecek tutar ile ortaklara ödenecek kısmın ayrı değerlendirilmesi gerekir.`,
        `Bu arz karma yapıdadır: bir bölümü sermaye artırımı, bir bölümü ortak satışıdır${arz.ortakSatisiOrani !== null ? ` (yaklaşık %${arz.ortakSatisiOrani} ortak satışı)` : ""}. Yalnızca sermaye artırımı kısmı şirkete kaynak sağlar; ortak satışı tutarı şirket bilançosuna girmez.`,
        `Arz büyüklüğünün tamamı şirkete kaynak olarak dönmez; yapının ortak satışı içeren bölümünden${arz.ortakSatisiOrani !== null ? ` (yaklaşık %${arz.ortakSatisiOrani})` : ""} doğan gelir satan ortaklara aittir. Şirkete girecek net tutar bu nedenle daha düşüktür.`,
      ]),
    });
  } else if (arz.tip === "tam-sermaye") {
    maddeler.push({
      baslik: "Seyreltme riski",
      metin: sec(slug, "arz-sermaye", [
        "Arz sermaye artırımı yoluyla yapıldığından elde edilecek kaynak şirkete girecek (olumlu yön); ancak yeni pay ihracı mevcut pay başına düşen değerde seyreltme (dilution) etkisi yaratır ve arz sonrası fiyat performansı piyasa koşullarına bağlıdır.",
        "Sermaye artırımı şirkete taze kaynak sağlasa da dolaşımdaki pay sayısının artması, pay başına kâr ve ortaklık oranında seyreltmeye yol açar; bu etki değerlendirmede dikkate alınmalıdır.",
      ]),
    });
  }

  // 2) Halka açıklık / likidite riski
  const oran = oraniSayiyaCevir(veri.halkaAciklikOrani);
  if (oran !== null) {
    if (oran < 25) {
      maddeler.push({
        baslik: "Likidite ve halka açıklık riski",
        metin: sec(slug, "aciklik-dusuk", [
          `Planlanan halka açıklık oranı görece düşük (%${veri.halkaAciklikOrani?.replace("%", "")}). Dolaşımdaki pay miktarının sınırlı olması, işlem hacminin düşük kalmasına ve fiyatın sert dalgalanmasına yol açabilir.`,
          `Halka açıklık oranının düşük olması (%${veri.halkaAciklikOrani?.replace("%", "")}), az sayıda payın işlem görmesi nedeniyle likidite riskini ve fiyat oynaklığını artırabilir.`,
        ]),
      });
    } else if (oran >= 40) {
      maddeler.push({
        baslik: "Halka açıklık",
        metin: sec(slug, "aciklik-yuksek", [
          `Halka açıklık oranı görece yüksek (%${veri.halkaAciklikOrani?.replace("%", "")}); bu durum genellikle daha derin bir işlem ortamı sağlasa da arz büyüklüğünün talep tarafından karşılanması ayrı bir izleme başlığıdır.`,
        ]),
      });
    }
  }

  // 3) Fiyat istikrarı riski
  const fi = veri.taahhutOzeti?.fiyatIstikrari ?? "";
  const fiKucuk = fi.toLocaleLowerCase("tr-TR");
  if (fiKucuk.includes("planlanmamak") || fiKucuk.includes("öngörülm") || fiKucuk.includes("yer almamak")) {
    maddeler.push({
      baslik: "Fiyat istikrarı riski",
      metin: sec(slug, "fi-yok", [
        "Taslak izahnamede fiyat istikrarı işlemi öngörülmüyor. Bu, payların işlem görmeye başlamasından sonra fiyatın tamamen piyasa koşullarına bırakılacağı; arz fiyatının altına inişlerde destekleyici bir alım mekanizmasının bulunmayacağı anlamına gelir.",
        "Fiyat istikrarı planlanmadığından, arz sonrası olası düşüşlerde fiyatı destekleyecek bir alım öngörülmemektedir; bu durum kısa vadeli fiyat riskini artırabilir.",
      ]),
    });
  } else if (fi && (fiKucuk.includes("netleşme") || fiKucuk.includes("netlesme"))) {
    maddeler.push({
      baslik: "Fiyat istikrarı belirsizliği",
      metin: sec(slug, "fi-belirsiz", [
        "Fiyat istikrarına ilişkin bilgi henüz netleşmemiştir; bu koruma mekanizmasının uygulanıp uygulanmayacağı ve süresi onaylı izahname ile kesinleşecektir.",
      ]),
    });
  }

  // 4) Finansal görünüm riski (yalnızca belirgin gerileme varsa)
  if (finansalGerilemeVarMi(veri)) {
    maddeler.push({
      baslik: "Finansal görünüm riski",
      metin: sec(slug, "finansal-gerileme", [
        "Son tam yıl finansallarında hasılat tarafında gerileme dikkat çekiyor. Bu eğilimin geçici mi yoksa kalıcı mı olduğu; maliyet yapısı, talep koşulları ve marj gelişimiyle birlikte takip edilmelidir.",
        "Finansal tablolarda son dönemde hasılatın gerilediği görülüyor; bu görünümün sürdürülebilirliği net kâr, nakit akışı ve borçluluk kalemleriyle birlikte değerlendirilmelidir.",
      ]),
    });
  }

  // 5) Sektörel risk
  const sektor = sektorRiskCumlesi(veri);
  if (sektor) {
    maddeler.push({ baslik: "Sektörel riskler", metin: sektor });
  }

  // 6) Belirsizlik riski (tarih/fiyat kesinleşmemiş)
  const tarihYok = bekleyenDeger(veri.ozet.halkaArzTarihi);
  const fiyatYok = bekleyenDeger(veri.ozet.fiyatAralik);
  if (tarihYok || fiyatYok) {
    const eksik =
      tarihYok && fiyatYok
        ? "halka arz tarihi ve fiyat aralığı"
        : tarihYok
          ? "halka arz tarihi"
          : "halka arz fiyat aralığı";
    maddeler.push({
      baslik: "Belirsizlik riski",
      metin: sec(slug, "belirsizlik", [
        `Bu aşamada ${eksik} henüz kesinleşmemiştir. Arzın nihai koşulları (tahsisat, dağıtım, taahhütler dâhil) onaylı izahname ile değişebilir; kararlar kesin bilgiler açıklandıktan sonra verilmelidir.`,
        `Süreç taslak izahname aşamasında olduğundan ${eksik} netleşmemiştir. Nihai koşullar SPK onayının ardından yayımlanacak izahname ile belirlenecektir.`,
      ]),
    });
  }

  // 7) Genel piyasa/kapanış maddesi (her sayfada, hash-varyantlı)
  maddeler.push({
    baslik: "Genel piyasa riski",
    metin: sec(slug, "genel", [
      "Tüm hisse senedi yatırımlarında olduğu gibi, arz sonrası pay fiyatı genel piyasa koşulları, faiz ve likidite ortamı ile yatırımcı iştahından etkilenir; halka arza katılım kâr garantisi taşımaz.",
      "Pay fiyatının arz sonrası seyri; piyasa geneli, sektör algısı ve makroekonomik koşullara bağlıdır. Geçmiş halka arz performansları bu arz için gösterge oluşturmaz.",
      "Borsa yatırımlarının doğası gereği sermaye kaybı riski vardır. Arz sonrası fiyat, arz fiyatının altına inebilir; yatırım kararı risk ve getiri tercihlerine göre verilmelidir.",
    ]),
  });

  return maddeler;
}

// FAQ için kısa risk özeti (schema + görünür FAQ'da kullanılır).
export function riskOzetCumlesi(veri: HalkaArzVeri): string {
  const maddeler = riskMaddeleri(veri);
  const basliklar = maddeler
    .map((m) => m.baslik.toLocaleLowerCase("tr-TR"))
    .filter((b) => !b.includes("genel piyasa"))
    .slice(0, 3);
  const liste = basliklar.length > 0 ? basliklar.join(", ") : "arz yapısı ve piyasa koşulları";
  return `${veri.sirketAdi} halka arzında öne çıkan risk başlıkları arasında ${liste} yer alır. Ayrıntılı değerlendirme sayfadaki risk bölümünde; bağlayıcı risk faktörleri ise resmî izahnamede yer alır.`;
}
