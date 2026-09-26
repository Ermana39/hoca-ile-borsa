from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER, TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import (
    BaseDocTemplate,
    Frame,
    KeepTogether,
    NextPageTemplate,
    PageBreak,
    PageTemplate,
    Paragraph,
    Spacer,
    Table,
    TableStyle,
)


ROOT = Path(__file__).resolve().parents[2]
OUTPUT = ROOT / "output" / "pdf" / "veri-tabani-tasarimi-calisma-notlari.pdf"
OUTPUT.parent.mkdir(parents=True, exist_ok=True)

FONT_DIR = Path(r"C:\Windows\Fonts")
pdfmetrics.registerFont(TTFont("Arial", str(FONT_DIR / "arial.ttf")))
pdfmetrics.registerFont(TTFont("Arial-Bold", str(FONT_DIR / "arialbd.ttf")))

NAVY = colors.HexColor("#16324F")
BLUE = colors.HexColor("#245B87")
TEAL = colors.HexColor("#1D7A75")
PALE = colors.HexColor("#EAF2F8")
PALE_TEAL = colors.HexColor("#E8F5F3")
GOLD = colors.HexColor("#D7A62A")
INK = colors.HexColor("#17212B")
MUTED = colors.HexColor("#566573")
LINE = colors.HexColor("#CAD6E0")
WHITE = colors.white


class NumberedCanvasMixin:
    pass


def draw_header_footer(canvas, doc):
    canvas.saveState()
    width, height = A4
    canvas.setStrokeColor(LINE)
    canvas.setLineWidth(0.5)
    canvas.line(18 * mm, height - 15 * mm, width - 18 * mm, height - 15 * mm)
    canvas.setFont("Arial", 8)
    canvas.setFillColor(MUTED)
    canvas.drawString(18 * mm, height - 11.5 * mm, "VERİ TABANI TASARIMI")
    canvas.drawRightString(width - 18 * mm, height - 11.5 * mm, "ÇALIŞMA NOTLARI")
    canvas.line(18 * mm, 13 * mm, width - 18 * mm, 13 * mm)
    canvas.drawString(18 * mm, 8.5 * mm, "Hızlı öğrenme • Kavramlar • Uygulama")
    canvas.drawRightString(width - 18 * mm, 8.5 * mm, f"Sayfa {doc.page}")
    canvas.restoreState()


styles = getSampleStyleSheet()
styles.add(ParagraphStyle(
    name="CoverTitle", fontName="Arial-Bold", fontSize=27, leading=32,
    textColor=NAVY, alignment=TA_CENTER, spaceAfter=10,
))
styles.add(ParagraphStyle(
    name="CoverSub", fontName="Arial", fontSize=13, leading=19,
    textColor=BLUE, alignment=TA_CENTER, spaceAfter=20,
))
styles.add(ParagraphStyle(
    name="Unit", fontName="Arial-Bold", fontSize=20, leading=24,
    textColor=NAVY, spaceBefore=4, spaceAfter=10,
))
styles.add(ParagraphStyle(
    name="Section", fontName="Arial-Bold", fontSize=12.5, leading=16,
    textColor=BLUE, spaceBefore=9, spaceAfter=4,
))
styles.add(ParagraphStyle(
    name="BodyTR", fontName="Arial", fontSize=9.6, leading=14,
    textColor=INK, spaceAfter=6,
))
styles.add(ParagraphStyle(
    name="BulletTR", fontName="Arial", fontSize=9.3, leading=13.5,
    textColor=INK, leftIndent=12, firstLineIndent=-7, spaceAfter=3,
))
styles.add(ParagraphStyle(
    name="Small", fontName="Arial", fontSize=8, leading=11,
    textColor=MUTED,
))
styles.add(ParagraphStyle(
    name="Callout", fontName="Arial-Bold", fontSize=9.5, leading=14,
    textColor=NAVY,
))
styles.add(ParagraphStyle(
    name="TableHeader", fontName="Arial-Bold", fontSize=9.2, leading=12,
    textColor=WHITE,
))
styles.add(ParagraphStyle(
    name="CodeTR", fontName="Courier", fontSize=8.2, leading=11,
    textColor=INK, leftIndent=7, rightIndent=7, spaceBefore=4, spaceAfter=7,
    backColor=colors.HexColor("#F4F6F7"), borderPadding=7,
))


