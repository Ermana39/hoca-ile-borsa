from pathlib import Path
from xml.sax.saxutils import escape

from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, PageBreak


ROOT = Path(__file__).resolve().parents[2]
OUTPUT = ROOT / "output" / "pdf" / "bilgisayar-destekli-tasarim-calisma-notlari.pdf"
OUTPUT.parent.mkdir(parents=True, exist_ok=True)
FONT_DIR = Path(r"C:\Windows\Fonts")
pdfmetrics.registerFont(TTFont("Arial", str(FONT_DIR / "arial.ttf")))
pdfmetrics.registerFont(TTFont("Arial-Bold", str(FONT_DIR / "arialbd.ttf")))
pdfmetrics.registerFontFamily("Arial", normal="Arial", bold="Arial-Bold")

NAVY = colors.HexColor("#17324D")
BLUE = colors.HexColor("#245D84")
TEAL = colors.HexColor("#087A77")
INK = colors.HexColor("#1D2B35")
MUTED = colors.HexColor("#536675")
PALE = colors.HexColor("#EAF3F7")
PALE2 = colors.HexColor("#EFF7F4")
LINE = colors.HexColor("#CBD8E1")
WHITE = colors.white

styles = getSampleStyleSheet()
styles.add(ParagraphStyle(name="CoverTitle", fontName="Arial-Bold", fontSize=24, leading=31,
                          textColor=NAVY, alignment=TA_CENTER, spaceAfter=14))
styles.add(ParagraphStyle(name="CoverSub", fontName="Arial", fontSize=12, leading=18,
                          textColor=BLUE, alignment=TA_CENTER, spaceAfter=18))
styles.add(ParagraphStyle(name="Kicker", fontName="Arial-Bold", fontSize=8.2, leading=11.2,
                          textColor=TEAL, spaceAfter=4))
styles.add(ParagraphStyle(name="UnitTitle", fontName="Arial-Bold", fontSize=17.3, leading=22,
                          textColor=NAVY, spaceAfter=6))
styles.add(ParagraphStyle(name="Section", fontName="Arial-Bold", fontSize=10.6, leading=14.1,
                          textColor=BLUE, spaceBefore=8, spaceAfter=4))
styles.add(ParagraphStyle(name="Body", fontName="Arial", fontSize=9.6, leading=13.7,
                          textColor=INK, spaceAfter=5))
styles.add(ParagraphStyle(name="BulletTR", fontName="Arial", fontSize=9.2, leading=13.1,
                          textColor=INK, leftIndent=10, firstLineIndent=-7, spaceAfter=3.5))
styles.add(ParagraphStyle(name="Small", fontName="Arial", fontSize=8.1, leading=11.1,
                          textColor=MUTED, spaceAfter=3))
styles.add(ParagraphStyle(name="Question", fontName="Arial", fontSize=9.4, leading=13.3,
                          textColor=INK, spaceAfter=3))
styles.add(ParagraphStyle(name="Answer", fontName="Arial", fontSize=9.1, leading=13,
                          textColor=INK, spaceAfter=3))
styles.add(ParagraphStyle(name="TableHead", fontName="Arial-Bold", fontSize=8.6, leading=11.4,
                          textColor=WHITE))
styles.add(ParagraphStyle(name="TableCell", fontName="Arial", fontSize=8.6, leading=11.7,
                          textColor=INK))


def P(text, style="Body"):
    return Paragraph(str(text).replace("–", "-").replace("—", "-"), styles[style])


def section(story, title, items):
    story.append(P(title, "Section"))
    for item in items:
        story.append(P("• " + item, "BulletTR"))


def box(story, title, body, color=PALE):
    table = Table([[P(title, "Kicker")], [P(body, "Body")]], colWidths=[174 * mm])
    table.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), color),
        ("BOX", (0, 0), (-1, -1), .45, LINE),
        ("LEFTPADDING", (0, 0), (-1, -1), 8),
        ("RIGHTPADDING", (0, 0), (-1, -1), 8),
        ("TOPPADDING", (0, 0), (-1, 0), 7),
        ("BOTTOMPADDING", (0, -1), (-1, -1), 3),
    ]))
    story.append(table)


