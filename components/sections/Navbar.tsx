"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const NAV_LINKS = [
  { label: "Metodología", href: "#servicio" },
  { label: "Casos de Uso", href: "#casos-de-uso" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#E5E7EB] bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="flex flex-col leading-none">
          <span className="text-lg font-bold text-brand">ConsultorIA</span>
          <span className="text-[10px] font-medium uppercase tracking-widest text-[#8A929E]">
            by PotencIA
          </span>
        </Link>

        {/* Nav links — desktop */}
        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[#1E2A3A] transition-colors hover:text-brand"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {/* CTA */}
          <Button asChild size="sm">
            <Link href="#formulario">Solicitar consultoría</Link>
          </Button>

          {/* Hamburger — mobile only */}
          <button
            className="ml-1 flex items-center justify-center rounded p-1.5 text-[#1E2A3A] transition-colors hover:bg-surface-alt md:hidden"
            onClick={() => setIsOpen((v) => !v)}
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* Mobile nav panel */}
      {isOpen && (
        <nav className="border-t border-[#E5E7EB] bg-white px-6 py-4 md:hidden">
          <ul className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block text-base font-medium text-[#1E2A3A] transition-colors hover:text-brand"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
