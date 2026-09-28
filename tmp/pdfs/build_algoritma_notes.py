from pathlib import Path
from xml.sax.saxutils import escape

from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import PageBreak, Paragraph, SimpleDocTemplate, Spacer, Table, TableStyle


ROOT = Path(__file__).resolve().parents[2]
OUT = ROOT / "output" / "pdf" / "algoritma-ve-programlamaya-giris-calisma-notlari.pdf"
OUT.parent.mkdir(parents=True, exist_ok=True)
FONT = Path(r"C:\Windows\Fonts")
pdfmetrics.registerFont(TTFont("Arial", str(FONT / "arial.ttf")))
pdfmetrics.registerFont(TTFont("Arial-Bold", str(FONT / "arialbd.ttf")))
pdfmetrics.registerFont(TTFont("Consolas", str(FONT / "consola.ttf")))
pdfmetrics.registerFontFamily("Arial", normal="Arial", bold="Arial-Bold")

NAVY = colors.HexColor("#17324D")
BLUE = colors.HexColor("#245D84")
TEAL = colors.HexColor("#087A77")
INK = colors.HexColor("#1D2B35")
MUTED = colors.HexColor("#536675")
PALE = colors.HexColor("#EAF3F7")
PALE2 = colors.HexColor("#EFF7F4")
LINE = colors.HexColor("#CBD8E1")

styles = getSampleStyleSheet()
styles.add(ParagraphStyle(name="Cover", fontName="Arial-Bold", fontSize=25, leading=32,
                          textColor=NAVY, alignment=TA_CENTER, spaceAfter=14))
styles.add(ParagraphStyle(name="CoverSub", fontName="Arial", fontSize=12, leading=18,
                          textColor=BLUE, alignment=TA_CENTER, spaceAfter=18))
styles.add(ParagraphStyle(name="Kicker", fontName="Arial-Bold", fontSize=8.3, leading=11.4,
                          textColor=TEAL, spaceAfter=5))
styles.add(ParagraphStyle(name="UnitTitle", fontName="Arial-Bold", fontSize=17.5, leading=22,
                          textColor=NAVY, spaceAfter=8))
styles.add(ParagraphStyle(name="Section", fontName="Arial-Bold", fontSize=10.7, leading=14.5,
                          textColor=BLUE, spaceBefore=9, spaceAfter=4))
styles.add(ParagraphStyle(name="Body", fontName="Arial", fontSize=9.2, leading=13.5,
                          textColor=INK, spaceAfter=5))
styles.add(ParagraphStyle(name="BulletTR", fontName="Arial", fontSize=9.05, leading=13.3,
                          textColor=INK, leftIndent=10, firstLineIndent=-7, spaceAfter=4))
styles.add(ParagraphStyle(name="Small", fontName="Arial", fontSize=8.2, leading=11.3,
                          textColor=MUTED, spaceAfter=3))
styles.add(ParagraphStyle(name="Pseudo", fontName="Consolas", fontSize=8.25, leading=11.5,
                          textColor=NAVY))
styles.add(ParagraphStyle(name="Q", fontName="Arial", fontSize=9.35, leading=13.4,
                          textColor=INK, spaceAfter=3))
styles.add(ParagraphStyle(name="A", fontName="Arial", fontSize=8.85, leading=12.5,
                          textColor=INK, spaceAfter=5))
styles.add(ParagraphStyle(name="TH", fontName="Arial-Bold", fontSize=8.3, leading=11.3,
                          textColor=colors.white))
styles.add(ParagraphStyle(name="TC", fontName="Arial", fontSize=8.35, leading=11.6,
                          textColor=INK))


def P(s, sty="Body"):
    return Paragraph(str(s).replace("–", "-").replace("—", "-"), styles[sty])


def sect(story, title, points):
    story.append(P(title, "Section"))
    for point in points:
        story.append(P("• " + point, "BulletTR"))


def box(story, title, body, bg=PALE):
    t = Table([[P(title, "Kicker")], [P(body, "Body")]], colWidths=[174 * mm])
    t.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), bg),
        ("BOX", (0, 0), (-1, -1), .45, LINE),
        ("LEFTPADDING", (0, 0), (-1, -1), 8),
        ("RIGHTPADDING", (0, 0), (-1, -1), 8),
        ("TOPPADDING", (0, 0), (-1, 0), 7),
        ("BOTTOMPADDING", (0, -1), (-1, -1), 3),
    ]))
    story.append(t)


def code(story, text):
    clean = "<br/>".join(escape(line).replace(" ", "&nbsp;") for line in text.strip().splitlines())
    t = Table([[P(clean, "Pseudo")]], colWidths=[174 * mm])
    t.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), PALE),
        ("BOX", (0, 0), (-1, -1), .45, LINE),
        ("LEFTPADDING", (0, 0), (-1, -1), 9),
        ("RIGHTPADDING", (0, 0), (-1, -1), 9),
        ("TOPPADDING", (0, 0), (-1, -1), 8),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 8),
    ]))
    story.append(t)
    story.append(Spacer(1, 2 * mm))


def table(story, headers, rows, widths):
    data = [[P(h, "TH") for h in headers]] + [[P(str(c), "TC") for c in row] for row in rows]
    t = Table(data, colWidths=widths, repeatRows=1, hAlign="LEFT")
    t.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, 0), BLUE),
        ("ROWBACKGROUNDS", (0, 1), (-1, -1), [colors.white, PALE]),
        ("GRID", (0, 0), (-1, -1), .35, LINE),
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("LEFTPADDING", (0, 0), (-1, -1), 7),
        ("RIGHTPADDING", (0, 0), (-1, -1), 7),
        ("TOPPADDING", (0, 0), (-1, -1), 5),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 5),
    ]))
    story.append(t)


