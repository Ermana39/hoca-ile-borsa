import type { RehberMakaleData } from "../_components/RehberMakale";

const halkaArzKaynaklari = [
  {
    title: "Kamuyu Aydınlatma Platformu",
    href: "https://www.kap.org.tr/tr/",
    text: "Halka arz izahnameleri, satış duyuruları, işlem görmeye başlama açıklamaları ve şirket bildirimleri için resmi duyuru platformu.",
  },
  {
    title: "Borsa İstanbul Pay Piyasası",
    href: "https://www.borsaistanbul.com/piyasalar/pay-piyasasi/piyasa-isleyisi",
    text: "Pay piyasasında işlem esasları, pazar yapısı, emir ve fiyat oluşumu gibi başlıkların takip edilebileceği resmi kaynak.",
  },
];

export const halkaArzKacLotVerirGuide: RehberMakaleData = {
  href: "/rehberler/halka-arz-kac-lot-verir",
  title: "Halka Arz Kaç Lot Verir? Lot Hesaplama ve Dağıtım Rehberi",
  breadcrumb: "Halka Arz Kaç Lot Verir?",
  description:
    "Halka arz kaç lot verir, kişi başı lot nasıl tahmin edilir, eşit dağıtım ve oransal dağıtımda lot hesabı nasıl yapılır? Örneklerle halka arz lot rehberi.",
  intro:
    "Halka arzlarda en çok sorulan soru genellikle “kaç lot verir?” olur. Bu sorunun cevabı halka arz büyüklüğüne, bireysel yatırımcıya ayrılan paya, talep eden kişi sayısına, dağıtım yöntemine ve yatırımcı gruplarına göre değişir.",
  sections: [
    {
      id: "halka-arz-kac-lot-verir",
      title: "Halka Arz Kaç Lot Verir?",
      paragraphs: [
        "Halka arzın kaç lot vereceği önceden kesin bilinmez. Çünkü nihai lot sayısı, talep toplama tamamlandıktan sonra ortaya çıkan toplam talebe göre hesaplanır. Şirketin kaç lot halka arz ettiği bilinse bile kaç kişinin talep gireceği ve talebin hangi yatırımcı gruplarında yoğunlaşacağı önceden kesinleşmez.",
        "Yatırımcılar genellikle geçmiş halka arzlara bakarak tahmin yapar. Ancak her halka arzın arz büyüklüğü, fiyatı, tahsisat oranı ve yatırımcı ilgisi farklıdır. Bu nedenle “şu kadar lot kesin gelir” yaklaşımı yanıltıcı olabilir.",
        "Sağlıklı tahmin için üç bilgi gerekir: halka arz edilen toplam lot, yurt içi bireysel yatırımcıya ayrılan tahsisat ve olası katılımcı sayısı.",
      ],
    },
    {
      id: "lot-hesabi-nasil-yapilir",
      title: "Halka Arz Lot Hesabı Nasıl Yapılır?",
      paragraphs: [
        "Basit eşit dağıtım tahmininde önce bireysel yatırımcıya ayrılan lot bulunur. Sonra bu lot, tahmini katılımcı sayısına bölünür. Ortaya çıkan sonuç kişi başı yaklaşık lot miktarını gösterir.",
        "Örneğin halka arzda 40 milyon lot satılıyor ve bunun yüzde 70'i yurt içi bireysel yatırımcıya ayrılıyorsa bireysel havuz 28 milyon lot olur. 2 milyon kişi talep girerse yaklaşık kişi başı 14 lot tahmin edilebilir.",
        "Bu hesap yalnızca kabaca fikir verir. Talep dağılımı, ek satış, yatırımcı grubu değişiklikleri ve dağıtım kuralları nihai sonucu değiştirebilir.",
      ],
      cards: [
        {
          title: "Toplam Halka Arz Lotu",
          text: "Şirketin satışa sunduğu toplam pay miktarıdır. Lot sayısı arttıkça, aynı katılımcı sayısında kişi başına düşebilecek miktar yükselir.",
        },
        {
          title: "Bireysel Tahsisat Oranı",
          text: "Halka arz edilen payların bireysel yatırımcıya ayrılan bölümünü gösterir. Bireysel tahsisat düşükse, toplam arz büyük olsa bile kişi başı lot sınırlı kalabilir.",
        },
        {
          title: "Katılımcı Sayısı",
          text: "Talep giren yatırımcı sayısı arttıkça kişi başına düşen lot azalır. Son yıllarda halka arz ilgisi yükseldiği için bu değişken lot tahmininde çok belirleyicidir.",
        },
      ],
    },
    {
      id: "esit-dagitimda-kac-lot-gelir",
      title: "Eşit Dağıtımda Kaç Lot Gelir?",
      paragraphs: [
        "Eşit dağıtımda amaç, yatırımcılar arasında daha dengeli bir dağıtım yapmaktır. Talep çok yüksekse yatırımcıların tamamına talep ettiği kadar lot verilmez; kişi başına düşen lot miktarı sınırlanır.",
        "Eşit dağıtımda küçük yatırımcı açısından en önemli avantaj, büyük talep giren yatırımcının dağıtımı tek başına domine etmesinin zorlaşmasıdır. Bu yüzden kişi başı lot tahmini, katılımcı sayısı üzerinden daha anlaşılır yapılabilir.",
        "Ancak eşit dağıtım her zaman herkese tam eşit lot verileceği anlamına gelmez. Talep miktarı, başvuru adedi, yatırımcı sınıfları ve dağıtım duyurusundaki özel kurallar sonucu etkileyebilir.",
      ],
    },
    {
      id: "oransal-dagitimda-kac-lot-gelir",
      title: "Oransal Dağıtımda Kaç Lot Gelir?",
      paragraphs: [
        "Oransal dağıtımda yatırımcının alacağı lot, genellikle girdiği talebin toplam talep içindeki payına göre belirlenir. Bu nedenle daha yüksek talep giren yatırımcı daha fazla lot alabilir.",
        "Bu yöntemde “kişi başı ortalama lot” hesabı eşit dağıtım kadar net değildir. Çünkü yatırımcılar farklı büyüklükte talep girer ve dağıtım nakit büyüklüğü üzerinden şekillenebilir.",
        "Oransal dağıtımda yatırımcı için en önemli risk, yüksek tutarda talep girilmesine rağmen talep çarpanının çok yüksek olması nedeniyle beklenen lotun çok altında dağıtım yapılmasıdır.",
      ],
    },
    {
      id: "lot-tahmini-yaparken",
      title: "Lot Tahmini Yaparken Nelere Bakılmalı?",
      bullets: [
        "Toplam halka arz büyüklüğü ve satışa sunulan lot miktarı incelenmelidir.",
        "Yurt içi bireysel yatırımcıya ayrılan tahsisat oranı kontrol edilmelidir.",
        "Dağıtım yönteminin eşit mi, oransal mı olduğu satış duyurusundan okunmalıdır.",
        "Geçmiş benzer halka arzlardaki katılımcı sayıları yalnızca tahmin aracı olarak kullanılmalıdır.",
        "Ek satış, grup bazlı tahsisat ve çalışanlara ayrılan pay gibi detaylar ayrıca değerlendirilmelidir.",
        "Kesin dağıtım sonucunun talep toplama bittikten sonra açıklanacağı unutulmamalıdır.",
      ],
    },
    {
      id: "fazla-talep-olursa",
      title: "Fazla Talep Olursa Ne Olur?",
      paragraphs: [
        "Halka arzlarda toplam talep, halka arz edilen pay miktarını aşabilir. Bu durumda yatırımcıların talepleri tamamen karşılanmaz ve dağıtım kurallarına göre azaltılır.",
        "Fazla talep, halka arza ilginin yüksek olduğunu gösterebilir. Ancak yüksek talep tek başına şirketin ucuz olduğu veya halka arz sonrası kesin yükseleceği anlamına gelmez.",
        "Dağıtım sonrası yatırımcının hesabına kullanılmayan nakit iade edilir. İade süresi ve kullanılabilir bakiye durumu aracı kurum uygulamasına göre takip edilmelidir.",
      ],
    },
    {
      id: "yanlis-bilinenler",
      title: "Halka Arz Lot Sayısı Hakkında Yanlış Bilinenler",
      bullets: [
        "Az lot gelmesi şirketin kötü olduğu anlamına gelmez.",
        "Çok lot gelmesi halka arzın mutlaka avantajlı olduğu anlamına gelmez.",
        "Katılımcı sayısı tahmini kesin sonuç değildir.",
        "Her aracı kurumda farklı lot geleceği düşüncesi genellikle yanlıştır; dağıtım merkezi kurallara göre yapılır.",
        "Lot fiyatı düşük olan halka arzın otomatik olarak ucuz olduğu söylenemez.",
        "Dağıtım sonucu, halka arz sonrası fiyat performansını garanti etmez.",
      ],
    },
    {
      id: "sonuc",
      title: "Sonuç: Halka Arz Lot Tahmini Nasıl Okunmalı?",
      paragraphs: [
        "Halka arzda kaç lot geleceğini tahmin etmek mümkündür; fakat kesin sonucu talep toplama bitmeden bilmek mümkün değildir. En doğru yaklaşım, toplam lot, bireysel tahsisat, dağıtım yöntemi ve olası katılımcı sayısını birlikte değerlendirmektir.",
        "Lot hesabı yatırım kararının yalnızca pratik tarafıdır. Asıl önemli olan şirketin finansalları, halka arz fiyatı, fon kullanım planı, izahname riskleri ve halka arz sonrası oluşabilecek piyasa koşullarıdır.",
      ],
    },
  ],
  faq: [
    {
      question: "Halka arz kaç lot verir?",
      answer:
        "Kesin lot sayısı talep toplama bittikten sonra belli olur. Tahmin için bireysel yatırımcıya ayrılan lot, tahmini katılımcı sayısına bölünür.",
    },
    {
      question: "Eşit dağıtımda herkes aynı lotu mu alır?",
      answer:
        "Genellikle yatırımcılar arasında dengeli dağıtım hedeflenir; ancak talep miktarı, yatırımcı grubu ve özel dağıtım kuralları sonucu etkileyebilir.",
    },
    {
      question: "Oransal dağıtımda çok para yatıran daha çok lot alır mı?",
      answer:
        "Oransal dağıtımda yüksek talep giren yatırımcı daha fazla lot alma ihtimaline sahip olabilir. Fakat toplam talep çok yüksekse beklenen lot sayısı düşebilir.",
    },
    {
      question: "Halka arzda gelmeyen lotun parası ne olur?",
      answer:
        "Dağıtımda karşılanmayan talebe karşılık gelen tutar yatırımcı hesabına iade edilir. Kullanılabilir bakiye zamanı aracı kurum ekranından takip edilmelidir.",
    },
  ],
  sources: halkaArzKaynaklari,
};

