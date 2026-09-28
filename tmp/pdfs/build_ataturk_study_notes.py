from pathlib import Path
from random import Random
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
OUT = ROOT / "output" / "pdf" / "ataturk-ilkeleri-ve-inkilap-tarihi-1-calisma-notlari.pdf"
OUT.parent.mkdir(parents=True, exist_ok=True)
F = Path(r"C:\Windows\Fonts")
pdfmetrics.registerFont(TTFont("Arial", str(F / "arial.ttf")))
pdfmetrics.registerFont(TTFont("Arial-Bold", str(F / "arialbd.ttf")))
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
styles.add(ParagraphStyle(name="CoverX", fontName="Arial-Bold", fontSize=24, leading=31,
                          textColor=NAVY, alignment=TA_CENTER, spaceAfter=13))
styles.add(ParagraphStyle(name="CoverSubX", fontName="Arial", fontSize=12, leading=18,
                          textColor=BLUE, alignment=TA_CENTER, spaceAfter=18))
styles.add(ParagraphStyle(name="KickerX", fontName="Arial-Bold", fontSize=8.3, leading=11.2,
                          textColor=TEAL, spaceAfter=5))
styles.add(ParagraphStyle(name="UnitTitleX", fontName="Arial-Bold", fontSize=16.5, leading=20.3,
                          textColor=NAVY, spaceAfter=8))
styles.add(ParagraphStyle(name="SectionX", fontName="Arial-Bold", fontSize=10.5, leading=14,
                          textColor=BLUE, spaceBefore=8, spaceAfter=4))
styles.add(ParagraphStyle(name="BodyX", fontName="Arial", fontSize=9.15, leading=13.1,
                          textColor=INK, spaceAfter=5))
styles.add(ParagraphStyle(name="BulletX", fontName="Arial", fontSize=8.95, leading=12.85,
                          textColor=INK, leftIndent=10, firstLineIndent=-7, spaceAfter=4))
styles.add(ParagraphStyle(name="SmallX", fontName="Arial", fontSize=8.15, leading=11.2,
                          textColor=MUTED, spaceAfter=3))
styles.add(ParagraphStyle(name="QX", fontName="Arial", fontSize=9.2, leading=13.1,
                          textColor=INK, spaceAfter=3))
styles.add(ParagraphStyle(name="AX", fontName="Arial", fontSize=8.65, leading=11.8,
                          textColor=INK, spaceAfter=2.3))
styles.add(ParagraphStyle(name="THX", fontName="Arial-Bold", fontSize=8.1, leading=11,
                          textColor=colors.white))
styles.add(ParagraphStyle(name="TCX", fontName="Arial", fontSize=8.15, leading=11.3,
                          textColor=INK))


def P(value, style="BodyX"):
    return Paragraph(str(value).replace("–", "-").replace("—", "-"), styles[style])


def sect(story, name, points):
    story.append(P(name, "SectionX"))
    for x in points:
        story.append(P("• " + x, "BulletX"))


def box(story, title, body, shade=PALE):
    t = Table([[P(title, "KickerX")], [P(body, "BodyX")]], colWidths=[174 * mm])
    t.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), shade),
        ("BOX", (0, 0), (-1, -1), .45, LINE),
        ("LEFTPADDING", (0, 0), (-1, -1), 8),
        ("RIGHTPADDING", (0, 0), (-1, -1), 8),
        ("TOPPADDING", (0, 0), (-1, 0), 7),
        ("BOTTOMPADDING", (0, -1), (-1, -1), 3),
    ]))
    story.append(t)