UNITS = [
    dict(n=1, title="Temel Kavramlar", pages="3-23",
         goal="Algoritmayı kurmak, akış şemasını okumak ve temel zaman karmaşıklığını ayırt etmek.",
         sections=[
             ("Temel bilgiler", [
                 "<b>Algoritma</b>, belirli bir girdiden istenen çıktıyı üretmek için sıralanmış ve sonlu adımlardır. Önce problem, girdi, beklenen çıktı ve özel durumlar tanımlanır; sonra çözüm küçük işlemlere ayrılır.",
                 "İyi bir algoritmanın adımları <b>açık/kesin</b>, uygulanabilir/etkin, <b>sonlu</b> ve hedef için <b>doğru</b> olmalıdır. Her zaman en hızlı olması zorunlu değildir.",
                 "<b>Girdi - işlem - çıktı:</b> Kullanıcıdan iki kenar uzunluğu al, çevre = 2 × (kısa + uzun) hesapla, çevreyi yazdır. Her algoritmada bu üç öğeyi aramak çözümü kolaylaştırır.",
                 "Gösterim: doğal dil, <b>sözde kod (kaba kod)</b> ve <b>akış diyagramı</b>. Sözde kod bir programlama dilinin katı sözdizimine bağlı değildir; BAŞLA, OKU, IF, FOR, YAZ gibi ifadeler yeterlidir.",
             ]),
             ("Akış diyagramı ve kontrol", [
                 "<b>Oval:</b> başla/bitiş; <b>paralelkenar:</b> girdi/çıktı; <b>dikdörtgen:</b> işlem; <b>eşkenar dörtgen:</b> koşul/karar; <b>ok:</b> akış yönü. Karar dalında doğru/yanlış yolları belirgin olmalıdır.",
                 "Üç temel kontrol yapısı: <b>sıralı</b> (adımlar peş peşe), <b>seçimli</b> (koşula göre dal), <b>tekrarlı</b> (döngü). Bir çözüm bu yapıların birleşimidir.",
             ]),
             ("Büyük O: sınavda tanı", [
                 "<b>Büyük O</b>, n girdi büyürken işlem/bellek ihtiyacının yaklaşık büyümesini anlatır. Sabitleri ve küçük dereceli terimleri önemseme: 3n + 7 → O(n); n² + n → O(n²).",
                 "Diziye doğrudan erişim O(1); tüm elemanları bir kez gezme O(n); her adımda aralığı ikiye indirme O(log n); iki tam iç içe döngü O(n²). Aynı düzeyde ardışık iki döngü O(n) + O(n) = O(n).",
                 "En iyi/ortalama/en kötü durum farklı olabilir. Karmaşıklık <b>doğruluk</b> ile aynı şey değildir; hızlı ama yanlış algoritma çözüm sayılmaz.",
             ]),
         ],
         example_title="Çözümlü örnek: 1'den n'e toplam",
         example="""BAŞLA
OKU n
toplam = 0
FOR i = 1 TO n
    toplam = toplam + i
NEXT i
YAZ toplam
BİTİR""",
         example_note="n = 4 için toplam sırasıyla 1, 3, 6, 10 olur; çıktı 10'dur. Döngü n kez çalıştığı için zaman O(n), tutulan değişken sayısı sabit olduğu için ek alan O(1).",
         traps="Akış şemasındaki karar sembolünü işlem sembolüyle karıştırma. n=0 gibi sınır girdileri ve algoritmanın gerçekten bitip bitmediğini kontrol et."),
    dict(n=2, title="Programlamaya Giriş", pages="24-48",
         goal="Veri tipi, değişken, sabit ve operatörlerle sıralı işlemleri çözmek.",
         sections=[
             ("Veri tiplerini seç", [
                 "<b>Tam sayı:</b> byte/short/int/long gibi türler; işaretli türler negatif ve pozitif, işaretsiz türler sıfır ve pozitif değer alır. <b>Ondalıklı:</b> single/float, double ve decimal. Yaklaşık ölçümler için kayan nokta, para gibi kesin ondalık gereksinimi için decimal düşün.",
                 "<b>char</b> tek karakter; <b>string</b> birden fazla karakterli metin; <b>boolean</b> doğru/yanlış; <b>date</b> tarih-zaman bilgisidir. '7' karakteri ile 7 sayısı aynı veri değildir.",
                 "<b>Değişken</b> adı, tipi ve çalışma sırasında değişebilen değeri olan saklama yeridir. <b>Sabit</b> bir kez değer alır, sonra değiştirilmez. Anlamlı ad seç; sayı ile başlayan ad kullanma; dilin ayrılmış sözcüklerini ad olarak verme.",
             ]),
             ("Operatörler ve işlem sırası", [
                 "Aritmetik: +, -, ×, /, mod (%). <b>17 mod 5 = 2</b> çünkü 17 = 3 × 5 + 2. Tam sayı bölmesi ve normal bölmenin sonucu dilin kurallarına göre değişebilir.",
                 "Karşılaştırmalar (<, >, <=, >=, eşit, eşit değil) boolean sonuç verir. Atama <b>x = x + 1</b> matematiksel eşitlik değildir: sağdaki eski x hesaplanır, soldaki x'e yeni değer yazılır.",
                 "<b>AND:</b> her iki koşul doğruysa doğru. <b>OR:</b> en az biri doğruysa doğru. <b>NOT:</b> sonucu tersine çevirir. Parantez karmaşık koşullarda yanılmayı azaltır.",
                 "Sıralı akışta hiçbir dal veya döngü yoktur; satırlar yukarıdan aşağıya birer kez çalışır. İzleme sorusunda her atamadan sonra değişkenleri güncelle.",
             ]),
         ],
         example_title="Çözümlü örnek: değişken izle",
         example="""x = 5
y = 2
x = x + y        // x = 7
y = x mod 3      // y = 1
koşul = (x > 6) AND (y = 1)   // Doğru""",
         example_note="Son durum x=7, y=1, koşul=Doğru. Önce sağ taraf hesaplanır, sonra atama yapılır. Gerçek bir dilde karşılaştırma işareti = veya == olabilir; bu notlarda sözde kod kullanılır.",
         traps="Veri tipi aralıkları dile göre değişebilir. Özellikle / ve tam sayı bölmesini, ayrıca karakter ile sayıyı ayır."),
    dict(n=3, title="Karar Yapıları", pages="49-79",
         goal="Tek, çift, çok seçimli ve iç içe koşulları izlemek ve yazmak.",
         sections=[
             ("Koşul türleri", [
                 "<b>Tek seçim (IF):</b> koşul doğruysa blok çalışır, yanlışsa blok atlanır. <b>Çift seçim (IF/ELSE):</b> iki yoldan yalnız biri çalışır.",
                 "<b>Çok seçim (IF/ELSEIF/ELSE):</b> koşullar sırayla denenir, ilk doğru dal seçilir. <b>İç içe IF:</b> bir kararın dalında yeni karar verilir. Girinti hangi ELSE'in hangi IF'e ait olduğunu gösterir.",
                 "Sınır değerlerinde > ile >= farklı sonuç verir. '50 ve üzeri geçti' için not >= 50 yazılır. Aralık koşulunda örneğin 50 <= not AND not < 70 kullanılır.",
                 "Çoklu dallarda eşikler yüksekten düşüğe sıralanırsa bazı kontroller sadeleşir: not >= 90, sonra >= 70, sonra >= 50. ELSE kalan tüm durumları kapsar.",
             ]),
             ("Kısa izleme yöntemi", [
                 "Girdiyi her koşula sırayla yerleştir; doğru/yanlış işaretle; ilk doğru dalı bul; yalnız o dalın atamalarını yap. İç içe yapıda önce dış koşulu, sonra seçilen dalın iç koşulunu değerlendir.",
                 "<b>AND</b> aralığı daraltır, <b>OR</b> seçenekleri birleştirir. Örneğin '18-65 yaş dahil' için yaş >= 18 AND yaş <= 65.",
             ]),
         ],
         example_title="Çözümlü örnek: not sınıflandırması",
         example="""OKU not
IF not >= 90 THEN
    harf = "AA"
ELSEIF not >= 70 THEN
    harf = "BB"
ELSEIF not >= 50 THEN
    harf = "CC"
ELSE
    harf = "FF"
END IF
YAZ harf""",
         example_note="not=70 için ilk koşul yanlış, ikinci doğru; sonuç BB. not=49 için tüm koşullar yanlış; sonuç FF. Bir kez dal seçildikten sonra sonraki dallar denenmez.",
         traps="ELSEIF sırası önemlidir. '>=50' kontrolü '>=90'dan önce olsaydı 95 için de yanlışlıkla CC seçilirdi."),
    dict(n=4, title="Döngüler", pages="80-103",
         goal="Tekrar sayısı belli/belirsiz döngüleri, sayaç ve toplamı doğru izlemek.",
         sections=[
             ("Döngü seçimi", [
                 "<b>WHILE/DO WHILE:</b> koşul başta sınanır, blok sıfır kez çalışabilir. <b>DO ... LOOP WHILE:</b> koşul sonda sınanır, blok en az bir kez çalışır. Kitaptaki yazım VB tarzı olabilir; temel ayrım kontrolün yeri ve ilk çalışmadır.",
                 "<b>FOR:</b> tekrar sayısı veya sayaç aralığı biliniyorsa uygundur. Bu notlarda 'FOR i=1 TO 5' uçlar dahil 5 tekrar demektir. <b>FOR EACH:</b> koleksiyonun elemanlarını sırayla gezer.",
                 "Döngüde <b>başlangıç, koşul, güncelleme</b> üçlüsünü kontrol et. Güncelleme yoksa koşul hiç değişmeyebilir ve sonsuz döngü oluşur. Koşul tersse döngü hiç başlamayabilir.",
             ]),
             ("Sayaç, birikim ve sınır", [
                 "<b>Sayaç</b> adet sayar: adet = adet + 1; ilk değeri 0. <b>Toplam</b> biriktirir: toplam = toplam + sayı; ilk değeri 0. <b>Çarpım</b> biriktirir: çarpım = çarpım × sayı; ilk değeri 1.",
                 "Sentinel (bitirme değeri) kullanıldığında o değeri toplama/ortalama katma. Ortalama = toplam/adet hesaplamadan önce adet > 0 denetle.",
                 "Bir tam dizi taraması O(n); her eleman için tüm elemanları gezen iç içe iki döngü O(n²). İç döngü sayısı sabitse karmaşıklık farklı olabilir; kodu gerçek tekrar sayısıyla oku.",
             ]),
         ],
         example_title="Çözümlü örnek: -1 girilene dek ortalama",
         example="""toplam = 0; adet = 0
OKU sayı
WHILE sayı != -1
    toplam = toplam + sayı
    adet = adet + 1
    OKU sayı
END WHILE
IF adet > 0 THEN YAZ toplam / adet
ELSE YAZ "Sayı girilmedi""",
         example_note="Girdiler 4, 8, -1 ise toplam=12, adet=2, sonuç=6. -1 hesaplamaya girmez. İlk girdi -1 ise döngü sıfır kez çalışır ve sıfıra bölme önlenir.",
         traps="FOR i=0 TO n-1 toplam n kez döner; FOR i=0 TO n ise n+1 kez döner. Çıkış koşulunu ve son elemanın dahil olup olmadığını işaretle."),
    dict(n=5, title="Alt Programlar ve Fonksiyonlar", pages="104-130",
         goal="Parametre, dönüş değeri, ana program ve özyinelemeyi ayırt etmek.",
         sections=[
             ("Alt program mantığı", [
                 "<b>Alt program</b> bir görevi kapsayan, gerektiğinde çağrılan kod parçasıdır. Kod tekrarını azaltır, hata ayıklamayı ve bakımı kolaylaştırır. Ana program (main) işlemleri ve çağrıları başlatır.",
                 "<b>Parametre</b> tanımda yazılan girdi adıdır; <b>argüman</b> çağrı sırasında gönderilen gerçek değerdir. `alan(en, boy)` tanımında en/boy parametre, `alan(3, 4)` çağrısında 3/4 argümandır.",
                 "<b>Void/prosedür</b> çağırana sonuç değeri döndürmez; yazdırma veya güncelleme yapabilir. <b>Fonksiyon</b> RETURN ile değer döndürür, bu değer değişkene atanabilir veya ifadede kullanılabilir.",
                 "Yerel değişken yalnız tanımlandığı alt programda geçerlidir. Parametreye verilen değerin dışarıyı değiştirip değiştirmemesi dilin değer/referans aktarım kurallarına bağlıdır; sınavda kodun verdiği kurala bak.",
             ]),
             ("Özyineleme (recursion)", [
                 "Özyinelemeli fonksiyon kendisini daha küçük bir problemle çağırır. <b>Temel durum</b> durmayı sağlar; <b>özyinelemeli adım</b> problemi küçültür. Temel durum yoksa bitmeyen çağrı oluşabilir.",
                 "Faktöriyel: 0! = 1; n! = n × (n-1)! (n>0). Örneğin F(3) = 3 × F(2) = 3 × 2 × F(1) = 6.",
             ]),
         ],
         example_title="Çözümlü örnek: alan fonksiyonu ve çağrı",
         example="""FONKSİYON Alan(en, boy)
    RETURN en * boy
SON

ANA PROGRAM
    sonuç = Alan(3, 4)
    YAZ sonuç      // 12
SON""",
         example_note="Alan iki parametre alır ve bir sayı döndürür. Ana programdaki sonuç 12 olur. Yalnız ekrana yazdıran bir alt program olsaydı dönüş değeri atanmazdı.",
         traps="RETURN ile YAZ farklıdır: RETURN çağırana değer verir, YAZ ekrana çıktı üretir. Fonksiyon çağrısını tanımla karıştırma."),
    dict(n=6, title="Diziler", pages="131-154",
         goal="Tek/iki boyutlu dizilerde indisleri ve döngü aralıklarını doğru kullanmak.",
         sections=[
             ("Tek boyutlu diziler", [
                 "<b>Dizi</b>, aynı türdeki değerleri tek ad altında sıralı tutar. Her elemana <b>indis</b> ile erişilir. Bu notlarda indis 0'dan başlar: n elemanlı dizinin geçerli indisleri 0 ... n-1'dir.",
                 "Örnek D = [12, 7, 20, 5] için D[0]=12, D[2]=20, son eleman D[3]=5. D[4] sınır dışıdır. Kitap bazı örneklerde 1 tabanlı gösterim de kullanır; soruda belirtilen başlangıç indisini esas al.",
                 "Toplam/ortalama için tüm elemanları bir kez dolaş; min/max için ilk elemanla başlatıp kalanları karşılaştır. Boş dizi için min/max tanımsız, ortalama için sıfıra bölme riskidir.",
             ]),
             ("İki boyutlu diziler", [
                 "<b>Matris</b> satır ve sütunla belirtilir: M[satır][sütun]. 2 × 3 matrisin 2 satırı ve 3 sütunu, toplam 6 elemanı vardır. Satır için dış, sütun için iç döngü sık kullanılır.",
                 "Tüm r × c elemanları gezmenin zamanı O(r × c)'dir. Yalnız r=c=n ise O(n²) yazılır. Tek bir indisten elemana doğrudan erişim O(1)'dir.",
             ]),
         ],
         example_title="Çözümlü örnek: dizinin en küçüğü",
         example="""D = [12, 7, 20, 5]
en_küçük = D[0]
FOR i = 1 TO 3
    IF D[i] < en_küçük THEN en_küçük = D[i]
NEXT i
YAZ en_küçük     // 5""",
         example_note="İzleme: ilk değer 12; i=1'de 7; i=2'de yine 7; i=3'te 5. Tüm elemanlar en fazla bir kez karşılaştırıldığı için O(n).",
         traps="Dizi uzunluğu ile son indis aynı değildir. İki boyutlu dizide ilk indis satır, ikinci indis sütundur (aksi özellikle belirtilmedikçe)."),
    dict(n=7, title="Arama ve Sıralama Algoritmaları", pages="155-181",
         goal="Temel algoritmaların çalışma biçimini, ön şartını ve karmaşıklığını karşılaştırmak.",
         sections=[
             ("Arama", [
                 "<b>Doğrusal arama:</b> baştan sona tek tek karşılaştırır; sıralı dizi gerekmez. İlk elemanda bulursa en iyi O(1), bulunamazsa veya sonda ise en kötü O(n).",
                 "<b>İkili arama:</b> dizi <b>önceden sıralı</b> olmalıdır. Ortayı karşılaştır; aranan küçükse sol yarıya, büyükse sağ yarıya geç. Her adımda aralık yarılanır; en kötü O(log n). Sıralama maliyeti ayrıca değerlendirilir.",
             ]),
             ("Sıralama", [
                 "<b>Kabarcık:</b> komşu elemanları kıyasla, yanlış sıradaysa yer değiştir; büyük elemanlar sona ilerler. Tipik/en kötü O(n²).",
                 "<b>Yerleştirmeli:</b> solda sıralı bölüm oluştur; yeni elemanı uygun yere kaydırarak yerleştir. Sıralıya yakın dizide iyi çalışır; en iyi O(n), en kötü O(n²).",
                 "<b>Hızlı sıralama:</b> pivot seç, küçük/büyük gruplara ayır, grupları yinele. Ortalama O(n log n), kötü pivotlarla en kötü O(n²).",
                 "<b>Birleştirmeli:</b> tek elemana kadar böl; sıralı parçaları birleştir. Her durumda O(n log n), ek bellek çoğu uygulamada O(n).",
             ]),
         ],
         example_title="Çözümlü örnek: ikili arama izi",
         example="""D = [3, 7, 11, 18, 24, 31, 40]; aranan = 24
sol=0, sağ=6 -> orta=3 -> D[3]=18 < 24
sol=4, sağ=6 -> orta=5 -> D[5]=31 > 24
sol=4, sağ=4 -> orta=4 -> D[4]=24, bulundu""",
         example_note="Üç karşılaştırma yapıldı. Dizinin sıralı oluşu sayesinde her adımda diğer yarı elendi. Sırasız dizide aynı mantık güvenilir değildir.",
         traps="Kitap hızlı sıralama için O(n log n) verir; bu ortalama/beklenen durumdur, en kötü durum O(n²)'dir. İkili aramanın sıralı dizi şartını mutlaka yaz."),
    dict(n=8, title="Genel Uygulamalar", pages="182-223",
         goal="Girdi, karar, döngü, dizi ve fonksiyonu birlikte kullanarak problemleri çözmek.",
         sections=[
             ("Problemi çözme şablonu", [
                 "1) Girdileri ve çıktı biçimini yaz. 2) Özel durumları belirle (boş dizi, sıfır, negatif değer, sınır notu). 3) Gerekli değişkenleri uygun ilk değerle başlat. 4) Koşul ve döngüyü kur. 5) Küçük örnekle elle izle. 6) Sonucu yazdır.",
                 "<b>Sayma:</b> sayaç=0, koşulu sağlayan her olayda sayaç++. <b>Toplama:</b> toplam=0, her elemanda ekle. <b>Çarpma:</b> sonuç=1, her adımda çarp. <b>En küçük/en büyük:</b> ilk veriyle başlatıp karşılaştır.",
                 "<b>Ağırlıklı ortalama:</b> örneğin vize %40 ve final %60 ise ortalama = 0,40 × vize + 0,60 × final. Yüzdelerin toplamı %100 olmalı. Geçme koşulu soruda veriliyorsa onu kullan.",
             ]),
             ("Birleşik örneklerde sınav yöntemi", [
                 "Dizi + koşul + döngü sorusunda her indis için koşulun doğru olup olmadığını tabloya yaz; sayaç ve toplamı satır satır güncelle. 20°C altı ve 20°C ve üstü gibi eşikler birbirini dışlamalı.",
                 "Basamak saymada sayı=0 özel durumdur (1 basamak). Pozitif sayıda tekrar tekrar 10'a tam böl; kaç kez bölündüğünü say. Negatif sayı için mutlak değeri al.",
                 "Sentinel ile okuma, eksik veri, sıfıra bölme ve dizi sınırı en sık hata kaynaklarıdır. Son yazdırılan şeyin hesaplanan değişken olduğundan emin ol.",
             ]),
         ],
         example_title="Çözümlü örnek: sıcak gün sayısı",
         example="""sıcak_gün = 0
FOR i = 0 TO n-1
    IF sıcaklık[i] >= 20 THEN
        sıcak_gün = sıcak_gün + 1
    END IF
NEXT i
YAZ sıcak_gün""",
         example_note="sıcaklık=[18, 20, 25, 19] ise koşul sırasıyla yanlış, doğru, doğru, yanlış; çıktı 2. Sınır değer 20 dahil edildi. Dizi bir kez gezildiği için O(n).",
         traps="Birden çok koşulda sınır değerleri boşta bırakma ya da iki dala birden sokma. Ortalama hesaplamadan önce adet=0 durumunu denetle."),
]


