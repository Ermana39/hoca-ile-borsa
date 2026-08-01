import FonEtkiSeoPage from "../_components/FonEtkiSeoPage";
import {
  fonEtkiMetadataOlustur,
  fonEtkiSayfaVerisiGetir,
  fonEtkiSonGuncelleme,
} from "../_data/fonEtkiOzetleri";

export const metadata = fonEtkiMetadataOlustur("kha");

const veri = fonEtkiSayfaVerisiGetir("kha");

export default function KhaEtkiAnaliziPage() {
  return (
    <FonEtkiSeoPage
      {...veri}
      sonGuncelleme={fonEtkiSonGuncelleme.label}
    />
  );
}
