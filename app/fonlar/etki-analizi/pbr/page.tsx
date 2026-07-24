import FonEtkiSeoPage from "../_components/FonEtkiSeoPage";
import {
  fonEtkiMetadataOlustur,
  fonEtkiSayfaVerisiGetir,
  fonEtkiSonGuncelleme,
} from "../_data/fonEtkiOzetleri";

export const metadata = fonEtkiMetadataOlustur("pbr");

const veri = fonEtkiSayfaVerisiGetir("pbr");

export default function PbrEtkiAnaliziPage() {
  return (
    <FonEtkiSeoPage
      {...veri}
      sonGuncelleme={fonEtkiSonGuncelleme.label}
    />
  );
}
