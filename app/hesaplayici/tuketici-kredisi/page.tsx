import Link from "@/components/NoPrefetchLink";
import { KrediHesaplayici } from "@/components/faiz-hesaplayicilar";

export const metadata = {
  title: "Tüketici Kredisi Hesaplayıcı",
  description: "Kredi tutarı, aylık faiz oranı ve vadeye göre tahmini tüketici kredisi taksitini hesaplayın.",
  alternates: { canonical: "https://www.hocaileborsa.com/hesaplayici/tuketici-kredisi" },
};

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-8 md:px-6">
      <div className="mx-auto max-w-7xl">
        <Link href="/hesaplayici" className="mb-6 inline-block text-sm font-semibold text-blue-700 hover:underline">
          Hesaplayıcılar
        </Link>
        <h1 className="sr-only">Tüketici Kredisi Hesaplayıcı</h1>
        <KrediHesaplayici
          baslik="Tüketici Kredisi Hesaplayıcı"
          aciklama="Kredi tutarı, aylık faiz oranı ve vadeye göre tahmini taksit ve toplam ödemeyi hesaplayın."
          varsayilanTutar={100_000}
          varsayilanOran={4}
          varsayilanVade={36}
        />
      </div>
    </main>
  );
}
