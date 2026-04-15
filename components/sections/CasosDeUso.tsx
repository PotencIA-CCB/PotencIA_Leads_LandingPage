import { CasoCard } from "./CasoCard";
import { ArrowDown } from "lucide-react";

const CASOS = [
  {
    id: "evaluacion-candidatos",
    categoria: "Asistentes de IA Personales",
    titulo: "Evaluación de candidatos (RRHH)",
    descripcion:
      "Automatiza el filtrado y análisis de CVs, identificando el perfil ideal para la vacante y generando resúmenes de competencias clave.",
    badge: "Gestión & Productividad",
    badgeColor: "bg-[#EEF2FF] text-[#4338CA]",
    metricas: [
      { valor: "⏱️", etiqueta: "Filtrado 10× más rápido" },
      { valor: "🚀", etiqueta: "Mayor eficiencia" },
    ],
    opciones: [
      {
        titulo: "Evaluación de candidatos",
        descripcion: "Proceso automatizado de筛选 de CVs",
        requisitos: ["5-10 PDFs de hojas de vida"],
      },
    ],
  },
  {
    id: "generacion-contenido",
    categoria: "Asistentes de IA Personales",
    titulo: "Generación de contenido y copys",
    descripcion:
      "Creación de textos persuasivos para redes sociales, blogs y anuncios manteniendo el tono de voz de tu marca.",
    badge: "Marketing",
    badgeColor: "bg-[#EEF2FF] text-[#4338CA]",
    metricas: [
      { valor: "📝", etiqueta: "Contenido 24/7" },
    ],
    opciones: [
      {
        titulo: "Generación de contenido",
        descripcion: "Copys y contenido para redes",
        requisitos: ["Objetivos de la campaña"],
      },
    ],
  },
  {
    id: "analisis-financiero",
    categoria: "Asistentes de IA Personales",
    titulo: "Análisis de estados financieros",
    descripcion:
      "Interpretación rápida de balances, P&L y flujos de caja para identificar tendencias y oportunidades.",
    badge: "Finanzas",
    badgeColor: "bg-[#EEF2FF] text-[#4338CA]",
    metricas: [
      { valor: "📊", etiqueta: "Insights en segundos" },
    ],
    opciones: [],
  },
  {
    id: "gestion-documental",
    categoria: "Asistentes de IA Personales",
    titulo: "Gestión y resumen documental",
    descripcion:
      "Procesamiento de grandes volúmenes de documentos para extraer puntos clave.",
    badge: "Administración",
    badgeColor: "bg-[#EEF2FF] text-[#4338CA]",
    metricas: [
      { valor: "📚", etiqueta: "Ahorro de lectura: 80%" },
    ],
    opciones: [],
  },
  {
    id: "buzon-inteligente",
    categoria: "Agentes integrados con tu Workspace",
    titulo: "Buzón de correo inteligente",
    descripcion:
      "Priorización automática de correos, clasificación por urgencia y redacción de borradores.",
    badge: "Automatización",
    badgeColor: "bg-[#FFF7ED] text-[#C2410C]",
    metricas: [
      { valor: "📧", etiqueta: "-70% tiempo en bandeja" },
    ],
    opciones: [],
  },
  {
    id: "agente-agenda",
    categoria: "Agentes integrados con tu Workspace",
    titulo: "Agente de agenda y tareas",
    descripcion:
      "Coordinación inteligente de reuniones y bloqueo de tiempo para enfoque.",
    badge: "Productividad",
    badgeColor: "bg-[#FFF7ED] text-[#C2410C]",
    metricas: [
      { valor: "📅", etiqueta: "+15h libres al mes" },
    ],
    opciones: [],
  },
  {
    id: "editor-documentos",
    categoria: "Agentes integrados con tu Workspace",
    titulo: "Editor inteligente de documentos",
    descripcion:
      "Co-creación de reportes y presentaciones con asistencia en tiempo real.",
    badge: "Escritura",
    badgeColor: "bg-[#FFF7ED] text-[#C2410C]",
    metricas: [
      { valor: "✍️", etiqueta: "Documentos de alto impacto" },
    ],
    opciones: [],
  },
  {
    id: "landing-page",
    categoria: "Prototipado ágil de apps con IA",
    titulo: "Landing page / MVP funcional",
    descripcion:
      "Creación rápida de páginas de aterrizaje para validar ideas de negocio.",
    badge: "Desarrollo",
    badgeColor: "bg-[#F0FDF4] text-[#166534]",
    metricas: [
      { valor: "⚡", etiqueta: "Lanzamiento en 48h" },
    ],
    opciones: [],
  },
  {
    id: "mini-apps",
    categoria: "Prototipado ágil de apps con IA",
    titulo: "Mini Apps para productividad",
    descripcion:
      "Desarrollo de herramientas personalizadas para automatizar procesos.",
    badge: "No-Code",
    badgeColor: "bg-[#F0FDF4] text-[#166534]",
    metricas: [
      { valor: "🛠️", etiqueta: "Apps a la medida" },
    ],
    opciones: [],
  },
  {
    id: "dashboards",
    categoria: "Prototipado ágil de apps con IA",
    titulo: "Tableros de Visualización",
    descripcion:
      "Dashboards interactivos que conectan tus datos con IA para análisis estratégico.",
    badge: "Analítica",
    badgeColor: "bg-[#F0FDF4] text-[#166534]",
    metricas: [
      { valor: "📈", etiqueta: "Control total del negocio" },
    ],
    opciones: [],
  },
];

// Group by category
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