def P(text, style="BodyTR"):
    return Paragraph(text, styles[style])


def bullets(items):
    return [P("• " + item, "BulletTR") for item in items]


def callout(title, text, color=PALE):
    t = Table([[P(title, "Callout")], [P(text)]], colWidths=[167 * mm])
    t.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), color),
        ("BOX", (0, 0), (-1, -1), 0.7, BLUE if color == PALE else TEAL),
        ("LEFTPADDING", (0, 0), (-1, -1), 8),
        ("RIGHTPADDING", (0, 0), (-1, -1), 8),
        ("TOPPADDING", (0, 0), (-1, -1), 6),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 6),
    ]))
    return t


def table(headers, rows, widths=None):
    data = [[P(h, "TableHeader") for h in headers]] + [[P(str(v), "Small") for v in row] for row in rows]
    t = Table(data, colWidths=widths, repeatRows=1, hAlign="LEFT")
    t.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, 0), NAVY),
        ("TEXTCOLOR", (0, 0), (-1, 0), WHITE),
        ("GRID", (0, 0), (-1, -1), 0.45, LINE),
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("ROWBACKGROUNDS", (0, 1), (-1, -1), [WHITE, colors.HexColor("#F7F9FA")]),
        ("LEFTPADDING", (0, 0), (-1, -1), 6),
        ("RIGHTPADDING", (0, 0), (-1, -1), 6),
        ("TOPPADDING", (0, 0), (-1, -1), 5),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 5),
    ]))
    return t


def unit_header(no, title, goal):
    return [
        P(f"{no}. ÜNİTE", "Small"),
        P(title, "Unit"),
        callout("Bu ünitenin özeti", goal, PALE_TEAL),
        Spacer(1, 4 * mm),
    ]


story = []

# Cover
story += [
    Spacer(1, 38 * mm),
    P("VERİ TABANI<br/>TASARIMI", "CoverTitle"),
    P("Dersi geçmeye yönelik ünite ünite çalışma notları", "CoverSub"),
    Spacer(1, 5 * mm),
    callout(
        "Bu kitapçık nasıl kullanılmalı?",
        "Önce 1–3. ünitelerin kavramlarını öğren. Ardından 4–6. ünitelerde bağımlılık, ilişki ve normalizasyon alıştırmaları yap. Son olarak 7–8. ünitelerde bir senaryodan tablo tasarımı çıkarmayı dene.",
    ),
    Spacer(1, 12 * mm),
    table(
        ["Çalışma turu", "Hedef"],
        [
            ["1. tur", "Tanımları ve tabloları oku; renkli kutuları ezberle."],
            ["2. tur", "PK, FK, ilişki ve normal form örneklerini kâğıda çiz."],
            ["3. tur", "Son bölümdeki soruları kaynak kullanmadan cevapla."],
        ],
        [35 * mm, 132 * mm],
    ),
    Spacer(1, 24 * mm),
    P("Kaynak: İstanbul Üniversitesi Açık ve Uzaktan Eğitim Fakültesi, Veri Tabanı Tasarımı eKitabı. Notlar, kitabın 8 ünitesi ve ünite sonu soruları esas alınarak hazırlanmıştır.", "Small"),
    NextPageTemplate("u1"),
    PageBreak(),
]

