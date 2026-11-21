import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createRequire } from "node:module";
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import ts from "typescript";

const root = fileURLToPath(new URL("../", import.meta.url));
const read = (file) => fs.readFileSync(path.join(root, file), "utf8");

const layout = read("app/layout.tsx");
const recovery = read("components/AdBlockingRecoveryTag.tsx");
const nextConfig = read("next.config.mjs");
const officialScriptSrc =
  "https://fundingchoicesmessages.google.com/i/pub-9613627671991162?ers=1";
const officialInlineScript =
  "(function() {function signalGooglefcPresent() {if (!window.frames['googlefcPresent']) {if (document.body) {const iframe = document.createElement('iframe'); iframe.style = 'width: 0; height: 0; border: none; z-index: -1000; left: -1000px; top: -1000px;'; iframe.style.display = 'none'; iframe.name = 'googlefcPresent'; document.body.appendChild(iframe);} else {setTimeout(signalGooglefcPresent, 0);}}}signalGooglefcPresent();})();";

assert.match(layout, /import AdBlockingRecoveryTag from ["']@\/components\/AdBlockingRecoveryTag["']/);
assert.match(layout, /<head[\s\S]*<AdBlockingRecoveryTag \/>[\s\S]*pagead2\.googlesyndication\.com/);
assert.equal((layout.match(/<AdBlockingRecoveryTag \/>/g) ?? []).length, 1);
assert.equal((layout.match(/pagead2\.googlesyndication\.com\/pagead\/js\/adsbygoogle\.js/g) ?? []).length, 1);

assert.ok(recovery.includes(`"${officialScriptSrc}"`));
assert.ok(recovery.includes(`"${officialInlineScript.replaceAll('"', '\\"')}"`));
assert.equal((recovery.match(/fundingchoicesmessages\.google\.com/g) ?? []).length, 1);
assert.doesNotMatch(recovery, /premium|abonelik|subscribe|controlledMessagingFunction/i);

assert.match(nextConfig, /https:\/\/\*\.google\.com/);
for (const page of [
  "app/gizlilik-politikasi/page.tsx",
  "app/cerez-politikasi/page.tsx",
  "app/kvkk-aydinlatma-metni/page.tsx",
]) {
  assert.ok(fs.existsSync(path.join(root, page)), `${page} erişilebilir kalmalı`);
}

const require = createRequire(import.meta.url);
function loadComponent(file, overrides = {}) {
  const { outputText } = ts.transpileModule(read(file), {
    fileName: file,
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2020,
      jsx: ts.JsxEmit.ReactJSX,
      esModuleInterop: true,
    },
  });
  const compiled = { exports: {} };
  new Function("require", "module", "exports", outputText)(
    (name) => overrides[name] ?? require(name), compiled, compiled.exports,
  );
  return compiled.exports;
}

const settings = loadComponent("lib/ads-config.ts");
assert.equal(settings.ADS_ENABLED, false, "Reklamlar varsayılan olarak kapalı kalmalı.");
let disabledMetadata;
for (const enabled of [false, true]) {
  const overrides = { "@/lib/ads-config": { ADS_ENABLED: enabled } };
  const recoveryComponent = loadComponent("components/AdBlockingRecoveryTag.tsx", overrides).default;
  const headerComponent = loadComponent("components/HeaderAdUnit.tsx", {
    ...overrides, "./HeaderAdUnit.module.css": { container: "header-ad-container", slot: "header-ad-slot" },
  }).default;
  const responsiveComponent = loadComponent("components/AdsenseResponsiveUnit.tsx", overrides).default;
  for (const component of [headerComponent, responsiveComponent]) {
    const html = renderToStaticMarkup(createElement(component, { slot: "4549196585", className: "mb-8" }));
    if (enabled) {
      assert.match(html, /class="adsbygoogle/);
      assert.match(html, /data-ad-client="ca-pub-9613627671991162"/);
    } else {
      assert.equal(html, "", "Kapalı reklamın kutusu veya boşluğu üretilmemeli.");
    }
  }
  const recoveryHtml = renderToStaticMarkup(createElement(recoveryComponent));
  assert.equal(recoveryHtml.includes(officialScriptSrc.replaceAll("&", "&amp;")), enabled);
  const rootModule = loadComponent("app/layout.tsx", {
    ...overrides,
    "./globals.css": {},
    "@/components/HeaderAdUnit": headerComponent,
    "@/components/AdBlockingRecoveryTag": recoveryComponent,
    "@/components/Navbar": () => createElement("nav", null, "Navigation"),
    "@/components/Footer": () => createElement("footer", null, "Footer"),
    "@/lib/json-ld": loadComponent("lib/json-ld.ts"),
    "@/lib/theme": loadComponent("lib/theme.ts"),
    "@vercel/analytics/next": { Analytics: () => createElement("span", { "data-analytics": "preserved" }) },
  });
  const html = renderToStaticMarkup(createElement(rootModule.default, null, createElement("main", null, "Content")));
  assert.equal(html.includes("pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"), enabled);
  assert.equal(html.includes("fundingchoicesmessages.google.com"), enabled);
  assert.equal(html.includes("googlefcPresent"), enabled);
  assert.match(html, /googletagmanager.com\/gtag\/js\?id=G-19MBQR2TF3/);
  assert.match(html, /data-analytics="preserved"/);
  assert.match(html, /application\/ld\+json/);
  if (!enabled) disabledMetadata = rootModule.metadata;
  else assert.deepEqual(rootModule.metadata, disabledMetadata, "SEO metadata reklam ayarından etkilenmemeli.");
}

console.log("PASS: ADS_ENABLED=false ile tüm reklam kutuları, AdSense yükleyicisi ve recovery etiketi kapalı; Analytics ve SEO korundu. Tek ayarla yeniden açılma da doğrulandı.");
