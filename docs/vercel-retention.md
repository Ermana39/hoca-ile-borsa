# Vercel yayin depolama temizligi

Guncelleme komutu degismez: `npm run yayinla`.

GitHub Actions, Vercel'in basarili production bildiriminden sonra temizligi
calistirir. Bu islem build'in parcasi degildir; build yapmaz, commit veya deploy
baslatmaz. Bilgisayarin acik kalmasi gerekmez.

## Bir defalik etkinlestirme

1. Vercel Account Settings > Tokens bolumunden projenin hesabina/takimina
   erisim veren bir token olustur.
2. GitHub `Ermana39/hoca-ile-borsa` deposunda Settings > Secrets and variables >
   Actions > New repository secret alanina `VERCEL_TOKEN` adiyla ekle.
   Token'i kaynak dosyalara veya sohbetlere yazma.
3. Bu dosyalari normal yayin komutuyla gonder. Sonraki basarili production
   yayinlari otomatik temizlik baslatir. Vercel Git entegrasyonunun GitHub'a
   deployment status bildirimleri gondermesi gerekir.
4. Ilk kontrol icin GitHub Actions > Vercel yayin depolama temizligi > Run workflow
   secenegini silme kutusu kapali olarak calistir; raporu incele. Mevcut birikimi
   yeni deploy yapmadan temizlemek icin ayni is akisinda silme kutusunu ac.

## Korunan yayinlar

- `www.hocaileborsa.com` alan adinin bagli oldugu basarili production yayini.
- Ondan onceki en yeni iki basarili production yayini.
- Son iki basarili preview yayini.
- Herhangi bir alan adi/branch alias bagli yayinlar.
- Son 24 saatin hatali/iptal yayinlari ve canli yayindan daha yeni yayinlar.
- Devam eden, ozel ortama ait veya durumu dogrulanamayan yayinlar.

Proje ve takim kimligi kodda sabittir; diger projelere uygulanmaz. Ana sayfa,
haberler, fonlar ve sitemap basariyla acilmadan silme baslamaz. Iki production
yedegi yoksa, API listelemesi eksikse veya canli yayin degisirse islem durur.
Her silmeden hemen once canli yayin ve silinecek yayinin alan adlari tekrar
kontrol edilir. API hatasinda kalan silmeler durur; hata yayinlanan siteyi etkilemez.

Son 24 saat korumasi ve bagli alan adlari nedeniyle her zaman tam uc yayin
kalmasi garanti edilmez. Temizlik raporu korunan yayinlarin nedenlerini gosterir.
Vercel'in donemlik GB-ay kullanimi gecmise donuk sifirlanmaz; silinen yayinlarin
paneldeki depolama kullanimina yansimasi ayrica dogrulanmalidir.

## Yerel dogrulama

`node --test scripts/test-vercel-retention.mjs` dis servise baglanmadan silme
kurallarini ve hata durumlarini sinar. Script varsayilan olarak yalnizca rapor
uretir; gercek silme icin acikca `--apply` gerekir.
