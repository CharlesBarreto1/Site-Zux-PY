import { Zap, Shield, Globe, Brain, Wrench, MapPin } from "lucide-react";

const items = [
  {
    icon: Zap,
    title: "Subida y bajada iguales",
    desc: "Misma velocidad para subir y para bajar. Sin trucos, sin letras chicas, sin sorpresas a fin de mes.",
  },
  {
    icon: Shield,
    title: "Conexión que no cae",
    desc: "Red diseñada para aguantar. Estable de verdad — no de promesa de vendedor.",
  },
  {
    icon: Globe,
    title: "Fibra óptica de las buenas",
    desc: "Infraestructura de primera, traída desde afuera y montada con cuidado acá.",
  },
  {
    icon: Brain,
    title: "Ingeniería sin atajos",
    desc: "Diseño de red con estándares internacionales. Hecho para durar muchos años, no para salir del paso.",
  },
  {
    icon: Wrench,
    title: "Soporte de carne y hueso",
    desc: "Atención técnica con personas que entienden. Sin bots, sin call center genérico, sin guiones.",
  },
  {
    icon: MapPin,
    title: "Ñande reko · Atención de acá",
    desc: "Tecnología internacional con cabeza paraguaya. Te entendemos porque somos vecinos.",
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
            No somos una operadora más
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Cada detalle de nuestra red está pensado para rendir de verdad. Sin promesas vacías.
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