UNITS = [
    dict(n=1, title="İletişim, Tasarım ve Teknolojiye Giriş", pages="3-17",
         goal="Tasarım, grafik tasarım, görsel iletişim ve sanat ilişkisini ayırt etmek.",
         core=[
             "<b>Tasarım</b> yalnızca güzel görüntü değildir: ihtiyacı/problemi tanımlama, çözüm fikri geliştirme, üretme ve ortaya çıkan ürünün tümünü kapsar. Kitabın vurgusu <b>amaca uygun çözüm</b> ve iletişim işlevidir.",
             "<b>Görsel iletişim tasarımı</b> bir mesajı hedef kitleye görsel öğelerle iletir. Önce <b>kim</b> için, <b>hangi mesajın</b>, <b>hangi mecrada</b> verileceği anlaşılır; ardından görsel dil oluşturulur.",
             "<b>Grafik tasarım</b> basılı ve dijital iletişim ürünleri üretir: afiş, ambalaj, dergi, logo, yönlendirme, web/sosyal medya görselleri. Peyzaj tasarımı bu alanın tipik ürünü değildir.",
             "<b>Sanat ile fark:</b> Kitabın sınav yaklaşımında sanat daha çok kişisel yoruma; grafik tasarım ise hedefe dönük, yöntemli ve rasyonel problem çözmeye dayanır. Estetik değerlidir ama işlevi karşılamalıdır.",
             "<b>Bilgisayarın rolü:</b> tasarım fikrini ürüne dönüştüren araçtır. Yazılım bilgisi tek başına güçlü fikir veya etkili iletişim sağlamaz. Bu dersin ağırlığı dijital grafik tasarım yazılımlarının kullanımındadır.",
         ],
         focus=[
             "Tasarım süreci için kısa sıra: <b>brief/ihtiyaç → hedef kitle → mesaj → fikir → uygulama → değerlendirme</b>.",
             "Kitaptaki ünite sorularında <b>öncelik</b> sorulunca çoğunlukla 'yaratıcı ve anlaşılır tasarım fikri' veya 'hedef kitleye etkili iletişim' aranır.",
             "Tarihsel çizgi: mağara resimleri görsel iletişimin erken örnekleridir; ticari sanat, grafik sanatlar, grafik tasarım ve iletişim tasarımı kavramları birbirini genişleterek gelişmiştir.",
         ],
         pitfall="'Tasarım = süsleme' ve 'iyi yazılım kullanımı = iyi tasarım' eşitlikleri yanlıştır. Yazılım, iletişim problemini çözen fikrin uygulama aracıdır.",
         check=["Tasarımın üç boyutunu söyle.", "Görsel iletişimde hedef kitle neden önemlidir?", "Bu dersin ana uygulama alanı nedir?"],
         answers="fikir-süreç-ürün; mesaj/biçim hedef kitleye göre seçilir; dijital grafik tasarım yazılımları"),
    dict(n=2, title="Masaüstü Yayıncılık ve Temel Kavramlar", pages="18-46",
         goal="Yayıncılık sürecini, raster-vektör farkını, çözünürlük ve renk modellerini bilmek.",
         core=[
             "<b>Masaüstü yayıncılık (DTP):</b> metin, görsel ve sayfa düzenini bilgisayar ortamında hazırlayıp dijital/basılı yayına aktarma sürecidir. Macintosh'un 1984'te gelişi, Aldus PageMaker'ın 1985'te kullanıma girmesi önemli dönüm noktalarıdır.",
             "<b>Raster/bitmap:</b> piksellerden oluşur; fotoğraf için uygundur; büyütmede yeni ayrıntı üretilemediğinden kalite kaybı görülebilir. JPEG, PNG, TIFF, PSD tipik örneklerdir. <b>Vektör:</b> matematiksel yol/şekillerden oluşur; çözünürlükten bağımsız ölçeklenir; logo ve çizim için uygundur. SVG, AI, EPS örnektir.",
             "<b>Çözünürlük:</b> görüntünün piksel boyutu ile basılı fiziksel ölçü birlikte değerlendirilir. PPI, inç başına görüntü pikselidir; DPI baskı cihazının nokta yoğunluğudur. Kitap bu terimleri yer yer yakın anlamda kullanır.",
             "<b>Yeniden boyutlandırma/interpolasyon:</b> küçük raster görüntüyü büyütmek eksik pikselleri tahminle doldurur ve netliği azaltabilir. Tekrarlı küçültme-büyütmeden kaçın; mümkünse yüksek çözünürlüklü kaynak kullan.",
             "<b>RGB:</b> ışıkla çalışan ekran renk modeli; Red-Green-Blue, toplamsal. <b>CMYK:</b> Cyan-Magenta-Yellow-Key/Black mürekkepleriyle baskı modeli; çıkarmalı. RGB'den CMYK'ya geçişte canlı renkler değişebilir çünkü baskı renk aralığı daha dardır.",
         ],
         focus=[
             "Masaüstü yayıncılık akışı: içerik/metin → görsel hazırlığı → sayfa düzeni → prova/tashih → çıktı/yayın. Kitap sorularında ilk teknik adım metnin bilgisayara aktarılmasıdır.",
             "<b>Piksel</b> raster görüntünün en küçük öğesi; <b>tram</b> matbaa baskısında tonları oluşturan nokta düzenidir. İkisini karıştırma.",
             "Matbaa/ofset tasarımında kitapta <b>300 PPI</b> ve <b>CMYK</b>; dijital görselde RGB ve istenen piksel ebatları öne çıkar. '72 PPI' kitap sınavlarında dijital için geçebilir; ekranda netliği asıl piksel ölçüsü belirler.",
         ],
         pitfall="Vektör grafik 'büyütülünce pikselleşir' ifadesi yanlıştır. Fotoğrafı sırf vektör dosyasına koymak ise fotoğrafın kendi raster yapısını değiştirmez.",
         check=["Logo için raster mı vektör mü?", "Baskı renk modeli nedir?", "Piksel ile tram arasındaki fark nedir?"],
         answers="vektör; CMYK; piksel dijital görüntü, tram baskı nokta düzeni"),
    dict(n=3, title="Photoshop ile Görüntü İşleme", pages="47-67",
         goal="Photoshop'un kullanım alanını, çalışma arayüzünü ve temel kısayolları tanımak.",
         core=[
             "<b>Photoshop</b> ağırlıkla raster/bitmap görüntü işleme yazılımıdır: fotoğraf rötuşu, kolaj, foto manipülasyon, afiş ve sosyal medya görseli. Çok sayfalı kitap mizanpajı için temel tercih değildir.",
             "<b>Çalışma alanı:</b> Menu Bar komutları; <b>Options Bar</b> seçili aracın ayarları; <b>Tools Panel</b> araçlar; sağdaki paneller katman/renk/geçmiş gibi kontroller; üstte belge sekmeleri.",
             "<b>Açma:</b> File &gt; Open / Ctrl+O; başlangıçtaki Open; sürükle-bırak; Bridge üzerinden açma. <b>Yeni belge:</b> Ctrl+N. Ctrl+A ise tümünü seçer, dosya açmaz.",
             "<b>Görünüm:</b> Ctrl + '+' yakınlaşma, Ctrl + '-' uzaklaşma; Space basılıyken görüntüyü sürükleme; <b>F</b> ekran modları; <b>Tab</b> panelleri gizleme/gösterme. Window &gt; Workspace çalışma alanı seçimi.",
             "<b>Zoom</b> yalnızca ekrandaki görüntülenme oranını değiştirir; gerçek dosya piksel boyutunu değiştirmez. Image Size ise belge ölçüsünü/çözünürlüğünü değiştirir.",
         ],
         focus=[
             "Pratik sıra: görseli aç → uygun yakınlaşmayı ayarla → panelleri düzenle → doğru aracı ve Options Bar ayarını seç → çalışmayı PSD olarak sakla.",
             "Photoshop'un ilk geliştiricileri <b>Thomas ve John Knoll</b> kardeşleridir. Kitabın ekran görüntüleri çoğunlukla Photoshop 22.4.1 Windows sürümüne dayanır.",
             "Bir panel yoksa önce <b>Window</b> menüsünden adını ara; çalışma alanı karıştıysa Workspace düzenini seç.",
         ],
         pitfall="Yakınlaşma (Zoom) ile çözünürlük/ebat değiştirme aynı işlem değildir. Zoom sırasında dosya boyutu artmaz.",
         check=["Options Bar neyi gösterir?", "Panelleri gizleyen tuş hangisi?", "Ctrl+N ne yapar?"],
         answers="aktif araç ayarları; Tab; yeni belge"),
    dict(n=4, title="Araçlar ve Seçimlerle Çalışmak", pages="68-107",
         goal="Seçim araçlarını amaca göre seçmek, seçimleri düzeltmek ve kırpmak.",
         core=[
             "<b>Seçim</b> yalnızca belirlenen piksellerde işlem yapmayı sağlar. Temel yaklaşım: önce doğru alanı seç, sonra kopyala/sil/renk düzelt/filtre uygula. Araç paneli görünmüyorsa <b>Window &gt; Tools</b>.",
             "<b>Geometrik:</b> Rectangular/Elliptical Marquee dikdörtgen veya oval alan; Single Row/Column tek piksel satır/sütun. <b>Serbest:</b> Lasso, Polygonal Lasso, Magnetic Lasso. <b>Otomatik/renge duyarlı:</b> Object Selection, Quick Selection, Magic Wand.",
             "<b>Magic Wand:</b> benzer renkte pikselleri seçer. <i>Tolerance</i> yükseldikçe daha geniş ton aralığı alınır. <i>Contiguous</i> açıkken bitişik benzer renkler; kapalıyken belgenin ayrı yerlerindeki benzer renkler de seçilir.",
             "<b>Seçim yönetimi:</b> Shift ile ekle, Alt ile çıkar; geometrik seçimde Alt ile merkezden başla. Select &gt; Deselect / <b>Ctrl+D</b> seçimi bırakır. <b>Ctrl+H</b> seçimi ve diğer yardımcı çizgileri gizler ama seçim etkisini sürdürür.",
             "<b>Kenar:</b> Feather sınırı yumuşatır; Select and Mask saç ve karmaşık kenarları düzeltir. Select &gt; Modify: <b>Expand</b> dışa genişletir, <b>Contract</b> içe daraltır, <b>Border</b> çerçeve yapar, <b>Smooth</b> keskin düzensizliği azaltır.",
         ],
         focus=[
             "<b>Crop Tool</b> fotoğrafın istenmeyen dış bölümlerini kırpar; Enter ile onaylanır. <b>Perspective Crop</b> kırpma sırasında perspektif düzeltmesi yapar.",
             "Düz kenarlı nesne: Polygonal Lasso veya Pen; tek renkli arka plan: Magic Wand; nesneyi hızlı ayırma: Object/Quick Selection; saç gibi ince kenar: Select and Mask.",
             "Seçili içeriği taşımak için <b>Move Tool</b> kullanılır. Seçim sınırının yerini değiştirmek ile pikselleri taşımak farklı işlemdir.",
         ],
         pitfall="Ctrl+H, seçimi iptal etmez; yalnızca görünür sınırını gizler. Deselect için Ctrl+D kullanılır.",
         check=["Seçimi dışa büyüten Modify komutu?", "Seçime ekleme tuşu?", "Bitişik benzer renk ayarı?"],
         answers="Expand; Shift; Contiguous"),
    dict(n=5, title="Pen Aracı ile Seçimler", pages="108-123",
         goal="Path, anchor point ve Shape farkını kavrayıp hassas seçim yapmak.",
         core=[
             "<b>Pen Tool</b> tıklanan <b>anchor point</b> noktalarını düz veya kavisli yollarla (<b>path</b>) birleştirir. Path vektör mantığıyla oluşur; raster piksellerden bağımsızdır. Hassas dekupaj/seçim için kullanılır.",
             "<b>Path modu</b> seçime dönüştürülecek yol çizmek içindir. <b>Shape modu</b> vektörel şekil oluşturur ve yeni şekil katmanı açar. Modu çizime başlamadan Options Bar'dan kontrol et.",
             "Düz çizgi: noktalara tek tek tıkla. Kavis: yeni noktaya tıklayıp fareyi sürükleyerek yön kolları oluştur. Sonunda ilk noktaya tıklamak kapalı yol yapar.",
             "<b>Add Anchor Point Tool</b> yeni bağlantı noktası ekler; <b>Delete Anchor Point Tool</b> siler; <b>Convert Point Tool</b> noktanın düz-kavis karakterini/direction kollarını değiştirir.",
             "Paths paneli görünmüyorsa <b>Window &gt; Paths</b>. Çizili yolu seçime çevirmek için paneldeki seçim düğmesi veya kitapta verilen Windows kısayolu <b>Ctrl+Enter</b> kullanılır.",
         ],
         focus=[
             "Dekupaj adımları: görüntüye yaklaş → Path modunda köşeden başla → eğride kolları kullan → ilk noktada kapat → Paths panelinden seçime çevir → kopyala/maskele.",
             "Çizim sırasında Space basılıyken geçici el aracıyla görüntüyü kaydırabilirsin. Kontrollü eğriler için gereksiz çok sayıda anchor point yerleştirme.",
             "<b>Path</b> ile <b>pixel selection</b> farklıdır: path önce çizilir; seçim oluşturulduğunda 'yürüyen karınca' sınırı görünür ve piksel işlemleri yapılır.",
         ],
         pitfall="Pen yolu çizilmiş olması piksellerin seçildiği anlamına gelmez. Sınavda 'seçime dönüştürme' sorusu Ctrl+Enter/Paths paneli ile çözülür.",
         check=["Hangi mod otomatik şekil katmanı üretir?", "Yola nokta ekleme aracı?", "Yolu seçime çeviren kısayol?"],
         answers="Shape; Add Anchor Point Tool; Ctrl+Enter"),
    dict(n=6, title="Katmanlar", pages="124-151",
         goal="Katmanları bağımsız düzenleme, çoğaltma, dönüştürme ve birleştirme.",
         core=[
             "<b>Katman</b> tasarım öğesini diğerlerinden bağımsız tutar; sırasını, konumunu, görünürlüğünü ve saydamlığını ayrı düzenlersin. Layers paneli <b>Window &gt; Layers</b> veya <b>F7</b> ile açılır.",
             "Yapıştırma ve Type Tool ile yazı ekleme gibi işlemler çoğu zaman katmanı otomatik oluşturur. Manuel yeni katman: <b>Layer &gt; New &gt; Layer</b> ya da <b>Ctrl+Shift+N</b>.",
             "<b>Opacity</b> katmanın saydamlığıdır; %100 opak, %50 yarı saydam. Katmanları Layers panelinde sürükleyerek üst-alt sırasını değiştir; grup ile ilişkili katmanları yönet.",
             "<b>Duplicate Layer</b> kopya oluşturur. <b>Merge Layers</b> seçili katmanları birleştirir; <b>Flatten Image</b> belgeyi tek katmana indirger. Flatten sonrası bağımsız düzenleme kaybolacağı için önce katmanlı PSD kopyasını sakla.",
             "<b>Transform / Free Transform</b> ölçek, döndürme ve biçim değiştirir. Flip Horizontal yatay ayna etkisi; Skew eğme; Distort serbest köşe; Warp eğri bükme; Perspective perspektif etkisi verir.",
             "<b>Smart Object</b> tekrarlı ölçeklemelerde kaynak bilgiyi korumaya yardımcı olur. Layers panelindeki <b>Blending Mode</b> üst katmanın alttaki katmanla nasıl karışacağını belirler; varsayılan Normal'dir.",
         ],
         focus=[
             "Yeni katman oluştur, adlandır, öğeyi yerleştir, gerekiyorsa Smart Object'e dönüştür, Free Transform ile ayarla, Opacity/Blending Mode'u düzenle, PSD kaydet.",
             "Katman sırası görsel yığılmayı belirler: üst katman alttakini örter. Göz simgesi yalnızca görünürlüğü değiştirir, katmanı silmez.",
             "<b>Image Size</b> bütün belgeyi; <b>Free Transform</b> seçili katmanı; <b>Canvas Size</b> tuvali etkiler. Bunlar farklı işlemlerdir.",
         ],
         pitfall="Flatten, grup yapmak veya yalnızca görünürlüğü kapatmakla aynı değildir. Flatten katmanları tek görüntüye indirir.",
         check=["%50 saydamlık hangi seçenekle?", "Tüm katmanları tek katman yapan komut?", "Yatay ayna komutu?"],
         answers="Opacity %50; Flatten Image; Flip Horizontal"),
    dict(n=7, title="Boyama ve Rötuş Araçları", pages="152-172",
         goal="Renk doldurma, degrade, fırça ve rötuş araçlarını işlevlerine göre seçmek.",
         core=[
             "Araç panelindeki <b>Foreground</b> üst renk boyama rengidir; <b>Background</b> alt renktir. Seçili alanı üst renkle doldur: <b>Alt+Backspace</b>; alt renkle doldur: <b>Ctrl+Backspace</b>. Eyedropper görüntüden renk örnekler.",
             "<b>Paint Bucket</b> düz renk doldurur; <b>Gradient Tool</b> iki veya çok renk arasında geçiş yapar; <b>Brush Tool</b> fırça izi ile boyar. Brush'ta <i>Size</i> boyutu, <i>Hardness</i> kenar sertliğini ayarlar.",
             "<b>Color Replacement</b> belirli piksellerin rengini değiştirir. Tasarımda boyamayı ayrı katmanda yapmak sonradan düzeltmeyi kolaylaştırır.",
             "<b>Clone Stamp</b> Alt ile örnek alınan pikselleri büyük ölçüde birebir kopyalar; renk/doku uyumunu kendisi düzeltmez. <b>Healing Brush</b> örnek doku ile hedef bölgenin tonunu kaynaştırır.",
             "<b>Spot Healing Brush</b> küçük kusurda elle kaynak tanımlamadan çalışır. <b>Patch Tool</b> seçilen sorunlu bölgeyi uygun kaynak alana sürükleyerek onarır. <b>Content-Aware Move</b> seçili içeriği taşır veya kopyalar, boşalan bölgeyi uyarlamaya çalışır.",
         ],
         focus=[
             "Senaryo: aynı dokuyu birebir taşımak → Clone Stamp; ciltte küçük leke → Spot Healing; seçili karmaşık leke → Patch; nesnenin yerini değiştirmek → Content-Aware Move.",
             "Clone Stamp/Healing Brush kaynak belirleme adımı çoğunlukla <b>Alt+tık</b>tır. Spot Healing kaynak noktası istemez.",
             "Edit &gt; Fill / Shift+F5 düz renk, desen, içeriğe duyarlı gibi doldurma seçeneklerini açar. Gradient bir rötuş aracı değil, boyama aracıdır.",
         ],
         pitfall="Clone Stamp ve Healing Brush aynı değildir: ilki kopyalar, ikincisi doku/renk uyumu sağlayarak düzeltir.",
         check=["Üst renk doldurma kısayolu?", "Kaynak örneği olmadan küçük leke için araç?", "Renk geçişi aracı?"],
         answers="Alt+Backspace; Spot Healing Brush; Gradient Tool"),
    dict(n=8, title="Yazılar ile Çalışmak", pages="173-187",
         goal="Yazı türlerini, metin alanı, Character/Paragraph ve kayıt farklarını bilmek.",
         core=[
             "<b>Type Tool</b> belgeye metin ekler ve yazı katmanı oluşturur. Horizontal Type en sık kullanılır; Vertical Type dikey düzen içindir. Yazı maskesi araçları metin biçiminde seçim üretir.",
             "<b>Nokta yazı (point text):</b> bir yere tıklayıp kısa başlık yaz. <b>Paragraf/metin alanı:</b> tıklayıp sürükleyerek sınırlandırılmış kutu oluştur; uzun metin kutu içinde akar ve tutamaçlardan kutu boyutu değişir.",
             "Bir <b>path</b> üzerine Type Tool ile tıklarsan metin yol boyunca; bir <b>shape</b> içine tıklarsan metin şeklin içinde akabilir. Bunları normal metin alanıyla karıştırma.",
             "<b>Character Panel:</b> font, punto, renk, harf aralığı, satır aralığı gibi karakter biçimi. <b>Paragraph Panel:</b> sola/sağa/ortaya hizalama ve iki yana yaslama gibi paragraf düzeni.",
             "<b>Warp Text</b> metni yay/kavis gibi büker. <b>Transform &gt; Skew</b> metni eksende eğmek için kullanılır. Kitapta PDF kayıt, uygun ayarlarda metnin keskinliğini/vektörel niteliğini koruyan seçenek olarak vurgulanır.",
         ],
         focus=[
             "Başlık için nokta yazı; uzun açıklama için metin alanı kullan. Çok sayfalı yayın mizanpajını Photoshop yerine uygun sayfa düzeni yazılımında yapmak daha doğrudur.",
             "Yazı eklerken önce okunurluğu kontrol et: font, punto, kontrast, satır aralığı ve hiyerarşi. Yazı da görsel mesajın parçasıdır.",
             "Photoshop dosyasını PSD olarak saklamak metin katmanlarını düzenlenebilir tutar; JPEG/PNG gibi raster çıktı metni piksele dönüştürür.",
         ],
         pitfall="Character ile Paragraph panellerini karıştırma: karakter biçimi Character'da, paragraf hizası Paragraph'tadır.",
         check=["Başlık için kutusuz tıklama türü?", "İki yana yaslama paneli?", "Kavisli yazı özelliği?"],
         answers="nokta yazı; Paragraph; Warp Text"),
    dict(n=9, title="Yeni Dokümanlar ve Kayıt Biçimleri", pages="188-206",
         goal="Belgeyi yayın mecrasına göre açmak, Image/Canvas Size ve dosya biçimlerini ayırt etmek.",
         core=[
             "<b>Yeni belge:</b> Ctrl+N; Preset Details içinde Width, Height, Resolution, Color Mode ve Background Contents belirlenir. Artboard aynı dosyada birden çok çalışma yüzeyi sağlar.",
             "<b>Baskı:</b> kitap/ofset örneklerinde <b>CMYK, 300 PPI</b> ve uygun fiziksel ölçü; büyük dijital baskıda gereksinim izleme mesafesine/cihaza göre değişir. <b>Dijital:</b> RGB ve istenen piksel ölçüsü. Kitap dijital örneklerde 72 PPI verir; 1200x600 piksel banner'da esas olan piksel sayısıdır.",
             "<b>Image Size</b> görüntünün ölçüsünü veya çözünürlüğünü değiştirir; resampling açılırsa piksel sayısı değişebilir. <b>Canvas Size</b> çevresindeki çalışma alanını büyütür/küçültür; mevcut içeriği ölçeklemez.",
             "<b>PSD:</b> Photoshop çalışma dosyası; katmanları ve düzenleme bilgilerini korur. <b>PSB:</b> büyük belge sürümüdür. <b>TIFF:</b> kaliteli/kayıpsız baskı aktarımı için sık kullanılır.",
             "<b>JPEG:</b> kayıplı sıkıştırma, küçük dosya, şeffaflık yok; fotoğraf paylaşımında yaygın. <b>PNG:</b> kayıpsız ve alfa şeffaflığı destekler; şeffaf web görseli için uygun. <b>GIF:</b> sınırlı renk ve basit animasyon. <b>PDF:</b> farklı cihazlarda tutarlı paylaşım/baskı ve uygun ayarlarda metin/vektör koruma.",
         ],
         focus=[
             "Örnek karar: matbaada afiş → CMYK/300 PPI ile hazırla, kaynak PSD'yi sakla, uygun PDF/TIFF teslim et. Web'de şeffaf logo/görsel → PNG; fotoğraf → JPEG; düzenlenebilir ana dosya → PSD.",
             "Kayıt için iki kopya mantığı: <b>düzenlenebilir kaynak</b> ve <b>yayın/teslim çıktısı</b>. Sadece JPEG saklarsan katmanları geri getiremezsin.",
             "Dosya biçimindeki bir vektör öğenin keskin kalması, içeriğin nasıl oluşturulduğuna ve kaydedildiğine de bağlıdır; PDF adı tek başına her şeyi vektöre dönüştürmez.",
         ],
         pitfall="Image Size ile Canvas Size aynı değildir. Şeffaf arka plan gerektiren görseli JPEG'e kaydetme.",
         check=["Şeffaf web görseli için biçim?", "Katmanları koruyan ana biçim?", "İçeriği ölçeklemeden alanı artıran komut?"],
         answers="PNG; PSD; Canvas Size"),
    dict(n=10, title="Renk Kontrolleri ve Ayarlama Katmanları", pages="207-227",
         goal="Renk/ton sorununa uygun ayarlama katmanını seçmek ve tahribatsız çalışmak.",
         core=[
             "<b>Image &gt; Adjustments</b> seçili piksele doğrudan uygulandığında değişiklik kalıcı olabilir. <b>Adjustment Layer</b> ayrı katmanda durur; aç/kapat, değerini değiştir, maskele. Layers panelindeki <i>Create New Fill or Adjustment Layer</i> ile eklenir.",
             "<b>Dolgu katmanları:</b> Solid Color düz renk; Gradient geçişli renk; Pattern desen. Seçim varsa dolgu o alanla sınırlandırılabilir.",
             "<b>Brightness/Contrast:</b> genel aydınlık ve karşıtlık. <b>Levels:</b> gölge, orta ton, açık ton aralıklarını ayarlar. <b>Curves:</b> ton eğrisiyle daha seçici/ince kontrol sağlar. <b>Exposure:</b> pozlama dengesini değiştirir.",
             "<b>Vibrance:</b> özellikle solgun renkleri daha kontrollü canlandırır; <b>Saturation</b> tüm renk doygunluğunu artırıp azaltır. <b>Hue/Saturation:</b> renk tonu (Hue), doygunluk ve açıklık düzenler; Saturation -100 gri görünüm verir.",
             "<b>Color Balance:</b> gölge/orta/açık tonlarda renk dengesini değiştirir. <b>Black &amp; White:</b> renkli görüntüyü kontrollü gri tonlamaya çevirir. <b>Photo Filter:</b> fotoğrafa sıcak/soğuk genel renk etkisi verir.",
         ],
         focus=[
             "Soruna göre seç: fotoğraf karanlık → Exposure/Levels; belirli tonları aç-koyulaştır → Curves; renkler cansız → Vibrance; gökyüzünü soğut → Cooling Filter; siyah-beyaz → Black &amp; White.",
             "İyi uygulama: fotoğrafı aç → ilgili adjustment layer ekle → etkiyi ölçülü ayarla → gerekiyorsa maskeyle bölgesel uygula → kaynak PSD'yi sakla.",
             "Ayarlama katmanını kapatmak/gizlemek orijinal pikseli geri gösterir; doğrudan piksel düzenlemesi sonrası kaydedip kapatmak aynı esnekliği sunmaz.",
         ],
         pitfall="'Saturation -100' görüntüyü gri gösterir ama tahribatsız çalışmak istiyorsan bunu ayarlama katmanında uygula.",
         check=["Solgun renkleri canlandırma?", "Gölge/orta/açık ton denetimi?", "Gri tonlama katmanı?"],
         answers="Vibrance; Levels; Black &amp; White"),
]


