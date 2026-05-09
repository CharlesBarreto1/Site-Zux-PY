import { MapPin, Check, Clock } from "lucide-react";

const ciudadesActivas = [
  { name: "Doctor Juan León Mallorquín", state: "Alto Paraná" },
];

const ciudadesProximas = [
  { name: "O'Leary", state: "Alto Paraná" },
  { name: "Campo 9", state: "Caaguazú" },
  { name: "Santa Rita", state: "Alto Paraná" },
];

export function Cobertura() {
  return (
    <section id="cobertura" className="section-padding">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <MapPin className="mx-auto mb-4 h-10 w-10 text-primary" />
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-3">
            Cobertura
          </p>
          <h2 className="text-3xl font-bold md:text-5xl">
            Expandiendo la mejor red
            <br />
            <span className="gradient-text">del Paraguay</span>
          </h2>
          <p className="mt-6 text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Empezamos en el Alto Paraná y vamos sumando ciudades sin pausa.
            Nuestra meta es llevar internet en serio a todo el país.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {/* Disponible ahora */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <Check className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                  Disponible ahora
                </p>
                <h3 className="text-lg font-bold">Ya estamos acá</h3>
              </div>
            </div>
            <ul className="space-y-3">
              {ciudadesActivas.map((c) => (
                <li
                  key={c.name}
                  className="flex items-center justify-between rounded-lg border border-primary/20 bg-primary/5 px-4 py-3"
                >
                  <span className="font-medium">{c.name}</span>
                  <span className="text-xs text-muted-foreground">{c.state}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Próximamente */}
          <div className="glass-card-hover p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
                <Clock className="h-5 w-5 text-muted-foreground" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Próximamente
                </p>
                <h3 className="text-lg font-bold">Vamos en camino</h3>
              </div>
            </div>
            <ul className="space-y-3">
              {ciudadesProximas.map((c) => (
                <li
                  key={c.name}
                  className="flex items-center justify-between rounded-lg border border-border/50 px-4 py-3"
                >
                  <span className="font-medium text-muted-foreground">{c.name}</span>
                  <span className="text-xs text-muted-foreground">{c.state}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs text-muted-foreground italic">
              Y muchas más, mbeguemi pero seguro.
            </p>
          </div>
        </div>

        <div className="mt-10 glass-card p-8 md:p-12 text-center">
          <p className="text-lg font-semibold mb-2">
            ¿Querés saber si ya llegamos a tu zona?
          </p>
          <p className="text-sm text-muted-foreground mb-6">
            Escribinos por WhatsApp y te confirmamos al toque.
          </p>
          <a
            href="https://wa.me/595984056260"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 gradient-primary rounded-lg px-8 py-3 font-semibold text-primary-foreground transition-transform hover:scale-105"
          >
            Consultar cobertura
          </a>
        </div>
      </div>
    </section>
  );
}