# Unit 1
story += unit_header(1, "Veri", "Verinin ne olduğunu, nasıl anlam kazandığını, veri tiplerini ve aktarım biçimlerini ayırt et.")
story += [
    P("Temel kavramlar", "Section"),
    P("<b>Veri</b>, kaydedilebilir bilginin yapı taşıdır. “35” tek başına veridir. “Katılımcıların yaş ortalaması 35” ifadesi ise verinin işlenmesiyle elde edilmiş bir <b>enformasyondur</b>."),
    callout("Ezber cümlesi", "Veri → Enformasyon → Bilgi → Bilgelik. Veri işlenir, anlam kazanır, yorumlanır ve karar vermeye hizmet eder."),
    P("Verinin sınıflandırılması", "Section"),
    table(["Tür", "Açıklama", "Örnek"], [
        ["Nicel", "Ölçülen veya sayılan sayısal veri", "Yaş, sıcaklık, satış adedi"],
        ["Nitel", "Bir özellik veya kategori belirten veri", "Renk, şehir, katıldı/katılmadı"],
        ["Yapılandırılmış", "Alanları önceden belirlenmiş veri", "Excel tablosu, ilişkisel tablo"],
        ["Yapılandırılmamış", "Sabit sütun düzenine bağlı olmayan veri", "Serbest metin, ses, video"],
        ["Birincil", "Doğrudan araştırmacı tarafından toplanan veri", "Anket, gözlem, ölçüm"],
        ["İkincil", "Başka bir kaynaktan edinilen veri", "Yayımlanmış istatistik"],
    ], [31*mm, 78*mm, 58*mm]),
    P("Veri tipleri ve kapasite", "Section"),
] + bullets([
    "Bir bit 0 veya 1 değerini alır; 8 bit, 1 bayttır.",
    "Temel tipler: karakter, tam sayı (integer), ondalıklı sayı (float) ve mantıksal değer (boolean).",
    "String, karakterlerin birleşiminden oluşan metindir. Veritabanlarında kısa metin için VARCHAR, uzun metin için TEXT kullanılabilir.",
    "Doğru veri tipi veri kaybını ve gereksiz kapasite kullanımını önler. Ondalıklı bir değeri tam sayı alanında tutmak veri kaybettirebilir.",
])
story += [
    P("Veri biçimleri", "Section"),
    table(["Biçim", "Ayırt edici özellik"], [
        ["CSV", "Satır ve ayraçlarla düzenlenmiş yalın tablo verisi"],
        ["JSON", "Anahtar–değer yapısı; hafif sistemler arası aktarım"],
        ["XML", "Etiketlerle (tag) yapılandırılmış veri"],
    ], [35*mm, 132*mm]),
    callout("Sınavda beklenenler", "Bilgelik hiyerarşisi, bit–bayt farkı, boolean/float/string ve CSV–JSON–XML ayrımı.", PALE_TEAL),
    NextPageTemplate("u2"),
    PageBreak(),
]

# Unit 2
story += unit_header(2, "Veri Saklama Yöntemleri", "Veritabanı yaklaşımlarını, ilişkisel modelin yararlarını, VTYS kavramını ve temel SQL komutlarını öğren.")
story += [
    P("Veri neden veritabanında saklanır?", "Section"),
    P("Amaç yalnızca veriyi kaybetmemek değildir. İhtiyaç duyulan doğru veriye hızlıca erişmek, veriyi güncellemek, farklı sistemlerle paylaşmak ve tutarlılığı korumak gerekir. Farklı kaynaklardan gelen veriler çoğu zaman <b>ön işleme</b> ile temizlenir, dönüştürülür ve eşleştirilir."),
    P("Veritabanı yaklaşımları", "Section"),
    table(["Yaklaşım", "Kısa açıklama"], [
        ["Hiyerarşik", "Ağaç yapısındadır; farklı dallarla ilişkili verilerde esnekliği düşer."],
        ["Ağ", "Kayıtlar arasında daha karmaşık bağlantılar kurar."],
        ["İlişkisel", "Veriyi tablolarda tutar; anahtarlarla ilişkileri korur."],
    ], [38*mm, 129*mm]),
    P("İlişkisel model Edgar F. Codd ile ilişkilidir. Temel yararları veri tekrarını azaltmak, tutarlılığı korumak, çok kullanıcıya hizmet vermek, ölçeklenmek ve tabloları sorguyla yeniden birleştirmektir."),
    P("VTYS ve SQL", "Section"),
    P("<b>Veritabanı yönetim sistemi (VTYS)</b>, tasarlanan yapıyı bilgisayarda kuran ve yöneten yazılımdır. Access, SQL Server, MySQL, Oracle, PostgreSQL ve SQLite örnektir. MongoDB ise ilişkisel olmayan, doküman temelli bir sistemdir. <b>SQL</b>, ilişkisel veritabanıyla iletişim kurma dilidir."),
    table(["CRUD işlemi", "SQL komutu"], [
        ["Create — oluşturma", "INSERT INTO"],
        ["Read — okuma", "SELECT"],
        ["Update — güncelleme", "UPDATE"],
        ["Delete — silme", "DELETE"],
    ], [65*mm, 102*mm]),
    P("SELECT ad, soyad FROM Kisiler WHERE yas &gt; 30;<br/>INSERT INTO Kisiler (ad, soyad) VALUES ('Ayşe', 'Yılmaz');<br/>UPDATE Kisiler SET telefon = '555...' WHERE id = 1;<br/>DELETE FROM Kisiler WHERE id = 1;", "CodeTR"),
    callout("Kritik uyarı", "UPDATE veya DELETE komutunda WHERE yoksa tablodaki bütün kayıtlar etkilenebilir. SELECT * bütün sütunları getirir; ORDER BY sonucu sıralar."),
    callout("Sınavda beklenenler", "Birincil–ikincil veri, ön işleme, ilişkisel veritabanı yararları, VTYS örnekleri, CRUD ve WHERE.", PALE_TEAL),
    NextPageTemplate("u3"),
    PageBreak(),
]

