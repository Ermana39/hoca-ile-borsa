# Günlük Borsa Özeti — Her Gün Nasıl Eklenir?

Bu klasördeki her `.json` dosyası **bir günün** borsa özetidir. Her gün **yeni
bir dosya** eklersin; eski dosyalara **dokunmazsın**. Böylece hiçbir gün
kaybolmaz, her gün kendi kalıcı sayfasında durur.

> Önemli: Eski bir günü güncellemek/silmek YOK. Her gün = yeni dosya.

---

## Adım adım (5 dakikalık iş)

1. **Bu klasördeki en son günün dosyasını kopyala.**
   Örn. `2026-06-12.json` dosyasını kopyala, adını yeni güne göre değiştir:
   `2026-06-13.json` (biçim: `YIL-AY-GUN.json`, hep 4-2-2 haneli).
   - İpucu: `_SABLON.json` dosyasını da örnek/boş şablon olarak kullanabilirsin.

2. **Dosyanın en üstündeki tarih alanlarını güncelle:**
   - `isoTarih`  → `"2026-06-13"` (dosya adıyla aynı tarih, çizgili)
   - `slug`      → `"13-haziran-2026"` (URL'de görünecek ad — Türkçe, küçük harf,
     `gün-ay-yıl`, boşluk yok, çizgiyle)
   - `tarihGosterim` → `"13.06.2026"` (kutucukta görünen tarih)
   - `baslik`    → `"13 Haziran 2026 Günlük Borsa Özeti"`
   - `seoBaslik` ve `seoAciklama` içindeki tarihi de güncelle.

3. **Verileri güncelle** (sayıları o günün değerleriyle değiştir):
   - `bist`: endeks kapanışı, günlük yüzde değişim, toplam hacim.
   - `yukselenler`, `dusenler`, `hacimliler`, `paraGirisi`, `paraCikisi`:
     her biri **5 satır**, `{ "kod": "THYAO", "deger": "..." }` biçiminde.
   - `kurumAlis`, `kurumSatis`, `kurumHacim`: her biri 5 satır,
     `{ "kurum": "...", "hacim": "...", "oran": "%00,00" }`.
   - `ekonomikTakvim`: gün gün gruplar; her grupta o günün gösterge satırları.
     `onem` alanı şu beşinden biri olmalı:
     `"sari"`, `"sari-tek"`, `"turuncu"`, `"turuncu-gri"`, `"kirmizi"`.

4. **Günün yorumunu yaz** (asıl özgün içerik bu):
   - `yorum` alanına kendi cümlelerinle piyasa değerlendirmeni yaz.
   - Her paragraf tırnak içinde, paragraflar virgülle ayrılır:
     ```json
     "yorum": [
       "Birinci paragraf...",
       "İkinci paragraf..."
     ]
     ```
   - Yorum yazmak istemezsen boş bırak: `"yorum": []` → o gün sayfada
     "Piyasa Değerlendirmesi" bölümü görünmez.

5. **Kaydet ve yayınla** (her zamanki deploy adımın). Bittiğinde:
   - Sayfa otomatik oluşur: `/borsa/gunluk-borsa-ozeti/13-haziran-2026`
   - Ana sayfadaki haber akışında ve `/haberler` arşivinde otomatik en üstte
     görünür (en yeni tarih en üstte).
   - `/borsa/gunluk-borsa-ozeti` (çıplak adres) her zaman en güncel güne gider.

---

## Sık hatalar

- **Virgül:** JSON'da son satırdan sonra virgül OLMAZ; satırlar arasında virgül
  OLUR. Dosyayı kaydetmeden önce bir "JSON kontrol" aracında doğrulaman iyi olur.
- **Tırnaklar:** Tüm metinler çift tırnak `"` içinde olmalı.
- **`degisimYuzde`** sayıdır, tırnaksız yazılır (örn. `1.42` veya `-0.85`).
  Diğer tüm değerler metindir (tırnaklı).
- **Dosya adı** `_` ile başlarsa (örn. `_SABLON.json`) sistem onu yok sayar;
  gerçek günler `_` ile başlamaz.
- **slug** benzersiz olmalı (her gün farklı). Aynı slug iki dosyada olmasın.
