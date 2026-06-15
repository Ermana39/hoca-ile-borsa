// ============================================================================
//  TEMEL ORAN YORUMLAMA (KIYASSIZ)
// ----------------------------------------------------------------------------
//  Her şirketin temel oranlarını SEKTÖR KIYASI OLMADAN, her oranı KENDİ değerine
//  göre yorumlar. Sektör ortalaması verisi uç değerlerle şiştiği için güvenilir
//  değil; bu yüzden kıyas YAPILMAZ. Mantık her oran için aynıdır:
//    "bu oran genel olarak neyi ölçer + bu şirkette şu seviyede + bu seviye neyi
//     işaret edebilir + tek başına yeterli değildir."
//
//  Cümleler kalıplaşmasın diye her oran/seviye için birden çok şablon tutulur;
//  şablon seçimi şirket koduna göre DETERMİNİSTİK bir hash ile yapılır (aynı sayfa
//  her render'da aynı cümleyi verir ama farklı şirketler farklı şablonlara düşer).
//
//  Yorum dili kuralı (YMYL): "ucuz/pahalı, al/sat, yükselir/düşer, cazip, fırsat"
//  gibi KESİN yargı YOKTUR. Her cümle = gözlem + olası açıklama + "tek başına
//  yeterli değil" çerçevesi.
//
//  Yeni şablon eklemek için ilgili dizinin sonuna cümle eklemek yeterlidir.
// ============================================================================

// ---- Tipler ----------------------------------------------------------------

export type OranDeger = number | null;

export type SirketOranlari = {
  fk?: OranDeger;
  pddd?: OranDeger;
  peg?: OranDeger;
  roe?: OranDeger; // NetKar / Özsermaye
  netMarj?: OranDeger; // NetKar / NetSatış
  pdNetSatis?: OranDeger; // PD / NetSatış
  cariOran?: OranDeger;
  netKarDegisim?: OranDeger; // %
  netSatisDegisim?: OranDeger; // %
};

export type TemelOranlar = {
  donem: string; // mali dönem (bilanço çeyreği), "2026-03" — çeyrekte bir değişir
  guncellemeTarihi?: string; // fiyat/oran güncelleme günü (ISO), "2026-06-13" — her gün değişebilir
  sirket: SirketOranlari;
};

// ---- Deterministik şablon seçimi -------------------------------------------

// djb2 — basit, stabil string hash.
function hashla(metin: string): number {
  let h = 5381;
  for (let i = 0; i < metin.length; i++) {
    h = (h << 5) + h + metin.charCodeAt(i);
    h |= 0;
  }
  return Math.abs(h);
}

// Şirket kodu + bağlam anahtarına göre şablon seç. Aynı girdi her zaman aynı
// şablonu verir; farklı şirketler dağıtılır.
function sablonSec(havuz: string[], kod: string, anahtar: string): string {
  if (havuz.length === 0) return "";
  return havuz[hashla(`${kod}::${anahtar}`) % havuz.length];
}

// ---- Oran meta verisi ------------------------------------------------------

type OranKey =
  | "fk"
  | "pddd"
  | "peg"
  | "roe"
  | "netMarj"
  | "pdNetSatis"
  | "cariOran";

type Seviye = "dusuk" | "orta" | "yuksek";

const ORAN_META: Record<
  OranKey,
  { label: string; tip: "carpan" | "oran" }
> = {
  fk: { label: "F/K (Fiyat / Kazanç)", tip: "carpan" },
  pddd: { label: "PD/DD (Piyasa Değeri / Defter Değeri)", tip: "carpan" },
  peg: { label: "PEG Oranı", tip: "carpan" },
  roe: { label: "Özsermaye Kârlılığı (ROE)", tip: "oran" },
  netMarj: { label: "Net Kâr Marjı", tip: "oran" },
  pdNetSatis: { label: "PD / Net Satış", tip: "carpan" },
  cariOran: { label: "Cari Oran", tip: "carpan" },
};

// ---- Kolayca değiştirilebilir eşikler --------------------------------------
//
//  Her oran için iki eşik: [orta-alt, orta-üst].
//    deger <  alt           -> "dusuk"
//    alt <= deger <  ust     -> "orta"
//    deger >= ust           -> "yuksek"
//  Eşikler finansal olarak makul, genel-geçer seviyelerdir; uç/spesifik hüküm
//  içermez. Gerektiğinde buradan ayarlanabilir.
const ESIKLER: Record<OranKey, [number, number]> = {
  fk: [10, 25],
  pddd: [1, 3],
  peg: [1, 2],
  roe: [0.1, 0.2], // %10 / %20
  netMarj: [0.05, 0.15], // %5 / %15
  pdNetSatis: [1, 3],
  cariOran: [1, 2],
};

