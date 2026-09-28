from pathlib import Path
from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER, TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, PageBreak,
    KeepTogether,
)


ROOT = Path(__file__).resolve().parents[2]
OUTPUT = ROOT / "output" / "pdf" / "bilgi-teknolojileri-calisma-notlari.pdf"
OUTPUT.parent.mkdir(parents=True, exist_ok=True)

FONT_DIR = Path(r"C:\Windows\Fonts")
pdfmetrics.registerFont(TTFont("Arial", str(FONT_DIR / "arial.ttf")))
pdfmetrics.registerFont(TTFont("Arial-Bold", str(FONT_DIR / "arialbd.ttf")))
pdfmetrics.registerFontFamily("Arial", normal="Arial", bold="Arial-Bold")

NAVY = colors.HexColor("#17324D")
BLUE = colors.HexColor("#23658A")
TEAL = colors.HexColor("#087A77")
ORANGE = colors.HexColor("#D9792B")
INK = colors.HexColor("#1B2730")
MUTED = colors.HexColor("#5B6872")
PALE_BLUE = colors.HexColor("#EAF3F8")
PALE_TEAL = colors.HexColor("#E8F6F3")
PALE_ORANGE = colors.HexColor("#FFF2E5")
LINE = colors.HexColor("#C9D7DF")
WHITE = colors.white

styles = getSampleStyleSheet()
styles.add(ParagraphStyle(name="Cover", fontName="Arial-Bold", fontSize=27, leading=32,
                          alignment=TA_CENTER, textColor=NAVY, spaceAfter=14))
styles.add(ParagraphStyle(name="CoverSub", fontName="Arial", fontSize=12, leading=18,
                          alignment=TA_CENTER, textColor=BLUE, spaceAfter=14))
styles.add(ParagraphStyle(name="DocTitle", fontName="Arial-Bold", fontSize=18, leading=22,
                          textColor=NAVY, spaceAfter=6))
styles.add(ParagraphStyle(name="Kicker", fontName="Arial-Bold", fontSize=8.2, leading=10.5,
                          textColor=TEAL, spaceAfter=4))
styles.add(ParagraphStyle(name="Section", fontName="Arial-Bold", fontSize=11, leading=14,
                          textColor=BLUE, spaceBefore=8, spaceAfter=4))
styles.add(ParagraphStyle(name="Body", fontName="Arial", fontSize=9.5, leading=13.3,
                          textColor=INK, spaceAfter=5))
styles.add(ParagraphStyle(name="BulletTR", fontName="Arial", fontSize=9.25, leading=12.8,
                          textColor=INK, leftIndent=10, firstLineIndent=-7, spaceAfter=3))
styles.add(ParagraphStyle(name="Small", fontName="Arial", fontSize=8.3, leading=11.2,
                          textColor=MUTED, spaceAfter=3))
styles.add(ParagraphStyle(name="TableHead", fontName="Arial-Bold", fontSize=8.1, leading=10.5,
                          textColor=WHITE, alignment=TA_LEFT))
styles.add(ParagraphStyle(name="TableCell", fontName="Arial", fontSize=7.9, leading=10.4,
                          textColor=INK))
styles.add(ParagraphStyle(name="Question", fontName="Arial", fontSize=9.1, leading=12.6,
                          textColor=INK, spaceAfter=5))
styles.add(ParagraphStyle(name="Answer", fontName="Arial", fontSize=8.8, leading=12,
                          textColor=INK, spaceAfter=3))


def P(text, style="Body"):
    return Paragraph(text.replace("—", "-").replace("–", "-"), styles[style])


def add_bullets(story, title, items):
    story.append(P(title, "Section"))
    for item in items:
        story.append(P("• " + item, "BulletTR"))


def add_box(story, title, body, background=PALE_BLUE):
    table = Table([[P(title, "Kicker")], [P(body, "Body")]], colWidths=[176 * mm])
    table.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), background),
        ("BOX", (0, 0), (-1, -1), 0.6, LINE),
        ("LEFTPADDING", (0, 0), (-1, -1), 8),
        ("RIGHTPADDING", (0, 0), (-1, -1), 8),
        ("TOPPADDING", (0, 0), (-1, 0), 7),
        ("BOTTOMPADDING", (0, -1), (-1, -1), 4),
    ]))
    story.append(table)


def add_table(story, headers, rows, widths=None):
    if widths is None:
        widths = [176 * mm / len(headers)] * len(headers)
    data = [[P(h, "TableHead") for h in headers]]
    data += [[P(str(cell), "TableCell") for cell in row] for row in rows]
    table = Table(data, colWidths=widths, repeatRows=1, hAlign="LEFT")
    table.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, 0), NAVY),
        ("GRID", (0, 0), (-1, -1), 0.45, LINE),
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("LEFTPADDING", (0, 0), (-1, -1), 5),
        ("RIGHTPADDING", (0, 0), (-1, -1), 5),
        ("TOPPADDING", (0, 0), (-1, -1), 4),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 4),
        ("ROWBACKGROUNDS", (0, 1), (-1, -1), [WHITE, colors.HexColor("#F5F8FA")]),
    ]))
    story.append(table)