PRACTICE = [
    dict(title="Algoritmayı ve karmaşıklığı izle",
         intro="Bir soruda önce girdi/çıktıyı, sonra tekrar sayısını ve durma koşulunu bul. İşlem adımlarını tabloya dökmek özellikle karmaşıklık sorularında işe yarar.",
         cases=[
             ("Örnek 1 - Karar + işlem", "Girdi a=7, b=4 için aşağıdaki algoritma büyük değeri yazar:",
              """OKU a, b
IF a > b THEN büyük = a
ELSE büyük = b
YAZ büyük""",
              "7 > 4 doğru olduğundan büyük=7 ve çıktı 7. Koşul bir kez sınanır; zaman ve ek alan O(1)."),
             ("Örnek 2 - Ardışık döngüler", "İki döngü iç içe değilse süreler toplanır:",
              """FOR i = 1 TO n: YAZ i
FOR j = 1 TO n: YAZ j""",
              "Toplam 2n kez yazılır, Büyük O'da sabit çarpan atılır: O(n). İkinci FOR birincinin içinde olsaydı n × n = O(n²)."),
         ],
         checks=[("Bir algoritma mutlaka en hızlı çözüm müdür?", "Hayır; doğruluk ve sonluluk gereklidir, en hızlı olmak şart değildir."),
                 ("Girdi büyürken işlem sayısı hiç artmıyorsa?", "O(1)."),
                 ("İşlem sayısı 5n²+3n+2 ise?", "O(n²); baskın terim n²'dir.")]),
    dict(title="Veri tipini seç ve ifadeyi hesapla",
         intro="Veri tipini beklenen değer ve yapılacak işleme göre seç. Kimlik/telefon gibi başında sıfır bulunabilen ve aritmetik işlem gerektirmeyen veriler çoğu uygulamada metin olarak tutulur.",
         cases=[
             ("Örnek 1 - Tip seçimi", "Aşağıdaki değerler için en doğal türleri eşleştir:",
              """öğrenci_sayısı = 120       -> tam sayı
birim_fiyat = 19,95        -> kesin ondalık
harf_notu = 'A'           -> char
ad_soyad = 'Ayşe Yılmaz' -> string
mezun_mu = Doğru          -> boolean""",
              "Sayının ondalık olması tek başına double gerektirmez; parasal değerde decimal gibi kesin ondalık türü daha uygun olabilir."),
             ("Örnek 2 - İşlem izi", "Atama sırasını değiştirince sonuç da değişir:",
              """a = 8; b = 3
a = a - b       // a=5, b=3
b = a + b       // a=5, b=8
YAZ a, b        // 5, 8""",
              "İkinci satırdaki a artık 8 değil 5'tir. Her satır sonunda değer tablosunu yenile."),
         ],
         checks=[("'5' ile 5 aynı mı?", "Hayır; ilki karakter/metin, ikincisi sayısal değerdir."),
                 ("(4>2) AND (3<1) sonucu?", "Yanlış; ikinci koşul yanlıştır."),
                 ("(4>2) OR (3<1) sonucu?", "Doğru; en az bir koşul doğrudur.")]),
    dict(title="Karar ağacını elle çalıştır",
         intro="Koşullarda sınır değerlerini özellikle dene. 49, 50, 69, 70 ve 90 gibi sayılar yanlış >= veya yanlış ELSEIF sırasını hemen ortaya çıkarır.",
         cases=[
             ("Örnek 1 - Eşik izleme", "Ünitedeki not sınıflandırmasını şu dört girdiyle izle:",
              """not=49 -> >=90 Y, >=70 Y, >=50 Y -> FF
not=50 -> >=90 Y, >=70 Y, >=50 D -> CC
not=70 -> >=90 Y, >=70 D          -> BB
not=90 -> >=90 D                  -> AA""",
              "Burada D=Doğru, Y=Yanlış. İlk doğru koşuldan sonra kalan ELSEIF dalları atlanır."),
             ("Örnek 2 - İç içe koşul", "Ücretsiz teslimat, üyeliğe ve sepet tutarına birlikte bağlı olsun:",
              """IF üye_mi THEN
    IF tutar >= 200 THEN YAZ 'Ücretsiz'
    ELSE YAZ 'Ücretli'
ELSE YAZ 'Ücretli'""",
              "üye_mi=Yanlış ise iç koşul hiç sınanmaz. üye_mi=Doğru, tutar=200 ise 'Ücretsiz' yazılır."),
         ],
         checks=[("95 için >=50 kontrolü en önceyse hangi dal seçilir?", "İlk dal; bu yüzden eşikler doğru sırada olmalı."),
                 ("yaş=65, yaş<=65 doğru mu?", "Evet; sınır dahildir."),
                 ("IF koşulu yanlış, ELSE yoksa?", "Blok atlanır, sonraki satırdan devam edilir.")]),
    dict(title="Döngünün kaç kez çalıştığını bul",
         intro="Döngü sorularında üç sütun çiz: sayaç/okunan değer, koşulun sonucu, biriken sonuç. Çıkış kontrolünün başta mı sonda mı olduğunu unutma.",
         cases=[
             ("Örnek 1 - Çift sayıların toplamı", "1'den 6'ya kadar yalnız çift sayıları topla:",
              """toplam = 0
FOR i = 1 TO 6
    IF i mod 2 = 0 THEN toplam = toplam + i
NEXT i
YAZ toplam      // 2+4+6 = 12""",
              "FOR altı kez çalışır; IF yalnız i=2,4,6 için toplama yapar. Bir döngünün içinde IF olması karmaşıklığı O(n)'den O(n²)'ye çıkarmaz."),
             ("Örnek 2 - Başta/sonda kontrol", "koşul başlangıçta Yanlış olsun:",
              """WHILE koşul: YAZ 'A'       // 0 kez
DO: YAZ 'B': LOOP WHILE koşul  // 1 kez""",
              "Bu iki döngünün farkı ilk çalışmanın garanti olup olmamasıdır. Sonraki tekrarlar koşulun güncellenmesine bağlıdır."),
         ],
         checks=[("FOR i=0 TO 4 kaç tekrar?", "5 tekrar."),
                 ("Çarpım biriktirme başlangıcı kaç?", "1; 0 seçilirse sonuç hep 0 olur."),
                 ("Sentinel -1 ortalamaya dahil mi?", "Hayır; yalnız bitirmeyi bildirir.")]),
    dict(title="Fonksiyon çağrısını ve dönüşünü izle",
         intro="Fonksiyon sorusunda çağrı anındaki argümanları parametrelere yerleştir, RETURN satırını bul, dönen değeri çağrının yerine yaz.",
         cases=[
             ("Örnek 1 - İki çağrı", "Aynı fonksiyon farklı argümanlarla yeniden kullanılabilir:",
              """FONKSİYON Kare(x): RETURN x*x
a = Kare(3)       // 9
b = Kare(a-5)     // Kare(4) -> 16
YAZ a+b           // 25""",
              "İkinci çağrıda argüman a-5=4'tür. Fonksiyon tanımı bir kere yazılır, her çağrıda yeni girdiyle çalışır."),
             ("Örnek 2 - Özyineleme", "F(3) çağrısının açılıp kapanışını izle:",
              """F(0) = 1
F(n) = n * F(n-1)
F(3) -> 3*F(2) -> 3*2*F(1)
     -> 3*2*1*F(0) -> 6""",
              "Her çağrı n'yi azaltır; F(0) temel durumdur. F(0) tanımsız olsaydı çağrılar durmazdı."),
         ],
         checks=[("Fonksiyonun döndürdüğü değer nasıl alınır?", "Örneğin sonuç = Kare(3) ile."),
                 ("YAZ ile RETURN aynı mı?", "Hayır; YAZ çıktı üretir, RETURN çağırana değer verir."),
                 ("Argüman nerede görünür?", "Çağrıdaki gerçek değer veya ifade olarak.")]),
    dict(title="İndisleri ve matrisi izle",
         intro="İndis başlangıcı verilmemişse kitabın ilgili örneğine bak; bu notların tüm uygulamaları 0 tabanlıdır.",
         cases=[
             ("Örnek 1 - Koşulu sağlayanları say", "D=[4,7,2,9,6] için 5'ten büyük eleman sayısı:",
              """adet = 0
FOR i = 0 TO 4
    IF D[i] > 5 THEN adet = adet + 1
NEXT i
YAZ adet        // 3""",
              "Koşulu 7, 9, 6 sağlar. Beş eleman gezilir; i=5 geçersiz olurdu."),
             ("Örnek 2 - Matris toplamı", "M=[[1,2,3],[4,5,6]] matrisinin tüm elemanlarını topla:",
              """toplam = 0
FOR satır = 0 TO 1
    FOR sütun = 0 TO 2
        toplam = toplam + M[satır][sütun]
YAZ toplam      // 21""",
              "2 satır × 3 sütun = 6 eleman. M[1][0]=4; M[0][2]=3. Dış/ iç döngü sınırları matris boyutlarına göre ayrı belirlenir."),
         ],
         checks=[("6 elemanlı 0 tabanlı dizinin son indisi?", "5."),
                 ("M[1][2] hangi konum?", "İkinci satır, üçüncü sütun."),
                 ("r×c matrisin tümünü gezme süresi?", "O(r×c).")]),
    dict(title="Arama ve sıralama adımlarını karşılaştır",
         intro="Algoritmanın adını ezberlemek yerine hangi elemanları hangi sırayla karşılaştırdığına bak. Özellikle sıralı dizi ön şartını ve pivotun rolünü ayırt et.",
         cases=[
             ("Örnek 1 - Kabarcıkta ilk tur", "D=[8,3,6,1] için komşuları artan sırada karşılaştır:",
              """[8,3,6,1] -> [3,8,6,1]
          -> [3,6,8,1]
          -> [3,6,1,8]""",
              "İlk turun sonunda en büyük değer 8 sona yerleşir. Dizi henüz sıralı değildir; sonraki turlarda 3,6,1 düzenlenir."),
             ("Örnek 2 - Birleştirmeli", "D=[9,4,7,2] önce bölünür, sonra sıralı parçalar birleşir:",
              """[9,4,7,2] -> [9,4] [7,2]
            -> [9] [4] [7] [2]
            -> [4,9] [2,7]
            -> [2,4,7,9]""",
              "Hızlı sıralamada pivotla bölümleme; birleştirmeli sıralamada ayrı sıralı parçaları bir araya getirme vurgulanır."),
         ],
         checks=[("Sırasız dizide doğrudan ikili arama güvenilir mi?", "Hayır; önce sıralama gerekir."),
                 ("Hızlı sıralamanın en kötü süresi?", "O(n²); kötü pivot seçimi olabilir."),
                 ("Yerleştirmeli sıralama sıralıya yakın dizide?", "En iyi durumda O(n)'e yaklaşır.")]),
    dict(title="Birleşik problemleri parçala",
         intro="Uygulama sorularında formül + koşul + döngü birlikte gelir. Önce veri doğrulama ve boş veri durumunu, sonra asıl hesaplamayı kur.",
         cases=[
             ("Örnek 1 - Ağırlıklı not ve karar", "Vize/final yüzdeleri soruda %40/%60 verilmiş olsun:",
              """OKU vize, final
ortalama = 0.4*vize + 0.6*final
IF ortalama >= 50 THEN YAZ 'Geçti'
ELSE YAZ 'Kaldı'""",
              "vize=70, final=80 için ortalama=76 ve sonuç 'Geçti'. Gerçek dersin geçme kuralları farklı verildiyse sorudaki koşul esas alınır."),
             ("Örnek 2 - Basamak sayısı", "Sıfır ve negatif girdi için de çalışan temel fikir:",
              """OKU sayı
x = mutlak(sayı); basamak = 1
WHILE x >= 10
    x = x tam_böl 10
    basamak = basamak + 1
YAZ basamak""",
              "0 için döngüye girilmez, çıktı 1'dir. -125 için mutlak değer 125 alınır; 125→12→1 olduğundan çıktı 3'tür."),
         ],
         checks=[("5 veri için ortalamada bölen kaçtır?", "5; geçerli veri sayısı kullanılır."),
                 ("20°C eşikte 'sıcak' >=20 ise 20 nereye gider?", "Sıcak gün grubuna."),
                 ("Bir uygulama algoritmasını nasıl kontrol edersin?", "Normal, sınır ve boş/özel girdilerle elle izle.")]),
]


