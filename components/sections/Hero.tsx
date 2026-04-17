import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="bg-brand-hero relative overflow-hidden py-12 md:py-16">
      {/* Decorative circles */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full bg-white/5" />
      <div className="pointer-events-none absolute -bottom-20 -left-20 h-[300px] w-[300px] rounded-full bg-accent/15" />

      <div className="relative mx-auto max-w-7xl px-6 text-center">
        {/* Eyebrow */}
        <span className="mb-4 inline-block rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white/80">
          Exclusivo para Miembros Renovados 2026
        </span>

        {/* Headline */}
        <h1 className="mx-auto max-w-3xl font-heading text-2xl font-bold leading-tight text-surface md:text-4xl lg:text-5xl">
          Aplica <span className="text-accent">IA</span> en tu negocio y gana
          productividad desde hoy
        </h1>

        {/* Subtitle */}
        <p className="mx-auto mt-6 max-w-2xl text-lg text-white/75">
          En 1–2 horas sabrás exactamente cómo aplicar IA en tu empresa.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button asChild size="lg" variant="accent">
            <Link href="#formulario">Reservar mi consultoría</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="bg-transparent border-white/30 text-white hover:bg-white/10 hover:text-white"
          >
            <Link href="#casos-de-uso">Ver casos de uso</Link>
          </Button>
        </div>

        {/* Trust bar */}
        <p className="mt-12 text-sm text-white/50">
          Sesiones individuales · Entregables listos para utilizar ·
          Recomendaciones prácticas
        </p>
      </div>
    </section>
  );
}
