// Borsa terimleri sözlüğü — tek veri kaynağı.
// İki tür kayıt vardır:
//   1) Özgün terim: kendi sayfası /sozluk/<slug> altında üretilir (tanim dolu).
//   2) İşaretçi terim: `harici` alanı dolu; hub ve otomatik terim linkleri
//      mevcut rehber/araç sayfasına yönlendirir, ayrı sayfa ÜRETİLMEZ
//      (mükerrer içerik oluşmasın diye).
// `eslesmeler`: haber başlıklarında aranan küçük-harf kalıplar; IlgiliTerimler
// bileşeni bu kalıplarla eşleşen terimleri haberin altında çip olarak gösterir.

export type SozlukSoru = { soru: string; cevap: string };

export type SozlukTerimi = {
  slug: string;
  terim: string;
  kisaTanim: string;
  eslesmeler: string[];
  harici?: string;
  tanim?: string[];
  onemliNoktalar?: string[];
  sorular?: SozlukSoru[];
  iliskiliTerimler?: string[];
  iliskiliSayfalar?: { title: string; href: string; description: string }[];
  // Terimle ilişkili hesaplayıcı; IlgiliTerimler haber çiplerinde ayrıca
  // "araç" çipi olarak gösterilir (haberden hesaplayıcıya iç bağlantı).
  arac?: { title: string; href: string };
  publishedAt?: string;
  updatedAt?: string;
};

// Sözlükteki özgün maddeler ilk kez bu tarihte yayımlandı. Bir madde daha
// sonra esaslı biçimde güncellenirse kendi `updatedAt` alanı bu tarihi ezer.
export const sozlukYayinTarihi = "2026-07-05";

export function terimGuncellemeTarihi(terim: SozlukTerimi): string {
  return terim.updatedAt ?? terim.publishedAt ?? sozlukYayinTarihi;
}