QUESTIONS = [
    # 1
    (1, "Bir algoritmanın sonlu sayıda adım sonunda durması hangi özelliktir?", ["Kesinlik", "Sonluluk", "Görsellik", "En hızlı olma"], "B", "Algoritma bitmelidir; sonsuz döngü bu özelliği bozar."),
    (1, "Akış diyagramında bir koşul hangi şekille gösterilir?", ["Oval", "Dikdörtgen", "Eşkenar dörtgen", "Paralelkenar"], "C", "Karar/koşul için eşkenar dörtgen kullanılır."),
    (1, "Her biri n kez çalışan iki iç içe döngünün zamanı genellikle nedir?", ["O(1)", "O(log n)", "O(n)", "O(n²)"], "D", "n × n tekrar O(n²) eder."),
    (1, "Programlama dilinden bağımsız adım anlatımı hangisidir?", ["Makine kodu", "Sözde kod", "İkili sayı", "Derleyici"], "B", "Sözde kod algoritmanın dil bağımsız taslağıdır."),
    (1, "Bir dizinin belirli indisine doğrudan erişim genellikle hangi karmaşıklıktadır?", ["O(1)", "O(n)", "O(n²)", "O(2ⁿ)"], "A", "İndis biliniyorsa doğrudan erişim sabit zamandır."),
    # 2
    (2, "Birden fazla karakterden oluşan metin için hangi tip uygundur?", ["char", "boolean", "string", "int"], "C", "string metin dizisini, char tek karakteri temsil eder."),
    (2, "Kesirli ölçüm saklamak için hangisi daha uygundur?", ["int", "double", "boolean", "char"], "B", "double ondalıklı değerleri tutar."),
    (2, "17 mod 5 işleminin sonucu kaçtır?", ["1", "2", "3", "5"], "B", "17'nin 5'e bölümünden kalan 2'dir."),
    (2, "A AND B hangi durumda doğrudur?", ["Yalnız A doğruysa", "Yalnız B doğruysa", "En az biri doğruysa", "İkisi de doğruysa"], "D", "AND için iki koşul da doğru olmalıdır."),
    (2, "x=4 iken x=x+1 sonrası x kaç olur?", ["4", "5", "1", "Hata"], "B", "Önce 4+1 hesaplanır, sonra x'e 5 atanır."),
    # 3
    (3, "Yalnız IF bulunan yapıda koşul yanlışsa ne olur?", ["Blok atlanır", "Blok iki kez çalışır", "ELSE çalışır", "Program mutlaka hata verir"], "A", "Tek seçimde yanlış koşulun bloğu çalışmaz."),
    (3, "IF/ELSE yapısında tek çalışmada kaç dal yürütülür?", ["Sıfır", "Bir", "İki", "Sonsuz"], "B", "Koşula göre iki daldan tam biri seçilir."),
    (3, "not=95 için önce not>=50 sonra ELSEIF not>=90 sınanırsa ilk dal hangisidir?", ["İkinci dal", "Hiçbiri", "İlk dal", "İki dal"], "C", "İlk doğru koşul olan >=50 seçilir; sıra önemlidir."),
    (3, "'18-65 yaş dahil' koşulu hangisidir?", ["yaş>18 OR yaş<65", "yaş>=18 AND yaş<=65", "yaş=18 AND yaş=65", "yaş<18 OR yaş>65"], "B", "İki sınırın aynı anda sağlanması gerekir."),
    (3, "İç içe IF ne demektir?", ["IF'in bir dalında başka IF bulunması", "Döngünün koşulsuz olması", "Her dalın çalışması", "Aynı satırın tekrarı"], "A", "Bir kararın içinde yeni karar kurulur."),
    # 4
    (4, "WHILE döngüsü koşulu başlangıçta yanlışsa kaç kez çalışabilir?", ["Sıfır", "Bir", "İki", "Sonsuz"], "A", "Ön kontrol yüzünden blok hiç çalışmayabilir."),
    (4, "Koşulu sonda denetlenen DO...LOOP WHILE en az kaç kez çalışır?", ["Sıfır", "Bir", "İki", "n kez"], "B", "Blok önce, koşul sonra değerlendirilir."),
    (4, "Uçlar dahil FOR i=1 TO 5 kaç kez çalışır?", ["4", "5", "6", "Belirsiz"], "B", "1,2,3,4,5 olmak üzere 5 tekrar vardır."),
    (4, "Bir toplam değişkeninin güvenli başlangıcı hangisidir?", ["-1", "0", "1", "n"], "B", "Toplamın etkisiz elemanı 0'dır."),
    (4, "n kez dış ve n kez iç döngü çalışırsa toplam tekrar yaklaşık kaçtır?", ["1", "log n", "n", "n²"], "D", "Her dış adımda n iç adım vardır: n × n."),
    # 5
    (5, "Void alt programın ayırt edici özelliği nedir?", ["Parametre alamaz", "Değer döndürmez", "Yazdıramaz", "Çağrılamaz"], "B", "Void/prosedür çağırana sonuç değeri döndürmez."),
    (5, "FONKSİYON Alan(en,boy) tanımındaki en ve boy nedir?", ["Argüman", "Sabit", "Parametre", "Dizi"], "C", "Tanımdaki adlar parametre, çağrıdaki gerçek değerler argümandır."),
    (5, "Bir fonksiyonun hesapladığı değeri çağırana ileten ifade hangisidir?", ["OKU", "YAZ", "FOR", "RETURN"], "D", "RETURN dönüş değeri sağlar."),
    (5, "Faktöriyel özyinelemesinde doğru temel durum hangisidir?", ["F(0)=1", "F(0)=0", "F(n)=n+n", "F(1)=0"], "A", "0! = 1, bu durum çağrıların durmasını sağlar."),
    (5, "Özyinelemede temel durum yoksa hangi risk doğar?", ["Dizi sıralanır", "Bitmeyen çağrı/taşma", "Veri tipi değişir", "Her zaman O(1) olur"], "B", "Çağrılar sonlanmadan sürerek yığını tüketebilir."),
    # 6
    (6, "0 tabanlı n elemanlı dizinin son indisi nedir?", ["n", "n+1", "n-1", "1"], "C", "İndisler 0 ile n-1 arasındadır."),
    (6, "D=[8,3,6,9] için D[2] kaçtır?", ["3", "6", "8", "9"], "B", "0 tabanlı üçüncü eleman 6'dır."),
    (6, "Temel dizi tanımında elemanların veri tipleri nasıldır?", ["Aynı tip", "Her zaman farklı", "Yalnız string", "Yalnız sayı"], "A", "Kitaptaki temel dizi modeli aynı tür verileri tutar."),
    (6, "M=[ [1,2,3], [4,5,6] ] için M[1][2] kaçtır?", ["2", "3", "5", "6"], "D", "İkinci satırın üçüncü sütunu 6'dır."),
    (6, "r satır ve c sütunlu matrisin tümünü gezme zamanı nedir?", ["O(1)", "O(r+c)", "O(r×c)", "O(log r)"], "C", "Her satırdaki c hücre, r satır için işlenir."),
    # 7
    (7, "İkili aramanın temel ön şartı nedir?", ["Dizi sıralı olmalı", "Dizi boş olmalı", "İki döngü olmalı", "Değer mutlaka bulunmalı"], "A", "Orta değere göre yarıyı elemek için sıra gereklidir."),
    (7, "Doğrusal aramanın en kötü zaman karmaşıklığı nedir?", ["O(1)", "O(log n)", "O(n)", "O(n²)"], "C", "Eleman bulunmazsa tüm n öğe incelenir."),
    (7, "Komşu öğeleri karşılaştırıp yer değiştiren yöntem hangisidir?", ["Birleştirmeli", "Kabarcık", "İkili arama", "Hızlı"], "B", "Kabarcık sıralama komşu çiftleri karşılaştırır."),
    (7, "Pivot seçen sıralama yöntemi hangisidir?", ["Yerleştirmeli", "Kabarcık", "Birleştirmeli", "Hızlı"], "D", "Hızlı sıralama pivot çevresinde bölümlere ayırır."),
    (7, "Birleştirmeli sıralamanın genel zaman karmaşıklığı nedir?", ["O(1)", "O(n)", "O(n log n)", "O(n²)"], "C", "Bölme düzeyleri log n, her düzeyde toplam n işlem vardır."),
    # 8
    (8, "Vize 70 (%40), final 80 (%60) ise ağırlıklı ortalama kaçtır?", ["74", "75", "76", "80"], "C", "70×0,4 + 80×0,6 = 28+48 = 76."),
    (8, "-1 bitirme değeriyle ortalama alınırken -1 için ne yapılır?", ["Toplama katılır", "Sayaca katılır", "Çarpıma katılır", "Hesaba katılmaz"], "D", "Sentinel yalnız döngüyü bitirir."),
    (8, "[18,20,25,19] sıcaklıklarında >=20 olan gün sayısı kaçtır?", ["1", "2", "3", "4"], "B", "20 ve 25 koşulu sağlar."),
    (8, "Ortalama = toplam/adet öncesi hangi durum denetlenmeli?", ["adet=0", "toplam>0", "indis=0", "dizi sıralı"], "A", "adet=0 ise sıfıra bölme oluşur."),
    (8, "0 sayısının onluk yazımında kaç basamak vardır?", ["0", "1", "2", "10"], "B", "0 özel durumda tek basamaklıdır."),
]


