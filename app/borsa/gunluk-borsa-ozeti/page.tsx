import { redirect } from "next/navigation";
import { getEnGuncelGunlukOzet } from "@/lib/gunluk-ozet";

// Ayrı bir arşiv sayfası yok. Bu çıplak adres her zaman EN GÜNCEL günlük
// özete yönlendirir (kalıcı "bugünün özeti" girişi). Tüm günlük özetler ayrıca
// /haberler arşivinde ve ana sayfa haber akışında otomatik listelenir.
export default function GunlukBorsaOzetiIndex() {
  const enGuncel = getEnGuncelGunlukOzet();
  if (enGuncel) {
    redirect(`/borsa/gunluk-borsa-ozeti/${enGuncel.slug}`);
  }
  redirect("/borsa");
}
