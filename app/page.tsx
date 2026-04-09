import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Beneficios } from "@/components/sections/Beneficios";
import { Metodologia } from "@/components/sections/Metodologia";
import { AntesDuranteDespues } from "@/components/sections/AntesDuranteDespues";
import { Alcances } from "@/components/sections/Alcances";
import { CasosDeUso } from "@/components/sections/CasosDeUso";
import { Formulario } from "@/components/sections/Formulario";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Beneficios />
        <Metodologia />
        <AntesDuranteDespues />
        <Alcances />
        <CasosDeUso />
        <Formulario />
      </main>
      <Footer />
    </>
  );
}