UNITS = [
    {
        "n": 1,
        "title": "Bilgi Teknolojilerine Giriş",
        "goal": "Temel kavramları, veri türlerini, ölçüm ölçeklerini ve karar süreçlerini ayırt etmek.",
        "core": [
            "<b>DIKW sırası:</b> Veri → Enformasyon → Bilgi → Bilgelik. Veri ham gerçeklerdir; enformasyon işlenip anlam kazanan veridir; bilgi, enformasyonun deneyim ve bağlamla kullanılabilir hâlidir; bilgelik doğru yargı ve gelecek yönelimli seçimdir.",
            "<b>Kavrama:</b> Mevcut bilgi ve enformasyondan yeni sonuçlar üretme yeteneğidir. <b>Zekâ:</b> bilgiyi davranışa dönüştürme yeteneğidir. <b>İçgörü:</b> bir bağlamdaki neden-sonuç ilişkisini anlamaktır.",
            "Enformasyon çoğunlukla <i>kim, ne, nerede, ne zaman</i>; bilgi ise <i>nasıl</i> sorusuna yanıt verir. Bilgelik kolay ve kesin cevabı olmayan, geleceğe dönük değerlendirmelerle ilişkilidir.",
            "<b>Dijital veri türleri:</b> sayısal, metinsel, mantıksal/Boolean ve zamansal. Sayısal veri kesikli veya sürekli olabilir; Boolean yalnız doğru/yanlış gibi iki durum taşır.",
            "<b>Mantıksal veri organizasyonu:</b> karakter → alan → kayıt → dosya → veritabanı. Alan bir niteliği, kayıt tek bir varlığa ait alanların bütününü, dosya ilişkili kayıtları içerir.",
            "<b>Birimler:</b> bit, 0 veya 1 değeridir; 1 bayt = 8 bit. Depolama birimleri bayt temellidir.",
            "<b>Bilgi işleme:</b> toplama → düzenleme → analiz → kaydetme ve geri çağırma → işleme/güncelleme → aktarma → gösterme.",
            "<b>Karar türleri:</b> yapısal karar rutin ve programlanabilir; yapısal olmayan karar belirsiz ve sezgi gerektirir; yarı yapısal karar ikisinin özelliklerini taşır.",
        ],
        "table_headers": ["Ölçek", "Temel özellik", "Örnek / yapılabilen işlem"],
        "table_rows": [
            ["Nominal (isimsel)", "Sadece sınıflandırır; sıra ve büyüklük yoktur.", "Cinsiyet kodu, şehir, bölüm. Kodların toplamı anlamsızdır."],
            ["Ordinal (sıralı)", "Sıra vardır; aralıklar ve oranlar anlamlı değildir.", "Eğitim düzeyi, yarış sırası, memnuniyet derecesi."],
            ["Aralık", "Eşit aralıklar ve farklar anlamlı; gerçek sıfır yoktur.", "°C/°F. Toplama-çıkarma yapılabilir, oran kurulmaz."],
            ["Oran", "Eşit aralık ve gerçek sıfır vardır; oranlar anlamlıdır.", "Yaş, ağırlık, uzunluk, gelir, satış adedi."],
        ],
        "focus": [
            "Piramidin tabanı ve en yoğun kavram <b>veri</b>; tepe ve geleceğe dönük kavram <b>bilgelik</b>tir.",
            "Alanların birleşimi <b>kayıt</b>; kayıtların birleşimi <b>dosya</b>; ilişkili dosya/kayıt bütünü <b>veritabanı</b>dır.",
            "Nominal yalnız sınıf, ordinal sıra, aralık fark, oran ise gerçek sıfır ve oran bilgisi verir.",
            "Karar yoksa seçim de yoktur; karar verme birden fazla alternatif arasından seçim yapmayı gerektirir.",
        ],
        "quiz": [
            "1) Verinin anlam kazanmış hâli nedir?",
            "2) Eğitim düzeyi hangi ölçüm ölçeğine örnektir?",
            "3) Alanlardan oluşan veri grubu nedir?",
            "4) Stok kritik seviyeye düşünce otomatik sipariş verilmesi hangi karar türüdür?",
        ],
        "quiz_answer": "1 Enformasyon · 2 Ordinal · 3 Kayıt · 4 Yapısal karar",
    },
    {
        "n": 2,
        "title": "Yazılım ve Donanım",
        "goal": "Bilgisayarın fiziksel parçalarını, bellekleri ve yazılım türlerini işlevleriyle eşleştirmek.",
        "core": [
            "<b>Donanım</b> bilgisayarın fiziksel parçalarıdır; <b>yazılım</b> donanıma ne yapacağını söyleyen komutlar bütünüdür.",
            "<b>Anakart</b> bileşenleri bir araya getirir. Bileşenlerin haberleştiği yol <b>BUS/veri yolu</b>dur.",
            "<b>CPU</b> komutları işler; aritmetik ve mantıksal işlemleri yapar. Saat hızı Hertz ile ölçülür. Çekirdek fiziksel işlem birimi, iş parçacığı sanal iş akışıdır. <b>Multithreading</b> fiziksel çekirdeklerden sanal iş parçacıkları oluşturur.",
            "<b>GPU</b> grafik işlemlerine özel işlemcidir. <b>PSU</b> bilgisayarın ihtiyaç duyduğu elektriği uygun gerilimlere dönüştürerek sağlar.",
            "<b>Girdi:</b> klavye, fare, touchpad, trackball, grafik tablet, tarayıcı, mikrofon. <b>Çıktı:</b> monitör, yazıcı, hoparlör, projeksiyon.",
            "<b>Depolama:</b> HDD manyetik ve hareketli parçalıdır; SSD elektronik ve daha hızlıdır. SSD arayüzleri SATA, mSATA, M.2 SATA ve M.2 NVMe olabilir. CD-RW silinip yeniden yazılabilir.",
            "<b>İletişim:</b> NIC/ağ arabirim kartı bilgisayarı ağa bağlar; anakarta gömülü veya genişletme kartı olabilir.",
            "<b>Firmware</b> donanımın temel işlevlerini yerine getirmesini sağlayan, ROM türü bellekte saklanabilen gömülü yazılımdır.",
        ],
        "table_headers": ["Bellek", "Enerji kesilince", "Özellik"],
        "table_rows": [
            ["RAM", "Veri silinir", "Çalışan programların geçici verisini tutar; işlemciye hızlı erişim sağlar."],
            ["DRAM", "Veri silinir", "Dinamik yapıdadır; periyodik yenileme/şarj gerekir."],
            ["SRAM", "Veri silinir", "DRAM'den hızlı ve pahalıdır; yenileme gerektirmez, önbellekte kullanılır."],
            ["ROM", "Veri korunur", "Salt okunur, kalıcı bellek ailesidir."],
            ["PROM", "Veri korunur", "Bir kez programlanabilir; sonra değiştirilemez."],
            ["EPROM", "Veri korunur", "Ultraviyole ışıkla silinip yeniden programlanabilir."],
            ["EEPROM", "Veri korunur", "Elektriksel olarak silinip yeniden programlanabilir."],
        ],
        "focus": [
            "<b>Sistem yazılımları:</b> işletim sistemi, aygıt sürücüleri ve sistemi yöneten temel yazılımlar. İşletim sistemi dosya, bellek, süreç, cihaz ve ağ kaynaklarını yönetir.",
            "<b>Uygulama yazılımları:</b> kullanıcı işlerini yapar. <b>Yardımcı yazılım:</b> analiz, bakım, yedekleme, sıkıştırma, güvenlik ve optimizasyon sağlar.",
            "<b>Geliştirme yazılımları:</b> kod editörü, derleyici, yorumlayıcı ve geliştirme ortamlarıdır. <b>Mobil yazılımlar:</b> telefon/tablet uygulamalarıdır.",
            "ROM'a veri yazmak işletim sisteminin görevi değildir. İşletim sistemi donanım sayılmaz.",
        ],
        "quiz": [
            "1) Bir kez programlanabilen salt okunur bellek hangisidir?",
            "2) Anakart üzerindeki haberleşme yolunun adı nedir?",
            "3) Elektrik kesilince verisi silinen ve yenileme isteyen bellek hangisidir?",
            "4) Bilgisayarı ağa bağlayan donanım nedir?",
        ],
        "quiz_answer": "1 PROM · 2 BUS/veri yolu · 3 DRAM · 4 NIC/ağ arabirim kartı",
    },
    {
        "n": 3,
        "title": "Ofis Uygulamaları",
        "goal": "Kelime işlemci, hesap tablosu, sunum, e-posta ve veritabanı araçlarını ayırt etmek.",
        "core": [
            "<b>Ofis paketi</b> kelime işlemci, hesap tablosu, sunum ve e-posta gibi araçları birlikte sunar. Microsoft Office ticari/kapalı kaynak; LibreOffice ücretsiz/açık kaynak örneğidir.",
            "<b>Kelime işlemci:</b> metin belgesi oluşturur, düzenler, biçimlendirir, saklar ve yazdırır. Word, Writer, Pages ve Google Docs örnektir.",
            "<b>Hesap tablosu:</b> veriyi satır-sütun kesişimindeki hücrelerde tutar; hesaplama, sıralama, filtreleme, grafik ve analiz yapar. Excel, Calc, Sheets örnektir.",
            "<b>Hücre adresi:</b> sütun harfi + satır numarasıdır; örnek G8. Aralık iki noktayla yazılır: A1:E2.",
            "<b>Formül</b> = işaretiyle başlar. <b>Fonksiyon</b> hazır işlem kalıbıdır: SUM(), AVERAGE(), COUNT(). PivotTable büyük veri kümelerini özetler ve gruplar.",
            "<b>Sunum:</b> slaytlarla metin, görsel, grafik, video ve animasyon sunar. PowerPoint, Impress, Keynote ve Google Slides örnektir.",
            "<b>E-posta istemcisi:</b> e-posta, takvim ve adres defterini yönetir. Outlook ve Thunderbird örnektir.",
            "<b>Ofis veritabanı:</b> küçük ölçekli verileri tablo, sorgu, form ve raporlarla yönetir. Microsoft Access ve LibreOffice Base örnektir.",
        ],
        "table_headers": ["Kavram / uzantı", "Ne anlama gelir?"],
        "table_rows": [
            ["A1", "Göreceli başvuru; kopyalanınca satır ve sütun değişebilir."],
            ["$A$1", "Mutlak başvuru; satır ve sütun sabittir."],
            ["$A1 / A$1", "Karma başvuru; sırasıyla sütun veya satır sabittir."],
            [".docx / .xlsx / .pptx", "Standart Word / Excel / PowerPoint dosyaları."],
            [".xlsm / .pptm", "Makro içeren Excel / PowerPoint dosyaları."],
            [".csv", "Düz metin tablo verisi; küçük ve uyumludur, formül/biçim/grafik/çoklu sayfa saklamaz."],
            [".ppsx", "Doğrudan slayt gösterisi olarak açılan PowerPoint dosyası."],
        ],
        "focus": [
            "Sunumun üç temel işlevi: metin düzenleme, grafik/görsel ekleme ve slayt gösterisi.",
            "POP3 postayı cihaza indirir; IMAP postayı sunucuda tutup cihazlar arasında eşitler; SMTP gönderim içindir.",
            "Çevrim içi araçlar her yerden erişim, otomatik kaydetme ve eş zamanlı iş birliği sağlar; internet bağımlılığı ve veri güvenliği sınırlılık olabilir.",
            "Google Workspace tek başına toplantı uygulaması değildir; Google Meet toplantı uygulamasıdır. AutoCAD tipik ofis uygulaması değildir.",
        ],
        "quiz": [
            "1) A1:E5 ifadesindeki iki nokta neyi belirtir?",
            "2) $C4 başvurusunda hangi bölüm sabittir?",
            "3) Formül, biçim ve grafik saklamayan metin tabanlı tablo biçimi nedir?",
            "4) Küçük ölçekli ofis veritabanı yazılımına bir örnek verin.",
        ],
        "quiz_answer": "1 Hücre aralığı · 2 C sütunu · 3 CSV · 4 Microsoft Access veya LibreOffice Base",
    },
    {
        "n": 4,
        "title": "Ağ ve İnternet",
        "goal": "Ağ türlerini, donanımlarını, topolojileri ve internet-web ayrımını öğrenmek.",
        "core": [
            "<b>Ağ</b> veri ve kaynak paylaşmak için en az iki cihazın bağlanmasıdır. Ağdaki her bağlantı noktası/cihaz <b>düğüm (node)</b> olarak adlandırılabilir.",
            "<b>LAN:</b> ev, ofis veya kampüs gibi küçük alan. <b>MAN:</b> şehir/anakent ölçeğinde birden çok LAN. <b>WAN:</b> geniş coğrafya ve ağların ağı; internet en büyük WAN'dır.",
            "<b>VPN:</b> genel internet üzerinde şifreli sanal tünelle özel ağa güvenli erişim sağlar. <b>SAN:</b> sunucuları ortak depolama havuzlarına bağlayan yüksek hızlı özel ağdır.",
            "<b>Modem:</b> iletim ortamına uygun sinyal dönüşümü ve internet bağlantısı sağlar. <b>Hub:</b> veriyi tüm portlara yollar. <b>Switch:</b> MAC adresine göre ilgili cihaza yollar.",
            "<b>Router:</b> IP adreslerine göre ağlar arasında paket yönlendirir. Switch çoğunlukla Katman 2/ağ içi; router Katman 3/ağlar arası çalışır.",
            "<b>Bridge:</b> iki LAN bölümünü bağlar. <b>NIC:</b> cihazı ağa bağlar. <b>Access point:</b> kablosuz erişim sağlar. <b>Firewall:</b> yetkili ve yetkisiz trafiği kurallara göre kontrol eder.",
            "<b>Ethernet</b> kablolu yerel ağlarda yaygın fiziksel/veri bağlantı teknolojisidir. <b>TCP/IP</b> internet iletişiminin temel protokol ailesidir.",
            "<b>İnternet</b> küresel ağ altyapısıdır; <b>Web</b> internet üzerinden erişilen sayfa ve bilgi hizmetidir. Web, internetin bir hizmetidir.",
        ],
        "table_headers": ["Topoloji", "Yapı", "Sınavda bilinmesi gereken"],
        "table_rows": [
            ["Noktadan noktaya", "İki düğüm arasında doğrudan bağlantı", "En basit topoloji."],
            ["Bus", "Tek ana kablo", "Ucunda terminatör; ana kablo arızası tüm ağı etkiler."],
            ["Yıldız", "Her düğüm merkezî hub/switch'e bağlı", "Yönetim ve arıza tespiti kolay; merkez arızası kritiktir."],
            ["Ağaç", "Hiyerarşik, dallanan yapı", "Ölçeklenebilir; üst cihaz arızası geniş alanı etkiler."],
            ["Halka", "Her düğüm iki komşuya bağlı", "Sinyal halka boyunca ilerler; tek hata ağı etkileyebilir."],
            ["Mesh", "Düğümler çoklu yollarla bağlı", "Dayanıklı fakat karmaşık ve maliyetli; tam veya kısmi olabilir."],
            ["Hibrit", "İki veya daha fazla topolojinin birleşimi", "Büyük ve farklı ihtiyaçlı yapılarda kullanılır."],
        ],
        "focus": [
            "TCP/IP katmanları: uygulama, taşıma, internet ve ağ erişimi/veri bağlantısı. <i>Okuma katmanı</i> diye bir katman yoktur.",
            "Web 1.0 statik ve tek yönlü; Web 2.0 kullanıcı üretimli ve etkileşimli; Web 3.0 anlamsal/akıllı; Web 4.0 nesnelerin interneti ve her yerde bağlantı ile ilişkilendirilir.",
            "Router IP adresi ve ağlar arası iletişim; switch MAC adresi ve ağ içi iletişim kavramlarıyla eşleştirilir.",
            "Fiziksel topoloji kablo ve cihaz yerleşimi; mantıksal topoloji verinin ağda nasıl hareket ettiğidir.",
        ],
        "quiz": [
            "1) Ev içindeki cihaz ağı çoğunlukla hangi ağ türüdür?",
            "2) Paylaşılan depolama havuzunu sunuculara sunan ağ hangisidir?",
            "3) Ağ içinde MAC adresine göre iletim yapan cihaz hangisidir?",
            "4) IoT'nin baskın olduğu web aşaması hangisidir?",
        ],
        "quiz_answer": "1 LAN · 2 SAN · 3 Switch · 4 Web 4.0",
    },
    {
        "n": 5,
        "title": "İnternet Uygulamaları",
        "goal": "Tarayıcı, arama motoru, sosyal ağ, e-devlet ve e-ticaret kavramlarını sınıflandırmak.",
        "core": [
            "<b>Web tarayıcısı</b> web sayfalarını görüntüleyen uygulamadır; Chrome, Firefox, Edge ve Safari örnektir. <b>Arama motoru</b> web sayfalarını tarar, indeksler ve sorguya göre sonuç sıralar; Google, Bing, Yandex ve DuckDuckGo örnektir.",
            "<b>SEO</b> web sitesini ücretli olmayan organik arama sonuçlarında daha görünür hâle getirme çalışmalarıdır.",
            "<b>Sosyal ağ</b> kullanıcıların profil oluşturup içerik paylaşmasını ve etkileşim kurmasını sağlar. Web 2.0 kullanıcı tarafından üretilen içerik ve iş birliğiyle ilişkilidir.",
            "<b>E-devlet</b> kamu hizmetlerinin bilgi ve iletişim teknolojileriyle daha hızlı, erişilebilir, verimli ve şeffaf sunulmasıdır.",
            "E-devletin dört boyutu: <b>e-ticaret, e-hizmet, e-yönetim, e-demokrasi</b>. E-hizmet elektronik kamu hizmeti; e-yönetim idari süreçlerin bütünleşmesi; e-demokrasi karar süreçlerine elektronik katılımdır.",
            "E-devletin temel amaçları: hizmetleri yaygın ve erişilebilir kılmak; vatandaş isteklerini değerlendirip katılımı artırmak; kamu kurumlarını daha akılcı ve verimli çalıştırmak.",
            "<b>E-ticaret</b> yalnız web mağazası değildir; telefon, faks, e-posta ve elektronik veri değişimi gibi araçlarla yapılan ticari işlemleri de kapsar.",
            "Ürün kapsamına göre: <b>dikey</b> tek ürün grubu, <b>yatay</b> çok ürün grubu, <b>dropshipping</b> stok tutmadan siparişe göre satıştır.",
        ],
        "table_headers": ["Model", "Taraflar", "Örnek"],
        "table_rows": [
            ["B2B", "İşletme → işletme", "Toptan ofis malzemesi satışı"],
            ["B2C", "İşletme → tüketici", "Bir mağazadan bireysel çevrim içi alışveriş"],
            ["C2C", "Tüketici → tüketici", "İkinci el satış platformu"],
            ["C2B", "Tüketici → işletme", "Bireyin işletmeye çevrim içi hizmet satması"],
            ["G2B / B2G", "Devlet → işletme / işletme → devlet", "DMO satışı / çevrim içi ihale"],
            ["G2C / C2G", "Devlet → vatandaş / vatandaş → devlet", "Elektronik kamu hizmeti / vergi-harç ödemesi"],
            ["M2M", "Makine → makine", "İnsan müdahalesi olmadan otomatik ticari işlem"],
        ],
        "focus": [
            "E-devlette aktif vatandaş, elektronik iletişim, yatay/koordineli yapı, düşük işlem maliyeti, etkileşim ve şeffaflık öne çıkar.",
            "Arama motoru ile tarayıcı aynı şey değildir: tarayıcı programdır; arama motoru web hizmetidir.",
            "Dikey e-ticaret örneği tek ürün grubuna odaklanan site; yatay e-ticaret örneği çok kategorili pazar yeridir.",
            "7/24 hizmet, bürokrasinin ve tekrarın azalması, kurumlar arası veri paylaşımı e-devletin kazanımlarıdır.",
        ],
        "quiz": [
            "1) Organik arama görünürlüğünü artıran çalışma nedir?",
            "2) Halkın elektronik araçlarla karar süreçlerine katılması hangi e-devlet boyutudur?",
            "3) İkinci el satış hangi e-ticaret modelidir?",
            "4) Stok tutmadan satış modelinin adı nedir?",
        ],
        "quiz_answer": "1 SEO · 2 E-demokrasi · 3 C2C · 4 Dropshipping",
    },
    {
        "n": 6,
        "title": "Bilgi Sistemleri",
        "goal": "Bilgi sistemi bileşenlerini, karar seviyelerini ve sistem sınıflarını eşleştirmek.",
        "core": [
            "Bilgi sisteminin beş kaynağı: <b>donanım, yazılım, veri, ağ ve insan</b>. İnsan kaynağı son kullanıcıları ve sistem uzmanlarını kapsar.",
            "Bilgi sistemi doğru enformasyonu doğru kişiye, doğru zamanda; hızlı, güncel, tam ve bütün hâlde sunmalıdır.",
            "<b>Karar seviyesi eşleştirmesi:</b> operasyonel-kısa vadeli-yapısal; taktik-orta vadeli-yarı yapısal; stratejik-uzun vadeli-yapısal olmayan.",
            "<b>Hareket İşlem Sistemi (TPS):</b> satış, ödeme, stok, rezervasyon ve bordro gibi çok sayıdaki rutin işlemi kaydeder; operasyonel düzeydedir.",
            "<b>Ofis Otomasyon Sistemi:</b> doküman, iş akışı ve rutin ofis işlemlerini otomatikleştirir; elektronik belge yönetimi örnektir.",
            "<b>Kurumsal İş Birliği Sistemi:</b> iletişim, ortak belge, proje, görev, erişim ve sürüm yönetimiyle ekip çalışmasını destekler.",
            "<b>Bilgi Yönetim Sistemi:</b> eğitim materyali, politika, prosedür ve deneyim gibi kurumsal bilgiyi depolar, düzenler ve paylaşır. CAD/CAM bilgi çalışanı sistemlerine örnek olabilir.",
            "<b>Yönetim Bilişim Sistemi (MIS):</b> TPS çıktılarını raporlayarak orta düzey yöneticilerin taktik kararlarını destekler; pazarlama, üretim, finans, muhasebe, AR-GE ve insan kaynakları alt sistemleri vardır.",
        ],
        "table_headers": ["Sistem", "Seviye / karar", "Çıktı veya temel özellik"],
        "table_rows": [
            ["TPS", "Operasyonel / yapısal", "Rutin işlem kaydı; büyük veri hacmi, standart çıktı"],
            ["MIS", "Taktik / çoğunlukla yapısal", "Periyodik, istisnai, talep ve bildirim raporları"],
            ["DSS/Karar Destek", "Yarı yapısal sorunlar", "Etkileşimli sorgu; veri tabanı + model tabanı + kullanıcı arayüzü"],
            ["EIS/Üst Yönetim", "Stratejik / yapısal olmayan", "Özet, görsel, iç ve dış çevre bilgisi; üst yönetime özel"],
            ["Uzman sistem", "Karmaşık kararlar", "İnsan uzmanının düşünme/çıkarım sürecini taklit eder"],
        ],
        "focus": [
            "DSS analizleri: <b>what-if</b> değişken değişince sonuç; <b>duyarlılık</b> bir değişkeni art arda değiştirir; <b>hedef arama</b> istenen sonuç için girdiyi bulur; <b>optimizasyon</b> kısıtlar altında en iyi değeri bulur.",
            "DSS'nin temel bileşenleri veri tabanı, model tabanı ve kullanıcı arayüzüdür; ağ kaynağı bu üçlüde sayılmaz.",
            "MIS sabit ve önceden tanımlı raporlar sunarken DSS daha esnek, etkileşimli ve analitik modellemeye dayalıdır.",
            "EIS grafik yoğun, kolay kullanılır ve stratejik kararlar için iç/dış çevreden özet bilgi sağlar.",
        ],
        "quiz": [
            "1) Bordro ve günlük satış kaydı hangi sistem türüdür?",
            "2) Bir değişkeni art arda değiştirip sonucu gözleme analizi nedir?",
            "3) Stratejik düzeyde özet ve görsel bilgi sunan sistem hangisidir?",
            "4) DSS'nin üç temel bileşeni nedir?",
        ],
        "quiz_answer": "1 TPS · 2 Duyarlılık analizi · 3 EIS/Üst Yönetim Bilişim Sistemi · 4 Veri tabanı, model tabanı, kullanıcı arayüzü",
    },
    {
        "n": 7,
        "title": "Güvenlik ve Etik",
        "goal": "Bilgi güvenliği ilkelerini, e-posta/ağ güvenliğini ve bilişim etiği boyutlarını öğrenmek.",
        "core": [
            "<b>Bilgi güvenliği</b>, bilgi saklanırken ve taşınırken izinsiz erişimi önleme ve bütünlüğü koruma çalışmalarının bütünüdür.",
            "Temel unsurlar: <b>gizlilik</b> yalnız yetkilinin erişmesi; <b>bütünlük</b> verinin değişmemesi/doğruluğu; <b>kullanılabilirlik</b> yetkilinin gerektiğinde erişmesi; <b>kimlik kanıtlama</b> kullanıcıyı doğrulama; <b>inkâr edememe</b> tarafların işlemi reddedememesidir.",
            "<b>SSL/GSK</b> güvenli bağlantının öncülüdür; <b>TLS/TKG</b> standartlaştırılmış ve geliştirilmiş halidir. Tarayıcıdaki kilit simgesi bağlantının şifreli olduğunu gösterir.",
            "Kablosuz ağ sınıfları: <b>WWAN</b> geniş alan, <b>WMAN</b> anakent, <b>WLAN</b> yerel alan, <b>WPAN</b> kişisel alan. WLAN standardı IEEE 802.11 ailesidir.",
            "<b>PGP</b> ve <b>S/MIME</b> e-posta içeriğini şifreleme/doğrulama çözümleridir. SMTP gönderme; POP3 indirme; IMAP sunucuda yönetim ve çoklu cihaz eşitleme protokolüdür.",
            "SPF yetkili gönderici sunucularını belirler; DKIM iletinin değiştirilmediğini imzayla doğrular; DMARC, SPF ve DKIM sonucuna göre alan adı politikası uygular.",
            "Virüs, solucan, truva atı ve casus yazılım zararlı yazılım türleridir. Antivirüs, güvenlik duvarı, güncelleme ve yedekleme temel önlemlerdir.",
            "Bilgi Güvenliği Yönetim Sistemi için temel standart <b>ISO 27001</b>dir; odaklarından biri risk yönetimidir.",
        ],
        "table_headers": ["Etik boyut", "Temel soru / anlam"],
        "table_rows": [
            ["Doğruluk", "Bilginin kökeni, kaynağı, tarihi ve yeri doğrulanmış mı?"],
            ["Gizlilik / mahremiyet", "Kişisel bilgiye kim, hangi izinle erişebilir?"],
            ["Erişilebilirlik", "Bilgi ve teknolojiye adil erişim var mı; dijital bölünme oluşuyor mu?"],
            ["Fikri mülkiyet", "Eserin sahibi ve kullanım hakkı kimde; telif ve atıf kurallarına uyuldu mu?"],
        ],
        "focus": [
            "Bilişim etiği alanındaki ilk çalışmalar <b>Norbert Wiener</b>; bilgisayar etiği terimi <b>Walter Maner</b>; 1985'teki önemli makale <b>James Moor</b> ile eşleştirilir.",
            "Türkiye'de bilişim mesleği ve ahlak ilkeleriyle ilgili ilk çalışma 1997'de Türkiye Bilişim Vakfı tarafından yapılmıştır.",
            "Açık kaynak yazılım: kaynak kodu incelenebilir ve geliştirilebilir; lisans koşulları geçerlidir. Ücretsiz olması tek başına açık kaynak olduğu anlamına gelmez.",
            "Siber zorbalıkta kişiyi engellemek, kanıtı saklamak, güvenilir yetişkin/kurum veya yetkililere bildirmek ve kişisel bilgiyi korumak gerekir.",
        ],
        "quiz": [
            "1) Bilgiye yalnız yetkililerin erişebilmesi hangi ilkedir?",
            "2) E-posta gönderim protokolü hangisidir?",
            "3) Çoklu cihazlarda sunucuyla eşitlenen e-posta protokolü hangisidir?",
            "4) Bilgi güvenliği yönetim standardı nedir?",
        ],
        "quiz_answer": "1 Gizlilik · 2 SMTP · 3 IMAP · 4 ISO 27001",
    },
    {
        "n": 8,
        "title": "Bilgi Teknolojilerinde Güncel Yaklaşımlar",
        "goal": "Büyük veri, blokzincir, yapay zekâ, IoT, AR/VR ve bulut hizmetlerini ayırt etmek.",
        "core": [
            "<b>Büyük veri</b>, geleneksel araçların yönetmekte zorlandığı büyük, hızlı ve farklı veri kümeleridir. Temel bileşenleri: <b>hacim, hız, çeşitlilik ve değer</b>.",
            "<b>Blokzincir</b> merkezi otoriteye bağlı olmayan, dağıtılmış ve değiştirilmeye dirençli kayıt defteridir. Her kullanım için uygun değildir; birden çok taraf, ortak doğrulama, güven dağıtımı ve değiştirilemez kayıt ihtiyacı olduğunda anlamlıdır.",
            "<b>Akıllı kontrat</b> koşullar gerçekleşince otomatik çalışan, blokzincirde tutulan programlanmış sözleşmedir; işlemler izlenebilir ve geri döndürülemez olabilir.",
            "<b>Yapay zekâ</b> dil, öğrenme, akıl yürütme ve problem çözme gibi insan yeteneklerini taklit eden sistemler alanıdır. <b>Uzman sistem</b> insan uzmanın çıkarım sürecini belirli bir alanda simüle eder.",
            "<b>Makine öğrenmesi</b> veriden örüntü öğrenerek tahmin veya sınıflandırma yapar. Veri, özellik, algoritma ve model temel bileşenlerdir.",
            "Öğrenme türleri: <b>denetimli</b> etiketli veri; <b>denetimsiz</b> etiketsiz veride yapı keşfi; <b>pekiştirmeli</b> ödül-ceza ile öğrenme.",
            "<b>Derin öğrenme</b> çok katmanlı yapılarla özellik çıkarmayı büyük ölçüde otomatikleştiren makine öğrenmesi alt alanıdır. <b>Veri madenciliği</b> büyük veri içinden yararlı örüntü ve bilgi keşfidir.",
            "<b>IoT</b>, benzersiz kimliğe sahip sensör ve cihazların insan müdahalesi olmadan internet üzerinden veri paylaşmasıdır; gerçek zamanlı takip ve tahmine dayalı analiz sağlar.",
        ],
        "table_headers": ["Kavram", "Ayırt edici özellik"],
        "table_rows": [
            ["AR / artırılmış gerçeklik", "Gerçek dünyanın üzerine sayısal görüntü, ses veya bilgi ekler."],
            ["VR / sanal gerçeklik", "Tamamen bilgisayar tarafından oluşturulmuş ortama taşır."],
            ["IaaS", "Sanal/fiziksel sunucu, depolama ve ağ altyapısı hizmeti."],
            ["PaaS", "İşletim sistemi, çalışma ortamı, veri tabanı ve geliştirme platformu hizmeti."],
            ["SaaS", "Hazır uygulama internet üzerinden kullanılır; altyapı ve platform sağlayıcıca yönetilir."],
            ["Sis bilişim", "Veriyi buluta göndermeden önce üretildiği yere yakın noktada işler; gecikmeyi ve veri trafiğini azaltır."],
        ],
        "focus": [
            "Klasik mantıkta üyelik 0 veya 1; <b>bulanık mantıkta</b> üyelik derecesi 0 ile 1 arasında olabilir.",
            "Yapay sinir ağı giriş katmanı, bir veya daha çok gizli katman ve çıkış katmanından oluşur; tahmin ve sınıflandırmada kullanılır.",
            "IoT örnekleri: akıllı ev, giyilebilir cihaz, akıllı şehir, endüstriyel otomasyon, kargo ve filo takibi.",
            "Bulut merkezî/uzak kaynak kullanır; sis bilişim işlemi uç noktaya yaklaştırır. Temel fark verinin işlendiği konum ve gecikmedir.",
        ],
        "quiz": [
            "1) Büyük verinin farklı formatlardan oluşmasını hangi V açıklar?",
            "2) Etiketlenmiş veriden öğrenme türü nedir?",
            "3) Sanal makine ve depolama sunan bulut modeli hangisidir?",
            "4) Gerçek dünyanın üzerine dijital nesne ekleyen teknoloji nedir?",
        ],
        "quiz_answer": "1 Çeşitlilik · 2 Denetimli öğrenme · 3 IaaS · 4 AR/artırılmış gerçeklik",
    },
]


