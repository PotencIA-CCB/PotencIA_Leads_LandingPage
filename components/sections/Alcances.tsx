const INCLUYE = [
  "Sesión 1:1 de 1 a 2 horas con experto en IA",
  "Análisis de procesos y flujos actuales",
  "Identificación de oportunidades de automatización",
  "Recomendación de herramientas (sin costo para empezar)",
  "Plan de implementación priorizado",
  "Estimación de ahorro de tiempo y costos",
  "Documento entregable con todo el diagnóstico",
  "Soporte post-sesión vía correo (48 horas)",
];

const NO_INCLUYE = [
  "Implementación técnica de herramientas",
  "Desarrollo de software a medida",
  "Capacitación del equipo",
  "Servicios de consultoría continuos",
];

export function Alcances() {
  return (
    <section className="bg-surface-alt py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-14 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-accent">
            Alcance del servicio
          </p>
          <h2 className="text-3xl font-bold text-[#1E2A3A] md:text-4xl">
            ¿Qué incluye la consultoría?
          </h2>
        </div>

        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
          {/* Incluye */}
          <div className="rounded-2xl border border-[#E5E7EB] bg-white p-8">
            <h3 className="mb-6 flex items-center gap-2 text-lg font-semibold text-[#1E2A3A]">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand text-sm text-white">
                ✓
              </span>
              Incluye
            </h3>
            <ul className="space-y-3">
              {INCLUYE.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-[#1E2A3A]">
                  <span className="mt-0.5 shrink-0 text-brand">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* No incluye */}
          <div className="rounded-2xl border border-[#E5E7EB] bg-white p-8">
            <h3 className="mb-6 flex items-center gap-2 text-lg font-semibold text-[#1E2A3A]">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#F2F4F7] text-sm text-[#8A929E]">
                ✕
              </span>
              No incluye
            </h3>
            <ul className="mb-6 space-y-3">
              {NO_INCLUYE.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-[#5A6470]">
                  <span className="mt-0.5 shrink-0 text-[#C8CDD5]">✕</span>
                  {item}
                </li>
              ))}
            </ul>

            {/* Upsell note */}
            <div className="rounded-lg bg-surface-alt p-4 text-xs text-[#5A6470]">
              ¿Necesitás implementación? Nuestro equipo de PotencIA puede acompañarte
              en las siguientes etapas. Consultanos después de tu sesión.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
