const baseUrl = process.env.INDEX_CHECK_BASE_URL || "http://127.0.0.1:3201";

const kontroller = [
  {
    yol: "/halka-arz/taslak-izahnameler/acacia-maden-isletmeleri",
    noindex: true,
  },
  {
    yol: "/halka-arz/onayli-izahnameler/masfen-enerji",
    noindex: false,
  },
  {
    yol: "/haber/albayrak-hazir-beton-halka-arzina-spk-onayi-geldi",
    noindex: true,
  },
  {
    yol: "/haber/akfye-500-bedelsiz-sermaye-artirimi-karari",
    noindex: false,
  },
  {
    yol: "/haber/5-agustos-2026-fonlar-gunluk-kapanis-degerlendirmesi",
    noindex: false,
  },
  {
    yol: "/haber/6-agustos-2026-fonlar-gunluk-kapanis-degerlendirmesi",
    noindex: false,
  },
  {
    yol: "/haber/24-temmuz-2026-onemli-kap-haberleri",
    noindex: false,
  },
  {
    yol: "/haberler/kategori/halka-arz",
    noindex: true,
  },
];

const hatalar = [];

for (const kontrol of kontroller) {
  const response = await fetch(`${baseUrl}${kontrol.yol}`);
  const html = await response.text();
  const header = response.headers.get("x-robots-tag") ?? "";
  const meta = html.match(/<meta name="robots" content="([^"]+)/)?.[1] ?? "";
  const noindexVar = /noindex/i.test(`${header} ${meta}`);

  console.log(
    `${kontrol.yol}: ${response.status}, ${noindexVar ? "noindex" : "index"}`
  );

  if (response.status !== 200 || noindexVar !== kontrol.noindex) {
    hatalar.push(`${kontrol.yol} beklenen dizin kuralını vermedi.`);
  }
}

const sitemapResponse = await fetch(`${baseUrl}/sitemap.xml`);
const sitemap = await sitemapResponse.text();
const sitemapUrlSayisi = (sitemap.match(/<url>/g) ?? []).length;

const sitemapKontrolleri = [
  {
    ad: "taslak izahname detayı",
    olmamali: "/halka-arz/taslak-izahnameler/acacia-maden-isletmeleri",
  },
  {
    ad: "tekrarlı halka arz süreç haberi",
    olmamali: "/haber/albayrak-hazir-beton-halka-arzina-spk-onayi-geldi",
  },
  {
    ad: "haber kategori arşivi",
    olmamali: "/haberler/kategori/halka-arz",
  },
  {
    ad: "onaylı izahname",
    olmali: "/halka-arz/onayli-izahnameler/masfen-enerji",
  },
  {
    ad: "editoryal şirket haberi",
    olmali: "/haber/akfye-500-bedelsiz-sermaye-artirimi-karari",
  },
];

for (const kontrol of sitemapKontrolleri) {
  if (kontrol.olmali && !sitemap.includes(kontrol.olmali)) {
    hatalar.push(`Sitemap güçlü içeriği içermiyor: ${kontrol.ad}.`);
  }
  if (kontrol.olmamali && sitemap.includes(kontrol.olmamali)) {
    hatalar.push(`Sitemap noindex içeriği içeriyor: ${kontrol.ad}.`);
  }
}

console.log(`Sitemap URL sayısı: ${sitemapUrlSayisi}`);

if (hatalar.length > 0) {
  for (const hata of hatalar) console.error(`HATA ${hata}`);
  process.exit(1);
}

console.log("Çalışma zamanı dizin denetimi başarılı.");
