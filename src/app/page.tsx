import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { WhatsAppFloatingButton } from "@/components/layout/whatsapp-floating-button";
import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { WhyUs } from "@/components/sections/why-us";
import { Gallery } from "@/components/sections/gallery";
import { CoverageArea } from "@/components/sections/coverage-area";
import { Testimonials } from "@/components/sections/testimonials";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Services />
        <WhyUs />
        <Gallery />
        <CoverageArea />
        <Testimonials />
      </main>
      <Footer />
      <WhatsAppFloatingButton />
    </>
  );
}
