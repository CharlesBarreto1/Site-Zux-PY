import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const planes = [
  {
    name: "Plan 500",
    speed: "500 Mbps",
    price: "130.000",
    desc: "Ideal para hogares exigentes",
    features: ["500 Mbps simétricos", "Fibra óptica directa", "Equipo Wi-Fi 5 incluido", "Soporte técnico prioritario", "Sin límite de datos"],
    popular: false,
  },
  {
    name: "Plan 750",
    speed: "750 Mbps",
    price: "170.000",
    desc: "Más vendido — rendimiento superior",
    features: ["750 Mbps simétricos", "Fibra óptica directa", "Equipo Wi-Fi 6E incluido", "Soporte técnico prioritario", "Sin límite de datos"],
    popular: true,
  },
  {
    name: "Plan 1 Giga",
    speed: "1 Gbps",
    price: "220.000",
    desc: "Máximo rendimiento sin compromisos",
    features: ["1 Gbps simétrico", "Fibra óptica directa", "Equipo Wi-Fi 6E incluido", "1 punto mesh adicional gratis", "Soporte técnico VIP", "Sin límite de datos", "Prioridad de instalación"],
    popular: false,
  },
];

export function Planes() {
  return (
    <section id="planes" className="section-padding">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-3">
            Planes
          </p>
          <h2 className="text-3xl font-bold md:text-5xl">
            Velocidad real, precio justo
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Todos nuestros planes son 100% simétricos. La misma velocidad de subida y bajada.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {planes.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-2xl p-8 transition-all duration-300 ${
                plan.popular
                  ? "glass-card border-primary/50 neon-glow scale-[1.02]"
                  : "glass-card-hover"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="gradient-primary rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary-foreground">
                    Más vendido
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-bold">{plan.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{plan.desc}</p>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-black gradient-text">{plan.speed}</span>
                </div>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-primary">
                  ↑↓ Simétrico
                </p>
              </div>

              <div className="mb-6">
                <span className="text-2xl font-bold">{plan.price}</span>
                <span className="text-sm text-muted-foreground"> Gs/mes</span>
              </div>

              <ul className="mb-8 flex-1 space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm text-surface-foreground">
                    <Check className="h-4 w-4 flex-shrink-0 text-primary" />
                    {f}
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.popular ? "hero" : "heroOutline"}
                size="lg"
                className="w-full"
                asChild
              >
                <a href="https://wa.me/595000000000" target="_blank" rel="noopener noreferrer">
                  Contratar
                </a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
