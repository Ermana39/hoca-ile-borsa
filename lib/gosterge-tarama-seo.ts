// Gösterge taraması sayfalarının opsiyonel SEO açıklama içerikleri.
// Bir slug için içerik varsa GostergeTaramaSayfasi altına "Nasıl yorumlanır"
// blokları eklenir. İçeriği olmayan taramalar bu bölümü göstermez.

export type SeoIcerik = {
  baslik: string;
  giris: string;
  nasilOlusturulur: string[];
  nasilKullanilir: string[];
  dikkatEdilecekler: string[];
};

export const TARAMA_SEO: Record<string, SeoIcerik> = {
  "macd-al": {
    baslik: "MACD Al Sinyali Taraması Nasıl Yorumlanır?",
    giris:
      "MACD al verenler taraması, Borsa İstanbul hisseleri içinde MACD göstergesine göre yukarı yönlü sinyal üreten hisseleri filtrelemek için hazırlanır. Bu tarama, tek başına kesin alım kararı üretmez; ancak momentum tarafında güçlenme işareti veren hisseleri daha hızlı bulmaya yardımcı olur.",
    nasilOlusturulur: [
      "Tarama, MACD çizgisinin sinyal çizgisiyle ilişkisi dikkate alınarak oluşturulur.",
      "MACD çizgisinin sinyal çizgisini yukarı yönlü kesmesi, teknik analizde pozitif momentum sinyali olarak takip edilir.",
      "Listeye giren hisseler, ilgili göstergede al sinyali oluşan semboller arasından filtrelenir.",
      "Tarama sonuçları dönemsel olarak değişebilir; çünkü MACD sinyali fiyat hareketine ve periyoda bağlı olarak güncellenir.",
    ],
    nasilKullanilir: [
      "Listede yer alan hisseler ilk aşamada teknik takip listesi olarak değerlendirilebilir.",
      "MACD al sinyali görülen hisselerde destek, direnç, hacim ve ana trend yönü ayrıca kontrol edilmelidir.",
      "Sinyalin güçlü sayılabilmesi için fiyatın önemli ortalamalar üzerinde kalıp kalmadığı incelenebilir.",
      "Yatırımcılar bu taramayı tek başına karar aracı olarak değil, kendi teknik analiz sürecini hızlandıran bir filtre olarak kullanmalıdır.",
    ],
    dikkatEdilecekler: [
      "MACD al sinyali gecikmeli oluşabilir; bu nedenle sinyal geldiğinde fiyatın önemli bir hareketi başlatmış olma ihtimali vardır.",
      "Yatay piyasada MACD sık sık hatalı sinyal üretebilir.",
      "Hacim desteği olmayan sinyaller daha zayıf kabul edilebilir.",
      "Bu sayfadaki veriler yatırım tavsiyesi değildir.",
    ],
  },
  "macd-sat": {
    baslik: "MACD Sat Sinyali Taraması Nasıl Yorumlanır?",
    giris:
      "MACD sat verenler taraması, MACD göstergesine göre momentum kaybı yaşayan veya teknik görünümü zayıflayan hisseleri filtrelemek için hazırlanır. Bu tarama, yatırımcıların portföylerindeki hisseleri risk açısından takip etmesine ve yeni işlem planlarında daha temkinli davranmasına yardımcı olabilir.",
    nasilOlusturulur: [
      "Tarama, MACD çizgisinin sinyal çizgisini aşağı yönlü kesmesi esas alınarak hazırlanır.",
      "Aşağı yönlü MACD kesişimi, teknik analizde momentum zayıflaması veya satış baskısının artması şeklinde yorumlanabilir.",
      "Listeye giren hisseler, ilgili göstergede sat sinyali üreten semboller arasından filtrelenir.",
      "Sonuçlar fiyat hareketine, periyoda ve piyasa koşullarına göre değişebilir.",
    ],
    nasilKullanilir: [
      "Listede yer alan hisseler risk kontrolü için izlenebilir.",
      "MACD sat sinyali alan hisselerde destek kırılımı, hacim artışı ve hareketli ortalamalar ayrıca kontrol edilmelidir.",
      "Elde taşınan hisselerde stop-loss seviyesi, ana trend ve bilanço beklentileri birlikte değerlendirilmelidir.",
      "Bu tarama, satış kararı vermek için tek başına yeterli değildir; teknik ve temel analizle birlikte kullanılmalıdır.",
    ],
    dikkatEdilecekler: [
      "MACD sat sinyali bazen kısa vadeli düzeltmelerde de oluşabilir.",
      "Ana trend güçlü ise sat sinyali sınırlı bir geri çekilmeyi gösterebilir.",
      "Yatay piyasada MACD al-sat sinyalleri sık değişebilir.",
      "Bu sayfadaki bilgiler yatırım tavsiyesi değildir.",
    ],
  },
  "yukselis-trendinde-olanlar": {
    baslik: "Yükseliş Trendinde Olan Hisseler Taraması Nasıl Kullanılır?",
    giris:
      "Yükseliş trendinde olan hisseler taraması, fiyatı 13, 21 ve 55 periyotluk hareketli ortalamaların üzerinde bulunan hisseleri filtrelemek için hazırlanır. Bu yapı, kısa ve orta vadeli teknik görünümde pozitif eğilimi devam eden hisseleri hızlı şekilde bulmaya yardımcı olur.",
    nasilOlusturulur: [
      "Tarama, hisse fiyatının 13, 21 ve 55 hareketli ortalamalara göre konumuna bakılarak oluşturulur.",
      "Fiyatın bu üç ortalamanın üzerinde olması, teknik olarak güçlü trend yapısına işaret edebilir.",
      "Kısa vadeli ortalamaların orta vadeli ortalamalar üzerinde kalması, trendin sağlıklı ilerlediğini gösterebilir.",
      "Liste, belirlenen hareketli ortalama şartlarını sağlayan hisselerden oluşur.",
    ],
    nasilKullanilir: [
      "Bu liste, güçlü teknik görünüm sergileyen hisseleri takip listesine almak için kullanılabilir.",
      "Listede yer alan hisselerde destek-direnç bölgeleri, hacim ve endeksin genel yönü ayrıca incelenmelidir.",
      "Fiyat ortalamaların çok üzerinde uzaklaşmışsa kısa vadeli düzeltme riski dikkate alınmalıdır.",
      "Yükseliş trendi taraması, alım noktası değil; teknik olarak güçlü hisseleri bulmak için ön filtre olarak değerlendirilmelidir.",
    ],
    dikkatEdilecekler: [
      "Hareketli ortalama üzerinde olmak, hissenin kesin yükselmeye devam edeceği anlamına gelmez.",
      "Ani haber akışları ve bilanço gelişmeleri teknik görünümü değiştirebilir.",
      "Endeks genelinde satış baskısı varsa güçlü hisselerde de geri çekilme görülebilir.",
      "Bu sayfadaki veriler yatırım tavsiyesi değildir.",
    ],
  },
  "dusus-trendinde-olanlar": {
    baslik: "Düşüş Trendinde Olan Hisseler Taraması Nasıl Kullanılır?",
    giris:
      "Düşüş trendinde olan hisseler taraması, fiyatı 13, 21 ve 55 periyotluk hareketli ortalamaların altında kalan hisseleri belirlemek için hazırlanır. Bu tarama, teknik görünümü zayıflayan hisseleri görmek ve riskli bölgeleri daha hızlı tespit etmek için kullanılabilir.",
    nasilOlusturulur: [
      "Tarama, hisse fiyatının 13, 21 ve 55 hareketli ortalamaların altında kalması esas alınarak oluşturulur.",
      "Fiyatın bu ortalamaların altında olması, kısa ve orta vadede zayıf teknik görünüm anlamına gelebilir.",
      "Ortalama altında kalan hisseler, düşüş trendi veya baskılı fiyatlama içinde değerlendirilebilir.",
      "Liste, belirlenen hareketli ortalama şartlarını sağlayan sembollerden oluşur.",
    ],
    nasilKullanilir: [
      "Bu liste, teknik görünümü zayıf hisseleri ayırt etmek için takip edilebilir.",
      "Portföyde bulunan hisseler bu listede yer alıyorsa destek seviyeleri ve stop bölgeleri yeniden kontrol edilebilir.",
      "Düşüş trendindeki hisselerde tepki yükselişleri görülebilir; ancak ana trend değişmeden risk devam edebilir.",
      "Bu tarama, satış kararı değil; risk analizi ve teknik görünüm takibi için ön filtre olarak kullanılmalıdır.",
    ],
    dikkatEdilecekler: [
      "Fiyat ortalamaların altında olsa bile güçlü destek bölgelerinde tepki alımları gelebilir.",
      "Düşüş trendinde görünen bazı hisseler haber, bilanço veya sektör etkisiyle yön değiştirebilir.",
      "Teknik taramalar temel analizle birlikte değerlendirilmelidir.",
      "Bu sayfadaki bilgiler yatırım tavsiyesi değildir.",
    ],
  },
};
