import fs from "node:fs";
import path from "node:path";

const KAP_INDEX_URL =
  "https://www.kap.org.tr/tr/Endeksler?indice=BIST%20T%C3%9CM";
const KAP_PROFILE_BASE = "https://www.kap.org.tr/tr/sirket-bilgileri/genel";
const PROFILES_DIR = path.join(process.cwd(), "data", "hisseler");
const SNAPSHOT_FILE = path.join(
  process.cwd(),
  "data",
  "bist-tum-sirketleri.generated.json"
);
const OFFICIAL_SOURCES_FILE = path.join(
  process.cwd(),
  "data",
  "hisse-resmi-kaynaklar.json"
);
const PROFILE_PATHS_FILE = path.join(
  process.cwd(),
  "data",
  "kap-profil-yollari.generated.json"
);
const VERIFIED_AT = new Date().toISOString().slice(0, 10);
const writeChanges = process.argv.includes("--write");
const missingOnly = process.argv.includes("--missing-only");
const fromSnapshot = process.argv.includes("--from-snapshot");
const requestedCodes = new Set(
  process.argv
    .find((argument) => argument.startsWith("--codes="))
    ?.slice("--codes=".length)
    .split(",")
    .map((code) => code.trim().toUpperCase())
    .filter(Boolean) ?? []
);
const limit = Number(
  process.argv
    .find((argument) => argument.startsWith("--limit="))
    ?.slice("--limit=".length) ?? 0
);
const concurrency = Math.max(
  1,
  Math.min(
    5,
    Number(
      process.argv
        .find((argument) => argument.startsWith("--concurrency="))
        ?.slice("--concurrency=".length) ?? 3
    ) || 3
  )
);
const MIN_REQUEST_INTERVAL_MS = Math.max(
  400,
  Number(
    process.argv
      .find((argument) => argument.startsWith("--request-interval="))
      ?.slice("--request-interval=".length) ?? 1_000
  ) || 1_000
);
let nextRequestAt = 0;

const PRIMARY_SHARE_CODES = new Map([
  ["ISATR|ISBTR|ISCTR", "ISCTR"],
  ["KRDMA|KRDMB|KRDMD", "KRDMD"],
]);

const inspectCode = process.argv
  .find((argument) => argument.startsWith("--inspect="))
  ?.slice("--inspect=".length)
  .trim()
  .toUpperCase();