// Eşik tamponu (hysteresis benzeri). Oranlar her gün kapanış fiyatıyla
// güncellendiğinden, bir eşiğe çok yakın değer (örn. F/K 24,9 ↔ 25,1) günden
// güne seviye değiştirip yorumu zıplatabilir. Bunu önlemek için: bir değer ancak
// eşiği bu oran kadar BELİRGİN biçimde aştığında üst seviyeye geçer; eşik
// etrafındaki ±%5'lik bantta kalan değerler DETERMİNİSTİK olarak ALT seviyeye
// sabitlenir. Böylece efektif eşik = eşik × (1 + tampon) olur ve günlük minik
// fiyat oynamaları seviye değiştirmez. Bandı buradan ayarlayabilirsin.
export const ESIK_TAMPON_YUZDE = 0.05;

// Bu değerin üzerindeki oranlar "uç değer" sayılır (dönemsel/tek seferlik etki
// içerebileceği için seviye yorumu yerine dikkat notu gösterilir).
const UC_SINIR: Partial<Record<OranKey, number>> = {
  fk: 100,
  pddd: 50,
  peg: 10,
  pdNetSatis: 50,
};

// ---- Değer formatlama ------------------------------------------------------

function sayiFormatla(v: number, basamak = 2): string {
  return v.toLocaleString("tr-TR", {
    minimumFractionDigits: basamak,
    maximumFractionDigits: basamak,
  });
}

// carpan -> "29,24"  |  oran (kesir) -> "%19,00"
function degerFormatla(key: OranKey, v: number): string {
  if (ORAN_META[key].tip === "oran") {
    return `%${sayiFormatla(v * 100)}`;
  }
  return sayiFormatla(v);
}

// değişim yüzdesi zaten % cinsinden (52,58 -> "%52,58")
function yuzdeFormatla(v: number): string {
  return `%${sayiFormatla(v)}`;
}

// ============================================================================
//  ŞABLON HAVUZLARI
//  Her oran için 3 seviye (düşük / orta / yüksek) × en az 4 farklı cümle.
//  Cümleler kelime ve kuruluş olarak gerçekten farklı; açılışlar şablondan
//  şablona değişir, hepsi "tek başına yeterli değildir" çerçevesiyle biter ve
//  kesin yargı içermez.
// ============================================================================

type SablonSeti = Record<Seviye, string[]>;

