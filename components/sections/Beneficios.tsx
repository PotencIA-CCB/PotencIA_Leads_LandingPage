const BENEFICIOS = [
  {
    icon: "⚡",
    title: "Resultados inmediatos",
    description:
      "En una sola sesión identificás al menos 3 oportunidades concretas de automatización o mejora con IA en tu empresa.",
  },
  {
    icon: "🎯",
    title: "100% personalizado",
    description:
      "No es un curso genérico. El experto analiza tu operación, tus herramientas y tus dolores específicos.",
  },
  {
    icon: "📋",
    title: "Plan de acción entregable",
    description:
      "Te vas con un documento claro: qué implementar, con qué herramientas y en qué orden de prioridad.",
  },
  {
    icon: "🤝",
    title: "Respaldo institucional",
    description:
      "Servicio avalado por la Cámara de Comercio de Barranquilla, con estándares de calidad y confidencialidad.",
  },
  {
    icon: "🔒",
    title: "Sin compromisos",
    description:
      "La consultoría es independiente. No te obliga a contratar ningún servicio adicional.",
  },
  {
    icon: "🌐",
    title: "Cualquier sector",
    description:
      "Manufactura, servicios, comercio, salud, educación — la IA tiene aplicaciones para toda industria.",
  },
];

export function Beneficios() {
  return (
    <section id="beneficios" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-14 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-accent">
            ¿Por qué ConsultorIA?
          </p>
          <h2 className="text-3xl font-bold text-[#1E2A3A] md:text-4xl">
            Lo que obtenés en cada sesión
          </h2>
        </div>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {BENEFICIOS.map((b) => (
            <div
              key={b.title}
              className="rounded-xl border border-[#E5E7EB] bg-surface-alt p-6 transition-shadow hover:shadow-md"
            >
              <div className="mb-4 text-3xl">{b.icon}</div>
              <h3 className="mb-2 text-base font-semibold text-[#1E2A3A]">{b.title}</h3>
              <p className="text-sm leading-relaxed text-[#5A6470]">{b.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
