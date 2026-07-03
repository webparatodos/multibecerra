"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

// Reseñas de ejemplo — sustituir por reseñas reales de clientes.
const testimonials = [
  {
    name: "Carmen R.",
    location: "Ronda",
    text: "Vinieron a pintar la fachada de casa y quedaron encantadores, muy limpios y puntuales. El resultado superó lo que esperaba.",
  },
  {
    name: "Antonio M.",
    location: "Marbella",
    text: "Llevan el mantenimiento de mi jardín desde hace meses. Siempre cumplen el día acordado y el césped nunca ha estado mejor.",
  },
  {
    name: "Laura G.",
    location: "Estepona",
    text: "Contraté la limpieza a presión del patio y quedó como nuevo. Precio justo y trato muy cercano, sin duda repetiré.",
  },
];

export function Testimonials() {
  return (
    <section className="bg-brand-cream py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="font-heading text-3xl font-extrabold text-brand-dark sm:text-4xl">
            Lo que dicen nuestros clientes
          </h2>
        </motion.div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.figure
              key={testimonial.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5"
            >
              <div className="flex gap-1 text-brand-green">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4" fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-sm text-brand-dark/80">
                “{testimonial.text}”
              </blockquote>
              <figcaption className="mt-5 text-sm font-semibold text-brand-dark">
                {testimonial.name}
                <span className="font-normal text-brand-dark/50">
                  {" "}
                  · {testimonial.location}
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
