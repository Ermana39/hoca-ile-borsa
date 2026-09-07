# Guncelleme Akisi

Bu projede `npm run build` artik agir veri guncelleme adimlarini calistirmaz.
Hazir verilerle siteyi uretir. Hangi alan guncellendiyse once onun komutu
calistirilir, sonra site build edilir.

## Gunluk kullanim

- Haber ekleme/duzenleme: `npm run prepare:haber`
- Fon/TEFAS verisi guncelleme: `npm run prepare:fonlar`
- Halka arz, takvim veya izahname guncelleme: `npm run prepare:halka-arz`
- Hisse kunyeleri veya oran verileri guncelleme: `npm run prepare:hisseler`
- Sadece tasarim, menu, reklam alani veya metin duzenleme: `npm run build`

## Sadece veri uretme

- Haber verileri: `npm run update:haber`
- Fon verileri: `npm run update:fonlar`
- Halka arz verileri: `npm run update:halka-arz`
- Hisse verileri: `npm run update:hisseler`
- Eski uzun tam veri akisi: `npm run update:all`

## Build secenekleri

- Hafif site build: `npm run build`
- Eski tam akisa denk build: `npm run build:full`

## Git kontrolu

Commit veya push oncesinde kilit sorunu olup olmadigini gormek icin:

```bash
npm run git:kontrol
```

Bu komut kilit dosyasini otomatik silmez. Aktif Git islemi varken kilit dosyasini
silmek guvenli olmadigi icin once durumu bildirir.
