"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { PaintRoller, Sprout, Droplets, ArrowRight } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/site-config";

const services = [
  {
    icon: PaintRoller,
    title: "Pintura",
    href: "/pintura",
    description:
      "Pintura interior y exterior de viviendas, comunidades y locales. Acabados cuidados y materiales de calidad.",
    image:
      "https://images.unsplash.com/photo-1562259949-e8e7689d7828?q=80&w=1200&auto=format&fit=crop",
    message: "Hola, quiero pedir presupuesto para un trabajo de pintura.",
  },
  {
    icon: Sprout,
    title: "Mantenimiento de jardines",
    href: "/mantenimiento-jardines",
    description:
      "Poda, corte de césped, cuidado de plantas y diseño de zonas verdes para que tu jardín luzca siempre perfecto.",
    image:
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?q=80&w=1200&auto=format&fit=crop",
    message:
      "Hola, quiero pedir presupuesto para mantenimiento de jardín.",
  },
  {
    icon: Droplets,
    title: "Limpieza de exteriores",
    href: "/limpieza-exteriores",
    description:
      "Limpieza a presión de pisos, patios y veredas. Eliminamos suciedad, musgo y manchas difíciles.",
    image:
      "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=1200&auto=format&fit=crop",
    message:
      "Hola, quiero pedir presupuesto para limpieza de exteriores.",
  },
];

export function Services() {
  return (
    <section id="servicios" className="bg-brand-cream py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="font-heading text-3xl font-extrabold text-brand-dark sm:text-4xl">
            Nuestros servicios
          </h2>
          <p className="mt-4 text-brand-dark/70">
            Todo lo que necesitas para cuidar tu casa o negocio, con un mismo
            equipo de confianza.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5 transition-shadow hover:shadow-lg"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand-green/15 text-brand-dark">
                  <service.icon className="h-6 w-6" strokeWidth={2} />
                </span>
                <h3 className="font-heading text-xl font-bold text-brand-dark">
                  {service.title}
                </h3>
                <p className="mt-2 flex-1 text-sm text-brand-dark/70">
                  {service.description}
                </p>
                <div className="mt-5 flex items-center gap-4">
                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-dark transition-colors hover:text-brand-green"
                  >
                    Ver más
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                  <a
                    href={buildWhatsAppUrl(service.message)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-brand-dark/60 transition-colors hover:text-brand-green"
                  >
                    Pedir presupuesto
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