# Unit 3
story += unit_header(3, "Gösterim Şekilleri ve Terimler", "Veritabanı tasarım dilini öğren; tablo, nitelik, kayıt, anahtar ve Kaz Ayağı işaretlerini doğru oku.")
story += [
    table(["Terim", "Anlamı"], [
        ["Veri kümesi", "Satır ve sütunlarla gösterilen kayıt bütünü"],
        ["Veri ambarı", "Farklı kaynaklardan gelen verilerin analiz için toplandığı merkez"],
        ["Tablo / varlık", "Birbiriyle ilgili niteliklerin grubu"],
        ["Nitelik / sütun", "Tablodaki veri alanı"],
        ["Kayıt / satır", "Bir varlığın tek örneği"],
        ["Birincil anahtar (PK)", "Bir tabloda kaydı benzersiz tanımlar"],
        ["Yabancı anahtar (FK)", "Başka tablodaki anahtara gönderme yapar"],
    ], [50*mm, 117*mm]),
    P("Anahtar örneği", "Section"),
    P("<b>Kullanici(id, ad, soyad)</b> tablosunda <b>id</b> PK olabilir. <b>Siparis(..., kullanici_id)</b> tablosundaki <b>kullanici_id</b> ise Kullanici.id alanına bağlanan FK’dir. Kitap, FK için “ikincil anahtar” adını da kullanır."),
    P("Kaz Ayağı gösterimini okuma", "Section"),
] + bullets([
    "Önce en fazla kaç kayıtla eşleşilebildiğini sor: bir mi, çok mu?",
    "Sonra en az kaç kaydın zorunlu olduğunu sor: sıfır olabilir mi, en az bir kayıt gerekli mi?",
    "Bu iki cevap birlikte 0..1, 1..1, 0..N veya 1..N biçiminde okunabilir.",
])
story += [
    P("Örnek: Bir müşterinin hiç siparişi olmayabilir veya birçok siparişi olabilir (0..N). Her siparişin mutlaka bir müşterisi varsa siparişten müşteriye bağlantı 1..1’dir."),
    P("Fonksiyonel bağımlılık gösterimi", "Section"),
    P("<b>X → Y</b>, aynı X değeri kullanıldığında Y değerinin belirli olduğu anlamına gelir. Örnek: <b>ogrenciNo → ogrenciAd</b>, öğrenci numarasının adı belirlediği iş kuralını gösterir."),
    callout("Sınavda beklenenler", "Tablo–nitelik–kayıt farkı, PK/FK, veri ambarı ve Kaz Ayağı’ndaki tek/çok ile 0/1 işaretleri.", PALE_TEAL),
    NextPageTemplate("u4"),
    PageBreak(),
]

