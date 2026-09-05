import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";
import test from "node:test";
import { fileURLToPath } from "node:url";
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import ts from "typescript";

const root = fileURLToPath(new URL("../", import.meta.url));
const require = createRequire(import.meta.url);

// Compile the real TS/TSX modules so the checks also work on supported Node 20.
function loadTypeScript(relativePath, overrides = {}) {
  const source = fs.readFileSync(path.join(root, relativePath), "utf8");
  const { outputText } = ts.transpileModule(source, {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2020,
      jsx: ts.JsxEmit.ReactJSX,
      esModuleInterop: true,
    },
    fileName: relativePath,
  });
  const compiledModule = { exports: {} };
  const localRequire = (name) => overrides[name] ?? require(name);
  new Function("require", "module", "exports", outputText)(
    localRequire,
    compiledModule,
    compiledModule.exports
  );
  return compiledModule.exports;
}

const jsonLd = loadTypeScript("lib/json-ld.ts");
const payloads = [
  '</script><script>alert("xss")</script>',
  '</ScRiPt><img src=x onerror=alert(1)>',
  '<!--<script>window.injected = true</script>',
  'Şirket < %10 & "özel" \\ veri\u2028\u2029',
];

test("JSON-LD content cannot close its HTML script element", () => {
  for (const payload of payloads) {
    const value = { name: payload, nested: [{ description: payload }] };
    const serialized = jsonLd.serializeJsonLd(value);
    assert.equal(serialized.includes("<"), false, payload);
    assert.deepEqual(JSON.parse(serialized), value);
  }
});

test("the real FAQ renderer keeps malicious source text inert", () => {
  const { default: HalkaArzSSS } = loadTypeScript("components/HalkaArzSSS.tsx", {
    "@/lib/json-ld": jsonLd,
  });

  for (const payload of payloads) {
    const html = renderToStaticMarkup(
      createElement(HalkaArzSSS, {
        items: [{ soru: payload, cevap: payload }],
      })
    );
    assert.equal((html.match(/<script\b/gi) ?? []).length, 1);
    assert.equal((html.match(/<\/script\s*>/gi) ?? []).length, 1);
    assert.equal(/<img\b/i.test(html), false);
    const script = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
    assert.ok(script);
    assert.equal(JSON.parse(script[1]).mainEntity[0].acceptedAnswer.text, payload);
  }
});

test("application JSON-LD sinks never use bare JSON.stringify", () => {
  const unsafe = [];
  function scan(directory) {
    for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
      const file = path.join(directory, entry.name);
      if (entry.isDirectory()) {
        scan(file);
        continue;
      }
      if (!/\.tsx?$/.test(file)) continue;
      const source = fs.readFileSync(file, "utf8");
      if (!source.includes("dangerouslySetInnerHTML")) continue;
      const ast = ts.createSourceFile(file, source, ts.ScriptTarget.Latest, true);
      function visit(node) {
        if (
          ts.isPropertyAssignment(node) &&
          node.name.getText(ast) === "__html" &&
          ts.isCallExpression(node.initializer) &&
          node.initializer.expression.getText(ast) === "JSON.stringify"
        ) {
          unsafe.push(path.relative(root, file));
        }
        ts.forEachChild(node, visit);
      }
      visit(ast);
    }
  }
  scan(path.join(root, "app"));
  scan(path.join(root, "components"));
  assert.deepEqual(unsafe, [], `Unescaped JSON-LD: ${unsafe.join(", ")}`);
});
