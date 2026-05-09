import { Server, Activity, Gauge, ShieldCheck } from "lucide-react";

const techItems = [
  {
    icon: Server,
    title: "Equipos de los buenos",
    desc: "Hardware de clase empresarial en cada nodo. Nada de equipos baratos que después fallan.",
  },
  {
    icon: Activity,
    title: "Red diseñada para no caer",
    desc: "Arquitectura redundante: si un camino falla, hay otros listos. Tu conexión sigue.",
  },
  {
    icon: Gauge,
    title: "Latencia baja, gaming sin lag",
    desc: "Optimización de rutas para la menor latencia posible. Streamers y gamers nos prefieren.",
  },
  {
    icon: ShieldCheck,
    title: "Seguridad seria",
    desc: "Protección de nivel corporativo en toda la red. Tus datos quedan donde tienen que quedar.",
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
              Infraestructura
              <br />
              <span className="gradient-text">de primera</span>
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Trabajamos con tecnología internacional de las buenas — equipos europeos
              y americanos. Nada de soluciones baratas que después fallan. Solo lo
              mejor para que tu conexión rinda en serio, todos los días.
            </p>
            <p className="mt-4 text-sm font-medium text-primary/80">
              "No usamos lo barato. Usamos lo bueno."
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