# Unit 4
story += unit_header(4, "Fonksiyonel Bağımlılık", "Bir niteliğin veya nitelik grubunun diğer alanları ne zaman belirlediğini anlayarak doğru gruplama yap.")
story += [
    P("Temel kural", "Section"),
    callout("X → Y ne demektir?", "Aynı X değeri görüldüğünde Y değerinin de aynı olması gerekir. X, Y’yi belirler. Y’nin X’i belirlediği sonucu kendiliğinden çıkmaz."),
    table(["Örnek", "Yorum"], [
        ["isbn → kitapAdi, yayinEvi", "ISBN gerçekten tek bir kitap/baskı kaydını belirliyorsa geçerlidir."],
        ["(ogrenci_id, ders_id, yil, donem) → not", "Ders tekrar alınabileceği için yıl ve dönem gerekli olabilir."],
        ["(sehir, frekans) → radyoKanali", "Aynı frekans farklı şehirlerde kullanılabilir."],
    ], [71*mm, 96*mm]),
    P("Soruyu çözme yöntemi", "Section"),
] + bullets([
    "Her niteliğin tek başına tekrar edip edemeyeceğini sor.",
    "Tek alan yetmiyorsa birleşik bir belirleyici düşün.",
    "Gerekenden fazla alanı belirleyici tarafa ekleme.",
    "Örnek satırlarda benzersiz görünmesine güvenme; benzersizliğin iş kuralıyla garanti edilip edilmediğini kontrol et.",
    "Farklı olgulara ait alanları fark edersen ayrı tablolar oluşturmayı düşün.",
])
story += [
    P("Kitaptaki bazı alıştırmalarda yazar+yıl, dosya boyutu veya e-posta olası temsilci olarak seçilir. Bu seçimler ilgili varsayımı anlamak için yararlıdır; gerçek sistemde bu alanlar kendiliğinden benzersiz değildir. Gerekirse değişmeyen bir id’yi PK seç ve gerçekten benzersiz olması gereken alana ayrıca UNIQUE kuralı koy."),
    callout("Sınavda beklenenler", "Okun yönü, tek ve birleşik belirleyici, en az alanla benzersiz belirleme ve anahtarın neden tekrarlanamayacağı.", PALE_TEAL),
    NextPageTemplate("u5"),
    PageBreak(),
]

# Unit 5
story += unit_header(5, "Bağlantı Türleri", "İki tablo arasındaki kardinaliteyi belirle, PK–FK eşleşmesini doğru kur ve N–N ilişkiyi bağlantı tablosuyla çöz.")
story += [
    table(["İlişki", "Örnek", "Nasıl kurulur?"], [
        ["1–1", "Kişi–kişisel detay", "Bir tarafta tekil FK bulunur."],
        ["1–N", "Müşteri–sipariş", "FK çok kayıt bulunan Siparis tablosuna konur."],
        ["N–N", "Öğrenci–ders", "Araya bağlantı tablosu eklenir."],
    ], [27*mm, 53*mm, 87*mm]),
    P("N–N ilişkide bağlantı tablosu", "Section"),
    P("Ogrenci(id PK, ad, ...)<br/>Ders(id PK, ad, ...)<br/>DersAlma(ogrenci_id FK, ders_id FK, donem, ...)", "CodeTR"),
    P("Bir öğrenci birçok ders alabilir; bir dersi birçok öğrenci alabilir. DersAlma tablosu iki varlık arasındaki her eşleşmeyi saklar. Dönem, kayıt tarihi veya not gibi <b>ilişkiye ait bilgiler</b> de bu tabloya konabilir."),
    P("Anahtarların yerleşimi", "Section"),
] + bullets([
    "PK, aynı tabloda kaydı benzersiz tanımlar ve tekrar edemez.",
    "FK, başka tablodaki bir kaydı işaret eder; ilişki isteğe bağlıysa boş bırakılmasına izin verilebilir.",
    "1–N ilişkide FK, N tarafına konur: Siparis.musteri_id.",
    "N–N ilişkide iki FK bağlantı tablosuna konur.",
    "Aynı tabloya farklı rollerle bağlanılabilir: Gorusme.diyetisyen_id ve Gorusme.kullanici_id aynı Kullanici tablosuna gidebilir.",
])
story += [
    callout("Sık yapılan hata", "Bir kişinin bütün sipariş ID’lerini tek hücrede saklamak yerine, her Siparis satırında musteri_id tut. Bir hücreye çoklu değer yazmak 1NF’yi de bozar."),
    callout("Sınavda beklenenler", "1–1, 1–N, N–N; FK’nin yeri; bağlantı tablosunun görevi; zorunlu ve isteğe bağlı ilişki.", PALE_TEAL),
    NextPageTemplate("u6"),
    PageBreak(),
]

