import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "ConsultorIA — Cámara de Comercio de Barranquilla",
  description:
    "Sesiones personalizadas de IA para potenciar tu trabajo. Construí soluciones reales en 1–2 horas con expertos PotencIA.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${poppins.variable} font-sans`}>{children}</body>
    </html>
  );
}