export const sozlukTerimleri: SozlukTerimi[] = [
  // ---------------------------------------------------------------- ÖZGÜN ---
  {
    slug: "vbts-nedir",
    terim: "VBTS (Volatilite Bazlı Tedbir Sistemi)",
    kisaTanim:
      "Borsa İstanbul'un, fiyatı aşırı dalgalanan paylara otomatik olarak kademeli işlem tedbirleri uyguladığı sistem.",
    eslesmeler: ["vbts", "tedbir kapsamına", "volatilite bazlı"],
    tanim: [
      "VBTS (Volatilite Bazlı Tedbir Sistemi), Borsa İstanbul'da bir payın fiyatı kısa sürede olağan dışı şekilde dalgalandığında, yatırımcıyı korumak ve aşırı spekülatif hareketleri yavaşlatmak amacıyla otomatik olarak devreye giren tedbir mekanizmasıdır. Sistem, payın fiyat hareketlerini önceden belirlenmiş eşiklerle karşılaştırır; eşik aşıldığında pay, ilgili tedbir kademesine alınır ve bu durum KAP üzerinden duyurulur.",
      "Tedbirler kademeli olarak ağırlaşır. Uygulamada en sık görülen tedbirler şunlardır: açığa satış ve kredili işlem yasağı, brüt takas uygulaması ve tek fiyat işlem yöntemine geçiş. Tedbirin türü ve süresi Borsa İstanbul'un duyurusunda belirtilir; süre dolduğunda pay normal işlem esaslarına döner, ancak dalgalanma sürerse bir üst kademe tedbir devreye girebilir.",
      "Yatırımcı açısından VBTS duyurusu tek başına 'al' ya da 'sat' sinyali değildir; payın kısa vadede yüksek riskli bir fiyatlama dönemi yaşadığını gösteren resmî bir uyarıdır. Tedbir dönemlerinde likidite azalabilir, emir iletimi kısıtlanabilir ve fiyat hareketleri sertleşebilir.",
    ],
    onemliNoktalar: [
      "Tedbir kararları otomatik eşiklerle tetiklenir ve KAP'ta ilan edilir.",
      "Yaygın kademeler: açığa satış/kredili işlem yasağı → brüt takas → tek fiyat yöntemi.",
      "Tedbir süresi ilanla belirlenir; dalgalanma sürerse üst kademe uygulanabilir.",
      "Tek fiyat yönteminde emirler seans boyunca toplanır, belirli aralıklarla tek fiyattan eşleşir.",
    ],
    sorular: [
      {
        soru: "VBTS kapsamına alınan hisse satılabilir mi?",
        cevap:
          "Evet. VBTS tedbirleri alım-satımı yasaklamaz; işlem esaslarını değiştirir. Örneğin brüt takasta kaldıraç etkisi kalkar, tek fiyat yönteminde sürekli işlem yerine belirli saatlerde eşleşme olur.",
      },
      {
        soru: "VBTS tedbiri ne kadar sürer?",
        cevap:
          "Süre, tedbirin kademesine göre Borsa İstanbul duyurusunda belirtilir. Süre sonunda pay normal işlem esaslarına döner; ancak oynaklık devam ederse yeni ya da daha ağır bir tedbir uygulanabilir.",
      },
    ],
    iliskiliTerimler: ["brut-takas", "devre-kesici"],
    iliskiliSayfalar: [
      {
        title: "KAP Açıklamaları Nasıl Okunur?",
        href: "/rehberler/kap-aciklamalari-nasil-okunur",
        description: "Tedbir duyurularının yayınlandığı KAP bildirimlerini okuma rehberi.",
      },
    ],
  },
  {
    slug: "tavan-serisi-nedir",
    terim: "Tavan Serisi",
    kisaTanim:
      "Bir payın (çoğunlukla yeni halka arzların) art arda günlerde üst fiyat limitinden kapanış yapması.",
    eslesmeler: ["tavan serisi", "tavan fiyat", "tavanla kapattı", "tavan fiyatla"],
    tanim: [
      "Tavan serisi, bir hissenin birbirini izleyen işlem günlerinde günlük fiyat limitinin üst sınırından (tavandan) kapanış yapmasıdır. Borsa İstanbul'da pay fiyatları gün içinde referans fiyata göre en fazla ±%10 hareket edebildiğinden, güçlü talep gören bir hisse gün boyunca tavan fiyattan alıcılı kalabilir ve seri günlerce sürebilir.",
      "Kavram en çok yeni halka arzlarda gündeme gelir: arz fiyatı cazip bulunan ve talebi yüksek olan hisseler, işlem görmeye başladıktan sonra günlerce tavan serisi yapabilir. Seri süresince satıcı az olduğu için işlem hacmi genellikle düşüktür; seri kırıldığında ('tavan bozulduğunda') ise hacim aniden artar ve fiyat iki yönde de sert hareket edebilir.",
      "Tavan serisinin uzunluğu önceden bilinemez; katılımcı sayısı, dağıtım şekli, halka açıklık oranı ve genel piyasa iştahı gibi birçok değişkene bağlıdır. Geçmişte uzun seriler yapan arzlar olduğu gibi ilk gün tavan bozan arzlar da vardır.",
    ],
    onemliNoktalar: [
      "Günlük fiyat limiti referans fiyata göre ±%10'dur; tavan bu üst sınırdır.",
      "Seri boyunca hacim düşüktür; asıl hacim tavan bozulduğunda gelir.",
      "Serinin uzunluğu garantisi yoktur; geçmiş seriler gelecek arzlar için gösterge değildir.",
    ],
    sorular: [
      {
        soru: "Tavan serisi kaç gün sürer?",
        cevap:
          "Sabit bir süre yoktur. Talep, halka açıklık oranı, dağıtım şekli ve piyasa koşullarına göre değişir. Sitemizdeki tavan serisi takip tablosunda 2026 arzlarının fiili performansını görebilirsiniz.",
      },
      {
        soru: "Tavan bozulunca ne olur?",
        cevap:
          "Satıcıların devreye girmesiyle hacim artar; fiyat dengelenebilir, yükselişe devam edebilir ya da sert düşebilir. Bu geçiş günü genellikle en oynak gündür.",
      },
    ],
    iliskiliTerimler: ["lot-nedir", "halka-aciklik-orani-nedir"],
    iliskiliSayfalar: [
      {
        title: "2026 Halka Arz Tavan Serisi Takibi",
        href: "/halka-arz/tavan-serisi",
        description: "Güncel arzların tavan performansı, katılımcı ve getiri tablosu.",
      },
      {
        title: "Halka Arz Tavan Bozarsa Ne Olur?",
        href: "/rehberler/halka-arz-tavan-bozarsa-ne-olur",
        description: "Tavan bozulması senaryoları ve yatırımcı stratejileri rehberi.",
      },
    ],
    arac: { title: "Kazanç Hesaplama (Tavan Senaryosu)", href: "/halka-arz/kazanc-hesapla" },
  },
  {
    slug: "satmama-taahhudu-nedir",
    terim: "Satmama Taahhüdü (Lock-up)",
    kisaTanim:
      "Halka arzda şirket ve/veya ortakların belirli bir süre boyunca borsada pay satmamayı taahhüt etmesi.",
    eslesmeler: ["satmama taahhü", "lock-up", "lockup"],
    tanim: [
      "Satmama taahhüdü (uluslararası piyasalardaki adıyla lock-up), halka arz eden şirketin ve/veya mevcut ortaklarının, payların borsada işlem görmeye başlamasından itibaren belirli bir süre boyunca ellerindeki payları satmamayı ya da yeni pay ihraç etmemeyi taahhüt etmesidir. Taahhüdün kapsamı ve süresi izahnamede açıkça yazar; Türkiye'de yaygın uygulama 6 ay ile 1 yıl arasındadır.",
      "Bu taahhüdün amacı, halka arz sonrasında piyasaya ani pay arzı gelmesini önleyerek fiyat üzerindeki satış baskısını sınırlamaktır. Yatırımcı açısından taahhüt süresi bittiğinde ortakların satış yapıp yapmayacağı önemli bir takip konusudur; taahhüt bitişi yaklaşırken bazı paylarda temkinli fiyatlama görülebilir.",
      "Taahhütler çoğunlukla 'borsada satmama' şeklindedir; borsa dışı devirler, bedelsiz sermaye artırımından gelen paylar veya taahhütte açıkça istisna tutulan durumlar kapsam dışı olabilir. Bu nedenle taahhüdün tam metnini izahnameden okumak gerekir.",
    ],
    onemliNoktalar: [
      "Süre ve kapsam izahnamede yazar; yaygın süreler 6 ay (şirket) ve 6-12 ay (ortaklar).",
      "Amaç, arz sonrası ani pay satışının fiyat baskısı yaratmasını önlemektir.",
      "Taahhüt bitiş tarihi, yatırımcı için önemli bir takvim olayıdır.",
    ],
    sorular: [
      {
        soru: "Satmama taahhüdü biten hisse düşer mi?",
        cevap:
          "Otomatik bir düşüş olmaz; ortaklar satmayı seçmeyebilir. Ancak potansiyel arz artışı beklentisi fiyatlamayı etkileyebilir. Taahhüt bitişini şirketin KAP duyurularıyla birlikte izlemek gerekir.",
      },
    ],
    iliskiliTerimler: ["ortak-satisi-nedir", "fiyat-istikrari-nedir", "halka-aciklik-orani-nedir"],
    iliskiliSayfalar: [
      {
        title: "İzahname Nedir? Nasıl Okunur?",
        href: "/rehberler/izahname-nedir",
        description: "Taahhütlerin yer aldığı izahname bölümlerini okuma rehberi.",
      },
    ],
  },
  {
    slug: "fiyat-istikrari-nedir",
    terim: "Fiyat İstikrarı İşlemleri",
    kisaTanim:
      "Halka arz sonrası aracı kurumun, fiyat arz fiyatının altına düştüğünde alım yaparak fiyatı desteklemesi.",
    eslesmeler: ["fiyat istikrarı"],
    tanim: [
      "Fiyat istikrarı işlemleri, halka arza aracılık eden kurumun, payların borsada işlem görmeye başlamasının ardından fiyatın halka arz fiyatının altına inmesi durumunda alım emirleri vererek fiyatı desteklemesidir. Uygulanıp uygulanmayacağı, süresi ve kaynağı izahnamede belirtilir; Türkiye uygulamasında bu süre en fazla 30 gündür.",
      "İstikrar işlemlerinin kaynağı çoğunlukla ek satıştan (yatırımcılara arz edilen ilave paylardan) elde edilen gelirdir. Aracı kurum bu kaynakla arz fiyatının altındaki seviyelerden alım yapabilir; fiyat arz fiyatının üzerindeyse istikrar alımı yapılmaz.",
      "Yatırımcı için iki kritik nokta vardır: birincisi, fiyat istikrarı bir taahhüt değil imkândır — izahnamede 'planlanmaktadır' yazsa bile aracı kurum alım yapmak zorunda değildir. İkincisi, bazı arzlarda fiyat istikrarı hiç planlanmaz; bu durumda arz sonrası fiyat tamamen piyasa koşullarına kalır.",
    ],
    onemliNoktalar: [
      "En fazla 30 gün uygulanabilir; detaylar izahnamede yazar.",
      "Kaynağı genellikle ek satış geliridir.",
      "Taahhüt değildir; 'planlanıyor' ifadesi alım garantisi vermez.",
      "Bazı arzlarda hiç planlanmaz — izahnamedeki ilgili bölümü kontrol edin.",
    ],
    sorular: [
      {
        soru: "Fiyat istikrarı hisseyi arz fiyatının altına düşmekten korur mu?",
        cevap:
          "Garanti etmez. İstikrar alımları düşüşü yavaşlatabilir ancak kaynak sınırlıdır ve aracı kurumun alım zorunluluğu yoktur. Fiyat, istikrar dönemi içinde de arz fiyatının altında kalabilir.",
      },
    ],
    iliskiliTerimler: ["ek-satis-nedir", "satmama-taahhudu-nedir"],
    iliskiliSayfalar: [
      {
        title: "Halka Arz Takvimi",
        href: "/halka-arz/takvim",
        description: "Yaklaşan arzlarda fiyat istikrarı bilgisi izahname özetlerinde yer alır.",
      },
    ],
  },
  {
    slug: "ortak-satisi-nedir",
    terim: "Ortak Satışı",
    kisaTanim:
      "Halka arzda mevcut ortakların kendi paylarını satması; gelir şirkete değil satan ortağa gider.",
    eslesmeler: ["ortak satışı", "ortak satisi", "pay satışı", "pay devri"],
    tanim: [
      "Ortak satışı, halka arzda satışa sunulan payların şirketin çıkaracağı yeni paylar (sermaye artırımı) değil, mevcut ortakların elindeki paylar olmasıdır. Bu yapıda satış geliri şirket kasasına girmez; payını satan ortağa gider.",
      "Bir halka arz tamamen sermaye artırımı, tamamen ortak satışı ya da ikisinin karışımı şeklinde yapılabilir. Yatırımcı açısından fark önemlidir: sermaye artırımında toplanan fon şirketin yatırımlarına, borç ödemesine veya işletme sermayesine aktarılır ve şirketi doğrudan güçlendirebilir; ortak satışında ise şirketin bilançosuna yeni kaynak girmez, yalnızca ortaklık yapısı değişir.",
      "İzahnamede arzın ne kadarının sermaye artırımı, ne kadarının ortak satışı olduğu açıkça belirtilir. Ortak satışı ağırlıklı arzlarda 'fon nereye kullanılacak?' sorusunun muhatabı şirket değil, satış yapan ortaklardır.",
    ],
    onemliNoktalar: [
      "Ortak satışında gelir şirkete değil, satan ortağa gider.",
      "Sermaye artırımı + ortak satışı karma yapıları yaygındır.",
      "Arz yapısı (kaç lot sermaye artırımı, kaç lot ortak satışı) izahnamede yazar.",
    ],
    sorular: [
      {
        soru: "Ortak satışı kötü bir sinyal midir?",
        cevap:
          "Tek başına değildir; kurucuların kısmi çıkışı, fon ortaklıklarının vade sonu gibi doğal nedenleri olabilir. Ancak arzın tamamının ortak satışı olması, şirkete taze kaynak girmeyeceği anlamına gelir — değerlendirmede bu dikkate alınmalıdır.",
      },
    ],
    iliskiliTerimler: ["satmama-taahhudu-nedir", "halka-aciklik-orani-nedir"],
    iliskiliSayfalar: [
      {
        title: "Sermaye Artırımları Rehberi",
        href: "/rehberler/sermaye-artirimlari",
        description: "Bedelli, bedelsiz ve tahsisli sermaye artırımlarının farkları.",
      },
    ],
  },
  {
    slug: "halka-aciklik-orani-nedir",
    terim: "Halka Açıklık Oranı",
    kisaTanim:
      "Şirket sermayesinin borsada işlem görebilen (halka açık) kısmının toplam sermayeye oranı.",
    eslesmeler: ["halka açıklık"],
    tanim: [
      "Halka açıklık oranı, bir şirketin toplam sermayesi içinde borsada serbestçe alınıp satılabilen payların oranını gösterir. Örneğin %30 halka açıklık, payların %70'inin ana ortaklarda kaldığı, %30'unun ise borsada işlem gördüğü anlamına gelir.",
      "Bu oranla yakından ilişkili bir kavram da 'fiili dolaşımdaki pay oranı'dır: halka açık görünen paylardan, borsada fiilen işlem görmeyen (örneğin taahhüde bağlı veya stratejik ortaklıkta duran) kısımlar düşüldükten sonra kalan orandır. Endeks ağırlıkları ve bazı likidite hesapları fiili dolaşım üzerinden yapılır.",
      "Düşük halka açıklık, dolaşımdaki pay azlığı nedeniyle sert fiyat hareketlerine zemin hazırlayabilir; yüksek halka açıklık ise genellikle daha derin ve likit bir işlem ortamı sağlar. Halka arzlarda planlanan halka açıklık oranı izahnamede yer alır.",
    ],
    onemliNoktalar: [
      "Fiili dolaşım oranı, endeks ağırlıklarının hesabında esas alınır.",
      "Düşük halka açıklık = düşük likidite ve daha oynak fiyatlama riski.",
      "Halka arzlarda hedeflenen oran izahnamede açıklanır.",
    ],
    sorular: [
      {
        soru: "Halka açıklık oranı sonradan değişir mi?",
        cevap:
          "Evet. İkincil halka arzlar, ortak satışları, pay geri alımları ve sermaye artırımları oranı değiştirebilir. Güncel oran MKK/KAP verilerinden izlenebilir.",
      },
    ],
    iliskiliTerimler: ["ortak-satisi-nedir", "tavan-serisi-nedir", "yildiz-pazar-nedir"],
    iliskiliSayfalar: [
      {
        title: "Hisse Profil Sayfaları",
        href: "/hisseler",
        description: "Şirketlerin künye, ortaklık yapısı ve pazar bilgileri.",
      },
    ],
  },
  {
    slug: "ek-satis-nedir",
    terim: "Ek Satış",
    kisaTanim:
      "Halka arzda talebin yüksek olması hâlinde, arz edilen pay miktarının belirli bir oranına kadar ilave pay satılması.",
    eslesmeler: ["ek satış", "ek pay"],
    tanim: [
      "Ek satış, halka arzda toplanan talebin satışa sunulan pay miktarını aşması durumunda, izahnamede öngörülmüşse arz büyüklüğünün belirli bir oranına kadar (Türkiye uygulamasında en fazla %20) ilave pay satılabilmesidir. Böylece güçlü talep kısmen karşılanır ve dağıtımda karşılanma oranları bir miktar rahatlar.",
      "Ek satış payları mevcut ortaklardan ödünç alınarak ya da ortak satışı şeklinde sunulabilir. Ek satıştan elde edilen gelir, çoğu arzda fiyat istikrarı işlemlerinin kaynağı olarak kullanılır: fiyat arz fiyatının altına inerse aracı kurum bu kaynakla alım yapabilir.",
      "Yatırımcı açısından ek satış, hem dağıtılan toplam lot miktarını hem de arz sonrası dolaşımdaki pay sayısını etkiler; izahnamedeki 'ek satış' ve 'fiyat istikrarı' bölümleri birlikte okunmalıdır.",
    ],
    onemliNoktalar: [
      "Üst sınır: arz edilen pay miktarının %20'si.",
      "Geliri genellikle fiyat istikrarı işlemlerinde kullanılır.",
      "Ek satış yapılıp yapılmadığı dağıtım sonuçlarıyla birlikte duyurulur.",
    ],
    sorular: [
      {
        soru: "Ek satış lot dağıtımını artırır mı?",
        cevap:
          "Evet; satışa sunulan toplam pay arttığı için karşılanma oranı bir miktar yükselir. Ancak talep çok yüksekse etki sınırlı kalabilir.",
      },
    ],
    iliskiliTerimler: ["fiyat-istikrari-nedir", "lot-nedir"],
    iliskiliSayfalar: [
      {
        title: "Halka Arz Talep Hesaplama",
        href: "/halka-arz/talep-hesapla",
        description: "Katılımcı ve tahsisat varsayımlarıyla olası lot hesabı.",
      },
    ],
  },
  {
    slug: "hizlandirilmis-talep-toplama-nedir",
    terim: "Hızlandırılmış Talep Toplama (ABB)",
    kisaTanim:
      "Borsada işlem gören bir şirkette büyük ortağın, payları kurumsal yatırımcılara çok kısa sürede blok hâlinde satması.",
    eslesmeler: ["hızlandırılmış talep"],
    tanim: [
      "Hızlandırılmış talep toplama (uluslararası adıyla accelerated bookbuilding / ABB), hâlihazırda borsada işlem gören bir şirkette önemli paya sahip bir ortağın, elindeki payların bir bölümünü nitelikli/kurumsal yatırımcılara genellikle bir-iki gün gibi çok kısa bir süre içinde satmasıdır. Klasik halka arzdan farkı, sürecin izahnamesiz ve dar bir yatırımcı kitlesine, hızla tamamlanmasıdır.",
      "Satış fiyatı, toplanan taleplere göre belirlenir ve çoğunlukla güncel borsa fiyatına göre bir miktar iskontolu olur; bu iskonto, kısa sürede büyük miktarda payı alacak kurumsal yatırımcıları teşvik eder. İşlem tamamlandığında sonuç KAP'ta duyurulur.",
      "Bireysel yatırımcı bu satışa doğrudan katılamaz; ancak etkilenir: dolaşımdaki pay artar, kısa vadede iskonto nedeniyle fiyat baskısı görülebilir, orta vadede ise halka açıklığın ve likiditenin artması olumlu değerlendirilebilir.",
    ],
    onemliNoktalar: [
      "Yalnızca kurumsal/nitelikli yatırımcılara yapılır; bireysel katılım yoktur.",
      "Fiyat genellikle borsa fiyatına göre iskontoludur.",
      "Süreç ve sonuç KAP duyurularıyla takip edilir.",
    ],
    sorular: [
      {
        soru: "Hızlandırılmış talep toplama hisseyi düşürür mü?",
        cevap:
          "Kısa vadede iskontolu satış fiyatı ve artan pay arzı baskı yaratabilir. Orta vadede etki; satışın büyüklüğüne, satan ortağın kim olduğuna ve piyasanın satış gerekçesini nasıl yorumladığına bağlıdır.",
      },
    ],
    iliskiliTerimler: ["ortak-satisi-nedir", "halka-aciklik-orani-nedir"],
    iliskiliSayfalar: [
      {
        title: "Şirket Haberleri",
        href: "/haberler/kategori/sirket-haberleri",
        description: "Blok satış ve pay devri haberlerini takip edin.",
      },
    ],
  },
  {
    slug: "kayitli-sermaye-tavani-nedir",
    terim: "Kayıtlı Sermaye Tavanı",
    kisaTanim:
      "Yönetim kurulunun genel kurul kararı beklemeden sermaye artırabileceği, SPK onaylı üst sınır.",
    eslesmeler: ["kayıtlı sermaye"],
    tanim: [
      "Kayıtlı sermaye tavanı, kayıtlı sermaye sistemindeki halka açık şirketlerde yönetim kurulunun, her seferinde genel kurul kararı almadan sermaye artırımı yapabilmesine imkân veren üst sınırdır. Şirket bu tavana kadar bedelli, bedelsiz veya tahsisli sermaye artırımlarını yönetim kurulu kararıyla gerçekleştirebilir.",
      "Tavan, SPK onayı ve genel kurul kararıyla belirlenir ve en fazla beş yıllık bir dönem için geçerlidir; süre sonunda ya da tavana ulaşıldığında yeni tavan için tekrar onay gerekir. Bu yüzden 'kayıtlı sermaye tavanı artırımı' başvuruları, şirketin önümüzdeki dönemde sermaye artırımı planladığının erken sinyali olarak okunur.",
      "Yatırımcı açısından tavan artışı tek başına bedelli ya da bedelsiz anlamına gelmez; yalnızca kapasite açar. Hangi tür artırımın geleceği, şirketin ayrıca yapacağı yönetim kurulu kararı ve KAP duyurusuyla netleşir.",
    ],
    onemliNoktalar: [
      "En fazla 5 yıllık dönem için geçerlidir; SPK onayı gerektirir.",
      "Tavan artışı, gelecekte sermaye artırımı için kapasite hazırlığıdır.",
      "Artırımın bedelli mi bedelsiz mi olacağını tavan değil, sonraki YK kararı belirler.",
    ],
    sorular: [
      {
        soru: "Kayıtlı sermaye tavanı artırımı bedelsiz müjdesi midir?",
        cevap:
          "Hayır. Tavan artışı hem bedelli hem bedelsiz hem de tahsisli artırım için kapasite oluşturur. Türü, şirketin sonraki kararı belli eder; erken yorum yanıltıcı olabilir.",
      },
    ],
    iliskiliTerimler: [],
    iliskiliSayfalar: [
      {
        title: "Sermaye Artırımları Rehberi",
        href: "/rehberler/sermaye-artirimlari",
        description: "Bedelli, bedelsiz ve tahsisli artırımların yatırımcıya etkisi.",
      },
      {
        title: "Sermaye Artırımı Haberleri",
        href: "/haberler/kategori/sermaye-artirimi",
        description: "Güncel tavan ve artırım başvuruları.",
      },
    ],
  },
  {
    slug: "lot-nedir",
    terim: "Lot",
    kisaTanim:
      "Borsa İstanbul'da işlem birimi; günümüzde 1 lot = 1 adet pay senedidir.",
    eslesmeler: ["kaç lot", "lot dağıtım", "lot verdi"],
    tanim: [
      "Lot, Borsa İstanbul'da pay alım-satımının standart işlem birimidir. Günümüz uygulamasında 1 lot = 1 adet pay senedidir; yani '100 lot THYAO' ifadesi 100 adet Türk Hava Yolları payı anlamına gelir. (Eski dönemde 1 lot 1.000 adet paya karşılık gelirdi; bu tanım artık kullanılmamaktadır.)",
      "Kavram, halka arz döneminde özellikle öne çıkar: 'halka arz kaç lot verdi?' sorusu, dağıtım sonucunda bir yatırımcıya kaç adet pay düştüğünü sorar. Eşit dağıtımda satışa sunulan lot sayısı katılımcı sayısına bölünerek kişi başı yaklaşık lot bulunur; oransal dağıtımda ise talep büyüklüğüne göre pay edilir.",
      "Lot sayısı ile yatırım tutarı arasındaki ilişki basittir: yatırım tutarı = lot sayısı × pay fiyatı. Halka arzlarda talep girerken bu hesap üzerinden bütçe planlaması yapılır.",
    ],
    onemliNoktalar: [
      "1 lot = 1 pay (güncel BIST uygulaması).",
      "Halka arzda kişi başı lot, dağıtım yöntemine ve katılımcı sayısına bağlıdır.",
      "Yatırım tutarı = lot × fiyat.",
    ],
    sorular: [
      {
        soru: "Halka arzda kaç lot verileceğini önceden bilebilir miyim?",
        cevap:
          "Kesin olarak bilinemez; katılımcı sayısına ve tahsisata bağlıdır. Talep Hesaplama aracımızla farklı katılımcı senaryolarına göre tahmini kişi başı lot hesaplayabilirsiniz.",
      },
    ],
    iliskiliTerimler: ["ek-satis-nedir", "tavan-serisi-nedir"],
    iliskiliSayfalar: [
      {
        title: "Halka Arz Kaç Lot Verir?",
        href: "/rehberler/halka-arz-kac-lot-verir",
        description: "Kişi başı lot tahmini ve dağıtım hesaplama rehberi.",
      },
      {
        title: "Talep Hesaplama Aracı",
        href: "/halka-arz/talep-hesapla",
        description: "Senaryolara göre olası lot dağılımını hesaplayın.",
      },
    ],
    arac: { title: "Talep / Lot Hesaplama", href: "/halka-arz/talep-hesapla" },
  },
  {
    slug: "yildiz-pazar-nedir",
    terim: "Yıldız Pazar / Ana Pazar / Alt Pazar",
    kisaTanim:
      "Borsa İstanbul'da payların, fiili dolaşımdaki paylarının piyasa değerine göre işlem gördüğü pazar grupları.",
    eslesmeler: ["yıldız pazar", "ana pazar", "alt pazar"],
    tanim: [
      "Borsa İstanbul Pay Piyasası'nda şirketler tek bir havuzda değil, ölçütlere göre ayrılmış pazarlarda işlem görür. Temel ayrım fiili dolaşımdaki payların piyasa değerine dayanır: en büyük şirketler Yıldız Pazar'da, orta ölçekliler Ana Pazar'da, daha küçükler Alt Pazar'da yer alır. Eşik değerler Borsa İstanbul tarafından belirlenir ve dönemsel olarak güncellenebilir.",
      "Pazar ayrımının pratik sonuçları vardır: bazı endekslere girişte, kredili işlem ve açığa satış uygulamalarında, kurumsal yatırımcıların yatırım kriterlerinde payın hangi pazarda olduğu dikkate alınır. Yeni halka arzlarda şirketin hangi pazarda işlem göreceği izahnamede belirtilir; büyük arzlar genellikle Yıldız Pazar'da başlar.",
      "Şirketler büyüdükçe ya da küçüldükçe pazarlar arasında geçiş yapabilir; bu geçişler Borsa İstanbul'un dönemsel değerlendirmeleriyle duyurulur.",
    ],
    onemliNoktalar: [
      "Ayrım ölçütü: fiili dolaşımdaki payların piyasa değeri.",
      "Pazar bilgisi endeks üyeliği ve işlem esasları açısından önemlidir.",
      "Halka arzda hedef pazar izahnamede yazar.",
    ],
    sorular: [
      {
        soru: "Yıldız Pazar'daki hisse daha mı güvenlidir?",
        cevap:
          "Pazar, şirket büyüklüğünü ve likiditeyi yansıtır; yatırımın kalitesini garanti etmez. Büyük pazar genellikle daha derin işlem ortamı sunar, ancak şirket analizi her pazarda gereklidir.",
      },
    ],
    iliskiliTerimler: ["halka-aciklik-orani-nedir"],
    iliskiliSayfalar: [
      {
        title: "Halka Arz Takvimi",
        href: "/halka-arz/takvim",
        description: "Yaklaşan arzların hedef pazar bilgileri.",
      },
    ],
  },
  {
    slug: "konsorsiyum-nedir",
    terim: "Konsorsiyum (Aracı Kurum Konsorsiyumu)",
    kisaTanim:
      "Halka arzda payların satışına birlikte aracılık eden aracı kurumlar grubu.",
    eslesmeler: ["konsorsiyum", "aracı kurum"],
    tanim: [
      "Konsorsiyum, bir halka arzda payların yatırımcılara satışını birlikte üstlenen aracı kurumlar topluluğudur. Başında süreci yöneten 'konsorsiyum lideri' bulunur; diğer kurumlar üye olarak talep toplar. Küçük arzlarda tek bir aracı kurum da yeterli olabilir; büyük arzlarda geniş konsorsiyumlar kurulur.",
      "Yatırımcı açısından pratik önemi şudur: halka arza katılım, konsorsiyumda yer alan kurumlardan (ve çoğu arzda diğer kurumlar aracılığıyla da) yapılabilir. Talep toplama tarihlerinde hangi kurumlardan başvuru yapılabileceği izahnamede ve arz duyurularında listelenir.",
      "Konsorsiyum lideri ayrıca fiyat tespiti, dağıtım ve varsa fiyat istikrarı işlemlerinde merkezi rol oynar. Bu nedenle tavan serisi tablolarında ve arz özetlerinde konsorsiyum bilgisi ayrı bir sütun olarak takip edilir.",
    ],
    onemliNoktalar: [
      "Lider kurum fiyat tespiti, dağıtım ve istikrar işlemlerini yönetir.",
      "Başvuru yapılabilecek kurumlar izahnamede listelenir.",
      "Konsorsiyum genişliği, arza erişim kolaylığını etkiler.",
    ],
    sorular: [
      {
        soru: "Halka arza sadece konsorsiyum üyesi kurumdan mı katılabilirim?",
        cevap:
          "Çoğu arzda diğer aracı kurumlar da konsorsiyum üzerinden talep iletebilir; ancak bazı arzlarda başvuru yalnızca konsorsiyum üyelerinden yapılabilir. Kesin bilgi izahnamede ve arz duyurusundadır.",
      },
    ],
    iliskiliTerimler: ["fiyat-istikrari-nedir", "ek-satis-nedir"],
    iliskiliSayfalar: [
      {
        title: "Tavan Serisi Takibi",
        href: "/halka-arz/tavan-serisi",
        description: "2026 arzlarının konsorsiyum bilgileriyle performans tablosu.",
      },
    ],
  },
  {
    slug: "kap-nedir",
    terim: "KAP (Kamuyu Aydınlatma Platformu)",
    kisaTanim:
      "Borsa şirketlerinin tüm resmî bildirimlerinin yayınlandığı elektronik platform.",
    eslesmeler: ["kap haberleri", "kap bildirimleri", "kap açıklaması", "önemli kap"],
    tanim: [
      "KAP (Kamuyu Aydınlatma Platformu), Borsa İstanbul'da işlem gören şirketlerin ve diğer sermaye piyasası kurumlarının mevzuat gereği yapmak zorunda oldukları tüm bildirimlerin elektronik ortamda yayınlandığı resmî platformdur. Merkezi Kayıt Kuruluşu (MKK) tarafından işletilir ve kap.org.tr adresinden herkese açıktır.",
      "Özel durum açıklamaları, finansal raporlar, sermaye artırımı ve temettü kararları, genel kurul çağrıları, pay alım-satım bildirimleri ve halka arz duyuruları KAP üzerinden duyurulur. Bir bilgi KAP'ta yayınlanmadan 'resmî' kabul edilmez; bu nedenle piyasa söylentilerini doğrulamanın birincil yolu KAP'tır.",
      "Yatırımcı için KAP okuryazarlığı temel bir beceridir: bildirimin türü, tarihi ve içeriği doğru okunduğunda, haberin fiyatlamaya olası etkisi hakkında sağlıklı fikir yürütülebilir. Sitemizdeki günlük KAP haberleri, bu bildirimlerin sadeleştirilmiş özetleridir ve her haberde ilgili KAP bildiriminin bağlantısı verilir.",
    ],
    onemliNoktalar: [
      "MKK tarafından işletilir; tüm bildirimler halka açıktır.",
      "Resmî bilginin birincil kaynağıdır; söylentiler KAP'tan doğrulanmalıdır.",
      "Özel durum açıklamaları fiyat üzerinde en hızlı etki yaratan bildirim türüdür.",
    ],
    sorular: [
      {
        soru: "KAP bildirimlerini nereden takip edebilirim?",
        cevap:
          "kap.org.tr adresinden şirket bazında veya bildirim türüne göre takip edebilirsiniz. Günün öne çıkan bildirimlerinin sadeleştirilmiş özetleri için sitemizin haberler bölümünü kullanabilirsiniz.",
      },
    ],
    iliskiliTerimler: ["vbts-nedir", "kayitli-sermaye-tavani-nedir"],
    iliskiliSayfalar: [
      {
        title: "KAP Açıklamaları Nasıl Okunur?",
        href: "/rehberler/kap-aciklamalari-nasil-okunur",
        description: "Bildirim türleri ve yatırımcı için okuma rehberi.",
      },
      {
        title: "Güncel KAP Haberleri",
        href: "/haberler/kategori/kap-bildirimleri",
        description: "Günün önemli KAP bildirimlerinin özetleri.",
      },
    ],
  },

  // ------------------------------------------------------------ İŞARETÇİ ---
  {
    slug: "halka-arz",
    terim: "Halka Arz",
    kisaTanim: "Şirket paylarının ilk kez veya ek olarak halka satışa sunulması.",
    eslesmeler: ["halka arz", "halka arzı"],
    harici: "/rehberler/halka-arz-nedir",
    arac: { title: "Halka Arz Kazanç Hesaplama", href: "/halka-arz/kazanc-hesapla" },
  },
  {
    slug: "izahname",
    terim: "İzahname",
    kisaTanim: "Halka arzda yatırımcıyı bilgilendiren resmî belge.",
    eslesmeler: ["izahname"],
    harici: "/rehberler/izahname-nedir",
  },
  {
    slug: "brut-takas",
    terim: "Brüt Takas",
    kisaTanim: "Alım-satımın netleştirme olmadan, tam bedel ve pay teslimiyle yapılması tedbiri.",
    eslesmeler: ["brüt takas"],
    harici: "/rehberler/brut-takas-nedir",
  },
  {
    slug: "devre-kesici",
    terim: "Devre Kesici",
    kisaTanim: "Sert fiyat hareketlerinde işlemlerin geçici olarak durdurulması mekanizması.",
    eslesmeler: ["devre kesici"],
    harici: "/rehberler/devre-kesici-nedir",
  },
  {
    slug: "esit-dagitim",
    terim: "Eşit Dağıtım",
    kisaTanim: "Halka arzda payların katılımcılara eşit sayıda dağıtılması yöntemi.",
    eslesmeler: ["eşit dağıtım"],
    harici: "/rehberler/esit-dagitim-nedir",
  },
  {
    slug: "oransal-dagitim",
    terim: "Oransal Dağıtım",
    kisaTanim: "Halka arzda payların talep büyüklüğüne oranla dağıtılması yöntemi.",
    eslesmeler: ["oransal dağıtım"],
    harici: "/rehberler/oransal-dagitim-nedir",
  },
  {
    slug: "t1-t2-bakiye",
    terim: "T1-T2 Bakiye",
    kisaTanim: "Takası henüz tamamlanmamış satış bedelleri; bazı halka arzlarda talepte kullanılamaz.",
    eslesmeler: ["t1-t2", "t+1", "t+2"],
    harici: "/rehberler/t1-t2-bakiye-nedir",
  },
  {
    slug: "katilim-endeksi",
    terim: "Katılım Endeksi",
    kisaTanim: "Katılım finans ilkelerine uygun payların yer aldığı endeks.",
    eslesmeler: ["katılım endeksi", "katılım finans"],
    harici: "/rehberler/katilim-endeksi",
  },
  {
    slug: "sermaye-artirimi",
    terim: "Sermaye Artırımı (Bedelli / Bedelsiz / Tahsisli)",
    kisaTanim: "Şirketin sermayesini nakit, iç kaynak veya belirli yatırımcılara satışla artırması.",
    eslesmeler: ["bedelsiz sermaye", "bedelli sermaye", "tahsisli sermaye", "sermaye artırımı", "sermaye tavanı"],
    harici: "/rehberler/sermaye-artirimlari",
    arac: { title: "Sermaye Artırımı Hesaplayıcı", href: "/borsa/sermaye-artirimi" },
  },
  {
    slug: "ruchan-hakki",
    terim: "Rüçhan Hakkı",
    kisaTanim: "Bedelli sermaye artırımında mevcut ortağın yeni pay alma önceliği.",
    eslesmeler: ["rüçhan"],
    harici: "/rehberler/ruchan-hakki-nedir",
  },
  {
    slug: "pay-geri-alimi",
    terim: "Pay Geri Alımı",
    kisaTanim: "Şirketin kendi paylarını borsadan geri satın alması.",
    eslesmeler: ["geri alım", "pay geri"],
    harici: "/rehberler/pay-geri-alim-programi-nedir",
  },
  {
    slug: "degerleme-oranlari",
    terim: "F/K, PD/DD ve FD/FAVÖK",
    kisaTanim: "Hisse değerlemede kullanılan temel çarpanlar.",
    eslesmeler: ["favök", "f/k", "pd/dd"],
    harici: "/rehberler/fk-pddd-fdfavok-nedir",
  },
  {
    slug: "bist-islem-kodu",
    terim: "BIST İşlem Kodu",
    kisaTanim: "Payın borsadaki kısa sembolü (örn. THYAO, ASELS).",
    eslesmeler: ["işlem kodu"],
    harici: "/rehberler/bist-islem-kodu-nedir",
  },
  {
    slug: "bilanco",
    terim: "Bilanço",
    kisaTanim: "Şirketin varlık, borç ve özkaynak tablosu; nasıl okunacağı rehberde.",
    eslesmeler: ["bilanço", "finansal sonuç"],
    harici: "/rehberler/bilanco-nasil-okunur",
  },
  {
    slug: "temettu",
    terim: "Temettü (Kâr Payı)",
    kisaTanim: "Şirket kârının ortaklara dağıtılan bölümü.",
    eslesmeler: ["temettü"],
    harici: "/temettu/temettu-egitimi",
    arac: { title: "Temettü Hesaplama Aracı", href: "/temettu/temettu-hesaplama-araci" },
  },
];

// Kendi sayfası üretilecek terimler (harici işaretçiler hariç).
export function ozgunTerimler(): SozlukTerimi[] {
  return sozlukTerimleri.filter((t) => !t.harici);
}

export function terimGetir(slug: string): SozlukTerimi | undefined {
  return sozlukTerimleri.find((t) => t.slug === slug && !t.harici);
}

// Bir terimin bağlantı adresi: özgünse /sozluk/<slug>, işaretçiyse harici href.
export function terimHref(t: SozlukTerimi): string {
  return t.harici ?? `/sozluk/${t.slug}`;
}

// Verilen metinde (örn. haber başlığı) geçen terimleri bulur.
// Türkçe küçük harfe çevirerek arar; en fazla `limit` sonuç döner.
export function metindekiTerimler(metin: string, limit = 4): SozlukTerimi[] {
  const kucuk = metin.toLocaleLowerCase("tr-TR");
  const bulunan: SozlukTerimi[] = [];
  for (const terim of sozlukTerimleri) {
    if (terim.eslesmeler.some((e) => kucuk.includes(e))) {
      bulunan.push(terim);
      if (bulunan.length >= limit) break;
    }
  }
  return bulunan;
}