# Unit 6
story += unit_header(6, "Normalizasyon", "Alanları doğru tablolara yerleştirerek veri tekrarını ve ekleme, güncelleme, silme tutarsızlıklarını azalt.")
story += [
    table(["Normal form", "Kısa teknik kural"], [
        ["1NF", "Bir hücre kullanım amacı bakımından tek ve atomik değer tutmalı; tekrarlayan alan grupları olmamalı."],
        ["2NF", "1NF + anahtar olmayan alan birleşik anahtarın yalnızca bir parçasına bağlı olmamalı."],
        ["3NF", "2NF + anahtar olmayan alan başka bir anahtar olmayan alan üzerinden belirlenmemeli."],
        ["BCNF", "Her anlamlı fonksiyonel bağımlılığın sol tarafı bir aday anahtar olmalı."],
        ["4NF", "Birbirinden bağımsız çok değerli olgular gereksiz kombinasyonlar üretmemeli."],
        ["5NF", "Kayıpsız ayrıştırma gerektiren birleşme bağımlılıklarını ele alır."],
        ["DKNF", "Kısıtların alan ve anahtar kurallarıyla ifade edilebilmesini hedefler."],
    ], [32*mm, 135*mm]),
    P("Üç temel örnek", "Section"),
] + bullets([
    "1NF: Bir hücrede ‘0555..., ayse@example.com’ tutma. İletişim değerlerini amaçlarına göre ayrı alan veya ayrı satırlara ayır.",
    "2NF: (ogrenci_id, ders_id) anahtarlı tabloda ogrenciAd yalnızca ogrenci_id’ye bağlıdır; Ogrenci tablosuna taşınmalıdır.",
    "3NF: Siparis(id, musteri_id, musteriAdres) yapısında adres müşteriye bağlıysa Musteri tablosunda tutulmalıdır.",
])
story += [
    callout("Kitabın sınav dili", "Ünite sorularında 3NF genellikle ‘birden fazla birincil anahtar özellikli alan olmaması’, 4NF ‘veri tekrarının önlenmesi’, 5NF ‘daha küçük tablolara bölme’, alan/anahtar NF ise ‘hesaplanabilen alanı tekrar saklamama’ şeklinde eşleştirilir. Sınav için bu kısa ifadeleri de tanı."),
    P("Teknik ayrıntı: Bir tabloda id’nin yanında benzersiz öğrenci numarası bulunması tek başına 3NF ihlali değildir. 3NF’nin ana konusu, anahtar olmayan alanlar arasındaki dolaylı bağımlılıktır."),
    callout("Sınavda beklenenler", "1NF–2NF–3NF farkını örneğe uygulamak ve kitabın normal form eşleştirmelerini tanımak.", PALE_TEAL),
    NextPageTemplate("u7"),
    PageBreak(),
]

