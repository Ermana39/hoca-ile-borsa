import Link from "next/link";
import ContactForm from "@/components/contact-form";

function ReklamAlani() {
  return (
    <section
      aria-label="Reklam alanı"
      className="w-full overflow-hidden rounded-2xl border border-dashed border-zinc-300 bg-zinc-50 min-h-[220px] sm:min-h-[250px] lg:min-h-[280px]"
    >
      <div className="w-full min-h-[220px] sm:min-h-[250px] lg:min-h-[280px]" />
    </section>
  );
}

export default function IletisimPage() {
  return (
    <main className="min-h-screen bg-white px-4 py-6 md:px-6">
      <div className="mx-auto max-w-5xl">
        <div className="mb-6 flex flex-wrap gap-3">
          <Link
            href="/"
            className="rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100"
          >
            Ana Sayfa
          </Link>
          <Link
            href="/"
            className="rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100"
          >
            Geri
          </Link>
        </div>

        <h1 className="mb-6 text-3xl font-bold text-zinc-900">İletişim</h1>

        <div className="mb-8 grid grid-cols-1 gap-6 xl:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-5 rounded-2xl border border-zinc-200 bg-white p-6 text-zinc-700">
            <p>
              İletişim, iş birliği, içerik düzeltme talepleri ve veri güncelleme
              bildirimleri için aşağıdaki kanalları kullanabilirsiniz.
            </p>

            <div className="rounded-2xl bg-zinc-50 p-5">
              <div className="space-y-4">
                <p>
                  <strong>E-posta:</strong>{" "}
                  <a
                    href="mailto:destekhocaileborsa@gmail.com"
                    className="font-medium text-blue-600 underline underline-offset-4 hover:text-blue-700"
                  >
                    destekhocaileborsa@gmail.com
                  </a>
                </p>

                <p>
                  <strong>Konum:</strong> Kırklareli, Türkiye
                </p>

                <p>
                  <strong>X:</strong>{" "}
                  <a
                    href="https://x.com/HocaileBorsa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-blue-600 underline underline-offset-4 hover:text-blue-700"
                  >
                    https://x.com/HocaileBorsa
                  </a>
                </p>

                <p>
                  <strong>Instagram:</strong>{" "}
                  <a
                    href="https://www.instagram.com/hocaileborsa/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-blue-600 underline underline-offset-4 hover:text-blue-700"
                  >
                    https://www.instagram.com/hocaileborsa/
                  </a>
                </p>

                <p>
                  <strong>Telegram:</strong>{" "}
                  <a
                    href="https://t.me/borsa_halkaarz_endeks"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-blue-600 underline underline-offset-4 hover:text-blue-700"
                  >
                    https://t.me/borsa_halkaarz_endeks
                  </a>
                </p>
              </div>
            </div>
          </div>

          <ContactForm />
        </div>

        <section className="mt-8">
          <ReklamAlani />
        </section>
      </div>
    </main>
  );
}