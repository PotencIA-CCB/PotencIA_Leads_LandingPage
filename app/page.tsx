import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { ServicioUnificado } from "@/components/sections/ServicioUnificado";
import { CasosDeUso } from "@/components/sections/CasosDeUso";
import { Formulario } from "@/components/sections/Formulario";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ServicioUnificado />
        <CasosDeUso />
        <Formulario />
      </main>
      <Footer />
    </>
  );
}