export const esitDagitimGuide: RehberMakaleData = {
  href: "/rehberler/esit-dagitim-nedir",
  title: "Eşit Dağıtım Nedir? Halka Arzda Eşit Dağıtım Nasıl Yapılır?",
  breadcrumb: "Eşit Dağıtım Nedir?",
  description:
    "Eşit dağıtım nedir, halka arzda eşit dağıtım nasıl yapılır, küçük yatırımcı için avantajları ve riskleri nelerdir? Örnekli eşit dağıtım rehberi.",
  intro:
    "Eşit dağıtım, halka arzlarda özellikle bireysel yatırımcıların en çok merak ettiği dağıtım yöntemlerinden biridir. Temel mantık, halka arz edilen payların yatırımcılar arasında daha dengeli şekilde paylaştırılmasıdır.",
  sections: [
    {
      id: "esit-dagitim-nedir",
      title: "Eşit Dağıtım Nedir?",
      paragraphs: [
        "Eşit dağıtım, halka arzda yatırımcılar arasında kişi bazlı daha dengeli lot dağıtımı yapılmasını hedefleyen yöntemdir. Talep halka arz edilen pay miktarını aşarsa yatırımcıların talepleri kısılır ve her yatırımcıya belirli bir sıra veya denge mantığıyla lot verilir.",
        "Bu yöntem küçük yatırımcı açısından önemlidir. Çünkü çok yüksek tutarda talep giren bir yatırımcının bireysel yatırımcı havuzundaki payların büyük bölümünü alması zorlaşır.",
        "Eşit dağıtım, “herkes kesin aynı sayıda lot alır” anlamına gelmez. Talep miktarı, başvuru adedi, yatırımcı grubu ve satış duyurusundaki kurallar sonucu değiştirebilir.",
      ],
    },
    {
      id: "nasil-yapilir",
      title: "Halka Arzda Eşit Dağıtım Nasıl Yapılır?",
      paragraphs: [
        "Eşit dağıtımda önce ilgili yatırımcı grubuna ayrılan lot miktarı belirlenir. Daha sonra talepte bulunan yatırımcılar dikkate alınır ve lotlar mümkün olduğunca geniş yatırımcı kitlesine yayılır.",
        "Talep eden kişi sayısı fazla olduğunda yatırımcının istediği lotun tamamı karşılanmayabilir. Örneğin 50 lot talep eden yatırımcıya 12 lot, 20 lot talep eden yatırımcıya da dağıtım kuralına göre benzer seviyede lot gelebilir.",
        "Dağıtımın kesin yöntemi halka arz satış duyurusunda ve izahnamede yer alan esaslara göre uygulanır. Bu nedenle yatırımcı yalnızca sosyal medya tahminlerine değil resmi belgelere bakmalıdır.",
      ],
      cards: [
        {
          title: "Bireysel Havuz Belirlenir",
          text: "Yurt içi bireysel yatırımcıya ayrılan pay miktarı hesaplamanın başlangıç noktasıdır.",
        },
        {
          title: "Talep Eden Yatırımcılar Sayılır",
          text: "Dağıtımda kaç kişinin geçerli talep girdiği önemlidir. Katılımcı arttıkça kişi başı lot azalır.",
        },
        {
          title: "Lotlar Dengeli Paylaştırılır",
          text: "Amaç, halka arz edilen payların mümkün olduğunca çok yatırımcıya ulaşmasını sağlamaktır.",
        },
      ],
      orderedCards: true,
    },
    {
      id: "avantajlari",
      title: "Eşit Dağıtımın Avantajları Nelerdir?",
      bullets: [
        "Küçük yatırımcının halka arza erişimini kolaylaştırabilir.",
        "Yüksek talep giren yatırımcının dağıtımı domine etmesini sınırlayabilir.",
        "Kişi başı lot tahmini oransal dağıtıma göre daha anlaşılır olabilir.",
        "Halka arzın daha geniş yatırımcı tabanına yayılmasına katkı sağlayabilir.",
        "Yatırımcılar açısından başvuru sürecini daha sade hale getirebilir.",
      ],
    },
    {
      id: "dezavantajlari",
      title: "Eşit Dağıtımın Dezavantajları Nelerdir?",
      paragraphs: [
        "Eşit dağıtımın en önemli dezavantajı, çok yoğun talep gelen halka arzlarda kişi başına düşen lot sayısının oldukça düşük kalabilmesidir. Bu durumda yatırımcı halka arza katılsa bile portföy büyüklüğü açısından anlamlı bir pozisyon alamayabilir.",
        "Ayrıca eşit dağıtım kısa vadeli yatırımcı ilgisini artırabilir. Çok sayıda yatırımcının az lotla katılması, işlem başladıktan sonra satış davranışını etkileyebilir. Bu nedenle eşit dağıtım tek başına olumlu veya olumsuz sinyal değildir.",
      ],
    },
    {
      id: "oransal-dagitimdan-farki",
      title: "Eşit Dağıtım ile Oransal Dağıtım Arasındaki Fark",
      cards: [
        {
          title: "Eşit Dağıtım",
          text: "Kişi bazlı daha dengeli dağıtım hedeflenir. Küçük yatırımcı açısından anlaşılması daha kolaydır.",
        },
        {
          title: "Oransal Dağıtım",
          text: "Dağıtım talep büyüklüğüne göre şekillenir. Daha yüksek talep giren yatırımcı daha fazla lot alabilir.",
        },
        {
          title: "Lot Tahmini",
          text: "Eşit dağıtımda katılımcı sayısı öne çıkar. Oransal dağıtımda toplam talep tutarı ve talep çarpanı daha belirleyicidir.",
        },
      ],
    },
    {
      id: "nelere-dikkat-edilmeli",
      title: "Eşit Dağıtımda Nelere Dikkat Edilmeli?",
      bullets: [
        "Dağıtım yönteminin gerçekten eşit dağıtım olup olmadığı satış duyurusundan kontrol edilmelidir.",
        "Bireysel yatırımcıya ayrılan tahsisat oranı incelenmelidir.",
        "Talep edilen lotun tamamının gelmeyebileceği unutulmamalıdır.",
        "Az lot gelmesi yatırım kararını sadece kısa vadeli tavan beklentisine sıkıştırmamalıdır.",
        "Şirketin izahnamesi, fiyat tespit raporu ve fon kullanım planı mutlaka okunmalıdır.",
      ],
    },
    {
      id: "sonuc",
      title: "Sonuç: Eşit Dağıtım Nasıl Yorumlanmalı?",
      paragraphs: [
        "Eşit dağıtım, halka arzın daha geniş yatırımcı tabanına yayılmasını sağlayan pratik bir yöntemdir. Özellikle küçük yatırımcı açısından daha anlaşılır ve erişilebilir bir yapı sunabilir.",
        "Buna rağmen dağıtım yöntemi tek başına yatırım gerekçesi değildir. Halka arzın kalitesi; şirketin finansalları, fiyatı, fon kullanım planı, riskleri ve piyasa koşullarıyla birlikte değerlendirilmelidir.",
      ],
    },
  ],
  faq: [
    {
      question: "Eşit dağıtım nedir?",
      answer:
        "Eşit dağıtım, halka arz edilen payların yatırımcılar arasında daha dengeli şekilde paylaştırılmasını hedefleyen dağıtım yöntemidir.",
    },
    {
      question: "Eşit dağıtımda kaç lot gelir?",
      answer:
        "Yaklaşık lot için bireysel yatırımcıya ayrılan lot, geçerli talep giren yatırımcı sayısına bölünebilir. Kesin sonuç dağıtım sonrası belli olur.",
    },
    {
      question: "Eşit dağıtım küçük yatırımcı için iyi midir?",
      answer:
        "Küçük yatırımcının pay alma ihtimalini artırabilir; ancak az lot gelmesi, fiyat riski ve şirket riski devam eder.",
    },
    {
      question: "Eşit dağıtım yatırım tavsiyesi midir?",
      answer:
        "Hayır. Dağıtım yöntemi sadece halka arzın teknik yapısını gösterir; yatırım kararı için şirket ayrıca analiz edilmelidir.",
    },
  ],
  sources: halkaArzKaynaklari,
};

