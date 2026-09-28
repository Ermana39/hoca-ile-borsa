from pathlib import Path
from xml.sax.saxutils import escape

from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, PageBreak,
)


ROOT = Path(__file__).resolve().parents[2]
OUTPUT = ROOT / "output" / "pdf" / "yabanci-dil-1-calisma-notlari.pdf"
OUTPUT.parent.mkdir(parents=True, exist_ok=True)
FONT_DIR = Path(r"C:\Windows\Fonts")
pdfmetrics.registerFont(TTFont("Arial", str(FONT_DIR / "arial.ttf")))
pdfmetrics.registerFont(TTFont("Arial-Bold", str(FONT_DIR / "arialbd.ttf")))
pdfmetrics.registerFontFamily("Arial", normal="Arial", bold="Arial-Bold")

NAVY = colors.HexColor("#17324D")
BLUE = colors.HexColor("#235B82")
TEAL = colors.HexColor("#087A77")
INK = colors.HexColor("#1C2933")
MUTED = colors.HexColor("#5A6975")
PALE = colors.HexColor("#EDF5F8")
LINE = colors.HexColor("#CCD9E1")
WHITE = colors.white

styles = getSampleStyleSheet()
styles.add(ParagraphStyle(name="Cover", fontName="Arial-Bold", fontSize=26, leading=32,
                          alignment=TA_CENTER, textColor=NAVY, spaceAfter=14))
styles.add(ParagraphStyle(name="CoverSub", fontName="Arial", fontSize=12, leading=18,
                          alignment=TA_CENTER, textColor=BLUE, spaceAfter=16))
styles.add(ParagraphStyle(name="UnitTitle", fontName="Arial-Bold", fontSize=17.5, leading=22,
                          textColor=NAVY, spaceAfter=5))
styles.add(ParagraphStyle(name="Kicker", fontName="Arial-Bold", fontSize=8, leading=11,
                          textColor=TEAL, spaceAfter=4))
styles.add(ParagraphStyle(name="Section", fontName="Arial-Bold", fontSize=10.5, leading=14,
                          textColor=BLUE, spaceBefore=8, spaceAfter=4))
styles.add(ParagraphStyle(name="Body", fontName="Arial", fontSize=10, leading=14.5,
                          textColor=INK, spaceAfter=5))
styles.add(ParagraphStyle(name="BulletTR", fontName="Arial", fontSize=9.6, leading=13.8,
                          textColor=INK, leftIndent=10, firstLineIndent=-7, spaceAfter=3))
styles.add(ParagraphStyle(name="Small", fontName="Arial", fontSize=8.7, leading=11.8,
                          textColor=MUTED, spaceAfter=4))
styles.add(ParagraphStyle(name="TableHead", fontName="Arial-Bold", fontSize=8.3,
                          leading=11, textColor=WHITE))
styles.add(ParagraphStyle(name="TableCell", fontName="Arial", fontSize=8.2,
                          leading=11.3, textColor=INK))
styles.add(ParagraphStyle(name="Answer", fontName="Arial", fontSize=9,
                          leading=12.8, textColor=INK, spaceAfter=3))


def P(text, style="Body"):
    return Paragraph(text.replace("–", "-").replace("—", "-"), styles[style])


def section(story, title, entries):
    if title:
        story.append(P(title, "Section"))
    for item in entries:
        story.append(P("• " + item, "BulletTR"))


def box(story, title, body, color=PALE):
    t = Table([[P(title, "Kicker")], [P(body, "Body")]], colWidths=[176 * mm])
    t.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), color),
        ("BOX", (0, 0), (-1, -1), 0.5, LINE),
        ("LEFTPADDING", (0, 0), (-1, -1), 8),
        ("RIGHTPADDING", (0, 0), (-1, -1), 8),
        ("TOPPADDING", (0, 0), (-1, 0), 7),
        ("BOTTOMPADDING", (0, -1), (-1, -1), 3),
    ]))
    story.append(t)