# Four original review questions per unit. Each tuple: unit, stem, options, correct index, reason.
EXAM = [
    (1, "Bir tasarım işinin başlangıcında ne belirlenir?", ["Süsleme biçimi", "İletişim problemi ve hedef kitle", "Dosya uzantısı", "Filtre adı"], 1, "Önce amaç, mesaj ve izleyici belirlenir."),
    (1, "Kitabın vurguladığı grafik tasarım özelliği hangisi?", ["Yalnız kişisel yorum", "Yöntemli problem çözme", "Sadece teknik beceri", "Sadece dekorasyon"], 1, "Tasarım işlev ve amaca yönelir."),
    (1, "Hangisi tipik görsel iletişim ürünüdür?", ["Peyzaj planı", "Afiş", "Makine parçası", "Laboratuvar deneyi"], 1, "Afiş hedef kitleye görsel mesaj taşır."),
    (1, "Yazılımın tasarım sürecindeki rolü nedir?", ["Fikrin yerine geçmek", "Tasarım fikrini uygulamak", "Hedef kitleyi yok saymak", "Soruyu kaldırmak"], 1, "Bilgisayar uygulama aracıdır."),
    (2, "Fotoğraf hangi grafik türüdür?", ["Vektör", "Raster/bitmap", "Sadece path", "Tram"], 1, "Fotoğraf piksellerden oluşur."),
    (2, "Büyütülürken çözünürlükten bağımsız kalan hangisi?", ["JPEG fotoğraf", "Raster katman", "Vektör çizim", "Piksel mozaiği"], 2, "Vektör şekiller matematiksel tanımlıdır."),
    (2, "Ofset baskıda temel renk modeli hangisi?", ["RGB", "CMYK", "Grayscale", "Indexed"], 1, "Mürekkep karışımı CMYK'dır."),
    (2, "Küçük raster görsel büyütülürse temel risk nedir?", ["Path artışı", "Interpolasyonla netlik kaybı", "Renk modelinin silinmesi", "Vektörleşme"], 1, "Yeni ayrıntı güvenilir biçimde üretilemez."),
    (3, "Seçili aracın özellikleri nerede görünür?", ["Options Bar", "Belge sekmesi", "Status Bar", "PDF paneli"], 0, "Options Bar araca göre değişir."),
    (3, "Ekrandaki panelleri gizleyen tuş hangisi?", ["F", "Tab", "Ctrl+N", "Space"], 1, "Tab panel görünürlüğünü değiştirir."),
    (3, "Zoom in yapınca hangisi değişir?", ["Dosya piksel sayısı", "Baskı boyutu", "Ekran görüntüleme oranı", "Renk modu"], 2, "Zoom yalnızca görünümü değiştirir."),
    (3, "Photoshop'ta yeni belge kısayolu hangisi?", ["Ctrl+A", "Ctrl+H", "Ctrl+N", "Ctrl+D"], 2, "Ctrl+N yeni belge açar."),
    (4, "Benzer renkli pikselleri seçen araç hangisi?", ["Magic Wand", "Crop", "Brush", "Move"], 0, "Magic Wand renge duyarlı seçim yapar."),
    (4, "Seçimi iptal etme kısayolu hangisi?", ["Ctrl+H", "Ctrl+D", "Ctrl+N", "Ctrl+F"], 1, "Ctrl+D = Deselect."),
    (4, "Seçimi dışa doğru büyüten Modify komutu hangisi?", ["Contract", "Smooth", "Expand", "Feather"], 2, "Expand sınırı dışa taşır."),
    (4, "Sihirli Değnek'te Contiguous açıkken ne olur?", ["Tüm katmanlar silinir", "Bitişik benzer renkler seçilir", "Sadece şekil çizilir", "Belge kırpılır"], 1, "Contiguous bitişiklik ölçütüdür."),
    (5, "Pen'in hangi modu otomatik şekil katmanı oluşturur?", ["Path", "Shape", "Raster", "Zoom"], 1, "Shape vektörel şekil katmanı üretir."),
    (5, "Pen yoluna yeni bağlantı noktası ekleyen araç hangisi?", ["Delete Anchor Point", "Convert Point", "Add Anchor Point", "Move"], 2, "Adındaki Add işlemi belirtir."),
    (5, "Path'i seçime çevirme kısayolu kitapta nasıl verilir?", ["Ctrl+Enter", "Ctrl+N", "Ctrl+H", "Shift+F5"], 0, "Kapalı path Ctrl+Enter ile seçime çevrilir."),
    (5, "Kavis oluşturmak için Pen ile ne yapılır?", ["Tek tıklayıp bırakılır", "Tıklayıp sürüklenir", "Zoom kapatılır", "Katman silinir"], 1, "Sürükleme yön kolları oluşturur."),
    (6, "Katmanın saydamlığını hangi seçenek belirler?", ["Tolerance", "Opacity", "Feather", "Resolution"], 1, "Opacity katman opaklığıdır."),
    (6, "Tüm katmanları tek katmana indiren komut?", ["Group Layers", "Flatten Image", "Duplicate Layer", "Select All"], 1, "Flatten Image katmanları düzleştirir."),
    (6, "Yatay ayna etkisi hangi komuttur?", ["Flip Horizontal", "Warp", "Perspective", "Rotate 90"], 0, "Flip Horizontal yatay çevirir."),
    (6, "Tekrarlı ölçekleme kaybını azaltmak için ne kullanılır?", ["Magic Wand", "Smart Object", "Crop", "GIF"], 1, "Smart Object kaynak içeriği korur."),
    (7, "Seçili alanı ön plan rengiyle doldurma kısayolu?", ["Ctrl+Backspace", "Alt+Backspace", "Ctrl+D", "Ctrl+H"], 1, "Alt+Backspace üst renktir."),
    (7, "Küçük bir lekeyi kaynak seçmeden gidermek için?", ["Clone Stamp", "Spot Healing Brush", "Gradient", "Crop"], 1, "Spot Healing kaynağı otomatik hesaplar."),
    (7, "Pikselleri birebir örnekleyip kopyalayan araç?", ["Clone Stamp", "Healing Brush", "Blur", "Gradient"], 0, "Clone Stamp örnek dokuyu kopyalar."),
    (7, "Geçişli renk hangi araçla uygulanır?", ["Paint Bucket", "Gradient Tool", "Patch Tool", "Lasso"], 1, "Gradient geçiş/degrade üretir."),
    (8, "Uzun metin için uygun yazı yöntemi hangisi?", ["Nokta yazı", "Metin alanı", "Yazı maskesi", "Sihirli değnek"], 1, "Paragraf metni sınırlı kutuda akar."),
    (8, "Metni iki yana yaslama hangi panelde?", ["Character", "Paragraph", "Paths", "Navigator"], 1, "Hizalama paragraf ayarıdır."),
    (8, "Yazıya kavisli biçim verme özelliği hangisi?", ["Warp Text", "Opacity", "Flatten", "Image Size"], 0, "Warp Text metni büker."),
    (8, "Font ve punto hangi panelde ayarlanır?", ["Paragraph", "Character", "Layers", "Channels"], 1, "Character karakter biçimini düzenler."),
    (9, "Şeffaf web görseli için uygun biçim?", ["JPEG", "PNG", "PSD yalnız", "CMYK"], 1, "PNG alfa şeffaflığı destekler."),
    (9, "Katmanlı düzenlenebilir ana dosya biçimi?", ["JPEG", "GIF", "PSD", "PNG"], 2, "PSD Photoshop katmanlarını saklar."),
    (9, "Görüntüyü ölçeklemeden tuval alanını değiştirir?", ["Image Size", "Canvas Size", "Curves", "Exposure"], 1, "Canvas Size çalışma alanını değiştirir."),
    (9, "Kitaptaki ofset tasarım çözünürlüğü hangisi?", ["30 PPI", "72 PPI", "300 PPI", "3000 PPI"], 2, "Kitap ofset için 300 PPI verir."),
    (10, "Solgun renkleri ölçülü canlandıran ayar hangisi?", ["Vibrance", "Black & White", "Levels", "Pattern"], 0, "Vibrance özellikle düşük doygunluklu renkleri etkiler."),
    (10, "Gölge, orta ve açık tonları kontrol eden araç?", ["Levels", "Paint Bucket", "Type Tool", "Crop"], 0, "Levels tonal aralıkları ayarlar."),
    (10, "Ayarlama katmanının ana üstünlüğü nedir?", ["Pikseli mutlaka silmek", "Tahribatsız ve değiştirilebilir olması", "Belgeyi tek katman yapmak", "Sadece baskıya çalışması"], 1, "Ayar sonradan değiştirilebilir/gizlenebilir."),
    (10, "Renkli görüntüyü kontrollü gri tonlara çeviren katman?", ["Color Balance", "Gradient", "Black & White", "Pattern"], 2, "Black & White gri ton dönüşümü sağlar."),
]


