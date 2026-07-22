import fs from "node:fs";
import path from "node:path";

const rootDir = process.cwd();
const profilesDir = path.join(rootDir, "data", "hisseler");
const writeChanges = process.argv.includes("--write");
const FLIGHT_REFERENCE_RE = /^\$[0-9a-z]+$/i;

const repairs = {
  ERCB: {
    activity:
      "Spiral kaynaklı büyük çaplı çelik boru üretimi ve satışı; petrol, doğal gaz, su iletim ve kazık borusu projeleri.",
    about: [
      "Erciyas Çelik Boru Sanayi A.Ş.; petrol ve doğal gaz hatları, su iletim sistemleri ile kazık uygulamalarına yönelik spiral kaynaklı büyük çaplı çelik borular üretir.",
      "Şirket, yurt içi ve yurt dışındaki altyapı ve enerji projeleri için proje şartnamelerine göre boru üretimi, kaplama ve teslimat gerçekleştirir.",
    ],
    analysis: {
      isModeli:
        "İş modeli, çelik rulonun proje şartlarına uygun boruya dönüştürülmesine ve sipariş bazlı enerji ile su altyapısı projelerine satılmasına dayanır. Sipariş hacmi, ürün özellikleri, teslimat takvimi ve hammadde maliyeti kârlılığı doğrudan etkiler.",
      gelirKaynaklari: [
        "Büyük çaplı spiral kaynaklı çelik boru satışları",
        "Kaplama ve projeye özel katma değerli işlemler",
        "Yurt dışı altyapı ve enerji projelerine yapılan teslimatlar",
      ],
      gucluYanlar: [
        "Büyük çaplı boru üretiminde uzmanlaşmış tesis ve mühendislik altyapısı",
        "Enerji ve su iletim projelerine yönelik uluslararası sipariş deneyimi",
        "Farklı proje şartnamelerine göre üretim yapabilme kabiliyeti",
      ],
      riskler: [
        "Çelik fiyatları ve enerji maliyetlerindeki dalgalanma",
        "Büyük projelerin ihale, sipariş ve teslimat zamanlamasına bağlı gelir oynaklığı",
        "İhracat pazarlarındaki kur, lojistik ve ülke riskleri",
      ],
      sektorelKonum:
        "ERCB, demir-çelik sektöründe standart mamul üreticisinden çok enerji ve altyapı projelerine özel büyük çaplı boru üreticisi olarak konumlanır. Bu nedenle karşılaştırmada yalnızca çelik fiyatları değil, alınan siparişler ve proje teslimat takvimi de önem taşır.",
      yatirimciNotu:
        "ERCB değerlendirilirken yeni siparişlerin büyüklüğü, sipariş bakiyesi, teslimat takvimi, çelik maliyetleri ve ihracatın toplam satışlardaki payı birlikte izlenmelidir.",
    },
  },
  ESCOM: {
    activity:
      "Yazılım, dijital hizmetler ve teknoloji girişimlerine doğrudan veya iştirakleri üzerinden yatırım yapılması.",
    about: [
      "Escort Teknoloji Yatırım A.Ş., teknoloji alanındaki şirket ve girişimlere doğrudan ya da iştirakleri üzerinden yatırım yapan bir teknoloji yatırım şirketidir.",
      "Portföy; siber güvenlik, bulut bilişim, yapay zekâ, finansal teknolojiler, biyoteknoloji ve büyük veri gibi farklı teknoloji alanlarına yayılabilir.",
    ],
    analysis: {
      isModeli:
        "İş modeli, büyüme potansiyeli taşıyan teknoloji girişimlerine sermaye ve iş geliştirme desteği vermek; portföy şirketlerinin değer artışı, temettüleri veya olası çıkış işlemleri üzerinden getiri elde etmektir. Sonuçlar portföy şirketlerinin finansal performansına ve değerleme koşullarına bağlıdır.",
      gelirKaynaklari: [
        "İştirak ve bağlı ortaklıklardan elde edilen temettüler",
        "Yatırımların satışından veya değer artışından doğan kazançlar",
        "Konsolide edilen teknoloji şirketlerinin ürün ve hizmet gelirleri",
      ],
      gucluYanlar: [
        "Birden fazla teknoloji temasına yayılan yatırım portföyü",
        "Erken aşama şirketlere erişim ve iş geliştirme deneyimi",
        "Portföy şirketleri arasında oluşabilecek ticari iş birlikleri",
      ],
      riskler: [
        "Erken aşama girişimlerin hedeflenen büyümeye ulaşamaması",
        "Borsada işlem görmeyen yatırımların değerleme belirsizliği",
        "İştirak gelirlerinin ve olası çıkışların dönemler arasında düzensiz dağılması",
      ],
      sektorelKonum:
        "ESCOM, tek bir yazılım ürününe dayanan operasyon şirketinden ziyade farklı teknoloji girişimlerine yatırım yapan portföy şirketi niteliğindedir. Bu nedenle analizde solo finansallar kadar iştiraklerin gelişimi ve portföy değerindeki değişim de dikkate alınmalıdır.",
      yatirimciNotu:
        "ESCOM takip edilirken yeni yatırımlar, portföy şirketlerindeki sermaye turları, pay satışları, iştiraklerin finansal katkısı ve holding iskontosu birlikte değerlendirilmelidir.",
    },
  },
  FONET: {
    activity:
      "Sağlık bilişimi yazılımları, hastane bilgi yönetim sistemleri ve ilgili kurulum, entegrasyon, bakım ve destek hizmetleri.",
    about: [
      "Fonet Bilgi Teknolojileri A.Ş., sağlık kurumlarının klinik, idari ve mali süreçlerini dijital ortamda yönetmesine yönelik yazılım çözümleri geliştirir.",
      "Şirketin ürün ve hizmetleri hastane bilgi yönetim sistemleri, sistem entegrasyonu, kurulum, bakım, destek ve sağlık verisinin güvenli işletilmesi başlıklarında yoğunlaşır.",
    ],
    analysis: {
      isModeli:
        "FONET'in iş modeli, kamu ve özel sağlık kuruluşlarına yazılım lisansı ile proje hizmetleri sunmak; kurulan sistemlerden bakım, destek ve yenileme geliri elde etmektir. İhale takvimi, sözleşme süresi ve devam eden projelerin yenilenmesi gelir görünürlüğünü belirler.",
      gelirKaynaklari: [
        "Hastane bilgi yönetim sistemi lisans ve proje gelirleri",
        "Kurulum, entegrasyon ve uyarlama hizmetleri",
        "Bakım, teknik destek ve sözleşme yenileme gelirleri",
      ],
      gucluYanlar: [
        "Sağlık bilişimi alanında uzmanlaşmış ürün ve sektör bilgisi",
        "Kurulu sistemlerden doğabilecek bakım ve yenileme ilişkisi",
        "Sağlık kurumlarının dijitalleşme ihtiyacına doğrudan çözüm sunması",
      ],
      riskler: [
        "Kamu ihalelerinin zamanlamasına ve sonuçlarına bağımlılık",
        "Projelerde teslimat, entegrasyon ve tahsilat gecikmeleri",
        "Siber güvenlik, kişisel sağlık verisi ve mevzuat yükümlülükleri",
      ],
      sektorelKonum:
        "FONET, genel amaçlı yazılım şirketlerinden sağlık bilişimine odaklanmasıyla ayrışır. Sektörel karşılaştırmada yeni ihale kazanımları, devam eden sözleşmeler ve bakım gelirlerinin sürekliliği öne çıkar.",
      yatirimciNotu:
        "FONET için yeni sözleşmelerin bedeli ve süresi, mevcut işlerin yenilenmesi, kamu alacaklarının tahsilatı ile Ar-Ge harcamalarının ürüne dönüşümü birlikte izlenmelidir.",
    },
  },
  GLCVY: {
    activity:
      "Tahsili gecikmiş alacak portföylerinin satın alınması, yönetilmesi, yeniden yapılandırılması ve tahsil edilmesi.",
    about: [
      "Gelecek Varlık Yönetimi A.Ş., bankalar ve diğer finansal kuruluşlar tarafından satışa çıkarılan tahsili gecikmiş alacak portföylerini satın alır ve yönetir.",
      "Şirket, borçluların ödeme kapasitesine göre yapılandırma ve tahsilat çözümleri geliştirerek satın alınan portföylerden nakit akışı oluşturmayı amaçlar.",
    ],
    analysis: {
      isModeli:
        "İş modeli, tahsili gecikmiş alacak portföylerini beklenen tahsilatın altında bir bedelle satın almak ve zaman içinde gerçekleştirilen tahsilatlardan getiri elde etmektir. Portföy alım fiyatı, tahsilat hızı, finansman maliyeti ve operasyonel verimlilik kârlılığın temel belirleyicileridir.",
      gelirKaynaklari: [
        "Satın alınan bireysel ve ticari alacak portföylerinden tahsilatlar",
        "Yapılandırılmış ödeme planlarından doğan nakit akışları",
        "Portföy yönetimi kapsamında oluşan diğer finansal gelirler",
      ],
      gucluYanlar: [
        "Alacak portföyü fiyatlama ve tahsilat süreçlerinde uzmanlaşmış operasyon",
        "Farklı dönemlerde alınmış portföylerden oluşan çeşitlendirilmiş tahsilat tabanı",
        "Veri analitiğiyle ödeme kapasitesine uygun çözüm geliştirebilme",
      ],
      riskler: [
        "Gerçekleşen tahsilatların satın alma varsayımlarının altında kalması",
        "Portföy ihalelerinde rekabetin alım fiyatlarını yükseltmesi",
        "Faiz, finansman maliyeti ve sektörel düzenlemelerdeki değişiklikler",
      ],
      sektorelKonum:
        "GLCVY, bankacılık sektörünün sorunlu alacaklarını devralan varlık yönetimi şirketleri arasında yer alır. Değerlemede bilanço büyüklüğünden çok portföy yatırımları, tahsilat performansı ve özkaynak kârlılığı birlikte okunmalıdır.",
      yatirimciNotu:
        "GLCVY incelenirken yeni portföy alımları, toplam yatırım tutarı, tahsilat performansı, finansman giderleri ve yasal düzenlemeler takip edilmelidir.",
    },
  },
  GOKNR: {
    activity:
      "Meyve ve sebzelerin işlenerek konsantre, püre, meyve suyu bileşeni ve diğer katma değerli gıda ürünlerine dönüştürülmesi.",
    about: [
      "Göknur Gıda Maddeleri Enerji İmalat İthalat İhracat Ticaret ve Sanayi A.Ş., meyve ve sebzeleri endüstriyel gıda bileşenlerine dönüştüren entegre bir gıda üreticisidir.",
      "Şirket; tarımsal tedarik, meyve işleme, konsantre ve püre üretimi ile yurt içi ve ihracat satışlarını aynı değer zinciri içinde yürütür.",
    ],
    analysis: {
      isModeli:
        "İş modeli, sezonunda tedarik edilen meyve ve sebzelerin işlenerek daha uzun raf ömürlü konsantre, püre ve içecek bileşenlerine dönüştürülmesine dayanır. Ürün deseni, rekolte, hammadde maliyeti, kapasite kullanımı ve ihracat fiyatları sonuçları belirler.",
      gelirKaynaklari: [
        "Meyve suyu konsantresi ve püre satışları",
        "Katma değerli gıda ve içecek bileşenleri",
        "Yurt dışı müşterilere yapılan ihracat satışları",
      ],
      gucluYanlar: [
        "Tarımsal tedarikten işlemeye uzanan entegre üretim yapısı",
        "Farklı meyve türlerini işleyebilen tesis ve ürün portföyü",
        "İhracat pazarlarına erişim ve döviz bazlı satış imkânı",
      ],
      riskler: [
        "Rekolte, iklim ve tarımsal hammadde fiyatlarındaki dalgalanma",
        "Enerji, ambalaj ve lojistik maliyetlerindeki artış",
        "İhracat pazarlarında talep, kur ve müşteri yoğunlaşması riski",
      ],
      sektorelKonum:
        "GOKNR, son tüketici markasından çok gıda ve içecek üreticilerine girdi sağlayan endüstriyel gıda şirketi olarak değerlendirilir. Sezonsallık, stok döngüsü ve ihracat karması sektörel karşılaştırmada belirleyicidir.",
      yatirimciNotu:
        "GOKNR için rekolte ve hammadde tedariki, kapasite kullanımı, stok seviyesi, ihracatın payı ve işletme sermayesi ihtiyacı birlikte izlenmelidir.",
    },
  },
  GUNDG: {
    activity:
      "Süt ve süt ürünleri, özellikle peynir çeşitlerinin üretimi, satışı ve dağıtımı.",
    about: [
      "Gündoğdu Gıda Süt Ürünleri Sanayi ve Dış Ticaret A.Ş., süt ürünleri ve özellikle farklı peynir çeşitlerinin üretim ve satışını gerçekleştirir.",
      "Şirketin faaliyet zinciri çiğ süt tedariki, üretim, kalite kontrol, soğuk zincir, satış ve dağıtım süreçlerinden oluşur.",
    ],
    analysis: {
      isModeli:
        "İş modeli, çiğ sütün işlenerek markalı süt ürünlerine dönüştürülmesi ve perakende, toptan ile diğer satış kanallarına ulaştırılmasına dayanır. Ürün karması, süt maliyeti, kapasite kullanımı ve dağıtım verimliliği marjları etkiler.",
      gelirKaynaklari: [
        "Peynir çeşitlerinin yurt içi satışları",
        "Diğer süt ürünleri ve markalı gıda satışları",
        "Toptan, perakende ve dış ticaret kanallarından elde edilen gelirler",
      ],
      gucluYanlar: [
        "Peynir ve süt ürünlerine odaklı üretim deneyimi",
        "Farklı tüketici ihtiyaçlarına hitap eden ürün çeşitliliği",
        "Markalı ürün ve dağıtım kanalı geliştirme imkânı",
      ],
      riskler: [
        "Çiğ süt fiyatlarındaki hızlı değişim ve maliyetin satış fiyatına yansıtılamaması",
        "Gıda güvenliği, kalite ve soğuk zincir yükümlülükleri",
        "Perakende kanalındaki yoğun rekabet ve işletme sermayesi ihtiyacı",
      ],
      sektorelKonum:
        "GUNDG, gıda sektöründe süt ve peynir ürünlerine odaklanan üretici olarak izlenir. Karşılaştırmada hacim büyümesi kadar ürün karması, brüt kâr marjı ve çiğ süt maliyetleri önem taşır.",
      yatirimciNotu:
        "GUNDG takip edilirken çiğ süt maliyetleri, satış hacmi, ürün fiyatlaması, kapasite kullanımı ve dağıtım kanalındaki büyüme birlikte değerlendirilmelidir.",
    },
  },
  GWIND: {
    activity:
      "Rüzgâr ve güneş santrallerinden elektrik üretimi; yenilenebilir enerji proje geliştirme ve ilgili enerji çözümleri.",
    about: [
      "Galata Wind Enerji A.Ş., rüzgâr ve güneş enerjisi santrallerinden elektrik üreten yenilenebilir enerji şirketidir.",
      "Şirket mevcut santrallerini işletmenin yanında yeni üretim kapasitesi, depolama ve dağıtık enerji çözümlerine yönelik projeler geliştirir.",
    ],
    analysis: {
      isModeli:
        "İş modeli, yenilenebilir enerji santrallerinde üretilen elektriğin piyasa veya sözleşme koşullarıyla satılmasına dayanır. Kurulu güç, üretim miktarı, rüzgâr ve güneş koşulları, elektrik fiyatı ve yeni yatırımlar nakit akışını belirler.",
      gelirKaynaklari: [
        "Rüzgâr enerji santrallerinden elektrik satışları",
        "Güneş enerji santrallerinden elektrik satışları",
        "Dağıtık enerji, çatı GES ve geliştirilen yeni enerji projeleri",
      ],
      gucluYanlar: [
        "Rüzgâr ve güneşten oluşan çeşitlendirilmiş yenilenebilir üretim portföyü",
        "İşletmedeki santrallerden tekrarlayan elektrik üretim geliri",
        "Yeni kapasite ve enerji depolama projeleri geliştirme kabiliyeti",
      ],
      riskler: [
        "Rüzgâr hızı ve güneşlenme koşullarına bağlı üretim değişkenliği",
        "Elektrik piyasa fiyatları ve destek mekanizmalarındaki değişiklikler",
        "Yeni yatırımlarda izin, finansman, inşaat ve devreye alma riskleri",
      ],
      sektorelKonum:
        "GWIND, Borsa İstanbul'daki yenilenebilir enerji üreticileri arasında rüzgâr ve güneşi birlikte barındıran portföyüyle yer alır. Karşılaştırmada kurulu güç kadar gerçekleşen üretim, kapasite faktörü ve yatırım takvimi dikkate alınmalıdır.",
      yatirimciNotu:
        "GWIND için dönemsel elektrik üretimi, kurulu güç artışı, yeni proje takvimi, elektrik satış fiyatı ve net borç gelişimi birlikte izlenmelidir.",
    },
  },
  HKTM: {
    activity:
      "Hidrolik, elektromekanik hareket kontrol sistemleri, endüstriyel robotlar ve özel otomasyon projelerinin tasarım, üretim ve devreye alınması.",
    about: [
      "Hidropar Hareket Kontrol Teknolojileri Merkezi Sanayi ve Ticaret A.Ş., sanayi kuruluşlarına hareket kontrolü ve otomasyon çözümleri sunan mühendislik şirketidir.",
      "Faaliyetler hidrolik ve elektromekanik sistemler, endüstriyel robotlar, özel makineler, otomasyon projeleri ile satış sonrası teknik hizmetleri kapsar.",
    ],
    analysis: {
      isModeli:
        "İş modeli, müşterinin üretim ihtiyacına göre mühendislik çözümü tasarlamak; ekipman tedariki, sistem üretimi, yazılım, entegrasyon ve devreye alma hizmetlerini proje kapsamında sunmaktır. Proje karması ve ithal bileşen maliyetleri kârlılığı etkiler.",
      gelirKaynaklari: [
        "Anahtar teslim otomasyon ve özel makine projeleri",
        "Hidrolik, elektromekanik ve robotik ekipman satışları",
        "Devreye alma, bakım, modernizasyon ve teknik servis hizmetleri",
      ],
      gucluYanlar: [
        "Mekanik, elektrik, yazılım ve otomasyonu birleştiren mühendislik yetkinliği",
        "Farklı sanayi kollarına özel proje geliştirebilme",
        "Robotik ve hareket kontrolü gibi yüksek katma değerli alanlarda faaliyet",
      ],
      riskler: [
        "Sanayi yatırımlarındaki yavaşlamanın yeni proje talebini azaltması",
        "İthal ekipman ve bileşenler nedeniyle kur ve tedarik riski",
        "Proje teslim süreleri, maliyet aşımı ve müşteri yoğunlaşması",
      ],
      sektorelKonum:
        "HKTM, standart ekipman satıcısından çok mühendislik ve entegrasyon ağırlıklı otomasyon şirketi olarak konumlanır. Sipariş bakiyesi, proje teslimleri ve katma değerli hizmetlerin payı sektörel karşılaştırmada öne çıkar.",
      yatirimciNotu:
        "HKTM için yeni siparişler, devam eden proje bakiyesi, teslimat takvimi, brüt kâr marjı ve döviz açık pozisyonu birlikte izlenmelidir.",
    },
  },
  HRKET: {
    activity:
      "Ağır yük ve proje taşımacılığı, ağır kaldırma, ekipman kiralama, montaj ve depolama hizmetleri.",
    about: [
      "Hareket Proje Taşımacılığı ve Yük Mühendisliği A.Ş., standart ölçülerin dışındaki ağır ve büyük yüklerin taşınması ile kaldırılmasına yönelik proje hizmetleri sunar.",
      "Şirket; mühendislik planlaması, proje taşımacılığı, vinç ve ekipman kiralama, montaj, saha operasyonu ve depolama hizmetlerini birlikte yürütebilir.",
    ],
    analysis: {
      isModeli:
        "İş modeli, enerji, sanayi ve altyapı yatırımlarındaki ağır yüklerin güzergâh ve kaldırma mühendisliğini hazırlayarak uygun ekipman ve saha ekibiyle taşınmasına dayanır. Proje büyüklüğü, ekipman kullanım oranı ve teslimat takvimi dönemsel sonuçları etkiler.",
      gelirKaynaklari: [
        "Ağır yük ve proje taşımacılığı hizmetleri",
        "Vinç, kaldırma ve özel taşıma ekipmanı kiralama gelirleri",
        "Montaj, saha hizmeti ve depolama faaliyetleri",
      ],
      gucluYanlar: [
        "Ağır yük taşımacılığında mühendislik ve operasyon deneyimi",
        "Farklı proje tiplerine uygun özel ekipman filosu",
        "Taşıma, kaldırma ve montajı tek proje kapsamında sunabilme",
      ],
      riskler: [
        "Büyük projelerin başlangıç ve tamamlanma tarihine bağlı gelir oynaklığı",
        "Yüksek ekipman yatırımı, bakım gideri ve finansman ihtiyacı",
        "İş güvenliği, saha koşulları, izin ve operasyonel gecikme riskleri",
      ],
      sektorelKonum:
        "HRKET, lojistik sektöründe standart yük taşımacılığından ayrılarak ağır kaldırma ve proje lojistiğine odaklanır. Analizde filo büyüklüğünden çok ekipman kullanım oranı, sipariş bakiyesi ve proje marjları izlenmelidir.",
      yatirimciNotu:
        "HRKET için alınan yeni projeler, sipariş bakiyesi, ekipman kullanım oranı, yatırım harcamaları ve net borç gelişimi birlikte değerlendirilmelidir.",
    },
  },
  ISDMR: {
    activity:
      "Entegre demir-çelik tesisinde yassı ve uzun çelik ürünlerinin üretimi ve satışı.",
    about: [
      "İskenderun Demir ve Çelik A.Ş., demir cevheri ve kömürden başlayarak entegre tesis yapısıyla çelik üreten büyük ölçekli sanayi şirketidir.",
      "Şirketin ürün portföyü yassı ve uzun çelik mamullerini kapsar; satışlar otomotivden inşaata, boru imalatından makine sanayisine uzanan farklı sektörlere yönelir.",
    ],
    analysis: {
      isModeli:
        "İş modeli, temel hammaddelerin yüksek fırın ve çelikhane süreçlerinden geçirilerek katma değerli yassı ve uzun çelik ürünlerine dönüştürülmesine dayanır. Çelik satış fiyatı, hammadde ve enerji maliyeti, kapasite kullanımı ile ürün karması kârlılığı belirler.",
      gelirKaynaklari: [
        "Yassı çelik ürünlerinin yurt içi ve yurt dışı satışları",
        "Uzun çelik ürünlerinin satışları",
        "Yan ürünler ve diğer demir-çelik faaliyet gelirleri",
      ],
      gucluYanlar: [
        "Yassı ve uzun ürünü birlikte üretebilen entegre tesis yapısı",
        "Geniş sanayi müşteri tabanı ve büyük ölçekli üretim kapasitesi",
        "Erdemir Grubu içindeki operasyonel ve ticari sinerji",
      ],
      riskler: [
        "Küresel çelik fiyatlarındaki ve talepteki çevrimsel dalgalanma",
        "Demir cevheri, kömür, enerji ve navlun maliyetlerindeki artış",
        "Yüksek bakım ve yatırım harcamaları ile çevresel dönüşüm yükümlülükleri",
      ],
      sektorelKonum:
        "ISDMR, Türkiye demir-çelik sektöründe yassı ve uzun ürünleri aynı entegre tesiste üretebilmesiyle ayrışır. Karşılaştırmada ton başına marj, kapasite kullanımı, ürün karması ve grup içi ticari ilişkiler önemlidir.",
      yatirimciNotu:
        "ISDMR değerlendirilirken çelik fiyatları, hammadde maliyetleri, üretim ve satış tonajı, kapasite kullanımı, yatırım harcamaları ve temettü kararları birlikte izlenmelidir.",
    },
  },
  ISKPL: {
    activity:
      "Plastik levha ve termoform/rijit ambalaj ürünlerinin üretimi ve satışı; gıda, ilaç ve kozmetik sektörlerine çözümler.",
    about: [
      "Işık Plastik Sanayi ve Dış Ticaret Pazarlama A.Ş., plastik levha ile termoform ve rijit ambalaj ürünleri üreten sanayi şirketidir.",
      "Ürünler gıda, ilaç, kozmetik ve farklı endüstriyel uygulamalarda kullanılır; şirket yurt içi müşterilerin yanında ihracat pazarlarına da satış yapar.",
    ],
    analysis: {
      isModeli:
        "İş modeli, plastik hammaddenin ekstrüzyon ve termoform süreçleriyle müşteriye özel levha ve ambalaj ürünlerine dönüştürülmesine dayanır. Hammadde maliyeti, ürün karması, kapasite kullanımı ve ihracat fiyatları marjları etkiler.",
      gelirKaynaklari: [
        "Plastik levha ürünlerinin satışları",
        "Termoform ve rijit ambalaj çözümleri",
        "İhracat ve müşteriye özel ürün satışları",
      ],
      gucluYanlar: [
        "Birden fazla son pazara ürün sunan çeşitlendirilmiş müşteri yapısı",
        "Levha ve ambalajı aynı üretim yetkinliği içinde sunabilme",
        "İhracat pazarlarına erişim ve müşteriye özel ürün geliştirme",
      ],
      riskler: [
        "Petrokimya bazlı hammadde fiyatları ve döviz kurundaki dalgalanma",
        "Gıda ve tüketim ambalajı talebindeki değişimler",
        "Plastik kullanımına ilişkin çevresel düzenlemeler ve dönüşüm yatırımları",
      ],
      sektorelKonum:
        "ISKPL, plastik sektöründe levha ve rijit ambalaj üretimini birlikte yürüten imalatçı olarak konumlanır. Analizde tonaj büyümesi kadar katma değerli ürün payı, ihracat ve hammadde-mamul fiyat farkı izlenmelidir.",
      yatirimciNotu:
        "ISKPL için hammadde fiyatları, satış hacmi, kapasite kullanımı, ihracat payı, ürün karması ve işletme sermayesi gelişimi birlikte değerlendirilmelidir.",
    },
  },
  ISSEN: {
    activity:
      "Polipropilen dokuma, Big Bag/FIBC, PE film, compound ve masterbatch ürünlerinin üretimi ve satışı.",
    about: [
      "İşbir Sentetik Dokuma Sanayi A.Ş., endüstriyel ambalaj ve sentetik dokuma alanında polipropilen bazlı ürünler üretir.",
      "Şirketin ürün portföyünde Big Bag/FIBC, Big Bag kumaşları, PE film, compound ve katkı masterbatch ürünleri bulunur; satışlar gıda, kimya, ilaç ve madencilik gibi sektörlere yönelir.",
    ],
    analysis: {
      isModeli:
        "İş modeli, polipropilen ve diğer girdilerin dokuma, laminasyon, film ve bileşik üretim süreçleriyle endüstriyel ambalaj ürünlerine dönüştürülmesine dayanır. İhracat hacmi, ürün karması, hammadde fiyatı ve kapasite kullanımı sonuçları belirler.",
      gelirKaynaklari: [
        "Big Bag/FIBC ve sentetik dokuma ürün satışları",
        "PE film, compound ve masterbatch ürünleri",
        "Yurt dışı müşterilere yapılan endüstriyel ambalaj satışları",
      ],
      gucluYanlar: [
        "Farklı sanayilere hitap eden geniş endüstriyel ambalaj ürün portföyü",
        "Dokuma, film ve bileşik üretimini kapsayan entegre yapı",
        "İhracat pazarlarında müşteri ve uygulama deneyimi",
      ],
      riskler: [
        "Polipropilen ve diğer petrokimya girdilerindeki fiyat dalgalanması",
        "İhracat pazarlarında talep, kur ve lojistik koşullarındaki değişim",
        "Enerji maliyetleri, kapasite kullanımı ve müşteri yoğunlaşması",
      ],
      sektorelKonum:
        "ISSEN, plastik ve ambalaj sektöründe özellikle yüksek taşıma kapasiteli endüstriyel Big Bag ürünleriyle konumlanır. Karşılaştırmada ihracat payı, tonaj, ürün karması ve hammadde maliyetinin satış fiyatına yansıtılması önem taşır.",
      yatirimciNotu:
        "ISSEN takip edilirken ihracat siparişleri, kapasite kullanımı, polipropilen maliyeti, döviz pozisyonu ve katma değerli ürünlerin satış içindeki payı birlikte izlenmelidir.",
    },
  },
};

