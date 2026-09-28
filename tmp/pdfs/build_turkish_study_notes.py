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
OUTPUT = ROOT / "output" / "pdf" / "turk-dili-1-calisma-notlari.pdf"
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
styles.add(ParagraphStyle(name="CoverTitle", fontName="Arial-Bold", fontSize=26, leading=32,
                          textColor=NAVY, alignment=TA_CENTER, spaceAfter=13))
styles.add(ParagraphStyle(name="CoverSub", fontName="Arial", fontSize=12, leading=18,
                          textColor=BLUE, alignment=TA_CENTER, spaceAfter=18))
styles.add(ParagraphStyle(name="Kicker", fontName="Arial-Bold", fontSize=8.1, leading=11,
                          textColor=TEAL, spaceAfter=4))
styles.add(ParagraphStyle(name="UnitTitle", fontName="Arial-Bold", fontSize=17.2, leading=21,
                          textColor=NAVY, spaceAfter=6))
styles.add(ParagraphStyle(name="Section", fontName="Arial-Bold", fontSize=10.5, leading=14,
                          textColor=BLUE, spaceBefore=7, spaceAfter=4))
styles.add(ParagraphStyle(name="Body", fontName="Arial", fontSize=9.5, leading=13.6,
                          textColor=INK, spaceAfter=5))
styles.add(ParagraphStyle(name="BulletTR", fontName="Arial", fontSize=9.1, leading=13,
                          textColor=INK, leftIndent=10, firstLineIndent=-7, spaceAfter=3.4))
styles.add(ParagraphStyle(name="Small", fontName="Arial", fontSize=8.2, leading=11.2,
                          textColor=MUTED, spaceAfter=3))
styles.add(ParagraphStyle(name="Question", fontName="Arial", fontSize=9.4, leading=13.2,
                          textColor=INK, spaceAfter=3))
