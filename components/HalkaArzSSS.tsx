import { serializeJsonLd } from "@/lib/json-ld";
export type SSSItem = {
  soru: string;
  cevap: string;
};

export default function HalkaArzSSS({
  title = "Sık Sorulan Sorular",
  items,
  className = "",
  schema = true,
}: {
  title?: string;
  items: SSSItem[];
  className?: string;
  /** FAQPage JSON-LD şeması eklensin mi (varsayılan: true) */
  schema?: boolean;
}) {
  if (items.length === 0) return null;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.soru,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.cevap,
      },
    })),
  };

  return (
    <section
      aria-label={title}
      className={`rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6 ${className}`}
    >
      {schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }}
        />
      )}
      <h2 className="mb-5 text-lg font-bold text-slate-900 sm:text-xl">{title}</h2>

      <div className="space-y-3">
        {items.map((item) => (
          <details
            key={item.soru}
            className="group rounded-2xl border border-slate-200 bg-slate-50 transition open:bg-white open:shadow-sm"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-4 py-3 text-sm font-semibold text-slate-800 marker:hidden">
              <span>{item.soru}</span>
              <span
                aria-hidden="true"
                className="shrink-0 text-lg leading-none text-slate-400 transition-transform group-open:rotate-45"
              >
                +
              </span>
            </summary>
            <p className="px-4 pb-4 text-sm leading-7 text-slate-600">
              {item.cevap}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