def table(story, headers, rows, widths):
    data = [[P(h, "THX") for h in headers]] + [[P(str(c), "TCX") for c in row] for row in rows]
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
    dict(n=1, title="Osmanlı Devleti'nde Modernleşme Hareketleri", pages="3-16",
         goal="Buhran nedenlerini, Lale Devri'ni ve III. Selim'in Nizam-ı Cedit programını ilişkilendirmek.",
         core=[
             "<b>Buhran:</b> 16. yüzyıl sonlarından itibaren askerî/kurumsal sorunlar, mali baskı, ticaret yollarındaki değişim ve Avrupa'nın teknoloji/örgütlenmedeki ilerlemesi belirginleşti. Kitap, bu dönemi yalnız 'duraklama' yerine <b>buhran</b> kavramıyla da açıklar.",
             "<b>Islahatın yönü:</b> Önce klasik düzeni onarma arayışı ağır basarken 18. yüzyılda Avrupa kurum ve tekniklerinin örnek alınması güçlendi; yeniliklerin sürekliliği için insan, para ve kurum gerekiyordu.",
             "<b>Lale Devri (1718-1730):</b> Pasarofça sonrası barış ortamında diplomasi, matbaa, kültür ve teknik alanlarda açılım görüldü. İbrahim Müteferrika matbaası dönemin simgelerindendir. <b>Patrona Halil İsyanı</b> devri sona erdirdi.",
             "<b>III. Selim (1789-1807):</b> Reform önerileri toplandı; <b>Nizam-ı Cedit</b> yeni usul ordu ve daha geniş reform programının adıdır. <b>İrad-ı Cedit</b> bu ordu/reformlar için ayrılan mali kaynaktır.",
             "Yeni eğitim, teknik bilgi ve kalıcı elçilikler yeniliklerin parçalarıydı. Eski kurumlarla yeni kurumların yan yana yaşaması direnç ve mali yük doğurdu; <b>Kabakçı Mustafa İsyanı (1807)</b> III. Selim düzenini sona erdirdi.",
         ],
         focus=["Lale Devri = erken kültürel/teknik açılım; III. Selim = programlı askerî reform. Nizam-ı Cedit <b>ordu/program</b>, İrad-ı Cedit <b>mali kaynak</b>tır.",
                "Sebep-sonuç kur: askerî yenilgi ve mali kriz → ıslahat ihtiyacı → yeni kurumlar → eski-yeni gerilimi."],
         check=[("Lale Devri'ni bitiren olay?", "Patrona Halil İsyanı."), ("III. Selim'in reform programı?", "Nizam-ı Cedit."), ("Reformların finansman kaynağı?", "İrad-ı Cedit.")]),
    dict(n=2, title="Kurumsal Modernleşme Dönemi - 1", pages="17-29",
         goal="II. Mahmut, Tanzimat ve Islahat Fermanı dönemlerinin farkını bilmek.",
         core=[
             "<b>II. Mahmut:</b> Merkezi otoriteyi güçlendirme ve kurumsal yenileme hedefiyle askerî, idari ve eğitim alanlarında adımlar attı. <b>Sened-i İttifak (1808)</b> merkez-taşra güç ilişkisini gösteren erken belgedir.",
             "<b>Vaka-i Hayriye (1826):</b> Yeniçeri Ocağı kaldırıldı; yerine <b>Asakir-i Mansure-i Muhammediye</b> kuruldu. Böylece modern askerî düzenin önündeki önemli kurumsal engel kaldırıldı.",
             "Bakanlık benzeri nezaretler, yeni okullar, nüfus sayımı ve posta gibi düzenlemeler merkezi devletin kapasitesini artırma amacına bağlıydı.",
             "<b>Tanzimat Fermanı (1839):</b> Can, mal ve namus güvenliği; vergilerin kurala bağlanması; askerlik ve yargılama usullerinde düzen ilkeleri ilan edildi. Hedef, hukuk ve idarede öngörülebilirlikti.",
             "<b>Islahat Fermanı (1856):</b> Gayrimüslim tebaaya yönelik eşitlik/hak vurgusunu genişletti; Avrupa devletlerinin baskısı ve Kırım Savaşı sonrası diplomatik bağlam belirgindi.",
             "<b>Kurumsal sonuç:</b> Vilayet yönetimi, yeni mahkemeler ve eğitim kurumları gelişti. Meclisler ve bürokrasi güçlendi; reformların uygulanması ülke genelinde eşit hızda olmadı.",
         ],
         focus=["1839 Tanzimat = genel can-mal güvenliği ve hukuki usul; 1856 Islahat = özellikle gayrimüslimlerin statüsüne dair ayrıntılı eşitlik düzenlemeleri.",
                "1826 askerî, 1839 hukuk/idare, 1856 eşitlik ekseniyle hatırla."],
         check=[("Yeniçeri Ocağı hangi olayla kaldırıldı?", "Vaka-i Hayriye."), ("Tanzimat Fermanı yılı?", "1839."), ("Islahat Fermanı yılı?", "1856.")]),
    dict(n=3, title="Kurumsal Modernleşme Dönemi - 2 (1876-1908)", pages="30-43",
         goal="I. ve II. Meşrutiyet, Kanun-i Esasi, 31 Mart ve 1909 değişikliklerini sıralamak.",
         core=[
             "<b>Meşrutiyet:</b> Padişahın yetkileri anayasa ve meclisle sınırlandırılır. <b>Kanun-i Esasi (1876)</b> Osmanlı Devleti'nin ilk anayasasıdır; I. Meşrutiyet aynı yıl ilan edildi.",
             "İlk Meclis-i Mebusan 1877'de toplandı; II. Abdülhamit 1878'de meclisi tatil etti. Anayasa bütünüyle yok olmadı, fakat parlamenter hayat kesintiye uğradı.",
             "II. Abdülhamit devrinde modern okullar ve bürokratik eğitim yaygınlaştı; aynı dönemde merkezî denetim ve muhalefetle gerilim sürdü.",
             "<b>II. Meşrutiyet (1908):</b> Anayasal/parlamenter düzen yeniden işletildi. İttihat ve Terakki'nin siyasal etkisi arttı; partiler, seçimler ve basın daha görünür oldu.",
             "<b>31 Mart Vakası (1909):</b> Meşrutiyete karşı ayaklanma Hareket Ordusu tarafından bastırıldı; II. Abdülhamit tahttan indirildi.",
             "<b>1909 anayasa değişiklikleri</b> padişah yetkilerini daraltıp meclis ve hükûmetin konumunu güçlendirdi. 1876 ve 1909 metinlerini aynı sayma.",
         ],
         focus=["1876 ilk ilan; 1878 meclisin tatili; 1908 yeniden ilan; 1909 31 Mart ve anayasa değişiklikleri.",
                "I. Meşrutiyet ile II. Meşrutiyet arasındaki temel fark: ikincisi anayasal hayatı geri getirdi ve 1909'da daha parlamenter yönde değişti."],
         check=[("İlk Osmanlı anayasası?", "Kanun-i Esasi."), ("II. Meşrutiyet yılı?", "1908."), ("31 Mart'ı bastıran güç?", "Hareket Ordusu.")]),
    dict(n=4, title="Osmanlı Fikir Hareketleri", pages="44-56",
         goal="Osmanlıcılık, İslamcılık, Batıcılık ve Türkçülüğü temel amaçlarıyla ayırmak.",
         core=[
             "<b>Ortak soru:</b> Çok uluslu devlet nasıl dağılmadan korunabilir? Akımlar farklı aidiyet ve değişim reçeteleri önerdi; dönemlere göre iç içe geçebildiler.",
             "<b>Osmanlıcılık:</b> Din ve etnik kökenden bağımsız ortak Osmanlı vatandaşlığı/bağlılığı kurmayı amaçladı; Tanzimat ve meşrutiyet düşüncesiyle ilişkilidir. Genç Osmanlılar anayasal yönetimi savundu.",
             "<b>İslamcılık:</b> Müslüman tebaa ve İslam dünyası dayanışmasını öne çıkarır; II. Abdülhamit döneminde siyasal önem kazandı.",
             "<b>Batıcılık:</b> Bilim, teknik, eğitim ve kurumsal yapıda Avrupa örneklerinden yararlanmayı savundu. Batılılaşmanın kapsamı üzerine kendi içinde farklı görüşler vardı.",
             "<b>Türkçülük:</b> Dil, tarih ve kültür birliğini vurguladı; imparatorluğun çözülme sürecinde daha görünür oldu. Turancılık ise Türk toplulukları arasında daha geniş siyasi birlik idealini dile getirebilir.",
             "<b>İttihat ve Terakki:</b> II. Jön Türk hareketinin ana örgütlerinden; 1908 Meşrutiyet sürecinde belirleyiciydi. Fikir akımı ile siyasal örgütü birbirine karıştırma.",
         ],
         focus=["Osmanlıcılık = ortak vatandaşlık; İslamcılık = dinî birlik; Türkçülük = Türk dil/kültür bağı; Batıcılık = Avrupa usulü modernleşme.",
                "Genç Osmanlılar ağırlıkla I. Meşrutiyet; İttihat ve Terakki ağırlıkla II. Meşrutiyet ile bağlantılıdır."],
         check=[("Ortak Osmanlı vatandaşlığı?", "Osmanlıcılık."), ("1908'in başlıca örgütü?", "İttihat ve Terakki."), ("Türk dil ve kültür birliği?", "Türkçülük.")]),
    dict(n=5, title="Osmanlı Dış Politikası", pages="57-75",
         goal="1774-1913 arasındaki büyük savaş ve antlaşmaların etkilerini ilişkilendirmek.",
         core=[
             "<b>Küçük Kaynarca (1774):</b> Osmanlı-Rus dengesinde kırılma; Karadeniz, Kırım ve Ortodokslar üzerinden Rus etkisi büyüdü. Diplomasi ve ittifak arayışı daha önemli hale geldi.",
             "Yunan bağımsızlığı sürecinde Avrupa müdahalesi arttı; <b>Edirne Antlaşması (1829)</b> Osmanlı'nın ağır tavizlerini pekiştirdi.",
             "<b>Mısır Meselesi:</b> Kavalalı Mehmet Ali Paşa'nın güçlenmesi merkezî otorite için kriz yarattı; 1833 Hünkâr İskelesi Antlaşması Rusya ile yakınlaşma, 1840 Londra düzenlemesi Mısır sorununun çözümü açısından önemlidir.",
             "<b>Boğazlar (1841 Londra Boğazlar Sözleşmesi):</b> Boğazlar meselesi uluslararası statüye bağlandı. Büyük devletlerin güç dengesi Osmanlı diplomasisinin ana çerçevesi oldu.",
             "<b>Kırım Savaşı (1853-1856) / Paris Antlaşması (1856):</b> Osmanlı İngiltere ve Fransa ile Rusya'ya karşı savaştı; Avrupa devletler sistemi içinde konumu güçlenirken dış bağımlılık da arttı.",
             "<b>1877-78 Osmanlı-Rus Savaşı / Berlin Antlaşması:</b> Balkanlarda yeni siyasi düzen ve önemli toprak kayıpları doğdu. II. Abdülhamit farklı güçleri birbirine karşı dengelemeye çalıştı.",
             "<b>Trablusgarp (1911-12)</b> İtalya'ya karşı; <b>Balkan Savaşları (1912-13)</b> Balkan devletlerine karşı yapıldı. Trablusgarp sonunda Uşi Antlaşması; Balkan savaşları sonunda Balkan topraklarında büyük kayıplar yaşandı.",
         ],
         focus=["Tarihi değil işlevi eşleştir: 1774 Rus üstünlüğü, 1841 Boğazlar rejimi, 1856 Paris, 1878 Berlin, 1912 Uşi, 1913 Balkan barışları.",
                "19. yüzyıl Osmanlı diplomasisinin ana yöntemi çoğu kez büyük devletler arasında <b>denge aramak</b>tır."],
         check=[("Boğazların uluslararası statüsü?", "1841 Londra Boğazlar Sözleşmesi."), ("Trablusgarp'ın rakibi?", "İtalya."), ("1877-78 sonrası kongre?", "Berlin.")]),
    dict(n=6, title="Modernleşme Döneminde Osmanlı Ekonomisi", pages="76-88",
         goal="Serbest ticaret, dış borç, Düyun-ı Umumiye ve millî iktisadı açıklamak.",
         core=[
             "<b>Baltalimanı (1838)</b> ve sonraki ticaret sözleşmeleri serbest ticaret düzenini güçlendirdi. İthalat artışı, yerli üretici rekabeti ve gümrük politikası üzerindeki sınırlamalar ekonomi tartışmasının odağıydı.",
             "<b>1854:</b> Kırım Savaşı sırasında ilk dış borç alındı. Savaş ve bütçe açıkları borçlanmayı sürdürdü; kaynaklar üretken yatırımlara yeterince yönlendirilemedi.",
             "Ödeme bunalımı sonrasında <b>Muharrem Kararnamesi (1881)</b> ile <b>Düyun-ı Umumiye</b> kuruldu; belirli Osmanlı gelirleri alacaklıların denetimine bırakıldı. Bu, mali egemenliği daralttı.",
             "Yabancı sermaye demiryolu, liman, finans ve altyapıda etkin oldu. Yatırımın faydası ile imtiyazların yarattığı bağımlılık birlikte değerlendirilmelidir.",
             "<b>Millî iktisat:</b> II. Meşrutiyet yıllarında yerli girişimci, sanayi ve şirketleşmeyi destekleme düşüncesi öne çıktı. <b>Teşvik-i Sanayi (1913)</b> bu çizginin araçlarından biridir.",
             "Birinci Dünya Savaşı'nda iaşe, üretim ve enflasyon sorunları büyüdü; kapitülasyonların kaldırılması ve daha bağımsız gümrük/iktisat siyaseti girişimleri savaş koşullarında gerçekleşti.",
         ],
         focus=["1838 ticaret; 1854 ilk dış borç; 1881 Düyun-ı Umumiye; 1913 sanayi teşviki. Nedensel zinciri kur.",
                "Düyun-ı Umumiye'yi 'yeni bir vergi' olarak değil, borçlara karşı gelir toplama/denetim idaresi olarak tanı."],
         check=[("İlk dış borç yılı?", "1854."), ("1881'de kurulan idare?", "Düyun-ı Umumiye."), ("Yerli sermayeyi öne çıkaran yaklaşım?", "Millî iktisat.")]),
    dict(n=7, title="Birinci Dünya Savaşı ve Osmanlı Devleti", pages="89-101",
         goal="Savaşın sebeplerini, Osmanlı'nın girişini, cepheleri ve Mondros'u bilmek.",
         core=[
             "<b>Genel sebepler:</b> Emperyalist rekabet, silahlanma, bloklaşma ve milliyetçilik. <b>28 Haziran 1914 Saraybosna suikastı</b> savaşın tetikleyicisidir; tek ve köklü sebebi değildir.",
             "<b>İtilaf:</b> İngiltere, Fransa, Rusya. <b>İttifak:</b> Almanya, Avusturya-Macaristan; Osmanlı daha sonra bu blokta savaşa girdi. Almanya ile gizli ittifak ve Karadeniz'deki çatışmalar savaşa girişi hızlandırdı.",
             "İtilaf Devletleri'nin savaş sırasındaki gizli paylaşım antlaşmaları Osmanlı topraklarını hedef aldı; savaş sonrası sorunların zeminini oluşturdu.",
             "<b>Çanakkale:</b> Boğazı geçme ve Rusya'ya yardım ulaştırma girişimi başarısız oldu; savunma zaferi Mustafa Kemal'in askerî itibarını güçlendirdi. Kafkas, Kanal, Irak, Suriye-Filistin cephelerinde ise farklı askerî sonuçlar alındı.",
             "<b>Kafkas Cephesi:</b> Sarıkamış harekâtı ağır kayıpla sonuçlandı. <b>Kanal:</b> Süveyş hattı hedeflendi. <b>Irak ve Suriye-Filistin:</b> İngiliz ilerleyişi ve geri çekilme süreci belirleyiciydi.",
             "Müttefiklerin yenilgisi ve cephelerdeki çözülme üzerine Osmanlı <b>30 Ekim 1918 Mondros Mütarekesi</b>ni imzalayarak savaştan çekildi; mütareke işgallere zemin açtı.",
         ],
         focus=["Saraybosna = kıvılcım; bloklaşma/rekabet = uzun dönem sebepler. Çanakkale = savunma başarısı; Mondros = savaştan çekilme.",
                "Mondros'un işgale imkân veren hükümleri, 9. ünitedeki Millî Mücadele başlangıcını açıklar."],
         check=[("Savaşın kıvılcımı?", "Saraybosna suikastı."), ("Osmanlı'nın başarılı savunma cephesi?", "Çanakkale."), ("Savaştan çekilme belgesi?", "Mondros Mütarekesi.")]),
    dict(n=8, title="Ermeni Meselesi", pages="102-111",
         goal="Kitabın anlattığı gelişme çizgisini, 1915 kararlarını ve tarihsel yorum ile olguyu ayırmak.",
         core=[
             "Kitap, Ermenilerin Osmanlı <b>millet sistemi</b> içindeki konumundan başlayıp 19. yüzyılda milliyetçilik, reform talepleri ve büyük devlet müdahaleleriyle meselenin büyümesini anlatır.",
             "<b>1863 Ermeni Milleti Nizamnamesi</b> cemaat örgütlenmesinde dönüm noktasıdır. <b>1878 Berlin Antlaşması</b> Ermeni reformları konusunu uluslararası diplomasi gündemine taşıdı.",
             "19. yüzyıl sonunda komiteler, ayaklanmalar ve Osmanlı idaresinin tepkileri kitabın temel başlıklarıdır. II. Meşrutiyet başında iş birliği arayışı, sonra artan gerilim ele alınır.",
             "Birinci Dünya Savaşı sırasında Doğu Anadolu'da savaş, yerel şiddet ve güvenlik krizi yaşandı. <b>24 Nisan 1915</b> İstanbul'daki Ermeni ileri gelenlerine yönelik tutuklamalar; <b>27 Mayıs 1915</b> Sevk ve İskân Kanunu ile zorla yer değiştirme süreci kitabın kronolojisindedir.",
             "Zorla yer değiştirme ve kitlesel ölümler yaşandı. Kitap uygulamayı savaş güvenliği çerçevesinde yorumlar ve 'soykırım' nitelemesini reddeder. ABD Holokost Anı Müzesi ise olayları <b>Ermeni Soykırımı</b> olarak tanımlar. Kitabın yorumu ile tarihsel olayları ve farklı kaynakların nitelendirmesini ayrı tut.",
             "Mondros sonrası geri dönüş ve yargılama girişimleri de kitapta ele alınır. Sınavda 1863, 1878, 24 Nisan ve 27 Mayıs 1915 sırasını karıştırma.",
         ],
         focus=["1878 Berlin = meselenin uluslararasılaşması. 24 Nisan = tutuklamalar; 27 Mayıs = sevk ve iskâna ilişkin kanun.",
                "Bu ünitede kitapta yer alan siyasi/tarihsel yorumları, doğrulanabilir olay ve tarihlerden ayrı okuyarak çalış."],
         check=[("Ermeni reformlarını dış diplomasiye taşıyan antlaşma?", "1878 Berlin."), ("24 Nisan 1915 olayı?", "Tutuklamalar."), ("Sevk ve İskân Kanunu tarihi?", "27 Mayıs 1915.")],
         extra="Karşılaştırma kaynağı: <link href='https://encyclopedia.ushmm.org/content/tr/article/the-armenian-genocide-1915-16-in-depth'>ABD Holokost Anı Müzesi, Holokost Ansiklopedisi - Ermeni Soykırımı (1915-16)</link>."),
    dict(n=9, title="Millî Mücadele Dönemi - 1", pages="112-130",
         goal="Mondros, işgaller, cemiyetler, İzmir'in işgali ve Samsun'a çıkışı bağlamak.",
         core=[
             "<b>Mondros (30 Ekim 1918)</b> Osmanlı'nın savaştan çekilmesidir. Özellikle güvenliği gerekçe göstererek stratejik yerlerin işgaline imkân veren <b>7. madde</b> işgallerde kullanıldı.",
             "İtilaf işgalleri karşısında Anadolu ve Trakya'da <b>Müdafaa-i Hukuk</b> cemiyetleri kuruldu. Başlangıçta yerel/bölgesel savunma örgütleriydi; daha sonra ortak ulusal yapı oluştu.",
             "<b>Kuvâ-yı Milliye:</b> İşgallere karşı yerel silahlı direniş güçleri; düzenli ordu oluşmadan önce savunmada etkili oldu, fakat merkezi komuta ve disiplin bakımından sınırlılıkları vardı.",
             "<b>15 Mayıs 1919 İzmir'in işgali</b> yaygın protesto ve Batı Anadolu'da direnişi hızlandırdı. İşgallere tepki, Millî Mücadele'nin toplumsal desteğini büyüttü.",
             "Mustafa Kemal Paşa İstanbul'daki görüşmeler ve hazırlıkların ardından 9. Ordu Müfettişliği göreviyle <b>19 Mayıs 1919'da Samsun'a</b> çıktı; süreç giderek millî örgütlenmeye dönüştü.",
             "Wilson İlkeleri savaş sonrası diplomatik söylemi etkiledi; ancak ilan edilen ilkeler ile sahadaki işgaller arasında gerilim vardı.",
         ],
         focus=["Mondros → işgaller → yerel cemiyetler/Kuvâ-yı Milliye → İzmir'e tepki → Samsun ve ulusal örgütlenme.",
                "Müdafaa-i Hukuk <b>örgüt</b>, Kuvâ-yı Milliye <b>silahlı direniş</b> olarak ayırt edilir."],
         check=[("Mondros'un işgalle ilişkilendirilen maddesi?", "7. madde."), ("İzmir'in işgali?", "15 Mayıs 1919."), ("Samsun'a çıkış?", "19 Mayıs 1919.")]),
    dict(n=10, title="Millî Mücadele Dönemi - 2", pages="131-146",
         goal="Genelge, kongre, Temsil Heyeti ve Misak-ı Millî kronolojisini kurmak.",
         core=[
             "<b>Havza Genelgesi (28 Mayıs 1919):</b> İşgallere karşı miting ve protestoları teşvik etti. <b>Amasya Genelgesi (22 Haziran):</b> Vatanın bütünlüğü ve bağımsızlığın tehlikede olduğu vurgulandı; kurtuluşun milletin azim ve kararına bağlanması siyasi yönü gösterir.",
             "<b>Erzurum Kongresi (23 Temmuz-7 Ağustos 1919):</b> Toplanışı bölgesel, kararları millî niteliktedir. Bölgenin bütünlüğü savunuldu; manda/himaye reddedildi; Temsil Heyeti oluşturuldu.",
             "<b>Sivas Kongresi (4-11 Eylül 1919):</b> Millî cemiyetler <b>Anadolu ve Rumeli Müdafaa-i Hukuk Cemiyeti</b> çatısında birleştirildi; Temsil Heyeti tüm ülkeyi temsil edecek biçimde genişledi.",
             "<b>Amasya Görüşmeleri (20-22 Ekim):</b> İstanbul Hükûmeti ile Temsil Heyeti arasında temas; meclis seçimleri ve millî iradenin temsili öne çıktı. Heyet Aralık 1919'da Ankara'ya geldi.",
             "Son Osmanlı Meclis-i Mebusanı <b>Misak-ı Millî</b>yi 28 Ocak 1920'de kabul, 17 Şubat'ta ilan etti: millî sınırlar ve bağımsız barış ilkeleri. İstanbul <b>16 Mart 1920'de</b> resmen işgal edildi.",
         ],
         focus=["Erzurum: bölgesel toplantı; Sivas: ülke çapında örgüt birliği. Misak-ı Millî = barış/bağımsızlık hedeflerinin ilanı.",
                "1919 zinciri: Havza → Amasya → Erzurum → Sivas → Amasya Görüşmeleri → Ankara; 1920: Misak → İstanbul işgali."],
         check=[("'Milletin azim ve kararı' hangi belge?", "Amasya Genelgesi."), ("Cemiyetlerin birleştiği kongre?", "Sivas."), ("Misak-ı Millî kabul tarihi?", "28 Ocak 1920.")]),
    dict(n=11, title="Birinci TBMM Dönemi", pages="147-164",
         goal="TBMM'nin açılışı, yetkileri, ayaklanmalar ve 1921 Anayasası'nı açıklamak.",
         core=[
             "İstanbul'un işgali ve Meclis-i Mebusan'ın çalışamaz duruma gelmesi üzerine Ankara'da yeni meclis için seçim yapıldı. <b>TBMM 23 Nisan 1920'de</b> açıldı; Millî Mücadele'nin meşru karar merkezi oldu.",
             "Birinci Meclis olağanüstü koşullarda yasama ve yürütme yetkilerini bünyesinde topladı (<b>meclis hükûmeti sistemi</b>). Farklı toplumsal ve siyasal görüşleri barındırdı.",
             "İstanbul Hükûmeti ve işgal güçlerinin faaliyetleri ile yerel sorunlar TBMM'ye karşı ayaklanmaları besledi. Cephe güvenliği ve otorite için sert tedbirler alındı.",
             "<b>Hıyanet-i Vataniye Kanunu (1920)</b> ve <b>İstiklal Mahkemeleri</b> savaş koşullarında iç güvenlik/otorite araçlarıydı. Bunları TBMM'nin açılışından sonra konumlandır.",
             "<b>20 Ocak 1921 Teşkilat-ı Esasiye Kanunu:</b> 'Egemenlik kayıtsız şartsız milletindir' ilkesi; kısa ve savaş koşullarına uygun anayasal çerçeve. Millî egemenlik vurgusu temel ayrımdır.",
             "<b>İstiklal Marşı 12 Mart 1921'de</b> kabul edildi; Mehmet Âkif Ersoy'un şiiridir. Savaş sırasındaki ortak mücadele ruhunu güçlendirdi.",
         ],
         focus=["23 Nisan 1920 meclis; 1920 Hıyanet-i Vataniye/İstiklal Mahkemeleri; 20 Ocak 1921 anayasa; 12 Mart 1921 marş.",
                "1876 Kanun-i Esasi ile 1921 Teşkilat-ı Esasiye'yi karıştırma: ikincisinin belirleyici ilkesi millî egemenliktir."],
         check=[("TBMM'nin açılışı?", "23 Nisan 1920."), ("Millî egemenliği açıkça vurgulayan anayasa?", "1921 Teşkilat-ı Esasiye."), ("İstiklal Marşı'nın kabulü?", "12 Mart 1921.")]),
    dict(n=12, title="Millî Mücadele'nin Mali Kaynakları", pages="165-181",
         goal="İç kaynak, dış yardım ve Tekâlif-i Milliye'nin işlevini ayırmak.",
         core=[
             "Mondros sonrası işgaller verimli bölgeleri ve kamu gelirlerini daralttı. Düzenli ordu kurulana dek Müdafaa-i Hukuk ve Kuvâ-yı Milliye büyük ölçüde yerel halkın katkısıyla ayakta kaldı.",
             "<b>Yurt içi kaynaklar:</b> Vergiler, bağışlar, müsadereler ve yerel katkılar; askerî depolardan malzeme temini; İstanbul'daki gizli grupların Anadolu'ya insan ve mühimmat sevki.",
             "TBMM'nin açılmasıyla gelir toplama ve ikmal daha düzenli kuruldu; yeni vergiler ve mevcut vergilerin artırılması savaşı finanse etti.",
             "<b>Tekâlif-i Milliye Emirleri (Ağustos 1921):</b> Sakarya öncesi ordunun yiyecek, giyecek, taşıt ve malzeme ihtiyacı için olağanüstü yükümlülükler getirdi. Amaç doğrudan savaş lojistiğini karşılamaktı.",
             "<b>Yurt dışı:</b> Sovyet Rusya'dan para/silah yardımı, İslam dünyasından özellikle Hindistan Müslümanlarının mali desteği ve başka ülkelerden çeşitli malzeme/tedarik kanalları vardı.",
             "Ana finansman yükü Anadolu halkının omuzundaydı. Yardımlar önemlidir, fakat mücadelenin bütün maliyetini tek başına açıklamaz.",
         ],
         focus=["Tekâlif-i Milliye = Sakarya öncesinde ordunun acil ihtiyaçları; dış yardım = Sovyet ve diğer kaynaklar; temel dayanak = yerli kaynaklar.",
                "Mali kaynak sorusunda 'para' ile 'ayni yardım/ikmal' ayrımını da düşün."],
         check=[("Sakarya öncesi olağanüstü emirler?", "Tekâlif-i Milliye."), ("Başlıca dış desteklerden biri?", "Sovyet yardımı."), ("Temel iç destek?", "Anadolu halkının vergi, bağış ve malzeme katkıları.")]),
    dict(n=13, title="İstiklal Harbi", pages="182-194",
         goal="Doğu, Güney ve Batı cephelerini, komutanları ve sonuçlarıyla ayırmak.",
         core=[
             "<b>Doğu Cephesi:</b> Kazım Karabekir komutasındaki düzenli birliklerin başarısı <b>Gümrü Antlaşması (Aralık 1920)</b>na giden yolu açtı; doğudaki askerî baskı azaldı.",
             "<b>Güney Cephesi:</b> Maraş, Urfa, Antep ve Çukurova'da işgallere karşı yerel direniş ve Kuvâ-yı Milliye öne çıktı. Fransız kuvvetlerine karşı mücadele Ankara Antlaşması'na zemin hazırladı.",
             "<b>Batı Cephesi:</b> Yunan işgaline karşı önce yerel kuvvetler savaştı; TBMM'nin düzenli orduya geçişiyle komuta birliği ve disiplin güçlendi.",
             "<b>I. İnönü (Ocak 1921)</b> ve <b>II. İnönü (Mart-Nisan 1921)</b> savunma başarıları Ankara'nın meşruiyet ve moralini artırdı. Sonraki Kütahya-Eskişehir yenilgisiyle ordu Sakarya'nın doğusuna çekildi.",
             "<b>Sakarya Meydan Muharebesi (Ağustos-Eylül 1921):</b> Yunan ilerleyişi durduruldu; stratejik inisiyatif TBMM'ye geçti. Mustafa Kemal'e gazilik ve mareşallik unvanı verildi.",
             "<b>Büyük Taarruz (26 Ağustos 1922)</b> ve <b>Başkomutanlık Meydan Muharebesi (30 Ağustos)</b> kesin askerî sonuca ulaştırdı; 9 Eylül'de İzmir kurtarıldı. Ardından Mudanya ile silahlı çatışma sona erdi.",
         ],
         focus=["Doğu = Karabekir/Gümrü; Güney = yerel direniş/Fransa; Batı = düzenli ordu/Yunanistan/İnönü-Sakarya-Büyük Taarruz.",
                "Kronoloji: I. İnönü → II. İnönü → Kütahya-Eskişehir → Sakarya → Büyük Taarruz → Mudanya."],
         check=[("Doğu Cephesi komutanı?", "Kazım Karabekir."), ("Yunan ilerleyişini durduran meydan savaşı?", "Sakarya."), ("Kesin askerî zafer tarihi?", "30 Ağustos 1922.")]),
    dict(n=14, title="Millî Mücadele'nin Dış İlişkileri", pages="195-213",
         goal="Sevr'den Lozan'a diplomatik anlaşmaları ve bağımsızlık sonucunu sıralamak.",
         core=[
             "<b>Sevr (10 Ağustos 1920):</b> Osmanlı heyeti tarafından imzalandı; Osmanlı Meclis-i Mebusanı'nca onaylanmadı ve TBMM tarafından reddedildi. Ağır hükümleri nedeniyle uygulanamadı.",
             "<b>Gümrü (Aralık 1920)</b> doğudaki askerî başarıyı diplomatik sonuca bağladı. <b>Londra Konferansı (1921)</b> Ankara'nın uluslararası muhataplığını görünür kıldı; önerilen Sevr değişiklikleri kabul edilmedi.",
             "<b>Afganistan Antlaşması (1 Mart 1921)</b> ve <b>Moskova Antlaşması (16 Mart 1921)</b> TBMM'nin doğu diplomasisini güçlendirdi; Sovyet desteği ve karşılıklı tanıma önemliydi.",
             "<b>Kars Antlaşması (13 Ekim 1921)</b> doğu sınırı düzeninde; <b>Ankara Antlaşması (20 Ekim 1921)</b> Fransa ile Güney Cephesi'nin kapanmasında belirleyiciydi.",
             "<b>Mudanya Mütarekesi (11 Ekim 1922)</b> askerî mücadeleyi durdurdu ve Doğu Trakya'nın devrinin yolunu açtı. Barış görüşmelerinde çift temsil sorununu çözmek için <b>saltanat 1 Kasım 1922'de</b> kaldırıldı.",
             "<b>Lozan:</b> Konferans 20 Kasım 1922'de başladı, iki aşamada yürüdü; <b>Lozan Barış Antlaşması 24 Temmuz 1923'te</b> imzalandı. Kapitülasyonların kaldırılması ve yeni devletin uluslararası tanınması temel sonuçlardır.",
         ],
         focus=["Sevr = uygulanmayan ağır antlaşma; Mudanya = ateşkes; Lozan = barış. Bunların türünü karıştırma.",
                "1921: Moskova, Kars, Ankara; 1922: Mudanya, saltanatın kaldırılması; 1923: Lozan."],
         check=[("Fransa ile 1921 antlaşması?", "Ankara Antlaşması."), ("11 Ekim 1922 belgesi?", "Mudanya Mütarekesi."), ("Lozan imza tarihi?", "24 Temmuz 1923.")]),
]


