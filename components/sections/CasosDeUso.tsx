const CASOS = [
  // ── Categoría 1: Automatización de Procesos (4 casos)
  {
    categoria: "Automatización de Procesos",
    categoriaColor: "bg-[#EEF2FF] text-[#4338CA]",
    titulo: "Respuesta automática de correos",
    descripcion:
      "Clasificación y gestión inteligente del buzón de entrada. El sistema prioriza, categoriza y redacta respuestas estándar para los correos más frecuentes.",
    herramientas: "Gmail + Make + GPT-4",
    resultado: "-70% tiempo de bandeja",
    resultadoColor: "bg-[#ECFDF5] text-[#065F46]",
  },
  {
    categoria: "Automatización de Procesos",
    categoriaColor: "bg-[#EEF2FF] text-[#4338CA]",
    titulo: "Generación automática de reportes",
    descripcion:
      "Consolidación de datos de múltiples fuentes y generación de informes ejecutivos con análisis narrativo incluido, sin intervención manual.",
    herramientas: "Excel + Power BI + GPT",
    resultado: "5× más rápido",
    resultadoColor: "bg-[#ECFDF5] text-[#065F46]",
  },
  {
    categoria: "Automatización de Procesos",
    categoriaColor: "bg-[#EEF2FF] text-[#4338CA]",
    titulo: "Digitalización de documentos",
    descripcion:
      "Extracción automática de datos de facturas, contratos y formularios físicos con IA, eliminando la captura manual de información.",
    herramientas: "OCR + Claude + n8n",
    resultado: "+90% precisión",
    resultadoColor: "bg-[#ECFDF5] text-[#065F46]",
  },
  {
    categoria: "Automatización de Procesos",
    categoriaColor: "bg-[#EEF2FF] text-[#4338CA]",
    titulo: "Flujos de aprobación inteligentes",
    descripcion:
      "Automatización de procesos de aprobación con rutas dinámicas según reglas de negocio, notificaciones automáticas y seguimiento en tiempo real.",
    herramientas: "Slack + n8n + Zapier",
    resultado: "-60% tiempo de demora",
    resultadoColor: "bg-[#ECFDF5] text-[#065F46]",
  },

  // ── Categoría 2: Análisis e Inteligencia (3 casos)
  {
    categoria: "Análisis e Inteligencia",
    categoriaColor: "bg-[#FFF7ED] text-[#C2410C]",
    titulo: "Predicción de ventas y demanda",
    descripcion:
      "Modelos predictivos que analizan histórico de ventas, estacionalidad y variables externas para anticipar la demanda y optimizar el inventario.",
    herramientas: "Python + CRM + BI",
    resultado: "+25% precisión en forecast",
    resultadoColor: "bg-[#FFF7ED] text-[#C2410C]",
  },
  {
    categoria: "Análisis e Inteligencia",
    categoriaColor: "bg-[#FFF7ED] text-[#C2410C]",
    titulo: "Monitoreo de marca y reputación",
    descripcion:
      "Rastreo continuo de menciones en redes sociales y medios digitales con análisis de sentimiento automatizado y alertas en tiempo real.",
    herramientas: "Brand24 + GPT + Slack",
    resultado: "Alertas en < 5 min",
    resultadoColor: "bg-[#FFF7ED] text-[#C2410C]",
  },
  {
    categoria: "Análisis e Inteligencia",
    categoriaColor: "bg-[#FFF7ED] text-[#C2410C]",
    titulo: "Segmentación inteligente de clientes",
    descripcion:
      "Clustering automático de base de clientes según comportamiento, valor y probabilidad de compra para campañas hiperpersonalizadas.",
    herramientas: "Python + CRM + Mailchimp",
    resultado: "+35% ROI en campañas",
    resultadoColor: "bg-[#FFF7ED] text-[#C2410C]",
  },

  // ── Categoría 3: Generación de Contenido (3 casos)
  {
    categoria: "Generación de Contenido",
    categoriaColor: "bg-[#F0FDF4] text-[#166534]",
    titulo: "Propuestas comerciales con IA",
    descripcion:
      "Generación automática de propuestas personalizadas a partir de datos del cliente, catálogo de productos y plantillas aprobadas por el equipo comercial.",
    herramientas: "GPT-4 + HubSpot + Docs",
    resultado: "10× más rápido",
    resultadoColor: "bg-[#F0FDF4] text-[#166534]",
  },
  {
    categoria: "Generación de Contenido",
    categoriaColor: "bg-[#F0FDF4] text-[#166534]",
    titulo: "Chatbot de atención al cliente",
    descripcion:
      "Asistente conversacional entrenado con tu base de conocimiento para resolver consultas frecuentes, escalar casos complejos y calificar leads automáticamente.",
    herramientas: "WhatsApp + GPT + CRM",
    resultado: "Atención 24/7",
    resultadoColor: "bg-[#F0FDF4] text-[#166534]",
  },
  {
    categoria: "Generación de Contenido",
    categoriaColor: "bg-[#F0FDF4] text-[#166534]",
    titulo: "Capacitación interna con IA",
    descripcion:
      "Creación automática de materiales de formación, evaluaciones y rutas de aprendizaje personalizadas según el rol y nivel de cada colaborador.",
    herramientas: "GPT + Notion + LMS",
    resultado: "-50% costo de formación",
    resultadoColor: "bg-[#F0FDF4] text-[#166534]",
  },
];

// Group by category
const CATEGORIAS = Array.from(new Set(CASOS.map((c) => c.categoria)));

export function CasosDeUso() {
  return (
    <section id="casos-de-uso" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-14 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-accent">
            Aplicaciones reales
          </p>
          <h2 className="text-3xl font-bold text-[#1E2A3A] md:text-4xl">
            Casos de uso por área
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-[#5A6470]">
            Estos son algunos de los casos que trabajamos en cada consultoría.
            Identificamos cuáles aplican a tu empresa y cómo implementarlos.
          </p>
        </div>

        {/* Categories */}
        <div className="space-y-14">
          {CATEGORIAS.map((cat) => {
            const casos = CASOS.filter((c) => c.categoria === cat);
            return (
              <div key={cat}>
                {/* Category header */}
                <h3 className="mb-6 text-xl font-semibold text-[#1E2A3A]">{cat}</h3>

                {/* Cards grid */}
                <div
                  className={`grid gap-5 ${
                    casos.length === 4
                      ? "sm:grid-cols-2 xl:grid-cols-4"
                      : "sm:grid-cols-2 lg:grid-cols-3"
                  }`}
                >
                  {casos.map((caso) => (
                    <div
                      key={caso.titulo}
                      className="flex flex-col rounded-xl border border-[#E5E7EB] bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
                    >
                      {/* Area badge */}
                      <span
                        className={`mb-3 self-start rounded-full px-2.5 py-0.5 text-xs font-medium ${caso.categoriaColor}`}
                      >
                        {caso.categoria}
                      </span>

                      {/* Title */}
                      <h4 className="mb-2 text-sm font-semibold text-[#1E2A3A]">
                        {caso.titulo}
                      </h4>

                      {/* Description */}
                      <p className="mb-4 flex-1 text-xs leading-relaxed text-[#5A6470]">
                        {caso.descripcion}
                      </p>

                      {/* Chips row */}
                      <div className="flex flex-wrap gap-2">
                        {/* Tools chip */}
                        <span className="rounded-full bg-[#F2F4F7] px-2.5 py-0.5 text-xs text-[#5A6470]">
                          🛠 {caso.herramientas}
                        </span>

                        {/* Result chip */}
                        <span
                          className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${caso.resultadoColor}`}
                        >
                          ✦ {caso.resultado}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