function hasText(value) {
  return (
    typeof value === "string" &&
    value.trim().length > 0 &&
    !FLIGHT_REFERENCE_RE.test(value.trim())
  );
}

function normalize(value) {
  return String(value ?? "")
    .toLocaleLowerCase("tr-TR")
    .replace(/\s+/g, " ")
    .trim();
}

function uniqueTextList(values) {
  const seen = new Set();
  return (Array.isArray(values) ? values : [])
    .filter(hasText)
    .filter((value) => {
      const key = normalize(value);
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });
}

function sanitizeValue(value) {
  if (typeof value === "string") {
    return FLIGHT_REFERENCE_RE.test(value.trim()) ? undefined : value;
  }
  if (Array.isArray(value)) {
    return value.map(sanitizeValue).filter((item) => item !== undefined);
  }
  if (value && typeof value === "object") {
    const cleaned = Object.fromEntries(
      Object.entries(value)
        .map(([key, item]) => [key, sanitizeValue(item)])
        .filter(([, item]) => item !== undefined)
    );
    return Object.keys(cleaned).length > 0 ? cleaned : undefined;
  }
  return value;
}

function sanitizeAnalysis(value) {
  const analysis = sanitizeValue(value) ?? {};
  return Object.fromEntries(
    Object.entries(analysis).filter(
      ([, item]) =>
        typeof item !== "string" ||
        hasText(item)
    )
  );
}