QUESTIONS = [
    (1, "Lale Devri'ni sona erdiren olay hangisidir?", ["31 Mart Vakası", "Patrona Halil İsyanı", "Kabakçı Mustafa İsyanı", "Vaka-i Hayriye"], "B", "1730 Patrona Halil İsyanı Lale Devri'ni bitirdi."),
    (1, "III. Selim'in yeni usul ordusu ve reform programı nedir?", ["Nizam-ı Cedit", "İrad-ı Cedit", "Tanzimat", "Islahat"], "A", "Nizam-ı Cedit askerî ve kurumsal reform programıdır."),
    (1, "İrad-ı Cedit'in temel işlevi hangisidir?", ["Meclis kurmak", "Anayasa yazmak", "Reformları finanse etmek", "Dış borcu yönetmek"], "C", "İrad-ı Cedit yeni düzenin mali kaynağıydı."),
    (2, "Yeniçeri Ocağı hangi olayla kaldırıldı?", ["Sened-i İttifak", "Islahat Fermanı", "Kanun-i Esasi", "Vaka-i Hayriye"], "D", "1826 Vaka-i Hayriye sonrası ocak kaldırıldı."),
    (2, "Can ve mal güvenliği ilkelerini ilan eden 1839 belgesi hangisidir?", ["Tanzimat Fermanı", "Islahat Fermanı", "Misak-ı Millî", "Teşkilat-ı Esasiye"], "A", "1839 Tanzimat Fermanı bu ilkeleri vurgular."),
    (2, "1856 Islahat Fermanı özellikle hangi statüyü ele alır?", ["Tımar sahipleri", "Gayrimüslim tebaa", "Yeniçeriler", "Meclis üyeleri"], "B", "Ferman gayrimüslimlerin hak/eşitlik statüsünü genişletir."),
    (3, "İlk Osmanlı anayasası hangisidir?", ["Mecelle", "Misak-ı Millî", "Kanun-i Esasi", "Tanzimat Fermanı"], "C", "Kanun-i Esasi 1876'da ilan edildi."),
    (3, "II. Meşrutiyet hangi yıl ilan edildi?", ["1876", "1878", "1909", "1908"], "D", "1908 anayasal hayatın yeniden başlamasıdır."),
    (3, "31 Mart Vakası'nı bastıran güç hangisidir?", ["Hareket Ordusu", "Kuvâ-yı Milliye", "Asakir-i Mansure", "Temsil Heyeti"], "A", "1909 ayaklanması Hareket Ordusu'nca bastırıldı."),
    (4, "Ortak Osmanlı vatandaşlığını savunan akım hangisidir?", ["İslamcılık", "Osmanlıcılık", "Batıcılık", "Turancılık"], "B", "Osmanlıcılık ortak vatandaşlık/bağlılık fikridir."),
    (4, "II. Meşrutiyet sürecinde etkili siyasal örgüt hangisidir?", ["Düyun-ı Umumiye", "Müdafaa-i Hukuk", "İttihat ve Terakki", "Temsil Heyeti"], "C", "İttihat ve Terakki 1908 hareketinde belirleyiciydi."),
    (4, "Türk dil ve kültür birliğini vurgulayan akım hangisidir?", ["Batıcılık", "Osmanlıcılık", "İslamcılık", "Türkçülük"], "D", "Türkçülük dil, tarih ve kültür ortaklığını öne çıkarır."),
    (5, "1841 Londra Sözleşmesi hangi meseleyle ilgilidir?", ["Boğazlar", "Mısır borçları", "Kapitülasyonlar", "Trablusgarp"], "A", "Boğazların uluslararası statüsü düzenlendi."),
    (5, "1877-78 Osmanlı-Rus Savaşı sonrası büyük diplomatik düzenleme hangisidir?", ["Uşi", "Berlin", "Mudanya", "Lozan"], "B", "Berlin Kongresi/Antlaşması 1878 sonrasını düzenledi."),
    (5, "Trablusgarp Savaşı'nın karşı tarafı hangisidir?", ["Rusya", "Fransa", "İtalya", "Yunanistan"], "C", "1911-12 savaşının karşı tarafı İtalya'ydı."),
    (6, "Osmanlı'nın ilk dış borçlanması hangi savaş dönemindedir?", ["Balkan Savaşları", "I. Dünya Savaşı", "93 Harbi", "Kırım Savaşı"], "D", "İlk dış borç 1854'te Kırım Savaşı sırasında alındı."),
    (6, "1881'de borçlara karşı gelirleri yöneten idare hangisidir?", ["Düyun-ı Umumiye", "İrad-ı Cedit", "Temsil Heyeti", "Meclis-i Mebusan"], "A", "Düyun-ı Umumiye 1881 Muharrem Kararnamesi ile kuruldu."),
    (6, "Yerli sermaye ve üreticiyi destekleme yaklaşımı hangisidir?", ["Osmanlıcılık", "Millî iktisat", "Manda", "Meşrutiyet"], "B", "Millî iktisat yerli girişim ve şirketleşmeyi öne çıkarır."),
    (7, "Birinci Dünya Savaşı'nı tetikleyen olay nedir?", ["Mondros", "Çanakkale", "Saraybosna suikastı", "Sevr"], "C", "Saraybosna suikastı 1914'te savaşın kıvılcımıydı."),
    (7, "Osmanlı'nın savunmada büyük başarı kazandığı cephe hangisidir?", ["Kanal", "Kafkas", "Irak", "Çanakkale"], "D", "Çanakkale savunması İtilaf taarruzunu durdurdu."),
    (7, "Osmanlı'nın I. Dünya Savaşı'ndan çekildiği belge hangisidir?", ["Mondros", "Mudanya", "Lozan", "Gümrü"], "A", "30 Ekim 1918 Mondros Mütarekesi savaştan çekilmedir."),
    (8, "Ermeni meselesini uluslararası diplomasi gündemine taşıyan 1878 antlaşması hangisidir?", ["Paris", "Berlin", "Gümrü", "Kars"], "B", "Berlin Antlaşması reform konusunu uluslararasılaştırdı."),
    (8, "Kitabın 24 Nisan 1915 kronolojisinde hangi olay yer alır?", ["Sevk ve İskân Kanunu", "Berlin Kongresi", "Tutuklamalar", "Geri dönüş kararı"], "C", "24 Nisan İstanbul'daki Ermeni ileri gelenlerine yönelik tutuklamalarla ilişkilidir."),
    (8, "Sevk ve İskân Kanunu hangi tarihle ilişkilidir?", ["1863", "1878", "24 Nisan 1915", "27 Mayıs 1915"], "D", "Kitap 27 Mayıs 1915'i kanun tarihi olarak verir."),
    (9, "Mondros'un işgallere dayanak yapılan hükmü hangi maddedir?", ["7.", "1.", "3.", "12."], "A", "7. madde güvenlik gerekçeli işgallerde kullanıldı."),
    (9, "İzmir'in işgal tarihi nedir?", ["19 Mayıs 1919", "15 Mayıs 1919", "23 Nisan 1920", "16 Mart 1920"], "B", "İzmir 15 Mayıs 1919'da işgal edildi."),
    (9, "Mustafa Kemal Paşa ne zaman Samsun'a çıktı?", ["30 Ekim 1918", "15 Mayıs 1919", "19 Mayıs 1919", "22 Haziran 1919"], "C", "Samsun'a çıkış 19 Mayıs 1919'dur."),
    (10, "'Milletin azim ve kararı' vurgusu hangi belgededir?", ["Havza", "Sivas", "Misak-ı Millî", "Amasya Genelgesi"], "D", "Amasya Genelgesi millî iradeyi çözümün temeline koydu."),
    (10, "Millî cemiyetlerin birleştiği kongre hangisidir?", ["Sivas", "Erzurum", "Balıkesir", "Alaşehir"], "A", "Sivas'ta Anadolu ve Rumeli Müdafaa-i Hukuk çatısı kuruldu."),
    (10, "Misak-ı Millî hangi mecliste kabul edildi?", ["I. TBMM", "Son Osmanlı Meclis-i Mebusanı", "Temsil Heyeti", "Saltanat Şurası"], "B", "28 Ocak 1920'de son Osmanlı Meclisi kabul etti."),
    (11, "TBMM'nin açılış tarihi hangisidir?", ["16 Mart 1920", "20 Ocak 1921", "23 Nisan 1920", "12 Mart 1921"], "C", "TBMM 23 Nisan 1920'de açıldı."),
    (11, "'Egemenlik kayıtsız şartsız milletindir' hangi anayasa ilkesiyle ilişkilidir?", ["Kanun-i Esasi", "Mecelle", "Islahat Fermanı", "1921 Teşkilat-ı Esasiye"], "D", "1921 Anayasası millî egemenliği öne çıkarır."),
    (11, "İstiklal Marşı ne zaman kabul edildi?", ["12 Mart 1921", "23 Nisan 1920", "29 Ekim 1923", "30 Ağustos 1922"], "A", "Meclis 12 Mart 1921'de kabul etti."),
    (12, "Sakarya öncesi ordunun ihtiyaçları için hangi emirler çıkarıldı?", ["Nizam-ı Cedit", "Tekâlif-i Milliye", "Islahat Fermanı", "Misak-ı Millî"], "B", "Tekâlif-i Milliye olağanüstü malzeme/ulaşım yükümlülükleridir."),
    (12, "Millî Mücadele'de başlıca dış yardımlardan biri hangi devlettendir?", ["İngiltere", "Yunanistan", "Sovyet Rusya", "ABD"], "C", "Sovyet Rusya para ve askerî malzeme desteği sağladı."),
    (12, "Mücadelenin temel iç mali dayanağı hangisidir?", ["Kapitülasyonlar", "Düyun-ı Umumiye", "Sevr kredisi", "Anadolu halkının katkıları"], "D", "Vergi, bağış ve malzeme katkısı ağırlıklı iç dayanaktı."),
    (13, "Doğu Cephesi komutanı kimdir?", ["Kazım Karabekir", "İsmet İnönü", "Ali Fuat Cebesoy", "Rauf Orbay"], "A", "Doğu harekâtında Kazım Karabekir komutandaydı."),
    (13, "Yunan ilerleyişini durduran büyük meydan muharebesi hangisidir?", ["I. İnönü", "Sakarya", "Kütahya-Eskişehir", "Çanakkale"], "B", "Sakarya Meydan Muharebesi ilerleyişi durdurdu."),
    (13, "30 Ağustos 1922 hangi olayla ilişkilidir?", ["Mondros", "Mudanya", "Başkomutanlık Meydan Muharebesi", "Lozan"], "C", "30 Ağustos kesin askerî zaferin tarihidir."),
    (14, "Fransa ile 20 Ekim 1921'de hangi antlaşma yapıldı?", ["Kars", "Moskova", "Gümrü", "Ankara"], "D", "Ankara Antlaşması Fransa ile yapıldı."),
    (14, "11 Ekim 1922 tarihli ateşkes hangisidir?", ["Mudanya", "Mondros", "Sevr", "Lozan"], "A", "Mudanya silahlı çatışmayı bitiren mütarekedir."),
    (14, "Lozan Barış Antlaşması'nın imza tarihi hangisidir?", ["1 Kasım 1922", "24 Temmuz 1923", "20 Kasım 1922", "24 Ağustos 1923"], "B", "Lozan 24 Temmuz 1923'te imzalandı."),
]

