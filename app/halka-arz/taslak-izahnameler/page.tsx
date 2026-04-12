import Link from "next/link";
import Image from "next/image";

type SearchParams = Promise<{ sirket?: string; dosya?: string }>;

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

Eti Elektrometalurji A.Ş.

Büyük Hekimoğulları Gıda San. ve Tic. A.Ş.

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

FIBAF
Fiba Faktoring A.Ş.

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

TEKYP
Teknik Yapı Teknik Yapılar San. ve Tic. A.Ş.

Birleşim Yeşil Enerji A.Ş.

Uras Kimya San. ve Tic. A.Ş.

EKIM
(Intercity) Ekim Turizm Tic. ve San. A.Ş.

Zen Girişim Sermayesi Yatırım Ortaklığı A.Ş.

NARFE
Narlı Feribot İşletmeciliği A.Ş.

YESOT
(enterprise) Yes Oto Kiralama ve Turizm Yatırımları A.Ş.

Arkopa Ahşap Panel Sanayi A.Ş.

Multınet Kurumsal Hizmetler A.Ş.

Mega Teks Tekstil Ürünleri İmalat San. ve Tic. A.Ş.

Uslu Çsm Demir Çelik A.Ş.

(Penti) Penca Tekstil Çorap San. ve Tic. A.Ş.

Gama Recycle Sürdürülebilir Teknolojiler A.Ş.

AKCEL
Akçelik Demir Çelik San. ve Tic. A.Ş.

TMGSY
Techmine Girişim Sermayesi Yatırım Ortaklığı A.Ş.

TVKDN
Tavuk Dünyası Gıda San. ve Tic. A.Ş.

KZLYI
Kızılay İçecek San. ve Tic. A.Ş.

SMMAS
Smm Tekstil A.Ş.

HDMCB
Hdm Çelik Boru San. ve Tic. A.Ş.

CAVDC
Çavuşoğlu Demir Çelik Geri Dönüşüm San. Tic. A.Ş.

TEZKM
Tezkim Tarımsal Kimya San. ve Tic. A.Ş.

KAYMT
Kaymet Metal İmalat San. ve Tic. A.Ş.

Mikro Yazılımevi Yazılım Hizmetleri Bilgisayar San. ve Tic. A.Ş.

Sümer Faktoring A.Ş.

Omega Elektrik Pano A.Ş.

OutMedya İletişim A.Ş.`;

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

      return {
        label: satirlar.join("\n"),
        dosyaAdi: satirlar[satirlar.length - 1],
      };
    });
}

function getImagePath(dosyaAdi: string) {
  return `/taslak/${dosyaAdi}.png`;
}

export default async function TaslakIzahnamelerPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const params = await searchParams;
  const secilenSirket = params?.sirket
    ? decodeURIComponent(params.sirket)
    : null;
  const secilenDosya = params?.dosya
    ? decodeURIComponent(params.dosya)
    : null;

  const taslakIzahnameler = getTaslakListesi();

  if (secilenSirket && secilenDosya) {
    const imagePath = getImagePath(secilenDosya);

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
              href="/halka-arz/taslak-izahnameler"
              className="inline-block rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100"
            >
              Geri
            </Link>
          </div>

          <section className="mb-6">
            <ReklamAlani variant="yatay" />
          </section>

          <h1 className="mb-6 whitespace-pre-line text-2xl font-bold text-zinc-900 md:text-3xl">
            {secilenSirket}
          </h1>

          <div className="overflow-hidden rounded-2xl border border-red-200 bg-red-50 p-4 md:p-6">
            <div className="overflow-hidden rounded-2xl bg-white p-2">
              <div className="relative mx-auto w-full max-w-4xl">
                <Image
                  src={imagePath}
                  alt={secilenSirket}
                  width={1600}
                  height={2200}
                  unoptimized
                  className="h-auto w-full rounded-xl object-contain"
                />
              </div>
            </div>
          </div>

          <section className="mt-8">
            <ReklamAlani variant="icerik" />
          </section>
        </div>
      </main>
    );
  }

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
            <div key={`${item.label}-${index}`} className="space-y-3">
              <Link
                href={`/halka-arz/taslak-izahnameler?sirket=${encodeURIComponent(
                  item.label
                )}&dosya=${encodeURIComponent(item.dosyaAdi)}`}
                className="block rounded-xl border border-red-200 bg-red-50 px-4 py-4 text-base font-medium text-zinc-900 transition hover:bg-red-100"
              >
                <span className="whitespace-pre-line">{item.label}</span>
              </Link>

              {index === firstSplitIndex && (
                <ReklamAlani variant="yatay" />
              )}

              {index === secondSplitIndex && (
                <ReklamAlani variant="yatay" />
              )}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}