def footer(canvas, doc):
    w, h = A4
    canvas.saveState()
    canvas.setLineWidth(.5)
    canvas.setStrokeColor(LINE)
    canvas.line(18 * mm, h - 15 * mm, w - 18 * mm, h - 15 * mm)
    canvas.setFont("Arial-Bold", 7.5)
    canvas.setFillColor(NAVY)
    canvas.drawString(18 * mm, h - 11.2 * mm, "BİLGİSAYAR DESTEKLİ TASARIM")
    canvas.setFont("Arial", 7.5)
    canvas.setFillColor(MUTED)
    canvas.drawRightString(w - 18 * mm, h - 11.2 * mm, "SINAV İÇİN ÇALIŞMA NOTLARI")
    canvas.line(18 * mm, 13 * mm, w - 18 * mm, 13 * mm)
    canvas.drawString(18 * mm, 8.5 * mm, "10 ünite  •  temel kavramlar  •  alıştırmalar")
    canvas.drawRightString(w - 18 * mm, 8.5 * mm, f"Sayfa {doc.page}")
    canvas.restoreState()


story = []
story += [Spacer(1, 33 * mm), P("BİLGİSAYAR DESTEKLİ<br/>TASARIM", "CoverTitle"),
          P("10 ünitelik sınav odaklı çalışma notları", "CoverSub")]
