import { createRequire } from "node:module";

// SheetJS'in Node sürümü dosya sistemi ve eski Excel kodlama desteğini
// CommonJS üzerinden kendisi yükler; ESM sürümü bu bağımlılıkları yüklemez.
const require = createRequire(import.meta.url);
const XLSX = require("xlsx");

export default XLSX;