randomizer = Random(260926)
mixed_questions = []
for unit, question, options, answer, reason in QUESTIONS:
    correct_option = options["ABCD".index(answer)]
    mixed_options = options.copy()
    randomizer.shuffle(mixed_options)
    mixed_answer = "ABCD"[mixed_options.index(correct_option)]
    mixed_questions.append((unit, question, mixed_options, mixed_answer, reason))
QUESTIONS = mixed_questions


def footer(canvas, doc):
    canvas.saveState()
    w, h = A4
    canvas.setStrokeColor(LINE)
    canvas.setLineWidth(.5)
    canvas.line(18 * mm, h - 15 * mm, w - 18 * mm, h - 15 * mm)
    canvas.line(18 * mm, 14 * mm, w - 18 * mm, 14 * mm)
    canvas.setFont("Arial-Bold", 7.4)
    canvas.setFillColor(NAVY)
    canvas.drawString(18 * mm, h - 11.2 * mm, "ATATÜRK İLKELERİ VE İNKILAP TARİHİ I")
    canvas.setFont("Arial", 7.4)
    canvas.setFillColor(MUTED)
    canvas.drawRightString(w - 18 * mm, h - 11.2 * mm, "14 ÜNİTE ÇALIŞMA NOTLARI")
    canvas.drawString(18 * mm, 10.5 * mm, "Kronoloji  •  kavram  •  neden-sonuç  •  deneme")
    canvas.drawRightString(w - 18 * mm, 10.5 * mm, f"Sayfa {doc.page}")
    canvas.restoreState()


