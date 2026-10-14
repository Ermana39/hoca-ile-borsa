import Link from "@/components/NoPrefetchLink";
import { MevduatHesaplayici } from "@/components/faiz-hesaplayicilar";

export const metadata = {
  title: "Mevduat Faizi Hesaplayıcı",
  description: "Ana para, yıllık faiz oranı, vade ve stopaja göre tahmini mevduat getirinizi hesaplayın.",
  alternates: { canonical: "https://www.hocaileborsa.com/hesaplayici/mevduat-faizi" },
};

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-8 md:px-6">
      <div className="mx-auto max-w-7xl">
        <Link href="/hesaplayici" className="mb-6 inline-block text-sm font-semibold text-blue-700 hover:underline">
          Hesaplayıcılar
        </Link>
        <h1 className="sr-only">Mevduat Faizi Hesaplayıcı</h1>
        <MevduatHesaplayici />
      </div>
    </main>
  );
}
