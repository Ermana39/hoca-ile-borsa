import type { RehberMakaleData } from "../_components/RehberMakale";

const kaynaklar = {
  bistSaatleri: {
    title: "Borsa İstanbul İşlem Saatleri",
    href: "https://borsaistanbul.com/piyasalar/pay-piyasasi/islem-saatleri",
    text: "Pay piyasasında seans bölümleri, yarım gün saatleri ve işlem saatlerine ilişkin güncel resmi kaynak.",
  },
  bistPay: {
    title: "Borsa İstanbul Pay Piyasası",
    href: "https://borsaistanbul.com/piyasalar/pay-piyasasi",
    text: "Pay piyasası işleyişi, pazar yapısı, fiyat oluşumu ve işlem yöntemleri için resmi Borsa İstanbul sayfası.",
  },
  bistTakas: {
    title: "Borsa İstanbul Takas Esasları",
    href: "https://www.borsaistanbul.com/piyasalar/pay-piyasasi/takas-esaslari",
    text: "Pay piyasasında nakit ve kıymet takasının T+2 esasına göre yürütüldüğünü açıklayan resmi kaynak.",
  },
  bistPaySss: {
    title: "Borsa İstanbul Pay Piyasası SSS",
    href: "https://www.borsaistanbul.com/sss/pay-piyasasi",
    text: "Fiyat-zaman önceliği, sürekli işlem, tek fiyat, brüt takas ve emir sınırlamaları gibi temel işlem kuralları.",
  },
  bistSatisYontemleri: {
    title: "Borsa İstanbul Satış Yöntemleri",
    href: "https://www.borsaistanbul.com/sirketler/halka-arz-ve-borsada-islem-gorme/satis-yontemleri",
    text: "Halka arzlarda talep toplama, borsada satış, dağıtım ve satış süresi gibi başlıklar için resmi Borsa İstanbul kaynağı.",
  },
  bistEndeks: {
    title: "Borsa İstanbul Endeksler",
    href: "https://borsaistanbul.com/endeksler/bist-pay",
    text: "BIST pay endeksleri, endeks kapsamları ve dönemsel değişikliklerin takip edilebildiği resmi kaynak.",
  },
  kap: {
    title: "Kamuyu Aydınlatma Platformu",
    href: "https://www.kap.org.tr/tr/",
    text: "Şirket açıklamaları, finansal raporlar, pay işlemleri ve özel durum duyuruları için resmi platform.",
  },
  spk: {
    title: "Sermaye Piyasası Kurulu",
    href: "https://www.spk.gov.tr/",
    text: "Sermaye piyasası mevzuatı, yatırım fonları, halka arz ve yatırımcı bilgilendirme dokümanları için resmi kaynak.",
  },
  tefas: {
    title: "TEFAS",
    href: "https://www.tefas.gov.tr/",
    text: "Yatırım fonlarının fiyat, getiri, portföy ve karşılaştırma verilerinin izlenebildiği resmi platform.",
  },
  mkk: {
    title: "Merkezi Kayıt Kuruluşu",
    href: "https://www.mkk.com.tr/",
    text: "Kaydi saklama, yatırımcı bilgileri, hak kullanımları ve sermaye piyasası kayıt süreçleri için resmi kaynak.",
  },
  isbankHisse: {
    title: "İş Bankası Hisse Senedi Bilgilendirmesi",
    href: "https://www.isbank.com.tr/hisse-senedi",
    text: "Hisse senedi alış ve satış bedellerinin işlemden sonraki ikinci iş günü yatırım hesabına geçtiğini anlatan banka bilgilendirmesi.",
  },
  yapiKrediHalkaArz: {
    title: "Yapı Kredi Halka Arz Bilgilendirmesi",
    href: "https://www.yapikredi.com.tr/bireysel-bankacilik/yatirim-urunleri/hisse-senetleri/hisse-senedi-halka-arz",
    text: "Halka arz sonuçları, karşılanmayan talep tutarının iadesi ve borsadan satış yöntemiyle katılım konularını açıklayan kaynak.",
  },
  garantiYatirimHalkaArz: {
    title: "Garanti BBVA Yatırım Sıkça Sorulan Sorular",
    href: "https://www.garantibbvayatirim.com.tr/iletisim/sikca-sorulan-sorular",
    text: "Halka arz sonrası kalan bakiye iadesi ve borsadan satış yönteminde T+2 uygulaması hakkında yatırımcı bilgilendirmesi.",
  },
  spkUsulsuzHalkaArz: {
    title: "SPK Usulsüz Halka Arzlar",
    href: "https://spk.gov.tr/yatirimcilar/usulsuz-halka-arzlar",
    text: "İzahname onayı, yetkili süreçler ve usulsüz halka arzların yatırımcı açısından sonuçları hakkında resmi SPK açıklaması.",
  },
} as const;

type KaynakKey = keyof typeof kaynaklar;

type EkRehberSpec = {
  slug: string;
  title: string;
  breadcrumb: string;
  description: string;
  category: string;
  intro: string;
  definition: string;
  whyMatters: string;
  howToRead: string[];
  watch: string[];
  example: string;
  checkSource: string;
  commonMistake: string;
  sourceKeys: KaynakKey[];
};

function buildRehber(spec: EkRehberSpec): RehberMakaleData {
  return {
    href: `/rehberler/${spec.slug}`,
    title: spec.title,
    breadcrumb: spec.breadcrumb,
    description: spec.description,
    intro: spec.intro,
    sections: [
      {
        id: "kisa-cevap",
        title: `${spec.breadcrumb}: Kısa Cevap`,
        paragraphs: [spec.definition, spec.whyMatters],
      },
      {
        id: "nasil-yorumlanir",
        title: "Nasıl Yorumlanır?",
        cards: spec.howToRead.map((text, index) => ({
          title: ["Temel Mantık", "Piyasa Etkisi", "Kontrol Noktası"][index] ?? "Not",
          text,
        })),
        orderedCards: true,
      },
      {
        id: "dikkat-edilecekler",
        title: "Yatırımcı Nelere Dikkat Etmeli?",
        bullets: spec.watch,
        note: spec.example,
      },
      {
        id: "nereden-kontrol-edilir",
        title: "Bilgi Nereden Kontrol Edilir?",
        paragraphs: [
          spec.checkSource,
          "Aracı kurum ekranındaki anlık bilgi ile resmi kaynaklarda yayımlanan duyuru birlikte okunmalıdır. Özellikle tarih, oran, seans saati, hak kullanım günü ve fon valörü gibi bilgilerde eski ekran görüntüleriyle işlem yapılmamalıdır.",
        ],
      },
      {
        id: "yanlis-bilinenler",
        title: "En Sık Yapılan Hata",
        paragraphs: [spec.commonMistake],
      },
    ],
    faq: [
      {
        question: `${spec.breadcrumb} neden önemlidir?`,
        answer: spec.whyMatters,
      },
      {
        question: `${spec.breadcrumb} nereden kontrol edilir?`,
        answer: spec.checkSource,
      },
      {
        question: "Bu bilgi yatırım kararı için tek başına yeterli mi?",
        answer:
          "Hayır. Rehberdeki kavram karar sürecinin yalnızca bir parçasıdır. Şirketin finansalları, haber akışı, piyasa koşulları, likidite ve kişisel risk tercihi birlikte değerlendirilmelidir.",
      },
      {
        question: "Yeni yatırımcılar bu konuda en çok neye dikkat etmeli?",
        answer: spec.commonMistake,
      },
    ],
    sources: spec.sourceKeys.map((key) => kaynaklar[key]),
  };
}

