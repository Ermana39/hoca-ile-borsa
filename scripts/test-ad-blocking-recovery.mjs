import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

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

console.log("PASS: resmi Google recovery etiketi head içinde, AdSense'ten önce ve ikinci tespit sistemi olmadan yapılandırıldı.");