function repairProfile(profile) {
  const code = String(profile.kod ?? "").toUpperCase();
  const repair = repairs[code];
  const corporate = sanitizeValue(profile.kurumsalBilgiler) ?? {};
  const existingAnalysis = sanitizeAnalysis(profile.ozgunAnaliz);
  const existingAbout = uniqueTextList(profile.hakkinda);
  const productionFacilities = uniqueTextList(corporate.uretimTesisleri);

  const fallbackActivity =
    repair?.activity ||
    (hasText(corporate.faaliyetAlani) ? corporate.faaliyetAlani : undefined) ||
    (hasText(existingAnalysis.isModeli) ? existingAnalysis.isModeli : undefined) ||
    existingAbout[0];
  const about = repair?.about || existingAbout;
  const analysis = {
    ...existingAnalysis,
    ...(repair?.analysis ?? {}),
  };

  if (!hasText(analysis.isModeli) && hasText(fallbackActivity)) {
    analysis.isModeli = fallbackActivity;
  }

  return sanitizeValue({
    ...profile,
    hakkinda: about.length > 0 ? about : hasText(fallbackActivity) ? [fallbackActivity] : [],
    kurumsalBilgiler: {
      ...corporate,
      faaliyetAlani: fallbackActivity,
      uretimTesisleri:
        productionFacilities.length > 0 ? productionFacilities : undefined,
    },
    ozgunAnaliz: analysis,
  });
}

const files = fs
  .readdirSync(profilesDir)
  .filter((file) => file.toLowerCase().endsWith(".json"))
  .sort((a, b) => a.localeCompare(b, "tr"));

let changed = 0;
let referencesBefore = 0;

for (const file of files) {
  const filePath = path.join(profilesDir, file);
  const currentText = fs.readFileSync(filePath, "utf8");
  referencesBefore += (currentText.match(/"\$[0-9a-z]+"/gi) ?? []).length;
  const current = JSON.parse(currentText);
  const next = repairProfile(current);
  if (JSON.stringify(next) === JSON.stringify(current)) continue;
  const nextText = `${JSON.stringify(next, null, 2)}\n`;
  changed += 1;
  if (writeChanges) fs.writeFileSync(filePath, nextText, "utf8");
}

console.log(
  `${writeChanges ? "Onarıldı" : "Ön izleme"}: ${changed} profil; temizlenecek teknik referans: ${referencesBefore}.`
);

if (!writeChanges && changed > 0) {
  console.log("Değişiklikleri uygulamak için --write parametresini kullanın.");
}
