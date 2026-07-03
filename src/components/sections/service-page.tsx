import Image from "next/image";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { WhatsAppButton } from "@/components/layout/whatsapp-button";
import { FaqSection } from "@/components/sections/faq-section";
import { FaqJsonLd, type FaqItem } from "@/components/seo/faq-jsonld";
import { BreadcrumbJsonLd, type BreadcrumbItem } from "@/components/seo/breadcrumb-jsonld";
import { buildWhatsAppUrl, siteConfig } from "@/lib/site-config";

export type ServiceContentBlock = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type OtherService = { name: string; href: string; description: string };

export function ServicePage({
  slug,
  breadcrumbLabel,
  h1,
  lead,
  heroImage,
  heroImageAlt,
  whatsappMessage,
  contentBlocks,
  faqs,
  otherServices,
}: {
  slug: string;
  breadcrumbLabel: string;
  h1: string;
  lead: string;
  heroImage: string;
  heroImageAlt: string;
  whatsappMessage: string;
  contentBlocks: ServiceContentBlock[];
  faqs: FaqItem[];
  otherServices: OtherService[];
}) {
  const breadcrumbItems: BreadcrumbItem[] = [
    { name: "Inicio", path: "/" },
    { name: breadcrumbLabel, path: `/${slug}` },
  ];

  return (
    <>
      <BreadcrumbJsonLd items={breadcrumbItems} />
      <FaqJsonLd items={faqs} />

      <Breadcrumbs items={breadcrumbItems} />

      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div>
            <h1 className="font-heading text-3xl font-extrabold leading-tight text-brand-dark sm:text-4xl lg:text-5xl">
              {h1}
            </h1>
            <p className="mt-5 text-lg text-brand-dark/70">{lead}</p>
            <div className="mt-8">
              <WhatsAppButton message={whatsappMessage} className="px-8 py-4 text-base">
                Pedir presupuesto por WhatsApp
              </WhatsAppButton>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-md ring-1 ring-black/5">
            <Image
              src={heroImage}
              alt={heroImageAlt}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
              priority
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-3xl space-y-12 px-4 sm:px-6 lg:px-8">
          {contentBlocks.map((block) => (
            <div key={block.heading}>
              <h2 className="font-heading text-2xl font-bold text-brand-dark">
                {block.heading}
              </h2>
              {block.paragraphs.map((p, i) => (
                <p key={i} className="mt-3 text-brand-dark/70">
                  {p}
                </p>
              ))}
              {block.bullets && (
                <ul className="mt-4 space-y-2">
                  {block.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2 text-brand-dark/70">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-green" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          <div>
            <h2 className="font-heading text-2xl font-bold text-brand-dark">
              Zona de trabajo
            </h2>
            <p className="mt-3 text-brand-dark/70">
              Prestamos este servicio en Ronda, la Serranía de Ronda y la Costa del Sol,
              incluyendo:
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {siteConfig.areasServed.map((area) => (
                <li
                  key={area}
                  className="rounded-full bg-brand-cream px-4 py-1.5 text-sm font-medium text-brand-dark"
                >
                  {area}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <FaqSection items={faqs} />

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl font-bold text-brand-dark">
            Otros servicios de Multi Becerra
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {otherServices.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group rounded-2xl border border-black/5 p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <h3 className="font-heading text-lg font-bold text-brand-dark group-hover:text-brand-green">
                  {service.name}
                </h3>
                <p className="mt-2 text-sm text-brand-dark/70">{service.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-dark py-16 text-center text-white sm:py-20">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl font-bold sm:text-3xl">
            ¿Hablamos de tu proyecto?
          </h2>
          <p className="mt-3 text-white/70">
            Cuéntanos qué necesitas y te respondemos por WhatsApp con un presupuesto sin
            compromiso.
          </p>
          <div className="mt-7 flex justify-center">
            <a
              href={buildWhatsAppUrl(whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-green px-8 py-4 font-heading font-semibold text-brand-dark shadow-md transition-transform hover:scale-105"
            >
              Pedir presupuesto por WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
