"use client";

import { MessageCircle } from "lucide-react";
import { buildWhatsAppUrl, defaultWhatsAppMessage } from "@/lib/site-config";

export function WhatsAppFloatingButton() {
  return (
    <a
      href={buildWhatsAppUrl(defaultWhatsAppMessage)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110 active:scale-95 md:bottom-6 md:right-6"
    >
      <MessageCircle className="h-7 w-7" strokeWidth={2.25} fill="white" />
      <span className="sr-only">Contactar por WhatsApp</span>
    </a>
  );
}
