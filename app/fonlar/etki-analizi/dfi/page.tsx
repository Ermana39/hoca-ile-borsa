import FonEtkiSeoPage from "../_components/FonEtkiSeoPage";
import {
  fonEtkiMetadataOlustur,
  fonEtkiSayfaVerisiGetir,
  fonEtkiSonGuncelleme,
} from "../_data/fonEtkiOzetleri";

export const metadata = fonEtkiMetadataOlustur("dfi");

const veri = fonEtkiSayfaVerisiGetir("dfi");

export default function DfiEtkiAnaliziPage() {
  return (
    <FonEtkiSeoPage
      {...veri}
      sonGuncelleme={fonEtkiSonGuncelleme.label}
    />
  );
}
