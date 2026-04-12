import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-city.jpg";

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Ciudad conectada con fibra óptica"
          className="h-full w-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-4 text-center">
        <div className="opacity-0 animate-slide-up">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-primary">
            Internet Premium en Paraguay
          </p>
          <h1 className="text-4xl font-black leading-tight tracking-tight md:text-6xl lg:text-7xl">
            La mejor internet
            <br />
            <span className="gradient-text neon-text">del Paraguay</span>
          </h1>
        </div>

        <div className="opacity-0 animate-slide-up-delay">
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
            Velocidad simétrica real. Estabilidad total. Tecnología de nivel mundial.
          </p>
          <p className="mt-3 text-sm font-medium text-primary/80 italic">
            No es marketing. Es ingeniería.
          </p>
        </div>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center opacity-0 animate-slide-up-delay">
          <Button variant="hero" size="xl" asChild>
            <a href="https://wa.me/595000000000" target="_blank" rel="noopener noreferrer">
              Contratar ahora
            </a>
          </Button>
          <Button variant="heroOutline" size="xl" asChild>
            <a href="https://wa.me/595000000000" target="_blank" rel="noopener noreferrer">
              Hablar por WhatsApp
            </a>
          </Button>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