export const oransalDagitimGuide: RehberMakaleData = {
  href: "/rehberler/oransal-dagitim-nedir",
  title: "Oransal Dağıtım Nedir? Halka Arzda Oransal Dağıtım Nasıl Hesaplanır?",
  breadcrumb: "Oransal Dağıtım Nedir?",
  description:
    "Oransal dağıtım nedir, halka arzda oransal dağıtım nasıl hesaplanır, talep çarpanı ve lot dağıtımı yatırımcı için ne anlama gelir?",
  intro:
    "Oransal dağıtım, halka arzlarda yatırımcının alacağı payın girdiği talep miktarına göre belirlendiği dağıtım yaklaşımıdır. Bu yöntemde küçük yatırımcı, yüksek talep giren yatırımcı ve kurumsal yatırımcı davranışı daha farklı sonuçlar doğurabilir.",
  sections: [
    {
      id: "oransal-dagitim-nedir",
      title: "Oransal Dağıtım Nedir?",
      paragraphs: [
        "Oransal dağıtım, halka arzda dağıtılacak payların yatırımcıların talep büyüklüğüne göre paylaştırılmasıdır. Yatırımcı ne kadar yüksek talep girerse, dağıtım havuzundan alabileceği pay da o ölçüde artabilir.",
        "Bu yöntem, eşit dağıtımın aksine kişi başı benzer lot hedeflemez. Ana belirleyici yatırımcının talep tutarı ve toplam talep içindeki oranıdır.",
        "Oransal dağıtımda nihai lot sayısı, halka arz edilen pay miktarı ile toplam talep arasındaki ilişkiye bağlıdır. Toplam talep çok yüksekse, yatırımcı girdiği talebin çok küçük bir bölümünü alabilir.",
      ],
    },
    {
      id: "nasil-hesaplanir",
      title: "Oransal Dağıtım Nasıl Hesaplanır?",
      paragraphs: [
        "Basit mantık şudur: yatırımcının talebi, toplam geçerli talebe bölünür; çıkan oran, dağıtılacak pay miktarıyla çarpılır. Böylece yatırımcının yaklaşık alabileceği lot hesaplanır.",
        "Örneğin bir yatırımcı 100.000 TL talep girmiş, toplam talep 10 milyar TL olmuş ve ilgili yatırımcı grubuna 1 milyar TL karşılığı pay ayrılmışsa karşılanma oranı yaklaşık yüzde 10 olur. Bu durumda yatırımcı talebinin yaklaşık yüzde 10'u kadar pay alabilir.",
        "Gerçek dağıtımda küsurat, yatırımcı grubu, tahsisat değişikliği ve satış duyurusundaki özel kurallar nedeniyle sonuç farklılaşabilir.",
      ],
      note:
        "Pratik formül: Yaklaşık karşılanma oranı = ilgili yatırımcı grubuna ayrılan halka arz tutarı / aynı gruptan gelen toplam talep.",
    },
    {
      id: "talep-carpani",
      title: "Talep Çarpanı Ne Anlama Gelir?",
      paragraphs: [
        "Talep çarpanı, halka arzda gelen toplam talebin satışa sunulan miktarın kaç katı olduğunu gösterir. Talep çarpanı yükseldikçe yatırımcının talebinin karşılanma oranı düşer.",
        "Örneğin 10 kat talep gelen bir yatırımcı grubunda teorik karşılanma oranı yaklaşık yüzde 10 olabilir. 20 kat talep gelirse teorik karşılanma oranı yaklaşık yüzde 5'e düşebilir.",
        "Bu oran her zaman birebir uygulanmaz; fakat oransal dağıtımın mantığını anlamak için güçlü bir göstergedir.",
      ],
    },
    {
      id: "esit-dagitimdan-farki",
      title: "Oransal Dağıtım ile Eşit Dağıtım Arasındaki Fark",
      cards: [
        {
          title: "Talep Tutarı Daha Önemlidir",
          text: "Oransal dağıtımda yüksek talep giren yatırımcı daha fazla pay alma ihtimali yakalar.",
        },
        {
          title: "Kişi Sayısı Tek Başına Yetmez",
          text: "Eşit dağıtımda katılımcı sayısı çok belirleyiciyken, oransal dağıtımda toplam talep tutarı daha kritik hale gelir.",
        },
        {
          title: "Nakit Yönetimi Öne Çıkar",
          text: "Yatırımcı yüksek talep girmek için daha fazla nakit bloke edebilir; karşılanmayan tutar dağıtım sonrası iade edilir.",
        },
      ],
    },
    {
      id: "avantaj-ve-riskler",
      title: "Oransal Dağıtımın Avantajları ve Riskleri",
      paragraphs: [
        "Oransal dağıtım, yüksek tutarlı talep girmek isteyen yatırımcı için daha fazla lot alma imkanı sunabilir. Bu nedenle özellikle kurumsal yatırımcıların ve büyük bireysel yatırımcıların ilgisini çekebilir.",
        "Risk tarafında ise yüksek tutarda nakit bağlama ihtiyacı vardır. Ayrıca talep çarpanı çok yüksek olursa yatırımcı beklediği lotun çok altında dağıtım alabilir.",
      ],
      bullets: [
        "Yüksek talep daha yüksek lot ihtimali sağlayabilir.",
        "Talep çarpanı arttıkça karşılanma oranı düşer.",
        "Nakit bloke süreci yatırımcı için fırsat maliyeti yaratabilir.",
        "Az talep giren yatırımcı çok sınırlı lot alabilir.",
        "Dağıtım yöntemi şirketin yatırım kalitesini tek başına göstermez.",
      ],
    },
    {
      id: "yatirimci-ne-yapmali",
      title: "Yatırımcı Oransal Dağıtımda Nelere Bakmalı?",
      bullets: [
        "Satış duyurusunda dağıtımın oransal olup olmadığı kontrol edilmelidir.",
        "Hangi yatırımcı grubuna ne kadar tahsisat ayrıldığı incelenmelidir.",
        "Talep girmek için bloke edilecek nakdin ne kadar süre kullanılamayacağı düşünülmelidir.",
        "Tahmini talep çarpanı üzerinden karşılanma oranı hesaplanmalıdır.",
        "Gelen lot miktarından bağımsız olarak şirketin fiyatı, bilançosu ve riskleri analiz edilmelidir.",
      ],
    },
    {
      id: "sonuc",
      title: "Sonuç: Oransal Dağıtım Nasıl Okunmalı?",
      paragraphs: [
        "Oransal dağıtım, halka arzın büyük talep giren yatırımcıya daha fazla lot imkanı tanıyan yöntemidir. Ancak bu imkan, yüksek talep çarpanı nedeniyle her zaman beklenen sonucu vermez.",
        "Yatırımcı bu yöntemi yalnızca lot alma stratejisi olarak değil, nakit yönetimi ve risk yönetimi açısından da değerlendirmelidir.",
      ],
    },
  ],
  faq: [
    {
      question: "Oransal dağıtım nedir?",
      answer:
        "Oransal dağıtım, halka arz paylarının yatırımcıların talep büyüklüğüne göre paylaştırıldığı dağıtım yöntemidir.",
    },
    {
      question: "Oransal dağıtımda lot nasıl hesaplanır?",
      answer:
        "Yaklaşık hesap için yatırımcı grubuna ayrılan tutar, aynı gruptan gelen toplam talebe bölünür. Çıkan karşılanma oranı yatırımcının talebine uygulanır.",
    },
    {
      question: "Oransal dağıtım küçük yatırımcı için dezavantaj mı?",
      answer:
        "Yüksek talep giren yatırımcılar daha fazla lot alabileceği için küçük tutarlı talepler sınırlı kalabilir. Ancak sonuç halka arzın tahsisat yapısına bağlıdır.",
    },
    {
      question: "Oransal dağıtımda para iadesi olur mu?",
      answer:
        "Evet. Karşılanmayan talebe karşılık gelen tutar yatırımcı hesabına iade edilir.",
    },
  ],
  sources: halkaArzKaynaklari,
};

