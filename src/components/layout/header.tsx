"use client";

import { Menu } from "lucide-react";
import { Logo } from "@/components/layout/logo";
import { WhatsAppButton } from "@/components/layout/whatsapp-button";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navLinks = [
  { href: "#servicios", label: "Servicios" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#zona", label: "Zona de trabajo" },
  { href: "#contacto", label: "Contacto" },
];

export function Header() {
  return (
    <header
      id="top"
      className="sticky top-0 z-40 border-b border-black/5 bg-white/90 backdrop-blur supports-backdrop-filter:bg-white/70"
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo />

        <nav className="hidden items-center gap-6 lg:flex xl:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="whitespace-nowrap text-sm font-medium text-brand-dark/80 transition-colors hover:text-brand-green"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <WhatsAppButton className="whitespace-nowrap px-5 py-2.5 text-sm" />
        </div>

        <Sheet>
          <SheetTrigger
            render={
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden"
                aria-label="Abrir menú"
              />
            }
          >
            <Menu className="h-6 w-6 text-brand-dark" />
            <span className="sr-only">Abrir menú</span>
          </SheetTrigger>
          <SheetContent side="right" className="w-3/4 sm:max-w-xs">
            <SheetHeader>
              <SheetTitle>
                <Logo />
              </SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col gap-1 px-4">
              {navLinks.map((link) => (
                <SheetClose
                  key={link.href}
                  render={<a href={link.href} />}
                  className="rounded-md px-2 py-3 text-base font-medium text-brand-dark transition-colors hover:bg-brand-cream"
                >
                  {link.label}
                </SheetClose>
              ))}
            </nav>
            <div className="mt-2 px-4">
              <WhatsAppButton className="w-full" />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
