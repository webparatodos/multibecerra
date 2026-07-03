import { MapPin, Phone } from "lucide-react";
import { InstagramIcon } from "@/components/icons/instagram-icon";
import { Logo } from "@/components/layout/logo";
import { WhatsAppButton } from "@/components/layout/whatsapp-button";
import { siteConfig } from "@/lib/site-config";

export function Footer() {
  return (
    <footer id="contacto" className="bg-brand-dark text-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="space-y-4">
            <Logo variant="dark" />
            <p className="max-w-xs text-sm text-white/70">
              {siteConfig.claim}. Mantenimiento de jardines, pintura y
              limpieza de exteriores en Ronda y la Costa del Sol.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-heading text-lg font-bold">Contacto</h3>
            <div className="flex items-center gap-3 text-sm text-white/80">
              <Phone className="h-4 w-4 text-brand-green-light" />
              <span>{siteConfig.phoneDisplay}</span>
            </div>
            <a
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-sm text-white/80 transition-colors hover:text-brand-green-light"
            >
              <InstagramIcon className="h-4 w-4 text-brand-green-light" />
              <span>{siteConfig.instagramLabel}</span>
            </a>
            <div className="flex items-center gap-3 text-sm text-white/80">
              <MapPin className="h-4 w-4 shrink-0 text-brand-green-light" />
              <span>{siteConfig.location}</span>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-heading text-lg font-bold">
              ¿Hablamos por WhatsApp?
            </h3>
            <p className="text-sm text-white/70">
              Respuesta rápida y presupuesto sin compromiso.
            </p>
            <WhatsAppButton />
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center text-xs text-white/60">
          © {new Date().getFullYear()} {siteConfig.name}. Todos los derechos
          reservados.
        </div>
      </div>
    </footer>
  );
}