# Unit 7
story += unit_header(7, "Özel Veri Tabanı Yapıları", "Yıldız şema, kendi kendine ilişki, bağlantısız tablolar, hash ve zaman damgası gibi özel yapıları tanı.")
story += [
    P("Yıldız şema", "Section"),
    P("Merkezde sık kayıt eklenen <b>olay/kayıt tablosu</b>, çevresinde olayı açıklayan <b>boyut tabloları</b> bulunur. Örneğin Gecis merkezde; Arac, Gise ve Tarife çevrede olabilir. Geçişin zamanı ve ücreti olay kaydına aittir."),
    P("Kendi kendine ilişki", "Section"),
    P("<b>Calisan(id, yonetici_id)</b> yapısında yonetici_id, aynı tablodaki başka bir çalışanın id değerini gösterir. Bir yönetici birçok çalışanı yönetebilir. Klasörlerin alt klasörlere ayrılması da bu yöntemle modellenebilir."),
    P("Kendisiyle N–N ilişki", "Section"),
    P("İki takımın maç yapması için <b>Mac(evSahibiTakim_id, konukTakim_id, ...)</b> tablosu kullanılır. İki FK de Takim tablosuna gider."),
    P("Özetleme, bağlantısız tablo ve zaman", "Section"),
] + bullets([
    "Hash/özet fonksiyonu aynı girdiden aynı özeti üretir ve doğrulama için kullanılabilir. Kitap MD5’i örnek verir.",
    "SistemAyarlari(anahtar, deger) gibi bir tablo başka tablolarla FK ilişkisi olmadan bulunabilir.",
    "ISO 8601 örneği: 2022-09-16T11:45:30+03:00.",
    "Unix zaman damgası, 1 Ocak 1970 00:00 UTC’den beri geçen süreyi sayı olarak ifade eder.",
])
story += [
    P("Ünite sonu sorularında geçen ek kavramlar", "Section"),
    table(["Kavram", "Öne çıkan özellik"], [
        ["Doküman veritabanı", "JSON benzeri belgeler"],
        ["Graf veritabanı", "Düğüm ve ilişkiler; sosyal ağ gibi yoğun bağlantılar"],
        ["Anahtar–değer", "Anahtarla hızlı erişim"],
        ["Veri ambarı", "Analiz için düzenlenmiş veriler"],
        ["Veri gölü", "Ham biçimde saklanan veriler"],
        ["OLAP", "Çok boyutlu ve karmaşık analiz sorguları"],
    ], [48*mm, 119*mm]),
    callout("Sınavda beklenenler", "Yıldız şemada kayıt/boyut tablosu, kendi kendine ilişki, hash özellikleri, bağlantısız tablo ve zaman damgası.", PALE_TEAL),
    NextPageTemplate("u8"),
    PageBreak(),
]

# Unit 8
story += unit_header(8, "İhtiyaca Özel Veri Tabanı Tasarlamak", "Bir gereksinim metninden varlıkları, işlemleri, anahtarları ve ilişkileri sistemli biçimde çıkar.")
story += [
    P("Her tasarım sorusunda uygulanacak yöntem", "Section"),
] + bullets([
    "Gereksinimleri oku; zorunlu kuralları ve belirsiz noktaları işaretle.",
    "Adları varlık adayı, fiilleri işlem veya bağlantı tablosu adayı olarak çıkar.",
    "Aynı şeyi anlatan adları birleştir; yalnızca bir özelliği anlatanları nitelik yap.",
    "Her varlığa uygun PK seç.",
    "İlişkiyi iki yönde sor: Bir kayıt karşı tarafta en az ve en çok kaç kayıtla eşleşir?",
    "FK’leri yerleştir; N–N ilişkiler için bağlantı tablosu kur.",
    "Veri tekrarı, boş alanlar, geçmiş kayıtlar ve gelecek değişiklikler açısından tasarımı kontrol et.",
])
story += [
    P("On uygulamadan çıkarılacak ders", "Section"),
    table(["Senaryo", "Temel tasarım kararı"], [
        ["Diyetisyen", "Roller, diyetisyene bağlı paket, görüşme ve katılım"],
        ["Araç satışı", "Tekil araç, alıcı/satıcı rolleri, satış ve parçalı ödeme"],
        ["Para transferi", "Gönderici/alıcı rolleri, telefon, süre ve sistem ayarı"],
        ["Kargo", "Gönderi, birim ve her hareketi koruyan takip tablosu"],
        ["GSM", "Kişi, hat, paket ve tarih aralıklı abonelik"],
        ["Mesajlaşma", "Grup üyeliği, mesaj ve kullanıcı başına okunma kaydı"],
        ["Sesli sosyal medya", "İleti, yorum ve beğeni için ayrı işlem tabloları"],
        ["Video platformu", "Kanal; takip, izleme ve beğeni kayıtları"],
        ["Bulut dosya", "Klasör hiyerarşisi, paket, paylaşım ve silinme zamanı"],
        ["Satranç", "Oyuncu, turnuva, ön kayıt, maç ve ELO etkisi"],
    ], [47*mm, 120*mm]),
    callout("Puan kazandıran bakış", "Bir görüşme paket kapsamında yapılıyorsa hangi kullanıcının paketi satın aldığını gösteren abonelik/satın alma kaydı gerekebilir. Bir dosya 30 gün sonra silinecekse yalnızca ‘silindi’ alanı yetmez; silinme zamanı da tutulmalıdır."),
    NextPageTemplate("final"),
    PageBreak(),
]

