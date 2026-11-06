import assert from "node:assert/strict";
import fs from "node:fs";
import { test } from "node:test";
import config from "../next.config.mjs";

test("calculator URLs have permanent redirects and canonical pages", async () => {
  const redirects = await config.redirects();
  for (const slug of ["kar-zarar-hesaplama", "ortalama-maliyet", "sermaye-artirimi"]) {
    const rule = redirects.find((item) => item.source === `/borsa/${slug}`);
    assert.equal(rule?.destination, `/hesaplayici/${slug}`);
    assert.equal(rule?.permanent, true);
    assert.match(fs.readFileSync(`app/hesaplayici/${slug}/page.tsx`, "utf8"), new RegExp(`/hesaplayici/${slug}`));
    assert.equal(fs.existsSync(`app/borsa/${slug}/page.tsx`), false);
  }
});

test("daily summary data survives and all summaries have a news route", async () => {
  const records = fs.readdirSync("data/gunluk-ozet").filter((name) => /^\d{4}-\d{2}-\d{2}\.json$/.test(name));
  assert.ok(records.length > 0);
  for (const record of records) assert.ok(JSON.parse(fs.readFileSync(`data/gunluk-ozet/${record}`, "utf8")).slug);
  assert.ok(fs.existsSync("app/haber/gunluk-borsa-ozeti/[tarih]/page.tsx"));
  const rules = await config.redirects();
  assert.equal(rules.find((rule) => rule.source === "/borsa/gunluk-borsa-ozeti/:tarih")?.destination, "/haber/gunluk-borsa-ozeti/:tarih");
});

test("retired public pages are absent from routing and sitemap inputs", () => {
  const retired = ["/borsa", "/giris", "/kayit", "/hesabim", "/portfoyum", "/halka-arz/takvim", "/halka-arz/tavan-serisi"];
  const updates = JSON.parse(fs.readFileSync("lib/page-updates.generated.json", "utf8"));
  for (const route of retired) {
    assert.equal(fs.existsSync(`app${route}/page.tsx`), false, route);
    assert.equal(updates.pages.some((page) => page.route === route), false, route);
  }
});

test("exported pages preserve summaries and expose only the new calculator URLs", { skip: !process.env.VERIFY_SECTION_OUTPUT }, () => {
  const sitemap = fs.readFileSync("out/sitemap.xml", "utf8");
  assert.doesNotMatch(sitemap, /<loc>[^<]*\/(?:borsa(?:\/|<)|halka-arz\/(?:takvim|tavan-serisi)(?:<|\/))/);
  for (const slug of ["kar-zarar-hesaplama", "ortalama-maliyet", "sermaye-artirimi"]) {
    const html = fs.readFileSync(`out/hesaplayici/${slug}.html`, "utf8");
    assert.ok(html.includes(`rel="canonical" href="https://www.hocaileborsa.com/hesaplayici/${slug}"`));
    assert.ok(sitemap.includes(`/hesaplayici/${slug}</loc>`));
  }
  for (const filename of fs.readdirSync("data/gunluk-ozet").filter((name) => /^\d{4}-\d{2}-\d{2}\.json$/.test(name))) {
    const record = JSON.parse(fs.readFileSync(`data/gunluk-ozet/${filename}`, "utf8"));
    const href = `/haber/gunluk-borsa-ozeti/${record.slug}`;
    assert.ok(fs.existsSync(`out${href}.html`), href);
    assert.ok(sitemap.includes(`${href}</loc>`), href);
  }
  const home = fs.readFileSync("out/index.html", "utf8");
  assert.doesNotMatch(home, /href="\/(?:giris|kayit|hesabim|borsa|halka-arz\/(?:takvim|tavan-serisi))"/);
});
