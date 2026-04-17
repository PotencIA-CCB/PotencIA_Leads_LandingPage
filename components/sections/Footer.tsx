import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border bg-primary-deep py-12 text-surface">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <p className="font-heading mb-1 text-lg font-bold">ConsultorIA</p>
            <p className="mb-4 text-xs font-medium uppercase tracking-widest text-surface/60">
              by PotencIA
            </p>
            <p className="text-sm leading-relaxed text-surface/75">
              Servicio de consultoría personalizada en Inteligencia Artificial para
              empresas. Un programa de la Cámara de Comercio de Barranquilla.
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-surface/60">
              Navegación
            </p>
            <ul className="space-y-2 text-sm text-surface/75">
              {[
                ["El Servicio", "#servicio"],
                ["Casos de Uso", "#casos-de-uso"],
                ["Formulario", "#formulario"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="transition-colors hover:text-accent">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-surface/60">
              Contacto
            </p>
            <p className="text-sm text-surface/75">
              Cámara de Comercio de Barranquilla
            </p>
            <p className="mt-1 text-sm text-surface/75">Barranquilla, Colombia</p>
            <a
              href="mailto:potencia@camarabaq.org.co"
              className="mt-3 inline-block text-sm text-accent transition-colors hover:text-accent/80"
            >
              potencia@camarabaq.org.co
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col items-center gap-2 border-t border-surface/15 pt-6 text-center text-xs text-surface/50 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} Cámara de Comercio de Barranquilla. Todos los derechos reservados.</p>
          <p>Desarrollado por PotencIA</p>
        </div>
      </div>
    </footer>
  );
}
