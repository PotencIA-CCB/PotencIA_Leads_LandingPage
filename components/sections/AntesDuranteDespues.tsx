const COLUMNAS = [
  {
    fase: "Antes",
    color: "border-[#E5E7EB] bg-white",
    headerColor: "bg-[#F2F4F7] text-[#5A6470]",
    items: [
      "Procesos manuales y repetitivos",
      "Decisiones basadas en intuición",
      "Tiempo invertido en tareas de bajo valor",
      "Sin claridad sobre cómo aplicar IA",
      "Herramientas desconectadas entre sí",
    ],
    icon: "😓",
  },
  {
    fase: "Durante la sesión",
    color: "border-[#FF6B35] bg-white",
    headerColor: "bg-[#FF6B35] text-white",
    items: [
      "Diagnóstico profundo de tu operación",
      "Identificación de quick wins con IA",
      "Priorización por impacto y facilidad",
      "Recomendación de herramientas concretas",
      "Resolución de dudas en tiempo real",
    ],
    icon: "🚀",
  },
  {
    fase: "Después",
    color: "border-[#E5E7EB] bg-white",
    headerColor: "bg-[#F2F4F7] text-[#5A6470]",
    items: [
      "Plan de acción listo para implementar",
      "Claridad sobre qué automatizar primero",
      "Herramientas seleccionadas para tu caso",
      "ROI estimado para cada iniciativa",
      "Base sólida para crecer con IA",
    ],
    icon: "✅",
  },
];

export function AntesDuranteDespues() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-14 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-accent">
            La transformación
          </p>
          <h2 className="text-3xl font-bold text-[#1E2A3A] md:text-4xl">
            Antes, durante y después
          </h2>
        </div>

        {/* Columns */}
        <div className="grid gap-6 md:grid-cols-3">
          {COLUMNAS.map((col) => (
            <div
              key={col.fase}
              className={`overflow-hidden rounded-2xl border-2 ${col.color}`}
            >
              {/* Header */}
              <div className={`px-6 py-4 text-center font-semibold ${col.headerColor}`}>
                <span className="mr-2 text-xl">{col.icon}</span>
                {col.fase}
              </div>

              {/* Items */}
              <ul className="space-y-3 p-6">
                {col.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm leading-snug">
                    <span className="mt-0.5 shrink-0 text-xs">
                      {col.fase === "Durante la sesión" ? "✓" : "•"}
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