UNITS = [
    dict(n=1, title="Around the World", pages="3–16", goal="Ülke ve milliyet söylemek; to be ile kendini ve başkalarını tanıtmak.",
         rules=[
             "<b>Olumlu:</b> I <b>am</b>; he/she/it <b>is</b>; you/we/they <b>are</b>. Kısaltmalar: I’m, he’s, she’s, it’s, you’re, we’re, they’re.",
             "<b>Olumsuz:</b> am/is/are + <b>not</b>. She isn’t Turkish. They aren’t students.",
             "<b>Soru:</b> <b>Am/Is/Are + özne</b>? Are you from Japan? — Yes, I am. / No, I’m not.",
             "<b>Ülke–milliyet:</b> I am from Turkey. I am Turkish. <i>From</i> sonrasında ülke; <i>am/is/are</i> sonrasında milliyet gelir.",
         ],
         vocab="Turkey–Turkish; Germany–German; France–French; Spain–Spanish; Japan–Japanese; Brazil–Brazilian; the USA–American; the UK–British. country = ülke; nationality = milliyet; continent = kıta.",
         trap="<b>Yanlış:</b> She are French / I am from Turkish. <b>Doğru:</b> She is French / I am from Turkey.",
         quiz=["She ___ a teacher. (am/is/are)", "___ they from Brazil? (Am/Is/Are)", "I am from Japan. I am ___."],
         answers="1 is · 2 Are · 3 Japanese"),
    dict(n=2, title="Saying Hello", pages="17–30", goal="Selamlaşmak, kişisel bilgi sormak ve ad hecelemek.",
         rules=[
             "<b>Selamlaşma:</b> Hello / Hi; Good morning / afternoon / evening; Nice to meet you. — Nice to meet you, too.",
             "<b>Bilgi soruları:</b> <b>What/Where/Who/How/When + am/is/are + özne</b>? What is your name? Where are you from? How old are you?",
             "<b>Heceleme:</b> How do you spell your surname? — A-R-S-L-A-N. <b>İletişim:</b> What’s your phone number / address / email address?",
             "<b>Kısa cevap:</b> My name is Zeynep. I’m 20 years old. My birthday is in May. <i>How old</i> yaş; <i>Where</i> yer; <i>When</i> zaman sorar.",
         ],
         vocab="first name = ad; surname / last name = soyadı; age = yaş; date of birth = doğum tarihi; address = adres; phone number = telefon numarası; student = öğrenci.",
         trap="<b>Yanlış:</b> Where you are from? <b>Doğru:</b> Where are you from? Soru sözcüğünden sonra to be gelir.",
         quiz=["___ is your name? (What/Where)", "How ___ you spell Ali? (do/are)", "Where ___ she from? (is/are)"],
         answers="1 What · 2 do · 3 is"),
    dict(n=3, title="Time and Date", pages="31–45", goal="Sayıları, günleri, ayları, tarihleri ve saatleri söylemek.",
         rules=[
             "<b>Sıra sayıları:</b> first (1st), second (2nd), third (3rd); sonra genelde -th: fourth (4th), fifth (5th), twentieth (20th), twenty-first (21st).",
             "<b>Tarih:</b> When is your birthday? — It’s on June 26th. Günler: Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday. Hafta sonu: Saturday ve Sunday.",
             "<b>Saat:</b> 10:00 ten o’clock; 10:15 a quarter past ten; 10:30 half past ten; 10:45 a quarter to eleven; 10:55 five to eleven.",
             "<b>Sayı:</b> 560 = five hundred and sixty. 1,000 = one thousand; 1,000,000 = one million.",
         ],
         vocab="January, February, March, April, May, June, July, August, September, October, November, December. noon = öğlen; midnight = gece yarısı; weekday = hafta içi gün.",
         trap="<b>10:45</b> için <i>a quarter to eleven</i> denir: <i>to</i> sonraki saate kalan dakikayı belirtir.",
         quiz=["3rd = ___ (third/three)", "10:15 = a quarter ___ ten. (past/to)", "560 = five hundred and ___."],
         answers="1 third · 2 past · 3 sixty"),
    dict(n=4, title="Hobbies and Interests", pages="46–60", goal="Şu anda olan işleri present continuous ile anlatmak.",
         rules=[
             "<b>Yapı:</b> <b>am/is/are + fiil-ing</b>. I am reading. She is playing. They are studying.",
             "<b>Olumsuz:</b> She isn’t sleeping. <b>Soru:</b> Is she sleeping? — Yes, she is. / No, she isn’t.",
             "<b>Zaman ipuçları:</b> now, right now, at the moment, today. What are you doing? — I’m watching a film.",
             "<b>Yazım:</b> make → making (-e düşer); run → running (son ünsüz çiftlenir); study → studying (y korunur).",
         ],
         vocab="read = okumak; write = yazmak; watch = izlemek; listen = dinlemek; play = oynamak; study = ders çalışmak; swim = yüzmek; cook = yemek yapmak.",
         trap="<b>Yanlış:</b> She playing / Are he studying? <b>Doğru:</b> She is playing / Is he studying?",
         quiz=["Amy ___ playing in her room. (is/are)", "I ___ not coming with you. (am/is)", "Look! They are ___ . (run/running)"],
         answers="1 is · 2 am · 3 running"),
    dict(n=5, title="Life and Learning", pages="61–72", goal="Sevilen ve sevilmeyen etkinlikleri; bölüm ve kulüpleri ifade etmek.",
         rules=[
             "<b>Tercih:</b> <b>like / love / hate + fiil-ing</b>. I like learning English. She loves reading. They hate waiting.",
             "<b>Üçüncü tekil:</b> He <b>likes</b> playing chess. She <b>doesn’t like</b> swimming. Does she like studying?",
             "<b>Tercih yoğunluğu:</b> love (çok severim) &gt; like (severim) &gt; don’t like (sevmem) &gt; hate (nefret ederim).",
             "<b>Bölüm sorusu:</b> What is she studying? — She is studying medicine. <i>Now</i> şimdiki zaman ipucudur: We are having a great time now.",
         ],
         vocab="medicine = tıp; history = tarih; economics = ekonomi; law = hukuk; fashion design = moda tasarımı; club = kulüp; subject = ders/alan.",
         trap="<b>Yanlış:</b> I like play football. <b>Doğru:</b> I like playing football. <i>Like/love/hate</i> sonrasında -ing kullan.",
         quiz=["I love ___ books. (read/reading)", "She ___ dancing. (like/likes)", "We are having fun ___. (now/yesterday)"],
         answers="1 reading · 2 likes · 3 now"),
    dict(n=6, title="Daily Routines", pages="73–86", goal="Alışkanlıkları simple present ile kurmak.",
         rules=[
             "<b>Kullanım:</b> her gün yapılan işler, alışkanlıklar, genel doğrular. I get up at 7 every day.",
             "<b>Olumlu:</b> I/you/we/they <b>work</b>; he/she/it <b>works</b>. He goes to school. She studies English. (-s, -es, -ies)",
             "<b>Olumsuz:</b> I <b>don’t work</b>; she <b>doesn’t work</b>. <b>Soru:</b> Do you work? Does she work?",
             "<b>Does ile fiil yalın:</b> Does Ali <b>go</b>? / Ali doesn’t <b>go</b>. <i>Goes</i> yalnızca olumlu cümlede kullanılır.",
         ],
         vocab="get up = kalkmak; take a shower = duş almak; have breakfast = kahvaltı etmek; leave home = evden çıkmak; go to work/school = işe/okula gitmek; have dinner = akşam yemeği yemek; go to bed = yatmak.",
         trap="<b>Yanlış:</b> She don’t go / Does she goes? <b>Doğru:</b> She doesn’t go / Does she go?",
         quiz=["He ___ up at seven. (get/gets)", "She doesn’t ___ on Sundays. (work/works)", "___ they have breakfast? (Do/Does)"],
         answers="1 gets · 2 work · 3 Do"),
    dict(n=7, title="Daily Life", pages="87–99", goal="Geniş zamanda soru, olumsuzluk ve kısa cevap vermek.",
         rules=[
             "<b>Do / does seçimi:</b> Do I/you/we/they...? Does he/she/it...? Does Pelin like the beach?",
             "<b>Kısa cevap:</b> Yes, I do. / No, I don’t. Yes, she does. / No, she doesn’t.",
             "<b>Olumsuz:</b> I don’t want pizza. Pelin doesn’t like swimming. <i>Don’t/doesn’t</i> sonrasında fiil yalındır.",
             "<b>Wh soru:</b> Where do you live? What does he want? How do you go to school? — I go by bus.",
         ],
         vocab="prefer = tercih etmek; want = istemek; know = bilmek; live = yaşamak; by bus = otobüsle; on foot = yürüyerek; at home = evde.",
         trap="<b>Yanlış:</b> What she wants? <b>Doğru:</b> What does she want? Buradaki <i>does</i> fiilin -s ekini üstlenir.",
         quiz=["___ Pelin like swimming? (Do/Does)", "No, she ___. (doesn’t/don’t)", "How do you go to school? — ___ bus. (By/On)"],
         answers="1 Does · 2 doesn’t · 3 By"),
    dict(n=8, title="Lifestyles", pages="100–109", goal="Sıklık zarflarıyla rutinleri anlatmak.",
         rules=[
             "<b>Sıklık sırası:</b> always (%100), usually, often, sometimes, rarely, never (%0). Bunlar yaklaşık sıklık bildirir.",
             "<b>Yeri:</b> Asıl fiilden önce: She <b>usually walks</b> to school. <i>To be</i> sonrasında: He <b>is often</b> late.",
             "<b>Soru:</b> How often do you exercise? — I exercise twice a week. How does Mark usually go to school? — He usually walks.",
             "<b>Zaman ifadeleri:</b> once a week, twice a month, every day, on Mondays, in the morning.",
         ],
         vocab="always = her zaman; usually = genellikle; often = sık sık; sometimes = bazen; rarely = nadiren; never = asla/hiç; schedule = program.",
         trap="<b>Yanlış:</b> I eat never cheese. <b>Doğru:</b> I never eat cheese. <i>Never</i> zaten olumsuz anlam taşır.",
         quiz=["I ___ eat cheese; I hate it. (never/always)", "She is ___ late. (often/often is)", "How ___ do you read? (often/many)"],
         answers="1 never · 2 often · 3 often"),
    dict(n=9, title="In the Kitchen", pages="110–121", goal="Sayılabilir/sayılamayan yiyecekleri ve miktar ifadelerini seçmek.",
         rules=[
             "<b>Countable:</b> an apple, three apples; <b>uncountable:</b> water, rice, sugar, money. Bunlara doğrudan çoğul -s ekleme.",
             "<b>Soru:</b> <b>How many</b> apples? <b>How much</b> water? Many/a few + sayılabilir çoğul; much/a little + sayılamayan.",
             "<b>Some / any:</b> I have some eggs. I don’t have any milk. Do you have any bread? Teklif/istekte <i>some</i> de olabilir: Can I have some water?",
             "<b>There is/are:</b> There is an apple / some milk. There are two apples. Is there any sugar? Are there any eggs?",
             "<b>Ölçü:</b> a bottle of water, a kilo of potatoes, a slice of bread. Tariflerde <i>chop, peel, boil, fry, bake</i> gibi emir fiilleri kullanılır.",
         ],
         vocab="bread = ekmek; cheese = peynir; sugar = şeker; flour = un; egg = yumurta; onion = soğan; potato = patates; chop = doğramak; peel = soymak; boil = kaynatmak.",
         trap="<b>Yanlış:</b> many money / a few sugar. <b>Doğru:</b> much money / a little sugar.",
         quiz=["How ___ apples? (many/much)", "Can I have ___ sugar? (a few/a little)", "There ___ two eggs. (is/are)"],
         answers="1 many · 2 a little · 3 are"),
    dict(n=10, title="At the Restaurant", pages="122–134", goal="Kibarca sipariş vermek, istek ve memnuniyet belirtmek.",
         rules=[
             "<b>Menü:</b> Could I have a menu, please? — Here you are. <b>Sipariş:</b> I’d like the soup, please. / I’d like to have the chicken.",
             "<b>Garson:</b> What would you like? Would you like anything to drink? Can I get you anything else? — No, thank you.",
             "<b>Öneri ve tercih:</b> What would you recommend? Do you have any vegetarian dishes? I’d like my steak medium.",
             "<b>Yemek sonu:</b> How is the meal? — It’s perfect, thank you. I’d like the check, please. <i>I’d</i> = <i>I would</i>.",
         ],
         vocab="menu = menü; starter = başlangıç; main course = ana yemek; dessert = tatlı; bill/check = hesap; waiter = garson; vegetarian = vejetaryen; rare/medium/well done = az/orta/iyi pişmiş.",
         trap="<b>Yanlış:</b> I’d like have tea. <b>Doğru:</b> I’d like <b>to</b> have tea; veya I’d like tea.",
         quiz=["Could I have a menu? — ___ you are. (Here/There)", "I’d ___ the pasta. (like/likes)", "How is the meal? — It’s ___. (perfect/menu)"],
         answers="1 Here · 2 like · 3 perfect"),
    dict(n=11, title="Getting There", pages="135–145", goal="Emir cümlesi ve yol tarifi kurmak.",
         rules=[
             "<b>Olumlu emir:</b> Yalın fiille başlar: Turn left. Go straight on. Take the second street.",
             "<b>Olumsuz emir:</b> Don’t + yalın fiil: Don’t turn right. Don’t smoke here.",
             "<b>Yol sorma:</b> Excuse me, how do I get to the library? Where is the bank? Is it far from here?",
             "<b>Yol tarif etme:</b> Go straight on until the traffic lights. Turn right at the lights. The bank is on your left, across from the post office.",
         ],
         vocab="left = sol; right = sağ; straight on = dümdüz; traffic lights = trafik ışıkları; corner = köşe; opposite/across from = karşısında; next to = yanında; between = arasında.",
         trap="<b>Yanlış:</b> Don’t to turn left. <b>Doğru:</b> Don’t turn left. Emirden sonra fiil yalın gelir.",
         quiz=["___ straight on. (Go/Going)", "___ turn left. (Don’t/Doesn’t)", "The shop is ___ your right. (on/in)"],
         answers="1 Go · 2 Don’t · 3 on"),
    dict(n=12, title="On Location", pages="146–156", goal="Zaman ve yer için in/on/at seçmek; şehirdeki yerleri bilmek.",
         rules=[
             "<b>Zaman:</b> <b>at</b> 9 o’clock / night / noon; <b>on</b> Monday / 26 June; <b>in</b> May / 2026 / summer / the morning.",
             "<b>Yer:</b> <b>at</b> home / the bus stop (nokta); <b>in</b> the room / Istanbul (içinde, alan); <b>on</b> the table / the bus (yüzey, bazı taşıtlar).",
             "<b>Kalıplar:</b> on holiday, at school, in the afternoon, in the evening. We go to the beach in summer. We meet at night.",
             "<b>Mekân sözcükleri:</b> café (kahve içme), library (kitap), hospital (tedavi), grocery store (sebze/meyve), pharmacy (ilaç).",
         ],
         vocab="grocery store = bakkal/market; pharmacy = eczane; library = kütüphane; hospital = hastane; gas station = benzinlik; museum = müze; café = kafe.",
         trap="<b>Yanlış:</b> in Monday / on 7 o’clock. <b>Doğru:</b> on Monday / at 7 o’clock.",
         quiz=["I wake up ___ 9. (at/on/in)", "We go swimming ___ summer. (at/on/in)", "Buy bananas at the ___. (library/grocery store)"],
         answers="1 at · 2 in · 3 grocery store"),
    dict(n=13, title="At Work", pages="157–169", goal="Yapabilme anlamında can/can’t; meslek ve sıfatlarla tanıtım.",
         rules=[
             "<b>Yetenek:</b> I/you/he/she/we/they <b>can + yalın fiil</b>. She can drive. He can’t swim. <i>Can</i> özneye göre değişmez.",
             "<b>Soru:</b> Can you swim? — Yes, I can. / No, I can’t. Can she use a computer? — Yes, she can.",
             "<b>Sıfat:</b> isimden önce: a <b>clean</b> office; <i>to be</i> sonrasında: The office <b>is clean</b>. Sıfata çoğul -s gelmez.",
             "<b>İş:</b> A builder can build walls. A doctor can help patients. A driver can drive a bus.",
         ],
         vocab="builder = inşaatçı; doctor = doktor; driver = sürücü; skill = beceri; workplace = iş yeri; strong/weak = güçlü/zayıf; clean/dirty = temiz/kirli; expensive/cheap = pahalı/ucuz.",
         trap="<b>Yanlış:</b> She cans swim / He can to drive. <b>Doğru:</b> She can swim / He can drive.",
         quiz=["Can she ___? (swim/swims)", "No, I ___. (can/can’t)", "It is a ___ office. (clean/cleans)"],
         answers="1 swim · 2 can’t · 3 clean"),
    dict(n=14, title="Bigger and Better", pages="170–185; ek sorular 201–203", goal="İki şeyi karşılaştırmak ve bir grubun en üstününü söylemek.",
         rules=[
             "<b>Karşılaştırma:</b> kısa sıfat + <b>-er than</b>: Ali is taller than Ece. Uzun sıfat: <b>more ... than</b>: more expensive than.",
             "<b>Üstünlük:</b> <b>the + -est</b>: the tallest; uzun sıfatta <b>the most</b>: the most expensive. Genelde üç veya daha çok varlıkta en üstü belirtir.",
             "<b>Yazım:</b> nice→nicer→the nicest; big→bigger→the biggest; happy→happier→the happiest.",
             "<b>Düzensiz:</b> good→better→the best; bad→worse→the worst. Örnek: This book is better than that one. It is the best book here.",
         ],
         vocab="big/small = büyük/küçük; tall/short = uzun/kısa; easy/difficult = kolay/zor; cheap/expensive = ucuz/pahalı; old/young = yaşlı/genç; modern = modern.",
         trap="<b>Yanlış:</b> more better / the most tallest / bigger that. <b>Doğru:</b> better / the tallest / bigger than.",
         quiz=["This car is ___ than that car. (fast/faster)", "She is the ___ student. (tall/tallest)", "Good → better → the ___."],
         answers="1 faster · 2 tallest · 3 best"),
]