const SABLONLAR: Record<OranKey, SablonSeti> = {
  fk: {
    dusuk: [
      "F/K çarpanı görece düşük bir seviyede; bu, dönemsel olarak yüksek bir kâr ya da büyüme beklentisinin sınırlı kalması gibi farklı nedenlerle oluşabilir. Tek başına bir gösterge değildir, kârın sürekliliğiyle birlikte okunmalıdır.",
      "Fiyat/kazanç oranı düşük tarafta kalıyor; bu tablo bazen güçlü dönem kârından bazen de temkinli beklentilerden kaynaklanır. Anlamlı bir yorum için kâr kalitesi ve büyüme görünümü birlikte değerlendirilmelidir.",
      "Şirket düşük bir F/K seviyesinden işlem görüyor; bunun arkasında tek seferlik kâr kalemleri de olabilir, kalıcı bir kârlılık da. Bu nedenle oran tek başına bir karar dayanağı oluşturmaz.",
      "Kazanca kıyasla görece düşük bir fiyatlama söz konusu; bu seviyenin sürdürülebilir mi yoksa dönemsel mi olduğu ancak diğer mali verilerle birlikte anlaşılabilir.",
      "Düşük bir F/K değeri göze çarpıyor; bu, kârın dönemsel olarak yüksek olmasıyla da ilgili olabilir, bu yüzden başka oranlarla desteklenmeden tek başına yorumlanmamalıdır.",
    ],
    orta: [
      "F/K çarpanı orta bir bantta yer alıyor; bu seviye genellikle ne belirgin bir iskontoya ne de yüksek bir beklentiye işaret eder. Yine de büyüme ve kâr istikrarıyla birlikte okunması gerekir.",
      "Fiyat/kazanç oranı dengeli sayılabilecek bir aralıkta; tek başına ayırt edici bir sinyal vermez, şirketin büyüme görünümüyle birlikte anlam kazanır.",
      "Şirketin F/K seviyesi orta düzeyde görünüyor; bu, kazanç ile fiyat arasında aşırı bir sapma olmadığını düşündürür, ancak kesin bir hüküm için yeterli değildir.",
      "Kazanca göre fiyatlama makul bir aralıkta seyrediyor; bu gözlem nötr bir tablo sunar ve kâr eğilimiyle desteklenmelidir.",
    ],
    yuksek: [
      "F/K çarpanı yüksek bir seviyede; bu çoğu zaman güçlü büyüme beklentisi ya da dönemsel olarak düşük kâr ile açıklanabilir. Beklentinin gerçekleşip gerçekleşmeyeceği ayrıca izlenmelidir.",
      "Fiyat/kazanç oranı yukarı tarafta; piyasanın bu şirkete dönük beklentileri yüksek olabilir, ancak bunun kârlılıkla desteklenip desteklenmediği tek başına bu orandan anlaşılamaz.",
      "Şirket yüksek bir F/K seviyesinden işlem görüyor; bu durum büyüme hızı ve kâr kalitesiyle birlikte değerlendirilmeden tek başına yorumlanmamalıdır.",
      "Kazanca kıyasla yüklü bir fiyatlama göze çarpıyor; primin sürdürülebilir bir kârlılığa mı yoksa dönemsel bir etkiye mi dayandığı incelenmelidir.",
    ],
  },
  pddd: {
    dusuk: [
      "PD/DD oranı 1'in altında; bu, şirketin piyasa değerinin defter değerinin gerisinde kaldığını gösterir. Bunun nedeni düşük kârlılık beklentisi olabileceği gibi sektörel koşullar da olabilir, tek başına bir sonuç vermez.",
      "Piyasa değeri defter değerinin altında kalıyor; bu tablo bazen temkinli beklentilere bazen de dönemsel etkilere bağlıdır ve özsermaye kârlılığıyla birlikte okunmalıdır.",
      "Defter değerine kıyasla 1'in altında bir çarpan söz konusu; bunun kalıcı mı yoksa geçici mi olduğu kârlılık görünümüyle birlikte değerlendirilmelidir.",
      "Şirket defter değerinin altında fiyatlanıyor; bu gözlem tek başına anlam taşımaz, varlık yapısı ve kârlılıkla birlikte ele alınmalıdır.",
    ],
    orta: [
      "PD/DD oranı 1 ile 3 arasında; bu, piyasanın defter değerine ölçülü bir prim biçtiğini düşündüren dengeli bir aralıktır. Yine de kârlılıkla birlikte okunması gerekir.",
      "Piyasa değeri/defter değeri makul bir bantta; bu seviye tek başına ayırt edici bir sinyal vermez, özsermaye getirisiyle birlikte anlam kazanır.",
      "Şirketin PD/DD seviyesi orta düzeyde; defter değeri ile piyasa değeri arasında aşırı bir açılma görünmüyor, ancak bu tek başına bir hüküm değildir.",
      "Defter değerine göre fiyatlama dengeli sayılabilecek bir aralıkta; nötr bir tablo sunar ve kârlılık verileriyle desteklenmelidir.",
    ],
    yuksek: [
      "PD/DD oranı yüksek bir seviyede; piyasa, defter değerine kıyasla şirkete belirgin bir prim biçiyor olabilir. Bu çoğu zaman yüksek kârlılık beklentisiyle ilişkilidir, ancak tek başına yeterli değildir.",
      "Piyasa değeri defter değerinin epeyce üzerinde; bu primin sürdürülebilir bir özsermaye kârlılığıyla desteklenip desteklenmediği ayrıca incelenmelidir.",
      "Şirket defter değerine göre yüksek bir çarpanla fiyatlanıyor; bu, güçlü beklentilere işaret edebilir, fakat beklentinin gerçekleşmesi diğer verilerle izlenmelidir.",
      "Defter değerine kıyasla yüklü bir fiyatlama göze çarpıyor; bu gözlem kârlılık ve büyüme görünümüyle birlikte okunmadan tek başına yorumlanmamalıdır.",
    ],
  },
  peg: {
    dusuk: [
      "PEG oranı 1'in altında; bu, fiyatlamanın beklenen büyümeye kıyasla görece ölçülü olabileceğine işaret eder. Ancak büyüme tahminlerinin gerçekçiliği teyit edilmeden tek başına yorumlanmamalıdır.",
      "Büyümeye göre düzeltilmiş çarpan düşük tarafta; bu tablo büyüme beklentisinin güçlü olmasıyla ilgili olabilir, fakat tahminlerin oynaklığıyla birlikte değerlendirilmelidir.",
      "PEG seviyesi 1 eşiğinin altında görünüyor; bunun anlamı büyük ölçüde büyüme öngörüsünün güvenilirliğine bağlıdır, bu yüzden tek başına bir sonuç vermez.",
      "Kazanç büyümesine kıyasla fiyatlama görece düşük; bu gözlem ancak büyümenin sürdürülebilirliğiyle birlikte anlam kazanır.",
    ],
    orta: [
      "PEG oranı 1 ile 2 arasında; bu, fiyatlama ile büyüme beklentisinin görece dengeli olduğunu düşündürür. Tek başına ayırt edici bir sinyal değildir.",
      "Büyüme ayarlı çarpan orta bir bantta; bu seviye nötr bir tablo sunar ve büyümenin kalitesiyle birlikte okunmalıdır.",
      "Şirketin PEG değeri makul bir aralıkta görünüyor; büyüme ile fiyat arasında belirgin bir sapma olmadığını düşündürür, ancak kesin hüküm için yeterli değildir.",
      "Büyümeye göre fiyatlama dengeli sayılabilecek bir seviyede; farkı belirleyecek olan büyüme öngörüsünün isabetidir.",
    ],
    yuksek: [
      "PEG oranı 2'nin üzerinde; bu, fiyatlamanın beklenen büyümeye kıyasla yüklü olabileceğine işaret eder. Beklenen büyümenin gerçekleşip gerçekleşmeyeceği ayrıca izlenmelidir.",
      "Büyümeye göre düzeltilmiş çarpan yüksek tarafta; primin arkasındaki büyüme varsayımının ne kadar gerçekçi olduğu incelenmeden tek başına yorumlanmamalıdır.",
      "PEG seviyesi yüksek görünüyor; bu, piyasanın güçlü bir büyüme beklediğine işaret edebilir, fakat bu beklenti tek başına bu orandan teyit edilemez.",
      "Kazanç büyümesine kıyasla fiyatlama yüklü; bu gözlem büyüme tahminlerinin oynaklığıyla birlikte değerlendirilmelidir.",
    ],
  },
  roe: {
    dusuk: [
      "Özsermaye kârlılığı görece düşük bir seviyede; şirket özkaynağını bu dönemde sınırlı bir verimle kâra çevirmiş olabilir. Bunun dönemsel mi yapısal mı olduğu birlikte izlenmelidir.",
      "ROE düşük tarafta kalıyor; bu, yatırım dönemi, yüksek özkaynak tabanı ya da dönemsel kâr baskısı gibi farklı nedenlerle oluşabilir ve tek başına yorumlanmamalıdır.",
      "Özsermaye getirisi düşük düzeyde görünüyor; nedeninin operasyonel kârlılık mı yoksa geçici etkiler mi olduğu diğer verilerle değerlendirilmelidir.",
      "Şirket bu dönem özkaynağına kıyasla sınırlı bir kâr üretmiş; bu gözlem marj ve büyüme eğilimiyle birlikte okunmadan bir sonuç vermez.",
    ],
    orta: [
      "Özsermaye kârlılığı orta bir bantta; şirket özkaynağını makul bir verimle kâra çeviriyor görünüyor, ancak bu seviyenin sürekliliği ayrıca izlenmelidir.",
      "ROE dengeli sayılabilecek bir aralıkta; tek başına ayırt edici bir sinyal vermez, marj ve büyüme verileriyle birlikte anlam kazanır.",
      "Özsermaye getirisi orta düzeyde görünüyor; bu, kârlılık tarafında aşırı bir sapma olmadığını düşündürür, fakat kesin bir hüküm için yeterli değildir.",
      "Şirketin özkaynak kârlılığı makul bir seviyede; nötr bir tablo sunar ve kâr istikrarıyla desteklenmelidir.",
    ],
    yuksek: [
      "Özsermaye kârlılığı yüksek bir seviyede; şirket koyduğu özkaynağı bu dönem verimli kullanmış olabilir. Yine de bunun kalıcı operasyonel performanstan mı yoksa tek seferlik kalemlerden mi geldiği izlenmelidir.",
      "ROE yukarı tarafta; bu kârlılık açısından olumlu bir gözlem olsa da kaldıraç ve dönemsel etkilerle birlikte okunmalıdır.",
      "Özsermaye getirisi yüksek görünüyor; bu seviyenin sürdürülebilir olup olmadığı marj ve büyüme görünümüyle birlikte değerlendirilmelidir.",
      "Şirket bu dönem özkaynağına kıyasla güçlü bir kâr üretmiş; bu tek başına bir sonuç değildir, eğilimin devamı ayrıca takip edilmelidir.",
    ],
  },
  netMarj: {
    dusuk: [
      "Net kâr marjı ince bir seviyede; satışların görece küçük bir kısmı net kâra dönüşmüş olabilir. Bunun nedeni maliyet baskısı, finansman gideri ya da dönemsel etkiler olabilir ve tek başına yorumlanmamalıdır.",
      "Net marj düşük tarafta kalıyor; bu, sektörün doğası gereği düşük marjlı çalışmasından da dönemsel kalemlerden de kaynaklanabilir, kesin bir hüküm vermez.",
      "Şirket bu dönem satışlarından sınırlı bir net marj elde etmiş; nedeninin girdi maliyetleri mi yoksa geçici etkiler mi olduğu birlikte değerlendirilmelidir.",
      "Net kârlılık marjı dar görünüyor; bu gözlem gelir büyümesi ve maliyet yapısıyla birlikte okunmadan tek başına anlam taşımaz.",
    ],
    orta: [
      "Net kâr marjı orta bir bantta; şirket satışlarının makul bir kısmını net kâra çeviriyor görünüyor, ancak marjın istikrarı ayrıca izlenmelidir.",
      "Net marj dengeli sayılabilecek bir aralıkta; tek başına ayırt edici bir sinyal vermez, gelir ve maliyet eğilimiyle birlikte anlam kazanır.",
      "Şirketin net kârlılık marjı orta düzeyde görünüyor; kârlılık tarafında aşırı bir sapma olmadığını düşündürür, fakat kesin bir hüküm için yeterli değildir.",
      "Satışlardan elde edilen net marj makul bir seviyede; nötr bir tablo sunar ve marj istikrarıyla desteklenmelidir.",
    ],
    yuksek: [
      "Net kâr marjı yüksek bir seviyede; şirket satışlarının görece büyük bir kısmını net kâra çevirebiliyor olabilir. Yine de marjın sürdürülebilirliği ayrıca izlenmelidir.",
      "Net marj yukarı tarafta; bu olumlu bir gözlem olsa da tek seferlik gelir/gider kalemlerinden etkilenip etkilenmediği incelenmelidir.",
      "Şirketin net kârlılık marjı güçlü görünüyor; bunun fiyatlama gücü mü yoksa dönemsel etkiler mi olduğu maliyet yapısıyla birlikte değerlendirilmelidir.",
      "Satışlara kıyasla yüksek bir net marj göze çarpıyor; bu tek başına bir sonuç değildir, marj istikrarı ve büyüme ile birlikte okunmalıdır.",
    ],
  },
  pdNetSatis: {
    dusuk: [
      "PD/Net Satış çarpanı 1'in altında; piyasa, satış büyüklüğüne kıyasla şirkete görece ölçülü bir değer biçiyor olabilir. Bunun nedeni düşük marj beklentisi de sektörel koşullar da olabilir, tek başına yorumlanmamalıdır.",
      "Satışlara kıyasla düşük bir çarpan söz konusu; bu tablo bazen ince marjlı iş modellerinde bazen de temkinli beklentilerde görülür ve kârlılıkla birlikte okunmalıdır.",
      "Piyasa değeri/net satış oranı 1'in altında; bunun kalıcı mı dönemsel mi olduğu marjlar ve büyüme görünümüyle değerlendirilmelidir.",
      "Şirket satış büyüklüğüne göre görece düşük bir çarpanla fiyatlanıyor; bu gözlem tek başına anlam taşımaz, marj yapısıyla birlikte ele alınmalıdır.",
    ],
    orta: [
      "PD/Net Satış çarpanı 1 ile 3 arasında; bu, satış bazlı değerlemede dengeli sayılabilecek bir aralıktır. Yine de marj ve büyümeyle birlikte okunmalıdır.",
      "Satışlara göre fiyatlama makul bir bantta; bu seviye tek başına ayırt edici bir sinyal vermez, kârlılıkla birlikte anlam kazanır.",
      "Şirketin PD/Net Satış seviyesi orta düzeyde görünüyor; satış ile piyasa değeri arasında aşırı bir açılma görünmüyor, ancak bu tek başına bir hüküm değildir.",
      "Satış büyüklüğüne kıyasla fiyatlama dengeli bir aralıkta; nötr bir tablo sunar ve marjlarla desteklenmelidir.",
    ],
    yuksek: [
      "PD/Net Satış çarpanı yüksek bir seviyede; piyasa, satışlara kıyasla şirkete belirgin bir değer biçiyor olabilir. Bu çoğu zaman yüksek marj ya da büyüme beklentisiyle ilişkilidir, tek başına yeterli değildir.",
      "Satışlara göre yüklü bir fiyatlama söz konusu; primin sürdürülebilir kârlılıkla desteklenip desteklenmediği ayrıca incelenmelidir.",
      "Şirket satış büyüklüğüne göre yüksek bir çarpanla fiyatlanıyor; bu, güçlü beklentilere işaret edebilir, fakat beklentinin gerçekleşmesi diğer verilerle izlenmelidir.",
      "Satışlara kıyasla yüksek bir değerleme göze çarpıyor; bu gözlem marjlar ve büyüme görünümüyle birlikte okunmadan tek başına yorumlanmamalıdır.",
    ],
  },
  cariOran: {
    dusuk: [
      "Cari oran 1'in altında; bu, kısa vadeli yükümlülüklerin dönen varlıkların üzerinde olabileceğine işaret eder ve bu kalemin takibi önem kazanır. Ancak sektöre ve nakit döngüsüne göre değişir, tek başına yorumlanmamalıdır.",
      "Kısa vadeli ödeme gücü göstergesi 1'in altında kalıyor; bunun işletme sermayesi yapısından mı yoksa dönemsel etkilerden mi kaynaklandığı borç vadesiyle birlikte değerlendirilmelidir.",
      "Dönen varlıklar kısa vadeli yükümlülüklerin gerisinde görünüyor; bu durum bazı iş modellerinde olağan olabilir, bu yüzden nakit akışı ve borç yapısıyla birlikte okunmalıdır.",
      "Cari oran 1 eşiğinin altında; bu gözlem tek başına bir sonuç vermez, nakit döngüsü ve finansman yapısıyla birlikte ele alınmalıdır.",
    ],
    orta: [
      "Cari oran 1 ile 2 arasında; bu, dönen varlıkların kısa vadeli yükümlülükleri karşılayabilecek seviyede olduğunu gösterir. Yine de işletme sermayesi yapısıyla birlikte değerlendirilmelidir.",
      "Kısa vadeli likidite göstergesi dengeli bir bantta; bu seviye tek başına ayırt edici bir sinyal vermez, nakit döngüsüyle birlikte anlam kazanır.",
      "Şirketin cari oranı makul bir aralıkta görünüyor; kısa vadeli ödeme gücü açısından belirgin bir sıkışma görünmüyor, ancak bu tek başına bir hüküm değildir.",
      "Dönen varlıklar ile kısa vadeli yükümlülükler arasındaki denge makul seviyede; nötr bir tablo sunar ve borç yapısıyla desteklenmelidir.",
    ],
    yuksek: [
      "Cari oran 2'nin üzerinde; bu, kısa vadeli yükümlülükleri karşılama kapasitesinin görece rahat olabileceğine işaret eder. Yine de bunun atıl varlıktan mı yoksa güçlü işletme sermayesinden mi kaynaklandığı birlikte okunmalıdır.",
      "Kısa vadeli likidite tamponu geniş görünüyor; bu rahat bir tablo olsa da yüksek cari oran bazen verimsiz kullanılan varlıklara da işaret edebilir, nakit döngüsüyle değerlendirilmelidir.",
      "Şirketin kısa vadeli ödeme gücü göstergesi yüksek seviyede; bu tek başına bir sonuç değildir, borçluluk ve nakit akışıyla birlikte ele alınmalıdır.",
      "Dönen varlıklar kısa vadeli yükümlülüklerin belirgin biçimde üzerinde; bu gözlem likidite açısından rahatlık düşündürse de tek başına yeterli değildir.",
    ],
  },
};

