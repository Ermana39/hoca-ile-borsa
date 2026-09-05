# Güvenlik denetimi — 5 Eylül 2026

Denetim; uygulama kodunu, bağımlılıkları, Vercel yayın ayarlarını, JSON-LD
üretimini ve giriş/iletişim API'lerini kapsar. Canlı sitede yalnızca birkaç
GET/HEAD isteği yapıldı. Gerçek e-posta gönderilmedi, parola denenmedi ve bu
çalışmadan üretim yayını yapılmadı.

## Giderilen bulgular

| Alan | Bulgu ve düzeltme |
| --- | --- |
| Bağımlılıklar | İlk npm taramasında 10 pakette uyarı vardı (8 yüksek, 1 orta, 1 düşük). Next.js ve eslint-config-next 16.3.4'e, SheetJS 0.20.3'e geçirildi; dolaylı bağımlılıklar güncellendi. Güncelleme sonunda npm audit sıfır bilinen açık bildirdi. |
| İçerik kaynaklı XSS | 212 dosyadaki 213 JSON-LD çıktısı ham JSON.stringify kullanıyordu. İçeriğe `</script>` girmesi HTML öğesini kapatabiliyordu. Ortak serializeJsonLd yardımcısı `<` karakterini kaçırır. Dışarıdan bir saldırganın mevcut içerik kaynaklarını değiştirebildiği gösterilmiş değildir. |
| İletişim ve giriş sınırları | E-posta gönderiminden sonra kayıt tutan kontrol eşzamanlı isteklerle aşılabiliyordu. Deneme artık işlemden önce ayrılır; hatalı ve başarısız denemeler de sayılır. İletişim için 5/saat, giriş için 10/5 dakika uygulanır. Redis işlemi atomiktir. |
| Sunucular arasında sınır tutarlılığı | Vercel'de süreç belleğiyle sınır tutmak güvenilir değildir. Vercel ortamında ortak Redis gerekir; eksik veya erişilemeyen depoda işlem 503 ile durur. Bellek içi yedek yalnızca yerel/tek süreç ortamı içindir. |
| İstek ve e-posta doğrulama | İletişim için 32 KiB, giriş için 4 KiB sınırı doğrudan istek akışına uygulanır. JSON dışı, dizi/null, hatalı tür ve aşırı uzun alanlar reddedilir. E-posta adresi tek posta kutusu olmalıdır; HTML kaçırılır; Nodemailer dosya/URL erişimi kapalıdır. SMTP için TLS ve zaman sınırları etkinleştirildi. |
| Oturum ve hata yanıtları | Gelecek tarihli, bozuk imzalı ve süresi dolmuş yönetici belirteçleri reddedilir. Parola karşılaştırması sabit uzunluklu özetler üzerinden sabit sürede yapılır. SMTP hata ayrıntıları yanıta veya güvenlik kaydına yazılmaz. |
| Önbellek ve tarayıcı korumaları | Özel API yanıtları tarayıcı ve CDN'de saklanmaz. Üretim CSP'sinden unsafe-eval çıkarıldı; HTML olay öznitelikleri ve base öğeleri engellendi. Next.js sürüm başlığı kapatıldı. Statik arama verisinin önbelleği korundu. |
| Yayın kapsamı | Yerel çalışma dosyaları, günlükler ve .env dosyaları .vercelignore ile yayın yüklemesinden çıkarıldı. Git tarafından izlenen dosyalarda yapılan sınırlı taramada gizli anahtar eşleşmesi bulunmadı. |

Geliştirme ortamındaki giriş/çıkış/iletişim yolları, üretim API işleyicilerine
yönlendirildi; aynı güvenlik kuralları her iki ortamda da çalışır.

## Yayından önce gerekli Vercel ayarı

Projenin **Environment Variables** bölümünde aşağıdaki sunucu değişkenlerinden
bir çift bulunmalıdır:

- `UPSTASH_REDIS_REST_URL` ve `UPSTASH_REDIS_REST_TOKEN`, veya
- `KV_REST_API_URL` ve `KV_REST_API_TOKEN`.