export const t1T2BakiyeGuide: RehberMakaleData = {
  href: "/rehberler/t1-t2-bakiye-nedir",
  title: "T1 ve T2 Bakiye Nedir? Borsada Takas, Kullanılabilir Bakiye ve Halka Arz",
  breadcrumb: "T1 ve T2 Bakiye Nedir?",
  description:
    "T1 ve T2 bakiye nedir, borsada takas süresi nasıl işler, satıştan gelen para ne zaman kullanılır ve halka arzda T1 T2 bakiye ne anlama gelir?",
  intro:
    "T1 ve T2 bakiye, borsada hisse alıp satan yatırımcıların para ve pay takasını anlaması için kritik kavramlardır. Özellikle halka arzlara katılırken, satıştan gelen para veya bekleyen takas bakiyesi kullanımı yatırımcı ekranlarında kafa karıştırabilir.",
  sections: [
    {
      id: "t1-t2-bakiye-nedir",
      title: "T1 ve T2 Bakiye Nedir?",
      paragraphs: [
        "T1, işlem gününden sonraki birinci iş gününü; T2 ise işlem gününden sonraki ikinci iş gününü ifade eder. Pay piyasasında alım satım işlemlerinin nakit ve menkul kıymet takası işlem gününden hemen sonra değil, belirli takas süreci sonunda tamamlanır.",
        "Yatırımcı bir hisse sattığında satış tutarı ekranda görünebilir; ancak bu tutarın tamamen serbest, çekilebilir veya her işlemde kullanılabilir hale gelmesi takas sürecine bağlıdır.",
        "Bu yüzden aracı kurum ekranlarında T1 bakiye, T2 bakiye, kullanılabilir bakiye, çekilebilir bakiye gibi farklı kalemler görülebilir.",
      ],
    },
    {
      id: "takas-suresi",
      title: "Borsada Takas Süresi Nasıl İşler?",
      paragraphs: [
        "Pay piyasasında takas, alıcıya payın, satıcıya nakdin aktarılması sürecidir. İşlem yapıldığı gün emir gerçekleşir; fakat nihai teslim ve ödeme takas tarihinde tamamlanır.",
        "Takas süreci nedeniyle bugün satılan hissenin parası anında çekilebilir para gibi düşünülmemelidir. Aracı kurumlar bazı işlemlerde bu bakiyeyi kullandırabilir, bazı işlemlerde ise sınırlama getirebilir.",
        "Halka arzlarda T1 ve T2 bakiyenin kullanılıp kullanılamayacağı halka arz özelindeki talep toplama kurallarına ve aracı kurum uygulamasına göre değişebilir.",
      ],
      cards: [
        {
          title: "T Günü",
          text: "Alım veya satış işleminin gerçekleştiği işlem günüdür.",
        },
        {
          title: "T1",
          text: "İşlem gününden sonraki birinci iş günüdür. Bakiye bazı ekranlarda bekleyen takas olarak görülebilir.",
        },
        {
          title: "T2",
          text: "İşlem gününden sonraki ikinci iş günüdür. Pay piyasasında takasın tamamlanması açısından kritik aşamadır.",
        },
      ],
      orderedCards: true,
    },
    {
      id: "kullanilabilir-ve-cekilebilir",
      title: "Kullanılabilir Bakiye ile Çekilebilir Bakiye Farkı",
      paragraphs: [
        "Kullanılabilir bakiye, aracı kurumun yatırım işlemleri için kullanıma açtığı tutarı ifade edebilir. Çekilebilir bakiye ise yatırımcının banka hesabına transfer edebileceği nakit anlamına gelir.",
        "Satıştan gelen para bazı durumlarda hisse alımı veya halka arz talebi için kullanılabilir görünürken, aynı anda çekilebilir bakiye olarak görünmeyebilir. Bu fark takas sürecinden kaynaklanır.",
        "Yatırımcı işlem yapmadan önce sadece toplam bakiyeye değil, kullanılabilir ve çekilebilir bakiye ayrımına bakmalıdır.",
      ],
    },
    {
      id: "halka-arzda-t1-t2",
      title: "Halka Arzda T1 ve T2 Bakiye Ne Anlama Gelir?",
      paragraphs: [
        "Bazı halka arzlarda T1 veya T2 bakiyenin talep girişinde kullanılıp kullanılamayacağı yatırımcılar için önemli hale gelir. Çünkü yatırımcı yakın zamanda hisse satmış olabilir ve bu tutarı halka arz talebinde kullanmak isteyebilir.",
        "Halka arz duyurularında veya aracı kurum ekranlarında T1/T2 bakiye ile talep kabul edilip edilmediği ayrıca belirtilir. Her halka arzda aynı kural geçerli olmayabilir.",
        "Bu nedenle “T1 T2 bakiye geçerli mi?” sorusunun cevabı halka arz bazında kontrol edilmelidir. En güvenli yöntem, talep girmeden önce aracı kurumun halka arz talep ekranındaki kullanılabilir tutarı incelemektir.",
      ],
    },
    {
      id: "satis-parasi-ne-zaman-gelir",
      title: "Hisse Satışından Gelen Para Ne Zaman Kullanılır?",
      paragraphs: [
        "Hisse satışından gelen tutar işlem gerçekleştiğinde portföy ekranına yansıyabilir. Ancak bu tutarın çekilebilir nakde dönüşmesi takas sürecinin tamamlanmasına bağlıdır.",
        "Bazı aracı kurumlar satıştan doğan alacağı yeni hisse alımında veya halka arz talebinde kullandırabilir. Fakat bu durum kurum politikası, işlem yapılan ürün ve ilgili halka arz kurallarıyla sınırlı olabilir.",
        "Yatırımcı özellikle son başvuru günü halka arz talebi girecekse, bakiyenin gerçekten talebe uygun olup olmadığını önceden kontrol etmelidir.",
      ],
    },
    {
      id: "dikkat-edilecekler",
      title: "T1 ve T2 Bakiyede Nelere Dikkat Edilmeli?",
      bullets: [
        "Toplam bakiye ile çekilebilir bakiye aynı şey değildir.",
        "Satıştan gelen para her halka arzda otomatik olarak kullanılabilir olmayabilir.",
        "Takas günü hafta sonu ve resmi tatillere göre değişebilir.",
        "Brüt takas, tedbir veya özel işlem kuralları bakiyenin kullanımını etkileyebilir.",
        "Halka arz talebi girmeden önce aracı kurum ekranındaki geçerli kullanılabilir tutar kontrol edilmelidir.",
        "Kredi, teminat, virman ve nakit transfer işlemleri bakiyeyi farklı gösterebilir.",
      ],
    },
    {
      id: "ornek",
      title: "Basit Örnekle T1 ve T2 Bakiye",
      paragraphs: [
        "Pazartesi günü hisse satan bir yatırımcı için salı günü T1, çarşamba günü T2 olabilir. Resmi tatil yoksa takas süreci bu mantıkla ilerler.",
        "Yatırımcı pazartesi satış yaptıktan sonra ekranda satış tutarını görebilir. Fakat bu tutarın çarşamba gününden önce çekilebilir olmaması mümkündür. Aracı kurum bu tutarı bazı yatırım işlemlerinde kullandırabilir, bazı işlemlerde kullandırmayabilir.",
        "Bu örnek, T1 ve T2 kavramlarının neden özellikle nakit planlaması yapan yatırımcılar için önemli olduğunu gösterir.",
      ],
    },
    {
      id: "sonuc",
      title: "Sonuç: T1 ve T2 Bakiye Nasıl Okunmalı?",
      paragraphs: [
        "T1 ve T2 bakiye, yatırımcının işlem sonrası nakit ve pay takasını doğru anlamasını sağlar. Bu kavramlar bilinmeden halka arz talebi, hisse alımı veya para çekme planı yapmak hatalı beklenti oluşturabilir.",
        "En doğru yaklaşım, işlem öncesinde kullanılabilir bakiye, çekilebilir bakiye ve halka arz talep ekranında kabul edilen bakiye türünü birlikte kontrol etmektir.",
      ],
    },
  ],
  faq: [
    {
      question: "T1 bakiye nedir?",
      answer:
        "T1 bakiye, işlem gününden sonraki birinci iş günüyle ilişkili bekleyen takas bakiyesidir. Kullanımı aracı kurum ve işlem türüne göre değişebilir.",
    },
    {
      question: "T2 bakiye nedir?",
      answer:
        "T2 bakiye, işlem gününden sonraki ikinci iş gününde tamamlanacak takas süreciyle ilişkili bakiyedir.",
    },
    {
      question: "T1 T2 bakiye halka arzda kullanılır mı?",
      answer:
        "Her halka arzda aynı değildir. Talep toplama kuralları ve aracı kurum uygulaması kontrol edilmelidir.",
    },
    {
      question: "Satıştan gelen para ne zaman çekilir?",
      answer:
        "Pay piyasasında satıştan gelen tutarın çekilebilir hale gelmesi genellikle takas sürecinin tamamlanmasına bağlıdır. Hafta sonu ve tatiller süreyi etkileyebilir.",
    },
  ],
  sources: halkaArzKaynaklari,
};