MODELS = {
    1: ["<b>I’m Turkish, but my friend is German.</b> - Ben Türküm ama arkadaşım Alman.",
        "<b>Are you a student?</b> - Öğrenci misin? <b>Yes, I am.</b> - Evet.",
        "<b>Where is she from?</b> - O nereli? <b>She is from France.</b> - Fransa’dan."],
    2: ["<b>What is your name?</b> - Adın ne? <b>My name is Ali.</b> - Adım Ali.",
        "<b>How old are you?</b> - Kaç yaşındasın? <b>I’m twenty.</b> - Yirmi yaşındayım.",
        "<b>How do you spell your surname?</b> - Soyadını nasıl hecelersin?"],
    3: ["<b>What time is it?</b> - Saat kaç? <b>It’s half past three.</b> - Üç buçuk.",
        "<b>When is your birthday?</b> - Doğum günün ne zaman? <b>On June 26th.</b> - 26 Haziran’da.",
        "<b>It’s a quarter to ten.</b> - Saat ona çeyrek var."],
    4: ["<b>What are you doing?</b> - Ne yapıyorsun? <b>I’m studying.</b> - Ders çalışıyorum.",
        "<b>Is she cooking now?</b> - Şimdi yemek yapıyor mu? <b>No, she isn’t.</b> - Hayır.",
        "<b>They are playing football at the moment.</b> - Şu anda futbol oynuyorlar."],
    5: ["<b>I love reading books.</b> - Kitap okumayı çok severim.",
        "<b>She doesn’t like dancing.</b> - Dans etmeyi sevmez.",
        "<b>Do you like learning English?</b> - İngilizce öğrenmeyi sever misin?"],
    6: ["<b>She gets up at seven every day.</b> - Her gün yedide kalkar.",
        "<b>Does he have breakfast?</b> - Kahvaltı eder mi? <b>Yes, he does.</b> - Evet.",
        "<b>I don’t go to work on Sundays.</b> - Pazar günleri işe gitmem."],
    7: ["<b>What does Pelin want?</b> - Pelin ne istiyor? <b>She wants a burger.</b> - Hamburger istiyor.",
        "<b>Do they live in Istanbul?</b> - İstanbul’da mı yaşıyorlar? <b>No, they don’t.</b> - Hayır.",
        "<b>He doesn’t like swimming.</b> - Yüzmeyi sevmez."],
    8: ["<b>I always drink tea at breakfast.</b> - Kahvaltıda her zaman çay içerim.",
        "<b>We sometimes go to the cinema.</b> - Bazen sinemaya gideriz.",
        "<b>How often do you exercise?</b> - Ne sıklıkla egzersiz yaparsın?"],
    9: ["<b>How many eggs are there?</b> - Kaç yumurta var? <b>There are three.</b> - Üç tane.",
        "<b>How much water do we need?</b> - Ne kadar suya ihtiyacımız var?",
        "<b>There isn’t any milk, but there are a few apples.</b> - Süt yok ama birkaç elma var."],
    10: ["<b>Could I have a menu, please?</b> - Bir menü alabilir miyim, lütfen?",
         "<b>I’d like the chicken and a glass of water.</b> - Tavuk ve bir bardak su istiyorum.",
         "<b>Can I get you anything else?</b> - Başka bir isteğiniz var mı?"],
    11: ["<b>How do I get to the library?</b> - Kütüphaneye nasıl giderim?",
         "<b>Go straight on and turn left.</b> - Düz gidin ve sola dönün.",
         "<b>It is across from the bank.</b> - Bankanın karşısındadır."],
    12: ["<b>We meet at 9 on Monday.</b> - Pazartesi saat dokuzda buluşuruz.",
         "<b>She is in the café.</b> - Kafededir. <b>The book is on the table.</b> - Kitap masanın üzerinde.",
         "<b>I go on holiday in summer.</b> - Yazın tatile giderim."],
    13: ["<b>Can you use a computer?</b> - Bilgisayar kullanabilir misin?",
         "<b>He can build walls, but he can’t drive a bulldozer.</b> - Duvar örebilir ama buldozer süremez.",
         "<b>It is a modern workplace.</b> - Burası modern bir iş yeridir."],
    14: ["<b>Ali is taller than Ece.</b> - Ali, Ece’den uzundur.",
         "<b>This is the most expensive bag.</b> - Bu en pahalı çantadır.",
         "<b>This book is better than that one.</b> - Bu kitap ötekinden daha iyidir."],
}


