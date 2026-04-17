import { CASOS } from "@/lib/constants";
import { CasoCard } from "./CasoCard";
import { ArrowDown } from "lucide-react";

export function CasosDeUso() {
  return (
    <section id="casos-de-uso" className="bg-surface py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-14 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-accent">
            Pilares de Transformación
          </p>
          <h2 className="font-heading text-3xl font-bold text-primary-deep md:text-4xl">
            ¿En qué consultoría te quieres enfocar?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-muted">
            Descubre los casos de uso reales que podemos implementar en tu negocio.
            Identifica el pilar que mejor resuelve tus retos actuales y lleva tu productividad al siguiente nivel.
          </p>
        </div>

        {/* Grid de 3 columnas */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {CASOS.map((caso) => (
            <CasoCard key={caso.id} caso={caso} />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="mb-4 text-2xl font-semibold text-primary-deep">
            ¿Qué estás esperando? Realiza tu registro y agéndate hoy 🤖 + 🧠
          </p>
          <a
            href="#formulario"
            className="inline-flex items-center justify-center rounded-full bg-secondary px-6 py-3 text-sm font-semibold text-surface transition-colors hover:bg-primary"
          >
            <ArrowDown className="mr-2 size-4" />
            Dejanos tus datos
          </a>
        </div>
      </div>
    </section>
  );
}
