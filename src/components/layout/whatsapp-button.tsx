"use client";

import { MessageCircle } from "lucide-react";
import { buildWhatsAppUrl, defaultWhatsAppMessage } from "@/lib/site-config";
import { cn } from "@/lib/utils";

type WhatsAppButtonProps = {
  message?: string;
  className?: string;
  children?: React.ReactNode;
};

export function WhatsAppButton({
  message = defaultWhatsAppMessage,
  className,
  children,
}: WhatsAppButtonProps) {
  return (
    <a
      href={buildWhatsAppUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full bg-brand-green px-6 py-3 font-heading font-semibold text-brand-dark shadow-md transition-transform hover:scale-105 hover:bg-brand-green-light active:scale-95",
        className,
      )}
    >
      <MessageCircle className="h-5 w-5" strokeWidth={2.5} />
      {children ?? "Pedir presupuesto"}
    </a>
  );
}