QUESTION_PATTERNS = {
    1: ["<b>Where are you from?</b> = Nerelisin?", "<b>Are you Turkish?</b> = Türk müsün?"],
    2: [
        "<b>What is your name?</b> = Adın ne? / Adınız nedir?",
        "<b>What is your surname / last name?</b> = Soyadın ne? / Soyadınız nedir?",
        "<b>Where are you from?</b> = Nerelisin? / Nerelisiniz?",
        "<b>Who is she?</b> = O kim?",
        "<b>How old are you?</b> = Kaç yaşındasın?",
        "<b>When is your birthday?</b> = Doğum günün ne zaman?",
        "<b>How do you spell your surname?</b> = Soyadını nasıl hecelersin?",
        "<b>What is your phone number / address / email address?</b> = Telefon numaran / adresin / e-posta adresin nedir?",
    ],
    3: ["<b>What time is it?</b> = Saat kaç?", "<b>When is your birthday?</b> = Doğum günün ne zaman?", "<b>What day is it?</b> = Bugün hangi gün?"],
    4: ["<b>What are you doing?</b> = Ne yapıyorsun?", "<b>Is she studying now?</b> = O şimdi ders çalışıyor mu?"],
    5: ["<b>What do you like doing?</b> = Ne yapmayı seversin?", "<b>What is she studying?</b> = O hangi bölümde okuyor / ne okuyor?"],
    6: ["<b>What time do you get up?</b> = Saat kaçta kalkarsın?", "<b>When does she go to work?</b> = O işe ne zaman gider?"],
    7: ["<b>Where do you live?</b> = Nerede yaşıyorsun?", "<b>What does he want?</b> = O ne istiyor?", "<b>How do you go to school?</b> = Okula nasıl gidersin?"],
    8: ["<b>How often do you exercise?</b> = Ne sıklıkla egzersiz yaparsın?", "<b>How does Mark usually go to school?</b> = Mark genellikle okula nasıl gider?"],
    9: ["<b>How many apples are there?</b> = Kaç elma var?", "<b>How much water do we need?</b> = Ne kadar suya ihtiyacımız var?", "<b>Is there any milk?</b> = Hiç süt var mı?"],
    10: ["<b>What would you like?</b> = Ne istersiniz?", "<b>Would you like anything to drink?</b> = İçecek bir şey ister misiniz?", "<b>How is the meal?</b> = Yemek nasıl?"],
    11: ["<b>How do I get to the library?</b> = Kütüphaneye nasıl giderim?", "<b>Where is the bank?</b> = Banka nerede?", "<b>Is it far from here?</b> = Buradan uzak mı?"],
    12: ["<b>Where is the pharmacy?</b> = Eczane nerede?", "<b>What time do you meet?</b> = Saat kaçta buluşursunuz?", "<b>When do you go on holiday?</b> = Ne zaman tatile gidersin?"],
    13: ["<b>Can you use a computer?</b> = Bilgisayar kullanabilir misin?", "<b>What can a builder do?</b> = Bir inşaatçı ne yapabilir?"],
    14: ["<b>Which car is faster?</b> = Hangi araba daha hızlı?", "<b>Who is the tallest student?</b> = En uzun öğrenci kim?", "<b>What is the most expensive item?</b> = En pahalı ürün hangisi?"],
}


