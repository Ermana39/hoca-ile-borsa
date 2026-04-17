import Link from "next/link";

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

OTOSR
Otosor Otomotiv A.Ş.

Baycan Elektrik Müteahhitlik San. ve Tic. A.Ş.

Tiryaki Anadolu Holding A.Ş.

Sakarya Elektrik Dağıtım A.Ş.

Reis Makina Tic. ve San. A.Ş.

Fortis Enerji Elektrik Üretim A.Ş.

TIMUR
(nef) Timur Gayrimenkul Geliştirme Yapı ve Yatırım A.Ş.

Çimstone İnşaat Malzemeleri San. ve Tic. A.Ş.

GLMND
Güllük Mandalya Turizm Liman İşletmeleri A.Ş.

Point Solar Elektrik Üretim Sanayi Tic. A.Ş.

Özel İskenderun Gelişim Hastanesi San. ve Tic. A.Ş.

TV8TV
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

Bizzcar Filo Kiralama Hizmetleri A.Ş.

Selectum Gayrimenkul Yatırım Ortaklığı A.Ş.

Taksim Holding A.Ş.

Mpg Makine Prodüksiyon Grubu Makine İmalat San. ve Tic. A.Ş.

İdç Liman İşletmeleri A.Ş.

Gümüşoğlu Tekstil San. ve Tic. A.Ş.

Naturel Holding A.Ş.

Evofone Teknoloji A.Ş.

QYHOL
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

Eti Elektrometalurji A.Ş.`;

function ReklamAlani({ variant = "yatay" }: { variant?: "yatay" | "icerik" }) {
  const alanClass =
    variant === "icerik"
      ? "min-h-[220px] sm:min-h-[250px] lg:min-h-[280px]"
      : "min-h-[100px] sm:min-h-[110px] lg:min-h-[120px]";

  return (
    <section aria-label="Reklam alanı" className={`w-full ${alanClass}`}>
      <div className={`w-full ${alanClass}`} />
    </section>
  );
}

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
  const ilkKelime = label.trim().split(/\s+/)[0] || "";
  return slugify(ilkKelime);
}

function getTaslakListesi() {
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
    .filter((item) => item.label && !kodSatiriMi(item.label));
}

export default function TaslakIzahnamelerPage() {
  const taslakIzahnameler = getTaslakListesi();

  const firstSplitIndex = 24;
  const secondSplitIndex = 48;

  return (
    <main className="min-h-screen bg-white px-4 py-6 md:px-6">
      <div className="mx-auto max-w-5xl">
        <div className="mb-6 flex flex-wrap gap-3">
          <Link
            href="/"
            className="inline-block rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100"
          >
            Ana Sayfa
          </Link>

          <Link
            href="/halka-arz"
            className="inline-block rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100"
          >
            Geri
          </Link>
        </div>

        <section className="mb-6">
          <ReklamAlani variant="yatay" />
        </section>

        <h1 className="mb-6 text-3xl font-bold text-zinc-900">
          Taslak İzahnameler
        </h1>

        <div className="space-y-3">
          {taslakIzahnameler.map((item, index) => (
            <div key={`${item.klasor}-${index}`} className="space-y-3">
              <Link
                href={`/halka-arz/taslak-izahnameler/${item.klasor}`}
                className="block rounded-xl border border-red-200 bg-red-50 px-4 py-4 text-base font-medium text-zinc-900 transition hover:bg-red-100"
              >
                {item.label}
              </Link>

              {index === firstSplitIndex && <ReklamAlani variant="yatay" />}
              {index === secondSplitIndex && <ReklamAlani variant="yatay" />}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}