story = []
story += [Spacer(1, 33 * mm), P("ATATÜRK İLKELERİ VE<br/>İNKILAP TARİHİ I", "CoverX"),
          P("14 ünite için sınav odaklı çalışma notları", "CoverSubX")]
box(story, "BU DOSYADA", "Her ünite için temel olaylar, neden-sonuç zincirleri, sınavda karışan ayrımlar ve kısa kontrol soruları; toplu kronoloji ve 42 soruluk cevap anahtarlı deneme bulunur.")
story.append(Spacer(1, 11 * mm))
story.append(P("Nasıl çalışmalı?", "SectionX"))
for x in ["Her üniteyi okurken tarih, olay, neden ve sonucu birlikte söyle.",
          "Benzer belgeleri (Mondros/Mudanya; Sevr/Lozan; Tanzimat/Islahat) karşılaştırarak tekrar et.",
          "Denemede yanlış yaptığın sorunun ünite sayfasındaki 'Sınav odağı' bölümüne dön."]:
    story.append(P("• " + x, "BulletX"))
story.append(Spacer(1, 7 * mm))
box(story, "KAYNAK VE YORUM", "Notlar, sağlanan <b>Atatürk İlkeleri ve İnkılap Tarihi I</b> e-kitabının 14 ünitesini temel alır; metnin yönlendirmeleri çalışma talimatı sayılmamıştır. Özellikle tartışmalı tarihsel değerlendirmeler olay ve tarihlerden ayrı belirtilmiştir. Kitap PDF sayfa aralıkları her ünitede gösterilir.", PALE2)
story.append(PageBreak())

