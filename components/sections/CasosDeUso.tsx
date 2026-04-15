import { CASOS } from "@/lib/constants";
import { CasoCard } from "./CasoCard";
import { ArrowDown } from "lucide-react";

export function CasosDeUso() {
  return (
    <section id="casos-de-uso" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-14 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-accent">
            Pilares de Transformación
          </p>
          <h2 className="text-3xl font-bold text-[#1E2A3A] md:text-4xl">
            ¿En qué consultoría te quieres enfocar?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-[#5A6470]">
            Descubre los casos de uso reales que podemos implementar en tu negocio.
            Identifica el pilar que mejor resuelve tus retos actuales y lleva tu productividad al siguiente nivel.
          </p>
        </div>

        {/* Grid de 3 columnas */}
        <div className="grid gap-6 md:grid-cols-3 sm:grid-cols-1">
          {CASOS.map((caso) => (
            <CasoCard key={caso.id} caso={caso} />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="mb-4 text-2xl font-semibold text-[#1E2A3A]">
            ¿Qué estás esperando? Realiza tu registro y agéndate hoy 🤖 + 🧠
          </p>
          <a
            href="#formulario"
            className="inline-flex items-center justify-center rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-light"
          >
            <ArrowDown className="mr-2 size-4" />
            Dejanos tus datos
          </a>
        </div>
      </div>
    </section>
  );
}