def footer(canvas, doc):
    canvas.saveState()
    w, h = A4
    canvas.setStrokeColor(LINE)
    canvas.setLineWidth(.5)
    canvas.line(18 * mm, h - 15 * mm, w - 18 * mm, h - 15 * mm)
    canvas.line(18 * mm, 14 * mm, w - 18 * mm, 14 * mm)
    canvas.setFont("Arial-Bold", 7.5)
    canvas.setFillColor(NAVY)
    canvas.drawString(18 * mm, h - 11.2 * mm, "ALGORİTMA VE PROGRAMLAMAYA GİRİŞ")
    canvas.setFont("Arial", 7.5)
    canvas.setFillColor(MUTED)
    canvas.drawRightString(w - 18 * mm, h - 11.2 * mm, "8 ÜNİTE ÇALIŞMA NOTLARI")
    canvas.drawString(18 * mm, 10.5 * mm, "Konu özeti  •  sözde kod  •  çözümlü örnek  •  deneme")
    canvas.drawRightString(w - 18 * mm, 10.5 * mm, f"Sayfa {doc.page}")
    canvas.restoreState()


story = []
story += [Spacer(1, 32 * mm), P("ALGORİTMA VE<br/>PROGRAMLAMAYA GİRİŞ", "Cover"),
          P("8 ünite için sınav odaklı çalışma notları", "CoverSub")]
