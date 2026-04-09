import Link from "next/link";
import { Button } from "@/components/ui/button";

const NAV_LINKS = [
  { label: "Beneficios", href: "#beneficios" },
  { label: "Metodología", href: "#metodologia" },
  { label: "Casos de Uso", href: "#casos-de-uso" },
];

export function Navbar() {
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

        {/* Nav links */}
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

        {/* CTA */}
        <Button asChild size="sm">
          <Link href="#formulario">Solicitar consultoría</Link>
        </Button>
      </div>
    </header>
  );
}