# Final revision
story += [
    Spacer(1, 18 * mm),
    P("SON TEKRAR", "Small"),
    P("Sınav Öncesi Hızlı Kontrol", "Unit"),
    callout("Hedef", "Soruları kaynak kullanmadan yanıtla. Sonra cevap anahtarıyla karşılaştır ve yalnızca kaçırdığın konulara dön.", PALE_TEAL),
    Spacer(1, 4 * mm),
]

questions = [
    "1. Veri → ? → Bilgi → Bilgelik sırasındaki eksik basamak nedir?",
    "2. UPDATE komutunda WHERE yazılmazsa ne olabilir?",
    "3. 1–N ilişkide FK hangi tarafta bulunur?",
    "4. N–N ilişkiyi hangi yapı çözer?",
    "5. (ogrenci_id, ders_id, yil, donem) → not ifadesinde soldaki alanlar ne yapar?",
    "6. Bir hücrede üç telefon numarası saklamak hangi normal form açısından sorunludur?",
    "7. Yıldız şemada sık eklenen olay kayıtları hangi tabloda tutulur?",
    "8. Calisan.yonetici_id hangi tabloya işaret edebilir?",
    "9. Bir müşterinin sıfır veya çok siparişi olabilir ifadesi nasıl gösterilir?",
    "10. Veri ambarı ile veri gölü arasındaki temel fark nedir?",
]
story += bullets(questions)
story += [
    Spacer(1, 5 * mm),
    P("Cevap anahtarı", "Section"),
    table(["Soru", "Cevap"], [
        ["1", "Enformasyon"],
        ["2", "Tablodaki bütün satırlar güncellenebilir."],
        ["3", "Çok tarafında"],
        ["4", "Bağlantı/pivot tablosu"],
        ["5", "Notu birlikte belirler."],
        ["6", "1NF"],
        ["7", "Merkezdeki kayıt/olay tablosunda"],
        ["8", "Aynı Calisan tablosuna"],
        ["9", "Müşteriden siparişe 0..N"],
        ["10", "Ambar analiz için düzenlenmiş; göl ham veriyi saklar."],
    ], [20*mm, 147*mm]),
    Spacer(1, 6 * mm),
    callout("Son çalışma", "Kâğıda bir Öğrenci–Ders–Not ve bir Müşteri–Sipariş–Ürün şeması çiz. Her tabloda PK’yi, her ilişkide FK’yi, tek/çok ve zorunluluk durumunu göster. Bunu yapabiliyorsan dersin temel tasarım mantığını kavramışsındır."),
]

doc = BaseDocTemplate(
    str(OUTPUT), pagesize=A4,
    leftMargin=21*mm, rightMargin=21*mm,
    topMargin=21*mm, bottomMargin=19*mm,
    title="Veri Tabanı Tasarımı Çalışma Notları",
    author="Codex",
    subject="Ünite ünite sınav çalışma notları",
)
templates = [
    PageTemplate(
        id=name,
        frames=[Frame(doc.leftMargin, doc.bottomMargin, doc.width, doc.height, id=f"{name}-frame")],
        onPage=draw_header_footer,
    )
    for name in ["cover", "u1", "u2", "u3", "u4", "u5", "u6", "u7", "u8", "final"]
]
doc.addPageTemplates(templates)
doc.build(story)
print(OUTPUT)