EXAM = [
    (1, "My brother ___ from Italy.", "am", "is", "are", "be", "B", "brother = he; is"),
    (2, "___ they students?", "Is", "Am", "Are", "Do", "C", "they ile are"),
    (3, "___ is your surname?", "Where", "What", "When", "Who", "B", "isim için what"),
    (4, "How ___ you spell your name?", "are", "is", "do", "does", "C", "How do you spell ...?"),
    (5, "10:45 hangi ifadedir?", "quarter past ten", "half past ten", "quarter to eleven", "eleven o’clock", "C", "11’e çeyrek var"),
    (6, "1st, 2nd, 3rd sırası hangisi?", "one-two-three", "first-second-third", "first-two-third", "one-second-three", "B", "sıra sayıları"),
    (7, "Look! The children ___ in the garden.", "play", "plays", "are playing", "is playing", "C", "look; çoğul özne"),
    (8, "She ___ sleeping now.", "isn’t", "don’t", "doesn’t", "aren’t", "A", "şimdiki zaman: is not"),
    (9, "I like ___ English songs.", "listen", "listening to", "to listening", "listens", "B", "like + -ing; listen to"),
    (10, "He likes ___ football.", "play", "playing", "plays", "played", "B", "like + -ing"),
    (11, "My father ___ at 7 every day.", "get up", "gets up", "is get up", "getting up", "B", "rutin; he + -s"),
    (12, "Does she ___ to work by bus?", "go", "goes", "going", "to go", "A", "does ardından yalın fiil"),
    (13, "We ___ like coffee.", "doesn’t", "aren’t", "don’t", "isn’t", "C", "we ile don’t"),
    (14, "___ your sister live in Ankara?", "Do", "Does", "Is", "Are", "B", "she ile does"),
    (15, "I ___ watch TV because I don’t have one.", "always", "never", "often", "usually", "B", "hiç izlemem"),
    (16, "She ___ late for class.", "often is", "is often", "often are", "does often", "B", "sıklık zarfı be sonrası"),
    (17, "How ___ milk do we need?", "many", "much", "few", "a", "B", "milk sayılamaz"),
    (18, "There ___ three tomatoes.", "is", "are", "am", "be", "B", "çoğul ad: are"),
    (19, "Could I have a menu? — ___", "Here you are.", "It is delicious.", "I’m full.", "Turn right.", "A", "menü uzatılırken"),
    (20, "I’d like ___ a salad.", "have", "having", "to have", "has", "C", "would like to have"),
    (21, "___ left at the lights.", "Turning", "Turn", "Turns", "To turn", "B", "emir: yalın fiil"),
    (22, "___ cross the road here!", "Doesn’t", "Not", "Don’t", "Aren’t", "C", "olumsuz emir"),
    (23, "We meet ___ Monday.", "in", "on", "at", "to", "B", "günlerde on"),
    (24, "I have breakfast ___ 8 o’clock.", "in", "on", "at", "from", "C", "saatte at"),
    (25, "He can ___ a car.", "drives", "driving", "drive", "to drive", "C", "can + yalın fiil"),
    (26, "Can you swim? — No, I ___.", "can", "can’t", "don’t", "am not", "B", "can sorusunun kısa cevabı"),
    (27, "This bag is ___ than that one.", "heavy", "heavier", "the heaviest", "more heavier", "B", "iki varlık: heavier than"),
    (28, "She is ___ student in the class.", "tall", "taller", "the tallest", "more tall", "C", "gruptaki en üstün"),
]


