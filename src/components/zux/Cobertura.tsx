import { MapPin } from "lucide-react";

export function Cobertura() {
  return (
    <section id="cobertura" className="section-padding">
      <div className="mx-auto max-w-4xl text-center">
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
          Actualmente brindamos cobertura en <span className="text-foreground font-semibold">Doctor Juan León Mallorquín</span>, llevando internet de nivel mundial con fibra óptica de última generación. Pronto en más ciudades del país.
        </p>
        <div className="mt-10 glass-card p-8 md:p-12">
          <p className="text-lg font-semibold mb-2">
            ¿Querés saber si llegamos a tu zona?
          </p>
          <p className="text-sm text-muted-foreground mb-6">
            Escribinos por WhatsApp y te confirmamos la cobertura al instante.
          </p>
          <a
            href="https://wa.me/595000000000"
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