box(story, "NASIL ÇALIŞMALI?",
    "Her ünitenin temel kavramlarını ve araçların <b>hangi durumda kullanıldığını</b> oku. "
    "Sayfa sonundaki üç kontrol sorusunu cevapla. Son bölümdeki 40 soruluk denemeyi kitaba bakmadan çöz; "
    "yanlış yaptığın konunun ünite sayfasına dön.")
story += [Spacer(1, 6 * mm), P("Kaynak ve kapsam", "Section"),
          P("İstanbul Üniversitesi Açık ve Uzaktan Eğitim Fakültesi, Doç. Dr. Fehmi Soner Mazlum, "
            "<i>Bilgisayar Destekli Tasarım</i> e-kitabının 10 ünitesi ve ünite sonu soruları esas alınmıştır. "
            "PDF sayfa aralıkları sağlanan kitabın sayfa sayacıdır. Bunlar özet notlardır; Photoshop uygulamasında "
            "araçları deneyerek çalışmak bilgiyi kalıcı hale getirir."),
          P("Öncelik sırası", "Section")]
for line in [
    "<b>1-2:</b> tasarım amacı, raster/vektör, çözünürlük, RGB/CMYK.",
    "<b>3-6:</b> Photoshop arayüzü, seçimler, Pen, katmanlar.",
    "<b>7-10:</b> boyama-rötuş, yazı, yeni belge/kayıt, renk ayarlama.",
]:
    story.append(P("• " + line, "BulletTR"))