styles.add(ParagraphStyle(name="Answer", fontName="Arial", fontSize=9, leading=12.8,
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
    dict(n=1, title="İletişim Üzerine", pages="3-20",
         goal="İletişimin ögelerini, gürültü ve geri bildirimi, iletişim türlerini ayırt etmek.",
         core=[
             "<b>İletişim</b> duygu, düşünce veya bilginin bir kaynaktan alıcıya aktarılıp yorumlandığı süreçtir. Dil, insan iletişiminin en yaygın aracıdır; iletişim yalnız bilgi iletimi değil, duygu ve etkileşim de içerir.",
             "<b>Kaynak</b> mesajı kurar/kodlar; <b>mesaj</b> iletinin kendisidir; <b>kanal</b> iletinin izlediği yol/araçtır; <b>alıcı</b> mesajı çözer; <b>geri bildirim</b> alıcının yanıtıdır. Sağlıklı sürdürülmeyi geri bildirim gösterir.",
             "<b>Gürültü</b> kaynakta amaçlanan mesaj ile alıcıya ulaşan mesaj arasındaki farkı yaratan etkendir. Fiziksel ses, psikolojik önyargı, işitme sorunu veya kültürel kod ayrılığı gürültü oluşturabilir. Kitapta temel öge sayılması tartışmalıdır.",
             "<b>Etkisine göre:</b> olumlu ve olumsuz; <b>yönüne göre:</b> tek ve çift yönlü. Tek yönlüde etkin geri bildirim beklenmez; çift yönlüde karşılıklı yanıt vardır.",
             "<b>Koda göre:</b> sözlü, yazılı, sözsüz, simgesel, sanatsal iletişim. Sözsüz iletişim jest, mimik, beden duruşu; sözlü iletişimde ton, hız ve vurgu anlamı etkiler.",
             "<b>İlişki sistemine göre:</b> kişinin kendisiyle, kişiler arası, grup ve kitle iletişimi. Televizyon yayını kitle iletişimine; öğretmen-öğrenci konuşması kişiler arası iletişime örnektir.",
         ],
         focus=[
             "'Mesajın geçtiği yol' sorusunda <b>kanal</b>; 'üretilen semboller' sorusunda <b>mesaj</b>; 'alıcının tepkisi' sorusunda <b>geri bildirim</b> seçilir.",
             "Olumlu iletişimde ben dili, etkin dinleme ve açık mesaj; olumsuz iletişimde yargılama, sen dili, eksik veya çoklu mesaj öne çıkar.",
         ],
         check=["Mesajı hazırlayan öge?", "Mesajın iletildiği yol?", "Alıcının yanıtı?"],
         answers="kaynak; kanal; geri bildirim"),
    dict(n=2, title="Dil Üzerine", pages="21-55",
         goal="Dilin beyinle ilişkisini ve dinleme, konuşma, okuma, yazma becerilerini bilmek.",
         core=[
             "<b>Dil</b> düşünmenin ve insanlar arası iletişimin aracıdır; bireyin söz varlığı geliştikçe anlatım ve kavrama olanakları artar. Dil becerileri eğitimle geliştirilebilir.",
             "Kitabın beyin anlatımında <b>Wernicke alanı</b> anlama ve sözcük-nesne ilişkileriyle, <b>Broca alanı</b> konuşma/sesletimle; <b>angüler girüs</b> daha karmaşık işitsel-görsel dil işlemleri ve okuma bağlantılarıyla ilişkilidir.",
             "<b>Anlama becerileri:</b> dinleme ve okuma. <b>Anlatma becerileri:</b> konuşma ve yazma. Edinim sırası genellikle dinleme → konuşma → okuma/yazmadır; yazma en son edinilen beceridir.",
             "<b>Dinleme</b> işitmenin ötesinde sesi anlamlandırma ve yorumlama çabasıdır. Ayrıştırıcı dinleme ton, vurgu gibi ses ayrımlarına; eleştirel dinleme değerlendirmeye; empatik/etkin dinleme muhatabı anlamaya odaklanır.",
             "<b>Konuşma</b> fizyolojik (soluk, ses organları) ve psikolojik boyut taşır. Etkili sesin özellikleri işitilebilirlik, akıcılık ve <b>hoşa giderlik</b>tir; kitapta tonla ilgili olan hoşa giderliktir.",
             "<b>Okuma</b> yalnız harfleri seslendirme değil, bağlamdan anlam kurmadır. Amaç, yöntemi belirler: göz gezdirme genel fikir; ayrıntılı okuma derin kavrama; özetleme ana düşünceyi çıkarma.",
             "<b>Yazma</b> planlama/hazırlık, metni oluşturma, gözden geçirme-düzeltme aşamalarından oluşur. Dilekçede istek/şikâyet kısa, açık ve resmî dille yazılır; gereksiz ayrıntıdan kaçınılır.",
         ],
         focus=[
             "'Dil bilmek' yalnız konuşabilmek değildir; dört temel beceriyi de içerir. Günlük iletişimde dinleme/konuşma daha yaygındır; yazma en sık kullanılan beceri değildir.",
             "Beyin sorusunda <b>Wernicke = anlama, Broca = üretim</b> kısa eşlemesini yap; angüler girüs için kitapta karmaşık bağlantı işlevini hatırla.",
         ],
         check=["İlk edinilen dil becerisi?", "Konuşma üretimiyle ilgili alan?", "Yazmanın son aşaması?"],
         answers="dinleme; Broca; gözden geçirme/düzeltme"),
    dict(n=3, title="Dilin Birey ve Toplum Hayatındaki Yeri", pages="56-70",
         goal="Dil-toplum etkileşimini, dil topluluğunu, toplumsal uzlaşıyı ve dil ölümünü açıklamak.",
         core=[
             "Dil ve toplum <b>karşılıklı</b> etkileşir. Dil toplumsal hafızayı, kültürü ve ortak kimliği taşır; toplumdaki statü, meslek, eğitim, yaş, cinsiyet ve bölge dil kullanımını etkileyebilir.",
             "<b>Dil topluluğu</b> ortak dilsel kuralları ve kullanımları paylaşan konuşurlar topluluğudur. Birey aynı dili kullanırken çevresine göre söz varlığı, telaffuz ve üslup değiştirir.",
             "<b>Toplumsal uzlaşı</b> bir göstergenin/kelimenin ortak anlamının toplumca kabul edilmesidir. Bir sözcüğün yeni anlam kazanması veya kullanım dışı kalması bireysel karardan fazlasını gerektirir.",
             "Yan yana yaşayan <b>ağızlar</b> bağımsız özellikler geliştirebilir. Temas arttığında içlerinden biri ortak/prestij ağız işlevi görebilir. Kitle iletişim araçları bu kullanımın yayılmasını artırır; diğer ağızlar dil bakımından değersiz değildir.",
             "<b>Dil ölümü</b> konuşur sayısının azalması ve yeni kuşaklara aktarımın kesilmesiyle ilişkilidir. Göç, baskı, baskın dile geçiş ve asimilasyon tehlikeyi artırabilir.",
             "Kitapta <b>millî kültür</b> ve dilin aktarımı milletin sürekliliği için önemli görülür. Dilin değişmesi doğaldır; 'dil hiçbir zaman değişmez' ifadesi yanlıştır.",
         ],
         focus=[
             "Soruda bireyin dili etkileyen koşulları aranırsa statü, meslek, eğitim ve cinsiyetin <b>hepsi</b> etkili olabilir.",
             "Dil-toplum ilişkisini tek yönlü açıklama: toplumsal yaşam dili değiştirirken dil de ortak hafızayı ve ilişkileri biçimlendirir.",
         ],
         check=["Bir kelimenin ortak anlamını ne destekler?", "Yeni kuşaklara aktarım kesilirse risk?", "Dil değişmez mi?"],
         answers="toplumsal uzlaşı; dil ölümü; hayır"),
    dict(n=4, title="Dil Türleri", pages="71-84",
         goal="Ana dil/ana dili, konuşma/yazı dili, lehçe-şive-ağız ve standart dili ayırmak.",
         core=[
             "<b>Ana dil</b> bir dil ailesindeki dillerin çıktığı varsayılan kaynak dildir (ör. Ana Türkçe). <b>Ana dili</b> bireyin çocuklukta ailesi/çevresinden doğal olarak edindiği ilk dildir.",
             "<b>Devlet dili</b> kamusal ve resmî işlemlerde kullanılan dildir. <b>Konuşma dili</b> günlük sözlü kullanımdır; yerel telaffuz ve değişkenlik gösterir. <b>Yazı dili</b> yazılı iletişimde, eğitim ve edebiyatta kullanılan daha kurallı biçimdir.",
             "<b>Özel dil</b> belirli meslek veya topluluk içinde kullanılan anlatımdır; jargon, argo ve gizli dil bununla ilişkilidir. 'İnek' sözcüğünün çalışkan öğrenci anlamında kullanımı argo örneğidir.",
             "<b>Lehçe</b> tarihî, coğrafi, sosyal ayrışmayla ses, biçim ve söz varlığında belirgin farkları olan dil koludur. <b>Şive</b> için farklı bilimsel sınıflamalar vardır; kitap, araştırmacılar arasındaki görüş ayrılığını da anlatır.",
             "<b>Ağız</b> aynı dilin bölgelere göre söyleyiş farklılığıdır: Erzurum, Konya veya Yozgat ağzı. <b>Standart/ölçünlü dil</b> bölgeler üstü ortak kullanımdır; okul, yazı, resmî iş ve kitle iletişiminde tercih edilir.",
             "<b>Gösteren</b> bir sözcüğün ses/yazı biçimi (k-i-t-a-p); <b>gösterilen</b> zihindeki kavramdır. Dil göstergesi bu iki yönün birleşimidir.",
         ],
         focus=[
             "'Çocuğun ailesinden öğrendiği dil' → <b>ana dili</b>; 'dillerin türediği kaynak' → <b>ana dil</b>; 'bölgesel söyleyiş' → <b>ağız</b>.",
             "Şive/lehçe ayrımı her kaynakta aynı yapılmadığından sınavda kitabın verdiği tanımı ve örneği izle; ağız için Türkiye içindeki bölgesel telaffuz örnekleri güvenlidir.",
         ],
         check=["Ana Türkçe hangi kavram?", "Erzurum söyleyişi hangi tür?", "Bölge üstü ortak kullanım?"],
         answers="ana dil; ağız; standart dil"),
    dict(n=5, title="Dil İlişkileri ve Türkçenin Etkisi", pages="85-98",
         goal="Diller arası temas ile ödünçleme türlerini ve Türkçenin tarihsel ilişkilerini açıklamak.",
         core=[
             "<b>Dil ilişkisi</b> ticaret, göç, din, bilim, yönetim gibi temaslarla dillerin birbirini etkilemesidir. <b>Ödünçleme</b> bir dilden diğerine kelime/kalıp veya yapı aktarılmasıdır; iki yönlü olabilir.",
             "<b>Bilgi ödünçlemesi</b> yeni bir nesne/kavramla birlikte adın alınmasıdır. <b>Özenti ödünçlemesi</b> dilde karşılığı varken prestij/moda nedeniyle yabancı biçimin seçilmesidir.",
             "<b>Söz varlığı ödünçlemesi</b> kelime ya da kalıp alınmasıdır. <b>Dil bilgisi ödünçlemesi</b> ek, söz dizimi veya yapım örüntüsünün aktarılmasıdır; 'sayımatik, sıramatik' gibi örneklerde yabancı kökenli <i>-matik</i> kalıbı işletilir.",
             "Türkçe, tarih boyunca <b>Moğolca</b>, Çince, Soğdca, Arapça, Farsça, Yunanca, Ermenice ve Balkan dilleriyle temas etmiştir. İslamiyet sonrası Arapça-Farsça etkisi güçlüdür; günümüzde İngilizceden çok sözcük alınır.",
             "Türkçe de başka dillere söz ve bazı yapılar vermiştir. Kitapta Ermenice ve Balkan dillerindeki Türkçe kelime/ek örnekleri işlenir; ilişkiyi yalnızca Türkçenin alması olarak düşünme.",
             "Kitabın örneklerinde <b>Kutadgu Bilig</b> erken İslami Türk kültürünü; <b>Kül Tigin Yazıtı</b> eski Türkçe-Çince temasını hatırlatan eserlerdir.",
         ],
         focus=[
             "Soruda 'ihtiyaç duyulan yeni bilgiyle alınan ad' → bilgi; 'moda/prestij' → özenti; 'kelime' → söz varlığı; 'ek/kalıp' → dil bilgisi ödünçlemesi.",
             "Alıntı bir sözcüğün kökeni ile bugün hangi dile ait sayılacağı aynı soru değildir; yerleşmiş alıntılar dilin söz varlığının parçası olabilir.",
         ],
         check=["Yeni kavramın adıyla alınması?", "Moda için yabancı ad kullanımı?", "-matik örneği?"],
         answers="bilgi ödünçlemesi; özenti ödünçlemesi; dil bilgisi ödünçlemesi"),
    dict(n=6, title="Türkçenin Dil Ailesi ve Coğrafyası", pages="99-118",
         goal="Altay kuramını, Türkçenin temel özelliklerini, tarihî ve çağdaş kollarını bilmek.",
         core=[
             "<b>Altay dilleri kuramı</b> Türkçe, Moğolca, Mançu-Tunguzca, Korece ve Japonca arasında köken ortaklığı öne süren tarihî görüştür. <b>Kuram/tartışma</b> olarak öğren; kitap da Ural-Altay akrabalığının ispatlanmadığını ve Japoncanın yerinin tartışıldığını belirtir. Macarca Altay kolunda sayılmaz.",
             "Kitapta ortak özellikler: <b>sondan eklemeli</b> yapı, dil bilgisel cinsiyet bulunmaması, sayı sıfatından sonra çoğul kullanılmaması, belirtenin belirtilenden önce ve yüklemin çoğunlukla sonda olması.",
             "Türkçe kökenli sözlerde <b>kalınlık-incelik</b> ve <b>düzlük-yuvarlaklık</b> uyumları güçlüdür; söz başında iki ünsüz bulunması veya üç ünsüzlü kök/hece sonu tipik değildir. 'Tren, spor, grup' alıntıdır.",
             "<b>Tarihî hat:</b> Köktürk/Orhun Yazıtları → Eski Uygur → Karahanlı → Harezm/Kıpçak/Çağatay → Eski Anadolu ve Osmanlı Türkçesi → Türkiye Türkçesi. <b>Babürnâme</b> Çağatay Türkçesi eseridir.",
             "<b>Çağdaş kollar:</b> Oğuz içinde Türkiye, Azerbaycan, Türkmen ve Gagavuz Türkçeleri; Özbek Türkçesi Karluk/Çağatay çizgisiyle ilişkilidir, Oğuz kolunda değildir.",
             "Türk dilleri Anadolu, Balkanlar, Kafkasya, Orta Asya ve Sibirya'ya uzanan geniş coğrafyada konuşulur; göçlerle Batı Avrupa'da da Türkçe toplulukları vardır.",
         ],
         focus=[
             "'Altay dilidir' sorusunu kitap çerçevesinde yanıtla; <b>Macarca değil</b>. Altay akrabalığını kesin kanıtlanmış sınıflama gibi ifade etme.",
             "Oğuz-Karluk ayrımında Türkiye/Azerbaycan/Türkmen/Gagavuz ile Özbek'i ayır; tarihî eser sorusunda Babürnâme-Çağatay eşlemesini hatırla.",
         ],
         check=["Babürnâme hangi yazı dili?", "Özbek Oğuz kolunda mı?", "Macarca Altay kolunda mı?"],
         answers="Çağatay Türkçesi; hayır; hayır"),
    dict(n=7, title="Türkçenin Söz Varlığı", pages="119-136",
         goal="Terim, deyim, atasözü, ikileme, kalıp söz ve argoyu örnekleriyle ayırmak.",
         core=[
             "<b>Söz varlığı</b> bir dilin veya kişinin kullandığı/algıladığı sözcük ve kalıplaşmış yapıların bütünüdür. <b>Etkin söz varlığı</b> kullandığımız; <b>edilgin söz varlığı</b> duyunca/okuyunca anladığımız sözlerdir.",
             "<b>Terim</b> bilim, sanat veya meslekte belirli kavramı karşılayan, anlamı açık ve yoruma daha kapalı sözdür: özne, noktalama, buzul. Alan içinde tek anlamlılığa yönelir.",
             "<b>Deyim</b> çoğunlukla mecazlı, kalıplaşmış anlatımdır; durum/kavramı etkili belirtir: göz kulak olmak. Sözcük sırası keyfî değişmez. <b>Atasözü</b> uzun deneyimden çıkan genel yargı, öğüt veya kuraldır: Damlaya damlaya göl olur.",
             "<b>İkileme</b> anlamı güçlendiren tekrar/ikili kalıptır: yavaş yavaş, az çok, eski püskü. <b>Kalıp söz</b> sosyal durumda hazır kullanılır: geçmiş olsun, hoş geldiniz, başınız sağ olsun.",
             "<b>Dua/alkış</b> iyi dilek; <b>beddua/kargış</b> kötü dilektir. <b>Argo</b> bir topluluk içinde gelişen özel, kimi zaman örtülü söz varlığıdır; bölgesel ağız sözcüğünden farklıdır.",
             "<b>Ödünç söz</b> başka dilden alınmıştır. <b>Ağız ögesi</b> bölgesel kullanımdır. Bunlar da dilin toplam söz varlığına katkı yapar.",
         ],
         focus=[
             "Deyim <b>durumu anlatır</b>; atasözü <b>genel kural/öğüt verir</b>; kalıp söz <b>iletişim durumunda hazır söylenir</b>. Üçünü kısa örnekle birlikte ezberle.",
             "'Uzmanlar arası kesin kavram' → terim; 'kutlama/selam/teselli' → kalıp söz; 'iyi dilek' → alkış/dua.",
         ],
         check=["Göz kulak olmak hangi tür?", "Damlaya damlaya göl olur?", "Geçmiş olsun?"],
         answers="deyim; atasözü; kalıp söz"),
    dict(n=8, title="Türkçenin Ses Özellikleri", pages="137-156",
         goal="Ünlü-ünsüz sınıflarını, Türkçe kökenli kelime özelliklerini ve vurguyu bilmek.",
         core=[
             "<b>Ses</b> konuşmanın en küçük işitsel birimi; <b>harf</b> sesin yazıdaki işaretidir. Anlam ayıran en küçük ses birimine <b>ses birimi/fonem</b> denir. Türkçe alfabede 8 ünlü ve 21 ünsüz vardır.",
             "<b>Ünlüler:</b> kalın/art <b>a, ı, o, u</b>; ince/ön <b>e, i, ö, ü</b>. Düz <b>a, e, ı, i</b>; yuvarlak <b>o, ö, u, ü</b>. Geniş <b>a, e, o, ö</b>; dar <b>ı, i, u, ü</b>. Örnek: <b>ü = ön-dar-yuvarlak</b>; <b>e = ön-geniş-düz</b>; <b>u = art-dar-yuvarlak</b>.",
             "<b>Ünsüzler</b> oluşum yeri, oluşum biçimi ve tonluluk bakımından sınıflanır. <b>f, v</b> diş-dudak; <b>p, b, m</b> çift dudak; <b>k, g, ğ, y</b> damak bağlantılı seslerdir. Sert/tonsuz: <b>ç, f, h, k, p, s, ş, t</b>.",
             "Türkçe kökenli sözcüklerde genellikle <b>ünlü uyumları</b> bulunur; başta çift ünsüz (spor, tren) ve kökte yan yana üç ünsüz bulunmaz. Günümüz standart Türkçesinde aslî uzun ünlü veya ince â tipik Türkçe kökenli özellik değildir.",
             "<b>Ünsüz yumuşaması:</b> bazı p, ç, t, k sonlu kelimeler ünlü ek alınca b, c, d, ğ/g olur: kitap-ı → kitabı, ağaç-ı → ağacı. İstisnalar vardır; her kelime otomatik değişmez.",
             "<b>Vurgu</b> çoğunlukla son hecededir; yer adları ve bazı ekler istisna oluşturabilir. Cümlede vurgulanan öge yer değişikliğiyle öne çıkar: 'Yarın <b>okula</b> gideceğim' gibi.",
         ],
         focus=[
             "Ünlü sorularını üç adımda çöz: <b>ön/art → geniş/dar → düz/yuvarlak</b>. Örneğin /ö/ = ön-geniş-yuvarlak.",
             "Ses özelliğinden sözcüğün kökenini kesin hükümle çıkarmak yerine 'Türkçe kökenli kelimelerde beklenen yapı' diye düşün; alıntı ve tarihî istisnalar bulunur.",
         ],
         check=["/ü/ üç niteliği?", "Diş-dudak ünsüzü örneği?", "Çoğu Türkçe sözcükte vurgu nerede?"],
         answers="ön-dar-yuvarlak; f/v; son hecede"),
    dict(n=9, title="Türkçede Ses Olayları", pages="157-174",
         goal="Ses türemesi, düşmesi, göçüşme, benzeşme ve ünsüz değişimlerini örnekle tanımak.",
         core=[
             "<b>Ses türemesi</b> sözcükte yeni ses belirmesidir. Ünlü türemesi: <i>scarpino → iskarpin</i>, <i>emr → emir</i>. Ünsüz türemesi de bulunur. <i>araba-y-ı</i> örneğinde /y/ yardımcı sestir.",
             "<b>Ses düşmesi</b> var olan sesin kaybolmasıdır. Ünlü düşmesi: <i>burun-u → burnu</i>, <i>ağız-ı → ağzı</i>. Hece düşmesi: <i>pazar ertesi → pazartesi</i>. Tarihî/günlük örneklerde ünsüz düşmesi de görülebilir.",
             "<b>Göçüşme (metatez)</b> seslerin yer değiştirmesidir: ağızlarda <i>bayram → baryam</i>; standartlaşmış tarihî örnek <i>emrûd → armut</i>. Türeme/düşmeden farklıdır çünkü sıra değişir.",
             "<b>Benzeşme</b> bir sesin yakındaki veya uzaktaki başka sese yaklaşmasıdır. Ünsüz sertleşmesi: <i>baş+dan → baştan</i>, <i>bak+dı → baktı</i>. Sert ünsüzden sonra ekin d'si t olur.",
             "<b>Tonlulaşma/yumuşama:</b> <i>kitap-ı → kitabı</i>, <i>ağaç-ı → ağacı</i>. <b>Dudaksıllaşma:</b> tarihî değişimde komşu gibi örneklerde dudak ünsüzüne yaklaşma. Ünlü uyumları da ünlü benzeşmesidir.",
             "<b>Yakın/uzak benzeşme</b> etkileşen seslerin mesafesine göre adlandırılır. Sınavda önce eski ve yeni biçimde <b>hangi sesin eklendiğini, düştüğünü, yer değiştirdiğini veya benzeştiğini</b> bul.",
         ],
         focus=[
             "Hızlı ayırım: <i>emr→emir</i> = türeme; <i>burun-u→burnu</i> = düşme; <i>bayram→baryam</i> = göçüşme; <i>başdan→baştan</i> = sertleşme; <i>kitap-ı→kitabı</i> = yumuşama.",
             "Kitapta hem tarihî hem ağız/konuşma örnekleri vardır. Örneği standart yazım sanma; ses olayının adını belirlerken dönüşümü izle.",
         ],
         check=["pazartesi oluşumundaki olay?", "başdan→baştan?", "kitap-ı→kitabı?"],
         answers="hece düşmesi; ünsüz sertleşmesi/benzeşmesi; ünsüz yumuşaması"),
    dict(n=10, title="Anlam ve Anlambilimi", pages="175-187",
         goal="Temel-yan-mecaz anlamı ve sözcükler arası anlam ilişkilerini ayırmak.",
         core=[
             "<b>Anlam</b> sözcüğün bağlamda çağrıştırdığı kavramdır; <b>anlambilimi</b> sözcük, yapı ve cümle anlamlarını inceler. Bağlam aynı sözcüğün hangi anlamda kullanıldığını belirler.",
             "<b>Temel anlam</b> ilk/doğrudan anlamdır: 'Çocuk <b>elini</b> incitti.' <b>Yan anlam</b> temel anlamla biçim veya işlev ilişkili ikinci anlamdır: 'Masanın <b>ayağı</b> kırıldı.' <b>Mecaz anlam</b> temel anlamdan uzaklaşır: '<b>Sıcak</b> bir gülümseme.'",
             "<b>Eş anlamlılık</b> yakın/benzer anlamlı sözcükler; <b>karşıt anlamlılık</b> ters anlamlar; <b>eş seslilik</b> aynı ses/yazılış fakat ilişkisiz anlamlar (gül: çiçek/gülmek); <b>çok anlamlılık</b> bir sözcüğün ilişkili çok sayıda anlamıdır.",
             "<b>Deyim aktarması</b> benzerliğe dayanır. <b>Ad aktarması</b> benzetme olmadan yakınlık/ilişkiye dayanır: 'Lambayı söndür' yerine 'ışığı söndür' veya 'bütün sınıf güldü' derken öğrencilerin kastedilmesi.",
             "<b>Anlam daralması</b> genel kullanımdan özel kullanıma geçiştir: eski 'çocuk' anlamındaki <i>oğlan</i>ın erkek çocukla sınırlanması. <b>Genişleme</b> özelden genele geçiştir. İyileşme, kötüleşme ve kayma da zamanla oluşabilir.",
             "<b>Eşzamanlı</b> inceleme dilin belirli zamandaki ilişkilerine; <b>artzamanlı</b> inceleme tarih boyunca anlam değişmesine bakar.",
         ],
         focus=[
             "Masa ayağı 'yan anlam'dır çünkü biçim/işlev ilgisi sürer; sıcak gülümseme 'mecaz'dır çünkü gerçek ısı anlatılmaz.",
             "'Aynı sözcük, birbiriyle bağlantılı yeni anlamlar' → çok anlamlılık; 'yazılış aynı ama ilgisiz iki sözcük' → eş seslilik.",
         ],
         check=["Masanın ayağı hangi anlam?", "Sıcak gülümseme?", "oğlan örneğindeki değişme?"],
         answers="yan anlam; mecaz; anlam daralması"),
    dict(n=11, title="Biçim Bilgisi", pages="188-205",
         goal="Kök-gövde-ek, yapım/çekim eki, kelime türleri ve fiilimsileri tanımak.",
         core=[
             "<b>Biçim bilgisi</b> kökleri, ekleri, sözcük yapımı ve çekimini inceler. <b>Kök</b> ek almamış en küçük anlamlı biçim: <i>kitap</i>, <i>gel-</i>. <b>Gövde</b> yapım eki almış biçim: <i>kitap-çı</i>. Türkçe temelde sondan eklemelidir.",
             "<b>Yapım eki</b> yeni anlam/kavram üretir: kitap → kitapçı, güzel → güzellik. <b>Çekim eki</b> sözcüğün cümledeki görevini, hâlini, iyeliğini veya zaman/kişisini belirtir: kitapçı-ya, gel-di-m.",
             "Dört yapım eki yönü: <b>isimden isim</b> (göz-lük), <b>isimden fiil</b> (su-la-), <b>fiilden fiil</b> (gör-üş-), <b>fiilden isim</b> (sev-gi). Sözcüğü çözerken önce kökü, sonra yeni kavram kuran eki, sonra çekim eklerini ayır.",
             "<b>Yardımcı ses</b> eklenmede söyleyişi sağlar: araba-y-ı, bu-n-u. Ünlü uyumu nedeniyle ek birden çok biçimde görünür: -dı/-di/-du/-dü/-tı/-ti/-tu/-tü gibi.",
             "<b>Kelime türleri:</b> isim varlığı; sıfat ismi; zamir ismin yerini; zarf fiili/sıfatı; edat ilişkiyi; bağlaç söz/cümleleri; ünlem duygu/seslenmeyi; fiil iş, oluş veya durumu belirtir. Kitapta zamir görevli kelimeler içinde değerlendirilir.",
             "<b>Fiilimsi:</b> isim-fiil (-ma/-ış/-mak: okumak), sıfat-fiil (-an/-dık/-acak: okuyan çocuk), zarf-fiil (-ıp/-arak/-ınca: okuyarak). Fiil kökenlidir ama çekimli yüklem değildir.",
             "<b>Çatı:</b> etken işin öznece yapılması; edilgen -l/-n ile işin yapılana yönelmesi (araba süslendi); işteş -ş ile karşılıklı/birlikte iş; ettirgen başkasına yaptırmadır.",
         ],
         focus=[
             "<i>aşçıya</i> = aş (kök) + çı (yapım) + ya (çekim). <i>kitaplık</i>taki -lık yapım; <i>defterim</i>deki -im iyelik çekimidir.",
             "Sınavda tür sorusunda sözcüğün sözlükteki hâline değil, <b>cümledeki görevine</b> bak: 'doğru cevap' sıfat; 'bayrama doğru' edat.",
         ],
         check=["kitapçıya içindeki yapım eki?", "araba süslendi hangi çatı?", "okuyarak hangi fiilimsi?"],
         answers="-çı; edilgen; zarf-fiil"),
    dict(n=12, title="Söz Dizimi", pages="206-226",
         goal="Cümle ögeleri, kelime grupları ve cümle türlerini çözümlemek.",
         core=[
             "<b>Cümle</b> yargı bildirir; <b>kelime grubu</b> birden fazla sözcükle kurulan fakat tek başına yargı bildirmeyen birimdir. Öge çözümüne <b>yüklemi</b> bularak başla. 'Durdu.' tek başına cümle olabilir.",
             "Beş temel öge: <b>yüklem</b> yargı; <b>özne</b> kim/ne; <b>nesne</b> neyi/kimi veya ne; <b>yer tamlayıcısı</b> kime/nerede/nereden (-a/-da/-dan); <b>zarf</b> ne zaman/nasıl/ne kadar/niçin. Seslenme ve bazı bağlaçlar <b>cümle dışı unsur</b> olabilir.",
             "Örnek: '<b>Ayşe</b> <b>dün</b> <b>okulda</b> <b>kitabı</b> <b>okudu</b>.' Özne Ayşe; zarf dün; yer tamlayıcısı okulda; nesne kitabı; yüklem okudu. -da ekli her sözcük otomatik yer tamlayıcısı değildir; görev/anlamı denetle.",
             "<b>Belirtili isim tamlaması:</b> ağac-ın yaprağ-ı (iki ek). <b>Belirtisiz:</b> ağaç yaprağ-ı (tamlayan eki yok). <b>Sıfat tamlaması:</b> yeşil yaprak. <b>Tekrar grubu:</b> az çok. <b>Bağlama grubu:</b> Ali ve Ece.",
             "<b>Yapıya göre:</b> basit (tek temel yargı), birleşik (şartlı/iç içe/ki'li örnekler), sıralı (virgül/noktalı virgülle art arda), bağlı (ama, fakat, çünkü vb. bağlaçlarla). Kitap fiilimsi grubunu tek başına yan cümle saymayabilir; soru için verilen ders yaklaşımını izle.",
             "<b>Yükleme göre:</b> fiil/isim cümlesi. <b>Yüklemin yerine göre:</b> kurallı (sonda)/devrik (sonda değil). <b>Anlama göre:</b> olumlu, olumsuz, soru, emir; <b>eksiltili</b> cümlede söylenmeyen yüklem bağlamdan tamamlanır.",
         ],
         focus=[
             "İsim tamlaması ile sıfat tamlamasında ilk sözcüğün <b>iyelik mi niteleme mi</b> kurduğunu sorgula: 'ağacın yaprağı' isim; 'yeşil yaprak' sıfat tamlaması.",
             "'Ey arkadaşlar!' türü seslenmeler ana öge değil, cümle dışı unsur olabilir. 'On iki' kitaptaki soru çerçevesinde tek başına sıfat tamlaması değildir.",
         ],
         check=["Cümle çözümüne hangi ögeyle başlanır?", "Ağacın yaprağı hangi grup?", "Yüklem sonda değilse?"],
         answers="yüklem; belirtili isim tamlaması; devrik cümle"),
    dict(n=13, title="Harf ve Dil Devrimi, TDK", pages="227-246",
         goal="Atatürk dönemi dil çalışmaları, Harf Devrimi, TDK ve Güneş-Dil Teorisini kronolojik bilmek.",
         core=[
             "<b>Dil planlaması</b> dilin yazı, söz varlığı veya kullanımını bilinçli olarak düzenleme çabasıdır. Osmanlı'dan Cumhuriyet'e dil tartışmaları anlaşılır yazı dili, eğitim ve millî kültür çevresinde sürmüştür.",
             "Kitaba göre Atatürk'ün dil araştırmaları için erken adımı <b>12 Kasım 1924 Türkiyat Enstitüsü</b>nün İstanbul Darülfünunu bünyesinde kurulmasıdır; ilk müdürü <b>Fuat Köprülü</b>dür.",
             "<b>Harf Devrimi:</b> Latin esaslı yeni Türk harfleri <b>1 Kasım 1928</b> tarihli 1353 sayılı kanunla kabul edildi. 1928'de Dil Encümeni yeni alfabenin hazırlanmasında çalıştı; yaygın öğretim ve benimsenme hedeflendi.",
             "<b>Türk Dil Kurumu</b> 1932'de <b>Türk Dili Tetkik Cemiyeti</b> adıyla kuruldu; 1936'dan sonra Türk Dil Kurumu adını aldı. İlk Türk Dili Kurultayı <b>26 Eylül-5 Ekim 1932</b> tarihlerinde yapıldı; 26 Eylül Dil Bayramı olarak anılır.",
             "<b>Dil Devrimi</b> Türkçenin bilim, eğitim ve toplum yaşamında işlenmesi, söz varlığının araştırılması, yazı dili ile halk arasındaki uzaklığın azaltılması gibi hedefler taşıdı; yerel ağızları yok etmek hedefi değildir.",
             "<b>Güneş-Dil Teorisi</b> 1930'ların tarihî dil kuramıdır; özellikle III. Kurultay bağlamında işlenir. Türkçe ve dillerin kökeni hakkında ileri sürdüğü iddialar bugün yerleşik dilbilimsel gerçek gibi sunulmamalıdır. Ders için tarihî bağlamını öğren.",
             "<b>Plaza dili</b> gibi çok sayıda yabancı unsur içeren güncel kullanımlar kitapta dil tartışması örneğidir.",
         ],
         focus=[
             "Tarih eşlemesi: <b>1924 Türkiyat Enstitüsü → 1928 Harf Devrimi → 1932 Türk Dili Tetkik Cemiyeti/ilk Kurultay → 1936 TDK adı/III. Kurultay</b>.",
             "Güneş-Dil Teorisini bugünkü bilimsel sınıflamayla karıştırma; sınavda amaç, dönemin dil politikası ve tartışmasını tanımaktır.",
         ],
         check=["Yeni harfler hangi yıl kabul edildi?", "TDK'nin 1932'deki adı?", "İlk Dil Kurultayı yılı?"],
         answers="1928; Türk Dili Tetkik Cemiyeti; 1932"),
    dict(n=14, title="Güncel Dil Sorunları", pages="247-274",
         goal="Yazım, söyleyiş ve özensiz dil kullanımı sorunlarını örnekle ayırt etmek.",
         core=[
             "<b>Yazım</b> kelimeleri ve ekleri kurala uygun yazmadır; tereddütte güncel yazım kılavuzuna bakılır. <b>Söyleyiş</b> seslerin, uzunlukların, vurgunun ve ulamanın konuşmadaki uygulanışıdır. Harf yazının, ses konuşmanın birimidir.",
             "<b>Ekler:</b> bulunma durumu <b>-de/-da</b> sözcüğe bitişir ve sertleşir: <i>minibüste</i>. Bağlaç olan <b>de/da</b> ayrı yazılır: <i>Ben de geldim</i>. Soru eki <b>mı/mi/mu/mü</b> ayrı yazılır.",
             "<b>Büyük harf:</b> özel adlar ve bunlarla kullanılan unvanlar; belirli tarihteki ay/gün adları büyük başlar. Genel zaman anlatan 'mayıs ayının sonu' ifadesinde <i>mayıs</i> küçük yazılır. Kitabın ünite sorusunda bu ayrım vardır.",
             "<b>Birleşik sözcük:</b> <i>fark etmek, terk etmek, söz konusu, yer almak, hoşça kal</i> ayrı yazılır; ses düşmesi/türemesi olan bazı yardımcı fiiller bitişir: <i>affetmek</i>. Örnekleri ezberlerken kuralı da öğren.",
             "<b>Düzeltme işareti</b> bazı sözcüklerde uzunluk veya ince söyleyişi ve anlam ayrımını gösterebilir: <i>adet/âdet, alem/âlem</i>. Her yabancı sözcükte keyfî kullanılmaz.",
             "<b>Söyleyiş sorunları:</b> kısa heceyi gereksiz uzatma, uzun heceyi kısaltma, ses ekleme/düşürme, yanlış vurgu, ulama yapmama. Yazım ile konuşma düzeyi ayrıdır; ulama okunuşta görülür, yazımı değiştirmez.",
             "<b>Özensiz dil:</b> gereksiz yabancı ad/özenti alıntısı, yerleşik Türkçe karşılığı varken yabancı kalıp, çeviri Türkçesi ve gelişigüzel dijital yazım. Kitap, benimsenmiş eski alıntılarla özenti alıntılarını ayırır.",
         ],
         focus=[
             "Hızlı yazım kontrolü: <i>minibüsde</i> değil <b>minibüste</b>; <i>farkettim</i> değil <b>fark ettim</b>; <i>hoşçakal</i> değil <b>hoşça kal</b>.",
             "Güncel yazım kuralları zamanla değişebilir; bu notlar sağlanan e-kitabın sınav örneklerini temel alır. Resmî yazıda güncel kılavuzla son kontrol yap.",
         ],
         check=["Ben de geldim: de ayrı mı?", "minibüsde doğru mu?", "Hoşçakal doğru mu?"],
         answers="evet; hayır, minibüste; hayır, hoşça kal"),
]


# Her üniteden üç özgün soru; doğru seçenek 0-3 arası indis.
EXAM = [
    (1, "İletişimde mesajın ilerlediği yolun adı nedir?", ["Kaynak", "Kanal", "Alıcı", "Dönüt"], 1, "Kanal, mesajın alıcıya ulaştığı yoldur."),
    (1, "Alıcının kaynağa verdiği yanıt hangi ögedir?", ["Gürültü", "Kod", "Geri bildirim", "Mesaj"], 2, "Dönüt veya geri bildirim alıcı tepkisidir."),
    (1, "Tek yönlü iletişim için hangisi doğrudur?", ["Mutlaka anlık yanıt bekler", "Etkin geri bildirim beklemez", "Yalnız yüz yüzedir", "Kanal içermez"], 1, "Tek yönlü aktarımda etkin dönüt aranmaz."),
    (2, "Kitabın anlatımında konuşmanın üretimiyle ilişkili alan?", ["Broca", "Wernicke", "Görme siniri", "Kulak zarı"], 0, "Broca konuşma/sesletimle ilişkilidir."),
    (2, "Hangi ikili anlama becerisidir?", ["Konuşma-yazma", "Dinleme-okuma", "Dinleme-konuşma", "Okuma-yazma"], 1, "Dinleme ve okuma alıcı becerilerdir."),
    (2, "Dil becerileri arasında genellikle en son edinilen hangisi?", ["Dinleme", "Konuşma", "Yazma", "İşitme"], 2, "Yazma okul yaşında gelişen son beceridir."),
    (3, "Dil kullanımını hangisi etkileyebilir?", ["Yalnız cinsiyet", "Yalnız yaş", "Yalnız meslek", "Eğitim, meslek ve çevre"], 3, "Toplumsal ve bireysel koşullar birlikte etkilidir."),
    (3, "Bir sözcüğün ortak anlamının kabulü neye dayanır?", ["Tek kişinin kararına", "Toplumsal uzlaşıya", "Yalnız alfabeye", "Yalnız vurguya"], 1, "Ortak anlam toplumsal kabul gerektirir."),
    (3, "Yeni kuşaklara aktarım kesilirse hangi risk artar?", ["Yazı türü", "Dil ölümü", "Deyimleşme", "Vurgu"], 1, "Konuşur ve kuşak aktarımı dilin yaşaması için gereklidir."),
    (4, "Çocuğun ailesinden doğal olarak öğrendiği dil?", ["Ana dil", "Ana dili", "Devlet dili", "Özel dil"], 1, "Ana dili bireyin ilk edindiği dildir."),
    (4, "Erzurum bölgesine özgü söyleyiş farklılığı?", ["Lehçe", "Ana dil", "Ağız", "Yazı dili"], 2, "Ağız bölgesel söyleyiş çeşididir."),
    (4, "Bir sözcüğün ses/yazı biçimi hangi kavram?", ["Gösterilen", "Gösteren", "Kanal", "Bağlam"], 1, "Gösteren, işaretin biçimidir."),
    (5, "Yeni kavramla birlikte adının alınması?", ["Özenti ödünçlemesi", "Bilgi ödünçlemesi", "Göçüşme", "Ağızlaşma"], 1, "Yeni bilgi ve adı birlikte aktarılır."),
    (5, "-matik kalıbının Türkçede yeni sözcüklere uygulanması?", ["Söz varlığı ödünçlemesi", "Dil bilgisi ödünçlemesi", "Ses düşmesi", "Vurgu"], 1, "Yapım örüntüsü aktarımıdır."),
    (5, "Kitaba göre bugün Türkçenin çok kelime aldığı dil?", ["Latince", "İngilizce", "Sümerce", "Japonca"], 1, "Güncel temasın başlıca kaynağı İngilizcedir."),
    (6, "Kitaptaki Altay kuramında hangisi yer almaz?", ["Moğolca", "Mançu-Tunguzca", "Macarca", "Türkçe"], 2, "Macarca Altay kolu içinde sayılmaz."),
    (6, "Babürnâme hangi tarihî Türk yazı diliyle ilişkilidir?", ["Çağatay", "Türkiye", "Yakut", "Göktürk"], 0, "Babürnâme Çağatay Türkçesinin eseridir."),
    (6, "Hangisi Oğuz kolunda değildir?", ["Azerbaycan Türkçesi", "Türkmen Türkçesi", "Türkiye Türkçesi", "Özbek Türkçesi"], 3, "Özbek, Karluk/Çağatay çizgisindedir."),
    (7, "'Göz kulak olmak' hangi söz varlığı ögesi?", ["Terim", "Deyim", "Atasözü", "Sayı grubu"], 1, "Kalıplaşmış durum anlatımı deyimdir."),
    (7, "'Geçmiş olsun' hangi tür?", ["Kalıp söz", "Atasözü", "Terim", "İkileme"], 0, "Toplumsal durumda hazır kullanılan sözdür."),
    (7, "'Damlaya damlaya göl olur' hangi tür?", ["Deyim", "Argo", "Atasözü", "Terim"], 2, "Genel deneyim/öğüt bildirir."),
    (8, "'/ü/' ünlüsünün özellikleri nelerdir?", ["Art-geniş-düz", "Ön-dar-yuvarlak", "Art-dar-yuvarlak", "Ön-geniş-düz"], 1, "Ü ince, dar ve yuvarlaktır."),
    (8, "Hangi çift diş-dudak ünsüzleridir?", ["f-v", "b-p", "k-g", "l-r"], 0, "F ve v diş-dudak sesleridir."),
    (8, "Türkçe sözcüklerde vurgu genellikle nerededir?", ["İlk hecede", "Ortada", "Son hecede", "Hiç yoktur"], 2, "Genel eğilim son hece vurgusudur."),
    (9, "'emr → emir' dönüşümünde hangi olay var?", ["Ünlü türemesi", "Göçüşme", "Ünsüz düşmesi", "Daralma"], 0, "İki ünsüz arasına ünlü eklenir."),
    (9, "'pazar ertesi → pazartesi' hangi olay?", ["Ünsüz yumuşaması", "Hece düşmesi", "Tonlulaşma", "Göçüşme"], 1, "Benzer heceler birleşirken biri düşer."),
    (9, "'başdan → baştan' hangi olay?", ["Ünlü türemesi", "Ünsüz sertleşmesi", "Göçüşme", "Ünlü düşmesi"], 1, "Sert ş'den sonra d, t olur."),
    (10, "'Masanın ayağı' sözündeki ayak hangi anlamda?", ["Temel", "Yan", "Mecaz", "Eş sesli"], 1, "Biçim/işlev ilgisiyle yan anlamdır."),
    (10, "'Sıcak bir gülümseme' ifadesindeki sıcak?", ["Temel", "Yan", "Mecaz", "Terim"], 2, "Gerçek ısı anlatılmadığı için mecazdır."),
    (10, "'Oğlan'ın çocuk anlamından erkek çocukla sınırlanması?", ["Anlam genişlemesi", "Anlam daralması", "Ad aktarması", "Eş seslilik"], 1, "Genelden özele geçiş anlam daralmasıdır."),
    (11, "'kitapçıya' sözcüğündeki -çı eki nedir?", ["Çekim eki", "Yapım eki", "İyelik eki", "Zaman eki"], 1, "Kitapçı yeni kavramdır; -çı yapım ekidir."),
    (11, "'Araba süslendi' cümlesindeki fiil çatısı?", ["Etken", "İşteş", "Edilgen", "Ettirgen"], 2, "İş özne üzerinde gerçekleşir; yapan belirtilmez."),
    (11, "'Okuyarak' hangi fiilimsi türüdür?", ["İsim-fiil", "Sıfat-fiil", "Zarf-fiil", "Çekimli fiil"], 2, "-arak eylemin gerçekleşme biçimini belirtir."),
    (12, "Cümle ögelerini bulmaya hangi ögeyle başlanır?", ["Özne", "Nesne", "Yüklem", "Zarf"], 2, "Diğer ögeler yükleme sorularla belirlenir."),
    (12, "'Ağacın yaprağı' hangi kelime grubu?", ["Sıfat tamlaması", "Belirtili isim tamlaması", "Tekrar grubu", "Edat grubu"], 1, "Tamlayan -ın, tamlanan iyelik -ı alır."),
    (12, "Yüklemi sonda olmayan cümle?", ["Kurallı", "Devrik", "Basit", "Olumlu"], 1, "Yüklem sonda değilse devriktir."),
    (13, "Yeni Türk harfleri hangi yıl kabul edildi?", ["1924", "1928", "1932", "1936"], 1, "1 Kasım 1928 tarihli kanunla kabul edildi."),
    (13, "TDK'nin 1932'deki kuruluş adı nedir?", ["Türk Dili Tetkik Cemiyeti", "Türkiyat Enstitüsü", "Dil Encümeni", "Maarif Vekâleti"], 0, "Kuruluş adı Türk Dili Tetkik Cemiyeti'dir."),
    (13, "Babürnâme'nin dili değil, 1930'ların tarihî dil kuramı hangisi?", ["Altay kuramı", "Güneş-Dil Teorisi", "Ses uyumu", "Göçüşme"], 1, "Güneş-Dil Teorisi bu dönemin tartışmasıdır."),
    (14, "Hangisinin yazımı doğrudur?", ["minibüsde", "minibüste", "minübüste", "minibüs'de"], 1, "Sert ünsüzden sonra -te gelir."),
    (14, "Hangisi doğru yazılmıştır?", ["farkettim", "hoşçakal", "sözkonusu", "fark ettim"], 3, "Fark etmek ayrı yazılır."),
    (14, "'Ben de geldim' sözünde de nasıl yazılır?", ["Bitişik", "Ayrı", "Kesme ile", "Büyük harfle"], 1, "Bağlaç olan de ayrı yazılır."),
]


def footer(canvas, doc):
    w, h = A4
    canvas.saveState()
    canvas.setLineWidth(.5)
    canvas.setStrokeColor(LINE)
    canvas.line(18 * mm, h - 15 * mm, w - 18 * mm, h - 15 * mm)
    canvas.setFont("Arial-Bold", 7.6)
    canvas.setFillColor(NAVY)
    canvas.drawString(18 * mm, h - 11.2 * mm, "TÜRK DİLİ I")
    canvas.setFont("Arial", 7.6)
    canvas.setFillColor(MUTED)
    canvas.drawRightString(w - 18 * mm, h - 11.2 * mm, "ÜNİTE ÇALIŞMA NOTLARI")
    canvas.line(18 * mm, 13 * mm, w - 18 * mm, 13 * mm)
    canvas.drawString(18 * mm, 8.5 * mm, "14 ünite  •  tanım  •  örnek  •  alıştırma")
    canvas.drawRightString(w - 18 * mm, 8.5 * mm, f"Sayfa {doc.page}")
    canvas.restoreState()


story = []
story += [Spacer(1, 36 * mm), P("TÜRK DİLİ I", "CoverTitle"),
          P("14 ünite için sınav odaklı çalışma notları", "CoverSub")]
box(story, "NASIL ÇALIŞMALI?",
    "Her ünitedeki tanımı <b>örneğiyle birlikte</b> öğren. Sayfa sonundaki üç soruyu kitaba bakmadan cevapla. "
    "Son bölümdeki 42 soruluk denemeyi çöz; yanlış yaptığın üniteye dönüp kavramları karşılaştır.")
story += [Spacer(1, 7 * mm), P("Kaynak ve kapsam", "Section"),
          P("İstanbul Üniversitesi Açık ve Uzaktan Eğitim Fakültesi <i>Türk Dili I</i> e-kitabının 14 ünitesi ve "
            "ünite sonu soruları esas alınmıştır. Sayfa aralıkları sağlanan PDF'in sayfa sayacına göredir. "
            "Bu özet kavramları öğrenmeye yöneliktir; özellikle ses ve söz dizimi konularında örnekleri yeniden çözmek yararlıdır."),
          P("Öncelik sırası", "Section")]
for line in [
    "<b>1-7:</b> iletişim, dil becerileri, dil-toplum ilişkisi, dil türleri, söz varlığı.",
    "<b>8-12:</b> ses bilgisi, ses olayları, anlam, biçim bilgisi ve söz dizimi.",
    "<b>13-14:</b> Harf/Dil Devrimi, kurumlar, yazım ve güncel kullanım sorunları.",
]:
    story.append(P("• " + line, "BulletTR"))
story.append(Spacer(1, 5 * mm))
box(story, "OKUMA NOTU",
    "Kitapta bazı tarihî sınıflamalar ve görüşler (özellikle Altay dilleri kuramı ve Güneş-Dil Teorisi) anlatılır. "
    "Notlarda bunlar <b>kuram veya tarihî görüş</b> olarak belirtilmiştir. Sınavda kitabın kavram ve örneklerini izle.", PALE2)
story.append(PageBreak())

for u in UNITS:
    story.append(P(f"ÜNİTE {u['n']:02d}  /  KİTAP PDF s. {u['pages']}", "Kicker"))
    story.append(P(escape(u["title"]), "UnitTitle"))
    box(story, "BU ÜNİTEDE YAPABİLMELİSİN", escape(u["goal"]))
    section(story, "Temel bilgiler", u["core"])
    section(story, "Sınav odağı", u["focus"])
    story.append(P("Kendini yokla", "Section"))
    for i, q in enumerate(u["check"], 1):
        story.append(P(f"{i}. {escape(q)}", "Small"))
    story.append(P("<b>Kısa cevap:</b> " + u["answers"], "Small"))
    story.append(PageBreak())

story.append(P("SON TEKRAR", "Kicker"))
story.append(P("En çok karışan ayrımlar", "UnitTitle"))
rows = [
    ["Kavram 1", "Kavram 2", "Ayırıcı ipucu"],
    ["Kaynak", "Kanal", "Mesajı kuran / mesajın yolu"],
    ["Ana dil", "Ana dili", "Kaynak dil / bireyin ilk dili"],
    ["Deyim", "Atasözü", "Durum anlatır / genel yargı-öğüt"],
    ["Gösteren", "Gösterilen", "Ses-yazı biçimi / zihindeki kavram"],
    ["Türeme", "Düşme", "Yeni ses gelir / ses kaybolur"],
    ["Yan anlam", "Mecaz", "Temel anlamla bağ sürer / uzaklaşır"],
    ["Yapım eki", "Çekim eki", "Yeni kavram / görev ve ilişki"],
    ["Özne", "Nesne", "Yapan / işten etkilenen"],
    ["İsim tamlaması", "Sıfat tamlaması", "İyelik ilişkisi / niteleme"],
    ["Bulunma -de", "Bağlaç de", "Bitişik ve sertleşebilir / ayrı"],
]
table = Table([[P(escape(c), "TableHead" if i == 0 else "TableCell") for c in row]
               for i, row in enumerate(rows)], colWidths=[49 * mm, 49 * mm, 76 * mm], repeatRows=1)
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
story.append(P("Soru çözme yöntemi", "Section"))
for line in [
    "Tanım sorusunda <b>ayırt edici kelimeyi</b> bul: yol=kanal, tepki=geri bildirim, kaynak dil=ana dil.",
    "Ses olayında iki biçimi karşılaştır: ses <b>geldi mi, gitti mi, yer mi değiştirdi, benzeşti mi?</b>",
    "Biçim sorusunda kök ve ekleri ayır; ek <b>yeni kavram</b> üretiyorsa yapım ekidir.",
    "Söz diziminde önce <b>yüklemi</b>, sonra ona sorulan öge sorularını bul.",
]:
    story.append(P("• " + line, "BulletTR"))
story.append(PageBreak())

for start in range(0, 42, 7):
    story.append(P("GENEL DENEME", "Kicker"))
    story.append(P(f"42 soru / {start+1}-{start+7}", "UnitTitle"))
    if start == 0:
        story.append(P("Her üniteden üç özgün soru vardır. Önce cevap anahtarına bakmadan çöz."))
    for i in range(start, start+7):
        unit, stem, opts, correct, reason = EXAM[i]
        story.append(P(f"<b>{i+1}.</b> {escape(stem)}", "Question"))
        story.append(P(" &nbsp;&nbsp; ".join(f"{letter}) {escape(o)}" for letter, o in zip("ABCD", opts)), "Small"))
        story.append(Spacer(1, 3 * mm))
    story.append(PageBreak())

for start in (0, 21):
    story.append(P("GENEL DENEME", "Kicker"))
    story.append(P("Cevap anahtarı ve gerekçeler", "UnitTitle"))
    for i in range(start, start+21):
        unit, stem, opts, correct, reason = EXAM[i]
        story.append(P(f"<b>{i+1:02d}. {chr(65+correct)}</b> - {escape(reason)}", "Answer"))
    if start == 21:
        story.append(Spacer(1, 5 * mm))
        box(story, "SON KONTROL",
            "Yanlışlarını üniteye göre grupla. Özellikle <b>dil türleri</b>, <b>ses olayları</b>, "
            "<b>anlam ilişkileri</b>, <b>yapım/çekim ekleri</b> ve <b>cümle ögeleri</b> ayrımlarını "
            "örnek çözerek yeniden çalış.", PALE2)
    else:
        story.append(PageBreak())

doc = SimpleDocTemplate(str(OUTPUT), pagesize=A4, rightMargin=18 * mm,
                        leftMargin=18 * mm, topMargin=20 * mm, bottomMargin=17 * mm,
                        title="Türk Dili I - Ünite Ünite Çalışma Notları",
                        author="OpenAI Codex", subject="Türk Dili I e-kitabı çalışma notları")
doc.build(story, onFirstPage=footer, onLaterPages=footer)
print(OUTPUT)
