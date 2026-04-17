"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import type { CasoDeUso } from "@/lib/types";
import { cn } from "@/lib/utils";

interface CasoCardProps {
  caso: CasoDeUso;
}

export function CasoCard({ caso }: CasoCardProps) {
  return (
    <Accordion.Root type="multiple">
      <Accordion.Item
        value={caso.id}
        className="group flex min-h-[210px] w-full flex-col overflow-hidden rounded-2xl border border-border bg-surface shadow-brand transition-all duration-200 hover:bg-primary-soft"
      >
        {/* Header (always visible) */}
        <Accordion.Trigger className="group flex w-full shrink-0 flex-col gap-3 p-5 text-left transition-colors duration-150 hover:bg-primary-soft data-[state=open]:bg-primary-soft active:bg-surface-alt">
          {/* Top row: Badge + Title + Chevron */}
          <div className="flex items-start justify-between gap-2">
            <div className="flex flex-1 flex-col gap-2 min-w-0">
              {/* Badge */}
              <span
                className={cn(
                  "w-fit shrink-0 rounded-full border border-accent/35 bg-accent/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-primary",
                  caso.badgeColor
                )}
              >
                {caso.badge}
              </span>

              {/* Title */}
              <h3 className="font-heading text-lg font-bold text-foreground group-data-[state=open]:text-primary">
                {caso.titulo}
              </h3>
            </div>

            {/* Chevron icon */}
            <ChevronDown className="mt-1 size-5 shrink-0 text-muted transition-transform duration-300 group-data-[state=open]:rotate-180" />
          </div>

          {/* Description */}
          <p className="text-sm leading-relaxed text-muted">
            {caso.descripcion}
          </p>
        </Accordion.Trigger>

        {/* Content (expandable) */}
        <Accordion.Content className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
          <div className="border-t border-border px-5 pb-5 pt-4">
            {/* Métricas */}
            <div className="mb-4 flex flex-wrap gap-2">
              {caso.metricas.map((metrica) => (
                <div
                  key={metrica.etiqueta}
                    className="flex items-center gap-1.5 rounded-md bg-surface-alt px-2.5 py-1.5"
                  >
                    <span className="text-sm">{metrica.valor}</span>
                    <span className="text-xs text-muted">{metrica.etiqueta}</span>
                  </div>
                ))}
              </div>

            {/* Accordion interno: Opciones */}
            <Accordion.Root type="multiple" className="space-y-2">
              {caso.opciones.map((opcion, index) => (
                <Accordion.Item
                  key={opcion.titulo}
                  value={`${caso.id}-opcion-${index}`}
                  className="rounded-lg border border-border"
                >
                  <Accordion.Trigger className="group flex w-full items-center justify-between bg-primary-soft px-3 py-2.5 text-left hover:bg-surface-alt">
                    <span className="min-w-0 truncate pr-2 text-sm font-medium text-foreground">
                      {opcion.titulo}
                    </span>
                    <ChevronDown className="size-4 shrink-0 text-muted transition-transform duration-300 group-data-[state=open]:rotate-180" />
                  </Accordion.Trigger>
                  <Accordion.Content className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden">
                    <div className="space-y-2.5 bg-surface px-3 pb-3 pt-2">
                      <p className="text-sm leading-relaxed text-muted">
                        {opcion.descripcion}
                      </p>
                      {opcion.requisitos && opcion.requisitos.length > 0 && (
                        <div>
                          <p className="mb-1.5 text-xs font-semibold text-foreground">
                            Requisitos previos:
                          </p>
                          <div className="flex flex-wrap gap-1.5">
                            {opcion.requisitos.map((req) => (
                              <span
                                key={req}
                                className="rounded bg-primary-soft px-2 py-0.5 text-xs text-primary"
                              >
                                {req}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                      {opcion.tiempo && (
                        <div className="mt-2 border-t border-border pt-2">
                          <span className="text-xs font-semibold text-foreground">
                            {opcion.tiempo}
                          </span>
                        </div>
                      )}
                    </div>
                  </Accordion.Content>
                </Accordion.Item>
              ))}
            </Accordion.Root>
          </div>
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  );
}
