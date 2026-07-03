"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { WhatsAppButton } from "@/components/layout/whatsapp-button";
import { siteConfig } from "@/lib/site-config";

export function Hero() {
  return (
    <section className="relative flex min-h-[85vh] items-center overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1558904541-efa843a96f01?q=80&w=2000&auto=format&fit=crop"
        alt="Jardín cuidado y exterior de una vivienda en Ronda"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/80 via-brand-dark/70 to-brand-dark/90" />

      <div className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <span className="inline-block rounded-full bg-brand-green-light/20 px-4 py-1 text-sm font-medium text-brand-green-light">
            Ronda &amp; Costa del Sol
          </span>

          <h1 className="mt-5 font-heading text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
            {siteConfig.claim}
          </h1>

          <p className="mt-6 max-w-xl text-lg text-white/85">
            Pintura, mantenimiento de jardines y limpieza de exteriores.
            Trabajos serios, garantizados y puntuales para tu casa o negocio.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <WhatsAppButton className="px-8 py-4 text-base">
              Pedir presupuesto por WhatsApp
            </WhatsAppButton>
            <a
              href="#servicios"
              className="inline-flex items-center justify-center rounded-full border border-white/30 px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-white/10"
            >
              Ver servicios
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
