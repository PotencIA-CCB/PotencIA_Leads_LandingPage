// ============================================================================
// ServicioUnificado Component
// Unified section combining: process flow, deliverables, and scope boundaries
// Replaces: ComoFunciona, Beneficios, Metodologia, AntesDuranteDespues
// ============================================================================

// ---------------------------------------------------------------------------
// Type Definitions
// ---------------------------------------------------------------------------

interface Step {
  number: number;
  title: string;
  duration: string;
  bullets: string[];
}

interface ExcludedItem {
  text: string;
}

interface SectionHeaderProps {
  title: string;
  subtitle: string;
}

interface ProcessTimelineProps {
  steps: Step[];
}

interface NoIncluyeRowProps {
  items: ExcludedItem[];
}

interface DisclaimerProps {
  text: string;
}

interface ServicioUnificadoProps {
  id?: string;
}

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

const STEPS: Step[] = [
  {
    number: 1,
    title: "Apertura",
    duration: "~10min",
    bullets: [
      "Se confirma el objetivo de la sesión",
      "Se reformula el problema",
    ],
  },
  {
    number: 2,
    title: "Sesión de trabajo",
    duration: "60-80 min",
    bullets: [
      "Trabajar paso a paso en tu caso",
      "Usar IA colaborativamente",
      "Producir entregable",
    ],
  },
  {
    number: 3,
    title: "Plan de acción",
    duration: "~15min",
    bullets: [
      "Revisar el resultado obtenido",
      "Confirmar que se cumplió el objetivo",
    ],
  },
];

const CARDS = [
  {
    emoji: "🧰",
    titulo: "Stack de herramientas adaptado a tu negocio",
  },
  {
    emoji: "🎯",
    titulo: "Decisiones claras con enfoque en ROI",
  },
  {
    emoji: "🧠",
    titulo: "Mapa de oportunidades con IA para tu empresa",
  },
];

const NO_INCLUYE: ExcludedItem[] = [
  { text: "Automatización de Procesos" },
  { text: "Integración con Sistemas del Cliente" },
  { text: "Soluciones a la medida" },
  { text: "Compromisos posteriores a la sesión" },
];

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------

// Green checkmark SVG icon
function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}

// Red X SVG icon
function XIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6L6 18" />
      <path d="M6 6l12 12" />
    </svg>
  );
}

function SectionHeader({ title, subtitle }: SectionHeaderProps) {
  return (
    <div className="mb-12 text-center">
      <h2 className="text-3xl font-bold text-[#1E2A3A] md:text-4xl">{title}</h2>
      <p className="mx-auto mt-4 max-w-xl text-base text-[#5A6470]">
        {subtitle}
      </p>
    </div>
  );
}

function ProcessTimeline({ steps }: ProcessTimelineProps) {
  return (
    <div className="rounded-xl border border-[#E5E7EB] bg-white p-6 shadow-sm">
      <h3 className="mb-6 text-lg font-semibold text-[#1E2A3A]">
        El proceso paso a paso
      </h3>

      {/* Timeline container with connecting line */}
      <div className="relative">
        {/* Horizontal connector line */}
        <div className="absolute left-8 right-8 top-10 hidden h-0.5 bg-[#E5E7EB] md:block" />

        <div className="flex flex-col gap-6 md:flex-row md:justify-between">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="relative flex flex-1 flex-col items-center text-center md:items-start md:text-left"
            >
              {/* Step circle */}
              <div className="relative z-10 mb-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand text-sm font-bold text-white shadow-sm">
                {step.number}
              </div>

              {/* Duration badge */}
              <span className="mb-2 rounded-full bg-surface-alt px-2.5 py-0.5 text-xs font-medium text-[#5A6470]">
                {step.duration}
              </span>

              {/* Title */}
              <h4 className="mb-2 text-base font-semibold text-[#1E2A3A]">
                {step.title}
              </h4>

              {/* Bullets */}
              <ul className="space-y-1">
                {step.bullets.map((bullet, bulletIndex) => (
                  <li
                    key={bulletIndex}
                    className="flex items-start gap-2 text-sm text-[#5A6470]"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ResultsChecklist() {
  return (
    <div className="flex h-full flex-col rounded-xl border border-[#E5E7EB] bg-white p-6 shadow-sm">
      <h3 className="mb-6 text-lg font-semibold text-[#1E2A3A]">
        Lo que obtienes al finalizar la consultoría
      </h3>

      {/* 3 Cards - horizontal */}
      <div className="flex flex-1 flex-col gap-4 md:flex-row">
        {CARDS.map((card) => (
          <div
            key={card.titulo}
            className="flex flex-1 min-h-24 items-center justify-center rounded-lg border border-[#E5E7EB] bg-surface-alt p-4 text-center"
          >
            <div className="flex flex-col items-center gap-2">
              <span className="text-2xl">{card.emoji}</span>
              <span className="text-sm font-semibold text-[#1E2A3A]">
                {card.titulo}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function NoIncluyeRow({ items }: NoIncluyeRowProps) {
  return (
    <div className="mt-8 rounded-xl border border-red-200 bg-red-50 p-6">
      <h4 className="mb-4 text-center text-sm font-semibold uppercase tracking-wide text-red-600">
        Lo que NO incluye la sesión
      </h4>

      <div className="flex flex-wrap justify-center gap-4">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm text-[#5A6470]"
          >
            <XIcon className="h-4 w-4 text-red-500" />
            <span>{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function Disclaimer({ text }: DisclaimerProps) {
  return (
    <p className="mt-8 text-center text-xs italic text-[#5A6470]">{text}</p>
  );
}

// ---------------------------------------------------------------------------
// Main Component
// ---------------------------------------------------------------------------

export function ServicioUnificado({ id = "servicio" }: ServicioUnificadoProps) {
  return (
    <section id={id} className="bg-surface-alt py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <SectionHeader
          title="Cómo funciona tu sesión"
          subtitle="Una sesión estratégica enfocada en resultados concretos para tu negocio"
        />

        {/* 2-column grid: Process (left) + Results (right) - same height */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* Left Column: Process Timeline */}
          <div className="flex h-full">
            <ProcessTimeline steps={STEPS} />
          </div>

          {/* Right Column: Results Checklist */}
          <ResultsChecklist />
        </div>

        {/* Full-width: No incluye row */}
        <NoIncluyeRow items={NO_INCLUYE} />

        {/* Disclaimer */}
        <Disclaimer text="Es una sesión estratégica, no ejecución." />
      </div>
    </section>
  );
}
