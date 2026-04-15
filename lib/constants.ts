import type { CasoDeUso } from "./types";

export const BOOKING_URL =
  "https://outlook.office.com/book/ConsultorioIAPotencia@camarabaq.org.co/s/QjoGRR4GKkaZOr2d9kGq2A2?ismsaljsauthenabled";

// ── Casos de Uso con 3 categorías expandibles
export const CASOS: CasoDeUso[] = [
  {
    id: "asistente-ia",
    titulo: "Asistente IA",
    descripcion:
      "Encargado de asistirte en tus tareas rutinarias, liberando tu tiempo para decisiones estratégicas de alto valor para tu área.",
    badge: "Gestión & Productividad",
    badgeColor: "bg-sky/10 text-sky",
    metricas: [
      { valor: "⏱️", etiqueta: "Ahorro en tiempo operativo" },
      { valor: "🚀", etiqueta: "Mayor eficiencia diaria" },
    ],
    opciones: [
      {
        titulo: "✨ Asistente de Evaluación de Candidatos",
        descripcion:
          "Optimiza tu proceso de selección comparando perfiles automáticamente y resaltando los mejores candidatos para cada vacante.",
        requisitos: [
          "De 5 a 10 hojas de vida en formato PDF/Word para realizar pruebas iniciales.",
          "Perfil descriptivo del cargo a evaluar.",
        ],
      },
      {
        titulo: "💡 Asistente Generador de Contenido y Copys Creativos",
        descripcion:
          "Genera ideas, copies persuasivos y estrategias de contenido alineadas a tu marca para captar la atención de tu audiencia.",
        requisitos: [
          "Meta principal del contenido (ej. ventas, engagement).",
          "Canales objetivos (ej. LinkedIn, Instagram, Email).",
          "Identidad de marca y listado base de productos/servicios.",
        ],
      },
      {
        titulo: "📈 Asistente Analista de Estados Financieros",
        descripcion:
          "Identifica tendencias, riesgos y oportunidades en tus cifras financieras con resúmenes ejecutivos claros y precisos.",
        requisitos: [
          "Estados financieros recientes a analizar.",
          "KPIs específicos a monitorear (Ej. liquidez, rentabilidad).",
          "Objetivo del reporte detallado.",
        ],
      },
      {
        titulo: "⚙️ Asistente de Gestión Documental",
        descripcion:
          "Simplifica la gestión administrativa extrayendo datos clave y resumiendo documentos extensos de forma automatizada.",
        requisitos: [
          "Ejemplos de 3 a 5 documentos típicos del área.",
          "Acción deseada por el asistente (Ej. extraer datos, resumir, categorizar).",
        ],
      },
    ],
  },
  {
    id: "agentes-ia",
    titulo: "Agentes IA",
    descripcion:
      "Potencia tu ecosistema de trabajo con agentes inteligentes que gestionan tu información, agenda y documentos de forma proactiva.",
    badge: "Automatización",
    badgeColor: "bg-sky/10 text-sky",
    metricas: [
      { valor: "📧", etiqueta: "Menos tiempo en revisar emails" },
      { valor: "📅", etiqueta: "Mejor organización semanal" },
    ],
    opciones: [
      {
        titulo: "📧 Buzón de correo electrónico inteligente",
        descripcion:
          "Lee y procesa tus correos entrantes automáticamente. Resume hilos extensos en segundos. Extrae puntos clave y tareas pendientes (action items). Sugerencias de respuesta contextuales con Gemini.",
        requisitos: [
          "Tener una cuenta de Google personal o corporativa.",
          "Crear una cuenta en Claude.ai o Manus.ai.",
        ],
      },
      {
        titulo: "📅 Agente Estratégico de Agenda y Tareas",
        descripcion:
          "Analiza tu Google Calendar en busca de huecos y prioridades. Crea automáticamente planes semanales estructurados en Google Docs. Sugiere bloques de trabajo profundo, reuniones y descanso. Ajusta prioridades según la urgencia de proyectos.",
        requisitos: [
          "Tener una cuenta de Google personal o corporativa.",
          "Crear una cuenta en Claude.ai o Manus.ai.",
        ],
      },
      {
        titulo: "✍️ Agente de edición de documentos",
        descripcion:
          "Revisa, mejora y refactoriza texto directamente en tus documentos. Detecta y ajusta tono, claridad, estilo y coherencia. Reescribe párrafos enteros según tus instrucciones específicas.",
        requisitos: [
          "Tener una cuenta de Google personal o corporativa.",
          "Crear una cuenta en Claude.ai o Manus.ai.",
        ],
      },
    ],
  },
  {
    id: "prototipado-agil",
    titulo: "Prototipado Ágil",
    descripcion:
      "Transforma ideas en productos digitales funcionales en cuestión de horas utilizando herramientas de IA generativa y plataformas No-Code de última generación.",
    badge: "Implementación",
    badgeColor: "bg-sky/10 text-sky",
    metricas: [
      { valor: "⚡", etiqueta: "Prototipos en tiempo record" },
      { valor: "🛠️", etiqueta: "Cero código requerido para iniciar" },
    ],
    opciones: [
      {
        titulo: "🌐 Landing Page / MVP de Alta Conversión",
        descripcion:
          "Convierte una idea en una landing funcional con estructura, formulario y copy optimizado listo para mostrar a clientes.",
        requisitos: [
          "Crear una cuenta en Lovable.dev y Supabase.",
          "Cuenta en ChatGPT, Claude o Gemini.",
        ],
        tiempo: "⏱ Tiempo: 1–2 horas",
      },
      {
        titulo: "💻 Mini SaaS para Automatización Interna",
        descripcion:
          "Gestores de tareas, control de gastos o bases de datos visuales con interacción y edición básica.",
        requisitos: [
          "Crear una cuenta en Lovable.dev y Supabase.",
          "Cuenta en ChatGPT, Claude o Gemini.",
        ],
        tiempo: "⏱ Tiempo: 2 horas",
      },
      {
        titulo: "📊 Dashboard de Analítica e Inteligencia de Negocio",
        descripcion:
          "Visualiza métricas clave y genera gráficos dinámicos listos para seguimiento de KPIs estratégicos.",
        requisitos: [
          "Crear una cuenta en Lovable.dev y Supabase.",
          "Cuenta en ChatGPT, Claude o Gemini.",
        ],
        tiempo: "⏱ Tiempo: 1–2 horas",
      },
    ],
  },
];