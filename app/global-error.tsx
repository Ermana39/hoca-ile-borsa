"use client";

export default function GlobalError() {
  return (
    <html lang="tr">
      <body>
        <main className="min-h-screen bg-white px-4 py-10 md:px-6">
          <div className="mx-auto max-w-2xl rounded-2xl border border-zinc-200 bg-white p-6 text-center">
            <h1 className="text-2xl font-bold text-zinc-900">Beklenmeyen bir hata oluştu</h1>
            <p className="mt-3 text-zinc-600">
              Teknik detay gösterilmiyor. Sayfayı yenileyip tekrar deneyin.
            </p>
          </div>
        </main>
      </body>
    </html>
  );
}