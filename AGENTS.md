<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## News publishing workflow

- New JSON news records may start with `durum: "taslak"` while their content and image are incomplete.
- News JSON files are often prepared in a separate chat that cannot access the project folders.
- Do not rely on the news quality script as a deployment gate. It is optional manual guidance only.
- Before reporting a news item as published, make sure the JSON file is in `data/haberler`, has `durum: "yayinda"`, and the site build succeeds.
- Gün sonu kapanış değerlendirmesi haberlerinde "Kaynakta açıklanan temel bilgiler" tablosunu ve "Hoca ile Borsa değerlendirmesi" giriş kutusunu sayfada gösterme.
- Günlük KAP özetinde, gün içinde ayrı haberi oluşturulan gelişmenin altında ilgili iç haber bağlantısını göster; ayrıntı sayfası bulunmayan gelişmeye bağlantı ekleme.

## Halka arz workflow

- Halka arz şirketi onaylı izahname aşamasına alındığında yalnızca JSON'da `seo.contentStatus: "onayli"` yapmak yeterli değildir. `app/halka-arz/onayli-izahnameler/<slug>/page.tsx` fiziksel sayfa dosyasını da oluştur; kullanıcı bu dosyadan şirket sayfasını düzenleyebilmelidir.
