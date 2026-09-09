# Üyelik altyapısı

Bu proje üyelik verisini mevcut Upstash Redis hesabında, yalnızca sunucudan erişilen anahtarlarla saklar. Tarayıcıya parola özeti, onay kanıtları veya oturum anahtarı gönderilmez. Ödeme ve portföy özelliği bu sürümde yoktur.

## Veri modeli

`hib:auth:user:<user_id>` anahtarı aşağıdaki kaydı tutar:

- `user_id`: Değişmeyen UUID; gelecekteki portföy, abonelik ve tercih kayıtlarının ilişki alanıdır.
- `email`: Normalize edilmiş e-posta.
- `display_name`: Kullanıcının görünen adı.
- `password_hash`: Salt içeren scrypt özeti; düz parola saklanmaz.
- `role`: `user` veya `admin`. Kayıt API'si gelen değeri kabul etmez ve daima `user` atar.
- `plan`: `free` veya `premium`. Kayıt API'si gelen değeri kabul etmez ve daima `free` atar.
- `status`: Kayıtta `pending`, e-posta doğrulamasından sonra `active`. Yalnızca `active` ve doğrulama tarihi bulunan kayıtlar üye sayılır.
- `email_verified_at`: Doğrulama zamanı veya `null`.
- `created_at`, `updated_at`: ISO tarihleri.
- `consents`: Sözleşme, KVKK ve gizlilik metni sürümleri, onay zamanı ve özetlenmiş kullanıcı aracısı.

İlişkili anahtarlar:

- `hib:auth:email:<sha256(email)>`: E-posta benzersizlik indeksi, değeri `user_id`.
- `hib:auth:session:<sha256(token)>`: 30 gün süreli sunucu oturumu.
- `hib:auth:user-sessions:<user_id>`: Kullanıcının açık oturumları; parola değişiminde ve hesap silmede topluca iptal edilir.
- `hib:auth:verify:<sha256(token)>`: 48 saat süreli, tek kullanımlık doğrulama anahtarı.
- `hib:auth:reset:<sha256(token)>`: 30 dakika süreli, tek kullanımlık parola yenileme anahtarı.
- `hib:auth:members:active`: Yönetim ekranındaki Toplam Üye sayısının kaynağı; yalnızca doğrulanmış kullanıcı kimlikleri.
- `hib:auth:members:pending`: Doğrulama bekleyen kullanıcı kimlikleri.

Kayıt işlemi oturum açmaz. Oturum yalnızca doğrulanmış e-posta ve doğru parolayla girişten sonra oluşturulur. Oturum çerezi `HttpOnly`, `SameSite=Strict` ve üretimde `Secure` olarak verilir. Arayüzün “Giriş Yap/Hesabım” etiketini seçmesi için ayrıca hassas veri içermeyen `hib_member=1` işaretçisi vardır; hiçbir yetki kararı bu işaretçiye dayanmaz.

## Ortam değişkenleri

Vercel Production, Preview ve gerektiğinde Development ortamlarında şu değişkenler tanımlanmalıdır:

- `UPSTASH_REDIS_REST_URL`
- `UPSTASH_REDIS_REST_TOKEN`
- `AUTH_SITE_URL` (üretimde `https://www.hocaileborsa.com`)
- `AUTH_FROM_EMAIL` (SMTP hesabından farklı bir gönderici gerekiyorsa)
- `SMTP_HOST`
- `SMTP_PORT`
- `SMTP_USER`
- `SMTP_PASS`

Değişkenler `NEXT_PUBLIC_` ile başlamamalıdır. Eksik Redis ayarında sistem yetki vermek yerine güvenli biçimde 503 döndürür. SMTP gönderilemezse hesap açılmış olabilir; kullanıcı Hesabım sayfasından doğrulama e-postasını yeniden isteyebilir.

## Gelecekte genişletme

Yeni korumalı uç noktalar kullanıcıyı istemciden gelen role veya plan alanıyla değil, `requireMemberFromRequest`, `requireVerifiedMemberFromRequest`, `memberHasRole` ve `memberHasPlan` yardımcılarıyla denetlemelidir. Portföy kayıtları `user_id` ile ilişkilendirilmeli ve silme anahtarları `deleteMember` içindeki merkezi temizleme listesine eklenmelidir. Ücretli abonelik eklendiğinde ödeme sağlayıcısının webhook'u `plan` alanını sunucuda güncellemelidir; istemciden gelen plan değişikliği kabul edilmemelidir.

## Kontrol

- `npm run test:security`: kayıt, oturum, doğrulama, parola yenileme, hız sınırı ve hesap silme senaryoları.
- `npx tsc --noEmit`: tür kontrolü.
- `npm run lint`: kod kalitesi.
- `npm run build`: üretim çıktısı ve sitemap/noindex kontrolleri.
