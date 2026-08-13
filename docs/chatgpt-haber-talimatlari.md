# ChatGPT Haber Hazırlama Talimatı

Bu talimat, haber JSON'unu hazırlayan ayrı ChatGPT sohbetine güncel bir örnek
haber JSON'u ve resmî kaynaklarla birlikte verilmelidir. Çıktı yalnızca geçerli
JSON olmalı; açıklama, Markdown kod bloğu veya JSON dışında metin içermemelidir.

## Temel yaklaşım

- Resmî kaynaktaki doğrulanabilir bilgi ile editoryal değerlendirmeyi kesin biçimde ayır.
- Aynı olayı, rakamı veya açıklamayı girişte, kartlarda ve alt bölümlerde tekrar tekrar yazma.
- Kaynak özetinde bir bilgi bir kez açıklandıysa sonraki bölümde aynı bilgiyi yeniden anlatmak yerine anlamını ve etkisini açıkla.
- Haberi uzatmak için dolgu cümleleri, genel piyasa ifadeleri veya kaynaksız tahminler ekleme.
- Açıklanmayan tutar, oran, tarih veya sonuç hakkında veri uydurma; belirsizliği açıkça belirt.

## Editoryal değerlendirme

Her haberin `editorDegerlendirmesi` bölümünde olayın niteliğine uygun olarak şu dört bakış açısı bulunmalı:

1. `Haberin olumlu tarafı`: Şirket, sektör veya yatırımcı algısı açısından destekleyici olan somut yön.
2. `Riskli veya sınırlayıcı taraf`: Haberin etkisini azaltabilecek koşul, belirsizlik, maliyet, süre veya uygulama riski.
3. `Nerelere etki edebilir?`: Ciro, kârlılık, marj, nakit akışı, borçluluk, kapasite, sipariş birikimi, rekabet veya sektör etkilerinden yalnızca gerçekten ilgili olanlar.
4. `Takip edilecek başlıklar`: Etkinin doğrulanması için sonraki KAP açıklaması veya finansal tablolarda izlenecek somut gelişmeler.

Olumlu ya da olumsuz yön kaynaklardan kesin biçimde çıkarılamıyorsa bunu kesin
hüküm gibi yazma. “Olumluya yakın”, “sınırlı etkili”, “etkisi henüz
ölçülemiyor” gibi gerekçeli ve ölçülü dil kullan.

## Tekrarı önleme

- Bir rakamı görünür metinde gerekli olmadıkça ikiden fazla kullanma.
- Kaynak cümlelerini farklı kelimelerle yeniden yazıp yeni analiz gibi gösterme.
- Her bölüm okuyucuya önceki bölümde bulunmayan bir cevap vermeli.
- `kaynakOzeti` “ne oldu?” sorusunu; `editorDegerlendirmesi` “neden önemli, neyi etkiler, risk nedir, bundan sonra ne izlenir?” sorularını cevaplamalı.

## Güvenlik ve doğruluk

- Yatırım tavsiyesi, hedef fiyat, kesin yükseliş/düşüş iddiası veya getiri vaadi yazma.
- Doğrudan kaynak bağlantılarını `kaynaklar` alanında ver.
- KAP haberi ise bildirimin kendisini esas al; haber sitelerini birincil kaynak yerine kullanma.
- Tarihleri, para birimlerini, yüzdeleri ve şirket/hisse kodlarını kaynakla karşılaştır.
- Mevcut JSON alan adlarını ve veri tiplerini değiştirme; yeni alan icat etme.