def header_footer(canvas, doc):
    w, h = A4
    canvas.saveState()
    canvas.setStrokeColor(LINE)
    canvas.setLineWidth(.5)
    canvas.line(18 * mm, h - 15 * mm, w - 18 * mm, h - 15 * mm)
    canvas.setFont("Arial-Bold", 7.7)
    canvas.setFillColor(NAVY)
    canvas.drawString(18 * mm, h - 11.3 * mm, "YABANCI DİL I")
    canvas.setFont("Arial", 7.7)
    canvas.setFillColor(MUTED)
    canvas.drawRightString(w - 18 * mm, h - 11.3 * mm, "ÜNİTE ÇALIŞMA NOTLARI")
    canvas.line(18 * mm, 13 * mm, w - 18 * mm, 13 * mm)
    canvas.drawString(18 * mm, 8.5 * mm, "Konu özeti  •  örnek  •  pekiştirme")
    canvas.drawRightString(w - 18 * mm, 8.5 * mm, f"Sayfa {doc.page}")
    canvas.restoreState()


story = []
story += [Spacer(1, 35 * mm), P("YABANCI DİL I", "Cover"),
          P("14 ünite için sınav odaklı çalışma notları", "CoverSub")]
box(story, "BU NOTLAR NASIL KULLANILIR?",
    "Her ünitede temel kuralı, günlük kullanımdan örnekleri, gerekli kelimeleri ve sık yapılan hatayı oku. "
    "Ardından üç kısa soruyu çöz; cevabını kontrol et. Son bölümdeki 28 soruluk genel deneme ile tüm konuları tekrar et.")
