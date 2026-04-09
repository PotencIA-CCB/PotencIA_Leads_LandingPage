import { z } from "zod";

export const LeadSchema = z.object({
  full_name: z.string().min(1, "El nombre es requerido"),
  id_num: z.string().min(1, "El documento es requerido"),
  nit: z.string().optional(),
  email: z.string().email("Ingresá un correo válido"),
  phone: z.string().min(7, "El celular debe tener al menos 7 dígitos"),
  city: z.string().min(1, "La ciudad es requerida"),
  company_role_level: z.string().min(1, "El nivel del cargo es requerido"),
  company_role_area: z.string().min(1, "El área del cargo es requerida"),
  solution: z.string().min(1, "Seleccioná una solución"),
  use_case: z.string().optional(),
  comments: z.string().min(10, "El mensaje debe tener al menos 10 caracteres"),
  perfil_personal: z.boolean().optional(),
  perfil_empresa: z.boolean().optional(),
  autorizo_datos: z.boolean().refine((val) => val === true, {
    message: "Debés autorizar el tratamiento de datos",
  }),
});

export type LeadInput = z.infer<typeof LeadSchema>;