// Negatif değer (negatif F/K, PEG, ROE, marj, PD/DD vb.) — mekanik "düşük/yüksek"
// yorumu yapmadan zarar / tek seferlik etki çerçevesinde yaz.
const NEGATIF_SABLONLAR: string[] = [
  "Bu oran negatif; şirket ilgili dönemde zarar açıklamış ya da tek seferlik bir etki yaşamış olabilir. Negatif bir değer mekanik olarak 'düşük' veya 'yüksek' diye yorumlanamaz, bu nedenle tek başına anlamlı bir gösterge sunmaz.",
  "Değerin negatif olması, bu dönemde kâr yerine zarar ya da olağandışı bir kalem bulunduğuna işaret edebilir; böyle bir durumda oran tek başına sağlıklı bir yorum üretmez ve nedeninin dönemsel mi yapısal mı olduğu incelenmelidir.",
  "Oran negatif olduğundan seviye bazlı bir yorum yapılmadı; bu genelde dönemsel zarar veya tek seferlik giderlerle ilişkili olabilir ve sonraki dönemlerin eğilimiyle birlikte okunmalıdır.",
  "Negatif değer, bu dönem için zarar ya da tek seferlik bir etki ihtimaline işaret eder; bu tek başına kalıcı bir sonuç değildir, ilerleyen dönemlerle birlikte değerlendirilmelidir.",
  "Bu oran eksi bölgede; kâr tarafında dönemsel bir baskı veya olağandışı kalem söz konusu olabilir. Negatif bir oran tek başına anlam taşımadığından diğer mali verilerle birlikte ele alınmalıdır.",
];

