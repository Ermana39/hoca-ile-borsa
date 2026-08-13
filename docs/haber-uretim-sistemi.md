# Ortak Haber Üretim Sistemi

Yeni haberler tek bir veri kaydından üretilir:

- İçerik: `data/haberler/<slug>.json`
- Görsel: `public/<slug>.webp`
- Ortak sayfa: `components/OrtakHaberSayfasi.tsx`
- Yayın öncesi kontrol: `scripts/check-news-quality.mjs`

Yeni haber için ayrıca `app/haber/<slug>/page.tsx` veya `app/data/news.ts`
düzenlenmez. Yayındaki JSON kaydı haber listesine, kategori arşivine, yazar
sayfasına, ilgili hisse sayfasına, sitemap'e, Google News sitemap'ine ve RSS'e
otomatik eklenir. Canonical, sosyal medya etiketleri ve NewsArticle verisi de
ortak şablondan üretilir.

## İş Akışı

Haber metni ve JSON kaydı çoğunlukla ayrı bir ChatGPT sohbetinde hazırlanır.
`news:new` komutu yalnızca isteğe bağlı boş taslak üreticisidir; editoryal kalite
kuralları haberin nerede hazırlandığına bağlı değildir.

1. Ayrı ChatGPT sohbetine `docs/chatgpt-haber-talimatlari.md` dosyasındaki talimat ve güncel bir örnek haber JSON'u verilir.
2. Hazırlanan JSON, `data/haberler/<slug>.json` konumuna eklenir.
3. Görsel `public/<slug>.webp` adıyla eklenir. Görsel en az 1200x675 piksel ve
   16:9 oranında olmalıdır. JSON içindeki ölçüler gerçek dosyayla aynı yazılır.
4. `npm run news:review -- --slug=haber-slug` çalıştırılır. Bu komut taslağı
   yayınlamadan tekrarları ve farklı bakış açılarını sıkı biçimde denetler.
5. Düzeltmelerden sonra `npm run news:publish -- --slug=haber-slug` çalıştırılır.
6. Proje doğrulamaları ve site derlemesi çalıştırılır.

`taslak` kayıtlar sitede, haber listelerinde ve sitemap'te görünmez. Belirli bir
taslağı `--slug` ile kontrol etmek, onu yayın adayı gibi tam denetime sokar.

## Editoryal Kural

`kaynakOzeti` yalnızca resmî kaynakta açıkça bulunan doğrulanabilir bilgileri
içerir. Hesaplama yapıldıysa kullanılan değerler ve yöntem görünür biçimde
belirtilir. `editorDegerlendirmesi` ise yorum, olası etki, riskler ve takip
edilecek gelişmeler için ayrılmıştır. Açıklanmayan bir değer tahmin edilmez;
“olabilir”, “bağlıdır” ve “henüz açıklanmadı” gibi belirsizlik dili doğru yerde
kullanılır.

Bir olay için ikinci sayfa açmadan önce mevcut haberlerde aynı KAP bağlantısı,
başlık ve olay aranır. Aynı olayın güncellenmesi gerekiyorsa mevcut kaydın
`guncellemeTarihi` ve ilgili bölümleri güncellenir; yeni bilgi ayrı ve bağımsız
bir gelişmeyse yeni haber oluşturulur.

Yatırım tavsiyesi, kesin getiri vaadi, doğrulanmayan oran, uydurma alıntı ve
kaynaksız hedef fiyat kullanılmaz.