story.append(Spacer(1, 5 * mm))
box(story, "KİTABIN SÜRÜMÜ HAKKINDA",
    "E-kitaptaki arayüz örnekleri ağırlıkla <b>Photoshop 22.4.1 / 2021 Windows</b> sürümüne aittir. "
    "Sınav için burada verilen kitap terimlerini ve kısayollarını öğren. Yeni Photoshop sürümlerinde bazı "
    "menü konumları veya seçenekler değişebilir.", PALE2)
story.append(PageBreak())

for u in UNITS:
    story.append(P(f"ÜNİTE {u['n']:02d}  /  KİTAP PDF s. {u['pages']}", "Kicker"))
    story.append(P(escape(u["title"]), "UnitTitle"))
    box(story, "BU ÜNİTEDE YAPABİLMELİSİN", escape(u["goal"]))
    section(story, "Temel bilgiler", u["core"])
    section(story, "Sınav ve uygulama odağı", u["focus"])
    story.append(P("Karıştırma", "Section"))
    story.append(P(u["pitfall"]))
    story.append(P("Kendini yokla", "Section"))
    for i, q in enumerate(u["check"], 1):
        story.append(P(f"{i}. {escape(q)}", "Small"))
    story.append(P("<b>Kısa cevap:</b> " + u["answers"], "Small"))
    story.append(PageBreak())