// Aşırı uç (çok yüksek) değer — dönemsel/tek seferlik etki içerebileceği için
// dikkat notu.
const UC_SABLONLAR: string[] = [
  "Bu oran olağandışı yüksek bir seviyede; bu tür uç değerler çoğu zaman dönemsel olarak çok düşük bir kâr ya da tek seferlik bir etki nedeniyle oluşur. Bu yüzden dikkatli yorumlanmalı ve tek başına bir sonuç çıkarılmamalıdır.",
  "Değer aşırı uç bir seviyeye ulaşmış; bu genellikle bölen kalemin (kâr, defter değeri vb.) dönemsel olarak küçülmesinden kaynaklanır ve oranı yanıltıcı hale getirebilir, bu nedenle tek başına anlamlı değildir.",
  "Bu dönem oran çok yüksek bir değer gösteriyor; tek seferlik etkiler ve dönemsel kalemler bu seviyeyi şişirmiş olabilir, sağlıklı bir okuma için sonraki dönem verileri beklenmelidir.",
  "Oran, anlamlı bir yorum üretmeyecek kadar uç bir seviyede; bu tür değerler dönemsel dalgalanmaları yansıtabildiğinden tek başına bir karar dayanağı oluşturmaz.",
];

// Büyüme/değişim oranları — pozitif/negatif çerçeve (nötr dil, kesin hüküm yok).
const BUYUME_POZITIF_SABLONLAR: string[] = [
  "İlgili dönemde bir önceki döneme göre artış görülüyor; bu büyüme yönünde bir eğilim olsa da tek bir dönemin verisi kalıcı bir sonuç için yeterli değildir.",
  "Bu kalemde dönemsel bir yükseliş var; eğilimin sürüp sürmediği birkaç dönem üst üste izlenerek değerlendirilmelidir.",
  "Bir önceki döneme kıyasla pozitif bir değişim söz konusu; baz etkisi ve tek seferlik kalemler de göz önünde bulundurularak okunmalıdır.",
  "Değişim pozitif yönde; bu gözlem tek başına bir hüküm değil, gelir ve kâr eğilimiyle birlikte değerlendirilmesi gereken bir veridir.",
];