MOCK = [
    ("Bilgi hiyerarşisinin doğru sırası hangisidir?", ["Veri-Bilgi-Enformasyon-Bilgelik", "Veri-Enformasyon-Bilgi-Bilgelik", "Bilgi-Veri-Bilgelik-Enformasyon", "Enformasyon-Veri-Bilgi-Bilgelik"], "B"),
    ("Gerçek sıfırı bulunan ölçüm ölçeği hangisidir?", ["Nominal", "Ordinal", "Aralık", "Oran"], "D"),
    ("Karakterlerin birleşerek oluşturduğu ve bir niteliği temsil eden yapı nedir?", ["Alan", "Kayıt", "Dosya", "Veritabanı"], "A"),
    ("Yeni bir pazara girme gibi belirsiz ve sezgi gerektiren karar türü hangisidir?", ["Yapısal", "Yapısal olmayan", "Rutin", "Programlanmış"], "B"),
    ("Elektriksel olarak silinip yeniden programlanabilen ROM türü hangisidir?", ["PROM", "DRAM", "EEPROM", "SRAM"], "C"),
    ("Grafik işlemlerine özel işlemci hangisidir?", ["CPU", "GPU", "PSU", "NIC"], "B"),
    ("Bilgisayarın ağ bağlantısını sağlayan donanım hangisidir?", ["NIC", "ROM", "GPU", "Cache"], "A"),
    ("Bilgisayarı analiz, bakım ve optimize etmeye yarayan yazılım türü hangisidir?", ["Uygulama", "Yardımcı", "Mobil", "Geliştirme"], "B"),
    ("Excel'de mutlak hücre başvurusu hangisidir?", ["A1", "$A1", "A$1", "$A$1"], "D"),
    ("A1:E10 ifadesinde kullanılan ':' neyi belirtir?", ["Formülü", "Hücre aralığını", "Makroyu", "Çalışma kitabını"], "B"),
    ("Makro içeren Excel dosyasının uzantısı hangisidir?", [".xlsx", ".xlsm", ".csv", ".xltx"], "B"),
    ("E-postaları sunucuda tutup cihazlar arasında eşitleyen protokol hangisidir?", ["SMTP", "POP3", "IMAP", "FTP"], "C"),
    ("Dünyanın en büyük WAN ağı hangisidir?", ["LAN", "SAN", "İnternet", "VPN"], "C"),
    ("Ağ içinde MAC adresine göre ilgili porta iletim yapan cihaz hangisidir?", ["Hub", "Switch", "Modem", "Router"], "B"),
    ("Tek ana kablonun arızasının tüm ağı etkileyebildiği topoloji hangisidir?", ["Bus", "Yıldız", "Mesh", "Hibrit"], "A"),
    ("Aşağıdakilerden hangisi internet ile web ilişkisini doğru açıklar?", ["İkisi tamamen aynıdır", "Web altyapı, internet hizmettir", "İnternet altyapı, web hizmettir", "Web yalnız e-postadır"], "C"),
    ("Web sitesinin organik arama sonuçlarında görünürlüğünü artırma çalışması nedir?", ["VPN", "SEO", "IoT", "ERP"], "B"),
    ("E-devlette halkın karar süreçlerine elektronik katılımı hangi boyuttur?", ["E-hizmet", "E-yönetim", "E-demokrasi", "E-ticaret"], "C"),
    ("İşletmeden tüketiciye e-ticaret modeli hangisidir?", ["B2B", "B2C", "C2B", "C2C"], "B"),
    ("Tek ürün grubuna odaklanan e-ticaret türü hangisidir?", ["Yatay", "Dikey", "C2C", "M2M"], "B"),
    ("Günlük satış, stok ve ödeme hareketlerini kaydeden sistem hangisidir?", ["TPS", "EIS", "DSS", "Uzman sistem"], "A"),
    ("DSS'nin temel bileşenleri arasında hangisi yoktur?", ["Veri tabanı", "Model tabanı", "Kullanıcı arayüzü", "Ağ kaynağı"], "D"),
    ("İstenen sonuca ulaşmak için gerekli girdi değerini bulma analizi hangisidir?", ["What-if", "Duyarlılık", "Hedef arama", "Örüntü tanıma"], "C"),
    ("Üst yönetime stratejik, özet ve görsel bilgi sunan sistem hangisidir?", ["TPS", "OAS", "EIS", "KMS"], "C"),
    ("Bilginin izinsiz değiştirilmemesi hangi güvenlik unsurudur?", ["Gizlilik", "Bütünlük", "Kullanılabilirlik", "İnkâr edememe"], "B"),
    ("E-posta gönderimi için kullanılan protokol hangisidir?", ["SMTP", "IMAP", "POP3", "WPA2"], "A"),
    ("SPF ve DKIM sonuçlarına göre alan adı politikası uygulayan teknoloji hangisidir?", ["AES", "DMARC", "PGP", "S/MIME"], "B"),
    ("Bilişim etiğinin dört boyutundan biri değildir?", ["Doğruluk", "Gizlilik", "Pazarlama", "Fikri mülkiyet"], "C"),
    ("Büyük verinin farklı kaynak ve formatlardan oluşmasını ifade eden özellik hangisidir?", ["Hız", "Hacim", "Çeşitlilik", "Değer"], "C"),
    ("Etiketlenmemiş veride grupları keşfeden öğrenme türü hangisidir?", ["Denetimli", "Denetimsiz", "Pekiştirmeli", "Kural tabanlı"], "B"),
    ("Hazır uygulamanın internet üzerinden sunulduğu bulut modeli hangisidir?", ["IaaS", "PaaS", "SaaS", "IoT"], "C"),
    ("Veriyi üretildiği yere yakın işleyerek gecikmeyi azaltan yaklaşım hangisidir?", ["Bulut bilişim", "Sis bilişim", "Sanal gerçeklik", "Blokzincir"], "B"),
]


