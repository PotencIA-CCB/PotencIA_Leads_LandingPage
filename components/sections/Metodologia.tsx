const PASOS = [
  {
    numero: "01",
    titulo: "Registro previo",
    descripcion:
      "Completás el formulario con tu información y el área de interés. Esto nos permite preparar la sesión con anticipación.",
  },
  {
    numero: "02",
    titulo: "Diagnóstico de tu operación",
    descripcion:
      "En la sesión, el experto analiza tus procesos actuales, herramientas que usás y los principales cuellos de botella.",
  },
  {
    numero: "03",
    titulo: "Identificación de oportunidades",
    descripcion:
      "Juntos priorizamos las áreas donde la IA puede generar mayor impacto: ahorro de tiempo, reducción de errores o aumento de ingresos.",
  },
  {
    numero: "04",
    titulo: "Plan de acción entregable",
    descripcion:
      "Recibís un documento con las herramientas recomendadas, los pasos de implementación y el ROI estimado para cada iniciativa.",
  },
];

export function Metodologia() {
  return (
    <section id="metodologia" className="bg-surface-alt py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-14 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-accent">
            Cómo funciona
          </p>
          <h2 className="text-3xl font-bold text-[#1E2A3A] md:text-4xl">
            El proceso en 4 pasos
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-[#5A6470]">
            Una metodología clara y probada para que salgas de la sesión con un camino
            concreto hacia la adopción de IA.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line (desktop) */}
          <div className="absolute left-1/2 top-8 hidden h-0.5 w-3/4 -translate-x-1/2 bg-[#E5E7EB] lg:block" />

          <div className="grid gap-8 lg:grid-cols-4">
            {PASOS.map((paso) => (
              <div key={paso.numero} className="relative flex flex-col items-center text-center">
                {/* Circle */}
                <div className="relative z-10 mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-brand text-xl font-bold text-white shadow-md">
                  {paso.numero}
                </div>
                <h3 className="mb-2 text-base font-semibold text-[#1E2A3A]">{paso.titulo}</h3>
                <p className="text-sm leading-relaxed text-[#5A6470]">{paso.descripcion}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
