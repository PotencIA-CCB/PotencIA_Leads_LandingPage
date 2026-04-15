import type { LeadInput } from "./validations";

export type { LeadInput };

export interface ApiResponse {
  ok: boolean;
  error?: string;
}

// ── Tipos para Casos de Uso
export interface OpcionCaso {
  titulo: string;
  descripcion: string;
  requisitos: string[];
  tiempo?: string;
}

export interface MetricaCaso {
  valor: string;
  etiqueta: string;
}

export interface CasoDeUso {
  id: string;
  titulo: string;
  descripcion: string;
  badge: string;
  badgeColor: string;
  metricas: MetricaCaso[];
  opciones: OpcionCaso[];
}