story += [Spacer(1, 7 * mm), P("Kapsam", "Section"),
          P("Bu notlar, İstanbul Üniversitesi Açık ve Uzaktan Eğitim Fakültesi <i>Yabancı Dil I</i> e-kitabındaki "
            "14 ünitenin konu başlıkları ve ünite sonu soruları esas alınarak hazırlanmıştır. "
            "Sayfa aralıkları, sağlanan PDF’in sayfa sayacına göredir. Kitabın içindeki etkinlikler ve dinleme metinleri "
            "ayrıca çalışılırsa öğrenme pekişir."),
          P("Çalışma sırası", "Section")]
section(story, "", [
    "<b>1–3. üniteler:</b> to be, tanışma, sayılar, saat ve tarih.",
    "<b>4–8. üniteler:</b> şimdiki zaman, tercihler, geniş zaman, sıklık.",
    "<b>9–14. üniteler:</b> miktar, restoranda konuşma, yol tarifi, edatlar, can, karşılaştırma.",
])
story += [Spacer(1, 5 * mm)]
box(story, "DİL BİLGİSİNİ HIZLI AYIRT ET",
    "<b>Şu an:</b> am/is/are + V-ing → She is reading now.<br/>"
    "<b>Rutin:</b> simple present → She reads every day.<br/>"
    "<b>Yetenek:</b> can + yalın fiil → She can read.<br/>"
    "<b>Tercih:</b> like + V-ing → She likes reading.")
story.append(PageBreak())

for u in UNITS:
    story.append(P(f"ÜNİTE {u['n']:02d}  /  PDF s. {u['pages']}", "Kicker"))
    story.append(P(escape(u["title"]), "UnitTitle"))
    box(story, "BU ÜNİTEDE YAPABİLMELİSİN", escape(u["goal"]))
    section(story, "Temel kurallar", u["rules"])
    section(story, "Hazır cümleler", MODELS[u["n"]])
    section(story, "Soru kalıpları ve Türkçe karşılıkları", QUESTION_PATTERNS[u["n"]])
    story.append(P("Sözcük ve kalıplar", "Section"))
    story.append(P(u["vocab"]))
    story.append(P("Sınavda dikkat", "Section"))
    story.append(P(u["trap"]))
    story.append(P("Kendini dene", "Section"))
    for i, q in enumerate(u["quiz"], 1):
        story.append(P(f"{i}. {escape(q)}", "BulletTR"))
    story.append(P("<b>Cevaplar:</b> " + escape(u["answers"]), "Small"))
    story.append(PageBreak())

story.append(P("SINAV İÇİN SORU KELİMELERİ", "Kicker"))
story.append(P("Soru kökünü hızlı anlama", "UnitTitle"))
story.append(P("Soru kelimesini doğru çevirmek, istenen cevabın kişi, yer, zaman, neden, miktar veya seçim olduğunu hemen gösterir."))
question_rows = [
    ["Kalıp", "Türkçe karşılığı", "Örnek"],
    ["What", "ne / hangi", "What is your name? = Adın ne?"],
    ["Where", "nerede / nereye / nereli", "Where are you from? = Nerelisin?"],
    ["Who", "kim", "Who is she? = O kim?"],
    ["When", "ne zaman", "When is your birthday? = Doğum günün ne zaman?"],
    ["Why", "neden / niçin", "Why are you late? = Neden geç kaldın?"],
    ["How", "nasıl", "How do you go to school? = Okula nasıl gidersin?"],
    ["Which", "hangi / hangisi", "Which bag is yours? = Hangi çanta senin?"],
    ["Whose", "kimin", "Whose book is this? = Bu kimin kitabı?"],
    ["How old", "kaç yaşında", "How old are you? = Kaç yaşındasın?"],
    ["How many", "kaç tane", "How many eggs? = Kaç yumurta?"],
    ["How much", "ne kadar", "How much water? = Ne kadar su?"],
    ["How often", "ne sıklıkla", "How often do you exercise? = Ne sıklıkla egzersiz yaparsın?"],
    ["What time", "saat kaç / saat kaçta", "What time do you get up? = Saat kaçta kalkarsın?"],
]
qt = Table([[P(escape(c), "TableHead" if i == 0 else "TableCell") for c in row]
            for i, row in enumerate(question_rows)], colWidths=[31 * mm, 46 * mm, 99 * mm], repeatRows=1)
