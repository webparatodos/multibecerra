"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { WhatsAppButton } from "@/components/layout/whatsapp-button";
import { siteConfig } from "@/lib/site-config";

export function CoverageArea() {
  return (
    <section id="zona" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-green/15 px-4 py-1 text-sm font-medium text-brand-dark">
              <MapPin className="h-4 w-4" />
              Zona de trabajo
            </span>
            <h2 className="mt-5 font-heading text-3xl font-extrabold text-brand-dark sm:text-4xl">
              Trabajamos por alrededores de Ronda y en la Costa del Sol
            </h2>
            <p className="mt-4 text-brand-dark/70">
              Nos desplazamos a domicilio para valorar tu proyecto sin
              compromiso. Si tu localidad está dentro de Ronda, la Serranía o
              la Costa del Sol, cuéntanos qué necesitas.
            </p>
            <div className="mt-8">
              <WhatsAppButton>Consultar disponibilidad</WhatsAppButton>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="overflow-hidden rounded-2xl shadow-md ring-1 ring-black/5"
          >
            <iframe
              title={`Mapa de cobertura de ${siteConfig.name}`}
              src="https://www.google.com/maps?q=Ronda,Malaga,Spain&output=embed"
              className="h-80 w-full sm:h-96"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
