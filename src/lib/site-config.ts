export const siteConfig = {
  name: "Multi Becerra",
  claim: "Tu espacio en buenas manos",
  description:
    "Mantenimiento de jardines, pintura y limpieza de exteriores en Ronda y la Costa del Sol (Málaga). Presupuesto sin compromiso por WhatsApp.",
  url: "https://www.multibecerra.com",
  phone: "617619512",
  phoneDisplay: "617 61 95 12",
  phoneIntl: "+34617619512",
  facebookUrl: "https://www.facebook.com/search/top?q=multi%20becerra",
  facebookLabel: "Multi Becerra",
  location: "Ronda y Costa del Sol (Andalucía)",
  email: "info@multibecerra.com",
  services: [
    "Pintura interior y exterior",
    "Mantenimiento de jardines",
    "Limpieza de exteriores a presión",
  ],
  areasServed: [
    "Ronda",
    "Marbella",
    "Estepona",
    "San Pedro de Alcántara",
    "Costa del Sol",
  ],
};

export function buildWhatsAppUrl(message: string) {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/34${siteConfig.phone}?text=${encoded}`;
}

export const defaultWhatsAppMessage =
  "Hola, quiero pedir presupuesto para...";
