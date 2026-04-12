import { Button } from "@/components/ui/button";
import { Building2, Link2, Clock, Gauge } from "lucide-react";

const features = [
  { icon: Building2, label: "Internet corporativo dedicado" },
  { icon: Link2, label: "Enlaces dedicados punto a punto" },
  { icon: Clock, label: "SLA garantizado con respuesta inmediata" },
  { icon: Gauge, label: "Baja latencia para operaciones críticas" },
];

export function Empresas() {
  return (
    <section id="empresas" className="section-padding">
      <div className="mx-auto max-w-7xl">
        <div className="glass-card p-8 md:p-16 relative overflow-hidden">
          {/* Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-primary/8 blur-[100px]" />

          <div className="relative grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-3">
                Empresas
              </p>
              <h2 className="text-3xl font-bold md:text-4xl">
                Para empresas que
                <br />
                <span className="gradient-text">no pueden fallar</span>
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Soluciones de conectividad empresarial con los más altos
                estándares de disponibilidad y rendimiento. Tu operación no se
                detiene, y tu internet tampoco.
              </p>
              <Button variant="hero" size="lg" className="mt-8" asChild>
                <a href="https://wa.me/595000000000" target="_blank" rel="noopener noreferrer">
                  Solicitar propuesta
                </a>
              </Button>
            </div>

            <div className="space-y-4">
              {features.map((f) => (
                <div key={f.label} className="flex items-center gap-4 glass-card-hover p-5">
                  <f.icon className="h-6 w-6 flex-shrink-0 text-primary" />
                  <span className="font-medium">{f.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
