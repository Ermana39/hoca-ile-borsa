import fs from "fs/promises";
import path from "path";
import { unstable_cache } from "next/cache";

export type SheetData = {
  rawRows?: (string | number | null)[][];
};

export type FaizJsonData = {
  guncellemeTarihi?: string;
  sheets?: Record<string, SheetData>;
};

const jsonRelativePath =
  "app/mevduat-kredi-faizleri/data/hoca-ile-borsa-faiz-takip-sablonu-guncel.json";

/**
 * Bu JSON dosyası ~1,7 MB. Önceden 4 ayrı sayfada `import faizData from "...json"`
 * ile statik olarak içe aktarılıyordu; bu da dosyayı her sayfanın fonksiyon
 * paketine ayrı ayrı gömüyor (paket boyutu + soğuk başlatma süresi artıyor) ve
 * her modül yüklemesinde yeniden parse ediliyordu.
 *
 * Bunun yerine dosyayı çalışma zamanında diskten okuyup `unstable_cache` ile
 * saatlik önbelleğe alıyoruz; tüm faiz sayfaları aynı önbellek girişini
 * paylaşır, ağır okuma+parse işlemi saatte sadece bir kez çalışır.
 */
export const getFaizData = unstable_cache(
  async (): Promise<FaizJsonData> => {
    const filePath = path.join(process.cwd(), jsonRelativePath);
    const file = await fs.readFile(filePath, "utf-8");
    return JSON.parse(file) as FaizJsonData;
  },
  ["faiz-takip-json-data"],
  { revalidate: false }
);