export const halkaArzTavanBozarsaGuide: RehberMakaleData = {
  href: "/rehberler/halka-arz-tavan-bozarsa-ne-olur",
  title: "Halka Arz Tavan Bozarsa Ne Olur? Tavan Serisi, Riskler ve Satış Kararı",
  breadcrumb: "Halka Arz Tavan Bozarsa Ne Olur?",
  description:
    "Halka arz tavan bozarsa ne olur, tavan serisi neden biter, satış kararı nasıl değerlendirilir ve yatırımcı hangi risklere dikkat etmelidir?",
  intro:
    "Halka arz sonrası ilk günlerde sık görülen tavan hareketleri yatırımcı ilgisini artırır. Ancak tavan serisinin bozulması, hissenin artık tek yönlü hareket etmediğini ve arz-talep dengesinin değişmeye başladığını gösterir.",
  sections: [
    {
      id: "tavan-bozmak-nedir",
      title: "Halka Arzda Tavan Bozmak Ne Demek?",
      paragraphs: [
        "Tavan bozmak, bir hissenin gün içinde ulaşabileceği en yüksek fiyat seviyesinden işlem görürken bu seviyedeki alış desteğinin zayıflaması ve fiyatın tavan fiyattan aşağı gelmesidir.",
        "Halka arzlarda tavan bozma genellikle ilk günlerdeki güçlü alıcı ilgisinin azalmaya başladığı, satış emirlerinin arttığı veya yatırımcıların kar realizasyonuna yöneldiği dönemlerde görülür.",
        "Tavanın bozulması hissenin kesin düşeceği anlamına gelmez. Ancak artık fiyatın daha dengeli, oynak ve iki yönlü hareket edebileceği bir aşamaya geçildiğini gösterir.",
      ],
    },
    {
      id: "neden-tavan-bozar",
      title: "Halka Arz Hissesi Neden Tavan Bozar?",
      cards: [
        {
          title: "Kar Satışları Artar",
          text: "İlk günlerde yüksek getiri gören yatırımcılar karını realize etmek isteyebilir.",
        },
        {
          title: "Alış İştahı Zayıflar",
          text: "Tavan fiyatından bekleyen alıcı sayısı azalırsa satış emirleri fiyatı aşağı çekebilir.",
        },
        {
          title: "Piyasa Koşulları Bozulur",
          text: "Endeksteki düşüş, faiz, kur veya genel risk iştahındaki bozulma yeni halka arzları da etkileyebilir.",
        },
        {
          title: "Değerleme Tartışması Başlar",
          text: "Hisse kısa sürede hızlı yükseldiyse yatırımcılar yeni fiyatın pahalı olup olmadığını sorgulamaya başlar.",
        },
      ],
    },
    {
      id: "tavan-bozarsa-ne-olur",
      title: "Tavan Bozarsa Ne Olur?",
      paragraphs: [
        "Tavan bozulduğunda hisse artık gün boyunca farklı fiyat seviyelerinde işlem görebilir. Tavan fiyatından satış yapamayan yatırımcılar daha düşük fiyatlardan satış emri verebilir; yeni alıcılar ise daha uygun seviye bekleyebilir.",
        "Bu aşamada işlem hacmi artabilir ve fiyat oynaklığı yükselebilir. Özellikle halka açıklık oranı düşük, lot sayısı sınırlı veya yatırımcı ilgisi çok yoğun hisselerde hareketler daha sert olabilir.",
        "Tavan bozma sonrası hisse yeniden tavana dönebilir, yataya sarabilir veya satış baskısıyla düşebilir. Tek bir senaryoyu kesin kabul etmek doğru değildir.",
      ],
    },
    {
      id: "satmali-mi",
      title: "Tavan Bozunca Hisse Satılmalı mı?",
      paragraphs: [
        "Bu sorunun tek bir cevabı yoktur. Kısa vadeli halka arz yatırımcısı için tavanın bozulması kar alma sinyali olarak görülebilir. Uzun vadeli yatırımcı ise şirketin temel değerine, halka arz fiyatına ve büyüme potansiyeline bakarak farklı karar verebilir.",
        "Yatırımcı karar verirken sadece tavanın bozulmasına değil; işlem hacmine, emir derinliğine, şirketin finansallarına, halka arz sonrası fiyatın ulaştığı piyasa değerine ve genel piyasa koşullarına bakmalıdır.",
      ],
      bullets: [
        "Kısa vadeli hedefiniz neydi?",
        "Halka arz fiyatına göre getiri ne kadar oluştu?",
        "Hisse yeni fiyatıyla benzer şirketlere göre pahalı mı?",
        "İşlem hacmi sağlıklı mı, yoksa panik satış mı var?",
        "Portföyünüzdeki ağırlık riskinizi artırıyor mu?",
      ],
    },
    {
      id: "tavan-serisi-bitince",
      title: "Tavan Serisi Bitince Hangi Riskler Artar?",
      paragraphs: [
        "Tavan serisi bittiğinde fiyat artık daha geniş bir alıcı-satıcı mücadelesine girer. Bu dönemde yatırımcı psikolojisi hızlı değişebilir. İlk tavan bozma sonrasında paniğe kapılan yatırımcılar satış baskısını artırabilir.",
        "Bunun yanında kısa sürede yüksek getiri oluştuysa değerleme riski de artar. Halka arz fiyatına göre makul görünen bir şirket, birkaç tavan sonrasında pahalı hale gelebilir.",
      ],
      bullets: [
        "Oynaklık artabilir.",
        "Alış-satış farkı açılabilir.",
        "Kar satışları hızlanabilir.",
        "Sosyal medya beklentileri fiyat davranışını abartabilir.",
        "Temel değerleme ile piyasa fiyatı arasındaki fark büyüyebilir.",
      ],
    },
    {
      id: "yanlis-bilinenler",
      title: "Tavan Bozma Hakkında Yanlış Bilinenler",
      bullets: [
        "Tavan bozan halka arz kesin düşer düşüncesi doğru değildir.",
        "Tavan bozmayan halka arz risksizdir düşüncesi de yanlıştır.",
        "İlk tavan bozma her zaman satış için en iyi fiyat anlamına gelmez.",
        "Tavan sayısı şirket kalitesini tek başına göstermez.",
        "Tavan serisi, halka arz fiyatının ucuz olduğunu otomatik olarak kanıtlamaz.",
      ],
    },
    {
      id: "sonuc",
      title: "Sonuç: Tavan Bozma Nasıl Yorumlanmalı?",
      paragraphs: [
        "Halka arzda tavan bozma, fiyatın tek yönlü yükseliş döneminden daha dengeli ve riskli bir işlem dönemine geçtiğini gösterebilir. Bu sinyal önemlidir ama tek başına alım veya satım kararı olmamalıdır.",
        "Yatırımcı, tavan bozma anında panik yapmak yerine hedefini, maliyetini, oluşan getiriyi, şirket değerlemesini ve piyasa koşullarını birlikte değerlendirmelidir.",
      ],
    },
  ],
  faq: [
    {
      question: "Halka arz tavan bozarsa ne olur?",
      answer:
        "Hisse tavan fiyattan aşağı işlem görmeye başlar. Oynaklık artabilir, kar satışları gelebilir veya hisse yeniden toparlanabilir.",
    },
    {
      question: "Tavan bozan halka arz kesin düşer mi?",
      answer:
        "Hayır. Tavan bozma riskin arttığını gösterir; fakat fiyatın kesin düşeceğini garanti etmez.",
    },
    {
      question: "Tavan bozunca satış yapılmalı mı?",
      answer:
        "Bu karar yatırımcının hedefi, maliyeti, risk profili ve şirketin temel görünümüne bağlıdır.",
    },
    {
      question: "Halka arz tavan serisi kaç gün sürer?",
      answer:
        "Sabit bir süre yoktur. Talep, halka açıklık oranı, piyasa koşulları ve şirket algısı tavan serisini etkiler.",
    },
  ],
  sources: halkaArzKaynaklari,
};