for unit in UNITS:
    story.append(P(f"ÜNİTE {unit['n']:02d}  /  KİTAP PDF s. {unit['pages']}", "KickerX"))
    story.append(P(unit["title"], "UnitTitleX"))
    box(story, "BU ÜNİTEDE YAPABİLMELİSİN", unit["goal"])
    sect(story, "Temel bilgiler ve neden-sonuç", unit["core"])
    sect(story, "Sınav odağı", unit["focus"])
    story.append(P("Kendini yokla", "SectionX"))
    for q, a in unit["check"]:
        story.append(P(f"<b>{escape(q)}</b> {escape(a)}", "SmallX"))
    if unit.get("extra"):
        story.append(Spacer(1, 2 * mm))
        story.append(P(unit["extra"], "SmallX"))
    story.append(PageBreak())

story.append(P("SON TEKRAR", "KickerX"))
story.append(P("Kronoloji: modernleşmeden Millî Mücadele'ye", "UnitTitleX"))
table(story, ["Tarih", "Olay", "Sınavda anlamı"], [
    ("1718-1730", "Lale Devri", "Erken kültürel/teknik açılım; Patrona Halil ile sona erdi."),
    ("1789-1807", "III. Selim", "Nizam-ı Cedit reformları."),
    ("1826", "Vaka-i Hayriye", "Yeniçeri Ocağı kaldırıldı."),
    ("1839 / 1856", "Tanzimat / Islahat", "Hukuki-idari güvence / gayrimüslim statüsü."),
    ("1876 / 1908", "I. / II. Meşrutiyet", "Anayasanın ilk ilanı / yeniden işletilmesi."),
    ("1914-1918", "Birinci Dünya Savaşı", "Osmanlı İttifak safında; Mondros ile çekildi."),
    ("30 Ekim 1918", "Mondros", "Savaştan çekilme, işgallere zemin."),
    ("15 / 19 Mayıs 1919", "İzmir / Samsun", "İşgale tepki / millî örgütlenme başlangıcı."),
    ("Haz.-Eyl. 1919", "Amasya, Erzurum, Sivas", "Millî irade ve örgüt birliği."),
    ("23 Nisan 1920", "TBMM", "Ankara'da millî karar merkezi."),
    ("1921", "Anayasa, İnönü, Sakarya", "Millî egemenlik ve askerî dönüm noktaları."),
    ("30 Ağustos 1922", "Başkomutanlık Meydan Muharebesi", "Kesin askerî zafer."),
    ("11 Ekim 1922", "Mudanya", "Ateşkes; barış görüşmelerine geçiş."),
    ("24 Temmuz 1923", "Lozan", "Barış antlaşması ve uluslararası tanınma."),
], [29 * mm, 64 * mm, 81 * mm])
story.append(PageBreak())

