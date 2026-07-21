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

1. `npm run news:new -- haber-slug "Haber başlığı"` komutuyla taslak açılır.
2. KAP veya diğer resmî kaynak okunur ve JSON alanları doldurulur.
3. Görsel `public/<slug>.webp` adıyla eklenir. Görsel en az 1200x675 piksel ve
   16:9 oranında olmalıdır. JSON içindeki ölçüler gerçek dosyayla aynı yazılır.
4. `npm run news:check -- --slug=haber-slug` çalıştırılır.
5. Kontrol geçtikten sonra `durum` alanı `yayinda` yapılır.
6. `npm run news:check` ve ardından proje doğrulamaları çalıştırılır.

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
