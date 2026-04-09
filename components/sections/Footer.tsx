import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-[#E5E7EB] bg-[#1E2A3A] py-12 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <p className="mb-1 text-lg font-bold">ConsultorIA</p>
            <p className="mb-4 text-xs font-medium uppercase tracking-widest text-white/50">
              by PotencIA
            </p>
            <p className="text-sm leading-relaxed text-white/60">
              Servicio de consultoría personalizada en Inteligencia Artificial para
              empresas. Un programa de la Cámara de Comercio de Barranquilla.
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-white/50">
              Navegación
            </p>
            <ul className="space-y-2 text-sm text-white/70">
              {[
                ["Beneficios", "#beneficios"],
                ["Metodología", "#metodologia"],
                ["Casos de Uso", "#casos-de-uso"],
                ["Formulario", "#formulario"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="transition-colors hover:text-white">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-white/50">
              Contacto
            </p>
            <p className="text-sm text-white/70">
              Cámara de Comercio de Barranquilla
            </p>
            <p className="mt-1 text-sm text-white/70">Barranquilla, Colombia</p>
            <a
              href="mailto:potencia@camarabaq.org.co"
              className="mt-3 inline-block text-sm text-sky transition-colors hover:text-sky/80"
            >
              potencia@camarabaq.org.co
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 border-t border-white/10 pt-6 flex flex-col items-center gap-2 text-center text-xs text-white/40 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} Cámara de Comercio de Barranquilla. Todos los derechos reservados.</p>
          <p>Desarrollado por PotencIA</p>
        </div>
      </div>
    </footer>
  );
}