story.append(P("SON TEKRAR", "Kicker"))
story.append(P("En çok karışan kararlar", "UnitTitle"))
rows = [
    ["Durum", "Seçim", "Neden"],
    ["Fotoğraf düzenleme", "Raster / Photoshop", "Piksel ve tonları işler"],
    ["Ölçeklenebilir logo", "Vektör", "Büyütmede çizgi keskin kalır"],
    ["Web görseli", "RGB + piksel ölçüsü", "Ekran ışıkla renk üretir"],
    ["Ofset baskı", "CMYK + 300 PPI", "Kitabın matbaa örneği"],
    ["Şeffaf çıktı", "PNG", "Alfa şeffaflığı korur"],
    ["Düzenlenebilir kaynak", "PSD", "Katmanları korur"],
    ["Pikseli değil alanı büyütme", "Canvas Size", "Tuvali değiştirir"],
    ["Sınırı yumuşatma", "Feather / Select and Mask", "Seçim kenarını işler"],
    ["Solgun renk", "Vibrance", "Kontrollü canlandırır"],
]
table = Table([[P(escape(c), "TableHead" if i == 0 else "TableCell") for c in row]
               for i, row in enumerate(rows)], colWidths=[56 * mm, 60 * mm, 58 * mm], repeatRows=1)
