// ============================================================================
//  ELLE HAZIRLANAN (TAM SAYFA) HİSSELER
// ----------------------------------------------------------------------------
//  İki tür hisse künyesi var:
//   1) JSON şablonu  → data/hisseler/<kod>.json  (sade, otomatik render)
//   2) Tam sayfa     → app/hisse/<kod>/page.tsx   (tamamen özel tasarım, örn. A1CAP)
//
//  Tam sayfa (page.tsx) olarak hazırladığın bir hisseyi /hisseler LİSTESİNDE ve
//  SİTEMAP'te göstermek için buraya bir satır ekle. (Sayfanın kendisi zaten
//  app/hisse/<kod>/page.tsx olduğu an yayında olur; bu liste sadece künye
//  listesinde ve sitemap'te görünmesi içindir.)
//
//  YENİ TAM SAYFA HİSSE EKLERKEN:
//   1) app/hisse/<kod>/page.tsx dosyanı oluştur (örn. app/hisse/garan/page.tsx)
//   2) Aşağıya bir satır ekle:
//        { kod: "GARAN", sirketAdi: "Türkiye Garanti Bankası A.Ş." },
//
//  NOT: JSON şablonuyla eklediğin hisseler için BURAYA bir şey eklemene
//       gerek yoktur; onlar otomatik listelenir.
// ============================================================================

export type OzelHisse = { kod: string; sirketAdi: string };

export const ozelHisseler: OzelHisse[] = [
  // Henüz elle tam sayfa hisse eklenmedi.
  // Örnek: { kod: "GARAN", sirketAdi: "Türkiye Garanti Bankası A.Ş." },
];