const specs: EkRehberSpec[] = [
  {
    slug: "hisse-sattim-para-ne-zaman-hesabima-gecer",
    title: "Hisse Sattım, Para Ne Zaman Hesabıma Geçer?",
    breadcrumb: "Hisse Satışı Para Ne Zaman Geçer",
    description:
      "Hisse sattıktan sonra para ne zaman hesaba geçer, T+1 ve T+2 ne demek, para ne zaman çekilebilir ve bankaya aktarılabilir?",
    category: "Borsa İşlemleri",
    intro:
      "Hisse satan yatırımcıların en çok karıştırdığı nokta, satış tutarının ekranda görünmesi ile paranın çekilebilir hale gelmesinin aynı şey olmamasıdır.",
    definition:
      "Borsa İstanbul pay piyasasında hisse satışının nakit takası T+2 esasına göre işler. Yani satıştan doğan tutar, işlem gününü izleyen ikinci iş gününde takas tamamlanınca çekilebilir hale gelir.",
    whyMatters:
      "Bu ayrımı bilmek nakit planı için önemlidir. Satıştan gelen para aracı kurum ekranında T+1 veya bekleyen takas olarak görünebilir; fakat banka hesabına aktarma genellikle T+2 takas tamamlandıktan sonra yapılabilir.",
    howToRead: [
      "T günü, satış emrinin borsada gerçekleştiği gündür. Para aynı gün kesinleşmiş nakit gibi bankaya çekilemez.",
      "T+1, işlemden sonraki ilk iş günüdür. Birçok aracı kurum bu bakiyeyi yeni hisse alımında kullandırabilir; çekilebilir bakiye olmayabilir.",
      "T+2, işlemden sonraki ikinci iş günüdür. Takas tamamlanınca satış tutarı çekilebilir hale gelir; hafta sonu ve resmi tatiller iş günü sayılmaz.",
    ],
    watch: [
      "Cuma günü yapılan satışta T+2 çoğu durumda salı gününe denk gelir; araya resmi tatil girerse tarih uzar.",
      "Aynı gün başka alış-satış yaptıysanız aracı kurum netleştirme yapabilir.",
      "Brüt takas veya özel işlem kuralları varsa bakiye kullanımı normalden farklı olabilir.",
      "Banka transfer saati, EFT/FAST limiti ve aracı kurum operasyon saati ayrıca kontrol edilmelidir.",
    ],
    example:
      "Pazartesi günü hisse sattıysanız salı T+1, çarşamba T+2 olur. Resmi tatil yoksa para çarşamba günü çekilebilir bakiye tarafına geçer.",
    checkSource:
      "Takas tarihi için Borsa İstanbul takas esasları, aracı kurum ekranındaki çekilebilir bakiye ve yatırım hesabı hareketleri birlikte kontrol edilmelidir.",
    commonMistake:
      "En sık hata, satış tutarı portföy ekranında görünür görünmez paranın bankaya aktarılabileceğini düşünmektir. Görünen bakiye ile çekilebilir bakiye farklı olabilir.",
    sourceKeys: ["bistTakas", "isbankHisse", "mkk"],
  },
  {
    slug: "halka-arz-hissesi-ilk-gun-satilir-mi",
    title: "Halka Arz Hissesi İlk Gün Satılır mı?",
    breadcrumb: "Halka Arz İlk Gün Satılır mı",
    description:
      "Halka arz hissesi ilk işlem gününde satılır mı, tavan açarsa satış gerçekleşir mi, ilk gün satmanın avantajları ve riskleri nelerdir?",
    category: "Halka Arz",
    intro:
      "Halka arz hissesi ilk işlem gününde satılabilir; asıl soru bunun yatırımcının planına, hissenin işlem durumuna ve piyasa koşullarına uyup uymadığıdır.",
    definition:
      "Halka arz payları yatırım hesabına geçip Borsa İstanbul'da işlem görmeye başladıktan sonra teknik olarak satılabilir. Ancak hissenin tavanda, tabanda veya dalgalı işlem görmesi satışın fiyatını ve gerçekleşme hızını etkiler.",
    whyMatters:
      "İlk gün fiyat hareketi çoğu halka arzda sert olabilir. Erken satış hızlı kar alma sağlayabilir; fakat güçlü talep devam ederse yatırımcı daha sonraki yükselişi kaçırabilir.",
    howToRead: [
      "Hisse tavandaysa satış emri genellikle alıcı beklediği için daha kolay gerçekleşebilir; fakat sattıktan sonra yeniden almak zorlaşabilir.",
      "Hisse tavan açmaz veya hızla tavan bozarsa ilk gün satış kararı daha çok hacim, emir dengesi ve zarar kes planıyla ilgilidir.",
      "İlk gün kararında halka arz fiyatına göre getiri, portföy büyüklüğü ve şirketin temel görünümü birlikte okunmalıdır.",
    ],
    watch: [
      "Sadece ilk gün tavan beklentisiyle plansız işlem yapılmamalıdır.",
      "Satış sonrası T+2 takas süreci nakdin bankaya geçişini etkiler.",
      "İlk gün yüksek hacim her zaman kalıcı alım iştahı anlamına gelmez.",
      "Az lot geldiği için riskin önemsiz olduğu düşünülmemelidir.",
      "Şirketin izahnamesi ve fiyat tespit raporu satış kararından bağımsız olarak okunmalıdır.",
    ],
    example:
      "10 TL halka arz fiyatıyla gelen hisse ilk gün 11 TL tavana oturursa yatırımcı karla satabilir. Ancak ertesi gün tavan devam ederse satılan pozisyonu aynı fiyattan yerine koymak mümkün olmayabilir.",
    checkSource:
      "İlk işlem günü, işlem kodu ve pazar bilgisi KAP ve Borsa İstanbul duyurularından; anlık emir dengesi ise aracı kurum ekranından kontrol edilmelidir.",
    commonMistake:
      "En sık hata, ilk gün satmayı herkese uygun tek doğru strateji gibi görmektir. Kısa vadeli kar alma ile uzun vadeli yatırım aynı plan değildir.",
    sourceKeys: ["bistPay", "bistPaySss", "kap"],
  },
  {
    slug: "halka-arz-tavan-bozunca-satilir-mi",
    title: "Halka Arz Tavan Bozunca Satılır mı?",
    breadcrumb: "Halka Arz Tavan Bozunca Satılır mı",
    description:
      "Halka arz tavan bozunca satmak gerekir mi, tavan bozma ne anlama gelir, satış kararı verirken hangi verilere bakılmalıdır?",
    category: "Halka Arz",
    intro:
      "Tavan bozma, halka arz yatırımcılarının en çok izlediği kısa vadeli sinyallerden biridir. Fakat tek başına otomatik satış kuralı değildir.",
    definition:
      "Halka arz hissesi tavan bozunca, tavan fiyatta bekleyen alış emirlerinin satışları tamamen karşılayamadığı veya alış emirlerinin geri çekildiği anlaşılır. Bu durum talebin zayıfladığını gösterebilir.",
    whyMatters:
      "Tavan bozulması kar satışlarının başladığına, alıcı iştahının azaldığına veya sadece gün içi geçici dalgalanmaya işaret edebilir. Doğru yorum için işlem hacmi ve kapanış davranışı birlikte izlenmelidir.",
    howToRead: [
      "Tavan kısa süre bozulup tekrar güçlü alışla tavana dönüyorsa talep tamamen bitmiş sayılmaz.",
      "Tavan bozulduktan sonra hacim artıyor ve fiyat tavanın altında kalıyorsa satış baskısı güçleniyor olabilir.",
      "Halka arz fiyatına göre oluşan getiri çok yükseldiyse tavan bozma sonrası risk-getiri dengesi değişmiş olabilir.",
    ],
    watch: [
      "Panikle piyasa emri göndermek beklenenden düşük fiyattan satışa yol açabilir.",
      "Tavan bozma her zaman seri bitti demek değildir; kapanış ve sonraki seans önemlidir.",
      "Bekleyen alış lotu, işlem hacmi ve fiyatın gün içi toparlanması birlikte izlenmelidir.",
      "Kısa vadeli işlem planı yoksa karar duygusal hale gelebilir.",
      "Genel endeks düşüşü halka arz tavanını da bozabilir.",
    ],
    example:
      "Hisse üç gün tavan gittikten sonra dördüncü gün tavanı bozup yüksek hacimle tavan altında kapanıyorsa kısa vadeli yatırımcı için risk artar. Aynı gün tekrar tavana dönmesi ise farklı okunabilir.",
    checkSource:
      "Tavan hareketi aracı kurum derinlik ve işlem hacmi ekranından; önemli şirket haberleri ise KAP açıklamalarından kontrol edilmelidir.",
    commonMistake:
      "En sık hata, tavan bozulduğu an bunun kesin düşüş başlangıcı olduğunu sanmaktır. Bazen geçici kar satışı olur, bazen de seri gerçekten zayıflar.",
    sourceKeys: ["bistPay", "bistPaySss", "kap"],
  },
  {
    slug: "tavanda-bekleyen-lot-azalirsa-ne-olur",
    title: "Tavanda Bekleyen Lot Azalırsa Ne Olur?",
    breadcrumb: "Tavanda Bekleyen Lot Azalırsa",
    description:
      "Tavanda bekleyen lot azalırsa ne anlama gelir, tavan bozma riski nasıl okunur, bekleyen alış lotu yatırımcıya ne söyler?",
    category: "Borsa İşlemleri",
    intro:
      "Tavanda bekleyen lot, yatırımcıların yoğun baktığı bir göstergedir. Ancak bu sayı canlı emir dengesini gösterir; kalıcı talep garantisi değildir.",
    definition:
      "Tavanda bekleyen lot azalırsa, tavan fiyattaki alış emirlerinin bir kısmı iptal edilmiş veya gelen satışlarla karşılanmış olabilir. Bu da tavanın zayıflama ihtimalini artırabilir.",
    whyMatters:
      "Bekleyen lotun azalması özellikle halka arz ve sert yükselen hisselerde önemlidir. Çünkü tavanın korunması, tavan fiyatında yeterli alıcının kalmasına bağlıdır.",
    howToRead: [
      "Azalma satış gelmesinden kaynaklanıyorsa işlem hacmi yükselir; emir iptalinden kaynaklanıyorsa hacim aynı ölçüde artmayabilir.",
      "Bekleyen lot azalırken fiyat hâlâ tavandaysa tavan korunuyor olabilir; ancak tampon güç zayıflamıştır.",
      "Azalma hızlanıyor, işlem hacmi artıyor ve alış tarafı yenilenmiyorsa tavan bozma riski yükselir.",
    ],
    watch: [
      "Bekleyen lot tek başına alım veya satım kararı değildir.",
      "Emirler gün içinde iptal edilebilir; sabah görünen yüksek sıra kapanışa kadar kalmayabilir.",
      "Hacim, fiyatın tavan altında kalma süresi ve kapanış birlikte izlenmelidir.",
      "Düşük fiili dolaşımlı hisselerde lot görüntüsü daha hızlı değişebilir.",
      "Sosyal medyada paylaşılan eski ekran görüntüleriyle karar verilmemelidir.",
    ],
    example:
      "Tavanda 20 milyon lot beklerken bu sayı kısa sürede 3 milyona düşüyor ve aynı anda yüksek hacim oluşuyorsa satışların alışları tükettiği düşünülebilir. Fakat emir iptali de aynı görüntüyü yaratabilir.",
    checkSource:
      "Bekleyen lot ve derinlik bilgisi aracı kurum ekranından; tavan-taban fiyat limitleri ve emir önceliği Borsa İstanbul kaynaklarından kontrol edilmelidir.",
    commonMistake:
      "En sık hata, bekleyen lot azaldığı anda kesin satış yapılması gerektiğini düşünmektir. Önemli olan azalmanın nedeni, hızı ve fiyat davranışıdır.",
    sourceKeys: ["bistPay", "bistPaySss"],
  },
  {
    slug: "halka-arzda-dagitilacak-lot-nasil-hesaplanir",
    title: "Halka Arzda Dağıtılacak Lot Nasıl Hesaplanır?",
    breadcrumb: "Halka Arz Dağıtılacak Lot Hesabı",
    description:
      "Halka arzda dağıtılacak lot nasıl hesaplanır, bireysel tahsisat, katılımcı sayısı, eşit dağıtım ve oransal dağıtım formülleri nelerdir?",
    category: "Halka Arz",
    intro:
      "Halka arzda dağıtılacak lot hesabı, yatırımcının yaklaşık kaç lot alabileceğini görmek için yapılan pratik bir tahmindir. Kesin sonuç ise dağıtım açıklanınca belli olur.",
    definition:
      "Dağıtılacak lot hesabında önce yatırımcı grubuna ayrılan pay miktarı bulunur. Eşit dağıtımda bu miktar geçerli talep giren yatırımcı sayısına bölünür; oransal dağıtımda ise talep tutarı ve karşılanma oranı belirleyici olur.",
    whyMatters:
      "Bu hesap, halka arza ne kadar nakit ayıracağını ve dağıtım sonrası portföyde ne büyüklükte pozisyon oluşacağını planlamak isteyen yatırımcı için faydalıdır.",
    howToRead: [
      "Eşit dağıtım tahmini: bireysel yatırımcıya ayrılan lot / beklenen katılımcı sayısı.",
      "Oransal dağıtım tahmini: talep edilen tutar x ilgili yatırımcı grubunun karşılanma oranı.",
      "Karma dağıtımda her yatırımcı grubu ayrı hesaplanır; bireysel, yüksek başvuru ve kurumsal tahsisatlar karıştırılmamalıdır.",
    ],
    watch: [
      "Toplam lot yerine yalnızca bireysel yatırımcıya ayrılan lot kullanılmalıdır.",
      "Katılımcı sayısı talep toplama bitmeden kesin bilinmez.",
      "Birden fazla yatırımcı grubu varsa her grubun dağıtım kuralı farklı olabilir.",
      "Ek satış ve tahsisat kaydırması nihai sonucu değiştirebilir.",
      "Arz fiyatı düşük diye daha çok değer oluşacağı varsayılmamalıdır.",
    ],
    example:
      "100 milyon lotluk halka arzın yüzde 70'i bireysel yatırımcıya ayrılmışsa bireysel havuz 70 milyon lot olur. 1 milyon geçerli yatırımcı varsa kabaca kişi başı 70 lot tahmin edilir.",
    checkSource:
      "Toplam lot, tahsisat oranı ve dağıtım yöntemi izahname, satış duyurusu, KAP açıklaması ve aracı kurum halka arz ekranından kontrol edilmelidir.",
    commonMistake:
      "En sık hata, halka arz edilen toplam lotu doğrudan tüm yatırımcı sayısına bölmektir. Bireysel yatırımcıya ayrılan tahsisat ayrı hesaplanmalıdır.",
    sourceKeys: ["bistSatisYontemleri", "kap", "spk", "yapiKrediHalkaArz"],
  },
  {
    slug: "halka-arzda-fazla-para-yatirmak-fazla-lot-verir-mi",
    title: "Halka Arzda Fazla Para Yatırmak Fazla Lot Verir mi?",
    breadcrumb: "Halka Arzda Fazla Para",
    description:
      "Halka arzda fazla para yatırmak fazla lot getirir mi, eşit dağıtım ve oransal dağıtımda fazla talep nasıl sonuçlanır?",
    category: "Halka Arz",
    intro:
      "Halka arzda fazla para yatırmanın etkisi dağıtım yöntemine göre değişir. Eşit dağıtım, oransal dağıtım ve borsadan satış aynı mantıkla çalışmaz.",
    definition:
      "Eşit dağıtımda fazla para yatırmak çoğu zaman belirli bir noktadan sonra daha fazla lot getirmez; çünkü dağıtım kişi bazlı dengelenir. Oransal dağıtımda ise daha yüksek talep daha fazla lot alma ihtimalini artırabilir.",
    whyMatters:
      "Yatırımcı dağıtım yöntemini bilmeden fazla nakit bloke ederse, gereksiz para bağlayabilir veya beklediği lotu alamayınca yanlış sonuç çıkarabilir.",
    howToRead: [
      "Eşit dağıtımda asıl belirleyici geçerli yatırımcı sayısı ve bireysel havuzdur; çok yüksek talep girmenin etkisi sınırlı olabilir.",
      "Oransal dağıtımda talep büyüklüğü önemlidir; fakat talep çarpanı yüksekse karşılanma oranı düşük kalabilir.",
      "Borsadan satış yönteminde fiyat-zaman önceliği ve emir kuralları ayrıca önem kazanır.",
    ],
    watch: [
      "Dağıtım yöntemi satış duyurusundan okunmadan talep tutarı belirlenmemelidir.",
      "Karşılanmayan tutar iade edilir; ancak iade zamanı yönteme ve aracı kuruma göre değişebilir.",
      "Aynı halka arza birden fazla kurumdan talep girmenin sonucu mükerrer talep kurallarına bağlıdır.",
      "Fazla para yatırmak halka arz sonrası getiri garantisi sağlamaz.",
      "Nakit ihtiyacı olan para gereksiz yere bloke edilmemelidir.",
    ],
    example:
      "Eşit dağıtımda kişi başı 30 lot düşmesi beklenen bir halka arzda 300 lotluk talep girmek, her zaman 300 lot alma anlamına gelmez. Oransal dağıtımda ise 300 lot talep daha yüksek pay alma ihtimali yaratabilir.",
    checkSource:
      "Dağıtım yöntemi, mükerrer talep kuralı, bloke ve iade esasları KAP duyurusu, izahname ve aracı kurum halka arz bilgilendirmesinden kontrol edilmelidir.",
    commonMistake:
      "En sık hata, her halka arzda fazla para yatırmanın otomatik olarak fazla lot getireceğini sanmaktır. Cevap dağıtım yöntemine göre değişir.",
    sourceKeys: ["bistSatisYontemleri", "yapiKrediHalkaArz", "garantiYatirimHalkaArz"],
  },
  {
    slug: "t1-bakiye-ile-hisse-alinir-mi",
    title: "T+1 Bakiye ile Hisse Alınır mı?",
    breadcrumb: "T+1 Bakiye ile Hisse Alınır mı",
    description:
      "T+1 bakiye ile hisse alınır mı, T+1 bakiye çekilebilir mi, T+2 takas ve aracı kurum kuralları yatırımcıyı nasıl etkiler?",
    category: "Borsa İşlemleri",
    intro:
      "T+1 bakiye, hisse satışından sonra ekranda görülen ama henüz T+2 takası tamamlanmamış bakiyeyi ifade eder. Kullanımı yatırımcıların en çok sorduğu konulardan biridir.",
    definition:
      "Birçok aracı kurumda T+1 bakiye ile yeniden hisse alımı yapılabilir; ancak bu bakiye genellikle bankaya çekilebilir nakit değildir. Çekilebilir hale gelmesi için T+2 takasının tamamlanması beklenir.",
    whyMatters:
      "T+1 bakiyenin nerede kullanılabileceğini bilmek, aynı hafta içinde yeni işlem yapmak isteyen yatırımcı için önemlidir. Yanlış bakiye yorumu, nakit planında aksama yaratabilir.",
    howToRead: [
      "T+1, satıştan sonraki ilk iş gününü gösterir; para henüz nihai takasta olmayabilir.",
      "Hisse alımında kullanılabilir görünen tutar ile bankaya aktarılabilir tutar ayrı satırlarda izlenmelidir.",
      "Brüt takas, kredili işlem kısıtı, halka arz talebi veya kurum politikası T+1 kullanımını sınırlayabilir.",
    ],
    watch: [
      "T+1 bakiye çekilebilir bakiye sanılmamalıdır.",
      "T+1 ile alınan hissenin takası yeni işlem takvimiyle ayrıca netleşir.",
      "Her aracı kurumun ekran adı ve kullanım kuralı farklı olabilir.",
      "Resmi tatiller T+1 ve T+2 günlerini ileri atar.",
      "Brüt takastaki hisselerde bakiye kullanımı normal hisselerden farklılaşabilir.",
    ],
    example:
      "Pazartesi hisse sattıysanız salı T+1 bakiyeniz bazı kurumlarda yeni hisse alımı için kullanılabilir; fakat parayı bankaya çekmek için çarşamba T+2 beklenir.",
    checkSource:
      "Bakiye türleri aracı kurum hesap ekranından; takas günü Borsa İstanbul takas esaslarından; işlem kısıtları ise Borsa İstanbul ve KAP duyurularından kontrol edilmelidir.",
    commonMistake:
      "En sık hata, T+1 bakiyeyi tamamen serbest nakit gibi düşünmektir. Hisse alımında kullanılabilir görünmesi, bankaya çekilebilir olduğu anlamına gelmez.",
    sourceKeys: ["bistTakas", "isbankHisse", "bistPaySss"],
  },
  {
    slug: "t2-bakiye-bankaya-ne-zaman-gecer",
    title: "T+2 Bakiye Bankaya Ne Zaman Geçer?",
    breadcrumb: "T+2 Bakiye Bankaya Ne Zaman Geçer",
    description:
      "T+2 bakiye bankaya ne zaman geçer, satıştan gelen para ne zaman çekilir, hafta sonu ve resmi tatil takası nasıl etkiler?",
    category: "Borsa İşlemleri",
    intro:
      "T+2 bakiye, hisse satışından doğan paranın takas tamamlandıktan sonra çekilebilir hale gelmesini anlatır. Bankaya geçiş saati aracı kurum ve transfer kanalına göre değişebilir.",
    definition:
      "Hisse satışından gelen para, işlem gününü izleyen ikinci iş gününde T+2 takası tamamlanınca çekilebilir bakiyeye dönüşür. Bu aşamadan sonra yatırım hesabından banka hesabına aktarım yapılabilir.",
    whyMatters:
      "Ödeme, kredi, virman veya yeni nakit ihtiyacı planlayan yatırımcı için T+2 tarihini doğru hesaplamak gerekir. Hafta sonu ve resmi tatiller iki takvim günü değil, iki iş günü kuralını önemli hale getirir.",
    howToRead: [
      "Pazartesi satışta T+2 çoğu durumda çarşamba; cuma satışta T+2 çoğu durumda salıdır.",
      "T+2 geldiğinde para yatırım hesabında çekilebilir olabilir; banka hesabına geçiş EFT/FAST ve kurum saatlerine göre değişebilir.",
      "Aynı hesapta başka alış-satışlar varsa kurum netleştirme yapabilir ve çekilebilir tutar beklenenden farklı görünebilir.",
    ],
    watch: [
      "Resmi tatil ve yarım günlerde takas takvimi değişebilir.",
      "Banka hesabına aktarım için aracı kurumun para çekme saatleri kontrol edilmelidir.",
      "T+2 bakiyesi yatırım hesabına geçer; bankaya otomatik geçmeyebilir.",
      "Halka arz iadesi ile hisse satış takası aynı süreç değildir.",
      "Borç, komisyon veya mahsuplaşma çekilebilir tutarı azaltabilir.",
    ],
    example:
      "Perşembe hisse sattıysanız cuma T+1, pazartesi T+2 olur. Pazartesi resmi tatilse T+2 salıya kayabilir.",
    checkSource:
      "Takas tarihi Borsa İstanbul takas esaslarından, para çekme ve banka aktarım zamanı ise yatırım hesabınızın bağlı olduğu aracı kurumdan kontrol edilmelidir.",
    commonMistake:
      "En sık hata, T+2 bakiyenin bankaya otomatik geçtiğini sanmaktır. Çoğu durumda para önce yatırım hesabında çekilebilir olur, sonra yatırımcı transfer talimatı verir.",
    sourceKeys: ["bistTakas", "isbankHisse", "garantiYatirimHalkaArz"],
  },
  {
    slug: "halka-arz-iptal-edilirse-para-ne-zaman-geri-gelir",
    title: "Halka Arz İptal Edilirse Para Ne Zaman Geri Gelir?",
    breadcrumb: "Halka Arz İptalinde Para İadesi",
    description:
      "Halka arz iptal edilirse para ne zaman geri gelir, bloke ne zaman kalkar, karşılanmayan talep ve iptal iadesi nasıl takip edilir?",
    category: "Halka Arz",
    intro:
      "Halka arzda para iadesi, iptal nedeni ve satış yöntemine göre değişebilir. Normal halka arz iptali ile usulsüz para toplama süreçleri aynı şey değildir.",
    definition:
      "Yetkili kurumlar üzerinden yapılan bir halka arz iptal edilirse veya talebin bir kısmı karşılanmazsa, bloke edilen ya da tahsil edilen tutarın ilgili aracı kurum hesabına iade edilmesi beklenir. Süre halka arzın yöntemi ve duyurudaki operasyona göre değişir.",
    whyMatters:
      "Yatırımcı açısından önemli olan paranın nerede beklediği, ne zaman serbest kalacağı ve bu sürede başka işlem için kullanılıp kullanılamayacağıdır.",
    howToRead: [
      "Talep toplama yöntemiyle yapılan halka arzlarda karşılanmayan tutar dağıtım sonuçları ve operasyon tamamlandıkça hesaba iade edilir.",
      "Borsadan satış yönteminde para çoğu zaman bloke edilir; dağıtım kadar tutar kullanılır, kalan blokenin kaldırılması beklenir.",
      "Halka arz tamamen iptal edilirse aracı kurum, KAP veya şirket duyurusunda belirtilen takvime göre iade sürecini işletir.",
    ],
    watch: [
      "KAP açıklaması ve aracı kurum duyurusu okunmadan kesin iade günü varsayılmamalıdır.",
      "Nakit iadesi ile varlık blokajının kaldırılması farklı ekranlarda görünebilir.",
      "Banka hesabına aktarım için ayrıca para çekme talimatı gerekebilir.",
      "Usulsüz halka arz iddialarında iade süreci normal halka arz operasyonundan çok daha farklı ve hukuki olabilir.",
      "Birden fazla kurumdan talep girildiyse mükerrer talep kuralları iade tutarını etkileyebilir.",
    ],
    example:
      "Talep toplama sonrası size 20 lot düştüyse, 100 lot için yatırdığınız paranın kullanılmayan kısmı dağıtım operasyonu tamamlandıktan sonra yatırım hesabınıza iade edilir. İptalde ise duyuruda belirtilen iade takvimi takip edilir.",
    checkSource:
      "İptal, dağıtım ve iade duyuruları KAP, aracı kurum halka arz sayfası ve şirket duyurularından kontrol edilmelidir. Usulsüz halka arzlarda SPK duyuruları ayrıca izlenmelidir.",
    commonMistake:
      "En sık hata, her iadenin aynı gün ve aynı yöntemle geleceğini düşünmektir. Halka arzın talep toplama mı borsadan satış mı olduğu iade sürecini değiştirir.",
    sourceKeys: [
      "bistSatisYontemleri",
      "yapiKrediHalkaArz",
      "garantiYatirimHalkaArz",
      "spkUsulsuzHalkaArz",
    ],
  },
  {
    slug: "halka-arzda-esit-dagitim-nasil-hesaplanir",
    title: "Halka Arzda Eşit Dağıtım Nasıl Hesaplanır?",
    breadcrumb: "Halka Arz Eşit Dağıtım Hesabı",
    description:
      "Halka arzda eşit dağıtım nasıl hesaplanır, kişi başı lot hesabı nasıl yapılır, bireysel tahsisat ve katılımcı sayısı ne işe yarar?",
    category: "Halka Arz",
    intro:
      "Eşit dağıtım hesabı, halka arzlarda kişi başına yaklaşık kaç lot düşebileceğini görmek için kullanılan en pratik hesaplardan biridir.",
    definition:
      "Eşit dağıtımda önce ilgili yatırımcı grubuna ayrılan lot miktarı bulunur. Bu lot, geçerli talep giren yatırımcı sayısına bölünerek kişi başı yaklaşık lot tahmini yapılır.",
    whyMatters:
      "Bu hesap yatırımcıya ne kadar para ayırması gerektiği, tahmini pozisyon büyüklüğü ve fazla talep girmenin anlamı hakkında fikir verir.",
    howToRead: [
      "Formül: kişi başı yaklaşık lot = bireysel yatırımcıya ayrılan lot / geçerli yatırımcı sayısı.",
      "Talep ettiğiniz lot bu tahmini miktarın altındaysa, dağıtımda talebiniz kadar almanız mümkün olabilir.",
      "Küsurat, minimum talep, mükerrer talep ve özel dağıtım kuralları nedeniyle kesin sonuç formülden farklılaşabilir.",
    ],
    watch: [
      "Toplam halka arz lotu ile bireysel yatırımcıya ayrılan lot aynı değildir.",
      "Katılımcı sayısı arttıkça kişi başı lot düşer.",
      "Yüksek başvuru, kurumsal ve çalışan tahsisatı ayrı hesaplanmalıdır.",
      "Eşit dağıtım her yatırımcıya kesin aynı lot gelir demek değildir.",
      "Dağıtım sonucu açıklanmadan kesin lot söylenemez.",
    ],
    example:
      "80 milyon lotluk halka arzın yüzde 60'ı bireysel yatırımcıya ayrılmışsa bireysel havuz 48 milyon lot olur. 800 bin yatırımcı talep girerse kişi başı yaklaşık 60 lot tahmin edilir.",
    checkSource:
      "Bireysel tahsisat, toplam lot, dağıtım yöntemi ve satış esasları izahname, KAP satış duyurusu ve aracı kurum halka arz ekranından kontrol edilmelidir.",
    commonMistake:
      "En sık hata, eşit dağıtımda çok para yatıran herkesin daha çok lot alacağını düşünmektir. Eşit dağıtımda kişi bazlı dengeleme öne çıkar.",
    sourceKeys: ["bistSatisYontemleri", "kap", "yapiKrediHalkaArz"],
  },
  {
    slug: "borsa-istanbul-islem-saatleri",
    title: "Borsa İstanbul İşlem Saatleri Rehberi",
    breadcrumb: "Borsa İstanbul İşlem Saatleri",
    description:
      "Borsa İstanbul işlem saatleri, açılış, sürekli işlem, kapanış seansı, yarım gün takvimi ve emir zamanlaması hakkında sade rehber.",
    category: "Borsa İşlemleri",
    intro:
      "Borsa İstanbul'da emirlerin ne zaman iletilebildiğini, hangi saatlerde fiyat oluştuğunu ve yarım günlerde takvimin nasıl değiştiğini bilmek, özellikle kısa vadeli işlem yapan yatırımcılar için önemlidir.",
    definition:
      "Borsa İstanbul işlem saatleri; açılış emir toplama, sürekli işlem, kapanış ve gün sonu bölümlerinden oluşan seans akışını ifade eder. Pay piyasasında işlemlerin büyük bölümü sürekli işlem bölümünde gerçekleşir; açılış ve kapanış bölümleri ise emirlerin belirli kurallarla eşleştiği ayrı süreçlerdir.",
    whyMatters:
      "Emrin hangi seans bölümünde girildiği fiyat oluşumunu, gerçekleşme ihtimalini ve iptal-değişiklik imkânını etkileyebilir. Bu nedenle yatırımcı yalnızca fiyat seviyesine değil, emri hangi saat aralığında verdiğine de bakmalıdır.",
    howToRead: [
      "Tam gün, yarım gün ve resmi tatil takvimleri ayrı değerlendirilmelidir. Borsa İstanbul güncel saatleri değiştirebildiği için işlem öncesi resmi işlem saatleri kontrol edilmelidir.",
      "Açılış ve kapanış bölümlerinde fiyat tek bir eşleşme mantığıyla oluşabilir. Sürekli işlemde ise alış ve satış emirleri uygun fiyat-zaman önceliğiyle gün içinde eşleşir.",
      "Halka arz, BYF, varant veya özel pazarlarda saatler ve emir kuralları pay senetlerinden farklı olabilir. İşlem yapılan enstrümanın kendi pazarı kontrol edilmelidir.",
    ],
    watch: [
      "Yarım günlerde kapanış ve takas süreçleri normal günden farklı olabilir.",
      "Seans dışı verilen emirler aracı kurumda bekleyebilir; borsaya iletim zamanı kurum uygulamasına göre değişebilir.",
      "Açılışta görünen teorik fiyat kesin gerçekleşme fiyatı değildir.",
      "Likiditesi zayıf hisselerde seansın ilk ve son dakikalarında oynaklık artabilir.",
    ],
    example:
      "Örneğin bir hisse açılışta yüksek teorik fiyat gösterirken sürekli işlem başladıktan sonra farklı dengelenebilir. Bu nedenle açılış öncesi ekran tek başına alım-satım kararı yerine geçmez.",
    checkSource:
      "Güncel seans saatleri Borsa İstanbul işlem saatleri sayfasından, özel gün ve yarım gün duyuruları ise Borsa İstanbul ve aracı kurum bildirimlerinden kontrol edilmelidir.",
    commonMistake:
      "En sık hata, her ürünün aynı saatte işlem gördüğünü varsaymaktır. Pay senedi, BYF, varant, rüçhan ve birincil piyasa işlemlerinde saatler ve kurallar farklılaşabilir.",
    sourceKeys: ["bistSaatleri", "bistPay"],
  },
  {
    slug: "tavan-hisse-nasil-alinir",
    title: "Tavan Hisse Nasıl Alınır?",
    breadcrumb: "Tavan Hisse Nasıl Alınır",
    description:
      "Tavan olan hissede emir sırası, alış gerçekleşme ihtimali, likidite ve risk yönetimi nasıl okunur? Yeni yatırımcı için tavan hisse rehberi.",
    category: "Borsa İşlemleri",
    intro:
      "Tavan hisse, günlük fiyat sınırının üst tarafına ulaşmış ve alış tarafında yoğun talep birikmiş hissedir. Böyle dönemlerde emir vermek kolay görünse de gerçekleşme ve risk tarafı dikkat ister.",
    definition:
      "Tavan hisse almak için yatırımcı aracı kurum ekranından alış emri iletir; ancak hissenin tavanda olması emrin mutlaka gerçekleşeceği anlamına gelmez. Sırada bekleyen alış emirleri ve satışa gelen lot miktarı gerçekleşmeyi belirler.",
    whyMatters:
      "Tavan fiyat, talebin güçlü göründüğünü gösterebilir; fakat fiyatın hızlı yükselmiş olması aynı zamanda sert düzeltme riskini de artırır. Bu yüzden tavan hissede yalnızca sıraya girmek değil, neden tavan olduğunu anlamak gerekir.",
    howToRead: [
      "Alış tarafında bekleyen lot, satışa gelen miktar ve işlem hacmi birlikte izlenir. Sıranın büyük olması gerçekleşme ihtimalini düşürebilir.",
      "Tavanın haber, bilanço, halka arz etkisi veya spekülatif hareket nedeniyle oluşup oluşmadığı ayrıştırılmalıdır.",
      "Emir tipi, fiyat limiti ve iptal kuralları aracı kurum ekranında açıkça kontrol edilmelidir.",
    ],
    watch: [
      "Tavandan alınan hisse ertesi gün taban açabilir; kısa vadeli risk yüksektir.",
      "Sadece sosyal medya ilgisine göre sıraya girilmemelidir.",
      "Likiditesi düşük hisselerde az miktarda satış bile fiyatı hızla bozabilir.",
      "Portföyün tamamını tek bir tavan harekete bağlamak risklidir.",
    ],
    example:
      "Bir hisse olumlu KAP açıklaması sonrası tavan olabilir. Ancak aynı gün satış gelmiyorsa alış emri sırada bekler; ertesi gün talep zayıflarsa emir gerçekleşmeden fırsat kaçabilir veya yüksek fiyattan risk doğabilir.",
    checkSource:
      "Hissenin tavan nedeni için KAP açıklamaları, şirket haberleri, derinlik ekranı ve işlem hacmi birlikte kontrol edilmelidir.",
    commonMistake:
      "En sık hata, tavanda bekleyen yüksek alış lotunu kesin yükseliş garantisi gibi okumaktır. Bekleyen emirler iptal edilebilir ve talep dengesi gün içinde değişebilir.",
    sourceKeys: ["bistPay", "kap"],
  },
  {
    slug: "taban-hisse-nasil-satilir",
    title: "Taban Olan Hisse Nasıl Satılır?",
    breadcrumb: "Taban Olan Hisse Nasıl Satılır",
    description:
      "Taban olan hisse nasıl satılır, taban fiyattan satış emri nasıl verilir, sıra bekleme ve gerçekleşme ihtimali nasıl yorumlanır?",
    category: "Borsa İşlemleri",
    intro:
      "Taban olan hisseyi satmak teknik olarak satış emri vermekle başlar; fakat alıcı gelmediği sürece emrin hemen gerçekleşmesi beklenmemelidir.",
    definition:
      "Taban hisse, günlük fiyat sınırının altına kadar gerilemiş ve satış tarafında yoğun emir birikmiş hissedir. Satmak isteyen yatırımcı taban fiyattan satış emri verebilir; gerçekleşme, alıcıların gelip gelmemesine bağlıdır.",
    whyMatters:
      "Taban serilerinde likidite kuruyabilir. Bu nedenle yatırımcı satış emri vermenin teknik olarak mümkün olduğunu, ama sıranın ve alıcı miktarının sonucu belirlediğini bilmelidir.",
    howToRead: [
      "Satış tarafındaki bekleyen lot büyüklüğü ve gün içi işlem hacmi satışın gerçekleşme ihtimali hakkında fikir verir.",
      "Tabanın nedeni bilanço, dava, ceza, ortak satışı, piyasa paniği veya genel endeks düşüşü olabilir; nedenler ayrı ayrı değerlendirilmelidir.",
      "Emir geçerlilik süresi, fiyat limiti ve iptal durumu aracı kurum ekranında kontrol edilmelidir.",
    ],
    watch: [
      "Panikle tüm portföyü aynı fiyattan satmaya çalışmak zararı büyütebilir.",
      "Alıcı olmayan hissede emir beklese bile nakde dönüşmeyebilir.",
      "Taban bozma her zaman kalıcı toparlanma anlamına gelmez.",
      "Haberin etkisi geçici mi kalıcı mı ayrıştırılmadan karar verilmemelidir.",
    ],
    example:
      "Olumsuz bir haber sonrası hisse tabana inerse satış emirleri birikir. Alıcı tarafı zayıf kalırsa küçük miktarda işlem geçse bile tüm satış emirleri karşılanmayabilir.",
    checkSource:
      "Taban hareketinin nedeni için KAP açıklamaları, Borsa İstanbul duyuruları, tedbir kararları ve şirket haber akışı kontrol edilmelidir.",
    commonMistake:
      "En sık hata, taban fiyatı görüldüğünde satış emrinin kesin gerçekleşeceğini sanmaktır. Taban fiyatta alıcı yoksa emir sırada bekler.",
    sourceKeys: ["bistPaySss", "bistPay", "kap"],
  },
  {
    slug: "tek-fiyat-islem-yontemi-nedir",
    title: "Tek Fiyat İşlem Yöntemi Nedir?",
    breadcrumb: "Tek Fiyat İşlem Yöntemi",
    description:
      "Tek fiyat işlem yöntemi nedir, emir toplama ve fiyat belirleme süreci nasıl işler, hisse likiditesini ve yatırımcıyı nasıl etkiler?",
    category: "Borsa İşlemleri",
    intro:
      "Tek fiyat işlem yöntemi, bazı paylarda sürekli alım satım yerine belirli zamanlarda emir toplanıp tek bir fiyat oluşması mantığıyla çalışır.",
    definition:
      "Tek fiyat yönteminde emirler belirli süre boyunca toplanır, bu emirler üzerinden denge fiyatı belirlenir ve işlemler bu tek fiyattan gerçekleşir. Sürekli işlemdeki gibi anlık eşleşme akışı yoktur.",
    whyMatters:
      "Bu yöntem likiditesi sınırlı, oynaklığı yüksek veya özel tedbir uygulanan hisselerde yatırımcı davranışını değiştirir. Emir verirken fiyatın ne zaman oluşacağını bilmek gerekir.",
    howToRead: [
      "Emir toplama sürecinde görünen teorik fiyat değişebilir; nihai işlem fiyatı eşleşme anında netleşir.",
      "Likidite düşükse beklenen miktarın tamamı gerçekleşmeyebilir.",
      "Tek fiyat uygulamasının geçici tedbir mi yoksa pazar işleyişinden mi kaynaklandığı kontrol edilmelidir.",
    ],
    watch: [
      "Teorik fiyatı kesin işlem fiyatı gibi değerlendirmeyin.",
      "Emir iptal ve değiştirme kurallarını işlem öncesi kontrol edin.",
      "Tek fiyat sürecinde haber akışı fiyatı bir sonraki eşleşmeye taşıyabilir.",
      "Sadece tavan veya taban görüntüsüne göre acele karar verilmemelidir.",
    ],
    example:
      "Bir hisse tek fiyat tedbirindeyse gün içinde emirler toplanır; eşleşme anına kadar fiyat değişebilir. Bu yüzden emir yazarken teorik fiyata değil, riskli fiyat aralığına göre plan yapılır.",
    checkSource:
      "Tek fiyat uygulaması Borsa İstanbul ve KAP tedbir duyurularından, işlem yöntemi ise aracı kurumun hisse detay ekranından kontrol edilebilir.",
    commonMistake:
      "En sık hata, emir toplama sırasında ekranda görünen teorik fiyatı kesinleşmiş fiyat sanmaktır. Tek fiyat yönteminde fiyat son eşleşme anında oluşur.",
    sourceKeys: ["bistPay", "kap"],
  },
  {
    slug: "aciga-satis-nedir",
    title: "Açığa Satış Nedir?",
    breadcrumb: "Açığa Satış",
    description:
      "Açığa satış nedir, hangi hisselerde yapılabilir, yatırımcı için riskleri nelerdir ve Borsa İstanbul kuralları nasıl takip edilir?",
    category: "Borsa İşlemleri",
    intro:
      "Açığa satış, yatırımcının sahip olmadığı payı belirli kurallar içinde satması ve daha sonra yerine koyması mantığına dayanır. Risk seviyesi normal alım işleminden daha yüksektir.",
    definition:
      "Açığa satışta yatırımcı fiyatın düşeceği beklentisiyle pay satışı yapar. İşlem, ödünç pay, teminat, aracı kurum izni ve Borsa İstanbul düzenlemeleri kapsamında yürütülür.",
    whyMatters:
      "Fiyat düşerse yatırımcı kazanç sağlayabilir; ancak fiyat yükselirse zarar teorik olarak sınırsız büyüyebilir. Bu yüzden açığa satış deneyimsiz yatırımcı için yüksek riskli bir stratejidir.",
    howToRead: [
      "Açığa satışa konu edilebilen paylar ve yasak dönemleri kontrol edilmelidir.",
      "Teminat tamamlama, ödünç maliyeti ve pozisyon kapatma zamanı hesaplanmalıdır.",
      "Piyasa genelindeki açığa satış yasağı veya yukarı adım kuralı gibi düzenlemeler takip edilmelidir.",
    ],
    watch: [
      "Fiyat yükselişinde zarar hızlı büyüyebilir.",
      "Teminat yetersizliği pozisyonun zorunlu kapatılmasına yol açabilir.",
      "Her hissede açığa satış yapılamaz.",
      "Kısa vadeli haber akışı pozisyonu ters yönde hızla etkileyebilir.",
    ],
    example:
      "Bir yatırımcı 100 TL'den açığa satış yapıp fiyatın 90 TL'ye düşmesini bekleyebilir. Fiyat 110 TL'ye çıkarsa zarar oluşur ve teminat baskısı artabilir.",
    checkSource:
      "Açığa satış yapılabilen paylar, geçici yasaklar ve işlem kuralları Borsa İstanbul, SPK duyuruları ve aracı kurum ekranlarından kontrol edilmelidir.",
    commonMistake:
      "En sık hata, açığa satışı normal satış işlemi gibi düşük riskli görmek ve teminat maliyetini hesaba katmamaktır.",
    sourceKeys: ["bistPay", "spk"],
  },
  {
    slug: "kredili-islem-nedir",
    title: "Kredili İşlem Nedir?",
    breadcrumb: "Kredili İşlem",
    description:
      "Kredili işlem nedir, hisse alımında kaldıraç nasıl oluşur, teminat tamamlama ve faiz maliyeti yatırımcıyı nasıl etkiler?",
    category: "Borsa İşlemleri",
    intro:
      "Kredili işlem, yatırımcının aracı kurumdan sağlanan krediyle portföy büyüklüğünden daha yüksek tutarda hisse pozisyonu almasına imkân verir.",
    definition:
      "Kredili işlemde yatırımcı belirli teminat karşılığında borçlanarak pay alır. Bu borç için faiz işler ve portföy değeri düştüğünde ek teminat istenebilir.",
    whyMatters:
      "Kaldıraç kazancı büyütebildiği gibi zararı da büyütür. Faiz maliyeti ve teminat tamamlama riski, özellikle dalgalı piyasalarda yatırımcıyı zorlayabilir.",
    howToRead: [
      "Kredi faizi, teminat oranı ve hangi payların kredili işleme uygun olduğu kontrol edilir.",
      "Portföy değerindeki düşüşün teminat oranını nasıl etkileyeceği önceden hesaplanır.",
      "Kısa vadeli işlem planı ile faiz maliyeti aynı tabloda değerlendirilir.",
    ],
    watch: [
      "Kredili pozisyon uzun süre taşınırsa faiz maliyeti getiriyi aşabilir.",
      "Sert düşüşlerde aracı kurum ek teminat isteyebilir.",
      "Her hisse kredili işleme uygun olmayabilir.",
      "Kaldıraç psikolojik baskıyı ve panik satış riskini artırır.",
    ],
    example:
      "100 bin TL özkaynakla ek kredi kullanarak daha büyük pozisyon açmak, hisse yükselirse getiriyi artırabilir. Fakat düşüşte zarar ve faiz maliyeti aynı anda büyür.",
    checkSource:
      "Kredili işlem koşulları aracı kurum sözleşmesi, SPK düzenlemeleri ve işlem yapılan payın kredili işleme uygunluk listesi üzerinden kontrol edilmelidir.",
    commonMistake:
      "En sık hata, yalnızca beklenen kazancı hesaplayıp faiz, teminat tamamlama ve zorunlu satış riskini görmezden gelmektir.",
    sourceKeys: ["spk", "bistPay"],
  },
  {
    slug: "emir-turleri-nelerdir",
    title: "Emir Türleri Nelerdir? Limit, Piyasa, Piyasadan Limite",
    breadcrumb: "Emir Türleri",
    description:
      "Borsada limit emir, piyasa emri, piyasadan limite emir ve emir geçerlilik süreleri nasıl çalışır? Yeni yatırımcı için rehber.",
    category: "Borsa İşlemleri",
    intro:
      "Emir türü seçimi, yatırımcının hangi fiyattan ve hangi hızda işlem yapmak istediğini belirler. Yanlış emir türü beklenmeyen fiyattan işlem doğurabilir.",
    definition:
      "Limit emir belirlenen fiyat veya daha iyi fiyattan işlem yapmayı hedefler. Piyasa emri mevcut en iyi karşı emirlerle hızlı eşleşir. Piyasadan limite emir ise eşleşmeyen kısmı oluşan fiyattan limit emre çevirebilir.",
    whyMatters:
      "Likiditesi düşük veya hızlı hareket eden hisselerde emir türü fiyat kadar önemlidir. Özellikle piyasa emri, görünen son fiyattan farklı seviyelerde gerçekleşebilir.",
    howToRead: [
      "Limit emir fiyatta kontrol sağlar ama gerçekleşmeyebilir.",
      "Piyasa emri hız sağlar ama beklenenden kötü fiyata işlem riski taşır.",
      "Piyasadan limite emir, hızlı giriş ile fiyat kontrolü arasında ara bir çözüm sunar.",
    ],
    watch: [
      "Derinliği düşük hisselerde piyasa emri dikkatli kullanılmalıdır.",
      "Tavan-taban hisselerde emir türü gerçekleşme garantisi vermez.",
      "Emir geçerlilik süresi gün sonu iptal davranışını etkiler.",
      "Yanlış fiyat kademesi veya yanlış miktar kontrol edilmeden emir gönderilmemelidir.",
    ],
    example:
      "Bir hisse 50 TL görünürken satış tarafında az lot varsa piyasa alış emri daha yukarı kademelerden de gerçekleşebilir. Limit emir bu riski sınırlar.",
    checkSource:
      "Emir türleri ve geçerlilik seçenekleri Borsa İstanbul işlem kuralları ile aracı kurum emir ekranındaki açıklamalardan kontrol edilmelidir.",
    commonMistake:
      "En sık hata, piyasa emrini her zaman son görünen fiyattan gerçekleşecek sanmaktır. Gerçekleşme karşı taraftaki emir defterine bağlıdır.",
    sourceKeys: ["bistPay"],
  },
  {
    slug: "zincir-emir-nedir",
    title: "Zincir Emir Nedir, Nasıl Kullanılır?",
    breadcrumb: "Zincir Emir",
    description:
      "Zincir emir nedir, hangi durumda kullanılır, ana emir gerçekleşmeden bağlı emir neden çalışmaz ve yatırımcı nelere dikkat etmeli?",
    category: "Emir ve Risk Yönetimi",
    intro:
      "Zincir emir, bir emrin gerçekleşmesine bağlı olarak başka bir emrin otomatik devreye alınmasını sağlayan aracı kurum özelliğidir.",
    definition:
      "Zincir emirde ana emir gerçekleşmeden bağlı emir borsaya iletilmez. Örneğin alış emri gerçekleşirse ardından satış hedefi veya zarar kes emri sisteme gönderilecek şekilde kurgu yapılabilir.",
    whyMatters:
      "Bu yapı işlem disiplinini artırabilir; ancak aracı kurumun uygulama detayları ve piyasa koşulları sonucu etkiler. Zincir emir kesin koruma sağlamaz.",
    howToRead: [
      "Ana emir, bağlı emir ve tetik koşulu ayrı ayrı kontrol edilir.",
      "Kısmi gerçekleşme durumunda bağlı emrin nasıl çalışacağı aracı kurumdan öğrenilmelidir.",
      "Hızlı piyasa hareketlerinde bağlı emir istenen fiyattan gerçekleşmeyebilir.",
    ],
    watch: [
      "Zincir emir her aracı kurumda aynı şekilde çalışmayabilir.",
      "Seans dışı veya devre kesici anlarında emir iletimi gecikebilir.",
      "Kısmi gerçekleşme senaryosu mutlaka kontrol edilmelidir.",
      "Emirleri kurduktan sonra portföy ve nakit yeterliliği izlenmelidir.",
    ],
    example:
      "Yatırımcı 100 TL'den alış emri verip gerçekleşirse 110 TL hedef satış emri tanımlayabilir. Ancak ana alış gerçekleşmezse bağlı satış emri devreye girmez.",
    checkSource:
      "Zincir emir koşulları aracı kurumun emir ekranı, sözleşmeleri ve kullanım kılavuzundan kontrol edilmelidir.",
    commonMistake:
      "En sık hata, zincir emri zarar riskini tamamen ortadan kaldıran otomatik sistem sanmaktır. Emir iletilse bile karşı tarafta likidite yoksa gerçekleşmeyebilir.",
    sourceKeys: ["bistPay"],
  },
  {
    slug: "stop-loss-nedir",
    title: "Stop Loss Nedir, Nasıl Kullanılır?",
    breadcrumb: "Stop Loss",
    description:
      "Stop loss nedir, zarar kes emri nasıl çalışır, tetik fiyatı ile gerçekleşme fiyatı neden farklı olabilir? Risk yönetimi rehberi.",
    category: "Emir ve Risk Yönetimi",
    intro:
      "Stop loss, yatırımcının zararı belirli bir seviyede sınırlamak için kullandığı disiplin aracıdır. Doğru ayarlanmazsa gereksiz satışa veya geç çıkışa yol açabilir.",
    definition:
      "Stop loss, fiyat belirlenen tetik seviyesine geldiğinde satış emrinin devreye girmesidir. Emir türüne göre gerçekleşme fiyatı tetik fiyatından farklı olabilir.",
    whyMatters:
      "Zarar kes seviyesi portföy riskini yönetmeye yardımcı olur. Özellikle kaldıraçlı, kredili veya yüksek oynaklıklı işlemlerde plansız zararın büyümesini sınırlayabilir.",
    howToRead: [
      "Tetik fiyatı ile limit fiyatı ayrı kavramlardır; ikisi aynı yazıldığında emir gerçekleşmeyebilir.",
      "Stop seviyesi teknik seviyeler, volatilite ve portföy riskiyle uyumlu olmalıdır.",
      "Haber boşluklarında fiyat stop seviyesinin altında açılabilir; bu durumda gerçekleşme daha kötü seviyeden olabilir.",
    ],
    watch: [
      "Stop seviyesini çok yakın koymak normal dalgalanmada pozisyonu kapatabilir.",
      "Çok uzak stop ise zararı gereğinden fazla büyütebilir.",
      "Likiditesi düşük hisselerde stop emri kayma riski taşır.",
      "Stop loss kar garantisi değil, risk sınırlama aracıdır.",
    ],
    example:
      "100 TL maliyetli hissede 94 TL stop seviyesi belirlenirse fiyat bu bölgeye geldiğinde satış emri devreye alınabilir. Ancak hızlı düşüşte gerçekleşme 94 TL'den farklı olabilir.",
    checkSource:
      "Stop emir türleri ve tetik kuralları aracı kurum ekranından; hissenin likiditesi ve fiyat adımları ise Borsa İstanbul piyasa verilerinden kontrol edilmelidir.",
    commonMistake:
      "En sık hata, stop loss emrinin her durumda tam tetik fiyatından satış yapacağını düşünmektir. Gerçekleşme emir defterindeki alıcıya bağlıdır.",
    sourceKeys: ["bistPay"],
  },
  {
    slug: "hisse-senedi-virman-nedir",
    title: "Hisse Senedi Virman Nedir?",
    breadcrumb: "Hisse Senedi Virman",
    description:
      "Hisse senedi virman nedir, aracı kurumlar arasında pay transferi nasıl yapılır, maliyet ve işlem süresi açısından nelere dikkat edilir?",
    category: "Borsa İşlemleri",
    intro:
      "Virman, yatırımcının sahip olduğu payları bir hesaptan başka bir hesaba veya aracı kuruma aktarmasıdır. Satış işlemi değildir; mülkiyetin kayıt yeri değişir.",
    definition:
      "Hisse senedi virmanında paylar kaydi sistemde yatırımcı hesabı arasında taşınır. İşlem aracı kurum talimatı ve MKK kayıtları üzerinden yürür.",
    whyMatters:
      "Yatırımcı aracı kurum değiştirdiğinde, teminat yapısını düzenlediğinde veya portföyünü tek hesapta toplamak istediğinde virman kullanabilir. Satış yapılmadığı için fiyat riski satış işleminden farklıdır.",
    howToRead: [
      "Virman tipi, alıcı hesap bilgisi ve pay kodu doğru girilmelidir.",
      "İşlem süresi aracı kurum operasyonuna ve MKK süreçlerine göre değişebilir.",
      "Maliyet, komisyon ve blokaj durumu kurum bazında kontrol edilmelidir.",
    ],
    watch: [
      "Yanlış hesap numarası veya yatırımcı bilgisi işlem gecikmesine neden olabilir.",
      "Rehin, teminat veya blokaj altındaki paylar taşınamayabilir.",
      "Aynı gün satış planı varsa virman süresi dikkate alınmalıdır.",
      "Maliyet bilgisi ve alış tarihi kayıtlarının korunup korunmadığı sorgulanmalıdır.",
    ],
    example:
      "Yatırımcı farklı aracı kurumlarda tuttuğu aynı hisseyi tek hesapta toplamak için virman talimatı verebilir. Pay satılmaz; yalnızca saklama hesabı değişir.",
    checkSource:
      "Virman koşulları aracı kurum operasyon kanallarından ve MKK yatırımcı hizmetlerinden kontrol edilmelidir.",
    commonMistake:
      "En sık hata, virmanı satış işlemi sanmaktır. Virman fiyat oluşturmaz; payın hesaptaki kayıt yerini değiştirir.",
    sourceKeys: ["mkk"],
  },
  {
    slug: "bedelsiz-sermaye-artirimi-nedir",
    title: "Bedelsiz Sermaye Artırımı Nedir?",
    breadcrumb: "Bedelsiz Sermaye Artırımı",
    description:
      "Bedelsiz sermaye artırımı nedir, lot sayısı ve teorik fiyat nasıl değişir, yatırımcı açısından gerçek etki nasıl yorumlanır?",
    category: "Sermaye Artırımı ve Temettü",
    intro:
      "Bedelsiz sermaye artırımı yatırımcıların en çok heyecanlandığı kurumsal işlemlerden biridir. Ancak lot sayısının artması tek başına yatırımcının servetini artırmaz.",
    definition:
      "Bedelsiz sermaye artırımı, şirketin iç kaynaklarını sermayeye ekleyerek mevcut ortaklara bedel almadan yeni pay vermesidir. Pay adedi artar, teorik fiyat aynı oranda düzelir.",
    whyMatters:
      "Bedelsiz sonrası yatırımcının toplam portföy değeri teorik olarak değişmez. Asıl önemli olan şirketin büyüme hikâyesi, özkaynak yapısı ve piyasanın bu işlemi nasıl fiyatladığıdır.",
    howToRead: [
      "Bedelsiz oranı lot sayısını artırırken teorik fiyatı düşürür.",
      "Sermaye artırımının kaynağı ve şirketin özkaynak kalitesi incelenmelidir.",
      "Bedelsiz beklentisinin daha önce fiyata girip girmediği değerlendirilmelidir.",
    ],
    watch: [
      "Bedelsiz pay almak bedava kar anlamına gelmez.",
      "Yüksek oranlı bedelsiz sonrası fiyat oynaklığı artabilir.",
      "Hak kullanım tarihi ve düzeltilmiş fiyat takibi önemlidir.",
      "Şirketin faaliyet performansı sermaye işleminden ayrı incelenmelidir.",
    ],
    example:
      "100 lotu olan yatırımcı yüzde 100 bedelsiz sonrası 200 lota sahip olur. Teorik fiyat yarıya düşer; toplam değer ilk anda aynı kalır.",
    checkSource:
      "Bedelsiz kararı, oranı, hak kullanım tarihi ve kaynak bilgisi KAP açıklamalarından ve MKK hak kullanım duyurularından kontrol edilmelidir.",
    commonMistake:
      "En sık hata, lot sayısı arttığı için yatırımcının otomatik olarak zenginleştiğini düşünmektir. Teorik fiyat da aynı oranda düzelir.",
    sourceKeys: ["kap", "mkk"],
  },
  {
    slug: "bedelli-sermaye-artirimi-nedir",
    title: "Bedelli Sermaye Artırımı Nedir?",
    breadcrumb: "Bedelli Sermaye Artırımı",
    description:
      "Bedelli sermaye artırımı nedir, rüçhan hakkı nasıl doğar, yatırımcı para yatırmazsa ne olur ve süreç nasıl takip edilir?",
    category: "Sermaye Artırımı ve Temettü",
    intro:
      "Bedelli sermaye artırımı, şirketin mevcut ortaklardan veya yeni yatırımcılardan nakit kaynak topladığı sermaye işlemidir.",
    definition:
      "Bedelli sermaye artırımı, şirketin yeni pay ihraç edip bu payları belirli bedel karşılığında satmasıdır. Mevcut ortaklara çoğu zaman rüçhan hakkı tanınır.",
    whyMatters:
      "Bedelli artırım şirketin nakit ihtiyacını karşılayabilir; ancak yatırımcı sürece katılmazsa ortaklık oranı sulanabilir. Bu nedenle neden yapıldığı ve fiyatı önemlidir.",
    howToRead: [
      "Bedelli oranı, kullanım fiyatı ve rüçhan hakkı süresi birlikte incelenmelidir.",
      "Toplanacak kaynağın borç azaltma, yatırım veya işletme sermayesi için kullanılması farklı yorumlanır.",
      "Piyasa fiyatı ile rüçhan kullanım fiyatı arasındaki fark yatırımcı kararını etkiler.",
    ],
    watch: [
      "Rüçhan süresi kaçırılırsa hak kaybı yaşanabilir.",
      "Bedelli nedeni zayıfsa piyasa olumsuz fiyatlayabilir.",
      "Sadece iskonto var diye katılmak doğru olmayabilir.",
      "Kullanılmayan hakların satılıp satılamayacağı takip edilmelidir.",
    ],
    example:
      "Yüzde 100 bedelli artırımda 100 lotu olan yatırımcıya 100 lot yeni pay alma hakkı doğabilir. Bu hakkı kullanmak için belirlenen tutarın yatırılması gerekir.",
    checkSource:
      "Bedelli oranı, rüçhan kullanım fiyatı, tarihleri ve fon kullanım yeri KAP açıklamaları ile izahname veya duyuru metinlerinden kontrol edilmelidir.",
    commonMistake:
      "En sık hata, bedelli sermaye artırımını her zaman kötü haber saymaktır. Amaç, fiyat ve şirketin bilanço ihtiyacı birlikte okunmadan sağlıklı yorum yapılamaz.",
    sourceKeys: ["kap", "spk", "mkk"],
  },
  {
    slug: "bedelsiz-sonrasi-lot-nasil-hesaplanir",
    title: "Bedelsiz Sonrası Lot Nasıl Hesaplanır?",
    breadcrumb: "Bedelsiz Sonrası Lot Hesabı",
    description:
      "Bedelsiz sonrası lot ve teorik fiyat nasıl hesaplanır? Yüzde 100, yüzde 200 ve farklı bedelsiz oranlarında pratik hesaplama rehberi.",
    category: "Sermaye Artırımı ve Temettü",
    intro:
      "Bedelsiz sermaye artırımı sonrası yatırımcının lot sayısı artar, fiyat ise teorik olarak düzelir. Hesabı bilmek, ekranda görülen değişimi doğru okumayı sağlar.",
    definition:
      "Bedelsiz sonrası yeni lot, mevcut lotun bedelsiz oranı kadar artırılmasıyla bulunur. Teorik fiyat ise eski fiyatın yeni lot katsayısına bölünmesiyle yaklaşık hesaplanır.",
    whyMatters:
      "Lot artışı yatırımcıda değer artışı algısı yaratabilir. Oysa teorik düzeltme nedeniyle portföy değeri ilk anda değişmez; gerçek getiri sonraki fiyat hareketiyle oluşur.",
    howToRead: [
      "Yüzde 100 bedelsiz lotu ikiye katlar; yüzde 200 bedelsiz lotu üçe katlar.",
      "Teorik fiyat, eski fiyatın toplam katsayıya bölünmesiyle bulunur.",
      "Kesirli lot ve küsurat uygulaması aracı kurum ve MKK süreçlerine göre izlenir.",
    ],
    watch: [
      "Düzeltilmiş fiyatı düşüş gibi yorumlamayın.",
      "Grafiklerde geçmiş fiyatların düzeltilmiş olup olmadığını kontrol edin.",
      "Hak kullanım tarihinden önce ve sonra emir fiyatı karşılaştırmasını doğru yapın.",
      "Bedelsiz beklentisi fiyata önceden yansımış olabilir.",
    ],
    example:
      "100 lot ve 60 TL fiyatla yüzde 200 bedelsiz alan yatırımcı teorik olarak 300 lota sahip olur. Teorik fiyat 20 TL civarına düzelir; toplam değer aynı kalır.",
    checkSource:
      "Bedelsiz oranı ve hak kullanım tarihi KAP açıklamasından; gerçekleşen pay dağıtımı MKK ve aracı kurum hesabından kontrol edilmelidir.",
    commonMistake:
      "En sık hata, fiyatın düşmesini zarar sanmaktır. Bedelsiz sonrası fiyat düzeltmesi teknik bir ayarlamadır.",
    sourceKeys: ["kap", "mkk"],
  },
  {
    slug: "temettu-nedir",
    title: "Temettü Nedir?",
    breadcrumb: "Temettü",
    description:
      "Temettü nedir, şirketler neden kar payı dağıtır, temettü tarihi, hak kullanım günü ve yatırımcı açısından temel etkiler nelerdir?",
    category: "Sermaye Artırımı ve Temettü",
    intro:
      "Temettü, şirketin elde ettiği kardan ortaklarına pay dağıtmasıdır. Uzun vadeli yatırımcılar için nakit akışı ve şirket politikası açısından önemli bir göstergedir.",
    definition:
      "Temettü, şirket genel kurul kararına ve mevzuata göre pay sahiplerine dağıtılan kar payıdır. Nakit veya pay şeklinde olabilir; Borsa İstanbul'da yatırımcılar çoğunlukla nakit temettüyü takip eder.",
    whyMatters:
      "Düzenli temettü ödeyen şirketler nakit üretme gücüyle öne çıkabilir. Ancak yüksek temettü tek başına iyi yatırım anlamına gelmez; sürdürülebilirlik önemlidir.",
    howToRead: [
      "Temettü tutarı hisse başına brüt ve net olarak incelenir.",
      "Hak kullanım tarihi, ödeme tarihi ve verim oranı birlikte takip edilir.",
      "Şirketin karı, nakit akışı ve borçluluğu temettünün sürdürülebilirliğini belirler.",
    ],
    watch: [
      "Tek seferlik yüksek temettü kalıcı politika anlamına gelmeyebilir.",
      "Temettü sonrası fiyat teknik olarak düşebilir.",
      "Vergi ve stopaj etkisi net tutarı değiştirir.",
      "Sadece temettü verimine bakarak hisse seçilmemelidir.",
    ],
    example:
      "Bir şirket hisse başına 2 TL brüt temettü açıklarsa, hak kullanım tarihinde pay sahibi olan yatırımcı ödeme tarihinde net tutarı hesabında görür.",
    checkSource:
      "Temettü kararı, hak kullanım tarihi ve ödeme bilgisi KAP bildirimlerinden, şirket genel kurul kararlarından ve aracı kurum temettü takviminden kontrol edilmelidir.",
    commonMistake:
      "En sık hata, temettüyü fiyat düşmeden gelen ek kazanç sanmaktır. Temettü sonrası hisse fiyatı teorik olarak dağıtılan tutar kadar düzelir.",
    sourceKeys: ["kap", "mkk"],
  },
  {
    slug: "temettu-sonrasi-hisse-fiyati-neden-duser",
    title: "Temettü Sonrası Hisse Fiyatı Neden Düşer?",
    breadcrumb: "Temettü Sonrası Fiyat Düşüşü",
    description:
      "Temettü sonrası hisse fiyatı neden düşer, teorik fiyat düzeltmesi nasıl çalışır ve yatırımcı bu hareketi nasıl yorumlamalı?",
    category: "Sermaye Artırımı ve Temettü",
    intro:
      "Temettü günü fiyat düşüşü birçok yeni yatırımcı için şaşırtıcıdır. Bu düşüş çoğu zaman şirket değerinin aniden bozulmasından değil, kar payı düzeltmesinden kaynaklanır.",
    definition:
      "Nakit temettü dağıtıldığında şirket kasasından pay sahibine para çıkar. Bu nedenle hisse fiyatı temettü tutarı kadar teorik olarak düzeltilir.",
    whyMatters:
      "Yatırımcı, temettü sonrası ekranda görünen fiyat düşüşünü gerçek zarar ile teknik düzeltme olarak ayırmalıdır. Toplam etki, fiyat hareketi ve alınan temettü birlikte hesaplanınca görülür.",
    howToRead: [
      "Brüt temettü, net temettü ve teorik fiyat ayrı ayrı incelenir.",
      "Temettü sonrası piyasa alımı gelirse hisse teorik fiyatın üstüne çıkabilir.",
      "Zayıf piyasa koşullarında fiyat teorik düzeltmeden daha fazla düşebilir.",
    ],
    watch: [
      "Temettü verimini yüksek diye tek başına alım gerekçesi yapmayın.",
      "Temettü sonrası fiyatın hemen toparlanacağı garanti değildir.",
      "Stopaj ve vergi etkisi net nakdi değiştirir.",
      "Temettü öncesi sert yükseliş varsa beklenti fiyata girmiş olabilir.",
    ],
    example:
      "100 TL fiyatlı hisse 5 TL brüt temettü dağıtırsa teorik fiyat yaklaşık 95 TL olur. Yatırımcının hesabına temettü geçer; toplam sonuç piyasa hareketiyle netleşir.",
    checkSource:
      "Temettü tutarı, hak kullanım ve ödeme tarihleri KAP açıklamalarından ve aracı kurum temettü ekranından kontrol edilmelidir.",
    commonMistake:
      "En sık hata, temettü sonrası fiyat düzeltmesini şirket değer kaybetti diye yorumlamaktır. Düzeltme teknik bir fiyat ayarlamasıdır.",
    sourceKeys: ["kap", "mkk"],
  },
  {
    slug: "temettu-verimi-nasil-hesaplanir",
    title: "Temettü Verimi Nasıl Hesaplanır?",
    breadcrumb: "Temettü Verimi",
    description:
      "Temettü verimi formülü, brüt-net temettü farkı, fiyat etkisi ve yüksek temettü veriminin nasıl yorumlanacağına dair pratik rehber.",
    category: "Sermaye Artırımı ve Temettü",
    intro:
      "Temettü verimi, yatırımcının hisse fiyatına göre ne kadar kar payı aldığını gösteren basit ama dikkatli yorumlanması gereken bir orandır.",
    definition:
      "Temettü verimi, hisse başına temettü tutarının hisse fiyatına bölünmesiyle hesaplanır. Formül genellikle temettü verimi = hisse başına temettü / hisse fiyatı şeklindedir.",
    whyMatters:
      "Bu oran, temettü gelirinin hisse fiyatına göre büyüklüğünü gösterir. Fakat yüksek verim her zaman ucuz hisse veya güvenli getiri anlamına gelmez.",
    howToRead: [
      "Brüt ve net temettü ayrımı yapılmalıdır.",
      "Fiyat olarak hangi günün kapanışının kullanıldığı belirtilmelidir.",
      "Geçmiş temettü düzenliliği ve şirketin nakit akışı incelenmelidir.",
    ],
    watch: [
      "Düşen hisse fiyatı temettü verimini yapay olarak yükseltebilir.",
      "Tek seferlik yüksek kar temettü verimini yanıltabilir.",
      "Net temettü yatırımcının hesabına geçen tutarı gösterir.",
      "Temettü verimi büyüme potansiyeliyle birlikte değerlendirilmelidir.",
    ],
    example:
      "Hisse fiyatı 40 TL, hisse başına net temettü 2 TL ise net temettü verimi yüzde 5 olur. Bu oran fiyat değiştikçe güncellenir.",
    checkSource:
      "Temettü tutarı KAP açıklamalarından; fiyat ve geçmiş temettü verileri Borsa İstanbul, veri sağlayıcılar ve aracı kurum ekranlarından kontrol edilmelidir.",
    commonMistake:
      "En sık hata, yüksek temettü verimini otomatik alım sinyali gibi okumaktır. Verimin sürdürülebilir olup olmadığı ayrıca incelenmelidir.",
    sourceKeys: ["kap", "bistPay"],
  },
  {
    slug: "halka-arzda-ortak-satisi-nedir",
    title: "Halka Arzda Ortak Satışı Nedir?",
    breadcrumb: "Halka Arzda Ortak Satışı",
    description:
      "Halka arzda ortak satışı nedir, şirkete para girer mi, mevcut ortak pay satışı yatırımcı açısından nasıl yorumlanmalı?",
    category: "Halka Arz",
    intro:
      "Halka arzlarda satılan payların tamamı şirkete kaynak girişi sağlamayabilir. Ortak satışı bu ayrımın en önemli parçasıdır.",
    definition:
      "Ortak satışı, mevcut pay sahiplerinin sahip olduğu payların halka arzda yatırımcılara satılmasıdır. Bu satıştan elde edilen nakit şirkete değil, pay satan ortağa gider.",
    whyMatters:
      "Yatırımcı halka arz gelirinin şirkete büyüme kaynağı mı olacağını, yoksa mevcut ortağın çıkışına mı hizmet edeceğini ayırmalıdır. Bu ayrım izahname okumasında kritik önemdedir.",
    howToRead: [
      "Satışın ne kadarı sermaye artırımı, ne kadarı ortak satışı ayrılmalıdır.",
      "Pay satan ortağın halka arz sonrası ne kadar payla kalacağı kontrol edilmelidir.",
      "Satmama taahhüdü ve fiyat istikrarı gibi destek unsurları birlikte incelenmelidir.",
    ],
    watch: [
      "Ortak satışı tek başına olumsuz değildir; oran ve gerekçe önemlidir.",
      "Şirkete kaynak girmiyorsa büyüme finansmanı beklentisi sınırlı olabilir.",
      "Yüksek ortak satışı yatırımcı algısını etkileyebilir.",
      "Halka arz sonrası ortaklık yapısı mutlaka incelenmelidir.",
    ],
    example:
      "Halka arzda 30 milyon lot satılıyor ve bunun 10 milyonu ortak satışıysa, bu 10 milyon lotun bedeli şirket kasasına değil satan ortağa gider.",
    checkSource:
      "Ortak satışı miktarı, satan ortak ve halka arz sonrası pay oranları izahname, tasarruf sahiplerine satış duyurusu ve KAP belgelerinden kontrol edilmelidir.",
    commonMistake:
      "En sık hata, halka arz gelirinin tamamının şirkete gireceğini varsaymaktır. Ortak satışı varsa gelirin o bölümü mevcut ortağa aittir.",
    sourceKeys: ["kap", "spk"],
  },
  {
    slug: "halka-arzda-sermaye-artirimi-nedir",
    title: "Halka Arzda Sermaye Artırımı Nedir?",
    breadcrumb: "Halka Arzda Sermaye Artırımı",
    description:
      "Halka arzda sermaye artırımı nedir, şirkete kaynak girişi nasıl olur, fon kullanım planı yatırımcı tarafından nasıl okunmalı?",
    category: "Halka Arz",
    intro:
      "Halka arzda sermaye artırımı, şirketin yeni pay çıkararak halka arz gelirini doğrudan kasasına almasını sağlayan yapıdır.",
    definition:
      "Sermaye artırımı yoluyla halka arzda şirket yeni pay ihraç eder. Satılan yeni payların bedeli şirkete girer ve izahnamede belirtilen alanlarda kullanılabilir.",
    whyMatters:
      "Bu yöntem şirketin yatırım, borç azaltma, işletme sermayesi veya büyüme planı için kaynak yaratmasını sağlayabilir. Yatırımcı fon kullanım planını bu yüzden dikkatle okumalıdır.",
    howToRead: [
      "Toplanan kaynağın hangi alanlara ayrılacağı yüzdeleriyle incelenir.",
      "Yeni pay ihracı mevcut ortakların pay oranını sulandırabilir.",
      "Kaynağın büyüme yaratıp yaratmayacağı sektör ve bilanço ile birlikte değerlendirilir.",
    ],
    watch: [
      "Sermaye artırımı var diye halka arz otomatik iyi değildir.",
      "Fon kullanım planı genel ifadelerle sınırlıysa soru işareti oluşabilir.",
      "Borç kapama amaçlı kaynak ile yatırım amaçlı kaynak farklı yorumlanır.",
      "Halka arz fiyatı ve şirket değeri ayrıca incelenmelidir.",
    ],
    example:
      "Şirket halka arzda 50 milyon yeni pay satarsa bu satıştan elde edilen gelir şirket kasasına girer. İzahnamede bu kaynağın hangi amaçla kullanılacağı açıklanır.",
    checkSource:
      "Sermaye artırımı miktarı, halka arz sonrası sermaye ve fon kullanım planı izahname, fiyat tespit raporu ve KAP açıklamalarından kontrol edilmelidir.",
    commonMistake:
      "En sık hata, sermaye artırımı yoluyla halka arzı tek başına olumlu görmek ve fiyatlama ile kaynak kullanım kalitesini incelememektir.",
    sourceKeys: ["kap", "spk"],
  },
  {
    slug: "fiyat-istikrari-islemleri-nedir",
    title: "Fiyat İstikrarı İşlemleri Nedir?",
    breadcrumb: "Fiyat İstikrarı İşlemleri",
    description:
      "Halka arzda fiyat istikrarı işlemleri nedir, ne kadar sürer, hisse fiyatını kesin korur mu ve yatırımcı nasıl yorumlamalı?",
    category: "Halka Arz",
    intro:
      "Fiyat istikrarı işlemleri, halka arz sonrası aşırı fiyat oynaklığını sınırlamak amacıyla planlanabilen destekleyici işlemlerdir.",
    definition:
      "Fiyat istikrarı, izahnamede belirtilen süre ve kaynakla halka arz sonrası piyasadan pay alımı yapılabilmesini ifade eder. Her halka arzda olmak zorunda değildir.",
    whyMatters:
      "Bu mekanizma yatırımcı algısını destekleyebilir; ancak hisse fiyatını garanti etmez. Kaynak, süre ve uygulama şartları sınırlıdır.",
    howToRead: [
      "Fiyat istikrarı yapılacak mı, süre kaç gün, kaynak ne kadar soruları yanıtlanmalıdır.",
      "İşlemi hangi kurumun yürüteceği ve hangi fiyat aralığında alım yapılabileceği incelenmelidir.",
      "Fiyat istikrarı sonrası destek ortadan kalktığında likidite ve talep yeniden değerlendirilmelidir.",
    ],
    watch: [
      "Fiyat istikrarı kesin taban koruması değildir.",
      "Kaynak bitirse destek sona erebilir.",
      "Her düşüşte alım yapılacağı varsayılmamalıdır.",
      "Halka arz sonrası gerçek talep ve şirket performansı ayrıca izlenmelidir.",
    ],
    example:
      "Halka arz izahnamesinde 30 gün fiyat istikrarı öngörülmüş olabilir. Bu, yetkili kurumun belirli koşullarda piyasadan alım yapabileceği anlamına gelir; zorunlu sürekli alım garantisi değildir.",
    checkSource:
      "Fiyat istikrarı süresi, kaynak tutarı ve yetkili kurum izahname, tasarruf sahiplerine satış duyurusu ve KAP açıklamalarından kontrol edilmelidir.",
    commonMistake:
      "En sık hata, fiyat istikrarı olan halka arzın düşmeyeceğini düşünmektir. Mekanizma sınırlı ve koşulludur.",
    sourceKeys: ["kap", "spk"],
  },
  {
    slug: "fon-nedir",
    title: "Fon Nedir? Yatırım Fonu Nasıl Çalışır?",
    breadcrumb: "Yatırım Fonu",
    description:
      "Yatırım fonu nedir, portföy yönetimi nasıl yapılır, fon fiyatı, risk profili, TEFAS ve yatırımcı açısından temel kavramlar.",
    category: "Fonlar",
    intro:
      "Yatırım fonları, birikimlerin profesyonel portföy yöneticileri tarafından belirli stratejiye göre yönetildiği kolektif yatırım araçlarıdır.",
    definition:
      "Fon, çok sayıda yatırımcıdan toplanan paranın hisse, tahvil, para piyasası aracı, altın, döviz veya farklı varlıklarda değerlendirilmesiyle oluşur. Yatırımcı fondan katılma payı alır.",
    whyMatters:
      "Fonlar portföy çeşitlendirmesi, profesyonel yönetim ve farklı stratejilere erişim sağlar. Ancak her fonun risk seviyesi, valörü, ücret yapısı ve varlık dağılımı farklıdır.",
    howToRead: [
      "Fon türü ve yatırım stratejisi ilk kontrol edilmesi gereken alandır.",
      "Geçmiş getiri tek başına yeterli değildir; risk, oynaklık ve portföy içeriği birlikte incelenir.",
      "Alım-satım valörü, yönetim ücreti ve stopaj etkisi net getiri üzerinde belirleyicidir.",
    ],
    watch: [
      "Fon adı benzer olsa bile içerik ve risk seviyesi farklı olabilir.",
      "Kısa vadeli performans uzun vadeli başarı garantisi değildir.",
      "Serbest fonlar her yatırımcıya uygun olmayabilir.",
      "Fon içeriği dönemsel olarak değişebilir.",
    ],
    example:
      "Hisse senedi yoğun fon yüksek hisse ağırlığıyla daha oynak olabilirken para piyasası fonu daha düşük riskli ve kısa vadeli nakit yönetimine uygun olabilir.",
    checkSource:
      "Fon türü, izahname, portföy dağılımı, fiyat ve getiri verileri TEFAS, KAP ve fon kurucusunun resmi dokümanlarından kontrol edilmelidir.",
    commonMistake:
      "En sık hata, yalnızca son getiriye bakarak fon seçmektir. Fonun neye yatırım yaptığı ve hangi riskle getiri ürettiği anlaşılmadan karar verilmemelidir.",
    sourceKeys: ["tefas", "spk", "kap"],
  },
  {
    slug: "tefas-nedir",
    title: "TEFAS Nedir?",
    breadcrumb: "TEFAS",
    description:
      "TEFAS nedir, yatırım fonları nasıl karşılaştırılır, fon fiyatı, getiri, portföy dağılımı ve işlem valörü nasıl takip edilir?",
    category: "Fonlar",
    intro:
      "TEFAS, yatırım fonlarının karşılaştırılabildiği ve birçok fonun alım-satımına erişim sağlayan Türkiye Elektronik Fon Alım Satım Platformu'dur.",
    definition:
      "TEFAS üzerinden yatırımcılar farklı kurucuların fonlarını fiyat, getiri, risk, portföy dağılımı ve işlem bilgileri açısından inceleyebilir. Her fon TEFAS'ta işlem görmeyebilir.",
    whyMatters:
      "TEFAS yatırımcıya fonları tek ekranda karşılaştırma imkânı verir. Bu sayede fon seçimi yalnızca aracı kurum listesindeki birkaç seçenekle sınırlı kalmaz.",
    howToRead: [
      "Fon kodu, fon unvanı ve fon türü doğru eşleştirilmelidir.",
      "Getiri tabloları farklı dönemler için okunmalı; kısa dönem sıçramalar tek başına karar nedeni yapılmamalıdır.",
      "Portföy dağılımı fonun riskini ve piyasa duyarlılığını anlamaya yardımcı olur.",
    ],
    watch: [
      "TEFAS'ta görünen geçmiş getiri gelecekte tekrarlanmayabilir.",
      "Bazı fonların alım-satım valörü uzun olabilir.",
      "Serbest fon veya nitelikli yatırımcı fonları erişim sınırlaması taşıyabilir.",
      "Fon fiyatı gün içinde anlık hisse gibi değişmeyebilir.",
    ],
    example:
      "Aynı kategorideki iki fonun 1 aylık getirisi benzer olabilir; ancak biri daha yüksek hisse ağırlığıyla daha fazla risk almış olabilir.",
    checkSource:
      "Fon fiyatı, getiri, portföy dağılımı ve fon işlem bilgileri TEFAS resmi platformundan ve KAP fon dokümanlarından kontrol edilmelidir.",
    commonMistake:
      "En sık hata, TEFAS getiri sıralamasında ilk sıradaki fonu otomatik en iyi fon saymaktır. Risk seviyesi ve strateji mutlaka okunmalıdır.",
    sourceKeys: ["tefas", "kap"],
  },
  {
    slug: "serbest-fon-nedir",
    title: "Serbest Fon Nedir, Kimler Alabilir?",
    breadcrumb: "Serbest Fon",
    description:
      "Serbest fon nedir, kimler alabilir, nitelikli yatırımcı şartı, strateji esnekliği ve riskleri yatırımcı açısından nasıl okunur?",
    category: "Fonlar",
    intro:
      "Serbest fonlar, yatırım stratejisi bakımından klasik fonlara göre daha esnek hareket edebilen ve genellikle nitelikli yatırımcıya sunulan fonlardır.",
    definition:
      "Serbest fon; varlık dağılımı, kaldıraç, türev araç ve piyasa pozisyonu açısından daha geniş yatırım alanına sahip olabilen fondur. Çoğu serbest fon nitelikli yatırımcı şartı taşır.",
    whyMatters:
      "Esneklik yüksek getiri fırsatı yaratabilir; fakat risk de artabilir. Fonun stratejisi, portföy konsantrasyonu ve likidite koşulları dikkatle incelenmelidir.",
    howToRead: [
      "Fonun nitelikli yatırımcı şartı ve alım-satım valörü kontrol edilir.",
      "Strateji belgesinde kaldıraç, türev ürün ve yoğunlaşma sınırları okunur.",
      "Geçmiş performans, fonun aldığı riskle birlikte değerlendirilir.",
    ],
    watch: [
      "Serbest fonlar her yatırımcı profiline uygun değildir.",
      "Portföy içeriği klasik fonlara göre daha hızlı değişebilir.",
      "Likidite ve valör koşulları nakde dönüş süresini etkileyebilir.",
      "Yüksek getiri dönemleri yüksek riskle oluşmuş olabilir.",
    ],
    example:
      "Bir serbest fon aynı anda hisse, döviz, vadeli işlem ve farklı stratejiler kullanabilir. Bu yapı fonu daha esnek ama daha karmaşık hale getirir.",
    checkSource:
      "Serbest fonun izahnamesi, yatırımcı bilgi formu, nitelikli yatırımcı şartı ve portföy dağılımı KAP ve TEFAS üzerinden kontrol edilmelidir.",
    commonMistake:
      "En sık hata, serbest fonu sadece yüksek getiri listesinde görüp risk ve erişim şartlarını okumadan almak istemektir.",
    sourceKeys: ["tefas", "spk", "kap"],
  },
  {
    slug: "hisse-senedi-yogun-fon-nedir",
    title: "Hisse Senedi Yoğun Fon Nedir?",
    breadcrumb: "Hisse Senedi Yoğun Fon",
    description:
      "Hisse senedi yoğun fon nedir, portföyünde ne kadar hisse bulunur, vergi ve risk açısından yatırımcı nasıl değerlendirmeli?",
    category: "Fonlar",
    intro:
      "Hisse senedi yoğun fonlar, portföyünün büyük bölümünü Borsa İstanbul paylarına ayıran ve bu nedenle borsa hareketlerine daha duyarlı fonlardır.",
    definition:
      "Hisse senedi yoğun fon, mevzuat ve fon stratejisi kapsamında portföyünde yüksek oranda hisse senedi taşıyan yatırım fonudur. Bu fonların getirisi hisse piyasası performansından güçlü etkilenir.",
    whyMatters:
      "Borsa yükselişlerinde avantaj sağlayabilir; düşüş dönemlerinde ise oynaklık artabilir. Yatırımcı bu fonları kısa vadeli mevduat alternatifi gibi görmemelidir.",
    howToRead: [
      "Fonun hisse ağırlığı ve en büyük pozisyonları incelenir.",
      "Endeksle korelasyon, sektör dağılımı ve aktif yönetim başarısı takip edilir.",
      "Stopaj ve vergi avantajı gibi unsurlar güncel mevzuatla birlikte kontrol edilir.",
    ],
    watch: [
      "Hisse yoğun fonlar kısa vadede sert değer kaybedebilir.",
      "Portföyde birkaç hisseye yoğunlaşma riski olabilir.",
      "Geçmiş yüksek getiri piyasa döngüsünden kaynaklanmış olabilir.",
      "Fon yöneticisi değişikliği stratejiyi etkileyebilir.",
    ],
    example:
      "BIST 100 yükselirken hisse senedi yoğun fonlar da genellikle olumlu etkilenir. Ancak fonun seçtiği hisseler endeksten farklı performans gösterebilir.",
    checkSource:
      "Fonun hisse ağırlığı, portföy dağılımı, geçmiş getirisi ve risk değeri TEFAS ile KAP fon dokümanlarından kontrol edilmelidir.",
    commonMistake:
      "En sık hata, hisse senedi yoğun fonu risksiz fon gibi algılamaktır. Bu fonlar hisse piyasası dalgalanmasını doğrudan taşır.",
    sourceKeys: ["tefas", "kap"],
  },
  {
    slug: "degisken-fon-nedir",
    title: "Değişken Fon Nedir?",
    breadcrumb: "Değişken Fon",
    description:
      "Değişken fon nedir, portföy dağılımı nasıl değişir, hisse, tahvil, döviz ve para piyasası ağırlıkları yatırımcı için ne anlatır?",
    category: "Fonlar",
    intro:
      "Değişken fonlar, piyasa koşullarına göre farklı varlık sınıfları arasında ağırlık değiştirebilen fonlardır.",
    definition:
      "Değişken fon, tek bir varlık sınıfına sabitlenmeden hisse, borçlanma aracı, para piyasası aracı, döviz, altın veya farklı araçlara yatırım yapabilen fondur.",
    whyMatters:
      "Yönetici piyasa beklentisine göre risk alabilir veya azaltabilir. Bu esneklik yatırımcı için avantaj olabilir; fakat fonun ne zaman hangi riski aldığı takip edilmelidir.",
    howToRead: [
      "Son portföy dağılımı fonun güncel riskini gösterir.",
      "Fonun kıyas ölçütü ve yatırım stratejisi getiriyi yorumlamak için önemlidir.",
      "Yönetici değişimi ve strateji sapmaları düzenli izlenmelidir.",
    ],
    watch: [
      "Değişken fonun adı düşük risk anlamına gelmez.",
      "Portföy dağılımı aylar içinde belirgin değişebilir.",
      "Fon aynı anda birden fazla piyasa riskine açık olabilir.",
      "Geçmiş getiri hangi varlık ağırlığıyla oluştu kontrol edilmelidir.",
    ],
    example:
      "Bir değişken fon yükseliş beklentisinde hisse ağırlığını artırabilir, dalgalanma döneminde para piyasası veya tahvil ağırlığını yükseltebilir.",
    checkSource:
      "Fon stratejisi, portföy dağılımı, risk değeri ve dönemsel raporları TEFAS, KAP ve fon kurucusu dokümanlarından kontrol edilmelidir.",
    commonMistake:
      "En sık hata, değişken fonu otomatik dengeli ve düşük riskli sanmaktır. Fonun güncel portföyü okunmadan risk seviyesi anlaşılamaz.",
    sourceKeys: ["tefas", "kap"],
  },
  {
    slug: "para-piyasasi-fonu-nedir",
    title: "Para Piyasası Fonu Nedir?",
    breadcrumb: "Para Piyasası Fonu",
    description:
      "Para piyasası fonu nedir, günlük nakit yönetiminde nasıl kullanılır, riskleri, getirisi, valörü ve mevduattan farkı nedir?",
    category: "Fonlar",
    intro:
      "Para piyasası fonları, kısa vadeli ve düşük riskli araçlara yatırım yaparak nakit yönetimi için kullanılan fon türlerindendir.",
    definition:
      "Para piyasası fonu; mevduat, ters repo, kısa vadeli borçlanma araçları ve benzeri düşük vadeli enstrümanlara yatırım yapan fondur. Amaç genellikle günlük likidite ve istikrarlı getiri sağlamaktır.",
    whyMatters:
      "Kısa vadeli bekleyen nakdin değerlendirilmesinde kullanışlı olabilir. Ancak banka mevduatıyla aynı ürün değildir ve fon fiyatı piyasa koşullarından etkilenebilir.",
    howToRead: [
      "Günlük getiri, yıllıklandırılmış getiri ve fonun portföy vadesi birlikte izlenir.",
      "Alım-satım valörü ve saatleri nakde dönüş hızını etkiler.",
      "Fonun yoğunlaştığı kurum ve araçlar risk analizi için kontrol edilir.",
    ],
    watch: [
      "Para piyasası fonları risksiz değildir.",
      "Getiri oranı günlük değişebilir.",
      "Valör ve son işlem saati nakit ihtiyacında önemlidir.",
      "Vergi ve stopaj koşulları net getiriyi etkiler.",
    ],
    example:
      "Kısa süre sonra kullanılacak nakit, hisse almak yerine para piyasası fonunda değerlendirilebilir. Ancak işlem saatleri ve valör mutlaka kontrol edilmelidir.",
    checkSource:
      "Fonun günlük fiyatı, getirisi, portföy dağılımı ve işlem valörü TEFAS ile fon kurucusu bilgilendirme dokümanlarından kontrol edilmelidir.",
    commonMistake:
      "En sık hata, para piyasası fonunu mevduatla birebir aynı ve tamamen garantili ürün sanmaktır.",
    sourceKeys: ["tefas", "spk"],
  },
  {
    slug: "borclanma-araclari-fonu-nedir",
    title: "Borçlanma Araçları Fonu Nedir?",
    breadcrumb: "Borçlanma Araçları Fonu",
    description:
      "Borçlanma araçları fonu nedir, tahvil ve bono yatırımı nasıl çalışır, faiz değişimi fon fiyatını nasıl etkiler?",
    category: "Fonlar",
    intro:
      "Borçlanma araçları fonları, tahvil, bono, kira sertifikası ve benzeri sabit getirili araçlara yatırım yapan fonlardır.",
    definition:
      "Bu fonlar kamu veya özel sektör borçlanma araçlarını portföylerinde taşıyabilir. Fonun getirisi faiz seviyeleri, vade yapısı, kredi riski ve piyasa likiditesinden etkilenir.",
    whyMatters:
      "Faiz düşüşlerinde uzun vadeli tahviller değer kazanabilir; faiz yükselişlerinde ise fon fiyatı baskılanabilir. Bu nedenle fonun ortalama vadesi kritik göstergedir.",
    howToRead: [
      "Portföyde kamu ve özel sektör ağırlığı ayrıştırılır.",
      "Ortalama vade ve faiz duyarlılığı fon fiyatı oynaklığını gösterir.",
      "Özel sektör borçlanma araçlarında ihraççı riski dikkate alınır.",
    ],
    watch: [
      "Faiz yükselişi uzun vadeli fonlarda değer kaybı yaratabilir.",
      "Özel sektör tahvillerinde kredi riski vardır.",
      "Döviz veya eurobond içeren fonlarda kur riski oluşabilir.",
      "Geçmiş getiri mevcut faiz ortamıyla aynı olmayabilir.",
    ],
    example:
      "Uzun vadeli tahvil ağırlıklı fon, faizler düşerken güçlü performans gösterebilir. Faizler yükseldiğinde aynı fon değer kaybedebilir.",
    checkSource:
      "Fonun portföy vadesi, borçlanma aracı dağılımı, risk değeri ve getiri geçmişi TEFAS ve KAP fon raporlarından kontrol edilmelidir.",
    commonMistake:
      "En sık hata, borçlanma araçları fonunu her koşulda sabit getirili ve fiyatı düşmeyen ürün gibi görmektir.",
    sourceKeys: ["tefas", "kap"],
  },
  {
    slug: "fonlarda-t1-t2-t3-ne-demek",
    title: "Fonlarda T+1, T+2, T+3 Ne Demek?",
    breadcrumb: "Fonlarda T+1, T+2, T+3",
    description:
      "Fonlarda T+1, T+2 ve T+3 valör ne demek, fon alım-satımında para hesaba ne zaman geçer ve yatırımcı nasıl plan yapmalı?",
    category: "Fonlar",
    intro:
      "Fon işlemlerinde T+1, T+2 ve T+3 ifadeleri, işlemin hangi gün fiyatlanacağını ve paranın ne zaman hesaba geçeceğini anlamak için kullanılır.",
    definition:
      "T işlem gününü, yanındaki sayı ise işlemden sonraki iş günü sayısını ifade eder. T+1 bir sonraki iş günü, T+2 ikinci iş günü, T+3 üçüncü iş günü anlamına gelir.",
    whyMatters:
      "Fon satışı sonrası nakde ne zaman ulaşılacağını bilmek, hisse alımı, ödeme planı veya başka fon geçişleri için önemlidir. Yanlış valör hesabı nakit sıkışıklığı yaratabilir.",
    howToRead: [
      "Alım valörü ve satım valörü ayrı ayrı kontrol edilir.",
      "Fon fiyatının hangi günün fiyatıyla oluşacağı işlem saatine göre değişebilir.",
      "Hafta sonu ve resmi tatiller valör süresini uzatabilir.",
    ],
    watch: [
      "Her fonun valörü aynı değildir.",
      "Son işlem saatinden sonra verilen emir bir sonraki işlem gününe kalabilir.",
      "Yabancı varlık içeren fonlarda valör daha uzun olabilir.",
      "Nakit ihtiyacı olan yatırımcı satış valörünü önceden planlamalıdır.",
    ],
    example:
      "T+2 satım valörlü bir fonda pazartesi verilen satış emrinin nakdi, resmi tatil yoksa çarşamba günü hesaba geçebilir.",
    checkSource:
      "Fonun alım-satım valörü, son işlem saati ve fiyatlama kuralları TEFAS fon detaylarından ve fon izahnamesinden kontrol edilmelidir.",
    commonMistake:
      "En sık hata, fon satış emri verildiği anda paranın kullanılabilir olacağını sanmaktır. Valör süresi fon türüne göre değişir.",
    sourceKeys: ["tefas", "kap"],
  },
  {
    slug: "fon-fiyati-ne-zaman-belli-olur",
    title: "Fon Fiyatı Ne Zaman Belli Olur?",
    breadcrumb: "Fon Fiyatı",
    description:
      "Fon fiyatı ne zaman açıklanır, alım-satım emirleri hangi fiyatla gerçekleşir ve fiyatlama saatleri yatırımcıyı nasıl etkiler?",
    category: "Fonlar",
    intro:
      "Yatırım fonları hisse gibi gün içinde sürekli anlık fiyatlanmayabilir. Fon fiyatı, portföy değerlemesi yapıldıktan sonra belirlenir.",
    definition:
      "Fon fiyatı, fon portföyündeki varlıkların değerlenmesi, giderlerin düşülmesi ve toplam değerin katılma payı sayısına bölünmesiyle hesaplanır. Açıklanma zamanı fon türüne göre değişir.",
    whyMatters:
      "Yatırımcı fon alırken veya satarken ekranda gördüğü son fiyatın hangi güne ait olduğunu bilmelidir. Emir, fonun izahnamesindeki fiyatlama kuralına göre gerçekleşir.",
    howToRead: [
      "Fonun fiyat açıklama saati ve işlem son saati kontrol edilir.",
      "Hisse, döviz veya yabancı varlık içeren fonlarda fiyatlama gecikmeli olabilir.",
      "Alım emrinin hangi günün fiyatıyla gerçekleşeceği valör kuralından anlaşılır.",
    ],
    watch: [
      "Son fiyat her zaman bugün alacağınız fiyat olmayabilir.",
      "Fon fiyatı gecikmeli açıklandığında getiri hesabı yanlış yapılabilir.",
      "Yabancı piyasa tatilleri fiyatlamayı etkileyebilir.",
      "Aynı gün al-sat mantığı çoğu fon için uygun değildir.",
    ],
    example:
      "Hisse fonunda gün içinde emir verildiğinde işlem genellikle fonun fiyatlama kuralına göre gün sonu değerlemesi üzerinden sonuçlanır.",
    checkSource:
      "Fon fiyat açıklama zamanı, alım-satım saatleri ve valör bilgisi TEFAS fon detayları ile fon izahnamesinden kontrol edilmelidir.",
    commonMistake:
      "En sık hata, fonun ekranda görünen son fiyatıyla anında alınıp satıldığını düşünmektir. Fon fiyatlaması fon türüne göre farklı çalışır.",
    sourceKeys: ["tefas", "kap"],
  },
  {
    slug: "fon-satinca-para-ne-zaman-hesaba-gecer",
    title: "Fon Satınca Para Ne Zaman Hesaba Geçer?",
    breadcrumb: "Fon Satış Parası",
    description:
      "Fon satışı sonrası para ne zaman hesaba geçer, T+1, T+2 ve T+3 valör nasıl hesaplanır, resmi tatiller süreyi nasıl etkiler?",
    category: "Fonlar",
    intro:
      "Fon satışı yaptıktan sonra paranın hesaba geçme zamanı fonun satım valörüne bağlıdır. Bu süre fon türüne ve işlem saatine göre değişebilir.",
    definition:
      "Fon satım emri verildiğinde fonun fiyatlama ve valör kuralı çalışır. Nakit, T+1, T+2 veya T+3 gibi belirtilen iş günü sonunda kullanılabilir hale gelebilir.",
    whyMatters:
      "Nakit ihtiyacını karşılamak veya başka yatırım aracına geçmek isteyen yatırımcı için satış valörü doğrudan planlama konusudur.",
    howToRead: [
      "Fonun satım valörü ve emir son saati birlikte kontrol edilmelidir.",
      "Resmi tatil ve hafta sonu valör süresini uzatabilir.",
      "Satış fiyatı ile nakdin hesaba geçeceği gün aynı olmayabilir.",
    ],
    watch: [
      "Acil nakit için uzun valörlü fonlar uygun olmayabilir.",
      "Emir son saatinden sonra verilen satış bir sonraki güne kalabilir.",
      "Satış tutarı kesinleşmeden başka işlem planı yapılmamalıdır.",
      "Yabancı varlıklı fonlarda valör daha uzun sürebilir.",
    ],
    example:
      "T+1 satım valörlü fonda salı günü zamanında verilen satış emrinin nakdi, resmi tatil yoksa çarşamba kullanılabilir hale gelebilir.",
    checkSource:
      "Satım valörü ve emir saatleri TEFAS, fon izahnamesi ve aracı kurum fon işlem ekranından kontrol edilmelidir.",
    commonMistake:
      "En sık hata, satış emrinin verildiği anda bakiyenin çekilebilir olacağını düşünmektir. Fonlarda nakit geçişi valöre bağlıdır.",
    sourceKeys: ["tefas"],
  },
  {
    slug: "fon-yonetim-ucreti-nasil-kesilir",
    title: "Fon Yönetim Ücreti Nasıl Kesilir?",
    breadcrumb: "Fon Yönetim Ücreti",
    description:
      "Fon yönetim ücreti nedir, yatırımcıdan nasıl kesilir, fon fiyatına nasıl yansır ve net getiri hesabında neden önemlidir?",
    category: "Fonlar",
    intro:
      "Fon yönetim ücreti, fonun profesyonel yönetimi karşılığında alınan ve fonun toplam değerine yansıtılan giderlerden biridir.",
    definition:
      "Yönetim ücreti genellikle yıllık oran olarak açıklanır, fakat fon fiyatına günlük olarak yedirilir. Yatırımcı çoğu zaman ayrı bir kesinti görmez; getiri zaten gider sonrası oluşur.",
    whyMatters:
      "Aynı kategoride iki fon benzer brüt performans üretse bile yönetim ücreti farklıysa yatırımcının net getirisi değişebilir.",
    howToRead: [
      "Yıllık yönetim ücreti oranı fon dokümanından kontrol edilir.",
      "Fon getirileri çoğunlukla ücret düşüldükten sonraki net performansı gösterir.",
      "Yüksek ücret, aktif yönetim başarısıyla desteklenmiyorsa uzun vadede getiriyi aşındırabilir.",
    ],
    watch: [
      "Yönetim ücreti dışında fon toplam giderleri de incelenmelidir.",
      "Düşük ücret tek başına iyi fon anlamına gelmez.",
      "Fonun stratejisi daha maliyetli varlıklar kullanıyorsa gider yapısı farklı olabilir.",
      "Uzun vadede küçük oran farkları bile bileşik etki yaratır.",
    ],
    example:
      "Yıllık yüzde 2 yönetim ücreti olan fon bu maliyeti günlük değerlemeye yayar. Yatırımcı hesabında ayrıca fatura görmez; fon fiyatı gider sonrası açıklanır.",
    checkSource:
      "Yönetim ücreti, toplam gider oranı ve diğer masraflar fon izahnamesi, yatırımcı bilgi formu ve TEFAS fon detaylarından kontrol edilmelidir.",
    commonMistake:
      "En sık hata, yönetim ücretinin ayrıca hesaptan kesileceğini sanmak ya da bu gideri tamamen yok saymaktır. Ücret fon fiyatının içinde çalışır.",
    sourceKeys: ["tefas", "kap"],
  },
  {
    slug: "fonlarda-performans-ucreti-nedir",
    title: "Fonlarda Performans Ücreti Nedir?",
    breadcrumb: "Fonlarda Performans Ücreti",
    description:
      "Fonlarda performans ücreti nedir, hangi koşulda kesilir, yatırımcı getirisine nasıl yansır ve fon seçerken nasıl okunmalı?",
    category: "Fonlar",
    intro:
      "Bazı fonlarda yönetim ücretine ek olarak performans ücreti bulunabilir. Bu ücret, fon belirli başarı ölçütlerini aştığında devreye girebilir.",
    definition:
      "Performans ücreti, fonun belirlenen kıyas ölçütü veya eşik getiri üzerinde performans göstermesi halinde tahsil edilebilen ek ücrettir. Hesaplama yöntemi fon dokümanında tanımlanır.",
    whyMatters:
      "Fon yüksek getiri sağladığında yatırımcının net kazancı performans ücreti nedeniyle brüt getiriden daha düşük olabilir. Bu yüzden ücret şartları okunmalıdır.",
    howToRead: [
      "Kıyas ölçütü, eşik getiri ve hesaplama dönemi incelenir.",
      "Ücretin hangi oranda ve hangi sıklıkla tahsil edildiği kontrol edilir.",
      "Geçmiş performans net getiri üzerinden değerlendirilmelidir.",
    ],
    watch: [
      "Performans ücreti olan fonlar kötü değildir; hesaplama yöntemi önemlidir.",
      "Yüksek getiri sonrası ücret kesintisi net kazancı azaltabilir.",
      "Kıyas ölçütü kolay aşılabilir seçilmişse yatırımcı açısından maliyet artabilir.",
      "Ücret yapısı anlaşılmadan fon karşılaştırması yapılmamalıdır.",
    ],
    example:
      "Fon kıyas ölçütünü belirlenen oranın üzerinde aşarsa, aşan getirinin bir bölümü performans ücreti olarak fon varlığından kesilebilir.",
    checkSource:
      "Performans ücreti şartları fon izahnamesi, içtüzük, yatırımcı bilgi formu ve KAP fon duyurularından kontrol edilmelidir.",
    commonMistake:
      "En sık hata, performans ücreti ifadesini görüp kesintinin her zaman yapılacağını sanmaktır. Ücret yalnızca tanımlanan koşullar oluşursa uygulanır.",
    sourceKeys: ["kap", "tefas"],
  },
  {
    slug: "fon-portfoyunde-hangi-hisseler-var",
    title: "Fon Portföyünde Hangi Hisseler Var Nasıl Öğrenilir?",
    breadcrumb: "Fon Portföyündeki Hisseler",
    description:
      "Bir fonun portföyünde hangi hisseler var, TEFAS ve KAP üzerinden fon içeriği nasıl okunur, portföy dağılımı neden önemlidir?",
    category: "Fonlar",
    intro:
      "Fonun adını bilmek tek başına yeterli değildir. Yatırımcı fonun hangi hisseleri, sektörleri ve varlıkları taşıdığını da kontrol etmelidir.",
    definition:
      "Fon portföy içeriği, fonun belirli dönemde sahip olduğu hisse, tahvil, nakit, döviz veya diğer varlıkların dağılımını gösterir. Bu bilgiler TEFAS ve KAP raporlarında izlenebilir.",
    whyMatters:
      "Portföy içeriği fonun riskini ve hangi piyasa hareketlerinden etkileneceğini anlatır. İki fon aynı kategoride olsa bile taşıdığı hisseler çok farklı olabilir.",
    howToRead: [
      "En büyük hisse pozisyonları ve sektör ağırlıkları incelenir.",
      "Portföy tarihinin güncel olup olmadığı kontrol edilir.",
      "Fonun tek hisse veya tek sektöre yoğunlaşıp yoğunlaşmadığına bakılır.",
    ],
    watch: [
      "Portföy açıklamaları gecikmeli olabilir.",
      "Fon yöneticisi portföyü rapor tarihinden sonra değiştirmiş olabilir.",
      "Yüksek hisse yoğunlaşması getiri kadar riski de artırır.",
      "Fon portföyü yatırım tavsiyesi listesi gibi okunmamalıdır.",
    ],
    example:
      "Bir hisse fonunda bankacılık ağırlığı yüksekse banka endeksindeki sert hareket fon fiyatını doğrudan etkileyebilir.",
    checkSource:
      "Fon portföy dağılımı TEFAS fon detaylarından, KAP fon portföy raporlarından ve fon kurucusunun dönemsel raporlarından kontrol edilmelidir.",
    commonMistake:
      "En sık hata, fonun portföyünde görülen bir hisseyi fon kesin almaya devam ediyor diye yorumlamaktır. Rapor tarihi ile bugünkü portföy farklı olabilir.",
    sourceKeys: ["tefas", "kap"],
  },
  {
    slug: "fon-bir-hissede-yuzde-5-payi-gecerse",
    title: "Fon Bir Hissede %5 Payı Geçerse Ne Olur?",
    breadcrumb: "Fonlarda %5 Pay Eşiği",
    description:
      "Bir fonun hissede yüzde 5 payı geçmesi ne anlama gelir, KAP bildirimi, ortaklık etkisi ve yatırımcı algısı nasıl yorumlanır?",
    category: "Fonlar",
    intro:
      "Fonların bir şirkette anlamlı pay oranına ulaşması piyasada dikkat çeker. Ancak bu durumun hukuki bildirim, yatırımcı algısı ve likidite etkisi ayrı okunmalıdır.",
    definition:
      "Bir fon veya fon grubu bir şirkette belirli pay ve oy hakkı eşiklerini aştığında kamuyu aydınlatma yükümlülükleri doğabilir. Yüzde 5 seviyesi yatırımcıların yakından izlediği eşiklerden biridir.",
    whyMatters:
      "Kurumsal yatırımcı ilgisi hisse algısını olumlu etkileyebilir; fakat fonun ileride satış yapması da arz baskısı yaratabilir. Bu nedenle eşik geçişi tek yönlü sinyal değildir.",
    howToRead: [
      "Bildirimde alım mı satım mı yapıldığı ve yeni oran okunmalıdır.",
      "Fonun uzun vadeli yatırımcı mı yoksa daha aktif al-sat yapan yapı mı olduğu incelenir.",
      "Hissenin fiili dolaşım büyüklüğü ve likiditesi etkiyi değiştirebilir.",
    ],
    watch: [
      "Yüzde 5 geçildi diye fiyatın mutlaka yükseleceği varsayılmamalıdır.",
      "Fonun sonraki satışları fiyat üzerinde baskı oluşturabilir.",
      "Tek fon ile aynı yöneticiye bağlı fon grubu ayrımı kontrol edilmelidir.",
      "KAP bildirimi tarihi ile gerçekleşen işlem tarihi farklı olabilir.",
    ],
    example:
      "Bir fonun küçük fiili dolaşıma sahip hissede yüzde 5 üzerine çıkması arz-talep dengesinde dikkat çekebilir; ancak sonraki çıkış kararı aynı hissede baskı yaratabilir.",
    checkSource:
      "Pay oranı değişiklikleri ve eşik bildirimleri KAP özel durum açıklamalarından ve fon portföy raporlarından kontrol edilmelidir.",
    commonMistake:
      "En sık hata, fon alımını otomatik hedef fiyat sinyali gibi okumaktır. Fonun stratejisi ve sonraki hareketleri bilinmeden kesin yorum yapılamaz.",
    sourceKeys: ["kap", "tefas"],
  },
  {
    slug: "fon-toplam-degeri-ile-fon-fiyati-farki",
    title: "Fon Toplam Değeri ile Fon Fiyatı Arasındaki Fark",
    breadcrumb: "Fon Toplam Değeri ve Fon Fiyatı",
    description:
      "Fon toplam değeri ile fon fiyatı arasındaki fark nedir, katılma payı sayısı hesabı nasıl çalışır ve yatırımcı neyi takip etmeli?",
    category: "Fonlar",
    intro:
      "Fon ekranlarında fon fiyatı ve fon toplam değeri birlikte görünür. Bu iki veri farklı şeyleri anlatır ve karıştırılmamalıdır.",
    definition:
      "Fon toplam değeri, fondaki tüm varlıkların net toplam değeridir. Fon fiyatı ise bu toplam değerin dolaşımdaki katılma payı sayısına bölünmesiyle hesaplanır.",
    whyMatters:
      "Fon fiyatı yatırımcının bir pay için ödediği değeri gösterirken fon toplam değeri fonun büyüklüğünü anlatır. Para girişi çıkışı ve performans analizi için ikisi birlikte okunur.",
    howToRead: [
      "Fon fiyatındaki artış yatırımcı getirisini gösterir.",
      "Fon toplam değerindeki artış hem performanstan hem yeni para girişinden kaynaklanabilir.",
      "Katılma payı sayısı değişimi yatırımcı talebini anlamaya yardımcı olur.",
    ],
    watch: [
      "Fon toplam değeri arttı diye fon fiyatı aynı oranda artmak zorunda değildir.",
      "Büyük fon her zaman daha iyi fon anlamına gelmez.",
      "Küçük fonlarda likidite ve yoğunlaşma riski incelenmelidir.",
      "Para girişi ile piyasa getirisi ayrıştırılmalıdır.",
    ],
    example:
      "Fon toplam değeri yeni yatırımcı girişiyle büyüyebilir; fakat fon fiyatı aynı gün düşmüş olabilir. Bu durumda fon büyümüş ama yatırımcı getirisi negatif olabilir.",
    checkSource:
      "Fon toplam değeri, fon fiyatı, tedavüldeki pay sayısı ve portföy bilgileri TEFAS ve KAP fon raporlarından kontrol edilmelidir.",
    commonMistake:
      "En sık hata, fon toplam değeri artışını doğrudan fonun yatırımcıya kazandırdığı getiri sanmaktır. Getiri fon fiyatı üzerinden okunur.",
    sourceKeys: ["tefas", "kap"],
  },
  {
    slug: "bist-30-nedir",
    title: "BIST 30 Nedir?",
    breadcrumb: "BIST 30",
    description:
      "BIST 30 endeksi nedir, hangi hisselerden oluşur, likidite, piyasa değeri ve vadeli işlemler açısından yatırımcıya ne anlatır?",
    category: "Endeks ve Oranlar",
    intro:
      "BIST 30, Borsa İstanbul'da işlem gören en büyük ve en likit şirketleri temsil eden temel pay endekslerinden biridir.",
    definition:
      "BIST 30 endeksi, belirli dönemlerde seçilen 30 paydan oluşur. Endekse dahil paylar piyasa değeri, fiili dolaşım ve işlem hacmi gibi kriterlere göre değerlendirilir.",
    whyMatters:
      "BIST 30 hisseleri kurumsal yatırımcı ilgisi, yüksek likidite ve vadeli işlem piyasası bağlantısı nedeniyle yatırımcıların yakından izlediği hisselerdir.",
    howToRead: [
      "Endeks içindeki ağırlığı yüksek hisseler genel endeks yönünü daha fazla etkileyebilir.",
      "BIST 30 kapsamı dönemsel olarak değişebilir.",
      "Likidite yüksek olsa da hisse bazlı risk ortadan kalkmaz.",
    ],
    watch: [
      "BIST 30 hissesi olmak güvenli yatırım garantisi değildir.",
      "Endeks değişiklikleri fon akımlarını etkileyebilir.",
      "Ağırlığı yüksek hisseler endeks hareketini domine edebilir.",
      "Vadeli işlemler nedeniyle oynaklık dönemsel artabilir.",
    ],
    example:
      "BIST 30 içindeki büyük bankalarda güçlü hareket olursa endeksin genel yönü bu hisselerden belirgin etkilenebilir.",
    checkSource:
      "BIST 30 kapsamı, dönemsel değişiklikler ve endeks duyuruları Borsa İstanbul endeks sayfalarından kontrol edilmelidir.",
    commonMistake:
      "En sık hata, BIST 30'a giren her hissenin mutlaka yükselmesi gerektiğini düşünmektir. Endeks üyeliği tek başına fiyat garantisi değildir.",
    sourceKeys: ["bistEndeks", "bistPay"],
  },
  {
    slug: "bist-50-nedir",
    title: "BIST 50 Nedir?",
    breadcrumb: "BIST 50",
    description:
      "BIST 50 endeksi nedir, BIST 30 ve BIST 100'den farkı ne, endeks kapsamı yatırımcı tarafından nasıl yorumlanmalı?",
    category: "Endeks ve Oranlar",
    intro:
      "BIST 50, Borsa İstanbul'da büyük ve likit şirketlerin daha geniş bir grubunu izlemek için kullanılan pay endeksidir.",
    definition:
      "BIST 50 endeksi, BIST 30'a göre daha geniş kapsamlıdır ve 50 paydan oluşur. Seçim sürecinde piyasa değeri, fiili dolaşım ve işlem hacmi gibi ölçütler dikkate alınır.",
    whyMatters:
      "BIST 50, büyük ölçekli şirketleri izlerken BIST 30'a göre daha fazla hisseyi kapsar. Bu nedenle endeks fonları ve piyasa karşılaştırmaları için önemlidir.",
    howToRead: [
      "BIST 50 kapsamındaki şirketler piyasanın büyük ölçekli bölümünü temsil eder.",
      "BIST 30 dışındaki 20 hisse ek takip fırsatı sunabilir.",
      "Endeks değişiklik dönemlerinde giriş-çıkış adayları izlenebilir.",
    ],
    watch: [
      "Endeks üyeliği tek başına ucuzluk veya kalite göstergesi değildir.",
      "Likidite iyi olsa bile bilanço riski devam eder.",
      "Endeks ağırlığı düşük hisselerin etkisi sınırlı kalabilir.",
      "Dönemsel revizyonlar yatırımcı ilgisini geçici artırabilir.",
    ],
    example:
      "BIST 50'ye yeni giren bir hisse endeks fonlarının ilgisini çekebilir; ancak kalıcı performans şirketin finansallarıyla belirlenir.",
    checkSource:
      "BIST 50 kapsamı ve dönemsel revizyon duyuruları Borsa İstanbul endeks duyurularından kontrol edilmelidir.",
    commonMistake:
      "En sık hata, endekse dahil olan hisseyi otomatik güçlü bilanço göstergesi gibi okumaktır. Endeks kriterleri daha çok büyüklük ve likidite tarafını ölçer.",
    sourceKeys: ["bistEndeks"],
  },
  {
    slug: "bist-100-nedir",
    title: "BIST 100 Nedir?",
    breadcrumb: "BIST 100",
    description:
      "BIST 100 endeksi nedir, hangi hisseleri kapsar, Türkiye borsasının genel yönünü yorumlarken nasıl kullanılmalı?",
    category: "Endeks ve Oranlar",
    intro:
      "BIST 100, Türkiye pay piyasasının en çok takip edilen ana göstergelerinden biridir. Piyasanın genel yönü çoğu zaman bu endeks üzerinden konuşulur.",
    definition:
      "BIST 100 endeksi, Borsa İstanbul'da işlem gören seçilmiş 100 paydan oluşur. Endekse girişte büyüklük, fiili dolaşım ve işlem hacmi gibi kriterler dikkate alınır.",
    whyMatters:
      "BIST 100 yükseldiğinde piyasa geneli için olumlu algı oluşabilir; fakat her hisse aynı yönde hareket etmek zorunda değildir. Endeks bir ortalama göstergedir.",
    howToRead: [
      "Endeks hareketi piyasanın genel risk iştahını gösterir.",
      "Ağırlığı yüksek şirketler endeks performansını daha fazla etkiler.",
      "Sektör ayrışmaları endeksin altında farklı fırsat ve riskler yaratabilir.",
    ],
    watch: [
      "BIST 100 yükselirken portföydeki hisse düşebilir.",
      "Endeks ağırlıkları performans yorumunda önemlidir.",
      "Dolar bazlı endeks görünümü ayrıca incelenebilir.",
      "Sadece endeks yönüne bakarak hisse seçilmemelidir.",
    ],
    example:
      "Bankacılık ve sanayi hisseleri farklı yönde hareket ederse BIST 100 yatay kalabilir; fakat portföylerde sonuçlar çok farklı olabilir.",
    checkSource:
      "BIST 100 kapsamı, endeks verileri ve dönemsel duyurular Borsa İstanbul resmi endeks sayfalarından kontrol edilmelidir.",
    commonMistake:
      "En sık hata, BIST 100'ü tüm hisseler aynı performansı gösteriyor gibi okumaktır. Endeks, ağırlıklı ortalama bir göstergedir.",
    sourceKeys: ["bistEndeks", "bistPay"],
  },
  {
    slug: "bir-hisse-bist-100e-nasil-girer",
    title: "Bir Hisse BIST 100’e Nasıl Girer?",
    breadcrumb: "BIST 100'e Giriş",
    description:
      "Bir hissenin BIST 100'e girme süreci, fiili dolaşım, piyasa değeri, işlem hacmi ve dönemsel endeks değişiklikleri nasıl işler?",
    category: "Endeks ve Oranlar",
    intro:
      "Bir hissenin BIST 100'e girmesi yatırımcı ilgisini artırabilir. Ancak bu süreç tek bir kriterle değil, dönemsel değerlendirme kurallarıyla yürür.",
    definition:
      "BIST 100'e girişte payların fiili dolaşımdaki piyasa değeri, işlem hacmi ve endeks kural setinde belirtilen uygunluk ölçütleri değerlendirilir. Endeks kapsamı dönemsel olarak güncellenir.",
    whyMatters:
      "Endeks kapsamına giren hisseler fon ve kurumsal yatırımcı takibinde daha görünür hale gelebilir. Bu durum likidite ve algı üzerinde etkili olabilir.",
    howToRead: [
      "Fiili dolaşım oranı ve piyasa değeri birlikte izlenir.",
      "İşlem hacmindeki süreklilik tek günlük hacim sıçramasından daha anlamlıdır.",
      "Borsa İstanbul'un dönemsel endeks duyuruları resmi sonuç kaynağıdır.",
    ],
    watch: [
      "Endekse girme beklentisi önceden fiyatlanabilir.",
      "Giriş sonrası kar satışı görülebilir.",
      "Endeksten çıkarılma riski de dönemsel olarak takip edilmelidir.",
      "Sadece söylentiye göre işlem yapılmamalıdır.",
    ],
    example:
      "Piyasa değeri ve hacmi hızla artan bir hisse dönemsel değerlendirmede BIST 100 adayı olabilir; fakat resmi karar Borsa İstanbul duyurusuyla netleşir.",
    checkSource:
      "Endeks kapsam değişiklikleri, aday listeleri ve kural setleri Borsa İstanbul endeks duyurularından kontrol edilmelidir.",
    commonMistake:
      "En sık hata, sosyal medyada dolaşan aday listelerini kesin karar gibi kabul etmektir. Endeks üyeliği resmi duyuru ile netleşir.",
    sourceKeys: ["bistEndeks"],
  },
  {
    slug: "fiili-dolasim-orani-nedir",
    title: "Fiili Dolaşım Oranı Nedir?",
    breadcrumb: "Fiili Dolaşım Oranı",
    description:
      "Fiili dolaşım oranı nedir, halka açık pay miktarı ve endeks hesaplarında neden önemlidir, yatırımcı bu oranı nasıl yorumlamalı?",
    category: "Endeks ve Oranlar",
    intro:
      "Fiili dolaşım oranı, bir şirketin borsada serbestçe işlem görebilen paylarının sermayeye oranını anlatır.",
    definition:
      "Fiili dolaşım oranı, hakim ortak, imtiyazlı veya kilitli paylar dışında piyasada alınıp satılabilen payların toplam sermayeye oranıdır. Endeks ağırlıkları ve likidite yorumunda kullanılır.",
    whyMatters:
      "Fiili dolaşım düşükse piyasadaki pay miktarı sınırlı olabilir; bu da oynaklığı artırabilir. Yüksek fiili dolaşım ise likiditeyi destekleyebilir.",
    howToRead: [
      "Fiili dolaşımdaki pay sayısı ve oran birlikte incelenir.",
      "Endeks hesaplarında fiili dolaşımdaki piyasa değeri önemlidir.",
      "Ortak satışları ve sermaye işlemleri oranı değiştirebilir.",
    ],
    watch: [
      "Halka açıklık oranı ile fiili dolaşım aynı şey olmayabilir.",
      "Düşük fiili dolaşım sert fiyat hareketlerine zemin hazırlayabilir.",
      "Büyük ortak satışları arz dengesini değiştirebilir.",
      "Güncel oran resmi kaynaklardan kontrol edilmelidir.",
    ],
    example:
      "Sermayesi büyük olan bir şirketin fiili dolaşımı düşükse borsada işlem gören pay miktarı sınırlı kalabilir ve fiyat daha oynak olabilir.",
    checkSource:
      "Fiili dolaşım oranı KAP şirket genel bilgileri, MKK verileri ve Borsa İstanbul endeks hesaplama kaynaklarından kontrol edilebilir.",
    commonMistake:
      "En sık hata, şirketin toplam piyasa değerini likidite göstergesi sanmaktır. Likidite için fiili dolaşımdaki pay miktarı da önemlidir.",
    sourceKeys: ["kap", "mkk", "bistEndeks"],
  },
  {
    slug: "halka-aciklik-orani-nedir",
    title: "Halka Açıklık Oranı Nedir?",
    breadcrumb: "Halka Açıklık Oranı",
    description:
      "Halka açıklık oranı nedir, şirket sermayesinin ne kadarı borsada işlem görebilir ve yatırımcı bu oranı nasıl değerlendirmeli?",
    category: "Endeks ve Oranlar",
    intro:
      "Halka açıklık oranı, şirket paylarının ne kadarının yatırımcıların alım satımına konu olabildiğini gösteren temel göstergelerden biridir.",
    definition:
      "Halka açıklık oranı, halka arz edilmiş ve borsada işlem görebilecek payların şirket sermayesine oranını ifade eder. Fiili dolaşım kavramıyla yakın ilişkili olsa da hesap detayları farklılaşabilir.",
    whyMatters:
      "Halka açıklık oranı likidite, ortaklık yapısı ve fiyat oynaklığı açısından önemlidir. Çok düşük oranlarda fiyat hareketleri daha sert olabilir.",
    howToRead: [
      "Halka açık pay miktarı, sermaye ve ana ortak payı birlikte incelenir.",
      "Yeni ortak satışları oranı artırabilir.",
      "Kilitli payların serbest kalma tarihleri arz baskısı yaratabilir.",
    ],
    watch: [
      "Halka açıklık yüksek diye şirket otomatik iyi değildir.",
      "Düşük halka açıklık manipülasyon riskini artırabilir.",
      "Ortak satışları kısa vadeli arz yaratabilir.",
      "Endeks ağırlığı fiili dolaşımdaki değerle ilişkili olabilir.",
    ],
    example:
      "Yüzde 20 halka açıklığa sahip şirkette payların büyük kısmı hakim ortaklarda kalır. Bu durum piyasadaki serbest pay miktarını sınırlayabilir.",
    checkSource:
      "Halka açıklık oranı şirket izahnamesi, KAP şirket genel bilgileri ve Borsa İstanbul veri kaynaklarından kontrol edilmelidir.",
    commonMistake:
      "En sık hata, halka açıklık oranını şirketin yatırım kalitesiyle doğrudan eşitlemektir. Oran yalnızca ortaklık ve likidite yapısını anlatır.",
    sourceKeys: ["kap", "bistPay"],
  },
  {
    slug: "piyasa-degeri-nedir",
    title: "Piyasa Değeri Nedir?",
    breadcrumb: "Piyasa Değeri",
    description:
      "Piyasa değeri nedir, hisse fiyatı ve sermaye ile nasıl hesaplanır, şirket büyüklüğü ve değerleme açısından nasıl yorumlanır?",
    category: "Endeks ve Oranlar",
    intro:
      "Piyasa değeri, borsadaki şirketlerin büyüklüğünü karşılaştırmak için en çok kullanılan göstergelerden biridir.",
    definition:
      "Piyasa değeri, şirketin hisse fiyatı ile toplam pay sayısının çarpılmasıyla hesaplanır. Bu değer, piyasanın şirket için biçtiği toplam değeri gösterir.",
    whyMatters:
      "Şirketin büyük, orta veya küçük ölçekli olup olmadığını anlamaya yardımcı olur. Ancak piyasa değeri tek başına ucuzluk veya pahalılık göstergesi değildir.",
    howToRead: [
      "Piyasa değeri sektör karşılaştırmasıyla anlam kazanır.",
      "Fiili dolaşımdaki piyasa değeri likidite ve endeks hesaplarında ayrıca önemlidir.",
      "Borçluluk yüksekse firma değeri gibi ek göstergeler de incelenmelidir.",
    ],
    watch: [
      "Düşük piyasa değeri her zaman ucuz hisse anlamına gelmez.",
      "Yüksek piyasa değeri riskin düşük olduğunu garanti etmez.",
      "Sermaye artırımı sonrası pay sayısı değişebilir.",
      "Fiyat hareketleri piyasa değerini anlık değiştirir.",
    ],
    example:
      "1 milyar adet payı olan şirketin hisse fiyatı 20 TL ise piyasa değeri 20 milyar TL olur.",
    checkSource:
      "Hisse fiyatı Borsa İstanbul verilerinden, sermaye ve pay sayısı KAP şirket genel bilgilerinden kontrol edilmelidir.",
    commonMistake:
      "En sık hata, hisse fiyatı düşük olan şirketi piyasa değeri düşük sanmaktır. Önemli olan fiyat ile pay sayısının birlikte çarpılmasıdır.",
    sourceKeys: ["kap", "bistPay"],
  },
  {
    slug: "pddd-nedir",
    title: "PD/DD Nedir?",
    breadcrumb: "PD/DD",
    description:
      "PD/DD oranı nedir, piyasa değeri ve defter değeri nasıl karşılaştırılır, banka ve sanayi hisselerinde nasıl yorumlanmalı?",
    category: "Endeks ve Oranlar",
    intro:
      "PD/DD oranı, şirketin piyasa değerini özkaynaklarına göre yorumlamak için kullanılan temel değerleme oranlarından biridir.",
    definition:
      "PD/DD, piyasa değerinin defter değerine yani özkaynaklara bölünmesiyle hesaplanır. Oran, piyasanın şirketin özkaynaklarına kaç kat değer verdiğini gösterir.",
    whyMatters:
      "Özellikle banka, holding ve varlık ağırlıklı şirketlerde değerleme karşılaştırması için kullanılır. Ancak karlılık ve aktif kalitesiyle birlikte okunmalıdır.",
    howToRead: [
      "Düşük PD/DD ucuzluk sinyali olabilir ama tek başına yeterli değildir.",
      "Yüksek özkaynak karlılığı daha yüksek PD/DD oranını destekleyebilir.",
      "Sektör ortalamasıyla karşılaştırma yapılmalıdır.",
    ],
    watch: [
      "Zayıf karlılığa sahip şirket düşük PD/DD ile kalabilir.",
      "Özkaynak kalitesi ve yeniden değerleme etkileri incelenmelidir.",
      "Negatif özkaynakta oran anlamlı olmayabilir.",
      "Farklı sektörleri aynı PD/DD ile kıyaslamak yanıltıcıdır.",
    ],
    example:
      "Piyasa değeri 30 milyar TL, özkaynakları 15 milyar TL olan şirketin PD/DD oranı 2 olur.",
    checkSource:
      "Piyasa değeri güncel borsa verilerinden, özkaynak bilgisi şirketin KAP finansal tablolarından kontrol edilmelidir.",
    commonMistake:
      "En sık hata, düşük PD/DD oranını otomatik alım fırsatı gibi görmektir. Şirketin karlılığı ve özkaynak kalitesi incelenmeden karar verilmemelidir.",
    sourceKeys: ["kap", "bistPay"],
  },
  {
    slug: "fk-orani-nedir",
    title: "F/K Oranı Nedir?",
    breadcrumb: "F/K Oranı",
    description:
      "F/K oranı nedir, fiyat kazanç oranı nasıl hesaplanır, düşük veya yüksek F/K yatırımcı için ne anlatır ve hangi hatalardan kaçınılmalı?",
    category: "Endeks ve Oranlar",
    intro:
      "F/K oranı, yatırımcıların bir şirketin karına göre piyasa fiyatını anlamak için kullandığı en yaygın değerleme oranlarından biridir.",
    definition:
      "F/K oranı, şirketin piyasa değerinin net kara bölünmesiyle veya hisse fiyatının hisse başına kara bölünmesiyle hesaplanır. Oran, yatırımcının şirket karının kaç katını ödediğini gösterir.",
    whyMatters:
      "Düşük F/K ucuzluk işareti olabilir; yüksek F/K ise büyüme beklentisini yansıtabilir. Ancak sektör, karın sürdürülebilirliği ve tek seferlik gelirler dikkate alınmalıdır.",
    howToRead: [
      "Son 12 ay karı ve gelecek dönem beklentisi ayrı değerlendirilir.",
      "Sektör ortalamasıyla kıyaslama yapılır.",
      "Tek seferlik karlar oranı geçici olarak düşük gösterebilir.",
    ],
    watch: [
      "Zarar eden şirkette F/K anlamlı olmayabilir.",
      "Düşük F/K değer tuzağı olabilir.",
      "Yüksek büyüme şirketlerinde F/K uzun süre yüksek kalabilir.",
      "Enflasyon ve muhasebe etkileri karı bozabilir.",
    ],
    example:
      "Piyasa değeri 40 milyar TL, yıllık net karı 5 milyar TL olan şirketin F/K oranı 8 olur.",
    checkSource:
      "Net kar KAP finansal tablolarından, piyasa değeri güncel borsa verilerinden kontrol edilmelidir.",
    commonMistake:
      "En sık hata, düşük F/K oranını her zaman ucuzluk sanmaktır. Karın kalitesi ve sürdürülebilirliği incelenmezse oran yanıltabilir.",
    sourceKeys: ["kap", "bistPay"],
  },
  {
    slug: "fd-favok-nedir",
    title: "FD/FAVÖK Nedir?",
    breadcrumb: "FD/FAVÖK",
    description:
      "FD/FAVÖK oranı nedir, firma değeri ve operasyonel karlılık nasıl karşılaştırılır, borçlu şirketlerde neden önemlidir?",
    category: "Endeks ve Oranlar",
    intro:
      "FD/FAVÖK, şirket değerini operasyonel karlılık gücüne göre ölçmek için kullanılan önemli çarpanlardan biridir.",
    definition:
      "FD/FAVÖK oranı, firma değerinin faiz, amortisman ve vergi öncesi kara bölünmesiyle hesaplanır. Firma değeri genellikle piyasa değeri artı net borç şeklinde düşünülür.",
    whyMatters:
      "Borçluluğu farklı şirketleri karşılaştırırken yalnızca piyasa değerine bakmak yetmez. FD/FAVÖK, borç etkisini de hesaba katar.",
    howToRead: [
      "Aynı sektördeki şirketlerle karşılaştırma yapılmalıdır.",
      "FAVÖK marjı ve net borç seviyesi birlikte incelenir.",
      "Tek seferlik operasyonel etkiler oranı bozabilir.",
    ],
    watch: [
      "Negatif FAVÖK varsa oran anlamlı olmayabilir.",
      "Yüksek borç firma değerini yükseltir.",
      "Sermaye yoğun sektörlerde amortisman etkisi ayrıca okunmalıdır.",
      "Farklı muhasebe uygulamaları karşılaştırmayı zorlaştırabilir.",
    ],
    example:
      "Firma değeri 60 milyar TL, yıllık FAVÖK 10 milyar TL ise FD/FAVÖK oranı 6 olur.",
    checkSource:
      "FAVÖK finansal tablo notlarından veya şirket sunumlarından; net borç ve piyasa değeri KAP verileriyle kontrol edilmelidir.",
    commonMistake:
      "En sık hata, FD/FAVÖK oranını sektör farkı gözetmeden her şirkete aynı ölçüde uygulamaktır.",
    sourceKeys: ["kap", "bistPay"],
  },
  {
    slug: "ozsermaye-karliligi-nedir",
    title: "Özsermaye Karlılığı Nedir?",
    breadcrumb: "Özsermaye Karlılığı",
    description:
      "Özsermaye karlılığı nedir, ROE nasıl hesaplanır, şirketin sermayesini verimli kullanıp kullanmadığı nasıl yorumlanır?",
    category: "Endeks ve Oranlar",
    intro:
      "Özsermaye karlılığı, şirketin ortaklarına ait sermayeyi ne kadar verimli kullandığını gösteren temel karlılık oranıdır.",
    definition:
      "Özsermaye karlılığı, net karın özkaynaklara bölünmesiyle hesaplanır. Oran, şirketin özkaynakları üzerinden ne kadar kar ürettiğini gösterir.",
    whyMatters:
      "Yüksek ve sürdürülebilir özsermaye karlılığı, şirketin sermayesini verimli kullandığını gösterebilir. Ancak kaldıraçla şişen karlılık ayrıca incelenmelidir.",
    howToRead: [
      "Net karın sürdürülebilir olup olmadığı kontrol edilir.",
      "Özkaynak seviyesi ve borçluluk birlikte incelenir.",
      "Sektör ortalamasıyla karşılaştırma yapılır.",
    ],
    watch: [
      "Düşük özkaynak oranı yapay olarak yüksek ROE yaratabilir.",
      "Tek seferlik karlar oranı şişirebilir.",
      "Negatif özkaynakta oran anlamını kaybedebilir.",
      "Enflasyon muhasebesi dönemlerinde karşılaştırma dikkat ister.",
    ],
    example:
      "Net karı 2 milyar TL, özkaynakları 10 milyar TL olan şirketin özsermaye karlılığı yüzde 20 olur.",
    checkSource:
      "Net kar ve özkaynak bilgisi KAP finansal tablolarından, şirket dönemsel raporlarından ve dipnotlardan kontrol edilmelidir.",
    commonMistake:
      "En sık hata, yüksek özsermaye karlılığını borçluluk etkisini incelemeden kalite göstergesi kabul etmektir.",
    sourceKeys: ["kap"],
  },
  {
    slug: "net-borc-favok-nedir",
    title: "Net Borç/FAVÖK Nedir?",
    breadcrumb: "Net Borç/FAVÖK",
    description:
      "Net Borç/FAVÖK oranı nedir, şirketin borç ödeme kapasitesi nasıl ölçülür ve yatırımcı bu oranı hangi sınırlarla yorumlamalı?",
    category: "Endeks ve Oranlar",
    intro:
      "Net Borç/FAVÖK, şirketin operasyonel kar gücüyle net borcunu kaç yılda karşılayabileceğini yaklaşık gösteren borçluluk oranıdır.",
    definition:
      "Net borç, finansal borçlardan nakit ve nakit benzerlerinin düşülmesiyle bulunur. Bu tutarın FAVÖK'e bölünmesi Net Borç/FAVÖK oranını verir.",
    whyMatters:
      "Oran yükseldikçe borçluluk baskısı artabilir. Faizlerin yüksek olduğu dönemlerde bu oran yatırımcılar için daha kritik hale gelir.",
    howToRead: [
      "Aynı sektör içindeki şirketlerle karşılaştırma yapılmalıdır.",
      "FAVÖK'ün tek seferlik etkilerden arındırılmış olması önemlidir.",
      "Borç vadesi, döviz borcu ve faiz gideri oranla birlikte okunmalıdır.",
    ],
    watch: [
      "Negatif FAVÖK varsa oran sağlıklı değildir.",
      "Döviz borcu kur artışında riski büyütebilir.",
      "Yüksek nakit bazı şirketlerde net borcu düşük gösterebilir.",
      "Büyüme yatırımı yapan şirketlerde dönemsel borç artışı görülebilir.",
    ],
    example:
      "Net borcu 12 milyar TL, yıllık FAVÖK'ü 4 milyar TL olan şirketin Net Borç/FAVÖK oranı 3 olur.",
    checkSource:
      "Finansal borç, nakit, FAVÖK ve döviz pozisyonu KAP finansal tabloları, dipnotlar ve faaliyet raporlarından kontrol edilmelidir.",
    commonMistake:
      "En sık hata, oranı tek başına kırmızı çizgi gibi kullanmaktır. Sektör, yatırım dönemi ve nakit akışı birlikte değerlendirilmelidir.",
    sourceKeys: ["kap"],
  },
  {
    slug: "gelir-tablosu-nasil-okunur",
    title: "Gelir Tablosu Nasıl Okunur?",
    breadcrumb: "Gelir Tablosu",
    description:
      "Gelir tablosu nasıl okunur, satış, brüt kar, FAVÖK, faaliyet karı ve net kar yatırımcı açısından nasıl yorumlanır?",
    category: "Finansal Tablolar",
    intro:
      "Gelir tablosu, şirketin belirli dönemde ne kadar satış yaptığını, hangi maliyetlerle karşılaştığını ve sonuçta ne kadar kar ürettiğini gösterir.",
    definition:
      "Gelir tablosunda hasılat, satışların maliyeti, brüt kar, faaliyet giderleri, faaliyet karı, finansman giderleri, vergi ve net kar kalemleri yer alır.",
    whyMatters:
      "Şirketin büyümesi yalnızca satış artışıyla değil, bu satıştan ne kadar karlılık ürettiğiyle anlaşılır. Marjlar ve gider kontrolü bu yüzden önemlidir.",
    howToRead: [
      "Hasılat büyümesi ile brüt kar marjı birlikte incelenir.",
      "Faaliyet karı şirketin ana işinden para kazanıp kazanmadığını gösterir.",
      "Net kar finansman gideri, vergi ve tek seferlik kalemlerden etkilenebilir.",
    ],
    watch: [
      "Tek dönemlik yüksek kar kalıcı olmayabilir.",
      "Satış artarken marj düşüyorsa kalite sorgulanmalıdır.",
      "Kur farkı ve finansman gideri net karı sert etkileyebilir.",
      "Mevsimsellik olan sektörlerde yıllık karşılaştırma yapılmalıdır.",
    ],
    example:
      "Satışları yüzde 50 artan şirketin brüt karı sadece yüzde 10 artıyorsa maliyet baskısı var demektir. Bu durum net karı sınırlayabilir.",
    checkSource:
      "Gelir tablosu, dipnotlar, faaliyet raporu ve bağımsız denetim raporu KAP finansal bildirimlerinden kontrol edilmelidir.",
    commonMistake:
      "En sık hata, sadece net kara bakmaktır. Net karın hangi operasyonel ve finansal kalemlerle oluştuğu okunmadan tablo eksik yorumlanır.",
    sourceKeys: ["kap"],
  },
  {
    slug: "nakit-akis-tablosu-nasil-okunur",
    title: "Nakit Akış Tablosu Nasıl Okunur?",
    breadcrumb: "Nakit Akış Tablosu",
    description:
      "Nakit akış tablosu nasıl okunur, faaliyet, yatırım ve finansman nakit akışları şirket sağlığı için ne anlatır?",
    category: "Finansal Tablolar",
    intro:
      "Nakit akış tablosu, şirketin kağıt üzerinde kar yazmasının ötesinde gerçekten nakit üretip üretmediğini gösterir.",
    definition:
      "Nakit akış tablosu üç ana bölümden oluşur: faaliyetlerden nakit akışı, yatırım faaliyetlerinden nakit akışı ve finansman faaliyetlerinden nakit akışı.",
    whyMatters:
      "Kar eden ama nakit üretemeyen şirketlerde işletme sermayesi, tahsilat veya stok baskısı olabilir. Bu nedenle nakit akışı bilanço ve gelir tablosunu tamamlar.",
    howToRead: [
      "Faaliyetlerden nakit akışı pozitif ve sürdürülebilir mi kontrol edilir.",
      "Yatırım nakit çıkışı büyüme yatırımı mı yoksa zorunlu harcama mı ayrıştırılır.",
      "Finansman nakit akışı borçlanma, kredi geri ödemesi ve temettü etkisini gösterir.",
    ],
    watch: [
      "Net kar pozitifken faaliyet nakit akışı negatif olabilir.",
      "Stok ve alacak artışı nakit çıkışı yaratabilir.",
      "Tek seferlik varlık satışı nakit akışını şişirebilir.",
      "Yüksek yatırım harcaması kısa vadede nakit baskısı yaratabilir.",
    ],
    example:
      "Şirket net kar açıklarken alacaklarını tahsil edemiyorsa faaliyet nakit akışı zayıf kalabilir. Bu durum kar kalitesi açısından uyarıdır.",
    checkSource:
      "Nakit akış tablosu, bilanço kalemleri ve dipnotlar KAP finansal bildirimlerinden ve şirket faaliyet raporlarından kontrol edilmelidir.",
    commonMistake:
      "En sık hata, kar açıklayan şirketin mutlaka nakit ürettiğini varsaymaktır. Kar ve nakit akışı farklı zamanlarda oluşabilir.",
    sourceKeys: ["kap"],
  },
  {
    slug: "pay-alim-satim-bildirimi-ne-anlama-gelir",
    title: "Pay Alım Satım Bildirimi Ne Anlama Gelir?",
    breadcrumb: "Pay Alım Satım Bildirimi",
    description:
      "Pay alım satım bildirimi nedir, ortak, yönetici veya fon işlemleri yatırımcı tarafından nasıl okunmalı, olumlu ve olumsuz etkiler neler?",
    category: "Piyasa Verileri",
    intro:
      "Pay alım satım bildirimleri, şirket ortaklarının, yöneticilerin veya büyük yatırımcıların hisse işlemlerini gösterdiği için yatırımcıların yakından izlediği KAP duyurularıdır.",
    definition:
      "Pay alım satım bildirimi, belirli kişi veya kurumların şirket paylarında yaptığı alış ya da satış işleminin kamuya açıklanmasıdır. Bildirimde tarih, fiyat, miktar ve yeni pay oranı bulunabilir.",
    whyMatters:
      "İçeriden şirketi tanıyan ortak veya yöneticilerin işlem yapması yatırımcı algısını etkileyebilir. Ancak her alım olumlu, her satış olumsuz anlamına gelmez.",
    howToRead: [
      "İşlemi yapan kişi veya kurumun şirketteki konumu okunur.",
      "Miktar, ortalama fiyat ve işlem sonrası pay oranı birlikte değerlendirilir.",
      "Tekrarlayan alım-satım davranışı tek seferlik işlemden daha anlamlı olabilir.",
    ],
    watch: [
      "Küçük tutarlı işlemler abartılmamalıdır.",
      "Satışın nedeni borç, likidite veya planlı işlem olabilir.",
      "Alım bildirimi fiyatın kesin yükseleceği anlamına gelmez.",
      "Bildirim tarihi ile işlem tarihi farklı olabilir.",
    ],
    example:
      "Ana ortak düzenli şekilde piyasadan pay alıyorsa bu güven mesajı olarak okunabilir. Ancak şirketin bilançosu ve değerlemesi yine ayrıca incelenmelidir.",
    checkSource:
      "Pay alım satım bildirimleri KAP özel durum açıklamalarından; pay oranları KAP şirket genel bilgilerinden kontrol edilmelidir.",
    commonMistake:
      "En sık hata, patron alımını kesin yükseliş, patron satışını kesin düşüş sinyali saymaktır. İşlemin büyüklüğü ve bağlamı önemlidir.",
    sourceKeys: ["kap"],
  },
  {
    slug: "patron-hisse-alirsa-satarsa-ne-anlama-gelir",
    title: "Patron Hisse Alırsa veya Satarsa Ne Anlama Gelir?",
    breadcrumb: "Patron Hisse Alımı Satımı",
    description:
      "Patron hisse alırsa veya satarsa ne anlama gelir, ortak işlemleri fiyatı nasıl etkileyebilir ve yatırımcı hangi detaylara bakmalı?",
    category: "Piyasa Verileri",
    intro:
      "Şirket ortaklarının pay alıp satması piyasada güçlü algı yaratır. Ancak bu işlemler tek başına yatırım kararı için yeterli değildir.",
    definition:
      "Patron veya hakim ortak hisse aldığında pay oranını artırır; satış yaptığında azaltır. Bu işlemler belirli eşik ve kurallar kapsamında KAP'ta duyurulabilir.",
    whyMatters:
      "Alım, şirket fiyatını destekleme veya güven mesajı olarak algılanabilir. Satış ise arz baskısı veya nakit ihtiyacı gibi farklı nedenlerle yorumlanabilir.",
    howToRead: [
      "İşlemin büyüklüğü toplam sermaye ve fiili dolaşıma göre değerlendirilir.",
      "İşlem fiyatı, piyasa fiyatı ve önceki açıklamalar karşılaştırılır.",
      "Satışın blok işlem, borsa dışı işlem veya piyasadan işlem olup olmadığı ayrıştırılır.",
    ],
    watch: [
      "Her patron satışı olumsuz haber değildir.",
      "Her patron alışı fiyat garantisi vermez.",
      "Planlı satış programları ve fonlama ihtiyaçları okunmalıdır.",
      "Aynı dönemde bilanço ve şirket haberleri birlikte değerlendirilmelidir.",
    ],
    example:
      "Hakim ortak düşük hacimli hissede yüklü satış yaparsa kısa vadeli arz baskısı oluşabilir. Fakat satış stratejik ortaklık veya kurumsal yatırımcıya devir şeklindeyse yorum değişebilir.",
    checkSource:
      "Ortak işlemleri, işlem fiyatları, pay oranları ve açıklama gerekçeleri KAP pay alım-satım bildirimlerinden kontrol edilmelidir.",
    commonMistake:
      "En sık hata, işlemin nedeni ve büyüklüğü okunmadan başlığa göre karar vermektir. Bağlam olmadan alım-satım bildirimi yanıltıcı olabilir.",
    sourceKeys: ["kap"],
  },
  {
    slug: "yabanci-payi-nedir",
    title: "Yabancı Payı Nedir?",
    breadcrumb: "Yabancı Payı",
    description:
      "Yabancı payı nedir, yabancı yatırımcı oranı hisse ve endeks için ne anlatır, para girişi çıkışıyla birlikte nasıl yorumlanır?",
    category: "Piyasa Verileri",
    intro:
      "Yabancı payı, bir hisse veya piyasadaki payların ne kadarının yabancı yatırımcıların elinde bulunduğunu gösteren takip göstergesidir.",
    definition:
      "Yabancı payı, yabancı saklama veya yatırımcı hesaplarındaki pay miktarının toplam paylara ya da fiili dolaşıma oranı olarak izlenebilir. Veri sağlayıcısına göre hesap yöntemi farklılaşabilir.",
    whyMatters:
      "Yabancı payındaki artış kurumsal ilgi sinyali olabilir; düşüş ise satış baskısına işaret edebilir. Ancak tek başına fiyat yönü garantisi değildir.",
    howToRead: [
      "Günlük değişim yerine haftalık ve aylık trend daha anlamlı olabilir.",
      "Yabancı payı fiyat ve hacimle birlikte okunmalıdır.",
      "Sektörel ayrışma yabancı ilgisinin nerede yoğunlaştığını gösterebilir.",
    ],
    watch: [
      "Saklama değişimi gerçek alım-satım ile birebir aynı olmayabilir.",
      "Kısa vadeli sert hareketler veri gecikmesiyle yanlış yorumlanabilir.",
      "Yabancı payı artarken hisse fiyatı düşebilir.",
      "Verinin hangi kapsamda hesaplandığı kontrol edilmelidir.",
    ],
    example:
      "Bir hissede yabancı payı birkaç hafta boyunca artarken fiyat ve hacim de yükseliyorsa kurumsal talep güçleniyor olabilir. Fakat bilanço ve haber akışı yine ayrı izlenir.",
    checkSource:
      "Yabancı payı verileri veri sağlayıcılar, aracı kurum raporları ve saklama istatistiklerinden; şirket haberleri KAP'tan kontrol edilmelidir.",
    commonMistake:
      "En sık hata, yabancı payı artışını kesin alım sinyali sanmaktır. Veri gecikmeli ve yorum gerektiren bir göstergedir.",
    sourceKeys: ["kap", "mkk"],
  },
  {
    slug: "takas-analizi-nedir",
    title: "Takas Analizi Nedir?",
    breadcrumb: "Takas Analizi",
    description:
      "Takas analizi nedir, aracı kurum dağılımı nasıl okunur, hisse toplama-dağıtım yorumlarında hangi hatalardan kaçınılmalı?",
    category: "Piyasa Verileri",
    intro:
      "Takas analizi, hisselerin hangi aracı kurum saklamasında yoğunlaştığını izleyerek yatırımcı davranışını anlamaya çalışan bir yöntemdir.",
    definition:
      "Takas verileri, payların saklama kurumları arasındaki dağılımını gösterir. Bu veriler alıcı-satıcı kimliğini doğrudan açıklamaz; yalnızca saklama ve kurum dağılımı hakkında fikir verir.",
    whyMatters:
      "Belirli kurumlarda yoğunlaşma, büyük yatırımcı hareketi ihtimalini düşündürebilir. Ancak takas analizi kesin alım-satım niyeti göstermez ve tek başına kullanılmamalıdır.",
    howToRead: [
      "Günlük değişim yerine birkaç günlük ve haftalık eğilim izlenir.",
      "Fiyat, hacim ve haber akışıyla birlikte yorum yapılır.",
      "Virman, saklama değişimi ve kurum içi hareketler ayrıştırılmaya çalışılır.",
    ],
    watch: [
      "Aracı kurum takası gerçek yatırımcı kimliği değildir.",
      "Tek günlük kurum hareketleri yanıltıcı olabilir.",
      "Takas artışı fiyatın kesin yükseleceği anlamına gelmez.",
      "Düşük fiili dolaşımlı hisselerde veri daha oynak görünebilir.",
    ],
    example:
      "Bir kurumda pay artışı görülürken fiyat da yüksek hacimle yükseliyorsa toplama ihtimali konuşulabilir. Fakat bunun kesin alım yapan kişi anlamına gelmediği unutulmamalıdır.",
    checkSource:
      "Takas verileri MKK saklama istatistikleri, aracı kurum veri ekranları ve KAP pay bildirimiyle birlikte kontrol edilmelidir.",
    commonMistake:
      "En sık hata, takas ekranında görülen aracı kurumu nihai yatırımcı sanmaktır. Aynı kurum altında çok sayıda müşteri işlem yapabilir.",
    sourceKeys: ["mkk", "kap"],
  },
  {
    slug: "para-girisi-para-cikisi-nasil-yorumlanir",
    title: "Para Girişi ve Para Çıkışı Nasıl Yorumlanır?",
    breadcrumb: "Para Girişi ve Para Çıkışı",
    description:
      "Borsada para girişi ve para çıkışı ne anlama gelir, hacim, fiyat ve takas verileriyle birlikte nasıl sağlıklı yorumlanır?",
    category: "Piyasa Verileri",
    intro:
      "Para girişi ve para çıkışı, yatırımcıların bir hisseye veya piyasaya olan ilgisini ölçmek için kullandığı popüler göstergelerdendir.",
    definition:
      "Para girişi genellikle alış yönlü işlem baskısının, para çıkışı ise satış yönlü baskının daha güçlü göründüğü durumları anlatmak için kullanılır. Hesap yöntemi veri sağlayıcısına göre değişebilir.",
    whyMatters:
      "Fiyat hareketinin arkasında hacimli talep mi yoksa zayıf işlemle oluşan geçici hareket mi olduğunu anlamaya yardımcı olur. Ancak tek başına kesin sinyal değildir.",
    howToRead: [
      "Fiyat yükselişi hacimli para girişiyle destekleniyorsa hareket daha güçlü görünebilir.",
      "Fiyat düşerken para çıkışı artıyorsa satış baskısı izlenebilir.",
      "Kapanışa yakın işlemler ve blok hareketler veriyi bozabilir.",
    ],
    watch: [
      "Her veri sağlayıcı para girişini aynı yöntemle hesaplamaz.",
      "Kısa vadeli para girişi kalıcı trend anlamına gelmeyebilir.",
      "Hacimsiz hisselerde gösterge kolay bozulabilir.",
      "Takas ve haber akışıyla desteklenmeyen sinyaller zayıftır.",
    ],
    example:
      "Bir hisse yükselirken yüksek hacim, güçlü kapanış ve pozitif para girişi birlikte görülüyorsa talep daha sağlıklı yorumlanabilir. Tek başına yeşil para girişi yeterli değildir.",
    checkSource:
      "Para akışı verileri kullanılan veri sağlayıcının metodolojisiyle birlikte; fiyat, hacim, takas ve KAP haberleriyle çapraz kontrol edilmelidir.",
    commonMistake:
      "En sık hata, para girişi görülen her hisseyi hemen alınacak hisse sanmaktır. Gösterge yöntemi ve piyasa bağlamı bilinmeden karar verilmemelidir.",
    sourceKeys: ["bistPay", "kap"],
  },
];

export const ekRehberler = specs.map(buildRehber);

export const ekRehberOzetleri = ekRehberler.map(
  ({ title, href, description }) => ({
    title,
    href,
    description,
  }),
);

export function getEkRehber(slug: string) {
  return ekRehberler.find((guide) => guide.href === `/rehberler/${slug}`);
}
