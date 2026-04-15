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
    <Accordion.Root type="multiple" className="group">
      <Accordion.Item
        value={caso.id}
        className="flex w-full flex-col overflow-hidden rounded-2xl border border-[#E5E7EB] bg-white shadow-sm transition-all duration-200 hover:shadow-lg"
      >
        {/* Header (always visible) */}
        <Accordion.Trigger className="group flex w-full shrink-0 flex-col gap-3 p-5 text-left transition-colors duration-150 hover:bg-[#F9FAFB] data-[state=open]:bg-[#F8FAFC] active:bg-[#F2F4F7]">
          {/* Top row: Badge + Title + Chevron */}
          <div className="flex items-start justify-between gap-2">
            <div className="flex flex-1 flex-col gap-2 min-w-0">
              {/* Badge */}
              <span
                className={cn(
                  "w-fit rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide shrink-0",
                  caso.badgeColor
                )}
              >
                {caso.badge}
              </span>

              {/* Title */}
              <h3 className="text-lg font-bold text-[#1E2A3A] group-data-[state=open]:text-brand truncate">
                {caso.titulo}
              </h3>
            </div>

            {/* Chevron icon */}
            <ChevronDown className="mt-1 size-5 shrink-0 text-[#9CA3AF] transition-transform duration-300 group-data-[state=open]:rotate-180" />
          </div>

          {/* Description */}
          <p className="text-sm leading-relaxed text-[#5A6470]">
            {caso.descripcion}
          </p>
        </Accordion.Trigger>

        {/* Content (expandable) */}
        <Accordion.Content className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
          <div className="border-t border-[#E5E7EB] px-5 pb-5 pt-4">
            {/* Métricas */}
            <div className="mb-4 flex flex-wrap gap-2">
              {caso.metricas.map((metrica) => (
                <div
                  key={metrica.etiqueta}
                  className="flex items-center gap-1.5 rounded-md bg-[#F2F4F7] px-2.5 py-1.5"
                >
                  <span className="text-sm">{metrica.valor}</span>
                  <span className="text-xs text-[#5A6470]">{metrica.etiqueta}</span>
                </div>
              ))}
            </div>

            {/* Accordion interno: Opciones */}
            <Accordion.Root type="multiple" className="space-y-2">
              {caso.opciones.map((opcion, index) => (
                <Accordion.Item
                  key={opcion.titulo}
                  value={`${caso.id}-opcion-${index}`}
                  className="rounded-lg border border-[#E5E7EB]"
                >
                  <Accordion.Trigger className="group flex w-full items-center justify-between bg-[#F9FAFB] px-3 py-2.5 text-left hover:bg-[#F2F4F7]">
                    <span className="text-sm font-medium text-[#1E2A3A] truncate pr-2">
                      {opcion.titulo}
                    </span>
                    <ChevronDown className="size-4 shrink-0 text-[#9CA3AF] transition-transform duration-300 group-data-[state=open]:rotate-180" />
                  </Accordion.Trigger>
                  <Accordion.Content className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden">
                    <div className="space-y-2.5 bg-white px-3 pb-3 pt-2">
                      <p className="text-sm leading-relaxed text-[#5A6470]">
                        {opcion.descripcion}
                      </p>
                      {opcion.requisitos && opcion.requisitos.length > 0 && (
                        <div>
                          <p className="mb-1.5 text-xs font-semibold text-[#1E2A3A]">
                            Requisitos previos:
                          </p>
                          <div className="flex flex-wrap gap-1.5">
                            {opcion.requisitos.map((req) => (
                              <span
                                key={req}
                                className="rounded bg-[#EEF2FF] px-2 py-0.5 text-xs text-[#4338CA]"
                              >
                                {req}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                      {opcion.tiempo && (
                        <div className="mt-2 border-t border-[#E5E7EB] pt-2">
                          <span className="text-xs font-semibold text-[#1E2A3A]">
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