qt.setStyle(TableStyle([
    ("BACKGROUND", (0, 0), (-1, 0), NAVY),
    ("ROWBACKGROUNDS", (0, 1), (-1, -1), [WHITE, PALE]),
    ("GRID", (0, 0), (-1, -1), .4, LINE),
    ("VALIGN", (0, 0), (-1, -1), "TOP"),
    ("LEFTPADDING", (0, 0), (-1, -1), 7),
    ("RIGHTPADDING", (0, 0), (-1, -1), 7),
    ("TOPPADDING", (0, 0), (-1, -1), 5),
    ("BOTTOMPADDING", (0, 0), (-1, -1), 5),
]))
story.append(qt)
story.append(Spacer(1, 5 * mm))
box(story, "KALIP SIRASI", "<b>To be sorusu:</b> soru kelimesi + am/is/are + özne: <i>Where are you from?</i><br/>"
    "<b>Geniş zaman sorusu:</b> soru kelimesi + do/does + özne + yalın fiil: <i>What does she want?</i><br/>"
    "<b>Şimdiki zaman sorusu:</b> soru kelimesi + am/is/are + özne + V-ing: <i>What are they doing?</i>")
story.append(PageBreak())

story.append(P("SON TEKRAR", "Kicker"))
story.append(P("En çok karışan yapılar", "UnitTitle"))
rows = [
    ["Konu", "Doğru kalıp", "Tipik yanlış"],
    ["To be", "She is Turkish. / Are they ready?", "She are / They is"],
    ["Şimdiki zaman", "She is reading now.", "She reading now."],
    ["Geniş zaman", "She works. / Does she work?", "Does she works?"],
    ["Tercih", "I like swimming.", "I like swim."],
    ["Sıklık", "He is often busy. / He often works.", "He often is busy."],
    ["Miktar", "many apples / much water", "many water"],
    ["Yetenek", "She can drive.", "She can drives."],
    ["Karşılaştırma", "bigger than / the biggest", "more bigger / biggest than"],
]
t = Table([[P(escape(c), "TableHead" if i == 0 else "TableCell") for c in row]
           for i, row in enumerate(rows)], colWidths=[33 * mm, 79 * mm, 64 * mm], repeatRows=1)
t.setStyle(TableStyle([
    ("BACKGROUND", (0, 0), (-1, 0), NAVY),
    ("ROWBACKGROUNDS", (0, 1), (-1, -1), [WHITE, PALE]),
    ("GRID", (0, 0), (-1, -1), .4, LINE),
    ("VALIGN", (0, 0), (-1, -1), "TOP"),
    ("LEFTPADDING", (0, 0), (-1, -1), 7),
    ("RIGHTPADDING", (0, 0), (-1, -1), 7),
    ("TOPPADDING", (0, 0), (-1, -1), 7),
    ("BOTTOMPADDING", (0, 0), (-1, -1), 7),
]))
story.append(t)
story.append(Spacer(1, 5 * mm))
story.append(P("Sınav sorusunu çözme yolu", "Section"))
section(story, "", [
    "Önce <b>zaman ipucunu</b> bul: <i>now</i> → şimdiki zaman; <i>every day/usually</i> → geniş zaman.",
    "Sonra <b>özneyi</b> bul: he/she/it için is, does ve olumlu geniş zamanda -s kullan.",
    "İsim sayılabiliyor mu diye bak: apples → many/a few; water → much/a little.",
    "Diyalogta konuşanın rolünü belirle: müşteri menü/sipariş/hesap ister; garson yanıt verir.",
    "Karşılaştırmada <i>than</i>; üstünlükte çoğu zaman <i>the</i> aranır.",
])
story.append(PageBreak())

story.append(P("GENEL DENEME", "Kicker"))
story.append(P("28 soruluk tekrar", "UnitTitle"))
story.append(P("Her üniteden iki soru vardır. Önce cevap anahtarına bakmadan çöz."))
for i, q in enumerate(EXAM, 1):
    _, stem, a, b, c, d, ans, why = q
    story.append(P(f"<b>{i}.</b> {escape(stem)}", "Body"))
    story.append(P(f"A) {escape(a)}  &nbsp;&nbsp; B) {escape(b)}  &nbsp;&nbsp; C) {escape(c)}  &nbsp;&nbsp; D) {escape(d)}", "Small"))
    if i == 14:
        story.append(PageBreak())

story.append(PageBreak())
story.append(P("GENEL DENEME", "Kicker"))
story.append(P("Cevap anahtarı", "UnitTitle"))
for i, q in enumerate(EXAM, 1):
    story.append(P(f"<b>{i:02d}. {q[6]}</b> - {escape(q[7])}", "Answer"))
story.append(Spacer(1, 4 * mm))
box(story, "SON KONTROL",
    "28 soruda yanlış yaptığın konunun ünite sayfasına dön. Özellikle <b>to be / do-does</b>, "
    "<b>present continuous / simple present</b>, <b>much / many</b> ve "
    "<b>comparative / superlative</b> ayrımlarını yeniden çalış.")

doc = SimpleDocTemplate(str(OUTPUT), pagesize=A4, rightMargin=18 * mm,
                        leftMargin=18 * mm, topMargin=20 * mm, bottomMargin=17 * mm,
                        title="Yabancı Dil I - Ünite Ünite Çalışma Notları",
                        author="OpenAI Codex", subject="Yabancı Dil I e-kitabı çalışma notları")
doc.build(story, onFirstPage=header_footer, onLaterPages=header_footer)
print(OUTPUT)