export const halkaArzdanSonraSatisGuide: RehberMakaleData = {
  href: "/rehberler/halka-arzdan-sonra-hisse-ne-zaman-satilir",
  title: "Halka Arzdan Sonra Hisse Ne Zaman Satılır? Satış Zamanı ve Strateji Rehberi",
  breadcrumb: "Halka Arzdan Sonra Hisse Ne Zaman Satılır?",
  description:
    "Halka arzdan sonra hisse ne zaman satılır, ilk işlem günü, tavan serisi, hedef getiri, uzun vadeli tutma ve risk yönetimi nasıl değerlendirilir?",
  intro:
    "Halka arzdan sonra hisse satma kararı, yatırımcının kısa vadeli getiri hedefiyle mi yoksa şirkete ortak olma düşüncesiyle mi hareket ettiğine göre değişir. Doğru zaman tek bir gün değil, planlı bir karar sürecidir.",
  sections: [
    {
      id: "ne-zaman-satilir",
      title: "Halka Arzdan Sonra Hisse Ne Zaman Satılır?",
      paragraphs: [
        "Halka arzdan sonra hissenin ne zaman satılacağına dair kesin ve herkes için geçerli bir kural yoktur. Bazı yatırımcı ilk tavan bozulduğunda satar, bazıları hedef getiriye ulaştığında satar, bazıları ise şirketi uzun vadeli portföyünde tutar.",
        "Satış kararı, halka arz fiyatına göre oluşan getiri, şirketin temel görünümü, işlem hacmi, piyasa koşulları ve yatırımcının risk profiliyle birlikte değerlendirilmelidir.",
        "En sağlıklı yaklaşım, halka arza katılmadan önce çıkış planı oluşturmaktır. Plan yoksa fiyat hareketleri başladığında kararlar daha duygusal hale gelebilir.",
      ],
    },
    {
      id: "ilk-islem-gunu",
      title: "İlk İşlem Gününde Satılır mı?",
      paragraphs: [
        "İlk işlem günü satış yapmak bazı yatırımcılar için hızlı kar alma stratejisidir. Özellikle halka arz yoğun ilgi görmüş ve ilk gün güçlü açılmışsa kısa vadeli yatırımcılar pozisyon kapatmayı tercih edebilir.",
        "Ancak ilk gün satış her zaman en doğru karar değildir. Bazı halka arzlar birkaç gün boyunca güçlü talep görebilir. Bazıları ise ilk gün beklenen performansı gösteremeyebilir.",
        "İlk işlem gününde karar verirken emir dengesi, hacim, tavan durumu, endeksin yönü ve yatırımcının başlangıç hedefi birlikte izlenmelidir.",
      ],
    },
    {
      id: "tavan-serisi",
      title: "Tavan Serisi Devam Ederken Satış Kararı",
      paragraphs: [
        "Halka arz hissesi tavan serisi yapıyorsa yatırımcıların önemli bölümü satış için tavanın bozulmasını bekleyebilir. Bu strateji basit görünür; fakat herkes aynı davranışı sergilerse tavan bozulduğunda satış baskısı hızlanabilir.",
        "Tavan serisi devam ederken yatırımcı oluşan getiriyi, portföydeki ağırlığı ve şirketin yeni piyasa değerini kontrol etmelidir. Hisse kısa sürede çok yükselmişse risk-getiri dengesi değişmiş olabilir.",
      ],
      cards: [
        {
          title: "Kademeli Satış",
          text: "Yatırımcı pozisyonun bir kısmını satarak karı realize edebilir, kalan kısmı için şirketin seyrini izleyebilir.",
        },
        {
          title: "Tavan Bozma Takibi",
          text: "Kısa vadeli yatırımcılar ilk güçlü tavan bozmayı çıkış sinyali olarak kullanabilir.",
        },
        {
          title: "Temel Değer Odaklı Tutma",
          text: "Şirketin büyüme potansiyeline inanan yatırımcılar kısa vadeli tavan hareketinden bağımsız karar verebilir.",
        },
      ],
    },
    {
      id: "uzun-vadeli-tutulur-mu",
      title: "Halka Arz Hissesi Uzun Vadeli Tutulur mu?",
      paragraphs: [
        "Bazı halka arzlar uzun vadeli yatırım için değerlendirilebilir. Ancak bunun için şirketin yalnızca yeni halka arz olmuş olması yeterli değildir. Finansal performans, karlılık, borçluluk, sektör büyümesi, yönetim kalitesi ve halka arz gelirinin kullanımı incelenmelidir.",
        "Uzun vadeli tutma kararı verilecekse yatırımcı izahnameyi, fiyat tespit raporunu ve halka arz sonrası açıklanan finansal sonuçları takip etmelidir. Şirketin halka arzda anlattığı büyüme planını gerçekten uygulayıp uygulamadığı önemlidir.",
      ],
    },
    {
      id: "satis-plani",
      title: "Satış Planı Nasıl Oluşturulur?",
      bullets: [
        "Halka arza kısa vadeli mi uzun vadeli mi katıldığınızı önceden belirleyin.",
        "Hedef getiri ve kabul edilebilir zarar seviyesini yazılı hale getirin.",
        "Tavan bozulursa ne yapacağınızı önceden planlayın.",
        "Pozisyon portföyde gereğinden fazla büyürse kademeli satış düşünün.",
        "Şirketin yeni fiyatıyla pahalı hale gelip gelmediğini kontrol edin.",
        "Piyasa genelinde sert düşüş varsa halka arz performansının da etkilenebileceğini unutmayın.",
      ],
    },
    {
      id: "sik-yapilan-hatalar",
      title: "Halka Arz Sonrası Sık Yapılan Hatalar",
      bullets: [
        "Sadece sosyal medya beklentisine göre satış ertelemek.",
        "Hedef getiriye ulaşıldığı halde plansız şekilde daha fazlasını beklemek.",
        "Tavan bozulduğunda panikle piyasa emri göndermek.",
        "Şirketin değerlemesini hiç kontrol etmeden uzun vadeli tutmak.",
        "Az lot geldiği için riski önemsememek.",
        "Kısa vadeli işlemle uzun vadeli yatırım kararını birbirine karıştırmak.",
      ],
    },
    {
      id: "sonuc",
      title: "Sonuç: Satış Zamanı Nasıl Belirlenmeli?",
      paragraphs: [
        "Halka arzdan sonra satış zamanı, fiyatın tek başına belirlediği bir karar değildir. Yatırımcının hedefi, şirketin kalitesi, oluşan getiri, piyasa koşulları ve risk toleransı birlikte değerlendirilmelidir.",
        "En iyi karar, halka arzdan önce oluşturulmuş planla verilen karardır. Plansız yatırımcı ise tavan serisi, panik satış ve sosyal medya beklentisi arasında sıkışabilir.",
      ],
    },
  ],
  faq: [
    {
      question: "Halka arzdan sonra hisse ne zaman satılır?",
      answer:
        "Kesin bir zaman yoktur. Kısa vadeli yatırımcı hedef getiri veya tavan bozma sinyalini izleyebilir; uzun vadeli yatırımcı şirketin temel görünümüne bakar.",
    },
    {
      question: "İlk tavan bozulunca satmak doğru mu?",
      answer:
        "Bazı stratejiler için doğru olabilir; ancak her yatırımcı için geçerli değildir. Maliyet, hedef ve şirket değeri birlikte değerlendirilmelidir.",
    },
    {
      question: "Halka arz hissesi uzun vadeli tutulur mu?",
      answer:
        "Şirketin finansalları, büyüme planı ve değerlemesi uygunsa değerlendirilebilir. Sadece halka arz olduğu için uzun vadeli tutulmamalıdır.",
    },
    {
      question: "Halka arzda kademeli satış mantıklı mı?",
      answer:
        "Kademeli satış, karın bir kısmını realize edip kalan pozisyonu takip etmek isteyen yatırımcılar için risk yönetimi aracı olabilir.",
    },
  ],
  sources: halkaArzKaynaklari,
};

