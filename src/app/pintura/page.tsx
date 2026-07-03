import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { WhatsAppFloatingButton } from "@/components/layout/whatsapp-floating-button";
import { ServicePage } from "@/components/sections/service-page";
import { siteConfig } from "@/lib/site-config";

const title = "Pintores en Ronda | Pintura Interior y Exterior";
const description =
  "Pintores en Ronda y la Costa del Sol. Pintura interior, exterior y de fachadas para viviendas y comunidades. Presupuesto sin compromiso por WhatsApp.";
const ogTitle = `${title} | Multi Becerra`;
const ogImage =
  "https://images.unsplash.com/photo-1562259949-e8e7689d7828?q=80&w=1200&auto=format&fit=crop";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/pintura" },
  openGraph: {
    type: "website",
    url: `${siteConfig.url}/pintura`,
    title: ogTitle,
    description,
    images: [{ url: ogImage, width: 1200, height: 630, alt: "Pintura en Ronda" }],
  },
  twitter: {
    card: "summary_large_image",
    title: ogTitle,
    description,
    images: [ogImage],
  },
};

export default function PinturaPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <ServicePage
          slug="pintura"
          breadcrumbLabel="Pintura"
          h1="Pintores en Ronda: pintura interior y exterior"
          lead="En Multi Becerra pintamos viviendas, comunidades de vecinos, locales y casas rurales en Ronda, la Serranía y la Costa del Sol. Acabados cuidados, materiales de calidad y un equipo que respeta los plazos acordados."
          heroImage="https://images.unsplash.com/photo-1562259949-e8e7689d7828?q=80&w=1200&auto=format&fit=crop"
          heroImageAlt="Pintor aplicando pintura en una pared en Ronda"
          whatsappMessage="Hola, quiero pedir presupuesto para un trabajo de pintura."
          contentBlocks={[
            {
              heading: "Qué incluye nuestro servicio de pintura",
              paragraphs: [
                "Trabajamos tanto pintura de interiores (salones, habitaciones, escaleras, comunidades) como pintura de exteriores y fachadas, adaptándonos a las necesidades de cada vivienda o negocio en Ronda y alrededores.",
              ],
              bullets: [
                "Pintura de interiores: paredes, techos, escaleras y zonas comunes",
                "Pintura de fachadas y exteriores resistentes a la intemperie",
                "Alisado, lijado y preparación previa de superficies",
                "Corrección de humedades y grietas antes de pintar",
                "Asesoramiento en colores y acabados (mate, satinado, plástico)",
              ],
            },
            {
              heading: "Cómo trabajamos",
              paragraphs: [
                "Primero visitamos el espacio (o valoramos por fotos si la urgencia lo requiere) para dar un presupuesto ajustado y sin sorpresas. Protegemos suelos y mobiliario, preparamos bien las superficies y aplicamos las manos necesarias para un acabado uniforme y duradero. Al terminar, dejamos la zona de trabajo limpia.",
              ],
            },
            {
              heading: "Precio orientativo",
              paragraphs: [
                "El precio de un trabajo de pintura depende de la superficie, el estado de las paredes y el tipo de acabado elegido. Como referencia, la pintura de una habitación estándar suele estar entre 150 y 300 €, y una fachada completa se valora tras visitar la vivienda. Te damos siempre un presupuesto cerrado antes de empezar, sin compromiso.",
              ],
            },
          ]}
          faqs={[
            {
              question: "¿Cuánto tarda en pintarse una vivienda completa?",
              answer:
                "Depende del tamaño, pero un piso de 2-3 habitaciones suele completarse en 3-5 días de trabajo, incluyendo preparación de superficies y dos manos de pintura.",
            },
            {
              question: "¿Trabajáis en comunidades de vecinos?",
              answer:
                "Sí, pintamos escaleras, portales y fachadas de comunidades en Ronda y la Costa del Sol, coordinando los horarios para molestar lo mínimo posible a los vecinos.",
            },
            {
              question: "¿Qué tipo de pintura usáis?",
              answer:
                "Trabajamos con pinturas de marcas reconocidas, plásticas para interior y especiales para exterior con mayor resistencia a la humedad y al sol. Te asesoramos según el uso del espacio.",
            },
            {
              question: "¿Hacéis presupuesto gratuito?",
              answer:
                "Sí, el presupuesto es siempre gratuito y sin compromiso. Puedes pedirlo por WhatsApp contándonos qué necesitas o enviando fotos del espacio.",
            },
          ]}
          otherServices={[
            {
              name: "Mantenimiento de jardines",
              href: "/mantenimiento-jardines",
              description: "Poda, corte de césped y cuidado de plantas en Ronda y la Costa del Sol.",
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