REST erişiminin GET, INCR, PEXPIRE ve PTTL işlemlerini kullanan EVAL komutuna
yetkisi olmalıdır. Anahtarların ham IP içerikleri yerine özetleri tutulur.
Değerler `NEXT_PUBLIC_` önekiyle tanımlanmamalıdır. Ayar yoksa giriş ve iletişim
503 döndürür; statik içerik sayfaları etkilenmez. Üretimdeki değişkenlerin mevcut
olup olmadığı bu denetimde doğrulanamadı. Mevcut SMTP ve yönetici ayarları da
korunmalıdır; hiçbir kimlik bilgisi değiştirilmedi.

## Doğrulama

- `npm run build`: başarılı. 3.732 statik rota üretildi; son çıktı 3.725 HTML
  dosyası içeriyor. Derleme ve TypeScript kontrolü geçti. Bazı haber sayfaları
  ilk denemede süre sınırına takıldı, otomatik yeniden denemelerde tamamlandı.
- `npm run test:security`: 15 test başarılı. Zararlı script kapanışları, gerçek
  FAQ HTML çıktısı, eşzamanlı istekler, bozuk/aşırı büyük gövdeler, e-posta
  enjeksiyonu, yetkisiz erişim, oturum süreleri ve Redis hata durumları kapsandı.
- Güvenlik yardımcıları ve yeni testlerde ESLint başarılı. Mevcut API
  dosyalarındaki anonim varsayılan dışa aktarma uyarıları güvenlik hatası değildir.
- SheetJS geçişinde 19 Excel dosyası, 37 sayfa ve 12.426 satırın dosyadan ve
  bellekten okunması karşılaştırıldı; Türkçe metin ve sayısal değerler korundu.
- Fon kontrolleri: 2.072 fon detayı, 1.687.165 tarihsel kayıt ve 625 haftalık
  hisse tercihi doğrulandı.
- Üretim CSP başlıklarıyla sunulan yerel statik çıktı tarayıcıda açıldı. Site
  aramasında ASELS sonucu bulundu ve şirket sayfasına istemci geçişi çalıştı.
  Bu akışta tarayıcı hata/uyarı kaydı görülmedi. Gerçek reklam gösterimi veya
  üretim SMTP/Redis bağlantısı bu testin kapsamında değildir.
- Ek `seo:check` taramasında Article yapılandırılmış veri sorunu 0 bulundu;
  ancak mevcut başlık/açıklama uzunluğu kuralları 191 içerik uyarısıyla kontrolü
  başarısız yaptı. Bu güvenlik çalışmasında SEO metinleri değiştirilmedi.

## Canlı sitede kalan operasyonel bulgu

`/api/health` ve oturumsuz `/api/admin-messages` istekleri HTTP 500 ve
`X-Vercel-Error: FUNCTION_INVOCATION_FAILED` döndürdü. Yerel testte sağlık
işleyicisi 200, oturumsuz yönetici isteği 401 döndürüyor. Kesin kök neden için
Vercel işlev günlükleri ve yayın ortamı gerekir; bu hata giderilmiş sayılmamalıdır.
Kullanılan `export default { fetch(...) }` biçimi Vercel tarafından desteklenir;
yalnızca bu biçime bakarak hata nedeni çıkarılamaz.

Ana sayfa 200, `/.env.local` ve `/.git/config` 404 döndürdü. Bu sınırlı kontroller,
tüm gizli dosyaların veya tüm altyapı ayarlarının denetlendiği anlamına gelmez.

Statik Next.js sayfalarının satır içi başlangıç kodları nedeniyle CSP'de
`unsafe-inline` devam eder. Reklam hizmetlerinin kaynak izinleri korundu.
Tarama sonucu sıfır bilinen paket açığı, sitenin tüm olası saldırılara kapalı
olduğu anlamına gelmez.

## Kaynaklar

- [Next.js 16.3.4 sürümü](https://github.com/vercel/next.js/releases/tag/v16.3.4)
- [Next.js JSON-LD güvenliği](https://nextjs.org/docs/app/guides/json-ld)
- [Next.js CSP rehberi](https://nextjs.org/docs/app/guides/content-security-policy)
- [SheetJS resmî Node.js kurulumu](https://docs.sheetjs.com/docs/getting-started/installation/nodejs/)
- [Vercel istek başlıkları](https://vercel.com/docs/headers/request-headers)
- [Vercel Node.js işlevleri](https://vercel.com/docs/functions/runtimes/node-js)