function decodeFlightText(html) {
  const chunks = [];
  const pattern =
    /self\.__next_f\.push\(\[1,("(?:\\.|[^"\\])*")\]\)/g;
  let match;

  while ((match = pattern.exec(html))) {
    try {
      chunks.push(JSON.parse(match[1]));
    } catch {
      // Bir bozuk parça diğer sunucu verilerinin okunmasını engellemesin.
    }
  }

  return chunks.join("");
}

function readJsonValue(text, initialOffset) {
  let offset = initialOffset;
  while (/\s/.test(text[offset] ?? "")) offset += 1;

  const opening = text[offset];
  if (opening !== "{" && opening !== "[") return null;

  const closing = opening === "{" ? "}" : "]";
  let depth = 0;
  let inString = false;
  let escaped = false;

  for (let index = offset; index < text.length; index += 1) {
    const character = text[index];

    if (inString) {
      if (escaped) escaped = false;
      else if (character === "\\") escaped = true;
      else if (character === '"') inString = false;
      continue;
    }

    if (character === '"') {
      inString = true;
      continue;
    }

    if (character === opening) depth += 1;
    else if (character === closing) depth -= 1;

    if (depth === 0) {
      const raw = text.slice(offset, index + 1);
      try {
        return { value: JSON.parse(raw), end: index + 1 };
      } catch {
        return null;
      }
    }
  }

  return null;
}

function findObjectByMarker(text, marker, predicate = () => true) {
  let searchFrom = 0;

  while (searchFrom < text.length) {
    const markerIndex = text.indexOf(marker, searchFrom);
    if (markerIndex === -1) return null;

    const objectStart = text.lastIndexOf("{", markerIndex);
    const parsed = objectStart >= 0 ? readJsonValue(text, objectStart) : null;
    if (parsed && predicate(parsed.value)) return parsed.value;

    searchFrom = markerIndex + marker.length;
  }

  return null;
}

function extractItemObjects(flightText) {
  const marker = '"itemObject":';
  const items = new Map();
  let searchFrom = 0;

  while (searchFrom < flightText.length) {
    const markerIndex = flightText.indexOf(marker, searchFrom);
    if (markerIndex === -1) break;

    const parsed = readJsonValue(flightText, markerIndex + marker.length);
    if (parsed?.value?.itemKey) items.set(parsed.value.itemKey, parsed.value);

    searchFrom = parsed?.end ?? markerIndex + marker.length;
  }

  return Array.from(items.values());
}

function normalizeText(value) {
  return String(value ?? "")
    .toLocaleLowerCase("tr-TR")
    .replace(/ı/g, "i")
    .replace(/ğ/g, "g")
    .replace(/ü/g, "u")
    .replace(/ş/g, "s")
    .replace(/ö/g, "o")
    .replace(/ç/g, "c")
    .replace(/\s+/g, " ")
    .trim();
}

function decodeHtmlEntities(value) {
  return String(value ?? "")
    .replace(/&nbsp;|&#160;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&quot;/gi, '"')
    .replace(/&#39;|&apos;/gi, "'")
    .replace(/&lt;/gi, "<")
    .replace(/&gt;/gi, ">")
    .replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number(code)))
    .replace(/&#x([0-9a-f]+);/gi, (_, code) =>
      String.fromCodePoint(Number.parseInt(code, 16))
    );
}

function cleanText(value) {
  return decodeHtmlEntities(value)
    .replace(/<br\s*\/?>/gi, " ")
    .replace(/<\/p>\s*<p[^>]*>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function meaningfulText(value) {
  const cleaned = cleanText(value);
  return cleaned &&
    !/^[*._–—-]+$/.test(cleaned) &&
    !/^\$[0-9a-z]+$/i.test(cleaned)
    ? cleaned
    : "";
}

function cleanTextList(value) {
  if (Array.isArray(value)) {
    return value.map(meaningfulText).filter(Boolean);
  }

  const cleaned = cleanText(value);
  return cleaned
    ? cleaned
        .split(/\s*\/\s*/)
        .map((item) => item.trim())
        .filter((item) => meaningfulText(item))
    : [];
}

function isGeneratedAboutParagraph(value) {
  return (
    /Borsa İstanbul'da\s+\S+\s+koduyla işlem gören ve KAP sektör sınıflamasında/i.test(
      value
    ) ||
    /payları .+ kapsamında işlem görür\..+KAP profili üzerinden doğrulanmıştır/i.test(
      value
    )
  );
}

function sanitizeAnalysisContent(value) {
  const result = {};
  for (const [key, item] of Object.entries(value ?? {})) {
    if (typeof item === "string") {
      const cleaned = meaningfulText(item);
      if (!cleaned) continue;
      if (
        key === "sektorelKonum" &&
        /KAP sınıflamasında.+kapsamında yer almaktadır/i.test(cleaned) &&
        /aynı sektördeki şirketlerle karşılaştır/i.test(cleaned)
      ) {
        continue;
      }
      if (
        key === "ortaklikYorumu" &&
        /en büyük doğrudan ortak olarak görünmektedir|doğrudan ortaklık oranı tablosu yayımlanmadığından/i.test(
          cleaned
        )
      ) {
        continue;
      }
      if (
        key === "yatirimciNotu" &&
        /takip edilirken şirketin faaliyet alanındaki gelişmeler.+KAP bildirimleri.+koşulları birlikte izlenmelidir/i.test(
          cleaned
        )
      ) {
        continue;
      }
      result[key] = cleaned;
      continue;
    }

    if (Array.isArray(item)) {
      const cleaned = item.map(meaningfulText).filter(Boolean);
      if (cleaned.length > 0) result[key] = cleaned;
    }
  }
  return result;
}

function normalizeUrl(value) {
  const raw = cleanText(value);
  if (!raw) return undefined;
  const candidate = /^[a-z][a-z0-9+.-]*:/i.test(raw)
    ? raw
    : `https://${raw}`;

  try {
    const url = new URL(candidate);
    if (url.protocol !== "http:" && url.protocol !== "https:") return undefined;
    url.hash = "";
    return url.toString();
  } catch {
    return undefined;
  }
}

function parseRatio(value) {
  const raw = String(value ?? "").trim();
  if (!raw) return undefined;
  const normalized = raw.includes(",")
    ? raw.replace(/\./g, "").replace(",", ".")
    : raw;
  const parsed = Number(normalized);
  return Number.isFinite(parsed) ? parsed : undefined;
}

function formatMoney(value, currency = "TL") {
  const cleaned = cleanText(value);
  if (!cleaned) return undefined;
  const suffix = cleanText(currency) || "TL";
  return new RegExp(`\\b${suffix}$`, "i").test(cleaned)
    ? cleaned
    : `${cleaned} ${suffix}`;
}

function formatKapDate(value) {
  const raw = cleanText(value);
  if (!raw) return undefined;

  const compact = /^(\d{4})(\d{2})(\d{2})/.exec(raw);
  if (compact) return `${compact[1]}-${compact[2]}-${compact[3]}`;

  const turkish = /^(\d{2})\/(\d{2})\/(\d{4})/.exec(raw);
  if (turkish) return `${turkish[3]}-${turkish[2]}-${turkish[1]}`;

  return raw;
}

function titleCaseCompany(value) {
  const connectors = new Set(["ve", "ile", "veya"]);
  const result = cleanText(value)
    .toLocaleLowerCase("tr-TR")
    .split(" ")
    .map((word, index) => {
      if (index > 0 && connectors.has(word)) return word;
      return word.replace(/(^|[-/(])([a-zçğıöşü])/g, (_, prefix, letter) =>
        `${prefix}${letter.toLocaleUpperCase("tr-TR")}`
      );
    })
    .join(" ");

  return result
    .replace(/\bA\.ş\./g, "A.Ş.")
    .replace(/\bT\.a\.ş\./g, "T.A.Ş.")
    .replace(/\bA\.o\./g, "A.O.")
    .replace(/\bT\.a\.o\./g, "T.A.O.");
}

function compactObject(value) {
  return Object.fromEntries(
    Object.entries(value).filter(([, item]) => {
      if (item === undefined || item === null || item === "") return false;
      if (Array.isArray(item) && item.length === 0) return false;
      return true;
    })
  );
}

function getItem(items, key, nameIncludes) {
  const exact = items.find((item) => item.itemKey === key);
  if (exact) return exact;
  if (!nameIncludes) return undefined;
  const expected = normalizeText(nameIncludes);
  return items.find((item) =>
    normalizeText(item.itemName).includes(expected)
  );
}

function itemValue(items, key, nameIncludes) {
  return getItem(items, key, nameIncludes)?.value;
}

function uniqueBy(items, keySelector) {
  const seen = new Set();
  return items.filter((item) => {
    const key = keySelector(item);
    if (!key || seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function buildProfile(company, items, canonicalCode, profileUrl) {
  const code = company.stockCode;
  const companyName = titleCaseCompany(company.title);

  const address = meaningfulText(
    itemValue(items, "kpy41_acc1_merkez_adresi", "merkez adresi")
  );
  const contactRows = itemValue(
    items,
    "kpy41_acc1_ilet_adres_tel_fax",
    "telefon ve faks"
  );
  const contact = Array.isArray(contactRows) ? contactRows[0] ?? {} : {};
  const emailRows = itemValue(
    items,
    "kpy41_acc1_ilet_email",
    "elektronik posta"
  );
  const emails = Array.isArray(emailRows)
    ? emailRows.map((row) => cleanText(row?.email)).filter(Boolean)
    : [];
  const website = normalizeUrl(
    itemValue(items, "kpy41_acc1_int_addres", "internet adresi")
  );
  const activity = meaningfulText(
    itemValue(items, "kpy41_acc2_faaliyet_konu", "faaliyet konusu")
  );
  const sectors = cleanTextList(
    itemValue(items, "kpy41_acc2_sektor", "şirketin sektörü")
  );
  const markets = cleanTextList(
    itemValue(items, "kpy41_acc3_sermaye_arac_pazar", "işlem gördüğü pazar")
  );
  const indices = cleanTextList(
    itemValue(items, "kpy41_acc3_endeksler", "dahil olduğu endeksler")
  );
  const boardRows = itemValue(
    items,
    "kpy41_acc6_yonetim_kurulu_uyeleri",
    "yönetim kurulu üyeleri"
  );
  const board = uniqueBy(
    (Array.isArray(boardRows) ? boardRows : [])
      .map((row) => cleanText(row?.nameSurname))
      .filter(Boolean),
    (name) => normalizeText(name)
  );
  const investorRows = itemValue(
    items,
    "kpy41_acc1_yatirimci_iliskileri",
    "yatırımcı ilişkileri bölümü"
  );
  const investorContacts = uniqueBy(
    (Array.isArray(investorRows) ? investorRows : [])
      .map((row) =>
        compactObject({
          ad: cleanText(row?.nameSurname),
          gorev: cleanText(row?.position),
          telefon: cleanText(row?.phone),
          eposta: cleanText(row?.email),
        })
      )
      .filter((row) => row.ad || row.eposta),
    (row) => `${normalizeText(row.ad)}|${normalizeText(row.eposta)}`
  );

  const shareholderItem = getItem(
    items,
    "kpy41_acc5_sermayede_dogrudan",
    "sermayede doğrudan"
  );
  const shareholderRows = Array.isArray(shareholderItem?.value)
    ? shareholderItem.value
    : [];
  const shareholders = shareholderRows
    .map((row) => ({
      ad: titleCaseCompany(row?.shareholder),
      oran: parseRatio(row?.ratioInCapital),
      sermaye: cleanText(row?.shareInCapital),
    }))
    .filter(
      (row) =>
        row.ad &&
        row.oran !== undefined &&
        normalizeText(row.ad) !== "toplam"
    );

  const subsidiaryItem = getItem(
    items,
    "kpy41_acc7_bagli_ortakliklar",
    "bağlı ortaklıklar"
  );
  const subsidiaryRows = Array.isArray(subsidiaryItem?.value)
    ? subsidiaryItem.value
    : [];
  const subsidiaries = subsidiaryRows
    .map((row) => ({
      ad: titleCaseCompany(row?.companyTitle),
      oran: parseRatio(row?.ratioOfCapitalShareOfCompany),
      sermaye: cleanText(row?.paidInOrIssuedCapital),
      paraBirimi: cleanText(row?.monetaryUnit?.text),
      faaliyetKonusu: cleanText(row?.scopeOfActivitiesOfCompany),
      iliski: cleanText(row?.relationWithTheCompany),
    }))
    .filter((row) => row.ad && row.oran !== undefined);

  const marketInstrumentRows = itemValue(
    items,
    "kpy41_acc3_son_durum_borsa_piyasalar",
    "kote edildiği diğer borsalar"
  );
  const firstTradingDate = (Array.isArray(marketInstrumentRows)
    ? marketInstrumentRows
    : []
  )
    .filter((row) => {
      const instrumentType = normalizeText(
        row?.typeOfTheListedOrTradingCapitalMarketInstrument
      );
      return instrumentType.includes("pay") || instrumentType.includes("hisse");
    })
    .map((row) => formatKapDate(row?.initialDateOfListingOrTrading))
    .filter(Boolean)
    .sort()[0];

  const freeFloatRows = itemValue(
    items,
    "kpy41_acc5_fiili_dolasimdaki_pay",
    "fiili dolaşımdaki paylar"
  );
  const freeFloatRow = (Array.isArray(freeFloatRows) ? freeFloatRows : []).find(
    (row) => cleanText(row?.isin).toUpperCase() === code
  );
  const freeFloatRatio = parseRatio(freeFloatRow?.actualOutstandingSharesRatio);

  const sectorLabel = sectors.join(" / ") || "Borsa İstanbul şirketleri";
  const activityText =
    activity ||
    `${companyName}, KAP'ta ${sectorLabel} altında sınıflandırılan bir şirkettir.`;

  const profile = {
    kod: code,
    sirketAdi: companyName,
    hakkinda: [activityText],
    ortaklikYapisi: {
      ortaklar: shareholders,
      not:
        shareholders.length > 0
          ? `KAP'ta açıklanan doğrudan ortaklık oranları ${VERIFIED_AT} tarihinde kontrol edilmiştir.`
          : "KAP şirket profilinde doğrudan ortaklık oranı tablosu yayımlanmamıştır.",
    },
    istirakler: subsidiaries,
    kurumsalBilgiler: compactObject({
      merkez: address || cleanText(contact?.address),
      uretimTesisleri: cleanTextList(
        itemValue(items, "kpy41_acc1_uretim_adres", "üretim tesisleri")
      ),
      web: website,
      kapSirketProfili: profileUrl,
      eposta: emails[0],
      telefon: cleanText(contact?.phone),
      fax: cleanText(contact?.fax),
      sirketSuresi: cleanText(
        itemValue(items, "kpy41_acc2_sure", "şirketin süresi")
      ),
      odenmisSermaye: formatMoney(
        itemValue(items, "kpy41_acc5_odenmis_sermaye", "ödenmiş")
      ),
      kayitliSermayeTavani: formatMoney(
        itemValue(
          items,
          "kpy41_acc5_kayitli_sermaye_tavani",
          "kayıtlı sermaye tavanı"
        )
      ),
      bagimsizDenetimKurulusu: cleanText(
        itemValue(items, "kpy41_acc2_bdk", "bağımsız denetim")
      ),
      faaliyetAlani: activityText,
      sektorler: sectors,
      islemGorduguPazar: markets,
      yonetimKurulu: board,
      ticaretSicilMemurlugu: cleanText(
        itemValue(
          items,
          "kpy41_acc4_ticaret_sicil_memurlugu",
          "ticaret sicil memurluğu"
        )
      ),
      tescilTarihi: formatKapDate(
        itemValue(items, "kpy41_acc4_tescil_tarihi", "tescil tarihi")
      ),
      ticaretSicilNumarasi: cleanText(
        itemValue(
          items,
          "kpy41_acc4_ticaret_sicil_numarasi",
          "ticaret sicil numarası"
        )
      ),
      vergiDairesi: cleanText(
        itemValue(items, "kpy41_acc4_vergi_dairesi", "vergi dairesi")
      ),
      yatirimciIliskileriYetkilileri: investorContacts,
    }),
    borsaBilgileri: compactObject({
      bistKodu: code,
      endeksler: indices,
      katilimEndeksiUygun: indices.some((index) =>
        normalizeText(index).includes("bist katilim")
      ),
      halkaArzTarihi: firstTradingDate,
      fiiliDolasimOrani: freeFloatRatio,
      anaHisseKodu: canonicalCode !== code ? canonicalCode : undefined,
    }),
    temettuSermayeGecmisi: [],
    ozgunAnaliz: compactObject({
      isModeli: activityText,
    }),
    seo: {
      title: `${code} Hisse Bilgileri: ${companyName} Şirket Profili ve Ortaklık Yapısı`,
      description: `${code} koduyla işlem gören ${companyName} için faaliyet alanı, ortaklık yapısı, yönetim kurulu, iştirakler, pazar ve endeks bilgileri.`,
    },
    veriDogrulama: {
      sonDogrulamaTarihi: VERIFIED_AT,
      kaynak: "KAP",
      kaynakUrl: profileUrl,
    },
    degisiklikGecmisi: [
      {
        tarih: VERIFIED_AT,
        baslik: "KAP şirket bilgileri doğrulandı",
        aciklama:
          "Kurumsal bilgiler, ortaklık yapısı ve borsa bilgileri resmi KAP profiliyle karşılaştırıldı.",
      },
    ],
    yasalUyari:
      "Bu sayfadaki bilgiler genel bilgilendirme amaçlıdır, yatırım tavsiyesi değildir. Fiyat/işlem verisi içermez.",
  };

  return {
    profile,
    source: compactObject({
      resmiWeb: website,
      kapSirketProfili: profileUrl,
      dogrulamaTarihi: VERIFIED_AT,
    }),
    sourceCoverage: {
      shareholderTable: Boolean(shareholderItem),
      subsidiaryTable: Boolean(subsidiaryItem),
    },
  };
}

function mergeProfile(existing, generated, sourceCoverage) {
  if (!existing) return generated;

  const existingAbout = cleanTextList(existing.hakkinda).filter(
    (item) => !isGeneratedAboutParagraph(item)
  );
  const generatedAbout = cleanTextList(generated.hakkinda);
  const mergedAnalysis = sanitizeAnalysisContent({
    ...generated.ozgunAnaliz,
    ...(existing.ozgunAnaliz ?? {}),
  });
  const history = Array.isArray(existing.degisiklikGecmisi)
    ? existing.degisiklikGecmisi.filter(
        (entry) => entry?.tarih !== VERIFIED_AT || entry?.baslik !== generated.degisiklikGecmisi[0].baslik
      )
    : [];

  return {
    ...generated,
    ...existing,
    kod: generated.kod,
    sirketAdi: existing.sirketAdi || generated.sirketAdi,
    hakkinda: existingAbout.length > 0 ? existingAbout : generatedAbout,
    ortaklikYapisi:
      sourceCoverage.shareholderTable &&
      generated.ortaklikYapisi.ortaklar.length > 0
        ? generated.ortaklikYapisi
        : existing.ortaklikYapisi ?? generated.ortaklikYapisi,
    istirakler: sourceCoverage.subsidiaryTable
      ? generated.istirakler
      : existing.istirakler ?? generated.istirakler,
    kurumsalBilgiler: compactObject({
      ...(existing.kurumsalBilgiler ?? {}),
      ...generated.kurumsalBilgiler,
      yatirimciIliskileri:
        existing.kurumsalBilgiler?.yatirimciIliskileri ||
        generated.kurumsalBilgiler?.yatirimciIliskileri,
    }),
    borsaBilgileri: {
      ...(existing.borsaBilgileri ?? {}),
      ...generated.borsaBilgileri,
      halkaArzTarihi:
        generated.borsaBilgileri.halkaArzTarihi ||
        existing.borsaBilgileri?.halkaArzTarihi ||
        "",
    },
    temettuSermayeGecmisi: Array.isArray(existing.temettuSermayeGecmisi)
      ? existing.temettuSermayeGecmisi
      : [],
    ozgunAnaliz: mergedAnalysis,
    seoSorular: existing.seoSorular,
    benzerSirketler: existing.benzerSirketler,
    seo: {
      ...generated.seo,
      ...(existing.seo ?? {}),
    },
    veriDogrulama: generated.veriDogrulama,
    degisiklikGecmisi: [generated.degisiklikGecmisi[0], ...history].slice(0, 6),
    yasalUyari: existing.yasalUyari || generated.yasalUyari,
  };
}

function readJson(filePath, fallback) {
  try {
    return JSON.parse(fs.readFileSync(filePath, "utf8"));
  } catch {
    return fallback;
  }
}

function getProfileUrl(company, profilePaths, section = "genel") {
  if (company.mkkMemberOid) {
    return `${KAP_PROFILE_BASE.replace(/\/genel$/, `/${section}`)}/${company.mkkMemberOid}`;
  }
  const summaryUrl = profilePaths[company.stockCode];
  if (summaryUrl) return summaryUrl.replace("/ozet/", `/${section}/`);
  return `${KAP_PROFILE_BASE}/${company.mkkMemberOid}`;
}

function writeJsonIfChanged(filePath, value) {
  const next = `${JSON.stringify(value, null, 2)}\n`;
  const current = fs.existsSync(filePath)
    ? fs.readFileSync(filePath, "utf8")
    : "";
  if (current === next) return false;

  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, next, "utf8");
  return true;
}

async function mapLimit(items, limitValue, mapper) {
  const results = new Array(items.length);
  let cursor = 0;

  async function worker() {
    while (cursor < items.length) {
      const index = cursor;
      cursor += 1;
      results[index] = await mapper(items[index], index);
    }
  }

  await Promise.all(
    Array.from({ length: Math.min(limitValue, items.length) }, () => worker())
  );
  return results;
}

async function waitForRequestSlot() {
  const now = Date.now();
  const wait = Math.max(0, nextRequestAt - now);
  nextRequestAt = Math.max(now, nextRequestAt) + MIN_REQUEST_INTERVAL_MS;
  if (wait > 0) {
    await new Promise((resolve) => setTimeout(resolve, wait));
  }
}

async function fetchText(url, attempts = 5) {
  let lastError;

  for (let attempt = 1; attempt <= attempts; attempt += 1) {
    await waitForRequestSlot();
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 45_000);

    try {
      const response = await fetch(url, {
        redirect: "follow",
        signal: controller.signal,
        headers: {
          accept: "text/html,application/xhtml+xml",
          "accept-language": "tr-TR,tr;q=0.9,en;q=0.8",
          "user-agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/134.0.0.0 Safari/537.36",
        },
      });

      if (!response.ok) {
        const error = new Error(`HTTP ${response.status}`);
        error.status = response.status;
        throw error;
      }
      return await response.text();
    } catch (error) {
      lastError = error;
      if (attempt < attempts) {
        const rateLimited = error?.status === 429 || error?.status === 666;
        const delay = rateLimited ? attempt * 10_000 : attempt * 1_500;
        await new Promise((resolve) => setTimeout(resolve, delay));
      }
    } finally {
      clearTimeout(timeout);
    }
  }

  throw lastError;
}

async function getBistTumCompanies() {
  for (let attempt = 1; attempt <= 3; attempt += 1) {
    const html = await fetchText(KAP_INDEX_URL);
    const flightText = decodeFlightText(html);
    const index = findObjectByMarker(
      flightText,
      '"code":"XUTUM"',
      (value) => value?.code === "XUTUM" && Array.isArray(value.content)
    );

    if (index) {
      return index.content
        .filter(
          (company) =>
            /^[A-Z0-9]{2,6}$/.test(company.stockCode ?? "") &&
            company.title &&
            company.mkkMemberOid
        )
        .sort((a, b) => a.stockCode.localeCompare(b.stockCode, "tr"));
    }

    if (attempt < 3) {
      await new Promise((resolve) => setTimeout(resolve, attempt * 1_000));
    }
  }

  throw new Error("KAP BIST TÜM listesi ayrıştırılamadı.");
}

function getBistTumCompaniesFromSnapshot() {
  const snapshot = readJson(SNAPSHOT_FILE, null);
  if (!Array.isArray(snapshot?.companies) || snapshot.companies.length === 0) {
    throw new Error("Yerel BIST TÜM anlık görüntüsü bulunamadı.");
  }

  return snapshot.companies
    .map((company) => ({
      stockCode: company.kod,
      title: company.sirketAdi,
      mkkMemberOid: company.mkkMemberOid,
    }))
    .filter(
      (company) =>
        /^[A-Z0-9]{2,6}$/.test(company.stockCode ?? "") &&
        company.title &&
        company.mkkMemberOid
    )
    .sort((a, b) => a.stockCode.localeCompare(b.stockCode, "tr"));
}

async function main() {
  const companies = fromSnapshot
    ? getBistTumCompaniesFromSnapshot()
    : await getBistTumCompanies();
  const existingCodes = new Set(
    fs
      .readdirSync(PROFILES_DIR)
      .filter((file) => file.endsWith(".json"))
      .map((file) => file.replace(/\.json$/i, "").toUpperCase())
  );
  const missing = companies.filter(
    (company) => !existingCodes.has(company.stockCode)
  );
  const companiesByMember = new Map();
  for (const company of companies) {
    const group = companiesByMember.get(company.mkkMemberOid) ?? [];
    group.push(company.stockCode);
    companiesByMember.set(company.mkkMemberOid, group);
  }
  const multipleShareClasses = [...companiesByMember.values()].filter(
    (codes) => codes.length > 1
  );
  const canonicalByMember = new Map();
  const profilePathDocument = readJson(PROFILE_PATHS_FILE, { profiles: {} });
  const profilePaths =
    profilePathDocument.profiles ?? profilePathDocument.sirketler ?? {};
  for (const [memberOid, codes] of companiesByMember) {
    const sortedCodes = [...codes].sort((a, b) => a.localeCompare(b, "tr"));
    canonicalByMember.set(
      memberOid,
      PRIMARY_SHARE_CODES.get(sortedCodes.join("|")) ?? sortedCodes[0]
    );
  }

  console.log(`BIST TÜM: ${companies.length}`);
  console.log(`BIST TÜM şirketi: ${companiesByMember.size}`);
  console.log(`Mevcut künye: ${existingCodes.size}`);
  console.log(`Eksik künye: ${missing.length}`);
  if (multipleShareClasses.length > 0) {
    console.log(
      `Birden fazla pay sınıfı: ${multipleShareClasses
        .map((codes) => codes.join("/"))
        .join(", ")}`
    );
  }

  if (inspectCode) {
    const company = companies.find((item) => item.stockCode === inspectCode);
    if (!company) {
      throw new Error(`${inspectCode} BIST TÜM listesinde bulunamadı.`);
    }

    const profileUrl = getProfileUrl(company, profilePaths);
    const profileHtml = await fetchText(profileUrl);
    const items = extractItemObjects(decodeFlightText(profileHtml));

    console.log(`\n${company.stockCode} | ${company.title}`);
    console.log(profileUrl);
    for (const item of items) {
      console.log(`\n[${item.itemKey}] ${item.itemName}`);
      console.log(JSON.stringify(item.value, null, 2));
    }
    return;
  }

  if (!writeChanges) {
    console.log("Değişiklik yapılmadı. Kaydetmek için --write kullanın.");
    return;
  }

  const snapshot = {
    version: 1,
    generatedAt: VERIFIED_AT,
    source: KAP_INDEX_URL,
    indexCode: "XUTUM",
    companies: companies.map((company) => ({
      kod: company.stockCode,
      sirketAdi: titleCaseCompany(company.title),
      mkkMemberOid: company.mkkMemberOid,
      anaHisseKodu: canonicalByMember.get(company.mkkMemberOid),
      kapSirketProfili: getProfileUrl(company, profilePaths),
    })),
  };
  writeJsonIfChanged(SNAPSHOT_FILE, snapshot);

  let targets = companies.filter((company) => {
    if (requestedCodes.size > 0 && !requestedCodes.has(company.stockCode)) {
      return false;
    }
    return !missingOnly || !existingCodes.has(company.stockCode);
  });
  if (limit > 0) targets = targets.slice(0, limit);

  const sourceDocument = readJson(OFFICIAL_SOURCES_FILE, {
    version: 1,
    generatedAt: VERIFIED_AT,
    profiles: {},
  });
  const officialSources = { ...(sourceDocument.profiles ?? {}) };
  const profileItemsCache = new Map();

  function getProfileItems(company) {
    if (!profileItemsCache.has(company.mkkMemberOid)) {
      const profileUrl = getProfileUrl(company, profilePaths);
      profileItemsCache.set(
        company.mkkMemberOid,
        fetchText(profileUrl).then((html) =>
          extractItemObjects(decodeFlightText(html))
        )
      );
    }
    return profileItemsCache.get(company.mkkMemberOid);
  }

  let changedProfiles = 0;
  const results = await mapLimit(targets, concurrency, async (company, index) => {
    try {
      const items = await getProfileItems(company);
      if (items.length === 0) throw new Error("KAP profil alanları okunamadı");

      const generated = buildProfile(
        company,
        items,
        canonicalByMember.get(company.mkkMemberOid) ?? company.stockCode,
        getProfileUrl(company, profilePaths)
      );
      const filePath = path.join(
        PROFILES_DIR,
        `${company.stockCode.toLowerCase()}.json`
      );
      const existing = readJson(filePath, null);
      const profile = mergeProfile(
        existing,
        generated.profile,
        generated.sourceCoverage
      );
      const changed = writeJsonIfChanged(filePath, profile);
      if (changed) changedProfiles += 1;

      const sourceKey = company.stockCode.toLowerCase();
      officialSources[sourceKey] = compactObject({
        ...(officialSources[sourceKey] ?? {}),
        ...generated.source,
        yatirimciIliskileri:
          officialSources[sourceKey]?.yatirimciIliskileri ||
          existing?.kurumsalBilgiler?.yatirimciIliskileri,
      });

      console.log(
        `[${index + 1}/${targets.length}] ${company.stockCode}: ${
          changed ? "güncellendi" : "değişmedi"
        }`
      );
      return { company, ok: true };
    } catch (error) {
      console.error(
        `[${index + 1}/${targets.length}] ${company.stockCode}: ${error.message}`
      );
      return { company, ok: false, error };
    }
  });

  const sortedSources = Object.fromEntries(
    Object.entries(officialSources).sort(([a], [b]) =>
      a.localeCompare(b, "tr")
    )
  );
  writeJsonIfChanged(OFFICIAL_SOURCES_FILE, {
    ...sourceDocument,
    version: 1,
    generatedAt: VERIFIED_AT,
    profiles: sortedSources,
  });

  const failures = results.filter((result) => !result.ok);
  console.log(`\nİşlenen: ${results.length}`);
  console.log(`Değişen/yeni künye: ${changedProfiles}`);
  console.log(`Başarısız: ${failures.length}`);
  if (failures.length > 0) process.exitCode = 1;
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
