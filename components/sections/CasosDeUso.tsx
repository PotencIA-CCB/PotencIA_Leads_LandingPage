const CASOS = [
  // ── Categoría 1: Asistentes de IA Personales
  {
    categoria: "Asistentes de IA Personales",
    categoriaColor: "bg-[#EEF2FF] text-[#4338CA]",
    titulo: "Evaluación de candidatos (RRHH)",
    descripcion:
      "Automatiza el filtrado y análisis de CVs, identificando el perfil ideal para la vacante y generando resúmenes de competencias clave.",
    herramientas: "Claude + PDF Reader + Airtable",
    resultado: "Filtrado 10× más rápido",
    resultadoColor: "bg-[#ECFDF5] text-[#065F46]",
  },
  {
    categoria: "Asistentes de IA Personales",
    categoriaColor: "bg-[#EEF2FF] text-[#4338CA]",
    titulo: "Generación de contenido y copys",
    descripcion:
      "Creación de textos persuasivos para redes sociales, blogs y anuncios manteniendo el tono de voz de tu marca y estilo corporativo.",
    herramientas: "ChatGPT / Jasper / Claude",
    resultado: "Contenido 24/7",
    resultadoColor: "bg-[#ECFDF5] text-[#065F46]",
  },
  {
    categoria: "Asistentes de IA Personales",
    categoriaColor: "bg-[#EEF2FF] text-[#4338CA]",
    titulo: "Análisis de estados financieros",
    descripcion:
      "Interpretación rápida de balances, P&L y flujos de caja para identificar tendencias, anomalías y oportunidades críticas de ahorro.",
    herramientas: "Excel AI / GPT-4 (Analysis)",
    resultado: "Insights en segundos",
    resultadoColor: "bg-[#ECFDF5] text-[#065F46]",
  },
  {
    categoria: "Asistentes de IA Personales",
    categoriaColor: "bg-[#EEF2FF] text-[#4338CA]",
    titulo: "Gestión y resumen documental",
    descripcion:
      "Procesamiento de grandes volúmenes de documentos, actas y reportes para extraer puntos clave y respuestas a consultas específicas.",
    herramientas: "NotebookLM / Perplexity / Humata",
    resultado: "Ahorro de lectura: 80%",
    resultadoColor: "bg-[#ECFDF5] text-[#065F46]",
  },

  // ── Categoría 2: Agentes integrados con tu Workspace
  {
    categoria: "Agentes integrados con tu Workspace",
    categoriaColor: "bg-[#FFF7ED] text-[#C2410C]",
    titulo: "Buzón de correo inteligente",
    descripcion:
      "Priorización automática de correos, clasificación por urgencia y redacción de borradores basados en el contexto de tus conversaciones.",
    herramientas: "Gemini (Google) / Copilot (Outlook)",
    resultado: "-70% tiempo en bandeja",
    resultadoColor: "bg-[#FFF7ED] text-[#C2410C]",
  },
  {
    categoria: "Agentes integrados con tu Workspace",
    categoriaColor: "bg-[#FFF7ED] text-[#C2410C]",
    titulo: "Agente de agenda y tareas",
    descripcion:
      "Coordinación inteligente de reuniones, bloqueo de tiempo para enfoque y seguimiento automático de compromisos detectados en chats.",
    herramientas: "Calendar + Motion / Reclaim / Copilot",
    resultado: "+15h libres al mes",
    resultadoColor: "bg-[#FFF7ED] text-[#C2410C]",
  },
  {
    categoria: "Agentes integrados con tu Workspace",
    categoriaColor: "bg-[#FFF7ED] text-[#C2410C]",
    titulo: "Editor inteligente de documentos",
    descripcion:
      "Co-creación de reportes y presentaciones con asistencia en tiempo real para mejorar la redacción, estructura y diseño visual.",
    herramientas: "Google Docs (AI) / MS Word Copilot",
    resultado: "Documentos de alto impacto",
    resultadoColor: "bg-[#FFF7ED] text-[#C2410C]",
  },

  // ── Categoría 3: Prototipado ágil de apps con IA
  {
    categoria: "Prototipado ágil de apps con IA",
    categoriaColor: "bg-[#F0FDF4] text-[#166534]",
    titulo: "Landing page / MVP funcional",
    descripcion:
      "Creación rápida de páginas de aterrizaje y productos mínimos viables para validar ideas de negocio y captar leads en cuestión de días.",
    herramientas: "Framer AI / V0.dev / Replit Agent",
    resultado: "Lanzamiento en 48h",
    resultadoColor: "bg-[#F0FDF4] text-[#166534]",
  },
  {
    categoria: "Prototipado ágil de apps con IA",
    categoriaColor: "bg-[#F0FDF4] text-[#166534]",
    titulo: "Mini Apps para productividad",
    descripcion:
      "Desarrollo de herramientas personalizadas para resolver cuellos de botella específicos y automatizar la recolección de datos en campo.",
    herramientas: "Glide / Softr / FlutterFlow",
    resultado: "Apps a la medida",
    resultadoColor: "bg-[#F0FDF4] text-[#166534]",
  },
  {
    categoria: "Prototipado ágil de apps con IA",
    categoriaColor: "bg-[#F0FDF4] text-[#166534]",
    titulo: "Tableros de Visualización",
    descripcion:
      "Dashboards interactivos que conectan tus datos con IA para facilitar el análisis estratégico y la toma de decisiones basada en evidencia.",
    herramientas: "Looker Studio / Power BI / Rows",
    resultado: "Control total del negocio",
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