story.append(P("SON TEKRAR", "KickerX"))
story.append(P("Karıştırılan belgeler ve kavramlar", "UnitTitleX"))
table(story, ["İki kavram", "Ayrım"], [
    ("Nizam-ı Cedit / İrad-ı Cedit", "Reform-ordu programı / bu programın mali kaynağı."),
    ("Tanzimat / Islahat", "1839 genel hukuk-idare güvenceleri / 1856 gayrimüslim statüsü ve eşitlik."),
    ("I. / II. Meşrutiyet", "1876 ilk ilan / 1908 yeniden ilan."),
    ("Müdafaa-i Hukuk / Kuvâ-yı Milliye", "Siyasi-toplumsal örgüt / silahlı yerel direniş."),
    ("Erzurum / Sivas", "Bölgesel toplantı, millî kararlar / ülke çapında cemiyet birliği."),
    ("Mondros / Mudanya", "1918 savaştan çekilme / 1922 Kurtuluş Savaşı ateşkesi."),
    ("Sevr / Lozan", "1920 TBMM'nin reddettiği ağır metin / 1923 barış antlaşması."),
    ("Gümrü / Ankara Antlaşması", "Doğu Cephesi sonucu / Fransa ile Güney Cephesi sonucu."),
], [67 * mm, 107 * mm])
story.append(Spacer(1, 8 * mm))
box(story, "ÇALIŞMA TAKTİĞİ", "Bir olay sorulduğunda dört parçalı cevap ver: <b>ne zaman?</b> <b>kimler arasında?</b> <b>niçin?</b> <b>hangi sonucu doğurdu?</b> Antlaşma sorusunda ayrıca belge türünü (ferman, anayasa, mütareke, barış antlaşması) söyle.", PALE2)
story.append(PageBreak())