const BUYUME_NEGATIF_SABLONLAR: string[] = [
  "İlgili dönemde bir önceki döneme göre gerileme görülüyor; bunun dönemsel mi yoksa kalıcı bir daralma mı olduğu birkaç dönem boyunca izlenmelidir.",
  "Bu kalemde dönemsel bir düşüş var; baz etkisi, sektörel koşullar ve tek seferlik kalemler birlikte değerlendirilmeden tek başına yorumlanmamalıdır.",
  "Bir önceki döneme kıyasla negatif bir değişim söz konusu; daralmanın kaynağı gelir tarafı mı maliyet tarafı mı, ayrıca incelenmelidir.",
  "Değişim negatif yönde; bu tek başına bir sonuç değildir, sonraki dönemlerin eğilimiyle birlikte okunması gereken bir gözlemdir.",
];

// ---- Çıktı tipi ------------------------------------------------------------

export type OranDurum =
  | "dusuk"
  | "orta"
  | "yuksek"
  | "negatif"
  | "uc"
  | "buyume-pozitif"
  | "buyume-negatif";

export type OranYorumSatiri = {
  key: string;
  label: string;
  sirketStr: string;
  durum: OranDurum;
  yorum: string;
};

// ---- Yardımcılar -----------------------------------------------------------

function gecerliSayi(v: OranDeger | undefined): v is number {
  // 0 / null / undefined → veri yok kabul edilir (import'ta 0 = "veri yok").
  return typeof v === "number" && Number.isFinite(v) && v !== 0;
}

