"use client";

import { motion } from "framer-motion";
import { ShieldCheck, BadgeCheck, Clock } from "lucide-react";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Responsabilidad y confianza",
    description:
      "Tratamos tu casa o negocio como si fuera nuestro. Comunicación clara antes, durante y después del trabajo.",
  },
  {
    icon: BadgeCheck,
    title: "Trabajo garantizado",
    description:
      "Cuidamos cada detalle y respondemos si algo no queda como esperabas. Tu satisfacción es el resultado final.",
  },
  {
    icon: Clock,
    title: "Puntualidad y compromiso",
    description:
      "Llegamos cuando decimos que llegamos y cumplimos los plazos acordados, sin sorpresas de última hora.",
  },
];

export function WhyUs() {
  return (
    <section id="nosotros" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="font-heading text-3xl font-extrabold text-brand-dark sm:text-4xl">
            Por qué elegirnos
          </h2>
          <p className="mt-4 text-brand-dark/70">
            Somos un equipo local que conoce cada rincón de Ronda y la Costa
            del Sol.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-8 sm:grid-cols-3">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              <span className="mb-5 inline-flex h-16 w-16 items-center justify-center rounded-full bg-brand-dark text-brand-green-light">
                <reason.icon className="h-8 w-8" strokeWidth={1.75} />
              </span>
              <h3 className="font-heading text-lg font-bold text-brand-dark">
                {reason.title}
              </h3>
              <p className="mt-2 max-w-xs text-sm text-brand-dark/70">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
