import type { ReactNode } from "react";
import Breadcrumb from "@/components/Breadcrumb";
import SonGuncelleme from "@/components/SonGuncelleme";
import {
  ozgunTerimler,
  sozlukYayinTarihi,
  terimGuncellemeTarihi,
} from "@/data/sozluk";

const sozlukTarihleri: Record<string, string> = Object.fromEntries([
  ["/sozluk", sozlukYayinTarihi],
  ...ozgunTerimler().map((terim) => [
    `/sozluk/${terim.slug}`,
    terimGuncellemeTarihi(terim),
  ]),
]);

export default function SozlukLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Breadcrumb schemaOnly />
      <SonGuncelleme
        tarihler={sozlukTarihleri}
        yazar={{ isim: "Erman Hoca", href: "/yazar/erman-hoca" }}
      />
      {children}
    </>
  );
}
