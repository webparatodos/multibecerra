import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { WhatsAppFloatingButton } from "@/components/layout/whatsapp-floating-button";
import { ServicePage } from "@/components/sections/service-page";
import { siteConfig } from "@/lib/site-config";

const title = "Limpieza de Exteriores a Presión en Ronda";
const description =
  "Limpieza de exteriores a presión en Ronda y la Costa del Sol: pisos, patios y veredas. Eliminamos suciedad y musgo. Presupuesto sin compromiso por WhatsApp.";
const ogTitle = `${title} | Multi Becerra`;
const ogImage =
  "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=1200&auto=format&fit=crop";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/limpieza-exteriores" },
  openGraph: {
    type: "website",
    url: `${siteConfig.url}/limpieza-exteriores`,
    title: ogTitle,
    description,
    images: [{ url: ogImage, width: 1200, height: 630, alt: "Limpieza de exteriores en Ronda" }],
  },
  twitter: {
    card: "summary_large_image",
    title: ogTitle,
    description,
    images: [ogImage],
  },
};

export default function LimpiezaExterioresPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <ServicePage
          slug="limpieza-exteriores"
          breadcrumbLabel="Limpieza de exteriores"
          h1="Limpieza de exteriores a presión en Ronda"
          lead="Limpiamos a presión pisos, patios, veredas y fachadas de viviendas y comunidades en Ronda y la Costa del Sol. Eliminamos suciedad, musgo y manchas difíciles dejando el exterior como nuevo."
          heroImage="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=1200&auto=format&fit=crop"
          heroImageAlt="Limpieza a presión de un patio exterior en Ronda"
          whatsappMessage="Hola, quiero pedir presupuesto para limpieza de exteriores."
          contentBlocks={[
            {
              heading: "Qué incluye la limpieza de exteriores",
              paragraphs: [
                "Utilizamos equipos de limpieza a presión profesionales para eliminar suciedad acumulada, musgo, manchas de aceite y restos orgánicos de superficies exteriores.",
              ],
              bullets: [
                "Limpieza de patios, terrazas y porches",
                "Limpieza de pisos y suelos exteriores (piedra, hormigón, gres)",
                "Veredas, accesos y zonas comunes de comunidades",
                "Eliminación de musgo y verdín en zonas húmedas",
                "Limpieza de fachadas y muros exteriores",
              ],
            },
            {
              heading: "Cómo trabajamos",
              paragraphs: [
                "Valoramos la superficie y el tipo de suciedad antes de empezar, para usar la presión y los productos adecuados sin dañar el material. Trabajamos con hidrolimpiadoras profesionales y, si es necesario, aplicamos productos específicos para musgo o manchas persistentes antes del lavado a presión.",
              ],
            },
            {
              heading: "Precio orientativo",
              paragraphs: [
                "El precio depende de los metros cuadrados y el estado de la superficie. Como referencia, la limpieza de un patio o terraza mediano suele estar entre 80 y 200 €. Para comunidades o superficies grandes, hacemos presupuesto tras visitar la zona.",
              ],
            },
          ]}
          faqs={[
            {
              question: "¿Qué superficies podéis limpiar a presión?",
              answer:
                "Piedra, hormigón, gres, adoquín, madera exterior tratada y fachadas. Adaptamos la presión y los productos según el material para no dañarlo.",
            },
            {
              question: "¿Cada cuánto conviene limpiar un patio o vereda?",
              answer:
                "En zonas húmedas o con vegetación cercana recomendamos una limpieza cada 6-12 meses para evitar que el musgo y la suciedad se acumulen demasiado.",
            },
            {
              question: "¿Trabajáis en comunidades de vecinos?",
              answer:
                "Sí, limpiamos zonas comunes, accesos y veredas de comunidades en Ronda y la Costa del Sol, coordinando el horario con la comunidad.",
            },
            {
              question: "¿El presupuesto es gratuito?",
              answer:
                "Sí, siempre sin compromiso. Puedes escribirnos por WhatsApp con fotos de la zona a limpiar para darte un precio orientativo rápido.",
            },
          ]}
          otherServices={[
            {
              name: "Pintura",
              href: "/pintura",
              description: "Pintura interior y exterior de viviendas y comunidades.",
            },
            {
              name: "Mantenimiento de jardines",
              href: "/mantenimiento-jardines",
              description: "Poda, corte de césped y cuidado de plantas.",
            },
          ]}
        />
      </main>
      <Footer />
      <WhatsAppFloatingButton />
    </>
  );
}