export const bistIslemKoduGuide: RehberMakaleData = {
  href: "/rehberler/bist-islem-kodu-nedir",
  title: "BIST İşlem Kodu Nedir? Hisse Sembolü, Borsa Kodu ve Halka Arz Kodu",
  breadcrumb: "BIST İşlem Kodu Nedir?",
  description:
    "BIST işlem kodu nedir, hisse sembolü nasıl okunur, halka arz işlem kodu ne zaman belli olur ve yatırımcı emir girerken nelere dikkat etmelidir?",
  intro:
    "BIST işlem kodu, yatırımcıların Borsa İstanbul'da işlem gören payları aracı kurum ekranlarında tanımasını sağlayan kısa semboldür. Halka arzlarda şirket adından çok işlem kodu takip edilir.",
  sections: [
    {
      id: "bist-islem-kodu-nedir",
      title: "BIST İşlem Kodu Nedir?",
      paragraphs: [
        "BIST işlem kodu, Borsa İstanbul'da işlem gören bir menkul kıymeti tanımlayan kısa koddur. Hisse senetlerinde bu kod genellikle birkaç harften oluşur ve aracı kurum ekranlarında emir girişi bu sembol üzerinden yapılır.",
        "Yatırımcılar günlük kullanımda işlem kodu, hisse kodu, borsa kodu veya hisse sembolü ifadelerini benzer anlamda kullanır. Örneğin bir şirketin uzun ticaret unvanı yerine kısa işlem kodu üzerinden fiyat, derinlik ve emir ekranı izlenir.",
        "İşlem kodu, şirketin marka adından farklı olabilir. Bu nedenle yatırımcı emir göndermeden önce doğru kodu seçtiğinden emin olmalıdır.",
      ],
    },
    {
      id: "ne-ise-yarar",
      title: "BIST İşlem Kodu Ne İşe Yarar?",
      bullets: [
        "Aracı kurum ekranında hisseyi hızlı bulmayı sağlar.",
        "Alım-satım emri girerken doğru menkul kıymetin seçilmesine yardımcı olur.",
        "KAP açıklamalarında, haberlerde ve veri ekranlarında şirketi kısa şekilde tanımlar.",
        "Halka arz sonrası hissenin hangi sembolle işlem göreceğini gösterir.",
        "Portföy, emir, takas ve fiyat ekranlarında standart takip imkanı verir.",
      ],
    },
    {
      id: "halka-arz-kodu",
      title: "Halka Arz İşlem Kodu Ne Zaman Belli Olur?",
      paragraphs: [
        "Halka arzlarda işlem kodu genellikle şirketin borsada işlem görmeye başlamasına yakın dönemde duyurulur. SPK onayı, izahname, satış duyurusu, Borsa İstanbul açıklaması ve KAP bildirimleri bu süreçte takip edilir.",
        "Bazı yatırımcılar halka arz talebi girerken şirket adını görür; işlem kodu ise işlem görmeye başlama duyurusuyla daha görünür hale gelir. Kod açıklandıktan sonra fiyat ekranlarında ve emir giriş sistemlerinde kullanılmaya başlanır.",
        "Yatırımcı halka arz sonrası ilk işlem gününde yanlış şirket veya benzer kodla işlem yapmamak için kodu resmi duyurudan kontrol etmelidir.",
      ],
    },
    {
      id: "kod-nasil-okunur",
      title: "Hisse Kodu Nasıl Okunur?",
      paragraphs: [
        "Hisse kodları çoğu zaman şirket unvanı, marka adı veya ticari kısaltmadan türetilir. Ancak her kod doğrudan şirket adının ilk harflerinden oluşmaz. Benzer şirket adları, eski unvanlar veya borsa kodu uygunluğu farklı sembollere yol açabilir.",
        "Kodun yanında pazar, işlem sırası, fiyat adımı, lot bilgisi ve varsa tedbir bilgileri de yatırımcı ekranlarında görülebilir. Sadece koda bakmak yeterli değildir; doğru menkul kıymet olduğundan emin olmak gerekir.",
      ],
    },
    {
      id: "dikkat-edilecekler",
      title: "İşlem Kodu Kullanırken Nelere Dikkat Edilmeli?",
      bullets: [
        "Emir girmeden önce şirket unvanı ve işlem kodu birlikte kontrol edilmelidir.",
        "Benzer kodlu hisseler karıştırılmamalıdır.",
        "Halka arz sonrası ilk işlem gününde resmi işlem görmeye başlama duyurusu okunmalıdır.",
        "KAP açıklamalarında yer alan kod ile aracı kurum ekranındaki kod karşılaştırılmalıdır.",
        "Varant, fon, sertifika veya farklı pazar ürünleri hisse koduyla karıştırılmamalıdır.",
        "Kod değişikliği, unvan değişikliği veya birleşme gibi durumlarda güncel duyurular takip edilmelidir.",
      ],
    },
    {
      id: "kap-ve-islem-kodu",
      title: "KAP Açıklamalarında İşlem Kodu",
      paragraphs: [
        "KAP açıklamalarında şirketin unvanı, borsa kodu ve açıklama konusu birlikte yer alır. Yatırımcı özellikle halka arz, sermaye artırımı, temettü, özel durum açıklaması ve finansal rapor gibi duyurularda doğru şirketi takip ettiğini kontrol etmelidir.",
        "Bazı şirketlerin grup şirketleri, bağlı ortaklıkları veya benzer unvanlı farklı şirketleri olabilir. Bu nedenle KAP'ta yalnızca başlığa değil, şirket koduna ve açıklama detayına da bakmak gerekir.",
      ],
    },
    {
      id: "sonuc",
      title: "Sonuç: BIST İşlem Kodu Neden Önemli?",
      paragraphs: [
        "BIST işlem kodu küçük bir sembol gibi görünse de yatırımcı için pratikte çok önemlidir. Yanlış kodla emir girmek, yanlış şirket haberini okumak veya halka arz sonrası yanlış sembolü takip etmek yatırımcıyı hatalı karara götürebilir.",
        "Doğru yaklaşım, işlem kodunu her zaman şirket unvanı, KAP açıklaması ve aracı kurum ekranındaki bilgilerle birlikte doğrulamaktır.",
      ],
    },
  ],
  faq: [
    {
      question: "BIST işlem kodu nedir?",
      answer:
        "BIST işlem kodu, Borsa İstanbul'da işlem gören hisse veya menkul kıymeti tanımlayan kısa semboldür.",
    },
    {
      question: "Hisse kodu ile işlem kodu aynı mı?",
      answer:
        "Günlük kullanımda çoğu zaman aynı anlamda kullanılır. Hisse kodu, ilgili payın borsadaki kısa işlem sembolünü ifade eder.",
    },
    {
      question: "Halka arz işlem kodu nereden öğrenilir?",
      answer:
        "KAP duyuruları, Borsa İstanbul açıklamaları, izahname ve aracı kurum halka arz ekranlarından takip edilebilir.",
    },
    {
      question: "İşlem kodu değişir mi?",
      answer:
        "Şirket birleşmesi, unvan değişikliği veya borsa düzenlemeleri gibi durumlarda işlem kodu değişebilir. Güncel duyurular takip edilmelidir.",
    },
  ],
  sources: halkaArzKaynaklari,
};

