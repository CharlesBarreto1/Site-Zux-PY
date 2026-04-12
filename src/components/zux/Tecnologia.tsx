import { Server, Activity, Gauge, ShieldCheck } from "lucide-react";

const techItems = [
  {
    icon: Server,
    title: "Equipos de alto rendimiento",
    desc: "Hardware de clase empresarial en cada nodo de nuestra red.",
  },
  {
    icon: Activity,
    title: "Red diseñada para estabilidad",
    desc: "Arquitectura redundante que garantiza conexión continua.",
  },
  {
    icon: Gauge,
    title: "Baja latencia garantizada",
    desc: "Optimización de rutas para la menor latencia posible.",
  },
  {
    icon: ShieldCheck,
    title: "Seguridad de nivel corporativo",
    desc: "Protección avanzada contra amenazas en toda la red.",
  },
];

export function Tecnologia() {
  return (
    <section id="tecnologia" className="section-padding relative overflow-hidden">
      {/* Subtle glow background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          {/* Left text */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-3">
              Tecnología
            </p>
            <h2 className="text-3xl font-bold md:text-5xl">
              Infraestructura de
              <br />
              <span className="gradient-text">nivel mundial</span>
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Utilizamos tecnología europea y americana de última generación.
              Nada de soluciones económicas de baja calidad. Solo lo mejor para
              garantizar rendimiento real en cada conexión.
            </p>
            <p className="mt-4 text-sm font-medium text-primary/80">
              "No usamos tecnología barata. Usamos lo mejor del mundo."
            </p>
          </div>

          {/* Right grid */}
          <div className="grid gap-4 sm:grid-cols-2">
            {techItems.map((item) => (
              <div key={item.title} className="glass-card-hover p-6">
                <item.icon className="mb-3 h-7 w-7 text-primary" />
                <h3 className="mb-1 font-semibold">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
