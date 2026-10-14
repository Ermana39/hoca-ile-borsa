import Link from "@/components/NoPrefetchLink";
import { KrediHesaplayici } from "@/components/faiz-hesaplayicilar";

export const metadata = {
  title: "Taşıt Kredisi Hesaplayıcı",
  description: "Kredi tutarı, aylık faiz oranı ve vadeye göre tahmini taşıt kredisi taksitini hesaplayın.",
  alternates: { canonical: "https://www.hocaileborsa.com/hesaplayici/tasit-kredisi" },
};

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-8 md:px-6">
      <div className="mx-auto max-w-7xl">
        <Link href="/hesaplayici" className="mb-6 inline-block text-sm font-semibold text-blue-700 hover:underline">
          Hesaplayıcılar
        </Link>
        <h1 className="sr-only">Taşıt Kredisi Hesaplayıcı</h1>
        <KrediHesaplayici
          baslik="Taşıt Kredisi Hesaplayıcı"
          aciklama="Kredi tutarı, aylık faiz oranı ve vadeye göre tahmini taksit ve toplam ödemeyi hesaplayın."
          varsayilanTutar={1_000_000}
          varsayilanOran={3.5}
          varsayilanVade={48}
        />
      </div>
    </main>
  );
}
