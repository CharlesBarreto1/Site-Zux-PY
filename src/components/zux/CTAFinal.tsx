import { Button } from "@/components/ui/button";

export function CTAFinal() {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/10 blur-[150px]" />

      <div className="relative mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold md:text-5xl">
          Conéctate con
          <br />
          <span className="gradient-text neon-text">lo mejor</span>
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Experimentá la diferencia real. Internet premium, sin excusas.
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button variant="hero" size="xl" asChild>
            <a href="https://wa.me/595984056260" target="_blank" rel="noopener noreferrer">
              Contratar ahora
            </a>
          </Button>
          <Button variant="heroOutline" size="xl" asChild>
            <a href="https://wa.me/595984056260" target="_blank" rel="noopener noreferrer">
              Hablar por WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
