import type { MetadataRoute } from "next";

const siteUrl = "https://www.hocaileborsa.com";

const taslakMetin = `Türkiye Emlak Katılım Bankası A.Ş.

Aras Elektrik Dağıtım A.Ş.

Ekol Girişim Sermayesi Yatırım Ortaklığı A.Ş.

Sönmez Global Plastik A.Ş.

Babacan Gayrimenkul Yatırım Ortaklığı A.Ş.

İon Kentsel Gayrimenkul Yatırım Ortaklığı A.Ş.

(aspiliç) As Ofis Damızlık Yumurta Yem Gıda San. ve Tic. A.Ş.

Türker Yenilenebilir Enerji Yatırım A.Ş.

Tatilbudur Seyahat Acenteliği ve Turizm A.Ş.

Schmid Pekintaş Güneş Enerji Sistemleri San. ve Tic. A.Ş.

Arkoz Madencilik Enerji San. ve Tic. A.Ş.

Effective Invest Yatırım Holding A.Ş.

Anemon Turizm ve İnşaat Tic. A.Ş.

Atel Teknoloji ve Savunma San. A.Ş.

Tellioğlu Yem-Gıda Entegre Tesisleri San. ve Tic. A.Ş.

Sinbo Küçük Ev Aletleri San. ve Tic. A.Ş.

Oltan ve Köleoğlu Elektrik ve Enerji Üretimi Tic. A.Ş.

Pilsan Plastik ve Oyuncak Sanayii A.Ş.

Lider Sistem Teknolojileri A.Ş.

(Doğtat) Doğkar Gıda Maddeleri Üretim San. ve Tic. A.Ş.

(Pek food) Pek Dondurulmuş Gıda San. ve Tic. A.Ş.

Odeon Turizm İşletmeciliği A.Ş.

Mercanlar Otomotiv Tic. A.Ş.

Inavıtas Enerji A.Ş.

Otosor Otomotiv A.Ş.

Baycan Elektrik Müteahhitlik San. ve Tic. A.Ş.

Tiryaki Anadolu Holding A.Ş.

Sakarya Elektrik Dağıtım A.Ş.

Reis Makina Tic. ve San. A.Ş.

Fortis Enerji Elektrik Üretim A.Ş.

(nef) Timur Gayrimenkul Geliştirme Yapı ve Yatırım A.Ş.

Çimstone İnşaat Malzemeleri San. ve Tic. A.Ş.

Güllük Mandalya Turizm Liman İşletmeleri A.Ş.

Point Solar Elektrik Üretim Sanayi Tic. A.Ş.

Özel İskenderun Gelişim Hastanesi San. ve Tic. A.Ş.

Tv8 Tv Yayıncılık A.Ş.

Dorçe Prefabrik Yapı ve İnşaat Sanayii Tic. A.Ş.

Koç Bakır Kablo San. ve Tic. A.Ş.

Innovance Bilgi Teknolojileri A.Ş.

Noksel Çelik Boru Sanayi A.Ş.

Beşler Makarna Un İrmik Gıda San. ve Tic. A.Ş.

Deba Atık Yönetimi ve Elektrik Üretimi Yatırım Sanayi A.Ş.

Dağ Gayrimenkul Yatırım Ortaklığı A.Ş.

İstinyepark İstanbul Gayrimenkul Yatırım Ortaklığı A.Ş.

Hastavuk Gıda Tarım Hayvancılık A.Ş.

Zms Demir Kömür Petrol Ürünleri Tic. ve San. A.Ş.

Mar Gayrimenkul Yatırım Ortaklığı A.Ş.

Ic Gayrimenkul Yatırım Ortaklığı A.Ş.

Selectum Gayrimenkul Yatırım Ortaklığı A.Ş.

Taksim Holding A.Ş.

Gümüşoğlu Tekstil San. ve Tic. A.Ş.

Naturel Holding A.Ş.

Evofone Teknoloji A.Ş.

Q Yatırım Holding A.Ş.

Kon-Tek Kontrol Teknolojileri ve Otomasyon San. ve Tic. A.Ş.

Biosys Biyomedikal Mühendislik San. ve Tic. A.Ş.

Sapro Temizlik Ürünleri San. ve Tic. A.Ş.

Joygame Oyun ve Teknoloji A.Ş.

Borsan Kablo Elektrik Aydınlatma İnşaat San. ve Tic. A.Ş.

Demes Kablo San. ve Tic. A.Ş.

Koray Girişim Sermayesi Yatırım Ortaklığı A.Ş.

Kutup Yenilenebilir Enerji Üretim A.Ş.

Adra Holding A.Ş.

Proline Pvc Plastik A.Ş.

Re Pie Yatırım Holding A.Ş.

Başakkent Gayrimenkul Yatırım Ortaklığı A.Ş.

Kuzuoğlu Su Ürünleri San. ve Tic. A.Ş.

Panda Alüminyum A.Ş.

(Tredaş) Trakya Elektrik Dağıtım A.Ş.

Turk Oluklu Mukavva ve Ambalaj Sanayi A.Ş.

Esasburda Turizm ve İnşaat San. Tic. A.Ş.

İz Baskı San. ve Tic. A.Ş.

Ral Gayrimenkul Yatırım Ortaklığı A.Ş.

Sanat Ambalaj San. ve Tic. A.Ş.

Özlem Tarım Ürünleri A.Ş.

Baytuna Grup Yatırım Sağlık Turizm San. ve Tic. A.Ş.

Separ Plastik San. ve Tic. A.Ş.

Beyoğlu Çikolata Sanayi Tic. A.Ş.

Bakırcı Gayrimenkul Yatırım Ortaklığı A.Ş.

Özseç Beton Madencilik İnşaat Sanayi Tic. A.Ş.

Sector Tarım Kimya Gıda Pazarlama San. ve Tic. A.Ş.

Doğa Sigorta A.Ş.

Akademi Çevre Entegre Atık Yönetimi Endüstri A.Ş.

Konelsis Enerji Elektronik Kontrol Sistemleri A.Ş.

Net Global Endüstriyel Yatırımlar A.Ş.

Başakkent Girişim Sermayesi Yatırım Ortaklığı A.Ş.

Vaden Otomotiv San. ve Tic. A.Ş.

Oğuzata Gayrimenkul Yatırım Ortaklığı A.Ş.

Özova Tarım A.Ş.

Pttem Teknoloji ve Elektronik Hizmetleri A.Ş.

Efor Gübre Madencilik San. Tic. A.Ş.

Namet Gıda San. ve Tic. A.Ş.

Polifarma İlaç San. ve Tic. A.Ş.

İnfinia Mühendislik A.Ş.

Efg Elektrik Enerji A.Ş.

Eti Elektrometalurji A.Ş.

Büyük Hekimoğulları Gıda San. ve Tic.A.Ş.

Deniz Eko Enerji ve Geri Dönüşüm A.Ş.

Fcr Gayrimenkul Yatırım Ortaklığı A.Ş.

Fide Konserve Gıda San. A.Ş.

Biem İlaç San. ve Tic. A.Ş.

İntetra Teknoloji ve Bilişim Hizmetleri A.Ş.

Zebrano Mobilya Teknolojileri A.Ş.

Hür Çelik Sanayi ve Dış Tic. A.Ş.

Makel Elektrik Malzemeleri San. ve Tic. A.Ş.

İhlas Girişim Sermayesi Yatırım Ortaklığı A.Ş.

Dbe Elektrik Mühendislik Proje ve Danışmanlık A.Ş.

Nmt Lojistik A.Ş.

Milk Academy Süt Ürünleri San. ve Tic. A.Ş.

Aksam Otogong İç ve Dış Tic. A.Ş.

Anadolu Mikronize Kimya San. ve Tic. A.Ş.

Kisan İnşaat Mühendislik San. ve Tic. A.Ş.

Pürsan Pigment Ürünleri San. ve Tic. A.Ş.

Club Jolly Turizm ve Tic. A.Ş.

Türker Vangölü Enerji Yatırım A.Ş.

Kale Jet Motorları Sanayi A.Ş.

Haver Farma İlaç A.Ş.

Teknika Plast Teknik Kalıp Plastik San. ve Tic. A.Ş.

Çitlekçi Mağazacılık Gıda A.Ş.

Altun Gıda A.Ş.

Ekiciler Süt Gıda Tarım Hayvancılık San. ve Tic. A.Ş.

Aksa Elektrik Perakende Satış A.Ş.

Karesi Polyester ve Petrokimya Sanayi A.Ş.

Saytek Medikal ve Plastik San. Tic. A.Ş.

Özpet Plastik Global San. Tic. A.Ş.

Bewen Enerji A.Ş.

Cevher Jant Sanayii A.Ş.

Masfen Enerji A.Ş.

Kapeks Kimya Sanayi A.Ş.

Metgün Enerji Yatırımları A.Ş.

Toros Tarım San. ve Tic. A.Ş.

Albayrak Hazır Beton San. ve Tic. A.Ş.

Hakan Faydasıçok Çelik A.Ş.

Pakun Üretim Gıda San. ve Tic. A.Ş.

Beta Enerji ve Teknoloji A.Ş.

İsvea Seramik ve Banyo Ürünleri Sanayi A.Ş.

Şa-Ra Enerji İnşaat Tic. ve San. A.Ş.

Quick Sigorta A.Ş.

Elin Elektrik İnşaat Müşavirlik Proje Taahhüt Tic. ve San. A.Ş.

Kardemir Çelik Sanayi A.Ş.

X Koren Elektrik A.Ş.

Ekinciler Demir ve Çelik Sanayi A.Ş.

Soho Giyim ve Enerji A.Ş.

Yeşil Global Enerji A.Ş.

Saat ve Saat San. ve Tic. A.Ş.

Orzaks İlaç ve Kimya San. Tic. A.Ş.

Eston Yapı A.Ş.

Flo Mağazacılık ve Pazarlama A.Ş.

Enerjeo Kemaliye Enerji Üretim A.Ş.

Allbatross Girişim Sermayesi Yatırım Ortaklığı A.Ş.

Uçak Tekstil Turizm İthalat İhracat San. ve Tic. A.Ş.

Alcas Metal Sanayi A.Ş.

Golda Gıda San. ve Tic. A.Ş.

Kırlıoğlu Kimya San. ve Tic. A.Ş.

Soybaş Demir Çelik San. ve Tic. A.Ş.

Acacia Maden İşletmeleri A.Ş.

Gdz Elektrik Dağıtım A.Ş.

Çimko Çimento ve Beton San. Tic. A.Ş.

Teknik Yapı Teknik Yapılar San. ve Tic. A.Ş.

Birleşim Yeşil Enerji A.Ş.

Uras Kimya San. ve Tic. A.Ş.

(Intercity) Ekim Turizm Tic. ve San. A.Ş.

Zen Girişim Sermayesi Yatırım Ortaklığı A.Ş.

Narlı Feribot İşletmeciliği A.Ş.

(enterprise) Yes Oto Kiralama ve Turizm Yatırımları A.Ş.

Arkopa Ahşap Panel Sanayi A.Ş.

Multınet Kurumsal Hizmetler A.Ş.

Mega Teks Tekstil Ürünleri İmalat San. ve Tic. A.Ş.

Uslu Çsm Demir Çelik A.Ş.

(Penti) Penca Tekstil Çorap San. ve Tic. A.Ş.

Gama Recycle Sürdürülebilir Teknolojiler A.Ş.

Akçelik Demir Çelik San. ve Tic. A.Ş.

Techmine Girişim Sermayesi Yatırım Ortaklığı A.Ş.

Tavuk Dünyası Gıda San. ve Tic. A.Ş.

Kızılay İçecek San. ve Tic. A.Ş.

Smm Tekstil A.Ş.

Hdm Çelik Boru San. ve Tic. A.Ş.

Çavuşoğlu Demir Çelik Geri Dönüşüm San. Tic. A.Ş.

Tezkim Tarımsal Kimya San. ve Tic. A.Ş.

Kaymet Metal İmalat San. ve Tic. A.Ş.

Mikro Yazılımevi Yazılım Hizmetleri Bilgisayar San. ve Tic. A.Ş.

Sümer Faktoring A.Ş.

Omega Elektrik Pano A.Ş.

OutMedya İletişim A.Ş.`;

