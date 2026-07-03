import type { FaqItem } from "@/components/seo/faq-jsonld";

export function FaqSection({ items }: { items: FaqItem[] }) {
  return (
    <section className="bg-brand-cream py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center font-heading text-3xl font-extrabold text-brand-dark sm:text-4xl">
          Preguntas frecuentes
        </h2>
        <div className="mt-12 space-y-6">
          {items.map((item) => (
            <div
              key={item.question}
              className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5"
            >
              <h3 className="font-heading text-lg font-bold text-brand-dark">
                {item.question}
              </h3>
              <p className="mt-2 text-sm text-brand-dark/70">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