def on_page(canvas, doc):
    canvas.saveState()
    page = canvas.getPageNumber()
    if page > 1:
        canvas.setStrokeColor(LINE)
        canvas.line(18 * mm, 284 * mm, 192 * mm, 284 * mm)
        canvas.setFont("Arial", 7.5)
        canvas.setFillColor(MUTED)
        canvas.drawString(18 * mm, 288 * mm, "BİLGİ TEKNOLOJİLERİ • SINAV ODAKLI ÇALIŞMA NOTLARI")
        canvas.drawRightString(192 * mm, 12 * mm, str(page))
    canvas.restoreState()


doc = SimpleDocTemplate(
    str(OUTPUT), pagesize=A4,
    rightMargin=17 * mm, leftMargin=17 * mm,
    topMargin=17 * mm, bottomMargin=17 * mm,
    title="Bilgi Teknolojileri - Sınav Odaklı Çalışma Notları",
    author="Çalışma notu",
)

story = []

# Cover
story.append(Spacer(1, 34 * mm))
story.append(P("BİLGİ TEKNOLOJİLERİ", "Cover"))
story.append(P("Sınav Odaklı Ünite Ünite Çalışma Notları", "CoverSub"))
cover_box = Table([
    [P("8 ÜNİTE", "Kicker"), P("32 SORULUK DENEME", "Kicker"), P("HIZLI TEKRAR TABLOLARI", "Kicker")],
    [P("Temel kavramlar ve sınav ayrımları", "Small"), P("Cevap anahtarıyla birlikte", "Small"), P("Karşılaştırmalar ve ezber ipuçları", "Small")],
], colWidths=[58.5 * mm] * 3)
cover_box.setStyle(TableStyle([
    ("BACKGROUND", (0, 0), (-1, -1), PALE_TEAL),
    ("BOX", (0, 0), (-1, -1), 0.7, TEAL),
    ("INNERGRID", (0, 0), (-1, -1), 0.4, LINE),
    ("ALIGN", (0, 0), (-1, -1), "CENTER"),
    ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
    ("TOPPADDING", (0, 0), (-1, -1), 8),
    ("BOTTOMPADDING", (0, 0), (-1, -1), 8),
]))
story.append(cover_box)
story.append(Spacer(1, 22 * mm))
story.append(P("Bu notlar, verilen ders kitabındaki konu sırası ve ünite sonu soru eğilimleri temel alınarak hazırlanmıştır.", "CoverSub"))
story.append(PageBreak())

