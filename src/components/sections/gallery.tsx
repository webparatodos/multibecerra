"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const items = [
  {
    label: "Pintura de fachada",
    image:
      "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=900&auto=format&fit=crop",
  },
  {
    label: "Jardín mantenido",
    image:
      "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=900&auto=format&fit=crop",
  },
  {
    label: "Limpieza de patio",
    image:
      "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=900&auto=format&fit=crop&sat=-40",
  },
  {
    label: "Poda y setos",
    image:
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?q=80&w=900&auto=format&fit=crop",
  },
  {
    label: "Pintura interior",
    image:
      "https://images.unsplash.com/photo-1562259949-e8e7689d7828?q=80&w=900&auto=format&fit=crop",
  },
  {
    label: "Césped cuidado",
    image:
      "https://images.unsplash.com/photo-1558904541-efa843a96f01?q=80&w=900&auto=format&fit=crop",
  },
];

export function Gallery() {
  return (
    <section id="galeria" className="bg-brand-cream py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="font-heading text-3xl font-extrabold text-brand-dark sm:text-4xl">
            Trabajos realizados
          </h2>
          <p className="mt-4 text-brand-dark/70">
            Una muestra de nuestros últimos trabajos de pintura, jardinería y
            limpieza de exteriores.
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3">
          {items.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: (index % 3) * 0.08 }}
              className="group relative aspect-square overflow-hidden rounded-xl"
            >
              <Image
                src={item.image}
                alt={item.label}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(min-width: 1024px) 33vw, 50vw"
              />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-brand-dark/70 via-brand-dark/0 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="font-heading text-sm font-semibold text-white">
                  {item.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