table.setStyle(TableStyle([
    ("BACKGROUND", (0, 0), (-1, 0), NAVY),
    ("ROWBACKGROUNDS", (0, 1), (-1, -1), [WHITE, PALE]),
    ("GRID", (0, 0), (-1, -1), .4, LINE),
    ("VALIGN", (0, 0), (-1, -1), "TOP"),
    ("LEFTPADDING", (0, 0), (-1, -1), 7),
    ("RIGHTPADDING", (0, 0), (-1, -1), 7),
    ("TOPPADDING", (0, 0), (-1, -1), 7),
    ("BOTTOMPADDING", (0, 0), (-1, -1), 7),
]))
story.append(table)
story.append(P("Kısayol kartı (kitaptaki Windows kullanımı)", "Section"))
for line in [
    "<b>Ctrl+N:</b> yeni belge; <b>Ctrl+O:</b> aç; <b>Ctrl+D:</b> seçimi bırak; <b>Ctrl+H:</b> seçim/yardımcı izleri gizle.",
    "<b>Shift / Alt:</b> seçime ekle / seçimden çıkar; <b>Ctrl+Enter:</b> Pen path'ini seçime çevir.",
    "<b>F7:</b> Layers; <b>Tab:</b> paneller; <b>F:</b> ekran modu; <b>Space:</b> geçici el aracı.",
    "<b>Alt+Backspace:</b> ön plan rengi; <b>Ctrl+Backspace:</b> arka plan rengi; <b>Ctrl+Shift+N:</b> yeni katman.",
]:
    story.append(P("• " + line, "BulletTR"))
story.append(PageBreak())

for start in (0, 10, 20, 30):
    story.append(P("GENEL DENEME", "Kicker"))
    story.append(P(f"40 soru / {start+1}-{start+10}", "UnitTitle"))
    if start == 0:
        story.append(P("Her üniteden dört özgün soru vardır. Cevap anahtarı en sonda."))
    for i in range(start, start+10):
        unit, stem, opts, correct, reason = EXAM[i]
        story.append(P(f"<b>{i+1}.</b> {escape(stem)}", "Question"))
        story.append(P(" &nbsp;&nbsp; ".join(f"{letter}) {escape(o)}" for letter, o in zip("ABCD", opts)), "Small"))
        story.append(Spacer(1, 2 * mm))
    story.append(PageBreak())

story.append(P("GENEL DENEME", "Kicker"))
story.append(P("Cevap anahtarı ve kısa gerekçeler", "UnitTitle"))
for i, (unit, stem, opts, correct, reason) in enumerate(EXAM, 1):
    story.append(P(f"<b>{i:02d}. {chr(65+correct)}</b> - {escape(reason)}", "Answer"))
    if i == 20:
        story.append(PageBreak())
box(story, "ÇALIŞMAYI TAMAMLARKEN",
    "Yanlışlarını ünite numarasına göre grupla: 1-2 kavramlar; 3-6 çalışma alanı, seçim ve katman; "
    "7-10 boyama, yazı, kayıt ve renk. Araç sorularında önce <b>yapılmak istenen işi</b> belirle, sonra "
    "o işi yapan araç veya komutu seç.", PALE2)

doc = SimpleDocTemplate(str(OUTPUT), pagesize=A4, rightMargin=18 * mm,
                        leftMargin=18 * mm, topMargin=20 * mm, bottomMargin=17 * mm,
                        title="Bilgisayar Destekli Tasarım - Ünite Ünite Çalışma Notları",
                        author="OpenAI Codex", subject="Bilgisayar Destekli Tasarım e-kitabı çalışma notları")
doc.build(story, onFirstPage=footer, onLaterPages=footer)
print(OUTPUT)