# Contents and method
story.append(P("NASIL ÇALIŞILIR?", "DocTitle"))
add_box(story, "3 TURDA ÇALIŞMA", "<b>1. tur:</b> Her ünitenin ana kavramlarını oku. <b>2. tur:</b> Karşılaştırma tablosunu kapatıp kendin anlat. <b>3. tur:</b> Hızlı kontrol ve deneme sorularını çöz; yanlış yaptığın ünitenin 'sınav odağı' bölümüne dön.", PALE_TEAL)
story.append(Spacer(1, 5 * mm))
add_table(story, ["Ünite", "Konu", "En kritik ayrım"], [
    ["1", "Bilgi Teknolojilerine Giriş", "DIKW, ölçüm ölçekleri, veri organizasyonu"],
    ["2", "Yazılım ve Donanım", "RAM/ROM türleri, CPU-GPU, yazılım sınıfları"],
    ["3", "Ofis Uygulamaları", "Hücre başvuruları, dosya biçimleri, e-posta protokolleri"],
    ["4", "Ağ ve İnternet", "LAN-MAN-WAN-SAN, cihazlar, topolojiler, web aşamaları"],
    ["5", "İnternet Uygulamaları", "Tarayıcı-arama motoru, e-devlet, e-ticaret modelleri"],
    ["6", "Bilgi Sistemleri", "TPS-MIS-DSS-EIS ve karar seviyeleri"],
    ["7", "Güvenlik ve Etik", "Gizlilik-bütünlük-kullanılabilirlik, protokoller, etik"],
    ["8", "Güncel Yaklaşımlar", "Büyük veri, blokzincir, AI, IoT, AR/VR, IaaS-PaaS-SaaS"],
], widths=[15 * mm, 58 * mm, 103 * mm])
story.append(Spacer(1, 5 * mm))
add_box(story, "SINAV STRATEJİSİ", "Soruda geçen anahtar kelimeyi yakala: <b>gerçek sıfır → oran</b>, <b>tek ana kablo → bus</b>, <b>MAC → switch</b>, <b>IP/ağlar arası → router</b>, <b>rutin işlem → TPS</b>, <b>etkileşimli model → DSS</b>, <b>üst yönetim/stratejik → EIS</b>, <b>hazır uygulama → SaaS</b>.", PALE_ORANGE)
story.append(PageBreak())