export const izahnameGuide: RehberMakaleData = {
  href: "/rehberler/izahname-nedir",
  title: "İzahname Nedir? Halka Arz İzahnamesi Nasıl Okunur?",
  breadcrumb: "İzahname Nedir?",
  description:
    "İzahname nedir, halka arz izahnamesinde hangi bölümler okunmalı, risk faktörleri, fon kullanım planı, fiyat ve finansallar yatırımcı için ne anlatır?",
  intro:
    "İzahname, halka arzlarda yatırımcının şirketi tanıması için hazırlanmış en kapsamlı resmi dokümandır. Şirketin faaliyetleri, finansalları, riskleri, halka arz yapısı ve fon kullanım planı izahnamede yer alır.",
  sections: [
    {
      id: "izahname-nedir",
      title: "İzahname Nedir?",
      paragraphs: [
        "İzahname, sermaye piyasası aracının halka arzı veya borsada işlem görmesi sırasında yatırımcıya sunulan ayrıntılı bilgilendirme belgesidir. Halka arz edilen şirketin kim olduğu, ne iş yaptığı, nasıl para kazandığı ve hangi riskleri taşıdığı bu belgede açıklanır.",
        "Halka arz izahnamesi yatırımcı için şirketin tanıtım broşürü değil, resmi bilgi setidir. Bu nedenle yalnızca olumlu hikayeleri değil, risk faktörlerini, borçluluğu, dava süreçlerini, ilişkili taraf işlemlerini ve halka arz gelirinin nasıl kullanılacağını da içerir.",
        "Yatırımcı izahnameyi okumadan halka arza katıldığında, aslında şirketin en temel resmi bilgilerini görmeden karar vermiş olur.",
      ],
    },
    {
      id: "neden-onemlidir",
      title: "İzahname Neden Önemlidir?",
      bullets: [
        "Şirketin faaliyet konusu ve gelir modeli anlaşılır.",
        "Ortaklık yapısı ve halka arz sonrası pay oranları görülür.",
        "Halka arzın sermaye artırımı mı ortak satışı mı olduğu öğrenilir.",
        "Fon kullanım planı incelenir.",
        "Finansal tablolar, borçluluk ve karlılık verileri değerlendirilir.",
        "Risk faktörleri ve devam eden önemli süreçler okunur.",
        "Fiyat tespit raporuyla birlikte halka arz fiyatı daha sağlıklı yorumlanır.",
      ],
    },
    {
      id: "hangi-bolumler-okunmali",
      title: "İzahnamede Hangi Bölümler Okunmalı?",
      cards: [
        {
          title: "Risk Faktörleri",
          text: "Şirketin faaliyet, finansman, sektör, dava, regülasyon ve piyasa riskleri bu bölümde yer alır.",
        },
        {
          title: "Fon Kullanım Planı",
          text: "Halka arzdan şirkete girecek kaynağın yatırım, borç ödeme, işletme sermayesi veya başka alanlarda nasıl kullanılacağı açıklanır.",
        },
        {
          title: "Finansal Tablolar",
          text: "Satışlar, karlılık, borçluluk, özkaynak yapısı ve nakit akışı yatırımcı tarafından birlikte incelenmelidir.",
        },
        {
          title: "Ortaklık Yapısı",
          text: "Halka arz öncesi ve sonrası ortakların pay oranları, ortak satışı ve kilitlenme taahhütleri burada görülebilir.",
        },
        {
          title: "Halka Arz Bilgileri",
          text: "Fiyat, lot miktarı, satış yöntemi, tahsisat oranları ve dağıtım esasları yatırımcının pratik kararları için önemlidir.",
        },
      ],
    },
    {
      id: "risk-faktorleri",
      title: "Risk Faktörleri Nasıl Okunur?",
      paragraphs: [
        "İzahnamede en çok atlanan ama en önemli bölümlerden biri risk faktörleridir. Bu bölümde şirketin karşılaşabileceği operasyonel, finansal, hukuki ve sektörel riskler açıklanır.",
        "Yatırımcı bu bölümü okurken risklerin genel geçer ifadelerden mi ibaret olduğunu, yoksa şirket özelinde somut uyarılar içerip içermediğini ayırt etmelidir. Örneğin tek müşteriye bağımlılık, yüksek döviz borcu, devam eden davalar veya hammadde fiyat riski şirket için kritik olabilir.",
      ],
    },
    {
      id: "fon-kullanimi",
      title: "Fon Kullanım Planı Nasıl Yorumlanır?",
      paragraphs: [
        "Sermaye artırımı yoluyla halka arzda şirkete nakit girişi olur. Bu nakdin nasıl kullanılacağı yatırımcı için halka arzın kalitesini anlamada önemlidir.",
        "Yeni yatırım ve kapasite artışı büyüme hikayesini destekleyebilir. Borç azaltma finansman giderlerini düşürebilir. İşletme sermayesi kullanımı şirketin günlük faaliyetlerini rahatlatabilir. Ancak planın net, ölçülebilir ve şirketin ana işiyle uyumlu olması gerekir.",
      ],
    },
    {
      id: "fiyat-ve-degerleme",
      title: "İzahname Fiyatı Ucuz mu Pahalı mı Gösterir?",
      paragraphs: [
        "İzahname tek başına fiyatın ucuz veya pahalı olduğunu söylemez. Fiyat değerlendirmesi için fiyat tespit raporu, benzer şirket çarpanları, şirketin büyüme hızı, karlılığı ve borçluluğu birlikte incelenmelidir.",
        "Yatırımcı halka arz fiyatını sadece lot fiyatı üzerinden yorumlamamalıdır. 20 TL'lik bir hisse pahalı, 200 TL'lik bir hisse ucuz olabilir. Önemli olan şirketin toplam piyasa değeri ve bu değerin finansallarla uyumudur.",
      ],
    },
    {
      id: "sik-yapilan-hatalar",
      title: "İzahname Okurken Sık Yapılan Hatalar",
      bullets: [
        "Sadece halka arz fiyatına ve lot sayısına bakmak.",
        "Risk faktörleri bölümünü okumamak.",
        "Ortak satışı ile sermaye artırımını aynı görmek.",
        "Fon kullanım planının şirkete değer yaratıp yaratmayacağını sorgulamamak.",
        "Finansal tablolarda yalnızca net kara bakmak.",
        "Fiyat tespit raporundaki varsayımları incelememek.",
        "Sosyal medya özetlerini resmi belgenin yerine koymak.",
      ],
    },
    {
      id: "sonuc",
      title: "Sonuç: İzahname Nasıl Okunmalı?",
      paragraphs: [
        "İzahname, halka arz yatırımcısının ana bilgi kaynağıdır. Bu belgeyi okuyan yatırımcı şirketin ne yaptığını, ne kadar risk taşıdığını, halka arz gelirini nasıl kullanacağını ve fiyatın hangi çerçevede değerlendirilmesi gerektiğini daha iyi anlar.",
        "Doğru yaklaşım, izahnameyi fiyat tespit raporu, satış duyurusu, finansal tablolar ve KAP açıklamalarıyla birlikte okumaktır.",
      ],
    },
  ],
  faq: [
    {
      question: "İzahname nedir?",
      answer:
        "İzahname, halka arz veya sermaye piyasası aracı ihracı sırasında yatırımcıya sunulan ayrıntılı resmi bilgilendirme belgesidir.",
    },
    {
      question: "Halka arz izahnamesi nereden okunur?",
      answer:
        "KAP, SPK duyuruları, şirketin yatırımcı ilişkileri sayfası ve aracı kurum halka arz dokümanları üzerinden takip edilebilir.",
    },
    {
      question: "İzahnamede en önemli bölüm hangisi?",
      answer:
        "Risk faktörleri, fon kullanım planı, finansal tablolar, ortaklık yapısı ve halka arz bilgileri yatırımcı açısından en kritik bölümlerdir.",
    },
    {
      question: "İzahname yatırım tavsiyesi midir?",
      answer:
        "Hayır. İzahname resmi bilgilendirme dokümanıdır. Yatırım kararı yatırımcının kendi analizine ve risk tercihine göre verilmelidir.",
    },
  ],
  sources: halkaArzKaynaklari,
};