function seviyeBelirle(key: OranKey, v: number): Seviye {
  const [alt, ust] = ESIKLER[key];
  // Efektif eşik = eşik × (1 + tampon). Değer üst seviyeye ancak eşiğin tampon
  // bandının üzerine çıkınca geçer; banttaki değerler alt seviyeye sabitlenir.
  // Aynı değer her zaman aynı seviyeyi verir (deterministik) ama eşik etrafındaki
  // ±tampon'luk minik oynamalar artık seviye değiştirmez.
  if (v >= ust * (1 + ESIK_TAMPON_YUZDE)) return "yuksek";
  if (v >= alt * (1 + ESIK_TAMPON_YUZDE)) return "orta";
  return "dusuk";
}

// ---- Ana fonksiyon ---------------------------------------------------------

export function oranYorumlariUret(
  kod: string,
  temel: TemelOranlar
): OranYorumSatiri[] {
  const satirlar: OranYorumSatiri[] = [];
  const s = temel.sirket;

  const oranKeys: OranKey[] = [
    "fk",
    "pddd",
    "peg",
    "roe",
    "netMarj",
    "pdNetSatis",
    "cariOran",
  ];

  for (const key of oranKeys) {
    const deger = s[key];
    // Boş / null / 0 → satırı hiç render etme (yarım veri gösterme).
    if (!gecerliSayi(deger)) continue;

    const meta = ORAN_META[key];
    const sirketStr = degerFormatla(key, deger);

    // Negatif değer → zarar / tek seferlik etki çerçevesi (mekanik yorum yok).
    if (deger < 0) {
      satirlar.push({
        key,
        label: meta.label,
        sirketStr,
        durum: "negatif",
        yorum: sablonSec(NEGATIF_SABLONLAR, kod, `${key}-negatif`),
      });
      continue;
    }

    // Aşırı uç (çok yüksek) değer → dikkat notu.
    const ucSinir = UC_SINIR[key];
    if (ucSinir !== undefined && deger > ucSinir) {
      satirlar.push({
        key,
        label: meta.label,
        sirketStr,
        durum: "uc",
        yorum: sablonSec(UC_SABLONLAR, kod, `${key}-uc`),
      });
      continue;
    }

    // Normal seviye yorumu (düşük / orta / yüksek).
    const seviye = seviyeBelirle(key, deger);
    satirlar.push({
      key,
      label: meta.label,
      sirketStr,
      durum: seviye,
      yorum: sablonSec(SABLONLAR[key][seviye], kod, `${key}-${seviye}`),
    });
  }

  // Büyüme/değişim oranları — pozitif/negatif çerçeve.
  const degisimler: {
    key: "netKarDegisim" | "netSatisDegisim";
    label: string;
  }[] = [
    { key: "netKarDegisim", label: "Net Kâr Değişimi (yıllık)" },
    { key: "netSatisDegisim", label: "Net Satış Değişimi (yıllık)" },
  ];

  for (const { key, label } of degisimler) {
    const deger = s[key];
    if (!gecerliSayi(deger)) continue;
    const pozitif = deger > 0;
    satirlar.push({
      key,
      label,
      sirketStr: yuzdeFormatla(deger),
      durum: pozitif ? "buyume-pozitif" : "buyume-negatif",
      yorum: sablonSec(
        pozitif ? BUYUME_POZITIF_SABLONLAR : BUYUME_NEGATIF_SABLONLAR,
        kod,
        `${key}-${pozitif ? "poz" : "neg"}`
      ),
    });
  }

  return satirlar;
}