function temizSirketAdi(deger: string) {
  return deger.replace(/^\([^)]+\)\s*/g, "").trim();
}

function kodSatiriMi(satir: string) {
  const temiz = satir.trim();
  return /^[A-Z0-9ÇĞİÖŞÜ]{3,10}$/.test(temiz);
}

function slugify(text: string) {
  return text
    .trim()
    .toLocaleLowerCase("tr")
    .replace(/ı/g, "i")
    .replace(/İ/g, "i")
    .replace(/ğ/g, "g")
    .replace(/Ğ/g, "g")
    .replace(/ü/g, "u")
    .replace(/Ü/g, "u")
    .replace(/ş/g, "s")
    .replace(/Ş/g, "s")
    .replace(/ö/g, "o")
    .replace(/Ö/g, "o")
    .replace(/ç/g, "c")
    .replace(/Ç/g, "c")
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

function getSirketKlasorAdi(label: string) {
  const ozelKlasorler: Record<string, string> = {
    "Başakkent Girişim Sermayesi Yatırım Ortaklığı A.Ş.": "basakkentgsyo",
  };

  if (ozelKlasorler[label]) {
    return ozelKlasorler[label];
  }

  const ilkKelime = label.trim().split(/\s+/)[0] || "";
  return slugify(ilkKelime);
}

function getTaslakSirketUrlleri() {
  return taslakMetin
    .split(/\n\s*\n/)
    .map((blok) => blok.trim())
    .filter(Boolean)
    .map((blok) => {
      const satirlar = blok
        .split("\n")
        .map((satir) => satir.trim())
        .filter(Boolean);

      const sonSatir = satirlar[satirlar.length - 1];
      const gorunenSirket = temizSirketAdi(sonSatir);

      return {
        label: gorunenSirket,
        klasor: getSirketKlasorAdi(gorunenSirket),
      };
    })
    .filter((item) => item.label && !kodSatiriMi(item.label))
    .map((item) => `/halka-arz/taslak-izahnameler/${item.klasor}`);
}

function createEntry(
  url: string,
  priority: number,
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] = "weekly"
): MetadataRoute.Sitemap[number] {
  return {
    url: `${siteUrl}${url}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "/",
    "/borsa",
    "/borsa/gunluk-borsa-ozeti",
    "/borsa/dikkat-cekenler",
    "/borsa/dip-zirve-analizi",
    "/borsa/egitim-videolari",
    "/borsa/formasyonlar",
    "/borsa/geri-alim-programlari",
    "/borsa/gosterge-taramalari",
    "/borsa/grafik-analiz",
    "/borsa/hacim-artisi-analizi",
    "/borsa/yeni-is-anlasmalari",
    "/borsa/pivot-analizi",
    "/borsa/oran-analizi",
    "/borsa/tedbirli-hisseler",

    "/halka-arz",
    "/halka-arz/kazanc-hesapla",
    "/halka-arz/talep-hesapla",
    "/halka-arz/onayli-izahnameler",
    "/halka-arz/taslak-izahnameler",

    "/temettu",
    "/temettu/temettu-egitimi",
    "/temettu/nisan-ayi-temettu-takvimi",
    "/temettu/mayis-ayi-temettu-takvimi",
    "/temettu/haziran-ayi-temettu-takvimi",
    "/temettu/temmuz-ayi-temettu-takvimi",
    "/temettu/agustos-ayi-temettu-takvimi",
    "/temettu/temettu-hesaplama-araci",
    "/temettu/temettu-verimi-hesaplama",

    "/fonlar",
    "/fonlar/haftalik-yatirim-fonlarinin-en-cok-tercih-ettigi-hisseler",
    "/fonlar/getiri",
    "/fonlar/tarihsel-veriler",

    "/mevduat-kredi-faizleri",
    "/mevduat-kredi-faizleri/mevduat-faizi-oranlari",
    "/mevduat-kredi-faizleri/tuketici-faizi-oranlari",
    "/mevduat-kredi-faizleri/konut-kredisi-oranlari",
    "/mevduat-kredi-faizleri/tasit-kredisi-oranlari",
  ];

  const taslakSirketRoutes = getTaslakSirketUrlleri();

  const tumUrller = Array.from(new Set([...staticRoutes, ...taslakSirketRoutes]));

  return tumUrller.map((route) => {
    if (route === "/") return createEntry(route, 1, "daily");
    if (
      route === "/borsa" ||
      route === "/halka-arz" ||
      route === "/temettu" ||
      route === "/fonlar" ||
      route === "/mevduat-kredi-faizleri"
    ) {
      return createEntry(route, 0.95, "daily");
    }

    if (route.startsWith("/halka-arz/taslak-izahnameler/")) {
      return createEntry(route, 0.8, "weekly");
    }

    return createEntry(route, 0.85, "weekly");
  });
}