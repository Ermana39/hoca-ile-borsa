import FonEtkiSeoPage from "../_components/FonEtkiSeoPage";
import {
  fonEtkiMetadataOlustur,
  fonEtkiSayfaVerisiGetir,
  fonEtkiSonGuncelleme,
} from "../_data/fonEtkiOzetleri";

export const metadata = fonEtkiMetadataOlustur("bmu");

const veri = fonEtkiSayfaVerisiGetir("bmu");

export default function BmuEtkiAnaliziPage() {
  return (
    <FonEtkiSeoPage
      {...veri}
      sonGuncelleme={fonEtkiSonGuncelleme.label}
    />
  );
}