box(story, "BU DOSYADA", "Temel kavramlar, karar yapıları, döngüler, fonksiyonlar, diziler, arama-sıralama algoritmaları ve bütünleşik uygulamalar; adım adım çözülmüş sözde kod örnekleri; 40 soruluk genel deneme ve gerekçeli cevap anahtarı.")
story.append(Spacer(1, 12 * mm))
story.append(P("Nasıl çalışmalı?", "Section"))
for line in [
    "Her ünitede önce kalın yazılmış ayrımları öğren; sonra örnekte değişkenleri satır satır izle.",
    "Kodu okumakla yetinme: çıktıyı kapatıp aynı algoritmayı kendin elle çalıştır.",
    "Denemeyi bitirdikten sonra yanlışlarını ilgili ünitenin 'Sık hata' kısmıyla karşılaştır.",
]:
    story.append(P("• " + line, "BulletTR"))
story.append(Spacer(1, 7 * mm))
box(story, "KAYNAK VE GÖSTERİM", "Bu notlar, sağlanan <b>Algoritma ve Programlamaya Giriş</b> e-kitabının 8 ünitesi temel alınarak hazırlanmıştır. Kitap C#/Visual Basic ve çeşitli kaba kod gösterimlerini birlikte kullanır. Buradaki kodlar öğretici <b>sözde koddur</b>: köşeli parantezli diziler 0 tabanlı, <b>FOR i=a TO b</b> iki ucu dahil, <b>=</b> atama veya bağlama göre eşitlik anlamındadır. Gerçek dilde sözdizimi değişebilir.", PALE2)
story.append(PageBreak())