for unit in UNITS:
    story.append(P(f"ÜNİTE {unit['n']}", "Kicker"))
    story.append(P(unit["title"], "DocTitle"))
    add_box(story, "HEDEF", unit["goal"], PALE_TEAL)
    add_bullets(story, "Temel çalışma notları", unit["core"])
    story.append(PageBreak())

    story.append(P(f"ÜNİTE {unit['n']} • KARŞILAŞTIRMA VE SINAV ODAĞI", "Kicker"))
    story.append(P(unit["title"], "DocTitle"))
    add_table(story, unit["table_headers"], unit["table_rows"], widths=[38 * mm, 65 * mm, 73 * mm] if len(unit["table_headers"]) == 3 else None)
    add_bullets(story, "Sınav odağı", unit["focus"])
    story.append(P("Hızlı kontrol", "Section"))
    for q in unit["quiz"]:
        story.append(P(q, "Question"))
    add_box(story, "CEVAPLAR", unit["quiz_answer"], PALE_ORANGE)
    story.append(PageBreak())

# Quick review tables
story.append(P("SON TEKRAR • KARIŞTIRILAN KAVRAMLAR", "DocTitle"))
add_table(story, ["Kavram 1", "Kavram 2", "Fark"], [
    ["Veri", "Enformasyon", "Veri hamdır; enformasyon işlenmiş ve anlam kazanmış veridir."],
    ["Aralık ölçeği", "Oran ölçeği", "Aralıkta gerçek sıfır yok; oranda vardır."],
    ["RAM", "ROM", "RAM geçici ve yazılabilir; ROM kalıcı/salt okunur bellek ailesidir."],
    ["CPU", "GPU", "CPU genel komutları; GPU grafik ve yoğun paralel işlemleri yürütür."],
    ["Göreceli", "Mutlak başvuru", "A1 kopyalanınca değişir; $A$1 sabit kalır."],
    ["Hub", "Switch", "Hub herkese yayınlar; switch MAC'e göre hedef porta yollar."],
    ["Switch", "Router", "Switch ağ içi/MAC; router ağlar arası/IP."],
    ["İnternet", "Web", "İnternet altyapı; web bu altyapıdaki hizmetlerden biridir."],
    ["Tarayıcı", "Arama motoru", "Tarayıcı uygulama; arama motoru web hizmetidir."],
    ["TPS", "MIS", "TPS rutin işlemi kaydeder; MIS yönetime düzenli rapor sunar."],
    ["MIS", "DSS", "MIS daha sabit rapor; DSS etkileşimli ve analitik modelleme."],
    ["AR", "VR", "AR gerçeği zenginleştirir; VR bilgisayar üretimi ortama taşır."],
    ["Bulut", "Sis bilişim", "Bulut uzak merkezde; sis veriye yakın noktada işler."],
], widths=[36 * mm, 36 * mm, 104 * mm])
story.append(PageBreak())

