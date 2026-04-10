"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { type z } from "zod";
import { LeadSchema } from "@/lib/validations";
import { BOOKING_URL } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type FormData = z.infer<typeof LeadSchema>;

const SOLUTIONS = [
  { value: "asistente", label: "Asistentes de IA Personales" },
  { value: "agentes", label: "Agentes Integrados con tu Workspace" },
  { value: "prototipado", label: "Prototipado ágil de Apps" },
];

const ROLE_LEVELS = [
  { value: "asistente", label: "Asistentes y Analistas" },
  { value: "funcionario-publico", label: "Autoridades y Funcionarios Públicos" },
  { value: "coordinador", label: "Coordinador - Supervisor" },
  { value: "directivo", label: "Directivo, CEO, Alta Gerencia, Rep. Legal" },
  { value: "docencia", label: "Docencia y autoridades académicas" },
  { value: "estudiante", label: "Estudiante, Aprendiz, Practicante" },
  { value: "gerencia", label: "Gerencia media (Gerente, Líderes de área)" },
  { value: "salud", label: "Profesionales de la Salud" },
];

const ROLE_AREAS = [
  { value: "administrativa", label: "Administrativa" },
  { value: "auditoria-riesgos", label: "Auditoría y Riesgos" },
  { value: "calidad-procesos", label: "Calidad y Procesos" },
  { value: "comercial-ventas", label: "Comercial y Ventas" },
  { value: "comercio-exterior", label: "Comercio Exterior" },
  { value: "compras", label: "Compras" },
  { value: "contable-financiera", label: "Contable y Financiera" },
  { value: "corporativa", label: "Corporativa" },
  { value: "educativa", label: "Educativa" },
  { value: "eventos", label: "Eventos y Networking" },
  { value: "servicio-cliente", label: "Experiencia y Servicio al Cliente" },
  { value: "ambiental", label: "Gestión Ambiental" },
  { value: "humana", label: "Gestión Humana" },
  { value: "hseq", label: "HSEQ" },
  { value: "innovacion", label: "Innovación y Emprendimiento" },
  { value: "investigacion", label: "Investigación y Desarrollo" },
  { value: "juridica", label: "Jurídica" },
  { value: "logistica", label: "Logística" },
  { value: "mantenimiento", label: "Mantenimiento" },
  { value: "mercadeo", label: "Mercadeo y Comunicaciones" },
  { value: "operaciones", label: "Operaciones" },
  { value: "produccion", label: "Producción" },
  { value: "proyectos", label: "Proyectos" },
  { value: "salud", label: "Salud" },
  { value: "tecnologia", label: "Tecnología" },
  { value: "otro", label: "Otro" },
];

const USE_CASES: Record<string, string[]> = {
  asistente: [
    "Evaluación de candidatos (RRHH)",
    "Generación de contenido y copys",
    "Análisis de estados financieros",
    "Gestión y resumen documental",
  ],
  agentes: [
    "Buzón de correo inteligente",
    "Agente de agenda y tareas",
    "Editor inteligente de documentos",
  ],
  prototipado: [
    "Landing page / MVP funcional",
    "Mini Apps para productividad",
    "Tableros de Visualización",
  ],
};

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return <p className="mt-1 text-xs text-red-500">{message}</p>;
}