for unit, practice in zip(UNITS, PRACTICE):
    story.append(P(f"ÜNİTE {unit['n']:02d}  /  KİTAP PDF s. {unit['pages']}", "Kicker"))
    story.append(P(unit["title"], "UnitTitle"))
    box(story, "BU ÜNİTEDE YAPABİLMELİSİN", unit["goal"])
    for title, points in unit["sections"]:
        sect(story, title, points)
    story.append(P(unit["example_title"], "Section"))
    code(story, unit["example"])
    story.append(P(unit["example_note"], "Body"))
    box(story, "SIK HATA / SINAV İPUCU", unit["traps"], PALE2)
    story.append(PageBreak())
    story.append(P(f"ÜNİTE {unit['n']:02d}  /  UYGULAMA", "Kicker"))
    story.append(P(practice["title"], "UnitTitle"))
    story.append(P(practice["intro"], "Body"))
    for case_title, intro, pseudo, explanation in practice["cases"]:
        story.append(P(case_title, "Section"))
        story.append(P(intro, "Body"))
        code(story, pseudo)
        story.append(P(explanation, "Body"))
    story.append(P("Hızlı kontrol", "Section"))
    for question, answer in practice["checks"]:
        story.append(P(f"<b>{escape(question)}</b> {escape(answer)}", "BulletTR"))
    story.append(PageBreak())

