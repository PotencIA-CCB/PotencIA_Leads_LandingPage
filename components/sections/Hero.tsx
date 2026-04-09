import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand py-20 md:py-28">
      {/* Decorative circles */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full bg-white/5" />
      <div className="pointer-events-none absolute -bottom-20 -left-20 h-[300px] w-[300px] rounded-full bg-sky/10" />

      <div className="relative mx-auto max-w-7xl px-6 text-center">
        {/* Eyebrow */}
        <span className="mb-4 inline-block rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white/80">
          Cámara de Comercio de Barranquilla
        </span>

        {/* Headline */}
        <h1 className="mx-auto max-w-4xl text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
          Implementá{" "}
          <span className="text-sky">Inteligencia Artificial</span>
          {" "}en tu empresa en una sola sesión
        </h1>

        {/* Subtitle */}
        <p className="mx-auto mt-6 max-w-2xl text-lg text-white/75">
          ConsultorIA es un servicio personalizado de 1 a 2 horas donde un experto
          analiza tu operación y te entrega un plan concreto de adopción de IA —
          sin tecnicismos, listo para ejecutar.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
            <Link href="#formulario">Quiero mi consultoría</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-white/30 text-white hover:bg-white/10 hover:text-white"
          >
            <Link href="#casos-de-uso">Ver casos de uso</Link>
          </Button>
        </div>

        {/* Trust bar */}
        <p className="mt-12 text-sm text-white/50">
          Sesiones individuales · Diagnóstico personalizado · Plan de acción entregable
        </p>
      </div>
    </section>
  );
}
