import { NextRequest, NextResponse } from "next/server";
import { LeadSchema } from "@/lib/validations";
import { supabase } from "@/lib/supabase";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = LeadSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const dataToInsert = {
      full_name: parsed.data.full_name,
      id_num: parsed.data.id_num,
      nit: parsed.data.nit || null,
      email: parsed.data.email,
      phone: parsed.data.phone,
      city: parsed.data.city,
      company_role_level: parsed.data.company_role_level,
      company_role_area: parsed.data.company_role_area,
      solution: parsed.data.solution,
      use_case: parsed.data.use_case || null,
      comments: parsed.data.comments,
      perfil_personal: parsed.data.perfil_personal === true ? true : (parsed.data.perfil_personal === false ? false : null),
      perfil_empresa: parsed.data.perfil_empresa === true ? true : (parsed.data.perfil_empresa === false ? false : null),
      autorizo_datos: parsed.data.autorizo_datos === true ? true : (parsed.data.autorizo_datos === false ? false : null),
    };

    const { error } = await supabase.from("leads").insert([dataToInsert]);

    if (error) {
      console.error("Supabase insert error:", error);
      return NextResponse.json({ error: "Error al guardar los datos" }, { status: 500 });
    }

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (err) {
    console.error("Unexpected error:", err);
    return NextResponse.json({ error: "Error inesperado" }, { status: 500 });
  }
}