story.append(P("SON TEKRAR • EZBER HARİTASI", "DocTitle"))
add_table(story, ["Soruda görürsen", "Hatırla"], [
    ["Kim, ne, nerede, ne zaman", "Enformasyon"],
    ["Nasıl?", "Bilgi"],
    ["Gelecek, doğru yargı", "Bilgelik"],
    ["Sınıf / kategori", "Nominal"],
    ["Sıra var, aralık belirsiz", "Ordinal"],
    ["Gerçek sıfır", "Oran"],
    ["Bir kez programlanır", "PROM"],
    ["UV ışıkla silinir", "EPROM"],
    ["Elektrikle silinir", "EEPROM"],
    ["MAC adresi", "Switch"],
    ["IP, ağlar arası", "Router"],
    ["Şifreli sanal tünel", "VPN"],
    ["Depolama havuzu", "SAN"],
    ["Statik web", "Web 1.0"],
    ["Kullanıcı içeriği", "Web 2.0"],
    ["IoT ve her yerde bağlantı", "Web 4.0"],
    ["Rutin işlem", "TPS"],
    ["Orta yönetim / düzenli rapor", "MIS"],
    ["Model tabanı / etkileşimli analiz", "DSS"],
    ["Üst yönetim / stratejik", "EIS"],
    ["Gönderme / indirme / eşitleme", "SMTP / POP3 / IMAP"],
    ["Altyapı / platform / yazılım", "IaaS / PaaS / SaaS"],
], widths=[88 * mm, 88 * mm])
story.append(PageBreak())

