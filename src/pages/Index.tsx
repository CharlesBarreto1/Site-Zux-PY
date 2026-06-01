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
import { SeoPT } from "@/components/zux/SeoPT";
import { useDocumentMeta } from "@/hooks/use-document-meta";

export default function Index() {
  useDocumentMeta({
    title: "Zux — La Mejor Internet del Paraguay | Fibra Óptica en Alto Paraná",
    description:
      "Internet de fibra óptica premium en Santa Rita, Juan León Mallorquín y todo el Alto Paraná. Velocidad simétrica real, estabilidad total y soporte local. Planes desde 125.000 Gs.",
    ogTitle: "Zux — La Mejor Internet del Paraguay",
    ogDescription:
      "Fibra óptica con velocidad simétrica real en Santa Rita, Mallorquín y todo el Alto Paraná. Estabilidad total. Tecnología de nivel mundial, atención de acá.",
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
      <SeoPT />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
