import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/zux/Header";
import { Hero } from "@/components/zux/Hero";
import { Diferenciales } from "@/components/zux/Diferenciales";
import { Planes } from "@/components/zux/Planes";
import { Tecnologia } from "@/components/zux/Tecnologia";
import { Empresas } from "@/components/zux/Empresas";
import { Testimonios } from "@/components/zux/Testimonios";
import { Cobertura } from "@/components/zux/Cobertura";
import { CTAFinal } from "@/components/zux/CTAFinal";
import { Footer } from "@/components/zux/Footer";
import { WhatsAppButton } from "@/components/zux/WhatsAppButton";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Zux — La Mejor Internet del Paraguay" },
      { name: "description", content: "Internet de fibra óptica premium con velocidad simétrica real, estabilidad total y tecnología de nivel mundial. Planes desde 130.000 Gs." },
      { property: "og:title", content: "Zux — La Mejor Internet del Paraguay" },
      { property: "og:description", content: "Velocidad simétrica real. Estabilidad total. Tecnología de nivel mundial." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Diferenciales />
      <Planes />
      <Tecnologia />
      <Empresas />
      <Testimonios />
      <Cobertura />
      <CTAFinal />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