story.append(P("GENEL DENEME", "KickerX"))
story.append(P("42 özgün soru", "UnitTitleX"))
story.append(P("Her üniteden üç soru vardır. Önce cevapları kapatıp çöz, sonra gerekçeli anahtarı kontrol et.", "SmallX"))
last = 0
for i, (unit, question, options, answer, reason) in enumerate(QUESTIONS, 1):
    if unit != last:
        story.append(P(f"Ünite {unit}", "SectionX"))
        last = unit
    story.append(P(f"<b>{i}.</b> {escape(question)}", "QX"))
    story.append(P(" &nbsp;&nbsp; ".join(f"<b>{letter})</b> {escape(opt)}" for letter, opt in zip("ABCD", options)), "SmallX"))
    story.append(Spacer(1, 3 * mm))
story.append(PageBreak())

story.append(P("CEVAP ANAHTARI", "KickerX"))
story.append(P("Gerekçeli cevaplar", "UnitTitleX"))
for i, (unit, question, options, answer, reason) in enumerate(QUESTIONS, 1):
    story.append(P(f"<b>{i}. {answer}</b> - {escape(reason)}", "AX"))
box(story, "SON KONTROL", "Yanlışlarını üniteye göre grupla. Özellikle <b>ferman-anayasa-mütareke-antlaşma</b> türlerini ve <b>1919-1923 kronolojisini</b> yeniden sırala.", PALE2)

doc = SimpleDocTemplate(str(OUT), pagesize=A4, rightMargin=18 * mm,
                        leftMargin=18 * mm, topMargin=21 * mm, bottomMargin=18 * mm,
                        title="Atatürk İlkeleri ve İnkılap Tarihi I - Çalışma Notları",
                        author="OpenAI Codex", subject="E-kitaba dayalı 14 ünite çalışma notları")
doc.build(story, onFirstPage=footer, onLaterPages=footer)
print(OUT)