story.append(P("SON TEKRAR", "Kicker"))
story.append(P("Bir bakışta ayrımlar", "UnitTitle"))
table(story, ["Konu", "Hatırlanacak kural"], [
    ("Algoritma", "Açık, uygulanabilir, sonlu ve doğru adımlar."),
    ("IF / ELSE", "IF tek seçim; IF/ELSE iki daldan biri; ELSEIF ilk doğru koşul."),
    ("WHILE / DO...LOOP", "Başta koşul: 0 tekrar mümkün. Sonda koşul: en az 1 tekrar."),
    ("FOR", "Tekrar aralığı belliyse; bu notlarda TO uçları dahil."),
    ("Fonksiyon / prosedür", "Fonksiyon değer döndürür; void/prosedür döndürmez."),
    ("Dizi", "0 tabanlı n elemanda son indis n-1; matriste satır ve sütun."),
    ("İkili arama", "Sıralı dizi şart; O(log n)."),
    ("Sıralama", "Kabarcık/yerleştirmeli en kötü O(n²); birleştirmeli O(n log n)."),
], [40 * mm, 134 * mm])
story.append(Spacer(1, 6 * mm))
table(story, ["Yapı", "Tipik süre", "Neden"], [
    ("Doğrudan erişim", "O(1)", "Adım sayısı n'den bağımsız."),
    ("İkili arama", "O(log n)", "Aralık her adımda yarılanır."),
    ("Tek tam tarama", "O(n)", "n elemanın her biri incelenir."),
    ("İç içe iki tam tarama", "O(n²)", "n × n tekrar yapılır."),
], [55 * mm, 32 * mm, 87 * mm])
story.append(Spacer(1, 7 * mm))
box(story, "DENEMEDEN ÖNCE", "Sözde kodda <b>önce sağ tarafı hesapla, sonra sol tarafa ata</b>. Koşulları sırayla izle. Döngüde kaç tekrar olduğunu ve son sınırın dahil olup olmadığını yaz. Bir matriste önce satırı, sonra sütunu bul.", PALE2)
story.append(PageBreak())

story.append(P("GENEL DENEME", "Kicker"))
story.append(P("40 özgün soru", "UnitTitle"))
story.append(P("Her üniteden 5 soru vardır. Önce cevapları kapatarak çöz; gerekçeleri sondaki anahtardan kontrol et.", "Small"))
last_unit = 0
for i, (unit, question, opts, answer, why) in enumerate(QUESTIONS, 1):
    if unit != last_unit:
        story.append(P(f"Ünite {unit}", "Section"))
        last_unit = unit
    story.append(P(f"<b>{i}.</b> {escape(question)}", "Q"))
    story.append(P(" &nbsp;&nbsp; ".join(f"<b>{c})</b> {escape(v)}" for c, v in zip("ABCD", opts)), "Small"))
    story.append(Spacer(1, 3 * mm))
story.append(PageBreak())

story.append(P("CEVAP ANAHTARI", "Kicker"))
story.append(P("Gerekçeli cevaplar", "UnitTitle"))
for i, (unit, question, opts, answer, why) in enumerate(QUESTIONS, 1):
    story.append(P(f"<b>{i}. {answer}</b> - {escape(why)}", "A"))
    if i in (10, 20, 30):
        story.append(Spacer(1, 4 * mm))
box(story, "SON KONTROL", "Yanlış yaptığın soruları üniteye göre grupla. Özellikle <b>koşul sırası, döngü sınırları, indisler, RETURN/YAZ ayrımı, ikili arama ön şartı ve O gösterimi</b> için birer örneği baştan çöz.", PALE2)

doc = SimpleDocTemplate(str(OUT), pagesize=A4, rightMargin=18 * mm,
                        leftMargin=18 * mm, topMargin=21 * mm, bottomMargin=18 * mm,
                        title="Algoritma ve Programlamaya Giriş - Çalışma Notları",
                        author="OpenAI Codex", subject="E-kitaba dayalı 8 ünite çalışma notları")
doc.build(story, onFirstPage=footer, onLaterPages=footer)
print(OUT)
