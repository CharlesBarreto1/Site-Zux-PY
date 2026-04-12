import { Zap, Shield, Globe, Brain, Wrench, MapPin } from "lucide-react";

const items = [
  {
    icon: Zap,
    title: "Velocidad simétrica real",
    desc: "Misma velocidad de subida y bajada. Sin trucos, sin letras chicas.",
  },
  {
    icon: Shield,
    title: "Conexión ultra estable",
    desc: "Red diseñada para cero cortes. Estabilidad que se siente.",
  },
  {
    icon: Globe,
    title: "Fibra óptica de última generación",
    desc: "Infraestructura premium con la mejor tecnología disponible.",
  },
  {
    icon: Brain,
    title: "Ingeniería de nivel internacional",
    desc: "Diseño de red con estándares europeos y americanos.",
  },
  {
    icon: Wrench,
    title: "Soporte rápido y eficiente",
    desc: "Atención técnica real por personas que saben lo que hacen.",
  },
  {
    icon: MapPin,
    title: "Presencia local en Paraguay",
    desc: "Tecnología global con atención cercana y personalizada.",
  },
];

export function Diferenciales() {
  return (
    <section id="diferenciales" className="section-padding">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-3">
            ¿Por qué Zux?
          </p>
          <h2 className="text-3xl font-bold md:text-5xl">
            No es una operadora más
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Cada detalle de nuestra red está diseñado para ofrecer rendimiento real, no promesas.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <div key={item.title} className="glass-card-hover p-8">
              <item.icon className="mb-4 h-8 w-8 text-primary" />
              <h3 className="mb-2 text-lg font-semibold">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
