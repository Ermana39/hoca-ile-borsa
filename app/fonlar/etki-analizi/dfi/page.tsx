import FonEtkiSeoPage from "../_components/FonEtkiSeoPage";
import {
  fonEtkiMetadataOlustur,
  fonEtkiSayfaVerisiGetir,
} from "../_data/fonEtkiOzetleri";

export const metadata = fonEtkiMetadataOlustur("dfi");

const veri = fonEtkiSayfaVerisiGetir("dfi");

export default function DfiEtkiAnaliziPage() {
  return <FonEtkiSeoPage {...veri} />;
}
