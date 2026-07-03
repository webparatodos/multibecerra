import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { WhatsAppFloatingButton } from "@/components/layout/whatsapp-floating-button";
import { ServicePage } from "@/components/sections/service-page";
import { siteConfig } from "@/lib/site-config";

const title = "Mantenimiento de Jardines en Ronda | Jardinero";
const description =
  "Jardinero en Ronda y la Serranía: poda, corte de césped y cuidado de plantas. Mantenimiento de jardines para viviendas y comunidades en la Costa del Sol.";
const ogTitle = `${title} | Multi Becerra`;
const ogImage =
  "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?q=80&w=1200&auto=format&fit=crop";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/mantenimiento-jardines" },
  openGraph: {
    type: "website",
    url: `${siteConfig.url}/mantenimiento-jardines`,
    title: ogTitle,
    description,
    images: [{ url: ogImage, width: 1200, height: 630, alt: "Mantenimiento de jardines en Ronda" }],
  },
  twitter: {
    card: "summary_large_image",
    title: ogTitle,
    description,
    images: [ogImage],
  },
};

export default function MantenimientoJardinesPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <ServicePage
          slug="mantenimiento-jardines"
          breadcrumbLabel="Mantenimiento de jardines"
          h1="Mantenimiento de jardines en Ronda y la Serranía"
          lead="Cuidamos jardines de viviendas, chalets, casas rurales y comunidades en Ronda, la Serranía de Ronda y la Costa del Sol. Poda, corte de césped y mantenimiento regular para que tu jardín esté siempre en su mejor momento."
          heroImage="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?q=80&w=1200&auto=format&fit=crop"
          heroImageAlt="Jardinero podando plantas en un jardín de Ronda"
          whatsappMessage="Hola, quiero pedir presupuesto para mantenimiento de jardín."
          contentBlocks={[
            {
              heading: "Qué incluye el mantenimiento de jardines",
              paragraphs: [
                "Ofrecemos un servicio completo de jardinería adaptado al tamaño y las necesidades de cada jardín, tanto para mantenimientos puntuales como contratos regulares durante todo el año.",
              ],
              bullets: [
                "Corte y perfilado de césped",
                "Poda de setos, arbustos y árboles de tamaño medio",
                "Cuidado y abonado de plantas y zonas ajardinadas",
                "Riego, control de plagas y limpieza de hojas y restos vegetales",
                "Diseño y renovación de pequeñas zonas verdes",
              ],
            },
            {
              heading: "Frecuencia recomendada",
              paragraphs: [
                "En primavera y verano recomendamos un corte de césped cada 1-2 semanas y revisión de setos cada mes. En otoño e invierno el mantenimiento puede espaciarse a visitas mensuales o bimensuales, centradas en poda y limpieza de hojas. Adaptamos la frecuencia a tu jardín y a tu presupuesto.",
              ],
            },
            {
              heading: "Precio orientativo",
              paragraphs: [
                "Un mantenimiento básico (césped + seto) para un jardín de tamaño medio suele rondar entre 40 y 90 € por visita, según la superficie y el trabajo necesario. Para jardines grandes o fincas rústicas, valoramos el presupuesto tras visitar el terreno.",
              ],
            },
          ]}
          faqs={[
            {
              question: "¿Hacéis contratos de mantenimiento mensual?",
              answer:
                "Sí, ofrecemos contratos de mantenimiento periódico (semanal, quincenal o mensual) además de servicios puntuales, según lo que necesite tu jardín.",
            },
            {
              question: "¿Trabajáis en fincas y casas rurales fuera de Ronda?",
              answer:
                "Sí, cubrimos toda la Serranía de Ronda y la Costa del Sol, incluyendo segundas residencias y casas rurales con jardines o terrenos amplios.",
            },
            {
              question: "¿Retiráis los restos de poda y césped cortado?",
              answer:
                "Sí, la retirada y limpieza de restos vegetales está incluida en el servicio, dejando el jardín limpio y recogido al terminar.",
            },
            {
              question: "¿Podéis diseñar un jardín nuevo o solo mantenerlo?",
              answer:
                "Ambas cosas: hacemos mantenimiento de jardines existentes y también pequeñas renovaciones o creación de nuevas zonas verdes.",
            },
          ]}
          otherServices={[
            {
              name: "Pintura",
              href: "/pintura",
              description: "Pintura interior y exterior de viviendas y comunidades.",
            },
            {
              name: "Limpieza de exteriores",
              href: "/limpieza-exteriores",
              description: "Limpieza a presión de patios, pisos y veredas.",
            },
          ]}
        />
      </main>
      <Footer />
      <WhatsAppFloatingButton />
    </>
  );
}
