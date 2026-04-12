import { Star } from "lucide-react";

const testimonios = [
  {
    name: "Carlos M.",
    role: "Emprendedor digital",
    text: "Después de probar varias operadoras, Zux es otra cosa. La velocidad de subida es real, no como las demás que solo prometen.",
  },
  {
    name: "María G.",
    role: "Diseñadora gráfica",
    text: "Trabajo con archivos pesados todo el día. Desde que tengo Zux, las subidas y descargas son instantáneas. No vuelvo atrás.",
  },
  {
    name: "Roberto A.",
    role: "Gerente de TI",
    text: "Conectamos toda nuestra oficina con Zux. Cero cortes en 8 meses. El soporte técnico responde de verdad.",
  },
];

export function Testimonios() {
  return (
    <section className="section-padding">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-3">
            Testimonios
          </p>
          <h2 className="text-3xl font-bold md:text-5xl">
            Lo que dicen nuestros clientes
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonios.map((t) => (
            <div key={t.name} className="glass-card-hover p-8">
              <div className="mb-4 flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="mb-6 text-sm leading-relaxed text-muted-foreground italic">
                "{t.text}"
              </p>
              <div>
                <p className="font-semibold">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