export function Formulario() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [showUseCase, setShowUseCase] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(LeadSchema),
  });

  const solutionValue = watch("solution");
  const perfilPersonal = watch("perfil_personal");
  const perfilEmpresa = watch("perfil_empresa");

  const onSubmit = async (data: FormData) => {
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const body = await res.json();
        setErrorMessage(body.error ?? "Error al enviar el formulario.");
        setStatus("error");
        return;
      }

      setStatus("success");

      setTimeout(() => {
        window.open(BOOKING_URL, "_blank", "noopener,noreferrer");
      }, 3000);
    } catch {
      setErrorMessage("Error de conexión. Por favor intentá nuevamente.");
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <section id="formulario" className="bg-brand py-20">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <div className="rounded-2xl bg-white p-12 shadow-xl">
            <div className="mb-4 text-5xl">🎉</div>
            <h2 className="mb-3 text-2xl font-bold text-[#1E2A3A]">
              ¡Registro exitoso!
            </h2>
            <p className="mb-2 text-base text-[#5A6470]">
              Recibimos tus datos correctamente. En segundos te redirigimos para
              que agendés tu sesión de ConsultorIA.
            </p>
            <p className="text-sm text-[#8A929E]">
              Si la ventana no se abre automáticamente,{" "}
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand underline"
              >
                hacé clic aquí
              </a>
              .
            </p>
            <div className="mt-6 flex justify-center">
              <div className="h-1.5 w-48 overflow-hidden rounded-full bg-surface-alt">
                <div className="h-full animate-[progress_3s_linear_forwards] rounded-full bg-brand" />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="formulario" className="bg-brand py-20">
      <div className="mx-auto max-w-3xl px-6">
        <div className="rounded-2xl bg-white shadow-xl overflow-hidden">
          {/* Header azul */}
          <div
            style={{
              background: "#0066cc",
              padding: "24px 32px",
              textAlign: "center",
            }}
          >
            <h3
              style={{
                color: "white",
                fontWeight: "800",
                fontSize: "1.75rem",
                marginBottom: "4px",
              }}
            >
              Registra tu Solicitud
            </h3>
            <p
              style={{
                color: "rgba(255,255,255,0.85)",
                fontSize: "1rem",
              }}
            >
              Recibe una propuesta personalizada
            </p>
          </div>

          {/* Formulario */}
          <form
            id="client-registration-form"
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4 p-8"
            noValidate
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="form-group">
                <Label htmlFor="full_name">Nombre Completo <span className="text-red-500">*</span></Label>
                <Input
                  id="full_name"
                  placeholder="Ej. Juan Pérez"
                  {...register("full_name")}
                />
                <FieldError message={errors.full_name?.message} />
              </div>
              <div className="form-group">
                <Label htmlFor="id_num">Documento de Identidad <span className="text-red-500">*</span></Label>
                <Input
                  id="id_num"
                  type="number"
                  placeholder="Ej. 123456789"
                  {...register("id_num")}
                />
                <FieldError message={errors.id_num?.message} />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="form-group">
                <Label htmlFor="nit">NIT (Opcional)</Label>
                <Input
                  id="nit"
                  placeholder="NIT empresa"
                  {...register("nit")}
                />
                <FieldError message={errors.nit?.message} />
              </div>
              <div className="form-group">
                <Label htmlFor="email">Correo Electrónico <span className="text-red-500">*</span></Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="juan@empresa.com"
                  {...register("email")}
                />
                <FieldError message={errors.email?.message} />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="form-group">
                <Label htmlFor="phone">Celular <span className="text-red-500">*</span></Label>
                <Input
                  id="phone"
                  placeholder="300 000 0000"
                  {...register("phone")}
                />
                <FieldError message={errors.phone?.message} />
              </div>
              <div className="form-group">
                <Label htmlFor="city">Ciudad <span className="text-red-500">*</span></Label>
                <Input
                  id="city"
                  placeholder="Ej. Bogotá"
                  {...register("city")}
                />
                <FieldError message={errors.city?.message} />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="form-group">
                <Label>Nivel del cargo <span className="text-red-500">*</span></Label>
                <Select
                  onValueChange={(v) => setValue("company_role_level", v, { shouldValidate: true })}
                >
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Selecciona una opción" />
                  </SelectTrigger>
                  <SelectContent>
                    {ROLE_LEVELS.map((r) => (
                      <SelectItem key={r.value} value={r.value}>
                        {r.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FieldError message={errors.company_role_level?.message} />
              </div>
              <div className="form-group">
                <Label>Área del cargo <span className="text-red-500">*</span></Label>
                <Select
                  onValueChange={(v) => setValue("company_role_area", v, { shouldValidate: true })}
                >
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Selecciona una opción" />
                  </SelectTrigger>
                  <SelectContent>
                    {ROLE_AREAS.map((r) => (
                      <SelectItem key={r.value} value={r.value}>
                        {r.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FieldError message={errors.company_role_area?.message} />
              </div>
            </div>

            <div className="form-group">
              <Label>Solución de Interés <span className="text-red-500">*</span></Label>
              <Select
                onValueChange={(v) => {
                  setValue("solution", v, { shouldValidate: true });
                  setShowUseCase(true);
                }}
              >
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="Selecciona una solución" />
                </SelectTrigger>
                <SelectContent>
                  {SOLUTIONS.map((s) => (
                    <SelectItem key={s.value} value={s.value}>
                      {s.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FieldError message={errors.solution?.message} />
            </div>

            {showUseCase && solutionValue && USE_CASES[solutionValue] && (
              <div className="form-group">
                <Label>Tipo de Caso de Uso <span className="text-red-500">*</span></Label>
                <Select
                  onValueChange={(v) => setValue("use_case", v, { shouldValidate: true })}
                >
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Selecciona un caso" />
                  </SelectTrigger>
                  <SelectContent>
                    {USE_CASES[solutionValue].map((caseText) => (
                      <SelectItem key={caseText} value={caseText.toLowerCase().replace(/\s+/g, "-")}>
                        {caseText}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FieldError message={errors.use_case?.message} />
              </div>
            )}

            <div className="form-group">
              <Label htmlFor="comments">Cuéntanos sobre tu proyecto <span className="text-red-500">*</span></Label>
              <Textarea
                id="comments"
                placeholder="Describe tus necesidades, objetivos o el problema que querés resolver..."
                className="mt-1 min-h-[100px]"
                {...register("comments")}
              />
              <FieldError message={errors.comments?.message} />
            </div>

            {/* Perfil */}
            <div style={{ marginTop: "10px" }}>
              <p style={{ fontWeight: "600", marginBottom: "10px", color: "#1E2A3A" }}>
                Para finalizar tu registro, seleccioná tu perfil<span style={{ color: "red" }}>*</span>
              </p>
              <label style={{ display: "flex", alignItems: "flex-start", gap: "8px", cursor: "pointer", marginBottom: "8px" }}>
                <input
                  type="checkbox"
                  checked={perfilPersonal === true}
                  onChange={(e) => setValue("perfil_personal", e.target.checked, { shouldValidate: true })}
                  style={{ marginTop: "4px" }}
                />
                <span style={{ color: "#5A6470", fontSize: "0.9rem" }}>No tengo NIT, tengo un interés puramente personal y/o profesional</span>
              </label>
              <label style={{ display: "flex", alignItems: "flex-start", gap: "8px", cursor: "pointer" }}>
                <input
                  type="checkbox"
                  checked={perfilEmpresa === true}
                  onChange={(e) => setValue("perfil_empresa", e.target.checked, { shouldValidate: true })}
                  style={{ marginTop: "4px" }}
                />
                <span style={{ color: "#5A6470", fontSize: "0.9rem" }}>Hago parte o tengo un negocio registrado en Cámara de Comercio</span>
              </label>
            </div>

            {/* Consentimiento */}
            <p style={{ fontSize: "0.85rem", color: "#5A6470", marginTop: "15px", lineHeight: "1.5" }}>
              Al marcar la siguiente casilla, autorizás expresamente el tratamiento de sus datos personales, por parte de la Cámara de Comercio de Barranquilla, conforme a la{" "}
              <a
                href="https://www.camarabaq.org.co/acerca-de-nosotros/politica-de-privacidad-de-datos-personales-de-la-camara-de-comercio-de-barranquilla/"
                target="_blank"
                rel="noopener"
                style={{ color: "#0066cc", textDecoration: "underline" }}
              >
                Política de tratamiento de datos personales
              </a>{" "}
              y el{" "}
              <a
                href="https://www.camarabaq.org.co/wp-content/uploads/2023/08/privacidad.pdf"
                target="_blank"
                rel="noopener"
                style={{ color: "#0066cc", textDecoration: "underline" }}
              >
                Aviso de Privacidad
              </a>
            </p>

            <div style={{ marginTop: "10px" }}>
              <p style={{ fontWeight: "600", marginBottom: "8px", color: "#1E2A3A" }}>Tratamiento de datos personales</p>
              <label style={{ display: "flex", alignItems: "flex-start", gap: "8px", cursor: "pointer" }}>
                <input
                  type="checkbox"
                  {...register("autorizo_datos")}
                  style={{ marginTop: "4px" }}
                />
                <span style={{ color: "#5A6470", fontSize: "0.9rem" }}>Autorizo el tratamiento de mis datos personales</span>
              </label>
              <FieldError message={errors.autorizo_datos?.message} />
            </div>

            {status === "error" && (
              <p
                style={{
                  color: "#e53e3e",
                  fontSize: "0.9rem",
                  textAlign: "center",
                  marginTop: "8px",
                }}
              >
                {errorMessage || "Hubo un error al enviar el formulario. Por favor intentá de nuevo."}
              </p>
            )}

            <div style={{ marginTop: "10px" }}>
              <Button
                type="submit"
                size="lg"
                className="w-full"
                disabled={status === "loading"}
                style={{ background: "#FF6B35" }}
              >
                {status === "loading" ? "Enviando..." : "Enviar Solicitud 📧"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}