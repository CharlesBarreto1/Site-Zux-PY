import { Header } from "@/components/zux/Header";
import { Hero } from "@/components/zux/Hero";
import { Diferenciales } from "@/components/zux/Diferenciales";
import { Planes } from "@/components/zux/Planes";
import { Tecnologia } from "@/components/zux/Tecnologia";
import { Empresas } from "@/components/zux/Empresas";
import { Cobertura } from "@/components/zux/Cobertura";
import { CTAFinal } from "@/components/zux/CTAFinal";
import { Footer } from "@/components/zux/Footer";
import { WhatsAppButton } from "@/components/zux/WhatsAppButton";
import { useDocumentMeta } from "@/hooks/use-document-meta";

export default function Index() {
  useDocumentMeta({
    title: "Zux — La Mejor Internet del Paraguay",
    description:
      "Internet de fibra óptica premium con velocidad simétrica real, estabilidad total y tecnología de nivel mundial. Planes desde 130.000 Gs.",
    ogTitle: "Zux — La Mejor Internet del Paraguay",
    ogDescription: "Velocidad simétrica real. Estabilidad total. Tecnología de nivel mundial.",
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Diferenciales />
      <Planes />
      <Tecnologia />
      <Empresas />
      <Cobertura />
      <CTAFinal />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