# Mock exam
story.append(P("32 SORULUK DENEME", "DocTitle"))
story.append(P("Her soruda tek doğru seçenek vardır. Cevap anahtarı denemenin sonundadır.", "Body"))
for idx, (question, options, _) in enumerate(MOCK, start=1):
    block = [P(f"<b>{idx}.</b> {question}", "Question")]
    block.append(P(" &nbsp;&nbsp; ".join(f"<b>{chr(65+i)})</b> {opt}" for i, opt in enumerate(options)), "Small"))
    story.append(KeepTogether(block))
    if idx in (8, 16, 24):
        story.append(PageBreak())

story.append(PageBreak())
story.append(P("DENEME CEVAP ANAHTARI", "DocTitle"))
answer_rows = []
for start in range(0, 32, 8):
    row = []
    for i in range(start, start + 8):
        row.append(f"{i+1}-{MOCK[i][2]}")
    answer_rows.append(row)
add_table(story, ["1", "2", "3", "4", "5", "6", "7", "8"], answer_rows,
          widths=[22 * mm] * 8)
story.append(Spacer(1, 8 * mm))
add_box(story, "PUANLAMA", "28-32 doğru: hazır görünüyorsun. 22-27 doğru: yanlış yaptığın üniteleri bir tur daha çalış. 16-21 doğru: karşılaştırma tablolarını yeniden kur ve mini soruları çöz. 0-15 doğru: önce temel notları ünite sırasıyla tekrar et.", PALE_TEAL)
story.append(Spacer(1, 6 * mm))
add_box(story, "SON 10 DAKİKA", "DIKW sırası • dört ölçüm ölçeği • RAM/ROM türleri • göreceli/mutlak hücre başvurusu • LAN/MAN/WAN/SAN • hub/switch/router • topolojiler • B2B/B2C/C2C • TPS/MIS/DSS/EIS • SMTP/POP3/IMAP • güvenlik ilkeleri • IaaS/PaaS/SaaS.", PALE_ORANGE)

doc.build(story, onFirstPage=on_page, onLaterPages=on_page)
print(OUTPUT)