// "2026-03" → "Mart 2026" gibi okunur etiket; başlık/uyarı için.
const AYLAR = [
  "Ocak",
  "Şubat",
  "Mart",
  "Nisan",
  "Mayıs",
  "Haziran",
  "Temmuz",
  "Ağustos",
  "Eylül",
  "Ekim",
  "Kasım",
  "Aralık",
];

export function donemEtiketi(donem: string): string {
  const m = /^(\d{4})-(\d{2})$/.exec(donem);
  if (!m) return donem;
  const yil = m[1];
  const ay = parseInt(m[2], 10);
  if (ay >= 1 && ay <= 12) return `${AYLAR[ay - 1]} ${yil}`;
  return donem;
}

// "2026-03" → "2026/1. çeyrek (Mart 2026)"; mali dönemi çeyrekle birlikte verir.
export function ceyrekEtiketi(donem: string): string {
  const m = /^(\d{4})-(\d{2})$/.exec(donem);
  if (!m) return donemEtiketi(donem);
  const yil = m[1];
  const ay = parseInt(m[2], 10);
  if (ay < 1 || ay > 12) return donemEtiketi(donem);
  const ceyrek = Math.ceil(ay / 3);
  return `${yil}/${ceyrek}. çeyrek (${donemEtiketi(donem)})`;
}

// "2026-06-13" → "13 Haziran 2026". Tarih yoksa null döner. Locale/timezone'a
// bağlı kalmamak için (hidrasyon tutarlılığı) elle formatlanır.
export function guncellemeTarihiEtiketi(iso?: string): string | null {
  if (!iso) return null;
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(iso.trim());
  if (!m) return iso;
  const yil = m[1];
  const ay = parseInt(m[2], 10);
  const gun = parseInt(m[3], 10);
  if (ay < 1 || ay > 12) return iso;
  return `${gun} ${AYLAR[ay - 1]} ${yil}`;
}
